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
    n147["Version 0.31.0<br/><small>Release</small>"]:::neutral
    n148["Version 0.32.0<br/><small>Release</small>"]:::neutral
    n149["Version 0.33.0<br/><small>Release</small>"]:::neutral
    n150["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n151["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n152["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n153["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n154["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n155["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n156["The automatic merge<br/><small>Port</small>"]:::neutral
    n157["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n158["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n159["The branches<br/><small>Port</small>"]:::neutral
    n160["Branches kept in memory<br/><small>Function</small>"]:::held
    n161["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n162["Git's branches<br/><small>Implementation</small>"]:::neutral
    n163["Git's command line<br/><small>Standard</small>"]:::neutral
    n164["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n165["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n166["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n167["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n168["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n169["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n170["Pull requests<br/><small>Port</small>"]:::neutral
    n171["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n172["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n173["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n174["A repository compared with its settings<br/><small>Function</small>"]:::held
    n175["A repository kept in memory<br/><small>Function</small>"]:::held
    n176["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n177["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n178["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n179["Directions<br/><small>Vocabulary</small>"]:::neutral
    n180["As many links as asked<br/><small>Requirement</small>"]:::held
    n181["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n182["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n183["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n184["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n185["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n186["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n187["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n188["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n189["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph running["Standard library · Running"]
    n190["A clock stopped<br/><small>Function</small>"]:::held
    n191["Serving HTTP<br/><small>Port</small>"]:::neutral
    n192["Lines kept<br/><small>Function</small>"]:::held
    n193["The lines printed<br/><small>Port</small>"]:::neutral
    n194["Printing as it goes<br/><small>Port</small>"]:::neutral
    n195["The machine's clock<br/><small>Implementation</small>"]:::neutral
    n196["The machine's timers<br/><small>Implementation</small>"]:::held
    n197["A server of Node.js<br/><small>Implementation</small>"]:::neutral
    n198["A command that keeps running asks the machine through ports<br/><small>Architecture decision</small>"]:::held
    n199["What a realization of this module says<br/><small>Message catalog</small>"]:::neutral
    n200["The instant of the scenarios<br/><small>Decision</small>"]:::neutral
    n201["A server in memory<br/><small>Function</small>"]:::held
    n202["The server asked<br/><small>Port</small>"]:::neutral
    n203["The standard output<br/><small>Implementation</small>"]:::neutral
    n204["The clock<br/><small>Port</small>"]:::neutral
    n205["Timers<br/><small>Port</small>"]:::neutral
  end
  subgraph scenarios["Standard library · Scenarios"]
    n206["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n207["The device, in memory<br/><small>Scenario</small>"]:::held
    n208["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n209["The formats of the scenarios<br/><small>Technical choice</small>"]:::held
    n210["How the library's scenarios run<br/><small>Architecture decision</small>"]:::held
    n211["In memory<br/><small>Technical choice</small>"]:::held
    n212["Judged as the language says<br/><small>Scenario</small>"]:::held
    n213["Judged strictly<br/><small>Scenario</small>"]:::held
    n214["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n215["The languages read by the engine<br/><small>Scenario</small>"]:::held
    n216["A command's line read, its answer written<br/><small>Scenario</small>"]:::held
    n217["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n218["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n219["A pull request opened<br/><small>Scenario</small>"]:::held
    n220["Read by the engine that builds<br/><small>Technical choice</small>"]:::held
    n221["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n222["Running, in memory<br/><small>Scenario</small>"]:::held
    n223["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n224["A command's line, in the scenarios<br/><small>Decision</small>"]:::neutral
    n225["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n226["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n227["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n228["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n229["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n230["Strict<br/><small>Environment</small>"]:::neutral
    n231["Judged strictly<br/><small>Technical choice</small>"]:::held
    n232["Test<br/><small>Environment</small>"]:::neutral
    n233["The tooling, in memory<br/><small>Scenario</small>"]:::held
    n234["Waiting on the machine<br/><small>Technical choice</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n235["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n236["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n237["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n238["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n239["The next version<br/><small>Shipment</small>"]:::unknown
    n240["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n241["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n242["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n243["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n244["Its rules held<br/><small>Obligation</small>"]:::neutral
    n245["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n246["The standard library<br/><small>Artefact</small>"]:::unknown
    n247["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n248["Exit status<br/><small>Standard</small>"]:::neutral
    n249["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n250["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n251["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n252["Node.js events<br/><small>Standard</small>"]:::neutral
    n253["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n254["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n255["npm's command line<br/><small>Standard</small>"]:::neutral
    n256["npm's manifest<br/><small>Standard</small>"]:::neutral
    n257["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n258["Positions in a file<br/><small>Standard</small>"]:::neutral
    n259["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n260["JSON formatting<br/><small>Decision</small>"]:::neutral
    n261["Text file<br/><small>Standard</small>"]:::neutral
    n262["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n263["Formats of an answer<br/><small>Port</small>"]:::neutral
    n264["Documents in JSON<br/><small>Function</small>"]:::held
    n265["A browser kept in memory<br/><small>Function</small>"]:::held
    n266["Browser script<br/><small>Port</small>"]:::neutral
    n267["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n268["A command's line, read<br/><small>Function</small>"]:::held
    n269["Commands, their lines read and their answers written<br/><small>Function</small>"]:::held
    n270["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n271["Project files<br/><small>Port</small>"]:::neutral
    n272["Files kept in memory<br/><small>Function</small>"]:::held
    n273["Files written<br/><small>Port</small>"]:::neutral
    n274["Headless browser<br/><small>Port</small>"]:::neutral
    n275["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n276["What std's exposures say of a line<br/><small>Message catalog</small>"]:::neutral
    n277["Long options<br/><small>Standard</small>"]:::neutral
    n278["The machine's files<br/><small>Implementation</small>"]:::neutral
    n279["What the machine must also have<br/><small>Port</small>"]:::neutral
    n280["Node's command line<br/><small>Implementation</small>"]:::neutral
    n281["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n282["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n283["Where a package comes from<br/><small>Port</small>"]:::neutral
    n284["Playwright's API<br/><small>Standard</small>"]:::neutral
    n285["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n286["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n287["Playwright<br/><small>Package</small>"]:::held
    n288["Commands of a program<br/><small>Port</small>"]:::neutral
    n289["Programs run<br/><small>Port</small>"]:::neutral
    n290["Programs run in memory<br/><small>Function</small>"]:::held
    n291["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n292["What repairs a project<br/><small>Port</small>"]:::neutral
    n293["The options of every command<br/><small>Decision</small>"]:::neutral
    n294["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n295["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n296["CSSOM View<br/><small>Standard</small>"]:::neutral
    n297["HTTP<br/><small>Standard</small>"]:::neutral
    n298["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n299["Media types<br/><small>Standard</small>"]:::neutral
    n300["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n301["Server-sent events<br/><small>Standard</small>"]:::neutral
    n302["UI events<br/><small>Standard</small>"]:::neutral
    n303["URI<br/><small>Standard</small>"]:::neutral
    n304["Web Audio API<br/><small>Standard</small>"]:::neutral
    n305["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n14 -->|Written in| n267
  n15 -->|Depends on| n288
  n16 -->|Serves| n110
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n159
  n16 -->|Depends on| n170
  n16 -->|Depends on| n14
  n16 -->|Depends on| n248
  n16 -->|Depends on| n4
  n16 -->|Depends on| n257
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n110
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n159
  n17 -->|Depends on| n170
  n17 -->|Depends on| n14
  n17 -->|Depends on| n248
  n17 -->|Depends on| n4
  n17 -->|Depends on| n257
  n17 -->|Depends on| n6
  n18 -->|Serves| n110
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n271
  n18 -->|Depends on| n289
  n18 -->|Depends on| n14
  n18 -->|Depends on| n248
  n18 -->|Depends on| n5
  n18 -->|Depends on| n257
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
  n30 -->|Written in| n267
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
  n93 -->|Depends on| n302
  n94 -->|Implements| n102
  n95 -->|Implements| n106
  n95 -->|Depends on| n51
  n95 -->|Depends on| n305
  n96 -->|Implements| n103
  n96 -->|Depends on| n300
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
  n147 -->|Serves| n110
  n147 -->|Serves| n111
  n147 -->|Serves| n112
  n147 -->|Serves| n113
  n147 -->|Serves| n114
  n147 -->|Serves| n115
  n147 -->|Serves| n116
  n148 -->|Serves| n110
  n148 -->|Serves| n111
  n148 -->|Serves| n112
  n148 -->|Serves| n113
  n148 -->|Serves| n114
  n148 -->|Serves| n115
  n148 -->|Serves| n116
  n149 -->|Serves| n110
  n149 -->|Serves| n111
  n149 -->|Serves| n112
  n149 -->|Serves| n113
  n149 -->|Serves| n114
  n149 -->|Serves| n115
  n149 -->|Serves| n116
  n150 -->|Serves| n111
  n150 -->|Serves| n112
  n150 -->|Serves| n113
  n150 -->|Serves| n114
  n151 -->|Serves| n111
  n151 -->|Serves| n112
  n151 -->|Serves| n113
  n151 -->|Serves| n114
  n152 -->|Serves| n111
  n152 -->|Serves| n112
  n152 -->|Serves| n113
  n152 -->|Serves| n114
  n153 -->|Serves| n111
  n153 -->|Serves| n112
  n153 -->|Serves| n113
  n153 -->|Serves| n114
  n154 -->|Serves| n111
  n154 -->|Serves| n112
  n154 -->|Serves| n113
  n154 -->|Serves| n114
  n154 -->|Serves| n115
  n155 -->|Serves| n111
  n155 -->|Serves| n112
  n155 -->|Serves| n113
  n155 -->|Serves| n114
  n155 -->|Serves| n115
  n157 -->|Implements| n156
  n157 -->|Depends on| n164
  n157 -->|Depends on| n168
  n157 -->|Depends on| n169
  n157 -->|Depends on| n250
  n157 -->|Depends on| n252
  n157 -->|Depends on| n248
  n158 -->|Implements| n156
  n158 -->|Depends on| n164
  n158 -->|Depends on| n168
  n158 -->|Depends on| n167
  n158 -->|Depends on| n250
  n158 -->|Depends on| n252
  n158 -->|Depends on| n248
  n158 -->|Depends on| n6
  n160 -->|Serves| n113
  n160 -->|Implements| n159
  n160 -->|Implements| n161
  n162 -->|Implements| n159
  n162 -->|Depends on| n163
  n162 -->|Depends on| n250
  n162 -->|Depends on| n252
  n162 -->|Depends on| n248
  n162 -->|Depends on| n6
  n162 -->|Depends on| n261
  n163 -->|Serves| n111
  n164 -->|Serves| n111
  n165 -->|Implements| n170
  n165 -->|Depends on| n168
  n165 -->|Depends on| n167
  n165 -->|Depends on| n250
  n165 -->|Depends on| n252
  n165 -->|Depends on| n248
  n165 -->|Depends on| n6
  n165 -->|Depends on| n7
  n165 -->|Depends on| n156
  n166 -->|Implements| n173
  n166 -->|Depends on| n168
  n166 -->|Depends on| n250
  n166 -->|Depends on| n252
  n166 -->|Depends on| n248
  n166 -->|Depends on| n169
  n166 -->|Depends on| n6
  n166 -->|Depends on| n7
  n167 -->|Serves| n111
  n168 -->|Serves| n111
  n169 -->|Serves| n111
  n171 -->|Serves| n113
  n171 -->|Implements| n170
  n171 -->|Implements| n172
  n171 -->|Depends on| n168
  n171 -->|Depends on| n167
  n171 -->|Depends on| n6
  n174 -->|Serves| n113
  n174 -->|Depends on| n177
  n175 -->|Serves| n113
  n175 -->|Implements| n173
  n175 -->|Implements| n176
  n177 -->|Serves| n113
  n178 -->|Serves| n113
  n178 -->|Applied by| n169
  n178 -->|Applied by| n177
  n178 -->|Applied by| n174
  n178 -->|Applied by| n173
  n178 -->|Applied by| n166
  n178 -->|Applied by| n176
  n178 -->|Applied by| n175
  n179 -->|Serves| n115
  n180 -->|Refines| n115
  n180 -->|Depends on| n4
  n181 -->|Accepts| n180
  n182 -->|Refines| n115
  n182 -->|Depends on| n4
  n183 -->|Accepts| n182
  n184 -->|Refines| n115
  n185 -->|Accepts| n184
  n186 -->|Refines| n115
  n186 -->|Depends on| n4
  n187 -->|Accepts| n186
  n188 -->|Refines| n115
  n188 -->|Depends on| n4
  n189 -->|Accepts| n188
  n190 -->|Serves| n113
  n190 -->|Implements| n204
  n190 -->|Depends on| n200
  n192 -->|Serves| n113
  n192 -->|Implements| n194
  n192 -->|Implements| n193
  n195 -->|Implements| n204
  n196 -->|Implements| n205
  n197 -->|Implements| n191
  n198 -->|Serves| n113
  n198 -->|Applied by| n204
  n198 -->|Applied by| n205
  n198 -->|Applied by| n191
  n198 -->|Applied by| n194
  n198 -->|Applied by| n195
  n198 -->|Applied by| n196
  n198 -->|Applied by| n197
  n198 -->|Applied by| n203
  n198 -->|Applied by| n190
  n198 -->|Applied by| n201
  n198 -->|Applied by| n192
  n199 -->|Written in| n267
  n201 -->|Serves| n113
  n201 -->|Implements| n191
  n201 -->|Implements| n202
  n201 -->|Depends on| n252
  n201 -->|Depends on| n297
  n201 -->|Depends on| n6
  n201 -->|Depends on| n199
  n203 -->|Implements| n194
  n206 -->|Verifies| n26
  n206 -->|In| n232
  n206 -->|Depends on| n26
  n206 -->|Depends on| n27
  n206 -->|Depends on| n225
  n206 -->|Depends on| n223
  n207 -->|Verifies| n100
  n207 -->|Verifies| n109
  n207 -->|Verifies| n90
  n207 -->|Verifies| n99
  n207 -->|In| n232
  n207 -->|Depends on| n102
  n207 -->|Depends on| n106
  n207 -->|Depends on| n105
  n207 -->|Depends on| n103
  n207 -->|Depends on| n104
  n207 -->|Depends on| n89
  n207 -->|Depends on| n108
  n207 -->|Depends on| n225
  n207 -->|Depends on| n4
  n207 -->|Depends on| n223
  n208 -->|Verifies| n11
  n208 -->|In| n232
  n208 -->|Depends on| n11
  n208 -->|Depends on| n225
  n208 -->|Depends on| n4
  n208 -->|Depends on| n223
  n209 -->|Chooses| n264
  n209 -->|In| n232
  n209 -->|Follows| n86
  n209 -->|Serves| n113
  n210 -->|Serves| n113
  n210 -->|Applied by| n211
  n210 -->|Applied by| n234
  n210 -->|Applied by| n229
  n210 -->|Applied by| n214
  n210 -->|Applied by| n231
  n210 -->|Applied by| n220
  n210 -->|Applied by| n209
  n211 -->|Chooses| n100
  n211 -->|Chooses| n109
  n211 -->|Chooses| n90
  n211 -->|Chooses| n99
  n211 -->|Chooses| n272
  n211 -->|Chooses| n265
  n211 -->|Chooses| n175
  n211 -->|Chooses| n160
  n211 -->|Chooses| n171
  n211 -->|Chooses| n290
  n211 -->|Chooses| n190
  n211 -->|Chooses| n201
  n211 -->|Chooses| n192
  n211 -->|In| n232
  n211 -->|Follows| n88
  n211 -->|Serves| n113
  n212 -->|Verifies| n42
  n212 -->|In| n232
  n212 -->|Depends on| n44
  n212 -->|Depends on| n223
  n213 -->|Verifies| n43
  n213 -->|In| n230
  n213 -->|Depends on| n44
  n213 -->|Depends on| n223
  n214 -->|Chooses| n42
  n214 -->|In| n232
  n214 -->|Follows| n88
  n214 -->|Serves| n113
  n215 -->|Verifies| n35
  n215 -->|In| n232
  n215 -->|Depends on| n31
  n215 -->|Depends on| n48
  n215 -->|Depends on| n47
  n215 -->|Depends on| n4
  n215 -->|Depends on| n225
  n215 -->|Depends on| n223
  n216 -->|Verifies| n269
  n216 -->|Verifies| n268
  n216 -->|Verifies| n264
  n216 -->|In| n232
  n216 -->|Depends on| n269
  n216 -->|Depends on| n268
  n216 -->|Depends on| n224
  n216 -->|Depends on| n260
  n216 -->|Depends on| n277
  n216 -->|Depends on| n293
  n216 -->|Depends on| n248
  n216 -->|Depends on| n276
  n216 -->|Depends on| n223
  n217 -->|Verifies| n16
  n217 -->|Verifies| n17
  n217 -->|Verifies| n160
  n217 -->|Verifies| n171
  n217 -->|Verifies| n228
  n217 -->|In| n232
  n217 -->|Depends on| n17
  n217 -->|Depends on| n16
  n217 -->|Depends on| n161
  n217 -->|Depends on| n172
  n217 -->|Depends on| n225
  n217 -->|Depends on| n14
  n217 -->|Depends on| n223
  n217 -->|Depends on| n4
  n217 -->|Depends on| n248
  n218 -->|Verifies| n18
  n218 -->|Verifies| n290
  n218 -->|Verifies| n227
  n218 -->|In| n232
  n218 -->|Depends on| n18
  n218 -->|Depends on| n271
  n218 -->|Depends on| n291
  n218 -->|Depends on| n225
  n218 -->|Depends on| n14
  n218 -->|Depends on| n223
  n218 -->|Depends on| n4
  n218 -->|Depends on| n5
  n218 -->|Depends on| n248
  n219 -->|Verifies| n17
  n219 -->|Verifies| n160
  n219 -->|Verifies| n171
  n219 -->|Verifies| n228
  n219 -->|In| n232
  n219 -->|Depends on| n17
  n219 -->|Depends on| n161
  n219 -->|Depends on| n172
  n219 -->|Depends on| n225
  n219 -->|Depends on| n14
  n219 -->|Depends on| n223
  n219 -->|Depends on| n4
  n219 -->|Depends on| n248
  n220 -->|Chooses| n35
  n220 -->|In| n232
  n220 -->|Follows| n83
  n220 -->|Serves| n113
  n221 -->|Verifies| n175
  n221 -->|Verifies| n174
  n221 -->|In| n232
  n221 -->|Depends on| n173
  n221 -->|Depends on| n176
  n221 -->|Depends on| n174
  n221 -->|Depends on| n225
  n221 -->|Depends on| n223
  n221 -->|Depends on| n4
  n222 -->|Verifies| n190
  n222 -->|Verifies| n201
  n222 -->|Verifies| n192
  n222 -->|Verifies| n196
  n222 -->|In| n232
  n222 -->|Depends on| n204
  n222 -->|Depends on| n200
  n222 -->|Depends on| n191
  n222 -->|Depends on| n202
  n222 -->|Depends on| n205
  n222 -->|Depends on| n194
  n222 -->|Depends on| n193
  n222 -->|Depends on| n252
  n222 -->|Depends on| n6
  n222 -->|Depends on| n225
  n222 -->|Depends on| n223
  n223 -->|Written in| n226
  n227 -->|Serves| n113
  n227 -->|Implements| n19
  n227 -->|Depends on| n225
  n228 -->|Serves| n113
  n228 -->|Implements| n20
  n228 -->|Depends on| n225
  n229 -->|Chooses| n228
  n229 -->|Chooses| n227
  n229 -->|In| n232
  n229 -->|Follows| n88
  n229 -->|Serves| n113
  n231 -->|Chooses| n43
  n231 -->|In| n230
  n231 -->|Follows| n88
  n231 -->|Serves| n113
  n233 -->|Verifies| n272
  n233 -->|Verifies| n265
  n233 -->|In| n232
  n233 -->|Depends on| n271
  n233 -->|Depends on| n273
  n233 -->|Depends on| n274
  n233 -->|Depends on| n266
  n233 -->|Depends on| n225
  n233 -->|Depends on| n223
  n234 -->|Chooses| n196
  n234 -->|In| n232
  n234 -->|Follows| n83
  n234 -->|Serves| n113
  n235 -->|Applies the family| n63
  n235 -->|Serves| n116
  n236 -->|Applies the family| n69
  n236 -->|Serves| n116
  n237 -->|Applies the family| n58
  n237 -->|Serves| n116
  n238 -->|Applies the family| n77
  n238 -->|Serves| n116
  n239 -->|Ships| n246
  n239 -->|Follows the policy| n247
  n240 -->|Applies the family| n73
  n240 -->|Serves| n116
  n242 -->|Runs elsewhere| n239
  n242 -->|Its writer's settings| n241
  n243 -->|Applies the family| n75
  n243 -->|Serves| n116
  n244 -->|Applies the family| n71
  n244 -->|Serves| n116
  n245 -->|Ships| n242
  n247 -->|Its obligations| n238
  n247 -->|Its obligations| n243
  n247 -->|Its obligations| n237
  n247 -->|Its obligations| n244
  n247 -->|Its obligations| n240
  n247 -->|Its obligations| n235
  n247 -->|Its obligations| n236
  n248 -->|Serves| n111
  n249 -->|Serves| n111
  n250 -->|Serves| n111
  n251 -->|Serves| n111
  n252 -->|Serves| n111
  n253 -->|Serves| n111
  n254 -->|Serves| n111
  n255 -->|Serves| n111
  n256 -->|Serves| n111
  n257 -->|Serves| n111
  n258 -->|Serves| n111
  n259 -->|Serves| n111
  n261 -->|Serves| n111
  n262 -->|Serves| n111
  n264 -->|Serves| n113
  n264 -->|Implements| n263
  n264 -->|Depends on| n299
  n264 -->|Depends on| n260
  n264 -->|Depends on| n4
  n265 -->|Implements| n274
  n265 -->|Implements| n266
  n265 -->|Depends on| n4
  n268 -->|Serves| n113
  n268 -->|Depends on| n277
  n268 -->|Depends on| n293
  n268 -->|Depends on| n5
  n268 -->|Depends on| n4
  n269 -->|Serves| n113
  n269 -->|Depends on| n268
  n269 -->|Depends on| n263
  n269 -->|Depends on| n277
  n269 -->|Depends on| n293
  n269 -->|Depends on| n248
  n269 -->|Depends on| n7
  n269 -->|Depends on| n5
  n269 -->|Depends on| n4
  n269 -->|Depends on| n276
  n270 -->|Implements| n288
  n270 -->|Depends on| n248
  n270 -->|Depends on| n269
  n272 -->|Implements| n271
  n272 -->|Implements| n273
  n272 -->|Depends on| n11
  n272 -->|Depends on| n6
  n276 -->|Written in| n267
  n277 -->|Serves| n111
  n278 -->|Implements| n271
  n278 -->|Depends on| n12
  n278 -->|Depends on| n251
  n280 -->|Implements| n288
  n280 -->|Depends on| n249
  n280 -->|Depends on| n248
  n280 -->|Depends on| n7
  n280 -->|Depends on| n269
  n281 -->|Implements| n289
  n281 -->|Depends on| n250
  n281 -->|Depends on| n252
  n281 -->|Depends on| n248
  n281 -->|Depends on| n257
  n282 -->|Serves| n113
  n284 -->|Serves| n111
  n285 -->|Implements| n274
  n285 -->|Uses| n287
  n285 -->|Depends on| n275
  n285 -->|Depends on| n284
  n285 -->|Depends on| n4
  n285 -->|Depends on| n55
  n286 -->|Implements| n279
  n286 -->|Uses| n287
  n286 -->|Depends on| n295
  n290 -->|Serves| n113
  n290 -->|Implements| n289
  n290 -->|Implements| n291
  n290 -->|Depends on| n248
  n290 -->|Depends on| n271
  n294 -->|Serves| n113
  n294 -->|Applied by| n288
  n294 -->|Applied by| n280
  n294 -->|Applied by| n270
  n294 -->|Applied by| n279
  n294 -->|Applied by| n286
  n294 -->|Applied by| n292
  n294 -->|Applied by| n271
  n294 -->|Applied by| n273
  n294 -->|Applied by| n278
  n294 -->|Applied by| n272
  n294 -->|Applied by| n274
  n294 -->|Applied by| n285
  n294 -->|Applied by| n266
  n294 -->|Applied by| n265
  n294 -->|Applied by| n283
  n295 -->|Written in| n267
  n296 -->|Serves| n111
  n297 -->|Serves| n111
  n298 -->|Serves| n111
  n299 -->|Serves| n111
  n300 -->|Serves| n111
  n301 -->|Serves| n111
  n302 -->|Serves| n111
  n303 -->|Serves| n111
  n304 -->|Serves| n111
  n305 -->|Serves| n111
  n36 -.->|Refines| n6
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
