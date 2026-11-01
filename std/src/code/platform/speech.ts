// The browser's voice: its speech synthesis, with a voice of the device in the language asked. Tags are compared
// without case, an underscore read as a hyphen: the same tag first, then the same language, a voice on the device
// before one on the network. The voice is named on the utterance, with its own tag (Chrome on Android speaks only
// then). The voices come late in some browsers: they are read again when the browser says they changed, and when none
// was read yet. A browser without speech synthesis says it cannot speak, and says nothing. An utterance that fails
// (cut short is not failing) leaves its error as the voice's failure, until an utterance starts.

import type { BodyOf } from "#trame/kernel"
import type { BrowserSpeech } from "../../platform"

const body: BodyOf<typeof BrowserSpeech> = ({ tags, speech }) => {
  const synthesis = globalThis.speechSynthesis
  let voices: SpeechSynthesisVoice[] = synthesis?.getVoices() ?? []
  let failed: string | undefined
  // Utterances under way, kept so that a browser does not collect them before their events come.
  const speaking = new Set<SpeechSynthesisUtterance>()
  if (synthesis)
    synthesis.onvoiceschanged = () => {
      voices = synthesis.getVoices()
    }
  const tag = (t: string) => t.toLowerCase().split(tags.localeSeparator).join(tags.separator)
  const language = (t: string) => {
    const [first] = tag(t).split(tags.separator)
    return first
  }
  const voiceFor = (asked: string) => {
    const same = voices.filter((v) => language(v.lang) === language(asked))
    const exact = same.filter((v) => tag(v.lang) === tag(asked))
    const [first] = [...exact.filter((v) => v.localService), ...exact, ...same.filter((v) => v.localService), ...same]
    return first
  }
  return {
    available: () => synthesis !== undefined && globalThis.SpeechSynthesisUtterance !== undefined,
    say: (text, asked) => {
      if (!synthesis || !globalThis.SpeechSynthesisUtterance) return
      if (!voices.length) voices = synthesis.getVoices()
      const utterance = new SpeechSynthesisUtterance(text)
      const voice = voiceFor(asked)
      utterance.lang = voice?.lang ?? asked
      if (voice) utterance.voice = voice
      utterance.onstart = () => {
        failed = undefined
      }
      utterance.onend = () => void speaking.delete(utterance)
      utterance.onerror = (event) => {
        speaking.delete(utterance)
        if (event.error !== speech.canceled && event.error !== speech.interrupted) failed = event.error
      }
      speaking.add(utterance)
      synthesis.speak(utterance)
    },
    stop: () => synthesis?.cancel(),
    failure: () => failed,
  }
}

export default body
