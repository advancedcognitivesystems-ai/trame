# Comité produit · 15 octobre 2026

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/comite.ts`. Ce document suit le code : pour le changer, on change le code.*

> **Rien à signaler**

## Amendements

<a id="DelaiUltra"></a>

### Délai des bornes ultra

`DelaiUltra` · `src/comite.ts:12`

Les bornes ultra reçoivent enfin leur délai d'annulation gratuite.

**En vigueur** depuis le 15 octobre 2026

| Ce qui change | Avant | Après |
|---|---|---|
| `value.ultra` | **à décider** | 15 min |

<details><summary>L'amendement, dans le code</summary>

```ts
{ value: { ultra: min(15) } }
```

</details>

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](annulation.md#DelaiGratuit), entre [Délai des bornes ultra](#DelaiUltra) et [Délai ultra demandé par le support](support.md#DelaiUltraSupport) : [Délai des bornes ultra](#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](#ValidationDelaiUltra)).

- Décidé par : lea
- Motif : décidé au comité produit du 15 octobre
- En vigueur à partir du : 15 octobre 2026
- Amende : [Délai d'annulation gratuite](annulation.md#DelaiGratuit)
- Chevauche : [Délai ultra demandé par le support](support.md#DelaiUltraSupport)

<a id="ValidationDelaiUltra"></a>

Validé par lea : comité produit du 15 octobre, après la demande du support

<a id="LancementUltra"></a>

### Lancement des bornes ultra

`LancementUltra` · `src/comite.ts:29`

Pendant le lancement, annuler une réservation sur une borne ultra est toujours gratuit.

**Pas encore en vigueur** : à partir du 1er novembre 2026, jusqu'au 31 décembre 2026

| Ce qui change | Avant | Après |
|---|---|---|
| `rule` | règle d'origine | règle redéfinie |

<details><summary>L'amendement, dans le code</summary>

```ts
{
  rule: (avant) => (r, avance) => (r.borne === TypeBorne.ultra ? r.prix : avant(r, avance)),
}
```

</details>

- Décidé par : lea
- Motif : promotion de lancement des bornes ultra
- En vigueur à partir du : 1er novembre 2026
- Jusqu'au : 31 décembre 2026
- Amende (pas en vigueur) : [Remboursement à l'annulation](annulation.md#Rembourser)
