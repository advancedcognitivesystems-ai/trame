# Réservations · Architecture

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/architecture.ts`. Ce document suit le code : pour le changer, on change le code.*

> **Rien à signaler**

## Décision

<a id="PortHttp"></a>

### Port HTTP de l'API

`PortHttp` · `src/architecture.ts:100`

- Valeur : 4180

- Décidé par : karim
- Utilisé par : [Serveur HTTP Node](infra.md#ServeurNode)

## Composant

<a id="ApiReservations"></a>

### API réservations

`ApiReservations` · `src/architecture.ts:106`

Le service qui lit et annule les réservations.

2 points d'entrée : [Annuler une réservation](api.md#AnnulerReservation), [Lire une réservation](api.md#LireReservation)

- Responsable : karim
- Langage : typescript
- Démarrage : `exposition` ← [Exposition HTTP](#ExpositionHttp)
- Effets : asynchrone, réseau
- Expose : [Annuler une réservation](api.md#AnnulerReservation), [Lire une réservation](api.md#LireReservation)

## Accès

<a id="Annulations"></a>

### Enregistrement des annulations

`Annulations` · `src/architecture.ts:71`

Savoir si une réservation est déjà annulée, enregistrer une annulation et son remboursement.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Annulations en SQL](infra.md#AnnulationsSql) |
| [Production](infra.md#Production) | [Annulations en SQL](infra.md#AnnulationsSql) |
| [Test](infra.md#Test) | [Annulations en SQL](infra.md#AnnulationsSql) |

- Responsable : karim
- Effets : asynchrone, écriture, lecture
- Utilisé par : [Annuler une réservation](api.md#AnnulerReservation)
- Réalisé par : [Annulations en SQL](infra.md#AnnulationsSql)

<a id="Base"></a>

### Base de données

`Base` · `src/architecture.ts:53`

Une connexion SQL complète : lecture, écriture, transactions.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Base SQLite locale](infra.md#BaseFichier) |
| [Production](infra.md#Production) | [Base Postgres de production](infra.md#BasePostgres) |
| [Test](infra.md#Test) | [Base SQLite en mémoire](infra.md#BaseMemoire) |

- Responsable : karim
- Effets : asynchrone, écriture, lecture
- Utilisé par : [Annulations en SQL](infra.md#AnnulationsSql)
- Réalisé par : [Base SQLite locale](infra.md#BaseFichier), [Base SQLite en mémoire](infra.md#BaseMemoire), [Base Postgres de production](infra.md#BasePostgres)

<a id="BaseEnLecture"></a>

### Base en lecture

`BaseEnLecture` · `src/architecture.ts:59`

La même base, vue en lecture seule.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Base SQLite locale](infra.md#BaseFichier) |
| [Production](infra.md#Production) | [Base Postgres de production](infra.md#BasePostgres) |
| [Test](infra.md#Test) | [Base SQLite en mémoire](infra.md#BaseMemoire) |

- Responsable : karim
- Effets : asynchrone, lecture
- Réalisé par : [Base SQLite locale](infra.md#BaseFichier), [Base SQLite en mémoire](infra.md#BaseMemoire), [Base Postgres de production](infra.md#BasePostgres)
- Utilisé par : [Réservations en SQL](infra.md#ReservationsSql)

<a id="ExpositionHttp"></a>

### Exposition HTTP

`ExpositionHttp` · `src/architecture.ts:95`

Servir des points d'entrée sur un port.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Serveur HTTP Node](infra.md#ServeurNode) |
| [Production](infra.md#Production) | [Serveur HTTP Node](infra.md#ServeurNode) |
| [Test](infra.md#Test) | [Serveur HTTP Node](infra.md#ServeurNode) |

- Responsable : karim
- Effets : asynchrone, réseau
- Utilisé par : [API réservations](#ApiReservations)
- Réalisé par : [Serveur HTTP Node](infra.md#ServeurNode)

<a id="Horloge"></a>

### Horloge

`Horloge` · `src/architecture.ts:89`

L'heure qu'il est.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Horloge du système](infra.md#HorlogeSysteme) |
| [Production](infra.md#Production) | [Horloge du système](infra.md#HorlogeSysteme) |
| [Test](infra.md#Test) | [Horloge arrêtée](infra.md#HorlogeArretee) |

- Responsable : karim
- Effets : temps
- Utilisé par : [Avance d'une annulation](api.md#AvanceAvant)
- Réalisé par : [Horloge arrêtée](infra.md#HorlogeArretee), [Horloge du système](infra.md#HorlogeSysteme)

<a id="JournalPaiements"></a>

### Journal des paiements

`JournalPaiements` · `src/architecture.ts:83`

Les appels faits au prestataire. N'existe que là où le prestataire est simulé.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Prestataire simulé](infra.md#PaiementSimule) |
| [Production](infra.md#Production) | aucune |
| [Test](infra.md#Test) | [Prestataire simulé](infra.md#PaiementSimule) |

- Responsable : karim
- Réalisé par : [Prestataire simulé](infra.md#PaiementSimule)
- Utilisé par : [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee)

<a id="LectureReservations"></a>

### Lecture des réservations

`LectureReservations` · `src/architecture.ts:65`

Retrouver une réservation par son identifiant.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Réservations en SQL](infra.md#ReservationsSql) |
| [Production](infra.md#Production) | [Réservations en SQL](infra.md#ReservationsSql) |
| [Test](infra.md#Test) | [Réservations en SQL](infra.md#ReservationsSql) |

- Responsable : karim
- Effets : asynchrone, lecture
- Utilisé par : [Annuler une réservation](api.md#AnnulerReservation), [Lire une réservation](api.md#LireReservation)
- Réalisé par : [Réservations en SQL](infra.md#ReservationsSql)

<a id="Paiement"></a>

### Prestataire de paiement

`Paiement` · `src/architecture.ts:77`

Rembourser un conducteur. Un appel par clé d'idempotence.

| Environnement | Implémentation |
|---|---|
| [Local](infra.md#Local) | [Prestataire simulé](infra.md#PaiementSimule) |
| [Production](infra.md#Production) | [Prestataire réel](infra.md#PaiementHttp) |
| [Test](infra.md#Test) | [Prestataire simulé](infra.md#PaiementSimule) |

- Responsable : karim
- Effets : asynchrone, réseau, tiers
- Utilisé par : [Annuler une réservation](api.md#AnnulerReservation)
- Réalisé par : [Prestataire réel](infra.md#PaiementHttp), [Prestataire simulé](infra.md#PaiementSimule)

## Règles d'architecture

<a id="LectureSansEcriture"></a>

### Une lecture n'écrit rien

`LectureSansEcriture` · `src/architecture.ts:118` · statut : **tenu**

Un GET n'écrit ni en base ni chez un tiers, même par une dépendance lointaine.

Respectée partout.

<details><summary>La règle, dans le code</summary>

```ts
(g: Graph) =>
    g.all("entry").nodes()
      .filter((v) => estLecture(v.field("declencheur") as Declencheur))
      .flatMap((v) => v.effects.filter((e) => e === "écriture" || e === "tiers").map((e) => ({ on: v, what: `Une lecture a l'effet « ${e} »` })))
