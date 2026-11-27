# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph appearance["Documents · Appearance"]
    n0["Palette<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Documents · HTML"]
    n1["Escaped text<br/><small>Syntax element</small>"]:::held
    n2["Attributes<br/><small>Syntax element</small>"]:::held
    n3["HTML element<br/><small>Syntax element</small>"]:::held
    n4["End tag<br/><small>Syntax element</small>"]:::held
    n5["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n6["Start tag<br/><small>Syntax element</small>"]:::held
    n7["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph language["Documents · Language"]
    n8["Dates<br/><small>Function</small>"]:::held
    n9["The language of the documents<br/><small>Port</small>"]:::neutral
    n10["Lists<br/><small>Function</small>"]:::held
    n11["How a number is written<br/><small>Decision</small>"]:::neutral
    n12["Punctuation<br/><small>Function</small>"]:::held
    n13["Values with their units<br/><small>Function</small>"]:::held
    n14["The language of the library's words<br/><small>Decision</small>"]:::neutral
  end
  subgraph markdown["Documents · Markdown"]
    n15["Anchor<br/><small>Syntax element</small>"]:::held
    n16["Backtick string<br/><small>Syntax element</small>"]:::held
    n17["Blank line<br/><small>Syntax element</small>"]:::held
    n18["Block quote<br/><small>Syntax element</small>"]:::held
    n19["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n20["Code block<br/><small>Syntax element</small>"]:::held
    n21["Code span<br/><small>Syntax element</small>"]:::held
    n22["CommonMark<br/><small>Standard</small>"]:::neutral
    n23["Collapsible block<br/><small>Syntax element</small>"]:::held
    n24["Emphasis<br/><small>Syntax element</small>"]:::held
    n25["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n26["Heading<br/><small>Syntax element</small>"]:::held
    n27["Link<br/><small>Syntax element</small>"]:::held
    n28["List item<br/><small>Syntax element</small>"]:::held
    n29["Relative reference<br/><small>Syntax element</small>"]:::held
    n30["Small text<br/><small>Syntax element</small>"]:::held
    n31["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n32["Table<br/><small>Syntax element</small>"]:::held
    n33["Table cell<br/><small>Syntax element</small>"]:::held
    n34["Delimiter row<br/><small>Syntax element</small>"]:::held
    n35["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph mermaid["Documents · Mermaid"]
    n36["Class definition<br/><small>Syntax element</small>"]:::held
    n37["Flowchart<br/><small>Syntax element</small>"]:::held
    n38["Gantt chart<br/><small>Syntax element</small>"]:::held
    n39["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n40["Section<br/><small>Syntax element</small>"]:::held
    n41["Task<br/><small>Syntax element</small>"]:::held
    n42["Mermaid<br/><small>Standard</small>"]:::neutral
    n43["Label<br/><small>Syntax element</small>"]:::held
    n44["Link<br/><small>Syntax element</small>"]:::held
    n45["Node<br/><small>Syntax element</small>"]:::held
    n46["Milestone<br/><small>Syntax element</small>"]:::held
    n47["Node style<br/><small>Syntax element</small>"]:::held
    n48["Style properties<br/><small>Syntax element</small>"]:::held
    n49["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph packages["Documents · Packages"]
    n50["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n51["Trame<br/><small>Package</small>"]:::neutral
    n52["The people of the repository<br/><small>Package</small>"]:::neutral
    n53["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Documents · Product"]
    n54["Documents rendered once, for every project<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Documents · Releases"]
    n55["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n56["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Documents · Rendering"]
    n57["Common rendering<br/><small>Function</small>"]:::held
    n58["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n59["Rendering of the files<br/><small>Function</small>"]:::held
    n60["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n61["Markdown writer<br/><small>Function</small>"]:::held
    n62["Mermaid diagrams<br/><small>Function</small>"]:::held
    n63["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n64["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n65["Plain text writer<br/><small>Function</small>"]:::held
    n66["The renderer<br/><small>Function</small>"]:::held
    n67["Words of the renderers<br/><small>Message catalog</small>"]:::neutral
    n68["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n69["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n70["Rendering in the terminal<br/><small>Function</small>"]:::held
    n71["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n72["Figures as text<br/><small>Function</small>"]:::held
    n73["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
  end
  subgraph samples["Documents · Samples"]
    n74["The documents the scenarios render<br/><small>Decision</small>"]:::neutral
  end
  subgraph scenarios["Documents · Scenarios"]
    n75["The documents, rendered<br/><small>Scenario</small>"]:::held
    n76["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n77["What the scenarios expect<br/><small>Decision</small>"]:::neutral
    n78["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n79["Files in Markdown<br/><small>Technical choice</small>"]:::held
    n80["The scenarios render as a project does<br/><small>Architecture decision</small>"]:::held
    n81["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n82["Read by the engine<br/><small>Technical choice</small>"]:::held
    n83["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n84["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n85["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n86["Figures at a terminal, as text<br/><small>Technical choice</small>"]:::held
    n87["The terminal in text<br/><small>Technical choice</small>"]:::held
    n88["Test<br/><small>Environment</small>"]:::neutral
    n89["The documents speak the engine's language<br/><small>Architecture decision</small>"]:::held
    n90["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n91["Its code verified<br/><small>Obligation</small>"]:::neutral
    n92["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n93["The next version<br/><small>Shipment</small>"]:::unknown
    n94["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n95["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n96["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n97["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n98["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n99["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n100["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph text["Documents · Terminal text"]
    n101["Box drawing<br/><small>Standard</small>"]:::neutral
    n102["Code lines<br/><small>Syntax element</small>"]:::held
    n103["Columns<br/><small>Syntax element</small>"]:::held
    n104["Item line<br/><small>Syntax element</small>"]:::held
    n105["Padded cell<br/><small>Syntax element</small>"]:::held
    n106["Path step<br/><small>Syntax element</small>"]:::held
    n107["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n108["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n109["Terminal text<br/><small>Decision</small>"]:::neutral
    n110["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  n3 -->|Depends on| n6
  n3 -->|Depends on| n4
  n5 -->|Depends on| n3
  n6 -->|Depends on| n2
  n7 -->|Depends on| n2
  n8 -->|Serves| n54
  n8 -->|Depends on| n9
  n10 -->|Serves| n54
  n10 -->|Depends on| n9
  n12 -->|Serves| n54
  n12 -->|Depends on| n9
  n13 -->|Serves| n54
  n13 -->|Depends on| n11
  n15 -->|Depends on| n3
  n16 -->|Defined by| n22
  n16 -->|Depends on| n22
  n17 -->|Defined by| n22
  n17 -->|Depends on| n22
  n18 -->|Defined by| n22
  n18 -->|Depends on| n22
  n19 -->|Defined by| n22
  n19 -->|Depends on| n22
  n19 -->|Depends on| n17
  n20 -->|Defined by| n22
  n20 -->|Depends on| n22
  n20 -->|Depends on| n16
  n21 -->|Defined by| n22
  n21 -->|Depends on| n22
  n21 -->|Depends on| n16
  n23 -->|Depends on| n6
  n23 -->|Depends on| n4
  n23 -->|Depends on| n3
  n23 -->|Depends on| n17
  n24 -->|Defined by| n22
  n24 -->|Depends on| n22
  n26 -->|Defined by| n22
  n26 -->|Depends on| n22
  n27 -->|Defined by| n22
  n27 -->|Depends on| n22
  n28 -->|Defined by| n22
  n28 -->|Depends on| n22
  n30 -->|Depends on| n3
  n31 -->|Defined by| n22
  n31 -->|Depends on| n22
  n32 -->|Defined by| n25
  n32 -->|Depends on| n25
  n32 -->|Depends on| n35
  n32 -->|Depends on| n34
  n33 -->|Defined by| n25
  n33 -->|Depends on| n25
  n33 -->|Depends on| n22
  n34 -->|Defined by| n25
  n34 -->|Depends on| n25
  n35 -->|Defined by| n25
  n35 -->|Depends on| n25
  n35 -->|Depends on| n22
  n36 -->|Defined by| n42
  n36 -->|Depends on| n42
  n36 -->|Depends on| n48
  n37 -->|Defined by| n42
  n37 -->|Depends on| n42
  n38 -->|Defined by| n42
  n38 -->|Depends on| n42
  n39 -->|Defined by| n42
  n39 -->|Depends on| n42
  n40 -->|Defined by| n42
  n40 -->|Depends on| n42
  n40 -->|Depends on| n39
  n41 -->|Defined by| n42
  n41 -->|Depends on| n42
  n41 -->|Depends on| n39
  n43 -->|Defined by| n42
  n43 -->|Depends on| n42
  n44 -->|Defined by| n42
  n44 -->|Depends on| n42
  n44 -->|Depends on| n43
  n45 -->|Defined by| n42
  n45 -->|Depends on| n42
  n45 -->|Depends on| n43
  n46 -->|Defined by| n42
  n46 -->|Depends on| n42
  n46 -->|Depends on| n41
  n47 -->|Defined by| n42
  n47 -->|Depends on| n42
  n47 -->|Depends on| n48
  n48 -->|Defined by| n42
  n48 -->|Depends on| n42
  n49 -->|Defined by| n42
  n49 -->|Depends on| n42
  n49 -->|Depends on| n43
  n50 -->|Serves| n54
  n51 -->|Serves| n54
  n52 -->|Serves| n54
  n53 -->|Serves| n54
  n55 -->|Serves| n54
  n56 -->|Serves| n54
  n57 -->|Serves| n54
  n57 -->|Depends on| n68
  n57 -->|Depends on| n8
  n57 -->|Depends on| n10
  n57 -->|Depends on| n67
  n57 -->|Depends on| n13
  n59 -->|Serves| n54
  n59 -->|Depends on| n66
  n59 -->|Depends on| n60
  n61 -->|Serves| n54
  n61 -->|Implements| n60
  n61 -->|Depends on| n58
  n61 -->|Depends on| n73
  n61 -->|Depends on| n12
  n61 -->|Depends on| n19
  n61 -->|Depends on| n26
  n61 -->|Depends on| n28
  n61 -->|Depends on| n18
  n61 -->|Depends on| n20
  n61 -->|Depends on| n24
  n61 -->|Depends on| n31
  n61 -->|Depends on| n21
  n61 -->|Depends on| n27
  n61 -->|Depends on| n29
  n61 -->|Depends on| n33
  n61 -->|Depends on| n32
  n61 -->|Depends on| n15
  n61 -->|Depends on| n23
  n61 -->|Depends on| n67
  n62 -->|Serves| n54
  n62 -->|Implements| n58
  n62 -->|Depends on| n42
  n62 -->|Depends on| n63
  n62 -->|Depends on| n0
  n62 -->|Depends on| n30
  n62 -->|Depends on| n37
  n62 -->|Depends on| n45
  n62 -->|Depends on| n49
  n62 -->|Depends on| n44
  n62 -->|Depends on| n36
  n62 -->|Depends on| n47
  n62 -->|Depends on| n38
  n62 -->|Depends on| n40
  n62 -->|Depends on| n41
  n62 -->|Depends on| n46
  n62 -->|Depends on| n8
  n62 -->|Depends on| n67
  n64 -->|Serves| n54
  n64 -->|Applied by| n66
  n64 -->|Applied by| n59
  n64 -->|Applied by| n70
  n64 -->|Applied by| n61
  n64 -->|Applied by| n65
  n64 -->|Applied by| n62
  n64 -->|Applied by| n72
  n65 -->|Serves| n54
  n65 -->|Implements| n71
  n65 -->|Depends on| n69
  n65 -->|Depends on| n109
  n65 -->|Depends on| n107
  n65 -->|Depends on| n12
  n65 -->|Depends on| n105
  n65 -->|Depends on| n103
  n65 -->|Depends on| n104
  n65 -->|Depends on| n102
  n65 -->|Depends on| n108
  n65 -->|Depends on| n67
  n66 -->|Serves| n54
  n66 -->|Depends on| n57
  n66 -->|Depends on| n67
  n67 -->|Written in| n14
  n70 -->|Serves| n54
  n70 -->|Depends on| n66
  n70 -->|Depends on| n71
  n72 -->|Serves| n54
  n72 -->|Implements| n69
  n72 -->|Depends on| n57
  n72 -->|Depends on| n107
  n72 -->|Depends on| n12
  n72 -->|Depends on| n105
  n72 -->|Depends on| n103
  n72 -->|Depends on| n110
  n72 -->|Depends on| n106
  n72 -->|Depends on| n8
  n72 -->|Depends on| n67
  n75 -->|Verifies| n57
  n75 -->|Verifies| n66
  n75 -->|Verifies| n59
  n75 -->|Verifies| n70
  n75 -->|Verifies| n61
  n75 -->|Verifies| n65
  n75 -->|Verifies| n62
  n75 -->|Verifies| n72
  n75 -->|In| n88
  n75 -->|Depends on| n59
  n75 -->|Depends on| n70
  n75 -->|Depends on| n57
  n75 -->|Depends on| n74
  n75 -->|Depends on| n77
  n75 -->|Depends on| n85
  n78 -->|Chooses| n62
  n78 -->|In| n88
  n78 -->|Serves| n54
  n79 -->|Chooses| n61
  n79 -->|In| n88
  n79 -->|Serves| n54
  n80 -->|Serves| n54
  n80 -->|Applied by| n79
  n80 -->|Applied by| n78
  n80 -->|Applied by| n87
  n80 -->|Applied by| n86
  n80 -->|Applied by| n82
  n81 -->|Chooses| n90
  n81 -->|In| n88
  n81 -->|Serves| n54
  n82 -->|In| n88
  n82 -->|Serves| n54
  n83 -->|Verifies| n8
  n83 -->|Verifies| n10
  n83 -->|Verifies| n12
  n83 -->|Verifies| n13
  n83 -->|Verifies| n90
  n83 -->|In| n88
  n83 -->|Depends on| n8
  n83 -->|Depends on| n10
  n83 -->|Depends on| n12
  n83 -->|Depends on| n13
  n83 -->|Depends on| n84
  n83 -->|Depends on| n76
  n83 -->|Depends on| n85
  n85 -->|Written in| n14
  n86 -->|Chooses| n72
  n86 -->|In| n88
  n86 -->|Serves| n54
  n87 -->|Chooses| n65
  n87 -->|In| n88
  n87 -->|Serves| n54
  n89 -->|Serves| n54
  n89 -->|Applied by| n8
  n89 -->|Applied by| n10
  n89 -->|Applied by| n12
  n89 -->|Applied by| n13
  n89 -->|Applied by| n81
  n90 -->|Implements| n9
  n90 -->|Depends on| n84
  n91 -->|Serves| n54
  n92 -->|Serves| n54
  n93 -->|Ships| n99
  n93 -->|Follows the policy| n100
  n94 -->|Serves| n54
  n96 -->|Runs elsewhere| n93
  n96 -->|Its writer's settings| n95
  n97 -->|Serves| n54
  n98 -->|Ships| n96
  n100 -->|Its obligations| n91
  n100 -->|Its obligations| n97
  n100 -->|Its obligations| n92
  n100 -->|Its obligations| n94
  n102 -->|Defined by| n109
  n102 -->|Depends on| n109
  n103 -->|Defined by| n109
  n103 -->|Depends on| n109
  n103 -->|Depends on| n105
  n103 -->|Depends on| n107
  n104 -->|Defined by| n109
  n104 -->|Depends on| n109
  n105 -->|Defined by| n109
  n105 -->|Depends on| n109
  n105 -->|Depends on| n107
  n106 -->|Defined by| n109
  n106 -->|Depends on| n109
  n106 -->|Depends on| n101
  n108 -->|Defined by| n109
  n108 -->|Depends on| n109
  n110 -->|Defined by| n109
  n110 -->|Depends on| n109
  n110 -->|Depends on| n101
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
