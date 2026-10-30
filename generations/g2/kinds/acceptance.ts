import { defineKind, field, edge, hole, doc, Hole, type Inline } from "../trame/kernel"

type Check = () => boolean
type Criteria = (criterion: (name: string, check: Check) => void) => void

interface Result {
  name: string
  status: "validé" | "échoue" | "bloqué" | "erreur"
  /** La décision qui manque, quand le critère est bloqué. */
  waiting?: { ref: string; title: string; suffix: string }
  error?: string
}

/** Les critères d'acceptation d'une exigence. Affichés à l'intérieur de l'exigence. */
export const acceptance = defineKind({
  name: "acceptance",
  label: { one: "Jeu de critères d'acceptation", many: "Jeux de critères d'acceptation" },
  inline: "accepts",
  order: 60,
  fields: {
    owner: field.owner(),
    criteria: field.fn<Criteria>(() => (criterion) => criterion("exemple", () => true)),
  },
  edges: {
    accepts: edge.one(["requirement"], { label: "Accepte", inverse: "Critères d'acceptation" }),
  },

  evaluate(self, g): Result[] {
    const list: [string, Check][] = []
    self.criteria((name, check) => list.push([name, check]))
    return list.map(([name, check]): Result => {
      try {
        return { name, status: check() ? "validé" : "échoue" }
      } catch (e) {
        if (e instanceof Hole) {
          g.blocked(e, "critère", self.accepts)
          const v = g.view(e.node)
          return { name, status: "bloqué", waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : "" } }
        }
        return { name, status: "erreur", error: (e as Error).message }
      }
    })
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return "inconnu"
    if (r.some((x) => x.status === "échoue" || x.status === "erreur")) return "violé"
    if (r.some((x) => x.status === "bloqué")) return "bloqué"
    return "tenu"
  },

  holes: (self) =>
    (self.result<Result[]>() ?? [])
      .filter((r) => r.status === "échoue" || r.status === "erreur")
      .map((r) => hole.error(`Critère non tenu : « ${r.name} »`)),

  render(self) {
    const r = self.result<Result[]>() ?? []
    const detail = (x: Result): Inline[] | undefined =>
      x.waiting ? ["attend la décision ", { t: "ref", ref: x.waiting.ref, title: x.waiting.title }, x.waiting.suffix]
        : x.error ? [x.error] : undefined
    return [doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detail(x) })), [self.title, " · responsable : ", doc.person(self.owner)])]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
    const ok = all.filter((r) => r.status === "validé").length
    return `${ok} critère${ok > 1 ? "s" : ""} d'acceptation validé${ok > 1 ? "s" : ""} sur ${all.length}`
  },
})
