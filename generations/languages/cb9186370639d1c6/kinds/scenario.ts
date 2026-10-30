import {
  defineKind, field, edge, hole, doc, Hole, Outcome, Status, KindName, EdgeName,
  type AnyNode, type Node, type Provided, type FileBody, type Inline, type View, type Graph,
} from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * The status of code from what verifies it: the scenarios, and the checks whose program runs it on a machine. Violated
 * or blocked as soon as one is; held when all hold; unknown while nothing verifies it, or one has not held yet.
 */
export const verifiedStatus = (self: View, g: Graph): Status => {
  const all = g.from(self).in(EdgeName.verifies).nodes().map((s) => s.status)
  if (g.lib.counts.isEmpty(all)) return Status.unknown
  if (all.includes(Status.violated)) return Status.violated
  if (all.includes(Status.blocked)) return Status.blocked
  return all.every((s) => s === Status.held) ? Status.held : Status.unknown
}

/**
 * What runs when these nodes are wired in an environment: each node the wiring builds, and what those nodes use
 * directly in their code (a rule that calls another rule, a value read in the code), as far as it goes.
 */
export const wiredBy = (g: Graph, nodes: View[], env: View | undefined): View[] => {
  const runs = new Map(g.plan(nodes, env).steps.map((s) => [s.node.ref, s.node]))
  const pending = [...runs.values()]
  for (let v = pending.pop(); v !== undefined; v = pending.pop()) {
    for (const used of g.from(v).out(EdgeName.uses).nodes()) {
      if (runs.has(used.ref)) continue
      runs.set(used.ref, used)
      pending.push(used)
    }
  }
  return [...runs.values()]
}

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
  label: { one: say.scenarioScenario(), many: say.scenarioScenarios() },
  fields: {
    owner: field.owner(),
    deps: field.deps(),
    body: field.body(),
  },
  edges: {
    [EdgeName.verifies]: edge.many([KindName.entry, KindName.function, KindName.implementation, KindName.requirement, KindName.component], { label: say.scenarioVerifies(), inverse: say.scenarioVerifiedBy() }),
    env: edge.one([KindName.environment], { label: say.bindingIn(), inverse: say.scenarioScenarios() }),
  },

  async evaluate(self, g): Promise<Result[]> {
    const out: Result[] = []
    const fail = (name: string, e: unknown) => {
      if (e instanceof Hole) {
        for (const v of self.verifies) g.blocked(e, { one: say.scenarioNoun(), many: say.scenarioNouns() }, v)
        const v = g.view(e.node)
        out.push({ name, status: Outcome.blocked, waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : g.lib.texts.empty } })
      } else out.push({ name, status: Outcome.error, error: (e as Error).message })
    }
    let run: Run
    try {
      run = (await g.wire([{ name: self.ref, node: self }], self.env))[self.ref] as Run
    } catch (e) {
      fail(say.scenarioWiring(), e)
      return out
    }
    try {
      await run((name, ok) => out.push({ name, status: ok ? Outcome.passed : Outcome.failed }))
    } catch (e) {
      fail(g.lib.counts.any(out) ? say.scenarioRestOfTheScenario() : say.scenarioRun(), e)
    }
    return out
  },

  status(self, g) {
    const r = self.result<Result[]>()
    if (!r || g.lib.counts.isEmpty(r)) return Status.unknown
    if (r.some((x) => x.status === Outcome.failed || x.status === Outcome.error)) return Status.violated
    if (r.some((x) => x.status === Outcome.blocked)) return Status.blocked
    return Status.held
  },

  holes: (self, g) => {
    // What it says it verifies, it runs: a node its dependencies do not wire in its environment is a claim nothing backs.
    const wired = new Set(wiredBy(g, self.dependencies.map((d) => d.node), self.env).map((v) => v.ref))
    return [
      ...(self.result<Result[]>() ?? [])
        .filter((r) => r.status === Outcome.failed || r.status === Outcome.error)
        .map((r) => hole.error(r.error ? say.scenarioScenarioFailed(r.name, r.error) : say.scenarioCheckNotMet(r.name))),
      ...g.from(self).out(EdgeName.verifies).where((v) => !wired.has(v.ref)).nodes().map((v) => hole.error(say.scenarioVerifiesUnwired(v.title))),
    ]
  },

  render(self, g) {
    const r = self.result<Result[]>() ?? []
    const detail = (x: Result): Inline[] | undefined =>
      x.waiting ? [...say.acceptanceWaitingFor(doc.refTo(x.waiting)), x.waiting.suffix] : x.error ? [x.error] : undefined
    // The code it runs, as its environment wires it: what it may say it verifies.
    const code = new Set<string>([KindName.entry, KindName.function, KindName.implementation])
    const runs = wiredBy(g, self.dependencies.map((d) => d.node), self.env).filter((v) => code.has(v.kind))
    return [
      doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detail(x) })), [self.title, say.scenarioIn(), doc.ref(self.env)]),
      ...(g.lib.counts.any(runs) ? [doc.details(say.scenarioRuns(runs.length), [doc.para(...g.lib.lists.enumeration(runs.map(doc.ref)))])] : []),
    ]
  },

  summary(selves, g) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (g.lib.counts.isEmpty(all)) return undefined
    return say.scenarioPassedOutOf(all.filter((r) => r.status === Outcome.passed).length, all.length)
  },
})

type Deps = Record<string, AnyNode>

interface ScenarioInput<D extends Deps> {
  owner: string
  /** What it verifies: code it wires (entry points, functions, implementations, components) or requirements it calls. */
  verifies: readonly Node<"entry" | "function" | "implementation" | "requirement" | "component">[]
  env: Node<"environment">
  deps: D
  body: ((deps: Provided<D>) => Run) | FileBody<(deps: Provided<D>) => Run>
}

export function scenario<D extends Deps>(input: ScenarioInput<D>): Node<"scenario"> {
  return kind(input as never) as never
}

export const scenarioKind = kind
