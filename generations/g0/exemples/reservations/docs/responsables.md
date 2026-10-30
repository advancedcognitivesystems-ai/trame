# Responsables

*Ce que chacun doit décider, trancher ou surveiller le 17 octobre 2026, et ce qu'il porte.*

| Responsable | À décider ou trancher | Erreurs | À surveiller | Porte |
|---|---|---|---|---|
| karim | 1 | 0 | 3 | 44 |
| lea | 0 | 0 | 0 | 8 |

<a id="karim"></a>

## karim

| Gravité | Quoi | Où | Responsable | Conséquence |
|---|---|---|---|---|
| bloquant | Décider « Plafond légal des frais d'annulation » | [Plafond légal des frais d'annulation](juridique.md#PlafondFrais) | karim | concerne « Frais d'annulation tardive » |
| avertissement | Plafond non vérifiable : « Plafond légal des frais d'annulation » n'est pas décidé | [Frais d'annulation tardive](annulation.md#FraisTardifs) | karim |  |
| avertissement | Vérifier l'hypothèse avant le 1er décembre 2026 (dans 45 jours) | [Prestataire idempotent](annulation.md#PrestataireIdempotent) | karim | aucune preuve pour l'instant |
| avertissement | Aucune mesure de production branchée | [Remboursement immédiat](annulation.md#RemboursementImmediat) | karim |  |

### Porte

| Nœud | Type | État |
|---|---|---|
| [Prestataire idempotent](annulation.md#PrestataireIdempotent) | Hypothèse | **inconnu** |
| [Remboursement immédiat](annulation.md#RemboursementImmediat) | Objectif de service | **inconnu** |
| [Annuler une réservation](api.md#AnnulerReservation) | Point d'entrée | **tenu** |
| [Avance d'une annulation](api.md#AvanceAvant) | Fonction | **inconnu** |
| [Lire une réservation](api.md#LireReservation) | Point d'entrée | **tenu** |
| [Enregistrement des annulations](architecture.md#Annulations) | Accès |  |
| [API réservations](architecture.md#ApiReservations) | Composant |  |
| [Base de données](architecture.md#Base) | Accès |  |
| [Base en lecture](architecture.md#BaseEnLecture) | Accès |  |
| [Exposition HTTP](architecture.md#ExpositionHttp) | Accès |  |
| [Horloge](architecture.md#Horloge) | Accès |  |
| [Journal des paiements](architecture.md#JournalPaiements) | Accès |  |
| [Lecture des réservations](architecture.md#LectureReservations) | Accès |  |
| [Une lecture n'écrit rien](architecture.md#LectureSansEcriture) | Règle d'architecture | **tenu** |
| [Prestataire de paiement](architecture.md#Paiement) | Accès |  |
| [Port HTTP de l'API](architecture.md#PortHttp) | Décision |  |
| [Tout appel à un tiers est vérifié](architecture.md#TiersVerifies) | Règle d'architecture | **tenu** |
| [Les utilitaires ne touchent pas le monde](architecture.md#UtilitairesSansMonde) | Règle d'architecture | **tenu** |
| [Annulations en SQL](infra.md#AnnulationsSql) | Implémentation |  |
| [Base SQLite locale](infra.md#BaseFichier) | Implémentation |  |
| [Base SQLite en mémoire](infra.md#BaseMemoire) | Implémentation |  |
| [Base Postgres de production](infra.md#BasePostgres) | Implémentation |  |
| [Fichier de la base locale](infra.md#CheminBaseLocale) | Décision |  |
| [Base de test](infra.md#CheminBaseTest) | Décision |  |
| [Horloge arrêtée](infra.md#HorlogeArretee) | Implémentation |  |
| [Horloge du système](infra.md#HorlogeSysteme) | Implémentation |  |
| [Instant de test](infra.md#InstantDeTest) | Décision |  |
| [Local](infra.md#Local) | Environnement |  |
| [Nom de la base de production](infra.md#NomBase) | Décision |  |
| [Prestataire réel](infra.md#PaiementHttp) | Implémentation |  |
| [Prestataire simulé](infra.md#PaiementSimule) | Implémentation |  |
| [Production](infra.md#Production) | Environnement |  |
| [Réservations initiales](infra.md#ReservationsInitiales) | Décision |  |
| [Réservations en SQL](infra.md#ReservationsSql) | Implémentation |  |
| [Rétention des sauvegardes](infra.md#RetentionSauvegardes) | Décision |  |
| [Schéma des réservations](infra.md#SchemaReservations) | Fonction | **inconnu** |
| [Serveur HTTP Node](infra.md#ServeurNode) | Implémentation |  |
| [Taille de la base de production](infra.md#TailleBase) | Décision |  |
| [Test](infra.md#Test) | Environnement |  |
| [Adresse du prestataire de paiement](infra.md#UrlPrestataire) | Décision |  |
| [Plafond légal des frais d'annulation](juridique.md#PlafondFrais) | Décision | à décider |
| [Annuler deux fois ne rembourse qu'une fois](scenarios.md#ScenarioAnnulationRepetee) | Scénario | **tenu** |
| [Lire une réservation](scenarios.md#ScenarioLecture) | Scénario | **tenu** |
| [Délai ultra demandé par le support](support.md#DelaiUltraSupport) | Amendement | en vigueur |

<a id="lea"></a>

## lea

Rien à décider ni à surveiller.

### Porte

| Nœud | Type | État |
|---|---|---|
| [Critères de remboursement](annulation.md#CriteresRemboursement) | Jeu de critères d'acceptation | **tenu** |
| [Délai d'annulation gratuite](annulation.md#DelaiGratuit) | Décision |  |
| [Frais d'annulation tardive](annulation.md#FraisTardifs) | Décision |  |
| [Fin de l'annulation gratuite](api.md#FinGratuite) | Fonction | **inconnu** |
| [Délai des bornes ultra](comite.md#DelaiUltra) | Amendement | en vigueur |
| [Lancement des bornes ultra](comite.md#LancementUltra) | Amendement | pas en vigueur |
| [Validation du délai ultra](comite.md#ValidationDelaiUltra) | Validation |  |
| [Chaque réservation est remboursée selon la règle](scenarios.md#ScenarioConformite) | Scénario | **tenu** |
