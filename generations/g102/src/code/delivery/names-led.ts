// The plugin that leads esbuild by the names of packages, as the engine leads Node.js (since g95).

import type { Plugin } from "esbuild"

export interface Deps {
  loader: { resolve(specifier: string, from: string): string | undefined }
  leading: { plugin: string; names: string }
}

const body = ({ loader, leading }: Deps): Plugin => ({
  name: leading.plugin,
  setup: (bundling) => {
    bundling.onResolve({ filter: new RegExp(leading.names) }, (args) => {
      const path = loader.resolve(args.path, args.resolveDir)
      return path === undefined ? undefined : { path }
    })
  },
})

export default body
