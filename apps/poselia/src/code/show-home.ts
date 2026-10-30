// The home page: shown when the page loads, again in the language the person chooses, and when they come back from a
// practice, the composer or the settings. A practice follows the person's breath, if they set one; learnt, each pose is
// held the breaths a sequence learnt holds.

import type { BodyOf } from "../../../../trame/kernel"
import type { Handler } from "../../../../kinds/entry-point"
import type { ShowHome } from "../app"

const body: BodyOf<typeof ShowHome> = ({ screen, content, view, language, play, settings, breath, compose, holding }): Handler => async () => {
  const [poses, sequences] = await Promise.all([content.poses(), content.sequences()])
  const render = (): void => screen.show(view(poses, sequences), {
    chooseLanguage: (tag) => {
      language.choose(tag)
      render()
    },
    play: (id) => {
      const sequence = sequences.find((q) => q.id === id)
      if (sequence) play(sequence, poses, render, breath.current())
    },
    learn: (id) => {
      const sequence = sequences.find((q) => q.id === id)
      if (sequence) play(sequence, poses, render, breath.current(), holding.learning)
    },
    compose: () => compose(poses, render, breath.current()),
    settings: () => settings(render),
  })
  render()
  return { body: undefined }
}

export default body
