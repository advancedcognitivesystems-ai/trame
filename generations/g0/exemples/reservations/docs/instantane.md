# Instantané

*L'état exact attendu le 17 octobre 2026, sans historique : les valeurs en vigueur, sans les amendements qui les ont produites.*

## Réservations · Annulation

### Annuler sans stress

Objectif · `AnnulerSansStress`

### Remboursement à l'annulation

Exigence · `Rembourser` · **tenu**

- Précise : Annuler sans stress
- Suppose : Prestataire idempotent
- Dépend de : Délai d'annulation gratuite, Frais d'annulation tardive

### Remboursement immédiat

Objectif de service · `RemboursementImmediat` · **inconnu**

- Responsable : karim
- Signal mesuré : refunds.initiated.latency
- Centile : 99
- Seuil : 2 s
- Fenêtre : 1 h
- Contraint : Remboursement à l'annulation

### Délai d'annulation gratuite

Décision · `DelaiGratuit`

- Décidé par : lea
- Valeur : { rapide : 5 min, normale : 10 min, ultra : 15 min }
- Revue prévue : mars 2027
- Plage autorisée : de 5 min à 20 min
- Écarté : 30 min, bloque les bornes aux heures de pointe

### Frais d'annulation tardive

Décision · `FraisTardifs`

- Décidé par : lea
- Valeur : 50 %
- Écarté : 100 %, perçu comme punitif
- Plafonné par : Plafond légal des frais d'annulation

### Prestataire idempotent

Hypothèse · `PrestataireIdempotent` · **inconnu**

- Responsable : karim
- À vérifier avant : 1er décembre 2026

### Critères de remboursement

Jeu de critères d'acceptation · `CriteresRemboursement` · **tenu**

- Responsable : lea
- Accepte : Remboursement à l'annulation
- Dépend de : Délai d'annulation gratuite

## Réservations · API

### Avance d'une annulation

Fonction · `AvanceAvant` · **inconnu**

- Responsable : karim
- Paramètres : { horloge : architecture.Horloge }
- Dépend de : Horloge

### Fin de l'annulation gratuite

Fonction · `FinGratuite` · **inconnu**

- Responsable : lea
- Paramètres : { delai : annulation.DelaiGratuit }
- Doit rester synchrone : true
- Sert : Remboursement à l'annulation
- Dépend de : Délai d'annulation gratuite

### Annuler une réservation

Point d'entrée · `AnnulerReservation` · **tenu**

- Responsable : karim
- Déclencheur : { type : http, methode : POST, chemin : /reservations/:id/annulation }
- Paramètres : { reservations : architecture.LectureReservations, annulations : architecture.Annulations, paiement : architecture.Paiement, avance : api.AvanceAvant, rembourser : (règle) }
- Sert : Remboursement à l'annulation
- Fait partie de : API réservations
- Dépend de : Lecture des réservations, Enregistrement des annulations, Prestataire de paiement, Avance d'une annulation, Remboursement à l'annulation

### Lire une réservation

Point d'entrée · `LireReservation` · **tenu**

- Responsable : karim
- Déclencheur : { type : http, methode : GET, chemin : /reservations/:id }
- Paramètres : { reservations : architecture.LectureReservations, finGratuite : api.FinGratuite }
- Sert : Annuler sans stress
- Fait partie de : API réservations
- Dépend de : Lecture des réservations, Fin de l'annulation gratuite

## Réservations · Architecture

### Port HTTP de l'API

Décision · `PortHttp`

- Décidé par : karim
- Valeur : 4180

### API réservations

Composant · `ApiReservations`

- Responsable : karim
- Langage : typescript
- Démarrage : { exposition : architecture.ExpositionHttp }
- Dépend de : Exposition HTTP

### Enregistrement des annulations

Accès · `Annulations`

- Responsable : karim
- Effets déclarés : lecture, écriture, asynchrone

### Base de données

Accès · `Base`

- Responsable : karim
- Effets déclarés : lecture, écriture, asynchrone

### Base en lecture

Accès · `BaseEnLecture`

- Responsable : karim
- Effets déclarés : lecture, asynchrone

### Exposition HTTP

Accès · `ExpositionHttp`

- Responsable : karim
- Effets déclarés : réseau, asynchrone

### Horloge

Accès · `Horloge`

- Responsable : karim
- Effets déclarés : temps

### Journal des paiements

Accès · `JournalPaiements`

- Responsable : karim
- Effets déclarés : 

### Lecture des réservations

Accès · `LectureReservations`

- Responsable : karim
- Effets déclarés : lecture, asynchrone

### Prestataire de paiement

Accès · `Paiement`

- Responsable : karim
- Effets déclarés : réseau, tiers, asynchrone

### Une lecture n'écrit rien

Règle d'architecture · `LectureSansEcriture` · **tenu**

- Responsable : karim

### Tout appel à un tiers est vérifié

Règle d'architecture · `TiersVerifies` · **tenu**

- Responsable : karim

### Les utilitaires ne touchent pas le monde

Règle d'architecture · `UtilitairesSansMonde` · **tenu**

- Responsable : karim

## Réservations · Infrastructure

### Fichier de la base locale

Décision · `CheminBaseLocale`

- Décidé par : karim
- Valeur : .donnees/reservations.db

### Base de test

Décision · `CheminBaseTest`

- Décidé par : karim
- Valeur : :memory:

### Instant de test

Décision · `InstantDeTest`

- Décidé par : karim
- Valeur : 2026-10-20T10:00:00.000Z

### Nom de la base de production

Décision · `NomBase`

- Décidé par : karim
- Valeur : reservations

