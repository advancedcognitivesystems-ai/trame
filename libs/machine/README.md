# Machine

A Trame library of the questions a project asks of its machine (E3): add-ons of std's extension point `MachineNeeds`,
which `trame doctor` asks after the engine's own questions, and which a check that names the command proves
(`check({ command: EngineCommand.doctor, verifies: [...] })`, since g122). They belong to no provider: a provider's
question lives with its adapter (Playwright's browser, with std's `PlaywrightBrowser`).

- `src/machine.ts` — the questions: `SystemSupported` (the system, as Node names it, among those the project runs on),
  `NodeRecentEnough` (the major of Node that runs, at least the one the project needs), `GitInstalled` (Git answers).
  What a project requires is its own decision, read through the port `WhatTheMachineRuns`, which the project realizes
  with a function of its own; `NodePlatforms` cites the names Node gives to systems.
- `src/sdlc.ts` — how a version ships (its packages safe), and the workflow that checks each pull request (job
  `machine`).

A project takes them with one binding that extends `MachineNeeds` (pattern `Plugin`), the realization of
`WhatTheMachineRuns` beside them, in the environments of the machine.
