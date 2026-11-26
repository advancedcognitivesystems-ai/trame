// Files and directories, with Node's file system; their differences, with GNU diff (exit status: the same, they differ,
// or it failed).

import { spawn } from "node:child_process"
import { cpSync, mkdtempSync, readdirSync, rmSync, statSync, symlinkSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, sep } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { DiskTrees } from "../../platform"

const body: BodyOf<typeof DiskTrees> = ({ diff, node, events }) => ({
  temporary: () => mkdtempSync(join(tmpdir(), sep)),
  copy: (from, to) => cpSync(from, to, { recursive: true }),
  link: (target, path) => symlinkSync(target, path),
  remove: (path) => rmSync(path, { recursive: true, force: true }),
  files: (dir) => (readdirSync(dir, { recursive: true }) as string[]).filter((f) => statSync(join(dir, f)).isFile()).sort(),
  differences: (dir, a, b) =>
    new Promise((done, fail) => {
      const child = spawn(diff.program, [diff.options, a, b], { cwd: dir, stdio: [node.ignore, node.pipe, node.inherit] })
      const chunks: Buffer[] = []
      child.stdout.on(events.data, (chunk: Buffer) => chunks.push(chunk))
      child.on(events.error, fail)
      child.on(events.close, (status: number | null) => {
        if (status === diff.same || status === diff.differ) done(Buffer.concat(chunks).toString())
        else fail(new Error(Buffer.concat(chunks).toString()))
      })
    }),
})

export default body
