// The page's program is kept with the engine, where the assembly writes the component of the page for its environment
// (the advance assembles it with the engine); its style sheets are libs/documents', beside the library's code.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { PageResources } from "../../platform"

const body: BodyOf<typeof PageResources> = ({ files, layout, advancement, language, specifiers, references, texts, sequences }) => {
  const kebab = (name: string) => texts.lowerWords(name, layout.wordJoint)
  const { component, environment } = advancement.page
  // A library's component is named by its reference (documents/browser.PageApp): the program by its name.
  const named = texts.optional(sequences.last(component.split(references.separator)))
  const program = [layout.output, kebab(environment), kebab(named) + texts.optional(sequences.head(language.extensions))].join(specifiers.separator)
  return { script: fileURLToPath(new URL(files.root + program, import.meta.url)) }
}

export default body
