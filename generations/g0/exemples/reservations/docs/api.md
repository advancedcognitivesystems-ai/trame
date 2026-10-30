# Réservations · API

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/api.ts`. Ce document suit le code : pour le changer, on change le code.*

> **Rien à signaler**

## Fonctions

<a id="AvanceAvant"></a>

### Avance d'une annulation

`AvanceAvant` · `src/api.ts:25` · statut : **inconnu**

Combien de temps avant le début du créneau on annule, en secondes.

- Responsable : karim
- Paramètres : `horloge` ← [Horloge](architecture.md#Horloge)
- Corps : en ligne, dans la déclaration
- Effets : temps
- Utilisé par : [Annuler une réservation](#AnnulerReservation)

<a id="FinGratuite"></a>

### Fin de l'annulation gratuite

`FinGratuite` · `src/api.ts:13` · statut : **inconnu**

Jusqu'à quel instant une réservation s'annule sans frais.

Doit rester synchrone.

- Responsable : lea
- Paramètres : `delai` ← [Délai d'annulation gratuite](annulation.md#DelaiGratuit)
- Corps : en ligne, dans la déclaration
- Sert : [Remboursement à l'annulation](annulation.md#Rembourser)
- Utilisé par : [Lire une réservation](#LireReservation)

## Points d'entrée

<a id="AnnulerReservation"></a>

### Annuler une réservation

`AnnulerReservation` · `src/api.ts:48` · statut : **tenu**

Rembourse selon la règle, une seule fois, même si la demande arrive deux fois.

Déclenché par `POST /reservations/:id/annulation`

- Responsable : karim
- Paramètres : `reservations` ← [Lecture des réservations](architecture.md#LectureReservations) · `annulations` ← [Enregistrement des annulations](architecture.md#Annulations) · `paiement` ← [Prestataire de paiement](architecture.md#Paiement) · `avance` ← [Avance d'une annulation](#AvanceAvant) · `rembourser` ← [Remboursement à l'annulation](annulation.md#Rembourser)
- Corps : `./code/annuler-reservation.ts` (typescript)
- Effets : asynchrone, écriture, lecture, réseau, temps, tiers
- Sert : [Remboursement à l'annulation](annulation.md#Rembourser)
- Fait partie de : [API réservations](architecture.md#ApiReservations)
- Vérifié par : [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite)
- Utilisé par : [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite)

<a id="LireReservation"></a>

### Lire une réservation

`LireReservation` · `src/api.ts:35` · statut : **tenu**

La réservation, et jusqu'à quand elle s'annule gratuitement.

Déclenché par `GET /reservations/:id`

- Responsable : karim
- Paramètres : `reservations` ← [Lecture des réservations](architecture.md#LectureReservations) · `finGratuite` ← [Fin de l'annulation gratuite](#FinGratuite)
- Corps : `./code/lire-reservation.ts` (typescript)
- Effets : asynchrone, lecture
- Sert : [Annuler sans stress](annulation.md#AnnulerSansStress)
- Fait partie de : [API réservations](architecture.md#ApiReservations)
- Vérifié par : [Lire une réservation](scenarios.md#ScenarioLecture)
- Utilisé par : [Lire une réservation](scenarios.md#ScenarioLecture)
