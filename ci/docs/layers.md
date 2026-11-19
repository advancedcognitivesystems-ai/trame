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
    n7["A repository is set as its graph decides<br/><small>Goal</small>"]:::neutral
    n8["A shipment runs elsewhere as it runs here<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Continuous integration · Releases"]
    n9["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n10["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n11["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n12["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n13["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n14["Version 0.6.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Continuous integration · The repository on GitHub"]
    n15["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n16["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n17["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n18["A repository kept in memory<br/><small>Function</small>"]:::unknown
    n19["The repositories a scenario keeps in memory.<br/><small>Port</small>"]:::neutral
  end
  subgraph sdlc["Continuous integration · SDLC"]
    n20["The next version<br/><small>Shipment</small>"]:::unknown
    n21["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n22["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n23["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n24["The library of writers<br/><small>Artefact</small>"]:::unknown
  end
  subgraph shell["Continuous integration · Shell"]
    n25["Bash scripts<br/><small>Standard</small>"]:::neutral
    n26["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n27["YAML<br/><small>Standard</small>"]:::neutral
    n28["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n6
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n28
  n1 -->|Depends on| n4
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n2 -->|Serves| n6
  n4 -->|Serves| n6
  n5 -->|Serves| n8
  n9 -->|Serves| n6
  n9 -->|Serves| n8
  n10 -->|Serves| n6
  n10 -->|Serves| n8
  n11 -->|Serves| n6
  n11 -->|Serves| n8
  n12 -->|Serves| n6
  n12 -->|Serves| n8
  n13 -->|Serves| n6
  n13 -->|Serves| n8
  n14 -->|Serves| n6
  n14 -->|Serves| n8
  n15 -->|Serves| n7
  n16 -->|Serves| n7
  n18 -->|Serves| n7
  n18 -->|Implements| n17
  n18 -->|Implements| n19
  n20 -->|Ships| n24
  n20 -->|Requires| n28
  n20 -->|Requires| n26
  n20 -->|Requires| n1
  n22 -->|Produced by| n1
  n22 -->|Runs elsewhere| n20
  n22 -->|Its writer's settings| n21
  n23 -->|Ships| n22
  n25 -->|Serves| n6
  n26 -->|Defined by| n25
  n26 -->|Depends on| n25
  n26 -->|Depends on| n4
  n27 -->|Serves| n6
  n28 -->|Defined by| n27
  n28 -->|Depends on| n27
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
