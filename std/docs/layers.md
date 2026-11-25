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
    n127["Version 0.25.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.26.0<br/><small>Release</small>"]:::neutral
    n129["Version 0.27.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n133["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n134["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n135["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n136["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n137["The automatic merge<br/><small>Port</small>"]:::neutral
    n138["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n139["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n140["The branches<br/><small>Port</small>"]:::neutral
    n141["Branches kept in memory<br/><small>Function</small>"]:::held
    n142["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n143["Git's branches<br/><small>Implementation</small>"]:::neutral
    n144["Git's command line<br/><small>Standard</small>"]:::neutral
    n145["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n146["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n147["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n148["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n149["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n150["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n151["Pull requests<br/><small>Port</small>"]:::neutral
    n152["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n153["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n154["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n155["A repository compared with its settings<br/><small>Function</small>"]:::held
    n156["A repository kept in memory<br/><small>Function</small>"]:::held
    n157["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n158["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n159["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n160["Directions<br/><small>Vocabulary</small>"]:::neutral
    n161["As many links as asked<br/><small>Requirement</small>"]:::held
    n162["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n163["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n164["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n165["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n166["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n167["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n168["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n169["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n170["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n171["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n172["The device, in memory<br/><small>Scenario</small>"]:::held
    n173["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n174["In memory<br/><small>Technical choice</small>"]:::held
    n175["Judged as the language says<br/><small>Scenario</small>"]:::held
    n176["Judged strictly<br/><small>Scenario</small>"]:::held
    n177["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n178["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n179["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n180["A pull request opened<br/><small>Scenario</small>"]:::held
    n181["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n182["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n183["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n184["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n185["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n186["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n187["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n188["Strict<br/><small>Environment</small>"]:::neutral
    n189["Judged strictly<br/><small>Technical choice</small>"]:::held
    n190["Test<br/><small>Environment</small>"]:::neutral
    n191["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n192["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n193["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n194["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n195["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n196["The next version<br/><small>Shipment</small>"]:::held
    n197["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n198["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n199["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n200["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n201["Its rules held<br/><small>Obligation</small>"]:::neutral
    n202["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n203["The standard library<br/><small>Artefact</small>"]:::held
    n204["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n205["Exit status<br/><small>Standard</small>"]:::neutral
    n206["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n207["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n208["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n209["Node.js events<br/><small>Standard</small>"]:::neutral
    n210["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n211["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n212["npm's command line<br/><small>Standard</small>"]:::neutral
    n213["npm's manifest<br/><small>Standard</small>"]:::neutral
    n214["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n215["Positions in a file<br/><small>Standard</small>"]:::neutral
    n216["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n217["Text file<br/><small>Standard</small>"]:::neutral
    n218["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n219["A browser kept in memory<br/><small>Function</small>"]:::held
    n220["Browser script<br/><small>Port</small>"]:::neutral
    n221["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n222["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n223["Project files<br/><small>Port</small>"]:::neutral
    n224["Files kept in memory<br/><small>Function</small>"]:::held
    n225["Files written<br/><small>Port</small>"]:::neutral
    n226["Headless browser<br/><small>Port</small>"]:::neutral
    n227["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n228["The machine's files<br/><small>Implementation</small>"]:::neutral
    n229["What the machine must also have<br/><small>Port</small>"]:::neutral
    n230["Node's command line<br/><small>Implementation</small>"]:::neutral
    n231["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n232["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n233["Where a package comes from<br/><small>Port</small>"]:::neutral
    n234["Playwright's API<br/><small>Standard</small>"]:::neutral
    n235["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n236["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n237["Playwright<br/><small>Package</small>"]:::held
    n238["Commands of a program<br/><small>Port</small>"]:::neutral
    n239["Programs run<br/><small>Port</small>"]:::neutral
    n240["Programs run in memory<br/><small>Function</small>"]:::held
    n241["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n242["What repairs a project<br/><small>Port</small>"]:::neutral
    n243["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n244["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n245["CSSOM View<br/><small>Standard</small>"]:::neutral
    n246["HTTP<br/><small>Standard</small>"]:::neutral
    n247["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n248["Media types<br/><small>Standard</small>"]:::neutral
    n249["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n250["Server-sent events<br/><small>Standard</small>"]:::neutral
    n251["UI events<br/><small>Standard</small>"]:::neutral
    n252["URI<br/><small>Standard</small>"]:::neutral
    n253["Web Audio API<br/><small>Standard</small>"]:::neutral
    n254["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n14 -->|Written in| n221
  n15 -->|Depends on| n238
  n16 -->|Serves| n98
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n140
  n16 -->|Depends on| n151
  n16 -->|Depends on| n14
  n16 -->|Depends on| n205
  n16 -->|Depends on| n4
  n16 -->|Depends on| n214
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n98
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n140
  n17 -->|Depends on| n151
  n17 -->|Depends on| n14
  n17 -->|Depends on| n205
  n17 -->|Depends on| n4
  n17 -->|Depends on| n214
  n17 -->|Depends on| n6
  n18 -->|Serves| n98
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n223
  n18 -->|Depends on| n239
  n18 -->|Depends on| n14
  n18 -->|Depends on| n205
  n18 -->|Depends on| n5
  n18 -->|Depends on| n214
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
  n81 -->|Depends on| n251
  n82 -->|Implements| n90
  n83 -->|Implements| n94
  n83 -->|Depends on| n39
  n83 -->|Depends on| n254
  n84 -->|Implements| n91
  n84 -->|Depends on| n249
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
  n127 -->|Serves| n98
  n127 -->|Serves| n99
  n127 -->|Serves| n100
  n127 -->|Serves| n101
  n127 -->|Serves| n102
  n127 -->|Serves| n103
  n127 -->|Serves| n104
  n128 -->|Serves| n98
  n128 -->|Serves| n99
  n128 -->|Serves| n100
  n128 -->|Serves| n101
  n128 -->|Serves| n102
  n128 -->|Serves| n103
  n128 -->|Serves| n104
  n129 -->|Serves| n98
  n129 -->|Serves| n99
  n129 -->|Serves| n100
  n129 -->|Serves| n101
  n129 -->|Serves| n102
  n129 -->|Serves| n103
  n129 -->|Serves| n104
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
  n133 -->|Serves| n99
  n133 -->|Serves| n100
  n133 -->|Serves| n101
  n133 -->|Serves| n102
  n134 -->|Serves| n99
  n134 -->|Serves| n100
  n134 -->|Serves| n101
  n134 -->|Serves| n102
  n135 -->|Serves| n99
  n135 -->|Serves| n100
  n135 -->|Serves| n101
  n135 -->|Serves| n102
  n135 -->|Serves| n103
  n136 -->|Serves| n99
  n136 -->|Serves| n100
  n136 -->|Serves| n101
  n136 -->|Serves| n102
  n136 -->|Serves| n103
  n138 -->|Implements| n137
  n138 -->|Depends on| n145
  n138 -->|Depends on| n149
  n138 -->|Depends on| n150
  n138 -->|Depends on| n207
  n138 -->|Depends on| n209
  n138 -->|Depends on| n205
  n139 -->|Implements| n137
  n139 -->|Depends on| n145
  n139 -->|Depends on| n149
  n139 -->|Depends on| n148
  n139 -->|Depends on| n207
  n139 -->|Depends on| n209
  n139 -->|Depends on| n205
  n139 -->|Depends on| n6
  n141 -->|Serves| n101
  n141 -->|Implements| n140
  n141 -->|Implements| n142
  n143 -->|Implements| n140
  n143 -->|Depends on| n144
  n143 -->|Depends on| n207
  n143 -->|Depends on| n209
  n143 -->|Depends on| n205
  n143 -->|Depends on| n6
  n143 -->|Depends on| n217
  n144 -->|Serves| n99
  n145 -->|Serves| n99
  n146 -->|Implements| n151
  n146 -->|Depends on| n149
  n146 -->|Depends on| n148
  n146 -->|Depends on| n207
  n146 -->|Depends on| n209
  n146 -->|Depends on| n205
  n146 -->|Depends on| n6
  n146 -->|Depends on| n7
  n146 -->|Depends on| n137
  n147 -->|Implements| n154
  n147 -->|Depends on| n149
  n147 -->|Depends on| n207
  n147 -->|Depends on| n209
  n147 -->|Depends on| n205
  n147 -->|Depends on| n150
  n147 -->|Depends on| n6
  n147 -->|Depends on| n7
  n148 -->|Serves| n99
  n149 -->|Serves| n99
  n150 -->|Serves| n99
  n152 -->|Serves| n101
  n152 -->|Implements| n151
  n152 -->|Implements| n153
  n152 -->|Depends on| n149
  n152 -->|Depends on| n148
  n152 -->|Depends on| n6
  n155 -->|Serves| n101
  n155 -->|Depends on| n158
  n156 -->|Serves| n101
  n156 -->|Implements| n154
  n156 -->|Implements| n157
  n158 -->|Serves| n101
  n159 -->|Serves| n101
  n159 -->|Applied by| n150
  n159 -->|Applied by| n158
  n159 -->|Applied by| n155
  n159 -->|Applied by| n154
  n159 -->|Applied by| n147
  n159 -->|Applied by| n157
  n159 -->|Applied by| n156
  n160 -->|Serves| n103
  n161 -->|Refines| n103
  n161 -->|Depends on| n4
  n162 -->|Accepts| n161
  n163 -->|Refines| n103
  n163 -->|Depends on| n4
  n164 -->|Accepts| n163
  n165 -->|Refines| n103
  n166 -->|Accepts| n165
  n167 -->|Refines| n103
  n167 -->|Depends on| n4
  n168 -->|Accepts| n167
  n169 -->|Refines| n103
  n169 -->|Depends on| n4
  n170 -->|Accepts| n169
  n171 -->|Verifies| n26
  n171 -->|In| n190
  n171 -->|Depends on| n26
  n171 -->|Depends on| n27
  n171 -->|Depends on| n183
  n171 -->|Depends on| n182
  n172 -->|Verifies| n88
  n172 -->|Verifies| n97
  n172 -->|Verifies| n78
  n172 -->|Verifies| n87
  n172 -->|In| n190
  n172 -->|Depends on| n90
  n172 -->|Depends on| n94
  n172 -->|Depends on| n93
  n172 -->|Depends on| n91
  n172 -->|Depends on| n92
  n172 -->|Depends on| n77
  n172 -->|Depends on| n96
  n172 -->|Depends on| n183
  n172 -->|Depends on| n4
  n172 -->|Depends on| n182
  n173 -->|Verifies| n11
  n173 -->|In| n190
  n173 -->|Depends on| n11
  n173 -->|Depends on| n183
  n173 -->|Depends on| n4
  n173 -->|Depends on| n182
  n174 -->|Chooses| n88
  n174 -->|Chooses| n97
  n174 -->|Chooses| n78
  n174 -->|Chooses| n87
  n174 -->|Chooses| n224
  n174 -->|Chooses| n219
  n174 -->|Chooses| n156
  n174 -->|Chooses| n141
  n174 -->|Chooses| n152
  n174 -->|Chooses| n240
  n174 -->|In| n190
  n174 -->|Follows| n76
  n174 -->|Serves| n101
  n175 -->|Verifies| n33
  n175 -->|In| n190
  n175 -->|Depends on| n35
  n175 -->|Depends on| n182
  n176 -->|Verifies| n34
  n176 -->|In| n188
  n176 -->|Depends on| n35
  n176 -->|Depends on| n182
  n177 -->|Chooses| n33
  n177 -->|In| n190
  n177 -->|Follows| n76
  n177 -->|Serves| n101
  n178 -->|Verifies| n16
  n178 -->|Verifies| n17
  n178 -->|Verifies| n141
  n178 -->|Verifies| n152
  n178 -->|Verifies| n186
  n178 -->|In| n190
  n178 -->|Depends on| n17
  n178 -->|Depends on| n16
  n178 -->|Depends on| n142
  n178 -->|Depends on| n153
  n178 -->|Depends on| n183
  n178 -->|Depends on| n14
  n178 -->|Depends on| n182
  n178 -->|Depends on| n4
  n178 -->|Depends on| n205
  n179 -->|Verifies| n18
  n179 -->|Verifies| n240
  n179 -->|Verifies| n185
  n179 -->|In| n190
  n179 -->|Depends on| n18
  n179 -->|Depends on| n223
  n179 -->|Depends on| n241
  n179 -->|Depends on| n183
  n179 -->|Depends on| n14
  n179 -->|Depends on| n182
  n179 -->|Depends on| n4
  n179 -->|Depends on| n5
  n179 -->|Depends on| n205
  n180 -->|Verifies| n17
  n180 -->|Verifies| n141
  n180 -->|Verifies| n152
  n180 -->|Verifies| n186
  n180 -->|In| n190
  n180 -->|Depends on| n17
  n180 -->|Depends on| n142
  n180 -->|Depends on| n153
  n180 -->|Depends on| n183
  n180 -->|Depends on| n14
  n180 -->|Depends on| n182
  n180 -->|Depends on| n4
  n180 -->|Depends on| n205
  n181 -->|Verifies| n156
  n181 -->|Verifies| n155
  n181 -->|In| n190
  n181 -->|Depends on| n154
  n181 -->|Depends on| n157
  n181 -->|Depends on| n155
  n181 -->|Depends on| n183
  n181 -->|Depends on| n182
  n181 -->|Depends on| n4
  n182 -->|Written in| n184
  n185 -->|Serves| n101
  n185 -->|Implements| n19
  n185 -->|Depends on| n183
  n186 -->|Serves| n101
  n186 -->|Implements| n20
  n186 -->|Depends on| n183
  n187 -->|Chooses| n186
  n187 -->|Chooses| n185
  n187 -->|In| n190
  n187 -->|Follows| n76
  n187 -->|Serves| n101
  n189 -->|Chooses| n34
  n189 -->|In| n188
  n189 -->|Follows| n76
  n189 -->|Serves| n101
  n191 -->|Verifies| n224
  n191 -->|Verifies| n219
  n191 -->|In| n190
  n191 -->|Depends on| n223
  n191 -->|Depends on| n225
  n191 -->|Depends on| n226
  n191 -->|Depends on| n220
  n191 -->|Depends on| n183
  n191 -->|Depends on| n182
  n192 -->|Applies the family| n51
  n192 -->|Serves| n104
  n193 -->|Applies the family| n57
  n193 -->|Serves| n104
  n194 -->|Applies the family| n46
  n194 -->|Serves| n104
  n195 -->|Applies the family| n65
  n195 -->|Serves| n104
  n196 -->|Ships| n203
  n196 -->|Follows the policy| n204
  n197 -->|Applies the family| n61
  n197 -->|Serves| n104
  n199 -->|Runs elsewhere| n196
  n199 -->|Its writer's settings| n198
  n200 -->|Applies the family| n63
  n200 -->|Serves| n104
  n201 -->|Applies the family| n59
  n201 -->|Serves| n104
  n202 -->|Ships| n199
  n204 -->|Its obligations| n195
  n204 -->|Its obligations| n200
  n204 -->|Its obligations| n194
  n204 -->|Its obligations| n201
  n204 -->|Its obligations| n197
  n204 -->|Its obligations| n192
  n204 -->|Its obligations| n193
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
  n216 -->|Serves| n99
  n217 -->|Serves| n99
  n218 -->|Serves| n99
  n219 -->|Implements| n226
  n219 -->|Implements| n220
  n219 -->|Depends on| n4
  n222 -->|Implements| n238
  n222 -->|Depends on| n205
  n224 -->|Implements| n223
  n224 -->|Implements| n225
  n224 -->|Depends on| n11
  n224 -->|Depends on| n6
  n228 -->|Implements| n223
  n228 -->|Depends on| n12
  n228 -->|Depends on| n208
  n230 -->|Implements| n238
  n230 -->|Depends on| n206
  n230 -->|Depends on| n205
  n230 -->|Depends on| n7
  n231 -->|Implements| n239
  n231 -->|Depends on| n207
  n231 -->|Depends on| n209
  n231 -->|Depends on| n205
  n231 -->|Depends on| n214
  n232 -->|Serves| n101
  n234 -->|Serves| n99
  n235 -->|Implements| n226
  n235 -->|Uses| n237
  n235 -->|Depends on| n227
  n235 -->|Depends on| n234
  n235 -->|Depends on| n4
  n235 -->|Depends on| n43
  n236 -->|Implements| n229
  n236 -->|Uses| n237
  n236 -->|Depends on| n244
  n240 -->|Serves| n101
  n240 -->|Implements| n239
  n240 -->|Implements| n241
  n240 -->|Depends on| n205
  n240 -->|Depends on| n223
  n243 -->|Serves| n101
  n243 -->|Applied by| n238
  n243 -->|Applied by| n230
  n243 -->|Applied by| n222
  n243 -->|Applied by| n229
  n243 -->|Applied by| n236
  n243 -->|Applied by| n242
  n243 -->|Applied by| n223
  n243 -->|Applied by| n225
  n243 -->|Applied by| n228
  n243 -->|Applied by| n224
  n243 -->|Applied by| n226
  n243 -->|Applied by| n235
  n243 -->|Applied by| n220
  n243 -->|Applied by| n219
  n243 -->|Applied by| n233
  n244 -->|Written in| n221
  n245 -->|Serves| n99
  n246 -->|Serves| n99
  n247 -->|Serves| n99
  n248 -->|Serves| n99
  n249 -->|Serves| n99
  n250 -->|Serves| n99
  n251 -->|Serves| n99
  n252 -->|Serves| n99
  n253 -->|Serves| n99
  n254 -->|Serves| n99
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
