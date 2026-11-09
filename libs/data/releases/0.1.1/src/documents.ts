/** Data · Documents */

import { port } from "#trame/kinds/port"
import { fn } from "#trame/kinds/function"
import { decision } from "#trame/kinds/decision"
import { standard } from "#trame/kinds/standard"
import { PreferencesStore } from "#std/platform"
import { ValueTypes } from "#std/algebra"
import { Iso8601 } from "#std/measures"
import type { Model, StoredDescription, StoredFields, ValueOfFields } from "./kinds/entity"
import { DataDescribedOnce } from "./product"

// An entity kept whole, as one document (a person's breath on their device): read, migrated from the version it was
// stored with, checked against the description, written with the version it is of. What is stored, how it is migrated and
// checked come from the entity's model; only where the document lives is chosen, by a binding (A7).

/** Where an entity kept whole lives: read, migrated and checked, or nothing; written with its version; cleared. */
export interface DocumentStore {
  read<F extends StoredFields>(model: Model<F>): ValueOfFields<F> | undefined
  write<F extends StoredFields>(model: Model<F>, value: ValueOfFields<F>): void
  clear(model: Model): void
}

/**
 * Documents
 * Where the entities a product keeps whole live, each under its name: a person's breath on their device.
 */
export const Documents = port<DocumentStore>({
  owner: "trame",
  declaredEffects: { read: ["read"], write: ["write"], clear: ["write"] },
})

/**
 * JSON
 * The text a document is stored as: an object, its members named.
 */
export const Json = standard({
  owner: "trame",
  source: "RFC 8259, The JavaScript Object Notation (JSON) Data Interchange Format",
  url: "https://www.rfc-editor.org/rfc/rfc8259",
  constants: {
    empty: { value: "", meaning: "Nothing stored: what clearing a document writes, where nothing can be removed" },
  },
  serves: [DataDescribedOnce],
})

/**
 * How a document is stored
 * Its value and the version of the description it is of, as two members of a JSON object; what is stored without them
 * (written before versions were kept) is the value itself, of the first version deployed.
 */
export const DocumentForm = decision<{ version: string; value: string }>({
  owner: "trame",
  value: { version: "version", value: "value" },
})

/**
 * A value of the description it is of
 * A value stored is checked against the description, field by field: a text, a number that is finite, yes or no, a
 * calendar date, a word of its vocabulary, the key of another entity, a list of such, or nothing where it is optional.
 * A member that no field describes is not part of it.
 */
export const Conforms = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  deps: { values: ValueTypes, iso: Iso8601 },
  body: ({ values, iso }) => {
    const date = new RegExp(iso.calendarDate)
    return (model: Model, value: unknown): boolean => {
      const { types } = model
      const one = (s: StoredDescription, v: unknown): boolean => {
        if (s.type === types.optional) return v === undefined || (s.of !== undefined && one(s.of, v))
        if (s.type === types.text || s.type === types.reference) return values.isText(v)
        if (s.type === types.number) return values.isNumber(v) && Number.isFinite(v)
        if (s.type === types.flag) return values.isBoolean(v)
        if (s.type === types.date) return values.isText(v) && date.test(v)
        if (s.type === types.word) return values.isText(v) && (s.words ?? []).includes(v)
        if (s.type === types.list) return Array.isArray(v) && s.of !== undefined && v.every((x) => one(s.of!, x))
        return false
      }
      const fields: Readonly<Record<string, StoredDescription>> = model.fields
      return value !== null && values.isObject(value) && !Array.isArray(value) &&
        Object.entries(fields).every(([name, s]) => one(s, (value as Record<string, unknown>)[name])) &&
        Object.keys(value).every((name) => name in fields)
    }
  },
})

/**
 * A value migrated
 * A value stored with a version deployed becomes one of the description as it is, by the steps the entity computed
 * from the two: a field added takes its value, one renamed moves, one dropped goes, one filled takes its value where it
 * has none. A version nothing migrates from (newer than the description, or unknown) gives nothing.
 */
export const Migrate = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  body: () => (model: Model, version: string, value: Readonly<Record<string, unknown>>): Record<string, unknown> | undefined => {
    if (version === model.version) return { ...value }
    const migration = model.migrations.find((m) => m.from === version)
    if (!migration) return undefined
    const { ops } = model
    const out: Record<string, unknown> = { ...value }
    for (const step of migration.steps) {
      if (step.op === ops.rename && step.from !== undefined) {
        out[step.field] = out[step.from]
        delete out[step.from]
      } else if (step.op === ops.drop) {
        delete out[step.field]
      } else if (step.op === ops.add || (step.op === ops.fill && out[step.field] === undefined)) {
        out[step.field] = step.value
      }
    }
    return out
  },
})

/**
 * Documents kept in the preferences
 * A document is kept in the preferences of the device, under the entity's name, as JSON: its version and its value.
 * Read, it is migrated from the version it was stored with, then checked; what cannot be read, migrated or checked is
 * nothing, and the product does as if nothing were kept.
 */
export const DocumentsInPreferences = fn({
  owner: "trame",
  serves: [DataDescribedOnce],
  implements: [Documents],
  deps: { preferences: PreferencesStore, form: DocumentForm, json: Json, values: ValueTypes, migrate: Migrate, conforms: Conforms },
  body: ({ preferences, form, json, values, migrate, conforms }): DocumentStore => ({
    read<F extends StoredFields>(model: Model<F>): ValueOfFields<F> | undefined {
      const kept = preferences.get(model.name)
      if (kept === undefined || kept === json.empty) return undefined
      try {
        const parsed: unknown = JSON.parse(kept)
        if (parsed === null || !values.isObject(parsed) || Array.isArray(parsed)) return undefined
        const stored = parsed as Record<string, unknown>
        const versioned = values.isText(stored[form.version]) && form.value in stored
        const version = versioned ? (stored[form.version] as string) : model.first
        const value = versioned ? stored[form.value] : stored
        if (value === null || !values.isObject(value) || Array.isArray(value)) return undefined
        const now = migrate(model, version, value as Record<string, unknown>)
        return now !== undefined && conforms(model, now) ? (now as ValueOfFields<F>) : undefined
      } catch {
        return undefined
      }
    },
    write<F extends StoredFields>(model: Model<F>, value: ValueOfFields<F>): void {
      preferences.set(model.name, JSON.stringify({ [form.version]: model.version, [form.value]: value }))
    },
    clear(model: Model): void {
      preferences.set(model.name, json.empty)
    },
  }),
})
