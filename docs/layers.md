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
    n33["Reports on packages<br/><small>Port</small>"]:::neutral
    n34["Amendments from the page<br/><small>Port</small>"]:::neutral
    n35["The page in a browser<br/><small>Component</small>"]:::neutral
    n36["Memory of the page<br/><small>Port</small>"]:::neutral
    n37["Window of the page<br/><small>Port</small>"]:::neutral
    n38["Paths<br/><small>Port</small>"]:::neutral
    n39["Prelude<br/><small>Port</small>"]:::neutral
    n40["Process<br/><small>Port</small>"]:::neutral
    n41["Process log<br/><small>Port</small>"]:::neutral
    n42["Programs<br/><small>Port</small>"]:::neutral
    n43["Rendering does not read the graph<br/><small>Architecture rule</small>"]:::held
    n44["Page resources<br/><small>Port</small>"]:::neutral
    n45["Where runs are kept<br/><small>Port</small>"]:::neutral
    n46["Server log<br/><small>Port</small>"]:::neutral
    n47["Signatures<br/><small>Port</small>"]:::neutral
    n48["Syntax trees<br/><small>Port</small>"]:::neutral
    n49["Terminal<br/><small>Port</small>"]:::neutral
    n50["Terminal log<br/><small>Port</small>"]:::neutral
    n51["Test<br/><small>Environment</small>"]:::neutral
    n52["Timer<br/><small>Port</small>"]:::neutral
    n53["Trame on the command line<br/><small>Component</small>"]:::neutral
    n54["TypeScript compiler<br/><small>Port</small>"]:::neutral
    n55["Write log<br/><small>Port</small>"]:::neutral
  end
  subgraph browser["Trame · The page in a browser"]
    n56["Amendments sent to trame dev<br/><small>Implementation</small>"]:::unknown
    n57["The browser's gzip<br/><small>Implementation</small>"]:::unknown
    n58["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::unknown
    n59["Local storage<br/><small>Implementation</small>"]:::unknown
    n60["The browser's window<br/><small>Implementation</small>"]:::unknown
    n61["Explorer of a graph<br/><small>Function</small>"]:::unknown
    n62["Show the graph<br/><small>Entry point</small>"]:::unknown
    n63["The browser runs the page<br/><small>Technical choice</small>"]:::unknown
    n64["The page is assembled<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph command-scenarios["Trame · Scenarios of the commands"]
    n65["An advance, in memory<br/><small>Scenario</small>"]:::held
    n66["What the engines an advance starts answer in a scenario<br/><small>Decision</small>"]:::neutral
    n67["What an amendment is checked with<br/><small>Decision</small>"]:::neutral
    n68["What the example is assembled for<br/><small>Decision</small>"]:::neutral
    n69["A body is read and checked<br/><small>Scenario</small>"]:::held
    n70["Bodies the reader is given<br/><small>Decision</small>"]:::neutral
    n71["A build planned<br/><small>Scenario</small>"]:::held
    n72["The command line<br/><small>Scenario</small>"]:::held
    n73["A component assembled<br/><small>Scenario</small>"]:::held
    n74["A component run<br/><small>Scenario</small>"]:::held
    n75["Declarations published<br/><small>Scenario</small>"]:::held
    n76["trame dev<br/><small>Scenario</small>"]:::held
    n77["What trame dev is shown in a scenario<br/><small>Decision</small>"]:::neutral
    n78["The doctor<br/><small>Scenario</small>"]:::held
    n79["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n80["A library released<br/><small>Scenario</small>"]:::held
    n81["The manifest written<br/><small>Scenario</small>"]:::held
    n82["The packages audited<br/><small>Scenario</small>"]:::held
    n83["The page delivered<br/><small>Scenario</small>"]:::held
    n84["The page exported<br/><small>Scenario</small>"]:::held
    n85["The page of the graph<br/><small>Scenario</small>"]:::held
    n86["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n87["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n88["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n89["A project started<br/><small>Scenario</small>"]:::held
    n90["The registry filled<br/><small>Scenario</small>"]:::held
    n91["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n92["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n93["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n94["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n95["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n96["A value amended<br/><small>Scenario</small>"]:::held
    n97["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n98["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n99["Advance<br/><small>Entry point</small>"]:::held
    n100["Amend<br/><small>Entry point</small>"]:::held
    n101["An amendment prepared<br/><small>Function</small>"]:::held
    n102["Assemble a component<br/><small>Entry point</small>"]:::held
    n103["Assembler<br/><small>Function</small>"]:::held
    n104["Audit the packages<br/><small>Entry point</small>"]:::held
    n105["Build<br/><small>Entry point</small>"]:::held
    n106["Two builds compared<br/><small>Function</small>"]:::held
    n107["Deliver<br/><small>Entry point</small>"]:::held
    n108["Start trame dev<br/><small>Entry point</small>"]:::held
    n109["Ask the machine<br/><small>Entry point</small>"]:::held
    n110["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n111["Payload<br/><small>Entry point</small>"]:::held
    n112["Export the page<br/><small>Entry point</small>"]:::held
    n113["Start a project<br/><small>Entry point</small>"]:::held
    n114["Plan<br/><small>Entry point</small>"]:::held
    n115["Preparation<br/><small>Function</small>"]:::held
    n116["Publish<br/><small>Entry point</small>"]:::held
    n117["Record evidence<br/><small>Entry point</small>"]:::held
    n118["A module of references<br/><small>Function</small>"]:::held
    n119["Fill the registry<br/><small>Entry point</small>"]:::held
    n120["Release a version<br/><small>Entry point</small>"]:::held
    n121["Render a view<br/><small>Function</small>"]:::held
    n122["Run a component<br/><small>Entry point</small>"]:::held
    n123["Ship<br/><small>Entry point</small>"]:::held
    n124["Show a view<br/><small>Entry point</small>"]:::held
    n125["Take the snapshot<br/><small>Entry point</small>"]:::held
    n126["Test the laws<br/><small>Entry point</small>"]:::held
    n127["View by its name<br/><small>Entry point</small>"]:::held
    n128["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n129["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n130["Default rank<br/><small>Decision</small>"]:::neutral
    n131["Documentation comment<br/><small>Decision</small>"]:::neutral
    n132["Names of the documents<br/><small>Standard</small>"]:::neutral
    n133["The frozen API<br/><small>Standard</small>"]:::neutral
    n134["JSON formatting<br/><small>Decision</small>"]:::neutral
    n135["The language's names<br/><small>Decision</small>"]:::neutral
    n136["Project layout<br/><small>Decision</small>"]:::neutral
    n137["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n138["How a project starts<br/><small>Decision</small>"]:::neutral
    n139["Trame references<br/><small>Standard</small>"]:::neutral
    n140["Names of steps<br/><small>Decision</small>"]:::neutral
    n141["Trame's commands<br/><small>Standard</small>"]:::neutral
    n142["Trame's environment<br/><small>Standard</small>"]:::neutral
    n143["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n144["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n145["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n146["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n147["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n148["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n149["How a number is written<br/><small>Decision</small>"]:::neutral
    n150["Punctuation of documents<br/><small>Function</small>"]:::held
    n151["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n152["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n153["Values with their units<br/><small>Function</small>"]:::held
    n154["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n155["Assembly<br/><small>Function</small>"]:::held
    n156["Compilation API<br/><small>Function</small>"]:::held
    n157["Compiler<br/><small>Function</small>"]:::held
    n158["Cycles<br/><small>Function</small>"]:::held
    n159["Date bundle<br/><small>Function</small>"]:::held
    n160["trame dev server<br/><small>Function</small>"]:::held
    n161["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n162["Differences<br/><small>Function</small>"]:::held
    n163["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n164["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n165["Fingerprints<br/><small>Function</small>"]:::held
    n166["Pseudo-random generator<br/><small>Function</small>"]:::held
    n167["Graph<br/><small>Function</small>"]:::held
    n168["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n169["Laws<br/><small>Function</small>"]:::held
    n170["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n171["Lock<br/><small>Function</small>"]:::held
    n172["Machine outputs<br/><small>Function</small>"]:::held
    n173["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n174["Payload<br/><small>Function</small>"]:::held
    n175["Positions<br/><small>Function</small>"]:::held
    n176["Project<br/><small>Function</small>"]:::held
    n177["The runs of a project<br/><small>Function</small>"]:::held
    n178["References<br/><small>Function</small>"]:::held
    n179["A shipment's pipeline<br/><small>Function</small>"]:::held
    n180["Static reading<br/><small>Function</small>"]:::held
    n181["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n182["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n183["Views<br/><small>Function</small>"]:::held
    n184["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n185["Accept a candidate<br/><small>Requirement</small>"]:::held
    n186["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n187["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n188["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n189["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n190["Records of the releases<br/><small>Function</small>"]:::held
    n191["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n192["Attribute presence<br/><small>Syntax element</small>"]:::held
    n193["Attribute selector<br/><small>Syntax element</small>"]:::held
    n194["Class selector<br/><small>Syntax element</small>"]:::held
    n195["Declaration<br/><small>Syntax element</small>"]:::held
    n196["Rule<br/><small>Syntax element</small>"]:::held
    n197["CSS style sheets<br/><small>Language</small>"]:::held
    n198["Variable<br/><small>Syntax element</small>"]:::held
    n199["Custom property<br/><small>Syntax element</small>"]:::held
    n200["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n201["Escaped text<br/><small>Syntax element</small>"]:::held
    n202["Attributes<br/><small>Syntax element</small>"]:::held
    n203["Element over several lines<br/><small>Syntax element</small>"]:::held
    n204["HTML element<br/><small>Syntax element</small>"]:::held
    n205["End tag<br/><small>Syntax element</small>"]:::held
    n206["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n207["HTML markup<br/><small>Language</small>"]:::held
    n208["Start tag<br/><small>Syntax element</small>"]:::held
    n209["JSON in a script<br/><small>Syntax element</small>"]:::held
    n210["Media feature<br/><small>Syntax element</small>"]:::held
    n211["Media rule<br/><small>Syntax element</small>"]:::held
    n212["Negation<br/><small>Syntax element</small>"]:::held
    n213["Path data<br/><small>Syntax element</small>"]:::held
    n214["Script<br/><small>Syntax element</small>"]:::held
    n215["Selector list<br/><small>Syntax element</small>"]:::held
    n216["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n217["Drivers<br/><small>Function</small>"]:::held
    n218["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n219["Answers without crashing<br/><small>Requirement</small>"]:::held
    n220["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n221["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n222["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n223["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n224["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n225["Complete declaration<br/><small>Requirement</small>"]:::held
    n226["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n227["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n228["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n229["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n230["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n231["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n232["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n233["Same input, same answer<br/><small>Requirement</small>"]:::held
    n234["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n235["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n236["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n237["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n238["What belongs to a library<br/><small>Requirement</small>"]:::held
    n239["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n240["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n241["A release is settled<br/><small>Requirement</small>"]:::held
    n242["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n243["Anchor<br/><small>Syntax element</small>"]:::held
    n244["Backtick string<br/><small>Syntax element</small>"]:::held
    n245["Blank line<br/><small>Syntax element</small>"]:::held
    n246["Block quote<br/><small>Syntax element</small>"]:::held
    n247["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n248["Code block<br/><small>Syntax element</small>"]:::held
    n249["Code span<br/><small>Syntax element</small>"]:::held
    n250["CommonMark<br/><small>Standard</small>"]:::neutral
    n251["Collapsible block<br/><small>Syntax element</small>"]:::held
    n252["Emphasis<br/><small>Syntax element</small>"]:::held
    n253["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n254["Heading<br/><small>Syntax element</small>"]:::held
    n255["Link<br/><small>Syntax element</small>"]:::held
    n256["List item<br/><small>Syntax element</small>"]:::held
    n257["Relative reference<br/><small>Syntax element</small>"]:::held
    n258["Small text<br/><small>Syntax element</small>"]:::held
    n259["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n260["Table<br/><small>Syntax element</small>"]:::held
    n261["Table cell<br/><small>Syntax element</small>"]:::held
    n262["Delimiter row<br/><small>Syntax element</small>"]:::held
    n263["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n264["Around the documents<br/><small>Decision</small>"]:::neutral
    n265["Documents in the page<br/><small>Decision</small>"]:::neutral
    n266["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n267["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n268["Class definition<br/><small>Syntax element</small>"]:::held
    n269["Flowchart<br/><small>Syntax element</small>"]:::held
    n270["Gantt chart<br/><small>Syntax element</small>"]:::held
    n271["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n272["Section<br/><small>Syntax element</small>"]:::held
    n273["Task<br/><small>Syntax element</small>"]:::held
    n274["Mermaid<br/><small>Standard</small>"]:::neutral
    n275["Label<br/><small>Syntax element</small>"]:::held
    n276["Link<br/><small>Syntax element</small>"]:::held
    n277["Node<br/><small>Syntax element</small>"]:::held
    n278["Milestone<br/><small>Syntax element</small>"]:::held
    n279["Node style<br/><small>Syntax element</small>"]:::held
    n280["Style properties<br/><small>Syntax element</small>"]:::held
    n281["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n282["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n283["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n284["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n285["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n286["Dates<br/><small>Function</small>"]:::held
    n287["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n288["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n289["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n290["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n291["Language<br/><small>Decision</small>"]:::neutral
    n292["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n293["Lists<br/><small>Function</small>"]:::held
    n294["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n295["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n296["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n297["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n298["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n299["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n300["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n301["Grammar of CSS<br/><small>Package</small>"]:::held
    n302["esbuild<br/><small>Package</small>"]:::held
    n303["Grammar of HCL<br/><small>Package</small>"]:::held
    n304["Grammar of HTML<br/><small>Package</small>"]:::held
    n305["Types of Node.js<br/><small>Package</small>"]:::held
    n306["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n307["The standard library<br/><small>Package</small>"]:::neutral
    n308["tsx<br/><small>Package</small>"]:::held
    n309["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n310["TypeScript<br/><small>Package</small>"]:::held
    n311["Order of versions<br/><small>Function</small>"]:::held
    n312["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n313["Banner<br/><small>Syntax element</small>"]:::held
    n314["Brand<br/><small>Syntax element</small>"]:::held
    n315["State of the compilation<br/><small>Syntax element</small>"]:::held
    n316["Dates<br/><small>Syntax element</small>"]:::held
    n317["Head of the document<br/><small>Syntax element</small>"]:::held
    n318["Document picker<br/><small>Syntax element</small>"]:::held
    n319["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n320["Fonts<br/><small>Syntax element</small>"]:::held
    n321["Logo<br/><small>Syntax element</small>"]:::held
    n322["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n323["Main area<br/><small>Syntax element</small>"]:::held
    n324["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n325["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n326["Navigation<br/><small>Syntax element</small>"]:::held
    n327["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n328["Page<br/><small>Function</small>"]:::held
    n329["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n330["Document of the page<br/><small>Syntax element</small>"]:::held
    n331["Regions of the page<br/><small>Decision</small>"]:::neutral
    n332["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n333["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n334["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n335["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n336["Shell<br/><small>Syntax element</small>"]:::held
    n337["Side bar<br/><small>Syntax element</small>"]:::held
    n338["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n339["Colours of a status<br/><small>Syntax element</small>"]:::held
    n340["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n341["Theme<br/><small>Syntax element</small>"]:::held
    n342["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n343["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n344["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n345["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n346["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n347["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n348["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n349["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n350["esbuild<br/><small>Implementation</small>"]:::held
    n351["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n352["Example process<br/><small>Function</small>"]:::held
    n353["Example project<br/><small>Decision</small>"]:::neutral
    n354["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n355["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n356["Amendments in place<br/><small>Implementation</small>"]:::held
    n357["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n358["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n359["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n360["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n361["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n362["A server in memory<br/><small>Function</small>"]:::held
    n363["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n364["Terminal in memory<br/><small>Function</small>"]:::held
    n365["Command line<br/><small>Implementation</small>"]:::held
    n366["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n367["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n368["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n369["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n370["Node paths<br/><small>Implementation</small>"]:::held
    n371["NodePlatform<br/><small>Technical choice</small>"]:::held
    n372["Node process<br/><small>Implementation</small>"]:::unknown
    n373["Node programs<br/><small>Implementation</small>"]:::unknown
    n374["Node terminal<br/><small>Implementation</small>"]:::unknown
    n375["Node timer<br/><small>Implementation</small>"]:::held
    n376["No registry in test<br/><small>Function</small>"]:::held
    n377["npm's reports<br/><small>Implementation</small>"]:::unknown
    n378["Packages by their origin<br/><small>Implementation</small>"]:::held
    n379["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n380["Page resources<br/><small>Implementation</small>"]:::held
    n381["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n382["Results kept in the process<br/><small>Implementation</small>"]:::held
    n383["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n384["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n385["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n386["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n387["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n388["Stopped clock<br/><small>Function</small>"]:::held
    n389["System clock<br/><small>Implementation</small>"]:::unknown
    n390["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n391["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n392["Trame's prelude<br/><small>Implementation</small>"]:::held
    n393["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n394["tsx loader<br/><small>Implementation</small>"]:::held
    n395["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n396["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n397["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n398["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n399["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n400["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n401["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n402["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n403["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n404["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n405["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n406["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n407["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n408["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n409["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n410["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n411["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n412["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n413["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n414["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n415["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n416["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n417["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n418["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n419["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n420["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n421["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n422["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n423["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n424["Candidate dates<br/><small>Decision</small>"]:::neutral
    n425["Claim sets<br/><small>Decision</small>"]:::neutral
    n426["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n427["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n428["A specification that runs<br/><small>Goal</small>"]:::neutral
    n429["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n430["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n431["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n432["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n433["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n434["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n435["A single source of truth<br/><small>Goal</small>"]:::neutral
    n436["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n437["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n438["Generation 1<br/><small>Release</small>"]:::neutral
    n439["Generation 10<br/><small>Release</small>"]:::neutral
    n440["Generation 11<br/><small>Release</small>"]:::neutral
    n441["Generation 12<br/><small>Release</small>"]:::neutral
    n442["Generation 13<br/><small>Release</small>"]:::neutral
    n443["Generation 14<br/><small>Release</small>"]:::neutral
    n444["Generation 15<br/><small>Release</small>"]:::neutral
    n445["Generation 16<br/><small>Release</small>"]:::neutral
    n446["Generation 17<br/><small>Release</small>"]:::neutral
    n447["Generation 18<br/><small>Release</small>"]:::neutral
    n448["Generation 19<br/><small>Release</small>"]:::neutral
    n449["Generation 2<br/><small>Release</small>"]:::neutral
    n450["Generation 20<br/><small>Release</small>"]:::neutral
    n451["Generation 21<br/><small>Release</small>"]:::neutral
    n452["Generation 22<br/><small>Release</small>"]:::neutral
    n453["Generation 23<br/><small>Release</small>"]:::neutral
    n454["Generation 24<br/><small>Release</small>"]:::neutral
    n455["Generation 25<br/><small>Release</small>"]:::neutral
    n456["Generation 26<br/><small>Release</small>"]:::neutral
    n457["Generation 27<br/><small>Release</small>"]:::neutral
    n458["Generation 28<br/><small>Release</small>"]:::neutral
    n459["Generation 29<br/><small>Release</small>"]:::neutral
    n460["Generation 3<br/><small>Release</small>"]:::neutral
    n461["Generation 30<br/><small>Release</small>"]:::neutral
    n462["Generation 31<br/><small>Release</small>"]:::neutral
    n463["Generation 32<br/><small>Release</small>"]:::neutral
    n464["Generation 33<br/><small>Release</small>"]:::neutral
    n465["Generation 34<br/><small>Release</small>"]:::neutral
    n466["Generation 35<br/><small>Release</small>"]:::neutral
    n467["Generation 36<br/><small>Release</small>"]:::neutral
    n468["Generation 37<br/><small>Release</small>"]:::neutral
    n469["Generation 38<br/><small>Release</small>"]:::neutral
    n470["Generation 39<br/><small>Release</small>"]:::neutral
    n471["Generation 4<br/><small>Release</small>"]:::neutral
    n472["Generation 40<br/><small>Release</small>"]:::neutral
    n473["Generation 41<br/><small>Release</small>"]:::neutral
    n474["Generation 42<br/><small>Release</small>"]:::neutral
    n475["Generation 43<br/><small>Release</small>"]:::neutral
    n476["Generation 44<br/><small>Release</small>"]:::neutral
    n477["Generation 45<br/><small>Release</small>"]:::neutral
    n478["Generation 46<br/><small>Release</small>"]:::neutral
    n479["Generation 47<br/><small>Release</small>"]:::neutral
    n480["Generation 48<br/><small>Release</small>"]:::neutral
    n481["Generation 49<br/><small>Release</small>"]:::neutral
    n482["Generation 5<br/><small>Release</small>"]:::neutral
    n483["Generation 50<br/><small>Release</small>"]:::neutral
    n484["Generation 51<br/><small>Release</small>"]:::neutral
    n485["Generation 52<br/><small>Release</small>"]:::neutral
    n486["Generation 53<br/><small>Release</small>"]:::neutral
    n487["Generation 54<br/><small>Release</small>"]:::neutral
    n488["Generation 55<br/><small>Release</small>"]:::neutral
    n489["Generation 56<br/><small>Release</small>"]:::neutral
    n490["Generation 57<br/><small>Release</small>"]:::neutral
    n491["Generation 58<br/><small>Release</small>"]:::neutral
    n492["Generation 59<br/><small>Release</small>"]:::neutral
    n493["Generation 6<br/><small>Release</small>"]:::neutral
    n494["Generation 60<br/><small>Release</small>"]:::neutral
    n495["Generation 61<br/><small>Release</small>"]:::neutral
    n496["Generation 62<br/><small>Release</small>"]:::neutral
    n497["Generation 63<br/><small>Release</small>"]:::neutral
    n498["Generation 64<br/><small>Release</small>"]:::neutral
    n499["Generation 65<br/><small>Release</small>"]:::neutral
    n500["Generation 66<br/><small>Release</small>"]:::neutral
    n501["Generation 67<br/><small>Release</small>"]:::neutral
    n502["Generation 68<br/><small>Release</small>"]:::neutral
    n503["Generation 69<br/><small>Release</small>"]:::neutral
    n504["Generation 7<br/><small>Release</small>"]:::neutral
    n505["Generation 70<br/><small>Release</small>"]:::neutral
    n506["Generation 71<br/><small>Release</small>"]:::neutral
    n507["Generation 72<br/><small>Release</small>"]:::neutral
    n508["Generation 73<br/><small>Release</small>"]:::neutral
    n509["Generation 74<br/><small>Release</small>"]:::neutral
    n510["Generation 75<br/><small>Release</small>"]:::neutral
    n511["Generation 76<br/><small>Release</small>"]:::neutral
    n512["Generation 77<br/><small>Release</small>"]:::neutral
    n513["Generation 78<br/><small>Release</small>"]:::neutral
    n514["Generation 79<br/><small>Release</small>"]:::neutral
    n515["Generation 8<br/><small>Release</small>"]:::neutral
    n516["Generation 80<br/><small>Release</small>"]:::neutral
    n517["Generation 81<br/><small>Release</small>"]:::neutral
    n518["Generation 82<br/><small>Release</small>"]:::neutral
    n519["Generation 83<br/><small>Release</small>"]:::neutral
    n520["Generation 84<br/><small>Release</small>"]:::neutral
    n521["Generation 85<br/><small>Release</small>"]:::neutral
    n522["Generation 86<br/><small>Release</small>"]:::neutral
    n523["Generation 87<br/><small>Release</small>"]:::neutral
    n524["Generation 88<br/><small>Release</small>"]:::neutral
    n525["Generation 89<br/><small>Release</small>"]:::neutral
    n526["Generation 9<br/><small>Release</small>"]:::neutral
    n527["Generation 90<br/><small>Release</small>"]:::neutral
    n528["Generation 91<br/><small>Release</small>"]:::neutral
    n529["Generation 92<br/><small>Release</small>"]:::neutral
    n530["Generation 93<br/><small>Release</small>"]:::neutral
    n531["Generation 94<br/><small>Release</small>"]:::neutral
    n532["Generation 95<br/><small>Release</small>"]:::neutral
    n533["Generation 96<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n534["Common rendering<br/><small>Function</small>"]:::held
    n535["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n536["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n537["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n538["Rendering of the files<br/><small>Function</small>"]:::held
    n539["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n540["HTML writer<br/><small>Function</small>"]:::held
    n541["Markdown writer<br/><small>Function</small>"]:::held
    n542["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n543["Mermaid diagrams<br/><small>Function</small>"]:::held
    n544["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n545["Figures of the page<br/><small>Port</small>"]:::neutral
    n546["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n547["The page in HTML<br/><small>Technical choice</small>"]:::held
    n548["Rendering in the page<br/><small>Function</small>"]:::held
    n549["Syntax of the page<br/><small>Port</small>"]:::neutral
    n550["Plain text writer<br/><small>Function</small>"]:::held
    n551["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n552["Figures in SVG<br/><small>Function</small>"]:::held
    n553["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n554["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n555["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n556["Rendering in the terminal<br/><small>Function</small>"]:::held
    n557["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n558["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n559["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n560["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n561["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n562["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n563["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n564["Shape of the example<br/><small>Decision</small>"]:::neutral
    n565["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n566["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n567["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n568["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n569["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n570["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n571["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n572["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n573["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n574["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n575["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n576["How a generation is made<br/><small>Policy</small>"]:::neutral
    n577["The graph page<br/><small>Artefact</small>"]:::unknown
    n578["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n579["The graph page opens<br/><small>Check</small>"]:::unknown
    n580["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n581["What the graph page is asked<br/><small>Function</small>"]:::held
    n582["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n583["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n584["The next generation<br/><small>Shipment</small>"]:::unknown
    n585["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n586["Open the graph page<br/><small>Entry point</small>"]:::held
    n587["The page's program<br/><small>Artefact</small>"]:::unknown
    n588["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n589["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n590["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n591["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n592["Attribution<br/><small>Function</small>"]:::held
    n593["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n594["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n595["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n596["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n597["Ship only what holds<br/><small>Requirement</small>"]:::held
    n598["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n599["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n600["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n601["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n602["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n603["Checks of a body<br/><small>Function</small>"]:::held
    n604["Captures<br/><small>Standard</small>"]:::neutral
    n605["Categories of literals<br/><small>Decision</small>"]:::neutral
    n606["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n607["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n608["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n609["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n610["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n611["Attribute<br/><small>Syntax element</small>"]:::held
    n612["Comment<br/><small>Syntax element</small>"]:::held
    n613["Text<br/><small>Syntax element</small>"]:::held
    n614["HCL<br/><small>Standard</small>"]:::neutral
    n615["Value<br/><small>Syntax element</small>"]:::held
    n616["Module call<br/><small>Syntax element</small>"]:::held
    n617["Terraform<br/><small>Language</small>"]:::held
    n618["Terraform modules<br/><small>Standard</small>"]:::neutral
    n619["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n620["Box drawing<br/><small>Standard</small>"]:::neutral
    n621["Code lines<br/><small>Syntax element</small>"]:::held
    n622["Columns<br/><small>Syntax element</small>"]:::held
    n623["Item line<br/><small>Syntax element</small>"]:::held
    n624["Padded cell<br/><small>Syntax element</small>"]:::held
    n625["Path step<br/><small>Syntax element</small>"]:::held
    n626["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n627["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n628["Terminal text<br/><small>Decision</small>"]:::neutral
    n629["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n630["List on several lines<br/><small>Syntax element</small>"]:::held
    n631["Type assertion<br/><small>Syntax element</small>"]:::held
    n632["Assignment<br/><small>Syntax element</small>"]:::held
    n633["Waiting<br/><small>Syntax element</small>"]:::held
    n634["Call<br/><small>Syntax element</small>"]:::held
    n635["Constant<br/><small>Syntax element</small>"]:::held
    n636["Default import<br/><small>Syntax element</small>"]:::held
    n637["Documentation comment<br/><small>Syntax element</small>"]:::held
    n638["Export<br/><small>Syntax element</small>"]:::held
    n639["Condition<br/><small>Syntax element</small>"]:::held
    n640["List on one line<br/><small>Syntax element</small>"]:::held
    n641["Comment<br/><small>Syntax element</small>"]:::held
    n642["Property access<br/><small>Syntax element</small>"]:::held
    n643["Title of a module<br/><small>Syntax element</small>"]:::held
    n644["Import of names<br/><small>Syntax element</small>"]:::held
    n645["Object on several lines<br/><small>Syntax element</small>"]:::held
    n646["Object<br/><small>Syntax element</small>"]:::held
    n647["Object type<br/><small>Syntax element</small>"]:::held
    n648["Optional property access<br/><small>Syntax element</small>"]:::held
    n649["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n650["Group<br/><small>Syntax element</small>"]:::held
    n651["Names of a program<br/><small>Decision</small>"]:::neutral
    n652["Property<br/><small>Syntax element</small>"]:::held
    n653["Strict inequality<br/><small>Syntax element</small>"]:::held
    n654["Text<br/><small>Syntax element</small>"]:::held
    n655["TypeScript<br/><small>Language</small>"]:::held
    n656["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n657["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n658["TypeScript writer<br/><small>Function</small>"]:::held
    n659["Union type<br/><small>Syntax element</small>"]:::held
    n660["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n35 -->|Deployed in| n15
  n53 -->|Deployed in| n30
  n53 -->|Deployed in| n51
  n53 -->|Depends on| n18
  n56 -->|Implements| n34
  n56 -->|Depends on| n342
  n56 -->|Depends on| n161
  n57 -->|Implements| n20
  n57 -->|Depends on| n327
  n58 -->|Implements| n24
  n58 -->|Depends on| n342
  n58 -->|Depends on| n161
  n59 -->|Implements| n36
  n59 -->|Depends on| n342
  n60 -->|Implements| n37
  n60 -->|Depends on| n210
  n61 -->|Serves| n428
  n61 -->|Depends on| n342
  n61 -->|Depends on| n265
  n61 -->|Depends on| n267
  n61 -->|Depends on| n266
  n61 -->|Depends on| n0
  n61 -->|Depends on| n204
  n61 -->|Depends on| n208
  n61 -->|Depends on| n216
  n61 -->|Depends on| n213
  n61 -->|Depends on| n195
  n61 -->|Depends on| n201
  n61 -->|Depends on| n534
  n61 -->|Depends on| n295
  n61 -->|Depends on| n297
  n61 -->|Depends on| n150
  n62 -->|Serves| n428
  n62 -->|Part of| n35
  n62 -->|Depends on| n37
  n62 -->|Depends on| n36
  n62 -->|Depends on| n24
  n62 -->|Depends on| n20
  n62 -->|Depends on| n34
  n62 -->|Depends on| n61
  n62 -->|Depends on| n534
  n62 -->|Depends on| n342
  n62 -->|Depends on| n331
  n62 -->|Depends on| n334
  n62 -->|Depends on| n322
  n62 -->|Depends on| n265
  n62 -->|Depends on| n264
  n62 -->|Depends on| n266
  n62 -->|Depends on| n0
  n62 -->|Depends on| n132
  n62 -->|Depends on| n551
  n62 -->|Depends on| n150
  n62 -->|Depends on| n291
  n62 -->|Depends on| n204
  n62 -->|Depends on| n201
  n62 -->|Depends on| n193
  n62 -->|Depends on| n192
  n62 -->|Depends on| n215
  n62 -->|Depends on| n194
  n62 -->|Depends on| n295
  n63 -->|Chooses| n60
  n63 -->|Chooses| n59
  n63 -->|Chooses| n58
  n63 -->|Chooses| n56
  n63 -->|Chooses| n57
  n63 -->|In| n15
  n63 -->|Serves| n429
  n64 -->|Serves| n428
  n64 -->|Applied by| n62
  n64 -->|Applied by| n61
  n64 -->|Applied by| n63
  n64 -->|Applied by| n43
  n65 -->|Verifies| n99
  n65 -->|Verifies| n163
  n65 -->|In| n51
  n65 -->|Depends on| n99
  n65 -->|Depends on| n41
  n65 -->|Depends on| n55
  n65 -->|Depends on| n50
  n65 -->|Depends on| n40
  n65 -->|Depends on| n38
  n65 -->|Depends on| n136
  n65 -->|Depends on| n21
  n65 -->|Depends on| n23
  n65 -->|Depends on| n141
  n65 -->|Depends on| n282
  n65 -->|Depends on| n66
  n65 -->|Depends on| n298
  n69 -->|Verifies| n610
  n69 -->|Verifies| n603
  n69 -->|Verifies| n397
  n69 -->|In| n51
  n69 -->|Depends on| n610
  n69 -->|Depends on| n603
  n69 -->|Depends on| n655
  n69 -->|Depends on| n70
  n69 -->|Depends on| n288
  n69 -->|Depends on| n298
  n71 -->|Verifies| n114
  n71 -->|In| n51
  n71 -->|Depends on| n105
  n71 -->|Depends on| n114
  n71 -->|Depends on| n55
  n71 -->|Depends on| n50
  n71 -->|Depends on| n23
  n71 -->|Depends on| n40
  n71 -->|Depends on| n38
  n71 -->|Depends on| n136
  n71 -->|Depends on| n87
  n71 -->|Depends on| n141
  n71 -->|Depends on| n283
  n71 -->|Depends on| n298
  n72 -->|Verifies| n365
  n72 -->|Verifies| n364
  n72 -->|In| n51
  n72 -->|Depends on| n18
  n72 -->|Depends on| n50
  n72 -->|Depends on| n141
  n72 -->|Depends on| n97
  n72 -->|Depends on| n296
  n72 -->|Depends on| n298
  n73 -->|Verifies| n102
  n73 -->|Verifies| n103
  n73 -->|Verifies| n155
  n73 -->|Verifies| n658
  n73 -->|Verifies| n619
  n73 -->|Verifies| n217
  n73 -->|Verifies| n388
  n73 -->|In| n51
  n73 -->|Depends on| n102
  n73 -->|Depends on| n55
  n73 -->|Depends on| n50
  n73 -->|Depends on| n141
  n73 -->|Depends on| n136
  n73 -->|Depends on| n68
  n73 -->|Depends on| n283
  n73 -->|Depends on| n298
  n74 -->|Verifies| n122
  n74 -->|In| n51
  n74 -->|Depends on| n122
  n74 -->|Depends on| n41
  n74 -->|Depends on| n55
  n74 -->|Depends on| n141
  n74 -->|Depends on| n68
  n74 -->|Depends on| n91
  n74 -->|Depends on| n298
  n75 -->|Verifies| n116
  n75 -->|In| n51
  n75 -->|Depends on| n116
  n75 -->|Depends on| n55
  n75 -->|Depends on| n50
  n75 -->|Depends on| n40
  n75 -->|Depends on| n38
  n75 -->|Depends on| n136
  n75 -->|Depends on| n141
  n75 -->|Depends on| n283
  n75 -->|Depends on| n298
  n76 -->|Verifies| n108
  n76 -->|Verifies| n160
  n76 -->|Verifies| n362
  n76 -->|Verifies| n375
  n76 -->|In| n51
  n76 -->|Depends on| n111
  n76 -->|Depends on| n108
  n76 -->|Depends on| n41
  n76 -->|Depends on| n46
  n76 -->|Depends on| n50
  n76 -->|Depends on| n23
  n76 -->|Depends on| n52
  n76 -->|Depends on| n40
  n76 -->|Depends on| n38
  n76 -->|Depends on| n136
  n76 -->|Depends on| n161
  n76 -->|Depends on| n426
  n76 -->|Depends on| n176
  n76 -->|Depends on| n141
  n76 -->|Depends on| n294
  n76 -->|Depends on| n77
  n76 -->|Depends on| n67
  n76 -->|Depends on| n298
  n78 -->|Verifies| n109
  n78 -->|Verifies| n177
  n78 -->|Verifies| n384
  n78 -->|In| n51
  n78 -->|Depends on| n109
  n78 -->|Depends on| n41
  n78 -->|Depends on| n50
  n78 -->|Depends on| n110
  n78 -->|Depends on| n141
  n78 -->|Depends on| n283
  n78 -->|Depends on| n298
  n79 -->|Verifies| n126
  n79 -->|In| n51
  n79 -->|Depends on| n126
  n79 -->|Depends on| n157
  n79 -->|Depends on| n183
  n79 -->|Depends on| n40
  n79 -->|Depends on| n50
  n79 -->|Depends on| n141
  n79 -->|Depends on| n283
  n79 -->|Depends on| n298
  n80 -->|Verifies| n120
  n80 -->|Verifies| n190
  n80 -->|Verifies| n359
  n80 -->|In| n51
  n80 -->|Depends on| n120
  n80 -->|Depends on| n41
  n80 -->|Depends on| n55
  n80 -->|Depends on| n50
  n80 -->|Depends on| n40
  n80 -->|Depends on| n38
  n80 -->|Depends on| n136
  n80 -->|Depends on| n92
  n80 -->|Depends on| n88
  n80 -->|Depends on| n141
  n80 -->|Depends on| n654
  n80 -->|Depends on| n298
  n81 -->|Verifies| n128
  n81 -->|Verifies| n378
  n81 -->|Verifies| n358
  n81 -->|In| n51
  n81 -->|Depends on| n128
  n81 -->|Depends on| n41
  n81 -->|Depends on| n55
  n81 -->|Depends on| n21
  n81 -->|Depends on| n40
  n81 -->|Depends on| n38
  n81 -->|Depends on| n136
  n81 -->|Depends on| n92
  n81 -->|Depends on| n88
  n81 -->|Depends on| n141
  n81 -->|Depends on| n298
  n81 -->|Depends on| n135
  n81 -->|Depends on| n655
  n82 -->|Verifies| n104
  n82 -->|Verifies| n376
  n82 -->|In| n51
  n82 -->|Depends on| n104
  n82 -->|Depends on| n41
  n82 -->|Depends on| n55
  n82 -->|Depends on| n50
  n82 -->|Depends on| n92
  n82 -->|Depends on| n141
  n82 -->|Depends on| n298
  n82 -->|Depends on| n306
  n83 -->|Verifies| n107
  n83 -->|Verifies| n146
  n83 -->|In| n51
  n83 -->|Depends on| n107
  n83 -->|Depends on| n41
  n83 -->|Depends on| n55
  n83 -->|Depends on| n92
  n83 -->|Depends on| n88
  n83 -->|Depends on| n200
  n83 -->|Depends on| n141
  n83 -->|Depends on| n298
  n84 -->|Verifies| n112
  n84 -->|Verifies| n159
  n84 -->|In| n51
  n84 -->|Depends on| n111
  n84 -->|Depends on| n112
  n84 -->|Depends on| n41
  n84 -->|Depends on| n55
  n84 -->|Depends on| n50
  n84 -->|Depends on| n176
  n84 -->|Depends on| n40
  n84 -->|Depends on| n38
  n84 -->|Depends on| n136
  n84 -->|Depends on| n141
  n84 -->|Depends on| n294
  n84 -->|Depends on| n298
  n85 -->|Verifies| n328
  n85 -->|Verifies| n350
  n85 -->|Verifies| n366
  n85 -->|Verifies| n380
  n85 -->|In| n51
  n85 -->|Depends on| n111
  n85 -->|Depends on| n328
  n85 -->|Depends on| n19
  n85 -->|Depends on| n176
  n85 -->|Depends on| n40
  n85 -->|Depends on| n17
  n85 -->|Depends on| n50
  n85 -->|Depends on| n141
  n85 -->|Depends on| n294
  n85 -->|Depends on| n298
  n86 -->|Verifies| n111
  n86 -->|Verifies| n174
  n86 -->|Verifies| n548
  n86 -->|Verifies| n540
  n86 -->|Verifies| n552
  n86 -->|Verifies| n162
  n86 -->|In| n51
  n86 -->|Depends on| n111
  n86 -->|Depends on| n162
  n86 -->|Depends on| n50
  n86 -->|Depends on| n141
  n86 -->|Depends on| n294
  n86 -->|Depends on| n298
  n86 -->|Depends on| n95
  n89 -->|Verifies| n113
  n89 -->|Verifies| n118
  n89 -->|In| n51
  n89 -->|Depends on| n113
  n89 -->|Depends on| n41
  n89 -->|Depends on| n55
  n89 -->|Depends on| n40
  n89 -->|Depends on| n38
  n89 -->|Depends on| n136
  n89 -->|Depends on| n92
  n89 -->|Depends on| n88
  n89 -->|Depends on| n138
  n89 -->|Depends on| n188
  n89 -->|Depends on| n141
  n89 -->|Depends on| n298
  n89 -->|Depends on| n135
  n89 -->|Depends on| n655
  n90 -->|Verifies| n119
  n90 -->|Verifies| n359
  n90 -->|In| n51
  n90 -->|Depends on| n119
  n90 -->|Depends on| n41
  n90 -->|Depends on| n55
  n90 -->|Depends on| n141
  n90 -->|Depends on| n298
  n90 -->|Depends on| n135
  n90 -->|Depends on| n655
  n90 -->|Depends on| n88
  n93 -->|Verifies| n123
  n93 -->|Verifies| n117
  n93 -->|Verifies| n594
  n93 -->|Verifies| n179
  n93 -->|Verifies| n596
  n93 -->|Verifies| n367
  n93 -->|Verifies| n592
  n93 -->|Verifies| n163
  n93 -->|In| n51
  n93 -->|Depends on| n123
  n93 -->|Depends on| n117
  n93 -->|Depends on| n41
  n93 -->|Depends on| n55
  n93 -->|Depends on| n50
  n93 -->|Depends on| n40
  n93 -->|Depends on| n38
  n93 -->|Depends on| n22
  n93 -->|Depends on| n47
  n93 -->|Depends on| n23
  n93 -->|Depends on| n157
  n93 -->|Depends on| n17
  n93 -->|Depends on| n284
  n93 -->|Depends on| n136
  n93 -->|Depends on| n599
  n93 -->|Depends on| n92
  n93 -->|Depends on| n88
  n93 -->|Depends on| n141
  n93 -->|Depends on| n298
  n94 -->|Verifies| n125
  n94 -->|In| n51
  n94 -->|Depends on| n125
  n94 -->|Depends on| n55
  n94 -->|Depends on| n21
  n94 -->|Depends on| n40
  n94 -->|Depends on| n38
  n94 -->|Depends on| n136
  n94 -->|Depends on| n141
  n94 -->|Depends on| n298
  n96 -->|Verifies| n100
  n96 -->|Verifies| n101
  n96 -->|Verifies| n106
  n96 -->|Verifies| n356
  n96 -->|In| n51
  n96 -->|Depends on| n100
  n96 -->|Depends on| n55
  n96 -->|Depends on| n40
  n96 -->|Depends on| n38
  n96 -->|Depends on| n141
  n96 -->|Depends on| n67
  n96 -->|Depends on| n298
  n98 -->|Verifies| n124
  n98 -->|Verifies| n127
  n98 -->|Verifies| n121
  n98 -->|Verifies| n556
  n98 -->|Verifies| n550
  n98 -->|Verifies| n558
  n98 -->|In| n51
  n98 -->|Depends on| n124
  n98 -->|Depends on| n127
  n98 -->|Depends on| n50
  n98 -->|Depends on| n141
  n98 -->|Depends on| n97
  n98 -->|Depends on| n298
  n99 -->|Serves| n428
  n99 -->|Part of| n53
  n99 -->|Depends on| n115
  n99 -->|Depends on| n163
  n99 -->|Depends on| n141
  n99 -->|Depends on| n136
  n99 -->|Depends on| n187
  n99 -->|Depends on| n185
  n99 -->|Depends on| n353
  n99 -->|Depends on| n390
  n99 -->|Depends on| n142
  n99 -->|Depends on| n655
  n99 -->|Depends on| n42
  n99 -->|Depends on| n22
  n99 -->|Depends on| n21
  n99 -->|Depends on| n23
  n99 -->|Depends on| n38
  n99 -->|Depends on| n25
  n99 -->|Depends on| n164
  n99 -->|Depends on| n49
  n99 -->|Depends on| n622
  n99 -->|Depends on| n628
  n99 -->|Depends on| n283
  n99 -->|Depends on| n282
  n99 -->|Depends on| n188
  n99 -->|Depends on| n189
  n99 -->|Depends on| n191
  n99 -->|Depends on| n190
  n99 -->|Depends on| n134
  n99 -->|Depends on| n139
  n99 -->|Depends on| n17
  n99 -->|Depends on| n176
  n99 -->|Depends on| n135
  n100 -->|Serves| n435
  n100 -->|Part of| n53
  n100 -->|Depends on| n115
  n100 -->|Depends on| n101
  n100 -->|Depends on| n14
  n100 -->|Depends on| n38
  n100 -->|Depends on| n628
  n100 -->|Depends on| n49
  n100 -->|Depends on| n283
  n101 -->|Serves| n435
  n101 -->|Depends on| n115
  n101 -->|Depends on| n172
  n101 -->|Depends on| n106
  n101 -->|Depends on| n39
  n101 -->|Depends on| n178
  n101 -->|Depends on| n176
  n101 -->|Depends on| n136
  n101 -->|Depends on| n38
  n101 -->|Depends on| n283
  n101 -->|Depends on| n129
  n102 -->|Serves| n428
  n102 -->|Part of| n53
  n102 -->|Depends on| n115
  n102 -->|Depends on| n103
  n102 -->|Depends on| n23
  n102 -->|Depends on| n38
  n102 -->|Depends on| n49
  n102 -->|Depends on| n283
  n103 -->|Serves| n428
  n103 -->|Depends on| n115
  n103 -->|Depends on| n155
  n103 -->|Depends on| n628
  n103 -->|Depends on| n150
  n103 -->|Depends on| n283
  n104 -->|Serves| n435
  n104 -->|Part of| n53
  n104 -->|Depends on| n115
  n104 -->|Depends on| n33
  n104 -->|Depends on| n306
  n104 -->|Depends on| n136
  n104 -->|Depends on| n21
  n104 -->|Depends on| n23
  n104 -->|Depends on| n38
  n104 -->|Depends on| n311
  n104 -->|Depends on| n134
  n104 -->|Depends on| n49
  n104 -->|Depends on| n622
  n104 -->|Depends on| n628
  n104 -->|Depends on| n283
  n105 -->|Serves| n428
  n105 -->|Part of| n53
  n105 -->|Depends on| n136
  n105 -->|Depends on| n115
  n105 -->|Depends on| n172
  n105 -->|Depends on| n538
  n105 -->|Depends on| n556
  n105 -->|Depends on| n23
  n105 -->|Depends on| n38
  n105 -->|Depends on| n49
  n105 -->|Depends on| n283
  n106 -->|Serves| n428
  n106 -->|Depends on| n283
  n106 -->|Depends on| n294
  n107 -->|Serves| n428
  n107 -->|Part of| n53
  n107 -->|Depends on| n115
  n107 -->|Depends on| n155
  n107 -->|Depends on| n16
  n107 -->|Depends on| n146
  n107 -->|Depends on| n329
  n107 -->|Depends on| n330
  n107 -->|Depends on| n214
  n107 -->|Depends on| n145
  n107 -->|Depends on| n21
  n107 -->|Depends on| n23
  n107 -->|Depends on| n38
  n107 -->|Depends on| n49
  n107 -->|Depends on| n283
  n108 -->|Serves| n428
  n108 -->|Part of| n53
  n108 -->|Depends on| n115
  n108 -->|Depends on| n160
  n108 -->|Depends on| n101
  n108 -->|Depends on| n14
  n108 -->|Depends on| n38
  n109 -->|Serves| n428
  n109 -->|Part of| n53
  n109 -->|Depends on| n115
  n109 -->|Depends on| n110
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n22
  n109 -->|Depends on| n42
  n109 -->|Depends on| n28
  n109 -->|Depends on| n26
  n109 -->|Depends on| n52
  n109 -->|Depends on| n33
  n109 -->|Depends on| n17
  n109 -->|Depends on| n38
  n109 -->|Depends on| n49
  n109 -->|Depends on| n283
  n111 -->|Serves| n428
  n111 -->|Part of| n53
  n111 -->|Depends on| n115
  n111 -->|Depends on| n174
  n111 -->|Depends on| n538
  n111 -->|Depends on| n556
  n111 -->|Depends on| n548
  n111 -->|Depends on| n49
  n112 -->|Serves| n428
  n112 -->|Part of| n53
  n112 -->|Depends on| n136
  n112 -->|Depends on| n115
  n112 -->|Depends on| n159
  n112 -->|Depends on| n328
  n112 -->|Depends on| n176
  n112 -->|Depends on| n23
  n112 -->|Depends on| n38
  n112 -->|Depends on| n49
  n112 -->|Depends on| n283
  n113 -->|Serves| n435
  n113 -->|Part of| n53
  n113 -->|Depends on| n115
  n113 -->|Depends on| n136
  n113 -->|Depends on| n176
  n113 -->|Depends on| n39
  n113 -->|Depends on| n138
  n113 -->|Depends on| n188
  n113 -->|Depends on| n21
  n113 -->|Depends on| n23
  n113 -->|Depends on| n38
  n113 -->|Depends on| n134
  n113 -->|Depends on| n655
  n113 -->|Depends on| n657
  n113 -->|Depends on| n643
  n113 -->|Depends on| n637
  n113 -->|Depends on| n638
  n113 -->|Depends on| n635
  n113 -->|Depends on| n634
  n113 -->|Depends on| n646
  n113 -->|Depends on| n652
  n113 -->|Depends on| n654
  n113 -->|Depends on| n644
  n113 -->|Depends on| n49
  n113 -->|Depends on| n283
  n113 -->|Depends on| n40
  n113 -->|Depends on| n141
  n113 -->|Depends on| n118
  n113 -->|Depends on| n135
  n114 -->|Serves| n428
  n114 -->|Part of| n53
  n114 -->|Depends on| n136
  n114 -->|Depends on| n628
  n114 -->|Depends on| n115
  n114 -->|Depends on| n172
  n114 -->|Depends on| n106
  n114 -->|Depends on| n21
  n114 -->|Depends on| n38
  n114 -->|Depends on| n49
  n114 -->|Depends on| n283
  n115 -->|Serves| n428
  n115 -->|Depends on| n141
  n115 -->|Depends on| n157
  n115 -->|Depends on| n156
  n115 -->|Depends on| n169
  n115 -->|Depends on| n183
  n115 -->|Depends on| n171
  n115 -->|Depends on| n534
  n115 -->|Depends on| n49
  n115 -->|Depends on| n40
  n115 -->|Depends on| n17
  n115 -->|Depends on| n433
  n115 -->|Depends on| n427
  n115 -->|Depends on| n628
  n115 -->|Depends on| n626
  n115 -->|Depends on| n624
  n115 -->|Depends on| n283
  n115 -->|Depends on| n136
  n115 -->|Depends on| n178
  n116 -->|Serves| n435
  n116 -->|Part of| n53
  n116 -->|Depends on| n115
  n116 -->|Depends on| n171
  n116 -->|Depends on| n23
  n116 -->|Depends on| n49
  n116 -->|Depends on| n628
  n116 -->|Depends on| n626
  n116 -->|Depends on| n624
  n116 -->|Depends on| n283
  n117 -->|Serves| n597
  n117 -->|Part of| n53
  n117 -->|Depends on| n141
  n117 -->|Depends on| n115
  n117 -->|Depends on| n594
  n117 -->|Depends on| n23
  n117 -->|Depends on| n38
  n117 -->|Depends on| n49
  n117 -->|Depends on| n283
  n118 -->|Serves| n435
  n118 -->|Depends on| n657
  n118 -->|Depends on| n643
  n118 -->|Depends on| n637
  n118 -->|Depends on| n638
  n118 -->|Depends on| n635
  n118 -->|Depends on| n634
  n118 -->|Depends on| n646
  n118 -->|Depends on| n652
  n118 -->|Depends on| n654
  n118 -->|Depends on| n640
  n118 -->|Depends on| n644
  n119 -->|Serves| n435
  n119 -->|Part of| n53
  n119 -->|Depends on| n115
  n119 -->|Depends on| n136
  n119 -->|Depends on| n176
  n119 -->|Depends on| n135
  n119 -->|Depends on| n21
  n119 -->|Depends on| n22
  n119 -->|Depends on| n38
  n119 -->|Depends on| n49
  n119 -->|Depends on| n283
  n120 -->|Serves| n435
  n120 -->|Part of| n53
  n120 -->|Depends on| n115
  n120 -->|Depends on| n136
  n120 -->|Depends on| n176
  n120 -->|Depends on| n172
  n120 -->|Depends on| n538
  n120 -->|Depends on| n241
  n120 -->|Depends on| n240
  n120 -->|Depends on| n191
  n120 -->|Depends on| n190
  n120 -->|Depends on| n21
  n120 -->|Depends on| n23
  n120 -->|Depends on| n22
  n120 -->|Depends on| n38
  n120 -->|Depends on| n25
  n120 -->|Depends on| n164
  n120 -->|Depends on| n655
  n120 -->|Depends on| n17
  n120 -->|Depends on| n49
  n120 -->|Depends on| n283
  n120 -->|Depends on| n282
  n120 -->|Depends on| n217
  n120 -->|Depends on| n654
  n121 -->|Serves| n428
  n121 -->|Depends on| n141
  n121 -->|Depends on| n134
  n121 -->|Depends on| n115
  n121 -->|Depends on| n183
  n121 -->|Depends on| n538
  n121 -->|Depends on| n556
  n121 -->|Depends on| n49
  n121 -->|Depends on| n283
  n122 -->|Serves| n428
  n122 -->|Part of| n53
  n122 -->|Depends on| n102
  n122 -->|Depends on| n40
  n123 -->|Serves| n597
  n123 -->|Part of| n53
  n123 -->|Depends on| n141
  n123 -->|Depends on| n115
  n123 -->|Depends on| n107
  n123 -->|Depends on| n155
  n123 -->|Depends on| n594
  n123 -->|Depends on| n596
  n123 -->|Depends on| n597
  n123 -->|Depends on| n16
  n123 -->|Depends on| n146
  n123 -->|Depends on| n593
  n123 -->|Depends on| n40
  n123 -->|Depends on| n21
  n123 -->|Depends on| n23
  n123 -->|Depends on| n38
  n123 -->|Depends on| n49
  n123 -->|Depends on| n163
  n123 -->|Depends on| n283
  n124 -->|Serves| n428
  n124 -->|Part of| n53
  n124 -->|Depends on| n115
  n124 -->|Depends on| n121
  n125 -->|Serves| n435
  n125 -->|Part of| n53
  n125 -->|Depends on| n136
  n125 -->|Depends on| n115
  n125 -->|Depends on| n172
  n125 -->|Depends on| n538
  n125 -->|Depends on| n23
  n125 -->|Depends on| n38
  n125 -->|Depends on| n49
  n125 -->|Depends on| n283
  n126 -->|Serves| n428
  n126 -->|Part of| n53
  n126 -->|Depends on| n115
  n126 -->|Depends on| n157
  n126 -->|Depends on| n183
  n126 -->|Depends on| n169
  n126 -->|Depends on| n49
  n126 -->|Depends on| n628
  n126 -->|Depends on| n626
  n126 -->|Depends on| n624
  n126 -->|Depends on| n283
  n127 -->|Serves| n428
  n127 -->|Part of| n53
  n127 -->|Depends on| n141
  n127 -->|Depends on| n115
  n127 -->|Depends on| n121
  n127 -->|Depends on| n157
  n127 -->|Depends on| n183
  n127 -->|Depends on| n49
  n127 -->|Depends on| n283
  n128 -->|Serves| n435
  n128 -->|Part of| n53
  n128 -->|Depends on| n115
  n128 -->|Depends on| n136
  n128 -->|Depends on| n176
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n135
  n128 -->|Depends on| n39
  n128 -->|Depends on| n188
  n128 -->|Depends on| n38
  n128 -->|Depends on| n134
  n128 -->|Depends on| n655
  n128 -->|Depends on| n49
  n128 -->|Depends on| n283
  n128 -->|Depends on| n40
  n128 -->|Depends on| n141
  n145 -->|Read in| n197
  n145 -->|Depends on| n196
  n145 -->|Depends on| n199
  n146 -->|Serves| n428
  n146 -->|Depends on| n31
  n146 -->|Depends on| n144
  n150 -->|Serves| n435
  n150 -->|Depends on| n291
  n151 -->|Serves| n435
  n151 -->|Applied by| n150
  n151 -->|Applied by| n291
  n153 -->|Serves| n435
  n153 -->|Depends on| n149
  n154 -->|Serves| n435
  n155 -->|Serves| n428
  n155 -->|Depends on| n141
  n155 -->|Depends on| n136
  n155 -->|Depends on| n38
  n155 -->|Depends on| n184
  n155 -->|Depends on| n39
  n155 -->|Depends on| n217
  n155 -->|Depends on| n284
  n156 -->|Serves| n428
  n156 -->|Depends on| n130
  n156 -->|Depends on| n175
  n156 -->|Depends on| n178
  n156 -->|Depends on| n39
  n156 -->|Depends on| n150
  n156 -->|Depends on| n132
  n156 -->|Depends on| n136
  n156 -->|Depends on| n299
  n156 -->|Depends on| n179
  n156 -->|Depends on| n153
  n157 -->|Serves| n428
  n157 -->|Depends on| n136
  n157 -->|Depends on| n433
  n157 -->|Depends on| n158
  n157 -->|Depends on| n178
  n157 -->|Depends on| n175
  n157 -->|Depends on| n31
  n157 -->|Depends on| n21
  n157 -->|Depends on| n38
  n157 -->|Depends on| n180
  n157 -->|Depends on| n176
  n157 -->|Depends on| n167
  n157 -->|Depends on| n184
  n157 -->|Depends on| n217
  n157 -->|Depends on| n39
  n157 -->|Depends on| n284
  n157 -->|Depends on| n165
  n157 -->|Depends on| n47
  n157 -->|Depends on| n163
  n157 -->|Depends on| n28
  n157 -->|Depends on| n135
  n158 -->|Serves| n428
  n159 -->|Serves| n428
  n159 -->|Depends on| n141
  n159 -->|Depends on| n17
  n159 -->|Depends on| n40
  n159 -->|Depends on| n294
  n160 -->|Serves| n428
  n160 -->|Depends on| n161
  n160 -->|Depends on| n141
  n160 -->|Depends on| n136
  n160 -->|Depends on| n49
  n160 -->|Depends on| n621
  n160 -->|Depends on| n17
  n160 -->|Depends on| n52
  n160 -->|Depends on| n426
  n160 -->|Depends on| n26
  n160 -->|Depends on| n21
  n160 -->|Depends on| n38
  n160 -->|Depends on| n176
  n160 -->|Depends on| n159
  n160 -->|Depends on| n162
  n160 -->|Depends on| n328
  n160 -->|Depends on| n548
  n160 -->|Depends on| n286
  n160 -->|Depends on| n291
  n160 -->|Depends on| n287
  n162 -->|Serves| n428
  n162 -->|Depends on| n150
  n162 -->|Depends on| n294
  n163 -->|Serves| n428
  n163 -->|Depends on| n136
  n163 -->|Depends on| n187
  n163 -->|Depends on| n655
  n163 -->|Depends on| n176
  n163 -->|Depends on| n21
  n163 -->|Depends on| n38
  n163 -->|Depends on| n25
  n163 -->|Depends on| n164
  n163 -->|Depends on| n134
  n165 -->|Serves| n428
  n166 -->|Serves| n428
  n167 -->|Serves| n428
  n167 -->|Depends on| n39
  n167 -->|Depends on| n139
  n167 -->|Depends on| n284
  n167 -->|Depends on| n293
  n167 -->|Depends on| n286
  n167 -->|Depends on| n150
  n167 -->|Depends on| n175
  n167 -->|Depends on| n178
  n167 -->|Depends on| n147
  n167 -->|Depends on| n166
  n167 -->|Depends on| n436
  n167 -->|Depends on| n136
  n167 -->|Depends on| n655
  n167 -->|Depends on| n311
  n167 -->|Depends on| n153
  n167 -->|Depends on| n154
  n167 -->|Depends on| n165
  n169 -->|Serves| n428
  n169 -->|Depends on| n27
  n169 -->|Depends on| n217
  n169 -->|Depends on| n137
  n169 -->|Depends on| n136
  n169 -->|Depends on| n430
  n169 -->|Depends on| n425
  n169 -->|Depends on| n166
  n169 -->|Depends on| n431
  n169 -->|Depends on| n432
  n169 -->|Depends on| n178
  n169 -->|Depends on| n21
  n169 -->|Depends on| n38
  n169 -->|Depends on| n176
  n169 -->|Depends on| n167
  n169 -->|Depends on| n39
  n169 -->|Depends on| n135
  n169 -->|Depends on| n292
  n169 -->|Depends on| n225
  n169 -->|Depends on| n219
  n169 -->|Depends on| n221
  n169 -->|Depends on| n236
  n169 -->|Depends on| n233
  n169 -->|Depends on| n231
  n169 -->|Depends on| n223
  n170 -->|Serves| n235
  n170 -->|Applied by| n169
  n170 -->|Applied by| n183
  n171 -->|Serves| n435
  n171 -->|Depends on| n164
  n171 -->|Depends on| n136
  n171 -->|Depends on| n134
  n171 -->|Depends on| n178
  n171 -->|Depends on| n249
  n171 -->|Depends on| n25
  n171 -->|Depends on| n21
  n171 -->|Depends on| n38
  n171 -->|Depends on| n39
  n171 -->|Depends on| n294
  n172 -->|Serves| n435
  n172 -->|Depends on| n134
  n172 -->|Depends on| n175
  n172 -->|Depends on| n39
  n172 -->|Depends on| n294
  n174 -->|Serves| n428
  n174 -->|Depends on| n136
  n174 -->|Depends on| n424
  n174 -->|Depends on| n173
  n174 -->|Depends on| n17
  n174 -->|Depends on| n172
  n174 -->|Depends on| n183
  n174 -->|Depends on| n291
  n175 -->|Serves| n428
  n175 -->|Depends on| n602
  n176 -->|Serves| n428
  n176 -->|Depends on| n136
  n176 -->|Depends on| n21
  n176 -->|Depends on| n38
  n176 -->|Depends on| n188
  n176 -->|Depends on| n39
  n176 -->|Depends on| n135
  n176 -->|Depends on| n655
  n177 -->|Serves| n428
  n177 -->|Implements| n28
  n177 -->|Depends on| n21
  n177 -->|Depends on| n38
  n177 -->|Depends on| n25
  n177 -->|Depends on| n168
  n177 -->|Depends on| n45
  n178 -->|Serves| n428
  n178 -->|Depends on| n139
  n178 -->|Depends on| n238
  n179 -->|Serves| n428
  n179 -->|Depends on| n283
  n180 -->|Serves| n428
  n180 -->|Depends on| n657
  n180 -->|Depends on| n178
  n180 -->|Depends on| n182
  n180 -->|Depends on| n54
  n180 -->|Depends on| n27
  n180 -->|Depends on| n45
  n180 -->|Depends on| n25
  n180 -->|Depends on| n38
  n180 -->|Depends on| n175
  n180 -->|Depends on| n131
  n180 -->|Depends on| n284
  n180 -->|Depends on| n656
  n180 -->|Depends on| n137
  n180 -->|Depends on| n39
  n181 -->|Serves| n435
  n181 -->|Applied by| n167
  n181 -->|Applied by| n183
  n183 -->|Serves| n428
  n183 -->|Depends on| n217
  n183 -->|Depends on| n130
  n183 -->|Depends on| n143
  n183 -->|Depends on| n132
  n183 -->|Depends on| n136
  n183 -->|Depends on| n31
  n183 -->|Depends on| n21
  n183 -->|Depends on| n38
  n183 -->|Depends on| n39
  n183 -->|Depends on| n176
  n183 -->|Depends on| n294
  n183 -->|Depends on| n299
  n183 -->|Depends on| n227
  n183 -->|Depends on| n219
  n183 -->|Depends on| n233
  n183 -->|Depends on| n229
  n184 -->|Serves| n428
  n184 -->|Depends on| n140
  n184 -->|Depends on| n139
  n184 -->|Depends on| n136
  n184 -->|Depends on| n38
  n184 -->|Depends on| n39
  n184 -->|Depends on| n217
  n184 -->|Depends on| n284
  n185 -->|Refines| n428
  n186 -->|Accepts| n185
  n190 -->|Serves| n428
  n190 -->|Depends on| n191
  n190 -->|Depends on| n657
  n190 -->|Depends on| n139
  n190 -->|Depends on| n637
  n190 -->|Depends on| n643
  n190 -->|Depends on| n641
  n190 -->|Depends on| n644
  n190 -->|Depends on| n638
  n190 -->|Depends on| n635
  n190 -->|Depends on| n634
  n190 -->|Depends on| n645
  n190 -->|Depends on| n652
  n190 -->|Depends on| n654
  n190 -->|Depends on| n640
  n192 -->|Read in| n197
  n193 -->|Read in| n197
  n194 -->|Read in| n197
  n195 -->|Read in| n197
  n196 -->|Read in| n197
  n197 -->|Queries written in| n601
  n197 -->|Read by| n610
  n197 -->|Uses| n301
  n198 -->|Read in| n197
  n199 -->|Read in| n197
  n199 -->|Depends on| n195
  n200 -->|Read in| n207
  n201 -->|Read in| n207
  n202 -->|Read in| n207
  n203 -->|Read in| n207
  n203 -->|Depends on| n208
  n203 -->|Depends on| n205
  n204 -->|Read in| n207
  n204 -->|Depends on| n208
  n204 -->|Depends on| n205
  n205 -->|Read in| n207
  n206 -->|Read in| n207
  n206 -->|Depends on| n204
  n207 -->|Queries written in| n601
  n207 -->|Read by| n610
  n207 -->|Uses| n304
  n208 -->|Read in| n207
  n208 -->|Depends on| n202
  n209 -->|Read in| n655
  n210 -->|Read in| n197
  n211 -->|Read in| n197
  n212 -->|Read in| n197
  n214 -->|Read in| n207
  n214 -->|Depends on| n204
  n215 -->|Read in| n197
  n216 -->|Read in| n207
  n216 -->|Depends on| n202
  n217 -->|Serves| n428
  n217 -->|Depends on| n610
  n217 -->|Depends on| n603
  n217 -->|Depends on| n655
  n217 -->|Depends on| n197
  n217 -->|Depends on| n658
  n217 -->|Depends on| n617
  n217 -->|Depends on| n618
  n217 -->|Depends on| n619
  n217 -->|Depends on| n31
  n217 -->|Depends on| n21
  n217 -->|Depends on| n38
  n217 -->|Depends on| n288
  n218 -->|Serves| n428
  n218 -->|Applied by| n217
  n218 -->|Applied by| n328
  n219 -->|Refines| n235
  n220 -->|Accepts| n219
  n221 -->|Refines| n235
  n222 -->|Accepts| n221
  n223 -->|Refines| n235
  n224 -->|Accepts| n223
  n225 -->|Refines| n235
  n226 -->|Accepts| n225
  n227 -->|Refines| n235
  n228 -->|Accepts| n227
  n229 -->|Refines| n235
  n230 -->|Accepts| n229
  n231 -->|Refines| n233
  n231 -->|Depends on| n233
  n232 -->|Accepts| n231
  n233 -->|Refines| n235
  n234 -->|Accepts| n233
  n236 -->|Refines| n235
  n237 -->|Accepts| n236
  n238 -->|Refines| n437
  n239 -->|Accepts| n238
  n241 -->|Refines| n437
  n242 -->|Accepts| n241
  n243 -->|Read in| n207
  n243 -->|Depends on| n204
  n244 -->|Defined by| n250
  n244 -->|Depends on| n250
  n245 -->|Defined by| n250
  n245 -->|Depends on| n250
  n246 -->|Defined by| n250
  n246 -->|Depends on| n250
  n247 -->|Defined by| n250
  n247 -->|Depends on| n250
  n247 -->|Depends on| n245
  n248 -->|Defined by| n250
  n248 -->|Depends on| n250
  n248 -->|Depends on| n244
  n249 -->|Defined by| n250
  n249 -->|Depends on| n250
  n249 -->|Depends on| n244
  n251 -->|Read in| n207
  n251 -->|Depends on| n208
  n251 -->|Depends on| n205
  n251 -->|Depends on| n204
  n251 -->|Depends on| n245
  n252 -->|Defined by| n250
  n252 -->|Depends on| n250
  n254 -->|Defined by| n250
  n254 -->|Depends on| n250
  n255 -->|Defined by| n250
  n255 -->|Depends on| n250
  n256 -->|Defined by| n250
  n256 -->|Depends on| n250
  n257 -->|Depends on| n136
  n258 -->|Read in| n207
  n258 -->|Depends on| n204
  n259 -->|Defined by| n250
  n259 -->|Depends on| n250
  n260 -->|Defined by| n253
  n260 -->|Depends on| n253
  n260 -->|Depends on| n263
  n260 -->|Depends on| n262
  n261 -->|Defined by| n253
  n261 -->|Depends on| n253
  n261 -->|Depends on| n250
  n262 -->|Defined by| n253
  n262 -->|Depends on| n253
  n263 -->|Defined by| n253
  n263 -->|Depends on| n253
  n263 -->|Depends on| n250
  n268 -->|Defined by| n274
  n268 -->|Depends on| n274
  n268 -->|Depends on| n280
  n269 -->|Defined by| n274
  n269 -->|Depends on| n274
  n270 -->|Defined by| n274
  n270 -->|Depends on| n274
  n271 -->|Defined by| n274
  n271 -->|Depends on| n274
  n272 -->|Defined by| n274
  n272 -->|Depends on| n274
  n272 -->|Depends on| n271
  n273 -->|Defined by| n274
  n273 -->|Depends on| n274
  n273 -->|Depends on| n271
  n275 -->|Defined by| n274
  n275 -->|Depends on| n274
  n276 -->|Defined by| n274
  n276 -->|Depends on| n274
  n276 -->|Depends on| n275
  n277 -->|Defined by| n274
  n277 -->|Depends on| n274
  n277 -->|Depends on| n275
  n278 -->|Defined by| n274
  n278 -->|Depends on| n274
  n278 -->|Depends on| n273
  n279 -->|Defined by| n274
  n279 -->|Depends on| n274
  n279 -->|Depends on| n280
  n280 -->|Defined by| n274
  n280 -->|Depends on| n274
  n281 -->|Defined by| n274
  n281 -->|Depends on| n274
  n281 -->|Depends on| n275
  n282 -->|Written in| n291
  n282 -->|Depends on| n291
  n283 -->|Written in| n291
  n283 -->|Depends on| n291
  n284 -->|Written in| n291
  n284 -->|Depends on| n291
  n284 -->|Depends on| n293
  n285 -->|Serves| n435
  n285 -->|Applied by| n284
  n285 -->|Applied by| n299
  n285 -->|Applied by| n287
  n285 -->|Applied by| n283
  n285 -->|Applied by| n298
  n285 -->|Applied by| n282
  n285 -->|Applied by| n295
  n285 -->|Applied by| n293
  n286 -->|Serves| n435
  n286 -->|Depends on| n291
  n287 -->|Written in| n291
  n287 -->|Depends on| n291
  n287 -->|Depends on| n293
  n288 -->|Written in| n291
  n289 -->|Written in| n291
  n290 -->|Written in| n291
  n292 -->|Written in| n291
  n293 -->|Serves| n435
  n293 -->|Depends on| n291
  n294 -->|Written in| n291
  n295 -->|Written in| n291
  n295 -->|Depends on| n291
  n296 -->|Written in| n291
  n297 -->|Written in| n291
  n298 -->|Written in| n291
  n298 -->|Depends on| n291
  n299 -->|Written in| n291
  n299 -->|Depends on| n291
  n300 -->|Written in| n291
  n307 -->|Serves| n435
  n311 -->|Serves| n435
  n313 -->|Defined by| n342
  n313 -->|Read in| n207
  n313 -->|Depends on| n342
  n313 -->|Depends on| n331
  n313 -->|Depends on| n204
  n314 -->|Defined by| n342
  n314 -->|Read in| n207
  n314 -->|Depends on| n342
  n314 -->|Depends on| n141
  n314 -->|Depends on| n321
  n314 -->|Depends on| n203
  n314 -->|Depends on| n204
  n315 -->|Defined by| n342
  n315 -->|Read in| n207
  n315 -->|Depends on| n342
  n315 -->|Depends on| n331
  n315 -->|Depends on| n204
  n316 -->|Defined by| n342
  n316 -->|Read in| n207
  n316 -->|Depends on| n342
  n316 -->|Depends on| n331
  n316 -->|Depends on| n203
  n316 -->|Depends on| n204
  n317 -->|Defined by| n342
  n317 -->|Read in| n207
  n317 -->|Depends on| n342
  n317 -->|Depends on| n331
  n317 -->|Depends on| n203
  n317 -->|Depends on| n204
  n317 -->|Depends on| n335
  n318 -->|Defined by| n342
  n318 -->|Read in| n207
  n318 -->|Depends on| n342
  n318 -->|Depends on| n331
  n318 -->|Depends on| n203
  n318 -->|Depends on| n204
  n319 -->|Defined by| n342
  n319 -->|Read in| n207
  n319 -->|Depends on| n342
  n319 -->|Depends on| n267
  n319 -->|Depends on| n1
  n319 -->|Depends on| n203
  n319 -->|Depends on| n204
  n319 -->|Depends on| n216
  n319 -->|Depends on| n213
  n320 -->|Read in| n207
  n320 -->|Depends on| n208
  n321 -->|Defined by| n342
  n321 -->|Read in| n207
  n321 -->|Depends on| n342
  n321 -->|Depends on| n7
  n321 -->|Depends on| n203
  n321 -->|Depends on| n204
  n321 -->|Depends on| n216
  n321 -->|Depends on| n198
  n323 -->|Defined by| n342
  n323 -->|Read in| n207
  n323 -->|Depends on| n342
  n323 -->|Depends on| n331
  n323 -->|Depends on| n203
  n323 -->|Depends on| n204
  n323 -->|Depends on| n313
  n323 -->|Depends on| n317
  n324 -->|Defined by| n342
  n324 -->|Read in| n197
  n324 -->|Depends on| n342
  n324 -->|Depends on| n211
  n324 -->|Depends on| n210
  n325 -->|Uses the variables of| n9
  n325 -->|Uses the variables of| n12
  n325 -->|Uses the variables of| n6
  n325 -->|Styles| n328
  n326 -->|Defined by| n342
  n326 -->|Read in| n207
  n326 -->|Depends on| n342
  n326 -->|Depends on| n331
  n326 -->|Depends on| n204
  n328 -->|Serves| n428
  n328 -->|Depends on| n329
  n328 -->|Depends on| n338
  n328 -->|Depends on| n7
  n328 -->|Depends on| n13
  n328 -->|Depends on| n4
  n328 -->|Depends on| n9
  n328 -->|Depends on| n8
  n328 -->|Depends on| n12
  n328 -->|Depends on| n5
  n328 -->|Depends on| n10
  n328 -->|Depends on| n3
  n328 -->|Depends on| n6
  n328 -->|Depends on| n44
  n328 -->|Depends on| n21
  n328 -->|Depends on| n16
  n328 -->|Depends on| n19
  n328 -->|Depends on| n336
  n328 -->|Depends on| n341
  n328 -->|Depends on| n339
  n328 -->|Depends on| n324
  n328 -->|Depends on| n320
  n328 -->|Depends on| n332
  n328 -->|Depends on| n330
  n328 -->|Depends on| n196
  n328 -->|Depends on| n195
  n328 -->|Depends on| n294
  n328 -->|Depends on| n291
  n328 -->|Depends on| n610
  n328 -->|Depends on| n207
  n328 -->|Depends on| n197
  n330 -->|Defined by| n342
  n330 -->|Read in| n207
  n330 -->|Depends on| n342
  n330 -->|Depends on| n200
  n330 -->|Depends on| n208
  n330 -->|Depends on| n205
  n330 -->|Depends on| n204
  n332 -->|Defined by| n342
  n332 -->|Read in| n207
  n332 -->|Depends on| n342
  n332 -->|Depends on| n214
  n332 -->|Depends on| n209
  n332 -->|Depends on| n642
  n332 -->|Depends on| n632
  n333 -->|Uses the variables of| n7
  n333 -->|Uses the variables of| n13
  n333 -->|Uses the variables of| n9
  n333 -->|Uses the variables of| n8
  n333 -->|Uses the variables of| n12
  n333 -->|Uses the variables of| n5
  n333 -->|Uses the variables of| n10
  n333 -->|Uses the variables of| n3
  n333 -->|Uses the variables of| n6
  n333 -->|Styles| n328
  n335 -->|Defined by| n342
  n335 -->|Read in| n207
  n335 -->|Depends on| n342
  n335 -->|Depends on| n334
  n335 -->|Depends on| n331
  n335 -->|Depends on| n203
  n335 -->|Depends on| n204
  n336 -->|Defined by| n342
  n336 -->|Read in| n207
  n336 -->|Depends on| n342
  n336 -->|Depends on| n203
  n336 -->|Depends on| n337
  n336 -->|Depends on| n323
  n336 -->|Depends on| n319
  n337 -->|Defined by| n342
  n337 -->|Read in| n207
  n337 -->|Depends on| n342
  n337 -->|Depends on| n203
  n337 -->|Depends on| n314
  n337 -->|Depends on| n315
  n337 -->|Depends on| n316
  n337 -->|Depends on| n326
  n337 -->|Depends on| n318
  n339 -->|Defined by| n342
  n339 -->|Read in| n197
  n339 -->|Depends on| n342
  n339 -->|Depends on| n196
  n339 -->|Depends on| n195
  n339 -->|Depends on| n198
  n339 -->|Depends on| n194
  n340 -->|Serves| n435
  n340 -->|Applied by| n333
  n340 -->|Applied by| n325
  n340 -->|Applied by| n341
  n340 -->|Applied by| n324
  n340 -->|Applied by| n328
  n341 -->|Defined by| n342
  n341 -->|Read in| n197
  n341 -->|Depends on| n342
  n341 -->|Depends on| n196
  n341 -->|Depends on| n211
  n341 -->|Depends on| n210
  n341 -->|Depends on| n193
  n341 -->|Depends on| n212
  n341 -->|Depends on| n199
  n341 -->|Depends on| n195
  n343 -->|Chooses| n356
  n343 -->|In| n30
  n343 -->|In| n51
  n343 -->|Serves| n429
  n344 -->|Chooses| n381
  n344 -->|In| n30
  n344 -->|In| n51
  n344 -->|Serves| n429
  n345 -->|Implements| n21
  n346 -->|Implements| n22
  n347 -->|Implements| n23
  n349 -->|Chooses| n392
  n349 -->|Chooses| n380
  n349 -->|In| n30
  n349 -->|In| n51
  n349 -->|Serves| n429
  n350 -->|Implements| n16
  n350 -->|Uses| n302
  n351 -->|Chooses| n350
  n351 -->|In| n30
  n351 -->|In| n51
  n351 -->|Serves| n429
  n352 -->|Implements| n40
  n352 -->|Implements| n42
  n352 -->|Implements| n41
  n352 -->|Depends on| n353
  n352 -->|Depends on| n38
  n352 -->|Depends on| n141
  n352 -->|Depends on| n296
  n354 -->|Chooses| n361
  n354 -->|In| n51
  n354 -->|Serves| n429
  n355 -->|Chooses| n364
  n355 -->|Chooses| n388
  n355 -->|Chooses| n376
  n355 -->|Chooses| n352
  n355 -->|Chooses| n362
  n355 -->|In| n51
  n355 -->|Serves| n429
  n356 -->|Implements| n14
  n356 -->|Depends on| n21
  n356 -->|Depends on| n23
  n356 -->|Depends on| n657
  n356 -->|Depends on| n637
  n356 -->|Depends on| n638
  n356 -->|Depends on| n635
  n356 -->|Depends on| n634
  n356 -->|Depends on| n646
  n356 -->|Depends on| n652
  n356 -->|Depends on| n654
  n356 -->|Depends on| n640
  n356 -->|Depends on| n644
  n358 -->|Depends on| n22
  n358 -->|Depends on| n23
  n358 -->|Depends on| n38
  n359 -->|Depends on| n22
  n359 -->|Depends on| n23
  n359 -->|Depends on| n21
  n359 -->|Depends on| n38
  n359 -->|Depends on| n360
  n359 -->|Depends on| n136
  n361 -->|Implements| n21
  n361 -->|Implements| n23
  n361 -->|Implements| n22
  n361 -->|Implements| n55
  n361 -->|Depends on| n38
  n361 -->|Depends on| n363
  n361 -->|Depends on| n296
  n362 -->|Implements| n26
  n362 -->|Implements| n46
  n362 -->|Depends on| n296
  n364 -->|Implements| n49
  n364 -->|Implements| n50
  n364 -->|Depends on| n357
  n364 -->|Depends on| n296
  n365 -->|Implements| n18
  n365 -->|Depends on| n49
  n365 -->|Depends on| n141
  n365 -->|Depends on| n296
  n366 -->|Implements| n19
  n366 -->|Depends on| n327
  n367 -->|Implements| n25
  n368 -->|Implements| n26
  n369 -->|Chooses| n345
  n369 -->|Chooses| n347
  n369 -->|Chooses| n346
  n369 -->|Chooses| n372
  n369 -->|Chooses| n373
  n369 -->|Chooses| n374
  n369 -->|Chooses| n389
  n369 -->|Chooses| n377
  n369 -->|Chooses| n368
  n369 -->|In| n30
  n369 -->|Serves| n429
  n370 -->|Implements| n38
  n371 -->|Chooses| n370
  n371 -->|Chooses| n367
  n371 -->|Chooses| n366
  n371 -->|Chooses| n375
  n371 -->|Chooses| n365
  n371 -->|Chooses| n382
  n371 -->|In| n30
  n371 -->|In| n51
  n371 -->|Serves| n429
  n372 -->|Implements| n40
  n372 -->|Depends on| n396
  n373 -->|Implements| n42
  n373 -->|Depends on| n396
  n374 -->|Implements| n49
  n374 -->|Depends on| n296
  n375 -->|Implements| n52
  n376 -->|Implements| n33
  n377 -->|Implements| n33
  n377 -->|Depends on| n150
  n378 -->|Depends on| n358
  n378 -->|Depends on| n359
  n379 -->|Chooses| n378
  n379 -->|In| n30
  n379 -->|In| n51
  n379 -->|Serves| n429
  n380 -->|Implements| n44
  n380 -->|Depends on| n348
  n380 -->|Depends on| n136
  n380 -->|Depends on| n187
  n380 -->|Depends on| n655
  n381 -->|Implements| n54
  n381 -->|Uses| n310
  n381 -->|Uses| n305
  n382 -->|Implements| n27
  n383 -->|Chooses| n177
  n383 -->|In| n30
  n383 -->|In| n51
  n383 -->|Serves| n429
  n384 -->|Implements| n45
  n385 -->|Chooses| n384
  n385 -->|In| n51
  n385 -->|Serves| n429
  n386 -->|Chooses| n387
  n386 -->|In| n30
  n386 -->|Serves| n429
  n387 -->|Implements| n45
  n387 -->|Depends on| n136
  n387 -->|Depends on| n348
  n387 -->|Depends on| n163
  n387 -->|Depends on| n168
  n388 -->|Implements| n17
  n388 -->|Depends on| n390
  n388 -->|Depends on| n391
  n389 -->|Implements| n17
  n389 -->|Depends on| n142
  n392 -->|Implements| n39
  n392 -->|Depends on| n348
  n393 -->|Chooses| n397
  n393 -->|In| n30
  n393 -->|In| n51
  n393 -->|Serves| n429
  n394 -->|Implements| n31
  n394 -->|Uses| n308
  n394 -->|Depends on| n39
  n394 -->|Depends on| n135
  n394 -->|Depends on| n655
  n395 -->|Chooses| n394
  n395 -->|In| n30
  n395 -->|In| n51
  n395 -->|Serves| n429
  n397 -->|Implements| n48
  n397 -->|Uses| n312
  n397 -->|Depends on| n296
  n398 -->|Serves| n435
  n398 -->|Applied by| n157
  n398 -->|Applied by| n169
  n399 -->|Serves| n435
  n399 -->|Applied by| n165
  n399 -->|Applied by| n167
  n400 -->|Serves| n428
  n400 -->|Applied by| n107
  n400 -->|Applied by| n145
  n401 -->|Serves| n428
  n401 -->|Applied by| n53
  n401 -->|Applied by| n43
  n401 -->|Applied by| n32
  n401 -->|Applied by| n29
  n402 -->|Serves| n435
  n402 -->|Applied by| n157
  n402 -->|Applied by| n610
  n403 -->|Serves| n428
  n403 -->|Applied by| n99
  n403 -->|Applied by| n185
  n403 -->|Applied by| n559
  n403 -->|Applied by| n565
  n404 -->|Serves| n428
  n404 -->|Applied by| n180
  n404 -->|Applied by| n54
  n404 -->|Applied by| n655
  n404 -->|Applied by| n131
  n405 -->|Serves| n428
  n405 -->|Applied by| n157
  n405 -->|Applied by| n105
  n406 -->|Serves| n435
  n406 -->|Applied by| n171
  n406 -->|Applied by| n116
  n407 -->|Serves| n435
  n407 -->|Applied by| n157
  n407 -->|Applied by| n156
  n407 -->|Applied by| n174
  n407 -->|Applied by| n180
  n407 -->|Applied by| n169
  n408 -->|Serves| n437
  n408 -->|Applied by| n176
  n408 -->|Applied by| n157
  n408 -->|Applied by| n156
  n408 -->|Applied by| n178
  n408 -->|Applied by| n238
  n408 -->|Applied by| n99
  n409 -->|Serves| n437
  n409 -->|Applied by| n176
  n409 -->|Applied by| n169
  n409 -->|Applied by| n128
  n409 -->|Applied by| n120
  n409 -->|Applied by| n241
  n409 -->|Applied by| n240
  n410 -->|Serves| n435
  n410 -->|Applied by| n603
  n410 -->|Applied by| n217
  n410 -->|Applied by| n157
  n410 -->|Applied by| n29
  n410 -->|Applied by| n32
  n411 -->|Serves| n428
  n411 -->|Applied by| n169
  n411 -->|Applied by| n157
  n411 -->|Applied by| n176
  n412 -->|Serves| n435
  n412 -->|Applied by| n157
  n412 -->|Applied by| n610
  n413 -->|Serves| n435
  n413 -->|Applied by| n105
  n413 -->|Applied by| n125
  n413 -->|Applied by| n172
  n413 -->|Applied by| n328
  n413 -->|Applied by| n155
  n414 -->|Serves| n428
  n414 -->|Applied by| n156
  n414 -->|Applied by| n167
  n414 -->|Applied by| n183
  n414 -->|Applied by| n43
  n415 -->|Serves| n437
  n415 -->|Applied by| n176
  n415 -->|Applied by| n128
  n415 -->|Applied by| n378
  n415 -->|Applied by| n99
  n415 -->|Applied by| n169
  n415 -->|Applied by| n113
  n416 -->|Serves| n428
  n416 -->|Applied by| n39
  n416 -->|Applied by| n137
  n416 -->|Applied by| n133
  n416 -->|Applied by| n169
  n417 -->|Serves| n428
  n417 -->|Applied by| n123
  n417 -->|Applied by| n117
  n417 -->|Applied by| n594
  n417 -->|Applied by| n599
  n417 -->|Applied by| n597
  n417 -->|Applied by| n584
  n417 -->|Applied by| n571
  n418 -->|Serves| n429
  n418 -->|Applied by| n371
  n418 -->|Applied by| n369
  n418 -->|Applied by| n355
  n418 -->|Applied by| n351
  n418 -->|Applied by| n393
  n418 -->|Applied by| n395
  n418 -->|Applied by| n344
  n418 -->|Applied by| n349
  n418 -->|Applied by| n535
  n418 -->|Applied by| n536
  n418 -->|Applied by| n555
  n418 -->|Applied by| n554
  n418 -->|Applied by| n547
  n418 -->|Applied by| n546
  n419 -->|Serves| n428
  n419 -->|Applied by| n99
  n419 -->|Applied by| n185
  n419 -->|Applied by| n560
  n419 -->|Applied by| n559
  n419 -->|Applied by| n566
  n420 -->|Serves| n428
  n420 -->|Applied by| n157
  n420 -->|Applied by| n184
  n421 -->|Serves| n428
  n421 -->|Applied by| n169
  n421 -->|Applied by| n566
  n422 -->|Serves| n428
  n422 -->|Applied by| n169
  n422 -->|Applied by| n183
  n422 -->|Applied by| n176
  n423 -->|Serves| n435
  n423 -->|Applied by| n610
  n423 -->|Applied by| n603
  n423 -->|Applied by| n284
  n423 -->|Applied by| n288
  n423 -->|Applied by| n292
  n423 -->|Applied by| n299
  n423 -->|Applied by| n294
  n423 -->|Applied by| n287
  n423 -->|Applied by| n283
  n423 -->|Applied by| n282
  n423 -->|Applied by| n297
  n423 -->|Applied by| n296
  n423 -->|Applied by| n298
  n433 -->|Refines| n428
  n434 -->|Accepts| n433
  n438 -->|Releases| n53
  n439 -->|Releases| n53
  n439 -->|Assembled by| n526
  n440 -->|Releases| n53
  n440 -->|Assembled by| n439
  n441 -->|Releases| n53
  n441 -->|Assembled by| n440
  n442 -->|Releases| n53
  n442 -->|Assembled by| n441
  n443 -->|Releases| n53
  n443 -->|Assembled by| n442
  n444 -->|Releases| n53
  n444 -->|Assembled by| n443
  n445 -->|Releases| n53
  n445 -->|Assembled by| n444
  n446 -->|Releases| n53
  n446 -->|Assembled by| n445
  n447 -->|Releases| n53
  n447 -->|Assembled by| n446
  n448 -->|Releases| n53
  n448 -->|Assembled by| n447
  n449 -->|Releases| n53
  n449 -->|Assembled by| n438
  n450 -->|Releases| n53
  n450 -->|Assembled by| n448
  n451 -->|Releases| n53
  n451 -->|Assembled by| n450
  n452 -->|Releases| n53
  n452 -->|Assembled by| n451
  n453 -->|Releases| n53
  n453 -->|Assembled by| n452
  n454 -->|Releases| n53
  n454 -->|Assembled by| n453
  n455 -->|Releases| n53
  n455 -->|Assembled by| n454
  n456 -->|Releases| n53
  n456 -->|Assembled by| n455
  n457 -->|Releases| n53
  n457 -->|Assembled by| n456
  n458 -->|Releases| n53
  n458 -->|Assembled by| n457
  n459 -->|Releases| n53
  n459 -->|Assembled by| n458
  n460 -->|Releases| n53
  n460 -->|Assembled by| n449
  n461 -->|Releases| n53
  n461 -->|Assembled by| n459
  n462 -->|Releases| n53
  n462 -->|Assembled by| n461
  n463 -->|Releases| n53
  n463 -->|Assembled by| n462
  n464 -->|Releases| n53
  n464 -->|Assembled by| n463
  n465 -->|Releases| n53
  n465 -->|Assembled by| n464
  n466 -->|Releases| n53
  n466 -->|Assembled by| n465
  n467 -->|Releases| n53
  n467 -->|Assembled by| n466
  n468 -->|Releases| n53
  n468 -->|Assembled by| n467
  n469 -->|Releases| n53
  n469 -->|Assembled by| n468
  n470 -->|Releases| n53
  n470 -->|Assembled by| n469
  n471 -->|Releases| n53
  n471 -->|Assembled by| n460
  n472 -->|Releases| n53
  n472 -->|Assembled by| n470
  n473 -->|Releases| n53
  n473 -->|Assembled by| n472
  n474 -->|Releases| n53
  n474 -->|Assembled by| n473
  n475 -->|Releases| n53
  n475 -->|Assembled by| n474
  n476 -->|Releases| n53
  n476 -->|Assembled by| n475
  n477 -->|Releases| n53
  n477 -->|Assembled by| n476
  n478 -->|Releases| n53
  n478 -->|Assembled by| n477
  n479 -->|Releases| n53
  n479 -->|Assembled by| n478
  n480 -->|Releases| n53
  n480 -->|Assembled by| n479
  n481 -->|Releases| n53
  n481 -->|Assembled by| n480
  n482 -->|Releases| n53
  n482 -->|Assembled by| n471
  n483 -->|Releases| n53
  n483 -->|Assembled by| n481
  n484 -->|Releases| n53
  n484 -->|Assembled by| n483
  n485 -->|Releases| n53
  n485 -->|Assembled by| n484
  n486 -->|Releases| n53
  n486 -->|Assembled by| n485
  n487 -->|Releases| n53
  n487 -->|Assembled by| n486
  n488 -->|Releases| n53
  n488 -->|Assembled by| n487
  n489 -->|Releases| n53
  n489 -->|Assembled by| n488
  n490 -->|Releases| n53
  n490 -->|Assembled by| n489
  n491 -->|Releases| n53
  n491 -->|Assembled by| n490
  n492 -->|Releases| n53
  n492 -->|Assembled by| n491
  n493 -->|Releases| n53
  n493 -->|Assembled by| n482
  n494 -->|Releases| n53
  n494 -->|Assembled by| n492
  n495 -->|Releases| n53
  n495 -->|Assembled by| n494
  n496 -->|Releases| n53
  n496 -->|Assembled by| n495
  n497 -->|Releases| n53
  n497 -->|Assembled by| n496
  n498 -->|Releases| n53
  n498 -->|Assembled by| n497
  n499 -->|Releases| n53
  n499 -->|Assembled by| n498
  n500 -->|Releases| n53
  n500 -->|Assembled by| n499
  n501 -->|Releases| n53
  n501 -->|Assembled by| n500
  n502 -->|Releases| n53
  n502 -->|Assembled by| n501
  n503 -->|Releases| n53
  n503 -->|Assembled by| n502
  n504 -->|Releases| n53
  n504 -->|Assembled by| n493
  n505 -->|Releases| n53
  n505 -->|Assembled by| n503
  n506 -->|Releases| n53
  n506 -->|Assembled by| n505
  n507 -->|Releases| n53
  n507 -->|Assembled by| n506
  n508 -->|Releases| n53
  n508 -->|Assembled by| n507
  n509 -->|Releases| n53
  n509 -->|Assembled by| n508
  n510 -->|Releases| n53
  n510 -->|Assembled by| n509
  n511 -->|Releases| n53
  n511 -->|Assembled by| n510
  n512 -->|Releases| n53
  n512 -->|Assembled by| n511
  n513 -->|Releases| n53
  n513 -->|Assembled by| n512
  n514 -->|Releases| n53
  n514 -->|Assembled by| n513
  n515 -->|Releases| n53
  n515 -->|Assembled by| n504
  n516 -->|Releases| n53
  n516 -->|Assembled by| n514
  n517 -->|Releases| n53
  n517 -->|Assembled by| n516
  n518 -->|Releases| n53
  n518 -->|Assembled by| n517
  n519 -->|Releases| n53
  n519 -->|Assembled by| n518
  n520 -->|Releases| n53
  n520 -->|Assembled by| n519
  n521 -->|Releases| n53
  n521 -->|Assembled by| n520
  n522 -->|Releases| n53
  n522 -->|Assembled by| n521
  n523 -->|Releases| n53
  n523 -->|Assembled by| n522
  n524 -->|Releases| n53
  n524 -->|Assembled by| n523
  n525 -->|Releases| n53
  n525 -->|Assembled by| n524
  n526 -->|Releases| n53
  n526 -->|Assembled by| n515
  n527 -->|Releases| n53
  n527 -->|Assembled by| n525
  n528 -->|Releases| n53
  n528 -->|Assembled by| n527
  n529 -->|Releases| n53
  n529 -->|Assembled by| n528
  n530 -->|Releases| n53
  n530 -->|Assembled by| n529
  n531 -->|Releases| n53
  n531 -->|Assembled by| n530
  n532 -->|Releases| n53
  n532 -->|Assembled by| n531
  n533 -->|Releases| n53
  n533 -->|Assembled by| n532
  n534 -->|Serves| n428
  n534 -->|Depends on| n139
  n534 -->|Depends on| n551
  n534 -->|Depends on| n286
  n534 -->|Depends on| n293
  n534 -->|Depends on| n297
  n534 -->|Depends on| n153
  n535 -->|Chooses| n541
  n535 -->|In| n30
  n535 -->|In| n51
  n535 -->|Serves| n429
  n536 -->|Chooses| n543
  n536 -->|In| n30
  n536 -->|In| n51
  n536 -->|Serves| n429
  n538 -->|Serves| n428
  n538 -->|Depends on| n534
  n538 -->|Depends on| n539
  n538 -->|Depends on| n297
  n540 -->|Serves| n428
  n540 -->|Implements| n549
  n540 -->|Depends on| n545
  n540 -->|Depends on| n265
  n540 -->|Depends on| n342
  n540 -->|Depends on| n204
  n540 -->|Depends on| n206
  n540 -->|Depends on| n201
  n540 -->|Depends on| n150
  n540 -->|Depends on| n551
  n540 -->|Depends on| n297
  n541 -->|Serves| n428
  n541 -->|Implements| n539
  n541 -->|Depends on| n537
  n541 -->|Depends on| n152
  n541 -->|Depends on| n150
  n541 -->|Depends on| n247
  n541 -->|Depends on| n254
  n541 -->|Depends on| n256
  n541 -->|Depends on| n246
  n541 -->|Depends on| n248
  n541 -->|Depends on| n252
  n541 -->|Depends on| n259
  n541 -->|Depends on| n249
  n541 -->|Depends on| n255
  n541 -->|Depends on| n257
  n541 -->|Depends on| n261
  n541 -->|Depends on| n260
  n541 -->|Depends on| n243
  n541 -->|Depends on| n251
  n541 -->|Depends on| n297
  n542 -->|Serves| n428
  n542 -->|Applied by| n538
  n542 -->|Applied by| n556
  n542 -->|Applied by| n548
  n542 -->|Applied by| n534
  n542 -->|Applied by| n43
  n543 -->|Serves| n428
  n543 -->|Implements| n537
  n543 -->|Depends on| n274
  n543 -->|Depends on| n148
  n543 -->|Depends on| n7
  n543 -->|Depends on| n258
  n543 -->|Depends on| n269
  n543 -->|Depends on| n277
  n543 -->|Depends on| n281
  n543 -->|Depends on| n276
  n543 -->|Depends on| n268
  n543 -->|Depends on| n279
  n543 -->|Depends on| n270
  n543 -->|Depends on| n272
  n543 -->|Depends on| n273
  n543 -->|Depends on| n278
  n543 -->|Depends on| n286
  n543 -->|Depends on| n297
  n544 -->|Serves| n429
  n544 -->|Applied by| n538
  n544 -->|Applied by| n556
  n544 -->|Applied by| n548
  n544 -->|Applied by| n535
  n544 -->|Applied by| n536
  n544 -->|Applied by| n555
  n544 -->|Applied by| n554
  n544 -->|Applied by| n547
  n544 -->|Applied by| n546
  n546 -->|Chooses| n552
  n546 -->|In| n30
  n546 -->|In| n51
  n546 -->|Serves| n429
  n547 -->|Chooses| n540
  n547 -->|In| n30
  n547 -->|In| n51
  n547 -->|Serves| n429
  n548 -->|Serves| n428
  n548 -->|Depends on| n534
  n548 -->|Depends on| n549
  n548 -->|Depends on| n297
  n550 -->|Serves| n428
  n550 -->|Implements| n557
  n550 -->|Depends on| n553
  n550 -->|Depends on| n628
  n550 -->|Depends on| n626
  n550 -->|Depends on| n150
  n550 -->|Depends on| n624
  n550 -->|Depends on| n622
  n550 -->|Depends on| n623
  n550 -->|Depends on| n621
  n550 -->|Depends on| n627
  n550 -->|Depends on| n297
  n552 -->|Serves| n428
  n552 -->|Implements| n545
  n552 -->|Depends on| n265
  n552 -->|Depends on| n267
  n552 -->|Depends on| n342
  n552 -->|Depends on| n1
  n552 -->|Depends on| n11
  n552 -->|Depends on| n2
  n552 -->|Depends on| n204
  n552 -->|Depends on| n216
  n552 -->|Depends on| n213
  n552 -->|Depends on| n195
  n552 -->|Depends on| n201
  n552 -->|Depends on| n534
  n552 -->|Depends on| n286
  n552 -->|Depends on| n295
  n552 -->|Depends on| n297
  n552 -->|Depends on| n150
  n554 -->|Chooses| n558
  n554 -->|In| n30
  n554 -->|In| n51
  n554 -->|Serves| n429
  n555 -->|Chooses| n550
  n555 -->|In| n30
  n555 -->|In| n51
  n555 -->|Serves| n429
  n556 -->|Serves| n428
  n556 -->|Depends on| n534
  n556 -->|Depends on| n557
  n556 -->|Depends on| n297
  n558 -->|Serves| n428
  n558 -->|Implements| n553
  n558 -->|Depends on| n534
  n558 -->|Depends on| n626
  n558 -->|Depends on| n150
  n558 -->|Depends on| n624
  n558 -->|Depends on| n622
  n558 -->|Depends on| n629
  n558 -->|Depends on| n625
  n558 -->|Depends on| n286
  n558 -->|Depends on| n297
  n559 -->|Verifies| n105
  n559 -->|Verifies| n115
  n559 -->|Verifies| n156
  n559 -->|Verifies| n183
  n559 -->|Verifies| n538
  n559 -->|Verifies| n534
  n559 -->|Verifies| n541
  n559 -->|Verifies| n543
  n559 -->|Verifies| n172
  n559 -->|Verifies| n171
  n559 -->|Verifies| n361
  n559 -->|Verifies| n364
  n559 -->|Verifies| n388
  n559 -->|In| n51
  n559 -->|Depends on| n105
  n559 -->|Depends on| n565
  n559 -->|Depends on| n55
  n559 -->|Depends on| n50
  n559 -->|Depends on| n136
  n559 -->|Depends on| n21
  n559 -->|Depends on| n38
  n559 -->|Depends on| n40
  n559 -->|Depends on| n141
  n559 -->|Depends on| n283
  n559 -->|Depends on| n298
  n560 -->|Verifies| n157
  n560 -->|Verifies| n176
  n560 -->|Verifies| n180
  n560 -->|Verifies| n184
  n560 -->|Verifies| n167
  n560 -->|Verifies| n381
  n560 -->|Verifies| n394
  n560 -->|Verifies| n392
  n560 -->|Verifies| n361
  n560 -->|Verifies| n370
  n560 -->|Verifies| n352
  n560 -->|Verifies| n382
  n560 -->|In| n51
  n560 -->|Depends on| n157
  n560 -->|Depends on| n40
  n560 -->|Depends on| n17
  n560 -->|Depends on| n564
  n560 -->|Depends on| n298
  n561 -->|Verifies| n286
  n561 -->|Verifies| n293
  n561 -->|Verifies| n153
  n561 -->|Verifies| n154
  n561 -->|Verifies| n150
  n561 -->|Verifies| n311
  n561 -->|In| n51
  n561 -->|Depends on| n286
  n561 -->|Depends on| n293
  n561 -->|Depends on| n153
  n561 -->|Depends on| n154
  n561 -->|Depends on| n150
  n561 -->|Depends on| n291
  n561 -->|Depends on| n311
  n561 -->|Depends on| n562
  n561 -->|Depends on| n298
  n563 -->|Verifies| n158
  n563 -->|Verifies| n166
  n563 -->|Verifies| n165
  n563 -->|Verifies| n178
  n563 -->|Verifies| n175
  n563 -->|In| n51
  n563 -->|Depends on| n158
  n563 -->|Depends on| n166
  n563 -->|Depends on| n165
  n563 -->|Depends on| n178
  n563 -->|Depends on| n175
  n563 -->|Depends on| n567
  n563 -->|Depends on| n298
  n566 -->|Verifies| n169
  n566 -->|In| n51
  n566 -->|Depends on| n169
  n566 -->|Depends on| n157
  n566 -->|Depends on| n40
  n566 -->|Depends on| n17
  n566 -->|Depends on| n298
  n568 -->|Serves| n428
  n569 -->|Serves| n428
  n570 -->|Serves| n428
  n571 -->|Checks| n573
  n571 -->|Run by| n126
  n571 -->|Signed by| n583
  n572 -->|Checks| n573
  n572 -->|Run by| n109
  n572 -->|Signed by| n583
  n572 -->|Verifies| n345
  n572 -->|Verifies| n347
  n572 -->|Verifies| n346
  n572 -->|Verifies| n372
  n572 -->|Verifies| n373
  n572 -->|Verifies| n374
  n572 -->|Verifies| n389
  n572 -->|Verifies| n377
  n572 -->|Verifies| n368
  n572 -->|Verifies| n387
  n573 -->|Produced by| n53
  n574 -->|Serves| n428
  n575 -->|Serves| n428
  n576 -->|Its obligations| n575
  n576 -->|Its obligations| n582
  n576 -->|Its obligations| n568
  n576 -->|Its obligations| n570
  n576 -->|Its obligations| n569
  n576 -->|Its obligations| n574
  n577 -->|Produced by| n112
  n577 -->|Carries| n35
  n579 -->|Checks| n577
  n579 -->|Run by| n586
  n579 -->|Signed by| n583
  n579 -->|Verifies| n62
  n579 -->|Verifies| n61
  n579 -->|Verifies| n60
  n579 -->|Verifies| n59
  n579 -->|Verifies| n58
  n579 -->|Verifies| n56
  n579 -->|Verifies| n57
  n581 -->|Serves| n428
  n581 -->|Depends on| n331
  n581 -->|Depends on| n265
  n581 -->|Depends on| n193
  n582 -->|Serves| n428
  n584 -->|Ships| n573
  n584 -->|Ships| n587
  n584 -->|Ships| n577
  n584 -->|Deployed by| n99
  n584 -->|Programs assembled for| n30
  n584 -->|Follows the policy| n576
  n585 -->|Verifies| n586
  n585 -->|Verifies| n581
  n585 -->|In| n51
  n585 -->|Depends on| n586
  n585 -->|Depends on| n577
  n585 -->|Depends on| n581
  n585 -->|Depends on| n590
  n585 -->|Depends on| n580
  n585 -->|Depends on| n298
  n586 -->|Serves| n428
  n586 -->|Part of| n591
  n586 -->|Depends on| n577
  n586 -->|Depends on| n291
  n586 -->|Depends on| n581
  n586 -->|Depends on| n578
  n586 -->|Depends on| n590
  n587 -->|Produced by| n35
  n587 -->|Assembled for| n15
  n588 -->|In| n51
  n589 -->|In| n30
  n590 -->|Written in| n291
  n591 -->|Deployed in| n30
  n592 -->|Implements| n47
  n592 -->|Depends on| n25
  n594 -->|Serves| n428
  n594 -->|Depends on| n136
  n594 -->|Depends on| n599
  n594 -->|Depends on| n21
  n594 -->|Depends on| n38
  n594 -->|Depends on| n25
  n594 -->|Depends on| n134
  n594 -->|Depends on| n165
  n594 -->|Depends on| n47
  n595 -->|Chooses| n592
  n595 -->|In| n30
  n595 -->|In| n51
  n595 -->|Serves| n428
  n596 -->|Serves| n428
  n596 -->|Depends on| n141
  n596 -->|Depends on| n176
  n596 -->|Depends on| n136
  n596 -->|Depends on| n188
  n596 -->|Depends on| n21
  n596 -->|Depends on| n38
  n597 -->|Refines| n428
  n598 -->|Accepts| n597
  n603 -->|Serves| n428
  n603 -->|Depends on| n137
  n603 -->|Depends on| n288
  n607 -->|Written in| n291
  n608 -->|Serves| n428
  n608 -->|Applied by| n610
  n608 -->|Applied by| n48
  n609 -->|Serves| n428
  n609 -->|Applied by| n610
  n609 -->|Applied by| n603
  n609 -->|Applied by| n48
  n610 -->|Serves| n428
  n610 -->|Serves| n435
  n610 -->|Depends on| n48
  n610 -->|Depends on| n604
  n610 -->|Depends on| n607
  n610 -->|Depends on| n605
  n610 -->|Depends on| n606
  n610 -->|Depends on| n600
  n610 -->|Depends on| n21
  n610 -->|Depends on| n27
  n610 -->|Depends on| n45
  n610 -->|Depends on| n136
  n610 -->|Depends on| n38
  n610 -->|Depends on| n25
  n611 -->|Defined by| n614
  n611 -->|Read in| n617
  n611 -->|Depends on| n614
  n612 -->|Defined by| n614
  n612 -->|Read in| n617
  n612 -->|Depends on| n614
  n613 -->|Defined by| n614
  n613 -->|Read in| n617
  n613 -->|Depends on| n614
  n613 -->|Depends on| n617
  n615 -->|Defined by| n614
  n615 -->|Read in| n617
  n615 -->|Depends on| n614
  n615 -->|Depends on| n613
  n616 -->|Defined by| n614
  n616 -->|Read in| n617
  n616 -->|Depends on| n614
  n616 -->|Depends on| n618
  n616 -->|Depends on| n613
  n617 -->|Defined by| n614
  n617 -->|Queries written in| n601
  n617 -->|Read by| n610
  n617 -->|Uses| n303
  n619 -->|Serves| n428
  n619 -->|Depends on| n614
  n619 -->|Depends on| n618
  n619 -->|Depends on| n136
  n619 -->|Depends on| n612
  n619 -->|Depends on| n613
  n619 -->|Depends on| n615
  n619 -->|Depends on| n611
  n619 -->|Depends on| n616
  n619 -->|Depends on| n38
  n619 -->|Depends on| n39
  n619 -->|Depends on| n286
  n619 -->|Depends on| n288
  n621 -->|Defined by| n628
  n621 -->|Depends on| n628
  n622 -->|Defined by| n628
  n622 -->|Depends on| n628
  n622 -->|Depends on| n624
  n622 -->|Depends on| n626
  n623 -->|Defined by| n628
  n623 -->|Depends on| n628
  n624 -->|Defined by| n628
  n624 -->|Depends on| n628
  n624 -->|Depends on| n626
  n625 -->|Defined by| n628
  n625 -->|Depends on| n628
  n625 -->|Depends on| n620
  n627 -->|Defined by| n628
  n627 -->|Depends on| n628
  n629 -->|Defined by| n628
  n629 -->|Depends on| n628
  n629 -->|Depends on| n620
  n630 -->|Defined by| n657
  n630 -->|Read in| n655
  n630 -->|Depends on| n657
  n631 -->|Defined by| n657
  n631 -->|Read in| n655
  n631 -->|Depends on| n657
  n632 -->|Defined by| n657
  n632 -->|Read in| n655
  n632 -->|Depends on| n657
  n633 -->|Defined by| n657
  n633 -->|Read in| n655
  n633 -->|Depends on| n657
  n634 -->|Defined by| n657
  n634 -->|Read in| n655
  n634 -->|Depends on| n657
  n635 -->|Defined by| n657
  n635 -->|Read in| n655
  n635 -->|Depends on| n657
  n636 -->|Defined by| n657
  n636 -->|Read in| n655
  n636 -->|Depends on| n657
  n636 -->|Depends on| n654
  n637 -->|Defined by| n657
  n637 -->|Read in| n655
  n637 -->|Depends on| n657
  n638 -->|Defined by| n657
  n638 -->|Read in| n655
  n638 -->|Depends on| n657
  n639 -->|Defined by| n657
  n639 -->|Read in| n655
  n639 -->|Depends on| n657
  n640 -->|Defined by| n657
  n640 -->|Read in| n655
  n640 -->|Depends on| n657
  n641 -->|Defined by| n657
  n641 -->|Read in| n655
  n641 -->|Depends on| n657
  n642 -->|Defined by| n657
  n642 -->|Read in| n655
  n642 -->|Depends on| n657
  n643 -->|Defined by| n657
  n643 -->|Read in| n655
  n643 -->|Depends on| n657
  n644 -->|Defined by| n657
  n644 -->|Read in| n655
  n644 -->|Depends on| n657
  n644 -->|Depends on| n654
  n645 -->|Defined by| n657
  n645 -->|Read in| n655
  n645 -->|Depends on| n657
  n646 -->|Defined by| n657
  n646 -->|Read in| n655
  n646 -->|Depends on| n657
  n647 -->|Defined by| n657
  n647 -->|Read in| n655
  n647 -->|Depends on| n657
  n648 -->|Defined by| n657
  n648 -->|Read in| n655
  n648 -->|Depends on| n657
  n649 -->|Defined by| n657
  n649 -->|Read in| n655
  n649 -->|Depends on| n657
  n650 -->|Defined by| n657
  n650 -->|Read in| n655
  n650 -->|Depends on| n657
  n652 -->|Defined by| n657
  n652 -->|Read in| n655
  n652 -->|Depends on| n657
  n652 -->|Depends on| n654
  n653 -->|Defined by| n657
  n653 -->|Read in| n655
  n653 -->|Depends on| n657
  n654 -->|Defined by| n657
  n654 -->|Read in| n655
  n654 -->|Depends on| n657
  n655 -->|Queries written in| n601
  n655 -->|Read by| n610
  n655 -->|Watches the globals| n660
  n655 -->|Uses| n309
  n656 -->|Serves| n428
  n658 -->|Serves| n428
  n658 -->|Depends on| n655
  n658 -->|Depends on| n657
  n658 -->|Depends on| n133
  n658 -->|Depends on| n651
  n658 -->|Depends on| n140
  n658 -->|Depends on| n139
  n658 -->|Depends on| n641
  n658 -->|Depends on| n654
  n658 -->|Depends on| n642
  n658 -->|Depends on| n648
  n658 -->|Depends on| n634
  n658 -->|Depends on| n633
  n658 -->|Depends on| n650
  n658 -->|Depends on| n652
  n658 -->|Depends on| n646
  n658 -->|Depends on| n630
  n658 -->|Depends on| n635
  n658 -->|Depends on| n644
  n658 -->|Depends on| n636
  n658 -->|Depends on| n631
  n658 -->|Depends on| n649
  n658 -->|Depends on| n647
  n658 -->|Depends on| n659
  n658 -->|Depends on| n639
  n658 -->|Depends on| n653
  n658 -->|Depends on| n632
  n658 -->|Depends on| n38
  n658 -->|Depends on| n39
  n658 -->|Depends on| n286
  n658 -->|Depends on| n288
  n659 -->|Defined by| n657
  n659 -->|Read in| n655
  n659 -->|Depends on| n657
  n43 -.->|Depends on| n39
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
