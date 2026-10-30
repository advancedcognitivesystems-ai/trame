// Le format intermédiaire : ce que produisent les types et les vues, ce que traduisent les rendus.
// Il ne dit que du sens : jamais de gras, de couleur ni de forme. C'est le rendu qui choisit l'apparence.
// Tout y est sérialisable en JSON : la page le reçoit tel quel.

import type { Unit } from "./format"

export type { Unit }
export type Status = "tenu" | "violé" | "bloqué" | "inconnu"
export type Severity = "bloquant" | "erreur" | "avertissement"
export type Json = null | boolean | number | string | Json[] | { [k: string]: Json }

/** Au fond d'une valeur composée, une partie non décidée (`{ "$ouvert": "à décider" }`). */
export const OPEN_KEY = "$ouvert"

/** Une référence à un nœud, avec son titre : un rendu n'a rien à chercher. */
export interface NodeRef {
  ref: string
  title: string
}

// Dans une phrase ------------------------------------------------------------

export type Inline =
  | string
  /** Une valeur, avec son unité. `open` : pas décidée, ou contestée. `rule` : une règle (une fonction), d'origine ou redéfinie. */
  | { t: "value"; value: Json; unit?: Unit; type?: "date" | "range" | "map"; open?: "à décider" | "contesté"; rule?: "d'origine" | "redéfinie" }
  | ({ t: "ref" } & NodeRef)
  /** Un autre document (un module, une vue). */
  | { t: "doc"; id: string; title: string }
  | { t: "status"; status: Status }
  | { t: "severity"; severity: Severity }
  | { t: "date"; date: string }
  | { t: "person"; name: string }
  /** Un identifiant, un chemin, un nom de signal : `value.ultra`, `src/comite.ts:12`. */
  | { t: "ident"; text: string }

// Blocs ----------------------------------------------------------------------

export type Outcome = "validé" | "échoue" | "bloqué" | "erreur"
export type Validity = "en vigueur" | "pas encore en vigueur" | "plus en vigueur"
export type Nature = "déclarée" | "déduite" | "calculée"
export type DateRole = "début" | "fin" | "échéance" | "revue"

export interface Fact {
  label: string
  value: Inline[]
}

export interface IssueItem {
  severity: Severity
  what: string
  where?: NodeRef | string
  /** Fichier et ligne, quand le problème porte sur un nœud. */
  source?: string
  owner?: string
  effect?: string
}

/** Un recoupement de revendications, et comment il a été tranché. */
export interface ResolutionBlock {
  type: "resolution"
  target: NodeRef
  paths: string[]
  claimants: NodeRef[]
  outcome: "appliqué" | "contesté"
  applied: NodeRef[]
  replaced: [NodeRef, NodeRef][]
  reason: string
  arbiter?: string
  because: NodeRef[]
}

/** La fiche d'un nœud : composée par le noyau, avec ce que rend son type. */
export interface Card {
  type: "card"
  ref: string
  id: string
  title: string
  module: string
  kind: string
  kindLabel: string
  source?: string
  status?: Status
  published?: boolean
  repealedBy?: NodeRef
  description?: string
  history: boolean
  active: boolean
  /** Ce que rend le type. */
  body: Block[]
  facts: Fact[]
  links: { label: string; nature: Nature; active: boolean; targets: NodeRef[] }[]
  resolutions: ResolutionBlock[]
  /** Les nœuds affichés à l'intérieur de celui-ci (par exemple ses critères d'acceptation). */
  children: { ref: string; body: Block[] }[]
  /** Les vues par nœud qui s'appliquent à celui-ci. */
  views: { name: string; label: string }[]
}

export interface FigureNode extends NodeRef {
  kind: string
  kindLabel: string
  module: string
  status?: Status
  active: boolean
  history: boolean
  root: boolean
  repealed: boolean
  /** Une décision reste à prendre sur ce nœud. */
  open: boolean
  /** Rang dans la figure (distance à l'objectif, profondeur depuis le départ, place dans le chemin). */
  layer: number
}

