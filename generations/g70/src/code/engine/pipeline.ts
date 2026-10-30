// A shipment's pipeline: the steps trame ship runs, computed once, which the views show. Its artefacts (those it ships,
// then those its checks read) produced by what produces them, where the artefact's kind says they live; the checks a
// program makes (required, or derived by its policy); every obligation to prove: the foundations first (no literal, a
// sound graph, with the problems that break them), what it ships, what it requires, what its policy derives (with the
// obligation and the reached node behind each); the entry points that deploy it, in order; the dossier. What keeps it from
// running is said: an artefact that says nowhere where it lives, programs with no environment to assemble them for.

import { KindName, ArtifactEdge, ArtifactField, CheckEdge, ShipmentEdge, PipelineStage } from "../../../trame/kernel"
import type { DerivedObligation, Graph, Pipeline, PipelineStep, ProvidedBy, View } from "../../../trame/kernel"
import type { CommandMessages } from "../../messages"
import type { Sequences, ValueTypes } from "#std/algebra"

export interface Deps {
  sequences: ProvidedBy<typeof Sequences>
  values: ProvidedBy<typeof ValueTypes>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = ({ sequences: { head }, values, messages }: Deps) => {
  /** What runs as a program of the SDLC, assembled for the shipment's environment. */
  const programs: readonly string[] = [KindName.entry, KindName.component]

  return (g: Graph, shipment: View, problems: number): Pipeline => {
    const out = (v: View, edge: string) => g.from(v).out(edge).nodes()
    const unique = (views: View[]) => [...new Map(views.map((v) => [v.ref, v])).values()]
    const environment = head(out(shipment, ShipmentEdge.environment))
    // What its policy derives (the shipment's kind computes it once), with the obligation and the reached node behind each.
    const derived = (shipment.result<{ derived?: readonly DerivedObligation[] }>()?.derived ?? []).flatMap((d) => {
      const [node] = g.node(d.node).nodes()
      const [obligation] = g.node(d.obligation).nodes()
      const [via] = g.node(d.via).nodes()
      return node && obligation ? [{ node, origin: { obligation, ...(via ? { via } : {}) } }] : []
    })
    const required = unique([...out(shipment, ShipmentEdge.requires), ...derived.map((d) => d.node)])
    const checks = required.filter((v) => v.kind === KindName.check)
    const errors: string[] = []

    const produce = unique([...out(shipment, ShipmentEdge.ships), ...checks.flatMap((k) => out(k, CheckEdge.on))]).map((a): PipelineStep => {
      const runs = head(out(a, ArtifactEdge.producedBy))
      const path = a.result<Record<string, unknown>>()?.[ArtifactField.path]
      if (!values.isText(path)) errors.push(messages.artifactWithoutPath(a.title))
      return { stage: PipelineStage.produce, node: a, ...(runs ? { runs } : {}), ...(values.isText(path) ? { path } : {}) }
    })
    const check = checks.flatMap((k): PipelineStep[] => {
      const runs = head(out(k, CheckEdge.runs))
      return runs ? [{ stage: PipelineStage.check, node: k, runs, on: out(k, CheckEdge.on) }] : []
    })
    // The foundations first (no literal, a sound graph: what every shipment proves), then what it ships, what it requires,
    // what its policy derives.
    const declared = new Set([...out(shipment, ShipmentEdge.ships), ...out(shipment, ShipmentEdge.requires)].map((v) => v.ref))
    const prove: PipelineStep[] = [
      { stage: PipelineStage.prove, node: shipment, origin: { foundations: { problems } } },
      ...unique([...out(shipment, ShipmentEdge.ships), ...required]).map((v): PipelineStep => {
        const d = declared.has(v.ref) ? undefined : derived.find((x) => x.node.ref === v.ref)
        return { stage: PipelineStage.prove, node: v, ...(d ? { origin: d.origin } : {}) }
      }),
    ]
    const deploy = out(shipment, ShipmentEdge.deploys).map((d): PipelineStep => ({ stage: PipelineStage.deploy, node: d, runs: d }))
    const steps: PipelineStep[] = [...produce, ...check, ...prove, ...deploy, { stage: PipelineStage.record, node: shipment }]

    if (!environment && steps.some((s) => s.runs !== undefined && programs.includes(s.runs.kind))) errors.push(messages.shipmentWithoutEnvironment(shipment.title))
    return { shipment, ...(environment ? { environment } : {}), steps, errors }
  }
}

export type Api = ReturnType<typeof body>
export default body
