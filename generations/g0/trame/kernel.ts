// Noyau Trame · API publique.
// C'est tout ce que voient les types (kinds/), les vues (views/) et le graphe du produit (src/).
// Le noyau ne connaît aucun type de nœud ni aucune vue : il sait seulement ce qu'est un type et ce qu'est une vue.
// Types et vues ne lisent le graphe que par cette API : Graph, Q et View (et Compilation pour les vues).

import {
  HOLE, REMOVE as REMOVE_SYMBOL, isHole as isHoleImpl, isNode, isPlain, refOf, Hole, kinds, views,
  instantiate, patchLeaves, getPath, fileBody, type FileBody,
} from "./internal"
import type {
  Block, Card, DateRole, Document, FigureEdge, FigureNode, Figure, Inline, IssueItem, Json, Outcome, ResolutionBlock,
  Severity, Status, Validity, ViewGroup,
} from "./ir"
import { OPEN_KEY } from "./ir"
import type { Unit } from "./format"

export { Hole, patchLeaves, getPath }
export type { FileBody }
export * from "./format"
export type * from "./ir"
export { OPEN_KEY }

// Unités ---------------------------------------------------------------------

export type Duration = number // secondes
export type CHF = number
export type Percent = number // 0.5 = 50 %

export const s = (n: number): Duration => n
export const min = (n: number): Duration => n * 60
export const h = (n: number): Duration => n * 3600
export const chf = (n: number): CHF => n
export const pct = (n: number): Percent => n / 100

/** Devine l'unité à partir d'un texte de type TypeScript, par exemple `Record<TypeBorne, Duration>`. */
export function unitOf(typeText?: string): Unit | undefined {
  if (!typeText) return undefined
  if (/\bDuration\b/.test(typeText)) return "duration"
  if (/\bPercent\b/.test(typeText)) return "percent"
  if (/\bCHF\b/.test(typeText)) return "chf"
  return undefined
}

// Valeurs non décidées, retraits ---------------------------------------------

/** Une valeur pas encore décidée. Compile partout ; la lire lève un `Hole`. */
export const TODO = HOLE as unknown as never
export const isHole = isHoleImpl
/** Valeur d'une revendication qui retire un nœud entier (abrogation). */
export const REMOVE: unknown = REMOVE_SYMBOL

// Nœuds ----------------------------------------------------------------------

declare const BRAND: unique symbol
export type BrandKey = typeof BRAND

/** Un nœud du graphe, marqué par le nom de son type. */
export type Node<N extends string = string> = { readonly [BRAND]: N }
export type AnyNode = Node<string>

// Champs ---------------------------------------------------------------------

export type FieldType =
  | "person" | "text" | "date" | "number" | "duration" | "percent" | "chf"
  | "range" | "value" | "map" | "fn" | "patch"
  /** Des dépendances nommées : chacune est une arête, et devient un paramètre du corps. */
  | "deps"
  /** Un corps de fonction : en ligne, ou dans un fichier (n'importe quel langage qui a un driver). */
  | "body"
  /** Des constantes que le nœud déclare, chacune avec son sens. Son corps les reçoit en paramètres, à côté de ses dépendances. */
  | "constantes"

export interface FieldSpec<T = unknown, O extends boolean = boolean> {
  type: FieldType
  label?: string
  optional: O
  owner?: boolean
  /** Pour une date : ce qu'elle marque (début, fin, échéance, revue). Du sens, pas de la forme. */
  role?: DateRole
  /** Pour des dépendances et un corps : servent-ils à l'exécution ou au provisionnement (l'infra) ? */
  stage?: "exécution" | "provisionnement"
  min?: number
  max?: number
  sample?: () => T
  readonly __type?: T
}

function mk<T>(type: FieldType, label?: string, extra: Partial<FieldSpec<T, false>> = {}): FieldSpec<T, false> {
  return { type, label, optional: false, ...extra }
}