export interface FigureEdge {
  from: string
  to: string
  label: string
  inverse: string
  nature: Nature
  active: boolean
  /** Rôle dans un recoupement. */
  role?: "gagnant" | "écarté" | "remplacé" | "contesté" | "appui"
}

export interface TimelineLane extends NodeRef {
  kindLabel: string
  module: string
  active: boolean
  periods: { from?: string; until?: string }[]
  marks: { date: string; label: string; role: DateRole }[]
}

export type Figure =
  | {
    type: "graph"
    /** La forme de la question : des couches, un arbre depuis un nœud, un chemin. */
    shape: "couches" | "arbre" | "chemin"
    focus?: string
    nodes: FigureNode[]
    edges: FigureEdge[]
    groups: { id: string; label: string }[]
  }
  | { type: "timeline"; today: string; from: string; to: string; lanes: TimelineLane[] }

export type Block =
  | { type: "para"; content: Inline[] }
  | { type: "facts"; items: Fact[] }
  | { type: "list"; items: Inline[][] }
  | { type: "table"; head: string[]; rows: Inline[][][] }
  | { type: "code"; lang: string; text: string; source?: string }
  | { type: "checks"; title?: Inline[]; items: { name: string; outcome: Outcome; detail?: Inline[] }[] }
  | { type: "validity"; state: Validity; from?: string; until?: string }
  | { type: "details"; summary: string; blocks: Block[] }
  | { type: "section"; title: string; id?: string; blocks: Block[] }
  /** La ligne qui résume un document. */
  | { type: "summary"; content: Inline[] }
  | { type: "issues"; items: IssueItem[] }
  | ResolutionBlock
  | Card
  | { type: "figure"; figure: Figure; caption?: string }

export type BlockType = Block["type"]

// Documents ------------------------------------------------------------------

export type ViewGroup = "module" | "document" | "figure" | "nœud" | "bilan"

export interface Document {
  /** `annulation`, `responsables`, `impact:annulation.DelaiGratuit` */
  id: string
  view: string
  group: ViewGroup
  title: string
  /** Pour une vue par nœud : le nœud. */
  arg?: string
  /** Écrit dans docs/ par `trame build`. */
  file?: string
  intro?: Inline[]
  blocks: Block[]
}

/** Ce que `trame payload` produit pour une date : tout ce qu'une page a besoin d'afficher. */
export interface Payload {
  date: string
  generatedAt: string
  modules: { id: string; title: string }[]
  nodes: (NodeRef & { module: string; kindLabel: string })[]
  views: { name: string; label: string; group: ViewGroup; per?: "module" | "nœud" }[]
  documents: Document[]
  /** Les sorties machine, par nom de fichier (la disposition du projet dit lesquels). */
  machine: Record<string, string>
  /** Chaque document rendu par le moteur, en Markdown et en texte : la page les montre tels quels. */
  rendus?: Record<string, { markdown: string; texte: string }>
  /** Les dates où le graphe peut changer (tirées des champs de date). */
  candidates: string[]
  /** Toutes les dates portées par les nœuds, avec leur rôle. */
  events: (NodeRef & { date: string; label: string; role: DateRole })[]
  /** De quoi comparer deux compilations. */
  state: {
    statuses: Record<string, Status | null>
    issues: { key: string; severity: Severity; what: string; ref?: string; owner?: string }[]
    resolutions: { key: string; outcome: string; applied: string[] }[]
  }
}

/** Le graphe compilé à plusieurs dates : ce que reçoit la page. */
export interface Bundle {
  generatedAt: string
  today: string
  mode: "dev" | "export"
  dates: { date: string; payload?: Payload; error?: string }[]
  /** Ce que la dernière modification a changé (trame dev). */
  changes?: Document
  /** La dernière compilation a échoué : on garde le dernier graphe valide. */
  error?: string
}
