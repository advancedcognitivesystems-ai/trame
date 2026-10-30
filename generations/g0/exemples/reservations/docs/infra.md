# Réservations · Infrastructure

*Graphe en vigueur le 17 octobre 2026, généré par `trame build` depuis `src/infra.ts`. Ce document suit le code : pour le changer, on change le code.*

> **Rien à signaler**

## Décisions

<a id="CheminBaseLocale"></a>

### Fichier de la base locale

`CheminBaseLocale` · `src/infra.ts:60`

- Valeur : .donnees/reservations.db

- Décidé par : karim
- Utilisé par : [Base SQLite locale](#BaseFichier)

<a id="CheminBaseTest"></a>

### Base de test

`CheminBaseTest` · `src/infra.ts:55`

- Valeur : :memory:

- Décidé par : karim
- Utilisé par : [Base SQLite en mémoire](#BaseMemoire)

<a id="InstantDeTest"></a>

### Instant de test

`InstantDeTest` · `src/infra.ts:50`

L'heure que voient les scénarios.

- Valeur : 2026-10-20T10:00:00.000Z

- Décidé par : karim
- Utilisé par : [Horloge arrêtée](#HorlogeArretee), [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite)

<a id="NomBase"></a>

### Nom de la base de production

`NomBase` · `src/infra.ts:65`

- Valeur : reservations

- Décidé par : karim
- Utilisé par : [Base Postgres de production](#BasePostgres)

<a id="ReservationsInitiales"></a>

### Réservations initiales

`ReservationsInitiales` · `src/infra.ts:37`

Présentes au départ d'une base vide, en test et en local.

| Cas | Valeur |
|---|---|
| 0 | { id : R1, borne : normale, prix : 20, debut : 2026-10-20T12:00:00.000Z, statut : active } |
| 1 | { id : R2, borne : rapide, prix : 30, debut : 2026-10-20T10:04:00.000Z, statut : active } |
| 2 | { id : R3, borne : ultra, prix : 40, debut : 2026-10-20T11:00:00.000Z, statut : active } |

- Décidé par : karim
- Utilisé par : [Base SQLite locale](#BaseFichier), [Base SQLite en mémoire](#BaseMemoire), [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite), [Lire une réservation](scenarios.md#ScenarioLecture)

<a id="RetentionSauvegardes"></a>

### Rétention des sauvegardes

`RetentionSauvegardes` · `src/infra.ts:76`

En jours.

- Valeur : 7
- Plage autorisée : de 7 à 35

- Décidé par : karim
- Utilisé par : [Base Postgres de production](#BasePostgres)

<a id="TailleBase"></a>

### Taille de la base de production

`TailleBase` · `src/infra.ts:70`

| Cas | Valeur |
|---|---|
| cpu | 2 |
| memoire_go | 4 |

- Décidé par : karim
- Utilisé par : [Base Postgres de production](#BasePostgres)

<a id="UrlPrestataire"></a>

### Adresse du prestataire de paiement

`UrlPrestataire` · `src/infra.ts:81`

- Valeur : https://paiements.example.com/v1

- Décidé par : karim
- Utilisé par : [Prestataire réel](#PaiementHttp)

## Fonction

<a id="SchemaReservations"></a>

### Schéma des réservations

`SchemaReservations` · `src/infra.ts:89` · statut : **inconnu**

Les tables, créées au démarrage d'une base SQLite.

Doit rester synchrone.

- Responsable : karim
- Corps : en ligne, dans la déclaration
- Utilisé par : [Base SQLite locale](#BaseFichier), [Base SQLite en mémoire](#BaseMemoire)

## Implémentations

<a id="AnnulationsSql"></a>

### Annulations en SQL

`AnnulationsSql` · `src/infra.ts:150`

L'annulation et son remboursement sont écrits dans la même transaction.

- Responsable : karim
- Paramètres : `base` ← [Base de données](architecture.md#Base)
- Corps : `./code/annulations-sql.ts` (typescript)
- Effets : asynchrone, écriture, lecture
- Réalise : [Enregistrement des annulations](architecture.md#Annulations)
- Pour : [Test](#Test), [Local](#Local), [Production](#Production)

<a id="BaseFichier"></a>

### Base SQLite locale

`BaseFichier` · `src/infra.ts:114`

Dans un fichier du poste, créée au premier démarrage.

- Responsable : karim
- Paramètres : `chemin` ← [Fichier de la base locale](#CheminBaseLocale) · `schema` ← [Schéma des réservations](#SchemaReservations) · `reservations` ← [Réservations initiales](#ReservationsInitiales)
- Corps : `./code/base-sqlite.ts` (typescript)
- Réalise : [Base de données](architecture.md#Base), [Base en lecture](architecture.md#BaseEnLecture)
- Pour : [Local](#Local)

<a id="BaseMemoire"></a>

### Base SQLite en mémoire

`BaseMemoire` · `src/infra.ts:102`

Neuve à chaque session : chaque scénario part des réservations initiales.

- Responsable : karim
- Paramètres : `chemin` ← [Base de test](#CheminBaseTest) · `schema` ← [Schéma des réservations](#SchemaReservations) · `reservations` ← [Réservations initiales](#ReservationsInitiales)
- Corps : `./code/base-sqlite.ts` (typescript)
- Réalise : [Base de données](architecture.md#Base), [Base en lecture](architecture.md#BaseEnLecture)
- Pour : [Test](#Test)

<a id="BasePostgres"></a>

### Base Postgres de production

`BasePostgres` · `src/infra.ts:126`

Provisionnée par Terraform.

- Responsable : karim
- Corps : `./code/base-postgres.ts` (typescript)
- Variables : `nom` ← [Nom de la base de production](#NomBase) · `taille` ← [Taille de la base de production](#TailleBase) · `sauvegardes_jours` ← [Rétention des sauvegardes](#RetentionSauvegardes)
- Provisionnement : `./infra/base-postgres` (hcl)
- Réalise : [Base de données](architecture.md#Base), [Base en lecture](architecture.md#BaseEnLecture)
- Pour : [Production](#Production)

<a id="HorlogeArretee"></a>

### Horloge arrêtée

`HorlogeArretee` · `src/infra.ts:172`

Toujours l'instant de test.

- Responsable : karim
- Paramètres : `instant` ← [Instant de test](#InstantDeTest)
- Corps : en ligne, dans la déclaration
- Réalise : [Horloge](architecture.md#Horloge)
- Pour : [Test](#Test)

<a id="HorlogeSysteme"></a>

### Horloge du système

`HorlogeSysteme` · `src/infra.ts:161`

- Responsable : karim
- Corps : en ligne, dans la déclaration
- Réalise : [Horloge](architecture.md#Horloge)
- Pour : [Local](#Local), [Production](#Production)

<a id="PaiementHttp"></a>

### Prestataire réel

`PaiementHttp` · `src/infra.ts:208`

Par HTTPS, avec la clé d'idempotence en en-tête.

- Responsable : karim
- Paramètres : `url` ← [Adresse du prestataire de paiement](#UrlPrestataire)
- Corps : `./code/paiement-http.ts` (typescript)
- Réalise : [Prestataire de paiement](architecture.md#Paiement)
- Pour : [Production](#Production)

<a id="PaiementSimule"></a>

### Prestataire simulé

`PaiementSimule` · `src/infra.ts:184`

Garde chaque appel en mémoire. Une clé déjà vue rend la même référence, sans nouvel appel.

- Responsable : karim
- Corps : en ligne, dans la déclaration
- Réalise : [Prestataire de paiement](architecture.md#Paiement), [Journal des paiements](architecture.md#JournalPaiements)
- Pour : [Test](#Test), [Local](#Local)

<a id="ReservationsSql"></a>

### Réservations en SQL

`ReservationsSql` · `src/infra.ts:138`

- Responsable : karim
- Paramètres : `base` ← [Base en lecture](architecture.md#BaseEnLecture)
- Corps : `./code/reservations-sql.ts` (typescript)
- Effets : asynchrone, lecture
- Réalise : [Lecture des réservations](architecture.md#LectureReservations)
- Pour : [Test](#Test), [Local](#Local), [Production](#Production)

<a id="ServeurNode"></a>

### Serveur HTTP Node

`ServeurNode` · `src/infra.ts:219`

- Responsable : karim
- Paramètres : `port` ← [Port HTTP de l'API](architecture.md#PortHttp)
- Corps : `./code/serveur-node.ts` (typescript)
- Réalise : [Exposition HTTP](architecture.md#ExpositionHttp)
- Pour : [Test](#Test), [Local](#Local), [Production](#Production)

## Environnements

<a id="Local"></a>

### Local

`Local` · `src/infra.ts:24`

Le poste d'un développeur : base dans un fichier, prestataire simulé.

- Responsable : karim
- Utilise : [Annulations en SQL](#AnnulationsSql), [Base SQLite locale](#BaseFichier), [Horloge du système](#HorlogeSysteme), [Prestataire simulé](#PaiementSimule), [Réservations en SQL](#ReservationsSql), [Serveur HTTP Node](#ServeurNode)

<a id="Production"></a>

### Production

`Production` · `src/infra.ts:29`

- Responsable : karim
- Utilise : [Annulations en SQL](#AnnulationsSql), [Base Postgres de production](#BasePostgres), [Horloge du système](#HorlogeSysteme), [Prestataire réel](#PaiementHttp), [Réservations en SQL](#ReservationsSql), [Serveur HTTP Node](#ServeurNode)

<a id="Test"></a>

### Test

`Test` · `src/infra.ts:18`

Les scénarios : base en mémoire, heure fixe, prestataire simulé.

- Responsable : karim
- Utilise : [Annulations en SQL](#AnnulationsSql), [Base SQLite en mémoire](#BaseMemoire), [Horloge arrêtée](#HorlogeArretee), [Prestataire simulé](#PaiementSimule), [Réservations en SQL](#ReservationsSql), [Serveur HTTP Node](#ServeurNode)
- Scénarios : [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee), [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite), [Lire une réservation](scenarios.md#ScenarioLecture)
