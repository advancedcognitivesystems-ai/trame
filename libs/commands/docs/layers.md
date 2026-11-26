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
  subgraph scenarios["Commands · Scenarios"]
    n10["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n11["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n12["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n13["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n14["Played on a small project<br/><small>Technical choice</small>"]:::held
    n15["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n16["The small project<br/><small>Decision</small>"]:::neutral
    n17["Test<br/><small>Environment</small>"]:::neutral
    n18["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n19["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n20["Its code verified<br/><small>Obligation</small>"]:::neutral
    n21["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n22["The next version<br/><small>Shipment</small>"]:::unknown
    n23["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n24["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n25["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n26["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n27["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n28["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n29["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n10 -->|In| n17
  n10 -->|Serves| n9
  n11 -->|Verifies| n3
  n11 -->|Verifies| n0
  n11 -->|In| n17
  n11 -->|Depends on| n3
  n11 -->|Depends on| n2
  n11 -->|Depends on| n15
  n12 -->|Verifies| n3
  n12 -->|Verifies| n0
  n12 -->|Verifies| n18
  n12 -->|In| n17
  n12 -->|Depends on| n3
  n12 -->|Depends on| n2
  n12 -->|Depends on| n4
  n12 -->|Depends on| n15
  n13 -->|Verifies| n3
  n13 -->|In| n17
  n13 -->|Depends on| n3
  n13 -->|Depends on| n2
  n13 -->|Depends on| n15
  n14 -->|Chooses| n18
  n14 -->|In| n17
  n14 -->|Serves| n9
  n18 -->|Depends on| n16
  n19 -->|Serves| n9
  n20 -->|Serves| n9
  n21 -->|Serves| n9
  n22 -->|Ships| n28
  n22 -->|Follows the policy| n29
  n23 -->|Serves| n9
  n25 -->|Runs elsewhere| n22
  n25 -->|Its writer's settings| n24
  n26 -->|Serves| n9
  n27 -->|Ships| n25
  n29 -->|Its obligations| n20
  n29 -->|Its obligations| n26
  n29 -->|Its obligations| n21
  n29 -->|Its obligations| n23
  n29 -->|Its obligations| n19
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
