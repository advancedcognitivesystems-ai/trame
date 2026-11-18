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
    n42["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n43["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n44["The project's rules hold<br/><small>Requirement</small>"]:::held
    n45["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n46["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n47["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n48["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n49["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n50["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n51["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n52["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n53["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n54["Adapter<br/><small>Design pattern</small>"]:::neutral
    n55["Bridge<br/><small>Design pattern</small>"]:::neutral
    n56["Repository<br/><small>Design pattern</small>"]:::neutral
    n57["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n58["Animation frames<br/><small>Port</small>"]:::neutral
    n59["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n60["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n61["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n62["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n63["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n64["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n65["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n66["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n67["Languages of the device<br/><small>Port</small>"]:::neutral
    n68["Frames turned by hand<br/><small>Function</small>"]:::held
    n69["Preferences kept in memory<br/><small>Function</small>"]:::held
    n70["Loading of a page<br/><small>Port</small>"]:::neutral
    n71["Preferences<br/><small>Port</small>"]:::neutral
    n72["Screen kept awake<br/><small>Port</small>"]:::neutral
    n73["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n74["What was said<br/><small>Port</small>"]:::neutral
    n75["Speech<br/><small>Port</small>"]:::neutral
    n76["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n77["Time turned by hand<br/><small>Port</small>"]:::neutral
    n78["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n79["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n80["Known designs, named<br/><small>Goal</small>"]:::neutral
    n81["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n82["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n83["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n84["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n85["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n89["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n91["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n92["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n93["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n97["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n98["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n99["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n100["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n101["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n102["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n105["Directions<br/><small>Vocabulary</small>"]:::neutral
    n106["As many links as asked<br/><small>Requirement</small>"]:::held
    n107["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n108["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n109["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n110["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n111["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n112["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n113["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n114["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n115["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n116["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n117["The device, in memory<br/><small>Scenario</small>"]:::held
    n118["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n119["In memory<br/><small>Technical choice</small>"]:::held
    n120["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n121["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n122["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n123["Test<br/><small>Environment</small>"]:::neutral
    n124["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n125["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n126["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n127["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n128["The next version<br/><small>Shipment</small>"]:::held
    n129["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n130["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n131["Its rules held<br/><small>Obligation</small>"]:::neutral
    n132["The standard library<br/><small>Artefact</small>"]:::held
    n133["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n134["Exit status<br/><small>Standard</small>"]:::neutral
    n135["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n136["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n137["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n138["Node.js events<br/><small>Standard</small>"]:::neutral
    n139["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n140["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n141["npm's command line<br/><small>Standard</small>"]:::neutral
    n142["npm's manifest<br/><small>Standard</small>"]:::neutral
    n143["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n144["Positions in a file<br/><small>Standard</small>"]:::neutral
    n145["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n146["Text file<br/><small>Standard</small>"]:::neutral
    n147["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n148["A browser kept in memory<br/><small>Function</small>"]:::held
    n149["Browser script<br/><small>Port</small>"]:::neutral
    n150["Project files<br/><small>Port</small>"]:::neutral
    n151["Files kept in memory<br/><small>Function</small>"]:::held
    n152["Files written<br/><small>Port</small>"]:::neutral
    n153["Headless browser<br/><small>Port</small>"]:::neutral
    n154["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n155["The machine's files<br/><small>Implementation</small>"]:::neutral
    n156["Node's command line<br/><small>Implementation</small>"]:::neutral
    n157["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n158["Where a package comes from<br/><small>Port</small>"]:::neutral
    n159["Playwright's API<br/><small>Standard</small>"]:::neutral
    n160["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n161["Playwright<br/><small>Package</small>"]:::held
    n162["Commands of a program<br/><small>Port</small>"]:::neutral
    n163["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n164["CSSOM View<br/><small>Standard</small>"]:::neutral
    n165["HTTP<br/><small>Standard</small>"]:::neutral
    n166["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n167["Media types<br/><small>Standard</small>"]:::neutral
    n168["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n169["Server-sent events<br/><small>Standard</small>"]:::neutral
    n170["UI events<br/><small>Standard</small>"]:::neutral
    n171["URI<br/><small>Standard</small>"]:::neutral
    n172["Web Audio API<br/><small>Standard</small>"]:::neutral
    n173["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n83
  n1 -->|Serves| n83
  n1 -->|Applied by| n38
  n2 -->|Serves| n83
  n3 -->|Serves| n83
  n4 -->|Serves| n82
  n5 -->|Serves| n82
  n5 -->|Depends on| n13
  n5 -->|Depends on| n4
  n6 -->|Serves| n82
  n6 -->|Depends on| n5
  n7 -->|Serves| n82
  n7 -->|Depends on| n15
  n8 -->|Serves| n79
  n9 -->|Serves| n79
  n10 -->|Serves| n79
  n11 -->|Serves| n82
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n13
  n11 -->|Depends on| n4
  n12 -->|Serves| n79
  n13 -->|Serves| n79
  n14 -->|Serves| n79
  n15 -->|Serves| n79
  n16 -->|Serves| n79
  n17 -->|Serves| n79
  n18 -->|Serves| n81
  n18 -->|Depends on| n19
  n19 -->|Serves| n81
  n21 -->|Serves| n79
  n22 -->|Serves| n79
  n23 -->|Serves| n79
  n24 -->|Serves| n79
  n25 -->|Serves| n79
  n26 -->|Serves| n79
  n27 -->|Written with| n32
  n27 -->|Serves| n79
  n28 -->|Serves| n79
  n30 -->|Written with| n32
  n30 -->|Serves| n79
  n31 -->|Serves| n79
  n32 -->|Written in| n29
  n33 -->|Refines| n83
  n34 -->|Accepts| n33
  n35 -->|Refines| n83
  n35 -->|Depends on| n4
  n36 -->|Accepts| n35
  n37 -->|Serves| n83
  n38 -->|Refines| n83
  n39 -->|Accepts| n38
  n40 -->|Refines| n83
  n41 -->|Accepts| n40
  n42 -->|Refines| n83
  n42 -->|Depends on| n4
  n43 -->|Accepts| n42
  n44 -->|Refines| n83
  n45 -->|Accepts| n44
  n46 -->|Refines| n83
  n47 -->|Accepts| n46
  n48 -->|Refines| n83
  n49 -->|Accepts| n48
  n50 -->|Refines| n83
  n50 -->|Depends on| n4
  n51 -->|Accepts| n50
  n52 -->|Serves| n81
  n53 -->|Serves| n80
  n54 -->|Serves| n80
  n55 -->|Serves| n80
  n56 -->|Serves| n80
  n57 -->|Serves| n80
  n59 -->|Implements| n72
  n59 -->|Implements| n73
  n60 -->|Implements| n58
  n60 -->|Depends on| n30
  n61 -->|Implements| n67
  n62 -->|Implements| n70
  n62 -->|Depends on| n170
  n63 -->|Implements| n71
  n64 -->|Implements| n75
  n64 -->|Depends on| n26
  n64 -->|Depends on| n173
  n65 -->|Implements| n72
  n65 -->|Depends on| n168
  n66 -->|Serves| n81
  n66 -->|Applied by| n71
  n66 -->|Applied by| n63
  n66 -->|Applied by| n69
  n66 -->|Applied by| n67
  n66 -->|Applied by| n61
  n66 -->|Applied by| n75
  n66 -->|Applied by| n64
  n66 -->|Applied by| n78
  n66 -->|Applied by| n74
  n66 -->|Applied by| n72
  n66 -->|Applied by| n65
  n66 -->|Applied by| n59
  n66 -->|Applied by| n73
  n66 -->|Applied by| n58
  n66 -->|Applied by| n60
  n66 -->|Applied by| n68
  n66 -->|Applied by| n77
  n68 -->|Implements| n58
  n68 -->|Implements| n77
  n68 -->|Depends on| n4
  n69 -->|Implements| n71
  n76 -->|Serves| n81
  n76 -->|Applied by| n70
  n76 -->|Applied by| n62
  n78 -->|Implements| n75
  n78 -->|Implements| n74
  n85 -->|Serves| n79
  n85 -->|Serves| n80
  n85 -->|Serves| n81
  n85 -->|Serves| n82
  n86 -->|Serves| n79
  n86 -->|Serves| n80
  n86 -->|Serves| n81
  n86 -->|Serves| n82
  n86 -->|Serves| n83
  n87 -->|Serves| n79
  n87 -->|Serves| n80
  n87 -->|Serves| n81
  n87 -->|Serves| n82
  n87 -->|Serves| n83
  n88 -->|Serves| n79
  n88 -->|Serves| n80
  n88 -->|Serves| n81
  n88 -->|Serves| n82
  n88 -->|Serves| n83
  n89 -->|Serves| n79
  n89 -->|Serves| n80
  n89 -->|Serves| n81
  n89 -->|Serves| n82
  n89 -->|Serves| n83
  n90 -->|Serves| n79
  n90 -->|Serves| n80
  n90 -->|Serves| n81
  n90 -->|Serves| n82
  n90 -->|Serves| n83
  n91 -->|Serves| n79
  n91 -->|Serves| n80
  n91 -->|Serves| n81
  n91 -->|Serves| n82
  n91 -->|Serves| n83
  n92 -->|Serves| n79
  n92 -->|Serves| n80
  n92 -->|Serves| n81
  n92 -->|Serves| n82
  n92 -->|Serves| n83
  n93 -->|Serves| n79
  n93 -->|Serves| n80
  n93 -->|Serves| n81
  n93 -->|Serves| n82
  n93 -->|Serves| n83
  n93 -->|Serves| n84
  n94 -->|Serves| n79
  n94 -->|Serves| n80
  n94 -->|Serves| n81
  n94 -->|Serves| n82
  n94 -->|Serves| n83
  n94 -->|Serves| n84
  n95 -->|Serves| n79
  n95 -->|Serves| n80
  n95 -->|Serves| n81
  n95 -->|Serves| n82
  n95 -->|Serves| n83
  n95 -->|Serves| n84
  n96 -->|Serves| n79
  n96 -->|Serves| n80
  n96 -->|Serves| n81
  n96 -->|Serves| n82
  n96 -->|Serves| n83
  n96 -->|Serves| n84
  n97 -->|Serves| n79
  n97 -->|Serves| n80
  n97 -->|Serves| n81
  n97 -->|Serves| n82
  n98 -->|Serves| n79
  n98 -->|Serves| n80
  n98 -->|Serves| n81
  n98 -->|Serves| n82
  n99 -->|Serves| n79
  n99 -->|Serves| n80
  n99 -->|Serves| n81
  n99 -->|Serves| n82
  n100 -->|Serves| n79
  n100 -->|Serves| n80
  n100 -->|Serves| n81
  n100 -->|Serves| n82
  n101 -->|Serves| n79
  n101 -->|Serves| n80
  n101 -->|Serves| n81
  n101 -->|Serves| n82
  n102 -->|Serves| n79
  n102 -->|Serves| n80
  n102 -->|Serves| n81
  n102 -->|Serves| n82
  n103 -->|Serves| n79
  n103 -->|Serves| n80
  n103 -->|Serves| n81
  n103 -->|Serves| n82
  n103 -->|Serves| n83
  n104 -->|Serves| n79
  n104 -->|Serves| n80
  n104 -->|Serves| n81
  n104 -->|Serves| n82
  n104 -->|Serves| n83
  n105 -->|Serves| n83
  n106 -->|Refines| n83
  n106 -->|Depends on| n4
  n107 -->|Accepts| n106
  n108 -->|Refines| n83
  n108 -->|Depends on| n4
  n109 -->|Accepts| n108
  n110 -->|Refines| n83
  n111 -->|Accepts| n110
  n112 -->|Refines| n83
  n112 -->|Depends on| n4
  n113 -->|Accepts| n112
  n114 -->|Refines| n83
  n114 -->|Depends on| n4
  n115 -->|Accepts| n114
  n116 -->|Verifies| n18
  n116 -->|In| n123
  n116 -->|Depends on| n18
  n116 -->|Depends on| n19
  n116 -->|Depends on| n121
  n116 -->|Depends on| n120
  n117 -->|Verifies| n69
  n117 -->|Verifies| n78
  n117 -->|Verifies| n59
  n117 -->|Verifies| n68
  n117 -->|In| n123
  n117 -->|Depends on| n71
  n117 -->|Depends on| n75
  n117 -->|Depends on| n74
  n117 -->|Depends on| n72
  n117 -->|Depends on| n73
  n117 -->|Depends on| n58
  n117 -->|Depends on| n77
  n117 -->|Depends on| n121
  n117 -->|Depends on| n4
  n117 -->|Depends on| n120
  n118 -->|Verifies| n11
  n118 -->|In| n123
  n118 -->|Depends on| n11
  n118 -->|Depends on| n121
  n118 -->|Depends on| n4
  n118 -->|Depends on| n120
  n119 -->|Chooses| n69
  n119 -->|Chooses| n78
  n119 -->|Chooses| n59
  n119 -->|Chooses| n68
  n119 -->|Chooses| n151
  n119 -->|Chooses| n148
  n119 -->|In| n123
  n119 -->|Follows| n57
  n119 -->|Serves| n81
  n120 -->|Written in| n122
  n124 -->|Verifies| n151
  n124 -->|Verifies| n148
  n124 -->|In| n123
  n124 -->|Depends on| n150
  n124 -->|Depends on| n152
  n124 -->|Depends on| n153
  n124 -->|Depends on| n149
  n124 -->|Depends on| n121
  n124 -->|Depends on| n120
  n125 -->|Applies the family| n38
  n125 -->|Serves| n84
  n126 -->|Applies the family| n33
  n126 -->|Serves| n84
  n127 -->|Applies the family| n50
  n127 -->|Serves| n84
  n128 -->|Ships| n132
  n128 -->|Follows the policy| n133
  n129 -->|Applies the family| n46
  n129 -->|Serves| n84
  n130 -->|Applies the family| n48
  n130 -->|Serves| n84
  n131 -->|Applies the family| n44
  n131 -->|Serves| n84
  n133 -->|Its obligations| n127
  n133 -->|Its obligations| n130
  n133 -->|Its obligations| n126
  n133 -->|Its obligations| n131
  n133 -->|Its obligations| n129
  n133 -->|Its obligations| n125
  n134 -->|Serves| n79
  n135 -->|Serves| n79
  n136 -->|Serves| n79
  n137 -->|Serves| n79
  n138 -->|Serves| n79
  n139 -->|Serves| n79
  n140 -->|Serves| n79
  n141 -->|Serves| n79
  n142 -->|Serves| n79
  n143 -->|Serves| n79
  n144 -->|Serves| n79
  n145 -->|Serves| n79
  n146 -->|Serves| n79
  n147 -->|Serves| n79
  n148 -->|Implements| n153
  n148 -->|Implements| n149
  n148 -->|Depends on| n4
  n151 -->|Implements| n150
  n151 -->|Implements| n152
  n151 -->|Depends on| n11
  n151 -->|Depends on| n6
  n155 -->|Implements| n150
  n155 -->|Depends on| n12
  n155 -->|Depends on| n137
  n156 -->|Implements| n162
  n156 -->|Depends on| n135
  n156 -->|Depends on| n134
  n156 -->|Depends on| n7
  n157 -->|Serves| n81
  n159 -->|Serves| n79
  n160 -->|Implements| n153
  n160 -->|Uses| n161
  n160 -->|Depends on| n154
  n160 -->|Depends on| n159
  n160 -->|Depends on| n4
  n160 -->|Depends on| n30
  n163 -->|Serves| n81
  n163 -->|Applied by| n162
  n163 -->|Applied by| n156
  n163 -->|Applied by| n150
  n163 -->|Applied by| n152
  n163 -->|Applied by| n155
  n163 -->|Applied by| n151
  n163 -->|Applied by| n153
  n163 -->|Applied by| n160
  n163 -->|Applied by| n149
  n163 -->|Applied by| n148
  n163 -->|Applied by| n158
  n164 -->|Serves| n79
  n165 -->|Serves| n79
  n166 -->|Serves| n79
  n167 -->|Serves| n79
  n168 -->|Serves| n79
  n169 -->|Serves| n79
  n170 -->|Serves| n79
  n171 -->|Serves| n79
  n172 -->|Serves| n79
  n173 -->|Serves| n79
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
