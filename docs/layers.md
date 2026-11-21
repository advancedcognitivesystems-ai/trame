# Layers

*The graph in force on 21 November 2026, ordered by distance to the goals.*

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
    n48["Signatures<br/><small>Port</small>"]:::neutral
    n49["Syntax trees<br/><small>Port</small>"]:::neutral
    n50["Terminal<br/><small>Port</small>"]:::neutral
    n51["Terminal log<br/><small>Port</small>"]:::neutral
    n52["Test<br/><small>Environment</small>"]:::neutral
    n53["Timer<br/><small>Port</small>"]:::neutral
    n54["Trame on the command line<br/><small>Component</small>"]:::neutral
    n55["TypeScript compiler<br/><small>Port</small>"]:::neutral
    n56["Write log<br/><small>Port</small>"]:::neutral
  end
  subgraph browser["Trame · The page in a browser"]
    n57["Amendments sent to trame dev<br/><small>Implementation</small>"]:::unknown
    n58["The browser's gzip<br/><small>Implementation</small>"]:::unknown
    n59["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::unknown
    n60["Local storage<br/><small>Implementation</small>"]:::unknown
    n61["The browser's window<br/><small>Implementation</small>"]:::unknown
    n62["Explorer of a graph<br/><small>Function</small>"]:::unknown
    n63["Show the graph<br/><small>Entry point</small>"]:::unknown
    n64["The browser runs the page<br/><small>Technical choice</small>"]:::unknown
    n65["The page is assembled<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph command-scenarios["Trame · Scenarios of the commands"]
    n66["An advance, in memory<br/><small>Scenario</small>"]:::held
    n67["What the engines an advance starts answer in a scenario<br/><small>Decision</small>"]:::neutral
    n68["What an amendment is checked with<br/><small>Decision</small>"]:::neutral
    n69["What the example is assembled for<br/><small>Decision</small>"]:::neutral
    n70["A body is read and checked<br/><small>Scenario</small>"]:::held
    n71["Bodies the reader is given<br/><small>Decision</small>"]:::neutral
    n72["A build planned<br/><small>Scenario</small>"]:::held
    n73["The command line<br/><small>Scenario</small>"]:::held
    n74["A component assembled<br/><small>Scenario</small>"]:::held
    n75["A component run<br/><small>Scenario</small>"]:::held
    n76["Declarations published<br/><small>Scenario</small>"]:::held
    n77["trame dev<br/><small>Scenario</small>"]:::held
    n78["What trame dev is shown in a scenario<br/><small>Decision</small>"]:::neutral
    n79["The doctor<br/><small>Scenario</small>"]:::held
    n80["Evidence given for someone<br/><small>Scenario</small>"]:::held
    n81["A library carries kinds<br/><small>Scenario</small>"]:::held
    n82["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n83["A library released<br/><small>Scenario</small>"]:::held
    n84["The manifest written<br/><small>Scenario</small>"]:::held
    n85["The packages audited<br/><small>Scenario</small>"]:::held
    n86["The packages upgraded<br/><small>Scenario</small>"]:::held
    n87["The page delivered<br/><small>Scenario</small>"]:::held
    n88["The page exported<br/><small>Scenario</small>"]:::held
    n89["The page of the graph<br/><small>Scenario</small>"]:::held
    n90["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n91["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n92["A command of the project<br/><small>Scenario</small>"]:::held
    n93["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n94["A project started<br/><small>Scenario</small>"]:::held
    n95["A published value changed<br/><small>Scenario</small>"]:::held
    n96["The registry filled<br/><small>Scenario</small>"]:::held
    n97["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n98["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n99["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n100["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n101["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n102["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n103["A value amended<br/><small>Scenario</small>"]:::held
    n104["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n105["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n106["Advance<br/><small>Entry point</small>"]:::held
    n107["Amend<br/><small>Entry point</small>"]:::held
    n108["An amendment prepared<br/><small>Function</small>"]:::held
    n109["Assemble a component<br/><small>Entry point</small>"]:::held
    n110["Assembler<br/><small>Function</small>"]:::held
    n111["Audit the packages<br/><small>Entry point</small>"]:::held
    n112["Build<br/><small>Entry point</small>"]:::held
    n113["Two builds compared<br/><small>Function</small>"]:::held
    n114["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n115["Deliver<br/><small>Entry point</small>"]:::held
    n116["Start trame dev<br/><small>Entry point</small>"]:::held
    n117["Ask the machine<br/><small>Entry point</small>"]:::held
    n118["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n119["Payload<br/><small>Entry point</small>"]:::held
    n120["Export the page<br/><small>Entry point</small>"]:::held
    n121["Help<br/><small>Entry point</small>"]:::held
    n122["Start a project<br/><small>Entry point</small>"]:::held
    n123["Plan<br/><small>Entry point</small>"]:::held
    n124["Preparation<br/><small>Function</small>"]:::held
    n125["The project's commands<br/><small>Function</small>"]:::held
    n126["Publish<br/><small>Entry point</small>"]:::held
    n127["Record evidence<br/><small>Entry point</small>"]:::held
    n128["A module of references<br/><small>Function</small>"]:::held
    n129["Fill the registry<br/><small>Entry point</small>"]:::held
    n130["Release a version<br/><small>Entry point</small>"]:::held
    n131["Render a view<br/><small>Function</small>"]:::held
    n132["Run a component<br/><small>Entry point</small>"]:::held
    n133["Ship<br/><small>Entry point</small>"]:::held
    n134["Show a view<br/><small>Entry point</small>"]:::held
    n135["Take the snapshot<br/><small>Entry point</small>"]:::held
    n136["Test the laws<br/><small>Entry point</small>"]:::held
    n137["Upgrade<br/><small>Entry point</small>"]:::held
    n138["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n139["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n140["Default rank<br/><small>Decision</small>"]:::neutral
    n141["Documentation comment<br/><small>Decision</small>"]:::neutral
    n142["Names of the documents<br/><small>Standard</small>"]:::neutral
    n143["The frozen API<br/><small>Standard</small>"]:::neutral
    n144["JSON formatting<br/><small>Decision</small>"]:::neutral
    n145["The language's names<br/><small>Decision</small>"]:::neutral
    n146["Project layout<br/><small>Decision</small>"]:::neutral
    n147["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n148["How a project starts<br/><small>Decision</small>"]:::neutral
    n149["Trame references<br/><small>Standard</small>"]:::neutral
    n150["Names of steps<br/><small>Decision</small>"]:::neutral
    n151["Trame's commands<br/><small>Standard</small>"]:::neutral
    n152["Trame's environment<br/><small>Standard</small>"]:::neutral
    n153["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n154["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n155["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n156["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n157["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n158["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n159["How a number is written<br/><small>Decision</small>"]:::neutral
    n160["Punctuation of documents<br/><small>Function</small>"]:::held
    n161["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n162["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n163["Values with their units<br/><small>Function</small>"]:::held
    n164["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n165["Assembly<br/><small>Function</small>"]:::held
    n166["Compilation API<br/><small>Function</small>"]:::held
    n167["Compiler<br/><small>Function</small>"]:::held
    n168["Cycles<br/><small>Function</small>"]:::held
    n169["Date bundle<br/><small>Function</small>"]:::held
    n170["trame dev server<br/><small>Function</small>"]:::held
    n171["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n172["Differences<br/><small>Function</small>"]:::held
    n173["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n174["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n175["Fingerprints<br/><small>Function</small>"]:::held
    n176["Pseudo-random generator<br/><small>Function</small>"]:::held
    n177["Graph<br/><small>Function</small>"]:::held
    n178["Judged harder<br/><small>Function</small>"]:::held
    n179["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n180["Laws<br/><small>Function</small>"]:::held
    n181["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n182["Lock<br/><small>Function</small>"]:::held
    n183["Machine outputs<br/><small>Function</small>"]:::held
    n184["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n185["Payload<br/><small>Function</small>"]:::held
    n186["Positions<br/><small>Function</small>"]:::held
    n187["Project<br/><small>Function</small>"]:::held
    n188["The runs of a project<br/><small>Function</small>"]:::held
    n189["References<br/><small>Function</small>"]:::held
    n190["A shipment's pipeline<br/><small>Function</small>"]:::held
    n191["Static reading<br/><small>Function</small>"]:::held
    n192["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n193["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n194["Views<br/><small>Function</small>"]:::held
    n195["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n196["Accept a candidate<br/><small>Requirement</small>"]:::held
    n197["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n198["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n199["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n200["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n201["Records of the releases<br/><small>Function</small>"]:::held
    n202["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n203["Attribute presence<br/><small>Syntax element</small>"]:::held
    n204["Attribute selector<br/><small>Syntax element</small>"]:::held
    n205["Class selector<br/><small>Syntax element</small>"]:::held
    n206["Declaration<br/><small>Syntax element</small>"]:::held
    n207["Rule<br/><small>Syntax element</small>"]:::held
    n208["CSS style sheets<br/><small>Language</small>"]:::held
    n209["Variable<br/><small>Syntax element</small>"]:::held
    n210["Custom property<br/><small>Syntax element</small>"]:::held
    n211["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n212["Escaped text<br/><small>Syntax element</small>"]:::held
    n213["Attributes<br/><small>Syntax element</small>"]:::held
    n214["Element over several lines<br/><small>Syntax element</small>"]:::held
    n215["HTML element<br/><small>Syntax element</small>"]:::held
    n216["End tag<br/><small>Syntax element</small>"]:::held
    n217["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n218["HTML markup<br/><small>Language</small>"]:::held
    n219["Start tag<br/><small>Syntax element</small>"]:::held
    n220["JSON in a script<br/><small>Syntax element</small>"]:::held
    n221["Media feature<br/><small>Syntax element</small>"]:::held
    n222["Media rule<br/><small>Syntax element</small>"]:::held
    n223["Negation<br/><small>Syntax element</small>"]:::held
    n224["Path data<br/><small>Syntax element</small>"]:::held
    n225["Script<br/><small>Syntax element</small>"]:::held
    n226["Selector list<br/><small>Syntax element</small>"]:::held
    n227["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n228["Drivers<br/><small>Function</small>"]:::held
    n229["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n230["Answers without crashing<br/><small>Requirement</small>"]:::held
    n231["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n232["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n233["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n234["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n235["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n236["Complete declaration<br/><small>Requirement</small>"]:::held
    n237["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n238["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n239["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n240["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n241["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n242["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n243["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n244["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n245["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n246["Same input, same answer<br/><small>Requirement</small>"]:::held
    n247["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n248["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n249["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n250["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n251["What belongs to a library<br/><small>Requirement</small>"]:::held
    n252["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n253["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n254["A release is settled<br/><small>Requirement</small>"]:::held
    n255["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n256["Anchor<br/><small>Syntax element</small>"]:::held
    n257["Backtick string<br/><small>Syntax element</small>"]:::held
    n258["Blank line<br/><small>Syntax element</small>"]:::held
    n259["Block quote<br/><small>Syntax element</small>"]:::held
    n260["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n261["Code block<br/><small>Syntax element</small>"]:::held
    n262["Code span<br/><small>Syntax element</small>"]:::held
    n263["CommonMark<br/><small>Standard</small>"]:::neutral
    n264["Collapsible block<br/><small>Syntax element</small>"]:::held
    n265["Emphasis<br/><small>Syntax element</small>"]:::held
    n266["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n267["Heading<br/><small>Syntax element</small>"]:::held
    n268["Link<br/><small>Syntax element</small>"]:::held
    n269["List item<br/><small>Syntax element</small>"]:::held
    n270["Relative reference<br/><small>Syntax element</small>"]:::held
    n271["Small text<br/><small>Syntax element</small>"]:::held
    n272["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n273["Table<br/><small>Syntax element</small>"]:::held
    n274["Table cell<br/><small>Syntax element</small>"]:::held
    n275["Delimiter row<br/><small>Syntax element</small>"]:::held
    n276["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n277["Around the documents<br/><small>Decision</small>"]:::neutral
    n278["Documents in the page<br/><small>Decision</small>"]:::neutral
    n279["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n280["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n281["Class definition<br/><small>Syntax element</small>"]:::held
    n282["Flowchart<br/><small>Syntax element</small>"]:::held
    n283["Gantt chart<br/><small>Syntax element</small>"]:::held
    n284["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n285["Section<br/><small>Syntax element</small>"]:::held
    n286["Task<br/><small>Syntax element</small>"]:::held
    n287["Mermaid<br/><small>Standard</small>"]:::neutral
    n288["Label<br/><small>Syntax element</small>"]:::held
    n289["Link<br/><small>Syntax element</small>"]:::held
    n290["Node<br/><small>Syntax element</small>"]:::held
    n291["Milestone<br/><small>Syntax element</small>"]:::held
    n292["Node style<br/><small>Syntax element</small>"]:::held
    n293["Style properties<br/><small>Syntax element</small>"]:::held
    n294["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n295["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n296["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n297["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n298["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n299["Dates<br/><small>Function</small>"]:::held
    n300["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n301["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n302["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n303["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n304["Language<br/><small>Decision</small>"]:::neutral
    n305["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n306["Lists<br/><small>Function</small>"]:::held
    n307["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n308["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n309["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n310["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n311["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n312["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n313["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n314["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n315["Grammar of CSS<br/><small>Package</small>"]:::held
    n316["esbuild<br/><small>Package</small>"]:::held
    n317["Grammar of HCL<br/><small>Package</small>"]:::held
    n318["Grammar of HTML<br/><small>Package</small>"]:::held
    n319["Types of Node.js<br/><small>Package</small>"]:::held
    n320["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n321["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n322["The people of the repository<br/><small>Package</small>"]:::neutral
    n323["The standard library<br/><small>Package</small>"]:::neutral
    n324["tsx<br/><small>Package</small>"]:::held
    n325["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n326["TypeScript<br/><small>Package</small>"]:::held
    n327["Order of versions<br/><small>Function</small>"]:::held
    n328["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n329["Banner<br/><small>Syntax element</small>"]:::held
    n330["Brand<br/><small>Syntax element</small>"]:::held
    n331["State of the compilation<br/><small>Syntax element</small>"]:::held
    n332["Dates<br/><small>Syntax element</small>"]:::held
    n333["Head of the document<br/><small>Syntax element</small>"]:::held
    n334["Document picker<br/><small>Syntax element</small>"]:::held
    n335["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n336["Fonts<br/><small>Syntax element</small>"]:::held
    n337["Logo<br/><small>Syntax element</small>"]:::held
    n338["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n339["Main area<br/><small>Syntax element</small>"]:::held
    n340["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n341["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n342["Navigation<br/><small>Syntax element</small>"]:::held
    n343["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n344["Page<br/><small>Function</small>"]:::held
    n345["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n346["Document of the page<br/><small>Syntax element</small>"]:::held
    n347["Regions of the page<br/><small>Decision</small>"]:::neutral
    n348["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n349["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n350["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n351["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n352["Shell<br/><small>Syntax element</small>"]:::held
    n353["Side bar<br/><small>Syntax element</small>"]:::held
    n354["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n355["Colours of a status<br/><small>Syntax element</small>"]:::held
    n356["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n357["Theme<br/><small>Syntax element</small>"]:::held
    n358["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n359["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n360["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n361["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n362["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n363["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n364["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n365["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n366["esbuild<br/><small>Implementation</small>"]:::held
    n367["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n368["Example process<br/><small>Function</small>"]:::held
    n369["Example project<br/><small>Decision</small>"]:::neutral
    n370["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n371["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n372["Amendments in place<br/><small>Implementation</small>"]:::held
    n373["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n374["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n375["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n376["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n377["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n378["A server in memory<br/><small>Function</small>"]:::held
    n379["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n380["Terminal in memory<br/><small>Function</small>"]:::held
    n381["Command line<br/><small>Implementation</small>"]:::held
    n382["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n383["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n384["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n385["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n386["Node paths<br/><small>Implementation</small>"]:::held
    n387["NodePlatform<br/><small>Technical choice</small>"]:::held
    n388["Node process<br/><small>Implementation</small>"]:::unknown
    n389["Node programs<br/><small>Implementation</small>"]:::unknown
    n390["Node terminal<br/><small>Implementation</small>"]:::unknown
    n391["Node timer<br/><small>Implementation</small>"]:::held
    n392["No installer in test<br/><small>Implementation</small>"]:::held
    n393["No registry in test<br/><small>Function</small>"]:::held
    n394["npm installs<br/><small>Implementation</small>"]:::unknown
    n395["npm's reports<br/><small>Implementation</small>"]:::unknown
    n396["Packages by their origin<br/><small>Implementation</small>"]:::held
    n397["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n398["Page resources<br/><small>Implementation</small>"]:::held
    n399["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n400["Results kept in the process<br/><small>Implementation</small>"]:::held
    n401["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n402["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n403["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n404["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n405["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n406["Stopped clock<br/><small>Function</small>"]:::held
    n407["System clock<br/><small>Implementation</small>"]:::unknown
    n408["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n409["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n410["Trame's prelude<br/><small>Implementation</small>"]:::held
    n411["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n412["tsx loader<br/><small>Implementation</small>"]:::held
    n413["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n414["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n415["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n416["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n417["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n418["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n419["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n420["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n421["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n422["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n423["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n424["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n425["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n426["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n427["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n428["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n429["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n430["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n431["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n432["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n433["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n434["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n435["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n436["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n437["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n438["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n439["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n440["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n441["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n442["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n443["Candidate dates<br/><small>Decision</small>"]:::neutral
    n444["Claim sets<br/><small>Decision</small>"]:::neutral
    n445["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n446["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n447["A specification that runs<br/><small>Goal</small>"]:::neutral
    n448["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n449["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n450["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n451["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n452["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n453["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n454["A single source of truth<br/><small>Goal</small>"]:::neutral
    n455["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n456["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n457["Generation 1<br/><small>Release</small>"]:::neutral
    n458["Generation 10<br/><small>Release</small>"]:::neutral
    n459["Generation 100<br/><small>Release</small>"]:::neutral
    n460["Generation 101<br/><small>Release</small>"]:::neutral
    n461["Generation 102<br/><small>Release</small>"]:::neutral
    n462["Generation 103<br/><small>Release</small>"]:::neutral
    n463["Generation 104<br/><small>Release</small>"]:::neutral
    n464["Generation 105<br/><small>Release</small>"]:::neutral
    n465["Generation 106<br/><small>Release</small>"]:::neutral
    n466["Generation 107<br/><small>Release</small>"]:::neutral
    n467["Generation 108<br/><small>Release</small>"]:::neutral
    n468["Generation 109<br/><small>Release</small>"]:::neutral
    n469["Generation 11<br/><small>Release</small>"]:::neutral
    n470["Generation 110<br/><small>Release</small>"]:::neutral
    n471["Generation 111<br/><small>Release</small>"]:::neutral
    n472["Generation 112<br/><small>Release</small>"]:::neutral
    n473["Generation 113<br/><small>Release</small>"]:::neutral
    n474["Generation 114<br/><small>Release</small>"]:::neutral
    n475["Generation 115<br/><small>Release</small>"]:::neutral
    n476["Generation 12<br/><small>Release</small>"]:::neutral
    n477["Generation 13<br/><small>Release</small>"]:::neutral
    n478["Generation 14<br/><small>Release</small>"]:::neutral
    n479["Generation 15<br/><small>Release</small>"]:::neutral
    n480["Generation 16<br/><small>Release</small>"]:::neutral
    n481["Generation 17<br/><small>Release</small>"]:::neutral
    n482["Generation 18<br/><small>Release</small>"]:::neutral
    n483["Generation 19<br/><small>Release</small>"]:::neutral
    n484["Generation 2<br/><small>Release</small>"]:::neutral
    n485["Generation 20<br/><small>Release</small>"]:::neutral
    n486["Generation 21<br/><small>Release</small>"]:::neutral
    n487["Generation 22<br/><small>Release</small>"]:::neutral
    n488["Generation 23<br/><small>Release</small>"]:::neutral
    n489["Generation 24<br/><small>Release</small>"]:::neutral
    n490["Generation 25<br/><small>Release</small>"]:::neutral
    n491["Generation 26<br/><small>Release</small>"]:::neutral
    n492["Generation 27<br/><small>Release</small>"]:::neutral
    n493["Generation 28<br/><small>Release</small>"]:::neutral
    n494["Generation 29<br/><small>Release</small>"]:::neutral
    n495["Generation 3<br/><small>Release</small>"]:::neutral
    n496["Generation 30<br/><small>Release</small>"]:::neutral
    n497["Generation 31<br/><small>Release</small>"]:::neutral
    n498["Generation 32<br/><small>Release</small>"]:::neutral
    n499["Generation 33<br/><small>Release</small>"]:::neutral
    n500["Generation 34<br/><small>Release</small>"]:::neutral
    n501["Generation 35<br/><small>Release</small>"]:::neutral
    n502["Generation 36<br/><small>Release</small>"]:::neutral
    n503["Generation 37<br/><small>Release</small>"]:::neutral
    n504["Generation 38<br/><small>Release</small>"]:::neutral
    n505["Generation 39<br/><small>Release</small>"]:::neutral
    n506["Generation 4<br/><small>Release</small>"]:::neutral
    n507["Generation 40<br/><small>Release</small>"]:::neutral
    n508["Generation 41<br/><small>Release</small>"]:::neutral
    n509["Generation 42<br/><small>Release</small>"]:::neutral
    n510["Generation 43<br/><small>Release</small>"]:::neutral
    n511["Generation 44<br/><small>Release</small>"]:::neutral
    n512["Generation 45<br/><small>Release</small>"]:::neutral
    n513["Generation 46<br/><small>Release</small>"]:::neutral
    n514["Generation 47<br/><small>Release</small>"]:::neutral
    n515["Generation 48<br/><small>Release</small>"]:::neutral
    n516["Generation 49<br/><small>Release</small>"]:::neutral
    n517["Generation 5<br/><small>Release</small>"]:::neutral
    n518["Generation 50<br/><small>Release</small>"]:::neutral
    n519["Generation 51<br/><small>Release</small>"]:::neutral
    n520["Generation 52<br/><small>Release</small>"]:::neutral
    n521["Generation 53<br/><small>Release</small>"]:::neutral
    n522["Generation 54<br/><small>Release</small>"]:::neutral
    n523["Generation 55<br/><small>Release</small>"]:::neutral
    n524["Generation 56<br/><small>Release</small>"]:::neutral
    n525["Generation 57<br/><small>Release</small>"]:::neutral
    n526["Generation 58<br/><small>Release</small>"]:::neutral
    n527["Generation 59<br/><small>Release</small>"]:::neutral
    n528["Generation 6<br/><small>Release</small>"]:::neutral
    n529["Generation 60<br/><small>Release</small>"]:::neutral
    n530["Generation 61<br/><small>Release</small>"]:::neutral
    n531["Generation 62<br/><small>Release</small>"]:::neutral
    n532["Generation 63<br/><small>Release</small>"]:::neutral
    n533["Generation 64<br/><small>Release</small>"]:::neutral
    n534["Generation 65<br/><small>Release</small>"]:::neutral
    n535["Generation 66<br/><small>Release</small>"]:::neutral
    n536["Generation 67<br/><small>Release</small>"]:::neutral
    n537["Generation 68<br/><small>Release</small>"]:::neutral
    n538["Generation 69<br/><small>Release</small>"]:::neutral
    n539["Generation 7<br/><small>Release</small>"]:::neutral
    n540["Generation 70<br/><small>Release</small>"]:::neutral
    n541["Generation 71<br/><small>Release</small>"]:::neutral
    n542["Generation 72<br/><small>Release</small>"]:::neutral
    n543["Generation 73<br/><small>Release</small>"]:::neutral
    n544["Generation 74<br/><small>Release</small>"]:::neutral
    n545["Generation 75<br/><small>Release</small>"]:::neutral
    n546["Generation 76<br/><small>Release</small>"]:::neutral
    n547["Generation 77<br/><small>Release</small>"]:::neutral
    n548["Generation 78<br/><small>Release</small>"]:::neutral
    n549["Generation 79<br/><small>Release</small>"]:::neutral
    n550["Generation 8<br/><small>Release</small>"]:::neutral
    n551["Generation 80<br/><small>Release</small>"]:::neutral
    n552["Generation 81<br/><small>Release</small>"]:::neutral
    n553["Generation 82<br/><small>Release</small>"]:::neutral
    n554["Generation 83<br/><small>Release</small>"]:::neutral
    n555["Generation 84<br/><small>Release</small>"]:::neutral
    n556["Generation 85<br/><small>Release</small>"]:::neutral
    n557["Generation 86<br/><small>Release</small>"]:::neutral
    n558["Generation 87<br/><small>Release</small>"]:::neutral
    n559["Generation 88<br/><small>Release</small>"]:::neutral
    n560["Generation 89<br/><small>Release</small>"]:::neutral
    n561["Generation 9<br/><small>Release</small>"]:::neutral
    n562["Generation 90<br/><small>Release</small>"]:::neutral
    n563["Generation 91<br/><small>Release</small>"]:::neutral
    n564["Generation 92<br/><small>Release</small>"]:::neutral
    n565["Generation 93<br/><small>Release</small>"]:::neutral
    n566["Generation 94<br/><small>Release</small>"]:::neutral
    n567["Generation 95<br/><small>Release</small>"]:::neutral
    n568["Generation 96<br/><small>Release</small>"]:::neutral
    n569["Generation 97<br/><small>Release</small>"]:::neutral
    n570["Generation 98<br/><small>Release</small>"]:::neutral
    n571["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n572["Common rendering<br/><small>Function</small>"]:::held
    n573["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n574["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n575["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n576["Rendering of the files<br/><small>Function</small>"]:::held
    n577["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n578["HTML writer<br/><small>Function</small>"]:::held
    n579["Markdown writer<br/><small>Function</small>"]:::held
    n580["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n581["Mermaid diagrams<br/><small>Function</small>"]:::held
    n582["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n583["Figures of the page<br/><small>Port</small>"]:::neutral
    n584["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n585["The page in HTML<br/><small>Technical choice</small>"]:::held
    n586["Rendering in the page<br/><small>Function</small>"]:::held
    n587["Syntax of the page<br/><small>Port</small>"]:::neutral
    n588["Plain text writer<br/><small>Function</small>"]:::held
    n589["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n590["Figures in SVG<br/><small>Function</small>"]:::held
    n591["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n592["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n593["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n594["Rendering in the terminal<br/><small>Function</small>"]:::held
    n595["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n596["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n597["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n598["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n599["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n600["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n601["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n602["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n603["EngineReckons<br/><small>Scenario</small>"]:::held
    n604["Shape of the example<br/><small>Decision</small>"]:::neutral
    n605["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n606["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n607["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n608["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n609["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n610["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n611["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n612["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n613["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n614["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n615["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n616["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n617["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n618["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n619["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n620["How a generation is made<br/><small>Policy</small>"]:::neutral
    n621["The graph page<br/><small>Artefact</small>"]:::unknown
    n622["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n623["The graph page opens<br/><small>Check</small>"]:::unknown
    n624["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n625["What the graph page is asked<br/><small>Function</small>"]:::held
    n626["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n627["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n628["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n629["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n630["How a change merges<br/><small>Policy</small>"]:::neutral
    n631["The next generation<br/><small>Shipment</small>"]:::unknown
    n632["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n633["Open the graph page<br/><small>Entry point</small>"]:::held
    n634["The page's program<br/><small>Artefact</small>"]:::held
    n635["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n636["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n637["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n638["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n639["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n640["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n641["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n642["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n643["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n644["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n645["How the repository is set<br/><small>Policy</small>"]:::neutral
    n646["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n647["The engine<br/><small>Artefact</small>"]:::unknown
    n648["Trame's repository<br/><small>Decision</small>"]:::neutral
    n649["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n650["Attribution<br/><small>Function</small>"]:::held
    n651["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n652["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n653["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n654["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n655["Ship only what holds<br/><small>Requirement</small>"]:::held
    n656["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n657["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n658["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n659["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n660["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n661["Checks of a body<br/><small>Function</small>"]:::held
    n662["Captures<br/><small>Standard</small>"]:::neutral
    n663["Categories of literals<br/><small>Decision</small>"]:::neutral
    n664["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n665["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n666["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n667["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n668["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n669["Attribute<br/><small>Syntax element</small>"]:::held
    n670["Comment<br/><small>Syntax element</small>"]:::held
    n671["Text<br/><small>Syntax element</small>"]:::held
    n672["HCL<br/><small>Standard</small>"]:::neutral
    n673["Value<br/><small>Syntax element</small>"]:::held
    n674["Module call<br/><small>Syntax element</small>"]:::held
    n675["Terraform<br/><small>Language</small>"]:::held
    n676["Terraform modules<br/><small>Standard</small>"]:::neutral
    n677["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n678["Box drawing<br/><small>Standard</small>"]:::neutral
    n679["Code lines<br/><small>Syntax element</small>"]:::held
    n680["Columns<br/><small>Syntax element</small>"]:::held
    n681["Item line<br/><small>Syntax element</small>"]:::held
    n682["Padded cell<br/><small>Syntax element</small>"]:::held
    n683["Path step<br/><small>Syntax element</small>"]:::held
    n684["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n685["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n686["Terminal text<br/><small>Decision</small>"]:::neutral
    n687["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n688["List on several lines<br/><small>Syntax element</small>"]:::held
    n689["Type assertion<br/><small>Syntax element</small>"]:::held
    n690["Assignment<br/><small>Syntax element</small>"]:::held
    n691["Async function of a block<br/><small>Syntax element</small>"]:::held
    n692["Waiting<br/><small>Syntax element</small>"]:::held
    n693["Call<br/><small>Syntax element</small>"]:::held
    n694["Constant<br/><small>Syntax element</small>"]:::held
    n695["Default import<br/><small>Syntax element</small>"]:::held
    n696["Documentation comment<br/><small>Syntax element</small>"]:::held
    n697["Export<br/><small>Syntax element</small>"]:::held
    n698["Condition<br/><small>Syntax element</small>"]:::held
    n699["List on one line<br/><small>Syntax element</small>"]:::held
    n700["Comment<br/><small>Syntax element</small>"]:::held
    n701["Property access<br/><small>Syntax element</small>"]:::held
    n702["Title of a module<br/><small>Syntax element</small>"]:::held
    n703["Import of names<br/><small>Syntax element</small>"]:::held
    n704["Object on several lines<br/><small>Syntax element</small>"]:::held
    n705["Object<br/><small>Syntax element</small>"]:::held
    n706["Object type<br/><small>Syntax element</small>"]:::held
    n707["Optional property access<br/><small>Syntax element</small>"]:::held
    n708["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n709["Group<br/><small>Syntax element</small>"]:::held
    n710["Names of a program<br/><small>Decision</small>"]:::neutral
    n711["Property<br/><small>Syntax element</small>"]:::held
    n712["Strict inequality<br/><small>Syntax element</small>"]:::held
    n713["Text<br/><small>Syntax element</small>"]:::held
    n714["TypeScript<br/><small>Language</small>"]:::held
    n715["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n716["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n717["TypeScript writer<br/><small>Function</small>"]:::held
    n718["Union type<br/><small>Syntax element</small>"]:::held
    n719["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n358
  n57 -->|Depends on| n171
  n58 -->|Implements| n20
  n58 -->|Depends on| n343
  n59 -->|Implements| n24
  n59 -->|Depends on| n358
  n59 -->|Depends on| n171
  n60 -->|Implements| n37
  n60 -->|Depends on| n358
  n61 -->|Implements| n38
  n61 -->|Depends on| n221
  n62 -->|Serves| n447
  n62 -->|Depends on| n358
  n62 -->|Depends on| n278
  n62 -->|Depends on| n280
  n62 -->|Depends on| n279
  n62 -->|Depends on| n0
  n62 -->|Depends on| n215
  n62 -->|Depends on| n219
  n62 -->|Depends on| n227
  n62 -->|Depends on| n224
  n62 -->|Depends on| n206
  n62 -->|Depends on| n212
  n62 -->|Depends on| n572
  n62 -->|Depends on| n308
  n62 -->|Depends on| n310
  n62 -->|Depends on| n160
  n63 -->|Serves| n447
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n572
  n63 -->|Depends on| n358
  n63 -->|Depends on| n347
  n63 -->|Depends on| n350
  n63 -->|Depends on| n338
  n63 -->|Depends on| n278
  n63 -->|Depends on| n277
  n63 -->|Depends on| n279
  n63 -->|Depends on| n0
  n63 -->|Depends on| n142
  n63 -->|Depends on| n589
  n63 -->|Depends on| n160
  n63 -->|Depends on| n304
  n63 -->|Depends on| n215
  n63 -->|Depends on| n212
  n63 -->|Depends on| n204
  n63 -->|Depends on| n203
  n63 -->|Depends on| n226
  n63 -->|Depends on| n205
  n63 -->|Depends on| n308
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n448
  n65 -->|Serves| n447
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n106
  n66 -->|Verifies| n173
  n66 -->|In| n52
  n66 -->|Depends on| n106
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n146
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n151
  n66 -->|Depends on| n295
  n66 -->|Depends on| n67
  n66 -->|Depends on| n311
  n70 -->|Verifies| n668
  n70 -->|Verifies| n661
  n70 -->|Verifies| n415
  n70 -->|In| n52
  n70 -->|Depends on| n668
  n70 -->|Depends on| n661
  n70 -->|Depends on| n714
  n70 -->|Depends on| n71
  n70 -->|Depends on| n301
  n70 -->|Depends on| n311
  n72 -->|Verifies| n123
  n72 -->|In| n52
  n72 -->|Depends on| n112
  n72 -->|Depends on| n123
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n146
  n72 -->|Depends on| n91
  n72 -->|Depends on| n151
  n72 -->|Depends on| n296
  n72 -->|Depends on| n311
  n73 -->|Verifies| n381
  n73 -->|Verifies| n380
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n151
  n73 -->|Depends on| n104
  n73 -->|Depends on| n309
  n73 -->|Depends on| n311
  n74 -->|Verifies| n109
  n74 -->|Verifies| n110
  n74 -->|Verifies| n165
  n74 -->|Verifies| n717
  n74 -->|Verifies| n677
  n74 -->|Verifies| n228
  n74 -->|Verifies| n406
  n74 -->|In| n52
  n74 -->|Depends on| n109
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n151
  n74 -->|Depends on| n146
  n74 -->|Depends on| n69
  n74 -->|Depends on| n143
  n74 -->|Depends on| n296
  n74 -->|Depends on| n311
  n75 -->|Verifies| n132
  n75 -->|In| n52
  n75 -->|Depends on| n132
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n151
  n75 -->|Depends on| n69
  n75 -->|Depends on| n97
  n75 -->|Depends on| n311
  n76 -->|Verifies| n126
  n76 -->|In| n52
  n76 -->|Depends on| n126
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n146
  n76 -->|Depends on| n151
  n76 -->|Depends on| n296
  n76 -->|Depends on| n311
  n77 -->|Verifies| n116
  n77 -->|Verifies| n170
  n77 -->|Verifies| n378
  n77 -->|Verifies| n391
  n77 -->|In| n52
  n77 -->|Depends on| n119
  n77 -->|Depends on| n116
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n146
  n77 -->|Depends on| n171
  n77 -->|Depends on| n445
  n77 -->|Depends on| n187
  n77 -->|Depends on| n151
  n77 -->|Depends on| n307
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n311
  n79 -->|Verifies| n117
  n79 -->|Verifies| n188
  n79 -->|Verifies| n402
  n79 -->|In| n52
  n79 -->|Depends on| n117
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n118
  n79 -->|Depends on| n151
  n79 -->|Depends on| n296
  n79 -->|Depends on| n311
  n80 -->|Verifies| n127
  n80 -->|In| n52
  n80 -->|Depends on| n127
  n80 -->|Depends on| n56
  n80 -->|Depends on| n41
  n80 -->|Depends on| n39
  n80 -->|Depends on| n146
  n80 -->|Depends on| n657
  n80 -->|Depends on| n93
  n80 -->|Depends on| n151
  n80 -->|Depends on| n48
  n80 -->|Depends on| n311
  n81 -->|Verifies| n167
  n81 -->|Verifies| n187
  n81 -->|In| n52
  n81 -->|Depends on| n167
  n81 -->|Depends on| n42
  n81 -->|Depends on| n41
  n81 -->|Depends on| n17
  n81 -->|Depends on| n98
  n81 -->|Depends on| n93
  n81 -->|Depends on| n652
  n81 -->|Depends on| n23
  n81 -->|Depends on| n311
  n82 -->|Verifies| n136
  n82 -->|In| n52
  n82 -->|Depends on| n136
  n82 -->|Depends on| n167
  n82 -->|Depends on| n194
  n82 -->|Depends on| n41
  n82 -->|Depends on| n51
  n82 -->|Depends on| n151
  n82 -->|Depends on| n296
  n82 -->|Depends on| n311
  n83 -->|Verifies| n130
  n83 -->|Verifies| n201
  n83 -->|Verifies| n375
  n83 -->|In| n52
  n83 -->|Depends on| n130
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n51
  n83 -->|Depends on| n41
  n83 -->|Depends on| n39
  n83 -->|Depends on| n146
  n83 -->|Depends on| n98
  n83 -->|Depends on| n93
  n83 -->|Depends on| n151
  n83 -->|Depends on| n713
  n83 -->|Depends on| n311
  n83 -->|Depends on| n657
  n84 -->|Verifies| n138
  n84 -->|Verifies| n396
  n84 -->|Verifies| n374
  n84 -->|Verifies| n392
  n84 -->|In| n52
  n84 -->|Depends on| n138
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n21
  n84 -->|Depends on| n41
  n84 -->|Depends on| n39
  n84 -->|Depends on| n146
  n84 -->|Depends on| n98
  n84 -->|Depends on| n93
  n84 -->|Depends on| n151
  n84 -->|Depends on| n311
  n84 -->|Depends on| n145
  n84 -->|Depends on| n714
  n85 -->|Verifies| n111
  n85 -->|Verifies| n393
  n85 -->|In| n52
  n85 -->|Depends on| n111
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n51
  n85 -->|Depends on| n98
  n85 -->|Depends on| n151
  n85 -->|Depends on| n311
  n85 -->|Depends on| n321
  n86 -->|Verifies| n137
  n86 -->|Verifies| n396
  n86 -->|Verifies| n374
  n86 -->|In| n52
  n86 -->|Depends on| n137
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n41
  n86 -->|Depends on| n39
  n86 -->|Depends on| n146
  n86 -->|Depends on| n98
  n86 -->|Depends on| n151
  n86 -->|Depends on| n311
  n87 -->|Verifies| n115
  n87 -->|Verifies| n156
  n87 -->|In| n52
  n87 -->|Depends on| n115
  n87 -->|Depends on| n42
  n87 -->|Depends on| n56
  n87 -->|Depends on| n98
  n87 -->|Depends on| n93
  n87 -->|Depends on| n211
  n87 -->|Depends on| n151
  n87 -->|Depends on| n311
  n88 -->|Verifies| n120
  n88 -->|Verifies| n169
  n88 -->|In| n52
  n88 -->|Depends on| n119
  n88 -->|Depends on| n120
  n88 -->|Depends on| n42
  n88 -->|Depends on| n56
  n88 -->|Depends on| n51
  n88 -->|Depends on| n187
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n146
  n88 -->|Depends on| n151
  n88 -->|Depends on| n307
  n88 -->|Depends on| n311
  n89 -->|Verifies| n344
  n89 -->|Verifies| n366
  n89 -->|Verifies| n382
  n89 -->|Verifies| n398
  n89 -->|In| n52
  n89 -->|Depends on| n119
  n89 -->|Depends on| n344
  n89 -->|Depends on| n19
  n89 -->|Depends on| n187
  n89 -->|Depends on| n41
  n89 -->|Depends on| n17
  n89 -->|Depends on| n51
  n89 -->|Depends on| n151
  n89 -->|Depends on| n307
  n89 -->|Depends on| n311
  n90 -->|Verifies| n119
  n90 -->|Verifies| n185
  n90 -->|Verifies| n586
  n90 -->|Verifies| n578
  n90 -->|Verifies| n590
  n90 -->|Verifies| n172
  n90 -->|In| n52
  n90 -->|Depends on| n119
  n90 -->|Depends on| n172
  n90 -->|Depends on| n51
  n90 -->|Depends on| n151
  n90 -->|Depends on| n307
  n90 -->|Depends on| n311
  n90 -->|Depends on| n102
  n92 -->|Verifies| n114
  n92 -->|Verifies| n125
  n92 -->|Verifies| n121
  n92 -->|In| n52
  n92 -->|Depends on| n114
  n92 -->|Depends on| n121
  n92 -->|Depends on| n42
  n92 -->|Depends on| n51
  n92 -->|Depends on| n151
  n92 -->|Depends on| n93
  n92 -->|Depends on| n296
  n92 -->|Depends on| n311
  n94 -->|Verifies| n122
  n94 -->|Verifies| n128
  n94 -->|In| n52
  n94 -->|Depends on| n122
  n94 -->|Depends on| n42
  n94 -->|Depends on| n56
  n94 -->|Depends on| n41
  n94 -->|Depends on| n39
  n94 -->|Depends on| n146
  n94 -->|Depends on| n98
  n94 -->|Depends on| n93
  n94 -->|Depends on| n148
  n94 -->|Depends on| n199
  n94 -->|Depends on| n151
  n94 -->|Depends on| n311
  n94 -->|Depends on| n145
  n94 -->|Depends on| n714
  n95 -->|Verifies| n126
  n95 -->|Verifies| n182
  n95 -->|In| n52
  n95 -->|Depends on| n126
  n95 -->|Depends on| n23
  n95 -->|Depends on| n21
  n95 -->|Depends on| n51
  n95 -->|Depends on| n41
  n95 -->|Depends on| n39
  n95 -->|Depends on| n146
  n95 -->|Depends on| n151
  n95 -->|Depends on| n189
  n95 -->|Depends on| n68
  n95 -->|Depends on| n307
  n95 -->|Depends on| n311
  n96 -->|Verifies| n129
  n96 -->|Verifies| n375
  n96 -->|In| n52
  n96 -->|Depends on| n129
  n96 -->|Depends on| n42
  n96 -->|Depends on| n56
  n96 -->|Depends on| n151
  n96 -->|Depends on| n311
  n96 -->|Depends on| n145
  n96 -->|Depends on| n714
  n96 -->|Depends on| n93
  n99 -->|Verifies| n133
  n99 -->|Verifies| n127
  n99 -->|Verifies| n652
  n99 -->|Verifies| n190
  n99 -->|Verifies| n654
  n99 -->|Verifies| n383
  n99 -->|Verifies| n650
  n99 -->|Verifies| n173
  n99 -->|In| n52
  n99 -->|Depends on| n133
  n99 -->|Depends on| n127
  n99 -->|Depends on| n42
  n99 -->|Depends on| n56
  n99 -->|Depends on| n51
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n22
  n99 -->|Depends on| n48
  n99 -->|Depends on| n23
  n99 -->|Depends on| n167
  n99 -->|Depends on| n17
  n99 -->|Depends on| n297
  n99 -->|Depends on| n146
  n99 -->|Depends on| n657
  n99 -->|Depends on| n98
  n99 -->|Depends on| n93
  n99 -->|Depends on| n151
  n99 -->|Depends on| n311
  n100 -->|Verifies| n135
  n100 -->|In| n52
  n100 -->|Depends on| n135
  n100 -->|Depends on| n56
  n100 -->|Depends on| n21
  n100 -->|Depends on| n41
  n100 -->|Depends on| n39
  n100 -->|Depends on| n146
  n100 -->|Depends on| n151
  n100 -->|Depends on| n311
  n101 -->|Verifies| n133
  n101 -->|Verifies| n190
  n101 -->|In| n52
  n101 -->|Depends on| n133
  n101 -->|Depends on| n42
  n101 -->|Depends on| n51
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n22
  n101 -->|Depends on| n23
  n101 -->|Depends on| n167
  n101 -->|Depends on| n17
  n101 -->|Depends on| n190
  n101 -->|Depends on| n296
  n101 -->|Depends on| n146
  n101 -->|Depends on| n657
  n101 -->|Depends on| n98
  n101 -->|Depends on| n93
  n101 -->|Depends on| n151
  n101 -->|Depends on| n311
  n103 -->|Verifies| n107
  n103 -->|Verifies| n108
  n103 -->|Verifies| n113
  n103 -->|Verifies| n372
  n103 -->|In| n52
  n103 -->|Depends on| n107
  n103 -->|Depends on| n56
  n103 -->|Depends on| n41
  n103 -->|Depends on| n39
  n103 -->|Depends on| n151
  n103 -->|Depends on| n68
  n103 -->|Depends on| n311
  n105 -->|Verifies| n134
  n105 -->|Verifies| n114
  n105 -->|Verifies| n131
  n105 -->|Verifies| n594
  n105 -->|Verifies| n588
  n105 -->|Verifies| n596
  n105 -->|In| n52
  n105 -->|Depends on| n134
  n105 -->|Depends on| n114
  n105 -->|Depends on| n51
  n105 -->|Depends on| n151
  n105 -->|Depends on| n104
  n105 -->|Depends on| n311
  n106 -->|Serves| n447
  n106 -->|Part of| n54
  n106 -->|Depends on| n124
  n106 -->|Depends on| n173
  n106 -->|Depends on| n151
  n106 -->|Depends on| n146
  n106 -->|Depends on| n198
  n106 -->|Depends on| n196
  n106 -->|Depends on| n369
  n106 -->|Depends on| n408
  n106 -->|Depends on| n152
  n106 -->|Depends on| n714
  n106 -->|Depends on| n43
  n106 -->|Depends on| n22
  n106 -->|Depends on| n21
  n106 -->|Depends on| n23
  n106 -->|Depends on| n39
  n106 -->|Depends on| n25
  n106 -->|Depends on| n174
  n106 -->|Depends on| n50
  n106 -->|Depends on| n680
  n106 -->|Depends on| n686
  n106 -->|Depends on| n296
  n106 -->|Depends on| n295
  n106 -->|Depends on| n199
  n106 -->|Depends on| n200
  n106 -->|Depends on| n202
  n106 -->|Depends on| n201
  n106 -->|Depends on| n144
  n106 -->|Depends on| n149
  n106 -->|Depends on| n17
  n106 -->|Depends on| n187
  n106 -->|Depends on| n145
  n107 -->|Serves| n454
  n107 -->|Part of| n54
  n107 -->|Depends on| n124
  n107 -->|Depends on| n108
  n107 -->|Depends on| n14
  n107 -->|Depends on| n39
  n107 -->|Depends on| n686
  n107 -->|Depends on| n50
  n107 -->|Depends on| n296
  n108 -->|Serves| n454
  n108 -->|Depends on| n124
  n108 -->|Depends on| n183
  n108 -->|Depends on| n113
  n108 -->|Depends on| n40
  n108 -->|Depends on| n189
  n108 -->|Depends on| n187
  n108 -->|Depends on| n146
  n108 -->|Depends on| n39
  n108 -->|Depends on| n296
  n108 -->|Depends on| n139
  n109 -->|Serves| n447
  n109 -->|Part of| n54
  n109 -->|Depends on| n124
  n109 -->|Depends on| n110
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n50
  n109 -->|Depends on| n296
  n110 -->|Serves| n447
  n110 -->|Depends on| n124
  n110 -->|Depends on| n165
  n110 -->|Depends on| n686
  n110 -->|Depends on| n160
  n110 -->|Depends on| n296
  n111 -->|Serves| n454
  n111 -->|Part of| n54
  n111 -->|Depends on| n124
  n111 -->|Depends on| n34
  n111 -->|Depends on| n321
  n111 -->|Depends on| n146
  n111 -->|Depends on| n21
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n327
  n111 -->|Depends on| n144
  n111 -->|Depends on| n50
  n111 -->|Depends on| n680
  n111 -->|Depends on| n686
  n111 -->|Depends on| n296
  n112 -->|Serves| n447
  n112 -->|Part of| n54
  n112 -->|Depends on| n146
  n112 -->|Depends on| n124
  n112 -->|Depends on| n183
  n112 -->|Depends on| n576
  n112 -->|Depends on| n594
  n112 -->|Depends on| n23
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n296
  n113 -->|Serves| n447
  n113 -->|Depends on| n296
  n113 -->|Depends on| n307
  n114 -->|Serves| n447
  n114 -->|Part of| n54
  n114 -->|Depends on| n151
  n114 -->|Depends on| n124
  n114 -->|Depends on| n131
  n114 -->|Depends on| n167
  n114 -->|Depends on| n194
  n114 -->|Depends on| n110
  n114 -->|Depends on| n125
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n41
  n114 -->|Depends on| n50
  n114 -->|Depends on| n296
  n115 -->|Serves| n447
  n115 -->|Part of| n54
  n115 -->|Depends on| n124
  n115 -->|Depends on| n165
  n115 -->|Depends on| n110
  n115 -->|Depends on| n16
  n115 -->|Depends on| n156
  n115 -->|Depends on| n345
  n115 -->|Depends on| n346
  n115 -->|Depends on| n225
  n115 -->|Depends on| n155
  n115 -->|Depends on| n21
  n115 -->|Depends on| n23
  n115 -->|Depends on| n39
  n115 -->|Depends on| n50
  n115 -->|Depends on| n296
  n116 -->|Serves| n447
  n116 -->|Part of| n54
  n116 -->|Depends on| n124
  n116 -->|Depends on| n170
  n116 -->|Depends on| n108
  n116 -->|Depends on| n14
  n116 -->|Depends on| n39
  n117 -->|Serves| n447
  n117 -->|Part of| n54
  n117 -->|Depends on| n124
  n117 -->|Depends on| n118
  n117 -->|Depends on| n21
  n117 -->|Depends on| n23
  n117 -->|Depends on| n22
  n117 -->|Depends on| n43
  n117 -->|Depends on| n28
  n117 -->|Depends on| n26
  n117 -->|Depends on| n53
  n117 -->|Depends on| n34
  n117 -->|Depends on| n33
  n117 -->|Depends on| n146
  n117 -->|Depends on| n17
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n296
  n119 -->|Serves| n447
  n119 -->|Part of| n54
  n119 -->|Depends on| n124
  n119 -->|Depends on| n185
  n119 -->|Depends on| n576
  n119 -->|Depends on| n594
  n119 -->|Depends on| n586
  n119 -->|Depends on| n50
  n120 -->|Serves| n447
  n120 -->|Part of| n54
  n120 -->|Depends on| n146
  n120 -->|Depends on| n124
  n120 -->|Depends on| n169
  n120 -->|Depends on| n344
  n120 -->|Depends on| n187
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n50
  n120 -->|Depends on| n296
  n121 -->|Serves| n447
  n121 -->|Part of| n54
  n121 -->|Depends on| n124
  n121 -->|Depends on| n125
  n121 -->|Depends on| n194
  n121 -->|Depends on| n50
  n121 -->|Depends on| n682
  n121 -->|Depends on| n296
  n122 -->|Serves| n454
  n122 -->|Part of| n54
  n122 -->|Depends on| n124
  n122 -->|Depends on| n146
  n122 -->|Depends on| n187
  n122 -->|Depends on| n40
  n122 -->|Depends on| n148
  n122 -->|Depends on| n199
  n122 -->|Depends on| n21
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n144
  n122 -->|Depends on| n714
  n122 -->|Depends on| n716
  n122 -->|Depends on| n702
  n122 -->|Depends on| n696
  n122 -->|Depends on| n697
  n122 -->|Depends on| n694
  n122 -->|Depends on| n693
  n122 -->|Depends on| n705
  n122 -->|Depends on| n711
  n122 -->|Depends on| n713
  n122 -->|Depends on| n703
  n122 -->|Depends on| n50
  n122 -->|Depends on| n296
  n122 -->|Depends on| n41
  n122 -->|Depends on| n151
  n122 -->|Depends on| n128
  n122 -->|Depends on| n145
  n122 -->|Depends on| n701
  n122 -->|Depends on| n699
  n123 -->|Serves| n447
  n123 -->|Part of| n54
  n123 -->|Depends on| n146
  n123 -->|Depends on| n686
  n123 -->|Depends on| n124
  n123 -->|Depends on| n183
  n123 -->|Depends on| n113
  n123 -->|Depends on| n21
  n123 -->|Depends on| n39
  n123 -->|Depends on| n50
  n123 -->|Depends on| n296
  n124 -->|Serves| n447
  n124 -->|Depends on| n151
  n124 -->|Depends on| n167
  n124 -->|Depends on| n166
  n124 -->|Depends on| n180
  n124 -->|Depends on| n194
  n124 -->|Depends on| n182
  n124 -->|Depends on| n572
  n124 -->|Depends on| n50
  n124 -->|Depends on| n41
  n124 -->|Depends on| n17
  n124 -->|Depends on| n452
  n124 -->|Depends on| n446
  n124 -->|Depends on| n686
  n124 -->|Depends on| n684
  n124 -->|Depends on| n682
  n124 -->|Depends on| n296
  n124 -->|Depends on| n146
  n124 -->|Depends on| n189
  n124 -->|Depends on| n125
  n125 -->|Serves| n447
  n125 -->|Depends on| n195
  n125 -->|Depends on| n296
  n126 -->|Serves| n454
  n126 -->|Part of| n54
  n126 -->|Depends on| n124
  n126 -->|Depends on| n182
  n126 -->|Depends on| n23
  n126 -->|Depends on| n50
  n126 -->|Depends on| n686
  n126 -->|Depends on| n684
  n126 -->|Depends on| n682
  n126 -->|Depends on| n296
  n127 -->|Serves| n655
  n127 -->|Part of| n54
  n127 -->|Depends on| n151
  n127 -->|Depends on| n124
  n127 -->|Depends on| n652
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n50
  n127 -->|Depends on| n296
  n128 -->|Serves| n454
  n128 -->|Depends on| n716
  n128 -->|Depends on| n702
  n128 -->|Depends on| n696
  n128 -->|Depends on| n697
  n128 -->|Depends on| n694
  n128 -->|Depends on| n693
  n128 -->|Depends on| n705
  n128 -->|Depends on| n711
  n128 -->|Depends on| n713
  n128 -->|Depends on| n699
  n128 -->|Depends on| n703
  n129 -->|Serves| n454
  n129 -->|Part of| n54
  n129 -->|Depends on| n124
  n129 -->|Depends on| n146
  n129 -->|Depends on| n187
  n129 -->|Depends on| n145
  n129 -->|Depends on| n21
  n129 -->|Depends on| n22
  n129 -->|Depends on| n39
  n129 -->|Depends on| n50
  n129 -->|Depends on| n296
  n130 -->|Serves| n454
  n130 -->|Part of| n54
  n130 -->|Depends on| n124
  n130 -->|Depends on| n146
  n130 -->|Depends on| n187
  n130 -->|Depends on| n183
  n130 -->|Depends on| n576
  n130 -->|Depends on| n254
  n130 -->|Depends on| n253
  n130 -->|Depends on| n202
  n130 -->|Depends on| n201
  n130 -->|Depends on| n21
  n130 -->|Depends on| n23
  n130 -->|Depends on| n22
  n130 -->|Depends on| n39
  n130 -->|Depends on| n25
  n130 -->|Depends on| n174
  n130 -->|Depends on| n714
  n130 -->|Depends on| n17
  n130 -->|Depends on| n50
  n130 -->|Depends on| n296
  n130 -->|Depends on| n295
  n130 -->|Depends on| n228
  n130 -->|Depends on| n713
  n130 -->|Depends on| n133
  n130 -->|Depends on| n151
  n131 -->|Serves| n447
  n131 -->|Depends on| n151
  n131 -->|Depends on| n144
  n131 -->|Depends on| n124
  n131 -->|Depends on| n194
  n131 -->|Depends on| n576
  n131 -->|Depends on| n594
  n131 -->|Depends on| n50
  n131 -->|Depends on| n296
  n132 -->|Serves| n447
  n132 -->|Part of| n54
  n132 -->|Depends on| n109
  n132 -->|Depends on| n41
  n133 -->|Serves| n655
  n133 -->|Part of| n54
  n133 -->|Depends on| n151
  n133 -->|Depends on| n124
  n133 -->|Depends on| n115
  n133 -->|Depends on| n165
  n133 -->|Depends on| n110
  n133 -->|Depends on| n652
  n133 -->|Depends on| n654
  n133 -->|Depends on| n655
  n133 -->|Depends on| n16
  n133 -->|Depends on| n156
  n133 -->|Depends on| n651
  n133 -->|Depends on| n41
  n133 -->|Depends on| n21
  n133 -->|Depends on| n23
  n133 -->|Depends on| n39
  n133 -->|Depends on| n50
  n133 -->|Depends on| n173
  n133 -->|Depends on| n296
  n134 -->|Serves| n447
  n134 -->|Part of| n54
  n134 -->|Depends on| n124
  n134 -->|Depends on| n131
  n135 -->|Serves| n454
  n135 -->|Part of| n54
  n135 -->|Depends on| n146
  n135 -->|Depends on| n124
  n135 -->|Depends on| n183
  n135 -->|Depends on| n576
  n135 -->|Depends on| n23
  n135 -->|Depends on| n39
  n135 -->|Depends on| n50
  n135 -->|Depends on| n296
  n136 -->|Serves| n447
  n136 -->|Part of| n54
  n136 -->|Depends on| n124
  n136 -->|Depends on| n167
  n136 -->|Depends on| n194
  n136 -->|Depends on| n180
  n136 -->|Depends on| n50
  n136 -->|Depends on| n686
  n136 -->|Depends on| n684
  n136 -->|Depends on| n682
  n136 -->|Depends on| n296
  n137 -->|Serves| n454
  n137 -->|Part of| n54
  n137 -->|Depends on| n124
  n137 -->|Depends on| n21
  n137 -->|Depends on| n23
  n137 -->|Depends on| n39
  n137 -->|Depends on| n327
  n137 -->|Depends on| n713
  n137 -->|Depends on| n41
  n137 -->|Depends on| n151
  n137 -->|Depends on| n50
  n137 -->|Depends on| n296
  n138 -->|Serves| n454
  n138 -->|Part of| n54
  n138 -->|Depends on| n124
  n138 -->|Depends on| n146
  n138 -->|Depends on| n187
  n138 -->|Depends on| n21
  n138 -->|Depends on| n23
  n138 -->|Depends on| n145
  n138 -->|Depends on| n40
  n138 -->|Depends on| n199
  n138 -->|Depends on| n39
  n138 -->|Depends on| n33
  n138 -->|Depends on| n320
  n138 -->|Depends on| n144
  n138 -->|Depends on| n714
  n138 -->|Depends on| n50
  n138 -->|Depends on| n296
  n138 -->|Depends on| n41
  n138 -->|Depends on| n151
  n155 -->|Read in| n208
  n155 -->|Depends on| n207
  n155 -->|Depends on| n210
  n156 -->|Serves| n447
  n156 -->|Depends on| n31
  n156 -->|Depends on| n154
  n160 -->|Serves| n454
  n160 -->|Depends on| n304
  n161 -->|Serves| n454
  n161 -->|Applied by| n160
  n161 -->|Applied by| n304
  n163 -->|Serves| n454
  n163 -->|Depends on| n159
  n164 -->|Serves| n454
  n165 -->|Serves| n447
  n165 -->|Depends on| n151
  n165 -->|Depends on| n146
  n165 -->|Depends on| n39
  n165 -->|Depends on| n195
  n165 -->|Depends on| n40
  n165 -->|Depends on| n228
  n165 -->|Depends on| n297
  n165 -->|Depends on| n145
  n165 -->|Depends on| n714
  n166 -->|Serves| n447
  n166 -->|Depends on| n140
  n166 -->|Depends on| n186
  n166 -->|Depends on| n189
  n166 -->|Depends on| n40
  n166 -->|Depends on| n160
  n166 -->|Depends on| n142
  n166 -->|Depends on| n146
  n166 -->|Depends on| n312
  n166 -->|Depends on| n190
  n166 -->|Depends on| n163
  n167 -->|Serves| n447
  n167 -->|Depends on| n146
  n167 -->|Depends on| n452
  n167 -->|Depends on| n168
  n167 -->|Depends on| n189
  n167 -->|Depends on| n186
  n167 -->|Depends on| n31
  n167 -->|Depends on| n21
  n167 -->|Depends on| n39
  n167 -->|Depends on| n191
  n167 -->|Depends on| n187
  n167 -->|Depends on| n177
  n167 -->|Depends on| n195
  n167 -->|Depends on| n228
  n167 -->|Depends on| n40
  n167 -->|Depends on| n297
  n167 -->|Depends on| n175
  n167 -->|Depends on| n48
  n167 -->|Depends on| n173
  n167 -->|Depends on| n28
  n167 -->|Depends on| n145
  n167 -->|Depends on| n178
  n168 -->|Serves| n447
  n169 -->|Serves| n447
  n169 -->|Depends on| n151
  n169 -->|Depends on| n17
  n169 -->|Depends on| n41
  n169 -->|Depends on| n307
  n170 -->|Serves| n447
  n170 -->|Depends on| n171
  n170 -->|Depends on| n151
  n170 -->|Depends on| n146
  n170 -->|Depends on| n50
  n170 -->|Depends on| n679
  n170 -->|Depends on| n17
  n170 -->|Depends on| n53
  n170 -->|Depends on| n445
  n170 -->|Depends on| n26
  n170 -->|Depends on| n21
  n170 -->|Depends on| n39
  n170 -->|Depends on| n187
  n170 -->|Depends on| n169
  n170 -->|Depends on| n172
  n170 -->|Depends on| n344
  n170 -->|Depends on| n586
  n170 -->|Depends on| n299
  n170 -->|Depends on| n304
  n170 -->|Depends on| n300
  n172 -->|Serves| n447
  n172 -->|Depends on| n160
  n172 -->|Depends on| n307
  n173 -->|Serves| n447
  n173 -->|Depends on| n146
  n173 -->|Depends on| n198
  n173 -->|Depends on| n714
  n173 -->|Depends on| n187
  n173 -->|Depends on| n21
  n173 -->|Depends on| n39
  n173 -->|Depends on| n25
  n173 -->|Depends on| n174
  n173 -->|Depends on| n144
  n175 -->|Serves| n447
  n176 -->|Serves| n447
  n177 -->|Serves| n447
  n177 -->|Depends on| n40
  n177 -->|Depends on| n149
  n177 -->|Depends on| n297
  n177 -->|Depends on| n306
  n177 -->|Depends on| n299
  n177 -->|Depends on| n160
  n177 -->|Depends on| n186
  n177 -->|Depends on| n189
  n177 -->|Depends on| n157
  n177 -->|Depends on| n176
  n177 -->|Depends on| n455
  n177 -->|Depends on| n146
  n177 -->|Depends on| n714
  n177 -->|Depends on| n327
  n177 -->|Depends on| n163
  n177 -->|Depends on| n164
  n177 -->|Depends on| n175
  n178 -->|Serves| n447
  n178 -->|Depends on| n452
  n178 -->|Depends on| n297
  n180 -->|Serves| n447
  n180 -->|Depends on| n27
  n180 -->|Depends on| n228
  n180 -->|Depends on| n147
  n180 -->|Depends on| n146
  n180 -->|Depends on| n449
  n180 -->|Depends on| n444
  n180 -->|Depends on| n176
  n180 -->|Depends on| n450
  n180 -->|Depends on| n451
  n180 -->|Depends on| n189
  n180 -->|Depends on| n21
  n180 -->|Depends on| n39
  n180 -->|Depends on| n187
  n180 -->|Depends on| n177
  n180 -->|Depends on| n40
  n180 -->|Depends on| n145
  n180 -->|Depends on| n305
  n180 -->|Depends on| n236
  n180 -->|Depends on| n230
  n180 -->|Depends on| n232
  n180 -->|Depends on| n240
  n180 -->|Depends on| n249
  n180 -->|Depends on| n246
  n180 -->|Depends on| n244
  n180 -->|Depends on| n234
  n181 -->|Serves| n248
  n181 -->|Applied by| n180
  n181 -->|Applied by| n194
  n182 -->|Serves| n454
  n182 -->|Depends on| n146
  n182 -->|Depends on| n144
  n182 -->|Depends on| n189
  n182 -->|Depends on| n262
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n40
  n182 -->|Depends on| n307
  n183 -->|Serves| n454
  n183 -->|Depends on| n144
  n183 -->|Depends on| n186
  n183 -->|Depends on| n40
  n183 -->|Depends on| n307
  n185 -->|Serves| n447
  n185 -->|Depends on| n146
  n185 -->|Depends on| n443
  n185 -->|Depends on| n184
  n185 -->|Depends on| n17
  n185 -->|Depends on| n183
  n185 -->|Depends on| n194
  n185 -->|Depends on| n304
  n186 -->|Serves| n447
  n186 -->|Depends on| n660
  n187 -->|Serves| n447
  n187 -->|Depends on| n146
  n187 -->|Depends on| n21
  n187 -->|Depends on| n39
  n187 -->|Depends on| n199
  n187 -->|Depends on| n40
  n187 -->|Depends on| n145
  n187 -->|Depends on| n714
  n188 -->|Serves| n447
  n188 -->|Implements| n28
  n188 -->|Depends on| n21
  n188 -->|Depends on| n39
  n188 -->|Depends on| n25
  n188 -->|Depends on| n179
  n188 -->|Depends on| n46
  n189 -->|Serves| n447
  n189 -->|Depends on| n149
  n189 -->|Depends on| n251
  n190 -->|Serves| n447
  n190 -->|Depends on| n296
  n191 -->|Serves| n447
  n191 -->|Depends on| n716
  n191 -->|Depends on| n189
  n191 -->|Depends on| n193
  n191 -->|Depends on| n55
  n191 -->|Depends on| n27
  n191 -->|Depends on| n46
  n191 -->|Depends on| n25
  n191 -->|Depends on| n39
  n191 -->|Depends on| n186
  n191 -->|Depends on| n141
  n191 -->|Depends on| n297
  n191 -->|Depends on| n715
  n191 -->|Depends on| n147
  n191 -->|Depends on| n40
  n192 -->|Serves| n454
  n192 -->|Applied by| n177
  n192 -->|Applied by| n194
  n194 -->|Serves| n447
  n194 -->|Depends on| n228
  n194 -->|Depends on| n140
  n194 -->|Depends on| n153
  n194 -->|Depends on| n142
  n194 -->|Depends on| n146
  n194 -->|Depends on| n31
  n194 -->|Depends on| n21
  n194 -->|Depends on| n39
  n194 -->|Depends on| n40
  n194 -->|Depends on| n187
  n194 -->|Depends on| n307
  n194 -->|Depends on| n312
  n194 -->|Depends on| n238
  n194 -->|Depends on| n230
  n194 -->|Depends on| n246
  n194 -->|Depends on| n242
  n195 -->|Serves| n447
  n195 -->|Depends on| n150
  n195 -->|Depends on| n149
  n195 -->|Depends on| n146
  n195 -->|Depends on| n39
  n195 -->|Depends on| n40
  n195 -->|Depends on| n228
  n195 -->|Depends on| n297
  n196 -->|Refines| n447
  n197 -->|Accepts| n196
  n201 -->|Serves| n447
  n201 -->|Depends on| n202
  n201 -->|Depends on| n716
  n201 -->|Depends on| n149
  n201 -->|Depends on| n696
  n201 -->|Depends on| n702
  n201 -->|Depends on| n700
  n201 -->|Depends on| n703
  n201 -->|Depends on| n697
  n201 -->|Depends on| n694
  n201 -->|Depends on| n693
  n201 -->|Depends on| n704
  n201 -->|Depends on| n711
  n201 -->|Depends on| n713
  n201 -->|Depends on| n699
  n203 -->|Read in| n208
  n204 -->|Read in| n208
  n205 -->|Read in| n208
  n206 -->|Read in| n208
  n207 -->|Read in| n208
  n208 -->|Queries written in| n659
  n208 -->|Read by| n668
  n208 -->|Uses| n315
  n209 -->|Read in| n208
  n210 -->|Read in| n208
  n210 -->|Depends on| n206
  n211 -->|Read in| n218
  n212 -->|Read in| n218
  n213 -->|Read in| n218
  n214 -->|Read in| n218
  n214 -->|Depends on| n219
  n214 -->|Depends on| n216
  n215 -->|Read in| n218
  n215 -->|Depends on| n219
  n215 -->|Depends on| n216
  n216 -->|Read in| n218
  n217 -->|Read in| n218
  n217 -->|Depends on| n215
  n218 -->|Queries written in| n659
  n218 -->|Read by| n668
  n218 -->|Uses| n318
  n219 -->|Read in| n218
  n219 -->|Depends on| n213
  n220 -->|Read in| n714
  n221 -->|Read in| n208
  n222 -->|Read in| n208
  n223 -->|Read in| n208
  n225 -->|Read in| n218
  n225 -->|Depends on| n215
  n226 -->|Read in| n208
  n227 -->|Read in| n218
  n227 -->|Depends on| n213
  n228 -->|Serves| n447
  n228 -->|Depends on| n668
  n228 -->|Depends on| n661
  n228 -->|Depends on| n714
  n228 -->|Depends on| n208
  n228 -->|Depends on| n717
  n228 -->|Depends on| n675
  n228 -->|Depends on| n676
  n228 -->|Depends on| n677
  n228 -->|Depends on| n31
  n228 -->|Depends on| n21
  n228 -->|Depends on| n39
  n228 -->|Depends on| n301
  n229 -->|Serves| n447
  n229 -->|Applied by| n228
  n229 -->|Applied by| n344
  n230 -->|Refines| n248
  n231 -->|Accepts| n230
  n232 -->|Refines| n248
  n233 -->|Accepts| n232
  n234 -->|Refines| n248
  n235 -->|Accepts| n234
  n236 -->|Refines| n248
  n237 -->|Accepts| n236
  n238 -->|Refines| n248
  n239 -->|Accepts| n238
  n240 -->|Refines| n248
  n241 -->|Accepts| n240
  n242 -->|Refines| n248
  n243 -->|Accepts| n242
  n244 -->|Refines| n246
  n244 -->|Depends on| n246
  n245 -->|Accepts| n244
  n246 -->|Refines| n248
  n247 -->|Accepts| n246
  n249 -->|Refines| n248
  n250 -->|Accepts| n249
  n251 -->|Refines| n456
  n252 -->|Accepts| n251
  n254 -->|Refines| n456
  n255 -->|Accepts| n254
  n256 -->|Read in| n218
  n256 -->|Depends on| n215
  n257 -->|Defined by| n263
  n257 -->|Depends on| n263
  n258 -->|Defined by| n263
  n258 -->|Depends on| n263
  n259 -->|Defined by| n263
  n259 -->|Depends on| n263
  n260 -->|Defined by| n263
  n260 -->|Depends on| n263
  n260 -->|Depends on| n258
  n261 -->|Defined by| n263
  n261 -->|Depends on| n263
  n261 -->|Depends on| n257
  n262 -->|Defined by| n263
  n262 -->|Depends on| n263
  n262 -->|Depends on| n257
  n264 -->|Read in| n218
  n264 -->|Depends on| n219
  n264 -->|Depends on| n216
  n264 -->|Depends on| n215
  n264 -->|Depends on| n258
  n265 -->|Defined by| n263
  n265 -->|Depends on| n263
  n267 -->|Defined by| n263
  n267 -->|Depends on| n263
  n268 -->|Defined by| n263
  n268 -->|Depends on| n263
  n269 -->|Defined by| n263
  n269 -->|Depends on| n263
  n270 -->|Depends on| n146
  n271 -->|Read in| n218
  n271 -->|Depends on| n215
  n272 -->|Defined by| n263
  n272 -->|Depends on| n263
  n273 -->|Defined by| n266
  n273 -->|Depends on| n266
  n273 -->|Depends on| n276
  n273 -->|Depends on| n275
  n274 -->|Defined by| n266
  n274 -->|Depends on| n266
  n274 -->|Depends on| n263
  n275 -->|Defined by| n266
  n275 -->|Depends on| n266
  n276 -->|Defined by| n266
  n276 -->|Depends on| n266
  n276 -->|Depends on| n263
  n281 -->|Defined by| n287
  n281 -->|Depends on| n287
  n281 -->|Depends on| n293
  n282 -->|Defined by| n287
  n282 -->|Depends on| n287
  n283 -->|Defined by| n287
  n283 -->|Depends on| n287
  n284 -->|Defined by| n287
  n284 -->|Depends on| n287
  n285 -->|Defined by| n287
  n285 -->|Depends on| n287
  n285 -->|Depends on| n284
  n286 -->|Defined by| n287
  n286 -->|Depends on| n287
  n286 -->|Depends on| n284
  n288 -->|Defined by| n287
  n288 -->|Depends on| n287
  n289 -->|Defined by| n287
  n289 -->|Depends on| n287
  n289 -->|Depends on| n288
  n290 -->|Defined by| n287
  n290 -->|Depends on| n287
  n290 -->|Depends on| n288
  n291 -->|Defined by| n287
  n291 -->|Depends on| n287
  n291 -->|Depends on| n286
  n292 -->|Defined by| n287
  n292 -->|Depends on| n287
  n292 -->|Depends on| n293
  n293 -->|Defined by| n287
  n293 -->|Depends on| n287
  n294 -->|Defined by| n287
  n294 -->|Depends on| n287
  n294 -->|Depends on| n288
  n295 -->|Written in| n304
  n295 -->|Depends on| n304
  n296 -->|Written in| n304
  n296 -->|Depends on| n304
  n297 -->|Written in| n304
  n297 -->|Depends on| n304
  n297 -->|Depends on| n306
  n298 -->|Serves| n454
  n298 -->|Applied by| n297
  n298 -->|Applied by| n312
  n298 -->|Applied by| n300
  n298 -->|Applied by| n296
  n298 -->|Applied by| n311
  n298 -->|Applied by| n295
  n298 -->|Applied by| n308
  n298 -->|Applied by| n306
  n299 -->|Serves| n454
  n299 -->|Depends on| n304
  n300 -->|Written in| n304
  n300 -->|Depends on| n304
  n300 -->|Depends on| n306
  n301 -->|Written in| n304
  n302 -->|Written in| n304
  n303 -->|Written in| n304
  n305 -->|Written in| n304
  n306 -->|Serves| n454
  n306 -->|Depends on| n304
  n307 -->|Written in| n304
  n308 -->|Written in| n304
  n308 -->|Depends on| n304
  n309 -->|Written in| n304
  n310 -->|Written in| n304
  n311 -->|Written in| n304
  n311 -->|Depends on| n304
  n312 -->|Written in| n304
  n312 -->|Depends on| n304
  n313 -->|Written in| n304
  n314 -->|Serves| n454
  n320 -->|Serves| n454
  n322 -->|Serves| n454
  n323 -->|Serves| n454
  n327 -->|Serves| n454
  n329 -->|Defined by| n358
  n329 -->|Read in| n218
  n329 -->|Depends on| n358
  n329 -->|Depends on| n347
  n329 -->|Depends on| n215
  n330 -->|Defined by| n358
  n330 -->|Read in| n218
  n330 -->|Depends on| n358
  n330 -->|Depends on| n151
  n330 -->|Depends on| n337
  n330 -->|Depends on| n214
  n330 -->|Depends on| n215
  n331 -->|Defined by| n358
  n331 -->|Read in| n218
  n331 -->|Depends on| n358
  n331 -->|Depends on| n347
  n331 -->|Depends on| n215
  n332 -->|Defined by| n358
  n332 -->|Read in| n218
  n332 -->|Depends on| n358
  n332 -->|Depends on| n347
  n332 -->|Depends on| n214
  n332 -->|Depends on| n215
  n333 -->|Defined by| n358
  n333 -->|Read in| n218
  n333 -->|Depends on| n358
  n333 -->|Depends on| n347
  n333 -->|Depends on| n214
  n333 -->|Depends on| n215
  n333 -->|Depends on| n351
  n334 -->|Defined by| n358
  n334 -->|Read in| n218
  n334 -->|Depends on| n358
  n334 -->|Depends on| n347
  n334 -->|Depends on| n214
  n334 -->|Depends on| n215
  n335 -->|Defined by| n358
  n335 -->|Read in| n218
  n335 -->|Depends on| n358
  n335 -->|Depends on| n280
  n335 -->|Depends on| n1
  n335 -->|Depends on| n214
  n335 -->|Depends on| n215
  n335 -->|Depends on| n227
  n335 -->|Depends on| n224
  n336 -->|Read in| n218
  n336 -->|Depends on| n219
  n337 -->|Defined by| n358
  n337 -->|Read in| n218
  n337 -->|Depends on| n358
  n337 -->|Depends on| n7
  n337 -->|Depends on| n214
  n337 -->|Depends on| n215
  n337 -->|Depends on| n227
  n337 -->|Depends on| n209
  n339 -->|Defined by| n358
  n339 -->|Read in| n218
  n339 -->|Depends on| n358
  n339 -->|Depends on| n347
  n339 -->|Depends on| n214
  n339 -->|Depends on| n215
  n339 -->|Depends on| n329
  n339 -->|Depends on| n333
  n340 -->|Defined by| n358
  n340 -->|Read in| n208
  n340 -->|Depends on| n358
  n340 -->|Depends on| n222
  n340 -->|Depends on| n221
  n341 -->|Uses the variables of| n9
  n341 -->|Uses the variables of| n12
  n341 -->|Uses the variables of| n6
  n341 -->|Styles| n344
  n342 -->|Defined by| n358
  n342 -->|Read in| n218
  n342 -->|Depends on| n358
  n342 -->|Depends on| n347
  n342 -->|Depends on| n215
  n344 -->|Serves| n447
  n344 -->|Depends on| n345
  n344 -->|Depends on| n354
  n344 -->|Depends on| n7
  n344 -->|Depends on| n13
  n344 -->|Depends on| n4
  n344 -->|Depends on| n9
  n344 -->|Depends on| n8
  n344 -->|Depends on| n12
  n344 -->|Depends on| n5
  n344 -->|Depends on| n10
  n344 -->|Depends on| n3
  n344 -->|Depends on| n6
  n344 -->|Depends on| n45
  n344 -->|Depends on| n21
  n344 -->|Depends on| n16
  n344 -->|Depends on| n19
  n344 -->|Depends on| n352
  n344 -->|Depends on| n357
  n344 -->|Depends on| n355
  n344 -->|Depends on| n340
  n344 -->|Depends on| n336
  n344 -->|Depends on| n348
  n344 -->|Depends on| n346
  n344 -->|Depends on| n207
  n344 -->|Depends on| n206
  n344 -->|Depends on| n307
  n344 -->|Depends on| n304
  n344 -->|Depends on| n668
  n344 -->|Depends on| n218
  n344 -->|Depends on| n208
  n346 -->|Defined by| n358
  n346 -->|Read in| n218
  n346 -->|Depends on| n358
  n346 -->|Depends on| n211
  n346 -->|Depends on| n219
  n346 -->|Depends on| n216
  n346 -->|Depends on| n215
  n348 -->|Defined by| n358
  n348 -->|Read in| n218
  n348 -->|Depends on| n358
  n348 -->|Depends on| n225
  n348 -->|Depends on| n220
  n348 -->|Depends on| n701
  n348 -->|Depends on| n690
  n349 -->|Uses the variables of| n7
  n349 -->|Uses the variables of| n13
  n349 -->|Uses the variables of| n9
  n349 -->|Uses the variables of| n8
  n349 -->|Uses the variables of| n12
  n349 -->|Uses the variables of| n5
  n349 -->|Uses the variables of| n10
  n349 -->|Uses the variables of| n3
  n349 -->|Uses the variables of| n6
  n349 -->|Styles| n344
  n351 -->|Defined by| n358
  n351 -->|Read in| n218
  n351 -->|Depends on| n358
  n351 -->|Depends on| n350
  n351 -->|Depends on| n347
  n351 -->|Depends on| n214
  n351 -->|Depends on| n215
  n352 -->|Defined by| n358
  n352 -->|Read in| n218
  n352 -->|Depends on| n358
  n352 -->|Depends on| n214
  n352 -->|Depends on| n353
  n352 -->|Depends on| n339
  n352 -->|Depends on| n335
  n353 -->|Defined by| n358
  n353 -->|Read in| n218
  n353 -->|Depends on| n358
  n353 -->|Depends on| n214
  n353 -->|Depends on| n330
  n353 -->|Depends on| n331
  n353 -->|Depends on| n332
  n353 -->|Depends on| n342
  n353 -->|Depends on| n334
  n355 -->|Defined by| n358
  n355 -->|Read in| n208
  n355 -->|Depends on| n358
  n355 -->|Depends on| n207
  n355 -->|Depends on| n206
  n355 -->|Depends on| n209
  n355 -->|Depends on| n205
  n356 -->|Serves| n454
  n356 -->|Applied by| n349
  n356 -->|Applied by| n341
  n356 -->|Applied by| n357
  n356 -->|Applied by| n340
  n356 -->|Applied by| n344
  n357 -->|Defined by| n358
  n357 -->|Read in| n208
  n357 -->|Depends on| n358
  n357 -->|Depends on| n207
  n357 -->|Depends on| n222
  n357 -->|Depends on| n221
  n357 -->|Depends on| n204
  n357 -->|Depends on| n223
  n357 -->|Depends on| n210
  n357 -->|Depends on| n206
  n359 -->|Chooses| n372
  n359 -->|In| n30
  n359 -->|In| n52
  n359 -->|Serves| n448
  n360 -->|Chooses| n399
  n360 -->|In| n30
  n360 -->|In| n52
  n360 -->|Serves| n448
  n361 -->|Implements| n21
  n362 -->|Implements| n22
  n363 -->|Implements| n23
  n365 -->|Chooses| n410
  n365 -->|Chooses| n398
  n365 -->|In| n30
  n365 -->|In| n52
  n365 -->|Serves| n448
  n366 -->|Implements| n16
  n366 -->|Uses| n316
  n367 -->|Chooses| n366
  n367 -->|In| n30
  n367 -->|In| n52
  n367 -->|Serves| n448
  n368 -->|Implements| n41
  n368 -->|Implements| n43
  n368 -->|Implements| n42
  n368 -->|Depends on| n369
  n368 -->|Depends on| n39
  n368 -->|Depends on| n151
  n368 -->|Depends on| n309
  n370 -->|Chooses| n377
  n370 -->|Chooses| n392
  n370 -->|In| n52
  n370 -->|Serves| n448
  n371 -->|Chooses| n380
  n371 -->|Chooses| n406
  n371 -->|Chooses| n393
  n371 -->|Chooses| n368
  n371 -->|Chooses| n378
  n371 -->|In| n52
  n371 -->|Serves| n448
  n372 -->|Implements| n14
  n372 -->|Depends on| n21
  n372 -->|Depends on| n23
  n372 -->|Depends on| n716
  n372 -->|Depends on| n696
  n372 -->|Depends on| n697
  n372 -->|Depends on| n694
  n372 -->|Depends on| n693
  n372 -->|Depends on| n705
  n372 -->|Depends on| n711
  n372 -->|Depends on| n713
  n372 -->|Depends on| n699
  n372 -->|Depends on| n703
  n374 -->|Depends on| n22
  n374 -->|Depends on| n23
  n374 -->|Depends on| n21
  n374 -->|Depends on| n39
  n375 -->|Depends on| n22
  n375 -->|Depends on| n23
  n375 -->|Depends on| n21
  n375 -->|Depends on| n39
  n375 -->|Depends on| n376
  n375 -->|Depends on| n146
  n377 -->|Implements| n21
  n377 -->|Implements| n23
  n377 -->|Implements| n22
  n377 -->|Implements| n56
  n377 -->|Depends on| n39
  n377 -->|Depends on| n379
  n377 -->|Depends on| n309
  n378 -->|Implements| n26
  n378 -->|Implements| n47
  n378 -->|Depends on| n309
  n380 -->|Implements| n50
  n380 -->|Implements| n51
  n380 -->|Depends on| n373
  n380 -->|Depends on| n309
  n381 -->|Implements| n18
  n381 -->|Depends on| n50
  n381 -->|Depends on| n151
  n381 -->|Depends on| n309
  n382 -->|Implements| n19
  n382 -->|Depends on| n343
  n383 -->|Implements| n25
  n384 -->|Implements| n26
  n385 -->|Chooses| n361
  n385 -->|Chooses| n363
  n385 -->|Chooses| n362
  n385 -->|Chooses| n388
  n385 -->|Chooses| n389
  n385 -->|Chooses| n390
  n385 -->|Chooses| n407
  n385 -->|Chooses| n395
  n385 -->|Chooses| n394
  n385 -->|Chooses| n384
  n385 -->|In| n30
  n385 -->|Serves| n448
  n386 -->|Implements| n39
  n387 -->|Chooses| n386
  n387 -->|Chooses| n383
  n387 -->|Chooses| n382
  n387 -->|Chooses| n391
  n387 -->|Chooses| n381
  n387 -->|Chooses| n400
  n387 -->|In| n30
  n387 -->|In| n52
  n387 -->|Serves| n448
  n388 -->|Implements| n41
  n388 -->|Depends on| n414
  n389 -->|Implements| n43
  n389 -->|Depends on| n414
  n390 -->|Implements| n50
  n390 -->|Depends on| n309
  n391 -->|Implements| n53
  n392 -->|Implements| n33
  n392 -->|Depends on| n23
  n392 -->|Depends on| n39
  n392 -->|Depends on| n146
  n392 -->|Depends on| n320
  n393 -->|Implements| n34
  n394 -->|Implements| n33
  n395 -->|Implements| n34
  n395 -->|Depends on| n160
  n396 -->|Depends on| n374
  n396 -->|Depends on| n375
  n397 -->|Chooses| n396
  n397 -->|In| n30
  n397 -->|In| n52
  n397 -->|Serves| n448
  n398 -->|Implements| n45
  n398 -->|Depends on| n364
  n398 -->|Depends on| n146
  n398 -->|Depends on| n198
  n398 -->|Depends on| n714
  n399 -->|Implements| n55
  n399 -->|Uses| n326
  n399 -->|Uses| n319
  n400 -->|Implements| n27
  n401 -->|Chooses| n188
  n401 -->|In| n30
  n401 -->|In| n52
  n401 -->|Serves| n448
  n402 -->|Implements| n46
  n403 -->|Chooses| n402
  n403 -->|In| n52
  n403 -->|Serves| n448
  n404 -->|Chooses| n405
  n404 -->|In| n30
  n404 -->|Serves| n448
  n405 -->|Implements| n46
  n405 -->|Depends on| n146
  n405 -->|Depends on| n364
  n405 -->|Depends on| n173
  n405 -->|Depends on| n179
  n406 -->|Implements| n17
  n406 -->|Depends on| n408
  n406 -->|Depends on| n409
  n407 -->|Implements| n17
  n407 -->|Depends on| n152
  n410 -->|Implements| n40
  n410 -->|Depends on| n364
  n411 -->|Chooses| n415
  n411 -->|In| n30
  n411 -->|In| n52
  n411 -->|Serves| n448
  n412 -->|Implements| n31
  n412 -->|Uses| n324
  n412 -->|Depends on| n40
  n412 -->|Depends on| n145
  n412 -->|Depends on| n714
  n413 -->|Chooses| n412
  n413 -->|In| n30
  n413 -->|In| n52
  n413 -->|Serves| n448
  n415 -->|Implements| n49
  n415 -->|Uses| n328
  n415 -->|Depends on| n309
  n416 -->|Serves| n447
  n416 -->|Applied by| n167
  n416 -->|Applied by| n122
  n417 -->|Serves| n454
  n417 -->|Applied by| n167
  n417 -->|Applied by| n180
  n418 -->|Serves| n454
  n418 -->|Applied by| n175
  n418 -->|Applied by| n177
  n419 -->|Serves| n447
  n419 -->|Applied by| n115
  n419 -->|Applied by| n155
  n420 -->|Serves| n447
  n420 -->|Applied by| n54
  n420 -->|Applied by| n44
  n420 -->|Applied by| n32
  n420 -->|Applied by| n29
  n421 -->|Serves| n454
  n421 -->|Applied by| n167
  n421 -->|Applied by| n668
  n422 -->|Serves| n447
  n422 -->|Applied by| n106
  n422 -->|Applied by| n196
  n422 -->|Applied by| n599
  n422 -->|Applied by| n605
  n423 -->|Serves| n447
  n423 -->|Applied by| n191
  n423 -->|Applied by| n55
  n423 -->|Applied by| n714
  n423 -->|Applied by| n141
  n424 -->|Serves| n447
  n424 -->|Applied by| n167
  n424 -->|Applied by| n112
  n425 -->|Serves| n454
  n425 -->|Applied by| n182
  n425 -->|Applied by| n126
  n426 -->|Serves| n454
  n426 -->|Applied by| n167
  n426 -->|Applied by| n166
  n426 -->|Applied by| n185
  n426 -->|Applied by| n191
  n426 -->|Applied by| n180
  n427 -->|Serves| n456
  n427 -->|Applied by| n187
  n427 -->|Applied by| n167
  n427 -->|Applied by| n166
  n427 -->|Applied by| n189
  n427 -->|Applied by| n251
  n427 -->|Applied by| n106
  n428 -->|Serves| n456
  n428 -->|Applied by| n187
  n428 -->|Applied by| n180
  n428 -->|Applied by| n138
  n428 -->|Applied by| n130
  n428 -->|Applied by| n254
  n428 -->|Applied by| n253
  n429 -->|Serves| n454
  n429 -->|Applied by| n661
  n429 -->|Applied by| n228
  n429 -->|Applied by| n167
  n429 -->|Applied by| n29
  n429 -->|Applied by| n32
  n430 -->|Serves| n447
  n430 -->|Applied by| n180
  n430 -->|Applied by| n167
  n430 -->|Applied by| n187
  n431 -->|Serves| n454
  n431 -->|Applied by| n167
  n431 -->|Applied by| n668
  n432 -->|Serves| n454
  n432 -->|Applied by| n112
  n432 -->|Applied by| n135
  n432 -->|Applied by| n183
  n432 -->|Applied by| n344
  n432 -->|Applied by| n165
  n433 -->|Serves| n447
  n433 -->|Applied by| n166
  n433 -->|Applied by| n177
  n433 -->|Applied by| n194
  n433 -->|Applied by| n44
  n434 -->|Serves| n456
  n434 -->|Applied by| n187
  n434 -->|Applied by| n138
  n434 -->|Applied by| n396
  n434 -->|Applied by| n106
  n434 -->|Applied by| n180
  n434 -->|Applied by| n122
  n435 -->|Serves| n447
  n435 -->|Applied by| n40
  n435 -->|Applied by| n147
  n435 -->|Applied by| n143
  n435 -->|Applied by| n180
  n436 -->|Serves| n447
  n436 -->|Applied by| n133
  n436 -->|Applied by| n127
  n436 -->|Applied by| n652
  n436 -->|Applied by| n657
  n436 -->|Applied by| n655
  n436 -->|Applied by| n631
  n436 -->|Applied by| n614
  n437 -->|Serves| n448
  n437 -->|Applied by| n387
  n437 -->|Applied by| n385
  n437 -->|Applied by| n371
  n437 -->|Applied by| n367
  n437 -->|Applied by| n411
  n437 -->|Applied by| n413
  n437 -->|Applied by| n360
  n437 -->|Applied by| n365
  n437 -->|Applied by| n573
  n437 -->|Applied by| n574
  n437 -->|Applied by| n593
  n437 -->|Applied by| n592
  n437 -->|Applied by| n585
  n437 -->|Applied by| n584
  n438 -->|Serves| n447
  n438 -->|Applied by| n106
  n438 -->|Applied by| n196
  n438 -->|Applied by| n600
  n438 -->|Applied by| n599
  n438 -->|Applied by| n608
  n439 -->|Serves| n447
  n439 -->|Applied by| n167
  n439 -->|Applied by| n195
  n440 -->|Serves| n447
  n440 -->|Applied by| n180
  n440 -->|Applied by| n608
  n441 -->|Serves| n447
  n441 -->|Applied by| n180
  n441 -->|Applied by| n194
  n441 -->|Applied by| n187
  n442 -->|Serves| n454
  n442 -->|Applied by| n668
  n442 -->|Applied by| n661
  n442 -->|Applied by| n297
  n442 -->|Applied by| n301
  n442 -->|Applied by| n305
  n442 -->|Applied by| n312
  n442 -->|Applied by| n307
  n442 -->|Applied by| n300
  n442 -->|Applied by| n296
  n442 -->|Applied by| n295
  n442 -->|Applied by| n310
  n442 -->|Applied by| n309
  n442 -->|Applied by| n311
  n452 -->|Refines| n447
  n453 -->|Accepts| n452
  n457 -->|Releases| n54
  n458 -->|Releases| n54
  n458 -->|Assembled by| n561
  n459 -->|Releases| n54
  n459 -->|Assembled by| n571
  n460 -->|Releases| n54
  n460 -->|Assembled by| n459
  n461 -->|Releases| n54
  n461 -->|Assembled by| n460
  n462 -->|Releases| n54
  n462 -->|Assembled by| n461
  n463 -->|Releases| n54
  n463 -->|Assembled by| n462
  n464 -->|Releases| n54
  n464 -->|Assembled by| n463
  n465 -->|Releases| n54
  n465 -->|Assembled by| n464
  n466 -->|Releases| n54
  n466 -->|Assembled by| n465
  n467 -->|Releases| n54
  n467 -->|Assembled by| n466
  n468 -->|Releases| n54
  n468 -->|Assembled by| n467
  n469 -->|Releases| n54
  n469 -->|Assembled by| n458
  n470 -->|Releases| n54
  n470 -->|Assembled by| n468
  n471 -->|Releases| n54
  n471 -->|Assembled by| n470
  n472 -->|Releases| n54
  n472 -->|Assembled by| n471
  n473 -->|Releases| n54
  n473 -->|Assembled by| n472
  n474 -->|Releases| n54
  n474 -->|Assembled by| n473
  n475 -->|Releases| n54
  n475 -->|Assembled by| n474
  n476 -->|Releases| n54
  n476 -->|Assembled by| n469
  n477 -->|Releases| n54
  n477 -->|Assembled by| n476
  n478 -->|Releases| n54
  n478 -->|Assembled by| n477
  n479 -->|Releases| n54
  n479 -->|Assembled by| n478
  n480 -->|Releases| n54
  n480 -->|Assembled by| n479
  n481 -->|Releases| n54
  n481 -->|Assembled by| n480
  n482 -->|Releases| n54
  n482 -->|Assembled by| n481
  n483 -->|Releases| n54
  n483 -->|Assembled by| n482
  n484 -->|Releases| n54
  n484 -->|Assembled by| n457
  n485 -->|Releases| n54
  n485 -->|Assembled by| n483
  n486 -->|Releases| n54
  n486 -->|Assembled by| n485
  n487 -->|Releases| n54
  n487 -->|Assembled by| n486
  n488 -->|Releases| n54
  n488 -->|Assembled by| n487
  n489 -->|Releases| n54
  n489 -->|Assembled by| n488
  n490 -->|Releases| n54
  n490 -->|Assembled by| n489
  n491 -->|Releases| n54
  n491 -->|Assembled by| n490
  n492 -->|Releases| n54
  n492 -->|Assembled by| n491
  n493 -->|Releases| n54
  n493 -->|Assembled by| n492
  n494 -->|Releases| n54
  n494 -->|Assembled by| n493
  n495 -->|Releases| n54
  n495 -->|Assembled by| n484
  n496 -->|Releases| n54
  n496 -->|Assembled by| n494
  n497 -->|Releases| n54
  n497 -->|Assembled by| n496
  n498 -->|Releases| n54
  n498 -->|Assembled by| n497
  n499 -->|Releases| n54
  n499 -->|Assembled by| n498
  n500 -->|Releases| n54
  n500 -->|Assembled by| n499
  n501 -->|Releases| n54
  n501 -->|Assembled by| n500
  n502 -->|Releases| n54
  n502 -->|Assembled by| n501
  n503 -->|Releases| n54
  n503 -->|Assembled by| n502
  n504 -->|Releases| n54
  n504 -->|Assembled by| n503
  n505 -->|Releases| n54
  n505 -->|Assembled by| n504
  n506 -->|Releases| n54
  n506 -->|Assembled by| n495
  n507 -->|Releases| n54
  n507 -->|Assembled by| n505
  n508 -->|Releases| n54
  n508 -->|Assembled by| n507
  n509 -->|Releases| n54
  n509 -->|Assembled by| n508
  n510 -->|Releases| n54
  n510 -->|Assembled by| n509
  n511 -->|Releases| n54
  n511 -->|Assembled by| n510
  n512 -->|Releases| n54
  n512 -->|Assembled by| n511
  n513 -->|Releases| n54
  n513 -->|Assembled by| n512
  n514 -->|Releases| n54
  n514 -->|Assembled by| n513
  n515 -->|Releases| n54
  n515 -->|Assembled by| n514
  n516 -->|Releases| n54
  n516 -->|Assembled by| n515
  n517 -->|Releases| n54
  n517 -->|Assembled by| n506
  n518 -->|Releases| n54
  n518 -->|Assembled by| n516
  n519 -->|Releases| n54
  n519 -->|Assembled by| n518
  n520 -->|Releases| n54
  n520 -->|Assembled by| n519
  n521 -->|Releases| n54
  n521 -->|Assembled by| n520
  n522 -->|Releases| n54
  n522 -->|Assembled by| n521
  n523 -->|Releases| n54
  n523 -->|Assembled by| n522
  n524 -->|Releases| n54
  n524 -->|Assembled by| n523
  n525 -->|Releases| n54
  n525 -->|Assembled by| n524
  n526 -->|Releases| n54
  n526 -->|Assembled by| n525
  n527 -->|Releases| n54
  n527 -->|Assembled by| n526
  n528 -->|Releases| n54
  n528 -->|Assembled by| n517
  n529 -->|Releases| n54
  n529 -->|Assembled by| n527
  n530 -->|Releases| n54
  n530 -->|Assembled by| n529
  n531 -->|Releases| n54
  n531 -->|Assembled by| n530
  n532 -->|Releases| n54
  n532 -->|Assembled by| n531
  n533 -->|Releases| n54
  n533 -->|Assembled by| n532
  n534 -->|Releases| n54
  n534 -->|Assembled by| n533
  n535 -->|Releases| n54
  n535 -->|Assembled by| n534
  n536 -->|Releases| n54
  n536 -->|Assembled by| n535
  n537 -->|Releases| n54
  n537 -->|Assembled by| n536
  n538 -->|Releases| n54
  n538 -->|Assembled by| n537
  n539 -->|Releases| n54
  n539 -->|Assembled by| n528
  n540 -->|Releases| n54
  n540 -->|Assembled by| n538
  n541 -->|Releases| n54
  n541 -->|Assembled by| n540
  n542 -->|Releases| n54
  n542 -->|Assembled by| n541
  n543 -->|Releases| n54
  n543 -->|Assembled by| n542
  n544 -->|Releases| n54
  n544 -->|Assembled by| n543
  n545 -->|Releases| n54
  n545 -->|Assembled by| n544
  n546 -->|Releases| n54
  n546 -->|Assembled by| n545
  n547 -->|Releases| n54
  n547 -->|Assembled by| n546
  n548 -->|Releases| n54
  n548 -->|Assembled by| n547
  n549 -->|Releases| n54
  n549 -->|Assembled by| n548
  n550 -->|Releases| n54
  n550 -->|Assembled by| n539
  n551 -->|Releases| n54
  n551 -->|Assembled by| n549
  n552 -->|Releases| n54
  n552 -->|Assembled by| n551
  n553 -->|Releases| n54
  n553 -->|Assembled by| n552
  n554 -->|Releases| n54
  n554 -->|Assembled by| n553
  n555 -->|Releases| n54
  n555 -->|Assembled by| n554
  n556 -->|Releases| n54
  n556 -->|Assembled by| n555
  n557 -->|Releases| n54
  n557 -->|Assembled by| n556
  n558 -->|Releases| n54
  n558 -->|Assembled by| n557
  n559 -->|Releases| n54
  n559 -->|Assembled by| n558
  n560 -->|Releases| n54
  n560 -->|Assembled by| n559
  n561 -->|Releases| n54
  n561 -->|Assembled by| n550
  n562 -->|Releases| n54
  n562 -->|Assembled by| n560
  n563 -->|Releases| n54
  n563 -->|Assembled by| n562
  n564 -->|Releases| n54
  n564 -->|Assembled by| n563
  n565 -->|Releases| n54
  n565 -->|Assembled by| n564
  n566 -->|Releases| n54
  n566 -->|Assembled by| n565
  n567 -->|Releases| n54
  n567 -->|Assembled by| n566
  n568 -->|Releases| n54
  n568 -->|Assembled by| n567
  n569 -->|Releases| n54
  n569 -->|Assembled by| n568
  n570 -->|Releases| n54
  n570 -->|Assembled by| n569
  n571 -->|Releases| n54
  n571 -->|Assembled by| n570
  n572 -->|Serves| n447
  n572 -->|Depends on| n149
  n572 -->|Depends on| n589
  n572 -->|Depends on| n299
  n572 -->|Depends on| n306
  n572 -->|Depends on| n310
  n572 -->|Depends on| n163
  n573 -->|Chooses| n579
  n573 -->|In| n30
  n573 -->|In| n52
  n573 -->|Serves| n448
  n574 -->|Chooses| n581
  n574 -->|In| n30
  n574 -->|In| n52
  n574 -->|Serves| n448
  n576 -->|Serves| n447
  n576 -->|Depends on| n572
  n576 -->|Depends on| n577
  n576 -->|Depends on| n310
  n578 -->|Serves| n447
  n578 -->|Implements| n587
  n578 -->|Depends on| n583
  n578 -->|Depends on| n278
  n578 -->|Depends on| n358
  n578 -->|Depends on| n215
  n578 -->|Depends on| n217
  n578 -->|Depends on| n212
  n578 -->|Depends on| n160
  n578 -->|Depends on| n589
  n578 -->|Depends on| n310
  n579 -->|Serves| n447
  n579 -->|Implements| n577
  n579 -->|Depends on| n575
  n579 -->|Depends on| n162
  n579 -->|Depends on| n160
  n579 -->|Depends on| n260
  n579 -->|Depends on| n267
  n579 -->|Depends on| n269
  n579 -->|Depends on| n259
  n579 -->|Depends on| n261
  n579 -->|Depends on| n265
  n579 -->|Depends on| n272
  n579 -->|Depends on| n262
  n579 -->|Depends on| n268
  n579 -->|Depends on| n270
  n579 -->|Depends on| n274
  n579 -->|Depends on| n273
  n579 -->|Depends on| n256
  n579 -->|Depends on| n264
  n579 -->|Depends on| n310
  n580 -->|Serves| n447
  n580 -->|Applied by| n576
  n580 -->|Applied by| n594
  n580 -->|Applied by| n586
  n580 -->|Applied by| n572
  n580 -->|Applied by| n44
  n581 -->|Serves| n447
  n581 -->|Implements| n575
  n581 -->|Depends on| n287
  n581 -->|Depends on| n158
  n581 -->|Depends on| n7
  n581 -->|Depends on| n271
  n581 -->|Depends on| n282
  n581 -->|Depends on| n290
  n581 -->|Depends on| n294
  n581 -->|Depends on| n289
  n581 -->|Depends on| n281
  n581 -->|Depends on| n292
  n581 -->|Depends on| n283
  n581 -->|Depends on| n285
  n581 -->|Depends on| n286
  n581 -->|Depends on| n291
  n581 -->|Depends on| n299
  n581 -->|Depends on| n310
  n582 -->|Serves| n448
  n582 -->|Applied by| n576
  n582 -->|Applied by| n594
  n582 -->|Applied by| n586
  n582 -->|Applied by| n573
  n582 -->|Applied by| n574
  n582 -->|Applied by| n593
  n582 -->|Applied by| n592
  n582 -->|Applied by| n585
  n582 -->|Applied by| n584
  n584 -->|Chooses| n590
  n584 -->|In| n30
  n584 -->|In| n52
  n584 -->|Serves| n448
  n585 -->|Chooses| n578
  n585 -->|In| n30
  n585 -->|In| n52
  n585 -->|Serves| n448
  n586 -->|Serves| n447
  n586 -->|Depends on| n572
  n586 -->|Depends on| n587
  n586 -->|Depends on| n310
  n588 -->|Serves| n447
  n588 -->|Implements| n595
  n588 -->|Depends on| n591
  n588 -->|Depends on| n686
  n588 -->|Depends on| n684
  n588 -->|Depends on| n160
  n588 -->|Depends on| n682
  n588 -->|Depends on| n680
  n588 -->|Depends on| n681
  n588 -->|Depends on| n679
  n588 -->|Depends on| n685
  n588 -->|Depends on| n310
  n590 -->|Serves| n447
  n590 -->|Implements| n583
  n590 -->|Depends on| n278
  n590 -->|Depends on| n280
  n590 -->|Depends on| n358
  n590 -->|Depends on| n1
  n590 -->|Depends on| n11
  n590 -->|Depends on| n2
  n590 -->|Depends on| n215
  n590 -->|Depends on| n227
  n590 -->|Depends on| n224
  n590 -->|Depends on| n206
  n590 -->|Depends on| n212
  n590 -->|Depends on| n572
  n590 -->|Depends on| n299
  n590 -->|Depends on| n308
  n590 -->|Depends on| n310
  n590 -->|Depends on| n160
  n592 -->|Chooses| n596
  n592 -->|In| n30
  n592 -->|In| n52
  n592 -->|Serves| n448
  n593 -->|Chooses| n588
  n593 -->|In| n30
  n593 -->|In| n52
  n593 -->|Serves| n448
  n594 -->|Serves| n447
  n594 -->|Depends on| n572
  n594 -->|Depends on| n595
  n594 -->|Depends on| n310
  n596 -->|Serves| n447
  n596 -->|Implements| n591
  n596 -->|Depends on| n572
  n596 -->|Depends on| n684
  n596 -->|Depends on| n160
  n596 -->|Depends on| n682
  n596 -->|Depends on| n680
  n596 -->|Depends on| n687
  n596 -->|Depends on| n683
  n596 -->|Depends on| n299
  n596 -->|Depends on| n310
  n597 -->|Verifies| n167
  n597 -->|Verifies| n195
  n597 -->|Verifies| n165
  n597 -->|Verifies| n717
  n597 -->|In| n52
  n597 -->|Depends on| n167
  n597 -->|Depends on| n41
  n597 -->|Depends on| n165
  n597 -->|Depends on| n143
  n597 -->|Depends on| n598
  n597 -->|Depends on| n311
  n599 -->|Verifies| n112
  n599 -->|Verifies| n124
  n599 -->|Verifies| n166
  n599 -->|Verifies| n194
  n599 -->|Verifies| n576
  n599 -->|Verifies| n572
  n599 -->|Verifies| n579
  n599 -->|Verifies| n581
  n599 -->|Verifies| n183
  n599 -->|Verifies| n182
  n599 -->|Verifies| n377
  n599 -->|Verifies| n380
  n599 -->|Verifies| n406
  n599 -->|In| n52
  n599 -->|Depends on| n112
  n599 -->|Depends on| n605
  n599 -->|Depends on| n56
  n599 -->|Depends on| n51
  n599 -->|Depends on| n146
  n599 -->|Depends on| n21
  n599 -->|Depends on| n39
  n599 -->|Depends on| n41
  n599 -->|Depends on| n151
  n599 -->|Depends on| n296
  n599 -->|Depends on| n311
  n600 -->|Verifies| n167
  n600 -->|Verifies| n187
  n600 -->|Verifies| n191
  n600 -->|Verifies| n195
  n600 -->|Verifies| n177
  n600 -->|Verifies| n399
  n600 -->|Verifies| n412
  n600 -->|Verifies| n410
  n600 -->|Verifies| n377
  n600 -->|Verifies| n386
  n600 -->|Verifies| n368
  n600 -->|Verifies| n400
  n600 -->|In| n52
  n600 -->|Depends on| n167
  n600 -->|Depends on| n41
  n600 -->|Depends on| n17
  n600 -->|Depends on| n604
  n600 -->|Depends on| n311
  n601 -->|Verifies| n299
  n601 -->|Verifies| n306
  n601 -->|Verifies| n163
  n601 -->|Verifies| n164
  n601 -->|Verifies| n160
  n601 -->|Verifies| n327
  n601 -->|In| n52
  n601 -->|Depends on| n299
  n601 -->|Depends on| n306
  n601 -->|Depends on| n163
  n601 -->|Depends on| n164
  n601 -->|Depends on| n160
  n601 -->|Depends on| n304
  n601 -->|Depends on| n327
  n601 -->|Depends on| n602
  n601 -->|Depends on| n311
  n603 -->|Verifies| n168
  n603 -->|Verifies| n176
  n603 -->|Verifies| n175
  n603 -->|Verifies| n189
  n603 -->|Verifies| n186
  n603 -->|In| n52
  n603 -->|Depends on| n168
  n603 -->|Depends on| n176
  n603 -->|Depends on| n175
  n603 -->|Depends on| n189
  n603 -->|Depends on| n186
  n603 -->|Depends on| n609
  n603 -->|Depends on| n311
  n607 -->|Verifies| n178
  n607 -->|In| n52
  n607 -->|Depends on| n178
  n607 -->|Depends on| n606
  n607 -->|Depends on| n311
  n608 -->|Verifies| n180
  n608 -->|In| n52
  n608 -->|Depends on| n180
  n608 -->|Depends on| n167
  n608 -->|Depends on| n41
  n608 -->|Depends on| n17
  n608 -->|Depends on| n311
  n610 -->|Serves| n447
  n610 -->|Part of| n649
  n610 -->|Depends on| n648
  n610 -->|Depends on| n628
  n610 -->|Depends on| n644
  n611 -->|Serves| n447
  n612 -->|Serves| n447
  n613 -->|Serves| n447
  n614 -->|Checks| n617
  n614 -->|Run by| n136
  n614 -->|Signed by| n629
  n615 -->|Checks| n617
  n615 -->|Run by| n117
  n615 -->|Signed by| n629
  n615 -->|Verifies| n361
  n615 -->|Verifies| n363
  n615 -->|Verifies| n362
  n615 -->|Verifies| n388
  n615 -->|Verifies| n389
  n615 -->|Verifies| n390
  n615 -->|Verifies| n407
  n615 -->|Verifies| n395
  n615 -->|Verifies| n394
  n615 -->|Verifies| n384
  n615 -->|Verifies| n405
  n616 -->|Serves| n447
  n617 -->|Produced by| n54
  n618 -->|Serves| n447
  n619 -->|Serves| n447
  n620 -->|Its obligations| n619
  n620 -->|Its obligations| n627
  n620 -->|Its obligations| n611
  n620 -->|Its obligations| n613
  n620 -->|Its obligations| n612
  n620 -->|Its obligations| n618
  n620 -->|Its obligations| n616
  n621 -->|Produced by| n120
  n621 -->|Carries| n36
  n623 -->|Checks| n621
  n623 -->|Run by| n633
  n623 -->|Signed by| n629
  n623 -->|Verifies| n63
  n623 -->|Verifies| n62
  n623 -->|Verifies| n61
  n623 -->|Verifies| n60
  n623 -->|Verifies| n59
  n623 -->|Verifies| n57
  n623 -->|Verifies| n58
  n625 -->|Serves| n447
  n625 -->|Depends on| n347
  n625 -->|Depends on| n278
  n625 -->|Depends on| n204
  n626 -->|Ships| n647
  n626 -->|Programs assembled for| n30
  n626 -->|Follows the policy| n630
  n627 -->|Serves| n447
  n630 -->|Its obligations| n619
  n630 -->|Its obligations| n612
  n631 -->|Ships| n617
  n631 -->|Ships| n634
  n631 -->|Ships| n621
  n631 -->|Deployed by| n106
  n631 -->|Programs assembled for| n30
  n631 -->|Follows the policy| n620
  n632 -->|Verifies| n633
  n632 -->|Verifies| n625
  n632 -->|In| n52
  n632 -->|Depends on| n633
  n632 -->|Depends on| n621
  n632 -->|Depends on| n625
  n632 -->|Depends on| n644
  n632 -->|Depends on| n624
  n632 -->|Depends on| n311
  n633 -->|Serves| n447
  n633 -->|Part of| n649
  n633 -->|Depends on| n621
  n633 -->|Depends on| n304
  n633 -->|Depends on| n625
  n633 -->|Depends on| n622
  n633 -->|Depends on| n644
  n634 -->|Produced by| n36
  n634 -->|Assembled for| n15
  n636 -->|Runs elsewhere| n626
  n636 -->|Its writer's settings| n635
  n637 -->|Serves| n447
  n637 -->|Part of| n649
  n637 -->|Depends on| n648
  n637 -->|Depends on| n628
  n637 -->|Depends on| n644
  n638 -->|Run by| n637
  n638 -->|Signed by| n629
  n640 -->|Requires| n638
  n640 -->|Deployed by| n610
  n640 -->|Programs assembled for| n30
  n640 -->|Follows the policy| n645
  n641 -->|Ships| n636
  n642 -->|In| n52
  n643 -->|In| n30
  n644 -->|Written in| n304
  n645 -->|Its obligations| n619
  n645 -->|Its obligations| n612
  n645 -->|Its obligations| n616
  n646 -->|Verifies| n637
  n646 -->|Verifies| n610
  n646 -->|In| n52
  n646 -->|Depends on| n637
  n646 -->|Depends on| n610
  n646 -->|Depends on| n648
  n646 -->|Depends on| n628
  n646 -->|Depends on| n639
  n646 -->|Depends on| n644
  n646 -->|Depends on| n311
  n649 -->|Deployed in| n30
  n650 -->|Implements| n48
  n650 -->|Depends on| n25
  n652 -->|Serves| n447
  n652 -->|Depends on| n146
  n652 -->|Depends on| n657
  n652 -->|Depends on| n21
  n652 -->|Depends on| n39
  n652 -->|Depends on| n25
  n652 -->|Depends on| n144
  n652 -->|Depends on| n175
  n652 -->|Depends on| n48
  n653 -->|Chooses| n650
  n653 -->|In| n30
  n653 -->|In| n52
  n653 -->|Serves| n447
  n654 -->|Serves| n447
  n654 -->|Depends on| n151
  n654 -->|Depends on| n187
  n654 -->|Depends on| n146
  n654 -->|Depends on| n199
  n654 -->|Depends on| n21
  n654 -->|Depends on| n39
  n655 -->|Refines| n447
  n656 -->|Accepts| n655
  n661 -->|Serves| n447
  n661 -->|Depends on| n147
  n661 -->|Depends on| n301
  n665 -->|Written in| n304
  n666 -->|Serves| n447
  n666 -->|Applied by| n668
  n666 -->|Applied by| n49
  n667 -->|Serves| n447
  n667 -->|Applied by| n668
  n667 -->|Applied by| n661
  n667 -->|Applied by| n49
  n668 -->|Serves| n447
  n668 -->|Serves| n454
  n668 -->|Depends on| n49
  n668 -->|Depends on| n662
  n668 -->|Depends on| n665
  n668 -->|Depends on| n663
  n668 -->|Depends on| n664
  n668 -->|Depends on| n658
  n668 -->|Depends on| n21
  n668 -->|Depends on| n27
  n668 -->|Depends on| n46
  n668 -->|Depends on| n146
  n668 -->|Depends on| n39
  n668 -->|Depends on| n25
  n669 -->|Defined by| n672
  n669 -->|Read in| n675
  n669 -->|Depends on| n672
  n670 -->|Defined by| n672
  n670 -->|Read in| n675
  n670 -->|Depends on| n672
  n671 -->|Defined by| n672
  n671 -->|Read in| n675
  n671 -->|Depends on| n672
  n671 -->|Depends on| n675
  n673 -->|Defined by| n672
  n673 -->|Read in| n675
  n673 -->|Depends on| n672
  n673 -->|Depends on| n671
  n674 -->|Defined by| n672
  n674 -->|Read in| n675
  n674 -->|Depends on| n672
  n674 -->|Depends on| n676
  n674 -->|Depends on| n671
  n675 -->|Defined by| n672
  n675 -->|Queries written in| n659
  n675 -->|Read by| n668
  n675 -->|Uses| n317
  n677 -->|Serves| n447
  n677 -->|Depends on| n672
  n677 -->|Depends on| n676
  n677 -->|Depends on| n146
  n677 -->|Depends on| n670
  n677 -->|Depends on| n671
  n677 -->|Depends on| n673
  n677 -->|Depends on| n669
  n677 -->|Depends on| n674
  n677 -->|Depends on| n39
  n677 -->|Depends on| n40
  n677 -->|Depends on| n299
  n677 -->|Depends on| n301
  n679 -->|Defined by| n686
  n679 -->|Depends on| n686
  n680 -->|Defined by| n686
  n680 -->|Depends on| n686
  n680 -->|Depends on| n682
  n680 -->|Depends on| n684
  n681 -->|Defined by| n686
  n681 -->|Depends on| n686
  n682 -->|Defined by| n686
  n682 -->|Depends on| n686
  n682 -->|Depends on| n684
  n683 -->|Defined by| n686
  n683 -->|Depends on| n686
  n683 -->|Depends on| n678
  n685 -->|Defined by| n686
  n685 -->|Depends on| n686
  n687 -->|Defined by| n686
  n687 -->|Depends on| n686
  n687 -->|Depends on| n678
  n688 -->|Defined by| n716
  n688 -->|Read in| n714
  n688 -->|Depends on| n716
  n689 -->|Defined by| n716
  n689 -->|Read in| n714
  n689 -->|Depends on| n716
  n690 -->|Defined by| n716
  n690 -->|Read in| n714
  n690 -->|Depends on| n716
  n691 -->|Defined by| n716
  n691 -->|Read in| n714
  n691 -->|Depends on| n716
  n692 -->|Defined by| n716
  n692 -->|Read in| n714
  n692 -->|Depends on| n716
  n693 -->|Defined by| n716
  n693 -->|Read in| n714
  n693 -->|Depends on| n716
  n694 -->|Defined by| n716
  n694 -->|Read in| n714
  n694 -->|Depends on| n716
  n695 -->|Defined by| n716
  n695 -->|Read in| n714
  n695 -->|Depends on| n716
  n695 -->|Depends on| n713
  n696 -->|Defined by| n716
  n696 -->|Read in| n714
  n696 -->|Depends on| n716
  n697 -->|Defined by| n716
  n697 -->|Read in| n714
  n697 -->|Depends on| n716
  n698 -->|Defined by| n716
  n698 -->|Read in| n714
  n698 -->|Depends on| n716
  n699 -->|Defined by| n716
  n699 -->|Read in| n714
  n699 -->|Depends on| n716
  n700 -->|Defined by| n716
  n700 -->|Read in| n714
  n700 -->|Depends on| n716
  n701 -->|Defined by| n716
  n701 -->|Read in| n714
  n701 -->|Depends on| n716
  n702 -->|Defined by| n716
  n702 -->|Read in| n714
  n702 -->|Depends on| n716
  n703 -->|Defined by| n716
  n703 -->|Read in| n714
  n703 -->|Depends on| n716
  n703 -->|Depends on| n713
  n704 -->|Defined by| n716
  n704 -->|Read in| n714
  n704 -->|Depends on| n716
  n705 -->|Defined by| n716
  n705 -->|Read in| n714
  n705 -->|Depends on| n716
  n706 -->|Defined by| n716
  n706 -->|Read in| n714
  n706 -->|Depends on| n716
  n707 -->|Defined by| n716
  n707 -->|Read in| n714
  n707 -->|Depends on| n716
  n708 -->|Defined by| n716
  n708 -->|Read in| n714
  n708 -->|Depends on| n716
  n709 -->|Defined by| n716
  n709 -->|Read in| n714
  n709 -->|Depends on| n716
  n711 -->|Defined by| n716
  n711 -->|Read in| n714
  n711 -->|Depends on| n716
  n711 -->|Depends on| n713
  n712 -->|Defined by| n716
  n712 -->|Read in| n714
  n712 -->|Depends on| n716
  n713 -->|Defined by| n716
  n713 -->|Read in| n714
  n713 -->|Depends on| n716
  n714 -->|Queries written in| n659
  n714 -->|Read by| n668
  n714 -->|Watches the globals| n719
  n714 -->|Uses| n325
  n715 -->|Serves| n447
  n717 -->|Serves| n447
  n717 -->|Depends on| n714
  n717 -->|Depends on| n716
  n717 -->|Depends on| n143
  n717 -->|Depends on| n710
  n717 -->|Depends on| n150
  n717 -->|Depends on| n149
  n717 -->|Depends on| n700
  n717 -->|Depends on| n713
  n717 -->|Depends on| n701
  n717 -->|Depends on| n707
  n717 -->|Depends on| n693
  n717 -->|Depends on| n692
  n717 -->|Depends on| n709
  n717 -->|Depends on| n711
  n717 -->|Depends on| n705
  n717 -->|Depends on| n688
  n717 -->|Depends on| n694
  n717 -->|Depends on| n703
  n717 -->|Depends on| n695
  n717 -->|Depends on| n689
  n717 -->|Depends on| n708
  n717 -->|Depends on| n706
  n717 -->|Depends on| n718
  n717 -->|Depends on| n698
  n717 -->|Depends on| n712
  n717 -->|Depends on| n690
  n717 -->|Depends on| n699
  n717 -->|Depends on| n691
  n717 -->|Depends on| n152
  n717 -->|Depends on| n39
  n717 -->|Depends on| n40
  n717 -->|Depends on| n299
  n717 -->|Depends on| n301
  n718 -->|Defined by| n716
  n718 -->|Read in| n714
  n718 -->|Depends on| n716
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
