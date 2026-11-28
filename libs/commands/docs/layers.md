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
    n28["Version 0.5.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Commands · Scenarios"]
    n29["A build writes the documents and the graph<br/><small>Scenario</small>"]:::held
    n30["Compiled by the engine that plays them<br/><small>Technical choice</small>"]:::held
    n31["trame dev serves the page<br/><small>Scenario</small>"]:::held
    n32["Files in Markdown, the terminal in text<br/><small>Technical choice</small>"]:::held
    n33["In the language of libs/documents' scenarios<br/><small>Technical choice</small>"]:::held
    n34["Figures in Mermaid and in text<br/><small>Technical choice</small>"]:::held
    n35["The page, as a project makes it<br/><small>Technical choice</small>"]:::held
    n36["A page exported<br/><small>Scenario</small>"]:::held
    n37["The page's files and its reading, as on a machine<br/><small>Technical choice</small>"]:::held
    n38["The small project's page<br/><small>Decision</small>"]:::neutral
    n39["A payload of the graph<br/><small>Scenario</small>"]:::held
    n40["After a build, nothing changes<br/><small>Scenario</small>"]:::held
    n41["A plan says what a build would change<br/><small>Scenario</small>"]:::held
    n42["Without a build, a plan says so<br/><small>Scenario</small>"]:::held
    n43["A command is played on a real graph<br/><small>Architecture decision</small>"]:::held
    n44["Played on a small project<br/><small>Technical choice</small>"]:::held
    n45["Views the scenarios ask for<br/><small>Decision</small>"]:::neutral
    n46["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n47["Served<br/><small>Environment</small>"]:::neutral
    n48["The small project, served<br/><small>Technical choice</small>"]:::held
    n49["The small project<br/><small>Decision</small>"]:::neutral
    n50["A snapshot writes the graph in force<br/><small>Scenario</small>"]:::held
    n51["Test<br/><small>Environment</small>"]:::neutral
    n52["Which project the scenarios compile<br/><small>Function</small>"]:::held
    n53["The small project, served<br/><small>Implementation</small>"]:::held
    n54["A view answers its document<br/><small>Scenario</small>"]:::held
    n55["Waiting as a person would<br/><small>Technical choice</small>"]:::held
    n56["A command writes documents as a project does<br/><small>Architecture decision</small>"]:::held
  end
  subgraph sdlc["Commands · SDLC"]
    n57["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n58["Its code verified<br/><small>Obligation</small>"]:::neutral
    n59["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n60["The next version<br/><small>Shipment</small>"]:::unknown
    n61["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n62["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n63["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n64["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n65["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n66["The commands of every project<br/><small>Artefact</small>"]:::unknown
    n67["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n28 -->|Serves| n21
  n29 -->|Verifies| n0
  n29 -->|Verifies| n52
  n29 -->|In| n51
  n29 -->|Depends on| n0
  n29 -->|Depends on| n3
  n29 -->|Depends on| n46
  n30 -->|In| n51
  n30 -->|Serves| n21
  n31 -->|Verifies| n4
  n31 -->|Verifies| n53
  n31 -->|Verifies| n52
  n31 -->|In| n47
  n31 -->|Depends on| n4
  n31 -->|Depends on| n38
  n31 -->|Depends on| n3
  n31 -->|Depends on| n46
  n32 -->|In| n51
  n32 -->|In| n47
  n32 -->|Serves| n21
  n33 -->|In| n51
  n33 -->|In| n47
  n33 -->|Serves| n21
  n34 -->|In| n51
  n34 -->|In| n47
  n34 -->|Serves| n21
  n35 -->|In| n51
  n35 -->|In| n47
  n35 -->|Serves| n21
  n36 -->|Verifies| n7
  n36 -->|Verifies| n53
  n36 -->|Verifies| n52
  n36 -->|In| n47
  n36 -->|Depends on| n7
  n36 -->|Depends on| n3
  n36 -->|Depends on| n46
  n37 -->|In| n51
  n37 -->|In| n47
  n37 -->|Serves| n21
  n39 -->|Verifies| n8
  n39 -->|Verifies| n11
  n39 -->|Verifies| n9
  n39 -->|Verifies| n52
  n39 -->|In| n51
  n39 -->|Depends on| n8
  n39 -->|Depends on| n9
  n39 -->|Depends on| n3
  n39 -->|Depends on| n46
  n40 -->|Verifies| n10
  n40 -->|Verifies| n1
  n40 -->|In| n51
  n40 -->|Depends on| n10
  n40 -->|Depends on| n3
  n40 -->|Depends on| n46
  n41 -->|Verifies| n10
  n41 -->|Verifies| n1
  n41 -->|Verifies| n52
  n41 -->|In| n51
  n41 -->|Depends on| n10
  n41 -->|Depends on| n3
  n41 -->|Depends on| n46
  n42 -->|Verifies| n10
  n42 -->|In| n51
  n42 -->|Depends on| n10
  n42 -->|Depends on| n3
  n42 -->|Depends on| n46
  n43 -->|Serves| n21
  n43 -->|Applied by| n30
  n43 -->|Applied by| n44
  n44 -->|Chooses| n52
  n44 -->|In| n51
  n44 -->|In| n47
  n44 -->|Serves| n21
  n46 -->|Written in| n15
  n48 -->|Chooses| n53
  n48 -->|In| n47
  n48 -->|Serves| n21
  n50 -->|Verifies| n12
  n50 -->|Verifies| n52
  n50 -->|In| n51
  n50 -->|Depends on| n12
  n50 -->|Depends on| n3
  n50 -->|Depends on| n46
  n52 -->|Depends on| n49
  n53 -->|Depends on| n38
  n54 -->|Verifies| n13
  n54 -->|Verifies| n14
  n54 -->|Verifies| n52
  n54 -->|In| n51
  n54 -->|Depends on| n13
  n54 -->|Depends on| n14
  n54 -->|Depends on| n45
  n54 -->|Depends on| n46
  n55 -->|In| n51
  n55 -->|In| n47
  n55 -->|Serves| n21
  n56 -->|Serves| n21
  n56 -->|Applied by| n32
  n56 -->|Applied by| n34
  n56 -->|Applied by| n33
  n56 -->|Applied by| n35
  n56 -->|Applied by| n37
  n56 -->|Applied by| n55
  n56 -->|Applied by| n48
  n57 -->|Serves| n21
  n58 -->|Serves| n21
  n59 -->|Serves| n21
  n60 -->|Ships| n66
  n60 -->|Follows the policy| n67
  n61 -->|Serves| n21
  n63 -->|Runs elsewhere| n60
  n63 -->|Its writer's settings| n62
  n64 -->|Serves| n21
  n65 -->|Ships| n63
  n67 -->|Its obligations| n58
  n67 -->|Its obligations| n64
  n67 -->|Its obligations| n59
  n67 -->|Its obligations| n61
  n67 -->|Its obligations| n57
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
