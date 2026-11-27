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
    n13["Version 0.1.2<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n14["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n15["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n16["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n17["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n18["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n19["Played on a small project<br/><small>Technical choice</small>"]:::held
    n20["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n21["The small project<br/><small>Decision</small>"]:::neutral
    n22["Test<br/><small>Environment</small>"]:::neutral
    n23["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n24["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n25["Its code verified<br/><small>Obligation</small>"]:::neutral
    n26["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n27["The next version<br/><small>Shipment</small>"]:::unknown
    n28["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n29["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n30["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n31["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n32["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n33["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n34["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n13 -->|Serves| n10
  n14 -->|In| n22
  n14 -->|Serves| n10
  n15 -->|Verifies| n3
  n15 -->|Verifies| n0
  n15 -->|In| n22
  n15 -->|Depends on| n3
  n15 -->|Depends on| n2
  n15 -->|Depends on| n20
  n16 -->|Verifies| n3
  n16 -->|Verifies| n0
  n16 -->|Verifies| n23
  n16 -->|In| n22
  n16 -->|Depends on| n3
  n16 -->|Depends on| n2
  n16 -->|Depends on| n4
  n16 -->|Depends on| n20
  n17 -->|Verifies| n3
  n17 -->|In| n22
  n17 -->|Depends on| n3
  n17 -->|Depends on| n2
  n17 -->|Depends on| n20
  n18 -->|Serves| n10
  n18 -->|Applied by| n14
  n18 -->|Applied by| n19
  n19 -->|Chooses| n23
  n19 -->|In| n22
  n19 -->|Serves| n10
  n20 -->|Written in| n5
  n23 -->|Depends on| n21
  n24 -->|Serves| n10
  n25 -->|Serves| n10
  n26 -->|Serves| n10
  n27 -->|Ships| n33
  n27 -->|Follows the policy| n34
  n28 -->|Serves| n10
  n30 -->|Runs elsewhere| n27
  n30 -->|Its writer's settings| n29
  n31 -->|Serves| n10
  n32 -->|Ships| n30
  n34 -->|Its obligations| n25
  n34 -->|Its obligations| n31
  n34 -->|Its obligations| n26
  n34 -->|Its obligations| n28
  n34 -->|Its obligations| n24
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
