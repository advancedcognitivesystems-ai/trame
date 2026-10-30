import {
  defineKind, field, optional, edge, hole, doc, Hole,
  type AnyNode, type Node, type Provided, type FileBody, type Inline,
} from "../trame/kernel"

/** Ce qu'un scénario reçoit pour dire ce qu'il vérifie. */
export type Verifie = (nom: string, ok: boolean) => void
export type Deroule = (verifie: Verifie) => Promise<void>

interface Result {
  name: string
  status: "validé" | "échoue" | "bloqué" | "erreur"
  waiting?: { ref: string; title: string; suffix: string }
  error?: string
}

/**
 * Un scénario : du code réel, branché dans un environnement (souvent « Test »), qui vérifie un point d'entrée
 * ou une exigence. Il est exécuté à la compilation, comme les critères d'acceptation.
 */
const kind = defineKind({
  name: "scenario",
  label: { one: "Scénario", many: "Scénarios" },
  order: 170,
  fields: {
    owner: field.owner(),
    deps: field.deps(),
    body: field.body(),
  },
  edges: {
    verifies: edge.many(["entry", "function", "requirement", "component"], { label: "Vérifie", inverse: "Vérifié par" }),
    env: edge.one(["environment"], { label: "Dans", inverse: "Scénarios" }),
  },

  async evaluate(self, g): Promise<Result[]> {
    const out: Result[] = []
    const fail = (name: string, e: unknown) => {
      if (e instanceof Hole) {
        for (const v of self.verifies) g.blocked(e, "scénario", v)
        const v = g.view(e.node)
        out.push({ name, status: "bloqué", waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : "" } })
      } else out.push({ name, status: "erreur", error: (e as Error).message })
    }
    let run: Deroule
    try {
      run = (await g.wire([{ name: "scenario", node: self }], self.env)).scenario as Deroule
    } catch (e) {
      fail("branchement", e)
      return out
    }
    try {
      await run((name, ok) => out.push({ name, status: ok ? "validé" : "échoue" }))
    } catch (e) {
      fail(out.length ? "suite du scénario" : "exécution", e)
    }
    return out
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
      .map((r) => hole.error(r.error ? `Scénario en erreur (${r.name}) : ${r.error}` : `Vérification non tenue : « ${r.name} »`)),

  render(self) {
    const r = self.result<Result[]>() ?? []
    const detail = (x: Result): Inline[] | undefined =>
      x.waiting ? ["attend la décision ", { t: "ref", ref: x.waiting.ref, title: x.waiting.title }, x.waiting.suffix] : x.error ? [x.error] : undefined
    return [doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detail(x) })), [self.title, " · dans ", doc.ref(self.env)])]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
    const ok = all.filter((r) => r.status === "validé").length
    return `${ok} vérification${ok > 1 ? "s" : ""} de scénario tenue${ok > 1 ? "s" : ""} sur ${all.length}`
  },
})

type Deps = Record<string, AnyNode>

interface ScenarioInput<D extends Deps> {
  owner: string
  verifies: readonly Node<"entry" | "function" | "requirement" | "component">[]
  env: Node<"environment">
  deps: D
  body: ((deps: Provided<D>) => Deroule) | FileBody<(deps: Provided<D>) => Deroule>
}

export function scenario<D extends Deps>(input: ScenarioInput<D>): Node<"scenario"> {
  return kind(input as never) as never
}

export const scenarioKind = kind