export const field = {
  owner: (label = "Responsable") => mk<string>("person", label, { owner: true }),
  person: (label: string) => mk<string>("person", label),
  text: (label: string) => mk<string>("text", label),
  date: (label: string, role: DateRole = "échéance") => mk<string>("date", label, { role }),
  number: (label: string, o: { min?: number; max?: number } = {}) => mk<number>("number", label, o),
  duration: (label: string) => mk<Duration>("duration", label),
  percent: (label: string) => mk<Percent>("percent", label),
  chf: (label: string) => mk<CHF>("chf", label),
  range: (label: string) => mk<[number, number]>("range", label),
  value: <T = unknown>(label?: string) => mk<T>("value", label),
  map: (label: string) => mk<Record<string, string>>("map", label),
  /** Une fonction (règle, critères). Jamais affichée telle quelle. `sample` sert aux lois. */
  fn: <F>(sample?: () => F) => mk<F>("fn", undefined, { sample }),
  /** Ce qu'un nœud revendique chez un autre. */
  patch: <T = Record<string, unknown>>() => mk<T>("patch"),
  /** Des dépendances nommées vers d'autres nœuds. */
  deps: (label = "Paramètres", stage: "exécution" | "provisionnement" = "exécution") =>
    mk<Record<string, AnyNode>>("deps", label, { stage }),
  /** Un corps de fonction, qui reçoit les dépendances en paramètres. */
  body: <F = unknown>(stage: "exécution" | "provisionnement" = "exécution") =>
    mk<F | FileBody>("body", undefined, { stage }),
  /** Des constantes déclarées par le nœud. Son corps, s'il en a un, les reçoit en paramètres. */
  constantes: (label = "Constantes") => mk<Record<string, Constante>>("constantes", label),
}

/** Une constante déclarée dans le graphe : sa valeur, et ce qu'elle veut dire. */
export interface Constante {
  valeur: string | number
  sens: string
}
/** Les valeurs de constantes déclarées, typées au littéral près : `{ ok: { valeur: 200, … } }` donne `{ ok: 200 }`. */
export type Valeurs<C> = { readonly [K in keyof C]: C[K] extends { valeur: infer V } ? V : never }

