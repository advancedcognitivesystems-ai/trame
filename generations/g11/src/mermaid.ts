/** Trame · Mermaid */

import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { CodeBlock } from "./markdown"

/**
 * Mermaid
 * The syntax of the diagrams that Trame's documents contain: flowcharts and Gantt charts.
 * The marks that several constructs share are here.
 */
export const Mermaid = standard({
  owner: "trame",
  source: "Mermaid 11: flowcharts and Gantt charts",
  url: "https://mermaid.js.org/intro/syntax-reference.html",
  constants: {
    indent: { value: "  ", meaning: "Shifts a statement inside its block: Mermaid ignores it, it helps reading" },
    space: { value: " ", meaning: "Separates a keyword from what it introduces" },
    quote: { value: "\"", meaning: "Surrounds a label" },
  },
})

// Flowcharts ---------------------------------------------------------------------------

/**
 * Label
 * The text of a node, a subgraph or a link: a quotation mark in it becomes an entity code.
 */
export const MermaidLabel = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: entity codes to escape characters",
  url: "https://mermaid.js.org/syntax/flowchart.html#entity-codes-to-escape-characters",
  constants: {
    entity: { value: "#quot;", meaning: "Replaces a quotation mark in a label" },
  },
  write: ({ standard: { quote }, entity }) => (text: string) => text.split(quote).join(entity),
  examples: [{ input: ["The \"graph\""], output: "The #quot;graph#quot;" }],
})

/**
 * Flowchart
 * The keyword, the reading direction, then the statements, shifted by one step.
 */
export const Flowchart = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: direction",
  url: "https://mermaid.js.org/syntax/flowchart.html#direction",
  constants: {
    keyword: { value: "flowchart", meaning: "Opens a flowchart" },
    down: { value: "TB", meaning: "From top to bottom" },
    right: { value: "LR", meaning: "From left to right" },
    up: { value: "BT", meaning: "From bottom to top" },
    left: { value: "RL", meaning: "From right to left" },
  },
  write: ({ standard: { indent, space }, keyword, down, right, up, left }) => {
    const directions = { down, right, up, left }
    return (direction: keyof typeof directions, statements: string[]) => [keyword + space + directions[direction], ...statements.map((s) => indent + s)]
  },
  examples: [{ input: ["down", ["n0 --> n1"]], output: ["flowchart TB", "  n0 --> n1"] }],
})

/**
 * Node
 * An identifier, a rectangle that carries the label (one line per item), then the class that gives it its style.
 */
export const MermaidNode = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: a node with text; styling: classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#a-node-with-text",
  constants: {
    open: { value: "[", meaning: "Opens the rectangle shape" },
    close: { value: "]", meaning: "Closes the rectangle shape" },
    lineBreak: { value: "<br/>", meaning: "Starts a new line in a label" },
    classMark: { value: ":::", meaning: "Attaches a class to the node" },
  },
  deps: { label: MermaidLabel },
  write: ({ standard: { quote }, open, close, lineBreak, classMark, label }) => (id: string, lines: string[], className: string) =>
    id + open + quote + lines.map((l) => label(l)).join(lineBreak) + quote + close + classMark + className,
  examples: [{ input: ["n0", ["Palette", "<small>Decision</small>"], "held"], output: "n0[\"Palette<br/><small>Decision</small>\"]:::held" }],
})

/**
 * Subgraph
 * A group of nodes, with its title; its statements are shifted by one step.
 */
export const Subgraph = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: subgraphs",
  url: "https://mermaid.js.org/syntax/flowchart.html#subgraphs",
  constants: {
    start: { value: "subgraph", meaning: "Opens the group" },
    end: { value: "end", meaning: "Closes the group" },
    open: { value: "[", meaning: "Opens the title" },
    close: { value: "]", meaning: "Closes the title" },
  },
  deps: { label: MermaidLabel },
  write: ({ standard: { indent, space, quote }, start, end, open, close, label }) => (id: string, title: string, statements: string[]) =>
    [start + space + id + open + quote + label(title) + quote + close, ...statements.map((s) => indent + s), end],
  examples: [{ input: ["engine", "Trame · Engine", ["n0"]], output: ["subgraph engine[\"Trame · Engine\"]", "  n0", "end"] }],
})

