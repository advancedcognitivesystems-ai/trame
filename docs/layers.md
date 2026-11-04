# Layers

*The graph in force on 4 November 2026, ordered by distance to the goals.*

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
    n97["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n98["A value amended<br/><small>Scenario</small>"]:::held
    n99["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n100["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n101["Advance<br/><small>Entry point</small>"]:::held
    n102["Amend<br/><small>Entry point</small>"]:::held
    n103["An amendment prepared<br/><small>Function</small>"]:::held
    n104["Assemble a component<br/><small>Entry point</small>"]:::held
    n105["Assembler<br/><small>Function</small>"]:::held
    n106["Audit the packages<br/><small>Entry point</small>"]:::held
    n107["Build<br/><small>Entry point</small>"]:::held
    n108["Two builds compared<br/><small>Function</small>"]:::held
    n109["Deliver<br/><small>Entry point</small>"]:::held
    n110["Start trame dev<br/><small>Entry point</small>"]:::held
    n111["Ask the machine<br/><small>Entry point</small>"]:::held
    n112["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n113["Payload<br/><small>Entry point</small>"]:::held
    n114["Export the page<br/><small>Entry point</small>"]:::held
    n115["Start a project<br/><small>Entry point</small>"]:::held
    n116["Plan<br/><small>Entry point</small>"]:::held
    n117["Preparation<br/><small>Function</small>"]:::held
    n118["Publish<br/><small>Entry point</small>"]:::held
    n119["Record evidence<br/><small>Entry point</small>"]:::held
    n120["A module of references<br/><small>Function</small>"]:::held
    n121["Fill the registry<br/><small>Entry point</small>"]:::held
    n122["Release a version<br/><small>Entry point</small>"]:::held
    n123["Render a view<br/><small>Function</small>"]:::held
    n124["Run a component<br/><small>Entry point</small>"]:::held
    n125["Ship<br/><small>Entry point</small>"]:::held
    n126["Show a view<br/><small>Entry point</small>"]:::held
    n127["Take the snapshot<br/><small>Entry point</small>"]:::held
    n128["Test the laws<br/><small>Entry point</small>"]:::held
    n129["Upgrade<br/><small>Entry point</small>"]:::held
    n130["View by its name<br/><small>Entry point</small>"]:::held
    n131["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n132["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n133["Default rank<br/><small>Decision</small>"]:::neutral
    n134["Documentation comment<br/><small>Decision</small>"]:::neutral
    n135["Names of the documents<br/><small>Standard</small>"]:::neutral
    n136["The frozen API<br/><small>Standard</small>"]:::neutral
    n137["JSON formatting<br/><small>Decision</small>"]:::neutral
    n138["The language's names<br/><small>Decision</small>"]:::neutral
    n139["Project layout<br/><small>Decision</small>"]:::neutral
    n140["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n141["How a project starts<br/><small>Decision</small>"]:::neutral
    n142["Trame references<br/><small>Standard</small>"]:::neutral
    n143["Names of steps<br/><small>Decision</small>"]:::neutral
    n144["Trame's commands<br/><small>Standard</small>"]:::neutral
    n145["Trame's environment<br/><small>Standard</small>"]:::neutral
    n146["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n147["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n148["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n149["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n150["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n151["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n152["How a number is written<br/><small>Decision</small>"]:::neutral
    n153["Punctuation of documents<br/><small>Function</small>"]:::held
    n154["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n155["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n156["Values with their units<br/><small>Function</small>"]:::held
    n157["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n158["Assembly<br/><small>Function</small>"]:::held
    n159["Compilation API<br/><small>Function</small>"]:::held
    n160["Compiler<br/><small>Function</small>"]:::held
    n161["Cycles<br/><small>Function</small>"]:::held
    n162["Date bundle<br/><small>Function</small>"]:::held
    n163["trame dev server<br/><small>Function</small>"]:::held
    n164["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n165["Differences<br/><small>Function</small>"]:::held
    n166["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n167["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n168["Fingerprints<br/><small>Function</small>"]:::held
    n169["Pseudo-random generator<br/><small>Function</small>"]:::held
    n170["Graph<br/><small>Function</small>"]:::held
    n171["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n172["Laws<br/><small>Function</small>"]:::held
    n173["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n174["Lock<br/><small>Function</small>"]:::held
    n175["Machine outputs<br/><small>Function</small>"]:::held
    n176["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n177["Payload<br/><small>Function</small>"]:::held
    n178["Positions<br/><small>Function</small>"]:::held
    n179["Project<br/><small>Function</small>"]:::held
    n180["The runs of a project<br/><small>Function</small>"]:::held
    n181["References<br/><small>Function</small>"]:::held
    n182["A shipment's pipeline<br/><small>Function</small>"]:::held
    n183["Static reading<br/><small>Function</small>"]:::held
    n184["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n185["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n186["Views<br/><small>Function</small>"]:::held
    n187["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n188["Accept a candidate<br/><small>Requirement</small>"]:::held
    n189["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n190["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n191["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n192["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n193["Records of the releases<br/><small>Function</small>"]:::held
    n194["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n195["Attribute presence<br/><small>Syntax element</small>"]:::held
    n196["Attribute selector<br/><small>Syntax element</small>"]:::held
    n197["Class selector<br/><small>Syntax element</small>"]:::held
    n198["Declaration<br/><small>Syntax element</small>"]:::held
    n199["Rule<br/><small>Syntax element</small>"]:::held
    n200["CSS style sheets<br/><small>Language</small>"]:::held
    n201["Variable<br/><small>Syntax element</small>"]:::held
    n202["Custom property<br/><small>Syntax element</small>"]:::held
    n203["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n204["Escaped text<br/><small>Syntax element</small>"]:::held
    n205["Attributes<br/><small>Syntax element</small>"]:::held
    n206["Element over several lines<br/><small>Syntax element</small>"]:::held
    n207["HTML element<br/><small>Syntax element</small>"]:::held
    n208["End tag<br/><small>Syntax element</small>"]:::held
    n209["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n210["HTML markup<br/><small>Language</small>"]:::held
    n211["Start tag<br/><small>Syntax element</small>"]:::held
    n212["JSON in a script<br/><small>Syntax element</small>"]:::held
    n213["Media feature<br/><small>Syntax element</small>"]:::held
    n214["Media rule<br/><small>Syntax element</small>"]:::held
    n215["Negation<br/><small>Syntax element</small>"]:::held
    n216["Path data<br/><small>Syntax element</small>"]:::held
    n217["Script<br/><small>Syntax element</small>"]:::held
    n218["Selector list<br/><small>Syntax element</small>"]:::held
    n219["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n220["Drivers<br/><small>Function</small>"]:::held
    n221["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n222["Answers without crashing<br/><small>Requirement</small>"]:::held
    n223["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n224["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n225["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n226["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n227["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n228["Complete declaration<br/><small>Requirement</small>"]:::held
    n229["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n230["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n231["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n232["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n233["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n234["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n235["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n236["Same input, same answer<br/><small>Requirement</small>"]:::held
    n237["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n238["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n239["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n240["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n241["What belongs to a library<br/><small>Requirement</small>"]:::held
    n242["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n243["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n244["A release is settled<br/><small>Requirement</small>"]:::held
    n245["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n246["Anchor<br/><small>Syntax element</small>"]:::held
    n247["Backtick string<br/><small>Syntax element</small>"]:::held
    n248["Blank line<br/><small>Syntax element</small>"]:::held
    n249["Block quote<br/><small>Syntax element</small>"]:::held
    n250["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n251["Code block<br/><small>Syntax element</small>"]:::held
    n252["Code span<br/><small>Syntax element</small>"]:::held
    n253["CommonMark<br/><small>Standard</small>"]:::neutral
    n254["Collapsible block<br/><small>Syntax element</small>"]:::held
    n255["Emphasis<br/><small>Syntax element</small>"]:::held
    n256["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n257["Heading<br/><small>Syntax element</small>"]:::held
    n258["Link<br/><small>Syntax element</small>"]:::held
    n259["List item<br/><small>Syntax element</small>"]:::held
    n260["Relative reference<br/><small>Syntax element</small>"]:::held
    n261["Small text<br/><small>Syntax element</small>"]:::held
    n262["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n263["Table<br/><small>Syntax element</small>"]:::held
    n264["Table cell<br/><small>Syntax element</small>"]:::held
    n265["Delimiter row<br/><small>Syntax element</small>"]:::held
    n266["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n267["Around the documents<br/><small>Decision</small>"]:::neutral
    n268["Documents in the page<br/><small>Decision</small>"]:::neutral
    n269["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n270["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n271["Class definition<br/><small>Syntax element</small>"]:::held
    n272["Flowchart<br/><small>Syntax element</small>"]:::held
    n273["Gantt chart<br/><small>Syntax element</small>"]:::held
    n274["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n275["Section<br/><small>Syntax element</small>"]:::held
    n276["Task<br/><small>Syntax element</small>"]:::held
    n277["Mermaid<br/><small>Standard</small>"]:::neutral
    n278["Label<br/><small>Syntax element</small>"]:::held
    n279["Link<br/><small>Syntax element</small>"]:::held
    n280["Node<br/><small>Syntax element</small>"]:::held
    n281["Milestone<br/><small>Syntax element</small>"]:::held
    n282["Node style<br/><small>Syntax element</small>"]:::held
    n283["Style properties<br/><small>Syntax element</small>"]:::held
    n284["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n285["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n286["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n287["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n288["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n289["Dates<br/><small>Function</small>"]:::held
    n290["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n291["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n292["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n293["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n294["Language<br/><small>Decision</small>"]:::neutral
    n295["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n296["Lists<br/><small>Function</small>"]:::held
    n297["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n298["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n299["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n300["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n301["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n302["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n303["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n304["Grammar of CSS<br/><small>Package</small>"]:::held
    n305["esbuild<br/><small>Package</small>"]:::held
    n306["Grammar of HCL<br/><small>Package</small>"]:::held
    n307["Grammar of HTML<br/><small>Package</small>"]:::held
    n308["Types of Node.js<br/><small>Package</small>"]:::held
    n309["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n310["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n311["The standard library<br/><small>Package</small>"]:::neutral
    n312["tsx<br/><small>Package</small>"]:::held
    n313["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n314["TypeScript<br/><small>Package</small>"]:::held
    n315["Order of versions<br/><small>Function</small>"]:::held
    n316["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n317["Banner<br/><small>Syntax element</small>"]:::held
    n318["Brand<br/><small>Syntax element</small>"]:::held
    n319["State of the compilation<br/><small>Syntax element</small>"]:::held
    n320["Dates<br/><small>Syntax element</small>"]:::held
    n321["Head of the document<br/><small>Syntax element</small>"]:::held
    n322["Document picker<br/><small>Syntax element</small>"]:::held
    n323["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n324["Fonts<br/><small>Syntax element</small>"]:::held
    n325["Logo<br/><small>Syntax element</small>"]:::held
    n326["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n327["Main area<br/><small>Syntax element</small>"]:::held
    n328["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n329["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n330["Navigation<br/><small>Syntax element</small>"]:::held
    n331["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n332["Page<br/><small>Function</small>"]:::held
    n333["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n334["Document of the page<br/><small>Syntax element</small>"]:::held
    n335["Regions of the page<br/><small>Decision</small>"]:::neutral
    n336["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n337["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n338["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n339["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n340["Shell<br/><small>Syntax element</small>"]:::held
    n341["Side bar<br/><small>Syntax element</small>"]:::held
    n342["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n343["Colours of a status<br/><small>Syntax element</small>"]:::held
    n344["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n345["Theme<br/><small>Syntax element</small>"]:::held
    n346["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n347["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n348["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n349["System files, for reading<br/><small>Implementation</small>"]:::held
    n350["Trees on disk<br/><small>Implementation</small>"]:::held
    n351["System files, for writing<br/><small>Implementation</small>"]:::held
    n352["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n353["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n354["esbuild<br/><small>Implementation</small>"]:::held
    n355["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n356["Example process<br/><small>Function</small>"]:::held
    n357["Example project<br/><small>Decision</small>"]:::neutral
    n358["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n359["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n360["Amendments in place<br/><small>Implementation</small>"]:::held
    n361["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n362["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n363["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n364["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n365["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n366["A server in memory<br/><small>Function</small>"]:::held
    n367["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n368["Terminal in memory<br/><small>Function</small>"]:::held
    n369["Command line<br/><small>Implementation</small>"]:::held
    n370["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n371["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n372["Node HTTP server<br/><small>Implementation</small>"]:::held
    n373["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n374["Node paths<br/><small>Implementation</small>"]:::held
    n375["NodePlatform<br/><small>Technical choice</small>"]:::held
    n376["Node process<br/><small>Implementation</small>"]:::held
    n377["Node programs<br/><small>Implementation</small>"]:::held
    n378["Node terminal<br/><small>Implementation</small>"]:::held
    n379["Node timer<br/><small>Implementation</small>"]:::held
    n380["No installer in test<br/><small>Implementation</small>"]:::held
    n381["No registry in test<br/><small>Function</small>"]:::held
    n382["npm installs<br/><small>Implementation</small>"]:::held
    n383["npm's reports<br/><small>Implementation</small>"]:::held
    n384["Packages by their origin<br/><small>Implementation</small>"]:::held
    n385["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n386["Page resources<br/><small>Implementation</small>"]:::held
    n387["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n388["Results kept in the process<br/><small>Implementation</small>"]:::held
    n389["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n390["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n391["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n392["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n393["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n394["Stopped clock<br/><small>Function</small>"]:::held
    n395["System clock<br/><small>Implementation</small>"]:::held
    n396["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n397["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n398["Trame's prelude<br/><small>Implementation</small>"]:::held
    n399["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n400["tsx loader<br/><small>Implementation</small>"]:::held
    n401["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n402["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n403["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n404["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n405["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n406["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n407["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n408["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n409["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n410["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n411["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n412["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n413["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n414["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n415["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n416["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n417["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n418["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n419["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n420["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n421["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n422["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n423["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n424["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n425["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n426["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n427["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n428["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n429["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n430["Candidate dates<br/><small>Decision</small>"]:::neutral
    n431["Claim sets<br/><small>Decision</small>"]:::neutral
    n432["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n433["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n434["A specification that runs<br/><small>Goal</small>"]:::neutral
    n435["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n436["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n437["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n438["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n439["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n440["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n441["A single source of truth<br/><small>Goal</small>"]:::neutral
    n442["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n443["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n444["Generation 1<br/><small>Release</small>"]:::neutral
    n445["Generation 10<br/><small>Release</small>"]:::neutral
    n446["Generation 100<br/><small>Release</small>"]:::neutral
    n447["Generation 101<br/><small>Release</small>"]:::neutral
    n448["Generation 11<br/><small>Release</small>"]:::neutral
    n449["Generation 12<br/><small>Release</small>"]:::neutral
    n450["Generation 13<br/><small>Release</small>"]:::neutral
    n451["Generation 14<br/><small>Release</small>"]:::neutral
    n452["Generation 15<br/><small>Release</small>"]:::neutral
    n453["Generation 16<br/><small>Release</small>"]:::neutral
    n454["Generation 17<br/><small>Release</small>"]:::neutral
    n455["Generation 18<br/><small>Release</small>"]:::neutral
    n456["Generation 19<br/><small>Release</small>"]:::neutral
    n457["Generation 2<br/><small>Release</small>"]:::neutral
    n458["Generation 20<br/><small>Release</small>"]:::neutral
    n459["Generation 21<br/><small>Release</small>"]:::neutral
    n460["Generation 22<br/><small>Release</small>"]:::neutral
    n461["Generation 23<br/><small>Release</small>"]:::neutral
    n462["Generation 24<br/><small>Release</small>"]:::neutral
    n463["Generation 25<br/><small>Release</small>"]:::neutral
    n464["Generation 26<br/><small>Release</small>"]:::neutral
    n465["Generation 27<br/><small>Release</small>"]:::neutral
    n466["Generation 28<br/><small>Release</small>"]:::neutral
    n467["Generation 29<br/><small>Release</small>"]:::neutral
    n468["Generation 3<br/><small>Release</small>"]:::neutral
    n469["Generation 30<br/><small>Release</small>"]:::neutral
    n470["Generation 31<br/><small>Release</small>"]:::neutral
    n471["Generation 32<br/><small>Release</small>"]:::neutral
    n472["Generation 33<br/><small>Release</small>"]:::neutral
    n473["Generation 34<br/><small>Release</small>"]:::neutral
    n474["Generation 35<br/><small>Release</small>"]:::neutral
    n475["Generation 36<br/><small>Release</small>"]:::neutral
    n476["Generation 37<br/><small>Release</small>"]:::neutral
    n477["Generation 38<br/><small>Release</small>"]:::neutral
    n478["Generation 39<br/><small>Release</small>"]:::neutral
    n479["Generation 4<br/><small>Release</small>"]:::neutral
    n480["Generation 40<br/><small>Release</small>"]:::neutral
    n481["Generation 41<br/><small>Release</small>"]:::neutral
    n482["Generation 42<br/><small>Release</small>"]:::neutral
    n483["Generation 43<br/><small>Release</small>"]:::neutral
    n484["Generation 44<br/><small>Release</small>"]:::neutral
    n485["Generation 45<br/><small>Release</small>"]:::neutral
    n486["Generation 46<br/><small>Release</small>"]:::neutral
    n487["Generation 47<br/><small>Release</small>"]:::neutral
    n488["Generation 48<br/><small>Release</small>"]:::neutral
    n489["Generation 49<br/><small>Release</small>"]:::neutral
    n490["Generation 5<br/><small>Release</small>"]:::neutral
    n491["Generation 50<br/><small>Release</small>"]:::neutral
    n492["Generation 51<br/><small>Release</small>"]:::neutral
    n493["Generation 52<br/><small>Release</small>"]:::neutral
    n494["Generation 53<br/><small>Release</small>"]:::neutral
    n495["Generation 54<br/><small>Release</small>"]:::neutral
    n496["Generation 55<br/><small>Release</small>"]:::neutral
    n497["Generation 56<br/><small>Release</small>"]:::neutral
    n498["Generation 57<br/><small>Release</small>"]:::neutral
    n499["Generation 58<br/><small>Release</small>"]:::neutral
    n500["Generation 59<br/><small>Release</small>"]:::neutral
    n501["Generation 6<br/><small>Release</small>"]:::neutral
    n502["Generation 60<br/><small>Release</small>"]:::neutral
    n503["Generation 61<br/><small>Release</small>"]:::neutral
    n504["Generation 62<br/><small>Release</small>"]:::neutral
    n505["Generation 63<br/><small>Release</small>"]:::neutral
    n506["Generation 64<br/><small>Release</small>"]:::neutral
    n507["Generation 65<br/><small>Release</small>"]:::neutral
    n508["Generation 66<br/><small>Release</small>"]:::neutral
    n509["Generation 67<br/><small>Release</small>"]:::neutral
    n510["Generation 68<br/><small>Release</small>"]:::neutral
    n511["Generation 69<br/><small>Release</small>"]:::neutral
    n512["Generation 7<br/><small>Release</small>"]:::neutral
    n513["Generation 70<br/><small>Release</small>"]:::neutral
    n514["Generation 71<br/><small>Release</small>"]:::neutral
    n515["Generation 72<br/><small>Release</small>"]:::neutral
    n516["Generation 73<br/><small>Release</small>"]:::neutral
    n517["Generation 74<br/><small>Release</small>"]:::neutral
    n518["Generation 75<br/><small>Release</small>"]:::neutral
    n519["Generation 76<br/><small>Release</small>"]:::neutral
    n520["Generation 77<br/><small>Release</small>"]:::neutral
    n521["Generation 78<br/><small>Release</small>"]:::neutral
    n522["Generation 79<br/><small>Release</small>"]:::neutral
    n523["Generation 8<br/><small>Release</small>"]:::neutral
    n524["Generation 80<br/><small>Release</small>"]:::neutral
    n525["Generation 81<br/><small>Release</small>"]:::neutral
    n526["Generation 82<br/><small>Release</small>"]:::neutral
    n527["Generation 83<br/><small>Release</small>"]:::neutral
    n528["Generation 84<br/><small>Release</small>"]:::neutral
    n529["Generation 85<br/><small>Release</small>"]:::neutral
    n530["Generation 86<br/><small>Release</small>"]:::neutral
    n531["Generation 87<br/><small>Release</small>"]:::neutral
    n532["Generation 88<br/><small>Release</small>"]:::neutral
    n533["Generation 89<br/><small>Release</small>"]:::neutral
    n534["Generation 9<br/><small>Release</small>"]:::neutral
    n535["Generation 90<br/><small>Release</small>"]:::neutral
    n536["Generation 91<br/><small>Release</small>"]:::neutral
    n537["Generation 92<br/><small>Release</small>"]:::neutral
    n538["Generation 93<br/><small>Release</small>"]:::neutral
    n539["Generation 94<br/><small>Release</small>"]:::neutral
    n540["Generation 95<br/><small>Release</small>"]:::neutral
    n541["Generation 96<br/><small>Release</small>"]:::neutral
    n542["Generation 97<br/><small>Release</small>"]:::neutral
    n543["Generation 98<br/><small>Release</small>"]:::neutral
    n544["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n545["Common rendering<br/><small>Function</small>"]:::held
    n546["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n547["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n548["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n549["Rendering of the files<br/><small>Function</small>"]:::held
    n550["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n551["HTML writer<br/><small>Function</small>"]:::held
    n552["Markdown writer<br/><small>Function</small>"]:::held
    n553["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n554["Mermaid diagrams<br/><small>Function</small>"]:::held
    n555["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n556["Figures of the page<br/><small>Port</small>"]:::neutral
    n557["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n558["The page in HTML<br/><small>Technical choice</small>"]:::held
    n559["Rendering in the page<br/><small>Function</small>"]:::held
    n560["Syntax of the page<br/><small>Port</small>"]:::neutral
    n561["Plain text writer<br/><small>Function</small>"]:::held
    n562["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n563["Figures in SVG<br/><small>Function</small>"]:::held
    n564["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n565["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n566["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n567["Rendering in the terminal<br/><small>Function</small>"]:::held
    n568["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n569["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n570["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n571["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n572["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n573["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n574["The engine reckons as it says<br/><small>Scenario</small>"]:::held
    n575["Shape of the example<br/><small>Decision</small>"]:::neutral
    n576["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n577["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n578["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n579["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n580["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n581["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n582["The candidate plays the laws<br/><small>Check</small>"]:::held
    n583["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n584["The candidate engine<br/><small>Artefact</small>"]:::held
    n585["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n586["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n587["How a generation is made<br/><small>Policy</small>"]:::neutral
    n588["The graph page<br/><small>Artefact</small>"]:::held
    n589["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n590["The graph page opens<br/><small>Check</small>"]:::held
    n591["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n592["What the graph page is asked<br/><small>Function</small>"]:::held
    n593["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n594["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n595["The next generation<br/><small>Shipment</small>"]:::held
    n596["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n597["Open the graph page<br/><small>Entry point</small>"]:::held
    n598["The page's program<br/><small>Artefact</small>"]:::held
    n599["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n600["The SDLC on the machine<br/><small>Technical choice</small>"]:::held
    n601["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n602["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n603["Attribution<br/><small>Function</small>"]:::held
    n604["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n605["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n606["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n607["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n608["Ship only what holds<br/><small>Requirement</small>"]:::held
    n609["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n610["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n611["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n612["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n613["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n614["Checks of a body<br/><small>Function</small>"]:::held
    n615["Captures<br/><small>Standard</small>"]:::neutral
    n616["Categories of literals<br/><small>Decision</small>"]:::neutral
    n617["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n618["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n619["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n620["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n621["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n622["Attribute<br/><small>Syntax element</small>"]:::held
    n623["Comment<br/><small>Syntax element</small>"]:::held
    n624["Text<br/><small>Syntax element</small>"]:::held
    n625["HCL<br/><small>Standard</small>"]:::neutral
    n626["Value<br/><small>Syntax element</small>"]:::held
    n627["Module call<br/><small>Syntax element</small>"]:::held
    n628["Terraform<br/><small>Language</small>"]:::held
    n629["Terraform modules<br/><small>Standard</small>"]:::neutral
    n630["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n631["Box drawing<br/><small>Standard</small>"]:::neutral
    n632["Code lines<br/><small>Syntax element</small>"]:::held
    n633["Columns<br/><small>Syntax element</small>"]:::held
    n634["Item line<br/><small>Syntax element</small>"]:::held
    n635["Padded cell<br/><small>Syntax element</small>"]:::held
    n636["Path step<br/><small>Syntax element</small>"]:::held
    n637["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n638["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n639["Terminal text<br/><small>Decision</small>"]:::neutral
    n640["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n641["List on several lines<br/><small>Syntax element</small>"]:::held
    n642["Type assertion<br/><small>Syntax element</small>"]:::held
    n643["Assignment<br/><small>Syntax element</small>"]:::held
    n644["Waiting<br/><small>Syntax element</small>"]:::held
    n645["Call<br/><small>Syntax element</small>"]:::held
    n646["Constant<br/><small>Syntax element</small>"]:::held
    n647["Default import<br/><small>Syntax element</small>"]:::held
    n648["Documentation comment<br/><small>Syntax element</small>"]:::held
    n649["Export<br/><small>Syntax element</small>"]:::held
    n650["Condition<br/><small>Syntax element</small>"]:::held
    n651["List on one line<br/><small>Syntax element</small>"]:::held
    n652["Comment<br/><small>Syntax element</small>"]:::held
    n653["Property access<br/><small>Syntax element</small>"]:::held
    n654["Title of a module<br/><small>Syntax element</small>"]:::held
    n655["Import of names<br/><small>Syntax element</small>"]:::held
    n656["Object on several lines<br/><small>Syntax element</small>"]:::held
    n657["Object<br/><small>Syntax element</small>"]:::held
    n658["Object type<br/><small>Syntax element</small>"]:::held
    n659["Optional property access<br/><small>Syntax element</small>"]:::held
    n660["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n661["Group<br/><small>Syntax element</small>"]:::held
    n662["Names of a program<br/><small>Decision</small>"]:::neutral
    n663["Property<br/><small>Syntax element</small>"]:::held
    n664["Strict inequality<br/><small>Syntax element</small>"]:::held
    n665["Text<br/><small>Syntax element</small>"]:::held
    n666["TypeScript<br/><small>Language</small>"]:::held
    n667["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n668["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n669["TypeScript writer<br/><small>Function</small>"]:::held
    n670["Union type<br/><small>Syntax element</small>"]:::held
    n671["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n346
  n57 -->|Depends on| n164
  n58 -->|Implements| n20
  n58 -->|Depends on| n331
  n59 -->|Implements| n24
  n59 -->|Depends on| n346
  n59 -->|Depends on| n164
  n60 -->|Implements| n37
  n60 -->|Depends on| n346
  n61 -->|Implements| n38
  n61 -->|Depends on| n213
  n62 -->|Serves| n434
  n62 -->|Depends on| n346
  n62 -->|Depends on| n268
  n62 -->|Depends on| n270
  n62 -->|Depends on| n269
  n62 -->|Depends on| n0
  n62 -->|Depends on| n207
  n62 -->|Depends on| n211
  n62 -->|Depends on| n219
  n62 -->|Depends on| n216
  n62 -->|Depends on| n198
  n62 -->|Depends on| n204
  n62 -->|Depends on| n545
  n62 -->|Depends on| n298
  n62 -->|Depends on| n300
  n62 -->|Depends on| n153
  n63 -->|Serves| n434
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n545
  n63 -->|Depends on| n346
  n63 -->|Depends on| n335
  n63 -->|Depends on| n338
  n63 -->|Depends on| n326
  n63 -->|Depends on| n268
  n63 -->|Depends on| n267
  n63 -->|Depends on| n269
  n63 -->|Depends on| n0
  n63 -->|Depends on| n135
  n63 -->|Depends on| n562
  n63 -->|Depends on| n153
  n63 -->|Depends on| n294
  n63 -->|Depends on| n207
  n63 -->|Depends on| n204
  n63 -->|Depends on| n196
  n63 -->|Depends on| n195
  n63 -->|Depends on| n218
  n63 -->|Depends on| n197
  n63 -->|Depends on| n298
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n435
  n65 -->|Serves| n434
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n101
  n66 -->|Verifies| n166
  n66 -->|In| n52
  n66 -->|Depends on| n101
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n139
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n144
  n66 -->|Depends on| n285
  n66 -->|Depends on| n67
  n66 -->|Depends on| n301
  n70 -->|Verifies| n621
  n70 -->|Verifies| n614
  n70 -->|Verifies| n403
  n70 -->|In| n52
  n70 -->|Depends on| n621
  n70 -->|Depends on| n614
  n70 -->|Depends on| n666
  n70 -->|Depends on| n71
  n70 -->|Depends on| n291
  n70 -->|Depends on| n301
  n72 -->|Verifies| n116
  n72 -->|In| n52
  n72 -->|Depends on| n107
  n72 -->|Depends on| n116
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n139
  n72 -->|Depends on| n89
  n72 -->|Depends on| n144
  n72 -->|Depends on| n286
  n72 -->|Depends on| n301
  n73 -->|Verifies| n369
  n73 -->|Verifies| n368
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n144
  n73 -->|Depends on| n99
  n73 -->|Depends on| n299
  n73 -->|Depends on| n301
  n74 -->|Verifies| n104
  n74 -->|Verifies| n105
  n74 -->|Verifies| n158
  n74 -->|Verifies| n669
  n74 -->|Verifies| n630
  n74 -->|Verifies| n220
  n74 -->|Verifies| n394
  n74 -->|In| n52
  n74 -->|Depends on| n104
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n144
  n74 -->|Depends on| n139
  n74 -->|Depends on| n69
  n74 -->|Depends on| n286
  n74 -->|Depends on| n301
  n75 -->|Verifies| n124
  n75 -->|In| n52
  n75 -->|Depends on| n124
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n144
  n75 -->|Depends on| n69
  n75 -->|Depends on| n93
  n75 -->|Depends on| n301
  n76 -->|Verifies| n118
  n76 -->|In| n52
  n76 -->|Depends on| n118
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n139
  n76 -->|Depends on| n144
  n76 -->|Depends on| n286
  n76 -->|Depends on| n301
  n77 -->|Verifies| n110
  n77 -->|Verifies| n163
  n77 -->|Verifies| n366
  n77 -->|Verifies| n379
  n77 -->|In| n52
  n77 -->|Depends on| n113
  n77 -->|Depends on| n110
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n139
  n77 -->|Depends on| n164
  n77 -->|Depends on| n432
  n77 -->|Depends on| n179
  n77 -->|Depends on| n144
  n77 -->|Depends on| n297
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n301
  n79 -->|Verifies| n111
  n79 -->|Verifies| n180
  n79 -->|Verifies| n390
  n79 -->|In| n52
  n79 -->|Depends on| n111
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n112
  n79 -->|Depends on| n144
  n79 -->|Depends on| n286
  n79 -->|Depends on| n301
  n80 -->|Verifies| n128
  n80 -->|In| n52
  n80 -->|Depends on| n128
  n80 -->|Depends on| n160
  n80 -->|Depends on| n186
  n80 -->|Depends on| n41
  n80 -->|Depends on| n51
  n80 -->|Depends on| n144
  n80 -->|Depends on| n286
  n80 -->|Depends on| n301
  n81 -->|Verifies| n122
  n81 -->|Verifies| n193
  n81 -->|Verifies| n363
  n81 -->|In| n52
  n81 -->|Depends on| n122
  n81 -->|Depends on| n42
  n81 -->|Depends on| n56
  n81 -->|Depends on| n51
  n81 -->|Depends on| n41
  n81 -->|Depends on| n39
  n81 -->|Depends on| n139
  n81 -->|Depends on| n94
  n81 -->|Depends on| n90
  n81 -->|Depends on| n144
  n81 -->|Depends on| n665
  n81 -->|Depends on| n301
  n81 -->|Depends on| n610
  n82 -->|Verifies| n131
  n82 -->|Verifies| n384
  n82 -->|Verifies| n362
  n82 -->|Verifies| n380
  n82 -->|In| n52
  n82 -->|Depends on| n131
  n82 -->|Depends on| n42
  n82 -->|Depends on| n56
  n82 -->|Depends on| n21
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n139
  n82 -->|Depends on| n94
  n82 -->|Depends on| n90
  n82 -->|Depends on| n144
  n82 -->|Depends on| n301
  n82 -->|Depends on| n138
  n82 -->|Depends on| n666
  n83 -->|Verifies| n106
  n83 -->|Verifies| n381
  n83 -->|In| n52
  n83 -->|Depends on| n106
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n51
  n83 -->|Depends on| n94
  n83 -->|Depends on| n144
  n83 -->|Depends on| n301
  n83 -->|Depends on| n310
  n84 -->|Verifies| n129
  n84 -->|Verifies| n384
  n84 -->|Verifies| n362
  n84 -->|In| n52
  n84 -->|Depends on| n129
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n41
  n84 -->|Depends on| n39
  n84 -->|Depends on| n139
  n84 -->|Depends on| n94
  n84 -->|Depends on| n144
  n84 -->|Depends on| n301
  n85 -->|Verifies| n109
  n85 -->|Verifies| n149
  n85 -->|In| n52
  n85 -->|Depends on| n109
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n94
  n85 -->|Depends on| n90
  n85 -->|Depends on| n203
  n85 -->|Depends on| n144
  n85 -->|Depends on| n301
  n86 -->|Verifies| n114
  n86 -->|Verifies| n162
  n86 -->|In| n52
  n86 -->|Depends on| n113
  n86 -->|Depends on| n114
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n51
  n86 -->|Depends on| n179
  n86 -->|Depends on| n41
  n86 -->|Depends on| n39
  n86 -->|Depends on| n139
  n86 -->|Depends on| n144
  n86 -->|Depends on| n297
  n86 -->|Depends on| n301
  n87 -->|Verifies| n332
  n87 -->|Verifies| n354
  n87 -->|Verifies| n370
  n87 -->|Verifies| n386
  n87 -->|In| n52
  n87 -->|Depends on| n113
  n87 -->|Depends on| n332
  n87 -->|Depends on| n19
  n87 -->|Depends on| n179
  n87 -->|Depends on| n41
  n87 -->|Depends on| n17
  n87 -->|Depends on| n51
  n87 -->|Depends on| n144
  n87 -->|Depends on| n297
  n87 -->|Depends on| n301
  n88 -->|Verifies| n113
  n88 -->|Verifies| n177
  n88 -->|Verifies| n559
  n88 -->|Verifies| n551
  n88 -->|Verifies| n563
  n88 -->|Verifies| n165
  n88 -->|In| n52
  n88 -->|Depends on| n113
  n88 -->|Depends on| n165
  n88 -->|Depends on| n51
  n88 -->|Depends on| n144
  n88 -->|Depends on| n297
  n88 -->|Depends on| n301
  n88 -->|Depends on| n97
  n91 -->|Verifies| n115
  n91 -->|Verifies| n120
  n91 -->|In| n52
  n91 -->|Depends on| n115
  n91 -->|Depends on| n42
  n91 -->|Depends on| n56
  n91 -->|Depends on| n41
  n91 -->|Depends on| n39
  n91 -->|Depends on| n139
  n91 -->|Depends on| n94
  n91 -->|Depends on| n90
  n91 -->|Depends on| n141
  n91 -->|Depends on| n191
  n91 -->|Depends on| n144
  n91 -->|Depends on| n301
  n91 -->|Depends on| n138
  n91 -->|Depends on| n666
  n92 -->|Verifies| n121
  n92 -->|Verifies| n363
  n92 -->|In| n52
  n92 -->|Depends on| n121
  n92 -->|Depends on| n42
  n92 -->|Depends on| n56
  n92 -->|Depends on| n144
  n92 -->|Depends on| n301
  n92 -->|Depends on| n138
  n92 -->|Depends on| n666
  n92 -->|Depends on| n90
  n95 -->|Verifies| n125
  n95 -->|Verifies| n119
  n95 -->|Verifies| n605
  n95 -->|Verifies| n182
  n95 -->|Verifies| n607
  n95 -->|Verifies| n371
  n95 -->|Verifies| n603
  n95 -->|Verifies| n166
  n95 -->|In| n52
  n95 -->|Depends on| n125
  n95 -->|Depends on| n119
  n95 -->|Depends on| n42
  n95 -->|Depends on| n56
  n95 -->|Depends on| n51
  n95 -->|Depends on| n41
  n95 -->|Depends on| n39
  n95 -->|Depends on| n22
  n95 -->|Depends on| n48
  n95 -->|Depends on| n23
  n95 -->|Depends on| n160
  n95 -->|Depends on| n17
  n95 -->|Depends on| n287
  n95 -->|Depends on| n139
  n95 -->|Depends on| n610
  n95 -->|Depends on| n94
  n95 -->|Depends on| n90
  n95 -->|Depends on| n144
  n95 -->|Depends on| n301
  n96 -->|Verifies| n127
  n96 -->|In| n52
  n96 -->|Depends on| n127
  n96 -->|Depends on| n56
  n96 -->|Depends on| n21
  n96 -->|Depends on| n41
  n96 -->|Depends on| n39
  n96 -->|Depends on| n139
  n96 -->|Depends on| n144
  n96 -->|Depends on| n301
  n98 -->|Verifies| n102
  n98 -->|Verifies| n103
  n98 -->|Verifies| n108
  n98 -->|Verifies| n360
  n98 -->|In| n52
  n98 -->|Depends on| n102
  n98 -->|Depends on| n56
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n144
  n98 -->|Depends on| n68
  n98 -->|Depends on| n301
  n100 -->|Verifies| n126
  n100 -->|Verifies| n130
  n100 -->|Verifies| n123
  n100 -->|Verifies| n567
  n100 -->|Verifies| n561
  n100 -->|Verifies| n569
  n100 -->|In| n52
  n100 -->|Depends on| n126
  n100 -->|Depends on| n130
  n100 -->|Depends on| n51
  n100 -->|Depends on| n144
  n100 -->|Depends on| n99
  n100 -->|Depends on| n301
  n101 -->|Serves| n434
  n101 -->|Part of| n54
  n101 -->|Depends on| n117
  n101 -->|Depends on| n166
  n101 -->|Depends on| n144
  n101 -->|Depends on| n139
  n101 -->|Depends on| n190
  n101 -->|Depends on| n188
  n101 -->|Depends on| n357
  n101 -->|Depends on| n396
  n101 -->|Depends on| n145
  n101 -->|Depends on| n666
  n101 -->|Depends on| n43
  n101 -->|Depends on| n22
  n101 -->|Depends on| n21
  n101 -->|Depends on| n23
  n101 -->|Depends on| n39
  n101 -->|Depends on| n25
  n101 -->|Depends on| n167
  n101 -->|Depends on| n50
  n101 -->|Depends on| n633
  n101 -->|Depends on| n639
  n101 -->|Depends on| n286
  n101 -->|Depends on| n285
  n101 -->|Depends on| n191
  n101 -->|Depends on| n192
  n101 -->|Depends on| n194
  n101 -->|Depends on| n193
  n101 -->|Depends on| n137
  n101 -->|Depends on| n142
  n101 -->|Depends on| n17
  n101 -->|Depends on| n179
  n101 -->|Depends on| n138
  n102 -->|Serves| n441
  n102 -->|Part of| n54
  n102 -->|Depends on| n117
  n102 -->|Depends on| n103
  n102 -->|Depends on| n14
  n102 -->|Depends on| n39
  n102 -->|Depends on| n639
  n102 -->|Depends on| n50
  n102 -->|Depends on| n286
  n103 -->|Serves| n441
  n103 -->|Depends on| n117
  n103 -->|Depends on| n175
  n103 -->|Depends on| n108
  n103 -->|Depends on| n40
  n103 -->|Depends on| n181
  n103 -->|Depends on| n179
  n103 -->|Depends on| n139
  n103 -->|Depends on| n39
  n103 -->|Depends on| n286
  n103 -->|Depends on| n132
  n104 -->|Serves| n434
  n104 -->|Part of| n54
  n104 -->|Depends on| n117
  n104 -->|Depends on| n105
  n104 -->|Depends on| n23
  n104 -->|Depends on| n39
  n104 -->|Depends on| n50
  n104 -->|Depends on| n286
  n105 -->|Serves| n434
  n105 -->|Depends on| n117
  n105 -->|Depends on| n158
  n105 -->|Depends on| n639
  n105 -->|Depends on| n153
  n105 -->|Depends on| n286
  n106 -->|Serves| n441
  n106 -->|Part of| n54
  n106 -->|Depends on| n117
  n106 -->|Depends on| n34
  n106 -->|Depends on| n310
  n106 -->|Depends on| n139
  n106 -->|Depends on| n21
  n106 -->|Depends on| n23
  n106 -->|Depends on| n39
  n106 -->|Depends on| n315
  n106 -->|Depends on| n137
  n106 -->|Depends on| n50
  n106 -->|Depends on| n633
  n106 -->|Depends on| n639
  n106 -->|Depends on| n286
  n107 -->|Serves| n434
  n107 -->|Part of| n54
  n107 -->|Depends on| n139
  n107 -->|Depends on| n117
  n107 -->|Depends on| n175
  n107 -->|Depends on| n549
  n107 -->|Depends on| n567
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n50
  n107 -->|Depends on| n286
  n108 -->|Serves| n434
  n108 -->|Depends on| n286
  n108 -->|Depends on| n297
  n109 -->|Serves| n434
  n109 -->|Part of| n54
  n109 -->|Depends on| n117
  n109 -->|Depends on| n158
  n109 -->|Depends on| n16
  n109 -->|Depends on| n149
  n109 -->|Depends on| n333
  n109 -->|Depends on| n334
  n109 -->|Depends on| n217
  n109 -->|Depends on| n148
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n50
  n109 -->|Depends on| n286
  n110 -->|Serves| n434
  n110 -->|Part of| n54
  n110 -->|Depends on| n117
  n110 -->|Depends on| n163
  n110 -->|Depends on| n103
  n110 -->|Depends on| n14
  n110 -->|Depends on| n39
  n111 -->|Serves| n434
  n111 -->|Part of| n54
  n111 -->|Depends on| n117
  n111 -->|Depends on| n112
  n111 -->|Depends on| n21
  n111 -->|Depends on| n23
  n111 -->|Depends on| n22
  n111 -->|Depends on| n43
  n111 -->|Depends on| n28
  n111 -->|Depends on| n26
  n111 -->|Depends on| n53
  n111 -->|Depends on| n34
  n111 -->|Depends on| n33
  n111 -->|Depends on| n139
  n111 -->|Depends on| n17
  n111 -->|Depends on| n39
  n111 -->|Depends on| n50
  n111 -->|Depends on| n286
  n113 -->|Serves| n434
  n113 -->|Part of| n54
  n113 -->|Depends on| n117
  n113 -->|Depends on| n177
  n113 -->|Depends on| n549
  n113 -->|Depends on| n567
  n113 -->|Depends on| n559
  n113 -->|Depends on| n50
  n114 -->|Serves| n434
  n114 -->|Part of| n54
  n114 -->|Depends on| n139
  n114 -->|Depends on| n117
  n114 -->|Depends on| n162
  n114 -->|Depends on| n332
  n114 -->|Depends on| n179
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n50
  n114 -->|Depends on| n286
  n115 -->|Serves| n441
  n115 -->|Part of| n54
  n115 -->|Depends on| n117
  n115 -->|Depends on| n139
  n115 -->|Depends on| n179
  n115 -->|Depends on| n40
  n115 -->|Depends on| n141
  n115 -->|Depends on| n191
  n115 -->|Depends on| n21
  n115 -->|Depends on| n23
  n115 -->|Depends on| n39
  n115 -->|Depends on| n137
  n115 -->|Depends on| n666
  n115 -->|Depends on| n668
  n115 -->|Depends on| n654
  n115 -->|Depends on| n648
  n115 -->|Depends on| n649
  n115 -->|Depends on| n646
  n115 -->|Depends on| n645
  n115 -->|Depends on| n657
  n115 -->|Depends on| n663
  n115 -->|Depends on| n665
  n115 -->|Depends on| n655
  n115 -->|Depends on| n50
  n115 -->|Depends on| n286
  n115 -->|Depends on| n41
  n115 -->|Depends on| n144
  n115 -->|Depends on| n120
  n115 -->|Depends on| n138
  n116 -->|Serves| n434
  n116 -->|Part of| n54
  n116 -->|Depends on| n139
  n116 -->|Depends on| n639
  n116 -->|Depends on| n117
  n116 -->|Depends on| n175
  n116 -->|Depends on| n108
  n116 -->|Depends on| n21
  n116 -->|Depends on| n39
  n116 -->|Depends on| n50
  n116 -->|Depends on| n286
  n117 -->|Serves| n434
  n117 -->|Depends on| n144
  n117 -->|Depends on| n160
  n117 -->|Depends on| n159
  n117 -->|Depends on| n172
  n117 -->|Depends on| n186
  n117 -->|Depends on| n174
  n117 -->|Depends on| n545
  n117 -->|Depends on| n50
  n117 -->|Depends on| n41
  n117 -->|Depends on| n17
  n117 -->|Depends on| n439
  n117 -->|Depends on| n433
  n117 -->|Depends on| n639
  n117 -->|Depends on| n637
  n117 -->|Depends on| n635
  n117 -->|Depends on| n286
  n117 -->|Depends on| n139
  n117 -->|Depends on| n181
  n118 -->|Serves| n441
  n118 -->|Part of| n54
  n118 -->|Depends on| n117
  n118 -->|Depends on| n174
  n118 -->|Depends on| n23
  n118 -->|Depends on| n50
  n118 -->|Depends on| n639
  n118 -->|Depends on| n637
  n118 -->|Depends on| n635
  n118 -->|Depends on| n286
  n119 -->|Serves| n608
  n119 -->|Part of| n54
  n119 -->|Depends on| n144
  n119 -->|Depends on| n117
  n119 -->|Depends on| n605
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n50
  n119 -->|Depends on| n286
  n120 -->|Serves| n441
  n120 -->|Depends on| n668
  n120 -->|Depends on| n654
  n120 -->|Depends on| n648
  n120 -->|Depends on| n649
  n120 -->|Depends on| n646
  n120 -->|Depends on| n645
  n120 -->|Depends on| n657
  n120 -->|Depends on| n663
  n120 -->|Depends on| n665
  n120 -->|Depends on| n651
  n120 -->|Depends on| n655
  n121 -->|Serves| n441
  n121 -->|Part of| n54
  n121 -->|Depends on| n117
  n121 -->|Depends on| n139
  n121 -->|Depends on| n179
  n121 -->|Depends on| n138
  n121 -->|Depends on| n21
  n121 -->|Depends on| n22
  n121 -->|Depends on| n39
  n121 -->|Depends on| n50
  n121 -->|Depends on| n286
  n122 -->|Serves| n441
  n122 -->|Part of| n54
  n122 -->|Depends on| n117
  n122 -->|Depends on| n139
  n122 -->|Depends on| n179
  n122 -->|Depends on| n175
  n122 -->|Depends on| n549
  n122 -->|Depends on| n244
  n122 -->|Depends on| n243
  n122 -->|Depends on| n194
  n122 -->|Depends on| n193
  n122 -->|Depends on| n21
  n122 -->|Depends on| n23
  n122 -->|Depends on| n22
  n122 -->|Depends on| n39
  n122 -->|Depends on| n25
  n122 -->|Depends on| n167
  n122 -->|Depends on| n666
  n122 -->|Depends on| n17
  n122 -->|Depends on| n50
  n122 -->|Depends on| n286
  n122 -->|Depends on| n285
  n122 -->|Depends on| n220
  n122 -->|Depends on| n665
  n122 -->|Depends on| n125
  n122 -->|Depends on| n144
  n123 -->|Serves| n434
  n123 -->|Depends on| n144
  n123 -->|Depends on| n137
  n123 -->|Depends on| n117
  n123 -->|Depends on| n186
  n123 -->|Depends on| n549
  n123 -->|Depends on| n567
  n123 -->|Depends on| n50
  n123 -->|Depends on| n286
  n124 -->|Serves| n434
  n124 -->|Part of| n54
  n124 -->|Depends on| n104
  n124 -->|Depends on| n41
  n125 -->|Serves| n608
  n125 -->|Part of| n54
  n125 -->|Depends on| n144
  n125 -->|Depends on| n117
  n125 -->|Depends on| n109
  n125 -->|Depends on| n158
  n125 -->|Depends on| n605
  n125 -->|Depends on| n607
  n125 -->|Depends on| n608
  n125 -->|Depends on| n16
  n125 -->|Depends on| n149
  n125 -->|Depends on| n604
  n125 -->|Depends on| n41
  n125 -->|Depends on| n21
  n125 -->|Depends on| n23
  n125 -->|Depends on| n39
  n125 -->|Depends on| n50
  n125 -->|Depends on| n166
  n125 -->|Depends on| n286
  n126 -->|Serves| n434
  n126 -->|Part of| n54
  n126 -->|Depends on| n117
  n126 -->|Depends on| n123
  n127 -->|Serves| n441
  n127 -->|Part of| n54
  n127 -->|Depends on| n139
  n127 -->|Depends on| n117
  n127 -->|Depends on| n175
  n127 -->|Depends on| n549
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n50
  n127 -->|Depends on| n286
  n128 -->|Serves| n434
  n128 -->|Part of| n54
  n128 -->|Depends on| n117
  n128 -->|Depends on| n160
  n128 -->|Depends on| n186
  n128 -->|Depends on| n172
  n128 -->|Depends on| n50
  n128 -->|Depends on| n639
  n128 -->|Depends on| n637
  n128 -->|Depends on| n635
  n128 -->|Depends on| n286
  n129 -->|Serves| n441
  n129 -->|Part of| n54
  n129 -->|Depends on| n117
  n129 -->|Depends on| n21
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n315
  n129 -->|Depends on| n665
  n129 -->|Depends on| n41
  n129 -->|Depends on| n144
  n129 -->|Depends on| n50
  n129 -->|Depends on| n286
  n130 -->|Serves| n434
  n130 -->|Part of| n54
  n130 -->|Depends on| n144
  n130 -->|Depends on| n117
  n130 -->|Depends on| n123
  n130 -->|Depends on| n160
  n130 -->|Depends on| n186
  n130 -->|Depends on| n50
  n130 -->|Depends on| n286
  n131 -->|Serves| n441
  n131 -->|Part of| n54
  n131 -->|Depends on| n117
  n131 -->|Depends on| n139
  n131 -->|Depends on| n179
  n131 -->|Depends on| n21
  n131 -->|Depends on| n23
  n131 -->|Depends on| n138
  n131 -->|Depends on| n40
  n131 -->|Depends on| n191
  n131 -->|Depends on| n39
  n131 -->|Depends on| n33
  n131 -->|Depends on| n309
  n131 -->|Depends on| n137
  n131 -->|Depends on| n666
  n131 -->|Depends on| n50
  n131 -->|Depends on| n286
  n131 -->|Depends on| n41
  n131 -->|Depends on| n144
  n148 -->|Read in| n200
  n148 -->|Depends on| n199
  n148 -->|Depends on| n202
  n149 -->|Serves| n434
  n149 -->|Depends on| n31
  n149 -->|Depends on| n147
  n153 -->|Serves| n441
  n153 -->|Depends on| n294
  n154 -->|Serves| n441
  n154 -->|Applied by| n153
  n154 -->|Applied by| n294
  n156 -->|Serves| n441
  n156 -->|Depends on| n152
  n157 -->|Serves| n441
  n158 -->|Serves| n434
  n158 -->|Depends on| n144
  n158 -->|Depends on| n139
  n158 -->|Depends on| n39
  n158 -->|Depends on| n187
  n158 -->|Depends on| n40
  n158 -->|Depends on| n220
  n158 -->|Depends on| n287
  n158 -->|Depends on| n138
  n158 -->|Depends on| n666
  n159 -->|Serves| n434
  n159 -->|Depends on| n133
  n159 -->|Depends on| n178
  n159 -->|Depends on| n181
  n159 -->|Depends on| n40
  n159 -->|Depends on| n153
  n159 -->|Depends on| n135
  n159 -->|Depends on| n139
  n159 -->|Depends on| n302
  n159 -->|Depends on| n182
  n159 -->|Depends on| n156
  n160 -->|Serves| n434
  n160 -->|Depends on| n139
  n160 -->|Depends on| n439
  n160 -->|Depends on| n161
  n160 -->|Depends on| n181
  n160 -->|Depends on| n178
  n160 -->|Depends on| n31
  n160 -->|Depends on| n21
  n160 -->|Depends on| n39
  n160 -->|Depends on| n183
  n160 -->|Depends on| n179
  n160 -->|Depends on| n170
  n160 -->|Depends on| n187
  n160 -->|Depends on| n220
  n160 -->|Depends on| n40
  n160 -->|Depends on| n287
  n160 -->|Depends on| n168
  n160 -->|Depends on| n48
  n160 -->|Depends on| n166
  n160 -->|Depends on| n28
  n160 -->|Depends on| n138
  n161 -->|Serves| n434
  n162 -->|Serves| n434
  n162 -->|Depends on| n144
  n162 -->|Depends on| n17
  n162 -->|Depends on| n41
  n162 -->|Depends on| n297
  n163 -->|Serves| n434
  n163 -->|Depends on| n164
  n163 -->|Depends on| n144
  n163 -->|Depends on| n139
  n163 -->|Depends on| n50
  n163 -->|Depends on| n632
  n163 -->|Depends on| n17
  n163 -->|Depends on| n53
  n163 -->|Depends on| n432
  n163 -->|Depends on| n26
  n163 -->|Depends on| n21
  n163 -->|Depends on| n39
  n163 -->|Depends on| n179
  n163 -->|Depends on| n162
  n163 -->|Depends on| n165
  n163 -->|Depends on| n332
  n163 -->|Depends on| n559
  n163 -->|Depends on| n289
  n163 -->|Depends on| n294
  n163 -->|Depends on| n290
  n165 -->|Serves| n434
  n165 -->|Depends on| n153
  n165 -->|Depends on| n297
  n166 -->|Serves| n434
  n166 -->|Depends on| n139
  n166 -->|Depends on| n190
  n166 -->|Depends on| n666
  n166 -->|Depends on| n179
  n166 -->|Depends on| n21
  n166 -->|Depends on| n39
  n166 -->|Depends on| n25
  n166 -->|Depends on| n167
  n166 -->|Depends on| n137
  n168 -->|Serves| n434
  n169 -->|Serves| n434
  n170 -->|Serves| n434
  n170 -->|Depends on| n40
  n170 -->|Depends on| n142
  n170 -->|Depends on| n287
  n170 -->|Depends on| n296
  n170 -->|Depends on| n289
  n170 -->|Depends on| n153
  n170 -->|Depends on| n178
  n170 -->|Depends on| n181
  n170 -->|Depends on| n150
  n170 -->|Depends on| n169
  n170 -->|Depends on| n442
  n170 -->|Depends on| n139
  n170 -->|Depends on| n666
  n170 -->|Depends on| n315
  n170 -->|Depends on| n156
  n170 -->|Depends on| n157
  n170 -->|Depends on| n168
  n172 -->|Serves| n434
  n172 -->|Depends on| n27
  n172 -->|Depends on| n220
  n172 -->|Depends on| n140
  n172 -->|Depends on| n139
  n172 -->|Depends on| n436
  n172 -->|Depends on| n431
  n172 -->|Depends on| n169
  n172 -->|Depends on| n437
  n172 -->|Depends on| n438
  n172 -->|Depends on| n181
  n172 -->|Depends on| n21
  n172 -->|Depends on| n39
  n172 -->|Depends on| n179
  n172 -->|Depends on| n170
  n172 -->|Depends on| n40
  n172 -->|Depends on| n138
  n172 -->|Depends on| n295
  n172 -->|Depends on| n228
  n172 -->|Depends on| n222
  n172 -->|Depends on| n224
  n172 -->|Depends on| n239
  n172 -->|Depends on| n236
  n172 -->|Depends on| n234
  n172 -->|Depends on| n226
  n173 -->|Serves| n238
  n173 -->|Applied by| n172
  n173 -->|Applied by| n186
  n174 -->|Serves| n441
  n174 -->|Depends on| n167
  n174 -->|Depends on| n139
  n174 -->|Depends on| n137
  n174 -->|Depends on| n181
  n174 -->|Depends on| n252
  n174 -->|Depends on| n25
  n174 -->|Depends on| n21
  n174 -->|Depends on| n39
  n174 -->|Depends on| n40
  n174 -->|Depends on| n297
  n175 -->|Serves| n441
  n175 -->|Depends on| n137
  n175 -->|Depends on| n178
  n175 -->|Depends on| n40
  n175 -->|Depends on| n297
  n177 -->|Serves| n434
  n177 -->|Depends on| n139
  n177 -->|Depends on| n430
  n177 -->|Depends on| n176
  n177 -->|Depends on| n17
  n177 -->|Depends on| n175
  n177 -->|Depends on| n186
  n177 -->|Depends on| n294
  n178 -->|Serves| n434
  n178 -->|Depends on| n613
  n179 -->|Serves| n434
  n179 -->|Depends on| n139
  n179 -->|Depends on| n21
  n179 -->|Depends on| n39
  n179 -->|Depends on| n191
  n179 -->|Depends on| n40
  n179 -->|Depends on| n138
  n179 -->|Depends on| n666
  n180 -->|Serves| n434
  n180 -->|Implements| n28
  n180 -->|Depends on| n21
  n180 -->|Depends on| n39
  n180 -->|Depends on| n25
  n180 -->|Depends on| n171
  n180 -->|Depends on| n46
  n181 -->|Serves| n434
  n181 -->|Depends on| n142
  n181 -->|Depends on| n241
  n182 -->|Serves| n434
  n182 -->|Depends on| n286
  n183 -->|Serves| n434
  n183 -->|Depends on| n668
  n183 -->|Depends on| n181
  n183 -->|Depends on| n185
  n183 -->|Depends on| n55
  n183 -->|Depends on| n27
  n183 -->|Depends on| n46
  n183 -->|Depends on| n25
  n183 -->|Depends on| n39
  n183 -->|Depends on| n178
  n183 -->|Depends on| n134
  n183 -->|Depends on| n287
  n183 -->|Depends on| n667
  n183 -->|Depends on| n140
  n183 -->|Depends on| n40
  n184 -->|Serves| n441
  n184 -->|Applied by| n170
  n184 -->|Applied by| n186
  n186 -->|Serves| n434
  n186 -->|Depends on| n220
  n186 -->|Depends on| n133
  n186 -->|Depends on| n146
  n186 -->|Depends on| n135
  n186 -->|Depends on| n139
  n186 -->|Depends on| n31
  n186 -->|Depends on| n21
  n186 -->|Depends on| n39
  n186 -->|Depends on| n40
  n186 -->|Depends on| n179
  n186 -->|Depends on| n297
  n186 -->|Depends on| n302
  n186 -->|Depends on| n230
  n186 -->|Depends on| n222
  n186 -->|Depends on| n236
  n186 -->|Depends on| n232
  n187 -->|Serves| n434
  n187 -->|Depends on| n143
  n187 -->|Depends on| n142
  n187 -->|Depends on| n139
  n187 -->|Depends on| n39
  n187 -->|Depends on| n40
  n187 -->|Depends on| n220
  n187 -->|Depends on| n287
  n188 -->|Refines| n434
  n189 -->|Accepts| n188
  n193 -->|Serves| n434
  n193 -->|Depends on| n194
  n193 -->|Depends on| n668
  n193 -->|Depends on| n142
  n193 -->|Depends on| n648
  n193 -->|Depends on| n654
  n193 -->|Depends on| n652
  n193 -->|Depends on| n655
  n193 -->|Depends on| n649
  n193 -->|Depends on| n646
  n193 -->|Depends on| n645
  n193 -->|Depends on| n656
  n193 -->|Depends on| n663
  n193 -->|Depends on| n665
  n193 -->|Depends on| n651
  n195 -->|Read in| n200
  n196 -->|Read in| n200
  n197 -->|Read in| n200
  n198 -->|Read in| n200
  n199 -->|Read in| n200
  n200 -->|Queries written in| n612
  n200 -->|Read by| n621
  n200 -->|Uses| n304
  n201 -->|Read in| n200
  n202 -->|Read in| n200
  n202 -->|Depends on| n198
  n203 -->|Read in| n210
  n204 -->|Read in| n210
  n205 -->|Read in| n210
  n206 -->|Read in| n210
  n206 -->|Depends on| n211
  n206 -->|Depends on| n208
  n207 -->|Read in| n210
  n207 -->|Depends on| n211
  n207 -->|Depends on| n208
  n208 -->|Read in| n210
  n209 -->|Read in| n210
  n209 -->|Depends on| n207
  n210 -->|Queries written in| n612
  n210 -->|Read by| n621
  n210 -->|Uses| n307
  n211 -->|Read in| n210
  n211 -->|Depends on| n205
  n212 -->|Read in| n666
  n213 -->|Read in| n200
  n214 -->|Read in| n200
  n215 -->|Read in| n200
  n217 -->|Read in| n210
  n217 -->|Depends on| n207
  n218 -->|Read in| n200
  n219 -->|Read in| n210
  n219 -->|Depends on| n205
  n220 -->|Serves| n434
  n220 -->|Depends on| n621
  n220 -->|Depends on| n614
  n220 -->|Depends on| n666
  n220 -->|Depends on| n200
  n220 -->|Depends on| n669
  n220 -->|Depends on| n628
  n220 -->|Depends on| n629
  n220 -->|Depends on| n630
  n220 -->|Depends on| n31
  n220 -->|Depends on| n21
  n220 -->|Depends on| n39
  n220 -->|Depends on| n291
  n221 -->|Serves| n434
  n221 -->|Applied by| n220
  n221 -->|Applied by| n332
  n222 -->|Refines| n238
  n223 -->|Accepts| n222
  n224 -->|Refines| n238
  n225 -->|Accepts| n224
  n226 -->|Refines| n238
  n227 -->|Accepts| n226
  n228 -->|Refines| n238
  n229 -->|Accepts| n228
  n230 -->|Refines| n238
  n231 -->|Accepts| n230
  n232 -->|Refines| n238
  n233 -->|Accepts| n232
  n234 -->|Refines| n236
  n234 -->|Depends on| n236
  n235 -->|Accepts| n234
  n236 -->|Refines| n238
  n237 -->|Accepts| n236
  n239 -->|Refines| n238
  n240 -->|Accepts| n239
  n241 -->|Refines| n443
  n242 -->|Accepts| n241
  n244 -->|Refines| n443
  n245 -->|Accepts| n244
  n246 -->|Read in| n210
  n246 -->|Depends on| n207
  n247 -->|Defined by| n253
  n247 -->|Depends on| n253
  n248 -->|Defined by| n253
  n248 -->|Depends on| n253
  n249 -->|Defined by| n253
  n249 -->|Depends on| n253
  n250 -->|Defined by| n253
  n250 -->|Depends on| n253
  n250 -->|Depends on| n248
  n251 -->|Defined by| n253
  n251 -->|Depends on| n253
  n251 -->|Depends on| n247
  n252 -->|Defined by| n253
  n252 -->|Depends on| n253
  n252 -->|Depends on| n247
  n254 -->|Read in| n210
  n254 -->|Depends on| n211
  n254 -->|Depends on| n208
  n254 -->|Depends on| n207
  n254 -->|Depends on| n248
  n255 -->|Defined by| n253
  n255 -->|Depends on| n253
  n257 -->|Defined by| n253
  n257 -->|Depends on| n253
  n258 -->|Defined by| n253
  n258 -->|Depends on| n253
  n259 -->|Defined by| n253
  n259 -->|Depends on| n253
  n260 -->|Depends on| n139
  n261 -->|Read in| n210
  n261 -->|Depends on| n207
  n262 -->|Defined by| n253
  n262 -->|Depends on| n253
  n263 -->|Defined by| n256
  n263 -->|Depends on| n256
  n263 -->|Depends on| n266
  n263 -->|Depends on| n265
  n264 -->|Defined by| n256
  n264 -->|Depends on| n256
  n264 -->|Depends on| n253
  n265 -->|Defined by| n256
  n265 -->|Depends on| n256
  n266 -->|Defined by| n256
  n266 -->|Depends on| n256
  n266 -->|Depends on| n253
  n271 -->|Defined by| n277
  n271 -->|Depends on| n277
  n271 -->|Depends on| n283
  n272 -->|Defined by| n277
  n272 -->|Depends on| n277
  n273 -->|Defined by| n277
  n273 -->|Depends on| n277
  n274 -->|Defined by| n277
  n274 -->|Depends on| n277
  n275 -->|Defined by| n277
  n275 -->|Depends on| n277
  n275 -->|Depends on| n274
  n276 -->|Defined by| n277
  n276 -->|Depends on| n277
  n276 -->|Depends on| n274
  n278 -->|Defined by| n277
  n278 -->|Depends on| n277
  n279 -->|Defined by| n277
  n279 -->|Depends on| n277
  n279 -->|Depends on| n278
  n280 -->|Defined by| n277
  n280 -->|Depends on| n277
  n280 -->|Depends on| n278
  n281 -->|Defined by| n277
  n281 -->|Depends on| n277
  n281 -->|Depends on| n276
  n282 -->|Defined by| n277
  n282 -->|Depends on| n277
  n282 -->|Depends on| n283
  n283 -->|Defined by| n277
  n283 -->|Depends on| n277
  n284 -->|Defined by| n277
  n284 -->|Depends on| n277
  n284 -->|Depends on| n278
  n285 -->|Written in| n294
  n285 -->|Depends on| n294
  n286 -->|Written in| n294
  n286 -->|Depends on| n294
  n287 -->|Written in| n294
  n287 -->|Depends on| n294
  n287 -->|Depends on| n296
  n288 -->|Serves| n441
  n288 -->|Applied by| n287
  n288 -->|Applied by| n302
  n288 -->|Applied by| n290
  n288 -->|Applied by| n286
  n288 -->|Applied by| n301
  n288 -->|Applied by| n285
  n288 -->|Applied by| n298
  n288 -->|Applied by| n296
  n289 -->|Serves| n441
  n289 -->|Depends on| n294
  n290 -->|Written in| n294
  n290 -->|Depends on| n294
  n290 -->|Depends on| n296
  n291 -->|Written in| n294
  n292 -->|Written in| n294
  n293 -->|Written in| n294
  n295 -->|Written in| n294
  n296 -->|Serves| n441
  n296 -->|Depends on| n294
  n297 -->|Written in| n294
  n298 -->|Written in| n294
  n298 -->|Depends on| n294
  n299 -->|Written in| n294
  n300 -->|Written in| n294
  n301 -->|Written in| n294
  n301 -->|Depends on| n294
  n302 -->|Written in| n294
  n302 -->|Depends on| n294
  n303 -->|Written in| n294
  n309 -->|Serves| n441
  n311 -->|Serves| n441
  n315 -->|Serves| n441
  n317 -->|Defined by| n346
  n317 -->|Read in| n210
  n317 -->|Depends on| n346
  n317 -->|Depends on| n335
  n317 -->|Depends on| n207
  n318 -->|Defined by| n346
  n318 -->|Read in| n210
  n318 -->|Depends on| n346
  n318 -->|Depends on| n144
  n318 -->|Depends on| n325
  n318 -->|Depends on| n206
  n318 -->|Depends on| n207
  n319 -->|Defined by| n346
  n319 -->|Read in| n210
  n319 -->|Depends on| n346
  n319 -->|Depends on| n335
  n319 -->|Depends on| n207
  n320 -->|Defined by| n346
  n320 -->|Read in| n210
  n320 -->|Depends on| n346
  n320 -->|Depends on| n335
  n320 -->|Depends on| n206
  n320 -->|Depends on| n207
  n321 -->|Defined by| n346
  n321 -->|Read in| n210
  n321 -->|Depends on| n346
  n321 -->|Depends on| n335
  n321 -->|Depends on| n206
  n321 -->|Depends on| n207
  n321 -->|Depends on| n339
  n322 -->|Defined by| n346
  n322 -->|Read in| n210
  n322 -->|Depends on| n346
  n322 -->|Depends on| n335
  n322 -->|Depends on| n206
  n322 -->|Depends on| n207
  n323 -->|Defined by| n346
  n323 -->|Read in| n210
  n323 -->|Depends on| n346
  n323 -->|Depends on| n270
  n323 -->|Depends on| n1
  n323 -->|Depends on| n206
  n323 -->|Depends on| n207
  n323 -->|Depends on| n219
  n323 -->|Depends on| n216
  n324 -->|Read in| n210
  n324 -->|Depends on| n211
  n325 -->|Defined by| n346
  n325 -->|Read in| n210
  n325 -->|Depends on| n346
  n325 -->|Depends on| n7
  n325 -->|Depends on| n206
  n325 -->|Depends on| n207
  n325 -->|Depends on| n219
  n325 -->|Depends on| n201
  n327 -->|Defined by| n346
  n327 -->|Read in| n210
  n327 -->|Depends on| n346
  n327 -->|Depends on| n335
  n327 -->|Depends on| n206
  n327 -->|Depends on| n207
  n327 -->|Depends on| n317
  n327 -->|Depends on| n321
  n328 -->|Defined by| n346
  n328 -->|Read in| n200
  n328 -->|Depends on| n346
  n328 -->|Depends on| n214
  n328 -->|Depends on| n213
  n329 -->|Uses the variables of| n9
  n329 -->|Uses the variables of| n12
  n329 -->|Uses the variables of| n6
  n329 -->|Styles| n332
  n330 -->|Defined by| n346
  n330 -->|Read in| n210
  n330 -->|Depends on| n346
  n330 -->|Depends on| n335
  n330 -->|Depends on| n207
  n332 -->|Serves| n434
  n332 -->|Depends on| n333
  n332 -->|Depends on| n342
  n332 -->|Depends on| n7
  n332 -->|Depends on| n13
  n332 -->|Depends on| n4
  n332 -->|Depends on| n9
  n332 -->|Depends on| n8
  n332 -->|Depends on| n12
  n332 -->|Depends on| n5
  n332 -->|Depends on| n10
  n332 -->|Depends on| n3
  n332 -->|Depends on| n6
  n332 -->|Depends on| n45
  n332 -->|Depends on| n21
  n332 -->|Depends on| n16
  n332 -->|Depends on| n19
  n332 -->|Depends on| n340
  n332 -->|Depends on| n345
  n332 -->|Depends on| n343
  n332 -->|Depends on| n328
  n332 -->|Depends on| n324
  n332 -->|Depends on| n336
  n332 -->|Depends on| n334
  n332 -->|Depends on| n199
  n332 -->|Depends on| n198
  n332 -->|Depends on| n297
  n332 -->|Depends on| n294
  n332 -->|Depends on| n621
  n332 -->|Depends on| n210
  n332 -->|Depends on| n200
  n334 -->|Defined by| n346
  n334 -->|Read in| n210
  n334 -->|Depends on| n346
  n334 -->|Depends on| n203
  n334 -->|Depends on| n211
  n334 -->|Depends on| n208
  n334 -->|Depends on| n207
  n336 -->|Defined by| n346
  n336 -->|Read in| n210
  n336 -->|Depends on| n346
  n336 -->|Depends on| n217
  n336 -->|Depends on| n212
  n336 -->|Depends on| n653
  n336 -->|Depends on| n643
  n337 -->|Uses the variables of| n7
  n337 -->|Uses the variables of| n13
  n337 -->|Uses the variables of| n9
  n337 -->|Uses the variables of| n8
  n337 -->|Uses the variables of| n12
  n337 -->|Uses the variables of| n5
  n337 -->|Uses the variables of| n10
  n337 -->|Uses the variables of| n3
  n337 -->|Uses the variables of| n6
  n337 -->|Styles| n332
  n339 -->|Defined by| n346
  n339 -->|Read in| n210
  n339 -->|Depends on| n346
  n339 -->|Depends on| n338
  n339 -->|Depends on| n335
  n339 -->|Depends on| n206
  n339 -->|Depends on| n207
  n340 -->|Defined by| n346
  n340 -->|Read in| n210
  n340 -->|Depends on| n346
  n340 -->|Depends on| n206
  n340 -->|Depends on| n341
  n340 -->|Depends on| n327
  n340 -->|Depends on| n323
  n341 -->|Defined by| n346
  n341 -->|Read in| n210
  n341 -->|Depends on| n346
  n341 -->|Depends on| n206
  n341 -->|Depends on| n318
  n341 -->|Depends on| n319
  n341 -->|Depends on| n320
  n341 -->|Depends on| n330
  n341 -->|Depends on| n322
  n343 -->|Defined by| n346
  n343 -->|Read in| n200
  n343 -->|Depends on| n346
  n343 -->|Depends on| n199
  n343 -->|Depends on| n198
  n343 -->|Depends on| n201
  n343 -->|Depends on| n197
  n344 -->|Serves| n441
  n344 -->|Applied by| n337
  n344 -->|Applied by| n329
  n344 -->|Applied by| n345
  n344 -->|Applied by| n328
  n344 -->|Applied by| n332
  n345 -->|Defined by| n346
  n345 -->|Read in| n200
  n345 -->|Depends on| n346
  n345 -->|Depends on| n199
  n345 -->|Depends on| n214
  n345 -->|Depends on| n213
  n345 -->|Depends on| n196
  n345 -->|Depends on| n215
  n345 -->|Depends on| n202
  n345 -->|Depends on| n198
  n347 -->|Chooses| n360
  n347 -->|In| n30
  n347 -->|In| n52
  n347 -->|Serves| n435
  n348 -->|Chooses| n387
  n348 -->|In| n30
  n348 -->|In| n52
  n348 -->|Serves| n435
  n349 -->|Implements| n21
  n350 -->|Implements| n22
  n351 -->|Implements| n23
  n353 -->|Chooses| n398
  n353 -->|Chooses| n386
  n353 -->|In| n30
  n353 -->|In| n52
  n353 -->|Serves| n435
  n354 -->|Implements| n16
  n354 -->|Uses| n305
  n355 -->|Chooses| n354
  n355 -->|In| n30
  n355 -->|In| n52
  n355 -->|Serves| n435
  n356 -->|Implements| n41
  n356 -->|Implements| n43
  n356 -->|Implements| n42
  n356 -->|Depends on| n357
  n356 -->|Depends on| n39
  n356 -->|Depends on| n144
  n356 -->|Depends on| n299
  n358 -->|Chooses| n365
  n358 -->|Chooses| n380
  n358 -->|In| n52
  n358 -->|Serves| n435
  n359 -->|Chooses| n368
  n359 -->|Chooses| n394
  n359 -->|Chooses| n381
  n359 -->|Chooses| n356
  n359 -->|Chooses| n366
  n359 -->|In| n52
  n359 -->|Serves| n435
  n360 -->|Implements| n14
  n360 -->|Depends on| n21
  n360 -->|Depends on| n23
  n360 -->|Depends on| n668
  n360 -->|Depends on| n648
  n360 -->|Depends on| n649
  n360 -->|Depends on| n646
  n360 -->|Depends on| n645
  n360 -->|Depends on| n657
  n360 -->|Depends on| n663
  n360 -->|Depends on| n665
  n360 -->|Depends on| n651
  n360 -->|Depends on| n655
  n362 -->|Depends on| n22
  n362 -->|Depends on| n23
  n362 -->|Depends on| n21
  n362 -->|Depends on| n39
  n363 -->|Depends on| n22
  n363 -->|Depends on| n23
  n363 -->|Depends on| n21
  n363 -->|Depends on| n39
  n363 -->|Depends on| n364
  n363 -->|Depends on| n139
  n365 -->|Implements| n21
  n365 -->|Implements| n23
  n365 -->|Implements| n22
  n365 -->|Implements| n56
  n365 -->|Depends on| n39
  n365 -->|Depends on| n367
  n365 -->|Depends on| n299
  n366 -->|Implements| n26
  n366 -->|Implements| n47
  n366 -->|Depends on| n299
  n368 -->|Implements| n50
  n368 -->|Implements| n51
  n368 -->|Depends on| n361
  n368 -->|Depends on| n299
  n369 -->|Implements| n18
  n369 -->|Depends on| n50
  n369 -->|Depends on| n144
  n369 -->|Depends on| n299
  n370 -->|Implements| n19
  n370 -->|Depends on| n331
  n371 -->|Implements| n25
  n372 -->|Implements| n26
  n373 -->|Chooses| n349
  n373 -->|Chooses| n351
  n373 -->|Chooses| n350
  n373 -->|Chooses| n376
  n373 -->|Chooses| n377
  n373 -->|Chooses| n378
  n373 -->|Chooses| n395
  n373 -->|Chooses| n383
  n373 -->|Chooses| n382
  n373 -->|Chooses| n372
  n373 -->|In| n30
  n373 -->|Serves| n435
  n374 -->|Implements| n39
  n375 -->|Chooses| n374
  n375 -->|Chooses| n371
  n375 -->|Chooses| n370
  n375 -->|Chooses| n379
  n375 -->|Chooses| n369
  n375 -->|Chooses| n388
  n375 -->|In| n30
  n375 -->|In| n52
  n375 -->|Serves| n435
  n376 -->|Implements| n41
  n376 -->|Depends on| n402
  n377 -->|Implements| n43
  n377 -->|Depends on| n402
  n378 -->|Implements| n50
  n378 -->|Depends on| n299
  n379 -->|Implements| n53
  n380 -->|Implements| n33
  n380 -->|Depends on| n23
  n380 -->|Depends on| n39
  n380 -->|Depends on| n139
  n380 -->|Depends on| n309
  n381 -->|Implements| n34
  n382 -->|Implements| n33
  n383 -->|Implements| n34
  n383 -->|Depends on| n153
  n384 -->|Depends on| n362
  n384 -->|Depends on| n363
  n385 -->|Chooses| n384
  n385 -->|In| n30
  n385 -->|In| n52
  n385 -->|Serves| n435
  n386 -->|Implements| n45
  n386 -->|Depends on| n352
  n386 -->|Depends on| n139
  n386 -->|Depends on| n190
  n386 -->|Depends on| n666
  n387 -->|Implements| n55
  n387 -->|Uses| n314
  n387 -->|Uses| n308
  n388 -->|Implements| n27
  n389 -->|Chooses| n180
  n389 -->|In| n30
  n389 -->|In| n52
  n389 -->|Serves| n435
  n390 -->|Implements| n46
  n391 -->|Chooses| n390
  n391 -->|In| n52
  n391 -->|Serves| n435
  n392 -->|Chooses| n393
  n392 -->|In| n30
  n392 -->|Serves| n435
  n393 -->|Implements| n46
  n393 -->|Depends on| n139
  n393 -->|Depends on| n352
  n393 -->|Depends on| n166
  n393 -->|Depends on| n171
  n394 -->|Implements| n17
  n394 -->|Depends on| n396
  n394 -->|Depends on| n397
  n395 -->|Implements| n17
  n395 -->|Depends on| n145
  n398 -->|Implements| n40
  n398 -->|Depends on| n352
  n399 -->|Chooses| n403
  n399 -->|In| n30
  n399 -->|In| n52
  n399 -->|Serves| n435
  n400 -->|Implements| n31
  n400 -->|Uses| n312
  n400 -->|Depends on| n40
  n400 -->|Depends on| n138
  n400 -->|Depends on| n666
  n401 -->|Chooses| n400
  n401 -->|In| n30
  n401 -->|In| n52
  n401 -->|Serves| n435
  n403 -->|Implements| n49
  n403 -->|Uses| n316
  n403 -->|Depends on| n299
  n404 -->|Serves| n441
  n404 -->|Applied by| n160
  n404 -->|Applied by| n172
  n405 -->|Serves| n441
  n405 -->|Applied by| n168
  n405 -->|Applied by| n170
  n406 -->|Serves| n434
  n406 -->|Applied by| n109
  n406 -->|Applied by| n148
  n407 -->|Serves| n434
  n407 -->|Applied by| n54
  n407 -->|Applied by| n44
  n407 -->|Applied by| n32
  n407 -->|Applied by| n29
  n408 -->|Serves| n441
  n408 -->|Applied by| n160
  n408 -->|Applied by| n621
  n409 -->|Serves| n434
  n409 -->|Applied by| n101
  n409 -->|Applied by| n188
  n409 -->|Applied by| n570
  n409 -->|Applied by| n576
  n410 -->|Serves| n434
  n410 -->|Applied by| n183
  n410 -->|Applied by| n55
  n410 -->|Applied by| n666
  n410 -->|Applied by| n134
  n411 -->|Serves| n434
  n411 -->|Applied by| n160
  n411 -->|Applied by| n107
  n412 -->|Serves| n441
  n412 -->|Applied by| n174
  n412 -->|Applied by| n118
  n413 -->|Serves| n441
  n413 -->|Applied by| n160
  n413 -->|Applied by| n159
  n413 -->|Applied by| n177
  n413 -->|Applied by| n183
  n413 -->|Applied by| n172
  n414 -->|Serves| n443
  n414 -->|Applied by| n179
  n414 -->|Applied by| n160
  n414 -->|Applied by| n159
  n414 -->|Applied by| n181
  n414 -->|Applied by| n241
  n414 -->|Applied by| n101
  n415 -->|Serves| n443
  n415 -->|Applied by| n179
  n415 -->|Applied by| n172
  n415 -->|Applied by| n131
  n415 -->|Applied by| n122
  n415 -->|Applied by| n244
  n415 -->|Applied by| n243
  n416 -->|Serves| n441
  n416 -->|Applied by| n614
  n416 -->|Applied by| n220
  n416 -->|Applied by| n160
  n416 -->|Applied by| n29
  n416 -->|Applied by| n32
  n417 -->|Serves| n434
  n417 -->|Applied by| n172
  n417 -->|Applied by| n160
  n417 -->|Applied by| n179
  n418 -->|Serves| n441
  n418 -->|Applied by| n160
  n418 -->|Applied by| n621
  n419 -->|Serves| n441
  n419 -->|Applied by| n107
  n419 -->|Applied by| n127
  n419 -->|Applied by| n175
  n419 -->|Applied by| n332
  n419 -->|Applied by| n158
  n420 -->|Serves| n434
  n420 -->|Applied by| n159
  n420 -->|Applied by| n170
  n420 -->|Applied by| n186
  n420 -->|Applied by| n44
  n421 -->|Serves| n443
  n421 -->|Applied by| n179
  n421 -->|Applied by| n131
  n421 -->|Applied by| n384
  n421 -->|Applied by| n101
  n421 -->|Applied by| n172
  n421 -->|Applied by| n115
  n422 -->|Serves| n434
  n422 -->|Applied by| n40
  n422 -->|Applied by| n140
  n422 -->|Applied by| n136
  n422 -->|Applied by| n172
  n423 -->|Serves| n434
  n423 -->|Applied by| n125
  n423 -->|Applied by| n119
  n423 -->|Applied by| n605
  n423 -->|Applied by| n610
  n423 -->|Applied by| n608
  n423 -->|Applied by| n595
  n423 -->|Applied by| n582
  n424 -->|Serves| n435
  n424 -->|Applied by| n375
  n424 -->|Applied by| n373
  n424 -->|Applied by| n359
  n424 -->|Applied by| n355
  n424 -->|Applied by| n399
  n424 -->|Applied by| n401
  n424 -->|Applied by| n348
  n424 -->|Applied by| n353
  n424 -->|Applied by| n546
  n424 -->|Applied by| n547
  n424 -->|Applied by| n566
  n424 -->|Applied by| n565
  n424 -->|Applied by| n558
  n424 -->|Applied by| n557
  n425 -->|Serves| n434
  n425 -->|Applied by| n101
  n425 -->|Applied by| n188
  n425 -->|Applied by| n571
  n425 -->|Applied by| n570
  n425 -->|Applied by| n577
  n426 -->|Serves| n434
  n426 -->|Applied by| n160
  n426 -->|Applied by| n187
  n427 -->|Serves| n434
  n427 -->|Applied by| n172
  n427 -->|Applied by| n577
  n428 -->|Serves| n434
  n428 -->|Applied by| n172
  n428 -->|Applied by| n186
  n428 -->|Applied by| n179
  n429 -->|Serves| n441
  n429 -->|Applied by| n621
  n429 -->|Applied by| n614
  n429 -->|Applied by| n287
  n429 -->|Applied by| n291
  n429 -->|Applied by| n295
  n429 -->|Applied by| n302
  n429 -->|Applied by| n297
  n429 -->|Applied by| n290
  n429 -->|Applied by| n286
  n429 -->|Applied by| n285
  n429 -->|Applied by| n300
  n429 -->|Applied by| n299
  n429 -->|Applied by| n301
  n439 -->|Refines| n434
  n440 -->|Accepts| n439
  n444 -->|Releases| n54
  n445 -->|Releases| n54
  n445 -->|Assembled by| n534
  n446 -->|Releases| n54
  n446 -->|Assembled by| n544
  n447 -->|Releases| n54
  n447 -->|Assembled by| n446
  n448 -->|Releases| n54
  n448 -->|Assembled by| n445
  n449 -->|Releases| n54
  n449 -->|Assembled by| n448
  n450 -->|Releases| n54
  n450 -->|Assembled by| n449
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
  n457 -->|Assembled by| n444
  n458 -->|Releases| n54
  n458 -->|Assembled by| n456
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
  n465 -->|Assembled by| n464
  n466 -->|Releases| n54
  n466 -->|Assembled by| n465
  n467 -->|Releases| n54
  n467 -->|Assembled by| n466
  n468 -->|Releases| n54
  n468 -->|Assembled by| n457
  n469 -->|Releases| n54
  n469 -->|Assembled by| n467
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
  n477 -->|Assembled by| n476
  n478 -->|Releases| n54
  n478 -->|Assembled by| n477
  n479 -->|Releases| n54
  n479 -->|Assembled by| n468
  n480 -->|Releases| n54
  n480 -->|Assembled by| n478
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
  n488 -->|Assembled by| n487
  n489 -->|Releases| n54
  n489 -->|Assembled by| n488
  n490 -->|Releases| n54
  n490 -->|Assembled by| n479
  n491 -->|Releases| n54
  n491 -->|Assembled by| n489
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
  n499 -->|Assembled by| n498
  n500 -->|Releases| n54
  n500 -->|Assembled by| n499
  n501 -->|Releases| n54
  n501 -->|Assembled by| n490
  n502 -->|Releases| n54
  n502 -->|Assembled by| n500
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
  n510 -->|Assembled by| n509
  n511 -->|Releases| n54
  n511 -->|Assembled by| n510
  n512 -->|Releases| n54
  n512 -->|Assembled by| n501
  n513 -->|Releases| n54
  n513 -->|Assembled by| n511
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
  n521 -->|Assembled by| n520
  n522 -->|Releases| n54
  n522 -->|Assembled by| n521
  n523 -->|Releases| n54
  n523 -->|Assembled by| n512
  n524 -->|Releases| n54
  n524 -->|Assembled by| n522
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
  n532 -->|Assembled by| n531
  n533 -->|Releases| n54
  n533 -->|Assembled by| n532
  n534 -->|Releases| n54
  n534 -->|Assembled by| n523
  n535 -->|Releases| n54
  n535 -->|Assembled by| n533
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
  n543 -->|Assembled by| n542
  n544 -->|Releases| n54
  n544 -->|Assembled by| n543
  n545 -->|Serves| n434
  n545 -->|Depends on| n142
  n545 -->|Depends on| n562
  n545 -->|Depends on| n289
  n545 -->|Depends on| n296
  n545 -->|Depends on| n300
  n545 -->|Depends on| n156
  n546 -->|Chooses| n552
  n546 -->|In| n30
  n546 -->|In| n52
  n546 -->|Serves| n435
  n547 -->|Chooses| n554
  n547 -->|In| n30
  n547 -->|In| n52
  n547 -->|Serves| n435
  n549 -->|Serves| n434
  n549 -->|Depends on| n545
  n549 -->|Depends on| n550
  n549 -->|Depends on| n300
  n551 -->|Serves| n434
  n551 -->|Implements| n560
  n551 -->|Depends on| n556
  n551 -->|Depends on| n268
  n551 -->|Depends on| n346
  n551 -->|Depends on| n207
  n551 -->|Depends on| n209
  n551 -->|Depends on| n204
  n551 -->|Depends on| n153
  n551 -->|Depends on| n562
  n551 -->|Depends on| n300
  n552 -->|Serves| n434
  n552 -->|Implements| n550
  n552 -->|Depends on| n548
  n552 -->|Depends on| n155
  n552 -->|Depends on| n153
  n552 -->|Depends on| n250
  n552 -->|Depends on| n257
  n552 -->|Depends on| n259
  n552 -->|Depends on| n249
  n552 -->|Depends on| n251
  n552 -->|Depends on| n255
  n552 -->|Depends on| n262
  n552 -->|Depends on| n252
  n552 -->|Depends on| n258
  n552 -->|Depends on| n260
  n552 -->|Depends on| n264
  n552 -->|Depends on| n263
  n552 -->|Depends on| n246
  n552 -->|Depends on| n254
  n552 -->|Depends on| n300
  n553 -->|Serves| n434
  n553 -->|Applied by| n549
  n553 -->|Applied by| n567
  n553 -->|Applied by| n559
  n553 -->|Applied by| n545
  n553 -->|Applied by| n44
  n554 -->|Serves| n434
  n554 -->|Implements| n548
  n554 -->|Depends on| n277
  n554 -->|Depends on| n151
  n554 -->|Depends on| n7
  n554 -->|Depends on| n261
  n554 -->|Depends on| n272
  n554 -->|Depends on| n280
  n554 -->|Depends on| n284
  n554 -->|Depends on| n279
  n554 -->|Depends on| n271
  n554 -->|Depends on| n282
  n554 -->|Depends on| n273
  n554 -->|Depends on| n275
  n554 -->|Depends on| n276
  n554 -->|Depends on| n281
  n554 -->|Depends on| n289
  n554 -->|Depends on| n300
  n555 -->|Serves| n435
  n555 -->|Applied by| n549
  n555 -->|Applied by| n567
  n555 -->|Applied by| n559
  n555 -->|Applied by| n546
  n555 -->|Applied by| n547
  n555 -->|Applied by| n566
  n555 -->|Applied by| n565
  n555 -->|Applied by| n558
  n555 -->|Applied by| n557
  n557 -->|Chooses| n563
  n557 -->|In| n30
  n557 -->|In| n52
  n557 -->|Serves| n435
  n558 -->|Chooses| n551
  n558 -->|In| n30
  n558 -->|In| n52
  n558 -->|Serves| n435
  n559 -->|Serves| n434
  n559 -->|Depends on| n545
  n559 -->|Depends on| n560
  n559 -->|Depends on| n300
  n561 -->|Serves| n434
  n561 -->|Implements| n568
  n561 -->|Depends on| n564
  n561 -->|Depends on| n639
  n561 -->|Depends on| n637
  n561 -->|Depends on| n153
  n561 -->|Depends on| n635
  n561 -->|Depends on| n633
  n561 -->|Depends on| n634
  n561 -->|Depends on| n632
  n561 -->|Depends on| n638
  n561 -->|Depends on| n300
  n563 -->|Serves| n434
  n563 -->|Implements| n556
  n563 -->|Depends on| n268
  n563 -->|Depends on| n270
  n563 -->|Depends on| n346
  n563 -->|Depends on| n1
  n563 -->|Depends on| n11
  n563 -->|Depends on| n2
  n563 -->|Depends on| n207
  n563 -->|Depends on| n219
  n563 -->|Depends on| n216
  n563 -->|Depends on| n198
  n563 -->|Depends on| n204
  n563 -->|Depends on| n545
  n563 -->|Depends on| n289
  n563 -->|Depends on| n298
  n563 -->|Depends on| n300
  n563 -->|Depends on| n153
  n565 -->|Chooses| n569
  n565 -->|In| n30
  n565 -->|In| n52
  n565 -->|Serves| n435
  n566 -->|Chooses| n561
  n566 -->|In| n30
  n566 -->|In| n52
  n566 -->|Serves| n435
  n567 -->|Serves| n434
  n567 -->|Depends on| n545
  n567 -->|Depends on| n568
  n567 -->|Depends on| n300
  n569 -->|Serves| n434
  n569 -->|Implements| n564
  n569 -->|Depends on| n545
  n569 -->|Depends on| n637
  n569 -->|Depends on| n153
  n569 -->|Depends on| n635
  n569 -->|Depends on| n633
  n569 -->|Depends on| n640
  n569 -->|Depends on| n636
  n569 -->|Depends on| n289
  n569 -->|Depends on| n300
  n570 -->|Verifies| n107
  n570 -->|Verifies| n117
  n570 -->|Verifies| n159
  n570 -->|Verifies| n186
  n570 -->|Verifies| n549
  n570 -->|Verifies| n545
  n570 -->|Verifies| n552
  n570 -->|Verifies| n554
  n570 -->|Verifies| n175
  n570 -->|Verifies| n174
  n570 -->|Verifies| n365
  n570 -->|Verifies| n368
  n570 -->|Verifies| n394
  n570 -->|In| n52
  n570 -->|Depends on| n107
  n570 -->|Depends on| n576
  n570 -->|Depends on| n56
  n570 -->|Depends on| n51
  n570 -->|Depends on| n139
  n570 -->|Depends on| n21
  n570 -->|Depends on| n39
  n570 -->|Depends on| n41
  n570 -->|Depends on| n144
  n570 -->|Depends on| n286
  n570 -->|Depends on| n301
  n571 -->|Verifies| n160
  n571 -->|Verifies| n179
  n571 -->|Verifies| n183
  n571 -->|Verifies| n187
  n571 -->|Verifies| n170
  n571 -->|Verifies| n387
  n571 -->|Verifies| n400
  n571 -->|Verifies| n398
  n571 -->|Verifies| n365
  n571 -->|Verifies| n374
  n571 -->|Verifies| n356
  n571 -->|Verifies| n388
  n571 -->|In| n52
  n571 -->|Depends on| n160
  n571 -->|Depends on| n41
  n571 -->|Depends on| n17
  n571 -->|Depends on| n575
  n571 -->|Depends on| n301
  n572 -->|Verifies| n289
  n572 -->|Verifies| n296
  n572 -->|Verifies| n156
  n572 -->|Verifies| n157
  n572 -->|Verifies| n153
  n572 -->|Verifies| n315
  n572 -->|In| n52
  n572 -->|Depends on| n289
  n572 -->|Depends on| n296
  n572 -->|Depends on| n156
  n572 -->|Depends on| n157
  n572 -->|Depends on| n153
  n572 -->|Depends on| n294
  n572 -->|Depends on| n315
  n572 -->|Depends on| n573
  n572 -->|Depends on| n301
  n574 -->|Verifies| n161
  n574 -->|Verifies| n169
  n574 -->|Verifies| n168
  n574 -->|Verifies| n181
  n574 -->|Verifies| n178
  n574 -->|In| n52
  n574 -->|Depends on| n161
  n574 -->|Depends on| n169
  n574 -->|Depends on| n168
  n574 -->|Depends on| n181
  n574 -->|Depends on| n178
  n574 -->|Depends on| n578
  n574 -->|Depends on| n301
  n577 -->|Verifies| n172
  n577 -->|In| n52
  n577 -->|Depends on| n172
  n577 -->|Depends on| n160
  n577 -->|Depends on| n41
  n577 -->|Depends on| n17
  n577 -->|Depends on| n301
  n579 -->|Serves| n434
  n580 -->|Serves| n434
  n581 -->|Serves| n434
  n582 -->|Checks| n584
  n582 -->|Run by| n128
  n582 -->|Signed by| n594
  n583 -->|Checks| n584
  n583 -->|Run by| n111
  n583 -->|Signed by| n594
  n583 -->|Verifies| n349
  n583 -->|Verifies| n351
  n583 -->|Verifies| n350
  n583 -->|Verifies| n376
  n583 -->|Verifies| n377
  n583 -->|Verifies| n378
  n583 -->|Verifies| n395
  n583 -->|Verifies| n383
  n583 -->|Verifies| n382
  n583 -->|Verifies| n372
  n583 -->|Verifies| n393
  n584 -->|Produced by| n54
  n585 -->|Serves| n434
  n586 -->|Serves| n434
  n587 -->|Its obligations| n586
  n587 -->|Its obligations| n593
  n587 -->|Its obligations| n579
  n587 -->|Its obligations| n581
  n587 -->|Its obligations| n580
  n587 -->|Its obligations| n585
  n588 -->|Produced by| n114
  n588 -->|Carries| n36
  n590 -->|Checks| n588
  n590 -->|Run by| n597
  n590 -->|Signed by| n594
  n590 -->|Verifies| n63
  n590 -->|Verifies| n62
  n590 -->|Verifies| n61
  n590 -->|Verifies| n60
  n590 -->|Verifies| n59
  n590 -->|Verifies| n57
  n590 -->|Verifies| n58
  n592 -->|Serves| n434
  n592 -->|Depends on| n335
  n592 -->|Depends on| n268
  n592 -->|Depends on| n196
  n593 -->|Serves| n434
  n595 -->|Ships| n584
  n595 -->|Ships| n598
  n595 -->|Ships| n588
  n595 -->|Deployed by| n101
  n595 -->|Programs assembled for| n30
  n595 -->|Follows the policy| n587
  n596 -->|Verifies| n597
  n596 -->|Verifies| n592
  n596 -->|In| n52
  n596 -->|Depends on| n597
  n596 -->|Depends on| n588
  n596 -->|Depends on| n592
  n596 -->|Depends on| n601
  n596 -->|Depends on| n591
  n596 -->|Depends on| n301
  n597 -->|Serves| n434
  n597 -->|Part of| n602
  n597 -->|Depends on| n588
  n597 -->|Depends on| n294
  n597 -->|Depends on| n592
  n597 -->|Depends on| n589
  n597 -->|Depends on| n601
  n598 -->|Produced by| n36
  n598 -->|Assembled for| n15
  n599 -->|In| n52
  n600 -->|In| n30
  n601 -->|Written in| n294
  n602 -->|Deployed in| n30
  n603 -->|Implements| n48
  n603 -->|Depends on| n25
  n605 -->|Serves| n434
  n605 -->|Depends on| n139
  n605 -->|Depends on| n610
  n605 -->|Depends on| n21
  n605 -->|Depends on| n39
  n605 -->|Depends on| n25
  n605 -->|Depends on| n137
  n605 -->|Depends on| n168
  n605 -->|Depends on| n48
  n606 -->|Chooses| n603
  n606 -->|In| n30
  n606 -->|In| n52
  n606 -->|Serves| n434
  n607 -->|Serves| n434
  n607 -->|Depends on| n144
  n607 -->|Depends on| n179
  n607 -->|Depends on| n139
  n607 -->|Depends on| n191
  n607 -->|Depends on| n21
  n607 -->|Depends on| n39
  n608 -->|Refines| n434
  n609 -->|Accepts| n608
  n614 -->|Serves| n434
  n614 -->|Depends on| n140
  n614 -->|Depends on| n291
  n618 -->|Written in| n294
  n619 -->|Serves| n434
  n619 -->|Applied by| n621
  n619 -->|Applied by| n49
  n620 -->|Serves| n434
  n620 -->|Applied by| n621
  n620 -->|Applied by| n614
  n620 -->|Applied by| n49
  n621 -->|Serves| n434
  n621 -->|Serves| n441
  n621 -->|Depends on| n49
  n621 -->|Depends on| n615
  n621 -->|Depends on| n618
  n621 -->|Depends on| n616
  n621 -->|Depends on| n617
  n621 -->|Depends on| n611
  n621 -->|Depends on| n21
  n621 -->|Depends on| n27
  n621 -->|Depends on| n46
  n621 -->|Depends on| n139
  n621 -->|Depends on| n39
  n621 -->|Depends on| n25
  n622 -->|Defined by| n625
  n622 -->|Read in| n628
  n622 -->|Depends on| n625
  n623 -->|Defined by| n625
  n623 -->|Read in| n628
  n623 -->|Depends on| n625
  n624 -->|Defined by| n625
  n624 -->|Read in| n628
  n624 -->|Depends on| n625
  n624 -->|Depends on| n628
  n626 -->|Defined by| n625
  n626 -->|Read in| n628
  n626 -->|Depends on| n625
  n626 -->|Depends on| n624
  n627 -->|Defined by| n625
  n627 -->|Read in| n628
  n627 -->|Depends on| n625
  n627 -->|Depends on| n629
  n627 -->|Depends on| n624
  n628 -->|Defined by| n625
  n628 -->|Queries written in| n612
  n628 -->|Read by| n621
  n628 -->|Uses| n306
  n630 -->|Serves| n434
  n630 -->|Depends on| n625
  n630 -->|Depends on| n629
  n630 -->|Depends on| n139
  n630 -->|Depends on| n623
  n630 -->|Depends on| n624
  n630 -->|Depends on| n626
  n630 -->|Depends on| n622
  n630 -->|Depends on| n627
  n630 -->|Depends on| n39
  n630 -->|Depends on| n40
  n630 -->|Depends on| n289
  n630 -->|Depends on| n291
  n632 -->|Defined by| n639
  n632 -->|Depends on| n639
  n633 -->|Defined by| n639
  n633 -->|Depends on| n639
  n633 -->|Depends on| n635
  n633 -->|Depends on| n637
  n634 -->|Defined by| n639
  n634 -->|Depends on| n639
  n635 -->|Defined by| n639
  n635 -->|Depends on| n639
  n635 -->|Depends on| n637
  n636 -->|Defined by| n639
  n636 -->|Depends on| n639
  n636 -->|Depends on| n631
  n638 -->|Defined by| n639
  n638 -->|Depends on| n639
  n640 -->|Defined by| n639
  n640 -->|Depends on| n639
  n640 -->|Depends on| n631
  n641 -->|Defined by| n668
  n641 -->|Read in| n666
  n641 -->|Depends on| n668
  n642 -->|Defined by| n668
  n642 -->|Read in| n666
  n642 -->|Depends on| n668
  n643 -->|Defined by| n668
  n643 -->|Read in| n666
  n643 -->|Depends on| n668
  n644 -->|Defined by| n668
  n644 -->|Read in| n666
  n644 -->|Depends on| n668
  n645 -->|Defined by| n668
  n645 -->|Read in| n666
  n645 -->|Depends on| n668
  n646 -->|Defined by| n668
  n646 -->|Read in| n666
  n646 -->|Depends on| n668
  n647 -->|Defined by| n668
  n647 -->|Read in| n666
  n647 -->|Depends on| n668
  n647 -->|Depends on| n665
  n648 -->|Defined by| n668
  n648 -->|Read in| n666
  n648 -->|Depends on| n668
  n649 -->|Defined by| n668
  n649 -->|Read in| n666
  n649 -->|Depends on| n668
  n650 -->|Defined by| n668
  n650 -->|Read in| n666
  n650 -->|Depends on| n668
  n651 -->|Defined by| n668
  n651 -->|Read in| n666
  n651 -->|Depends on| n668
  n652 -->|Defined by| n668
  n652 -->|Read in| n666
  n652 -->|Depends on| n668
  n653 -->|Defined by| n668
  n653 -->|Read in| n666
  n653 -->|Depends on| n668
  n654 -->|Defined by| n668
  n654 -->|Read in| n666
  n654 -->|Depends on| n668
  n655 -->|Defined by| n668
  n655 -->|Read in| n666
  n655 -->|Depends on| n668
  n655 -->|Depends on| n665
  n656 -->|Defined by| n668
  n656 -->|Read in| n666
  n656 -->|Depends on| n668
  n657 -->|Defined by| n668
  n657 -->|Read in| n666
  n657 -->|Depends on| n668
  n658 -->|Defined by| n668
  n658 -->|Read in| n666
  n658 -->|Depends on| n668
  n659 -->|Defined by| n668
  n659 -->|Read in| n666
  n659 -->|Depends on| n668
  n660 -->|Defined by| n668
  n660 -->|Read in| n666
  n660 -->|Depends on| n668
  n661 -->|Defined by| n668
  n661 -->|Read in| n666
  n661 -->|Depends on| n668
  n663 -->|Defined by| n668
  n663 -->|Read in| n666
  n663 -->|Depends on| n668
  n663 -->|Depends on| n665
  n664 -->|Defined by| n668
  n664 -->|Read in| n666
  n664 -->|Depends on| n668
  n665 -->|Defined by| n668
  n665 -->|Read in| n666
  n665 -->|Depends on| n668
  n666 -->|Queries written in| n612
  n666 -->|Read by| n621
  n666 -->|Watches the globals| n671
  n666 -->|Uses| n313
  n667 -->|Serves| n434
  n669 -->|Serves| n434
  n669 -->|Depends on| n666
  n669 -->|Depends on| n668
  n669 -->|Depends on| n136
  n669 -->|Depends on| n662
  n669 -->|Depends on| n143
  n669 -->|Depends on| n142
  n669 -->|Depends on| n652
  n669 -->|Depends on| n665
  n669 -->|Depends on| n653
  n669 -->|Depends on| n659
  n669 -->|Depends on| n645
  n669 -->|Depends on| n644
  n669 -->|Depends on| n661
  n669 -->|Depends on| n663
  n669 -->|Depends on| n657
  n669 -->|Depends on| n641
  n669 -->|Depends on| n646
  n669 -->|Depends on| n655
  n669 -->|Depends on| n647
  n669 -->|Depends on| n642
  n669 -->|Depends on| n660
  n669 -->|Depends on| n658
  n669 -->|Depends on| n670
  n669 -->|Depends on| n650
  n669 -->|Depends on| n664
  n669 -->|Depends on| n643
  n669 -->|Depends on| n39
  n669 -->|Depends on| n40
  n669 -->|Depends on| n289
  n669 -->|Depends on| n291
  n670 -->|Defined by| n668
  n670 -->|Read in| n666
  n670 -->|Depends on| n668
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