/** Le corps d'un nœud écrit dans un fichier. Le chemin est relatif au module qui déclare le nœud. */
export const code = {
  /** `code.file<typeof import("./code/x").default>("./code/x.ts")` : le corps est typé, et confronté aux dépendances. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: <F = any>(path: string, language = "typescript"): FileBody<NoInfer<F>> => fileBody(path, language),
}

// Ce qu'un nœud donne quand on l'injecte -----------------------------------------

declare const PROVIDES: unique symbol
declare const DEPS: unique symbol
/** Marque de type : ce que ce nœud donne quand un autre le reçoit en paramètre. */
export type Provides<T> = { readonly [PROVIDES]?: T }
/** Marque de type : les dépendances déclarées d'un nœud de code. */
export type HasDeps<D> = { readonly [DEPS]?: D }
export type ProvidedBy<N> = N extends { readonly [PROVIDES]?: infer T } ? T : unknown
/** Les paramètres d'un corps : chaque dépendance remplacée par ce qu'elle donne. */
export type Provided<D> = { [K in keyof D]: ProvidedBy<D[K]> }
/** Le type d'un corps écrit dans un fichier, déduit du nœud qui le déclare. */
export type BodyOf<N> = N extends HasDeps<infer D> & Provides<infer T> ? (deps: Provided<D>) => T | Promise<T> : never
/** Une signature déclarée sans corps en ligne (pour un corps dans un fichier). */
export type Signature<F> = { readonly __signature?: F }
export const signature = <F>(): Signature<F> => ({})

export const optional = <T>(spec: FieldSpec<T, false>): FieldSpec<T, true> => ({ ...spec, optional: true })

// Arêtes ---------------------------------------------------------------------

export interface EdgeSpec<N extends string = string, M extends "one" | "many" = "one" | "many", O extends boolean = boolean> {
  /** Types visés ; `*` = n'importe quel type. */
  targets: readonly N[]
  mode: M
  optional: O
  label: string
  inverse: string
  acyclic?: boolean
}

interface EdgeOptions {
  label: string
  inverse: string
  acyclic?: boolean
}

export const edge = {
  many: <const N extends string>(targets: readonly N[], o: EdgeOptions): EdgeSpec<N, "many", false> =>
    ({ targets, mode: "many", optional: false, ...o }),
  one: <const N extends string>(targets: readonly N[], o: EdgeOptions): EdgeSpec<N, "one", false> =>
    ({ targets, mode: "one", optional: false, ...o }),
  /** Une arête vers un nœud de n'importe quel type, sans cycle (amendements, abrogations). */
  amends: (o: Omit<EdgeOptions, "acyclic">): EdgeSpec<string, "one", false> =>
    ({ targets: ["*"], mode: "one", optional: false, acyclic: true, ...o }),
}

export const optionalEdge = <N extends string, M extends "one" | "many">(e: EdgeSpec<N, M, false>): EdgeSpec<N, M, true> =>
  ({ ...e, optional: true })

// Types dérivés --------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Fields = Record<string, FieldSpec<any, boolean>>
export type Edges = Record<string, EdgeSpec<string, "one" | "many", boolean>>
type AnyFn = (...args: any[]) => any
/* eslint-enable @typescript-eslint/no-explicit-any */

type FieldValue<S> = S extends FieldSpec<infer T, boolean> ? T : never
/** À la lecture, un champ facultatif peut être absent. */
type ReadField<S> = S extends FieldSpec<infer T, infer O> ? (O extends true ? T | undefined : T) : never
type EdgeValue<S> = S extends EdgeSpec<infer N, infer M, boolean>
  ? M extends "many" ? readonly Node<N>[] : Node<N>
  : never
type EdgeView<S> = S extends EdgeSpec<string, infer M, infer O>
  ? M extends "many" ? readonly View[] : O extends true ? View | undefined : View
  : never
type RequiredKeys<T> = { [K in keyof T]: T[K] extends { optional: false } ? K : never }[keyof T]
type OptionalKeys<T> = { [K in keyof T]: T[K] extends { optional: true } ? K : never }[keyof T]

export type InputOf<F extends Fields, E extends Edges> =
  { [K in RequiredKeys<F>]: FieldValue<F[K]> } &
  { [K in OptionalKeys<F>]?: FieldValue<F[K]> } &
  { [K in RequiredKeys<E>]: EdgeValue<E[K]> } &
  { [K in OptionalKeys<E>]?: EdgeValue<E[K]> }

/** Ce que le code du produit voit d'un nœud (src/). */
export type NodeOf<N extends string, F extends Fields, E extends Edges> = Node<N> &
  { readonly [K in keyof F]: ReadField<F[K]> } &
  { readonly [K in keyof E]: EdgeValue<E[K]> }

/** Ce qu'un type voit de ses propres nœuds : une vue, plus ses champs typés et ses arêtes en vues. */
export type SelfOf<F extends Fields, E extends Edges> = View &
  { readonly [K in keyof F]: ReadField<F[K]> } &
  { readonly [K in keyof E]: EdgeView<E[K]> }

type PatchValue<V> = V extends AnyFn ? (previous: V) => V
  : V extends AnyNode ? V
  : V extends readonly unknown[] ? V
  : V extends object ? { [K in keyof V]?: PatchValue<V[K]> }
  : V

/** Ce qu'on peut redéfinir chez un nœud : chaque valeur en partie, une fonction à partir de l'ancienne. */
export type PatchOf<T> = { [K in Exclude<keyof T, BrandKey>]?: PatchValue<T[K]> }

// Trous ----------------------------------------------------------------------

export interface HoleSpec {
  severity: Severity
  what: string
  owner?: string
  effect?: string
  /** Le nœud concerné, s'il n'est pas celui qui signale (une règle d'architecture signale un autre nœud). */
  on?: View
}

export const hole = {
  blocking: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: "bloquant", what, owner, effect }),
  error: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: "erreur", what, owner, effect }),
  warning: (what: string, owner?: string, effect?: string): HoleSpec => ({ severity: "avertissement", what, owner, effect }),
  /** Le même trou, posé sur un autre nœud. */
  on: (v: View, h: HoleSpec): HoleSpec => ({ ...h, on: v }),
}

export interface Evidence {
  value: number
  at: string
  source?: string
}

// Le format intermédiaire, côté auteur ----------------------------------------
// Les types et les vues décrivent ce qu'ils disent. Ils ne choisissent jamais l'apparence.

