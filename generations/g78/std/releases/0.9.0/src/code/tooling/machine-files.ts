// The project's files on the machine, from the directory the program runs in: read and written as UTF-8, copied with
// their folders made as needed; a fingerprint is the SHA-256 digest of the content, in hexadecimal.

import { existsSync, readFileSync, writeFileSync, copyFileSync, mkdirSync } from "node:fs"
import { dirname } from "node:path"
import { createHash } from "node:crypto"
import type { BodyOf } from "../../../../../../trame/kernel"
import type { MachineFiles } from "../../tooling"

const body: BodyOf<typeof MachineFiles> = ({ sha, encodings }) => ({
  exists: (path) => existsSync(path),
  read: (path) => readFileSync(path, encodings.utf8 as BufferEncoding),
  write: (path, content) => {
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, content, encodings.utf8 as BufferEncoding)
  },
  copy: (from, to) => {
    mkdirSync(dirname(to), { recursive: true })
    copyFileSync(from, to)
  },
  fingerprint: (path) => createHash(sha.algorithm).update(readFileSync(path)).digest(encodings.hex as "hex"),
})

export default body
