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
  end
  subgraph scenarios["Commands · Scenarios"]
    n20["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n21["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n22["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n23["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n24["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n25["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n26["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n27["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n28["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n29["Played on a small project<br/><small>Technical choice</small>"]:::held
    n30["Views the scenarios ask for<br/><small>Decision</small>"]:::neutral
    n31["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n32["The small project<br/><small>Decision</small>"]:::neutral
    n33["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n34["Test<br/><small>Environment</small>"]:::neutral
    n35["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n36["A view answers its document<br/><small>Scenario</small>"]:::held
    n37["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n38["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n39["Its code verified<br/><small>Obligation</small>"]:::neutral
    n40["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n41["The next version<br/><small>Shipment</small>"]:::unknown
    n42["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n43["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n44["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n45["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n46["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n47["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n48["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n20 -->|Verifies| n0
  n20 -->|Verifies| n35
  n20 -->|In| n34
  n20 -->|Depends on| n0
  n20 -->|Depends on| n3
  n20 -->|Depends on| n31
  n21 -->|In| n34
  n21 -->|Serves| n14
  n22 -->|In| n34
  n22 -->|Serves| n14
  n23 -->|In| n34
  n23 -->|Serves| n14
  n24 -->|In| n34
  n24 -->|Serves| n14
  n25 -->|Verifies| n4
  n25 -->|Verifies| n1
  n25 -->|In| n34
  n25 -->|Depends on| n4
  n25 -->|Depends on| n3
  n25 -->|Depends on| n31
  n26 -->|Verifies| n4
  n26 -->|Verifies| n1
  n26 -->|Verifies| n35
  n26 -->|In| n34
  n26 -->|Depends on| n4
  n26 -->|Depends on| n3
  n26 -->|Depends on| n31
  n27 -->|Verifies| n4
  n27 -->|In| n34
  n27 -->|Depends on| n4
  n27 -->|Depends on| n3
  n27 -->|Depends on| n31
  n28 -->|Serves| n14
  n28 -->|Applied by| n21
  n28 -->|Applied by| n29
  n29 -->|Chooses| n35
  n29 -->|In| n34
  n29 -->|Serves| n14
  n31 -->|Written in| n8
  n33 -->|Verifies| n5
  n33 -->|Verifies| n35
  n33 -->|In| n34
  n33 -->|Depends on| n5
  n33 -->|Depends on| n3
  n33 -->|Depends on| n31
  n35 -->|Depends on| n32
  n36 -->|Verifies| n6
  n36 -->|Verifies| n7
  n36 -->|Verifies| n35
  n36 -->|In| n34
  n36 -->|Depends on| n6
  n36 -->|Depends on| n7
  n36 -->|Depends on| n30
  n36 -->|Depends on| n31
  n37 -->|Serves| n14
  n37 -->|Applied by| n22
  n37 -->|Applied by| n24
  n37 -->|Applied by| n23
  n38 -->|Serves| n14
  n39 -->|Serves| n14
  n40 -->|Serves| n14
  n41 -->|Ships| n47
  n41 -->|Follows the policy| n48
  n42 -->|Serves| n14
  n44 -->|Runs elsewhere| n41
  n44 -->|Its writer's settings| n43
  n45 -->|Serves| n14
  n46 -->|Ships| n44
  n48 -->|Its obligations| n39
  n48 -->|Its obligations| n45
  n48 -->|Its obligations| n40
  n48 -->|Its obligations| n42
  n48 -->|Its obligations| n38
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
