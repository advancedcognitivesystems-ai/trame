/** Trame · Appearance */

import { decision } from "../kinds/decision"
import type { Palette as PaletteType, Typography as TypographyType } from "./architecture"

/**
 * Palette
 * The colours of the page and of the figures, by meaning (held, blocked, violated, unknown, accent), light and dark.
 * The page turns them into its CSS variables; the Markdown renderer colours its Mermaid figures with them.
 * The statuses are named by their key in the prelude's `Status` vocabulary.
 */
export const Palette = decision<PaletteType>({
  owner: "trame",
  value: {
    light: {
      bg: "#f3f5f6", panel: "#ffffff", ink: "#17202a", muted: "#5a6672", line: "#d9e0e5",
      accent: "#34509a", "accent-soft": "#e5ebf7",
      ok: "#26734a", "ok-soft": "#e1f1e7", warn: "#9a6200", "warn-soft": "#fbf0d9",
      bad: "#ad2a22", "bad-soft": "#f9e3e1", unk: "#65707c", "unk-soft": "#e9edf0",
      "term-bg": "#121820", "term-ink": "#d8dee5", "term-dim": "#7f8b97",
    },
    dark: {
      bg: "#0e1217", panel: "#151b22", ink: "#e4e9ee", muted: "#98a3ae", line: "#29323c",
      accent: "#93abef", "accent-soft": "#1e2a44",
      ok: "#7fd19b", "ok-soft": "#173325", warn: "#f2c063", "warn-soft": "#3a2d12",
      bad: "#f08a80", "bad-soft": "#3d1c1a", unk: "#a5afb9", "unk-soft": "#222a33",
      "term-bg": "#0a0e13", "term-ink": "#d8dee5", "term-dim": "#7f8b97",
    },
    statuses: {
      held: { fill: "ok-soft", stroke: "ok" },
      blocked: { fill: "warn-soft", stroke: "warn" },
      violated: { fill: "bad-soft", stroke: "bad" },
      unknown: { fill: "unk-soft", stroke: "unk" },
      neutral: { fill: "panel", stroke: "muted" },
    },
    ink: "ink",
  },
})

/**
 * Typography
 * The fonts of the page: the text of the documents, the interface, the code; and where they load from.
 */
export const Typography = decision<TypographyType>({
  owner: "trame",
  value: {
    fonts: {
      "font-doc": "\"Literata\", \"Iowan Old Style\", Georgia, serif",
      "font-ui": "\"Instrument Sans\", \"Segoe UI\", system-ui, sans-serif",
      "font-mono": "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
    },
    loading: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&display=swap",
    ],
  },
})

/** The name of a variable of the page, without its two dashes. */
type Variable = string

// The measures of the page: its design scale. Each value is a variable of the page, named by its key (--space-sm),
// that the page writes before its style sheets; the sheets write none of them, they use the variables. Where a family
// has steps that come back, they are named by their size (2xs to 5xl); a value used for one purpose only is named by
// that purpose. The values are those the page had when its sheet was first read: the page looks as it did.

/**
 * Spacing
 * The space around and between things: margins, paddings, gaps, offsets. The steps the page reuses go from none to
 * 5xl; the others are named by what they space (the inside of the toggle, a list item, a control, a cell of a table, a
 * pill, the space above a fourth-level title, the offset of an anchor, the top and bottom of the page). A safe area
 * that the browser does not know is none, as a length, so that it can be added to another length.
 */
export const Spacing = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "space-none": "0", "space-hairline": "1px", "space-3xs": "2px", "space-2xs": "4px", "space-xs": "6px", "space-sm": "8px",
    "space-md": "10px", "space-lg": "12px", "space-xl": "14px", "space-2xl": "16px", "space-3xl": "18px", "space-4xl": "20px",
    "space-5xl": "40px",
    "inset-toggle": "3px", "stack-list-item": "3px", "inset-control-block": "7px", "inset-control-inline": "9px",
    "inset-cell-block": "7px", "inset-pill-inline": "7px", "stack-h4": "22px", "offset-anchor": "24px",
    "page-inset-top": "28px", "page-inset-bottom": "64px", "page-inset-bottom-narrow": "48px", "safe-area-default": "0px",
  },
})

