// An entity: a kind of data a product keeps outside the graph from one version to the next (a person's breath in the
// preferences of a device, the reservations of a database), described once in the graph. From its description come the
// type of a value in TypeScript, the names of its fields as values, the form it is stored in, the reading of what is
// stored, and the migrations when the description changes (ADR "An entity is described once"). The kind is carried by
// the library of data (A5): a project that imports the library writes entities.

import {
  defineKind, field, optional, optionalEdge, edge, hole, doc, keysOf, fieldsOf, isNode, KindName, EdgeName, EvidenceSource, ShipmentEdge, Status,
  type AnyNode, type Graph, type Inline, type Lib, type Node, type Provides, type Quantity, type View,
} from "#trame/kernel"
import { vocabularyKind } from "#trame/kinds/vocabulary"
import words from "./words"

const say = words()

/** The kinds the library carries: each named by its key, with its meaning in the library's words. */
export const DataKind = keysOf({ entity: say.entityMeaning() })

/** The steps of a migration, each with its meaning in the library's words. */
const opWords: Readonly<Record<string, string>> = {
  add: say.opAdd(), drop: say.opDrop(), rename: say.opRename(), loosen: say.opLoosen(), fill: say.opFill(),
}

/** A step of a migration, named by its key. */
export const MigrationOp = keysOf({ add: opWords.add, drop: opWords.drop, rename: opWords.rename, loosen: opWords.loosen, fill: opWords.fill })

/** The types a field is stored as, each with its meaning in the library's words. */
const typeWords: Readonly<Record<string, string>> = {
  text: say.storedText(), number: say.storedNumber(), flag: say.storedFlag(), date: say.storedDate(),
  word: say.storedWord(), reference: say.storedReference(), list: say.storedList(), optional: say.storedOptional(),
}

/** How a field is stored: each type named by its key. */
export const StoredType = keysOf({
  text: typeWords.text, number: typeWords.number, flag: typeWords.flag, date: typeWords.date,
  word: typeWords.word, reference: typeWords.reference, list: typeWords.list, optional: typeWords.optional,
})

/**
 * A field of an entity, as it is stored: its type, and what it is a number of (a quantity), a word of (a vocabulary), the
 * key of (another entity), a list of or an optional value of. The type of its value is TypeScript's only.
 */
export interface Stored<T = unknown> {
  readonly type: string
  readonly quantity?: AnyNode
  readonly vocabulary?: AnyNode
  readonly entity?: AnyNode
  readonly of?: Stored
  readonly value?: T
}

/** The fields of an entity, by name. */
export type StoredFields = Readonly<Record<string, Stored>>

type ValueOf<S> = S extends Stored<infer T> ? T : never
type OptionalNames<F> = { [K in keyof F]: undefined extends ValueOf<F[K]> ? K : never }[keyof F]
type Flat<T> = { [K in keyof T]: T[K] }

/** A value of an entity whose fields are F: each field its value, an optional one may be absent. */
export type ValueOfFields<F extends StoredFields> = Flat<
  { [K in Exclude<keyof F, OptionalNames<F>>]: ValueOf<F[K]> } & { [K in OptionalNames<F>]?: Exclude<ValueOf<F[K]>, undefined> }
>

/** A field as a deployment keeps it: its type, and the nodes it names by their reference. */
export interface StoredDescription {
  readonly type: string
  readonly quantity?: string
  readonly vocabulary?: string
  /** The words of its vocabulary, for a word: what a value is read against where the graph is not. */
  readonly words?: readonly string[]
  /** For the key of another entity: the name that entity is kept under, and its key. */
  readonly keptAs?: string
  readonly key?: string
  readonly entity?: string
  readonly of?: StoredDescription
}

/** An entity as a deployment keeps it, what the next one migrates from: its fields and its key. */
export interface Description {
  readonly fields: Readonly<Record<string, StoredDescription>>
  readonly key?: string
}

