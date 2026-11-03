// What a runner elsewhere needs to run a shipment as trame ship runs it here, from the graph and the project: where the
// project is in Trame's repository (the generation it pins lives under the repository's generations), the words that
// ship it through the launcher, the directories whose packages are installed from their lockfile (Trame's, the
// libraries', the project's), the words that install the generation's own packages when it has its own, what the
// packages the shipment's programs wire ask once installed, what the place makes available (what the file it writes
// publishes, as the graph says: nothing by default), where the evidence is, and the words that record where an artefact
// was made available. A writer gives it a form; it decides nothing.

import { ArtifactEdge, EdgeName, KindName, PackageField, PipelineStage } from "../../../trame/kernel"
import type { Compilation, Pipeline, ProvidedBy, RunPlan, View } from "../../../trame/kernel"
import type { FileReading, Layout, Paths } from "../../architecture"
import type { TrameCommands } from "../../conventions"
import type { NodeEncodings, Posix } from "#std/system"
import type { Sequences, ValueTypes } from "#std/algebra"
import type { Api as ProjectApi } from "../engine/project"

export interface Deps {
  line: ProvidedBy<typeof TrameCommands>
  project: ProjectApi
  layout: Layout
  /** The key of a project's configuration that names the generation it pins. */
  pin: { key: string }
  reading: FileReading
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  values: ProvidedBy<typeof ValueTypes>
  sequences: ProvidedBy<typeof Sequences>
  posix: ProvidedBy<typeof Posix>
}

const body = ({ line, project, layout, pin, reading, paths, encodings, values, sequences, posix }: Deps) => {
  const { join, resolve, relative, dirname, sep } = paths
  const unique = <T>(xs: readonly T[]) => [...new Set(xs)]
  const read = (file: string) => (reading.existsSync(file) ? reading.readFileSync(file, encodings.utf8) : undefined)

  return (root: string, comp: Compilation, pipeline: Pipeline, written: View, file: string): RunPlan => {
    const configuration = JSON.parse(read(join(root, layout.configuration)) ?? JSON.stringify({})) as Record<string, unknown>
    const pinned = configuration[pin.key]
    // Each directory by its real path (since g98): a project reaches its generation and its libraries through links
    // (.trame/trame, .trame/std), and the place of a link says nothing of where its target is in the repository.
    const real = (dir: string) => (reading.existsSync(dir) ? reading.realpathSync(dir) : dir)
    // The generation lives under the repository's generations: the repository is two directories above it.
    const generation = values.isText(pinned) ? real(resolve(root, pinned)) : root
    const repository = dirname(dirname(generation))
    const from = (to: string, base = repository) => relative(base, to) || posix.currentDirectory
    const libraries = project.projectDirs(root).libraries.map((l) => ({ ...l, home: real(l.home) }))
    const locked = (dir: string) => reading.existsSync(join(dir, layout.lockfile))

    // What the shipment's programs wire in its environment, and the packages those nodes use.
    const environment = pipeline.environment
    const components = new Map<string, View>()
    for (const s of pipeline.steps) {
      const component = s.runs?.kind === KindName.component ? s.runs
        : s.runs?.kind === KindName.entry ? sequences.head(comp.from(s.runs).out(EdgeName.partOf).nodes()) : undefined
      if (component) components.set(component.ref, component)
    }
    const wired = environment ? [...components.values()].flatMap((c) => {
      const entries = comp.from(c).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()
      return comp.plan([...c.dependencies.map((d) => d.node), ...entries], environment).steps.map((s) => s.node)
    }) : []
    const packages = [...new Map(wired.flatMap((n) => comp.from(n).out(EdgeName.packages).nodes()).map((p) => [p.ref, p])).values()]
    // A package is prepared where it is installed: in its library when the library installs its own (it has a
    // lockfile, as std as it is), in the project otherwise (a library at a version, whose packages the project installs).
    const home = (v: View) => {
      const lib = libraries.find((l) => l.name === v.library)
      return lib !== undefined && locked(lib.home) ? lib.home : root
    }
    const prepares = packages.flatMap((p) => {
      const run = p.field(PackageField.prepare)
      return values.isText(run) ? [{ dir: from(home(p)), run }] : []
    })

    const repositoryLock = read(join(repository, layout.lockfile))
    const generationLock = read(join(generation, layout.lockfile))
    const launcher = [from(repository, root), layout.launcher].join(sep)
    // What the place makes available: what the file it writes publishes, as the graph says; nothing by default.
    const published = new Set(comp.from(written).out(ArtifactEdge.publishes).nodes().map((v) => v.ref))
    const delivers = pipeline.steps
      .filter((s) => s.stage === PipelineStage.produce && s.path !== undefined && published.has(s.node.ref))
      .map((s) => ({ artifact: s.node.id, path: from(resolve(root, s.path!)) }))
    return {
      shipment: pipeline.shipment.id,
      title: pipeline.shipment.title,
      project: from(root),
      command: [launcher, line.ship, pipeline.shipment.id, line.by],
      ...(generationLock !== undefined && generationLock !== repositoryLock ? { restore: [launcher, line.restore] } : {}),
      file: from(file),
      toRoot: from(repository, dirname(file)),
      installs: unique([repository, ...libraries.map((l) => l.home), root]).filter(locked).map((d) => from(d)),
      prepares,
      delivers,
      evidence: from(join(root, layout.evidence)),
      deployed: { command: [launcher, line.evidence], verdict: line.passed, by: line.by, url: line.url },
    }
  }
}

export type Api = ReturnType<typeof body>
export default body
