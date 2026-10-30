// In test, the scenarios run one engine in memory: an advance, which runs other engines and copies trees of files, is
// refused with what it would have done.

import type { BodyOf } from "../../../trame/kernel"
import type { NoAdvanceInTest } from "../../platform"

const body: BodyOf<typeof NoAdvanceInTest> = ({ messages }) => {
  const none = (): never => {
    throw new Error(messages.noAdvanceInTest())
  }
  return { run: none, temporary: none, copy: none, link: none, remove: none, files: none, differences: none }
}

export default body