/** A step of a migration: a field added (with the value stored data takes), dropped, renamed, made optional, filled. */
export interface Step {
  readonly op: string
  readonly field: string
  /** The name it had, for a field renamed. */
  readonly from?: string
  /** The value stored data takes, for a field added or filled. */
  readonly value?: unknown
}

/** How what a deployment stored becomes a value of the description as it is: the steps from that version. */
export interface Migration {
  readonly from: string
  readonly steps: readonly Step[]
}

/**
 * What an entity gives the code that names it: its fields as stored, their names as values, its key if it has one; the
 * version of its description, the version of the first one deployed (what was stored before versions were kept), and
 * the migration from each version deployed since.
 */
export interface Model<F extends StoredFields = StoredFields> {
  /** The name it is kept under, where it is kept whole (a document): the one its owner gives, or its reference. */
  readonly name: string
  readonly fields: { readonly [K in keyof F]: StoredDescription }
  readonly names: { readonly [K in keyof F & string]: K }
  readonly key?: keyof F & string
  readonly version: string
  readonly first: string
  readonly migrations: readonly Migration[]
  /** The names of the types a field is stored as, and of the steps of a migration: what the code that reads it tests. */
  readonly types: typeof StoredType
  readonly ops: typeof MigrationOp
}

/** What changed since a version deployed, decided by the entity's owner: renames, fields dropped, values for the others. */
export interface Changes<F extends StoredFields = StoredFields> {
  /** Each field renamed, by the name it had: `{ holdTop: "pause" }`. */
  readonly renamed?: { readonly [K in keyof F]?: string }
  /** The fields gone, whose stored data is dropped. */
  readonly dropped?: readonly string[]
  /** The value stored data takes for a field added, or no longer optional. */
  readonly defaults?: Partial<ValueOfFields<F>>
}

/** The type of a value of an entity: `EntityOf<typeof Breath>`. */
export type EntityOf<N> = N extends Provides<Model<infer F>> ? ValueOfFields<F> : never

/** How each field is written: `fields: { inhale: stored.number(Time), name: stored.text(), level: stored.word(Levels) }`. */
export const stored = {
  text: (): Stored<string> => ({ type: StoredType.text }),
  number: <Q extends AnyNode = never>(quantity?: Q): Stored<[Q] extends [never] ? number : Quantity<Q>> =>
    (quantity === undefined ? { type: StoredType.number } : { type: StoredType.number, quantity }),
  flag: (): Stored<boolean> => ({ type: StoredType.flag }),
  /** A calendar date, as ISO 8601 writes it. */
  date: (): Stored<string> => ({ type: StoredType.date }),
  word: <W extends string>(vocabulary: AnyNode & Provides<readonly W[]>): Stored<W> => ({ type: StoredType.word, vocabulary }),
  /** The key of a value of another entity. */
  reference: (entity: Node<typeof DataKind.entity>): Stored<string> => ({ type: StoredType.reference, entity }),
  list: <T>(of: Stored<T>): Stored<readonly T[]> => ({ type: StoredType.list, of }),
  optional: <T>(of: Stored<T>): Stored<T | undefined> => ({ type: StoredType.optional, of }),
}

const fields = {
  owner: field.owner(),
  fields: field.value<StoredFields>(say.entityFields()),
  key: optional(field.value<string>(say.entityKey())),
  keptAs: optional(field.value<string>(say.entityKeptAs())),
  changes: optional(field.value<Changes>(say.entityChanges())),
}
const F = keysOf(fields)
const edges = {
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.entityServes(), inverse: say.entityServedBy() })),
}

/** What a step that cannot be computed asks of the owner: the field, and what to decide. */
interface Undecided {
  readonly field: string
  readonly what: string
}

/** What an entity computes once: its description, its version, what each deployment kept and how it migrates. */
interface Result {
  /** What a deployment keeps of it: trame ship records it (since g104). */
  readonly deployed: Description
  readonly version: string
  readonly first: string
  readonly migrations: readonly Migration[]
  readonly undecided: readonly Undecided[]
  /** The versions deployed, the first first, with the day each was first deployed. */
  readonly kept: readonly { readonly version: string; readonly at: string }[]
}

