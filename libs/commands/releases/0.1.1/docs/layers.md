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
  end
  subgraph scenarios["Commands · Scenarios"]
    n11["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n12["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n13["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n14["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n15["Played on a small project<br/><small>Technical choice</small>"]:::held
    n16["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n17["The small project<br/><small>Decision</small>"]:::neutral
    n18["Test<br/><small>Environment</small>"]:::neutral
    n19["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n20["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n21["Its code verified<br/><small>Obligation</small>"]:::neutral
    n22["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n23["The next version<br/><small>Shipment</small>"]:::unknown
    n24["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n25["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n26["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n27["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n28["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n29["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n30["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n11 -->|In| n18
  n11 -->|Serves| n9
  n12 -->|Verifies| n3
  n12 -->|Verifies| n0
  n12 -->|In| n18
  n12 -->|Depends on| n3
  n12 -->|Depends on| n2
  n12 -->|Depends on| n16
  n13 -->|Verifies| n3
  n13 -->|Verifies| n0
  n13 -->|Verifies| n19
  n13 -->|In| n18
  n13 -->|Depends on| n3
  n13 -->|Depends on| n2
  n13 -->|Depends on| n4
  n13 -->|Depends on| n16
  n14 -->|Verifies| n3
  n14 -->|In| n18
  n14 -->|Depends on| n3
  n14 -->|Depends on| n2
  n14 -->|Depends on| n16
  n15 -->|Chooses| n19
  n15 -->|In| n18
  n15 -->|Serves| n9
  n19 -->|Depends on| n17
  n20 -->|Serves| n9
  n21 -->|Serves| n9
  n22 -->|Serves| n9
  n23 -->|Ships| n29
  n23 -->|Follows the policy| n30
  n24 -->|Serves| n9
  n26 -->|Runs elsewhere| n23
  n26 -->|Its writer's settings| n25
  n27 -->|Serves| n9
  n28 -->|Ships| n26
  n30 -->|Its obligations| n21
  n30 -->|Its obligations| n27
  n30 -->|Its obligations| n22
  n30 -->|Its obligations| n24
  n30 -->|Its obligations| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
