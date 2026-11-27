# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Two builds compared<br/><small>Function</small>"]:::held
    n1["The library's commands<br/><small>Component</small>"]:::neutral
    n2["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n3["Plan<br/><small>Entry point</small>"]:::held
    n4["The language the commands speak<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n5["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n6["The renderers of documents<br/><small>Package</small>"]:::neutral
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
    n14["Version 0.2.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n15["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n16["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n17["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n18["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n19["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n20["Played on a small project<br/><small>Technical choice</small>"]:::held
    n21["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n22["The small project<br/><small>Decision</small>"]:::neutral
    n23["Test<br/><small>Environment</small>"]:::neutral
    n24["Which project the scenarios compile<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n25["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n26["Its code verified<br/><small>Obligation</small>"]:::neutral
    n27["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n28["The next version<br/><small>Shipment</small>"]:::unknown
    n29["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n30["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n31["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n32["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n33["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n34["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n35["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n10
  n0 -->|Depends on| n2
  n2 -->|Written in| n4
  n2 -->|Depends on| n4
  n3 -->|Serves| n10
  n3 -->|Part of| n1
  n3 -->|Depends on| n0
  n3 -->|Depends on| n2
  n5 -->|Serves| n10
  n6 -->|Serves| n10
  n7 -->|Serves| n10
  n8 -->|Serves| n10
  n9 -->|Serves| n10
  n11 -->|Serves| n10
  n12 -->|Serves| n10
  n13 -->|Serves| n10
  n14 -->|Serves| n10
  n15 -->|In| n23
  n15 -->|Serves| n10
  n16 -->|Verifies| n3
  n16 -->|Verifies| n0
  n16 -->|In| n23
  n16 -->|Depends on| n3
  n16 -->|Depends on| n2
  n16 -->|Depends on| n21
  n17 -->|Verifies| n3
  n17 -->|Verifies| n0
  n17 -->|Verifies| n24
  n17 -->|In| n23
  n17 -->|Depends on| n3
  n17 -->|Depends on| n2
  n17 -->|Depends on| n21
  n18 -->|Verifies| n3
  n18 -->|In| n23
  n18 -->|Depends on| n3
  n18 -->|Depends on| n2
  n18 -->|Depends on| n21
  n19 -->|Serves| n10
  n19 -->|Applied by| n15
  n19 -->|Applied by| n20
  n20 -->|Chooses| n24
  n20 -->|In| n23
  n20 -->|Serves| n10
  n21 -->|Written in| n4
  n24 -->|Depends on| n22
  n25 -->|Serves| n10
  n26 -->|Serves| n10
  n27 -->|Serves| n10
  n28 -->|Ships| n34
  n28 -->|Follows the policy| n35
  n29 -->|Serves| n10
  n31 -->|Runs elsewhere| n28
  n31 -->|Its writer's settings| n30
  n32 -->|Serves| n10
  n33 -->|Ships| n31
  n35 -->|Its obligations| n26
  n35 -->|Its obligations| n32
  n35 -->|Its obligations| n27
  n35 -->|Its obligations| n29
  n35 -->|Its obligations| n25
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
