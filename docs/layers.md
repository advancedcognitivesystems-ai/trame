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
    n80["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n81["A library released<br/><small>Scenario</small>"]:::held
    n82["The manifest written<br/><small>Scenario</small>"]:::held
    n83["The packages audited<br/><small>Scenario</small>"]:::held
    n84["The packages upgraded<br/><small>Scenario</small>"]:::held
    n85["The page delivered<br/><small>Scenario</small>"]:::held
    n86["The page exported<br/><small>Scenario</small>"]:::held
    n87["The page of the graph<br/><small>Scenario</small>"]:::held
    n88["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n89["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n90["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n91["A project started<br/><small>Scenario</small>"]:::held
    n92["The registry filled<br/><small>Scenario</small>"]:::held
    n93["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n94["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n95["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n96["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n97["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n98["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n99["A value amended<br/><small>Scenario</small>"]:::held
    n100["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n101["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n102["Advance<br/><small>Entry point</small>"]:::held
    n103["Amend<br/><small>Entry point</small>"]:::held
    n104["An amendment prepared<br/><small>Function</small>"]:::held
    n105["Assemble a component<br/><small>Entry point</small>"]:::held
    n106["Assembler<br/><small>Function</small>"]:::held
    n107["Audit the packages<br/><small>Entry point</small>"]:::held
    n108["Build<br/><small>Entry point</small>"]:::held
    n109["Two builds compared<br/><small>Function</small>"]:::held
    n110["Deliver<br/><small>Entry point</small>"]:::held
    n111["Start trame dev<br/><small>Entry point</small>"]:::held
    n112["Ask the machine<br/><small>Entry point</small>"]:::held
    n113["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n114["Payload<br/><small>Entry point</small>"]:::held
    n115["Export the page<br/><small>Entry point</small>"]:::held
    n116["Start a project<br/><small>Entry point</small>"]:::held
    n117["Plan<br/><small>Entry point</small>"]:::held
    n118["Preparation<br/><small>Function</small>"]:::held
    n119["Publish<br/><small>Entry point</small>"]:::held
    n120["Record evidence<br/><small>Entry point</small>"]:::held
    n121["A module of references<br/><small>Function</small>"]:::held
    n122["Fill the registry<br/><small>Entry point</small>"]:::held
    n123["Release a version<br/><small>Entry point</small>"]:::held
    n124["Render a view<br/><small>Function</small>"]:::held
    n125["Run a component<br/><small>Entry point</small>"]:::held
    n126["Ship<br/><small>Entry point</small>"]:::held
    n127["Show a view<br/><small>Entry point</small>"]:::held
    n128["Take the snapshot<br/><small>Entry point</small>"]:::held
    n129["Test the laws<br/><small>Entry point</small>"]:::held
    n130["Upgrade<br/><small>Entry point</small>"]:::held
    n131["View by its name<br/><small>Entry point</small>"]:::held
    n132["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n133["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n134["Default rank<br/><small>Decision</small>"]:::neutral
    n135["Documentation comment<br/><small>Decision</small>"]:::neutral
    n136["Names of the documents<br/><small>Standard</small>"]:::neutral
    n137["The frozen API<br/><small>Standard</small>"]:::neutral
    n138["JSON formatting<br/><small>Decision</small>"]:::neutral
    n139["The language's names<br/><small>Decision</small>"]:::neutral
    n140["Project layout<br/><small>Decision</small>"]:::neutral
    n141["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n142["How a project starts<br/><small>Decision</small>"]:::neutral
    n143["Trame references<br/><small>Standard</small>"]:::neutral
    n144["Names of steps<br/><small>Decision</small>"]:::neutral
    n145["Trame's commands<br/><small>Standard</small>"]:::neutral
    n146["Trame's environment<br/><small>Standard</small>"]:::neutral
    n147["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n148["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n149["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n150["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n151["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n152["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n153["How a number is written<br/><small>Decision</small>"]:::neutral
    n154["Punctuation of documents<br/><small>Function</small>"]:::held
    n155["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n156["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n157["Values with their units<br/><small>Function</small>"]:::held
    n158["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n159["Assembly<br/><small>Function</small>"]:::held
    n160["Compilation API<br/><small>Function</small>"]:::held
    n161["Compiler<br/><small>Function</small>"]:::held
    n162["Cycles<br/><small>Function</small>"]:::held
    n163["Date bundle<br/><small>Function</small>"]:::held
    n164["trame dev server<br/><small>Function</small>"]:::held
    n165["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n166["Differences<br/><small>Function</small>"]:::held
    n167["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n168["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n169["Fingerprints<br/><small>Function</small>"]:::held
    n170["Pseudo-random generator<br/><small>Function</small>"]:::held
    n171["Graph<br/><small>Function</small>"]:::held
    n172["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n173["Laws<br/><small>Function</small>"]:::held
    n174["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n175["Lock<br/><small>Function</small>"]:::held
    n176["Machine outputs<br/><small>Function</small>"]:::held
    n177["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n178["Payload<br/><small>Function</small>"]:::held
    n179["Positions<br/><small>Function</small>"]:::held
    n180["Project<br/><small>Function</small>"]:::held
    n181["The runs of a project<br/><small>Function</small>"]:::held
    n182["References<br/><small>Function</small>"]:::held
    n183["A shipment's pipeline<br/><small>Function</small>"]:::held
    n184["Static reading<br/><small>Function</small>"]:::held
    n185["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n186["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n187["Views<br/><small>Function</small>"]:::held
    n188["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n189["Accept a candidate<br/><small>Requirement</small>"]:::held
    n190["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n191["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n192["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n193["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n194["Records of the releases<br/><small>Function</small>"]:::held
    n195["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n196["Attribute presence<br/><small>Syntax element</small>"]:::held
    n197["Attribute selector<br/><small>Syntax element</small>"]:::held
    n198["Class selector<br/><small>Syntax element</small>"]:::held
    n199["Declaration<br/><small>Syntax element</small>"]:::held
    n200["Rule<br/><small>Syntax element</small>"]:::held
    n201["CSS style sheets<br/><small>Language</small>"]:::held
    n202["Variable<br/><small>Syntax element</small>"]:::held
    n203["Custom property<br/><small>Syntax element</small>"]:::held
    n204["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n205["Escaped text<br/><small>Syntax element</small>"]:::held
    n206["Attributes<br/><small>Syntax element</small>"]:::held
    n207["Element over several lines<br/><small>Syntax element</small>"]:::held
    n208["HTML element<br/><small>Syntax element</small>"]:::held
    n209["End tag<br/><small>Syntax element</small>"]:::held
    n210["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n211["HTML markup<br/><small>Language</small>"]:::held
    n212["Start tag<br/><small>Syntax element</small>"]:::held
    n213["JSON in a script<br/><small>Syntax element</small>"]:::held
    n214["Media feature<br/><small>Syntax element</small>"]:::held
    n215["Media rule<br/><small>Syntax element</small>"]:::held
    n216["Negation<br/><small>Syntax element</small>"]:::held
    n217["Path data<br/><small>Syntax element</small>"]:::held
    n218["Script<br/><small>Syntax element</small>"]:::held
    n219["Selector list<br/><small>Syntax element</small>"]:::held
    n220["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n221["Drivers<br/><small>Function</small>"]:::held
    n222["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n223["Answers without crashing<br/><small>Requirement</small>"]:::held
    n224["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n225["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n226["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n227["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n228["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n229["Complete declaration<br/><small>Requirement</small>"]:::held
    n230["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n231["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n232["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n233["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n234["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n235["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n236["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n237["Same input, same answer<br/><small>Requirement</small>"]:::held
    n238["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n239["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n240["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n241["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n242["What belongs to a library<br/><small>Requirement</small>"]:::held
    n243["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n244["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n245["A release is settled<br/><small>Requirement</small>"]:::held
    n246["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n247["Anchor<br/><small>Syntax element</small>"]:::held
    n248["Backtick string<br/><small>Syntax element</small>"]:::held
    n249["Blank line<br/><small>Syntax element</small>"]:::held
    n250["Block quote<br/><small>Syntax element</small>"]:::held
    n251["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n252["Code block<br/><small>Syntax element</small>"]:::held
    n253["Code span<br/><small>Syntax element</small>"]:::held
    n254["CommonMark<br/><small>Standard</small>"]:::neutral
    n255["Collapsible block<br/><small>Syntax element</small>"]:::held
    n256["Emphasis<br/><small>Syntax element</small>"]:::held
    n257["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n258["Heading<br/><small>Syntax element</small>"]:::held
    n259["Link<br/><small>Syntax element</small>"]:::held
    n260["List item<br/><small>Syntax element</small>"]:::held
    n261["Relative reference<br/><small>Syntax element</small>"]:::held
    n262["Small text<br/><small>Syntax element</small>"]:::held
    n263["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n264["Table<br/><small>Syntax element</small>"]:::held
    n265["Table cell<br/><small>Syntax element</small>"]:::held
    n266["Delimiter row<br/><small>Syntax element</small>"]:::held
    n267["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n268["Around the documents<br/><small>Decision</small>"]:::neutral
    n269["Documents in the page<br/><small>Decision</small>"]:::neutral
    n270["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n271["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n272["Class definition<br/><small>Syntax element</small>"]:::held
    n273["Flowchart<br/><small>Syntax element</small>"]:::held
    n274["Gantt chart<br/><small>Syntax element</small>"]:::held
    n275["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n276["Section<br/><small>Syntax element</small>"]:::held
    n277["Task<br/><small>Syntax element</small>"]:::held
    n278["Mermaid<br/><small>Standard</small>"]:::neutral
    n279["Label<br/><small>Syntax element</small>"]:::held
    n280["Link<br/><small>Syntax element</small>"]:::held
    n281["Node<br/><small>Syntax element</small>"]:::held
    n282["Milestone<br/><small>Syntax element</small>"]:::held
    n283["Node style<br/><small>Syntax element</small>"]:::held
    n284["Style properties<br/><small>Syntax element</small>"]:::held
    n285["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n286["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n287["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n288["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n289["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n290["Dates<br/><small>Function</small>"]:::held
    n291["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n292["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n293["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n294["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n295["Language<br/><small>Decision</small>"]:::neutral
    n296["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n297["Lists<br/><small>Function</small>"]:::held
    n298["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n299["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n300["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n301["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n302["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n303["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n304["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n305["Grammar of CSS<br/><small>Package</small>"]:::held
    n306["esbuild<br/><small>Package</small>"]:::held
    n307["Grammar of HCL<br/><small>Package</small>"]:::held
    n308["Grammar of HTML<br/><small>Package</small>"]:::held
    n309["Types of Node.js<br/><small>Package</small>"]:::held
    n310["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n311["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n312["The standard library<br/><small>Package</small>"]:::neutral
    n313["tsx<br/><small>Package</small>"]:::held
    n314["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n315["TypeScript<br/><small>Package</small>"]:::held
    n316["Order of versions<br/><small>Function</small>"]:::held
    n317["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n318["Banner<br/><small>Syntax element</small>"]:::held
    n319["Brand<br/><small>Syntax element</small>"]:::held
    n320["State of the compilation<br/><small>Syntax element</small>"]:::held
    n321["Dates<br/><small>Syntax element</small>"]:::held
    n322["Head of the document<br/><small>Syntax element</small>"]:::held
    n323["Document picker<br/><small>Syntax element</small>"]:::held
    n324["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n325["Fonts<br/><small>Syntax element</small>"]:::held
    n326["Logo<br/><small>Syntax element</small>"]:::held
    n327["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n328["Main area<br/><small>Syntax element</small>"]:::held
    n329["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n330["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n331["Navigation<br/><small>Syntax element</small>"]:::held
    n332["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n333["Page<br/><small>Function</small>"]:::held
    n334["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n335["Document of the page<br/><small>Syntax element</small>"]:::held
    n336["Regions of the page<br/><small>Decision</small>"]:::neutral
    n337["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n338["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n339["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n340["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n341["Shell<br/><small>Syntax element</small>"]:::held
    n342["Side bar<br/><small>Syntax element</small>"]:::held
    n343["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n344["Colours of a status<br/><small>Syntax element</small>"]:::held
    n345["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n346["Theme<br/><small>Syntax element</small>"]:::held
    n347["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n348["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n349["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n350["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n351["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n352["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n353["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n354["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n355["esbuild<br/><small>Implementation</small>"]:::held
    n356["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n357["Example process<br/><small>Function</small>"]:::held
    n358["Example project<br/><small>Decision</small>"]:::neutral
    n359["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n360["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n361["Amendments in place<br/><small>Implementation</small>"]:::held
    n362["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n363["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n364["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n365["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n366["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n367["A server in memory<br/><small>Function</small>"]:::held
    n368["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n369["Terminal in memory<br/><small>Function</small>"]:::held
    n370["Command line<br/><small>Implementation</small>"]:::held
    n371["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n372["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n373["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n374["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n375["Node paths<br/><small>Implementation</small>"]:::held
    n376["NodePlatform<br/><small>Technical choice</small>"]:::held
    n377["Node process<br/><small>Implementation</small>"]:::unknown
    n378["Node programs<br/><small>Implementation</small>"]:::unknown
    n379["Node terminal<br/><small>Implementation</small>"]:::unknown
    n380["Node timer<br/><small>Implementation</small>"]:::held
    n381["No installer in test<br/><small>Implementation</small>"]:::held
    n382["No registry in test<br/><small>Function</small>"]:::held
    n383["npm installs<br/><small>Implementation</small>"]:::unknown
    n384["npm's reports<br/><small>Implementation</small>"]:::unknown
    n385["Packages by their origin<br/><small>Implementation</small>"]:::held
    n386["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n387["Page resources<br/><small>Implementation</small>"]:::held
    n388["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n389["Results kept in the process<br/><small>Implementation</small>"]:::held
    n390["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n391["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n392["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n393["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n394["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n395["Stopped clock<br/><small>Function</small>"]:::held
    n396["System clock<br/><small>Implementation</small>"]:::unknown
    n397["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n398["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n399["Trame's prelude<br/><small>Implementation</small>"]:::held
    n400["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n401["tsx loader<br/><small>Implementation</small>"]:::held
    n402["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n403["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n404["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n405["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n406["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n407["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n408["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n409["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n410["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n411["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n412["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n413["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n414["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n415["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n416["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n417["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n418["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n419["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n420["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n421["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n422["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n423["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n424["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n425["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n426["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n427["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n428["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n429["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n430["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n431["Candidate dates<br/><small>Decision</small>"]:::neutral
    n432["Claim sets<br/><small>Decision</small>"]:::neutral
    n433["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n434["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n435["A specification that runs<br/><small>Goal</small>"]:::neutral
    n436["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n437["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n438["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n439["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n440["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n441["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n442["A single source of truth<br/><small>Goal</small>"]:::neutral
    n443["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n444["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n445["Generation 1<br/><small>Release</small>"]:::neutral
    n446["Generation 10<br/><small>Release</small>"]:::neutral
    n447["Generation 100<br/><small>Release</small>"]:::neutral
    n448["Generation 101<br/><small>Release</small>"]:::neutral
    n449["Generation 102<br/><small>Release</small>"]:::neutral
    n450["Generation 11<br/><small>Release</small>"]:::neutral
    n451["Generation 12<br/><small>Release</small>"]:::neutral
    n452["Generation 13<br/><small>Release</small>"]:::neutral
    n453["Generation 14<br/><small>Release</small>"]:::neutral
    n454["Generation 15<br/><small>Release</small>"]:::neutral
    n455["Generation 16<br/><small>Release</small>"]:::neutral
    n456["Generation 17<br/><small>Release</small>"]:::neutral
    n457["Generation 18<br/><small>Release</small>"]:::neutral
    n458["Generation 19<br/><small>Release</small>"]:::neutral
    n459["Generation 2<br/><small>Release</small>"]:::neutral
    n460["Generation 20<br/><small>Release</small>"]:::neutral
    n461["Generation 21<br/><small>Release</small>"]:::neutral
    n462["Generation 22<br/><small>Release</small>"]:::neutral
    n463["Generation 23<br/><small>Release</small>"]:::neutral
    n464["Generation 24<br/><small>Release</small>"]:::neutral
    n465["Generation 25<br/><small>Release</small>"]:::neutral
    n466["Generation 26<br/><small>Release</small>"]:::neutral
    n467["Generation 27<br/><small>Release</small>"]:::neutral
    n468["Generation 28<br/><small>Release</small>"]:::neutral
    n469["Generation 29<br/><small>Release</small>"]:::neutral
    n470["Generation 3<br/><small>Release</small>"]:::neutral
    n471["Generation 30<br/><small>Release</small>"]:::neutral
    n472["Generation 31<br/><small>Release</small>"]:::neutral
    n473["Generation 32<br/><small>Release</small>"]:::neutral
    n474["Generation 33<br/><small>Release</small>"]:::neutral
    n475["Generation 34<br/><small>Release</small>"]:::neutral
    n476["Generation 35<br/><small>Release</small>"]:::neutral
    n477["Generation 36<br/><small>Release</small>"]:::neutral
    n478["Generation 37<br/><small>Release</small>"]:::neutral
    n479["Generation 38<br/><small>Release</small>"]:::neutral
    n480["Generation 39<br/><small>Release</small>"]:::neutral
    n481["Generation 4<br/><small>Release</small>"]:::neutral
    n482["Generation 40<br/><small>Release</small>"]:::neutral
    n483["Generation 41<br/><small>Release</small>"]:::neutral
    n484["Generation 42<br/><small>Release</small>"]:::neutral
    n485["Generation 43<br/><small>Release</small>"]:::neutral
    n486["Generation 44<br/><small>Release</small>"]:::neutral
    n487["Generation 45<br/><small>Release</small>"]:::neutral
    n488["Generation 46<br/><small>Release</small>"]:::neutral
    n489["Generation 47<br/><small>Release</small>"]:::neutral
    n490["Generation 48<br/><small>Release</small>"]:::neutral
    n491["Generation 49<br/><small>Release</small>"]:::neutral
    n492["Generation 5<br/><small>Release</small>"]:::neutral
    n493["Generation 50<br/><small>Release</small>"]:::neutral
    n494["Generation 51<br/><small>Release</small>"]:::neutral
    n495["Generation 52<br/><small>Release</small>"]:::neutral
    n496["Generation 53<br/><small>Release</small>"]:::neutral
    n497["Generation 54<br/><small>Release</small>"]:::neutral
    n498["Generation 55<br/><small>Release</small>"]:::neutral
    n499["Generation 56<br/><small>Release</small>"]:::neutral
    n500["Generation 57<br/><small>Release</small>"]:::neutral
    n501["Generation 58<br/><small>Release</small>"]:::neutral
    n502["Generation 59<br/><small>Release</small>"]:::neutral
    n503["Generation 6<br/><small>Release</small>"]:::neutral
    n504["Generation 60<br/><small>Release</small>"]:::neutral
    n505["Generation 61<br/><small>Release</small>"]:::neutral
    n506["Generation 62<br/><small>Release</small>"]:::neutral
    n507["Generation 63<br/><small>Release</small>"]:::neutral
    n508["Generation 64<br/><small>Release</small>"]:::neutral
    n509["Generation 65<br/><small>Release</small>"]:::neutral
    n510["Generation 66<br/><small>Release</small>"]:::neutral
    n511["Generation 67<br/><small>Release</small>"]:::neutral
    n512["Generation 68<br/><small>Release</small>"]:::neutral
    n513["Generation 69<br/><small>Release</small>"]:::neutral
    n514["Generation 7<br/><small>Release</small>"]:::neutral
    n515["Generation 70<br/><small>Release</small>"]:::neutral
    n516["Generation 71<br/><small>Release</small>"]:::neutral
    n517["Generation 72<br/><small>Release</small>"]:::neutral
    n518["Generation 73<br/><small>Release</small>"]:::neutral
    n519["Generation 74<br/><small>Release</small>"]:::neutral
    n520["Generation 75<br/><small>Release</small>"]:::neutral
    n521["Generation 76<br/><small>Release</small>"]:::neutral
    n522["Generation 77<br/><small>Release</small>"]:::neutral
    n523["Generation 78<br/><small>Release</small>"]:::neutral
    n524["Generation 79<br/><small>Release</small>"]:::neutral
    n525["Generation 8<br/><small>Release</small>"]:::neutral
    n526["Generation 80<br/><small>Release</small>"]:::neutral
    n527["Generation 81<br/><small>Release</small>"]:::neutral
    n528["Generation 82<br/><small>Release</small>"]:::neutral
    n529["Generation 83<br/><small>Release</small>"]:::neutral
    n530["Generation 84<br/><small>Release</small>"]:::neutral
    n531["Generation 85<br/><small>Release</small>"]:::neutral
    n532["Generation 86<br/><small>Release</small>"]:::neutral
    n533["Generation 87<br/><small>Release</small>"]:::neutral
    n534["Generation 88<br/><small>Release</small>"]:::neutral
    n535["Generation 89<br/><small>Release</small>"]:::neutral
    n536["Generation 9<br/><small>Release</small>"]:::neutral
    n537["Generation 90<br/><small>Release</small>"]:::neutral
    n538["Generation 91<br/><small>Release</small>"]:::neutral
    n539["Generation 92<br/><small>Release</small>"]:::neutral
    n540["Generation 93<br/><small>Release</small>"]:::neutral
    n541["Generation 94<br/><small>Release</small>"]:::neutral
    n542["Generation 95<br/><small>Release</small>"]:::neutral
    n543["Generation 96<br/><small>Release</small>"]:::neutral
    n544["Generation 97<br/><small>Release</small>"]:::neutral
    n545["Generation 98<br/><small>Release</small>"]:::neutral
    n546["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n547["Common rendering<br/><small>Function</small>"]:::held
    n548["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n549["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n550["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n551["Rendering of the files<br/><small>Function</small>"]:::held
    n552["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n553["HTML writer<br/><small>Function</small>"]:::held
    n554["Markdown writer<br/><small>Function</small>"]:::held
    n555["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n556["Mermaid diagrams<br/><small>Function</small>"]:::held
    n557["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n558["Figures of the page<br/><small>Port</small>"]:::neutral
    n559["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n560["The page in HTML<br/><small>Technical choice</small>"]:::held
    n561["Rendering in the page<br/><small>Function</small>"]:::held
    n562["Syntax of the page<br/><small>Port</small>"]:::neutral
    n563["Plain text writer<br/><small>Function</small>"]:::held
    n564["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n565["Figures in SVG<br/><small>Function</small>"]:::held
    n566["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n567["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n568["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n569["Rendering in the terminal<br/><small>Function</small>"]:::held
    n570["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n571["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n572["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n573["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n574["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n575["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n576["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n577["Shape of the example<br/><small>Decision</small>"]:::neutral
    n578["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n579["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n580["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n581["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n582["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n583["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n584["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n585["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n586["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n587["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n588["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n589["How a generation is made<br/><small>Policy</small>"]:::neutral
    n590["The graph page<br/><small>Artefact</small>"]:::unknown
    n591["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n592["The graph page opens<br/><small>Check</small>"]:::unknown
    n593["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n594["What the graph page is asked<br/><small>Function</small>"]:::held
    n595["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n596["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n597["The next generation<br/><small>Shipment</small>"]:::unknown
    n598["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n599["Open the graph page<br/><small>Entry point</small>"]:::held
    n600["The page's program<br/><small>Artefact</small>"]:::unknown
    n601["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n602["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n603["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n604["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n605["Attribution<br/><small>Function</small>"]:::held
    n606["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n607["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n608["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n609["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n610["Ship only what holds<br/><small>Requirement</small>"]:::held
    n611["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n612["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n613["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n614["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n615["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n616["Checks of a body<br/><small>Function</small>"]:::held
    n617["Captures<br/><small>Standard</small>"]:::neutral
    n618["Categories of literals<br/><small>Decision</small>"]:::neutral
    n619["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n620["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n621["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n622["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n623["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n624["Attribute<br/><small>Syntax element</small>"]:::held
    n625["Comment<br/><small>Syntax element</small>"]:::held
    n626["Text<br/><small>Syntax element</small>"]:::held
    n627["HCL<br/><small>Standard</small>"]:::neutral
    n628["Value<br/><small>Syntax element</small>"]:::held
    n629["Module call<br/><small>Syntax element</small>"]:::held
    n630["Terraform<br/><small>Language</small>"]:::held
    n631["Terraform modules<br/><small>Standard</small>"]:::neutral
    n632["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n633["Box drawing<br/><small>Standard</small>"]:::neutral
    n634["Code lines<br/><small>Syntax element</small>"]:::held
    n635["Columns<br/><small>Syntax element</small>"]:::held
    n636["Item line<br/><small>Syntax element</small>"]:::held
    n637["Padded cell<br/><small>Syntax element</small>"]:::held
    n638["Path step<br/><small>Syntax element</small>"]:::held
    n639["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n640["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n641["Terminal text<br/><small>Decision</small>"]:::neutral
    n642["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n643["List on several lines<br/><small>Syntax element</small>"]:::held
    n644["Type assertion<br/><small>Syntax element</small>"]:::held
    n645["Assignment<br/><small>Syntax element</small>"]:::held
    n646["Waiting<br/><small>Syntax element</small>"]:::held
    n647["Call<br/><small>Syntax element</small>"]:::held
    n648["Constant<br/><small>Syntax element</small>"]:::held
    n649["Default import<br/><small>Syntax element</small>"]:::held
    n650["Documentation comment<br/><small>Syntax element</small>"]:::held
    n651["Export<br/><small>Syntax element</small>"]:::held
    n652["Condition<br/><small>Syntax element</small>"]:::held
    n653["List on one line<br/><small>Syntax element</small>"]:::held
    n654["Comment<br/><small>Syntax element</small>"]:::held
    n655["Property access<br/><small>Syntax element</small>"]:::held
    n656["Title of a module<br/><small>Syntax element</small>"]:::held
    n657["Import of names<br/><small>Syntax element</small>"]:::held
    n658["Object on several lines<br/><small>Syntax element</small>"]:::held
    n659["Object<br/><small>Syntax element</small>"]:::held
    n660["Object type<br/><small>Syntax element</small>"]:::held
    n661["Optional property access<br/><small>Syntax element</small>"]:::held
    n662["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n663["Group<br/><small>Syntax element</small>"]:::held
    n664["Names of a program<br/><small>Decision</small>"]:::neutral
    n665["Property<br/><small>Syntax element</small>"]:::held
    n666["Strict inequality<br/><small>Syntax element</small>"]:::held
    n667["Text<br/><small>Syntax element</small>"]:::held
    n668["TypeScript<br/><small>Language</small>"]:::held
    n669["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n670["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n671["TypeScript writer<br/><small>Function</small>"]:::held
    n672["Union type<br/><small>Syntax element</small>"]:::held
    n673["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n347
  n57 -->|Depends on| n165
  n58 -->|Implements| n20
  n58 -->|Depends on| n332
  n59 -->|Implements| n24
  n59 -->|Depends on| n347
  n59 -->|Depends on| n165
  n60 -->|Implements| n37
  n60 -->|Depends on| n347
  n61 -->|Implements| n38
  n61 -->|Depends on| n214
  n62 -->|Serves| n435
  n62 -->|Depends on| n347
  n62 -->|Depends on| n269
  n62 -->|Depends on| n271
  n62 -->|Depends on| n270
  n62 -->|Depends on| n0
  n62 -->|Depends on| n208
  n62 -->|Depends on| n212
  n62 -->|Depends on| n220
  n62 -->|Depends on| n217
  n62 -->|Depends on| n199
  n62 -->|Depends on| n205
  n62 -->|Depends on| n547
  n62 -->|Depends on| n299
  n62 -->|Depends on| n301
  n62 -->|Depends on| n154
  n63 -->|Serves| n435
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n547
  n63 -->|Depends on| n347
  n63 -->|Depends on| n336
  n63 -->|Depends on| n339
  n63 -->|Depends on| n327
  n63 -->|Depends on| n269
  n63 -->|Depends on| n268
  n63 -->|Depends on| n270
  n63 -->|Depends on| n0
  n63 -->|Depends on| n136
  n63 -->|Depends on| n564
  n63 -->|Depends on| n154
  n63 -->|Depends on| n295
  n63 -->|Depends on| n208
  n63 -->|Depends on| n205
  n63 -->|Depends on| n197
  n63 -->|Depends on| n196
  n63 -->|Depends on| n219
  n63 -->|Depends on| n198
  n63 -->|Depends on| n299
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n436
  n65 -->|Serves| n435
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n102
  n66 -->|Verifies| n167
  n66 -->|In| n52
  n66 -->|Depends on| n102
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n140
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n145
  n66 -->|Depends on| n286
  n66 -->|Depends on| n67
  n66 -->|Depends on| n302
  n70 -->|Verifies| n623
  n70 -->|Verifies| n616
  n70 -->|Verifies| n404
  n70 -->|In| n52
  n70 -->|Depends on| n623
  n70 -->|Depends on| n616
  n70 -->|Depends on| n668
  n70 -->|Depends on| n71
  n70 -->|Depends on| n292
  n70 -->|Depends on| n302
  n72 -->|Verifies| n117
  n72 -->|In| n52
  n72 -->|Depends on| n108
  n72 -->|Depends on| n117
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n140
  n72 -->|Depends on| n89
  n72 -->|Depends on| n145
  n72 -->|Depends on| n287
  n72 -->|Depends on| n302
  n73 -->|Verifies| n370
  n73 -->|Verifies| n369
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n145
  n73 -->|Depends on| n100
  n73 -->|Depends on| n300
  n73 -->|Depends on| n302
  n74 -->|Verifies| n105
  n74 -->|Verifies| n106
  n74 -->|Verifies| n159
  n74 -->|Verifies| n671
  n74 -->|Verifies| n632
  n74 -->|Verifies| n221
  n74 -->|Verifies| n395
  n74 -->|In| n52
  n74 -->|Depends on| n105
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n145
  n74 -->|Depends on| n140
  n74 -->|Depends on| n69
  n74 -->|Depends on| n287
  n74 -->|Depends on| n302
  n75 -->|Verifies| n125
  n75 -->|In| n52
  n75 -->|Depends on| n125
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n145
  n75 -->|Depends on| n69
  n75 -->|Depends on| n93
  n75 -->|Depends on| n302
  n76 -->|Verifies| n119
  n76 -->|In| n52
  n76 -->|Depends on| n119
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n140
  n76 -->|Depends on| n145
  n76 -->|Depends on| n287
  n76 -->|Depends on| n302
  n77 -->|Verifies| n111
  n77 -->|Verifies| n164
  n77 -->|Verifies| n367
  n77 -->|Verifies| n380
  n77 -->|In| n52
  n77 -->|Depends on| n114
  n77 -->|Depends on| n111
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n140
  n77 -->|Depends on| n165
  n77 -->|Depends on| n433
  n77 -->|Depends on| n180
  n77 -->|Depends on| n145
  n77 -->|Depends on| n298
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n302
  n79 -->|Verifies| n112
  n79 -->|Verifies| n181
  n79 -->|Verifies| n391
  n79 -->|In| n52
  n79 -->|Depends on| n112
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n113
  n79 -->|Depends on| n145
  n79 -->|Depends on| n287
  n79 -->|Depends on| n302
  n80 -->|Verifies| n129
  n80 -->|In| n52
  n80 -->|Depends on| n129
  n80 -->|Depends on| n161
  n80 -->|Depends on| n187
  n80 -->|Depends on| n41
  n80 -->|Depends on| n51
  n80 -->|Depends on| n145
  n80 -->|Depends on| n287
  n80 -->|Depends on| n302
  n81 -->|Verifies| n123
  n81 -->|Verifies| n194
  n81 -->|Verifies| n364
  n81 -->|In| n52
  n81 -->|Depends on| n123
  n81 -->|Depends on| n42
  n81 -->|Depends on| n56
  n81 -->|Depends on| n51
  n81 -->|Depends on| n41
  n81 -->|Depends on| n39
  n81 -->|Depends on| n140
  n81 -->|Depends on| n94
  n81 -->|Depends on| n90
  n81 -->|Depends on| n145
  n81 -->|Depends on| n667
  n81 -->|Depends on| n302
  n81 -->|Depends on| n612
  n82 -->|Verifies| n132
  n82 -->|Verifies| n385
  n82 -->|Verifies| n363
  n82 -->|Verifies| n381
  n82 -->|In| n52
  n82 -->|Depends on| n132
  n82 -->|Depends on| n42
  n82 -->|Depends on| n56
  n82 -->|Depends on| n21
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n140
  n82 -->|Depends on| n94
  n82 -->|Depends on| n90
  n82 -->|Depends on| n145
  n82 -->|Depends on| n302
  n82 -->|Depends on| n139
  n82 -->|Depends on| n668
  n83 -->|Verifies| n107
  n83 -->|Verifies| n382
  n83 -->|In| n52
  n83 -->|Depends on| n107
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n51
  n83 -->|Depends on| n94
  n83 -->|Depends on| n145
  n83 -->|Depends on| n302
  n83 -->|Depends on| n311
  n84 -->|Verifies| n130
  n84 -->|Verifies| n385
  n84 -->|Verifies| n363
  n84 -->|In| n52
  n84 -->|Depends on| n130
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n41
  n84 -->|Depends on| n39
  n84 -->|Depends on| n140
  n84 -->|Depends on| n94
  n84 -->|Depends on| n145
  n84 -->|Depends on| n302
  n85 -->|Verifies| n110
  n85 -->|Verifies| n150
  n85 -->|In| n52
  n85 -->|Depends on| n110
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n94
  n85 -->|Depends on| n90
  n85 -->|Depends on| n204
  n85 -->|Depends on| n145
  n85 -->|Depends on| n302
  n86 -->|Verifies| n115
  n86 -->|Verifies| n163
  n86 -->|In| n52
  n86 -->|Depends on| n114
  n86 -->|Depends on| n115
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n51
  n86 -->|Depends on| n180
  n86 -->|Depends on| n41
  n86 -->|Depends on| n39
  n86 -->|Depends on| n140
  n86 -->|Depends on| n145
  n86 -->|Depends on| n298
  n86 -->|Depends on| n302
  n87 -->|Verifies| n333
  n87 -->|Verifies| n355
  n87 -->|Verifies| n371
  n87 -->|Verifies| n387
  n87 -->|In| n52
  n87 -->|Depends on| n114
  n87 -->|Depends on| n333
  n87 -->|Depends on| n19
  n87 -->|Depends on| n180
  n87 -->|Depends on| n41
  n87 -->|Depends on| n17
  n87 -->|Depends on| n51
  n87 -->|Depends on| n145
  n87 -->|Depends on| n298
  n87 -->|Depends on| n302
  n88 -->|Verifies| n114
  n88 -->|Verifies| n178
  n88 -->|Verifies| n561
  n88 -->|Verifies| n553
  n88 -->|Verifies| n565
  n88 -->|Verifies| n166
  n88 -->|In| n52
  n88 -->|Depends on| n114
  n88 -->|Depends on| n166
  n88 -->|Depends on| n51
  n88 -->|Depends on| n145
  n88 -->|Depends on| n298
  n88 -->|Depends on| n302
  n88 -->|Depends on| n98
  n91 -->|Verifies| n116
  n91 -->|Verifies| n121
  n91 -->|In| n52
  n91 -->|Depends on| n116
  n91 -->|Depends on| n42
  n91 -->|Depends on| n56
  n91 -->|Depends on| n41
  n91 -->|Depends on| n39
  n91 -->|Depends on| n140
  n91 -->|Depends on| n94
  n91 -->|Depends on| n90
  n91 -->|Depends on| n142
  n91 -->|Depends on| n192
  n91 -->|Depends on| n145
  n91 -->|Depends on| n302
  n91 -->|Depends on| n139
  n91 -->|Depends on| n668
  n92 -->|Verifies| n122
  n92 -->|Verifies| n364
  n92 -->|In| n52
  n92 -->|Depends on| n122
  n92 -->|Depends on| n42
  n92 -->|Depends on| n56
  n92 -->|Depends on| n145
  n92 -->|Depends on| n302
  n92 -->|Depends on| n139
  n92 -->|Depends on| n668
  n92 -->|Depends on| n90
  n95 -->|Verifies| n126
  n95 -->|Verifies| n120
  n95 -->|Verifies| n607
  n95 -->|Verifies| n183
  n95 -->|Verifies| n609
  n95 -->|Verifies| n372
  n95 -->|Verifies| n605
  n95 -->|Verifies| n167
  n95 -->|In| n52
  n95 -->|Depends on| n126
  n95 -->|Depends on| n120
  n95 -->|Depends on| n42
  n95 -->|Depends on| n56
  n95 -->|Depends on| n51
  n95 -->|Depends on| n41
  n95 -->|Depends on| n39
  n95 -->|Depends on| n22
  n95 -->|Depends on| n48
  n95 -->|Depends on| n23
  n95 -->|Depends on| n161
  n95 -->|Depends on| n17
  n95 -->|Depends on| n288
  n95 -->|Depends on| n140
  n95 -->|Depends on| n612
  n95 -->|Depends on| n94
  n95 -->|Depends on| n90
  n95 -->|Depends on| n145
  n95 -->|Depends on| n302
  n96 -->|Verifies| n128
  n96 -->|In| n52
  n96 -->|Depends on| n128
  n96 -->|Depends on| n56
  n96 -->|Depends on| n21
  n96 -->|Depends on| n41
  n96 -->|Depends on| n39
  n96 -->|Depends on| n140
  n96 -->|Depends on| n145
  n96 -->|Depends on| n302
  n97 -->|Verifies| n126
  n97 -->|Verifies| n183
  n97 -->|In| n52
  n97 -->|Depends on| n126
  n97 -->|Depends on| n42
  n97 -->|Depends on| n51
  n97 -->|Depends on| n41
  n97 -->|Depends on| n39
  n97 -->|Depends on| n22
  n97 -->|Depends on| n23
  n97 -->|Depends on| n161
  n97 -->|Depends on| n17
  n97 -->|Depends on| n183
  n97 -->|Depends on| n287
  n97 -->|Depends on| n140
  n97 -->|Depends on| n612
  n97 -->|Depends on| n94
  n97 -->|Depends on| n90
  n97 -->|Depends on| n145
  n97 -->|Depends on| n302
  n99 -->|Verifies| n103
  n99 -->|Verifies| n104
  n99 -->|Verifies| n109
  n99 -->|Verifies| n361
  n99 -->|In| n52
  n99 -->|Depends on| n103
  n99 -->|Depends on| n56
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n145
  n99 -->|Depends on| n68
  n99 -->|Depends on| n302
  n101 -->|Verifies| n127
  n101 -->|Verifies| n131
  n101 -->|Verifies| n124
  n101 -->|Verifies| n569
  n101 -->|Verifies| n563
  n101 -->|Verifies| n571
  n101 -->|In| n52
  n101 -->|Depends on| n127
  n101 -->|Depends on| n131
  n101 -->|Depends on| n51
  n101 -->|Depends on| n145
  n101 -->|Depends on| n100
  n101 -->|Depends on| n302
  n102 -->|Serves| n435
  n102 -->|Part of| n54
  n102 -->|Depends on| n118
  n102 -->|Depends on| n167
  n102 -->|Depends on| n145
  n102 -->|Depends on| n140
  n102 -->|Depends on| n191
  n102 -->|Depends on| n189
  n102 -->|Depends on| n358
  n102 -->|Depends on| n397
  n102 -->|Depends on| n146
  n102 -->|Depends on| n668
  n102 -->|Depends on| n43
  n102 -->|Depends on| n22
  n102 -->|Depends on| n21
  n102 -->|Depends on| n23
  n102 -->|Depends on| n39
  n102 -->|Depends on| n25
  n102 -->|Depends on| n168
  n102 -->|Depends on| n50
  n102 -->|Depends on| n635
  n102 -->|Depends on| n641
  n102 -->|Depends on| n287
  n102 -->|Depends on| n286
  n102 -->|Depends on| n192
  n102 -->|Depends on| n193
  n102 -->|Depends on| n195
  n102 -->|Depends on| n194
  n102 -->|Depends on| n138
  n102 -->|Depends on| n143
  n102 -->|Depends on| n17
  n102 -->|Depends on| n180
  n102 -->|Depends on| n139
  n103 -->|Serves| n442
  n103 -->|Part of| n54
  n103 -->|Depends on| n118
  n103 -->|Depends on| n104
  n103 -->|Depends on| n14
  n103 -->|Depends on| n39
  n103 -->|Depends on| n641
  n103 -->|Depends on| n50
  n103 -->|Depends on| n287
  n104 -->|Serves| n442
  n104 -->|Depends on| n118
  n104 -->|Depends on| n176
  n104 -->|Depends on| n109
  n104 -->|Depends on| n40
  n104 -->|Depends on| n182
  n104 -->|Depends on| n180
  n104 -->|Depends on| n140
  n104 -->|Depends on| n39
  n104 -->|Depends on| n287
  n104 -->|Depends on| n133
  n105 -->|Serves| n435
  n105 -->|Part of| n54
  n105 -->|Depends on| n118
  n105 -->|Depends on| n106
  n105 -->|Depends on| n23
  n105 -->|Depends on| n39
  n105 -->|Depends on| n50
  n105 -->|Depends on| n287
  n106 -->|Serves| n435
  n106 -->|Depends on| n118
  n106 -->|Depends on| n159
  n106 -->|Depends on| n641
  n106 -->|Depends on| n154
  n106 -->|Depends on| n287
  n107 -->|Serves| n442
  n107 -->|Part of| n54
  n107 -->|Depends on| n118
  n107 -->|Depends on| n34
  n107 -->|Depends on| n311
  n107 -->|Depends on| n140
  n107 -->|Depends on| n21
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n316
  n107 -->|Depends on| n138
  n107 -->|Depends on| n50
  n107 -->|Depends on| n635
  n107 -->|Depends on| n641
  n107 -->|Depends on| n287
  n108 -->|Serves| n435
  n108 -->|Part of| n54
  n108 -->|Depends on| n140
  n108 -->|Depends on| n118
  n108 -->|Depends on| n176
  n108 -->|Depends on| n551
  n108 -->|Depends on| n569
  n108 -->|Depends on| n23
  n108 -->|Depends on| n39
  n108 -->|Depends on| n50
  n108 -->|Depends on| n287
  n109 -->|Serves| n435
  n109 -->|Depends on| n287
  n109 -->|Depends on| n298
  n110 -->|Serves| n435
  n110 -->|Part of| n54
  n110 -->|Depends on| n118
  n110 -->|Depends on| n159
  n110 -->|Depends on| n16
  n110 -->|Depends on| n150
  n110 -->|Depends on| n334
  n110 -->|Depends on| n335
  n110 -->|Depends on| n218
  n110 -->|Depends on| n149
  n110 -->|Depends on| n21
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n50
  n110 -->|Depends on| n287
  n111 -->|Serves| n435
  n111 -->|Part of| n54
  n111 -->|Depends on| n118
  n111 -->|Depends on| n164
  n111 -->|Depends on| n104
  n111 -->|Depends on| n14
  n111 -->|Depends on| n39
  n112 -->|Serves| n435
  n112 -->|Part of| n54
  n112 -->|Depends on| n118
  n112 -->|Depends on| n113
  n112 -->|Depends on| n21
  n112 -->|Depends on| n23
  n112 -->|Depends on| n22
  n112 -->|Depends on| n43
  n112 -->|Depends on| n28
  n112 -->|Depends on| n26
  n112 -->|Depends on| n53
  n112 -->|Depends on| n34
  n112 -->|Depends on| n33
  n112 -->|Depends on| n140
  n112 -->|Depends on| n17
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n287
  n114 -->|Serves| n435
  n114 -->|Part of| n54
  n114 -->|Depends on| n118
  n114 -->|Depends on| n178
  n114 -->|Depends on| n551
  n114 -->|Depends on| n569
  n114 -->|Depends on| n561
  n114 -->|Depends on| n50
  n115 -->|Serves| n435
  n115 -->|Part of| n54
  n115 -->|Depends on| n140
  n115 -->|Depends on| n118
  n115 -->|Depends on| n163
  n115 -->|Depends on| n333
  n115 -->|Depends on| n180
  n115 -->|Depends on| n23
  n115 -->|Depends on| n39
  n115 -->|Depends on| n50
  n115 -->|Depends on| n287
  n116 -->|Serves| n442
  n116 -->|Part of| n54
  n116 -->|Depends on| n118
  n116 -->|Depends on| n140
  n116 -->|Depends on| n180
  n116 -->|Depends on| n40
  n116 -->|Depends on| n142
  n116 -->|Depends on| n192
  n116 -->|Depends on| n21
  n116 -->|Depends on| n23
  n116 -->|Depends on| n39
  n116 -->|Depends on| n138
  n116 -->|Depends on| n668
  n116 -->|Depends on| n670
  n116 -->|Depends on| n656
  n116 -->|Depends on| n650
  n116 -->|Depends on| n651
  n116 -->|Depends on| n648
  n116 -->|Depends on| n647
  n116 -->|Depends on| n659
  n116 -->|Depends on| n665
  n116 -->|Depends on| n667
  n116 -->|Depends on| n657
  n116 -->|Depends on| n50
  n116 -->|Depends on| n287
  n116 -->|Depends on| n41
  n116 -->|Depends on| n145
  n116 -->|Depends on| n121
  n116 -->|Depends on| n139
  n117 -->|Serves| n435
  n117 -->|Part of| n54
  n117 -->|Depends on| n140
  n117 -->|Depends on| n641
  n117 -->|Depends on| n118
  n117 -->|Depends on| n176
  n117 -->|Depends on| n109
  n117 -->|Depends on| n21
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n287
  n118 -->|Serves| n435
  n118 -->|Depends on| n145
  n118 -->|Depends on| n161
  n118 -->|Depends on| n160
  n118 -->|Depends on| n173
  n118 -->|Depends on| n187
  n118 -->|Depends on| n175
  n118 -->|Depends on| n547
  n118 -->|Depends on| n50
  n118 -->|Depends on| n41
  n118 -->|Depends on| n17
  n118 -->|Depends on| n440
  n118 -->|Depends on| n434
  n118 -->|Depends on| n641
  n118 -->|Depends on| n639
  n118 -->|Depends on| n637
  n118 -->|Depends on| n287
  n118 -->|Depends on| n140
  n118 -->|Depends on| n182
  n119 -->|Serves| n442
  n119 -->|Part of| n54
  n119 -->|Depends on| n118
  n119 -->|Depends on| n175
  n119 -->|Depends on| n23
  n119 -->|Depends on| n50
  n119 -->|Depends on| n641
  n119 -->|Depends on| n639
  n119 -->|Depends on| n637
  n119 -->|Depends on| n287
  n120 -->|Serves| n610
  n120 -->|Part of| n54
  n120 -->|Depends on| n145
  n120 -->|Depends on| n118
  n120 -->|Depends on| n607
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n50
  n120 -->|Depends on| n287
  n121 -->|Serves| n442
  n121 -->|Depends on| n670
  n121 -->|Depends on| n656
  n121 -->|Depends on| n650
  n121 -->|Depends on| n651
  n121 -->|Depends on| n648
  n121 -->|Depends on| n647
  n121 -->|Depends on| n659
  n121 -->|Depends on| n665
  n121 -->|Depends on| n667
  n121 -->|Depends on| n653
  n121 -->|Depends on| n657
  n122 -->|Serves| n442
  n122 -->|Part of| n54
  n122 -->|Depends on| n118
  n122 -->|Depends on| n140
  n122 -->|Depends on| n180
  n122 -->|Depends on| n139
  n122 -->|Depends on| n21
  n122 -->|Depends on| n22
  n122 -->|Depends on| n39
  n122 -->|Depends on| n50
  n122 -->|Depends on| n287
  n123 -->|Serves| n442
  n123 -->|Part of| n54
  n123 -->|Depends on| n118
  n123 -->|Depends on| n140
  n123 -->|Depends on| n180
  n123 -->|Depends on| n176
  n123 -->|Depends on| n551
  n123 -->|Depends on| n245
  n123 -->|Depends on| n244
  n123 -->|Depends on| n195
  n123 -->|Depends on| n194
  n123 -->|Depends on| n21
  n123 -->|Depends on| n23
  n123 -->|Depends on| n22
  n123 -->|Depends on| n39
  n123 -->|Depends on| n25
  n123 -->|Depends on| n168
  n123 -->|Depends on| n668
  n123 -->|Depends on| n17
  n123 -->|Depends on| n50
  n123 -->|Depends on| n287
  n123 -->|Depends on| n286
  n123 -->|Depends on| n221
  n123 -->|Depends on| n667
  n123 -->|Depends on| n126
  n123 -->|Depends on| n145
  n124 -->|Serves| n435
  n124 -->|Depends on| n145
  n124 -->|Depends on| n138
  n124 -->|Depends on| n118
  n124 -->|Depends on| n187
  n124 -->|Depends on| n551
  n124 -->|Depends on| n569
  n124 -->|Depends on| n50
  n124 -->|Depends on| n287
  n125 -->|Serves| n435
  n125 -->|Part of| n54
  n125 -->|Depends on| n105
  n125 -->|Depends on| n41
  n126 -->|Serves| n610
  n126 -->|Part of| n54
  n126 -->|Depends on| n145
  n126 -->|Depends on| n118
  n126 -->|Depends on| n110
  n126 -->|Depends on| n159
  n126 -->|Depends on| n607
  n126 -->|Depends on| n609
  n126 -->|Depends on| n610
  n126 -->|Depends on| n16
  n126 -->|Depends on| n150
  n126 -->|Depends on| n606
  n126 -->|Depends on| n41
  n126 -->|Depends on| n21
  n126 -->|Depends on| n23
  n126 -->|Depends on| n39
  n126 -->|Depends on| n50
  n126 -->|Depends on| n167
  n126 -->|Depends on| n287
  n127 -->|Serves| n435
  n127 -->|Part of| n54
  n127 -->|Depends on| n118
  n127 -->|Depends on| n124
  n128 -->|Serves| n442
  n128 -->|Part of| n54
  n128 -->|Depends on| n140
  n128 -->|Depends on| n118
  n128 -->|Depends on| n176
  n128 -->|Depends on| n551
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n50
  n128 -->|Depends on| n287
  n129 -->|Serves| n435
  n129 -->|Part of| n54
  n129 -->|Depends on| n118
  n129 -->|Depends on| n161
  n129 -->|Depends on| n187
  n129 -->|Depends on| n173
  n129 -->|Depends on| n50
  n129 -->|Depends on| n641
  n129 -->|Depends on| n639
  n129 -->|Depends on| n637
  n129 -->|Depends on| n287
  n130 -->|Serves| n442
  n130 -->|Part of| n54
  n130 -->|Depends on| n118
  n130 -->|Depends on| n21
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n316
  n130 -->|Depends on| n667
  n130 -->|Depends on| n41
  n130 -->|Depends on| n145
  n130 -->|Depends on| n50
  n130 -->|Depends on| n287
  n131 -->|Serves| n435
  n131 -->|Part of| n54
  n131 -->|Depends on| n145
  n131 -->|Depends on| n118
  n131 -->|Depends on| n124
  n131 -->|Depends on| n161
  n131 -->|Depends on| n187
  n131 -->|Depends on| n50
  n131 -->|Depends on| n287
  n132 -->|Serves| n442
  n132 -->|Part of| n54
  n132 -->|Depends on| n118
  n132 -->|Depends on| n140
  n132 -->|Depends on| n180
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n139
  n132 -->|Depends on| n40
  n132 -->|Depends on| n192
  n132 -->|Depends on| n39
  n132 -->|Depends on| n33
  n132 -->|Depends on| n310
  n132 -->|Depends on| n138
  n132 -->|Depends on| n668
  n132 -->|Depends on| n50
  n132 -->|Depends on| n287
  n132 -->|Depends on| n41
  n132 -->|Depends on| n145
  n149 -->|Read in| n201
  n149 -->|Depends on| n200
  n149 -->|Depends on| n203
  n150 -->|Serves| n435
  n150 -->|Depends on| n31
  n150 -->|Depends on| n148
  n154 -->|Serves| n442
  n154 -->|Depends on| n295
  n155 -->|Serves| n442
  n155 -->|Applied by| n154
  n155 -->|Applied by| n295
  n157 -->|Serves| n442
  n157 -->|Depends on| n153
  n158 -->|Serves| n442
  n159 -->|Serves| n435
  n159 -->|Depends on| n145
  n159 -->|Depends on| n140
  n159 -->|Depends on| n39
  n159 -->|Depends on| n188
  n159 -->|Depends on| n40
  n159 -->|Depends on| n221
  n159 -->|Depends on| n288
  n159 -->|Depends on| n139
  n159 -->|Depends on| n668
  n160 -->|Serves| n435
  n160 -->|Depends on| n134
  n160 -->|Depends on| n179
  n160 -->|Depends on| n182
  n160 -->|Depends on| n40
  n160 -->|Depends on| n154
  n160 -->|Depends on| n136
  n160 -->|Depends on| n140
  n160 -->|Depends on| n303
  n160 -->|Depends on| n183
  n160 -->|Depends on| n157
  n161 -->|Serves| n435
  n161 -->|Depends on| n140
  n161 -->|Depends on| n440
  n161 -->|Depends on| n162
  n161 -->|Depends on| n182
  n161 -->|Depends on| n179
  n161 -->|Depends on| n31
  n161 -->|Depends on| n21
  n161 -->|Depends on| n39
  n161 -->|Depends on| n184
  n161 -->|Depends on| n180
  n161 -->|Depends on| n171
  n161 -->|Depends on| n188
  n161 -->|Depends on| n221
  n161 -->|Depends on| n40
  n161 -->|Depends on| n288
  n161 -->|Depends on| n169
  n161 -->|Depends on| n48
  n161 -->|Depends on| n167
  n161 -->|Depends on| n28
  n161 -->|Depends on| n139
  n162 -->|Serves| n435
  n163 -->|Serves| n435
  n163 -->|Depends on| n145
  n163 -->|Depends on| n17
  n163 -->|Depends on| n41
  n163 -->|Depends on| n298
  n164 -->|Serves| n435
  n164 -->|Depends on| n165
  n164 -->|Depends on| n145
  n164 -->|Depends on| n140
  n164 -->|Depends on| n50
  n164 -->|Depends on| n634
  n164 -->|Depends on| n17
  n164 -->|Depends on| n53
  n164 -->|Depends on| n433
  n164 -->|Depends on| n26
  n164 -->|Depends on| n21
  n164 -->|Depends on| n39
  n164 -->|Depends on| n180
  n164 -->|Depends on| n163
  n164 -->|Depends on| n166
  n164 -->|Depends on| n333
  n164 -->|Depends on| n561
  n164 -->|Depends on| n290
  n164 -->|Depends on| n295
  n164 -->|Depends on| n291
  n166 -->|Serves| n435
  n166 -->|Depends on| n154
  n166 -->|Depends on| n298
  n167 -->|Serves| n435
  n167 -->|Depends on| n140
  n167 -->|Depends on| n191
  n167 -->|Depends on| n668
  n167 -->|Depends on| n180
  n167 -->|Depends on| n21
  n167 -->|Depends on| n39
  n167 -->|Depends on| n25
  n167 -->|Depends on| n168
  n167 -->|Depends on| n138
  n169 -->|Serves| n435
  n170 -->|Serves| n435
  n171 -->|Serves| n435
  n171 -->|Depends on| n40
  n171 -->|Depends on| n143
  n171 -->|Depends on| n288
  n171 -->|Depends on| n297
  n171 -->|Depends on| n290
  n171 -->|Depends on| n154
  n171 -->|Depends on| n179
  n171 -->|Depends on| n182
  n171 -->|Depends on| n151
  n171 -->|Depends on| n170
  n171 -->|Depends on| n443
  n171 -->|Depends on| n140
  n171 -->|Depends on| n668
  n171 -->|Depends on| n316
  n171 -->|Depends on| n157
  n171 -->|Depends on| n158
  n171 -->|Depends on| n169
  n173 -->|Serves| n435
  n173 -->|Depends on| n27
  n173 -->|Depends on| n221
  n173 -->|Depends on| n141
  n173 -->|Depends on| n140
  n173 -->|Depends on| n437
  n173 -->|Depends on| n432
  n173 -->|Depends on| n170
  n173 -->|Depends on| n438
  n173 -->|Depends on| n439
  n173 -->|Depends on| n182
  n173 -->|Depends on| n21
  n173 -->|Depends on| n39
  n173 -->|Depends on| n180
  n173 -->|Depends on| n171
  n173 -->|Depends on| n40
  n173 -->|Depends on| n139
  n173 -->|Depends on| n296
  n173 -->|Depends on| n229
  n173 -->|Depends on| n223
  n173 -->|Depends on| n225
  n173 -->|Depends on| n240
  n173 -->|Depends on| n237
  n173 -->|Depends on| n235
  n173 -->|Depends on| n227
  n174 -->|Serves| n239
  n174 -->|Applied by| n173
  n174 -->|Applied by| n187
  n175 -->|Serves| n442
  n175 -->|Depends on| n168
  n175 -->|Depends on| n140
  n175 -->|Depends on| n138
  n175 -->|Depends on| n182
  n175 -->|Depends on| n253
  n175 -->|Depends on| n25
  n175 -->|Depends on| n21
  n175 -->|Depends on| n39
  n175 -->|Depends on| n40
  n175 -->|Depends on| n298
  n176 -->|Serves| n442
  n176 -->|Depends on| n138
  n176 -->|Depends on| n179
  n176 -->|Depends on| n40
  n176 -->|Depends on| n298
  n178 -->|Serves| n435
  n178 -->|Depends on| n140
  n178 -->|Depends on| n431
  n178 -->|Depends on| n177
  n178 -->|Depends on| n17
  n178 -->|Depends on| n176
  n178 -->|Depends on| n187
  n178 -->|Depends on| n295
  n179 -->|Serves| n435
  n179 -->|Depends on| n615
  n180 -->|Serves| n435
  n180 -->|Depends on| n140
  n180 -->|Depends on| n21
  n180 -->|Depends on| n39
  n180 -->|Depends on| n192
  n180 -->|Depends on| n40
  n180 -->|Depends on| n139
  n180 -->|Depends on| n668
  n181 -->|Serves| n435
  n181 -->|Implements| n28
  n181 -->|Depends on| n21
  n181 -->|Depends on| n39
  n181 -->|Depends on| n25
  n181 -->|Depends on| n172
  n181 -->|Depends on| n46
  n182 -->|Serves| n435
  n182 -->|Depends on| n143
  n182 -->|Depends on| n242
  n183 -->|Serves| n435
  n183 -->|Depends on| n287
  n184 -->|Serves| n435
  n184 -->|Depends on| n670
  n184 -->|Depends on| n182
  n184 -->|Depends on| n186
  n184 -->|Depends on| n55
  n184 -->|Depends on| n27
  n184 -->|Depends on| n46
  n184 -->|Depends on| n25
  n184 -->|Depends on| n39
  n184 -->|Depends on| n179
  n184 -->|Depends on| n135
  n184 -->|Depends on| n288
  n184 -->|Depends on| n669
  n184 -->|Depends on| n141
  n184 -->|Depends on| n40
  n185 -->|Serves| n442
  n185 -->|Applied by| n171
  n185 -->|Applied by| n187
  n187 -->|Serves| n435
  n187 -->|Depends on| n221
  n187 -->|Depends on| n134
  n187 -->|Depends on| n147
  n187 -->|Depends on| n136
  n187 -->|Depends on| n140
  n187 -->|Depends on| n31
  n187 -->|Depends on| n21
  n187 -->|Depends on| n39
  n187 -->|Depends on| n40
  n187 -->|Depends on| n180
  n187 -->|Depends on| n298
  n187 -->|Depends on| n303
  n187 -->|Depends on| n231
  n187 -->|Depends on| n223
  n187 -->|Depends on| n237
  n187 -->|Depends on| n233
  n188 -->|Serves| n435
  n188 -->|Depends on| n144
  n188 -->|Depends on| n143
  n188 -->|Depends on| n140
  n188 -->|Depends on| n39
  n188 -->|Depends on| n40
  n188 -->|Depends on| n221
  n188 -->|Depends on| n288
  n189 -->|Refines| n435
  n190 -->|Accepts| n189
  n194 -->|Serves| n435
  n194 -->|Depends on| n195
  n194 -->|Depends on| n670
  n194 -->|Depends on| n143
  n194 -->|Depends on| n650
  n194 -->|Depends on| n656
  n194 -->|Depends on| n654
  n194 -->|Depends on| n657
  n194 -->|Depends on| n651
  n194 -->|Depends on| n648
  n194 -->|Depends on| n647
  n194 -->|Depends on| n658
  n194 -->|Depends on| n665
  n194 -->|Depends on| n667
  n194 -->|Depends on| n653
  n196 -->|Read in| n201
  n197 -->|Read in| n201
  n198 -->|Read in| n201
  n199 -->|Read in| n201
  n200 -->|Read in| n201
  n201 -->|Queries written in| n614
  n201 -->|Read by| n623
  n201 -->|Uses| n305
  n202 -->|Read in| n201
  n203 -->|Read in| n201
  n203 -->|Depends on| n199
  n204 -->|Read in| n211
  n205 -->|Read in| n211
  n206 -->|Read in| n211
  n207 -->|Read in| n211
  n207 -->|Depends on| n212
  n207 -->|Depends on| n209
  n208 -->|Read in| n211
  n208 -->|Depends on| n212
  n208 -->|Depends on| n209
  n209 -->|Read in| n211
  n210 -->|Read in| n211
  n210 -->|Depends on| n208
  n211 -->|Queries written in| n614
  n211 -->|Read by| n623
  n211 -->|Uses| n308
  n212 -->|Read in| n211
  n212 -->|Depends on| n206
  n213 -->|Read in| n668
  n214 -->|Read in| n201
  n215 -->|Read in| n201
  n216 -->|Read in| n201
  n218 -->|Read in| n211
  n218 -->|Depends on| n208
  n219 -->|Read in| n201
  n220 -->|Read in| n211
  n220 -->|Depends on| n206
  n221 -->|Serves| n435
  n221 -->|Depends on| n623
  n221 -->|Depends on| n616
  n221 -->|Depends on| n668
  n221 -->|Depends on| n201
  n221 -->|Depends on| n671
  n221 -->|Depends on| n630
  n221 -->|Depends on| n631
  n221 -->|Depends on| n632
  n221 -->|Depends on| n31
  n221 -->|Depends on| n21
  n221 -->|Depends on| n39
  n221 -->|Depends on| n292
  n222 -->|Serves| n435
  n222 -->|Applied by| n221
  n222 -->|Applied by| n333
  n223 -->|Refines| n239
  n224 -->|Accepts| n223
  n225 -->|Refines| n239
  n226 -->|Accepts| n225
  n227 -->|Refines| n239
  n228 -->|Accepts| n227
  n229 -->|Refines| n239
  n230 -->|Accepts| n229
  n231 -->|Refines| n239
  n232 -->|Accepts| n231
  n233 -->|Refines| n239
  n234 -->|Accepts| n233
  n235 -->|Refines| n237
  n235 -->|Depends on| n237
  n236 -->|Accepts| n235
  n237 -->|Refines| n239
  n238 -->|Accepts| n237
  n240 -->|Refines| n239
  n241 -->|Accepts| n240
  n242 -->|Refines| n444
  n243 -->|Accepts| n242
  n245 -->|Refines| n444
  n246 -->|Accepts| n245
  n247 -->|Read in| n211
  n247 -->|Depends on| n208
  n248 -->|Defined by| n254
  n248 -->|Depends on| n254
  n249 -->|Defined by| n254
  n249 -->|Depends on| n254
  n250 -->|Defined by| n254
  n250 -->|Depends on| n254
  n251 -->|Defined by| n254
  n251 -->|Depends on| n254
  n251 -->|Depends on| n249
  n252 -->|Defined by| n254
  n252 -->|Depends on| n254
  n252 -->|Depends on| n248
  n253 -->|Defined by| n254
  n253 -->|Depends on| n254
  n253 -->|Depends on| n248
  n255 -->|Read in| n211
  n255 -->|Depends on| n212
  n255 -->|Depends on| n209
  n255 -->|Depends on| n208
  n255 -->|Depends on| n249
  n256 -->|Defined by| n254
  n256 -->|Depends on| n254
  n258 -->|Defined by| n254
  n258 -->|Depends on| n254
  n259 -->|Defined by| n254
  n259 -->|Depends on| n254
  n260 -->|Defined by| n254
  n260 -->|Depends on| n254
  n261 -->|Depends on| n140
  n262 -->|Read in| n211
  n262 -->|Depends on| n208
  n263 -->|Defined by| n254
  n263 -->|Depends on| n254
  n264 -->|Defined by| n257
  n264 -->|Depends on| n257
  n264 -->|Depends on| n267
  n264 -->|Depends on| n266
  n265 -->|Defined by| n257
  n265 -->|Depends on| n257
  n265 -->|Depends on| n254
  n266 -->|Defined by| n257
  n266 -->|Depends on| n257
  n267 -->|Defined by| n257
  n267 -->|Depends on| n257
  n267 -->|Depends on| n254
  n272 -->|Defined by| n278
  n272 -->|Depends on| n278
  n272 -->|Depends on| n284
  n273 -->|Defined by| n278
  n273 -->|Depends on| n278
  n274 -->|Defined by| n278
  n274 -->|Depends on| n278
  n275 -->|Defined by| n278
  n275 -->|Depends on| n278
  n276 -->|Defined by| n278
  n276 -->|Depends on| n278
  n276 -->|Depends on| n275
  n277 -->|Defined by| n278
  n277 -->|Depends on| n278
  n277 -->|Depends on| n275
  n279 -->|Defined by| n278
  n279 -->|Depends on| n278
  n280 -->|Defined by| n278
  n280 -->|Depends on| n278
  n280 -->|Depends on| n279
  n281 -->|Defined by| n278
  n281 -->|Depends on| n278
  n281 -->|Depends on| n279
  n282 -->|Defined by| n278
  n282 -->|Depends on| n278
  n282 -->|Depends on| n277
  n283 -->|Defined by| n278
  n283 -->|Depends on| n278
  n283 -->|Depends on| n284
  n284 -->|Defined by| n278
  n284 -->|Depends on| n278
  n285 -->|Defined by| n278
  n285 -->|Depends on| n278
  n285 -->|Depends on| n279
  n286 -->|Written in| n295
  n286 -->|Depends on| n295
  n287 -->|Written in| n295
  n287 -->|Depends on| n295
  n288 -->|Written in| n295
  n288 -->|Depends on| n295
  n288 -->|Depends on| n297
  n289 -->|Serves| n442
  n289 -->|Applied by| n288
  n289 -->|Applied by| n303
  n289 -->|Applied by| n291
  n289 -->|Applied by| n287
  n289 -->|Applied by| n302
  n289 -->|Applied by| n286
  n289 -->|Applied by| n299
  n289 -->|Applied by| n297
  n290 -->|Serves| n442
  n290 -->|Depends on| n295
  n291 -->|Written in| n295
  n291 -->|Depends on| n295
  n291 -->|Depends on| n297
  n292 -->|Written in| n295
  n293 -->|Written in| n295
  n294 -->|Written in| n295
  n296 -->|Written in| n295
  n297 -->|Serves| n442
  n297 -->|Depends on| n295
  n298 -->|Written in| n295
  n299 -->|Written in| n295
  n299 -->|Depends on| n295
  n300 -->|Written in| n295
  n301 -->|Written in| n295
  n302 -->|Written in| n295
  n302 -->|Depends on| n295
  n303 -->|Written in| n295
  n303 -->|Depends on| n295
  n304 -->|Written in| n295
  n310 -->|Serves| n442
  n312 -->|Serves| n442
  n316 -->|Serves| n442
  n318 -->|Defined by| n347
  n318 -->|Read in| n211
  n318 -->|Depends on| n347
  n318 -->|Depends on| n336
  n318 -->|Depends on| n208
  n319 -->|Defined by| n347
  n319 -->|Read in| n211
  n319 -->|Depends on| n347
  n319 -->|Depends on| n145
  n319 -->|Depends on| n326
  n319 -->|Depends on| n207
  n319 -->|Depends on| n208
  n320 -->|Defined by| n347
  n320 -->|Read in| n211
  n320 -->|Depends on| n347
  n320 -->|Depends on| n336
  n320 -->|Depends on| n208
  n321 -->|Defined by| n347
  n321 -->|Read in| n211
  n321 -->|Depends on| n347
  n321 -->|Depends on| n336
  n321 -->|Depends on| n207
  n321 -->|Depends on| n208
  n322 -->|Defined by| n347
  n322 -->|Read in| n211
  n322 -->|Depends on| n347
  n322 -->|Depends on| n336
  n322 -->|Depends on| n207
  n322 -->|Depends on| n208
  n322 -->|Depends on| n340
  n323 -->|Defined by| n347
  n323 -->|Read in| n211
  n323 -->|Depends on| n347
  n323 -->|Depends on| n336
  n323 -->|Depends on| n207
  n323 -->|Depends on| n208
  n324 -->|Defined by| n347
  n324 -->|Read in| n211
  n324 -->|Depends on| n347
  n324 -->|Depends on| n271
  n324 -->|Depends on| n1
  n324 -->|Depends on| n207
  n324 -->|Depends on| n208
  n324 -->|Depends on| n220
  n324 -->|Depends on| n217
  n325 -->|Read in| n211
  n325 -->|Depends on| n212
  n326 -->|Defined by| n347
  n326 -->|Read in| n211
  n326 -->|Depends on| n347
  n326 -->|Depends on| n7
  n326 -->|Depends on| n207
  n326 -->|Depends on| n208
  n326 -->|Depends on| n220
  n326 -->|Depends on| n202
  n328 -->|Defined by| n347
  n328 -->|Read in| n211
  n328 -->|Depends on| n347
  n328 -->|Depends on| n336
  n328 -->|Depends on| n207
  n328 -->|Depends on| n208
  n328 -->|Depends on| n318
  n328 -->|Depends on| n322
  n329 -->|Defined by| n347
  n329 -->|Read in| n201
  n329 -->|Depends on| n347
  n329 -->|Depends on| n215
  n329 -->|Depends on| n214
  n330 -->|Uses the variables of| n9
  n330 -->|Uses the variables of| n12
  n330 -->|Uses the variables of| n6
  n330 -->|Styles| n333
  n331 -->|Defined by| n347
  n331 -->|Read in| n211
  n331 -->|Depends on| n347
  n331 -->|Depends on| n336
  n331 -->|Depends on| n208
  n333 -->|Serves| n435
  n333 -->|Depends on| n334
  n333 -->|Depends on| n343
  n333 -->|Depends on| n7
  n333 -->|Depends on| n13
  n333 -->|Depends on| n4
  n333 -->|Depends on| n9
  n333 -->|Depends on| n8
  n333 -->|Depends on| n12
  n333 -->|Depends on| n5
  n333 -->|Depends on| n10
  n333 -->|Depends on| n3
  n333 -->|Depends on| n6
  n333 -->|Depends on| n45
  n333 -->|Depends on| n21
  n333 -->|Depends on| n16
  n333 -->|Depends on| n19
  n333 -->|Depends on| n341
  n333 -->|Depends on| n346
  n333 -->|Depends on| n344
  n333 -->|Depends on| n329
  n333 -->|Depends on| n325
  n333 -->|Depends on| n337
  n333 -->|Depends on| n335
  n333 -->|Depends on| n200
  n333 -->|Depends on| n199
  n333 -->|Depends on| n298
  n333 -->|Depends on| n295
  n333 -->|Depends on| n623
  n333 -->|Depends on| n211
  n333 -->|Depends on| n201
  n335 -->|Defined by| n347
  n335 -->|Read in| n211
  n335 -->|Depends on| n347
  n335 -->|Depends on| n204
  n335 -->|Depends on| n212
  n335 -->|Depends on| n209
  n335 -->|Depends on| n208
  n337 -->|Defined by| n347
  n337 -->|Read in| n211
  n337 -->|Depends on| n347
  n337 -->|Depends on| n218
  n337 -->|Depends on| n213
  n337 -->|Depends on| n655
  n337 -->|Depends on| n645
  n338 -->|Uses the variables of| n7
  n338 -->|Uses the variables of| n13
  n338 -->|Uses the variables of| n9
  n338 -->|Uses the variables of| n8
  n338 -->|Uses the variables of| n12
  n338 -->|Uses the variables of| n5
  n338 -->|Uses the variables of| n10
  n338 -->|Uses the variables of| n3
  n338 -->|Uses the variables of| n6
  n338 -->|Styles| n333
  n340 -->|Defined by| n347
  n340 -->|Read in| n211
  n340 -->|Depends on| n347
  n340 -->|Depends on| n339
  n340 -->|Depends on| n336
  n340 -->|Depends on| n207
  n340 -->|Depends on| n208
  n341 -->|Defined by| n347
  n341 -->|Read in| n211
  n341 -->|Depends on| n347
  n341 -->|Depends on| n207
  n341 -->|Depends on| n342
  n341 -->|Depends on| n328
  n341 -->|Depends on| n324
  n342 -->|Defined by| n347
  n342 -->|Read in| n211
  n342 -->|Depends on| n347
  n342 -->|Depends on| n207
  n342 -->|Depends on| n319
  n342 -->|Depends on| n320
  n342 -->|Depends on| n321
  n342 -->|Depends on| n331
  n342 -->|Depends on| n323
  n344 -->|Defined by| n347
  n344 -->|Read in| n201
  n344 -->|Depends on| n347
  n344 -->|Depends on| n200
  n344 -->|Depends on| n199
  n344 -->|Depends on| n202
  n344 -->|Depends on| n198
  n345 -->|Serves| n442
  n345 -->|Applied by| n338
  n345 -->|Applied by| n330
  n345 -->|Applied by| n346
  n345 -->|Applied by| n329
  n345 -->|Applied by| n333
  n346 -->|Defined by| n347
  n346 -->|Read in| n201
  n346 -->|Depends on| n347
  n346 -->|Depends on| n200
  n346 -->|Depends on| n215
  n346 -->|Depends on| n214
  n346 -->|Depends on| n197
  n346 -->|Depends on| n216
  n346 -->|Depends on| n203
  n346 -->|Depends on| n199
  n348 -->|Chooses| n361
  n348 -->|In| n30
  n348 -->|In| n52
  n348 -->|Serves| n436
  n349 -->|Chooses| n388
  n349 -->|In| n30
  n349 -->|In| n52
  n349 -->|Serves| n436
  n350 -->|Implements| n21
  n351 -->|Implements| n22
  n352 -->|Implements| n23
  n354 -->|Chooses| n399
  n354 -->|Chooses| n387
  n354 -->|In| n30
  n354 -->|In| n52
  n354 -->|Serves| n436
  n355 -->|Implements| n16
  n355 -->|Uses| n306
  n356 -->|Chooses| n355
  n356 -->|In| n30
  n356 -->|In| n52
  n356 -->|Serves| n436
  n357 -->|Implements| n41
  n357 -->|Implements| n43
  n357 -->|Implements| n42
  n357 -->|Depends on| n358
  n357 -->|Depends on| n39
  n357 -->|Depends on| n145
  n357 -->|Depends on| n300
  n359 -->|Chooses| n366
  n359 -->|Chooses| n381
  n359 -->|In| n52
  n359 -->|Serves| n436
  n360 -->|Chooses| n369
  n360 -->|Chooses| n395
  n360 -->|Chooses| n382
  n360 -->|Chooses| n357
  n360 -->|Chooses| n367
  n360 -->|In| n52
  n360 -->|Serves| n436
  n361 -->|Implements| n14
  n361 -->|Depends on| n21
  n361 -->|Depends on| n23
  n361 -->|Depends on| n670
  n361 -->|Depends on| n650
  n361 -->|Depends on| n651
  n361 -->|Depends on| n648
  n361 -->|Depends on| n647
  n361 -->|Depends on| n659
  n361 -->|Depends on| n665
  n361 -->|Depends on| n667
  n361 -->|Depends on| n653
  n361 -->|Depends on| n657
  n363 -->|Depends on| n22
  n363 -->|Depends on| n23
  n363 -->|Depends on| n21
  n363 -->|Depends on| n39
  n364 -->|Depends on| n22
  n364 -->|Depends on| n23
  n364 -->|Depends on| n21
  n364 -->|Depends on| n39
  n364 -->|Depends on| n365
  n364 -->|Depends on| n140
  n366 -->|Implements| n21
  n366 -->|Implements| n23
  n366 -->|Implements| n22
  n366 -->|Implements| n56
  n366 -->|Depends on| n39
  n366 -->|Depends on| n368
  n366 -->|Depends on| n300
  n367 -->|Implements| n26
  n367 -->|Implements| n47
  n367 -->|Depends on| n300
  n369 -->|Implements| n50
  n369 -->|Implements| n51
  n369 -->|Depends on| n362
  n369 -->|Depends on| n300
  n370 -->|Implements| n18
  n370 -->|Depends on| n50
  n370 -->|Depends on| n145
  n370 -->|Depends on| n300
  n371 -->|Implements| n19
  n371 -->|Depends on| n332
  n372 -->|Implements| n25
  n373 -->|Implements| n26
  n374 -->|Chooses| n350
  n374 -->|Chooses| n352
  n374 -->|Chooses| n351
  n374 -->|Chooses| n377
  n374 -->|Chooses| n378
  n374 -->|Chooses| n379
  n374 -->|Chooses| n396
  n374 -->|Chooses| n384
  n374 -->|Chooses| n383
  n374 -->|Chooses| n373
  n374 -->|In| n30
  n374 -->|Serves| n436
  n375 -->|Implements| n39
  n376 -->|Chooses| n375
  n376 -->|Chooses| n372
  n376 -->|Chooses| n371
  n376 -->|Chooses| n380
  n376 -->|Chooses| n370
  n376 -->|Chooses| n389
  n376 -->|In| n30
  n376 -->|In| n52
  n376 -->|Serves| n436
  n377 -->|Implements| n41
  n377 -->|Depends on| n403
  n378 -->|Implements| n43
  n378 -->|Depends on| n403
  n379 -->|Implements| n50
  n379 -->|Depends on| n300
  n380 -->|Implements| n53
  n381 -->|Implements| n33
  n381 -->|Depends on| n23
  n381 -->|Depends on| n39
  n381 -->|Depends on| n140
  n381 -->|Depends on| n310
  n382 -->|Implements| n34
  n383 -->|Implements| n33
  n384 -->|Implements| n34
  n384 -->|Depends on| n154
  n385 -->|Depends on| n363
  n385 -->|Depends on| n364
  n386 -->|Chooses| n385
  n386 -->|In| n30
  n386 -->|In| n52
  n386 -->|Serves| n436
  n387 -->|Implements| n45
  n387 -->|Depends on| n353
  n387 -->|Depends on| n140
  n387 -->|Depends on| n191
  n387 -->|Depends on| n668
  n388 -->|Implements| n55
  n388 -->|Uses| n315
  n388 -->|Uses| n309
  n389 -->|Implements| n27
  n390 -->|Chooses| n181
  n390 -->|In| n30
  n390 -->|In| n52
  n390 -->|Serves| n436
  n391 -->|Implements| n46
  n392 -->|Chooses| n391
  n392 -->|In| n52
  n392 -->|Serves| n436
  n393 -->|Chooses| n394
  n393 -->|In| n30
  n393 -->|Serves| n436
  n394 -->|Implements| n46
  n394 -->|Depends on| n140
  n394 -->|Depends on| n353
  n394 -->|Depends on| n167
  n394 -->|Depends on| n172
  n395 -->|Implements| n17
  n395 -->|Depends on| n397
  n395 -->|Depends on| n398
  n396 -->|Implements| n17
  n396 -->|Depends on| n146
  n399 -->|Implements| n40
  n399 -->|Depends on| n353
  n400 -->|Chooses| n404
  n400 -->|In| n30
  n400 -->|In| n52
  n400 -->|Serves| n436
  n401 -->|Implements| n31
  n401 -->|Uses| n313
  n401 -->|Depends on| n40
  n401 -->|Depends on| n139
  n401 -->|Depends on| n668
  n402 -->|Chooses| n401
  n402 -->|In| n30
  n402 -->|In| n52
  n402 -->|Serves| n436
  n404 -->|Implements| n49
  n404 -->|Uses| n317
  n404 -->|Depends on| n300
  n405 -->|Serves| n442
  n405 -->|Applied by| n161
  n405 -->|Applied by| n173
  n406 -->|Serves| n442
  n406 -->|Applied by| n169
  n406 -->|Applied by| n171
  n407 -->|Serves| n435
  n407 -->|Applied by| n110
  n407 -->|Applied by| n149
  n408 -->|Serves| n435
  n408 -->|Applied by| n54
  n408 -->|Applied by| n44
  n408 -->|Applied by| n32
  n408 -->|Applied by| n29
  n409 -->|Serves| n442
  n409 -->|Applied by| n161
  n409 -->|Applied by| n623
  n410 -->|Serves| n435
  n410 -->|Applied by| n102
  n410 -->|Applied by| n189
  n410 -->|Applied by| n572
  n410 -->|Applied by| n578
  n411 -->|Serves| n435
  n411 -->|Applied by| n184
  n411 -->|Applied by| n55
  n411 -->|Applied by| n668
  n411 -->|Applied by| n135
  n412 -->|Serves| n435
  n412 -->|Applied by| n161
  n412 -->|Applied by| n108
  n413 -->|Serves| n442
  n413 -->|Applied by| n175
  n413 -->|Applied by| n119
  n414 -->|Serves| n442
  n414 -->|Applied by| n161
  n414 -->|Applied by| n160
  n414 -->|Applied by| n178
  n414 -->|Applied by| n184
  n414 -->|Applied by| n173
  n415 -->|Serves| n444
  n415 -->|Applied by| n180
  n415 -->|Applied by| n161
  n415 -->|Applied by| n160
  n415 -->|Applied by| n182
  n415 -->|Applied by| n242
  n415 -->|Applied by| n102
  n416 -->|Serves| n444
  n416 -->|Applied by| n180
  n416 -->|Applied by| n173
  n416 -->|Applied by| n132
  n416 -->|Applied by| n123
  n416 -->|Applied by| n245
  n416 -->|Applied by| n244
  n417 -->|Serves| n442
  n417 -->|Applied by| n616
  n417 -->|Applied by| n221
  n417 -->|Applied by| n161
  n417 -->|Applied by| n29
  n417 -->|Applied by| n32
  n418 -->|Serves| n435
  n418 -->|Applied by| n173
  n418 -->|Applied by| n161
  n418 -->|Applied by| n180
  n419 -->|Serves| n442
  n419 -->|Applied by| n161
  n419 -->|Applied by| n623
  n420 -->|Serves| n442
  n420 -->|Applied by| n108
  n420 -->|Applied by| n128
  n420 -->|Applied by| n176
  n420 -->|Applied by| n333
  n420 -->|Applied by| n159
  n421 -->|Serves| n435
  n421 -->|Applied by| n160
  n421 -->|Applied by| n171
  n421 -->|Applied by| n187
  n421 -->|Applied by| n44
  n422 -->|Serves| n444
  n422 -->|Applied by| n180
  n422 -->|Applied by| n132
  n422 -->|Applied by| n385
  n422 -->|Applied by| n102
  n422 -->|Applied by| n173
  n422 -->|Applied by| n116
  n423 -->|Serves| n435
  n423 -->|Applied by| n40
  n423 -->|Applied by| n141
  n423 -->|Applied by| n137
  n423 -->|Applied by| n173
  n424 -->|Serves| n435
  n424 -->|Applied by| n126
  n424 -->|Applied by| n120
  n424 -->|Applied by| n607
  n424 -->|Applied by| n612
  n424 -->|Applied by| n610
  n424 -->|Applied by| n597
  n424 -->|Applied by| n584
  n425 -->|Serves| n436
  n425 -->|Applied by| n376
  n425 -->|Applied by| n374
  n425 -->|Applied by| n360
  n425 -->|Applied by| n356
  n425 -->|Applied by| n400
  n425 -->|Applied by| n402
  n425 -->|Applied by| n349
  n425 -->|Applied by| n354
  n425 -->|Applied by| n548
  n425 -->|Applied by| n549
  n425 -->|Applied by| n568
  n425 -->|Applied by| n567
  n425 -->|Applied by| n560
  n425 -->|Applied by| n559
  n426 -->|Serves| n435
  n426 -->|Applied by| n102
  n426 -->|Applied by| n189
  n426 -->|Applied by| n573
  n426 -->|Applied by| n572
  n426 -->|Applied by| n579
  n427 -->|Serves| n435
  n427 -->|Applied by| n161
  n427 -->|Applied by| n188
  n428 -->|Serves| n435
  n428 -->|Applied by| n173
  n428 -->|Applied by| n579
  n429 -->|Serves| n435
  n429 -->|Applied by| n173
  n429 -->|Applied by| n187
  n429 -->|Applied by| n180
  n430 -->|Serves| n442
  n430 -->|Applied by| n623
  n430 -->|Applied by| n616
  n430 -->|Applied by| n288
  n430 -->|Applied by| n292
  n430 -->|Applied by| n296
  n430 -->|Applied by| n303
  n430 -->|Applied by| n298
  n430 -->|Applied by| n291
  n430 -->|Applied by| n287
  n430 -->|Applied by| n286
  n430 -->|Applied by| n301
  n430 -->|Applied by| n300
  n430 -->|Applied by| n302
  n440 -->|Refines| n435
  n441 -->|Accepts| n440
  n445 -->|Releases| n54
  n446 -->|Releases| n54
  n446 -->|Assembled by| n536
  n447 -->|Releases| n54
  n447 -->|Assembled by| n546
  n448 -->|Releases| n54
  n448 -->|Assembled by| n447
  n449 -->|Releases| n54
  n449 -->|Assembled by| n448
  n450 -->|Releases| n54
  n450 -->|Assembled by| n446
  n451 -->|Releases| n54
  n451 -->|Assembled by| n450
  n452 -->|Releases| n54
  n452 -->|Assembled by| n451
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
  n459 -->|Assembled by| n445
  n460 -->|Releases| n54
  n460 -->|Assembled by| n458
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
  n469 -->|Assembled by| n468
  n470 -->|Releases| n54
  n470 -->|Assembled by| n459
  n471 -->|Releases| n54
  n471 -->|Assembled by| n469
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
  n477 -->|Assembled by| n476
  n478 -->|Releases| n54
  n478 -->|Assembled by| n477
  n479 -->|Releases| n54
  n479 -->|Assembled by| n478
  n480 -->|Releases| n54
  n480 -->|Assembled by| n479
  n481 -->|Releases| n54
  n481 -->|Assembled by| n470
  n482 -->|Releases| n54
  n482 -->|Assembled by| n480
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
  n488 -->|Assembled by| n487
  n489 -->|Releases| n54
  n489 -->|Assembled by| n488
  n490 -->|Releases| n54
  n490 -->|Assembled by| n489
  n491 -->|Releases| n54
  n491 -->|Assembled by| n490
  n492 -->|Releases| n54
  n492 -->|Assembled by| n481
  n493 -->|Releases| n54
  n493 -->|Assembled by| n491
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
  n499 -->|Assembled by| n498
  n500 -->|Releases| n54
  n500 -->|Assembled by| n499
  n501 -->|Releases| n54
  n501 -->|Assembled by| n500
  n502 -->|Releases| n54
  n502 -->|Assembled by| n501
  n503 -->|Releases| n54
  n503 -->|Assembled by| n492
  n504 -->|Releases| n54
  n504 -->|Assembled by| n502
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
  n510 -->|Assembled by| n509
  n511 -->|Releases| n54
  n511 -->|Assembled by| n510
  n512 -->|Releases| n54
  n512 -->|Assembled by| n511
  n513 -->|Releases| n54
  n513 -->|Assembled by| n512
  n514 -->|Releases| n54
  n514 -->|Assembled by| n503
  n515 -->|Releases| n54
  n515 -->|Assembled by| n513
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
  n521 -->|Assembled by| n520
  n522 -->|Releases| n54
  n522 -->|Assembled by| n521
  n523 -->|Releases| n54
  n523 -->|Assembled by| n522
  n524 -->|Releases| n54
  n524 -->|Assembled by| n523
  n525 -->|Releases| n54
  n525 -->|Assembled by| n514
  n526 -->|Releases| n54
  n526 -->|Assembled by| n524
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
  n532 -->|Assembled by| n531
  n533 -->|Releases| n54
  n533 -->|Assembled by| n532
  n534 -->|Releases| n54
  n534 -->|Assembled by| n533
  n535 -->|Releases| n54
  n535 -->|Assembled by| n534
  n536 -->|Releases| n54
  n536 -->|Assembled by| n525
  n537 -->|Releases| n54
  n537 -->|Assembled by| n535
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
  n543 -->|Assembled by| n542
  n544 -->|Releases| n54
  n544 -->|Assembled by| n543
  n545 -->|Releases| n54
  n545 -->|Assembled by| n544
  n546 -->|Releases| n54
  n546 -->|Assembled by| n545
  n547 -->|Serves| n435
  n547 -->|Depends on| n143
  n547 -->|Depends on| n564
  n547 -->|Depends on| n290
  n547 -->|Depends on| n297
  n547 -->|Depends on| n301
  n547 -->|Depends on| n157
  n548 -->|Chooses| n554
  n548 -->|In| n30
  n548 -->|In| n52
  n548 -->|Serves| n436
  n549 -->|Chooses| n556
  n549 -->|In| n30
  n549 -->|In| n52
  n549 -->|Serves| n436
  n551 -->|Serves| n435
  n551 -->|Depends on| n547
  n551 -->|Depends on| n552
  n551 -->|Depends on| n301
  n553 -->|Serves| n435
  n553 -->|Implements| n562
  n553 -->|Depends on| n558
  n553 -->|Depends on| n269
  n553 -->|Depends on| n347
  n553 -->|Depends on| n208
  n553 -->|Depends on| n210
  n553 -->|Depends on| n205
  n553 -->|Depends on| n154
  n553 -->|Depends on| n564
  n553 -->|Depends on| n301
  n554 -->|Serves| n435
  n554 -->|Implements| n552
  n554 -->|Depends on| n550
  n554 -->|Depends on| n156
  n554 -->|Depends on| n154
  n554 -->|Depends on| n251
  n554 -->|Depends on| n258
  n554 -->|Depends on| n260
  n554 -->|Depends on| n250
  n554 -->|Depends on| n252
  n554 -->|Depends on| n256
  n554 -->|Depends on| n263
  n554 -->|Depends on| n253
  n554 -->|Depends on| n259
  n554 -->|Depends on| n261
  n554 -->|Depends on| n265
  n554 -->|Depends on| n264
  n554 -->|Depends on| n247
  n554 -->|Depends on| n255
  n554 -->|Depends on| n301
  n555 -->|Serves| n435
  n555 -->|Applied by| n551
  n555 -->|Applied by| n569
  n555 -->|Applied by| n561
  n555 -->|Applied by| n547
  n555 -->|Applied by| n44
  n556 -->|Serves| n435
  n556 -->|Implements| n550
  n556 -->|Depends on| n278
  n556 -->|Depends on| n152
  n556 -->|Depends on| n7
  n556 -->|Depends on| n262
  n556 -->|Depends on| n273
  n556 -->|Depends on| n281
  n556 -->|Depends on| n285
  n556 -->|Depends on| n280
  n556 -->|Depends on| n272
  n556 -->|Depends on| n283
  n556 -->|Depends on| n274
  n556 -->|Depends on| n276
  n556 -->|Depends on| n277
  n556 -->|Depends on| n282
  n556 -->|Depends on| n290
  n556 -->|Depends on| n301
  n557 -->|Serves| n436
  n557 -->|Applied by| n551
  n557 -->|Applied by| n569
  n557 -->|Applied by| n561
  n557 -->|Applied by| n548
  n557 -->|Applied by| n549
  n557 -->|Applied by| n568
  n557 -->|Applied by| n567
  n557 -->|Applied by| n560
  n557 -->|Applied by| n559
  n559 -->|Chooses| n565
  n559 -->|In| n30
  n559 -->|In| n52
  n559 -->|Serves| n436
  n560 -->|Chooses| n553
  n560 -->|In| n30
  n560 -->|In| n52
  n560 -->|Serves| n436
  n561 -->|Serves| n435
  n561 -->|Depends on| n547
  n561 -->|Depends on| n562
  n561 -->|Depends on| n301
  n563 -->|Serves| n435
  n563 -->|Implements| n570
  n563 -->|Depends on| n566
  n563 -->|Depends on| n641
  n563 -->|Depends on| n639
  n563 -->|Depends on| n154
  n563 -->|Depends on| n637
  n563 -->|Depends on| n635
  n563 -->|Depends on| n636
  n563 -->|Depends on| n634
  n563 -->|Depends on| n640
  n563 -->|Depends on| n301
  n565 -->|Serves| n435
  n565 -->|Implements| n558
  n565 -->|Depends on| n269
  n565 -->|Depends on| n271
  n565 -->|Depends on| n347
  n565 -->|Depends on| n1
  n565 -->|Depends on| n11
  n565 -->|Depends on| n2
  n565 -->|Depends on| n208
  n565 -->|Depends on| n220
  n565 -->|Depends on| n217
  n565 -->|Depends on| n199
  n565 -->|Depends on| n205
  n565 -->|Depends on| n547
  n565 -->|Depends on| n290
  n565 -->|Depends on| n299
  n565 -->|Depends on| n301
  n565 -->|Depends on| n154
  n567 -->|Chooses| n571
  n567 -->|In| n30
  n567 -->|In| n52
  n567 -->|Serves| n436
  n568 -->|Chooses| n563
  n568 -->|In| n30
  n568 -->|In| n52
  n568 -->|Serves| n436
  n569 -->|Serves| n435
  n569 -->|Depends on| n547
  n569 -->|Depends on| n570
  n569 -->|Depends on| n301
  n571 -->|Serves| n435
  n571 -->|Implements| n566
  n571 -->|Depends on| n547
  n571 -->|Depends on| n639
  n571 -->|Depends on| n154
  n571 -->|Depends on| n637
  n571 -->|Depends on| n635
  n571 -->|Depends on| n642
  n571 -->|Depends on| n638
  n571 -->|Depends on| n290
  n571 -->|Depends on| n301
  n572 -->|Verifies| n108
  n572 -->|Verifies| n118
  n572 -->|Verifies| n160
  n572 -->|Verifies| n187
  n572 -->|Verifies| n551
  n572 -->|Verifies| n547
  n572 -->|Verifies| n554
  n572 -->|Verifies| n556
  n572 -->|Verifies| n176
  n572 -->|Verifies| n175
  n572 -->|Verifies| n366
  n572 -->|Verifies| n369
  n572 -->|Verifies| n395
  n572 -->|In| n52
  n572 -->|Depends on| n108
  n572 -->|Depends on| n578
  n572 -->|Depends on| n56
  n572 -->|Depends on| n51
  n572 -->|Depends on| n140
  n572 -->|Depends on| n21
  n572 -->|Depends on| n39
  n572 -->|Depends on| n41
  n572 -->|Depends on| n145
  n572 -->|Depends on| n287
  n572 -->|Depends on| n302
  n573 -->|Verifies| n161
  n573 -->|Verifies| n180
  n573 -->|Verifies| n184
  n573 -->|Verifies| n188
  n573 -->|Verifies| n171
  n573 -->|Verifies| n388
  n573 -->|Verifies| n401
  n573 -->|Verifies| n399
  n573 -->|Verifies| n366
  n573 -->|Verifies| n375
  n573 -->|Verifies| n357
  n573 -->|Verifies| n389
  n573 -->|In| n52
  n573 -->|Depends on| n161
  n573 -->|Depends on| n41
  n573 -->|Depends on| n17
  n573 -->|Depends on| n577
  n573 -->|Depends on| n302
  n574 -->|Verifies| n290
  n574 -->|Verifies| n297
  n574 -->|Verifies| n157
  n574 -->|Verifies| n158
  n574 -->|Verifies| n154
  n574 -->|Verifies| n316
  n574 -->|In| n52
  n574 -->|Depends on| n290
  n574 -->|Depends on| n297
  n574 -->|Depends on| n157
  n574 -->|Depends on| n158
  n574 -->|Depends on| n154
  n574 -->|Depends on| n295
  n574 -->|Depends on| n316
  n574 -->|Depends on| n575
  n574 -->|Depends on| n302
  n576 -->|Verifies| n162
  n576 -->|Verifies| n170
  n576 -->|Verifies| n169
  n576 -->|Verifies| n182
  n576 -->|Verifies| n179
  n576 -->|In| n52
  n576 -->|Depends on| n162
  n576 -->|Depends on| n170
  n576 -->|Depends on| n169
  n576 -->|Depends on| n182
  n576 -->|Depends on| n179
  n576 -->|Depends on| n580
  n576 -->|Depends on| n302
  n579 -->|Verifies| n173
  n579 -->|In| n52
  n579 -->|Depends on| n173
  n579 -->|Depends on| n161
  n579 -->|Depends on| n41
  n579 -->|Depends on| n17
  n579 -->|Depends on| n302
  n581 -->|Serves| n435
  n582 -->|Serves| n435
  n583 -->|Serves| n435
  n584 -->|Checks| n586
  n584 -->|Run by| n129
  n584 -->|Signed by| n596
  n585 -->|Checks| n586
  n585 -->|Run by| n112
  n585 -->|Signed by| n596
  n585 -->|Verifies| n350
  n585 -->|Verifies| n352
  n585 -->|Verifies| n351
  n585 -->|Verifies| n377
  n585 -->|Verifies| n378
  n585 -->|Verifies| n379
  n585 -->|Verifies| n396
  n585 -->|Verifies| n384
  n585 -->|Verifies| n383
  n585 -->|Verifies| n373
  n585 -->|Verifies| n394
  n586 -->|Produced by| n54
  n587 -->|Serves| n435
  n588 -->|Serves| n435
  n589 -->|Its obligations| n588
  n589 -->|Its obligations| n595
  n589 -->|Its obligations| n581
  n589 -->|Its obligations| n583
  n589 -->|Its obligations| n582
  n589 -->|Its obligations| n587
  n590 -->|Produced by| n115
  n590 -->|Carries| n36
  n592 -->|Checks| n590
  n592 -->|Run by| n599
  n592 -->|Signed by| n596
  n592 -->|Verifies| n63
  n592 -->|Verifies| n62
  n592 -->|Verifies| n61
  n592 -->|Verifies| n60
  n592 -->|Verifies| n59
  n592 -->|Verifies| n57
  n592 -->|Verifies| n58
  n594 -->|Serves| n435
  n594 -->|Depends on| n336
  n594 -->|Depends on| n269
  n594 -->|Depends on| n197
  n595 -->|Serves| n435
  n597 -->|Ships| n586
  n597 -->|Ships| n600
  n597 -->|Ships| n590
  n597 -->|Deployed by| n102
  n597 -->|Programs assembled for| n30
  n597 -->|Follows the policy| n589
  n598 -->|Verifies| n599
  n598 -->|Verifies| n594
  n598 -->|In| n52
  n598 -->|Depends on| n599
  n598 -->|Depends on| n590
  n598 -->|Depends on| n594
  n598 -->|Depends on| n603
  n598 -->|Depends on| n593
  n598 -->|Depends on| n302
  n599 -->|Serves| n435
  n599 -->|Part of| n604
  n599 -->|Depends on| n590
  n599 -->|Depends on| n295
  n599 -->|Depends on| n594
  n599 -->|Depends on| n591
  n599 -->|Depends on| n603
  n600 -->|Produced by| n36
  n600 -->|Assembled for| n15
  n601 -->|In| n52
  n602 -->|In| n30
  n603 -->|Written in| n295
  n604 -->|Deployed in| n30
  n605 -->|Implements| n48
  n605 -->|Depends on| n25
  n607 -->|Serves| n435
  n607 -->|Depends on| n140
  n607 -->|Depends on| n612
  n607 -->|Depends on| n21
  n607 -->|Depends on| n39
  n607 -->|Depends on| n25
  n607 -->|Depends on| n138
  n607 -->|Depends on| n169
  n607 -->|Depends on| n48
  n608 -->|Chooses| n605
  n608 -->|In| n30
  n608 -->|In| n52
  n608 -->|Serves| n435
  n609 -->|Serves| n435
  n609 -->|Depends on| n145
  n609 -->|Depends on| n180
  n609 -->|Depends on| n140
  n609 -->|Depends on| n192
  n609 -->|Depends on| n21
  n609 -->|Depends on| n39
  n610 -->|Refines| n435
  n611 -->|Accepts| n610
  n616 -->|Serves| n435
  n616 -->|Depends on| n141
  n616 -->|Depends on| n292
  n620 -->|Written in| n295
  n621 -->|Serves| n435
  n621 -->|Applied by| n623
  n621 -->|Applied by| n49
  n622 -->|Serves| n435
  n622 -->|Applied by| n623
  n622 -->|Applied by| n616
  n622 -->|Applied by| n49
  n623 -->|Serves| n435
  n623 -->|Serves| n442
  n623 -->|Depends on| n49
  n623 -->|Depends on| n617
  n623 -->|Depends on| n620
  n623 -->|Depends on| n618
  n623 -->|Depends on| n619
  n623 -->|Depends on| n613
  n623 -->|Depends on| n21
  n623 -->|Depends on| n27
  n623 -->|Depends on| n46
  n623 -->|Depends on| n140
  n623 -->|Depends on| n39
  n623 -->|Depends on| n25
  n624 -->|Defined by| n627
  n624 -->|Read in| n630
  n624 -->|Depends on| n627
  n625 -->|Defined by| n627
  n625 -->|Read in| n630
  n625 -->|Depends on| n627
  n626 -->|Defined by| n627
  n626 -->|Read in| n630
  n626 -->|Depends on| n627
  n626 -->|Depends on| n630
  n628 -->|Defined by| n627
  n628 -->|Read in| n630
  n628 -->|Depends on| n627
  n628 -->|Depends on| n626
  n629 -->|Defined by| n627
  n629 -->|Read in| n630
  n629 -->|Depends on| n627
  n629 -->|Depends on| n631
  n629 -->|Depends on| n626
  n630 -->|Defined by| n627
  n630 -->|Queries written in| n614
  n630 -->|Read by| n623
  n630 -->|Uses| n307
  n632 -->|Serves| n435
  n632 -->|Depends on| n627
  n632 -->|Depends on| n631
  n632 -->|Depends on| n140
  n632 -->|Depends on| n625
  n632 -->|Depends on| n626
  n632 -->|Depends on| n628
  n632 -->|Depends on| n624
  n632 -->|Depends on| n629
  n632 -->|Depends on| n39
  n632 -->|Depends on| n40
  n632 -->|Depends on| n290
  n632 -->|Depends on| n292
  n634 -->|Defined by| n641
  n634 -->|Depends on| n641
  n635 -->|Defined by| n641
  n635 -->|Depends on| n641
  n635 -->|Depends on| n637
  n635 -->|Depends on| n639
  n636 -->|Defined by| n641
  n636 -->|Depends on| n641
  n637 -->|Defined by| n641
  n637 -->|Depends on| n641
  n637 -->|Depends on| n639
  n638 -->|Defined by| n641
  n638 -->|Depends on| n641
  n638 -->|Depends on| n633
  n640 -->|Defined by| n641
  n640 -->|Depends on| n641
  n642 -->|Defined by| n641
  n642 -->|Depends on| n641
  n642 -->|Depends on| n633
  n643 -->|Defined by| n670
  n643 -->|Read in| n668
  n643 -->|Depends on| n670
  n644 -->|Defined by| n670
  n644 -->|Read in| n668
  n644 -->|Depends on| n670
  n645 -->|Defined by| n670
  n645 -->|Read in| n668
  n645 -->|Depends on| n670
  n646 -->|Defined by| n670
  n646 -->|Read in| n668
  n646 -->|Depends on| n670
  n647 -->|Defined by| n670
  n647 -->|Read in| n668
  n647 -->|Depends on| n670
  n648 -->|Defined by| n670
  n648 -->|Read in| n668
  n648 -->|Depends on| n670
  n649 -->|Defined by| n670
  n649 -->|Read in| n668
  n649 -->|Depends on| n670
  n649 -->|Depends on| n667
  n650 -->|Defined by| n670
  n650 -->|Read in| n668
  n650 -->|Depends on| n670
  n651 -->|Defined by| n670
  n651 -->|Read in| n668
  n651 -->|Depends on| n670
  n652 -->|Defined by| n670
  n652 -->|Read in| n668
  n652 -->|Depends on| n670
  n653 -->|Defined by| n670
  n653 -->|Read in| n668
  n653 -->|Depends on| n670
  n654 -->|Defined by| n670
  n654 -->|Read in| n668
  n654 -->|Depends on| n670
  n655 -->|Defined by| n670
  n655 -->|Read in| n668
  n655 -->|Depends on| n670
  n656 -->|Defined by| n670
  n656 -->|Read in| n668
  n656 -->|Depends on| n670
  n657 -->|Defined by| n670
  n657 -->|Read in| n668
  n657 -->|Depends on| n670
  n657 -->|Depends on| n667
  n658 -->|Defined by| n670
  n658 -->|Read in| n668
  n658 -->|Depends on| n670
  n659 -->|Defined by| n670
  n659 -->|Read in| n668
  n659 -->|Depends on| n670
  n660 -->|Defined by| n670
  n660 -->|Read in| n668
  n660 -->|Depends on| n670
  n661 -->|Defined by| n670
  n661 -->|Read in| n668
  n661 -->|Depends on| n670
  n662 -->|Defined by| n670
  n662 -->|Read in| n668
  n662 -->|Depends on| n670
  n663 -->|Defined by| n670
  n663 -->|Read in| n668
  n663 -->|Depends on| n670
  n665 -->|Defined by| n670
  n665 -->|Read in| n668
  n665 -->|Depends on| n670
  n665 -->|Depends on| n667
  n666 -->|Defined by| n670
  n666 -->|Read in| n668
  n666 -->|Depends on| n670
  n667 -->|Defined by| n670
  n667 -->|Read in| n668
  n667 -->|Depends on| n670
  n668 -->|Queries written in| n614
  n668 -->|Read by| n623
  n668 -->|Watches the globals| n673
  n668 -->|Uses| n314
  n669 -->|Serves| n435
  n671 -->|Serves| n435
  n671 -->|Depends on| n668
  n671 -->|Depends on| n670
  n671 -->|Depends on| n137
  n671 -->|Depends on| n664
  n671 -->|Depends on| n144
  n671 -->|Depends on| n143
  n671 -->|Depends on| n654
  n671 -->|Depends on| n667
  n671 -->|Depends on| n655
  n671 -->|Depends on| n661
  n671 -->|Depends on| n647
  n671 -->|Depends on| n646
  n671 -->|Depends on| n663
  n671 -->|Depends on| n665
  n671 -->|Depends on| n659
  n671 -->|Depends on| n643
  n671 -->|Depends on| n648
  n671 -->|Depends on| n657
  n671 -->|Depends on| n649
  n671 -->|Depends on| n644
  n671 -->|Depends on| n662
  n671 -->|Depends on| n660
  n671 -->|Depends on| n672
  n671 -->|Depends on| n652
  n671 -->|Depends on| n666
  n671 -->|Depends on| n645
  n671 -->|Depends on| n39
  n671 -->|Depends on| n40
  n671 -->|Depends on| n290
  n671 -->|Depends on| n292
  n672 -->|Defined by| n670
  n672 -->|Read in| n668
  n672 -->|Depends on| n670
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
