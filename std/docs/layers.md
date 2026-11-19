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
    n102["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n105["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n108["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n109["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n110["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n111["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n112["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n113["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n114["A repository compared with its settings<br/><small>Function</small>"]:::held
    n115["A repository kept in memory<br/><small>Function</small>"]:::held
    n116["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n117["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n118["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n119["Directions<br/><small>Vocabulary</small>"]:::neutral
    n120["As many links as asked<br/><small>Requirement</small>"]:::held
    n121["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n122["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n123["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n124["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n125["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n126["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n127["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n128["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n129["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n130["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n131["The device, in memory<br/><small>Scenario</small>"]:::held
    n132["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n133["In memory<br/><small>Technical choice</small>"]:::held
    n134["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n135["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n136["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n137["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n138["Test<br/><small>Environment</small>"]:::neutral
    n139["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n140["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n141["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n142["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n143["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n144["The next version<br/><small>Shipment</small>"]:::unknown
    n145["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n146["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n147["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n148["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n149["Its rules held<br/><small>Obligation</small>"]:::neutral
    n150["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n151["The standard library<br/><small>Artefact</small>"]:::unknown
    n152["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n153["Exit status<br/><small>Standard</small>"]:::neutral
    n154["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n155["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n156["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n157["Node.js events<br/><small>Standard</small>"]:::neutral
    n158["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n159["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n160["npm's command line<br/><small>Standard</small>"]:::neutral
    n161["npm's manifest<br/><small>Standard</small>"]:::neutral
    n162["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n163["Positions in a file<br/><small>Standard</small>"]:::neutral
    n164["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n165["Text file<br/><small>Standard</small>"]:::neutral
    n166["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n167["A browser kept in memory<br/><small>Function</small>"]:::held
    n168["Browser script<br/><small>Port</small>"]:::neutral
    n169["Project files<br/><small>Port</small>"]:::neutral
    n170["Files kept in memory<br/><small>Function</small>"]:::held
    n171["Files written<br/><small>Port</small>"]:::neutral
    n172["Headless browser<br/><small>Port</small>"]:::neutral
    n173["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n174["The machine's files<br/><small>Implementation</small>"]:::neutral
    n175["Node's command line<br/><small>Implementation</small>"]:::neutral
    n176["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n177["Where a package comes from<br/><small>Port</small>"]:::neutral
    n178["Playwright's API<br/><small>Standard</small>"]:::neutral
    n179["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n180["Playwright<br/><small>Package</small>"]:::held
    n181["Commands of a program<br/><small>Port</small>"]:::neutral
    n182["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n183["CSSOM View<br/><small>Standard</small>"]:::neutral
    n184["HTTP<br/><small>Standard</small>"]:::neutral
    n185["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n186["Media types<br/><small>Standard</small>"]:::neutral
    n187["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n188["Server-sent events<br/><small>Standard</small>"]:::neutral
    n189["UI events<br/><small>Standard</small>"]:::neutral
    n190["URI<br/><small>Standard</small>"]:::neutral
    n191["Web Audio API<br/><small>Standard</small>"]:::neutral
    n192["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n65 -->|Depends on| n189
  n66 -->|Implements| n74
  n67 -->|Implements| n78
  n67 -->|Depends on| n26
  n67 -->|Depends on| n192
  n68 -->|Implements| n75
  n68 -->|Depends on| n187
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
  n102 -->|Serves| n86
  n102 -->|Serves| n87
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
  n108 -->|Serves| n82
  n108 -->|Serves| n83
  n108 -->|Serves| n84
  n108 -->|Serves| n85
  n108 -->|Serves| n86
  n109 -->|Serves| n82
  n109 -->|Serves| n83
  n109 -->|Serves| n84
  n109 -->|Serves| n85
  n109 -->|Serves| n86
  n110 -->|Implements| n113
  n110 -->|Depends on| n111
  n110 -->|Depends on| n155
  n110 -->|Depends on| n157
  n110 -->|Depends on| n153
  n110 -->|Depends on| n112
  n110 -->|Depends on| n6
  n110 -->|Depends on| n7
  n111 -->|Serves| n82
  n112 -->|Serves| n82
  n114 -->|Serves| n84
  n114 -->|Depends on| n117
  n115 -->|Serves| n84
  n115 -->|Implements| n113
  n115 -->|Implements| n116
  n117 -->|Serves| n84
  n118 -->|Serves| n84
  n118 -->|Applied by| n112
  n118 -->|Applied by| n117
  n118 -->|Applied by| n114
  n118 -->|Applied by| n113
  n118 -->|Applied by| n110
  n118 -->|Applied by| n116
  n118 -->|Applied by| n115
  n119 -->|Serves| n86
  n120 -->|Refines| n86
  n120 -->|Depends on| n4
  n121 -->|Accepts| n120
  n122 -->|Refines| n86
  n122 -->|Depends on| n4
  n123 -->|Accepts| n122
  n124 -->|Refines| n86
  n125 -->|Accepts| n124
  n126 -->|Refines| n86
  n126 -->|Depends on| n4
  n127 -->|Accepts| n126
  n128 -->|Refines| n86
  n128 -->|Depends on| n4
  n129 -->|Accepts| n128
  n130 -->|Verifies| n18
  n130 -->|In| n138
  n130 -->|Depends on| n18
  n130 -->|Depends on| n19
  n130 -->|Depends on| n136
  n130 -->|Depends on| n135
  n131 -->|Verifies| n72
  n131 -->|Verifies| n81
  n131 -->|Verifies| n62
  n131 -->|Verifies| n71
  n131 -->|In| n138
  n131 -->|Depends on| n74
  n131 -->|Depends on| n78
  n131 -->|Depends on| n77
  n131 -->|Depends on| n75
  n131 -->|Depends on| n76
  n131 -->|Depends on| n61
  n131 -->|Depends on| n80
  n131 -->|Depends on| n136
  n131 -->|Depends on| n4
  n131 -->|Depends on| n135
  n132 -->|Verifies| n11
  n132 -->|In| n138
  n132 -->|Depends on| n11
  n132 -->|Depends on| n136
  n132 -->|Depends on| n4
  n132 -->|Depends on| n135
  n133 -->|Chooses| n72
  n133 -->|Chooses| n81
  n133 -->|Chooses| n62
  n133 -->|Chooses| n71
  n133 -->|Chooses| n170
  n133 -->|Chooses| n167
  n133 -->|Chooses| n115
  n133 -->|In| n138
  n133 -->|Follows| n60
  n133 -->|Serves| n84
  n134 -->|Verifies| n115
  n134 -->|Verifies| n114
  n134 -->|In| n138
  n134 -->|Depends on| n113
  n134 -->|Depends on| n116
  n134 -->|Depends on| n114
  n134 -->|Depends on| n136
  n134 -->|Depends on| n135
  n134 -->|Depends on| n4
  n135 -->|Written in| n137
  n139 -->|Verifies| n170
  n139 -->|Verifies| n167
  n139 -->|In| n138
  n139 -->|Depends on| n169
  n139 -->|Depends on| n171
  n139 -->|Depends on| n172
  n139 -->|Depends on| n168
  n139 -->|Depends on| n136
  n139 -->|Depends on| n135
  n140 -->|Applies the family| n38
  n140 -->|Serves| n87
  n141 -->|Applies the family| n44
  n141 -->|Serves| n87
  n142 -->|Applies the family| n33
  n142 -->|Serves| n87
  n143 -->|Applies the family| n52
  n143 -->|Serves| n87
  n144 -->|Ships| n151
  n144 -->|Follows the policy| n152
  n145 -->|Applies the family| n48
  n145 -->|Serves| n87
  n147 -->|Runs elsewhere| n144
  n147 -->|Its writer's settings| n146
  n148 -->|Applies the family| n50
  n148 -->|Serves| n87
  n149 -->|Applies the family| n46
  n149 -->|Serves| n87
  n150 -->|Ships| n147
  n152 -->|Its obligations| n143
  n152 -->|Its obligations| n148
  n152 -->|Its obligations| n142
  n152 -->|Its obligations| n149
  n152 -->|Its obligations| n145
  n152 -->|Its obligations| n140
  n152 -->|Its obligations| n141
  n153 -->|Serves| n82
  n154 -->|Serves| n82
  n155 -->|Serves| n82
  n156 -->|Serves| n82
  n157 -->|Serves| n82
  n158 -->|Serves| n82
  n159 -->|Serves| n82
  n160 -->|Serves| n82
  n161 -->|Serves| n82
  n162 -->|Serves| n82
  n163 -->|Serves| n82
  n164 -->|Serves| n82
  n165 -->|Serves| n82
  n166 -->|Serves| n82
  n167 -->|Implements| n172
  n167 -->|Implements| n168
  n167 -->|Depends on| n4
  n170 -->|Implements| n169
  n170 -->|Implements| n171
  n170 -->|Depends on| n11
  n170 -->|Depends on| n6
  n174 -->|Implements| n169
  n174 -->|Depends on| n12
  n174 -->|Depends on| n156
  n175 -->|Implements| n181
  n175 -->|Depends on| n154
  n175 -->|Depends on| n153
  n175 -->|Depends on| n7
  n176 -->|Serves| n84
  n178 -->|Serves| n82
  n179 -->|Implements| n172
  n179 -->|Uses| n180
  n179 -->|Depends on| n173
  n179 -->|Depends on| n178
  n179 -->|Depends on| n4
  n179 -->|Depends on| n30
  n182 -->|Serves| n84
  n182 -->|Applied by| n181
  n182 -->|Applied by| n175
  n182 -->|Applied by| n169
  n182 -->|Applied by| n171
  n182 -->|Applied by| n174
  n182 -->|Applied by| n170
  n182 -->|Applied by| n172
  n182 -->|Applied by| n179
  n182 -->|Applied by| n168
  n182 -->|Applied by| n167
  n182 -->|Applied by| n177
  n183 -->|Serves| n82
  n184 -->|Serves| n82
  n185 -->|Serves| n82
  n186 -->|Serves| n82
  n187 -->|Serves| n82
  n188 -->|Serves| n82
  n189 -->|Serves| n82
  n190 -->|Serves| n82
  n191 -->|Serves| n82
  n192 -->|Serves| n82
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
