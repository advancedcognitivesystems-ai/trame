/** Kept · Notes */

import { entity, stored } from "#data/kinds/entity"
import { NotesKept } from "./product"

/**
 * A note
 * What a person writes down: a title, the day it was written, its tags, whether it is pinned. Its first version called
 * the title a heading and kept a mood.
 */
export const Note = entity({
  owner: "trame",
  key: "title",
  fields: { title: stored.text(), written: stored.date(), tags: stored.list(stored.text()), pinned: stored.optional(stored.flag()) },
  // Since the first version: the heading is called a title, and the mood is no longer kept.
  changes: { renamed: { title: "heading" }, dropped: ["mood"] },
  serves: [NotesKept],
})
