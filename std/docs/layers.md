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
    n125["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n129["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n132["The automatic merge<br/><small>Port</small>"]:::neutral
    n133["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n134["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n135["The branches<br/><small>Port</small>"]:::neutral
    n136["Branches kept in memory<br/><small>Function</small>"]:::held
    n137["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n138["Git's branches<br/><small>Implementation</small>"]:::neutral
    n139["Git's command line<br/><small>Standard</small>"]:::neutral
    n140["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n141["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n142["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n143["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n144["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n145["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n146["Pull requests<br/><small>Port</small>"]:::neutral
    n147["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n148["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n149["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n150["A repository compared with its settings<br/><small>Function</small>"]:::held
    n151["A repository kept in memory<br/><small>Function</small>"]:::held
    n152["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n153["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n154["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n155["Directions<br/><small>Vocabulary</small>"]:::neutral
    n156["As many links as asked<br/><small>Requirement</small>"]:::held
    n157["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n158["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n159["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n160["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n161["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n162["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n163["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n164["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n165["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n166["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n167["The device, in memory<br/><small>Scenario</small>"]:::held
    n168["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n169["In memory<br/><small>Technical choice</small>"]:::held
    n170["Judged as the language says<br/><small>Scenario</small>"]:::held
    n171["Judged strictly<br/><small>Scenario</small>"]:::held
    n172["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n173["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n174["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n175["A pull request opened<br/><small>Scenario</small>"]:::held
    n176["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n177["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n178["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n179["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n180["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n181["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n182["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n183["Strict<br/><small>Environment</small>"]:::neutral
    n184["Judged strictly<br/><small>Technical choice</small>"]:::held
    n185["Test<br/><small>Environment</small>"]:::neutral
    n186["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n187["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n188["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n189["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n190["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n191["The next version<br/><small>Shipment</small>"]:::unknown
    n192["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n193["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n194["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n195["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n196["Its rules held<br/><small>Obligation</small>"]:::neutral
    n197["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n198["The standard library<br/><small>Artefact</small>"]:::unknown
    n199["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n200["Exit status<br/><small>Standard</small>"]:::neutral
    n201["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n202["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n203["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n204["Node.js events<br/><small>Standard</small>"]:::neutral
    n205["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n206["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n207["npm's command line<br/><small>Standard</small>"]:::neutral
    n208["npm's manifest<br/><small>Standard</small>"]:::neutral
    n209["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n210["Positions in a file<br/><small>Standard</small>"]:::neutral
    n211["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n212["Text file<br/><small>Standard</small>"]:::neutral
    n213["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n214["A browser kept in memory<br/><small>Function</small>"]:::held
    n215["Browser script<br/><small>Port</small>"]:::neutral
    n216["Project files<br/><small>Port</small>"]:::neutral
    n217["Files kept in memory<br/><small>Function</small>"]:::held
    n218["Files written<br/><small>Port</small>"]:::neutral
    n219["Headless browser<br/><small>Port</small>"]:::neutral
    n220["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n221["The machine's files<br/><small>Implementation</small>"]:::neutral
    n222["Node's command line<br/><small>Implementation</small>"]:::neutral
    n223["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n224["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n225["Where a package comes from<br/><small>Port</small>"]:::neutral
    n226["Playwright's API<br/><small>Standard</small>"]:::neutral
    n227["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n228["Playwright<br/><small>Package</small>"]:::held
    n229["Commands of a program<br/><small>Port</small>"]:::neutral
    n230["Programs run<br/><small>Port</small>"]:::neutral
    n231["Programs run in memory<br/><small>Function</small>"]:::held
    n232["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n233["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph web["Standard library · Web"]
    n234["CSSOM View<br/><small>Standard</small>"]:::neutral
    n235["HTTP<br/><small>Standard</small>"]:::neutral
    n236["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n237["Media types<br/><small>Standard</small>"]:::neutral
    n238["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n239["Server-sent events<br/><small>Standard</small>"]:::neutral
    n240["UI events<br/><small>Standard</small>"]:::neutral
    n241["URI<br/><small>Standard</small>"]:::neutral
    n242["Web Audio API<br/><small>Standard</small>"]:::neutral
    n243["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n16 -->|Depends on| n229
  n17 -->|Serves| n98
  n17 -->|Part of| n16
  n17 -->|For| n2
  n17 -->|Depends on| n21
  n17 -->|Depends on| n135
  n17 -->|Depends on| n146
  n17 -->|Depends on| n15
  n17 -->|Depends on| n200
  n17 -->|Depends on| n4
  n17 -->|Depends on| n209
  n17 -->|Depends on| n6
  n17 -->|Depends on| n7
  n18 -->|Serves| n98
  n18 -->|Part of| n16
  n18 -->|For| n2
  n18 -->|Depends on| n21
  n18 -->|Depends on| n135
  n18 -->|Depends on| n146
  n18 -->|Depends on| n15
  n18 -->|Depends on| n200
  n18 -->|Depends on| n4
  n18 -->|Depends on| n209
  n18 -->|Depends on| n6
  n19 -->|Serves| n98
  n19 -->|Part of| n16
  n19 -->|For| n2
  n19 -->|Depends on| n20
  n19 -->|Depends on| n216
  n19 -->|Depends on| n230
  n19 -->|Depends on| n15
  n19 -->|Depends on| n200
  n19 -->|Depends on| n5
  n19 -->|Depends on| n209
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
  n81 -->|Depends on| n240
  n82 -->|Implements| n90
  n83 -->|Implements| n94
  n83 -->|Depends on| n40
  n83 -->|Depends on| n243
  n84 -->|Implements| n91
  n84 -->|Depends on| n238
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
  n125 -->|Serves| n99
  n125 -->|Serves| n100
  n125 -->|Serves| n101
  n125 -->|Serves| n102
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
  n130 -->|Serves| n103
  n131 -->|Serves| n99
  n131 -->|Serves| n100
  n131 -->|Serves| n101
  n131 -->|Serves| n102
  n131 -->|Serves| n103
  n133 -->|Implements| n132
  n133 -->|Depends on| n140
  n133 -->|Depends on| n144
  n133 -->|Depends on| n145
  n133 -->|Depends on| n202
  n133 -->|Depends on| n204
  n133 -->|Depends on| n200
  n134 -->|Implements| n132
  n134 -->|Depends on| n140
  n134 -->|Depends on| n144
  n134 -->|Depends on| n143
  n134 -->|Depends on| n202
  n134 -->|Depends on| n204
  n134 -->|Depends on| n200
  n134 -->|Depends on| n6
  n136 -->|Serves| n101
  n136 -->|Implements| n135
  n136 -->|Implements| n137
  n138 -->|Implements| n135
  n138 -->|Depends on| n139
  n138 -->|Depends on| n202
  n138 -->|Depends on| n204
  n138 -->|Depends on| n200
  n138 -->|Depends on| n6
  n138 -->|Depends on| n212
  n139 -->|Serves| n99
  n140 -->|Serves| n99
  n141 -->|Implements| n146
  n141 -->|Depends on| n144
  n141 -->|Depends on| n143
  n141 -->|Depends on| n202
  n141 -->|Depends on| n204
  n141 -->|Depends on| n200
  n141 -->|Depends on| n6
  n141 -->|Depends on| n7
  n141 -->|Depends on| n132
  n142 -->|Implements| n149
  n142 -->|Depends on| n144
  n142 -->|Depends on| n202
  n142 -->|Depends on| n204
  n142 -->|Depends on| n200
  n142 -->|Depends on| n145
  n142 -->|Depends on| n6
  n142 -->|Depends on| n7
  n143 -->|Serves| n99
  n144 -->|Serves| n99
  n145 -->|Serves| n99
  n147 -->|Serves| n101
  n147 -->|Implements| n146
  n147 -->|Implements| n148
  n147 -->|Depends on| n144
  n147 -->|Depends on| n143
  n147 -->|Depends on| n6
  n150 -->|Serves| n101
  n150 -->|Depends on| n153
  n151 -->|Serves| n101
  n151 -->|Implements| n149
  n151 -->|Implements| n152
  n153 -->|Serves| n101
  n154 -->|Serves| n101
  n154 -->|Applied by| n145
  n154 -->|Applied by| n153
  n154 -->|Applied by| n150
  n154 -->|Applied by| n149
  n154 -->|Applied by| n142
  n154 -->|Applied by| n152
  n154 -->|Applied by| n151
  n155 -->|Serves| n103
  n156 -->|Refines| n103
  n156 -->|Depends on| n4
  n157 -->|Accepts| n156
  n158 -->|Refines| n103
  n158 -->|Depends on| n4
  n159 -->|Accepts| n158
  n160 -->|Refines| n103
  n161 -->|Accepts| n160
  n162 -->|Refines| n103
  n162 -->|Depends on| n4
  n163 -->|Accepts| n162
  n164 -->|Refines| n103
  n164 -->|Depends on| n4
  n165 -->|Accepts| n164
  n166 -->|Verifies| n27
  n166 -->|In| n185
  n166 -->|Depends on| n27
  n166 -->|Depends on| n28
  n166 -->|Depends on| n178
  n166 -->|Depends on| n177
  n167 -->|Verifies| n88
  n167 -->|Verifies| n97
  n167 -->|Verifies| n78
  n167 -->|Verifies| n87
  n167 -->|In| n185
  n167 -->|Depends on| n90
  n167 -->|Depends on| n94
  n167 -->|Depends on| n93
  n167 -->|Depends on| n91
  n167 -->|Depends on| n92
  n167 -->|Depends on| n77
  n167 -->|Depends on| n96
  n167 -->|Depends on| n178
  n167 -->|Depends on| n4
  n167 -->|Depends on| n177
  n168 -->|Verifies| n11
  n168 -->|In| n185
  n168 -->|Depends on| n11
  n168 -->|Depends on| n178
  n168 -->|Depends on| n4
  n168 -->|Depends on| n177
  n169 -->|Chooses| n88
  n169 -->|Chooses| n97
  n169 -->|Chooses| n78
  n169 -->|Chooses| n87
  n169 -->|Chooses| n217
  n169 -->|Chooses| n214
  n169 -->|Chooses| n151
  n169 -->|Chooses| n136
  n169 -->|Chooses| n147
  n169 -->|Chooses| n231
  n169 -->|In| n185
  n169 -->|Follows| n76
  n169 -->|Serves| n101
  n170 -->|Verifies| n34
  n170 -->|In| n185
  n170 -->|Depends on| n36
  n170 -->|Depends on| n177
  n171 -->|Verifies| n35
  n171 -->|In| n183
  n171 -->|Depends on| n36
  n171 -->|Depends on| n177
  n172 -->|Chooses| n34
  n172 -->|In| n185
  n172 -->|Follows| n76
  n172 -->|Serves| n101
  n173 -->|Verifies| n17
  n173 -->|Verifies| n18
  n173 -->|Verifies| n136
  n173 -->|Verifies| n147
  n173 -->|Verifies| n181
  n173 -->|In| n185
  n173 -->|Depends on| n18
  n173 -->|Depends on| n17
  n173 -->|Depends on| n137
  n173 -->|Depends on| n148
  n173 -->|Depends on| n178
  n173 -->|Depends on| n15
  n173 -->|Depends on| n177
  n173 -->|Depends on| n4
  n173 -->|Depends on| n200
  n174 -->|Verifies| n19
  n174 -->|Verifies| n231
  n174 -->|Verifies| n180
  n174 -->|In| n185
  n174 -->|Depends on| n19
  n174 -->|Depends on| n216
  n174 -->|Depends on| n232
  n174 -->|Depends on| n178
  n174 -->|Depends on| n15
  n174 -->|Depends on| n177
  n174 -->|Depends on| n4
  n174 -->|Depends on| n5
  n174 -->|Depends on| n200
  n175 -->|Verifies| n18
  n175 -->|Verifies| n136
  n175 -->|Verifies| n147
  n175 -->|Verifies| n181
  n175 -->|In| n185
  n175 -->|Depends on| n18
  n175 -->|Depends on| n137
  n175 -->|Depends on| n148
  n175 -->|Depends on| n178
  n175 -->|Depends on| n15
  n175 -->|Depends on| n177
  n175 -->|Depends on| n4
  n175 -->|Depends on| n200
  n176 -->|Verifies| n151
  n176 -->|Verifies| n150
  n176 -->|In| n185
  n176 -->|Depends on| n149
  n176 -->|Depends on| n152
  n176 -->|Depends on| n150
  n176 -->|Depends on| n178
  n176 -->|Depends on| n177
  n176 -->|Depends on| n4
  n177 -->|Written in| n179
  n180 -->|Serves| n101
  n180 -->|Implements| n20
  n180 -->|Depends on| n178
  n181 -->|Serves| n101
  n181 -->|Implements| n21
  n181 -->|Depends on| n178
  n182 -->|Chooses| n181
  n182 -->|Chooses| n180
  n182 -->|In| n185
  n182 -->|Follows| n76
  n182 -->|Serves| n101
  n184 -->|Chooses| n35
  n184 -->|In| n183
  n184 -->|Follows| n76
  n184 -->|Serves| n101
  n186 -->|Verifies| n217
  n186 -->|Verifies| n214
  n186 -->|In| n185
  n186 -->|Depends on| n216
  n186 -->|Depends on| n218
  n186 -->|Depends on| n219
  n186 -->|Depends on| n215
  n186 -->|Depends on| n178
  n186 -->|Depends on| n177
  n187 -->|Applies the family| n52
  n187 -->|Serves| n104
  n188 -->|Applies the family| n58
  n188 -->|Serves| n104
  n189 -->|Applies the family| n47
  n189 -->|Serves| n104
  n190 -->|Applies the family| n66
  n190 -->|Serves| n104
  n191 -->|Ships| n198
  n191 -->|Follows the policy| n199
  n192 -->|Applies the family| n62
  n192 -->|Serves| n104
  n194 -->|Runs elsewhere| n191
  n194 -->|Its writer's settings| n193
  n195 -->|Applies the family| n64
  n195 -->|Serves| n104
  n196 -->|Applies the family| n60
  n196 -->|Serves| n104
  n197 -->|Ships| n194
  n199 -->|Its obligations| n190
  n199 -->|Its obligations| n195
  n199 -->|Its obligations| n189
  n199 -->|Its obligations| n196
  n199 -->|Its obligations| n192
  n199 -->|Its obligations| n187
  n199 -->|Its obligations| n188
  n200 -->|Serves| n99
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
  n214 -->|Implements| n219
  n214 -->|Implements| n215
  n214 -->|Depends on| n4
  n217 -->|Implements| n216
  n217 -->|Implements| n218
  n217 -->|Depends on| n11
  n217 -->|Depends on| n6
  n221 -->|Implements| n216
  n221 -->|Depends on| n12
  n221 -->|Depends on| n203
  n222 -->|Implements| n229
  n222 -->|Depends on| n201
  n222 -->|Depends on| n200
  n222 -->|Depends on| n7
  n223 -->|Implements| n230
  n223 -->|Depends on| n202
  n223 -->|Depends on| n204
  n223 -->|Depends on| n200
  n223 -->|Depends on| n209
  n224 -->|Serves| n101
  n226 -->|Serves| n99
  n227 -->|Implements| n219
  n227 -->|Uses| n228
  n227 -->|Depends on| n220
  n227 -->|Depends on| n226
  n227 -->|Depends on| n4
  n227 -->|Depends on| n44
  n231 -->|Serves| n101
  n231 -->|Implements| n230
  n231 -->|Implements| n232
  n231 -->|Depends on| n200
  n231 -->|Depends on| n216
  n233 -->|Serves| n101
  n233 -->|Applied by| n229
  n233 -->|Applied by| n222
  n233 -->|Applied by| n216
  n233 -->|Applied by| n218
  n233 -->|Applied by| n221
  n233 -->|Applied by| n217
  n233 -->|Applied by| n219
  n233 -->|Applied by| n227
  n233 -->|Applied by| n215
  n233 -->|Applied by| n214
  n233 -->|Applied by| n225
  n234 -->|Serves| n99
  n235 -->|Serves| n99
  n236 -->|Serves| n99
  n237 -->|Serves| n99
  n238 -->|Serves| n99
  n239 -->|Serves| n99
  n240 -->|Serves| n99
  n241 -->|Serves| n99
  n242 -->|Serves| n99
  n243 -->|Serves| n99
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
