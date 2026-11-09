/** Data · Packages */

import { pkg } from "#trame/kinds/package"
import { DataDescribedOnce } from "./product"

/**
 * Trame
 * The language the project is written in, at the generation that started it: its owner moves it by an amendment.
 */
export const Language = pkg({ owner: "trame", packageName: "trame", version: "103", joins: "language", at: "../../generations/g103", serves: [DataDescribedOnce] })

/**
 * std
 * A library the project builds on, at the version the language's home uses.
 */
export const stdLibrary = pkg({ owner: "trame", packageName: "std", version: "0.17.0", joins: "library", at: "../../std/releases/0.17.0", serves: [DataDescribedOnce] })
