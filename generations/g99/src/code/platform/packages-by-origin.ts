// Where each package comes from is said by its reference: by its path, from the registry. This realization holds the
// strategies and applies the one each reference names; a reference that names none is reached by its path when it
// gives one, from the registry otherwise. A version is published to the registry, where versions are kept.

import type { BodyOf } from "../../../trame/kernel"
import type { PackageSource } from "#std/tooling"
import type { PackagesByOrigin } from "../../platform"

const body: BodyOf<typeof PackagesByOrigin> = ({ path, registry }) => {
  const strategies: Readonly<Record<string, PackageSource>> = { path, registry }
  return {
    place: (wanted) => (wanted.from !== undefined ? strategies[wanted.from] : wanted.at !== undefined ? path : registry).place(wanted),
    publish: (published) => registry.publish(published),
  }
}

export default body
