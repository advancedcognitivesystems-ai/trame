/** Trame · Delivery */

import { code } from "../trame/kernel"
import { syntax } from "../kinds/syntax"
import { decision } from "../kinds/decision"
import { fn } from "../kinds/function"
import { ModuleLoader } from "./architecture"
import { ExecutableSpecification } from "./product"
import { Css } from "#std/html"
import { CssStyleSheets, CssRule, CustomProperty } from "./html"
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

/**
 * How a bundle is led
 * The name of the plugin that leads esbuild, and the names it is asked about: those of an import map (#trame/kernel,
 * #std/algebra).
 */
export const BundlerLeading = decision<{ plugin: string; names: string }>({
  owner: "trame",
  value: { plugin: "trame-names", names: "^#" },
  rejected: {
    "An import map written into each published package": "a package published once would name one language and one version of each library, whoever bundles it",
  },
})

/**
 * The names a bundle is led by
 * What a bundler is given so that it leads the names of packages as the engine leads Node.js when it runs the graph
 * (since g95): the language to the engine's, a library's name, in the files of the project and of its libraries, to
 * the library the project reads. A library published once is then bundled with the language and the libraries of the
 * project that delivers it, as it runs with them, and a page holds one version of each. It touches nothing: it asks the
 * module loader where a name leads.
 */
export const NamesLed = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { loader: ModuleLoader, leading: BundlerLeading },
  body: code.file<typeof import("./code/delivery/names-led").default>("./code/delivery/names-led.ts"),
})
