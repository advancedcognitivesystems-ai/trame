# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

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
    n57["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n58["Version 0.3.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Documents · Rendering"]
    n59["Documents at a terminal<br/><small>Function</small>"]:::held
    n60["Documents in Markdown<br/><small>Function</small>"]:::held
    n61["Common rendering<br/><small>Function</small>"]:::held
    n62["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n63["Rendering of the files<br/><small>Function</small>"]:::held
    n64["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n65["Markdown writer<br/><small>Function</small>"]:::held
    n66["Mermaid diagrams<br/><small>Function</small>"]:::held
    n67["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n68["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n69["Plain text writer<br/><small>Function</small>"]:::held
    n70["The renderer<br/><small>Function</small>"]:::held
    n71["Words of the renderers<br/><small>Message catalog</small>"]:::neutral
    n72["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n73["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n74["Rendering in the terminal<br/><small>Function</small>"]:::held
    n75["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n76["Figures as text<br/><small>Function</small>"]:::held
    n77["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
  end
  subgraph samples["Documents · Samples"]
    n78["The documents the scenarios render<br/><small>Decision</small>"]:::neutral
  end
  subgraph scenarios["Documents · Scenarios"]
    n79["Answers written in their formats<br/><small>Scenario</small>"]:::held
    n80["The documents, rendered<br/><small>Scenario</small>"]:::held
    n81["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n82["What the scenarios expect<br/><small>Decision</small>"]:::neutral
    n83["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n84["Files in Markdown<br/><small>Technical choice</small>"]:::held
    n85["The formats of the answers<br/><small>Technical choice</small>"]:::held
    n86["The scenarios render as a project does<br/><small>Architecture decision</small>"]:::held
    n87["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n88["Read by the engine<br/><small>Technical choice</small>"]:::held
    n89["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n90["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n91["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n92["Figures at a terminal, as text<br/><small>Technical choice</small>"]:::held
    n93["The terminal in text<br/><small>Technical choice</small>"]:::held
    n94["Test<br/><small>Environment</small>"]:::neutral
    n95["The documents speak the engine's language<br/><small>Architecture decision</small>"]:::held
    n96["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n97["Its code verified<br/><small>Obligation</small>"]:::neutral
    n98["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n99["The next version<br/><small>Shipment</small>"]:::unknown
    n100["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n101["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n102["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n103["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n104["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n105["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n106["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph text["Documents · Terminal text"]
    n107["Box drawing<br/><small>Standard</small>"]:::neutral
    n108["Code lines<br/><small>Syntax element</small>"]:::held
    n109["Columns<br/><small>Syntax element</small>"]:::held
    n110["Item line<br/><small>Syntax element</small>"]:::held
    n111["Padded cell<br/><small>Syntax element</small>"]:::held
    n112["Path step<br/><small>Syntax element</small>"]:::held
    n113["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n114["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n115["Terminal text<br/><small>Decision</small>"]:::neutral
    n116["Tree branch<br/><small>Syntax element</small>"]:::held
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
  n58 -->|Serves| n54
  n59 -->|Serves| n54
  n59 -->|Depends on| n74
  n60 -->|Serves| n54
  n60 -->|Depends on| n63
  n61 -->|Serves| n54
  n61 -->|Depends on| n72
  n61 -->|Depends on| n8
  n61 -->|Depends on| n10
  n61 -->|Depends on| n71
  n61 -->|Depends on| n13
  n63 -->|Serves| n54
  n63 -->|Depends on| n70
  n63 -->|Depends on| n64
  n65 -->|Serves| n54
  n65 -->|Implements| n64
  n65 -->|Depends on| n62
  n65 -->|Depends on| n77
  n65 -->|Depends on| n12
  n65 -->|Depends on| n19
  n65 -->|Depends on| n26
  n65 -->|Depends on| n28
  n65 -->|Depends on| n18
  n65 -->|Depends on| n20
  n65 -->|Depends on| n24
  n65 -->|Depends on| n31
  n65 -->|Depends on| n21
  n65 -->|Depends on| n27
  n65 -->|Depends on| n29
  n65 -->|Depends on| n33
  n65 -->|Depends on| n32
  n65 -->|Depends on| n15
  n65 -->|Depends on| n23
  n65 -->|Depends on| n71
  n66 -->|Serves| n54
  n66 -->|Implements| n62
  n66 -->|Depends on| n42
  n66 -->|Depends on| n67
  n66 -->|Depends on| n0
  n66 -->|Depends on| n30
  n66 -->|Depends on| n37
  n66 -->|Depends on| n45
  n66 -->|Depends on| n49
  n66 -->|Depends on| n44
  n66 -->|Depends on| n36
  n66 -->|Depends on| n47
  n66 -->|Depends on| n38
  n66 -->|Depends on| n40
  n66 -->|Depends on| n41
  n66 -->|Depends on| n46
  n66 -->|Depends on| n8
  n66 -->|Depends on| n71
  n68 -->|Serves| n54
  n68 -->|Applied by| n70
  n68 -->|Applied by| n63
  n68 -->|Applied by| n74
  n68 -->|Applied by| n65
  n68 -->|Applied by| n69
  n68 -->|Applied by| n66
  n68 -->|Applied by| n76
  n69 -->|Serves| n54
  n69 -->|Implements| n75
  n69 -->|Depends on| n73
  n69 -->|Depends on| n115
  n69 -->|Depends on| n113
  n69 -->|Depends on| n12
  n69 -->|Depends on| n111
  n69 -->|Depends on| n109
  n69 -->|Depends on| n110
  n69 -->|Depends on| n108
  n69 -->|Depends on| n114
  n69 -->|Depends on| n71
  n70 -->|Serves| n54
  n70 -->|Depends on| n61
  n70 -->|Depends on| n71
  n71 -->|Written in| n14
  n74 -->|Serves| n54
  n74 -->|Depends on| n70
  n74 -->|Depends on| n75
  n76 -->|Serves| n54
  n76 -->|Implements| n73
  n76 -->|Depends on| n61
  n76 -->|Depends on| n113
  n76 -->|Depends on| n12
  n76 -->|Depends on| n111
  n76 -->|Depends on| n109
  n76 -->|Depends on| n116
  n76 -->|Depends on| n112
  n76 -->|Depends on| n8
  n76 -->|Depends on| n71
  n79 -->|Verifies| n59
  n79 -->|Verifies| n60
  n79 -->|In| n94
  n79 -->|Depends on| n61
  n79 -->|Depends on| n78
  n79 -->|Depends on| n82
  n79 -->|Depends on| n91
  n80 -->|Verifies| n61
  n80 -->|Verifies| n70
  n80 -->|Verifies| n63
  n80 -->|Verifies| n74
  n80 -->|Verifies| n65
  n80 -->|Verifies| n69
  n80 -->|Verifies| n66
  n80 -->|Verifies| n76
  n80 -->|In| n94
  n80 -->|Depends on| n63
  n80 -->|Depends on| n74
  n80 -->|Depends on| n61
  n80 -->|Depends on| n78
  n80 -->|Depends on| n82
  n80 -->|Depends on| n91
  n83 -->|Chooses| n66
  n83 -->|In| n94
  n83 -->|Serves| n54
  n84 -->|Chooses| n65
  n84 -->|In| n94
  n84 -->|Serves| n54
  n85 -->|Chooses| n59
  n85 -->|Chooses| n60
  n85 -->|In| n94
  n85 -->|Serves| n54
  n86 -->|Serves| n54
  n86 -->|Applied by| n84
  n86 -->|Applied by| n83
  n86 -->|Applied by| n93
  n86 -->|Applied by| n92
  n86 -->|Applied by| n88
  n86 -->|Applied by| n85
  n87 -->|Chooses| n96
  n87 -->|In| n94
  n87 -->|Serves| n54
  n88 -->|In| n94
  n88 -->|Serves| n54
  n89 -->|Verifies| n8
  n89 -->|Verifies| n10
  n89 -->|Verifies| n12
  n89 -->|Verifies| n13
  n89 -->|Verifies| n96
  n89 -->|In| n94
  n89 -->|Depends on| n8
  n89 -->|Depends on| n10
  n89 -->|Depends on| n12
  n89 -->|Depends on| n13
  n89 -->|Depends on| n90
  n89 -->|Depends on| n81
  n89 -->|Depends on| n91
  n91 -->|Written in| n14
  n92 -->|Chooses| n76
  n92 -->|In| n94
  n92 -->|Serves| n54
  n93 -->|Chooses| n69
  n93 -->|In| n94
  n93 -->|Serves| n54
  n95 -->|Serves| n54
  n95 -->|Applied by| n8
  n95 -->|Applied by| n10
  n95 -->|Applied by| n12
  n95 -->|Applied by| n13
  n95 -->|Applied by| n87
  n96 -->|Implements| n9
  n96 -->|Depends on| n90
  n97 -->|Serves| n54
  n98 -->|Serves| n54
  n99 -->|Ships| n105
  n99 -->|Follows the policy| n106
  n100 -->|Serves| n54
  n102 -->|Runs elsewhere| n99
  n102 -->|Its writer's settings| n101
  n103 -->|Serves| n54
  n104 -->|Ships| n102
  n106 -->|Its obligations| n97
  n106 -->|Its obligations| n103
  n106 -->|Its obligations| n98
  n106 -->|Its obligations| n100
  n108 -->|Defined by| n115
  n108 -->|Depends on| n115
  n109 -->|Defined by| n115
  n109 -->|Depends on| n115
  n109 -->|Depends on| n111
  n109 -->|Depends on| n113
  n110 -->|Defined by| n115
  n110 -->|Depends on| n115
  n111 -->|Defined by| n115
  n111 -->|Depends on| n115
  n111 -->|Depends on| n113
  n112 -->|Defined by| n115
  n112 -->|Depends on| n115
  n112 -->|Depends on| n107
  n114 -->|Defined by| n115
  n114 -->|Depends on| n115
  n116 -->|Defined by| n115
  n116 -->|Depends on| n115
  n116 -->|Depends on| n107
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
