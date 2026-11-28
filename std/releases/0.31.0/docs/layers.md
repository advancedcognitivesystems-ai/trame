# Layers

*The graph in force on 28 November 2026, ordered by distance to the goals.*

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
    n86["Plugin<br/><small>Design pattern</small>"]:::held
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
    n146["Version 0.30.0<br/><small>Release</small>"]:::neutral
    n147["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n148["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n149["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n150["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n151["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n152["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n153["The automatic merge<br/><small>Port</small>"]:::neutral
    n154["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n155["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n156["The branches<br/><small>Port</small>"]:::neutral
    n157["Branches kept in memory<br/><small>Function</small>"]:::held
    n158["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n159["Git's branches<br/><small>Implementation</small>"]:::neutral
    n160["Git's command line<br/><small>Standard</small>"]:::neutral
    n161["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n162["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n163["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n164["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n165["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n166["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n167["Pull requests<br/><small>Port</small>"]:::neutral
    n168["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n169["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n170["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n171["A repository compared with its settings<br/><small>Function</small>"]:::held
    n172["A repository kept in memory<br/><small>Function</small>"]:::held
    n173["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n174["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n175["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n176["Directions<br/><small>Vocabulary</small>"]:::neutral
    n177["As many links as asked<br/><small>Requirement</small>"]:::held
    n178["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n179["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n180["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n181["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n182["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n183["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n184["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n185["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n186["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n187["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n188["The device, in memory<br/><small>Scenario</small>"]:::held
    n189["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n190["The formats of the scenarios<br/><small>Technical choice</small>"]:::held
    n191["How the library's scenarios run<br/><small>Architecture decision</small>"]:::held
    n192["In memory<br/><small>Technical choice</small>"]:::held
    n193["Judged as the language says<br/><small>Scenario</small>"]:::held
    n194["Judged strictly<br/><small>Scenario</small>"]:::held
    n195["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n196["The languages read by the engine<br/><small>Scenario</small>"]:::held
    n197["A command's line read, its answer written<br/><small>Scenario</small>"]:::held
    n198["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n199["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n200["A pull request opened<br/><small>Scenario</small>"]:::held
    n201["Read by the engine that builds<br/><small>Technical choice</small>"]:::held
    n202["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n203["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n204["A command's line, in the scenarios<br/><small>Decision</small>"]:::neutral
    n205["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n206["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n207["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n208["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n209["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n210["Strict<br/><small>Environment</small>"]:::neutral
    n211["Judged strictly<br/><small>Technical choice</small>"]:::held
    n212["Test<br/><small>Environment</small>"]:::neutral
    n213["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n214["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n215["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n216["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n217["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n218["The next version<br/><small>Shipment</small>"]:::unknown
    n219["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n220["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n221["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n222["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n223["Its rules held<br/><small>Obligation</small>"]:::neutral
    n224["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n225["The standard library<br/><small>Artefact</small>"]:::unknown
    n226["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n227["Exit status<br/><small>Standard</small>"]:::neutral
    n228["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n229["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n230["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n231["Node.js events<br/><small>Standard</small>"]:::neutral
    n232["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n233["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n234["npm's command line<br/><small>Standard</small>"]:::neutral
    n235["npm's manifest<br/><small>Standard</small>"]:::neutral
    n236["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n237["Positions in a file<br/><small>Standard</small>"]:::neutral
    n238["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n239["JSON formatting<br/><small>Decision</small>"]:::neutral
    n240["Text file<br/><small>Standard</small>"]:::neutral
    n241["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n242["Formats of an answer<br/><small>Port</small>"]:::neutral
    n243["Documents in JSON<br/><small>Function</small>"]:::held
    n244["A browser kept in memory<br/><small>Function</small>"]:::held
    n245["Browser script<br/><small>Port</small>"]:::neutral
    n246["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n247["A command's line, read<br/><small>Function</small>"]:::held
    n248["Commands, their lines read and their answers written<br/><small>Function</small>"]:::held
    n249["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n250["Project files<br/><small>Port</small>"]:::neutral
    n251["Files kept in memory<br/><small>Function</small>"]:::held
    n252["Files written<br/><small>Port</small>"]:::neutral
    n253["Headless browser<br/><small>Port</small>"]:::neutral
    n254["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n255["What std's exposures say of a line<br/><small>Message catalog</small>"]:::neutral
    n256["Long options<br/><small>Standard</small>"]:::neutral
    n257["The machine's files<br/><small>Implementation</small>"]:::neutral
    n258["What the machine must also have<br/><small>Port</small>"]:::neutral
    n259["Node's command line<br/><small>Implementation</small>"]:::neutral
    n260["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n261["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n262["Where a package comes from<br/><small>Port</small>"]:::neutral
    n263["Playwright's API<br/><small>Standard</small>"]:::neutral
    n264["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n265["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n266["Playwright<br/><small>Package</small>"]:::held
    n267["Commands of a program<br/><small>Port</small>"]:::neutral
    n268["Programs run<br/><small>Port</small>"]:::neutral
    n269["Programs run in memory<br/><small>Function</small>"]:::held
    n270["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n271["What repairs a project<br/><small>Port</small>"]:::neutral
    n272["The options of every command<br/><small>Decision</small>"]:::neutral
    n273["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n274["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n275["CSSOM View<br/><small>Standard</small>"]:::neutral
    n276["HTTP<br/><small>Standard</small>"]:::neutral
    n277["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n278["Media types<br/><small>Standard</small>"]:::neutral
    n279["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n280["Server-sent events<br/><small>Standard</small>"]:::neutral
    n281["UI events<br/><small>Standard</small>"]:::neutral
    n282["URI<br/><small>Standard</small>"]:::neutral
    n283["Web Audio API<br/><small>Standard</small>"]:::neutral
    n284["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n14 -->|Written in| n246
  n15 -->|Depends on| n267
  n16 -->|Serves| n110
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n156
  n16 -->|Depends on| n167
  n16 -->|Depends on| n14
  n16 -->|Depends on| n227
  n16 -->|Depends on| n4
  n16 -->|Depends on| n236
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n110
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n156
  n17 -->|Depends on| n167
  n17 -->|Depends on| n14
  n17 -->|Depends on| n227
  n17 -->|Depends on| n4
  n17 -->|Depends on| n236
  n17 -->|Depends on| n6
  n18 -->|Serves| n110
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n250
  n18 -->|Depends on| n268
  n18 -->|Depends on| n14
  n18 -->|Depends on| n227
  n18 -->|Depends on| n5
  n18 -->|Depends on| n236
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
  n30 -->|Written in| n246
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
  n93 -->|Depends on| n281
  n94 -->|Implements| n102
  n95 -->|Implements| n106
  n95 -->|Depends on| n51
  n95 -->|Depends on| n284
  n96 -->|Implements| n103
  n96 -->|Depends on| n279
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
  n146 -->|Serves| n110
  n146 -->|Serves| n111
  n146 -->|Serves| n112
  n146 -->|Serves| n113
  n146 -->|Serves| n114
  n146 -->|Serves| n115
  n146 -->|Serves| n116
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
  n151 -->|Serves| n111
  n151 -->|Serves| n112
  n151 -->|Serves| n113
  n151 -->|Serves| n114
  n151 -->|Serves| n115
  n152 -->|Serves| n111
  n152 -->|Serves| n112
  n152 -->|Serves| n113
  n152 -->|Serves| n114
  n152 -->|Serves| n115
  n154 -->|Implements| n153
  n154 -->|Depends on| n161
  n154 -->|Depends on| n165
  n154 -->|Depends on| n166
  n154 -->|Depends on| n229
  n154 -->|Depends on| n231
  n154 -->|Depends on| n227
  n155 -->|Implements| n153
  n155 -->|Depends on| n161
  n155 -->|Depends on| n165
  n155 -->|Depends on| n164
  n155 -->|Depends on| n229
  n155 -->|Depends on| n231
  n155 -->|Depends on| n227
  n155 -->|Depends on| n6
  n157 -->|Serves| n113
  n157 -->|Implements| n156
  n157 -->|Implements| n158
  n159 -->|Implements| n156
  n159 -->|Depends on| n160
  n159 -->|Depends on| n229
  n159 -->|Depends on| n231
  n159 -->|Depends on| n227
  n159 -->|Depends on| n6
  n159 -->|Depends on| n240
  n160 -->|Serves| n111
  n161 -->|Serves| n111
  n162 -->|Implements| n167
  n162 -->|Depends on| n165
  n162 -->|Depends on| n164
  n162 -->|Depends on| n229
  n162 -->|Depends on| n231
  n162 -->|Depends on| n227
  n162 -->|Depends on| n6
  n162 -->|Depends on| n7
  n162 -->|Depends on| n153
  n163 -->|Implements| n170
  n163 -->|Depends on| n165
  n163 -->|Depends on| n229
  n163 -->|Depends on| n231
  n163 -->|Depends on| n227
  n163 -->|Depends on| n166
  n163 -->|Depends on| n6
  n163 -->|Depends on| n7
  n164 -->|Serves| n111
  n165 -->|Serves| n111
  n166 -->|Serves| n111
  n168 -->|Serves| n113
  n168 -->|Implements| n167
  n168 -->|Implements| n169
  n168 -->|Depends on| n165
  n168 -->|Depends on| n164
  n168 -->|Depends on| n6
  n171 -->|Serves| n113
  n171 -->|Depends on| n174
  n172 -->|Serves| n113
  n172 -->|Implements| n170
  n172 -->|Implements| n173
  n174 -->|Serves| n113
  n175 -->|Serves| n113
  n175 -->|Applied by| n166
  n175 -->|Applied by| n174
  n175 -->|Applied by| n171
  n175 -->|Applied by| n170
  n175 -->|Applied by| n163
  n175 -->|Applied by| n173
  n175 -->|Applied by| n172
  n176 -->|Serves| n115
  n177 -->|Refines| n115
  n177 -->|Depends on| n4
  n178 -->|Accepts| n177
  n179 -->|Refines| n115
  n179 -->|Depends on| n4
  n180 -->|Accepts| n179
  n181 -->|Refines| n115
  n182 -->|Accepts| n181
  n183 -->|Refines| n115
  n183 -->|Depends on| n4
  n184 -->|Accepts| n183
  n185 -->|Refines| n115
  n185 -->|Depends on| n4
  n186 -->|Accepts| n185
  n187 -->|Verifies| n26
  n187 -->|In| n212
  n187 -->|Depends on| n26
  n187 -->|Depends on| n27
  n187 -->|Depends on| n205
  n187 -->|Depends on| n203
  n188 -->|Verifies| n100
  n188 -->|Verifies| n109
  n188 -->|Verifies| n90
  n188 -->|Verifies| n99
  n188 -->|In| n212
  n188 -->|Depends on| n102
  n188 -->|Depends on| n106
  n188 -->|Depends on| n105
  n188 -->|Depends on| n103
  n188 -->|Depends on| n104
  n188 -->|Depends on| n89
  n188 -->|Depends on| n108
  n188 -->|Depends on| n205
  n188 -->|Depends on| n4
  n188 -->|Depends on| n203
  n189 -->|Verifies| n11
  n189 -->|In| n212
  n189 -->|Depends on| n11
  n189 -->|Depends on| n205
  n189 -->|Depends on| n4
  n189 -->|Depends on| n203
  n190 -->|Chooses| n243
  n190 -->|In| n212
  n190 -->|Follows| n86
  n190 -->|Serves| n113
  n191 -->|Serves| n113
  n191 -->|Applied by| n192
  n191 -->|Applied by| n209
  n191 -->|Applied by| n195
  n191 -->|Applied by| n211
  n191 -->|Applied by| n201
  n191 -->|Applied by| n190
  n192 -->|Chooses| n100
  n192 -->|Chooses| n109
  n192 -->|Chooses| n90
  n192 -->|Chooses| n99
  n192 -->|Chooses| n251
  n192 -->|Chooses| n244
  n192 -->|Chooses| n172
  n192 -->|Chooses| n157
  n192 -->|Chooses| n168
  n192 -->|Chooses| n269
  n192 -->|In| n212
  n192 -->|Follows| n88
  n192 -->|Serves| n113
  n193 -->|Verifies| n42
  n193 -->|In| n212
  n193 -->|Depends on| n44
  n193 -->|Depends on| n203
  n194 -->|Verifies| n43
  n194 -->|In| n210
  n194 -->|Depends on| n44
  n194 -->|Depends on| n203
  n195 -->|Chooses| n42
  n195 -->|In| n212
  n195 -->|Follows| n88
  n195 -->|Serves| n113
  n196 -->|Verifies| n35
  n196 -->|In| n212
  n196 -->|Depends on| n31
  n196 -->|Depends on| n48
  n196 -->|Depends on| n47
  n196 -->|Depends on| n4
  n196 -->|Depends on| n203
  n197 -->|Verifies| n248
  n197 -->|Verifies| n247
  n197 -->|Verifies| n243
  n197 -->|In| n212
  n197 -->|Depends on| n248
  n197 -->|Depends on| n247
  n197 -->|Depends on| n204
  n197 -->|Depends on| n239
  n197 -->|Depends on| n256
  n197 -->|Depends on| n272
  n197 -->|Depends on| n227
  n197 -->|Depends on| n255
  n197 -->|Depends on| n203
  n198 -->|Verifies| n16
  n198 -->|Verifies| n17
  n198 -->|Verifies| n157
  n198 -->|Verifies| n168
  n198 -->|Verifies| n208
  n198 -->|In| n212
  n198 -->|Depends on| n17
  n198 -->|Depends on| n16
  n198 -->|Depends on| n158
  n198 -->|Depends on| n169
  n198 -->|Depends on| n205
  n198 -->|Depends on| n14
  n198 -->|Depends on| n203
  n198 -->|Depends on| n4
  n198 -->|Depends on| n227
  n199 -->|Verifies| n18
  n199 -->|Verifies| n269
  n199 -->|Verifies| n207
  n199 -->|In| n212
  n199 -->|Depends on| n18
  n199 -->|Depends on| n250
  n199 -->|Depends on| n270
  n199 -->|Depends on| n205
  n199 -->|Depends on| n14
  n199 -->|Depends on| n203
  n199 -->|Depends on| n4
  n199 -->|Depends on| n5
  n199 -->|Depends on| n227
  n200 -->|Verifies| n17
  n200 -->|Verifies| n157
  n200 -->|Verifies| n168
  n200 -->|Verifies| n208
  n200 -->|In| n212
  n200 -->|Depends on| n17
  n200 -->|Depends on| n158
  n200 -->|Depends on| n169
  n200 -->|Depends on| n205
  n200 -->|Depends on| n14
  n200 -->|Depends on| n203
  n200 -->|Depends on| n4
  n200 -->|Depends on| n227
  n201 -->|Chooses| n35
  n201 -->|In| n212
  n201 -->|Follows| n83
  n201 -->|Serves| n113
  n202 -->|Verifies| n172
  n202 -->|Verifies| n171
  n202 -->|In| n212
  n202 -->|Depends on| n170
  n202 -->|Depends on| n173
  n202 -->|Depends on| n171
  n202 -->|Depends on| n205
  n202 -->|Depends on| n203
  n202 -->|Depends on| n4
  n203 -->|Written in| n206
  n207 -->|Serves| n113
  n207 -->|Implements| n19
  n207 -->|Depends on| n205
  n208 -->|Serves| n113
  n208 -->|Implements| n20
  n208 -->|Depends on| n205
  n209 -->|Chooses| n208
  n209 -->|Chooses| n207
  n209 -->|In| n212
  n209 -->|Follows| n88
  n209 -->|Serves| n113
  n211 -->|Chooses| n43
  n211 -->|In| n210
  n211 -->|Follows| n88
  n211 -->|Serves| n113
  n213 -->|Verifies| n251
  n213 -->|Verifies| n244
  n213 -->|In| n212
  n213 -->|Depends on| n250
  n213 -->|Depends on| n252
  n213 -->|Depends on| n253
  n213 -->|Depends on| n245
  n213 -->|Depends on| n205
  n213 -->|Depends on| n203
  n214 -->|Applies the family| n63
  n214 -->|Serves| n116
  n215 -->|Applies the family| n69
  n215 -->|Serves| n116
  n216 -->|Applies the family| n58
  n216 -->|Serves| n116
  n217 -->|Applies the family| n77
  n217 -->|Serves| n116
  n218 -->|Ships| n225
  n218 -->|Follows the policy| n226
  n219 -->|Applies the family| n73
  n219 -->|Serves| n116
  n221 -->|Runs elsewhere| n218
  n221 -->|Its writer's settings| n220
  n222 -->|Applies the family| n75
  n222 -->|Serves| n116
  n223 -->|Applies the family| n71
  n223 -->|Serves| n116
  n224 -->|Ships| n221
  n226 -->|Its obligations| n217
  n226 -->|Its obligations| n222
  n226 -->|Its obligations| n216
  n226 -->|Its obligations| n223
  n226 -->|Its obligations| n219
  n226 -->|Its obligations| n214
  n226 -->|Its obligations| n215
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
  n237 -->|Serves| n111
  n238 -->|Serves| n111
  n240 -->|Serves| n111
  n241 -->|Serves| n111
  n243 -->|Serves| n113
  n243 -->|Implements| n242
  n243 -->|Depends on| n278
  n243 -->|Depends on| n239
  n243 -->|Depends on| n4
  n244 -->|Implements| n253
  n244 -->|Implements| n245
  n244 -->|Depends on| n4
  n247 -->|Serves| n113
  n247 -->|Depends on| n256
  n247 -->|Depends on| n272
  n247 -->|Depends on| n5
  n247 -->|Depends on| n4
  n248 -->|Serves| n113
  n248 -->|Depends on| n247
  n248 -->|Depends on| n242
  n248 -->|Depends on| n256
  n248 -->|Depends on| n272
  n248 -->|Depends on| n227
  n248 -->|Depends on| n7
  n248 -->|Depends on| n5
  n248 -->|Depends on| n4
  n248 -->|Depends on| n255
  n249 -->|Implements| n267
  n249 -->|Depends on| n227
  n249 -->|Depends on| n248
  n251 -->|Implements| n250
  n251 -->|Implements| n252
  n251 -->|Depends on| n11
  n251 -->|Depends on| n6
  n255 -->|Written in| n246
  n256 -->|Serves| n111
  n257 -->|Implements| n250
  n257 -->|Depends on| n12
  n257 -->|Depends on| n230
  n259 -->|Implements| n267
  n259 -->|Depends on| n228
  n259 -->|Depends on| n227
  n259 -->|Depends on| n7
  n259 -->|Depends on| n248
  n260 -->|Implements| n268
  n260 -->|Depends on| n229
  n260 -->|Depends on| n231
  n260 -->|Depends on| n227
  n260 -->|Depends on| n236
  n261 -->|Serves| n113
  n263 -->|Serves| n111
  n264 -->|Implements| n253
  n264 -->|Uses| n266
  n264 -->|Depends on| n254
  n264 -->|Depends on| n263
  n264 -->|Depends on| n4
  n264 -->|Depends on| n55
  n265 -->|Implements| n258
  n265 -->|Uses| n266
  n265 -->|Depends on| n274
  n269 -->|Serves| n113
  n269 -->|Implements| n268
  n269 -->|Implements| n270
  n269 -->|Depends on| n227
  n269 -->|Depends on| n250
  n273 -->|Serves| n113
  n273 -->|Applied by| n267
  n273 -->|Applied by| n259
  n273 -->|Applied by| n249
  n273 -->|Applied by| n258
  n273 -->|Applied by| n265
  n273 -->|Applied by| n271
  n273 -->|Applied by| n250
  n273 -->|Applied by| n252
  n273 -->|Applied by| n257
  n273 -->|Applied by| n251
  n273 -->|Applied by| n253
  n273 -->|Applied by| n264
  n273 -->|Applied by| n245
  n273 -->|Applied by| n244
  n273 -->|Applied by| n262
  n274 -->|Written in| n246
  n275 -->|Serves| n111
  n276 -->|Serves| n111
  n277 -->|Serves| n111
  n278 -->|Serves| n111
  n279 -->|Serves| n111
  n280 -->|Serves| n111
  n281 -->|Serves| n111
  n282 -->|Serves| n111
  n283 -->|Serves| n111
  n284 -->|Serves| n111
  n36 -.->|Refines| n6
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
