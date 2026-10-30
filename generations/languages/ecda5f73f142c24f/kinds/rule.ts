import { defineKind, field, hole, doc, keysOf, Status, KindName, type Graph, type View } from "../trame/kernel"
import words from "./words"

const say = words()

export interface Violation { on: View; what: string }

const fields = {
  owner: field.owner(),
  check: field.fn<(g: Graph) => Violation[]>(() => () => []),
}
const F = keysOf(fields)

/**
 * An architecture rule: a query on the consolidated graph. Each violation becomes an error
 * placed on the offending node, with the owner of the rule.
 */
export const rule = defineKind({
  name: KindName.rule,
  label: { one: say.ruleArchitectureRule(), many: say.ruleArchitectureRules() },
  main: F.check,
  /** An architecture rule is a root of its layer, as a goal is of the product. */
  root: true,
  fields,
  edges: {},

  evaluate: (self, g) => self.check(g),

  status(self, g) {
    const r = self.result<Violation[]>()
    return r === undefined ? Status.unknown : g.lib.counts.any(r) ? Status.violated : Status.held
  },

  holes: (self) => (self.result<Violation[]>() ?? []).map((v) => hole.on(v.on, hole.error(say.ruleRule(v.what, self.title), self.owner))),

  render(self, g) {
    const { counts, positions, declarations } = g.lib
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const check = self.decl?.props[F.check]
    const r = self.result<Violation[]>() ?? []
    return [
      counts.any(r) ? doc.list(r.map((v) => say.ruleViolation(doc.ref(v.on), v.what))) : doc.para(say.ruleRespectedEverywhere()),
      ...(check ? [doc.details(say.ruleTheRuleInCode(), [doc.code(declarations.language, check, source)])] : []),
    ]
  },
})
