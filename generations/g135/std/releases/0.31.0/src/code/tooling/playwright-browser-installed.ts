// Playwright's browser, installed (an add-on of trame doctor, since g120): the Chromium this version of Playwright
// drives is where it looks for it, or the machine's browsers moved and a check it runs would be refused.

import { chromium } from "playwright"
import { existsSync } from "node:fs"
import type { BodyOf } from "#trame/kernel"
import type { PlaywrightBrowserInstalled } from "../../tooling"

const body: BodyOf<typeof PlaywrightBrowserInstalled> = ({ words }) => ({
  ask: async () => {
    const path = chromium.executablePath()
    const holds = existsSync(path)
    return { holds, says: holds ? words.browserInstalled(path) : words.browserMissing(path) }
  },
})

export default body
