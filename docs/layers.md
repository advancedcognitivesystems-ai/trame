# Layers

*The graph in force on 9 November 2026, ordered by distance to the goals.*

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
    n57["Amendments sent to trame dev<br/><small>Implementation</small>"]:::held
    n58["The browser's gzip<br/><small>Implementation</small>"]:::held
    n59["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::held
    n60["Local storage<br/><small>Implementation</small>"]:::held
    n61["The browser's window<br/><small>Implementation</small>"]:::held
    n62["Explorer of a graph<br/><small>Function</small>"]:::held
    n63["Show the graph<br/><small>Entry point</small>"]:::held
    n64["The browser runs the page<br/><small>Technical choice</small>"]:::held
    n65["The page is assembled<br/><small>Architecture decision</small>"]:::held
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
    n93["The registry filled<br/><small>Scenario</small>"]:::held
    n94["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n95["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n96["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n97["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n98["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n99["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n100["A value amended<br/><small>Scenario</small>"]:::held
    n101["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n102["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n103["Advance<br/><small>Entry point</small>"]:::held
    n104["Amend<br/><small>Entry point</small>"]:::held
    n105["An amendment prepared<br/><small>Function</small>"]:::held
    n106["Assemble a component<br/><small>Entry point</small>"]:::held
    n107["Assembler<br/><small>Function</small>"]:::held
    n108["Audit the packages<br/><small>Entry point</small>"]:::held
    n109["Build<br/><small>Entry point</small>"]:::held
    n110["Two builds compared<br/><small>Function</small>"]:::held
    n111["Deliver<br/><small>Entry point</small>"]:::held
    n112["Start trame dev<br/><small>Entry point</small>"]:::held
    n113["Ask the machine<br/><small>Entry point</small>"]:::held
    n114["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n115["Payload<br/><small>Entry point</small>"]:::held
    n116["Export the page<br/><small>Entry point</small>"]:::held
    n117["Start a project<br/><small>Entry point</small>"]:::held
    n118["Plan<br/><small>Entry point</small>"]:::held
    n119["Preparation<br/><small>Function</small>"]:::held
    n120["Publish<br/><small>Entry point</small>"]:::held
    n121["Record evidence<br/><small>Entry point</small>"]:::held
    n122["A module of references<br/><small>Function</small>"]:::held
    n123["Fill the registry<br/><small>Entry point</small>"]:::held
    n124["Release a version<br/><small>Entry point</small>"]:::held
    n125["Render a view<br/><small>Function</small>"]:::held
    n126["Run a component<br/><small>Entry point</small>"]:::held
    n127["Ship<br/><small>Entry point</small>"]:::held
    n128["Show a view<br/><small>Entry point</small>"]:::held
    n129["Take the snapshot<br/><small>Entry point</small>"]:::held
    n130["Test the laws<br/><small>Entry point</small>"]:::held
    n131["Upgrade<br/><small>Entry point</small>"]:::held
    n132["View by its name<br/><small>Entry point</small>"]:::held
    n133["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n134["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n135["Default rank<br/><small>Decision</small>"]:::neutral
    n136["Documentation comment<br/><small>Decision</small>"]:::neutral
    n137["Names of the documents<br/><small>Standard</small>"]:::neutral
    n138["The frozen API<br/><small>Standard</small>"]:::neutral
    n139["JSON formatting<br/><small>Decision</small>"]:::neutral
    n140["The language's names<br/><small>Decision</small>"]:::neutral
    n141["Project layout<br/><small>Decision</small>"]:::neutral
    n142["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n143["How a project starts<br/><small>Decision</small>"]:::neutral
    n144["Trame references<br/><small>Standard</small>"]:::neutral
    n145["Names of steps<br/><small>Decision</small>"]:::neutral
    n146["Trame's commands<br/><small>Standard</small>"]:::neutral
    n147["Trame's environment<br/><small>Standard</small>"]:::neutral
    n148["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n149["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n150["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n151["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n152["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n153["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n154["How a number is written<br/><small>Decision</small>"]:::neutral
    n155["Punctuation of documents<br/><small>Function</small>"]:::held
    n156["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n157["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n158["Values with their units<br/><small>Function</small>"]:::held
    n159["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n160["Assembly<br/><small>Function</small>"]:::held
    n161["Compilation API<br/><small>Function</small>"]:::held
    n162["Compiler<br/><small>Function</small>"]:::held
    n163["Cycles<br/><small>Function</small>"]:::held
    n164["Date bundle<br/><small>Function</small>"]:::held
    n165["trame dev server<br/><small>Function</small>"]:::held
    n166["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n167["Differences<br/><small>Function</small>"]:::held
    n168["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n169["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n170["Fingerprints<br/><small>Function</small>"]:::held
    n171["Pseudo-random generator<br/><small>Function</small>"]:::held
    n172["Graph<br/><small>Function</small>"]:::held
    n173["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n174["Laws<br/><small>Function</small>"]:::held
    n175["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n176["Lock<br/><small>Function</small>"]:::held
    n177["Machine outputs<br/><small>Function</small>"]:::held
    n178["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n179["Payload<br/><small>Function</small>"]:::held
    n180["Positions<br/><small>Function</small>"]:::held
    n181["Project<br/><small>Function</small>"]:::held
    n182["The runs of a project<br/><small>Function</small>"]:::held
    n183["References<br/><small>Function</small>"]:::held
    n184["A shipment's pipeline<br/><small>Function</small>"]:::held
    n185["Static reading<br/><small>Function</small>"]:::held
    n186["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n187["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n188["Views<br/><small>Function</small>"]:::held
    n189["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n190["Accept a candidate<br/><small>Requirement</small>"]:::held
    n191["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n192["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n193["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n194["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n195["Records of the releases<br/><small>Function</small>"]:::held
    n196["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n197["Attribute presence<br/><small>Syntax element</small>"]:::held
    n198["Attribute selector<br/><small>Syntax element</small>"]:::held
    n199["Class selector<br/><small>Syntax element</small>"]:::held
    n200["Declaration<br/><small>Syntax element</small>"]:::held
    n201["Rule<br/><small>Syntax element</small>"]:::held
    n202["CSS style sheets<br/><small>Language</small>"]:::held
    n203["Variable<br/><small>Syntax element</small>"]:::held
    n204["Custom property<br/><small>Syntax element</small>"]:::held
    n205["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n206["Escaped text<br/><small>Syntax element</small>"]:::held
    n207["Attributes<br/><small>Syntax element</small>"]:::held
    n208["Element over several lines<br/><small>Syntax element</small>"]:::held
    n209["HTML element<br/><small>Syntax element</small>"]:::held
    n210["End tag<br/><small>Syntax element</small>"]:::held
    n211["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n212["HTML markup<br/><small>Language</small>"]:::held
    n213["Start tag<br/><small>Syntax element</small>"]:::held
    n214["JSON in a script<br/><small>Syntax element</small>"]:::held
    n215["Media feature<br/><small>Syntax element</small>"]:::held
    n216["Media rule<br/><small>Syntax element</small>"]:::held
    n217["Negation<br/><small>Syntax element</small>"]:::held
    n218["Path data<br/><small>Syntax element</small>"]:::held
    n219["Script<br/><small>Syntax element</small>"]:::held
    n220["Selector list<br/><small>Syntax element</small>"]:::held
    n221["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n222["Drivers<br/><small>Function</small>"]:::held
    n223["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n224["Answers without crashing<br/><small>Requirement</small>"]:::held
    n225["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n226["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n227["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n228["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n229["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n230["Complete declaration<br/><small>Requirement</small>"]:::held
    n231["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n232["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n233["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n234["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n235["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n236["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n237["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n238["Same input, same answer<br/><small>Requirement</small>"]:::held
    n239["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n240["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n241["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n242["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n243["What belongs to a library<br/><small>Requirement</small>"]:::held
    n244["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n245["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n246["A release is settled<br/><small>Requirement</small>"]:::held
    n247["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n248["Anchor<br/><small>Syntax element</small>"]:::held
    n249["Backtick string<br/><small>Syntax element</small>"]:::held
    n250["Blank line<br/><small>Syntax element</small>"]:::held
    n251["Block quote<br/><small>Syntax element</small>"]:::held
    n252["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n253["Code block<br/><small>Syntax element</small>"]:::held
    n254["Code span<br/><small>Syntax element</small>"]:::held
    n255["CommonMark<br/><small>Standard</small>"]:::neutral
    n256["Collapsible block<br/><small>Syntax element</small>"]:::held
    n257["Emphasis<br/><small>Syntax element</small>"]:::held
    n258["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n259["Heading<br/><small>Syntax element</small>"]:::held
    n260["Link<br/><small>Syntax element</small>"]:::held
    n261["List item<br/><small>Syntax element</small>"]:::held
    n262["Relative reference<br/><small>Syntax element</small>"]:::held
    n263["Small text<br/><small>Syntax element</small>"]:::held
    n264["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n265["Table<br/><small>Syntax element</small>"]:::held
    n266["Table cell<br/><small>Syntax element</small>"]:::held
    n267["Delimiter row<br/><small>Syntax element</small>"]:::held
    n268["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n269["Around the documents<br/><small>Decision</small>"]:::neutral
    n270["Documents in the page<br/><small>Decision</small>"]:::neutral
    n271["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n272["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n273["Class definition<br/><small>Syntax element</small>"]:::held
    n274["Flowchart<br/><small>Syntax element</small>"]:::held
    n275["Gantt chart<br/><small>Syntax element</small>"]:::held
    n276["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n277["Section<br/><small>Syntax element</small>"]:::held
    n278["Task<br/><small>Syntax element</small>"]:::held
    n279["Mermaid<br/><small>Standard</small>"]:::neutral
    n280["Label<br/><small>Syntax element</small>"]:::held
    n281["Link<br/><small>Syntax element</small>"]:::held
    n282["Node<br/><small>Syntax element</small>"]:::held
    n283["Milestone<br/><small>Syntax element</small>"]:::held
    n284["Node style<br/><small>Syntax element</small>"]:::held
    n285["Style properties<br/><small>Syntax element</small>"]:::held
    n286["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n287["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n288["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n289["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n290["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n291["Dates<br/><small>Function</small>"]:::held
    n292["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n293["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n294["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n295["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n296["Language<br/><small>Decision</small>"]:::neutral
    n297["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n298["Lists<br/><small>Function</small>"]:::held
    n299["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n300["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n301["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n302["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n303["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n304["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n305["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n306["Grammar of CSS<br/><small>Package</small>"]:::held
    n307["esbuild<br/><small>Package</small>"]:::held
    n308["Grammar of HCL<br/><small>Package</small>"]:::held
    n309["Grammar of HTML<br/><small>Package</small>"]:::held
    n310["Types of Node.js<br/><small>Package</small>"]:::held
    n311["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n312["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n313["The standard library<br/><small>Package</small>"]:::neutral
    n314["tsx<br/><small>Package</small>"]:::held
    n315["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n316["TypeScript<br/><small>Package</small>"]:::held
    n317["Order of versions<br/><small>Function</small>"]:::held
    n318["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n319["Banner<br/><small>Syntax element</small>"]:::held
    n320["Brand<br/><small>Syntax element</small>"]:::held
    n321["State of the compilation<br/><small>Syntax element</small>"]:::held
    n322["Dates<br/><small>Syntax element</small>"]:::held
    n323["Head of the document<br/><small>Syntax element</small>"]:::held
    n324["Document picker<br/><small>Syntax element</small>"]:::held
    n325["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n326["Fonts<br/><small>Syntax element</small>"]:::held
    n327["Logo<br/><small>Syntax element</small>"]:::held
    n328["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n329["Main area<br/><small>Syntax element</small>"]:::held
    n330["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n331["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n332["Navigation<br/><small>Syntax element</small>"]:::held
    n333["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n334["Page<br/><small>Function</small>"]:::held
    n335["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n336["Document of the page<br/><small>Syntax element</small>"]:::held
    n337["Regions of the page<br/><small>Decision</small>"]:::neutral
    n338["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n339["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n340["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n341["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n342["Shell<br/><small>Syntax element</small>"]:::held
    n343["Side bar<br/><small>Syntax element</small>"]:::held
    n344["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n345["Colours of a status<br/><small>Syntax element</small>"]:::held
    n346["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n347["Theme<br/><small>Syntax element</small>"]:::held
    n348["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n349["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n350["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n351["System files, for reading<br/><small>Implementation</small>"]:::held
    n352["Trees on disk<br/><small>Implementation</small>"]:::held
    n353["System files, for writing<br/><small>Implementation</small>"]:::held
    n354["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n355["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n356["esbuild<br/><small>Implementation</small>"]:::held
    n357["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n358["Example process<br/><small>Function</small>"]:::held
    n359["Example project<br/><small>Decision</small>"]:::neutral
    n360["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n361["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n362["Amendments in place<br/><small>Implementation</small>"]:::held
    n363["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n364["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n365["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n366["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n367["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n368["A server in memory<br/><small>Function</small>"]:::held
    n369["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n370["Terminal in memory<br/><small>Function</small>"]:::held
    n371["Command line<br/><small>Implementation</small>"]:::held
    n372["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n373["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n374["Node HTTP server<br/><small>Implementation</small>"]:::held
    n375["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n376["Node paths<br/><small>Implementation</small>"]:::held
    n377["NodePlatform<br/><small>Technical choice</small>"]:::held
    n378["Node process<br/><small>Implementation</small>"]:::held
    n379["Node programs<br/><small>Implementation</small>"]:::held
    n380["Node terminal<br/><small>Implementation</small>"]:::held
    n381["Node timer<br/><small>Implementation</small>"]:::held
    n382["No installer in test<br/><small>Implementation</small>"]:::held
    n383["No registry in test<br/><small>Function</small>"]:::held
    n384["npm installs<br/><small>Implementation</small>"]:::held
    n385["npm's reports<br/><small>Implementation</small>"]:::held
    n386["Packages by their origin<br/><small>Implementation</small>"]:::held
    n387["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n388["Page resources<br/><small>Implementation</small>"]:::held
    n389["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n390["Results kept in the process<br/><small>Implementation</small>"]:::held
    n391["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n392["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n393["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n394["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n395["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n396["Stopped clock<br/><small>Function</small>"]:::held
    n397["System clock<br/><small>Implementation</small>"]:::held
    n398["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n399["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n400["Trame's prelude<br/><small>Implementation</small>"]:::held
    n401["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n402["tsx loader<br/><small>Implementation</small>"]:::held
    n403["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n404["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n405["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n406["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n407["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n408["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n409["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n410["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n411["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n412["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n413["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n414["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n415["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n416["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n417["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n418["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n419["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n420["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n421["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n422["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n423["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n424["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n425["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n426["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n427["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n428["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n429["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n430["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n431["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n432["Candidate dates<br/><small>Decision</small>"]:::neutral
    n433["Claim sets<br/><small>Decision</small>"]:::neutral
    n434["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n435["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n436["A specification that runs<br/><small>Goal</small>"]:::neutral
    n437["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n438["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n439["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n440["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n441["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n442["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n443["A single source of truth<br/><small>Goal</small>"]:::neutral
    n444["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n445["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n446["Generation 1<br/><small>Release</small>"]:::neutral
    n447["Generation 10<br/><small>Release</small>"]:::neutral
    n448["Generation 100<br/><small>Release</small>"]:::neutral
    n449["Generation 101<br/><small>Release</small>"]:::neutral
    n450["Generation 102<br/><small>Release</small>"]:::neutral
    n451["Generation 103<br/><small>Release</small>"]:::neutral
    n452["Generation 104<br/><small>Release</small>"]:::neutral
    n453["Generation 11<br/><small>Release</small>"]:::neutral
    n454["Generation 12<br/><small>Release</small>"]:::neutral
    n455["Generation 13<br/><small>Release</small>"]:::neutral
    n456["Generation 14<br/><small>Release</small>"]:::neutral
    n457["Generation 15<br/><small>Release</small>"]:::neutral
    n458["Generation 16<br/><small>Release</small>"]:::neutral
    n459["Generation 17<br/><small>Release</small>"]:::neutral
    n460["Generation 18<br/><small>Release</small>"]:::neutral
    n461["Generation 19<br/><small>Release</small>"]:::neutral
    n462["Generation 2<br/><small>Release</small>"]:::neutral
    n463["Generation 20<br/><small>Release</small>"]:::neutral
    n464["Generation 21<br/><small>Release</small>"]:::neutral
    n465["Generation 22<br/><small>Release</small>"]:::neutral
    n466["Generation 23<br/><small>Release</small>"]:::neutral
    n467["Generation 24<br/><small>Release</small>"]:::neutral
    n468["Generation 25<br/><small>Release</small>"]:::neutral
    n469["Generation 26<br/><small>Release</small>"]:::neutral
    n470["Generation 27<br/><small>Release</small>"]:::neutral
    n471["Generation 28<br/><small>Release</small>"]:::neutral
    n472["Generation 29<br/><small>Release</small>"]:::neutral
    n473["Generation 3<br/><small>Release</small>"]:::neutral
    n474["Generation 30<br/><small>Release</small>"]:::neutral
    n475["Generation 31<br/><small>Release</small>"]:::neutral
    n476["Generation 32<br/><small>Release</small>"]:::neutral
    n477["Generation 33<br/><small>Release</small>"]:::neutral
    n478["Generation 34<br/><small>Release</small>"]:::neutral
    n479["Generation 35<br/><small>Release</small>"]:::neutral
    n480["Generation 36<br/><small>Release</small>"]:::neutral
    n481["Generation 37<br/><small>Release</small>"]:::neutral
    n482["Generation 38<br/><small>Release</small>"]:::neutral
    n483["Generation 39<br/><small>Release</small>"]:::neutral
    n484["Generation 4<br/><small>Release</small>"]:::neutral
    n485["Generation 40<br/><small>Release</small>"]:::neutral
    n486["Generation 41<br/><small>Release</small>"]:::neutral
    n487["Generation 42<br/><small>Release</small>"]:::neutral
    n488["Generation 43<br/><small>Release</small>"]:::neutral
    n489["Generation 44<br/><small>Release</small>"]:::neutral
    n490["Generation 45<br/><small>Release</small>"]:::neutral
    n491["Generation 46<br/><small>Release</small>"]:::neutral
    n492["Generation 47<br/><small>Release</small>"]:::neutral
    n493["Generation 48<br/><small>Release</small>"]:::neutral
    n494["Generation 49<br/><small>Release</small>"]:::neutral
    n495["Generation 5<br/><small>Release</small>"]:::neutral
    n496["Generation 50<br/><small>Release</small>"]:::neutral
    n497["Generation 51<br/><small>Release</small>"]:::neutral
    n498["Generation 52<br/><small>Release</small>"]:::neutral
    n499["Generation 53<br/><small>Release</small>"]:::neutral
    n500["Generation 54<br/><small>Release</small>"]:::neutral
    n501["Generation 55<br/><small>Release</small>"]:::neutral
    n502["Generation 56<br/><small>Release</small>"]:::neutral
    n503["Generation 57<br/><small>Release</small>"]:::neutral
    n504["Generation 58<br/><small>Release</small>"]:::neutral
    n505["Generation 59<br/><small>Release</small>"]:::neutral
    n506["Generation 6<br/><small>Release</small>"]:::neutral
    n507["Generation 60<br/><small>Release</small>"]:::neutral
    n508["Generation 61<br/><small>Release</small>"]:::neutral
    n509["Generation 62<br/><small>Release</small>"]:::neutral
    n510["Generation 63<br/><small>Release</small>"]:::neutral
    n511["Generation 64<br/><small>Release</small>"]:::neutral
    n512["Generation 65<br/><small>Release</small>"]:::neutral
    n513["Generation 66<br/><small>Release</small>"]:::neutral
    n514["Generation 67<br/><small>Release</small>"]:::neutral
    n515["Generation 68<br/><small>Release</small>"]:::neutral
    n516["Generation 69<br/><small>Release</small>"]:::neutral
    n517["Generation 7<br/><small>Release</small>"]:::neutral
    n518["Generation 70<br/><small>Release</small>"]:::neutral
    n519["Generation 71<br/><small>Release</small>"]:::neutral
    n520["Generation 72<br/><small>Release</small>"]:::neutral
    n521["Generation 73<br/><small>Release</small>"]:::neutral
    n522["Generation 74<br/><small>Release</small>"]:::neutral
    n523["Generation 75<br/><small>Release</small>"]:::neutral
    n524["Generation 76<br/><small>Release</small>"]:::neutral
    n525["Generation 77<br/><small>Release</small>"]:::neutral
    n526["Generation 78<br/><small>Release</small>"]:::neutral
    n527["Generation 79<br/><small>Release</small>"]:::neutral
    n528["Generation 8<br/><small>Release</small>"]:::neutral
    n529["Generation 80<br/><small>Release</small>"]:::neutral
    n530["Generation 81<br/><small>Release</small>"]:::neutral
    n531["Generation 82<br/><small>Release</small>"]:::neutral
    n532["Generation 83<br/><small>Release</small>"]:::neutral
    n533["Generation 84<br/><small>Release</small>"]:::neutral
    n534["Generation 85<br/><small>Release</small>"]:::neutral
    n535["Generation 86<br/><small>Release</small>"]:::neutral
    n536["Generation 87<br/><small>Release</small>"]:::neutral
    n537["Generation 88<br/><small>Release</small>"]:::neutral
    n538["Generation 89<br/><small>Release</small>"]:::neutral
    n539["Generation 9<br/><small>Release</small>"]:::neutral
    n540["Generation 90<br/><small>Release</small>"]:::neutral
    n541["Generation 91<br/><small>Release</small>"]:::neutral
    n542["Generation 92<br/><small>Release</small>"]:::neutral
    n543["Generation 93<br/><small>Release</small>"]:::neutral
    n544["Generation 94<br/><small>Release</small>"]:::neutral
    n545["Generation 95<br/><small>Release</small>"]:::neutral
    n546["Generation 96<br/><small>Release</small>"]:::neutral
    n547["Generation 97<br/><small>Release</small>"]:::neutral
    n548["Generation 98<br/><small>Release</small>"]:::neutral
    n549["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n550["Common rendering<br/><small>Function</small>"]:::held
    n551["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n552["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n553["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n554["Rendering of the files<br/><small>Function</small>"]:::held
    n555["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n556["HTML writer<br/><small>Function</small>"]:::held
    n557["Markdown writer<br/><small>Function</small>"]:::held
    n558["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n559["Mermaid diagrams<br/><small>Function</small>"]:::held
    n560["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n561["Figures of the page<br/><small>Port</small>"]:::neutral
    n562["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n563["The page in HTML<br/><small>Technical choice</small>"]:::held
    n564["Rendering in the page<br/><small>Function</small>"]:::held
    n565["Syntax of the page<br/><small>Port</small>"]:::neutral
    n566["Plain text writer<br/><small>Function</small>"]:::held
    n567["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n568["Figures in SVG<br/><small>Function</small>"]:::held
    n569["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n570["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n571["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n572["Rendering in the terminal<br/><small>Function</small>"]:::held
    n573["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n574["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n575["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n576["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n577["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n578["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n579["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n580["Shape of the example<br/><small>Decision</small>"]:::neutral
    n581["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n582["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n583["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n584["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n585["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n586["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n587["The candidate plays the laws<br/><small>Check</small>"]:::held
    n588["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n589["The candidate engine<br/><small>Artefact</small>"]:::held
    n590["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n591["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n592["How a generation is made<br/><small>Policy</small>"]:::neutral
    n593["The graph page<br/><small>Artefact</small>"]:::held
    n594["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n595["The graph page opens<br/><small>Check</small>"]:::held
    n596["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n597["What the graph page is asked<br/><small>Function</small>"]:::held
    n598["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n599["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n600["The next generation<br/><small>Shipment</small>"]:::held
    n601["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n602["Open the graph page<br/><small>Entry point</small>"]:::held
    n603["The page's program<br/><small>Artefact</small>"]:::held
    n604["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n605["The SDLC on the machine<br/><small>Technical choice</small>"]:::held
    n606["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n607["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n608["Attribution<br/><small>Function</small>"]:::held
    n609["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n610["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n611["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n612["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n613["Ship only what holds<br/><small>Requirement</small>"]:::held
    n614["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n615["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n616["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n617["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n618["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n619["Checks of a body<br/><small>Function</small>"]:::held
    n620["Captures<br/><small>Standard</small>"]:::neutral
    n621["Categories of literals<br/><small>Decision</small>"]:::neutral
    n622["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n623["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n624["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n625["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n626["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n627["Attribute<br/><small>Syntax element</small>"]:::held
    n628["Comment<br/><small>Syntax element</small>"]:::held
    n629["Text<br/><small>Syntax element</small>"]:::held
    n630["HCL<br/><small>Standard</small>"]:::neutral
    n631["Value<br/><small>Syntax element</small>"]:::held
    n632["Module call<br/><small>Syntax element</small>"]:::held
    n633["Terraform<br/><small>Language</small>"]:::held
    n634["Terraform modules<br/><small>Standard</small>"]:::neutral
    n635["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n636["Box drawing<br/><small>Standard</small>"]:::neutral
    n637["Code lines<br/><small>Syntax element</small>"]:::held
    n638["Columns<br/><small>Syntax element</small>"]:::held
    n639["Item line<br/><small>Syntax element</small>"]:::held
    n640["Padded cell<br/><small>Syntax element</small>"]:::held
    n641["Path step<br/><small>Syntax element</small>"]:::held
    n642["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n643["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n644["Terminal text<br/><small>Decision</small>"]:::neutral
    n645["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n646["List on several lines<br/><small>Syntax element</small>"]:::held
    n647["Type assertion<br/><small>Syntax element</small>"]:::held
    n648["Assignment<br/><small>Syntax element</small>"]:::held
    n649["Waiting<br/><small>Syntax element</small>"]:::held
    n650["Call<br/><small>Syntax element</small>"]:::held
    n651["Constant<br/><small>Syntax element</small>"]:::held
    n652["Default import<br/><small>Syntax element</small>"]:::held
    n653["Documentation comment<br/><small>Syntax element</small>"]:::held
    n654["Export<br/><small>Syntax element</small>"]:::held
    n655["Condition<br/><small>Syntax element</small>"]:::held
    n656["List on one line<br/><small>Syntax element</small>"]:::held
    n657["Comment<br/><small>Syntax element</small>"]:::held
    n658["Property access<br/><small>Syntax element</small>"]:::held
    n659["Title of a module<br/><small>Syntax element</small>"]:::held
    n660["Import of names<br/><small>Syntax element</small>"]:::held
    n661["Object on several lines<br/><small>Syntax element</small>"]:::held
    n662["Object<br/><small>Syntax element</small>"]:::held
    n663["Object type<br/><small>Syntax element</small>"]:::held
    n664["Optional property access<br/><small>Syntax element</small>"]:::held
    n665["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n666["Group<br/><small>Syntax element</small>"]:::held
    n667["Names of a program<br/><small>Decision</small>"]:::neutral
    n668["Property<br/><small>Syntax element</small>"]:::held
    n669["Strict inequality<br/><small>Syntax element</small>"]:::held
    n670["Text<br/><small>Syntax element</small>"]:::held
    n671["TypeScript<br/><small>Language</small>"]:::held
    n672["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n673["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n674["TypeScript writer<br/><small>Function</small>"]:::held
    n675["Union type<br/><small>Syntax element</small>"]:::held
    n676["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n348
  n57 -->|Depends on| n166
  n58 -->|Implements| n20
  n58 -->|Depends on| n333
  n59 -->|Implements| n24
  n59 -->|Depends on| n348
  n59 -->|Depends on| n166
  n60 -->|Implements| n37
  n60 -->|Depends on| n348
  n61 -->|Implements| n38
  n61 -->|Depends on| n215
  n62 -->|Serves| n436
  n62 -->|Depends on| n348
  n62 -->|Depends on| n270
  n62 -->|Depends on| n272
  n62 -->|Depends on| n271
  n62 -->|Depends on| n0
  n62 -->|Depends on| n209
  n62 -->|Depends on| n213
  n62 -->|Depends on| n221
  n62 -->|Depends on| n218
  n62 -->|Depends on| n200
  n62 -->|Depends on| n206
  n62 -->|Depends on| n550
  n62 -->|Depends on| n300
  n62 -->|Depends on| n302
  n62 -->|Depends on| n155
  n63 -->|Serves| n436
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n550
  n63 -->|Depends on| n348
  n63 -->|Depends on| n337
  n63 -->|Depends on| n340
  n63 -->|Depends on| n328
  n63 -->|Depends on| n270
  n63 -->|Depends on| n269
  n63 -->|Depends on| n271
  n63 -->|Depends on| n0
  n63 -->|Depends on| n137
  n63 -->|Depends on| n567
  n63 -->|Depends on| n155
  n63 -->|Depends on| n296
  n63 -->|Depends on| n209
  n63 -->|Depends on| n206
  n63 -->|Depends on| n198
  n63 -->|Depends on| n197
  n63 -->|Depends on| n220
  n63 -->|Depends on| n199
  n63 -->|Depends on| n300
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n437
  n65 -->|Serves| n436
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n103
  n66 -->|Verifies| n168
  n66 -->|In| n52
  n66 -->|Depends on| n103
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n141
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n146
  n66 -->|Depends on| n287
  n66 -->|Depends on| n67
  n66 -->|Depends on| n303
  n70 -->|Verifies| n626
  n70 -->|Verifies| n619
  n70 -->|Verifies| n405
  n70 -->|In| n52
  n70 -->|Depends on| n626
  n70 -->|Depends on| n619
  n70 -->|Depends on| n671
  n70 -->|Depends on| n71
  n70 -->|Depends on| n293
  n70 -->|Depends on| n303
  n72 -->|Verifies| n118
  n72 -->|In| n52
  n72 -->|Depends on| n109
  n72 -->|Depends on| n118
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n141
  n72 -->|Depends on| n90
  n72 -->|Depends on| n146
  n72 -->|Depends on| n288
  n72 -->|Depends on| n303
  n73 -->|Verifies| n371
  n73 -->|Verifies| n370
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n146
  n73 -->|Depends on| n101
  n73 -->|Depends on| n301
  n73 -->|Depends on| n303
  n74 -->|Verifies| n106
  n74 -->|Verifies| n107
  n74 -->|Verifies| n160
  n74 -->|Verifies| n674
  n74 -->|Verifies| n635
  n74 -->|Verifies| n222
  n74 -->|Verifies| n396
  n74 -->|In| n52
  n74 -->|Depends on| n106
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n146
  n74 -->|Depends on| n141
  n74 -->|Depends on| n69
  n74 -->|Depends on| n288
  n74 -->|Depends on| n303
  n75 -->|Verifies| n126
  n75 -->|In| n52
  n75 -->|Depends on| n126
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n146
  n75 -->|Depends on| n69
  n75 -->|Depends on| n94
  n75 -->|Depends on| n303
  n76 -->|Verifies| n120
  n76 -->|In| n52
  n76 -->|Depends on| n120
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n141
  n76 -->|Depends on| n146
  n76 -->|Depends on| n288
  n76 -->|Depends on| n303
  n77 -->|Verifies| n112
  n77 -->|Verifies| n165
  n77 -->|Verifies| n368
  n77 -->|Verifies| n381
  n77 -->|In| n52
  n77 -->|Depends on| n115
  n77 -->|Depends on| n112
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n141
  n77 -->|Depends on| n166
  n77 -->|Depends on| n434
  n77 -->|Depends on| n181
  n77 -->|Depends on| n146
  n77 -->|Depends on| n299
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n303
  n79 -->|Verifies| n113
  n79 -->|Verifies| n182
  n79 -->|Verifies| n392
  n79 -->|In| n52
  n79 -->|Depends on| n113
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n114
  n79 -->|Depends on| n146
  n79 -->|Depends on| n288
  n79 -->|Depends on| n303
  n80 -->|Verifies| n162
  n80 -->|Verifies| n181
  n80 -->|In| n52
  n80 -->|Depends on| n162
  n80 -->|Depends on| n42
  n80 -->|Depends on| n41
  n80 -->|Depends on| n17
  n80 -->|Depends on| n95
  n80 -->|Depends on| n91
  n80 -->|Depends on| n610
  n80 -->|Depends on| n23
  n80 -->|Depends on| n303
  n81 -->|Verifies| n130
  n81 -->|In| n52
  n81 -->|Depends on| n130
  n81 -->|Depends on| n162
  n81 -->|Depends on| n188
  n81 -->|Depends on| n41
  n81 -->|Depends on| n51
  n81 -->|Depends on| n146
  n81 -->|Depends on| n288
  n81 -->|Depends on| n303
  n82 -->|Verifies| n124
  n82 -->|Verifies| n195
  n82 -->|Verifies| n365
  n82 -->|In| n52
  n82 -->|Depends on| n124
  n82 -->|Depends on| n42
  n82 -->|Depends on| n56
  n82 -->|Depends on| n51
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n141
  n82 -->|Depends on| n95
  n82 -->|Depends on| n91
  n82 -->|Depends on| n146
  n82 -->|Depends on| n670
  n82 -->|Depends on| n303
  n82 -->|Depends on| n615
  n83 -->|Verifies| n133
  n83 -->|Verifies| n386
  n83 -->|Verifies| n364
  n83 -->|Verifies| n382
  n83 -->|In| n52
  n83 -->|Depends on| n133
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n21
  n83 -->|Depends on| n41
  n83 -->|Depends on| n39
  n83 -->|Depends on| n141
  n83 -->|Depends on| n95
  n83 -->|Depends on| n91
  n83 -->|Depends on| n146
  n83 -->|Depends on| n303
  n83 -->|Depends on| n140
  n83 -->|Depends on| n671
  n84 -->|Verifies| n108
  n84 -->|Verifies| n383
  n84 -->|In| n52
  n84 -->|Depends on| n108
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n51
  n84 -->|Depends on| n95
  n84 -->|Depends on| n146
  n84 -->|Depends on| n303
  n84 -->|Depends on| n312
  n85 -->|Verifies| n131
  n85 -->|Verifies| n386
  n85 -->|Verifies| n364
  n85 -->|In| n52
  n85 -->|Depends on| n131
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n41
  n85 -->|Depends on| n39
  n85 -->|Depends on| n141
  n85 -->|Depends on| n95
  n85 -->|Depends on| n146
  n85 -->|Depends on| n303
  n86 -->|Verifies| n111
  n86 -->|Verifies| n151
  n86 -->|In| n52
  n86 -->|Depends on| n111
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n95
  n86 -->|Depends on| n91
  n86 -->|Depends on| n205
  n86 -->|Depends on| n146
  n86 -->|Depends on| n303
  n87 -->|Verifies| n116
  n87 -->|Verifies| n164
  n87 -->|In| n52
  n87 -->|Depends on| n115
  n87 -->|Depends on| n116
  n87 -->|Depends on| n42
  n87 -->|Depends on| n56
  n87 -->|Depends on| n51
  n87 -->|Depends on| n181
  n87 -->|Depends on| n41
  n87 -->|Depends on| n39
  n87 -->|Depends on| n141
  n87 -->|Depends on| n146
  n87 -->|Depends on| n299
  n87 -->|Depends on| n303
  n88 -->|Verifies| n334
  n88 -->|Verifies| n356
  n88 -->|Verifies| n372
  n88 -->|Verifies| n388
  n88 -->|In| n52
  n88 -->|Depends on| n115
  n88 -->|Depends on| n334
  n88 -->|Depends on| n19
  n88 -->|Depends on| n181
  n88 -->|Depends on| n41
  n88 -->|Depends on| n17
  n88 -->|Depends on| n51
  n88 -->|Depends on| n146
  n88 -->|Depends on| n299
  n88 -->|Depends on| n303
  n89 -->|Verifies| n115
  n89 -->|Verifies| n179
  n89 -->|Verifies| n564
  n89 -->|Verifies| n556
  n89 -->|Verifies| n568
  n89 -->|Verifies| n167
  n89 -->|In| n52
  n89 -->|Depends on| n115
  n89 -->|Depends on| n167
  n89 -->|Depends on| n51
  n89 -->|Depends on| n146
  n89 -->|Depends on| n299
  n89 -->|Depends on| n303
  n89 -->|Depends on| n99
  n92 -->|Verifies| n117
  n92 -->|Verifies| n122
  n92 -->|In| n52
  n92 -->|Depends on| n117
  n92 -->|Depends on| n42
  n92 -->|Depends on| n56
  n92 -->|Depends on| n41
  n92 -->|Depends on| n39
  n92 -->|Depends on| n141
  n92 -->|Depends on| n95
  n92 -->|Depends on| n91
  n92 -->|Depends on| n143
  n92 -->|Depends on| n193
  n92 -->|Depends on| n146
  n92 -->|Depends on| n303
  n92 -->|Depends on| n140
  n92 -->|Depends on| n671
  n93 -->|Verifies| n123
  n93 -->|Verifies| n365
  n93 -->|In| n52
  n93 -->|Depends on| n123
  n93 -->|Depends on| n42
  n93 -->|Depends on| n56
  n93 -->|Depends on| n146
  n93 -->|Depends on| n303
  n93 -->|Depends on| n140
  n93 -->|Depends on| n671
  n93 -->|Depends on| n91
  n96 -->|Verifies| n127
  n96 -->|Verifies| n121
  n96 -->|Verifies| n610
  n96 -->|Verifies| n184
  n96 -->|Verifies| n612
  n96 -->|Verifies| n373
  n96 -->|Verifies| n608
  n96 -->|Verifies| n168
  n96 -->|In| n52
  n96 -->|Depends on| n127
  n96 -->|Depends on| n121
  n96 -->|Depends on| n42
  n96 -->|Depends on| n56
  n96 -->|Depends on| n51
  n96 -->|Depends on| n41
  n96 -->|Depends on| n39
  n96 -->|Depends on| n22
  n96 -->|Depends on| n48
  n96 -->|Depends on| n23
  n96 -->|Depends on| n162
  n96 -->|Depends on| n17
  n96 -->|Depends on| n289
  n96 -->|Depends on| n141
  n96 -->|Depends on| n615
  n96 -->|Depends on| n95
  n96 -->|Depends on| n91
  n96 -->|Depends on| n146
  n96 -->|Depends on| n303
  n97 -->|Verifies| n129
  n97 -->|In| n52
  n97 -->|Depends on| n129
  n97 -->|Depends on| n56
  n97 -->|Depends on| n21
  n97 -->|Depends on| n41
  n97 -->|Depends on| n39
  n97 -->|Depends on| n141
  n97 -->|Depends on| n146
  n97 -->|Depends on| n303
  n98 -->|Verifies| n127
  n98 -->|Verifies| n184
  n98 -->|In| n52
  n98 -->|Depends on| n127
  n98 -->|Depends on| n42
  n98 -->|Depends on| n51
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n22
  n98 -->|Depends on| n23
  n98 -->|Depends on| n162
  n98 -->|Depends on| n17
  n98 -->|Depends on| n184
  n98 -->|Depends on| n288
  n98 -->|Depends on| n141
  n98 -->|Depends on| n615
  n98 -->|Depends on| n95
  n98 -->|Depends on| n91
  n98 -->|Depends on| n146
  n98 -->|Depends on| n303
  n100 -->|Verifies| n104
  n100 -->|Verifies| n105
  n100 -->|Verifies| n110
  n100 -->|Verifies| n362
  n100 -->|In| n52
  n100 -->|Depends on| n104
  n100 -->|Depends on| n56
  n100 -->|Depends on| n41
  n100 -->|Depends on| n39
  n100 -->|Depends on| n146
  n100 -->|Depends on| n68
  n100 -->|Depends on| n303
  n102 -->|Verifies| n128
  n102 -->|Verifies| n132
  n102 -->|Verifies| n125
  n102 -->|Verifies| n572
  n102 -->|Verifies| n566
  n102 -->|Verifies| n574
  n102 -->|In| n52
  n102 -->|Depends on| n128
  n102 -->|Depends on| n132
  n102 -->|Depends on| n51
  n102 -->|Depends on| n146
  n102 -->|Depends on| n101
  n102 -->|Depends on| n303
  n103 -->|Serves| n436
  n103 -->|Part of| n54
  n103 -->|Depends on| n119
  n103 -->|Depends on| n168
  n103 -->|Depends on| n146
  n103 -->|Depends on| n141
  n103 -->|Depends on| n192
  n103 -->|Depends on| n190
  n103 -->|Depends on| n359
  n103 -->|Depends on| n398
  n103 -->|Depends on| n147
  n103 -->|Depends on| n671
  n103 -->|Depends on| n43
  n103 -->|Depends on| n22
  n103 -->|Depends on| n21
  n103 -->|Depends on| n23
  n103 -->|Depends on| n39
  n103 -->|Depends on| n25
  n103 -->|Depends on| n169
  n103 -->|Depends on| n50
  n103 -->|Depends on| n638
  n103 -->|Depends on| n644
  n103 -->|Depends on| n288
  n103 -->|Depends on| n287
  n103 -->|Depends on| n193
  n103 -->|Depends on| n194
  n103 -->|Depends on| n196
  n103 -->|Depends on| n195
  n103 -->|Depends on| n139
  n103 -->|Depends on| n144
  n103 -->|Depends on| n17
  n103 -->|Depends on| n181
  n103 -->|Depends on| n140
  n104 -->|Serves| n443
  n104 -->|Part of| n54
  n104 -->|Depends on| n119
  n104 -->|Depends on| n105
  n104 -->|Depends on| n14
  n104 -->|Depends on| n39
  n104 -->|Depends on| n644
  n104 -->|Depends on| n50
  n104 -->|Depends on| n288
  n105 -->|Serves| n443
  n105 -->|Depends on| n119
  n105 -->|Depends on| n177
  n105 -->|Depends on| n110
  n105 -->|Depends on| n40
  n105 -->|Depends on| n183
  n105 -->|Depends on| n181
  n105 -->|Depends on| n141
  n105 -->|Depends on| n39
  n105 -->|Depends on| n288
  n105 -->|Depends on| n134
  n106 -->|Serves| n436
  n106 -->|Part of| n54
  n106 -->|Depends on| n119
  n106 -->|Depends on| n107
  n106 -->|Depends on| n23
  n106 -->|Depends on| n39
  n106 -->|Depends on| n50
  n106 -->|Depends on| n288
  n107 -->|Serves| n436
  n107 -->|Depends on| n119
  n107 -->|Depends on| n160
  n107 -->|Depends on| n644
  n107 -->|Depends on| n155
  n107 -->|Depends on| n288
  n108 -->|Serves| n443
  n108 -->|Part of| n54
  n108 -->|Depends on| n119
  n108 -->|Depends on| n34
  n108 -->|Depends on| n312
  n108 -->|Depends on| n141
  n108 -->|Depends on| n21
  n108 -->|Depends on| n23
  n108 -->|Depends on| n39
  n108 -->|Depends on| n317
  n108 -->|Depends on| n139
  n108 -->|Depends on| n50
  n108 -->|Depends on| n638
  n108 -->|Depends on| n644
  n108 -->|Depends on| n288
  n109 -->|Serves| n436
  n109 -->|Part of| n54
  n109 -->|Depends on| n141
  n109 -->|Depends on| n119
  n109 -->|Depends on| n177
  n109 -->|Depends on| n554
  n109 -->|Depends on| n572
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n50
  n109 -->|Depends on| n288
  n110 -->|Serves| n436
  n110 -->|Depends on| n288
  n110 -->|Depends on| n299
  n111 -->|Serves| n436
  n111 -->|Part of| n54
  n111 -->|Depends on| n119
  n111 -->|Depends on| n160
  n111 -->|Depends on| n16
  n111 -->|Depends on| n151
  n111 -->|Depends on| n335
  n111 -->|Depends on| n336
  n111 -->|Depends on| n219
  n111 -->|Depends on| n150
  n111 -->|Depends on| n21
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n50
  n111 -->|Depends on| n288
  n112 -->|Serves| n436
  n112 -->|Part of| n54
  n112 -->|Depends on| n119
  n112 -->|Depends on| n165
  n112 -->|Depends on| n105
  n112 -->|Depends on| n14
  n112 -->|Depends on| n39
  n113 -->|Serves| n436
  n113 -->|Part of| n54
  n113 -->|Depends on| n119
  n113 -->|Depends on| n114
  n113 -->|Depends on| n21
  n113 -->|Depends on| n23
  n113 -->|Depends on| n22
  n113 -->|Depends on| n43
  n113 -->|Depends on| n28
  n113 -->|Depends on| n26
  n113 -->|Depends on| n53
  n113 -->|Depends on| n34
  n113 -->|Depends on| n33
  n113 -->|Depends on| n141
  n113 -->|Depends on| n17
  n113 -->|Depends on| n39
  n113 -->|Depends on| n50
  n113 -->|Depends on| n288
  n115 -->|Serves| n436
  n115 -->|Part of| n54
  n115 -->|Depends on| n119
  n115 -->|Depends on| n179
  n115 -->|Depends on| n554
  n115 -->|Depends on| n572
  n115 -->|Depends on| n564
  n115 -->|Depends on| n50
  n116 -->|Serves| n436
  n116 -->|Part of| n54
  n116 -->|Depends on| n141
  n116 -->|Depends on| n119
  n116 -->|Depends on| n164
  n116 -->|Depends on| n334
  n116 -->|Depends on| n181
  n116 -->|Depends on| n23
  n116 -->|Depends on| n39
  n116 -->|Depends on| n50
  n116 -->|Depends on| n288
  n117 -->|Serves| n443
  n117 -->|Part of| n54
  n117 -->|Depends on| n119
  n117 -->|Depends on| n141
  n117 -->|Depends on| n181
  n117 -->|Depends on| n40
  n117 -->|Depends on| n143
  n117 -->|Depends on| n193
  n117 -->|Depends on| n21
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n139
  n117 -->|Depends on| n671
  n117 -->|Depends on| n673
  n117 -->|Depends on| n659
  n117 -->|Depends on| n653
  n117 -->|Depends on| n654
  n117 -->|Depends on| n651
  n117 -->|Depends on| n650
  n117 -->|Depends on| n662
  n117 -->|Depends on| n668
  n117 -->|Depends on| n670
  n117 -->|Depends on| n660
  n117 -->|Depends on| n50
  n117 -->|Depends on| n288
  n117 -->|Depends on| n41
  n117 -->|Depends on| n146
  n117 -->|Depends on| n122
  n117 -->|Depends on| n140
  n118 -->|Serves| n436
  n118 -->|Part of| n54
  n118 -->|Depends on| n141
  n118 -->|Depends on| n644
  n118 -->|Depends on| n119
  n118 -->|Depends on| n177
  n118 -->|Depends on| n110
  n118 -->|Depends on| n21
  n118 -->|Depends on| n39
  n118 -->|Depends on| n50
  n118 -->|Depends on| n288
  n119 -->|Serves| n436
  n119 -->|Depends on| n146
  n119 -->|Depends on| n162
  n119 -->|Depends on| n161
  n119 -->|Depends on| n174
  n119 -->|Depends on| n188
  n119 -->|Depends on| n176
  n119 -->|Depends on| n550
  n119 -->|Depends on| n50
  n119 -->|Depends on| n41
  n119 -->|Depends on| n17
  n119 -->|Depends on| n441
  n119 -->|Depends on| n435
  n119 -->|Depends on| n644
  n119 -->|Depends on| n642
  n119 -->|Depends on| n640
  n119 -->|Depends on| n288
  n119 -->|Depends on| n141
  n119 -->|Depends on| n183
  n120 -->|Serves| n443
  n120 -->|Part of| n54
  n120 -->|Depends on| n119
  n120 -->|Depends on| n176
  n120 -->|Depends on| n23
  n120 -->|Depends on| n50
  n120 -->|Depends on| n644
  n120 -->|Depends on| n642
  n120 -->|Depends on| n640
  n120 -->|Depends on| n288
  n121 -->|Serves| n613
  n121 -->|Part of| n54
  n121 -->|Depends on| n146
  n121 -->|Depends on| n119
  n121 -->|Depends on| n610
  n121 -->|Depends on| n23
  n121 -->|Depends on| n39
  n121 -->|Depends on| n50
  n121 -->|Depends on| n288
  n122 -->|Serves| n443
  n122 -->|Depends on| n673
  n122 -->|Depends on| n659
  n122 -->|Depends on| n653
  n122 -->|Depends on| n654
  n122 -->|Depends on| n651
  n122 -->|Depends on| n650
  n122 -->|Depends on| n662
  n122 -->|Depends on| n668
  n122 -->|Depends on| n670
  n122 -->|Depends on| n656
  n122 -->|Depends on| n660
  n123 -->|Serves| n443
  n123 -->|Part of| n54
  n123 -->|Depends on| n119
  n123 -->|Depends on| n141
  n123 -->|Depends on| n181
  n123 -->|Depends on| n140
  n123 -->|Depends on| n21
  n123 -->|Depends on| n22
  n123 -->|Depends on| n39
  n123 -->|Depends on| n50
  n123 -->|Depends on| n288
  n124 -->|Serves| n443
  n124 -->|Part of| n54
  n124 -->|Depends on| n119
  n124 -->|Depends on| n141
  n124 -->|Depends on| n181
  n124 -->|Depends on| n177
  n124 -->|Depends on| n554
  n124 -->|Depends on| n246
  n124 -->|Depends on| n245
  n124 -->|Depends on| n196
  n124 -->|Depends on| n195
  n124 -->|Depends on| n21
  n124 -->|Depends on| n23
  n124 -->|Depends on| n22
  n124 -->|Depends on| n39
  n124 -->|Depends on| n25
  n124 -->|Depends on| n169
  n124 -->|Depends on| n671
  n124 -->|Depends on| n17
  n124 -->|Depends on| n50
  n124 -->|Depends on| n288
  n124 -->|Depends on| n287
  n124 -->|Depends on| n222
  n124 -->|Depends on| n670
  n124 -->|Depends on| n127
  n124 -->|Depends on| n146
  n125 -->|Serves| n436
  n125 -->|Depends on| n146
  n125 -->|Depends on| n139
  n125 -->|Depends on| n119
  n125 -->|Depends on| n188
  n125 -->|Depends on| n554
  n125 -->|Depends on| n572
  n125 -->|Depends on| n50
  n125 -->|Depends on| n288
  n126 -->|Serves| n436
  n126 -->|Part of| n54
  n126 -->|Depends on| n106
  n126 -->|Depends on| n41
  n127 -->|Serves| n613
  n127 -->|Part of| n54
  n127 -->|Depends on| n146
  n127 -->|Depends on| n119
  n127 -->|Depends on| n111
  n127 -->|Depends on| n160
  n127 -->|Depends on| n610
  n127 -->|Depends on| n612
  n127 -->|Depends on| n613
  n127 -->|Depends on| n16
  n127 -->|Depends on| n151
  n127 -->|Depends on| n609
  n127 -->|Depends on| n41
  n127 -->|Depends on| n21
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n50
  n127 -->|Depends on| n168
  n127 -->|Depends on| n288
  n128 -->|Serves| n436
  n128 -->|Part of| n54
  n128 -->|Depends on| n119
  n128 -->|Depends on| n125
  n129 -->|Serves| n443
  n129 -->|Part of| n54
  n129 -->|Depends on| n141
  n129 -->|Depends on| n119
  n129 -->|Depends on| n177
  n129 -->|Depends on| n554
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n50
  n129 -->|Depends on| n288
  n130 -->|Serves| n436
  n130 -->|Part of| n54
  n130 -->|Depends on| n119
  n130 -->|Depends on| n162
  n130 -->|Depends on| n188
  n130 -->|Depends on| n174
  n130 -->|Depends on| n50
  n130 -->|Depends on| n644
  n130 -->|Depends on| n642
  n130 -->|Depends on| n640
  n130 -->|Depends on| n288
  n131 -->|Serves| n443
  n131 -->|Part of| n54
  n131 -->|Depends on| n119
  n131 -->|Depends on| n21
  n131 -->|Depends on| n23
  n131 -->|Depends on| n39
  n131 -->|Depends on| n317
  n131 -->|Depends on| n670
  n131 -->|Depends on| n41
  n131 -->|Depends on| n146
  n131 -->|Depends on| n50
  n131 -->|Depends on| n288
  n132 -->|Serves| n436
  n132 -->|Part of| n54
  n132 -->|Depends on| n146
  n132 -->|Depends on| n119
  n132 -->|Depends on| n125
  n132 -->|Depends on| n162
  n132 -->|Depends on| n188
  n132 -->|Depends on| n50
  n132 -->|Depends on| n288
  n133 -->|Serves| n443
  n133 -->|Part of| n54
  n133 -->|Depends on| n119
  n133 -->|Depends on| n141
  n133 -->|Depends on| n181
  n133 -->|Depends on| n21
  n133 -->|Depends on| n23
  n133 -->|Depends on| n140
  n133 -->|Depends on| n40
  n133 -->|Depends on| n193
  n133 -->|Depends on| n39
  n133 -->|Depends on| n33
  n133 -->|Depends on| n311
  n133 -->|Depends on| n139
  n133 -->|Depends on| n671
  n133 -->|Depends on| n50
  n133 -->|Depends on| n288
  n133 -->|Depends on| n41
  n133 -->|Depends on| n146
  n150 -->|Read in| n202
  n150 -->|Depends on| n201
  n150 -->|Depends on| n204
  n151 -->|Serves| n436
  n151 -->|Depends on| n31
  n151 -->|Depends on| n149
  n155 -->|Serves| n443
  n155 -->|Depends on| n296
  n156 -->|Serves| n443
  n156 -->|Applied by| n155
  n156 -->|Applied by| n296
  n158 -->|Serves| n443
  n158 -->|Depends on| n154
  n159 -->|Serves| n443
  n160 -->|Serves| n436
  n160 -->|Depends on| n146
  n160 -->|Depends on| n141
  n160 -->|Depends on| n39
  n160 -->|Depends on| n189
  n160 -->|Depends on| n40
  n160 -->|Depends on| n222
  n160 -->|Depends on| n289
  n160 -->|Depends on| n140
  n160 -->|Depends on| n671
  n161 -->|Serves| n436
  n161 -->|Depends on| n135
  n161 -->|Depends on| n180
  n161 -->|Depends on| n183
  n161 -->|Depends on| n40
  n161 -->|Depends on| n155
  n161 -->|Depends on| n137
  n161 -->|Depends on| n141
  n161 -->|Depends on| n304
  n161 -->|Depends on| n184
  n161 -->|Depends on| n158
  n162 -->|Serves| n436
  n162 -->|Depends on| n141
  n162 -->|Depends on| n441
  n162 -->|Depends on| n163
  n162 -->|Depends on| n183
  n162 -->|Depends on| n180
  n162 -->|Depends on| n31
  n162 -->|Depends on| n21
  n162 -->|Depends on| n39
  n162 -->|Depends on| n185
  n162 -->|Depends on| n181
  n162 -->|Depends on| n172
  n162 -->|Depends on| n189
  n162 -->|Depends on| n222
  n162 -->|Depends on| n40
  n162 -->|Depends on| n289
  n162 -->|Depends on| n170
  n162 -->|Depends on| n48
  n162 -->|Depends on| n168
  n162 -->|Depends on| n28
  n162 -->|Depends on| n140
  n163 -->|Serves| n436
  n164 -->|Serves| n436
  n164 -->|Depends on| n146
  n164 -->|Depends on| n17
  n164 -->|Depends on| n41
  n164 -->|Depends on| n299
  n165 -->|Serves| n436
  n165 -->|Depends on| n166
  n165 -->|Depends on| n146
  n165 -->|Depends on| n141
  n165 -->|Depends on| n50
  n165 -->|Depends on| n637
  n165 -->|Depends on| n17
  n165 -->|Depends on| n53
  n165 -->|Depends on| n434
  n165 -->|Depends on| n26
  n165 -->|Depends on| n21
  n165 -->|Depends on| n39
  n165 -->|Depends on| n181
  n165 -->|Depends on| n164
  n165 -->|Depends on| n167
  n165 -->|Depends on| n334
  n165 -->|Depends on| n564
  n165 -->|Depends on| n291
  n165 -->|Depends on| n296
  n165 -->|Depends on| n292
  n167 -->|Serves| n436
  n167 -->|Depends on| n155
  n167 -->|Depends on| n299
  n168 -->|Serves| n436
  n168 -->|Depends on| n141
  n168 -->|Depends on| n192
  n168 -->|Depends on| n671
  n168 -->|Depends on| n181
  n168 -->|Depends on| n21
  n168 -->|Depends on| n39
  n168 -->|Depends on| n25
  n168 -->|Depends on| n169
  n168 -->|Depends on| n139
  n170 -->|Serves| n436
  n171 -->|Serves| n436
  n172 -->|Serves| n436
  n172 -->|Depends on| n40
  n172 -->|Depends on| n144
  n172 -->|Depends on| n289
  n172 -->|Depends on| n298
  n172 -->|Depends on| n291
  n172 -->|Depends on| n155
  n172 -->|Depends on| n180
  n172 -->|Depends on| n183
  n172 -->|Depends on| n152
  n172 -->|Depends on| n171
  n172 -->|Depends on| n444
  n172 -->|Depends on| n141
  n172 -->|Depends on| n671
  n172 -->|Depends on| n317
  n172 -->|Depends on| n158
  n172 -->|Depends on| n159
  n172 -->|Depends on| n170
  n174 -->|Serves| n436
  n174 -->|Depends on| n27
  n174 -->|Depends on| n222
  n174 -->|Depends on| n142
  n174 -->|Depends on| n141
  n174 -->|Depends on| n438
  n174 -->|Depends on| n433
  n174 -->|Depends on| n171
  n174 -->|Depends on| n439
  n174 -->|Depends on| n440
  n174 -->|Depends on| n183
  n174 -->|Depends on| n21
  n174 -->|Depends on| n39
  n174 -->|Depends on| n181
  n174 -->|Depends on| n172
  n174 -->|Depends on| n40
  n174 -->|Depends on| n140
  n174 -->|Depends on| n297
  n174 -->|Depends on| n230
  n174 -->|Depends on| n224
  n174 -->|Depends on| n226
  n174 -->|Depends on| n241
  n174 -->|Depends on| n238
  n174 -->|Depends on| n236
  n174 -->|Depends on| n228
  n175 -->|Serves| n240
  n175 -->|Applied by| n174
  n175 -->|Applied by| n188
  n176 -->|Serves| n443
  n176 -->|Depends on| n169
  n176 -->|Depends on| n141
  n176 -->|Depends on| n139
  n176 -->|Depends on| n183
  n176 -->|Depends on| n254
  n176 -->|Depends on| n25
  n176 -->|Depends on| n21
  n176 -->|Depends on| n39
  n176 -->|Depends on| n40
  n176 -->|Depends on| n299
  n177 -->|Serves| n443
  n177 -->|Depends on| n139
  n177 -->|Depends on| n180
  n177 -->|Depends on| n40
  n177 -->|Depends on| n299
  n179 -->|Serves| n436
  n179 -->|Depends on| n141
  n179 -->|Depends on| n432
  n179 -->|Depends on| n178
  n179 -->|Depends on| n17
  n179 -->|Depends on| n177
  n179 -->|Depends on| n188
  n179 -->|Depends on| n296
  n180 -->|Serves| n436
  n180 -->|Depends on| n618
  n181 -->|Serves| n436
  n181 -->|Depends on| n141
  n181 -->|Depends on| n21
  n181 -->|Depends on| n39
  n181 -->|Depends on| n193
  n181 -->|Depends on| n40
  n181 -->|Depends on| n140
  n181 -->|Depends on| n671
  n182 -->|Serves| n436
  n182 -->|Implements| n28
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n25
  n182 -->|Depends on| n173
  n182 -->|Depends on| n46
  n183 -->|Serves| n436
  n183 -->|Depends on| n144
  n183 -->|Depends on| n243
  n184 -->|Serves| n436
  n184 -->|Depends on| n288
  n185 -->|Serves| n436
  n185 -->|Depends on| n673
  n185 -->|Depends on| n183
  n185 -->|Depends on| n187
  n185 -->|Depends on| n55
  n185 -->|Depends on| n27
  n185 -->|Depends on| n46
  n185 -->|Depends on| n25
  n185 -->|Depends on| n39
  n185 -->|Depends on| n180
  n185 -->|Depends on| n136
  n185 -->|Depends on| n289
  n185 -->|Depends on| n672
  n185 -->|Depends on| n142
  n185 -->|Depends on| n40
  n186 -->|Serves| n443
  n186 -->|Applied by| n172
  n186 -->|Applied by| n188
  n188 -->|Serves| n436
  n188 -->|Depends on| n222
  n188 -->|Depends on| n135
  n188 -->|Depends on| n148
  n188 -->|Depends on| n137
  n188 -->|Depends on| n141
  n188 -->|Depends on| n31
  n188 -->|Depends on| n21
  n188 -->|Depends on| n39
  n188 -->|Depends on| n40
  n188 -->|Depends on| n181
  n188 -->|Depends on| n299
  n188 -->|Depends on| n304
  n188 -->|Depends on| n232
  n188 -->|Depends on| n224
  n188 -->|Depends on| n238
  n188 -->|Depends on| n234
  n189 -->|Serves| n436
  n189 -->|Depends on| n145
  n189 -->|Depends on| n144
  n189 -->|Depends on| n141
  n189 -->|Depends on| n39
  n189 -->|Depends on| n40
  n189 -->|Depends on| n222
  n189 -->|Depends on| n289
  n190 -->|Refines| n436
  n191 -->|Accepts| n190
  n195 -->|Serves| n436
  n195 -->|Depends on| n196
  n195 -->|Depends on| n673
  n195 -->|Depends on| n144
  n195 -->|Depends on| n653
  n195 -->|Depends on| n659
  n195 -->|Depends on| n657
  n195 -->|Depends on| n660
  n195 -->|Depends on| n654
  n195 -->|Depends on| n651
  n195 -->|Depends on| n650
  n195 -->|Depends on| n661
  n195 -->|Depends on| n668
  n195 -->|Depends on| n670
  n195 -->|Depends on| n656
  n197 -->|Read in| n202
  n198 -->|Read in| n202
  n199 -->|Read in| n202
  n200 -->|Read in| n202
  n201 -->|Read in| n202
  n202 -->|Queries written in| n617
  n202 -->|Read by| n626
  n202 -->|Uses| n306
  n203 -->|Read in| n202
  n204 -->|Read in| n202
  n204 -->|Depends on| n200
  n205 -->|Read in| n212
  n206 -->|Read in| n212
  n207 -->|Read in| n212
  n208 -->|Read in| n212
  n208 -->|Depends on| n213
  n208 -->|Depends on| n210
  n209 -->|Read in| n212
  n209 -->|Depends on| n213
  n209 -->|Depends on| n210
  n210 -->|Read in| n212
  n211 -->|Read in| n212
  n211 -->|Depends on| n209
  n212 -->|Queries written in| n617
  n212 -->|Read by| n626
  n212 -->|Uses| n309
  n213 -->|Read in| n212
  n213 -->|Depends on| n207
  n214 -->|Read in| n671
  n215 -->|Read in| n202
  n216 -->|Read in| n202
  n217 -->|Read in| n202
  n219 -->|Read in| n212
  n219 -->|Depends on| n209
  n220 -->|Read in| n202
  n221 -->|Read in| n212
  n221 -->|Depends on| n207
  n222 -->|Serves| n436
  n222 -->|Depends on| n626
  n222 -->|Depends on| n619
  n222 -->|Depends on| n671
  n222 -->|Depends on| n202
  n222 -->|Depends on| n674
  n222 -->|Depends on| n633
  n222 -->|Depends on| n634
  n222 -->|Depends on| n635
  n222 -->|Depends on| n31
  n222 -->|Depends on| n21
  n222 -->|Depends on| n39
  n222 -->|Depends on| n293
  n223 -->|Serves| n436
  n223 -->|Applied by| n222
  n223 -->|Applied by| n334
  n224 -->|Refines| n240
  n225 -->|Accepts| n224
  n226 -->|Refines| n240
  n227 -->|Accepts| n226
  n228 -->|Refines| n240
  n229 -->|Accepts| n228
  n230 -->|Refines| n240
  n231 -->|Accepts| n230
  n232 -->|Refines| n240
  n233 -->|Accepts| n232
  n234 -->|Refines| n240
  n235 -->|Accepts| n234
  n236 -->|Refines| n238
  n236 -->|Depends on| n238
  n237 -->|Accepts| n236
  n238 -->|Refines| n240
  n239 -->|Accepts| n238
  n241 -->|Refines| n240
  n242 -->|Accepts| n241
  n243 -->|Refines| n445
  n244 -->|Accepts| n243
  n246 -->|Refines| n445
  n247 -->|Accepts| n246
  n248 -->|Read in| n212
  n248 -->|Depends on| n209
  n249 -->|Defined by| n255
  n249 -->|Depends on| n255
  n250 -->|Defined by| n255
  n250 -->|Depends on| n255
  n251 -->|Defined by| n255
  n251 -->|Depends on| n255
  n252 -->|Defined by| n255
  n252 -->|Depends on| n255
  n252 -->|Depends on| n250
  n253 -->|Defined by| n255
  n253 -->|Depends on| n255
  n253 -->|Depends on| n249
  n254 -->|Defined by| n255
  n254 -->|Depends on| n255
  n254 -->|Depends on| n249
  n256 -->|Read in| n212
  n256 -->|Depends on| n213
  n256 -->|Depends on| n210
  n256 -->|Depends on| n209
  n256 -->|Depends on| n250
  n257 -->|Defined by| n255
  n257 -->|Depends on| n255
  n259 -->|Defined by| n255
  n259 -->|Depends on| n255
  n260 -->|Defined by| n255
  n260 -->|Depends on| n255
  n261 -->|Defined by| n255
  n261 -->|Depends on| n255
  n262 -->|Depends on| n141
  n263 -->|Read in| n212
  n263 -->|Depends on| n209
  n264 -->|Defined by| n255
  n264 -->|Depends on| n255
  n265 -->|Defined by| n258
  n265 -->|Depends on| n258
  n265 -->|Depends on| n268
  n265 -->|Depends on| n267
  n266 -->|Defined by| n258
  n266 -->|Depends on| n258
  n266 -->|Depends on| n255
  n267 -->|Defined by| n258
  n267 -->|Depends on| n258
  n268 -->|Defined by| n258
  n268 -->|Depends on| n258
  n268 -->|Depends on| n255
  n273 -->|Defined by| n279
  n273 -->|Depends on| n279
  n273 -->|Depends on| n285
  n274 -->|Defined by| n279
  n274 -->|Depends on| n279
  n275 -->|Defined by| n279
  n275 -->|Depends on| n279
  n276 -->|Defined by| n279
  n276 -->|Depends on| n279
  n277 -->|Defined by| n279
  n277 -->|Depends on| n279
  n277 -->|Depends on| n276
  n278 -->|Defined by| n279
  n278 -->|Depends on| n279
  n278 -->|Depends on| n276
  n280 -->|Defined by| n279
  n280 -->|Depends on| n279
  n281 -->|Defined by| n279
  n281 -->|Depends on| n279
  n281 -->|Depends on| n280
  n282 -->|Defined by| n279
  n282 -->|Depends on| n279
  n282 -->|Depends on| n280
  n283 -->|Defined by| n279
  n283 -->|Depends on| n279
  n283 -->|Depends on| n278
  n284 -->|Defined by| n279
  n284 -->|Depends on| n279
  n284 -->|Depends on| n285
  n285 -->|Defined by| n279
  n285 -->|Depends on| n279
  n286 -->|Defined by| n279
  n286 -->|Depends on| n279
  n286 -->|Depends on| n280
  n287 -->|Written in| n296
  n287 -->|Depends on| n296
  n288 -->|Written in| n296
  n288 -->|Depends on| n296
  n289 -->|Written in| n296
  n289 -->|Depends on| n296
  n289 -->|Depends on| n298
  n290 -->|Serves| n443
  n290 -->|Applied by| n289
  n290 -->|Applied by| n304
  n290 -->|Applied by| n292
  n290 -->|Applied by| n288
  n290 -->|Applied by| n303
  n290 -->|Applied by| n287
  n290 -->|Applied by| n300
  n290 -->|Applied by| n298
  n291 -->|Serves| n443
  n291 -->|Depends on| n296
  n292 -->|Written in| n296
  n292 -->|Depends on| n296
  n292 -->|Depends on| n298
  n293 -->|Written in| n296
  n294 -->|Written in| n296
  n295 -->|Written in| n296
  n297 -->|Written in| n296
  n298 -->|Serves| n443
  n298 -->|Depends on| n296
  n299 -->|Written in| n296
  n300 -->|Written in| n296
  n300 -->|Depends on| n296
  n301 -->|Written in| n296
  n302 -->|Written in| n296
  n303 -->|Written in| n296
  n303 -->|Depends on| n296
  n304 -->|Written in| n296
  n304 -->|Depends on| n296
  n305 -->|Written in| n296
  n311 -->|Serves| n443
  n313 -->|Serves| n443
  n317 -->|Serves| n443
  n319 -->|Defined by| n348
  n319 -->|Read in| n212
  n319 -->|Depends on| n348
  n319 -->|Depends on| n337
  n319 -->|Depends on| n209
  n320 -->|Defined by| n348
  n320 -->|Read in| n212
  n320 -->|Depends on| n348
  n320 -->|Depends on| n146
  n320 -->|Depends on| n327
  n320 -->|Depends on| n208
  n320 -->|Depends on| n209
  n321 -->|Defined by| n348
  n321 -->|Read in| n212
  n321 -->|Depends on| n348
  n321 -->|Depends on| n337
  n321 -->|Depends on| n209
  n322 -->|Defined by| n348
  n322 -->|Read in| n212
  n322 -->|Depends on| n348
  n322 -->|Depends on| n337
  n322 -->|Depends on| n208
  n322 -->|Depends on| n209
  n323 -->|Defined by| n348
  n323 -->|Read in| n212
  n323 -->|Depends on| n348
  n323 -->|Depends on| n337
  n323 -->|Depends on| n208
  n323 -->|Depends on| n209
  n323 -->|Depends on| n341
  n324 -->|Defined by| n348
  n324 -->|Read in| n212
  n324 -->|Depends on| n348
  n324 -->|Depends on| n337
  n324 -->|Depends on| n208
  n324 -->|Depends on| n209
  n325 -->|Defined by| n348
  n325 -->|Read in| n212
  n325 -->|Depends on| n348
  n325 -->|Depends on| n272
  n325 -->|Depends on| n1
  n325 -->|Depends on| n208
  n325 -->|Depends on| n209
  n325 -->|Depends on| n221
  n325 -->|Depends on| n218
  n326 -->|Read in| n212
  n326 -->|Depends on| n213
  n327 -->|Defined by| n348
  n327 -->|Read in| n212
  n327 -->|Depends on| n348
  n327 -->|Depends on| n7
  n327 -->|Depends on| n208
  n327 -->|Depends on| n209
  n327 -->|Depends on| n221
  n327 -->|Depends on| n203
  n329 -->|Defined by| n348
  n329 -->|Read in| n212
  n329 -->|Depends on| n348
  n329 -->|Depends on| n337
  n329 -->|Depends on| n208
  n329 -->|Depends on| n209
  n329 -->|Depends on| n319
  n329 -->|Depends on| n323
  n330 -->|Defined by| n348
  n330 -->|Read in| n202
  n330 -->|Depends on| n348
  n330 -->|Depends on| n216
  n330 -->|Depends on| n215
  n331 -->|Uses the variables of| n9
  n331 -->|Uses the variables of| n12
  n331 -->|Uses the variables of| n6
  n331 -->|Styles| n334
  n332 -->|Defined by| n348
  n332 -->|Read in| n212
  n332 -->|Depends on| n348
  n332 -->|Depends on| n337
  n332 -->|Depends on| n209
  n334 -->|Serves| n436
  n334 -->|Depends on| n335
  n334 -->|Depends on| n344
  n334 -->|Depends on| n7
  n334 -->|Depends on| n13
  n334 -->|Depends on| n4
  n334 -->|Depends on| n9
  n334 -->|Depends on| n8
  n334 -->|Depends on| n12
  n334 -->|Depends on| n5
  n334 -->|Depends on| n10
  n334 -->|Depends on| n3
  n334 -->|Depends on| n6
  n334 -->|Depends on| n45
  n334 -->|Depends on| n21
  n334 -->|Depends on| n16
  n334 -->|Depends on| n19
  n334 -->|Depends on| n342
  n334 -->|Depends on| n347
  n334 -->|Depends on| n345
  n334 -->|Depends on| n330
  n334 -->|Depends on| n326
  n334 -->|Depends on| n338
  n334 -->|Depends on| n336
  n334 -->|Depends on| n201
  n334 -->|Depends on| n200
  n334 -->|Depends on| n299
  n334 -->|Depends on| n296
  n334 -->|Depends on| n626
  n334 -->|Depends on| n212
  n334 -->|Depends on| n202
  n336 -->|Defined by| n348
  n336 -->|Read in| n212
  n336 -->|Depends on| n348
  n336 -->|Depends on| n205
  n336 -->|Depends on| n213
  n336 -->|Depends on| n210
  n336 -->|Depends on| n209
  n338 -->|Defined by| n348
  n338 -->|Read in| n212
  n338 -->|Depends on| n348
  n338 -->|Depends on| n219
  n338 -->|Depends on| n214
  n338 -->|Depends on| n658
  n338 -->|Depends on| n648
  n339 -->|Uses the variables of| n7
  n339 -->|Uses the variables of| n13
  n339 -->|Uses the variables of| n9
  n339 -->|Uses the variables of| n8
  n339 -->|Uses the variables of| n12
  n339 -->|Uses the variables of| n5
  n339 -->|Uses the variables of| n10
  n339 -->|Uses the variables of| n3
  n339 -->|Uses the variables of| n6
  n339 -->|Styles| n334
  n341 -->|Defined by| n348
  n341 -->|Read in| n212
  n341 -->|Depends on| n348
  n341 -->|Depends on| n340
  n341 -->|Depends on| n337
  n341 -->|Depends on| n208
  n341 -->|Depends on| n209
  n342 -->|Defined by| n348
  n342 -->|Read in| n212
  n342 -->|Depends on| n348
  n342 -->|Depends on| n208
  n342 -->|Depends on| n343
  n342 -->|Depends on| n329
  n342 -->|Depends on| n325
  n343 -->|Defined by| n348
  n343 -->|Read in| n212
  n343 -->|Depends on| n348
  n343 -->|Depends on| n208
  n343 -->|Depends on| n320
  n343 -->|Depends on| n321
  n343 -->|Depends on| n322
  n343 -->|Depends on| n332
  n343 -->|Depends on| n324
  n345 -->|Defined by| n348
  n345 -->|Read in| n202
  n345 -->|Depends on| n348
  n345 -->|Depends on| n201
  n345 -->|Depends on| n200
  n345 -->|Depends on| n203
  n345 -->|Depends on| n199
  n346 -->|Serves| n443
  n346 -->|Applied by| n339
  n346 -->|Applied by| n331
  n346 -->|Applied by| n347
  n346 -->|Applied by| n330
  n346 -->|Applied by| n334
  n347 -->|Defined by| n348
  n347 -->|Read in| n202
  n347 -->|Depends on| n348
  n347 -->|Depends on| n201
  n347 -->|Depends on| n216
  n347 -->|Depends on| n215
  n347 -->|Depends on| n198
  n347 -->|Depends on| n217
  n347 -->|Depends on| n204
  n347 -->|Depends on| n200
  n349 -->|Chooses| n362
  n349 -->|In| n30
  n349 -->|In| n52
  n349 -->|Serves| n437
  n350 -->|Chooses| n389
  n350 -->|In| n30
  n350 -->|In| n52
  n350 -->|Serves| n437
  n351 -->|Implements| n21
  n352 -->|Implements| n22
  n353 -->|Implements| n23
  n355 -->|Chooses| n400
  n355 -->|Chooses| n388
  n355 -->|In| n30
  n355 -->|In| n52
  n355 -->|Serves| n437
  n356 -->|Implements| n16
  n356 -->|Uses| n307
  n357 -->|Chooses| n356
  n357 -->|In| n30
  n357 -->|In| n52
  n357 -->|Serves| n437
  n358 -->|Implements| n41
  n358 -->|Implements| n43
  n358 -->|Implements| n42
  n358 -->|Depends on| n359
  n358 -->|Depends on| n39
  n358 -->|Depends on| n146
  n358 -->|Depends on| n301
  n360 -->|Chooses| n367
  n360 -->|Chooses| n382
  n360 -->|In| n52
  n360 -->|Serves| n437
  n361 -->|Chooses| n370
  n361 -->|Chooses| n396
  n361 -->|Chooses| n383
  n361 -->|Chooses| n358
  n361 -->|Chooses| n368
  n361 -->|In| n52
  n361 -->|Serves| n437
  n362 -->|Implements| n14
  n362 -->|Depends on| n21
  n362 -->|Depends on| n23
  n362 -->|Depends on| n673
  n362 -->|Depends on| n653
  n362 -->|Depends on| n654
  n362 -->|Depends on| n651
  n362 -->|Depends on| n650
  n362 -->|Depends on| n662
  n362 -->|Depends on| n668
  n362 -->|Depends on| n670
  n362 -->|Depends on| n656
  n362 -->|Depends on| n660
  n364 -->|Depends on| n22
  n364 -->|Depends on| n23
  n364 -->|Depends on| n21
  n364 -->|Depends on| n39
  n365 -->|Depends on| n22
  n365 -->|Depends on| n23
  n365 -->|Depends on| n21
  n365 -->|Depends on| n39
  n365 -->|Depends on| n366
  n365 -->|Depends on| n141
  n367 -->|Implements| n21
  n367 -->|Implements| n23
  n367 -->|Implements| n22
  n367 -->|Implements| n56
  n367 -->|Depends on| n39
  n367 -->|Depends on| n369
  n367 -->|Depends on| n301
  n368 -->|Implements| n26
  n368 -->|Implements| n47
  n368 -->|Depends on| n301
  n370 -->|Implements| n50
  n370 -->|Implements| n51
  n370 -->|Depends on| n363
  n370 -->|Depends on| n301
  n371 -->|Implements| n18
  n371 -->|Depends on| n50
  n371 -->|Depends on| n146
  n371 -->|Depends on| n301
  n372 -->|Implements| n19
  n372 -->|Depends on| n333
  n373 -->|Implements| n25
  n374 -->|Implements| n26
  n375 -->|Chooses| n351
  n375 -->|Chooses| n353
  n375 -->|Chooses| n352
  n375 -->|Chooses| n378
  n375 -->|Chooses| n379
  n375 -->|Chooses| n380
  n375 -->|Chooses| n397
  n375 -->|Chooses| n385
  n375 -->|Chooses| n384
  n375 -->|Chooses| n374
  n375 -->|In| n30
  n375 -->|Serves| n437
  n376 -->|Implements| n39
  n377 -->|Chooses| n376
  n377 -->|Chooses| n373
  n377 -->|Chooses| n372
  n377 -->|Chooses| n381
  n377 -->|Chooses| n371
  n377 -->|Chooses| n390
  n377 -->|In| n30
  n377 -->|In| n52
  n377 -->|Serves| n437
  n378 -->|Implements| n41
  n378 -->|Depends on| n404
  n379 -->|Implements| n43
  n379 -->|Depends on| n404
  n380 -->|Implements| n50
  n380 -->|Depends on| n301
  n381 -->|Implements| n53
  n382 -->|Implements| n33
  n382 -->|Depends on| n23
  n382 -->|Depends on| n39
  n382 -->|Depends on| n141
  n382 -->|Depends on| n311
  n383 -->|Implements| n34
  n384 -->|Implements| n33
  n385 -->|Implements| n34
  n385 -->|Depends on| n155
  n386 -->|Depends on| n364
  n386 -->|Depends on| n365
  n387 -->|Chooses| n386
  n387 -->|In| n30
  n387 -->|In| n52
  n387 -->|Serves| n437
  n388 -->|Implements| n45
  n388 -->|Depends on| n354
  n388 -->|Depends on| n141
  n388 -->|Depends on| n192
  n388 -->|Depends on| n671
  n389 -->|Implements| n55
  n389 -->|Uses| n316
  n389 -->|Uses| n310
  n390 -->|Implements| n27
  n391 -->|Chooses| n182
  n391 -->|In| n30
  n391 -->|In| n52
  n391 -->|Serves| n437
  n392 -->|Implements| n46
  n393 -->|Chooses| n392
  n393 -->|In| n52
  n393 -->|Serves| n437
  n394 -->|Chooses| n395
  n394 -->|In| n30
  n394 -->|Serves| n437
  n395 -->|Implements| n46
  n395 -->|Depends on| n141
  n395 -->|Depends on| n354
  n395 -->|Depends on| n168
  n395 -->|Depends on| n173
  n396 -->|Implements| n17
  n396 -->|Depends on| n398
  n396 -->|Depends on| n399
  n397 -->|Implements| n17
  n397 -->|Depends on| n147
  n400 -->|Implements| n40
  n400 -->|Depends on| n354
  n401 -->|Chooses| n405
  n401 -->|In| n30
  n401 -->|In| n52
  n401 -->|Serves| n437
  n402 -->|Implements| n31
  n402 -->|Uses| n314
  n402 -->|Depends on| n40
  n402 -->|Depends on| n140
  n402 -->|Depends on| n671
  n403 -->|Chooses| n402
  n403 -->|In| n30
  n403 -->|In| n52
  n403 -->|Serves| n437
  n405 -->|Implements| n49
  n405 -->|Uses| n318
  n405 -->|Depends on| n301
  n406 -->|Serves| n443
  n406 -->|Applied by| n162
  n406 -->|Applied by| n174
  n407 -->|Serves| n443
  n407 -->|Applied by| n170
  n407 -->|Applied by| n172
  n408 -->|Serves| n436
  n408 -->|Applied by| n111
  n408 -->|Applied by| n150
  n409 -->|Serves| n436
  n409 -->|Applied by| n54
  n409 -->|Applied by| n44
  n409 -->|Applied by| n32
  n409 -->|Applied by| n29
  n410 -->|Serves| n443
  n410 -->|Applied by| n162
  n410 -->|Applied by| n626
  n411 -->|Serves| n436
  n411 -->|Applied by| n103
  n411 -->|Applied by| n190
  n411 -->|Applied by| n575
  n411 -->|Applied by| n581
  n412 -->|Serves| n436
  n412 -->|Applied by| n185
  n412 -->|Applied by| n55
  n412 -->|Applied by| n671
  n412 -->|Applied by| n136
  n413 -->|Serves| n436
  n413 -->|Applied by| n162
  n413 -->|Applied by| n109
  n414 -->|Serves| n443
  n414 -->|Applied by| n176
  n414 -->|Applied by| n120
  n415 -->|Serves| n443
  n415 -->|Applied by| n162
  n415 -->|Applied by| n161
  n415 -->|Applied by| n179
  n415 -->|Applied by| n185
  n415 -->|Applied by| n174
  n416 -->|Serves| n445
  n416 -->|Applied by| n181
  n416 -->|Applied by| n162
  n416 -->|Applied by| n161
  n416 -->|Applied by| n183
  n416 -->|Applied by| n243
  n416 -->|Applied by| n103
  n417 -->|Serves| n445
  n417 -->|Applied by| n181
  n417 -->|Applied by| n174
  n417 -->|Applied by| n133
  n417 -->|Applied by| n124
  n417 -->|Applied by| n246
  n417 -->|Applied by| n245
  n418 -->|Serves| n443
  n418 -->|Applied by| n619
  n418 -->|Applied by| n222
  n418 -->|Applied by| n162
  n418 -->|Applied by| n29
  n418 -->|Applied by| n32
  n419 -->|Serves| n436
  n419 -->|Applied by| n174
  n419 -->|Applied by| n162
  n419 -->|Applied by| n181
  n420 -->|Serves| n443
  n420 -->|Applied by| n162
  n420 -->|Applied by| n626
  n421 -->|Serves| n443
  n421 -->|Applied by| n109
  n421 -->|Applied by| n129
  n421 -->|Applied by| n177
  n421 -->|Applied by| n334
  n421 -->|Applied by| n160
  n422 -->|Serves| n436
  n422 -->|Applied by| n161
  n422 -->|Applied by| n172
  n422 -->|Applied by| n188
  n422 -->|Applied by| n44
  n423 -->|Serves| n445
  n423 -->|Applied by| n181
  n423 -->|Applied by| n133
  n423 -->|Applied by| n386
  n423 -->|Applied by| n103
  n423 -->|Applied by| n174
  n423 -->|Applied by| n117
  n424 -->|Serves| n436
  n424 -->|Applied by| n40
  n424 -->|Applied by| n142
  n424 -->|Applied by| n138
  n424 -->|Applied by| n174
  n425 -->|Serves| n436
  n425 -->|Applied by| n127
  n425 -->|Applied by| n121
  n425 -->|Applied by| n610
  n425 -->|Applied by| n615
  n425 -->|Applied by| n613
  n425 -->|Applied by| n600
  n425 -->|Applied by| n587
  n426 -->|Serves| n437
  n426 -->|Applied by| n377
  n426 -->|Applied by| n375
  n426 -->|Applied by| n361
  n426 -->|Applied by| n357
  n426 -->|Applied by| n401
  n426 -->|Applied by| n403
  n426 -->|Applied by| n350
  n426 -->|Applied by| n355
  n426 -->|Applied by| n551
  n426 -->|Applied by| n552
  n426 -->|Applied by| n571
  n426 -->|Applied by| n570
  n426 -->|Applied by| n563
  n426 -->|Applied by| n562
  n427 -->|Serves| n436
  n427 -->|Applied by| n103
  n427 -->|Applied by| n190
  n427 -->|Applied by| n576
  n427 -->|Applied by| n575
  n427 -->|Applied by| n582
  n428 -->|Serves| n436
  n428 -->|Applied by| n162
  n428 -->|Applied by| n189
  n429 -->|Serves| n436
  n429 -->|Applied by| n174
  n429 -->|Applied by| n582
  n430 -->|Serves| n436
  n430 -->|Applied by| n174
  n430 -->|Applied by| n188
  n430 -->|Applied by| n181
  n431 -->|Serves| n443
  n431 -->|Applied by| n626
  n431 -->|Applied by| n619
  n431 -->|Applied by| n289
  n431 -->|Applied by| n293
  n431 -->|Applied by| n297
  n431 -->|Applied by| n304
  n431 -->|Applied by| n299
  n431 -->|Applied by| n292
  n431 -->|Applied by| n288
  n431 -->|Applied by| n287
  n431 -->|Applied by| n302
  n431 -->|Applied by| n301
  n431 -->|Applied by| n303
  n441 -->|Refines| n436
  n442 -->|Accepts| n441
  n446 -->|Releases| n54
  n447 -->|Releases| n54
  n447 -->|Assembled by| n539
  n448 -->|Releases| n54
  n448 -->|Assembled by| n549
  n449 -->|Releases| n54
  n449 -->|Assembled by| n448
  n450 -->|Releases| n54
  n450 -->|Assembled by| n449
  n451 -->|Releases| n54
  n451 -->|Assembled by| n450
  n452 -->|Releases| n54
  n452 -->|Assembled by| n451
  n453 -->|Releases| n54
  n453 -->|Assembled by| n447
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
  n462 -->|Assembled by| n446
  n463 -->|Releases| n54
  n463 -->|Assembled by| n461
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
  n470 -->|Assembled by| n469
  n471 -->|Releases| n54
  n471 -->|Assembled by| n470
  n472 -->|Releases| n54
  n472 -->|Assembled by| n471
  n473 -->|Releases| n54
  n473 -->|Assembled by| n462
  n474 -->|Releases| n54
  n474 -->|Assembled by| n472
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
  n483 -->|Assembled by| n482
  n484 -->|Releases| n54
  n484 -->|Assembled by| n473
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
  n550 -->|Serves| n436
  n550 -->|Depends on| n144
  n550 -->|Depends on| n567
  n550 -->|Depends on| n291
  n550 -->|Depends on| n298
  n550 -->|Depends on| n302
  n550 -->|Depends on| n158
  n551 -->|Chooses| n557
  n551 -->|In| n30
  n551 -->|In| n52
  n551 -->|Serves| n437
  n552 -->|Chooses| n559
  n552 -->|In| n30
  n552 -->|In| n52
  n552 -->|Serves| n437
  n554 -->|Serves| n436
  n554 -->|Depends on| n550
  n554 -->|Depends on| n555
  n554 -->|Depends on| n302
  n556 -->|Serves| n436
  n556 -->|Implements| n565
  n556 -->|Depends on| n561
  n556 -->|Depends on| n270
  n556 -->|Depends on| n348
  n556 -->|Depends on| n209
  n556 -->|Depends on| n211
  n556 -->|Depends on| n206
  n556 -->|Depends on| n155
  n556 -->|Depends on| n567
  n556 -->|Depends on| n302
  n557 -->|Serves| n436
  n557 -->|Implements| n555
  n557 -->|Depends on| n553
  n557 -->|Depends on| n157
  n557 -->|Depends on| n155
  n557 -->|Depends on| n252
  n557 -->|Depends on| n259
  n557 -->|Depends on| n261
  n557 -->|Depends on| n251
  n557 -->|Depends on| n253
  n557 -->|Depends on| n257
  n557 -->|Depends on| n264
  n557 -->|Depends on| n254
  n557 -->|Depends on| n260
  n557 -->|Depends on| n262
  n557 -->|Depends on| n266
  n557 -->|Depends on| n265
  n557 -->|Depends on| n248
  n557 -->|Depends on| n256
  n557 -->|Depends on| n302
  n558 -->|Serves| n436
  n558 -->|Applied by| n554
  n558 -->|Applied by| n572
  n558 -->|Applied by| n564
  n558 -->|Applied by| n550
  n558 -->|Applied by| n44
  n559 -->|Serves| n436
  n559 -->|Implements| n553
  n559 -->|Depends on| n279
  n559 -->|Depends on| n153
  n559 -->|Depends on| n7
  n559 -->|Depends on| n263
  n559 -->|Depends on| n274
  n559 -->|Depends on| n282
  n559 -->|Depends on| n286
  n559 -->|Depends on| n281
  n559 -->|Depends on| n273
  n559 -->|Depends on| n284
  n559 -->|Depends on| n275
  n559 -->|Depends on| n277
  n559 -->|Depends on| n278
  n559 -->|Depends on| n283
  n559 -->|Depends on| n291
  n559 -->|Depends on| n302
  n560 -->|Serves| n437
  n560 -->|Applied by| n554
  n560 -->|Applied by| n572
  n560 -->|Applied by| n564
  n560 -->|Applied by| n551
  n560 -->|Applied by| n552
  n560 -->|Applied by| n571
  n560 -->|Applied by| n570
  n560 -->|Applied by| n563
  n560 -->|Applied by| n562
  n562 -->|Chooses| n568
  n562 -->|In| n30
  n562 -->|In| n52
  n562 -->|Serves| n437
  n563 -->|Chooses| n556
  n563 -->|In| n30
  n563 -->|In| n52
  n563 -->|Serves| n437
  n564 -->|Serves| n436
  n564 -->|Depends on| n550
  n564 -->|Depends on| n565
  n564 -->|Depends on| n302
  n566 -->|Serves| n436
  n566 -->|Implements| n573
  n566 -->|Depends on| n569
  n566 -->|Depends on| n644
  n566 -->|Depends on| n642
  n566 -->|Depends on| n155
  n566 -->|Depends on| n640
  n566 -->|Depends on| n638
  n566 -->|Depends on| n639
  n566 -->|Depends on| n637
  n566 -->|Depends on| n643
  n566 -->|Depends on| n302
  n568 -->|Serves| n436
  n568 -->|Implements| n561
  n568 -->|Depends on| n270
  n568 -->|Depends on| n272
  n568 -->|Depends on| n348
  n568 -->|Depends on| n1
  n568 -->|Depends on| n11
  n568 -->|Depends on| n2
  n568 -->|Depends on| n209
  n568 -->|Depends on| n221
  n568 -->|Depends on| n218
  n568 -->|Depends on| n200
  n568 -->|Depends on| n206
  n568 -->|Depends on| n550
  n568 -->|Depends on| n291
  n568 -->|Depends on| n300
  n568 -->|Depends on| n302
  n568 -->|Depends on| n155
  n570 -->|Chooses| n574
  n570 -->|In| n30
  n570 -->|In| n52
  n570 -->|Serves| n437
  n571 -->|Chooses| n566
  n571 -->|In| n30
  n571 -->|In| n52
  n571 -->|Serves| n437
  n572 -->|Serves| n436
  n572 -->|Depends on| n550
  n572 -->|Depends on| n573
  n572 -->|Depends on| n302
  n574 -->|Serves| n436
  n574 -->|Implements| n569
  n574 -->|Depends on| n550
  n574 -->|Depends on| n642
  n574 -->|Depends on| n155
  n574 -->|Depends on| n640
  n574 -->|Depends on| n638
  n574 -->|Depends on| n645
  n574 -->|Depends on| n641
  n574 -->|Depends on| n291
  n574 -->|Depends on| n302
  n575 -->|Verifies| n109
  n575 -->|Verifies| n119
  n575 -->|Verifies| n161
  n575 -->|Verifies| n188
  n575 -->|Verifies| n554
  n575 -->|Verifies| n550
  n575 -->|Verifies| n557
  n575 -->|Verifies| n559
  n575 -->|Verifies| n177
  n575 -->|Verifies| n176
  n575 -->|Verifies| n367
  n575 -->|Verifies| n370
  n575 -->|Verifies| n396
  n575 -->|In| n52
  n575 -->|Depends on| n109
  n575 -->|Depends on| n581
  n575 -->|Depends on| n56
  n575 -->|Depends on| n51
  n575 -->|Depends on| n141
  n575 -->|Depends on| n21
  n575 -->|Depends on| n39
  n575 -->|Depends on| n41
  n575 -->|Depends on| n146
  n575 -->|Depends on| n288
  n575 -->|Depends on| n303
  n576 -->|Verifies| n162
  n576 -->|Verifies| n181
  n576 -->|Verifies| n185
  n576 -->|Verifies| n189
  n576 -->|Verifies| n172
  n576 -->|Verifies| n389
  n576 -->|Verifies| n402
  n576 -->|Verifies| n400
  n576 -->|Verifies| n367
  n576 -->|Verifies| n376
  n576 -->|Verifies| n358
  n576 -->|Verifies| n390
  n576 -->|In| n52
  n576 -->|Depends on| n162
  n576 -->|Depends on| n41
  n576 -->|Depends on| n17
  n576 -->|Depends on| n580
  n576 -->|Depends on| n303
  n577 -->|Verifies| n291
  n577 -->|Verifies| n298
  n577 -->|Verifies| n158
  n577 -->|Verifies| n159
  n577 -->|Verifies| n155
  n577 -->|Verifies| n317
  n577 -->|In| n52
  n577 -->|Depends on| n291
  n577 -->|Depends on| n298
  n577 -->|Depends on| n158
  n577 -->|Depends on| n159
  n577 -->|Depends on| n155
  n577 -->|Depends on| n296
  n577 -->|Depends on| n317
  n577 -->|Depends on| n578
  n577 -->|Depends on| n303
  n579 -->|Verifies| n163
  n579 -->|Verifies| n171
  n579 -->|Verifies| n170
  n579 -->|Verifies| n183
  n579 -->|Verifies| n180
  n579 -->|In| n52
  n579 -->|Depends on| n163
  n579 -->|Depends on| n171
  n579 -->|Depends on| n170
  n579 -->|Depends on| n183
  n579 -->|Depends on| n180
  n579 -->|Depends on| n583
  n579 -->|Depends on| n303
  n582 -->|Verifies| n174
  n582 -->|In| n52
  n582 -->|Depends on| n174
  n582 -->|Depends on| n162
  n582 -->|Depends on| n41
  n582 -->|Depends on| n17
  n582 -->|Depends on| n303
  n584 -->|Serves| n436
  n585 -->|Serves| n436
  n586 -->|Serves| n436
  n587 -->|Checks| n589
  n587 -->|Run by| n130
  n587 -->|Signed by| n599
  n588 -->|Checks| n589
  n588 -->|Run by| n113
  n588 -->|Signed by| n599
  n588 -->|Verifies| n351
  n588 -->|Verifies| n353
  n588 -->|Verifies| n352
  n588 -->|Verifies| n378
  n588 -->|Verifies| n379
  n588 -->|Verifies| n380
  n588 -->|Verifies| n397
  n588 -->|Verifies| n385
  n588 -->|Verifies| n384
  n588 -->|Verifies| n374
  n588 -->|Verifies| n395
  n589 -->|Produced by| n54
  n590 -->|Serves| n436
  n591 -->|Serves| n436
  n592 -->|Its obligations| n591
  n592 -->|Its obligations| n598
  n592 -->|Its obligations| n584
  n592 -->|Its obligations| n586
  n592 -->|Its obligations| n585
  n592 -->|Its obligations| n590
  n593 -->|Produced by| n116
  n593 -->|Carries| n36
  n595 -->|Checks| n593
  n595 -->|Run by| n602
  n595 -->|Signed by| n599
  n595 -->|Verifies| n63
  n595 -->|Verifies| n62
  n595 -->|Verifies| n61
  n595 -->|Verifies| n60
  n595 -->|Verifies| n59
  n595 -->|Verifies| n57
  n595 -->|Verifies| n58
  n597 -->|Serves| n436
  n597 -->|Depends on| n337
  n597 -->|Depends on| n270
  n597 -->|Depends on| n198
  n598 -->|Serves| n436
  n600 -->|Ships| n589
  n600 -->|Ships| n603
  n600 -->|Ships| n593
  n600 -->|Deployed by| n103
  n600 -->|Programs assembled for| n30
  n600 -->|Follows the policy| n592
  n601 -->|Verifies| n602
  n601 -->|Verifies| n597
  n601 -->|In| n52
  n601 -->|Depends on| n602
  n601 -->|Depends on| n593
  n601 -->|Depends on| n597
  n601 -->|Depends on| n606
  n601 -->|Depends on| n596
  n601 -->|Depends on| n303
  n602 -->|Serves| n436
  n602 -->|Part of| n607
  n602 -->|Depends on| n593
  n602 -->|Depends on| n296
  n602 -->|Depends on| n597
  n602 -->|Depends on| n594
  n602 -->|Depends on| n606
  n603 -->|Produced by| n36
  n603 -->|Assembled for| n15
  n604 -->|In| n52
  n605 -->|In| n30
  n606 -->|Written in| n296
  n607 -->|Deployed in| n30
  n608 -->|Implements| n48
  n608 -->|Depends on| n25
  n610 -->|Serves| n436
  n610 -->|Depends on| n141
  n610 -->|Depends on| n615
  n610 -->|Depends on| n21
  n610 -->|Depends on| n39
  n610 -->|Depends on| n25
  n610 -->|Depends on| n139
  n610 -->|Depends on| n170
  n610 -->|Depends on| n48
  n611 -->|Chooses| n608
  n611 -->|In| n30
  n611 -->|In| n52
  n611 -->|Serves| n436
  n612 -->|Serves| n436
  n612 -->|Depends on| n146
  n612 -->|Depends on| n181
  n612 -->|Depends on| n141
  n612 -->|Depends on| n193
  n612 -->|Depends on| n21
  n612 -->|Depends on| n39
  n613 -->|Refines| n436
  n614 -->|Accepts| n613
  n619 -->|Serves| n436
  n619 -->|Depends on| n142
  n619 -->|Depends on| n293
  n623 -->|Written in| n296
  n624 -->|Serves| n436
  n624 -->|Applied by| n626
  n624 -->|Applied by| n49
  n625 -->|Serves| n436
  n625 -->|Applied by| n626
  n625 -->|Applied by| n619
  n625 -->|Applied by| n49
  n626 -->|Serves| n436
  n626 -->|Serves| n443
  n626 -->|Depends on| n49
  n626 -->|Depends on| n620
  n626 -->|Depends on| n623
  n626 -->|Depends on| n621
  n626 -->|Depends on| n622
  n626 -->|Depends on| n616
  n626 -->|Depends on| n21
  n626 -->|Depends on| n27
  n626 -->|Depends on| n46
  n626 -->|Depends on| n141
  n626 -->|Depends on| n39
  n626 -->|Depends on| n25
  n627 -->|Defined by| n630
  n627 -->|Read in| n633
  n627 -->|Depends on| n630
  n628 -->|Defined by| n630
  n628 -->|Read in| n633
  n628 -->|Depends on| n630
  n629 -->|Defined by| n630
  n629 -->|Read in| n633
  n629 -->|Depends on| n630
  n629 -->|Depends on| n633
  n631 -->|Defined by| n630
  n631 -->|Read in| n633
  n631 -->|Depends on| n630
  n631 -->|Depends on| n629
  n632 -->|Defined by| n630
  n632 -->|Read in| n633
  n632 -->|Depends on| n630
  n632 -->|Depends on| n634
  n632 -->|Depends on| n629
  n633 -->|Defined by| n630
  n633 -->|Queries written in| n617
  n633 -->|Read by| n626
  n633 -->|Uses| n308
  n635 -->|Serves| n436
  n635 -->|Depends on| n630
  n635 -->|Depends on| n634
  n635 -->|Depends on| n141
  n635 -->|Depends on| n628
  n635 -->|Depends on| n629
  n635 -->|Depends on| n631
  n635 -->|Depends on| n627
  n635 -->|Depends on| n632
  n635 -->|Depends on| n39
  n635 -->|Depends on| n40
  n635 -->|Depends on| n291
  n635 -->|Depends on| n293
  n637 -->|Defined by| n644
  n637 -->|Depends on| n644
  n638 -->|Defined by| n644
  n638 -->|Depends on| n644
  n638 -->|Depends on| n640
  n638 -->|Depends on| n642
  n639 -->|Defined by| n644
  n639 -->|Depends on| n644
  n640 -->|Defined by| n644
  n640 -->|Depends on| n644
  n640 -->|Depends on| n642
  n641 -->|Defined by| n644
  n641 -->|Depends on| n644
  n641 -->|Depends on| n636
  n643 -->|Defined by| n644
  n643 -->|Depends on| n644
  n645 -->|Defined by| n644
  n645 -->|Depends on| n644
  n645 -->|Depends on| n636
  n646 -->|Defined by| n673
  n646 -->|Read in| n671
  n646 -->|Depends on| n673
  n647 -->|Defined by| n673
  n647 -->|Read in| n671
  n647 -->|Depends on| n673
  n648 -->|Defined by| n673
  n648 -->|Read in| n671
  n648 -->|Depends on| n673
  n649 -->|Defined by| n673
  n649 -->|Read in| n671
  n649 -->|Depends on| n673
  n650 -->|Defined by| n673
  n650 -->|Read in| n671
  n650 -->|Depends on| n673
  n651 -->|Defined by| n673
  n651 -->|Read in| n671
  n651 -->|Depends on| n673
  n652 -->|Defined by| n673
  n652 -->|Read in| n671
  n652 -->|Depends on| n673
  n652 -->|Depends on| n670
  n653 -->|Defined by| n673
  n653 -->|Read in| n671
  n653 -->|Depends on| n673
  n654 -->|Defined by| n673
  n654 -->|Read in| n671
  n654 -->|Depends on| n673
  n655 -->|Defined by| n673
  n655 -->|Read in| n671
  n655 -->|Depends on| n673
  n656 -->|Defined by| n673
  n656 -->|Read in| n671
  n656 -->|Depends on| n673
  n657 -->|Defined by| n673
  n657 -->|Read in| n671
  n657 -->|Depends on| n673
  n658 -->|Defined by| n673
  n658 -->|Read in| n671
  n658 -->|Depends on| n673
  n659 -->|Defined by| n673
  n659 -->|Read in| n671
  n659 -->|Depends on| n673
  n660 -->|Defined by| n673
  n660 -->|Read in| n671
  n660 -->|Depends on| n673
  n660 -->|Depends on| n670
  n661 -->|Defined by| n673
  n661 -->|Read in| n671
  n661 -->|Depends on| n673
  n662 -->|Defined by| n673
  n662 -->|Read in| n671
  n662 -->|Depends on| n673
  n663 -->|Defined by| n673
  n663 -->|Read in| n671
  n663 -->|Depends on| n673
  n664 -->|Defined by| n673
  n664 -->|Read in| n671
  n664 -->|Depends on| n673
  n665 -->|Defined by| n673
  n665 -->|Read in| n671
  n665 -->|Depends on| n673
  n666 -->|Defined by| n673
  n666 -->|Read in| n671
  n666 -->|Depends on| n673
  n668 -->|Defined by| n673
  n668 -->|Read in| n671
  n668 -->|Depends on| n673
  n668 -->|Depends on| n670
  n669 -->|Defined by| n673
  n669 -->|Read in| n671
  n669 -->|Depends on| n673
  n670 -->|Defined by| n673
  n670 -->|Read in| n671
  n670 -->|Depends on| n673
  n671 -->|Queries written in| n617
  n671 -->|Read by| n626
  n671 -->|Watches the globals| n676
  n671 -->|Uses| n315
  n672 -->|Serves| n436
  n674 -->|Serves| n436
  n674 -->|Depends on| n671
  n674 -->|Depends on| n673
  n674 -->|Depends on| n138
  n674 -->|Depends on| n667
  n674 -->|Depends on| n145
  n674 -->|Depends on| n144
  n674 -->|Depends on| n657
  n674 -->|Depends on| n670
  n674 -->|Depends on| n658
  n674 -->|Depends on| n664
  n674 -->|Depends on| n650
  n674 -->|Depends on| n649
  n674 -->|Depends on| n666
  n674 -->|Depends on| n668
  n674 -->|Depends on| n662
  n674 -->|Depends on| n646
  n674 -->|Depends on| n651
  n674 -->|Depends on| n660
  n674 -->|Depends on| n652
  n674 -->|Depends on| n647
  n674 -->|Depends on| n665
  n674 -->|Depends on| n663
  n674 -->|Depends on| n675
  n674 -->|Depends on| n655
  n674 -->|Depends on| n669
  n674 -->|Depends on| n648
  n674 -->|Depends on| n39
  n674 -->|Depends on| n40
  n674 -->|Depends on| n291
  n674 -->|Depends on| n293
  n675 -->|Defined by| n673
  n675 -->|Read in| n671
  n675 -->|Depends on| n673
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
