// Each line printed at once, on the standard output, ended as a terminal ends one.

import { EOL } from "node:os"
import type { BodyOf } from "#trame/kernel"
import type { StandardOutput } from "../../running"

const body: BodyOf<typeof StandardOutput> = () => ({ line: (text) => void process.stdout.write(text + EOL) })

export default body
