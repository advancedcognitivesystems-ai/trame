/** Documents · Samples */

import type { Document } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"

// What the library's scenarios render: two documents in the intermediate format, as the views of a small project would
// give them (a summary of the project, and the module of its product), with every kind of block and of piece of a
// sentence, a graph and a timeline, references within a document and from one to the other, and a file of the project.
// The intermediate format is the contract between the views and the renderers: the scenarios hold the renderers to it.

/**
 * The documents the scenarios render
 * The summary of a small project and the module of its product: what each block and each piece looks like, once.
 */
export const SampleDocuments = decision<readonly Document[]>({
  owner: "trame",
  value: [
    {
      id: "index", view: "index", group: "summary", title: "A small project", file: "docs/index.md",
      intro: ["What the project is for: ", { t: "ref", ref: "product.Fast", title: "Reservations answered fast" }, "."],
      blocks: [
        { type: "summary", content: ["1 goal, 1 requirement · ", { t: "status", status: "held" }] },
        {
          type: "section", title: "What it holds", id: "holds",
          blocks: [
            {
              type: "para",
              content: [
                "Decided ", { t: "value", value: 15, unit: "min", shownAs: "15 min" }, ", open ", { t: "value", value: null, open: "undecided" },
                ", by ", { t: "person", name: "karim" }, " on ", { t: "date", date: "2026-11-26" }, ", in ", { t: "ident", text: "src/product.ts:12" },
                "; see ", { t: "doc", id: "product", title: "Product" }, " and ", { t: "file", path: "src/product.ts", title: "its sources" },
                " (", { t: "severity", severity: "warning" }, ").",
              ],
            },
            { type: "facts", items: [{ label: "Owner", value: [{ t: "person", name: "karim" }] }, { label: "Since", value: [{ t: "date", date: "2026-10-30" }] }] },
            { type: "list", items: [["A goal"], ["A requirement that refines it"]] },
            {
              type: "table", head: ["Node", "Status"],
              rows: [[[{ t: "ref", ref: "product.Fast", title: "Reservations answered fast" }], [{ t: "status", status: "held" }]]],
            },
            { type: "code", lang: "ts", text: "export const Fast = goal({ owner: \"karim\" })", source: "src/product.ts:3" },
            {
              type: "checks", title: ["Criteria of ", { t: "ref", ref: "product.Answered", title: "Answered in time" }],
              items: [{ name: "An answer within the minute", outcome: "passed" }, { name: "A late answer refused", outcome: "failed", detail: ["took 2 min"] }],
            },
            { type: "validity", state: "in force", from: "2026-10-01", until: "2026-12-31" },
            { type: "details", summary: "The code", blocks: [{ type: "code", lang: "ts", text: "const x = 1", source: "src/product.ts:9" }] },
          ],
        },
        {
          type: "issues",
          items: [
            { severity: "error", code: "literal-in-body", what: "A literal in a body", where: { ref: "product.Answered", title: "Answered in time" }, source: "src/product.ts:14", owner: "karim" },
            { severity: "error", raisedFrom: "warning", what: "Nothing applies it yet", where: "the graph", owner: "lea", effect: "a wish" },
          ],
        },
        {
          type: "figure", caption: "The layers of the graph",
          figure: {
            type: "graph", shape: "layers",
            nodes: [
              { ref: "product.Fast", title: "Reservations answered fast", kind: "goal", kindLabel: "Goal", module: "product", status: "held", active: true, history: false, root: true, repealed: false, open: false, layer: 0 },
              { ref: "product.Answered", title: "Answered in time", kind: "requirement", kindLabel: "Requirement", module: "product", status: "violated", active: true, history: false, root: false, repealed: false, open: true, layer: 1 },
            ],
            edges: [{ from: "product.Answered", to: "product.Fast", label: "refines", inverse: "refined by", nature: "declared", active: true }],
            groups: [{ id: "product", label: "Product" }],
          },
        },
        {
          type: "figure", caption: "When it holds",
          figure: {
            type: "timeline", today: "2026-11-26", from: "2026-10-01", to: "2026-12-31",
            lanes: [{
              ref: "product.Answered", title: "Answered in time", kindLabel: "Requirement", module: "product", active: true,
              periods: [{ from: "2026-10-01", until: "2026-12-31" }], marks: [{ date: "2026-12-15", label: "Reviewed", role: "review" }],
            }],
          },
        },
      ],
    },
    {
      id: "product", view: "module", group: "module", title: "Product", file: "docs/product.md",
      blocks: [
        {
          type: "card", ref: "product.Fast", id: "Fast", title: "Reservations answered fast", module: "product", kind: "goal", kindLabel: "Goal",
          source: "src/product.ts:3", status: "held", history: false, active: true, description: "A person who reserves knows at once.",
          body: [{ type: "para", content: ["Back to ", { t: "doc", id: "index", title: "the summary" }, "."] }],
          facts: [{ label: "Decided by", value: [{ t: "person", name: "karim" }] }],
          links: [{ label: "refined by", nature: "declared", active: true, targets: [{ ref: "product.Answered", title: "Answered in time" }] }],
          resolutions: [],
          children: [{ ref: "product.Answered", body: [{ type: "para", content: ["Within the minute."] }] }],
          views: [],
        },
      ],
    },
  ],
})
