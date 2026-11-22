# Layers

*The graph in force on 22 November 2026, ordered by distance to the goals.*

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
    n125["Rewriting an example<br/><small>Function</small>"]:::held
    n126["Examples<br/><small>Entry point</small>"]:::held
    n127["Export the page<br/><small>Entry point</small>"]:::held
    n128["Help<br/><small>Entry point</small>"]:::held
    n129["Start a project<br/><small>Entry point</small>"]:::held
    n130["Plan<br/><small>Entry point</small>"]:::held
    n131["Preparation<br/><small>Function</small>"]:::held
    n132["The project's commands<br/><small>Function</small>"]:::held
    n133["Publish<br/><small>Entry point</small>"]:::held
    n134["Record evidence<br/><small>Entry point</small>"]:::held
    n135["A module of references<br/><small>Function</small>"]:::held
    n136["Fill the registry<br/><small>Entry point</small>"]:::held
    n137["Release a version<br/><small>Entry point</small>"]:::held
    n138["Render a view<br/><small>Function</small>"]:::held
    n139["Run a component<br/><small>Entry point</small>"]:::held
    n140["Ship<br/><small>Entry point</small>"]:::held
    n141["Show a view<br/><small>Entry point</small>"]:::held
    n142["Take the snapshot<br/><small>Entry point</small>"]:::held
    n143["Test the laws<br/><small>Entry point</small>"]:::held
    n144["Upgrade<br/><small>Entry point</small>"]:::held
    n145["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n146["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n147["Default rank<br/><small>Decision</small>"]:::neutral
    n148["Documentation comment<br/><small>Decision</small>"]:::neutral
    n149["Names of the documents<br/><small>Standard</small>"]:::neutral
    n150["The frozen API<br/><small>Standard</small>"]:::neutral
    n151["JSON formatting<br/><small>Decision</small>"]:::neutral
    n152["The language's names<br/><small>Decision</small>"]:::neutral
    n153["Project layout<br/><small>Decision</small>"]:::neutral
    n154["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n155["How a project starts<br/><small>Decision</small>"]:::neutral
    n156["Trame references<br/><small>Standard</small>"]:::neutral
    n157["Names of steps<br/><small>Decision</small>"]:::neutral
    n158["Trame's commands<br/><small>Standard</small>"]:::neutral
    n159["Trame's environment<br/><small>Standard</small>"]:::neutral
    n160["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n161["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n162["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n163["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n164["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n165["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n166["How a number is written<br/><small>Decision</small>"]:::neutral
    n167["Punctuation of documents<br/><small>Function</small>"]:::held
    n168["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n169["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n170["Values with their units<br/><small>Function</small>"]:::held
    n171["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n172["Assembly<br/><small>Function</small>"]:::held
    n173["Compilation API<br/><small>Function</small>"]:::held
    n174["Compiler<br/><small>Function</small>"]:::held
    n175["Cycles<br/><small>Function</small>"]:::held
    n176["Date bundle<br/><small>Function</small>"]:::held
    n177["trame dev server<br/><small>Function</small>"]:::held
    n178["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n179["Differences<br/><small>Function</small>"]:::held
    n180["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n181["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n182["Fingerprints<br/><small>Function</small>"]:::held
    n183["Pseudo-random generator<br/><small>Function</small>"]:::held
    n184["Graph<br/><small>Function</small>"]:::held
    n185["Judged harder<br/><small>Function</small>"]:::held
    n186["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n187["Laws<br/><small>Function</small>"]:::held
    n188["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n189["Lock<br/><small>Function</small>"]:::held
    n190["Machine outputs<br/><small>Function</small>"]:::held
    n191["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n192["Payload<br/><small>Function</small>"]:::held
    n193["Positions<br/><small>Function</small>"]:::held
    n194["Project<br/><small>Function</small>"]:::held
    n195["The runs of a project<br/><small>Function</small>"]:::held
    n196["References<br/><small>Function</small>"]:::held
    n197["A shipment's pipeline<br/><small>Function</small>"]:::held
    n198["Static reading<br/><small>Function</small>"]:::held
    n199["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n200["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n201["Views<br/><small>Function</small>"]:::held
    n202["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n203["Accept a candidate<br/><small>Requirement</small>"]:::held
    n204["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n205["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n206["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n207["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n208["Records of the releases<br/><small>Function</small>"]:::held
    n209["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n210["Attribute presence<br/><small>Syntax element</small>"]:::held
    n211["Attribute selector<br/><small>Syntax element</small>"]:::held
    n212["Class selector<br/><small>Syntax element</small>"]:::held
    n213["Declaration<br/><small>Syntax element</small>"]:::held
    n214["Rule<br/><small>Syntax element</small>"]:::held
    n215["CSS style sheets<br/><small>Language</small>"]:::held
    n216["Variable<br/><small>Syntax element</small>"]:::held
    n217["Custom property<br/><small>Syntax element</small>"]:::held
    n218["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n219["Escaped text<br/><small>Syntax element</small>"]:::held
    n220["Attributes<br/><small>Syntax element</small>"]:::held
    n221["Element over several lines<br/><small>Syntax element</small>"]:::held
    n222["HTML element<br/><small>Syntax element</small>"]:::held
    n223["End tag<br/><small>Syntax element</small>"]:::held
    n224["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n225["HTML markup<br/><small>Language</small>"]:::held
    n226["Start tag<br/><small>Syntax element</small>"]:::held
    n227["JSON in a script<br/><small>Syntax element</small>"]:::held
    n228["Media feature<br/><small>Syntax element</small>"]:::held
    n229["Media rule<br/><small>Syntax element</small>"]:::held
    n230["Negation<br/><small>Syntax element</small>"]:::held
    n231["Path data<br/><small>Syntax element</small>"]:::held
    n232["Script<br/><small>Syntax element</small>"]:::held
    n233["Selector list<br/><small>Syntax element</small>"]:::held
    n234["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n235["Drivers<br/><small>Function</small>"]:::held
    n236["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n237["Answers without crashing<br/><small>Requirement</small>"]:::held
    n238["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n239["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n240["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n241["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n242["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n243["Complete declaration<br/><small>Requirement</small>"]:::held
    n244["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n245["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n246["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n247["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n248["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n249["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n250["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n251["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n252["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n253["Same input, same answer<br/><small>Requirement</small>"]:::held
    n254["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n255["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n256["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n257["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n258["What belongs to a library<br/><small>Requirement</small>"]:::held
    n259["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n260["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n261["A release is settled<br/><small>Requirement</small>"]:::held
    n262["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n263["Anchor<br/><small>Syntax element</small>"]:::held
    n264["Backtick string<br/><small>Syntax element</small>"]:::held
    n265["Blank line<br/><small>Syntax element</small>"]:::held
    n266["Block quote<br/><small>Syntax element</small>"]:::held
    n267["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n268["Code block<br/><small>Syntax element</small>"]:::held
    n269["Code span<br/><small>Syntax element</small>"]:::held
    n270["CommonMark<br/><small>Standard</small>"]:::neutral
    n271["Collapsible block<br/><small>Syntax element</small>"]:::held
    n272["Emphasis<br/><small>Syntax element</small>"]:::held
    n273["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n274["Heading<br/><small>Syntax element</small>"]:::held
    n275["Link<br/><small>Syntax element</small>"]:::held
    n276["List item<br/><small>Syntax element</small>"]:::held
    n277["Relative reference<br/><small>Syntax element</small>"]:::held
    n278["Small text<br/><small>Syntax element</small>"]:::held
    n279["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n280["Table<br/><small>Syntax element</small>"]:::held
    n281["Table cell<br/><small>Syntax element</small>"]:::held
    n282["Delimiter row<br/><small>Syntax element</small>"]:::held
    n283["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n284["Around the documents<br/><small>Decision</small>"]:::neutral
    n285["Documents in the page<br/><small>Decision</small>"]:::neutral
    n286["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n287["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n288["Class definition<br/><small>Syntax element</small>"]:::held
    n289["Flowchart<br/><small>Syntax element</small>"]:::held
    n290["Gantt chart<br/><small>Syntax element</small>"]:::held
    n291["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n292["Section<br/><small>Syntax element</small>"]:::held
    n293["Task<br/><small>Syntax element</small>"]:::held
    n294["Mermaid<br/><small>Standard</small>"]:::neutral
    n295["Label<br/><small>Syntax element</small>"]:::held
    n296["Link<br/><small>Syntax element</small>"]:::held
    n297["Node<br/><small>Syntax element</small>"]:::held
    n298["Milestone<br/><small>Syntax element</small>"]:::held
    n299["Node style<br/><small>Syntax element</small>"]:::held
    n300["Style properties<br/><small>Syntax element</small>"]:::held
    n301["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n302["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n303["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n304["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n305["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n306["Dates<br/><small>Function</small>"]:::held
    n307["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n308["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n309["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n310["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n311["Language<br/><small>Decision</small>"]:::neutral
    n312["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n313["Lists<br/><small>Function</small>"]:::held
    n314["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n315["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n316["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n317["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n318["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n319["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n320["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n321["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n322["Grammar of CSS<br/><small>Package</small>"]:::held
    n323["esbuild<br/><small>Package</small>"]:::held
    n324["Grammar of HCL<br/><small>Package</small>"]:::held
    n325["Grammar of HTML<br/><small>Package</small>"]:::held
    n326["Types of Node.js<br/><small>Package</small>"]:::held
    n327["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n328["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n329["The people of the repository<br/><small>Package</small>"]:::neutral
    n330["The standard library<br/><small>Package</small>"]:::neutral
    n331["tsx<br/><small>Package</small>"]:::held
    n332["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n333["TypeScript<br/><small>Package</small>"]:::held
    n334["Order of versions<br/><small>Function</small>"]:::held
    n335["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n336["Banner<br/><small>Syntax element</small>"]:::held
    n337["Brand<br/><small>Syntax element</small>"]:::held
    n338["State of the compilation<br/><small>Syntax element</small>"]:::held
    n339["Dates<br/><small>Syntax element</small>"]:::held
    n340["Head of the document<br/><small>Syntax element</small>"]:::held
    n341["Document picker<br/><small>Syntax element</small>"]:::held
    n342["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n343["Fonts<br/><small>Syntax element</small>"]:::held
    n344["Logo<br/><small>Syntax element</small>"]:::held
    n345["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n346["Main area<br/><small>Syntax element</small>"]:::held
    n347["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n348["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n349["Navigation<br/><small>Syntax element</small>"]:::held
    n350["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n351["Page<br/><small>Function</small>"]:::held
    n352["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n353["Document of the page<br/><small>Syntax element</small>"]:::held
    n354["Regions of the page<br/><small>Decision</small>"]:::neutral
    n355["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n356["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n357["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n358["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n359["Shell<br/><small>Syntax element</small>"]:::held
    n360["Side bar<br/><small>Syntax element</small>"]:::held
    n361["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n362["Colours of a status<br/><small>Syntax element</small>"]:::held
    n363["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n364["Theme<br/><small>Syntax element</small>"]:::held
    n365["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n366["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n367["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n368["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n369["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n370["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n371["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n372["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n373["esbuild<br/><small>Implementation</small>"]:::held
    n374["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n375["Example process<br/><small>Function</small>"]:::held
    n376["Example project<br/><small>Decision</small>"]:::neutral
    n377["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n378["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n379["Amendments in place<br/><small>Implementation</small>"]:::held
    n380["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n381["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n382["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n383["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n384["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n385["A server in memory<br/><small>Function</small>"]:::held
    n386["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n387["Terminal in memory<br/><small>Function</small>"]:::held
    n388["Command line<br/><small>Implementation</small>"]:::held
    n389["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n390["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n391["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n392["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n393["Node paths<br/><small>Implementation</small>"]:::held
    n394["NodePlatform<br/><small>Technical choice</small>"]:::held
    n395["Node process<br/><small>Implementation</small>"]:::unknown
    n396["Node programs<br/><small>Implementation</small>"]:::unknown
    n397["Node terminal<br/><small>Implementation</small>"]:::unknown
    n398["Node timer<br/><small>Implementation</small>"]:::held
    n399["No installer in test<br/><small>Implementation</small>"]:::held
    n400["No registry in test<br/><small>Function</small>"]:::held
    n401["npm installs<br/><small>Implementation</small>"]:::unknown
    n402["npm's reports<br/><small>Implementation</small>"]:::unknown
    n403["Packages by their origin<br/><small>Implementation</small>"]:::held
    n404["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n405["Page resources<br/><small>Implementation</small>"]:::held
    n406["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n407["Results kept in the process<br/><small>Implementation</small>"]:::held
    n408["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n409["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n410["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n411["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n412["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n413["Stopped clock<br/><small>Function</small>"]:::held
    n414["System clock<br/><small>Implementation</small>"]:::unknown
    n415["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n416["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n417["Trame's prelude<br/><small>Implementation</small>"]:::held
    n418["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n419["tsx loader<br/><small>Implementation</small>"]:::held
    n420["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n421["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n422["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n423["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n424["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n425["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n426["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n427["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n428["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n429["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n430["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n431["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n432["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n433["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n434["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n435["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n436["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n437["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n438["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n439["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n440["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n441["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n442["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n443["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n444["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n445["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n446["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n447["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n448["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n449["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n450["Candidate dates<br/><small>Decision</small>"]:::neutral
    n451["Claim sets<br/><small>Decision</small>"]:::neutral
    n452["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n453["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n454["A specification that runs<br/><small>Goal</small>"]:::neutral
    n455["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n456["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n457["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n458["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n459["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n460["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n461["A single source of truth<br/><small>Goal</small>"]:::neutral
    n462["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n463["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n464["Generation 1<br/><small>Release</small>"]:::neutral
    n465["Generation 10<br/><small>Release</small>"]:::neutral
    n466["Generation 100<br/><small>Release</small>"]:::neutral
    n467["Generation 101<br/><small>Release</small>"]:::neutral
    n468["Generation 102<br/><small>Release</small>"]:::neutral
    n469["Generation 103<br/><small>Release</small>"]:::neutral
    n470["Generation 104<br/><small>Release</small>"]:::neutral
    n471["Generation 105<br/><small>Release</small>"]:::neutral
    n472["Generation 106<br/><small>Release</small>"]:::neutral
    n473["Generation 107<br/><small>Release</small>"]:::neutral
    n474["Generation 108<br/><small>Release</small>"]:::neutral
    n475["Generation 109<br/><small>Release</small>"]:::neutral
    n476["Generation 11<br/><small>Release</small>"]:::neutral
    n477["Generation 110<br/><small>Release</small>"]:::neutral
    n478["Generation 111<br/><small>Release</small>"]:::neutral
    n479["Generation 112<br/><small>Release</small>"]:::neutral
    n480["Generation 113<br/><small>Release</small>"]:::neutral
    n481["Generation 114<br/><small>Release</small>"]:::neutral
    n482["Generation 115<br/><small>Release</small>"]:::neutral
    n483["Generation 116<br/><small>Release</small>"]:::neutral
    n484["Generation 117<br/><small>Release</small>"]:::neutral
    n485["Generation 12<br/><small>Release</small>"]:::neutral
    n486["Generation 13<br/><small>Release</small>"]:::neutral
    n487["Generation 14<br/><small>Release</small>"]:::neutral
    n488["Generation 15<br/><small>Release</small>"]:::neutral
    n489["Generation 16<br/><small>Release</small>"]:::neutral
    n490["Generation 17<br/><small>Release</small>"]:::neutral
    n491["Generation 18<br/><small>Release</small>"]:::neutral
    n492["Generation 19<br/><small>Release</small>"]:::neutral
    n493["Generation 2<br/><small>Release</small>"]:::neutral
    n494["Generation 20<br/><small>Release</small>"]:::neutral
    n495["Generation 21<br/><small>Release</small>"]:::neutral
    n496["Generation 22<br/><small>Release</small>"]:::neutral
    n497["Generation 23<br/><small>Release</small>"]:::neutral
    n498["Generation 24<br/><small>Release</small>"]:::neutral
    n499["Generation 25<br/><small>Release</small>"]:::neutral
    n500["Generation 26<br/><small>Release</small>"]:::neutral
    n501["Generation 27<br/><small>Release</small>"]:::neutral
    n502["Generation 28<br/><small>Release</small>"]:::neutral
    n503["Generation 29<br/><small>Release</small>"]:::neutral
    n504["Generation 3<br/><small>Release</small>"]:::neutral
    n505["Generation 30<br/><small>Release</small>"]:::neutral
    n506["Generation 31<br/><small>Release</small>"]:::neutral
    n507["Generation 32<br/><small>Release</small>"]:::neutral
    n508["Generation 33<br/><small>Release</small>"]:::neutral
    n509["Generation 34<br/><small>Release</small>"]:::neutral
    n510["Generation 35<br/><small>Release</small>"]:::neutral
    n511["Generation 36<br/><small>Release</small>"]:::neutral
    n512["Generation 37<br/><small>Release</small>"]:::neutral
    n513["Generation 38<br/><small>Release</small>"]:::neutral
    n514["Generation 39<br/><small>Release</small>"]:::neutral
    n515["Generation 4<br/><small>Release</small>"]:::neutral
    n516["Generation 40<br/><small>Release</small>"]:::neutral
    n517["Generation 41<br/><small>Release</small>"]:::neutral
    n518["Generation 42<br/><small>Release</small>"]:::neutral
    n519["Generation 43<br/><small>Release</small>"]:::neutral
    n520["Generation 44<br/><small>Release</small>"]:::neutral
    n521["Generation 45<br/><small>Release</small>"]:::neutral
    n522["Generation 46<br/><small>Release</small>"]:::neutral
    n523["Generation 47<br/><small>Release</small>"]:::neutral
    n524["Generation 48<br/><small>Release</small>"]:::neutral
    n525["Generation 49<br/><small>Release</small>"]:::neutral
    n526["Generation 5<br/><small>Release</small>"]:::neutral
    n527["Generation 50<br/><small>Release</small>"]:::neutral
    n528["Generation 51<br/><small>Release</small>"]:::neutral
    n529["Generation 52<br/><small>Release</small>"]:::neutral
    n530["Generation 53<br/><small>Release</small>"]:::neutral
    n531["Generation 54<br/><small>Release</small>"]:::neutral
    n532["Generation 55<br/><small>Release</small>"]:::neutral
    n533["Generation 56<br/><small>Release</small>"]:::neutral
    n534["Generation 57<br/><small>Release</small>"]:::neutral
    n535["Generation 58<br/><small>Release</small>"]:::neutral
    n536["Generation 59<br/><small>Release</small>"]:::neutral
    n537["Generation 6<br/><small>Release</small>"]:::neutral
    n538["Generation 60<br/><small>Release</small>"]:::neutral
    n539["Generation 61<br/><small>Release</small>"]:::neutral
    n540["Generation 62<br/><small>Release</small>"]:::neutral
    n541["Generation 63<br/><small>Release</small>"]:::neutral
    n542["Generation 64<br/><small>Release</small>"]:::neutral
    n543["Generation 65<br/><small>Release</small>"]:::neutral
    n544["Generation 66<br/><small>Release</small>"]:::neutral
    n545["Generation 67<br/><small>Release</small>"]:::neutral
    n546["Generation 68<br/><small>Release</small>"]:::neutral
    n547["Generation 69<br/><small>Release</small>"]:::neutral
    n548["Generation 7<br/><small>Release</small>"]:::neutral
    n549["Generation 70<br/><small>Release</small>"]:::neutral
    n550["Generation 71<br/><small>Release</small>"]:::neutral
    n551["Generation 72<br/><small>Release</small>"]:::neutral
    n552["Generation 73<br/><small>Release</small>"]:::neutral
    n553["Generation 74<br/><small>Release</small>"]:::neutral
    n554["Generation 75<br/><small>Release</small>"]:::neutral
    n555["Generation 76<br/><small>Release</small>"]:::neutral
    n556["Generation 77<br/><small>Release</small>"]:::neutral
    n557["Generation 78<br/><small>Release</small>"]:::neutral
    n558["Generation 79<br/><small>Release</small>"]:::neutral
    n559["Generation 8<br/><small>Release</small>"]:::neutral
    n560["Generation 80<br/><small>Release</small>"]:::neutral
    n561["Generation 81<br/><small>Release</small>"]:::neutral
    n562["Generation 82<br/><small>Release</small>"]:::neutral
    n563["Generation 83<br/><small>Release</small>"]:::neutral
    n564["Generation 84<br/><small>Release</small>"]:::neutral
    n565["Generation 85<br/><small>Release</small>"]:::neutral
    n566["Generation 86<br/><small>Release</small>"]:::neutral
    n567["Generation 87<br/><small>Release</small>"]:::neutral
    n568["Generation 88<br/><small>Release</small>"]:::neutral
    n569["Generation 89<br/><small>Release</small>"]:::neutral
    n570["Generation 9<br/><small>Release</small>"]:::neutral
    n571["Generation 90<br/><small>Release</small>"]:::neutral
    n572["Generation 91<br/><small>Release</small>"]:::neutral
    n573["Generation 92<br/><small>Release</small>"]:::neutral
    n574["Generation 93<br/><small>Release</small>"]:::neutral
    n575["Generation 94<br/><small>Release</small>"]:::neutral
    n576["Generation 95<br/><small>Release</small>"]:::neutral
    n577["Generation 96<br/><small>Release</small>"]:::neutral
    n578["Generation 97<br/><small>Release</small>"]:::neutral
    n579["Generation 98<br/><small>Release</small>"]:::neutral
    n580["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n581["Common rendering<br/><small>Function</small>"]:::held
    n582["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n583["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n584["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n585["Rendering of the files<br/><small>Function</small>"]:::held
    n586["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n587["HTML writer<br/><small>Function</small>"]:::held
    n588["Markdown writer<br/><small>Function</small>"]:::held
    n589["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n590["Mermaid diagrams<br/><small>Function</small>"]:::held
    n591["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n592["Figures of the page<br/><small>Port</small>"]:::neutral
    n593["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n594["The page in HTML<br/><small>Technical choice</small>"]:::held
    n595["Rendering in the page<br/><small>Function</small>"]:::held
    n596["Syntax of the page<br/><small>Port</small>"]:::neutral
    n597["Plain text writer<br/><small>Function</small>"]:::held
    n598["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n599["Figures in SVG<br/><small>Function</small>"]:::held
    n600["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n601["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n602["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n603["Rendering in the terminal<br/><small>Function</small>"]:::held
    n604["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n605["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n606["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n607["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n608["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n609["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n610["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n611["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n612["EngineReckons<br/><small>Scenario</small>"]:::held
    n613["Shape of the example<br/><small>Decision</small>"]:::neutral
    n614["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n615["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n616["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n617["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n618["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n619["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n620["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n621["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n622["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n623["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n624["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n625["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n626["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n627["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n628["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n629["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n630["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n631["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n632["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n633["How a generation is made<br/><small>Policy</small>"]:::neutral
    n634["The graph page<br/><small>Artefact</small>"]:::unknown
    n635["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n636["The graph page opens<br/><small>Check</small>"]:::unknown
    n637["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n638["What the graph page is asked<br/><small>Function</small>"]:::held
    n639["How a generation advances<br/><small>Decision</small>"]:::neutral
    n640["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n641["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n642["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n643["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n644["How a change merges<br/><small>Policy</small>"]:::neutral
    n645["The next generation<br/><small>Shipment</small>"]:::unknown
    n646["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n647["Open the graph page<br/><small>Entry point</small>"]:::held
    n648["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n649["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n650["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n651["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n652["The page's program<br/><small>Artefact</small>"]:::held
    n653["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n654["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n655["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n656["The repository's projects<br/><small>Decision</small>"]:::neutral
    n657["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n658["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n659["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n660["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n661["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n662["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n663["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n664["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n665["How the repository is set<br/><small>Policy</small>"]:::neutral
    n666["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n667["The engine<br/><small>Artefact</small>"]:::unknown
    n668["Trame's repository<br/><small>Decision</small>"]:::neutral
    n669["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n670["Attribution<br/><small>Function</small>"]:::held
    n671["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n672["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n673["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n674["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n675["Ship only what holds<br/><small>Requirement</small>"]:::held
    n676["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n677["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n678["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n679["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n680["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n681["Checks of a body<br/><small>Function</small>"]:::held
    n682["Captures<br/><small>Standard</small>"]:::neutral
    n683["Categories of literals<br/><small>Decision</small>"]:::neutral
    n684["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n685["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n686["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n687["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n688["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n689["Attribute<br/><small>Syntax element</small>"]:::held
    n690["Comment<br/><small>Syntax element</small>"]:::held
    n691["Text<br/><small>Syntax element</small>"]:::held
    n692["HCL<br/><small>Standard</small>"]:::neutral
    n693["Value<br/><small>Syntax element</small>"]:::held
    n694["Module call<br/><small>Syntax element</small>"]:::held
    n695["Terraform<br/><small>Language</small>"]:::held
    n696["Terraform modules<br/><small>Standard</small>"]:::neutral
    n697["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n698["Box drawing<br/><small>Standard</small>"]:::neutral
    n699["Code lines<br/><small>Syntax element</small>"]:::held
    n700["Columns<br/><small>Syntax element</small>"]:::held
    n701["Item line<br/><small>Syntax element</small>"]:::held
    n702["Padded cell<br/><small>Syntax element</small>"]:::held
    n703["Path step<br/><small>Syntax element</small>"]:::held
    n704["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n705["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n706["Terminal text<br/><small>Decision</small>"]:::neutral
    n707["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n708["List on several lines<br/><small>Syntax element</small>"]:::held
    n709["Type assertion<br/><small>Syntax element</small>"]:::held
    n710["Assignment<br/><small>Syntax element</small>"]:::held
    n711["Async function of a block<br/><small>Syntax element</small>"]:::held
    n712["Waiting<br/><small>Syntax element</small>"]:::held
    n713["Call<br/><small>Syntax element</small>"]:::held
    n714["Constant<br/><small>Syntax element</small>"]:::held
    n715["Default import<br/><small>Syntax element</small>"]:::held
    n716["Documentation comment<br/><small>Syntax element</small>"]:::held
    n717["Export<br/><small>Syntax element</small>"]:::held
    n718["Condition<br/><small>Syntax element</small>"]:::held
    n719["List on one line<br/><small>Syntax element</small>"]:::held
    n720["Comment<br/><small>Syntax element</small>"]:::held
    n721["Property access<br/><small>Syntax element</small>"]:::held
    n722["Title of a module<br/><small>Syntax element</small>"]:::held
    n723["Import of names<br/><small>Syntax element</small>"]:::held
    n724["Object on several lines<br/><small>Syntax element</small>"]:::held
    n725["Object<br/><small>Syntax element</small>"]:::held
    n726["Object type<br/><small>Syntax element</small>"]:::held
    n727["Optional property access<br/><small>Syntax element</small>"]:::held
    n728["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n729["Group<br/><small>Syntax element</small>"]:::held
    n730["Names of a program<br/><small>Decision</small>"]:::neutral
    n731["Property<br/><small>Syntax element</small>"]:::held
    n732["Strict inequality<br/><small>Syntax element</small>"]:::held
    n733["Text<br/><small>Syntax element</small>"]:::held
    n734["TypeScript<br/><small>Language</small>"]:::held
    n735["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n736["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n737["TypeScript writer<br/><small>Function</small>"]:::held
    n738["Union type<br/><small>Syntax element</small>"]:::held
    n739["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n365
  n58 -->|Depends on| n178
  n59 -->|Implements| n20
  n59 -->|Depends on| n350
  n60 -->|Implements| n24
  n60 -->|Depends on| n365
  n60 -->|Depends on| n178
  n61 -->|Implements| n37
  n61 -->|Depends on| n365
  n62 -->|Implements| n38
  n62 -->|Depends on| n228
  n63 -->|Serves| n454
  n63 -->|Depends on| n365
  n63 -->|Depends on| n285
  n63 -->|Depends on| n287
  n63 -->|Depends on| n286
  n63 -->|Depends on| n0
  n63 -->|Depends on| n222
  n63 -->|Depends on| n226
  n63 -->|Depends on| n234
  n63 -->|Depends on| n231
  n63 -->|Depends on| n213
  n63 -->|Depends on| n219
  n63 -->|Depends on| n581
  n63 -->|Depends on| n315
  n63 -->|Depends on| n317
  n63 -->|Depends on| n167
  n64 -->|Serves| n454
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n581
  n64 -->|Depends on| n365
  n64 -->|Depends on| n354
  n64 -->|Depends on| n357
  n64 -->|Depends on| n345
  n64 -->|Depends on| n285
  n64 -->|Depends on| n284
  n64 -->|Depends on| n286
  n64 -->|Depends on| n0
  n64 -->|Depends on| n149
  n64 -->|Depends on| n598
  n64 -->|Depends on| n167
  n64 -->|Depends on| n311
  n64 -->|Depends on| n222
  n64 -->|Depends on| n219
  n64 -->|Depends on| n211
  n64 -->|Depends on| n210
  n64 -->|Depends on| n233
  n64 -->|Depends on| n212
  n64 -->|Depends on| n315
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n455
  n66 -->|Serves| n454
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n111
  n67 -->|Verifies| n180
  n67 -->|In| n53
  n67 -->|Depends on| n111
  n67 -->|Depends on| n42
  n67 -->|Depends on| n57
  n67 -->|Depends on| n52
  n67 -->|Depends on| n41
  n67 -->|Depends on| n39
  n67 -->|Depends on| n153
  n67 -->|Depends on| n21
  n67 -->|Depends on| n23
  n67 -->|Depends on| n158
  n67 -->|Depends on| n302
  n67 -->|Depends on| n68
  n67 -->|Depends on| n318
  n71 -->|Verifies| n688
  n71 -->|Verifies| n681
  n71 -->|Verifies| n422
  n71 -->|In| n53
  n71 -->|Depends on| n688
  n71 -->|Depends on| n681
  n71 -->|Depends on| n734
  n71 -->|Depends on| n72
  n71 -->|Depends on| n308
  n71 -->|Depends on| n318
  n73 -->|Verifies| n130
  n73 -->|In| n53
  n73 -->|Depends on| n117
  n73 -->|Depends on| n130
  n73 -->|Depends on| n57
  n73 -->|Depends on| n52
  n73 -->|Depends on| n23
  n73 -->|Depends on| n41
  n73 -->|Depends on| n39
  n73 -->|Depends on| n153
  n73 -->|Depends on| n95
  n73 -->|Depends on| n158
  n73 -->|Depends on| n303
  n73 -->|Depends on| n318
  n74 -->|Verifies| n388
  n74 -->|Verifies| n387
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n158
  n74 -->|Depends on| n109
  n74 -->|Depends on| n316
  n74 -->|Depends on| n318
  n75 -->|Verifies| n114
  n75 -->|Verifies| n115
  n75 -->|Verifies| n172
  n75 -->|Verifies| n737
  n75 -->|Verifies| n697
  n75 -->|Verifies| n235
  n75 -->|Verifies| n413
  n75 -->|In| n53
  n75 -->|Depends on| n114
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n158
  n75 -->|Depends on| n153
  n75 -->|Depends on| n70
  n75 -->|Depends on| n150
  n75 -->|Depends on| n303
  n75 -->|Depends on| n318
  n76 -->|Verifies| n139
  n76 -->|In| n53
  n76 -->|Depends on| n139
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n158
  n76 -->|Depends on| n70
  n76 -->|Depends on| n102
  n76 -->|Depends on| n318
  n77 -->|Verifies| n133
  n77 -->|In| n53
  n77 -->|Depends on| n133
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n153
  n77 -->|Depends on| n158
  n77 -->|Depends on| n303
  n77 -->|Depends on| n318
  n78 -->|Verifies| n121
  n78 -->|Verifies| n177
  n78 -->|Verifies| n385
  n78 -->|Verifies| n398
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
  n78 -->|Depends on| n153
  n78 -->|Depends on| n178
  n78 -->|Depends on| n452
  n78 -->|Depends on| n194
  n78 -->|Depends on| n158
  n78 -->|Depends on| n314
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n318
  n80 -->|Verifies| n122
  n80 -->|Verifies| n195
  n80 -->|Verifies| n409
  n80 -->|In| n53
  n80 -->|Depends on| n122
  n80 -->|Depends on| n42
  n80 -->|Depends on| n52
  n80 -->|Depends on| n123
  n80 -->|Depends on| n158
  n80 -->|Depends on| n303
  n80 -->|Depends on| n318
  n81 -->|Verifies| n134
  n81 -->|In| n53
  n81 -->|Depends on| n134
  n81 -->|Depends on| n57
  n81 -->|Depends on| n41
  n81 -->|Depends on| n39
  n81 -->|Depends on| n153
  n81 -->|Depends on| n677
  n81 -->|Depends on| n97
  n81 -->|Depends on| n158
  n81 -->|Depends on| n49
  n81 -->|Depends on| n318
  n82 -->|Verifies| n125
  n82 -->|In| n53
  n82 -->|Depends on| n125
  n82 -->|Depends on| n101
  n82 -->|Depends on| n318
  n83 -->|Verifies| n126
  n83 -->|In| n53
  n83 -->|Depends on| n126
  n83 -->|Depends on| n57
  n83 -->|Depends on| n158
  n83 -->|Depends on| n318
  n84 -->|Verifies| n174
  n84 -->|Verifies| n194
  n84 -->|In| n53
  n84 -->|Depends on| n174
  n84 -->|Depends on| n42
  n84 -->|Depends on| n41
  n84 -->|Depends on| n17
  n84 -->|Depends on| n103
  n84 -->|Depends on| n97
  n84 -->|Depends on| n672
  n84 -->|Depends on| n23
  n84 -->|Depends on| n318
  n85 -->|Verifies| n143
  n85 -->|In| n53
  n85 -->|Depends on| n143
  n85 -->|Depends on| n174
  n85 -->|Depends on| n201
  n85 -->|Depends on| n41
  n85 -->|Depends on| n52
  n85 -->|Depends on| n158
  n85 -->|Depends on| n303
  n85 -->|Depends on| n318
  n86 -->|Verifies| n119
  n86 -->|Verifies| n132
  n86 -->|Verifies| n128
  n86 -->|In| n53
  n86 -->|Depends on| n119
  n86 -->|Depends on| n128
  n86 -->|Depends on| n42
  n86 -->|Depends on| n52
  n86 -->|Depends on| n158
  n86 -->|Depends on| n97
  n86 -->|Depends on| n318
  n87 -->|Verifies| n137
  n87 -->|Verifies| n208
  n87 -->|Verifies| n382
  n87 -->|In| n53
  n87 -->|Depends on| n137
  n87 -->|Depends on| n42
  n87 -->|Depends on| n57
  n87 -->|Depends on| n52
  n87 -->|Depends on| n41
  n87 -->|Depends on| n39
  n87 -->|Depends on| n153
  n87 -->|Depends on| n103
  n87 -->|Depends on| n97
  n87 -->|Depends on| n158
  n87 -->|Depends on| n733
  n87 -->|Depends on| n318
  n87 -->|Depends on| n677
  n88 -->|Verifies| n145
  n88 -->|Verifies| n403
  n88 -->|Verifies| n381
  n88 -->|Verifies| n399
  n88 -->|In| n53
  n88 -->|Depends on| n145
  n88 -->|Depends on| n42
  n88 -->|Depends on| n57
  n88 -->|Depends on| n21
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n153
  n88 -->|Depends on| n103
  n88 -->|Depends on| n97
  n88 -->|Depends on| n158
  n88 -->|Depends on| n318
  n88 -->|Depends on| n152
  n88 -->|Depends on| n734
  n89 -->|Verifies| n116
  n89 -->|Verifies| n400
  n89 -->|In| n53
  n89 -->|Depends on| n116
  n89 -->|Depends on| n42
  n89 -->|Depends on| n57
  n89 -->|Depends on| n52
  n89 -->|Depends on| n103
  n89 -->|Depends on| n158
  n89 -->|Depends on| n318
  n89 -->|Depends on| n328
  n90 -->|Verifies| n144
  n90 -->|Verifies| n403
  n90 -->|Verifies| n381
  n90 -->|In| n53
  n90 -->|Depends on| n144
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n41
  n90 -->|Depends on| n39
  n90 -->|Depends on| n153
  n90 -->|Depends on| n103
  n90 -->|Depends on| n158
  n90 -->|Depends on| n318
  n91 -->|Verifies| n120
  n91 -->|Verifies| n163
  n91 -->|In| n53
  n91 -->|Depends on| n120
  n91 -->|Depends on| n42
  n91 -->|Depends on| n57
  n91 -->|Depends on| n103
  n91 -->|Depends on| n97
  n91 -->|Depends on| n218
  n91 -->|Depends on| n158
  n91 -->|Depends on| n318
  n92 -->|Verifies| n127
  n92 -->|Verifies| n176
  n92 -->|In| n53
  n92 -->|Depends on| n124
  n92 -->|Depends on| n127
  n92 -->|Depends on| n42
  n92 -->|Depends on| n57
  n92 -->|Depends on| n52
  n92 -->|Depends on| n194
  n92 -->|Depends on| n41
  n92 -->|Depends on| n39
  n92 -->|Depends on| n153
  n92 -->|Depends on| n158
  n92 -->|Depends on| n314
  n92 -->|Depends on| n318
  n93 -->|Verifies| n351
  n93 -->|Verifies| n373
  n93 -->|Verifies| n389
  n93 -->|Verifies| n405
  n93 -->|In| n53
  n93 -->|Depends on| n124
  n93 -->|Depends on| n351
  n93 -->|Depends on| n19
  n93 -->|Depends on| n194
  n93 -->|Depends on| n41
  n93 -->|Depends on| n17
  n93 -->|Depends on| n52
  n93 -->|Depends on| n158
  n93 -->|Depends on| n314
  n93 -->|Depends on| n318
  n94 -->|Verifies| n124
  n94 -->|Verifies| n192
  n94 -->|Verifies| n595
  n94 -->|Verifies| n587
  n94 -->|Verifies| n599
  n94 -->|Verifies| n179
  n94 -->|In| n53
  n94 -->|Depends on| n124
  n94 -->|Depends on| n179
  n94 -->|Depends on| n52
  n94 -->|Depends on| n158
  n94 -->|Depends on| n314
  n94 -->|Depends on| n318
  n94 -->|Depends on| n107
  n96 -->|Verifies| n119
  n96 -->|Verifies| n132
  n96 -->|Verifies| n128
  n96 -->|In| n53
  n96 -->|Depends on| n119
  n96 -->|Depends on| n128
  n96 -->|Depends on| n42
  n96 -->|Depends on| n52
  n96 -->|Depends on| n158
  n96 -->|Depends on| n97
  n96 -->|Depends on| n303
  n96 -->|Depends on| n318
  n98 -->|Verifies| n129
  n98 -->|Verifies| n135
  n98 -->|In| n53
  n98 -->|Depends on| n129
  n98 -->|Depends on| n42
  n98 -->|Depends on| n57
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n153
  n98 -->|Depends on| n103
  n98 -->|Depends on| n97
  n98 -->|Depends on| n155
  n98 -->|Depends on| n206
  n98 -->|Depends on| n158
  n98 -->|Depends on| n318
  n98 -->|Depends on| n152
  n98 -->|Depends on| n734
  n99 -->|Verifies| n133
  n99 -->|Verifies| n189
  n99 -->|In| n53
  n99 -->|Depends on| n133
  n99 -->|Depends on| n23
  n99 -->|Depends on| n21
  n99 -->|Depends on| n52
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n153
  n99 -->|Depends on| n158
  n99 -->|Depends on| n196
  n99 -->|Depends on| n69
  n99 -->|Depends on| n314
  n99 -->|Depends on| n318
  n100 -->|Verifies| n136
  n100 -->|Verifies| n382
  n100 -->|In| n53
  n100 -->|Depends on| n136
  n100 -->|Depends on| n42
  n100 -->|Depends on| n57
  n100 -->|Depends on| n158
  n100 -->|Depends on| n318
  n100 -->|Depends on| n152
  n100 -->|Depends on| n734
  n100 -->|Depends on| n97
  n104 -->|Verifies| n140
  n104 -->|Verifies| n134
  n104 -->|Verifies| n672
  n104 -->|Verifies| n197
  n104 -->|Verifies| n674
  n104 -->|Verifies| n390
  n104 -->|Verifies| n670
  n104 -->|Verifies| n180
  n104 -->|In| n53
  n104 -->|Depends on| n140
  n104 -->|Depends on| n134
  n104 -->|Depends on| n42
  n104 -->|Depends on| n57
  n104 -->|Depends on| n52
  n104 -->|Depends on| n41
  n104 -->|Depends on| n39
  n104 -->|Depends on| n22
  n104 -->|Depends on| n49
  n104 -->|Depends on| n23
  n104 -->|Depends on| n174
  n104 -->|Depends on| n17
  n104 -->|Depends on| n304
  n104 -->|Depends on| n153
  n104 -->|Depends on| n677
  n104 -->|Depends on| n103
  n104 -->|Depends on| n97
  n104 -->|Depends on| n158
  n104 -->|Depends on| n318
  n105 -->|Verifies| n142
  n105 -->|In| n53
  n105 -->|Depends on| n142
  n105 -->|Depends on| n57
  n105 -->|Depends on| n21
  n105 -->|Depends on| n41
  n105 -->|Depends on| n39
  n105 -->|Depends on| n153
  n105 -->|Depends on| n158
  n105 -->|Depends on| n318
  n106 -->|Verifies| n140
  n106 -->|Verifies| n197
  n106 -->|In| n53
  n106 -->|Depends on| n140
  n106 -->|Depends on| n42
  n106 -->|Depends on| n52
  n106 -->|Depends on| n41
  n106 -->|Depends on| n39
  n106 -->|Depends on| n22
  n106 -->|Depends on| n23
  n106 -->|Depends on| n174
  n106 -->|Depends on| n17
  n106 -->|Depends on| n197
  n106 -->|Depends on| n303
  n106 -->|Depends on| n153
  n106 -->|Depends on| n677
  n106 -->|Depends on| n103
  n106 -->|Depends on| n97
  n106 -->|Depends on| n158
  n106 -->|Depends on| n318
  n108 -->|Verifies| n112
  n108 -->|Verifies| n113
  n108 -->|Verifies| n118
  n108 -->|Verifies| n379
  n108 -->|In| n53
  n108 -->|Depends on| n112
  n108 -->|Depends on| n57
  n108 -->|Depends on| n41
  n108 -->|Depends on| n39
  n108 -->|Depends on| n158
  n108 -->|Depends on| n69
  n108 -->|Depends on| n318
  n110 -->|Verifies| n141
  n110 -->|Verifies| n119
  n110 -->|Verifies| n138
  n110 -->|Verifies| n603
  n110 -->|Verifies| n597
  n110 -->|Verifies| n605
  n110 -->|In| n53
  n110 -->|Depends on| n141
  n110 -->|Depends on| n119
  n110 -->|Depends on| n52
  n110 -->|Depends on| n158
  n110 -->|Depends on| n109
  n110 -->|Depends on| n318
  n111 -->|Serves| n454
  n111 -->|Part of| n55
  n111 -->|Depends on| n131
  n111 -->|Depends on| n180
  n111 -->|Depends on| n158
  n111 -->|Depends on| n153
  n111 -->|Depends on| n205
  n111 -->|Depends on| n203
  n111 -->|Depends on| n376
  n111 -->|Depends on| n415
  n111 -->|Depends on| n159
  n111 -->|Depends on| n734
  n111 -->|Depends on| n43
  n111 -->|Depends on| n22
  n111 -->|Depends on| n21
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n25
  n111 -->|Depends on| n181
  n111 -->|Depends on| n51
  n111 -->|Depends on| n700
  n111 -->|Depends on| n706
  n111 -->|Depends on| n303
  n111 -->|Depends on| n302
  n111 -->|Depends on| n206
  n111 -->|Depends on| n207
  n111 -->|Depends on| n209
  n111 -->|Depends on| n208
  n111 -->|Depends on| n151
  n111 -->|Depends on| n156
  n111 -->|Depends on| n17
  n111 -->|Depends on| n194
  n111 -->|Depends on| n152
  n112 -->|Serves| n461
  n112 -->|Part of| n55
  n112 -->|Depends on| n131
  n112 -->|Depends on| n113
  n112 -->|Depends on| n14
  n112 -->|Depends on| n39
  n112 -->|Depends on| n706
  n112 -->|Depends on| n51
  n112 -->|Depends on| n303
  n113 -->|Serves| n461
  n113 -->|Depends on| n131
  n113 -->|Depends on| n190
  n113 -->|Depends on| n118
  n113 -->|Depends on| n40
  n113 -->|Depends on| n196
  n113 -->|Depends on| n194
  n113 -->|Depends on| n153
  n113 -->|Depends on| n39
  n113 -->|Depends on| n303
  n113 -->|Depends on| n146
  n114 -->|Serves| n454
  n114 -->|Part of| n55
  n114 -->|Depends on| n131
  n114 -->|Depends on| n115
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n51
  n114 -->|Depends on| n303
  n115 -->|Serves| n454
  n115 -->|Depends on| n131
  n115 -->|Depends on| n172
  n115 -->|Depends on| n706
  n115 -->|Depends on| n167
  n115 -->|Depends on| n303
  n116 -->|Serves| n461
  n116 -->|Part of| n55
  n116 -->|Depends on| n131
  n116 -->|Depends on| n34
  n116 -->|Depends on| n328
  n116 -->|Depends on| n153
  n116 -->|Depends on| n21
  n116 -->|Depends on| n23
  n116 -->|Depends on| n39
  n116 -->|Depends on| n334
  n116 -->|Depends on| n151
  n116 -->|Depends on| n51
  n116 -->|Depends on| n700
  n116 -->|Depends on| n706
  n116 -->|Depends on| n303
  n117 -->|Serves| n454
  n117 -->|Part of| n55
  n117 -->|Depends on| n153
  n117 -->|Depends on| n131
  n117 -->|Depends on| n190
  n117 -->|Depends on| n585
  n117 -->|Depends on| n603
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n303
  n118 -->|Serves| n454
  n118 -->|Depends on| n303
  n118 -->|Depends on| n314
  n119 -->|Serves| n454
  n119 -->|Part of| n55
  n119 -->|Depends on| n158
  n119 -->|Depends on| n131
  n119 -->|Depends on| n138
  n119 -->|Depends on| n174
  n119 -->|Depends on| n201
  n119 -->|Depends on| n115
  n119 -->|Depends on| n132
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n41
  n119 -->|Depends on| n51
  n119 -->|Depends on| n303
  n120 -->|Serves| n454
  n120 -->|Part of| n55
  n120 -->|Depends on| n131
  n120 -->|Depends on| n172
  n120 -->|Depends on| n115
  n120 -->|Depends on| n16
  n120 -->|Depends on| n163
  n120 -->|Depends on| n352
  n120 -->|Depends on| n353
  n120 -->|Depends on| n232
  n120 -->|Depends on| n162
  n120 -->|Depends on| n21
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n51
  n120 -->|Depends on| n303
  n121 -->|Serves| n454
  n121 -->|Part of| n55
  n121 -->|Depends on| n131
  n121 -->|Depends on| n177
  n121 -->|Depends on| n113
  n121 -->|Depends on| n14
  n121 -->|Depends on| n39
  n122 -->|Serves| n454
  n122 -->|Part of| n55
  n122 -->|Depends on| n131
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
  n122 -->|Depends on| n153
  n122 -->|Depends on| n17
  n122 -->|Depends on| n39
  n122 -->|Depends on| n51
  n122 -->|Depends on| n303
  n124 -->|Serves| n454
  n124 -->|Part of| n55
  n124 -->|Depends on| n131
  n124 -->|Depends on| n192
  n124 -->|Depends on| n585
  n124 -->|Depends on| n603
  n124 -->|Depends on| n595
  n124 -->|Depends on| n51
  n125 -->|Serves| n454
  n125 -->|Depends on| n56
  n125 -->|Depends on| n736
  n126 -->|Serves| n454
  n126 -->|Part of| n55
  n126 -->|Depends on| n131
  n126 -->|Depends on| n125
  n126 -->|Depends on| n21
  n126 -->|Depends on| n23
  n126 -->|Depends on| n39
  n126 -->|Depends on| n51
  n126 -->|Depends on| n158
  n126 -->|Depends on| n303
  n127 -->|Serves| n454
  n127 -->|Part of| n55
  n127 -->|Depends on| n153
  n127 -->|Depends on| n131
  n127 -->|Depends on| n176
  n127 -->|Depends on| n351
  n127 -->|Depends on| n194
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n51
  n127 -->|Depends on| n303
  n128 -->|Serves| n454
  n128 -->|Part of| n55
  n128 -->|Depends on| n131
  n128 -->|Depends on| n132
  n128 -->|Depends on| n201
  n128 -->|Depends on| n51
  n128 -->|Depends on| n702
  n128 -->|Depends on| n704
  n128 -->|Depends on| n303
  n129 -->|Serves| n461
  n129 -->|Part of| n55
  n129 -->|Depends on| n131
  n129 -->|Depends on| n153
  n129 -->|Depends on| n194
  n129 -->|Depends on| n40
  n129 -->|Depends on| n155
  n129 -->|Depends on| n206
  n129 -->|Depends on| n21
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n151
  n129 -->|Depends on| n734
  n129 -->|Depends on| n736
  n129 -->|Depends on| n722
  n129 -->|Depends on| n716
  n129 -->|Depends on| n717
  n129 -->|Depends on| n714
  n129 -->|Depends on| n713
  n129 -->|Depends on| n725
  n129 -->|Depends on| n731
  n129 -->|Depends on| n733
  n129 -->|Depends on| n723
  n129 -->|Depends on| n51
  n129 -->|Depends on| n303
  n129 -->|Depends on| n41
  n129 -->|Depends on| n158
  n129 -->|Depends on| n135
  n129 -->|Depends on| n152
  n129 -->|Depends on| n721
  n129 -->|Depends on| n719
  n130 -->|Serves| n454
  n130 -->|Part of| n55
  n130 -->|Depends on| n153
  n130 -->|Depends on| n706
  n130 -->|Depends on| n131
  n130 -->|Depends on| n190
  n130 -->|Depends on| n118
  n130 -->|Depends on| n21
  n130 -->|Depends on| n39
  n130 -->|Depends on| n51
  n130 -->|Depends on| n303
  n131 -->|Serves| n454
  n131 -->|Depends on| n158
  n131 -->|Depends on| n174
  n131 -->|Depends on| n173
  n131 -->|Depends on| n187
  n131 -->|Depends on| n201
  n131 -->|Depends on| n189
  n131 -->|Depends on| n581
  n131 -->|Depends on| n51
  n131 -->|Depends on| n41
  n131 -->|Depends on| n17
  n131 -->|Depends on| n459
  n131 -->|Depends on| n453
  n131 -->|Depends on| n706
  n131 -->|Depends on| n704
  n131 -->|Depends on| n702
  n131 -->|Depends on| n303
  n131 -->|Depends on| n153
  n131 -->|Depends on| n196
  n131 -->|Depends on| n132
  n132 -->|Serves| n454
  n132 -->|Depends on| n202
  n132 -->|Depends on| n303
  n133 -->|Serves| n461
  n133 -->|Part of| n55
  n133 -->|Depends on| n131
  n133 -->|Depends on| n189
  n133 -->|Depends on| n23
  n133 -->|Depends on| n51
  n133 -->|Depends on| n706
  n133 -->|Depends on| n704
  n133 -->|Depends on| n702
  n133 -->|Depends on| n303
  n134 -->|Serves| n675
  n134 -->|Part of| n55
  n134 -->|Depends on| n158
  n134 -->|Depends on| n131
  n134 -->|Depends on| n672
  n134 -->|Depends on| n23
  n134 -->|Depends on| n39
  n134 -->|Depends on| n51
  n134 -->|Depends on| n303
  n135 -->|Serves| n461
  n135 -->|Depends on| n736
  n135 -->|Depends on| n722
  n135 -->|Depends on| n716
  n135 -->|Depends on| n717
  n135 -->|Depends on| n714
  n135 -->|Depends on| n713
  n135 -->|Depends on| n725
  n135 -->|Depends on| n731
  n135 -->|Depends on| n733
  n135 -->|Depends on| n719
  n135 -->|Depends on| n723
  n136 -->|Serves| n461
  n136 -->|Part of| n55
  n136 -->|Depends on| n131
  n136 -->|Depends on| n153
  n136 -->|Depends on| n194
  n136 -->|Depends on| n152
  n136 -->|Depends on| n21
  n136 -->|Depends on| n22
  n136 -->|Depends on| n39
  n136 -->|Depends on| n51
  n136 -->|Depends on| n303
  n137 -->|Serves| n461
  n137 -->|Part of| n55
  n137 -->|Depends on| n131
  n137 -->|Depends on| n153
  n137 -->|Depends on| n194
  n137 -->|Depends on| n190
  n137 -->|Depends on| n585
  n137 -->|Depends on| n261
  n137 -->|Depends on| n260
  n137 -->|Depends on| n209
  n137 -->|Depends on| n208
  n137 -->|Depends on| n21
  n137 -->|Depends on| n23
  n137 -->|Depends on| n22
  n137 -->|Depends on| n39
  n137 -->|Depends on| n25
  n137 -->|Depends on| n181
  n137 -->|Depends on| n734
  n137 -->|Depends on| n17
  n137 -->|Depends on| n51
  n137 -->|Depends on| n303
  n137 -->|Depends on| n302
  n137 -->|Depends on| n235
  n137 -->|Depends on| n733
  n137 -->|Depends on| n140
  n137 -->|Depends on| n158
  n138 -->|Serves| n454
  n138 -->|Depends on| n158
  n138 -->|Depends on| n151
  n138 -->|Depends on| n131
  n138 -->|Depends on| n201
  n138 -->|Depends on| n585
  n138 -->|Depends on| n603
  n138 -->|Depends on| n51
  n138 -->|Depends on| n303
  n139 -->|Serves| n454
  n139 -->|Part of| n55
  n139 -->|Depends on| n114
  n139 -->|Depends on| n41
  n140 -->|Serves| n675
  n140 -->|Part of| n55
  n140 -->|Depends on| n158
  n140 -->|Depends on| n131
  n140 -->|Depends on| n120
  n140 -->|Depends on| n172
  n140 -->|Depends on| n115
  n140 -->|Depends on| n672
  n140 -->|Depends on| n674
  n140 -->|Depends on| n675
  n140 -->|Depends on| n16
  n140 -->|Depends on| n163
  n140 -->|Depends on| n671
  n140 -->|Depends on| n41
  n140 -->|Depends on| n21
  n140 -->|Depends on| n23
  n140 -->|Depends on| n39
  n140 -->|Depends on| n51
  n140 -->|Depends on| n180
  n140 -->|Depends on| n303
  n141 -->|Serves| n454
  n141 -->|Part of| n55
  n141 -->|Depends on| n131
  n141 -->|Depends on| n138
  n142 -->|Serves| n461
  n142 -->|Part of| n55
  n142 -->|Depends on| n153
  n142 -->|Depends on| n131
  n142 -->|Depends on| n190
  n142 -->|Depends on| n585
  n142 -->|Depends on| n23
  n142 -->|Depends on| n39
  n142 -->|Depends on| n51
  n142 -->|Depends on| n303
  n143 -->|Serves| n454
  n143 -->|Part of| n55
  n143 -->|Depends on| n131
  n143 -->|Depends on| n174
  n143 -->|Depends on| n201
  n143 -->|Depends on| n187
  n143 -->|Depends on| n51
  n143 -->|Depends on| n706
  n143 -->|Depends on| n704
  n143 -->|Depends on| n702
  n143 -->|Depends on| n303
  n144 -->|Serves| n461
  n144 -->|Part of| n55
  n144 -->|Depends on| n131
  n144 -->|Depends on| n21
  n144 -->|Depends on| n23
  n144 -->|Depends on| n39
  n144 -->|Depends on| n334
  n144 -->|Depends on| n733
  n144 -->|Depends on| n41
  n144 -->|Depends on| n158
  n144 -->|Depends on| n51
  n144 -->|Depends on| n303
  n145 -->|Serves| n461
  n145 -->|Part of| n55
  n145 -->|Depends on| n131
  n145 -->|Depends on| n153
  n145 -->|Depends on| n194
  n145 -->|Depends on| n21
  n145 -->|Depends on| n23
  n145 -->|Depends on| n152
  n145 -->|Depends on| n40
  n145 -->|Depends on| n206
  n145 -->|Depends on| n39
  n145 -->|Depends on| n33
  n145 -->|Depends on| n327
  n145 -->|Depends on| n151
  n145 -->|Depends on| n734
  n145 -->|Depends on| n51
  n145 -->|Depends on| n303
  n145 -->|Depends on| n41
  n145 -->|Depends on| n158
  n162 -->|Read in| n215
  n162 -->|Depends on| n214
  n162 -->|Depends on| n217
  n163 -->|Serves| n454
  n163 -->|Depends on| n31
  n163 -->|Depends on| n161
  n167 -->|Serves| n461
  n167 -->|Depends on| n311
  n168 -->|Serves| n461
  n168 -->|Applied by| n167
  n168 -->|Applied by| n311
  n170 -->|Serves| n461
  n170 -->|Depends on| n166
  n171 -->|Serves| n461
  n172 -->|Serves| n454
  n172 -->|Depends on| n158
  n172 -->|Depends on| n153
  n172 -->|Depends on| n39
  n172 -->|Depends on| n202
  n172 -->|Depends on| n40
  n172 -->|Depends on| n235
  n172 -->|Depends on| n304
  n172 -->|Depends on| n152
  n172 -->|Depends on| n734
  n173 -->|Serves| n454
  n173 -->|Depends on| n147
  n173 -->|Depends on| n193
  n173 -->|Depends on| n196
  n173 -->|Depends on| n40
  n173 -->|Depends on| n167
  n173 -->|Depends on| n149
  n173 -->|Depends on| n153
  n173 -->|Depends on| n319
  n173 -->|Depends on| n197
  n173 -->|Depends on| n170
  n174 -->|Serves| n454
  n174 -->|Depends on| n153
  n174 -->|Depends on| n459
  n174 -->|Depends on| n175
  n174 -->|Depends on| n196
  n174 -->|Depends on| n193
  n174 -->|Depends on| n31
  n174 -->|Depends on| n21
  n174 -->|Depends on| n39
  n174 -->|Depends on| n198
  n174 -->|Depends on| n194
  n174 -->|Depends on| n184
  n174 -->|Depends on| n202
  n174 -->|Depends on| n235
  n174 -->|Depends on| n40
  n174 -->|Depends on| n304
  n174 -->|Depends on| n182
  n174 -->|Depends on| n49
  n174 -->|Depends on| n180
  n174 -->|Depends on| n28
  n174 -->|Depends on| n152
  n174 -->|Depends on| n185
  n175 -->|Serves| n454
  n176 -->|Serves| n454
  n176 -->|Depends on| n158
  n176 -->|Depends on| n17
  n176 -->|Depends on| n41
  n176 -->|Depends on| n314
  n177 -->|Serves| n454
  n177 -->|Depends on| n178
  n177 -->|Depends on| n158
  n177 -->|Depends on| n153
  n177 -->|Depends on| n51
  n177 -->|Depends on| n699
  n177 -->|Depends on| n17
  n177 -->|Depends on| n54
  n177 -->|Depends on| n452
  n177 -->|Depends on| n26
  n177 -->|Depends on| n21
  n177 -->|Depends on| n39
  n177 -->|Depends on| n194
  n177 -->|Depends on| n176
  n177 -->|Depends on| n179
  n177 -->|Depends on| n351
  n177 -->|Depends on| n595
  n177 -->|Depends on| n306
  n177 -->|Depends on| n311
  n177 -->|Depends on| n307
  n179 -->|Serves| n454
  n179 -->|Depends on| n167
  n179 -->|Depends on| n314
  n180 -->|Serves| n454
  n180 -->|Depends on| n153
  n180 -->|Depends on| n205
  n180 -->|Depends on| n734
  n180 -->|Depends on| n194
  n180 -->|Depends on| n21
  n180 -->|Depends on| n39
  n180 -->|Depends on| n25
  n180 -->|Depends on| n181
  n180 -->|Depends on| n151
  n182 -->|Serves| n454
  n183 -->|Serves| n454
  n184 -->|Serves| n454
  n184 -->|Depends on| n40
  n184 -->|Depends on| n156
  n184 -->|Depends on| n304
  n184 -->|Depends on| n313
  n184 -->|Depends on| n306
  n184 -->|Depends on| n167
  n184 -->|Depends on| n193
  n184 -->|Depends on| n196
  n184 -->|Depends on| n164
  n184 -->|Depends on| n183
  n184 -->|Depends on| n462
  n184 -->|Depends on| n153
  n184 -->|Depends on| n734
  n184 -->|Depends on| n334
  n184 -->|Depends on| n170
  n184 -->|Depends on| n171
  n184 -->|Depends on| n182
  n185 -->|Serves| n454
  n185 -->|Depends on| n459
  n185 -->|Depends on| n304
  n187 -->|Serves| n454
  n187 -->|Depends on| n27
  n187 -->|Depends on| n235
  n187 -->|Depends on| n154
  n187 -->|Depends on| n153
  n187 -->|Depends on| n456
  n187 -->|Depends on| n451
  n187 -->|Depends on| n183
  n187 -->|Depends on| n457
  n187 -->|Depends on| n458
  n187 -->|Depends on| n196
  n187 -->|Depends on| n21
  n187 -->|Depends on| n39
  n187 -->|Depends on| n194
  n187 -->|Depends on| n184
  n187 -->|Depends on| n40
  n187 -->|Depends on| n152
  n187 -->|Depends on| n312
  n187 -->|Depends on| n243
  n187 -->|Depends on| n237
  n187 -->|Depends on| n239
  n187 -->|Depends on| n247
  n187 -->|Depends on| n256
  n187 -->|Depends on| n253
  n187 -->|Depends on| n251
  n187 -->|Depends on| n241
  n188 -->|Serves| n255
  n188 -->|Applied by| n187
  n188 -->|Applied by| n201
  n189 -->|Serves| n461
  n189 -->|Depends on| n153
  n189 -->|Depends on| n151
  n189 -->|Depends on| n196
  n189 -->|Depends on| n269
  n189 -->|Depends on| n21
  n189 -->|Depends on| n39
  n189 -->|Depends on| n40
  n189 -->|Depends on| n314
  n190 -->|Serves| n461
  n190 -->|Depends on| n151
  n190 -->|Depends on| n193
  n190 -->|Depends on| n40
  n190 -->|Depends on| n314
  n192 -->|Serves| n454
  n192 -->|Depends on| n153
  n192 -->|Depends on| n450
  n192 -->|Depends on| n191
  n192 -->|Depends on| n17
  n192 -->|Depends on| n190
  n192 -->|Depends on| n201
  n192 -->|Depends on| n311
  n193 -->|Serves| n454
  n193 -->|Depends on| n680
  n194 -->|Serves| n454
  n194 -->|Depends on| n153
  n194 -->|Depends on| n21
  n194 -->|Depends on| n39
  n194 -->|Depends on| n206
  n194 -->|Depends on| n40
  n194 -->|Depends on| n152
  n194 -->|Depends on| n734
  n195 -->|Serves| n454
  n195 -->|Implements| n28
  n195 -->|Depends on| n21
  n195 -->|Depends on| n39
  n195 -->|Depends on| n25
  n195 -->|Depends on| n186
  n195 -->|Depends on| n46
  n196 -->|Serves| n454
  n196 -->|Depends on| n156
  n196 -->|Depends on| n258
  n197 -->|Serves| n454
  n197 -->|Depends on| n303
  n198 -->|Serves| n454
  n198 -->|Depends on| n736
  n198 -->|Depends on| n196
  n198 -->|Depends on| n200
  n198 -->|Depends on| n56
  n198 -->|Depends on| n27
  n198 -->|Depends on| n46
  n198 -->|Depends on| n25
  n198 -->|Depends on| n39
  n198 -->|Depends on| n193
  n198 -->|Depends on| n148
  n198 -->|Depends on| n304
  n198 -->|Depends on| n735
  n198 -->|Depends on| n154
  n198 -->|Depends on| n40
  n199 -->|Serves| n461
  n199 -->|Applied by| n184
  n199 -->|Applied by| n201
  n201 -->|Serves| n454
  n201 -->|Depends on| n235
  n201 -->|Depends on| n147
  n201 -->|Depends on| n160
  n201 -->|Depends on| n149
  n201 -->|Depends on| n153
  n201 -->|Depends on| n31
  n201 -->|Depends on| n21
  n201 -->|Depends on| n39
  n201 -->|Depends on| n40
  n201 -->|Depends on| n194
  n201 -->|Depends on| n314
  n201 -->|Depends on| n319
  n201 -->|Depends on| n245
  n201 -->|Depends on| n237
  n201 -->|Depends on| n253
  n201 -->|Depends on| n249
  n202 -->|Serves| n454
  n202 -->|Depends on| n157
  n202 -->|Depends on| n156
  n202 -->|Depends on| n153
  n202 -->|Depends on| n39
  n202 -->|Depends on| n40
  n202 -->|Depends on| n235
  n202 -->|Depends on| n304
  n203 -->|Refines| n454
  n204 -->|Accepts| n203
  n208 -->|Serves| n454
  n208 -->|Depends on| n209
  n208 -->|Depends on| n736
  n208 -->|Depends on| n156
  n208 -->|Depends on| n716
  n208 -->|Depends on| n722
  n208 -->|Depends on| n720
  n208 -->|Depends on| n723
  n208 -->|Depends on| n717
  n208 -->|Depends on| n714
  n208 -->|Depends on| n713
  n208 -->|Depends on| n724
  n208 -->|Depends on| n731
  n208 -->|Depends on| n733
  n208 -->|Depends on| n719
  n210 -->|Read in| n215
  n211 -->|Read in| n215
  n212 -->|Read in| n215
  n213 -->|Read in| n215
  n214 -->|Read in| n215
  n215 -->|Queries written in| n679
  n215 -->|Read by| n688
  n215 -->|Uses| n322
  n216 -->|Read in| n215
  n217 -->|Read in| n215
  n217 -->|Depends on| n213
  n218 -->|Read in| n225
  n219 -->|Read in| n225
  n220 -->|Read in| n225
  n221 -->|Read in| n225
  n221 -->|Depends on| n226
  n221 -->|Depends on| n223
  n222 -->|Read in| n225
  n222 -->|Depends on| n226
  n222 -->|Depends on| n223
  n223 -->|Read in| n225
  n224 -->|Read in| n225
  n224 -->|Depends on| n222
  n225 -->|Queries written in| n679
  n225 -->|Read by| n688
  n225 -->|Uses| n325
  n226 -->|Read in| n225
  n226 -->|Depends on| n220
  n227 -->|Read in| n734
  n228 -->|Read in| n215
  n229 -->|Read in| n215
  n230 -->|Read in| n215
  n232 -->|Read in| n225
  n232 -->|Depends on| n222
  n233 -->|Read in| n215
  n234 -->|Read in| n225
  n234 -->|Depends on| n220
  n235 -->|Serves| n454
  n235 -->|Depends on| n688
  n235 -->|Depends on| n681
  n235 -->|Depends on| n734
  n235 -->|Depends on| n215
  n235 -->|Depends on| n737
  n235 -->|Depends on| n695
  n235 -->|Depends on| n696
  n235 -->|Depends on| n697
  n235 -->|Depends on| n31
  n235 -->|Depends on| n21
  n235 -->|Depends on| n39
  n235 -->|Depends on| n308
  n236 -->|Serves| n454
  n236 -->|Applied by| n235
  n236 -->|Applied by| n351
  n237 -->|Refines| n255
  n238 -->|Accepts| n237
  n239 -->|Refines| n255
  n240 -->|Accepts| n239
  n241 -->|Refines| n255
  n242 -->|Accepts| n241
  n243 -->|Refines| n255
  n244 -->|Accepts| n243
  n245 -->|Refines| n255
  n246 -->|Accepts| n245
  n247 -->|Refines| n255
  n248 -->|Accepts| n247
  n249 -->|Refines| n255
  n250 -->|Accepts| n249
  n251 -->|Refines| n253
  n251 -->|Depends on| n253
  n252 -->|Accepts| n251
  n253 -->|Refines| n255
  n254 -->|Accepts| n253
  n256 -->|Refines| n255
  n257 -->|Accepts| n256
  n258 -->|Refines| n463
  n259 -->|Accepts| n258
  n261 -->|Refines| n463
  n262 -->|Accepts| n261
  n263 -->|Read in| n225
  n263 -->|Depends on| n222
  n264 -->|Defined by| n270
  n264 -->|Depends on| n270
  n265 -->|Defined by| n270
  n265 -->|Depends on| n270
  n266 -->|Defined by| n270
  n266 -->|Depends on| n270
  n267 -->|Defined by| n270
  n267 -->|Depends on| n270
  n267 -->|Depends on| n265
  n268 -->|Defined by| n270
  n268 -->|Depends on| n270
  n268 -->|Depends on| n264
  n269 -->|Defined by| n270
  n269 -->|Depends on| n270
  n269 -->|Depends on| n264
  n271 -->|Read in| n225
  n271 -->|Depends on| n226
  n271 -->|Depends on| n223
  n271 -->|Depends on| n222
  n271 -->|Depends on| n265
  n272 -->|Defined by| n270
  n272 -->|Depends on| n270
  n274 -->|Defined by| n270
  n274 -->|Depends on| n270
  n275 -->|Defined by| n270
  n275 -->|Depends on| n270
  n276 -->|Defined by| n270
  n276 -->|Depends on| n270
  n277 -->|Depends on| n153
  n278 -->|Read in| n225
  n278 -->|Depends on| n222
  n279 -->|Defined by| n270
  n279 -->|Depends on| n270
  n280 -->|Defined by| n273
  n280 -->|Depends on| n273
  n280 -->|Depends on| n283
  n280 -->|Depends on| n282
  n281 -->|Defined by| n273
  n281 -->|Depends on| n273
  n281 -->|Depends on| n270
  n282 -->|Defined by| n273
  n282 -->|Depends on| n273
  n283 -->|Defined by| n273
  n283 -->|Depends on| n273
  n283 -->|Depends on| n270
  n288 -->|Defined by| n294
  n288 -->|Depends on| n294
  n288 -->|Depends on| n300
  n289 -->|Defined by| n294
  n289 -->|Depends on| n294
  n290 -->|Defined by| n294
  n290 -->|Depends on| n294
  n291 -->|Defined by| n294
  n291 -->|Depends on| n294
  n292 -->|Defined by| n294
  n292 -->|Depends on| n294
  n292 -->|Depends on| n291
  n293 -->|Defined by| n294
  n293 -->|Depends on| n294
  n293 -->|Depends on| n291
  n295 -->|Defined by| n294
  n295 -->|Depends on| n294
  n296 -->|Defined by| n294
  n296 -->|Depends on| n294
  n296 -->|Depends on| n295
  n297 -->|Defined by| n294
  n297 -->|Depends on| n294
  n297 -->|Depends on| n295
  n298 -->|Defined by| n294
  n298 -->|Depends on| n294
  n298 -->|Depends on| n293
  n299 -->|Defined by| n294
  n299 -->|Depends on| n294
  n299 -->|Depends on| n300
  n300 -->|Defined by| n294
  n300 -->|Depends on| n294
  n301 -->|Defined by| n294
  n301 -->|Depends on| n294
  n301 -->|Depends on| n295
  n302 -->|Written in| n311
  n302 -->|Depends on| n311
  n303 -->|Written in| n311
  n303 -->|Depends on| n311
  n304 -->|Written in| n311
  n304 -->|Depends on| n311
  n304 -->|Depends on| n313
  n305 -->|Serves| n461
  n305 -->|Applied by| n304
  n305 -->|Applied by| n319
  n305 -->|Applied by| n307
  n305 -->|Applied by| n303
  n305 -->|Applied by| n318
  n305 -->|Applied by| n302
  n305 -->|Applied by| n315
  n305 -->|Applied by| n313
  n306 -->|Serves| n461
  n306 -->|Depends on| n311
  n307 -->|Written in| n311
  n307 -->|Depends on| n311
  n307 -->|Depends on| n313
  n308 -->|Written in| n311
  n309 -->|Written in| n311
  n310 -->|Written in| n311
  n312 -->|Written in| n311
  n313 -->|Serves| n461
  n313 -->|Depends on| n311
  n314 -->|Written in| n311
  n315 -->|Written in| n311
  n315 -->|Depends on| n311
  n316 -->|Written in| n311
  n317 -->|Written in| n311
  n318 -->|Written in| n311
  n318 -->|Depends on| n311
  n319 -->|Written in| n311
  n319 -->|Depends on| n311
  n320 -->|Written in| n311
  n321 -->|Serves| n461
  n327 -->|Serves| n461
  n329 -->|Serves| n461
  n330 -->|Serves| n461
  n334 -->|Serves| n461
  n336 -->|Defined by| n365
  n336 -->|Read in| n225
  n336 -->|Depends on| n365
  n336 -->|Depends on| n354
  n336 -->|Depends on| n222
  n337 -->|Defined by| n365
  n337 -->|Read in| n225
  n337 -->|Depends on| n365
  n337 -->|Depends on| n158
  n337 -->|Depends on| n344
  n337 -->|Depends on| n221
  n337 -->|Depends on| n222
  n338 -->|Defined by| n365
  n338 -->|Read in| n225
  n338 -->|Depends on| n365
  n338 -->|Depends on| n354
  n338 -->|Depends on| n222
  n339 -->|Defined by| n365
  n339 -->|Read in| n225
  n339 -->|Depends on| n365
  n339 -->|Depends on| n354
  n339 -->|Depends on| n221
  n339 -->|Depends on| n222
  n340 -->|Defined by| n365
  n340 -->|Read in| n225
  n340 -->|Depends on| n365
  n340 -->|Depends on| n354
  n340 -->|Depends on| n221
  n340 -->|Depends on| n222
  n340 -->|Depends on| n358
  n341 -->|Defined by| n365
  n341 -->|Read in| n225
  n341 -->|Depends on| n365
  n341 -->|Depends on| n354
  n341 -->|Depends on| n221
  n341 -->|Depends on| n222
  n342 -->|Defined by| n365
  n342 -->|Read in| n225
  n342 -->|Depends on| n365
  n342 -->|Depends on| n287
  n342 -->|Depends on| n1
  n342 -->|Depends on| n221
  n342 -->|Depends on| n222
  n342 -->|Depends on| n234
  n342 -->|Depends on| n231
  n343 -->|Read in| n225
  n343 -->|Depends on| n226
  n344 -->|Defined by| n365
  n344 -->|Read in| n225
  n344 -->|Depends on| n365
  n344 -->|Depends on| n7
  n344 -->|Depends on| n221
  n344 -->|Depends on| n222
  n344 -->|Depends on| n234
  n344 -->|Depends on| n216
  n346 -->|Defined by| n365
  n346 -->|Read in| n225
  n346 -->|Depends on| n365
  n346 -->|Depends on| n354
  n346 -->|Depends on| n221
  n346 -->|Depends on| n222
  n346 -->|Depends on| n336
  n346 -->|Depends on| n340
  n347 -->|Defined by| n365
  n347 -->|Read in| n215
  n347 -->|Depends on| n365
  n347 -->|Depends on| n229
  n347 -->|Depends on| n228
  n348 -->|Uses the variables of| n9
  n348 -->|Uses the variables of| n12
  n348 -->|Uses the variables of| n6
  n348 -->|Styles| n351
  n349 -->|Defined by| n365
  n349 -->|Read in| n225
  n349 -->|Depends on| n365
  n349 -->|Depends on| n354
  n349 -->|Depends on| n222
  n351 -->|Serves| n454
  n351 -->|Depends on| n352
  n351 -->|Depends on| n361
  n351 -->|Depends on| n7
  n351 -->|Depends on| n13
  n351 -->|Depends on| n4
  n351 -->|Depends on| n9
  n351 -->|Depends on| n8
  n351 -->|Depends on| n12
  n351 -->|Depends on| n5
  n351 -->|Depends on| n10
  n351 -->|Depends on| n3
  n351 -->|Depends on| n6
  n351 -->|Depends on| n45
  n351 -->|Depends on| n21
  n351 -->|Depends on| n16
  n351 -->|Depends on| n19
  n351 -->|Depends on| n359
  n351 -->|Depends on| n364
  n351 -->|Depends on| n362
  n351 -->|Depends on| n347
  n351 -->|Depends on| n343
  n351 -->|Depends on| n355
  n351 -->|Depends on| n353
  n351 -->|Depends on| n214
  n351 -->|Depends on| n213
  n351 -->|Depends on| n314
  n351 -->|Depends on| n311
  n351 -->|Depends on| n688
  n351 -->|Depends on| n225
  n351 -->|Depends on| n215
  n353 -->|Defined by| n365
  n353 -->|Read in| n225
  n353 -->|Depends on| n365
  n353 -->|Depends on| n218
  n353 -->|Depends on| n226
  n353 -->|Depends on| n223
  n353 -->|Depends on| n222
  n355 -->|Defined by| n365
  n355 -->|Read in| n225
  n355 -->|Depends on| n365
  n355 -->|Depends on| n232
  n355 -->|Depends on| n227
  n355 -->|Depends on| n721
  n355 -->|Depends on| n710
  n356 -->|Uses the variables of| n7
  n356 -->|Uses the variables of| n13
  n356 -->|Uses the variables of| n9
  n356 -->|Uses the variables of| n8
  n356 -->|Uses the variables of| n12
  n356 -->|Uses the variables of| n5
  n356 -->|Uses the variables of| n10
  n356 -->|Uses the variables of| n3
  n356 -->|Uses the variables of| n6
  n356 -->|Styles| n351
  n358 -->|Defined by| n365
  n358 -->|Read in| n225
  n358 -->|Depends on| n365
  n358 -->|Depends on| n357
  n358 -->|Depends on| n354
  n358 -->|Depends on| n221
  n358 -->|Depends on| n222
  n359 -->|Defined by| n365
  n359 -->|Read in| n225
  n359 -->|Depends on| n365
  n359 -->|Depends on| n221
  n359 -->|Depends on| n360
  n359 -->|Depends on| n346
  n359 -->|Depends on| n342
  n360 -->|Defined by| n365
  n360 -->|Read in| n225
  n360 -->|Depends on| n365
  n360 -->|Depends on| n221
  n360 -->|Depends on| n337
  n360 -->|Depends on| n338
  n360 -->|Depends on| n339
  n360 -->|Depends on| n349
  n360 -->|Depends on| n341
  n362 -->|Defined by| n365
  n362 -->|Read in| n215
  n362 -->|Depends on| n365
  n362 -->|Depends on| n214
  n362 -->|Depends on| n213
  n362 -->|Depends on| n216
  n362 -->|Depends on| n212
  n363 -->|Serves| n461
  n363 -->|Applied by| n356
  n363 -->|Applied by| n348
  n363 -->|Applied by| n364
  n363 -->|Applied by| n347
  n363 -->|Applied by| n351
  n364 -->|Defined by| n365
  n364 -->|Read in| n215
  n364 -->|Depends on| n365
  n364 -->|Depends on| n214
  n364 -->|Depends on| n229
  n364 -->|Depends on| n228
  n364 -->|Depends on| n211
  n364 -->|Depends on| n230
  n364 -->|Depends on| n217
  n364 -->|Depends on| n213
  n366 -->|Chooses| n379
  n366 -->|In| n30
  n366 -->|In| n53
  n366 -->|Serves| n455
  n367 -->|Chooses| n406
  n367 -->|In| n30
  n367 -->|In| n53
  n367 -->|Serves| n455
  n368 -->|Implements| n21
  n369 -->|Implements| n22
  n370 -->|Implements| n23
  n372 -->|Chooses| n417
  n372 -->|Chooses| n405
  n372 -->|In| n30
  n372 -->|In| n53
  n372 -->|Serves| n455
  n373 -->|Implements| n16
  n373 -->|Uses| n323
  n374 -->|Chooses| n373
  n374 -->|In| n30
  n374 -->|In| n53
  n374 -->|Serves| n455
  n375 -->|Implements| n41
  n375 -->|Implements| n43
  n375 -->|Implements| n42
  n375 -->|Depends on| n376
  n375 -->|Depends on| n39
  n375 -->|Depends on| n158
  n375 -->|Depends on| n316
  n377 -->|Chooses| n384
  n377 -->|Chooses| n399
  n377 -->|In| n53
  n377 -->|Serves| n455
  n378 -->|Chooses| n387
  n378 -->|Chooses| n413
  n378 -->|Chooses| n400
  n378 -->|Chooses| n375
  n378 -->|Chooses| n385
  n378 -->|In| n53
  n378 -->|Serves| n455
  n379 -->|Implements| n14
  n379 -->|Depends on| n21
  n379 -->|Depends on| n23
  n379 -->|Depends on| n736
  n379 -->|Depends on| n716
  n379 -->|Depends on| n717
  n379 -->|Depends on| n714
  n379 -->|Depends on| n713
  n379 -->|Depends on| n725
  n379 -->|Depends on| n731
  n379 -->|Depends on| n733
  n379 -->|Depends on| n719
  n379 -->|Depends on| n723
  n381 -->|Depends on| n22
  n381 -->|Depends on| n23
  n381 -->|Depends on| n21
  n381 -->|Depends on| n39
  n382 -->|Depends on| n22
  n382 -->|Depends on| n23
  n382 -->|Depends on| n21
  n382 -->|Depends on| n39
  n382 -->|Depends on| n383
  n382 -->|Depends on| n153
  n384 -->|Implements| n21
  n384 -->|Implements| n23
  n384 -->|Implements| n22
  n384 -->|Implements| n57
  n384 -->|Depends on| n39
  n384 -->|Depends on| n386
  n384 -->|Depends on| n316
  n385 -->|Implements| n26
  n385 -->|Implements| n47
  n385 -->|Depends on| n316
  n387 -->|Implements| n51
  n387 -->|Implements| n52
  n387 -->|Depends on| n380
  n387 -->|Depends on| n316
  n388 -->|Implements| n18
  n388 -->|Depends on| n51
  n388 -->|Depends on| n158
  n388 -->|Depends on| n316
  n389 -->|Implements| n19
  n389 -->|Depends on| n350
  n390 -->|Implements| n25
  n391 -->|Implements| n26
  n392 -->|Chooses| n368
  n392 -->|Chooses| n370
  n392 -->|Chooses| n369
  n392 -->|Chooses| n395
  n392 -->|Chooses| n396
  n392 -->|Chooses| n397
  n392 -->|Chooses| n414
  n392 -->|Chooses| n402
  n392 -->|Chooses| n401
  n392 -->|Chooses| n391
  n392 -->|In| n30
  n392 -->|Serves| n455
  n393 -->|Implements| n39
  n394 -->|Chooses| n393
  n394 -->|Chooses| n390
  n394 -->|Chooses| n389
  n394 -->|Chooses| n398
  n394 -->|Chooses| n388
  n394 -->|Chooses| n407
  n394 -->|In| n30
  n394 -->|In| n53
  n394 -->|Serves| n455
  n395 -->|Implements| n41
  n395 -->|Depends on| n421
  n395 -->|Depends on| n159
  n396 -->|Implements| n43
  n396 -->|Depends on| n421
  n397 -->|Implements| n51
  n397 -->|Depends on| n316
  n398 -->|Implements| n54
  n399 -->|Implements| n33
  n399 -->|Depends on| n23
  n399 -->|Depends on| n39
  n399 -->|Depends on| n153
  n399 -->|Depends on| n327
  n400 -->|Implements| n34
  n401 -->|Implements| n33
  n402 -->|Implements| n34
  n402 -->|Depends on| n167
  n403 -->|Depends on| n381
  n403 -->|Depends on| n382
  n404 -->|Chooses| n403
  n404 -->|In| n30
  n404 -->|In| n53
  n404 -->|Serves| n455
  n405 -->|Implements| n45
  n405 -->|Depends on| n371
  n405 -->|Depends on| n153
  n405 -->|Depends on| n205
  n405 -->|Depends on| n734
  n406 -->|Implements| n56
  n406 -->|Uses| n333
  n406 -->|Uses| n326
  n407 -->|Implements| n27
  n408 -->|Chooses| n195
  n408 -->|In| n30
  n408 -->|In| n53
  n408 -->|Serves| n455
  n409 -->|Implements| n46
  n410 -->|Chooses| n409
  n410 -->|In| n53
  n410 -->|Serves| n455
  n411 -->|Chooses| n412
  n411 -->|In| n30
  n411 -->|Serves| n455
  n412 -->|Implements| n46
  n412 -->|Depends on| n153
  n412 -->|Depends on| n371
  n412 -->|Depends on| n180
  n412 -->|Depends on| n186
  n413 -->|Implements| n17
  n413 -->|Depends on| n415
  n413 -->|Depends on| n416
  n414 -->|Implements| n17
  n414 -->|Depends on| n159
  n417 -->|Implements| n40
  n417 -->|Depends on| n371
  n418 -->|Chooses| n422
  n418 -->|In| n30
  n418 -->|In| n53
  n418 -->|Serves| n455
  n419 -->|Implements| n31
  n419 -->|Uses| n331
  n419 -->|Depends on| n40
  n419 -->|Depends on| n152
  n419 -->|Depends on| n734
  n420 -->|Chooses| n419
  n420 -->|In| n30
  n420 -->|In| n53
  n420 -->|Serves| n455
  n422 -->|Implements| n50
  n422 -->|Uses| n335
  n422 -->|Depends on| n316
  n423 -->|Serves| n454
  n423 -->|Applied by| n174
  n423 -->|Applied by| n129
  n424 -->|Serves| n461
  n424 -->|Applied by| n174
  n424 -->|Applied by| n187
  n425 -->|Serves| n461
  n425 -->|Applied by| n182
  n425 -->|Applied by| n184
  n426 -->|Serves| n454
  n426 -->|Applied by| n120
  n426 -->|Applied by| n162
  n427 -->|Serves| n454
  n427 -->|Applied by| n55
  n427 -->|Applied by| n44
  n427 -->|Applied by| n32
  n427 -->|Applied by| n29
  n428 -->|Serves| n461
  n428 -->|Applied by| n174
  n428 -->|Applied by| n688
  n429 -->|Serves| n454
  n429 -->|Applied by| n111
  n429 -->|Applied by| n203
  n429 -->|Applied by| n608
  n429 -->|Applied by| n614
  n430 -->|Serves| n454
  n430 -->|Applied by| n198
  n430 -->|Applied by| n56
  n430 -->|Applied by| n734
  n430 -->|Applied by| n148
  n431 -->|Serves| n454
  n431 -->|Applied by| n174
  n431 -->|Applied by| n117
  n432 -->|Serves| n461
  n432 -->|Applied by| n189
  n432 -->|Applied by| n133
  n433 -->|Serves| n461
  n433 -->|Applied by| n174
  n433 -->|Applied by| n173
  n433 -->|Applied by| n192
  n433 -->|Applied by| n198
  n433 -->|Applied by| n187
  n434 -->|Serves| n463
  n434 -->|Applied by| n194
  n434 -->|Applied by| n174
  n434 -->|Applied by| n173
  n434 -->|Applied by| n196
  n434 -->|Applied by| n258
  n434 -->|Applied by| n111
  n435 -->|Serves| n463
  n435 -->|Applied by| n194
  n435 -->|Applied by| n187
  n435 -->|Applied by| n145
  n435 -->|Applied by| n137
  n435 -->|Applied by| n261
  n435 -->|Applied by| n260
  n436 -->|Serves| n461
  n436 -->|Applied by| n681
  n436 -->|Applied by| n235
  n436 -->|Applied by| n174
  n436 -->|Applied by| n29
  n436 -->|Applied by| n32
  n437 -->|Serves| n454
  n437 -->|Applied by| n187
  n437 -->|Applied by| n174
  n437 -->|Applied by| n194
  n438 -->|Serves| n461
  n438 -->|Applied by| n174
  n438 -->|Applied by| n688
  n439 -->|Serves| n461
  n439 -->|Applied by| n117
  n439 -->|Applied by| n142
  n439 -->|Applied by| n190
  n439 -->|Applied by| n351
  n439 -->|Applied by| n172
  n440 -->|Serves| n454
  n440 -->|Applied by| n173
  n440 -->|Applied by| n184
  n440 -->|Applied by| n201
  n440 -->|Applied by| n44
  n441 -->|Serves| n463
  n441 -->|Applied by| n194
  n441 -->|Applied by| n145
  n441 -->|Applied by| n403
  n441 -->|Applied by| n111
  n441 -->|Applied by| n187
  n441 -->|Applied by| n129
  n442 -->|Serves| n454
  n442 -->|Applied by| n40
  n442 -->|Applied by| n154
  n442 -->|Applied by| n150
  n442 -->|Applied by| n187
  n443 -->|Serves| n454
  n443 -->|Applied by| n140
  n443 -->|Applied by| n134
  n443 -->|Applied by| n672
  n443 -->|Applied by| n677
  n443 -->|Applied by| n675
  n443 -->|Applied by| n645
  n443 -->|Applied by| n626
  n444 -->|Serves| n455
  n444 -->|Applied by| n394
  n444 -->|Applied by| n392
  n444 -->|Applied by| n378
  n444 -->|Applied by| n374
  n444 -->|Applied by| n418
  n444 -->|Applied by| n420
  n444 -->|Applied by| n367
  n444 -->|Applied by| n372
  n444 -->|Applied by| n582
  n444 -->|Applied by| n583
  n444 -->|Applied by| n602
  n444 -->|Applied by| n601
  n444 -->|Applied by| n594
  n444 -->|Applied by| n593
  n445 -->|Serves| n454
  n445 -->|Applied by| n111
  n445 -->|Applied by| n203
  n445 -->|Applied by| n609
  n445 -->|Applied by| n608
  n445 -->|Applied by| n617
  n446 -->|Serves| n454
  n446 -->|Applied by| n174
  n446 -->|Applied by| n202
  n447 -->|Serves| n454
  n447 -->|Applied by| n187
  n447 -->|Applied by| n617
  n448 -->|Serves| n454
  n448 -->|Applied by| n187
  n448 -->|Applied by| n201
  n448 -->|Applied by| n194
  n449 -->|Serves| n461
  n449 -->|Applied by| n688
  n449 -->|Applied by| n681
  n449 -->|Applied by| n304
  n449 -->|Applied by| n308
  n449 -->|Applied by| n312
  n449 -->|Applied by| n319
  n449 -->|Applied by| n314
  n449 -->|Applied by| n307
  n449 -->|Applied by| n303
  n449 -->|Applied by| n302
  n449 -->|Applied by| n317
  n449 -->|Applied by| n316
  n449 -->|Applied by| n318
  n459 -->|Refines| n454
  n460 -->|Accepts| n459
  n464 -->|Releases| n55
  n465 -->|Releases| n55
  n465 -->|Assembled by| n570
  n466 -->|Releases| n55
  n466 -->|Assembled by| n580
  n467 -->|Releases| n55
  n467 -->|Assembled by| n466
  n468 -->|Releases| n55
  n468 -->|Assembled by| n467
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
  n476 -->|Assembled by| n465
  n477 -->|Releases| n55
  n477 -->|Assembled by| n475
  n478 -->|Releases| n55
  n478 -->|Assembled by| n477
  n479 -->|Releases| n55
  n479 -->|Assembled by| n478
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
  n485 -->|Assembled by| n476
  n486 -->|Releases| n55
  n486 -->|Assembled by| n485
  n487 -->|Releases| n55
  n487 -->|Assembled by| n486
  n488 -->|Releases| n55
  n488 -->|Assembled by| n487
  n489 -->|Releases| n55
  n489 -->|Assembled by| n488
  n490 -->|Releases| n55
  n490 -->|Assembled by| n489
  n491 -->|Releases| n55
  n491 -->|Assembled by| n490
  n492 -->|Releases| n55
  n492 -->|Assembled by| n491
  n493 -->|Releases| n55
  n493 -->|Assembled by| n464
  n494 -->|Releases| n55
  n494 -->|Assembled by| n492
  n495 -->|Releases| n55
  n495 -->|Assembled by| n494
  n496 -->|Releases| n55
  n496 -->|Assembled by| n495
  n497 -->|Releases| n55
  n497 -->|Assembled by| n496
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
  n504 -->|Assembled by| n493
  n505 -->|Releases| n55
  n505 -->|Assembled by| n503
  n506 -->|Releases| n55
  n506 -->|Assembled by| n505
  n507 -->|Releases| n55
  n507 -->|Assembled by| n506
  n508 -->|Releases| n55
  n508 -->|Assembled by| n507
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
  n515 -->|Assembled by| n504
  n516 -->|Releases| n55
  n516 -->|Assembled by| n514
  n517 -->|Releases| n55
  n517 -->|Assembled by| n516
  n518 -->|Releases| n55
  n518 -->|Assembled by| n517
  n519 -->|Releases| n55
  n519 -->|Assembled by| n518
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
  n526 -->|Assembled by| n515
  n527 -->|Releases| n55
  n527 -->|Assembled by| n525
  n528 -->|Releases| n55
  n528 -->|Assembled by| n527
  n529 -->|Releases| n55
  n529 -->|Assembled by| n528
  n530 -->|Releases| n55
  n530 -->|Assembled by| n529
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
  n537 -->|Assembled by| n526
  n538 -->|Releases| n55
  n538 -->|Assembled by| n536
  n539 -->|Releases| n55
  n539 -->|Assembled by| n538
  n540 -->|Releases| n55
  n540 -->|Assembled by| n539
  n541 -->|Releases| n55
  n541 -->|Assembled by| n540
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
  n548 -->|Assembled by| n537
  n549 -->|Releases| n55
  n549 -->|Assembled by| n547
  n550 -->|Releases| n55
  n550 -->|Assembled by| n549
  n551 -->|Releases| n55
  n551 -->|Assembled by| n550
  n552 -->|Releases| n55
  n552 -->|Assembled by| n551
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
  n559 -->|Assembled by| n548
  n560 -->|Releases| n55
  n560 -->|Assembled by| n558
  n561 -->|Releases| n55
  n561 -->|Assembled by| n560
  n562 -->|Releases| n55
  n562 -->|Assembled by| n561
  n563 -->|Releases| n55
  n563 -->|Assembled by| n562
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
  n570 -->|Assembled by| n559
  n571 -->|Releases| n55
  n571 -->|Assembled by| n569
  n572 -->|Releases| n55
  n572 -->|Assembled by| n571
  n573 -->|Releases| n55
  n573 -->|Assembled by| n572
  n574 -->|Releases| n55
  n574 -->|Assembled by| n573
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
  n581 -->|Serves| n454
  n581 -->|Depends on| n156
  n581 -->|Depends on| n598
  n581 -->|Depends on| n306
  n581 -->|Depends on| n313
  n581 -->|Depends on| n317
  n581 -->|Depends on| n170
  n582 -->|Chooses| n588
  n582 -->|In| n30
  n582 -->|In| n53
  n582 -->|Serves| n455
  n583 -->|Chooses| n590
  n583 -->|In| n30
  n583 -->|In| n53
  n583 -->|Serves| n455
  n585 -->|Serves| n454
  n585 -->|Depends on| n581
  n585 -->|Depends on| n586
  n585 -->|Depends on| n317
  n587 -->|Serves| n454
  n587 -->|Implements| n596
  n587 -->|Depends on| n592
  n587 -->|Depends on| n285
  n587 -->|Depends on| n365
  n587 -->|Depends on| n222
  n587 -->|Depends on| n224
  n587 -->|Depends on| n219
  n587 -->|Depends on| n167
  n587 -->|Depends on| n598
  n587 -->|Depends on| n317
  n588 -->|Serves| n454
  n588 -->|Implements| n586
  n588 -->|Depends on| n584
  n588 -->|Depends on| n169
  n588 -->|Depends on| n167
  n588 -->|Depends on| n267
  n588 -->|Depends on| n274
  n588 -->|Depends on| n276
  n588 -->|Depends on| n266
  n588 -->|Depends on| n268
  n588 -->|Depends on| n272
  n588 -->|Depends on| n279
  n588 -->|Depends on| n269
  n588 -->|Depends on| n275
  n588 -->|Depends on| n277
  n588 -->|Depends on| n281
  n588 -->|Depends on| n280
  n588 -->|Depends on| n263
  n588 -->|Depends on| n271
  n588 -->|Depends on| n317
  n589 -->|Serves| n454
  n589 -->|Applied by| n585
  n589 -->|Applied by| n603
  n589 -->|Applied by| n595
  n589 -->|Applied by| n581
  n589 -->|Applied by| n44
  n590 -->|Serves| n454
  n590 -->|Implements| n584
  n590 -->|Depends on| n294
  n590 -->|Depends on| n165
  n590 -->|Depends on| n7
  n590 -->|Depends on| n278
  n590 -->|Depends on| n289
  n590 -->|Depends on| n297
  n590 -->|Depends on| n301
  n590 -->|Depends on| n296
  n590 -->|Depends on| n288
  n590 -->|Depends on| n299
  n590 -->|Depends on| n290
  n590 -->|Depends on| n292
  n590 -->|Depends on| n293
  n590 -->|Depends on| n298
  n590 -->|Depends on| n306
  n590 -->|Depends on| n317
  n591 -->|Serves| n455
  n591 -->|Applied by| n585
  n591 -->|Applied by| n603
  n591 -->|Applied by| n595
  n591 -->|Applied by| n582
  n591 -->|Applied by| n583
  n591 -->|Applied by| n602
  n591 -->|Applied by| n601
  n591 -->|Applied by| n594
  n591 -->|Applied by| n593
  n593 -->|Chooses| n599
  n593 -->|In| n30
  n593 -->|In| n53
  n593 -->|Serves| n455
  n594 -->|Chooses| n587
  n594 -->|In| n30
  n594 -->|In| n53
  n594 -->|Serves| n455
  n595 -->|Serves| n454
  n595 -->|Depends on| n581
  n595 -->|Depends on| n596
  n595 -->|Depends on| n317
  n597 -->|Serves| n454
  n597 -->|Implements| n604
  n597 -->|Depends on| n600
  n597 -->|Depends on| n706
  n597 -->|Depends on| n704
  n597 -->|Depends on| n167
  n597 -->|Depends on| n702
  n597 -->|Depends on| n700
  n597 -->|Depends on| n701
  n597 -->|Depends on| n699
  n597 -->|Depends on| n705
  n597 -->|Depends on| n317
  n599 -->|Serves| n454
  n599 -->|Implements| n592
  n599 -->|Depends on| n285
  n599 -->|Depends on| n287
  n599 -->|Depends on| n365
  n599 -->|Depends on| n1
  n599 -->|Depends on| n11
  n599 -->|Depends on| n2
  n599 -->|Depends on| n222
  n599 -->|Depends on| n234
  n599 -->|Depends on| n231
  n599 -->|Depends on| n213
  n599 -->|Depends on| n219
  n599 -->|Depends on| n581
  n599 -->|Depends on| n306
  n599 -->|Depends on| n315
  n599 -->|Depends on| n317
  n599 -->|Depends on| n167
  n601 -->|Chooses| n605
  n601 -->|In| n30
  n601 -->|In| n53
  n601 -->|Serves| n455
  n602 -->|Chooses| n597
  n602 -->|In| n30
  n602 -->|In| n53
  n602 -->|Serves| n455
  n603 -->|Serves| n454
  n603 -->|Depends on| n581
  n603 -->|Depends on| n604
  n603 -->|Depends on| n317
  n605 -->|Serves| n454
  n605 -->|Implements| n600
  n605 -->|Depends on| n581
  n605 -->|Depends on| n704
  n605 -->|Depends on| n167
  n605 -->|Depends on| n702
  n605 -->|Depends on| n700
  n605 -->|Depends on| n707
  n605 -->|Depends on| n703
  n605 -->|Depends on| n306
  n605 -->|Depends on| n317
  n606 -->|Verifies| n174
  n606 -->|Verifies| n202
  n606 -->|Verifies| n172
  n606 -->|Verifies| n737
  n606 -->|In| n53
  n606 -->|Depends on| n174
  n606 -->|Depends on| n41
  n606 -->|Depends on| n172
  n606 -->|Depends on| n150
  n606 -->|Depends on| n607
  n606 -->|Depends on| n318
  n608 -->|Verifies| n117
  n608 -->|Verifies| n131
  n608 -->|Verifies| n173
  n608 -->|Verifies| n201
  n608 -->|Verifies| n585
  n608 -->|Verifies| n581
  n608 -->|Verifies| n588
  n608 -->|Verifies| n590
  n608 -->|Verifies| n190
  n608 -->|Verifies| n189
  n608 -->|Verifies| n384
  n608 -->|Verifies| n387
  n608 -->|Verifies| n413
  n608 -->|In| n53
  n608 -->|Depends on| n117
  n608 -->|Depends on| n614
  n608 -->|Depends on| n57
  n608 -->|Depends on| n52
  n608 -->|Depends on| n153
  n608 -->|Depends on| n21
  n608 -->|Depends on| n39
  n608 -->|Depends on| n41
  n608 -->|Depends on| n158
  n608 -->|Depends on| n303
  n608 -->|Depends on| n318
  n609 -->|Verifies| n174
  n609 -->|Verifies| n194
  n609 -->|Verifies| n198
  n609 -->|Verifies| n202
  n609 -->|Verifies| n184
  n609 -->|Verifies| n406
  n609 -->|Verifies| n419
  n609 -->|Verifies| n417
  n609 -->|Verifies| n384
  n609 -->|Verifies| n393
  n609 -->|Verifies| n375
  n609 -->|Verifies| n407
  n609 -->|In| n53
  n609 -->|Depends on| n174
  n609 -->|Depends on| n41
  n609 -->|Depends on| n17
  n609 -->|Depends on| n613
  n609 -->|Depends on| n318
  n610 -->|Verifies| n306
  n610 -->|Verifies| n313
  n610 -->|Verifies| n170
  n610 -->|Verifies| n171
  n610 -->|Verifies| n167
  n610 -->|Verifies| n334
  n610 -->|In| n53
  n610 -->|Depends on| n306
  n610 -->|Depends on| n313
  n610 -->|Depends on| n170
  n610 -->|Depends on| n171
  n610 -->|Depends on| n167
  n610 -->|Depends on| n311
  n610 -->|Depends on| n334
  n610 -->|Depends on| n611
  n610 -->|Depends on| n318
  n612 -->|Verifies| n175
  n612 -->|Verifies| n183
  n612 -->|Verifies| n182
  n612 -->|Verifies| n196
  n612 -->|Verifies| n193
  n612 -->|In| n53
  n612 -->|Depends on| n175
  n612 -->|Depends on| n183
  n612 -->|Depends on| n182
  n612 -->|Depends on| n196
  n612 -->|Depends on| n193
  n612 -->|Depends on| n618
  n612 -->|Depends on| n318
  n616 -->|Verifies| n185
  n616 -->|In| n53
  n616 -->|Depends on| n185
  n616 -->|Depends on| n615
  n616 -->|Depends on| n318
  n617 -->|Verifies| n187
  n617 -->|In| n53
  n617 -->|Depends on| n187
  n617 -->|Depends on| n174
  n617 -->|Depends on| n41
  n617 -->|Depends on| n17
  n617 -->|Depends on| n318
  n620 -->|Serves| n454
  n620 -->|Part of| n669
  n620 -->|Depends on| n668
  n620 -->|Depends on| n642
  n620 -->|Depends on| n664
  n621 -->|Serves| n454
  n622 -->|Serves| n454
  n623 -->|In| n48
  n624 -->|In| n30
  n625 -->|Serves| n454
  n626 -->|Checks| n630
  n626 -->|Run by| n143
  n626 -->|Signed by| n643
  n627 -->|Checks| n630
  n627 -->|Run by| n122
  n627 -->|Signed by| n643
  n627 -->|Verifies| n368
  n627 -->|Verifies| n370
  n627 -->|Verifies| n369
  n627 -->|Verifies| n395
  n627 -->|Verifies| n396
  n627 -->|Verifies| n397
  n627 -->|Verifies| n414
  n627 -->|Verifies| n402
  n627 -->|Verifies| n401
  n627 -->|Verifies| n391
  n627 -->|Verifies| n412
  n628 -->|Chooses| n650
  n628 -->|Chooses| n649
  n628 -->|In| n30
  n628 -->|In| n48
  n628 -->|Serves| n454
  n629 -->|Serves| n454
  n630 -->|Produced by| n55
  n631 -->|Serves| n454
  n632 -->|Serves| n454
  n633 -->|Its obligations| n632
  n633 -->|Its obligations| n641
  n633 -->|Its obligations| n621
  n633 -->|Its obligations| n625
  n633 -->|Its obligations| n622
  n633 -->|Its obligations| n631
  n633 -->|Its obligations| n629
  n634 -->|Produced by| n127
  n634 -->|Carries| n36
  n636 -->|Checks| n634
  n636 -->|Run by| n647
  n636 -->|Signed by| n643
  n636 -->|Verifies| n64
  n636 -->|Verifies| n63
  n636 -->|Verifies| n62
  n636 -->|Verifies| n61
  n636 -->|Verifies| n60
  n636 -->|Verifies| n58
  n636 -->|Verifies| n59
  n638 -->|Serves| n454
  n638 -->|Depends on| n354
  n638 -->|Depends on| n285
  n638 -->|Depends on| n211
  n640 -->|Ships| n667
  n640 -->|Programs assembled for| n30
  n640 -->|Follows the policy| n644
  n641 -->|Serves| n454
  n644 -->|Its obligations| n632
  n644 -->|Its obligations| n622
  n645 -->|Ships| n630
  n645 -->|Ships| n652
  n645 -->|Ships| n634
  n645 -->|Deployed by| n111
  n645 -->|Programs assembled for| n30
  n645 -->|Follows the policy| n633
  n646 -->|Verifies| n647
  n646 -->|Verifies| n638
  n646 -->|In| n53
  n646 -->|Depends on| n647
  n646 -->|Depends on| n634
  n646 -->|Depends on| n638
  n646 -->|Depends on| n664
  n646 -->|Depends on| n637
  n646 -->|Depends on| n318
  n647 -->|Serves| n454
  n647 -->|Part of| n669
  n647 -->|Depends on| n634
  n647 -->|Depends on| n311
  n647 -->|Depends on| n638
  n647 -->|Depends on| n635
  n647 -->|Depends on| n664
  n648 -->|Verifies| n650
  n648 -->|Verifies| n649
  n648 -->|In| n53
  n648 -->|Depends on| n668
  n648 -->|Depends on| n642
  n648 -->|Depends on| n656
  n648 -->|Depends on| n153
  n648 -->|Depends on| n158
  n648 -->|Depends on| n415
  n648 -->|Depends on| n653
  n648 -->|Depends on| n318
  n649 -->|Serves| n454
  n649 -->|Depends on| n153
  n649 -->|Depends on| n155
  n649 -->|Depends on| n734
  n649 -->|Depends on| n158
  n649 -->|Depends on| n159
  n649 -->|Depends on| n415
  n649 -->|Depends on| n656
  n650 -->|Serves| n454
  n650 -->|Depends on| n668
  n650 -->|Depends on| n642
  n650 -->|Depends on| n653
  n650 -->|Depends on| n153
  n650 -->|Depends on| n656
  n651 -->|Chooses| n650
  n651 -->|Chooses| n649
  n651 -->|In| n53
  n652 -->|Produced by| n36
  n652 -->|Assembled for| n15
  n654 -->|Runs elsewhere| n640
  n654 -->|Its writer's settings| n653
  n655 -->|Serves| n454
  n655 -->|Part of| n669
  n655 -->|Depends on| n668
  n655 -->|Depends on| n642
  n655 -->|Depends on| n664
  n657 -->|Run by| n655
  n657 -->|Signed by| n643
  n659 -->|Requires| n657
  n659 -->|Deployed by| n620
  n659 -->|Programs assembled for| n30
  n659 -->|Follows the policy| n665
  n660 -->|In| n30
  n660 -->|In| n48
  n661 -->|Ships| n654
  n662 -->|In| n53
  n663 -->|In| n30
  n663 -->|In| n48
  n664 -->|Written in| n311
  n665 -->|Its obligations| n632
  n665 -->|Its obligations| n622
  n665 -->|Its obligations| n629
  n666 -->|Verifies| n655
  n666 -->|Verifies| n620
  n666 -->|In| n53
  n666 -->|Depends on| n655
  n666 -->|Depends on| n620
  n666 -->|Depends on| n668
  n666 -->|Depends on| n642
  n666 -->|Depends on| n658
  n666 -->|Depends on| n664
  n666 -->|Depends on| n318
  n669 -->|Deployed in| n30
  n670 -->|Implements| n49
  n670 -->|Depends on| n25
  n672 -->|Serves| n454
  n672 -->|Depends on| n153
  n672 -->|Depends on| n677
  n672 -->|Depends on| n21
  n672 -->|Depends on| n39
  n672 -->|Depends on| n25
  n672 -->|Depends on| n151
  n672 -->|Depends on| n182
  n672 -->|Depends on| n49
  n673 -->|Chooses| n670
  n673 -->|In| n30
  n673 -->|In| n53
  n673 -->|Serves| n454
  n674 -->|Serves| n454
  n674 -->|Depends on| n158
  n674 -->|Depends on| n194
  n674 -->|Depends on| n153
  n674 -->|Depends on| n206
  n674 -->|Depends on| n21
  n674 -->|Depends on| n39
  n675 -->|Refines| n454
  n676 -->|Accepts| n675
  n681 -->|Serves| n454
  n681 -->|Depends on| n154
  n681 -->|Depends on| n308
  n685 -->|Written in| n311
  n686 -->|Serves| n454
  n686 -->|Applied by| n688
  n686 -->|Applied by| n50
  n687 -->|Serves| n454
  n687 -->|Applied by| n688
  n687 -->|Applied by| n681
  n687 -->|Applied by| n50
  n688 -->|Serves| n454
  n688 -->|Serves| n461
  n688 -->|Depends on| n50
  n688 -->|Depends on| n682
  n688 -->|Depends on| n685
  n688 -->|Depends on| n683
  n688 -->|Depends on| n684
  n688 -->|Depends on| n678
  n688 -->|Depends on| n21
  n688 -->|Depends on| n27
  n688 -->|Depends on| n46
  n688 -->|Depends on| n153
  n688 -->|Depends on| n39
  n688 -->|Depends on| n25
  n689 -->|Defined by| n692
  n689 -->|Read in| n695
  n689 -->|Depends on| n692
  n690 -->|Defined by| n692
  n690 -->|Read in| n695
  n690 -->|Depends on| n692
  n691 -->|Defined by| n692
  n691 -->|Read in| n695
  n691 -->|Depends on| n692
  n691 -->|Depends on| n695
  n693 -->|Defined by| n692
  n693 -->|Read in| n695
  n693 -->|Depends on| n692
  n693 -->|Depends on| n691
  n694 -->|Defined by| n692
  n694 -->|Read in| n695
  n694 -->|Depends on| n692
  n694 -->|Depends on| n696
  n694 -->|Depends on| n691
  n695 -->|Defined by| n692
  n695 -->|Queries written in| n679
  n695 -->|Read by| n688
  n695 -->|Uses| n324
  n697 -->|Serves| n454
  n697 -->|Depends on| n692
  n697 -->|Depends on| n696
  n697 -->|Depends on| n153
  n697 -->|Depends on| n690
  n697 -->|Depends on| n691
  n697 -->|Depends on| n693
  n697 -->|Depends on| n689
  n697 -->|Depends on| n694
  n697 -->|Depends on| n39
  n697 -->|Depends on| n40
  n697 -->|Depends on| n306
  n697 -->|Depends on| n308
  n699 -->|Defined by| n706
  n699 -->|Depends on| n706
  n700 -->|Defined by| n706
  n700 -->|Depends on| n706
  n700 -->|Depends on| n702
  n700 -->|Depends on| n704
  n701 -->|Defined by| n706
  n701 -->|Depends on| n706
  n702 -->|Defined by| n706
  n702 -->|Depends on| n706
  n702 -->|Depends on| n704
  n703 -->|Defined by| n706
  n703 -->|Depends on| n706
  n703 -->|Depends on| n698
  n705 -->|Defined by| n706
  n705 -->|Depends on| n706
  n707 -->|Defined by| n706
  n707 -->|Depends on| n706
  n707 -->|Depends on| n698
  n708 -->|Defined by| n736
  n708 -->|Read in| n734
  n708 -->|Depends on| n736
  n709 -->|Defined by| n736
  n709 -->|Read in| n734
  n709 -->|Depends on| n736
  n710 -->|Defined by| n736
  n710 -->|Read in| n734
  n710 -->|Depends on| n736
  n711 -->|Defined by| n736
  n711 -->|Read in| n734
  n711 -->|Depends on| n736
  n712 -->|Defined by| n736
  n712 -->|Read in| n734
  n712 -->|Depends on| n736
  n713 -->|Defined by| n736
  n713 -->|Read in| n734
  n713 -->|Depends on| n736
  n714 -->|Defined by| n736
  n714 -->|Read in| n734
  n714 -->|Depends on| n736
  n715 -->|Defined by| n736
  n715 -->|Read in| n734
  n715 -->|Depends on| n736
  n715 -->|Depends on| n733
  n716 -->|Defined by| n736
  n716 -->|Read in| n734
  n716 -->|Depends on| n736
  n717 -->|Defined by| n736
  n717 -->|Read in| n734
  n717 -->|Depends on| n736
  n718 -->|Defined by| n736
  n718 -->|Read in| n734
  n718 -->|Depends on| n736
  n719 -->|Defined by| n736
  n719 -->|Read in| n734
  n719 -->|Depends on| n736
  n720 -->|Defined by| n736
  n720 -->|Read in| n734
  n720 -->|Depends on| n736
  n721 -->|Defined by| n736
  n721 -->|Read in| n734
  n721 -->|Depends on| n736
  n722 -->|Defined by| n736
  n722 -->|Read in| n734
  n722 -->|Depends on| n736
  n723 -->|Defined by| n736
  n723 -->|Read in| n734
  n723 -->|Depends on| n736
  n723 -->|Depends on| n733
  n724 -->|Defined by| n736
  n724 -->|Read in| n734
  n724 -->|Depends on| n736
  n725 -->|Defined by| n736
  n725 -->|Read in| n734
  n725 -->|Depends on| n736
  n726 -->|Defined by| n736
  n726 -->|Read in| n734
  n726 -->|Depends on| n736
  n727 -->|Defined by| n736
  n727 -->|Read in| n734
  n727 -->|Depends on| n736
  n728 -->|Defined by| n736
  n728 -->|Read in| n734
  n728 -->|Depends on| n736
  n729 -->|Defined by| n736
  n729 -->|Read in| n734
  n729 -->|Depends on| n736
  n731 -->|Defined by| n736
  n731 -->|Read in| n734
  n731 -->|Depends on| n736
  n731 -->|Depends on| n733
  n732 -->|Defined by| n736
  n732 -->|Read in| n734
  n732 -->|Depends on| n736
  n733 -->|Defined by| n736
  n733 -->|Read in| n734
  n733 -->|Depends on| n736
  n734 -->|Queries written in| n679
  n734 -->|Read by| n688
  n734 -->|Watches the globals| n739
  n734 -->|Uses| n332
  n735 -->|Serves| n454
  n737 -->|Serves| n454
  n737 -->|Depends on| n734
  n737 -->|Depends on| n736
  n737 -->|Depends on| n150
  n737 -->|Depends on| n730
  n737 -->|Depends on| n157
  n737 -->|Depends on| n156
  n737 -->|Depends on| n720
  n737 -->|Depends on| n733
  n737 -->|Depends on| n721
  n737 -->|Depends on| n727
  n737 -->|Depends on| n713
  n737 -->|Depends on| n712
  n737 -->|Depends on| n729
  n737 -->|Depends on| n731
  n737 -->|Depends on| n725
  n737 -->|Depends on| n708
  n737 -->|Depends on| n714
  n737 -->|Depends on| n723
  n737 -->|Depends on| n715
  n737 -->|Depends on| n709
  n737 -->|Depends on| n728
  n737 -->|Depends on| n726
  n737 -->|Depends on| n738
  n737 -->|Depends on| n718
  n737 -->|Depends on| n732
  n737 -->|Depends on| n710
  n737 -->|Depends on| n719
  n737 -->|Depends on| n711
  n737 -->|Depends on| n159
  n737 -->|Depends on| n39
  n737 -->|Depends on| n40
  n737 -->|Depends on| n306
  n737 -->|Depends on| n308
  n738 -->|Defined by| n736
  n738 -->|Read in| n734
  n738 -->|Depends on| n736
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
