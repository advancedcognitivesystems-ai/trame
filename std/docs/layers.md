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
    n12["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n13["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n14["CSS<br/><small>Standard</small>"]:::neutral
    n15["HTML<br/><small>Standard</small>"]:::neutral
    n16["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n17["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n18["Language tags<br/><small>Standard</small>"]:::neutral
    n19["Ratio<br/><small>Quantity</small>"]:::neutral
    n20["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n21["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n22["Time<br/><small>Quantity</small>"]:::neutral
    n23["Units of measure<br/><small>Standard</small>"]:::neutral
    n24["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n25["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n26["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n27["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n28["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n29["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n30["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n31["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n32["The project's rules hold<br/><small>Requirement</small>"]:::held
    n33["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n34["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n35["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n36["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n37["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n38["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n39["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph patterns["Standard library · Design patterns"]
    n40["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n41["Adapter<br/><small>Design pattern</small>"]:::neutral
    n42["Bridge<br/><small>Design pattern</small>"]:::neutral
    n43["Repository<br/><small>Design pattern</small>"]:::neutral
    n44["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n45["Animation frames<br/><small>Port</small>"]:::neutral
    n46["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n47["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n48["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n49["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n50["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n51["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n52["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n53["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n54["Languages of the device<br/><small>Port</small>"]:::neutral
    n55["Frames turned by hand<br/><small>Function</small>"]:::held
    n56["Preferences kept in memory<br/><small>Function</small>"]:::held
    n57["Loading of a page<br/><small>Port</small>"]:::neutral
    n58["Preferences<br/><small>Port</small>"]:::neutral
    n59["Screen kept awake<br/><small>Port</small>"]:::neutral
    n60["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n61["What was said<br/><small>Port</small>"]:::neutral
    n62["Speech<br/><small>Port</small>"]:::neutral
    n63["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n64["Time turned by hand<br/><small>Port</small>"]:::neutral
    n65["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n66["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n67["Known designs, named<br/><small>Goal</small>"]:::neutral
    n68["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n69["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n70["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n71["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n72["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n73["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n74["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n75["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n76["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n78["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n79["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n83["Directions<br/><small>Vocabulary</small>"]:::neutral
    n84["As many links as asked<br/><small>Requirement</small>"]:::held
    n85["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n86["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n87["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n88["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n89["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n90["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n91["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n92["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n93["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n94["The device, in memory<br/><small>Scenario</small>"]:::held
    n95["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n96["In memory<br/><small>Technical choice</small>"]:::held
    n97["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n98["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n99["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n100["Test<br/><small>Environment</small>"]:::neutral
    n101["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n102["Exit status<br/><small>Standard</small>"]:::neutral
    n103["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n104["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n105["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n106["Node.js events<br/><small>Standard</small>"]:::neutral
    n107["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n108["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n109["npm's command line<br/><small>Standard</small>"]:::neutral
    n110["npm's manifest<br/><small>Standard</small>"]:::neutral
    n111["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n112["Positions in a file<br/><small>Standard</small>"]:::neutral
    n113["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n114["Text file<br/><small>Standard</small>"]:::neutral
    n115["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n116["A browser kept in memory<br/><small>Function</small>"]:::held
    n117["Browser script<br/><small>Port</small>"]:::neutral
    n118["Project files<br/><small>Port</small>"]:::neutral
    n119["Files kept in memory<br/><small>Function</small>"]:::held
    n120["Files written<br/><small>Port</small>"]:::neutral
    n121["Headless browser<br/><small>Port</small>"]:::neutral
    n122["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n123["The machine's files<br/><small>Implementation</small>"]:::neutral
    n124["Node's command line<br/><small>Implementation</small>"]:::neutral
    n125["Playwright's API<br/><small>Standard</small>"]:::neutral
    n126["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n127["Playwright<br/><small>Package</small>"]:::held
    n128["Commands of a program<br/><small>Port</small>"]:::neutral
    n129["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n130["CSSOM View<br/><small>Standard</small>"]:::neutral
    n131["HTTP<br/><small>Standard</small>"]:::neutral
    n132["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n133["Media types<br/><small>Standard</small>"]:::neutral
    n134["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n135["Server-sent events<br/><small>Standard</small>"]:::neutral
    n136["UI events<br/><small>Standard</small>"]:::neutral
    n137["URI<br/><small>Standard</small>"]:::neutral
    n138["Web Audio API<br/><small>Standard</small>"]:::neutral
    n139["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n69
  n1 -->|Serves| n69
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n69
  n2 -->|Depends on| n1
  n3 -->|Serves| n69
  n3 -->|Depends on| n11
  n4 -->|Serves| n66
  n5 -->|Serves| n66
  n6 -->|Serves| n66
  n7 -->|Serves| n69
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n66
  n9 -->|Serves| n66
  n10 -->|Serves| n66
  n11 -->|Serves| n66
  n12 -->|Serves| n66
  n13 -->|Serves| n66
  n14 -->|Serves| n66
  n15 -->|Serves| n66
  n16 -->|Serves| n66
  n17 -->|Serves| n66
  n18 -->|Serves| n66
  n19 -->|Written with| n24
  n19 -->|Serves| n66
  n20 -->|Serves| n66
  n22 -->|Written with| n24
  n22 -->|Serves| n66
  n23 -->|Serves| n66
  n24 -->|Written in| n21
  n25 -->|Refines| n70
  n26 -->|Accepts| n25
  n27 -->|Refines| n70
  n27 -->|Depends on| n0
  n28 -->|Accepts| n27
  n29 -->|Serves| n70
  n30 -->|Refines| n70
  n30 -->|Depends on| n0
  n31 -->|Accepts| n30
  n32 -->|Refines| n70
  n33 -->|Accepts| n32
  n34 -->|Refines| n70
  n35 -->|Accepts| n34
  n36 -->|Refines| n70
  n37 -->|Accepts| n36
  n38 -->|Refines| n70
  n38 -->|Depends on| n0
  n39 -->|Accepts| n38
  n40 -->|Serves| n67
  n41 -->|Serves| n67
  n42 -->|Serves| n67
  n43 -->|Serves| n67
  n44 -->|Serves| n67
  n46 -->|Implements| n59
  n46 -->|Implements| n60
  n47 -->|Implements| n45
  n48 -->|Implements| n54
  n49 -->|Implements| n57
  n49 -->|Depends on| n136
  n50 -->|Implements| n58
  n51 -->|Implements| n62
  n51 -->|Depends on| n18
  n51 -->|Depends on| n139
  n52 -->|Implements| n59
  n52 -->|Depends on| n134
  n53 -->|Serves| n68
  n53 -->|Applied by| n58
  n53 -->|Applied by| n50
  n53 -->|Applied by| n56
  n53 -->|Applied by| n54
  n53 -->|Applied by| n48
  n53 -->|Applied by| n62
  n53 -->|Applied by| n51
  n53 -->|Applied by| n65
  n53 -->|Applied by| n61
  n53 -->|Applied by| n59
  n53 -->|Applied by| n52
  n53 -->|Applied by| n46
  n53 -->|Applied by| n60
  n53 -->|Applied by| n45
  n53 -->|Applied by| n47
  n53 -->|Applied by| n55
  n53 -->|Applied by| n64
  n55 -->|Implements| n45
  n55 -->|Implements| n64
  n55 -->|Depends on| n0
  n56 -->|Implements| n58
  n63 -->|Serves| n68
  n63 -->|Applied by| n57
  n63 -->|Applied by| n49
  n65 -->|Implements| n62
  n65 -->|Implements| n61
  n71 -->|Serves| n66
  n71 -->|Serves| n67
  n71 -->|Serves| n68
  n71 -->|Serves| n69
  n72 -->|Serves| n66
  n72 -->|Serves| n67
  n72 -->|Serves| n68
  n72 -->|Serves| n69
  n72 -->|Serves| n70
  n73 -->|Serves| n66
  n73 -->|Serves| n67
  n73 -->|Serves| n68
  n73 -->|Serves| n69
  n73 -->|Serves| n70
  n74 -->|Serves| n66
  n74 -->|Serves| n67
  n74 -->|Serves| n68
  n74 -->|Serves| n69
  n74 -->|Serves| n70
  n75 -->|Serves| n66
  n75 -->|Serves| n67
  n75 -->|Serves| n68
  n75 -->|Serves| n69
  n76 -->|Serves| n66
  n76 -->|Serves| n67
  n76 -->|Serves| n68
  n76 -->|Serves| n69
  n77 -->|Serves| n66
  n77 -->|Serves| n67
  n77 -->|Serves| n68
  n77 -->|Serves| n69
  n78 -->|Serves| n66
  n78 -->|Serves| n67
  n78 -->|Serves| n68
  n78 -->|Serves| n69
  n79 -->|Serves| n66
  n79 -->|Serves| n67
  n79 -->|Serves| n68
  n79 -->|Serves| n69
  n80 -->|Serves| n66
  n80 -->|Serves| n67
  n80 -->|Serves| n68
  n80 -->|Serves| n69
  n81 -->|Serves| n66
  n81 -->|Serves| n67
  n81 -->|Serves| n68
  n81 -->|Serves| n69
  n81 -->|Serves| n70
  n82 -->|Serves| n66
  n82 -->|Serves| n67
  n82 -->|Serves| n68
  n82 -->|Serves| n69
  n82 -->|Serves| n70
  n83 -->|Serves| n70
  n84 -->|Refines| n70
  n84 -->|Depends on| n0
  n85 -->|Accepts| n84
  n86 -->|Refines| n70
  n86 -->|Depends on| n0
  n87 -->|Accepts| n86
  n88 -->|Refines| n70
  n89 -->|Accepts| n88
  n90 -->|Refines| n70
  n90 -->|Depends on| n0
  n91 -->|Accepts| n90
  n92 -->|Refines| n70
  n92 -->|Depends on| n0
  n93 -->|Accepts| n92
  n94 -->|Verifies| n56
  n94 -->|Verifies| n65
  n94 -->|Verifies| n46
  n94 -->|Verifies| n55
  n94 -->|In| n100
  n94 -->|Depends on| n58
  n94 -->|Depends on| n62
  n94 -->|Depends on| n61
  n94 -->|Depends on| n59
  n94 -->|Depends on| n60
  n94 -->|Depends on| n45
  n94 -->|Depends on| n64
  n94 -->|Depends on| n98
  n94 -->|Depends on| n0
  n94 -->|Depends on| n97
  n95 -->|Verifies| n7
  n95 -->|In| n100
  n95 -->|Depends on| n7
  n95 -->|Depends on| n98
  n95 -->|Depends on| n0
  n95 -->|Depends on| n97
  n96 -->|Chooses| n56
  n96 -->|Chooses| n65
  n96 -->|Chooses| n46
  n96 -->|Chooses| n55
  n96 -->|Chooses| n119
  n96 -->|Chooses| n116
  n96 -->|In| n100
  n96 -->|Follows| n44
  n96 -->|Serves| n68
  n97 -->|Written in| n99
  n101 -->|Verifies| n119
  n101 -->|Verifies| n116
  n101 -->|In| n100
  n101 -->|Depends on| n118
  n101 -->|Depends on| n120
  n101 -->|Depends on| n121
  n101 -->|Depends on| n117
  n101 -->|Depends on| n98
  n101 -->|Depends on| n97
  n102 -->|Serves| n66
  n103 -->|Serves| n66
  n104 -->|Serves| n66
  n105 -->|Serves| n66
  n106 -->|Serves| n66
  n107 -->|Serves| n66
  n108 -->|Serves| n66
  n109 -->|Serves| n66
  n110 -->|Serves| n66
  n111 -->|Serves| n66
  n112 -->|Serves| n66
  n113 -->|Serves| n66
  n114 -->|Serves| n66
  n115 -->|Serves| n66
  n116 -->|Implements| n121
  n116 -->|Implements| n117
  n116 -->|Depends on| n0
  n119 -->|Implements| n118
  n119 -->|Implements| n120
  n119 -->|Depends on| n7
  n119 -->|Depends on| n2
  n123 -->|Implements| n118
  n123 -->|Depends on| n8
  n123 -->|Depends on| n105
  n124 -->|Implements| n128
  n124 -->|Depends on| n103
  n124 -->|Depends on| n102
  n124 -->|Depends on| n3
  n125 -->|Serves| n66
  n126 -->|Implements| n121
  n126 -->|Uses| n127
  n126 -->|Depends on| n122
  n126 -->|Depends on| n125
  n126 -->|Depends on| n0
  n129 -->|Serves| n68
  n129 -->|Applied by| n128
  n129 -->|Applied by| n124
  n129 -->|Applied by| n118
  n129 -->|Applied by| n120
  n129 -->|Applied by| n123
  n129 -->|Applied by| n119
  n129 -->|Applied by| n121
  n129 -->|Applied by| n126
  n129 -->|Applied by| n117
  n129 -->|Applied by| n116
  n130 -->|Serves| n66
  n131 -->|Serves| n66
  n132 -->|Serves| n66
  n133 -->|Serves| n66
  n134 -->|Serves| n66
  n135 -->|Serves| n66
  n136 -->|Serves| n66
  n137 -->|Serves| n66
  n138 -->|Serves| n66
  n139 -->|Serves| n66
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
