# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

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
  subgraph engine["Standard library · The engine"]
    n29["The engine is a provider<br/><small>Architecture decision</small>"]:::held
    n30["What the engine's adapters say<br/><small>Message catalog</small>"]:::neutral
    n31["Reading a language<br/><small>Port</small>"]:::neutral
    n32["A project compiled by the engine that plays the scenario<br/><small>Implementation</small>"]:::neutral
    n33["The project the engine prepared<br/><small>Implementation</small>"]:::neutral
    n34["The project of a scenario<br/><small>Port</small>"]:::neutral
    n35["Read by the engine<br/><small>Implementation</small>"]:::held
    n36["The project at hand<br/><small>Port</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n37["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n38["CSS<br/><small>Standard</small>"]:::neutral
    n39["HTML<br/><small>Standard</small>"]:::neutral
    n40["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph judgment["Standard library · Judgment"]
    n41["As the language says<br/><small>Function</small>"]:::held
    n42["Every warning an error<br/><small>Function</small>"]:::held
    n43["Hardening<br/><small>Port</small>"]:::neutral
    n44["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n45["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph languages["Standard library · Languages"]
    n46["CSS style sheets<br/><small>Language</small>"]:::held
    n47["HTML markup<br/><small>Language</small>"]:::held
    n48["tree-sitter queries<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n49["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n50["Language tags<br/><small>Standard</small>"]:::neutral
    n51["Ratio<br/><small>Quantity</small>"]:::neutral
    n52["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n53["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n54["Time<br/><small>Quantity</small>"]:::neutral
    n55["Units of measure<br/><small>Standard</small>"]:::neutral
    n56["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n57["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n58["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n59["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n60["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n61["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n62["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n63["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n64["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n65["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n66["What people decided is published<br/><small>Requirement</small>"]:::held
    n67["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n68["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n69["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n70["The project's rules hold<br/><small>Requirement</small>"]:::held
    n71["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n72["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n73["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n74["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n75["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n76["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n77["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n78["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n79["Trame<br/><small>Package</small>"]:::neutral
    n80["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n81["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n82["Adapter<br/><small>Design pattern</small>"]:::held
    n83["Bridge<br/><small>Design pattern</small>"]:::neutral
    n84["Command<br/><small>Design pattern</small>"]:::neutral
    n85["Plugin<br/><small>Design pattern</small>"]:::neutral
    n86["Repository<br/><small>Design pattern</small>"]:::neutral
    n87["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n88["Animation frames<br/><small>Port</small>"]:::neutral
    n89["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n90["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n91["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n92["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n93["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n94["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n95["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n96["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n97["Languages of the device<br/><small>Port</small>"]:::neutral
    n98["Frames turned by hand<br/><small>Function</small>"]:::held
    n99["Preferences kept in memory<br/><small>Function</small>"]:::held
    n100["Loading of a page<br/><small>Port</small>"]:::neutral
    n101["Preferences<br/><small>Port</small>"]:::neutral
    n102["Screen kept awake<br/><small>Port</small>"]:::neutral
    n103["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n104["What was said<br/><small>Port</small>"]:::neutral
    n105["Speech<br/><small>Port</small>"]:::neutral
    n106["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n107["Time turned by hand<br/><small>Port</small>"]:::neutral
    n108["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n109["Commands chosen, not written again<br/><small>Goal</small>"]:::neutral
    n110["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n111["Known designs, named<br/><small>Goal</small>"]:::neutral
    n112["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n113["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n114["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n115["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n116["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n117["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n118["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n119["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n120["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n121["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n122["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n123["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n124["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n125["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n128["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n129["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.22.0<br/><small>Release</small>"]:::neutral
    n133["Version 0.22.1<br/><small>Release</small>"]:::neutral
    n134["Version 0.22.2<br/><small>Release</small>"]:::neutral
    n135["Version 0.22.3<br/><small>Release</small>"]:::neutral
    n136["Version 0.23.0<br/><small>Release</small>"]:::neutral
    n137["Version 0.24.0<br/><small>Release</small>"]:::neutral
    n138["Version 0.25.0<br/><small>Release</small>"]:::neutral
    n139["Version 0.26.0<br/><small>Release</small>"]:::neutral
    n140["Version 0.27.0<br/><small>Release</small>"]:::neutral
    n141["Version 0.28.0<br/><small>Release</small>"]:::neutral
    n142["Version 0.29.0<br/><small>Release</small>"]:::neutral
    n143["Version 0.29.1<br/><small>Release</small>"]:::neutral
    n144["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n145["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n146["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n147["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n148["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n149["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n150["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n151["The automatic merge<br/><small>Port</small>"]:::neutral
    n152["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n153["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n154["The branches<br/><small>Port</small>"]:::neutral
    n155["Branches kept in memory<br/><small>Function</small>"]:::held
    n156["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n157["Git's branches<br/><small>Implementation</small>"]:::neutral
    n158["Git's command line<br/><small>Standard</small>"]:::neutral
    n159["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n160["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n161["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n162["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n163["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n164["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n165["Pull requests<br/><small>Port</small>"]:::neutral
    n166["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n167["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n168["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n169["A repository compared with its settings<br/><small>Function</small>"]:::held
    n170["A repository kept in memory<br/><small>Function</small>"]:::held
    n171["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n172["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n173["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n174["Directions<br/><small>Vocabulary</small>"]:::neutral
    n175["As many links as asked<br/><small>Requirement</small>"]:::held
    n176["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n177["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n178["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n179["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n180["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n181["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n182["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n183["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n184["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n185["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n186["The device, in memory<br/><small>Scenario</small>"]:::held
    n187["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n188["How the library's scenarios run<br/><small>Architecture decision</small>"]:::held
    n189["In memory<br/><small>Technical choice</small>"]:::held
    n190["Judged as the language says<br/><small>Scenario</small>"]:::held
    n191["Judged strictly<br/><small>Scenario</small>"]:::held
    n192["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n193["The languages read by the engine<br/><small>Scenario</small>"]:::held
    n194["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n195["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n196["A pull request opened<br/><small>Scenario</small>"]:::held
    n197["Read by the engine that builds<br/><small>Technical choice</small>"]:::held
    n198["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n199["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n200["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n201["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n202["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n203["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n204["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n205["Strict<br/><small>Environment</small>"]:::neutral
    n206["Judged strictly<br/><small>Technical choice</small>"]:::held
    n207["Test<br/><small>Environment</small>"]:::neutral
    n208["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n209["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n210["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n211["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n212["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n213["The next version<br/><small>Shipment</small>"]:::unknown
    n214["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n215["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n216["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n217["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n218["Its rules held<br/><small>Obligation</small>"]:::neutral
    n219["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n220["The standard library<br/><small>Artefact</small>"]:::unknown
    n221["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n222["Exit status<br/><small>Standard</small>"]:::neutral
    n223["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n224["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n225["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n226["Node.js events<br/><small>Standard</small>"]:::neutral
    n227["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n228["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n229["npm's command line<br/><small>Standard</small>"]:::neutral
    n230["npm's manifest<br/><small>Standard</small>"]:::neutral
    n231["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n232["Positions in a file<br/><small>Standard</small>"]:::neutral
    n233["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n234["Text file<br/><small>Standard</small>"]:::neutral
    n235["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n236["A browser kept in memory<br/><small>Function</small>"]:::held
    n237["Browser script<br/><small>Port</small>"]:::neutral
    n238["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n239["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n240["Project files<br/><small>Port</small>"]:::neutral
    n241["Files kept in memory<br/><small>Function</small>"]:::held
    n242["Files written<br/><small>Port</small>"]:::neutral
    n243["Headless browser<br/><small>Port</small>"]:::neutral
    n244["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n245["The machine's files<br/><small>Implementation</small>"]:::neutral
    n246["What the machine must also have<br/><small>Port</small>"]:::neutral
    n247["Node's command line<br/><small>Implementation</small>"]:::neutral
    n248["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n249["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n250["Where a package comes from<br/><small>Port</small>"]:::neutral
    n251["Playwright's API<br/><small>Standard</small>"]:::neutral
    n252["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n253["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n254["Playwright<br/><small>Package</small>"]:::held
    n255["Commands of a program<br/><small>Port</small>"]:::neutral
    n256["Programs run<br/><small>Port</small>"]:::neutral
    n257["Programs run in memory<br/><small>Function</small>"]:::held
    n258["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n259["What repairs a project<br/><small>Port</small>"]:::neutral
    n260["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n261["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n262["CSSOM View<br/><small>Standard</small>"]:::neutral
    n263["HTTP<br/><small>Standard</small>"]:::neutral
    n264["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n265["Media types<br/><small>Standard</small>"]:::neutral
    n266["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n267["Server-sent events<br/><small>Standard</small>"]:::neutral
    n268["UI events<br/><small>Standard</small>"]:::neutral
    n269["URI<br/><small>Standard</small>"]:::neutral
    n270["Web Audio API<br/><small>Standard</small>"]:::neutral
    n271["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n114
  n1 -->|Serves| n114
  n1 -->|Applied by| n62
  n2 -->|Serves| n114
  n3 -->|Serves| n114
  n4 -->|Serves| n113
  n5 -->|Serves| n113
  n5 -->|Depends on| n21
  n5 -->|Depends on| n4
  n6 -->|Serves| n113
  n6 -->|Depends on| n5
  n7 -->|Serves| n113
  n7 -->|Depends on| n23
  n8 -->|Serves| n110
  n9 -->|Serves| n110
  n10 -->|Serves| n110
  n11 -->|Serves| n113
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n21
  n11 -->|Depends on| n4
  n12 -->|Serves| n110
  n13 -->|Serves| n109
  n13 -->|Applied by| n15
  n13 -->|Applied by| n17
  n13 -->|Applied by| n16
  n13 -->|Applied by| n18
  n13 -->|Applied by| n84
  n14 -->|Written in| n238
  n15 -->|Depends on| n255
  n16 -->|Serves| n109
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n154
  n16 -->|Depends on| n165
  n16 -->|Depends on| n14
  n16 -->|Depends on| n222
  n16 -->|Depends on| n4
  n16 -->|Depends on| n231
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n109
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n154
  n17 -->|Depends on| n165
  n17 -->|Depends on| n14
  n17 -->|Depends on| n222
  n17 -->|Depends on| n4
  n17 -->|Depends on| n231
  n17 -->|Depends on| n6
  n18 -->|Serves| n109
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n240
  n18 -->|Depends on| n256
  n18 -->|Depends on| n14
  n18 -->|Depends on| n222
  n18 -->|Depends on| n5
  n18 -->|Depends on| n231
  n18 -->|Depends on| n6
  n21 -->|Serves| n110
  n22 -->|Serves| n110
  n23 -->|Serves| n110
  n24 -->|Serves| n110
  n25 -->|Serves| n110
  n26 -->|Serves| n112
  n26 -->|Depends on| n27
  n27 -->|Serves| n112
  n29 -->|Serves| n112
  n29 -->|Applied by| n36
  n29 -->|Applied by| n34
  n29 -->|Applied by| n33
  n29 -->|Applied by| n32
  n29 -->|Applied by| n31
  n29 -->|Applied by| n35
  n30 -->|Written in| n238
  n32 -->|Implements| n36
  n32 -->|Depends on| n34
  n32 -->|Depends on| n30
  n33 -->|Implements| n36
  n33 -->|Depends on| n30
  n35 -->|Implements| n31
  n35 -->|Depends on| n30
  n37 -->|Serves| n110
  n38 -->|Serves| n110
  n39 -->|Serves| n110
  n40 -->|Serves| n110
  n41 -->|Serves| n112
  n41 -->|Implements| n43
  n41 -->|Depends on| n45
  n42 -->|Serves| n112
  n42 -->|Implements| n43
  n42 -->|Depends on| n45
  n44 -->|Serves| n112
  n44 -->|Applied by| n45
  n44 -->|Applied by| n43
  n44 -->|Applied by| n41
  n44 -->|Applied by| n42
  n45 -->|Serves| n113
  n46 -->|Defined by| n38
  n46 -->|Queries written in| n48
  n46 -->|Read by| n31
  n47 -->|Defined by| n39
  n47 -->|Queries written in| n48
  n47 -->|Read by| n31
  n49 -->|Serves| n110
  n50 -->|Serves| n110
  n51 -->|Written with| n56
  n51 -->|Serves| n110
  n52 -->|Serves| n110
  n54 -->|Written with| n56
  n54 -->|Serves| n110
  n55 -->|Serves| n110
  n56 -->|Written in| n53
  n57 -->|Refines| n114
  n58 -->|Accepts| n57
  n59 -->|Refines| n114
  n59 -->|Depends on| n4
  n60 -->|Accepts| n59
  n61 -->|Serves| n114
  n62 -->|Refines| n114
  n63 -->|Accepts| n62
  n64 -->|Refines| n114
  n65 -->|Accepts| n64
  n66 -->|Refines| n114
  n67 -->|Accepts| n66
  n68 -->|Refines| n114
  n68 -->|Depends on| n4
  n69 -->|Accepts| n68
  n70 -->|Refines| n114
  n71 -->|Accepts| n70
  n72 -->|Refines| n114
  n73 -->|Accepts| n72
  n74 -->|Refines| n114
  n75 -->|Accepts| n74
  n76 -->|Refines| n114
  n76 -->|Depends on| n4
  n77 -->|Accepts| n76
  n78 -->|Serves| n115
  n79 -->|Serves| n112
  n80 -->|Serves| n115
  n81 -->|Serves| n111
  n82 -->|Serves| n111
  n83 -->|Serves| n111
  n84 -->|Serves| n111
  n85 -->|Serves| n111
  n86 -->|Serves| n111
  n87 -->|Serves| n111
  n89 -->|Implements| n102
  n89 -->|Implements| n103
  n90 -->|Implements| n88
  n90 -->|Depends on| n54
  n91 -->|Implements| n97
  n92 -->|Implements| n100
  n92 -->|Depends on| n268
  n93 -->|Implements| n101
  n94 -->|Implements| n105
  n94 -->|Depends on| n50
  n94 -->|Depends on| n271
  n95 -->|Implements| n102
  n95 -->|Depends on| n266
  n96 -->|Serves| n112
  n96 -->|Applied by| n101
  n96 -->|Applied by| n93
  n96 -->|Applied by| n99
  n96 -->|Applied by| n97
  n96 -->|Applied by| n91
  n96 -->|Applied by| n105
  n96 -->|Applied by| n94
  n96 -->|Applied by| n108
  n96 -->|Applied by| n104
  n96 -->|Applied by| n102
  n96 -->|Applied by| n95
  n96 -->|Applied by| n89
  n96 -->|Applied by| n103
  n96 -->|Applied by| n88
  n96 -->|Applied by| n90
  n96 -->|Applied by| n98
  n96 -->|Applied by| n107
  n98 -->|Implements| n88
  n98 -->|Implements| n107
  n98 -->|Depends on| n4
  n99 -->|Implements| n101
  n106 -->|Serves| n112
  n106 -->|Applied by| n100
  n106 -->|Applied by| n92
  n108 -->|Implements| n105
  n108 -->|Implements| n104
  n116 -->|Serves| n110
  n116 -->|Serves| n111
  n116 -->|Serves| n112
  n116 -->|Serves| n113
  n117 -->|Serves| n110
  n117 -->|Serves| n111
  n117 -->|Serves| n112
  n117 -->|Serves| n113
  n117 -->|Serves| n114
  n118 -->|Serves| n110
  n118 -->|Serves| n111
  n118 -->|Serves| n112
  n118 -->|Serves| n113
  n118 -->|Serves| n114
  n119 -->|Serves| n110
  n119 -->|Serves| n111
  n119 -->|Serves| n112
  n119 -->|Serves| n113
  n119 -->|Serves| n114
  n120 -->|Serves| n110
  n120 -->|Serves| n111
  n120 -->|Serves| n112
  n120 -->|Serves| n113
  n120 -->|Serves| n114
  n121 -->|Serves| n110
  n121 -->|Serves| n111
  n121 -->|Serves| n112
  n121 -->|Serves| n113
  n121 -->|Serves| n114
  n122 -->|Serves| n110
  n122 -->|Serves| n111
  n122 -->|Serves| n112
  n122 -->|Serves| n113
  n122 -->|Serves| n114
  n123 -->|Serves| n110
  n123 -->|Serves| n111
  n123 -->|Serves| n112
  n123 -->|Serves| n113
  n123 -->|Serves| n114
  n124 -->|Serves| n110
  n124 -->|Serves| n111
  n124 -->|Serves| n112
  n124 -->|Serves| n113
  n124 -->|Serves| n114
  n124 -->|Serves| n115
  n125 -->|Serves| n110
  n125 -->|Serves| n111
  n125 -->|Serves| n112
  n125 -->|Serves| n113
  n125 -->|Serves| n114
  n125 -->|Serves| n115
  n126 -->|Serves| n110
  n126 -->|Serves| n111
  n126 -->|Serves| n112
  n126 -->|Serves| n113
  n126 -->|Serves| n114
  n126 -->|Serves| n115
  n127 -->|Serves| n110
  n127 -->|Serves| n111
  n127 -->|Serves| n112
  n127 -->|Serves| n113
  n127 -->|Serves| n114
  n127 -->|Serves| n115
  n128 -->|Serves| n110
  n128 -->|Serves| n111
  n128 -->|Serves| n112
  n128 -->|Serves| n113
  n128 -->|Serves| n114
  n128 -->|Serves| n115
  n129 -->|Serves| n110
  n129 -->|Serves| n111
  n129 -->|Serves| n112
  n129 -->|Serves| n113
  n130 -->|Serves| n110
  n130 -->|Serves| n111
  n130 -->|Serves| n112
  n130 -->|Serves| n113
  n130 -->|Serves| n114
  n130 -->|Serves| n115
  n131 -->|Serves| n110
  n131 -->|Serves| n111
  n131 -->|Serves| n112
  n131 -->|Serves| n113
  n131 -->|Serves| n114
  n131 -->|Serves| n115
  n132 -->|Serves| n109
  n132 -->|Serves| n110
  n132 -->|Serves| n111
  n132 -->|Serves| n112
  n132 -->|Serves| n113
  n132 -->|Serves| n114
  n132 -->|Serves| n115
  n133 -->|Serves| n109
  n133 -->|Serves| n110
  n133 -->|Serves| n111
  n133 -->|Serves| n112
  n133 -->|Serves| n113
  n133 -->|Serves| n114
  n133 -->|Serves| n115
  n134 -->|Serves| n109
  n134 -->|Serves| n110
  n134 -->|Serves| n111
  n134 -->|Serves| n112
  n134 -->|Serves| n113
  n134 -->|Serves| n114
  n134 -->|Serves| n115
  n135 -->|Serves| n109
  n135 -->|Serves| n110
  n135 -->|Serves| n111
  n135 -->|Serves| n112
  n135 -->|Serves| n113
  n135 -->|Serves| n114
  n135 -->|Serves| n115
  n136 -->|Serves| n109
  n136 -->|Serves| n110
  n136 -->|Serves| n111
  n136 -->|Serves| n112
  n136 -->|Serves| n113
  n136 -->|Serves| n114
  n136 -->|Serves| n115
  n137 -->|Serves| n109
  n137 -->|Serves| n110
  n137 -->|Serves| n111
  n137 -->|Serves| n112
  n137 -->|Serves| n113
  n137 -->|Serves| n114
  n137 -->|Serves| n115
  n138 -->|Serves| n109
  n138 -->|Serves| n110
  n138 -->|Serves| n111
  n138 -->|Serves| n112
  n138 -->|Serves| n113
  n138 -->|Serves| n114
  n138 -->|Serves| n115
  n139 -->|Serves| n109
  n139 -->|Serves| n110
  n139 -->|Serves| n111
  n139 -->|Serves| n112
  n139 -->|Serves| n113
  n139 -->|Serves| n114
  n139 -->|Serves| n115
  n140 -->|Serves| n109
  n140 -->|Serves| n110
  n140 -->|Serves| n111
  n140 -->|Serves| n112
  n140 -->|Serves| n113
  n140 -->|Serves| n114
  n140 -->|Serves| n115
  n141 -->|Serves| n109
  n141 -->|Serves| n110
  n141 -->|Serves| n111
  n141 -->|Serves| n112
  n141 -->|Serves| n113
  n141 -->|Serves| n114
  n141 -->|Serves| n115
  n142 -->|Serves| n109
  n142 -->|Serves| n110
  n142 -->|Serves| n111
  n142 -->|Serves| n112
  n142 -->|Serves| n113
  n142 -->|Serves| n114
  n142 -->|Serves| n115
  n143 -->|Serves| n109
  n143 -->|Serves| n110
  n143 -->|Serves| n111
  n143 -->|Serves| n112
  n143 -->|Serves| n113
  n143 -->|Serves| n114
  n143 -->|Serves| n115
  n144 -->|Serves| n110
  n144 -->|Serves| n111
  n144 -->|Serves| n112
  n144 -->|Serves| n113
  n145 -->|Serves| n110
  n145 -->|Serves| n111
  n145 -->|Serves| n112
  n145 -->|Serves| n113
  n146 -->|Serves| n110
  n146 -->|Serves| n111
  n146 -->|Serves| n112
  n146 -->|Serves| n113
  n147 -->|Serves| n110
  n147 -->|Serves| n111
  n147 -->|Serves| n112
  n147 -->|Serves| n113
  n148 -->|Serves| n110
  n148 -->|Serves| n111
  n148 -->|Serves| n112
  n148 -->|Serves| n113
  n149 -->|Serves| n110
  n149 -->|Serves| n111
  n149 -->|Serves| n112
  n149 -->|Serves| n113
  n149 -->|Serves| n114
  n150 -->|Serves| n110
  n150 -->|Serves| n111
  n150 -->|Serves| n112
  n150 -->|Serves| n113
  n150 -->|Serves| n114
  n152 -->|Implements| n151
  n152 -->|Depends on| n159
  n152 -->|Depends on| n163
  n152 -->|Depends on| n164
  n152 -->|Depends on| n224
  n152 -->|Depends on| n226
  n152 -->|Depends on| n222
  n153 -->|Implements| n151
  n153 -->|Depends on| n159
  n153 -->|Depends on| n163
  n153 -->|Depends on| n162
  n153 -->|Depends on| n224
  n153 -->|Depends on| n226
  n153 -->|Depends on| n222
  n153 -->|Depends on| n6
  n155 -->|Serves| n112
  n155 -->|Implements| n154
  n155 -->|Implements| n156
  n157 -->|Implements| n154
  n157 -->|Depends on| n158
  n157 -->|Depends on| n224
  n157 -->|Depends on| n226
  n157 -->|Depends on| n222
  n157 -->|Depends on| n6
  n157 -->|Depends on| n234
  n158 -->|Serves| n110
  n159 -->|Serves| n110
  n160 -->|Implements| n165
  n160 -->|Depends on| n163
  n160 -->|Depends on| n162
  n160 -->|Depends on| n224
  n160 -->|Depends on| n226
  n160 -->|Depends on| n222
  n160 -->|Depends on| n6
  n160 -->|Depends on| n7
  n160 -->|Depends on| n151
  n161 -->|Implements| n168
  n161 -->|Depends on| n163
  n161 -->|Depends on| n224
  n161 -->|Depends on| n226
  n161 -->|Depends on| n222
  n161 -->|Depends on| n164
  n161 -->|Depends on| n6
  n161 -->|Depends on| n7
  n162 -->|Serves| n110
  n163 -->|Serves| n110
  n164 -->|Serves| n110
  n166 -->|Serves| n112
  n166 -->|Implements| n165
  n166 -->|Implements| n167
  n166 -->|Depends on| n163
  n166 -->|Depends on| n162
  n166 -->|Depends on| n6
  n169 -->|Serves| n112
  n169 -->|Depends on| n172
  n170 -->|Serves| n112
  n170 -->|Implements| n168
  n170 -->|Implements| n171
  n172 -->|Serves| n112
  n173 -->|Serves| n112
  n173 -->|Applied by| n164
  n173 -->|Applied by| n172
  n173 -->|Applied by| n169
  n173 -->|Applied by| n168
  n173 -->|Applied by| n161
  n173 -->|Applied by| n171
  n173 -->|Applied by| n170
  n174 -->|Serves| n114
  n175 -->|Refines| n114
  n175 -->|Depends on| n4
  n176 -->|Accepts| n175
  n177 -->|Refines| n114
  n177 -->|Depends on| n4
  n178 -->|Accepts| n177
  n179 -->|Refines| n114
  n180 -->|Accepts| n179
  n181 -->|Refines| n114
  n181 -->|Depends on| n4
  n182 -->|Accepts| n181
  n183 -->|Refines| n114
  n183 -->|Depends on| n4
  n184 -->|Accepts| n183
  n185 -->|Verifies| n26
  n185 -->|In| n207
  n185 -->|Depends on| n26
  n185 -->|Depends on| n27
  n185 -->|Depends on| n200
  n185 -->|Depends on| n199
  n186 -->|Verifies| n99
  n186 -->|Verifies| n108
  n186 -->|Verifies| n89
  n186 -->|Verifies| n98
  n186 -->|In| n207
  n186 -->|Depends on| n101
  n186 -->|Depends on| n105
  n186 -->|Depends on| n104
  n186 -->|Depends on| n102
  n186 -->|Depends on| n103
  n186 -->|Depends on| n88
  n186 -->|Depends on| n107
  n186 -->|Depends on| n200
  n186 -->|Depends on| n4
  n186 -->|Depends on| n199
  n187 -->|Verifies| n11
  n187 -->|In| n207
  n187 -->|Depends on| n11
  n187 -->|Depends on| n200
  n187 -->|Depends on| n4
  n187 -->|Depends on| n199
  n188 -->|Serves| n112
  n188 -->|Applied by| n189
  n188 -->|Applied by| n204
  n188 -->|Applied by| n192
  n188 -->|Applied by| n206
  n188 -->|Applied by| n197
  n189 -->|Chooses| n99
  n189 -->|Chooses| n108
  n189 -->|Chooses| n89
  n189 -->|Chooses| n98
  n189 -->|Chooses| n241
  n189 -->|Chooses| n236
  n189 -->|Chooses| n170
  n189 -->|Chooses| n155
  n189 -->|Chooses| n166
  n189 -->|Chooses| n257
  n189 -->|In| n207
  n189 -->|Follows| n87
  n189 -->|Serves| n112
  n190 -->|Verifies| n41
  n190 -->|In| n207
  n190 -->|Depends on| n43
  n190 -->|Depends on| n199
  n191 -->|Verifies| n42
  n191 -->|In| n205
  n191 -->|Depends on| n43
  n191 -->|Depends on| n199
  n192 -->|Chooses| n41
  n192 -->|In| n207
  n192 -->|Follows| n87
  n192 -->|Serves| n112
  n193 -->|Verifies| n35
  n193 -->|In| n207
  n193 -->|Depends on| n31
  n193 -->|Depends on| n47
  n193 -->|Depends on| n46
  n193 -->|Depends on| n4
  n193 -->|Depends on| n199
  n194 -->|Verifies| n16
  n194 -->|Verifies| n17
  n194 -->|Verifies| n155
  n194 -->|Verifies| n166
  n194 -->|Verifies| n203
  n194 -->|In| n207
  n194 -->|Depends on| n17
  n194 -->|Depends on| n16
  n194 -->|Depends on| n156
  n194 -->|Depends on| n167
  n194 -->|Depends on| n200
  n194 -->|Depends on| n14
  n194 -->|Depends on| n199
  n194 -->|Depends on| n4
  n194 -->|Depends on| n222
  n195 -->|Verifies| n18
  n195 -->|Verifies| n257
  n195 -->|Verifies| n202
  n195 -->|In| n207
  n195 -->|Depends on| n18
  n195 -->|Depends on| n240
  n195 -->|Depends on| n258
  n195 -->|Depends on| n200
  n195 -->|Depends on| n14
  n195 -->|Depends on| n199
  n195 -->|Depends on| n4
  n195 -->|Depends on| n5
  n195 -->|Depends on| n222
  n196 -->|Verifies| n17
  n196 -->|Verifies| n155
  n196 -->|Verifies| n166
  n196 -->|Verifies| n203
  n196 -->|In| n207
  n196 -->|Depends on| n17
  n196 -->|Depends on| n156
  n196 -->|Depends on| n167
  n196 -->|Depends on| n200
  n196 -->|Depends on| n14
  n196 -->|Depends on| n199
  n196 -->|Depends on| n4
  n196 -->|Depends on| n222
  n197 -->|Chooses| n35
  n197 -->|In| n207
  n197 -->|Follows| n82
  n197 -->|Serves| n112
  n198 -->|Verifies| n170
  n198 -->|Verifies| n169
  n198 -->|In| n207
  n198 -->|Depends on| n168
  n198 -->|Depends on| n171
  n198 -->|Depends on| n169
  n198 -->|Depends on| n200
  n198 -->|Depends on| n199
  n198 -->|Depends on| n4
  n199 -->|Written in| n201
  n202 -->|Serves| n112
  n202 -->|Implements| n19
  n202 -->|Depends on| n200
  n203 -->|Serves| n112
  n203 -->|Implements| n20
  n203 -->|Depends on| n200
  n204 -->|Chooses| n203
  n204 -->|Chooses| n202
  n204 -->|In| n207
  n204 -->|Follows| n87
  n204 -->|Serves| n112
  n206 -->|Chooses| n42
  n206 -->|In| n205
  n206 -->|Follows| n87
  n206 -->|Serves| n112
  n208 -->|Verifies| n241
  n208 -->|Verifies| n236
  n208 -->|In| n207
  n208 -->|Depends on| n240
  n208 -->|Depends on| n242
  n208 -->|Depends on| n243
  n208 -->|Depends on| n237
  n208 -->|Depends on| n200
  n208 -->|Depends on| n199
  n209 -->|Applies the family| n62
  n209 -->|Serves| n115
  n210 -->|Applies the family| n68
  n210 -->|Serves| n115
  n211 -->|Applies the family| n57
  n211 -->|Serves| n115
  n212 -->|Applies the family| n76
  n212 -->|Serves| n115
  n213 -->|Ships| n220
  n213 -->|Follows the policy| n221
  n214 -->|Applies the family| n72
  n214 -->|Serves| n115
  n216 -->|Runs elsewhere| n213
  n216 -->|Its writer's settings| n215
  n217 -->|Applies the family| n74
  n217 -->|Serves| n115
  n218 -->|Applies the family| n70
  n218 -->|Serves| n115
  n219 -->|Ships| n216
  n221 -->|Its obligations| n212
  n221 -->|Its obligations| n217
  n221 -->|Its obligations| n211
  n221 -->|Its obligations| n218
  n221 -->|Its obligations| n214
  n221 -->|Its obligations| n209
  n221 -->|Its obligations| n210
  n222 -->|Serves| n110
  n223 -->|Serves| n110
  n224 -->|Serves| n110
  n225 -->|Serves| n110
  n226 -->|Serves| n110
  n227 -->|Serves| n110
  n228 -->|Serves| n110
  n229 -->|Serves| n110
  n230 -->|Serves| n110
  n231 -->|Serves| n110
  n232 -->|Serves| n110
  n233 -->|Serves| n110
  n234 -->|Serves| n110
  n235 -->|Serves| n110
  n236 -->|Implements| n243
  n236 -->|Implements| n237
  n236 -->|Depends on| n4
  n239 -->|Implements| n255
  n239 -->|Depends on| n222
  n241 -->|Implements| n240
  n241 -->|Implements| n242
  n241 -->|Depends on| n11
  n241 -->|Depends on| n6
  n245 -->|Implements| n240
  n245 -->|Depends on| n12
  n245 -->|Depends on| n225
  n247 -->|Implements| n255
  n247 -->|Depends on| n223
  n247 -->|Depends on| n222
  n247 -->|Depends on| n7
  n248 -->|Implements| n256
  n248 -->|Depends on| n224
  n248 -->|Depends on| n226
  n248 -->|Depends on| n222
  n248 -->|Depends on| n231
  n249 -->|Serves| n112
  n251 -->|Serves| n110
  n252 -->|Implements| n243
  n252 -->|Uses| n254
  n252 -->|Depends on| n244
  n252 -->|Depends on| n251
  n252 -->|Depends on| n4
  n252 -->|Depends on| n54
  n253 -->|Implements| n246
  n253 -->|Uses| n254
  n253 -->|Depends on| n261
  n257 -->|Serves| n112
  n257 -->|Implements| n256
  n257 -->|Implements| n258
  n257 -->|Depends on| n222
  n257 -->|Depends on| n240
  n260 -->|Serves| n112
  n260 -->|Applied by| n255
  n260 -->|Applied by| n247
  n260 -->|Applied by| n239
  n260 -->|Applied by| n246
  n260 -->|Applied by| n253
  n260 -->|Applied by| n259
  n260 -->|Applied by| n240
  n260 -->|Applied by| n242
  n260 -->|Applied by| n245
  n260 -->|Applied by| n241
  n260 -->|Applied by| n243
  n260 -->|Applied by| n252
  n260 -->|Applied by| n237
  n260 -->|Applied by| n236
  n260 -->|Applied by| n250
  n261 -->|Written in| n238
  n262 -->|Serves| n110
  n263 -->|Serves| n110
  n264 -->|Serves| n110
  n265 -->|Serves| n110
  n266 -->|Serves| n110
  n267 -->|Serves| n110
  n268 -->|Serves| n110
  n269 -->|Serves| n110
  n270 -->|Serves| n110
  n271 -->|Serves| n110
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
