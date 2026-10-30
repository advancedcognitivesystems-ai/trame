import { defineKind, field, hole, doc, Status, type Graph, type View } from "../trame/kernel"

export interface Violation { on: View; what: string }

/**
 * An architecture rule: a query on the consolidated graph. Each violation becomes an error
 * placed on the offending node, with the owner of the rule.
 */
export const rule = defineKind({
  name: "rule",
  label: { one: "Architecture rule", many: "Architecture rules" },
  order: 110,
  main: "check",
  /** An architecture rule is a root of its layer, as a goal is of the product. */
  root: true,
  fields: {
    owner: field.owner(),
    check: field.fn<(g: Graph) => Violation[]>(() => () => []),
  },
  edges: {},

  evaluate: (self, g) => self.check(g),

  status(self) {
    const r = self.result<Violation[]>()
    return r === undefined ? Status.unknown : r.length ? Status.violated : Status.held
  },

  holes: (self) => (self.result<Violation[]>() ?? []).map((v) => hole.on(v.on, hole.error(`${v.what} (rule "${self.title}")`, self.owner))),

  render(self) {
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const check = self.decl?.props.check
    const r = self.result<Violation[]>() ?? []
    return [
      r.length ? doc.list(r.map((v) => [doc.ref(v.on), ": ", v.what])) : doc.para("Respected everywhere."),
      ...(check ? [doc.details("The rule, in code", [doc.code("ts", check, source)])] : []),
    ]
  },
})
