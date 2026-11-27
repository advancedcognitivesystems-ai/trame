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
    n36["Trame references<br/><small>Standard</small>"]:::neutral
    n37["The project at hand<br/><small>Port</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n38["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n39["CSS<br/><small>Standard</small>"]:::neutral
    n40["HTML<br/><small>Standard</small>"]:::neutral
    n41["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph judgment["Standard library · Judgment"]
    n42["As the language says<br/><small>Function</small>"]:::held
    n43["Every warning an error<br/><small>Function</small>"]:::held
    n44["Hardening<br/><small>Port</small>"]:::neutral
    n45["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n46["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph languages["Standard library · Languages"]
    n47["CSS style sheets<br/><small>Language</small>"]:::held
    n48["HTML markup<br/><small>Language</small>"]:::held
    n49["tree-sitter queries<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n50["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n51["Language tags<br/><small>Standard</small>"]:::neutral
    n52["Ratio<br/><small>Quantity</small>"]:::neutral
    n53["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n54["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n55["Time<br/><small>Quantity</small>"]:::neutral
    n56["Units of measure<br/><small>Standard</small>"]:::neutral
    n57["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n58["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n59["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n60["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n61["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n62["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n63["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n64["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n65["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n66["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n67["What people decided is published<br/><small>Requirement</small>"]:::held
    n68["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n69["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n70["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n71["The project's rules hold<br/><small>Requirement</small>"]:::held
    n72["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n73["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n74["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n75["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n76["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n77["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n78["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n79["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n80["Trame<br/><small>Package</small>"]:::neutral
    n81["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n82["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n83["Adapter<br/><small>Design pattern</small>"]:::held
    n84["Bridge<br/><small>Design pattern</small>"]:::neutral
    n85["Command<br/><small>Design pattern</small>"]:::neutral
    n86["Plugin<br/><small>Design pattern</small>"]:::neutral
    n87["Repository<br/><small>Design pattern</small>"]:::neutral
    n88["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n89["Animation frames<br/><small>Port</small>"]:::neutral
    n90["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n91["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n92["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n93["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n94["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n95["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n96["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n97["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n98["Languages of the device<br/><small>Port</small>"]:::neutral
    n99["Frames turned by hand<br/><small>Function</small>"]:::held
    n100["Preferences kept in memory<br/><small>Function</small>"]:::held
    n101["Loading of a page<br/><small>Port</small>"]:::neutral
    n102["Preferences<br/><small>Port</small>"]:::neutral
    n103["Screen kept awake<br/><small>Port</small>"]:::neutral
    n104["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n105["What was said<br/><small>Port</small>"]:::neutral
    n106["Speech<br/><small>Port</small>"]:::neutral
    n107["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n108["Time turned by hand<br/><small>Port</small>"]:::neutral
    n109["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n110["Commands chosen, not written again<br/><small>Goal</small>"]:::neutral
    n111["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n112["Known designs, named<br/><small>Goal</small>"]:::neutral
    n113["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n114["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n115["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n116["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n117["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n118["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n119["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n120["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n121["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n122["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n123["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n124["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n125["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n129["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n130["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n131["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n133["Version 0.22.0<br/><small>Release</small>"]:::neutral
    n134["Version 0.22.1<br/><small>Release</small>"]:::neutral
    n135["Version 0.22.2<br/><small>Release</small>"]:::neutral
    n136["Version 0.22.3<br/><small>Release</small>"]:::neutral
    n137["Version 0.23.0<br/><small>Release</small>"]:::neutral
    n138["Version 0.24.0<br/><small>Release</small>"]:::neutral
    n139["Version 0.25.0<br/><small>Release</small>"]:::neutral
    n140["Version 0.26.0<br/><small>Release</small>"]:::neutral
    n141["Version 0.27.0<br/><small>Release</small>"]:::neutral
    n142["Version 0.28.0<br/><small>Release</small>"]:::neutral
    n143["Version 0.29.0<br/><small>Release</small>"]:::neutral
    n144["Version 0.29.1<br/><small>Release</small>"]:::neutral
    n145["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n146["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n147["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n148["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n149["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n150["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n151["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n152["The automatic merge<br/><small>Port</small>"]:::neutral
    n153["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n154["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n155["The branches<br/><small>Port</small>"]:::neutral
    n156["Branches kept in memory<br/><small>Function</small>"]:::held
    n157["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n158["Git's branches<br/><small>Implementation</small>"]:::neutral
    n159["Git's command line<br/><small>Standard</small>"]:::neutral
    n160["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n161["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n162["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n163["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n164["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n165["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n166["Pull requests<br/><small>Port</small>"]:::neutral
    n167["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n168["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n169["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n170["A repository compared with its settings<br/><small>Function</small>"]:::held
    n171["A repository kept in memory<br/><small>Function</small>"]:::held
    n172["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n173["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n174["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n175["Directions<br/><small>Vocabulary</small>"]:::neutral
    n176["As many links as asked<br/><small>Requirement</small>"]:::held
    n177["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n178["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n179["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n180["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n181["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n182["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n183["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n184["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n185["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n186["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n187["The device, in memory<br/><small>Scenario</small>"]:::held
    n188["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n189["How the library's scenarios run<br/><small>Architecture decision</small>"]:::held
    n190["In memory<br/><small>Technical choice</small>"]:::held
    n191["Judged as the language says<br/><small>Scenario</small>"]:::held
    n192["Judged strictly<br/><small>Scenario</small>"]:::held
    n193["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n194["The languages read by the engine<br/><small>Scenario</small>"]:::held
    n195["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n196["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n197["A pull request opened<br/><small>Scenario</small>"]:::held
    n198["Read by the engine that builds<br/><small>Technical choice</small>"]:::held
    n199["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n200["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n201["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n202["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n203["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n204["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n205["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n206["Strict<br/><small>Environment</small>"]:::neutral
    n207["Judged strictly<br/><small>Technical choice</small>"]:::held
    n208["Test<br/><small>Environment</small>"]:::neutral
    n209["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n210["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n211["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n212["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n213["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n214["The next version<br/><small>Shipment</small>"]:::unknown
    n215["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n216["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n217["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n218["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n219["Its rules held<br/><small>Obligation</small>"]:::neutral
    n220["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n221["The standard library<br/><small>Artefact</small>"]:::unknown
    n222["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n223["Exit status<br/><small>Standard</small>"]:::neutral
    n224["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n225["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n226["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n227["Node.js events<br/><small>Standard</small>"]:::neutral
    n228["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n229["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n230["npm's command line<br/><small>Standard</small>"]:::neutral
    n231["npm's manifest<br/><small>Standard</small>"]:::neutral
    n232["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n233["Positions in a file<br/><small>Standard</small>"]:::neutral
    n234["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n235["Text file<br/><small>Standard</small>"]:::neutral
    n236["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n237["A browser kept in memory<br/><small>Function</small>"]:::held
    n238["Browser script<br/><small>Port</small>"]:::neutral
    n239["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n240["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n241["Project files<br/><small>Port</small>"]:::neutral
    n242["Files kept in memory<br/><small>Function</small>"]:::held
    n243["Files written<br/><small>Port</small>"]:::neutral
    n244["Headless browser<br/><small>Port</small>"]:::neutral
    n245["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n246["The machine's files<br/><small>Implementation</small>"]:::neutral
    n247["What the machine must also have<br/><small>Port</small>"]:::neutral
    n248["Node's command line<br/><small>Implementation</small>"]:::neutral
    n249["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n250["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n251["Where a package comes from<br/><small>Port</small>"]:::neutral
    n252["Playwright's API<br/><small>Standard</small>"]:::neutral
    n253["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n254["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n255["Playwright<br/><small>Package</small>"]:::held
    n256["Commands of a program<br/><small>Port</small>"]:::neutral
    n257["Programs run<br/><small>Port</small>"]:::neutral
    n258["Programs run in memory<br/><small>Function</small>"]:::held
    n259["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n260["What repairs a project<br/><small>Port</small>"]:::neutral
    n261["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n262["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n263["CSSOM View<br/><small>Standard</small>"]:::neutral
    n264["HTTP<br/><small>Standard</small>"]:::neutral
    n265["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n266["Media types<br/><small>Standard</small>"]:::neutral
    n267["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n268["Server-sent events<br/><small>Standard</small>"]:::neutral
    n269["UI events<br/><small>Standard</small>"]:::neutral
    n270["URI<br/><small>Standard</small>"]:::neutral
    n271["Web Audio API<br/><small>Standard</small>"]:::neutral
    n272["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n115
  n1 -->|Serves| n115
  n1 -->|Applied by| n63
  n2 -->|Serves| n115
  n3 -->|Serves| n115
  n4 -->|Serves| n114
  n5 -->|Serves| n114
  n5 -->|Depends on| n21
  n5 -->|Depends on| n4
  n6 -->|Serves| n114
  n6 -->|Depends on| n5
  n7 -->|Serves| n114
  n7 -->|Depends on| n23
  n8 -->|Serves| n111
  n9 -->|Serves| n111
  n10 -->|Serves| n111
  n11 -->|Serves| n114
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n21
  n11 -->|Depends on| n4
  n12 -->|Serves| n111
  n13 -->|Serves| n110
  n13 -->|Applied by| n15
  n13 -->|Applied by| n17
  n13 -->|Applied by| n16
  n13 -->|Applied by| n18
  n13 -->|Applied by| n85
  n14 -->|Written in| n239
  n15 -->|Depends on| n256
  n16 -->|Serves| n110
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n155
  n16 -->|Depends on| n166
  n16 -->|Depends on| n14
  n16 -->|Depends on| n223
  n16 -->|Depends on| n4
  n16 -->|Depends on| n232
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n110
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n155
  n17 -->|Depends on| n166
  n17 -->|Depends on| n14
  n17 -->|Depends on| n223
  n17 -->|Depends on| n4
  n17 -->|Depends on| n232
  n17 -->|Depends on| n6
  n18 -->|Serves| n110
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n241
  n18 -->|Depends on| n257
  n18 -->|Depends on| n14
  n18 -->|Depends on| n223
  n18 -->|Depends on| n5
  n18 -->|Depends on| n232
  n18 -->|Depends on| n6
  n21 -->|Serves| n111
  n22 -->|Serves| n111
  n23 -->|Serves| n111
  n24 -->|Serves| n111
  n25 -->|Serves| n111
  n26 -->|Serves| n113
  n26 -->|Depends on| n27
  n27 -->|Serves| n113
  n29 -->|Serves| n113
  n29 -->|Applied by| n37
  n29 -->|Applied by| n34
  n29 -->|Applied by| n33
  n29 -->|Applied by| n32
  n29 -->|Applied by| n31
  n29 -->|Applied by| n35
  n30 -->|Written in| n239
  n32 -->|Implements| n37
  n32 -->|Depends on| n34
  n32 -->|Depends on| n30
  n33 -->|Implements| n37
  n33 -->|Depends on| n30
  n35 -->|Implements| n31
  n35 -->|Depends on| n30
  n36 -->|Serves| n111
  n38 -->|Serves| n111
  n39 -->|Serves| n111
  n40 -->|Serves| n111
  n41 -->|Serves| n111
  n42 -->|Serves| n113
  n42 -->|Implements| n44
  n42 -->|Depends on| n46
  n43 -->|Serves| n113
  n43 -->|Implements| n44
  n43 -->|Depends on| n46
  n45 -->|Serves| n113
  n45 -->|Applied by| n46
  n45 -->|Applied by| n44
  n45 -->|Applied by| n42
  n45 -->|Applied by| n43
  n46 -->|Serves| n114
  n47 -->|Defined by| n39
  n47 -->|Queries written in| n49
  n47 -->|Read by| n31
  n48 -->|Defined by| n40
  n48 -->|Queries written in| n49
  n48 -->|Read by| n31
  n50 -->|Serves| n111
  n51 -->|Serves| n111
  n52 -->|Written with| n57
  n52 -->|Serves| n111
  n53 -->|Serves| n111
  n55 -->|Written with| n57
  n55 -->|Serves| n111
  n56 -->|Serves| n111
  n57 -->|Written in| n54
  n58 -->|Refines| n115
  n59 -->|Accepts| n58
  n60 -->|Refines| n115
  n60 -->|Depends on| n4
  n61 -->|Accepts| n60
  n62 -->|Serves| n115
  n63 -->|Refines| n115
  n64 -->|Accepts| n63
  n65 -->|Refines| n115
  n66 -->|Accepts| n65
  n67 -->|Refines| n115
  n68 -->|Accepts| n67
  n69 -->|Refines| n115
  n69 -->|Depends on| n4
  n70 -->|Accepts| n69
  n71 -->|Refines| n115
  n72 -->|Accepts| n71
  n73 -->|Refines| n115
  n74 -->|Accepts| n73
  n75 -->|Refines| n115
  n76 -->|Accepts| n75
  n77 -->|Refines| n115
  n77 -->|Depends on| n4
  n78 -->|Accepts| n77
  n79 -->|Serves| n116
  n80 -->|Serves| n113
  n81 -->|Serves| n116
  n82 -->|Serves| n112
  n83 -->|Serves| n112
  n84 -->|Serves| n112
  n85 -->|Serves| n112
  n86 -->|Serves| n112
  n87 -->|Serves| n112
  n88 -->|Serves| n112
  n90 -->|Implements| n103
  n90 -->|Implements| n104
  n91 -->|Implements| n89
  n91 -->|Depends on| n55
  n92 -->|Implements| n98
  n93 -->|Implements| n101
  n93 -->|Depends on| n269
  n94 -->|Implements| n102
  n95 -->|Implements| n106
  n95 -->|Depends on| n51
  n95 -->|Depends on| n272
  n96 -->|Implements| n103
  n96 -->|Depends on| n267
  n97 -->|Serves| n113
  n97 -->|Applied by| n102
  n97 -->|Applied by| n94
  n97 -->|Applied by| n100
  n97 -->|Applied by| n98
  n97 -->|Applied by| n92
  n97 -->|Applied by| n106
  n97 -->|Applied by| n95
  n97 -->|Applied by| n109
  n97 -->|Applied by| n105
  n97 -->|Applied by| n103
  n97 -->|Applied by| n96
  n97 -->|Applied by| n90
  n97 -->|Applied by| n104
  n97 -->|Applied by| n89
  n97 -->|Applied by| n91
  n97 -->|Applied by| n99
  n97 -->|Applied by| n108
  n99 -->|Implements| n89
  n99 -->|Implements| n108
  n99 -->|Depends on| n4
  n100 -->|Implements| n102
  n107 -->|Serves| n113
  n107 -->|Applied by| n101
  n107 -->|Applied by| n93
  n109 -->|Implements| n106
  n109 -->|Implements| n105
  n117 -->|Serves| n111
  n117 -->|Serves| n112
  n117 -->|Serves| n113
  n117 -->|Serves| n114
  n118 -->|Serves| n111
  n118 -->|Serves| n112
  n118 -->|Serves| n113
  n118 -->|Serves| n114
  n118 -->|Serves| n115
  n119 -->|Serves| n111
  n119 -->|Serves| n112
  n119 -->|Serves| n113
  n119 -->|Serves| n114
  n119 -->|Serves| n115
  n120 -->|Serves| n111
  n120 -->|Serves| n112
  n120 -->|Serves| n113
  n120 -->|Serves| n114
  n120 -->|Serves| n115
  n121 -->|Serves| n111
  n121 -->|Serves| n112
  n121 -->|Serves| n113
  n121 -->|Serves| n114
  n121 -->|Serves| n115
  n122 -->|Serves| n111
  n122 -->|Serves| n112
  n122 -->|Serves| n113
  n122 -->|Serves| n114
  n122 -->|Serves| n115
  n123 -->|Serves| n111
  n123 -->|Serves| n112
  n123 -->|Serves| n113
  n123 -->|Serves| n114
  n123 -->|Serves| n115
  n124 -->|Serves| n111
  n124 -->|Serves| n112
  n124 -->|Serves| n113
  n124 -->|Serves| n114
  n124 -->|Serves| n115
  n125 -->|Serves| n111
  n125 -->|Serves| n112
  n125 -->|Serves| n113
  n125 -->|Serves| n114
  n125 -->|Serves| n115
  n125 -->|Serves| n116
  n126 -->|Serves| n111
  n126 -->|Serves| n112
  n126 -->|Serves| n113
  n126 -->|Serves| n114
  n126 -->|Serves| n115
  n126 -->|Serves| n116
  n127 -->|Serves| n111
  n127 -->|Serves| n112
  n127 -->|Serves| n113
  n127 -->|Serves| n114
  n127 -->|Serves| n115
  n127 -->|Serves| n116
  n128 -->|Serves| n111
  n128 -->|Serves| n112
  n128 -->|Serves| n113
  n128 -->|Serves| n114
  n128 -->|Serves| n115
  n128 -->|Serves| n116
  n129 -->|Serves| n111
  n129 -->|Serves| n112
  n129 -->|Serves| n113
  n129 -->|Serves| n114
  n129 -->|Serves| n115
  n129 -->|Serves| n116
  n130 -->|Serves| n111
  n130 -->|Serves| n112
  n130 -->|Serves| n113
  n130 -->|Serves| n114
  n131 -->|Serves| n111
  n131 -->|Serves| n112
  n131 -->|Serves| n113
  n131 -->|Serves| n114
  n131 -->|Serves| n115
  n131 -->|Serves| n116
  n132 -->|Serves| n111
  n132 -->|Serves| n112
  n132 -->|Serves| n113
  n132 -->|Serves| n114
  n132 -->|Serves| n115
  n132 -->|Serves| n116
  n133 -->|Serves| n110
  n133 -->|Serves| n111
  n133 -->|Serves| n112
  n133 -->|Serves| n113
  n133 -->|Serves| n114
  n133 -->|Serves| n115
  n133 -->|Serves| n116
  n134 -->|Serves| n110
  n134 -->|Serves| n111
  n134 -->|Serves| n112
  n134 -->|Serves| n113
  n134 -->|Serves| n114
  n134 -->|Serves| n115
  n134 -->|Serves| n116
  n135 -->|Serves| n110
  n135 -->|Serves| n111
  n135 -->|Serves| n112
  n135 -->|Serves| n113
  n135 -->|Serves| n114
  n135 -->|Serves| n115
  n135 -->|Serves| n116
  n136 -->|Serves| n110
  n136 -->|Serves| n111
  n136 -->|Serves| n112
  n136 -->|Serves| n113
  n136 -->|Serves| n114
  n136 -->|Serves| n115
  n136 -->|Serves| n116
  n137 -->|Serves| n110
  n137 -->|Serves| n111
  n137 -->|Serves| n112
  n137 -->|Serves| n113
  n137 -->|Serves| n114
  n137 -->|Serves| n115
  n137 -->|Serves| n116
  n138 -->|Serves| n110
  n138 -->|Serves| n111
  n138 -->|Serves| n112
  n138 -->|Serves| n113
  n138 -->|Serves| n114
  n138 -->|Serves| n115
  n138 -->|Serves| n116
  n139 -->|Serves| n110
  n139 -->|Serves| n111
  n139 -->|Serves| n112
  n139 -->|Serves| n113
  n139 -->|Serves| n114
  n139 -->|Serves| n115
  n139 -->|Serves| n116
  n140 -->|Serves| n110
  n140 -->|Serves| n111
  n140 -->|Serves| n112
  n140 -->|Serves| n113
  n140 -->|Serves| n114
  n140 -->|Serves| n115
  n140 -->|Serves| n116
  n141 -->|Serves| n110
  n141 -->|Serves| n111
  n141 -->|Serves| n112
  n141 -->|Serves| n113
  n141 -->|Serves| n114
  n141 -->|Serves| n115
  n141 -->|Serves| n116
  n142 -->|Serves| n110
  n142 -->|Serves| n111
  n142 -->|Serves| n112
  n142 -->|Serves| n113
  n142 -->|Serves| n114
  n142 -->|Serves| n115
  n142 -->|Serves| n116
  n143 -->|Serves| n110
  n143 -->|Serves| n111
  n143 -->|Serves| n112
  n143 -->|Serves| n113
  n143 -->|Serves| n114
  n143 -->|Serves| n115
  n143 -->|Serves| n116
  n144 -->|Serves| n110
  n144 -->|Serves| n111
  n144 -->|Serves| n112
  n144 -->|Serves| n113
  n144 -->|Serves| n114
  n144 -->|Serves| n115
  n144 -->|Serves| n116
  n145 -->|Serves| n111
  n145 -->|Serves| n112
  n145 -->|Serves| n113
  n145 -->|Serves| n114
  n146 -->|Serves| n111
  n146 -->|Serves| n112
  n146 -->|Serves| n113
  n146 -->|Serves| n114
  n147 -->|Serves| n111
  n147 -->|Serves| n112
  n147 -->|Serves| n113
  n147 -->|Serves| n114
  n148 -->|Serves| n111
  n148 -->|Serves| n112
  n148 -->|Serves| n113
  n148 -->|Serves| n114
  n149 -->|Serves| n111
  n149 -->|Serves| n112
  n149 -->|Serves| n113
  n149 -->|Serves| n114
  n150 -->|Serves| n111
  n150 -->|Serves| n112
  n150 -->|Serves| n113
  n150 -->|Serves| n114
  n150 -->|Serves| n115
  n151 -->|Serves| n111
  n151 -->|Serves| n112
  n151 -->|Serves| n113
  n151 -->|Serves| n114
  n151 -->|Serves| n115
  n153 -->|Implements| n152
  n153 -->|Depends on| n160
  n153 -->|Depends on| n164
  n153 -->|Depends on| n165
  n153 -->|Depends on| n225
  n153 -->|Depends on| n227
  n153 -->|Depends on| n223
  n154 -->|Implements| n152
  n154 -->|Depends on| n160
  n154 -->|Depends on| n164
  n154 -->|Depends on| n163
  n154 -->|Depends on| n225
  n154 -->|Depends on| n227
  n154 -->|Depends on| n223
  n154 -->|Depends on| n6
  n156 -->|Serves| n113
  n156 -->|Implements| n155
  n156 -->|Implements| n157
  n158 -->|Implements| n155
  n158 -->|Depends on| n159
  n158 -->|Depends on| n225
  n158 -->|Depends on| n227
  n158 -->|Depends on| n223
  n158 -->|Depends on| n6
  n158 -->|Depends on| n235
  n159 -->|Serves| n111
  n160 -->|Serves| n111
  n161 -->|Implements| n166
  n161 -->|Depends on| n164
  n161 -->|Depends on| n163
  n161 -->|Depends on| n225
  n161 -->|Depends on| n227
  n161 -->|Depends on| n223
  n161 -->|Depends on| n6
  n161 -->|Depends on| n7
  n161 -->|Depends on| n152
  n162 -->|Implements| n169
  n162 -->|Depends on| n164
  n162 -->|Depends on| n225
  n162 -->|Depends on| n227
  n162 -->|Depends on| n223
  n162 -->|Depends on| n165
  n162 -->|Depends on| n6
  n162 -->|Depends on| n7
  n163 -->|Serves| n111
  n164 -->|Serves| n111
  n165 -->|Serves| n111
  n167 -->|Serves| n113
  n167 -->|Implements| n166
  n167 -->|Implements| n168
  n167 -->|Depends on| n164
  n167 -->|Depends on| n163
  n167 -->|Depends on| n6
  n170 -->|Serves| n113
  n170 -->|Depends on| n173
  n171 -->|Serves| n113
  n171 -->|Implements| n169
  n171 -->|Implements| n172
  n173 -->|Serves| n113
  n174 -->|Serves| n113
  n174 -->|Applied by| n165
  n174 -->|Applied by| n173
  n174 -->|Applied by| n170
  n174 -->|Applied by| n169
  n174 -->|Applied by| n162
  n174 -->|Applied by| n172
  n174 -->|Applied by| n171
  n175 -->|Serves| n115
  n176 -->|Refines| n115
  n176 -->|Depends on| n4
  n177 -->|Accepts| n176
  n178 -->|Refines| n115
  n178 -->|Depends on| n4
  n179 -->|Accepts| n178
  n180 -->|Refines| n115
  n181 -->|Accepts| n180
  n182 -->|Refines| n115
  n182 -->|Depends on| n4
  n183 -->|Accepts| n182
  n184 -->|Refines| n115
  n184 -->|Depends on| n4
  n185 -->|Accepts| n184
  n186 -->|Verifies| n26
  n186 -->|In| n208
  n186 -->|Depends on| n26
  n186 -->|Depends on| n27
  n186 -->|Depends on| n201
  n186 -->|Depends on| n200
  n187 -->|Verifies| n100
  n187 -->|Verifies| n109
  n187 -->|Verifies| n90
  n187 -->|Verifies| n99
  n187 -->|In| n208
  n187 -->|Depends on| n102
  n187 -->|Depends on| n106
  n187 -->|Depends on| n105
  n187 -->|Depends on| n103
  n187 -->|Depends on| n104
  n187 -->|Depends on| n89
  n187 -->|Depends on| n108
  n187 -->|Depends on| n201
  n187 -->|Depends on| n4
  n187 -->|Depends on| n200
  n188 -->|Verifies| n11
  n188 -->|In| n208
  n188 -->|Depends on| n11
  n188 -->|Depends on| n201
  n188 -->|Depends on| n4
  n188 -->|Depends on| n200
  n189 -->|Serves| n113
  n189 -->|Applied by| n190
  n189 -->|Applied by| n205
  n189 -->|Applied by| n193
  n189 -->|Applied by| n207
  n189 -->|Applied by| n198
  n190 -->|Chooses| n100
  n190 -->|Chooses| n109
  n190 -->|Chooses| n90
  n190 -->|Chooses| n99
  n190 -->|Chooses| n242
  n190 -->|Chooses| n237
  n190 -->|Chooses| n171
  n190 -->|Chooses| n156
  n190 -->|Chooses| n167
  n190 -->|Chooses| n258
  n190 -->|In| n208
  n190 -->|Follows| n88
  n190 -->|Serves| n113
  n191 -->|Verifies| n42
  n191 -->|In| n208
  n191 -->|Depends on| n44
  n191 -->|Depends on| n200
  n192 -->|Verifies| n43
  n192 -->|In| n206
  n192 -->|Depends on| n44
  n192 -->|Depends on| n200
  n193 -->|Chooses| n42
  n193 -->|In| n208
  n193 -->|Follows| n88
  n193 -->|Serves| n113
  n194 -->|Verifies| n35
  n194 -->|In| n208
  n194 -->|Depends on| n31
  n194 -->|Depends on| n48
  n194 -->|Depends on| n47
  n194 -->|Depends on| n4
  n194 -->|Depends on| n200
  n195 -->|Verifies| n16
  n195 -->|Verifies| n17
  n195 -->|Verifies| n156
  n195 -->|Verifies| n167
  n195 -->|Verifies| n204
  n195 -->|In| n208
  n195 -->|Depends on| n17
  n195 -->|Depends on| n16
  n195 -->|Depends on| n157
  n195 -->|Depends on| n168
  n195 -->|Depends on| n201
  n195 -->|Depends on| n14
  n195 -->|Depends on| n200
  n195 -->|Depends on| n4
  n195 -->|Depends on| n223
  n196 -->|Verifies| n18
  n196 -->|Verifies| n258
  n196 -->|Verifies| n203
  n196 -->|In| n208
  n196 -->|Depends on| n18
  n196 -->|Depends on| n241
  n196 -->|Depends on| n259
  n196 -->|Depends on| n201
  n196 -->|Depends on| n14
  n196 -->|Depends on| n200
  n196 -->|Depends on| n4
  n196 -->|Depends on| n5
  n196 -->|Depends on| n223
  n197 -->|Verifies| n17
  n197 -->|Verifies| n156
  n197 -->|Verifies| n167
  n197 -->|Verifies| n204
  n197 -->|In| n208
  n197 -->|Depends on| n17
  n197 -->|Depends on| n157
  n197 -->|Depends on| n168
  n197 -->|Depends on| n201
  n197 -->|Depends on| n14
  n197 -->|Depends on| n200
  n197 -->|Depends on| n4
  n197 -->|Depends on| n223
  n198 -->|Chooses| n35
  n198 -->|In| n208
  n198 -->|Follows| n83
  n198 -->|Serves| n113
  n199 -->|Verifies| n171
  n199 -->|Verifies| n170
  n199 -->|In| n208
  n199 -->|Depends on| n169
  n199 -->|Depends on| n172
  n199 -->|Depends on| n170
  n199 -->|Depends on| n201
  n199 -->|Depends on| n200
  n199 -->|Depends on| n4
  n200 -->|Written in| n202
  n203 -->|Serves| n113
  n203 -->|Implements| n19
  n203 -->|Depends on| n201
  n204 -->|Serves| n113
  n204 -->|Implements| n20
  n204 -->|Depends on| n201
  n205 -->|Chooses| n204
  n205 -->|Chooses| n203
  n205 -->|In| n208
  n205 -->|Follows| n88
  n205 -->|Serves| n113
  n207 -->|Chooses| n43
  n207 -->|In| n206
  n207 -->|Follows| n88
  n207 -->|Serves| n113
  n209 -->|Verifies| n242
  n209 -->|Verifies| n237
  n209 -->|In| n208
  n209 -->|Depends on| n241
  n209 -->|Depends on| n243
  n209 -->|Depends on| n244
  n209 -->|Depends on| n238
  n209 -->|Depends on| n201
  n209 -->|Depends on| n200
  n210 -->|Applies the family| n63
  n210 -->|Serves| n116
  n211 -->|Applies the family| n69
  n211 -->|Serves| n116
  n212 -->|Applies the family| n58
  n212 -->|Serves| n116
  n213 -->|Applies the family| n77
  n213 -->|Serves| n116
  n214 -->|Ships| n221
  n214 -->|Follows the policy| n222
  n215 -->|Applies the family| n73
  n215 -->|Serves| n116
  n217 -->|Runs elsewhere| n214
  n217 -->|Its writer's settings| n216
  n218 -->|Applies the family| n75
  n218 -->|Serves| n116
  n219 -->|Applies the family| n71
  n219 -->|Serves| n116
  n220 -->|Ships| n217
  n222 -->|Its obligations| n213
  n222 -->|Its obligations| n218
  n222 -->|Its obligations| n212
  n222 -->|Its obligations| n219
  n222 -->|Its obligations| n215
  n222 -->|Its obligations| n210
  n222 -->|Its obligations| n211
  n223 -->|Serves| n111
  n224 -->|Serves| n111
  n225 -->|Serves| n111
  n226 -->|Serves| n111
  n227 -->|Serves| n111
  n228 -->|Serves| n111
  n229 -->|Serves| n111
  n230 -->|Serves| n111
  n231 -->|Serves| n111
  n232 -->|Serves| n111
  n233 -->|Serves| n111
  n234 -->|Serves| n111
  n235 -->|Serves| n111
  n236 -->|Serves| n111
  n237 -->|Implements| n244
  n237 -->|Implements| n238
  n237 -->|Depends on| n4
  n240 -->|Implements| n256
  n240 -->|Depends on| n223
  n242 -->|Implements| n241
  n242 -->|Implements| n243
  n242 -->|Depends on| n11
  n242 -->|Depends on| n6
  n246 -->|Implements| n241
  n246 -->|Depends on| n12
  n246 -->|Depends on| n226
  n248 -->|Implements| n256
  n248 -->|Depends on| n224
  n248 -->|Depends on| n223
  n248 -->|Depends on| n7
  n249 -->|Implements| n257
  n249 -->|Depends on| n225
  n249 -->|Depends on| n227
  n249 -->|Depends on| n223
  n249 -->|Depends on| n232
  n250 -->|Serves| n113
  n252 -->|Serves| n111
  n253 -->|Implements| n244
  n253 -->|Uses| n255
  n253 -->|Depends on| n245
  n253 -->|Depends on| n252
  n253 -->|Depends on| n4
  n253 -->|Depends on| n55
  n254 -->|Implements| n247
  n254 -->|Uses| n255
  n254 -->|Depends on| n262
  n258 -->|Serves| n113
  n258 -->|Implements| n257
  n258 -->|Implements| n259
  n258 -->|Depends on| n223
  n258 -->|Depends on| n241
  n261 -->|Serves| n113
  n261 -->|Applied by| n256
  n261 -->|Applied by| n248
  n261 -->|Applied by| n240
  n261 -->|Applied by| n247
  n261 -->|Applied by| n254
  n261 -->|Applied by| n260
  n261 -->|Applied by| n241
  n261 -->|Applied by| n243
  n261 -->|Applied by| n246
  n261 -->|Applied by| n242
  n261 -->|Applied by| n244
  n261 -->|Applied by| n253
  n261 -->|Applied by| n238
  n261 -->|Applied by| n237
  n261 -->|Applied by| n251
  n262 -->|Written in| n239
  n263 -->|Serves| n111
  n264 -->|Serves| n111
  n265 -->|Serves| n111
  n266 -->|Serves| n111
  n267 -->|Serves| n111
  n268 -->|Serves| n111
  n269 -->|Serves| n111
  n270 -->|Serves| n111
  n271 -->|Serves| n111
  n272 -->|Serves| n111
  n36 -.->|Refines| n6
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
