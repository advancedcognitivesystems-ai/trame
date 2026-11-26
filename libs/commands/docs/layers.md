# Layers

*The graph in force on 26 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Two builds compared<br/><small>Function</small>"]:::held
    n1["The library's commands<br/><small>Component</small>"]:::neutral
    n2["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n3["Plan<br/><small>Entry point</small>"]:::held
    n4["How a command writes at a terminal<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n5["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n6["Trame<br/><small>Package</small>"]:::neutral
    n7["The people of the repository<br/><small>Package</small>"]:::neutral
    n8["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Commands · Product"]
    n9["Commands every project runs, written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Commands · Releases"]
    n10["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n11["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n12["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n13["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n14["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n15["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n16["Played on a small project<br/><small>Technical choice</small>"]:::held
    n17["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n18["The small project<br/><small>Decision</small>"]:::neutral
    n19["Test<br/><small>Environment</small>"]:::neutral
    n20["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n21["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n22["Its code verified<br/><small>Obligation</small>"]:::neutral
    n23["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n24["The next version<br/><small>Shipment</small>"]:::unknown
    n25["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n26["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n27["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n28["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n29["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n30["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n31["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n9
  n0 -->|Depends on| n2
  n3 -->|Serves| n9
  n3 -->|Part of| n1
  n3 -->|Depends on| n0
  n3 -->|Depends on| n4
  n3 -->|Depends on| n2
  n5 -->|Serves| n9
  n6 -->|Serves| n9
  n7 -->|Serves| n9
  n8 -->|Serves| n9
  n10 -->|Serves| n9
  n11 -->|Serves| n9
  n12 -->|In| n19
  n12 -->|Serves| n9
  n13 -->|Verifies| n3
  n13 -->|Verifies| n0
  n13 -->|In| n19
  n13 -->|Depends on| n3
  n13 -->|Depends on| n2
  n13 -->|Depends on| n17
  n14 -->|Verifies| n3
  n14 -->|Verifies| n0
  n14 -->|Verifies| n20
  n14 -->|In| n19
  n14 -->|Depends on| n3
  n14 -->|Depends on| n2
  n14 -->|Depends on| n4
  n14 -->|Depends on| n17
  n15 -->|Verifies| n3
  n15 -->|In| n19
  n15 -->|Depends on| n3
  n15 -->|Depends on| n2
  n15 -->|Depends on| n17
  n16 -->|Chooses| n20
  n16 -->|In| n19
  n16 -->|Serves| n9
  n20 -->|Depends on| n18
  n21 -->|Serves| n9
  n22 -->|Serves| n9
  n23 -->|Serves| n9
  n24 -->|Ships| n30
  n24 -->|Follows the policy| n31
  n25 -->|Serves| n9
  n27 -->|Runs elsewhere| n24
  n27 -->|Its writer's settings| n26
  n28 -->|Serves| n9
  n29 -->|Ships| n27
  n31 -->|Its obligations| n22
  n31 -->|Its obligations| n28
  n31 -->|Its obligations| n23
  n31 -->|Its obligations| n25
  n31 -->|Its obligations| n21
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
