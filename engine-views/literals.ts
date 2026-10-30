import { defineView, doc, FieldType, LiteralKind, ViewGroup, ViewName, type Block, type Inline, type LiteralInfo, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * The catalogue of literals: what code bodies hard-code. The text of a message catalog is what the catalog declares;
 * every other literal is an error of its body, without exception, whatever type expects it: its value belongs in the
 * graph, with its meaning.
 */
export default defineView({
  name: ViewName.literals,
  label: say.literalsLiterals(),
  group: ViewGroup.document,
  run(c) {
    const { values, texts, counts, sequences, lists, settings } = c.lib
    const { examples: shownExamples, frequent, repeated, unrepeated } = settings.catalogue
    const title = say.literalsLiterals()
    if (!c.literals) return { title, blocks: [doc.para(say.literalsThisEngineDoesNotRecordLiterals())] }
    // A body shared by several nodes is counted only once: a node whose literals in a file are those another node already
    // brought for that file adds nothing (inline bodies share their module's file, not their literals). Two equal
    // literals on one line are two.
    const groups = new Map<string, LiteralInfo[]>()
    for (const l of c.literals()) {
      const key = JSON.stringify([l.file, l.node.ref])
      groups.set(key, [...(groups.get(key) ?? []), l])
    }
    const brought = new Set<string>()
    const all = [...groups.values()].filter((xs) => {
      const signature = JSON.stringify([sequences.head(xs)?.file, xs.map((x) => [x.line, x.value])])
      if (brought.has(signature)) return false
      brought.add(signature)
      return true
    }).flat()
    const todo = all.filter((l) => !l.declaredBy)
    const declared = all.filter((l) => l.declaredBy)
    const files = new Set(todo.map((l) => l.file))
    const count = <T,>(xs: T[], key: (x: T) => string) => {
      const m = new Map<string, T[]>()
      for (const x of xs) m.set(key(x), [...(m.get(key(x)) ?? []), x])
      return [...m].sort(([ka, a], [kb, b]) => b.length - a.length || ka.localeCompare(kb))
    }
    const spaced = (items: Inline[][]): Inline[] => items.flatMap((x, i) => [...(i ? [texts.space] : []), ...x])
    const examples = (xs: LiteralInfo[]) => spaced(sequences.take([...new Set(xs.map((x) => x.value))], shownExamples).map((v) => [doc.ident(v)]))
    const mostFrequent = (xs: LiteralInfo[]) =>
      spaced(sequences.take(count(xs, (x) => x.value), frequent).map(([v, ys]) => [doc.ident(v), counts.several(ys) ? say.literalsTimesShown(ys.length) : texts.empty]))
    const owners = (xs: LiteralInfo[]) => {
      const nodes = new Map<string, View>()
      for (const x of xs) nodes.set(x.node.ref, x.node)
      return lists.enumeration([...nodes.values()].map(doc.ref))
    }
    /** What a literal does, without what names its place (an argument, whatever the function called). */
    const roleOf = (l: LiteralInfo) => l.family ?? l.role ?? say.literalsNotRecorded()
    const lines = (xs: LiteralInfo[]) =>
      [...xs].sort((a, b) => a.line - b.line).map((l) => [[String(l.line)], [doc.ident(l.value)], [l.role ?? say.literalsNotRecorded()], [l.category], [doc.ident(l.context)]])
    const lineHead = [say.literalsLine(), say.literalsValue(), say.literalsRole(), say.literalsCategory(), say.literalsContext()]

    // The constants that the graph declares (standards, syntax elements, functions…), by value: a text and a number apart.
    const constants = new Map<string, { node: View; name: string }[]>()
    for (const v of c.all().nodes()) {
      for (const f of c.kindOf(v).fields.filter((x) => x.type === FieldType.constants)) {
        const raw = v.field(f.name)
        if (!values.isObject(raw)) continue
        for (const [name, k] of Object.entries(raw as Record<string, { value?: unknown }>)) {
          if (values.isObject(k) && (values.isText(k.value) || values.isNumber(k.value))) {
            const key = JSON.stringify(k.value)
            constants.set(key, [...(constants.get(key) ?? []), { node: v, name }])
          }
        }
      }
    }
    // Numbers coincide too often (one 2 is not another 2): only texts are matched, by the value their parts make.
    const valueOf = (l: LiteralInfo): unknown => (l.kind === LiteralKind.text ? l.raw : undefined)
    const already = todo.map((l) => ({ l, by: valueOf(l) === undefined ? undefined : constants.get(JSON.stringify(valueOf(l))) })).filter((x) => x.by)
    const constantRefs = (xs: { node: View; name: string }[]) => lists.enumeration(xs.map((x) => say.literalsConstantOf(doc.ref(x.node), x.name))).flatMap((x) => (Array.isArray(x) ? x : [x]))

    /** The literals of the language the project writes (its kinds and views): a report, by file. */
    const language = (): Block[] => {
      if (!c.languageLiterals) return []
      const found = c.languageLiterals() as LiteralInfo[]
      if (counts.isEmpty(found)) return [doc.section(say.literalsInTheLanguage(), [doc.para(say.literalsTheLanguageWritesNone())])]
      const byFile = count(found, (l) => l.file)
      return [doc.section(say.literalsInTheLanguage(), [
        doc.para(say.literalsTheKindsAndViewsAreFiles()),
        doc.summary(say.literalsInTheLanguageSummary(found.length, byFile.length)),
        doc.table([say.literalsCategory(), say.literalsLiterals(), say.literalsExamples()], count(found, (l) => l.category).map(([cat, xs]) => [[cat], [String(xs.length)], examples(xs)])),
        doc.table([say.literalsFile(), say.literalsLiterals(), say.literalsMostFrequentValues()], byFile.map(([file, xs]) => [[doc.ident(file)], [String(xs.length)], mostFrequent(xs)])),
        doc.table([say.literalsRole(), say.literalsLiterals(), say.literalsMostFrequentValues()], count(found, roleOf).map(([role, xs]) => [[role], [String(xs.length)], mostFrequent(xs)])),
        ...byFile.map(([file, xs]) => doc.details(say.literalsFileCount(file, xs.length), [doc.table(lineHead, lines(xs))])),
      ])]
    }

    const blocks: Block[] = [
      doc.summary(say.literalsInOfThemAlreadyDeclaredBy(todo.length, files.size, already.length, declared.length)),
      doc.para(say.literalsALiteralWrittenInABody()),
      doc.section(say.literalsByCategory(), [
        doc.table([say.literalsCategory(), say.literalsToDeclare(), say.literalsExamples()], count(todo, (l) => l.category).map(([cat, xs]) => [[cat], [String(xs.length)], examples(xs)])),
      ]),
      doc.section(say.literalsByRole(), [
        doc.para(say.literalsWhatEachLiteralDoesFromIts()),
        doc.table([say.literalsRole(), say.literalsToDeclare(), say.literalsMostFrequentValues()], count(todo, roleOf).map(([role, xs]) => [[role], [String(xs.length)], mostFrequent(xs)])),
      ]),
      doc.section(say.literalsRepeatedValues(), [
        doc.para(say.literalsTheSameValueWrittenInSeveral()),
        doc.table([say.literalsValue(), say.literalsTimes(), say.literalsIn()],
          sequences.take(count(todo.filter((l) => !unrepeated.includes(l.category)), (l) => l.value).filter(([, xs]) => counts.several(xs)), repeated)
            .map(([v, xs]) => [[doc.ident(v)], [String(xs.length)], owners(xs)])),
      ]),
      doc.section(say.literalsValuesThatAConstantAlreadyDeclares(), [
        doc.para(say.literalsTheGraphAlreadyDeclaresTheseTexts()),
        doc.table([say.literalsValue(), say.literalsTimes(), say.literalsConstants(), say.literalsIn()],
          count(already, (x) => x.l.value).map(([v, xs]) => [[doc.ident(v)], [String(xs.length)], constantRefs(sequences.head(xs)?.by ?? []), owners(xs.map((x) => x.l))])),
      ]),
      doc.section(say.literalsDeclaredByACatalog(), [
        doc.para(say.literalsTheTextWrittenInAMessage()),
        doc.table([say.literalsCatalog(), say.literalsLiterals(), say.literalsExamples()], count(declared, (l) => l.declaredBy!).map(([, xs]) => [owners(xs), [String(xs.length)], examples(xs)])),
      ]),
      doc.section(say.literalsByBody(), count(todo, (l) => l.file).map(([file, xs]) =>
        doc.details(say.literalsFileCount(file, xs.length), [doc.para(...say.literalsBodyOf(owners(xs))), doc.table(lineHead, lines(xs))]))),
      ...language(),
    ]
    return {
      title,
      intro: say.literalsIntroduction(doc.date(c.today)),
      blocks,
    }
  },
})
