# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph commands["Commands · Commands"]
    n0["Build<br/><small>Entry point</small>"]:::held
    n1["Two builds compared<br/><small>Function</small>"]:::held
    n2["The library's commands<br/><small>Component</small>"]:::neutral
    n3["What the commands say<br/><small>Message catalog</small>"]:::neutral
    n4["Dev<br/><small>Entry point</small>"]:::held
    n5["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n6["The port of trame dev<br/><small>Decision</small>"]:::neutral
    n7["Export<br/><small>Entry point</small>"]:::held
    n8["Payload<br/><small>Entry point</small>"]:::held
    n9["What the last change changed<br/><small>Function</small>"]:::held
    n10["Plan<br/><small>Entry point</small>"]:::held
    n11["A date's documents as today's<br/><small>Function</small>"]:::held
    n12["Snapshot<br/><small>Entry point</small>"]:::held
    n13["View<br/><small>Entry point</small>"]:::held
    n14["Why a view gives no document, said<br/><small>Function</small>"]:::held
    n15["The language the commands speak<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Commands · Packages"]
    n16["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n17["The renderers of documents<br/><small>Package</small>"]:::neutral
    n18["Trame<br/><small>Package</small>"]:::neutral
    n19["The people of the repository<br/><small>Package</small>"]:::neutral
    n20["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Commands · Product"]
    n21["Commands every project runs, written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Commands · Releases"]
    n22["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n23["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n24["Version 0.1.2<br/><small>Release</small>"]:::neutral
    n25["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n26["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n27["Version 0.4.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n28["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n29["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n30["trame dev serves the page<br/><small>Scenario</small>"]:::held
    n31["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n32["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n33["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n34["The page, as a project makes it<br/><small>Technical choice</small>"]:::held
    n35["A page exported<br/><small>Scenario</small>"]:::held
    n36["The page's files and its reading, as on a machine<br/><small>Technical choice</small>"]:::held
    n37["The small project's page<br/><small>Decision</small>"]:::neutral
    n38["A payload of the graph<br/><small>Scenario</small>"]:::held
    n39["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n40["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n41["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n42["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n43["Played on a small project<br/><small>Technical choice</small>"]:::held
    n44["Views the scenarios ask for<br/><small>Decision</small>"]:::neutral
    n45["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n46["Served<br/><small>Environment</small>"]:::neutral
    n47["The small project, served<br/><small>Technical choice</small>"]:::held
    n48["The small project<br/><small>Decision</small>"]:::neutral
    n49["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n50["Test<br/><small>Environment</small>"]:::neutral
    n51["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n52["The small project, served<br/><small>Implementation</small>"]:::held
    n53["A view answers its document<br/><small>Scenario</small>"]:::held
    n54["Waiting as a person would<br/><small>Technical choice</small>"]:::held
    n55["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n56["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n57["Its code verified<br/><small>Obligation</small>"]:::neutral
    n58["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n59["The next version<br/><small>Shipment</small>"]:::unknown
    n60["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n61["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n62["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n63["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n64["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n65["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n66["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n21
  n0 -->|Part of| n2
  n0 -->|Depends on| n3
  n1 -->|Serves| n21
  n1 -->|Depends on| n3
  n3 -->|Written in| n15
  n3 -->|Depends on| n15
  n4 -->|Serves| n21
  n4 -->|Part of| n2
  n4 -->|Depends on| n9
  n4 -->|Depends on| n6
  n4 -->|Depends on| n5
  n4 -->|Depends on| n3
  n7 -->|Serves| n21
  n7 -->|Part of| n2
  n7 -->|Depends on| n3
  n8 -->|Serves| n21
  n8 -->|Part of| n2
  n8 -->|Depends on| n11
  n9 -->|Serves| n21
  n9 -->|Depends on| n3
  n10 -->|Serves| n21
  n10 -->|Part of| n2
  n10 -->|Depends on| n1
  n10 -->|Depends on| n3
  n11 -->|Serves| n21
  n12 -->|Serves| n21
  n12 -->|Part of| n2
  n12 -->|Depends on| n3
  n13 -->|Serves| n21
  n13 -->|Part of| n2
  n13 -->|Depends on| n14
  n14 -->|Serves| n21
  n14 -->|Depends on| n3
  n16 -->|Serves| n21
  n17 -->|Serves| n21
  n18 -->|Serves| n21
  n19 -->|Serves| n21
  n20 -->|Serves| n21
  n22 -->|Serves| n21
  n23 -->|Serves| n21
  n24 -->|Serves| n21
  n25 -->|Serves| n21
  n26 -->|Serves| n21
  n27 -->|Serves| n21
  n28 -->|Verifies| n0
  n28 -->|Verifies| n51
  n28 -->|In| n50
  n28 -->|Depends on| n0
  n28 -->|Depends on| n3
  n28 -->|Depends on| n45
  n29 -->|In| n50
  n29 -->|Serves| n21
  n30 -->|Verifies| n4
  n30 -->|Verifies| n52
  n30 -->|Verifies| n51
  n30 -->|In| n46
  n30 -->|Depends on| n4
  n30 -->|Depends on| n37
  n30 -->|Depends on| n3
  n30 -->|Depends on| n45
  n31 -->|In| n50
  n31 -->|In| n46
  n31 -->|Serves| n21
  n32 -->|In| n50
  n32 -->|In| n46
  n32 -->|Serves| n21
  n33 -->|In| n50
  n33 -->|In| n46
  n33 -->|Serves| n21
  n34 -->|In| n50
  n34 -->|In| n46
  n34 -->|Serves| n21
  n35 -->|Verifies| n7
  n35 -->|Verifies| n52
  n35 -->|Verifies| n51
  n35 -->|In| n46
  n35 -->|Depends on| n7
  n35 -->|Depends on| n3
  n35 -->|Depends on| n45
  n36 -->|In| n50
  n36 -->|In| n46
  n36 -->|Serves| n21
  n38 -->|Verifies| n8
  n38 -->|Verifies| n11
  n38 -->|Verifies| n9
  n38 -->|Verifies| n51
  n38 -->|In| n50
  n38 -->|Depends on| n8
  n38 -->|Depends on| n9
  n38 -->|Depends on| n3
  n38 -->|Depends on| n45
  n39 -->|Verifies| n10
  n39 -->|Verifies| n1
  n39 -->|In| n50
  n39 -->|Depends on| n10
  n39 -->|Depends on| n3
  n39 -->|Depends on| n45
  n40 -->|Verifies| n10
  n40 -->|Verifies| n1
  n40 -->|Verifies| n51
  n40 -->|In| n50
  n40 -->|Depends on| n10
  n40 -->|Depends on| n3
  n40 -->|Depends on| n45
  n41 -->|Verifies| n10
  n41 -->|In| n50
  n41 -->|Depends on| n10
  n41 -->|Depends on| n3
  n41 -->|Depends on| n45
  n42 -->|Serves| n21
  n42 -->|Applied by| n29
  n42 -->|Applied by| n43
  n43 -->|Chooses| n51
  n43 -->|In| n50
  n43 -->|In| n46
  n43 -->|Serves| n21
  n45 -->|Written in| n15
  n47 -->|Chooses| n52
  n47 -->|In| n46
  n47 -->|Serves| n21
  n49 -->|Verifies| n12
  n49 -->|Verifies| n51
  n49 -->|In| n50
  n49 -->|Depends on| n12
  n49 -->|Depends on| n3
  n49 -->|Depends on| n45
  n51 -->|Depends on| n48
  n52 -->|Depends on| n37
  n53 -->|Verifies| n13
  n53 -->|Verifies| n14
  n53 -->|Verifies| n51
  n53 -->|In| n50
  n53 -->|Depends on| n13
  n53 -->|Depends on| n14
  n53 -->|Depends on| n44
  n53 -->|Depends on| n45
  n54 -->|In| n50
  n54 -->|In| n46
  n54 -->|Serves| n21
  n55 -->|Serves| n21
  n55 -->|Applied by| n31
  n55 -->|Applied by| n33
  n55 -->|Applied by| n32
  n55 -->|Applied by| n34
  n55 -->|Applied by| n36
  n55 -->|Applied by| n54
  n55 -->|Applied by| n47
  n56 -->|Serves| n21
  n57 -->|Serves| n21
  n58 -->|Serves| n21
  n59 -->|Ships| n65
  n59 -->|Follows the policy| n66
  n60 -->|Serves| n21
  n62 -->|Runs elsewhere| n59
  n62 -->|Its writer's settings| n61
  n63 -->|Serves| n21
  n64 -->|Ships| n62
  n66 -->|Its obligations| n57
  n66 -->|Its obligations| n63
  n66 -->|Its obligations| n58
  n66 -->|Its obligations| n60
  n66 -->|Its obligations| n56
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