/**
 * Radii
 * The rounding of corners, from the mark of an open value (2xs) to a chip (3xl); round makes a circle.
 */
export const Radii = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "radius-2xs": "3px", "radius-xs": "4px", "radius-sm": "5px", "radius-md": "6px", "radius-lg": "7px", "radius-xl": "8px",
    "radius-2xl": "10px", "radius-3xl": "14px", "radius-round": "50%",
  },
})

/**
 * Type scale
 * The sizes of text, its weights, its line heights and its letter spacing. The sizes of the interface go from 2xs to
 * 3xl; the reading text, the code in it, the titles, the mark under a date and the label of an edge have their own.
 * Line heights are named by what they set.
 */
export const TypeScale = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "text-2xs": "11px", "text-xs": "11.5px", "text-sm": "12px", "text-md": "12.5px", "text-lg": "13px", "text-xl": "13.5px",
    "text-2xl": "14px", "text-3xl": "15px",
    "text-date-mark": "10px", "text-edge": "10.5px", "text-doc": "16px", "text-code": "0.82em",
    "text-h1": "2rem", "text-h1-narrow": "1.6rem", "text-h3": "1.28rem",
    "weight-regular": "400", "weight-medium": "500", "weight-semibold": "600",
    "leading-h1": "1.15", "leading-date": "1.2", "leading-h3": "1.25", "leading-table": "1.4", "leading-ui": "1.5",
    "leading-code": "1.55", "leading-pre": "1.6", "leading-doc": "1.62",
    "tracking-tight": "-0.01em", "tracking-xs": "0.02em", "tracking-sm": "0.03em", "tracking-md": "0.06em",
    "tracking-lg": "0.08em", "tracking-xl": "0.09em",
  },
})

/**
 * Opacities
 * How much shows of what fades: full, then from strong to faintest (what is inactive, disabled, the low point of a
 * pulse).
 */
export const Opacities = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "opacity-full": "1", "opacity-strong": "0.85", "opacity-medium": "0.6", "opacity-muted": "0.45", "opacity-faint": "0.35",
    "opacity-faintest": "0.3", "opacity-link": "0.1", "opacity-link-dimmed": "0",
  },
})

/**
 * Strokes
 * The width of lines (a border, an underline), of the focus ring and its offset, the offset of an underline; in the
 * figures, the width of each stroke and the dashes of what is historical, inferred, computed, discarded, and of today.
 */
export const Strokes = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "line-width": "1px", "focus-width": "2px", "focus-offset": "2px", "underline-offset": "2px",
    "stroke-grid": "1", "stroke-box": "1.2", "stroke-edge": "1.3", "stroke-today": "1.4", "stroke-open": "1.5",
    "stroke-strong": "2", "stroke-winner": "2.2", "stroke-focus": "2.4", "stroke-halo": "4px",
    "dash-history": "5 3", "dash-inferred": "2 3", "dash-computed": "6 4", "dash-discarded": "5 4", "dash-today": "4 3",
  },
})

/**
 * Motion
 * How long the page moves: the pulse of a compilation running, the flash of the node reached.
 */
export const Motion = decision<Record<Variable, string>>({
  owner: "trame",
  value: { "duration-pulse": "1s", "duration-flash": "1.6s" },
})

/**
 * Page layout
 * The widths of the page and of its parts: the navigator, the whole page, the measure of the reading column, a cell of
 * the dates, the dot of the state, a badge; the height of the screen, a full width, a fraction of what is left and a
 * track that takes it without overflowing; the indent of lists; the line kept for the mark under a date.
 */
export const PageLayout = decision<Record<Variable, string>>({
  owner: "trame",
  value: {
    "side-width": "300px", "page-width": "1320px", "measure": "80ch", "date-min": "62px", "dot-size": "8px", "badge-min": "20px",
    "screen-height": "100vh", "full": "100%", "fraction": "1fr", "track-fill": "minmax(0, 1fr)",
    "indent-compact": "1.1em", "indent-doc": "1.2em", "date-mark-line": "1.2em",
  },
})

