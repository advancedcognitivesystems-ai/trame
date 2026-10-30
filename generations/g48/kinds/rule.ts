import { defineKind, field, hole, doc, Status, type Graph, type View } from "../trame/kernel"
import words from "./words"

const say = words()

export interface Violation { on: View; what: string }

/**
 * An architecture rule: a query on the consolidated graph. Each violation becomes an error
 * placed on the offending node, with the owner of the rule.
 */
export const rule = defineKind({
  name: "rule",
  label: { one: say.ruleArchitectureRule(), many: say.ruleArchitectureRules() },
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

  holes: (self) => (self.result<Violation[]>() ?? []).map((v) => hole.on(v.on, hole.error(say.ruleRule(v.what, self.title), self.owner))),

  render(self) {
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const check = self.decl?.props.check
    const r = self.result<Violation[]>() ?? []
    return [
      r.length ? doc.list(r.map((v) => [doc.ref(v.on), ": ", v.what])) : doc.para(say.ruleRespectedEverywhere()),
      ...(check ? [doc.details(say.ruleTheRuleInCode(), [doc.code("ts", check, source)])] : []),
    ]
  },
})