const isPlain = (v: unknown, { values }: Lib): v is Record<string, unknown> => v !== null && values.isObject(v) && !Array.isArray(v)

/** The fields, whatever the value holds: something else than an object of fields gives none. */
const storedOf = (self: View, lib: Lib): [string, Stored][] => {
  const raw = self.field(F.fields)
  return isPlain(raw, lib) ? Object.entries(raw).flatMap(([k, v]): [string, Stored][] => (isPlain(v, lib) ? [[k, v as unknown as Stored]] : [])) : []
}

/** A field as a deployment keeps it: the nodes it names, by their reference. */
const describe = (s: Stored, g: Graph): StoredDescription => {
  const ref = (n: AnyNode | undefined) => (n && isNode(n) ? { ref: g.view(n).ref } : undefined)
  const [quantity, vocabulary, entity] = [ref(s.quantity), ref(s.vocabulary), ref(s.entity)]
  const words = vocabulary && s.vocabulary ? g.view(s.vocabulary).field(fieldsOf(vocabularyKind).words) : undefined
  const other = entity && s.entity ? g.view(s.entity) : undefined
  const otherKey = other?.field(F.key)
  const otherName = other?.field(F.keptAs)
  return {
    type: s.type,
    ...(quantity ? { quantity: quantity.ref } : {}),
    ...(vocabulary ? { vocabulary: vocabulary.ref } : {}),
    ...(isPlain(words, g.lib) ? { words: Object.keys(words) } : {}),
    ...(entity ? { entity: entity.ref, keptAs: g.lib.values.isText(otherName) ? otherName : entity.ref } : {}),
    ...(g.lib.values.isText(otherKey) ? { key: otherKey } : {}),
    ...(s.of ? { of: describe(s.of, g) } : {}),
  }
}

/** The steps from what a deployment kept to the description as it is, and what they cannot decide. */
const migrate = (before: Description, now: Description, changes: Changes, lib: Lib): { steps: Step[]; undecided: Undecided[] } => {
  const same = (a: StoredDescription | undefined, b: StoredDescription | undefined) => lib.fingerprint?.(a) === lib.fingerprint?.(b)
  const loosened = (a: StoredDescription, b: StoredDescription) => b.type === StoredType.optional && same(a, b.of)
  const tightened = (a: StoredDescription, b: StoredDescription) => a.type === StoredType.optional && same(a.of, b)
  // A vocabulary that gained words still reads every word stored; one that lost some may not.
  const widened = (a: StoredDescription, b: StoredDescription) =>
    a.type === StoredType.word && b.type === StoredType.word && a.vocabulary === b.vocabulary && (a.words ?? []).every((w) => (b.words ?? []).includes(w))
  const renamed: Record<string, string> = isPlain(changes.renamed, lib) ? (changes.renamed as Record<string, string>) : {}
  const dropped = Array.isArray(changes.dropped) ? changes.dropped : []
  const defaults: Record<string, unknown> = isPlain(changes.defaults, lib) ? (changes.defaults as Record<string, unknown>) : {}
  const steps: Step[] = []
  const undecided: Undecided[] = []
  const sources = new Set<string>()
  for (const [name, field] of Object.entries(now.fields)) {
    const old = renamed[name] !== undefined && before.fields[renamed[name]] !== undefined ? renamed[name] : name
    const was = before.fields[old]
    if (old !== name) {
      sources.add(old)
      steps.push({ op: MigrationOp.rename, field: name, from: old })
    }
    if (was === undefined) {
      // A field added: what is stored takes its value, or none where it is optional (a table gains its column).
      if (field.type === StoredType.optional) steps.push({ op: MigrationOp.add, field: name })
      else if (name in defaults) steps.push({ op: MigrationOp.add, field: name, value: defaults[name] })
      else undecided.push({ field: name, what: say.entityAddedUndecided(name) })
    } else if (same(was, field) || widened(was, field)) {
      continue
    } else if (loosened(was, field)) {
      steps.push({ op: MigrationOp.loosen, field: name })
    } else if (tightened(was, field)) {
      if (name in defaults) steps.push({ op: MigrationOp.fill, field: name, value: defaults[name] })
      else undecided.push({ field: name, what: say.entityTightenedUndecided(name) })
    } else {
      undecided.push({ field: name, what: say.entityTypeUndecided(name) })
    }
  }
  for (const name of Object.keys(before.fields).filter((k) => now.fields[k] === undefined && !sources.has(k))) {
    if (dropped.includes(name)) steps.push({ op: MigrationOp.drop, field: name })
    else undecided.push({ field: name, what: say.entityRemovedUndecided(name) })
  }
  // The key renamed is the same key: what is stored is found by it under its new name.
  const key = now.key !== undefined && renamed[now.key] !== undefined ? renamed[now.key] : now.key
  if (before.key !== key) undecided.push({ field: now.key ?? before.key ?? lib.texts.empty, what: say.entityKeyUndecided() })
  return { steps, undecided }
}

