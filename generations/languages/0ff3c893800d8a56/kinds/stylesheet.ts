import { defineKind, field, edge, type Node, type FileBody } from "../trame/kernel"

/**
 * A style sheet: the rules that give a page its appearance, written in CSS. Its body is read like any other: a value
 * written in it is a literal, an error as in any body; a url() or an @import reaches outside. Its values are the
 * variables that the page writes before it, from the decisions it uses: the page checks, when it reads its style back,
 * that each variable the sheet uses is written. The wiring builds nothing from it: the page reads it as a resource.
 */
const kind = defineKind({
  name: "stylesheet",
  label: { one: "Style sheet", many: "Style sheets" },
  order: 145,
  fields: {
    owner: field.owner(),
    body: field.body(),
  },
  edges: {
    variables: edge.many(["decision"], { label: "Uses the variables of", inverse: "Variables used by" }),
    styles: edge.many(["function"], { label: "Styles", inverse: "Styled by" }),
  },
})

interface StylesheetInput {
  owner: string
  /** `code.file("./x.css", "css")`: a body in a language Trame reads. */
  body: FileBody
  /** The decisions whose values the sheet uses, as variables the page writes. */
  variables: readonly Node<"decision">[]
  /** What it gives its appearance to: the function that puts the page together. */
  styles: readonly Node<"function">[]
}

/** Declares a style sheet. It gives nothing to those who receive it: it is read as a resource. */
export function stylesheet(input: StylesheetInput): Node<"stylesheet"> {
  return kind(input as never) as never
}

export const stylesheetKind = kind
