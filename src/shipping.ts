/** Trame · Shipping */

import { code, Status } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"
import { fn } from "../kinds/function"
import { binding } from "../kinds/binding"
import { ExecutableSpecification } from "./product"
import { FileReading, Paths, Hashing, Signatures, Local, Test } from "./architecture"
import { Layout, JsonFormatting, TrameCommands } from "./conventions"
import { Fingerprints, Project } from "./engine"
import { EnginePin } from "./generations"
import { Sha256 } from "#std/algorithms"
import { NodeEncodings, Posix } from "#std/system"
import { Counts, Sequences, ValueTypes } from "#std/algebra"
import { Strategy } from "#std/patterns"

// The SDLC of a project is in its graph: the artefacts it produces (kind artifact), the checks a scenario in memory
// cannot make (kind check), the reviews (kind review), the roles that sign them (kind role), and the shipments that make
// a version available (kind shipment). trame ship builds a shipment's artefacts, runs the checks a machine can run, and
// records what they found as evidence, attributed to the person who ships; it deploys only when every obligation holds.
// trame evidence records what a person gives: a check made by hand, a review, a deployment made elsewhere. Both write
// into one file of evidence, which the next build reads; a shipment's dossier keeps what it shipped and why it could.

/**
 * Ship only what holds
 * A shipment ships when it has obligations and every one of them holds: an obligation unknown (a check not run, a
 * review awaited) keeps it as surely as one violated.
 */
export const ShipOnlyWhatHolds = requirement({
  refines: [ExecutableSpecification],
  deps: { counts: Counts },
  body: ({ counts }) => (obligations: readonly Status[]): boolean => counts.any(obligations) && obligations.every((s) => s === Status.held),
})

/** Criteria of shipping only what holds */
export const ShipOnlyWhatHoldsCriteria = acceptance({
  accepts: ShipOnlyWhatHolds,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Every obligation held ships", () => ShipOnlyWhatHolds([Status.held, Status.held]))
    criterion("One obligation unknown keeps it", () => !ShipOnlyWhatHolds([Status.held, Status.unknown]))
    criterion("One obligation violated keeps it", () => !ShipOnlyWhatHolds([Status.violated, Status.held]))
    criterion("No obligation proves nothing", () => !ShipOnlyWhatHolds([]))
  },
})

/**
 * Where the SDLC's evidence is kept
 * The file of the evidence directory trame ship and trame evidence write (one file, so that the evidence of a day keeps
 * the order it was given in), and the directory of it where each shipment's dossier is written, named by the shipment,
 * the day and the dossier's fingerprint, so that two shipments of a day keep two dossiers.
 */
export const ShippingRecords = decision<{ evidence: string; dossiers: string }>({
  owner: "trame",
  value: { evidence: "sdlc", dossiers: "shipments" },
  rejected: { "A file per shipment": "a check or a review serves several shipments: its evidence is read by all of them" },
})

/**
 * The fingerprint of a program
 * How trame ship fingerprints a program it assembles: the program bundled with everything it imports (its bodies, the
 * prelude, the libraries' code), the packages left out, as Node.js runs it; a change in any body changes it. The bundler
 * is given the program's text, read as the files are, read as TypeScript: the program a scenario assembles in memory is
 * fingerprinted as one on the disk.
 */
export const ProgramBundle = decision<{ platform: "node"; format: "esm"; packages: "external"; source: "ts" }>({
  owner: "trame",
  value: { platform: "node", format: "esm", packages: "external", source: "ts" },
  rejected: {
    "The program's file alone": "its bodies are imported, not written in it: g65 and g66 differed in a body, and their candidates had the same fingerprint",
    "Each file it imports, listed": "a fingerprint per file says more, but the bundle already holds them all, in the order Node.js reads them",
  },
})

/**
 * Attribution
 * A record's seal: the SHA-256 of what it says, its keys in order, its seal left out. Anyone may compute it again: it
 * tells a record the engine wrote from one changed by hand afterwards, which is then not counted, but it proves no one's
 * identity; a key, later, would be another realization of the port.
 */
export const Attribution = fn({
  owner: "trame",
  implements: [Signatures],
  deps: { hashing: Hashing, sha256: Sha256, encodings: NodeEncodings, values: ValueTypes },
  body: code.file("./code/commands/attribution.ts"),
})

/**
 * Evidence sealed by attribution
 * Who gives evidence is attributed, and each record sealed with what it says, by the engine that writes it.
 */
export const SealedByAttribution = binding({
  owner: "trame",
  chooses: [Attribution],
  environments: [Local, Test],
  follows: [Strategy],
  serves: [ExecutableSpecification],
  context: "The evidence of the SDLC is a file anyone can edit: a record changed by hand would count as if the engine had written it, and AGENTS.md could only ask not to.",
  consequences: "Each record carries its seal; the compiler counts a record only while its seal matches, and says which one does not. A signature with a key is another realization of the same port, chosen here.",
  rejected: {
    "A key now": "where keys live is a question still open; the seal changes nothing to how a record is given",
    "No seal, a rule in AGENTS.md": "a rule nobody checks protects nothing",
  },
})

/**
 * Evidence of the SDLC
 * What trame ship and trame evidence share: the fingerprint of an artefact on disk (the SHA-256 of a file; of the list
 * of its files and theirs, for a directory; of a text, for a program bundled with what it imports), the fingerprint a check holds for (that of the artefacts it checks, as the
 * check kind computes it), and the evidence added to the file already there (a piece of the same node, source, day,
 * row, language and fingerprint replaces the one before; of another version, both are kept), each new record sealed,
 * which the command writes.
 */
export const SdlcEvidence = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    layout: Layout, records: ShippingRecords, reading: FileReading, paths: Paths, hashing: Hashing, sha256: Sha256,
    encodings: NodeEncodings, json: JsonFormatting, fingerprints: Fingerprints, signatures: Signatures,
  },
  body: code.file<typeof import("./code/commands/sdlc-evidence").default>("./code/commands/sdlc-evidence.ts"),
})

/**
 * The plan of a run elsewhere
 * What a runner elsewhere (a service of continuous integration, a script) needs to run a shipment as trame ship runs it
 * here, from the graph and the project: where the project is in Trame's repository, the words that ship it through the
 * launcher, the directories whose packages are installed from their lockfile, the words that install the pinned
 * generation's own packages when it has its own, what the packages the shipment's programs wire ask once installed (as
 * their nodes say), what the place makes available once shipped (what the file it writes publishes: nothing unless the
 * graph says so), where the evidence is, and the words that record where an artefact was made available. A writer of a
 * library gives it a form (a workflow, a script) and does what its settings say (keep the evidence, for how long); it
 * decides nothing of it.
 */
export const ShipmentRunPlan = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    line: TrameCommands, project: Project, layout: Layout, pin: EnginePin, reading: FileReading, paths: Paths, encodings: NodeEncodings,
    values: ValueTypes, sequences: Sequences, posix: Posix,
  },
  body: code.file<typeof import("./code/commands/run-plan").default>("./code/commands/run-plan.ts"),
})
