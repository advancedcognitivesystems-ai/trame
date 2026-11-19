# Layers

*The graph in force on 19 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph github["Continuous integration · GitHub Actions"]
    n0["GitHub Actions<br/><small>Standard</small>"]:::neutral
    n1["A workflow of GitHub Actions<br/><small>Syntax element</small>"]:::held
    n2["How a pull request is merged<br/><small>Vocabulary</small>"]:::neutral
    n3["The actions a workflow uses<br/><small>Decision</small>"]:::neutral
  end
  subgraph npm["Continuous integration · npm"]
    n4["npm<br/><small>Standard</small>"]:::neutral
  end
  subgraph packages["Continuous integration · Packages"]
    n5["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Continuous integration · Product"]
    n6["Each place is a writer<br/><small>Goal</small>"]:::neutral
    n7["A shipment runs elsewhere as it runs here<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Continuous integration · Releases"]
    n8["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n9["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n10["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n11["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n12["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n13["Version 0.6.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Continuous integration · The repository on GitHub"]
    n14["The settings of a repository<br/><small>Syntax element</small>"]:::held
    n15["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n16["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sdlc["Continuous integration · SDLC"]
    n17["The next version<br/><small>Shipment</small>"]:::held
    n18["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n19["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n20["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n21["The library of writers<br/><small>Artefact</small>"]:::held
  end
  subgraph shell["Continuous integration · Shell"]
    n22["Bash scripts<br/><small>Standard</small>"]:::neutral
    n23["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n24["YAML<br/><small>Standard</small>"]:::neutral
    n25["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n6
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n25
  n1 -->|Depends on| n4
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n2 -->|Serves| n6
  n4 -->|Serves| n6
  n5 -->|Serves| n7
  n8 -->|Serves| n6
  n8 -->|Serves| n7
  n9 -->|Serves| n6
  n9 -->|Serves| n7
  n10 -->|Serves| n6
  n10 -->|Serves| n7
  n11 -->|Serves| n6
  n11 -->|Serves| n7
  n12 -->|Serves| n6
  n12 -->|Serves| n7
  n13 -->|Serves| n6
  n13 -->|Serves| n7
  n14 -->|Defined by| n15
  n14 -->|Depends on| n15
  n14 -->|Depends on| n22
  n14 -->|Depends on| n16
  n15 -->|Serves| n6
  n16 -->|Serves| n6
  n17 -->|Ships| n21
  n17 -->|Requires| n25
  n17 -->|Requires| n23
  n17 -->|Requires| n1
  n19 -->|Produced by| n1
  n19 -->|Runs elsewhere| n17
  n19 -->|Its writer's settings| n18
  n20 -->|Ships| n19
  n22 -->|Serves| n6
  n23 -->|Defined by| n22
  n23 -->|Depends on| n22
  n23 -->|Depends on| n4
  n24 -->|Serves| n6
  n25 -->|Defined by| n24
  n25 -->|Depends on| n24
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
