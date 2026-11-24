# Layers

*The graph in force on 24 November 2026, ordered by distance to the goals.*

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
    n17["Merge a pull request<br/><small>Entry point</small>"]:::held
    n18["Open a pull request<br/><small>Entry point</small>"]:::held
    n19["Propagate<br/><small>Entry point</small>"]:::held
    n20["How a version is carried<br/><small>Port</small>"]:::neutral
    n21["How pull requests are opened<br/><small>Port</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n22["ECMAScript<br/><small>Standard</small>"]:::neutral
    n23["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n24["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n25["Text run as code<br/><small>Vocabulary</small>"]:::neutral
    n26["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph effects["Standard library · Effects"]
    n27["Commands<br/><small>Function</small>"]:::held
    n28["Effects<br/><small>Vocabulary</small>"]:::neutral
    n29["What the platform may do<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n30["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n31["CSS<br/><small>Standard</small>"]:::neutral
    n32["HTML<br/><small>Standard</small>"]:::neutral
    n33["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph judgment["Standard library · Judgment"]
    n34["As the language says<br/><small>Function</small>"]:::held
    n35["Every warning an error<br/><small>Function</small>"]:::held
    n36["Hardening<br/><small>Port</small>"]:::neutral
    n37["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n38["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph measures["Standard library · Measures"]
    n39["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n40["Language tags<br/><small>Standard</small>"]:::neutral
    n41["Ratio<br/><small>Quantity</small>"]:::neutral
    n42["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n43["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n44["Time<br/><small>Quantity</small>"]:::neutral
    n45["Units of measure<br/><small>Standard</small>"]:::neutral
    n46["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n47["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n48["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n49["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n50["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n51["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n52["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n53["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n54["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n55["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n56["What people decided is published<br/><small>Requirement</small>"]:::held
    n57["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n58["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n59["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n60["The project's rules hold<br/><small>Requirement</small>"]:::held
    n61["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n62["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n63["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n64["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n65["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n66["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n67["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n68["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n69["Trame<br/><small>Package</small>"]:::neutral
    n70["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n71["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n72["Adapter<br/><small>Design pattern</small>"]:::neutral
    n73["Bridge<br/><small>Design pattern</small>"]:::neutral
    n74["Command<br/><small>Design pattern</small>"]:::neutral
    n75["Repository<br/><small>Design pattern</small>"]:::neutral
    n76["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n77["Animation frames<br/><small>Port</small>"]:::neutral
    n78["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n79["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n80["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n81["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n82["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n83["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n84["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n85["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n86["Languages of the device<br/><small>Port</small>"]:::neutral
    n87["Frames turned by hand<br/><small>Function</small>"]:::held
    n88["Preferences kept in memory<br/><small>Function</small>"]:::held
    n89["Loading of a page<br/><small>Port</small>"]:::neutral
    n90["Preferences<br/><small>Port</small>"]:::neutral
    n91["Screen kept awake<br/><small>Port</small>"]:::neutral
    n92["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n93["What was said<br/><small>Port</small>"]:::neutral
    n94["Speech<br/><small>Port</small>"]:::neutral
    n95["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n96["Time turned by hand<br/><small>Port</small>"]:::neutral
    n97["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n98["Commands chosen, not written again<br/><small>Goal</small>"]:::neutral
    n99["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n100["Known designs, named<br/><small>Goal</small>"]:::neutral
    n101["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n102["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n103["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n104["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n105["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n106["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n107["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n108["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n109["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n110["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n111["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n112["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n113["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n114["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n115["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n116["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n117["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n118["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n119["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n120["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n121["Version 0.22.0<br/><small>Release</small>"]:::neutral
    n122["Version 0.22.1<br/><small>Release</small>"]:::neutral
    n123["Version 0.22.2<br/><small>Release</small>"]:::neutral
    n124["Version 0.22.3<br/><small>Release</small>"]:::neutral
    n125["Version 0.23.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n129["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n133["The automatic merge<br/><small>Port</small>"]:::neutral
    n134["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n135["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n136["The branches<br/><small>Port</small>"]:::neutral
    n137["Branches kept in memory<br/><small>Function</small>"]:::held
    n138["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n139["Git's branches<br/><small>Implementation</small>"]:::neutral
    n140["Git's command line<br/><small>Standard</small>"]:::neutral
    n141["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n142["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n143["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n144["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n145["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n146["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n147["Pull requests<br/><small>Port</small>"]:::neutral
    n148["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n149["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n150["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n151["A repository compared with its settings<br/><small>Function</small>"]:::held
    n152["A repository kept in memory<br/><small>Function</small>"]:::held
    n153["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n154["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n155["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n156["Directions<br/><small>Vocabulary</small>"]:::neutral
    n157["As many links as asked<br/><small>Requirement</small>"]:::held
    n158["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n159["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n160["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n161["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n162["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n163["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n164["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n165["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n166["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n167["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n168["The device, in memory<br/><small>Scenario</small>"]:::held
    n169["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n170["In memory<br/><small>Technical choice</small>"]:::held
    n171["Judged as the language says<br/><small>Scenario</small>"]:::held
    n172["Judged strictly<br/><small>Scenario</small>"]:::held
    n173["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n174["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n175["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n176["A pull request opened<br/><small>Scenario</small>"]:::held
    n177["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n178["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n179["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n180["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n181["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n182["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n183["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n184["Strict<br/><small>Environment</small>"]:::neutral
    n185["Judged strictly<br/><small>Technical choice</small>"]:::held
    n186["Test<br/><small>Environment</small>"]:::neutral
    n187["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n188["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n189["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n190["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n191["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n192["The next version<br/><small>Shipment</small>"]:::unknown
    n193["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n194["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n195["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n196["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n197["Its rules held<br/><small>Obligation</small>"]:::neutral
    n198["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n199["The standard library<br/><small>Artefact</small>"]:::unknown
    n200["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n201["Exit status<br/><small>Standard</small>"]:::neutral
    n202["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n203["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n204["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n205["Node.js events<br/><small>Standard</small>"]:::neutral
    n206["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n207["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n208["npm's command line<br/><small>Standard</small>"]:::neutral
    n209["npm's manifest<br/><small>Standard</small>"]:::neutral
    n210["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n211["Positions in a file<br/><small>Standard</small>"]:::neutral
    n212["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n213["Text file<br/><small>Standard</small>"]:::neutral
    n214["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n215["A browser kept in memory<br/><small>Function</small>"]:::held
    n216["Browser script<br/><small>Port</small>"]:::neutral
    n217["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n218["Project files<br/><small>Port</small>"]:::neutral
    n219["Files kept in memory<br/><small>Function</small>"]:::held
    n220["Files written<br/><small>Port</small>"]:::neutral
    n221["Headless browser<br/><small>Port</small>"]:::neutral
    n222["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n223["The machine's files<br/><small>Implementation</small>"]:::neutral
    n224["Node's command line<br/><small>Implementation</small>"]:::neutral
    n225["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n226["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n227["Where a package comes from<br/><small>Port</small>"]:::neutral
    n228["Playwright's API<br/><small>Standard</small>"]:::neutral
    n229["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n230["Playwright<br/><small>Package</small>"]:::held
    n231["Commands of a program<br/><small>Port</small>"]:::neutral
    n232["Programs run<br/><small>Port</small>"]:::neutral
    n233["Programs run in memory<br/><small>Function</small>"]:::held
    n234["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n235["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n236["CSSOM View<br/><small>Standard</small>"]:::neutral
    n237["HTTP<br/><small>Standard</small>"]:::neutral
    n238["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n239["Media types<br/><small>Standard</small>"]:::neutral
    n240["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n241["Server-sent events<br/><small>Standard</small>"]:::neutral
    n242["UI events<br/><small>Standard</small>"]:::neutral
    n243["URI<br/><small>Standard</small>"]:::neutral
    n244["Web Audio API<br/><small>Standard</small>"]:::neutral
    n245["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n103
  n1 -->|Serves| n103
  n1 -->|Applied by| n52
  n2 -->|Serves| n103
  n3 -->|Serves| n103
  n4 -->|Serves| n102
  n5 -->|Serves| n102
  n5 -->|Depends on| n22
  n5 -->|Depends on| n4
  n6 -->|Serves| n102
  n6 -->|Depends on| n5
  n7 -->|Serves| n102
  n7 -->|Depends on| n24
  n8 -->|Serves| n99
  n9 -->|Serves| n99
  n10 -->|Serves| n99
  n11 -->|Serves| n102
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n22
  n11 -->|Depends on| n4
  n12 -->|Serves| n99
  n14 -->|Serves| n98
  n14 -->|Applied by| n16
  n14 -->|Applied by| n18
  n14 -->|Applied by| n17
  n14 -->|Applied by| n19
  n14 -->|Applied by| n74
  n15 -->|Written in| n13
  n16 -->|Depends on| n231
  n17 -->|Serves| n98
  n17 -->|Part of| n16
  n17 -->|For| n2
  n17 -->|Depends on| n21
  n17 -->|Depends on| n136
  n17 -->|Depends on| n147
  n17 -->|Depends on| n15
  n17 -->|Depends on| n201
  n17 -->|Depends on| n4
  n17 -->|Depends on| n210
  n17 -->|Depends on| n6
  n17 -->|Depends on| n7
  n18 -->|Serves| n98
  n18 -->|Part of| n16
  n18 -->|For| n2
  n18 -->|Depends on| n21
  n18 -->|Depends on| n136
  n18 -->|Depends on| n147
  n18 -->|Depends on| n15
  n18 -->|Depends on| n201
  n18 -->|Depends on| n4
  n18 -->|Depends on| n210
  n18 -->|Depends on| n6
  n19 -->|Serves| n98
  n19 -->|Part of| n16
  n19 -->|For| n2
  n19 -->|Depends on| n20
  n19 -->|Depends on| n218
  n19 -->|Depends on| n232
  n19 -->|Depends on| n15
  n19 -->|Depends on| n201
  n19 -->|Depends on| n5
  n19 -->|Depends on| n210
  n19 -->|Depends on| n6
  n22 -->|Serves| n99
  n23 -->|Serves| n99
  n24 -->|Serves| n99
  n25 -->|Serves| n99
  n26 -->|Serves| n99
  n27 -->|Serves| n101
  n27 -->|Depends on| n28
  n28 -->|Serves| n101
  n30 -->|Serves| n99
  n31 -->|Serves| n99
  n32 -->|Serves| n99
  n33 -->|Serves| n99
  n34 -->|Serves| n101
  n34 -->|Implements| n36
  n34 -->|Depends on| n38
  n35 -->|Serves| n101
  n35 -->|Implements| n36
  n35 -->|Depends on| n38
  n37 -->|Serves| n101
  n37 -->|Applied by| n38
  n37 -->|Applied by| n36
  n37 -->|Applied by| n34
  n37 -->|Applied by| n35
  n38 -->|Serves| n102
  n39 -->|Serves| n99
  n40 -->|Serves| n99
  n41 -->|Written with| n46
  n41 -->|Serves| n99
  n42 -->|Serves| n99
  n44 -->|Written with| n46
  n44 -->|Serves| n99
  n45 -->|Serves| n99
  n46 -->|Written in| n43
  n47 -->|Refines| n103
  n48 -->|Accepts| n47
  n49 -->|Refines| n103
  n49 -->|Depends on| n4
  n50 -->|Accepts| n49
  n51 -->|Serves| n103
  n52 -->|Refines| n103
  n53 -->|Accepts| n52
  n54 -->|Refines| n103
  n55 -->|Accepts| n54
  n56 -->|Refines| n103
  n57 -->|Accepts| n56
  n58 -->|Refines| n103
  n58 -->|Depends on| n4
  n59 -->|Accepts| n58
  n60 -->|Refines| n103
  n61 -->|Accepts| n60
  n62 -->|Refines| n103
  n63 -->|Accepts| n62
  n64 -->|Refines| n103
  n65 -->|Accepts| n64
  n66 -->|Refines| n103
  n66 -->|Depends on| n4
  n67 -->|Accepts| n66
  n68 -->|Serves| n104
  n69 -->|Serves| n101
  n70 -->|Serves| n104
  n71 -->|Serves| n100
  n72 -->|Serves| n100
  n73 -->|Serves| n100
  n74 -->|Serves| n100
  n75 -->|Serves| n100
  n76 -->|Serves| n100
  n78 -->|Implements| n91
  n78 -->|Implements| n92
  n79 -->|Implements| n77
  n79 -->|Depends on| n44
  n80 -->|Implements| n86
  n81 -->|Implements| n89
  n81 -->|Depends on| n242
  n82 -->|Implements| n90
  n83 -->|Implements| n94
  n83 -->|Depends on| n40
  n83 -->|Depends on| n245
  n84 -->|Implements| n91
  n84 -->|Depends on| n240
  n85 -->|Serves| n101
  n85 -->|Applied by| n90
  n85 -->|Applied by| n82
  n85 -->|Applied by| n88
  n85 -->|Applied by| n86
  n85 -->|Applied by| n80
  n85 -->|Applied by| n94
  n85 -->|Applied by| n83
  n85 -->|Applied by| n97
  n85 -->|Applied by| n93
  n85 -->|Applied by| n91
  n85 -->|Applied by| n84
  n85 -->|Applied by| n78
  n85 -->|Applied by| n92
  n85 -->|Applied by| n77
  n85 -->|Applied by| n79
  n85 -->|Applied by| n87
  n85 -->|Applied by| n96
  n87 -->|Implements| n77
  n87 -->|Implements| n96
  n87 -->|Depends on| n4
  n88 -->|Implements| n90
  n95 -->|Serves| n101
  n95 -->|Applied by| n89
  n95 -->|Applied by| n81
  n97 -->|Implements| n94
  n97 -->|Implements| n93
  n105 -->|Serves| n99
  n105 -->|Serves| n100
  n105 -->|Serves| n101
  n105 -->|Serves| n102
  n106 -->|Serves| n99
  n106 -->|Serves| n100
  n106 -->|Serves| n101
  n106 -->|Serves| n102
  n106 -->|Serves| n103
  n107 -->|Serves| n99
  n107 -->|Serves| n100
  n107 -->|Serves| n101
  n107 -->|Serves| n102
  n107 -->|Serves| n103
  n108 -->|Serves| n99
  n108 -->|Serves| n100
  n108 -->|Serves| n101
  n108 -->|Serves| n102
  n108 -->|Serves| n103
  n109 -->|Serves| n99
  n109 -->|Serves| n100
  n109 -->|Serves| n101
  n109 -->|Serves| n102
  n109 -->|Serves| n103
  n110 -->|Serves| n99
  n110 -->|Serves| n100
  n110 -->|Serves| n101
  n110 -->|Serves| n102
  n110 -->|Serves| n103
  n111 -->|Serves| n99
  n111 -->|Serves| n100
  n111 -->|Serves| n101
  n111 -->|Serves| n102
  n111 -->|Serves| n103
  n112 -->|Serves| n99
  n112 -->|Serves| n100
  n112 -->|Serves| n101
  n112 -->|Serves| n102
  n112 -->|Serves| n103
  n113 -->|Serves| n99
  n113 -->|Serves| n100
  n113 -->|Serves| n101
  n113 -->|Serves| n102
  n113 -->|Serves| n103
  n113 -->|Serves| n104
  n114 -->|Serves| n99
  n114 -->|Serves| n100
  n114 -->|Serves| n101
  n114 -->|Serves| n102
  n114 -->|Serves| n103
  n114 -->|Serves| n104
  n115 -->|Serves| n99
  n115 -->|Serves| n100
  n115 -->|Serves| n101
  n115 -->|Serves| n102
  n115 -->|Serves| n103
  n115 -->|Serves| n104
  n116 -->|Serves| n99
  n116 -->|Serves| n100
  n116 -->|Serves| n101
  n116 -->|Serves| n102
  n116 -->|Serves| n103
  n116 -->|Serves| n104
  n117 -->|Serves| n99
  n117 -->|Serves| n100
  n117 -->|Serves| n101
  n117 -->|Serves| n102
  n117 -->|Serves| n103
  n117 -->|Serves| n104
  n118 -->|Serves| n99
  n118 -->|Serves| n100
  n118 -->|Serves| n101
  n118 -->|Serves| n102
  n119 -->|Serves| n99
  n119 -->|Serves| n100
  n119 -->|Serves| n101
  n119 -->|Serves| n102
  n119 -->|Serves| n103
  n119 -->|Serves| n104
  n120 -->|Serves| n99
  n120 -->|Serves| n100
  n120 -->|Serves| n101
  n120 -->|Serves| n102
  n120 -->|Serves| n103
  n120 -->|Serves| n104
  n121 -->|Serves| n98
  n121 -->|Serves| n99
  n121 -->|Serves| n100
  n121 -->|Serves| n101
  n121 -->|Serves| n102
  n121 -->|Serves| n103
  n121 -->|Serves| n104
  n122 -->|Serves| n98
  n122 -->|Serves| n99
  n122 -->|Serves| n100
  n122 -->|Serves| n101
  n122 -->|Serves| n102
  n122 -->|Serves| n103
  n122 -->|Serves| n104
  n123 -->|Serves| n98
  n123 -->|Serves| n99
  n123 -->|Serves| n100
  n123 -->|Serves| n101
  n123 -->|Serves| n102
  n123 -->|Serves| n103
  n123 -->|Serves| n104
  n124 -->|Serves| n98
  n124 -->|Serves| n99
  n124 -->|Serves| n100
  n124 -->|Serves| n101
  n124 -->|Serves| n102
  n124 -->|Serves| n103
  n124 -->|Serves| n104
  n125 -->|Serves| n98
  n125 -->|Serves| n99
  n125 -->|Serves| n100
  n125 -->|Serves| n101
  n125 -->|Serves| n102
  n125 -->|Serves| n103
  n125 -->|Serves| n104
  n126 -->|Serves| n99
  n126 -->|Serves| n100
  n126 -->|Serves| n101
  n126 -->|Serves| n102
  n127 -->|Serves| n99
  n127 -->|Serves| n100
  n127 -->|Serves| n101
  n127 -->|Serves| n102
  n128 -->|Serves| n99
  n128 -->|Serves| n100
  n128 -->|Serves| n101
  n128 -->|Serves| n102
  n129 -->|Serves| n99
  n129 -->|Serves| n100
  n129 -->|Serves| n101
  n129 -->|Serves| n102
  n130 -->|Serves| n99
  n130 -->|Serves| n100
  n130 -->|Serves| n101
  n130 -->|Serves| n102
  n131 -->|Serves| n99
  n131 -->|Serves| n100
  n131 -->|Serves| n101
  n131 -->|Serves| n102
  n131 -->|Serves| n103
  n132 -->|Serves| n99
  n132 -->|Serves| n100
  n132 -->|Serves| n101
  n132 -->|Serves| n102
  n132 -->|Serves| n103
  n134 -->|Implements| n133
  n134 -->|Depends on| n141
  n134 -->|Depends on| n145
  n134 -->|Depends on| n146
  n134 -->|Depends on| n203
  n134 -->|Depends on| n205
  n134 -->|Depends on| n201
  n135 -->|Implements| n133
  n135 -->|Depends on| n141
  n135 -->|Depends on| n145
  n135 -->|Depends on| n144
  n135 -->|Depends on| n203
  n135 -->|Depends on| n205
  n135 -->|Depends on| n201
  n135 -->|Depends on| n6
  n137 -->|Serves| n101
  n137 -->|Implements| n136
  n137 -->|Implements| n138
  n139 -->|Implements| n136
  n139 -->|Depends on| n140
  n139 -->|Depends on| n203
  n139 -->|Depends on| n205
  n139 -->|Depends on| n201
  n139 -->|Depends on| n6
  n139 -->|Depends on| n213
  n140 -->|Serves| n99
  n141 -->|Serves| n99
  n142 -->|Implements| n147
  n142 -->|Depends on| n145
  n142 -->|Depends on| n144
  n142 -->|Depends on| n203
  n142 -->|Depends on| n205
  n142 -->|Depends on| n201
  n142 -->|Depends on| n6
  n142 -->|Depends on| n7
  n142 -->|Depends on| n133
  n143 -->|Implements| n150
  n143 -->|Depends on| n145
  n143 -->|Depends on| n203
  n143 -->|Depends on| n205
  n143 -->|Depends on| n201
  n143 -->|Depends on| n146
  n143 -->|Depends on| n6
  n143 -->|Depends on| n7
  n144 -->|Serves| n99
  n145 -->|Serves| n99
  n146 -->|Serves| n99
  n148 -->|Serves| n101
  n148 -->|Implements| n147
  n148 -->|Implements| n149
  n148 -->|Depends on| n145
  n148 -->|Depends on| n144
  n148 -->|Depends on| n6
  n151 -->|Serves| n101
  n151 -->|Depends on| n154
  n152 -->|Serves| n101
  n152 -->|Implements| n150
  n152 -->|Implements| n153
  n154 -->|Serves| n101
  n155 -->|Serves| n101
  n155 -->|Applied by| n146
  n155 -->|Applied by| n154
  n155 -->|Applied by| n151
  n155 -->|Applied by| n150
  n155 -->|Applied by| n143
  n155 -->|Applied by| n153
  n155 -->|Applied by| n152
  n156 -->|Serves| n103
  n157 -->|Refines| n103
  n157 -->|Depends on| n4
  n158 -->|Accepts| n157
  n159 -->|Refines| n103
  n159 -->|Depends on| n4
  n160 -->|Accepts| n159
  n161 -->|Refines| n103
  n162 -->|Accepts| n161
  n163 -->|Refines| n103
  n163 -->|Depends on| n4
  n164 -->|Accepts| n163
  n165 -->|Refines| n103
  n165 -->|Depends on| n4
  n166 -->|Accepts| n165
  n167 -->|Verifies| n27
  n167 -->|In| n186
  n167 -->|Depends on| n27
  n167 -->|Depends on| n28
  n167 -->|Depends on| n179
  n167 -->|Depends on| n178
  n168 -->|Verifies| n88
  n168 -->|Verifies| n97
  n168 -->|Verifies| n78
  n168 -->|Verifies| n87
  n168 -->|In| n186
  n168 -->|Depends on| n90
  n168 -->|Depends on| n94
  n168 -->|Depends on| n93
  n168 -->|Depends on| n91
  n168 -->|Depends on| n92
  n168 -->|Depends on| n77
  n168 -->|Depends on| n96
  n168 -->|Depends on| n179
  n168 -->|Depends on| n4
  n168 -->|Depends on| n178
  n169 -->|Verifies| n11
  n169 -->|In| n186
  n169 -->|Depends on| n11
  n169 -->|Depends on| n179
  n169 -->|Depends on| n4
  n169 -->|Depends on| n178
  n170 -->|Chooses| n88
  n170 -->|Chooses| n97
  n170 -->|Chooses| n78
  n170 -->|Chooses| n87
  n170 -->|Chooses| n219
  n170 -->|Chooses| n215
  n170 -->|Chooses| n152
  n170 -->|Chooses| n137
  n170 -->|Chooses| n148
  n170 -->|Chooses| n233
  n170 -->|In| n186
  n170 -->|Follows| n76
  n170 -->|Serves| n101
  n171 -->|Verifies| n34
  n171 -->|In| n186
  n171 -->|Depends on| n36
  n171 -->|Depends on| n178
  n172 -->|Verifies| n35
  n172 -->|In| n184
  n172 -->|Depends on| n36
  n172 -->|Depends on| n178
  n173 -->|Chooses| n34
  n173 -->|In| n186
  n173 -->|Follows| n76
  n173 -->|Serves| n101
  n174 -->|Verifies| n17
  n174 -->|Verifies| n18
  n174 -->|Verifies| n137
  n174 -->|Verifies| n148
  n174 -->|Verifies| n182
  n174 -->|In| n186
  n174 -->|Depends on| n18
  n174 -->|Depends on| n17
  n174 -->|Depends on| n138
  n174 -->|Depends on| n149
  n174 -->|Depends on| n179
  n174 -->|Depends on| n15
  n174 -->|Depends on| n178
  n174 -->|Depends on| n4
  n174 -->|Depends on| n201
  n175 -->|Verifies| n19
  n175 -->|Verifies| n233
  n175 -->|Verifies| n181
  n175 -->|In| n186
  n175 -->|Depends on| n19
  n175 -->|Depends on| n218
  n175 -->|Depends on| n234
  n175 -->|Depends on| n179
  n175 -->|Depends on| n15
  n175 -->|Depends on| n178
  n175 -->|Depends on| n4
  n175 -->|Depends on| n5
  n175 -->|Depends on| n201
  n176 -->|Verifies| n18
  n176 -->|Verifies| n137
  n176 -->|Verifies| n148
  n176 -->|Verifies| n182
  n176 -->|In| n186
  n176 -->|Depends on| n18
  n176 -->|Depends on| n138
  n176 -->|Depends on| n149
  n176 -->|Depends on| n179
  n176 -->|Depends on| n15
  n176 -->|Depends on| n178
  n176 -->|Depends on| n4
  n176 -->|Depends on| n201
  n177 -->|Verifies| n152
  n177 -->|Verifies| n151
  n177 -->|In| n186
  n177 -->|Depends on| n150
  n177 -->|Depends on| n153
  n177 -->|Depends on| n151
  n177 -->|Depends on| n179
  n177 -->|Depends on| n178
  n177 -->|Depends on| n4
  n178 -->|Written in| n180
  n181 -->|Serves| n101
  n181 -->|Implements| n20
  n181 -->|Depends on| n179
  n182 -->|Serves| n101
  n182 -->|Implements| n21
  n182 -->|Depends on| n179
  n183 -->|Chooses| n182
  n183 -->|Chooses| n181
  n183 -->|In| n186
  n183 -->|Follows| n76
  n183 -->|Serves| n101
  n185 -->|Chooses| n35
  n185 -->|In| n184
  n185 -->|Follows| n76
  n185 -->|Serves| n101
  n187 -->|Verifies| n219
  n187 -->|Verifies| n215
  n187 -->|In| n186
  n187 -->|Depends on| n218
  n187 -->|Depends on| n220
  n187 -->|Depends on| n221
  n187 -->|Depends on| n216
  n187 -->|Depends on| n179
  n187 -->|Depends on| n178
  n188 -->|Applies the family| n52
  n188 -->|Serves| n104
  n189 -->|Applies the family| n58
  n189 -->|Serves| n104
  n190 -->|Applies the family| n47
  n190 -->|Serves| n104
  n191 -->|Applies the family| n66
  n191 -->|Serves| n104
  n192 -->|Ships| n199
  n192 -->|Follows the policy| n200
  n193 -->|Applies the family| n62
  n193 -->|Serves| n104
  n195 -->|Runs elsewhere| n192
  n195 -->|Its writer's settings| n194
  n196 -->|Applies the family| n64
  n196 -->|Serves| n104
  n197 -->|Applies the family| n60
  n197 -->|Serves| n104
  n198 -->|Ships| n195
  n200 -->|Its obligations| n191
  n200 -->|Its obligations| n196
  n200 -->|Its obligations| n190
  n200 -->|Its obligations| n197
  n200 -->|Its obligations| n193
  n200 -->|Its obligations| n188
  n200 -->|Its obligations| n189
  n201 -->|Serves| n99
  n202 -->|Serves| n99
  n203 -->|Serves| n99
  n204 -->|Serves| n99
  n205 -->|Serves| n99
  n206 -->|Serves| n99
  n207 -->|Serves| n99
  n208 -->|Serves| n99
  n209 -->|Serves| n99
  n210 -->|Serves| n99
  n211 -->|Serves| n99
  n212 -->|Serves| n99
  n213 -->|Serves| n99
  n214 -->|Serves| n99
  n215 -->|Implements| n221
  n215 -->|Implements| n216
  n215 -->|Depends on| n4
  n217 -->|Implements| n231
  n217 -->|Depends on| n201
  n219 -->|Implements| n218
  n219 -->|Implements| n220
  n219 -->|Depends on| n11
  n219 -->|Depends on| n6
  n223 -->|Implements| n218
  n223 -->|Depends on| n12
  n223 -->|Depends on| n204
  n224 -->|Implements| n231
  n224 -->|Depends on| n202
  n224 -->|Depends on| n201
  n224 -->|Depends on| n7
  n225 -->|Implements| n232
  n225 -->|Depends on| n203
  n225 -->|Depends on| n205
  n225 -->|Depends on| n201
  n225 -->|Depends on| n210
  n226 -->|Serves| n101
  n228 -->|Serves| n99
  n229 -->|Implements| n221
  n229 -->|Uses| n230
  n229 -->|Depends on| n222
  n229 -->|Depends on| n228
  n229 -->|Depends on| n4
  n229 -->|Depends on| n44
  n233 -->|Serves| n101
  n233 -->|Implements| n232
  n233 -->|Implements| n234
  n233 -->|Depends on| n201
  n233 -->|Depends on| n218
  n235 -->|Serves| n101
  n235 -->|Applied by| n231
  n235 -->|Applied by| n224
  n235 -->|Applied by| n217
  n235 -->|Applied by| n218
  n235 -->|Applied by| n220
  n235 -->|Applied by| n223
  n235 -->|Applied by| n219
  n235 -->|Applied by| n221
  n235 -->|Applied by| n229
  n235 -->|Applied by| n216
  n235 -->|Applied by| n215
  n235 -->|Applied by| n227
  n236 -->|Serves| n99
  n237 -->|Serves| n99
  n238 -->|Serves| n99
  n239 -->|Serves| n99
  n240 -->|Serves| n99
  n241 -->|Serves| n99
  n242 -->|Serves| n99
  n243 -->|Serves| n99
  n244 -->|Serves| n99
  n245 -->|Serves| n99
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
