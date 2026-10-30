# Réservations · Scénarios

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/scenarios.ts`. Ce document suit le code : pour le changer, on change le code.*

> **9 vérifications de scénario tenues sur 9**

## Scénarios

<a id="ScenarioAnnulationRepetee"></a>

### Annuler deux fois ne rembourse qu'une fois

`ScenarioAnnulationRepetee` · `src/scenarios.ts:30` · statut : **tenu**

**Annuler deux fois ne rembourse qu'une fois · dans [Test](infra.md#Test)**

| Critère | Résultat |
|---|---|
| La première annulation rembourse selon la règle | validé |
| La seconde rend le même remboursement | validé |
| Le prestataire n'est appelé qu'une fois | validé |

- Responsable : karim
- Paramètres : `annuler` ← [Annuler une réservation](api.md#AnnulerReservation) · `journal` ← [Journal des paiements](architecture.md#JournalPaiements) · `rembourser` ← [Remboursement à l'annulation](annulation.md#Rembourser) · `initiales` ← [Réservations initiales](infra.md#ReservationsInitiales) · `instant` ← [Instant de test](infra.md#InstantDeTest)
- Corps : en ligne, dans la déclaration
- Effets : asynchrone, écriture, lecture, réseau, temps, tiers
- Vérifie : [Annuler une réservation](api.md#AnnulerReservation)
- Dans : [Test](infra.md#Test)

<a id="ScenarioConformite"></a>

### Chaque réservation est remboursée selon la règle

`ScenarioConformite` · `src/scenarios.ts:51` · statut : **tenu**

**Chaque réservation est remboursée selon la règle · dans [Test](infra.md#Test)**

| Critère | Résultat |
|---|---|
| R1 (normale, 120 min avant) : 20 CHF | validé |
| R2 (rapide, 4 min avant) : 15 CHF | validé |
| R3 (ultra, 60 min avant) : 40 CHF | validé |

- Responsable : lea
- Paramètres : `annuler` ← [Annuler une réservation](api.md#AnnulerReservation) · `rembourser` ← [Remboursement à l'annulation](annulation.md#Rembourser) · `initiales` ← [Réservations initiales](infra.md#ReservationsInitiales) · `instant` ← [Instant de test](infra.md#InstantDeTest)
- Corps : en ligne, dans la déclaration
- Effets : asynchrone, écriture, lecture, réseau, temps, tiers
- Vérifie : [Annuler une réservation](api.md#AnnulerReservation), [Remboursement à l'annulation](annulation.md#Rembourser)
- Dans : [Test](infra.md#Test)

<a id="ScenarioLecture"></a>

### Lire une réservation

`ScenarioLecture` · `src/scenarios.ts:12` · statut : **tenu**

**Lire une réservation · dans [Test](infra.md#Test)**

| Critère | Résultat |
|---|---|
| Une réservation existante est rendue | validé |
| Avec la fin de l'annulation gratuite | validé |
| Une réservation inconnue rend 404 | validé |

- Responsable : karim
- Paramètres : `lire` ← [Lire une réservation](api.md#LireReservation) · `initiales` ← [Réservations initiales](infra.md#ReservationsInitiales) · `delai` ← [Délai d'annulation gratuite](annulation.md#DelaiGratuit)
- Corps : en ligne, dans la déclaration
- Effets : asynchrone, lecture
- Vérifie : [Lire une réservation](api.md#LireReservation)
- Dans : [Test](infra.md#Test)
