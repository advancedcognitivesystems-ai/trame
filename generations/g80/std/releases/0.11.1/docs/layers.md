# Layers

*The graph in force on 29 October 2026, ordered by distance to the goals.*

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
    n19["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n20["Units of measure<br/><small>Standard</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n21["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n22["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n23["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n24["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n25["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n26["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n27["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n28["The project's rules hold<br/><small>Requirement</small>"]:::held
    n29["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n30["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n31["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n32["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n33["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n34["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n35["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph patterns["Standard library · Design patterns"]
    n36["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n37["Adapter<br/><small>Design pattern</small>"]:::neutral
    n38["Bridge<br/><small>Design pattern</small>"]:::neutral
    n39["Repository<br/><small>Design pattern</small>"]:::neutral
    n40["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n41["Animation frames<br/><small>Port</small>"]:::neutral
    n42["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n43["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n44["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n45["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n46["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n47["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n48["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n49["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n50["Languages of the device<br/><small>Port</small>"]:::neutral
    n51["Frames turned by hand<br/><small>Function</small>"]:::held
    n52["Preferences kept in memory<br/><small>Function</small>"]:::held
    n53["Loading of a page<br/><small>Port</small>"]:::neutral
    n54["Preferences<br/><small>Port</small>"]:::neutral
    n55["Screen kept awake<br/><small>Port</small>"]:::neutral
    n56["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n57["What was said<br/><small>Port</small>"]:::neutral
    n58["Speech<br/><small>Port</small>"]:::neutral
    n59["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n60["Time turned by hand<br/><small>Port</small>"]:::neutral
    n61["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n62["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n63["Known designs, named<br/><small>Goal</small>"]:::neutral
    n64["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n65["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n66["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n67["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n68["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n69["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n70["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n71["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n72["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n73["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n74["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n75["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n76["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n77["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n78["Directions<br/><small>Vocabulary</small>"]:::neutral
    n79["As many links as asked<br/><small>Requirement</small>"]:::held
    n80["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n81["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n82["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n83["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n84["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n85["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n86["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n87["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n88["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n89["The device, in memory<br/><small>Scenario</small>"]:::held
    n90["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n91["In memory<br/><small>Technical choice</small>"]:::held
    n92["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n93["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n94["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n95["Test<br/><small>Environment</small>"]:::neutral
    n96["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph system["Standard library · System"]
    n97["Exit status<br/><small>Standard</small>"]:::neutral
    n98["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n99["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n100["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n101["Node.js events<br/><small>Standard</small>"]:::neutral
    n102["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n103["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n104["npm's command line<br/><small>Standard</small>"]:::neutral
    n105["npm's manifest<br/><small>Standard</small>"]:::neutral
    n106["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n107["Positions in a file<br/><small>Standard</small>"]:::neutral
    n108["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n109["Text file<br/><small>Standard</small>"]:::neutral
    n110["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n111["A browser kept in memory<br/><small>Function</small>"]:::held
    n112["Browser script<br/><small>Port</small>"]:::neutral
    n113["Project files<br/><small>Port</small>"]:::neutral
    n114["Files kept in memory<br/><small>Function</small>"]:::held
    n115["Files written<br/><small>Port</small>"]:::neutral
    n116["Headless browser<br/><small>Port</small>"]:::neutral
    n117["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n118["The machine's files<br/><small>Implementation</small>"]:::neutral
    n119["Node's command line<br/><small>Implementation</small>"]:::neutral
    n120["Playwright's API<br/><small>Standard</small>"]:::neutral
    n121["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n122["Playwright<br/><small>Package</small>"]:::held
    n123["Commands of a program<br/><small>Port</small>"]:::neutral
    n124["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n125["CSSOM View<br/><small>Standard</small>"]:::neutral
    n126["HTTP<br/><small>Standard</small>"]:::neutral
    n127["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n128["Media types<br/><small>Standard</small>"]:::neutral
    n129["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n130["Server-sent events<br/><small>Standard</small>"]:::neutral
    n131["UI events<br/><small>Standard</small>"]:::neutral
    n132["URI<br/><small>Standard</small>"]:::neutral
    n133["Web Audio API<br/><small>Standard</small>"]:::neutral
    n134["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n65
  n1 -->|Serves| n65
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n65
  n2 -->|Depends on| n1
  n3 -->|Serves| n65
  n3 -->|Depends on| n11
  n4 -->|Serves| n62
  n5 -->|Serves| n62
  n6 -->|Serves| n62
  n7 -->|Serves| n65
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n62
  n9 -->|Serves| n62
  n10 -->|Serves| n62
  n11 -->|Serves| n62
  n12 -->|Serves| n62
  n13 -->|Serves| n62
  n14 -->|Serves| n62
  n15 -->|Serves| n62
  n16 -->|Serves| n62
  n17 -->|Serves| n62
  n18 -->|Serves| n62
  n19 -->|Serves| n62
  n20 -->|Serves| n62
  n21 -->|Refines| n66
  n22 -->|Accepts| n21
  n23 -->|Refines| n66
  n24 -->|Accepts| n23
  n25 -->|Serves| n66
  n26 -->|Refines| n66
  n27 -->|Accepts| n26
  n28 -->|Refines| n66
  n29 -->|Accepts| n28
  n30 -->|Refines| n66
  n31 -->|Accepts| n30
  n32 -->|Refines| n66
  n33 -->|Accepts| n32
  n34 -->|Refines| n66
  n35 -->|Accepts| n34
  n36 -->|Serves| n63
  n37 -->|Serves| n63
  n38 -->|Serves| n63
  n39 -->|Serves| n63
  n40 -->|Serves| n63
  n42 -->|Implements| n55
  n42 -->|Implements| n56
  n43 -->|Implements| n41
  n44 -->|Implements| n50
  n45 -->|Implements| n53
  n45 -->|Depends on| n131
  n46 -->|Implements| n54
  n47 -->|Implements| n58
  n47 -->|Depends on| n18
  n47 -->|Depends on| n134
  n48 -->|Implements| n55
  n48 -->|Depends on| n129
  n49 -->|Serves| n64
  n49 -->|Applied by| n54
  n49 -->|Applied by| n46
  n49 -->|Applied by| n52
  n49 -->|Applied by| n50
  n49 -->|Applied by| n44
  n49 -->|Applied by| n58
  n49 -->|Applied by| n47
  n49 -->|Applied by| n61
  n49 -->|Applied by| n57
  n49 -->|Applied by| n55
  n49 -->|Applied by| n48
  n49 -->|Applied by| n42
  n49 -->|Applied by| n56
  n49 -->|Applied by| n41
  n49 -->|Applied by| n43
  n49 -->|Applied by| n51
  n49 -->|Applied by| n60
  n51 -->|Implements| n41
  n51 -->|Implements| n60
  n51 -->|Depends on| n0
  n52 -->|Implements| n54
  n59 -->|Serves| n64
  n59 -->|Applied by| n53
  n59 -->|Applied by| n45
  n61 -->|Implements| n58
  n61 -->|Implements| n57
  n67 -->|Serves| n62
  n67 -->|Serves| n63
  n67 -->|Serves| n64
  n67 -->|Serves| n65
  n68 -->|Serves| n62
  n68 -->|Serves| n63
  n68 -->|Serves| n64
  n68 -->|Serves| n65
  n68 -->|Serves| n66
  n69 -->|Serves| n62
  n69 -->|Serves| n63
  n69 -->|Serves| n64
  n69 -->|Serves| n65
  n69 -->|Serves| n66
  n70 -->|Serves| n62
  n70 -->|Serves| n63
  n70 -->|Serves| n64
  n70 -->|Serves| n65
  n71 -->|Serves| n62
  n71 -->|Serves| n63
  n71 -->|Serves| n64
  n71 -->|Serves| n65
  n72 -->|Serves| n62
  n72 -->|Serves| n63
  n72 -->|Serves| n64
  n72 -->|Serves| n65
  n73 -->|Serves| n62
  n73 -->|Serves| n63
  n73 -->|Serves| n64
  n73 -->|Serves| n65
  n74 -->|Serves| n62
  n74 -->|Serves| n63
  n74 -->|Serves| n64
  n74 -->|Serves| n65
  n75 -->|Serves| n62
  n75 -->|Serves| n63
  n75 -->|Serves| n64
  n75 -->|Serves| n65
  n76 -->|Serves| n62
  n76 -->|Serves| n63
  n76 -->|Serves| n64
  n76 -->|Serves| n65
  n76 -->|Serves| n66
  n77 -->|Serves| n62
  n77 -->|Serves| n63
  n77 -->|Serves| n64
  n77 -->|Serves| n65
  n77 -->|Serves| n66
  n78 -->|Serves| n66
  n79 -->|Refines| n66
  n80 -->|Accepts| n79
  n81 -->|Refines| n66
  n82 -->|Accepts| n81
  n83 -->|Refines| n66
  n84 -->|Accepts| n83
  n85 -->|Refines| n66
  n86 -->|Accepts| n85
  n87 -->|Refines| n66
  n88 -->|Accepts| n87
  n89 -->|Verifies| n52
  n89 -->|Verifies| n61
  n89 -->|Verifies| n42
  n89 -->|Verifies| n51
  n89 -->|In| n95
  n89 -->|Depends on| n54
  n89 -->|Depends on| n58
  n89 -->|Depends on| n57
  n89 -->|Depends on| n55
  n89 -->|Depends on| n56
  n89 -->|Depends on| n41
  n89 -->|Depends on| n60
  n89 -->|Depends on| n93
  n89 -->|Depends on| n0
  n89 -->|Depends on| n92
  n90 -->|Verifies| n7
  n90 -->|In| n95
  n90 -->|Depends on| n7
  n90 -->|Depends on| n93
  n90 -->|Depends on| n0
  n90 -->|Depends on| n92
  n91 -->|Chooses| n52
  n91 -->|Chooses| n61
  n91 -->|Chooses| n42
  n91 -->|Chooses| n51
  n91 -->|Chooses| n114
  n91 -->|Chooses| n111
  n91 -->|In| n95
  n91 -->|Follows| n40
  n91 -->|Serves| n64
  n92 -->|Written in| n94
  n96 -->|Verifies| n114
  n96 -->|Verifies| n111
  n96 -->|In| n95
  n96 -->|Depends on| n113
  n96 -->|Depends on| n115
  n96 -->|Depends on| n116
  n96 -->|Depends on| n112
  n96 -->|Depends on| n93
  n96 -->|Depends on| n92
  n97 -->|Serves| n62
  n98 -->|Serves| n62
  n99 -->|Serves| n62
  n100 -->|Serves| n62
  n101 -->|Serves| n62
  n102 -->|Serves| n62
  n103 -->|Serves| n62
  n104 -->|Serves| n62
  n105 -->|Serves| n62
  n106 -->|Serves| n62
  n107 -->|Serves| n62
  n108 -->|Serves| n62
  n109 -->|Serves| n62
  n110 -->|Serves| n62
  n111 -->|Implements| n116
  n111 -->|Implements| n112
  n111 -->|Depends on| n0
  n114 -->|Implements| n113
  n114 -->|Implements| n115
  n114 -->|Depends on| n7
  n114 -->|Depends on| n2
  n118 -->|Implements| n113
  n118 -->|Depends on| n8
  n118 -->|Depends on| n100
  n119 -->|Implements| n123
  n119 -->|Depends on| n98
  n119 -->|Depends on| n97
  n119 -->|Depends on| n3
  n120 -->|Serves| n62
  n121 -->|Implements| n116
  n121 -->|Uses| n122
  n121 -->|Depends on| n117
  n121 -->|Depends on| n120
  n121 -->|Depends on| n0
  n124 -->|Serves| n64
  n124 -->|Applied by| n123
  n124 -->|Applied by| n119
  n124 -->|Applied by| n113
  n124 -->|Applied by| n115
  n124 -->|Applied by| n118
  n124 -->|Applied by| n114
  n124 -->|Applied by| n116
  n124 -->|Applied by| n121
  n124 -->|Applied by| n112
  n124 -->|Applied by| n111
  n125 -->|Serves| n62
  n126 -->|Serves| n62
  n127 -->|Serves| n62
  n128 -->|Serves| n62
  n129 -->|Serves| n62
  n130 -->|Serves| n62
  n131 -->|Serves| n62
  n132 -->|Serves| n62
  n133 -->|Serves| n62
  n134 -->|Serves| n62
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