/** Une valeur brute en JSON : une valeur non décidée devient `{ "$ouvert": "à décider" }`. */
function toJson(v: unknown): Json {
  if (isHole(v)) return { [OPEN_KEY]: "à décider" }
  if (v === REMOVE_SYMBOL) return "abrogé"
  if (typeof v === "function") return "(règle)"
  if (isNode(v)) return refOf(v)
  if (Array.isArray(v)) return v.map(toJson)
  if (isPlain(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toJson(x)]))
  if (v === undefined) return null
  return v as Json
}

export const doc = {
  // Dans une phrase.
  /** Une valeur avec son unité. Une valeur non décidée, une règle, une valeur contestée sont dites comme telles. */
  value: (v: unknown, unit?: Unit, o: { type?: "date" | "range" | "map"; contested?: boolean; rule?: "d'origine" | "redéfinie" } = {}): Inline => {
    if (o.contested) return { t: "value", value: null, unit, open: "contesté" }
    if (isHole(v)) return { t: "value", value: null, unit, open: "à décider" }
    if (typeof v === "function" || o.rule) return { t: "value", value: null, rule: o.rule ?? "d'origine" }
    return { t: "value", value: toJson(v), unit, ...(o.type ? { type: o.type } : {}) }
  },
  ref: (v: View): Inline => ({ t: "ref", ref: v.ref, title: v.title }),
  docLink: (id: string, title: string): Inline => ({ t: "doc", id, title }),
  status: (status: Status): Inline => ({ t: "status", status }),
  severity: (severity: Severity): Inline => ({ t: "severity", severity }),
  date: (date: string): Inline => ({ t: "date", date }),
  person: (name: string): Inline => ({ t: "person", name }),
  ident: (text: string): Inline => ({ t: "ident", text }),

  // Blocs.
  para: (...content: Inline[]): Block => ({ type: "para", content }),
  facts: (items: { label: string; value: Inline[] }[]): Block => ({ type: "facts", items }),
  list: (items: Inline[][]): Block => ({ type: "list", items }),
  table: (head: string[], rows: Inline[][][]): Block => ({ type: "table", head, rows }),
  code: (lang: string, text: string, source?: string): Block => ({ type: "code", lang, text, source }),
  checks: (items: { name: string; outcome: Outcome; detail?: Inline[] }[], title?: Inline[]): Block => ({ type: "checks", title, items }),
  validity: (state: Validity, from?: string, until?: string): Block => ({ type: "validity", state, from, until }),
  details: (summary: string, blocks: Block[]): Block => ({ type: "details", summary, blocks }),
  section: (title: string, blocks: Block[], id?: string): Block => ({ type: "section", title, id, blocks }),
  summary: (...content: Inline[]): Block => ({ type: "summary", content }),
  issues: (items: IssueItem[]): Block => ({ type: "issues", items }),
  figure: (figure: Figure, caption?: string): Block => ({ type: "figure", figure, caption }),
}

/** Ce que la lecture du code source sait d'un nœud. */
export interface StaticInfo {
  file: string
  line: number
  title?: string
  description?: string
  typeArgs: string[]
  args: string[]
  props: Record<string, string>
  refs: { target: string; prop?: string }[]
  sourceText: string
}

// L'API de parcours : la seule façon de lire le graphe ------------------------

/** Un nœud en lecture seule. Chaque lecture est enregistrée par le noyau. */
export interface View {
  readonly node: AnyNode
  readonly ref: string
  readonly id: string
  readonly kind: string
  readonly module: string
  readonly title: string
  readonly owner?: string
  /** Faux pour un nœud qui n'est pas (ou plus) en vigueur à la date du graphe. */
  readonly active: boolean
  /** Le statut calculé. Indisponible dans le graphe figé. */
  readonly status: Status | undefined
  /** Ce que la lecture du code source sait du nœud. */
  readonly decl: StaticInfo | undefined
  readonly evidence: Evidence[]
  /** Les revendications appliquées à ce nœud, et ce que chacune a redéfini. */
  readonly amendedBy: { by: View; paths: string[] }[]
  readonly repealedBy: View | undefined
  /** Les chemins dont la valeur est contestée (aucune revendication n'a pu l'emporter). */
  readonly contested: string[]
  /** La valeur brute (une valeur non décidée est rendue telle quelle). Dans le graphe figé, lire une valeur en cours de résolution lève une erreur. */
  field(path: string): unknown
  /** La valeur déclarée, avant toute revendication. */
  base(path: string): unknown
  /** Le type, le libellé et le rôle d'un champ de ce nœud. */
  fieldInfo(name: string): { type: FieldType; label?: string; role?: DateRole; stage?: string } | undefined
  /** Ses dépendances nommées (les paramètres de son corps). */
  readonly dependencies: { name: string; node: View; stage: string }[]
  /** Ses effets : les siens, et ceux de tout ce dont il dépend. Calculés dans le graphe consolidé. */
  readonly effects: string[]
  /** Le résultat de l'évaluation (par exemple des critères joués). */
  result<T = unknown>(): T | undefined
}

