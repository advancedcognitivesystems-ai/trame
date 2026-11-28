# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Build<br/><small>Entry point</small>"]:::held
    n1["Two builds compared<br/><small>Function</small>"]:::held
    n2["The library's commands<br/><small>Component</small>"]:::neutral
    n3["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n4["Plan<br/><small>Entry point</small>"]:::held
    n5["Snapshot<br/><small>Entry point</small>"]:::held
    n6["View<br/><small>Entry point</small>"]:::held
    n7["Why a view gives no document, said<br/><small>Function</small>"]:::held
    n8["The language the commands speak<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n9["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n10["The renderers of documents<br/><small>Package</small>"]:::neutral
    n11["Trame<br/><small>Package</small>"]:::neutral
    n12["The people of the repository<br/><small>Package</small>"]:::neutral
    n13["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Commands · Product"]
    n14["Commands every project runs, written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Commands · Releases"]
    n15["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n16["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n17["Version 0.1.2<br/><small>Release</small>"]:::neutral
    n18["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n19["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n20["Version 0.4.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n21["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n22["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n23["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n24["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n25["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n26["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n27["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n28["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n29["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n30["Played on a small project<br/><small>Technical choice</small>"]:::held
    n31["Views the scenarios ask for<br/><small>Decision</small>"]:::neutral
    n32["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n33["The small project<br/><small>Decision</small>"]:::neutral
    n34["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n35["Test<br/><small>Environment</small>"]:::neutral
    n36["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n37["A view answers its document<br/><small>Scenario</small>"]:::held
    n38["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n39["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n40["Its code verified<br/><small>Obligation</small>"]:::neutral
    n41["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n42["The next version<br/><small>Shipment</small>"]:::unknown
    n43["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n44["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n45["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n46["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n47["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n48["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n49["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n14
  n0 -->|Part of| n2
  n0 -->|Depends on| n3
  n1 -->|Serves| n14
  n1 -->|Depends on| n3
  n3 -->|Written in| n8
  n3 -->|Depends on| n8
  n4 -->|Serves| n14
  n4 -->|Part of| n2
  n4 -->|Depends on| n1
  n4 -->|Depends on| n3
  n5 -->|Serves| n14
  n5 -->|Part of| n2
  n5 -->|Depends on| n3
  n6 -->|Serves| n14
  n6 -->|Part of| n2
  n6 -->|Depends on| n7
  n7 -->|Serves| n14
  n7 -->|Depends on| n3
  n9 -->|Serves| n14
  n10 -->|Serves| n14
  n11 -->|Serves| n14
  n12 -->|Serves| n14
  n13 -->|Serves| n14
  n15 -->|Serves| n14
  n16 -->|Serves| n14
  n17 -->|Serves| n14
  n18 -->|Serves| n14
  n19 -->|Serves| n14
  n20 -->|Serves| n14
  n21 -->|Verifies| n0
  n21 -->|Verifies| n36
  n21 -->|In| n35
  n21 -->|Depends on| n0
  n21 -->|Depends on| n3
  n21 -->|Depends on| n32
  n22 -->|In| n35
  n22 -->|Serves| n14
  n23 -->|In| n35
  n23 -->|Serves| n14
  n24 -->|In| n35
  n24 -->|Serves| n14
  n25 -->|In| n35
  n25 -->|Serves| n14
  n26 -->|Verifies| n4
  n26 -->|Verifies| n1
  n26 -->|In| n35
  n26 -->|Depends on| n4
  n26 -->|Depends on| n3
  n26 -->|Depends on| n32
  n27 -->|Verifies| n4
  n27 -->|Verifies| n1
  n27 -->|Verifies| n36
  n27 -->|In| n35
  n27 -->|Depends on| n4
  n27 -->|Depends on| n3
  n27 -->|Depends on| n32
  n28 -->|Verifies| n4
  n28 -->|In| n35
  n28 -->|Depends on| n4
  n28 -->|Depends on| n3
  n28 -->|Depends on| n32
  n29 -->|Serves| n14
  n29 -->|Applied by| n22
  n29 -->|Applied by| n30
  n30 -->|Chooses| n36
  n30 -->|In| n35
  n30 -->|Serves| n14
  n32 -->|Written in| n8
  n34 -->|Verifies| n5
  n34 -->|Verifies| n36
  n34 -->|In| n35
  n34 -->|Depends on| n5
  n34 -->|Depends on| n3
  n34 -->|Depends on| n32
  n36 -->|Depends on| n33
  n37 -->|Verifies| n6
  n37 -->|Verifies| n7
  n37 -->|Verifies| n36
  n37 -->|In| n35
  n37 -->|Depends on| n6
  n37 -->|Depends on| n7
  n37 -->|Depends on| n31
  n37 -->|Depends on| n32
  n38 -->|Serves| n14
  n38 -->|Applied by| n23
  n38 -->|Applied by| n25
  n38 -->|Applied by| n24
  n39 -->|Serves| n14
  n40 -->|Serves| n14
  n41 -->|Serves| n14
  n42 -->|Ships| n48
  n42 -->|Follows the policy| n49
  n43 -->|Serves| n14
  n45 -->|Runs elsewhere| n42
  n45 -->|Its writer's settings| n44
  n46 -->|Serves| n14
  n47 -->|Ships| n45
  n49 -->|Its obligations| n40
  n49 -->|Its obligations| n46
  n49 -->|Its obligations| n41
  n49 -->|Its obligations| n43
  n49 -->|Its obligations| n39
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
