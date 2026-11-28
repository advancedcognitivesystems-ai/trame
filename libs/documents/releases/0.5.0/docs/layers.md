# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph appearance["Documents · Appearance"]
    n0["Drawing of the explorer<br/><small>Decision</small>"]:::neutral
    n1["Drawing of a graph<br/><small>Decision</small>"]:::neutral
    n2["Legend of a graph<br/><small>Decision</small>"]:::neutral
    n3["Motion<br/><small>Decision</small>"]:::neutral
    n4["Narrow screen<br/><small>Decision</small>"]:::neutral
    n5["Opacities<br/><small>Decision</small>"]:::neutral
    n6["Page layout<br/><small>Decision</small>"]:::neutral
    n7["Palette<br/><small>Decision</small>"]:::neutral
    n8["Radii<br/><small>Decision</small>"]:::neutral
    n9["Spacing<br/><small>Decision</small>"]:::neutral
    n10["Strokes<br/><small>Decision</small>"]:::neutral
    n11["Drawing of a timeline<br/><small>Decision</small>"]:::neutral
    n12["Type scale<br/><small>Decision</small>"]:::neutral
    n13["Typography<br/><small>Decision</small>"]:::neutral
  end
  subgraph browser["Documents · The page in a browser"]
    n14["Amendments sent to trame dev<br/><small>Implementation</small>"]:::neutral
    n15["The browser's gzip<br/><small>Implementation</small>"]:::neutral
    n16["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::neutral
    n17["Local storage<br/><small>Implementation</small>"]:::neutral
    n18["The browser's window<br/><small>Implementation</small>"]:::neutral
    n19["Decompression<br/><small>Port</small>"]:::neutral
    n20["Explorer of a graph<br/><small>Function</small>"]:::held
    n21["Feed of the graph<br/><small>Port</small>"]:::neutral
    n22["Amendments from the page<br/><small>Port</small>"]:::neutral
    n23["The page in a browser<br/><small>Component</small>"]:::neutral
    n24["Memory of the page<br/><small>Port</small>"]:::neutral
    n25["Window of the page<br/><small>Port</small>"]:::neutral
    n26["Show the graph<br/><small>Entry point</small>"]:::unknown
    n27["The page is assembled<br/><small>Architecture decision</small>"]:::held
  end
  subgraph html["Documents · HTML"]
    n28["Attribute presence<br/><small>Syntax element</small>"]:::held
    n29["Attribute selector<br/><small>Syntax element</small>"]:::held
    n30["Class selector<br/><small>Syntax element</small>"]:::held
    n31["Declaration<br/><small>Syntax element</small>"]:::held
    n32["Rule<br/><small>Syntax element</small>"]:::held
    n33["Variable<br/><small>Syntax element</small>"]:::held
    n34["Custom property<br/><small>Syntax element</small>"]:::held
    n35["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n36["Escaped text<br/><small>Syntax element</small>"]:::held
    n37["A global assigned<br/><small>Syntax element</small>"]:::held
    n38["Attributes<br/><small>Syntax element</small>"]:::held
    n39["Element over several lines<br/><small>Syntax element</small>"]:::held
    n40["HTML element<br/><small>Syntax element</small>"]:::held
    n41["End tag<br/><small>Syntax element</small>"]:::held
    n42["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n43["Start tag<br/><small>Syntax element</small>"]:::held
    n44["JSON in a script<br/><small>Syntax element</small>"]:::held
    n45["Media feature<br/><small>Syntax element</small>"]:::held
    n46["Media rule<br/><small>Syntax element</small>"]:::held
    n47["Negation<br/><small>Syntax element</small>"]:::held
    n48["Path data<br/><small>Syntax element</small>"]:::held
    n49["Script<br/><small>Syntax element</small>"]:::held
    n50["Selector list<br/><small>Syntax element</small>"]:::held
    n51["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph language["Documents · Language"]
    n52["Dates<br/><small>Function</small>"]:::held
    n53["The language of the documents<br/><small>Port</small>"]:::neutral
    n54["Lists<br/><small>Function</small>"]:::held
    n55["How a number is written<br/><small>Decision</small>"]:::neutral
    n56["Punctuation<br/><small>Function</small>"]:::held
    n57["Values with their units<br/><small>Function</small>"]:::held
    n58["The language of the library's words<br/><small>Decision</small>"]:::neutral
  end
  subgraph markdown["Documents · Markdown"]
    n59["Anchor<br/><small>Syntax element</small>"]:::held
    n60["Backtick string<br/><small>Syntax element</small>"]:::held
    n61["Blank line<br/><small>Syntax element</small>"]:::held
    n62["Block quote<br/><small>Syntax element</small>"]:::held
    n63["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n64["Code block<br/><small>Syntax element</small>"]:::held
    n65["Code span<br/><small>Syntax element</small>"]:::held
    n66["CommonMark<br/><small>Standard</small>"]:::neutral
    n67["Collapsible block<br/><small>Syntax element</small>"]:::held
    n68["Emphasis<br/><small>Syntax element</small>"]:::held
    n69["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n70["Heading<br/><small>Syntax element</small>"]:::held
    n71["Link<br/><small>Syntax element</small>"]:::held
    n72["List item<br/><small>Syntax element</small>"]:::held
    n73["Relative reference<br/><small>Syntax element</small>"]:::held
    n74["Small text<br/><small>Syntax element</small>"]:::held
    n75["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n76["Table<br/><small>Syntax element</small>"]:::held
    n77["Table cell<br/><small>Syntax element</small>"]:::held
    n78["Delimiter row<br/><small>Syntax element</small>"]:::held
    n79["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Documents · Documents in the page"]
    n80["Around the documents<br/><small>Decision</small>"]:::neutral
    n81["Documents in the page<br/><small>Decision</small>"]:::neutral
    n82["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n83["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Documents · Mermaid"]
    n84["Class definition<br/><small>Syntax element</small>"]:::held
    n85["Flowchart<br/><small>Syntax element</small>"]:::held
    n86["Gantt chart<br/><small>Syntax element</small>"]:::held
    n87["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n88["Section<br/><small>Syntax element</small>"]:::held
    n89["Task<br/><small>Syntax element</small>"]:::held
    n90["Mermaid<br/><small>Standard</small>"]:::neutral
    n91["Label<br/><small>Syntax element</small>"]:::held
    n92["Link<br/><small>Syntax element</small>"]:::held
    n93["Node<br/><small>Syntax element</small>"]:::held
    n94["Milestone<br/><small>Syntax element</small>"]:::held
    n95["Node style<br/><small>Syntax element</small>"]:::held
    n96["Style properties<br/><small>Syntax element</small>"]:::held
    n97["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph packages["Documents · Packages"]
    n98["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n99["Trame<br/><small>Package</small>"]:::neutral
    n100["The people of the repository<br/><small>Package</small>"]:::neutral
    n101["std<br/><small>Package</small>"]:::neutral
  end
  subgraph page["Documents · The page"]
    n102["Banner<br/><small>Syntax element</small>"]:::held
    n103["Brand<br/><small>Syntax element</small>"]:::held
    n104["State of the compilation<br/><small>Syntax element</small>"]:::held
    n105["Dates<br/><small>Syntax element</small>"]:::held
    n106["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n107["Head of the document<br/><small>Syntax element</small>"]:::held
    n108["Document picker<br/><small>Syntax element</small>"]:::held
    n109["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n110["Fonts<br/><small>Syntax element</small>"]:::held
    n111["Packing the graph<br/><small>Port</small>"]:::neutral
    n112["gzip, in base64<br/><small>Implementation</small>"]:::neutral
    n113["Logo<br/><small>Syntax element</small>"]:::held
    n114["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n115["Main area<br/><small>Syntax element</small>"]:::held
    n116["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n117["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n118["Navigation<br/><small>Syntax element</small>"]:::held
    n119["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n120["Page<br/><small>Function</small>"]:::held
    n121["Document of the page<br/><small>Syntax element</small>"]:::held
    n122["Regions of the page<br/><small>Decision</small>"]:::neutral
    n123["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n124["Where the page's style sheets are<br/><small>Decision</small>"]:::neutral
    n125["The page's style sheets<br/><small>Port</small>"]:::neutral
    n126["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n127["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n128["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n129["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n130["Style sheets beside the library<br/><small>Implementation</small>"]:::held
    n131["Shell<br/><small>Syntax element</small>"]:::held
    n132["Side bar<br/><small>Syntax element</small>"]:::held
    n133["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n134["Colours of a status<br/><small>Syntax element</small>"]:::held
    n135["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n136["Theme<br/><small>Syntax element</small>"]:::held
    n137["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph product["Documents · Product"]
    n138["Documents rendered once, for every project<br/><small>Goal</small>"]:::neutral
    n139["A graph shown in a page, for every project<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Documents · Releases"]
    n140["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n141["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n142["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n143["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n144["Version 0.4.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Documents · Rendering"]
    n145["Documents at a terminal<br/><small>Function</small>"]:::held
    n146["Documents in Markdown<br/><small>Function</small>"]:::held
    n147["Common rendering<br/><small>Function</small>"]:::held
    n148["Names of the documents<br/><small>Standard</small>"]:::neutral
    n149["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n150["Rendering of the files<br/><small>Function</small>"]:::held
    n151["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n152["HTML writer<br/><small>Function</small>"]:::held
    n153["Markdown writer<br/><small>Function</small>"]:::held
    n154["Mermaid diagrams<br/><small>Function</small>"]:::held
    n155["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n156["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n157["Figures of the page<br/><small>Port</small>"]:::neutral
    n158["Rendering in the page<br/><small>Function</small>"]:::held
    n159["Syntax of the page<br/><small>Port</small>"]:::neutral
    n160["Plain text writer<br/><small>Function</small>"]:::held
    n161["The renderer<br/><small>Function</small>"]:::held
    n162["Words of the renderers<br/><small>Message catalog</small>"]:::neutral
    n163["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n164["Figures in SVG<br/><small>Function</small>"]:::held
    n165["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n166["Rendering in the terminal<br/><small>Function</small>"]:::held
    n167["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n168["Figures as text<br/><small>Function</small>"]:::held
    n169["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
  end
  subgraph samples["Documents · Samples"]
    n170["The documents the scenarios render<br/><small>Decision</small>"]:::neutral
  end
  subgraph scenarios["Documents · Scenarios"]
    n171["Answers written in their formats<br/><small>Scenario</small>"]:::held
    n172["The documents in the page<br/><small>Scenario</small>"]:::held
    n173["The documents, rendered<br/><small>Scenario</small>"]:::held
    n174["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n175["What the scenarios expect<br/><small>Decision</small>"]:::neutral
    n176["What the page expects<br/><small>Decision</small>"]:::neutral
    n177["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n178["Files in Markdown<br/><small>Technical choice</small>"]:::held
    n179["The formats of the answers<br/><small>Technical choice</small>"]:::held
    n180["The scenarios render as a project does<br/><small>Architecture decision</small>"]:::held
    n181["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n182["Read by the engine<br/><small>Technical choice</small>"]:::held
    n183["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n184["A page asked for<br/><small>Decision</small>"]:::neutral
    n185["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n186["The page in HTML<br/><small>Technical choice</small>"]:::held
    n187["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n188["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n189["Style sheets read beside the library<br/><small>Technical choice</small>"]:::held
    n190["Figures at a terminal, as text<br/><small>Technical choice</small>"]:::held
    n191["The terminal in text<br/><small>Technical choice</small>"]:::held
    n192["Test<br/><small>Environment</small>"]:::neutral
    n193["The documents speak the engine's language<br/><small>Architecture decision</small>"]:::held
    n194["The explorer of a large graph<br/><small>Scenario</small>"]:::held
    n195["A page made<br/><small>Scenario</small>"]:::held
    n196["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n197["Its code verified<br/><small>Obligation</small>"]:::neutral
    n198["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n199["The next version<br/><small>Shipment</small>"]:::unknown
    n200["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n201["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n202["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n203["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n204["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n205["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n206["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph text["Documents · Terminal text"]
    n207["Box drawing<br/><small>Standard</small>"]:::neutral
    n208["Code lines<br/><small>Syntax element</small>"]:::held
    n209["Columns<br/><small>Syntax element</small>"]:::held
    n210["Item line<br/><small>Syntax element</small>"]:::held
    n211["Padded cell<br/><small>Syntax element</small>"]:::held
    n212["Path step<br/><small>Syntax element</small>"]:::held
    n213["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n214["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n215["Terminal text<br/><small>Decision</small>"]:::neutral
    n216["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  n14 -->|Implements| n22
  n14 -->|Depends on| n137
  n14 -->|Depends on| n106
  n15 -->|Implements| n19
  n15 -->|Depends on| n119
  n16 -->|Implements| n21
  n16 -->|Depends on| n137
  n16 -->|Depends on| n106
  n17 -->|Implements| n24
  n17 -->|Depends on| n137
  n18 -->|Implements| n25
  n18 -->|Depends on| n45
  n20 -->|Serves| n139
  n20 -->|Depends on| n137
  n20 -->|Depends on| n81
  n20 -->|Depends on| n83
  n20 -->|Depends on| n82
  n20 -->|Depends on| n0
  n20 -->|Depends on| n40
  n20 -->|Depends on| n43
  n20 -->|Depends on| n51
  n20 -->|Depends on| n48
  n20 -->|Depends on| n31
  n20 -->|Depends on| n36
  n20 -->|Depends on| n147
  n20 -->|Depends on| n127
  n20 -->|Depends on| n162
  n20 -->|Depends on| n56
  n26 -->|Serves| n139
  n26 -->|Part of| n23
  n26 -->|Depends on| n25
  n26 -->|Depends on| n24
  n26 -->|Depends on| n21
  n26 -->|Depends on| n19
  n26 -->|Depends on| n22
  n26 -->|Depends on| n20
  n26 -->|Depends on| n147
  n26 -->|Depends on| n137
  n26 -->|Depends on| n122
  n26 -->|Depends on| n128
  n26 -->|Depends on| n114
  n26 -->|Depends on| n81
  n26 -->|Depends on| n80
  n26 -->|Depends on| n82
  n26 -->|Depends on| n0
  n26 -->|Depends on| n148
  n26 -->|Depends on| n163
  n26 -->|Depends on| n56
  n26 -->|Depends on| n53
  n26 -->|Depends on| n40
  n26 -->|Depends on| n36
  n26 -->|Depends on| n29
  n26 -->|Depends on| n28
  n26 -->|Depends on| n50
  n26 -->|Depends on| n30
  n26 -->|Depends on| n127
  n27 -->|Serves| n139
  n27 -->|Applied by| n23
  n27 -->|Applied by| n20
  n34 -->|Depends on| n31
  n39 -->|Depends on| n43
  n39 -->|Depends on| n41
  n40 -->|Depends on| n43
  n40 -->|Depends on| n41
  n42 -->|Depends on| n40
  n43 -->|Depends on| n38
  n49 -->|Depends on| n40
  n51 -->|Depends on| n38
  n52 -->|Serves| n138
  n52 -->|Depends on| n53
  n54 -->|Serves| n138
  n54 -->|Depends on| n53
  n56 -->|Serves| n138
  n56 -->|Depends on| n53
  n57 -->|Serves| n138
  n57 -->|Depends on| n55
  n59 -->|Depends on| n40
  n60 -->|Defined by| n66
  n60 -->|Depends on| n66
  n61 -->|Defined by| n66
  n61 -->|Depends on| n66
  n62 -->|Defined by| n66
  n62 -->|Depends on| n66
  n63 -->|Defined by| n66
  n63 -->|Depends on| n66
  n63 -->|Depends on| n61
  n64 -->|Defined by| n66
  n64 -->|Depends on| n66
  n64 -->|Depends on| n60
  n65 -->|Defined by| n66
  n65 -->|Depends on| n66
  n65 -->|Depends on| n60
  n67 -->|Depends on| n43
  n67 -->|Depends on| n41
  n67 -->|Depends on| n40
  n67 -->|Depends on| n61
  n68 -->|Defined by| n66
  n68 -->|Depends on| n66
  n70 -->|Defined by| n66
  n70 -->|Depends on| n66
  n71 -->|Defined by| n66
  n71 -->|Depends on| n66
  n72 -->|Defined by| n66
  n72 -->|Depends on| n66
  n74 -->|Depends on| n40
  n75 -->|Defined by| n66
  n75 -->|Depends on| n66
  n76 -->|Defined by| n69
  n76 -->|Depends on| n69
  n76 -->|Depends on| n79
  n76 -->|Depends on| n78
  n77 -->|Defined by| n69
  n77 -->|Depends on| n69
  n77 -->|Depends on| n66
  n78 -->|Defined by| n69
  n78 -->|Depends on| n69
  n79 -->|Defined by| n69
  n79 -->|Depends on| n69
  n79 -->|Depends on| n66
  n84 -->|Defined by| n90
  n84 -->|Depends on| n90
  n84 -->|Depends on| n96
  n85 -->|Defined by| n90
  n85 -->|Depends on| n90
  n86 -->|Defined by| n90
  n86 -->|Depends on| n90
  n87 -->|Defined by| n90
  n87 -->|Depends on| n90
  n88 -->|Defined by| n90
  n88 -->|Depends on| n90
  n88 -->|Depends on| n87
  n89 -->|Defined by| n90
  n89 -->|Depends on| n90
  n89 -->|Depends on| n87
  n91 -->|Defined by| n90
  n91 -->|Depends on| n90
  n92 -->|Defined by| n90
  n92 -->|Depends on| n90
  n92 -->|Depends on| n91
  n93 -->|Defined by| n90
  n93 -->|Depends on| n90
  n93 -->|Depends on| n91
  n94 -->|Defined by| n90
  n94 -->|Depends on| n90
  n94 -->|Depends on| n89
  n95 -->|Defined by| n90
  n95 -->|Depends on| n90
  n95 -->|Depends on| n96
  n96 -->|Defined by| n90
  n96 -->|Depends on| n90
  n97 -->|Defined by| n90
  n97 -->|Depends on| n90
  n97 -->|Depends on| n91
  n98 -->|Serves| n138
  n99 -->|Serves| n138
  n100 -->|Serves| n138
  n101 -->|Serves| n138
  n102 -->|Defined by| n137
  n102 -->|Depends on| n137
  n102 -->|Depends on| n122
  n102 -->|Depends on| n40
  n103 -->|Defined by| n137
  n103 -->|Depends on| n137
  n103 -->|Depends on| n113
  n103 -->|Depends on| n39
  n103 -->|Depends on| n40
  n104 -->|Defined by| n137
  n104 -->|Depends on| n137
  n104 -->|Depends on| n122
  n104 -->|Depends on| n40
  n105 -->|Defined by| n137
  n105 -->|Depends on| n137
  n105 -->|Depends on| n122
  n105 -->|Depends on| n39
  n105 -->|Depends on| n40
  n107 -->|Defined by| n137
  n107 -->|Depends on| n137
  n107 -->|Depends on| n122
  n107 -->|Depends on| n39
  n107 -->|Depends on| n40
  n107 -->|Depends on| n129
  n108 -->|Defined by| n137
  n108 -->|Depends on| n137
  n108 -->|Depends on| n122
  n108 -->|Depends on| n39
  n108 -->|Depends on| n40
  n109 -->|Defined by| n137
  n109 -->|Depends on| n137
  n109 -->|Depends on| n83
  n109 -->|Depends on| n1
  n109 -->|Depends on| n39
  n109 -->|Depends on| n40
  n109 -->|Depends on| n51
  n109 -->|Depends on| n48
  n110 -->|Depends on| n43
  n112 -->|Implements| n111
  n112 -->|Depends on| n119
  n113 -->|Defined by| n137
  n113 -->|Depends on| n137
  n113 -->|Depends on| n7
  n113 -->|Depends on| n39
  n113 -->|Depends on| n40
  n113 -->|Depends on| n51
  n113 -->|Depends on| n33
  n115 -->|Defined by| n137
  n115 -->|Depends on| n137
  n115 -->|Depends on| n122
  n115 -->|Depends on| n39
  n115 -->|Depends on| n40
  n115 -->|Depends on| n102
  n115 -->|Depends on| n107
  n116 -->|Defined by| n137
  n116 -->|Depends on| n137
  n116 -->|Depends on| n46
  n116 -->|Depends on| n45
  n117 -->|Uses the variables of| n9
  n117 -->|Uses the variables of| n12
  n117 -->|Uses the variables of| n6
  n117 -->|Styles| n120
  n118 -->|Defined by| n137
  n118 -->|Depends on| n137
  n118 -->|Depends on| n122
  n118 -->|Depends on| n40
  n120 -->|Serves| n139
  n120 -->|Depends on| n133
  n120 -->|Depends on| n7
  n120 -->|Depends on| n13
  n120 -->|Depends on| n4
  n120 -->|Depends on| n9
  n120 -->|Depends on| n8
  n120 -->|Depends on| n12
  n120 -->|Depends on| n5
  n120 -->|Depends on| n10
  n120 -->|Depends on| n3
  n120 -->|Depends on| n6
  n120 -->|Depends on| n125
  n120 -->|Depends on| n131
  n120 -->|Depends on| n136
  n120 -->|Depends on| n134
  n120 -->|Depends on| n116
  n120 -->|Depends on| n110
  n120 -->|Depends on| n123
  n120 -->|Depends on| n121
  n120 -->|Depends on| n32
  n120 -->|Depends on| n31
  n120 -->|Depends on| n127
  n120 -->|Depends on| n53
  n121 -->|Defined by| n137
  n121 -->|Depends on| n137
  n121 -->|Depends on| n35
  n121 -->|Depends on| n43
  n121 -->|Depends on| n41
  n121 -->|Depends on| n40
  n123 -->|Defined by| n137
  n123 -->|Depends on| n137
  n123 -->|Depends on| n49
  n123 -->|Depends on| n44
  n123 -->|Depends on| n37
  n126 -->|Uses the variables of| n7
  n126 -->|Uses the variables of| n13
  n126 -->|Uses the variables of| n9
  n126 -->|Uses the variables of| n8
  n126 -->|Uses the variables of| n12
  n126 -->|Uses the variables of| n5
  n126 -->|Uses the variables of| n10
  n126 -->|Uses the variables of| n3
  n126 -->|Uses the variables of| n6
  n126 -->|Styles| n120
  n127 -->|Written in| n58
  n127 -->|Depends on| n58
  n129 -->|Defined by| n137
  n129 -->|Depends on| n137
  n129 -->|Depends on| n128
  n129 -->|Depends on| n122
  n129 -->|Depends on| n39
  n129 -->|Depends on| n40
  n130 -->|Implements| n125
  n130 -->|Depends on| n124
  n131 -->|Defined by| n137
  n131 -->|Depends on| n137
  n131 -->|Depends on| n39
  n131 -->|Depends on| n132
  n131 -->|Depends on| n115
  n131 -->|Depends on| n109
  n132 -->|Defined by| n137
  n132 -->|Depends on| n137
  n132 -->|Depends on| n39
  n132 -->|Depends on| n103
  n132 -->|Depends on| n104
  n132 -->|Depends on| n105
  n132 -->|Depends on| n118
  n132 -->|Depends on| n108
  n134 -->|Defined by| n137
  n134 -->|Depends on| n137
  n134 -->|Depends on| n32
  n134 -->|Depends on| n31
  n134 -->|Depends on| n33
  n134 -->|Depends on| n30
  n135 -->|Serves| n139
  n135 -->|Applied by| n126
  n135 -->|Applied by| n117
  n135 -->|Applied by| n136
  n135 -->|Applied by| n116
  n135 -->|Applied by| n120
  n136 -->|Defined by| n137
  n136 -->|Depends on| n137
  n136 -->|Depends on| n32
  n136 -->|Depends on| n46
  n136 -->|Depends on| n45
  n136 -->|Depends on| n29
  n136 -->|Depends on| n47
  n136 -->|Depends on| n34
  n136 -->|Depends on| n31
  n140 -->|Serves| n138
  n141 -->|Serves| n138
  n142 -->|Serves| n138
  n143 -->|Serves| n138
  n144 -->|Serves| n138
  n145 -->|Serves| n138
  n145 -->|Depends on| n166
  n146 -->|Serves| n138
  n146 -->|Depends on| n150
  n147 -->|Serves| n138
  n147 -->|Depends on| n163
  n147 -->|Depends on| n52
  n147 -->|Depends on| n54
  n147 -->|Depends on| n162
  n147 -->|Depends on| n57
  n148 -->|Serves| n139
  n150 -->|Serves| n138
  n150 -->|Depends on| n161
  n150 -->|Depends on| n151
  n152 -->|Serves| n139
  n152 -->|Implements| n159
  n152 -->|Depends on| n157
  n152 -->|Depends on| n81
  n152 -->|Depends on| n137
  n152 -->|Depends on| n40
  n152 -->|Depends on| n42
  n152 -->|Depends on| n36
  n152 -->|Depends on| n56
  n152 -->|Depends on| n163
  n152 -->|Depends on| n162
  n153 -->|Serves| n138
  n153 -->|Implements| n151
  n153 -->|Depends on| n149
  n153 -->|Depends on| n169
  n153 -->|Depends on| n56
  n153 -->|Depends on| n63
  n153 -->|Depends on| n70
  n153 -->|Depends on| n72
  n153 -->|Depends on| n62
  n153 -->|Depends on| n64
  n153 -->|Depends on| n68
  n153 -->|Depends on| n75
  n153 -->|Depends on| n65
  n153 -->|Depends on| n71
  n153 -->|Depends on| n73
  n153 -->|Depends on| n77
  n153 -->|Depends on| n76
  n153 -->|Depends on| n59
  n153 -->|Depends on| n67
  n153 -->|Depends on| n162
  n154 -->|Serves| n138
  n154 -->|Implements| n149
  n154 -->|Depends on| n90
  n154 -->|Depends on| n155
  n154 -->|Depends on| n7
  n154 -->|Depends on| n74
  n154 -->|Depends on| n85
  n154 -->|Depends on| n93
  n154 -->|Depends on| n97
  n154 -->|Depends on| n92
  n154 -->|Depends on| n84
  n154 -->|Depends on| n95
  n154 -->|Depends on| n86
  n154 -->|Depends on| n88
  n154 -->|Depends on| n89
  n154 -->|Depends on| n94
  n154 -->|Depends on| n52
  n154 -->|Depends on| n162
  n156 -->|Serves| n138
  n156 -->|Applied by| n161
  n156 -->|Applied by| n150
  n156 -->|Applied by| n166
  n156 -->|Applied by| n158
  n156 -->|Applied by| n153
  n156 -->|Applied by| n160
  n156 -->|Applied by| n152
  n156 -->|Applied by| n154
  n156 -->|Applied by| n168
  n156 -->|Applied by| n164
  n158 -->|Serves| n139
  n158 -->|Depends on| n161
  n158 -->|Depends on| n159
  n160 -->|Serves| n138
  n160 -->|Implements| n167
  n160 -->|Depends on| n165
  n160 -->|Depends on| n215
  n160 -->|Depends on| n213
  n160 -->|Depends on| n56
  n160 -->|Depends on| n211
  n160 -->|Depends on| n209
  n160 -->|Depends on| n210
  n160 -->|Depends on| n208
  n160 -->|Depends on| n214
  n160 -->|Depends on| n162
  n161 -->|Serves| n138
  n161 -->|Depends on| n147
  n161 -->|Depends on| n162
  n162 -->|Written in| n58
  n164 -->|Serves| n139
  n164 -->|Implements| n157
  n164 -->|Depends on| n81
  n164 -->|Depends on| n83
  n164 -->|Depends on| n137
  n164 -->|Depends on| n1
  n164 -->|Depends on| n11
  n164 -->|Depends on| n2
  n164 -->|Depends on| n40
  n164 -->|Depends on| n51
  n164 -->|Depends on| n48
  n164 -->|Depends on| n31
  n164 -->|Depends on| n36
  n164 -->|Depends on| n147
  n164 -->|Depends on| n52
  n164 -->|Depends on| n127
  n164 -->|Depends on| n162
  n164 -->|Depends on| n56
  n166 -->|Serves| n138
  n166 -->|Depends on| n161
  n166 -->|Depends on| n167
  n168 -->|Serves| n138
  n168 -->|Implements| n165
  n168 -->|Depends on| n147
  n168 -->|Depends on| n213
  n168 -->|Depends on| n56
  n168 -->|Depends on| n211
  n168 -->|Depends on| n209
  n168 -->|Depends on| n216
  n168 -->|Depends on| n212
  n168 -->|Depends on| n52
  n168 -->|Depends on| n162
  n171 -->|Verifies| n145
  n171 -->|Verifies| n146
  n171 -->|In| n192
  n171 -->|Depends on| n147
  n171 -->|Depends on| n170
  n171 -->|Depends on| n175
  n171 -->|Depends on| n188
  n172 -->|Verifies| n158
  n172 -->|Verifies| n152
  n172 -->|Verifies| n164
  n172 -->|In| n192
  n172 -->|Depends on| n158
  n172 -->|Depends on| n170
  n172 -->|Depends on| n176
  n172 -->|Depends on| n188
  n173 -->|Verifies| n147
  n173 -->|Verifies| n161
  n173 -->|Verifies| n150
  n173 -->|Verifies| n166
  n173 -->|Verifies| n153
  n173 -->|Verifies| n160
  n173 -->|Verifies| n154
  n173 -->|Verifies| n168
  n173 -->|In| n192
  n173 -->|Depends on| n150
  n173 -->|Depends on| n166
  n173 -->|Depends on| n147
  n173 -->|Depends on| n170
  n173 -->|Depends on| n175
  n173 -->|Depends on| n188
  n177 -->|Chooses| n154
  n177 -->|In| n192
  n177 -->|Serves| n138
  n178 -->|Chooses| n153
  n178 -->|In| n192
  n178 -->|Serves| n138
  n179 -->|Chooses| n145
  n179 -->|Chooses| n146
  n179 -->|In| n192
  n179 -->|Serves| n138
  n180 -->|Serves| n138
  n180 -->|Applied by| n178
  n180 -->|Applied by| n177
  n180 -->|Applied by| n191
  n180 -->|Applied by| n190
  n180 -->|Applied by| n182
  n180 -->|Applied by| n179
  n180 -->|Applied by| n186
  n180 -->|Applied by| n185
  n180 -->|Applied by| n189
  n181 -->|Chooses| n196
  n181 -->|In| n192
  n181 -->|Serves| n138
  n182 -->|In| n192
  n182 -->|Serves| n138
  n183 -->|Verifies| n52
  n183 -->|Verifies| n54
  n183 -->|Verifies| n56
  n183 -->|Verifies| n57
  n183 -->|Verifies| n196
  n183 -->|In| n192
  n183 -->|Depends on| n52
  n183 -->|Depends on| n54
  n183 -->|Depends on| n56
  n183 -->|Depends on| n57
  n183 -->|Depends on| n187
  n183 -->|Depends on| n174
  n183 -->|Depends on| n188
  n185 -->|Chooses| n164
  n185 -->|In| n192
  n185 -->|Serves| n139
  n186 -->|Chooses| n152
  n186 -->|In| n192
  n186 -->|Serves| n139
  n188 -->|Written in| n58
  n189 -->|Chooses| n130
  n189 -->|In| n192
  n189 -->|Serves| n139
  n190 -->|Chooses| n168
  n190 -->|In| n192
  n190 -->|Serves| n138
  n191 -->|Chooses| n160
  n191 -->|In| n192
  n191 -->|Serves| n138
  n193 -->|Serves| n138
  n193 -->|Applied by| n52
  n193 -->|Applied by| n54
  n193 -->|Applied by| n56
  n193 -->|Applied by| n57
  n193 -->|Applied by| n181
  n194 -->|Verifies| n20
  n194 -->|In| n192
  n194 -->|Depends on| n20
  n194 -->|Depends on| n170
  n194 -->|Depends on| n127
  n194 -->|Depends on| n36
  n194 -->|Depends on| n188
  n195 -->|Verifies| n120
  n195 -->|Verifies| n130
  n195 -->|In| n192
  n195 -->|Depends on| n120
  n195 -->|Depends on| n184
  n195 -->|Depends on| n123
  n195 -->|Depends on| n35
  n195 -->|Depends on| n127
  n195 -->|Depends on| n188
  n196 -->|Implements| n53
  n196 -->|Depends on| n187
  n197 -->|Serves| n138
  n198 -->|Serves| n138
  n199 -->|Ships| n205
  n199 -->|Follows the policy| n206
  n200 -->|Serves| n138
  n202 -->|Runs elsewhere| n199
  n202 -->|Its writer's settings| n201
  n203 -->|Serves| n138
  n204 -->|Ships| n202
  n206 -->|Its obligations| n197
  n206 -->|Its obligations| n203
  n206 -->|Its obligations| n198
  n206 -->|Its obligations| n200
  n208 -->|Defined by| n215
  n208 -->|Depends on| n215
  n209 -->|Defined by| n215
  n209 -->|Depends on| n215
  n209 -->|Depends on| n211
  n209 -->|Depends on| n213
  n210 -->|Defined by| n215
  n210 -->|Depends on| n215
  n211 -->|Defined by| n215
  n211 -->|Depends on| n215
  n211 -->|Depends on| n213
  n212 -->|Defined by| n215
  n212 -->|Depends on| n215
  n212 -->|Depends on| n207
  n214 -->|Defined by| n215
  n214 -->|Depends on| n215
  n216 -->|Defined by| n215
  n216 -->|Depends on| n215
  n216 -->|Depends on| n207
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
