# Layers

*The graph in force on 8 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph algebra["Standard library · Algebra"]
    n0["Counts<br/><small>Algebraic structure</small>"]:::held
    n1["Sequences<br/><small>Algebraic structure</small>"]:::held
    n2["Texts<br/><small>Algebraic structure</small>"]:::held
    n3["Types of values<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph algorithms["Standard library · Algorithms"]
    n4["Depth-first search<br/><small>Standard</small>"]:::neutral
    n5["Mulberry32<br/><small>Standard</small>"]:::neutral
    n6["Multiplicative hashing<br/><small>Standard</small>"]:::neutral
    n7["Seeded draws<br/><small>Function</small>"]:::held
    n8["SHA-256<br/><small>Standard</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n9["ECMAScript<br/><small>Standard</small>"]:::neutral
    n10["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n11["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n12["Text run as code<br/><small>Vocabulary</small>"]:::neutral
    n13["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph effects["Standard library · Effects"]
    n14["Commands<br/><small>Function</small>"]:::held
    n15["Effects<br/><small>Vocabulary</small>"]:::neutral
    n16["What the platform may do<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n17["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n18["CSS<br/><small>Standard</small>"]:::neutral
    n19["HTML<br/><small>Standard</small>"]:::neutral
    n20["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n21["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n22["Language tags<br/><small>Standard</small>"]:::neutral
    n23["Ratio<br/><small>Quantity</small>"]:::neutral
    n24["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n25["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n26["Time<br/><small>Quantity</small>"]:::neutral
    n27["Units of measure<br/><small>Standard</small>"]:::neutral
    n28["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n29["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n30["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n31["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n32["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n33["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n34["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n35["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n36["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n37["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n38["The project's rules hold<br/><small>Requirement</small>"]:::held
    n39["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n40["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n41["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n42["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n43["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n44["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n45["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n46["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n47["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n48["Adapter<br/><small>Design pattern</small>"]:::neutral
    n49["Bridge<br/><small>Design pattern</small>"]:::neutral
    n50["Repository<br/><small>Design pattern</small>"]:::neutral
    n51["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n52["Animation frames<br/><small>Port</small>"]:::neutral
    n53["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n54["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n55["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n56["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n57["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n58["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n59["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n60["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n61["Languages of the device<br/><small>Port</small>"]:::neutral
    n62["Frames turned by hand<br/><small>Function</small>"]:::held
    n63["Preferences kept in memory<br/><small>Function</small>"]:::held
    n64["Loading of a page<br/><small>Port</small>"]:::neutral
    n65["Preferences<br/><small>Port</small>"]:::neutral
    n66["Screen kept awake<br/><small>Port</small>"]:::neutral
    n67["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n68["What was said<br/><small>Port</small>"]:::neutral
    n69["Speech<br/><small>Port</small>"]:::neutral
    n70["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n71["Time turned by hand<br/><small>Port</small>"]:::neutral
    n72["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n73["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n74["Known designs, named<br/><small>Goal</small>"]:::neutral
    n75["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n76["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n77["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n78["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n79["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n83["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n91["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n92["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n93["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n96["Directions<br/><small>Vocabulary</small>"]:::neutral
    n97["As many links as asked<br/><small>Requirement</small>"]:::held
    n98["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n99["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n100["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n101["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n102["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n103["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n104["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n105["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n106["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n107["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n108["The device, in memory<br/><small>Scenario</small>"]:::held
    n109["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n110["In memory<br/><small>Technical choice</small>"]:::held
    n111["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n112["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n113["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n114["Test<br/><small>Environment</small>"]:::neutral
    n115["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n116["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n117["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n118["The next version<br/><small>Shipment</small>"]:::unknown
    n119["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n120["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n121["Its rules held<br/><small>Obligation</small>"]:::neutral
    n122["The standard library<br/><small>Artefact</small>"]:::unknown
    n123["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n124["Exit status<br/><small>Standard</small>"]:::neutral
    n125["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n126["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n127["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n128["Node.js events<br/><small>Standard</small>"]:::neutral
    n129["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n130["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n131["npm's command line<br/><small>Standard</small>"]:::neutral
    n132["npm's manifest<br/><small>Standard</small>"]:::neutral
    n133["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n134["Positions in a file<br/><small>Standard</small>"]:::neutral
    n135["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n136["Text file<br/><small>Standard</small>"]:::neutral
    n137["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n138["A browser kept in memory<br/><small>Function</small>"]:::held
    n139["Browser script<br/><small>Port</small>"]:::neutral
    n140["Project files<br/><small>Port</small>"]:::neutral
    n141["Files kept in memory<br/><small>Function</small>"]:::held
    n142["Files written<br/><small>Port</small>"]:::neutral
    n143["Headless browser<br/><small>Port</small>"]:::neutral
    n144["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n145["The machine's files<br/><small>Implementation</small>"]:::neutral
    n146["Node's command line<br/><small>Implementation</small>"]:::neutral
    n147["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n148["Where a package comes from<br/><small>Port</small>"]:::neutral
    n149["Playwright's API<br/><small>Standard</small>"]:::neutral
    n150["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n151["Playwright<br/><small>Package</small>"]:::held
    n152["Commands of a program<br/><small>Port</small>"]:::neutral
    n153["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n154["CSSOM View<br/><small>Standard</small>"]:::neutral
    n155["HTTP<br/><small>Standard</small>"]:::neutral
    n156["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n157["Media types<br/><small>Standard</small>"]:::neutral
    n158["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n159["Server-sent events<br/><small>Standard</small>"]:::neutral
    n160["UI events<br/><small>Standard</small>"]:::neutral
    n161["URI<br/><small>Standard</small>"]:::neutral
    n162["Web Audio API<br/><small>Standard</small>"]:::neutral
    n163["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n76
  n1 -->|Serves| n76
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n76
  n2 -->|Depends on| n1
  n3 -->|Serves| n76
  n3 -->|Depends on| n11
  n4 -->|Serves| n73
  n5 -->|Serves| n73
  n6 -->|Serves| n73
  n7 -->|Serves| n76
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n73
  n9 -->|Serves| n73
  n10 -->|Serves| n73
  n11 -->|Serves| n73
  n12 -->|Serves| n73
  n13 -->|Serves| n73
  n14 -->|Serves| n75
  n14 -->|Depends on| n15
  n15 -->|Serves| n75
  n17 -->|Serves| n73
  n18 -->|Serves| n73
  n19 -->|Serves| n73
  n20 -->|Serves| n73
  n21 -->|Serves| n73
  n22 -->|Serves| n73
  n23 -->|Written with| n28
  n23 -->|Serves| n73
  n24 -->|Serves| n73
  n26 -->|Written with| n28
  n26 -->|Serves| n73
  n27 -->|Serves| n73
  n28 -->|Written in| n25
  n29 -->|Refines| n77
  n30 -->|Accepts| n29
  n31 -->|Refines| n77
  n31 -->|Depends on| n0
  n32 -->|Accepts| n31
  n33 -->|Serves| n77
  n34 -->|Refines| n77
  n35 -->|Accepts| n34
  n36 -->|Refines| n77
  n36 -->|Depends on| n0
  n37 -->|Accepts| n36
  n38 -->|Refines| n77
  n39 -->|Accepts| n38
  n40 -->|Refines| n77
  n41 -->|Accepts| n40
  n42 -->|Refines| n77
  n43 -->|Accepts| n42
  n44 -->|Refines| n77
  n44 -->|Depends on| n0
  n45 -->|Accepts| n44
  n46 -->|Serves| n75
  n47 -->|Serves| n74
  n48 -->|Serves| n74
  n49 -->|Serves| n74
  n50 -->|Serves| n74
  n51 -->|Serves| n74
  n53 -->|Implements| n66
  n53 -->|Implements| n67
  n54 -->|Implements| n52
  n54 -->|Depends on| n26
  n55 -->|Implements| n61
  n56 -->|Implements| n64
  n56 -->|Depends on| n160
  n57 -->|Implements| n65
  n58 -->|Implements| n69
  n58 -->|Depends on| n22
  n58 -->|Depends on| n163
  n59 -->|Implements| n66
  n59 -->|Depends on| n158
  n60 -->|Serves| n75
  n60 -->|Applied by| n65
  n60 -->|Applied by| n57
  n60 -->|Applied by| n63
  n60 -->|Applied by| n61
  n60 -->|Applied by| n55
  n60 -->|Applied by| n69
  n60 -->|Applied by| n58
  n60 -->|Applied by| n72
  n60 -->|Applied by| n68
  n60 -->|Applied by| n66
  n60 -->|Applied by| n59
  n60 -->|Applied by| n53
  n60 -->|Applied by| n67
  n60 -->|Applied by| n52
  n60 -->|Applied by| n54
  n60 -->|Applied by| n62
  n60 -->|Applied by| n71
  n62 -->|Implements| n52
  n62 -->|Implements| n71
  n62 -->|Depends on| n0
  n63 -->|Implements| n65
  n70 -->|Serves| n75
  n70 -->|Applied by| n64
  n70 -->|Applied by| n56
  n72 -->|Implements| n69
  n72 -->|Implements| n68
  n79 -->|Serves| n73
  n79 -->|Serves| n74
  n79 -->|Serves| n75
  n79 -->|Serves| n76
  n80 -->|Serves| n73
  n80 -->|Serves| n74
  n80 -->|Serves| n75
  n80 -->|Serves| n76
  n80 -->|Serves| n77
  n81 -->|Serves| n73
  n81 -->|Serves| n74
  n81 -->|Serves| n75
  n81 -->|Serves| n76
  n81 -->|Serves| n77
  n82 -->|Serves| n73
  n82 -->|Serves| n74
  n82 -->|Serves| n75
  n82 -->|Serves| n76
  n82 -->|Serves| n77
  n83 -->|Serves| n73
  n83 -->|Serves| n74
  n83 -->|Serves| n75
  n83 -->|Serves| n76
  n83 -->|Serves| n77
  n84 -->|Serves| n73
  n84 -->|Serves| n74
  n84 -->|Serves| n75
  n84 -->|Serves| n76
  n84 -->|Serves| n77
  n85 -->|Serves| n73
  n85 -->|Serves| n74
  n85 -->|Serves| n75
  n85 -->|Serves| n76
  n85 -->|Serves| n77
  n86 -->|Serves| n73
  n86 -->|Serves| n74
  n86 -->|Serves| n75
  n86 -->|Serves| n76
  n86 -->|Serves| n77
  n87 -->|Serves| n73
  n87 -->|Serves| n74
  n87 -->|Serves| n75
  n87 -->|Serves| n76
  n87 -->|Serves| n77
  n87 -->|Serves| n78
  n88 -->|Serves| n73
  n88 -->|Serves| n74
  n88 -->|Serves| n75
  n88 -->|Serves| n76
  n89 -->|Serves| n73
  n89 -->|Serves| n74
  n89 -->|Serves| n75
  n89 -->|Serves| n76
  n90 -->|Serves| n73
  n90 -->|Serves| n74
  n90 -->|Serves| n75
  n90 -->|Serves| n76
  n91 -->|Serves| n73
  n91 -->|Serves| n74
  n91 -->|Serves| n75
  n91 -->|Serves| n76
  n92 -->|Serves| n73
  n92 -->|Serves| n74
  n92 -->|Serves| n75
  n92 -->|Serves| n76
  n93 -->|Serves| n73
  n93 -->|Serves| n74
  n93 -->|Serves| n75
  n93 -->|Serves| n76
  n94 -->|Serves| n73
  n94 -->|Serves| n74
  n94 -->|Serves| n75
  n94 -->|Serves| n76
  n94 -->|Serves| n77
  n95 -->|Serves| n73
  n95 -->|Serves| n74
  n95 -->|Serves| n75
  n95 -->|Serves| n76
  n95 -->|Serves| n77
  n96 -->|Serves| n77
  n97 -->|Refines| n77
  n97 -->|Depends on| n0
  n98 -->|Accepts| n97
  n99 -->|Refines| n77
  n99 -->|Depends on| n0
  n100 -->|Accepts| n99
  n101 -->|Refines| n77
  n102 -->|Accepts| n101
  n103 -->|Refines| n77
  n103 -->|Depends on| n0
  n104 -->|Accepts| n103
  n105 -->|Refines| n77
  n105 -->|Depends on| n0
  n106 -->|Accepts| n105
  n107 -->|Verifies| n14
  n107 -->|In| n114
  n107 -->|Depends on| n14
  n107 -->|Depends on| n15
  n107 -->|Depends on| n112
  n107 -->|Depends on| n111
  n108 -->|Verifies| n63
  n108 -->|Verifies| n72
  n108 -->|Verifies| n53
  n108 -->|Verifies| n62
  n108 -->|In| n114
  n108 -->|Depends on| n65
  n108 -->|Depends on| n69
  n108 -->|Depends on| n68
  n108 -->|Depends on| n66
  n108 -->|Depends on| n67
  n108 -->|Depends on| n52
  n108 -->|Depends on| n71
  n108 -->|Depends on| n112
  n108 -->|Depends on| n0
  n108 -->|Depends on| n111
  n109 -->|Verifies| n7
  n109 -->|In| n114
  n109 -->|Depends on| n7
  n109 -->|Depends on| n112
  n109 -->|Depends on| n0
  n109 -->|Depends on| n111
  n110 -->|Chooses| n63
  n110 -->|Chooses| n72
  n110 -->|Chooses| n53
  n110 -->|Chooses| n62
  n110 -->|Chooses| n141
  n110 -->|Chooses| n138
  n110 -->|In| n114
  n110 -->|Follows| n51
  n110 -->|Serves| n75
  n111 -->|Written in| n113
  n115 -->|Verifies| n141
  n115 -->|Verifies| n138
  n115 -->|In| n114
  n115 -->|Depends on| n140
  n115 -->|Depends on| n142
  n115 -->|Depends on| n143
  n115 -->|Depends on| n139
  n115 -->|Depends on| n112
  n115 -->|Depends on| n111
  n116 -->|Applies the family| n29
  n116 -->|Serves| n78
  n117 -->|Applies the family| n44
  n117 -->|Serves| n78
  n118 -->|Ships| n122
  n118 -->|Follows the policy| n123
  n119 -->|Applies the family| n40
  n119 -->|Serves| n78
  n120 -->|Applies the family| n42
  n120 -->|Serves| n78
  n121 -->|Applies the family| n38
  n121 -->|Serves| n78
  n123 -->|Its obligations| n117
  n123 -->|Its obligations| n120
  n123 -->|Its obligations| n116
  n123 -->|Its obligations| n121
  n123 -->|Its obligations| n119
  n124 -->|Serves| n73
  n125 -->|Serves| n73
  n126 -->|Serves| n73
  n127 -->|Serves| n73
  n128 -->|Serves| n73
  n129 -->|Serves| n73
  n130 -->|Serves| n73
  n131 -->|Serves| n73
  n132 -->|Serves| n73
  n133 -->|Serves| n73
  n134 -->|Serves| n73
  n135 -->|Serves| n73
  n136 -->|Serves| n73
  n137 -->|Serves| n73
  n138 -->|Implements| n143
  n138 -->|Implements| n139
  n138 -->|Depends on| n0
  n141 -->|Implements| n140
  n141 -->|Implements| n142
  n141 -->|Depends on| n7
  n141 -->|Depends on| n2
  n145 -->|Implements| n140
  n145 -->|Depends on| n8
  n145 -->|Depends on| n127
  n146 -->|Implements| n152
  n146 -->|Depends on| n125
  n146 -->|Depends on| n124
  n146 -->|Depends on| n3
  n147 -->|Serves| n75
  n149 -->|Serves| n73
  n150 -->|Implements| n143
  n150 -->|Uses| n151
  n150 -->|Depends on| n144
  n150 -->|Depends on| n149
  n150 -->|Depends on| n0
  n150 -->|Depends on| n26
  n153 -->|Serves| n75
  n153 -->|Applied by| n152
  n153 -->|Applied by| n146
  n153 -->|Applied by| n140
  n153 -->|Applied by| n142
  n153 -->|Applied by| n145
  n153 -->|Applied by| n141
  n153 -->|Applied by| n143
  n153 -->|Applied by| n150
  n153 -->|Applied by| n139
  n153 -->|Applied by| n138
  n153 -->|Applied by| n148
  n154 -->|Serves| n73
  n155 -->|Serves| n73
  n156 -->|Serves| n73
  n157 -->|Serves| n73
  n158 -->|Serves| n73
  n159 -->|Serves| n73
  n160 -->|Serves| n73
  n161 -->|Serves| n73
  n162 -->|Serves| n73
  n163 -->|Serves| n73
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
