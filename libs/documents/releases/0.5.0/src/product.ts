/** Documents · Product */

import { goal } from "#trame/kinds/goal"

// What the library is for (E3, decided 26 November): the documents the views of a graph give are rendered for people,
// in the syntaxes they read them in (Markdown in files, text at a terminal, HTML in a page), by renderers written once,
// which the commands of every project, and a project's own, take from here. Their language is the engine's: the views
// speak it, and the documents say it. The page that shows them came with 0.5.0.

/**
 * Documents rendered once, for every project
 * What the views of a graph say is written for people by one set of renderers, in the language the views speak, with
 * its dates, its lists, its punctuation and the units of its quantities: the same in every place a document is read.
 */
export const RenderedOnce = goal({ owner: "trame" })

/**
 * A graph shown in a page, for every project
 * The documents of a graph at each date it changes at, in a page a browser opens as it is (an export) or that follows
 * the project as it changes (trame dev): its HTML, its look and its program written once, which each project assembles
 * with its own choices.
 */
export const ShownInAPage = goal({ owner: "trame" })
