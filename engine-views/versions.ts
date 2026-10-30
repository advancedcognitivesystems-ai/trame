import { defineView, doc, KindName, LanguageUse, ViewGroup, ViewName, type Block, type Inline, type View } from "../trame/kernel"
import { releaseEdges, releaseFields } from "../kinds/release"
import words from "./words"

const say = words()

/**
 * The versions of the components: their releases, newest first. For an engine that builds itself, each generation is a
 * release, assembled by the one before it; the view says when, what changed, and how it reaches its language.
 */
export default defineView({
  name: ViewName.versions,
  label: say.versionsVersions(),
  group: ViewGroup.document,
  run(c) {
    const { values, texts, counts, sequences, dates, punctuation } = c.lib
    const title = say.versionsVersions()
    const text = (v: View, name: string) => {
      const x = v.field(name)
      return values.isText(x) ? x : texts.empty
    }
    const releases = c.all().where((v) => v.kind === KindName.release).nodes()
    if (counts.isEmpty(releases)) return { title, blocks: [doc.para(say.versionsNoReleaseIsDeclared())] }
    const newestFirst = (a: View, b: View) => (b.decl?.line ?? counts.zero) - (a.decl?.line ?? counts.zero)
    const componentOf = (r: View) => sequences.head(c.from(r).out(releaseEdges.component).nodes())
    const components = [...new Map(releases.map((r) => componentOf(r)).filter((v): v is View => !!v).map((v) => [v.ref, v])).values()]
    const row = (r: View): Inline[][] => {
      const by = sequences.head(c.from(r).out(releaseEdges.assembledBy).nodes())
      const date = text(r, releaseFields.date)
      return [
        [doc.ref(r)],
        [dates.isCalendarDate(date) ? doc.date(date) : date],
        [text(r, releaseFields.what)],
        by ? [doc.ref(by)] : [punctuation.absent],
        [text(r, releaseFields.language) === LanguageUse.own ? say.versionsItsOwnCopy() : say.versionsShared()],
      ]
    }
    const own = releases.filter((r) => text(r, releaseFields.language) === LanguageUse.own).length
    const blocks: Block[] = [
      doc.summary(say.versionsOfOnALanguageOfOwn(releases.length, components.length, own)),
      ...components.map((comp) => doc.section(comp.title, [
        doc.para(say.versionsEachReleaseNewestFirstWhatChanged()),
        doc.table([say.versionsRelease(), say.versionsReleasedOn(), say.versionsWhatChanges(), say.versionsAssembledBy(), say.versionsLanguage()], releases.filter((r) => componentOf(r)?.ref === comp.ref).sort(newestFirst).map(row)),
      ])),
    ]
    return {
      title,
      intro: [say.versionsTheReleasesOfTheComponentsOn(), doc.date(c.today), say.versionsNewestFirstAProjectRunsThe()],
      blocks,
    }
  },
})