/** Une requête : finie, triée, sans effet. */
export interface Q {
  out(edge?: string): Q
  in(edge?: string): Q
  /** Fermeture transitive, sans boucle. */
  closure(edge: string, dir?: "out" | "in"): Q
  where(test: (v: View) => boolean): Q
  nodes(): View[]
  first(): View | undefined
  exists(): boolean
  count(): number
  /** Le plus court chemin, en suivant les arêtes dans les deux sens. */
  path(to: View | AnyNode, via?: string[]): View[] | undefined
}

export interface EdgeInfo {
  name: string
  label: string
  inverse: string
  other: View
  inferred: boolean
  derived: boolean
  /** Faux pour une arête qui part d'un nœud pas en vigueur. */
  active: boolean
  /** Pour une dépendance nommée : le nom du paramètre. */
  param?: string
}

/** Ce qu'un type reçoit quand on branche un nœud. */
export interface WireContext {
  /** L'environnement pour lequel on branche (test, production…). */
  env: View | undefined
  date: string
  g: Graph
  /** Ce que donne un autre nœud, branché dans le même environnement. */
  wire(v: View): Promise<unknown>
  /** Les dépendances d'exécution d'un nœud, branchées. */
  wireDeps(v: View): Promise<Record<string, unknown>>
}

export interface Graph {
  /** Figé : avant résolution, valeurs déclarées. Consolidé : après résolution, valeurs en vigueur. */
  readonly moment: "figé" | "consolidé"
  readonly today: string
  node(ref: string): Q
  all(kind?: string): Q
  from(start: View | AnyNode): Q
  view(n: AnyNode): View
  edges(v: View, dir: "out" | "in"): EdgeInfo[]
  /** Pendant l'évaluation : signale qu'une valeur non décidée bloque quelque chose. */
  blocked(hole: Hole, what: string, of: View): void
  /** Graphe consolidé : branche ces dépendances dans un environnement, dans une session neuve. */
  wire(deps: { name: string; node: View }[], env: View | undefined): Promise<Record<string, unknown>>
  /** Graphe consolidé : le plan de branchement de ces nœuds dans un environnement, sans rien exécuter. */
  plan(entries: View[], env: View | undefined): WirePlan
}

/** Ce qui sera construit, dans quel ordre, avec quoi. */
export interface WirePlan {
  steps: {
    node: View
    /** « corps » : son corps appelé avec ses dépendances ; « valeur » : ce que son type donne (une décision, une règle). */
    how: "corps" | "valeur"
    deps: { param: string; node: View }[]
    /** Les accès qui ont délégué à ce nœud. */
    via: View[]
  }[]
  errors: string[]
}

// Revendications -------------------------------------------------------------

export interface ClaimSpec {
  target: View
  /** Le chemin revendiqué ; "" = le nœud entier. */
  path: string
  value: unknown
}

export interface Claim extends ClaimSpec {
  by: View
}

export type Resolution =
  | { kind: "apply"; order: View[]; reason: string; replaced?: [View, View][] }
  | { kind: "contested"; reason: string; arbiter?: string }

// Types de nœuds -------------------------------------------------------------

export type HoleList = ReadonlyArray<HoleSpec | false | null | undefined>

