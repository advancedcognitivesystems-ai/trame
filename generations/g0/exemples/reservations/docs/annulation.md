# Réservations · Annulation

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/annulation.ts`. Ce document suit le code : pour le changer, on change le code.*

> **3 points à surveiller · 6 critères d'acceptation validés sur 6**

## À traiter

| Gravité | Quoi | Où | Responsable | Conséquence |
|---|---|---|---|---|
| avertissement | Plafond non vérifiable : « Plafond légal des frais d'annulation » n'est pas décidé | [Frais d'annulation tardive](#FraisTardifs) | karim |  |
| avertissement | Vérifier l'hypothèse avant le 1er décembre 2026 (dans 45 jours) | [Prestataire idempotent](#PrestataireIdempotent) | karim | aucune preuve pour l'instant |
| avertissement | Aucune mesure de production branchée | [Remboursement immédiat](#RemboursementImmediat) | karim |  |

## Objectif

<a id="AnnulerSansStress"></a>

### Annuler sans stress

`AnnulerSansStress` · `src/annulation.ts:16` · publié

Un conducteur peut changer d'avis sans craindre une pénalité injuste.

- Précisé par : [Remboursement à l'annulation](#Rembourser)
- Servi par : [Lire une réservation](api.md#LireReservation)

## Exigence

<a id="Rembourser"></a>

### Remboursement à l'annulation

`Rembourser` · `src/annulation.ts:54` · statut : **tenu** · publié

Montant rendu au conducteur quand il annule sa réservation.

<details><summary>La règle, dans le code</summary>

```ts
(r: Reservation, avance: Duration): CHF =>
    avance >= DelaiGratuit.value[r.borne] ? r.prix : r.prix * (1 - FraisTardifs.value)
```

</details>

- Précise : [Annuler sans stress](#AnnulerSansStress)
- Suppose : [Prestataire idempotent](#PrestataireIdempotent)
- Dépend de : [Délai d'annulation gratuite](#DelaiGratuit), [Frais d'annulation tardive](#FraisTardifs)
- Contraint par : [Remboursement immédiat](#RemboursementImmediat)
- Servi par : [Annuler une réservation](api.md#AnnulerReservation), [Fin de l'annulation gratuite](api.md#FinGratuite)
- Utilisé par : [Annuler une réservation](api.md#AnnulerReservation), [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite)
- Amendé par (pas en vigueur) : [Lancement des bornes ultra](comite.md#LancementUltra)
- Vérifié par : [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite)

<a id="CriteresRemboursement"></a>

**Critères de remboursement · responsable : lea**

| Critère | Résultat |
|---|---|
| Annuler deux heures avant ne coûte rien | validé |
| Pile sur le délai, le conducteur est remboursé | validé |
| Quatre minutes avant, il paie les frais tardifs | validé |
| Sur une borne rapide, six minutes avant suffisent | validé |
| Sur une borne ultra, quinze minutes avant suffisent | validé |
| Jamais plus que le prix payé | validé |

## Objectif de service

<a id="RemboursementImmediat"></a>

### Remboursement immédiat

`RemboursementImmediat` · `src/annulation.ts:65` · statut : **inconnu** · publié

Le remboursement part dans les deux secondes qui suivent l'annulation.

p99 de `refunds.initiated.latency` sous 2 s, sur 1 h

- Responsable : karim
- Contraint : [Remboursement à l'annulation](#Rembourser)

## Décisions

<a id="DelaiGratuit"></a>

### Délai d'annulation gratuite

`DelaiGratuit` · `src/annulation.ts:25` · publié

Jusqu'à ce délai avant le début du créneau, annuler ne coûte rien.

| TypeBorne | Valeur |
|---|---|
| rapide | 5 min |
| normale | 10 min |
| ultra | 15 min · amendé par [Délai des bornes ultra](comite.md#DelaiUltra) |

- Plage autorisée : de 5 min à 20 min

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](#DelaiGratuit), entre [Délai des bornes ultra](comite.md#DelaiUltra) et [Délai ultra demandé par le support](support.md#DelaiUltraSupport) : [Délai des bornes ultra](comite.md#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](comite.md#ValidationDelaiUltra)).

- Décidé par : lea
- Revue prévue : mars 2027
- Écarté : 30 min, bloque les bornes aux heures de pointe
- Utilisé par : [Fin de l'annulation gratuite](api.md#FinGratuite), [Lire une réservation](scenarios.md#ScenarioLecture)
- Amendé par : [Délai des bornes ultra](comite.md#DelaiUltra), [Délai ultra demandé par le support](support.md#DelaiUltraSupport)
- Utilisé par : [Critères de remboursement](#CriteresRemboursement), [Remboursement à l'annulation](#Rembourser)

<a id="FraisTardifs"></a>

### Frais d'annulation tardive

`FraisTardifs` · `src/annulation.ts:37` · publié

Part du prix retenue quand le conducteur annule après le délai gratuit.

- Valeur : 50 %

- Décidé par : lea
- Écarté : 100 %, perçu comme punitif
- Plafonné par : [Plafond légal des frais d'annulation](juridique.md#PlafondFrais)
- Utilisé par : [Remboursement à l'annulation](#Rembourser)

## Hypothèse

<a id="PrestataireIdempotent"></a>

### Prestataire idempotent

`PrestataireIdempotent` · `src/annulation.ts:48` · statut : **inconnu** · publié

Le prestataire de paiement ne débite qu'une fois par clé d'idempotence.

- Preuve : aucune pour l'instant

- Responsable : karim
- À vérifier avant : 1er décembre 2026
- Supposé par : [Remboursement à l'annulation](#Rembourser)
