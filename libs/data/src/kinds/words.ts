// The words of the kinds the library of data carries: their labels, the labels of their fields, what their holes say,
// what they render. A catalog of the library (catalog "Words of the kinds of data"): a kind writes no text of its own.

import { plurals, type Inline } from "#trame/kernel"

/** This catalog is written in British English: its counts follow the plural rules of that language. */
const plural = plurals("en-GB")

const body = () => ({
  entityMeaning: () => "a kind of data a product keeps outside the graph, described once",
  entityEntity: () => "Entity",
  entityEntities: () => "Entities",
  entityFields: () => "Fields",
  entityKey: () => "Key",
  entityRules: () => "Rules",
  entityServes: () => "Serves",
  entityServedBy: () => "Served by",
  entityChanges: () => "Changes decided",
  entityKeptAs: () => "Kept as",
  entityField: () => "Field",
  entityFrom: () => "From the version",
  entitySteps: () => "Steps",
  entityNothingToDo: () => "nothing to do",
  entityVersion: (version: Inline, deployed: number): Inline[] =>
    ["Version ", version, deployed ? `; ${plural(deployed, { one: "version", other: "versions" })} deployed so far.` : "; never deployed."],
  entityAddedUndecided: (field: string) =>
    `The field ${field} is added: give the value what is already stored takes (changes.defaults), or make it optional`,
  entityRemovedUndecided: (field: string) =>
    `The field ${field} is gone: what is stored of it would be lost; say so (changes.dropped), or say what it is called now (changes.renamed)`,
  entityTypeUndecided: (field: string) =>
    `The field ${field} is stored otherwise now: what is stored cannot be read as it is; drop it and add another, under another name`,
  entityTightenedUndecided: (field: string) =>
    `The field ${field} is no longer optional: give the value what is stored without it takes (changes.defaults)`,
  entityKeyUndecided: () => "The key changed: what is stored is found by the one it had",
  entityType: () => "Type",
  entityKeyNamesNoField: (key: string) => `The key ${key} names no field of the entity`,
  entityFieldWithoutType: (field: string) => `The field ${field} says nothing of how it is stored`,
  entitySummary: (fields: number, key: Inline | undefined): Inline[] =>
    [plural(fields, { one: "field", other: "fields" }), ...(key === undefined ? [", kept whole"] : [", found by ", key]), "."],

  opAdd: () => "add",
  opDrop: () => "drop",
  opRename: () => "rename",
  opLoosen: () => "make optional",
  opFill: () => "fill",
  opFrom: () => " from ",
  opStep: (op: string) => `${op} `,

  storedText: () => "a text",
  storedNumber: () => "a number",
  storedFlag: () => "yes or no",
  storedDate: () => "a calendar date",
  storedWord: () => "a word of a vocabulary",
  storedReference: () => "the key of another entity",
  storedList: () => "a list",
  storedOptional: () => ", optional",
  storedOf: () => " of ",
  storedIn: () => " in ",
})

export default body
