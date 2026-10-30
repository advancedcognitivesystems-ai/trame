# Couches

*Le graphe en vigueur le 17 octobre 2026, rangé par distance à l'objectif.*

```mermaid
flowchart TB
  subgraph annulation["Réservations · Annulation"]
    n0["Annuler sans stress<br/><small>Objectif</small>"]:::neutre
    n1["Critères de remboursement<br/><small>Jeu de critères d'acceptation</small>"]:::tenu
    n2["Délai d'annulation gratuite<br/><small>Décision</small>"]:::neutre
    n3["Frais d'annulation tardive<br/><small>Décision</small>"]:::neutre
    n4["Prestataire idempotent<br/><small>Hypothèse</small>"]:::inconnu
    n5["Remboursement immédiat<br/><small>Objectif de service</small>"]:::inconnu
    n6["Remboursement à l'annulation<br/><small>Exigence</small>"]:::tenu
  end
  subgraph api["Réservations · API"]
    n7["Annuler une réservation<br/><small>Point d'entrée</small>"]:::tenu
    n8["Avance d'une annulation<br/><small>Fonction</small>"]:::inconnu
    n9["Fin de l'annulation gratuite<br/><small>Fonction</small>"]:::inconnu
    n10["Lire une réservation<br/><small>Point d'entrée</small>"]:::tenu
  end
  subgraph architecture["Réservations · Architecture"]
    n11["Enregistrement des annulations<br/><small>Accès</small>"]:::neutre
    n12["API réservations<br/><small>Composant</small>"]:::neutre
    n13["Base de données<br/><small>Accès</small>"]:::neutre
    n14["Base en lecture<br/><small>Accès</small>"]:::neutre
    n15["Exposition HTTP<br/><small>Accès</small>"]:::neutre
    n16["Horloge<br/><small>Accès</small>"]:::neutre
    n17["Journal des paiements<br/><small>Accès</small>"]:::neutre
    n18["Lecture des réservations<br/><small>Accès</small>"]:::neutre
    n19["Une lecture n'écrit rien<br/><small>Règle d'architecture</small>"]:::tenu
    n20["Prestataire de paiement<br/><small>Accès</small>"]:::neutre
    n21["Port HTTP de l'API<br/><small>Décision</small>"]:::neutre
    n22["Tout appel à un tiers est vérifié<br/><small>Règle d'architecture</small>"]:::tenu
    n23["Les utilitaires ne touchent pas le monde<br/><small>Règle d'architecture</small>"]:::tenu
  end
  subgraph comite["Comité produit · 15 octobre 2026"]
    n24["Délai des bornes ultra<br/><small>Amendement</small>"]:::neutre
    n25["Lancement des bornes ultra<br/><small>Amendement</small>"]:::neutre
    n26["Validation du délai ultra<br/><small>Validation</small>"]:::neutre
  end
  subgraph infra["Réservations · Infrastructure"]
    n27["Annulations en SQL<br/><small>Implémentation</small>"]:::neutre
    n28["Base SQLite locale<br/><small>Implémentation</small>"]:::neutre
    n29["Base SQLite en mémoire<br/><small>Implémentation</small>"]:::neutre
    n30["Base Postgres de production<br/><small>Implémentation</small>"]:::neutre
    n31["Fichier de la base locale<br/><small>Décision</small>"]:::neutre
    n32["Base de test<br/><small>Décision</small>"]:::neutre
    n33["Horloge arrêtée<br/><small>Implémentation</small>"]:::neutre
    n34["Horloge du système<br/><small>Implémentation</small>"]:::neutre
    n35["Instant de test<br/><small>Décision</small>"]:::neutre
    n36["Local<br/><small>Environnement</small>"]:::neutre
    n37["Nom de la base de production<br/><small>Décision</small>"]:::neutre
    n38["Prestataire réel<br/><small>Implémentation</small>"]:::neutre
    n39["Prestataire simulé<br/><small>Implémentation</small>"]:::neutre
    n40["Production<br/><small>Environnement</small>"]:::neutre
    n41["Réservations initiales<br/><small>Décision</small>"]:::neutre
    n42["Réservations en SQL<br/><small>Implémentation</small>"]:::neutre
    n43["Rétention des sauvegardes<br/><small>Décision</small>"]:::neutre
    n44["Schéma des réservations<br/><small>Fonction</small>"]:::inconnu
    n45["Serveur HTTP Node<br/><small>Implémentation</small>"]:::neutre
    n46["Taille de la base de production<br/><small>Décision</small>"]:::neutre
    n47["Test<br/><small>Environnement</small>"]:::neutre
    n48["Adresse du prestataire de paiement<br/><small>Décision</small>"]:::neutre
  end
  subgraph juridique["Juridique"]
    n49["Plafond légal des frais d'annulation<br/><small>Décision</small>"]:::neutre
  end
  subgraph scenarios["Réservations · Scénarios"]
    n50["Annuler deux fois ne rembourse qu'une fois<br/><small>Scénario</small>"]:::tenu
    n51["Chaque réservation est remboursée selon la règle<br/><small>Scénario</small>"]:::tenu
    n52["Lire une réservation<br/><small>Scénario</small>"]:::tenu
  end
  subgraph support["Demandes du support"]
    n53["Délai ultra demandé par le support<br/><small>Amendement</small>"]:::neutre
  end
  n1 -->|Accepte| n6
  n3 -->|Plafonné par| n49
  n5 -->|Contraint| n6
  n6 -->|Précise| n0
  n6 -->|Suppose| n4
  n7 -->|Sert| n6
  n7 -->|Fait partie de| n12
  n7 -->|Dépend de| n18
  n7 -->|Dépend de| n11
  n7 -->|Dépend de| n20
  n7 -->|Dépend de| n8
  n7 -->|Dépend de| n6
  n8 -->|Dépend de| n16
  n9 -->|Sert| n6
  n9 -->|Dépend de| n2
  n10 -->|Sert| n0
  n10 -->|Fait partie de| n12
  n10 -->|Dépend de| n18
  n10 -->|Dépend de| n9
  n12 -->|Dépend de| n15
  n24 -->|Amende| n2
  n25 -->|Amende (pas en vigueur)| n6
  n26 -->|Valide| n24
  n27 -->|Réalise| n11
  n27 -->|Pour| n47
  n27 -->|Pour| n36
  n27 -->|Pour| n40
  n27 -->|Dépend de| n13
  n28 -->|Réalise| n13
  n28 -->|Réalise| n14
  n28 -->|Pour| n36
  n28 -->|Dépend de| n31
  n28 -->|Dépend de| n44
  n28 -->|Dépend de| n41
  n29 -->|Réalise| n13
  n29 -->|Réalise| n14
  n29 -->|Pour| n47
  n29 -->|Dépend de| n32
  n29 -->|Dépend de| n44
  n29 -->|Dépend de| n41
  n30 -->|Réalise| n13
  n30 -->|Réalise| n14
  n30 -->|Pour| n40
  n30 -->|Dépend de| n37
  n30 -->|Dépend de| n46
  n30 -->|Dépend de| n43
  n33 -->|Réalise| n16
  n33 -->|Pour| n47
  n33 -->|Dépend de| n35
  n34 -->|Réalise| n16
  n34 -->|Pour| n36
  n34 -->|Pour| n40
  n38 -->|Réalise| n20
  n38 -->|Pour| n40
  n38 -->|Dépend de| n48
  n39 -->|Réalise| n20
  n39 -->|Réalise| n17
  n39 -->|Pour| n47
  n39 -->|Pour| n36
  n42 -->|Réalise| n18
  n42 -->|Pour| n47
  n42 -->|Pour| n36
  n42 -->|Pour| n40
  n42 -->|Dépend de| n14
  n45 -->|Réalise| n15
  n45 -->|Pour| n47
  n45 -->|Pour| n36
  n45 -->|Pour| n40
  n45 -->|Dépend de| n21
  n50 -->|Vérifie| n7
  n50 -->|Dans| n47
  n50 -->|Dépend de| n7
  n50 -->|Dépend de| n17
  n50 -->|Dépend de| n6
  n50 -->|Dépend de| n41
  n50 -->|Dépend de| n35
  n51 -->|Vérifie| n7
  n51 -->|Vérifie| n6
  n51 -->|Dans| n47
  n51 -->|Dépend de| n7
  n51 -->|Dépend de| n6
  n51 -->|Dépend de| n41
  n51 -->|Dépend de| n35
  n52 -->|Vérifie| n10
  n52 -->|Dans| n47
  n52 -->|Dépend de| n10
  n52 -->|Dépend de| n41
  n52 -->|Dépend de| n2
  n53 -->|Amende| n2
  n1 -.->|Dépend de| n2
  n6 -.->|Dépend de| n2
  n6 -.->|Dépend de| n3
  n24 -.-|Chevauche| n53
  classDef tenu fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef bloqué fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violé fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef inconnu fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutre fill:#ffffff,stroke:#5a6672,color:#17202a
  style n24,n25,n26,n53 stroke-dasharray:4 3
  style n25 opacity:0.5
```

*Chaque rang est à une arête de plus de l'objectif. Les nœuds reliés à aucun objectif sont tout en bas.*
