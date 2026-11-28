# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph packages["Team · Packages"]
    n0["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n1["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph people["Team · People"]
    n2["Claude<br/><small>Actor</small>"]:::neutral
    n3["ghalaax<br/><small>Actor</small>"]:::neutral
    n4["The runner of GitHub Actions<br/><small>Actor</small>"]:::neutral
    n5["Trame's team<br/><small>Actor</small>"]:::neutral
  end
  subgraph product["Team · Product"]
    n6["Who acts is declared once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Team · Releases"]
    n7["Version 0.1.0<br/><small>Release</small>"]:::neutral
  end
  subgraph sdlc["Team · SDLC"]
    n8["The next version<br/><small>Shipment</small>"]:::unknown
    n9["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n10["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n11["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n12["The people of the repository<br/><small>Artefact</small>"]:::unknown
  end
  n0 -->|Serves| n6
  n1 -->|Serves| n6
  n2 -->|Serves| n6
  n3 -->|Serves| n6
  n4 -->|Serves| n6
  n5 -->|Members| n3
  n5 -->|Members| n2
  n5 -->|Serves| n6
  n7 -->|Serves| n6
  n8 -->|Ships| n12
  n10 -->|Runs elsewhere| n8
  n10 -->|Its writer's settings| n9
  n11 -->|Ships| n10
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
