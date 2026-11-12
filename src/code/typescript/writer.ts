// The TypeScript writer: the program of an assembled component, always frozen. It imports only the bodies, the tooling of
// the prelude and the declarations it must read (inline bodies, rules, the component); the values are written in it.
// Every construct comes from a syntax element of the module typescript; the names it calls, from the prelude's frozen
// API and from Node; the names it gives, from the decision ProgramNames. Besides the text, it says which values it wrote,
// in the order of the text, so that they can be read back.

import { WireMode } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Paths, Prelude } from "../../architecture"
import type { Dates, DriverMessages } from "../../messages"
import type { Sequences, Texts } from "#std/algebra"
import type { NodeModuleSpecifiers, NodeProcessApi } from "#std/system"
import type { FrozenApi, ReferenceSyntax, StepNames, TrameEnvironment } from "../../conventions"
import type {
  TypeScriptSyntax, ProgramNames, LineComment, StringLiteral, MemberAccess, OptionalAccess, Call, Await, Parenthesized, Property, ObjectLiteral,
  ArrayLiteral, ConstDeclaration, NamedImport, DefaultImport, AsExpression, OptionalPropertySignature, ObjectType, UnionType, IfStatement,
  StrictInequality, Assignment, InlineArray, AsyncBlockFunction,
} from "../../typescript"
import type { LanguageDescription } from "../../../kinds/language"
import type { Assembly, Emitted } from "../engine/assembly"
import type { Step } from "../engine/wiring"

