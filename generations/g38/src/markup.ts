/** Trame · Documents in the page */

import { decision } from "../kinds/decision"

// The HTML of a document, as the page shows it: what its elements are named by, for the page's style sheet to style
// them and its script to act on them (follow a reference, open a view, draw a figure). The elements themselves are
// HTML's (module html); the syntax that writes them is a realization of the page's syntax (module rendering).

/** The classes of a document's elements, the prefixes of the classes of vocabulary values, its attributes, its headings. */
export interface Markup {
  classes: {
    reference: string
    open: string
    rule: string
    pill: string
    published: string
    severity: string
    person: string
    card: string
    history: string
    repealed: string
    meta: string
    views: string
    viewButton: string
    nature: string
    inactive: string
    facts: string
    resolution: string
    child: string
    tableWrap: string
    code: string
    codeSource: string
    checksTitle: string
    validity: string
    summary: string
    intro: string
    figure: string
    figureScroll: string
  }
  /** Before the key of a vocabulary value: the class of an outcome, a validity, a severity (a status: the page's). */
  prefixes: { outcome: string; validity: string; severity: string }
  /** What the page's script reads: the node a reference leads to, the document, the view a button opens, a figure to draw. */
  attributes: { reference: string; doc: string; view: string; node: string; figure: string }
  /** The rank of each heading: the title, a section at the top of a document, a card, a section further down. */
  headings: { title: number; section: number; card: number; nested: number }
}

/**
 * Documents in the page
 * The page's style sheet and its script know a document's HTML by these names: a reference is a link that carries the
 * node it leads to, a card an article that carries the node's identifier, a status a pill whose class is the key of the
 * status. Headings go down one rank per section, a card's title one rank under the top sections; what is deeper than a
 * card's title shares one rank, so that the outline of a long document stays readable.
 */
export const DocumentMarkup = decision<Markup>({
  owner: "trame",
  value: {
    classes: {
      reference: "ref", open: "open", rule: "rule", pill: "pill", published: "pub", severity: "sev", person: "person",
      card: "card", history: "history", repealed: "repealed", meta: "meta", views: "views", viewButton: "chip-btn",
      nature: "nature", inactive: "inactive", facts: "facts", resolution: "resolution", child: "child",
      tableWrap: "table-wrap", code: "code", codeSource: "code-source", checksTitle: "checks-title",
      validity: "validity", summary: "summary", intro: "intro", figure: "figure", figureScroll: "figure-scroll",
    },
    prefixes: { outcome: "oc-", validity: "va-", severity: "sev-" },
    attributes: { reference: "data-ref", doc: "data-doc", view: "data-view", node: "data-node", figure: "data-figure" },
    headings: { title: 1, section: 2, card: 3, nested: 4 },
  },
  rejected: {
    "Inline styles": "the page's themes and its narrow screen change the look, which a style sheet does once",
    "One heading rank per level": "below a card, the ranks run out, and the outline of a long document is unreadable",
  },
})
