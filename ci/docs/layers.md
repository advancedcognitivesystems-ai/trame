# Layers

*The graph in force on 1 November 2026, ordered by distance to the goals.*

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
  end
  subgraph shell["Continuous integration · Shell"]
    n9["Bash scripts<br/><small>Standard</small>"]:::neutral
    n10["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n11["YAML<br/><small>Standard</small>"]:::neutral
    n12["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n5
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n12
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n3 -->|Serves| n5
  n4 -->|Serves| n6
  n7 -->|Serves| n5
  n7 -->|Serves| n6
  n8 -->|Serves| n5
  n8 -->|Serves| n6
  n9 -->|Serves| n5
  n10 -->|Defined by| n9
  n10 -->|Depends on| n9
  n10 -->|Depends on| n3
  n11 -->|Serves| n5
  n12 -->|Defined by| n11
  n12 -->|Depends on| n11
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