/** How a field is written for people: its type, and what it is of (a quantity, a vocabulary, an entity, an element). */
const written = (s: Stored, g: Graph): Inline[] => {
  const named = (n: AnyNode | undefined): Inline[] => (n && isNode(n) ? [doc.ref(g.view(n))] : [])
  if (s.type === StoredType.optional && s.of) return [...written(s.of, g), say.storedOptional()]
  const of = s.of ? [say.storedOf(), ...written(s.of, g)] : []
  const what = [...named(s.quantity), ...named(s.vocabulary), ...named(s.entity)]
  return [typeWords[s.type] ?? s.type, ...(g.lib.counts.any(what) ? [say.storedIn(), ...what] : []), ...of]
}

/** How a step is written for people. */
const stepWritten = (x: Step): Inline[] => [say.opStep(opWords[x.op] ?? x.op), doc.ident(x.field), ...(x.from === undefined ? [] : [say.opFrom(), doc.ident(x.from)])]

/** What an entity computes: its description, its version, and how each version a deployment kept migrates to it. */
const computed = (self: View, g: Graph): Result => {
  const lib = g.lib
  const key = self.field(F.key)
  const deployed: Description = {
    fields: Object.fromEntries(storedOf(self, lib).map(([k, s]) => [k, describe(s, g)])),
    ...(lib.values.isText(key) ? { key } : {}),
  }
  const version = lib.fingerprint?.(deployed) ?? lib.texts.empty
  const changes = self.field(F.changes)
  // What a shipment that deploys nothing kept (a library's version) is stored nowhere: only a deployment counts.
  const deploys = (ref: string | undefined) => {
    const shipment = ref === undefined ? undefined : g.node(ref).first()
    return shipment?.kind !== KindName.shipment || g.from(shipment).out(ShipmentEdge.deploys).exists()
  }
  const records = self.evidence.filter((e) => e.source === EvidenceSource.shipped && isPlain(e.kept, lib) && deploys(e.subject))
  const kept: { version: string; at: string; description: Description }[] = []
  for (const e of [...records].sort((a, b) => a.at.localeCompare(b.at))) {
    const description = e.kept as Description
    const v = lib.fingerprint?.(description) ?? lib.texts.empty
    if (!kept.some((k) => k.version === v)) kept.push({ version: v, at: e.at, description })
  }
  const migrations: Migration[] = []
  const undecided: Undecided[] = []
  for (const k of kept.filter((x) => x.version !== version)) {
    const m = migrate(k.description, deployed, isPlain(changes, lib) ? (changes as Changes) : {}, lib)
    migrations.push({ from: k.version, steps: m.steps })
    undecided.push(...m.undecided.filter((u) => !undecided.some((x) => x.what === u.what)))
  }
  const [first] = kept
  return { deployed, version, first: first?.version ?? version, migrations, undecided, kept: kept.map(({ version: v, at }) => ({ version: v, at })) }
}