export interface Deps {
  language: LanguageDescription
  syntax: ProvidedBy<typeof TypeScriptSyntax>
  frozen: ProvidedBy<typeof FrozenApi>
  node: ProvidedBy<typeof NodeProcessApi>
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  names: ProvidedBy<typeof ProgramNames>
  stepNames: ProvidedBy<typeof StepNames>
  /** A library's module prefixes a name with its separator replaced by the joint. */
  references: ProvidedBy<typeof ReferenceSyntax>
  comment: ProvidedBy<typeof LineComment>
  text: ProvidedBy<typeof StringLiteral>
  member: ProvidedBy<typeof MemberAccess>
  optional: ProvidedBy<typeof OptionalAccess>
  call: ProvidedBy<typeof Call>
  wait: ProvidedBy<typeof Await>
  group: ProvidedBy<typeof Parenthesized>
  property: ProvidedBy<typeof Property>
  object: ProvidedBy<typeof ObjectLiteral>
  array: ProvidedBy<typeof ArrayLiteral>
  constant: ProvidedBy<typeof ConstDeclaration>
  namedImport: ProvidedBy<typeof NamedImport>
  defaultImport: ProvidedBy<typeof DefaultImport>
  assertion: ProvidedBy<typeof AsExpression>
  optionalProperty: ProvidedBy<typeof OptionalPropertySignature>
  objectType: ProvidedBy<typeof ObjectType>
  union: ProvidedBy<typeof UnionType>
  condition: ProvidedBy<typeof IfStatement>
  differs: ProvidedBy<typeof StrictInequality>
  assignment: ProvidedBy<typeof Assignment>
  inline: ProvidedBy<typeof InlineArray>
  block: ProvidedBy<typeof AsyncBlockFunction>
  /** The variable of the environment that fixes the day, as the engine reads it: a program with periods reads it too. */
  environment: ProvidedBy<typeof TrameEnvironment>
  paths: Paths
  prelude: Prelude
  /** The words a module cannot use as the name of a variable. */
  reservedWords: readonly string[]
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = (deps: Deps) => {
  const { language, syntax, frozen, node, specifiers, names, stepNames, dates, messages } = deps
  const { comment, text, member, optional, call, wait, group, property, object, array, constant, namedImport, defaultImport } = deps
  const { assertion, optionalProperty, objectType, union, condition, differs, assignment, inline, block, environment } = deps
  const { empty } = deps.texts
  const { head } = deps.sequences
  const { join, relative, sep, dirname } = deps.paths
  const { meta, refOf } = deps.prelude.internal

  /** The names the program itself declares or reads: no step may take them. */
  const programNames = [frozen.name, names.result, names.periods, node.process, node.console]

  /** The path of a module, from the program: a relative specifier, with the separator of specifiers. */
  const specifierOf = (from: string, to: string) => {
    const path = relative(from, to).split(sep).join(specifiers.separator)
    return path.startsWith(specifiers.current) || path.startsWith(specifiers.parent) ? path : specifiers.current + path
  }

  /**
   * The program of an assembled component, always frozen: it imports only the bodies, the tooling of the prelude and
   * the declarations it must read (inline bodies, rules, the component). It does not compile the graph: the values are
   * written in it.
   */
  function emitProgram(a: Assembly, name: string): Emitted[] {
    const g = a.host.graph
    type N = Parameters<typeof refOf>[0]
    const title = (n: N) => g.view(n).title
    const rel = (to: string) => specifierOf(a.out, to)
    const bodyImports: string[] = []
    const declarations = new Map<string, Set<string>>()
    const declare = (n: N): string => {
      const file = g.view(n).decl?.file
      const id = meta(n).id
      if (!file || !id) throw new Error(messages.declarationNotFound(title(n)))
      const abs = join(a.host.root, file)
      declarations.set(abs, (declarations.get(abs) ?? new Set()).add(id))
      return id
    }
    // Each step becomes a variable. A step named like a reserved word or like a name of the program takes its module
    // as a prefix, as two steps with the same name do in the plan.
    const unavailable = new Set([...deps.reservedWords, ...programNames])
    const idents = new Map(a.plan.steps.map((s) => [s.name, unavailable.has(s.name) ? (meta(s.node).module ?? empty).split(deps.references.library).join(stepNames.joint) + stepNames.joint + s.name : s.name]))
    const ident = (name: string) => idents.get(name) ?? name
    const frozenCall = (what: string, args: readonly string[]) => call(member(frozen.name, what), args)

    // The values written in the program, in the order of the text: read back, they must come back.
    const stepValues: unknown[] = []
    const steps: string[] = []
    /** A step built as an assembly says: its value, or its body called with what it is given. */
    const emitStep = (x: Assembly, step: Step, out: string[], written: unknown[]) => {
      const kind = meta(step.node).def.label.one.toLowerCase()
      out.push(comment(messages.stepComment(title(step.node), kind, step.via.map(title))))
      if (step.how === WireMode.value) {
        const f = x.frozenValues.get(step.node)!
        if (f.json !== undefined) written.push(JSON.parse(f.json))
        out.push(constant(ident(step.name), f.json ?? frozenCall(frozen.value, [declare(step.node)])))
        return
      }
      const constants = Object.entries(step.constants ?? {})
      written.push(...constants.map(([, v]) => v))
      for (const d of step.deps) if (d.members) written.push(d.members)
      const args = object([
        ...constants.map(([k, v]) => property(k, JSON.stringify(v))),
        // Through a port, a capability: only the methods the node uses of it (since g83).
        ...step.deps.map((d) => property(d.param, d.members ? frozenCall(frozen.limited, [ident(d.name), JSON.stringify(d.members)]) : ident(d.name))),
      ])
      const src = x.bodies.get(step.node)!
      let declared: string
      if (src.file !== undefined) {
        declared = names.bodyPrefix + step.name
        const imported = defaultImport(declared, rel(src.file))
        if (!bodyImports.includes(imported)) bodyImports.push(imported)
      } else {
        declared = frozenCall(frozen.body, [declare(step.node)])
      }
      // A body amended at the date of the assembly: composed with its amendments, in their order (since g105).
      const body = src.amendments.length ? frozenCall(frozen.amended, [declare(step.node), declared, inline(src.amendments.map(declare))]) : declared
      out.push(constant(ident(step.name), wait(call(body, [args]))))
    }

    // The periods (since g106): the days after the assembly when what the program runs changes. A dated step (the
    // assembly says which) is built in each period, the others once.
    const later = a.periods ?? []
    const periods = [{ from: a.host.today, assembly: a }, ...later]
    const dated = a.dated ?? new Set<string>()
    for (const step of a.plan.steps) if (!dated.has(step.name)) emitStep(a, step, steps, stepValues)
    const datedEntries = a.entries.filter((e) => dated.has(a.plan.names.get(e)!))
    const periodValues: unknown[] = []
    const switches: unknown[] = []
    const periodLines = later.length ? periods.map(({ assembly: x }, position) => {
      const statements: string[] = []
      for (const step of x.plan.steps) if (dated.has(step.name)) emitStep(x, step, statements, periodValues)
      return constant(names.periodPrefix + position, block(statements, object(datedEntries.map((e) => property(ident(a.plan.names.get(e)!), ident(a.plan.names.get(e)!))))))
    }) : []
    if (periodLines.length) {
      switches.push(environment.today, ...periods.map((p) => p.from))
      periodLines.push(constant(names.periods, frozenCall(frozen.periods, [
        text(environment.today),
        array(periods.map((p, position) => inline([text(p.from), wait(call(names.periodPrefix + position, []))]))),
      ])))
    }
    const dataValues: unknown[] = []
    const frozenData = [...(a.frozenData ?? [])].map(([n, json]) => {
      dataValues.push(refOf(n), JSON.parse(json))
      return frozenCall(frozen.data, [declare(n), text(refOf(n)), json])
    })
    const nameOf = (n: N) => ident(a.plan.names.get(n)!)
    const comp = declare(a.component)
    const componentDeps = object(a.componentDeps.map((d) => property(d.param, nameOf(d.node))))
    const entryValues: unknown[] = []
    const entries = a.entries.map((e) => {
      const fields = a.entryFields.get(e) ?? {}
      entryValues.push(title(e), fields)
      // A dated entry point answers by the day: the entry of the period of the day (since g106).
      const isDated = datedEntries.includes(e)
      if (isDated) entryValues.push(nameOf(e))
      const value = isDated ? frozenCall(frozen.dated, [names.periods, text(nameOf(e))]) : nameOf(e)
      return object([property(frozen.title, text(title(e))), property(frozen.fields, JSON.stringify(fields)), property(frozen.entry, value)])
    })
    const started = messages.programStarted(title(a.component), title(a.env))
    const result = (what: string) => member(names.result, what)
    const outcome = union([objectType([optionalProperty(frozen.address, syntax.stringType), optionalProperty(frozen.code, syntax.numberType)]), syntax.undefined])
    const date = dates.format(a.host.today)
    /** An empty line of the program, between its parts. */
    const blankLine = empty
    const lines = [
      comment(messages.generatedBy(a.command, date)),
      comment(messages.componentInEnvironment(title(a.component), title(a.env))),
      comment(messages.frozenProgram()),
      comment(messages.notCompiledAtStartup(later.map((p) => dates.format(p.from)))),
      blankLine,
      namedImport([frozen.name], rel(a.prelude)),
      ...[...declarations].sort(([x], [y]) => x.localeCompare(y)).map(([file, ids]) => namedImport([...ids].sort(), rel(file))),
      ...bodyImports,
      blankLine,
      ...(frozenData.length ? [comment(messages.whatRulesRead(date)), ...frozenData, blankLine] : []),
      ...steps,
      ...(periodLines.length ? [blankLine, comment(messages.periodsOfTheProgram(environment.today)), ...periodLines] : []),
      blankLine,
      constant(names.result, assertion(group(wait(frozenCall(frozen.start, [comp, componentDeps, array(entries)]))), outcome)),
      condition(optional(names.result, frozen.address), call(member(node.console, node.log), [text(started), result(frozen.address)])),
      condition(differs(optional(names.result, frozen.code), syntax.undefined), assignment(member(node.process, node.exitCode), result(frozen.code))),
      blankLine,
    ]
    const extension = head(language.extensions)
    const programPath = join(a.out, name + extension)
    // The launcher (since g99): what Node.js runs. It leads the names of packages as the engine led them when it read
    // the project, each path from the program, then imports the program: its modules are resolved only then.
    const leading = {
      language: Object.fromEntries(Object.entries(a.leading.language).map(([n, file]) => [n, rel(file)])),
      libraries: Object.fromEntries(Object.entries(a.leading.libraries).map(([n, dir]) => [n, rel(dir)])),
      within: a.leading.within.map(rel),
      names: a.leading.names,
    }
    const programSpecifier = rel(programPath)
    const launcher = [
      comment(messages.generatedBy(a.command, date)),
      comment(messages.launcher(programSpecifier)),
      blankLine,
      namedImport([frozen.lead], rel(join(dirname(a.prelude), frozen.leading))),
      blankLine,
      call(frozen.lead, [JSON.stringify(leading), syntax.moduleUrl]),
      wait(call(syntax.importKeyword, [text(programSpecifier)])),
      blankLine,
    ]
    return [{
      path: programPath,
      content: lines.join(syntax.endOfLine),
      values: [...dataValues, ...stepValues, ...periodValues, ...switches, ...entryValues, started],
    }, {
      path: join(a.out, name + names.launcher + extension),
      content: launcher.join(syntax.endOfLine),
      // The specifier of the program is a module the reader reads as such, not a value.
      values: [leading],
      launches: true,
    }]
  }

  return { emitProgram }
}

export type Api = ReturnType<typeof body>
export default body