```

</details>

- Responsable : karim

<a id="TiersVerifies"></a>

### Tout appel à un tiers est vérifié

`TiersVerifies` · `src/architecture.ts:141` · statut : **tenu**

Un point d'entrée qui appelle un tiers a au moins un scénario qui le vérifie.

Respectée partout.

<details><summary>La règle, dans le code</summary>

```ts
(g: Graph) =>
    g.all("entry").nodes()
      .filter((v) => v.effects.includes("tiers") && !g.from(v).in("verifies").exists())
      .map((v) => ({ on: v, what: "Appelle un tiers sans scénario qui le vérifie" }))
```

</details>

- Responsable : karim

<a id="UtilitairesSansMonde"></a>

### Les utilitaires ne touchent pas le monde

`UtilitairesSansMonde` · `src/architecture.ts:130` · statut : **tenu**

Une fonction utilitaire ne lit ni n'écrit en base, et n'appelle pas le réseau. L'heure est permise.

Respectée partout.

<details><summary>La règle, dans le code</summary>

```ts
(g: Graph) =>
    g.all("function").nodes().flatMap((v) =>
      v.effects.filter((e) => ["lecture", "écriture", "réseau", "tiers"].includes(e)).map((e) => ({ on: v, what: `Un utilitaire a l'effet « ${e} »` })))
```

</details>

- Responsable : karim
