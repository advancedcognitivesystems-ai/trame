# Layers

*The graph in force on 24 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph appearance["Trame · Appearance"]
    n0["Drawing of the explorer<br/><small>Decision</small>"]:::neutral
    n1["Drawing of a graph<br/><small>Decision</small>"]:::neutral
    n2["Legend of a graph<br/><small>Decision</small>"]:::neutral
    n3["Motion<br/><small>Decision</small>"]:::neutral
    n4["Narrow screen<br/><small>Decision</small>"]:::neutral
    n5["Opacities<br/><small>Decision</small>"]:::neutral
    n6["Page layout<br/><small>Decision</small>"]:::neutral
    n7["Palette<br/><small>Decision</small>"]:::neutral
    n8["Radii<br/><small>Decision</small>"]:::neutral
    n9["Spacing<br/><small>Decision</small>"]:::neutral
    n10["Strokes<br/><small>Decision</small>"]:::neutral
    n11["Drawing of a timeline<br/><small>Decision</small>"]:::neutral
    n12["Type scale<br/><small>Decision</small>"]:::neutral
    n13["Typography<br/><small>Decision</small>"]:::neutral
  end
  subgraph architecture["Trame · Architecture"]
    n14["Where an amendment goes<br/><small>Port</small>"]:::neutral
    n15["Browser<br/><small>Environment</small>"]:::neutral
    n16["Bundler<br/><small>Port</small>"]:::neutral
    n17["Clock<br/><small>Port</small>"]:::neutral
    n18["Command line<br/><small>Port</small>"]:::neutral
    n19["Compression<br/><small>Port</small>"]:::neutral
    n20["Decompression<br/><small>Port</small>"]:::neutral
    n21["File reading<br/><small>Port</small>"]:::neutral
    n22["File trees<br/><small>Port</small>"]:::neutral
    n23["File writing<br/><small>Port</small>"]:::neutral
    n24["Feed of the graph<br/><small>Port</small>"]:::neutral
    n25["Hashing<br/><small>Port</small>"]:::neutral
    n26["HTTP server<br/><small>Port</small>"]:::neutral
    n27["Results kept<br/><small>Port</small>"]:::neutral
    n28["Runs kept<br/><small>Port</small>"]:::neutral
    n29["Effects come from the vocabulary<br/><small>Architecture rule</small>"]:::held
    n30["Local<br/><small>Environment</small>"]:::neutral
    n31["Module loader<br/><small>Port</small>"]:::neutral
    n32["Only commands write<br/><small>Architecture rule</small>"]:::held
    n33["Packages installed<br/><small>Port</small>"]:::neutral
    n34["Reports on packages<br/><small>Port</small>"]:::neutral
    n35["Amendments from the page<br/><small>Port</small>"]:::neutral
    n36["The page in a browser<br/><small>Component</small>"]:::neutral
    n37["Memory of the page<br/><small>Port</small>"]:::neutral
    n38["Window of the page<br/><small>Port</small>"]:::neutral
    n39["Paths<br/><small>Port</small>"]:::neutral
    n40["Prelude<br/><small>Port</small>"]:::neutral
    n41["Process<br/><small>Port</small>"]:::neutral
    n42["Process log<br/><small>Port</small>"]:::neutral
    n43["Programs<br/><small>Port</small>"]:::neutral
    n44["Rendering does not read the graph<br/><small>Architecture rule</small>"]:::held
    n45["Page resources<br/><small>Port</small>"]:::neutral
    n46["Where runs are kept<br/><small>Port</small>"]:::neutral
    n47["Server log<br/><small>Port</small>"]:::neutral
    n48["A session of Claude Code<br/><small>Environment</small>"]:::neutral
    n49["Signatures<br/><small>Port</small>"]:::neutral
    n50["Syntax trees<br/><small>Port</small>"]:::neutral
    n51["Terminal<br/><small>Port</small>"]:::neutral
    n52["Terminal log<br/><small>Port</small>"]:::neutral
    n53["Test<br/><small>Environment</small>"]:::neutral
    n54["Timer<br/><small>Port</small>"]:::neutral
    n55["Trame on the command line<br/><small>Component</small>"]:::neutral
    n56["TypeScript compiler<br/><small>Port</small>"]:::neutral
    n57["Write log<br/><small>Port</small>"]:::neutral
  end
  subgraph browser["Trame · The page in a browser"]
    n58["Amendments sent to trame dev<br/><small>Implementation</small>"]:::unknown
    n59["The browser's gzip<br/><small>Implementation</small>"]:::unknown
    n60["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::unknown
    n61["Local storage<br/><small>Implementation</small>"]:::unknown
    n62["The browser's window<br/><small>Implementation</small>"]:::unknown
    n63["Explorer of a graph<br/><small>Function</small>"]:::unknown
    n64["Show the graph<br/><small>Entry point</small>"]:::unknown
    n65["The browser runs the page<br/><small>Technical choice</small>"]:::unknown
    n66["The page is assembled<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph command-scenarios["Trame · Scenarios of the commands"]
    n67["An advance, in memory<br/><small>Scenario</small>"]:::held
    n68["What the engines an advance starts answer in a scenario<br/><small>Decision</small>"]:::neutral
    n69["What an amendment is checked with<br/><small>Decision</small>"]:::neutral
    n70["What the example is assembled for<br/><small>Decision</small>"]:::neutral
    n71["A body is read and checked<br/><small>Scenario</small>"]:::held
    n72["Bodies the reader is given<br/><small>Decision</small>"]:::neutral
    n73["A build planned<br/><small>Scenario</small>"]:::held
    n74["The command line<br/><small>Scenario</small>"]:::held
    n75["A component assembled<br/><small>Scenario</small>"]:::held
    n76["A component run<br/><small>Scenario</small>"]:::held
    n77["Declarations published<br/><small>Scenario</small>"]:::held
    n78["trame dev<br/><small>Scenario</small>"]:::held
    n79["What trame dev is shown in a scenario<br/><small>Decision</small>"]:::neutral
    n80["The doctor<br/><small>Scenario</small>"]:::held
    n81["Evidence given for someone<br/><small>Scenario</small>"]:::held
    n82["An example's output written again<br/><small>Scenario</small>"]:::held
    n83["The examples of a project, met<br/><small>Scenario</small>"]:::held
    n84["A library carries kinds<br/><small>Scenario</small>"]:::held
    n85["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n86["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
    n87["A library released<br/><small>Scenario</small>"]:::held
    n88["The manifest written<br/><small>Scenario</small>"]:::held
    n89["The packages audited<br/><small>Scenario</small>"]:::held
    n90["The packages upgraded<br/><small>Scenario</small>"]:::held
    n91["The page delivered<br/><small>Scenario</small>"]:::held
    n92["The page exported<br/><small>Scenario</small>"]:::held
    n93["The page of the graph<br/><small>Scenario</small>"]:::held
    n94["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n95["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n96["A command of the project<br/><small>Scenario</small>"]:::held
    n97["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n98["A project started<br/><small>Scenario</small>"]:::held
    n99["A published value changed<br/><small>Scenario</small>"]:::held
    n100["The registry filled<br/><small>Scenario</small>"]:::held
    n101["Declarations rewritten<br/><small>Decision</small>"]:::neutral
    n102["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n103["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n104["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n105["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n106["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n107["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n108["A value amended<br/><small>Scenario</small>"]:::held
    n109["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n110["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n111["Advance<br/><small>Entry point</small>"]:::held
    n112["Amend<br/><small>Entry point</small>"]:::held
    n113["An amendment prepared<br/><small>Function</small>"]:::held
    n114["Assemble a component<br/><small>Entry point</small>"]:::held
    n115["Assembler<br/><small>Function</small>"]:::held
    n116["Audit the packages<br/><small>Entry point</small>"]:::held
    n117["Build<br/><small>Entry point</small>"]:::held
    n118["Two builds compared<br/><small>Function</small>"]:::held
    n119["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n120["Deliver<br/><small>Entry point</small>"]:::held
    n121["Start trame dev<br/><small>Entry point</small>"]:::held
    n122["Ask the machine<br/><small>Entry point</small>"]:::held
    n123["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n124["Payload<br/><small>Entry point</small>"]:::held
    n125["The engine's modules<br/><small>Function</small>"]:::held
    n126["Rewriting an example<br/><small>Function</small>"]:::held
    n127["Examples<br/><small>Entry point</small>"]:::held
    n128["Export the page<br/><small>Entry point</small>"]:::held
    n129["Help<br/><small>Entry point</small>"]:::held
    n130["Start a project<br/><small>Entry point</small>"]:::held
    n131["Plan<br/><small>Entry point</small>"]:::held
    n132["Preparation<br/><small>Function</small>"]:::held
    n133["The project's commands<br/><small>Function</small>"]:::held
    n134["Publish<br/><small>Entry point</small>"]:::held
    n135["Record evidence<br/><small>Entry point</small>"]:::held
    n136["A module of references<br/><small>Function</small>"]:::held
    n137["Fill the registry<br/><small>Entry point</small>"]:::held
    n138["Release a version<br/><small>Entry point</small>"]:::held
    n139["Render a view<br/><small>Function</small>"]:::held
    n140["Run a component<br/><small>Entry point</small>"]:::held
    n141["Ship<br/><small>Entry point</small>"]:::held
    n142["Show a view<br/><small>Entry point</small>"]:::held
    n143["Take the snapshot<br/><small>Entry point</small>"]:::held
    n144["Test the laws<br/><small>Entry point</small>"]:::held
    n145["Upgrade<br/><small>Entry point</small>"]:::held
    n146["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n147["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n148["Default rank<br/><small>Decision</small>"]:::neutral
    n149["Documentation comment<br/><small>Decision</small>"]:::neutral
    n150["Names of the documents<br/><small>Standard</small>"]:::neutral
    n151["The frozen API<br/><small>Standard</small>"]:::neutral
    n152["JSON formatting<br/><small>Decision</small>"]:::neutral
    n153["The commands the engine keeps<br/><small>Decision</small>"]:::neutral
    n154["The language's names<br/><small>Decision</small>"]:::neutral
    n155["Project layout<br/><small>Decision</small>"]:::neutral
    n156["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n157["How a project starts<br/><small>Decision</small>"]:::neutral
    n158["Trame references<br/><small>Standard</small>"]:::neutral
    n159["Names of steps<br/><small>Decision</small>"]:::neutral
    n160["Trame's commands<br/><small>Standard</small>"]:::neutral
    n161["Trame's environment<br/><small>Standard</small>"]:::neutral
    n162["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n163["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n164["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n165["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n166["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n167["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n168["How a number is written<br/><small>Decision</small>"]:::neutral
    n169["Punctuation of documents<br/><small>Function</small>"]:::held
    n170["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n171["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n172["Values with their units<br/><small>Function</small>"]:::held
    n173["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n174["Assembly<br/><small>Function</small>"]:::held
    n175["Compilation API<br/><small>Function</small>"]:::held
    n176["Compiler<br/><small>Function</small>"]:::held
    n177["Cycles<br/><small>Function</small>"]:::held
    n178["Date bundle<br/><small>Function</small>"]:::held
    n179["trame dev server<br/><small>Function</small>"]:::held
    n180["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n181["Differences<br/><small>Function</small>"]:::held
    n182["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n183["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n184["Fingerprints<br/><small>Function</small>"]:::held
    n185["Pseudo-random generator<br/><small>Function</small>"]:::held
    n186["Graph<br/><small>Function</small>"]:::held
    n187["Judged harder<br/><small>Function</small>"]:::held
    n188["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n189["Laws<br/><small>Function</small>"]:::held
    n190["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n191["Lock<br/><small>Function</small>"]:::held
    n192["Machine outputs<br/><small>Function</small>"]:::held
    n193["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n194["Payload<br/><small>Function</small>"]:::held
    n195["Positions<br/><small>Function</small>"]:::held
    n196["Project<br/><small>Function</small>"]:::held
    n197["The runs of a project<br/><small>Function</small>"]:::held
    n198["References<br/><small>Function</small>"]:::held
    n199["A shipment's pipeline<br/><small>Function</small>"]:::held
    n200["Static reading<br/><small>Function</small>"]:::held
    n201["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n202["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n203["Views<br/><small>Function</small>"]:::held
    n204["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n205["Accept a candidate<br/><small>Requirement</small>"]:::held
    n206["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n207["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n208["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n209["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n210["Records of the releases<br/><small>Function</small>"]:::held
    n211["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n212["Attribute presence<br/><small>Syntax element</small>"]:::held
    n213["Attribute selector<br/><small>Syntax element</small>"]:::held
    n214["Class selector<br/><small>Syntax element</small>"]:::held
    n215["Declaration<br/><small>Syntax element</small>"]:::held
    n216["Rule<br/><small>Syntax element</small>"]:::held
    n217["CSS style sheets<br/><small>Language</small>"]:::held
    n218["Variable<br/><small>Syntax element</small>"]:::held
    n219["Custom property<br/><small>Syntax element</small>"]:::held
    n220["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n221["Escaped text<br/><small>Syntax element</small>"]:::held
    n222["Attributes<br/><small>Syntax element</small>"]:::held
    n223["Element over several lines<br/><small>Syntax element</small>"]:::held
    n224["HTML element<br/><small>Syntax element</small>"]:::held
    n225["End tag<br/><small>Syntax element</small>"]:::held
    n226["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n227["HTML markup<br/><small>Language</small>"]:::held
    n228["Start tag<br/><small>Syntax element</small>"]:::held
    n229["JSON in a script<br/><small>Syntax element</small>"]:::held
    n230["Media feature<br/><small>Syntax element</small>"]:::held
    n231["Media rule<br/><small>Syntax element</small>"]:::held
    n232["Negation<br/><small>Syntax element</small>"]:::held
    n233["Path data<br/><small>Syntax element</small>"]:::held
    n234["Script<br/><small>Syntax element</small>"]:::held
    n235["Selector list<br/><small>Syntax element</small>"]:::held
    n236["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n237["Drivers<br/><small>Function</small>"]:::held
    n238["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n239["Answers without crashing<br/><small>Requirement</small>"]:::held
    n240["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n241["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n242["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n243["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n244["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n245["Complete declaration<br/><small>Requirement</small>"]:::held
    n246["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n247["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n248["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n249["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n250["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n251["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n252["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n253["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n254["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n255["Same input, same answer<br/><small>Requirement</small>"]:::held
    n256["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n257["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n258["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n259["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n260["What belongs to a library<br/><small>Requirement</small>"]:::held
    n261["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n262["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n263["A release is settled<br/><small>Requirement</small>"]:::held
    n264["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n265["Anchor<br/><small>Syntax element</small>"]:::held
    n266["Backtick string<br/><small>Syntax element</small>"]:::held
    n267["Blank line<br/><small>Syntax element</small>"]:::held
    n268["Block quote<br/><small>Syntax element</small>"]:::held
    n269["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n270["Code block<br/><small>Syntax element</small>"]:::held
    n271["Code span<br/><small>Syntax element</small>"]:::held
    n272["CommonMark<br/><small>Standard</small>"]:::neutral
    n273["Collapsible block<br/><small>Syntax element</small>"]:::held
    n274["Emphasis<br/><small>Syntax element</small>"]:::held
    n275["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n276["Heading<br/><small>Syntax element</small>"]:::held
    n277["Link<br/><small>Syntax element</small>"]:::held
    n278["List item<br/><small>Syntax element</small>"]:::held
    n279["Relative reference<br/><small>Syntax element</small>"]:::held
    n280["Small text<br/><small>Syntax element</small>"]:::held
    n281["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n282["Table<br/><small>Syntax element</small>"]:::held
    n283["Table cell<br/><small>Syntax element</small>"]:::held
    n284["Delimiter row<br/><small>Syntax element</small>"]:::held
    n285["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n286["Around the documents<br/><small>Decision</small>"]:::neutral
    n287["Documents in the page<br/><small>Decision</small>"]:::neutral
    n288["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n289["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n290["Class definition<br/><small>Syntax element</small>"]:::held
    n291["Flowchart<br/><small>Syntax element</small>"]:::held
    n292["Gantt chart<br/><small>Syntax element</small>"]:::held
    n293["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n294["Section<br/><small>Syntax element</small>"]:::held
    n295["Task<br/><small>Syntax element</small>"]:::held
    n296["Mermaid<br/><small>Standard</small>"]:::neutral
    n297["Label<br/><small>Syntax element</small>"]:::held
    n298["Link<br/><small>Syntax element</small>"]:::held
    n299["Node<br/><small>Syntax element</small>"]:::held
    n300["Milestone<br/><small>Syntax element</small>"]:::held
    n301["Node style<br/><small>Syntax element</small>"]:::held
    n302["Style properties<br/><small>Syntax element</small>"]:::held
    n303["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n304["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n305["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n306["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n307["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n308["Dates<br/><small>Function</small>"]:::held
    n309["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n310["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n311["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n312["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n313["Language<br/><small>Decision</small>"]:::neutral
    n314["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n315["Lists<br/><small>Function</small>"]:::held
    n316["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n317["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n318["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n319["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n320["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n321["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n322["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n323["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n324["Grammar of CSS<br/><small>Package</small>"]:::held
    n325["esbuild<br/><small>Package</small>"]:::held
    n326["Grammar of HCL<br/><small>Package</small>"]:::held
    n327["Grammar of HTML<br/><small>Package</small>"]:::held
    n328["Types of Node.js<br/><small>Package</small>"]:::held
    n329["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n330["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n331["The people of the repository<br/><small>Package</small>"]:::neutral
    n332["The standard library<br/><small>Package</small>"]:::neutral
    n333["tsx<br/><small>Package</small>"]:::held
    n334["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n335["TypeScript<br/><small>Package</small>"]:::held
    n336["Order of versions<br/><small>Function</small>"]:::held
    n337["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n338["Banner<br/><small>Syntax element</small>"]:::held
    n339["Brand<br/><small>Syntax element</small>"]:::held
    n340["State of the compilation<br/><small>Syntax element</small>"]:::held
    n341["Dates<br/><small>Syntax element</small>"]:::held
    n342["Head of the document<br/><small>Syntax element</small>"]:::held
    n343["Document picker<br/><small>Syntax element</small>"]:::held
    n344["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n345["Fonts<br/><small>Syntax element</small>"]:::held
    n346["Logo<br/><small>Syntax element</small>"]:::held
    n347["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n348["Main area<br/><small>Syntax element</small>"]:::held
    n349["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n350["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n351["Navigation<br/><small>Syntax element</small>"]:::held
    n352["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n353["Page<br/><small>Function</small>"]:::held
    n354["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n355["Document of the page<br/><small>Syntax element</small>"]:::held
    n356["Regions of the page<br/><small>Decision</small>"]:::neutral
    n357["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n358["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n359["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n360["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n361["Shell<br/><small>Syntax element</small>"]:::held
    n362["Side bar<br/><small>Syntax element</small>"]:::held
    n363["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n364["Colours of a status<br/><small>Syntax element</small>"]:::held
    n365["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n366["Theme<br/><small>Syntax element</small>"]:::held
    n367["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n368["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n369["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n370["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n371["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n372["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n373["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n374["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n375["esbuild<br/><small>Implementation</small>"]:::held
    n376["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n377["Example process<br/><small>Function</small>"]:::held
    n378["Example project<br/><small>Decision</small>"]:::neutral
    n379["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n380["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n381["Amendments in place<br/><small>Implementation</small>"]:::held
    n382["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n383["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n384["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n385["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n386["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n387["A server in memory<br/><small>Function</small>"]:::held
    n388["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n389["Terminal in memory<br/><small>Function</small>"]:::held
    n390["Command line<br/><small>Implementation</small>"]:::held
    n391["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n392["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n393["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n394["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n395["Node paths<br/><small>Implementation</small>"]:::held
    n396["NodePlatform<br/><small>Technical choice</small>"]:::held
    n397["Node process<br/><small>Implementation</small>"]:::unknown
    n398["Node programs<br/><small>Implementation</small>"]:::unknown
    n399["Node terminal<br/><small>Implementation</small>"]:::unknown
    n400["Node timer<br/><small>Implementation</small>"]:::held
    n401["No installer in test<br/><small>Implementation</small>"]:::held
    n402["No registry in test<br/><small>Function</small>"]:::held
    n403["npm installs<br/><small>Implementation</small>"]:::unknown
    n404["npm's reports<br/><small>Implementation</small>"]:::unknown
    n405["Packages by their origin<br/><small>Implementation</small>"]:::held
    n406["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n407["Page resources<br/><small>Implementation</small>"]:::held
    n408["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n409["Results kept in the process<br/><small>Implementation</small>"]:::held
    n410["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n411["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n412["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n413["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n414["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n415["Stopped clock<br/><small>Function</small>"]:::held
    n416["System clock<br/><small>Implementation</small>"]:::unknown
    n417["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n418["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n419["Trame's prelude<br/><small>Implementation</small>"]:::held
    n420["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n421["tsx loader<br/><small>Implementation</small>"]:::held
    n422["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n423["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n424["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n425["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n426["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n427["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n428["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n429["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n430["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n431["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n432["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n433["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n434["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n435["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n436["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n437["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n438["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n439["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n440["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n441["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n442["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n443["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n444["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n445["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n446["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n447["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n448["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n449["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n450["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n451["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n452["Candidate dates<br/><small>Decision</small>"]:::neutral
    n453["Claim sets<br/><small>Decision</small>"]:::neutral
    n454["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n455["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n456["A specification that runs<br/><small>Goal</small>"]:::neutral
    n457["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n458["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n459["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n460["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n461["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n462["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n463["A single source of truth<br/><small>Goal</small>"]:::neutral
    n464["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n465["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n466["Generation 1<br/><small>Release</small>"]:::neutral
    n467["Generation 10<br/><small>Release</small>"]:::neutral
    n468["Generation 100<br/><small>Release</small>"]:::neutral
    n469["Generation 101<br/><small>Release</small>"]:::neutral
    n470["Generation 102<br/><small>Release</small>"]:::neutral
    n471["Generation 103<br/><small>Release</small>"]:::neutral
    n472["Generation 104<br/><small>Release</small>"]:::neutral
    n473["Generation 105<br/><small>Release</small>"]:::neutral
    n474["Generation 106<br/><small>Release</small>"]:::neutral
    n475["Generation 107<br/><small>Release</small>"]:::neutral
    n476["Generation 108<br/><small>Release</small>"]:::neutral
    n477["Generation 109<br/><small>Release</small>"]:::neutral
    n478["Generation 11<br/><small>Release</small>"]:::neutral
    n479["Generation 110<br/><small>Release</small>"]:::neutral
    n480["Generation 111<br/><small>Release</small>"]:::neutral
    n481["Generation 112<br/><small>Release</small>"]:::neutral
    n482["Generation 113<br/><small>Release</small>"]:::neutral
    n483["Generation 114<br/><small>Release</small>"]:::neutral
    n484["Generation 115<br/><small>Release</small>"]:::neutral
    n485["Generation 116<br/><small>Release</small>"]:::neutral
    n486["Generation 117<br/><small>Release</small>"]:::neutral
    n487["Generation 118<br/><small>Release</small>"]:::neutral
    n488["Generation 12<br/><small>Release</small>"]:::neutral
    n489["Generation 13<br/><small>Release</small>"]:::neutral
    n490["Generation 14<br/><small>Release</small>"]:::neutral
    n491["Generation 15<br/><small>Release</small>"]:::neutral
    n492["Generation 16<br/><small>Release</small>"]:::neutral
    n493["Generation 17<br/><small>Release</small>"]:::neutral
    n494["Generation 18<br/><small>Release</small>"]:::neutral
    n495["Generation 19<br/><small>Release</small>"]:::neutral
    n496["Generation 2<br/><small>Release</small>"]:::neutral
    n497["Generation 20<br/><small>Release</small>"]:::neutral
    n498["Generation 21<br/><small>Release</small>"]:::neutral
    n499["Generation 22<br/><small>Release</small>"]:::neutral
    n500["Generation 23<br/><small>Release</small>"]:::neutral
    n501["Generation 24<br/><small>Release</small>"]:::neutral
    n502["Generation 25<br/><small>Release</small>"]:::neutral
    n503["Generation 26<br/><small>Release</small>"]:::neutral
    n504["Generation 27<br/><small>Release</small>"]:::neutral
    n505["Generation 28<br/><small>Release</small>"]:::neutral
    n506["Generation 29<br/><small>Release</small>"]:::neutral
    n507["Generation 3<br/><small>Release</small>"]:::neutral
    n508["Generation 30<br/><small>Release</small>"]:::neutral
    n509["Generation 31<br/><small>Release</small>"]:::neutral
    n510["Generation 32<br/><small>Release</small>"]:::neutral
    n511["Generation 33<br/><small>Release</small>"]:::neutral
    n512["Generation 34<br/><small>Release</small>"]:::neutral
    n513["Generation 35<br/><small>Release</small>"]:::neutral
    n514["Generation 36<br/><small>Release</small>"]:::neutral
    n515["Generation 37<br/><small>Release</small>"]:::neutral
    n516["Generation 38<br/><small>Release</small>"]:::neutral
    n517["Generation 39<br/><small>Release</small>"]:::neutral
    n518["Generation 4<br/><small>Release</small>"]:::neutral
    n519["Generation 40<br/><small>Release</small>"]:::neutral
    n520["Generation 41<br/><small>Release</small>"]:::neutral
    n521["Generation 42<br/><small>Release</small>"]:::neutral
    n522["Generation 43<br/><small>Release</small>"]:::neutral
    n523["Generation 44<br/><small>Release</small>"]:::neutral
    n524["Generation 45<br/><small>Release</small>"]:::neutral
    n525["Generation 46<br/><small>Release</small>"]:::neutral
    n526["Generation 47<br/><small>Release</small>"]:::neutral
    n527["Generation 48<br/><small>Release</small>"]:::neutral
    n528["Generation 49<br/><small>Release</small>"]:::neutral
    n529["Generation 5<br/><small>Release</small>"]:::neutral
    n530["Generation 50<br/><small>Release</small>"]:::neutral
    n531["Generation 51<br/><small>Release</small>"]:::neutral
    n532["Generation 52<br/><small>Release</small>"]:::neutral
    n533["Generation 53<br/><small>Release</small>"]:::neutral
    n534["Generation 54<br/><small>Release</small>"]:::neutral
    n535["Generation 55<br/><small>Release</small>"]:::neutral
    n536["Generation 56<br/><small>Release</small>"]:::neutral
    n537["Generation 57<br/><small>Release</small>"]:::neutral
    n538["Generation 58<br/><small>Release</small>"]:::neutral
    n539["Generation 59<br/><small>Release</small>"]:::neutral
    n540["Generation 6<br/><small>Release</small>"]:::neutral
    n541["Generation 60<br/><small>Release</small>"]:::neutral
    n542["Generation 61<br/><small>Release</small>"]:::neutral
    n543["Generation 62<br/><small>Release</small>"]:::neutral
    n544["Generation 63<br/><small>Release</small>"]:::neutral
    n545["Generation 64<br/><small>Release</small>"]:::neutral
    n546["Generation 65<br/><small>Release</small>"]:::neutral
    n547["Generation 66<br/><small>Release</small>"]:::neutral
    n548["Generation 67<br/><small>Release</small>"]:::neutral
    n549["Generation 68<br/><small>Release</small>"]:::neutral
    n550["Generation 69<br/><small>Release</small>"]:::neutral
    n551["Generation 7<br/><small>Release</small>"]:::neutral
    n552["Generation 70<br/><small>Release</small>"]:::neutral
    n553["Generation 71<br/><small>Release</small>"]:::neutral
    n554["Generation 72<br/><small>Release</small>"]:::neutral
    n555["Generation 73<br/><small>Release</small>"]:::neutral
    n556["Generation 74<br/><small>Release</small>"]:::neutral
    n557["Generation 75<br/><small>Release</small>"]:::neutral
    n558["Generation 76<br/><small>Release</small>"]:::neutral
    n559["Generation 77<br/><small>Release</small>"]:::neutral
    n560["Generation 78<br/><small>Release</small>"]:::neutral
    n561["Generation 79<br/><small>Release</small>"]:::neutral
    n562["Generation 8<br/><small>Release</small>"]:::neutral
    n563["Generation 80<br/><small>Release</small>"]:::neutral
    n564["Generation 81<br/><small>Release</small>"]:::neutral
    n565["Generation 82<br/><small>Release</small>"]:::neutral
    n566["Generation 83<br/><small>Release</small>"]:::neutral
    n567["Generation 84<br/><small>Release</small>"]:::neutral
    n568["Generation 85<br/><small>Release</small>"]:::neutral
    n569["Generation 86<br/><small>Release</small>"]:::neutral
    n570["Generation 87<br/><small>Release</small>"]:::neutral
    n571["Generation 88<br/><small>Release</small>"]:::neutral
    n572["Generation 89<br/><small>Release</small>"]:::neutral
    n573["Generation 9<br/><small>Release</small>"]:::neutral
    n574["Generation 90<br/><small>Release</small>"]:::neutral
    n575["Generation 91<br/><small>Release</small>"]:::neutral
    n576["Generation 92<br/><small>Release</small>"]:::neutral
    n577["Generation 93<br/><small>Release</small>"]:::neutral
    n578["Generation 94<br/><small>Release</small>"]:::neutral
    n579["Generation 95<br/><small>Release</small>"]:::neutral
    n580["Generation 96<br/><small>Release</small>"]:::neutral
    n581["Generation 97<br/><small>Release</small>"]:::neutral
    n582["Generation 98<br/><small>Release</small>"]:::neutral
    n583["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n584["Common rendering<br/><small>Function</small>"]:::held
    n585["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n586["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n587["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n588["Rendering of the files<br/><small>Function</small>"]:::held
    n589["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n590["HTML writer<br/><small>Function</small>"]:::held
    n591["Markdown writer<br/><small>Function</small>"]:::held
    n592["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n593["Mermaid diagrams<br/><small>Function</small>"]:::held
    n594["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n595["Figures of the page<br/><small>Port</small>"]:::neutral
    n596["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n597["The page in HTML<br/><small>Technical choice</small>"]:::held
    n598["Rendering in the page<br/><small>Function</small>"]:::held
    n599["Syntax of the page<br/><small>Port</small>"]:::neutral
    n600["Plain text writer<br/><small>Function</small>"]:::held
    n601["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n602["Figures in SVG<br/><small>Function</small>"]:::held
    n603["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n604["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n605["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n606["Rendering in the terminal<br/><small>Function</small>"]:::held
    n607["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n608["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n609["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n610["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n611["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n612["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n613["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n614["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n615["EngineReckons<br/><small>Scenario</small>"]:::held
    n616["Shape of the example<br/><small>Decision</small>"]:::neutral
    n617["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n618["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n619["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n620["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n621["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n622["Advance<br/><small>Entry point</small>"]:::held
    n623["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n624["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n625["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n626["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n627["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n628["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n629["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n630["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n631["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n632["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n633["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n634["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n635["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n636["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n637["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n638["How a generation is made<br/><small>Policy</small>"]:::neutral
    n639["The graph page<br/><small>Artefact</small>"]:::unknown
    n640["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n641["The graph page opens<br/><small>Check</small>"]:::unknown
    n642["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n643["What the graph page is asked<br/><small>Function</small>"]:::held
    n644["How a generation advances<br/><small>Decision</small>"]:::neutral
    n645["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n646["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n647["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n648["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n649["How a change merges<br/><small>Policy</small>"]:::neutral
    n650["The next generation<br/><small>Shipment</small>"]:::unknown
    n651["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n652["Open the graph page<br/><small>Entry point</small>"]:::held
    n653["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n654["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n655["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n656["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n657["The page's program<br/><small>Artefact</small>"]:::held
    n658["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n659["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n660["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n661["The repository's projects<br/><small>Decision</small>"]:::neutral
    n662["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n663["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n664["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n665["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n666["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n667["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n668["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n669["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n670["How the repository is set<br/><small>Policy</small>"]:::neutral
    n671["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n672["The engine<br/><small>Artefact</small>"]:::unknown
    n673["Trame's repository<br/><small>Decision</small>"]:::neutral
    n674["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n675["Attribution<br/><small>Function</small>"]:::held
    n676["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n677["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n678["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n679["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n680["Ship only what holds<br/><small>Requirement</small>"]:::held
    n681["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n682["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n683["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n684["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n685["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n686["Checks of a body<br/><small>Function</small>"]:::held
    n687["Captures<br/><small>Standard</small>"]:::neutral
    n688["Categories of literals<br/><small>Decision</small>"]:::neutral
    n689["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n690["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n691["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n692["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n693["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n694["Attribute<br/><small>Syntax element</small>"]:::held
    n695["Comment<br/><small>Syntax element</small>"]:::held
    n696["Text<br/><small>Syntax element</small>"]:::held
    n697["HCL<br/><small>Standard</small>"]:::neutral
    n698["Value<br/><small>Syntax element</small>"]:::held
    n699["Module call<br/><small>Syntax element</small>"]:::held
    n700["Terraform<br/><small>Language</small>"]:::held
    n701["Terraform modules<br/><small>Standard</small>"]:::neutral
    n702["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n703["Box drawing<br/><small>Standard</small>"]:::neutral
    n704["Code lines<br/><small>Syntax element</small>"]:::held
    n705["Columns<br/><small>Syntax element</small>"]:::held
    n706["Item line<br/><small>Syntax element</small>"]:::held
    n707["Padded cell<br/><small>Syntax element</small>"]:::held
    n708["Path step<br/><small>Syntax element</small>"]:::held
    n709["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n710["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n711["Terminal text<br/><small>Decision</small>"]:::neutral
    n712["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n713["List on several lines<br/><small>Syntax element</small>"]:::held
    n714["Type assertion<br/><small>Syntax element</small>"]:::held
    n715["Assignment<br/><small>Syntax element</small>"]:::held
    n716["Async function of a block<br/><small>Syntax element</small>"]:::held
    n717["Waiting<br/><small>Syntax element</small>"]:::held
    n718["Call<br/><small>Syntax element</small>"]:::held
    n719["Constant<br/><small>Syntax element</small>"]:::held
    n720["Default import<br/><small>Syntax element</small>"]:::held
    n721["Documentation comment<br/><small>Syntax element</small>"]:::held
    n722["Export<br/><small>Syntax element</small>"]:::held
    n723["Condition<br/><small>Syntax element</small>"]:::held
    n724["List on one line<br/><small>Syntax element</small>"]:::held
    n725["Comment<br/><small>Syntax element</small>"]:::held
    n726["Property access<br/><small>Syntax element</small>"]:::held
    n727["Title of a module<br/><small>Syntax element</small>"]:::held
    n728["Import of names<br/><small>Syntax element</small>"]:::held
    n729["Object on several lines<br/><small>Syntax element</small>"]:::held
    n730["Object<br/><small>Syntax element</small>"]:::held
    n731["Object type<br/><small>Syntax element</small>"]:::held
    n732["Optional property access<br/><small>Syntax element</small>"]:::held
    n733["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n734["Group<br/><small>Syntax element</small>"]:::held
    n735["Names of a program<br/><small>Decision</small>"]:::neutral
    n736["Property<br/><small>Syntax element</small>"]:::held
    n737["Strict inequality<br/><small>Syntax element</small>"]:::held
    n738["Text<br/><small>Syntax element</small>"]:::held
    n739["TypeScript<br/><small>Language</small>"]:::held
    n740["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n741["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n742["TypeScript writer<br/><small>Function</small>"]:::held
    n743["Union type<br/><small>Syntax element</small>"]:::held
    n744["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n367
  n58 -->|Depends on| n180
  n59 -->|Implements| n20
  n59 -->|Depends on| n352
  n60 -->|Implements| n24
  n60 -->|Depends on| n367
  n60 -->|Depends on| n180
  n61 -->|Implements| n37
  n61 -->|Depends on| n367
  n62 -->|Implements| n38
  n62 -->|Depends on| n230
  n63 -->|Serves| n456
  n63 -->|Depends on| n367
  n63 -->|Depends on| n287
  n63 -->|Depends on| n289
  n63 -->|Depends on| n288
  n63 -->|Depends on| n0
  n63 -->|Depends on| n224
  n63 -->|Depends on| n228
  n63 -->|Depends on| n236
  n63 -->|Depends on| n233
  n63 -->|Depends on| n215
  n63 -->|Depends on| n221
  n63 -->|Depends on| n584
  n63 -->|Depends on| n317
  n63 -->|Depends on| n319
  n63 -->|Depends on| n169
  n64 -->|Serves| n456
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n584
  n64 -->|Depends on| n367
  n64 -->|Depends on| n356
  n64 -->|Depends on| n359
  n64 -->|Depends on| n347
  n64 -->|Depends on| n287
  n64 -->|Depends on| n286
  n64 -->|Depends on| n288
  n64 -->|Depends on| n0
  n64 -->|Depends on| n150
  n64 -->|Depends on| n601
  n64 -->|Depends on| n169
  n64 -->|Depends on| n313
  n64 -->|Depends on| n224
  n64 -->|Depends on| n221
  n64 -->|Depends on| n213
  n64 -->|Depends on| n212
  n64 -->|Depends on| n235
  n64 -->|Depends on| n214
  n64 -->|Depends on| n317
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n457
  n66 -->|Serves| n456
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n111
  n67 -->|Verifies| n182
  n67 -->|In| n53
  n67 -->|Depends on| n111
  n67 -->|Depends on| n42
  n67 -->|Depends on| n57
  n67 -->|Depends on| n52
  n67 -->|Depends on| n41
  n67 -->|Depends on| n39
  n67 -->|Depends on| n155
  n67 -->|Depends on| n21
  n67 -->|Depends on| n23
  n67 -->|Depends on| n160
  n67 -->|Depends on| n304
  n67 -->|Depends on| n68
  n67 -->|Depends on| n320
  n71 -->|Verifies| n693
  n71 -->|Verifies| n686
  n71 -->|Verifies| n424
  n71 -->|In| n53
  n71 -->|Depends on| n693
  n71 -->|Depends on| n686
  n71 -->|Depends on| n739
  n71 -->|Depends on| n72
  n71 -->|Depends on| n310
  n71 -->|Depends on| n320
  n73 -->|Verifies| n131
  n73 -->|In| n53
  n73 -->|Depends on| n117
  n73 -->|Depends on| n131
  n73 -->|Depends on| n57
  n73 -->|Depends on| n52
  n73 -->|Depends on| n23
  n73 -->|Depends on| n41
  n73 -->|Depends on| n39
  n73 -->|Depends on| n155
  n73 -->|Depends on| n95
  n73 -->|Depends on| n160
  n73 -->|Depends on| n305
  n73 -->|Depends on| n320
  n74 -->|Verifies| n390
  n74 -->|Verifies| n389
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n160
  n74 -->|Depends on| n109
  n74 -->|Depends on| n318
  n74 -->|Depends on| n320
  n75 -->|Verifies| n114
  n75 -->|Verifies| n115
  n75 -->|Verifies| n174
  n75 -->|Verifies| n742
  n75 -->|Verifies| n702
  n75 -->|Verifies| n237
  n75 -->|Verifies| n415
  n75 -->|In| n53
  n75 -->|Depends on| n114
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n160
  n75 -->|Depends on| n155
  n75 -->|Depends on| n70
  n75 -->|Depends on| n151
  n75 -->|Depends on| n305
  n75 -->|Depends on| n320
  n76 -->|Verifies| n140
  n76 -->|In| n53
  n76 -->|Depends on| n140
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n160
  n76 -->|Depends on| n70
  n76 -->|Depends on| n102
  n76 -->|Depends on| n320
  n77 -->|Verifies| n134
  n77 -->|In| n53
  n77 -->|Depends on| n134
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n155
  n77 -->|Depends on| n160
  n77 -->|Depends on| n305
  n77 -->|Depends on| n320
  n78 -->|Verifies| n121
  n78 -->|Verifies| n179
  n78 -->|Verifies| n387
  n78 -->|Verifies| n400
  n78 -->|In| n53
  n78 -->|Depends on| n124
  n78 -->|Depends on| n121
  n78 -->|Depends on| n42
  n78 -->|Depends on| n47
  n78 -->|Depends on| n52
  n78 -->|Depends on| n23
  n78 -->|Depends on| n54
  n78 -->|Depends on| n41
  n78 -->|Depends on| n39
  n78 -->|Depends on| n155
  n78 -->|Depends on| n180
  n78 -->|Depends on| n454
  n78 -->|Depends on| n196
  n78 -->|Depends on| n160
  n78 -->|Depends on| n316
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n320
  n80 -->|Verifies| n122
  n80 -->|Verifies| n197
  n80 -->|Verifies| n411
  n80 -->|In| n53
  n80 -->|Depends on| n122
  n80 -->|Depends on| n42
  n80 -->|Depends on| n52
  n80 -->|Depends on| n123
  n80 -->|Depends on| n160
  n80 -->|Depends on| n305
  n80 -->|Depends on| n320
  n81 -->|Verifies| n135
  n81 -->|In| n53
  n81 -->|Depends on| n135
  n81 -->|Depends on| n57
  n81 -->|Depends on| n41
  n81 -->|Depends on| n39
  n81 -->|Depends on| n155
  n81 -->|Depends on| n682
  n81 -->|Depends on| n97
  n81 -->|Depends on| n160
  n81 -->|Depends on| n49
  n81 -->|Depends on| n320
  n82 -->|Verifies| n126
  n82 -->|In| n53
  n82 -->|Depends on| n126
  n82 -->|Depends on| n101
  n82 -->|Depends on| n320
  n83 -->|Verifies| n127
  n83 -->|In| n53
  n83 -->|Depends on| n127
  n83 -->|Depends on| n57
  n83 -->|Depends on| n160
  n83 -->|Depends on| n320
  n84 -->|Verifies| n176
  n84 -->|Verifies| n196
  n84 -->|In| n53
  n84 -->|Depends on| n176
  n84 -->|Depends on| n42
  n84 -->|Depends on| n41
  n84 -->|Depends on| n17
  n84 -->|Depends on| n103
  n84 -->|Depends on| n97
  n84 -->|Depends on| n677
  n84 -->|Depends on| n23
  n84 -->|Depends on| n320
  n85 -->|Verifies| n144
  n85 -->|In| n53
  n85 -->|Depends on| n144
  n85 -->|Depends on| n176
  n85 -->|Depends on| n203
  n85 -->|Depends on| n41
  n85 -->|Depends on| n52
  n85 -->|Depends on| n160
  n85 -->|Depends on| n305
  n85 -->|Depends on| n320
  n86 -->|Verifies| n119
  n86 -->|Verifies| n133
  n86 -->|Verifies| n129
  n86 -->|In| n53
  n86 -->|Depends on| n119
  n86 -->|Depends on| n129
  n86 -->|Depends on| n42
  n86 -->|Depends on| n52
  n86 -->|Depends on| n160
  n86 -->|Depends on| n97
  n86 -->|Depends on| n320
  n87 -->|Verifies| n138
  n87 -->|Verifies| n210
  n87 -->|Verifies| n384
  n87 -->|In| n53
  n87 -->|Depends on| n138
  n87 -->|Depends on| n42
  n87 -->|Depends on| n57
  n87 -->|Depends on| n52
  n87 -->|Depends on| n41
  n87 -->|Depends on| n39
  n87 -->|Depends on| n155
  n87 -->|Depends on| n103
  n87 -->|Depends on| n97
  n87 -->|Depends on| n160
  n87 -->|Depends on| n738
  n87 -->|Depends on| n320
  n87 -->|Depends on| n682
  n88 -->|Verifies| n146
  n88 -->|Verifies| n405
  n88 -->|Verifies| n383
  n88 -->|Verifies| n401
  n88 -->|In| n53
  n88 -->|Depends on| n146
  n88 -->|Depends on| n42
  n88 -->|Depends on| n57
  n88 -->|Depends on| n21
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n155
  n88 -->|Depends on| n103
  n88 -->|Depends on| n97
  n88 -->|Depends on| n160
  n88 -->|Depends on| n320
  n88 -->|Depends on| n154
  n88 -->|Depends on| n739
  n89 -->|Verifies| n116
  n89 -->|Verifies| n402
  n89 -->|In| n53
  n89 -->|Depends on| n116
  n89 -->|Depends on| n42
  n89 -->|Depends on| n57
  n89 -->|Depends on| n52
  n89 -->|Depends on| n103
  n89 -->|Depends on| n160
  n89 -->|Depends on| n320
  n89 -->|Depends on| n330
  n90 -->|Verifies| n145
  n90 -->|Verifies| n405
  n90 -->|Verifies| n383
  n90 -->|In| n53
  n90 -->|Depends on| n145
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n41
  n90 -->|Depends on| n39
  n90 -->|Depends on| n155
  n90 -->|Depends on| n103
  n90 -->|Depends on| n160
  n90 -->|Depends on| n320
  n91 -->|Verifies| n120
  n91 -->|Verifies| n165
  n91 -->|In| n53
  n91 -->|Depends on| n120
  n91 -->|Depends on| n42
  n91 -->|Depends on| n57
  n91 -->|Depends on| n103
  n91 -->|Depends on| n97
  n91 -->|Depends on| n220
  n91 -->|Depends on| n160
  n91 -->|Depends on| n320
  n92 -->|Verifies| n128
  n92 -->|Verifies| n178
  n92 -->|In| n53
  n92 -->|Depends on| n124
  n92 -->|Depends on| n128
  n92 -->|Depends on| n42
  n92 -->|Depends on| n57
  n92 -->|Depends on| n52
  n92 -->|Depends on| n196
  n92 -->|Depends on| n41
  n92 -->|Depends on| n39
  n92 -->|Depends on| n155
  n92 -->|Depends on| n160
  n92 -->|Depends on| n316
  n92 -->|Depends on| n320
  n93 -->|Verifies| n353
  n93 -->|Verifies| n375
  n93 -->|Verifies| n391
  n93 -->|Verifies| n407
  n93 -->|In| n53
  n93 -->|Depends on| n124
  n93 -->|Depends on| n353
  n93 -->|Depends on| n19
  n93 -->|Depends on| n196
  n93 -->|Depends on| n41
  n93 -->|Depends on| n17
  n93 -->|Depends on| n52
  n93 -->|Depends on| n160
  n93 -->|Depends on| n316
  n93 -->|Depends on| n320
  n94 -->|Verifies| n124
  n94 -->|Verifies| n194
  n94 -->|Verifies| n598
  n94 -->|Verifies| n590
  n94 -->|Verifies| n602
  n94 -->|Verifies| n181
  n94 -->|In| n53
  n94 -->|Depends on| n124
  n94 -->|Depends on| n181
  n94 -->|Depends on| n52
  n94 -->|Depends on| n160
  n94 -->|Depends on| n316
  n94 -->|Depends on| n320
  n94 -->|Depends on| n107
  n96 -->|Verifies| n119
  n96 -->|Verifies| n133
  n96 -->|Verifies| n129
  n96 -->|Verifies| n125
  n96 -->|In| n53
  n96 -->|Depends on| n119
  n96 -->|Depends on| n129
  n96 -->|Depends on| n133
  n96 -->|Depends on| n132
  n96 -->|Depends on| n42
  n96 -->|Depends on| n52
  n96 -->|Depends on| n160
  n96 -->|Depends on| n97
  n96 -->|Depends on| n305
  n96 -->|Depends on| n320
  n98 -->|Verifies| n130
  n98 -->|Verifies| n136
  n98 -->|In| n53
  n98 -->|Depends on| n130
  n98 -->|Depends on| n42
  n98 -->|Depends on| n57
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n155
  n98 -->|Depends on| n103
  n98 -->|Depends on| n97
  n98 -->|Depends on| n157
  n98 -->|Depends on| n208
  n98 -->|Depends on| n160
  n98 -->|Depends on| n320
  n98 -->|Depends on| n154
  n98 -->|Depends on| n739
  n99 -->|Verifies| n134
  n99 -->|Verifies| n191
  n99 -->|In| n53
  n99 -->|Depends on| n134
  n99 -->|Depends on| n23
  n99 -->|Depends on| n21
  n99 -->|Depends on| n52
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n155
  n99 -->|Depends on| n160
  n99 -->|Depends on| n198
  n99 -->|Depends on| n69
  n99 -->|Depends on| n316
  n99 -->|Depends on| n320
  n100 -->|Verifies| n137
  n100 -->|Verifies| n384
  n100 -->|In| n53
  n100 -->|Depends on| n137
  n100 -->|Depends on| n42
  n100 -->|Depends on| n57
  n100 -->|Depends on| n160
  n100 -->|Depends on| n320
  n100 -->|Depends on| n154
  n100 -->|Depends on| n739
  n100 -->|Depends on| n97
  n104 -->|Verifies| n141
  n104 -->|Verifies| n135
  n104 -->|Verifies| n677
  n104 -->|Verifies| n199
  n104 -->|Verifies| n679
  n104 -->|Verifies| n392
  n104 -->|Verifies| n675
  n104 -->|Verifies| n182
  n104 -->|In| n53
  n104 -->|Depends on| n141
  n104 -->|Depends on| n135
  n104 -->|Depends on| n42
  n104 -->|Depends on| n57
  n104 -->|Depends on| n52
  n104 -->|Depends on| n41
  n104 -->|Depends on| n39
  n104 -->|Depends on| n22
  n104 -->|Depends on| n49
  n104 -->|Depends on| n23
  n104 -->|Depends on| n176
  n104 -->|Depends on| n17
  n104 -->|Depends on| n306
  n104 -->|Depends on| n155
  n104 -->|Depends on| n682
  n104 -->|Depends on| n103
  n104 -->|Depends on| n97
  n104 -->|Depends on| n160
  n104 -->|Depends on| n320
  n105 -->|Verifies| n143
  n105 -->|In| n53
  n105 -->|Depends on| n143
  n105 -->|Depends on| n57
  n105 -->|Depends on| n21
  n105 -->|Depends on| n41
  n105 -->|Depends on| n39
  n105 -->|Depends on| n155
  n105 -->|Depends on| n160
  n105 -->|Depends on| n320
  n106 -->|Verifies| n141
  n106 -->|Verifies| n199
  n106 -->|In| n53
  n106 -->|Depends on| n141
  n106 -->|Depends on| n42
  n106 -->|Depends on| n52
  n106 -->|Depends on| n41
  n106 -->|Depends on| n39
  n106 -->|Depends on| n22
  n106 -->|Depends on| n23
  n106 -->|Depends on| n176
  n106 -->|Depends on| n17
  n106 -->|Depends on| n199
  n106 -->|Depends on| n305
  n106 -->|Depends on| n155
  n106 -->|Depends on| n682
  n106 -->|Depends on| n103
  n106 -->|Depends on| n97
  n106 -->|Depends on| n160
  n106 -->|Depends on| n320
  n108 -->|Verifies| n112
  n108 -->|Verifies| n113
  n108 -->|Verifies| n118
  n108 -->|Verifies| n381
  n108 -->|In| n53
  n108 -->|Depends on| n112
  n108 -->|Depends on| n57
  n108 -->|Depends on| n41
  n108 -->|Depends on| n39
  n108 -->|Depends on| n160
  n108 -->|Depends on| n69
  n108 -->|Depends on| n320
  n110 -->|Verifies| n142
  n110 -->|Verifies| n119
  n110 -->|Verifies| n139
  n110 -->|Verifies| n606
  n110 -->|Verifies| n600
  n110 -->|Verifies| n608
  n110 -->|In| n53
  n110 -->|Depends on| n142
  n110 -->|Depends on| n119
  n110 -->|Depends on| n52
  n110 -->|Depends on| n160
  n110 -->|Depends on| n109
  n110 -->|Depends on| n320
  n111 -->|Serves| n456
  n111 -->|Part of| n55
  n111 -->|Depends on| n132
  n111 -->|Depends on| n182
  n111 -->|Depends on| n160
  n111 -->|Depends on| n155
  n111 -->|Depends on| n207
  n111 -->|Depends on| n205
  n111 -->|Depends on| n378
  n111 -->|Depends on| n417
  n111 -->|Depends on| n161
  n111 -->|Depends on| n739
  n111 -->|Depends on| n43
  n111 -->|Depends on| n22
  n111 -->|Depends on| n21
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n25
  n111 -->|Depends on| n183
  n111 -->|Depends on| n51
  n111 -->|Depends on| n705
  n111 -->|Depends on| n711
  n111 -->|Depends on| n305
  n111 -->|Depends on| n304
  n111 -->|Depends on| n208
  n111 -->|Depends on| n209
  n111 -->|Depends on| n211
  n111 -->|Depends on| n210
  n111 -->|Depends on| n152
  n111 -->|Depends on| n158
  n111 -->|Depends on| n17
  n111 -->|Depends on| n196
  n111 -->|Depends on| n154
  n112 -->|Serves| n463
  n112 -->|Part of| n55
  n112 -->|Depends on| n132
  n112 -->|Depends on| n113
  n112 -->|Depends on| n14
  n112 -->|Depends on| n39
  n112 -->|Depends on| n711
  n112 -->|Depends on| n51
  n112 -->|Depends on| n305
  n113 -->|Serves| n463
  n113 -->|Depends on| n132
  n113 -->|Depends on| n192
  n113 -->|Depends on| n118
  n113 -->|Depends on| n40
  n113 -->|Depends on| n198
  n113 -->|Depends on| n196
  n113 -->|Depends on| n155
  n113 -->|Depends on| n39
  n113 -->|Depends on| n305
  n113 -->|Depends on| n147
  n114 -->|Serves| n456
  n114 -->|Part of| n55
  n114 -->|Depends on| n132
  n114 -->|Depends on| n115
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n51
  n114 -->|Depends on| n305
  n115 -->|Serves| n456
  n115 -->|Depends on| n132
  n115 -->|Depends on| n174
  n115 -->|Depends on| n711
  n115 -->|Depends on| n169
  n115 -->|Depends on| n305
  n116 -->|Serves| n463
  n116 -->|Part of| n55
  n116 -->|Depends on| n132
  n116 -->|Depends on| n34
  n116 -->|Depends on| n330
  n116 -->|Depends on| n155
  n116 -->|Depends on| n21
  n116 -->|Depends on| n23
  n116 -->|Depends on| n39
  n116 -->|Depends on| n336
  n116 -->|Depends on| n152
  n116 -->|Depends on| n51
  n116 -->|Depends on| n705
  n116 -->|Depends on| n711
  n116 -->|Depends on| n305
  n117 -->|Serves| n456
  n117 -->|Part of| n55
  n117 -->|Depends on| n155
  n117 -->|Depends on| n132
  n117 -->|Depends on| n192
  n117 -->|Depends on| n588
  n117 -->|Depends on| n606
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n305
  n118 -->|Serves| n456
  n118 -->|Depends on| n305
  n118 -->|Depends on| n316
  n119 -->|Serves| n456
  n119 -->|Part of| n55
  n119 -->|Depends on| n160
  n119 -->|Depends on| n132
  n119 -->|Depends on| n139
  n119 -->|Depends on| n176
  n119 -->|Depends on| n203
  n119 -->|Depends on| n115
  n119 -->|Depends on| n133
  n119 -->|Depends on| n125
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n41
  n119 -->|Depends on| n51
  n119 -->|Depends on| n305
  n120 -->|Serves| n456
  n120 -->|Part of| n55
  n120 -->|Depends on| n132
  n120 -->|Depends on| n174
  n120 -->|Depends on| n115
  n120 -->|Depends on| n16
  n120 -->|Depends on| n165
  n120 -->|Depends on| n354
  n120 -->|Depends on| n355
  n120 -->|Depends on| n234
  n120 -->|Depends on| n164
  n120 -->|Depends on| n21
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n51
  n120 -->|Depends on| n305
  n121 -->|Serves| n456
  n121 -->|Part of| n55
  n121 -->|Depends on| n132
  n121 -->|Depends on| n179
  n121 -->|Depends on| n113
  n121 -->|Depends on| n14
  n121 -->|Depends on| n39
  n122 -->|Serves| n456
  n122 -->|Part of| n55
  n122 -->|Depends on| n132
  n122 -->|Depends on| n123
  n122 -->|Depends on| n21
  n122 -->|Depends on| n23
  n122 -->|Depends on| n22
  n122 -->|Depends on| n43
  n122 -->|Depends on| n28
  n122 -->|Depends on| n26
  n122 -->|Depends on| n54
  n122 -->|Depends on| n34
  n122 -->|Depends on| n33
  n122 -->|Depends on| n155
  n122 -->|Depends on| n17
  n122 -->|Depends on| n39
  n122 -->|Depends on| n51
  n122 -->|Depends on| n305
  n124 -->|Serves| n456
  n124 -->|Part of| n55
  n124 -->|Depends on| n132
  n124 -->|Depends on| n194
  n124 -->|Depends on| n588
  n124 -->|Depends on| n606
  n124 -->|Depends on| n598
  n124 -->|Depends on| n51
  n125 -->|Serves| n456
  n125 -->|Depends on| n176
  n125 -->|Depends on| n175
  n125 -->|Depends on| n189
  n125 -->|Depends on| n203
  n125 -->|Depends on| n191
  n125 -->|Depends on| n192
  n125 -->|Depends on| n194
  n125 -->|Depends on| n178
  n125 -->|Depends on| n181
  n125 -->|Depends on| n179
  n125 -->|Depends on| n174
  n125 -->|Depends on| n196
  n125 -->|Depends on| n182
  n125 -->|Depends on| n204
  n125 -->|Depends on| n199
  n125 -->|Depends on| n187
  n125 -->|Depends on| n198
  n125 -->|Depends on| n184
  n125 -->|Depends on| n677
  n125 -->|Depends on| n237
  n126 -->|Serves| n456
  n126 -->|Depends on| n56
  n126 -->|Depends on| n741
  n127 -->|Serves| n456
  n127 -->|Part of| n55
  n127 -->|Depends on| n132
  n127 -->|Depends on| n126
  n127 -->|Depends on| n21
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n51
  n127 -->|Depends on| n160
  n127 -->|Depends on| n305
  n128 -->|Serves| n456
  n128 -->|Part of| n55
  n128 -->|Depends on| n155
  n128 -->|Depends on| n132
  n128 -->|Depends on| n178
  n128 -->|Depends on| n353
  n128 -->|Depends on| n196
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n51
  n128 -->|Depends on| n305
  n129 -->|Serves| n456
  n129 -->|Part of| n55
  n129 -->|Depends on| n132
  n129 -->|Depends on| n133
  n129 -->|Depends on| n203
  n129 -->|Depends on| n51
  n129 -->|Depends on| n707
  n129 -->|Depends on| n709
  n129 -->|Depends on| n305
  n130 -->|Serves| n463
  n130 -->|Part of| n55
  n130 -->|Depends on| n132
  n130 -->|Depends on| n155
  n130 -->|Depends on| n196
  n130 -->|Depends on| n40
  n130 -->|Depends on| n157
  n130 -->|Depends on| n208
  n130 -->|Depends on| n21
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n152
  n130 -->|Depends on| n739
  n130 -->|Depends on| n741
  n130 -->|Depends on| n727
  n130 -->|Depends on| n721
  n130 -->|Depends on| n722
  n130 -->|Depends on| n719
  n130 -->|Depends on| n718
  n130 -->|Depends on| n730
  n130 -->|Depends on| n736
  n130 -->|Depends on| n738
  n130 -->|Depends on| n728
  n130 -->|Depends on| n51
  n130 -->|Depends on| n305
  n130 -->|Depends on| n41
  n130 -->|Depends on| n160
  n130 -->|Depends on| n136
  n130 -->|Depends on| n154
  n130 -->|Depends on| n726
  n130 -->|Depends on| n724
  n131 -->|Serves| n456
  n131 -->|Part of| n55
  n131 -->|Depends on| n155
  n131 -->|Depends on| n711
  n131 -->|Depends on| n132
  n131 -->|Depends on| n192
  n131 -->|Depends on| n118
  n131 -->|Depends on| n21
  n131 -->|Depends on| n39
  n131 -->|Depends on| n51
  n131 -->|Depends on| n305
  n132 -->|Serves| n456
  n132 -->|Depends on| n160
  n132 -->|Depends on| n176
  n132 -->|Depends on| n175
  n132 -->|Depends on| n189
  n132 -->|Depends on| n203
  n132 -->|Depends on| n191
  n132 -->|Depends on| n584
  n132 -->|Depends on| n51
  n132 -->|Depends on| n41
  n132 -->|Depends on| n17
  n132 -->|Depends on| n461
  n132 -->|Depends on| n455
  n132 -->|Depends on| n711
  n132 -->|Depends on| n709
  n132 -->|Depends on| n707
  n132 -->|Depends on| n305
  n132 -->|Depends on| n155
  n132 -->|Depends on| n198
  n132 -->|Depends on| n133
  n132 -->|Depends on| n153
  n133 -->|Serves| n456
  n133 -->|Depends on| n204
  n133 -->|Depends on| n305
  n134 -->|Serves| n463
  n134 -->|Part of| n55
  n134 -->|Depends on| n132
  n134 -->|Depends on| n191
  n134 -->|Depends on| n23
  n134 -->|Depends on| n51
  n134 -->|Depends on| n711
  n134 -->|Depends on| n709
  n134 -->|Depends on| n707
  n134 -->|Depends on| n305
  n135 -->|Serves| n680
  n135 -->|Part of| n55
  n135 -->|Depends on| n160
  n135 -->|Depends on| n132
  n135 -->|Depends on| n677
  n135 -->|Depends on| n23
  n135 -->|Depends on| n39
  n135 -->|Depends on| n51
  n135 -->|Depends on| n305
  n136 -->|Serves| n463
  n136 -->|Depends on| n741
  n136 -->|Depends on| n727
  n136 -->|Depends on| n721
  n136 -->|Depends on| n722
  n136 -->|Depends on| n719
  n136 -->|Depends on| n718
  n136 -->|Depends on| n730
  n136 -->|Depends on| n736
  n136 -->|Depends on| n738
  n136 -->|Depends on| n724
  n136 -->|Depends on| n728
  n137 -->|Serves| n463
  n137 -->|Part of| n55
  n137 -->|Depends on| n132
  n137 -->|Depends on| n155
  n137 -->|Depends on| n196
  n137 -->|Depends on| n154
  n137 -->|Depends on| n21
  n137 -->|Depends on| n22
  n137 -->|Depends on| n39
  n137 -->|Depends on| n51
  n137 -->|Depends on| n305
  n138 -->|Serves| n463
  n138 -->|Part of| n55
  n138 -->|Depends on| n132
  n138 -->|Depends on| n155
  n138 -->|Depends on| n196
  n138 -->|Depends on| n192
  n138 -->|Depends on| n588
  n138 -->|Depends on| n263
  n138 -->|Depends on| n262
  n138 -->|Depends on| n211
  n138 -->|Depends on| n210
  n138 -->|Depends on| n21
  n138 -->|Depends on| n23
  n138 -->|Depends on| n22
  n138 -->|Depends on| n39
  n138 -->|Depends on| n25
  n138 -->|Depends on| n183
  n138 -->|Depends on| n739
  n138 -->|Depends on| n17
  n138 -->|Depends on| n51
  n138 -->|Depends on| n305
  n138 -->|Depends on| n304
  n138 -->|Depends on| n237
  n138 -->|Depends on| n738
  n138 -->|Depends on| n141
  n138 -->|Depends on| n160
  n139 -->|Serves| n456
  n139 -->|Depends on| n160
  n139 -->|Depends on| n152
  n139 -->|Depends on| n132
  n139 -->|Depends on| n203
  n139 -->|Depends on| n588
  n139 -->|Depends on| n606
  n139 -->|Depends on| n51
  n139 -->|Depends on| n305
  n140 -->|Serves| n456
  n140 -->|Part of| n55
  n140 -->|Depends on| n114
  n140 -->|Depends on| n41
  n141 -->|Serves| n680
  n141 -->|Part of| n55
  n141 -->|Depends on| n160
  n141 -->|Depends on| n132
  n141 -->|Depends on| n120
  n141 -->|Depends on| n174
  n141 -->|Depends on| n115
  n141 -->|Depends on| n677
  n141 -->|Depends on| n679
  n141 -->|Depends on| n680
  n141 -->|Depends on| n16
  n141 -->|Depends on| n165
  n141 -->|Depends on| n676
  n141 -->|Depends on| n41
  n141 -->|Depends on| n133
  n141 -->|Depends on| n125
  n141 -->|Depends on| n21
  n141 -->|Depends on| n23
  n141 -->|Depends on| n39
  n141 -->|Depends on| n51
  n141 -->|Depends on| n182
  n141 -->|Depends on| n305
  n142 -->|Serves| n456
  n142 -->|Part of| n55
  n142 -->|Depends on| n132
  n142 -->|Depends on| n139
  n143 -->|Serves| n463
  n143 -->|Part of| n55
  n143 -->|Depends on| n155
  n143 -->|Depends on| n132
  n143 -->|Depends on| n192
  n143 -->|Depends on| n588
  n143 -->|Depends on| n23
  n143 -->|Depends on| n39
  n143 -->|Depends on| n51
  n143 -->|Depends on| n305
  n144 -->|Serves| n456
  n144 -->|Part of| n55
  n144 -->|Depends on| n132
  n144 -->|Depends on| n176
  n144 -->|Depends on| n203
  n144 -->|Depends on| n189
  n144 -->|Depends on| n51
  n144 -->|Depends on| n711
  n144 -->|Depends on| n709
  n144 -->|Depends on| n707
  n144 -->|Depends on| n305
  n145 -->|Serves| n463
  n145 -->|Part of| n55
  n145 -->|Depends on| n132
  n145 -->|Depends on| n21
  n145 -->|Depends on| n23
  n145 -->|Depends on| n39
  n145 -->|Depends on| n336
  n145 -->|Depends on| n738
  n145 -->|Depends on| n41
  n145 -->|Depends on| n160
  n145 -->|Depends on| n51
  n145 -->|Depends on| n305
  n146 -->|Serves| n463
  n146 -->|Part of| n55
  n146 -->|Depends on| n132
  n146 -->|Depends on| n155
  n146 -->|Depends on| n196
  n146 -->|Depends on| n21
  n146 -->|Depends on| n23
  n146 -->|Depends on| n154
  n146 -->|Depends on| n40
  n146 -->|Depends on| n208
  n146 -->|Depends on| n39
  n146 -->|Depends on| n33
  n146 -->|Depends on| n329
  n146 -->|Depends on| n152
  n146 -->|Depends on| n739
  n146 -->|Depends on| n51
  n146 -->|Depends on| n305
  n146 -->|Depends on| n41
  n146 -->|Depends on| n160
  n164 -->|Read in| n217
  n164 -->|Depends on| n216
  n164 -->|Depends on| n219
  n165 -->|Serves| n456
  n165 -->|Depends on| n31
  n165 -->|Depends on| n163
  n169 -->|Serves| n463
  n169 -->|Depends on| n313
  n170 -->|Serves| n463
  n170 -->|Applied by| n169
  n170 -->|Applied by| n313
  n172 -->|Serves| n463
  n172 -->|Depends on| n168
  n173 -->|Serves| n463
  n174 -->|Serves| n456
  n174 -->|Depends on| n160
  n174 -->|Depends on| n155
  n174 -->|Depends on| n39
  n174 -->|Depends on| n204
  n174 -->|Depends on| n40
  n174 -->|Depends on| n237
  n174 -->|Depends on| n306
  n174 -->|Depends on| n154
  n174 -->|Depends on| n739
  n175 -->|Serves| n456
  n175 -->|Depends on| n148
  n175 -->|Depends on| n195
  n175 -->|Depends on| n198
  n175 -->|Depends on| n40
  n175 -->|Depends on| n169
  n175 -->|Depends on| n150
  n175 -->|Depends on| n155
  n175 -->|Depends on| n321
  n175 -->|Depends on| n199
  n175 -->|Depends on| n172
  n176 -->|Serves| n456
  n176 -->|Depends on| n155
  n176 -->|Depends on| n461
  n176 -->|Depends on| n177
  n176 -->|Depends on| n198
  n176 -->|Depends on| n195
  n176 -->|Depends on| n31
  n176 -->|Depends on| n21
  n176 -->|Depends on| n39
  n176 -->|Depends on| n200
  n176 -->|Depends on| n196
  n176 -->|Depends on| n186
  n176 -->|Depends on| n204
  n176 -->|Depends on| n237
  n176 -->|Depends on| n40
  n176 -->|Depends on| n306
  n176 -->|Depends on| n184
  n176 -->|Depends on| n49
  n176 -->|Depends on| n182
  n176 -->|Depends on| n28
  n176 -->|Depends on| n154
  n176 -->|Depends on| n187
  n177 -->|Serves| n456
  n178 -->|Serves| n456
  n178 -->|Depends on| n160
  n178 -->|Depends on| n17
  n178 -->|Depends on| n41
  n178 -->|Depends on| n316
  n179 -->|Serves| n456
  n179 -->|Depends on| n180
  n179 -->|Depends on| n160
  n179 -->|Depends on| n155
  n179 -->|Depends on| n51
  n179 -->|Depends on| n704
  n179 -->|Depends on| n17
  n179 -->|Depends on| n54
  n179 -->|Depends on| n454
  n179 -->|Depends on| n26
  n179 -->|Depends on| n21
  n179 -->|Depends on| n39
  n179 -->|Depends on| n196
  n179 -->|Depends on| n178
  n179 -->|Depends on| n181
  n179 -->|Depends on| n353
  n179 -->|Depends on| n598
  n179 -->|Depends on| n308
  n179 -->|Depends on| n313
  n179 -->|Depends on| n309
  n181 -->|Serves| n456
  n181 -->|Depends on| n169
  n181 -->|Depends on| n316
  n182 -->|Serves| n456
  n182 -->|Depends on| n155
  n182 -->|Depends on| n207
  n182 -->|Depends on| n739
  n182 -->|Depends on| n196
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n25
  n182 -->|Depends on| n183
  n182 -->|Depends on| n152
  n184 -->|Serves| n456
  n185 -->|Serves| n456
  n186 -->|Serves| n456
  n186 -->|Depends on| n40
  n186 -->|Depends on| n158
  n186 -->|Depends on| n306
  n186 -->|Depends on| n315
  n186 -->|Depends on| n308
  n186 -->|Depends on| n169
  n186 -->|Depends on| n195
  n186 -->|Depends on| n198
  n186 -->|Depends on| n166
  n186 -->|Depends on| n185
  n186 -->|Depends on| n464
  n186 -->|Depends on| n155
  n186 -->|Depends on| n739
  n186 -->|Depends on| n336
  n186 -->|Depends on| n172
  n186 -->|Depends on| n173
  n186 -->|Depends on| n184
  n187 -->|Serves| n456
  n187 -->|Depends on| n461
  n187 -->|Depends on| n306
  n189 -->|Serves| n456
  n189 -->|Depends on| n27
  n189 -->|Depends on| n237
  n189 -->|Depends on| n156
  n189 -->|Depends on| n155
  n189 -->|Depends on| n458
  n189 -->|Depends on| n453
  n189 -->|Depends on| n185
  n189 -->|Depends on| n459
  n189 -->|Depends on| n460
  n189 -->|Depends on| n198
  n189 -->|Depends on| n21
  n189 -->|Depends on| n39
  n189 -->|Depends on| n196
  n189 -->|Depends on| n186
  n189 -->|Depends on| n40
  n189 -->|Depends on| n154
  n189 -->|Depends on| n314
  n189 -->|Depends on| n245
  n189 -->|Depends on| n239
  n189 -->|Depends on| n241
  n189 -->|Depends on| n249
  n189 -->|Depends on| n258
  n189 -->|Depends on| n255
  n189 -->|Depends on| n253
  n189 -->|Depends on| n243
  n190 -->|Serves| n257
  n190 -->|Applied by| n189
  n190 -->|Applied by| n203
  n191 -->|Serves| n463
  n191 -->|Depends on| n155
  n191 -->|Depends on| n152
  n191 -->|Depends on| n198
  n191 -->|Depends on| n271
  n191 -->|Depends on| n21
  n191 -->|Depends on| n39
  n191 -->|Depends on| n40
  n191 -->|Depends on| n316
  n192 -->|Serves| n463
  n192 -->|Depends on| n152
  n192 -->|Depends on| n195
  n192 -->|Depends on| n40
  n192 -->|Depends on| n316
  n194 -->|Serves| n456
  n194 -->|Depends on| n155
  n194 -->|Depends on| n452
  n194 -->|Depends on| n193
  n194 -->|Depends on| n17
  n194 -->|Depends on| n192
  n194 -->|Depends on| n203
  n194 -->|Depends on| n313
  n195 -->|Serves| n456
  n195 -->|Depends on| n685
  n196 -->|Serves| n456
  n196 -->|Depends on| n155
  n196 -->|Depends on| n21
  n196 -->|Depends on| n39
  n196 -->|Depends on| n208
  n196 -->|Depends on| n40
  n196 -->|Depends on| n154
  n196 -->|Depends on| n739
  n197 -->|Serves| n456
  n197 -->|Implements| n28
  n197 -->|Depends on| n21
  n197 -->|Depends on| n39
  n197 -->|Depends on| n25
  n197 -->|Depends on| n188
  n197 -->|Depends on| n46
  n198 -->|Serves| n456
  n198 -->|Depends on| n158
  n198 -->|Depends on| n260
  n199 -->|Serves| n456
  n199 -->|Depends on| n305
  n200 -->|Serves| n456
  n200 -->|Depends on| n741
  n200 -->|Depends on| n198
  n200 -->|Depends on| n202
  n200 -->|Depends on| n56
  n200 -->|Depends on| n27
  n200 -->|Depends on| n46
  n200 -->|Depends on| n25
  n200 -->|Depends on| n39
  n200 -->|Depends on| n195
  n200 -->|Depends on| n149
  n200 -->|Depends on| n306
  n200 -->|Depends on| n740
  n200 -->|Depends on| n156
  n200 -->|Depends on| n40
  n201 -->|Serves| n463
  n201 -->|Applied by| n186
  n201 -->|Applied by| n203
  n203 -->|Serves| n456
  n203 -->|Depends on| n237
  n203 -->|Depends on| n148
  n203 -->|Depends on| n162
  n203 -->|Depends on| n150
  n203 -->|Depends on| n155
  n203 -->|Depends on| n31
  n203 -->|Depends on| n21
  n203 -->|Depends on| n39
  n203 -->|Depends on| n40
  n203 -->|Depends on| n196
  n203 -->|Depends on| n316
  n203 -->|Depends on| n321
  n203 -->|Depends on| n247
  n203 -->|Depends on| n239
  n203 -->|Depends on| n255
  n203 -->|Depends on| n251
  n204 -->|Serves| n456
  n204 -->|Depends on| n159
  n204 -->|Depends on| n158
  n204 -->|Depends on| n155
  n204 -->|Depends on| n39
  n204 -->|Depends on| n40
  n204 -->|Depends on| n237
  n204 -->|Depends on| n306
  n205 -->|Refines| n456
  n206 -->|Accepts| n205
  n210 -->|Serves| n456
  n210 -->|Depends on| n211
  n210 -->|Depends on| n741
  n210 -->|Depends on| n158
  n210 -->|Depends on| n721
  n210 -->|Depends on| n727
  n210 -->|Depends on| n725
  n210 -->|Depends on| n728
  n210 -->|Depends on| n722
  n210 -->|Depends on| n719
  n210 -->|Depends on| n718
  n210 -->|Depends on| n729
  n210 -->|Depends on| n736
  n210 -->|Depends on| n738
  n210 -->|Depends on| n724
  n212 -->|Read in| n217
  n213 -->|Read in| n217
  n214 -->|Read in| n217
  n215 -->|Read in| n217
  n216 -->|Read in| n217
  n217 -->|Queries written in| n684
  n217 -->|Read by| n693
  n217 -->|Uses| n324
  n218 -->|Read in| n217
  n219 -->|Read in| n217
  n219 -->|Depends on| n215
  n220 -->|Read in| n227
  n221 -->|Read in| n227
  n222 -->|Read in| n227
  n223 -->|Read in| n227
  n223 -->|Depends on| n228
  n223 -->|Depends on| n225
  n224 -->|Read in| n227
  n224 -->|Depends on| n228
  n224 -->|Depends on| n225
  n225 -->|Read in| n227
  n226 -->|Read in| n227
  n226 -->|Depends on| n224
  n227 -->|Queries written in| n684
  n227 -->|Read by| n693
  n227 -->|Uses| n327
  n228 -->|Read in| n227
  n228 -->|Depends on| n222
  n229 -->|Read in| n739
  n230 -->|Read in| n217
  n231 -->|Read in| n217
  n232 -->|Read in| n217
  n234 -->|Read in| n227
  n234 -->|Depends on| n224
  n235 -->|Read in| n217
  n236 -->|Read in| n227
  n236 -->|Depends on| n222
  n237 -->|Serves| n456
  n237 -->|Depends on| n693
  n237 -->|Depends on| n686
  n237 -->|Depends on| n739
  n237 -->|Depends on| n217
  n237 -->|Depends on| n742
  n237 -->|Depends on| n700
  n237 -->|Depends on| n701
  n237 -->|Depends on| n702
  n237 -->|Depends on| n31
  n237 -->|Depends on| n21
  n237 -->|Depends on| n39
  n237 -->|Depends on| n310
  n238 -->|Serves| n456
  n238 -->|Applied by| n237
  n238 -->|Applied by| n353
  n239 -->|Refines| n257
  n240 -->|Accepts| n239
  n241 -->|Refines| n257
  n242 -->|Accepts| n241
  n243 -->|Refines| n257
  n244 -->|Accepts| n243
  n245 -->|Refines| n257
  n246 -->|Accepts| n245
  n247 -->|Refines| n257
  n248 -->|Accepts| n247
  n249 -->|Refines| n257
  n250 -->|Accepts| n249
  n251 -->|Refines| n257
  n252 -->|Accepts| n251
  n253 -->|Refines| n255
  n253 -->|Depends on| n255
  n254 -->|Accepts| n253
  n255 -->|Refines| n257
  n256 -->|Accepts| n255
  n258 -->|Refines| n257
  n259 -->|Accepts| n258
  n260 -->|Refines| n465
  n261 -->|Accepts| n260
  n263 -->|Refines| n465
  n264 -->|Accepts| n263
  n265 -->|Read in| n227
  n265 -->|Depends on| n224
  n266 -->|Defined by| n272
  n266 -->|Depends on| n272
  n267 -->|Defined by| n272
  n267 -->|Depends on| n272
  n268 -->|Defined by| n272
  n268 -->|Depends on| n272
  n269 -->|Defined by| n272
  n269 -->|Depends on| n272
  n269 -->|Depends on| n267
  n270 -->|Defined by| n272
  n270 -->|Depends on| n272
  n270 -->|Depends on| n266
  n271 -->|Defined by| n272
  n271 -->|Depends on| n272
  n271 -->|Depends on| n266
  n273 -->|Read in| n227
  n273 -->|Depends on| n228
  n273 -->|Depends on| n225
  n273 -->|Depends on| n224
  n273 -->|Depends on| n267
  n274 -->|Defined by| n272
  n274 -->|Depends on| n272
  n276 -->|Defined by| n272
  n276 -->|Depends on| n272
  n277 -->|Defined by| n272
  n277 -->|Depends on| n272
  n278 -->|Defined by| n272
  n278 -->|Depends on| n272
  n279 -->|Depends on| n155
  n280 -->|Read in| n227
  n280 -->|Depends on| n224
  n281 -->|Defined by| n272
  n281 -->|Depends on| n272
  n282 -->|Defined by| n275
  n282 -->|Depends on| n275
  n282 -->|Depends on| n285
  n282 -->|Depends on| n284
  n283 -->|Defined by| n275
  n283 -->|Depends on| n275
  n283 -->|Depends on| n272
  n284 -->|Defined by| n275
  n284 -->|Depends on| n275
  n285 -->|Defined by| n275
  n285 -->|Depends on| n275
  n285 -->|Depends on| n272
  n290 -->|Defined by| n296
  n290 -->|Depends on| n296
  n290 -->|Depends on| n302
  n291 -->|Defined by| n296
  n291 -->|Depends on| n296
  n292 -->|Defined by| n296
  n292 -->|Depends on| n296
  n293 -->|Defined by| n296
  n293 -->|Depends on| n296
  n294 -->|Defined by| n296
  n294 -->|Depends on| n296
  n294 -->|Depends on| n293
  n295 -->|Defined by| n296
  n295 -->|Depends on| n296
  n295 -->|Depends on| n293
  n297 -->|Defined by| n296
  n297 -->|Depends on| n296
  n298 -->|Defined by| n296
  n298 -->|Depends on| n296
  n298 -->|Depends on| n297
  n299 -->|Defined by| n296
  n299 -->|Depends on| n296
  n299 -->|Depends on| n297
  n300 -->|Defined by| n296
  n300 -->|Depends on| n296
  n300 -->|Depends on| n295
  n301 -->|Defined by| n296
  n301 -->|Depends on| n296
  n301 -->|Depends on| n302
  n302 -->|Defined by| n296
  n302 -->|Depends on| n296
  n303 -->|Defined by| n296
  n303 -->|Depends on| n296
  n303 -->|Depends on| n297
  n304 -->|Written in| n313
  n304 -->|Depends on| n313
  n305 -->|Written in| n313
  n305 -->|Depends on| n313
  n306 -->|Written in| n313
  n306 -->|Depends on| n313
  n306 -->|Depends on| n315
  n307 -->|Serves| n463
  n307 -->|Applied by| n306
  n307 -->|Applied by| n321
  n307 -->|Applied by| n309
  n307 -->|Applied by| n305
  n307 -->|Applied by| n320
  n307 -->|Applied by| n304
  n307 -->|Applied by| n317
  n307 -->|Applied by| n315
  n308 -->|Serves| n463
  n308 -->|Depends on| n313
  n309 -->|Written in| n313
  n309 -->|Depends on| n313
  n309 -->|Depends on| n315
  n310 -->|Written in| n313
  n311 -->|Written in| n313
  n312 -->|Written in| n313
  n314 -->|Written in| n313
  n315 -->|Serves| n463
  n315 -->|Depends on| n313
  n316 -->|Written in| n313
  n317 -->|Written in| n313
  n317 -->|Depends on| n313
  n318 -->|Written in| n313
  n319 -->|Written in| n313
  n320 -->|Written in| n313
  n320 -->|Depends on| n313
  n321 -->|Written in| n313
  n321 -->|Depends on| n313
  n322 -->|Written in| n313
  n323 -->|Serves| n463
  n329 -->|Serves| n463
  n331 -->|Serves| n463
  n332 -->|Serves| n463
  n336 -->|Serves| n463
  n338 -->|Defined by| n367
  n338 -->|Read in| n227
  n338 -->|Depends on| n367
  n338 -->|Depends on| n356
  n338 -->|Depends on| n224
  n339 -->|Defined by| n367
  n339 -->|Read in| n227
  n339 -->|Depends on| n367
  n339 -->|Depends on| n160
  n339 -->|Depends on| n346
  n339 -->|Depends on| n223
  n339 -->|Depends on| n224
  n340 -->|Defined by| n367
  n340 -->|Read in| n227
  n340 -->|Depends on| n367
  n340 -->|Depends on| n356
  n340 -->|Depends on| n224
  n341 -->|Defined by| n367
  n341 -->|Read in| n227
  n341 -->|Depends on| n367
  n341 -->|Depends on| n356
  n341 -->|Depends on| n223
  n341 -->|Depends on| n224
  n342 -->|Defined by| n367
  n342 -->|Read in| n227
  n342 -->|Depends on| n367
  n342 -->|Depends on| n356
  n342 -->|Depends on| n223
  n342 -->|Depends on| n224
  n342 -->|Depends on| n360
  n343 -->|Defined by| n367
  n343 -->|Read in| n227
  n343 -->|Depends on| n367
  n343 -->|Depends on| n356
  n343 -->|Depends on| n223
  n343 -->|Depends on| n224
  n344 -->|Defined by| n367
  n344 -->|Read in| n227
  n344 -->|Depends on| n367
  n344 -->|Depends on| n289
  n344 -->|Depends on| n1
  n344 -->|Depends on| n223
  n344 -->|Depends on| n224
  n344 -->|Depends on| n236
  n344 -->|Depends on| n233
  n345 -->|Read in| n227
  n345 -->|Depends on| n228
  n346 -->|Defined by| n367
  n346 -->|Read in| n227
  n346 -->|Depends on| n367
  n346 -->|Depends on| n7
  n346 -->|Depends on| n223
  n346 -->|Depends on| n224
  n346 -->|Depends on| n236
  n346 -->|Depends on| n218
  n348 -->|Defined by| n367
  n348 -->|Read in| n227
  n348 -->|Depends on| n367
  n348 -->|Depends on| n356
  n348 -->|Depends on| n223
  n348 -->|Depends on| n224
  n348 -->|Depends on| n338
  n348 -->|Depends on| n342
  n349 -->|Defined by| n367
  n349 -->|Read in| n217
  n349 -->|Depends on| n367
  n349 -->|Depends on| n231
  n349 -->|Depends on| n230
  n350 -->|Uses the variables of| n9
  n350 -->|Uses the variables of| n12
  n350 -->|Uses the variables of| n6
  n350 -->|Styles| n353
  n351 -->|Defined by| n367
  n351 -->|Read in| n227
  n351 -->|Depends on| n367
  n351 -->|Depends on| n356
  n351 -->|Depends on| n224
  n353 -->|Serves| n456
  n353 -->|Depends on| n354
  n353 -->|Depends on| n363
  n353 -->|Depends on| n7
  n353 -->|Depends on| n13
  n353 -->|Depends on| n4
  n353 -->|Depends on| n9
  n353 -->|Depends on| n8
  n353 -->|Depends on| n12
  n353 -->|Depends on| n5
  n353 -->|Depends on| n10
  n353 -->|Depends on| n3
  n353 -->|Depends on| n6
  n353 -->|Depends on| n45
  n353 -->|Depends on| n21
  n353 -->|Depends on| n16
  n353 -->|Depends on| n19
  n353 -->|Depends on| n361
  n353 -->|Depends on| n366
  n353 -->|Depends on| n364
  n353 -->|Depends on| n349
  n353 -->|Depends on| n345
  n353 -->|Depends on| n357
  n353 -->|Depends on| n355
  n353 -->|Depends on| n216
  n353 -->|Depends on| n215
  n353 -->|Depends on| n316
  n353 -->|Depends on| n313
  n353 -->|Depends on| n693
  n353 -->|Depends on| n227
  n353 -->|Depends on| n217
  n355 -->|Defined by| n367
  n355 -->|Read in| n227
  n355 -->|Depends on| n367
  n355 -->|Depends on| n220
  n355 -->|Depends on| n228
  n355 -->|Depends on| n225
  n355 -->|Depends on| n224
  n357 -->|Defined by| n367
  n357 -->|Read in| n227
  n357 -->|Depends on| n367
  n357 -->|Depends on| n234
  n357 -->|Depends on| n229
  n357 -->|Depends on| n726
  n357 -->|Depends on| n715
  n358 -->|Uses the variables of| n7
  n358 -->|Uses the variables of| n13
  n358 -->|Uses the variables of| n9
  n358 -->|Uses the variables of| n8
  n358 -->|Uses the variables of| n12
  n358 -->|Uses the variables of| n5
  n358 -->|Uses the variables of| n10
  n358 -->|Uses the variables of| n3
  n358 -->|Uses the variables of| n6
  n358 -->|Styles| n353
  n360 -->|Defined by| n367
  n360 -->|Read in| n227
  n360 -->|Depends on| n367
  n360 -->|Depends on| n359
  n360 -->|Depends on| n356
  n360 -->|Depends on| n223
  n360 -->|Depends on| n224
  n361 -->|Defined by| n367
  n361 -->|Read in| n227
  n361 -->|Depends on| n367
  n361 -->|Depends on| n223
  n361 -->|Depends on| n362
  n361 -->|Depends on| n348
  n361 -->|Depends on| n344
  n362 -->|Defined by| n367
  n362 -->|Read in| n227
  n362 -->|Depends on| n367
  n362 -->|Depends on| n223
  n362 -->|Depends on| n339
  n362 -->|Depends on| n340
  n362 -->|Depends on| n341
  n362 -->|Depends on| n351
  n362 -->|Depends on| n343
  n364 -->|Defined by| n367
  n364 -->|Read in| n217
  n364 -->|Depends on| n367
  n364 -->|Depends on| n216
  n364 -->|Depends on| n215
  n364 -->|Depends on| n218
  n364 -->|Depends on| n214
  n365 -->|Serves| n463
  n365 -->|Applied by| n358
  n365 -->|Applied by| n350
  n365 -->|Applied by| n366
  n365 -->|Applied by| n349
  n365 -->|Applied by| n353
  n366 -->|Defined by| n367
  n366 -->|Read in| n217
  n366 -->|Depends on| n367
  n366 -->|Depends on| n216
  n366 -->|Depends on| n231
  n366 -->|Depends on| n230
  n366 -->|Depends on| n213
  n366 -->|Depends on| n232
  n366 -->|Depends on| n219
  n366 -->|Depends on| n215
  n368 -->|Chooses| n381
  n368 -->|In| n30
  n368 -->|In| n53
  n368 -->|Serves| n457
  n369 -->|Chooses| n408
  n369 -->|In| n30
  n369 -->|In| n53
  n369 -->|Serves| n457
  n370 -->|Implements| n21
  n371 -->|Implements| n22
  n372 -->|Implements| n23
  n374 -->|Chooses| n419
  n374 -->|Chooses| n407
  n374 -->|In| n30
  n374 -->|In| n53
  n374 -->|Serves| n457
  n375 -->|Implements| n16
  n375 -->|Uses| n325
  n376 -->|Chooses| n375
  n376 -->|In| n30
  n376 -->|In| n53
  n376 -->|Serves| n457
  n377 -->|Implements| n41
  n377 -->|Implements| n43
  n377 -->|Implements| n42
  n377 -->|Depends on| n378
  n377 -->|Depends on| n39
  n377 -->|Depends on| n160
  n377 -->|Depends on| n318
  n379 -->|Chooses| n386
  n379 -->|Chooses| n401
  n379 -->|In| n53
  n379 -->|Serves| n457
  n380 -->|Chooses| n389
  n380 -->|Chooses| n415
  n380 -->|Chooses| n402
  n380 -->|Chooses| n377
  n380 -->|Chooses| n387
  n380 -->|In| n53
  n380 -->|Serves| n457
  n381 -->|Implements| n14
  n381 -->|Depends on| n21
  n381 -->|Depends on| n23
  n381 -->|Depends on| n741
  n381 -->|Depends on| n721
  n381 -->|Depends on| n722
  n381 -->|Depends on| n719
  n381 -->|Depends on| n718
  n381 -->|Depends on| n730
  n381 -->|Depends on| n736
  n381 -->|Depends on| n738
  n381 -->|Depends on| n724
  n381 -->|Depends on| n728
  n383 -->|Depends on| n22
  n383 -->|Depends on| n23
  n383 -->|Depends on| n21
  n383 -->|Depends on| n39
  n384 -->|Depends on| n22
  n384 -->|Depends on| n23
  n384 -->|Depends on| n21
  n384 -->|Depends on| n39
  n384 -->|Depends on| n385
  n384 -->|Depends on| n155
  n386 -->|Implements| n21
  n386 -->|Implements| n23
  n386 -->|Implements| n22
  n386 -->|Implements| n57
  n386 -->|Depends on| n39
  n386 -->|Depends on| n388
  n386 -->|Depends on| n318
  n387 -->|Implements| n26
  n387 -->|Implements| n47
  n387 -->|Depends on| n318
  n389 -->|Implements| n51
  n389 -->|Implements| n52
  n389 -->|Depends on| n382
  n389 -->|Depends on| n318
  n390 -->|Implements| n18
  n390 -->|Depends on| n51
  n390 -->|Depends on| n160
  n390 -->|Depends on| n153
  n390 -->|Depends on| n318
  n391 -->|Implements| n19
  n391 -->|Depends on| n352
  n392 -->|Implements| n25
  n393 -->|Implements| n26
  n394 -->|Chooses| n370
  n394 -->|Chooses| n372
  n394 -->|Chooses| n371
  n394 -->|Chooses| n397
  n394 -->|Chooses| n398
  n394 -->|Chooses| n399
  n394 -->|Chooses| n416
  n394 -->|Chooses| n404
  n394 -->|Chooses| n403
  n394 -->|Chooses| n393
  n394 -->|In| n30
  n394 -->|Serves| n457
  n395 -->|Implements| n39
  n396 -->|Chooses| n395
  n396 -->|Chooses| n392
  n396 -->|Chooses| n391
  n396 -->|Chooses| n400
  n396 -->|Chooses| n390
  n396 -->|Chooses| n409
  n396 -->|In| n30
  n396 -->|In| n53
  n396 -->|Serves| n457
  n397 -->|Implements| n41
  n397 -->|Depends on| n423
  n397 -->|Depends on| n161
  n398 -->|Implements| n43
  n398 -->|Depends on| n423
  n399 -->|Implements| n51
  n399 -->|Depends on| n318
  n400 -->|Implements| n54
  n401 -->|Implements| n33
  n401 -->|Depends on| n23
  n401 -->|Depends on| n39
  n401 -->|Depends on| n155
  n401 -->|Depends on| n329
  n402 -->|Implements| n34
  n403 -->|Implements| n33
  n404 -->|Implements| n34
  n404 -->|Depends on| n169
  n405 -->|Depends on| n383
  n405 -->|Depends on| n384
  n406 -->|Chooses| n405
  n406 -->|In| n30
  n406 -->|In| n53
  n406 -->|Serves| n457
  n407 -->|Implements| n45
  n407 -->|Depends on| n373
  n407 -->|Depends on| n155
  n407 -->|Depends on| n207
  n407 -->|Depends on| n739
  n408 -->|Implements| n56
  n408 -->|Uses| n335
  n408 -->|Uses| n328
  n409 -->|Implements| n27
  n410 -->|Chooses| n197
  n410 -->|In| n30
  n410 -->|In| n53
  n410 -->|Serves| n457
  n411 -->|Implements| n46
  n412 -->|Chooses| n411
  n412 -->|In| n53
  n412 -->|Serves| n457
  n413 -->|Chooses| n414
  n413 -->|In| n30
  n413 -->|Serves| n457
  n414 -->|Implements| n46
  n414 -->|Depends on| n155
  n414 -->|Depends on| n373
  n414 -->|Depends on| n182
  n414 -->|Depends on| n188
  n415 -->|Implements| n17
  n415 -->|Depends on| n417
  n415 -->|Depends on| n418
  n416 -->|Implements| n17
  n416 -->|Depends on| n161
  n419 -->|Implements| n40
  n419 -->|Depends on| n373
  n420 -->|Chooses| n424
  n420 -->|In| n30
  n420 -->|In| n53
  n420 -->|Serves| n457
  n421 -->|Implements| n31
  n421 -->|Uses| n333
  n421 -->|Depends on| n40
  n421 -->|Depends on| n154
  n421 -->|Depends on| n739
  n422 -->|Chooses| n421
  n422 -->|In| n30
  n422 -->|In| n53
  n422 -->|Serves| n457
  n424 -->|Implements| n50
  n424 -->|Uses| n337
  n424 -->|Depends on| n318
  n425 -->|Serves| n456
  n425 -->|Applied by| n176
  n425 -->|Applied by| n130
  n426 -->|Serves| n463
  n426 -->|Applied by| n176
  n426 -->|Applied by| n189
  n427 -->|Serves| n463
  n427 -->|Applied by| n184
  n427 -->|Applied by| n186
  n428 -->|Serves| n456
  n428 -->|Applied by| n120
  n428 -->|Applied by| n164
  n429 -->|Serves| n456
  n429 -->|Applied by| n55
  n429 -->|Applied by| n44
  n429 -->|Applied by| n32
  n429 -->|Applied by| n29
  n430 -->|Serves| n463
  n430 -->|Applied by| n176
  n430 -->|Applied by| n693
  n431 -->|Serves| n456
  n431 -->|Applied by| n111
  n431 -->|Applied by| n205
  n431 -->|Applied by| n611
  n431 -->|Applied by| n617
  n432 -->|Serves| n456
  n432 -->|Applied by| n200
  n432 -->|Applied by| n56
  n432 -->|Applied by| n739
  n432 -->|Applied by| n149
  n433 -->|Serves| n456
  n433 -->|Applied by| n176
  n433 -->|Applied by| n117
  n434 -->|Serves| n463
  n434 -->|Applied by| n191
  n434 -->|Applied by| n134
  n435 -->|Serves| n463
  n435 -->|Applied by| n176
  n435 -->|Applied by| n175
  n435 -->|Applied by| n194
  n435 -->|Applied by| n200
  n435 -->|Applied by| n189
  n436 -->|Serves| n465
  n436 -->|Applied by| n196
  n436 -->|Applied by| n176
  n436 -->|Applied by| n175
  n436 -->|Applied by| n198
  n436 -->|Applied by| n260
  n436 -->|Applied by| n111
  n437 -->|Serves| n465
  n437 -->|Applied by| n196
  n437 -->|Applied by| n189
  n437 -->|Applied by| n146
  n437 -->|Applied by| n138
  n437 -->|Applied by| n263
  n437 -->|Applied by| n262
  n438 -->|Serves| n463
  n438 -->|Applied by| n686
  n438 -->|Applied by| n237
  n438 -->|Applied by| n176
  n438 -->|Applied by| n29
  n438 -->|Applied by| n32
  n439 -->|Serves| n456
  n439 -->|Applied by| n189
  n439 -->|Applied by| n176
  n439 -->|Applied by| n196
  n440 -->|Serves| n463
  n440 -->|Applied by| n176
  n440 -->|Applied by| n693
  n441 -->|Serves| n463
  n441 -->|Applied by| n117
  n441 -->|Applied by| n143
  n441 -->|Applied by| n192
  n441 -->|Applied by| n353
  n441 -->|Applied by| n174
  n442 -->|Serves| n456
  n442 -->|Applied by| n175
  n442 -->|Applied by| n186
  n442 -->|Applied by| n203
  n442 -->|Applied by| n44
  n443 -->|Serves| n465
  n443 -->|Applied by| n196
  n443 -->|Applied by| n146
  n443 -->|Applied by| n405
  n443 -->|Applied by| n111
  n443 -->|Applied by| n189
  n443 -->|Applied by| n130
  n444 -->|Serves| n456
  n444 -->|Applied by| n40
  n444 -->|Applied by| n156
  n444 -->|Applied by| n151
  n444 -->|Applied by| n189
  n445 -->|Serves| n456
  n445 -->|Applied by| n141
  n445 -->|Applied by| n135
  n445 -->|Applied by| n677
  n445 -->|Applied by| n682
  n445 -->|Applied by| n680
  n445 -->|Applied by| n650
  n445 -->|Applied by| n631
  n446 -->|Serves| n457
  n446 -->|Applied by| n396
  n446 -->|Applied by| n394
  n446 -->|Applied by| n380
  n446 -->|Applied by| n376
  n446 -->|Applied by| n420
  n446 -->|Applied by| n422
  n446 -->|Applied by| n369
  n446 -->|Applied by| n374
  n446 -->|Applied by| n585
  n446 -->|Applied by| n586
  n446 -->|Applied by| n605
  n446 -->|Applied by| n604
  n446 -->|Applied by| n597
  n446 -->|Applied by| n596
  n447 -->|Serves| n456
  n447 -->|Applied by| n111
  n447 -->|Applied by| n205
  n447 -->|Applied by| n612
  n447 -->|Applied by| n611
  n447 -->|Applied by| n620
  n448 -->|Serves| n456
  n448 -->|Applied by| n176
  n448 -->|Applied by| n204
  n449 -->|Serves| n456
  n449 -->|Applied by| n189
  n449 -->|Applied by| n620
  n450 -->|Serves| n456
  n450 -->|Applied by| n189
  n450 -->|Applied by| n203
  n450 -->|Applied by| n196
  n451 -->|Serves| n463
  n451 -->|Applied by| n693
  n451 -->|Applied by| n686
  n451 -->|Applied by| n306
  n451 -->|Applied by| n310
  n451 -->|Applied by| n314
  n451 -->|Applied by| n321
  n451 -->|Applied by| n316
  n451 -->|Applied by| n309
  n451 -->|Applied by| n305
  n451 -->|Applied by| n304
  n451 -->|Applied by| n319
  n451 -->|Applied by| n318
  n451 -->|Applied by| n320
  n461 -->|Refines| n456
  n462 -->|Accepts| n461
  n466 -->|Releases| n55
  n467 -->|Releases| n55
  n467 -->|Assembled by| n573
  n468 -->|Releases| n55
  n468 -->|Assembled by| n583
  n469 -->|Releases| n55
  n469 -->|Assembled by| n468
  n470 -->|Releases| n55
  n470 -->|Assembled by| n469
  n471 -->|Releases| n55
  n471 -->|Assembled by| n470
  n472 -->|Releases| n55
  n472 -->|Assembled by| n471
  n473 -->|Releases| n55
  n473 -->|Assembled by| n472
  n474 -->|Releases| n55
  n474 -->|Assembled by| n473
  n475 -->|Releases| n55
  n475 -->|Assembled by| n474
  n476 -->|Releases| n55
  n476 -->|Assembled by| n475
  n477 -->|Releases| n55
  n477 -->|Assembled by| n476
  n478 -->|Releases| n55
  n478 -->|Assembled by| n467
  n479 -->|Releases| n55
  n479 -->|Assembled by| n477
  n480 -->|Releases| n55
  n480 -->|Assembled by| n479
  n481 -->|Releases| n55
  n481 -->|Assembled by| n480
  n482 -->|Releases| n55
  n482 -->|Assembled by| n481
  n483 -->|Releases| n55
  n483 -->|Assembled by| n482
  n484 -->|Releases| n55
  n484 -->|Assembled by| n483
  n485 -->|Releases| n55
  n485 -->|Assembled by| n484
  n486 -->|Releases| n55
  n486 -->|Assembled by| n485
  n487 -->|Releases| n55
  n487 -->|Assembled by| n486
  n488 -->|Releases| n55
  n488 -->|Assembled by| n478
  n489 -->|Releases| n55
  n489 -->|Assembled by| n488
  n490 -->|Releases| n55
  n490 -->|Assembled by| n489
  n491 -->|Releases| n55
  n491 -->|Assembled by| n490
  n492 -->|Releases| n55
  n492 -->|Assembled by| n491
  n493 -->|Releases| n55
  n493 -->|Assembled by| n492
  n494 -->|Releases| n55
  n494 -->|Assembled by| n493
  n495 -->|Releases| n55
  n495 -->|Assembled by| n494
  n496 -->|Releases| n55
  n496 -->|Assembled by| n466
  n497 -->|Releases| n55
  n497 -->|Assembled by| n495
  n498 -->|Releases| n55
  n498 -->|Assembled by| n497
  n499 -->|Releases| n55
  n499 -->|Assembled by| n498
  n500 -->|Releases| n55
  n500 -->|Assembled by| n499
  n501 -->|Releases| n55
  n501 -->|Assembled by| n500
  n502 -->|Releases| n55
  n502 -->|Assembled by| n501
  n503 -->|Releases| n55
  n503 -->|Assembled by| n502
  n504 -->|Releases| n55
  n504 -->|Assembled by| n503
  n505 -->|Releases| n55
  n505 -->|Assembled by| n504
  n506 -->|Releases| n55
  n506 -->|Assembled by| n505
  n507 -->|Releases| n55
  n507 -->|Assembled by| n496
  n508 -->|Releases| n55
  n508 -->|Assembled by| n506
  n509 -->|Releases| n55
  n509 -->|Assembled by| n508
  n510 -->|Releases| n55
  n510 -->|Assembled by| n509
  n511 -->|Releases| n55
  n511 -->|Assembled by| n510
  n512 -->|Releases| n55
  n512 -->|Assembled by| n511
  n513 -->|Releases| n55
  n513 -->|Assembled by| n512
  n514 -->|Releases| n55
  n514 -->|Assembled by| n513
  n515 -->|Releases| n55
  n515 -->|Assembled by| n514
  n516 -->|Releases| n55
  n516 -->|Assembled by| n515
  n517 -->|Releases| n55
  n517 -->|Assembled by| n516
  n518 -->|Releases| n55
  n518 -->|Assembled by| n507
  n519 -->|Releases| n55
  n519 -->|Assembled by| n517
  n520 -->|Releases| n55
  n520 -->|Assembled by| n519
  n521 -->|Releases| n55
  n521 -->|Assembled by| n520
  n522 -->|Releases| n55
  n522 -->|Assembled by| n521
  n523 -->|Releases| n55
  n523 -->|Assembled by| n522
  n524 -->|Releases| n55
  n524 -->|Assembled by| n523
  n525 -->|Releases| n55
  n525 -->|Assembled by| n524
  n526 -->|Releases| n55
  n526 -->|Assembled by| n525
  n527 -->|Releases| n55
  n527 -->|Assembled by| n526
  n528 -->|Releases| n55
  n528 -->|Assembled by| n527
  n529 -->|Releases| n55
  n529 -->|Assembled by| n518
  n530 -->|Releases| n55
  n530 -->|Assembled by| n528
  n531 -->|Releases| n55
  n531 -->|Assembled by| n530
  n532 -->|Releases| n55
  n532 -->|Assembled by| n531
  n533 -->|Releases| n55
  n533 -->|Assembled by| n532
  n534 -->|Releases| n55
  n534 -->|Assembled by| n533
  n535 -->|Releases| n55
  n535 -->|Assembled by| n534
  n536 -->|Releases| n55
  n536 -->|Assembled by| n535
  n537 -->|Releases| n55
  n537 -->|Assembled by| n536
  n538 -->|Releases| n55
  n538 -->|Assembled by| n537
  n539 -->|Releases| n55
  n539 -->|Assembled by| n538
  n540 -->|Releases| n55
  n540 -->|Assembled by| n529
  n541 -->|Releases| n55
  n541 -->|Assembled by| n539
  n542 -->|Releases| n55
  n542 -->|Assembled by| n541
  n543 -->|Releases| n55
  n543 -->|Assembled by| n542
  n544 -->|Releases| n55
  n544 -->|Assembled by| n543
  n545 -->|Releases| n55
  n545 -->|Assembled by| n544
  n546 -->|Releases| n55
  n546 -->|Assembled by| n545
  n547 -->|Releases| n55
  n547 -->|Assembled by| n546
  n548 -->|Releases| n55
  n548 -->|Assembled by| n547
  n549 -->|Releases| n55
  n549 -->|Assembled by| n548
  n550 -->|Releases| n55
  n550 -->|Assembled by| n549
  n551 -->|Releases| n55
  n551 -->|Assembled by| n540
  n552 -->|Releases| n55
  n552 -->|Assembled by| n550
  n553 -->|Releases| n55
  n553 -->|Assembled by| n552
  n554 -->|Releases| n55
  n554 -->|Assembled by| n553
  n555 -->|Releases| n55
  n555 -->|Assembled by| n554
  n556 -->|Releases| n55
  n556 -->|Assembled by| n555
  n557 -->|Releases| n55
  n557 -->|Assembled by| n556
  n558 -->|Releases| n55
  n558 -->|Assembled by| n557
  n559 -->|Releases| n55
  n559 -->|Assembled by| n558
  n560 -->|Releases| n55
  n560 -->|Assembled by| n559
  n561 -->|Releases| n55
  n561 -->|Assembled by| n560
  n562 -->|Releases| n55
  n562 -->|Assembled by| n551
  n563 -->|Releases| n55
  n563 -->|Assembled by| n561
  n564 -->|Releases| n55
  n564 -->|Assembled by| n563
  n565 -->|Releases| n55
  n565 -->|Assembled by| n564
  n566 -->|Releases| n55
  n566 -->|Assembled by| n565
  n567 -->|Releases| n55
  n567 -->|Assembled by| n566
  n568 -->|Releases| n55
  n568 -->|Assembled by| n567
  n569 -->|Releases| n55
  n569 -->|Assembled by| n568
  n570 -->|Releases| n55
  n570 -->|Assembled by| n569
  n571 -->|Releases| n55
  n571 -->|Assembled by| n570
  n572 -->|Releases| n55
  n572 -->|Assembled by| n571
  n573 -->|Releases| n55
  n573 -->|Assembled by| n562
  n574 -->|Releases| n55
  n574 -->|Assembled by| n572
  n575 -->|Releases| n55
  n575 -->|Assembled by| n574
  n576 -->|Releases| n55
  n576 -->|Assembled by| n575
  n577 -->|Releases| n55
  n577 -->|Assembled by| n576
  n578 -->|Releases| n55
  n578 -->|Assembled by| n577
  n579 -->|Releases| n55
  n579 -->|Assembled by| n578
  n580 -->|Releases| n55
  n580 -->|Assembled by| n579
  n581 -->|Releases| n55
  n581 -->|Assembled by| n580
  n582 -->|Releases| n55
  n582 -->|Assembled by| n581
  n583 -->|Releases| n55
  n583 -->|Assembled by| n582
  n584 -->|Serves| n456
  n584 -->|Depends on| n158
  n584 -->|Depends on| n601
  n584 -->|Depends on| n308
  n584 -->|Depends on| n315
  n584 -->|Depends on| n319
  n584 -->|Depends on| n172
  n585 -->|Chooses| n591
  n585 -->|In| n30
  n585 -->|In| n53
  n585 -->|Serves| n457
  n586 -->|Chooses| n593
  n586 -->|In| n30
  n586 -->|In| n53
  n586 -->|Serves| n457
  n588 -->|Serves| n456
  n588 -->|Depends on| n584
  n588 -->|Depends on| n589
  n588 -->|Depends on| n319
  n590 -->|Serves| n456
  n590 -->|Implements| n599
  n590 -->|Depends on| n595
  n590 -->|Depends on| n287
  n590 -->|Depends on| n367
  n590 -->|Depends on| n224
  n590 -->|Depends on| n226
  n590 -->|Depends on| n221
  n590 -->|Depends on| n169
  n590 -->|Depends on| n601
  n590 -->|Depends on| n319
  n591 -->|Serves| n456
  n591 -->|Implements| n589
  n591 -->|Depends on| n587
  n591 -->|Depends on| n171
  n591 -->|Depends on| n169
  n591 -->|Depends on| n269
  n591 -->|Depends on| n276
  n591 -->|Depends on| n278
  n591 -->|Depends on| n268
  n591 -->|Depends on| n270
  n591 -->|Depends on| n274
  n591 -->|Depends on| n281
  n591 -->|Depends on| n271
  n591 -->|Depends on| n277
  n591 -->|Depends on| n279
  n591 -->|Depends on| n283
  n591 -->|Depends on| n282
  n591 -->|Depends on| n265
  n591 -->|Depends on| n273
  n591 -->|Depends on| n319
  n592 -->|Serves| n456
  n592 -->|Applied by| n588
  n592 -->|Applied by| n606
  n592 -->|Applied by| n598
  n592 -->|Applied by| n584
  n592 -->|Applied by| n44
  n593 -->|Serves| n456
  n593 -->|Implements| n587
  n593 -->|Depends on| n296
  n593 -->|Depends on| n167
  n593 -->|Depends on| n7
  n593 -->|Depends on| n280
  n593 -->|Depends on| n291
  n593 -->|Depends on| n299
  n593 -->|Depends on| n303
  n593 -->|Depends on| n298
  n593 -->|Depends on| n290
  n593 -->|Depends on| n301
  n593 -->|Depends on| n292
  n593 -->|Depends on| n294
  n593 -->|Depends on| n295
  n593 -->|Depends on| n300
  n593 -->|Depends on| n308
  n593 -->|Depends on| n319
  n594 -->|Serves| n457
  n594 -->|Applied by| n588
  n594 -->|Applied by| n606
  n594 -->|Applied by| n598
  n594 -->|Applied by| n585
  n594 -->|Applied by| n586
  n594 -->|Applied by| n605
  n594 -->|Applied by| n604
  n594 -->|Applied by| n597
  n594 -->|Applied by| n596
  n596 -->|Chooses| n602
  n596 -->|In| n30
  n596 -->|In| n53
  n596 -->|Serves| n457
  n597 -->|Chooses| n590
  n597 -->|In| n30
  n597 -->|In| n53
  n597 -->|Serves| n457
  n598 -->|Serves| n456
  n598 -->|Depends on| n584
  n598 -->|Depends on| n599
  n598 -->|Depends on| n319
  n600 -->|Serves| n456
  n600 -->|Implements| n607
  n600 -->|Depends on| n603
  n600 -->|Depends on| n711
  n600 -->|Depends on| n709
  n600 -->|Depends on| n169
  n600 -->|Depends on| n707
  n600 -->|Depends on| n705
  n600 -->|Depends on| n706
  n600 -->|Depends on| n704
  n600 -->|Depends on| n710
  n600 -->|Depends on| n319
  n602 -->|Serves| n456
  n602 -->|Implements| n595
  n602 -->|Depends on| n287
  n602 -->|Depends on| n289
  n602 -->|Depends on| n367
  n602 -->|Depends on| n1
  n602 -->|Depends on| n11
  n602 -->|Depends on| n2
  n602 -->|Depends on| n224
  n602 -->|Depends on| n236
  n602 -->|Depends on| n233
  n602 -->|Depends on| n215
  n602 -->|Depends on| n221
  n602 -->|Depends on| n584
  n602 -->|Depends on| n308
  n602 -->|Depends on| n317
  n602 -->|Depends on| n319
  n602 -->|Depends on| n169
  n604 -->|Chooses| n608
  n604 -->|In| n30
  n604 -->|In| n53
  n604 -->|Serves| n457
  n605 -->|Chooses| n600
  n605 -->|In| n30
  n605 -->|In| n53
  n605 -->|Serves| n457
  n606 -->|Serves| n456
  n606 -->|Depends on| n584
  n606 -->|Depends on| n607
  n606 -->|Depends on| n319
  n608 -->|Serves| n456
  n608 -->|Implements| n603
  n608 -->|Depends on| n584
  n608 -->|Depends on| n709
  n608 -->|Depends on| n169
  n608 -->|Depends on| n707
  n608 -->|Depends on| n705
  n608 -->|Depends on| n712
  n608 -->|Depends on| n708
  n608 -->|Depends on| n308
  n608 -->|Depends on| n319
  n609 -->|Verifies| n176
  n609 -->|Verifies| n204
  n609 -->|Verifies| n174
  n609 -->|Verifies| n742
  n609 -->|In| n53
  n609 -->|Depends on| n176
  n609 -->|Depends on| n41
  n609 -->|Depends on| n174
  n609 -->|Depends on| n151
  n609 -->|Depends on| n610
  n609 -->|Depends on| n320
  n611 -->|Verifies| n117
  n611 -->|Verifies| n132
  n611 -->|Verifies| n175
  n611 -->|Verifies| n203
  n611 -->|Verifies| n588
  n611 -->|Verifies| n584
  n611 -->|Verifies| n591
  n611 -->|Verifies| n593
  n611 -->|Verifies| n192
  n611 -->|Verifies| n191
  n611 -->|Verifies| n386
  n611 -->|Verifies| n389
  n611 -->|Verifies| n415
  n611 -->|In| n53
  n611 -->|Depends on| n117
  n611 -->|Depends on| n617
  n611 -->|Depends on| n57
  n611 -->|Depends on| n52
  n611 -->|Depends on| n155
  n611 -->|Depends on| n21
  n611 -->|Depends on| n39
  n611 -->|Depends on| n41
  n611 -->|Depends on| n160
  n611 -->|Depends on| n305
  n611 -->|Depends on| n320
  n612 -->|Verifies| n176
  n612 -->|Verifies| n196
  n612 -->|Verifies| n200
  n612 -->|Verifies| n204
  n612 -->|Verifies| n186
  n612 -->|Verifies| n408
  n612 -->|Verifies| n421
  n612 -->|Verifies| n419
  n612 -->|Verifies| n386
  n612 -->|Verifies| n395
  n612 -->|Verifies| n377
  n612 -->|Verifies| n409
  n612 -->|In| n53
  n612 -->|Depends on| n176
  n612 -->|Depends on| n41
  n612 -->|Depends on| n17
  n612 -->|Depends on| n616
  n612 -->|Depends on| n320
  n613 -->|Verifies| n308
  n613 -->|Verifies| n315
  n613 -->|Verifies| n172
  n613 -->|Verifies| n173
  n613 -->|Verifies| n169
  n613 -->|Verifies| n336
  n613 -->|In| n53
  n613 -->|Depends on| n308
  n613 -->|Depends on| n315
  n613 -->|Depends on| n172
  n613 -->|Depends on| n173
  n613 -->|Depends on| n169
  n613 -->|Depends on| n313
  n613 -->|Depends on| n336
  n613 -->|Depends on| n614
  n613 -->|Depends on| n320
  n615 -->|Verifies| n177
  n615 -->|Verifies| n185
  n615 -->|Verifies| n184
  n615 -->|Verifies| n198
  n615 -->|Verifies| n195
  n615 -->|In| n53
  n615 -->|Depends on| n177
  n615 -->|Depends on| n185
  n615 -->|Depends on| n184
  n615 -->|Depends on| n198
  n615 -->|Depends on| n195
  n615 -->|Depends on| n621
  n615 -->|Depends on| n320
  n619 -->|Verifies| n187
  n619 -->|In| n53
  n619 -->|Depends on| n187
  n619 -->|Depends on| n618
  n619 -->|Depends on| n320
  n620 -->|Verifies| n189
  n620 -->|In| n53
  n620 -->|Depends on| n189
  n620 -->|Depends on| n176
  n620 -->|Depends on| n41
  n620 -->|Depends on| n17
  n620 -->|Depends on| n320
  n622 -->|Serves| n456
  n622 -->|Part of| n674
  n622 -->|Depends on| n41
  n622 -->|Depends on| n155
  n622 -->|Depends on| n160
  n622 -->|Depends on| n644
  n622 -->|Depends on| n635
  n622 -->|Depends on| n739
  n622 -->|Depends on| n735
  n622 -->|Depends on| n669
  n623 -->|Verifies| n622
  n623 -->|In| n53
  n623 -->|Depends on| n622
  n623 -->|Depends on| n42
  n623 -->|Depends on| n160
  n623 -->|Depends on| n644
  n623 -->|Depends on| n624
  n623 -->|Depends on| n735
  n623 -->|Depends on| n320
  n625 -->|Serves| n456
  n625 -->|Part of| n674
  n625 -->|Depends on| n673
  n625 -->|Depends on| n647
  n625 -->|Depends on| n669
  n626 -->|Serves| n456
  n627 -->|Serves| n456
  n628 -->|In| n48
  n629 -->|In| n30
  n630 -->|Serves| n456
  n631 -->|Checks| n635
  n631 -->|Run by| n144
  n631 -->|Signed by| n648
  n632 -->|Checks| n635
  n632 -->|Run by| n122
  n632 -->|Signed by| n648
  n632 -->|Verifies| n370
  n632 -->|Verifies| n372
  n632 -->|Verifies| n371
  n632 -->|Verifies| n397
  n632 -->|Verifies| n398
  n632 -->|Verifies| n399
  n632 -->|Verifies| n416
  n632 -->|Verifies| n404
  n632 -->|Verifies| n403
  n632 -->|Verifies| n393
  n632 -->|Verifies| n414
  n633 -->|Chooses| n655
  n633 -->|Chooses| n654
  n633 -->|In| n30
  n633 -->|In| n48
  n633 -->|Serves| n456
  n634 -->|Serves| n456
  n635 -->|Produced by| n55
  n636 -->|Serves| n456
  n637 -->|Serves| n456
  n638 -->|Its obligations| n637
  n638 -->|Its obligations| n646
  n638 -->|Its obligations| n626
  n638 -->|Its obligations| n630
  n638 -->|Its obligations| n627
  n638 -->|Its obligations| n636
  n638 -->|Its obligations| n634
  n639 -->|Produced by| n128
  n639 -->|Carries| n36
  n641 -->|Checks| n639
  n641 -->|Run by| n652
  n641 -->|Signed by| n648
  n641 -->|Verifies| n64
  n641 -->|Verifies| n63
  n641 -->|Verifies| n62
  n641 -->|Verifies| n61
  n641 -->|Verifies| n60
  n641 -->|Verifies| n58
  n641 -->|Verifies| n59
  n643 -->|Serves| n456
  n643 -->|Depends on| n356
  n643 -->|Depends on| n287
  n643 -->|Depends on| n213
  n645 -->|Ships| n672
  n645 -->|Programs assembled for| n30
  n645 -->|Follows the policy| n649
  n646 -->|Serves| n456
  n649 -->|Its obligations| n637
  n649 -->|Its obligations| n627
  n650 -->|Ships| n635
  n650 -->|Ships| n657
  n650 -->|Ships| n639
  n650 -->|Deployed by| n111
  n650 -->|Programs assembled for| n30
  n650 -->|Follows the policy| n638
  n651 -->|Verifies| n652
  n651 -->|Verifies| n643
  n651 -->|In| n53
  n651 -->|Depends on| n652
  n651 -->|Depends on| n639
  n651 -->|Depends on| n643
  n651 -->|Depends on| n669
  n651 -->|Depends on| n642
  n651 -->|Depends on| n320
  n652 -->|Serves| n456
  n652 -->|Part of| n674
  n652 -->|Depends on| n639
  n652 -->|Depends on| n313
  n652 -->|Depends on| n643
  n652 -->|Depends on| n640
  n652 -->|Depends on| n669
  n653 -->|Verifies| n655
  n653 -->|Verifies| n654
  n653 -->|In| n53
  n653 -->|Depends on| n673
  n653 -->|Depends on| n647
  n653 -->|Depends on| n661
  n653 -->|Depends on| n155
  n653 -->|Depends on| n160
  n653 -->|Depends on| n417
  n653 -->|Depends on| n658
  n653 -->|Depends on| n320
  n654 -->|Serves| n456
  n654 -->|Depends on| n155
  n654 -->|Depends on| n157
  n654 -->|Depends on| n739
  n654 -->|Depends on| n160
  n654 -->|Depends on| n161
  n654 -->|Depends on| n417
  n654 -->|Depends on| n661
  n655 -->|Serves| n456
  n655 -->|Depends on| n673
  n655 -->|Depends on| n647
  n655 -->|Depends on| n658
  n655 -->|Depends on| n155
  n655 -->|Depends on| n661
  n656 -->|Chooses| n655
  n656 -->|Chooses| n654
  n656 -->|In| n53
  n657 -->|Produced by| n36
  n657 -->|Assembled for| n15
  n659 -->|Runs elsewhere| n645
  n659 -->|Its writer's settings| n658
  n660 -->|Serves| n456
  n660 -->|Part of| n674
  n660 -->|Depends on| n673
  n660 -->|Depends on| n647
  n660 -->|Depends on| n669
  n662 -->|Run by| n660
  n662 -->|Signed by| n648
  n664 -->|Requires| n662
  n664 -->|Deployed by| n625
  n664 -->|Programs assembled for| n30
  n664 -->|Follows the policy| n670
  n665 -->|In| n30
  n665 -->|In| n48
  n666 -->|Ships| n659
  n667 -->|In| n53
  n668 -->|In| n30
  n668 -->|In| n48
  n669 -->|Written in| n313
  n670 -->|Its obligations| n637
  n670 -->|Its obligations| n627
  n670 -->|Its obligations| n634
  n671 -->|Verifies| n660
  n671 -->|Verifies| n625
  n671 -->|In| n53
  n671 -->|Depends on| n660
  n671 -->|Depends on| n625
  n671 -->|Depends on| n673
  n671 -->|Depends on| n647
  n671 -->|Depends on| n663
  n671 -->|Depends on| n669
  n671 -->|Depends on| n320
  n674 -->|Deployed in| n30
  n675 -->|Implements| n49
  n675 -->|Depends on| n25
  n677 -->|Serves| n456
  n677 -->|Depends on| n155
  n677 -->|Depends on| n682
  n677 -->|Depends on| n21
  n677 -->|Depends on| n39
  n677 -->|Depends on| n25
  n677 -->|Depends on| n152
  n677 -->|Depends on| n184
  n677 -->|Depends on| n49
  n678 -->|Chooses| n675
  n678 -->|In| n30
  n678 -->|In| n53
  n678 -->|Serves| n456
  n679 -->|Serves| n456
  n679 -->|Depends on| n160
  n679 -->|Depends on| n196
  n679 -->|Depends on| n155
  n679 -->|Depends on| n208
  n679 -->|Depends on| n21
  n679 -->|Depends on| n39
  n680 -->|Refines| n456
  n681 -->|Accepts| n680
  n686 -->|Serves| n456
  n686 -->|Depends on| n156
  n686 -->|Depends on| n310
  n690 -->|Written in| n313
  n691 -->|Serves| n456
  n691 -->|Applied by| n693
  n691 -->|Applied by| n50
  n692 -->|Serves| n456
  n692 -->|Applied by| n693
  n692 -->|Applied by| n686
  n692 -->|Applied by| n50
  n693 -->|Serves| n456
  n693 -->|Serves| n463
  n693 -->|Depends on| n50
  n693 -->|Depends on| n687
  n693 -->|Depends on| n690
  n693 -->|Depends on| n688
  n693 -->|Depends on| n689
  n693 -->|Depends on| n683
  n693 -->|Depends on| n21
  n693 -->|Depends on| n27
  n693 -->|Depends on| n46
  n693 -->|Depends on| n155
  n693 -->|Depends on| n39
  n693 -->|Depends on| n25
  n694 -->|Defined by| n697
  n694 -->|Read in| n700
  n694 -->|Depends on| n697
  n695 -->|Defined by| n697
  n695 -->|Read in| n700
  n695 -->|Depends on| n697
  n696 -->|Defined by| n697
  n696 -->|Read in| n700
  n696 -->|Depends on| n697
  n696 -->|Depends on| n700
  n698 -->|Defined by| n697
  n698 -->|Read in| n700
  n698 -->|Depends on| n697
  n698 -->|Depends on| n696
  n699 -->|Defined by| n697
  n699 -->|Read in| n700
  n699 -->|Depends on| n697
  n699 -->|Depends on| n701
  n699 -->|Depends on| n696
  n700 -->|Defined by| n697
  n700 -->|Queries written in| n684
  n700 -->|Read by| n693
  n700 -->|Uses| n326
  n702 -->|Serves| n456
  n702 -->|Depends on| n697
  n702 -->|Depends on| n701
  n702 -->|Depends on| n155
  n702 -->|Depends on| n695
  n702 -->|Depends on| n696
  n702 -->|Depends on| n698
  n702 -->|Depends on| n694
  n702 -->|Depends on| n699
  n702 -->|Depends on| n39
  n702 -->|Depends on| n40
  n702 -->|Depends on| n308
  n702 -->|Depends on| n310
  n704 -->|Defined by| n711
  n704 -->|Depends on| n711
  n705 -->|Defined by| n711
  n705 -->|Depends on| n711
  n705 -->|Depends on| n707
  n705 -->|Depends on| n709
  n706 -->|Defined by| n711
  n706 -->|Depends on| n711
  n707 -->|Defined by| n711
  n707 -->|Depends on| n711
  n707 -->|Depends on| n709
  n708 -->|Defined by| n711
  n708 -->|Depends on| n711
  n708 -->|Depends on| n703
  n710 -->|Defined by| n711
  n710 -->|Depends on| n711
  n712 -->|Defined by| n711
  n712 -->|Depends on| n711
  n712 -->|Depends on| n703
  n713 -->|Defined by| n741
  n713 -->|Read in| n739
  n713 -->|Depends on| n741
  n714 -->|Defined by| n741
  n714 -->|Read in| n739
  n714 -->|Depends on| n741
  n715 -->|Defined by| n741
  n715 -->|Read in| n739
  n715 -->|Depends on| n741
  n716 -->|Defined by| n741
  n716 -->|Read in| n739
  n716 -->|Depends on| n741
  n717 -->|Defined by| n741
  n717 -->|Read in| n739
  n717 -->|Depends on| n741
  n718 -->|Defined by| n741
  n718 -->|Read in| n739
  n718 -->|Depends on| n741
  n719 -->|Defined by| n741
  n719 -->|Read in| n739
  n719 -->|Depends on| n741
  n720 -->|Defined by| n741
  n720 -->|Read in| n739
  n720 -->|Depends on| n741
  n720 -->|Depends on| n738
  n721 -->|Defined by| n741
  n721 -->|Read in| n739
  n721 -->|Depends on| n741
  n722 -->|Defined by| n741
  n722 -->|Read in| n739
  n722 -->|Depends on| n741
  n723 -->|Defined by| n741
  n723 -->|Read in| n739
  n723 -->|Depends on| n741
  n724 -->|Defined by| n741
  n724 -->|Read in| n739
  n724 -->|Depends on| n741
  n725 -->|Defined by| n741
  n725 -->|Read in| n739
  n725 -->|Depends on| n741
  n726 -->|Defined by| n741
  n726 -->|Read in| n739
  n726 -->|Depends on| n741
  n727 -->|Defined by| n741
  n727 -->|Read in| n739
  n727 -->|Depends on| n741
  n728 -->|Defined by| n741
  n728 -->|Read in| n739
  n728 -->|Depends on| n741
  n728 -->|Depends on| n738
  n729 -->|Defined by| n741
  n729 -->|Read in| n739
  n729 -->|Depends on| n741
  n730 -->|Defined by| n741
  n730 -->|Read in| n739
  n730 -->|Depends on| n741
  n731 -->|Defined by| n741
  n731 -->|Read in| n739
  n731 -->|Depends on| n741
  n732 -->|Defined by| n741
  n732 -->|Read in| n739
  n732 -->|Depends on| n741
  n733 -->|Defined by| n741
  n733 -->|Read in| n739
  n733 -->|Depends on| n741
  n734 -->|Defined by| n741
  n734 -->|Read in| n739
  n734 -->|Depends on| n741
  n736 -->|Defined by| n741
  n736 -->|Read in| n739
  n736 -->|Depends on| n741
  n736 -->|Depends on| n738
  n737 -->|Defined by| n741
  n737 -->|Read in| n739
  n737 -->|Depends on| n741
  n738 -->|Defined by| n741
  n738 -->|Read in| n739
  n738 -->|Depends on| n741
  n739 -->|Queries written in| n684
  n739 -->|Read by| n693
  n739 -->|Watches the globals| n744
  n739 -->|Uses| n334
  n740 -->|Serves| n456
  n742 -->|Serves| n456
  n742 -->|Depends on| n739
  n742 -->|Depends on| n741
  n742 -->|Depends on| n151
  n742 -->|Depends on| n735
  n742 -->|Depends on| n159
  n742 -->|Depends on| n158
  n742 -->|Depends on| n725
  n742 -->|Depends on| n738
  n742 -->|Depends on| n726
  n742 -->|Depends on| n732
  n742 -->|Depends on| n718
  n742 -->|Depends on| n717
  n742 -->|Depends on| n734
  n742 -->|Depends on| n736
  n742 -->|Depends on| n730
  n742 -->|Depends on| n713
  n742 -->|Depends on| n719
  n742 -->|Depends on| n728
  n742 -->|Depends on| n720
  n742 -->|Depends on| n714
  n742 -->|Depends on| n733
  n742 -->|Depends on| n731
  n742 -->|Depends on| n743
  n742 -->|Depends on| n723
  n742 -->|Depends on| n737
  n742 -->|Depends on| n715
  n742 -->|Depends on| n724
  n742 -->|Depends on| n716
  n742 -->|Depends on| n161
  n742 -->|Depends on| n39
  n742 -->|Depends on| n40
  n742 -->|Depends on| n308
  n742 -->|Depends on| n310
  n743 -->|Defined by| n741
  n743 -->|Read in| n739
  n743 -->|Depends on| n741
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
