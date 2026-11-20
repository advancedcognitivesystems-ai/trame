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
    n174["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n175["Laws<br/><small>Function</small>"]:::held
    n176["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n177["Lock<br/><small>Function</small>"]:::held
    n178["Machine outputs<br/><small>Function</small>"]:::held
    n179["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n180["Payload<br/><small>Function</small>"]:::held
    n181["Positions<br/><small>Function</small>"]:::held
    n182["Project<br/><small>Function</small>"]:::held
    n183["The runs of a project<br/><small>Function</small>"]:::held
    n184["References<br/><small>Function</small>"]:::held
    n185["A shipment's pipeline<br/><small>Function</small>"]:::held
    n186["Static reading<br/><small>Function</small>"]:::held
    n187["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n188["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n189["Views<br/><small>Function</small>"]:::held
    n190["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n191["Accept a candidate<br/><small>Requirement</small>"]:::held
    n192["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n193["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n194["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n195["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n196["Records of the releases<br/><small>Function</small>"]:::held
    n197["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n198["Attribute presence<br/><small>Syntax element</small>"]:::held
    n199["Attribute selector<br/><small>Syntax element</small>"]:::held
    n200["Class selector<br/><small>Syntax element</small>"]:::held
    n201["Declaration<br/><small>Syntax element</small>"]:::held
    n202["Rule<br/><small>Syntax element</small>"]:::held
    n203["CSS style sheets<br/><small>Language</small>"]:::held
    n204["Variable<br/><small>Syntax element</small>"]:::held
    n205["Custom property<br/><small>Syntax element</small>"]:::held
    n206["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n207["Escaped text<br/><small>Syntax element</small>"]:::held
    n208["Attributes<br/><small>Syntax element</small>"]:::held
    n209["Element over several lines<br/><small>Syntax element</small>"]:::held
    n210["HTML element<br/><small>Syntax element</small>"]:::held
    n211["End tag<br/><small>Syntax element</small>"]:::held
    n212["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n213["HTML markup<br/><small>Language</small>"]:::held
    n214["Start tag<br/><small>Syntax element</small>"]:::held
    n215["JSON in a script<br/><small>Syntax element</small>"]:::held
    n216["Media feature<br/><small>Syntax element</small>"]:::held
    n217["Media rule<br/><small>Syntax element</small>"]:::held
    n218["Negation<br/><small>Syntax element</small>"]:::held
    n219["Path data<br/><small>Syntax element</small>"]:::held
    n220["Script<br/><small>Syntax element</small>"]:::held
    n221["Selector list<br/><small>Syntax element</small>"]:::held
    n222["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n223["Drivers<br/><small>Function</small>"]:::held
    n224["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n225["Answers without crashing<br/><small>Requirement</small>"]:::held
    n226["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n227["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n228["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n229["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n230["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n231["Complete declaration<br/><small>Requirement</small>"]:::held
    n232["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n233["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n234["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n235["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n236["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n237["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n238["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n239["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n240["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n241["Same input, same answer<br/><small>Requirement</small>"]:::held
    n242["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n243["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n244["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n245["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n246["What belongs to a library<br/><small>Requirement</small>"]:::held
    n247["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n248["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n249["A release is settled<br/><small>Requirement</small>"]:::held
    n250["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n251["Anchor<br/><small>Syntax element</small>"]:::held
    n252["Backtick string<br/><small>Syntax element</small>"]:::held
    n253["Blank line<br/><small>Syntax element</small>"]:::held
    n254["Block quote<br/><small>Syntax element</small>"]:::held
    n255["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n256["Code block<br/><small>Syntax element</small>"]:::held
    n257["Code span<br/><small>Syntax element</small>"]:::held
    n258["CommonMark<br/><small>Standard</small>"]:::neutral
    n259["Collapsible block<br/><small>Syntax element</small>"]:::held
    n260["Emphasis<br/><small>Syntax element</small>"]:::held
    n261["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n262["Heading<br/><small>Syntax element</small>"]:::held
    n263["Link<br/><small>Syntax element</small>"]:::held
    n264["List item<br/><small>Syntax element</small>"]:::held
    n265["Relative reference<br/><small>Syntax element</small>"]:::held
    n266["Small text<br/><small>Syntax element</small>"]:::held
    n267["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n268["Table<br/><small>Syntax element</small>"]:::held
    n269["Table cell<br/><small>Syntax element</small>"]:::held
    n270["Delimiter row<br/><small>Syntax element</small>"]:::held
    n271["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n272["Around the documents<br/><small>Decision</small>"]:::neutral
    n273["Documents in the page<br/><small>Decision</small>"]:::neutral
    n274["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n275["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n276["Class definition<br/><small>Syntax element</small>"]:::held
    n277["Flowchart<br/><small>Syntax element</small>"]:::held
    n278["Gantt chart<br/><small>Syntax element</small>"]:::held
    n279["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n280["Section<br/><small>Syntax element</small>"]:::held
    n281["Task<br/><small>Syntax element</small>"]:::held
    n282["Mermaid<br/><small>Standard</small>"]:::neutral
    n283["Label<br/><small>Syntax element</small>"]:::held
    n284["Link<br/><small>Syntax element</small>"]:::held
    n285["Node<br/><small>Syntax element</small>"]:::held
    n286["Milestone<br/><small>Syntax element</small>"]:::held
    n287["Node style<br/><small>Syntax element</small>"]:::held
    n288["Style properties<br/><small>Syntax element</small>"]:::held
    n289["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n290["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n291["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n292["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n293["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n294["Dates<br/><small>Function</small>"]:::held
    n295["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n296["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n297["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n298["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n299["Language<br/><small>Decision</small>"]:::neutral
    n300["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n301["Lists<br/><small>Function</small>"]:::held
    n302["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n303["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n304["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n305["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n306["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n307["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n308["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n309["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n310["Grammar of CSS<br/><small>Package</small>"]:::held
    n311["esbuild<br/><small>Package</small>"]:::held
    n312["Grammar of HCL<br/><small>Package</small>"]:::held
    n313["Grammar of HTML<br/><small>Package</small>"]:::held
    n314["Types of Node.js<br/><small>Package</small>"]:::held
    n315["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n316["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n317["The standard library<br/><small>Package</small>"]:::neutral
    n318["tsx<br/><small>Package</small>"]:::held
    n319["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n320["TypeScript<br/><small>Package</small>"]:::held
    n321["Order of versions<br/><small>Function</small>"]:::held
    n322["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n323["Banner<br/><small>Syntax element</small>"]:::held
    n324["Brand<br/><small>Syntax element</small>"]:::held
    n325["State of the compilation<br/><small>Syntax element</small>"]:::held
    n326["Dates<br/><small>Syntax element</small>"]:::held
    n327["Head of the document<br/><small>Syntax element</small>"]:::held
    n328["Document picker<br/><small>Syntax element</small>"]:::held
    n329["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n330["Fonts<br/><small>Syntax element</small>"]:::held
    n331["Logo<br/><small>Syntax element</small>"]:::held
    n332["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n333["Main area<br/><small>Syntax element</small>"]:::held
    n334["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n335["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n336["Navigation<br/><small>Syntax element</small>"]:::held
    n337["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n338["Page<br/><small>Function</small>"]:::held
    n339["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n340["Document of the page<br/><small>Syntax element</small>"]:::held
    n341["Regions of the page<br/><small>Decision</small>"]:::neutral
    n342["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n343["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n344["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n345["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n346["Shell<br/><small>Syntax element</small>"]:::held
    n347["Side bar<br/><small>Syntax element</small>"]:::held
    n348["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n349["Colours of a status<br/><small>Syntax element</small>"]:::held
    n350["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n351["Theme<br/><small>Syntax element</small>"]:::held
    n352["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n353["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n354["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n355["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n356["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n357["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n358["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n359["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n360["esbuild<br/><small>Implementation</small>"]:::held
    n361["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n362["Example process<br/><small>Function</small>"]:::held
    n363["Example project<br/><small>Decision</small>"]:::neutral
    n364["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n365["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n366["Amendments in place<br/><small>Implementation</small>"]:::held
    n367["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n368["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n369["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n370["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n371["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n372["A server in memory<br/><small>Function</small>"]:::held
    n373["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n374["Terminal in memory<br/><small>Function</small>"]:::held
    n375["Command line<br/><small>Implementation</small>"]:::held
    n376["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n377["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n378["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n379["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n380["Node paths<br/><small>Implementation</small>"]:::held
    n381["NodePlatform<br/><small>Technical choice</small>"]:::held
    n382["Node process<br/><small>Implementation</small>"]:::unknown
    n383["Node programs<br/><small>Implementation</small>"]:::unknown
    n384["Node terminal<br/><small>Implementation</small>"]:::unknown
    n385["Node timer<br/><small>Implementation</small>"]:::held
    n386["No installer in test<br/><small>Implementation</small>"]:::held
    n387["No registry in test<br/><small>Function</small>"]:::held
    n388["npm installs<br/><small>Implementation</small>"]:::unknown
    n389["npm's reports<br/><small>Implementation</small>"]:::unknown
    n390["Packages by their origin<br/><small>Implementation</small>"]:::held
    n391["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n392["Page resources<br/><small>Implementation</small>"]:::held
    n393["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n394["Results kept in the process<br/><small>Implementation</small>"]:::held
    n395["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n396["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n397["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n398["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n399["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n400["Stopped clock<br/><small>Function</small>"]:::held
    n401["System clock<br/><small>Implementation</small>"]:::unknown
    n402["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n403["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n404["Trame's prelude<br/><small>Implementation</small>"]:::held
    n405["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n406["tsx loader<br/><small>Implementation</small>"]:::held
    n407["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n408["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n409["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n410["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n411["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n412["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n413["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n414["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n415["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n416["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n417["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n418["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n419["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n420["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n421["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n422["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n423["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n424["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n425["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n426["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n427["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n428["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n429["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n430["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n431["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n432["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n433["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n434["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n435["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n436["Candidate dates<br/><small>Decision</small>"]:::neutral
    n437["Claim sets<br/><small>Decision</small>"]:::neutral
    n438["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n439["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n440["A specification that runs<br/><small>Goal</small>"]:::neutral
    n441["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n442["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n443["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n444["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n445["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n446["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n447["A single source of truth<br/><small>Goal</small>"]:::neutral
    n448["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n449["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n450["Generation 1<br/><small>Release</small>"]:::neutral
    n451["Generation 10<br/><small>Release</small>"]:::neutral
    n452["Generation 100<br/><small>Release</small>"]:::neutral
    n453["Generation 101<br/><small>Release</small>"]:::neutral
    n454["Generation 102<br/><small>Release</small>"]:::neutral
    n455["Generation 103<br/><small>Release</small>"]:::neutral
    n456["Generation 104<br/><small>Release</small>"]:::neutral
    n457["Generation 105<br/><small>Release</small>"]:::neutral
    n458["Generation 106<br/><small>Release</small>"]:::neutral
    n459["Generation 107<br/><small>Release</small>"]:::neutral
    n460["Generation 108<br/><small>Release</small>"]:::neutral
    n461["Generation 109<br/><small>Release</small>"]:::neutral
    n462["Generation 11<br/><small>Release</small>"]:::neutral
    n463["Generation 110<br/><small>Release</small>"]:::neutral
    n464["Generation 12<br/><small>Release</small>"]:::neutral
    n465["Generation 13<br/><small>Release</small>"]:::neutral
    n466["Generation 14<br/><small>Release</small>"]:::neutral
    n467["Generation 15<br/><small>Release</small>"]:::neutral
    n468["Generation 16<br/><small>Release</small>"]:::neutral
    n469["Generation 17<br/><small>Release</small>"]:::neutral
    n470["Generation 18<br/><small>Release</small>"]:::neutral
    n471["Generation 19<br/><small>Release</small>"]:::neutral
    n472["Generation 2<br/><small>Release</small>"]:::neutral
    n473["Generation 20<br/><small>Release</small>"]:::neutral
    n474["Generation 21<br/><small>Release</small>"]:::neutral
    n475["Generation 22<br/><small>Release</small>"]:::neutral
    n476["Generation 23<br/><small>Release</small>"]:::neutral
    n477["Generation 24<br/><small>Release</small>"]:::neutral
    n478["Generation 25<br/><small>Release</small>"]:::neutral
    n479["Generation 26<br/><small>Release</small>"]:::neutral
    n480["Generation 27<br/><small>Release</small>"]:::neutral
    n481["Generation 28<br/><small>Release</small>"]:::neutral
    n482["Generation 29<br/><small>Release</small>"]:::neutral
    n483["Generation 3<br/><small>Release</small>"]:::neutral
    n484["Generation 30<br/><small>Release</small>"]:::neutral
    n485["Generation 31<br/><small>Release</small>"]:::neutral
    n486["Generation 32<br/><small>Release</small>"]:::neutral
    n487["Generation 33<br/><small>Release</small>"]:::neutral
    n488["Generation 34<br/><small>Release</small>"]:::neutral
    n489["Generation 35<br/><small>Release</small>"]:::neutral
    n490["Generation 36<br/><small>Release</small>"]:::neutral
    n491["Generation 37<br/><small>Release</small>"]:::neutral
    n492["Generation 38<br/><small>Release</small>"]:::neutral
    n493["Generation 39<br/><small>Release</small>"]:::neutral
    n494["Generation 4<br/><small>Release</small>"]:::neutral
    n495["Generation 40<br/><small>Release</small>"]:::neutral
    n496["Generation 41<br/><small>Release</small>"]:::neutral
    n497["Generation 42<br/><small>Release</small>"]:::neutral
    n498["Generation 43<br/><small>Release</small>"]:::neutral
    n499["Generation 44<br/><small>Release</small>"]:::neutral
    n500["Generation 45<br/><small>Release</small>"]:::neutral
    n501["Generation 46<br/><small>Release</small>"]:::neutral
    n502["Generation 47<br/><small>Release</small>"]:::neutral
    n503["Generation 48<br/><small>Release</small>"]:::neutral
    n504["Generation 49<br/><small>Release</small>"]:::neutral
    n505["Generation 5<br/><small>Release</small>"]:::neutral
    n506["Generation 50<br/><small>Release</small>"]:::neutral
    n507["Generation 51<br/><small>Release</small>"]:::neutral
    n508["Generation 52<br/><small>Release</small>"]:::neutral
    n509["Generation 53<br/><small>Release</small>"]:::neutral
    n510["Generation 54<br/><small>Release</small>"]:::neutral
    n511["Generation 55<br/><small>Release</small>"]:::neutral
    n512["Generation 56<br/><small>Release</small>"]:::neutral
    n513["Generation 57<br/><small>Release</small>"]:::neutral
    n514["Generation 58<br/><small>Release</small>"]:::neutral
    n515["Generation 59<br/><small>Release</small>"]:::neutral
    n516["Generation 6<br/><small>Release</small>"]:::neutral
    n517["Generation 60<br/><small>Release</small>"]:::neutral
    n518["Generation 61<br/><small>Release</small>"]:::neutral
    n519["Generation 62<br/><small>Release</small>"]:::neutral
    n520["Generation 63<br/><small>Release</small>"]:::neutral
    n521["Generation 64<br/><small>Release</small>"]:::neutral
    n522["Generation 65<br/><small>Release</small>"]:::neutral
    n523["Generation 66<br/><small>Release</small>"]:::neutral
    n524["Generation 67<br/><small>Release</small>"]:::neutral
    n525["Generation 68<br/><small>Release</small>"]:::neutral
    n526["Generation 69<br/><small>Release</small>"]:::neutral
    n527["Generation 7<br/><small>Release</small>"]:::neutral
    n528["Generation 70<br/><small>Release</small>"]:::neutral
    n529["Generation 71<br/><small>Release</small>"]:::neutral
    n530["Generation 72<br/><small>Release</small>"]:::neutral
    n531["Generation 73<br/><small>Release</small>"]:::neutral
    n532["Generation 74<br/><small>Release</small>"]:::neutral
    n533["Generation 75<br/><small>Release</small>"]:::neutral
    n534["Generation 76<br/><small>Release</small>"]:::neutral
    n535["Generation 77<br/><small>Release</small>"]:::neutral
    n536["Generation 78<br/><small>Release</small>"]:::neutral
    n537["Generation 79<br/><small>Release</small>"]:::neutral
    n538["Generation 8<br/><small>Release</small>"]:::neutral
    n539["Generation 80<br/><small>Release</small>"]:::neutral
    n540["Generation 81<br/><small>Release</small>"]:::neutral
    n541["Generation 82<br/><small>Release</small>"]:::neutral
    n542["Generation 83<br/><small>Release</small>"]:::neutral
    n543["Generation 84<br/><small>Release</small>"]:::neutral
    n544["Generation 85<br/><small>Release</small>"]:::neutral
    n545["Generation 86<br/><small>Release</small>"]:::neutral
    n546["Generation 87<br/><small>Release</small>"]:::neutral
    n547["Generation 88<br/><small>Release</small>"]:::neutral
    n548["Generation 89<br/><small>Release</small>"]:::neutral
    n549["Generation 9<br/><small>Release</small>"]:::neutral
    n550["Generation 90<br/><small>Release</small>"]:::neutral
    n551["Generation 91<br/><small>Release</small>"]:::neutral
    n552["Generation 92<br/><small>Release</small>"]:::neutral
    n553["Generation 93<br/><small>Release</small>"]:::neutral
    n554["Generation 94<br/><small>Release</small>"]:::neutral
    n555["Generation 95<br/><small>Release</small>"]:::neutral
    n556["Generation 96<br/><small>Release</small>"]:::neutral
    n557["Generation 97<br/><small>Release</small>"]:::neutral
    n558["Generation 98<br/><small>Release</small>"]:::neutral
    n559["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n560["Common rendering<br/><small>Function</small>"]:::held
    n561["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n562["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n563["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n564["Rendering of the files<br/><small>Function</small>"]:::held
    n565["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n566["HTML writer<br/><small>Function</small>"]:::held
    n567["Markdown writer<br/><small>Function</small>"]:::held
    n568["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n569["Mermaid diagrams<br/><small>Function</small>"]:::held
    n570["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n571["Figures of the page<br/><small>Port</small>"]:::neutral
    n572["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n573["The page in HTML<br/><small>Technical choice</small>"]:::held
    n574["Rendering in the page<br/><small>Function</small>"]:::held
    n575["Syntax of the page<br/><small>Port</small>"]:::neutral
    n576["Plain text writer<br/><small>Function</small>"]:::held
    n577["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n578["Figures in SVG<br/><small>Function</small>"]:::held
    n579["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n580["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n581["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n582["Rendering in the terminal<br/><small>Function</small>"]:::held
    n583["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n584["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n585["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n586["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n587["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n588["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n589["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n590["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n591["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n592["Shape of the example<br/><small>Decision</small>"]:::neutral
    n593["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n594["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n595["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n596["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n597["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n598["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n599["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n600["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n601["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n602["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n603["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n604["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n605["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n606["How a generation is made<br/><small>Policy</small>"]:::neutral
    n607["The graph page<br/><small>Artefact</small>"]:::unknown
    n608["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n609["The graph page opens<br/><small>Check</small>"]:::unknown
    n610["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n611["What the graph page is asked<br/><small>Function</small>"]:::held
    n612["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n613["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n614["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n615["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n616["How a change merges<br/><small>Policy</small>"]:::neutral
    n617["The next generation<br/><small>Shipment</small>"]:::unknown
    n618["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n619["Open the graph page<br/><small>Entry point</small>"]:::held
    n620["The page's program<br/><small>Artefact</small>"]:::unknown
    n621["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n622["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n623["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n624["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n625["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n626["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n627["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n628["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n629["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n630["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n631["How the repository is set<br/><small>Policy</small>"]:::neutral
    n632["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n633["The engine<br/><small>Artefact</small>"]:::unknown
    n634["Trame's repository<br/><small>Decision</small>"]:::neutral
    n635["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n636["Attribution<br/><small>Function</small>"]:::held
    n637["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n638["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n639["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n640["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n641["Ship only what holds<br/><small>Requirement</small>"]:::held
    n642["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n643["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n644["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n645["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n646["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n647["Checks of a body<br/><small>Function</small>"]:::held
    n648["Captures<br/><small>Standard</small>"]:::neutral
    n649["Categories of literals<br/><small>Decision</small>"]:::neutral
    n650["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n651["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n652["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n653["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n654["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n655["Attribute<br/><small>Syntax element</small>"]:::held
    n656["Comment<br/><small>Syntax element</small>"]:::held
    n657["Text<br/><small>Syntax element</small>"]:::held
    n658["HCL<br/><small>Standard</small>"]:::neutral
    n659["Value<br/><small>Syntax element</small>"]:::held
    n660["Module call<br/><small>Syntax element</small>"]:::held
    n661["Terraform<br/><small>Language</small>"]:::held
    n662["Terraform modules<br/><small>Standard</small>"]:::neutral
    n663["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n664["Box drawing<br/><small>Standard</small>"]:::neutral
    n665["Code lines<br/><small>Syntax element</small>"]:::held
    n666["Columns<br/><small>Syntax element</small>"]:::held
    n667["Item line<br/><small>Syntax element</small>"]:::held
    n668["Padded cell<br/><small>Syntax element</small>"]:::held
    n669["Path step<br/><small>Syntax element</small>"]:::held
    n670["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n671["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n672["Terminal text<br/><small>Decision</small>"]:::neutral
    n673["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n674["List on several lines<br/><small>Syntax element</small>"]:::held
    n675["Type assertion<br/><small>Syntax element</small>"]:::held
    n676["Assignment<br/><small>Syntax element</small>"]:::held
    n677["Async function of a block<br/><small>Syntax element</small>"]:::held
    n678["Waiting<br/><small>Syntax element</small>"]:::held
    n679["Call<br/><small>Syntax element</small>"]:::held
    n680["Constant<br/><small>Syntax element</small>"]:::held
    n681["Default import<br/><small>Syntax element</small>"]:::held
    n682["Documentation comment<br/><small>Syntax element</small>"]:::held
    n683["Export<br/><small>Syntax element</small>"]:::held
    n684["Condition<br/><small>Syntax element</small>"]:::held
    n685["List on one line<br/><small>Syntax element</small>"]:::held
    n686["Comment<br/><small>Syntax element</small>"]:::held
    n687["Property access<br/><small>Syntax element</small>"]:::held
    n688["Title of a module<br/><small>Syntax element</small>"]:::held
    n689["Import of names<br/><small>Syntax element</small>"]:::held
    n690["Object on several lines<br/><small>Syntax element</small>"]:::held
    n691["Object<br/><small>Syntax element</small>"]:::held
    n692["Object type<br/><small>Syntax element</small>"]:::held
    n693["Optional property access<br/><small>Syntax element</small>"]:::held
    n694["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n695["Group<br/><small>Syntax element</small>"]:::held
    n696["Names of a program<br/><small>Decision</small>"]:::neutral
    n697["Property<br/><small>Syntax element</small>"]:::held
    n698["Strict inequality<br/><small>Syntax element</small>"]:::held
    n699["Text<br/><small>Syntax element</small>"]:::held
    n700["TypeScript<br/><small>Language</small>"]:::held
    n701["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n702["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n703["TypeScript writer<br/><small>Function</small>"]:::held
    n704["Union type<br/><small>Syntax element</small>"]:::held
    n705["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n352
  n57 -->|Depends on| n167
  n58 -->|Implements| n20
  n58 -->|Depends on| n337
  n59 -->|Implements| n24
  n59 -->|Depends on| n352
  n59 -->|Depends on| n167
  n60 -->|Implements| n37
  n60 -->|Depends on| n352
  n61 -->|Implements| n38
  n61 -->|Depends on| n216
  n62 -->|Serves| n440
  n62 -->|Depends on| n352
  n62 -->|Depends on| n273
  n62 -->|Depends on| n275
  n62 -->|Depends on| n274
  n62 -->|Depends on| n0
  n62 -->|Depends on| n210
  n62 -->|Depends on| n214
  n62 -->|Depends on| n222
  n62 -->|Depends on| n219
  n62 -->|Depends on| n201
  n62 -->|Depends on| n207
  n62 -->|Depends on| n560
  n62 -->|Depends on| n303
  n62 -->|Depends on| n305
  n62 -->|Depends on| n156
  n63 -->|Serves| n440
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n560
  n63 -->|Depends on| n352
  n63 -->|Depends on| n341
  n63 -->|Depends on| n344
  n63 -->|Depends on| n332
  n63 -->|Depends on| n273
  n63 -->|Depends on| n272
  n63 -->|Depends on| n274
  n63 -->|Depends on| n0
  n63 -->|Depends on| n138
  n63 -->|Depends on| n577
  n63 -->|Depends on| n156
  n63 -->|Depends on| n299
  n63 -->|Depends on| n210
  n63 -->|Depends on| n207
  n63 -->|Depends on| n199
  n63 -->|Depends on| n198
  n63 -->|Depends on| n221
  n63 -->|Depends on| n200
  n63 -->|Depends on| n303
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n441
  n65 -->|Serves| n440
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
  n66 -->|Depends on| n290
  n66 -->|Depends on| n67
  n66 -->|Depends on| n306
  n70 -->|Verifies| n654
  n70 -->|Verifies| n647
  n70 -->|Verifies| n409
  n70 -->|In| n52
  n70 -->|Depends on| n654
  n70 -->|Depends on| n647
  n70 -->|Depends on| n700
  n70 -->|Depends on| n71
  n70 -->|Depends on| n296
  n70 -->|Depends on| n306
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
  n72 -->|Depends on| n291
  n72 -->|Depends on| n306
  n73 -->|Verifies| n375
  n73 -->|Verifies| n374
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n147
  n73 -->|Depends on| n102
  n73 -->|Depends on| n304
  n73 -->|Depends on| n306
  n74 -->|Verifies| n107
  n74 -->|Verifies| n108
  n74 -->|Verifies| n161
  n74 -->|Verifies| n703
  n74 -->|Verifies| n663
  n74 -->|Verifies| n223
  n74 -->|Verifies| n400
  n74 -->|In| n52
  n74 -->|Depends on| n107
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n147
  n74 -->|Depends on| n142
  n74 -->|Depends on| n69
  n74 -->|Depends on| n139
  n74 -->|Depends on| n291
  n74 -->|Depends on| n306
  n75 -->|Verifies| n127
  n75 -->|In| n52
  n75 -->|Depends on| n127
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n147
  n75 -->|Depends on| n69
  n75 -->|Depends on| n95
  n75 -->|Depends on| n306
  n76 -->|Verifies| n121
  n76 -->|In| n52
  n76 -->|Depends on| n121
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n142
  n76 -->|Depends on| n147
  n76 -->|Depends on| n291
  n76 -->|Depends on| n306
  n77 -->|Verifies| n113
  n77 -->|Verifies| n166
  n77 -->|Verifies| n372
  n77 -->|Verifies| n385
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
  n77 -->|Depends on| n438
  n77 -->|Depends on| n182
  n77 -->|Depends on| n147
  n77 -->|Depends on| n302
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n306
  n79 -->|Verifies| n114
  n79 -->|Verifies| n183
  n79 -->|Verifies| n396
  n79 -->|In| n52
  n79 -->|Depends on| n114
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n115
  n79 -->|Depends on| n147
  n79 -->|Depends on| n291
  n79 -->|Depends on| n306
  n80 -->|Verifies| n163
  n80 -->|Verifies| n182
  n80 -->|In| n52
  n80 -->|Depends on| n163
  n80 -->|Depends on| n42
  n80 -->|Depends on| n41
  n80 -->|Depends on| n17
  n80 -->|Depends on| n96
  n80 -->|Depends on| n91
  n80 -->|Depends on| n638
  n80 -->|Depends on| n23
  n80 -->|Depends on| n306
  n81 -->|Verifies| n131
  n81 -->|In| n52
  n81 -->|Depends on| n131
  n81 -->|Depends on| n163
  n81 -->|Depends on| n189
  n81 -->|Depends on| n41
  n81 -->|Depends on| n51
  n81 -->|Depends on| n147
  n81 -->|Depends on| n291
  n81 -->|Depends on| n306
  n82 -->|Verifies| n125
  n82 -->|Verifies| n196
  n82 -->|Verifies| n369
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
  n82 -->|Depends on| n699
  n82 -->|Depends on| n306
  n82 -->|Depends on| n643
  n83 -->|Verifies| n134
  n83 -->|Verifies| n390
  n83 -->|Verifies| n368
  n83 -->|Verifies| n386
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
  n83 -->|Depends on| n306
  n83 -->|Depends on| n141
  n83 -->|Depends on| n700
  n84 -->|Verifies| n109
  n84 -->|Verifies| n387
  n84 -->|In| n52
  n84 -->|Depends on| n109
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n51
  n84 -->|Depends on| n96
  n84 -->|Depends on| n147
  n84 -->|Depends on| n306
  n84 -->|Depends on| n316
  n85 -->|Verifies| n132
  n85 -->|Verifies| n390
  n85 -->|Verifies| n368
  n85 -->|In| n52
  n85 -->|Depends on| n132
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n41
  n85 -->|Depends on| n39
  n85 -->|Depends on| n142
  n85 -->|Depends on| n96
  n85 -->|Depends on| n147
  n85 -->|Depends on| n306
  n86 -->|Verifies| n112
  n86 -->|Verifies| n152
  n86 -->|In| n52
  n86 -->|Depends on| n112
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n96
  n86 -->|Depends on| n91
  n86 -->|Depends on| n206
  n86 -->|Depends on| n147
  n86 -->|Depends on| n306
  n87 -->|Verifies| n117
  n87 -->|Verifies| n165
  n87 -->|In| n52
  n87 -->|Depends on| n116
  n87 -->|Depends on| n117
  n87 -->|Depends on| n42
  n87 -->|Depends on| n56
  n87 -->|Depends on| n51
  n87 -->|Depends on| n182
  n87 -->|Depends on| n41
  n87 -->|Depends on| n39
  n87 -->|Depends on| n142
  n87 -->|Depends on| n147
  n87 -->|Depends on| n302
  n87 -->|Depends on| n306
  n88 -->|Verifies| n338
  n88 -->|Verifies| n360
  n88 -->|Verifies| n376
  n88 -->|Verifies| n392
  n88 -->|In| n52
  n88 -->|Depends on| n116
  n88 -->|Depends on| n338
  n88 -->|Depends on| n19
  n88 -->|Depends on| n182
  n88 -->|Depends on| n41
  n88 -->|Depends on| n17
  n88 -->|Depends on| n51
  n88 -->|Depends on| n147
  n88 -->|Depends on| n302
  n88 -->|Depends on| n306
  n89 -->|Verifies| n116
  n89 -->|Verifies| n180
  n89 -->|Verifies| n574
  n89 -->|Verifies| n566
  n89 -->|Verifies| n578
  n89 -->|Verifies| n168
  n89 -->|In| n52
  n89 -->|Depends on| n116
  n89 -->|Depends on| n168
  n89 -->|Depends on| n51
  n89 -->|Depends on| n147
  n89 -->|Depends on| n302
  n89 -->|Depends on| n306
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
  n92 -->|Depends on| n194
  n92 -->|Depends on| n147
  n92 -->|Depends on| n306
  n92 -->|Depends on| n141
  n92 -->|Depends on| n700
  n93 -->|Verifies| n121
  n93 -->|Verifies| n177
  n93 -->|In| n52
  n93 -->|Depends on| n121
  n93 -->|Depends on| n23
  n93 -->|Depends on| n21
  n93 -->|Depends on| n51
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n142
  n93 -->|Depends on| n147
  n93 -->|Depends on| n184
  n93 -->|Depends on| n68
  n93 -->|Depends on| n302
  n93 -->|Depends on| n306
  n94 -->|Verifies| n124
  n94 -->|Verifies| n369
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n42
  n94 -->|Depends on| n56
  n94 -->|Depends on| n147
  n94 -->|Depends on| n306
  n94 -->|Depends on| n141
  n94 -->|Depends on| n700
  n94 -->|Depends on| n91
  n97 -->|Verifies| n128
  n97 -->|Verifies| n122
  n97 -->|Verifies| n638
  n97 -->|Verifies| n185
  n97 -->|Verifies| n640
  n97 -->|Verifies| n377
  n97 -->|Verifies| n636
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
  n97 -->|Depends on| n292
  n97 -->|Depends on| n142
  n97 -->|Depends on| n643
  n97 -->|Depends on| n96
  n97 -->|Depends on| n91
  n97 -->|Depends on| n147
  n97 -->|Depends on| n306
  n98 -->|Verifies| n130
  n98 -->|In| n52
  n98 -->|Depends on| n130
  n98 -->|Depends on| n56
  n98 -->|Depends on| n21
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n142
  n98 -->|Depends on| n147
  n98 -->|Depends on| n306
  n99 -->|Verifies| n128
  n99 -->|Verifies| n185
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
  n99 -->|Depends on| n185
  n99 -->|Depends on| n291
  n99 -->|Depends on| n142
  n99 -->|Depends on| n643
  n99 -->|Depends on| n96
  n99 -->|Depends on| n91
  n99 -->|Depends on| n147
  n99 -->|Depends on| n306
  n101 -->|Verifies| n105
  n101 -->|Verifies| n106
  n101 -->|Verifies| n111
  n101 -->|Verifies| n366
  n101 -->|In| n52
  n101 -->|Depends on| n105
  n101 -->|Depends on| n56
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n147
  n101 -->|Depends on| n68
  n101 -->|Depends on| n306
  n103 -->|Verifies| n129
  n103 -->|Verifies| n133
  n103 -->|Verifies| n126
  n103 -->|Verifies| n582
  n103 -->|Verifies| n576
  n103 -->|Verifies| n584
  n103 -->|In| n52
  n103 -->|Depends on| n129
  n103 -->|Depends on| n133
  n103 -->|Depends on| n51
  n103 -->|Depends on| n147
  n103 -->|Depends on| n102
  n103 -->|Depends on| n306
  n104 -->|Serves| n440
  n104 -->|Part of| n54
  n104 -->|Depends on| n120
  n104 -->|Depends on| n169
  n104 -->|Depends on| n147
  n104 -->|Depends on| n142
  n104 -->|Depends on| n193
  n104 -->|Depends on| n191
  n104 -->|Depends on| n363
  n104 -->|Depends on| n402
  n104 -->|Depends on| n148
  n104 -->|Depends on| n700
  n104 -->|Depends on| n43
  n104 -->|Depends on| n22
  n104 -->|Depends on| n21
  n104 -->|Depends on| n23
  n104 -->|Depends on| n39
  n104 -->|Depends on| n25
  n104 -->|Depends on| n170
  n104 -->|Depends on| n50
  n104 -->|Depends on| n666
  n104 -->|Depends on| n672
  n104 -->|Depends on| n291
  n104 -->|Depends on| n290
  n104 -->|Depends on| n194
  n104 -->|Depends on| n195
  n104 -->|Depends on| n197
  n104 -->|Depends on| n196
  n104 -->|Depends on| n140
  n104 -->|Depends on| n145
  n104 -->|Depends on| n17
  n104 -->|Depends on| n182
  n104 -->|Depends on| n141
  n105 -->|Serves| n447
  n105 -->|Part of| n54
  n105 -->|Depends on| n120
  n105 -->|Depends on| n106
  n105 -->|Depends on| n14
  n105 -->|Depends on| n39
  n105 -->|Depends on| n672
  n105 -->|Depends on| n50
  n105 -->|Depends on| n291
  n106 -->|Serves| n447
  n106 -->|Depends on| n120
  n106 -->|Depends on| n178
  n106 -->|Depends on| n111
  n106 -->|Depends on| n40
  n106 -->|Depends on| n184
  n106 -->|Depends on| n182
  n106 -->|Depends on| n142
  n106 -->|Depends on| n39
  n106 -->|Depends on| n291
  n106 -->|Depends on| n135
  n107 -->|Serves| n440
  n107 -->|Part of| n54
  n107 -->|Depends on| n120
  n107 -->|Depends on| n108
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n50
  n107 -->|Depends on| n291
  n108 -->|Serves| n440
  n108 -->|Depends on| n120
  n108 -->|Depends on| n161
  n108 -->|Depends on| n672
  n108 -->|Depends on| n156
  n108 -->|Depends on| n291
  n109 -->|Serves| n447
  n109 -->|Part of| n54
  n109 -->|Depends on| n120
  n109 -->|Depends on| n34
  n109 -->|Depends on| n316
  n109 -->|Depends on| n142
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n321
  n109 -->|Depends on| n140
  n109 -->|Depends on| n50
  n109 -->|Depends on| n666
  n109 -->|Depends on| n672
  n109 -->|Depends on| n291
  n110 -->|Serves| n440
  n110 -->|Part of| n54
  n110 -->|Depends on| n142
  n110 -->|Depends on| n120
  n110 -->|Depends on| n178
  n110 -->|Depends on| n564
  n110 -->|Depends on| n582
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n50
  n110 -->|Depends on| n291
  n111 -->|Serves| n440
  n111 -->|Depends on| n291
  n111 -->|Depends on| n302
  n112 -->|Serves| n440
  n112 -->|Part of| n54
  n112 -->|Depends on| n120
  n112 -->|Depends on| n161
  n112 -->|Depends on| n108
  n112 -->|Depends on| n16
  n112 -->|Depends on| n152
  n112 -->|Depends on| n339
  n112 -->|Depends on| n340
  n112 -->|Depends on| n220
  n112 -->|Depends on| n151
  n112 -->|Depends on| n21
  n112 -->|Depends on| n23
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n291
  n113 -->|Serves| n440
  n113 -->|Part of| n54
  n113 -->|Depends on| n120
  n113 -->|Depends on| n166
  n113 -->|Depends on| n106
  n113 -->|Depends on| n14
  n113 -->|Depends on| n39
  n114 -->|Serves| n440
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
  n114 -->|Depends on| n291
  n116 -->|Serves| n440
  n116 -->|Part of| n54
  n116 -->|Depends on| n120
  n116 -->|Depends on| n180
  n116 -->|Depends on| n564
  n116 -->|Depends on| n582
  n116 -->|Depends on| n574
  n116 -->|Depends on| n50
  n117 -->|Serves| n440
  n117 -->|Part of| n54
  n117 -->|Depends on| n142
  n117 -->|Depends on| n120
  n117 -->|Depends on| n165
  n117 -->|Depends on| n338
  n117 -->|Depends on| n182
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n291
  n118 -->|Serves| n447
  n118 -->|Part of| n54
  n118 -->|Depends on| n120
  n118 -->|Depends on| n142
  n118 -->|Depends on| n182
  n118 -->|Depends on| n40
  n118 -->|Depends on| n144
  n118 -->|Depends on| n194
  n118 -->|Depends on| n21
  n118 -->|Depends on| n23
  n118 -->|Depends on| n39
  n118 -->|Depends on| n140
  n118 -->|Depends on| n700
  n118 -->|Depends on| n702
  n118 -->|Depends on| n688
  n118 -->|Depends on| n682
  n118 -->|Depends on| n683
  n118 -->|Depends on| n680
  n118 -->|Depends on| n679
  n118 -->|Depends on| n691
  n118 -->|Depends on| n697
  n118 -->|Depends on| n699
  n118 -->|Depends on| n689
  n118 -->|Depends on| n50
  n118 -->|Depends on| n291
  n118 -->|Depends on| n41
  n118 -->|Depends on| n147
  n118 -->|Depends on| n123
  n118 -->|Depends on| n141
  n119 -->|Serves| n440
  n119 -->|Part of| n54
  n119 -->|Depends on| n142
  n119 -->|Depends on| n672
  n119 -->|Depends on| n120
  n119 -->|Depends on| n178
  n119 -->|Depends on| n111
  n119 -->|Depends on| n21
  n119 -->|Depends on| n39
  n119 -->|Depends on| n50
  n119 -->|Depends on| n291
  n120 -->|Serves| n440
  n120 -->|Depends on| n147
  n120 -->|Depends on| n163
  n120 -->|Depends on| n162
  n120 -->|Depends on| n175
  n120 -->|Depends on| n189
  n120 -->|Depends on| n177
  n120 -->|Depends on| n560
  n120 -->|Depends on| n50
  n120 -->|Depends on| n41
  n120 -->|Depends on| n17
  n120 -->|Depends on| n445
  n120 -->|Depends on| n439
  n120 -->|Depends on| n672
  n120 -->|Depends on| n670
  n120 -->|Depends on| n668
  n120 -->|Depends on| n291
  n120 -->|Depends on| n142
  n120 -->|Depends on| n184
  n121 -->|Serves| n447
  n121 -->|Part of| n54
  n121 -->|Depends on| n120
  n121 -->|Depends on| n177
  n121 -->|Depends on| n23
  n121 -->|Depends on| n50
  n121 -->|Depends on| n672
  n121 -->|Depends on| n670
  n121 -->|Depends on| n668
  n121 -->|Depends on| n291
  n122 -->|Serves| n641
  n122 -->|Part of| n54
  n122 -->|Depends on| n147
  n122 -->|Depends on| n120
  n122 -->|Depends on| n638
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n50
  n122 -->|Depends on| n291
  n123 -->|Serves| n447
  n123 -->|Depends on| n702
  n123 -->|Depends on| n688
  n123 -->|Depends on| n682
  n123 -->|Depends on| n683
  n123 -->|Depends on| n680
  n123 -->|Depends on| n679
  n123 -->|Depends on| n691
  n123 -->|Depends on| n697
  n123 -->|Depends on| n699
  n123 -->|Depends on| n685
  n123 -->|Depends on| n689
  n124 -->|Serves| n447
  n124 -->|Part of| n54
  n124 -->|Depends on| n120
  n124 -->|Depends on| n142
  n124 -->|Depends on| n182
  n124 -->|Depends on| n141
  n124 -->|Depends on| n21
  n124 -->|Depends on| n22
  n124 -->|Depends on| n39
  n124 -->|Depends on| n50
  n124 -->|Depends on| n291
  n125 -->|Serves| n447
  n125 -->|Part of| n54
  n125 -->|Depends on| n120
  n125 -->|Depends on| n142
  n125 -->|Depends on| n182
  n125 -->|Depends on| n178
  n125 -->|Depends on| n564
  n125 -->|Depends on| n249
  n125 -->|Depends on| n248
  n125 -->|Depends on| n197
  n125 -->|Depends on| n196
  n125 -->|Depends on| n21
  n125 -->|Depends on| n23
  n125 -->|Depends on| n22
  n125 -->|Depends on| n39
  n125 -->|Depends on| n25
  n125 -->|Depends on| n170
  n125 -->|Depends on| n700
  n125 -->|Depends on| n17
  n125 -->|Depends on| n50
  n125 -->|Depends on| n291
  n125 -->|Depends on| n290
  n125 -->|Depends on| n223
  n125 -->|Depends on| n699
  n125 -->|Depends on| n128
  n125 -->|Depends on| n147
  n126 -->|Serves| n440
  n126 -->|Depends on| n147
  n126 -->|Depends on| n140
  n126 -->|Depends on| n120
  n126 -->|Depends on| n189
  n126 -->|Depends on| n564
  n126 -->|Depends on| n582
  n126 -->|Depends on| n50
  n126 -->|Depends on| n291
  n127 -->|Serves| n440
  n127 -->|Part of| n54
  n127 -->|Depends on| n107
  n127 -->|Depends on| n41
  n128 -->|Serves| n641
  n128 -->|Part of| n54
  n128 -->|Depends on| n147
  n128 -->|Depends on| n120
  n128 -->|Depends on| n112
  n128 -->|Depends on| n161
  n128 -->|Depends on| n108
  n128 -->|Depends on| n638
  n128 -->|Depends on| n640
  n128 -->|Depends on| n641
  n128 -->|Depends on| n16
  n128 -->|Depends on| n152
  n128 -->|Depends on| n637
  n128 -->|Depends on| n41
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n50
  n128 -->|Depends on| n169
  n128 -->|Depends on| n291
  n129 -->|Serves| n440
  n129 -->|Part of| n54
  n129 -->|Depends on| n120
  n129 -->|Depends on| n126
  n130 -->|Serves| n447
  n130 -->|Part of| n54
  n130 -->|Depends on| n142
  n130 -->|Depends on| n120
  n130 -->|Depends on| n178
  n130 -->|Depends on| n564
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n50
  n130 -->|Depends on| n291
  n131 -->|Serves| n440
  n131 -->|Part of| n54
  n131 -->|Depends on| n120
  n131 -->|Depends on| n163
  n131 -->|Depends on| n189
  n131 -->|Depends on| n175
  n131 -->|Depends on| n50
  n131 -->|Depends on| n672
  n131 -->|Depends on| n670
  n131 -->|Depends on| n668
  n131 -->|Depends on| n291
  n132 -->|Serves| n447
  n132 -->|Part of| n54
  n132 -->|Depends on| n120
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n39
  n132 -->|Depends on| n321
  n132 -->|Depends on| n699
  n132 -->|Depends on| n41
  n132 -->|Depends on| n147
  n132 -->|Depends on| n50
  n132 -->|Depends on| n291
  n133 -->|Serves| n440
  n133 -->|Part of| n54
  n133 -->|Depends on| n147
  n133 -->|Depends on| n120
  n133 -->|Depends on| n126
  n133 -->|Depends on| n163
  n133 -->|Depends on| n189
  n133 -->|Depends on| n50
  n133 -->|Depends on| n291
  n134 -->|Serves| n447
  n134 -->|Part of| n54
  n134 -->|Depends on| n120
  n134 -->|Depends on| n142
  n134 -->|Depends on| n182
  n134 -->|Depends on| n21
  n134 -->|Depends on| n23
  n134 -->|Depends on| n141
  n134 -->|Depends on| n40
  n134 -->|Depends on| n194
  n134 -->|Depends on| n39
  n134 -->|Depends on| n33
  n134 -->|Depends on| n315
  n134 -->|Depends on| n140
  n134 -->|Depends on| n700
  n134 -->|Depends on| n50
  n134 -->|Depends on| n291
  n134 -->|Depends on| n41
  n134 -->|Depends on| n147
  n151 -->|Read in| n203
  n151 -->|Depends on| n202
  n151 -->|Depends on| n205
  n152 -->|Serves| n440
  n152 -->|Depends on| n31
  n152 -->|Depends on| n150
  n156 -->|Serves| n447
  n156 -->|Depends on| n299
  n157 -->|Serves| n447
  n157 -->|Applied by| n156
  n157 -->|Applied by| n299
  n159 -->|Serves| n447
  n159 -->|Depends on| n155
  n160 -->|Serves| n447
  n161 -->|Serves| n440
  n161 -->|Depends on| n147
  n161 -->|Depends on| n142
  n161 -->|Depends on| n39
  n161 -->|Depends on| n190
  n161 -->|Depends on| n40
  n161 -->|Depends on| n223
  n161 -->|Depends on| n292
  n161 -->|Depends on| n141
  n161 -->|Depends on| n700
  n162 -->|Serves| n440
  n162 -->|Depends on| n136
  n162 -->|Depends on| n181
  n162 -->|Depends on| n184
  n162 -->|Depends on| n40
  n162 -->|Depends on| n156
  n162 -->|Depends on| n138
  n162 -->|Depends on| n142
  n162 -->|Depends on| n307
  n162 -->|Depends on| n185
  n162 -->|Depends on| n159
  n163 -->|Serves| n440
  n163 -->|Depends on| n142
  n163 -->|Depends on| n445
  n163 -->|Depends on| n164
  n163 -->|Depends on| n184
  n163 -->|Depends on| n181
  n163 -->|Depends on| n31
  n163 -->|Depends on| n21
  n163 -->|Depends on| n39
  n163 -->|Depends on| n186
  n163 -->|Depends on| n182
  n163 -->|Depends on| n173
  n163 -->|Depends on| n190
  n163 -->|Depends on| n223
  n163 -->|Depends on| n40
  n163 -->|Depends on| n292
  n163 -->|Depends on| n171
  n163 -->|Depends on| n48
  n163 -->|Depends on| n169
  n163 -->|Depends on| n28
  n163 -->|Depends on| n141
  n164 -->|Serves| n440
  n165 -->|Serves| n440
  n165 -->|Depends on| n147
  n165 -->|Depends on| n17
  n165 -->|Depends on| n41
  n165 -->|Depends on| n302
  n166 -->|Serves| n440
  n166 -->|Depends on| n167
  n166 -->|Depends on| n147
  n166 -->|Depends on| n142
  n166 -->|Depends on| n50
  n166 -->|Depends on| n665
  n166 -->|Depends on| n17
  n166 -->|Depends on| n53
  n166 -->|Depends on| n438
  n166 -->|Depends on| n26
  n166 -->|Depends on| n21
  n166 -->|Depends on| n39
  n166 -->|Depends on| n182
  n166 -->|Depends on| n165
  n166 -->|Depends on| n168
  n166 -->|Depends on| n338
  n166 -->|Depends on| n574
  n166 -->|Depends on| n294
  n166 -->|Depends on| n299
  n166 -->|Depends on| n295
  n168 -->|Serves| n440
  n168 -->|Depends on| n156
  n168 -->|Depends on| n302
  n169 -->|Serves| n440
  n169 -->|Depends on| n142
  n169 -->|Depends on| n193
  n169 -->|Depends on| n700
  n169 -->|Depends on| n182
  n169 -->|Depends on| n21
  n169 -->|Depends on| n39
  n169 -->|Depends on| n25
  n169 -->|Depends on| n170
  n169 -->|Depends on| n140
  n171 -->|Serves| n440
  n172 -->|Serves| n440
  n173 -->|Serves| n440
  n173 -->|Depends on| n40
  n173 -->|Depends on| n145
  n173 -->|Depends on| n292
  n173 -->|Depends on| n301
  n173 -->|Depends on| n294
  n173 -->|Depends on| n156
  n173 -->|Depends on| n181
  n173 -->|Depends on| n184
  n173 -->|Depends on| n153
  n173 -->|Depends on| n172
  n173 -->|Depends on| n448
  n173 -->|Depends on| n142
  n173 -->|Depends on| n700
  n173 -->|Depends on| n321
  n173 -->|Depends on| n159
  n173 -->|Depends on| n160
  n173 -->|Depends on| n171
  n175 -->|Serves| n440
  n175 -->|Depends on| n27
  n175 -->|Depends on| n223
  n175 -->|Depends on| n143
  n175 -->|Depends on| n142
  n175 -->|Depends on| n442
  n175 -->|Depends on| n437
  n175 -->|Depends on| n172
  n175 -->|Depends on| n443
  n175 -->|Depends on| n444
  n175 -->|Depends on| n184
  n175 -->|Depends on| n21
  n175 -->|Depends on| n39
  n175 -->|Depends on| n182
  n175 -->|Depends on| n173
  n175 -->|Depends on| n40
  n175 -->|Depends on| n141
  n175 -->|Depends on| n300
  n175 -->|Depends on| n231
  n175 -->|Depends on| n225
  n175 -->|Depends on| n227
  n175 -->|Depends on| n235
  n175 -->|Depends on| n244
  n175 -->|Depends on| n241
  n175 -->|Depends on| n239
  n175 -->|Depends on| n229
  n176 -->|Serves| n243
  n176 -->|Applied by| n175
  n176 -->|Applied by| n189
  n177 -->|Serves| n447
  n177 -->|Depends on| n142
  n177 -->|Depends on| n140
  n177 -->|Depends on| n184
  n177 -->|Depends on| n257
  n177 -->|Depends on| n21
  n177 -->|Depends on| n39
  n177 -->|Depends on| n40
  n177 -->|Depends on| n302
  n178 -->|Serves| n447
  n178 -->|Depends on| n140
  n178 -->|Depends on| n181
  n178 -->|Depends on| n40
  n178 -->|Depends on| n302
  n180 -->|Serves| n440
  n180 -->|Depends on| n142
  n180 -->|Depends on| n436
  n180 -->|Depends on| n179
  n180 -->|Depends on| n17
  n180 -->|Depends on| n178
  n180 -->|Depends on| n189
  n180 -->|Depends on| n299
  n181 -->|Serves| n440
  n181 -->|Depends on| n646
  n182 -->|Serves| n440
  n182 -->|Depends on| n142
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n194
  n182 -->|Depends on| n40
  n182 -->|Depends on| n141
  n182 -->|Depends on| n700
  n183 -->|Serves| n440
  n183 -->|Implements| n28
  n183 -->|Depends on| n21
  n183 -->|Depends on| n39
  n183 -->|Depends on| n25
  n183 -->|Depends on| n174
  n183 -->|Depends on| n46
  n184 -->|Serves| n440
  n184 -->|Depends on| n145
  n184 -->|Depends on| n246
  n185 -->|Serves| n440
  n185 -->|Depends on| n291
  n186 -->|Serves| n440
  n186 -->|Depends on| n702
  n186 -->|Depends on| n184
  n186 -->|Depends on| n188
  n186 -->|Depends on| n55
  n186 -->|Depends on| n27
  n186 -->|Depends on| n46
  n186 -->|Depends on| n25
  n186 -->|Depends on| n39
  n186 -->|Depends on| n181
  n186 -->|Depends on| n137
  n186 -->|Depends on| n292
  n186 -->|Depends on| n701
  n186 -->|Depends on| n143
  n186 -->|Depends on| n40
  n187 -->|Serves| n447
  n187 -->|Applied by| n173
  n187 -->|Applied by| n189
  n189 -->|Serves| n440
  n189 -->|Depends on| n223
  n189 -->|Depends on| n136
  n189 -->|Depends on| n149
  n189 -->|Depends on| n138
  n189 -->|Depends on| n142
  n189 -->|Depends on| n31
  n189 -->|Depends on| n21
  n189 -->|Depends on| n39
  n189 -->|Depends on| n40
  n189 -->|Depends on| n182
  n189 -->|Depends on| n302
  n189 -->|Depends on| n307
  n189 -->|Depends on| n233
  n189 -->|Depends on| n225
  n189 -->|Depends on| n241
  n189 -->|Depends on| n237
  n190 -->|Serves| n440
  n190 -->|Depends on| n146
  n190 -->|Depends on| n145
  n190 -->|Depends on| n142
  n190 -->|Depends on| n39
  n190 -->|Depends on| n40
  n190 -->|Depends on| n223
  n190 -->|Depends on| n292
  n191 -->|Refines| n440
  n192 -->|Accepts| n191
  n196 -->|Serves| n440
  n196 -->|Depends on| n197
  n196 -->|Depends on| n702
  n196 -->|Depends on| n145
  n196 -->|Depends on| n682
  n196 -->|Depends on| n688
  n196 -->|Depends on| n686
  n196 -->|Depends on| n689
  n196 -->|Depends on| n683
  n196 -->|Depends on| n680
  n196 -->|Depends on| n679
  n196 -->|Depends on| n690
  n196 -->|Depends on| n697
  n196 -->|Depends on| n699
  n196 -->|Depends on| n685
  n198 -->|Read in| n203
  n199 -->|Read in| n203
  n200 -->|Read in| n203
  n201 -->|Read in| n203
  n202 -->|Read in| n203
  n203 -->|Queries written in| n645
  n203 -->|Read by| n654
  n203 -->|Uses| n310
  n204 -->|Read in| n203
  n205 -->|Read in| n203
  n205 -->|Depends on| n201
  n206 -->|Read in| n213
  n207 -->|Read in| n213
  n208 -->|Read in| n213
  n209 -->|Read in| n213
  n209 -->|Depends on| n214
  n209 -->|Depends on| n211
  n210 -->|Read in| n213
  n210 -->|Depends on| n214
  n210 -->|Depends on| n211
  n211 -->|Read in| n213
  n212 -->|Read in| n213
  n212 -->|Depends on| n210
  n213 -->|Queries written in| n645
  n213 -->|Read by| n654
  n213 -->|Uses| n313
  n214 -->|Read in| n213
  n214 -->|Depends on| n208
  n215 -->|Read in| n700
  n216 -->|Read in| n203
  n217 -->|Read in| n203
  n218 -->|Read in| n203
  n220 -->|Read in| n213
  n220 -->|Depends on| n210
  n221 -->|Read in| n203
  n222 -->|Read in| n213
  n222 -->|Depends on| n208
  n223 -->|Serves| n440
  n223 -->|Depends on| n654
  n223 -->|Depends on| n647
  n223 -->|Depends on| n700
  n223 -->|Depends on| n203
  n223 -->|Depends on| n703
  n223 -->|Depends on| n661
  n223 -->|Depends on| n662
  n223 -->|Depends on| n663
  n223 -->|Depends on| n31
  n223 -->|Depends on| n21
  n223 -->|Depends on| n39
  n223 -->|Depends on| n296
  n224 -->|Serves| n440
  n224 -->|Applied by| n223
  n224 -->|Applied by| n338
  n225 -->|Refines| n243
  n226 -->|Accepts| n225
  n227 -->|Refines| n243
  n228 -->|Accepts| n227
  n229 -->|Refines| n243
  n230 -->|Accepts| n229
  n231 -->|Refines| n243
  n232 -->|Accepts| n231
  n233 -->|Refines| n243
  n234 -->|Accepts| n233
  n235 -->|Refines| n243
  n236 -->|Accepts| n235
  n237 -->|Refines| n243
  n238 -->|Accepts| n237
  n239 -->|Refines| n241
  n239 -->|Depends on| n241
  n240 -->|Accepts| n239
  n241 -->|Refines| n243
  n242 -->|Accepts| n241
  n244 -->|Refines| n243
  n245 -->|Accepts| n244
  n246 -->|Refines| n449
  n247 -->|Accepts| n246
  n249 -->|Refines| n449
  n250 -->|Accepts| n249
  n251 -->|Read in| n213
  n251 -->|Depends on| n210
  n252 -->|Defined by| n258
  n252 -->|Depends on| n258
  n253 -->|Defined by| n258
  n253 -->|Depends on| n258
  n254 -->|Defined by| n258
  n254 -->|Depends on| n258
  n255 -->|Defined by| n258
  n255 -->|Depends on| n258
  n255 -->|Depends on| n253
  n256 -->|Defined by| n258
  n256 -->|Depends on| n258
  n256 -->|Depends on| n252
  n257 -->|Defined by| n258
  n257 -->|Depends on| n258
  n257 -->|Depends on| n252
  n259 -->|Read in| n213
  n259 -->|Depends on| n214
  n259 -->|Depends on| n211
  n259 -->|Depends on| n210
  n259 -->|Depends on| n253
  n260 -->|Defined by| n258
  n260 -->|Depends on| n258
  n262 -->|Defined by| n258
  n262 -->|Depends on| n258
  n263 -->|Defined by| n258
  n263 -->|Depends on| n258
  n264 -->|Defined by| n258
  n264 -->|Depends on| n258
  n265 -->|Depends on| n142
  n266 -->|Read in| n213
  n266 -->|Depends on| n210
  n267 -->|Defined by| n258
  n267 -->|Depends on| n258
  n268 -->|Defined by| n261
  n268 -->|Depends on| n261
  n268 -->|Depends on| n271
  n268 -->|Depends on| n270
  n269 -->|Defined by| n261
  n269 -->|Depends on| n261
  n269 -->|Depends on| n258
  n270 -->|Defined by| n261
  n270 -->|Depends on| n261
  n271 -->|Defined by| n261
  n271 -->|Depends on| n261
  n271 -->|Depends on| n258
  n276 -->|Defined by| n282
  n276 -->|Depends on| n282
  n276 -->|Depends on| n288
  n277 -->|Defined by| n282
  n277 -->|Depends on| n282
  n278 -->|Defined by| n282
  n278 -->|Depends on| n282
  n279 -->|Defined by| n282
  n279 -->|Depends on| n282
  n280 -->|Defined by| n282
  n280 -->|Depends on| n282
  n280 -->|Depends on| n279
  n281 -->|Defined by| n282
  n281 -->|Depends on| n282
  n281 -->|Depends on| n279
  n283 -->|Defined by| n282
  n283 -->|Depends on| n282
  n284 -->|Defined by| n282
  n284 -->|Depends on| n282
  n284 -->|Depends on| n283
  n285 -->|Defined by| n282
  n285 -->|Depends on| n282
  n285 -->|Depends on| n283
  n286 -->|Defined by| n282
  n286 -->|Depends on| n282
  n286 -->|Depends on| n281
  n287 -->|Defined by| n282
  n287 -->|Depends on| n282
  n287 -->|Depends on| n288
  n288 -->|Defined by| n282
  n288 -->|Depends on| n282
  n289 -->|Defined by| n282
  n289 -->|Depends on| n282
  n289 -->|Depends on| n283
  n290 -->|Written in| n299
  n290 -->|Depends on| n299
  n291 -->|Written in| n299
  n291 -->|Depends on| n299
  n292 -->|Written in| n299
  n292 -->|Depends on| n299
  n292 -->|Depends on| n301
  n293 -->|Serves| n447
  n293 -->|Applied by| n292
  n293 -->|Applied by| n307
  n293 -->|Applied by| n295
  n293 -->|Applied by| n291
  n293 -->|Applied by| n306
  n293 -->|Applied by| n290
  n293 -->|Applied by| n303
  n293 -->|Applied by| n301
  n294 -->|Serves| n447
  n294 -->|Depends on| n299
  n295 -->|Written in| n299
  n295 -->|Depends on| n299
  n295 -->|Depends on| n301
  n296 -->|Written in| n299
  n297 -->|Written in| n299
  n298 -->|Written in| n299
  n300 -->|Written in| n299
  n301 -->|Serves| n447
  n301 -->|Depends on| n299
  n302 -->|Written in| n299
  n303 -->|Written in| n299
  n303 -->|Depends on| n299
  n304 -->|Written in| n299
  n305 -->|Written in| n299
  n306 -->|Written in| n299
  n306 -->|Depends on| n299
  n307 -->|Written in| n299
  n307 -->|Depends on| n299
  n308 -->|Written in| n299
  n309 -->|Serves| n447
  n315 -->|Serves| n447
  n317 -->|Serves| n447
  n321 -->|Serves| n447
  n323 -->|Defined by| n352
  n323 -->|Read in| n213
  n323 -->|Depends on| n352
  n323 -->|Depends on| n341
  n323 -->|Depends on| n210
  n324 -->|Defined by| n352
  n324 -->|Read in| n213
  n324 -->|Depends on| n352
  n324 -->|Depends on| n147
  n324 -->|Depends on| n331
  n324 -->|Depends on| n209
  n324 -->|Depends on| n210
  n325 -->|Defined by| n352
  n325 -->|Read in| n213
  n325 -->|Depends on| n352
  n325 -->|Depends on| n341
  n325 -->|Depends on| n210
  n326 -->|Defined by| n352
  n326 -->|Read in| n213
  n326 -->|Depends on| n352
  n326 -->|Depends on| n341
  n326 -->|Depends on| n209
  n326 -->|Depends on| n210
  n327 -->|Defined by| n352
  n327 -->|Read in| n213
  n327 -->|Depends on| n352
  n327 -->|Depends on| n341
  n327 -->|Depends on| n209
  n327 -->|Depends on| n210
  n327 -->|Depends on| n345
  n328 -->|Defined by| n352
  n328 -->|Read in| n213
  n328 -->|Depends on| n352
  n328 -->|Depends on| n341
  n328 -->|Depends on| n209
  n328 -->|Depends on| n210
  n329 -->|Defined by| n352
  n329 -->|Read in| n213
  n329 -->|Depends on| n352
  n329 -->|Depends on| n275
  n329 -->|Depends on| n1
  n329 -->|Depends on| n209
  n329 -->|Depends on| n210
  n329 -->|Depends on| n222
  n329 -->|Depends on| n219
  n330 -->|Read in| n213
  n330 -->|Depends on| n214
  n331 -->|Defined by| n352
  n331 -->|Read in| n213
  n331 -->|Depends on| n352
  n331 -->|Depends on| n7
  n331 -->|Depends on| n209
  n331 -->|Depends on| n210
  n331 -->|Depends on| n222
  n331 -->|Depends on| n204
  n333 -->|Defined by| n352
  n333 -->|Read in| n213
  n333 -->|Depends on| n352
  n333 -->|Depends on| n341
  n333 -->|Depends on| n209
  n333 -->|Depends on| n210
  n333 -->|Depends on| n323
  n333 -->|Depends on| n327
  n334 -->|Defined by| n352
  n334 -->|Read in| n203
  n334 -->|Depends on| n352
  n334 -->|Depends on| n217
  n334 -->|Depends on| n216
  n335 -->|Uses the variables of| n9
  n335 -->|Uses the variables of| n12
  n335 -->|Uses the variables of| n6
  n335 -->|Styles| n338
  n336 -->|Defined by| n352
  n336 -->|Read in| n213
  n336 -->|Depends on| n352
  n336 -->|Depends on| n341
  n336 -->|Depends on| n210
  n338 -->|Serves| n440
  n338 -->|Depends on| n339
  n338 -->|Depends on| n348
  n338 -->|Depends on| n7
  n338 -->|Depends on| n13
  n338 -->|Depends on| n4
  n338 -->|Depends on| n9
  n338 -->|Depends on| n8
  n338 -->|Depends on| n12
  n338 -->|Depends on| n5
  n338 -->|Depends on| n10
  n338 -->|Depends on| n3
  n338 -->|Depends on| n6
  n338 -->|Depends on| n45
  n338 -->|Depends on| n21
  n338 -->|Depends on| n16
  n338 -->|Depends on| n19
  n338 -->|Depends on| n346
  n338 -->|Depends on| n351
  n338 -->|Depends on| n349
  n338 -->|Depends on| n334
  n338 -->|Depends on| n330
  n338 -->|Depends on| n342
  n338 -->|Depends on| n340
  n338 -->|Depends on| n202
  n338 -->|Depends on| n201
  n338 -->|Depends on| n302
  n338 -->|Depends on| n299
  n338 -->|Depends on| n654
  n338 -->|Depends on| n213
  n338 -->|Depends on| n203
  n340 -->|Defined by| n352
  n340 -->|Read in| n213
  n340 -->|Depends on| n352
  n340 -->|Depends on| n206
  n340 -->|Depends on| n214
  n340 -->|Depends on| n211
  n340 -->|Depends on| n210
  n342 -->|Defined by| n352
  n342 -->|Read in| n213
  n342 -->|Depends on| n352
  n342 -->|Depends on| n220
  n342 -->|Depends on| n215
  n342 -->|Depends on| n687
  n342 -->|Depends on| n676
  n343 -->|Uses the variables of| n7
  n343 -->|Uses the variables of| n13
  n343 -->|Uses the variables of| n9
  n343 -->|Uses the variables of| n8
  n343 -->|Uses the variables of| n12
  n343 -->|Uses the variables of| n5
  n343 -->|Uses the variables of| n10
  n343 -->|Uses the variables of| n3
  n343 -->|Uses the variables of| n6
  n343 -->|Styles| n338
  n345 -->|Defined by| n352
  n345 -->|Read in| n213
  n345 -->|Depends on| n352
  n345 -->|Depends on| n344
  n345 -->|Depends on| n341
  n345 -->|Depends on| n209
  n345 -->|Depends on| n210
  n346 -->|Defined by| n352
  n346 -->|Read in| n213
  n346 -->|Depends on| n352
  n346 -->|Depends on| n209
  n346 -->|Depends on| n347
  n346 -->|Depends on| n333
  n346 -->|Depends on| n329
  n347 -->|Defined by| n352
  n347 -->|Read in| n213
  n347 -->|Depends on| n352
  n347 -->|Depends on| n209
  n347 -->|Depends on| n324
  n347 -->|Depends on| n325
  n347 -->|Depends on| n326
  n347 -->|Depends on| n336
  n347 -->|Depends on| n328
  n349 -->|Defined by| n352
  n349 -->|Read in| n203
  n349 -->|Depends on| n352
  n349 -->|Depends on| n202
  n349 -->|Depends on| n201
  n349 -->|Depends on| n204
  n349 -->|Depends on| n200
  n350 -->|Serves| n447
  n350 -->|Applied by| n343
  n350 -->|Applied by| n335
  n350 -->|Applied by| n351
  n350 -->|Applied by| n334
  n350 -->|Applied by| n338
  n351 -->|Defined by| n352
  n351 -->|Read in| n203
  n351 -->|Depends on| n352
  n351 -->|Depends on| n202
  n351 -->|Depends on| n217
  n351 -->|Depends on| n216
  n351 -->|Depends on| n199
  n351 -->|Depends on| n218
  n351 -->|Depends on| n205
  n351 -->|Depends on| n201
  n353 -->|Chooses| n366
  n353 -->|In| n30
  n353 -->|In| n52
  n353 -->|Serves| n441
  n354 -->|Chooses| n393
  n354 -->|In| n30
  n354 -->|In| n52
  n354 -->|Serves| n441
  n355 -->|Implements| n21
  n356 -->|Implements| n22
  n357 -->|Implements| n23
  n359 -->|Chooses| n404
  n359 -->|Chooses| n392
  n359 -->|In| n30
  n359 -->|In| n52
  n359 -->|Serves| n441
  n360 -->|Implements| n16
  n360 -->|Uses| n311
  n361 -->|Chooses| n360
  n361 -->|In| n30
  n361 -->|In| n52
  n361 -->|Serves| n441
  n362 -->|Implements| n41
  n362 -->|Implements| n43
  n362 -->|Implements| n42
  n362 -->|Depends on| n363
  n362 -->|Depends on| n39
  n362 -->|Depends on| n147
  n362 -->|Depends on| n304
  n364 -->|Chooses| n371
  n364 -->|Chooses| n386
  n364 -->|In| n52
  n364 -->|Serves| n441
  n365 -->|Chooses| n374
  n365 -->|Chooses| n400
  n365 -->|Chooses| n387
  n365 -->|Chooses| n362
  n365 -->|Chooses| n372
  n365 -->|In| n52
  n365 -->|Serves| n441
  n366 -->|Implements| n14
  n366 -->|Depends on| n21
  n366 -->|Depends on| n23
  n366 -->|Depends on| n702
  n366 -->|Depends on| n682
  n366 -->|Depends on| n683
  n366 -->|Depends on| n680
  n366 -->|Depends on| n679
  n366 -->|Depends on| n691
  n366 -->|Depends on| n697
  n366 -->|Depends on| n699
  n366 -->|Depends on| n685
  n366 -->|Depends on| n689
  n368 -->|Depends on| n22
  n368 -->|Depends on| n23
  n368 -->|Depends on| n21
  n368 -->|Depends on| n39
  n369 -->|Depends on| n22
  n369 -->|Depends on| n23
  n369 -->|Depends on| n21
  n369 -->|Depends on| n39
  n369 -->|Depends on| n370
  n369 -->|Depends on| n142
  n371 -->|Implements| n21
  n371 -->|Implements| n23
  n371 -->|Implements| n22
  n371 -->|Implements| n56
  n371 -->|Depends on| n39
  n371 -->|Depends on| n373
  n371 -->|Depends on| n304
  n372 -->|Implements| n26
  n372 -->|Implements| n47
  n372 -->|Depends on| n304
  n374 -->|Implements| n50
  n374 -->|Implements| n51
  n374 -->|Depends on| n367
  n374 -->|Depends on| n304
  n375 -->|Implements| n18
  n375 -->|Depends on| n50
  n375 -->|Depends on| n147
  n375 -->|Depends on| n304
  n376 -->|Implements| n19
  n376 -->|Depends on| n337
  n377 -->|Implements| n25
  n378 -->|Implements| n26
  n379 -->|Chooses| n355
  n379 -->|Chooses| n357
  n379 -->|Chooses| n356
  n379 -->|Chooses| n382
  n379 -->|Chooses| n383
  n379 -->|Chooses| n384
  n379 -->|Chooses| n401
  n379 -->|Chooses| n389
  n379 -->|Chooses| n388
  n379 -->|Chooses| n378
  n379 -->|In| n30
  n379 -->|Serves| n441
  n380 -->|Implements| n39
  n381 -->|Chooses| n380
  n381 -->|Chooses| n377
  n381 -->|Chooses| n376
  n381 -->|Chooses| n385
  n381 -->|Chooses| n375
  n381 -->|Chooses| n394
  n381 -->|In| n30
  n381 -->|In| n52
  n381 -->|Serves| n441
  n382 -->|Implements| n41
  n382 -->|Depends on| n408
  n383 -->|Implements| n43
  n383 -->|Depends on| n408
  n384 -->|Implements| n50
  n384 -->|Depends on| n304
  n385 -->|Implements| n53
  n386 -->|Implements| n33
  n386 -->|Depends on| n23
  n386 -->|Depends on| n39
  n386 -->|Depends on| n142
  n386 -->|Depends on| n315
  n387 -->|Implements| n34
  n388 -->|Implements| n33
  n389 -->|Implements| n34
  n389 -->|Depends on| n156
  n390 -->|Depends on| n368
  n390 -->|Depends on| n369
  n391 -->|Chooses| n390
  n391 -->|In| n30
  n391 -->|In| n52
  n391 -->|Serves| n441
  n392 -->|Implements| n45
  n392 -->|Depends on| n358
  n392 -->|Depends on| n142
  n392 -->|Depends on| n193
  n392 -->|Depends on| n700
  n393 -->|Implements| n55
  n393 -->|Uses| n320
  n393 -->|Uses| n314
  n394 -->|Implements| n27
  n395 -->|Chooses| n183
  n395 -->|In| n30
  n395 -->|In| n52
  n395 -->|Serves| n441
  n396 -->|Implements| n46
  n397 -->|Chooses| n396
  n397 -->|In| n52
  n397 -->|Serves| n441
  n398 -->|Chooses| n399
  n398 -->|In| n30
  n398 -->|Serves| n441
  n399 -->|Implements| n46
  n399 -->|Depends on| n142
  n399 -->|Depends on| n358
  n399 -->|Depends on| n169
  n399 -->|Depends on| n174
  n400 -->|Implements| n17
  n400 -->|Depends on| n402
  n400 -->|Depends on| n403
  n401 -->|Implements| n17
  n401 -->|Depends on| n148
  n404 -->|Implements| n40
  n404 -->|Depends on| n358
  n405 -->|Chooses| n409
  n405 -->|In| n30
  n405 -->|In| n52
  n405 -->|Serves| n441
  n406 -->|Implements| n31
  n406 -->|Uses| n318
  n406 -->|Depends on| n40
  n406 -->|Depends on| n141
  n406 -->|Depends on| n700
  n407 -->|Chooses| n406
  n407 -->|In| n30
  n407 -->|In| n52
  n407 -->|Serves| n441
  n409 -->|Implements| n49
  n409 -->|Uses| n322
  n409 -->|Depends on| n304
  n410 -->|Serves| n447
  n410 -->|Applied by| n163
  n410 -->|Applied by| n175
  n411 -->|Serves| n447
  n411 -->|Applied by| n171
  n411 -->|Applied by| n173
  n412 -->|Serves| n440
  n412 -->|Applied by| n112
  n412 -->|Applied by| n151
  n413 -->|Serves| n440
  n413 -->|Applied by| n54
  n413 -->|Applied by| n44
  n413 -->|Applied by| n32
  n413 -->|Applied by| n29
  n414 -->|Serves| n447
  n414 -->|Applied by| n163
  n414 -->|Applied by| n654
  n415 -->|Serves| n440
  n415 -->|Applied by| n104
  n415 -->|Applied by| n191
  n415 -->|Applied by| n587
  n415 -->|Applied by| n593
  n416 -->|Serves| n440
  n416 -->|Applied by| n186
  n416 -->|Applied by| n55
  n416 -->|Applied by| n700
  n416 -->|Applied by| n137
  n417 -->|Serves| n440
  n417 -->|Applied by| n163
  n417 -->|Applied by| n110
  n418 -->|Serves| n447
  n418 -->|Applied by| n177
  n418 -->|Applied by| n121
  n419 -->|Serves| n447
  n419 -->|Applied by| n163
  n419 -->|Applied by| n162
  n419 -->|Applied by| n180
  n419 -->|Applied by| n186
  n419 -->|Applied by| n175
  n420 -->|Serves| n449
  n420 -->|Applied by| n182
  n420 -->|Applied by| n163
  n420 -->|Applied by| n162
  n420 -->|Applied by| n184
  n420 -->|Applied by| n246
  n420 -->|Applied by| n104
  n421 -->|Serves| n449
  n421 -->|Applied by| n182
  n421 -->|Applied by| n175
  n421 -->|Applied by| n134
  n421 -->|Applied by| n125
  n421 -->|Applied by| n249
  n421 -->|Applied by| n248
  n422 -->|Serves| n447
  n422 -->|Applied by| n647
  n422 -->|Applied by| n223
  n422 -->|Applied by| n163
  n422 -->|Applied by| n29
  n422 -->|Applied by| n32
  n423 -->|Serves| n440
  n423 -->|Applied by| n175
  n423 -->|Applied by| n163
  n423 -->|Applied by| n182
  n424 -->|Serves| n447
  n424 -->|Applied by| n163
  n424 -->|Applied by| n654
  n425 -->|Serves| n447
  n425 -->|Applied by| n110
  n425 -->|Applied by| n130
  n425 -->|Applied by| n178
  n425 -->|Applied by| n338
  n425 -->|Applied by| n161
  n426 -->|Serves| n440
  n426 -->|Applied by| n162
  n426 -->|Applied by| n173
  n426 -->|Applied by| n189
  n426 -->|Applied by| n44
  n427 -->|Serves| n449
  n427 -->|Applied by| n182
  n427 -->|Applied by| n134
  n427 -->|Applied by| n390
  n427 -->|Applied by| n104
  n427 -->|Applied by| n175
  n427 -->|Applied by| n118
  n428 -->|Serves| n440
  n428 -->|Applied by| n40
  n428 -->|Applied by| n143
  n428 -->|Applied by| n139
  n428 -->|Applied by| n175
  n429 -->|Serves| n440
  n429 -->|Applied by| n128
  n429 -->|Applied by| n122
  n429 -->|Applied by| n638
  n429 -->|Applied by| n643
  n429 -->|Applied by| n641
  n429 -->|Applied by| n617
  n429 -->|Applied by| n600
  n430 -->|Serves| n441
  n430 -->|Applied by| n381
  n430 -->|Applied by| n379
  n430 -->|Applied by| n365
  n430 -->|Applied by| n361
  n430 -->|Applied by| n405
  n430 -->|Applied by| n407
  n430 -->|Applied by| n354
  n430 -->|Applied by| n359
  n430 -->|Applied by| n561
  n430 -->|Applied by| n562
  n430 -->|Applied by| n581
  n430 -->|Applied by| n580
  n430 -->|Applied by| n573
  n430 -->|Applied by| n572
  n431 -->|Serves| n440
  n431 -->|Applied by| n104
  n431 -->|Applied by| n191
  n431 -->|Applied by| n588
  n431 -->|Applied by| n587
  n431 -->|Applied by| n594
  n432 -->|Serves| n440
  n432 -->|Applied by| n163
  n432 -->|Applied by| n190
  n433 -->|Serves| n440
  n433 -->|Applied by| n175
  n433 -->|Applied by| n594
  n434 -->|Serves| n440
  n434 -->|Applied by| n175
  n434 -->|Applied by| n189
  n434 -->|Applied by| n182
  n435 -->|Serves| n447
  n435 -->|Applied by| n654
  n435 -->|Applied by| n647
  n435 -->|Applied by| n292
  n435 -->|Applied by| n296
  n435 -->|Applied by| n300
  n435 -->|Applied by| n307
  n435 -->|Applied by| n302
  n435 -->|Applied by| n295
  n435 -->|Applied by| n291
  n435 -->|Applied by| n290
  n435 -->|Applied by| n305
  n435 -->|Applied by| n304
  n435 -->|Applied by| n306
  n445 -->|Refines| n440
  n446 -->|Accepts| n445
  n450 -->|Releases| n54
  n451 -->|Releases| n54
  n451 -->|Assembled by| n549
  n452 -->|Releases| n54
  n452 -->|Assembled by| n559
  n453 -->|Releases| n54
  n453 -->|Assembled by| n452
  n454 -->|Releases| n54
  n454 -->|Assembled by| n453
  n455 -->|Releases| n54
  n455 -->|Assembled by| n454
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
  n462 -->|Assembled by| n451
  n463 -->|Releases| n54
  n463 -->|Assembled by| n461
  n464 -->|Releases| n54
  n464 -->|Assembled by| n462
  n465 -->|Releases| n54
  n465 -->|Assembled by| n464
  n466 -->|Releases| n54
  n466 -->|Assembled by| n465
  n467 -->|Releases| n54
  n467 -->|Assembled by| n466
  n468 -->|Releases| n54
  n468 -->|Assembled by| n467
  n469 -->|Releases| n54
  n469 -->|Assembled by| n468
  n470 -->|Releases| n54
  n470 -->|Assembled by| n469
  n471 -->|Releases| n54
  n471 -->|Assembled by| n470
  n472 -->|Releases| n54
  n472 -->|Assembled by| n450
  n473 -->|Releases| n54
  n473 -->|Assembled by| n471
  n474 -->|Releases| n54
  n474 -->|Assembled by| n473
  n475 -->|Releases| n54
  n475 -->|Assembled by| n474
  n476 -->|Releases| n54
  n476 -->|Assembled by| n475
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
  n483 -->|Assembled by| n472
  n484 -->|Releases| n54
  n484 -->|Assembled by| n482
  n485 -->|Releases| n54
  n485 -->|Assembled by| n484
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
  n494 -->|Assembled by| n483
  n495 -->|Releases| n54
  n495 -->|Assembled by| n493
  n496 -->|Releases| n54
  n496 -->|Assembled by| n495
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
  n505 -->|Assembled by| n494
  n506 -->|Releases| n54
  n506 -->|Assembled by| n504
  n507 -->|Releases| n54
  n507 -->|Assembled by| n506
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
  n516 -->|Assembled by| n505
  n517 -->|Releases| n54
  n517 -->|Assembled by| n515
  n518 -->|Releases| n54
  n518 -->|Assembled by| n517
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
  n527 -->|Assembled by| n516
  n528 -->|Releases| n54
  n528 -->|Assembled by| n526
  n529 -->|Releases| n54
  n529 -->|Assembled by| n528
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
  n538 -->|Assembled by| n527
  n539 -->|Releases| n54
  n539 -->|Assembled by| n537
  n540 -->|Releases| n54
  n540 -->|Assembled by| n539
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
  n549 -->|Assembled by| n538
  n550 -->|Releases| n54
  n550 -->|Assembled by| n548
  n551 -->|Releases| n54
  n551 -->|Assembled by| n550
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
  n560 -->|Serves| n440
  n560 -->|Depends on| n145
  n560 -->|Depends on| n577
  n560 -->|Depends on| n294
  n560 -->|Depends on| n301
  n560 -->|Depends on| n305
  n560 -->|Depends on| n159
  n561 -->|Chooses| n567
  n561 -->|In| n30
  n561 -->|In| n52
  n561 -->|Serves| n441
  n562 -->|Chooses| n569
  n562 -->|In| n30
  n562 -->|In| n52
  n562 -->|Serves| n441
  n564 -->|Serves| n440
  n564 -->|Depends on| n560
  n564 -->|Depends on| n565
  n564 -->|Depends on| n305
  n566 -->|Serves| n440
  n566 -->|Implements| n575
  n566 -->|Depends on| n571
  n566 -->|Depends on| n273
  n566 -->|Depends on| n352
  n566 -->|Depends on| n210
  n566 -->|Depends on| n212
  n566 -->|Depends on| n207
  n566 -->|Depends on| n156
  n566 -->|Depends on| n577
  n566 -->|Depends on| n305
  n567 -->|Serves| n440
  n567 -->|Implements| n565
  n567 -->|Depends on| n563
  n567 -->|Depends on| n158
  n567 -->|Depends on| n156
  n567 -->|Depends on| n255
  n567 -->|Depends on| n262
  n567 -->|Depends on| n264
  n567 -->|Depends on| n254
  n567 -->|Depends on| n256
  n567 -->|Depends on| n260
  n567 -->|Depends on| n267
  n567 -->|Depends on| n257
  n567 -->|Depends on| n263
  n567 -->|Depends on| n265
  n567 -->|Depends on| n269
  n567 -->|Depends on| n268
  n567 -->|Depends on| n251
  n567 -->|Depends on| n259
  n567 -->|Depends on| n305
  n568 -->|Serves| n440
  n568 -->|Applied by| n564
  n568 -->|Applied by| n582
  n568 -->|Applied by| n574
  n568 -->|Applied by| n560
  n568 -->|Applied by| n44
  n569 -->|Serves| n440
  n569 -->|Implements| n563
  n569 -->|Depends on| n282
  n569 -->|Depends on| n154
  n569 -->|Depends on| n7
  n569 -->|Depends on| n266
  n569 -->|Depends on| n277
  n569 -->|Depends on| n285
  n569 -->|Depends on| n289
  n569 -->|Depends on| n284
  n569 -->|Depends on| n276
  n569 -->|Depends on| n287
  n569 -->|Depends on| n278
  n569 -->|Depends on| n280
  n569 -->|Depends on| n281
  n569 -->|Depends on| n286
  n569 -->|Depends on| n294
  n569 -->|Depends on| n305
  n570 -->|Serves| n441
  n570 -->|Applied by| n564
  n570 -->|Applied by| n582
  n570 -->|Applied by| n574
  n570 -->|Applied by| n561
  n570 -->|Applied by| n562
  n570 -->|Applied by| n581
  n570 -->|Applied by| n580
  n570 -->|Applied by| n573
  n570 -->|Applied by| n572
  n572 -->|Chooses| n578
  n572 -->|In| n30
  n572 -->|In| n52
  n572 -->|Serves| n441
  n573 -->|Chooses| n566
  n573 -->|In| n30
  n573 -->|In| n52
  n573 -->|Serves| n441
  n574 -->|Serves| n440
  n574 -->|Depends on| n560
  n574 -->|Depends on| n575
  n574 -->|Depends on| n305
  n576 -->|Serves| n440
  n576 -->|Implements| n583
  n576 -->|Depends on| n579
  n576 -->|Depends on| n672
  n576 -->|Depends on| n670
  n576 -->|Depends on| n156
  n576 -->|Depends on| n668
  n576 -->|Depends on| n666
  n576 -->|Depends on| n667
  n576 -->|Depends on| n665
  n576 -->|Depends on| n671
  n576 -->|Depends on| n305
  n578 -->|Serves| n440
  n578 -->|Implements| n571
  n578 -->|Depends on| n273
  n578 -->|Depends on| n275
  n578 -->|Depends on| n352
  n578 -->|Depends on| n1
  n578 -->|Depends on| n11
  n578 -->|Depends on| n2
  n578 -->|Depends on| n210
  n578 -->|Depends on| n222
  n578 -->|Depends on| n219
  n578 -->|Depends on| n201
  n578 -->|Depends on| n207
  n578 -->|Depends on| n560
  n578 -->|Depends on| n294
  n578 -->|Depends on| n303
  n578 -->|Depends on| n305
  n578 -->|Depends on| n156
  n580 -->|Chooses| n584
  n580 -->|In| n30
  n580 -->|In| n52
  n580 -->|Serves| n441
  n581 -->|Chooses| n576
  n581 -->|In| n30
  n581 -->|In| n52
  n581 -->|Serves| n441
  n582 -->|Serves| n440
  n582 -->|Depends on| n560
  n582 -->|Depends on| n583
  n582 -->|Depends on| n305
  n584 -->|Serves| n440
  n584 -->|Implements| n579
  n584 -->|Depends on| n560
  n584 -->|Depends on| n670
  n584 -->|Depends on| n156
  n584 -->|Depends on| n668
  n584 -->|Depends on| n666
  n584 -->|Depends on| n673
  n584 -->|Depends on| n669
  n584 -->|Depends on| n294
  n584 -->|Depends on| n305
  n585 -->|Verifies| n163
  n585 -->|Verifies| n190
  n585 -->|Verifies| n161
  n585 -->|Verifies| n703
  n585 -->|In| n52
  n585 -->|Depends on| n163
  n585 -->|Depends on| n41
  n585 -->|Depends on| n161
  n585 -->|Depends on| n139
  n585 -->|Depends on| n586
  n585 -->|Depends on| n306
  n587 -->|Verifies| n110
  n587 -->|Verifies| n120
  n587 -->|Verifies| n162
  n587 -->|Verifies| n189
  n587 -->|Verifies| n564
  n587 -->|Verifies| n560
  n587 -->|Verifies| n567
  n587 -->|Verifies| n569
  n587 -->|Verifies| n178
  n587 -->|Verifies| n177
  n587 -->|Verifies| n371
  n587 -->|Verifies| n374
  n587 -->|Verifies| n400
  n587 -->|In| n52
  n587 -->|Depends on| n110
  n587 -->|Depends on| n593
  n587 -->|Depends on| n56
  n587 -->|Depends on| n51
  n587 -->|Depends on| n142
  n587 -->|Depends on| n21
  n587 -->|Depends on| n39
  n587 -->|Depends on| n41
  n587 -->|Depends on| n147
  n587 -->|Depends on| n291
  n587 -->|Depends on| n306
  n588 -->|Verifies| n163
  n588 -->|Verifies| n182
  n588 -->|Verifies| n186
  n588 -->|Verifies| n190
  n588 -->|Verifies| n173
  n588 -->|Verifies| n393
  n588 -->|Verifies| n406
  n588 -->|Verifies| n404
  n588 -->|Verifies| n371
  n588 -->|Verifies| n380
  n588 -->|Verifies| n362
  n588 -->|Verifies| n394
  n588 -->|In| n52
  n588 -->|Depends on| n163
  n588 -->|Depends on| n41
  n588 -->|Depends on| n17
  n588 -->|Depends on| n592
  n588 -->|Depends on| n306
  n589 -->|Verifies| n294
  n589 -->|Verifies| n301
  n589 -->|Verifies| n159
  n589 -->|Verifies| n160
  n589 -->|Verifies| n156
  n589 -->|Verifies| n321
  n589 -->|In| n52
  n589 -->|Depends on| n294
  n589 -->|Depends on| n301
  n589 -->|Depends on| n159
  n589 -->|Depends on| n160
  n589 -->|Depends on| n156
  n589 -->|Depends on| n299
  n589 -->|Depends on| n321
  n589 -->|Depends on| n590
  n589 -->|Depends on| n306
  n591 -->|Verifies| n164
  n591 -->|Verifies| n172
  n591 -->|Verifies| n171
  n591 -->|Verifies| n184
  n591 -->|Verifies| n181
  n591 -->|In| n52
  n591 -->|Depends on| n164
  n591 -->|Depends on| n172
  n591 -->|Depends on| n171
  n591 -->|Depends on| n184
  n591 -->|Depends on| n181
  n591 -->|Depends on| n595
  n591 -->|Depends on| n306
  n594 -->|Verifies| n175
  n594 -->|In| n52
  n594 -->|Depends on| n175
  n594 -->|Depends on| n163
  n594 -->|Depends on| n41
  n594 -->|Depends on| n17
  n594 -->|Depends on| n306
  n596 -->|Serves| n440
  n596 -->|Part of| n635
  n596 -->|Depends on| n634
  n596 -->|Depends on| n614
  n596 -->|Depends on| n630
  n597 -->|Serves| n440
  n598 -->|Serves| n440
  n599 -->|Serves| n440
  n600 -->|Checks| n603
  n600 -->|Run by| n131
  n600 -->|Signed by| n615
  n601 -->|Checks| n603
  n601 -->|Run by| n114
  n601 -->|Signed by| n615
  n601 -->|Verifies| n355
  n601 -->|Verifies| n357
  n601 -->|Verifies| n356
  n601 -->|Verifies| n382
  n601 -->|Verifies| n383
  n601 -->|Verifies| n384
  n601 -->|Verifies| n401
  n601 -->|Verifies| n389
  n601 -->|Verifies| n388
  n601 -->|Verifies| n378
  n601 -->|Verifies| n399
  n602 -->|Serves| n440
  n603 -->|Produced by| n54
  n604 -->|Serves| n440
  n605 -->|Serves| n440
  n606 -->|Its obligations| n605
  n606 -->|Its obligations| n613
  n606 -->|Its obligations| n597
  n606 -->|Its obligations| n599
  n606 -->|Its obligations| n598
  n606 -->|Its obligations| n604
  n606 -->|Its obligations| n602
  n607 -->|Produced by| n117
  n607 -->|Carries| n36
  n609 -->|Checks| n607
  n609 -->|Run by| n619
  n609 -->|Signed by| n615
  n609 -->|Verifies| n63
  n609 -->|Verifies| n62
  n609 -->|Verifies| n61
  n609 -->|Verifies| n60
  n609 -->|Verifies| n59
  n609 -->|Verifies| n57
  n609 -->|Verifies| n58
  n611 -->|Serves| n440
  n611 -->|Depends on| n341
  n611 -->|Depends on| n273
  n611 -->|Depends on| n199
  n612 -->|Ships| n633
  n612 -->|Programs assembled for| n30
  n612 -->|Follows the policy| n616
  n613 -->|Serves| n440
  n616 -->|Its obligations| n605
  n616 -->|Its obligations| n598
  n617 -->|Ships| n603
  n617 -->|Ships| n620
  n617 -->|Ships| n607
  n617 -->|Deployed by| n104
  n617 -->|Programs assembled for| n30
  n617 -->|Follows the policy| n606
  n618 -->|Verifies| n619
  n618 -->|Verifies| n611
  n618 -->|In| n52
  n618 -->|Depends on| n619
  n618 -->|Depends on| n607
  n618 -->|Depends on| n611
  n618 -->|Depends on| n630
  n618 -->|Depends on| n610
  n618 -->|Depends on| n306
  n619 -->|Serves| n440
  n619 -->|Part of| n635
  n619 -->|Depends on| n607
  n619 -->|Depends on| n299
  n619 -->|Depends on| n611
  n619 -->|Depends on| n608
  n619 -->|Depends on| n630
  n620 -->|Produced by| n36
  n620 -->|Assembled for| n15
  n622 -->|Runs elsewhere| n612
  n622 -->|Its writer's settings| n621
  n623 -->|Serves| n440
  n623 -->|Part of| n635
  n623 -->|Depends on| n634
  n623 -->|Depends on| n614
  n623 -->|Depends on| n630
  n624 -->|Run by| n623
  n624 -->|Signed by| n615
  n626 -->|Requires| n624
  n626 -->|Deployed by| n596
  n626 -->|Programs assembled for| n30
  n626 -->|Follows the policy| n631
  n627 -->|Ships| n622
  n628 -->|In| n52
  n629 -->|In| n30
  n630 -->|Written in| n299
  n631 -->|Its obligations| n605
  n631 -->|Its obligations| n598
  n631 -->|Its obligations| n602
  n632 -->|Verifies| n623
  n632 -->|Verifies| n596
  n632 -->|In| n52
  n632 -->|Depends on| n623
  n632 -->|Depends on| n596
  n632 -->|Depends on| n634
  n632 -->|Depends on| n614
  n632 -->|Depends on| n625
  n632 -->|Depends on| n630
  n632 -->|Depends on| n306
  n635 -->|Deployed in| n30
  n636 -->|Implements| n48
  n636 -->|Depends on| n25
  n638 -->|Serves| n440
  n638 -->|Depends on| n142
  n638 -->|Depends on| n643
  n638 -->|Depends on| n21
  n638 -->|Depends on| n39
  n638 -->|Depends on| n25
  n638 -->|Depends on| n140
  n638 -->|Depends on| n171
  n638 -->|Depends on| n48
  n639 -->|Chooses| n636
  n639 -->|In| n30
  n639 -->|In| n52
  n639 -->|Serves| n440
  n640 -->|Serves| n440
  n640 -->|Depends on| n147
  n640 -->|Depends on| n182
  n640 -->|Depends on| n142
  n640 -->|Depends on| n194
  n640 -->|Depends on| n21
  n640 -->|Depends on| n39
  n641 -->|Refines| n440
  n642 -->|Accepts| n641
  n647 -->|Serves| n440
  n647 -->|Depends on| n143
  n647 -->|Depends on| n296
  n651 -->|Written in| n299
  n652 -->|Serves| n440
  n652 -->|Applied by| n654
  n652 -->|Applied by| n49
  n653 -->|Serves| n440
  n653 -->|Applied by| n654
  n653 -->|Applied by| n647
  n653 -->|Applied by| n49
  n654 -->|Serves| n440
  n654 -->|Serves| n447
  n654 -->|Depends on| n49
  n654 -->|Depends on| n648
  n654 -->|Depends on| n651
  n654 -->|Depends on| n649
  n654 -->|Depends on| n650
  n654 -->|Depends on| n644
  n654 -->|Depends on| n21
  n654 -->|Depends on| n27
  n654 -->|Depends on| n46
  n654 -->|Depends on| n142
  n654 -->|Depends on| n39
  n654 -->|Depends on| n25
  n655 -->|Defined by| n658
  n655 -->|Read in| n661
  n655 -->|Depends on| n658
  n656 -->|Defined by| n658
  n656 -->|Read in| n661
  n656 -->|Depends on| n658
  n657 -->|Defined by| n658
  n657 -->|Read in| n661
  n657 -->|Depends on| n658
  n657 -->|Depends on| n661
  n659 -->|Defined by| n658
  n659 -->|Read in| n661
  n659 -->|Depends on| n658
  n659 -->|Depends on| n657
  n660 -->|Defined by| n658
  n660 -->|Read in| n661
  n660 -->|Depends on| n658
  n660 -->|Depends on| n662
  n660 -->|Depends on| n657
  n661 -->|Defined by| n658
  n661 -->|Queries written in| n645
  n661 -->|Read by| n654
  n661 -->|Uses| n312
  n663 -->|Serves| n440
  n663 -->|Depends on| n658
  n663 -->|Depends on| n662
  n663 -->|Depends on| n142
  n663 -->|Depends on| n656
  n663 -->|Depends on| n657
  n663 -->|Depends on| n659
  n663 -->|Depends on| n655
  n663 -->|Depends on| n660
  n663 -->|Depends on| n39
  n663 -->|Depends on| n40
  n663 -->|Depends on| n294
  n663 -->|Depends on| n296
  n665 -->|Defined by| n672
  n665 -->|Depends on| n672
  n666 -->|Defined by| n672
  n666 -->|Depends on| n672
  n666 -->|Depends on| n668
  n666 -->|Depends on| n670
  n667 -->|Defined by| n672
  n667 -->|Depends on| n672
  n668 -->|Defined by| n672
  n668 -->|Depends on| n672
  n668 -->|Depends on| n670
  n669 -->|Defined by| n672
  n669 -->|Depends on| n672
  n669 -->|Depends on| n664
  n671 -->|Defined by| n672
  n671 -->|Depends on| n672
  n673 -->|Defined by| n672
  n673 -->|Depends on| n672
  n673 -->|Depends on| n664
  n674 -->|Defined by| n702
  n674 -->|Read in| n700
  n674 -->|Depends on| n702
  n675 -->|Defined by| n702
  n675 -->|Read in| n700
  n675 -->|Depends on| n702
  n676 -->|Defined by| n702
  n676 -->|Read in| n700
  n676 -->|Depends on| n702
  n677 -->|Defined by| n702
  n677 -->|Read in| n700
  n677 -->|Depends on| n702
  n678 -->|Defined by| n702
  n678 -->|Read in| n700
  n678 -->|Depends on| n702
  n679 -->|Defined by| n702
  n679 -->|Read in| n700
  n679 -->|Depends on| n702
  n680 -->|Defined by| n702
  n680 -->|Read in| n700
  n680 -->|Depends on| n702
  n681 -->|Defined by| n702
  n681 -->|Read in| n700
  n681 -->|Depends on| n702
  n681 -->|Depends on| n699
  n682 -->|Defined by| n702
  n682 -->|Read in| n700
  n682 -->|Depends on| n702
  n683 -->|Defined by| n702
  n683 -->|Read in| n700
  n683 -->|Depends on| n702
  n684 -->|Defined by| n702
  n684 -->|Read in| n700
  n684 -->|Depends on| n702
  n685 -->|Defined by| n702
  n685 -->|Read in| n700
  n685 -->|Depends on| n702
  n686 -->|Defined by| n702
  n686 -->|Read in| n700
  n686 -->|Depends on| n702
  n687 -->|Defined by| n702
  n687 -->|Read in| n700
  n687 -->|Depends on| n702
  n688 -->|Defined by| n702
  n688 -->|Read in| n700
  n688 -->|Depends on| n702
  n689 -->|Defined by| n702
  n689 -->|Read in| n700
  n689 -->|Depends on| n702
  n689 -->|Depends on| n699
  n690 -->|Defined by| n702
  n690 -->|Read in| n700
  n690 -->|Depends on| n702
  n691 -->|Defined by| n702
  n691 -->|Read in| n700
  n691 -->|Depends on| n702
  n692 -->|Defined by| n702
  n692 -->|Read in| n700
  n692 -->|Depends on| n702
  n693 -->|Defined by| n702
  n693 -->|Read in| n700
  n693 -->|Depends on| n702
  n694 -->|Defined by| n702
  n694 -->|Read in| n700
  n694 -->|Depends on| n702
  n695 -->|Defined by| n702
  n695 -->|Read in| n700
  n695 -->|Depends on| n702
  n697 -->|Defined by| n702
  n697 -->|Read in| n700
  n697 -->|Depends on| n702
  n697 -->|Depends on| n699
  n698 -->|Defined by| n702
  n698 -->|Read in| n700
  n698 -->|Depends on| n702
  n699 -->|Defined by| n702
  n699 -->|Read in| n700
  n699 -->|Depends on| n702
  n700 -->|Queries written in| n645
  n700 -->|Read by| n654
  n700 -->|Watches the globals| n705
  n700 -->|Uses| n319
  n701 -->|Serves| n440
  n703 -->|Serves| n440
  n703 -->|Depends on| n700
  n703 -->|Depends on| n702
  n703 -->|Depends on| n139
  n703 -->|Depends on| n696
  n703 -->|Depends on| n146
  n703 -->|Depends on| n145
  n703 -->|Depends on| n686
  n703 -->|Depends on| n699
  n703 -->|Depends on| n687
  n703 -->|Depends on| n693
  n703 -->|Depends on| n679
  n703 -->|Depends on| n678
  n703 -->|Depends on| n695
  n703 -->|Depends on| n697
  n703 -->|Depends on| n691
  n703 -->|Depends on| n674
  n703 -->|Depends on| n680
  n703 -->|Depends on| n689
  n703 -->|Depends on| n681
  n703 -->|Depends on| n675
  n703 -->|Depends on| n694
  n703 -->|Depends on| n692
  n703 -->|Depends on| n704
  n703 -->|Depends on| n684
  n703 -->|Depends on| n698
  n703 -->|Depends on| n676
  n703 -->|Depends on| n685
  n703 -->|Depends on| n677
  n703 -->|Depends on| n148
  n703 -->|Depends on| n39
  n703 -->|Depends on| n40
  n703 -->|Depends on| n294
  n703 -->|Depends on| n296
  n704 -->|Defined by| n702
  n704 -->|Read in| n700
  n704 -->|Depends on| n702
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
