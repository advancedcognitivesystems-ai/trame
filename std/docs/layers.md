# Layers

*The graph in force on 25 November 2026, ordered by distance to the goals.*

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
    n13["A library offers commands, a project chooses them<br/><small>Architecture decision</small>"]:::held
    n14["What the library's commands say<br/><small>Message catalog</small>"]:::neutral
    n15["The library's commands<br/><small>Component</small>"]:::neutral
    n16["Merge a pull request<br/><small>Entry point</small>"]:::held
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
    n74["Plugin<br/><small>Design pattern</small>"]:::neutral
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
    n126["Version 0.24.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n129["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n133["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n134["The automatic merge<br/><small>Port</small>"]:::neutral
    n135["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n136["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n137["The branches<br/><small>Port</small>"]:::neutral
    n138["Branches kept in memory<br/><small>Function</small>"]:::held
    n139["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n140["Git's branches<br/><small>Implementation</small>"]:::neutral
    n141["Git's command line<br/><small>Standard</small>"]:::neutral
    n142["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n143["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n144["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n145["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n146["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n147["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n148["Pull requests<br/><small>Port</small>"]:::neutral
    n149["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n150["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n151["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n152["A repository compared with its settings<br/><small>Function</small>"]:::held
    n153["A repository kept in memory<br/><small>Function</small>"]:::held
    n154["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n155["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n156["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n157["Directions<br/><small>Vocabulary</small>"]:::neutral
    n158["As many links as asked<br/><small>Requirement</small>"]:::held
    n159["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n160["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n161["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n162["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n163["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n164["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n165["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n166["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n167["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n168["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n169["The device, in memory<br/><small>Scenario</small>"]:::held
    n170["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n171["In memory<br/><small>Technical choice</small>"]:::held
    n172["Judged as the language says<br/><small>Scenario</small>"]:::held
    n173["Judged strictly<br/><small>Scenario</small>"]:::held
    n174["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n175["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n176["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n177["A pull request opened<br/><small>Scenario</small>"]:::held
    n178["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n179["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n180["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n181["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n182["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n183["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n184["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n185["Strict<br/><small>Environment</small>"]:::neutral
    n186["Judged strictly<br/><small>Technical choice</small>"]:::held
    n187["Test<br/><small>Environment</small>"]:::neutral
    n188["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n189["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n190["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n191["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n192["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n193["The next version<br/><small>Shipment</small>"]:::unknown
    n194["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n195["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n196["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n197["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n198["Its rules held<br/><small>Obligation</small>"]:::neutral
    n199["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n200["The standard library<br/><small>Artefact</small>"]:::unknown
    n201["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n202["Exit status<br/><small>Standard</small>"]:::neutral
    n203["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n204["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n205["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n206["Node.js events<br/><small>Standard</small>"]:::neutral
    n207["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n208["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n209["npm's command line<br/><small>Standard</small>"]:::neutral
    n210["npm's manifest<br/><small>Standard</small>"]:::neutral
    n211["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n212["Positions in a file<br/><small>Standard</small>"]:::neutral
    n213["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n214["Text file<br/><small>Standard</small>"]:::neutral
    n215["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n216["A browser kept in memory<br/><small>Function</small>"]:::held
    n217["Browser script<br/><small>Port</small>"]:::neutral
    n218["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n219["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n220["Project files<br/><small>Port</small>"]:::neutral
    n221["Files kept in memory<br/><small>Function</small>"]:::held
    n222["Files written<br/><small>Port</small>"]:::neutral
    n223["Headless browser<br/><small>Port</small>"]:::neutral
    n224["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n225["The machine's files<br/><small>Implementation</small>"]:::neutral
    n226["What the machine must also have<br/><small>Port</small>"]:::neutral
    n227["Node's command line<br/><small>Implementation</small>"]:::neutral
    n228["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n229["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n230["Where a package comes from<br/><small>Port</small>"]:::neutral
    n231["Playwright's API<br/><small>Standard</small>"]:::neutral
    n232["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n233["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n234["Playwright<br/><small>Package</small>"]:::held
    n235["Commands of a program<br/><small>Port</small>"]:::neutral
    n236["Programs run<br/><small>Port</small>"]:::neutral
    n237["Programs run in memory<br/><small>Function</small>"]:::held
    n238["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n239["What repairs a project<br/><small>Port</small>"]:::neutral
    n240["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n241["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n242["CSSOM View<br/><small>Standard</small>"]:::neutral
    n243["HTTP<br/><small>Standard</small>"]:::neutral
    n244["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n245["Media types<br/><small>Standard</small>"]:::neutral
    n246["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n247["Server-sent events<br/><small>Standard</small>"]:::neutral
    n248["UI events<br/><small>Standard</small>"]:::neutral
    n249["URI<br/><small>Standard</small>"]:::neutral
    n250["Web Audio API<br/><small>Standard</small>"]:::neutral
    n251["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n103
  n1 -->|Serves| n103
  n1 -->|Applied by| n51
  n2 -->|Serves| n103
  n3 -->|Serves| n103
  n4 -->|Serves| n102
  n5 -->|Serves| n102
  n5 -->|Depends on| n21
  n5 -->|Depends on| n4
  n6 -->|Serves| n102
  n6 -->|Depends on| n5
  n7 -->|Serves| n102
  n7 -->|Depends on| n23
  n8 -->|Serves| n99
  n9 -->|Serves| n99
  n10 -->|Serves| n99
  n11 -->|Serves| n102
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n21
  n11 -->|Depends on| n4
  n12 -->|Serves| n99
  n13 -->|Serves| n98
  n13 -->|Applied by| n15
  n13 -->|Applied by| n17
  n13 -->|Applied by| n16
  n13 -->|Applied by| n18
  n13 -->|Applied by| n73
  n14 -->|Written in| n218
  n15 -->|Depends on| n235
  n16 -->|Serves| n98
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n137
  n16 -->|Depends on| n148
  n16 -->|Depends on| n14
  n16 -->|Depends on| n202
  n16 -->|Depends on| n4
  n16 -->|Depends on| n211
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n98
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n137
  n17 -->|Depends on| n148
  n17 -->|Depends on| n14
  n17 -->|Depends on| n202
  n17 -->|Depends on| n4
  n17 -->|Depends on| n211
  n17 -->|Depends on| n6
  n18 -->|Serves| n98
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n220
  n18 -->|Depends on| n236
  n18 -->|Depends on| n14
  n18 -->|Depends on| n202
  n18 -->|Depends on| n5
  n18 -->|Depends on| n211
  n18 -->|Depends on| n6
  n21 -->|Serves| n99
  n22 -->|Serves| n99
  n23 -->|Serves| n99
  n24 -->|Serves| n99
  n25 -->|Serves| n99
  n26 -->|Serves| n101
  n26 -->|Depends on| n27
  n27 -->|Serves| n101
  n29 -->|Serves| n99
  n30 -->|Serves| n99
  n31 -->|Serves| n99
  n32 -->|Serves| n99
  n33 -->|Serves| n101
  n33 -->|Implements| n35
  n33 -->|Depends on| n37
  n34 -->|Serves| n101
  n34 -->|Implements| n35
  n34 -->|Depends on| n37
  n36 -->|Serves| n101
  n36 -->|Applied by| n37
  n36 -->|Applied by| n35
  n36 -->|Applied by| n33
  n36 -->|Applied by| n34
  n37 -->|Serves| n102
  n38 -->|Serves| n99
  n39 -->|Serves| n99
  n40 -->|Written with| n45
  n40 -->|Serves| n99
  n41 -->|Serves| n99
  n43 -->|Written with| n45
  n43 -->|Serves| n99
  n44 -->|Serves| n99
  n45 -->|Written in| n42
  n46 -->|Refines| n103
  n47 -->|Accepts| n46
  n48 -->|Refines| n103
  n48 -->|Depends on| n4
  n49 -->|Accepts| n48
  n50 -->|Serves| n103
  n51 -->|Refines| n103
  n52 -->|Accepts| n51
  n53 -->|Refines| n103
  n54 -->|Accepts| n53
  n55 -->|Refines| n103
  n56 -->|Accepts| n55
  n57 -->|Refines| n103
  n57 -->|Depends on| n4
  n58 -->|Accepts| n57
  n59 -->|Refines| n103
  n60 -->|Accepts| n59
  n61 -->|Refines| n103
  n62 -->|Accepts| n61
  n63 -->|Refines| n103
  n64 -->|Accepts| n63
  n65 -->|Refines| n103
  n65 -->|Depends on| n4
  n66 -->|Accepts| n65
  n67 -->|Serves| n104
  n68 -->|Serves| n101
  n69 -->|Serves| n104
  n70 -->|Serves| n100
  n71 -->|Serves| n100
  n72 -->|Serves| n100
  n73 -->|Serves| n100
  n74 -->|Serves| n100
  n75 -->|Serves| n100
  n76 -->|Serves| n100
  n78 -->|Implements| n91
  n78 -->|Implements| n92
  n79 -->|Implements| n77
  n79 -->|Depends on| n43
  n80 -->|Implements| n86
  n81 -->|Implements| n89
  n81 -->|Depends on| n248
  n82 -->|Implements| n90
  n83 -->|Implements| n94
  n83 -->|Depends on| n39
  n83 -->|Depends on| n251
  n84 -->|Implements| n91
  n84 -->|Depends on| n246
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
  n126 -->|Serves| n98
  n126 -->|Serves| n99
  n126 -->|Serves| n100
  n126 -->|Serves| n101
  n126 -->|Serves| n102
  n126 -->|Serves| n103
  n126 -->|Serves| n104
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
  n132 -->|Serves| n99
  n132 -->|Serves| n100
  n132 -->|Serves| n101
  n132 -->|Serves| n102
  n132 -->|Serves| n103
  n133 -->|Serves| n99
  n133 -->|Serves| n100
  n133 -->|Serves| n101
  n133 -->|Serves| n102
  n133 -->|Serves| n103
  n135 -->|Implements| n134
  n135 -->|Depends on| n142
  n135 -->|Depends on| n146
  n135 -->|Depends on| n147
  n135 -->|Depends on| n204
  n135 -->|Depends on| n206
  n135 -->|Depends on| n202
  n136 -->|Implements| n134
  n136 -->|Depends on| n142
  n136 -->|Depends on| n146
  n136 -->|Depends on| n145
  n136 -->|Depends on| n204
  n136 -->|Depends on| n206
  n136 -->|Depends on| n202
  n136 -->|Depends on| n6
  n138 -->|Serves| n101
  n138 -->|Implements| n137
  n138 -->|Implements| n139
  n140 -->|Implements| n137
  n140 -->|Depends on| n141
  n140 -->|Depends on| n204
  n140 -->|Depends on| n206
  n140 -->|Depends on| n202
  n140 -->|Depends on| n6
  n140 -->|Depends on| n214
  n141 -->|Serves| n99
  n142 -->|Serves| n99
  n143 -->|Implements| n148
  n143 -->|Depends on| n146
  n143 -->|Depends on| n145
  n143 -->|Depends on| n204
  n143 -->|Depends on| n206
  n143 -->|Depends on| n202
  n143 -->|Depends on| n6
  n143 -->|Depends on| n7
  n143 -->|Depends on| n134
  n144 -->|Implements| n151
  n144 -->|Depends on| n146
  n144 -->|Depends on| n204
  n144 -->|Depends on| n206
  n144 -->|Depends on| n202
  n144 -->|Depends on| n147
  n144 -->|Depends on| n6
  n144 -->|Depends on| n7
  n145 -->|Serves| n99
  n146 -->|Serves| n99
  n147 -->|Serves| n99
  n149 -->|Serves| n101
  n149 -->|Implements| n148
  n149 -->|Implements| n150
  n149 -->|Depends on| n146
  n149 -->|Depends on| n145
  n149 -->|Depends on| n6
  n152 -->|Serves| n101
  n152 -->|Depends on| n155
  n153 -->|Serves| n101
  n153 -->|Implements| n151
  n153 -->|Implements| n154
  n155 -->|Serves| n101
  n156 -->|Serves| n101
  n156 -->|Applied by| n147
  n156 -->|Applied by| n155
  n156 -->|Applied by| n152
  n156 -->|Applied by| n151
  n156 -->|Applied by| n144
  n156 -->|Applied by| n154
  n156 -->|Applied by| n153
  n157 -->|Serves| n103
  n158 -->|Refines| n103
  n158 -->|Depends on| n4
  n159 -->|Accepts| n158
  n160 -->|Refines| n103
  n160 -->|Depends on| n4
  n161 -->|Accepts| n160
  n162 -->|Refines| n103
  n163 -->|Accepts| n162
  n164 -->|Refines| n103
  n164 -->|Depends on| n4
  n165 -->|Accepts| n164
  n166 -->|Refines| n103
  n166 -->|Depends on| n4
  n167 -->|Accepts| n166
  n168 -->|Verifies| n26
  n168 -->|In| n187
  n168 -->|Depends on| n26
  n168 -->|Depends on| n27
  n168 -->|Depends on| n180
  n168 -->|Depends on| n179
  n169 -->|Verifies| n88
  n169 -->|Verifies| n97
  n169 -->|Verifies| n78
  n169 -->|Verifies| n87
  n169 -->|In| n187
  n169 -->|Depends on| n90
  n169 -->|Depends on| n94
  n169 -->|Depends on| n93
  n169 -->|Depends on| n91
  n169 -->|Depends on| n92
  n169 -->|Depends on| n77
  n169 -->|Depends on| n96
  n169 -->|Depends on| n180
  n169 -->|Depends on| n4
  n169 -->|Depends on| n179
  n170 -->|Verifies| n11
  n170 -->|In| n187
  n170 -->|Depends on| n11
  n170 -->|Depends on| n180
  n170 -->|Depends on| n4
  n170 -->|Depends on| n179
  n171 -->|Chooses| n88
  n171 -->|Chooses| n97
  n171 -->|Chooses| n78
  n171 -->|Chooses| n87
  n171 -->|Chooses| n221
  n171 -->|Chooses| n216
  n171 -->|Chooses| n153
  n171 -->|Chooses| n138
  n171 -->|Chooses| n149
  n171 -->|Chooses| n237
  n171 -->|In| n187
  n171 -->|Follows| n76
  n171 -->|Serves| n101
  n172 -->|Verifies| n33
  n172 -->|In| n187
  n172 -->|Depends on| n35
  n172 -->|Depends on| n179
  n173 -->|Verifies| n34
  n173 -->|In| n185
  n173 -->|Depends on| n35
  n173 -->|Depends on| n179
  n174 -->|Chooses| n33
  n174 -->|In| n187
  n174 -->|Follows| n76
  n174 -->|Serves| n101
  n175 -->|Verifies| n16
  n175 -->|Verifies| n17
  n175 -->|Verifies| n138
  n175 -->|Verifies| n149
  n175 -->|Verifies| n183
  n175 -->|In| n187
  n175 -->|Depends on| n17
  n175 -->|Depends on| n16
  n175 -->|Depends on| n139
  n175 -->|Depends on| n150
  n175 -->|Depends on| n180
  n175 -->|Depends on| n14
  n175 -->|Depends on| n179
  n175 -->|Depends on| n4
  n175 -->|Depends on| n202
  n176 -->|Verifies| n18
  n176 -->|Verifies| n237
  n176 -->|Verifies| n182
  n176 -->|In| n187
  n176 -->|Depends on| n18
  n176 -->|Depends on| n220
  n176 -->|Depends on| n238
  n176 -->|Depends on| n180
  n176 -->|Depends on| n14
  n176 -->|Depends on| n179
  n176 -->|Depends on| n4
  n176 -->|Depends on| n5
  n176 -->|Depends on| n202
  n177 -->|Verifies| n17
  n177 -->|Verifies| n138
  n177 -->|Verifies| n149
  n177 -->|Verifies| n183
  n177 -->|In| n187
  n177 -->|Depends on| n17
  n177 -->|Depends on| n139
  n177 -->|Depends on| n150
  n177 -->|Depends on| n180
  n177 -->|Depends on| n14
  n177 -->|Depends on| n179
  n177 -->|Depends on| n4
  n177 -->|Depends on| n202
  n178 -->|Verifies| n153
  n178 -->|Verifies| n152
  n178 -->|In| n187
  n178 -->|Depends on| n151
  n178 -->|Depends on| n154
  n178 -->|Depends on| n152
  n178 -->|Depends on| n180
  n178 -->|Depends on| n179
  n178 -->|Depends on| n4
  n179 -->|Written in| n181
  n182 -->|Serves| n101
  n182 -->|Implements| n19
  n182 -->|Depends on| n180
  n183 -->|Serves| n101
  n183 -->|Implements| n20
  n183 -->|Depends on| n180
  n184 -->|Chooses| n183
  n184 -->|Chooses| n182
  n184 -->|In| n187
  n184 -->|Follows| n76
  n184 -->|Serves| n101
  n186 -->|Chooses| n34
  n186 -->|In| n185
  n186 -->|Follows| n76
  n186 -->|Serves| n101
  n188 -->|Verifies| n221
  n188 -->|Verifies| n216
  n188 -->|In| n187
  n188 -->|Depends on| n220
  n188 -->|Depends on| n222
  n188 -->|Depends on| n223
  n188 -->|Depends on| n217
  n188 -->|Depends on| n180
  n188 -->|Depends on| n179
  n189 -->|Applies the family| n51
  n189 -->|Serves| n104
  n190 -->|Applies the family| n57
  n190 -->|Serves| n104
  n191 -->|Applies the family| n46
  n191 -->|Serves| n104
  n192 -->|Applies the family| n65
  n192 -->|Serves| n104
  n193 -->|Ships| n200
  n193 -->|Follows the policy| n201
  n194 -->|Applies the family| n61
  n194 -->|Serves| n104
  n196 -->|Runs elsewhere| n193
  n196 -->|Its writer's settings| n195
  n197 -->|Applies the family| n63
  n197 -->|Serves| n104
  n198 -->|Applies the family| n59
  n198 -->|Serves| n104
  n199 -->|Ships| n196
  n201 -->|Its obligations| n192
  n201 -->|Its obligations| n197
  n201 -->|Its obligations| n191
  n201 -->|Its obligations| n198
  n201 -->|Its obligations| n194
  n201 -->|Its obligations| n189
  n201 -->|Its obligations| n190
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
  n215 -->|Serves| n99
  n216 -->|Implements| n223
  n216 -->|Implements| n217
  n216 -->|Depends on| n4
  n219 -->|Implements| n235
  n219 -->|Depends on| n202
  n221 -->|Implements| n220
  n221 -->|Implements| n222
  n221 -->|Depends on| n11
  n221 -->|Depends on| n6
  n225 -->|Implements| n220
  n225 -->|Depends on| n12
  n225 -->|Depends on| n205
  n227 -->|Implements| n235
  n227 -->|Depends on| n203
  n227 -->|Depends on| n202
  n227 -->|Depends on| n7
  n228 -->|Implements| n236
  n228 -->|Depends on| n204
  n228 -->|Depends on| n206
  n228 -->|Depends on| n202
  n228 -->|Depends on| n211
  n229 -->|Serves| n101
  n231 -->|Serves| n99
  n232 -->|Implements| n223
  n232 -->|Uses| n234
  n232 -->|Depends on| n224
  n232 -->|Depends on| n231
  n232 -->|Depends on| n4
  n232 -->|Depends on| n43
  n233 -->|Implements| n226
  n233 -->|Uses| n234
  n233 -->|Depends on| n241
  n237 -->|Serves| n101
  n237 -->|Implements| n236
  n237 -->|Implements| n238
  n237 -->|Depends on| n202
  n237 -->|Depends on| n220
  n240 -->|Serves| n101
  n240 -->|Applied by| n235
  n240 -->|Applied by| n227
  n240 -->|Applied by| n219
  n240 -->|Applied by| n226
  n240 -->|Applied by| n233
  n240 -->|Applied by| n239
  n240 -->|Applied by| n220
  n240 -->|Applied by| n222
  n240 -->|Applied by| n225
  n240 -->|Applied by| n221
  n240 -->|Applied by| n223
  n240 -->|Applied by| n232
  n240 -->|Applied by| n217
  n240 -->|Applied by| n216
  n240 -->|Applied by| n230
  n241 -->|Written in| n218
  n242 -->|Serves| n99
  n243 -->|Serves| n99
  n244 -->|Serves| n99
  n245 -->|Serves| n99
  n246 -->|Serves| n99
  n247 -->|Serves| n99
  n248 -->|Serves| n99
  n249 -->|Serves| n99
  n250 -->|Serves| n99
  n251 -->|Serves| n99
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
