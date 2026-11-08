# Layers

*The graph in force on 8 November 2026, ordered by distance to the goals.*

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
    n34["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n35["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n36["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n37["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n38["The project's rules hold<br/><small>Requirement</small>"]:::held
    n39["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n40["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n41["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n42["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n43["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n44["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n45["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n46["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n47["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n48["Adapter<br/><small>Design pattern</small>"]:::neutral
    n49["Bridge<br/><small>Design pattern</small>"]:::neutral
    n50["Repository<br/><small>Design pattern</small>"]:::neutral
    n51["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n52["Animation frames<br/><small>Port</small>"]:::neutral
    n53["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n54["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n55["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n56["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n57["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n58["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n59["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n60["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n61["Languages of the device<br/><small>Port</small>"]:::neutral
    n62["Frames turned by hand<br/><small>Function</small>"]:::held
    n63["Preferences kept in memory<br/><small>Function</small>"]:::held
    n64["Loading of a page<br/><small>Port</small>"]:::neutral
    n65["Preferences<br/><small>Port</small>"]:::neutral
    n66["Screen kept awake<br/><small>Port</small>"]:::neutral
    n67["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n68["What was said<br/><small>Port</small>"]:::neutral
    n69["Speech<br/><small>Port</small>"]:::neutral
    n70["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n71["Time turned by hand<br/><small>Port</small>"]:::neutral
    n72["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n73["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n74["Known designs, named<br/><small>Goal</small>"]:::neutral
    n75["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n76["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n77["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n78["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n79["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n80["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n81["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n82["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n83["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n84["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n85["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n86["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n87["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n88["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n91["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n92["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n93["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n97["Directions<br/><small>Vocabulary</small>"]:::neutral
    n98["As many links as asked<br/><small>Requirement</small>"]:::held
    n99["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n100["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n101["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n102["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n103["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n104["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n105["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n106["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n107["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n108["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n109["The device, in memory<br/><small>Scenario</small>"]:::held
    n110["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n111["In memory<br/><small>Technical choice</small>"]:::held
    n112["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n113["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n114["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n115["Test<br/><small>Environment</small>"]:::neutral
    n116["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n117["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n118["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n119["The next version<br/><small>Shipment</small>"]:::held
    n120["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n121["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n122["Its rules held<br/><small>Obligation</small>"]:::neutral
    n123["The standard library<br/><small>Artefact</small>"]:::held
    n124["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n125["Exit status<br/><small>Standard</small>"]:::neutral
    n126["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n127["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n128["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n129["Node.js events<br/><small>Standard</small>"]:::neutral
    n130["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n131["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n132["npm's command line<br/><small>Standard</small>"]:::neutral
    n133["npm's manifest<br/><small>Standard</small>"]:::neutral
    n134["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n135["Positions in a file<br/><small>Standard</small>"]:::neutral
    n136["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n137["Text file<br/><small>Standard</small>"]:::neutral
    n138["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n139["A browser kept in memory<br/><small>Function</small>"]:::held
    n140["Browser script<br/><small>Port</small>"]:::neutral
    n141["Project files<br/><small>Port</small>"]:::neutral
    n142["Files kept in memory<br/><small>Function</small>"]:::held
    n143["Files written<br/><small>Port</small>"]:::neutral
    n144["Headless browser<br/><small>Port</small>"]:::neutral
    n145["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n146["The machine's files<br/><small>Implementation</small>"]:::neutral
    n147["Node's command line<br/><small>Implementation</small>"]:::neutral
    n148["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n149["Where a package comes from<br/><small>Port</small>"]:::neutral
    n150["Playwright's API<br/><small>Standard</small>"]:::neutral
    n151["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n152["Playwright<br/><small>Package</small>"]:::held
    n153["Commands of a program<br/><small>Port</small>"]:::neutral
    n154["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n155["CSSOM View<br/><small>Standard</small>"]:::neutral
    n156["HTTP<br/><small>Standard</small>"]:::neutral
    n157["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n158["Media types<br/><small>Standard</small>"]:::neutral
    n159["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n160["Server-sent events<br/><small>Standard</small>"]:::neutral
    n161["UI events<br/><small>Standard</small>"]:::neutral
    n162["URI<br/><small>Standard</small>"]:::neutral
    n163["Web Audio API<br/><small>Standard</small>"]:::neutral
    n164["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n76
  n1 -->|Serves| n76
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n76
  n2 -->|Depends on| n1
  n3 -->|Serves| n76
  n3 -->|Depends on| n11
  n4 -->|Serves| n73
  n5 -->|Serves| n73
  n6 -->|Serves| n73
  n7 -->|Serves| n76
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n73
  n9 -->|Serves| n73
  n10 -->|Serves| n73
  n11 -->|Serves| n73
  n12 -->|Serves| n73
  n13 -->|Serves| n73
  n14 -->|Serves| n75
  n14 -->|Depends on| n15
  n15 -->|Serves| n75
  n17 -->|Serves| n73
  n18 -->|Serves| n73
  n19 -->|Serves| n73
  n20 -->|Serves| n73
  n21 -->|Serves| n73
  n22 -->|Serves| n73
  n23 -->|Written with| n28
  n23 -->|Serves| n73
  n24 -->|Serves| n73
  n26 -->|Written with| n28
  n26 -->|Serves| n73
  n27 -->|Serves| n73
  n28 -->|Written in| n25
  n29 -->|Refines| n77
  n30 -->|Accepts| n29
  n31 -->|Refines| n77
  n31 -->|Depends on| n0
  n32 -->|Accepts| n31
  n33 -->|Serves| n77
  n34 -->|Refines| n77
  n35 -->|Accepts| n34
  n36 -->|Refines| n77
  n36 -->|Depends on| n0
  n37 -->|Accepts| n36
  n38 -->|Refines| n77
  n39 -->|Accepts| n38
  n40 -->|Refines| n77
  n41 -->|Accepts| n40
  n42 -->|Refines| n77
  n43 -->|Accepts| n42
  n44 -->|Refines| n77
  n44 -->|Depends on| n0
  n45 -->|Accepts| n44
  n46 -->|Serves| n75
  n47 -->|Serves| n74
  n48 -->|Serves| n74
  n49 -->|Serves| n74
  n50 -->|Serves| n74
  n51 -->|Serves| n74
  n53 -->|Implements| n66
  n53 -->|Implements| n67
  n54 -->|Implements| n52
  n54 -->|Depends on| n26
  n55 -->|Implements| n61
  n56 -->|Implements| n64
  n56 -->|Depends on| n161
  n57 -->|Implements| n65
  n58 -->|Implements| n69
  n58 -->|Depends on| n22
  n58 -->|Depends on| n164
  n59 -->|Implements| n66
  n59 -->|Depends on| n159
  n60 -->|Serves| n75
  n60 -->|Applied by| n65
  n60 -->|Applied by| n57
  n60 -->|Applied by| n63
  n60 -->|Applied by| n61
  n60 -->|Applied by| n55
  n60 -->|Applied by| n69
  n60 -->|Applied by| n58
  n60 -->|Applied by| n72
  n60 -->|Applied by| n68
  n60 -->|Applied by| n66
  n60 -->|Applied by| n59
  n60 -->|Applied by| n53
  n60 -->|Applied by| n67
  n60 -->|Applied by| n52
  n60 -->|Applied by| n54
  n60 -->|Applied by| n62
  n60 -->|Applied by| n71
  n62 -->|Implements| n52
  n62 -->|Implements| n71
  n62 -->|Depends on| n0
  n63 -->|Implements| n65
  n70 -->|Serves| n75
  n70 -->|Applied by| n64
  n70 -->|Applied by| n56
  n72 -->|Implements| n69
  n72 -->|Implements| n68
  n79 -->|Serves| n73
  n79 -->|Serves| n74
  n79 -->|Serves| n75
  n79 -->|Serves| n76
  n80 -->|Serves| n73
  n80 -->|Serves| n74
  n80 -->|Serves| n75
  n80 -->|Serves| n76
  n80 -->|Serves| n77
  n81 -->|Serves| n73
  n81 -->|Serves| n74
  n81 -->|Serves| n75
  n81 -->|Serves| n76
  n81 -->|Serves| n77
  n82 -->|Serves| n73
  n82 -->|Serves| n74
  n82 -->|Serves| n75
  n82 -->|Serves| n76
  n82 -->|Serves| n77
  n83 -->|Serves| n73
  n83 -->|Serves| n74
  n83 -->|Serves| n75
  n83 -->|Serves| n76
  n83 -->|Serves| n77
  n84 -->|Serves| n73
  n84 -->|Serves| n74
  n84 -->|Serves| n75
  n84 -->|Serves| n76
  n84 -->|Serves| n77
  n85 -->|Serves| n73
  n85 -->|Serves| n74
  n85 -->|Serves| n75
  n85 -->|Serves| n76
  n85 -->|Serves| n77
  n86 -->|Serves| n73
  n86 -->|Serves| n74
  n86 -->|Serves| n75
  n86 -->|Serves| n76
  n86 -->|Serves| n77
  n87 -->|Serves| n73
  n87 -->|Serves| n74
  n87 -->|Serves| n75
  n87 -->|Serves| n76
  n87 -->|Serves| n77
  n87 -->|Serves| n78
  n88 -->|Serves| n73
  n88 -->|Serves| n74
  n88 -->|Serves| n75
  n88 -->|Serves| n76
  n88 -->|Serves| n77
  n88 -->|Serves| n78
  n89 -->|Serves| n73
  n89 -->|Serves| n74
  n89 -->|Serves| n75
  n89 -->|Serves| n76
  n90 -->|Serves| n73
  n90 -->|Serves| n74
  n90 -->|Serves| n75
  n90 -->|Serves| n76
  n91 -->|Serves| n73
  n91 -->|Serves| n74
  n91 -->|Serves| n75
  n91 -->|Serves| n76
  n92 -->|Serves| n73
  n92 -->|Serves| n74
  n92 -->|Serves| n75
  n92 -->|Serves| n76
  n93 -->|Serves| n73
  n93 -->|Serves| n74
  n93 -->|Serves| n75
  n93 -->|Serves| n76
  n94 -->|Serves| n73
  n94 -->|Serves| n74
  n94 -->|Serves| n75
  n94 -->|Serves| n76
  n95 -->|Serves| n73
  n95 -->|Serves| n74
  n95 -->|Serves| n75
  n95 -->|Serves| n76
  n95 -->|Serves| n77
  n96 -->|Serves| n73
  n96 -->|Serves| n74
  n96 -->|Serves| n75
  n96 -->|Serves| n76
  n96 -->|Serves| n77
  n97 -->|Serves| n77
  n98 -->|Refines| n77
  n98 -->|Depends on| n0
  n99 -->|Accepts| n98
  n100 -->|Refines| n77
  n100 -->|Depends on| n0
  n101 -->|Accepts| n100
  n102 -->|Refines| n77
  n103 -->|Accepts| n102
  n104 -->|Refines| n77
  n104 -->|Depends on| n0
  n105 -->|Accepts| n104
  n106 -->|Refines| n77
  n106 -->|Depends on| n0
  n107 -->|Accepts| n106
  n108 -->|Verifies| n14
  n108 -->|In| n115
  n108 -->|Depends on| n14
  n108 -->|Depends on| n15
  n108 -->|Depends on| n113
  n108 -->|Depends on| n112
  n109 -->|Verifies| n63
  n109 -->|Verifies| n72
  n109 -->|Verifies| n53
  n109 -->|Verifies| n62
  n109 -->|In| n115
  n109 -->|Depends on| n65
  n109 -->|Depends on| n69
  n109 -->|Depends on| n68
  n109 -->|Depends on| n66
  n109 -->|Depends on| n67
  n109 -->|Depends on| n52
  n109 -->|Depends on| n71
  n109 -->|Depends on| n113
  n109 -->|Depends on| n0
  n109 -->|Depends on| n112
  n110 -->|Verifies| n7
  n110 -->|In| n115
  n110 -->|Depends on| n7
  n110 -->|Depends on| n113
  n110 -->|Depends on| n0
  n110 -->|Depends on| n112
  n111 -->|Chooses| n63
  n111 -->|Chooses| n72
  n111 -->|Chooses| n53
  n111 -->|Chooses| n62
  n111 -->|Chooses| n142
  n111 -->|Chooses| n139
  n111 -->|In| n115
  n111 -->|Follows| n51
  n111 -->|Serves| n75
  n112 -->|Written in| n114
  n116 -->|Verifies| n142
  n116 -->|Verifies| n139
  n116 -->|In| n115
  n116 -->|Depends on| n141
  n116 -->|Depends on| n143
  n116 -->|Depends on| n144
  n116 -->|Depends on| n140
  n116 -->|Depends on| n113
  n116 -->|Depends on| n112
  n117 -->|Applies the family| n29
  n117 -->|Serves| n78
  n118 -->|Applies the family| n44
  n118 -->|Serves| n78
  n119 -->|Ships| n123
  n119 -->|Follows the policy| n124
  n120 -->|Applies the family| n40
  n120 -->|Serves| n78
  n121 -->|Applies the family| n42
  n121 -->|Serves| n78
  n122 -->|Applies the family| n38
  n122 -->|Serves| n78
  n124 -->|Its obligations| n118
  n124 -->|Its obligations| n121
  n124 -->|Its obligations| n117
  n124 -->|Its obligations| n122
  n124 -->|Its obligations| n120
  n125 -->|Serves| n73
  n126 -->|Serves| n73
  n127 -->|Serves| n73
  n128 -->|Serves| n73
  n129 -->|Serves| n73
  n130 -->|Serves| n73
  n131 -->|Serves| n73
  n132 -->|Serves| n73
  n133 -->|Serves| n73
  n134 -->|Serves| n73
  n135 -->|Serves| n73
  n136 -->|Serves| n73
  n137 -->|Serves| n73
  n138 -->|Serves| n73
  n139 -->|Implements| n144
  n139 -->|Implements| n140
  n139 -->|Depends on| n0
  n142 -->|Implements| n141
  n142 -->|Implements| n143
  n142 -->|Depends on| n7
  n142 -->|Depends on| n2
  n146 -->|Implements| n141
  n146 -->|Depends on| n8
  n146 -->|Depends on| n128
  n147 -->|Implements| n153
  n147 -->|Depends on| n126
  n147 -->|Depends on| n125
  n147 -->|Depends on| n3
  n148 -->|Serves| n75
  n150 -->|Serves| n73
  n151 -->|Implements| n144
  n151 -->|Uses| n152
  n151 -->|Depends on| n145
  n151 -->|Depends on| n150
  n151 -->|Depends on| n0
  n151 -->|Depends on| n26
  n154 -->|Serves| n75
  n154 -->|Applied by| n153
  n154 -->|Applied by| n147
  n154 -->|Applied by| n141
  n154 -->|Applied by| n143
  n154 -->|Applied by| n146
  n154 -->|Applied by| n142
  n154 -->|Applied by| n144
  n154 -->|Applied by| n151
  n154 -->|Applied by| n140
  n154 -->|Applied by| n139
  n154 -->|Applied by| n149
  n155 -->|Serves| n73
  n156 -->|Serves| n73
  n157 -->|Serves| n73
  n158 -->|Serves| n73
  n159 -->|Serves| n73
  n160 -->|Serves| n73
  n161 -->|Serves| n73
  n162 -->|Serves| n73
  n163 -->|Serves| n73
  n164 -->|Serves| n73
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
