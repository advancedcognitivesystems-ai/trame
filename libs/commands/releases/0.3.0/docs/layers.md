# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Build<br/><small>Entry point</small>"]:::held
    n1["Two builds compared<br/><small>Function</small>"]:::held
    n2["The library's commands<br/><small>Component</small>"]:::neutral
    n3["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n4["Plan<br/><small>Entry point</small>"]:::held
    n5["Snapshot<br/><small>Entry point</small>"]:::held
    n6["The language the commands speak<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n7["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n8["The renderers of documents<br/><small>Package</small>"]:::neutral
    n9["Trame<br/><small>Package</small>"]:::neutral
    n10["The people of the repository<br/><small>Package</small>"]:::neutral
    n11["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Commands · Product"]
    n12["Commands every project runs, written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Commands · Releases"]
    n13["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n14["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n15["Version 0.1.2<br/><small>Release</small>"]:::neutral
    n16["Version 0.2.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n17["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n18["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n19["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n20["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n21["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n22["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n23["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n24["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n25["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n26["Played on a small project<br/><small>Technical choice</small>"]:::held
    n27["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n28["The small project<br/><small>Decision</small>"]:::neutral
    n29["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n30["Test<br/><small>Environment</small>"]:::neutral
    n31["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n32["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n33["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n34["Its code verified<br/><small>Obligation</small>"]:::neutral
    n35["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n36["The next version<br/><small>Shipment</small>"]:::unknown
    n37["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n38["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n39["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n40["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n41["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n42["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n43["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n12
  n0 -->|Part of| n2
  n0 -->|Depends on| n3
  n1 -->|Serves| n12
  n1 -->|Depends on| n3
  n3 -->|Written in| n6
  n3 -->|Depends on| n6
  n4 -->|Serves| n12
  n4 -->|Part of| n2
  n4 -->|Depends on| n1
  n4 -->|Depends on| n3
  n5 -->|Serves| n12
  n5 -->|Part of| n2
  n5 -->|Depends on| n3
  n7 -->|Serves| n12
  n8 -->|Serves| n12
  n9 -->|Serves| n12
  n10 -->|Serves| n12
  n11 -->|Serves| n12
  n13 -->|Serves| n12
  n14 -->|Serves| n12
  n15 -->|Serves| n12
  n16 -->|Serves| n12
  n17 -->|Verifies| n0
  n17 -->|Verifies| n31
  n17 -->|In| n30
  n17 -->|Depends on| n0
  n17 -->|Depends on| n3
  n17 -->|Depends on| n27
  n18 -->|In| n30
  n18 -->|Serves| n12
  n19 -->|In| n30
  n19 -->|Serves| n12
  n20 -->|In| n30
  n20 -->|Serves| n12
  n21 -->|In| n30
  n21 -->|Serves| n12
  n22 -->|Verifies| n4
  n22 -->|Verifies| n1
  n22 -->|In| n30
  n22 -->|Depends on| n4
  n22 -->|Depends on| n3
  n22 -->|Depends on| n27
  n23 -->|Verifies| n4
  n23 -->|Verifies| n1
  n23 -->|Verifies| n31
  n23 -->|In| n30
  n23 -->|Depends on| n4
  n23 -->|Depends on| n3
  n23 -->|Depends on| n27
  n24 -->|Verifies| n4
  n24 -->|In| n30
  n24 -->|Depends on| n4
  n24 -->|Depends on| n3
  n24 -->|Depends on| n27
  n25 -->|Serves| n12
  n25 -->|Applied by| n18
  n25 -->|Applied by| n26
  n26 -->|Chooses| n31
  n26 -->|In| n30
  n26 -->|Serves| n12
  n27 -->|Written in| n6
  n29 -->|Verifies| n5
  n29 -->|Verifies| n31
  n29 -->|In| n30
  n29 -->|Depends on| n5
  n29 -->|Depends on| n3
  n29 -->|Depends on| n27
  n31 -->|Depends on| n28
  n32 -->|Serves| n12
  n32 -->|Applied by| n19
  n32 -->|Applied by| n21
  n32 -->|Applied by| n20
  n33 -->|Serves| n12
  n34 -->|Serves| n12
  n35 -->|Serves| n12
  n36 -->|Ships| n42
  n36 -->|Follows the policy| n43
  n37 -->|Serves| n12
  n39 -->|Runs elsewhere| n36
  n39 -->|Its writer's settings| n38
  n40 -->|Serves| n12
  n41 -->|Ships| n39
  n43 -->|Its obligations| n34
  n43 -->|Its obligations| n40
  n43 -->|Its obligations| n35
  n43 -->|Its obligations| n37
  n43 -->|Its obligations| n33
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
