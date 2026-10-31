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
  subgraph effects["Standard library · Effects"]
    n14["Effects<br/><small>Vocabulary</small>"]:::neutral
    n15["What the platform may do<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n16["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n17["CSS<br/><small>Standard</small>"]:::neutral
    n18["HTML<br/><small>Standard</small>"]:::neutral
    n19["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n20["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n21["Language tags<br/><small>Standard</small>"]:::neutral
    n22["Ratio<br/><small>Quantity</small>"]:::neutral
    n23["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n24["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n25["Time<br/><small>Quantity</small>"]:::neutral
    n26["Units of measure<br/><small>Standard</small>"]:::neutral
    n27["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n28["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::unknown
    n29["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n30["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::unknown
    n31["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n32["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n33["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::unknown
    n34["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n35["The project's rules hold<br/><small>Requirement</small>"]:::unknown
    n36["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n37["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::unknown
    n38["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n39["The product a shipment serves holds<br/><small>Requirement</small>"]:::unknown
    n40["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n41["The code a shipment ships is verified<br/><small>Requirement</small>"]:::unknown
    n42["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph patterns["Standard library · Design patterns"]
    n43["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n44["Adapter<br/><small>Design pattern</small>"]:::neutral
    n45["Bridge<br/><small>Design pattern</small>"]:::neutral
    n46["Repository<br/><small>Design pattern</small>"]:::neutral
    n47["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n48["Animation frames<br/><small>Port</small>"]:::neutral
    n49["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n50["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n51["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n52["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n53["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n54["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n55["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n56["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n57["Languages of the device<br/><small>Port</small>"]:::neutral
    n58["Frames turned by hand<br/><small>Function</small>"]:::held
    n59["Preferences kept in memory<br/><small>Function</small>"]:::held
    n60["Loading of a page<br/><small>Port</small>"]:::neutral
    n61["Preferences<br/><small>Port</small>"]:::neutral
    n62["Screen kept awake<br/><small>Port</small>"]:::neutral
    n63["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n64["What was said<br/><small>Port</small>"]:::neutral
    n65["Speech<br/><small>Port</small>"]:::neutral
    n66["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n67["Time turned by hand<br/><small>Port</small>"]:::neutral
    n68["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n69["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n70["Known designs, named<br/><small>Goal</small>"]:::neutral
    n71["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n72["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n73["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n74["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n75["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n76["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n78["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n79["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n83["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n86["Directions<br/><small>Vocabulary</small>"]:::neutral
    n87["As many links as asked<br/><small>Requirement</small>"]:::unknown
    n88["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n89["A node never reaches what it must not<br/><small>Requirement</small>"]:::unknown
    n90["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n91["A node reaches what it must<br/><small>Requirement</small>"]:::unknown
    n92["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n93["Effects a node may not have<br/><small>Requirement</small>"]:::unknown
    n94["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n95["Words of a vocabulary<br/><small>Requirement</small>"]:::unknown
    n96["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n97["The device, in memory<br/><small>Scenario</small>"]:::held
    n98["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n99["In memory<br/><small>Technical choice</small>"]:::held
    n100["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n101["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n102["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n103["Test<br/><small>Environment</small>"]:::neutral
    n104["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n105["Exit status<br/><small>Standard</small>"]:::neutral
    n106["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n107["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n108["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n109["Node.js events<br/><small>Standard</small>"]:::neutral
    n110["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n111["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n112["npm's command line<br/><small>Standard</small>"]:::neutral
    n113["npm's manifest<br/><small>Standard</small>"]:::neutral
    n114["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n115["Positions in a file<br/><small>Standard</small>"]:::neutral
    n116["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n117["Text file<br/><small>Standard</small>"]:::neutral
    n118["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n119["A browser kept in memory<br/><small>Function</small>"]:::held
    n120["Browser script<br/><small>Port</small>"]:::neutral
    n121["Project files<br/><small>Port</small>"]:::neutral
    n122["Files kept in memory<br/><small>Function</small>"]:::held
    n123["Files written<br/><small>Port</small>"]:::neutral
    n124["Headless browser<br/><small>Port</small>"]:::neutral
    n125["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n126["The machine's files<br/><small>Implementation</small>"]:::neutral
    n127["Node's command line<br/><small>Implementation</small>"]:::neutral
    n128["Playwright's API<br/><small>Standard</small>"]:::neutral
    n129["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n130["Playwright<br/><small>Package</small>"]:::held
    n131["Commands of a program<br/><small>Port</small>"]:::neutral
    n132["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n133["CSSOM View<br/><small>Standard</small>"]:::neutral
    n134["HTTP<br/><small>Standard</small>"]:::neutral
    n135["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n136["Media types<br/><small>Standard</small>"]:::neutral
    n137["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n138["Server-sent events<br/><small>Standard</small>"]:::neutral
    n139["UI events<br/><small>Standard</small>"]:::neutral
    n140["URI<br/><small>Standard</small>"]:::neutral
    n141["Web Audio API<br/><small>Standard</small>"]:::neutral
    n142["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n72
  n1 -->|Serves| n72
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n72
  n2 -->|Depends on| n1
  n3 -->|Serves| n72
  n3 -->|Depends on| n11
  n4 -->|Serves| n69
  n5 -->|Serves| n69
  n6 -->|Serves| n69
  n7 -->|Serves| n72
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n69
  n9 -->|Serves| n69
  n10 -->|Serves| n69
  n11 -->|Serves| n69
  n12 -->|Serves| n69
  n13 -->|Serves| n69
  n14 -->|Serves| n71
  n16 -->|Serves| n69
  n17 -->|Serves| n69
  n18 -->|Serves| n69
  n19 -->|Serves| n69
  n20 -->|Serves| n69
  n21 -->|Serves| n69
  n22 -->|Written with| n27
  n22 -->|Serves| n69
  n23 -->|Serves| n69
  n25 -->|Written with| n27
  n25 -->|Serves| n69
  n26 -->|Serves| n69
  n27 -->|Written in| n24
  n28 -->|Refines| n73
  n29 -->|Accepts| n28
  n30 -->|Refines| n73
  n30 -->|Depends on| n0
  n31 -->|Accepts| n30
  n32 -->|Serves| n73
  n33 -->|Refines| n73
  n33 -->|Depends on| n0
  n34 -->|Accepts| n33
  n35 -->|Refines| n73
  n36 -->|Accepts| n35
  n37 -->|Refines| n73
  n38 -->|Accepts| n37
  n39 -->|Refines| n73
  n40 -->|Accepts| n39
  n41 -->|Refines| n73
  n41 -->|Depends on| n0
  n42 -->|Accepts| n41
  n43 -->|Serves| n70
  n44 -->|Serves| n70
  n45 -->|Serves| n70
  n46 -->|Serves| n70
  n47 -->|Serves| n70
  n49 -->|Implements| n62
  n49 -->|Implements| n63
  n50 -->|Implements| n48
  n51 -->|Implements| n57
  n52 -->|Implements| n60
  n52 -->|Depends on| n139
  n53 -->|Implements| n61
  n54 -->|Implements| n65
  n54 -->|Depends on| n21
  n54 -->|Depends on| n142
  n55 -->|Implements| n62
  n55 -->|Depends on| n137
  n56 -->|Serves| n71
  n56 -->|Applied by| n61
  n56 -->|Applied by| n53
  n56 -->|Applied by| n59
  n56 -->|Applied by| n57
  n56 -->|Applied by| n51
  n56 -->|Applied by| n65
  n56 -->|Applied by| n54
  n56 -->|Applied by| n68
  n56 -->|Applied by| n64
  n56 -->|Applied by| n62
  n56 -->|Applied by| n55
  n56 -->|Applied by| n49
  n56 -->|Applied by| n63
  n56 -->|Applied by| n48
  n56 -->|Applied by| n50
  n56 -->|Applied by| n58
  n56 -->|Applied by| n67
  n58 -->|Implements| n48
  n58 -->|Implements| n67
  n58 -->|Depends on| n0
  n59 -->|Implements| n61
  n66 -->|Serves| n71
  n66 -->|Applied by| n60
  n66 -->|Applied by| n52
  n68 -->|Implements| n65
  n68 -->|Implements| n64
  n74 -->|Serves| n69
  n74 -->|Serves| n70
  n74 -->|Serves| n71
  n74 -->|Serves| n72
  n75 -->|Serves| n69
  n75 -->|Serves| n70
  n75 -->|Serves| n71
  n75 -->|Serves| n72
  n75 -->|Serves| n73
  n76 -->|Serves| n69
  n76 -->|Serves| n70
  n76 -->|Serves| n71
  n76 -->|Serves| n72
  n76 -->|Serves| n73
  n77 -->|Serves| n69
  n77 -->|Serves| n70
  n77 -->|Serves| n71
  n77 -->|Serves| n72
  n77 -->|Serves| n73
  n78 -->|Serves| n69
  n78 -->|Serves| n70
  n78 -->|Serves| n71
  n78 -->|Serves| n72
  n79 -->|Serves| n69
  n79 -->|Serves| n70
  n79 -->|Serves| n71
  n79 -->|Serves| n72
  n80 -->|Serves| n69
  n80 -->|Serves| n70
  n80 -->|Serves| n71
  n80 -->|Serves| n72
  n81 -->|Serves| n69
  n81 -->|Serves| n70
  n81 -->|Serves| n71
  n81 -->|Serves| n72
  n82 -->|Serves| n69
  n82 -->|Serves| n70
  n82 -->|Serves| n71
  n82 -->|Serves| n72
  n83 -->|Serves| n69
  n83 -->|Serves| n70
  n83 -->|Serves| n71
  n83 -->|Serves| n72
  n84 -->|Serves| n69
  n84 -->|Serves| n70
  n84 -->|Serves| n71
  n84 -->|Serves| n72
  n84 -->|Serves| n73
  n85 -->|Serves| n69
  n85 -->|Serves| n70
  n85 -->|Serves| n71
  n85 -->|Serves| n72
  n85 -->|Serves| n73
  n86 -->|Serves| n73
  n87 -->|Refines| n73
  n87 -->|Depends on| n0
  n88 -->|Accepts| n87
  n89 -->|Refines| n73
  n89 -->|Depends on| n0
  n90 -->|Accepts| n89
  n91 -->|Refines| n73
  n92 -->|Accepts| n91
  n93 -->|Refines| n73
  n93 -->|Depends on| n0
  n94 -->|Accepts| n93
  n95 -->|Refines| n73
  n95 -->|Depends on| n0
  n96 -->|Accepts| n95
  n97 -->|Verifies| n59
  n97 -->|Verifies| n68
  n97 -->|Verifies| n49
  n97 -->|Verifies| n58
  n97 -->|In| n103
  n97 -->|Depends on| n61
  n97 -->|Depends on| n65
  n97 -->|Depends on| n64
  n97 -->|Depends on| n62
  n97 -->|Depends on| n63
  n97 -->|Depends on| n48
  n97 -->|Depends on| n67
  n97 -->|Depends on| n101
  n97 -->|Depends on| n0
  n97 -->|Depends on| n100
  n98 -->|Verifies| n7
  n98 -->|In| n103
  n98 -->|Depends on| n7
  n98 -->|Depends on| n101
  n98 -->|Depends on| n0
  n98 -->|Depends on| n100
  n99 -->|Chooses| n59
  n99 -->|Chooses| n68
  n99 -->|Chooses| n49
  n99 -->|Chooses| n58
  n99 -->|Chooses| n122
  n99 -->|Chooses| n119
  n99 -->|In| n103
  n99 -->|Follows| n47
  n99 -->|Serves| n71
  n100 -->|Written in| n102
  n104 -->|Verifies| n122
  n104 -->|Verifies| n119
  n104 -->|In| n103
  n104 -->|Depends on| n121
  n104 -->|Depends on| n123
  n104 -->|Depends on| n124
  n104 -->|Depends on| n120
  n104 -->|Depends on| n101
  n104 -->|Depends on| n100
  n105 -->|Serves| n69
  n106 -->|Serves| n69
  n107 -->|Serves| n69
  n108 -->|Serves| n69
  n109 -->|Serves| n69
  n110 -->|Serves| n69
  n111 -->|Serves| n69
  n112 -->|Serves| n69
  n113 -->|Serves| n69
  n114 -->|Serves| n69
  n115 -->|Serves| n69
  n116 -->|Serves| n69
  n117 -->|Serves| n69
  n118 -->|Serves| n69
  n119 -->|Implements| n124
  n119 -->|Implements| n120
  n119 -->|Depends on| n0
  n122 -->|Implements| n121
  n122 -->|Implements| n123
  n122 -->|Depends on| n7
  n122 -->|Depends on| n2
  n126 -->|Implements| n121
  n126 -->|Depends on| n8
  n126 -->|Depends on| n108
  n127 -->|Implements| n131
  n127 -->|Depends on| n106
  n127 -->|Depends on| n105
  n127 -->|Depends on| n3
  n128 -->|Serves| n69
  n129 -->|Implements| n124
  n129 -->|Uses| n130
  n129 -->|Depends on| n125
  n129 -->|Depends on| n128
  n129 -->|Depends on| n0
  n132 -->|Serves| n71
  n132 -->|Applied by| n131
  n132 -->|Applied by| n127
  n132 -->|Applied by| n121
  n132 -->|Applied by| n123
  n132 -->|Applied by| n126
  n132 -->|Applied by| n122
  n132 -->|Applied by| n124
  n132 -->|Applied by| n129
  n132 -->|Applied by| n120
  n132 -->|Applied by| n119
  n133 -->|Serves| n69
  n134 -->|Serves| n69
  n135 -->|Serves| n69
  n136 -->|Serves| n69
  n137 -->|Serves| n69
  n138 -->|Serves| n69
  n139 -->|Serves| n69
  n140 -->|Serves| n69
  n141 -->|Serves| n69
  n142 -->|Serves| n69
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
