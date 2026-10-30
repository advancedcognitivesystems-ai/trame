import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, unitOf, patchLeaves,
  type AnyNode, type Node, type PatchOf, type Unit, type View, type Resolution,
} from "../trame/kernel"

/** Un amendement : redéfinit une partie d'un autre nœud, éventuellement pour une période. */
const kind = defineKind({
  name: "amendment",
  label: { one: "Amendement", many: "Amendements" },
  order: 70,
  history: true,
  fields: {
    owner: field.owner("Décidé par"),
    why: field.text("Motif"),
    from: optional(field.date("En vigueur à partir du", "début")),
    until: optional(field.date("Jusqu'au", "fin")),
    patch: field.patch(),
  },
  edges: {
    amends: edge.amends({ label: "Amende", inverse: "Amendé par" }),
    replaces: optionalEdge(edge.many(["amendment"], { label: "Remplace", inverse: "Remplacé par", acyclic: true })),
  },

  activeAt: (self, g) => (!self.from || self.from <= g.today) && (!self.until || g.today <= self.until),

  /** Chaque feuille du patch est une revendication sur la cible. */
  claims: (self) => patchLeaves(self.field("patch")).map(([path, value]) => ({ target: self.amends, path, value })),

  /**
   * Deux amendements en vigueur touchent la même valeur. Dans l'ordre :
   * 1. celui qui en remplace explicitement un autre l'emporte sur lui ;
   * 2. si les chemins sont imbriqués sans être égaux, le plus précis s'applique en dernier ;
   * 3. si le responsable de la cible en a validé un seul, celui-là l'emporte ;
   * 4. sinon, la valeur est contestée : c'est au responsable de la cible de trancher.
   * Jamais « le plus récent gagne ».
   */
  resolve(target, claims, g): Resolution {
    const claimants = [...new Map(claims.map((c) => [c.by.node, c.by])).values()].sort((a, b) => a.ref.localeCompare(b.ref))
    const same = (a: View, b: View) => a.node === b.node
    const replaced: [View, View][] = []
    for (const a of claimants) {
      for (const r of g.from(a).out("replaces").nodes()) {
        const hit = claimants.find((b) => same(b, r))
        if (hit) replaced.push([a, hit])
      }
    }
    const remaining = claimants.filter((b) => !replaced.some(([, r]) => same(r, b)))
    const why = (text: string) =>
      [...replaced.map(([a, b]) => `« ${a.title} » remplace « ${b.title} »`), text].filter(Boolean).join(" ; ")
    if (remaining.length === 1) return { kind: "apply", order: remaining, reason: why(""), replaced }

    const mine = claims.filter((c) => remaining.some((b) => same(b, c.by)))
    const paths = mine.map((c) => c.path)
    if (remaining.length > 1 && new Set(paths).size === paths.length) {
      const depth = (v: View) => Math.min(...mine.filter((c) => same(c.by, v)).map((c) => (c.path ? c.path.split(".").length : 0)))
      const order = [...remaining].sort((a, b) => depth(a) - depth(b) || a.ref.localeCompare(b.ref))
      return { kind: "apply", order, reason: why("chemins imbriqués : le plus précis s'applique en dernier"), replaced }
    }

    const arbiter = target.owner
    const approved = remaining.filter((a) => g.from(a).in("approves").where((v) => !!arbiter && v.owner === arbiter).exists())
    if (approved.length === 1) {
      return { kind: "apply", order: approved, reason: why(`validé par ${arbiter}, responsable de « ${target.title} »`), replaced }
    }
    return {
      kind: "contested",
      reason: approved.length > 1
        ? `${arbiter} a validé plusieurs de ces amendements`
        : "aucun ne remplace l'autre et le responsable de la cible n'en a validé aucun",
      arbiter,
    }
  },

  holes(self) {
    const leaves = patchLeaves(self.field("patch"))
    if (!leaves.length) return [hole.warning("Amendement sans effet : il ne redéfinit rien")]
    const target = self.amends
    if (!target) return []
    return leaves
      .filter(([p, v]) => typeof v !== "function" && JSON.stringify(target.base(p)) === JSON.stringify(v))
      .map(([p]) => hole.warning(`Ne change rien : ${p} a déjà cette valeur`))
  },

  render(self, g) {
    const target = self.amends
    if (!target) return []
    const state = self.active ? "en vigueur" : self.from && g.today < self.from ? "pas encore en vigueur" : "plus en vigueur"
    const show = (v: unknown, path: string, rule: "d'origine" | "redéfinie") =>
      typeof v === "function" ? doc.value(v, undefined, { rule }) : doc.value(v, unitFor(target, path))
    const rows = patchLeaves(self.field("patch")).map(([path, v]) => [
      [doc.ident(path)],
      [show(target.base(path), path, "d'origine")],
      [show(v, path, "redéfinie")],
    ])
    const code = self.decl?.args[1]
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    return [
      doc.validity(state, self.from, self.until),
      doc.table(["Ce qui change", "Avant", "Après"], rows),
      ...(code ? [doc.details("L'amendement, dans le code", [doc.code("ts", code, source)])] : []),
    ]
  },
})

/** L'unité d'une valeur de la cible, pour l'afficher comme sa cible l'affiche. */
function unitFor(target: View, path: string): Unit | undefined {
  const info = target.fieldInfo(path.split(".")[0])
  if (info?.type === "duration" || info?.type === "percent" || info?.type === "chf") return info.type
  if (info?.type === "value") return unitOf(target.decl?.typeArgs[0])
  return undefined
}

interface AmendMeta {
  owner: string
  why: string
  from?: string
  until?: string
  /** Les amendements que celui-ci remplace explicitement, en cas de recoupement. */
  replaces?: readonly Node<"amendment">[]
}

/**
 * Amende un nœud : `patch` ne contient que ce qui change.
 * Une valeur remplace l'ancienne ; une règle se redéfinit à partir de l'ancienne.
 */
export function amend<T extends AnyNode>(target: T, patch: PatchOf<T>, m: AmendMeta): Node<"amendment"> {
  return kind({ amends: target, patch: patch as Record<string, unknown>, ...m })
}

export const amendment = kind
