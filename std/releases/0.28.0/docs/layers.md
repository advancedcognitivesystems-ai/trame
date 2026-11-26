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
    n136["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n137["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n138["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n139["Version 0.6.0<br/><small>Release</small>"]:::neutral
    n140["Version 0.7.0<br/><small>Release</small>"]:::neutral
    n141["Version 0.8.0<br/><small>Release</small>"]:::neutral
    n142["Version 0.9.0<br/><small>Release</small>"]:::neutral
  end
  subgraph repository["Standard library · Repositories on GitHub"]
    n143["The automatic merge<br/><small>Port</small>"]:::neutral
    n144["The automatic merge, by GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n145["The automatic merge, in a session of Claude Code<br/><small>Implementation</small>"]:::neutral
    n146["The branches<br/><small>Port</small>"]:::neutral
    n147["Branches kept in memory<br/><small>Function</small>"]:::held
    n148["The branches a scenario keeps<br/><small>Port</small>"]:::neutral
    n149["Git's branches<br/><small>Implementation</small>"]:::neutral
    n150["Git's command line<br/><small>Standard</small>"]:::neutral
    n151["GitHub's ways of asking a merge once it holds<br/><small>Standard</small>"]:::neutral
    n152["GitHub's pull requests, by its command line<br/><small>Implementation</small>"]:::neutral
    n153["GitHub's command line<br/><small>Implementation</small>"]:::neutral
    n154["GitHub's API for pull requests<br/><small>Standard</small>"]:::neutral
    n155["GitHub's API for a repository<br/><small>Standard</small>"]:::neutral
    n156["How GitHub merges a pull request<br/><small>Vocabulary</small>"]:::neutral
    n157["Pull requests<br/><small>Port</small>"]:::neutral
    n158["Pull requests kept in memory<br/><small>Function</small>"]:::held
    n159["The pull requests a scenario keeps<br/><small>Port</small>"]:::neutral
    n160["A repository on GitHub<br/><small>Port</small>"]:::neutral
    n161["A repository compared with its settings<br/><small>Function</small>"]:::held
    n162["A repository kept in memory<br/><small>Function</small>"]:::held
    n163["The repositories a scenario keeps<br/><small>Port</small>"]:::neutral
    n164["The parts of a repository's settings<br/><small>Vocabulary</small>"]:::neutral
    n165["A repository is set by its project's graph<br/><small>Architecture decision</small>"]:::held
  end
  subgraph rules["Standard library · Rules"]
    n166["Directions<br/><small>Vocabulary</small>"]:::neutral
    n167["As many links as asked<br/><small>Requirement</small>"]:::held
    n168["Criteria of as many links as asked<br/><small>Acceptance criteria</small>"]:::held
    n169["A node never reaches what it must not<br/><small>Requirement</small>"]:::held
    n170["Criteria of a node that never reaches what it must not<br/><small>Acceptance criteria</small>"]:::held
    n171["A node reaches what it must<br/><small>Requirement</small>"]:::held
    n172["Criteria of a node that reaches what it must<br/><small>Acceptance criteria</small>"]:::held
    n173["Effects a node may not have<br/><small>Requirement</small>"]:::held
    n174["Criteria of effects a node may not have<br/><small>Acceptance criteria</small>"]:::held
    n175["Words of a vocabulary<br/><small>Requirement</small>"]:::held
    n176["Criteria of words of a vocabulary<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph scenarios["Standard library · Scenarios"]
    n177["Commands are made for each effect<br/><small>Scenario</small>"]:::held
    n178["The device, in memory<br/><small>Scenario</small>"]:::held
    n179["Seeded draws keep their promise<br/><small>Scenario</small>"]:::held
    n180["In memory<br/><small>Technical choice</small>"]:::held
    n181["Judged as the language says<br/><small>Scenario</small>"]:::held
    n182["Judged strictly<br/><small>Scenario</small>"]:::held
    n183["Judged as the language says<br/><small>Technical choice</small>"]:::held
    n184["A pull request merged once it holds<br/><small>Scenario</small>"]:::held
    n185["A version carried across the projects<br/><small>Scenario</small>"]:::held
    n186["A pull request opened<br/><small>Scenario</small>"]:::held
    n187["A repository kept in memory<br/><small>Scenario</small>"]:::held
    n188["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n189["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n190["The language of the library's scenarios<br/><small>Decision</small>"]:::neutral
    n191["How the scenarios' versions are carried<br/><small>Function</small>"]:::held
    n192["How the scenarios' pull requests are opened<br/><small>Function</small>"]:::held
    n193["The scenarios' settings<br/><small>Technical choice</small>"]:::held
    n194["Strict<br/><small>Environment</small>"]:::neutral
    n195["Judged strictly<br/><small>Technical choice</small>"]:::held
    n196["Test<br/><small>Environment</small>"]:::neutral
    n197["The tooling, in memory<br/><small>Scenario</small>"]:::held
  end
  subgraph sdlc["Standard library · SDLC"]
    n198["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n199["Its data reviewed<br/><small>Obligation</small>"]:::neutral
    n200["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n201["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n202["The next version<br/><small>Shipment</small>"]:::unknown
    n203["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n204["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n205["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n206["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n207["Its rules held<br/><small>Obligation</small>"]:::neutral
    n208["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n209["The standard library<br/><small>Artefact</small>"]:::unknown
    n210["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n211["Exit status<br/><small>Standard</small>"]:::neutral
    n212["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n213["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n214["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n215["Node.js events<br/><small>Standard</small>"]:::neutral
    n216["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n217["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n218["npm's command line<br/><small>Standard</small>"]:::neutral
    n219["npm's manifest<br/><small>Standard</small>"]:::neutral
    n220["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n221["Positions in a file<br/><small>Standard</small>"]:::neutral
    n222["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n223["Text file<br/><small>Standard</small>"]:::neutral
    n224["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph tooling["Standard library · Tooling"]
    n225["A browser kept in memory<br/><small>Function</small>"]:::held
    n226["Browser script<br/><small>Port</small>"]:::neutral
    n227["The language the library's commands and tools speak in.<br/><small>Decision</small>"]:::neutral
    n228["Commands run in the engine<br/><small>Implementation</small>"]:::neutral
    n229["Project files<br/><small>Port</small>"]:::neutral
    n230["Files kept in memory<br/><small>Function</small>"]:::held
    n231["Files written<br/><small>Port</small>"]:::neutral
    n232["Headless browser<br/><small>Port</small>"]:::neutral
    n233["Chromium without a screen<br/><small>Decision</small>"]:::neutral
    n234["The machine's files<br/><small>Implementation</small>"]:::neutral
    n235["What the machine must also have<br/><small>Port</small>"]:::neutral
    n236["Node's command line<br/><small>Implementation</small>"]:::neutral
    n237["Programs run by Node<br/><small>Implementation</small>"]:::neutral
    n238["Where a package comes from<br/><small>Vocabulary</small>"]:::neutral
    n239["Where a package comes from<br/><small>Port</small>"]:::neutral
    n240["Playwright's API<br/><small>Standard</small>"]:::neutral
    n241["Chromium, driven by Playwright<br/><small>Implementation</small>"]:::neutral
    n242["Playwright's browser, installed<br/><small>Implementation</small>"]:::neutral
    n243["Playwright<br/><small>Package</small>"]:::held
    n244["Commands of a program<br/><small>Port</small>"]:::neutral
    n245["Programs run<br/><small>Port</small>"]:::neutral
    n246["Programs run in memory<br/><small>Function</small>"]:::held
    n247["The programs a scenario keeps: the file it says a program writes is written when that program runs.<br/><small>Port</small>"]:::neutral
    n248["What repairs a project<br/><small>Port</small>"]:::neutral
    n249["The SDLC's tooling is realized once<br/><small>Architecture decision</small>"]:::held
    n250["What the library's tools say<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n251["CSSOM View<br/><small>Standard</small>"]:::neutral
    n252["HTTP<br/><small>Standard</small>"]:::neutral
    n253["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n254["Media types<br/><small>Standard</small>"]:::neutral
    n255["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n256["Server-sent events<br/><small>Standard</small>"]:::neutral
    n257["UI events<br/><small>Standard</small>"]:::neutral
    n258["URI<br/><small>Standard</small>"]:::neutral
    n259["Web Audio API<br/><small>Standard</small>"]:::neutral
    n260["Web Speech API<br/><small>Standard</small>"]:::neutral
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
  n14 -->|Written in| n227
  n15 -->|Depends on| n244
  n16 -->|Serves| n104
  n16 -->|Part of| n15
  n16 -->|For| n2
  n16 -->|Depends on| n20
  n16 -->|Depends on| n146
  n16 -->|Depends on| n157
  n16 -->|Depends on| n14
  n16 -->|Depends on| n211
  n16 -->|Depends on| n4
  n16 -->|Depends on| n220
  n16 -->|Depends on| n6
  n16 -->|Depends on| n7
  n17 -->|Serves| n104
  n17 -->|Part of| n15
  n17 -->|For| n2
  n17 -->|Depends on| n20
  n17 -->|Depends on| n146
  n17 -->|Depends on| n157
  n17 -->|Depends on| n14
  n17 -->|Depends on| n211
  n17 -->|Depends on| n4
  n17 -->|Depends on| n220
  n17 -->|Depends on| n6
  n18 -->|Serves| n104
  n18 -->|Part of| n15
  n18 -->|For| n2
  n18 -->|Depends on| n19
  n18 -->|Depends on| n229
  n18 -->|Depends on| n245
  n18 -->|Depends on| n14
  n18 -->|Depends on| n211
  n18 -->|Depends on| n5
  n18 -->|Depends on| n220
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
  n30 -->|Written in| n227
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
  n87 -->|Depends on| n257
  n88 -->|Implements| n96
  n89 -->|Implements| n100
  n89 -->|Depends on| n45
  n89 -->|Depends on| n260
  n90 -->|Implements| n97
  n90 -->|Depends on| n255
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
  n136 -->|Serves| n105
  n136 -->|Serves| n106
  n136 -->|Serves| n107
  n136 -->|Serves| n108
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
  n141 -->|Serves| n109
  n142 -->|Serves| n105
  n142 -->|Serves| n106
  n142 -->|Serves| n107
  n142 -->|Serves| n108
  n142 -->|Serves| n109
  n144 -->|Implements| n143
  n144 -->|Depends on| n151
  n144 -->|Depends on| n155
  n144 -->|Depends on| n156
  n144 -->|Depends on| n213
  n144 -->|Depends on| n215
  n144 -->|Depends on| n211
  n145 -->|Implements| n143
  n145 -->|Depends on| n151
  n145 -->|Depends on| n155
  n145 -->|Depends on| n154
  n145 -->|Depends on| n213
  n145 -->|Depends on| n215
  n145 -->|Depends on| n211
  n145 -->|Depends on| n6
  n147 -->|Serves| n107
  n147 -->|Implements| n146
  n147 -->|Implements| n148
  n149 -->|Implements| n146
  n149 -->|Depends on| n150
  n149 -->|Depends on| n213
  n149 -->|Depends on| n215
  n149 -->|Depends on| n211
  n149 -->|Depends on| n6
  n149 -->|Depends on| n223
  n150 -->|Serves| n105
  n151 -->|Serves| n105
  n152 -->|Implements| n157
  n152 -->|Depends on| n155
  n152 -->|Depends on| n154
  n152 -->|Depends on| n213
  n152 -->|Depends on| n215
  n152 -->|Depends on| n211
  n152 -->|Depends on| n6
  n152 -->|Depends on| n7
  n152 -->|Depends on| n143
  n153 -->|Implements| n160
  n153 -->|Depends on| n155
  n153 -->|Depends on| n213
  n153 -->|Depends on| n215
  n153 -->|Depends on| n211
  n153 -->|Depends on| n156
  n153 -->|Depends on| n6
  n153 -->|Depends on| n7
  n154 -->|Serves| n105
  n155 -->|Serves| n105
  n156 -->|Serves| n105
  n158 -->|Serves| n107
  n158 -->|Implements| n157
  n158 -->|Implements| n159
  n158 -->|Depends on| n155
  n158 -->|Depends on| n154
  n158 -->|Depends on| n6
  n161 -->|Serves| n107
  n161 -->|Depends on| n164
  n162 -->|Serves| n107
  n162 -->|Implements| n160
  n162 -->|Implements| n163
  n164 -->|Serves| n107
  n165 -->|Serves| n107
  n165 -->|Applied by| n156
  n165 -->|Applied by| n164
  n165 -->|Applied by| n161
  n165 -->|Applied by| n160
  n165 -->|Applied by| n153
  n165 -->|Applied by| n163
  n165 -->|Applied by| n162
  n166 -->|Serves| n109
  n167 -->|Refines| n109
  n167 -->|Depends on| n4
  n168 -->|Accepts| n167
  n169 -->|Refines| n109
  n169 -->|Depends on| n4
  n170 -->|Accepts| n169
  n171 -->|Refines| n109
  n172 -->|Accepts| n171
  n173 -->|Refines| n109
  n173 -->|Depends on| n4
  n174 -->|Accepts| n173
  n175 -->|Refines| n109
  n175 -->|Depends on| n4
  n176 -->|Accepts| n175
  n177 -->|Verifies| n26
  n177 -->|In| n196
  n177 -->|Depends on| n26
  n177 -->|Depends on| n27
  n177 -->|Depends on| n189
  n177 -->|Depends on| n188
  n178 -->|Verifies| n94
  n178 -->|Verifies| n103
  n178 -->|Verifies| n84
  n178 -->|Verifies| n93
  n178 -->|In| n196
  n178 -->|Depends on| n96
  n178 -->|Depends on| n100
  n178 -->|Depends on| n99
  n178 -->|Depends on| n97
  n178 -->|Depends on| n98
  n178 -->|Depends on| n83
  n178 -->|Depends on| n102
  n178 -->|Depends on| n189
  n178 -->|Depends on| n4
  n178 -->|Depends on| n188
  n179 -->|Verifies| n11
  n179 -->|In| n196
  n179 -->|Depends on| n11
  n179 -->|Depends on| n189
  n179 -->|Depends on| n4
  n179 -->|Depends on| n188
  n180 -->|Chooses| n94
  n180 -->|Chooses| n103
  n180 -->|Chooses| n84
  n180 -->|Chooses| n93
  n180 -->|Chooses| n230
  n180 -->|Chooses| n225
  n180 -->|Chooses| n162
  n180 -->|Chooses| n147
  n180 -->|Chooses| n158
  n180 -->|Chooses| n246
  n180 -->|In| n196
  n180 -->|Follows| n82
  n180 -->|Serves| n107
  n181 -->|Verifies| n39
  n181 -->|In| n196
  n181 -->|Depends on| n41
  n181 -->|Depends on| n188
  n182 -->|Verifies| n40
  n182 -->|In| n194
  n182 -->|Depends on| n41
  n182 -->|Depends on| n188
  n183 -->|Chooses| n39
  n183 -->|In| n196
  n183 -->|Follows| n82
  n183 -->|Serves| n107
  n184 -->|Verifies| n16
  n184 -->|Verifies| n17
  n184 -->|Verifies| n147
  n184 -->|Verifies| n158
  n184 -->|Verifies| n192
  n184 -->|In| n196
  n184 -->|Depends on| n17
  n184 -->|Depends on| n16
  n184 -->|Depends on| n148
  n184 -->|Depends on| n159
  n184 -->|Depends on| n189
  n184 -->|Depends on| n14
  n184 -->|Depends on| n188
  n184 -->|Depends on| n4
  n184 -->|Depends on| n211
  n185 -->|Verifies| n18
  n185 -->|Verifies| n246
  n185 -->|Verifies| n191
  n185 -->|In| n196
  n185 -->|Depends on| n18
  n185 -->|Depends on| n229
  n185 -->|Depends on| n247
  n185 -->|Depends on| n189
  n185 -->|Depends on| n14
  n185 -->|Depends on| n188
  n185 -->|Depends on| n4
  n185 -->|Depends on| n5
  n185 -->|Depends on| n211
  n186 -->|Verifies| n17
  n186 -->|Verifies| n147
  n186 -->|Verifies| n158
  n186 -->|Verifies| n192
  n186 -->|In| n196
  n186 -->|Depends on| n17
  n186 -->|Depends on| n148
  n186 -->|Depends on| n159
  n186 -->|Depends on| n189
  n186 -->|Depends on| n14
  n186 -->|Depends on| n188
  n186 -->|Depends on| n4
  n186 -->|Depends on| n211
  n187 -->|Verifies| n162
  n187 -->|Verifies| n161
  n187 -->|In| n196
  n187 -->|Depends on| n160
  n187 -->|Depends on| n163
  n187 -->|Depends on| n161
  n187 -->|Depends on| n189
  n187 -->|Depends on| n188
  n187 -->|Depends on| n4
  n188 -->|Written in| n190
  n191 -->|Serves| n107
  n191 -->|Implements| n19
  n191 -->|Depends on| n189
  n192 -->|Serves| n107
  n192 -->|Implements| n20
  n192 -->|Depends on| n189
  n193 -->|Chooses| n192
  n193 -->|Chooses| n191
  n193 -->|In| n196
  n193 -->|Follows| n82
  n193 -->|Serves| n107
  n195 -->|Chooses| n40
  n195 -->|In| n194
  n195 -->|Follows| n82
  n195 -->|Serves| n107
  n197 -->|Verifies| n230
  n197 -->|Verifies| n225
  n197 -->|In| n196
  n197 -->|Depends on| n229
  n197 -->|Depends on| n231
  n197 -->|Depends on| n232
  n197 -->|Depends on| n226
  n197 -->|Depends on| n189
  n197 -->|Depends on| n188
  n198 -->|Applies the family| n57
  n198 -->|Serves| n110
  n199 -->|Applies the family| n63
  n199 -->|Serves| n110
  n200 -->|Applies the family| n52
  n200 -->|Serves| n110
  n201 -->|Applies the family| n71
  n201 -->|Serves| n110
  n202 -->|Ships| n209
  n202 -->|Follows the policy| n210
  n203 -->|Applies the family| n67
  n203 -->|Serves| n110
  n205 -->|Runs elsewhere| n202
  n205 -->|Its writer's settings| n204
  n206 -->|Applies the family| n69
  n206 -->|Serves| n110
  n207 -->|Applies the family| n65
  n207 -->|Serves| n110
  n208 -->|Ships| n205
  n210 -->|Its obligations| n201
  n210 -->|Its obligations| n206
  n210 -->|Its obligations| n200
  n210 -->|Its obligations| n207
  n210 -->|Its obligations| n203
  n210 -->|Its obligations| n198
  n210 -->|Its obligations| n199
  n211 -->|Serves| n105
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
  n225 -->|Implements| n232
  n225 -->|Implements| n226
  n225 -->|Depends on| n4
  n228 -->|Implements| n244
  n228 -->|Depends on| n211
  n230 -->|Implements| n229
  n230 -->|Implements| n231
  n230 -->|Depends on| n11
  n230 -->|Depends on| n6
  n234 -->|Implements| n229
  n234 -->|Depends on| n12
  n234 -->|Depends on| n214
  n236 -->|Implements| n244
  n236 -->|Depends on| n212
  n236 -->|Depends on| n211
  n236 -->|Depends on| n7
  n237 -->|Implements| n245
  n237 -->|Depends on| n213
  n237 -->|Depends on| n215
  n237 -->|Depends on| n211
  n237 -->|Depends on| n220
  n238 -->|Serves| n107
  n240 -->|Serves| n105
  n241 -->|Implements| n232
  n241 -->|Uses| n243
  n241 -->|Depends on| n233
  n241 -->|Depends on| n240
  n241 -->|Depends on| n4
  n241 -->|Depends on| n49
  n242 -->|Implements| n235
  n242 -->|Uses| n243
  n242 -->|Depends on| n250
  n246 -->|Serves| n107
  n246 -->|Implements| n245
  n246 -->|Implements| n247
  n246 -->|Depends on| n211
  n246 -->|Depends on| n229
  n249 -->|Serves| n107
  n249 -->|Applied by| n244
  n249 -->|Applied by| n236
  n249 -->|Applied by| n228
  n249 -->|Applied by| n235
  n249 -->|Applied by| n242
  n249 -->|Applied by| n248
  n249 -->|Applied by| n229
  n249 -->|Applied by| n231
  n249 -->|Applied by| n234
  n249 -->|Applied by| n230
  n249 -->|Applied by| n232
  n249 -->|Applied by| n241
  n249 -->|Applied by| n226
  n249 -->|Applied by| n225
  n249 -->|Applied by| n239
  n250 -->|Written in| n227
  n251 -->|Serves| n105
  n252 -->|Serves| n105
  n253 -->|Serves| n105
  n254 -->|Serves| n105
  n255 -->|Serves| n105
  n256 -->|Serves| n105
  n257 -->|Serves| n105
  n258 -->|Serves| n105
  n259 -->|Serves| n105
  n260 -->|Serves| n105
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
