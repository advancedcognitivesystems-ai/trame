// The window of the page, in a browser: its document, CSS.escape, the media query of reduced motion, the scroll.

import type { BodyOf } from "../../../trame/kernel"
import type { BrowserWindow } from "../../browser"

const body: BodyOf<typeof BrowserWindow> = ({ motion, feature, counts }) => ({
  document,
  escape: (value) => CSS.escape(value),
  reducedMotion: () => matchMedia(feature(motion.reducedMotion, motion.reduce)).matches,
  toTop: () => scrollTo({ top: counts.zero }),
})

export default body
