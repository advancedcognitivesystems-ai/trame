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
  subgraph product["Continuous integration · Product"]
    n4["Each place is a writer<br/><small>Goal</small>"]:::neutral
    n5["A shipment runs elsewhere as it runs here<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Continuous integration · Releases"]
    n6["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n7["Version 0.2.0<br/><small>Release</small>"]:::neutral
  end
  subgraph shell["Continuous integration · Shell"]
    n8["Bash scripts<br/><small>Standard</small>"]:::neutral
    n9["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n10["YAML<br/><small>Standard</small>"]:::neutral
    n11["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n4
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n11
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n3 -->|Serves| n4
  n6 -->|Serves| n4
  n6 -->|Serves| n5
  n7 -->|Serves| n4
  n7 -->|Serves| n5
  n8 -->|Serves| n4
  n9 -->|Defined by| n8
  n9 -->|Depends on| n8
  n9 -->|Depends on| n3
  n10 -->|Serves| n4
  n11 -->|Defined by| n10
  n11 -->|Depends on| n10
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
