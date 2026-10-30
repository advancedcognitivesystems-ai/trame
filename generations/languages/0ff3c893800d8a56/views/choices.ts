import { defineView, doc, plural, ViewGroup, type Block, type Inline, type View } from "../trame/kernel"
import { choicesOf, holdsIn } from "../kinds/binding"
import { chosenBy, portsOf } from "../kinds/pattern"

/**
 * The technical choices of the graph: what answers each port in each environment, which choice decides it and why,
 * and the patterns the choices follow.
 */
export default defineView({
  name: "choices",
  label: "Technical choices",
  group: ViewGroup.document,
  order: 26,
  run(c) {
    const title = "Technical choices"
    const moduleIds = c.modules().map((m) => m.id)
    const inOrder = (a: View, b: View) => moduleIds.indexOf(a.module) - moduleIds.indexOf(b.module) || (a.decl?.line ?? 0) - (b.decl?.line ?? 0)
    const choices = c.all().where((v) => v.kind === "binding" && v.active).nodes().sort(inOrder)
    if (!choices.length) return { title, blocks: [doc.para("The graph makes no technical choice: each implementation names the environments it serves.")] }
    const refs = (vs: View[]): Inline[] => (vs.length ? vs.flatMap((v, i): Inline[] => [...(i ? [", "] : []), doc.ref(v)]) : ["—"])
    const envs = c.all().where((v) => v.kind === "environment" && v.active).nodes().sort(inOrder)
    // Each port a choice answers, once, in the order of the modules.
    const seen = new Set<string>()
    const ports = choices.flatMap((b) => chosenBy(c, b).flatMap((r) => portsOf(c, r))).filter((p) => !seen.has(p.ref) && !!seen.add(p.ref)).sort(inOrder)
    const answers = (port: View, env: View) =>
      c.from(port).in("implements").where((r) => r.active && choicesOf(c, r).some((b) => holdsIn(c, b, env))).nodes()
    const matrix = ports.map((p): Inline[][] => [[doc.ref(p)], ...envs.map((env) => refs(answers(p, env)))])
    const patterns = c.all().where((v) => v.kind === "pattern" && v.active).nodes().sort(inOrder)
    const patternRows = patterns.map((p): Inline[][] => [[doc.ref(p)], p.status ? [doc.status(p.status)] : ["unknown"], refs(c.from(p).in("follows").nodes().sort(inOrder))])
    const modules = [...new Set(choices.map((v) => v.module))]
    const blocks: Block[] = [
      doc.summary(`${plural(choices.length, "technical choice")} for ${plural(ports.length, "port")}, in ${plural(envs.length, "environment")}`),
      doc.table(["Port", ...envs.map((e) => e.title)], matrix),
      ...(patternRows.length ? [doc.table(["Pattern", "Status", "Followed by"], patternRows)] : []),
      ...modules.map((m) => doc.section(c.modules().find((x) => x.id === m)?.title ?? m, choices.filter((v) => v.module === m).map((v) => c.card(v)))),
    ]
    return {
      title,
      intro: [
        "What answers each port in each environment on ", doc.date(c.today),
        ": a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.",
      ],
      blocks,
    }
  },
})
