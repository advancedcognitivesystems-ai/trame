# Layers

*The graph in force on 3 November 2026, ordered by distance to the goals.*

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
    n14["Commands<br/><small>Function</small>"]:::unknown
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
    n29["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::unknown
    n30["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n31["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::unknown
    n32["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n33["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n34["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::unknown
    n35["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n36["The project's rules hold<br/><small>Requirement</small>"]:::unknown
    n37["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n38["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::unknown
    n39["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n40["The product a shipment serves holds<br/><small>Requirement</small>"]:::unknown
    n41["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n42["The code a shipment ships is verified<br/><small>Requirement</small>"]:::unknown
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
  end
  subgraph releases["Standard library · Releases"]
    n76["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n78["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n79["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n80["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n91["Directions<br/><small>Vocabulary</small>"]:::neutral
    n92["As many links as asked<br/><small>Requirement</small>"]:::unknown
    n93["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n94["A node never reaches what it must not<br/><small>Requirement</small>"]:::unknown
    n95["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n96["A node reaches what it must<br/><small>Requirement</small>"]:::unknown
    n97["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n98["Effects a node may not have<br/><small>Requirement</small>"]:::unknown
    n99["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n100["Words of a vocabulary<br/><small>Requirement</small>"]:::unknown
    n101["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n102["The device, in memory<br/><small>Scenario</small>"]:::held
    n103["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n104["In memory<br/><small>Technical choice</small>"]:::held
    n105["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n106["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n107["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n108["Test<br/><small>Environment</small>"]:::neutral
    n109["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n110["Exit status<br/><small>Standard</small>"]:::neutral
    n111["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n112["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n113["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n114["Node.js events<br/><small>Standard</small>"]:::neutral
    n115["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n116["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n117["npm's command line<br/><small>Standard</small>"]:::neutral
    n118["npm's manifest<br/><small>Standard</small>"]:::neutral
    n119["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n120["Positions in a file<br/><small>Standard</small>"]:::neutral
    n121["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n122["Text file<br/><small>Standard</small>"]:::neutral
    n123["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n124["A browser kept in memory<br/><small>Function</small>"]:::held
    n125["Browser script<br/><small>Port</small>"]:::neutral
    n126["Project files<br/><small>Port</small>"]:::neutral
    n127["Files kept in memory<br/><small>Function</small>"]:::held
    n128["Files written<br/><small>Port</small>"]:::neutral
    n129["Headless browser<br/><small>Port</small>"]:::neutral
    n130["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n131["The machine's files<br/><small>Implementation</small>"]:::neutral
    n132["Node's command line<br/><small>Implementation</small>"]:::neutral
    n133["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n134["Where a package comes from<br/><small>Port</small>"]:::neutral
    n135["Playwright's API<br/><small>Standard</small>"]:::neutral
    n136["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n137["Playwright<br/><small>Package</small>"]:::held
    n138["Commands of a program<br/><small>Port</small>"]:::neutral
    n139["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n140["CSSOM View<br/><small>Standard</small>"]:::neutral
    n141["HTTP<br/><small>Standard</small>"]:::neutral
    n142["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n143["Media types<br/><small>Standard</small>"]:::neutral
    n144["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n145["Server-sent events<br/><small>Standard</small>"]:::neutral
    n146["UI events<br/><small>Standard</small>"]:::neutral
    n147["URI<br/><small>Standard</small>"]:::neutral
    n148["Web Audio API<br/><small>Standard</small>"]:::neutral
    n149["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n54 -->|Depends on| n146
  n55 -->|Implements| n63
  n56 -->|Implements| n67
  n56 -->|Depends on| n22
  n56 -->|Depends on| n149
  n57 -->|Implements| n64
  n57 -->|Depends on| n144
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
  n76 -->|Serves| n71
  n76 -->|Serves| n72
  n76 -->|Serves| n73
  n76 -->|Serves| n74
  n77 -->|Serves| n71
  n77 -->|Serves| n72
  n77 -->|Serves| n73
  n77 -->|Serves| n74
  n77 -->|Serves| n75
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
  n84 -->|Serves| n71
  n84 -->|Serves| n72
  n84 -->|Serves| n73
  n84 -->|Serves| n74
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
  n89 -->|Serves| n75
  n90 -->|Serves| n71
  n90 -->|Serves| n72
  n90 -->|Serves| n73
  n90 -->|Serves| n74
  n90 -->|Serves| n75
  n91 -->|Serves| n75
  n92 -->|Refines| n75
  n92 -->|Depends on| n0
  n93 -->|Accepts| n92
  n94 -->|Refines| n75
  n94 -->|Depends on| n0
  n95 -->|Accepts| n94
  n96 -->|Refines| n75
  n97 -->|Accepts| n96
  n98 -->|Refines| n75
  n98 -->|Depends on| n0
  n99 -->|Accepts| n98
  n100 -->|Refines| n75
  n100 -->|Depends on| n0
  n101 -->|Accepts| n100
  n102 -->|Verifies| n61
  n102 -->|Verifies| n70
  n102 -->|Verifies| n51
  n102 -->|Verifies| n60
  n102 -->|In| n108
  n102 -->|Depends on| n63
  n102 -->|Depends on| n67
  n102 -->|Depends on| n66
  n102 -->|Depends on| n64
  n102 -->|Depends on| n65
  n102 -->|Depends on| n50
  n102 -->|Depends on| n69
  n102 -->|Depends on| n106
  n102 -->|Depends on| n0
  n102 -->|Depends on| n105
  n103 -->|Verifies| n7
  n103 -->|In| n108
  n103 -->|Depends on| n7
  n103 -->|Depends on| n106
  n103 -->|Depends on| n0
  n103 -->|Depends on| n105
  n104 -->|Chooses| n61
  n104 -->|Chooses| n70
  n104 -->|Chooses| n51
  n104 -->|Chooses| n60
  n104 -->|Chooses| n127
  n104 -->|Chooses| n124
  n104 -->|In| n108
  n104 -->|Follows| n49
  n104 -->|Serves| n73
  n105 -->|Written in| n107
  n109 -->|Verifies| n127
  n109 -->|Verifies| n124
  n109 -->|In| n108
  n109 -->|Depends on| n126
  n109 -->|Depends on| n128
  n109 -->|Depends on| n129
  n109 -->|Depends on| n125
  n109 -->|Depends on| n106
  n109 -->|Depends on| n105
  n110 -->|Serves| n71
  n111 -->|Serves| n71
  n112 -->|Serves| n71
  n113 -->|Serves| n71
  n114 -->|Serves| n71
  n115 -->|Serves| n71
  n116 -->|Serves| n71
  n117 -->|Serves| n71
  n118 -->|Serves| n71
  n119 -->|Serves| n71
  n120 -->|Serves| n71
  n121 -->|Serves| n71
  n122 -->|Serves| n71
  n123 -->|Serves| n71
  n124 -->|Implements| n129
  n124 -->|Implements| n125
  n124 -->|Depends on| n0
  n127 -->|Implements| n126
  n127 -->|Implements| n128
  n127 -->|Depends on| n7
  n127 -->|Depends on| n2
  n131 -->|Implements| n126
  n131 -->|Depends on| n8
  n131 -->|Depends on| n113
  n132 -->|Implements| n138
  n132 -->|Depends on| n111
  n132 -->|Depends on| n110
  n132 -->|Depends on| n3
  n133 -->|Serves| n73
  n135 -->|Serves| n71
  n136 -->|Implements| n129
  n136 -->|Uses| n137
  n136 -->|Depends on| n130
  n136 -->|Depends on| n135
  n136 -->|Depends on| n0
  n136 -->|Depends on| n26
  n139 -->|Serves| n73
  n139 -->|Applied by| n138
  n139 -->|Applied by| n132
  n139 -->|Applied by| n126
  n139 -->|Applied by| n128
  n139 -->|Applied by| n131
  n139 -->|Applied by| n127
  n139 -->|Applied by| n129
  n139 -->|Applied by| n136
  n139 -->|Applied by| n125
  n139 -->|Applied by| n124
  n139 -->|Applied by| n134
  n140 -->|Serves| n71
  n141 -->|Serves| n71
  n142 -->|Serves| n71
  n143 -->|Serves| n71
  n144 -->|Serves| n71
  n145 -->|Serves| n71
  n146 -->|Serves| n71
  n147 -->|Serves| n71
  n148 -->|Serves| n71
  n149 -->|Serves| n71
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
