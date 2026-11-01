// The page's program and its style sheets are kept with the engine: the program where the assembly writes the component
// of the page for its environment (the advance assembles it with the engine), the style sheets next to the engine's code.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { PageResources } from "../../platform"

const body: BodyOf<typeof PageResources> = ({ files, layout, advancement, language, specifiers, texts, sequences }) => {
  const kebab = (name: string) => texts.lowerWords(name, layout.wordJoint)
  const { component, environment } = advancement.page
  const program = [layout.output, kebab(environment), kebab(component) + texts.optional(sequences.head(language.extensions))].join(specifiers.separator)
  return {
    script: fileURLToPath(new URL(files.root + program, import.meta.url)),
    style: fileURLToPath(new URL(files.pageStyle, import.meta.url)),
    narrowStyle: fileURLToPath(new URL(files.narrowStyle, import.meta.url)),
  }
}

export default body
