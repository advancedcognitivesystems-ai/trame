/** Trame · Apparence */

import { decision } from "../kinds/decision"
import type { Palette as PaletteType, Typographie as TypographieType } from "./architecture"

/**
 * Palette
 * Les couleurs de la page et des figures, par sens (tenu, bloqué, violé, inconnu, accent), en clair et en sombre.
 * La page en fait ses variables CSS ; le rendu Markdown en colore ses figures Mermaid.
 */
export const Palette = decision<PaletteType>({
  owner: "trame",
  value: {
    clair: {
      bg: "#f3f5f6", panel: "#ffffff", ink: "#17202a", muted: "#5a6672", line: "#d9e0e5",
      accent: "#34509a", "accent-soft": "#e5ebf7",
      ok: "#26734a", "ok-soft": "#e1f1e7", warn: "#9a6200", "warn-soft": "#fbf0d9",
      bad: "#ad2a22", "bad-soft": "#f9e3e1", unk: "#65707c", "unk-soft": "#e9edf0",
      "term-bg": "#121820", "term-ink": "#d8dee5", "term-dim": "#7f8b97",
    },
    sombre: {
      bg: "#0e1217", panel: "#151b22", ink: "#e4e9ee", muted: "#98a3ae", line: "#29323c",
      accent: "#93abef", "accent-soft": "#1e2a44",
      ok: "#7fd19b", "ok-soft": "#173325", warn: "#f2c063", "warn-soft": "#3a2d12",
      bad: "#f08a80", "bad-soft": "#3d1c1a", unk: "#a5afb9", "unk-soft": "#222a33",
      "term-bg": "#0a0e13", "term-ink": "#d8dee5", "term-dim": "#7f8b97",
    },
    statuts: {
      tenu: { fond: "ok-soft", trait: "ok" },
      bloqué: { fond: "warn-soft", trait: "warn" },
      violé: { fond: "bad-soft", trait: "bad" },
      inconnu: { fond: "unk-soft", trait: "unk" },
      neutre: { fond: "panel", trait: "muted" },
    },
    encre: "ink",
  },
})

/**
 * Typographie
 * Les polices de la page : le texte des documents, l'interface, le code ; et d'où elles se chargent.
 */
export const Typographie = decision<TypographieType>({
  owner: "trame",
  value: {
    polices: {
      "font-doc": "\"Literata\", \"Iowan Old Style\", Georgia, serif",
      "font-ui": "\"Instrument Sans\", \"Segoe UI\", system-ui, sans-serif",
      "font-mono": "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
    },
    chargement: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&display=swap",
    ],
  },
})
