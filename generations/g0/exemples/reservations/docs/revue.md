# Revue de la branche

*Ce que les déclarations pas encore publiées ajoutent au graphe publié (`trame.lock`), vu le 17 octobre 2026.*

> **46 déclarations nouvelles · 0 déclaration publiée touchée · 1 recoupement · 0 trou bloquant ajouté**

## Ce que la branche redéfinit

| Cible | Chemin | Déclaré | Demandé | Par | Issue |
|---|---|---|---|---|---|
| [Délai d'annulation gratuite](annulation.md#DelaiGratuit) | `value.ultra` | **à décider** | 15 min | [Délai des bornes ultra](comite.md#DelaiUltra) | appliqué (validé par lea, responsable de « Délai d'annulation gratuite ») |
| [Remboursement à l'annulation](annulation.md#Rembourser) | `rule` | règle d'origine | règle redéfinie | [Lancement des bornes ultra](comite.md#LancementUltra) | pas en vigueur le 17 octobre 2026 |
| [Délai d'annulation gratuite](annulation.md#DelaiGratuit) | `value.ultra` | **à décider** | 12 min | [Délai ultra demandé par le support](support.md#DelaiUltraSupport) | écarté au profit de [Délai des bornes ultra](comite.md#DelaiUltra) (validé par lea, responsable de « Délai d'annulation gratuite ») |

- [Délai d'annulation gratuite](annulation.md#DelaiGratuit), en vigueur le 17 octobre 2026 avec la branche : `value` = { rapide : 5 min, normale : 10 min, ultra : 15 min }
- [Remboursement à l'annulation](annulation.md#Rembourser), en vigueur le 17 octobre 2026 avec la branche : `rule` = règle d'origine

## Recoupements

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](annulation.md#DelaiGratuit), entre [Délai des bornes ultra](comite.md#DelaiUltra) et [Délai ultra demandé par le support](support.md#DelaiUltraSupport) : [Délai des bornes ultra](comite.md#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](comite.md#ValidationDelaiUltra)).

## À vérifier avant de fusionner

La branche n'ajoute ni trou, ni erreur, et ne touche aucune déclaration publiée.

## Déclarations nouvelles

| Déclaration | Type | Responsable | Source |
|---|---|---|---|
| [Annuler une réservation](api.md#AnnulerReservation) | Point d'entrée | karim | `src/api.ts:48` |
| [Avance d'une annulation](api.md#AvanceAvant) | Fonction | karim | `src/api.ts:25` |
| [Fin de l'annulation gratuite](api.md#FinGratuite) | Fonction | lea | `src/api.ts:13` |
| [Lire une réservation](api.md#LireReservation) | Point d'entrée | karim | `src/api.ts:35` |
| [Enregistrement des annulations](architecture.md#Annulations) | Accès | karim | `src/architecture.ts:71` |
| [API réservations](architecture.md#ApiReservations) | Composant | karim | `src/architecture.ts:106` |
| [Base de données](architecture.md#Base) | Accès | karim | `src/architecture.ts:53` |
| [Base en lecture](architecture.md#BaseEnLecture) | Accès | karim | `src/architecture.ts:59` |
| [Exposition HTTP](architecture.md#ExpositionHttp) | Accès | karim | `src/architecture.ts:95` |
| [Horloge](architecture.md#Horloge) | Accès | karim | `src/architecture.ts:89` |
| [Journal des paiements](architecture.md#JournalPaiements) | Accès | karim | `src/architecture.ts:83` |
| [Lecture des réservations](architecture.md#LectureReservations) | Accès | karim | `src/architecture.ts:65` |
| [Une lecture n'écrit rien](architecture.md#LectureSansEcriture) | Règle d'architecture | karim | `src/architecture.ts:118` |
| [Prestataire de paiement](architecture.md#Paiement) | Accès | karim | `src/architecture.ts:77` |
| [Port HTTP de l'API](architecture.md#PortHttp) | Décision | karim | `src/architecture.ts:100` |
| [Tout appel à un tiers est vérifié](architecture.md#TiersVerifies) | Règle d'architecture | karim | `src/architecture.ts:141` |
| [Les utilitaires ne touchent pas le monde](architecture.md#UtilitairesSansMonde) | Règle d'architecture | karim | `src/architecture.ts:130` |
| [Délai des bornes ultra](comite.md#DelaiUltra) | Amendement | lea | `src/comite.ts:12` |
| [Lancement des bornes ultra](comite.md#LancementUltra) | Amendement | lea | `src/comite.ts:29` |
| [Validation du délai ultra](comite.md#ValidationDelaiUltra) | Validation | lea | `src/comite.ts:19` |
| [Annulations en SQL](infra.md#AnnulationsSql) | Implémentation | karim | `src/infra.ts:150` |
| [Base SQLite locale](infra.md#BaseFichier) | Implémentation | karim | `src/infra.ts:114` |
| [Base SQLite en mémoire](infra.md#BaseMemoire) | Implémentation | karim | `src/infra.ts:102` |
| [Base Postgres de production](infra.md#BasePostgres) | Implémentation | karim | `src/infra.ts:126` |
| [Fichier de la base locale](infra.md#CheminBaseLocale) | Décision | karim | `src/infra.ts:60` |
| [Base de test](infra.md#CheminBaseTest) | Décision | karim | `src/infra.ts:55` |
| [Horloge arrêtée](infra.md#HorlogeArretee) | Implémentation | karim | `src/infra.ts:172` |
| [Horloge du système](infra.md#HorlogeSysteme) | Implémentation | karim | `src/infra.ts:161` |
| [Instant de test](infra.md#InstantDeTest) | Décision | karim | `src/infra.ts:50` |
| [Local](infra.md#Local) | Environnement | karim | `src/infra.ts:24` |
| [Nom de la base de production](infra.md#NomBase) | Décision | karim | `src/infra.ts:65` |
| [Prestataire réel](infra.md#PaiementHttp) | Implémentation | karim | `src/infra.ts:208` |
| [Prestataire simulé](infra.md#PaiementSimule) | Implémentation | karim | `src/infra.ts:184` |
| [Production](infra.md#Production) | Environnement | karim | `src/infra.ts:29` |
| [Réservations initiales](infra.md#ReservationsInitiales) | Décision | karim | `src/infra.ts:37` |
| [Réservations en SQL](infra.md#ReservationsSql) | Implémentation | karim | `src/infra.ts:138` |
| [Rétention des sauvegardes](infra.md#RetentionSauvegardes) | Décision | karim | `src/infra.ts:76` |
| [Schéma des réservations](infra.md#SchemaReservations) | Fonction | karim | `src/infra.ts:89` |
| [Serveur HTTP Node](infra.md#ServeurNode) | Implémentation | karim | `src/infra.ts:219` |
| [Taille de la base de production](infra.md#TailleBase) | Décision | karim | `src/infra.ts:70` |
| [Test](infra.md#Test) | Environnement | karim | `src/infra.ts:18` |
| [Adresse du prestataire de paiement](infra.md#UrlPrestataire) | Décision | karim | `src/infra.ts:81` |
| [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee) | Scénario | karim | `src/scenarios.ts:30` |
| [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite) | Scénario | lea | `src/scenarios.ts:51` |
| [Lire une réservation](scenarios.md#ScenarioLecture) | Scénario | karim | `src/scenarios.ts:12` |
| [Délai ultra demandé par le support](support.md#DelaiUltraSupport) | Amendement | karim | `src/support.ts:11` |
