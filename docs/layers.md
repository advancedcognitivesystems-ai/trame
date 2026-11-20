# Layers

*The graph in force on 20 November 2026, ordered by distance to the goals.*

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
    n80["A library carries kinds<br/><small>Scenario</small>"]:::held
    n81["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n82["A library released<br/><small>Scenario</small>"]:::held
    n83["The manifest written<br/><small>Scenario</small>"]:::held
    n84["The packages audited<br/><small>Scenario</small>"]:::held
    n85["The packages upgraded<br/><small>Scenario</small>"]:::held
    n86["The page delivered<br/><small>Scenario</small>"]:::held
    n87["The page exported<br/><small>Scenario</small>"]:::held
    n88["The page of the graph<br/><small>Scenario</small>"]:::held
    n89["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n90["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n91["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n92["A project started<br/><small>Scenario</small>"]:::held
    n93["A published value changed<br/><small>Scenario</small>"]:::held
    n94["The registry filled<br/><small>Scenario</small>"]:::held
    n95["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n96["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n97["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n98["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n99["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n100["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n101["A value amended<br/><small>Scenario</small>"]:::held
    n102["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n103["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n104["Advance<br/><small>Entry point</small>"]:::held
    n105["Amend<br/><small>Entry point</small>"]:::held
    n106["An amendment prepared<br/><small>Function</small>"]:::held
    n107["Assemble a component<br/><small>Entry point</small>"]:::held
    n108["Assembler<br/><small>Function</small>"]:::held
    n109["Audit the packages<br/><small>Entry point</small>"]:::held
    n110["Build<br/><small>Entry point</small>"]:::held
    n111["Two builds compared<br/><small>Function</small>"]:::held
    n112["Deliver<br/><small>Entry point</small>"]:::held
    n113["Start trame dev<br/><small>Entry point</small>"]:::held
    n114["Ask the machine<br/><small>Entry point</small>"]:::held
    n115["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n116["Payload<br/><small>Entry point</small>"]:::held
    n117["Export the page<br/><small>Entry point</small>"]:::held
    n118["Start a project<br/><small>Entry point</small>"]:::held
    n119["Plan<br/><small>Entry point</small>"]:::held
    n120["Preparation<br/><small>Function</small>"]:::held
    n121["Publish<br/><small>Entry point</small>"]:::held
    n122["Record evidence<br/><small>Entry point</small>"]:::held
    n123["A module of references<br/><small>Function</small>"]:::held
    n124["Fill the registry<br/><small>Entry point</small>"]:::held
    n125["Release a version<br/><small>Entry point</small>"]:::held
    n126["Render a view<br/><small>Function</small>"]:::held
    n127["Run a component<br/><small>Entry point</small>"]:::held
    n128["Ship<br/><small>Entry point</small>"]:::held
    n129["Show a view<br/><small>Entry point</small>"]:::held
    n130["Take the snapshot<br/><small>Entry point</small>"]:::held
    n131["Test the laws<br/><small>Entry point</small>"]:::held
    n132["Upgrade<br/><small>Entry point</small>"]:::held
    n133["View by its name<br/><small>Entry point</small>"]:::held
    n134["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n135["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n136["Default rank<br/><small>Decision</small>"]:::neutral
    n137["Documentation comment<br/><small>Decision</small>"]:::neutral
    n138["Names of the documents<br/><small>Standard</small>"]:::neutral
    n139["The frozen API<br/><small>Standard</small>"]:::neutral
    n140["JSON formatting<br/><small>Decision</small>"]:::neutral
    n141["The language's names<br/><small>Decision</small>"]:::neutral
    n142["Project layout<br/><small>Decision</small>"]:::neutral
    n143["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n144["How a project starts<br/><small>Decision</small>"]:::neutral
    n145["Trame references<br/><small>Standard</small>"]:::neutral
    n146["Names of steps<br/><small>Decision</small>"]:::neutral
    n147["Trame's commands<br/><small>Standard</small>"]:::neutral
    n148["Trame's environment<br/><small>Standard</small>"]:::neutral
    n149["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n150["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n151["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n152["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n153["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n154["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n155["How a number is written<br/><small>Decision</small>"]:::neutral
    n156["Punctuation of documents<br/><small>Function</small>"]:::held
    n157["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n158["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n159["Values with their units<br/><small>Function</small>"]:::held
    n160["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n161["Assembly<br/><small>Function</small>"]:::held
    n162["Compilation API<br/><small>Function</small>"]:::held
    n163["Compiler<br/><small>Function</small>"]:::held
    n164["Cycles<br/><small>Function</small>"]:::held
    n165["Date bundle<br/><small>Function</small>"]:::held
    n166["trame dev server<br/><small>Function</small>"]:::held
    n167["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n168["Differences<br/><small>Function</small>"]:::held
    n169["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n170["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n171["Fingerprints<br/><small>Function</small>"]:::held
    n172["Pseudo-random generator<br/><small>Function</small>"]:::held
    n173["Graph<br/><small>Function</small>"]:::held
    n174["Judged harder<br/><small>Function</small>"]:::held
    n175["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n176["Laws<br/><small>Function</small>"]:::held
    n177["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n178["Lock<br/><small>Function</small>"]:::held
    n179["Machine outputs<br/><small>Function</small>"]:::held
    n180["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n181["Payload<br/><small>Function</small>"]:::held
    n182["Positions<br/><small>Function</small>"]:::held
    n183["Project<br/><small>Function</small>"]:::held
    n184["The runs of a project<br/><small>Function</small>"]:::held
    n185["References<br/><small>Function</small>"]:::held
    n186["A shipment's pipeline<br/><small>Function</small>"]:::held
    n187["Static reading<br/><small>Function</small>"]:::held
    n188["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n189["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n190["Views<br/><small>Function</small>"]:::held
    n191["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n192["Accept a candidate<br/><small>Requirement</small>"]:::held
    n193["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n194["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n195["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n196["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n197["Records of the releases<br/><small>Function</small>"]:::held
    n198["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n199["Attribute presence<br/><small>Syntax element</small>"]:::held
    n200["Attribute selector<br/><small>Syntax element</small>"]:::held
    n201["Class selector<br/><small>Syntax element</small>"]:::held
    n202["Declaration<br/><small>Syntax element</small>"]:::held
    n203["Rule<br/><small>Syntax element</small>"]:::held
    n204["CSS style sheets<br/><small>Language</small>"]:::held
    n205["Variable<br/><small>Syntax element</small>"]:::held
    n206["Custom property<br/><small>Syntax element</small>"]:::held
    n207["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n208["Escaped text<br/><small>Syntax element</small>"]:::held
    n209["Attributes<br/><small>Syntax element</small>"]:::held
    n210["Element over several lines<br/><small>Syntax element</small>"]:::held
    n211["HTML element<br/><small>Syntax element</small>"]:::held
    n212["End tag<br/><small>Syntax element</small>"]:::held
    n213["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n214["HTML markup<br/><small>Language</small>"]:::held
    n215["Start tag<br/><small>Syntax element</small>"]:::held
    n216["JSON in a script<br/><small>Syntax element</small>"]:::held
    n217["Media feature<br/><small>Syntax element</small>"]:::held
    n218["Media rule<br/><small>Syntax element</small>"]:::held
    n219["Negation<br/><small>Syntax element</small>"]:::held
    n220["Path data<br/><small>Syntax element</small>"]:::held
    n221["Script<br/><small>Syntax element</small>"]:::held
    n222["Selector list<br/><small>Syntax element</small>"]:::held
    n223["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n224["Drivers<br/><small>Function</small>"]:::held
    n225["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n226["Answers without crashing<br/><small>Requirement</small>"]:::held
    n227["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n228["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n229["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n230["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n231["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n232["Complete declaration<br/><small>Requirement</small>"]:::held
    n233["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n234["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n235["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n236["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n237["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n238["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n239["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n240["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n241["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n242["Same input, same answer<br/><small>Requirement</small>"]:::held
    n243["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n244["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n245["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n246["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n247["What belongs to a library<br/><small>Requirement</small>"]:::held
    n248["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n249["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n250["A release is settled<br/><small>Requirement</small>"]:::held
    n251["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n252["Anchor<br/><small>Syntax element</small>"]:::held
    n253["Backtick string<br/><small>Syntax element</small>"]:::held
    n254["Blank line<br/><small>Syntax element</small>"]:::held
    n255["Block quote<br/><small>Syntax element</small>"]:::held
    n256["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n257["Code block<br/><small>Syntax element</small>"]:::held
    n258["Code span<br/><small>Syntax element</small>"]:::held
    n259["CommonMark<br/><small>Standard</small>"]:::neutral
    n260["Collapsible block<br/><small>Syntax element</small>"]:::held
    n261["Emphasis<br/><small>Syntax element</small>"]:::held
    n262["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n263["Heading<br/><small>Syntax element</small>"]:::held
    n264["Link<br/><small>Syntax element</small>"]:::held
    n265["List item<br/><small>Syntax element</small>"]:::held
    n266["Relative reference<br/><small>Syntax element</small>"]:::held
    n267["Small text<br/><small>Syntax element</small>"]:::held
    n268["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n269["Table<br/><small>Syntax element</small>"]:::held
    n270["Table cell<br/><small>Syntax element</small>"]:::held
    n271["Delimiter row<br/><small>Syntax element</small>"]:::held
    n272["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n273["Around the documents<br/><small>Decision</small>"]:::neutral
    n274["Documents in the page<br/><small>Decision</small>"]:::neutral
    n275["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n276["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n277["Class definition<br/><small>Syntax element</small>"]:::held
    n278["Flowchart<br/><small>Syntax element</small>"]:::held
    n279["Gantt chart<br/><small>Syntax element</small>"]:::held
    n280["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n281["Section<br/><small>Syntax element</small>"]:::held
    n282["Task<br/><small>Syntax element</small>"]:::held
    n283["Mermaid<br/><small>Standard</small>"]:::neutral
    n284["Label<br/><small>Syntax element</small>"]:::held
    n285["Link<br/><small>Syntax element</small>"]:::held
    n286["Node<br/><small>Syntax element</small>"]:::held
    n287["Milestone<br/><small>Syntax element</small>"]:::held
    n288["Node style<br/><small>Syntax element</small>"]:::held
    n289["Style properties<br/><small>Syntax element</small>"]:::held
    n290["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n291["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n292["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n293["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n294["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n295["Dates<br/><small>Function</small>"]:::held
    n296["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n297["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n298["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n299["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n300["Language<br/><small>Decision</small>"]:::neutral
    n301["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n302["Lists<br/><small>Function</small>"]:::held
    n303["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n304["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n305["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n306["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n307["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n308["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n309["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n310["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n311["Grammar of CSS<br/><small>Package</small>"]:::held
    n312["esbuild<br/><small>Package</small>"]:::held
    n313["Grammar of HCL<br/><small>Package</small>"]:::held
    n314["Grammar of HTML<br/><small>Package</small>"]:::held
    n315["Types of Node.js<br/><small>Package</small>"]:::held
    n316["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n317["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n318["The people of the repository<br/><small>Package</small>"]:::neutral
    n319["The standard library<br/><small>Package</small>"]:::neutral
    n320["tsx<br/><small>Package</small>"]:::held
    n321["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n322["TypeScript<br/><small>Package</small>"]:::held
    n323["Order of versions<br/><small>Function</small>"]:::held
    n324["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n325["Banner<br/><small>Syntax element</small>"]:::held
    n326["Brand<br/><small>Syntax element</small>"]:::held
    n327["State of the compilation<br/><small>Syntax element</small>"]:::held
    n328["Dates<br/><small>Syntax element</small>"]:::held
    n329["Head of the document<br/><small>Syntax element</small>"]:::held
    n330["Document picker<br/><small>Syntax element</small>"]:::held
    n331["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n332["Fonts<br/><small>Syntax element</small>"]:::held
    n333["Logo<br/><small>Syntax element</small>"]:::held
    n334["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n335["Main area<br/><small>Syntax element</small>"]:::held
    n336["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n337["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n338["Navigation<br/><small>Syntax element</small>"]:::held
    n339["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n340["Page<br/><small>Function</small>"]:::held
    n341["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n342["Document of the page<br/><small>Syntax element</small>"]:::held
    n343["Regions of the page<br/><small>Decision</small>"]:::neutral
    n344["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n345["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n346["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n347["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n348["Shell<br/><small>Syntax element</small>"]:::held
    n349["Side bar<br/><small>Syntax element</small>"]:::held
    n350["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n351["Colours of a status<br/><small>Syntax element</small>"]:::held
    n352["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n353["Theme<br/><small>Syntax element</small>"]:::held
    n354["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n355["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n356["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n357["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n358["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n359["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n360["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n361["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n362["esbuild<br/><small>Implementation</small>"]:::held
    n363["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n364["Example process<br/><small>Function</small>"]:::held
    n365["Example project<br/><small>Decision</small>"]:::neutral
    n366["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n367["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n368["Amendments in place<br/><small>Implementation</small>"]:::held
    n369["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n370["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n371["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n372["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n373["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n374["A server in memory<br/><small>Function</small>"]:::held
    n375["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n376["Terminal in memory<br/><small>Function</small>"]:::held
    n377["Command line<br/><small>Implementation</small>"]:::held
    n378["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n379["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n380["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n381["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n382["Node paths<br/><small>Implementation</small>"]:::held
    n383["NodePlatform<br/><small>Technical choice</small>"]:::held
    n384["Node process<br/><small>Implementation</small>"]:::unknown
    n385["Node programs<br/><small>Implementation</small>"]:::unknown
    n386["Node terminal<br/><small>Implementation</small>"]:::unknown
    n387["Node timer<br/><small>Implementation</small>"]:::held
    n388["No installer in test<br/><small>Implementation</small>"]:::held
    n389["No registry in test<br/><small>Function</small>"]:::held
    n390["npm installs<br/><small>Implementation</small>"]:::unknown
    n391["npm's reports<br/><small>Implementation</small>"]:::unknown
    n392["Packages by their origin<br/><small>Implementation</small>"]:::held
    n393["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n394["Page resources<br/><small>Implementation</small>"]:::held
    n395["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n396["Results kept in the process<br/><small>Implementation</small>"]:::held
    n397["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n398["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n399["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n400["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n401["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n402["Stopped clock<br/><small>Function</small>"]:::held
    n403["System clock<br/><small>Implementation</small>"]:::unknown
    n404["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n405["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n406["Trame's prelude<br/><small>Implementation</small>"]:::held
    n407["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n408["tsx loader<br/><small>Implementation</small>"]:::held
    n409["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n410["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n411["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n412["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n413["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n414["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n415["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n416["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n417["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n418["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n419["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n420["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n421["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n422["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n423["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n424["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n425["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n426["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n427["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n428["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n429["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n430["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n431["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n432["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n433["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n434["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n435["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n436["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n437["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n438["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n439["Candidate dates<br/><small>Decision</small>"]:::neutral
    n440["Claim sets<br/><small>Decision</small>"]:::neutral
    n441["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n442["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n443["A specification that runs<br/><small>Goal</small>"]:::neutral
    n444["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n445["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n446["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n447["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n448["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n449["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n450["A single source of truth<br/><small>Goal</small>"]:::neutral
    n451["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n452["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n453["Generation 1<br/><small>Release</small>"]:::neutral
    n454["Generation 10<br/><small>Release</small>"]:::neutral
    n455["Generation 100<br/><small>Release</small>"]:::neutral
    n456["Generation 101<br/><small>Release</small>"]:::neutral
    n457["Generation 102<br/><small>Release</small>"]:::neutral
    n458["Generation 103<br/><small>Release</small>"]:::neutral
    n459["Generation 104<br/><small>Release</small>"]:::neutral
    n460["Generation 105<br/><small>Release</small>"]:::neutral
    n461["Generation 106<br/><small>Release</small>"]:::neutral
    n462["Generation 107<br/><small>Release</small>"]:::neutral
    n463["Generation 108<br/><small>Release</small>"]:::neutral
    n464["Generation 109<br/><small>Release</small>"]:::neutral
    n465["Generation 11<br/><small>Release</small>"]:::neutral
    n466["Generation 110<br/><small>Release</small>"]:::neutral
    n467["Generation 111<br/><small>Release</small>"]:::neutral
    n468["Generation 112<br/><small>Release</small>"]:::neutral
    n469["Generation 12<br/><small>Release</small>"]:::neutral
    n470["Generation 13<br/><small>Release</small>"]:::neutral
    n471["Generation 14<br/><small>Release</small>"]:::neutral
    n472["Generation 15<br/><small>Release</small>"]:::neutral
    n473["Generation 16<br/><small>Release</small>"]:::neutral
    n474["Generation 17<br/><small>Release</small>"]:::neutral
    n475["Generation 18<br/><small>Release</small>"]:::neutral
    n476["Generation 19<br/><small>Release</small>"]:::neutral
    n477["Generation 2<br/><small>Release</small>"]:::neutral
    n478["Generation 20<br/><small>Release</small>"]:::neutral
    n479["Generation 21<br/><small>Release</small>"]:::neutral
    n480["Generation 22<br/><small>Release</small>"]:::neutral
    n481["Generation 23<br/><small>Release</small>"]:::neutral
    n482["Generation 24<br/><small>Release</small>"]:::neutral
    n483["Generation 25<br/><small>Release</small>"]:::neutral
    n484["Generation 26<br/><small>Release</small>"]:::neutral
    n485["Generation 27<br/><small>Release</small>"]:::neutral
    n486["Generation 28<br/><small>Release</small>"]:::neutral
    n487["Generation 29<br/><small>Release</small>"]:::neutral
    n488["Generation 3<br/><small>Release</small>"]:::neutral
    n489["Generation 30<br/><small>Release</small>"]:::neutral
    n490["Generation 31<br/><small>Release</small>"]:::neutral
    n491["Generation 32<br/><small>Release</small>"]:::neutral
    n492["Generation 33<br/><small>Release</small>"]:::neutral
    n493["Generation 34<br/><small>Release</small>"]:::neutral
    n494["Generation 35<br/><small>Release</small>"]:::neutral
    n495["Generation 36<br/><small>Release</small>"]:::neutral
    n496["Generation 37<br/><small>Release</small>"]:::neutral
    n497["Generation 38<br/><small>Release</small>"]:::neutral
    n498["Generation 39<br/><small>Release</small>"]:::neutral
    n499["Generation 4<br/><small>Release</small>"]:::neutral
    n500["Generation 40<br/><small>Release</small>"]:::neutral
    n501["Generation 41<br/><small>Release</small>"]:::neutral
    n502["Generation 42<br/><small>Release</small>"]:::neutral
    n503["Generation 43<br/><small>Release</small>"]:::neutral
    n504["Generation 44<br/><small>Release</small>"]:::neutral
    n505["Generation 45<br/><small>Release</small>"]:::neutral
    n506["Generation 46<br/><small>Release</small>"]:::neutral
    n507["Generation 47<br/><small>Release</small>"]:::neutral
    n508["Generation 48<br/><small>Release</small>"]:::neutral
    n509["Generation 49<br/><small>Release</small>"]:::neutral
    n510["Generation 5<br/><small>Release</small>"]:::neutral
    n511["Generation 50<br/><small>Release</small>"]:::neutral
    n512["Generation 51<br/><small>Release</small>"]:::neutral
    n513["Generation 52<br/><small>Release</small>"]:::neutral
    n514["Generation 53<br/><small>Release</small>"]:::neutral
    n515["Generation 54<br/><small>Release</small>"]:::neutral
    n516["Generation 55<br/><small>Release</small>"]:::neutral
    n517["Generation 56<br/><small>Release</small>"]:::neutral
    n518["Generation 57<br/><small>Release</small>"]:::neutral
    n519["Generation 58<br/><small>Release</small>"]:::neutral
    n520["Generation 59<br/><small>Release</small>"]:::neutral
    n521["Generation 6<br/><small>Release</small>"]:::neutral
    n522["Generation 60<br/><small>Release</small>"]:::neutral
    n523["Generation 61<br/><small>Release</small>"]:::neutral
    n524["Generation 62<br/><small>Release</small>"]:::neutral
    n525["Generation 63<br/><small>Release</small>"]:::neutral
    n526["Generation 64<br/><small>Release</small>"]:::neutral
    n527["Generation 65<br/><small>Release</small>"]:::neutral
    n528["Generation 66<br/><small>Release</small>"]:::neutral
    n529["Generation 67<br/><small>Release</small>"]:::neutral
    n530["Generation 68<br/><small>Release</small>"]:::neutral
    n531["Generation 69<br/><small>Release</small>"]:::neutral
    n532["Generation 7<br/><small>Release</small>"]:::neutral
    n533["Generation 70<br/><small>Release</small>"]:::neutral
    n534["Generation 71<br/><small>Release</small>"]:::neutral
    n535["Generation 72<br/><small>Release</small>"]:::neutral
    n536["Generation 73<br/><small>Release</small>"]:::neutral
    n537["Generation 74<br/><small>Release</small>"]:::neutral
    n538["Generation 75<br/><small>Release</small>"]:::neutral
    n539["Generation 76<br/><small>Release</small>"]:::neutral
    n540["Generation 77<br/><small>Release</small>"]:::neutral
    n541["Generation 78<br/><small>Release</small>"]:::neutral
    n542["Generation 79<br/><small>Release</small>"]:::neutral
    n543["Generation 8<br/><small>Release</small>"]:::neutral
    n544["Generation 80<br/><small>Release</small>"]:::neutral
    n545["Generation 81<br/><small>Release</small>"]:::neutral
    n546["Generation 82<br/><small>Release</small>"]:::neutral
    n547["Generation 83<br/><small>Release</small>"]:::neutral
    n548["Generation 84<br/><small>Release</small>"]:::neutral
    n549["Generation 85<br/><small>Release</small>"]:::neutral
    n550["Generation 86<br/><small>Release</small>"]:::neutral
    n551["Generation 87<br/><small>Release</small>"]:::neutral
    n552["Generation 88<br/><small>Release</small>"]:::neutral
    n553["Generation 89<br/><small>Release</small>"]:::neutral
    n554["Generation 9<br/><small>Release</small>"]:::neutral
    n555["Generation 90<br/><small>Release</small>"]:::neutral
    n556["Generation 91<br/><small>Release</small>"]:::neutral
    n557["Generation 92<br/><small>Release</small>"]:::neutral
    n558["Generation 93<br/><small>Release</small>"]:::neutral
    n559["Generation 94<br/><small>Release</small>"]:::neutral
    n560["Generation 95<br/><small>Release</small>"]:::neutral
    n561["Generation 96<br/><small>Release</small>"]:::neutral
    n562["Generation 97<br/><small>Release</small>"]:::neutral
    n563["Generation 98<br/><small>Release</small>"]:::neutral
    n564["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n565["Common rendering<br/><small>Function</small>"]:::held
    n566["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n567["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n568["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n569["Rendering of the files<br/><small>Function</small>"]:::held
    n570["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n571["HTML writer<br/><small>Function</small>"]:::held
    n572["Markdown writer<br/><small>Function</small>"]:::held
    n573["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n574["Mermaid diagrams<br/><small>Function</small>"]:::held
    n575["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n576["Figures of the page<br/><small>Port</small>"]:::neutral
    n577["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n578["The page in HTML<br/><small>Technical choice</small>"]:::held
    n579["Rendering in the page<br/><small>Function</small>"]:::held
    n580["Syntax of the page<br/><small>Port</small>"]:::neutral
    n581["Plain text writer<br/><small>Function</small>"]:::held
    n582["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n583["Figures in SVG<br/><small>Function</small>"]:::held
    n584["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n585["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n586["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n587["Rendering in the terminal<br/><small>Function</small>"]:::held
    n588["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n589["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n590["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n591["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n592["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n593["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n594["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n595["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n596["EngineReckons<br/><small>Scenario</small>"]:::held
    n597["Shape of the example<br/><small>Decision</small>"]:::neutral
    n598["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n599["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n600["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n601["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n602["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n603["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n604["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n605["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n606["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n607["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n608["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n609["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n610["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n611["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n612["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n613["How a generation is made<br/><small>Policy</small>"]:::neutral
    n614["The graph page<br/><small>Artefact</small>"]:::unknown
    n615["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n616["The graph page opens<br/><small>Check</small>"]:::unknown
    n617["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n618["What the graph page is asked<br/><small>Function</small>"]:::held
    n619["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n620["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n621["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n622["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n623["How a change merges<br/><small>Policy</small>"]:::neutral
    n624["The next generation<br/><small>Shipment</small>"]:::unknown
    n625["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n626["Open the graph page<br/><small>Entry point</small>"]:::held
    n627["The page's program<br/><small>Artefact</small>"]:::held
    n628["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n629["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n630["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n631["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n632["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n633["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n634["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n635["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n636["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n637["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n638["How the repository is set<br/><small>Policy</small>"]:::neutral
    n639["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n640["The engine<br/><small>Artefact</small>"]:::unknown
    n641["Trame's repository<br/><small>Decision</small>"]:::neutral
    n642["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n643["Attribution<br/><small>Function</small>"]:::held
    n644["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n645["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n646["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n647["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n648["Ship only what holds<br/><small>Requirement</small>"]:::held
    n649["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n650["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n651["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n652["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n653["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n654["Checks of a body<br/><small>Function</small>"]:::held
    n655["Captures<br/><small>Standard</small>"]:::neutral
    n656["Categories of literals<br/><small>Decision</small>"]:::neutral
    n657["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n658["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n659["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n660["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n661["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n662["Attribute<br/><small>Syntax element</small>"]:::held
    n663["Comment<br/><small>Syntax element</small>"]:::held
    n664["Text<br/><small>Syntax element</small>"]:::held
    n665["HCL<br/><small>Standard</small>"]:::neutral
    n666["Value<br/><small>Syntax element</small>"]:::held
    n667["Module call<br/><small>Syntax element</small>"]:::held
    n668["Terraform<br/><small>Language</small>"]:::held
    n669["Terraform modules<br/><small>Standard</small>"]:::neutral
    n670["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n671["Box drawing<br/><small>Standard</small>"]:::neutral
    n672["Code lines<br/><small>Syntax element</small>"]:::held
    n673["Columns<br/><small>Syntax element</small>"]:::held
    n674["Item line<br/><small>Syntax element</small>"]:::held
    n675["Padded cell<br/><small>Syntax element</small>"]:::held
    n676["Path step<br/><small>Syntax element</small>"]:::held
    n677["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n678["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n679["Terminal text<br/><small>Decision</small>"]:::neutral
    n680["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n681["List on several lines<br/><small>Syntax element</small>"]:::held
    n682["Type assertion<br/><small>Syntax element</small>"]:::held
    n683["Assignment<br/><small>Syntax element</small>"]:::held
    n684["Async function of a block<br/><small>Syntax element</small>"]:::held
    n685["Waiting<br/><small>Syntax element</small>"]:::held
    n686["Call<br/><small>Syntax element</small>"]:::held
    n687["Constant<br/><small>Syntax element</small>"]:::held
    n688["Default import<br/><small>Syntax element</small>"]:::held
    n689["Documentation comment<br/><small>Syntax element</small>"]:::held
    n690["Export<br/><small>Syntax element</small>"]:::held
    n691["Condition<br/><small>Syntax element</small>"]:::held
    n692["List on one line<br/><small>Syntax element</small>"]:::held
    n693["Comment<br/><small>Syntax element</small>"]:::held
    n694["Property access<br/><small>Syntax element</small>"]:::held
    n695["Title of a module<br/><small>Syntax element</small>"]:::held
    n696["Import of names<br/><small>Syntax element</small>"]:::held
    n697["Object on several lines<br/><small>Syntax element</small>"]:::held
    n698["Object<br/><small>Syntax element</small>"]:::held
    n699["Object type<br/><small>Syntax element</small>"]:::held
    n700["Optional property access<br/><small>Syntax element</small>"]:::held
    n701["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n702["Group<br/><small>Syntax element</small>"]:::held
    n703["Names of a program<br/><small>Decision</small>"]:::neutral
    n704["Property<br/><small>Syntax element</small>"]:::held
    n705["Strict inequality<br/><small>Syntax element</small>"]:::held
    n706["Text<br/><small>Syntax element</small>"]:::held
    n707["TypeScript<br/><small>Language</small>"]:::held
    n708["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n709["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n710["TypeScript writer<br/><small>Function</small>"]:::held
    n711["Union type<br/><small>Syntax element</small>"]:::held
    n712["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n354
  n57 -->|Depends on| n167
  n58 -->|Implements| n20
  n58 -->|Depends on| n339
  n59 -->|Implements| n24
  n59 -->|Depends on| n354
  n59 -->|Depends on| n167
  n60 -->|Implements| n37
  n60 -->|Depends on| n354
  n61 -->|Implements| n38
  n61 -->|Depends on| n217
  n62 -->|Serves| n443
  n62 -->|Depends on| n354
  n62 -->|Depends on| n274
  n62 -->|Depends on| n276
  n62 -->|Depends on| n275
  n62 -->|Depends on| n0
  n62 -->|Depends on| n211
  n62 -->|Depends on| n215
  n62 -->|Depends on| n223
  n62 -->|Depends on| n220
  n62 -->|Depends on| n202
  n62 -->|Depends on| n208
  n62 -->|Depends on| n565
  n62 -->|Depends on| n304
  n62 -->|Depends on| n306
  n62 -->|Depends on| n156
  n63 -->|Serves| n443
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n565
  n63 -->|Depends on| n354
  n63 -->|Depends on| n343
  n63 -->|Depends on| n346
  n63 -->|Depends on| n334
  n63 -->|Depends on| n274
  n63 -->|Depends on| n273
  n63 -->|Depends on| n275
  n63 -->|Depends on| n0
  n63 -->|Depends on| n138
  n63 -->|Depends on| n582
  n63 -->|Depends on| n156
  n63 -->|Depends on| n300
  n63 -->|Depends on| n211
  n63 -->|Depends on| n208
  n63 -->|Depends on| n200
  n63 -->|Depends on| n199
  n63 -->|Depends on| n222
  n63 -->|Depends on| n201
  n63 -->|Depends on| n304
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n444
  n65 -->|Serves| n443
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n104
  n66 -->|Verifies| n169
  n66 -->|In| n52
  n66 -->|Depends on| n104
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n142
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n147
  n66 -->|Depends on| n291
  n66 -->|Depends on| n67
  n66 -->|Depends on| n307
  n70 -->|Verifies| n661
  n70 -->|Verifies| n654
  n70 -->|Verifies| n411
  n70 -->|In| n52
  n70 -->|Depends on| n661
  n70 -->|Depends on| n654
  n70 -->|Depends on| n707
  n70 -->|Depends on| n71
  n70 -->|Depends on| n297
  n70 -->|Depends on| n307
  n72 -->|Verifies| n119
  n72 -->|In| n52
  n72 -->|Depends on| n110
  n72 -->|Depends on| n119
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n142
  n72 -->|Depends on| n90
  n72 -->|Depends on| n147
  n72 -->|Depends on| n292
  n72 -->|Depends on| n307
  n73 -->|Verifies| n377
  n73 -->|Verifies| n376
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n147
  n73 -->|Depends on| n102
  n73 -->|Depends on| n305
  n73 -->|Depends on| n307
  n74 -->|Verifies| n107
  n74 -->|Verifies| n108
  n74 -->|Verifies| n161
  n74 -->|Verifies| n710
  n74 -->|Verifies| n670
  n74 -->|Verifies| n224
  n74 -->|Verifies| n402
  n74 -->|In| n52
  n74 -->|Depends on| n107
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n147
  n74 -->|Depends on| n142
  n74 -->|Depends on| n69
  n74 -->|Depends on| n139
  n74 -->|Depends on| n292
  n74 -->|Depends on| n307
  n75 -->|Verifies| n127
  n75 -->|In| n52
  n75 -->|Depends on| n127
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n147
  n75 -->|Depends on| n69
  n75 -->|Depends on| n95
  n75 -->|Depends on| n307
  n76 -->|Verifies| n121
  n76 -->|In| n52
  n76 -->|Depends on| n121
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n142
  n76 -->|Depends on| n147
  n76 -->|Depends on| n292
  n76 -->|Depends on| n307
  n77 -->|Verifies| n113
  n77 -->|Verifies| n166
  n77 -->|Verifies| n374
  n77 -->|Verifies| n387
  n77 -->|In| n52
  n77 -->|Depends on| n116
  n77 -->|Depends on| n113
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n142
  n77 -->|Depends on| n167
  n77 -->|Depends on| n441
  n77 -->|Depends on| n183
  n77 -->|Depends on| n147
  n77 -->|Depends on| n303
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n307
  n79 -->|Verifies| n114
  n79 -->|Verifies| n184
  n79 -->|Verifies| n398
  n79 -->|In| n52
  n79 -->|Depends on| n114
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n115
  n79 -->|Depends on| n147
  n79 -->|Depends on| n292
  n79 -->|Depends on| n307
  n80 -->|Verifies| n163
  n80 -->|Verifies| n183
  n80 -->|In| n52
  n80 -->|Depends on| n163
  n80 -->|Depends on| n42
  n80 -->|Depends on| n41
  n80 -->|Depends on| n17
  n80 -->|Depends on| n96
  n80 -->|Depends on| n91
  n80 -->|Depends on| n645
  n80 -->|Depends on| n23
  n80 -->|Depends on| n307
  n81 -->|Verifies| n131
  n81 -->|In| n52
  n81 -->|Depends on| n131
  n81 -->|Depends on| n163
  n81 -->|Depends on| n190
  n81 -->|Depends on| n41
  n81 -->|Depends on| n51
  n81 -->|Depends on| n147
  n81 -->|Depends on| n292
  n81 -->|Depends on| n307
  n82 -->|Verifies| n125
  n82 -->|Verifies| n197
  n82 -->|Verifies| n371
  n82 -->|In| n52
  n82 -->|Depends on| n125
  n82 -->|Depends on| n42
  n82 -->|Depends on| n56
  n82 -->|Depends on| n51
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n142
  n82 -->|Depends on| n96
  n82 -->|Depends on| n91
  n82 -->|Depends on| n147
  n82 -->|Depends on| n706
  n82 -->|Depends on| n307
  n82 -->|Depends on| n650
  n83 -->|Verifies| n134
  n83 -->|Verifies| n392
  n83 -->|Verifies| n370
  n83 -->|Verifies| n388
  n83 -->|In| n52
  n83 -->|Depends on| n134
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n21
  n83 -->|Depends on| n41
  n83 -->|Depends on| n39
  n83 -->|Depends on| n142
  n83 -->|Depends on| n96
  n83 -->|Depends on| n91
  n83 -->|Depends on| n147
  n83 -->|Depends on| n307
  n83 -->|Depends on| n141
  n83 -->|Depends on| n707
  n84 -->|Verifies| n109
  n84 -->|Verifies| n389
  n84 -->|In| n52
  n84 -->|Depends on| n109
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n51
  n84 -->|Depends on| n96
  n84 -->|Depends on| n147
  n84 -->|Depends on| n307
  n84 -->|Depends on| n317
  n85 -->|Verifies| n132
  n85 -->|Verifies| n392
  n85 -->|Verifies| n370
  n85 -->|In| n52
  n85 -->|Depends on| n132
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n41
  n85 -->|Depends on| n39
  n85 -->|Depends on| n142
  n85 -->|Depends on| n96
  n85 -->|Depends on| n147
  n85 -->|Depends on| n307
  n86 -->|Verifies| n112
  n86 -->|Verifies| n152
  n86 -->|In| n52
  n86 -->|Depends on| n112
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n96
  n86 -->|Depends on| n91
  n86 -->|Depends on| n207
  n86 -->|Depends on| n147
  n86 -->|Depends on| n307
  n87 -->|Verifies| n117
  n87 -->|Verifies| n165
  n87 -->|In| n52
  n87 -->|Depends on| n116
  n87 -->|Depends on| n117
  n87 -->|Depends on| n42
  n87 -->|Depends on| n56
  n87 -->|Depends on| n51
  n87 -->|Depends on| n183
  n87 -->|Depends on| n41
  n87 -->|Depends on| n39
  n87 -->|Depends on| n142
  n87 -->|Depends on| n147
  n87 -->|Depends on| n303
  n87 -->|Depends on| n307
  n88 -->|Verifies| n340
  n88 -->|Verifies| n362
  n88 -->|Verifies| n378
  n88 -->|Verifies| n394
  n88 -->|In| n52
  n88 -->|Depends on| n116
  n88 -->|Depends on| n340
  n88 -->|Depends on| n19
  n88 -->|Depends on| n183
  n88 -->|Depends on| n41
  n88 -->|Depends on| n17
  n88 -->|Depends on| n51
  n88 -->|Depends on| n147
  n88 -->|Depends on| n303
  n88 -->|Depends on| n307
  n89 -->|Verifies| n116
  n89 -->|Verifies| n181
  n89 -->|Verifies| n579
  n89 -->|Verifies| n571
  n89 -->|Verifies| n583
  n89 -->|Verifies| n168
  n89 -->|In| n52
  n89 -->|Depends on| n116
  n89 -->|Depends on| n168
  n89 -->|Depends on| n51
  n89 -->|Depends on| n147
  n89 -->|Depends on| n303
  n89 -->|Depends on| n307
  n89 -->|Depends on| n100
  n92 -->|Verifies| n118
  n92 -->|Verifies| n123
  n92 -->|In| n52
  n92 -->|Depends on| n118
  n92 -->|Depends on| n42
  n92 -->|Depends on| n56
  n92 -->|Depends on| n41
  n92 -->|Depends on| n39
  n92 -->|Depends on| n142
  n92 -->|Depends on| n96
  n92 -->|Depends on| n91
  n92 -->|Depends on| n144
  n92 -->|Depends on| n195
  n92 -->|Depends on| n147
  n92 -->|Depends on| n307
  n92 -->|Depends on| n141
  n92 -->|Depends on| n707
  n93 -->|Verifies| n121
  n93 -->|Verifies| n178
  n93 -->|In| n52
  n93 -->|Depends on| n121
  n93 -->|Depends on| n23
  n93 -->|Depends on| n21
  n93 -->|Depends on| n51
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n142
  n93 -->|Depends on| n147
  n93 -->|Depends on| n185
  n93 -->|Depends on| n68
  n93 -->|Depends on| n303
  n93 -->|Depends on| n307
  n94 -->|Verifies| n124
  n94 -->|Verifies| n371
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n42
  n94 -->|Depends on| n56
  n94 -->|Depends on| n147
  n94 -->|Depends on| n307
  n94 -->|Depends on| n141
  n94 -->|Depends on| n707
  n94 -->|Depends on| n91
  n97 -->|Verifies| n128
  n97 -->|Verifies| n122
  n97 -->|Verifies| n645
  n97 -->|Verifies| n186
  n97 -->|Verifies| n647
  n97 -->|Verifies| n379
  n97 -->|Verifies| n643
  n97 -->|Verifies| n169
  n97 -->|In| n52
  n97 -->|Depends on| n128
  n97 -->|Depends on| n122
  n97 -->|Depends on| n42
  n97 -->|Depends on| n56
  n97 -->|Depends on| n51
  n97 -->|Depends on| n41
  n97 -->|Depends on| n39
  n97 -->|Depends on| n22
  n97 -->|Depends on| n48
  n97 -->|Depends on| n23
  n97 -->|Depends on| n163
  n97 -->|Depends on| n17
  n97 -->|Depends on| n293
  n97 -->|Depends on| n142
  n97 -->|Depends on| n650
  n97 -->|Depends on| n96
  n97 -->|Depends on| n91
  n97 -->|Depends on| n147
  n97 -->|Depends on| n307
  n98 -->|Verifies| n130
  n98 -->|In| n52
  n98 -->|Depends on| n130
  n98 -->|Depends on| n56
  n98 -->|Depends on| n21
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n142
  n98 -->|Depends on| n147
  n98 -->|Depends on| n307
  n99 -->|Verifies| n128
  n99 -->|Verifies| n186
  n99 -->|In| n52
  n99 -->|Depends on| n128
  n99 -->|Depends on| n42
  n99 -->|Depends on| n51
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n22
  n99 -->|Depends on| n23
  n99 -->|Depends on| n163
  n99 -->|Depends on| n17
  n99 -->|Depends on| n186
  n99 -->|Depends on| n292
  n99 -->|Depends on| n142
  n99 -->|Depends on| n650
  n99 -->|Depends on| n96
  n99 -->|Depends on| n91
  n99 -->|Depends on| n147
  n99 -->|Depends on| n307
  n101 -->|Verifies| n105
  n101 -->|Verifies| n106
  n101 -->|Verifies| n111
  n101 -->|Verifies| n368
  n101 -->|In| n52
  n101 -->|Depends on| n105
  n101 -->|Depends on| n56
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n147
  n101 -->|Depends on| n68
  n101 -->|Depends on| n307
  n103 -->|Verifies| n129
  n103 -->|Verifies| n133
  n103 -->|Verifies| n126
  n103 -->|Verifies| n587
  n103 -->|Verifies| n581
  n103 -->|Verifies| n589
  n103 -->|In| n52
  n103 -->|Depends on| n129
  n103 -->|Depends on| n133
  n103 -->|Depends on| n51
  n103 -->|Depends on| n147
  n103 -->|Depends on| n102
  n103 -->|Depends on| n307
  n104 -->|Serves| n443
  n104 -->|Part of| n54
  n104 -->|Depends on| n120
  n104 -->|Depends on| n169
  n104 -->|Depends on| n147
  n104 -->|Depends on| n142
  n104 -->|Depends on| n194
  n104 -->|Depends on| n192
  n104 -->|Depends on| n365
  n104 -->|Depends on| n404
  n104 -->|Depends on| n148
  n104 -->|Depends on| n707
  n104 -->|Depends on| n43
  n104 -->|Depends on| n22
  n104 -->|Depends on| n21
  n104 -->|Depends on| n23
  n104 -->|Depends on| n39
  n104 -->|Depends on| n25
  n104 -->|Depends on| n170
  n104 -->|Depends on| n50
  n104 -->|Depends on| n673
  n104 -->|Depends on| n679
  n104 -->|Depends on| n292
  n104 -->|Depends on| n291
  n104 -->|Depends on| n195
  n104 -->|Depends on| n196
  n104 -->|Depends on| n198
  n104 -->|Depends on| n197
  n104 -->|Depends on| n140
  n104 -->|Depends on| n145
  n104 -->|Depends on| n17
  n104 -->|Depends on| n183
  n104 -->|Depends on| n141
  n105 -->|Serves| n450
  n105 -->|Part of| n54
  n105 -->|Depends on| n120
  n105 -->|Depends on| n106
  n105 -->|Depends on| n14
  n105 -->|Depends on| n39
  n105 -->|Depends on| n679
  n105 -->|Depends on| n50
  n105 -->|Depends on| n292
  n106 -->|Serves| n450
  n106 -->|Depends on| n120
  n106 -->|Depends on| n179
  n106 -->|Depends on| n111
  n106 -->|Depends on| n40
  n106 -->|Depends on| n185
  n106 -->|Depends on| n183
  n106 -->|Depends on| n142
  n106 -->|Depends on| n39
  n106 -->|Depends on| n292
  n106 -->|Depends on| n135
  n107 -->|Serves| n443
  n107 -->|Part of| n54
  n107 -->|Depends on| n120
  n107 -->|Depends on| n108
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n50
  n107 -->|Depends on| n292
  n108 -->|Serves| n443
  n108 -->|Depends on| n120
  n108 -->|Depends on| n161
  n108 -->|Depends on| n679
  n108 -->|Depends on| n156
  n108 -->|Depends on| n292
  n109 -->|Serves| n450
  n109 -->|Part of| n54
  n109 -->|Depends on| n120
  n109 -->|Depends on| n34
  n109 -->|Depends on| n317
  n109 -->|Depends on| n142
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n323
  n109 -->|Depends on| n140
  n109 -->|Depends on| n50
  n109 -->|Depends on| n673
  n109 -->|Depends on| n679
  n109 -->|Depends on| n292
  n110 -->|Serves| n443
  n110 -->|Part of| n54
  n110 -->|Depends on| n142
  n110 -->|Depends on| n120
  n110 -->|Depends on| n179
  n110 -->|Depends on| n569
  n110 -->|Depends on| n587
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n50
  n110 -->|Depends on| n292
  n111 -->|Serves| n443
  n111 -->|Depends on| n292
  n111 -->|Depends on| n303
  n112 -->|Serves| n443
  n112 -->|Part of| n54
  n112 -->|Depends on| n120
  n112 -->|Depends on| n161
  n112 -->|Depends on| n108
  n112 -->|Depends on| n16
  n112 -->|Depends on| n152
  n112 -->|Depends on| n341
  n112 -->|Depends on| n342
  n112 -->|Depends on| n221
  n112 -->|Depends on| n151
  n112 -->|Depends on| n21
  n112 -->|Depends on| n23
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n292
  n113 -->|Serves| n443
  n113 -->|Part of| n54
  n113 -->|Depends on| n120
  n113 -->|Depends on| n166
  n113 -->|Depends on| n106
  n113 -->|Depends on| n14
  n113 -->|Depends on| n39
  n114 -->|Serves| n443
  n114 -->|Part of| n54
  n114 -->|Depends on| n120
  n114 -->|Depends on| n115
  n114 -->|Depends on| n21
  n114 -->|Depends on| n23
  n114 -->|Depends on| n22
  n114 -->|Depends on| n43
  n114 -->|Depends on| n28
  n114 -->|Depends on| n26
  n114 -->|Depends on| n53
  n114 -->|Depends on| n34
  n114 -->|Depends on| n33
  n114 -->|Depends on| n142
  n114 -->|Depends on| n17
  n114 -->|Depends on| n39
  n114 -->|Depends on| n50
  n114 -->|Depends on| n292
  n116 -->|Serves| n443
  n116 -->|Part of| n54
  n116 -->|Depends on| n120
  n116 -->|Depends on| n181
  n116 -->|Depends on| n569
  n116 -->|Depends on| n587
  n116 -->|Depends on| n579
  n116 -->|Depends on| n50
  n117 -->|Serves| n443
  n117 -->|Part of| n54
  n117 -->|Depends on| n142
  n117 -->|Depends on| n120
  n117 -->|Depends on| n165
  n117 -->|Depends on| n340
  n117 -->|Depends on| n183
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n292
  n118 -->|Serves| n450
  n118 -->|Part of| n54
  n118 -->|Depends on| n120
  n118 -->|Depends on| n142
  n118 -->|Depends on| n183
  n118 -->|Depends on| n40
  n118 -->|Depends on| n144
  n118 -->|Depends on| n195
  n118 -->|Depends on| n21
  n118 -->|Depends on| n23
  n118 -->|Depends on| n39
  n118 -->|Depends on| n140
  n118 -->|Depends on| n707
  n118 -->|Depends on| n709
  n118 -->|Depends on| n695
  n118 -->|Depends on| n689
  n118 -->|Depends on| n690
  n118 -->|Depends on| n687
  n118 -->|Depends on| n686
  n118 -->|Depends on| n698
  n118 -->|Depends on| n704
  n118 -->|Depends on| n706
  n118 -->|Depends on| n696
  n118 -->|Depends on| n50
  n118 -->|Depends on| n292
  n118 -->|Depends on| n41
  n118 -->|Depends on| n147
  n118 -->|Depends on| n123
  n118 -->|Depends on| n141
  n118 -->|Depends on| n694
  n118 -->|Depends on| n692
  n119 -->|Serves| n443
  n119 -->|Part of| n54
  n119 -->|Depends on| n142
  n119 -->|Depends on| n679
  n119 -->|Depends on| n120
  n119 -->|Depends on| n179
  n119 -->|Depends on| n111
  n119 -->|Depends on| n21
  n119 -->|Depends on| n39
  n119 -->|Depends on| n50
  n119 -->|Depends on| n292
  n120 -->|Serves| n443
  n120 -->|Depends on| n147
  n120 -->|Depends on| n163
  n120 -->|Depends on| n162
  n120 -->|Depends on| n176
  n120 -->|Depends on| n190
  n120 -->|Depends on| n178
  n120 -->|Depends on| n565
  n120 -->|Depends on| n50
  n120 -->|Depends on| n41
  n120 -->|Depends on| n17
  n120 -->|Depends on| n448
  n120 -->|Depends on| n442
  n120 -->|Depends on| n679
  n120 -->|Depends on| n677
  n120 -->|Depends on| n675
  n120 -->|Depends on| n292
  n120 -->|Depends on| n142
  n120 -->|Depends on| n185
  n121 -->|Serves| n450
  n121 -->|Part of| n54
  n121 -->|Depends on| n120
  n121 -->|Depends on| n178
  n121 -->|Depends on| n23
  n121 -->|Depends on| n50
  n121 -->|Depends on| n679
  n121 -->|Depends on| n677
  n121 -->|Depends on| n675
  n121 -->|Depends on| n292
  n122 -->|Serves| n648
  n122 -->|Part of| n54
  n122 -->|Depends on| n147
  n122 -->|Depends on| n120
  n122 -->|Depends on| n645
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n50
  n122 -->|Depends on| n292
  n123 -->|Serves| n450
  n123 -->|Depends on| n709
  n123 -->|Depends on| n695
  n123 -->|Depends on| n689
  n123 -->|Depends on| n690
  n123 -->|Depends on| n687
  n123 -->|Depends on| n686
  n123 -->|Depends on| n698
  n123 -->|Depends on| n704
  n123 -->|Depends on| n706
  n123 -->|Depends on| n692
  n123 -->|Depends on| n696
  n124 -->|Serves| n450
  n124 -->|Part of| n54
  n124 -->|Depends on| n120
  n124 -->|Depends on| n142
  n124 -->|Depends on| n183
  n124 -->|Depends on| n141
  n124 -->|Depends on| n21
  n124 -->|Depends on| n22
  n124 -->|Depends on| n39
  n124 -->|Depends on| n50
  n124 -->|Depends on| n292
  n125 -->|Serves| n450
  n125 -->|Part of| n54
  n125 -->|Depends on| n120
  n125 -->|Depends on| n142
  n125 -->|Depends on| n183
  n125 -->|Depends on| n179
  n125 -->|Depends on| n569
  n125 -->|Depends on| n250
  n125 -->|Depends on| n249
  n125 -->|Depends on| n198
  n125 -->|Depends on| n197
  n125 -->|Depends on| n21
  n125 -->|Depends on| n23
  n125 -->|Depends on| n22
  n125 -->|Depends on| n39
  n125 -->|Depends on| n25
  n125 -->|Depends on| n170
  n125 -->|Depends on| n707
  n125 -->|Depends on| n17
  n125 -->|Depends on| n50
  n125 -->|Depends on| n292
  n125 -->|Depends on| n291
  n125 -->|Depends on| n224
  n125 -->|Depends on| n706
  n125 -->|Depends on| n128
  n125 -->|Depends on| n147
  n126 -->|Serves| n443
  n126 -->|Depends on| n147
  n126 -->|Depends on| n140
  n126 -->|Depends on| n120
  n126 -->|Depends on| n190
  n126 -->|Depends on| n569
  n126 -->|Depends on| n587
  n126 -->|Depends on| n50
  n126 -->|Depends on| n292
  n127 -->|Serves| n443
  n127 -->|Part of| n54
  n127 -->|Depends on| n107
  n127 -->|Depends on| n41
  n128 -->|Serves| n648
  n128 -->|Part of| n54
  n128 -->|Depends on| n147
  n128 -->|Depends on| n120
  n128 -->|Depends on| n112
  n128 -->|Depends on| n161
  n128 -->|Depends on| n108
  n128 -->|Depends on| n645
  n128 -->|Depends on| n647
  n128 -->|Depends on| n648
  n128 -->|Depends on| n16
  n128 -->|Depends on| n152
  n128 -->|Depends on| n644
  n128 -->|Depends on| n41
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n50
  n128 -->|Depends on| n169
  n128 -->|Depends on| n292
  n129 -->|Serves| n443
  n129 -->|Part of| n54
  n129 -->|Depends on| n120
  n129 -->|Depends on| n126
  n130 -->|Serves| n450
  n130 -->|Part of| n54
  n130 -->|Depends on| n142
  n130 -->|Depends on| n120
  n130 -->|Depends on| n179
  n130 -->|Depends on| n569
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n50
  n130 -->|Depends on| n292
  n131 -->|Serves| n443
  n131 -->|Part of| n54
  n131 -->|Depends on| n120
  n131 -->|Depends on| n163
  n131 -->|Depends on| n190
  n131 -->|Depends on| n176
  n131 -->|Depends on| n50
  n131 -->|Depends on| n679
  n131 -->|Depends on| n677
  n131 -->|Depends on| n675
  n131 -->|Depends on| n292
  n132 -->|Serves| n450
  n132 -->|Part of| n54
  n132 -->|Depends on| n120
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n39
  n132 -->|Depends on| n323
  n132 -->|Depends on| n706
  n132 -->|Depends on| n41
  n132 -->|Depends on| n147
  n132 -->|Depends on| n50
  n132 -->|Depends on| n292
  n133 -->|Serves| n443
  n133 -->|Part of| n54
  n133 -->|Depends on| n147
  n133 -->|Depends on| n120
  n133 -->|Depends on| n126
  n133 -->|Depends on| n163
  n133 -->|Depends on| n190
  n133 -->|Depends on| n50
  n133 -->|Depends on| n292
  n134 -->|Serves| n450
  n134 -->|Part of| n54
  n134 -->|Depends on| n120
  n134 -->|Depends on| n142
  n134 -->|Depends on| n183
  n134 -->|Depends on| n21
  n134 -->|Depends on| n23
  n134 -->|Depends on| n141
  n134 -->|Depends on| n40
  n134 -->|Depends on| n195
  n134 -->|Depends on| n39
  n134 -->|Depends on| n33
  n134 -->|Depends on| n316
  n134 -->|Depends on| n140
  n134 -->|Depends on| n707
  n134 -->|Depends on| n50
  n134 -->|Depends on| n292
  n134 -->|Depends on| n41
  n134 -->|Depends on| n147
  n151 -->|Read in| n204
  n151 -->|Depends on| n203
  n151 -->|Depends on| n206
  n152 -->|Serves| n443
  n152 -->|Depends on| n31
  n152 -->|Depends on| n150
  n156 -->|Serves| n450
  n156 -->|Depends on| n300
  n157 -->|Serves| n450
  n157 -->|Applied by| n156
  n157 -->|Applied by| n300
  n159 -->|Serves| n450
  n159 -->|Depends on| n155
  n160 -->|Serves| n450
  n161 -->|Serves| n443
  n161 -->|Depends on| n147
  n161 -->|Depends on| n142
  n161 -->|Depends on| n39
  n161 -->|Depends on| n191
  n161 -->|Depends on| n40
  n161 -->|Depends on| n224
  n161 -->|Depends on| n293
  n161 -->|Depends on| n141
  n161 -->|Depends on| n707
  n162 -->|Serves| n443
  n162 -->|Depends on| n136
  n162 -->|Depends on| n182
  n162 -->|Depends on| n185
  n162 -->|Depends on| n40
  n162 -->|Depends on| n156
  n162 -->|Depends on| n138
  n162 -->|Depends on| n142
  n162 -->|Depends on| n308
  n162 -->|Depends on| n186
  n162 -->|Depends on| n159
  n163 -->|Serves| n443
  n163 -->|Depends on| n142
  n163 -->|Depends on| n448
  n163 -->|Depends on| n164
  n163 -->|Depends on| n185
  n163 -->|Depends on| n182
  n163 -->|Depends on| n31
  n163 -->|Depends on| n21
  n163 -->|Depends on| n39
  n163 -->|Depends on| n187
  n163 -->|Depends on| n183
  n163 -->|Depends on| n173
  n163 -->|Depends on| n191
  n163 -->|Depends on| n224
  n163 -->|Depends on| n40
  n163 -->|Depends on| n293
  n163 -->|Depends on| n171
  n163 -->|Depends on| n48
  n163 -->|Depends on| n169
  n163 -->|Depends on| n28
  n163 -->|Depends on| n141
  n163 -->|Depends on| n174
  n164 -->|Serves| n443
  n165 -->|Serves| n443
  n165 -->|Depends on| n147
  n165 -->|Depends on| n17
  n165 -->|Depends on| n41
  n165 -->|Depends on| n303
  n166 -->|Serves| n443
  n166 -->|Depends on| n167
  n166 -->|Depends on| n147
  n166 -->|Depends on| n142
  n166 -->|Depends on| n50
  n166 -->|Depends on| n672
  n166 -->|Depends on| n17
  n166 -->|Depends on| n53
  n166 -->|Depends on| n441
  n166 -->|Depends on| n26
  n166 -->|Depends on| n21
  n166 -->|Depends on| n39
  n166 -->|Depends on| n183
  n166 -->|Depends on| n165
  n166 -->|Depends on| n168
  n166 -->|Depends on| n340
  n166 -->|Depends on| n579
  n166 -->|Depends on| n295
  n166 -->|Depends on| n300
  n166 -->|Depends on| n296
  n168 -->|Serves| n443
  n168 -->|Depends on| n156
  n168 -->|Depends on| n303
  n169 -->|Serves| n443
  n169 -->|Depends on| n142
  n169 -->|Depends on| n194
  n169 -->|Depends on| n707
  n169 -->|Depends on| n183
  n169 -->|Depends on| n21
  n169 -->|Depends on| n39
  n169 -->|Depends on| n25
  n169 -->|Depends on| n170
  n169 -->|Depends on| n140
  n171 -->|Serves| n443
  n172 -->|Serves| n443
  n173 -->|Serves| n443
  n173 -->|Depends on| n40
  n173 -->|Depends on| n145
  n173 -->|Depends on| n293
  n173 -->|Depends on| n302
  n173 -->|Depends on| n295
  n173 -->|Depends on| n156
  n173 -->|Depends on| n182
  n173 -->|Depends on| n185
  n173 -->|Depends on| n153
  n173 -->|Depends on| n172
  n173 -->|Depends on| n451
  n173 -->|Depends on| n142
  n173 -->|Depends on| n707
  n173 -->|Depends on| n323
  n173 -->|Depends on| n159
  n173 -->|Depends on| n160
  n173 -->|Depends on| n171
  n174 -->|Serves| n443
  n174 -->|Depends on| n448
  n174 -->|Depends on| n293
  n176 -->|Serves| n443
  n176 -->|Depends on| n27
  n176 -->|Depends on| n224
  n176 -->|Depends on| n143
  n176 -->|Depends on| n142
  n176 -->|Depends on| n445
  n176 -->|Depends on| n440
  n176 -->|Depends on| n172
  n176 -->|Depends on| n446
  n176 -->|Depends on| n447
  n176 -->|Depends on| n185
  n176 -->|Depends on| n21
  n176 -->|Depends on| n39
  n176 -->|Depends on| n183
  n176 -->|Depends on| n173
  n176 -->|Depends on| n40
  n176 -->|Depends on| n141
  n176 -->|Depends on| n301
  n176 -->|Depends on| n232
  n176 -->|Depends on| n226
  n176 -->|Depends on| n228
  n176 -->|Depends on| n236
  n176 -->|Depends on| n245
  n176 -->|Depends on| n242
  n176 -->|Depends on| n240
  n176 -->|Depends on| n230
  n177 -->|Serves| n244
  n177 -->|Applied by| n176
  n177 -->|Applied by| n190
  n178 -->|Serves| n450
  n178 -->|Depends on| n142
  n178 -->|Depends on| n140
  n178 -->|Depends on| n185
  n178 -->|Depends on| n258
  n178 -->|Depends on| n21
  n178 -->|Depends on| n39
  n178 -->|Depends on| n40
  n178 -->|Depends on| n303
  n179 -->|Serves| n450
  n179 -->|Depends on| n140
  n179 -->|Depends on| n182
  n179 -->|Depends on| n40
  n179 -->|Depends on| n303
  n181 -->|Serves| n443
  n181 -->|Depends on| n142
  n181 -->|Depends on| n439
  n181 -->|Depends on| n180
  n181 -->|Depends on| n17
  n181 -->|Depends on| n179
  n181 -->|Depends on| n190
  n181 -->|Depends on| n300
  n182 -->|Serves| n443
  n182 -->|Depends on| n653
  n183 -->|Serves| n443
  n183 -->|Depends on| n142
  n183 -->|Depends on| n21
  n183 -->|Depends on| n39
  n183 -->|Depends on| n195
  n183 -->|Depends on| n40
  n183 -->|Depends on| n141
  n183 -->|Depends on| n707
  n184 -->|Serves| n443
  n184 -->|Implements| n28
  n184 -->|Depends on| n21
  n184 -->|Depends on| n39
  n184 -->|Depends on| n25
  n184 -->|Depends on| n175
  n184 -->|Depends on| n46
  n185 -->|Serves| n443
  n185 -->|Depends on| n145
  n185 -->|Depends on| n247
  n186 -->|Serves| n443
  n186 -->|Depends on| n292
  n187 -->|Serves| n443
  n187 -->|Depends on| n709
  n187 -->|Depends on| n185
  n187 -->|Depends on| n189
  n187 -->|Depends on| n55
  n187 -->|Depends on| n27
  n187 -->|Depends on| n46
  n187 -->|Depends on| n25
  n187 -->|Depends on| n39
  n187 -->|Depends on| n182
  n187 -->|Depends on| n137
  n187 -->|Depends on| n293
  n187 -->|Depends on| n708
  n187 -->|Depends on| n143
  n187 -->|Depends on| n40
  n188 -->|Serves| n450
  n188 -->|Applied by| n173
  n188 -->|Applied by| n190
  n190 -->|Serves| n443
  n190 -->|Depends on| n224
  n190 -->|Depends on| n136
  n190 -->|Depends on| n149
  n190 -->|Depends on| n138
  n190 -->|Depends on| n142
  n190 -->|Depends on| n31
  n190 -->|Depends on| n21
  n190 -->|Depends on| n39
  n190 -->|Depends on| n40
  n190 -->|Depends on| n183
  n190 -->|Depends on| n303
  n190 -->|Depends on| n308
  n190 -->|Depends on| n234
  n190 -->|Depends on| n226
  n190 -->|Depends on| n242
  n190 -->|Depends on| n238
  n191 -->|Serves| n443
  n191 -->|Depends on| n146
  n191 -->|Depends on| n145
  n191 -->|Depends on| n142
  n191 -->|Depends on| n39
  n191 -->|Depends on| n40
  n191 -->|Depends on| n224
  n191 -->|Depends on| n293
  n192 -->|Refines| n443
  n193 -->|Accepts| n192
  n197 -->|Serves| n443
  n197 -->|Depends on| n198
  n197 -->|Depends on| n709
  n197 -->|Depends on| n145
  n197 -->|Depends on| n689
  n197 -->|Depends on| n695
  n197 -->|Depends on| n693
  n197 -->|Depends on| n696
  n197 -->|Depends on| n690
  n197 -->|Depends on| n687
  n197 -->|Depends on| n686
  n197 -->|Depends on| n697
  n197 -->|Depends on| n704
  n197 -->|Depends on| n706
  n197 -->|Depends on| n692
  n199 -->|Read in| n204
  n200 -->|Read in| n204
  n201 -->|Read in| n204
  n202 -->|Read in| n204
  n203 -->|Read in| n204
  n204 -->|Queries written in| n652
  n204 -->|Read by| n661
  n204 -->|Uses| n311
  n205 -->|Read in| n204
  n206 -->|Read in| n204
  n206 -->|Depends on| n202
  n207 -->|Read in| n214
  n208 -->|Read in| n214
  n209 -->|Read in| n214
  n210 -->|Read in| n214
  n210 -->|Depends on| n215
  n210 -->|Depends on| n212
  n211 -->|Read in| n214
  n211 -->|Depends on| n215
  n211 -->|Depends on| n212
  n212 -->|Read in| n214
  n213 -->|Read in| n214
  n213 -->|Depends on| n211
  n214 -->|Queries written in| n652
  n214 -->|Read by| n661
  n214 -->|Uses| n314
  n215 -->|Read in| n214
  n215 -->|Depends on| n209
  n216 -->|Read in| n707
  n217 -->|Read in| n204
  n218 -->|Read in| n204
  n219 -->|Read in| n204
  n221 -->|Read in| n214
  n221 -->|Depends on| n211
  n222 -->|Read in| n204
  n223 -->|Read in| n214
  n223 -->|Depends on| n209
  n224 -->|Serves| n443
  n224 -->|Depends on| n661
  n224 -->|Depends on| n654
  n224 -->|Depends on| n707
  n224 -->|Depends on| n204
  n224 -->|Depends on| n710
  n224 -->|Depends on| n668
  n224 -->|Depends on| n669
  n224 -->|Depends on| n670
  n224 -->|Depends on| n31
  n224 -->|Depends on| n21
  n224 -->|Depends on| n39
  n224 -->|Depends on| n297
  n225 -->|Serves| n443
  n225 -->|Applied by| n224
  n225 -->|Applied by| n340
  n226 -->|Refines| n244
  n227 -->|Accepts| n226
  n228 -->|Refines| n244
  n229 -->|Accepts| n228
  n230 -->|Refines| n244
  n231 -->|Accepts| n230
  n232 -->|Refines| n244
  n233 -->|Accepts| n232
  n234 -->|Refines| n244
  n235 -->|Accepts| n234
  n236 -->|Refines| n244
  n237 -->|Accepts| n236
  n238 -->|Refines| n244
  n239 -->|Accepts| n238
  n240 -->|Refines| n242
  n240 -->|Depends on| n242
  n241 -->|Accepts| n240
  n242 -->|Refines| n244
  n243 -->|Accepts| n242
  n245 -->|Refines| n244
  n246 -->|Accepts| n245
  n247 -->|Refines| n452
  n248 -->|Accepts| n247
  n250 -->|Refines| n452
  n251 -->|Accepts| n250
  n252 -->|Read in| n214
  n252 -->|Depends on| n211
  n253 -->|Defined by| n259
  n253 -->|Depends on| n259
  n254 -->|Defined by| n259
  n254 -->|Depends on| n259
  n255 -->|Defined by| n259
  n255 -->|Depends on| n259
  n256 -->|Defined by| n259
  n256 -->|Depends on| n259
  n256 -->|Depends on| n254
  n257 -->|Defined by| n259
  n257 -->|Depends on| n259
  n257 -->|Depends on| n253
  n258 -->|Defined by| n259
  n258 -->|Depends on| n259
  n258 -->|Depends on| n253
  n260 -->|Read in| n214
  n260 -->|Depends on| n215
  n260 -->|Depends on| n212
  n260 -->|Depends on| n211
  n260 -->|Depends on| n254
  n261 -->|Defined by| n259
  n261 -->|Depends on| n259
  n263 -->|Defined by| n259
  n263 -->|Depends on| n259
  n264 -->|Defined by| n259
  n264 -->|Depends on| n259
  n265 -->|Defined by| n259
  n265 -->|Depends on| n259
  n266 -->|Depends on| n142
  n267 -->|Read in| n214
  n267 -->|Depends on| n211
  n268 -->|Defined by| n259
  n268 -->|Depends on| n259
  n269 -->|Defined by| n262
  n269 -->|Depends on| n262
  n269 -->|Depends on| n272
  n269 -->|Depends on| n271
  n270 -->|Defined by| n262
  n270 -->|Depends on| n262
  n270 -->|Depends on| n259
  n271 -->|Defined by| n262
  n271 -->|Depends on| n262
  n272 -->|Defined by| n262
  n272 -->|Depends on| n262
  n272 -->|Depends on| n259
  n277 -->|Defined by| n283
  n277 -->|Depends on| n283
  n277 -->|Depends on| n289
  n278 -->|Defined by| n283
  n278 -->|Depends on| n283
  n279 -->|Defined by| n283
  n279 -->|Depends on| n283
  n280 -->|Defined by| n283
  n280 -->|Depends on| n283
  n281 -->|Defined by| n283
  n281 -->|Depends on| n283
  n281 -->|Depends on| n280
  n282 -->|Defined by| n283
  n282 -->|Depends on| n283
  n282 -->|Depends on| n280
  n284 -->|Defined by| n283
  n284 -->|Depends on| n283
  n285 -->|Defined by| n283
  n285 -->|Depends on| n283
  n285 -->|Depends on| n284
  n286 -->|Defined by| n283
  n286 -->|Depends on| n283
  n286 -->|Depends on| n284
  n287 -->|Defined by| n283
  n287 -->|Depends on| n283
  n287 -->|Depends on| n282
  n288 -->|Defined by| n283
  n288 -->|Depends on| n283
  n288 -->|Depends on| n289
  n289 -->|Defined by| n283
  n289 -->|Depends on| n283
  n290 -->|Defined by| n283
  n290 -->|Depends on| n283
  n290 -->|Depends on| n284
  n291 -->|Written in| n300
  n291 -->|Depends on| n300
  n292 -->|Written in| n300
  n292 -->|Depends on| n300
  n293 -->|Written in| n300
  n293 -->|Depends on| n300
  n293 -->|Depends on| n302
  n294 -->|Serves| n450
  n294 -->|Applied by| n293
  n294 -->|Applied by| n308
  n294 -->|Applied by| n296
  n294 -->|Applied by| n292
  n294 -->|Applied by| n307
  n294 -->|Applied by| n291
  n294 -->|Applied by| n304
  n294 -->|Applied by| n302
  n295 -->|Serves| n450
  n295 -->|Depends on| n300
  n296 -->|Written in| n300
  n296 -->|Depends on| n300
  n296 -->|Depends on| n302
  n297 -->|Written in| n300
  n298 -->|Written in| n300
  n299 -->|Written in| n300
  n301 -->|Written in| n300
  n302 -->|Serves| n450
  n302 -->|Depends on| n300
  n303 -->|Written in| n300
  n304 -->|Written in| n300
  n304 -->|Depends on| n300
  n305 -->|Written in| n300
  n306 -->|Written in| n300
  n307 -->|Written in| n300
  n307 -->|Depends on| n300
  n308 -->|Written in| n300
  n308 -->|Depends on| n300
  n309 -->|Written in| n300
  n310 -->|Serves| n450
  n316 -->|Serves| n450
  n318 -->|Serves| n450
  n319 -->|Serves| n450
  n323 -->|Serves| n450
  n325 -->|Defined by| n354
  n325 -->|Read in| n214
  n325 -->|Depends on| n354
  n325 -->|Depends on| n343
  n325 -->|Depends on| n211
  n326 -->|Defined by| n354
  n326 -->|Read in| n214
  n326 -->|Depends on| n354
  n326 -->|Depends on| n147
  n326 -->|Depends on| n333
  n326 -->|Depends on| n210
  n326 -->|Depends on| n211
  n327 -->|Defined by| n354
  n327 -->|Read in| n214
  n327 -->|Depends on| n354
  n327 -->|Depends on| n343
  n327 -->|Depends on| n211
  n328 -->|Defined by| n354
  n328 -->|Read in| n214
  n328 -->|Depends on| n354
  n328 -->|Depends on| n343
  n328 -->|Depends on| n210
  n328 -->|Depends on| n211
  n329 -->|Defined by| n354
  n329 -->|Read in| n214
  n329 -->|Depends on| n354
  n329 -->|Depends on| n343
  n329 -->|Depends on| n210
  n329 -->|Depends on| n211
  n329 -->|Depends on| n347
  n330 -->|Defined by| n354
  n330 -->|Read in| n214
  n330 -->|Depends on| n354
  n330 -->|Depends on| n343
  n330 -->|Depends on| n210
  n330 -->|Depends on| n211
  n331 -->|Defined by| n354
  n331 -->|Read in| n214
  n331 -->|Depends on| n354
  n331 -->|Depends on| n276
  n331 -->|Depends on| n1
  n331 -->|Depends on| n210
  n331 -->|Depends on| n211
  n331 -->|Depends on| n223
  n331 -->|Depends on| n220
  n332 -->|Read in| n214
  n332 -->|Depends on| n215
  n333 -->|Defined by| n354
  n333 -->|Read in| n214
  n333 -->|Depends on| n354
  n333 -->|Depends on| n7
  n333 -->|Depends on| n210
  n333 -->|Depends on| n211
  n333 -->|Depends on| n223
  n333 -->|Depends on| n205
  n335 -->|Defined by| n354
  n335 -->|Read in| n214
  n335 -->|Depends on| n354
  n335 -->|Depends on| n343
  n335 -->|Depends on| n210
  n335 -->|Depends on| n211
  n335 -->|Depends on| n325
  n335 -->|Depends on| n329
  n336 -->|Defined by| n354
  n336 -->|Read in| n204
  n336 -->|Depends on| n354
  n336 -->|Depends on| n218
  n336 -->|Depends on| n217
  n337 -->|Uses the variables of| n9
  n337 -->|Uses the variables of| n12
  n337 -->|Uses the variables of| n6
  n337 -->|Styles| n340
  n338 -->|Defined by| n354
  n338 -->|Read in| n214
  n338 -->|Depends on| n354
  n338 -->|Depends on| n343
  n338 -->|Depends on| n211
  n340 -->|Serves| n443
  n340 -->|Depends on| n341
  n340 -->|Depends on| n350
  n340 -->|Depends on| n7
  n340 -->|Depends on| n13
  n340 -->|Depends on| n4
  n340 -->|Depends on| n9
  n340 -->|Depends on| n8
  n340 -->|Depends on| n12
  n340 -->|Depends on| n5
  n340 -->|Depends on| n10
  n340 -->|Depends on| n3
  n340 -->|Depends on| n6
  n340 -->|Depends on| n45
  n340 -->|Depends on| n21
  n340 -->|Depends on| n16
  n340 -->|Depends on| n19
  n340 -->|Depends on| n348
  n340 -->|Depends on| n353
  n340 -->|Depends on| n351
  n340 -->|Depends on| n336
  n340 -->|Depends on| n332
  n340 -->|Depends on| n344
  n340 -->|Depends on| n342
  n340 -->|Depends on| n203
  n340 -->|Depends on| n202
  n340 -->|Depends on| n303
  n340 -->|Depends on| n300
  n340 -->|Depends on| n661
  n340 -->|Depends on| n214
  n340 -->|Depends on| n204
  n342 -->|Defined by| n354
  n342 -->|Read in| n214
  n342 -->|Depends on| n354
  n342 -->|Depends on| n207
  n342 -->|Depends on| n215
  n342 -->|Depends on| n212
  n342 -->|Depends on| n211
  n344 -->|Defined by| n354
  n344 -->|Read in| n214
  n344 -->|Depends on| n354
  n344 -->|Depends on| n221
  n344 -->|Depends on| n216
  n344 -->|Depends on| n694
  n344 -->|Depends on| n683
  n345 -->|Uses the variables of| n7
  n345 -->|Uses the variables of| n13
  n345 -->|Uses the variables of| n9
  n345 -->|Uses the variables of| n8
  n345 -->|Uses the variables of| n12
  n345 -->|Uses the variables of| n5
  n345 -->|Uses the variables of| n10
  n345 -->|Uses the variables of| n3
  n345 -->|Uses the variables of| n6
  n345 -->|Styles| n340
  n347 -->|Defined by| n354
  n347 -->|Read in| n214
  n347 -->|Depends on| n354
  n347 -->|Depends on| n346
  n347 -->|Depends on| n343
  n347 -->|Depends on| n210
  n347 -->|Depends on| n211
  n348 -->|Defined by| n354
  n348 -->|Read in| n214
  n348 -->|Depends on| n354
  n348 -->|Depends on| n210
  n348 -->|Depends on| n349
  n348 -->|Depends on| n335
  n348 -->|Depends on| n331
  n349 -->|Defined by| n354
  n349 -->|Read in| n214
  n349 -->|Depends on| n354
  n349 -->|Depends on| n210
  n349 -->|Depends on| n326
  n349 -->|Depends on| n327
  n349 -->|Depends on| n328
  n349 -->|Depends on| n338
  n349 -->|Depends on| n330
  n351 -->|Defined by| n354
  n351 -->|Read in| n204
  n351 -->|Depends on| n354
  n351 -->|Depends on| n203
  n351 -->|Depends on| n202
  n351 -->|Depends on| n205
  n351 -->|Depends on| n201
  n352 -->|Serves| n450
  n352 -->|Applied by| n345
  n352 -->|Applied by| n337
  n352 -->|Applied by| n353
  n352 -->|Applied by| n336
  n352 -->|Applied by| n340
  n353 -->|Defined by| n354
  n353 -->|Read in| n204
  n353 -->|Depends on| n354
  n353 -->|Depends on| n203
  n353 -->|Depends on| n218
  n353 -->|Depends on| n217
  n353 -->|Depends on| n200
  n353 -->|Depends on| n219
  n353 -->|Depends on| n206
  n353 -->|Depends on| n202
  n355 -->|Chooses| n368
  n355 -->|In| n30
  n355 -->|In| n52
  n355 -->|Serves| n444
  n356 -->|Chooses| n395
  n356 -->|In| n30
  n356 -->|In| n52
  n356 -->|Serves| n444
  n357 -->|Implements| n21
  n358 -->|Implements| n22
  n359 -->|Implements| n23
  n361 -->|Chooses| n406
  n361 -->|Chooses| n394
  n361 -->|In| n30
  n361 -->|In| n52
  n361 -->|Serves| n444
  n362 -->|Implements| n16
  n362 -->|Uses| n312
  n363 -->|Chooses| n362
  n363 -->|In| n30
  n363 -->|In| n52
  n363 -->|Serves| n444
  n364 -->|Implements| n41
  n364 -->|Implements| n43
  n364 -->|Implements| n42
  n364 -->|Depends on| n365
  n364 -->|Depends on| n39
  n364 -->|Depends on| n147
  n364 -->|Depends on| n305
  n366 -->|Chooses| n373
  n366 -->|Chooses| n388
  n366 -->|In| n52
  n366 -->|Serves| n444
  n367 -->|Chooses| n376
  n367 -->|Chooses| n402
  n367 -->|Chooses| n389
  n367 -->|Chooses| n364
  n367 -->|Chooses| n374
  n367 -->|In| n52
  n367 -->|Serves| n444
  n368 -->|Implements| n14
  n368 -->|Depends on| n21
  n368 -->|Depends on| n23
  n368 -->|Depends on| n709
  n368 -->|Depends on| n689
  n368 -->|Depends on| n690
  n368 -->|Depends on| n687
  n368 -->|Depends on| n686
  n368 -->|Depends on| n698
  n368 -->|Depends on| n704
  n368 -->|Depends on| n706
  n368 -->|Depends on| n692
  n368 -->|Depends on| n696
  n370 -->|Depends on| n22
  n370 -->|Depends on| n23
  n370 -->|Depends on| n21
  n370 -->|Depends on| n39
  n371 -->|Depends on| n22
  n371 -->|Depends on| n23
  n371 -->|Depends on| n21
  n371 -->|Depends on| n39
  n371 -->|Depends on| n372
  n371 -->|Depends on| n142
  n373 -->|Implements| n21
  n373 -->|Implements| n23
  n373 -->|Implements| n22
  n373 -->|Implements| n56
  n373 -->|Depends on| n39
  n373 -->|Depends on| n375
  n373 -->|Depends on| n305
  n374 -->|Implements| n26
  n374 -->|Implements| n47
  n374 -->|Depends on| n305
  n376 -->|Implements| n50
  n376 -->|Implements| n51
  n376 -->|Depends on| n369
  n376 -->|Depends on| n305
  n377 -->|Implements| n18
  n377 -->|Depends on| n50
  n377 -->|Depends on| n147
  n377 -->|Depends on| n305
  n378 -->|Implements| n19
  n378 -->|Depends on| n339
  n379 -->|Implements| n25
  n380 -->|Implements| n26
  n381 -->|Chooses| n357
  n381 -->|Chooses| n359
  n381 -->|Chooses| n358
  n381 -->|Chooses| n384
  n381 -->|Chooses| n385
  n381 -->|Chooses| n386
  n381 -->|Chooses| n403
  n381 -->|Chooses| n391
  n381 -->|Chooses| n390
  n381 -->|Chooses| n380
  n381 -->|In| n30
  n381 -->|Serves| n444
  n382 -->|Implements| n39
  n383 -->|Chooses| n382
  n383 -->|Chooses| n379
  n383 -->|Chooses| n378
  n383 -->|Chooses| n387
  n383 -->|Chooses| n377
  n383 -->|Chooses| n396
  n383 -->|In| n30
  n383 -->|In| n52
  n383 -->|Serves| n444
  n384 -->|Implements| n41
  n384 -->|Depends on| n410
  n385 -->|Implements| n43
  n385 -->|Depends on| n410
  n386 -->|Implements| n50
  n386 -->|Depends on| n305
  n387 -->|Implements| n53
  n388 -->|Implements| n33
  n388 -->|Depends on| n23
  n388 -->|Depends on| n39
  n388 -->|Depends on| n142
  n388 -->|Depends on| n316
  n389 -->|Implements| n34
  n390 -->|Implements| n33
  n391 -->|Implements| n34
  n391 -->|Depends on| n156
  n392 -->|Depends on| n370
  n392 -->|Depends on| n371
  n393 -->|Chooses| n392
  n393 -->|In| n30
  n393 -->|In| n52
  n393 -->|Serves| n444
  n394 -->|Implements| n45
  n394 -->|Depends on| n360
  n394 -->|Depends on| n142
  n394 -->|Depends on| n194
  n394 -->|Depends on| n707
  n395 -->|Implements| n55
  n395 -->|Uses| n322
  n395 -->|Uses| n315
  n396 -->|Implements| n27
  n397 -->|Chooses| n184
  n397 -->|In| n30
  n397 -->|In| n52
  n397 -->|Serves| n444
  n398 -->|Implements| n46
  n399 -->|Chooses| n398
  n399 -->|In| n52
  n399 -->|Serves| n444
  n400 -->|Chooses| n401
  n400 -->|In| n30
  n400 -->|Serves| n444
  n401 -->|Implements| n46
  n401 -->|Depends on| n142
  n401 -->|Depends on| n360
  n401 -->|Depends on| n169
  n401 -->|Depends on| n175
  n402 -->|Implements| n17
  n402 -->|Depends on| n404
  n402 -->|Depends on| n405
  n403 -->|Implements| n17
  n403 -->|Depends on| n148
  n406 -->|Implements| n40
  n406 -->|Depends on| n360
  n407 -->|Chooses| n411
  n407 -->|In| n30
  n407 -->|In| n52
  n407 -->|Serves| n444
  n408 -->|Implements| n31
  n408 -->|Uses| n320
  n408 -->|Depends on| n40
  n408 -->|Depends on| n141
  n408 -->|Depends on| n707
  n409 -->|Chooses| n408
  n409 -->|In| n30
  n409 -->|In| n52
  n409 -->|Serves| n444
  n411 -->|Implements| n49
  n411 -->|Uses| n324
  n411 -->|Depends on| n305
  n412 -->|Serves| n443
  n412 -->|Applied by| n163
  n412 -->|Applied by| n118
  n413 -->|Serves| n450
  n413 -->|Applied by| n163
  n413 -->|Applied by| n176
  n414 -->|Serves| n450
  n414 -->|Applied by| n171
  n414 -->|Applied by| n173
  n415 -->|Serves| n443
  n415 -->|Applied by| n112
  n415 -->|Applied by| n151
  n416 -->|Serves| n443
  n416 -->|Applied by| n54
  n416 -->|Applied by| n44
  n416 -->|Applied by| n32
  n416 -->|Applied by| n29
  n417 -->|Serves| n450
  n417 -->|Applied by| n163
  n417 -->|Applied by| n661
  n418 -->|Serves| n443
  n418 -->|Applied by| n104
  n418 -->|Applied by| n192
  n418 -->|Applied by| n592
  n418 -->|Applied by| n598
  n419 -->|Serves| n443
  n419 -->|Applied by| n187
  n419 -->|Applied by| n55
  n419 -->|Applied by| n707
  n419 -->|Applied by| n137
  n420 -->|Serves| n443
  n420 -->|Applied by| n163
  n420 -->|Applied by| n110
  n421 -->|Serves| n450
  n421 -->|Applied by| n178
  n421 -->|Applied by| n121
  n422 -->|Serves| n450
  n422 -->|Applied by| n163
  n422 -->|Applied by| n162
  n422 -->|Applied by| n181
  n422 -->|Applied by| n187
  n422 -->|Applied by| n176
  n423 -->|Serves| n452
  n423 -->|Applied by| n183
  n423 -->|Applied by| n163
  n423 -->|Applied by| n162
  n423 -->|Applied by| n185
  n423 -->|Applied by| n247
  n423 -->|Applied by| n104
  n424 -->|Serves| n452
  n424 -->|Applied by| n183
  n424 -->|Applied by| n176
  n424 -->|Applied by| n134
  n424 -->|Applied by| n125
  n424 -->|Applied by| n250
  n424 -->|Applied by| n249
  n425 -->|Serves| n450
  n425 -->|Applied by| n654
  n425 -->|Applied by| n224
  n425 -->|Applied by| n163
  n425 -->|Applied by| n29
  n425 -->|Applied by| n32
  n426 -->|Serves| n443
  n426 -->|Applied by| n176
  n426 -->|Applied by| n163
  n426 -->|Applied by| n183
  n427 -->|Serves| n450
  n427 -->|Applied by| n163
  n427 -->|Applied by| n661
  n428 -->|Serves| n450
  n428 -->|Applied by| n110
  n428 -->|Applied by| n130
  n428 -->|Applied by| n179
  n428 -->|Applied by| n340
  n428 -->|Applied by| n161
  n429 -->|Serves| n443
  n429 -->|Applied by| n162
  n429 -->|Applied by| n173
  n429 -->|Applied by| n190
  n429 -->|Applied by| n44
  n430 -->|Serves| n452
  n430 -->|Applied by| n183
  n430 -->|Applied by| n134
  n430 -->|Applied by| n392
  n430 -->|Applied by| n104
  n430 -->|Applied by| n176
  n430 -->|Applied by| n118
  n431 -->|Serves| n443
  n431 -->|Applied by| n40
  n431 -->|Applied by| n143
  n431 -->|Applied by| n139
  n431 -->|Applied by| n176
  n432 -->|Serves| n443
  n432 -->|Applied by| n128
  n432 -->|Applied by| n122
  n432 -->|Applied by| n645
  n432 -->|Applied by| n650
  n432 -->|Applied by| n648
  n432 -->|Applied by| n624
  n432 -->|Applied by| n607
  n433 -->|Serves| n444
  n433 -->|Applied by| n383
  n433 -->|Applied by| n381
  n433 -->|Applied by| n367
  n433 -->|Applied by| n363
  n433 -->|Applied by| n407
  n433 -->|Applied by| n409
  n433 -->|Applied by| n356
  n433 -->|Applied by| n361
  n433 -->|Applied by| n566
  n433 -->|Applied by| n567
  n433 -->|Applied by| n586
  n433 -->|Applied by| n585
  n433 -->|Applied by| n578
  n433 -->|Applied by| n577
  n434 -->|Serves| n443
  n434 -->|Applied by| n104
  n434 -->|Applied by| n192
  n434 -->|Applied by| n593
  n434 -->|Applied by| n592
  n434 -->|Applied by| n601
  n435 -->|Serves| n443
  n435 -->|Applied by| n163
  n435 -->|Applied by| n191
  n436 -->|Serves| n443
  n436 -->|Applied by| n176
  n436 -->|Applied by| n601
  n437 -->|Serves| n443
  n437 -->|Applied by| n176
  n437 -->|Applied by| n190
  n437 -->|Applied by| n183
  n438 -->|Serves| n450
  n438 -->|Applied by| n661
  n438 -->|Applied by| n654
  n438 -->|Applied by| n293
  n438 -->|Applied by| n297
  n438 -->|Applied by| n301
  n438 -->|Applied by| n308
  n438 -->|Applied by| n303
  n438 -->|Applied by| n296
  n438 -->|Applied by| n292
  n438 -->|Applied by| n291
  n438 -->|Applied by| n306
  n438 -->|Applied by| n305
  n438 -->|Applied by| n307
  n448 -->|Refines| n443
  n449 -->|Accepts| n448
  n453 -->|Releases| n54
  n454 -->|Releases| n54
  n454 -->|Assembled by| n554
  n455 -->|Releases| n54
  n455 -->|Assembled by| n564
  n456 -->|Releases| n54
  n456 -->|Assembled by| n455
  n457 -->|Releases| n54
  n457 -->|Assembled by| n456
  n458 -->|Releases| n54
  n458 -->|Assembled by| n457
  n459 -->|Releases| n54
  n459 -->|Assembled by| n458
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
  n465 -->|Assembled by| n454
  n466 -->|Releases| n54
  n466 -->|Assembled by| n464
  n467 -->|Releases| n54
  n467 -->|Assembled by| n466
  n468 -->|Releases| n54
  n468 -->|Assembled by| n467
  n469 -->|Releases| n54
  n469 -->|Assembled by| n465
  n470 -->|Releases| n54
  n470 -->|Assembled by| n469
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
  n476 -->|Assembled by| n475
  n477 -->|Releases| n54
  n477 -->|Assembled by| n453
  n478 -->|Releases| n54
  n478 -->|Assembled by| n476
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
  n484 -->|Assembled by| n483
  n485 -->|Releases| n54
  n485 -->|Assembled by| n484
  n486 -->|Releases| n54
  n486 -->|Assembled by| n485
  n487 -->|Releases| n54
  n487 -->|Assembled by| n486
  n488 -->|Releases| n54
  n488 -->|Assembled by| n477
  n489 -->|Releases| n54
  n489 -->|Assembled by| n487
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
  n495 -->|Assembled by| n494
  n496 -->|Releases| n54
  n496 -->|Assembled by| n495
  n497 -->|Releases| n54
  n497 -->|Assembled by| n496
  n498 -->|Releases| n54
  n498 -->|Assembled by| n497
  n499 -->|Releases| n54
  n499 -->|Assembled by| n488
  n500 -->|Releases| n54
  n500 -->|Assembled by| n498
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
  n506 -->|Assembled by| n505
  n507 -->|Releases| n54
  n507 -->|Assembled by| n506
  n508 -->|Releases| n54
  n508 -->|Assembled by| n507
  n509 -->|Releases| n54
  n509 -->|Assembled by| n508
  n510 -->|Releases| n54
  n510 -->|Assembled by| n499
  n511 -->|Releases| n54
  n511 -->|Assembled by| n509
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
  n517 -->|Assembled by| n516
  n518 -->|Releases| n54
  n518 -->|Assembled by| n517
  n519 -->|Releases| n54
  n519 -->|Assembled by| n518
  n520 -->|Releases| n54
  n520 -->|Assembled by| n519
  n521 -->|Releases| n54
  n521 -->|Assembled by| n510
  n522 -->|Releases| n54
  n522 -->|Assembled by| n520
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
  n528 -->|Assembled by| n527
  n529 -->|Releases| n54
  n529 -->|Assembled by| n528
  n530 -->|Releases| n54
  n530 -->|Assembled by| n529
  n531 -->|Releases| n54
  n531 -->|Assembled by| n530
  n532 -->|Releases| n54
  n532 -->|Assembled by| n521
  n533 -->|Releases| n54
  n533 -->|Assembled by| n531
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
  n539 -->|Assembled by| n538
  n540 -->|Releases| n54
  n540 -->|Assembled by| n539
  n541 -->|Releases| n54
  n541 -->|Assembled by| n540
  n542 -->|Releases| n54
  n542 -->|Assembled by| n541
  n543 -->|Releases| n54
  n543 -->|Assembled by| n532
  n544 -->|Releases| n54
  n544 -->|Assembled by| n542
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
  n550 -->|Assembled by| n549
  n551 -->|Releases| n54
  n551 -->|Assembled by| n550
  n552 -->|Releases| n54
  n552 -->|Assembled by| n551
  n553 -->|Releases| n54
  n553 -->|Assembled by| n552
  n554 -->|Releases| n54
  n554 -->|Assembled by| n543
  n555 -->|Releases| n54
  n555 -->|Assembled by| n553
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
  n561 -->|Assembled by| n560
  n562 -->|Releases| n54
  n562 -->|Assembled by| n561
  n563 -->|Releases| n54
  n563 -->|Assembled by| n562
  n564 -->|Releases| n54
  n564 -->|Assembled by| n563
  n565 -->|Serves| n443
  n565 -->|Depends on| n145
  n565 -->|Depends on| n582
  n565 -->|Depends on| n295
  n565 -->|Depends on| n302
  n565 -->|Depends on| n306
  n565 -->|Depends on| n159
  n566 -->|Chooses| n572
  n566 -->|In| n30
  n566 -->|In| n52
  n566 -->|Serves| n444
  n567 -->|Chooses| n574
  n567 -->|In| n30
  n567 -->|In| n52
  n567 -->|Serves| n444
  n569 -->|Serves| n443
  n569 -->|Depends on| n565
  n569 -->|Depends on| n570
  n569 -->|Depends on| n306
  n571 -->|Serves| n443
  n571 -->|Implements| n580
  n571 -->|Depends on| n576
  n571 -->|Depends on| n274
  n571 -->|Depends on| n354
  n571 -->|Depends on| n211
  n571 -->|Depends on| n213
  n571 -->|Depends on| n208
  n571 -->|Depends on| n156
  n571 -->|Depends on| n582
  n571 -->|Depends on| n306
  n572 -->|Serves| n443
  n572 -->|Implements| n570
  n572 -->|Depends on| n568
  n572 -->|Depends on| n158
  n572 -->|Depends on| n156
  n572 -->|Depends on| n256
  n572 -->|Depends on| n263
  n572 -->|Depends on| n265
  n572 -->|Depends on| n255
  n572 -->|Depends on| n257
  n572 -->|Depends on| n261
  n572 -->|Depends on| n268
  n572 -->|Depends on| n258
  n572 -->|Depends on| n264
  n572 -->|Depends on| n266
  n572 -->|Depends on| n270
  n572 -->|Depends on| n269
  n572 -->|Depends on| n252
  n572 -->|Depends on| n260
  n572 -->|Depends on| n306
  n573 -->|Serves| n443
  n573 -->|Applied by| n569
  n573 -->|Applied by| n587
  n573 -->|Applied by| n579
  n573 -->|Applied by| n565
  n573 -->|Applied by| n44
  n574 -->|Serves| n443
  n574 -->|Implements| n568
  n574 -->|Depends on| n283
  n574 -->|Depends on| n154
  n574 -->|Depends on| n7
  n574 -->|Depends on| n267
  n574 -->|Depends on| n278
  n574 -->|Depends on| n286
  n574 -->|Depends on| n290
  n574 -->|Depends on| n285
  n574 -->|Depends on| n277
  n574 -->|Depends on| n288
  n574 -->|Depends on| n279
  n574 -->|Depends on| n281
  n574 -->|Depends on| n282
  n574 -->|Depends on| n287
  n574 -->|Depends on| n295
  n574 -->|Depends on| n306
  n575 -->|Serves| n444
  n575 -->|Applied by| n569
  n575 -->|Applied by| n587
  n575 -->|Applied by| n579
  n575 -->|Applied by| n566
  n575 -->|Applied by| n567
  n575 -->|Applied by| n586
  n575 -->|Applied by| n585
  n575 -->|Applied by| n578
  n575 -->|Applied by| n577
  n577 -->|Chooses| n583
  n577 -->|In| n30
  n577 -->|In| n52
  n577 -->|Serves| n444
  n578 -->|Chooses| n571
  n578 -->|In| n30
  n578 -->|In| n52
  n578 -->|Serves| n444
  n579 -->|Serves| n443
  n579 -->|Depends on| n565
  n579 -->|Depends on| n580
  n579 -->|Depends on| n306
  n581 -->|Serves| n443
  n581 -->|Implements| n588
  n581 -->|Depends on| n584
  n581 -->|Depends on| n679
  n581 -->|Depends on| n677
  n581 -->|Depends on| n156
  n581 -->|Depends on| n675
  n581 -->|Depends on| n673
  n581 -->|Depends on| n674
  n581 -->|Depends on| n672
  n581 -->|Depends on| n678
  n581 -->|Depends on| n306
  n583 -->|Serves| n443
  n583 -->|Implements| n576
  n583 -->|Depends on| n274
  n583 -->|Depends on| n276
  n583 -->|Depends on| n354
  n583 -->|Depends on| n1
  n583 -->|Depends on| n11
  n583 -->|Depends on| n2
  n583 -->|Depends on| n211
  n583 -->|Depends on| n223
  n583 -->|Depends on| n220
  n583 -->|Depends on| n202
  n583 -->|Depends on| n208
  n583 -->|Depends on| n565
  n583 -->|Depends on| n295
  n583 -->|Depends on| n304
  n583 -->|Depends on| n306
  n583 -->|Depends on| n156
  n585 -->|Chooses| n589
  n585 -->|In| n30
  n585 -->|In| n52
  n585 -->|Serves| n444
  n586 -->|Chooses| n581
  n586 -->|In| n30
  n586 -->|In| n52
  n586 -->|Serves| n444
  n587 -->|Serves| n443
  n587 -->|Depends on| n565
  n587 -->|Depends on| n588
  n587 -->|Depends on| n306
  n589 -->|Serves| n443
  n589 -->|Implements| n584
  n589 -->|Depends on| n565
  n589 -->|Depends on| n677
  n589 -->|Depends on| n156
  n589 -->|Depends on| n675
  n589 -->|Depends on| n673
  n589 -->|Depends on| n680
  n589 -->|Depends on| n676
  n589 -->|Depends on| n295
  n589 -->|Depends on| n306
  n590 -->|Verifies| n163
  n590 -->|Verifies| n191
  n590 -->|Verifies| n161
  n590 -->|Verifies| n710
  n590 -->|In| n52
  n590 -->|Depends on| n163
  n590 -->|Depends on| n41
  n590 -->|Depends on| n161
  n590 -->|Depends on| n139
  n590 -->|Depends on| n591
  n590 -->|Depends on| n307
  n592 -->|Verifies| n110
  n592 -->|Verifies| n120
  n592 -->|Verifies| n162
  n592 -->|Verifies| n190
  n592 -->|Verifies| n569
  n592 -->|Verifies| n565
  n592 -->|Verifies| n572
  n592 -->|Verifies| n574
  n592 -->|Verifies| n179
  n592 -->|Verifies| n178
  n592 -->|Verifies| n373
  n592 -->|Verifies| n376
  n592 -->|Verifies| n402
  n592 -->|In| n52
  n592 -->|Depends on| n110
  n592 -->|Depends on| n598
  n592 -->|Depends on| n56
  n592 -->|Depends on| n51
  n592 -->|Depends on| n142
  n592 -->|Depends on| n21
  n592 -->|Depends on| n39
  n592 -->|Depends on| n41
  n592 -->|Depends on| n147
  n592 -->|Depends on| n292
  n592 -->|Depends on| n307
  n593 -->|Verifies| n163
  n593 -->|Verifies| n183
  n593 -->|Verifies| n187
  n593 -->|Verifies| n191
  n593 -->|Verifies| n173
  n593 -->|Verifies| n395
  n593 -->|Verifies| n408
  n593 -->|Verifies| n406
  n593 -->|Verifies| n373
  n593 -->|Verifies| n382
  n593 -->|Verifies| n364
  n593 -->|Verifies| n396
  n593 -->|In| n52
  n593 -->|Depends on| n163
  n593 -->|Depends on| n41
  n593 -->|Depends on| n17
  n593 -->|Depends on| n597
  n593 -->|Depends on| n307
  n594 -->|Verifies| n295
  n594 -->|Verifies| n302
  n594 -->|Verifies| n159
  n594 -->|Verifies| n160
  n594 -->|Verifies| n156
  n594 -->|Verifies| n323
  n594 -->|In| n52
  n594 -->|Depends on| n295
  n594 -->|Depends on| n302
  n594 -->|Depends on| n159
  n594 -->|Depends on| n160
  n594 -->|Depends on| n156
  n594 -->|Depends on| n300
  n594 -->|Depends on| n323
  n594 -->|Depends on| n595
  n594 -->|Depends on| n307
  n596 -->|Verifies| n164
  n596 -->|Verifies| n172
  n596 -->|Verifies| n171
  n596 -->|Verifies| n185
  n596 -->|Verifies| n182
  n596 -->|In| n52
  n596 -->|Depends on| n164
  n596 -->|Depends on| n172
  n596 -->|Depends on| n171
  n596 -->|Depends on| n185
  n596 -->|Depends on| n182
  n596 -->|Depends on| n602
  n596 -->|Depends on| n307
  n600 -->|Verifies| n174
  n600 -->|In| n52
  n600 -->|Depends on| n174
  n600 -->|Depends on| n599
  n600 -->|Depends on| n307
  n601 -->|Verifies| n176
  n601 -->|In| n52
  n601 -->|Depends on| n176
  n601 -->|Depends on| n163
  n601 -->|Depends on| n41
  n601 -->|Depends on| n17
  n601 -->|Depends on| n307
  n603 -->|Serves| n443
  n603 -->|Part of| n642
  n603 -->|Depends on| n641
  n603 -->|Depends on| n621
  n603 -->|Depends on| n637
  n604 -->|Serves| n443
  n605 -->|Serves| n443
  n606 -->|Serves| n443
  n607 -->|Checks| n610
  n607 -->|Run by| n131
  n607 -->|Signed by| n622
  n608 -->|Checks| n610
  n608 -->|Run by| n114
  n608 -->|Signed by| n622
  n608 -->|Verifies| n357
  n608 -->|Verifies| n359
  n608 -->|Verifies| n358
  n608 -->|Verifies| n384
  n608 -->|Verifies| n385
  n608 -->|Verifies| n386
  n608 -->|Verifies| n403
  n608 -->|Verifies| n391
  n608 -->|Verifies| n390
  n608 -->|Verifies| n380
  n608 -->|Verifies| n401
  n609 -->|Serves| n443
  n610 -->|Produced by| n54
  n611 -->|Serves| n443
  n612 -->|Serves| n443
  n613 -->|Its obligations| n612
  n613 -->|Its obligations| n620
  n613 -->|Its obligations| n604
  n613 -->|Its obligations| n606
  n613 -->|Its obligations| n605
  n613 -->|Its obligations| n611
  n613 -->|Its obligations| n609
  n614 -->|Produced by| n117
  n614 -->|Carries| n36
  n616 -->|Checks| n614
  n616 -->|Run by| n626
  n616 -->|Signed by| n622
  n616 -->|Verifies| n63
  n616 -->|Verifies| n62
  n616 -->|Verifies| n61
  n616 -->|Verifies| n60
  n616 -->|Verifies| n59
  n616 -->|Verifies| n57
  n616 -->|Verifies| n58
  n618 -->|Serves| n443
  n618 -->|Depends on| n343
  n618 -->|Depends on| n274
  n618 -->|Depends on| n200
  n619 -->|Ships| n640
  n619 -->|Programs assembled for| n30
  n619 -->|Follows the policy| n623
  n620 -->|Serves| n443
  n623 -->|Its obligations| n612
  n623 -->|Its obligations| n605
  n624 -->|Ships| n610
  n624 -->|Ships| n627
  n624 -->|Ships| n614
  n624 -->|Deployed by| n104
  n624 -->|Programs assembled for| n30
  n624 -->|Follows the policy| n613
  n625 -->|Verifies| n626
  n625 -->|Verifies| n618
  n625 -->|In| n52
  n625 -->|Depends on| n626
  n625 -->|Depends on| n614
  n625 -->|Depends on| n618
  n625 -->|Depends on| n637
  n625 -->|Depends on| n617
  n625 -->|Depends on| n307
  n626 -->|Serves| n443
  n626 -->|Part of| n642
  n626 -->|Depends on| n614
  n626 -->|Depends on| n300
  n626 -->|Depends on| n618
  n626 -->|Depends on| n615
  n626 -->|Depends on| n637
  n627 -->|Produced by| n36
  n627 -->|Assembled for| n15
  n629 -->|Runs elsewhere| n619
  n629 -->|Its writer's settings| n628
  n630 -->|Serves| n443
  n630 -->|Part of| n642
  n630 -->|Depends on| n641
  n630 -->|Depends on| n621
  n630 -->|Depends on| n637
  n631 -->|Run by| n630
  n631 -->|Signed by| n622
  n633 -->|Requires| n631
  n633 -->|Deployed by| n603
  n633 -->|Programs assembled for| n30
  n633 -->|Follows the policy| n638
  n634 -->|Ships| n629
  n635 -->|In| n52
  n636 -->|In| n30
  n637 -->|Written in| n300
  n638 -->|Its obligations| n612
  n638 -->|Its obligations| n605
  n638 -->|Its obligations| n609
  n639 -->|Verifies| n630
  n639 -->|Verifies| n603
  n639 -->|In| n52
  n639 -->|Depends on| n630
  n639 -->|Depends on| n603
  n639 -->|Depends on| n641
  n639 -->|Depends on| n621
  n639 -->|Depends on| n632
  n639 -->|Depends on| n637
  n639 -->|Depends on| n307
  n642 -->|Deployed in| n30
  n643 -->|Implements| n48
  n643 -->|Depends on| n25
  n645 -->|Serves| n443
  n645 -->|Depends on| n142
  n645 -->|Depends on| n650
  n645 -->|Depends on| n21
  n645 -->|Depends on| n39
  n645 -->|Depends on| n25
  n645 -->|Depends on| n140
  n645 -->|Depends on| n171
  n645 -->|Depends on| n48
  n646 -->|Chooses| n643
  n646 -->|In| n30
  n646 -->|In| n52
  n646 -->|Serves| n443
  n647 -->|Serves| n443
  n647 -->|Depends on| n147
  n647 -->|Depends on| n183
  n647 -->|Depends on| n142
  n647 -->|Depends on| n195
  n647 -->|Depends on| n21
  n647 -->|Depends on| n39
  n648 -->|Refines| n443
  n649 -->|Accepts| n648
  n654 -->|Serves| n443
  n654 -->|Depends on| n143
  n654 -->|Depends on| n297
  n658 -->|Written in| n300
  n659 -->|Serves| n443
  n659 -->|Applied by| n661
  n659 -->|Applied by| n49
  n660 -->|Serves| n443
  n660 -->|Applied by| n661
  n660 -->|Applied by| n654
  n660 -->|Applied by| n49
  n661 -->|Serves| n443
  n661 -->|Serves| n450
  n661 -->|Depends on| n49
  n661 -->|Depends on| n655
  n661 -->|Depends on| n658
  n661 -->|Depends on| n656
  n661 -->|Depends on| n657
  n661 -->|Depends on| n651
  n661 -->|Depends on| n21
  n661 -->|Depends on| n27
  n661 -->|Depends on| n46
  n661 -->|Depends on| n142
  n661 -->|Depends on| n39
  n661 -->|Depends on| n25
  n662 -->|Defined by| n665
  n662 -->|Read in| n668
  n662 -->|Depends on| n665
  n663 -->|Defined by| n665
  n663 -->|Read in| n668
  n663 -->|Depends on| n665
  n664 -->|Defined by| n665
  n664 -->|Read in| n668
  n664 -->|Depends on| n665
  n664 -->|Depends on| n668
  n666 -->|Defined by| n665
  n666 -->|Read in| n668
  n666 -->|Depends on| n665
  n666 -->|Depends on| n664
  n667 -->|Defined by| n665
  n667 -->|Read in| n668
  n667 -->|Depends on| n665
  n667 -->|Depends on| n669
  n667 -->|Depends on| n664
  n668 -->|Defined by| n665
  n668 -->|Queries written in| n652
  n668 -->|Read by| n661
  n668 -->|Uses| n313
  n670 -->|Serves| n443
  n670 -->|Depends on| n665
  n670 -->|Depends on| n669
  n670 -->|Depends on| n142
  n670 -->|Depends on| n663
  n670 -->|Depends on| n664
  n670 -->|Depends on| n666
  n670 -->|Depends on| n662
  n670 -->|Depends on| n667
  n670 -->|Depends on| n39
  n670 -->|Depends on| n40
  n670 -->|Depends on| n295
  n670 -->|Depends on| n297
  n672 -->|Defined by| n679
  n672 -->|Depends on| n679
  n673 -->|Defined by| n679
  n673 -->|Depends on| n679
  n673 -->|Depends on| n675
  n673 -->|Depends on| n677
  n674 -->|Defined by| n679
  n674 -->|Depends on| n679
  n675 -->|Defined by| n679
  n675 -->|Depends on| n679
  n675 -->|Depends on| n677
  n676 -->|Defined by| n679
  n676 -->|Depends on| n679
  n676 -->|Depends on| n671
  n678 -->|Defined by| n679
  n678 -->|Depends on| n679
  n680 -->|Defined by| n679
  n680 -->|Depends on| n679
  n680 -->|Depends on| n671
  n681 -->|Defined by| n709
  n681 -->|Read in| n707
  n681 -->|Depends on| n709
  n682 -->|Defined by| n709
  n682 -->|Read in| n707
  n682 -->|Depends on| n709
  n683 -->|Defined by| n709
  n683 -->|Read in| n707
  n683 -->|Depends on| n709
  n684 -->|Defined by| n709
  n684 -->|Read in| n707
  n684 -->|Depends on| n709
  n685 -->|Defined by| n709
  n685 -->|Read in| n707
  n685 -->|Depends on| n709
  n686 -->|Defined by| n709
  n686 -->|Read in| n707
  n686 -->|Depends on| n709
  n687 -->|Defined by| n709
  n687 -->|Read in| n707
  n687 -->|Depends on| n709
  n688 -->|Defined by| n709
  n688 -->|Read in| n707
  n688 -->|Depends on| n709
  n688 -->|Depends on| n706
  n689 -->|Defined by| n709
  n689 -->|Read in| n707
  n689 -->|Depends on| n709
  n690 -->|Defined by| n709
  n690 -->|Read in| n707
  n690 -->|Depends on| n709
  n691 -->|Defined by| n709
  n691 -->|Read in| n707
  n691 -->|Depends on| n709
  n692 -->|Defined by| n709
  n692 -->|Read in| n707
  n692 -->|Depends on| n709
  n693 -->|Defined by| n709
  n693 -->|Read in| n707
  n693 -->|Depends on| n709
  n694 -->|Defined by| n709
  n694 -->|Read in| n707
  n694 -->|Depends on| n709
  n695 -->|Defined by| n709
  n695 -->|Read in| n707
  n695 -->|Depends on| n709
  n696 -->|Defined by| n709
  n696 -->|Read in| n707
  n696 -->|Depends on| n709
  n696 -->|Depends on| n706
  n697 -->|Defined by| n709
  n697 -->|Read in| n707
  n697 -->|Depends on| n709
  n698 -->|Defined by| n709
  n698 -->|Read in| n707
  n698 -->|Depends on| n709
  n699 -->|Defined by| n709
  n699 -->|Read in| n707
  n699 -->|Depends on| n709
  n700 -->|Defined by| n709
  n700 -->|Read in| n707
  n700 -->|Depends on| n709
  n701 -->|Defined by| n709
  n701 -->|Read in| n707
  n701 -->|Depends on| n709
  n702 -->|Defined by| n709
  n702 -->|Read in| n707
  n702 -->|Depends on| n709
  n704 -->|Defined by| n709
  n704 -->|Read in| n707
  n704 -->|Depends on| n709
  n704 -->|Depends on| n706
  n705 -->|Defined by| n709
  n705 -->|Read in| n707
  n705 -->|Depends on| n709
  n706 -->|Defined by| n709
  n706 -->|Read in| n707
  n706 -->|Depends on| n709
  n707 -->|Queries written in| n652
  n707 -->|Read by| n661
  n707 -->|Watches the globals| n712
  n707 -->|Uses| n321
  n708 -->|Serves| n443
  n710 -->|Serves| n443
  n710 -->|Depends on| n707
  n710 -->|Depends on| n709
  n710 -->|Depends on| n139
  n710 -->|Depends on| n703
  n710 -->|Depends on| n146
  n710 -->|Depends on| n145
  n710 -->|Depends on| n693
  n710 -->|Depends on| n706
  n710 -->|Depends on| n694
  n710 -->|Depends on| n700
  n710 -->|Depends on| n686
  n710 -->|Depends on| n685
  n710 -->|Depends on| n702
  n710 -->|Depends on| n704
  n710 -->|Depends on| n698
  n710 -->|Depends on| n681
  n710 -->|Depends on| n687
  n710 -->|Depends on| n696
  n710 -->|Depends on| n688
  n710 -->|Depends on| n682
  n710 -->|Depends on| n701
  n710 -->|Depends on| n699
  n710 -->|Depends on| n711
  n710 -->|Depends on| n691
  n710 -->|Depends on| n705
  n710 -->|Depends on| n683
  n710 -->|Depends on| n692
  n710 -->|Depends on| n684
  n710 -->|Depends on| n148
  n710 -->|Depends on| n39
  n710 -->|Depends on| n40
  n710 -->|Depends on| n295
  n710 -->|Depends on| n297
  n711 -->|Defined by| n709
  n711 -->|Read in| n707
  n711 -->|Depends on| n709
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
