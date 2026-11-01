// The browser's frames: requestAnimationFrame calls back before each repaint, with the time of its high-resolution
// clock; the seconds are counted from the start. A hidden page gets no frame: what moves waits for it.

import { elapsed, type BodyOf } from "../../../../../../trame/kernel"
import type { BrowserFrames } from "../../platform"

const body: BodyOf<typeof BrowserFrames> = () => ({
  start: (each) => {
    const from = performance.now()
    let running = true
    const frame = (now: number) => {
      if (!running) return
      each(elapsed(from, now))
      requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
    return { stop: () => void (running = false) }
  },
})

export default body
