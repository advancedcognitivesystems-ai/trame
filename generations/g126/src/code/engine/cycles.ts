// The cycles of a relation, found by a depth-first search (the colours of the standard "Depth-first search").

export interface Deps {
  search: { grey: string; black: string }
}

const body = (deps: Deps) => {
  const { grey, black } = deps.search

  /**
   * The vertices from which the search closes a cycle, in the given order. The search goes on from one vertex to the
   * next: a vertex already finished is not searched again, and a cycle is reported only once. Each vertex is finished
   * (black) even when the search closed a cycle through it: left grey, it would close a cycle again for a vertex that
   * only reaches it.
   */
  function cycleStarts<N>(vertices: N[], next: (n: N) => N[]): N[] {
    const colour = new Map<N, string>()
    const visit = (n: N): boolean => {
      colour.set(n, grey)
      let closes = false
      for (const s of next(n)) {
        if (colour.get(s) === grey) closes = true
        else if (!colour.has(s) && visit(s)) closes = true
      }
      colour.set(n, black)
      return closes
    }
    return vertices.filter((n) => !colour.has(n) && visit(n))
  }

  return { cycleStarts }
}

export type Api = ReturnType<typeof body>
export default body
