import { defineView, doc, EvidenceSource, KindName, ReleaseField, ViewGroup, ViewName, type Evidence, type Inline, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * The project's history, day by day, the latest first, up to the date of the graph: the versions released and the
 * evidence given (what was built, checked, reviewed, deployed, shipped), each with the node it is about and who gave it.
 */
export default defineView({
  name: ViewName.journal,
  label: say.journalJournal(),
  group: ViewGroup.document,
  run(c) {
    const { values, texts, counts, dates } = c.lib
    interface Entry { day: string; what: Inline[]; node: View; by?: string }
    const nodes = c.all().nodes()
    const released: Entry[] = nodes.filter((v) => v.kind === KindName.release).flatMap((v) => {
      const date = v.field(ReleaseField.date)
      const version = v.field(ReleaseField.version)
      return values.isText(date) && values.isText(version) && date <= c.today ? [{ day: date, what: [say.journalReleased(version)], node: v, by: v.owner }] : []
    })
    const said = (e: Evidence): Inline[] =>
      e.source === EvidenceSource.built ? [say.journalBuilt()]
        : e.source === EvidenceSource.check ? [e.value === counts.one ? say.journalCheckPassed() : say.journalCheckFailed()]
          : e.source === EvidenceSource.review ? [e.value === counts.one ? say.journalApproved() : say.journalChangeAsked(), ...(e.subject ? [doc.ident(e.subject)] : [])]
            : e.source === EvidenceSource.deployed ? [say.journalDeployed(), ...(e.url ? [doc.ident(e.url)] : [])]
              : e.source === EvidenceSource.shipped ? [say.journalShipped()]
                : [say.journalGiven()]
    const given: Entry[] = nodes.flatMap((v) => v.evidence.filter((e) => e.source !== undefined).map((e) => ({ day: e.at, what: said(e), node: v, by: e.by })))
    const entries = [...released, ...given]
    const days = [...new Set(entries.map((e) => e.day))].sort().reverse()
    const title = say.journalJournal()
    const intro = say.journalIntroduction(doc.date(c.today))
    if (counts.isEmpty(days)) return { title, intro, blocks: [doc.para(say.journalNothing())] }
    return {
      title,
      intro,
      blocks: [
        doc.summary(...say.journalSummary(days.length, released.length, given.length)),
        ...days.map((day) => doc.section(dates.isCalendarDate(day) ? dates.format(day) : day, [
          doc.table([say.journalWhat(), say.assemblyNode(), say.journalBy()],
            entries.filter((e) => e.day === day).map((e) => [e.what, [doc.ref(e.node)], e.by ? [doc.person(e.by)] : [texts.empty]])),
        ])),
      ],
    }
  },
})
