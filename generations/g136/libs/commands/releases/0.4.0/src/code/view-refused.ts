// Why a view gives no document, in the words of the commands: the reason the engine's API gives, with what was asked
// and the names that would have been known.

import { ViewRefusal } from "#trame/kernel"
import type { ProvidedBy, ViewAnswer } from "#trame/kernel"
import type { Texts } from "#std/algebra"
import type { CommandWords } from "../commands"

export interface Deps {
  say: ProvidedBy<typeof CommandWords>
  texts: ProvidedBy<typeof Texts>
}

const body = ({ say, texts: { empty } }: Deps) => (a: Extract<ViewAnswer, { refused: ViewRefusal }>): string => {
  switch (a.refused) {
    case ViewRefusal.unknownView: return say.unknownView(a.asked, a.known)
    case ViewRefusal.unknownNode: return say.unknownNode(a.asked)
    case ViewRefusal.notApplicable: return say.viewDoesNotApply(a.view ?? empty, a.asked ?? empty)
    case ViewRefusal.unknownModule: return say.unknownModule(a.asked, a.known)
  }
}

export default body
