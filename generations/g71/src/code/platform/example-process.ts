// The process of the scenarios: its current directory is the example's, or the project of the repository a scenario
// enters; a program it starts (the engine relaunched, a program run, another engine) runs nothing: it prints what the
// scenario said it answers, then exits with that status. What was started is kept.

import type { BodyOf } from "../../../trame/kernel"
import type { ExampleProcess } from "../../platform"

type Listener = (value: unknown) => void

const body: BodyOf<typeof ExampleProcess> = ({ root, paths, line, events, messages }) => {
  let current = root
  const answers: { output: string; status: number }[] = []
  const started: { program: string; args: readonly string[]; cwd: string }[] = []

  /** What a program started answers: the next answer the scenario gave, or a refusal when it gave none. */
  const next = (program: string, args: readonly string[], cwd: string) => {
    started.push({ program, args: [...args], cwd })
    const answer = answers.shift()
    if (!answer) throw new Error(messages.noAnswerInTest(program))
    return answer
  }
  /** Something that can be listened to: a stream, or the child itself. */
  const emitter = () => {
    const listeners = new Map<string, Listener[]>()
    const self = {
      setEncoding: () => self,
      on: (event: string, f: Listener) => {
        listeners.set(event, [...(listeners.get(event) ?? []), f])
        return self
      },
      emit: (event: string, value: unknown) => (listeners.get(event) ?? []).forEach((f) => f(value)),
    }
    return self
  }
  /** A child process in memory: once its caller listens, it prints its answer and exits with its status. */
  const child = (program: string, args: readonly string[], cwd: string) => {
    const { output, status } = next(program, args, cwd)
    const [process, stdout, stderr] = [emitter(), emitter(), emitter()]
    void Promise.resolve().then(() => {
      stdout.emit(events.data, output)
      process.emit(events.exit, status)
      process.emit(events.close, status)
    })
    return Object.assign(process, { stdout, stderr }) as never
  }

  return {
    cwd: () => paths.resolve(current),
    env: {},
    relaunch: (args, cwd) => child(line.program, args, cwd),
    runTs: (file, args) => child(file, args, paths.resolve(current)),
    onSignal: () => undefined,
    run: async (program, args, cwd) => {
      const { output, status } = next(program, args, cwd)
      return { status, output }
    },
    enter: (dir) => {
      current = dir
    },
    answer: (output, status) => void answers.push({ output, status }),
    started: () => [...started],
  }
}

export default body
