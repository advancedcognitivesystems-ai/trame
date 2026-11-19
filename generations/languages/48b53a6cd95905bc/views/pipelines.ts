import {
  defineView, doc, ArtifactEdge, CheckEdge, EvidenceSource, FigureType, KindName, ReviewEdge, PipelineStage, Shape, ShipmentField, Status, ViewGroup, ViewName,
  type Block, type Inline, type PipelineStep, type View,
} from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * What trame ship runs for each shipment, in order, as the engine computes it (the same pipeline the command runs):
 * its artefacts produced and by what, the checks a program makes, the obligations to prove, the programs that deploy
 * it, the dossier; each step with why it is there (the foundations every shipment proves, an obligation of its policy
 * and what brought it in, or the shipment itself), its status and its latest evidence, and a figure of the whole; the
 * files that run it elsewhere (a workflow, a script), written from the same graph.
 */
export default defineView({
  name: ViewName.pipelines,
  label: say.pipelinesPipelines(),
  group: ViewGroup.document,
  run(c) {
    const { counts, texts, lists, sequences, punctuation } = c.lib
    const shipments = c.all(KindName.shipment).where((v) => !v.repealedBy).nodes()
    const stages = Object.values(PipelineStage)
    const intro = say.pipelinesIntroduction(doc.date(c.today))
    if (counts.isEmpty(shipments)) return { title: say.pipelinesPipelines(), intro, blocks: [doc.para(say.pipelinesNone())] }

    const word: Record<PipelineStage, string> = {
      [PipelineStage.produce]: say.pipelinesProduce(), [PipelineStage.check]: say.pipelinesCheck(), [PipelineStage.prove]: say.pipelinesProve(),
      [PipelineStage.deploy]: say.pipelinesDeploy(), [PipelineStage.record]: say.pipelinesRecord(),
    }
    /** The latest evidence on a node: when, by whom, and what it says when it says passed or failed. */
    const latest = (v: View): Inline[] => {
      const e = sequences.last(v.evidence.filter((x) => x.source !== undefined && x.subject === undefined))
      if (!e) return []
      const verdict = e.source === EvidenceSource.check ? [e.value === counts.one ? say.pipelinesPassed() : say.pipelinesFailed()] : []
      return [...verdict, ...say.pipelinesEvidence(doc.date(e.at), e.by ?? texts.empty), ...(e.url ? [doc.ident(e.url)] : [])]
    }
    /**
     * What runs a step: a delivery, a program, a component assembled; a check, the program that runs it or the hand that
     * makes it, and the role that signs it; a review, the role that gives it.
     */
    const runBy = (s: PipelineStep): Inline[] => {
      if (s.stage === PipelineStage.deploy) return [say.pipelinesItself()]
      if (s.node.kind === KindName.check) {
        const program = s.runs ?? c.from(s.node).out(CheckEdge.runs).first()
        const signer = c.from(s.node).out(CheckEdge.by).first()
        return [
          ...(program ? [doc.ref(program)] : [say.pipelinesByHand()]),
          ...(signer ? [say.pipelinesSignedBy(), doc.ref(signer)] : []),
        ]
      }
      if (s.node.kind === KindName.review) {
        const role = c.from(s.node).out(ReviewEdge.by).first()
        return role ? [say.pipelinesReviewedBy(), doc.ref(role)] : [punctuation.absent]
      }
      // Promoted: the file a shipment that precedes shipped first, not built again (C2).
      const promoted = s.promoted ?? []
      if (counts.any(promoted)) return [say.pipelinesPromoted(), ...lists.enumeration(promoted.map(doc.ref))]
      return s.runs && s.runs.ref !== s.node.ref ? [doc.ref(s.runs)] : [punctuation.absent]
    }

    /** Why a step proves what it proves: the foundations, an obligation of the policy (and the node that brought it in), or the shipment itself. */
    const why = (s: PipelineStep): Inline[] => {
      if (s.stage !== PipelineStage.prove) return [punctuation.absent]
      if (s.origin?.foundations) return [say.pipelinesFoundationsWhy()]
      if (s.origin?.obligation) {
        const via = s.origin.via && s.origin.via.ref !== s.node.ref ? [say.pipelinesVia(), doc.ref(s.origin.via)] : []
        return [doc.ref(s.origin.obligation), ...via]
      }
      return [say.pipelinesDeclared()]
    }
    /**
     * The status of a step: the foundations hold while no problem is found; a shipment that precedes, by whether it
     * shipped first what both ship (its standing); another step, its node's.
     */
    const statusOf = (s: PipelineStep): Status | undefined =>
      s.origin?.foundations ? (s.origin.foundations.problems === counts.zero ? Status.held : Status.violated) : s.standing ?? s.node.status

    const blocks: Block[] = shipments.map((shipment) => {
      const pipeline = c.pipeline?.(shipment)
      if (!pipeline) return doc.section(shipment.title, [doc.para(say.pipelinesNotComputed())], shipment.id)
      const proven = pipeline.steps.filter((s) => s.stage === PipelineStage.prove)
      // The files that run it elsewhere: artefacts a writer writes from the plan the engine computes.
      const elsewhere = c.from(shipment).in(ArtifactEdge.runs).nodes()
      const held = proven.filter((s) => statusOf(s) === Status.held)
      const summary = shipment.status === Status.held ? say.pipelinesShips(shipment.title) : say.pipelinesWaits(shipment.title, held.length, proven.length)

      // The figure: one rank per stage, each node at the first stage that shows it.
      const rank = new Map<string, number>()
      const drawn = pipeline.steps.filter((s) => !s.origin?.foundations)
      for (const s of drawn) {
        if (!rank.has(s.node.ref)) rank.set(s.node.ref, stages.indexOf(s.stage))
        if (s.runs && !rank.has(s.runs.ref)) rank.set(s.runs.ref, stages.indexOf(s.stage))
      }
      const nodes = [...new Map(drawn.flatMap((s) => (s.runs ? [s.node, s.runs] : [s.node])).map((v) => [v.ref, v])).values()]
      const shown = new Set(nodes.map((v) => v.ref))
      const edges = c.figureEdges(nodes).filter((e) => shown.has(e.from) && shown.has(e.to))

      const rows = pipeline.steps.map((s, i): Inline[][] => [
        [String(counts.next(i))],
        [word[s.stage]],
        s.origin?.foundations
          ? [say.pipelinesFoundations(s.origin.foundations.problems)]
          : [doc.ref(s.node), ...(s.path ? [punctuation.parts, doc.ident(s.path)] : [])],
        s.origin?.foundations ? [say.pipelinesItself()] : runBy(s),
        why(s),
        statusOf(s) ? [doc.status(statusOf(s) ?? Status.unknown)] : [],
        s.origin?.foundations ? [] : latest(s.node),
      ])
      return doc.section(shipment.title, [
        doc.summary(summary),
        doc.para(...say.pipelinesWhere(String(shipment.field(ShipmentField.target)), pipeline.environment ? doc.ref(pipeline.environment) : undefined)),
        ...(counts.any(pipeline.errors) ? [doc.para(say.pipelinesCannotRun()), doc.list(pipeline.errors.map((e) => [e]))] : []),
        ...(counts.any(elsewhere) ? [doc.para(...say.pipelinesElsewhere(lists.enumeration(elsewhere.map(doc.ref))))] : []),
        doc.figure({
          type: FigureType.graph, shape: Shape.layers,
          nodes: nodes.map((v) => c.figureNode(v, rank.get(v.ref) ?? counts.zero)), edges, groups: [],
        }, say.pipelinesFigure(texts.concat(lists.enumeration(stages.map((s) => word[s]))))),
        doc.table([texts.empty, say.pipelinesStage(), say.pipelinesStep(), say.pipelinesRunBy(), say.pipelinesWhy(), say.pipelinesStatus(), say.pipelinesLatest()], rows),
        doc.para(doc.ident(say.pipelinesCommand(shipment.id))),
      ], shipment.id)
    })
    return { title: say.pipelinesPipelines(), intro, blocks }
  },
})
