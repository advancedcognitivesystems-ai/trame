# Recoupements

*Les valeurs revendiquées par plusieurs nœuds le 17 octobre 2026, et comment chaque recoupement a été tranché.*

## Délai d'annulation gratuite · value.ultra

```mermaid
flowchart TB
  n0["Délai d'annulation gratuite<br/><small>Décision</small>"]:::neutre
  n1["Délai des bornes ultra<br/><small>Amendement</small>"]:::neutre
  n2["Délai ultra demandé par le support<br/><small>Amendement</small>"]:::neutre
  n3["Validation du délai ultra<br/><small>Validation</small>"]:::neutre
  n1 ==>|Revendique| n0
  n2 -->|Revendique| n0
  n3 ==>|Valide| n1
  n1 -.-|Chevauche| n2
  classDef tenu fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef bloqué fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violé fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef inconnu fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutre fill:#ffffff,stroke:#5a6672,color:#17202a
  style n1,n2,n3 stroke-dasharray:4 3
```

> Recoupement sur `value.ultra` de [Délai d'annulation gratuite](annulation.md#DelaiGratuit), entre [Délai des bornes ultra](comite.md#DelaiUltra) et [Délai ultra demandé par le support](support.md#DelaiUltraSupport) : [Délai des bornes ultra](comite.md#DelaiUltra) l'emporte (validé par lea, responsable de « Délai d'annulation gratuite » ; voir [Validation du délai ultra](comite.md#ValidationDelaiUltra)).
