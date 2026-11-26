# Layers

*The graph in force on 26 November 2026, ordered by distance to the goals.*

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
    n29["The engine is a provider<br/><small>Architecture decision</small>"]:::neutral
    n30["What the engine's adapters say<br/><small>Message catalog</small>"]:::neutral
    n31["A project compiled by the engine that plays the scenario<br/><small>Implementation</small>"]:::neutral
    n32["The project the engine prepared<br/><small>Implementation</small>"]:::neutral
    n33["The project of a scenario<br/><small>Port</small>"]:::neutral
    n34["The project at hand<br/><small>Port</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n35["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n36["CSS<br/><small>Standard</small>"]:::neutral
    n37["HTML<br/><small>Standard</small>"]:::neutral
    n38["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph judgment["Standard library · Judgment"]
    n39["As the language says<br/><small>Function</small>"]:::held
    n40["Every warning an error<br/><small>Function</small>"]:::held
    n41["Hardening<br/><small>Port</small>"]:::neutral
    n42["A project judges harder than the language, never softer<br/><small>Architecture decision</small>"]:::held
    n43["Raising<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph measures["Standard library · Measures"]
    n44["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n45["Language tags<br/><small>Standard</small>"]:::neutral
    n46["Ratio<br/><small>Quantity</small>"]:::neutral
    n47["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n48["The language the symbols of units are written in: the same in most languages, as the SI writes them.<br/><small>Decision</small>"]:::neutral
    n49["Time<br/><small>Quantity</small>"]:::neutral
    n50["Units of measure<br/><small>Standard</small>"]:::neutral
    n51["Symbols of units<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph obligations["Standard library · Obligations"]
    n52["The decisions a shipment applies hold<br/><small>Requirement</small>"]:::held
    n53["Criteria of the decisions applied<br/><small>Acceptance criteria</small>"]:::held
    n54["The artefacts a shipment ships are checked<br/><small>Requirement</small>"]:::held
    n55["Criteria of the artefacts checked<br/><small>Acceptance criteria</small>"]:::held
    n56["Ways of checking<br/><small>Vocabulary</small>"]:::neutral
    n57["Who calls a shipment's programs is identified<br/><small>Requirement</small>"]:::held
    n58["Criteria of who calls<br/><small>Acceptance criteria</small>"]:::held
    n59["The artefacts a shipment ships were shipped first by those that precede it<br/><small>Requirement</small>"]:::held
    n60["Criteria of the stages<br/><small>Acceptance criteria</small>"]:::held
    n61["What people decided is published<br/><small>Requirement</small>"]:::held
    n62["Criteria of what is published<br/><small>Acceptance criteria</small>"]:::held
    n63["The data a shipment carries is reviewed<br/><small>Requirement</small>"]:::held
    n64["Criteria of the data reviewed<br/><small>Acceptance criteria</small>"]:::held
    n65["The project's rules hold<br/><small>Requirement</small>"]:::held
    n66["Criteria of the rules held<br/><small>Acceptance criteria</small>"]:::held
    n67["The packages a shipment uses are safe<br/><small>Requirement</small>"]:::held
    n68["Criteria of the packages safe<br/><small>Acceptance criteria</small>"]:::held
    n69["The product a shipment serves holds<br/><small>Requirement</small>"]:::held
    n70["Criteria of the product served<br/><small>Acceptance criteria</small>"]:::held
    n71["The code a shipment ships is verified<br/><small>Requirement</small>"]:::held
    n72["Criteria of the code verified<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Standard library · Packages"]
    n73["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n74["Trame<br/><small>Package</small>"]:::neutral
    n75["The people of the repository<br/><small>Package</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n76["Abstract Factory<br/><small>Design pattern</small>"]:::neutral
    n77["Adapter<br/><small>Design pattern</small>"]:::neutral
    n78["Bridge<br/><small>Design pattern</small>"]:::neutral
    n79["Command<br/><small>Design pattern</small>"]:::neutral
    n80["Plugin<br/><small>Design pattern</small>"]:::neutral
    n81["Repository<br/><small>Design pattern</small>"]:::neutral
    n82["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph platform["Standard library · Platform"]
    n83["Animation frames<br/><small>Port</small>"]:::neutral
    n84["The screen kept awake, in memory<br/><small>Function</small>"]:::held
    n85["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n86["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n87["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n88["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n89["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n90["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n91["The device's services, as ports<br/><small>Architecture decision</small>"]:::held
    n92["Languages of the device<br/><small>Port</small>"]:::neutral
    n93["Frames turned by hand<br/><small>Function</small>"]:::held
    n94["Preferences kept in memory<br/><small>Function</small>"]:::held
    n95["Loading of a page<br/><small>Port</small>"]:::neutral
    n96["Preferences<br/><small>Port</small>"]:::neutral
    n97["Screen kept awake<br/><small>Port</small>"]:::neutral
    n98["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n99["What was said<br/><small>Port</small>"]:::neutral
    n100["Speech<br/><small>Port</small>"]:::neutral
    n101["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::neutral
    n102["Time turned by hand<br/><small>Port</small>"]:::neutral
    n103["A voice that writes down<br/><small>Function</small>"]:::held
  end
  subgraph product["Standard library · Product"]
    n104["Commands chosen, not written again<br/><small>Goal</small>"]:::neutral
    n105["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n106["Known designs, named<br/><small>Goal</small>"]:::neutral
    n107["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n108["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
    n109["Rules applied, not written again<br/><small>Goal</small>"]:::neutral
    n110["Versions that hold<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n111["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n112["Version 0.10.0<br/><small>Release</small>"]:::neutral
    n113["Version 0.11.0<br/><small>Release</small>"]:::neutral
    n114["Version 0.11.1<br/><small>Release</small>"]:::neutral
    n115["Version 0.12.0<br/><small>Release</small>"]:::neutral
    n116["Version 0.13.0<br/><small>Release</small>"]:::neutral
    n117["Version 0.14.0<br/><small>Release</small>"]:::neutral
    n118["Version 0.15.0<br/><small>Release</small>"]:::neutral
    n119["Version 0.16.0<br/><small>Release</small>"]:::neutral
    n120["Version 0.17.0<br/><small>Release</small>"]:::neutral
    n121["Version 0.18.0<br/><small>Release</small>"]:::neutral
    n122["Version 0.18.1<br/><small>Release</small>"]:::neutral
    n123["Version 0.19.0<br/><small>Release</small>"]:::neutral
    n124["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n125["Version 0.20.0<br/><small>Release</small>"]:::neutral
    n126["Version 0.21.0<br/><small>Release</small>"]:::neutral
    n127["Version 0.22.0<br/><small>Release</small>"]:::neutral
    n128["Version 0.22.1<br/><small>Release</small>"]:::neutral
    n129["Version 0.22.2<br/><small>Release</small>"]:::neutral
    n130["Version 0.22.3<br/><small>Release</small>"]:::neutral
    n131["Version 0.23.0<br/><small>Release</small>"]:::neutral
    n132["Version 0.24.0<br/><small>Release</small>"]:::neutral
    n133["Version 0.25.0<br/><small>Release</small>"]:::neutral
    n134["Version 0.26.0<br/><small>Release</small>"]:::neutral
    n135["Version 0.27.0<br/><small>Release</small>"]:::neutral
    n136["Version 0.28.0<br/><small>Release</small>"]:::neutral
    n137["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n138["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n139["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n140["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n141["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n142["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n143["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n144["The automatic merge<br/><small>Port</small>"]:::neutral
    n145["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n146["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n147["The branches<br/><small>Port</small>"]:::neutral
    n148["Branches kept in memory<br/><small>Function</small>"]:::held
    n149["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n150["Git's branches<br/><small>Implementation</small>"]:::neutral
    n151["Git's command line<br/><small>Standard</small>"]:::neutral
    n152["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n153["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n154["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n155["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n156["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n157["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n158["Pull requests<br/><small>Port</small>"]:::neutral
    n159["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n160["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n161["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n162["A repository compared with its settings<br/><small>Function</small>"]:::held
    n163["A repository kept in memory<br/><small>Function</small>"]:::held
    n164["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n165["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n166["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n167["Directions<br/><small>Vocabulary</small>"]:::neutral
    n168["As many links as asked<br/><small>Requirement</small>"]:::held
    n169["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n170["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n171["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n172["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n173["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n174["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n175["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n176["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n177["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n178["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n179["The device, in memory<br/><small>Scenario</small>"]:::held
    n180["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n181["In memory<br/><small>Technical choice</small>"]:::held
    n182["Judged as the language says<br/><small>Scenario</small>"]:::held
    n183["Judged strictly<br/><small>Scenario</small>"]:::held
    n184["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n185["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n186["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n187["A pull request opened<br/><small>Scenario</small>"]:::held
    n188["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n189["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n190["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n191["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n192["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n193["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n194["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n195["Strict<br/><small>Environment</small>"]:::neutral
    n196["Judged strictly<br/><small>Technical choice</small>"]:::held
    n197["Test<br/><small>Environment</small>"]:::neutral
    n198["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n199["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n200["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n201["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n202["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n203["The next version<br/><small>Shipment</small>"]:::unknown
    n204["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n205["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n206["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n207["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n208["Its rules held<br/><small>Obligation</small>"]:::neutral
    n209["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n210["The standard library<br/><small>Artefact</small>"]:::unknown
    n211["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n212["Exit status<br/><small>Standard</small>"]:::neutral
    n213["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n214["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n215["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n216["Node.js events<br/><small>Standard</small>"]:::neutral
    n217["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n218["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n219["npm's command line<br/><small>Standard</small>"]:::neutral
    n220["npm's manifest<br/><small>Standard</small>"]:::neutral
    n221["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n222["Positions in a file<br/><small>Standard</small>"]:::neutral
    n223["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n224["Text file<br/><small>Standard</small>"]:::neutral
    n225["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n226["A browser kept in memory<br/><small>Function</small>"]:::held
    n227["Browser script<br/><small>Port</small>"]:::neutral
    n228["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n229["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n230["Project files<br/><small>Port</small>"]:::neutral
    n231["Files kept in memory<br/><small>Function</small>"]:::held
    n232["Files written<br/><small>Port</small>"]:::neutral
    n233["Headless browser<br/><small>Port</small>"]:::neutral
    n234["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n235["The machine's files<br/><small>Implementation</small>"]:::neutral
    n236["What the machine must also have<br/><small>Port</small>"]:::neutral
    n237["Node's command line<br/><small>Implementation</small>"]:::neutral
    n238["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n239["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n240["Where a package comes from<br/><small>Port</small>"]:::neutral
    n241["Playwright's API<br/><small>Standard</small>"]:::neutral
    n242["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n243["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n244["Playwright<br/><small>Package</small>"]:::held
    n245["Commands of a program<br/><small>Port</small>"]:::neutral
    n246["Programs run<br/><small>Port</small>"]:::neutral
    n247["Programs run in memory<br/><small>Function</small>"]:::held
    n248["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n249["What repairs a project<br/><small>Port</small>"]:::neutral
    n250["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n251["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n252["CSSOM View<br/><small>Standard</small>"]:::neutral
    n253["HTTP<br/><small>Standard</small>"]:::neutral
    n254["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n255["Media types<br/><small>Standard</small>"]:::neutral
    n256["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n257["Server-sent events<br/><small>Standard</small>"]:::neutral
    n258["UI events<br/><small>Standard</small>"]:::neutral
    n259["URI<br/><small>Standard</small>"]:::neutral
    n260["Web Audio API<br/><small>Standard</small>"]:::neutral
    n261["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n109
  n1 -->|Serves| n109
  n1 -->|Applied by| n57
  n2 -->|Serves| n109
  n3 -->|Serves| n109
  n4 -->|Serves| n108
  n5 -->|Serves| n108
  n5 -->|Depends on| n21
  n5 -->|Depends on| n4
  n6 -->|Serves| n108
  n6 -->|Depends on| n5
  n7 -->|Serves| n108
  n7 -->|Depends on| n23
  n8 -->|Serves| n105
  n9 -->|Serves| n105
  n10 -->|Serves| n105
  n11 -->|Serves| n108
  n11 -->|Depends on| n9
  n11 -->|Depends on| n10
  n11 -->|Depends on| n21
  n11 -->|Depends on| n4
  n12 -->|Serves| n105
  n13 -->|Serves| n104
  n13 -->|Applied by| n15
  n13 -->|Applied by| n17
  n13 -->|Applied by| n16
  n13 -->|Applied by| n18
  n13 -->|Applied by| n79
  n14 -->|Written in| n228
  n15 -->|Depends on| n245
  n16 -->|Serves| n104
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n147
  n16 -->|Depends on| n158
  n16 -->|Depends on| n14
  n16 -->|Depends on| n212
  n16 -->|Depends on| n4
  n16 -->|Depends on| n221
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n104
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n147
  n17 -->|Depends on| n158
  n17 -->|Depends on| n14
  n17 -->|Depends on| n212
  n17 -->|Depends on| n4
  n17 -->|Depends on| n221
  n17 -->|Depends on| n6
  n18 -->|Serves| n104
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n230
  n18 -->|Depends on| n246
  n18 -->|Depends on| n14
  n18 -->|Depends on| n212
  n18 -->|Depends on| n5
  n18 -->|Depends on| n221
  n18 -->|Depends on| n6
  n21 -->|Serves| n105
  n22 -->|Serves| n105
  n23 -->|Serves| n105
  n24 -->|Serves| n105
  n25 -->|Serves| n105
  n26 -->|Serves| n107
  n26 -->|Depends on| n27
  n27 -->|Serves| n107
  n29 -->|Serves| n107
  n29 -->|Applied by| n34
  n29 -->|Applied by| n33
  n29 -->|Applied by| n32
  n29 -->|Applied by| n31
  n30 -->|Written in| n228
  n31 -->|Implements| n34
  n31 -->|Depends on| n33
  n31 -->|Depends on| n30
  n32 -->|Implements| n34
  n32 -->|Depends on| n30
  n35 -->|Serves| n105
  n36 -->|Serves| n105
  n37 -->|Serves| n105
  n38 -->|Serves| n105
  n39 -->|Serves| n107
  n39 -->|Implements| n41
  n39 -->|Depends on| n43
  n40 -->|Serves| n107
  n40 -->|Implements| n41
  n40 -->|Depends on| n43
  n42 -->|Serves| n107
  n42 -->|Applied by| n43
  n42 -->|Applied by| n41
  n42 -->|Applied by| n39
  n42 -->|Applied by| n40
  n43 -->|Serves| n108
  n44 -->|Serves| n105
  n45 -->|Serves| n105
  n46 -->|Written with| n51
  n46 -->|Serves| n105
  n47 -->|Serves| n105
  n49 -->|Written with| n51
  n49 -->|Serves| n105
  n50 -->|Serves| n105
  n51 -->|Written in| n48
  n52 -->|Refines| n109
  n53 -->|Accepts| n52
  n54 -->|Refines| n109
  n54 -->|Depends on| n4
  n55 -->|Accepts| n54
  n56 -->|Serves| n109
  n57 -->|Refines| n109
  n58 -->|Accepts| n57
  n59 -->|Refines| n109
  n60 -->|Accepts| n59
  n61 -->|Refines| n109
  n62 -->|Accepts| n61
  n63 -->|Refines| n109
  n63 -->|Depends on| n4
  n64 -->|Accepts| n63
  n65 -->|Refines| n109
  n66 -->|Accepts| n65
  n67 -->|Refines| n109
  n68 -->|Accepts| n67
  n69 -->|Refines| n109
  n70 -->|Accepts| n69
  n71 -->|Refines| n109
  n71 -->|Depends on| n4
  n72 -->|Accepts| n71
  n73 -->|Serves| n110
  n74 -->|Serves| n107
  n75 -->|Serves| n110
  n76 -->|Serves| n106
  n77 -->|Serves| n106
  n78 -->|Serves| n106
  n79 -->|Serves| n106
  n80 -->|Serves| n106
  n81 -->|Serves| n106
  n82 -->|Serves| n106
  n84 -->|Implements| n97
  n84 -->|Implements| n98
  n85 -->|Implements| n83
  n85 -->|Depends on| n49
  n86 -->|Implements| n92
  n87 -->|Implements| n95
  n87 -->|Depends on| n258
  n88 -->|Implements| n96
  n89 -->|Implements| n100
  n89 -->|Depends on| n45
  n89 -->|Depends on| n261
  n90 -->|Implements| n97
  n90 -->|Depends on| n256
  n91 -->|Serves| n107
  n91 -->|Applied by| n96
  n91 -->|Applied by| n88
  n91 -->|Applied by| n94
  n91 -->|Applied by| n92
  n91 -->|Applied by| n86
  n91 -->|Applied by| n100
  n91 -->|Applied by| n89
  n91 -->|Applied by| n103
  n91 -->|Applied by| n99
  n91 -->|Applied by| n97
  n91 -->|Applied by| n90
  n91 -->|Applied by| n84
  n91 -->|Applied by| n98
  n91 -->|Applied by| n83
  n91 -->|Applied by| n85
  n91 -->|Applied by| n93
  n91 -->|Applied by| n102
  n93 -->|Implements| n83
  n93 -->|Implements| n102
  n93 -->|Depends on| n4
  n94 -->|Implements| n96
  n101 -->|Serves| n107
  n101 -->|Applied by| n95
  n101 -->|Applied by| n87
  n103 -->|Implements| n100
  n103 -->|Implements| n99
  n111 -->|Serves| n105
  n111 -->|Serves| n106
  n111 -->|Serves| n107
  n111 -->|Serves| n108
  n112 -->|Serves| n105
  n112 -->|Serves| n106
  n112 -->|Serves| n107
  n112 -->|Serves| n108
  n112 -->|Serves| n109
  n113 -->|Serves| n105
  n113 -->|Serves| n106
  n113 -->|Serves| n107
  n113 -->|Serves| n108
  n113 -->|Serves| n109
  n114 -->|Serves| n105
  n114 -->|Serves| n106
  n114 -->|Serves| n107
  n114 -->|Serves| n108
  n114 -->|Serves| n109
  n115 -->|Serves| n105
  n115 -->|Serves| n106
  n115 -->|Serves| n107
  n115 -->|Serves| n108
  n115 -->|Serves| n109
  n116 -->|Serves| n105
  n116 -->|Serves| n106
  n116 -->|Serves| n107
  n116 -->|Serves| n108
  n116 -->|Serves| n109
  n117 -->|Serves| n105
  n117 -->|Serves| n106
  n117 -->|Serves| n107
  n117 -->|Serves| n108
  n117 -->|Serves| n109
  n118 -->|Serves| n105
  n118 -->|Serves| n106
  n118 -->|Serves| n107
  n118 -->|Serves| n108
  n118 -->|Serves| n109
  n119 -->|Serves| n105
  n119 -->|Serves| n106
  n119 -->|Serves| n107
  n119 -->|Serves| n108
  n119 -->|Serves| n109
  n119 -->|Serves| n110
  n120 -->|Serves| n105
  n120 -->|Serves| n106
  n120 -->|Serves| n107
  n120 -->|Serves| n108
  n120 -->|Serves| n109
  n120 -->|Serves| n110
  n121 -->|Serves| n105
  n121 -->|Serves| n106
  n121 -->|Serves| n107
  n121 -->|Serves| n108
  n121 -->|Serves| n109
  n121 -->|Serves| n110
  n122 -->|Serves| n105
  n122 -->|Serves| n106
  n122 -->|Serves| n107
  n122 -->|Serves| n108
  n122 -->|Serves| n109
  n122 -->|Serves| n110
  n123 -->|Serves| n105
  n123 -->|Serves| n106
  n123 -->|Serves| n107
  n123 -->|Serves| n108
  n123 -->|Serves| n109
  n123 -->|Serves| n110
  n124 -->|Serves| n105
  n124 -->|Serves| n106
  n124 -->|Serves| n107
  n124 -->|Serves| n108
  n125 -->|Serves| n105
  n125 -->|Serves| n106
  n125 -->|Serves| n107
  n125 -->|Serves| n108
  n125 -->|Serves| n109
  n125 -->|Serves| n110
  n126 -->|Serves| n105
  n126 -->|Serves| n106
  n126 -->|Serves| n107
  n126 -->|Serves| n108
  n126 -->|Serves| n109
  n126 -->|Serves| n110
  n127 -->|Serves| n104
  n127 -->|Serves| n105
  n127 -->|Serves| n106
  n127 -->|Serves| n107
  n127 -->|Serves| n108
  n127 -->|Serves| n109
  n127 -->|Serves| n110
  n128 -->|Serves| n104
  n128 -->|Serves| n105
  n128 -->|Serves| n106
  n128 -->|Serves| n107
  n128 -->|Serves| n108
  n128 -->|Serves| n109
  n128 -->|Serves| n110
  n129 -->|Serves| n104
  n129 -->|Serves| n105
  n129 -->|Serves| n106
  n129 -->|Serves| n107
  n129 -->|Serves| n108
  n129 -->|Serves| n109
  n129 -->|Serves| n110
  n130 -->|Serves| n104
  n130 -->|Serves| n105
  n130 -->|Serves| n106
  n130 -->|Serves| n107
  n130 -->|Serves| n108
  n130 -->|Serves| n109
  n130 -->|Serves| n110
  n131 -->|Serves| n104
  n131 -->|Serves| n105
  n131 -->|Serves| n106
  n131 -->|Serves| n107
  n131 -->|Serves| n108
  n131 -->|Serves| n109
  n131 -->|Serves| n110
  n132 -->|Serves| n104
  n132 -->|Serves| n105
  n132 -->|Serves| n106
  n132 -->|Serves| n107
  n132 -->|Serves| n108
  n132 -->|Serves| n109
  n132 -->|Serves| n110
  n133 -->|Serves| n104
  n133 -->|Serves| n105
  n133 -->|Serves| n106
  n133 -->|Serves| n107
  n133 -->|Serves| n108
  n133 -->|Serves| n109
  n133 -->|Serves| n110
  n134 -->|Serves| n104
  n134 -->|Serves| n105
  n134 -->|Serves| n106
  n134 -->|Serves| n107
  n134 -->|Serves| n108
  n134 -->|Serves| n109
  n134 -->|Serves| n110
  n135 -->|Serves| n104
  n135 -->|Serves| n105
  n135 -->|Serves| n106
  n135 -->|Serves| n107
  n135 -->|Serves| n108
  n135 -->|Serves| n109
  n135 -->|Serves| n110
  n136 -->|Serves| n104
  n136 -->|Serves| n105
  n136 -->|Serves| n106
  n136 -->|Serves| n107
  n136 -->|Serves| n108
  n136 -->|Serves| n109
  n136 -->|Serves| n110
  n137 -->|Serves| n105
  n137 -->|Serves| n106
  n137 -->|Serves| n107
  n137 -->|Serves| n108
  n138 -->|Serves| n105
  n138 -->|Serves| n106
  n138 -->|Serves| n107
  n138 -->|Serves| n108
  n139 -->|Serves| n105
  n139 -->|Serves| n106
  n139 -->|Serves| n107
  n139 -->|Serves| n108
  n140 -->|Serves| n105
  n140 -->|Serves| n106
  n140 -->|Serves| n107
  n140 -->|Serves| n108
  n141 -->|Serves| n105
  n141 -->|Serves| n106
  n141 -->|Serves| n107
  n141 -->|Serves| n108
  n142 -->|Serves| n105
  n142 -->|Serves| n106
  n142 -->|Serves| n107
  n142 -->|Serves| n108
  n142 -->|Serves| n109
  n143 -->|Serves| n105
  n143 -->|Serves| n106
  n143 -->|Serves| n107
  n143 -->|Serves| n108
  n143 -->|Serves| n109
  n145 -->|Implements| n144
  n145 -->|Depends on| n152
  n145 -->|Depends on| n156
  n145 -->|Depends on| n157
  n145 -->|Depends on| n214
  n145 -->|Depends on| n216
  n145 -->|Depends on| n212
  n146 -->|Implements| n144
  n146 -->|Depends on| n152
  n146 -->|Depends on| n156
  n146 -->|Depends on| n155
  n146 -->|Depends on| n214
  n146 -->|Depends on| n216
  n146 -->|Depends on| n212
  n146 -->|Depends on| n6
  n148 -->|Serves| n107
  n148 -->|Implements| n147
  n148 -->|Implements| n149
  n150 -->|Implements| n147
  n150 -->|Depends on| n151
  n150 -->|Depends on| n214
  n150 -->|Depends on| n216
  n150 -->|Depends on| n212
  n150 -->|Depends on| n6
  n150 -->|Depends on| n224
  n151 -->|Serves| n105
  n152 -->|Serves| n105
  n153 -->|Implements| n158
  n153 -->|Depends on| n156
  n153 -->|Depends on| n155
  n153 -->|Depends on| n214
  n153 -->|Depends on| n216
  n153 -->|Depends on| n212
  n153 -->|Depends on| n6
  n153 -->|Depends on| n7
  n153 -->|Depends on| n144
  n154 -->|Implements| n161
  n154 -->|Depends on| n156
  n154 -->|Depends on| n214
  n154 -->|Depends on| n216
  n154 -->|Depends on| n212
  n154 -->|Depends on| n157
  n154 -->|Depends on| n6
  n154 -->|Depends on| n7
  n155 -->|Serves| n105
  n156 -->|Serves| n105
  n157 -->|Serves| n105
  n159 -->|Serves| n107
  n159 -->|Implements| n158
  n159 -->|Implements| n160
  n159 -->|Depends on| n156
  n159 -->|Depends on| n155
  n159 -->|Depends on| n6
  n162 -->|Serves| n107
  n162 -->|Depends on| n165
  n163 -->|Serves| n107
  n163 -->|Implements| n161
  n163 -->|Implements| n164
  n165 -->|Serves| n107
  n166 -->|Serves| n107
  n166 -->|Applied by| n157
  n166 -->|Applied by| n165
  n166 -->|Applied by| n162
  n166 -->|Applied by| n161
  n166 -->|Applied by| n154
  n166 -->|Applied by| n164
  n166 -->|Applied by| n163
  n167 -->|Serves| n109
  n168 -->|Refines| n109
  n168 -->|Depends on| n4
  n169 -->|Accepts| n168
  n170 -->|Refines| n109
  n170 -->|Depends on| n4
  n171 -->|Accepts| n170
  n172 -->|Refines| n109
  n173 -->|Accepts| n172
  n174 -->|Refines| n109
  n174 -->|Depends on| n4
  n175 -->|Accepts| n174
  n176 -->|Refines| n109
  n176 -->|Depends on| n4
  n177 -->|Accepts| n176
  n178 -->|Verifies| n26
  n178 -->|In| n197
  n178 -->|Depends on| n26
  n178 -->|Depends on| n27
  n178 -->|Depends on| n190
  n178 -->|Depends on| n189
  n179 -->|Verifies| n94
  n179 -->|Verifies| n103
  n179 -->|Verifies| n84
  n179 -->|Verifies| n93
  n179 -->|In| n197
  n179 -->|Depends on| n96
  n179 -->|Depends on| n100
  n179 -->|Depends on| n99
  n179 -->|Depends on| n97
  n179 -->|Depends on| n98
  n179 -->|Depends on| n83
  n179 -->|Depends on| n102
  n179 -->|Depends on| n190
  n179 -->|Depends on| n4
  n179 -->|Depends on| n189
  n180 -->|Verifies| n11
  n180 -->|In| n197
  n180 -->|Depends on| n11
  n180 -->|Depends on| n190
  n180 -->|Depends on| n4
  n180 -->|Depends on| n189
  n181 -->|Chooses| n94
  n181 -->|Chooses| n103
  n181 -->|Chooses| n84
  n181 -->|Chooses| n93
  n181 -->|Chooses| n231
  n181 -->|Chooses| n226
  n181 -->|Chooses| n163
  n181 -->|Chooses| n148
  n181 -->|Chooses| n159
  n181 -->|Chooses| n247
  n181 -->|In| n197
  n181 -->|Follows| n82
  n181 -->|Serves| n107
  n182 -->|Verifies| n39
  n182 -->|In| n197
  n182 -->|Depends on| n41
  n182 -->|Depends on| n189
  n183 -->|Verifies| n40
  n183 -->|In| n195
  n183 -->|Depends on| n41
  n183 -->|Depends on| n189
  n184 -->|Chooses| n39
  n184 -->|In| n197
  n184 -->|Follows| n82
  n184 -->|Serves| n107
  n185 -->|Verifies| n16
  n185 -->|Verifies| n17
  n185 -->|Verifies| n148
  n185 -->|Verifies| n159
  n185 -->|Verifies| n193
  n185 -->|In| n197
  n185 -->|Depends on| n17
  n185 -->|Depends on| n16
  n185 -->|Depends on| n149
  n185 -->|Depends on| n160
  n185 -->|Depends on| n190
  n185 -->|Depends on| n14
  n185 -->|Depends on| n189
  n185 -->|Depends on| n4
  n185 -->|Depends on| n212
  n186 -->|Verifies| n18
  n186 -->|Verifies| n247
  n186 -->|Verifies| n192
  n186 -->|In| n197
  n186 -->|Depends on| n18
  n186 -->|Depends on| n230
  n186 -->|Depends on| n248
  n186 -->|Depends on| n190
  n186 -->|Depends on| n14
  n186 -->|Depends on| n189
  n186 -->|Depends on| n4
  n186 -->|Depends on| n5
  n186 -->|Depends on| n212
  n187 -->|Verifies| n17
  n187 -->|Verifies| n148
  n187 -->|Verifies| n159
  n187 -->|Verifies| n193
  n187 -->|In| n197
  n187 -->|Depends on| n17
  n187 -->|Depends on| n149
  n187 -->|Depends on| n160
  n187 -->|Depends on| n190
  n187 -->|Depends on| n14
  n187 -->|Depends on| n189
  n187 -->|Depends on| n4
  n187 -->|Depends on| n212
  n188 -->|Verifies| n163
  n188 -->|Verifies| n162
  n188 -->|In| n197
  n188 -->|Depends on| n161
  n188 -->|Depends on| n164
  n188 -->|Depends on| n162
  n188 -->|Depends on| n190
  n188 -->|Depends on| n189
  n188 -->|Depends on| n4
  n189 -->|Written in| n191
  n192 -->|Serves| n107
  n192 -->|Implements| n19
  n192 -->|Depends on| n190
  n193 -->|Serves| n107
  n193 -->|Implements| n20
  n193 -->|Depends on| n190
  n194 -->|Chooses| n193
  n194 -->|Chooses| n192
  n194 -->|In| n197
  n194 -->|Follows| n82
  n194 -->|Serves| n107
  n196 -->|Chooses| n40
  n196 -->|In| n195
  n196 -->|Follows| n82
  n196 -->|Serves| n107
  n198 -->|Verifies| n231
  n198 -->|Verifies| n226
  n198 -->|In| n197
  n198 -->|Depends on| n230
  n198 -->|Depends on| n232
  n198 -->|Depends on| n233
  n198 -->|Depends on| n227
  n198 -->|Depends on| n190
  n198 -->|Depends on| n189
  n199 -->|Applies the family| n57
  n199 -->|Serves| n110
  n200 -->|Applies the family| n63
  n200 -->|Serves| n110
  n201 -->|Applies the family| n52
  n201 -->|Serves| n110
  n202 -->|Applies the family| n71
  n202 -->|Serves| n110
  n203 -->|Ships| n210
  n203 -->|Follows the policy| n211
  n204 -->|Applies the family| n67
  n204 -->|Serves| n110
  n206 -->|Runs elsewhere| n203
  n206 -->|Its writer's settings| n205
  n207 -->|Applies the family| n69
  n207 -->|Serves| n110
  n208 -->|Applies the family| n65
  n208 -->|Serves| n110
  n209 -->|Ships| n206
  n211 -->|Its obligations| n202
  n211 -->|Its obligations| n207
  n211 -->|Its obligations| n201
  n211 -->|Its obligations| n208
  n211 -->|Its obligations| n204
  n211 -->|Its obligations| n199
  n211 -->|Its obligations| n200
  n212 -->|Serves| n105
  n213 -->|Serves| n105
  n214 -->|Serves| n105
  n215 -->|Serves| n105
  n216 -->|Serves| n105
  n217 -->|Serves| n105
  n218 -->|Serves| n105
  n219 -->|Serves| n105
  n220 -->|Serves| n105
  n221 -->|Serves| n105
  n222 -->|Serves| n105
  n223 -->|Serves| n105
  n224 -->|Serves| n105
  n225 -->|Serves| n105
  n226 -->|Implements| n233
  n226 -->|Implements| n227
  n226 -->|Depends on| n4
  n229 -->|Implements| n245
  n229 -->|Depends on| n212
  n231 -->|Implements| n230
  n231 -->|Implements| n232
  n231 -->|Depends on| n11
  n231 -->|Depends on| n6
  n235 -->|Implements| n230
  n235 -->|Depends on| n12
  n235 -->|Depends on| n215
  n237 -->|Implements| n245
  n237 -->|Depends on| n213
  n237 -->|Depends on| n212
  n237 -->|Depends on| n7
  n238 -->|Implements| n246
  n238 -->|Depends on| n214
  n238 -->|Depends on| n216
  n238 -->|Depends on| n212
  n238 -->|Depends on| n221
  n239 -->|Serves| n107
  n241 -->|Serves| n105
  n242 -->|Implements| n233
  n242 -->|Uses| n244
  n242 -->|Depends on| n234
  n242 -->|Depends on| n241
  n242 -->|Depends on| n4
  n242 -->|Depends on| n49
  n243 -->|Implements| n236
  n243 -->|Uses| n244
  n243 -->|Depends on| n251
  n247 -->|Serves| n107
  n247 -->|Implements| n246
  n247 -->|Implements| n248
  n247 -->|Depends on| n212
  n247 -->|Depends on| n230
  n250 -->|Serves| n107
  n250 -->|Applied by| n245
  n250 -->|Applied by| n237
  n250 -->|Applied by| n229
  n250 -->|Applied by| n236
  n250 -->|Applied by| n243
  n250 -->|Applied by| n249
  n250 -->|Applied by| n230
  n250 -->|Applied by| n232
  n250 -->|Applied by| n235
  n250 -->|Applied by| n231
  n250 -->|Applied by| n233
  n250 -->|Applied by| n242
  n250 -->|Applied by| n227
  n250 -->|Applied by| n226
  n250 -->|Applied by| n240
  n251 -->|Written in| n228
  n252 -->|Serves| n105
  n253 -->|Serves| n105
  n254 -->|Serves| n105
  n255 -->|Serves| n105
  n256 -->|Serves| n105
  n257 -->|Serves| n105
  n258 -->|Serves| n105
  n259 -->|Serves| n105
  n260 -->|Serves| n105
  n261 -->|Serves| n105
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
