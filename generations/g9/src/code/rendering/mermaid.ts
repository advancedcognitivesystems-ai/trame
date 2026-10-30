// Figure rendering: one Mermaid diagram per figure. The syntax comes from the Mermaid spec (src/mermaid.ts), the display
// choices from the decision "Figures: Mermaid diagrams in documents" (src/documents.ts), the colours from the palette.
// The decision and the palette name vocabulary values by their key: a status class is the key of the status. Pure.

import { DateRole, EdgeRole, Nature, Shape, Status, fullDate, keyOf } from "../../../trame/kernel"
import type { Figure, ProvidedBy } from "../../../trame/kernel"
import type { Palette } from "../../architecture"
import type { FigureDisplay } from "../../documents"
import type { Dates, RenderingMessages } from "../../messages"
import type * as md from "../../markdown"
import type * as mm from "../../mermaid"

type GraphFigure = Extract<Figure, { type: "graph" }>
type TimelineFigure = Extract<Figure, { type: "timeline" }>

export interface Deps {
  figures: FigureDisplay
  palette: Palette
  small: ProvidedBy<typeof md.Small>
  flowchart: ProvidedBy<typeof mm.Flowchart>
  node: ProvidedBy<typeof mm.MermaidNode>
  subgraph: ProvidedBy<typeof mm.Subgraph>
  link: ProvidedBy<typeof mm.MermaidLink>
  classDefinition: ProvidedBy<typeof mm.ClassDefinition>
  nodeStyle: ProvidedBy<typeof mm.NodeStyle>
  gantt: ProvidedBy<typeof mm.Gantt>
  ganttSection: ProvidedBy<typeof mm.GanttSection>
  ganttTask: ProvidedBy<typeof mm.GanttTask>
  milestone: ProvidedBy<typeof mm.Milestone>
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { figures, small, flowchart, node, subgraph, link, classDefinition, nodeStyle, gantt, ganttSection, ganttTask, milestone } = deps
  const { dates, messages } = deps
  const { light, statuses, ink } = deps.palette

  /** A graph: its nodes (by module, for layers), its edges, then the style of each status. */
  function graph(f: GraphFigure): string[] {
    const ids = new Map(f.nodes.map((n, i) => [n.ref, figures.idPrefix + i]))
    const id = (ref: string) => ids.get(ref)!
    // The class of a node: the key of its status, or the class of a node without a status.
    const statusClass = (n: GraphFigure["nodes"][number]) => (n.status && keyOf(Status, n.status)) || figures.defaultStatus
    // The title of the node, and its kind in small type below.
    const toNode = (n: GraphFigure["nodes"][number]) => node(id(n.ref), [n.title, small(n.kindLabel)], statusClass(n))
    const statements: string[] = []
    if (f.shape === Shape.layers && f.groups.length > 1) {
      for (const g of f.groups) {
        const members = f.nodes.filter((n) => n.module === g.id)
        if (members.length) statements.push(...subgraph(g.id, g.label, members.map(toNode)))
      }
    } else {
      statements.push(...f.nodes.map(toNode))
    }
    const { strokes } = figures
    for (const e of f.edges) {
      if (!ids.has(e.from) || !ids.has(e.to)) continue
      const nature = keyOf(Nature, e.nature)
      const role = e.role && keyOf(EdgeRole, e.role)
      const stroke = nature === "computed" || nature === "inferred" ? strokes[nature]
        : role === "winner" || role === "support" ? strokes[role]
          : strokes.other
      statements.push(link(id(e.from), id(e.to), stroke, e.active ? e.label : messages.inactiveLabel(e.label)))
    }
    for (const [status, c] of Object.entries(statuses)) {
      statements.push(classDefinition(status, { fill: light[c.fill], stroke: light[c.stroke], textColour: light[ink] }))
    }
    const historical = f.nodes.filter((n) => n.history).map((n) => id(n.ref))
    if (historical.length) statements.push(nodeStyle(historical, figures.history))
    for (const n of f.nodes.filter((x) => !x.active)) statements.push(nodeStyle([id(n.ref)], figures.inactive))
    return flowchart(figures.directions[keyOf(Shape, f.shape)!], statements)
  }

  /** A Gantt chart: one section per dated node (its periods in force, its milestones), then the date of the graph. */
  function timeline(f: TimelineFigure): string[] {
    const g = figures.gantt
    const isMilestone = (role: DateRole) => {
      const key = keyOf(DateRole, role)
      return key !== undefined && g.milestones.includes(key)
    }
    const sections: string[] = []
    for (const lane of f.lanes) {
      sections.push(...ganttSection(lane.title, [
        ...lane.periods.map((p) => ganttTask(g.period, [p.from ?? f.from, p.until ?? f.to])),
        ...lane.marks.filter((m) => isMilestone(m.role)).map((m) => milestone(m.label, fullDate(m.date))),
      ]))
    }
    sections.push(...ganttSection(g.today, [milestone(dates.format(f.today), f.today)]))
    return gantt(g.dateFormat, g.axisFormat, `${g.title} ${dates.format(f.today)}`, sections)
  }

  /** The lines of the diagram of a figure. */
  const diagram = (f: Figure): string[] => (f.type === "graph" ? graph(f) : timeline(f))

  return { diagram }
}

export type Api = ReturnType<typeof body>
export default body
