// Un générateur pseudo-aléatoire reproductible : la graine (un texte) est hachée en un état de 32 bits,
// puis Mulberry32 en tire des nombres entre 0 et 1. Les constantes viennent des deux normes.

export interface Deps {
  mulberry: { increment: number; decalage1: number; decalage2: number; decalage3: number; impair: number; echelle: number }
  hachage: { multiplicateur: number; depart: number }
}

const corps = (deps: Deps) => {
  const { increment, decalage1, decalage2, decalage3, impair, echelle } = deps.mulberry
  const { multiplicateur, depart } = deps.hachage

  /** Une suite de nombres dans [0, 1), toujours la même pour la même graine. */
  function prng(seedText: string): () => number {
    let a = [...seedText].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), multiplicateur) >>> 0, depart)
    return () => {
      a = (a + increment) >>> 0
      let t = a
      t = Math.imul(t ^ (t >>> decalage1), t | 1)
      t ^= t + Math.imul(t ^ (t >>> decalage2), t | impair)
      return ((t ^ (t >>> decalage3)) >>> 0) / echelle
    }
  }

  return { prng }
}

export type Api = ReturnType<typeof corps>
export default corps
