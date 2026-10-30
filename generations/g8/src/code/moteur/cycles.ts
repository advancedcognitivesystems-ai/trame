// Les cycles d'une relation, par un parcours en profondeur (les couleurs de la norme « Parcours en profondeur »).

export interface Deps {
  parcours: { gris: string; noir: string }
}

const corps = (deps: Deps) => {
  const { gris, noir } = deps.parcours

  /**
   * Les sommets d'où le parcours referme un cycle, dans l'ordre donné. Le parcours continue d'un sommet au suivant :
   * un sommet déjà fini n'est pas repris, et un cycle n'est signalé qu'une fois.
   */
  function departsDeCycles<N>(sommets: N[], suivants: (n: N) => N[]): N[] {
    const couleur = new Map<N, string>()
    const visiter = (n: N): boolean => {
      couleur.set(n, gris)
      for (const s of suivants(n)) {
        if (couleur.get(s) === gris) return true
        if (!couleur.has(s) && visiter(s)) return true
      }
      couleur.set(n, noir)
      return false
    }
    return sommets.filter((n) => !couleur.has(n) && visiter(n))
  }

  return { departsDeCycles }
}

export type Api = ReturnType<typeof corps>
export default corps
