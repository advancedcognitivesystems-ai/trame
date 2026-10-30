/** Trame · Packages */

import { pkg } from "../kinds/package"
import { decision } from "../kinds/decision"
import { fn } from "../kinds/function"
import { SemanticVersioning } from "../std/src/measures"
import { Counts } from "../std/src/algebra"
import { SingleSource } from "./product"

// The packages Trame's code depends on, at the versions the project installs: the graph decides them, trame manifest
// writes them in package.json, npm installs them, and each one is checked against the lockfile; the registry's reports
// (trame audit) reach it as evidence. The implementations that import a package, and the languages whose grammar it
// is, name it.

/**
 * TypeScript
 * The compiler: it reads the declarations of the graph, checks the bodies against their parameters, and transpiles.
 */
export const TypeScriptPackage = pkg({
  owner: "trame", packageName: "typescript", version: "6.0.3", url: "https://www.npmjs.com/package/typescript",
  holdsBelow: "7.0.0",
  because: "TypeScript 7 is the compiler rewritten in Go: its package no longer gives the JavaScript API the engine reads the declarations with (a program, its type checker, its comments), only an unstable one",
})

/**
 * esbuild
 * Bundles the page's program into one module.
 */
export const EsbuildPackage = pkg({ owner: "trame", packageName: "esbuild", version: "0.28.2", url: "https://www.npmjs.com/package/esbuild" })

/**
 * tsx
 * Runs TypeScript as it is, without a build: the engines, the loader of the graph's modules.
 */
export const TsxPackage = pkg({ owner: "trame", packageName: "tsx", version: "4.23.15", url: "https://www.npmjs.com/package/tsx" })

/**
 * web-tree-sitter
 * tree-sitter in WebAssembly: the syntax trees of the bodies.
 */
export const WebTreeSitterPackage = pkg({ owner: "trame", packageName: "web-tree-sitter", version: "0.27.1", url: "https://www.npmjs.com/package/web-tree-sitter" })

/**
 * Grammar of TypeScript
 */
export const TypeScriptGrammar = pkg({ owner: "trame", packageName: "tree-sitter-typescript", version: "0.23.2", url: "https://www.npmjs.com/package/tree-sitter-typescript" })

/**
 * Grammar of HTML
 */
export const HtmlGrammar = pkg({ owner: "trame", packageName: "tree-sitter-html", version: "0.23.2", url: "https://www.npmjs.com/package/tree-sitter-html" })

/**
 * Grammar of CSS
 */
export const CssGrammar = pkg({ owner: "trame", packageName: "tree-sitter-css", version: "0.25.0", url: "https://www.npmjs.com/package/tree-sitter-css" })

/**
 * Grammar of HCL
 * The grammar Terraform's modules are read with.
 */
export const HclGrammar = pkg({ owner: "trame", packageName: "@tree-sitter-grammars/tree-sitter-hcl", version: "1.2.0", url: "https://www.npmjs.com/package/@tree-sitter-grammars/tree-sitter-hcl" })

/**
 * Types of Node.js
 * The declarations of Node's modules, which the compiler reads for the implementations that import them.
 */
export const NodeTypes = pkg({
  owner: "trame", packageName: "@types/node", version: "22.20.5", url: "https://www.npmjs.com/package/@types/node",
  holdsBelow: "23.0.0",
  because: "the declarations follow the Node.js that runs the engine, version 22: those of a later Node would let the code use what this one does not have",
})

/**
 * Audit of the packages
 * trame audit asks the registry, for each package of the graph, its known vulnerabilities and its latest version, and
 * writes the answers as dated evidence, which the packages read: a package is violated by a vulnerability of the
 * severities counted; it is behind by the releases that break what uses it (majors, or minors under 1.0.0), up to the
 * version it is held below. The value names the file of the evidence and the severities counted; the fields of a package
 * the commands read (PackageField) and the reports (PackageReport) are words of the prelude, which the kind declares.
 */
export const PackageAudit = decision<{
  evidence: string; counted: readonly string[]
}>({
  owner: "trame",
  value: { evidence: "packages", counted: ["moderate", "high", "critical"] },
  rejected: {
    "Every severity": "a low advisory would make the page red for what no one can act on",
    "A report in a file of its own": "the packages could not read it: the evidence reaches them",
  },
})

/**
 * Order of versions
 * Two versions compared part by part, as numbers, from the major (a part one of them lacks counts as zero): a version is
 * below another if it comes before it. The releases between two versions that break what uses the package are its
 * majors, or its minors while its major is that of initial development. trame audit counts with it; the kind of a
 * package checks with it that a package stays below the version it is held below.
 */
export const VersionOrder = fn({
  owner: "trame",
  serves: [SingleSource],
  deps: { semver: SemanticVersioning, counts: Counts },
  body: ({ semver, counts }) => {
    const { zero, next, largest } = counts
    const parts = (v: string) => v.split(semver.separator).map(Number)
    /** Negative if a comes before b, positive if after, zero for the same version. */
    const compare = (a: string, b: string): number => {
      const [x, y] = [parts(a), parts(b)]
      for (let i: number = zero; i < largest([x.length, y.length]); i = next(i)) {
        const d = (x[i] ?? zero) - (y[i] ?? zero)
        if (d !== zero) return d
      }
      return zero
    }
    /** The releases from current to latest that break what uses the package. */
    const breaking = (current: string, latest: string): number => {
      const [cm, cn] = parts(current)
      const [lm, ln] = parts(latest)
      return cm !== semver.initial ? lm - cm : lm !== semver.initial ? lm : ln - cn
    }
    return { compare, below: (a: string, b: string) => compare(a, b) < zero, reaches: (a: string, b: string) => compare(a, b) >= zero, breaking }
  },
})