/**
 * Link
 * Two nodes joined by a stroke, with a text: solid, dotted, dotted without an arrowhead, or thick.
 */
export const MermaidLink = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: links between nodes",
  url: "https://mermaid.js.org/syntax/flowchart.html#links-between-nodes",
  constants: {
    solid: { value: "-->", meaning: "Solid stroke, with an arrowhead" },
    dotted: { value: "-.->", meaning: "Dotted stroke, with an arrowhead" },
    dottedOpen: { value: "-.-", meaning: "Dotted stroke, without an arrowhead" },
    thick: { value: "==>", meaning: "Thick stroke, with an arrowhead" },
    bar: { value: "|", meaning: "Surrounds the text of the link" },
  },
  deps: { label: MermaidLabel },
  write: ({ standard: { space }, solid, dotted, dottedOpen, thick, bar, label }) => {
    const strokes = { solid, dotted, dottedOpen, thick }
    return (from: string, to: string, stroke: keyof typeof strokes, text: string) =>
      from + space + strokes[stroke] + bar + label(text) + bar + space + to
  },
  examples: [{ input: ["n0", "n1", "dotted", "Depends on"], output: "n0 -.->|Depends on| n1" }],
})

/**
 * Style properties
 * SVG properties, each name:value, separated by commas.
 */
export const StyleProperties = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: styling and classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#styling-and-classes",
  constants: {
    colon: { value: ":", meaning: "Separates the name of a property from its value" },
    comma: { value: ",", meaning: "Separates two properties" },
    fill: { value: "fill", meaning: "The background colour" },
    stroke: { value: "stroke", meaning: "The outline colour" },
    textColour: { value: "color", meaning: "The colour of the text" },
    dashes: { value: "stroke-dasharray", meaning: "A dashed outline: the length of a dash, then of the gap" },
    opacity: { value: "opacity", meaning: "The opacity, from 0 (invisible) to 1" },
  },
  write: ({ colon, comma, fill, stroke, textColour, dashes, opacity }) => {
    const names = { fill, stroke, textColour, dashes, opacity }
    return (properties: Partial<Record<keyof typeof names, string>>) =>
      Object.entries(properties).map(([name, value]) => names[name as keyof typeof names] + colon + value).join(comma)
  },
  examples: [{ input: [{ fill: "#ffffff", stroke: "#5a6672" }], output: "fill:#ffffff,stroke:#5a6672" }],
})

/**
 * Class definition
 * A style class, which nodes receive by its name.
 */
export const ClassDefinition = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: classes",
  url: "https://mermaid.js.org/syntax/flowchart.html#classes",
  constants: {
    keyword: { value: "classDef", meaning: "Defines a class" },
  },
  deps: { styleProperties: StyleProperties },
  write: ({ standard: { space }, keyword, styleProperties }) => (name: string, style: Parameters<typeof styleProperties>[0]) =>
    keyword + space + name + space + styleProperties(style),
  examples: [{ input: ["held", { fill: "#e1f1e7", stroke: "#26734a", textColour: "#17202a" }], output: "classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a" }],
})

/**
 * Node style
 * Style properties given directly to nodes.
 */
export const NodeStyle = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Flowcharts: styling a node",
  url: "https://mermaid.js.org/syntax/flowchart.html#styling-a-node",
  constants: {
    keyword: { value: "style", meaning: "Gives a style to nodes" },
    comma: { value: ",", meaning: "Separates the identifiers of the nodes" },
  },
  deps: { styleProperties: StyleProperties },
  write: ({ standard: { space }, keyword, comma, styleProperties }) => (ids: string[], style: Parameters<typeof styleProperties>[0]) =>
    keyword + space + ids.join(comma) + space + styleProperties(style),
  examples: [{ input: [["n1", "n2"], { dashes: "4 3" }], output: "style n1,n2 stroke-dasharray:4 3" }],
})

// Gantt charts ---------------------------------------------------------------------------

/**
 * Gantt chart
 * The keyword, the format of the given dates, the format of the axis dates, the title, then the sections.
 */
