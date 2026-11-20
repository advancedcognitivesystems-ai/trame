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
    n61["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n62["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n63["Adapter<br/><small>Design pattern</small>"]:::neutral
    n64["Bridge<br/><small>Design pattern</small>"]:::neutral
    n65["Repository<br/><small>Design pattern</small>"]:::neutral
    n66["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n67["Animation frames<br/><small>Port</small>"]:::neutral
    n68["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n69["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n70["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n71["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n72["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n73["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n74["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n75["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n76["Languages of the device<br/><small>Port</small>"]:::neutral
    n77["Frames turned by hand<br/><small>Function</small>"]:::held
    n78["Preferences kept in memory<br/><small>Function</small>"]:::held
    n79["Loading of a page<br/><small>Port</small>"]:::neutral
    n80["Preferences<br/><small>Port</small>"]:::neutral
    n81["Screen kept awake<br/><small>Port</small>"]:::neutral
    n82["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n83["What was said<br/><small>Port</small>"]:::neutral
    n84["Speech<br/><small>Port</small>"]:::neutral
    n85["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n86["Time turned by hand<br/><small>Port</small>"]:::neutral
    n87["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n88["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n89["Known designs, named<br/><small>Goal</small>"]:::neutral
    n90["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n91["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n92["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n93["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n94["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n95["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n96["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n97["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n98["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n99["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n100["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n101["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n102["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n103["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n104["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n105["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n106["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n108["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n109["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n110["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n111["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n112["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n113["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n114["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n115["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n116["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n117["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n118["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n119["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n120["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n121["A repository compared with its settings<br/><small>Function</small>"]:::held
    n122["A repository kept in memory<br/><small>Function</small>"]:::held
    n123["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n124["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n125["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n126["Directions<br/><small>Vocabulary</small>"]:::neutral
    n127["As many links as asked<br/><small>Requirement</small>"]:::held
    n128["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n129["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n130["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n131["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n132["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n133["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n134["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n135["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n136["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n137["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n138["The device, in memory<br/><small>Scenario</small>"]:::held
    n139["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n140["In memory<br/><small>Technical choice</small>"]:::held
    n141["Judged as the language says<br/><small>Scenario</small>"]:::held
    n142["Judged strictly<br/><small>Scenario</small>"]:::held
    n143["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n144["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n145["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n146["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n147["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n148["Strict<br/><small>Environment</small>"]:::neutral
    n149["Judged strictly<br/><small>Technical choice</small>"]:::held
    n150["Test<br/><small>Environment</small>"]:::neutral
    n151["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n152["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n153["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n154["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n155["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n156["The next version<br/><small>Shipment</small>"]:::unknown
    n157["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n158["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n159["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n160["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n161["Its rules held<br/><small>Obligation</small>"]:::neutral
    n162["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n163["The standard library<br/><small>Artefact</small>"]:::unknown
    n164["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n165["Exit status<br/><small>Standard</small>"]:::neutral
    n166["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n167["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n168["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n169["Node.js events<br/><small>Standard</small>"]:::neutral
    n170["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n171["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n172["npm's command line<br/><small>Standard</small>"]:::neutral
    n173["npm's manifest<br/><small>Standard</small>"]:::neutral
    n174["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n175["Positions in a file<br/><small>Standard</small>"]:::neutral
    n176["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n177["Text file<br/><small>Standard</small>"]:::neutral
    n178["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n179["A browser kept in memory<br/><small>Function</small>"]:::held
    n180["Browser script<br/><small>Port</small>"]:::neutral
    n181["Project files<br/><small>Port</small>"]:::neutral
    n182["Files kept in memory<br/><small>Function</small>"]:::held
    n183["Files written<br/><small>Port</small>"]:::neutral
    n184["Headless browser<br/><small>Port</small>"]:::neutral
    n185["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n186["The machine's files<br/><small>Implementation</small>"]:::neutral
    n187["Node's command line<br/><small>Implementation</small>"]:::neutral
    n188["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n189["Where a package comes from<br/><small>Port</small>"]:::neutral
    n190["Playwright's API<br/><small>Standard</small>"]:::neutral
    n191["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n192["Playwright<br/><small>Package</small>"]:::held
    n193["Commands of a program<br/><small>Port</small>"]:::neutral
    n194["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n195["CSSOM View<br/><small>Standard</small>"]:::neutral
    n196["HTTP<br/><small>Standard</small>"]:::neutral
    n197["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n198["Media types<br/><small>Standard</small>"]:::neutral
    n199["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n200["Server-sent events<br/><small>Standard</small>"]:::neutral
    n201["UI events<br/><small>Standard</small>"]:::neutral
    n202["URI<br/><small>Standard</small>"]:::neutral
    n203["Web Audio API<br/><small>Standard</small>"]:::neutral
    n204["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n92
  n1 -->|Serves| n92
  n1 -->|Applied by| n43
  n2 -->|Serves| n92
  n3 -->|Serves| n92
  n4 -->|Serves| n91
  n5 -->|Serves| n91
  n5 -->|Depends on| n13
  n5 -->|Depends on| n4
  n6 -->|Serves| n91
  n6 -->|Depends on| n5
  n7 -->|Serves| n91
  n7 -->|Depends on| n15
  n8 -->|Serves| n88
  n9 -->|Serves| n88
  n10 -->|Serves| n88
  n11 -->|Serves| n91
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n13
  n11 -->|Depends on| n4
  n12 -->|Serves| n88
  n13 -->|Serves| n88
  n14 -->|Serves| n88
  n15 -->|Serves| n88
  n16 -->|Serves| n88
  n17 -->|Serves| n88
  n18 -->|Serves| n90
  n18 -->|Depends on| n19
  n19 -->|Serves| n90
  n21 -->|Serves| n88
  n22 -->|Serves| n88
  n23 -->|Serves| n88
  n24 -->|Serves| n88
  n25 -->|Serves| n90
  n25 -->|Implements| n27
  n25 -->|Depends on| n29
  n26 -->|Serves| n90
  n26 -->|Implements| n27
  n26 -->|Depends on| n29
  n28 -->|Serves| n90
  n28 -->|Applied by| n29
  n28 -->|Applied by| n27
  n28 -->|Applied by| n25
  n28 -->|Applied by| n26
  n29 -->|Serves| n91
  n30 -->|Serves| n88
  n31 -->|Serves| n88
  n32 -->|Written with| n37
  n32 -->|Serves| n88
  n33 -->|Serves| n88
  n35 -->|Written with| n37
  n35 -->|Serves| n88
  n36 -->|Serves| n88
  n37 -->|Written in| n34
  n38 -->|Refines| n92
  n39 -->|Accepts| n38
  n40 -->|Refines| n92
  n40 -->|Depends on| n4
  n41 -->|Accepts| n40
  n42 -->|Serves| n92
  n43 -->|Refines| n92
  n44 -->|Accepts| n43
  n45 -->|Refines| n92
  n46 -->|Accepts| n45
  n47 -->|Refines| n92
  n48 -->|Accepts| n47
  n49 -->|Refines| n92
  n49 -->|Depends on| n4
  n50 -->|Accepts| n49
  n51 -->|Refines| n92
  n52 -->|Accepts| n51
  n53 -->|Refines| n92
  n54 -->|Accepts| n53
  n55 -->|Refines| n92
  n56 -->|Accepts| n55
  n57 -->|Refines| n92
  n57 -->|Depends on| n4
  n58 -->|Accepts| n57
  n59 -->|Serves| n93
  n60 -->|Serves| n90
  n61 -->|Serves| n93
  n62 -->|Serves| n89
  n63 -->|Serves| n89
  n64 -->|Serves| n89
  n65 -->|Serves| n89
  n66 -->|Serves| n89
  n68 -->|Implements| n81
  n68 -->|Implements| n82
  n69 -->|Implements| n67
  n69 -->|Depends on| n35
  n70 -->|Implements| n76
  n71 -->|Implements| n79
  n71 -->|Depends on| n201
  n72 -->|Implements| n80
  n73 -->|Implements| n84
  n73 -->|Depends on| n31
  n73 -->|Depends on| n204
  n74 -->|Implements| n81
  n74 -->|Depends on| n199
  n75 -->|Serves| n90
  n75 -->|Applied by| n80
  n75 -->|Applied by| n72
  n75 -->|Applied by| n78
  n75 -->|Applied by| n76
  n75 -->|Applied by| n70
  n75 -->|Applied by| n84
  n75 -->|Applied by| n73
  n75 -->|Applied by| n87
  n75 -->|Applied by| n83
  n75 -->|Applied by| n81
  n75 -->|Applied by| n74
  n75 -->|Applied by| n68
  n75 -->|Applied by| n82
  n75 -->|Applied by| n67
  n75 -->|Applied by| n69
  n75 -->|Applied by| n77
  n75 -->|Applied by| n86
  n77 -->|Implements| n67
  n77 -->|Implements| n86
  n77 -->|Depends on| n4
  n78 -->|Implements| n80
  n85 -->|Serves| n90
  n85 -->|Applied by| n79
  n85 -->|Applied by| n71
  n87 -->|Implements| n84
  n87 -->|Implements| n83
  n94 -->|Serves| n88
  n94 -->|Serves| n89
  n94 -->|Serves| n90
  n94 -->|Serves| n91
  n95 -->|Serves| n88
  n95 -->|Serves| n89
  n95 -->|Serves| n90
  n95 -->|Serves| n91
  n95 -->|Serves| n92
  n96 -->|Serves| n88
  n96 -->|Serves| n89
  n96 -->|Serves| n90
  n96 -->|Serves| n91
  n96 -->|Serves| n92
  n97 -->|Serves| n88
  n97 -->|Serves| n89
  n97 -->|Serves| n90
  n97 -->|Serves| n91
  n97 -->|Serves| n92
  n98 -->|Serves| n88
  n98 -->|Serves| n89
  n98 -->|Serves| n90
  n98 -->|Serves| n91
  n98 -->|Serves| n92
  n99 -->|Serves| n88
  n99 -->|Serves| n89
  n99 -->|Serves| n90
  n99 -->|Serves| n91
  n99 -->|Serves| n92
  n100 -->|Serves| n88
  n100 -->|Serves| n89
  n100 -->|Serves| n90
  n100 -->|Serves| n91
  n100 -->|Serves| n92
  n101 -->|Serves| n88
  n101 -->|Serves| n89
  n101 -->|Serves| n90
  n101 -->|Serves| n91
  n101 -->|Serves| n92
  n102 -->|Serves| n88
  n102 -->|Serves| n89
  n102 -->|Serves| n90
  n102 -->|Serves| n91
  n102 -->|Serves| n92
  n102 -->|Serves| n93
  n103 -->|Serves| n88
  n103 -->|Serves| n89
  n103 -->|Serves| n90
  n103 -->|Serves| n91
  n103 -->|Serves| n92
  n103 -->|Serves| n93
  n104 -->|Serves| n88
  n104 -->|Serves| n89
  n104 -->|Serves| n90
  n104 -->|Serves| n91
  n104 -->|Serves| n92
  n104 -->|Serves| n93
  n105 -->|Serves| n88
  n105 -->|Serves| n89
  n105 -->|Serves| n90
  n105 -->|Serves| n91
  n105 -->|Serves| n92
  n105 -->|Serves| n93
  n106 -->|Serves| n88
  n106 -->|Serves| n89
  n106 -->|Serves| n90
  n106 -->|Serves| n91
  n106 -->|Serves| n92
  n106 -->|Serves| n93
  n107 -->|Serves| n88
  n107 -->|Serves| n89
  n107 -->|Serves| n90
  n107 -->|Serves| n91
  n108 -->|Serves| n88
  n108 -->|Serves| n89
  n108 -->|Serves| n90
  n108 -->|Serves| n91
  n108 -->|Serves| n92
  n108 -->|Serves| n93
  n109 -->|Serves| n88
  n109 -->|Serves| n89
  n109 -->|Serves| n90
  n109 -->|Serves| n91
  n109 -->|Serves| n92
  n109 -->|Serves| n93
  n110 -->|Serves| n88
  n110 -->|Serves| n89
  n110 -->|Serves| n90
  n110 -->|Serves| n91
  n111 -->|Serves| n88
  n111 -->|Serves| n89
  n111 -->|Serves| n90
  n111 -->|Serves| n91
  n112 -->|Serves| n88
  n112 -->|Serves| n89
  n112 -->|Serves| n90
  n112 -->|Serves| n91
  n113 -->|Serves| n88
  n113 -->|Serves| n89
  n113 -->|Serves| n90
  n113 -->|Serves| n91
  n114 -->|Serves| n88
  n114 -->|Serves| n89
  n114 -->|Serves| n90
  n114 -->|Serves| n91
  n115 -->|Serves| n88
  n115 -->|Serves| n89
  n115 -->|Serves| n90
  n115 -->|Serves| n91
  n115 -->|Serves| n92
  n116 -->|Serves| n88
  n116 -->|Serves| n89
  n116 -->|Serves| n90
  n116 -->|Serves| n91
  n116 -->|Serves| n92
  n117 -->|Implements| n120
  n117 -->|Depends on| n118
  n117 -->|Depends on| n167
  n117 -->|Depends on| n169
  n117 -->|Depends on| n165
  n117 -->|Depends on| n119
  n117 -->|Depends on| n6
  n117 -->|Depends on| n7
  n118 -->|Serves| n88
  n119 -->|Serves| n88
  n121 -->|Serves| n90
  n121 -->|Depends on| n124
  n122 -->|Serves| n90
  n122 -->|Implements| n120
  n122 -->|Implements| n123
  n124 -->|Serves| n90
  n125 -->|Serves| n90
  n125 -->|Applied by| n119
  n125 -->|Applied by| n124
  n125 -->|Applied by| n121
  n125 -->|Applied by| n120
  n125 -->|Applied by| n117
  n125 -->|Applied by| n123
  n125 -->|Applied by| n122
  n126 -->|Serves| n92
  n127 -->|Refines| n92
  n127 -->|Depends on| n4
  n128 -->|Accepts| n127
  n129 -->|Refines| n92
  n129 -->|Depends on| n4
  n130 -->|Accepts| n129
  n131 -->|Refines| n92
  n132 -->|Accepts| n131
  n133 -->|Refines| n92
  n133 -->|Depends on| n4
  n134 -->|Accepts| n133
  n135 -->|Refines| n92
  n135 -->|Depends on| n4
  n136 -->|Accepts| n135
  n137 -->|Verifies| n18
  n137 -->|In| n150
  n137 -->|Depends on| n18
  n137 -->|Depends on| n19
  n137 -->|Depends on| n146
  n137 -->|Depends on| n145
  n138 -->|Verifies| n78
  n138 -->|Verifies| n87
  n138 -->|Verifies| n68
  n138 -->|Verifies| n77
  n138 -->|In| n150
  n138 -->|Depends on| n80
  n138 -->|Depends on| n84
  n138 -->|Depends on| n83
  n138 -->|Depends on| n81
  n138 -->|Depends on| n82
  n138 -->|Depends on| n67
  n138 -->|Depends on| n86
  n138 -->|Depends on| n146
  n138 -->|Depends on| n4
  n138 -->|Depends on| n145
  n139 -->|Verifies| n11
  n139 -->|In| n150
  n139 -->|Depends on| n11
  n139 -->|Depends on| n146
  n139 -->|Depends on| n4
  n139 -->|Depends on| n145
  n140 -->|Chooses| n78
  n140 -->|Chooses| n87
  n140 -->|Chooses| n68
  n140 -->|Chooses| n77
  n140 -->|Chooses| n182
  n140 -->|Chooses| n179
  n140 -->|Chooses| n122
  n140 -->|In| n150
  n140 -->|Follows| n66
  n140 -->|Serves| n90
  n141 -->|Verifies| n25
  n141 -->|In| n150
  n141 -->|Depends on| n27
  n141 -->|Depends on| n145
  n142 -->|Verifies| n26
  n142 -->|In| n148
  n142 -->|Depends on| n27
  n142 -->|Depends on| n145
  n143 -->|Chooses| n25
  n143 -->|In| n150
  n143 -->|Follows| n66
  n143 -->|Serves| n90
  n144 -->|Verifies| n122
  n144 -->|Verifies| n121
  n144 -->|In| n150
  n144 -->|Depends on| n120
  n144 -->|Depends on| n123
  n144 -->|Depends on| n121
  n144 -->|Depends on| n146
  n144 -->|Depends on| n145
  n144 -->|Depends on| n4
  n145 -->|Written in| n147
  n149 -->|Chooses| n26
  n149 -->|In| n148
  n149 -->|Follows| n66
  n149 -->|Serves| n90
  n151 -->|Verifies| n182
  n151 -->|Verifies| n179
  n151 -->|In| n150
  n151 -->|Depends on| n181
  n151 -->|Depends on| n183
  n151 -->|Depends on| n184
  n151 -->|Depends on| n180
  n151 -->|Depends on| n146
  n151 -->|Depends on| n145
  n152 -->|Applies the family| n43
  n152 -->|Serves| n93
  n153 -->|Applies the family| n49
  n153 -->|Serves| n93
  n154 -->|Applies the family| n38
  n154 -->|Serves| n93
  n155 -->|Applies the family| n57
  n155 -->|Serves| n93
  n156 -->|Ships| n163
  n156 -->|Follows the policy| n164
  n157 -->|Applies the family| n53
  n157 -->|Serves| n93
  n159 -->|Runs elsewhere| n156
  n159 -->|Its writer's settings| n158
  n160 -->|Applies the family| n55
  n160 -->|Serves| n93
  n161 -->|Applies the family| n51
  n161 -->|Serves| n93
  n162 -->|Ships| n159
  n164 -->|Its obligations| n155
  n164 -->|Its obligations| n160
  n164 -->|Its obligations| n154
  n164 -->|Its obligations| n161
  n164 -->|Its obligations| n157
  n164 -->|Its obligations| n152
  n164 -->|Its obligations| n153
  n165 -->|Serves| n88
  n166 -->|Serves| n88
  n167 -->|Serves| n88
  n168 -->|Serves| n88
  n169 -->|Serves| n88
  n170 -->|Serves| n88
  n171 -->|Serves| n88
  n172 -->|Serves| n88
  n173 -->|Serves| n88
  n174 -->|Serves| n88
  n175 -->|Serves| n88
  n176 -->|Serves| n88
  n177 -->|Serves| n88
  n178 -->|Serves| n88
  n179 -->|Implements| n184
  n179 -->|Implements| n180
  n179 -->|Depends on| n4
  n182 -->|Implements| n181
  n182 -->|Implements| n183
  n182 -->|Depends on| n11
  n182 -->|Depends on| n6
  n186 -->|Implements| n181
  n186 -->|Depends on| n12
  n186 -->|Depends on| n168
  n187 -->|Implements| n193
  n187 -->|Depends on| n166
  n187 -->|Depends on| n165
  n187 -->|Depends on| n7
  n188 -->|Serves| n90
  n190 -->|Serves| n88
  n191 -->|Implements| n184
  n191 -->|Uses| n192
  n191 -->|Depends on| n185
  n191 -->|Depends on| n190
  n191 -->|Depends on| n4
  n191 -->|Depends on| n35
  n194 -->|Serves| n90
  n194 -->|Applied by| n193
  n194 -->|Applied by| n187
  n194 -->|Applied by| n181
  n194 -->|Applied by| n183
  n194 -->|Applied by| n186
  n194 -->|Applied by| n182
  n194 -->|Applied by| n184
  n194 -->|Applied by| n191
  n194 -->|Applied by| n180
  n194 -->|Applied by| n179
  n194 -->|Applied by| n189
  n195 -->|Serves| n88
  n196 -->|Serves| n88
  n197 -->|Serves| n88
  n198 -->|Serves| n88
  n199 -->|Serves| n88
  n200 -->|Serves| n88
  n201 -->|Serves| n88
  n202 -->|Serves| n88
  n203 -->|Serves| n88
  n204 -->|Serves| n88
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
