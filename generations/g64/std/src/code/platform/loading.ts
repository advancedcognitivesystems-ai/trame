// The loading of the page, in a browser: once the document is parsed, the entry points triggered by the loading run.

import { TriggerType } from "../../../../trame/kernel"
import type { BodyOf } from "../../../../trame/kernel"
import type { Started } from "../../../../kinds/component"
import type { BrowserLoading } from "../../platform"

const body: BodyOf<typeof BrowserLoading> = ({ events }) => ({
  serve: (routes) => new Promise<Started>((resolve) => {
    const run = () => {
      for (const route of routes.filter((r) => r.trigger.type === TriggerType.load)) void route.handler({ params: {} })
      resolve({})
    }
    if (document.readyState === events.loading) document.addEventListener(events.loaded, run, { once: true })
    else run()
  }),
})

export default body
