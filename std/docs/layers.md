# Layers

*The graph in force on 31 October 2026, ordered by distance to the goals.*

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
  subgraph html["Standard library · HTML and CSS"]
    n14["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n15["CSS<br/><small>Standard</small>"]:::neutral
    n16["HTML<br/><small>Standard</small>"]:::neutral
    n17["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n18["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n19["Language tags<br/><small>Standard</small>"]:::neutral
    n20["Ratio<br/><small>Quantity</small>"]:::neutral
    n21["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n22["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n23["Time<br/><small>Quantity</small>"]:::neutral
    n24["Units of measure<br/><small>Standard</small>"]:::neutral
    n25["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n26["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::unknown
    n27["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n28["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::unknown
    n29["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n30["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n31["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::unknown
    n32["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n33["The project's rules hold<br/><small>Requirement</small>"]:::unknown
    n34["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n35["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::unknown
    n36["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n37["The product a shipment serves holds<br/><small>Requirement</small>"]:::unknown
    n38["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n39["The code a shipment ships is verified<br/><small>Requirement</small>"]:::unknown
    n40["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph patterns["Standard library · Design patterns"]
    n41["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n42["Adapter<br/><small>Design pattern</small>"]:::neutral
    n43["Bridge<br/><small>Design pattern</small>"]:::neutral
    n44["Repository<br/><small>Design pattern</small>"]:::neutral
    n45["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n46["Animation frames<br/><small>Port</small>"]:::neutral
    n47["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n48["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n49["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n50["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n51["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n52["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n53["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n54["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n55["Languages of the device<br/><small>Port</small>"]:::neutral
    n56["Frames turned by hand<br/><small>Function</small>"]:::held
    n57["Preferences kept in memory<br/><small>Function</small>"]:::held
    n58["Loading of a page<br/><small>Port</small>"]:::neutral
    n59["Preferences<br/><small>Port</small>"]:::neutral
    n60["Screen kept awake<br/><small>Port</small>"]:::neutral
    n61["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n62["What was said<br/><small>Port</small>"]:::neutral
    n63["Speech<br/><small>Port</small>"]:::neutral
    n64["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n65["Time turned by hand<br/><small>Port</small>"]:::neutral
    n66["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n67["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n68["Known designs, named<br/><small>Goal</small>"]:::neutral
    n69["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n70["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n71["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n72["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n73["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n74["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n75["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n76["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n78["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n79["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n84["Directions<br/><small>Vocabulary</small>"]:::neutral
    n85["As many links as asked<br/><small>Requirement</small>"]:::unknown
    n86["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n87["A node never reaches what it must not<br/><small>Requirement</small>"]:::unknown
    n88["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n89["A node reaches what it must<br/><small>Requirement</small>"]:::unknown
    n90["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n91["Effects a node may not have<br/><small>Requirement</small>"]:::unknown
    n92["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n93["Words of a vocabulary<br/><small>Requirement</small>"]:::unknown
    n94["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n95["The device, in memory<br/><small>Scenario</small>"]:::held
    n96["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n97["In memory<br/><small>Technical choice</small>"]:::held
    n98["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n99["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n100["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n101["Test<br/><small>Environment</small>"]:::neutral
    n102["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n103["Exit status<br/><small>Standard</small>"]:::neutral
    n104["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n105["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n106["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n107["Node.js events<br/><small>Standard</small>"]:::neutral
    n108["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n109["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n110["npm's command line<br/><small>Standard</small>"]:::neutral
    n111["npm's manifest<br/><small>Standard</small>"]:::neutral
    n112["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n113["Positions in a file<br/><small>Standard</small>"]:::neutral
    n114["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n115["Text file<br/><small>Standard</small>"]:::neutral
    n116["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n117["A browser kept in memory<br/><small>Function</small>"]:::held
    n118["Browser script<br/><small>Port</small>"]:::neutral
    n119["Project files<br/><small>Port</small>"]:::neutral
    n120["Files kept in memory<br/><small>Function</small>"]:::held
    n121["Files written<br/><small>Port</small>"]:::neutral
    n122["Headless browser<br/><small>Port</small>"]:::neutral
    n123["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n124["The machine's files<br/><small>Implementation</small>"]:::neutral
    n125["Node's command line<br/><small>Implementation</small>"]:::neutral
    n126["Playwright's API<br/><small>Standard</small>"]:::neutral
    n127["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n128["Playwright<br/><small>Package</small>"]:::held
    n129["Commands of a program<br/><small>Port</small>"]:::neutral
    n130["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n131["CSSOM View<br/><small>Standard</small>"]:::neutral
    n132["HTTP<br/><small>Standard</small>"]:::neutral
    n133["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n134["Media types<br/><small>Standard</small>"]:::neutral
    n135["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n136["Server-sent events<br/><small>Standard</small>"]:::neutral
    n137["UI events<br/><small>Standard</small>"]:::neutral
    n138["URI<br/><small>Standard</small>"]:::neutral
    n139["Web Audio API<br/><small>Standard</small>"]:::neutral
    n140["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n70
  n1 -->|Serves| n70
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n70
  n2 -->|Depends on| n1
  n3 -->|Serves| n70
  n3 -->|Depends on| n11
  n4 -->|Serves| n67
  n5 -->|Serves| n67
  n6 -->|Serves| n67
  n7 -->|Serves| n70
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n67
  n9 -->|Serves| n67
  n10 -->|Serves| n67
  n11 -->|Serves| n67
  n12 -->|Serves| n67
  n13 -->|Serves| n67
  n14 -->|Serves| n67
  n15 -->|Serves| n67
  n16 -->|Serves| n67
  n17 -->|Serves| n67
  n18 -->|Serves| n67
  n19 -->|Serves| n67
  n20 -->|Written with| n25
  n20 -->|Serves| n67
  n21 -->|Serves| n67
  n23 -->|Written with| n25
  n23 -->|Serves| n67
  n24 -->|Serves| n67
  n25 -->|Written in| n22
  n26 -->|Refines| n71
  n27 -->|Accepts| n26
  n28 -->|Refines| n71
  n28 -->|Depends on| n0
  n29 -->|Accepts| n28
  n30 -->|Serves| n71
  n31 -->|Refines| n71
  n31 -->|Depends on| n0
  n32 -->|Accepts| n31
  n33 -->|Refines| n71
  n34 -->|Accepts| n33
  n35 -->|Refines| n71
  n36 -->|Accepts| n35
  n37 -->|Refines| n71
  n38 -->|Accepts| n37
  n39 -->|Refines| n71
  n39 -->|Depends on| n0
  n40 -->|Accepts| n39
  n41 -->|Serves| n68
  n42 -->|Serves| n68
  n43 -->|Serves| n68
  n44 -->|Serves| n68
  n45 -->|Serves| n68
  n47 -->|Implements| n60
  n47 -->|Implements| n61
  n48 -->|Implements| n46
  n49 -->|Implements| n55
  n50 -->|Implements| n58
  n50 -->|Depends on| n137
  n51 -->|Implements| n59
  n52 -->|Implements| n63
  n52 -->|Depends on| n19
  n52 -->|Depends on| n140
  n53 -->|Implements| n60
  n53 -->|Depends on| n135
  n54 -->|Serves| n69
  n54 -->|Applied by| n59
  n54 -->|Applied by| n51
  n54 -->|Applied by| n57
  n54 -->|Applied by| n55
  n54 -->|Applied by| n49
  n54 -->|Applied by| n63
  n54 -->|Applied by| n52
  n54 -->|Applied by| n66
  n54 -->|Applied by| n62
  n54 -->|Applied by| n60
  n54 -->|Applied by| n53
  n54 -->|Applied by| n47
  n54 -->|Applied by| n61
  n54 -->|Applied by| n46
  n54 -->|Applied by| n48
  n54 -->|Applied by| n56
  n54 -->|Applied by| n65
  n56 -->|Implements| n46
  n56 -->|Implements| n65
  n56 -->|Depends on| n0
  n57 -->|Implements| n59
  n64 -->|Serves| n69
  n64 -->|Applied by| n58
  n64 -->|Applied by| n50
  n66 -->|Implements| n63
  n66 -->|Implements| n62
  n72 -->|Serves| n67
  n72 -->|Serves| n68
  n72 -->|Serves| n69
  n72 -->|Serves| n70
  n73 -->|Serves| n67
  n73 -->|Serves| n68
  n73 -->|Serves| n69
  n73 -->|Serves| n70
  n73 -->|Serves| n71
  n74 -->|Serves| n67
  n74 -->|Serves| n68
  n74 -->|Serves| n69
  n74 -->|Serves| n70
  n74 -->|Serves| n71
  n75 -->|Serves| n67
  n75 -->|Serves| n68
  n75 -->|Serves| n69
  n75 -->|Serves| n70
  n75 -->|Serves| n71
  n76 -->|Serves| n67
  n76 -->|Serves| n68
  n76 -->|Serves| n69
  n76 -->|Serves| n70
  n77 -->|Serves| n67
  n77 -->|Serves| n68
  n77 -->|Serves| n69
  n77 -->|Serves| n70
  n78 -->|Serves| n67
  n78 -->|Serves| n68
  n78 -->|Serves| n69
  n78 -->|Serves| n70
  n79 -->|Serves| n67
  n79 -->|Serves| n68
  n79 -->|Serves| n69
  n79 -->|Serves| n70
  n80 -->|Serves| n67
  n80 -->|Serves| n68
  n80 -->|Serves| n69
  n80 -->|Serves| n70
  n81 -->|Serves| n67
  n81 -->|Serves| n68
  n81 -->|Serves| n69
  n81 -->|Serves| n70
  n82 -->|Serves| n67
  n82 -->|Serves| n68
  n82 -->|Serves| n69
  n82 -->|Serves| n70
  n82 -->|Serves| n71
  n83 -->|Serves| n67
  n83 -->|Serves| n68
  n83 -->|Serves| n69
  n83 -->|Serves| n70
  n83 -->|Serves| n71
  n84 -->|Serves| n71
  n85 -->|Refines| n71
  n85 -->|Depends on| n0
  n86 -->|Accepts| n85
  n87 -->|Refines| n71
  n87 -->|Depends on| n0
  n88 -->|Accepts| n87
  n89 -->|Refines| n71
  n90 -->|Accepts| n89
  n91 -->|Refines| n71
  n91 -->|Depends on| n0
  n92 -->|Accepts| n91
  n93 -->|Refines| n71
  n93 -->|Depends on| n0
  n94 -->|Accepts| n93
  n95 -->|Verifies| n57
  n95 -->|Verifies| n66
  n95 -->|Verifies| n47
  n95 -->|Verifies| n56
  n95 -->|In| n101
  n95 -->|Depends on| n59
  n95 -->|Depends on| n63
  n95 -->|Depends on| n62
  n95 -->|Depends on| n60
  n95 -->|Depends on| n61
  n95 -->|Depends on| n46
  n95 -->|Depends on| n65
  n95 -->|Depends on| n99
  n95 -->|Depends on| n0
  n95 -->|Depends on| n98
  n96 -->|Verifies| n7
  n96 -->|In| n101
  n96 -->|Depends on| n7
  n96 -->|Depends on| n99
  n96 -->|Depends on| n0
  n96 -->|Depends on| n98
  n97 -->|Chooses| n57
  n97 -->|Chooses| n66
  n97 -->|Chooses| n47
  n97 -->|Chooses| n56
  n97 -->|Chooses| n120
  n97 -->|Chooses| n117
  n97 -->|In| n101
  n97 -->|Follows| n45
  n97 -->|Serves| n69
  n98 -->|Written in| n100
  n102 -->|Verifies| n120
  n102 -->|Verifies| n117
  n102 -->|In| n101
  n102 -->|Depends on| n119
  n102 -->|Depends on| n121
  n102 -->|Depends on| n122
  n102 -->|Depends on| n118
  n102 -->|Depends on| n99
  n102 -->|Depends on| n98
  n103 -->|Serves| n67
  n104 -->|Serves| n67
  n105 -->|Serves| n67
  n106 -->|Serves| n67
  n107 -->|Serves| n67
  n108 -->|Serves| n67
  n109 -->|Serves| n67
  n110 -->|Serves| n67
  n111 -->|Serves| n67
  n112 -->|Serves| n67
  n113 -->|Serves| n67
  n114 -->|Serves| n67
  n115 -->|Serves| n67
  n116 -->|Serves| n67
  n117 -->|Implements| n122
  n117 -->|Implements| n118
  n117 -->|Depends on| n0
  n120 -->|Implements| n119
  n120 -->|Implements| n121
  n120 -->|Depends on| n7
  n120 -->|Depends on| n2
  n124 -->|Implements| n119
  n124 -->|Depends on| n8
  n124 -->|Depends on| n106
  n125 -->|Implements| n129
  n125 -->|Depends on| n104
  n125 -->|Depends on| n103
  n125 -->|Depends on| n3
  n126 -->|Serves| n67
  n127 -->|Implements| n122
  n127 -->|Uses| n128
  n127 -->|Depends on| n123
  n127 -->|Depends on| n126
  n127 -->|Depends on| n0
  n130 -->|Serves| n69
  n130 -->|Applied by| n129
  n130 -->|Applied by| n125
  n130 -->|Applied by| n119
  n130 -->|Applied by| n121
  n130 -->|Applied by| n124
  n130 -->|Applied by| n120
  n130 -->|Applied by| n122
  n130 -->|Applied by| n127
  n130 -->|Applied by| n118
  n130 -->|Applied by| n117
  n131 -->|Serves| n67
  n132 -->|Serves| n67
  n133 -->|Serves| n67
  n134 -->|Serves| n67
  n135 -->|Serves| n67
  n136 -->|Serves| n67
  n137 -->|Serves| n67
  n138 -->|Serves| n67
  n139 -->|Serves| n67
  n140 -->|Serves| n67
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