/**
 * An entity: a kind of data a product keeps outside the graph, described once (its fields, each with how it is stored;
 * its key, when it is kept as many). Wired, it gives its model: its fields, their names, the version of its description
 * and the migrations from each version deployed. A deployment keeps its description (trame ship records it, since
 * g104): the next one migrates from it, by steps computed from the two descriptions; what they cannot decide (a field
 * added with no value for what is stored, a field gone, a type changed, the key changed) blocks, and its owner decides
 * it in `changes` (a rename, a field dropped, a value). Going back to an older description is a change like another: it
 * drops what the newer one added, which the owner says. Held when every version deployed migrates to this one.
 */
const kind = defineKind({
  name: DataKind.entity,
  label: { one: say.entityEntity(), many: say.entityEntities() },
  renderOwns: [F.fields, F.key, F.changes],
  fields,
  edges,

  evaluate: (self, g): Result => computed(self, g),

  status(self) {
    const r = self.result<Result>()
    if (!r) return Status.unknown
    return r.undecided.length ? Status.blocked : Status.held
  },

  holes(self, g) {
    const all = storedOf(self, g.lib)
    const key = self.field(F.key)
    return [
      ...(key !== undefined && !all.some(([k]) => k === key) ? [hole.error(say.entityKeyNamesNoField(String(key)), self.owner)] : []),
      ...all.filter(([, s]) => typeWords[s.type] === undefined).map(([k]) => hole.error(say.entityFieldWithoutType(k), self.owner)),
      ...(self.result<Result>()?.undecided ?? []).map((u) => hole.blocking(u.what, self.owner)),
    ]
  },

  render(self, g) {
    const all = storedOf(self, g.lib)
    const key = self.field(F.key)
    const r = self.result<Result>()
    return [
      doc.para(...say.entitySummary(all.length, key === undefined ? undefined : doc.ident(String(key)))),
      doc.table([say.entityField(), say.entityType()], all.map(([k, s]) => [[doc.ident(k)], written(s, g)])),
      ...(r ? [doc.para(...say.entityVersion(doc.ident(r.version), r.kept.length))] : []),
      ...(r && r.migrations.length
        ? [doc.table([say.entityFrom(), say.entitySteps()], r.migrations.map((m) => [
            [doc.ident(m.from)], m.steps.length ? m.steps.flatMap((x, i) => [...(i ? [g.lib.punctuation.items] : []), ...stepWritten(x)]) : [say.entityNothingToDo()],
          ]))]
        : []),
    ]
  },

  /** Wired as a dependency: its model, which the code reads its fields, their names and its migrations from. */
  provide: (self, ctx) => {
    // Wired before it was evaluated (a scenario of a module evaluated earlier), it computes what it gives.
    const r = self.result<Result>() ?? (ctx?.g ? computed(self, ctx.g) : undefined)
    const description = r?.deployed ?? { fields: {} }
    const names = Object.fromEntries(Object.keys(description.fields).map((k) => [k, k]))
    const keptAs = self.field(F.keptAs)
    return {
      name: keptAs ?? self.ref,
      fields: description.fields, names, ...(description.key === undefined ? {} : { key: description.key }),
      version: r?.version, first: r?.first, migrations: r?.migrations ?? [], types: StoredType, ops: MigrationOp,
    }
  },
})

interface EntityInput<F extends StoredFields> {
  owner: string
  /** Its fields, each with how it is stored. */
  fields: F
  /** The field that names a value among the others, when the entity is kept as many (a table's rows). */
  key?: keyof F & string
  /** The name it is kept under, kept whole (a document): by default, its reference in the graph. */
  keptAs?: string
  /** What changed since a version deployed, which a migration cannot compute: decided by the owner. */
  changes?: Changes<F>
  serves?: readonly Node<typeof KindName.goal>[]
}

/** `entity({ owner, fields: { inhale: stored.number(Time), … } })`: gives its model, typed by its fields. */
export function entity<const F extends StoredFields>(input: EntityInput<F>): Node<typeof DataKind.entity> & Provides<Model<F>> {
  return kind(input as never) as never
}

export const entityKind = kind
