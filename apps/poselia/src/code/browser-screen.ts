// The screen in a browser: the view written in the document with the elements of HTML, in the language it is written
// in, the poses drawn in SVG; choosing a language or a sequence runs the action. The player is written once, the stage
// in it; each moment then changes only what moves: the body on the stage, the words, the breaths left to hold, the
// lungs, the progress and the voice button. The composer is written again after each change.

import { elapsed, type BodyOf } from "../../../../trame/kernel"
import type { BrowserScreen } from "../app"
import type { Drawing } from "../architecture"

const body: BodyOf<typeof BrowserScreen> = ({ html, aria, svg, events, screen, parts, player, settings, composer, counts, texts, stage }) => {
  const make = (name: string, text?: string, className?: string) => {
    const e = document.createElement(name)
    if (text !== undefined) e.textContent = text
    if (className !== undefined) e.className = className
    return e
  }
  // A drawing: its frame as the view box, then each shape, painted in order. The name beside it says what it shows: the
  // drawing itself is hidden from screen readers.
  const draw = (d: Drawing) => {
    const shape = (name: string, part: string, attributes: Record<string, number>) => {
      const e = document.createElementNS(svg.namespace, name)
      e.setAttribute(html.class, part)
      for (const [k, v] of Object.entries(attributes)) e.setAttribute(k, String(v))
      return e
    }
    const root = shape(svg.svg, parts.figure, {})
    root.setAttribute(svg.viewBox, [counts.zero, counts.zero, d.width, d.height].join(svg.separator))
    root.setAttribute(aria.hidden, String(true))
    for (const s of d.shapes)
      root.append(shape(svg.line, s.part, { [svg.x1]: s.from.x, [svg.y1]: s.from.y, [svg.x2]: s.to.x, [svg.y2]: s.to.y, [svg.strokeWidth]: s.thickness }))
    return root
  }
  const button = (text: string, action: () => void) => {
    const b = make(html.button, text)
    b.setAttribute(html.type, html.buttonType)
    b.addEventListener(events.click, action)
    return b
  }
  // The app writes in its own element, added once to the page: whatever else the page holds (its style sheet, when a host
  // moves it into the body) stays.
  let app: HTMLElement | undefined
  const mount = (...children: HTMLElement[]) => {
    if (!app) {
      app = make(html.div, undefined, screen.root)
      document.body.append(app)
    }
    app.replaceChildren(...children)
  }
  // The parts of the player a moment changes.
  let shown: {
    pose: HTMLElement; breath: HTMLElement; cue: HTMLElement; held: HTMLElement; where: HTMLElement; done: HTMLElement
    pause: HTMLElement; resume: HTMLElement; voice: HTMLElement; root: HTMLElement; problem: HTMLElement; speaking?: boolean
    marksButton: HTMLElement; markList: HTMLElement; marking?: boolean; listed?: unknown
    labels: { mute: string; unmute: string }
  } | undefined
  // A counter: its label, the button that lowers it, its value, the button that raises it.
  const counter = (label: string, value: string, minus: string, lower: string, onLower: () => void, plus: string, raise: string, onRaise: () => void) => {
    const item = make(html.li)
    const fewer = button(minus, onLower)
    fewer.setAttribute(aria.label, lower)
    const more = button(plus, onRaise)
    more.setAttribute(aria.label, raise)
    item.append(make(html.span, label), fewer, make(html.b, value), more)
    return item
  }
  return {
    show: (view, actions) => {
      document.documentElement.lang = view.language
      document.title = view.title
      const header = make(html.header, undefined, screen.header)
      header.append(make(html.h1, view.title), make(html.p, view.line))
      const languages = make(html.nav, undefined, screen.languages)
      languages.setAttribute(aria.label, view.languageLabel)
      for (const l of view.languages) {
        const button = make(html.button, l.name, l.current ? screen.current : undefined)
        button.setAttribute(html.type, html.buttonType)
        button.setAttribute(aria.pressed, String(l.current))
        button.addEventListener(events.click, () => actions.chooseLanguage(l.tag))
        languages.append(button)
      }
      header.append(languages, button(view.settings, actions.settings))
      const poses = make(html.section, undefined, screen.poses)
      const list = make(html.ul)
      for (const p of view.poses) {
        const item = make(html.li)
        const named = make(html.div, p.name)
        named.append(make(html.span, p.sanskrit, screen.sanskrit))
        item.append(draw(p.drawing), named)
        list.append(item)
      }
      poses.append(make(html.h2, view.posesTitle), list)
      const main = make(html.main)
      main.append(poses)
      for (const q of view.sequences) {
        const sequence = make(html.section, undefined, screen.sequence)
        const title = make(html.h2, q.name)
        title.append(make(html.small, q.rounds))
        const steps = make(html.ol)
        for (const s of q.steps) {
          const item = make(html.li, undefined, screen.step)
          const said = make(html.div)
          said.append(make(html.b, s.pose), make(html.span, s.breath, screen.breath), make(html.p, s.cue))
          if (s.drawing) item.append(draw(s.drawing))
          item.append(said)
          steps.append(item)
        }
        const choices = make(html.div, undefined, composer.actions)
        choices.append(button(q.play, () => actions.play(q.id)), button(q.learn, () => actions.learn(q.id)))
        sequence.append(make(html.h2, view.sequencesTitle), title, choices, steps)
        main.append(sequence)
      }
      const hold = make(html.section, undefined, screen.sequence)
      const holdActions = make(html.div, undefined, composer.actions)
      holdActions.append(button(view.compose, actions.compose))
      hold.append(make(html.h2, view.holdTitle), make(html.p, view.holdLine), holdActions)
      main.append(hold)
      shown = undefined
      stage.unmount()
      mount(header, main)
      scrollTo(counts.zero, counts.zero)
    },
    play: (view, actions) => {
      document.documentElement.lang = view.language
      document.title = view.title
      const root = make(html.main, undefined, player.player)
      const top = make(html.header, undefined, screen.header)
      top.append(button(view.back, actions.back), make(html.h1, view.title))
      // The stage: the scene, and over it the step and the pose, the views, the lungs.
      const scene = make(html.div, undefined, player.stage)
      const badge = make(html.div, undefined, player.badge)
      const where = make(html.small)
      const pose = make(html.b)
      badge.append(where, pose)
      const turns = make(html.div, undefined, player.views)
      for (const v of view.views) turns.append(button(v.label, () => stage.view(v.name)))
      const lungs = make(html.div, undefined, player.lungs)
      lungs.setAttribute(aria.hidden, String(true))
      lungs.append(make(html.span))
      scene.append(badge, turns, lungs)
      const said = make(html.section, undefined, player.said)
      const breath = make(html.span, undefined, screen.breath)
      const held = make(html.small, undefined, player.held)
      const cue = make(html.p)
      const markList = make(html.ol, undefined, player.markList)
      said.append(breath, held, cue, markList)
      const progress = make(html.div, undefined, player.progress)
      progress.setAttribute(aria.hidden, String(true))
      const done = make(html.p, undefined, player.done)
      const controls = make(html.nav, undefined, player.controls)
      const pause = button(view.pause, actions.pause)
      const resume = button(view.resume, actions.resume)
      const voice = button(view.mute, () => actions.voice(!(shown?.speaking ?? true)))
      voice.hidden = view.noVoice !== undefined
      const marksButton = button(view.marks, () => actions.marks(!(shown?.marking ?? true)))
      controls.append(pause, resume, button(view.again, actions.again), voice, marksButton)
      const problem = make(html.p, undefined, player.note)
      root.append(top, scene, progress, said, done, controls, problem)
      if (view.noVoice !== undefined) root.append(make(html.p, view.noVoice, player.note))
      shown = { pose, breath, cue, held, where, done, pause, resume, voice, root, problem, marksButton, markList, labels: { mute: view.mute, unmute: view.unmute } }
      mount(root)
      stage.mount(scene)
      scrollTo(counts.zero, counts.zero)
    },
    settings: (view, actions) => {
      document.documentElement.lang = view.language
      document.title = view.title
      const root = make(html.main, undefined, settings.settings)
      const top = make(html.header, undefined, screen.header)
      top.append(button(view.back, actions.back), make(html.h1, view.title))
      const breath = make(html.section)
      breath.append(make(html.h2, view.breathTitle), make(html.p, view.breathLine))
      const phases = make(html.ul, undefined, settings.phases)
      for (const p of view.phases) {
        const item = make(html.li)
        const shorter = button(view.minus, () => actions.shorter(p.phase))
        shorter.setAttribute(aria.label, p.shorter)
        const longer = button(view.plus, () => actions.longer(p.phase))
        longer.setAttribute(aria.label, p.longer)
        item.append(make(html.span, p.label), shorter, make(html.b, p.value), longer)
        phases.append(item)
      }
      const measure = make(html.div, undefined, settings.measure)
      const tap = make(html.button, view.tap, settings.tap)
      tap.setAttribute(html.type, html.buttonType)
      tap.addEventListener(events.pointerdown, (e) => actions.tap(elapsed(counts.zero, e.timeStamp)))
      measure.append(make(html.h3, view.measureTitle), make(html.p, view.measureLine), tap, make(html.small, view.taps))
      breath.append(phases, measure, button(view.reset, actions.reset))
      const voice = make(html.section)
      voice.append(make(html.h2, view.voiceTitle))
      const parts = make(html.div, undefined, screen.languages)
      for (const v of view.voice) {
        const b = button(v.label, () => actions.voice(v.part, !v.on))
        b.setAttribute(aria.pressed, String(v.on))
        if (v.on) b.className = screen.current
        parts.append(b)
      }
      voice.append(parts)
      if (view.noVoice !== undefined) voice.append(make(html.p, view.noVoice, player.note))
      root.append(top, breath, voice)
      shown = undefined
      stage.unmount()
      mount(root)
    },
    compose: (view, actions) => {
      document.documentElement.lang = view.language
      document.title = view.title
      const root = make(html.main, undefined, composer.composer)
      const top = make(html.header, undefined, screen.header)
      top.append(button(view.back, actions.back), make(html.h1, view.title))
      const counters = make(html.ul, undefined, composer.counters)
      counters.append(
        counter(view.countLabel, view.count, view.minus, view.fewer, actions.fewer, view.plus, view.more, actions.more),
        counter(view.breathsLabel, view.breaths, view.minus, view.shorter, actions.shorter, view.plus, view.longer, actions.longer),
      )
      const draws = make(html.div, undefined, composer.actions)
      draws.append(button(view.draw, actions.draw), button(view.clear, actions.clear))
      const chosen = make(html.ol, undefined, composer.chosen)
      for (const [i, c] of view.chosen.entries()) {
        const item = make(html.li)
        const take = button(c.name, () => actions.remove(i))
        take.setAttribute(aria.label, c.remove)
        take.prepend(draw(c.drawing))
        item.append(take)
        chosen.append(item)
      }
      const problems = make(html.ul, undefined, composer.problems)
      for (const p of view.problems) problems.append(make(html.li, p))
      const practise = button(view.practise, actions.practise)
      practise.toggleAttribute(html.disabled, !view.practisable)
      const go = make(html.div, undefined, composer.actions)
      go.append(practise)
      const library = make(html.ul, undefined, composer.library)
      for (const p of view.library) {
        const item = make(html.li)
        const add = button(p.name, () => actions.add(p.id))
        add.setAttribute(aria.label, p.add)
        add.prepend(draw(p.drawing))
        add.append(make(html.span, p.sanskrit, screen.sanskrit))
        item.append(add)
        library.append(item)
      }
      root.append(top, make(html.p, view.line), counters, draws, make(html.h2, view.chosenTitle), chosen, problems, go, make(html.h2, view.libraryTitle), library)
      const scrolled = app?.firstElementChild?.className === composer.composer ? scrollY : counts.zero
      shown = undefined
      stage.unmount()
      mount(root)
      scrollTo(counts.zero, scrolled)
    },
    moment: (m) => {
      if (!shown) return
      stage.show(m.body, m.marks?.stage)
      if (shown.marking !== m.marking) {
        shown.marking = m.marking
        shown.marksButton.setAttribute(aria.pressed, String(m.marking))
      }
      if (shown.listed !== m.marks) {
        shown.listed = m.marks
        shown.markList.replaceChildren(...(m.marks?.list ?? []).map((item) => {
          const li = make(html.li, item.text)
          li.prepend(make(html.b, item.number))
          return li
        }))
      }
      shown.pose.textContent = m.pose
      shown.breath.textContent = m.breath
      shown.held.textContent = m.hold
      shown.problem.textContent = m.voiceProblem ?? texts.empty
      shown.cue.textContent = m.cue
      if (shown.speaking !== m.speaking) {
        shown.speaking = m.speaking
        shown.voice.textContent = m.speaking ? shown.labels.mute : shown.labels.unmute
        shown.voice.setAttribute(aria.pressed, String(!m.speaking))
      }
      shown.where.textContent = [m.step, m.round].join(player.separator)
      shown.done.textContent = m.done ? m.doneLine : texts.empty
      shown.pause.hidden = !m.playing
      shown.resume.hidden = m.playing || m.done
      shown.root.style.setProperty(player.lungsVariable, String(m.lungs))
      shown.root.style.setProperty(player.progressVariable, String(m.progress))
    },
  }
}

export default body
