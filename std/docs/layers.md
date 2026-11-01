# Layers

*The graph in force on 1 November 2026, ordered by distance to the goals.*

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
  subgraph patterns["Standard library · Design patterns"]
    n44["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n45["Adapter<br/><small>Design pattern</small>"]:::neutral
    n46["Bridge<br/><small>Design pattern</small>"]:::neutral
    n47["Repository<br/><small>Design pattern</small>"]:::neutral
    n48["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n49["Animation frames<br/><small>Port</small>"]:::neutral
    n50["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n51["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n52["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n53["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n54["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n55["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n56["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n57["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n58["Languages of the device<br/><small>Port</small>"]:::neutral
    n59["Frames turned by hand<br/><small>Function</small>"]:::held
    n60["Preferences kept in memory<br/><small>Function</small>"]:::held
    n61["Loading of a page<br/><small>Port</small>"]:::neutral
    n62["Preferences<br/><small>Port</small>"]:::neutral
    n63["Screen kept awake<br/><small>Port</small>"]:::neutral
    n64["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n65["What was said<br/><small>Port</small>"]:::neutral
    n66["Speech<br/><small>Port</small>"]:::neutral
    n67["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n68["Time turned by hand<br/><small>Port</small>"]:::neutral
    n69["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n70["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n71["Known designs, named<br/><small>Goal</small>"]:::neutral
    n72["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n73["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n74["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n75["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n76["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n78["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n79["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n87["Directions<br/><small>Vocabulary</small>"]:::neutral
    n88["As many links as asked<br/><small>Requirement</small>"]:::unknown
    n89["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n90["A node never reaches what it must not<br/><small>Requirement</small>"]:::unknown
    n91["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n92["A node reaches what it must<br/><small>Requirement</small>"]:::unknown
    n93["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n94["Effects a node may not have<br/><small>Requirement</small>"]:::unknown
    n95["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n96["Words of a vocabulary<br/><small>Requirement</small>"]:::unknown
    n97["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n98["The device, in memory<br/><small>Scenario</small>"]:::held
    n99["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n100["In memory<br/><small>Technical choice</small>"]:::held
    n101["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n102["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n103["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n104["Test<br/><small>Environment</small>"]:::neutral
    n105["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n106["Exit status<br/><small>Standard</small>"]:::neutral
    n107["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n108["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n109["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n110["Node.js events<br/><small>Standard</small>"]:::neutral
    n111["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n112["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n113["npm's command line<br/><small>Standard</small>"]:::neutral
    n114["npm's manifest<br/><small>Standard</small>"]:::neutral
    n115["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n116["Positions in a file<br/><small>Standard</small>"]:::neutral
    n117["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n118["Text file<br/><small>Standard</small>"]:::neutral
    n119["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n120["A browser kept in memory<br/><small>Function</small>"]:::held
    n121["Browser script<br/><small>Port</small>"]:::neutral
    n122["Project files<br/><small>Port</small>"]:::neutral
    n123["Files kept in memory<br/><small>Function</small>"]:::held
    n124["Files written<br/><small>Port</small>"]:::neutral
    n125["Headless browser<br/><small>Port</small>"]:::neutral
    n126["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n127["The machine's files<br/><small>Implementation</small>"]:::neutral
    n128["Node's command line<br/><small>Implementation</small>"]:::neutral
    n129["Where a package comes from<br/><small>Port</small>"]:::neutral
    n130["Playwright's API<br/><small>Standard</small>"]:::neutral
    n131["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n132["Playwright<br/><small>Package</small>"]:::held
    n133["Commands of a program<br/><small>Port</small>"]:::neutral
    n134["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n135["CSSOM View<br/><small>Standard</small>"]:::neutral
    n136["HTTP<br/><small>Standard</small>"]:::neutral
    n137["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n138["Media types<br/><small>Standard</small>"]:::neutral
    n139["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n140["Server-sent events<br/><small>Standard</small>"]:::neutral
    n141["UI events<br/><small>Standard</small>"]:::neutral
    n142["URI<br/><small>Standard</small>"]:::neutral
    n143["Web Audio API<br/><small>Standard</small>"]:::neutral
    n144["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n73
  n1 -->|Serves| n73
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n73
  n2 -->|Depends on| n1
  n3 -->|Serves| n73
  n3 -->|Depends on| n11
  n4 -->|Serves| n70
  n5 -->|Serves| n70
  n6 -->|Serves| n70
  n7 -->|Serves| n73
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n70
  n9 -->|Serves| n70
  n10 -->|Serves| n70
  n11 -->|Serves| n70
  n12 -->|Serves| n70
  n13 -->|Serves| n70
  n14 -->|Serves| n72
  n14 -->|Depends on| n15
  n15 -->|Serves| n72
  n17 -->|Serves| n70
  n18 -->|Serves| n70
  n19 -->|Serves| n70
  n20 -->|Serves| n70
  n21 -->|Serves| n70
  n22 -->|Serves| n70
  n23 -->|Written with| n28
  n23 -->|Serves| n70
  n24 -->|Serves| n70
  n26 -->|Written with| n28
  n26 -->|Serves| n70
  n27 -->|Serves| n70
  n28 -->|Written in| n25
  n29 -->|Refines| n74
  n30 -->|Accepts| n29
  n31 -->|Refines| n74
  n31 -->|Depends on| n0
  n32 -->|Accepts| n31
  n33 -->|Serves| n74
  n34 -->|Refines| n74
  n34 -->|Depends on| n0
  n35 -->|Accepts| n34
  n36 -->|Refines| n74
  n37 -->|Accepts| n36
  n38 -->|Refines| n74
  n39 -->|Accepts| n38
  n40 -->|Refines| n74
  n41 -->|Accepts| n40
  n42 -->|Refines| n74
  n42 -->|Depends on| n0
  n43 -->|Accepts| n42
  n44 -->|Serves| n71
  n45 -->|Serves| n71
  n46 -->|Serves| n71
  n47 -->|Serves| n71
  n48 -->|Serves| n71
  n50 -->|Implements| n63
  n50 -->|Implements| n64
  n51 -->|Implements| n49
  n52 -->|Implements| n58
  n53 -->|Implements| n61
  n53 -->|Depends on| n141
  n54 -->|Implements| n62
  n55 -->|Implements| n66
  n55 -->|Depends on| n22
  n55 -->|Depends on| n144
  n56 -->|Implements| n63
  n56 -->|Depends on| n139
  n57 -->|Serves| n72
  n57 -->|Applied by| n62
  n57 -->|Applied by| n54
  n57 -->|Applied by| n60
  n57 -->|Applied by| n58
  n57 -->|Applied by| n52
  n57 -->|Applied by| n66
  n57 -->|Applied by| n55
  n57 -->|Applied by| n69
  n57 -->|Applied by| n65
  n57 -->|Applied by| n63
  n57 -->|Applied by| n56
  n57 -->|Applied by| n50
  n57 -->|Applied by| n64
  n57 -->|Applied by| n49
  n57 -->|Applied by| n51
  n57 -->|Applied by| n59
  n57 -->|Applied by| n68
  n59 -->|Implements| n49
  n59 -->|Implements| n68
  n59 -->|Depends on| n0
  n60 -->|Implements| n62
  n67 -->|Serves| n72
  n67 -->|Applied by| n61
  n67 -->|Applied by| n53
  n69 -->|Implements| n66
  n69 -->|Implements| n65
  n75 -->|Serves| n70
  n75 -->|Serves| n71
  n75 -->|Serves| n72
  n75 -->|Serves| n73
  n76 -->|Serves| n70
  n76 -->|Serves| n71
  n76 -->|Serves| n72
  n76 -->|Serves| n73
  n76 -->|Serves| n74
  n77 -->|Serves| n70
  n77 -->|Serves| n71
  n77 -->|Serves| n72
  n77 -->|Serves| n73
  n77 -->|Serves| n74
  n78 -->|Serves| n70
  n78 -->|Serves| n71
  n78 -->|Serves| n72
  n78 -->|Serves| n73
  n78 -->|Serves| n74
  n79 -->|Serves| n70
  n79 -->|Serves| n71
  n79 -->|Serves| n72
  n79 -->|Serves| n73
  n80 -->|Serves| n70
  n80 -->|Serves| n71
  n80 -->|Serves| n72
  n80 -->|Serves| n73
  n81 -->|Serves| n70
  n81 -->|Serves| n71
  n81 -->|Serves| n72
  n81 -->|Serves| n73
  n82 -->|Serves| n70
  n82 -->|Serves| n71
  n82 -->|Serves| n72
  n82 -->|Serves| n73
  n83 -->|Serves| n70
  n83 -->|Serves| n71
  n83 -->|Serves| n72
  n83 -->|Serves| n73
  n84 -->|Serves| n70
  n84 -->|Serves| n71
  n84 -->|Serves| n72
  n84 -->|Serves| n73
  n85 -->|Serves| n70
  n85 -->|Serves| n71
  n85 -->|Serves| n72
  n85 -->|Serves| n73
  n85 -->|Serves| n74
  n86 -->|Serves| n70
  n86 -->|Serves| n71
  n86 -->|Serves| n72
  n86 -->|Serves| n73
  n86 -->|Serves| n74
  n87 -->|Serves| n74
  n88 -->|Refines| n74
  n88 -->|Depends on| n0
  n89 -->|Accepts| n88
  n90 -->|Refines| n74
  n90 -->|Depends on| n0
  n91 -->|Accepts| n90
  n92 -->|Refines| n74
  n93 -->|Accepts| n92
  n94 -->|Refines| n74
  n94 -->|Depends on| n0
  n95 -->|Accepts| n94
  n96 -->|Refines| n74
  n96 -->|Depends on| n0
  n97 -->|Accepts| n96
  n98 -->|Verifies| n60
  n98 -->|Verifies| n69
  n98 -->|Verifies| n50
  n98 -->|Verifies| n59
  n98 -->|In| n104
  n98 -->|Depends on| n62
  n98 -->|Depends on| n66
  n98 -->|Depends on| n65
  n98 -->|Depends on| n63
  n98 -->|Depends on| n64
  n98 -->|Depends on| n49
  n98 -->|Depends on| n68
  n98 -->|Depends on| n102
  n98 -->|Depends on| n0
  n98 -->|Depends on| n101
  n99 -->|Verifies| n7
  n99 -->|In| n104
  n99 -->|Depends on| n7
  n99 -->|Depends on| n102
  n99 -->|Depends on| n0
  n99 -->|Depends on| n101
  n100 -->|Chooses| n60
  n100 -->|Chooses| n69
  n100 -->|Chooses| n50
  n100 -->|Chooses| n59
  n100 -->|Chooses| n123
  n100 -->|Chooses| n120
  n100 -->|In| n104
  n100 -->|Follows| n48
  n100 -->|Serves| n72
  n101 -->|Written in| n103
  n105 -->|Verifies| n123
  n105 -->|Verifies| n120
  n105 -->|In| n104
  n105 -->|Depends on| n122
  n105 -->|Depends on| n124
  n105 -->|Depends on| n125
  n105 -->|Depends on| n121
  n105 -->|Depends on| n102
  n105 -->|Depends on| n101
  n106 -->|Serves| n70
  n107 -->|Serves| n70
  n108 -->|Serves| n70
  n109 -->|Serves| n70
  n110 -->|Serves| n70
  n111 -->|Serves| n70
  n112 -->|Serves| n70
  n113 -->|Serves| n70
  n114 -->|Serves| n70
  n115 -->|Serves| n70
  n116 -->|Serves| n70
  n117 -->|Serves| n70
  n118 -->|Serves| n70
  n119 -->|Serves| n70
  n120 -->|Implements| n125
  n120 -->|Implements| n121
  n120 -->|Depends on| n0
  n123 -->|Implements| n122
  n123 -->|Implements| n124
  n123 -->|Depends on| n7
  n123 -->|Depends on| n2
  n127 -->|Implements| n122
  n127 -->|Depends on| n8
  n127 -->|Depends on| n109
  n128 -->|Implements| n133
  n128 -->|Depends on| n107
  n128 -->|Depends on| n106
  n128 -->|Depends on| n3
  n130 -->|Serves| n70
  n131 -->|Implements| n125
  n131 -->|Uses| n132
  n131 -->|Depends on| n126
  n131 -->|Depends on| n130
  n131 -->|Depends on| n0
  n134 -->|Serves| n72
  n134 -->|Applied by| n133
  n134 -->|Applied by| n128
  n134 -->|Applied by| n122
  n134 -->|Applied by| n124
  n134 -->|Applied by| n127
  n134 -->|Applied by| n123
  n134 -->|Applied by| n125
  n134 -->|Applied by| n131
  n134 -->|Applied by| n121
  n134 -->|Applied by| n120
  n134 -->|Applied by| n129
  n135 -->|Serves| n70
  n136 -->|Serves| n70
  n137 -->|Serves| n70
  n138 -->|Serves| n70
  n139 -->|Serves| n70
  n140 -->|Serves| n70
  n141 -->|Serves| n70
  n142 -->|Serves| n70
  n143 -->|Serves| n70
  n144 -->|Serves| n70
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
