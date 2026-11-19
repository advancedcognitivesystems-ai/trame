import { defineView, doc, KindName, EdgeName, ViewGroup, ViewName, type Block, type Inline, type View } from "../trame/kernel"
import { bindingEdges, choicesOf, holdsIn } from "../kinds/binding"
import { chosenBy, portsOf } from "../kinds/pattern"
import words from "./words"

const say = words()

/**
 * The technical choices of the graph: what answers each port in each environment, which choice decides it and why,
 * and the patterns the choices follow.
 */
export default defineView({
  name: ViewName.choices,
  label: say.choicesTechnicalChoices(),
  group: ViewGroup.document,
  run(c) {
    const { counts, lists, punctuation } = c.lib
    const title = say.choicesTechnicalChoices()
    const moduleIds = c.modules().map((m) => m.id)
    // The project's modules in their order, then a library's (a pattern its choices follow), by name.
    const rank = (v: View) => (moduleIds.includes(v.module) ? moduleIds.indexOf(v.module) : moduleIds.length)
    const inOrder = (a: View, b: View) =>
      rank(a) - rank(b) || a.module.localeCompare(b.module) || (a.decl?.line ?? counts.zero) - (b.decl?.line ?? counts.zero)
    const choices = c.all().where((v) => v.kind === KindName.binding && v.active).nodes().sort(inOrder)
    if (counts.isEmpty(choices)) return { title, blocks: [doc.para(say.choicesTheGraphMakesNoTechnicalChoice())] }
    const refs = (vs: View[]): Inline[] => (counts.any(vs) ? lists.enumeration(vs.map(doc.ref)) : [punctuation.absent])
    const envs = c.all().where((v) => v.kind === KindName.environment && v.active).nodes().sort(inOrder)
    // Each port a choice answers, once, in the order of the modules.
    const seen = new Set<string>()
    const ports = choices.flatMap((b) => chosenBy(c, b).flatMap((r) => portsOf(c, r))).filter((p) => !seen.has(p.ref) && !!seen.add(p.ref)).sort(inOrder)
    const answers = (port: View, env: View) =>
      c.from(port).in(EdgeName.implements).where((r) => r.active && choicesOf(c, r).some((b) => holdsIn(c, b, env))).nodes()
    const matrix = ports.map((p): Inline[][] => [[doc.ref(p)], ...envs.map((env) => refs(answers(p, env)))])
    // The project's patterns, and those of a library that its choices follow.
    const followed = choices.flatMap((b) => c.from(b).out(bindingEdges.follows).nodes())
    const patterns = [...c.all().where((v) => v.kind === KindName.pattern && v.active).nodes(), ...followed]
      .filter((p, i, all) => all.findIndex((x) => x.ref === p.ref) === i).sort(inOrder)
    const patternRows = patterns.map((p): Inline[][] => [[doc.ref(p)], p.status ? [doc.status(p.status)] : [say.adrsUnknown()], refs(c.from(p).in(bindingEdges.follows).nodes().sort(inOrder))])
    const modules = [...new Set(choices.map((v) => v.module))]
    const blocks: Block[] = [
      doc.summary(say.choicesForIn(choices.length, ports.length, envs.length)),
      doc.table([say.assemblyPort(), ...envs.map((e) => e.title)], matrix),
      ...(counts.any(patternRows) ? [doc.table([say.choicesPattern(), say.adrsStatus(), say.choicesFollowedBy()], patternRows)] : []),
      ...modules.map((m) => doc.section(c.modules().find((x) => x.id === m)?.title ?? m, choices.filter((v) => v.module === m).map((v) => c.card(v)))),
    ]
    return {
      title,
      intro: [
        say.choicesWhatAnswersEachPortInEach(), doc.date(c.today),
        say.choicesATechnicalChoiceSaysWhatIt(),
      ],
      blocks,
    }
  },
})
