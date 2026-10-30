# Projet

*Graphe en vigueur le 17 octobre 2026, généré par `trame build`.*

> **1 décision à prendre · 3 points à surveiller · 6 critères d'acceptation validés sur 6 · 9 vérifications de scénario tenues sur 9**

| Module | Objectifs | Exigences | Objectifs de service | Décisions | Hypothèses | Amendements | Composants | Accès | Règles d'architecture | Fonctions | Points d'entrée | Implémentations | Environnements | Scénarios | À traiter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [Réservations · Annulation](annulation.md) | 1 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 |
| [Réservations · API](api.md) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 |
| [Réservations · Architecture](architecture.md) | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 8 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Comité produit · 15 octobre 2026](comite.md) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Réservations · Infrastructure](infra.md) | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 10 | 3 | 0 | 0 |
| [Juridique](juridique.md) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| [Réservations · Scénarios](scenarios.md) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| [Demandes du support](support.md) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## À traiter

| Gravité | Quoi | Où | Responsable | Conséquence |
|---|---|---|---|---|
| bloquant | Décider « Plafond légal des frais d'annulation » | [Plafond légal des frais d'annulation](juridique.md#PlafondFrais) | karim | concerne « Frais d'annulation tardive » |
| avertissement | Plafond non vérifiable : « Plafond légal des frais d'annulation » n'est pas décidé | [Frais d'annulation tardive](annulation.md#FraisTardifs) | karim |  |
| avertissement | Vérifier l'hypothèse avant le 1er décembre 2026 (dans 45 jours) | [Prestataire idempotent](annulation.md#PrestataireIdempotent) | karim | aucune preuve pour l'instant |
| avertissement | Aucune mesure de production branchée | [Remboursement immédiat](annulation.md#RemboursementImmediat) | karim |  |

## Recoupements

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](annulation.md#DelaiGratuit), entre [Délai des bornes ultra](comite.md#DelaiUltra) et [Délai ultra demandé par le support](support.md#DelaiUltraSupport) : [Délai des bornes ultra](comite.md#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](comite.md#ValidationDelaiUltra)).
