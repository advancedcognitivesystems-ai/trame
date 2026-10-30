// Opens the page delivered in Chromium without a screen, in each language offered, as a person would: the poses listed,
// the sequences shown, the first one played until its landmarks are listed; the errors the page raised. What is missing
// is said, language by language; it fails when anything is, and at once when the page is not where its delivery writes it.

import type { BodyOf } from "../../../../trame/kernel"
import type { OpenThePage } from "../sdlc"

const body: BodyOf<typeof OpenThePage> = ({ browser, files, page, offered, selectors, opening, say, exit, counts }) => async () => {
  if (!files.exists(page.path)) return { status: exit.failure, body: [say.missing(page.path)] }
  const found: string[] = []
  for (const language of offered) {
    const shown = await browser.open(page.path, language)
    await shown.wait(opening.settle)
    const none = async (selector: string) => (await shown.count(selector)) === counts.zero
    if (await none(selectors.poses)) found.push(say.noPoses(language))
    if (await none(selectors.sequences)) found.push(say.noSequence(language))
    if (!(await none(selectors.play))) {
      await shown.click(selectors.play)
      await shown.wait(opening.play)
    }
    if (await none(selectors.player)) found.push(say.noPlayer(language))
    if (await none(selectors.landmarks)) found.push(say.noLandmarks(language))
    for (const error of shown.errors()) found.push(say.pageError(language, error))
    await shown.close()
  }
  return counts.isEmpty(found) ? { status: exit.success, body: [say.opens(offered)] } : { status: exit.failure, body: found }
}

export default body
