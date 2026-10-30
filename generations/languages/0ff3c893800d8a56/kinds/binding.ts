import { defineKind, field, optional, edge, optionalEdge, hole, doc, Status, type Block, type Graph, type Inline, type Node, type View } from "../trame/kernel"
import { chosenBy, portsOf, requiresOf, requiresSaid, shapeOf, unmet } from "./pattern"

const refs = (vs: View[]): Inline[] => vs.flatMap((v, i): Inline[] => [...(i ? [", "] : []), doc.ref(v)])

/** The choices in force that choose this realization. */
export const choicesOf = (g: Graph, realization: View): View[] => g.from(realization).in("chooses").where((v) => v.active).nodes()

/** Does a choice hold in this environment (in every environment, without one)? */
export const holdsIn = (g: Graph, binding: View, env: View | undefined) =>
  !env || g.from(binding).out("environments").nodes().some((e) => e.node === env.node)

/**
 * A technical choice: in some environments, the realizations that answer some ports (an implementation if it touches
 * the platform, a function otherwise). It is the only place where a technology is chosen: the code that uses a port
 * never names what answers it, so changing the choice is changing this node. A choice that changes several ports
 * together (a database and its dialect) chooses them in one node. Like an architecture decision, it says why
 * (context), what follows, and what was rejected; it names the patterns it follows, and its shape is checked against
 * them. A realization it chooses is reached through its port, never directly. Its status is that of its realizations.
 */
const kind = defineKind({
  name: "binding",
  label: { one: "Technical choice", many: "Technical choices" },
  order: 155,
  renderOwns: ["context", "consequences", "rejected"],
  fields: {
    owner: field.owner("Decided by"),
    context: field.text("Context"),
    consequences: optional(field.text("Consequences")),
    rejected: optional(field.map("Rejected")),
  },
  edges: {
    chooses: edge.many(["implementation", "function"], { label: "Chooses", inverse: "Chosen by" }),
    environments: edge.many(["environment"], { label: "In", inverse: "Technical choices" }),
    follows: optionalEdge(edge.many(["pattern"], { label: "Follows", inverse: "Followed by" })),
    serves: optionalEdge(edge.many(["goal"], { label: "Serves", inverse: "Served by" })),
  },

  holes(self, g) {
    const chosen = chosenBy(g, self)
    const out = []
    if (!chosen.length) out.push(hole.error("Chooses nothing", self.owner))
    if (!g.from(self).out("environments").exists()) out.push(hole.error("Holds in no environment", self.owner))
    if (!g.from(self).out("follows").exists()) out.push(hole.warning("Follows no pattern: the shape of the choice is not checked", self.owner))
    // Each realization answers a port, and a port is answered once in a choice.
    const seen = new Map<string, View>()
    for (const r of chosen) {
      const ports = portsOf(g, r)
      if (!ports.length) out.push(hole.error(`"${r.title}" implements no port: there is nothing to choose it for`, self.owner))
      for (const p of ports) {
        const other = seen.get(p.ref)
        if (other) out.push(hole.error(`Chooses "${other.title}" and "${r.title}" for the same port "${p.title}"`, self.owner))
        else seen.set(p.ref, r)
      }
      // Reached through its port: a node that depends on the realization itself would not follow the choice.
      for (const user of g.from(r).in("deps").nodes()) {
        out.push(hole.error(`"${r.title}" is reached directly by "${user.title}", not through its port`, self.owner))
      }
    }
    // The shape each pattern requires.
    const shape = shapeOf(g, self)
    for (const p of g.from(self).out("follows").nodes()) {
      const requires = requiresOf(p)
      const missing = unmet(requires, shape)
      if (missing.length) {
        const wanted = requiresSaid(Object.fromEntries(missing.map((k) => [k, requires[k]])))
        out.push(hole.error(`Follows "${p.title}", which requires ${wanted.join(" and ")}`, self.owner))
      }
    }
    return out
  },

  status(self, g) {
    const all = chosenBy(g, self).map((v) => v.status).filter((s): s is Status => s !== undefined && s !== Status.unknown)
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.length ? Status.held : Status.unknown
  },

  render(self, g) {
    const text = (x: unknown) => (typeof x === "string" ? x : "")
    const rejected = self.field("rejected")
    const options = rejected && typeof rejected === "object" ? Object.entries(rejected as Record<string, unknown>) : []
    const rows = chosenBy(g, self).map((r): Inline[][] => [refs(portsOf(g, r)), [doc.ref(r)], [r.kind === "function" ? "a function" : "an implementation"]])
    const blocks: Block[] = [
      doc.para("In ", ...refs(g.from(self).out("environments").nodes()), ":"),
      doc.table(["Port", "Answered by", "Which is"], rows),
      doc.para("Context: ", text(self.field("context"))),
    ]
    const consequences = text(self.field("consequences"))
    if (consequences) blocks.push(doc.para("Consequences: ", consequences))
    if (options.length) blocks.push(doc.table(["Rejected", "Why"], options.map(([option, why]) => [[option], [text(why)]])))
    return blocks
  },
})

interface BindingInput {
  owner: string
  /** What it chooses: implementations (they may touch the platform) or functions (they touch nothing). */
  chooses: readonly Node<"implementation" | "function">[]
  /** Where the choice holds. */
  environments: readonly Node<"environment">[]
  /** The patterns it follows: its shape is checked against what each requires. */
  follows?: readonly Node<"pattern">[]
  context: string
  consequences?: string
  rejected?: Record<string, string>
  serves?: readonly Node<"goal">[]
}

/** `binding({ owner, chooses: [Esbuild], environments: [Local, Test], follows: [Adapter], context, rejected })` */
export function binding(input: BindingInput): Node<"binding"> {
  return kind(input as never) as never
}

export const bindingKind = kind