### Réservations initiales

Décision · `ReservationsInitiales`

- Décidé par : karim
- Valeur : { id : R1, borne : normale, prix : 20, debut : 2026-10-20T12:00:00.000Z, statut : active }, { id : R2, borne : rapide, prix : 30, debut : 2026-10-20T10:04:00.000Z, statut : active }, { id : R3, borne : ultra, prix : 40, debut : 2026-10-20T11:00:00.000Z, statut : active }

### Rétention des sauvegardes

Décision · `RetentionSauvegardes`

- Décidé par : karim
- Valeur : 7
- Plage autorisée : de 7 à 35

### Taille de la base de production

Décision · `TailleBase`

- Décidé par : karim
- Valeur : { cpu : 2, memoire_go : 4 }

### Adresse du prestataire de paiement

Décision · `UrlPrestataire`

- Décidé par : karim
- Valeur : https://paiements.example.com/v1

### Schéma des réservations

Fonction · `SchemaReservations` · **inconnu**

- Responsable : karim
- Doit rester synchrone : true

### Annulations en SQL

Implémentation · `AnnulationsSql`

- Responsable : karim
- Paramètres : { base : architecture.Base }
- Réalise : Enregistrement des annulations
- Pour : Test, Local, Production
- Dépend de : Base de données

### Base SQLite locale

Implémentation · `BaseFichier`

- Responsable : karim
- Paramètres : { chemin : infra.CheminBaseLocale, schema : infra.SchemaReservations, reservations : infra.ReservationsInitiales }
- Réalise : Base de données, Base en lecture
- Pour : Local
- Dépend de : Fichier de la base locale, Schéma des réservations, Réservations initiales

### Base SQLite en mémoire

Implémentation · `BaseMemoire`

- Responsable : karim
- Paramètres : { chemin : infra.CheminBaseTest, schema : infra.SchemaReservations, reservations : infra.ReservationsInitiales }
- Réalise : Base de données, Base en lecture
- Pour : Test
- Dépend de : Base de test, Schéma des réservations, Réservations initiales

### Base Postgres de production

Implémentation · `BasePostgres`

- Responsable : karim
- Variables : { nom : infra.NomBase, taille : infra.TailleBase, sauvegardes_jours : infra.RetentionSauvegardes }
- Réalise : Base de données, Base en lecture
- Pour : Production
- Dépend de : Nom de la base de production, Taille de la base de production, Rétention des sauvegardes

### Horloge arrêtée

Implémentation · `HorlogeArretee`

- Responsable : karim
- Paramètres : { instant : infra.InstantDeTest }
- Réalise : Horloge
- Pour : Test
- Dépend de : Instant de test

### Horloge du système

Implémentation · `HorlogeSysteme`

- Responsable : karim
- Réalise : Horloge
- Pour : Local, Production

### Prestataire réel

Implémentation · `PaiementHttp`

- Responsable : karim
- Paramètres : { url : infra.UrlPrestataire }
- Réalise : Prestataire de paiement
- Pour : Production
- Dépend de : Adresse du prestataire de paiement

### Prestataire simulé

Implémentation · `PaiementSimule`

- Responsable : karim
- Réalise : Prestataire de paiement, Journal des paiements
- Pour : Test, Local

### Réservations en SQL

Implémentation · `ReservationsSql`

- Responsable : karim
- Paramètres : { base : architecture.BaseEnLecture }
- Réalise : Lecture des réservations
- Pour : Test, Local, Production
- Dépend de : Base en lecture

### Serveur HTTP Node

Implémentation · `ServeurNode`

- Responsable : karim
- Paramètres : { port : architecture.PortHttp }
- Réalise : Exposition HTTP
- Pour : Test, Local, Production
- Dépend de : Port HTTP de l'API

### Local

Environnement · `Local`

- Responsable : karim

### Production

Environnement · `Production`

- Responsable : karim

### Test

Environnement · `Test`

- Responsable : karim

## Juridique

### Plafond légal des frais d'annulation

Décision · `PlafondFrais`

- Décidé par : karim
- Valeur : **à décider**

## Réservations · Scénarios

### Annuler deux fois ne rembourse qu'une fois

Scénario · `ScenarioAnnulationRepetee` · **tenu**

- Responsable : karim
- Paramètres : { annuler : api.AnnulerReservation, journal : architecture.JournalPaiements, rembourser : (règle), initiales : infra.ReservationsInitiales, instant : infra.InstantDeTest }
- Vérifie : Annuler une réservation
- Dans : Test
- Dépend de : Annuler une réservation, Journal des paiements, Remboursement à l'annulation, Réservations initiales, Instant de test

### Chaque réservation est remboursée selon la règle

Scénario · `ScenarioConformite` · **tenu**

- Responsable : lea
- Paramètres : { annuler : api.AnnulerReservation, rembourser : (règle), initiales : infra.ReservationsInitiales, instant : infra.InstantDeTest }
- Vérifie : Annuler une réservation, Remboursement à l'annulation
- Dans : Test
- Dépend de : Annuler une réservation, Remboursement à l'annulation, Réservations initiales, Instant de test

### Lire une réservation

Scénario · `ScenarioLecture` · **tenu**

- Responsable : karim
- Paramètres : { lire : api.LireReservation, initiales : infra.ReservationsInitiales, delai : annulation.DelaiGratuit }
- Vérifie : Lire une réservation
- Dans : Test
- Dépend de : Lire une réservation, Réservations initiales, Délai d'annulation gratuite

## Encore ouvert

- Décider « Plafond légal des frais d'annulation » · karim
