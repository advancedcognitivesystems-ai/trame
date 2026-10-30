// Files in memory, over the disk: what a scenario's engine writes stays in memory and is read back first; the disk
// underneath is read, never written. Trees are copied, linked and removed in memory, compared in the unified format; a
// watch is told of each file written under it. A scenario reads what was written through the write log.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { MemoryFiles } from "../../platform"

type Listener = (event: string, file: string) => void

const body: BodyOf<typeof MemoryFiles> = ({ paths, temporary, diff, file, events, encodings, texts, counts, sequences, values, messages }) => {
  const { resolve, join, relative, dirname, sep } = paths
  const { zero, one, next } = counts
  const { empty, concat } = texts
  const files = new Map<string, string>()
  const directories = new Set<string>()
  /** Paths of the disk removed in memory: neither they nor what is under them exist any more. */
  const removed = new Set<string>()
  /** Links made in memory: a path, and the path it leads to. */
  const links = new Map<string, string>()
  const watchers: { path: string; listener: Listener }[] = []
  let made: number = zero

  const under = (path: string, dir: string) => path === dir || path.startsWith(dir + sep)
  /** A path as it is reached: through the links made in memory. */
  const through = (path: string): string => {
    for (const [at, target] of links) if (under(path, at)) return join(target, relative(at, path))
    return path
  }
  const at = (p: unknown) => through(resolve(String(p)))
  const gone = (path: string) => [...removed].some((r) => under(path, r))
  const onDisk = (path: string) => !gone(path) && existsSync(path)
  const inMemory = (dir: string) => [...files.keys()].filter((f) => f.startsWith(dir + sep))
  const isDirectory = (path: string) =>
    directories.has(path) || sequences.head(inMemory(path)) !== undefined || (onDisk(path) && statSync(path).isDirectory())
  const exists = (path: string) => files.has(path) || isDirectory(path) || onDisk(path)

  /** Every file under a directory, relative to it, in the order of their code points. */
  const listing = (dir: string): string[] => {
    const memory = inMemory(dir).map((f) => relative(dir, f))
    const disk = onDisk(dir) && statSync(dir).isDirectory()
      ? (readdirSync(dir, { recursive: true }) as string[]).filter((f) => !gone(join(dir, f)) && statSync(join(dir, f)).isFile())
      : []
    return [...new Set([...memory, ...disk])].sort()
  }
  const read = (path: string): string => {
    const known = files.get(path)
    if (known !== undefined) return known
    if (!onDisk(path)) throw new Error(messages.noSuchFileInMemory(path))
    return readFileSync(path, encodings.utf8)
  }
  const write = (path: string, content: string) => {
    files.set(path, content)
    for (const w of watchers) if (under(path, w.path)) w.listener(events.change, relative(w.path, path))
  }

  /** Two texts in the unified format: one hunk, every line of the first removed, every line of the second added. */
  const unified = (a: string, b: string, before: string, after: string): string => {
    const lines = (text: string) => (text === empty ? [] : text.split(file.endOfLine))
    const [x, y] = [lines(before), lines(after)]
    const range = (start: number, count: number) => start + diff.rangeSeparator + count
    return concat([
      diff.oldFile, texts.space, a, file.endOfLine, diff.newFile, texts.space, b, file.endOfLine,
      diff.hunk, texts.space, diff.removed, range(one, x.length), texts.space, diff.added, range(one, y.length), texts.space, diff.hunk, file.endOfLine,
      ...x.map((l) => diff.removed + l + file.endOfLine), ...y.map((l) => diff.added + l + file.endOfLine),
    ])
  }

  return {
    existsSync: ((p: unknown) => exists(at(p))) as never,
    readFileSync: ((p: unknown) => read(at(p))) as never,
    statSync: ((p: unknown) => {
      const path = at(p)
      if (!exists(path)) throw new Error(messages.noSuchFileInMemory(path))
      return { isFile: () => !isDirectory(path), isDirectory: () => isDirectory(path) }
    }) as never,
    readdirSync: ((p: unknown, options?: { recursive?: boolean; withFileTypes?: boolean }) => {
      const dir = at(p)
      const all = listing(dir)
      const names = options?.recursive
        ? [...new Set(all.flatMap((f) => [f, ...ancestors(f)]))].sort()
        : [...new Set(all.map((f) => sequences.head(f.split(sep)) ?? f))].sort()
      // With their types, as Node gives them: a name, and what it is.
      return options?.withFileTypes
        ? names.map((name) => ({ name, parentPath: dir, isFile: () => !isDirectory(join(dir, name)), isDirectory: () => isDirectory(join(dir, name)) }))
        : names
    }) as never,
    watch: ((p: unknown, second: unknown, third?: unknown) => {
      const listener = (values.isFunction(second) ? second : third) as Listener
      watchers.push({ path: at(p), listener })
      return { close: () => undefined }
    }) as never,
    writeFileSync: ((p: unknown, content: unknown) => write(at(p), String(content))) as never,
    mkdirSync: ((p: unknown) => void directories.add(at(p))) as never,
    written: () => files,

    temporary: () => {
      made = next(made)
      const dir = resolve(temporary.prefix + made)
      directories.add(dir)
      return dir
    },
    copy: (from, to) => {
      const [source, target] = [at(from), resolve(to)]
      if (!isDirectory(source)) return write(target, read(source))
      directories.add(target)
      for (const f of listing(source)) write(join(target, f), read(join(source, f)))
    },
    link: (target, path) => {
      const where = resolve(path)
      links.set(where, resolve(dirname(where), target))
    },
    remove: (path) => {
      const where = resolve(path)
      for (const f of [...files.keys()]) if (under(f, where)) files.delete(f)
      for (const d of [...directories]) if (under(d, where)) directories.delete(d)
      links.delete(where)
      removed.add(where)
    },
    files: (dir) => listing(at(dir)),
    differences: async (dir, a, b) => {
      const [x, y] = [at(resolve(dir, a)), at(resolve(dir, b))]
      if (!isDirectory(x) && !isDirectory(y)) return read(x) === read(y) ? empty : unified(a, b, read(x), read(y))
      const names = [...new Set([...listing(x), ...listing(y)])].sort()
      const text = (path: string) => (exists(path) ? read(path) : empty)
      return concat(names.filter((n) => text(join(x, n)) !== text(join(y, n))).map((n) => unified(join(a, n), join(b, n), text(join(x, n)), text(join(y, n)))))
    },
  }

  /** The directories a relative path is under, nearest last. */
  function ancestors(path: string): string[] {
    const parts = path.split(sep)
    return parts.slice(zero, parts.length - one).map((_, i) => parts.slice(zero, i + one).join(sep))
  }
}

export default body
