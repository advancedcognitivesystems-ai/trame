// The page's program, bundled once by esbuild: the program the assembly writes for the environment Browser, in one
// module for the browsers the page targets.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Bundler, Resources } from "../../architecture"
import type { PageBundle } from "../../page"

export interface Deps {
  pageBundle: ProvidedBy<typeof PageBundle>
  resources: Resources
  bundler: Bundler
}

const body = (deps: Deps) => {
  const { pageBundle, resources } = deps
  let script: string | undefined

  /** The page's program, bundled once. */
  async function bundled(): Promise<string> {
    if (script) return script
    const out = await deps.bundler.build({
      entryPoints: [resources.script], bundle: true, write: false, format: pageBundle.format, target: pageBundle.target,
      minify: true, legalComments: pageBundle.legalComments, charset: pageBundle.charset,
    })
    const [bundle] = out.outputFiles
    script = bundle.text
    return script
  }

  return { script: bundled }
}

export type Api = ReturnType<typeof body>
export default body
