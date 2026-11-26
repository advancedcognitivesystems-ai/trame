import { defineView, doc, KindName, EntryEdge, Identity, ViewGroup, ViewName, type Inline, type View } from "../trame/kernel"
import { ownedReached, reachOf, entryFields, ReachFrom, type Trigger } from "../kinds/entry-point"
import kindWords from "../kinds/words"
import words from "./words"

const say = words()
const kinds = kindWords()

/** Where an entry point is called from, in words. */
const fromWords = {
  [ReachFrom.network]: kinds.entryPointFromNetwork, [ReachFrom.machine]: kinds.entryPointFromMachine,
  [ReachFrom.device]: kinds.entryPointFromDevice, [ReachFrom.nobody]: kinds.entryPointFromNobody,
}

/**
 * Access (C6): who may call each entry point (its audience), where from (by its trigger: a network, a machine, a
 * device), and the records it reaches that belong to someone, with the environments it reaches them in.
 */
export default defineView({
  name: ViewName.callers,
  label: say.accessWhoMayCall(),
  group: ViewGroup.document,
  run(c) {
    const { counts, lists, texts, punctuation } = c.lib
    const title = say.accessWhoMayCall()
    const moduleIds = c.modules().map((m) => m.id)
    const rank = (v: View) => (moduleIds.includes(v.module) ? moduleIds.indexOf(v.module) : moduleIds.length)
    const inOrder = (a: View, b: View) =>
      rank(a) - rank(b) || a.module.localeCompare(b.module) || (a.decl?.line ?? counts.zero) - (b.decl?.line ?? counts.zero)
    const entries = c.all().where((v) => v.kind === KindName.entry && v.active && v.library === undefined).nodes().sort(inOrder)
    if (counts.isEmpty(entries)) return { title, blocks: [doc.para(say.accessNone())] }
    const words = (xs: readonly string[]) => texts.concat(lists.conjunction(xs).map(String))
    const identity = (i: Identity) => (i === Identity.person ? kinds.audiencePerson() : kinds.audienceTenant())
    let reaching = counts.zero
    const rows = entries.map((e): Inline[][] => {
      const audience = c.from(e).out(EntryEdge.audience).first()
      const owned = ownedReached(e, c)
      if (counts.any(owned)) reaching += counts.one
      const records: Inline[] = counts.any(owned)
        ? owned.flatMap((o, i) => [
          ...(i ? [punctuation.items] : []), doc.ref(o.data),
          say.accessOwnedIn(words(o.identities.map(identity)), words(o.environments.map((v) => v.title))),
        ])
        : [punctuation.absent]
      return [
        [doc.ref(e)],
        [audience ? doc.ref(audience) : punctuation.absent],
        [fromWords[reachOf(e.field(entryFields.trigger) as Trigger | undefined)]()],
        records,
      ]
    })
    const audiences = new Set(entries.map((e) => c.from(e).out(EntryEdge.audience).first()?.ref).filter((r) => r !== undefined))
    return {
      title,
      intro: [say.accessIntro(), doc.date(c.today), say.accessIntroMore()],
      blocks: [
        doc.summary(say.accessSummary(entries.length, audiences.size, reaching)),
        doc.table([say.accessEntryPoint(), say.accessFor(), say.accessFrom(), say.accessOwned()], rows),
      ],
    }
  },
})
