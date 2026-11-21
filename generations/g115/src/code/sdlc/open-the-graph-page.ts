// Opens the graph page Trame exports in Chromium without a screen, a phone's width, as a person would: the navigation
// lists the documents, a document is shown, the picker lists the nodes, the figure of the layers is drawn once its
// document is chosen, and the page raises no error. What is missing is said; it fails when anything is.

import type { BodyOf } from "../../../trame/kernel"
import type { OpenTheGraphPage } from "../../sdlc"

const body: BodyOf<typeof OpenTheGraphPage> = ({ browser, page, language, selectors, opening, say, exit, counts }) => async () => {
  const found: string[] = []
  const shown = await browser.open(page.path, language.tag)
  await shown.wait(opening.settle)
  const none = async (selector: string) => (await shown.count(selector)) === counts.zero
  if (await none(selectors.documents)) found.push(say.noDocuments())
  if (await none(selectors.shown)) found.push(say.noDocument())
  if (await none(selectors.nodes)) found.push(say.noNodes())
  if (await none(selectors.figureDocument)) found.push(say.noFigureDocument())
  else {
    // At a phone's width, the navigation folds away: the picker of documents chooses, as a person would there.
    await shown.choose(selectors.picker, selectors.figureView)
    await shown.wait(opening.settle)
    if (await none(selectors.figure)) found.push(say.noFigure())
  }
  for (const error of shown.errors()) found.push(say.pageError(error))
  await shown.close()
  return counts.isEmpty(found) ? { status: exit.success, body: [say.opens()] } : { status: exit.failure, body: found }
}

export default body
