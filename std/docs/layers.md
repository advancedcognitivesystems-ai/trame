# Layers

*The graph in force on 20 November 2026, ordered by distance to the goals.*

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
  subgraph judgment["Standard library · Judgment"]
    n25["As the language says<br/><small>Function</small>"]:::held
    n26["Every warning an error<br/><small>Function</small>"]:::held
    n27["Hardening<br/><small>Port</small>"]:::neutral
    n28["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n29["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph measures["Standard library · Measures"]
    n30["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n31["Language tags<br/><small>Standard</small>"]:::neutral
    n32["Ratio<br/><small>Quantity</small>"]:::neutral
    n33["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n34["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n35["Time<br/><small>Quantity</small>"]:::neutral
    n36["Units of measure<br/><small>Standard</small>"]:::neutral
    n37["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n38["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n39["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n40["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n41["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n42["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n43["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n44["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n45["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n46["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n47["What people decided is published<br/><small>Requirement</small>"]:::held
    n48["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n49["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n50["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n51["The project's rules hold<br/><small>Requirement</small>"]:::held
    n52["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n53["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n54["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n55["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n56["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n57["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n58["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n59["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n60["Trame<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n61["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n62["Adapter<br/><small>Design pattern</small>"]:::neutral
    n63["Bridge<br/><small>Design pattern</small>"]:::neutral
    n64["Repository<br/><small>Design pattern</small>"]:::neutral
    n65["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n66["Animation frames<br/><small>Port</small>"]:::neutral
    n67["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n68["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n69["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n70["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n71["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n72["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n73["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n74["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n75["Languages of the device<br/><small>Port</small>"]:::neutral
    n76["Frames turned by hand<br/><small>Function</small>"]:::held
    n77["Preferences kept in memory<br/><small>Function</small>"]:::held
    n78["Loading of a page<br/><small>Port</small>"]:::neutral
    n79["Preferences<br/><small>Port</small>"]:::neutral
    n80["Screen kept awake<br/><small>Port</small>"]:::neutral
    n81["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n82["What was said<br/><small>Port</small>"]:::neutral
    n83["Speech<br/><small>Port</small>"]:::neutral
    n84["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n85["Time turned by hand<br/><small>Port</small>"]:::neutral
    n86["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n87["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n88["Known designs, named<br/><small>Goal</small>"]:::neutral
    n89["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n90["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n91["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n92["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n93["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n94["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n97["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n98["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n99["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n100["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n101["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n102["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n105["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n108["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n109["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n110["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n111["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n112["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n113["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n114["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n115["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n116["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n117["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n118["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n119["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n120["A repository compared with its settings<br/><small>Function</small>"]:::held
    n121["A repository kept in memory<br/><small>Function</small>"]:::held
    n122["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n123["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n124["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n125["Directions<br/><small>Vocabulary</small>"]:::neutral
    n126["As many links as asked<br/><small>Requirement</small>"]:::held
    n127["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n128["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n129["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n130["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n131["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n132["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n133["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n134["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n135["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n136["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n137["The device, in memory<br/><small>Scenario</small>"]:::held
    n138["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n139["In memory<br/><small>Technical choice</small>"]:::held
    n140["Judged as the language says<br/><small>Scenario</small>"]:::held
    n141["Judged strictly<br/><small>Scenario</small>"]:::held
    n142["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n143["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n144["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n145["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n146["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n147["Strict<br/><small>Environment</small>"]:::neutral
    n148["Judged strictly<br/><small>Technical choice</small>"]:::held
    n149["Test<br/><small>Environment</small>"]:::neutral
    n150["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n151["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n152["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n153["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n154["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n155["The next version<br/><small>Shipment</small>"]:::unknown
    n156["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n157["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n158["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n159["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n160["Its rules held<br/><small>Obligation</small>"]:::neutral
    n161["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n162["The standard library<br/><small>Artefact</small>"]:::unknown
    n163["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n164["Exit status<br/><small>Standard</small>"]:::neutral
    n165["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n166["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n167["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n168["Node.js events<br/><small>Standard</small>"]:::neutral
    n169["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n170["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n171["npm's command line<br/><small>Standard</small>"]:::neutral
    n172["npm's manifest<br/><small>Standard</small>"]:::neutral
    n173["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n174["Positions in a file<br/><small>Standard</small>"]:::neutral
    n175["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n176["Text file<br/><small>Standard</small>"]:::neutral
    n177["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n178["A browser kept in memory<br/><small>Function</small>"]:::held
    n179["Browser script<br/><small>Port</small>"]:::neutral
    n180["Project files<br/><small>Port</small>"]:::neutral
    n181["Files kept in memory<br/><small>Function</small>"]:::held
    n182["Files written<br/><small>Port</small>"]:::neutral
    n183["Headless browser<br/><small>Port</small>"]:::neutral
    n184["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n185["The machine's files<br/><small>Implementation</small>"]:::neutral
    n186["Node's command line<br/><small>Implementation</small>"]:::neutral
    n187["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n188["Where a package comes from<br/><small>Port</small>"]:::neutral
    n189["Playwright's API<br/><small>Standard</small>"]:::neutral
    n190["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n191["Playwright<br/><small>Package</small>"]:::held
    n192["Commands of a program<br/><small>Port</small>"]:::neutral
    n193["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n194["CSSOM View<br/><small>Standard</small>"]:::neutral
    n195["HTTP<br/><small>Standard</small>"]:::neutral
    n196["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n197["Media types<br/><small>Standard</small>"]:::neutral
    n198["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n199["Server-sent events<br/><small>Standard</small>"]:::neutral
    n200["UI events<br/><small>Standard</small>"]:::neutral
    n201["URI<br/><small>Standard</small>"]:::neutral
    n202["Web Audio API<br/><small>Standard</small>"]:::neutral
    n203["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n91
  n1 -->|Serves| n91
  n1 -->|Applied by| n43
  n2 -->|Serves| n91
  n3 -->|Serves| n91
  n4 -->|Serves| n90
  n5 -->|Serves| n90
  n5 -->|Depends on| n13
  n5 -->|Depends on| n4
  n6 -->|Serves| n90
  n6 -->|Depends on| n5
  n7 -->|Serves| n90
  n7 -->|Depends on| n15
  n8 -->|Serves| n87
  n9 -->|Serves| n87
  n10 -->|Serves| n87
  n11 -->|Serves| n90
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n13
  n11 -->|Depends on| n4
  n12 -->|Serves| n87
  n13 -->|Serves| n87
  n14 -->|Serves| n87
  n15 -->|Serves| n87
  n16 -->|Serves| n87
  n17 -->|Serves| n87
  n18 -->|Serves| n89
  n18 -->|Depends on| n19
  n19 -->|Serves| n89
  n21 -->|Serves| n87
  n22 -->|Serves| n87
  n23 -->|Serves| n87
  n24 -->|Serves| n87
  n25 -->|Serves| n89
  n25 -->|Implements| n27
  n25 -->|Depends on| n29
  n26 -->|Serves| n89
  n26 -->|Implements| n27
  n26 -->|Depends on| n29
  n28 -->|Serves| n89
  n28 -->|Applied by| n29
  n28 -->|Applied by| n27
  n28 -->|Applied by| n25
  n28 -->|Applied by| n26
  n29 -->|Serves| n90
  n30 -->|Serves| n87
  n31 -->|Serves| n87
  n32 -->|Written with| n37
  n32 -->|Serves| n87
  n33 -->|Serves| n87
  n35 -->|Written with| n37
  n35 -->|Serves| n87
  n36 -->|Serves| n87
  n37 -->|Written in| n34
  n38 -->|Refines| n91
  n39 -->|Accepts| n38
  n40 -->|Refines| n91
  n40 -->|Depends on| n4
  n41 -->|Accepts| n40
  n42 -->|Serves| n91
  n43 -->|Refines| n91
  n44 -->|Accepts| n43
  n45 -->|Refines| n91
  n46 -->|Accepts| n45
  n47 -->|Refines| n91
  n48 -->|Accepts| n47
  n49 -->|Refines| n91
  n49 -->|Depends on| n4
  n50 -->|Accepts| n49
  n51 -->|Refines| n91
  n52 -->|Accepts| n51
  n53 -->|Refines| n91
  n54 -->|Accepts| n53
  n55 -->|Refines| n91
  n56 -->|Accepts| n55
  n57 -->|Refines| n91
  n57 -->|Depends on| n4
  n58 -->|Accepts| n57
  n59 -->|Serves| n92
  n60 -->|Serves| n89
  n61 -->|Serves| n88
  n62 -->|Serves| n88
  n63 -->|Serves| n88
  n64 -->|Serves| n88
  n65 -->|Serves| n88
  n67 -->|Implements| n80
  n67 -->|Implements| n81
  n68 -->|Implements| n66
  n68 -->|Depends on| n35
  n69 -->|Implements| n75
  n70 -->|Implements| n78
  n70 -->|Depends on| n200
  n71 -->|Implements| n79
  n72 -->|Implements| n83
  n72 -->|Depends on| n31
  n72 -->|Depends on| n203
  n73 -->|Implements| n80
  n73 -->|Depends on| n198
  n74 -->|Serves| n89
  n74 -->|Applied by| n79
  n74 -->|Applied by| n71
  n74 -->|Applied by| n77
  n74 -->|Applied by| n75
  n74 -->|Applied by| n69
  n74 -->|Applied by| n83
  n74 -->|Applied by| n72
  n74 -->|Applied by| n86
  n74 -->|Applied by| n82
  n74 -->|Applied by| n80
  n74 -->|Applied by| n73
  n74 -->|Applied by| n67
  n74 -->|Applied by| n81
  n74 -->|Applied by| n66
  n74 -->|Applied by| n68
  n74 -->|Applied by| n76
  n74 -->|Applied by| n85
  n76 -->|Implements| n66
  n76 -->|Implements| n85
  n76 -->|Depends on| n4
  n77 -->|Implements| n79
  n84 -->|Serves| n89
  n84 -->|Applied by| n78
  n84 -->|Applied by| n70
  n86 -->|Implements| n83
  n86 -->|Implements| n82
  n93 -->|Serves| n87
  n93 -->|Serves| n88
  n93 -->|Serves| n89
  n93 -->|Serves| n90
  n94 -->|Serves| n87
  n94 -->|Serves| n88
  n94 -->|Serves| n89
  n94 -->|Serves| n90
  n94 -->|Serves| n91
  n95 -->|Serves| n87
  n95 -->|Serves| n88
  n95 -->|Serves| n89
  n95 -->|Serves| n90
  n95 -->|Serves| n91
  n96 -->|Serves| n87
  n96 -->|Serves| n88
  n96 -->|Serves| n89
  n96 -->|Serves| n90
  n96 -->|Serves| n91
  n97 -->|Serves| n87
  n97 -->|Serves| n88
  n97 -->|Serves| n89
  n97 -->|Serves| n90
  n97 -->|Serves| n91
  n98 -->|Serves| n87
  n98 -->|Serves| n88
  n98 -->|Serves| n89
  n98 -->|Serves| n90
  n98 -->|Serves| n91
  n99 -->|Serves| n87
  n99 -->|Serves| n88
  n99 -->|Serves| n89
  n99 -->|Serves| n90
  n99 -->|Serves| n91
  n100 -->|Serves| n87
  n100 -->|Serves| n88
  n100 -->|Serves| n89
  n100 -->|Serves| n90
  n100 -->|Serves| n91
  n101 -->|Serves| n87
  n101 -->|Serves| n88
  n101 -->|Serves| n89
  n101 -->|Serves| n90
  n101 -->|Serves| n91
  n101 -->|Serves| n92
  n102 -->|Serves| n87
  n102 -->|Serves| n88
  n102 -->|Serves| n89
  n102 -->|Serves| n90
  n102 -->|Serves| n91
  n102 -->|Serves| n92
  n103 -->|Serves| n87
  n103 -->|Serves| n88
  n103 -->|Serves| n89
  n103 -->|Serves| n90
  n103 -->|Serves| n91
  n103 -->|Serves| n92
  n104 -->|Serves| n87
  n104 -->|Serves| n88
  n104 -->|Serves| n89
  n104 -->|Serves| n90
  n104 -->|Serves| n91
  n104 -->|Serves| n92
  n105 -->|Serves| n87
  n105 -->|Serves| n88
  n105 -->|Serves| n89
  n105 -->|Serves| n90
  n105 -->|Serves| n91
  n105 -->|Serves| n92
  n106 -->|Serves| n87
  n106 -->|Serves| n88
  n106 -->|Serves| n89
  n106 -->|Serves| n90
  n107 -->|Serves| n87
  n107 -->|Serves| n88
  n107 -->|Serves| n89
  n107 -->|Serves| n90
  n107 -->|Serves| n91
  n107 -->|Serves| n92
  n108 -->|Serves| n87
  n108 -->|Serves| n88
  n108 -->|Serves| n89
  n108 -->|Serves| n90
  n108 -->|Serves| n91
  n108 -->|Serves| n92
  n109 -->|Serves| n87
  n109 -->|Serves| n88
  n109 -->|Serves| n89
  n109 -->|Serves| n90
  n110 -->|Serves| n87
  n110 -->|Serves| n88
  n110 -->|Serves| n89
  n110 -->|Serves| n90
  n111 -->|Serves| n87
  n111 -->|Serves| n88
  n111 -->|Serves| n89
  n111 -->|Serves| n90
  n112 -->|Serves| n87
  n112 -->|Serves| n88
  n112 -->|Serves| n89
  n112 -->|Serves| n90
  n113 -->|Serves| n87
  n113 -->|Serves| n88
  n113 -->|Serves| n89
  n113 -->|Serves| n90
  n114 -->|Serves| n87
  n114 -->|Serves| n88
  n114 -->|Serves| n89
  n114 -->|Serves| n90
  n114 -->|Serves| n91
  n115 -->|Serves| n87
  n115 -->|Serves| n88
  n115 -->|Serves| n89
  n115 -->|Serves| n90
  n115 -->|Serves| n91
  n116 -->|Implements| n119
  n116 -->|Depends on| n117
  n116 -->|Depends on| n166
  n116 -->|Depends on| n168
  n116 -->|Depends on| n164
  n116 -->|Depends on| n118
  n116 -->|Depends on| n6
  n116 -->|Depends on| n7
  n117 -->|Serves| n87
  n118 -->|Serves| n87
  n120 -->|Serves| n89
  n120 -->|Depends on| n123
  n121 -->|Serves| n89
  n121 -->|Implements| n119
  n121 -->|Implements| n122
  n123 -->|Serves| n89
  n124 -->|Serves| n89
  n124 -->|Applied by| n118
  n124 -->|Applied by| n123
  n124 -->|Applied by| n120
  n124 -->|Applied by| n119
  n124 -->|Applied by| n116
  n124 -->|Applied by| n122
  n124 -->|Applied by| n121
  n125 -->|Serves| n91
  n126 -->|Refines| n91
  n126 -->|Depends on| n4
  n127 -->|Accepts| n126
  n128 -->|Refines| n91
  n128 -->|Depends on| n4
  n129 -->|Accepts| n128
  n130 -->|Refines| n91
  n131 -->|Accepts| n130
  n132 -->|Refines| n91
  n132 -->|Depends on| n4
  n133 -->|Accepts| n132
  n134 -->|Refines| n91
  n134 -->|Depends on| n4
  n135 -->|Accepts| n134
  n136 -->|Verifies| n18
  n136 -->|In| n149
  n136 -->|Depends on| n18
  n136 -->|Depends on| n19
  n136 -->|Depends on| n145
  n136 -->|Depends on| n144
  n137 -->|Verifies| n77
  n137 -->|Verifies| n86
  n137 -->|Verifies| n67
  n137 -->|Verifies| n76
  n137 -->|In| n149
  n137 -->|Depends on| n79
  n137 -->|Depends on| n83
  n137 -->|Depends on| n82
  n137 -->|Depends on| n80
  n137 -->|Depends on| n81
  n137 -->|Depends on| n66
  n137 -->|Depends on| n85
  n137 -->|Depends on| n145
  n137 -->|Depends on| n4
  n137 -->|Depends on| n144
  n138 -->|Verifies| n11
  n138 -->|In| n149
  n138 -->|Depends on| n11
  n138 -->|Depends on| n145
  n138 -->|Depends on| n4
  n138 -->|Depends on| n144
  n139 -->|Chooses| n77
  n139 -->|Chooses| n86
  n139 -->|Chooses| n67
  n139 -->|Chooses| n76
  n139 -->|Chooses| n181
  n139 -->|Chooses| n178
  n139 -->|Chooses| n121
  n139 -->|In| n149
  n139 -->|Follows| n65
  n139 -->|Serves| n89
  n140 -->|Verifies| n25
  n140 -->|In| n149
  n140 -->|Depends on| n27
  n140 -->|Depends on| n144
  n141 -->|Verifies| n26
  n141 -->|In| n147
  n141 -->|Depends on| n27
  n141 -->|Depends on| n144
  n142 -->|Chooses| n25
  n142 -->|In| n149
  n142 -->|Follows| n65
  n142 -->|Serves| n89
  n143 -->|Verifies| n121
  n143 -->|Verifies| n120
  n143 -->|In| n149
  n143 -->|Depends on| n119
  n143 -->|Depends on| n122
  n143 -->|Depends on| n120
  n143 -->|Depends on| n145
  n143 -->|Depends on| n144
  n143 -->|Depends on| n4
  n144 -->|Written in| n146
  n148 -->|Chooses| n26
  n148 -->|In| n147
  n148 -->|Follows| n65
  n148 -->|Serves| n89
  n150 -->|Verifies| n181
  n150 -->|Verifies| n178
  n150 -->|In| n149
  n150 -->|Depends on| n180
  n150 -->|Depends on| n182
  n150 -->|Depends on| n183
  n150 -->|Depends on| n179
  n150 -->|Depends on| n145
  n150 -->|Depends on| n144
  n151 -->|Applies the family| n43
  n151 -->|Serves| n92
  n152 -->|Applies the family| n49
  n152 -->|Serves| n92
  n153 -->|Applies the family| n38
  n153 -->|Serves| n92
  n154 -->|Applies the family| n57
  n154 -->|Serves| n92
  n155 -->|Ships| n162
  n155 -->|Follows the policy| n163
  n156 -->|Applies the family| n53
  n156 -->|Serves| n92
  n158 -->|Runs elsewhere| n155
  n158 -->|Its writer's settings| n157
  n159 -->|Applies the family| n55
  n159 -->|Serves| n92
  n160 -->|Applies the family| n51
  n160 -->|Serves| n92
  n161 -->|Ships| n158
  n163 -->|Its obligations| n154
  n163 -->|Its obligations| n159
  n163 -->|Its obligations| n153
  n163 -->|Its obligations| n160
  n163 -->|Its obligations| n156
  n163 -->|Its obligations| n151
  n163 -->|Its obligations| n152
  n164 -->|Serves| n87
  n165 -->|Serves| n87
  n166 -->|Serves| n87
  n167 -->|Serves| n87
  n168 -->|Serves| n87
  n169 -->|Serves| n87
  n170 -->|Serves| n87
  n171 -->|Serves| n87
  n172 -->|Serves| n87
  n173 -->|Serves| n87
  n174 -->|Serves| n87
  n175 -->|Serves| n87
  n176 -->|Serves| n87
  n177 -->|Serves| n87
  n178 -->|Implements| n183
  n178 -->|Implements| n179
  n178 -->|Depends on| n4
  n181 -->|Implements| n180
  n181 -->|Implements| n182
  n181 -->|Depends on| n11
  n181 -->|Depends on| n6
  n185 -->|Implements| n180
  n185 -->|Depends on| n12
  n185 -->|Depends on| n167
  n186 -->|Implements| n192
  n186 -->|Depends on| n165
  n186 -->|Depends on| n164
  n186 -->|Depends on| n7
  n187 -->|Serves| n89
  n189 -->|Serves| n87
  n190 -->|Implements| n183
  n190 -->|Uses| n191
  n190 -->|Depends on| n184
  n190 -->|Depends on| n189
  n190 -->|Depends on| n4
  n190 -->|Depends on| n35
  n193 -->|Serves| n89
  n193 -->|Applied by| n192
  n193 -->|Applied by| n186
  n193 -->|Applied by| n180
  n193 -->|Applied by| n182
  n193 -->|Applied by| n185
  n193 -->|Applied by| n181
  n193 -->|Applied by| n183
  n193 -->|Applied by| n190
  n193 -->|Applied by| n179
  n193 -->|Applied by| n178
  n193 -->|Applied by| n188
  n194 -->|Serves| n87
  n195 -->|Serves| n87
  n196 -->|Serves| n87
  n197 -->|Serves| n87
  n198 -->|Serves| n87
  n199 -->|Serves| n87
  n200 -->|Serves| n87
  n201 -->|Serves| n87
  n202 -->|Serves| n87
  n203 -->|Serves| n87
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
