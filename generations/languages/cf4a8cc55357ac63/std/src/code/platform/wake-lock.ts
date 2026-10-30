// The screen kept awake in a browser, through the Screen Wake Lock API where it exists; refused, the screen sleeps.

import type { BodyOf } from "../../../../trame/kernel"
import type { BrowserWakeLock } from "../../platform"

const body: BodyOf<typeof BrowserWakeLock> = ({ wake }) => {
  let lock: WakeLockSentinel | undefined
  return {
    keep: async () => {
      try {
        lock = await navigator.wakeLock?.request(wake.screen)
      } catch {
        lock = undefined
      }
    },
    release: () => {
      void lock?.release()
      lock = undefined
    },
  }
}

export default body
