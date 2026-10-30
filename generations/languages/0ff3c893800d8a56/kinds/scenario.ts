import {
  defineKind, field, optional, edge, hole, doc, plural, Hole, Outcome, Status,
  type AnyNode, type Node, type Provided, type FileBody, type Inline, KindName } from "../trame/kernel"

/** What a scenario receives to say what it checks. */
export type Check = (name: string, ok: boolean) => void
export type Run = (check: Check) => Promise<void>

interface Result {
  name: string
  status: Outcome
  waiting?: { ref: string; title: string; suffix: string }
  error?: string
}

/**
 * A scenario: real code, wired in an environment (often "Test"), that checks an entry point or a requirement.
 * It runs at compile time, like acceptance criteria.
 */
const kind = defineKind({
  name: KindName.scenario,
  label: { one: "Scenario", many: "Scenarios" },
  order: 170,
  fields: {
    owner: field.owner(),
    deps: field.deps(),
    body: field.body(),
  },
  edges: {
    verifies: edge.many(["entry", "function", "requirement", "component"], { label: "Verifies", inverse: "Verified by" }),
    env: edge.one(["environment"], { label: "In", inverse: "Scenarios" }),
  },

  async evaluate(self, g): Promise<Result[]> {
    const out: Result[] = []
    const fail = (name: string, e: unknown) => {
      if (e instanceof Hole) {
        for (const v of self.verifies) g.blocked(e, "scenario", v)
        const v = g.view(e.node)
        out.push({ name, status: Outcome.blocked, waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : "" } })
      } else out.push({ name, status: Outcome.error, error: (e as Error).message })
    }
    let run: Run
    try {
      run = (await g.wire([{ name: "scenario", node: self }], self.env)).scenario as Run
    } catch (e) {
      fail("wiring", e)
      return out
    }
    try {
      await run((name, ok) => out.push({ name, status: ok ? Outcome.passed : Outcome.failed }))
    } catch (e) {
      fail(out.length ? "rest of the scenario" : "run", e)
    }
    return out
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return Status.unknown
    if (r.some((x) => x.status === Outcome.failed || x.status === Outcome.error)) return Status.violated
    if (r.some((x) => x.status === Outcome.blocked)) return Status.blocked
    return Status.held
  },

  holes: (self) =>
    (self.result<Result[]>() ?? [])
      .filter((r) => r.status === Outcome.failed || r.status === Outcome.error)
      .map((r) => hole.error(r.error ? `Scenario failed (${r.name}): ${r.error}` : `Check not met: "${r.name}"`)),

  render(self) {
    const r = self.result<Result[]>() ?? []
    const detail = (x: Result): Inline[] | undefined =>
      x.waiting ? ["waiting for the decision ", { t: "ref", ref: x.waiting.ref, title: x.waiting.title }, x.waiting.suffix] : x.error ? [x.error] : undefined
    return [doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detail(x) })), [self.title, " · in ", doc.ref(self.env)])]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
    const ok = all.filter((r) => r.status === Outcome.passed).length
    return `${plural(ok, "scenario check")} passed out of ${all.length}`
  },
})

type Deps = Record<string, AnyNode>

interface ScenarioInput<D extends Deps> {
  owner: string
  verifies: readonly Node<"entry" | "function" | "requirement" | "component">[]
  env: Node<"environment">
  deps: D
  body: ((deps: Provided<D>) => Run) | FileBody<(deps: Provided<D>) => Run>
}

export function scenario<D extends Deps>(input: ScenarioInput<D>): Node<"scenario"> {
  return kind(input as never) as never
}

export const scenarioKind = kind
