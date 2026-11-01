// The browser's voice: its speech synthesis, in the language asked. A browser without one says nothing.

import type { BodyOf } from "../../../../../../trame/kernel"
import type { BrowserSpeech } from "../../platform"

const body: BodyOf<typeof BrowserSpeech> = () => ({
  say: (text, language) => {
    if (!globalThis.speechSynthesis) return
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language
    speechSynthesis.speak(utterance)
  },
  stop: () => globalThis.speechSynthesis?.cancel(),
})

export default body
