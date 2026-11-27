# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Two builds compared<br/><small>Function</small>"]:::held
    n1["The library's commands<br/><small>Component</small>"]:::neutral
    n2["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n3["Plan<br/><small>Entry point</small>"]:::held
    n4["How a command writes at a terminal<br/><small>Decision</small>"]:::neutral
    n5["The language the commands speak<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n6["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n7["Trame<br/><small>Package</small>"]:::neutral
    n8["The people of the repository<br/><small>Package</small>"]:::neutral
    n9["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Commands · Product"]
    n10["Commands every project runs, written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Commands · Releases"]
    n11["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n12["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n13["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n14["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n15["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n16["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n17["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n18["Played on a small project<br/><small>Technical choice</small>"]:::held
    n19["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n20["The small project<br/><small>Decision</small>"]:::neutral
    n21["Test<br/><small>Environment</small>"]:::neutral
    n22["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n23["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n24["Its code verified<br/><small>Obligation</small>"]:::neutral
    n25["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n26["The next version<br/><small>Shipment</small>"]:::unknown
    n27["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n28["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n29["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n30["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n31["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n32["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n33["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n10
  n0 -->|Depends on| n2
  n2 -->|Written in| n5
  n2 -->|Depends on| n5
  n3 -->|Serves| n10
  n3 -->|Part of| n1
  n3 -->|Depends on| n0
  n3 -->|Depends on| n4
  n3 -->|Depends on| n2
  n6 -->|Serves| n10
  n7 -->|Serves| n10
  n8 -->|Serves| n10
  n9 -->|Serves| n10
  n11 -->|Serves| n10
  n12 -->|Serves| n10
  n13 -->|In| n21
  n13 -->|Serves| n10
  n14 -->|Verifies| n3
  n14 -->|Verifies| n0
  n14 -->|In| n21
  n14 -->|Depends on| n3
  n14 -->|Depends on| n2
  n14 -->|Depends on| n19
  n15 -->|Verifies| n3
  n15 -->|Verifies| n0
  n15 -->|Verifies| n22
  n15 -->|In| n21
  n15 -->|Depends on| n3
  n15 -->|Depends on| n2
  n15 -->|Depends on| n4
  n15 -->|Depends on| n19
  n16 -->|Verifies| n3
  n16 -->|In| n21
  n16 -->|Depends on| n3
  n16 -->|Depends on| n2
  n16 -->|Depends on| n19
  n17 -->|Serves| n10
  n17 -->|Applied by| n13
  n17 -->|Applied by| n18
  n18 -->|Chooses| n22
  n18 -->|In| n21
  n18 -->|Serves| n10
  n19 -->|Written in| n5
  n22 -->|Depends on| n20
  n23 -->|Serves| n10
  n24 -->|Serves| n10
  n25 -->|Serves| n10
  n26 -->|Ships| n32
  n26 -->|Follows the policy| n33
  n27 -->|Serves| n10
  n29 -->|Runs elsewhere| n26
  n29 -->|Its writer's settings| n28
  n30 -->|Serves| n10
  n31 -->|Ships| n29
  n33 -->|Its obligations| n24
  n33 -->|Its obligations| n30
  n33 -->|Its obligations| n25
  n33 -->|Its obligations| n27
  n33 -->|Its obligations| n23
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
