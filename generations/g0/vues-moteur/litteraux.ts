import { defineView, doc, plural, type Block, type Inline, type LiteralInfo, type View } from "../trame/kernel"

/**
 * Le catalogue des littéraux : ce que les corps de code écrivent en dur. Un littéral est spécifié quand un type
 * nommé le déclare (une union de littéraux) ; tous les autres restent à spécifier, sans exception.
 */
export default defineView({
  name: "litteraux",
  label: "Littéraux",
  group: "document",
  order: 90,
  run(c) {
    const title = "Littéraux"
    if (!c.literals) return { title, blocks: [doc.para("Ce moteur ne relève pas les littéraux.")] }
    // Un corps partagé par plusieurs nœuds n'est compté qu'une fois.
    const seen = new Set<string>()
    const all = c.literals().filter((l) => {
      const key = `${l.file}:${l.line}:${l.value}:${l.context}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    const todo = all.filter((l) => !l.declaredBy)
    const declared = all.filter((l) => l.declaredBy)
    const files = new Set(todo.map((l) => l.file))
    const count = <T,>(xs: T[], key: (x: T) => string) => {
      const m = new Map<string, T[]>()
      for (const x of xs) m.set(key(x), [...(m.get(key(x)) ?? []), x])
      return [...m].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    }
    const examples = (xs: LiteralInfo[]) => [...new Set(xs.map((x) => x.value))].slice(0, 3).flatMap((v, i): Inline[] => [...(i ? [" "] : []), doc.ident(v)])
    const owners = (xs: LiteralInfo[]) => {
      const nodes = new Map<string, View>()
      for (const x of xs) nodes.set(x.node.ref, x.node)
      return [...nodes.values()].flatMap((v, i): Inline[] => [...(i ? [", "] : []), doc.ref(v)])
    }

    // Les constantes que le graphe déclare (normes, éléments de syntaxe, fonctions…), par valeur.
    const constants = new Map<string, { node: View; name: string }[]>()
    const keyOf = (v: unknown) => (typeof v === "number" ? `n:${v}` : `s:${v}`)
    for (const v of c.all().nodes()) {
      for (const f of c.kindOf(v).fields.filter((x) => x.type === "constantes")) {
        const raw = v.field(f.name)
        if (!raw || typeof raw !== "object") continue
        for (const [name, k] of Object.entries(raw as Record<string, { valeur?: unknown }>)) {
          if (k && typeof k === "object" && (typeof k.valeur === "string" || typeof k.valeur === "number")) {
            constants.set(keyOf(k.valeur), [...(constants.get(keyOf(k.valeur)) ?? []), { node: v, name }])
          }
        }
      }
    }
    // La valeur d'un littéral, d'après son texte dans le code (le relevé garde le texte, pas la valeur).
    const valueOf = (l: LiteralInfo): unknown => {
      // Les nombres coïncident trop souvent (un 2 n'est pas l'autre) : seuls les textes sont rapprochés.
      if (l.kind !== "texte" || l.value.endsWith("…")) return undefined
      try {
        return l.value.startsWith("'") ? JSON.parse(`"${l.value.slice(1, -1).replace(/"/g, '\\"')}"`) : l.value.startsWith("`") ? l.value.slice(1, -1) : JSON.parse(l.value)
      } catch {
        return undefined
      }
    }
    const already = todo.map((l) => ({ l, by: constants.get(keyOf(valueOf(l))) })).filter((x) => x.by)
    const constantRefs = (xs: { node: View; name: string }[]) => xs.flatMap((x, i): Inline[] => [...(i ? [", "] : []), doc.ref(x.node), ".", x.name])

    const layerOf = (declaredBy: string) =>
      declaredBy.includes("ECMAScript") ? "langage" : declaredBy.includes("(trame/") ? "prélude" : declaredBy.includes("(kinds/") ? "types"
        : declaredBy.includes("(src/code/") ? "corps" : declaredBy.includes("(src/") ? "graphe" : "plateforme"
    const blocks: Block[] = [
      doc.summary(`${plural(todo.length, "littéral à spécifier", "littéraux à spécifier")} dans ${plural(files.size, "corps", "corps")}, dont ${already.length} déjà déclarés par une constante · ${declared.length} déclarés par un type`),
      doc.section("Par catégorie", [
        doc.table(["Catégorie", "À spécifier", "Exemples"], count(todo, (l) => l.category).map(([cat, xs]) => [[cat], [String(xs.length)], examples(xs)])),
      ]),
      doc.section("Par rôle", [
        doc.para("Ce que fait chaque littéral, d'après sa place dans le code. Le même 0 peut être un indice, un départ, un statut : c'est le rôle qui dit ce qu'il faut déclarer."),
        doc.table(["Rôle", "À spécifier", "Valeurs les plus fréquentes"], count(todo, (l) => (l.role ?? "non relevé").replace(/^argument de .*/, "argument")).map(([role, xs]) => [
          [role], [String(xs.length)],
          count(xs, (x) => x.value).slice(0, 5).flatMap(([v, ys], i): Inline[] => [...(i ? [" "] : []), doc.ident(v), ys.length > 1 ? ` ×${ys.length}` : ""]),
        ])),
      ]),
      doc.section("Valeurs répétées", [
        doc.para("La même valeur écrite à plusieurs endroits : une seule déclaration les remplacerait toutes."),
        doc.table(["Valeur", "Fois", "Dans"], count(todo.filter((l) => l.category !== "séparateur"), (l) => l.value).filter(([, xs]) => xs.length > 1).slice(0, 40)
          .map(([v, xs]) => [[doc.ident(v)], [String(xs.length)], owners(xs)])),
      ]),
      doc.section("Valeurs qu'une constante déclare déjà", [
        doc.para("Le graphe déclare déjà ces textes, avec leur sens : le corps pourrait recevoir la constante en paramètre au lieu de la réécrire. Une même valeur peut avoir plusieurs sens (« / » sépare des segments d'adresse comme il ferme une balise) : c'est le sens qui choisit la constante, ou qui en demande une nouvelle."),
        doc.table(["Valeur", "Fois", "Constantes", "Dans"], count(already, (x) => x.l.value).map(([v, xs]) => [[doc.ident(v)], [String(xs.length)], constantRefs(xs[0].by!), owners(xs.map((x) => x.l))])),
      ]),
      doc.section("Déjà déclarés par un type", [
        doc.para("Le type qui les déclare, et où il vit : le prélude du langage, un type de Trame, le graphe, un autre corps, ou la plateforme (les types de Node)."),
        doc.table(["Où", "Type", "Littéraux", "Exemples"], count(declared, (l) => l.declaredBy!).map(([t, xs]) => [[layerOf(t)], [doc.ident(t.replace(/ \(.*\)$/, ""))], [String(xs.length)], examples(xs)])
          .sort((a, b) => String(a[0][0]).localeCompare(String(b[0][0])))),
      ]),
      doc.section("Par corps", count(todo, (l) => l.file).map(([file, xs]) =>
        doc.details(`${file} · ${plural(xs.length, "littéral", "littéraux")}`, [
          doc.para("Corps de ", ...owners(xs), "."),
          doc.table(["Ligne", "Valeur", "Rôle", "Catégorie", "Contexte"], xs.sort((a, b) => a.line - b.line).map((l) => [[String(l.line)], [doc.ident(l.value)], [l.role ?? "non relevé"], [l.category], [doc.ident(l.context)]])),
        ]))),
    ]
    return {
      title,
      intro: ["Les valeurs écrites dans les corps de code, relevées par le driver de chaque langage, le ", doc.date(c.today), "."],
      blocks,
    }
  },
})
