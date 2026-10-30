// The registry's reports, asked of npm: `npm audit --json` and `npm outdated --json` in the project. Both answer with a
// failure status when they find something: what they print is read all the same.

import { execFile } from "node:child_process"
import type { BodyOf } from "../../../trame/kernel"
import type { NpmReports } from "../../platform"

type Advisory = { title?: string; url?: string }

const body: BodyOf<typeof NpmReports> = ({ npm, values, counts, punctuation }) => {
  const ask = (cwd: string, what: string) =>
    new Promise<unknown>((done) => execFile(npm.command, [what, npm.json], { cwd, maxBuffer: Number.MAX_SAFE_INTEGER }, (_e, out) => done(out ? JSON.parse(String(out)) : {})))
  return {
    audit: async (root) => {
      const report = (await ask(root, npm.audit)) as { vulnerabilities?: Record<string, { severity: string; via: (string | Advisory)[] }> }
      return Object.entries(report.vulnerabilities ?? {}).map(([name, v]) => {
        const advisories = v.via.filter((x): x is Advisory => values.isObject(x))
        const [first] = advisories
        return { name, count: Math.max(advisories.length, counts.one), severity: v.severity, title: first?.title ?? v.via.join(punctuation.items), url: first?.url }
      })
    },
    outdated: async (root) => {
      const report = (await ask(root, npm.outdated)) as Record<string, { current?: string; latest?: string }>
      return Object.entries(report).filter(([, v]) => v.current && v.latest).map(([name, v]) => ({ name, current: v.current!, latest: v.latest! }))
    },
  }
}

export default body
