// Rendu Markdown : un document du format intermédiaire devient un fichier lisible partout.
// Les figures deviennent des diagrammes Mermaid (affichés par GitHub, GitLab, la plupart des éditeurs). Pur : la page s'en sert aussi.

import type { Block, Card, Document, Figure, Inline } from "../ir"
import { frDate } from "../format"
import { inlineText, isOpen, resolutionInlines, validityParts, valueText, type Location } from "./common"

export interface MarkdownContext {
  /** Où vit la fiche de chaque nœud. */
  locate: Map<string, Location>
  /** Le fichier de chaque document (pour les liens entre documents). */
  files: Map<string, string | undefined>
}

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ")
const base = (file?: string) => (file ? file.split("/").at(-1)! : undefined)

export function toMarkdown(d: Document, ctx: MarkdownContext): string {
  const href = (ref: string): string | undefined => {
    const loc = ctx.locate.get(ref)
    if (!loc) return undefined
    if (loc.doc === d.id) return `#${loc.anchor}`
    return loc.file ? `${base(loc.file)}#${loc.anchor}` : undefined
  }

  const inline = (i: Inline): string => {
    if (typeof i === "string") return i
    switch (i.t) {
      case "value": return isOpen(i) ? `**${valueText(i)}**` : valueText(i)
      case "ref": {
        const h = href(i.ref)
        return h ? `[${i.title}](${h})` : i.title
      }
      case "doc": {
        const f = base(ctx.files.get(i.id))
        return f ? `[${i.title}](${f})` : i.title
      }
      case "status": return `**${i.status}**`
      case "severity": return i.severity
      case "date": return frDate(i.date)
      case "person": return i.name
      case "ident": return `\`${i.text}\``
    }
  }
  const line = (list: Inline[]) => list.map(inline).join("")
  const cell = (list: Inline[]) => esc(line(list))

  const table = (head: string[], rows: string[][]): string[] => [
    `| ${head.map(esc).join(" | ")} |`,
    `|${head.map(() => "---").join("|")}|`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
    "",
  ]

  const card = (c: Card, level: number): string[] => {
    const h = "#".repeat(Math.min(level, 6))
    const L: string[] = [`<a id="${c.id}"></a>`, "", `${h} ${c.title}${c.repealedBy ? " (abrogé)" : ""}`, ""]
    L.push([`\`${c.id}\``, c.source && `\`${c.source}\``, c.status && `statut : **${c.status}**`, c.published && "publié"].filter(Boolean).join(" · "), "")
    if (c.description) L.push(c.description, "")
    if (c.repealedBy) L.push(`**Abrogé** par ${inline({ t: "ref", ...c.repealedBy })} : ce nœud n'est plus dans le graphe en vigueur, ni dans l'instantané.`, "")
    L.push(...blocks(c.body, level + 1))
    for (const r of c.resolutions) L.push(`> ${line(resolutionInlines(r))}`, "")
    const facts = [
      ...c.facts.map((f) => `${f.label} : ${line(f.value)}`),
      ...c.links.map((l) => `${l.label}${l.active ? "" : " (pas en vigueur)"} : ${l.targets.map((t) => inline({ t: "ref", ...t })).join(", ")}`),
    ]
    for (const f of facts) L.push(`- ${f}`)
    if (facts.length) L.push("")
    for (const ch of c.children) L.push(`<a id="${ch.ref.split(".").slice(1).join(".")}"></a>`, "", ...blocks(ch.body, level + 1))
    return L
  }

  const figure = (f: Figure, caption?: string): string[] => {
    const L: string[] = ["```mermaid"]
    if (f.type === "graph") {
      const ids = new Map(f.nodes.map((n, i) => [n.ref, `n${i}`]))
      const q = (s: string) => s.replace(/"/g, "#quot;")
      L.push(f.shape === "couches" || f.shape === "arbre" ? "flowchart TB" : "flowchart LR")
      const node = (n: (typeof f.nodes)[number]) => {
        const cls = [n.status ?? "neutre", n.history ? "historique" : "", n.active ? "" : "inactif", n.open ? "ouvert" : ""].filter(Boolean).join(",")
        return `  ${ids.get(n.ref)}["${q(n.title)}<br/><small>${q(n.kindLabel)}</small>"]:::${cls.split(",")[0]}`
      }
      if (f.shape === "couches" && f.groups.length > 1) {
        for (const gr of f.groups) {
          const mine = f.nodes.filter((n) => n.module === gr.id)
          if (!mine.length) continue
          L.push(`  subgraph ${gr.id}["${q(gr.label)}"]`, ...mine.map((n) => "  " + node(n)), "  end")
        }
      } else {
        L.push(...f.nodes.map(node))
      }
      for (const e of f.edges) {
        const a = ids.get(e.from)
        const b = ids.get(e.to)
        if (!a || !b) continue
        const label = q(`${e.label}${e.active ? "" : " (pas en vigueur)"}`)
        const arrow = e.nature === "calculée" ? "-.-" : e.nature === "déduite" ? "-.->" : e.role === "gagnant" || e.role === "appui" ? "==>" : "-->"
        L.push(`  ${a} ${arrow}|${label}| ${b}`)
      }
      L.push(
        "  classDef tenu fill:#e1f1e7,stroke:#26734a,color:#17202a",
        "  classDef bloqué fill:#fbf0d9,stroke:#9a6200,color:#17202a",
        "  classDef violé fill:#f9e3e1,stroke:#ad2a22,color:#17202a",
        "  classDef inconnu fill:#e9edf0,stroke:#65707c,color:#17202a",
        "  classDef neutre fill:#ffffff,stroke:#5a6672,color:#17202a",
      )
      const history = f.nodes.filter((n) => n.history).map((n) => ids.get(n.ref))
      if (history.length) L.push(`  style ${history.join(",")} stroke-dasharray: 4 3`)
      const inactive = f.nodes.filter((n) => !n.active).map((n) => ids.get(n.ref))
      if (inactive.length) L.push(...inactive.map((id) => `  style ${id} opacity:0.5`))
    } else {
      L.push("gantt", "  dateFormat YYYY-MM-DD", "  axisFormat %d.%m", `  title Autour du ${frDate(f.today)}`)
      for (const lane of f.lanes) {
        L.push(`  section ${lane.title.replace(/:/g, " ")}`)
        for (const p of lane.periods) {
          const from = p.from ?? f.from
          const until = p.until ?? f.to
          L.push(`    En vigueur : ${from}, ${until}`)
        }
        for (const m of lane.marks.filter((x) => x.role === "échéance" || x.role === "revue")) {
          L.push(`    ${m.label.replace(/:/g, " ")} : milestone, ${m.date.length === 7 ? m.date + "-01" : m.date}, 0d`)
        }
      }
      L.push("  section Date du graphe", `    ${frDate(f.today)} : milestone, ${f.today}, 0d`)
    }
    L.push("```", "")
    if (caption) L.push(`*${caption}*`, "")
    return L
  }

  const blocks = (list: Block[], level: number): string[] => {
    const L: string[] = []
    for (const b of list) {
      switch (b.type) {
        case "para": L.push(line(b.content), ""); break
        case "facts": L.push(...b.items.map((f) => `- ${f.label} : ${line(f.value)}`), ""); break
        case "list": L.push(...b.items.map((x) => `- ${line(x)}`), ""); break
        case "table": L.push(...table(b.head, b.rows.map((r) => r.map(cell)))); break
        case "code": L.push("```" + b.lang, b.text, "```", ""); break
        case "checks":
          if (b.title) L.push(`**${line(b.title)}**`, "")
          L.push(...table(["Critère", "Résultat"], b.items.map((x) => [
            esc(x.name),
            x.outcome === "validé" ? "validé" : `**${x.outcome}**${x.detail ? ` : ${cell(x.detail)}` : ""}`,
          ])))
          break
        case "validity": {
          const [head, rest] = validityParts(b)
          L.push(`**${head}**${rest}`, "")
          break
        }
        case "details": L.push(`<details><summary>${b.summary}</summary>`, "", ...blocks(b.blocks, level), "</details>", ""); break
        case "section": {
          if (b.id) L.push(`<a id="${b.id}"></a>`, "")
          L.push(`${"#".repeat(Math.min(level, 6))} ${b.title}`, "", ...blocks(b.blocks, level + 1))
          break
        }
        case "summary": L.push(`> **${line(b.content)}**`, ""); break
        case "issues":
          L.push(...table(["Gravité", "Quoi", "Où", "Responsable", "Conséquence"], b.items.map((x) => [
            x.severity, esc(x.what),
            typeof x.where === "string" ? esc(x.where) : x.where ? inline({ t: "ref", ...x.where }) : "",
            x.owner ?? "à attribuer", esc(x.effect ?? ""),
          ])))
          break
        case "resolution": L.push(`> ${line(resolutionInlines(b))}`, ""); break
        case "card": L.push(...card(b, level)); break
        case "figure": L.push(...figure(b.figure, b.caption)); break
        default: {
          const never: never = b
          throw new Error(`bloc inconnu : ${JSON.stringify(never)}`)
        }
      }
    }
    return L
  }

  const L: string[] = [`# ${d.title}`, ""]
  if (d.intro) L.push(`*${line(d.intro)}*`, "")
  L.push(...blocks(d.blocks, 2))
  return L.join("\n").replace(/\n{3,}/g, "\n\n")
}

export { inlineText }
