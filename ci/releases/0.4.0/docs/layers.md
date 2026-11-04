# Layers

*The graph in force on 4 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph github["Continuous integration · GitHub Actions"]
    n0["GitHub Actions<br/><small>Standard</small>"]:::neutral
    n1["A workflow of GitHub Actions<br/><small>Syntax element</small>"]:::held
    n2["The actions a workflow uses<br/><small>Decision</small>"]:::neutral
  end
  subgraph npm["Continuous integration · npm"]
    n3["npm<br/><small>Standard</small>"]:::neutral
  end
  subgraph packages["Continuous integration · Packages"]
    n4["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Continuous integration · Product"]
    n5["Each place is a writer<br/><small>Goal</small>"]:::neutral
    n6["A shipment runs elsewhere as it runs here<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Continuous integration · Releases"]
    n7["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n8["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n9["Version 0.3.0<br/><small>Release</small>"]:::neutral
  end
  subgraph sdlc["Continuous integration · SDLC"]
    n10["The next version<br/><small>Shipment</small>"]:::unknown
    n11["The library of writers<br/><small>Artefact</small>"]:::unknown
  end
  subgraph shell["Continuous integration · Shell"]
    n12["Bash scripts<br/><small>Standard</small>"]:::neutral
    n13["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n14["YAML<br/><small>Standard</small>"]:::neutral
    n15["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n5
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n15
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n3 -->|Serves| n5
  n4 -->|Serves| n6
  n7 -->|Serves| n5
  n7 -->|Serves| n6
  n8 -->|Serves| n5
  n8 -->|Serves| n6
  n9 -->|Serves| n5
  n9 -->|Serves| n6
  n10 -->|Ships| n11
  n10 -->|Requires| n15
  n10 -->|Requires| n13
  n10 -->|Requires| n1
  n12 -->|Serves| n5
  n13 -->|Defined by| n12
  n13 -->|Depends on| n12
  n13 -->|Depends on| n3
  n14 -->|Serves| n5
  n15 -->|Defined by| n14
  n15 -->|Depends on| n14
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