export interface KindDef<N extends string, F extends Fields, E extends Edges> {
  name: N
  label: { one: string; many: string }
  fields: F
  edges: E
  /** Les nœuds de ce type sont des racines : tout le reste doit y être relié. */
  root?: boolean
  /** Ordre des sections dans les documents. */
  order?: number
  /** Le champ qui porte la décision elle-même (pour nommer les trous). */
  main?: keyof F & string
  /** Le nœud est une fonction qui appelle ce champ. */
  callable?: keyof F & string
  /** Le nœud s'affiche à l'intérieur de la cible de cette arête. */
  inline?: keyof E & string
  /** Champs que `render` dit lui-même (ils ne sont pas repris dans la liste des faits). */
  renderOwns?: (keyof F & string)[]
  /** Les nœuds de ce type sont de l'historique : absents de l'instantané consolidé. */
  history?: boolean
  /** Le corps de ses nœuds peut toucher la plateforme (fichiers, réseau, base). Sinon, il ne reçoit le monde que par ses paramètres. */
  ambient?: boolean

  /** Graphe figé. En vigueur à la date du graphe ? Par défaut, toujours. */
  activeAt?(self: SelfOf<F, E>, g: Graph): boolean
  /** Graphe figé. Ce que ce nœud revendique chez d'autres. */
  claims?(self: SelfOf<F, E>, g: Graph): ReadonlyArray<ClaimSpec>
  /** Graphe figé. Tranche des revendications de ce type qui se recoupent. */
  resolve?(target: View, claims: Claim[], g: Graph): Resolution
  /** Graphe consolidé. */
  evaluate?(self: SelfOf<F, E>, g: Graph): unknown
  status?(self: SelfOf<F, E>, g: Graph): Status
  holes?(self: SelfOf<F, E>, g: Graph): HoleList
  /** Ce que le type dit d'un nœud, en blocs du format intermédiaire. */
  render?(self: SelfOf<F, E>, g: Graph): Block[]
  /** Ses effets propres (les effets de ses dépendances s'y ajoutent). */
  effects?(self: SelfOf<F, E>): readonly string[]
  /** Au branchement : le nœud qui le remplace dans cet environnement (un accès délègue à son implémentation). */
  delegate?(self: SelfOf<F, E>, ctx: WireContext): View | undefined
  /** Au branchement : ce que ce nœud donne (une décision donne sa valeur, une règle sa fonction). Par défaut : son corps appelé avec ses dépendances. */
  provide?(self: SelfOf<F, E>, ctx: WireContext): unknown
  /** Au démarrage d'un composant assemblé : ce qu'il fait de ses points d'entrée. */
  start?(self: SelfOf<F, E>, entries: { node: View; value: unknown }[], ctx: WireContext): Promise<unknown>
  summary?(selves: SelfOf<F, E>[], g: Graph): string | undefined
}

export type AnyKind = KindDef<string, Fields, Edges>

export type Ctor<N extends string, F extends Fields, E extends Edges> =
  ({} extends InputOf<F, E>
    ? (input?: InputOf<F, E>) => NodeOf<N, F, E>
    : (input: InputOf<F, E>) => NodeOf<N, F, E>) & { readonly def: KindDef<N, F, E> }

export function defineKind<const N extends string, F extends Fields, E extends Edges>(
  def: KindDef<N, F, E>,
): Ctor<N, F, E> {
  const anyDef = def as unknown as AnyKind
  kinds.push(anyDef)
  const ctor = (input: Record<string, unknown> = {}) => instantiate(anyDef, input)
  return Object.assign(ctor, { def }) as unknown as Ctor<N, F, E>
}

// Vues -----------------------------------------------------------------------
// Une vue pose une question au graphe compilé et répond en blocs (un document, une figure).

export interface KindInfo {
  name: string
  label: { one: string; many: string }
  order: number
  root: boolean
  history: boolean
  inline?: string
  fields: { name: string; type: FieldType; label?: string; role?: DateRole }[]
}

/** Un trou, une erreur, un point à surveiller. */
export interface Issue {
  severity: Severity
  /** D'où vient le problème : une valeur à décider, un recoupement, un type, la structure du graphe, la publication. */
  origin?: "valeur" | "recoupement" | "type" | "graphe" | "publication" | "code"
  what: string
  node?: View
  /** Pour un problème sans nœud (une déclaration publiée puis supprimée). */
  module?: string
  where?: string
  owner?: string
  effect?: string
}

