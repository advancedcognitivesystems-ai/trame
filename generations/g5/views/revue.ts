import { defineView, doc, plural, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"

/** Ce que les déclarations pas encore publiées ajoutent au graphe publié : de quoi relire avant de fusionner. */
export default defineView({
  name: "revue",
  label: "Revue de la branche",
  group: "document",
  order: 50,
  run(c) {
    const all = c.all().nodes()
    const intro: Inline[] = ["Ce que les déclarations pas encore publiées ajoutent au graphe publié (", doc.ident("trame.lock"), "), vu le ", doc.date(c.today), "."]
    if (!all.some((v) => c.published(v))) {
      return { title: "Revue de la branche", intro, blocks: [doc.para("Rien n'est encore publié : tout le graphe est en revue. ", doc.ident("npm run publish"), " fige l'état actuel.")] }
    }
    const fresh = all.filter((v) => !c.published(v))
    const isFresh = (v: View) => fresh.some((f) => f.ref === v.ref)
    const lock = c.lockIssues()
    const claims = fresh.flatMap((v) => c.claims(v, "par"))
    const conflicts = c.resolutions().filter((r) => r.claimants.some(isFresh))
    const added = c.issues().filter((i) => i.origin !== "publication" && i.node &&
      (isFresh(i.node) || (i.origin === "recoupement" && conflicts.some((r) => r.target.ref === i.node!.ref))))
    const blocking = added.filter((i) => i.severity === "bloquant").length

    const blocks: Block[] = [doc.summary(
      `${plural(fresh.length, "déclaration nouvelle", "déclarations nouvelles")} · ${plural(lock.length, "déclaration publiée touchée", "déclarations publiées touchées")} · ${plural(conflicts.length, "recoupement")} · ${plural(blocking, "trou bloquant ajouté", "trous bloquants ajoutés")}`,
    )]

    const redefined: Block[] = []
    if (!claims.length) redefined.push(doc.para("Les nouvelles déclarations ne redéfinissent rien de publié."))
    else {
      redefined.push(doc.table(["Cible", "Chemin", "Déclaré", "Demandé", "Par", "Issue"], claims.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || "(nœud entier)")], [x.before], [x.after], [doc.ref(x.by)], outcomeOf(x, c.today),
      ])))
      const targets = [...new Map(claims.map((x) => [x.target.ref, x.target])).values()]
      redefined.push(doc.list(targets.map((t) => {
        const firsts = [...new Set(claims.filter((x) => x.target.ref === t.ref).map((x) => x.path.split(".")[0]))]
        const now = firsts.flatMap((f, i): Inline[] => [
          ...(i ? [" · "] : []),
          ...(f ? [doc.ident(f), " = ", typeof t.field(f) === "function"
            ? doc.value(undefined, undefined, { rule: t.amendedBy.some((a) => a.paths.includes(f)) ? "redéfinie" : "d'origine" })
            : c.value(t, f, t.field(f))] : [t.repealedBy ? "abrogé" : "en vigueur"]),
        ])
        return [doc.ref(t), ", en vigueur le ", doc.date(c.today), " avec la branche : ", ...now]
      })))
    }
    blocks.push(doc.section("Ce que la branche redéfinit", redefined))
    if (conflicts.length) blocks.push(doc.section("Recoupements", conflicts.map(c.resolution)))
    const checks = [...lock, ...added]
    blocks.push(doc.section("À vérifier avant de fusionner", [checks.length
      ? doc.issues(checks.map(c.issueItem))
      : doc.para("La branche n'ajoute ni trou, ni erreur, et ne touche aucune déclaration publiée.")]))
    blocks.push(doc.section("Déclarations nouvelles", [doc.table(["Déclaration", "Type", "Responsable", "Source"], fresh.map((v) => [
      [doc.ref(v)], [c.kindOf(v).label.one], v.owner ? [doc.person(v.owner)] : [""], [doc.ident(v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref)],
    ]))]))
    return { title: "Revue de la branche", intro, blocks }
  },
})
