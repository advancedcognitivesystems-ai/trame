/** Documents · Appearance */

import type { KeyOf, Status } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"

// The look of the documents: the colours of the figures by meaning, which the Mermaid figures and a page share.

/** The colours of the documents, light and dark, by variable name; for each status, its fill and its stroke. */
export interface Colours {
  light: Record<string, string>
  dark: Record<string, string>
  /** For each status, by its key in `Status` (and "neutral"), the background colour and the stroke colour, by variable name. */
  statuses: Record<KeyOf<typeof Status> | "neutral", { fill: string; stroke: string }>
  /** The colour of the text. */
  ink: string
}

/**
 * Palette
 * The colours of the page and of the figures, by meaning (held, blocked, violated, unknown, accent), light and dark.
 * A page turns them into its CSS variables; the Mermaid figures are coloured with them.
 * The statuses are named by their key in the prelude's `Status` vocabulary.
 */
export const Palette = decision<Colours>({
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
