# Layers

*The graph in force on 21 November 2026, ordered by distance to the goals.*

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
  subgraph people["Continuous integration · People"]
    n6["Claude<br/><small>Actor</small>"]:::neutral
    n7["ghalaax<br/><small>Actor</small>"]:::neutral
    n8["The runner of GitHub Actions<br/><small>Actor</small>"]:::neutral
    n9["Trame's team<br/><small>Actor</small>"]:::neutral
  end
  subgraph product["Continuous integration · Product"]
    n10["Each place is a writer<br/><small>Goal</small>"]:::neutral
    n11["A shipment runs elsewhere as it runs here<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Continuous integration · Releases"]
    n12["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n13["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n14["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n15["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n16["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n17["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n18["Version 0.7.0<br/><small>Release</small>"]:::neutral
  end
  subgraph sdlc["Continuous integration · SDLC"]
    n19["The next version<br/><small>Shipment</small>"]:::unknown
    n20["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n21["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n22["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n23["The library of writers<br/><small>Artefact</small>"]:::unknown
  end
  subgraph shell["Continuous integration · Shell"]
    n24["Bash scripts<br/><small>Standard</small>"]:::neutral
    n25["A script of Bash<br/><small>Syntax element</small>"]:::held
  end
  subgraph yaml["Continuous integration · YAML"]
    n26["YAML<br/><small>Standard</small>"]:::neutral
    n27["A YAML document<br/><small>Syntax element</small>"]:::held
  end
  n0 -->|Serves| n10
  n1 -->|Defined by| n0
  n1 -->|Depends on| n0
  n1 -->|Depends on| n27
  n1 -->|Depends on| n4
  n1 -->|Depends on| n3
  n1 -->|Depends on| n2
  n2 -->|Serves| n10
  n4 -->|Serves| n10
  n5 -->|Serves| n11
  n6 -->|Serves| n11
  n7 -->|Serves| n11
  n8 -->|Serves| n11
  n9 -->|Members| n7
  n9 -->|Members| n6
  n9 -->|Serves| n11
  n12 -->|Serves| n10
  n12 -->|Serves| n11
  n13 -->|Serves| n10
  n13 -->|Serves| n11
  n14 -->|Serves| n10
  n14 -->|Serves| n11
  n15 -->|Serves| n10
  n15 -->|Serves| n11
  n16 -->|Serves| n10
  n16 -->|Serves| n11
  n17 -->|Serves| n10
  n17 -->|Serves| n11
  n18 -->|Serves| n10
  n18 -->|Serves| n11
  n19 -->|Ships| n23
  n19 -->|Requires| n27
  n19 -->|Requires| n25
  n19 -->|Requires| n1
  n21 -->|Produced by| n1
  n21 -->|Runs elsewhere| n19
  n21 -->|Its writer's settings| n20
  n22 -->|Ships| n21
  n24 -->|Serves| n10
  n25 -->|Defined by| n24
  n25 -->|Depends on| n24
  n25 -->|Depends on| n4
  n26 -->|Serves| n10
  n27 -->|Defined by| n26
  n27 -->|Depends on| n26
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
