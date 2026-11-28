// Amendments sent to trame dev, from the page in a browser: posted as JSON to its address of amendments. The page can
// amend only when it follows trame dev (the global the page's script sets before its program).

import type { BodyOf } from "../../../trame/kernel"
import type { BrowserAmendments } from "../../browser"

const body: BodyOf<typeof BrowserAmendments> = ({ page, service, http, media }) => ({
  available: () => (window as unknown as Record<string, unknown>)[page.globals.dev] === true,
  send: async (asked) => {
    const answer = await fetch(service.amend, { method: http.post, headers: { [http.contentType]: media.jsonUtf8 }, body: JSON.stringify(asked) })
    return answer.json()
  },
})

export default body
