// trame evidence <node> passed|failed --by <name> [--subject <row>] [--language <tag>] [--note "…"] [--url <where>]:
// records what a person gives, attributed to them, on what is there now. On a check made by hand: its verdict, for the
// artefacts as they were last built. On a review (or the dataset or node it reviews): an approval, or changes asked, of
// each row in each language (or those named), or of the node's declaration as it is written. On an artefact: where it
// was deployed. Someone who is not of the role that signs it, or who reviews their own work when the role forbids it,
// is refused.

import {
  KindName, CheckEdge, ReviewEdge, RoleField, EvidenceSource, SignatureType, daysBetween, type Delegation, type ProvidedBy, type View, type Compilation,
} from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { TrameCommands } from "../../conventions"
import type { Counts, Sequences, ValueTypes } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as SdlcApi, Entry } from "./sdlc-evidence"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  line: ProvidedBy<typeof TrameCommands>
  preparation: PreparationApi
  sdlc: SdlcApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  values: ProvidedBy<typeof ValueTypes>
  messages: ProvidedBy<typeof CommandMessages>
}

/** A row of a dataset as the dataset judged it: the fingerprint a review of it must have seen. */
interface Row { row: string; language?: string; fingerprint?: string }

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, refuse } = deps.preparation
  const { messages, sdlc, line, values } = deps
  const { head, last } = deps.sequences
  const { one, zero } = deps.counts
  const o = options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  const [name, verdict] = o.args
  const by = o.by
  if (by === undefined) return refuse(o, [messages.evidenceNeedsBy()])
  if (verdict !== line.passed && verdict !== line.failed) return refuse(o, [messages.evidenceUsage(line.passed, line.failed)])
  const { comp } = await prepare(o)
  const target = comp.all().nodes().find((v) => v.id === name || v.ref === name)
  if (!target) return refuse(o, [messages.noNodeNamed(name)])
  const out = (g: Compilation, v: View, edge: string) => g.from(v).out(edge).nodes()
  // For someone (--for, C4): the evidence is theirs, the agent who gives it named with it, under a delegation of the role.
  const principal = o.for ?? by
  const given = {
    at: o.today, value: verdict === line.passed ? one : zero, by: principal, ...(o.for === undefined ? {} : { through: [by] }),
    signature: SignatureType.attribution,
    ...(o.note === undefined ? {} : { note: o.note }), ...(o.url === undefined ? {} : { url: o.url }),
  }
  const lastBuilt = (a: View) => last(a.evidence.filter((e) => e.source === EvidenceSource.built))?.fingerprint

  /**
   * The role that signs it, if any: the person must be one of its people, and not the author when it forbids it. Given
   * for someone (C4), that person must be, and the agent must act for them under a delegation of the role still in
   * force; neither may be the author when the role forbids it.
   */
  const signs = (role: View | undefined, author?: string) => {
    if (!role) return
    const people = role.field(RoleField.people)
    const listed = Array.isArray(people) ? people.filter(values.isText) : []
    if (!listed.includes(principal)) refuse(o, [messages.notOfTheRole(principal, role.title, listed)])
    if (o.for !== undefined) {
      const declared = role.field(RoleField.delegations)
      const delegations = (Array.isArray(declared) ? declared : []) as Delegation[]
      const mine = delegations.filter((d) => d.agent === by && d.for === principal)
      if (!mine.length) refuse(o, [messages.notDelegated(by, principal, role.title)])
      if (!mine.some((d) => values.isText(d.until) && daysBetween(o.today, d.until) >= zero)) {
        refuse(o, [messages.delegationOver(by, principal, role.title)])
      }
    }
    if (role.field(RoleField.notAuthor) === true && (principal === author || by === author)) refuse(o, [messages.ownWork(by, role.title)])
  }

  /** A review of a subject: each row of a dataset, in each language (those named), or the node as it is written. */
  const reviewOf = (subject: View): Entry[] => {
    if (subject.kind === KindName.dataset) {
      const rows = (subject.result<{ reviews?: Row[] }>()?.reviews ?? [])
        .filter((r) => (o.subject === undefined || r.row === o.subject) && (o.language === undefined || r.language === o.language))
      if (!rows.length) refuse(o, [messages.noRowNamed(subject.title, o.subject, o.language)])
      return rows.map((r) => ({
        node: subject.ref, source: EvidenceSource.review, subject: r.row, ...(r.language === undefined ? {} : { language: r.language }),
        fingerprint: r.fingerprint, ...given,
      }))
    }
    return [{ node: subject.ref, source: EvidenceSource.review, fingerprint: sdlc.of(subject.decl?.sourceText), ...given }]
  }

  const entries: Entry[] = (() => {
    if (target.kind === KindName.check) {
      signs(head(out(comp, target, CheckEdge.by)))
      const fingerprint = sdlc.checked(out(comp, target, CheckEdge.on).map(lastBuilt))
      if (fingerprint === undefined) return refuse(o, [messages.checkNotBuilt(target.title)])
      return [{ node: target.ref, source: EvidenceSource.check, fingerprint, ...given }]
    }
    if (target.kind === KindName.review) {
      const role = head(out(comp, target, ReviewEdge.by))
      return out(comp, target, ReviewEdge.of).flatMap((subject) => {
        signs(role, subject.owner)
        return reviewOf(subject)
      })
    }
    if (target.kind === KindName.artifact) {
      if (o.url === undefined) return refuse(o, [messages.deploymentNeedsUrl(target.title)])
      return [{ node: target.ref, source: EvidenceSource.deployed, fingerprint: lastBuilt(target), ...given }]
    }
    return reviewOf(target)
  })()
  const { file, text } = sdlc.added(o.root, entries)
  deps.writing.mkdirSync(deps.paths.dirname(file), { recursive: true })
  deps.writing.writeFileSync(file, text)
  deps.terminal.write(messages.evidenceRecorded(entries.length, deps.paths.relative(o.root, file)))
  return { status: deps.exitStatus.success, body: entries.length }
}

export default body