/**
 * Narrow screen
 * The width under which the page stacks its navigator over its reading column, and reaches the documents by a picker:
 * the rules of a narrow screen apply below it. A media query cannot read a variable, so the page writes this width in
 * the media rule itself.
 */
export const NarrowScreen = decision<string>({ owner: "trame", value: "920px" })

// The figures the page shows ----------------------------------------------------------------

/**
 * Drawing of a graph
 * A graph is drawn layer under layer, each node a box: its title on two lines at most, its kind and status under it,
 * a dot when a decision remains to be taken. The nodes of a layer are ordered by module, then moved under the average
 * place of their neighbours, a few passes down and up (barycentres). An edge between two layers is a curve from the
 * foot of one box to the head of the other; between two nodes of the same layer, an arch over them. A graph with more
 * nodes than "explored" is not drawn whole: the page explores it.
 */
export const GraphDrawing = decision<{
  box: { width: number; height: number; radius: number; inset: number; firstLine: number; lineHeight: number; kindBottom: number }
  open: { radius: number; inset: number }
  gaps: { across: number; down: number }
  margin: number
  head: number
  title: { chars: number; lines: number; cut: number }
  kind: { chars: number }
  passes: number
  arch: { rise: number; label: number }
  labelBaseline: number
  narrowest: number
  marker: { box: number; tip: number; size: number }
  explored: number
}>({
  owner: "trame",
  value: {
    box: { width: 178, height: 60, radius: 7, inset: 10, firstLine: 19, lineHeight: 15, kindBottom: 9 },
    open: { radius: 5, inset: 10 },
    gaps: { across: 22, down: 62 },
    margin: 10,
    head: 30,
    title: { chars: 24, lines: 2, cut: 2 },
    kind: { chars: 27 },
    passes: 8,
    arch: { rise: 34, label: 26 },
    labelBaseline: 4,
    narrowest: 0.62,
    marker: { box: 10, tip: 9, size: 7 },
    explored: 40,
  },
})

/**
 * Drawing of a timeline
 * One lane per dated node: its title and kind on the left, its periods in force as bars, its deadlines as diamonds and
 * its reviews as dots; a line per month, and a line at the date of the graph.
 */
export const TimelineDrawing = decision<{
  width: number
  label: number
  row: number
  top: number
  pad: number
  narrowest: number
  titleChars: number
  period: { y: number; height: number; radius: number; shortest: number }
  mark: { centre: number; top: number; bottom: number; half: number; radius: number }
  grid: { above: number }
  tick: { x: number; above: number }
  lane: { title: number; kind: number }
  today: { above: number; below: number; label: number }
  bottom: number
  shortestSpan: number
}>({
  owner: "trame",
  value: {
    width: 920, label: 240, row: 36, top: 40, pad: 18, narrowest: 640, titleChars: 32,
    period: { y: 10, height: 12, radius: 6, shortest: 4 },
    mark: { centre: 16, top: 8, bottom: 24, half: 7, radius: 5 },
    grid: { above: 8 },
    tick: { x: 4, above: 12 },
    lane: { title: 15, kind: 29 },
    today: { above: 26, below: 4, label: 5 },
    bottom: 12,
    shortestSpan: 1,
  },
})

/**
 * Legend of a graph
 * Under a graph, a sample of each stroke and box it uses, and what it means.
 */
export const LegendDrawing = decision<{
  line: { width: number; height: number; stroke: number }
  box: { width: number; height: number; inset: number; radius: number; faded: string }
  dot: { size: number; radius: number }
  dashes: { inferred: string; computed: string; discarded: string; history: string }
}>({
  owner: "trame",
  value: {
    line: { width: 26, height: 8, stroke: 2 },
    box: { width: 18, height: 12, inset: 1, radius: 2, faded: "0.45" },
    dot: { size: 12, radius: 5 },
    dashes: { inferred: "2 3", computed: "6 4", discarded: "5 4", history: "3 2" },
  },
})
