# Demandes du support

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/support.ts`. Ce document suit le code : pour le changer, on change le code.*

> **Rien à signaler**

## Amendement

<a id="DelaiUltraSupport"></a>

### Délai ultra demandé par le support

`DelaiUltraSupport` · `src/support.ts:11`

Le support reçoit des plaintes : sans délai gratuit, les conducteurs des bornes ultra paient des frais pour une annulation à la dernière minute.

**En vigueur** depuis le 10 octobre 2026

| Ce qui change | Avant | Après |
|---|---|---|
| `value.ultra` | **à décider** | 12 min |

<details><summary>L'amendement, dans le code</summary>

```ts
{ value: { ultra: min(12) } }
```

</details>

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](annulation.md#DelaiGratuit), entre [Délai des bornes ultra](comite.md#DelaiUltra) et [Délai ultra demandé par le support](#DelaiUltraSupport) : [Délai des bornes ultra](comite.md#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](comite.md#ValidationDelaiUltra)).

- Décidé par : karim
- Motif : plaintes reçues par le support
- En vigueur à partir du : 10 octobre 2026
- Amende : [Délai d'annulation gratuite](annulation.md#DelaiGratuit)
- Chevauché par : [Délai des bornes ultra](comite.md#DelaiUltra)
