# Layers

*The graph in force on 30 October 2026, ordered by distance to the goals.*

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
    n82["A library carries kinds<br/><small>Scenario</small>"]:::held
    n83["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n84["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
    n85["A library released<br/><small>Scenario</small>"]:::held
    n86["The manifest written<br/><small>Scenario</small>"]:::held
    n87["The packages audited<br/><small>Scenario</small>"]:::held
    n88["The packages upgraded<br/><small>Scenario</small>"]:::held
    n89["The page delivered<br/><small>Scenario</small>"]:::held
    n90["The page exported<br/><small>Scenario</small>"]:::held
    n91["The page of the graph<br/><small>Scenario</small>"]:::held
    n92["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n93["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n94["A command of the project<br/><small>Scenario</small>"]:::held
    n95["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n96["A project started<br/><small>Scenario</small>"]:::held
    n97["A published value changed<br/><small>Scenario</small>"]:::held
    n98["The registry filled<br/><small>Scenario</small>"]:::held
    n99["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n100["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n101["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n102["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n103["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n104["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n105["A value amended<br/><small>Scenario</small>"]:::held
    n106["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n107["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n108["Advance<br/><small>Entry point</small>"]:::held
    n109["Amend<br/><small>Entry point</small>"]:::held
    n110["An amendment prepared<br/><small>Function</small>"]:::held
    n111["Assemble a component<br/><small>Entry point</small>"]:::held
    n112["Assembler<br/><small>Function</small>"]:::held
    n113["Audit the packages<br/><small>Entry point</small>"]:::held
    n114["Build<br/><small>Entry point</small>"]:::held
    n115["Two builds compared<br/><small>Function</small>"]:::held
    n116["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n117["Deliver<br/><small>Entry point</small>"]:::held
    n118["Start trame dev<br/><small>Entry point</small>"]:::held
    n119["Ask the machine<br/><small>Entry point</small>"]:::held
    n120["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n121["Payload<br/><small>Entry point</small>"]:::held
    n122["Export the page<br/><small>Entry point</small>"]:::held
    n123["Help<br/><small>Entry point</small>"]:::held
    n124["Start a project<br/><small>Entry point</small>"]:::held
    n125["Plan<br/><small>Entry point</small>"]:::held
    n126["Preparation<br/><small>Function</small>"]:::held
    n127["The project's commands<br/><small>Function</small>"]:::held
    n128["Publish<br/><small>Entry point</small>"]:::held
    n129["Record evidence<br/><small>Entry point</small>"]:::held
    n130["A module of references<br/><small>Function</small>"]:::held
    n131["Fill the registry<br/><small>Entry point</small>"]:::held
    n132["Release a version<br/><small>Entry point</small>"]:::held
    n133["Render a view<br/><small>Function</small>"]:::held
    n134["Run a component<br/><small>Entry point</small>"]:::held
    n135["Ship<br/><small>Entry point</small>"]:::held
    n136["Show a view<br/><small>Entry point</small>"]:::held
    n137["Take the snapshot<br/><small>Entry point</small>"]:::held
    n138["Test the laws<br/><small>Entry point</small>"]:::held
    n139["Upgrade<br/><small>Entry point</small>"]:::held
    n140["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n141["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n142["Default rank<br/><small>Decision</small>"]:::neutral
    n143["Documentation comment<br/><small>Decision</small>"]:::neutral
    n144["Names of the documents<br/><small>Standard</small>"]:::neutral
    n145["The frozen API<br/><small>Standard</small>"]:::neutral
    n146["JSON formatting<br/><small>Decision</small>"]:::neutral
    n147["The language's names<br/><small>Decision</small>"]:::neutral
    n148["Project layout<br/><small>Decision</small>"]:::neutral
    n149["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n150["How a project starts<br/><small>Decision</small>"]:::neutral
    n151["Trame references<br/><small>Standard</small>"]:::neutral
    n152["Names of steps<br/><small>Decision</small>"]:::neutral
    n153["Trame's commands<br/><small>Standard</small>"]:::neutral
    n154["Trame's environment<br/><small>Standard</small>"]:::neutral
    n155["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n156["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n157["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n158["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n159["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n160["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n161["How a number is written<br/><small>Decision</small>"]:::neutral
    n162["Punctuation of documents<br/><small>Function</small>"]:::held
    n163["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n164["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n165["Values with their units<br/><small>Function</small>"]:::held
    n166["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n167["Assembly<br/><small>Function</small>"]:::held
    n168["Compilation API<br/><small>Function</small>"]:::held
    n169["Compiler<br/><small>Function</small>"]:::held
    n170["Cycles<br/><small>Function</small>"]:::held
    n171["Date bundle<br/><small>Function</small>"]:::held
    n172["trame dev server<br/><small>Function</small>"]:::held
    n173["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n174["Differences<br/><small>Function</small>"]:::held
    n175["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n176["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n177["Fingerprints<br/><small>Function</small>"]:::held
    n178["Pseudo-random generator<br/><small>Function</small>"]:::held
    n179["Graph<br/><small>Function</small>"]:::held
    n180["Judged harder<br/><small>Function</small>"]:::held
    n181["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n182["Laws<br/><small>Function</small>"]:::held
    n183["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n184["Lock<br/><small>Function</small>"]:::held
    n185["Machine outputs<br/><small>Function</small>"]:::held
    n186["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n187["Payload<br/><small>Function</small>"]:::held
    n188["Positions<br/><small>Function</small>"]:::held
    n189["Project<br/><small>Function</small>"]:::held
    n190["The runs of a project<br/><small>Function</small>"]:::held
    n191["References<br/><small>Function</small>"]:::held
    n192["A shipment's pipeline<br/><small>Function</small>"]:::held
    n193["Static reading<br/><small>Function</small>"]:::held
    n194["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n195["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n196["Views<br/><small>Function</small>"]:::held
    n197["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n198["Accept a candidate<br/><small>Requirement</small>"]:::held
    n199["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n200["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n201["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n202["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n203["Records of the releases<br/><small>Function</small>"]:::held
    n204["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n205["Attribute presence<br/><small>Syntax element</small>"]:::held
    n206["Attribute selector<br/><small>Syntax element</small>"]:::held
    n207["Class selector<br/><small>Syntax element</small>"]:::held
    n208["Declaration<br/><small>Syntax element</small>"]:::held
    n209["Rule<br/><small>Syntax element</small>"]:::held
    n210["CSS style sheets<br/><small>Language</small>"]:::held
    n211["Variable<br/><small>Syntax element</small>"]:::held
    n212["Custom property<br/><small>Syntax element</small>"]:::held
    n213["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n214["Escaped text<br/><small>Syntax element</small>"]:::held
    n215["Attributes<br/><small>Syntax element</small>"]:::held
    n216["Element over several lines<br/><small>Syntax element</small>"]:::held
    n217["HTML element<br/><small>Syntax element</small>"]:::held
    n218["End tag<br/><small>Syntax element</small>"]:::held
    n219["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n220["HTML markup<br/><small>Language</small>"]:::held
    n221["Start tag<br/><small>Syntax element</small>"]:::held
    n222["JSON in a script<br/><small>Syntax element</small>"]:::held
    n223["Media feature<br/><small>Syntax element</small>"]:::held
    n224["Media rule<br/><small>Syntax element</small>"]:::held
    n225["Negation<br/><small>Syntax element</small>"]:::held
    n226["Path data<br/><small>Syntax element</small>"]:::held
    n227["Script<br/><small>Syntax element</small>"]:::held
    n228["Selector list<br/><small>Syntax element</small>"]:::held
    n229["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n230["Drivers<br/><small>Function</small>"]:::held
    n231["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n232["Answers without crashing<br/><small>Requirement</small>"]:::held
    n233["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n234["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n235["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n236["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n237["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n238["Complete declaration<br/><small>Requirement</small>"]:::held
    n239["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n240["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n241["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n242["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n243["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n244["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n245["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n246["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n247["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n248["Same input, same answer<br/><small>Requirement</small>"]:::held
    n249["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n250["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n251["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n252["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n253["What belongs to a library<br/><small>Requirement</small>"]:::held
    n254["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n255["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n256["A release is settled<br/><small>Requirement</small>"]:::held
    n257["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n258["Anchor<br/><small>Syntax element</small>"]:::held
    n259["Backtick string<br/><small>Syntax element</small>"]:::held
    n260["Blank line<br/><small>Syntax element</small>"]:::held
    n261["Block quote<br/><small>Syntax element</small>"]:::held
    n262["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n263["Code block<br/><small>Syntax element</small>"]:::held
    n264["Code span<br/><small>Syntax element</small>"]:::held
    n265["CommonMark<br/><small>Standard</small>"]:::neutral
    n266["Collapsible block<br/><small>Syntax element</small>"]:::held
    n267["Emphasis<br/><small>Syntax element</small>"]:::held
    n268["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n269["Heading<br/><small>Syntax element</small>"]:::held
    n270["Link<br/><small>Syntax element</small>"]:::held
    n271["List item<br/><small>Syntax element</small>"]:::held
    n272["Relative reference<br/><small>Syntax element</small>"]:::held
    n273["Small text<br/><small>Syntax element</small>"]:::held
    n274["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n275["Table<br/><small>Syntax element</small>"]:::held
    n276["Table cell<br/><small>Syntax element</small>"]:::held
    n277["Delimiter row<br/><small>Syntax element</small>"]:::held
    n278["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n279["Around the documents<br/><small>Decision</small>"]:::neutral
    n280["Documents in the page<br/><small>Decision</small>"]:::neutral
    n281["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n282["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n283["Class definition<br/><small>Syntax element</small>"]:::held
    n284["Flowchart<br/><small>Syntax element</small>"]:::held
    n285["Gantt chart<br/><small>Syntax element</small>"]:::held
    n286["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n287["Section<br/><small>Syntax element</small>"]:::held
    n288["Task<br/><small>Syntax element</small>"]:::held
    n289["Mermaid<br/><small>Standard</small>"]:::neutral
    n290["Label<br/><small>Syntax element</small>"]:::held
    n291["Link<br/><small>Syntax element</small>"]:::held
    n292["Node<br/><small>Syntax element</small>"]:::held
    n293["Milestone<br/><small>Syntax element</small>"]:::held
    n294["Node style<br/><small>Syntax element</small>"]:::held
    n295["Style properties<br/><small>Syntax element</small>"]:::held
    n296["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n297["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n298["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n299["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n300["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n301["Dates<br/><small>Function</small>"]:::held
    n302["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n303["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n304["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n305["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n306["Language<br/><small>Decision</small>"]:::neutral
    n307["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n308["Lists<br/><small>Function</small>"]:::held
    n309["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n310["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n311["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n312["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n313["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n314["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n315["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n316["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n317["Grammar of CSS<br/><small>Package</small>"]:::held
    n318["esbuild<br/><small>Package</small>"]:::held
    n319["Grammar of HCL<br/><small>Package</small>"]:::held
    n320["Grammar of HTML<br/><small>Package</small>"]:::held
    n321["Types of Node.js<br/><small>Package</small>"]:::held
    n322["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n323["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n324["The people of the repository<br/><small>Package</small>"]:::neutral
    n325["The standard library<br/><small>Package</small>"]:::neutral
    n326["tsx<br/><small>Package</small>"]:::held
    n327["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n328["TypeScript<br/><small>Package</small>"]:::held
    n329["Order of versions<br/><small>Function</small>"]:::held
    n330["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n331["Banner<br/><small>Syntax element</small>"]:::held
    n332["Brand<br/><small>Syntax element</small>"]:::held
    n333["State of the compilation<br/><small>Syntax element</small>"]:::held
    n334["Dates<br/><small>Syntax element</small>"]:::held
    n335["Head of the document<br/><small>Syntax element</small>"]:::held
    n336["Document picker<br/><small>Syntax element</small>"]:::held
    n337["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n338["Fonts<br/><small>Syntax element</small>"]:::held
    n339["Logo<br/><small>Syntax element</small>"]:::held
    n340["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n341["Main area<br/><small>Syntax element</small>"]:::held
    n342["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n343["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n344["Navigation<br/><small>Syntax element</small>"]:::held
    n345["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n346["Page<br/><small>Function</small>"]:::held
    n347["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n348["Document of the page<br/><small>Syntax element</small>"]:::held
    n349["Regions of the page<br/><small>Decision</small>"]:::neutral
    n350["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n351["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n352["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n353["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n354["Shell<br/><small>Syntax element</small>"]:::held
    n355["Side bar<br/><small>Syntax element</small>"]:::held
    n356["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n357["Colours of a status<br/><small>Syntax element</small>"]:::held
    n358["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n359["Theme<br/><small>Syntax element</small>"]:::held
    n360["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n361["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n362["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n363["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n364["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n365["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n366["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n367["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n368["esbuild<br/><small>Implementation</small>"]:::held
    n369["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n370["Example process<br/><small>Function</small>"]:::held
    n371["Example project<br/><small>Decision</small>"]:::neutral
    n372["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n373["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n374["Amendments in place<br/><small>Implementation</small>"]:::held
    n375["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n376["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n377["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n378["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n379["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n380["A server in memory<br/><small>Function</small>"]:::held
    n381["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n382["Terminal in memory<br/><small>Function</small>"]:::held
    n383["Command line<br/><small>Implementation</small>"]:::held
    n384["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n385["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n386["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n387["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n388["Node paths<br/><small>Implementation</small>"]:::held
    n389["NodePlatform<br/><small>Technical choice</small>"]:::held
    n390["Node process<br/><small>Implementation</small>"]:::unknown
    n391["Node programs<br/><small>Implementation</small>"]:::unknown
    n392["Node terminal<br/><small>Implementation</small>"]:::unknown
    n393["Node timer<br/><small>Implementation</small>"]:::held
    n394["No installer in test<br/><small>Implementation</small>"]:::held
    n395["No registry in test<br/><small>Function</small>"]:::held
    n396["npm installs<br/><small>Implementation</small>"]:::unknown
    n397["npm's reports<br/><small>Implementation</small>"]:::unknown
    n398["Packages by their origin<br/><small>Implementation</small>"]:::held
    n399["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n400["Page resources<br/><small>Implementation</small>"]:::held
    n401["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n402["Results kept in the process<br/><small>Implementation</small>"]:::held
    n403["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n404["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n405["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n406["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n407["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n408["Stopped clock<br/><small>Function</small>"]:::held
    n409["System clock<br/><small>Implementation</small>"]:::unknown
    n410["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n411["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n412["Trame's prelude<br/><small>Implementation</small>"]:::held
    n413["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n414["tsx loader<br/><small>Implementation</small>"]:::held
    n415["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n416["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n417["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n418["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n419["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n420["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n421["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n422["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n423["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n424["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n425["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n426["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n427["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n428["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n429["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n430["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n431["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n432["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n433["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n434["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n435["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n436["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n437["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n438["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n439["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n440["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n441["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n442["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n443["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n444["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n445["Candidate dates<br/><small>Decision</small>"]:::neutral
    n446["Claim sets<br/><small>Decision</small>"]:::neutral
    n447["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n448["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n449["A specification that runs<br/><small>Goal</small>"]:::neutral
    n450["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n451["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n452["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n453["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n454["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n455["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n456["A single source of truth<br/><small>Goal</small>"]:::neutral
    n457["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n458["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n459["Generation 1<br/><small>Release</small>"]:::neutral
    n460["Generation 10<br/><small>Release</small>"]:::neutral
    n461["Generation 100<br/><small>Release</small>"]:::neutral
    n462["Generation 101<br/><small>Release</small>"]:::neutral
    n463["Generation 102<br/><small>Release</small>"]:::neutral
    n464["Generation 103<br/><small>Release</small>"]:::neutral
    n465["Generation 104<br/><small>Release</small>"]:::neutral
    n466["Generation 105<br/><small>Release</small>"]:::neutral
    n467["Generation 106<br/><small>Release</small>"]:::neutral
    n468["Generation 107<br/><small>Release</small>"]:::neutral
    n469["Generation 108<br/><small>Release</small>"]:::neutral
    n470["Generation 109<br/><small>Release</small>"]:::neutral
    n471["Generation 11<br/><small>Release</small>"]:::neutral
    n472["Generation 110<br/><small>Release</small>"]:::neutral
    n473["Generation 111<br/><small>Release</small>"]:::neutral
    n474["Generation 112<br/><small>Release</small>"]:::neutral
    n475["Generation 113<br/><small>Release</small>"]:::neutral
    n476["Generation 114<br/><small>Release</small>"]:::neutral
    n477["Generation 115<br/><small>Release</small>"]:::neutral
    n478["Generation 116<br/><small>Release</small>"]:::neutral
    n479["Generation 12<br/><small>Release</small>"]:::neutral
    n480["Generation 13<br/><small>Release</small>"]:::neutral
    n481["Generation 14<br/><small>Release</small>"]:::neutral
    n482["Generation 15<br/><small>Release</small>"]:::neutral
    n483["Generation 16<br/><small>Release</small>"]:::neutral
    n484["Generation 17<br/><small>Release</small>"]:::neutral
    n485["Generation 18<br/><small>Release</small>"]:::neutral
    n486["Generation 19<br/><small>Release</small>"]:::neutral
    n487["Generation 2<br/><small>Release</small>"]:::neutral
    n488["Generation 20<br/><small>Release</small>"]:::neutral
    n489["Generation 21<br/><small>Release</small>"]:::neutral
    n490["Generation 22<br/><small>Release</small>"]:::neutral
    n491["Generation 23<br/><small>Release</small>"]:::neutral
    n492["Generation 24<br/><small>Release</small>"]:::neutral
    n493["Generation 25<br/><small>Release</small>"]:::neutral
    n494["Generation 26<br/><small>Release</small>"]:::neutral
    n495["Generation 27<br/><small>Release</small>"]:::neutral
    n496["Generation 28<br/><small>Release</small>"]:::neutral
    n497["Generation 29<br/><small>Release</small>"]:::neutral
    n498["Generation 3<br/><small>Release</small>"]:::neutral
    n499["Generation 30<br/><small>Release</small>"]:::neutral
    n500["Generation 31<br/><small>Release</small>"]:::neutral
    n501["Generation 32<br/><small>Release</small>"]:::neutral
    n502["Generation 33<br/><small>Release</small>"]:::neutral
    n503["Generation 34<br/><small>Release</small>"]:::neutral
    n504["Generation 35<br/><small>Release</small>"]:::neutral
    n505["Generation 36<br/><small>Release</small>"]:::neutral
    n506["Generation 37<br/><small>Release</small>"]:::neutral
    n507["Generation 38<br/><small>Release</small>"]:::neutral
    n508["Generation 39<br/><small>Release</small>"]:::neutral
    n509["Generation 4<br/><small>Release</small>"]:::neutral
    n510["Generation 40<br/><small>Release</small>"]:::neutral
    n511["Generation 41<br/><small>Release</small>"]:::neutral
    n512["Generation 42<br/><small>Release</small>"]:::neutral
    n513["Generation 43<br/><small>Release</small>"]:::neutral
    n514["Generation 44<br/><small>Release</small>"]:::neutral
    n515["Generation 45<br/><small>Release</small>"]:::neutral
    n516["Generation 46<br/><small>Release</small>"]:::neutral
    n517["Generation 47<br/><small>Release</small>"]:::neutral
    n518["Generation 48<br/><small>Release</small>"]:::neutral
    n519["Generation 49<br/><small>Release</small>"]:::neutral
    n520["Generation 5<br/><small>Release</small>"]:::neutral
    n521["Generation 50<br/><small>Release</small>"]:::neutral
    n522["Generation 51<br/><small>Release</small>"]:::neutral
    n523["Generation 52<br/><small>Release</small>"]:::neutral
    n524["Generation 53<br/><small>Release</small>"]:::neutral
    n525["Generation 54<br/><small>Release</small>"]:::neutral
    n526["Generation 55<br/><small>Release</small>"]:::neutral
    n527["Generation 56<br/><small>Release</small>"]:::neutral
    n528["Generation 57<br/><small>Release</small>"]:::neutral
    n529["Generation 58<br/><small>Release</small>"]:::neutral
    n530["Generation 59<br/><small>Release</small>"]:::neutral
    n531["Generation 6<br/><small>Release</small>"]:::neutral
    n532["Generation 60<br/><small>Release</small>"]:::neutral
    n533["Generation 61<br/><small>Release</small>"]:::neutral
    n534["Generation 62<br/><small>Release</small>"]:::neutral
    n535["Generation 63<br/><small>Release</small>"]:::neutral
    n536["Generation 64<br/><small>Release</small>"]:::neutral
    n537["Generation 65<br/><small>Release</small>"]:::neutral
    n538["Generation 66<br/><small>Release</small>"]:::neutral
    n539["Generation 67<br/><small>Release</small>"]:::neutral
    n540["Generation 68<br/><small>Release</small>"]:::neutral
    n541["Generation 69<br/><small>Release</small>"]:::neutral
    n542["Generation 7<br/><small>Release</small>"]:::neutral
    n543["Generation 70<br/><small>Release</small>"]:::neutral
    n544["Generation 71<br/><small>Release</small>"]:::neutral
    n545["Generation 72<br/><small>Release</small>"]:::neutral
    n546["Generation 73<br/><small>Release</small>"]:::neutral
    n547["Generation 74<br/><small>Release</small>"]:::neutral
    n548["Generation 75<br/><small>Release</small>"]:::neutral
    n549["Generation 76<br/><small>Release</small>"]:::neutral
    n550["Generation 77<br/><small>Release</small>"]:::neutral
    n551["Generation 78<br/><small>Release</small>"]:::neutral
    n552["Generation 79<br/><small>Release</small>"]:::neutral
    n553["Generation 8<br/><small>Release</small>"]:::neutral
    n554["Generation 80<br/><small>Release</small>"]:::neutral
    n555["Generation 81<br/><small>Release</small>"]:::neutral
    n556["Generation 82<br/><small>Release</small>"]:::neutral
    n557["Generation 83<br/><small>Release</small>"]:::neutral
    n558["Generation 84<br/><small>Release</small>"]:::neutral
    n559["Generation 85<br/><small>Release</small>"]:::neutral
    n560["Generation 86<br/><small>Release</small>"]:::neutral
    n561["Generation 87<br/><small>Release</small>"]:::neutral
    n562["Generation 88<br/><small>Release</small>"]:::neutral
    n563["Generation 89<br/><small>Release</small>"]:::neutral
    n564["Generation 9<br/><small>Release</small>"]:::neutral
    n565["Generation 90<br/><small>Release</small>"]:::neutral
    n566["Generation 91<br/><small>Release</small>"]:::neutral
    n567["Generation 92<br/><small>Release</small>"]:::neutral
    n568["Generation 93<br/><small>Release</small>"]:::neutral
    n569["Generation 94<br/><small>Release</small>"]:::neutral
    n570["Generation 95<br/><small>Release</small>"]:::neutral
    n571["Generation 96<br/><small>Release</small>"]:::neutral
    n572["Generation 97<br/><small>Release</small>"]:::neutral
    n573["Generation 98<br/><small>Release</small>"]:::neutral
    n574["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n575["Common rendering<br/><small>Function</small>"]:::held
    n576["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n577["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n578["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n579["Rendering of the files<br/><small>Function</small>"]:::held
    n580["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n581["HTML writer<br/><small>Function</small>"]:::held
    n582["Markdown writer<br/><small>Function</small>"]:::held
    n583["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n584["Mermaid diagrams<br/><small>Function</small>"]:::held
    n585["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n586["Figures of the page<br/><small>Port</small>"]:::neutral
    n587["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n588["The page in HTML<br/><small>Technical choice</small>"]:::held
    n589["Rendering in the page<br/><small>Function</small>"]:::held
    n590["Syntax of the page<br/><small>Port</small>"]:::neutral
    n591["Plain text writer<br/><small>Function</small>"]:::held
    n592["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n593["Figures in SVG<br/><small>Function</small>"]:::held
    n594["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n595["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n596["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n597["Rendering in the terminal<br/><small>Function</small>"]:::held
    n598["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n599["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n600["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n601["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n602["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n603["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n604["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n605["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n606["EngineReckons<br/><small>Scenario</small>"]:::held
    n607["Shape of the example<br/><small>Decision</small>"]:::neutral
    n608["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n609["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n610["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n611["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n612["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n613["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n614["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n615["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n616["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n617["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n618["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n619["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n620["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n621["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n622["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n623["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n624["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n625["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n626["How a generation is made<br/><small>Policy</small>"]:::neutral
    n627["The graph page<br/><small>Artefact</small>"]:::unknown
    n628["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n629["The graph page opens<br/><small>Check</small>"]:::unknown
    n630["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n631["What the graph page is asked<br/><small>Function</small>"]:::held
    n632["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n633["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n634["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n635["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n636["How a change merges<br/><small>Policy</small>"]:::neutral
    n637["The next generation<br/><small>Shipment</small>"]:::unknown
    n638["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n639["Open the graph page<br/><small>Entry point</small>"]:::held
    n640["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n641["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n642["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n643["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n644["The page's program<br/><small>Artefact</small>"]:::unknown
    n645["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n646["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n647["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n648["The repository's projects<br/><small>Decision</small>"]:::neutral
    n649["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n650["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n651["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n652["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n653["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n654["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n655["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n656["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n657["How the repository is set<br/><small>Policy</small>"]:::neutral
    n658["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n659["The engine<br/><small>Artefact</small>"]:::unknown
    n660["Trame's repository<br/><small>Decision</small>"]:::neutral
    n661["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n662["Attribution<br/><small>Function</small>"]:::held
    n663["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n664["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n665["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n666["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n667["Ship only what holds<br/><small>Requirement</small>"]:::held
    n668["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n669["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n670["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n671["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n672["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n673["Checks of a body<br/><small>Function</small>"]:::held
    n674["Captures<br/><small>Standard</small>"]:::neutral
    n675["Categories of literals<br/><small>Decision</small>"]:::neutral
    n676["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n677["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n678["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n679["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n680["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n681["Attribute<br/><small>Syntax element</small>"]:::held
    n682["Comment<br/><small>Syntax element</small>"]:::held
    n683["Text<br/><small>Syntax element</small>"]:::held
    n684["HCL<br/><small>Standard</small>"]:::neutral
    n685["Value<br/><small>Syntax element</small>"]:::held
    n686["Module call<br/><small>Syntax element</small>"]:::held
    n687["Terraform<br/><small>Language</small>"]:::held
    n688["Terraform modules<br/><small>Standard</small>"]:::neutral
    n689["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n690["Box drawing<br/><small>Standard</small>"]:::neutral
    n691["Code lines<br/><small>Syntax element</small>"]:::held
    n692["Columns<br/><small>Syntax element</small>"]:::held
    n693["Item line<br/><small>Syntax element</small>"]:::held
    n694["Padded cell<br/><small>Syntax element</small>"]:::held
    n695["Path step<br/><small>Syntax element</small>"]:::held
    n696["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n697["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n698["Terminal text<br/><small>Decision</small>"]:::neutral
    n699["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n700["List on several lines<br/><small>Syntax element</small>"]:::held
    n701["Type assertion<br/><small>Syntax element</small>"]:::held
    n702["Assignment<br/><small>Syntax element</small>"]:::held
    n703["Async function of a block<br/><small>Syntax element</small>"]:::held
    n704["Waiting<br/><small>Syntax element</small>"]:::held
    n705["Call<br/><small>Syntax element</small>"]:::held
    n706["Constant<br/><small>Syntax element</small>"]:::held
    n707["Default import<br/><small>Syntax element</small>"]:::held
    n708["Documentation comment<br/><small>Syntax element</small>"]:::held
    n709["Export<br/><small>Syntax element</small>"]:::held
    n710["Condition<br/><small>Syntax element</small>"]:::held
    n711["List on one line<br/><small>Syntax element</small>"]:::held
    n712["Comment<br/><small>Syntax element</small>"]:::held
    n713["Property access<br/><small>Syntax element</small>"]:::held
    n714["Title of a module<br/><small>Syntax element</small>"]:::held
    n715["Import of names<br/><small>Syntax element</small>"]:::held
    n716["Object on several lines<br/><small>Syntax element</small>"]:::held
    n717["Object<br/><small>Syntax element</small>"]:::held
    n718["Object type<br/><small>Syntax element</small>"]:::held
    n719["Optional property access<br/><small>Syntax element</small>"]:::held
    n720["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n721["Group<br/><small>Syntax element</small>"]:::held
    n722["Names of a program<br/><small>Decision</small>"]:::neutral
    n723["Property<br/><small>Syntax element</small>"]:::held
    n724["Strict inequality<br/><small>Syntax element</small>"]:::held
    n725["Text<br/><small>Syntax element</small>"]:::held
    n726["TypeScript<br/><small>Language</small>"]:::held
    n727["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n728["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n729["TypeScript writer<br/><small>Function</small>"]:::held
    n730["Union type<br/><small>Syntax element</small>"]:::held
    n731["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n360
  n58 -->|Depends on| n173
  n59 -->|Implements| n20
  n59 -->|Depends on| n345
  n60 -->|Implements| n24
  n60 -->|Depends on| n360
  n60 -->|Depends on| n173
  n61 -->|Implements| n37
  n61 -->|Depends on| n360
  n62 -->|Implements| n38
  n62 -->|Depends on| n223
  n63 -->|Serves| n449
  n63 -->|Depends on| n360
  n63 -->|Depends on| n280
  n63 -->|Depends on| n282
  n63 -->|Depends on| n281
  n63 -->|Depends on| n0
  n63 -->|Depends on| n217
  n63 -->|Depends on| n221
  n63 -->|Depends on| n229
  n63 -->|Depends on| n226
  n63 -->|Depends on| n208
  n63 -->|Depends on| n214
  n63 -->|Depends on| n575
  n63 -->|Depends on| n310
  n63 -->|Depends on| n312
  n63 -->|Depends on| n162
  n64 -->|Serves| n449
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n575
  n64 -->|Depends on| n360
  n64 -->|Depends on| n349
  n64 -->|Depends on| n352
  n64 -->|Depends on| n340
  n64 -->|Depends on| n280
  n64 -->|Depends on| n279
  n64 -->|Depends on| n281
  n64 -->|Depends on| n0
  n64 -->|Depends on| n144
  n64 -->|Depends on| n592
  n64 -->|Depends on| n162
  n64 -->|Depends on| n306
  n64 -->|Depends on| n217
  n64 -->|Depends on| n214
  n64 -->|Depends on| n206
  n64 -->|Depends on| n205
  n64 -->|Depends on| n228
  n64 -->|Depends on| n207
  n64 -->|Depends on| n310
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n450
  n66 -->|Serves| n449
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n108
  n67 -->|Verifies| n175
  n67 -->|In| n53
  n67 -->|Depends on| n108
  n67 -->|Depends on| n42
  n67 -->|Depends on| n57
  n67 -->|Depends on| n52
  n67 -->|Depends on| n41
  n67 -->|Depends on| n39
  n67 -->|Depends on| n148
  n67 -->|Depends on| n21
  n67 -->|Depends on| n23
  n67 -->|Depends on| n153
  n67 -->|Depends on| n297
  n67 -->|Depends on| n68
  n67 -->|Depends on| n313
  n71 -->|Verifies| n680
  n71 -->|Verifies| n673
  n71 -->|Verifies| n417
  n71 -->|In| n53
  n71 -->|Depends on| n680
  n71 -->|Depends on| n673
  n71 -->|Depends on| n726
  n71 -->|Depends on| n72
  n71 -->|Depends on| n303
  n71 -->|Depends on| n313
  n73 -->|Verifies| n125
  n73 -->|In| n53
  n73 -->|Depends on| n114
  n73 -->|Depends on| n125
  n73 -->|Depends on| n57
  n73 -->|Depends on| n52
  n73 -->|Depends on| n23
  n73 -->|Depends on| n41
  n73 -->|Depends on| n39
  n73 -->|Depends on| n148
  n73 -->|Depends on| n93
  n73 -->|Depends on| n153
  n73 -->|Depends on| n298
  n73 -->|Depends on| n313
  n74 -->|Verifies| n383
  n74 -->|Verifies| n382
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n153
  n74 -->|Depends on| n106
  n74 -->|Depends on| n311
  n74 -->|Depends on| n313
  n75 -->|Verifies| n111
  n75 -->|Verifies| n112
  n75 -->|Verifies| n167
  n75 -->|Verifies| n729
  n75 -->|Verifies| n689
  n75 -->|Verifies| n230
  n75 -->|Verifies| n408
  n75 -->|In| n53
  n75 -->|Depends on| n111
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n153
  n75 -->|Depends on| n148
  n75 -->|Depends on| n70
  n75 -->|Depends on| n145
  n75 -->|Depends on| n298
  n75 -->|Depends on| n313
  n76 -->|Verifies| n134
  n76 -->|In| n53
  n76 -->|Depends on| n134
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n153
  n76 -->|Depends on| n70
  n76 -->|Depends on| n99
  n76 -->|Depends on| n313
  n77 -->|Verifies| n128
  n77 -->|In| n53
  n77 -->|Depends on| n128
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n148
  n77 -->|Depends on| n153
  n77 -->|Depends on| n298
  n77 -->|Depends on| n313
  n78 -->|Verifies| n118
  n78 -->|Verifies| n172
  n78 -->|Verifies| n380
  n78 -->|Verifies| n393
  n78 -->|In| n53
  n78 -->|Depends on| n121
  n78 -->|Depends on| n118
  n78 -->|Depends on| n42
  n78 -->|Depends on| n47
  n78 -->|Depends on| n52
  n78 -->|Depends on| n23
  n78 -->|Depends on| n54
  n78 -->|Depends on| n41
  n78 -->|Depends on| n39
  n78 -->|Depends on| n148
  n78 -->|Depends on| n173
  n78 -->|Depends on| n447
  n78 -->|Depends on| n189
  n78 -->|Depends on| n153
  n78 -->|Depends on| n309
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n313
  n80 -->|Verifies| n119
  n80 -->|Verifies| n190
  n80 -->|Verifies| n404
  n80 -->|In| n53
  n80 -->|Depends on| n119
  n80 -->|Depends on| n42
  n80 -->|Depends on| n52
  n80 -->|Depends on| n120
  n80 -->|Depends on| n153
  n80 -->|Depends on| n298
  n80 -->|Depends on| n313
  n81 -->|Verifies| n129
  n81 -->|In| n53
  n81 -->|Depends on| n129
  n81 -->|Depends on| n57
  n81 -->|Depends on| n41
  n81 -->|Depends on| n39
  n81 -->|Depends on| n148
  n81 -->|Depends on| n669
  n81 -->|Depends on| n95
  n81 -->|Depends on| n153
  n81 -->|Depends on| n49
  n81 -->|Depends on| n313
  n82 -->|Verifies| n169
  n82 -->|Verifies| n189
  n82 -->|In| n53
  n82 -->|Depends on| n169
  n82 -->|Depends on| n42
  n82 -->|Depends on| n41
  n82 -->|Depends on| n17
  n82 -->|Depends on| n100
  n82 -->|Depends on| n95
  n82 -->|Depends on| n664
  n82 -->|Depends on| n23
  n82 -->|Depends on| n313
  n83 -->|Verifies| n138
  n83 -->|In| n53
  n83 -->|Depends on| n138
  n83 -->|Depends on| n169
  n83 -->|Depends on| n196
  n83 -->|Depends on| n41
  n83 -->|Depends on| n52
  n83 -->|Depends on| n153
  n83 -->|Depends on| n298
  n83 -->|Depends on| n313
  n84 -->|Verifies| n116
  n84 -->|Verifies| n127
  n84 -->|Verifies| n123
  n84 -->|In| n53
  n84 -->|Depends on| n116
  n84 -->|Depends on| n123
  n84 -->|Depends on| n42
  n84 -->|Depends on| n52
  n84 -->|Depends on| n153
  n84 -->|Depends on| n95
  n84 -->|Depends on| n313
  n85 -->|Verifies| n132
  n85 -->|Verifies| n203
  n85 -->|Verifies| n377
  n85 -->|In| n53
  n85 -->|Depends on| n132
  n85 -->|Depends on| n42
  n85 -->|Depends on| n57
  n85 -->|Depends on| n52
  n85 -->|Depends on| n41
  n85 -->|Depends on| n39
  n85 -->|Depends on| n148
  n85 -->|Depends on| n100
  n85 -->|Depends on| n95
  n85 -->|Depends on| n153
  n85 -->|Depends on| n725
  n85 -->|Depends on| n313
  n85 -->|Depends on| n669
  n86 -->|Verifies| n140
  n86 -->|Verifies| n398
  n86 -->|Verifies| n376
  n86 -->|Verifies| n394
  n86 -->|In| n53
  n86 -->|Depends on| n140
  n86 -->|Depends on| n42
  n86 -->|Depends on| n57
  n86 -->|Depends on| n21
  n86 -->|Depends on| n41
  n86 -->|Depends on| n39
  n86 -->|Depends on| n148
  n86 -->|Depends on| n100
  n86 -->|Depends on| n95
  n86 -->|Depends on| n153
  n86 -->|Depends on| n313
  n86 -->|Depends on| n147
  n86 -->|Depends on| n726
  n87 -->|Verifies| n113
  n87 -->|Verifies| n395
  n87 -->|In| n53
  n87 -->|Depends on| n113
  n87 -->|Depends on| n42
  n87 -->|Depends on| n57
  n87 -->|Depends on| n52
  n87 -->|Depends on| n100
  n87 -->|Depends on| n153
  n87 -->|Depends on| n313
  n87 -->|Depends on| n323
  n88 -->|Verifies| n139
  n88 -->|Verifies| n398
  n88 -->|Verifies| n376
  n88 -->|In| n53
  n88 -->|Depends on| n139
  n88 -->|Depends on| n42
  n88 -->|Depends on| n57
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n148
  n88 -->|Depends on| n100
  n88 -->|Depends on| n153
  n88 -->|Depends on| n313
  n89 -->|Verifies| n117
  n89 -->|Verifies| n158
  n89 -->|In| n53
  n89 -->|Depends on| n117
  n89 -->|Depends on| n42
  n89 -->|Depends on| n57
  n89 -->|Depends on| n100
  n89 -->|Depends on| n95
  n89 -->|Depends on| n213
  n89 -->|Depends on| n153
  n89 -->|Depends on| n313
  n90 -->|Verifies| n122
  n90 -->|Verifies| n171
  n90 -->|In| n53
  n90 -->|Depends on| n121
  n90 -->|Depends on| n122
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n52
  n90 -->|Depends on| n189
  n90 -->|Depends on| n41
  n90 -->|Depends on| n39
  n90 -->|Depends on| n148
  n90 -->|Depends on| n153
  n90 -->|Depends on| n309
  n90 -->|Depends on| n313
  n91 -->|Verifies| n346
  n91 -->|Verifies| n368
  n91 -->|Verifies| n384
  n91 -->|Verifies| n400
  n91 -->|In| n53
  n91 -->|Depends on| n121
  n91 -->|Depends on| n346
  n91 -->|Depends on| n19
  n91 -->|Depends on| n189
  n91 -->|Depends on| n41
  n91 -->|Depends on| n17
  n91 -->|Depends on| n52
  n91 -->|Depends on| n153
  n91 -->|Depends on| n309
  n91 -->|Depends on| n313
  n92 -->|Verifies| n121
  n92 -->|Verifies| n187
  n92 -->|Verifies| n589
  n92 -->|Verifies| n581
  n92 -->|Verifies| n593
  n92 -->|Verifies| n174
  n92 -->|In| n53
  n92 -->|Depends on| n121
  n92 -->|Depends on| n174
  n92 -->|Depends on| n52
  n92 -->|Depends on| n153
  n92 -->|Depends on| n309
  n92 -->|Depends on| n313
  n92 -->|Depends on| n104
  n94 -->|Verifies| n116
  n94 -->|Verifies| n127
  n94 -->|Verifies| n123
  n94 -->|In| n53
  n94 -->|Depends on| n116
  n94 -->|Depends on| n123
  n94 -->|Depends on| n42
  n94 -->|Depends on| n52
  n94 -->|Depends on| n153
  n94 -->|Depends on| n95
  n94 -->|Depends on| n298
  n94 -->|Depends on| n313
  n96 -->|Verifies| n124
  n96 -->|Verifies| n130
  n96 -->|In| n53
  n96 -->|Depends on| n124
  n96 -->|Depends on| n42
  n96 -->|Depends on| n57
  n96 -->|Depends on| n41
  n96 -->|Depends on| n39
  n96 -->|Depends on| n148
  n96 -->|Depends on| n100
  n96 -->|Depends on| n95
  n96 -->|Depends on| n150
  n96 -->|Depends on| n201
  n96 -->|Depends on| n153
  n96 -->|Depends on| n313
  n96 -->|Depends on| n147
  n96 -->|Depends on| n726
  n97 -->|Verifies| n128
  n97 -->|Verifies| n184
  n97 -->|In| n53
  n97 -->|Depends on| n128
  n97 -->|Depends on| n23
  n97 -->|Depends on| n21
  n97 -->|Depends on| n52
  n97 -->|Depends on| n41
  n97 -->|Depends on| n39
  n97 -->|Depends on| n148
  n97 -->|Depends on| n153
  n97 -->|Depends on| n191
  n97 -->|Depends on| n69
  n97 -->|Depends on| n309
  n97 -->|Depends on| n313
  n98 -->|Verifies| n131
  n98 -->|Verifies| n377
  n98 -->|In| n53
  n98 -->|Depends on| n131
  n98 -->|Depends on| n42
  n98 -->|Depends on| n57
  n98 -->|Depends on| n153
  n98 -->|Depends on| n313
  n98 -->|Depends on| n147
  n98 -->|Depends on| n726
  n98 -->|Depends on| n95
  n101 -->|Verifies| n135
  n101 -->|Verifies| n129
  n101 -->|Verifies| n664
  n101 -->|Verifies| n192
  n101 -->|Verifies| n666
  n101 -->|Verifies| n385
  n101 -->|Verifies| n662
  n101 -->|Verifies| n175
  n101 -->|In| n53
  n101 -->|Depends on| n135
  n101 -->|Depends on| n129
  n101 -->|Depends on| n42
  n101 -->|Depends on| n57
  n101 -->|Depends on| n52
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n22
  n101 -->|Depends on| n49
  n101 -->|Depends on| n23
  n101 -->|Depends on| n169
  n101 -->|Depends on| n17
  n101 -->|Depends on| n299
  n101 -->|Depends on| n148
  n101 -->|Depends on| n669
  n101 -->|Depends on| n100
  n101 -->|Depends on| n95
  n101 -->|Depends on| n153
  n101 -->|Depends on| n313
  n102 -->|Verifies| n137
  n102 -->|In| n53
  n102 -->|Depends on| n137
  n102 -->|Depends on| n57
  n102 -->|Depends on| n21
  n102 -->|Depends on| n41
  n102 -->|Depends on| n39
  n102 -->|Depends on| n148
  n102 -->|Depends on| n153
  n102 -->|Depends on| n313
  n103 -->|Verifies| n135
  n103 -->|Verifies| n192
  n103 -->|In| n53
  n103 -->|Depends on| n135
  n103 -->|Depends on| n42
  n103 -->|Depends on| n52
  n103 -->|Depends on| n41
  n103 -->|Depends on| n39
  n103 -->|Depends on| n22
  n103 -->|Depends on| n23
  n103 -->|Depends on| n169
  n103 -->|Depends on| n17
  n103 -->|Depends on| n192
  n103 -->|Depends on| n298
  n103 -->|Depends on| n148
  n103 -->|Depends on| n669
  n103 -->|Depends on| n100
  n103 -->|Depends on| n95
  n103 -->|Depends on| n153
  n103 -->|Depends on| n313
  n105 -->|Verifies| n109
  n105 -->|Verifies| n110
  n105 -->|Verifies| n115
  n105 -->|Verifies| n374
  n105 -->|In| n53
  n105 -->|Depends on| n109
  n105 -->|Depends on| n57
  n105 -->|Depends on| n41
  n105 -->|Depends on| n39
  n105 -->|Depends on| n153
  n105 -->|Depends on| n69
  n105 -->|Depends on| n313
  n107 -->|Verifies| n136
  n107 -->|Verifies| n116
  n107 -->|Verifies| n133
  n107 -->|Verifies| n597
  n107 -->|Verifies| n591
  n107 -->|Verifies| n599
  n107 -->|In| n53
  n107 -->|Depends on| n136
  n107 -->|Depends on| n116
  n107 -->|Depends on| n52
  n107 -->|Depends on| n153
  n107 -->|Depends on| n106
  n107 -->|Depends on| n313
  n108 -->|Serves| n449
  n108 -->|Part of| n55
  n108 -->|Depends on| n126
  n108 -->|Depends on| n175
  n108 -->|Depends on| n153
  n108 -->|Depends on| n148
  n108 -->|Depends on| n200
  n108 -->|Depends on| n198
  n108 -->|Depends on| n371
  n108 -->|Depends on| n410
  n108 -->|Depends on| n154
  n108 -->|Depends on| n726
  n108 -->|Depends on| n43
  n108 -->|Depends on| n22
  n108 -->|Depends on| n21
  n108 -->|Depends on| n23
  n108 -->|Depends on| n39
  n108 -->|Depends on| n25
  n108 -->|Depends on| n176
  n108 -->|Depends on| n51
  n108 -->|Depends on| n692
  n108 -->|Depends on| n698
  n108 -->|Depends on| n298
  n108 -->|Depends on| n297
  n108 -->|Depends on| n201
  n108 -->|Depends on| n202
  n108 -->|Depends on| n204
  n108 -->|Depends on| n203
  n108 -->|Depends on| n146
  n108 -->|Depends on| n151
  n108 -->|Depends on| n17
  n108 -->|Depends on| n189
  n108 -->|Depends on| n147
  n109 -->|Serves| n456
  n109 -->|Part of| n55
  n109 -->|Depends on| n126
  n109 -->|Depends on| n110
  n109 -->|Depends on| n14
  n109 -->|Depends on| n39
  n109 -->|Depends on| n698
  n109 -->|Depends on| n51
  n109 -->|Depends on| n298
  n110 -->|Serves| n456
  n110 -->|Depends on| n126
  n110 -->|Depends on| n185
  n110 -->|Depends on| n115
  n110 -->|Depends on| n40
  n110 -->|Depends on| n191
  n110 -->|Depends on| n189
  n110 -->|Depends on| n148
  n110 -->|Depends on| n39
  n110 -->|Depends on| n298
  n110 -->|Depends on| n141
  n111 -->|Serves| n449
  n111 -->|Part of| n55
  n111 -->|Depends on| n126
  n111 -->|Depends on| n112
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n51
  n111 -->|Depends on| n298
  n112 -->|Serves| n449
  n112 -->|Depends on| n126
  n112 -->|Depends on| n167
  n112 -->|Depends on| n698
  n112 -->|Depends on| n162
  n112 -->|Depends on| n298
  n113 -->|Serves| n456
  n113 -->|Part of| n55
  n113 -->|Depends on| n126
  n113 -->|Depends on| n34
  n113 -->|Depends on| n323
  n113 -->|Depends on| n148
  n113 -->|Depends on| n21
  n113 -->|Depends on| n23
  n113 -->|Depends on| n39
  n113 -->|Depends on| n329
  n113 -->|Depends on| n146
  n113 -->|Depends on| n51
  n113 -->|Depends on| n692
  n113 -->|Depends on| n698
  n113 -->|Depends on| n298
  n114 -->|Serves| n449
  n114 -->|Part of| n55
  n114 -->|Depends on| n148
  n114 -->|Depends on| n126
  n114 -->|Depends on| n185
  n114 -->|Depends on| n579
  n114 -->|Depends on| n597
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n51
  n114 -->|Depends on| n298
  n115 -->|Serves| n449
  n115 -->|Depends on| n298
  n115 -->|Depends on| n309
  n116 -->|Serves| n449
  n116 -->|Part of| n55
  n116 -->|Depends on| n153
  n116 -->|Depends on| n126
  n116 -->|Depends on| n133
  n116 -->|Depends on| n169
  n116 -->|Depends on| n196
  n116 -->|Depends on| n112
  n116 -->|Depends on| n127
  n116 -->|Depends on| n23
  n116 -->|Depends on| n39
  n116 -->|Depends on| n41
  n116 -->|Depends on| n51
  n116 -->|Depends on| n298
  n117 -->|Serves| n449
  n117 -->|Part of| n55
  n117 -->|Depends on| n126
  n117 -->|Depends on| n167
  n117 -->|Depends on| n112
  n117 -->|Depends on| n16
  n117 -->|Depends on| n158
  n117 -->|Depends on| n347
  n117 -->|Depends on| n348
  n117 -->|Depends on| n227
  n117 -->|Depends on| n157
  n117 -->|Depends on| n21
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n298
  n118 -->|Serves| n449
  n118 -->|Part of| n55
  n118 -->|Depends on| n126
  n118 -->|Depends on| n172
  n118 -->|Depends on| n110
  n118 -->|Depends on| n14
  n118 -->|Depends on| n39
  n119 -->|Serves| n449
  n119 -->|Part of| n55
  n119 -->|Depends on| n126
  n119 -->|Depends on| n120
  n119 -->|Depends on| n21
  n119 -->|Depends on| n23
  n119 -->|Depends on| n22
  n119 -->|Depends on| n43
  n119 -->|Depends on| n28
  n119 -->|Depends on| n26
  n119 -->|Depends on| n54
  n119 -->|Depends on| n34
  n119 -->|Depends on| n33
  n119 -->|Depends on| n148
  n119 -->|Depends on| n17
  n119 -->|Depends on| n39
  n119 -->|Depends on| n51
  n119 -->|Depends on| n298
  n121 -->|Serves| n449
  n121 -->|Part of| n55
  n121 -->|Depends on| n126
  n121 -->|Depends on| n187
  n121 -->|Depends on| n579
  n121 -->|Depends on| n597
  n121 -->|Depends on| n589
  n121 -->|Depends on| n51
  n122 -->|Serves| n449
  n122 -->|Part of| n55
  n122 -->|Depends on| n148
  n122 -->|Depends on| n126
  n122 -->|Depends on| n171
  n122 -->|Depends on| n346
  n122 -->|Depends on| n189
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n51
  n122 -->|Depends on| n298
  n123 -->|Serves| n449
  n123 -->|Part of| n55
  n123 -->|Depends on| n126
  n123 -->|Depends on| n127
  n123 -->|Depends on| n196
  n123 -->|Depends on| n51
  n123 -->|Depends on| n694
  n123 -->|Depends on| n696
  n123 -->|Depends on| n298
  n124 -->|Serves| n456
  n124 -->|Part of| n55
  n124 -->|Depends on| n126
  n124 -->|Depends on| n148
  n124 -->|Depends on| n189
  n124 -->|Depends on| n40
  n124 -->|Depends on| n150
  n124 -->|Depends on| n201
  n124 -->|Depends on| n21
  n124 -->|Depends on| n23
  n124 -->|Depends on| n39
  n124 -->|Depends on| n146
  n124 -->|Depends on| n726
  n124 -->|Depends on| n728
  n124 -->|Depends on| n714
  n124 -->|Depends on| n708
  n124 -->|Depends on| n709
  n124 -->|Depends on| n706
  n124 -->|Depends on| n705
  n124 -->|Depends on| n717
  n124 -->|Depends on| n723
  n124 -->|Depends on| n725
  n124 -->|Depends on| n715
  n124 -->|Depends on| n51
  n124 -->|Depends on| n298
  n124 -->|Depends on| n41
  n124 -->|Depends on| n153
  n124 -->|Depends on| n130
  n124 -->|Depends on| n147
  n124 -->|Depends on| n713
  n124 -->|Depends on| n711
  n125 -->|Serves| n449
  n125 -->|Part of| n55
  n125 -->|Depends on| n148
  n125 -->|Depends on| n698
  n125 -->|Depends on| n126
  n125 -->|Depends on| n185
  n125 -->|Depends on| n115
  n125 -->|Depends on| n21
  n125 -->|Depends on| n39
  n125 -->|Depends on| n51
  n125 -->|Depends on| n298
  n126 -->|Serves| n449
  n126 -->|Depends on| n153
  n126 -->|Depends on| n169
  n126 -->|Depends on| n168
  n126 -->|Depends on| n182
  n126 -->|Depends on| n196
  n126 -->|Depends on| n184
  n126 -->|Depends on| n575
  n126 -->|Depends on| n51
  n126 -->|Depends on| n41
  n126 -->|Depends on| n17
  n126 -->|Depends on| n454
  n126 -->|Depends on| n448
  n126 -->|Depends on| n698
  n126 -->|Depends on| n696
  n126 -->|Depends on| n694
  n126 -->|Depends on| n298
  n126 -->|Depends on| n148
  n126 -->|Depends on| n191
  n126 -->|Depends on| n127
  n127 -->|Serves| n449
  n127 -->|Depends on| n197
  n127 -->|Depends on| n298
  n128 -->|Serves| n456
  n128 -->|Part of| n55
  n128 -->|Depends on| n126
  n128 -->|Depends on| n184
  n128 -->|Depends on| n23
  n128 -->|Depends on| n51
  n128 -->|Depends on| n698
  n128 -->|Depends on| n696
  n128 -->|Depends on| n694
  n128 -->|Depends on| n298
  n129 -->|Serves| n667
  n129 -->|Part of| n55
  n129 -->|Depends on| n153
  n129 -->|Depends on| n126
  n129 -->|Depends on| n664
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n51
  n129 -->|Depends on| n298
  n130 -->|Serves| n456
  n130 -->|Depends on| n728
  n130 -->|Depends on| n714
  n130 -->|Depends on| n708
  n130 -->|Depends on| n709
  n130 -->|Depends on| n706
  n130 -->|Depends on| n705
  n130 -->|Depends on| n717
  n130 -->|Depends on| n723
  n130 -->|Depends on| n725
  n130 -->|Depends on| n711
  n130 -->|Depends on| n715
  n131 -->|Serves| n456
  n131 -->|Part of| n55
  n131 -->|Depends on| n126
  n131 -->|Depends on| n148
  n131 -->|Depends on| n189
  n131 -->|Depends on| n147
  n131 -->|Depends on| n21
  n131 -->|Depends on| n22
  n131 -->|Depends on| n39
  n131 -->|Depends on| n51
  n131 -->|Depends on| n298
  n132 -->|Serves| n456
  n132 -->|Part of| n55
  n132 -->|Depends on| n126
  n132 -->|Depends on| n148
  n132 -->|Depends on| n189
  n132 -->|Depends on| n185
  n132 -->|Depends on| n579
  n132 -->|Depends on| n256
  n132 -->|Depends on| n255
  n132 -->|Depends on| n204
  n132 -->|Depends on| n203
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n22
  n132 -->|Depends on| n39
  n132 -->|Depends on| n25
  n132 -->|Depends on| n176
  n132 -->|Depends on| n726
  n132 -->|Depends on| n17
  n132 -->|Depends on| n51
  n132 -->|Depends on| n298
  n132 -->|Depends on| n297
  n132 -->|Depends on| n230
  n132 -->|Depends on| n725
  n132 -->|Depends on| n135
  n132 -->|Depends on| n153
  n133 -->|Serves| n449
  n133 -->|Depends on| n153
  n133 -->|Depends on| n146
  n133 -->|Depends on| n126
  n133 -->|Depends on| n196
  n133 -->|Depends on| n579
  n133 -->|Depends on| n597
  n133 -->|Depends on| n51
  n133 -->|Depends on| n298
  n134 -->|Serves| n449
  n134 -->|Part of| n55
  n134 -->|Depends on| n111
  n134 -->|Depends on| n41
  n135 -->|Serves| n667
  n135 -->|Part of| n55
  n135 -->|Depends on| n153
  n135 -->|Depends on| n126
  n135 -->|Depends on| n117
  n135 -->|Depends on| n167
  n135 -->|Depends on| n112
  n135 -->|Depends on| n664
  n135 -->|Depends on| n666
  n135 -->|Depends on| n667
  n135 -->|Depends on| n16
  n135 -->|Depends on| n158
  n135 -->|Depends on| n663
  n135 -->|Depends on| n41
  n135 -->|Depends on| n21
  n135 -->|Depends on| n23
  n135 -->|Depends on| n39
  n135 -->|Depends on| n51
  n135 -->|Depends on| n175
  n135 -->|Depends on| n298
  n136 -->|Serves| n449
  n136 -->|Part of| n55
  n136 -->|Depends on| n126
  n136 -->|Depends on| n133
  n137 -->|Serves| n456
  n137 -->|Part of| n55
  n137 -->|Depends on| n148
  n137 -->|Depends on| n126
  n137 -->|Depends on| n185
  n137 -->|Depends on| n579
  n137 -->|Depends on| n23
  n137 -->|Depends on| n39
  n137 -->|Depends on| n51
  n137 -->|Depends on| n298
  n138 -->|Serves| n449
  n138 -->|Part of| n55
  n138 -->|Depends on| n126
  n138 -->|Depends on| n169
  n138 -->|Depends on| n196
  n138 -->|Depends on| n182
  n138 -->|Depends on| n51
  n138 -->|Depends on| n698
  n138 -->|Depends on| n696
  n138 -->|Depends on| n694
  n138 -->|Depends on| n298
  n139 -->|Serves| n456
  n139 -->|Part of| n55
  n139 -->|Depends on| n126
  n139 -->|Depends on| n21
  n139 -->|Depends on| n23
  n139 -->|Depends on| n39
  n139 -->|Depends on| n329
  n139 -->|Depends on| n725
  n139 -->|Depends on| n41
  n139 -->|Depends on| n153
  n139 -->|Depends on| n51
  n139 -->|Depends on| n298
  n140 -->|Serves| n456
  n140 -->|Part of| n55
  n140 -->|Depends on| n126
  n140 -->|Depends on| n148
  n140 -->|Depends on| n189
  n140 -->|Depends on| n21
  n140 -->|Depends on| n23
  n140 -->|Depends on| n147
  n140 -->|Depends on| n40
  n140 -->|Depends on| n201
  n140 -->|Depends on| n39
  n140 -->|Depends on| n33
  n140 -->|Depends on| n322
  n140 -->|Depends on| n146
  n140 -->|Depends on| n726
  n140 -->|Depends on| n51
  n140 -->|Depends on| n298
  n140 -->|Depends on| n41
  n140 -->|Depends on| n153
  n157 -->|Read in| n210
  n157 -->|Depends on| n209
  n157 -->|Depends on| n212
  n158 -->|Serves| n449
  n158 -->|Depends on| n31
  n158 -->|Depends on| n156
  n162 -->|Serves| n456
  n162 -->|Depends on| n306
  n163 -->|Serves| n456
  n163 -->|Applied by| n162
  n163 -->|Applied by| n306
  n165 -->|Serves| n456
  n165 -->|Depends on| n161
  n166 -->|Serves| n456
  n167 -->|Serves| n449
  n167 -->|Depends on| n153
  n167 -->|Depends on| n148
  n167 -->|Depends on| n39
  n167 -->|Depends on| n197
  n167 -->|Depends on| n40
  n167 -->|Depends on| n230
  n167 -->|Depends on| n299
  n167 -->|Depends on| n147
  n167 -->|Depends on| n726
  n168 -->|Serves| n449
  n168 -->|Depends on| n142
  n168 -->|Depends on| n188
  n168 -->|Depends on| n191
  n168 -->|Depends on| n40
  n168 -->|Depends on| n162
  n168 -->|Depends on| n144
  n168 -->|Depends on| n148
  n168 -->|Depends on| n314
  n168 -->|Depends on| n192
  n168 -->|Depends on| n165
  n169 -->|Serves| n449
  n169 -->|Depends on| n148
  n169 -->|Depends on| n454
  n169 -->|Depends on| n170
  n169 -->|Depends on| n191
  n169 -->|Depends on| n188
  n169 -->|Depends on| n31
  n169 -->|Depends on| n21
  n169 -->|Depends on| n39
  n169 -->|Depends on| n193
  n169 -->|Depends on| n189
  n169 -->|Depends on| n179
  n169 -->|Depends on| n197
  n169 -->|Depends on| n230
  n169 -->|Depends on| n40
  n169 -->|Depends on| n299
  n169 -->|Depends on| n177
  n169 -->|Depends on| n49
  n169 -->|Depends on| n175
  n169 -->|Depends on| n28
  n169 -->|Depends on| n147
  n169 -->|Depends on| n180
  n170 -->|Serves| n449
  n171 -->|Serves| n449
  n171 -->|Depends on| n153
  n171 -->|Depends on| n17
  n171 -->|Depends on| n41
  n171 -->|Depends on| n309
  n172 -->|Serves| n449
  n172 -->|Depends on| n173
  n172 -->|Depends on| n153
  n172 -->|Depends on| n148
  n172 -->|Depends on| n51
  n172 -->|Depends on| n691
  n172 -->|Depends on| n17
  n172 -->|Depends on| n54
  n172 -->|Depends on| n447
  n172 -->|Depends on| n26
  n172 -->|Depends on| n21
  n172 -->|Depends on| n39
  n172 -->|Depends on| n189
  n172 -->|Depends on| n171
  n172 -->|Depends on| n174
  n172 -->|Depends on| n346
  n172 -->|Depends on| n589
  n172 -->|Depends on| n301
  n172 -->|Depends on| n306
  n172 -->|Depends on| n302
  n174 -->|Serves| n449
  n174 -->|Depends on| n162
  n174 -->|Depends on| n309
  n175 -->|Serves| n449
  n175 -->|Depends on| n148
  n175 -->|Depends on| n200
  n175 -->|Depends on| n726
  n175 -->|Depends on| n189
  n175 -->|Depends on| n21
  n175 -->|Depends on| n39
  n175 -->|Depends on| n25
  n175 -->|Depends on| n176
  n175 -->|Depends on| n146
  n177 -->|Serves| n449
  n178 -->|Serves| n449
  n179 -->|Serves| n449
  n179 -->|Depends on| n40
  n179 -->|Depends on| n151
  n179 -->|Depends on| n299
  n179 -->|Depends on| n308
  n179 -->|Depends on| n301
  n179 -->|Depends on| n162
  n179 -->|Depends on| n188
  n179 -->|Depends on| n191
  n179 -->|Depends on| n159
  n179 -->|Depends on| n178
  n179 -->|Depends on| n457
  n179 -->|Depends on| n148
  n179 -->|Depends on| n726
  n179 -->|Depends on| n329
  n179 -->|Depends on| n165
  n179 -->|Depends on| n166
  n179 -->|Depends on| n177
  n180 -->|Serves| n449
  n180 -->|Depends on| n454
  n180 -->|Depends on| n299
  n182 -->|Serves| n449
  n182 -->|Depends on| n27
  n182 -->|Depends on| n230
  n182 -->|Depends on| n149
  n182 -->|Depends on| n148
  n182 -->|Depends on| n451
  n182 -->|Depends on| n446
  n182 -->|Depends on| n178
  n182 -->|Depends on| n452
  n182 -->|Depends on| n453
  n182 -->|Depends on| n191
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n189
  n182 -->|Depends on| n179
  n182 -->|Depends on| n40
  n182 -->|Depends on| n147
  n182 -->|Depends on| n307
  n182 -->|Depends on| n238
  n182 -->|Depends on| n232
  n182 -->|Depends on| n234
  n182 -->|Depends on| n242
  n182 -->|Depends on| n251
  n182 -->|Depends on| n248
  n182 -->|Depends on| n246
  n182 -->|Depends on| n236
  n183 -->|Serves| n250
  n183 -->|Applied by| n182
  n183 -->|Applied by| n196
  n184 -->|Serves| n456
  n184 -->|Depends on| n148
  n184 -->|Depends on| n146
  n184 -->|Depends on| n191
  n184 -->|Depends on| n264
  n184 -->|Depends on| n21
  n184 -->|Depends on| n39
  n184 -->|Depends on| n40
  n184 -->|Depends on| n309
  n185 -->|Serves| n456
  n185 -->|Depends on| n146
  n185 -->|Depends on| n188
  n185 -->|Depends on| n40
  n185 -->|Depends on| n309
  n187 -->|Serves| n449
  n187 -->|Depends on| n148
  n187 -->|Depends on| n445
  n187 -->|Depends on| n186
  n187 -->|Depends on| n17
  n187 -->|Depends on| n185
  n187 -->|Depends on| n196
  n187 -->|Depends on| n306
  n188 -->|Serves| n449
  n188 -->|Depends on| n672
  n189 -->|Serves| n449
  n189 -->|Depends on| n148
  n189 -->|Depends on| n21
  n189 -->|Depends on| n39
  n189 -->|Depends on| n201
  n189 -->|Depends on| n40
  n189 -->|Depends on| n147
  n189 -->|Depends on| n726
  n190 -->|Serves| n449
  n190 -->|Implements| n28
  n190 -->|Depends on| n21
  n190 -->|Depends on| n39
  n190 -->|Depends on| n25
  n190 -->|Depends on| n181
  n190 -->|Depends on| n46
  n191 -->|Serves| n449
  n191 -->|Depends on| n151
  n191 -->|Depends on| n253
  n192 -->|Serves| n449
  n192 -->|Depends on| n298
  n193 -->|Serves| n449
  n193 -->|Depends on| n728
  n193 -->|Depends on| n191
  n193 -->|Depends on| n195
  n193 -->|Depends on| n56
  n193 -->|Depends on| n27
  n193 -->|Depends on| n46
  n193 -->|Depends on| n25
  n193 -->|Depends on| n39
  n193 -->|Depends on| n188
  n193 -->|Depends on| n143
  n193 -->|Depends on| n299
  n193 -->|Depends on| n727
  n193 -->|Depends on| n149
  n193 -->|Depends on| n40
  n194 -->|Serves| n456
  n194 -->|Applied by| n179
  n194 -->|Applied by| n196
  n196 -->|Serves| n449
  n196 -->|Depends on| n230
  n196 -->|Depends on| n142
  n196 -->|Depends on| n155
  n196 -->|Depends on| n144
  n196 -->|Depends on| n148
  n196 -->|Depends on| n31
  n196 -->|Depends on| n21
  n196 -->|Depends on| n39
  n196 -->|Depends on| n40
  n196 -->|Depends on| n189
  n196 -->|Depends on| n309
  n196 -->|Depends on| n314
  n196 -->|Depends on| n240
  n196 -->|Depends on| n232
  n196 -->|Depends on| n248
  n196 -->|Depends on| n244
  n197 -->|Serves| n449
  n197 -->|Depends on| n152
  n197 -->|Depends on| n151
  n197 -->|Depends on| n148
  n197 -->|Depends on| n39
  n197 -->|Depends on| n40
  n197 -->|Depends on| n230
  n197 -->|Depends on| n299
  n198 -->|Refines| n449
  n199 -->|Accepts| n198
  n203 -->|Serves| n449
  n203 -->|Depends on| n204
  n203 -->|Depends on| n728
  n203 -->|Depends on| n151
  n203 -->|Depends on| n708
  n203 -->|Depends on| n714
  n203 -->|Depends on| n712
  n203 -->|Depends on| n715
  n203 -->|Depends on| n709
  n203 -->|Depends on| n706
  n203 -->|Depends on| n705
  n203 -->|Depends on| n716
  n203 -->|Depends on| n723
  n203 -->|Depends on| n725
  n203 -->|Depends on| n711
  n205 -->|Read in| n210
  n206 -->|Read in| n210
  n207 -->|Read in| n210
  n208 -->|Read in| n210
  n209 -->|Read in| n210
  n210 -->|Queries written in| n671
  n210 -->|Read by| n680
  n210 -->|Uses| n317
  n211 -->|Read in| n210
  n212 -->|Read in| n210
  n212 -->|Depends on| n208
  n213 -->|Read in| n220
  n214 -->|Read in| n220
  n215 -->|Read in| n220
  n216 -->|Read in| n220
  n216 -->|Depends on| n221
  n216 -->|Depends on| n218
  n217 -->|Read in| n220
  n217 -->|Depends on| n221
  n217 -->|Depends on| n218
  n218 -->|Read in| n220
  n219 -->|Read in| n220
  n219 -->|Depends on| n217
  n220 -->|Queries written in| n671
  n220 -->|Read by| n680
  n220 -->|Uses| n320
  n221 -->|Read in| n220
  n221 -->|Depends on| n215
  n222 -->|Read in| n726
  n223 -->|Read in| n210
  n224 -->|Read in| n210
  n225 -->|Read in| n210
  n227 -->|Read in| n220
  n227 -->|Depends on| n217
  n228 -->|Read in| n210
  n229 -->|Read in| n220
  n229 -->|Depends on| n215
  n230 -->|Serves| n449
  n230 -->|Depends on| n680
  n230 -->|Depends on| n673
  n230 -->|Depends on| n726
  n230 -->|Depends on| n210
  n230 -->|Depends on| n729
  n230 -->|Depends on| n687
  n230 -->|Depends on| n688
  n230 -->|Depends on| n689
  n230 -->|Depends on| n31
  n230 -->|Depends on| n21
  n230 -->|Depends on| n39
  n230 -->|Depends on| n303
  n231 -->|Serves| n449
  n231 -->|Applied by| n230
  n231 -->|Applied by| n346
  n232 -->|Refines| n250
  n233 -->|Accepts| n232
  n234 -->|Refines| n250
  n235 -->|Accepts| n234
  n236 -->|Refines| n250
  n237 -->|Accepts| n236
  n238 -->|Refines| n250
  n239 -->|Accepts| n238
  n240 -->|Refines| n250
  n241 -->|Accepts| n240
  n242 -->|Refines| n250
  n243 -->|Accepts| n242
  n244 -->|Refines| n250
  n245 -->|Accepts| n244
  n246 -->|Refines| n248
  n246 -->|Depends on| n248
  n247 -->|Accepts| n246
  n248 -->|Refines| n250
  n249 -->|Accepts| n248
  n251 -->|Refines| n250
  n252 -->|Accepts| n251
  n253 -->|Refines| n458
  n254 -->|Accepts| n253
  n256 -->|Refines| n458
  n257 -->|Accepts| n256
  n258 -->|Read in| n220
  n258 -->|Depends on| n217
  n259 -->|Defined by| n265
  n259 -->|Depends on| n265
  n260 -->|Defined by| n265
  n260 -->|Depends on| n265
  n261 -->|Defined by| n265
  n261 -->|Depends on| n265
  n262 -->|Defined by| n265
  n262 -->|Depends on| n265
  n262 -->|Depends on| n260
  n263 -->|Defined by| n265
  n263 -->|Depends on| n265
  n263 -->|Depends on| n259
  n264 -->|Defined by| n265
  n264 -->|Depends on| n265
  n264 -->|Depends on| n259
  n266 -->|Read in| n220
  n266 -->|Depends on| n221
  n266 -->|Depends on| n218
  n266 -->|Depends on| n217
  n266 -->|Depends on| n260
  n267 -->|Defined by| n265
  n267 -->|Depends on| n265
  n269 -->|Defined by| n265
  n269 -->|Depends on| n265
  n270 -->|Defined by| n265
  n270 -->|Depends on| n265
  n271 -->|Defined by| n265
  n271 -->|Depends on| n265
  n272 -->|Depends on| n148
  n273 -->|Read in| n220
  n273 -->|Depends on| n217
  n274 -->|Defined by| n265
  n274 -->|Depends on| n265
  n275 -->|Defined by| n268
  n275 -->|Depends on| n268
  n275 -->|Depends on| n278
  n275 -->|Depends on| n277
  n276 -->|Defined by| n268
  n276 -->|Depends on| n268
  n276 -->|Depends on| n265
  n277 -->|Defined by| n268
  n277 -->|Depends on| n268
  n278 -->|Defined by| n268
  n278 -->|Depends on| n268
  n278 -->|Depends on| n265
  n283 -->|Defined by| n289
  n283 -->|Depends on| n289
  n283 -->|Depends on| n295
  n284 -->|Defined by| n289
  n284 -->|Depends on| n289
  n285 -->|Defined by| n289
  n285 -->|Depends on| n289
  n286 -->|Defined by| n289
  n286 -->|Depends on| n289
  n287 -->|Defined by| n289
  n287 -->|Depends on| n289
  n287 -->|Depends on| n286
  n288 -->|Defined by| n289
  n288 -->|Depends on| n289
  n288 -->|Depends on| n286
  n290 -->|Defined by| n289
  n290 -->|Depends on| n289
  n291 -->|Defined by| n289
  n291 -->|Depends on| n289
  n291 -->|Depends on| n290
  n292 -->|Defined by| n289
  n292 -->|Depends on| n289
  n292 -->|Depends on| n290
  n293 -->|Defined by| n289
  n293 -->|Depends on| n289
  n293 -->|Depends on| n288
  n294 -->|Defined by| n289
  n294 -->|Depends on| n289
  n294 -->|Depends on| n295
  n295 -->|Defined by| n289
  n295 -->|Depends on| n289
  n296 -->|Defined by| n289
  n296 -->|Depends on| n289
  n296 -->|Depends on| n290
  n297 -->|Written in| n306
  n297 -->|Depends on| n306
  n298 -->|Written in| n306
  n298 -->|Depends on| n306
  n299 -->|Written in| n306
  n299 -->|Depends on| n306
  n299 -->|Depends on| n308
  n300 -->|Serves| n456
  n300 -->|Applied by| n299
  n300 -->|Applied by| n314
  n300 -->|Applied by| n302
  n300 -->|Applied by| n298
  n300 -->|Applied by| n313
  n300 -->|Applied by| n297
  n300 -->|Applied by| n310
  n300 -->|Applied by| n308
  n301 -->|Serves| n456
  n301 -->|Depends on| n306
  n302 -->|Written in| n306
  n302 -->|Depends on| n306
  n302 -->|Depends on| n308
  n303 -->|Written in| n306
  n304 -->|Written in| n306
  n305 -->|Written in| n306
  n307 -->|Written in| n306
  n308 -->|Serves| n456
  n308 -->|Depends on| n306
  n309 -->|Written in| n306
  n310 -->|Written in| n306
  n310 -->|Depends on| n306
  n311 -->|Written in| n306
  n312 -->|Written in| n306
  n313 -->|Written in| n306
  n313 -->|Depends on| n306
  n314 -->|Written in| n306
  n314 -->|Depends on| n306
  n315 -->|Written in| n306
  n316 -->|Serves| n456
  n322 -->|Serves| n456
  n324 -->|Serves| n456
  n325 -->|Serves| n456
  n329 -->|Serves| n456
  n331 -->|Defined by| n360
  n331 -->|Read in| n220
  n331 -->|Depends on| n360
  n331 -->|Depends on| n349
  n331 -->|Depends on| n217
  n332 -->|Defined by| n360
  n332 -->|Read in| n220
  n332 -->|Depends on| n360
  n332 -->|Depends on| n153
  n332 -->|Depends on| n339
  n332 -->|Depends on| n216
  n332 -->|Depends on| n217
  n333 -->|Defined by| n360
  n333 -->|Read in| n220
  n333 -->|Depends on| n360
  n333 -->|Depends on| n349
  n333 -->|Depends on| n217
  n334 -->|Defined by| n360
  n334 -->|Read in| n220
  n334 -->|Depends on| n360
  n334 -->|Depends on| n349
  n334 -->|Depends on| n216
  n334 -->|Depends on| n217
  n335 -->|Defined by| n360
  n335 -->|Read in| n220
  n335 -->|Depends on| n360
  n335 -->|Depends on| n349
  n335 -->|Depends on| n216
  n335 -->|Depends on| n217
  n335 -->|Depends on| n353
  n336 -->|Defined by| n360
  n336 -->|Read in| n220
  n336 -->|Depends on| n360
  n336 -->|Depends on| n349
  n336 -->|Depends on| n216
  n336 -->|Depends on| n217
  n337 -->|Defined by| n360
  n337 -->|Read in| n220
  n337 -->|Depends on| n360
  n337 -->|Depends on| n282
  n337 -->|Depends on| n1
  n337 -->|Depends on| n216
  n337 -->|Depends on| n217
  n337 -->|Depends on| n229
  n337 -->|Depends on| n226
  n338 -->|Read in| n220
  n338 -->|Depends on| n221
  n339 -->|Defined by| n360
  n339 -->|Read in| n220
  n339 -->|Depends on| n360
  n339 -->|Depends on| n7
  n339 -->|Depends on| n216
  n339 -->|Depends on| n217
  n339 -->|Depends on| n229
  n339 -->|Depends on| n211
  n341 -->|Defined by| n360
  n341 -->|Read in| n220
  n341 -->|Depends on| n360
  n341 -->|Depends on| n349
  n341 -->|Depends on| n216
  n341 -->|Depends on| n217
  n341 -->|Depends on| n331
  n341 -->|Depends on| n335
  n342 -->|Defined by| n360
  n342 -->|Read in| n210
  n342 -->|Depends on| n360
  n342 -->|Depends on| n224
  n342 -->|Depends on| n223
  n343 -->|Uses the variables of| n9
  n343 -->|Uses the variables of| n12
  n343 -->|Uses the variables of| n6
  n343 -->|Styles| n346
  n344 -->|Defined by| n360
  n344 -->|Read in| n220
  n344 -->|Depends on| n360
  n344 -->|Depends on| n349
  n344 -->|Depends on| n217
  n346 -->|Serves| n449
  n346 -->|Depends on| n347
  n346 -->|Depends on| n356
  n346 -->|Depends on| n7
  n346 -->|Depends on| n13
  n346 -->|Depends on| n4
  n346 -->|Depends on| n9
  n346 -->|Depends on| n8
  n346 -->|Depends on| n12
  n346 -->|Depends on| n5
  n346 -->|Depends on| n10
  n346 -->|Depends on| n3
  n346 -->|Depends on| n6
  n346 -->|Depends on| n45
  n346 -->|Depends on| n21
  n346 -->|Depends on| n16
  n346 -->|Depends on| n19
  n346 -->|Depends on| n354
  n346 -->|Depends on| n359
  n346 -->|Depends on| n357
  n346 -->|Depends on| n342
  n346 -->|Depends on| n338
  n346 -->|Depends on| n350
  n346 -->|Depends on| n348
  n346 -->|Depends on| n209
  n346 -->|Depends on| n208
  n346 -->|Depends on| n309
  n346 -->|Depends on| n306
  n346 -->|Depends on| n680
  n346 -->|Depends on| n220
  n346 -->|Depends on| n210
  n348 -->|Defined by| n360
  n348 -->|Read in| n220
  n348 -->|Depends on| n360
  n348 -->|Depends on| n213
  n348 -->|Depends on| n221
  n348 -->|Depends on| n218
  n348 -->|Depends on| n217
  n350 -->|Defined by| n360
  n350 -->|Read in| n220
  n350 -->|Depends on| n360
  n350 -->|Depends on| n227
  n350 -->|Depends on| n222
  n350 -->|Depends on| n713
  n350 -->|Depends on| n702
  n351 -->|Uses the variables of| n7
  n351 -->|Uses the variables of| n13
  n351 -->|Uses the variables of| n9
  n351 -->|Uses the variables of| n8
  n351 -->|Uses the variables of| n12
  n351 -->|Uses the variables of| n5
  n351 -->|Uses the variables of| n10
  n351 -->|Uses the variables of| n3
  n351 -->|Uses the variables of| n6
  n351 -->|Styles| n346
  n353 -->|Defined by| n360
  n353 -->|Read in| n220
  n353 -->|Depends on| n360
  n353 -->|Depends on| n352
  n353 -->|Depends on| n349
  n353 -->|Depends on| n216
  n353 -->|Depends on| n217
  n354 -->|Defined by| n360
  n354 -->|Read in| n220
  n354 -->|Depends on| n360
  n354 -->|Depends on| n216
  n354 -->|Depends on| n355
  n354 -->|Depends on| n341
  n354 -->|Depends on| n337
  n355 -->|Defined by| n360
  n355 -->|Read in| n220
  n355 -->|Depends on| n360
  n355 -->|Depends on| n216
  n355 -->|Depends on| n332
  n355 -->|Depends on| n333
  n355 -->|Depends on| n334
  n355 -->|Depends on| n344
  n355 -->|Depends on| n336
  n357 -->|Defined by| n360
  n357 -->|Read in| n210
  n357 -->|Depends on| n360
  n357 -->|Depends on| n209
  n357 -->|Depends on| n208
  n357 -->|Depends on| n211
  n357 -->|Depends on| n207
  n358 -->|Serves| n456
  n358 -->|Applied by| n351
  n358 -->|Applied by| n343
  n358 -->|Applied by| n359
  n358 -->|Applied by| n342
  n358 -->|Applied by| n346
  n359 -->|Defined by| n360
  n359 -->|Read in| n210
  n359 -->|Depends on| n360
  n359 -->|Depends on| n209
  n359 -->|Depends on| n224
  n359 -->|Depends on| n223
  n359 -->|Depends on| n206
  n359 -->|Depends on| n225
  n359 -->|Depends on| n212
  n359 -->|Depends on| n208
  n361 -->|Chooses| n374
  n361 -->|In| n30
  n361 -->|In| n53
  n361 -->|Serves| n450
  n362 -->|Chooses| n401
  n362 -->|In| n30
  n362 -->|In| n53
  n362 -->|Serves| n450
  n363 -->|Implements| n21
  n364 -->|Implements| n22
  n365 -->|Implements| n23
  n367 -->|Chooses| n412
  n367 -->|Chooses| n400
  n367 -->|In| n30
  n367 -->|In| n53
  n367 -->|Serves| n450
  n368 -->|Implements| n16
  n368 -->|Uses| n318
  n369 -->|Chooses| n368
  n369 -->|In| n30
  n369 -->|In| n53
  n369 -->|Serves| n450
  n370 -->|Implements| n41
  n370 -->|Implements| n43
  n370 -->|Implements| n42
  n370 -->|Depends on| n371
  n370 -->|Depends on| n39
  n370 -->|Depends on| n153
  n370 -->|Depends on| n311
  n372 -->|Chooses| n379
  n372 -->|Chooses| n394
  n372 -->|In| n53
  n372 -->|Serves| n450
  n373 -->|Chooses| n382
  n373 -->|Chooses| n408
  n373 -->|Chooses| n395
  n373 -->|Chooses| n370
  n373 -->|Chooses| n380
  n373 -->|In| n53
  n373 -->|Serves| n450
  n374 -->|Implements| n14
  n374 -->|Depends on| n21
  n374 -->|Depends on| n23
  n374 -->|Depends on| n728
  n374 -->|Depends on| n708
  n374 -->|Depends on| n709
  n374 -->|Depends on| n706
  n374 -->|Depends on| n705
  n374 -->|Depends on| n717
  n374 -->|Depends on| n723
  n374 -->|Depends on| n725
  n374 -->|Depends on| n711
  n374 -->|Depends on| n715
  n376 -->|Depends on| n22
  n376 -->|Depends on| n23
  n376 -->|Depends on| n21
  n376 -->|Depends on| n39
  n377 -->|Depends on| n22
  n377 -->|Depends on| n23
  n377 -->|Depends on| n21
  n377 -->|Depends on| n39
  n377 -->|Depends on| n378
  n377 -->|Depends on| n148
  n379 -->|Implements| n21
  n379 -->|Implements| n23
  n379 -->|Implements| n22
  n379 -->|Implements| n57
  n379 -->|Depends on| n39
  n379 -->|Depends on| n381
  n379 -->|Depends on| n311
  n380 -->|Implements| n26
  n380 -->|Implements| n47
  n380 -->|Depends on| n311
  n382 -->|Implements| n51
  n382 -->|Implements| n52
  n382 -->|Depends on| n375
  n382 -->|Depends on| n311
  n383 -->|Implements| n18
  n383 -->|Depends on| n51
  n383 -->|Depends on| n153
  n383 -->|Depends on| n311
  n384 -->|Implements| n19
  n384 -->|Depends on| n345
  n385 -->|Implements| n25
  n386 -->|Implements| n26
  n387 -->|Chooses| n363
  n387 -->|Chooses| n365
  n387 -->|Chooses| n364
  n387 -->|Chooses| n390
  n387 -->|Chooses| n391
  n387 -->|Chooses| n392
  n387 -->|Chooses| n409
  n387 -->|Chooses| n397
  n387 -->|Chooses| n396
  n387 -->|Chooses| n386
  n387 -->|In| n30
  n387 -->|Serves| n450
  n388 -->|Implements| n39
  n389 -->|Chooses| n388
  n389 -->|Chooses| n385
  n389 -->|Chooses| n384
  n389 -->|Chooses| n393
  n389 -->|Chooses| n383
  n389 -->|Chooses| n402
  n389 -->|In| n30
  n389 -->|In| n53
  n389 -->|Serves| n450
  n390 -->|Implements| n41
  n390 -->|Depends on| n416
  n391 -->|Implements| n43
  n391 -->|Depends on| n416
  n392 -->|Implements| n51
  n392 -->|Depends on| n311
  n393 -->|Implements| n54
  n394 -->|Implements| n33
  n394 -->|Depends on| n23
  n394 -->|Depends on| n39
  n394 -->|Depends on| n148
  n394 -->|Depends on| n322
  n395 -->|Implements| n34
  n396 -->|Implements| n33
  n397 -->|Implements| n34
  n397 -->|Depends on| n162
  n398 -->|Depends on| n376
  n398 -->|Depends on| n377
  n399 -->|Chooses| n398
  n399 -->|In| n30
  n399 -->|In| n53
  n399 -->|Serves| n450
  n400 -->|Implements| n45
  n400 -->|Depends on| n366
  n400 -->|Depends on| n148
  n400 -->|Depends on| n200
  n400 -->|Depends on| n726
  n401 -->|Implements| n56
  n401 -->|Uses| n328
  n401 -->|Uses| n321
  n402 -->|Implements| n27
  n403 -->|Chooses| n190
  n403 -->|In| n30
  n403 -->|In| n53
  n403 -->|Serves| n450
  n404 -->|Implements| n46
  n405 -->|Chooses| n404
  n405 -->|In| n53
  n405 -->|Serves| n450
  n406 -->|Chooses| n407
  n406 -->|In| n30
  n406 -->|Serves| n450
  n407 -->|Implements| n46
  n407 -->|Depends on| n148
  n407 -->|Depends on| n366
  n407 -->|Depends on| n175
  n407 -->|Depends on| n181
  n408 -->|Implements| n17
  n408 -->|Depends on| n410
  n408 -->|Depends on| n411
  n409 -->|Implements| n17
  n409 -->|Depends on| n154
  n412 -->|Implements| n40
  n412 -->|Depends on| n366
  n413 -->|Chooses| n417
  n413 -->|In| n30
  n413 -->|In| n53
  n413 -->|Serves| n450
  n414 -->|Implements| n31
  n414 -->|Uses| n326
  n414 -->|Depends on| n40
  n414 -->|Depends on| n147
  n414 -->|Depends on| n726
  n415 -->|Chooses| n414
  n415 -->|In| n30
  n415 -->|In| n53
  n415 -->|Serves| n450
  n417 -->|Implements| n50
  n417 -->|Uses| n330
  n417 -->|Depends on| n311
  n418 -->|Serves| n449
  n418 -->|Applied by| n169
  n418 -->|Applied by| n124
  n419 -->|Serves| n456
  n419 -->|Applied by| n169
  n419 -->|Applied by| n182
  n420 -->|Serves| n456
  n420 -->|Applied by| n177
  n420 -->|Applied by| n179
  n421 -->|Serves| n449
  n421 -->|Applied by| n117
  n421 -->|Applied by| n157
  n422 -->|Serves| n449
  n422 -->|Applied by| n55
  n422 -->|Applied by| n44
  n422 -->|Applied by| n32
  n422 -->|Applied by| n29
  n423 -->|Serves| n456
  n423 -->|Applied by| n169
  n423 -->|Applied by| n680
  n424 -->|Serves| n449
  n424 -->|Applied by| n108
  n424 -->|Applied by| n198
  n424 -->|Applied by| n602
  n424 -->|Applied by| n608
  n425 -->|Serves| n449
  n425 -->|Applied by| n193
  n425 -->|Applied by| n56
  n425 -->|Applied by| n726
  n425 -->|Applied by| n143
  n426 -->|Serves| n449
  n426 -->|Applied by| n169
  n426 -->|Applied by| n114
  n427 -->|Serves| n456
  n427 -->|Applied by| n184
  n427 -->|Applied by| n128
  n428 -->|Serves| n456
  n428 -->|Applied by| n169
  n428 -->|Applied by| n168
  n428 -->|Applied by| n187
  n428 -->|Applied by| n193
  n428 -->|Applied by| n182
  n429 -->|Serves| n458
  n429 -->|Applied by| n189
  n429 -->|Applied by| n169
  n429 -->|Applied by| n168
  n429 -->|Applied by| n191
  n429 -->|Applied by| n253
  n429 -->|Applied by| n108
  n430 -->|Serves| n458
  n430 -->|Applied by| n189
  n430 -->|Applied by| n182
  n430 -->|Applied by| n140
  n430 -->|Applied by| n132
  n430 -->|Applied by| n256
  n430 -->|Applied by| n255
  n431 -->|Serves| n456
  n431 -->|Applied by| n673
  n431 -->|Applied by| n230
  n431 -->|Applied by| n169
  n431 -->|Applied by| n29
  n431 -->|Applied by| n32
  n432 -->|Serves| n449
  n432 -->|Applied by| n182
  n432 -->|Applied by| n169
  n432 -->|Applied by| n189
  n433 -->|Serves| n456
  n433 -->|Applied by| n169
  n433 -->|Applied by| n680
  n434 -->|Serves| n456
  n434 -->|Applied by| n114
  n434 -->|Applied by| n137
  n434 -->|Applied by| n185
  n434 -->|Applied by| n346
  n434 -->|Applied by| n167
  n435 -->|Serves| n449
  n435 -->|Applied by| n168
  n435 -->|Applied by| n179
  n435 -->|Applied by| n196
  n435 -->|Applied by| n44
  n436 -->|Serves| n458
  n436 -->|Applied by| n189
  n436 -->|Applied by| n140
  n436 -->|Applied by| n398
  n436 -->|Applied by| n108
  n436 -->|Applied by| n182
  n436 -->|Applied by| n124
  n437 -->|Serves| n449
  n437 -->|Applied by| n40
  n437 -->|Applied by| n149
  n437 -->|Applied by| n145
  n437 -->|Applied by| n182
  n438 -->|Serves| n449
  n438 -->|Applied by| n135
  n438 -->|Applied by| n129
  n438 -->|Applied by| n664
  n438 -->|Applied by| n669
  n438 -->|Applied by| n667
  n438 -->|Applied by| n637
  n438 -->|Applied by| n619
  n439 -->|Serves| n450
  n439 -->|Applied by| n389
  n439 -->|Applied by| n387
  n439 -->|Applied by| n373
  n439 -->|Applied by| n369
  n439 -->|Applied by| n413
  n439 -->|Applied by| n415
  n439 -->|Applied by| n362
  n439 -->|Applied by| n367
  n439 -->|Applied by| n576
  n439 -->|Applied by| n577
  n439 -->|Applied by| n596
  n439 -->|Applied by| n595
  n439 -->|Applied by| n588
  n439 -->|Applied by| n587
  n440 -->|Serves| n449
  n440 -->|Applied by| n108
  n440 -->|Applied by| n198
  n440 -->|Applied by| n603
  n440 -->|Applied by| n602
  n440 -->|Applied by| n611
  n441 -->|Serves| n449
  n441 -->|Applied by| n169
  n441 -->|Applied by| n197
  n442 -->|Serves| n449
  n442 -->|Applied by| n182
  n442 -->|Applied by| n611
  n443 -->|Serves| n449
  n443 -->|Applied by| n182
  n443 -->|Applied by| n196
  n443 -->|Applied by| n189
  n444 -->|Serves| n456
  n444 -->|Applied by| n680
  n444 -->|Applied by| n673
  n444 -->|Applied by| n299
  n444 -->|Applied by| n303
  n444 -->|Applied by| n307
  n444 -->|Applied by| n314
  n444 -->|Applied by| n309
  n444 -->|Applied by| n302
  n444 -->|Applied by| n298
  n444 -->|Applied by| n297
  n444 -->|Applied by| n312
  n444 -->|Applied by| n311
  n444 -->|Applied by| n313
  n454 -->|Refines| n449
  n455 -->|Accepts| n454
  n459 -->|Releases| n55
  n460 -->|Releases| n55
  n460 -->|Assembled by| n564
  n461 -->|Releases| n55
  n461 -->|Assembled by| n574
  n462 -->|Releases| n55
  n462 -->|Assembled by| n461
  n463 -->|Releases| n55
  n463 -->|Assembled by| n462
  n464 -->|Releases| n55
  n464 -->|Assembled by| n463
  n465 -->|Releases| n55
  n465 -->|Assembled by| n464
  n466 -->|Releases| n55
  n466 -->|Assembled by| n465
  n467 -->|Releases| n55
  n467 -->|Assembled by| n466
  n468 -->|Releases| n55
  n468 -->|Assembled by| n467
  n469 -->|Releases| n55
  n469 -->|Assembled by| n468
  n470 -->|Releases| n55
  n470 -->|Assembled by| n469
  n471 -->|Releases| n55
  n471 -->|Assembled by| n460
  n472 -->|Releases| n55
  n472 -->|Assembled by| n470
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
  n478 -->|Assembled by| n477
  n479 -->|Releases| n55
  n479 -->|Assembled by| n471
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
  n487 -->|Assembled by| n459
  n488 -->|Releases| n55
  n488 -->|Assembled by| n486
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
  n496 -->|Assembled by| n495
  n497 -->|Releases| n55
  n497 -->|Assembled by| n496
  n498 -->|Releases| n55
  n498 -->|Assembled by| n487
  n499 -->|Releases| n55
  n499 -->|Assembled by| n497
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
  n507 -->|Assembled by| n506
  n508 -->|Releases| n55
  n508 -->|Assembled by| n507
  n509 -->|Releases| n55
  n509 -->|Assembled by| n498
  n510 -->|Releases| n55
  n510 -->|Assembled by| n508
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
  n518 -->|Assembled by| n517
  n519 -->|Releases| n55
  n519 -->|Assembled by| n518
  n520 -->|Releases| n55
  n520 -->|Assembled by| n509
  n521 -->|Releases| n55
  n521 -->|Assembled by| n519
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
  n529 -->|Assembled by| n528
  n530 -->|Releases| n55
  n530 -->|Assembled by| n529
  n531 -->|Releases| n55
  n531 -->|Assembled by| n520
  n532 -->|Releases| n55
  n532 -->|Assembled by| n530
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
  n540 -->|Assembled by| n539
  n541 -->|Releases| n55
  n541 -->|Assembled by| n540
  n542 -->|Releases| n55
  n542 -->|Assembled by| n531
  n543 -->|Releases| n55
  n543 -->|Assembled by| n541
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
  n551 -->|Assembled by| n550
  n552 -->|Releases| n55
  n552 -->|Assembled by| n551
  n553 -->|Releases| n55
  n553 -->|Assembled by| n542
  n554 -->|Releases| n55
  n554 -->|Assembled by| n552
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
  n562 -->|Assembled by| n561
  n563 -->|Releases| n55
  n563 -->|Assembled by| n562
  n564 -->|Releases| n55
  n564 -->|Assembled by| n553
  n565 -->|Releases| n55
  n565 -->|Assembled by| n563
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
  n573 -->|Assembled by| n572
  n574 -->|Releases| n55
  n574 -->|Assembled by| n573
  n575 -->|Serves| n449
  n575 -->|Depends on| n151
  n575 -->|Depends on| n592
  n575 -->|Depends on| n301
  n575 -->|Depends on| n308
  n575 -->|Depends on| n312
  n575 -->|Depends on| n165
  n576 -->|Chooses| n582
  n576 -->|In| n30
  n576 -->|In| n53
  n576 -->|Serves| n450
  n577 -->|Chooses| n584
  n577 -->|In| n30
  n577 -->|In| n53
  n577 -->|Serves| n450
  n579 -->|Serves| n449
  n579 -->|Depends on| n575
  n579 -->|Depends on| n580
  n579 -->|Depends on| n312
  n581 -->|Serves| n449
  n581 -->|Implements| n590
  n581 -->|Depends on| n586
  n581 -->|Depends on| n280
  n581 -->|Depends on| n360
  n581 -->|Depends on| n217
  n581 -->|Depends on| n219
  n581 -->|Depends on| n214
  n581 -->|Depends on| n162
  n581 -->|Depends on| n592
  n581 -->|Depends on| n312
  n582 -->|Serves| n449
  n582 -->|Implements| n580
  n582 -->|Depends on| n578
  n582 -->|Depends on| n164
  n582 -->|Depends on| n162
  n582 -->|Depends on| n262
  n582 -->|Depends on| n269
  n582 -->|Depends on| n271
  n582 -->|Depends on| n261
  n582 -->|Depends on| n263
  n582 -->|Depends on| n267
  n582 -->|Depends on| n274
  n582 -->|Depends on| n264
  n582 -->|Depends on| n270
  n582 -->|Depends on| n272
  n582 -->|Depends on| n276
  n582 -->|Depends on| n275
  n582 -->|Depends on| n258
  n582 -->|Depends on| n266
  n582 -->|Depends on| n312
  n583 -->|Serves| n449
  n583 -->|Applied by| n579
  n583 -->|Applied by| n597
  n583 -->|Applied by| n589
  n583 -->|Applied by| n575
  n583 -->|Applied by| n44
  n584 -->|Serves| n449
  n584 -->|Implements| n578
  n584 -->|Depends on| n289
  n584 -->|Depends on| n160
  n584 -->|Depends on| n7
  n584 -->|Depends on| n273
  n584 -->|Depends on| n284
  n584 -->|Depends on| n292
  n584 -->|Depends on| n296
  n584 -->|Depends on| n291
  n584 -->|Depends on| n283
  n584 -->|Depends on| n294
  n584 -->|Depends on| n285
  n584 -->|Depends on| n287
  n584 -->|Depends on| n288
  n584 -->|Depends on| n293
  n584 -->|Depends on| n301
  n584 -->|Depends on| n312
  n585 -->|Serves| n450
  n585 -->|Applied by| n579
  n585 -->|Applied by| n597
  n585 -->|Applied by| n589
  n585 -->|Applied by| n576
  n585 -->|Applied by| n577
  n585 -->|Applied by| n596
  n585 -->|Applied by| n595
  n585 -->|Applied by| n588
  n585 -->|Applied by| n587
  n587 -->|Chooses| n593
  n587 -->|In| n30
  n587 -->|In| n53
  n587 -->|Serves| n450
  n588 -->|Chooses| n581
  n588 -->|In| n30
  n588 -->|In| n53
  n588 -->|Serves| n450
  n589 -->|Serves| n449
  n589 -->|Depends on| n575
  n589 -->|Depends on| n590
  n589 -->|Depends on| n312
  n591 -->|Serves| n449
  n591 -->|Implements| n598
  n591 -->|Depends on| n594
  n591 -->|Depends on| n698
  n591 -->|Depends on| n696
  n591 -->|Depends on| n162
  n591 -->|Depends on| n694
  n591 -->|Depends on| n692
  n591 -->|Depends on| n693
  n591 -->|Depends on| n691
  n591 -->|Depends on| n697
  n591 -->|Depends on| n312
  n593 -->|Serves| n449
  n593 -->|Implements| n586
  n593 -->|Depends on| n280
  n593 -->|Depends on| n282
  n593 -->|Depends on| n360
  n593 -->|Depends on| n1
  n593 -->|Depends on| n11
  n593 -->|Depends on| n2
  n593 -->|Depends on| n217
  n593 -->|Depends on| n229
  n593 -->|Depends on| n226
  n593 -->|Depends on| n208
  n593 -->|Depends on| n214
  n593 -->|Depends on| n575
  n593 -->|Depends on| n301
  n593 -->|Depends on| n310
  n593 -->|Depends on| n312
  n593 -->|Depends on| n162
  n595 -->|Chooses| n599
  n595 -->|In| n30
  n595 -->|In| n53
  n595 -->|Serves| n450
  n596 -->|Chooses| n591
  n596 -->|In| n30
  n596 -->|In| n53
  n596 -->|Serves| n450
  n597 -->|Serves| n449
  n597 -->|Depends on| n575
  n597 -->|Depends on| n598
  n597 -->|Depends on| n312
  n599 -->|Serves| n449
  n599 -->|Implements| n594
  n599 -->|Depends on| n575
  n599 -->|Depends on| n696
  n599 -->|Depends on| n162
  n599 -->|Depends on| n694
  n599 -->|Depends on| n692
  n599 -->|Depends on| n699
  n599 -->|Depends on| n695
  n599 -->|Depends on| n301
  n599 -->|Depends on| n312
  n600 -->|Verifies| n169
  n600 -->|Verifies| n197
  n600 -->|Verifies| n167
  n600 -->|Verifies| n729
  n600 -->|In| n53
  n600 -->|Depends on| n169
  n600 -->|Depends on| n41
  n600 -->|Depends on| n167
  n600 -->|Depends on| n145
  n600 -->|Depends on| n601
  n600 -->|Depends on| n313
  n602 -->|Verifies| n114
  n602 -->|Verifies| n126
  n602 -->|Verifies| n168
  n602 -->|Verifies| n196
  n602 -->|Verifies| n579
  n602 -->|Verifies| n575
  n602 -->|Verifies| n582
  n602 -->|Verifies| n584
  n602 -->|Verifies| n185
  n602 -->|Verifies| n184
  n602 -->|Verifies| n379
  n602 -->|Verifies| n382
  n602 -->|Verifies| n408
  n602 -->|In| n53
  n602 -->|Depends on| n114
  n602 -->|Depends on| n608
  n602 -->|Depends on| n57
  n602 -->|Depends on| n52
  n602 -->|Depends on| n148
  n602 -->|Depends on| n21
  n602 -->|Depends on| n39
  n602 -->|Depends on| n41
  n602 -->|Depends on| n153
  n602 -->|Depends on| n298
  n602 -->|Depends on| n313
  n603 -->|Verifies| n169
  n603 -->|Verifies| n189
  n603 -->|Verifies| n193
  n603 -->|Verifies| n197
  n603 -->|Verifies| n179
  n603 -->|Verifies| n401
  n603 -->|Verifies| n414
  n603 -->|Verifies| n412
  n603 -->|Verifies| n379
  n603 -->|Verifies| n388
  n603 -->|Verifies| n370
  n603 -->|Verifies| n402
  n603 -->|In| n53
  n603 -->|Depends on| n169
  n603 -->|Depends on| n41
  n603 -->|Depends on| n17
  n603 -->|Depends on| n607
  n603 -->|Depends on| n313
  n604 -->|Verifies| n301
  n604 -->|Verifies| n308
  n604 -->|Verifies| n165
  n604 -->|Verifies| n166
  n604 -->|Verifies| n162
  n604 -->|Verifies| n329
  n604 -->|In| n53
  n604 -->|Depends on| n301
  n604 -->|Depends on| n308
  n604 -->|Depends on| n165
  n604 -->|Depends on| n166
  n604 -->|Depends on| n162
  n604 -->|Depends on| n306
  n604 -->|Depends on| n329
  n604 -->|Depends on| n605
  n604 -->|Depends on| n313
  n606 -->|Verifies| n170
  n606 -->|Verifies| n178
  n606 -->|Verifies| n177
  n606 -->|Verifies| n191
  n606 -->|Verifies| n188
  n606 -->|In| n53
  n606 -->|Depends on| n170
  n606 -->|Depends on| n178
  n606 -->|Depends on| n177
  n606 -->|Depends on| n191
  n606 -->|Depends on| n188
  n606 -->|Depends on| n612
  n606 -->|Depends on| n313
  n610 -->|Verifies| n180
  n610 -->|In| n53
  n610 -->|Depends on| n180
  n610 -->|Depends on| n609
  n610 -->|Depends on| n313
  n611 -->|Verifies| n182
  n611 -->|In| n53
  n611 -->|Depends on| n182
  n611 -->|Depends on| n169
  n611 -->|Depends on| n41
  n611 -->|Depends on| n17
  n611 -->|Depends on| n313
  n613 -->|Serves| n449
  n613 -->|Part of| n661
  n613 -->|Depends on| n660
  n613 -->|Depends on| n634
  n613 -->|Depends on| n656
  n614 -->|Serves| n449
  n615 -->|Serves| n449
  n616 -->|In| n48
  n617 -->|In| n30
  n618 -->|Serves| n449
  n619 -->|Checks| n623
  n619 -->|Run by| n138
  n619 -->|Signed by| n635
  n620 -->|Checks| n623
  n620 -->|Run by| n119
  n620 -->|Signed by| n635
  n620 -->|Verifies| n363
  n620 -->|Verifies| n365
  n620 -->|Verifies| n364
  n620 -->|Verifies| n390
  n620 -->|Verifies| n391
  n620 -->|Verifies| n392
  n620 -->|Verifies| n409
  n620 -->|Verifies| n397
  n620 -->|Verifies| n396
  n620 -->|Verifies| n386
  n620 -->|Verifies| n407
  n621 -->|Chooses| n642
  n621 -->|Chooses| n641
  n621 -->|In| n30
  n621 -->|In| n48
  n621 -->|Serves| n449
  n622 -->|Serves| n449
  n623 -->|Produced by| n55
  n624 -->|Serves| n449
  n625 -->|Serves| n449
  n626 -->|Its obligations| n625
  n626 -->|Its obligations| n633
  n626 -->|Its obligations| n614
  n626 -->|Its obligations| n618
  n626 -->|Its obligations| n615
  n626 -->|Its obligations| n624
  n626 -->|Its obligations| n622
  n627 -->|Produced by| n122
  n627 -->|Carries| n36
  n629 -->|Checks| n627
  n629 -->|Run by| n639
  n629 -->|Signed by| n635
  n629 -->|Verifies| n64
  n629 -->|Verifies| n63
  n629 -->|Verifies| n62
  n629 -->|Verifies| n61
  n629 -->|Verifies| n60
  n629 -->|Verifies| n58
  n629 -->|Verifies| n59
  n631 -->|Serves| n449
  n631 -->|Depends on| n349
  n631 -->|Depends on| n280
  n631 -->|Depends on| n206
  n632 -->|Ships| n659
  n632 -->|Programs assembled for| n30
  n632 -->|Follows the policy| n636
  n633 -->|Serves| n449
  n636 -->|Its obligations| n625
  n636 -->|Its obligations| n615
  n637 -->|Ships| n623
  n637 -->|Ships| n644
  n637 -->|Ships| n627
  n637 -->|Deployed by| n108
  n637 -->|Programs assembled for| n30
  n637 -->|Follows the policy| n626
  n638 -->|Verifies| n639
  n638 -->|Verifies| n631
  n638 -->|In| n53
  n638 -->|Depends on| n639
  n638 -->|Depends on| n627
  n638 -->|Depends on| n631
  n638 -->|Depends on| n656
  n638 -->|Depends on| n630
  n638 -->|Depends on| n313
  n639 -->|Serves| n449
  n639 -->|Part of| n661
  n639 -->|Depends on| n627
  n639 -->|Depends on| n306
  n639 -->|Depends on| n631
  n639 -->|Depends on| n628
  n639 -->|Depends on| n656
  n640 -->|Verifies| n642
  n640 -->|Verifies| n641
  n640 -->|In| n53
  n640 -->|Depends on| n660
  n640 -->|Depends on| n634
  n640 -->|Depends on| n648
  n640 -->|Depends on| n148
  n640 -->|Depends on| n153
  n640 -->|Depends on| n410
  n640 -->|Depends on| n645
  n640 -->|Depends on| n313
  n641 -->|Serves| n449
  n641 -->|Depends on| n148
  n641 -->|Depends on| n153
  n641 -->|Depends on| n154
  n641 -->|Depends on| n410
  n641 -->|Depends on| n648
  n642 -->|Serves| n449
  n642 -->|Depends on| n660
  n642 -->|Depends on| n634
  n642 -->|Depends on| n645
  n642 -->|Depends on| n148
  n642 -->|Depends on| n648
  n643 -->|Chooses| n642
  n643 -->|Chooses| n641
  n643 -->|In| n53
  n644 -->|Produced by| n36
  n644 -->|Assembled for| n15
  n646 -->|Runs elsewhere| n632
  n646 -->|Its writer's settings| n645
  n647 -->|Serves| n449
  n647 -->|Part of| n661
  n647 -->|Depends on| n660
  n647 -->|Depends on| n634
  n647 -->|Depends on| n656
  n649 -->|Run by| n647
  n649 -->|Signed by| n635
  n651 -->|Requires| n649
  n651 -->|Deployed by| n613
  n651 -->|Programs assembled for| n30
  n651 -->|Follows the policy| n657
  n652 -->|In| n30
  n652 -->|In| n48
  n653 -->|Ships| n646
  n654 -->|In| n53
  n655 -->|In| n30
  n655 -->|In| n48
  n656 -->|Written in| n306
  n657 -->|Its obligations| n625
  n657 -->|Its obligations| n615
  n657 -->|Its obligations| n622
  n658 -->|Verifies| n647
  n658 -->|Verifies| n613
  n658 -->|In| n53
  n658 -->|Depends on| n647
  n658 -->|Depends on| n613
  n658 -->|Depends on| n660
  n658 -->|Depends on| n634
  n658 -->|Depends on| n650
  n658 -->|Depends on| n656
  n658 -->|Depends on| n313
  n661 -->|Deployed in| n30
  n662 -->|Implements| n49
  n662 -->|Depends on| n25
  n664 -->|Serves| n449
  n664 -->|Depends on| n148
  n664 -->|Depends on| n669
  n664 -->|Depends on| n21
  n664 -->|Depends on| n39
  n664 -->|Depends on| n25
  n664 -->|Depends on| n146
  n664 -->|Depends on| n177
  n664 -->|Depends on| n49
  n665 -->|Chooses| n662
  n665 -->|In| n30
  n665 -->|In| n53
  n665 -->|Serves| n449
  n666 -->|Serves| n449
  n666 -->|Depends on| n153
  n666 -->|Depends on| n189
  n666 -->|Depends on| n148
  n666 -->|Depends on| n201
  n666 -->|Depends on| n21
  n666 -->|Depends on| n39
  n667 -->|Refines| n449
  n668 -->|Accepts| n667
  n673 -->|Serves| n449
  n673 -->|Depends on| n149
  n673 -->|Depends on| n303
  n677 -->|Written in| n306
  n678 -->|Serves| n449
  n678 -->|Applied by| n680
  n678 -->|Applied by| n50
  n679 -->|Serves| n449
  n679 -->|Applied by| n680
  n679 -->|Applied by| n673
  n679 -->|Applied by| n50
  n680 -->|Serves| n449
  n680 -->|Serves| n456
  n680 -->|Depends on| n50
  n680 -->|Depends on| n674
  n680 -->|Depends on| n677
  n680 -->|Depends on| n675
  n680 -->|Depends on| n676
  n680 -->|Depends on| n670
  n680 -->|Depends on| n21
  n680 -->|Depends on| n27
  n680 -->|Depends on| n46
  n680 -->|Depends on| n148
  n680 -->|Depends on| n39
  n680 -->|Depends on| n25
  n681 -->|Defined by| n684
  n681 -->|Read in| n687
  n681 -->|Depends on| n684
  n682 -->|Defined by| n684
  n682 -->|Read in| n687
  n682 -->|Depends on| n684
  n683 -->|Defined by| n684
  n683 -->|Read in| n687
  n683 -->|Depends on| n684
  n683 -->|Depends on| n687
  n685 -->|Defined by| n684
  n685 -->|Read in| n687
  n685 -->|Depends on| n684
  n685 -->|Depends on| n683
  n686 -->|Defined by| n684
  n686 -->|Read in| n687
  n686 -->|Depends on| n684
  n686 -->|Depends on| n688
  n686 -->|Depends on| n683
  n687 -->|Defined by| n684
  n687 -->|Queries written in| n671
  n687 -->|Read by| n680
  n687 -->|Uses| n319
  n689 -->|Serves| n449
  n689 -->|Depends on| n684
  n689 -->|Depends on| n688
  n689 -->|Depends on| n148
  n689 -->|Depends on| n682
  n689 -->|Depends on| n683
  n689 -->|Depends on| n685
  n689 -->|Depends on| n681
  n689 -->|Depends on| n686
  n689 -->|Depends on| n39
  n689 -->|Depends on| n40
  n689 -->|Depends on| n301
  n689 -->|Depends on| n303
  n691 -->|Defined by| n698
  n691 -->|Depends on| n698
  n692 -->|Defined by| n698
  n692 -->|Depends on| n698
  n692 -->|Depends on| n694
  n692 -->|Depends on| n696
  n693 -->|Defined by| n698
  n693 -->|Depends on| n698
  n694 -->|Defined by| n698
  n694 -->|Depends on| n698
  n694 -->|Depends on| n696
  n695 -->|Defined by| n698
  n695 -->|Depends on| n698
  n695 -->|Depends on| n690
  n697 -->|Defined by| n698
  n697 -->|Depends on| n698
  n699 -->|Defined by| n698
  n699 -->|Depends on| n698
  n699 -->|Depends on| n690
  n700 -->|Defined by| n728
  n700 -->|Read in| n726
  n700 -->|Depends on| n728
  n701 -->|Defined by| n728
  n701 -->|Read in| n726
  n701 -->|Depends on| n728
  n702 -->|Defined by| n728
  n702 -->|Read in| n726
  n702 -->|Depends on| n728
  n703 -->|Defined by| n728
  n703 -->|Read in| n726
  n703 -->|Depends on| n728
  n704 -->|Defined by| n728
  n704 -->|Read in| n726
  n704 -->|Depends on| n728
  n705 -->|Defined by| n728
  n705 -->|Read in| n726
  n705 -->|Depends on| n728
  n706 -->|Defined by| n728
  n706 -->|Read in| n726
  n706 -->|Depends on| n728
  n707 -->|Defined by| n728
  n707 -->|Read in| n726
  n707 -->|Depends on| n728
  n707 -->|Depends on| n725
  n708 -->|Defined by| n728
  n708 -->|Read in| n726
  n708 -->|Depends on| n728
  n709 -->|Defined by| n728
  n709 -->|Read in| n726
  n709 -->|Depends on| n728
  n710 -->|Defined by| n728
  n710 -->|Read in| n726
  n710 -->|Depends on| n728
  n711 -->|Defined by| n728
  n711 -->|Read in| n726
  n711 -->|Depends on| n728
  n712 -->|Defined by| n728
  n712 -->|Read in| n726
  n712 -->|Depends on| n728
  n713 -->|Defined by| n728
  n713 -->|Read in| n726
  n713 -->|Depends on| n728
  n714 -->|Defined by| n728
  n714 -->|Read in| n726
  n714 -->|Depends on| n728
  n715 -->|Defined by| n728
  n715 -->|Read in| n726
  n715 -->|Depends on| n728
  n715 -->|Depends on| n725
  n716 -->|Defined by| n728
  n716 -->|Read in| n726
  n716 -->|Depends on| n728
  n717 -->|Defined by| n728
  n717 -->|Read in| n726
  n717 -->|Depends on| n728
  n718 -->|Defined by| n728
  n718 -->|Read in| n726
  n718 -->|Depends on| n728
  n719 -->|Defined by| n728
  n719 -->|Read in| n726
  n719 -->|Depends on| n728
  n720 -->|Defined by| n728
  n720 -->|Read in| n726
  n720 -->|Depends on| n728
  n721 -->|Defined by| n728
  n721 -->|Read in| n726
  n721 -->|Depends on| n728
  n723 -->|Defined by| n728
  n723 -->|Read in| n726
  n723 -->|Depends on| n728
  n723 -->|Depends on| n725
  n724 -->|Defined by| n728
  n724 -->|Read in| n726
  n724 -->|Depends on| n728
  n725 -->|Defined by| n728
  n725 -->|Read in| n726
  n725 -->|Depends on| n728
  n726 -->|Queries written in| n671
  n726 -->|Read by| n680
  n726 -->|Watches the globals| n731
  n726 -->|Uses| n327
  n727 -->|Serves| n449
  n729 -->|Serves| n449
  n729 -->|Depends on| n726
  n729 -->|Depends on| n728
  n729 -->|Depends on| n145
  n729 -->|Depends on| n722
  n729 -->|Depends on| n152
  n729 -->|Depends on| n151
  n729 -->|Depends on| n712
  n729 -->|Depends on| n725
  n729 -->|Depends on| n713
  n729 -->|Depends on| n719
  n729 -->|Depends on| n705
  n729 -->|Depends on| n704
  n729 -->|Depends on| n721
  n729 -->|Depends on| n723
  n729 -->|Depends on| n717
  n729 -->|Depends on| n700
  n729 -->|Depends on| n706
  n729 -->|Depends on| n715
  n729 -->|Depends on| n707
  n729 -->|Depends on| n701
  n729 -->|Depends on| n720
  n729 -->|Depends on| n718
  n729 -->|Depends on| n730
  n729 -->|Depends on| n710
  n729 -->|Depends on| n724
  n729 -->|Depends on| n702
  n729 -->|Depends on| n711
  n729 -->|Depends on| n703
  n729 -->|Depends on| n154
  n729 -->|Depends on| n39
  n729 -->|Depends on| n40
  n729 -->|Depends on| n301
  n729 -->|Depends on| n303
  n730 -->|Defined by| n728
  n730 -->|Read in| n726
  n730 -->|Depends on| n728
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
