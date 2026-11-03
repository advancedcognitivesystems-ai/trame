// Chromium driven by Playwright, without a screen: started once, as decided, at the first page; each page opened from
// the file's address in the language asked, the window as wide and tall as decided; its errors kept as they come.

import { chromium as playwright, type Browser } from "playwright"
import { resolve } from "node:path"
import { pathToFileURL } from "node:url"
import type { BodyOf } from "#trame/kernel"
import type { PlaywrightBrowser } from "../../tooling"

const body: BodyOf<typeof PlaywrightBrowser> = ({ chromium, api, counts, time }) => {
  let started: Promise<Browser> | undefined
  return {
    open: async (path, language) => {
      started ??= playwright.launch({ args: chromium.args })
      const browser = await started
      const context = await browser.newContext({ locale: language, viewport: { width: chromium.width, height: chromium.height } })
      const page = await context.newPage()
      const errors: string[] = []
      page.on(api.pageError as "pageerror", (e: Error) => void errors.push(e.message))
      await page.goto(pathToFileURL(resolve(path)).href)
      return {
        errors: () => [...errors],
        count: (selector) => page.locator(selector).count(),
        text: async (selector) => ((await page.locator(selector).count()) > counts.zero ? (await page.locator(selector).first().textContent()) ?? undefined : undefined),
        click: (selector) => page.locator(selector).first().click(),
        choose: async (selector, value) => void (await page.locator(selector).first().selectOption(value)),
        wait: (seconds) => page.waitForTimeout(time.in.millisecond(seconds)),
        close: async () => {
          await context.close()
          if (started) (await started).close().catch(() => undefined)
          started = undefined
        },
      }
    },
  }
}

export default body
