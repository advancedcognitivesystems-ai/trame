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
    n148["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n149["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n150["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n151["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n152["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n153["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n154["The automatic merge<br/><small>Port</small>"]:::neutral
    n155["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n156["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n157["The branches<br/><small>Port</small>"]:::neutral
    n158["Branches kept in memory<br/><small>Function</small>"]:::held
    n159["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n160["Git's branches<br/><small>Implementation</small>"]:::neutral
    n161["Git's command line<br/><small>Standard</small>"]:::neutral
    n162["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n163["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n164["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n165["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n166["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n167["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n168["Pull requests<br/><small>Port</small>"]:::neutral
    n169["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n170["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n171["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n172["A repository compared with its settings<br/><small>Function</small>"]:::held
    n173["A repository kept in memory<br/><small>Function</small>"]:::held
    n174["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n175["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n176["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n177["Directions<br/><small>Vocabulary</small>"]:::neutral
    n178["As many links as asked<br/><small>Requirement</small>"]:::held
    n179["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n180["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n181["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n182["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n183["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n184["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n185["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n186["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n187["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph running["Standard library · Running"]
    n188["A clock stopped<br/><small>Function</small>"]:::held
    n189["Serving HTTP<br/><small>Port</small>"]:::neutral
    n190["Lines kept<br/><small>Function</small>"]:::held
    n191["The lines printed<br/><small>Port</small>"]:::neutral
    n192["Printing as it goes<br/><small>Port</small>"]:::neutral
    n193["The machine's clock<br/><small>Implementation</small>"]:::neutral
    n194["The machine's timers<br/><small>Implementation</small>"]:::held
    n195["A server of Node.js<br/><small>Implementation</small>"]:::neutral
    n196["A command that keeps running asks the machine through ports<br/><small>Architecture decision</small>"]:::held
    n197["What a realization of this module says<br/><small>Message catalog</small>"]:::neutral
    n198["The instant of the scenarios<br/><small>Decision</small>"]:::neutral
    n199["A server in memory<br/><small>Function</small>"]:::held
    n200["The server asked<br/><small>Port</small>"]:::neutral
    n201["The standard output<br/><small>Implementation</small>"]:::neutral
    n202["The clock<br/><small>Port</small>"]:::neutral
    n203["Timers<br/><small>Port</small>"]:::neutral
  end
  subgraph scenarios["Standard library · Scenarios"]
    n204["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n205["The device, in memory<br/><small>Scenario</small>"]:::held
    n206["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n207["The formats of the scenarios<br/><small>Technical choice</small>"]:::held
    n208["How the library's scenarios run<br/><small>Architecture decision</small>"]:::held
    n209["In memory<br/><small>Technical choice</small>"]:::held
    n210["Judged as the language says<br/><small>Scenario</small>"]:::held
    n211["Judged strictly<br/><small>Scenario</small>"]:::held
    n212["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n213["The languages read by the engine<br/><small>Scenario</small>"]:::held
    n214["A command's line read, its answer written<br/><small>Scenario</small>"]:::held
    n215["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n216["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n217["A pull request opened<br/><small>Scenario</small>"]:::held
    n218["Read by the engine that builds<br/><small>Technical choice</small>"]:::held
    n219["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n220["Running, in memory<br/><small>Scenario</small>"]:::held
    n221["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n222["A command's line, in the scenarios<br/><small>Decision</small>"]:::neutral
    n223["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n224["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n225["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n226["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n227["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n228["Strict<br/><small>Environment</small>"]:::neutral
    n229["Judged strictly<br/><small>Technical choice</small>"]:::held
    n230["Test<br/><small>Environment</small>"]:::neutral
    n231["The tooling, in memory<br/><small>Scenario</small>"]:::held
    n232["Waiting on the machine<br/><small>Technical choice</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n233["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n234["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n235["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n236["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n237["The next version<br/><small>Shipment</small>"]:::unknown
    n238["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n239["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n240["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n241["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n242["Its rules held<br/><small>Obligation</small>"]:::neutral
    n243["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n244["The standard library<br/><small>Artefact</small>"]:::unknown
    n245["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n246["Exit status<br/><small>Standard</small>"]:::neutral
    n247["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n248["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n249["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n250["Node.js events<br/><small>Standard</small>"]:::neutral
    n251["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n252["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n253["npm's command line<br/><small>Standard</small>"]:::neutral
    n254["npm's manifest<br/><small>Standard</small>"]:::neutral
    n255["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n256["Positions in a file<br/><small>Standard</small>"]:::neutral
    n257["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n258["JSON formatting<br/><small>Decision</small>"]:::neutral
    n259["Text file<br/><small>Standard</small>"]:::neutral
    n260["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n261["Formats of an answer<br/><small>Port</small>"]:::neutral
    n262["Documents in JSON<br/><small>Function</small>"]:::held
    n263["A browser kept in memory<br/><small>Function</small>"]:::held
    n264["Browser script<br/><small>Port</small>"]:::neutral
    n265["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n266["A command's line, read<br/><small>Function</small>"]:::held
    n267["Commands, their lines read and their answers written<br/><small>Function</small>"]:::held
    n268["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n269["Project files<br/><small>Port</small>"]:::neutral
    n270["Files kept in memory<br/><small>Function</small>"]:::held
    n271["Files written<br/><small>Port</small>"]:::neutral
    n272["Headless browser<br/><small>Port</small>"]:::neutral
    n273["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n274["What std's exposures say of a line<br/><small>Message catalog</small>"]:::neutral
    n275["Long options<br/><small>Standard</small>"]:::neutral
    n276["The machine's files<br/><small>Implementation</small>"]:::neutral
    n277["What the machine must also have<br/><small>Port</small>"]:::neutral
    n278["Node's command line<br/><small>Implementation</small>"]:::neutral
    n279["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n280["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n281["Where a package comes from<br/><small>Port</small>"]:::neutral
    n282["Playwright's API<br/><small>Standard</small>"]:::neutral
    n283["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n284["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n285["Playwright<br/><small>Package</small>"]:::held
    n286["Commands of a program<br/><small>Port</small>"]:::neutral
    n287["Programs run<br/><small>Port</small>"]:::neutral
    n288["Programs run in memory<br/><small>Function</small>"]:::held
    n289["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n290["What repairs a project<br/><small>Port</small>"]:::neutral
    n291["The options of every command<br/><small>Decision</small>"]:::neutral
    n292["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n293["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n294["CSSOM View<br/><small>Standard</small>"]:::neutral
    n295["HTTP<br/><small>Standard</small>"]:::neutral
    n296["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n297["Media types<br/><small>Standard</small>"]:::neutral
    n298["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n299["Server-sent events<br/><small>Standard</small>"]:::neutral
    n300["UI events<br/><small>Standard</small>"]:::neutral
    n301["URI<br/><small>Standard</small>"]:::neutral
    n302["Web Audio API<br/><small>Standard</small>"]:::neutral
    n303["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n14 -->|Written in| n265
  n15 -->|Depends on| n286
  n16 -->|Serves| n110
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n157
  n16 -->|Depends on| n168
  n16 -->|Depends on| n14
  n16 -->|Depends on| n246
  n16 -->|Depends on| n4
  n16 -->|Depends on| n255
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n110
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n157
  n17 -->|Depends on| n168
  n17 -->|Depends on| n14
  n17 -->|Depends on| n246
  n17 -->|Depends on| n4
  n17 -->|Depends on| n255
  n17 -->|Depends on| n6
  n18 -->|Serves| n110
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n269
  n18 -->|Depends on| n287
  n18 -->|Depends on| n14
  n18 -->|Depends on| n246
  n18 -->|Depends on| n5
  n18 -->|Depends on| n255
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
  n30 -->|Written in| n265
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
  n93 -->|Depends on| n300
  n94 -->|Implements| n102
  n95 -->|Implements| n106
  n95 -->|Depends on| n51
  n95 -->|Depends on| n303
  n96 -->|Implements| n103
  n96 -->|Depends on| n298
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
  n152 -->|Serves| n111
  n152 -->|Serves| n112
  n152 -->|Serves| n113
  n152 -->|Serves| n114
  n152 -->|Serves| n115
  n153 -->|Serves| n111
  n153 -->|Serves| n112
  n153 -->|Serves| n113
  n153 -->|Serves| n114
  n153 -->|Serves| n115
  n155 -->|Implements| n154
  n155 -->|Depends on| n162
  n155 -->|Depends on| n166
  n155 -->|Depends on| n167
  n155 -->|Depends on| n248
  n155 -->|Depends on| n250
  n155 -->|Depends on| n246
  n156 -->|Implements| n154
  n156 -->|Depends on| n162
  n156 -->|Depends on| n166
  n156 -->|Depends on| n165
  n156 -->|Depends on| n248
  n156 -->|Depends on| n250
  n156 -->|Depends on| n246
  n156 -->|Depends on| n6
  n158 -->|Serves| n113
  n158 -->|Implements| n157
  n158 -->|Implements| n159
  n160 -->|Implements| n157
  n160 -->|Depends on| n161
  n160 -->|Depends on| n248
  n160 -->|Depends on| n250
  n160 -->|Depends on| n246
  n160 -->|Depends on| n6
  n160 -->|Depends on| n259
  n161 -->|Serves| n111
  n162 -->|Serves| n111
  n163 -->|Implements| n168
  n163 -->|Depends on| n166
  n163 -->|Depends on| n165
  n163 -->|Depends on| n248
  n163 -->|Depends on| n250
  n163 -->|Depends on| n246
  n163 -->|Depends on| n6
  n163 -->|Depends on| n7
  n163 -->|Depends on| n154
  n164 -->|Implements| n171
  n164 -->|Depends on| n166
  n164 -->|Depends on| n248
  n164 -->|Depends on| n250
  n164 -->|Depends on| n246
  n164 -->|Depends on| n167
  n164 -->|Depends on| n6
  n164 -->|Depends on| n7
  n165 -->|Serves| n111
  n166 -->|Serves| n111
  n167 -->|Serves| n111
  n169 -->|Serves| n113
  n169 -->|Implements| n168
  n169 -->|Implements| n170
  n169 -->|Depends on| n166
  n169 -->|Depends on| n165
  n169 -->|Depends on| n6
  n172 -->|Serves| n113
  n172 -->|Depends on| n175
  n173 -->|Serves| n113
  n173 -->|Implements| n171
  n173 -->|Implements| n174
  n175 -->|Serves| n113
  n176 -->|Serves| n113
  n176 -->|Applied by| n167
  n176 -->|Applied by| n175
  n176 -->|Applied by| n172
  n176 -->|Applied by| n171
  n176 -->|Applied by| n164
  n176 -->|Applied by| n174
  n176 -->|Applied by| n173
  n177 -->|Serves| n115
  n178 -->|Refines| n115
  n178 -->|Depends on| n4
  n179 -->|Accepts| n178
  n180 -->|Refines| n115
  n180 -->|Depends on| n4
  n181 -->|Accepts| n180
  n182 -->|Refines| n115
  n183 -->|Accepts| n182
  n184 -->|Refines| n115
  n184 -->|Depends on| n4
  n185 -->|Accepts| n184
  n186 -->|Refines| n115
  n186 -->|Depends on| n4
  n187 -->|Accepts| n186
  n188 -->|Serves| n113
  n188 -->|Implements| n202
  n188 -->|Depends on| n198
  n190 -->|Serves| n113
  n190 -->|Implements| n192
  n190 -->|Implements| n191
  n193 -->|Implements| n202
  n194 -->|Implements| n203
  n195 -->|Implements| n189
  n196 -->|Serves| n113
  n196 -->|Applied by| n202
  n196 -->|Applied by| n203
  n196 -->|Applied by| n189
  n196 -->|Applied by| n192
  n196 -->|Applied by| n193
  n196 -->|Applied by| n194
  n196 -->|Applied by| n195
  n196 -->|Applied by| n201
  n196 -->|Applied by| n188
  n196 -->|Applied by| n199
  n196 -->|Applied by| n190
  n197 -->|Written in| n265
  n199 -->|Serves| n113
  n199 -->|Implements| n189
  n199 -->|Implements| n200
  n199 -->|Depends on| n250
  n199 -->|Depends on| n295
  n199 -->|Depends on| n6
  n199 -->|Depends on| n197
  n201 -->|Implements| n192
  n204 -->|Verifies| n26
  n204 -->|In| n230
  n204 -->|Depends on| n26
  n204 -->|Depends on| n27
  n204 -->|Depends on| n223
  n204 -->|Depends on| n221
  n205 -->|Verifies| n100
  n205 -->|Verifies| n109
  n205 -->|Verifies| n90
  n205 -->|Verifies| n99
  n205 -->|In| n230
  n205 -->|Depends on| n102
  n205 -->|Depends on| n106
  n205 -->|Depends on| n105
  n205 -->|Depends on| n103
  n205 -->|Depends on| n104
  n205 -->|Depends on| n89
  n205 -->|Depends on| n108
  n205 -->|Depends on| n223
  n205 -->|Depends on| n4
  n205 -->|Depends on| n221
  n206 -->|Verifies| n11
  n206 -->|In| n230
  n206 -->|Depends on| n11
  n206 -->|Depends on| n223
  n206 -->|Depends on| n4
  n206 -->|Depends on| n221
  n207 -->|Chooses| n262
  n207 -->|In| n230
  n207 -->|Follows| n86
  n207 -->|Serves| n113
  n208 -->|Serves| n113
  n208 -->|Applied by| n209
  n208 -->|Applied by| n232
  n208 -->|Applied by| n227
  n208 -->|Applied by| n212
  n208 -->|Applied by| n229
  n208 -->|Applied by| n218
  n208 -->|Applied by| n207
  n209 -->|Chooses| n100
  n209 -->|Chooses| n109
  n209 -->|Chooses| n90
  n209 -->|Chooses| n99
  n209 -->|Chooses| n270
  n209 -->|Chooses| n263
  n209 -->|Chooses| n173
  n209 -->|Chooses| n158
  n209 -->|Chooses| n169
  n209 -->|Chooses| n288
  n209 -->|Chooses| n188
  n209 -->|Chooses| n199
  n209 -->|Chooses| n190
  n209 -->|In| n230
  n209 -->|Follows| n88
  n209 -->|Serves| n113
  n210 -->|Verifies| n42
  n210 -->|In| n230
  n210 -->|Depends on| n44
  n210 -->|Depends on| n221
  n211 -->|Verifies| n43
  n211 -->|In| n228
  n211 -->|Depends on| n44
  n211 -->|Depends on| n221
  n212 -->|Chooses| n42
  n212 -->|In| n230
  n212 -->|Follows| n88
  n212 -->|Serves| n113
  n213 -->|Verifies| n35
  n213 -->|In| n230
  n213 -->|Depends on| n31
  n213 -->|Depends on| n48
  n213 -->|Depends on| n47
  n213 -->|Depends on| n4
  n213 -->|Depends on| n223
  n213 -->|Depends on| n221
  n214 -->|Verifies| n267
  n214 -->|Verifies| n266
  n214 -->|Verifies| n262
  n214 -->|In| n230
  n214 -->|Depends on| n267
  n214 -->|Depends on| n266
  n214 -->|Depends on| n222
  n214 -->|Depends on| n258
  n214 -->|Depends on| n275
  n214 -->|Depends on| n291
  n214 -->|Depends on| n246
  n214 -->|Depends on| n274
  n214 -->|Depends on| n221
  n215 -->|Verifies| n16
  n215 -->|Verifies| n17
  n215 -->|Verifies| n158
  n215 -->|Verifies| n169
  n215 -->|Verifies| n226
  n215 -->|In| n230
  n215 -->|Depends on| n17
  n215 -->|Depends on| n16
  n215 -->|Depends on| n159
  n215 -->|Depends on| n170
  n215 -->|Depends on| n223
  n215 -->|Depends on| n14
  n215 -->|Depends on| n221
  n215 -->|Depends on| n4
  n215 -->|Depends on| n246
  n216 -->|Verifies| n18
  n216 -->|Verifies| n288
  n216 -->|Verifies| n225
  n216 -->|In| n230
  n216 -->|Depends on| n18
  n216 -->|Depends on| n269
  n216 -->|Depends on| n289
  n216 -->|Depends on| n223
  n216 -->|Depends on| n14
  n216 -->|Depends on| n221
  n216 -->|Depends on| n4
  n216 -->|Depends on| n5
  n216 -->|Depends on| n246
  n217 -->|Verifies| n17
  n217 -->|Verifies| n158
  n217 -->|Verifies| n169
  n217 -->|Verifies| n226
  n217 -->|In| n230
  n217 -->|Depends on| n17
  n217 -->|Depends on| n159
  n217 -->|Depends on| n170
  n217 -->|Depends on| n223
  n217 -->|Depends on| n14
  n217 -->|Depends on| n221
  n217 -->|Depends on| n4
  n217 -->|Depends on| n246
  n218 -->|Chooses| n35
  n218 -->|In| n230
  n218 -->|Follows| n83
  n218 -->|Serves| n113
  n219 -->|Verifies| n173
  n219 -->|Verifies| n172
  n219 -->|In| n230
  n219 -->|Depends on| n171
  n219 -->|Depends on| n174
  n219 -->|Depends on| n172
  n219 -->|Depends on| n223
  n219 -->|Depends on| n221
  n219 -->|Depends on| n4
  n220 -->|Verifies| n188
  n220 -->|Verifies| n199
  n220 -->|Verifies| n190
  n220 -->|Verifies| n194
  n220 -->|In| n230
  n220 -->|Depends on| n202
  n220 -->|Depends on| n198
  n220 -->|Depends on| n189
  n220 -->|Depends on| n200
  n220 -->|Depends on| n203
  n220 -->|Depends on| n192
  n220 -->|Depends on| n191
  n220 -->|Depends on| n250
  n220 -->|Depends on| n6
  n220 -->|Depends on| n223
  n220 -->|Depends on| n221
  n221 -->|Written in| n224
  n225 -->|Serves| n113
  n225 -->|Implements| n19
  n225 -->|Depends on| n223
  n226 -->|Serves| n113
  n226 -->|Implements| n20
  n226 -->|Depends on| n223
  n227 -->|Chooses| n226
  n227 -->|Chooses| n225
  n227 -->|In| n230
  n227 -->|Follows| n88
  n227 -->|Serves| n113
  n229 -->|Chooses| n43
  n229 -->|In| n228
  n229 -->|Follows| n88
  n229 -->|Serves| n113
  n231 -->|Verifies| n270
  n231 -->|Verifies| n263
  n231 -->|In| n230
  n231 -->|Depends on| n269
  n231 -->|Depends on| n271
  n231 -->|Depends on| n272
  n231 -->|Depends on| n264
  n231 -->|Depends on| n223
  n231 -->|Depends on| n221
  n232 -->|Chooses| n194
  n232 -->|In| n230
  n232 -->|Follows| n83
  n232 -->|Serves| n113
  n233 -->|Applies the family| n63
  n233 -->|Serves| n116
  n234 -->|Applies the family| n69
  n234 -->|Serves| n116
  n235 -->|Applies the family| n58
  n235 -->|Serves| n116
  n236 -->|Applies the family| n77
  n236 -->|Serves| n116
  n237 -->|Ships| n244
  n237 -->|Follows the policy| n245
  n238 -->|Applies the family| n73
  n238 -->|Serves| n116
  n240 -->|Runs elsewhere| n237
  n240 -->|Its writer's settings| n239
  n241 -->|Applies the family| n75
  n241 -->|Serves| n116
  n242 -->|Applies the family| n71
  n242 -->|Serves| n116
  n243 -->|Ships| n240
  n245 -->|Its obligations| n236
  n245 -->|Its obligations| n241
  n245 -->|Its obligations| n235
  n245 -->|Its obligations| n242
  n245 -->|Its obligations| n238
  n245 -->|Its obligations| n233
  n245 -->|Its obligations| n234
  n246 -->|Serves| n111
  n247 -->|Serves| n111
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
  n259 -->|Serves| n111
  n260 -->|Serves| n111
  n262 -->|Serves| n113
  n262 -->|Implements| n261
  n262 -->|Depends on| n297
  n262 -->|Depends on| n258
  n262 -->|Depends on| n4
  n263 -->|Implements| n272
  n263 -->|Implements| n264
  n263 -->|Depends on| n4
  n266 -->|Serves| n113
  n266 -->|Depends on| n275
  n266 -->|Depends on| n291
  n266 -->|Depends on| n5
  n266 -->|Depends on| n4
  n267 -->|Serves| n113
  n267 -->|Depends on| n266
  n267 -->|Depends on| n261
  n267 -->|Depends on| n275
  n267 -->|Depends on| n291
  n267 -->|Depends on| n246
  n267 -->|Depends on| n7
  n267 -->|Depends on| n5
  n267 -->|Depends on| n4
  n267 -->|Depends on| n274
  n268 -->|Implements| n286
  n268 -->|Depends on| n246
  n268 -->|Depends on| n267
  n270 -->|Implements| n269
  n270 -->|Implements| n271
  n270 -->|Depends on| n11
  n270 -->|Depends on| n6
  n274 -->|Written in| n265
  n275 -->|Serves| n111
  n276 -->|Implements| n269
  n276 -->|Depends on| n12
  n276 -->|Depends on| n249
  n278 -->|Implements| n286
  n278 -->|Depends on| n247
  n278 -->|Depends on| n246
  n278 -->|Depends on| n7
  n278 -->|Depends on| n267
  n279 -->|Implements| n287
  n279 -->|Depends on| n248
  n279 -->|Depends on| n250
  n279 -->|Depends on| n246
  n279 -->|Depends on| n255
  n280 -->|Serves| n113
  n282 -->|Serves| n111
  n283 -->|Implements| n272
  n283 -->|Uses| n285
  n283 -->|Depends on| n273
  n283 -->|Depends on| n282
  n283 -->|Depends on| n4
  n283 -->|Depends on| n55
  n284 -->|Implements| n277
  n284 -->|Uses| n285
  n284 -->|Depends on| n293
  n288 -->|Serves| n113
  n288 -->|Implements| n287
  n288 -->|Implements| n289
  n288 -->|Depends on| n246
  n288 -->|Depends on| n269
  n292 -->|Serves| n113
  n292 -->|Applied by| n286
  n292 -->|Applied by| n278
  n292 -->|Applied by| n268
  n292 -->|Applied by| n277
  n292 -->|Applied by| n284
  n292 -->|Applied by| n290
  n292 -->|Applied by| n269
  n292 -->|Applied by| n271
  n292 -->|Applied by| n276
  n292 -->|Applied by| n270
  n292 -->|Applied by| n272
  n292 -->|Applied by| n283
  n292 -->|Applied by| n264
  n292 -->|Applied by| n263
  n292 -->|Applied by| n281
  n293 -->|Written in| n265
  n294 -->|Serves| n111
  n295 -->|Serves| n111
  n296 -->|Serves| n111
  n297 -->|Serves| n111
  n298 -->|Serves| n111
  n299 -->|Serves| n111
  n300 -->|Serves| n111
  n301 -->|Serves| n111
  n302 -->|Serves| n111
  n303 -->|Serves| n111
  n36 -.->|Refines| n6
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
