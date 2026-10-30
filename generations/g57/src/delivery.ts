/** Trame · Delivery */

import { syntax } from "../kinds/syntax"
import { Css, CssStyleSheets, CssRule, CustomProperty } from "./html"
import { TextFile } from "#std/text"
import { Counts } from "#std/algebra"

// How a product reaches the people who use it. A delivery (kind delivery) names a component, the environment it is
// assembled for, a target and where it is written; trame deliver writes it. The first target is a page a browser opens
// as it is: the program bundled into the document, after the style sheets and the variables they use. A web
// application, then the phones' through Capacitor, come next, each a target.

/**
 * Style of a delivered page
 * The variables the style sheets use, written in the root rule from the values of the decisions they name (each a
 * record of names and values), then the sheets themselves, in the order the delivery names them.
 */
export const DeliveredStyle = syntax({
  owner: "trame",
  standard: Css,
  language: CssStyleSheets,
  section: "Delivered page",
  constants: {
    root: { value: ":root", meaning: "The root element: its variables hold for the whole page" },
  },
  deps: { rule: CssRule, property: CustomProperty, file: TextFile, counts: Counts },
  write: ({ root, rule, property, file: { endOfLine }, counts }) =>
    (variables: readonly Readonly<Record<string, string | number>>[], sheets: readonly string[]) => {
      const declared = variables.flatMap((v) => Object.entries(v).map(([name, value]) => property(name, String(value))))
      return [...(counts.any(declared) ? [rule(root, declared)] : []), ...sheets].join(endOfLine)
    },
  examples: [
    { input: [[{ "space-sm": "8px", leading: 1.5 }], ["body { margin: var(--space-sm); }"]], output: ":root { --space-sm: 8px; --leading: 1.5; }\nbody { margin: var(--space-sm); }" },
    { input: [[], ["body { margin: 0; }"]], output: "body { margin: 0; }" },
  ],
})
