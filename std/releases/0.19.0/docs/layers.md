# Layers

*The graph in force on 18 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph access["Standard library · Access"]
    n0["Anyone<br/><small>Audience</small>"]:::neutral
    n1["An entry point says who may call it<br/><small>Architecture decision</small>"]:::held
    n2["The operators<br/><small>Audience</small>"]:::neutral
    n3["The system<br/><small>Audience</small>"]:::neutral
  end
  subgraph algebra["Standard library · Algebra"]
    n4["Counts<br/><small>Algebraic structure</small>"]:::held
    n5["Sequences<br/><small>Algebraic structure</small>"]:::held
    n6["Texts<br/><small>Algebraic structure</small>"]:::held
    n7["Types of values<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph algorithms["Standard library · Algorithms"]
    n8["Depth-first search<br/><small>Standard</small>"]:::neutral
    n9["Mulberry32<br/><small>Standard</small>"]:::neutral
    n10["Multiplicative hashing<br/><small>Standard</small>"]:::neutral
    n11["Seeded draws<br/><small>Function</small>"]:::held
    n12["SHA-256<br/><small>Standard</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n13["ECMAScript<br/><small>Standard</small>"]:::neutral
    n14["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n15["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n16["Text run as code<br/><small>Vocabulary</small>"]:::neutral
    n17["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph effects["Standard library · Effects"]
    n18["Commands<br/><small>Function</small>"]:::held
    n19["Effects<br/><small>Vocabulary</small>"]:::neutral
    n20["What the platform may do<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n21["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n22["CSS<br/><small>Standard</small>"]:::neutral
    n23["HTML<br/><small>Standard</small>"]:::neutral
    n24["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n25["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n26["Language tags<br/><small>Standard</small>"]:::neutral
    n27["Ratio<br/><small>Quantity</small>"]:::neutral
    n28["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n29["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n30["Time<br/><small>Quantity</small>"]:::neutral
    n31["Units of measure<br/><small>Standard</small>"]:::neutral
    n32["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n33["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n34["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n35["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n36["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n37["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n38["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n39["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n40["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n41["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n42["What people decided is published<br/><small>Requirement</small>"]:::held
    n43["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n44["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n45["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n46["The project's rules hold<br/><small>Requirement</small>"]:::held
    n47["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n48["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n49["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n50["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n51["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n52["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n53["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n54["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n55["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n56["Adapter<br/><small>Design pattern</small>"]:::neutral
    n57["Bridge<br/><small>Design pattern</small>"]:::neutral
    n58["Repository<br/><small>Design pattern</small>"]:::neutral
    n59["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n60["Animation frames<br/><small>Port</small>"]:::neutral
    n61["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n62["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n63["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n64["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n65["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n66["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n67["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n68["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n69["Languages of the device<br/><small>Port</small>"]:::neutral
    n70["Frames turned by hand<br/><small>Function</small>"]:::held
    n71["Preferences kept in memory<br/><small>Function</small>"]:::held
    n72["Loading of a page<br/><small>Port</small>"]:::neutral
    n73["Preferences<br/><small>Port</small>"]:::neutral
    n74["Screen kept awake<br/><small>Port</small>"]:::neutral
    n75["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n76["What was said<br/><small>Port</small>"]:::neutral
    n77["Speech<br/><small>Port</small>"]:::neutral
    n78["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n79["Time turned by hand<br/><small>Port</small>"]:::neutral
    n80["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n81["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n82["Known designs, named<br/><small>Goal</small>"]:::neutral
    n83["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n84["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n85["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n86["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n87["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n91["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n92["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n93["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n97["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n98["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n99["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n100["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n101["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n102["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n105["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n107["Directions<br/><small>Vocabulary</small>"]:::neutral
    n108["As many links as asked<br/><small>Requirement</small>"]:::held
    n109["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n110["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n111["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n112["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n113["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n114["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n115["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n116["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n117["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n118["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n119["The device, in memory<br/><small>Scenario</small>"]:::held
    n120["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n121["In memory<br/><small>Technical choice</small>"]:::held
    n122["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n123["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n124["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n125["Test<br/><small>Environment</small>"]:::neutral
    n126["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n127["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n128["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n129["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n130["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n131["The next version<br/><small>Shipment</small>"]:::unknown
    n132["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n133["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n134["Its rules held<br/><small>Obligation</small>"]:::neutral
    n135["The standard library<br/><small>Artefact</small>"]:::unknown
    n136["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n137["Exit status<br/><small>Standard</small>"]:::neutral
    n138["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n139["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n140["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n141["Node.js events<br/><small>Standard</small>"]:::neutral
    n142["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n143["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n144["npm's command line<br/><small>Standard</small>"]:::neutral
    n145["npm's manifest<br/><small>Standard</small>"]:::neutral
    n146["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n147["Positions in a file<br/><small>Standard</small>"]:::neutral
    n148["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n149["Text file<br/><small>Standard</small>"]:::neutral
    n150["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n151["A browser kept in memory<br/><small>Function</small>"]:::held
    n152["Browser script<br/><small>Port</small>"]:::neutral
    n153["Project files<br/><small>Port</small>"]:::neutral
    n154["Files kept in memory<br/><small>Function</small>"]:::held
    n155["Files written<br/><small>Port</small>"]:::neutral
    n156["Headless browser<br/><small>Port</small>"]:::neutral
    n157["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n158["The machine's files<br/><small>Implementation</small>"]:::neutral
    n159["Node's command line<br/><small>Implementation</small>"]:::neutral
    n160["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n161["Where a package comes from<br/><small>Port</small>"]:::neutral
    n162["Playwright's API<br/><small>Standard</small>"]:::neutral
    n163["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n164["Playwright<br/><small>Package</small>"]:::held
    n165["Commands of a program<br/><small>Port</small>"]:::neutral
    n166["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n167["CSSOM View<br/><small>Standard</small>"]:::neutral
    n168["HTTP<br/><small>Standard</small>"]:::neutral
    n169["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n170["Media types<br/><small>Standard</small>"]:::neutral
    n171["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n172["Server-sent events<br/><small>Standard</small>"]:::neutral
    n173["UI events<br/><small>Standard</small>"]:::neutral
    n174["URI<br/><small>Standard</small>"]:::neutral
    n175["Web Audio API<br/><small>Standard</small>"]:::neutral
    n176["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n85
  n1 -->|Serves| n85
  n1 -->|Applied by| n38
  n2 -->|Serves| n85
  n3 -->|Serves| n85
  n4 -->|Serves| n84
  n5 -->|Serves| n84
  n5 -->|Depends on| n13
  n5 -->|Depends on| n4
  n6 -->|Serves| n84
  n6 -->|Depends on| n5
  n7 -->|Serves| n84
  n7 -->|Depends on| n15
  n8 -->|Serves| n81
  n9 -->|Serves| n81
  n10 -->|Serves| n81
  n11 -->|Serves| n84
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n13
  n11 -->|Depends on| n4
  n12 -->|Serves| n81
  n13 -->|Serves| n81
  n14 -->|Serves| n81
  n15 -->|Serves| n81
  n16 -->|Serves| n81
  n17 -->|Serves| n81
  n18 -->|Serves| n83
  n18 -->|Depends on| n19
  n19 -->|Serves| n83
  n21 -->|Serves| n81
  n22 -->|Serves| n81
  n23 -->|Serves| n81
  n24 -->|Serves| n81
  n25 -->|Serves| n81
  n26 -->|Serves| n81
  n27 -->|Written with| n32
  n27 -->|Serves| n81
  n28 -->|Serves| n81
  n30 -->|Written with| n32
  n30 -->|Serves| n81
  n31 -->|Serves| n81
  n32 -->|Written in| n29
  n33 -->|Refines| n85
  n34 -->|Accepts| n33
  n35 -->|Refines| n85
  n35 -->|Depends on| n4
  n36 -->|Accepts| n35
  n37 -->|Serves| n85
  n38 -->|Refines| n85
  n39 -->|Accepts| n38
  n40 -->|Refines| n85
  n41 -->|Accepts| n40
  n42 -->|Refines| n85
  n43 -->|Accepts| n42
  n44 -->|Refines| n85
  n44 -->|Depends on| n4
  n45 -->|Accepts| n44
  n46 -->|Refines| n85
  n47 -->|Accepts| n46
  n48 -->|Refines| n85
  n49 -->|Accepts| n48
  n50 -->|Refines| n85
  n51 -->|Accepts| n50
  n52 -->|Refines| n85
  n52 -->|Depends on| n4
  n53 -->|Accepts| n52
  n54 -->|Serves| n83
  n55 -->|Serves| n82
  n56 -->|Serves| n82
  n57 -->|Serves| n82
  n58 -->|Serves| n82
  n59 -->|Serves| n82
  n61 -->|Implements| n74
  n61 -->|Implements| n75
  n62 -->|Implements| n60
  n62 -->|Depends on| n30
  n63 -->|Implements| n69
  n64 -->|Implements| n72
  n64 -->|Depends on| n173
  n65 -->|Implements| n73
  n66 -->|Implements| n77
  n66 -->|Depends on| n26
  n66 -->|Depends on| n176
  n67 -->|Implements| n74
  n67 -->|Depends on| n171
  n68 -->|Serves| n83
  n68 -->|Applied by| n73
  n68 -->|Applied by| n65
  n68 -->|Applied by| n71
  n68 -->|Applied by| n69
  n68 -->|Applied by| n63
  n68 -->|Applied by| n77
  n68 -->|Applied by| n66
  n68 -->|Applied by| n80
  n68 -->|Applied by| n76
  n68 -->|Applied by| n74
  n68 -->|Applied by| n67
  n68 -->|Applied by| n61
  n68 -->|Applied by| n75
  n68 -->|Applied by| n60
  n68 -->|Applied by| n62
  n68 -->|Applied by| n70
  n68 -->|Applied by| n79
  n70 -->|Implements| n60
  n70 -->|Implements| n79
  n70 -->|Depends on| n4
  n71 -->|Implements| n73
  n78 -->|Serves| n83
  n78 -->|Applied by| n72
  n78 -->|Applied by| n64
  n80 -->|Implements| n77
  n80 -->|Implements| n76
  n87 -->|Serves| n81
  n87 -->|Serves| n82
  n87 -->|Serves| n83
  n87 -->|Serves| n84
  n88 -->|Serves| n81
  n88 -->|Serves| n82
  n88 -->|Serves| n83
  n88 -->|Serves| n84
  n88 -->|Serves| n85
  n89 -->|Serves| n81
  n89 -->|Serves| n82
  n89 -->|Serves| n83
  n89 -->|Serves| n84
  n89 -->|Serves| n85
  n90 -->|Serves| n81
  n90 -->|Serves| n82
  n90 -->|Serves| n83
  n90 -->|Serves| n84
  n90 -->|Serves| n85
  n91 -->|Serves| n81
  n91 -->|Serves| n82
  n91 -->|Serves| n83
  n91 -->|Serves| n84
  n91 -->|Serves| n85
  n92 -->|Serves| n81
  n92 -->|Serves| n82
  n92 -->|Serves| n83
  n92 -->|Serves| n84
  n92 -->|Serves| n85
  n93 -->|Serves| n81
  n93 -->|Serves| n82
  n93 -->|Serves| n83
  n93 -->|Serves| n84
  n93 -->|Serves| n85
  n94 -->|Serves| n81
  n94 -->|Serves| n82
  n94 -->|Serves| n83
  n94 -->|Serves| n84
  n94 -->|Serves| n85
  n95 -->|Serves| n81
  n95 -->|Serves| n82
  n95 -->|Serves| n83
  n95 -->|Serves| n84
  n95 -->|Serves| n85
  n95 -->|Serves| n86
  n96 -->|Serves| n81
  n96 -->|Serves| n82
  n96 -->|Serves| n83
  n96 -->|Serves| n84
  n96 -->|Serves| n85
  n96 -->|Serves| n86
  n97 -->|Serves| n81
  n97 -->|Serves| n82
  n97 -->|Serves| n83
  n97 -->|Serves| n84
  n97 -->|Serves| n85
  n97 -->|Serves| n86
  n98 -->|Serves| n81
  n98 -->|Serves| n82
  n98 -->|Serves| n83
  n98 -->|Serves| n84
  n98 -->|Serves| n85
  n98 -->|Serves| n86
  n99 -->|Serves| n81
  n99 -->|Serves| n82
  n99 -->|Serves| n83
  n99 -->|Serves| n84
  n100 -->|Serves| n81
  n100 -->|Serves| n82
  n100 -->|Serves| n83
  n100 -->|Serves| n84
  n101 -->|Serves| n81
  n101 -->|Serves| n82
  n101 -->|Serves| n83
  n101 -->|Serves| n84
  n102 -->|Serves| n81
  n102 -->|Serves| n82
  n102 -->|Serves| n83
  n102 -->|Serves| n84
  n103 -->|Serves| n81
  n103 -->|Serves| n82
  n103 -->|Serves| n83
  n103 -->|Serves| n84
  n104 -->|Serves| n81
  n104 -->|Serves| n82
  n104 -->|Serves| n83
  n104 -->|Serves| n84
  n105 -->|Serves| n81
  n105 -->|Serves| n82
  n105 -->|Serves| n83
  n105 -->|Serves| n84
  n105 -->|Serves| n85
  n106 -->|Serves| n81
  n106 -->|Serves| n82
  n106 -->|Serves| n83
  n106 -->|Serves| n84
  n106 -->|Serves| n85
  n107 -->|Serves| n85
  n108 -->|Refines| n85
  n108 -->|Depends on| n4
  n109 -->|Accepts| n108
  n110 -->|Refines| n85
  n110 -->|Depends on| n4
  n111 -->|Accepts| n110
  n112 -->|Refines| n85
  n113 -->|Accepts| n112
  n114 -->|Refines| n85
  n114 -->|Depends on| n4
  n115 -->|Accepts| n114
  n116 -->|Refines| n85
  n116 -->|Depends on| n4
  n117 -->|Accepts| n116
  n118 -->|Verifies| n18
  n118 -->|In| n125
  n118 -->|Depends on| n18
  n118 -->|Depends on| n19
  n118 -->|Depends on| n123
  n118 -->|Depends on| n122
  n119 -->|Verifies| n71
  n119 -->|Verifies| n80
  n119 -->|Verifies| n61
  n119 -->|Verifies| n70
  n119 -->|In| n125
  n119 -->|Depends on| n73
  n119 -->|Depends on| n77
  n119 -->|Depends on| n76
  n119 -->|Depends on| n74
  n119 -->|Depends on| n75
  n119 -->|Depends on| n60
  n119 -->|Depends on| n79
  n119 -->|Depends on| n123
  n119 -->|Depends on| n4
  n119 -->|Depends on| n122
  n120 -->|Verifies| n11
  n120 -->|In| n125
  n120 -->|Depends on| n11
  n120 -->|Depends on| n123
  n120 -->|Depends on| n4
  n120 -->|Depends on| n122
  n121 -->|Chooses| n71
  n121 -->|Chooses| n80
  n121 -->|Chooses| n61
  n121 -->|Chooses| n70
  n121 -->|Chooses| n154
  n121 -->|Chooses| n151
  n121 -->|In| n125
  n121 -->|Follows| n59
  n121 -->|Serves| n83
  n122 -->|Written in| n124
  n126 -->|Verifies| n154
  n126 -->|Verifies| n151
  n126 -->|In| n125
  n126 -->|Depends on| n153
  n126 -->|Depends on| n155
  n126 -->|Depends on| n156
  n126 -->|Depends on| n152
  n126 -->|Depends on| n123
  n126 -->|Depends on| n122
  n127 -->|Applies the family| n38
  n127 -->|Serves| n86
  n128 -->|Applies the family| n44
  n128 -->|Serves| n86
  n129 -->|Applies the family| n33
  n129 -->|Serves| n86
  n130 -->|Applies the family| n52
  n130 -->|Serves| n86
  n131 -->|Ships| n135
  n131 -->|Follows the policy| n136
  n132 -->|Applies the family| n48
  n132 -->|Serves| n86
  n133 -->|Applies the family| n50
  n133 -->|Serves| n86
  n134 -->|Applies the family| n46
  n134 -->|Serves| n86
  n136 -->|Its obligations| n130
  n136 -->|Its obligations| n133
  n136 -->|Its obligations| n129
  n136 -->|Its obligations| n134
  n136 -->|Its obligations| n132
  n136 -->|Its obligations| n127
  n136 -->|Its obligations| n128
  n137 -->|Serves| n81
  n138 -->|Serves| n81
  n139 -->|Serves| n81
  n140 -->|Serves| n81
  n141 -->|Serves| n81
  n142 -->|Serves| n81
  n143 -->|Serves| n81
  n144 -->|Serves| n81
  n145 -->|Serves| n81
  n146 -->|Serves| n81
  n147 -->|Serves| n81
  n148 -->|Serves| n81
  n149 -->|Serves| n81
  n150 -->|Serves| n81
  n151 -->|Implements| n156
  n151 -->|Implements| n152
  n151 -->|Depends on| n4
  n154 -->|Implements| n153
  n154 -->|Implements| n155
  n154 -->|Depends on| n11
  n154 -->|Depends on| n6
  n158 -->|Implements| n153
  n158 -->|Depends on| n12
  n158 -->|Depends on| n140
  n159 -->|Implements| n165
  n159 -->|Depends on| n138
  n159 -->|Depends on| n137
  n159 -->|Depends on| n7
  n160 -->|Serves| n83
  n162 -->|Serves| n81
  n163 -->|Implements| n156
  n163 -->|Uses| n164
  n163 -->|Depends on| n157
  n163 -->|Depends on| n162
  n163 -->|Depends on| n4
  n163 -->|Depends on| n30
  n166 -->|Serves| n83
  n166 -->|Applied by| n165
  n166 -->|Applied by| n159
  n166 -->|Applied by| n153
  n166 -->|Applied by| n155
  n166 -->|Applied by| n158
  n166 -->|Applied by| n154
  n166 -->|Applied by| n156
  n166 -->|Applied by| n163
  n166 -->|Applied by| n152
  n166 -->|Applied by| n151
  n166 -->|Applied by| n161
  n167 -->|Serves| n81
  n168 -->|Serves| n81
  n169 -->|Serves| n81
  n170 -->|Serves| n81
  n171 -->|Serves| n81
  n172 -->|Serves| n81
  n173 -->|Serves| n81
  n174 -->|Serves| n81
  n175 -->|Serves| n81
  n176 -->|Serves| n81
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
