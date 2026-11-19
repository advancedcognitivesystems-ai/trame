# Layers

*The graph in force on 19 November 2026, ordered by distance to the goals.*

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
    n235["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n236["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n237["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n238["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n239["Same input, same answer<br/><small>Requirement</small>"]:::held
    n240["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n241["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n242["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n243["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n244["What belongs to a library<br/><small>Requirement</small>"]:::held
    n245["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n246["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n247["A release is settled<br/><small>Requirement</small>"]:::held
    n248["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n249["Anchor<br/><small>Syntax element</small>"]:::held
    n250["Backtick string<br/><small>Syntax element</small>"]:::held
    n251["Blank line<br/><small>Syntax element</small>"]:::held
    n252["Block quote<br/><small>Syntax element</small>"]:::held
    n253["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n254["Code block<br/><small>Syntax element</small>"]:::held
    n255["Code span<br/><small>Syntax element</small>"]:::held
    n256["CommonMark<br/><small>Standard</small>"]:::neutral
    n257["Collapsible block<br/><small>Syntax element</small>"]:::held
    n258["Emphasis<br/><small>Syntax element</small>"]:::held
    n259["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n260["Heading<br/><small>Syntax element</small>"]:::held
    n261["Link<br/><small>Syntax element</small>"]:::held
    n262["List item<br/><small>Syntax element</small>"]:::held
    n263["Relative reference<br/><small>Syntax element</small>"]:::held
    n264["Small text<br/><small>Syntax element</small>"]:::held
    n265["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n266["Table<br/><small>Syntax element</small>"]:::held
    n267["Table cell<br/><small>Syntax element</small>"]:::held
    n268["Delimiter row<br/><small>Syntax element</small>"]:::held
    n269["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n270["Around the documents<br/><small>Decision</small>"]:::neutral
    n271["Documents in the page<br/><small>Decision</small>"]:::neutral
    n272["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n273["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n274["Class definition<br/><small>Syntax element</small>"]:::held
    n275["Flowchart<br/><small>Syntax element</small>"]:::held
    n276["Gantt chart<br/><small>Syntax element</small>"]:::held
    n277["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n278["Section<br/><small>Syntax element</small>"]:::held
    n279["Task<br/><small>Syntax element</small>"]:::held
    n280["Mermaid<br/><small>Standard</small>"]:::neutral
    n281["Label<br/><small>Syntax element</small>"]:::held
    n282["Link<br/><small>Syntax element</small>"]:::held
    n283["Node<br/><small>Syntax element</small>"]:::held
    n284["Milestone<br/><small>Syntax element</small>"]:::held
    n285["Node style<br/><small>Syntax element</small>"]:::held
    n286["Style properties<br/><small>Syntax element</small>"]:::held
    n287["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n288["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n289["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n290["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n291["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n292["Dates<br/><small>Function</small>"]:::held
    n293["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n294["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n295["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n296["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n297["Language<br/><small>Decision</small>"]:::neutral
    n298["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n299["Lists<br/><small>Function</small>"]:::held
    n300["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n301["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n302["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n303["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n304["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n305["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n306["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n307["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n308["Grammar of CSS<br/><small>Package</small>"]:::held
    n309["esbuild<br/><small>Package</small>"]:::held
    n310["Grammar of HCL<br/><small>Package</small>"]:::held
    n311["Grammar of HTML<br/><small>Package</small>"]:::held
    n312["Types of Node.js<br/><small>Package</small>"]:::held
    n313["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n314["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n315["The standard library<br/><small>Package</small>"]:::neutral
    n316["tsx<br/><small>Package</small>"]:::held
    n317["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n318["TypeScript<br/><small>Package</small>"]:::held
    n319["Order of versions<br/><small>Function</small>"]:::held
    n320["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n321["Banner<br/><small>Syntax element</small>"]:::held
    n322["Brand<br/><small>Syntax element</small>"]:::held
    n323["State of the compilation<br/><small>Syntax element</small>"]:::held
    n324["Dates<br/><small>Syntax element</small>"]:::held
    n325["Head of the document<br/><small>Syntax element</small>"]:::held
    n326["Document picker<br/><small>Syntax element</small>"]:::held
    n327["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n328["Fonts<br/><small>Syntax element</small>"]:::held
    n329["Logo<br/><small>Syntax element</small>"]:::held
    n330["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n331["Main area<br/><small>Syntax element</small>"]:::held
    n332["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n333["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n334["Navigation<br/><small>Syntax element</small>"]:::held
    n335["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n336["Page<br/><small>Function</small>"]:::held
    n337["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n338["Document of the page<br/><small>Syntax element</small>"]:::held
    n339["Regions of the page<br/><small>Decision</small>"]:::neutral
    n340["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n341["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n342["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n343["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n344["Shell<br/><small>Syntax element</small>"]:::held
    n345["Side bar<br/><small>Syntax element</small>"]:::held
    n346["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n347["Colours of a status<br/><small>Syntax element</small>"]:::held
    n348["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n349["Theme<br/><small>Syntax element</small>"]:::held
    n350["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n351["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n352["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n353["System files, for reading<br/><small>Implementation</small>"]:::held
    n354["Trees on disk<br/><small>Implementation</small>"]:::held
    n355["System files, for writing<br/><small>Implementation</small>"]:::held
    n356["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n357["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n358["esbuild<br/><small>Implementation</small>"]:::held
    n359["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n360["Example process<br/><small>Function</small>"]:::held
    n361["Example project<br/><small>Decision</small>"]:::neutral
    n362["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n363["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n364["Amendments in place<br/><small>Implementation</small>"]:::held
    n365["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n366["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n367["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n368["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n369["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n370["A server in memory<br/><small>Function</small>"]:::held
    n371["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n372["Terminal in memory<br/><small>Function</small>"]:::held
    n373["Command line<br/><small>Implementation</small>"]:::held
    n374["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n375["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n376["Node HTTP server<br/><small>Implementation</small>"]:::held
    n377["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n378["Node paths<br/><small>Implementation</small>"]:::held
    n379["NodePlatform<br/><small>Technical choice</small>"]:::held
    n380["Node process<br/><small>Implementation</small>"]:::held
    n381["Node programs<br/><small>Implementation</small>"]:::held
    n382["Node terminal<br/><small>Implementation</small>"]:::held
    n383["Node timer<br/><small>Implementation</small>"]:::held
    n384["No installer in test<br/><small>Implementation</small>"]:::held
    n385["No registry in test<br/><small>Function</small>"]:::held
    n386["npm installs<br/><small>Implementation</small>"]:::held
    n387["npm's reports<br/><small>Implementation</small>"]:::held
    n388["Packages by their origin<br/><small>Implementation</small>"]:::held
    n389["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n390["Page resources<br/><small>Implementation</small>"]:::held
    n391["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n392["Results kept in the process<br/><small>Implementation</small>"]:::held
    n393["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n394["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n395["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n396["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n397["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n398["Stopped clock<br/><small>Function</small>"]:::held
    n399["System clock<br/><small>Implementation</small>"]:::held
    n400["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n401["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n402["Trame's prelude<br/><small>Implementation</small>"]:::held
    n403["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n404["tsx loader<br/><small>Implementation</small>"]:::held
    n405["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n406["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n407["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n408["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n409["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n410["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n411["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n412["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n413["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n414["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n415["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n416["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n417["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n418["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n419["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n420["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n421["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n422["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n423["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n424["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n425["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n426["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n427["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n428["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n429["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n430["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n431["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n432["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n433["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n434["Candidate dates<br/><small>Decision</small>"]:::neutral
    n435["Claim sets<br/><small>Decision</small>"]:::neutral
    n436["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n437["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n438["A specification that runs<br/><small>Goal</small>"]:::neutral
    n439["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n440["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n441["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n442["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n443["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n444["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n445["A single source of truth<br/><small>Goal</small>"]:::neutral
    n446["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n447["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n448["Generation 1<br/><small>Release</small>"]:::neutral
    n449["Generation 10<br/><small>Release</small>"]:::neutral
    n450["Generation 100<br/><small>Release</small>"]:::neutral
    n451["Generation 101<br/><small>Release</small>"]:::neutral
    n452["Generation 102<br/><small>Release</small>"]:::neutral
    n453["Generation 103<br/><small>Release</small>"]:::neutral
    n454["Generation 104<br/><small>Release</small>"]:::neutral
    n455["Generation 105<br/><small>Release</small>"]:::neutral
    n456["Generation 106<br/><small>Release</small>"]:::neutral
    n457["Generation 107<br/><small>Release</small>"]:::neutral
    n458["Generation 108<br/><small>Release</small>"]:::neutral
    n459["Generation 109<br/><small>Release</small>"]:::neutral
    n460["Generation 11<br/><small>Release</small>"]:::neutral
    n461["Generation 110<br/><small>Release</small>"]:::neutral
    n462["Generation 12<br/><small>Release</small>"]:::neutral
    n463["Generation 13<br/><small>Release</small>"]:::neutral
    n464["Generation 14<br/><small>Release</small>"]:::neutral
    n465["Generation 15<br/><small>Release</small>"]:::neutral
    n466["Generation 16<br/><small>Release</small>"]:::neutral
    n467["Generation 17<br/><small>Release</small>"]:::neutral
    n468["Generation 18<br/><small>Release</small>"]:::neutral
    n469["Generation 19<br/><small>Release</small>"]:::neutral
    n470["Generation 2<br/><small>Release</small>"]:::neutral
    n471["Generation 20<br/><small>Release</small>"]:::neutral
    n472["Generation 21<br/><small>Release</small>"]:::neutral
    n473["Generation 22<br/><small>Release</small>"]:::neutral
    n474["Generation 23<br/><small>Release</small>"]:::neutral
    n475["Generation 24<br/><small>Release</small>"]:::neutral
    n476["Generation 25<br/><small>Release</small>"]:::neutral
    n477["Generation 26<br/><small>Release</small>"]:::neutral
    n478["Generation 27<br/><small>Release</small>"]:::neutral
    n479["Generation 28<br/><small>Release</small>"]:::neutral
    n480["Generation 29<br/><small>Release</small>"]:::neutral
    n481["Generation 3<br/><small>Release</small>"]:::neutral
    n482["Generation 30<br/><small>Release</small>"]:::neutral
    n483["Generation 31<br/><small>Release</small>"]:::neutral
    n484["Generation 32<br/><small>Release</small>"]:::neutral
    n485["Generation 33<br/><small>Release</small>"]:::neutral
    n486["Generation 34<br/><small>Release</small>"]:::neutral
    n487["Generation 35<br/><small>Release</small>"]:::neutral
    n488["Generation 36<br/><small>Release</small>"]:::neutral
    n489["Generation 37<br/><small>Release</small>"]:::neutral
    n490["Generation 38<br/><small>Release</small>"]:::neutral
    n491["Generation 39<br/><small>Release</small>"]:::neutral
    n492["Generation 4<br/><small>Release</small>"]:::neutral
    n493["Generation 40<br/><small>Release</small>"]:::neutral
    n494["Generation 41<br/><small>Release</small>"]:::neutral
    n495["Generation 42<br/><small>Release</small>"]:::neutral
    n496["Generation 43<br/><small>Release</small>"]:::neutral
    n497["Generation 44<br/><small>Release</small>"]:::neutral
    n498["Generation 45<br/><small>Release</small>"]:::neutral
    n499["Generation 46<br/><small>Release</small>"]:::neutral
    n500["Generation 47<br/><small>Release</small>"]:::neutral
    n501["Generation 48<br/><small>Release</small>"]:::neutral
    n502["Generation 49<br/><small>Release</small>"]:::neutral
    n503["Generation 5<br/><small>Release</small>"]:::neutral
    n504["Generation 50<br/><small>Release</small>"]:::neutral
    n505["Generation 51<br/><small>Release</small>"]:::neutral
    n506["Generation 52<br/><small>Release</small>"]:::neutral
    n507["Generation 53<br/><small>Release</small>"]:::neutral
    n508["Generation 54<br/><small>Release</small>"]:::neutral
    n509["Generation 55<br/><small>Release</small>"]:::neutral
    n510["Generation 56<br/><small>Release</small>"]:::neutral
    n511["Generation 57<br/><small>Release</small>"]:::neutral
    n512["Generation 58<br/><small>Release</small>"]:::neutral
    n513["Generation 59<br/><small>Release</small>"]:::neutral
    n514["Generation 6<br/><small>Release</small>"]:::neutral
    n515["Generation 60<br/><small>Release</small>"]:::neutral
    n516["Generation 61<br/><small>Release</small>"]:::neutral
    n517["Generation 62<br/><small>Release</small>"]:::neutral
    n518["Generation 63<br/><small>Release</small>"]:::neutral
    n519["Generation 64<br/><small>Release</small>"]:::neutral
    n520["Generation 65<br/><small>Release</small>"]:::neutral
    n521["Generation 66<br/><small>Release</small>"]:::neutral
    n522["Generation 67<br/><small>Release</small>"]:::neutral
    n523["Generation 68<br/><small>Release</small>"]:::neutral
    n524["Generation 69<br/><small>Release</small>"]:::neutral
    n525["Generation 7<br/><small>Release</small>"]:::neutral
    n526["Generation 70<br/><small>Release</small>"]:::neutral
    n527["Generation 71<br/><small>Release</small>"]:::neutral
    n528["Generation 72<br/><small>Release</small>"]:::neutral
    n529["Generation 73<br/><small>Release</small>"]:::neutral
    n530["Generation 74<br/><small>Release</small>"]:::neutral
    n531["Generation 75<br/><small>Release</small>"]:::neutral
    n532["Generation 76<br/><small>Release</small>"]:::neutral
    n533["Generation 77<br/><small>Release</small>"]:::neutral
    n534["Generation 78<br/><small>Release</small>"]:::neutral
    n535["Generation 79<br/><small>Release</small>"]:::neutral
    n536["Generation 8<br/><small>Release</small>"]:::neutral
    n537["Generation 80<br/><small>Release</small>"]:::neutral
    n538["Generation 81<br/><small>Release</small>"]:::neutral
    n539["Generation 82<br/><small>Release</small>"]:::neutral
    n540["Generation 83<br/><small>Release</small>"]:::neutral
    n541["Generation 84<br/><small>Release</small>"]:::neutral
    n542["Generation 85<br/><small>Release</small>"]:::neutral
    n543["Generation 86<br/><small>Release</small>"]:::neutral
    n544["Generation 87<br/><small>Release</small>"]:::neutral
    n545["Generation 88<br/><small>Release</small>"]:::neutral
    n546["Generation 89<br/><small>Release</small>"]:::neutral
    n547["Generation 9<br/><small>Release</small>"]:::neutral
    n548["Generation 90<br/><small>Release</small>"]:::neutral
    n549["Generation 91<br/><small>Release</small>"]:::neutral
    n550["Generation 92<br/><small>Release</small>"]:::neutral
    n551["Generation 93<br/><small>Release</small>"]:::neutral
    n552["Generation 94<br/><small>Release</small>"]:::neutral
    n553["Generation 95<br/><small>Release</small>"]:::neutral
    n554["Generation 96<br/><small>Release</small>"]:::neutral
    n555["Generation 97<br/><small>Release</small>"]:::neutral
    n556["Generation 98<br/><small>Release</small>"]:::neutral
    n557["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n558["Common rendering<br/><small>Function</small>"]:::held
    n559["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n560["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n561["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n562["Rendering of the files<br/><small>Function</small>"]:::held
    n563["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n564["HTML writer<br/><small>Function</small>"]:::held
    n565["Markdown writer<br/><small>Function</small>"]:::held
    n566["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n567["Mermaid diagrams<br/><small>Function</small>"]:::held
    n568["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n569["Figures of the page<br/><small>Port</small>"]:::neutral
    n570["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n571["The page in HTML<br/><small>Technical choice</small>"]:::held
    n572["Rendering in the page<br/><small>Function</small>"]:::held
    n573["Syntax of the page<br/><small>Port</small>"]:::neutral
    n574["Plain text writer<br/><small>Function</small>"]:::held
    n575["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n576["Figures in SVG<br/><small>Function</small>"]:::held
    n577["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n578["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n579["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n580["Rendering in the terminal<br/><small>Function</small>"]:::held
    n581["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n582["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n583["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n584["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n585["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n586["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n587["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n588["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n589["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n590["Shape of the example<br/><small>Decision</small>"]:::neutral
    n591["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n592["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n593["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n594["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n595["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n596["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n597["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n598["The candidate plays the laws<br/><small>Check</small>"]:::held
    n599["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n600["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n601["The candidate engine<br/><small>Artefact</small>"]:::held
    n602["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n603["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n604["How a generation is made<br/><small>Policy</small>"]:::neutral
    n605["The graph page<br/><small>Artefact</small>"]:::held
    n606["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n607["The graph page opens<br/><small>Check</small>"]:::unknown
    n608["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n609["What the graph page is asked<br/><small>Function</small>"]:::held
    n610["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n611["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n612["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n613["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n614["How a change merges<br/><small>Policy</small>"]:::neutral
    n615["The next generation<br/><small>Shipment</small>"]:::unknown
    n616["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n617["Open the graph page<br/><small>Entry point</small>"]:::held
    n618["The page's program<br/><small>Artefact</small>"]:::held
    n619["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n620["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n621["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n622["The repository is read from GitHub<br/><small>Check</small>"]:::held
    n623["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n624["The repository as decided<br/><small>Shipment</small>"]:::held
    n625["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n626["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n627["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n628["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n629["How the repository is set<br/><small>Policy</small>"]:::neutral
    n630["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n631["The engine<br/><small>Artefact</small>"]:::unknown
    n632["Trame's repository<br/><small>Decision</small>"]:::neutral
    n633["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n634["Attribution<br/><small>Function</small>"]:::held
    n635["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n636["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n637["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n638["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n639["Ship only what holds<br/><small>Requirement</small>"]:::held
    n640["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n641["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n642["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n643["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n644["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n645["Checks of a body<br/><small>Function</small>"]:::held
    n646["Captures<br/><small>Standard</small>"]:::neutral
    n647["Categories of literals<br/><small>Decision</small>"]:::neutral
    n648["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n649["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n650["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n651["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n652["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n653["Attribute<br/><small>Syntax element</small>"]:::held
    n654["Comment<br/><small>Syntax element</small>"]:::held
    n655["Text<br/><small>Syntax element</small>"]:::held
    n656["HCL<br/><small>Standard</small>"]:::neutral
    n657["Value<br/><small>Syntax element</small>"]:::held
    n658["Module call<br/><small>Syntax element</small>"]:::held
    n659["Terraform<br/><small>Language</small>"]:::held
    n660["Terraform modules<br/><small>Standard</small>"]:::neutral
    n661["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n662["Box drawing<br/><small>Standard</small>"]:::neutral
    n663["Code lines<br/><small>Syntax element</small>"]:::held
    n664["Columns<br/><small>Syntax element</small>"]:::held
    n665["Item line<br/><small>Syntax element</small>"]:::held
    n666["Padded cell<br/><small>Syntax element</small>"]:::held
    n667["Path step<br/><small>Syntax element</small>"]:::held
    n668["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n669["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n670["Terminal text<br/><small>Decision</small>"]:::neutral
    n671["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n672["List on several lines<br/><small>Syntax element</small>"]:::held
    n673["Type assertion<br/><small>Syntax element</small>"]:::held
    n674["Assignment<br/><small>Syntax element</small>"]:::held
    n675["Async function of a block<br/><small>Syntax element</small>"]:::held
    n676["Waiting<br/><small>Syntax element</small>"]:::held
    n677["Call<br/><small>Syntax element</small>"]:::held
    n678["Constant<br/><small>Syntax element</small>"]:::held
    n679["Default import<br/><small>Syntax element</small>"]:::held
    n680["Documentation comment<br/><small>Syntax element</small>"]:::held
    n681["Export<br/><small>Syntax element</small>"]:::held
    n682["Condition<br/><small>Syntax element</small>"]:::held
    n683["List on one line<br/><small>Syntax element</small>"]:::held
    n684["Comment<br/><small>Syntax element</small>"]:::held
    n685["Property access<br/><small>Syntax element</small>"]:::held
    n686["Title of a module<br/><small>Syntax element</small>"]:::held
    n687["Import of names<br/><small>Syntax element</small>"]:::held
    n688["Object on several lines<br/><small>Syntax element</small>"]:::held
    n689["Object<br/><small>Syntax element</small>"]:::held
    n690["Object type<br/><small>Syntax element</small>"]:::held
    n691["Optional property access<br/><small>Syntax element</small>"]:::held
    n692["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n693["Group<br/><small>Syntax element</small>"]:::held
    n694["Names of a program<br/><small>Decision</small>"]:::neutral
    n695["Property<br/><small>Syntax element</small>"]:::held
    n696["Strict inequality<br/><small>Syntax element</small>"]:::held
    n697["Text<br/><small>Syntax element</small>"]:::held
    n698["TypeScript<br/><small>Language</small>"]:::held
    n699["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n700["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n701["TypeScript writer<br/><small>Function</small>"]:::held
    n702["Union type<br/><small>Syntax element</small>"]:::held
    n703["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n350
  n57 -->|Depends on| n167
  n58 -->|Implements| n20
  n58 -->|Depends on| n335
  n59 -->|Implements| n24
  n59 -->|Depends on| n350
  n59 -->|Depends on| n167
  n60 -->|Implements| n37
  n60 -->|Depends on| n350
  n61 -->|Implements| n38
  n61 -->|Depends on| n216
  n62 -->|Serves| n438
  n62 -->|Depends on| n350
  n62 -->|Depends on| n271
  n62 -->|Depends on| n273
  n62 -->|Depends on| n272
  n62 -->|Depends on| n0
  n62 -->|Depends on| n210
  n62 -->|Depends on| n214
  n62 -->|Depends on| n222
  n62 -->|Depends on| n219
  n62 -->|Depends on| n201
  n62 -->|Depends on| n207
  n62 -->|Depends on| n558
  n62 -->|Depends on| n301
  n62 -->|Depends on| n303
  n62 -->|Depends on| n156
  n63 -->|Serves| n438
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n558
  n63 -->|Depends on| n350
  n63 -->|Depends on| n339
  n63 -->|Depends on| n342
  n63 -->|Depends on| n330
  n63 -->|Depends on| n271
  n63 -->|Depends on| n270
  n63 -->|Depends on| n272
  n63 -->|Depends on| n0
  n63 -->|Depends on| n138
  n63 -->|Depends on| n575
  n63 -->|Depends on| n156
  n63 -->|Depends on| n297
  n63 -->|Depends on| n210
  n63 -->|Depends on| n207
  n63 -->|Depends on| n199
  n63 -->|Depends on| n198
  n63 -->|Depends on| n221
  n63 -->|Depends on| n200
  n63 -->|Depends on| n301
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n439
  n65 -->|Serves| n438
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
  n66 -->|Depends on| n288
  n66 -->|Depends on| n67
  n66 -->|Depends on| n304
  n70 -->|Verifies| n652
  n70 -->|Verifies| n645
  n70 -->|Verifies| n407
  n70 -->|In| n52
  n70 -->|Depends on| n652
  n70 -->|Depends on| n645
  n70 -->|Depends on| n698
  n70 -->|Depends on| n71
  n70 -->|Depends on| n294
  n70 -->|Depends on| n304
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
  n72 -->|Depends on| n289
  n72 -->|Depends on| n304
  n73 -->|Verifies| n373
  n73 -->|Verifies| n372
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n147
  n73 -->|Depends on| n102
  n73 -->|Depends on| n302
  n73 -->|Depends on| n304
  n74 -->|Verifies| n107
  n74 -->|Verifies| n108
  n74 -->|Verifies| n161
  n74 -->|Verifies| n701
  n74 -->|Verifies| n661
  n74 -->|Verifies| n223
  n74 -->|Verifies| n398
  n74 -->|In| n52
  n74 -->|Depends on| n107
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n147
  n74 -->|Depends on| n142
  n74 -->|Depends on| n69
  n74 -->|Depends on| n139
  n74 -->|Depends on| n289
  n74 -->|Depends on| n304
  n75 -->|Verifies| n127
  n75 -->|In| n52
  n75 -->|Depends on| n127
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n147
  n75 -->|Depends on| n69
  n75 -->|Depends on| n95
  n75 -->|Depends on| n304
  n76 -->|Verifies| n121
  n76 -->|In| n52
  n76 -->|Depends on| n121
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n142
  n76 -->|Depends on| n147
  n76 -->|Depends on| n289
  n76 -->|Depends on| n304
  n77 -->|Verifies| n113
  n77 -->|Verifies| n166
  n77 -->|Verifies| n370
  n77 -->|Verifies| n383
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
  n77 -->|Depends on| n436
  n77 -->|Depends on| n182
  n77 -->|Depends on| n147
  n77 -->|Depends on| n300
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n304
  n79 -->|Verifies| n114
  n79 -->|Verifies| n183
  n79 -->|Verifies| n394
  n79 -->|In| n52
  n79 -->|Depends on| n114
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n115
  n79 -->|Depends on| n147
  n79 -->|Depends on| n289
  n79 -->|Depends on| n304
  n80 -->|Verifies| n163
  n80 -->|Verifies| n182
  n80 -->|In| n52
  n80 -->|Depends on| n163
  n80 -->|Depends on| n42
  n80 -->|Depends on| n41
  n80 -->|Depends on| n17
  n80 -->|Depends on| n96
  n80 -->|Depends on| n91
  n80 -->|Depends on| n636
  n80 -->|Depends on| n23
  n80 -->|Depends on| n304
  n81 -->|Verifies| n131
  n81 -->|In| n52
  n81 -->|Depends on| n131
  n81 -->|Depends on| n163
  n81 -->|Depends on| n189
  n81 -->|Depends on| n41
  n81 -->|Depends on| n51
  n81 -->|Depends on| n147
  n81 -->|Depends on| n289
  n81 -->|Depends on| n304
  n82 -->|Verifies| n125
  n82 -->|Verifies| n196
  n82 -->|Verifies| n367
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
  n82 -->|Depends on| n697
  n82 -->|Depends on| n304
  n82 -->|Depends on| n641
  n83 -->|Verifies| n134
  n83 -->|Verifies| n388
  n83 -->|Verifies| n366
  n83 -->|Verifies| n384
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
  n83 -->|Depends on| n304
  n83 -->|Depends on| n141
  n83 -->|Depends on| n698
  n84 -->|Verifies| n109
  n84 -->|Verifies| n385
  n84 -->|In| n52
  n84 -->|Depends on| n109
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n51
  n84 -->|Depends on| n96
  n84 -->|Depends on| n147
  n84 -->|Depends on| n304
  n84 -->|Depends on| n314
  n85 -->|Verifies| n132
  n85 -->|Verifies| n388
  n85 -->|Verifies| n366
  n85 -->|In| n52
  n85 -->|Depends on| n132
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n41
  n85 -->|Depends on| n39
  n85 -->|Depends on| n142
  n85 -->|Depends on| n96
  n85 -->|Depends on| n147
  n85 -->|Depends on| n304
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
  n86 -->|Depends on| n304
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
  n87 -->|Depends on| n300
  n87 -->|Depends on| n304
  n88 -->|Verifies| n336
  n88 -->|Verifies| n358
  n88 -->|Verifies| n374
  n88 -->|Verifies| n390
  n88 -->|In| n52
  n88 -->|Depends on| n116
  n88 -->|Depends on| n336
  n88 -->|Depends on| n19
  n88 -->|Depends on| n182
  n88 -->|Depends on| n41
  n88 -->|Depends on| n17
  n88 -->|Depends on| n51
  n88 -->|Depends on| n147
  n88 -->|Depends on| n300
  n88 -->|Depends on| n304
  n89 -->|Verifies| n116
  n89 -->|Verifies| n180
  n89 -->|Verifies| n572
  n89 -->|Verifies| n564
  n89 -->|Verifies| n576
  n89 -->|Verifies| n168
  n89 -->|In| n52
  n89 -->|Depends on| n116
  n89 -->|Depends on| n168
  n89 -->|Depends on| n51
  n89 -->|Depends on| n147
  n89 -->|Depends on| n300
  n89 -->|Depends on| n304
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
  n92 -->|Depends on| n304
  n92 -->|Depends on| n141
  n92 -->|Depends on| n698
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
  n93 -->|Depends on| n300
  n93 -->|Depends on| n304
  n94 -->|Verifies| n124
  n94 -->|Verifies| n367
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n42
  n94 -->|Depends on| n56
  n94 -->|Depends on| n147
  n94 -->|Depends on| n304
  n94 -->|Depends on| n141
  n94 -->|Depends on| n698
  n94 -->|Depends on| n91
  n97 -->|Verifies| n128
  n97 -->|Verifies| n122
  n97 -->|Verifies| n636
  n97 -->|Verifies| n185
  n97 -->|Verifies| n638
  n97 -->|Verifies| n375
  n97 -->|Verifies| n634
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
  n97 -->|Depends on| n290
  n97 -->|Depends on| n142
  n97 -->|Depends on| n641
  n97 -->|Depends on| n96
  n97 -->|Depends on| n91
  n97 -->|Depends on| n147
  n97 -->|Depends on| n304
  n98 -->|Verifies| n130
  n98 -->|In| n52
  n98 -->|Depends on| n130
  n98 -->|Depends on| n56
  n98 -->|Depends on| n21
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n142
  n98 -->|Depends on| n147
  n98 -->|Depends on| n304
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
  n99 -->|Depends on| n289
  n99 -->|Depends on| n142
  n99 -->|Depends on| n641
  n99 -->|Depends on| n96
  n99 -->|Depends on| n91
  n99 -->|Depends on| n147
  n99 -->|Depends on| n304
  n101 -->|Verifies| n105
  n101 -->|Verifies| n106
  n101 -->|Verifies| n111
  n101 -->|Verifies| n364
  n101 -->|In| n52
  n101 -->|Depends on| n105
  n101 -->|Depends on| n56
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n147
  n101 -->|Depends on| n68
  n101 -->|Depends on| n304
  n103 -->|Verifies| n129
  n103 -->|Verifies| n133
  n103 -->|Verifies| n126
  n103 -->|Verifies| n580
  n103 -->|Verifies| n574
  n103 -->|Verifies| n582
  n103 -->|In| n52
  n103 -->|Depends on| n129
  n103 -->|Depends on| n133
  n103 -->|Depends on| n51
  n103 -->|Depends on| n147
  n103 -->|Depends on| n102
  n103 -->|Depends on| n304
  n104 -->|Serves| n438
  n104 -->|Part of| n54
  n104 -->|Depends on| n120
  n104 -->|Depends on| n169
  n104 -->|Depends on| n147
  n104 -->|Depends on| n142
  n104 -->|Depends on| n193
  n104 -->|Depends on| n191
  n104 -->|Depends on| n361
  n104 -->|Depends on| n400
  n104 -->|Depends on| n148
  n104 -->|Depends on| n698
  n104 -->|Depends on| n43
  n104 -->|Depends on| n22
  n104 -->|Depends on| n21
  n104 -->|Depends on| n23
  n104 -->|Depends on| n39
  n104 -->|Depends on| n25
  n104 -->|Depends on| n170
  n104 -->|Depends on| n50
  n104 -->|Depends on| n664
  n104 -->|Depends on| n670
  n104 -->|Depends on| n289
  n104 -->|Depends on| n288
  n104 -->|Depends on| n194
  n104 -->|Depends on| n195
  n104 -->|Depends on| n197
  n104 -->|Depends on| n196
  n104 -->|Depends on| n140
  n104 -->|Depends on| n145
  n104 -->|Depends on| n17
  n104 -->|Depends on| n182
  n104 -->|Depends on| n141
  n105 -->|Serves| n445
  n105 -->|Part of| n54
  n105 -->|Depends on| n120
  n105 -->|Depends on| n106
  n105 -->|Depends on| n14
  n105 -->|Depends on| n39
  n105 -->|Depends on| n670
  n105 -->|Depends on| n50
  n105 -->|Depends on| n289
  n106 -->|Serves| n445
  n106 -->|Depends on| n120
  n106 -->|Depends on| n178
  n106 -->|Depends on| n111
  n106 -->|Depends on| n40
  n106 -->|Depends on| n184
  n106 -->|Depends on| n182
  n106 -->|Depends on| n142
  n106 -->|Depends on| n39
  n106 -->|Depends on| n289
  n106 -->|Depends on| n135
  n107 -->|Serves| n438
  n107 -->|Part of| n54
  n107 -->|Depends on| n120
  n107 -->|Depends on| n108
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n50
  n107 -->|Depends on| n289
  n108 -->|Serves| n438
  n108 -->|Depends on| n120
  n108 -->|Depends on| n161
  n108 -->|Depends on| n670
  n108 -->|Depends on| n156
  n108 -->|Depends on| n289
  n109 -->|Serves| n445
  n109 -->|Part of| n54
  n109 -->|Depends on| n120
  n109 -->|Depends on| n34
  n109 -->|Depends on| n314
  n109 -->|Depends on| n142
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n319
  n109 -->|Depends on| n140
  n109 -->|Depends on| n50
  n109 -->|Depends on| n664
  n109 -->|Depends on| n670
  n109 -->|Depends on| n289
  n110 -->|Serves| n438
  n110 -->|Part of| n54
  n110 -->|Depends on| n142
  n110 -->|Depends on| n120
  n110 -->|Depends on| n178
  n110 -->|Depends on| n562
  n110 -->|Depends on| n580
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n50
  n110 -->|Depends on| n289
  n111 -->|Serves| n438
  n111 -->|Depends on| n289
  n111 -->|Depends on| n300
  n112 -->|Serves| n438
  n112 -->|Part of| n54
  n112 -->|Depends on| n120
  n112 -->|Depends on| n161
  n112 -->|Depends on| n108
  n112 -->|Depends on| n16
  n112 -->|Depends on| n152
  n112 -->|Depends on| n337
  n112 -->|Depends on| n338
  n112 -->|Depends on| n220
  n112 -->|Depends on| n151
  n112 -->|Depends on| n21
  n112 -->|Depends on| n23
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n289
  n113 -->|Serves| n438
  n113 -->|Part of| n54
  n113 -->|Depends on| n120
  n113 -->|Depends on| n166
  n113 -->|Depends on| n106
  n113 -->|Depends on| n14
  n113 -->|Depends on| n39
  n114 -->|Serves| n438
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
  n114 -->|Depends on| n289
  n116 -->|Serves| n438
  n116 -->|Part of| n54
  n116 -->|Depends on| n120
  n116 -->|Depends on| n180
  n116 -->|Depends on| n562
  n116 -->|Depends on| n580
  n116 -->|Depends on| n572
  n116 -->|Depends on| n50
  n117 -->|Serves| n438
  n117 -->|Part of| n54
  n117 -->|Depends on| n142
  n117 -->|Depends on| n120
  n117 -->|Depends on| n165
  n117 -->|Depends on| n336
  n117 -->|Depends on| n182
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n289
  n118 -->|Serves| n445
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
  n118 -->|Depends on| n698
  n118 -->|Depends on| n700
  n118 -->|Depends on| n686
  n118 -->|Depends on| n680
  n118 -->|Depends on| n681
  n118 -->|Depends on| n678
  n118 -->|Depends on| n677
  n118 -->|Depends on| n689
  n118 -->|Depends on| n695
  n118 -->|Depends on| n697
  n118 -->|Depends on| n687
  n118 -->|Depends on| n50
  n118 -->|Depends on| n289
  n118 -->|Depends on| n41
  n118 -->|Depends on| n147
  n118 -->|Depends on| n123
  n118 -->|Depends on| n141
  n119 -->|Serves| n438
  n119 -->|Part of| n54
  n119 -->|Depends on| n142
  n119 -->|Depends on| n670
  n119 -->|Depends on| n120
  n119 -->|Depends on| n178
  n119 -->|Depends on| n111
  n119 -->|Depends on| n21
  n119 -->|Depends on| n39
  n119 -->|Depends on| n50
  n119 -->|Depends on| n289
  n120 -->|Serves| n438
  n120 -->|Depends on| n147
  n120 -->|Depends on| n163
  n120 -->|Depends on| n162
  n120 -->|Depends on| n175
  n120 -->|Depends on| n189
  n120 -->|Depends on| n177
  n120 -->|Depends on| n558
  n120 -->|Depends on| n50
  n120 -->|Depends on| n41
  n120 -->|Depends on| n17
  n120 -->|Depends on| n443
  n120 -->|Depends on| n437
  n120 -->|Depends on| n670
  n120 -->|Depends on| n668
  n120 -->|Depends on| n666
  n120 -->|Depends on| n289
  n120 -->|Depends on| n142
  n120 -->|Depends on| n184
  n121 -->|Serves| n445
  n121 -->|Part of| n54
  n121 -->|Depends on| n120
  n121 -->|Depends on| n177
  n121 -->|Depends on| n23
  n121 -->|Depends on| n50
  n121 -->|Depends on| n670
  n121 -->|Depends on| n668
  n121 -->|Depends on| n666
  n121 -->|Depends on| n289
  n122 -->|Serves| n639
  n122 -->|Part of| n54
  n122 -->|Depends on| n147
  n122 -->|Depends on| n120
  n122 -->|Depends on| n636
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n50
  n122 -->|Depends on| n289
  n123 -->|Serves| n445
  n123 -->|Depends on| n700
  n123 -->|Depends on| n686
  n123 -->|Depends on| n680
  n123 -->|Depends on| n681
  n123 -->|Depends on| n678
  n123 -->|Depends on| n677
  n123 -->|Depends on| n689
  n123 -->|Depends on| n695
  n123 -->|Depends on| n697
  n123 -->|Depends on| n683
  n123 -->|Depends on| n687
  n124 -->|Serves| n445
  n124 -->|Part of| n54
  n124 -->|Depends on| n120
  n124 -->|Depends on| n142
  n124 -->|Depends on| n182
  n124 -->|Depends on| n141
  n124 -->|Depends on| n21
  n124 -->|Depends on| n22
  n124 -->|Depends on| n39
  n124 -->|Depends on| n50
  n124 -->|Depends on| n289
  n125 -->|Serves| n445
  n125 -->|Part of| n54
  n125 -->|Depends on| n120
  n125 -->|Depends on| n142
  n125 -->|Depends on| n182
  n125 -->|Depends on| n178
  n125 -->|Depends on| n562
  n125 -->|Depends on| n247
  n125 -->|Depends on| n246
  n125 -->|Depends on| n197
  n125 -->|Depends on| n196
  n125 -->|Depends on| n21
  n125 -->|Depends on| n23
  n125 -->|Depends on| n22
  n125 -->|Depends on| n39
  n125 -->|Depends on| n25
  n125 -->|Depends on| n170
  n125 -->|Depends on| n698
  n125 -->|Depends on| n17
  n125 -->|Depends on| n50
  n125 -->|Depends on| n289
  n125 -->|Depends on| n288
  n125 -->|Depends on| n223
  n125 -->|Depends on| n697
  n125 -->|Depends on| n128
  n125 -->|Depends on| n147
  n126 -->|Serves| n438
  n126 -->|Depends on| n147
  n126 -->|Depends on| n140
  n126 -->|Depends on| n120
  n126 -->|Depends on| n189
  n126 -->|Depends on| n562
  n126 -->|Depends on| n580
  n126 -->|Depends on| n50
  n126 -->|Depends on| n289
  n127 -->|Serves| n438
  n127 -->|Part of| n54
  n127 -->|Depends on| n107
  n127 -->|Depends on| n41
  n128 -->|Serves| n639
  n128 -->|Part of| n54
  n128 -->|Depends on| n147
  n128 -->|Depends on| n120
  n128 -->|Depends on| n112
  n128 -->|Depends on| n161
  n128 -->|Depends on| n108
  n128 -->|Depends on| n636
  n128 -->|Depends on| n638
  n128 -->|Depends on| n639
  n128 -->|Depends on| n16
  n128 -->|Depends on| n152
  n128 -->|Depends on| n635
  n128 -->|Depends on| n41
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n50
  n128 -->|Depends on| n169
  n128 -->|Depends on| n289
  n129 -->|Serves| n438
  n129 -->|Part of| n54
  n129 -->|Depends on| n120
  n129 -->|Depends on| n126
  n130 -->|Serves| n445
  n130 -->|Part of| n54
  n130 -->|Depends on| n142
  n130 -->|Depends on| n120
  n130 -->|Depends on| n178
  n130 -->|Depends on| n562
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n50
  n130 -->|Depends on| n289
  n131 -->|Serves| n438
  n131 -->|Part of| n54
  n131 -->|Depends on| n120
  n131 -->|Depends on| n163
  n131 -->|Depends on| n189
  n131 -->|Depends on| n175
  n131 -->|Depends on| n50
  n131 -->|Depends on| n670
  n131 -->|Depends on| n668
  n131 -->|Depends on| n666
  n131 -->|Depends on| n289
  n132 -->|Serves| n445
  n132 -->|Part of| n54
  n132 -->|Depends on| n120
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n39
  n132 -->|Depends on| n319
  n132 -->|Depends on| n697
  n132 -->|Depends on| n41
  n132 -->|Depends on| n147
  n132 -->|Depends on| n50
  n132 -->|Depends on| n289
  n133 -->|Serves| n438
  n133 -->|Part of| n54
  n133 -->|Depends on| n147
  n133 -->|Depends on| n120
  n133 -->|Depends on| n126
  n133 -->|Depends on| n163
  n133 -->|Depends on| n189
  n133 -->|Depends on| n50
  n133 -->|Depends on| n289
  n134 -->|Serves| n445
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
  n134 -->|Depends on| n313
  n134 -->|Depends on| n140
  n134 -->|Depends on| n698
  n134 -->|Depends on| n50
  n134 -->|Depends on| n289
  n134 -->|Depends on| n41
  n134 -->|Depends on| n147
  n151 -->|Read in| n203
  n151 -->|Depends on| n202
  n151 -->|Depends on| n205
  n152 -->|Serves| n438
  n152 -->|Depends on| n31
  n152 -->|Depends on| n150
  n156 -->|Serves| n445
  n156 -->|Depends on| n297
  n157 -->|Serves| n445
  n157 -->|Applied by| n156
  n157 -->|Applied by| n297
  n159 -->|Serves| n445
  n159 -->|Depends on| n155
  n160 -->|Serves| n445
  n161 -->|Serves| n438
  n161 -->|Depends on| n147
  n161 -->|Depends on| n142
  n161 -->|Depends on| n39
  n161 -->|Depends on| n190
  n161 -->|Depends on| n40
  n161 -->|Depends on| n223
  n161 -->|Depends on| n290
  n161 -->|Depends on| n141
  n161 -->|Depends on| n698
  n162 -->|Serves| n438
  n162 -->|Depends on| n136
  n162 -->|Depends on| n181
  n162 -->|Depends on| n184
  n162 -->|Depends on| n40
  n162 -->|Depends on| n156
  n162 -->|Depends on| n138
  n162 -->|Depends on| n142
  n162 -->|Depends on| n305
  n162 -->|Depends on| n185
  n162 -->|Depends on| n159
  n163 -->|Serves| n438
  n163 -->|Depends on| n142
  n163 -->|Depends on| n443
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
  n163 -->|Depends on| n290
  n163 -->|Depends on| n171
  n163 -->|Depends on| n48
  n163 -->|Depends on| n169
  n163 -->|Depends on| n28
  n163 -->|Depends on| n141
  n164 -->|Serves| n438
  n165 -->|Serves| n438
  n165 -->|Depends on| n147
  n165 -->|Depends on| n17
  n165 -->|Depends on| n41
  n165 -->|Depends on| n300
  n166 -->|Serves| n438
  n166 -->|Depends on| n167
  n166 -->|Depends on| n147
  n166 -->|Depends on| n142
  n166 -->|Depends on| n50
  n166 -->|Depends on| n663
  n166 -->|Depends on| n17
  n166 -->|Depends on| n53
  n166 -->|Depends on| n436
  n166 -->|Depends on| n26
  n166 -->|Depends on| n21
  n166 -->|Depends on| n39
  n166 -->|Depends on| n182
  n166 -->|Depends on| n165
  n166 -->|Depends on| n168
  n166 -->|Depends on| n336
  n166 -->|Depends on| n572
  n166 -->|Depends on| n292
  n166 -->|Depends on| n297
  n166 -->|Depends on| n293
  n168 -->|Serves| n438
  n168 -->|Depends on| n156
  n168 -->|Depends on| n300
  n169 -->|Serves| n438
  n169 -->|Depends on| n142
  n169 -->|Depends on| n193
  n169 -->|Depends on| n698
  n169 -->|Depends on| n182
  n169 -->|Depends on| n21
  n169 -->|Depends on| n39
  n169 -->|Depends on| n25
  n169 -->|Depends on| n170
  n169 -->|Depends on| n140
  n171 -->|Serves| n438
  n172 -->|Serves| n438
  n173 -->|Serves| n438
  n173 -->|Depends on| n40
  n173 -->|Depends on| n145
  n173 -->|Depends on| n290
  n173 -->|Depends on| n299
  n173 -->|Depends on| n292
  n173 -->|Depends on| n156
  n173 -->|Depends on| n181
  n173 -->|Depends on| n184
  n173 -->|Depends on| n153
  n173 -->|Depends on| n172
  n173 -->|Depends on| n446
  n173 -->|Depends on| n142
  n173 -->|Depends on| n698
  n173 -->|Depends on| n319
  n173 -->|Depends on| n159
  n173 -->|Depends on| n160
  n173 -->|Depends on| n171
  n175 -->|Serves| n438
  n175 -->|Depends on| n27
  n175 -->|Depends on| n223
  n175 -->|Depends on| n143
  n175 -->|Depends on| n142
  n175 -->|Depends on| n440
  n175 -->|Depends on| n435
  n175 -->|Depends on| n172
  n175 -->|Depends on| n441
  n175 -->|Depends on| n442
  n175 -->|Depends on| n184
  n175 -->|Depends on| n21
  n175 -->|Depends on| n39
  n175 -->|Depends on| n182
  n175 -->|Depends on| n173
  n175 -->|Depends on| n40
  n175 -->|Depends on| n141
  n175 -->|Depends on| n298
  n175 -->|Depends on| n231
  n175 -->|Depends on| n225
  n175 -->|Depends on| n227
  n175 -->|Depends on| n242
  n175 -->|Depends on| n239
  n175 -->|Depends on| n237
  n175 -->|Depends on| n229
  n176 -->|Serves| n241
  n176 -->|Applied by| n175
  n176 -->|Applied by| n189
  n177 -->|Serves| n445
  n177 -->|Depends on| n142
  n177 -->|Depends on| n140
  n177 -->|Depends on| n184
  n177 -->|Depends on| n255
  n177 -->|Depends on| n21
  n177 -->|Depends on| n39
  n177 -->|Depends on| n40
  n177 -->|Depends on| n300
  n178 -->|Serves| n445
  n178 -->|Depends on| n140
  n178 -->|Depends on| n181
  n178 -->|Depends on| n40
  n178 -->|Depends on| n300
  n180 -->|Serves| n438
  n180 -->|Depends on| n142
  n180 -->|Depends on| n434
  n180 -->|Depends on| n179
  n180 -->|Depends on| n17
  n180 -->|Depends on| n178
  n180 -->|Depends on| n189
  n180 -->|Depends on| n297
  n181 -->|Serves| n438
  n181 -->|Depends on| n644
  n182 -->|Serves| n438
  n182 -->|Depends on| n142
  n182 -->|Depends on| n21
  n182 -->|Depends on| n39
  n182 -->|Depends on| n194
  n182 -->|Depends on| n40
  n182 -->|Depends on| n141
  n182 -->|Depends on| n698
  n183 -->|Serves| n438
  n183 -->|Implements| n28
  n183 -->|Depends on| n21
  n183 -->|Depends on| n39
  n183 -->|Depends on| n25
  n183 -->|Depends on| n174
  n183 -->|Depends on| n46
  n184 -->|Serves| n438
  n184 -->|Depends on| n145
  n184 -->|Depends on| n244
  n185 -->|Serves| n438
  n185 -->|Depends on| n289
  n186 -->|Serves| n438
  n186 -->|Depends on| n700
  n186 -->|Depends on| n184
  n186 -->|Depends on| n188
  n186 -->|Depends on| n55
  n186 -->|Depends on| n27
  n186 -->|Depends on| n46
  n186 -->|Depends on| n25
  n186 -->|Depends on| n39
  n186 -->|Depends on| n181
  n186 -->|Depends on| n137
  n186 -->|Depends on| n290
  n186 -->|Depends on| n699
  n186 -->|Depends on| n143
  n186 -->|Depends on| n40
  n187 -->|Serves| n445
  n187 -->|Applied by| n173
  n187 -->|Applied by| n189
  n189 -->|Serves| n438
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
  n189 -->|Depends on| n300
  n189 -->|Depends on| n305
  n189 -->|Depends on| n233
  n189 -->|Depends on| n225
  n189 -->|Depends on| n239
  n189 -->|Depends on| n235
  n190 -->|Serves| n438
  n190 -->|Depends on| n146
  n190 -->|Depends on| n145
  n190 -->|Depends on| n142
  n190 -->|Depends on| n39
  n190 -->|Depends on| n40
  n190 -->|Depends on| n223
  n190 -->|Depends on| n290
  n191 -->|Refines| n438
  n192 -->|Accepts| n191
  n196 -->|Serves| n438
  n196 -->|Depends on| n197
  n196 -->|Depends on| n700
  n196 -->|Depends on| n145
  n196 -->|Depends on| n680
  n196 -->|Depends on| n686
  n196 -->|Depends on| n684
  n196 -->|Depends on| n687
  n196 -->|Depends on| n681
  n196 -->|Depends on| n678
  n196 -->|Depends on| n677
  n196 -->|Depends on| n688
  n196 -->|Depends on| n695
  n196 -->|Depends on| n697
  n196 -->|Depends on| n683
  n198 -->|Read in| n203
  n199 -->|Read in| n203
  n200 -->|Read in| n203
  n201 -->|Read in| n203
  n202 -->|Read in| n203
  n203 -->|Queries written in| n643
  n203 -->|Read by| n652
  n203 -->|Uses| n308
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
  n213 -->|Queries written in| n643
  n213 -->|Read by| n652
  n213 -->|Uses| n311
  n214 -->|Read in| n213
  n214 -->|Depends on| n208
  n215 -->|Read in| n698
  n216 -->|Read in| n203
  n217 -->|Read in| n203
  n218 -->|Read in| n203
  n220 -->|Read in| n213
  n220 -->|Depends on| n210
  n221 -->|Read in| n203
  n222 -->|Read in| n213
  n222 -->|Depends on| n208
  n223 -->|Serves| n438
  n223 -->|Depends on| n652
  n223 -->|Depends on| n645
  n223 -->|Depends on| n698
  n223 -->|Depends on| n203
  n223 -->|Depends on| n701
  n223 -->|Depends on| n659
  n223 -->|Depends on| n660
  n223 -->|Depends on| n661
  n223 -->|Depends on| n31
  n223 -->|Depends on| n21
  n223 -->|Depends on| n39
  n223 -->|Depends on| n294
  n224 -->|Serves| n438
  n224 -->|Applied by| n223
  n224 -->|Applied by| n336
  n225 -->|Refines| n241
  n226 -->|Accepts| n225
  n227 -->|Refines| n241
  n228 -->|Accepts| n227
  n229 -->|Refines| n241
  n230 -->|Accepts| n229
  n231 -->|Refines| n241
  n232 -->|Accepts| n231
  n233 -->|Refines| n241
  n234 -->|Accepts| n233
  n235 -->|Refines| n241
  n236 -->|Accepts| n235
  n237 -->|Refines| n239
  n237 -->|Depends on| n239
  n238 -->|Accepts| n237
  n239 -->|Refines| n241
  n240 -->|Accepts| n239
  n242 -->|Refines| n241
  n243 -->|Accepts| n242
  n244 -->|Refines| n447
  n245 -->|Accepts| n244
  n247 -->|Refines| n447
  n248 -->|Accepts| n247
  n249 -->|Read in| n213
  n249 -->|Depends on| n210
  n250 -->|Defined by| n256
  n250 -->|Depends on| n256
  n251 -->|Defined by| n256
  n251 -->|Depends on| n256
  n252 -->|Defined by| n256
  n252 -->|Depends on| n256
  n253 -->|Defined by| n256
  n253 -->|Depends on| n256
  n253 -->|Depends on| n251
  n254 -->|Defined by| n256
  n254 -->|Depends on| n256
  n254 -->|Depends on| n250
  n255 -->|Defined by| n256
  n255 -->|Depends on| n256
  n255 -->|Depends on| n250
  n257 -->|Read in| n213
  n257 -->|Depends on| n214
  n257 -->|Depends on| n211
  n257 -->|Depends on| n210
  n257 -->|Depends on| n251
  n258 -->|Defined by| n256
  n258 -->|Depends on| n256
  n260 -->|Defined by| n256
  n260 -->|Depends on| n256
  n261 -->|Defined by| n256
  n261 -->|Depends on| n256
  n262 -->|Defined by| n256
  n262 -->|Depends on| n256
  n263 -->|Depends on| n142
  n264 -->|Read in| n213
  n264 -->|Depends on| n210
  n265 -->|Defined by| n256
  n265 -->|Depends on| n256
  n266 -->|Defined by| n259
  n266 -->|Depends on| n259
  n266 -->|Depends on| n269
  n266 -->|Depends on| n268
  n267 -->|Defined by| n259
  n267 -->|Depends on| n259
  n267 -->|Depends on| n256
  n268 -->|Defined by| n259
  n268 -->|Depends on| n259
  n269 -->|Defined by| n259
  n269 -->|Depends on| n259
  n269 -->|Depends on| n256
  n274 -->|Defined by| n280
  n274 -->|Depends on| n280
  n274 -->|Depends on| n286
  n275 -->|Defined by| n280
  n275 -->|Depends on| n280
  n276 -->|Defined by| n280
  n276 -->|Depends on| n280
  n277 -->|Defined by| n280
  n277 -->|Depends on| n280
  n278 -->|Defined by| n280
  n278 -->|Depends on| n280
  n278 -->|Depends on| n277
  n279 -->|Defined by| n280
  n279 -->|Depends on| n280
  n279 -->|Depends on| n277
  n281 -->|Defined by| n280
  n281 -->|Depends on| n280
  n282 -->|Defined by| n280
  n282 -->|Depends on| n280
  n282 -->|Depends on| n281
  n283 -->|Defined by| n280
  n283 -->|Depends on| n280
  n283 -->|Depends on| n281
  n284 -->|Defined by| n280
  n284 -->|Depends on| n280
  n284 -->|Depends on| n279
  n285 -->|Defined by| n280
  n285 -->|Depends on| n280
  n285 -->|Depends on| n286
  n286 -->|Defined by| n280
  n286 -->|Depends on| n280
  n287 -->|Defined by| n280
  n287 -->|Depends on| n280
  n287 -->|Depends on| n281
  n288 -->|Written in| n297
  n288 -->|Depends on| n297
  n289 -->|Written in| n297
  n289 -->|Depends on| n297
  n290 -->|Written in| n297
  n290 -->|Depends on| n297
  n290 -->|Depends on| n299
  n291 -->|Serves| n445
  n291 -->|Applied by| n290
  n291 -->|Applied by| n305
  n291 -->|Applied by| n293
  n291 -->|Applied by| n289
  n291 -->|Applied by| n304
  n291 -->|Applied by| n288
  n291 -->|Applied by| n301
  n291 -->|Applied by| n299
  n292 -->|Serves| n445
  n292 -->|Depends on| n297
  n293 -->|Written in| n297
  n293 -->|Depends on| n297
  n293 -->|Depends on| n299
  n294 -->|Written in| n297
  n295 -->|Written in| n297
  n296 -->|Written in| n297
  n298 -->|Written in| n297
  n299 -->|Serves| n445
  n299 -->|Depends on| n297
  n300 -->|Written in| n297
  n301 -->|Written in| n297
  n301 -->|Depends on| n297
  n302 -->|Written in| n297
  n303 -->|Written in| n297
  n304 -->|Written in| n297
  n304 -->|Depends on| n297
  n305 -->|Written in| n297
  n305 -->|Depends on| n297
  n306 -->|Written in| n297
  n307 -->|Serves| n445
  n313 -->|Serves| n445
  n315 -->|Serves| n445
  n319 -->|Serves| n445
  n321 -->|Defined by| n350
  n321 -->|Read in| n213
  n321 -->|Depends on| n350
  n321 -->|Depends on| n339
  n321 -->|Depends on| n210
  n322 -->|Defined by| n350
  n322 -->|Read in| n213
  n322 -->|Depends on| n350
  n322 -->|Depends on| n147
  n322 -->|Depends on| n329
  n322 -->|Depends on| n209
  n322 -->|Depends on| n210
  n323 -->|Defined by| n350
  n323 -->|Read in| n213
  n323 -->|Depends on| n350
  n323 -->|Depends on| n339
  n323 -->|Depends on| n210
  n324 -->|Defined by| n350
  n324 -->|Read in| n213
  n324 -->|Depends on| n350
  n324 -->|Depends on| n339
  n324 -->|Depends on| n209
  n324 -->|Depends on| n210
  n325 -->|Defined by| n350
  n325 -->|Read in| n213
  n325 -->|Depends on| n350
  n325 -->|Depends on| n339
  n325 -->|Depends on| n209
  n325 -->|Depends on| n210
  n325 -->|Depends on| n343
  n326 -->|Defined by| n350
  n326 -->|Read in| n213
  n326 -->|Depends on| n350
  n326 -->|Depends on| n339
  n326 -->|Depends on| n209
  n326 -->|Depends on| n210
  n327 -->|Defined by| n350
  n327 -->|Read in| n213
  n327 -->|Depends on| n350
  n327 -->|Depends on| n273
  n327 -->|Depends on| n1
  n327 -->|Depends on| n209
  n327 -->|Depends on| n210
  n327 -->|Depends on| n222
  n327 -->|Depends on| n219
  n328 -->|Read in| n213
  n328 -->|Depends on| n214
  n329 -->|Defined by| n350
  n329 -->|Read in| n213
  n329 -->|Depends on| n350
  n329 -->|Depends on| n7
  n329 -->|Depends on| n209
  n329 -->|Depends on| n210
  n329 -->|Depends on| n222
  n329 -->|Depends on| n204
  n331 -->|Defined by| n350
  n331 -->|Read in| n213
  n331 -->|Depends on| n350
  n331 -->|Depends on| n339
  n331 -->|Depends on| n209
  n331 -->|Depends on| n210
  n331 -->|Depends on| n321
  n331 -->|Depends on| n325
  n332 -->|Defined by| n350
  n332 -->|Read in| n203
  n332 -->|Depends on| n350
  n332 -->|Depends on| n217
  n332 -->|Depends on| n216
  n333 -->|Uses the variables of| n9
  n333 -->|Uses the variables of| n12
  n333 -->|Uses the variables of| n6
  n333 -->|Styles| n336
  n334 -->|Defined by| n350
  n334 -->|Read in| n213
  n334 -->|Depends on| n350
  n334 -->|Depends on| n339
  n334 -->|Depends on| n210
  n336 -->|Serves| n438
  n336 -->|Depends on| n337
  n336 -->|Depends on| n346
  n336 -->|Depends on| n7
  n336 -->|Depends on| n13
  n336 -->|Depends on| n4
  n336 -->|Depends on| n9
  n336 -->|Depends on| n8
  n336 -->|Depends on| n12
  n336 -->|Depends on| n5
  n336 -->|Depends on| n10
  n336 -->|Depends on| n3
  n336 -->|Depends on| n6
  n336 -->|Depends on| n45
  n336 -->|Depends on| n21
  n336 -->|Depends on| n16
  n336 -->|Depends on| n19
  n336 -->|Depends on| n344
  n336 -->|Depends on| n349
  n336 -->|Depends on| n347
  n336 -->|Depends on| n332
  n336 -->|Depends on| n328
  n336 -->|Depends on| n340
  n336 -->|Depends on| n338
  n336 -->|Depends on| n202
  n336 -->|Depends on| n201
  n336 -->|Depends on| n300
  n336 -->|Depends on| n297
  n336 -->|Depends on| n652
  n336 -->|Depends on| n213
  n336 -->|Depends on| n203
  n338 -->|Defined by| n350
  n338 -->|Read in| n213
  n338 -->|Depends on| n350
  n338 -->|Depends on| n206
  n338 -->|Depends on| n214
  n338 -->|Depends on| n211
  n338 -->|Depends on| n210
  n340 -->|Defined by| n350
  n340 -->|Read in| n213
  n340 -->|Depends on| n350
  n340 -->|Depends on| n220
  n340 -->|Depends on| n215
  n340 -->|Depends on| n685
  n340 -->|Depends on| n674
  n341 -->|Uses the variables of| n7
  n341 -->|Uses the variables of| n13
  n341 -->|Uses the variables of| n9
  n341 -->|Uses the variables of| n8
  n341 -->|Uses the variables of| n12
  n341 -->|Uses the variables of| n5
  n341 -->|Uses the variables of| n10
  n341 -->|Uses the variables of| n3
  n341 -->|Uses the variables of| n6
  n341 -->|Styles| n336
  n343 -->|Defined by| n350
  n343 -->|Read in| n213
  n343 -->|Depends on| n350
  n343 -->|Depends on| n342
  n343 -->|Depends on| n339
  n343 -->|Depends on| n209
  n343 -->|Depends on| n210
  n344 -->|Defined by| n350
  n344 -->|Read in| n213
  n344 -->|Depends on| n350
  n344 -->|Depends on| n209
  n344 -->|Depends on| n345
  n344 -->|Depends on| n331
  n344 -->|Depends on| n327
  n345 -->|Defined by| n350
  n345 -->|Read in| n213
  n345 -->|Depends on| n350
  n345 -->|Depends on| n209
  n345 -->|Depends on| n322
  n345 -->|Depends on| n323
  n345 -->|Depends on| n324
  n345 -->|Depends on| n334
  n345 -->|Depends on| n326
  n347 -->|Defined by| n350
  n347 -->|Read in| n203
  n347 -->|Depends on| n350
  n347 -->|Depends on| n202
  n347 -->|Depends on| n201
  n347 -->|Depends on| n204
  n347 -->|Depends on| n200
  n348 -->|Serves| n445
  n348 -->|Applied by| n341
  n348 -->|Applied by| n333
  n348 -->|Applied by| n349
  n348 -->|Applied by| n332
  n348 -->|Applied by| n336
  n349 -->|Defined by| n350
  n349 -->|Read in| n203
  n349 -->|Depends on| n350
  n349 -->|Depends on| n202
  n349 -->|Depends on| n217
  n349 -->|Depends on| n216
  n349 -->|Depends on| n199
  n349 -->|Depends on| n218
  n349 -->|Depends on| n205
  n349 -->|Depends on| n201
  n351 -->|Chooses| n364
  n351 -->|In| n30
  n351 -->|In| n52
  n351 -->|Serves| n439
  n352 -->|Chooses| n391
  n352 -->|In| n30
  n352 -->|In| n52
  n352 -->|Serves| n439
  n353 -->|Implements| n21
  n354 -->|Implements| n22
  n355 -->|Implements| n23
  n357 -->|Chooses| n402
  n357 -->|Chooses| n390
  n357 -->|In| n30
  n357 -->|In| n52
  n357 -->|Serves| n439
  n358 -->|Implements| n16
  n358 -->|Uses| n309
  n359 -->|Chooses| n358
  n359 -->|In| n30
  n359 -->|In| n52
  n359 -->|Serves| n439
  n360 -->|Implements| n41
  n360 -->|Implements| n43
  n360 -->|Implements| n42
  n360 -->|Depends on| n361
  n360 -->|Depends on| n39
  n360 -->|Depends on| n147
  n360 -->|Depends on| n302
  n362 -->|Chooses| n369
  n362 -->|Chooses| n384
  n362 -->|In| n52
  n362 -->|Serves| n439
  n363 -->|Chooses| n372
  n363 -->|Chooses| n398
  n363 -->|Chooses| n385
  n363 -->|Chooses| n360
  n363 -->|Chooses| n370
  n363 -->|In| n52
  n363 -->|Serves| n439
  n364 -->|Implements| n14
  n364 -->|Depends on| n21
  n364 -->|Depends on| n23
  n364 -->|Depends on| n700
  n364 -->|Depends on| n680
  n364 -->|Depends on| n681
  n364 -->|Depends on| n678
  n364 -->|Depends on| n677
  n364 -->|Depends on| n689
  n364 -->|Depends on| n695
  n364 -->|Depends on| n697
  n364 -->|Depends on| n683
  n364 -->|Depends on| n687
  n366 -->|Depends on| n22
  n366 -->|Depends on| n23
  n366 -->|Depends on| n21
  n366 -->|Depends on| n39
  n367 -->|Depends on| n22
  n367 -->|Depends on| n23
  n367 -->|Depends on| n21
  n367 -->|Depends on| n39
  n367 -->|Depends on| n368
  n367 -->|Depends on| n142
  n369 -->|Implements| n21
  n369 -->|Implements| n23
  n369 -->|Implements| n22
  n369 -->|Implements| n56
  n369 -->|Depends on| n39
  n369 -->|Depends on| n371
  n369 -->|Depends on| n302
  n370 -->|Implements| n26
  n370 -->|Implements| n47
  n370 -->|Depends on| n302
  n372 -->|Implements| n50
  n372 -->|Implements| n51
  n372 -->|Depends on| n365
  n372 -->|Depends on| n302
  n373 -->|Implements| n18
  n373 -->|Depends on| n50
  n373 -->|Depends on| n147
  n373 -->|Depends on| n302
  n374 -->|Implements| n19
  n374 -->|Depends on| n335
  n375 -->|Implements| n25
  n376 -->|Implements| n26
  n377 -->|Chooses| n353
  n377 -->|Chooses| n355
  n377 -->|Chooses| n354
  n377 -->|Chooses| n380
  n377 -->|Chooses| n381
  n377 -->|Chooses| n382
  n377 -->|Chooses| n399
  n377 -->|Chooses| n387
  n377 -->|Chooses| n386
  n377 -->|Chooses| n376
  n377 -->|In| n30
  n377 -->|Serves| n439
  n378 -->|Implements| n39
  n379 -->|Chooses| n378
  n379 -->|Chooses| n375
  n379 -->|Chooses| n374
  n379 -->|Chooses| n383
  n379 -->|Chooses| n373
  n379 -->|Chooses| n392
  n379 -->|In| n30
  n379 -->|In| n52
  n379 -->|Serves| n439
  n380 -->|Implements| n41
  n380 -->|Depends on| n406
  n381 -->|Implements| n43
  n381 -->|Depends on| n406
  n382 -->|Implements| n50
  n382 -->|Depends on| n302
  n383 -->|Implements| n53
  n384 -->|Implements| n33
  n384 -->|Depends on| n23
  n384 -->|Depends on| n39
  n384 -->|Depends on| n142
  n384 -->|Depends on| n313
  n385 -->|Implements| n34
  n386 -->|Implements| n33
  n387 -->|Implements| n34
  n387 -->|Depends on| n156
  n388 -->|Depends on| n366
  n388 -->|Depends on| n367
  n389 -->|Chooses| n388
  n389 -->|In| n30
  n389 -->|In| n52
  n389 -->|Serves| n439
  n390 -->|Implements| n45
  n390 -->|Depends on| n356
  n390 -->|Depends on| n142
  n390 -->|Depends on| n193
  n390 -->|Depends on| n698
  n391 -->|Implements| n55
  n391 -->|Uses| n318
  n391 -->|Uses| n312
  n392 -->|Implements| n27
  n393 -->|Chooses| n183
  n393 -->|In| n30
  n393 -->|In| n52
  n393 -->|Serves| n439
  n394 -->|Implements| n46
  n395 -->|Chooses| n394
  n395 -->|In| n52
  n395 -->|Serves| n439
  n396 -->|Chooses| n397
  n396 -->|In| n30
  n396 -->|Serves| n439
  n397 -->|Implements| n46
  n397 -->|Depends on| n142
  n397 -->|Depends on| n356
  n397 -->|Depends on| n169
  n397 -->|Depends on| n174
  n398 -->|Implements| n17
  n398 -->|Depends on| n400
  n398 -->|Depends on| n401
  n399 -->|Implements| n17
  n399 -->|Depends on| n148
  n402 -->|Implements| n40
  n402 -->|Depends on| n356
  n403 -->|Chooses| n407
  n403 -->|In| n30
  n403 -->|In| n52
  n403 -->|Serves| n439
  n404 -->|Implements| n31
  n404 -->|Uses| n316
  n404 -->|Depends on| n40
  n404 -->|Depends on| n141
  n404 -->|Depends on| n698
  n405 -->|Chooses| n404
  n405 -->|In| n30
  n405 -->|In| n52
  n405 -->|Serves| n439
  n407 -->|Implements| n49
  n407 -->|Uses| n320
  n407 -->|Depends on| n302
  n408 -->|Serves| n445
  n408 -->|Applied by| n163
  n408 -->|Applied by| n175
  n409 -->|Serves| n445
  n409 -->|Applied by| n171
  n409 -->|Applied by| n173
  n410 -->|Serves| n438
  n410 -->|Applied by| n112
  n410 -->|Applied by| n151
  n411 -->|Serves| n438
  n411 -->|Applied by| n54
  n411 -->|Applied by| n44
  n411 -->|Applied by| n32
  n411 -->|Applied by| n29
  n412 -->|Serves| n445
  n412 -->|Applied by| n163
  n412 -->|Applied by| n652
  n413 -->|Serves| n438
  n413 -->|Applied by| n104
  n413 -->|Applied by| n191
  n413 -->|Applied by| n585
  n413 -->|Applied by| n591
  n414 -->|Serves| n438
  n414 -->|Applied by| n186
  n414 -->|Applied by| n55
  n414 -->|Applied by| n698
  n414 -->|Applied by| n137
  n415 -->|Serves| n438
  n415 -->|Applied by| n163
  n415 -->|Applied by| n110
  n416 -->|Serves| n445
  n416 -->|Applied by| n177
  n416 -->|Applied by| n121
  n417 -->|Serves| n445
  n417 -->|Applied by| n163
  n417 -->|Applied by| n162
  n417 -->|Applied by| n180
  n417 -->|Applied by| n186
  n417 -->|Applied by| n175
  n418 -->|Serves| n447
  n418 -->|Applied by| n182
  n418 -->|Applied by| n163
  n418 -->|Applied by| n162
  n418 -->|Applied by| n184
  n418 -->|Applied by| n244
  n418 -->|Applied by| n104
  n419 -->|Serves| n447
  n419 -->|Applied by| n182
  n419 -->|Applied by| n175
  n419 -->|Applied by| n134
  n419 -->|Applied by| n125
  n419 -->|Applied by| n247
  n419 -->|Applied by| n246
  n420 -->|Serves| n445
  n420 -->|Applied by| n645
  n420 -->|Applied by| n223
  n420 -->|Applied by| n163
  n420 -->|Applied by| n29
  n420 -->|Applied by| n32
  n421 -->|Serves| n438
  n421 -->|Applied by| n175
  n421 -->|Applied by| n163
  n421 -->|Applied by| n182
  n422 -->|Serves| n445
  n422 -->|Applied by| n163
  n422 -->|Applied by| n652
  n423 -->|Serves| n445
  n423 -->|Applied by| n110
  n423 -->|Applied by| n130
  n423 -->|Applied by| n178
  n423 -->|Applied by| n336
  n423 -->|Applied by| n161
  n424 -->|Serves| n438
  n424 -->|Applied by| n162
  n424 -->|Applied by| n173
  n424 -->|Applied by| n189
  n424 -->|Applied by| n44
  n425 -->|Serves| n447
  n425 -->|Applied by| n182
  n425 -->|Applied by| n134
  n425 -->|Applied by| n388
  n425 -->|Applied by| n104
  n425 -->|Applied by| n175
  n425 -->|Applied by| n118
  n426 -->|Serves| n438
  n426 -->|Applied by| n40
  n426 -->|Applied by| n143
  n426 -->|Applied by| n139
  n426 -->|Applied by| n175
  n427 -->|Serves| n438
  n427 -->|Applied by| n128
  n427 -->|Applied by| n122
  n427 -->|Applied by| n636
  n427 -->|Applied by| n641
  n427 -->|Applied by| n639
  n427 -->|Applied by| n615
  n427 -->|Applied by| n598
  n428 -->|Serves| n439
  n428 -->|Applied by| n379
  n428 -->|Applied by| n377
  n428 -->|Applied by| n363
  n428 -->|Applied by| n359
  n428 -->|Applied by| n403
  n428 -->|Applied by| n405
  n428 -->|Applied by| n352
  n428 -->|Applied by| n357
  n428 -->|Applied by| n559
  n428 -->|Applied by| n560
  n428 -->|Applied by| n579
  n428 -->|Applied by| n578
  n428 -->|Applied by| n571
  n428 -->|Applied by| n570
  n429 -->|Serves| n438
  n429 -->|Applied by| n104
  n429 -->|Applied by| n191
  n429 -->|Applied by| n586
  n429 -->|Applied by| n585
  n429 -->|Applied by| n592
  n430 -->|Serves| n438
  n430 -->|Applied by| n163
  n430 -->|Applied by| n190
  n431 -->|Serves| n438
  n431 -->|Applied by| n175
  n431 -->|Applied by| n592
  n432 -->|Serves| n438
  n432 -->|Applied by| n175
  n432 -->|Applied by| n189
  n432 -->|Applied by| n182
  n433 -->|Serves| n445
  n433 -->|Applied by| n652
  n433 -->|Applied by| n645
  n433 -->|Applied by| n290
  n433 -->|Applied by| n294
  n433 -->|Applied by| n298
  n433 -->|Applied by| n305
  n433 -->|Applied by| n300
  n433 -->|Applied by| n293
  n433 -->|Applied by| n289
  n433 -->|Applied by| n288
  n433 -->|Applied by| n303
  n433 -->|Applied by| n302
  n433 -->|Applied by| n304
  n443 -->|Refines| n438
  n444 -->|Accepts| n443
  n448 -->|Releases| n54
  n449 -->|Releases| n54
  n449 -->|Assembled by| n547
  n450 -->|Releases| n54
  n450 -->|Assembled by| n557
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
  n459 -->|Assembled by| n458
  n460 -->|Releases| n54
  n460 -->|Assembled by| n449
  n461 -->|Releases| n54
  n461 -->|Assembled by| n459
  n462 -->|Releases| n54
  n462 -->|Assembled by| n460
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
  n470 -->|Assembled by| n448
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
  n547 -->|Releases| n54
  n547 -->|Assembled by| n536
  n548 -->|Releases| n54
  n548 -->|Assembled by| n546
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
  n554 -->|Assembled by| n553
  n555 -->|Releases| n54
  n555 -->|Assembled by| n554
  n556 -->|Releases| n54
  n556 -->|Assembled by| n555
  n557 -->|Releases| n54
  n557 -->|Assembled by| n556
  n558 -->|Serves| n438
  n558 -->|Depends on| n145
  n558 -->|Depends on| n575
  n558 -->|Depends on| n292
  n558 -->|Depends on| n299
  n558 -->|Depends on| n303
  n558 -->|Depends on| n159
  n559 -->|Chooses| n565
  n559 -->|In| n30
  n559 -->|In| n52
  n559 -->|Serves| n439
  n560 -->|Chooses| n567
  n560 -->|In| n30
  n560 -->|In| n52
  n560 -->|Serves| n439
  n562 -->|Serves| n438
  n562 -->|Depends on| n558
  n562 -->|Depends on| n563
  n562 -->|Depends on| n303
  n564 -->|Serves| n438
  n564 -->|Implements| n573
  n564 -->|Depends on| n569
  n564 -->|Depends on| n271
  n564 -->|Depends on| n350
  n564 -->|Depends on| n210
  n564 -->|Depends on| n212
  n564 -->|Depends on| n207
  n564 -->|Depends on| n156
  n564 -->|Depends on| n575
  n564 -->|Depends on| n303
  n565 -->|Serves| n438
  n565 -->|Implements| n563
  n565 -->|Depends on| n561
  n565 -->|Depends on| n158
  n565 -->|Depends on| n156
  n565 -->|Depends on| n253
  n565 -->|Depends on| n260
  n565 -->|Depends on| n262
  n565 -->|Depends on| n252
  n565 -->|Depends on| n254
  n565 -->|Depends on| n258
  n565 -->|Depends on| n265
  n565 -->|Depends on| n255
  n565 -->|Depends on| n261
  n565 -->|Depends on| n263
  n565 -->|Depends on| n267
  n565 -->|Depends on| n266
  n565 -->|Depends on| n249
  n565 -->|Depends on| n257
  n565 -->|Depends on| n303
  n566 -->|Serves| n438
  n566 -->|Applied by| n562
  n566 -->|Applied by| n580
  n566 -->|Applied by| n572
  n566 -->|Applied by| n558
  n566 -->|Applied by| n44
  n567 -->|Serves| n438
  n567 -->|Implements| n561
  n567 -->|Depends on| n280
  n567 -->|Depends on| n154
  n567 -->|Depends on| n7
  n567 -->|Depends on| n264
  n567 -->|Depends on| n275
  n567 -->|Depends on| n283
  n567 -->|Depends on| n287
  n567 -->|Depends on| n282
  n567 -->|Depends on| n274
  n567 -->|Depends on| n285
  n567 -->|Depends on| n276
  n567 -->|Depends on| n278
  n567 -->|Depends on| n279
  n567 -->|Depends on| n284
  n567 -->|Depends on| n292
  n567 -->|Depends on| n303
  n568 -->|Serves| n439
  n568 -->|Applied by| n562
  n568 -->|Applied by| n580
  n568 -->|Applied by| n572
  n568 -->|Applied by| n559
  n568 -->|Applied by| n560
  n568 -->|Applied by| n579
  n568 -->|Applied by| n578
  n568 -->|Applied by| n571
  n568 -->|Applied by| n570
  n570 -->|Chooses| n576
  n570 -->|In| n30
  n570 -->|In| n52
  n570 -->|Serves| n439
  n571 -->|Chooses| n564
  n571 -->|In| n30
  n571 -->|In| n52
  n571 -->|Serves| n439
  n572 -->|Serves| n438
  n572 -->|Depends on| n558
  n572 -->|Depends on| n573
  n572 -->|Depends on| n303
  n574 -->|Serves| n438
  n574 -->|Implements| n581
  n574 -->|Depends on| n577
  n574 -->|Depends on| n670
  n574 -->|Depends on| n668
  n574 -->|Depends on| n156
  n574 -->|Depends on| n666
  n574 -->|Depends on| n664
  n574 -->|Depends on| n665
  n574 -->|Depends on| n663
  n574 -->|Depends on| n669
  n574 -->|Depends on| n303
  n576 -->|Serves| n438
  n576 -->|Implements| n569
  n576 -->|Depends on| n271
  n576 -->|Depends on| n273
  n576 -->|Depends on| n350
  n576 -->|Depends on| n1
  n576 -->|Depends on| n11
  n576 -->|Depends on| n2
  n576 -->|Depends on| n210
  n576 -->|Depends on| n222
  n576 -->|Depends on| n219
  n576 -->|Depends on| n201
  n576 -->|Depends on| n207
  n576 -->|Depends on| n558
  n576 -->|Depends on| n292
  n576 -->|Depends on| n301
  n576 -->|Depends on| n303
  n576 -->|Depends on| n156
  n578 -->|Chooses| n582
  n578 -->|In| n30
  n578 -->|In| n52
  n578 -->|Serves| n439
  n579 -->|Chooses| n574
  n579 -->|In| n30
  n579 -->|In| n52
  n579 -->|Serves| n439
  n580 -->|Serves| n438
  n580 -->|Depends on| n558
  n580 -->|Depends on| n581
  n580 -->|Depends on| n303
  n582 -->|Serves| n438
  n582 -->|Implements| n577
  n582 -->|Depends on| n558
  n582 -->|Depends on| n668
  n582 -->|Depends on| n156
  n582 -->|Depends on| n666
  n582 -->|Depends on| n664
  n582 -->|Depends on| n671
  n582 -->|Depends on| n667
  n582 -->|Depends on| n292
  n582 -->|Depends on| n303
  n583 -->|Verifies| n163
  n583 -->|Verifies| n190
  n583 -->|Verifies| n161
  n583 -->|Verifies| n701
  n583 -->|In| n52
  n583 -->|Depends on| n163
  n583 -->|Depends on| n41
  n583 -->|Depends on| n161
  n583 -->|Depends on| n139
  n583 -->|Depends on| n584
  n583 -->|Depends on| n304
  n585 -->|Verifies| n110
  n585 -->|Verifies| n120
  n585 -->|Verifies| n162
  n585 -->|Verifies| n189
  n585 -->|Verifies| n562
  n585 -->|Verifies| n558
  n585 -->|Verifies| n565
  n585 -->|Verifies| n567
  n585 -->|Verifies| n178
  n585 -->|Verifies| n177
  n585 -->|Verifies| n369
  n585 -->|Verifies| n372
  n585 -->|Verifies| n398
  n585 -->|In| n52
  n585 -->|Depends on| n110
  n585 -->|Depends on| n591
  n585 -->|Depends on| n56
  n585 -->|Depends on| n51
  n585 -->|Depends on| n142
  n585 -->|Depends on| n21
  n585 -->|Depends on| n39
  n585 -->|Depends on| n41
  n585 -->|Depends on| n147
  n585 -->|Depends on| n289
  n585 -->|Depends on| n304
  n586 -->|Verifies| n163
  n586 -->|Verifies| n182
  n586 -->|Verifies| n186
  n586 -->|Verifies| n190
  n586 -->|Verifies| n173
  n586 -->|Verifies| n391
  n586 -->|Verifies| n404
  n586 -->|Verifies| n402
  n586 -->|Verifies| n369
  n586 -->|Verifies| n378
  n586 -->|Verifies| n360
  n586 -->|Verifies| n392
  n586 -->|In| n52
  n586 -->|Depends on| n163
  n586 -->|Depends on| n41
  n586 -->|Depends on| n17
  n586 -->|Depends on| n590
  n586 -->|Depends on| n304
  n587 -->|Verifies| n292
  n587 -->|Verifies| n299
  n587 -->|Verifies| n159
  n587 -->|Verifies| n160
  n587 -->|Verifies| n156
  n587 -->|Verifies| n319
  n587 -->|In| n52
  n587 -->|Depends on| n292
  n587 -->|Depends on| n299
  n587 -->|Depends on| n159
  n587 -->|Depends on| n160
  n587 -->|Depends on| n156
  n587 -->|Depends on| n297
  n587 -->|Depends on| n319
  n587 -->|Depends on| n588
  n587 -->|Depends on| n304
  n589 -->|Verifies| n164
  n589 -->|Verifies| n172
  n589 -->|Verifies| n171
  n589 -->|Verifies| n184
  n589 -->|Verifies| n181
  n589 -->|In| n52
  n589 -->|Depends on| n164
  n589 -->|Depends on| n172
  n589 -->|Depends on| n171
  n589 -->|Depends on| n184
  n589 -->|Depends on| n181
  n589 -->|Depends on| n593
  n589 -->|Depends on| n304
  n592 -->|Verifies| n175
  n592 -->|In| n52
  n592 -->|Depends on| n175
  n592 -->|Depends on| n163
  n592 -->|Depends on| n41
  n592 -->|Depends on| n17
  n592 -->|Depends on| n304
  n594 -->|Serves| n438
  n594 -->|Part of| n633
  n594 -->|Depends on| n632
  n594 -->|Depends on| n612
  n594 -->|Depends on| n628
  n595 -->|Serves| n438
  n596 -->|Serves| n438
  n597 -->|Serves| n438
  n598 -->|Checks| n601
  n598 -->|Run by| n131
  n598 -->|Signed by| n613
  n599 -->|Checks| n601
  n599 -->|Run by| n114
  n599 -->|Signed by| n613
  n599 -->|Verifies| n353
  n599 -->|Verifies| n355
  n599 -->|Verifies| n354
  n599 -->|Verifies| n380
  n599 -->|Verifies| n381
  n599 -->|Verifies| n382
  n599 -->|Verifies| n399
  n599 -->|Verifies| n387
  n599 -->|Verifies| n386
  n599 -->|Verifies| n376
  n599 -->|Verifies| n397
  n600 -->|Serves| n438
  n601 -->|Produced by| n54
  n602 -->|Serves| n438
  n603 -->|Serves| n438
  n604 -->|Its obligations| n603
  n604 -->|Its obligations| n611
  n604 -->|Its obligations| n595
  n604 -->|Its obligations| n597
  n604 -->|Its obligations| n596
  n604 -->|Its obligations| n602
  n604 -->|Its obligations| n600
  n605 -->|Produced by| n117
  n605 -->|Carries| n36
  n607 -->|Checks| n605
  n607 -->|Run by| n617
  n607 -->|Signed by| n613
  n607 -->|Verifies| n63
  n607 -->|Verifies| n62
  n607 -->|Verifies| n61
  n607 -->|Verifies| n60
  n607 -->|Verifies| n59
  n607 -->|Verifies| n57
  n607 -->|Verifies| n58
  n609 -->|Serves| n438
  n609 -->|Depends on| n339
  n609 -->|Depends on| n271
  n609 -->|Depends on| n199
  n610 -->|Ships| n631
  n610 -->|Programs assembled for| n30
  n610 -->|Follows the policy| n614
  n611 -->|Serves| n438
  n614 -->|Its obligations| n603
  n614 -->|Its obligations| n596
  n615 -->|Ships| n601
  n615 -->|Ships| n618
  n615 -->|Ships| n605
  n615 -->|Deployed by| n104
  n615 -->|Programs assembled for| n30
  n615 -->|Follows the policy| n604
  n616 -->|Verifies| n617
  n616 -->|Verifies| n609
  n616 -->|In| n52
  n616 -->|Depends on| n617
  n616 -->|Depends on| n605
  n616 -->|Depends on| n609
  n616 -->|Depends on| n628
  n616 -->|Depends on| n608
  n616 -->|Depends on| n304
  n617 -->|Serves| n438
  n617 -->|Part of| n633
  n617 -->|Depends on| n605
  n617 -->|Depends on| n297
  n617 -->|Depends on| n609
  n617 -->|Depends on| n606
  n617 -->|Depends on| n628
  n618 -->|Produced by| n36
  n618 -->|Assembled for| n15
  n620 -->|Runs elsewhere| n610
  n620 -->|Its writer's settings| n619
  n621 -->|Serves| n438
  n621 -->|Part of| n633
  n621 -->|Depends on| n632
  n621 -->|Depends on| n612
  n621 -->|Depends on| n628
  n622 -->|Run by| n621
  n622 -->|Signed by| n613
  n624 -->|Requires| n622
  n624 -->|Deployed by| n594
  n624 -->|Programs assembled for| n30
  n624 -->|Follows the policy| n629
  n625 -->|Ships| n620
  n626 -->|In| n52
  n627 -->|In| n30
  n628 -->|Written in| n297
  n629 -->|Its obligations| n603
  n629 -->|Its obligations| n596
  n629 -->|Its obligations| n600
  n630 -->|Verifies| n621
  n630 -->|Verifies| n594
  n630 -->|In| n52
  n630 -->|Depends on| n621
  n630 -->|Depends on| n594
  n630 -->|Depends on| n632
  n630 -->|Depends on| n612
  n630 -->|Depends on| n623
  n630 -->|Depends on| n628
  n630 -->|Depends on| n304
  n633 -->|Deployed in| n30
  n634 -->|Implements| n48
  n634 -->|Depends on| n25
  n636 -->|Serves| n438
  n636 -->|Depends on| n142
  n636 -->|Depends on| n641
  n636 -->|Depends on| n21
  n636 -->|Depends on| n39
  n636 -->|Depends on| n25
  n636 -->|Depends on| n140
  n636 -->|Depends on| n171
  n636 -->|Depends on| n48
  n637 -->|Chooses| n634
  n637 -->|In| n30
  n637 -->|In| n52
  n637 -->|Serves| n438
  n638 -->|Serves| n438
  n638 -->|Depends on| n147
  n638 -->|Depends on| n182
  n638 -->|Depends on| n142
  n638 -->|Depends on| n194
  n638 -->|Depends on| n21
  n638 -->|Depends on| n39
  n639 -->|Refines| n438
  n640 -->|Accepts| n639
  n645 -->|Serves| n438
  n645 -->|Depends on| n143
  n645 -->|Depends on| n294
  n649 -->|Written in| n297
  n650 -->|Serves| n438
  n650 -->|Applied by| n652
  n650 -->|Applied by| n49
  n651 -->|Serves| n438
  n651 -->|Applied by| n652
  n651 -->|Applied by| n645
  n651 -->|Applied by| n49
  n652 -->|Serves| n438
  n652 -->|Serves| n445
  n652 -->|Depends on| n49
  n652 -->|Depends on| n646
  n652 -->|Depends on| n649
  n652 -->|Depends on| n647
  n652 -->|Depends on| n648
  n652 -->|Depends on| n642
  n652 -->|Depends on| n21
  n652 -->|Depends on| n27
  n652 -->|Depends on| n46
  n652 -->|Depends on| n142
  n652 -->|Depends on| n39
  n652 -->|Depends on| n25
  n653 -->|Defined by| n656
  n653 -->|Read in| n659
  n653 -->|Depends on| n656
  n654 -->|Defined by| n656
  n654 -->|Read in| n659
  n654 -->|Depends on| n656
  n655 -->|Defined by| n656
  n655 -->|Read in| n659
  n655 -->|Depends on| n656
  n655 -->|Depends on| n659
  n657 -->|Defined by| n656
  n657 -->|Read in| n659
  n657 -->|Depends on| n656
  n657 -->|Depends on| n655
  n658 -->|Defined by| n656
  n658 -->|Read in| n659
  n658 -->|Depends on| n656
  n658 -->|Depends on| n660
  n658 -->|Depends on| n655
  n659 -->|Defined by| n656
  n659 -->|Queries written in| n643
  n659 -->|Read by| n652
  n659 -->|Uses| n310
  n661 -->|Serves| n438
  n661 -->|Depends on| n656
  n661 -->|Depends on| n660
  n661 -->|Depends on| n142
  n661 -->|Depends on| n654
  n661 -->|Depends on| n655
  n661 -->|Depends on| n657
  n661 -->|Depends on| n653
  n661 -->|Depends on| n658
  n661 -->|Depends on| n39
  n661 -->|Depends on| n40
  n661 -->|Depends on| n292
  n661 -->|Depends on| n294
  n663 -->|Defined by| n670
  n663 -->|Depends on| n670
  n664 -->|Defined by| n670
  n664 -->|Depends on| n670
  n664 -->|Depends on| n666
  n664 -->|Depends on| n668
  n665 -->|Defined by| n670
  n665 -->|Depends on| n670
  n666 -->|Defined by| n670
  n666 -->|Depends on| n670
  n666 -->|Depends on| n668
  n667 -->|Defined by| n670
  n667 -->|Depends on| n670
  n667 -->|Depends on| n662
  n669 -->|Defined by| n670
  n669 -->|Depends on| n670
  n671 -->|Defined by| n670
  n671 -->|Depends on| n670
  n671 -->|Depends on| n662
  n672 -->|Defined by| n700
  n672 -->|Read in| n698
  n672 -->|Depends on| n700
  n673 -->|Defined by| n700
  n673 -->|Read in| n698
  n673 -->|Depends on| n700
  n674 -->|Defined by| n700
  n674 -->|Read in| n698
  n674 -->|Depends on| n700
  n675 -->|Defined by| n700
  n675 -->|Read in| n698
  n675 -->|Depends on| n700
  n676 -->|Defined by| n700
  n676 -->|Read in| n698
  n676 -->|Depends on| n700
  n677 -->|Defined by| n700
  n677 -->|Read in| n698
  n677 -->|Depends on| n700
  n678 -->|Defined by| n700
  n678 -->|Read in| n698
  n678 -->|Depends on| n700
  n679 -->|Defined by| n700
  n679 -->|Read in| n698
  n679 -->|Depends on| n700
  n679 -->|Depends on| n697
  n680 -->|Defined by| n700
  n680 -->|Read in| n698
  n680 -->|Depends on| n700
  n681 -->|Defined by| n700
  n681 -->|Read in| n698
  n681 -->|Depends on| n700
  n682 -->|Defined by| n700
  n682 -->|Read in| n698
  n682 -->|Depends on| n700
  n683 -->|Defined by| n700
  n683 -->|Read in| n698
  n683 -->|Depends on| n700
  n684 -->|Defined by| n700
  n684 -->|Read in| n698
  n684 -->|Depends on| n700
  n685 -->|Defined by| n700
  n685 -->|Read in| n698
  n685 -->|Depends on| n700
  n686 -->|Defined by| n700
  n686 -->|Read in| n698
  n686 -->|Depends on| n700
  n687 -->|Defined by| n700
  n687 -->|Read in| n698
  n687 -->|Depends on| n700
  n687 -->|Depends on| n697
  n688 -->|Defined by| n700
  n688 -->|Read in| n698
  n688 -->|Depends on| n700
  n689 -->|Defined by| n700
  n689 -->|Read in| n698
  n689 -->|Depends on| n700
  n690 -->|Defined by| n700
  n690 -->|Read in| n698
  n690 -->|Depends on| n700
  n691 -->|Defined by| n700
  n691 -->|Read in| n698
  n691 -->|Depends on| n700
  n692 -->|Defined by| n700
  n692 -->|Read in| n698
  n692 -->|Depends on| n700
  n693 -->|Defined by| n700
  n693 -->|Read in| n698
  n693 -->|Depends on| n700
  n695 -->|Defined by| n700
  n695 -->|Read in| n698
  n695 -->|Depends on| n700
  n695 -->|Depends on| n697
  n696 -->|Defined by| n700
  n696 -->|Read in| n698
  n696 -->|Depends on| n700
  n697 -->|Defined by| n700
  n697 -->|Read in| n698
  n697 -->|Depends on| n700
  n698 -->|Queries written in| n643
  n698 -->|Read by| n652
  n698 -->|Watches the globals| n703
  n698 -->|Uses| n317
  n699 -->|Serves| n438
  n701 -->|Serves| n438
  n701 -->|Depends on| n698
  n701 -->|Depends on| n700
  n701 -->|Depends on| n139
  n701 -->|Depends on| n694
  n701 -->|Depends on| n146
  n701 -->|Depends on| n145
  n701 -->|Depends on| n684
  n701 -->|Depends on| n697
  n701 -->|Depends on| n685
  n701 -->|Depends on| n691
  n701 -->|Depends on| n677
  n701 -->|Depends on| n676
  n701 -->|Depends on| n693
  n701 -->|Depends on| n695
  n701 -->|Depends on| n689
  n701 -->|Depends on| n672
  n701 -->|Depends on| n678
  n701 -->|Depends on| n687
  n701 -->|Depends on| n679
  n701 -->|Depends on| n673
  n701 -->|Depends on| n692
  n701 -->|Depends on| n690
  n701 -->|Depends on| n702
  n701 -->|Depends on| n682
  n701 -->|Depends on| n696
  n701 -->|Depends on| n674
  n701 -->|Depends on| n683
  n701 -->|Depends on| n675
  n701 -->|Depends on| n148
  n701 -->|Depends on| n39
  n701 -->|Depends on| n40
  n701 -->|Depends on| n292
  n701 -->|Depends on| n294
  n702 -->|Defined by| n700
  n702 -->|Read in| n698
  n702 -->|Depends on| n700
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
