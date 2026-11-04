# Layers

*The graph in force on 4 November 2026, ordered by distance to the goals.*

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
    n34["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n35["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n36["The project's rules hold<br/><small>Requirement</small>"]:::held
    n37["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n38["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n39["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n40["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n41["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n42["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n43["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n44["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n45["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n46["Adapter<br/><small>Design pattern</small>"]:::neutral
    n47["Bridge<br/><small>Design pattern</small>"]:::neutral
    n48["Repository<br/><small>Design pattern</small>"]:::neutral
    n49["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n50["Animation frames<br/><small>Port</small>"]:::neutral
    n51["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n52["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n53["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n54["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n55["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n56["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n57["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n58["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n59["Languages of the device<br/><small>Port</small>"]:::neutral
    n60["Frames turned by hand<br/><small>Function</small>"]:::held
    n61["Preferences kept in memory<br/><small>Function</small>"]:::held
    n62["Loading of a page<br/><small>Port</small>"]:::neutral
    n63["Preferences<br/><small>Port</small>"]:::neutral
    n64["Screen kept awake<br/><small>Port</small>"]:::neutral
    n65["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n66["What was said<br/><small>Port</small>"]:::neutral
    n67["Speech<br/><small>Port</small>"]:::neutral
    n68["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n69["Time turned by hand<br/><small>Port</small>"]:::neutral
    n70["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n71["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n72["Known designs, named<br/><small>Goal</small>"]:::neutral
    n73["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n74["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n75["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n76["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n77["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n78["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n79["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n81["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n91["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n92["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n93["Directions<br/><small>Vocabulary</small>"]:::neutral
    n94["As many links as asked<br/><small>Requirement</small>"]:::held
    n95["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n96["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n97["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n98["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n99["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n100["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n101["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n102["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n103["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n104["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n105["The device, in memory<br/><small>Scenario</small>"]:::held
    n106["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n107["In memory<br/><small>Technical choice</small>"]:::held
    n108["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n109["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n110["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n111["Test<br/><small>Environment</small>"]:::neutral
    n112["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n113["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n114["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n115["The next version<br/><small>Shipment</small>"]:::unknown
    n116["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n117["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n118["Its rules held<br/><small>Obligation</small>"]:::neutral
    n119["The standard library<br/><small>Artefact</small>"]:::unknown
    n120["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n121["Exit status<br/><small>Standard</small>"]:::neutral
    n122["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n123["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n124["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n125["Node.js events<br/><small>Standard</small>"]:::neutral
    n126["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n127["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n128["npm's command line<br/><small>Standard</small>"]:::neutral
    n129["npm's manifest<br/><small>Standard</small>"]:::neutral
    n130["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n131["Positions in a file<br/><small>Standard</small>"]:::neutral
    n132["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n133["Text file<br/><small>Standard</small>"]:::neutral
    n134["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n135["A browser kept in memory<br/><small>Function</small>"]:::held
    n136["Browser script<br/><small>Port</small>"]:::neutral
    n137["Project files<br/><small>Port</small>"]:::neutral
    n138["Files kept in memory<br/><small>Function</small>"]:::held
    n139["Files written<br/><small>Port</small>"]:::neutral
    n140["Headless browser<br/><small>Port</small>"]:::neutral
    n141["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n142["The machine's files<br/><small>Implementation</small>"]:::neutral
    n143["Node's command line<br/><small>Implementation</small>"]:::neutral
    n144["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n145["Where a package comes from<br/><small>Port</small>"]:::neutral
    n146["Playwright's API<br/><small>Standard</small>"]:::neutral
    n147["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n148["Playwright<br/><small>Package</small>"]:::held
    n149["Commands of a program<br/><small>Port</small>"]:::neutral
    n150["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n151["CSSOM View<br/><small>Standard</small>"]:::neutral
    n152["HTTP<br/><small>Standard</small>"]:::neutral
    n153["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n154["Media types<br/><small>Standard</small>"]:::neutral
    n155["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n156["Server-sent events<br/><small>Standard</small>"]:::neutral
    n157["UI events<br/><small>Standard</small>"]:::neutral
    n158["URI<br/><small>Standard</small>"]:::neutral
    n159["Web Audio API<br/><small>Standard</small>"]:::neutral
    n160["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n74
  n1 -->|Serves| n74
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n74
  n2 -->|Depends on| n1
  n3 -->|Serves| n74
  n3 -->|Depends on| n11
  n4 -->|Serves| n71
  n5 -->|Serves| n71
  n6 -->|Serves| n71
  n7 -->|Serves| n74
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n71
  n9 -->|Serves| n71
  n10 -->|Serves| n71
  n11 -->|Serves| n71
  n12 -->|Serves| n71
  n13 -->|Serves| n71
  n14 -->|Serves| n73
  n14 -->|Depends on| n15
  n15 -->|Serves| n73
  n17 -->|Serves| n71
  n18 -->|Serves| n71
  n19 -->|Serves| n71
  n20 -->|Serves| n71
  n21 -->|Serves| n71
  n22 -->|Serves| n71
  n23 -->|Written with| n28
  n23 -->|Serves| n71
  n24 -->|Serves| n71
  n26 -->|Written with| n28
  n26 -->|Serves| n71
  n27 -->|Serves| n71
  n28 -->|Written in| n25
  n29 -->|Refines| n75
  n30 -->|Accepts| n29
  n31 -->|Refines| n75
  n31 -->|Depends on| n0
  n32 -->|Accepts| n31
  n33 -->|Serves| n75
  n34 -->|Refines| n75
  n34 -->|Depends on| n0
  n35 -->|Accepts| n34
  n36 -->|Refines| n75
  n37 -->|Accepts| n36
  n38 -->|Refines| n75
  n39 -->|Accepts| n38
  n40 -->|Refines| n75
  n41 -->|Accepts| n40
  n42 -->|Refines| n75
  n42 -->|Depends on| n0
  n43 -->|Accepts| n42
  n44 -->|Serves| n73
  n45 -->|Serves| n72
  n46 -->|Serves| n72
  n47 -->|Serves| n72
  n48 -->|Serves| n72
  n49 -->|Serves| n72
  n51 -->|Implements| n64
  n51 -->|Implements| n65
  n52 -->|Implements| n50
  n52 -->|Depends on| n26
  n53 -->|Implements| n59
  n54 -->|Implements| n62
  n54 -->|Depends on| n157
  n55 -->|Implements| n63
  n56 -->|Implements| n67
  n56 -->|Depends on| n22
  n56 -->|Depends on| n160
  n57 -->|Implements| n64
  n57 -->|Depends on| n155
  n58 -->|Serves| n73
  n58 -->|Applied by| n63
  n58 -->|Applied by| n55
  n58 -->|Applied by| n61
  n58 -->|Applied by| n59
  n58 -->|Applied by| n53
  n58 -->|Applied by| n67
  n58 -->|Applied by| n56
  n58 -->|Applied by| n70
  n58 -->|Applied by| n66
  n58 -->|Applied by| n64
  n58 -->|Applied by| n57
  n58 -->|Applied by| n51
  n58 -->|Applied by| n65
  n58 -->|Applied by| n50
  n58 -->|Applied by| n52
  n58 -->|Applied by| n60
  n58 -->|Applied by| n69
  n60 -->|Implements| n50
  n60 -->|Implements| n69
  n60 -->|Depends on| n0
  n61 -->|Implements| n63
  n68 -->|Serves| n73
  n68 -->|Applied by| n62
  n68 -->|Applied by| n54
  n70 -->|Implements| n67
  n70 -->|Implements| n66
  n77 -->|Serves| n71
  n77 -->|Serves| n72
  n77 -->|Serves| n73
  n77 -->|Serves| n74
  n78 -->|Serves| n71
  n78 -->|Serves| n72
  n78 -->|Serves| n73
  n78 -->|Serves| n74
  n78 -->|Serves| n75
  n79 -->|Serves| n71
  n79 -->|Serves| n72
  n79 -->|Serves| n73
  n79 -->|Serves| n74
  n79 -->|Serves| n75
  n80 -->|Serves| n71
  n80 -->|Serves| n72
  n80 -->|Serves| n73
  n80 -->|Serves| n74
  n80 -->|Serves| n75
  n81 -->|Serves| n71
  n81 -->|Serves| n72
  n81 -->|Serves| n73
  n81 -->|Serves| n74
  n81 -->|Serves| n75
  n82 -->|Serves| n71
  n82 -->|Serves| n72
  n82 -->|Serves| n73
  n82 -->|Serves| n74
  n82 -->|Serves| n75
  n83 -->|Serves| n71
  n83 -->|Serves| n72
  n83 -->|Serves| n73
  n83 -->|Serves| n74
  n83 -->|Serves| n75
  n84 -->|Serves| n71
  n84 -->|Serves| n72
  n84 -->|Serves| n73
  n84 -->|Serves| n74
  n84 -->|Serves| n75
  n85 -->|Serves| n71
  n85 -->|Serves| n72
  n85 -->|Serves| n73
  n85 -->|Serves| n74
  n86 -->|Serves| n71
  n86 -->|Serves| n72
  n86 -->|Serves| n73
  n86 -->|Serves| n74
  n87 -->|Serves| n71
  n87 -->|Serves| n72
  n87 -->|Serves| n73
  n87 -->|Serves| n74
  n88 -->|Serves| n71
  n88 -->|Serves| n72
  n88 -->|Serves| n73
  n88 -->|Serves| n74
  n89 -->|Serves| n71
  n89 -->|Serves| n72
  n89 -->|Serves| n73
  n89 -->|Serves| n74
  n90 -->|Serves| n71
  n90 -->|Serves| n72
  n90 -->|Serves| n73
  n90 -->|Serves| n74
  n91 -->|Serves| n71
  n91 -->|Serves| n72
  n91 -->|Serves| n73
  n91 -->|Serves| n74
  n91 -->|Serves| n75
  n92 -->|Serves| n71
  n92 -->|Serves| n72
  n92 -->|Serves| n73
  n92 -->|Serves| n74
  n92 -->|Serves| n75
  n93 -->|Serves| n75
  n94 -->|Refines| n75
  n94 -->|Depends on| n0
  n95 -->|Accepts| n94
  n96 -->|Refines| n75
  n96 -->|Depends on| n0
  n97 -->|Accepts| n96
  n98 -->|Refines| n75
  n99 -->|Accepts| n98
  n100 -->|Refines| n75
  n100 -->|Depends on| n0
  n101 -->|Accepts| n100
  n102 -->|Refines| n75
  n102 -->|Depends on| n0
  n103 -->|Accepts| n102
  n104 -->|Verifies| n14
  n104 -->|In| n111
  n104 -->|Depends on| n14
  n104 -->|Depends on| n15
  n104 -->|Depends on| n109
  n104 -->|Depends on| n108
  n105 -->|Verifies| n61
  n105 -->|Verifies| n70
  n105 -->|Verifies| n51
  n105 -->|Verifies| n60
  n105 -->|In| n111
  n105 -->|Depends on| n63
  n105 -->|Depends on| n67
  n105 -->|Depends on| n66
  n105 -->|Depends on| n64
  n105 -->|Depends on| n65
  n105 -->|Depends on| n50
  n105 -->|Depends on| n69
  n105 -->|Depends on| n109
  n105 -->|Depends on| n0
  n105 -->|Depends on| n108
  n106 -->|Verifies| n7
  n106 -->|In| n111
  n106 -->|Depends on| n7
  n106 -->|Depends on| n109
  n106 -->|Depends on| n0
  n106 -->|Depends on| n108
  n107 -->|Chooses| n61
  n107 -->|Chooses| n70
  n107 -->|Chooses| n51
  n107 -->|Chooses| n60
  n107 -->|Chooses| n138
  n107 -->|Chooses| n135
  n107 -->|In| n111
  n107 -->|Follows| n49
  n107 -->|Serves| n73
  n108 -->|Written in| n110
  n112 -->|Verifies| n138
  n112 -->|Verifies| n135
  n112 -->|In| n111
  n112 -->|Depends on| n137
  n112 -->|Depends on| n139
  n112 -->|Depends on| n140
  n112 -->|Depends on| n136
  n112 -->|Depends on| n109
  n112 -->|Depends on| n108
  n113 -->|Applies the family| n29
  n113 -->|Serves| n76
  n114 -->|Applies the family| n42
  n114 -->|Serves| n76
  n115 -->|Ships| n119
  n115 -->|Follows the policy| n120
  n116 -->|Applies the family| n38
  n116 -->|Serves| n76
  n117 -->|Applies the family| n40
  n117 -->|Serves| n76
  n118 -->|Applies the family| n36
  n118 -->|Serves| n76
  n120 -->|Its obligations| n114
  n120 -->|Its obligations| n117
  n120 -->|Its obligations| n113
  n120 -->|Its obligations| n118
  n120 -->|Its obligations| n116
  n121 -->|Serves| n71
  n122 -->|Serves| n71
  n123 -->|Serves| n71
  n124 -->|Serves| n71
  n125 -->|Serves| n71
  n126 -->|Serves| n71
  n127 -->|Serves| n71
  n128 -->|Serves| n71
  n129 -->|Serves| n71
  n130 -->|Serves| n71
  n131 -->|Serves| n71
  n132 -->|Serves| n71
  n133 -->|Serves| n71
  n134 -->|Serves| n71
  n135 -->|Implements| n140
  n135 -->|Implements| n136
  n135 -->|Depends on| n0
  n138 -->|Implements| n137
  n138 -->|Implements| n139
  n138 -->|Depends on| n7
  n138 -->|Depends on| n2
  n142 -->|Implements| n137
  n142 -->|Depends on| n8
  n142 -->|Depends on| n124
  n143 -->|Implements| n149
  n143 -->|Depends on| n122
  n143 -->|Depends on| n121
  n143 -->|Depends on| n3
  n144 -->|Serves| n73
  n146 -->|Serves| n71
  n147 -->|Implements| n140
  n147 -->|Uses| n148
  n147 -->|Depends on| n141
  n147 -->|Depends on| n146
  n147 -->|Depends on| n0
  n147 -->|Depends on| n26
  n150 -->|Serves| n73
  n150 -->|Applied by| n149
  n150 -->|Applied by| n143
  n150 -->|Applied by| n137
  n150 -->|Applied by| n139
  n150 -->|Applied by| n142
  n150 -->|Applied by| n138
  n150 -->|Applied by| n140
  n150 -->|Applied by| n147
  n150 -->|Applied by| n136
  n150 -->|Applied by| n135
  n150 -->|Applied by| n145
  n151 -->|Serves| n71
  n152 -->|Serves| n71
  n153 -->|Serves| n71
  n154 -->|Serves| n71
  n155 -->|Serves| n71
  n156 -->|Serves| n71
  n157 -->|Serves| n71
  n158 -->|Serves| n71
  n159 -->|Serves| n71
  n160 -->|Serves| n71
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
