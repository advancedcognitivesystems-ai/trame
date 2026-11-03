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
    n82["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n90["Directions<br/><small>Vocabulary</small>"]:::neutral
    n91["As many links as asked<br/><small>Requirement</small>"]:::unknown
    n92["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n93["A node never reaches what it must not<br/><small>Requirement</small>"]:::unknown
    n94["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n95["A node reaches what it must<br/><small>Requirement</small>"]:::unknown
    n96["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n97["Effects a node may not have<br/><small>Requirement</small>"]:::unknown
    n98["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n99["Words of a vocabulary<br/><small>Requirement</small>"]:::unknown
    n100["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n101["The device, in memory<br/><small>Scenario</small>"]:::held
    n102["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n103["In memory<br/><small>Technical choice</small>"]:::held
    n104["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n105["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n106["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n107["Test<br/><small>Environment</small>"]:::neutral
    n108["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n109["Exit status<br/><small>Standard</small>"]:::neutral
    n110["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n111["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n112["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n113["Node.js events<br/><small>Standard</small>"]:::neutral
    n114["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n115["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n116["npm's command line<br/><small>Standard</small>"]:::neutral
    n117["npm's manifest<br/><small>Standard</small>"]:::neutral
    n118["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n119["Positions in a file<br/><small>Standard</small>"]:::neutral
    n120["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n121["Text file<br/><small>Standard</small>"]:::neutral
    n122["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n123["A browser kept in memory<br/><small>Function</small>"]:::held
    n124["Browser script<br/><small>Port</small>"]:::neutral
    n125["Project files<br/><small>Port</small>"]:::neutral
    n126["Files kept in memory<br/><small>Function</small>"]:::held
    n127["Files written<br/><small>Port</small>"]:::neutral
    n128["Headless browser<br/><small>Port</small>"]:::neutral
    n129["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n130["The machine's files<br/><small>Implementation</small>"]:::neutral
    n131["Node's command line<br/><small>Implementation</small>"]:::neutral
    n132["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n133["Where a package comes from<br/><small>Port</small>"]:::neutral
    n134["Playwright's API<br/><small>Standard</small>"]:::neutral
    n135["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n136["Playwright<br/><small>Package</small>"]:::held
    n137["Commands of a program<br/><small>Port</small>"]:::neutral
    n138["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n139["CSSOM View<br/><small>Standard</small>"]:::neutral
    n140["HTTP<br/><small>Standard</small>"]:::neutral
    n141["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n142["Media types<br/><small>Standard</small>"]:::neutral
    n143["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n144["Server-sent events<br/><small>Standard</small>"]:::neutral
    n145["UI events<br/><small>Standard</small>"]:::neutral
    n146["URI<br/><small>Standard</small>"]:::neutral
    n147["Web Audio API<br/><small>Standard</small>"]:::neutral
    n148["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n54 -->|Depends on| n145
  n55 -->|Implements| n63
  n56 -->|Implements| n67
  n56 -->|Depends on| n22
  n56 -->|Depends on| n148
  n57 -->|Implements| n64
  n57 -->|Depends on| n143
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
  n88 -->|Serves| n75
  n89 -->|Serves| n71
  n89 -->|Serves| n72
  n89 -->|Serves| n73
  n89 -->|Serves| n74
  n89 -->|Serves| n75
  n90 -->|Serves| n75
  n91 -->|Refines| n75
  n91 -->|Depends on| n0
  n92 -->|Accepts| n91
  n93 -->|Refines| n75
  n93 -->|Depends on| n0
  n94 -->|Accepts| n93
  n95 -->|Refines| n75
  n96 -->|Accepts| n95
  n97 -->|Refines| n75
  n97 -->|Depends on| n0
  n98 -->|Accepts| n97
  n99 -->|Refines| n75
  n99 -->|Depends on| n0
  n100 -->|Accepts| n99
  n101 -->|Verifies| n61
  n101 -->|Verifies| n70
  n101 -->|Verifies| n51
  n101 -->|Verifies| n60
  n101 -->|In| n107
  n101 -->|Depends on| n63
  n101 -->|Depends on| n67
  n101 -->|Depends on| n66
  n101 -->|Depends on| n64
  n101 -->|Depends on| n65
  n101 -->|Depends on| n50
  n101 -->|Depends on| n69
  n101 -->|Depends on| n105
  n101 -->|Depends on| n0
  n101 -->|Depends on| n104
  n102 -->|Verifies| n7
  n102 -->|In| n107
  n102 -->|Depends on| n7
  n102 -->|Depends on| n105
  n102 -->|Depends on| n0
  n102 -->|Depends on| n104
  n103 -->|Chooses| n61
  n103 -->|Chooses| n70
  n103 -->|Chooses| n51
  n103 -->|Chooses| n60
  n103 -->|Chooses| n126
  n103 -->|Chooses| n123
  n103 -->|In| n107
  n103 -->|Follows| n49
  n103 -->|Serves| n73
  n104 -->|Written in| n106
  n108 -->|Verifies| n126
  n108 -->|Verifies| n123
  n108 -->|In| n107
  n108 -->|Depends on| n125
  n108 -->|Depends on| n127
  n108 -->|Depends on| n128
  n108 -->|Depends on| n124
  n108 -->|Depends on| n105
  n108 -->|Depends on| n104
  n109 -->|Serves| n71
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
  n123 -->|Implements| n128
  n123 -->|Implements| n124
  n123 -->|Depends on| n0
  n126 -->|Implements| n125
  n126 -->|Implements| n127
  n126 -->|Depends on| n7
  n126 -->|Depends on| n2
  n130 -->|Implements| n125
  n130 -->|Depends on| n8
  n130 -->|Depends on| n112
  n131 -->|Implements| n137
  n131 -->|Depends on| n110
  n131 -->|Depends on| n109
  n131 -->|Depends on| n3
  n132 -->|Serves| n73
  n134 -->|Serves| n71
  n135 -->|Implements| n128
  n135 -->|Uses| n136
  n135 -->|Depends on| n129
  n135 -->|Depends on| n134
  n135 -->|Depends on| n0
  n135 -->|Depends on| n26
  n138 -->|Serves| n73
  n138 -->|Applied by| n137
  n138 -->|Applied by| n131
  n138 -->|Applied by| n125
  n138 -->|Applied by| n127
  n138 -->|Applied by| n130
  n138 -->|Applied by| n126
  n138 -->|Applied by| n128
  n138 -->|Applied by| n135
  n138 -->|Applied by| n124
  n138 -->|Applied by| n123
  n138 -->|Applied by| n133
  n139 -->|Serves| n71
  n140 -->|Serves| n71
  n141 -->|Serves| n71
  n142 -->|Serves| n71
  n143 -->|Serves| n71
  n144 -->|Serves| n71
  n145 -->|Serves| n71
  n146 -->|Serves| n71
  n147 -->|Serves| n71
  n148 -->|Serves| n71
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