/** Une revendication, et ce qu'elle est devenue. */
export interface ClaimInfo {
  by: View
  target: View
  path: string
  active: boolean
  before: Inline
  after: Inline
  outcome: "appliqué" | "écarté" | "remplacé" | "contesté" | "pas en vigueur"
  reason?: string
  winners: View[]
  replacedBy?: View
  arbiter?: string
}

/** Un recoupement de revendications, et comment il a été tranché. */
export interface ResolutionInfo {
  target: View
  paths: string[]
  claimants: View[]
  outcome: "appliqué" | "contesté"
  applied: View[]
  replaced: [View, View][]
  reason: string
  arbiter?: string
  because: View[]
}

export interface DateInfo {
  date: string
  label: string
  role: DateRole
  node: View
}

/** Le graphe compilé, vu par une vue : l'API de parcours, plus ce que la compilation a trouvé. */
/** Un littéral écrit dans le corps d'un nœud de code, relevé par le driver de son langage. */
export interface LiteralInfo {
  node: View
  /** Le fichier du corps (relatif à la racine), ou le module du nœud pour un corps en ligne. */
  file: string
  line: number
  /** Tel qu'il est écrit. */
  value: string
  kind: "texte" | "nombre" | "gabarit" | "regex" | "clé"
  /** Ce qu'il semble être : couleur, fichier, type MIME, phrase, nombre, identifiant, séparateur… */
  category: string
  /** La ligne où il apparaît. */
  context: string
  /** Le type qui le déclare (un membre d'une union de littéraux nommée ailleurs) : il est spécifié. */
  declaredBy?: string
  /** Ce qu'il fait, d'après sa place dans le code : indice, calcul, comparaison, valeur initiale, argument de… */
  role: string
}

export interface Compilation extends Graph {
  modules(): { id: string; title: string }[]
  kinds(): KindInfo[]
  kindOf(v: View): KindInfo
  issues(scope?: { node?: View; module?: string }): Issue[]
  claims(v: View, side: "sur" | "par"): ClaimInfo[]
  /** L'identifiant du document d'un module (celui où vivent les fiches de ses nœuds). */
  moduleDoc(module: string): string
  /** Les recoupements (plusieurs revendications sur la même valeur), où ce nœud est cible ou partie. */
  resolutions(v?: View): ResolutionInfo[]
  /** Publié dans trame.lock ? `undefined` s'il n'y a pas de lock. */
  published(v: View): boolean | undefined
  /** Ce que le code fait aux déclarations publiées. */
  lockIssues(): Issue[]
  /** La fiche standard d'un nœud. */
  card(v: View): Card
  /** Une valeur d'un nœud, avec l'unité de son champ. */
  value(target: View, path: string, raw: unknown): Inline
  resolution(r: ResolutionInfo): ResolutionBlock
  issueItem(i: Issue): IssueItem
  figureNode(v: View, layer: number): FigureNode
  /** Les arêtes entre ces nœuds. */
  figureEdges(nodes: View[]): FigureEdge[]
  /** La ligne qui résume un ensemble : décisions à prendre, erreurs, résumés des types. */
  summary(issues: Issue[], nodes: View[]): Inline[]
  /** Toutes les dates portées par des champs, avec leur rôle. */
  dates(): DateInfo[]
  counts(): { edges: number; inferred: number; derived: number }
  /** Les littéraux écrits dans les corps de code (un moteur qui ne les relève pas n'a pas cette méthode). */
  literals?(v?: View): LiteralInfo[]
}

export interface ViewArg {
  module?: string
  node?: View
}

export interface ViewOutput {
  title: string
  intro?: Inline[]
  blocks: Block[]
}

export interface ViewDef {
  name: string
  label: string
  /** Où la vue se range : un document par module, un document, une figure, une vue par nœud, le bilan. */
  group: ViewGroup
  order?: number
  /** Une instance par module, par nœud, ou une seule. */
  per?: "module" | "nœud"
  /** Pour une vue par nœud : les nœuds où elle a un sens. */
  applies?(node: View, c: Compilation): boolean
  /** Écrite dans docs/ par `trame build` (par défaut : tout sauf les vues par nœud et le bilan). */
  file?: boolean
  run(c: Compilation, arg: ViewArg): ViewOutput
}

export function defineView(def: ViewDef): ViewDef {
  views.push(def)
  return def
}

export type { Document }
