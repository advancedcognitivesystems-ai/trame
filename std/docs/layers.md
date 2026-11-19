# Layers

*The graph in force on 19 November 2026, ordered by distance to the goals.*

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
    n54["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n55["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n56["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n57["Adapter<br/><small>Design pattern</small>"]:::neutral
    n58["Bridge<br/><small>Design pattern</small>"]:::neutral
    n59["Repository<br/><small>Design pattern</small>"]:::neutral
    n60["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n61["Animation frames<br/><small>Port</small>"]:::neutral
    n62["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n63["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n64["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n65["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n66["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n67["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n68["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n69["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n70["Languages of the device<br/><small>Port</small>"]:::neutral
    n71["Frames turned by hand<br/><small>Function</small>"]:::held
    n72["Preferences kept in memory<br/><small>Function</small>"]:::held
    n73["Loading of a page<br/><small>Port</small>"]:::neutral
    n74["Preferences<br/><small>Port</small>"]:::neutral
    n75["Screen kept awake<br/><small>Port</small>"]:::neutral
    n76["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n77["What was said<br/><small>Port</small>"]:::neutral
    n78["Speech<br/><small>Port</small>"]:::neutral
    n79["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n80["Time turned by hand<br/><small>Port</small>"]:::neutral
    n81["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n82["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n83["Known designs, named<br/><small>Goal</small>"]:::neutral
    n84["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n85["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n86["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n87["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n88["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n89["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n90["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n91["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n92["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n93["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n97["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n98["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n99["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n100["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n101["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n102["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n105["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n108["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph rules["Standard library · Rules"]
    n109["Directions<br/><small>Vocabulary</small>"]:::neutral
    n110["As many links as asked<br/><small>Requirement</small>"]:::held
    n111["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n112["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n113["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n114["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n115["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n116["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n117["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n118["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n119["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n120["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n121["The device, in memory<br/><small>Scenario</small>"]:::held
    n122["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n123["In memory<br/><small>Technical choice</small>"]:::held
    n124["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n125["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n126["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n127["Test<br/><small>Environment</small>"]:::neutral
    n128["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n129["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n130["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n131["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n132["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n133["The next version<br/><small>Shipment</small>"]:::held
    n134["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n135["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n136["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n137["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n138["Its rules held<br/><small>Obligation</small>"]:::neutral
    n139["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n140["The standard library<br/><small>Artefact</small>"]:::held
    n141["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n142["Exit status<br/><small>Standard</small>"]:::neutral
    n143["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n144["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n145["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n146["Node.js events<br/><small>Standard</small>"]:::neutral
    n147["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n148["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n149["npm's command line<br/><small>Standard</small>"]:::neutral
    n150["npm's manifest<br/><small>Standard</small>"]:::neutral
    n151["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n152["Positions in a file<br/><small>Standard</small>"]:::neutral
    n153["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n154["Text file<br/><small>Standard</small>"]:::neutral
    n155["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n156["A browser kept in memory<br/><small>Function</small>"]:::held
    n157["Browser script<br/><small>Port</small>"]:::neutral
    n158["Project files<br/><small>Port</small>"]:::neutral
    n159["Files kept in memory<br/><small>Function</small>"]:::held
    n160["Files written<br/><small>Port</small>"]:::neutral
    n161["Headless browser<br/><small>Port</small>"]:::neutral
    n162["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n163["The machine's files<br/><small>Implementation</small>"]:::neutral
    n164["Node's command line<br/><small>Implementation</small>"]:::neutral
    n165["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n166["Where a package comes from<br/><small>Port</small>"]:::neutral
    n167["Playwright's API<br/><small>Standard</small>"]:::neutral
    n168["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n169["Playwright<br/><small>Package</small>"]:::held
    n170["Commands of a program<br/><small>Port</small>"]:::neutral
    n171["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n172["CSSOM View<br/><small>Standard</small>"]:::neutral
    n173["HTTP<br/><small>Standard</small>"]:::neutral
    n174["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n175["Media types<br/><small>Standard</small>"]:::neutral
    n176["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n177["Server-sent events<br/><small>Standard</small>"]:::neutral
    n178["UI events<br/><small>Standard</small>"]:::neutral
    n179["URI<br/><small>Standard</small>"]:::neutral
    n180["Web Audio API<br/><small>Standard</small>"]:::neutral
    n181["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n86
  n1 -->|Serves| n86
  n1 -->|Applied by| n38
  n2 -->|Serves| n86
  n3 -->|Serves| n86
  n4 -->|Serves| n85
  n5 -->|Serves| n85
  n5 -->|Depends on| n13
  n5 -->|Depends on| n4
  n6 -->|Serves| n85
  n6 -->|Depends on| n5
  n7 -->|Serves| n85
  n7 -->|Depends on| n15
  n8 -->|Serves| n82
  n9 -->|Serves| n82
  n10 -->|Serves| n82
  n11 -->|Serves| n85
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n13
  n11 -->|Depends on| n4
  n12 -->|Serves| n82
  n13 -->|Serves| n82
  n14 -->|Serves| n82
  n15 -->|Serves| n82
  n16 -->|Serves| n82
  n17 -->|Serves| n82
  n18 -->|Serves| n84
  n18 -->|Depends on| n19
  n19 -->|Serves| n84
  n21 -->|Serves| n82
  n22 -->|Serves| n82
  n23 -->|Serves| n82
  n24 -->|Serves| n82
  n25 -->|Serves| n82
  n26 -->|Serves| n82
  n27 -->|Written with| n32
  n27 -->|Serves| n82
  n28 -->|Serves| n82
  n30 -->|Written with| n32
  n30 -->|Serves| n82
  n31 -->|Serves| n82
  n32 -->|Written in| n29
  n33 -->|Refines| n86
  n34 -->|Accepts| n33
  n35 -->|Refines| n86
  n35 -->|Depends on| n4
  n36 -->|Accepts| n35
  n37 -->|Serves| n86
  n38 -->|Refines| n86
  n39 -->|Accepts| n38
  n40 -->|Refines| n86
  n41 -->|Accepts| n40
  n42 -->|Refines| n86
  n43 -->|Accepts| n42
  n44 -->|Refines| n86
  n44 -->|Depends on| n4
  n45 -->|Accepts| n44
  n46 -->|Refines| n86
  n47 -->|Accepts| n46
  n48 -->|Refines| n86
  n49 -->|Accepts| n48
  n50 -->|Refines| n86
  n51 -->|Accepts| n50
  n52 -->|Refines| n86
  n52 -->|Depends on| n4
  n53 -->|Accepts| n52
  n54 -->|Serves| n87
  n55 -->|Serves| n84
  n56 -->|Serves| n83
  n57 -->|Serves| n83
  n58 -->|Serves| n83
  n59 -->|Serves| n83
  n60 -->|Serves| n83
  n62 -->|Implements| n75
  n62 -->|Implements| n76
  n63 -->|Implements| n61
  n63 -->|Depends on| n30
  n64 -->|Implements| n70
  n65 -->|Implements| n73
  n65 -->|Depends on| n178
  n66 -->|Implements| n74
  n67 -->|Implements| n78
  n67 -->|Depends on| n26
  n67 -->|Depends on| n181
  n68 -->|Implements| n75
  n68 -->|Depends on| n176
  n69 -->|Serves| n84
  n69 -->|Applied by| n74
  n69 -->|Applied by| n66
  n69 -->|Applied by| n72
  n69 -->|Applied by| n70
  n69 -->|Applied by| n64
  n69 -->|Applied by| n78
  n69 -->|Applied by| n67
  n69 -->|Applied by| n81
  n69 -->|Applied by| n77
  n69 -->|Applied by| n75
  n69 -->|Applied by| n68
  n69 -->|Applied by| n62
  n69 -->|Applied by| n76
  n69 -->|Applied by| n61
  n69 -->|Applied by| n63
  n69 -->|Applied by| n71
  n69 -->|Applied by| n80
  n71 -->|Implements| n61
  n71 -->|Implements| n80
  n71 -->|Depends on| n4
  n72 -->|Implements| n74
  n79 -->|Serves| n84
  n79 -->|Applied by| n73
  n79 -->|Applied by| n65
  n81 -->|Implements| n78
  n81 -->|Implements| n77
  n88 -->|Serves| n82
  n88 -->|Serves| n83
  n88 -->|Serves| n84
  n88 -->|Serves| n85
  n89 -->|Serves| n82
  n89 -->|Serves| n83
  n89 -->|Serves| n84
  n89 -->|Serves| n85
  n89 -->|Serves| n86
  n90 -->|Serves| n82
  n90 -->|Serves| n83
  n90 -->|Serves| n84
  n90 -->|Serves| n85
  n90 -->|Serves| n86
  n91 -->|Serves| n82
  n91 -->|Serves| n83
  n91 -->|Serves| n84
  n91 -->|Serves| n85
  n91 -->|Serves| n86
  n92 -->|Serves| n82
  n92 -->|Serves| n83
  n92 -->|Serves| n84
  n92 -->|Serves| n85
  n92 -->|Serves| n86
  n93 -->|Serves| n82
  n93 -->|Serves| n83
  n93 -->|Serves| n84
  n93 -->|Serves| n85
  n93 -->|Serves| n86
  n94 -->|Serves| n82
  n94 -->|Serves| n83
  n94 -->|Serves| n84
  n94 -->|Serves| n85
  n94 -->|Serves| n86
  n95 -->|Serves| n82
  n95 -->|Serves| n83
  n95 -->|Serves| n84
  n95 -->|Serves| n85
  n95 -->|Serves| n86
  n96 -->|Serves| n82
  n96 -->|Serves| n83
  n96 -->|Serves| n84
  n96 -->|Serves| n85
  n96 -->|Serves| n86
  n96 -->|Serves| n87
  n97 -->|Serves| n82
  n97 -->|Serves| n83
  n97 -->|Serves| n84
  n97 -->|Serves| n85
  n97 -->|Serves| n86
  n97 -->|Serves| n87
  n98 -->|Serves| n82
  n98 -->|Serves| n83
  n98 -->|Serves| n84
  n98 -->|Serves| n85
  n98 -->|Serves| n86
  n98 -->|Serves| n87
  n99 -->|Serves| n82
  n99 -->|Serves| n83
  n99 -->|Serves| n84
  n99 -->|Serves| n85
  n99 -->|Serves| n86
  n99 -->|Serves| n87
  n100 -->|Serves| n82
  n100 -->|Serves| n83
  n100 -->|Serves| n84
  n100 -->|Serves| n85
  n100 -->|Serves| n86
  n100 -->|Serves| n87
  n101 -->|Serves| n82
  n101 -->|Serves| n83
  n101 -->|Serves| n84
  n101 -->|Serves| n85
  n102 -->|Serves| n82
  n102 -->|Serves| n83
  n102 -->|Serves| n84
  n102 -->|Serves| n85
  n103 -->|Serves| n82
  n103 -->|Serves| n83
  n103 -->|Serves| n84
  n103 -->|Serves| n85
  n104 -->|Serves| n82
  n104 -->|Serves| n83
  n104 -->|Serves| n84
  n104 -->|Serves| n85
  n105 -->|Serves| n82
  n105 -->|Serves| n83
  n105 -->|Serves| n84
  n105 -->|Serves| n85
  n106 -->|Serves| n82
  n106 -->|Serves| n83
  n106 -->|Serves| n84
  n106 -->|Serves| n85
  n107 -->|Serves| n82
  n107 -->|Serves| n83
  n107 -->|Serves| n84
  n107 -->|Serves| n85
  n107 -->|Serves| n86
  n108 -->|Serves| n82
  n108 -->|Serves| n83
  n108 -->|Serves| n84
  n108 -->|Serves| n85
  n108 -->|Serves| n86
  n109 -->|Serves| n86
  n110 -->|Refines| n86
  n110 -->|Depends on| n4
  n111 -->|Accepts| n110
  n112 -->|Refines| n86
  n112 -->|Depends on| n4
  n113 -->|Accepts| n112
  n114 -->|Refines| n86
  n115 -->|Accepts| n114
  n116 -->|Refines| n86
  n116 -->|Depends on| n4
  n117 -->|Accepts| n116
  n118 -->|Refines| n86
  n118 -->|Depends on| n4
  n119 -->|Accepts| n118
  n120 -->|Verifies| n18
  n120 -->|In| n127
  n120 -->|Depends on| n18
  n120 -->|Depends on| n19
  n120 -->|Depends on| n125
  n120 -->|Depends on| n124
  n121 -->|Verifies| n72
  n121 -->|Verifies| n81
  n121 -->|Verifies| n62
  n121 -->|Verifies| n71
  n121 -->|In| n127
  n121 -->|Depends on| n74
  n121 -->|Depends on| n78
  n121 -->|Depends on| n77
  n121 -->|Depends on| n75
  n121 -->|Depends on| n76
  n121 -->|Depends on| n61
  n121 -->|Depends on| n80
  n121 -->|Depends on| n125
  n121 -->|Depends on| n4
  n121 -->|Depends on| n124
  n122 -->|Verifies| n11
  n122 -->|In| n127
  n122 -->|Depends on| n11
  n122 -->|Depends on| n125
  n122 -->|Depends on| n4
  n122 -->|Depends on| n124
  n123 -->|Chooses| n72
  n123 -->|Chooses| n81
  n123 -->|Chooses| n62
  n123 -->|Chooses| n71
  n123 -->|Chooses| n159
  n123 -->|Chooses| n156
  n123 -->|In| n127
  n123 -->|Follows| n60
  n123 -->|Serves| n84
  n124 -->|Written in| n126
  n128 -->|Verifies| n159
  n128 -->|Verifies| n156
  n128 -->|In| n127
  n128 -->|Depends on| n158
  n128 -->|Depends on| n160
  n128 -->|Depends on| n161
  n128 -->|Depends on| n157
  n128 -->|Depends on| n125
  n128 -->|Depends on| n124
  n129 -->|Applies the family| n38
  n129 -->|Serves| n87
  n130 -->|Applies the family| n44
  n130 -->|Serves| n87
  n131 -->|Applies the family| n33
  n131 -->|Serves| n87
  n132 -->|Applies the family| n52
  n132 -->|Serves| n87
  n133 -->|Ships| n140
  n133 -->|Follows the policy| n141
  n134 -->|Applies the family| n48
  n134 -->|Serves| n87
  n136 -->|Runs elsewhere| n133
  n136 -->|Its writer's settings| n135
  n137 -->|Applies the family| n50
  n137 -->|Serves| n87
  n138 -->|Applies the family| n46
  n138 -->|Serves| n87
  n139 -->|Ships| n136
  n141 -->|Its obligations| n132
  n141 -->|Its obligations| n137
  n141 -->|Its obligations| n131
  n141 -->|Its obligations| n138
  n141 -->|Its obligations| n134
  n141 -->|Its obligations| n129
  n141 -->|Its obligations| n130
  n142 -->|Serves| n82
  n143 -->|Serves| n82
  n144 -->|Serves| n82
  n145 -->|Serves| n82
  n146 -->|Serves| n82
  n147 -->|Serves| n82
  n148 -->|Serves| n82
  n149 -->|Serves| n82
  n150 -->|Serves| n82
  n151 -->|Serves| n82
  n152 -->|Serves| n82
  n153 -->|Serves| n82
  n154 -->|Serves| n82
  n155 -->|Serves| n82
  n156 -->|Implements| n161
  n156 -->|Implements| n157
  n156 -->|Depends on| n4
  n159 -->|Implements| n158
  n159 -->|Implements| n160
  n159 -->|Depends on| n11
  n159 -->|Depends on| n6
  n163 -->|Implements| n158
  n163 -->|Depends on| n12
  n163 -->|Depends on| n145
  n164 -->|Implements| n170
  n164 -->|Depends on| n143
  n164 -->|Depends on| n142
  n164 -->|Depends on| n7
  n165 -->|Serves| n84
  n167 -->|Serves| n82
  n168 -->|Implements| n161
  n168 -->|Uses| n169
  n168 -->|Depends on| n162
  n168 -->|Depends on| n167
  n168 -->|Depends on| n4
  n168 -->|Depends on| n30
  n171 -->|Serves| n84
  n171 -->|Applied by| n170
  n171 -->|Applied by| n164
  n171 -->|Applied by| n158
  n171 -->|Applied by| n160
  n171 -->|Applied by| n163
  n171 -->|Applied by| n159
  n171 -->|Applied by| n161
  n171 -->|Applied by| n168
  n171 -->|Applied by| n157
  n171 -->|Applied by| n156
  n171 -->|Applied by| n166
  n172 -->|Serves| n82
  n173 -->|Serves| n82
  n174 -->|Serves| n82
  n175 -->|Serves| n82
  n176 -->|Serves| n82
  n177 -->|Serves| n82
  n178 -->|Serves| n82
  n179 -->|Serves| n82
  n180 -->|Serves| n82
  n181 -->|Serves| n82
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