export const Gantt = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Gantt: syntax, date format, axis format",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constants: {
    keyword: { value: "gantt", meaning: "Opens a Gantt chart" },
    dateFormat: { value: "dateFormat", meaning: "The format of the dates given to the tasks" },
    axisFormat: { value: "axisFormat", meaning: "The format of the dates on the axis" },
    title: { value: "title", meaning: "The title of the chart" },
  },
  write: ({ standard: { indent, space }, keyword, dateFormat, axisFormat, title }) => (dates: string, axis: string, heading: string, statements: string[]) =>
    [keyword, indent + dateFormat + space + dates, indent + axisFormat + space + axis, indent + title + space + heading, ...statements.map((s) => indent + s)],
  examples: [{
    input: ["YYYY-MM-DD", "%d.%m", "Around 17 October 2026", ["section Deadlines"]],
    output: ["gantt", "  dateFormat YYYY-MM-DD", "  axisFormat %d.%m", "  title Around 17 October 2026", "  section Deadlines"],
  }],
})

/**
 * Name in a Gantt chart
 * The name of a section or of a task: colons are forbidden in it, they become spaces.
 */
export const GanttName = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Gantt: syntax (the name of a task comes before the colon)",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constants: {
    colon: { value: ":", meaning: "Separates a name from its data: a name cannot contain one" },
  },
  write: ({ standard: { space }, colon }) => (text: string) => text.split(colon).join(space),
  examples: [{ input: ["Review: committee"], output: "Review  committee" }],
})

/**
 * Section
 * A group of tasks, with its name; its tasks are shifted by one step.
 */
export const GanttSection = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Gantt: sections",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constants: {
    keyword: { value: "section", meaning: "Opens a section" },
  },
  deps: { name: GanttName },
  write: ({ standard: { indent, space }, keyword, name }) => (title: string, tasks: string[]) => [keyword + space + name(title), ...tasks.map((t) => indent + t)],
  examples: [{ input: ["Period: free", ["In force : 2026-01-01, 2026-12-31"]], output: ["section Period  free", "  In force : 2026-01-01, 2026-12-31"] }],
})

/**
 * Task
 * A name, the colon, then its data: tags, a start date, an end or a duration.
 */
export const GanttTask = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Gantt: task syntax",
  url: "https://mermaid.js.org/syntax/gantt.html#syntax",
  constants: {
    colon: { value: ":", meaning: "Separates the name of the task from its data" },
    comma: { value: ",", meaning: "Separates the data" },
  },
  deps: { name: GanttName },
  write: ({ standard: { space }, colon, comma, name }) => (heading: string, data: string[]) =>
    name(heading) + space + colon + space + data.join(comma + space),
  examples: [{ input: ["In force", ["2026-01-01", "2026-12-31"]], output: "In force : 2026-01-01, 2026-12-31" }],
})

/**
 * Milestone
 * A task with no duration, marked as a milestone: a date to see.
 */
export const Milestone = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Gantt: milestones",
  url: "https://mermaid.js.org/syntax/gantt.html#milestones",
  constants: {
    tag: { value: "milestone", meaning: "Makes the task a milestone" },
    duration: { value: "0d", meaning: "No duration" },
  },
  deps: { ganttTask: GanttTask },
  write: ({ tag, duration, ganttTask }) => (heading: string, date: string) => ganttTask(heading, [tag, date, duration]),
  examples: [{ input: ["Review", "2026-11-01"], output: "Review : milestone, 2026-11-01, 0d" }],
})

// In a Markdown document --------------------------------------------------------------

/**
 * Mermaid block
 * A code block whose language is "mermaid": GitHub, GitLab and most editors draw the diagram in it.
 */
export const MermaidBlock = syntax({
  owner: "trame",
  standard: Mermaid,
  section: "Integration: a diagram in a Markdown document (GitHub documentation)",
  url: "https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams",
  constants: {
    language: { value: "mermaid", meaning: "The language of the code block that carries a diagram" },
  },
  deps: { codeBlock: CodeBlock },
  write: ({ language, codeBlock }) => (lines: string[]) => codeBlock(language, lines),
  examples: [{ input: [["flowchart LR"]], output: ["```mermaid", "flowchart LR", "```"] }],
})
