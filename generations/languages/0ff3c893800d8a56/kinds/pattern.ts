import { defineKind, field, optional, edge, optionalEdge, doc, isHole, Stage, Status, type Graph, type Inline, type Node, type View } from "../trame/kernel"

/**
 * What a technical choice is, in the terms a pattern requires: read from the graph, never declared. A choice (a
 * binding) chooses realizations; each realizes one or more ports.
 */
export interface Shape {
  /** It chooses several ports at once: a family that changes together. */
  family: boolean
  /** Each realization it chooses is an implementation: it may touch the platform. */
  platform: boolean
  /** Each realization it chooses is a function: it touches nothing. */
  pure: boolean
  /** Each realization it chooses reaches another port: what it does goes through another abstraction. */
  layered: boolean
}

/** What a pattern requires of the choices that follow it: each property it states must be as it states. */
export type Requires = Partial<Shape>

/** Each property, said when it is required true and when it is required false. */
export const shapeSays: Record<keyof Shape, { yes: string; no: string }> = {
  family: { yes: "several ports chosen together", no: "a single port" },
  platform: { yes: "realizations that touch the platform (implementations)", no: "realizations that do not touch the platform" },
  pure: { yes: "realizations that are functions", no: "realizations that are not functions" },
  layered: { yes: "realizations that reach another port", no: "realizations that reach no other port" },
}

const shapeKeys = Object.keys(shapeSays) as (keyof Shape)[]

/** The realizations a choice makes, in force. */
export const chosenBy = (g: Graph, binding: View): View[] => g.from(binding).out("chooses").where((v) => v.active).nodes()

/** The ports a realization answers. */
export const portsOf = (g: Graph, realization: View): View[] => g.from(realization).out("implements").nodes()

/** Does a realization reach a port, at run time? */
const reachesPort = (r: View) => r.dependencies.some((d) => d.stage === Stage.execution && d.node.kind === "port")

/** The shape of a choice, read from the graph. */
export function shapeOf(g: Graph, binding: View): Shape {
  const chosen = chosenBy(g, binding)
  const ports = new Set(chosen.flatMap((r) => portsOf(g, r).map((p) => p.ref)))
  return {
    family: ports.size > 1,
    platform: chosen.length > 0 && chosen.every((r) => r.kind === "implementation"),
    pure: chosen.length > 0 && chosen.every((r) => r.kind === "function"),
    layered: chosen.length > 0 && chosen.every(reachesPort),
  }
}

/** What a pattern declares it requires, as far as it says it. */
export function requiresOf(pattern: View): Requires {
  const raw = pattern.field("requires")
  if (!raw || typeof raw !== "object" || isHole(raw)) return {}
  const r = raw as Record<string, unknown>
  return Object.fromEntries(shapeKeys.filter((k) => typeof r[k] === "boolean").map((k) => [k, r[k] as boolean]))
}

/** The properties a pattern requires that a shape does not have. */
export const unmet = (requires: Requires, shape: Shape): (keyof Shape)[] => shapeKeys.filter((k) => requires[k] !== undefined && requires[k] !== shape[k])

/** What a pattern requires, in words. */
export const requiresSaid = (requires: Requires): string[] =>
  shapeKeys.filter((k) => requires[k] !== undefined).map((k) => (requires[k] ? shapeSays[k].yes : shapeSays[k].no))

/**
 * A design pattern: a published way of separating what varies from what does not (Strategy, Adapter, Bridge…). The
 * graph does not implement it here: its kinds do, once (a port, its realizations, the choice that binds them). The
 * pattern names the intent, cites its source, and says what it requires of the shape of a choice that follows it,
 * which every such choice is checked against. Its status is that of the choices that follow it: violated if one does
 * not have the shape it requires, held if they all have it, unknown if none follows it.
 */
const kind = defineKind({
  name: "pattern",
  label: { one: "Design pattern", many: "Design patterns" },
  order: 40,
  renderOwns: ["source", "url", "requires"],
  fields: {
    owner: field.owner("Maintained by"),
    source: field.value<string>("Source"),
    url: optional(field.value<string>("Address")),
    requires: field.value<Requires>("Requires of a choice"),
  },
  edges: {
    serves: optionalEdge(edge.many(["goal"], { label: "Serves", inverse: "Served by" })),
  },

  status(self, g) {
    const followers = g.from(self).in("follows").where((v) => v.active).nodes()
    if (!followers.length) return Status.unknown
    return followers.every((b) => !unmet(requiresOf(self), shapeOf(g, b)).length) ? Status.held : Status.violated
  },

  render(self, g) {
    const url = self.field("url")
    const source = self.field("source")
    const said = requiresSaid(requiresOf(self))
    const followers = g.from(self).in("follows").nodes()
    const rows = followers.map((b): Inline[][] => {
      const missing = unmet(requiresOf(self), shapeOf(g, b))
      return [[doc.ref(b)], [missing.length ? `lacks: ${requiresSaid(Object.fromEntries(missing.map((k) => [k, requiresOf(self)[k]]))).join(", ")}` : "has the shape"]]
    })
    return [
      doc.para("Source: ", typeof source === "string" ? source : "", ...(typeof url === "string" ? [" · ", doc.ident(url)] : [])),
      doc.para("A choice that follows it has ", said.length ? said.join("; ") : "no particular shape", "."),
      ...(rows.length ? [doc.table(["Followed by", "Shape"], rows)] : [doc.para("No choice follows it yet.")]),
    ]
  },
})

interface PatternInput {
  owner: string
  source: string
  url?: string
  /** What a choice that follows it must be: several ports at once, realizations that touch the platform or not… */
  requires: Requires
  serves?: readonly Node<"goal">[]
}

/** Declares a design pattern. */
export function pattern(input: PatternInput): Node<"pattern"> {
  return kind(input as never) as never
}

export const patternKind = kind
