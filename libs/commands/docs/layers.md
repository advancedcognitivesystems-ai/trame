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
    n17["Version 0.3.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n18["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n19["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n20["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n21["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n22["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n23["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n24["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n25["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n26["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n27["Played on a small project<br/><small>Technical choice</small>"]:::held
    n28["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n29["The small project<br/><small>Decision</small>"]:::neutral
    n30["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n31["Test<br/><small>Environment</small>"]:::neutral
    n32["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n33["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n34["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n35["Its code verified<br/><small>Obligation</small>"]:::neutral
    n36["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n37["The next version<br/><small>Shipment</small>"]:::unknown
    n38["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n39["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n40["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n41["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n42["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n43["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n44["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n17 -->|Serves| n12
  n18 -->|Verifies| n0
  n18 -->|Verifies| n32
  n18 -->|In| n31
  n18 -->|Depends on| n0
  n18 -->|Depends on| n3
  n18 -->|Depends on| n28
  n19 -->|In| n31
  n19 -->|Serves| n12
  n20 -->|In| n31
  n20 -->|Serves| n12
  n21 -->|In| n31
  n21 -->|Serves| n12
  n22 -->|In| n31
  n22 -->|Serves| n12
  n23 -->|Verifies| n4
  n23 -->|Verifies| n1
  n23 -->|In| n31
  n23 -->|Depends on| n4
  n23 -->|Depends on| n3
  n23 -->|Depends on| n28
  n24 -->|Verifies| n4
  n24 -->|Verifies| n1
  n24 -->|Verifies| n32
  n24 -->|In| n31
  n24 -->|Depends on| n4
  n24 -->|Depends on| n3
  n24 -->|Depends on| n28
  n25 -->|Verifies| n4
  n25 -->|In| n31
  n25 -->|Depends on| n4
  n25 -->|Depends on| n3
  n25 -->|Depends on| n28
  n26 -->|Serves| n12
  n26 -->|Applied by| n19
  n26 -->|Applied by| n27
  n27 -->|Chooses| n32
  n27 -->|In| n31
  n27 -->|Serves| n12
  n28 -->|Written in| n6
  n30 -->|Verifies| n5
  n30 -->|Verifies| n32
  n30 -->|In| n31
  n30 -->|Depends on| n5
  n30 -->|Depends on| n3
  n30 -->|Depends on| n28
  n32 -->|Depends on| n29
  n33 -->|Serves| n12
  n33 -->|Applied by| n20
  n33 -->|Applied by| n22
  n33 -->|Applied by| n21
  n34 -->|Serves| n12
  n35 -->|Serves| n12
  n36 -->|Serves| n12
  n37 -->|Ships| n43
  n37 -->|Follows the policy| n44
  n38 -->|Serves| n12
  n40 -->|Runs elsewhere| n37
  n40 -->|Its writer's settings| n39
  n41 -->|Serves| n12
  n42 -->|Ships| n40
  n44 -->|Its obligations| n35
  n44 -->|Its obligations| n41
  n44 -->|Its obligations| n36
  n44 -->|Its obligations| n38
  n44 -->|Its obligations| n34
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
