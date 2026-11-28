/** Trame · The page */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { fn } from "../kinds/function"
import { binding } from "../kinds/binding"
import { adr } from "../kinds/adr"
import { ExecutableSpecification, ReplaceableTechnology } from "./product"
import { Bundler, Resources, Local, Test } from "./architecture"
import { Adapter } from "#std/patterns"
import { SheetsBesideTheLibrary, GzipInBase64 } from "#documents/page"

// The page is libs/documents' since documents 0.5.0: its HTML and its CSS, its look, its words, its program (a component
// the library offers), and Page, which puts it together. What stays Trame's is the engine's part: the page's program,
// assembled for the environment Browser with the browser's realizations the library offers (module browser), bundled
// by esbuild; the realizations Page reads with on a machine: its style sheets beside the library and gzip for the graph
// it carries (what it writes is read back by the engine that writes it, std's ReadByTheEngine).

/**
 * Bundle of the page
 * How esbuild bundles the page's program: a module, since the program waits at its top level for what it builds, for
 * browsers that run ES2022, without licence comments, in UTF-8.
 */
export const PageBundle = decision<{ format: "esm"; target: string; legalComments: "none"; charset: "utf8" }>({
  owner: "trame",
  value: { format: "esm", target: "es2022", legalComments: "none", charset: "utf8" },
})

/**
 * The page's program, bundled
 * The page's program as the assembly writes it for the environment Browser, bundled by esbuild once: what a command
 * that writes a page gives Page, and what the engine's API gives a command of a library (since g136).
 */
export const PageScript = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { pageBundle: PageBundle, resources: Resources, bundler: Bundler },
  body: code.file<typeof import("./code/page/script").default>("./code/page/script.ts"),
})

/**
 * How the engine makes a page
 * On a machine and in the scenarios, Page reads its style sheets beside the library and the graph a page carries is
 * compressed with gzip.
 */
export const PageMadeOnTheMachine = binding({
  owner: "trame",
  chooses: [SheetsBesideTheLibrary, GzipInBase64],
  environments: [Local, Test],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The page's style sheets are files of libs/documents, which its versions carry; the graph a page carries is packed as the browser unpacks it.",
})

/**
 * The page is the library's
 * Trame's page moved into libs/documents (documents 0.5.0), with its program; the engine bundles the program and gives
 * Page what it reads with.
 */
export const ThePageIsTheLibrarys = adr({
  owner: "trame",
  context: "The page was Trame's: a project could not make its own, nor change its look but by amending Trame's graph. Its HTML, its CSS and its program read nothing of the engine's but the intermediate format and what the page decides.",
  consequences: "Page and the page's program are libs/documents'; the engine bundles the program it assembles for Browser and gives it to Page, with the program's name, the graph packed, its title. Each project will assemble the page with its own choices (trame init writes them, later); until then the engine's program serves every project.",
  rejected: {
    "The page left in Trame": "the commands that write it (export, dev) could not leave the engine",
    "The engine writing the whole page through its API": "the page's look would stay out of reach of the projects",
  },
  serves: [ExecutableSpecification],
  appliedBy: [PageScript, PageMadeOnTheMachine],
})
