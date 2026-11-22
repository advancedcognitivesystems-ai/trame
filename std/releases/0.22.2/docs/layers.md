# Layers

*The graph in force on 22 November 2026, ordered by distance to the goals.*

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
  subgraph commands["Standard library · Commands"]
    n13["The language the library's commands speak in.<br/><small>Decision</small>"]:::neutral
    n14["A library offers commands, a project chooses them<br/><small>Architecture decision</small>"]:::held
    n15["What the library's commands say<br/><small>Message catalog</small>"]:::neutral
    n16["The library's commands<br/><small>Component</small>"]:::neutral
    n17["Open a pull request<br/><small>Entry point</small>"]:::held
    n18["Propagate<br/><small>Entry point</small>"]:::held
    n19["How a version is carried<br/><small>Port</small>"]:::neutral
    n20["How pull requests are opened<br/><small>Port</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n21["ECMAScript<br/><small>Standard</small>"]:::neutral
    n22["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n23["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n24["Text run as code<br/><small>Vocabulary</small>"]:::neutral
    n25["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph effects["Standard library · Effects"]
    n26["Commands<br/><small>Function</small>"]:::held
    n27["Effects<br/><small>Vocabulary</small>"]:::neutral
    n28["What the platform may do<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n29["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n30["CSS<br/><small>Standard</small>"]:::neutral
    n31["HTML<br/><small>Standard</small>"]:::neutral
    n32["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph judgment["Standard library · Judgment"]
    n33["As the language says<br/><small>Function</small>"]:::held
    n34["Every warning an error<br/><small>Function</small>"]:::held
    n35["Hardening<br/><small>Port</small>"]:::neutral
    n36["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n37["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph measures["Standard library · Measures"]
    n38["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n39["Language tags<br/><small>Standard</small>"]:::neutral
    n40["Ratio<br/><small>Quantity</small>"]:::neutral
    n41["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n42["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n43["Time<br/><small>Quantity</small>"]:::neutral
    n44["Units of measure<br/><small>Standard</small>"]:::neutral
    n45["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n46["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n47["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n48["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n49["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n50["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n51["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n52["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n53["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n54["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n55["What people decided is published<br/><small>Requirement</small>"]:::held
    n56["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n57["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n58["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n59["The project's rules hold<br/><small>Requirement</small>"]:::held
    n60["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n61["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n62["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n63["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n64["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n65["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n66["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n67["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n68["Trame<br/><small>Package</small>"]:::neutral
    n69["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n70["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n71["Adapter<br/><small>Design pattern</small>"]:::neutral
    n72["Bridge<br/><small>Design pattern</small>"]:::neutral
    n73["Command<br/><small>Design pattern</small>"]:::neutral
    n74["Repository<br/><small>Design pattern</small>"]:::neutral
    n75["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n76["Animation frames<br/><small>Port</small>"]:::neutral
    n77["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n78["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n79["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n80["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n81["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n82["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n83["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n84["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n85["Languages of the device<br/><small>Port</small>"]:::neutral
    n86["Frames turned by hand<br/><small>Function</small>"]:::held
    n87["Preferences kept in memory<br/><small>Function</small>"]:::held
    n88["Loading of a page<br/><small>Port</small>"]:::neutral
    n89["Preferences<br/><small>Port</small>"]:::neutral
    n90["Screen kept awake<br/><small>Port</small>"]:::neutral
    n91["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n92["What was said<br/><small>Port</small>"]:::neutral
    n93["Speech<br/><small>Port</small>"]:::neutral
    n94["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n95["Time turned by hand<br/><small>Port</small>"]:::neutral
    n96["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n97["Commands chosen, not written again<br/><small>Goal</small>"]:::neutral
    n98["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n99["Known designs, named<br/><small>Goal</small>"]:::neutral
    n100["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n101["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n102["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n103["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n104["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n105["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n108["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n109["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n110["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n111["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n112["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n113["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n114["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n115["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n116["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n117["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n118["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n119["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n120["Version 0.22.0<br/><small>Release</small>"]:::neutral
    n121["Version 0.22.1<br/><small>Release</small>"]:::neutral
    n122["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n123["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n124["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n125["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n129["The automatic merge<br/><small>Port</small>"]:::neutral
    n130["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n131["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n132["The branches<br/><small>Port</small>"]:::neutral
    n133["Branches kept in memory<br/><small>Function</small>"]:::held
    n134["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n135["Git's branches<br/><small>Implementation</small>"]:::neutral
    n136["Git's command line<br/><small>Standard</small>"]:::neutral
    n137["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n138["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n139["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n140["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n141["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n142["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n143["Pull requests<br/><small>Port</small>"]:::neutral
    n144["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n145["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n146["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n147["A repository compared with its settings<br/><small>Function</small>"]:::held
    n148["A repository kept in memory<br/><small>Function</small>"]:::held
    n149["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n150["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n151["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n152["Directions<br/><small>Vocabulary</small>"]:::neutral
    n153["As many links as asked<br/><small>Requirement</small>"]:::held
    n154["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n155["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n156["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n157["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n158["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n159["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n160["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n161["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n162["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n163["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n164["The device, in memory<br/><small>Scenario</small>"]:::held
    n165["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n166["In memory<br/><small>Technical choice</small>"]:::held
    n167["Judged as the language says<br/><small>Scenario</small>"]:::held
    n168["Judged strictly<br/><small>Scenario</small>"]:::held
    n169["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n170["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n171["A pull request opened<br/><small>Scenario</small>"]:::held
    n172["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n173["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n174["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n175["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n176["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n177["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n178["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n179["Strict<br/><small>Environment</small>"]:::neutral
    n180["Judged strictly<br/><small>Technical choice</small>"]:::held
    n181["Test<br/><small>Environment</small>"]:::neutral
    n182["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n183["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n184["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n185["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n186["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n187["The next version<br/><small>Shipment</small>"]:::unknown
    n188["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n189["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n190["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n191["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n192["Its rules held<br/><small>Obligation</small>"]:::neutral
    n193["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n194["The standard library<br/><small>Artefact</small>"]:::unknown
    n195["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n196["Exit status<br/><small>Standard</small>"]:::neutral
    n197["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n198["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n199["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n200["Node.js events<br/><small>Standard</small>"]:::neutral
    n201["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n202["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n203["npm's command line<br/><small>Standard</small>"]:::neutral
    n204["npm's manifest<br/><small>Standard</small>"]:::neutral
    n205["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n206["Positions in a file<br/><small>Standard</small>"]:::neutral
    n207["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n208["Text file<br/><small>Standard</small>"]:::neutral
    n209["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n210["A browser kept in memory<br/><small>Function</small>"]:::held
    n211["Browser script<br/><small>Port</small>"]:::neutral
    n212["Project files<br/><small>Port</small>"]:::neutral
    n213["Files kept in memory<br/><small>Function</small>"]:::held
    n214["Files written<br/><small>Port</small>"]:::neutral
    n215["Headless browser<br/><small>Port</small>"]:::neutral
    n216["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n217["The machine's files<br/><small>Implementation</small>"]:::neutral
    n218["Node's command line<br/><small>Implementation</small>"]:::neutral
    n219["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n220["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n221["Where a package comes from<br/><small>Port</small>"]:::neutral
    n222["Playwright's API<br/><small>Standard</small>"]:::neutral
    n223["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n224["Playwright<br/><small>Package</small>"]:::held
    n225["Commands of a program<br/><small>Port</small>"]:::neutral
    n226["Programs run<br/><small>Port</small>"]:::neutral
    n227["Programs run in memory<br/><small>Function</small>"]:::held
    n228["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n229["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n230["CSSOM View<br/><small>Standard</small>"]:::neutral
    n231["HTTP<br/><small>Standard</small>"]:::neutral
    n232["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n233["Media types<br/><small>Standard</small>"]:::neutral
    n234["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n235["Server-sent events<br/><small>Standard</small>"]:::neutral
    n236["UI events<br/><small>Standard</small>"]:::neutral
    n237["URI<br/><small>Standard</small>"]:::neutral
    n238["Web Audio API<br/><small>Standard</small>"]:::neutral
    n239["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n102
  n1 -->|Serves| n102
  n1 -->|Applied by| n51
  n2 -->|Serves| n102
  n3 -->|Serves| n102
  n4 -->|Serves| n101
  n5 -->|Serves| n101
  n5 -->|Depends on| n21
  n5 -->|Depends on| n4
  n6 -->|Serves| n101
  n6 -->|Depends on| n5
  n7 -->|Serves| n101
  n7 -->|Depends on| n23
  n8 -->|Serves| n98
  n9 -->|Serves| n98
  n10 -->|Serves| n98
  n11 -->|Serves| n101
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n21
  n11 -->|Depends on| n4
  n12 -->|Serves| n98
  n14 -->|Serves| n97
  n14 -->|Applied by| n16
  n14 -->|Applied by| n17
  n14 -->|Applied by| n18
  n14 -->|Applied by| n73
  n15 -->|Written in| n13
  n16 -->|Depends on| n225
  n17 -->|Serves| n97
  n17 -->|Part of| n16
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n132
  n17 -->|Depends on| n143
  n17 -->|Depends on| n15
  n17 -->|Depends on| n196
  n17 -->|Depends on| n4
  n17 -->|Depends on| n205
  n17 -->|Depends on| n6
  n18 -->|Serves| n97
  n18 -->|Part of| n16
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n212
  n18 -->|Depends on| n226
  n18 -->|Depends on| n15
  n18 -->|Depends on| n196
  n18 -->|Depends on| n5
  n18 -->|Depends on| n205
  n18 -->|Depends on| n6
  n21 -->|Serves| n98
  n22 -->|Serves| n98
  n23 -->|Serves| n98
  n24 -->|Serves| n98
  n25 -->|Serves| n98
  n26 -->|Serves| n100
  n26 -->|Depends on| n27
  n27 -->|Serves| n100
  n29 -->|Serves| n98
  n30 -->|Serves| n98
  n31 -->|Serves| n98
  n32 -->|Serves| n98
  n33 -->|Serves| n100
  n33 -->|Implements| n35
  n33 -->|Depends on| n37
  n34 -->|Serves| n100
  n34 -->|Implements| n35
  n34 -->|Depends on| n37
  n36 -->|Serves| n100
  n36 -->|Applied by| n37
  n36 -->|Applied by| n35
  n36 -->|Applied by| n33
  n36 -->|Applied by| n34
  n37 -->|Serves| n101
  n38 -->|Serves| n98
  n39 -->|Serves| n98
  n40 -->|Written with| n45
  n40 -->|Serves| n98
  n41 -->|Serves| n98
  n43 -->|Written with| n45
  n43 -->|Serves| n98
  n44 -->|Serves| n98
  n45 -->|Written in| n42
  n46 -->|Refines| n102
  n47 -->|Accepts| n46
  n48 -->|Refines| n102
  n48 -->|Depends on| n4
  n49 -->|Accepts| n48
  n50 -->|Serves| n102
  n51 -->|Refines| n102
  n52 -->|Accepts| n51
  n53 -->|Refines| n102
  n54 -->|Accepts| n53
  n55 -->|Refines| n102
  n56 -->|Accepts| n55
  n57 -->|Refines| n102
  n57 -->|Depends on| n4
  n58 -->|Accepts| n57
  n59 -->|Refines| n102
  n60 -->|Accepts| n59
  n61 -->|Refines| n102
  n62 -->|Accepts| n61
  n63 -->|Refines| n102
  n64 -->|Accepts| n63
  n65 -->|Refines| n102
  n65 -->|Depends on| n4
  n66 -->|Accepts| n65
  n67 -->|Serves| n103
  n68 -->|Serves| n100
  n69 -->|Serves| n103
  n70 -->|Serves| n99
  n71 -->|Serves| n99
  n72 -->|Serves| n99
  n73 -->|Serves| n99
  n74 -->|Serves| n99
  n75 -->|Serves| n99
  n77 -->|Implements| n90
  n77 -->|Implements| n91
  n78 -->|Implements| n76
  n78 -->|Depends on| n43
  n79 -->|Implements| n85
  n80 -->|Implements| n88
  n80 -->|Depends on| n236
  n81 -->|Implements| n89
  n82 -->|Implements| n93
  n82 -->|Depends on| n39
  n82 -->|Depends on| n239
  n83 -->|Implements| n90
  n83 -->|Depends on| n234
  n84 -->|Serves| n100
  n84 -->|Applied by| n89
  n84 -->|Applied by| n81
  n84 -->|Applied by| n87
  n84 -->|Applied by| n85
  n84 -->|Applied by| n79
  n84 -->|Applied by| n93
  n84 -->|Applied by| n82
  n84 -->|Applied by| n96
  n84 -->|Applied by| n92
  n84 -->|Applied by| n90
  n84 -->|Applied by| n83
  n84 -->|Applied by| n77
  n84 -->|Applied by| n91
  n84 -->|Applied by| n76
  n84 -->|Applied by| n78
  n84 -->|Applied by| n86
  n84 -->|Applied by| n95
  n86 -->|Implements| n76
  n86 -->|Implements| n95
  n86 -->|Depends on| n4
  n87 -->|Implements| n89
  n94 -->|Serves| n100
  n94 -->|Applied by| n88
  n94 -->|Applied by| n80
  n96 -->|Implements| n93
  n96 -->|Implements| n92
  n104 -->|Serves| n98
  n104 -->|Serves| n99
  n104 -->|Serves| n100
  n104 -->|Serves| n101
  n105 -->|Serves| n98
  n105 -->|Serves| n99
  n105 -->|Serves| n100
  n105 -->|Serves| n101
  n105 -->|Serves| n102
  n106 -->|Serves| n98
  n106 -->|Serves| n99
  n106 -->|Serves| n100
  n106 -->|Serves| n101
  n106 -->|Serves| n102
  n107 -->|Serves| n98
  n107 -->|Serves| n99
  n107 -->|Serves| n100
  n107 -->|Serves| n101
  n107 -->|Serves| n102
  n108 -->|Serves| n98
  n108 -->|Serves| n99
  n108 -->|Serves| n100
  n108 -->|Serves| n101
  n108 -->|Serves| n102
  n109 -->|Serves| n98
  n109 -->|Serves| n99
  n109 -->|Serves| n100
  n109 -->|Serves| n101
  n109 -->|Serves| n102
  n110 -->|Serves| n98
  n110 -->|Serves| n99
  n110 -->|Serves| n100
  n110 -->|Serves| n101
  n110 -->|Serves| n102
  n111 -->|Serves| n98
  n111 -->|Serves| n99
  n111 -->|Serves| n100
  n111 -->|Serves| n101
  n111 -->|Serves| n102
  n112 -->|Serves| n98
  n112 -->|Serves| n99
  n112 -->|Serves| n100
  n112 -->|Serves| n101
  n112 -->|Serves| n102
  n112 -->|Serves| n103
  n113 -->|Serves| n98
  n113 -->|Serves| n99
  n113 -->|Serves| n100
  n113 -->|Serves| n101
  n113 -->|Serves| n102
  n113 -->|Serves| n103
  n114 -->|Serves| n98
  n114 -->|Serves| n99
  n114 -->|Serves| n100
  n114 -->|Serves| n101
  n114 -->|Serves| n102
  n114 -->|Serves| n103
  n115 -->|Serves| n98
  n115 -->|Serves| n99
  n115 -->|Serves| n100
  n115 -->|Serves| n101
  n115 -->|Serves| n102
  n115 -->|Serves| n103
  n116 -->|Serves| n98
  n116 -->|Serves| n99
  n116 -->|Serves| n100
  n116 -->|Serves| n101
  n116 -->|Serves| n102
  n116 -->|Serves| n103
  n117 -->|Serves| n98
  n117 -->|Serves| n99
  n117 -->|Serves| n100
  n117 -->|Serves| n101
  n118 -->|Serves| n98
  n118 -->|Serves| n99
  n118 -->|Serves| n100
  n118 -->|Serves| n101
  n118 -->|Serves| n102
  n118 -->|Serves| n103
  n119 -->|Serves| n98
  n119 -->|Serves| n99
  n119 -->|Serves| n100
  n119 -->|Serves| n101
  n119 -->|Serves| n102
  n119 -->|Serves| n103
  n120 -->|Serves| n97
  n120 -->|Serves| n98
  n120 -->|Serves| n99
  n120 -->|Serves| n100
  n120 -->|Serves| n101
  n120 -->|Serves| n102
  n120 -->|Serves| n103
  n121 -->|Serves| n97
  n121 -->|Serves| n98
  n121 -->|Serves| n99
  n121 -->|Serves| n100
  n121 -->|Serves| n101
  n121 -->|Serves| n102
  n121 -->|Serves| n103
  n122 -->|Serves| n98
  n122 -->|Serves| n99
  n122 -->|Serves| n100
  n122 -->|Serves| n101
  n123 -->|Serves| n98
  n123 -->|Serves| n99
  n123 -->|Serves| n100
  n123 -->|Serves| n101
  n124 -->|Serves| n98
  n124 -->|Serves| n99
  n124 -->|Serves| n100
  n124 -->|Serves| n101
  n125 -->|Serves| n98
  n125 -->|Serves| n99
  n125 -->|Serves| n100
  n125 -->|Serves| n101
  n126 -->|Serves| n98
  n126 -->|Serves| n99
  n126 -->|Serves| n100
  n126 -->|Serves| n101
  n127 -->|Serves| n98
  n127 -->|Serves| n99
  n127 -->|Serves| n100
  n127 -->|Serves| n101
  n127 -->|Serves| n102
  n128 -->|Serves| n98
  n128 -->|Serves| n99
  n128 -->|Serves| n100
  n128 -->|Serves| n101
  n128 -->|Serves| n102
  n130 -->|Implements| n129
  n130 -->|Depends on| n137
  n130 -->|Depends on| n141
  n130 -->|Depends on| n142
  n130 -->|Depends on| n198
  n130 -->|Depends on| n200
  n130 -->|Depends on| n196
  n131 -->|Implements| n129
  n131 -->|Depends on| n137
  n131 -->|Depends on| n141
  n131 -->|Depends on| n140
  n131 -->|Depends on| n198
  n131 -->|Depends on| n200
  n131 -->|Depends on| n196
  n131 -->|Depends on| n6
  n133 -->|Serves| n100
  n133 -->|Implements| n132
  n133 -->|Implements| n134
  n135 -->|Implements| n132
  n135 -->|Depends on| n136
  n135 -->|Depends on| n198
  n135 -->|Depends on| n200
  n135 -->|Depends on| n196
  n135 -->|Depends on| n6
  n135 -->|Depends on| n208
  n136 -->|Serves| n98
  n137 -->|Serves| n98
  n138 -->|Implements| n143
  n138 -->|Depends on| n141
  n138 -->|Depends on| n140
  n138 -->|Depends on| n198
  n138 -->|Depends on| n200
  n138 -->|Depends on| n196
  n138 -->|Depends on| n6
  n138 -->|Depends on| n7
  n138 -->|Depends on| n129
  n139 -->|Implements| n146
  n139 -->|Depends on| n141
  n139 -->|Depends on| n198
  n139 -->|Depends on| n200
  n139 -->|Depends on| n196
  n139 -->|Depends on| n142
  n139 -->|Depends on| n6
  n139 -->|Depends on| n7
  n140 -->|Serves| n98
  n141 -->|Serves| n98
  n142 -->|Serves| n98
  n144 -->|Serves| n100
  n144 -->|Implements| n143
  n144 -->|Implements| n145
  n144 -->|Depends on| n141
  n144 -->|Depends on| n140
  n144 -->|Depends on| n6
  n147 -->|Serves| n100
  n147 -->|Depends on| n150
  n148 -->|Serves| n100
  n148 -->|Implements| n146
  n148 -->|Implements| n149
  n150 -->|Serves| n100
  n151 -->|Serves| n100
  n151 -->|Applied by| n142
  n151 -->|Applied by| n150
  n151 -->|Applied by| n147
  n151 -->|Applied by| n146
  n151 -->|Applied by| n139
  n151 -->|Applied by| n149
  n151 -->|Applied by| n148
  n152 -->|Serves| n102
  n153 -->|Refines| n102
  n153 -->|Depends on| n4
  n154 -->|Accepts| n153
  n155 -->|Refines| n102
  n155 -->|Depends on| n4
  n156 -->|Accepts| n155
  n157 -->|Refines| n102
  n158 -->|Accepts| n157
  n159 -->|Refines| n102
  n159 -->|Depends on| n4
  n160 -->|Accepts| n159
  n161 -->|Refines| n102
  n161 -->|Depends on| n4
  n162 -->|Accepts| n161
  n163 -->|Verifies| n26
  n163 -->|In| n181
  n163 -->|Depends on| n26
  n163 -->|Depends on| n27
  n163 -->|Depends on| n174
  n163 -->|Depends on| n173
  n164 -->|Verifies| n87
  n164 -->|Verifies| n96
  n164 -->|Verifies| n77
  n164 -->|Verifies| n86
  n164 -->|In| n181
  n164 -->|Depends on| n89
  n164 -->|Depends on| n93
  n164 -->|Depends on| n92
  n164 -->|Depends on| n90
  n164 -->|Depends on| n91
  n164 -->|Depends on| n76
  n164 -->|Depends on| n95
  n164 -->|Depends on| n174
  n164 -->|Depends on| n4
  n164 -->|Depends on| n173
  n165 -->|Verifies| n11
  n165 -->|In| n181
  n165 -->|Depends on| n11
  n165 -->|Depends on| n174
  n165 -->|Depends on| n4
  n165 -->|Depends on| n173
  n166 -->|Chooses| n87
  n166 -->|Chooses| n96
  n166 -->|Chooses| n77
  n166 -->|Chooses| n86
  n166 -->|Chooses| n213
  n166 -->|Chooses| n210
  n166 -->|Chooses| n148
  n166 -->|Chooses| n133
  n166 -->|Chooses| n144
  n166 -->|Chooses| n227
  n166 -->|In| n181
  n166 -->|Follows| n75
  n166 -->|Serves| n100
  n167 -->|Verifies| n33
  n167 -->|In| n181
  n167 -->|Depends on| n35
  n167 -->|Depends on| n173
  n168 -->|Verifies| n34
  n168 -->|In| n179
  n168 -->|Depends on| n35
  n168 -->|Depends on| n173
  n169 -->|Chooses| n33
  n169 -->|In| n181
  n169 -->|Follows| n75
  n169 -->|Serves| n100
  n170 -->|Verifies| n18
  n170 -->|Verifies| n227
  n170 -->|Verifies| n176
  n170 -->|In| n181
  n170 -->|Depends on| n18
  n170 -->|Depends on| n212
  n170 -->|Depends on| n228
  n170 -->|Depends on| n174
  n170 -->|Depends on| n15
  n170 -->|Depends on| n173
  n170 -->|Depends on| n4
  n170 -->|Depends on| n5
  n170 -->|Depends on| n196
  n171 -->|Verifies| n17
  n171 -->|Verifies| n133
  n171 -->|Verifies| n144
  n171 -->|Verifies| n177
  n171 -->|In| n181
  n171 -->|Depends on| n17
  n171 -->|Depends on| n134
  n171 -->|Depends on| n145
  n171 -->|Depends on| n174
  n171 -->|Depends on| n15
  n171 -->|Depends on| n173
  n171 -->|Depends on| n4
  n171 -->|Depends on| n196
  n172 -->|Verifies| n148
  n172 -->|Verifies| n147
  n172 -->|In| n181
  n172 -->|Depends on| n146
  n172 -->|Depends on| n149
  n172 -->|Depends on| n147
  n172 -->|Depends on| n174
  n172 -->|Depends on| n173
  n172 -->|Depends on| n4
  n173 -->|Written in| n175
  n176 -->|Serves| n100
  n176 -->|Implements| n19
  n176 -->|Depends on| n174
  n177 -->|Serves| n100
  n177 -->|Implements| n20
  n177 -->|Depends on| n174
  n178 -->|Chooses| n177
  n178 -->|Chooses| n176
  n178 -->|In| n181
  n178 -->|Follows| n75
  n178 -->|Serves| n100
  n180 -->|Chooses| n34
  n180 -->|In| n179
  n180 -->|Follows| n75
  n180 -->|Serves| n100
  n182 -->|Verifies| n213
  n182 -->|Verifies| n210
  n182 -->|In| n181
  n182 -->|Depends on| n212
  n182 -->|Depends on| n214
  n182 -->|Depends on| n215
  n182 -->|Depends on| n211
  n182 -->|Depends on| n174
  n182 -->|Depends on| n173
  n183 -->|Applies the family| n51
  n183 -->|Serves| n103
  n184 -->|Applies the family| n57
  n184 -->|Serves| n103
  n185 -->|Applies the family| n46
  n185 -->|Serves| n103
  n186 -->|Applies the family| n65
  n186 -->|Serves| n103
  n187 -->|Ships| n194
  n187 -->|Follows the policy| n195
  n188 -->|Applies the family| n61
  n188 -->|Serves| n103
  n190 -->|Runs elsewhere| n187
  n190 -->|Its writer's settings| n189
  n191 -->|Applies the family| n63
  n191 -->|Serves| n103
  n192 -->|Applies the family| n59
  n192 -->|Serves| n103
  n193 -->|Ships| n190
  n195 -->|Its obligations| n186
  n195 -->|Its obligations| n191
  n195 -->|Its obligations| n185
  n195 -->|Its obligations| n192
  n195 -->|Its obligations| n188
  n195 -->|Its obligations| n183
  n195 -->|Its obligations| n184
  n196 -->|Serves| n98
  n197 -->|Serves| n98
  n198 -->|Serves| n98
  n199 -->|Serves| n98
  n200 -->|Serves| n98
  n201 -->|Serves| n98
  n202 -->|Serves| n98
  n203 -->|Serves| n98
  n204 -->|Serves| n98
  n205 -->|Serves| n98
  n206 -->|Serves| n98
  n207 -->|Serves| n98
  n208 -->|Serves| n98
  n209 -->|Serves| n98
  n210 -->|Implements| n215
  n210 -->|Implements| n211
  n210 -->|Depends on| n4
  n213 -->|Implements| n212
  n213 -->|Implements| n214
  n213 -->|Depends on| n11
  n213 -->|Depends on| n6
  n217 -->|Implements| n212
  n217 -->|Depends on| n12
  n217 -->|Depends on| n199
  n218 -->|Implements| n225
  n218 -->|Depends on| n197
  n218 -->|Depends on| n196
  n218 -->|Depends on| n7
  n219 -->|Implements| n226
  n219 -->|Depends on| n198
  n219 -->|Depends on| n200
  n219 -->|Depends on| n196
  n219 -->|Depends on| n205
  n220 -->|Serves| n100
  n222 -->|Serves| n98
  n223 -->|Implements| n215
  n223 -->|Uses| n224
  n223 -->|Depends on| n216
  n223 -->|Depends on| n222
  n223 -->|Depends on| n4
  n223 -->|Depends on| n43
  n227 -->|Serves| n100
  n227 -->|Implements| n226
  n227 -->|Implements| n228
  n227 -->|Depends on| n196
  n227 -->|Depends on| n212
  n229 -->|Serves| n100
  n229 -->|Applied by| n225
  n229 -->|Applied by| n218
  n229 -->|Applied by| n212
  n229 -->|Applied by| n214
  n229 -->|Applied by| n217
  n229 -->|Applied by| n213
  n229 -->|Applied by| n215
  n229 -->|Applied by| n223
  n229 -->|Applied by| n211
  n229 -->|Applied by| n210
  n229 -->|Applied by| n221
  n230 -->|Serves| n98
  n231 -->|Serves| n98
  n232 -->|Serves| n98
  n233 -->|Serves| n98
  n234 -->|Serves| n98
  n235 -->|Serves| n98
  n236 -->|Serves| n98
  n237 -->|Serves| n98
  n238 -->|Serves| n98
  n239 -->|Serves| n98
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
