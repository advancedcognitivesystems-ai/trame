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
    n318["The standard library<br/><small>Package</small>"]:::neutral
    n319["tsx<br/><small>Package</small>"]:::held
    n320["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n321["TypeScript<br/><small>Package</small>"]:::held
    n322["Order of versions<br/><small>Function</small>"]:::held
    n323["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n324["Banner<br/><small>Syntax element</small>"]:::held
    n325["Brand<br/><small>Syntax element</small>"]:::held
    n326["State of the compilation<br/><small>Syntax element</small>"]:::held
    n327["Dates<br/><small>Syntax element</small>"]:::held
    n328["Head of the document<br/><small>Syntax element</small>"]:::held
    n329["Document picker<br/><small>Syntax element</small>"]:::held
    n330["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n331["Fonts<br/><small>Syntax element</small>"]:::held
    n332["Logo<br/><small>Syntax element</small>"]:::held
    n333["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n334["Main area<br/><small>Syntax element</small>"]:::held
    n335["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n336["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n337["Navigation<br/><small>Syntax element</small>"]:::held
    n338["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n339["Page<br/><small>Function</small>"]:::held
    n340["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n341["Document of the page<br/><small>Syntax element</small>"]:::held
    n342["Regions of the page<br/><small>Decision</small>"]:::neutral
    n343["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n344["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n345["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n346["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n347["Shell<br/><small>Syntax element</small>"]:::held
    n348["Side bar<br/><small>Syntax element</small>"]:::held
    n349["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n350["Colours of a status<br/><small>Syntax element</small>"]:::held
    n351["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n352["Theme<br/><small>Syntax element</small>"]:::held
    n353["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n354["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n355["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n356["System files, for reading<br/><small>Implementation</small>"]:::held
    n357["Trees on disk<br/><small>Implementation</small>"]:::held
    n358["System files, for writing<br/><small>Implementation</small>"]:::held
    n359["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n360["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n361["esbuild<br/><small>Implementation</small>"]:::held
    n362["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n363["Example process<br/><small>Function</small>"]:::held
    n364["Example project<br/><small>Decision</small>"]:::neutral
    n365["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n366["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n367["Amendments in place<br/><small>Implementation</small>"]:::held
    n368["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n369["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n370["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n371["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n372["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n373["A server in memory<br/><small>Function</small>"]:::held
    n374["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n375["Terminal in memory<br/><small>Function</small>"]:::held
    n376["Command line<br/><small>Implementation</small>"]:::held
    n377["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n378["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n379["Node HTTP server<br/><small>Implementation</small>"]:::held
    n380["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n381["Node paths<br/><small>Implementation</small>"]:::held
    n382["NodePlatform<br/><small>Technical choice</small>"]:::held
    n383["Node process<br/><small>Implementation</small>"]:::held
    n384["Node programs<br/><small>Implementation</small>"]:::held
    n385["Node terminal<br/><small>Implementation</small>"]:::held
    n386["Node timer<br/><small>Implementation</small>"]:::held
    n387["No installer in test<br/><small>Implementation</small>"]:::held
    n388["No registry in test<br/><small>Function</small>"]:::held
    n389["npm installs<br/><small>Implementation</small>"]:::held
    n390["npm's reports<br/><small>Implementation</small>"]:::held
    n391["Packages by their origin<br/><small>Implementation</small>"]:::held
    n392["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n393["Page resources<br/><small>Implementation</small>"]:::held
    n394["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n395["Results kept in the process<br/><small>Implementation</small>"]:::held
    n396["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n397["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n398["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n399["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n400["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n401["Stopped clock<br/><small>Function</small>"]:::held
    n402["System clock<br/><small>Implementation</small>"]:::held
    n403["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n404["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n405["Trame's prelude<br/><small>Implementation</small>"]:::held
    n406["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n407["tsx loader<br/><small>Implementation</small>"]:::held
    n408["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n409["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n410["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n411["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n412["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n413["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n414["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n415["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n416["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n417["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n418["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n419["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n420["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n421["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n422["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n423["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n424["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n425["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n426["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n427["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n428["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n429["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n430["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n431["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n432["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n433["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n434["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n435["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n436["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n437["Candidate dates<br/><small>Decision</small>"]:::neutral
    n438["Claim sets<br/><small>Decision</small>"]:::neutral
    n439["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n440["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n441["A specification that runs<br/><small>Goal</small>"]:::neutral
    n442["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n443["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n444["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n445["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n446["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n447["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n448["A single source of truth<br/><small>Goal</small>"]:::neutral
    n449["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n450["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n451["Generation 1<br/><small>Release</small>"]:::neutral
    n452["Generation 10<br/><small>Release</small>"]:::neutral
    n453["Generation 100<br/><small>Release</small>"]:::neutral
    n454["Generation 101<br/><small>Release</small>"]:::neutral
    n455["Generation 102<br/><small>Release</small>"]:::neutral
    n456["Generation 103<br/><small>Release</small>"]:::neutral
    n457["Generation 104<br/><small>Release</small>"]:::neutral
    n458["Generation 105<br/><small>Release</small>"]:::neutral
    n459["Generation 106<br/><small>Release</small>"]:::neutral
    n460["Generation 107<br/><small>Release</small>"]:::neutral
    n461["Generation 108<br/><small>Release</small>"]:::neutral
    n462["Generation 109<br/><small>Release</small>"]:::neutral
    n463["Generation 11<br/><small>Release</small>"]:::neutral
    n464["Generation 110<br/><small>Release</small>"]:::neutral
    n465["Generation 111<br/><small>Release</small>"]:::neutral
    n466["Generation 112<br/><small>Release</small>"]:::neutral
    n467["Generation 12<br/><small>Release</small>"]:::neutral
    n468["Generation 13<br/><small>Release</small>"]:::neutral
    n469["Generation 14<br/><small>Release</small>"]:::neutral
    n470["Generation 15<br/><small>Release</small>"]:::neutral
    n471["Generation 16<br/><small>Release</small>"]:::neutral
    n472["Generation 17<br/><small>Release</small>"]:::neutral
    n473["Generation 18<br/><small>Release</small>"]:::neutral
    n474["Generation 19<br/><small>Release</small>"]:::neutral
    n475["Generation 2<br/><small>Release</small>"]:::neutral
    n476["Generation 20<br/><small>Release</small>"]:::neutral
    n477["Generation 21<br/><small>Release</small>"]:::neutral
    n478["Generation 22<br/><small>Release</small>"]:::neutral
    n479["Generation 23<br/><small>Release</small>"]:::neutral
    n480["Generation 24<br/><small>Release</small>"]:::neutral
    n481["Generation 25<br/><small>Release</small>"]:::neutral
    n482["Generation 26<br/><small>Release</small>"]:::neutral
    n483["Generation 27<br/><small>Release</small>"]:::neutral
    n484["Generation 28<br/><small>Release</small>"]:::neutral
    n485["Generation 29<br/><small>Release</small>"]:::neutral
    n486["Generation 3<br/><small>Release</small>"]:::neutral
    n487["Generation 30<br/><small>Release</small>"]:::neutral
    n488["Generation 31<br/><small>Release</small>"]:::neutral
    n489["Generation 32<br/><small>Release</small>"]:::neutral
    n490["Generation 33<br/><small>Release</small>"]:::neutral
    n491["Generation 34<br/><small>Release</small>"]:::neutral
    n492["Generation 35<br/><small>Release</small>"]:::neutral
    n493["Generation 36<br/><small>Release</small>"]:::neutral
    n494["Generation 37<br/><small>Release</small>"]:::neutral
    n495["Generation 38<br/><small>Release</small>"]:::neutral
    n496["Generation 39<br/><small>Release</small>"]:::neutral
    n497["Generation 4<br/><small>Release</small>"]:::neutral
    n498["Generation 40<br/><small>Release</small>"]:::neutral
    n499["Generation 41<br/><small>Release</small>"]:::neutral
    n500["Generation 42<br/><small>Release</small>"]:::neutral
    n501["Generation 43<br/><small>Release</small>"]:::neutral
    n502["Generation 44<br/><small>Release</small>"]:::neutral
    n503["Generation 45<br/><small>Release</small>"]:::neutral
    n504["Generation 46<br/><small>Release</small>"]:::neutral
    n505["Generation 47<br/><small>Release</small>"]:::neutral
    n506["Generation 48<br/><small>Release</small>"]:::neutral
    n507["Generation 49<br/><small>Release</small>"]:::neutral
    n508["Generation 5<br/><small>Release</small>"]:::neutral
    n509["Generation 50<br/><small>Release</small>"]:::neutral
    n510["Generation 51<br/><small>Release</small>"]:::neutral
    n511["Generation 52<br/><small>Release</small>"]:::neutral
    n512["Generation 53<br/><small>Release</small>"]:::neutral
    n513["Generation 54<br/><small>Release</small>"]:::neutral
    n514["Generation 55<br/><small>Release</small>"]:::neutral
    n515["Generation 56<br/><small>Release</small>"]:::neutral
    n516["Generation 57<br/><small>Release</small>"]:::neutral
    n517["Generation 58<br/><small>Release</small>"]:::neutral
    n518["Generation 59<br/><small>Release</small>"]:::neutral
    n519["Generation 6<br/><small>Release</small>"]:::neutral
    n520["Generation 60<br/><small>Release</small>"]:::neutral
    n521["Generation 61<br/><small>Release</small>"]:::neutral
    n522["Generation 62<br/><small>Release</small>"]:::neutral
    n523["Generation 63<br/><small>Release</small>"]:::neutral
    n524["Generation 64<br/><small>Release</small>"]:::neutral
    n525["Generation 65<br/><small>Release</small>"]:::neutral
    n526["Generation 66<br/><small>Release</small>"]:::neutral
    n527["Generation 67<br/><small>Release</small>"]:::neutral
    n528["Generation 68<br/><small>Release</small>"]:::neutral
    n529["Generation 69<br/><small>Release</small>"]:::neutral
    n530["Generation 7<br/><small>Release</small>"]:::neutral
    n531["Generation 70<br/><small>Release</small>"]:::neutral
    n532["Generation 71<br/><small>Release</small>"]:::neutral
    n533["Generation 72<br/><small>Release</small>"]:::neutral
    n534["Generation 73<br/><small>Release</small>"]:::neutral
    n535["Generation 74<br/><small>Release</small>"]:::neutral
    n536["Generation 75<br/><small>Release</small>"]:::neutral
    n537["Generation 76<br/><small>Release</small>"]:::neutral
    n538["Generation 77<br/><small>Release</small>"]:::neutral
    n539["Generation 78<br/><small>Release</small>"]:::neutral
    n540["Generation 79<br/><small>Release</small>"]:::neutral
    n541["Generation 8<br/><small>Release</small>"]:::neutral
    n542["Generation 80<br/><small>Release</small>"]:::neutral
    n543["Generation 81<br/><small>Release</small>"]:::neutral
    n544["Generation 82<br/><small>Release</small>"]:::neutral
    n545["Generation 83<br/><small>Release</small>"]:::neutral
    n546["Generation 84<br/><small>Release</small>"]:::neutral
    n547["Generation 85<br/><small>Release</small>"]:::neutral
    n548["Generation 86<br/><small>Release</small>"]:::neutral
    n549["Generation 87<br/><small>Release</small>"]:::neutral
    n550["Generation 88<br/><small>Release</small>"]:::neutral
    n551["Generation 89<br/><small>Release</small>"]:::neutral
    n552["Generation 9<br/><small>Release</small>"]:::neutral
    n553["Generation 90<br/><small>Release</small>"]:::neutral
    n554["Generation 91<br/><small>Release</small>"]:::neutral
    n555["Generation 92<br/><small>Release</small>"]:::neutral
    n556["Generation 93<br/><small>Release</small>"]:::neutral
    n557["Generation 94<br/><small>Release</small>"]:::neutral
    n558["Generation 95<br/><small>Release</small>"]:::neutral
    n559["Generation 96<br/><small>Release</small>"]:::neutral
    n560["Generation 97<br/><small>Release</small>"]:::neutral
    n561["Generation 98<br/><small>Release</small>"]:::neutral
    n562["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n563["Common rendering<br/><small>Function</small>"]:::held
    n564["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n565["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n566["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n567["Rendering of the files<br/><small>Function</small>"]:::held
    n568["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n569["HTML writer<br/><small>Function</small>"]:::held
    n570["Markdown writer<br/><small>Function</small>"]:::held
    n571["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n572["Mermaid diagrams<br/><small>Function</small>"]:::held
    n573["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n574["Figures of the page<br/><small>Port</small>"]:::neutral
    n575["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n576["The page in HTML<br/><small>Technical choice</small>"]:::held
    n577["Rendering in the page<br/><small>Function</small>"]:::held
    n578["Syntax of the page<br/><small>Port</small>"]:::neutral
    n579["Plain text writer<br/><small>Function</small>"]:::held
    n580["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n581["Figures in SVG<br/><small>Function</small>"]:::held
    n582["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n583["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n584["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n585["Rendering in the terminal<br/><small>Function</small>"]:::held
    n586["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n587["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n588["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n589["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n590["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n591["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n592["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n593["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n594["EngineReckons<br/><small>Scenario</small>"]:::held
    n595["Shape of the example<br/><small>Decision</small>"]:::neutral
    n596["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n597["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n598["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n599["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n600["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n601["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n602["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n603["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n604["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n605["The candidate plays the laws<br/><small>Check</small>"]:::held
    n606["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n607["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n608["The candidate engine<br/><small>Artefact</small>"]:::held
    n609["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n610["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n611["How a generation is made<br/><small>Policy</small>"]:::neutral
    n612["The graph page<br/><small>Artefact</small>"]:::held
    n613["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n614["The graph page opens<br/><small>Check</small>"]:::held
    n615["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n616["What the graph page is asked<br/><small>Function</small>"]:::held
    n617["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n618["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n619["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n620["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n621["How a change merges<br/><small>Policy</small>"]:::neutral
    n622["The next generation<br/><small>Shipment</small>"]:::held
    n623["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n624["Open the graph page<br/><small>Entry point</small>"]:::held
    n625["The page's program<br/><small>Artefact</small>"]:::held
    n626["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n627["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n628["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n629["The repository is read from GitHub<br/><small>Check</small>"]:::held
    n630["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n631["The repository as decided<br/><small>Shipment</small>"]:::held
    n632["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n633["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n634["The SDLC on the machine<br/><small>Technical choice</small>"]:::held
    n635["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n636["How the repository is set<br/><small>Policy</small>"]:::neutral
    n637["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n638["The engine<br/><small>Artefact</small>"]:::unknown
    n639["Trame's repository<br/><small>Decision</small>"]:::neutral
    n640["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n641["Attribution<br/><small>Function</small>"]:::held
    n642["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n643["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n644["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n645["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n646["Ship only what holds<br/><small>Requirement</small>"]:::held
    n647["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n648["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n649["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n650["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n651["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n652["Checks of a body<br/><small>Function</small>"]:::held
    n653["Captures<br/><small>Standard</small>"]:::neutral
    n654["Categories of literals<br/><small>Decision</small>"]:::neutral
    n655["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n656["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n657["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n658["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n659["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n660["Attribute<br/><small>Syntax element</small>"]:::held
    n661["Comment<br/><small>Syntax element</small>"]:::held
    n662["Text<br/><small>Syntax element</small>"]:::held
    n663["HCL<br/><small>Standard</small>"]:::neutral
    n664["Value<br/><small>Syntax element</small>"]:::held
    n665["Module call<br/><small>Syntax element</small>"]:::held
    n666["Terraform<br/><small>Language</small>"]:::held
    n667["Terraform modules<br/><small>Standard</small>"]:::neutral
    n668["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n669["Box drawing<br/><small>Standard</small>"]:::neutral
    n670["Code lines<br/><small>Syntax element</small>"]:::held
    n671["Columns<br/><small>Syntax element</small>"]:::held
    n672["Item line<br/><small>Syntax element</small>"]:::held
    n673["Padded cell<br/><small>Syntax element</small>"]:::held
    n674["Path step<br/><small>Syntax element</small>"]:::held
    n675["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n676["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n677["Terminal text<br/><small>Decision</small>"]:::neutral
    n678["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n679["List on several lines<br/><small>Syntax element</small>"]:::held
    n680["Type assertion<br/><small>Syntax element</small>"]:::held
    n681["Assignment<br/><small>Syntax element</small>"]:::held
    n682["Async function of a block<br/><small>Syntax element</small>"]:::held
    n683["Waiting<br/><small>Syntax element</small>"]:::held
    n684["Call<br/><small>Syntax element</small>"]:::held
    n685["Constant<br/><small>Syntax element</small>"]:::held
    n686["Default import<br/><small>Syntax element</small>"]:::held
    n687["Documentation comment<br/><small>Syntax element</small>"]:::held
    n688["Export<br/><small>Syntax element</small>"]:::held
    n689["Condition<br/><small>Syntax element</small>"]:::held
    n690["List on one line<br/><small>Syntax element</small>"]:::held
    n691["Comment<br/><small>Syntax element</small>"]:::held
    n692["Property access<br/><small>Syntax element</small>"]:::held
    n693["Title of a module<br/><small>Syntax element</small>"]:::held
    n694["Import of names<br/><small>Syntax element</small>"]:::held
    n695["Object on several lines<br/><small>Syntax element</small>"]:::held
    n696["Object<br/><small>Syntax element</small>"]:::held
    n697["Object type<br/><small>Syntax element</small>"]:::held
    n698["Optional property access<br/><small>Syntax element</small>"]:::held
    n699["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n700["Group<br/><small>Syntax element</small>"]:::held
    n701["Names of a program<br/><small>Decision</small>"]:::neutral
    n702["Property<br/><small>Syntax element</small>"]:::held
    n703["Strict inequality<br/><small>Syntax element</small>"]:::held
    n704["Text<br/><small>Syntax element</small>"]:::held
    n705["TypeScript<br/><small>Language</small>"]:::held
    n706["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n707["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n708["TypeScript writer<br/><small>Function</small>"]:::held
    n709["Union type<br/><small>Syntax element</small>"]:::held
    n710["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n353
  n57 -->|Depends on| n167
  n58 -->|Implements| n20
  n58 -->|Depends on| n338
  n59 -->|Implements| n24
  n59 -->|Depends on| n353
  n59 -->|Depends on| n167
  n60 -->|Implements| n37
  n60 -->|Depends on| n353
  n61 -->|Implements| n38
  n61 -->|Depends on| n217
  n62 -->|Serves| n441
  n62 -->|Depends on| n353
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
  n62 -->|Depends on| n563
  n62 -->|Depends on| n304
  n62 -->|Depends on| n306
  n62 -->|Depends on| n156
  n63 -->|Serves| n441
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n563
  n63 -->|Depends on| n353
  n63 -->|Depends on| n342
  n63 -->|Depends on| n345
  n63 -->|Depends on| n333
  n63 -->|Depends on| n274
  n63 -->|Depends on| n273
  n63 -->|Depends on| n275
  n63 -->|Depends on| n0
  n63 -->|Depends on| n138
  n63 -->|Depends on| n580
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
  n64 -->|Serves| n442
  n65 -->|Serves| n441
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
  n70 -->|Verifies| n659
  n70 -->|Verifies| n652
  n70 -->|Verifies| n410
  n70 -->|In| n52
  n70 -->|Depends on| n659
  n70 -->|Depends on| n652
  n70 -->|Depends on| n705
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
  n73 -->|Verifies| n376
  n73 -->|Verifies| n375
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
  n74 -->|Verifies| n708
  n74 -->|Verifies| n668
  n74 -->|Verifies| n224
  n74 -->|Verifies| n401
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
  n77 -->|Verifies| n373
  n77 -->|Verifies| n386
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
  n77 -->|Depends on| n439
  n77 -->|Depends on| n183
  n77 -->|Depends on| n147
  n77 -->|Depends on| n303
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n307
  n79 -->|Verifies| n114
  n79 -->|Verifies| n184
  n79 -->|Verifies| n397
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
  n80 -->|Depends on| n643
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
  n82 -->|Verifies| n370
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
  n82 -->|Depends on| n704
  n82 -->|Depends on| n307
  n82 -->|Depends on| n648
  n83 -->|Verifies| n134
  n83 -->|Verifies| n391
  n83 -->|Verifies| n369
  n83 -->|Verifies| n387
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
  n83 -->|Depends on| n705
  n84 -->|Verifies| n109
  n84 -->|Verifies| n388
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
  n85 -->|Verifies| n391
  n85 -->|Verifies| n369
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
  n88 -->|Verifies| n339
  n88 -->|Verifies| n361
  n88 -->|Verifies| n377
  n88 -->|Verifies| n393
  n88 -->|In| n52
  n88 -->|Depends on| n116
  n88 -->|Depends on| n339
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
  n89 -->|Verifies| n577
  n89 -->|Verifies| n569
  n89 -->|Verifies| n581
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
  n92 -->|Depends on| n705
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
  n94 -->|Verifies| n370
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n42
  n94 -->|Depends on| n56
  n94 -->|Depends on| n147
  n94 -->|Depends on| n307
  n94 -->|Depends on| n141
  n94 -->|Depends on| n705
  n94 -->|Depends on| n91
  n97 -->|Verifies| n128
  n97 -->|Verifies| n122
  n97 -->|Verifies| n643
  n97 -->|Verifies| n186
  n97 -->|Verifies| n645
  n97 -->|Verifies| n378
  n97 -->|Verifies| n641
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
  n97 -->|Depends on| n648
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
  n99 -->|Depends on| n648
  n99 -->|Depends on| n96
  n99 -->|Depends on| n91
  n99 -->|Depends on| n147
  n99 -->|Depends on| n307
  n101 -->|Verifies| n105
  n101 -->|Verifies| n106
  n101 -->|Verifies| n111
  n101 -->|Verifies| n367
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
  n103 -->|Verifies| n585
  n103 -->|Verifies| n579
  n103 -->|Verifies| n587
  n103 -->|In| n52
  n103 -->|Depends on| n129
  n103 -->|Depends on| n133
  n103 -->|Depends on| n51
  n103 -->|Depends on| n147
  n103 -->|Depends on| n102
  n103 -->|Depends on| n307
  n104 -->|Serves| n441
  n104 -->|Part of| n54
  n104 -->|Depends on| n120
  n104 -->|Depends on| n169
  n104 -->|Depends on| n147
  n104 -->|Depends on| n142
  n104 -->|Depends on| n194
  n104 -->|Depends on| n192
  n104 -->|Depends on| n364
  n104 -->|Depends on| n403
  n104 -->|Depends on| n148
  n104 -->|Depends on| n705
  n104 -->|Depends on| n43
  n104 -->|Depends on| n22
  n104 -->|Depends on| n21
  n104 -->|Depends on| n23
  n104 -->|Depends on| n39
  n104 -->|Depends on| n25
  n104 -->|Depends on| n170
  n104 -->|Depends on| n50
  n104 -->|Depends on| n671
  n104 -->|Depends on| n677
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
  n105 -->|Serves| n448
  n105 -->|Part of| n54
  n105 -->|Depends on| n120
  n105 -->|Depends on| n106
  n105 -->|Depends on| n14
  n105 -->|Depends on| n39
  n105 -->|Depends on| n677
  n105 -->|Depends on| n50
  n105 -->|Depends on| n292
  n106 -->|Serves| n448
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
  n107 -->|Serves| n441
  n107 -->|Part of| n54
  n107 -->|Depends on| n120
  n107 -->|Depends on| n108
  n107 -->|Depends on| n23
  n107 -->|Depends on| n39
  n107 -->|Depends on| n50
  n107 -->|Depends on| n292
  n108 -->|Serves| n441
  n108 -->|Depends on| n120
  n108 -->|Depends on| n161
  n108 -->|Depends on| n677
  n108 -->|Depends on| n156
  n108 -->|Depends on| n292
  n109 -->|Serves| n448
  n109 -->|Part of| n54
  n109 -->|Depends on| n120
  n109 -->|Depends on| n34
  n109 -->|Depends on| n317
  n109 -->|Depends on| n142
  n109 -->|Depends on| n21
  n109 -->|Depends on| n23
  n109 -->|Depends on| n39
  n109 -->|Depends on| n322
  n109 -->|Depends on| n140
  n109 -->|Depends on| n50
  n109 -->|Depends on| n671
  n109 -->|Depends on| n677
  n109 -->|Depends on| n292
  n110 -->|Serves| n441
  n110 -->|Part of| n54
  n110 -->|Depends on| n142
  n110 -->|Depends on| n120
  n110 -->|Depends on| n179
  n110 -->|Depends on| n567
  n110 -->|Depends on| n585
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n50
  n110 -->|Depends on| n292
  n111 -->|Serves| n441
  n111 -->|Depends on| n292
  n111 -->|Depends on| n303
  n112 -->|Serves| n441
  n112 -->|Part of| n54
  n112 -->|Depends on| n120
  n112 -->|Depends on| n161
  n112 -->|Depends on| n108
  n112 -->|Depends on| n16
  n112 -->|Depends on| n152
  n112 -->|Depends on| n340
  n112 -->|Depends on| n341
  n112 -->|Depends on| n221
  n112 -->|Depends on| n151
  n112 -->|Depends on| n21
  n112 -->|Depends on| n23
  n112 -->|Depends on| n39
  n112 -->|Depends on| n50
  n112 -->|Depends on| n292
  n113 -->|Serves| n441
  n113 -->|Part of| n54
  n113 -->|Depends on| n120
  n113 -->|Depends on| n166
  n113 -->|Depends on| n106
  n113 -->|Depends on| n14
  n113 -->|Depends on| n39
  n114 -->|Serves| n441
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
  n116 -->|Serves| n441
  n116 -->|Part of| n54
  n116 -->|Depends on| n120
  n116 -->|Depends on| n181
  n116 -->|Depends on| n567
  n116 -->|Depends on| n585
  n116 -->|Depends on| n577
  n116 -->|Depends on| n50
  n117 -->|Serves| n441
  n117 -->|Part of| n54
  n117 -->|Depends on| n142
  n117 -->|Depends on| n120
  n117 -->|Depends on| n165
  n117 -->|Depends on| n339
  n117 -->|Depends on| n183
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n50
  n117 -->|Depends on| n292
  n118 -->|Serves| n448
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
  n118 -->|Depends on| n705
  n118 -->|Depends on| n707
  n118 -->|Depends on| n693
  n118 -->|Depends on| n687
  n118 -->|Depends on| n688
  n118 -->|Depends on| n685
  n118 -->|Depends on| n684
  n118 -->|Depends on| n696
  n118 -->|Depends on| n702
  n118 -->|Depends on| n704
  n118 -->|Depends on| n694
  n118 -->|Depends on| n50
  n118 -->|Depends on| n292
  n118 -->|Depends on| n41
  n118 -->|Depends on| n147
  n118 -->|Depends on| n123
  n118 -->|Depends on| n141
  n119 -->|Serves| n441
  n119 -->|Part of| n54
  n119 -->|Depends on| n142
  n119 -->|Depends on| n677
  n119 -->|Depends on| n120
  n119 -->|Depends on| n179
  n119 -->|Depends on| n111
  n119 -->|Depends on| n21
  n119 -->|Depends on| n39
  n119 -->|Depends on| n50
  n119 -->|Depends on| n292
  n120 -->|Serves| n441
  n120 -->|Depends on| n147
  n120 -->|Depends on| n163
  n120 -->|Depends on| n162
  n120 -->|Depends on| n176
  n120 -->|Depends on| n190
  n120 -->|Depends on| n178
  n120 -->|Depends on| n563
  n120 -->|Depends on| n50
  n120 -->|Depends on| n41
  n120 -->|Depends on| n17
  n120 -->|Depends on| n446
  n120 -->|Depends on| n440
  n120 -->|Depends on| n677
  n120 -->|Depends on| n675
  n120 -->|Depends on| n673
  n120 -->|Depends on| n292
  n120 -->|Depends on| n142
  n120 -->|Depends on| n185
  n121 -->|Serves| n448
  n121 -->|Part of| n54
  n121 -->|Depends on| n120
  n121 -->|Depends on| n178
  n121 -->|Depends on| n23
  n121 -->|Depends on| n50
  n121 -->|Depends on| n677
  n121 -->|Depends on| n675
  n121 -->|Depends on| n673
  n121 -->|Depends on| n292
  n122 -->|Serves| n646
  n122 -->|Part of| n54
  n122 -->|Depends on| n147
  n122 -->|Depends on| n120
  n122 -->|Depends on| n643
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n50
  n122 -->|Depends on| n292
  n123 -->|Serves| n448
  n123 -->|Depends on| n707
  n123 -->|Depends on| n693
  n123 -->|Depends on| n687
  n123 -->|Depends on| n688
  n123 -->|Depends on| n685
  n123 -->|Depends on| n684
  n123 -->|Depends on| n696
  n123 -->|Depends on| n702
  n123 -->|Depends on| n704
  n123 -->|Depends on| n690
  n123 -->|Depends on| n694
  n124 -->|Serves| n448
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
  n125 -->|Serves| n448
  n125 -->|Part of| n54
  n125 -->|Depends on| n120
  n125 -->|Depends on| n142
  n125 -->|Depends on| n183
  n125 -->|Depends on| n179
  n125 -->|Depends on| n567
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
  n125 -->|Depends on| n705
  n125 -->|Depends on| n17
  n125 -->|Depends on| n50
  n125 -->|Depends on| n292
  n125 -->|Depends on| n291
  n125 -->|Depends on| n224
  n125 -->|Depends on| n704
  n125 -->|Depends on| n128
  n125 -->|Depends on| n147
  n126 -->|Serves| n441
  n126 -->|Depends on| n147
  n126 -->|Depends on| n140
  n126 -->|Depends on| n120
  n126 -->|Depends on| n190
  n126 -->|Depends on| n567
  n126 -->|Depends on| n585
  n126 -->|Depends on| n50
  n126 -->|Depends on| n292
  n127 -->|Serves| n441
  n127 -->|Part of| n54
  n127 -->|Depends on| n107
  n127 -->|Depends on| n41
  n128 -->|Serves| n646
  n128 -->|Part of| n54
  n128 -->|Depends on| n147
  n128 -->|Depends on| n120
  n128 -->|Depends on| n112
  n128 -->|Depends on| n161
  n128 -->|Depends on| n108
  n128 -->|Depends on| n643
  n128 -->|Depends on| n645
  n128 -->|Depends on| n646
  n128 -->|Depends on| n16
  n128 -->|Depends on| n152
  n128 -->|Depends on| n642
  n128 -->|Depends on| n41
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n50
  n128 -->|Depends on| n169
  n128 -->|Depends on| n292
  n129 -->|Serves| n441
  n129 -->|Part of| n54
  n129 -->|Depends on| n120
  n129 -->|Depends on| n126
  n130 -->|Serves| n448
  n130 -->|Part of| n54
  n130 -->|Depends on| n142
  n130 -->|Depends on| n120
  n130 -->|Depends on| n179
  n130 -->|Depends on| n567
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n50
  n130 -->|Depends on| n292
  n131 -->|Serves| n441
  n131 -->|Part of| n54
  n131 -->|Depends on| n120
  n131 -->|Depends on| n163
  n131 -->|Depends on| n190
  n131 -->|Depends on| n176
  n131 -->|Depends on| n50
  n131 -->|Depends on| n677
  n131 -->|Depends on| n675
  n131 -->|Depends on| n673
  n131 -->|Depends on| n292
  n132 -->|Serves| n448
  n132 -->|Part of| n54
  n132 -->|Depends on| n120
  n132 -->|Depends on| n21
  n132 -->|Depends on| n23
  n132 -->|Depends on| n39
  n132 -->|Depends on| n322
  n132 -->|Depends on| n704
  n132 -->|Depends on| n41
  n132 -->|Depends on| n147
  n132 -->|Depends on| n50
  n132 -->|Depends on| n292
  n133 -->|Serves| n441
  n133 -->|Part of| n54
  n133 -->|Depends on| n147
  n133 -->|Depends on| n120
  n133 -->|Depends on| n126
  n133 -->|Depends on| n163
  n133 -->|Depends on| n190
  n133 -->|Depends on| n50
  n133 -->|Depends on| n292
  n134 -->|Serves| n448
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
  n134 -->|Depends on| n705
  n134 -->|Depends on| n50
  n134 -->|Depends on| n292
  n134 -->|Depends on| n41
  n134 -->|Depends on| n147
  n151 -->|Read in| n204
  n151 -->|Depends on| n203
  n151 -->|Depends on| n206
  n152 -->|Serves| n441
  n152 -->|Depends on| n31
  n152 -->|Depends on| n150
  n156 -->|Serves| n448
  n156 -->|Depends on| n300
  n157 -->|Serves| n448
  n157 -->|Applied by| n156
  n157 -->|Applied by| n300
  n159 -->|Serves| n448
  n159 -->|Depends on| n155
  n160 -->|Serves| n448
  n161 -->|Serves| n441
  n161 -->|Depends on| n147
  n161 -->|Depends on| n142
  n161 -->|Depends on| n39
  n161 -->|Depends on| n191
  n161 -->|Depends on| n40
  n161 -->|Depends on| n224
  n161 -->|Depends on| n293
  n161 -->|Depends on| n141
  n161 -->|Depends on| n705
  n162 -->|Serves| n441
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
  n163 -->|Serves| n441
  n163 -->|Depends on| n142
  n163 -->|Depends on| n446
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
  n164 -->|Serves| n441
  n165 -->|Serves| n441
  n165 -->|Depends on| n147
  n165 -->|Depends on| n17
  n165 -->|Depends on| n41
  n165 -->|Depends on| n303
  n166 -->|Serves| n441
  n166 -->|Depends on| n167
  n166 -->|Depends on| n147
  n166 -->|Depends on| n142
  n166 -->|Depends on| n50
  n166 -->|Depends on| n670
  n166 -->|Depends on| n17
  n166 -->|Depends on| n53
  n166 -->|Depends on| n439
  n166 -->|Depends on| n26
  n166 -->|Depends on| n21
  n166 -->|Depends on| n39
  n166 -->|Depends on| n183
  n166 -->|Depends on| n165
  n166 -->|Depends on| n168
  n166 -->|Depends on| n339
  n166 -->|Depends on| n577
  n166 -->|Depends on| n295
  n166 -->|Depends on| n300
  n166 -->|Depends on| n296
  n168 -->|Serves| n441
  n168 -->|Depends on| n156
  n168 -->|Depends on| n303
  n169 -->|Serves| n441
  n169 -->|Depends on| n142
  n169 -->|Depends on| n194
  n169 -->|Depends on| n705
  n169 -->|Depends on| n183
  n169 -->|Depends on| n21
  n169 -->|Depends on| n39
  n169 -->|Depends on| n25
  n169 -->|Depends on| n170
  n169 -->|Depends on| n140
  n171 -->|Serves| n441
  n172 -->|Serves| n441
  n173 -->|Serves| n441
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
  n173 -->|Depends on| n449
  n173 -->|Depends on| n142
  n173 -->|Depends on| n705
  n173 -->|Depends on| n322
  n173 -->|Depends on| n159
  n173 -->|Depends on| n160
  n173 -->|Depends on| n171
  n174 -->|Serves| n441
  n174 -->|Depends on| n446
  n174 -->|Depends on| n293
  n176 -->|Serves| n441
  n176 -->|Depends on| n27
  n176 -->|Depends on| n224
  n176 -->|Depends on| n143
  n176 -->|Depends on| n142
  n176 -->|Depends on| n443
  n176 -->|Depends on| n438
  n176 -->|Depends on| n172
  n176 -->|Depends on| n444
  n176 -->|Depends on| n445
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
  n178 -->|Serves| n448
  n178 -->|Depends on| n142
  n178 -->|Depends on| n140
  n178 -->|Depends on| n185
  n178 -->|Depends on| n258
  n178 -->|Depends on| n21
  n178 -->|Depends on| n39
  n178 -->|Depends on| n40
  n178 -->|Depends on| n303
  n179 -->|Serves| n448
  n179 -->|Depends on| n140
  n179 -->|Depends on| n182
  n179 -->|Depends on| n40
  n179 -->|Depends on| n303
  n181 -->|Serves| n441
  n181 -->|Depends on| n142
  n181 -->|Depends on| n437
  n181 -->|Depends on| n180
  n181 -->|Depends on| n17
  n181 -->|Depends on| n179
  n181 -->|Depends on| n190
  n181 -->|Depends on| n300
  n182 -->|Serves| n441
  n182 -->|Depends on| n651
  n183 -->|Serves| n441
  n183 -->|Depends on| n142
  n183 -->|Depends on| n21
  n183 -->|Depends on| n39
  n183 -->|Depends on| n195
  n183 -->|Depends on| n40
  n183 -->|Depends on| n141
  n183 -->|Depends on| n705
  n184 -->|Serves| n441
  n184 -->|Implements| n28
  n184 -->|Depends on| n21
  n184 -->|Depends on| n39
  n184 -->|Depends on| n25
  n184 -->|Depends on| n175
  n184 -->|Depends on| n46
  n185 -->|Serves| n441
  n185 -->|Depends on| n145
  n185 -->|Depends on| n247
  n186 -->|Serves| n441
  n186 -->|Depends on| n292
  n187 -->|Serves| n441
  n187 -->|Depends on| n707
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
  n187 -->|Depends on| n706
  n187 -->|Depends on| n143
  n187 -->|Depends on| n40
  n188 -->|Serves| n448
  n188 -->|Applied by| n173
  n188 -->|Applied by| n190
  n190 -->|Serves| n441
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
  n191 -->|Serves| n441
  n191 -->|Depends on| n146
  n191 -->|Depends on| n145
  n191 -->|Depends on| n142
  n191 -->|Depends on| n39
  n191 -->|Depends on| n40
  n191 -->|Depends on| n224
  n191 -->|Depends on| n293
  n192 -->|Refines| n441
  n193 -->|Accepts| n192
  n197 -->|Serves| n441
  n197 -->|Depends on| n198
  n197 -->|Depends on| n707
  n197 -->|Depends on| n145
  n197 -->|Depends on| n687
  n197 -->|Depends on| n693
  n197 -->|Depends on| n691
  n197 -->|Depends on| n694
  n197 -->|Depends on| n688
  n197 -->|Depends on| n685
  n197 -->|Depends on| n684
  n197 -->|Depends on| n695
  n197 -->|Depends on| n702
  n197 -->|Depends on| n704
  n197 -->|Depends on| n690
  n199 -->|Read in| n204
  n200 -->|Read in| n204
  n201 -->|Read in| n204
  n202 -->|Read in| n204
  n203 -->|Read in| n204
  n204 -->|Queries written in| n650
  n204 -->|Read by| n659
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
  n214 -->|Queries written in| n650
  n214 -->|Read by| n659
  n214 -->|Uses| n314
  n215 -->|Read in| n214
  n215 -->|Depends on| n209
  n216 -->|Read in| n705
  n217 -->|Read in| n204
  n218 -->|Read in| n204
  n219 -->|Read in| n204
  n221 -->|Read in| n214
  n221 -->|Depends on| n211
  n222 -->|Read in| n204
  n223 -->|Read in| n214
  n223 -->|Depends on| n209
  n224 -->|Serves| n441
  n224 -->|Depends on| n659
  n224 -->|Depends on| n652
  n224 -->|Depends on| n705
  n224 -->|Depends on| n204
  n224 -->|Depends on| n708
  n224 -->|Depends on| n666
  n224 -->|Depends on| n667
  n224 -->|Depends on| n668
  n224 -->|Depends on| n31
  n224 -->|Depends on| n21
  n224 -->|Depends on| n39
  n224 -->|Depends on| n297
  n225 -->|Serves| n441
  n225 -->|Applied by| n224
  n225 -->|Applied by| n339
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
  n247 -->|Refines| n450
  n248 -->|Accepts| n247
  n250 -->|Refines| n450
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
  n294 -->|Serves| n448
  n294 -->|Applied by| n293
  n294 -->|Applied by| n308
  n294 -->|Applied by| n296
  n294 -->|Applied by| n292
  n294 -->|Applied by| n307
  n294 -->|Applied by| n291
  n294 -->|Applied by| n304
  n294 -->|Applied by| n302
  n295 -->|Serves| n448
  n295 -->|Depends on| n300
  n296 -->|Written in| n300
  n296 -->|Depends on| n300
  n296 -->|Depends on| n302
  n297 -->|Written in| n300
  n298 -->|Written in| n300
  n299 -->|Written in| n300
  n301 -->|Written in| n300
  n302 -->|Serves| n448
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
  n310 -->|Serves| n448
  n316 -->|Serves| n448
  n318 -->|Serves| n448
  n322 -->|Serves| n448
  n324 -->|Defined by| n353
  n324 -->|Read in| n214
  n324 -->|Depends on| n353
  n324 -->|Depends on| n342
  n324 -->|Depends on| n211
  n325 -->|Defined by| n353
  n325 -->|Read in| n214
  n325 -->|Depends on| n353
  n325 -->|Depends on| n147
  n325 -->|Depends on| n332
  n325 -->|Depends on| n210
  n325 -->|Depends on| n211
  n326 -->|Defined by| n353
  n326 -->|Read in| n214
  n326 -->|Depends on| n353
  n326 -->|Depends on| n342
  n326 -->|Depends on| n211
  n327 -->|Defined by| n353
  n327 -->|Read in| n214
  n327 -->|Depends on| n353
  n327 -->|Depends on| n342
  n327 -->|Depends on| n210
  n327 -->|Depends on| n211
  n328 -->|Defined by| n353
  n328 -->|Read in| n214
  n328 -->|Depends on| n353
  n328 -->|Depends on| n342
  n328 -->|Depends on| n210
  n328 -->|Depends on| n211
  n328 -->|Depends on| n346
  n329 -->|Defined by| n353
  n329 -->|Read in| n214
  n329 -->|Depends on| n353
  n329 -->|Depends on| n342
  n329 -->|Depends on| n210
  n329 -->|Depends on| n211
  n330 -->|Defined by| n353
  n330 -->|Read in| n214
  n330 -->|Depends on| n353
  n330 -->|Depends on| n276
  n330 -->|Depends on| n1
  n330 -->|Depends on| n210
  n330 -->|Depends on| n211
  n330 -->|Depends on| n223
  n330 -->|Depends on| n220
  n331 -->|Read in| n214
  n331 -->|Depends on| n215
  n332 -->|Defined by| n353
  n332 -->|Read in| n214
  n332 -->|Depends on| n353
  n332 -->|Depends on| n7
  n332 -->|Depends on| n210
  n332 -->|Depends on| n211
  n332 -->|Depends on| n223
  n332 -->|Depends on| n205
  n334 -->|Defined by| n353
  n334 -->|Read in| n214
  n334 -->|Depends on| n353
  n334 -->|Depends on| n342
  n334 -->|Depends on| n210
  n334 -->|Depends on| n211
  n334 -->|Depends on| n324
  n334 -->|Depends on| n328
  n335 -->|Defined by| n353
  n335 -->|Read in| n204
  n335 -->|Depends on| n353
  n335 -->|Depends on| n218
  n335 -->|Depends on| n217
  n336 -->|Uses the variables of| n9
  n336 -->|Uses the variables of| n12
  n336 -->|Uses the variables of| n6
  n336 -->|Styles| n339
  n337 -->|Defined by| n353
  n337 -->|Read in| n214
  n337 -->|Depends on| n353
  n337 -->|Depends on| n342
  n337 -->|Depends on| n211
  n339 -->|Serves| n441
  n339 -->|Depends on| n340
  n339 -->|Depends on| n349
  n339 -->|Depends on| n7
  n339 -->|Depends on| n13
  n339 -->|Depends on| n4
  n339 -->|Depends on| n9
  n339 -->|Depends on| n8
  n339 -->|Depends on| n12
  n339 -->|Depends on| n5
  n339 -->|Depends on| n10
  n339 -->|Depends on| n3
  n339 -->|Depends on| n6
  n339 -->|Depends on| n45
  n339 -->|Depends on| n21
  n339 -->|Depends on| n16
  n339 -->|Depends on| n19
  n339 -->|Depends on| n347
  n339 -->|Depends on| n352
  n339 -->|Depends on| n350
  n339 -->|Depends on| n335
  n339 -->|Depends on| n331
  n339 -->|Depends on| n343
  n339 -->|Depends on| n341
  n339 -->|Depends on| n203
  n339 -->|Depends on| n202
  n339 -->|Depends on| n303
  n339 -->|Depends on| n300
  n339 -->|Depends on| n659
  n339 -->|Depends on| n214
  n339 -->|Depends on| n204
  n341 -->|Defined by| n353
  n341 -->|Read in| n214
  n341 -->|Depends on| n353
  n341 -->|Depends on| n207
  n341 -->|Depends on| n215
  n341 -->|Depends on| n212
  n341 -->|Depends on| n211
  n343 -->|Defined by| n353
  n343 -->|Read in| n214
  n343 -->|Depends on| n353
  n343 -->|Depends on| n221
  n343 -->|Depends on| n216
  n343 -->|Depends on| n692
  n343 -->|Depends on| n681
  n344 -->|Uses the variables of| n7
  n344 -->|Uses the variables of| n13
  n344 -->|Uses the variables of| n9
  n344 -->|Uses the variables of| n8
  n344 -->|Uses the variables of| n12
  n344 -->|Uses the variables of| n5
  n344 -->|Uses the variables of| n10
  n344 -->|Uses the variables of| n3
  n344 -->|Uses the variables of| n6
  n344 -->|Styles| n339
  n346 -->|Defined by| n353
  n346 -->|Read in| n214
  n346 -->|Depends on| n353
  n346 -->|Depends on| n345
  n346 -->|Depends on| n342
  n346 -->|Depends on| n210
  n346 -->|Depends on| n211
  n347 -->|Defined by| n353
  n347 -->|Read in| n214
  n347 -->|Depends on| n353
  n347 -->|Depends on| n210
  n347 -->|Depends on| n348
  n347 -->|Depends on| n334
  n347 -->|Depends on| n330
  n348 -->|Defined by| n353
  n348 -->|Read in| n214
  n348 -->|Depends on| n353
  n348 -->|Depends on| n210
  n348 -->|Depends on| n325
  n348 -->|Depends on| n326
  n348 -->|Depends on| n327
  n348 -->|Depends on| n337
  n348 -->|Depends on| n329
  n350 -->|Defined by| n353
  n350 -->|Read in| n204
  n350 -->|Depends on| n353
  n350 -->|Depends on| n203
  n350 -->|Depends on| n202
  n350 -->|Depends on| n205
  n350 -->|Depends on| n201
  n351 -->|Serves| n448
  n351 -->|Applied by| n344
  n351 -->|Applied by| n336
  n351 -->|Applied by| n352
  n351 -->|Applied by| n335
  n351 -->|Applied by| n339
  n352 -->|Defined by| n353
  n352 -->|Read in| n204
  n352 -->|Depends on| n353
  n352 -->|Depends on| n203
  n352 -->|Depends on| n218
  n352 -->|Depends on| n217
  n352 -->|Depends on| n200
  n352 -->|Depends on| n219
  n352 -->|Depends on| n206
  n352 -->|Depends on| n202
  n354 -->|Chooses| n367
  n354 -->|In| n30
  n354 -->|In| n52
  n354 -->|Serves| n442
  n355 -->|Chooses| n394
  n355 -->|In| n30
  n355 -->|In| n52
  n355 -->|Serves| n442
  n356 -->|Implements| n21
  n357 -->|Implements| n22
  n358 -->|Implements| n23
  n360 -->|Chooses| n405
  n360 -->|Chooses| n393
  n360 -->|In| n30
  n360 -->|In| n52
  n360 -->|Serves| n442
  n361 -->|Implements| n16
  n361 -->|Uses| n312
  n362 -->|Chooses| n361
  n362 -->|In| n30
  n362 -->|In| n52
  n362 -->|Serves| n442
  n363 -->|Implements| n41
  n363 -->|Implements| n43
  n363 -->|Implements| n42
  n363 -->|Depends on| n364
  n363 -->|Depends on| n39
  n363 -->|Depends on| n147
  n363 -->|Depends on| n305
  n365 -->|Chooses| n372
  n365 -->|Chooses| n387
  n365 -->|In| n52
  n365 -->|Serves| n442
  n366 -->|Chooses| n375
  n366 -->|Chooses| n401
  n366 -->|Chooses| n388
  n366 -->|Chooses| n363
  n366 -->|Chooses| n373
  n366 -->|In| n52
  n366 -->|Serves| n442
  n367 -->|Implements| n14
  n367 -->|Depends on| n21
  n367 -->|Depends on| n23
  n367 -->|Depends on| n707
  n367 -->|Depends on| n687
  n367 -->|Depends on| n688
  n367 -->|Depends on| n685
  n367 -->|Depends on| n684
  n367 -->|Depends on| n696
  n367 -->|Depends on| n702
  n367 -->|Depends on| n704
  n367 -->|Depends on| n690
  n367 -->|Depends on| n694
  n369 -->|Depends on| n22
  n369 -->|Depends on| n23
  n369 -->|Depends on| n21
  n369 -->|Depends on| n39
  n370 -->|Depends on| n22
  n370 -->|Depends on| n23
  n370 -->|Depends on| n21
  n370 -->|Depends on| n39
  n370 -->|Depends on| n371
  n370 -->|Depends on| n142
  n372 -->|Implements| n21
  n372 -->|Implements| n23
  n372 -->|Implements| n22
  n372 -->|Implements| n56
  n372 -->|Depends on| n39
  n372 -->|Depends on| n374
  n372 -->|Depends on| n305
  n373 -->|Implements| n26
  n373 -->|Implements| n47
  n373 -->|Depends on| n305
  n375 -->|Implements| n50
  n375 -->|Implements| n51
  n375 -->|Depends on| n368
  n375 -->|Depends on| n305
  n376 -->|Implements| n18
  n376 -->|Depends on| n50
  n376 -->|Depends on| n147
  n376 -->|Depends on| n305
  n377 -->|Implements| n19
  n377 -->|Depends on| n338
  n378 -->|Implements| n25
  n379 -->|Implements| n26
  n380 -->|Chooses| n356
  n380 -->|Chooses| n358
  n380 -->|Chooses| n357
  n380 -->|Chooses| n383
  n380 -->|Chooses| n384
  n380 -->|Chooses| n385
  n380 -->|Chooses| n402
  n380 -->|Chooses| n390
  n380 -->|Chooses| n389
  n380 -->|Chooses| n379
  n380 -->|In| n30
  n380 -->|Serves| n442
  n381 -->|Implements| n39
  n382 -->|Chooses| n381
  n382 -->|Chooses| n378
  n382 -->|Chooses| n377
  n382 -->|Chooses| n386
  n382 -->|Chooses| n376
  n382 -->|Chooses| n395
  n382 -->|In| n30
  n382 -->|In| n52
  n382 -->|Serves| n442
  n383 -->|Implements| n41
  n383 -->|Depends on| n409
  n384 -->|Implements| n43
  n384 -->|Depends on| n409
  n385 -->|Implements| n50
  n385 -->|Depends on| n305
  n386 -->|Implements| n53
  n387 -->|Implements| n33
  n387 -->|Depends on| n23
  n387 -->|Depends on| n39
  n387 -->|Depends on| n142
  n387 -->|Depends on| n316
  n388 -->|Implements| n34
  n389 -->|Implements| n33
  n390 -->|Implements| n34
  n390 -->|Depends on| n156
  n391 -->|Depends on| n369
  n391 -->|Depends on| n370
  n392 -->|Chooses| n391
  n392 -->|In| n30
  n392 -->|In| n52
  n392 -->|Serves| n442
  n393 -->|Implements| n45
  n393 -->|Depends on| n359
  n393 -->|Depends on| n142
  n393 -->|Depends on| n194
  n393 -->|Depends on| n705
  n394 -->|Implements| n55
  n394 -->|Uses| n321
  n394 -->|Uses| n315
  n395 -->|Implements| n27
  n396 -->|Chooses| n184
  n396 -->|In| n30
  n396 -->|In| n52
  n396 -->|Serves| n442
  n397 -->|Implements| n46
  n398 -->|Chooses| n397
  n398 -->|In| n52
  n398 -->|Serves| n442
  n399 -->|Chooses| n400
  n399 -->|In| n30
  n399 -->|Serves| n442
  n400 -->|Implements| n46
  n400 -->|Depends on| n142
  n400 -->|Depends on| n359
  n400 -->|Depends on| n169
  n400 -->|Depends on| n175
  n401 -->|Implements| n17
  n401 -->|Depends on| n403
  n401 -->|Depends on| n404
  n402 -->|Implements| n17
  n402 -->|Depends on| n148
  n405 -->|Implements| n40
  n405 -->|Depends on| n359
  n406 -->|Chooses| n410
  n406 -->|In| n30
  n406 -->|In| n52
  n406 -->|Serves| n442
  n407 -->|Implements| n31
  n407 -->|Uses| n319
  n407 -->|Depends on| n40
  n407 -->|Depends on| n141
  n407 -->|Depends on| n705
  n408 -->|Chooses| n407
  n408 -->|In| n30
  n408 -->|In| n52
  n408 -->|Serves| n442
  n410 -->|Implements| n49
  n410 -->|Uses| n323
  n410 -->|Depends on| n305
  n411 -->|Serves| n448
  n411 -->|Applied by| n163
  n411 -->|Applied by| n176
  n412 -->|Serves| n448
  n412 -->|Applied by| n171
  n412 -->|Applied by| n173
  n413 -->|Serves| n441
  n413 -->|Applied by| n112
  n413 -->|Applied by| n151
  n414 -->|Serves| n441
  n414 -->|Applied by| n54
  n414 -->|Applied by| n44
  n414 -->|Applied by| n32
  n414 -->|Applied by| n29
  n415 -->|Serves| n448
  n415 -->|Applied by| n163
  n415 -->|Applied by| n659
  n416 -->|Serves| n441
  n416 -->|Applied by| n104
  n416 -->|Applied by| n192
  n416 -->|Applied by| n590
  n416 -->|Applied by| n596
  n417 -->|Serves| n441
  n417 -->|Applied by| n187
  n417 -->|Applied by| n55
  n417 -->|Applied by| n705
  n417 -->|Applied by| n137
  n418 -->|Serves| n441
  n418 -->|Applied by| n163
  n418 -->|Applied by| n110
  n419 -->|Serves| n448
  n419 -->|Applied by| n178
  n419 -->|Applied by| n121
  n420 -->|Serves| n448
  n420 -->|Applied by| n163
  n420 -->|Applied by| n162
  n420 -->|Applied by| n181
  n420 -->|Applied by| n187
  n420 -->|Applied by| n176
  n421 -->|Serves| n450
  n421 -->|Applied by| n183
  n421 -->|Applied by| n163
  n421 -->|Applied by| n162
  n421 -->|Applied by| n185
  n421 -->|Applied by| n247
  n421 -->|Applied by| n104
  n422 -->|Serves| n450
  n422 -->|Applied by| n183
  n422 -->|Applied by| n176
  n422 -->|Applied by| n134
  n422 -->|Applied by| n125
  n422 -->|Applied by| n250
  n422 -->|Applied by| n249
  n423 -->|Serves| n448
  n423 -->|Applied by| n652
  n423 -->|Applied by| n224
  n423 -->|Applied by| n163
  n423 -->|Applied by| n29
  n423 -->|Applied by| n32
  n424 -->|Serves| n441
  n424 -->|Applied by| n176
  n424 -->|Applied by| n163
  n424 -->|Applied by| n183
  n425 -->|Serves| n448
  n425 -->|Applied by| n163
  n425 -->|Applied by| n659
  n426 -->|Serves| n448
  n426 -->|Applied by| n110
  n426 -->|Applied by| n130
  n426 -->|Applied by| n179
  n426 -->|Applied by| n339
  n426 -->|Applied by| n161
  n427 -->|Serves| n441
  n427 -->|Applied by| n162
  n427 -->|Applied by| n173
  n427 -->|Applied by| n190
  n427 -->|Applied by| n44
  n428 -->|Serves| n450
  n428 -->|Applied by| n183
  n428 -->|Applied by| n134
  n428 -->|Applied by| n391
  n428 -->|Applied by| n104
  n428 -->|Applied by| n176
  n428 -->|Applied by| n118
  n429 -->|Serves| n441
  n429 -->|Applied by| n40
  n429 -->|Applied by| n143
  n429 -->|Applied by| n139
  n429 -->|Applied by| n176
  n430 -->|Serves| n441
  n430 -->|Applied by| n128
  n430 -->|Applied by| n122
  n430 -->|Applied by| n643
  n430 -->|Applied by| n648
  n430 -->|Applied by| n646
  n430 -->|Applied by| n622
  n430 -->|Applied by| n605
  n431 -->|Serves| n442
  n431 -->|Applied by| n382
  n431 -->|Applied by| n380
  n431 -->|Applied by| n366
  n431 -->|Applied by| n362
  n431 -->|Applied by| n406
  n431 -->|Applied by| n408
  n431 -->|Applied by| n355
  n431 -->|Applied by| n360
  n431 -->|Applied by| n564
  n431 -->|Applied by| n565
  n431 -->|Applied by| n584
  n431 -->|Applied by| n583
  n431 -->|Applied by| n576
  n431 -->|Applied by| n575
  n432 -->|Serves| n441
  n432 -->|Applied by| n104
  n432 -->|Applied by| n192
  n432 -->|Applied by| n591
  n432 -->|Applied by| n590
  n432 -->|Applied by| n599
  n433 -->|Serves| n441
  n433 -->|Applied by| n163
  n433 -->|Applied by| n191
  n434 -->|Serves| n441
  n434 -->|Applied by| n176
  n434 -->|Applied by| n599
  n435 -->|Serves| n441
  n435 -->|Applied by| n176
  n435 -->|Applied by| n190
  n435 -->|Applied by| n183
  n436 -->|Serves| n448
  n436 -->|Applied by| n659
  n436 -->|Applied by| n652
  n436 -->|Applied by| n293
  n436 -->|Applied by| n297
  n436 -->|Applied by| n301
  n436 -->|Applied by| n308
  n436 -->|Applied by| n303
  n436 -->|Applied by| n296
  n436 -->|Applied by| n292
  n436 -->|Applied by| n291
  n436 -->|Applied by| n306
  n436 -->|Applied by| n305
  n436 -->|Applied by| n307
  n446 -->|Refines| n441
  n447 -->|Accepts| n446
  n451 -->|Releases| n54
  n452 -->|Releases| n54
  n452 -->|Assembled by| n552
  n453 -->|Releases| n54
  n453 -->|Assembled by| n562
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
  n462 -->|Assembled by| n461
  n463 -->|Releases| n54
  n463 -->|Assembled by| n452
  n464 -->|Releases| n54
  n464 -->|Assembled by| n462
  n465 -->|Releases| n54
  n465 -->|Assembled by| n464
  n466 -->|Releases| n54
  n466 -->|Assembled by| n465
  n467 -->|Releases| n54
  n467 -->|Assembled by| n463
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
  n473 -->|Assembled by| n472
  n474 -->|Releases| n54
  n474 -->|Assembled by| n473
  n475 -->|Releases| n54
  n475 -->|Assembled by| n451
  n476 -->|Releases| n54
  n476 -->|Assembled by| n474
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
  n484 -->|Assembled by| n483
  n485 -->|Releases| n54
  n485 -->|Assembled by| n484
  n486 -->|Releases| n54
  n486 -->|Assembled by| n475
  n487 -->|Releases| n54
  n487 -->|Assembled by| n485
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
  n495 -->|Assembled by| n494
  n496 -->|Releases| n54
  n496 -->|Assembled by| n495
  n497 -->|Releases| n54
  n497 -->|Assembled by| n486
  n498 -->|Releases| n54
  n498 -->|Assembled by| n496
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
  n506 -->|Assembled by| n505
  n507 -->|Releases| n54
  n507 -->|Assembled by| n506
  n508 -->|Releases| n54
  n508 -->|Assembled by| n497
  n509 -->|Releases| n54
  n509 -->|Assembled by| n507
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
  n517 -->|Assembled by| n516
  n518 -->|Releases| n54
  n518 -->|Assembled by| n517
  n519 -->|Releases| n54
  n519 -->|Assembled by| n508
  n520 -->|Releases| n54
  n520 -->|Assembled by| n518
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
  n528 -->|Assembled by| n527
  n529 -->|Releases| n54
  n529 -->|Assembled by| n528
  n530 -->|Releases| n54
  n530 -->|Assembled by| n519
  n531 -->|Releases| n54
  n531 -->|Assembled by| n529
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
  n539 -->|Assembled by| n538
  n540 -->|Releases| n54
  n540 -->|Assembled by| n539
  n541 -->|Releases| n54
  n541 -->|Assembled by| n530
  n542 -->|Releases| n54
  n542 -->|Assembled by| n540
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
  n550 -->|Assembled by| n549
  n551 -->|Releases| n54
  n551 -->|Assembled by| n550
  n552 -->|Releases| n54
  n552 -->|Assembled by| n541
  n553 -->|Releases| n54
  n553 -->|Assembled by| n551
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
  n561 -->|Assembled by| n560
  n562 -->|Releases| n54
  n562 -->|Assembled by| n561
  n563 -->|Serves| n441
  n563 -->|Depends on| n145
  n563 -->|Depends on| n580
  n563 -->|Depends on| n295
  n563 -->|Depends on| n302
  n563 -->|Depends on| n306
  n563 -->|Depends on| n159
  n564 -->|Chooses| n570
  n564 -->|In| n30
  n564 -->|In| n52
  n564 -->|Serves| n442
  n565 -->|Chooses| n572
  n565 -->|In| n30
  n565 -->|In| n52
  n565 -->|Serves| n442
  n567 -->|Serves| n441
  n567 -->|Depends on| n563
  n567 -->|Depends on| n568
  n567 -->|Depends on| n306
  n569 -->|Serves| n441
  n569 -->|Implements| n578
  n569 -->|Depends on| n574
  n569 -->|Depends on| n274
  n569 -->|Depends on| n353
  n569 -->|Depends on| n211
  n569 -->|Depends on| n213
  n569 -->|Depends on| n208
  n569 -->|Depends on| n156
  n569 -->|Depends on| n580
  n569 -->|Depends on| n306
  n570 -->|Serves| n441
  n570 -->|Implements| n568
  n570 -->|Depends on| n566
  n570 -->|Depends on| n158
  n570 -->|Depends on| n156
  n570 -->|Depends on| n256
  n570 -->|Depends on| n263
  n570 -->|Depends on| n265
  n570 -->|Depends on| n255
  n570 -->|Depends on| n257
  n570 -->|Depends on| n261
  n570 -->|Depends on| n268
  n570 -->|Depends on| n258
  n570 -->|Depends on| n264
  n570 -->|Depends on| n266
  n570 -->|Depends on| n270
  n570 -->|Depends on| n269
  n570 -->|Depends on| n252
  n570 -->|Depends on| n260
  n570 -->|Depends on| n306
  n571 -->|Serves| n441
  n571 -->|Applied by| n567
  n571 -->|Applied by| n585
  n571 -->|Applied by| n577
  n571 -->|Applied by| n563
  n571 -->|Applied by| n44
  n572 -->|Serves| n441
  n572 -->|Implements| n566
  n572 -->|Depends on| n283
  n572 -->|Depends on| n154
  n572 -->|Depends on| n7
  n572 -->|Depends on| n267
  n572 -->|Depends on| n278
  n572 -->|Depends on| n286
  n572 -->|Depends on| n290
  n572 -->|Depends on| n285
  n572 -->|Depends on| n277
  n572 -->|Depends on| n288
  n572 -->|Depends on| n279
  n572 -->|Depends on| n281
  n572 -->|Depends on| n282
  n572 -->|Depends on| n287
  n572 -->|Depends on| n295
  n572 -->|Depends on| n306
  n573 -->|Serves| n442
  n573 -->|Applied by| n567
  n573 -->|Applied by| n585
  n573 -->|Applied by| n577
  n573 -->|Applied by| n564
  n573 -->|Applied by| n565
  n573 -->|Applied by| n584
  n573 -->|Applied by| n583
  n573 -->|Applied by| n576
  n573 -->|Applied by| n575
  n575 -->|Chooses| n581
  n575 -->|In| n30
  n575 -->|In| n52
  n575 -->|Serves| n442
  n576 -->|Chooses| n569
  n576 -->|In| n30
  n576 -->|In| n52
  n576 -->|Serves| n442
  n577 -->|Serves| n441
  n577 -->|Depends on| n563
  n577 -->|Depends on| n578
  n577 -->|Depends on| n306
  n579 -->|Serves| n441
  n579 -->|Implements| n586
  n579 -->|Depends on| n582
  n579 -->|Depends on| n677
  n579 -->|Depends on| n675
  n579 -->|Depends on| n156
  n579 -->|Depends on| n673
  n579 -->|Depends on| n671
  n579 -->|Depends on| n672
  n579 -->|Depends on| n670
  n579 -->|Depends on| n676
  n579 -->|Depends on| n306
  n581 -->|Serves| n441
  n581 -->|Implements| n574
  n581 -->|Depends on| n274
  n581 -->|Depends on| n276
  n581 -->|Depends on| n353
  n581 -->|Depends on| n1
  n581 -->|Depends on| n11
  n581 -->|Depends on| n2
  n581 -->|Depends on| n211
  n581 -->|Depends on| n223
  n581 -->|Depends on| n220
  n581 -->|Depends on| n202
  n581 -->|Depends on| n208
  n581 -->|Depends on| n563
  n581 -->|Depends on| n295
  n581 -->|Depends on| n304
  n581 -->|Depends on| n306
  n581 -->|Depends on| n156
  n583 -->|Chooses| n587
  n583 -->|In| n30
  n583 -->|In| n52
  n583 -->|Serves| n442
  n584 -->|Chooses| n579
  n584 -->|In| n30
  n584 -->|In| n52
  n584 -->|Serves| n442
  n585 -->|Serves| n441
  n585 -->|Depends on| n563
  n585 -->|Depends on| n586
  n585 -->|Depends on| n306
  n587 -->|Serves| n441
  n587 -->|Implements| n582
  n587 -->|Depends on| n563
  n587 -->|Depends on| n675
  n587 -->|Depends on| n156
  n587 -->|Depends on| n673
  n587 -->|Depends on| n671
  n587 -->|Depends on| n678
  n587 -->|Depends on| n674
  n587 -->|Depends on| n295
  n587 -->|Depends on| n306
  n588 -->|Verifies| n163
  n588 -->|Verifies| n191
  n588 -->|Verifies| n161
  n588 -->|Verifies| n708
  n588 -->|In| n52
  n588 -->|Depends on| n163
  n588 -->|Depends on| n41
  n588 -->|Depends on| n161
  n588 -->|Depends on| n139
  n588 -->|Depends on| n589
  n588 -->|Depends on| n307
  n590 -->|Verifies| n110
  n590 -->|Verifies| n120
  n590 -->|Verifies| n162
  n590 -->|Verifies| n190
  n590 -->|Verifies| n567
  n590 -->|Verifies| n563
  n590 -->|Verifies| n570
  n590 -->|Verifies| n572
  n590 -->|Verifies| n179
  n590 -->|Verifies| n178
  n590 -->|Verifies| n372
  n590 -->|Verifies| n375
  n590 -->|Verifies| n401
  n590 -->|In| n52
  n590 -->|Depends on| n110
  n590 -->|Depends on| n596
  n590 -->|Depends on| n56
  n590 -->|Depends on| n51
  n590 -->|Depends on| n142
  n590 -->|Depends on| n21
  n590 -->|Depends on| n39
  n590 -->|Depends on| n41
  n590 -->|Depends on| n147
  n590 -->|Depends on| n292
  n590 -->|Depends on| n307
  n591 -->|Verifies| n163
  n591 -->|Verifies| n183
  n591 -->|Verifies| n187
  n591 -->|Verifies| n191
  n591 -->|Verifies| n173
  n591 -->|Verifies| n394
  n591 -->|Verifies| n407
  n591 -->|Verifies| n405
  n591 -->|Verifies| n372
  n591 -->|Verifies| n381
  n591 -->|Verifies| n363
  n591 -->|Verifies| n395
  n591 -->|In| n52
  n591 -->|Depends on| n163
  n591 -->|Depends on| n41
  n591 -->|Depends on| n17
  n591 -->|Depends on| n595
  n591 -->|Depends on| n307
  n592 -->|Verifies| n295
  n592 -->|Verifies| n302
  n592 -->|Verifies| n159
  n592 -->|Verifies| n160
  n592 -->|Verifies| n156
  n592 -->|Verifies| n322
  n592 -->|In| n52
  n592 -->|Depends on| n295
  n592 -->|Depends on| n302
  n592 -->|Depends on| n159
  n592 -->|Depends on| n160
  n592 -->|Depends on| n156
  n592 -->|Depends on| n300
  n592 -->|Depends on| n322
  n592 -->|Depends on| n593
  n592 -->|Depends on| n307
  n594 -->|Verifies| n164
  n594 -->|Verifies| n172
  n594 -->|Verifies| n171
  n594 -->|Verifies| n185
  n594 -->|Verifies| n182
  n594 -->|In| n52
  n594 -->|Depends on| n164
  n594 -->|Depends on| n172
  n594 -->|Depends on| n171
  n594 -->|Depends on| n185
  n594 -->|Depends on| n182
  n594 -->|Depends on| n600
  n594 -->|Depends on| n307
  n598 -->|Verifies| n174
  n598 -->|In| n52
  n598 -->|Depends on| n174
  n598 -->|Depends on| n597
  n598 -->|Depends on| n307
  n599 -->|Verifies| n176
  n599 -->|In| n52
  n599 -->|Depends on| n176
  n599 -->|Depends on| n163
  n599 -->|Depends on| n41
  n599 -->|Depends on| n17
  n599 -->|Depends on| n307
  n601 -->|Serves| n441
  n601 -->|Part of| n640
  n601 -->|Depends on| n639
  n601 -->|Depends on| n619
  n601 -->|Depends on| n635
  n602 -->|Serves| n441
  n603 -->|Serves| n441
  n604 -->|Serves| n441
  n605 -->|Checks| n608
  n605 -->|Run by| n131
  n605 -->|Signed by| n620
  n606 -->|Checks| n608
  n606 -->|Run by| n114
  n606 -->|Signed by| n620
  n606 -->|Verifies| n356
  n606 -->|Verifies| n358
  n606 -->|Verifies| n357
  n606 -->|Verifies| n383
  n606 -->|Verifies| n384
  n606 -->|Verifies| n385
  n606 -->|Verifies| n402
  n606 -->|Verifies| n390
  n606 -->|Verifies| n389
  n606 -->|Verifies| n379
  n606 -->|Verifies| n400
  n607 -->|Serves| n441
  n608 -->|Produced by| n54
  n609 -->|Serves| n441
  n610 -->|Serves| n441
  n611 -->|Its obligations| n610
  n611 -->|Its obligations| n618
  n611 -->|Its obligations| n602
  n611 -->|Its obligations| n604
  n611 -->|Its obligations| n603
  n611 -->|Its obligations| n609
  n611 -->|Its obligations| n607
  n612 -->|Produced by| n117
  n612 -->|Carries| n36
  n614 -->|Checks| n612
  n614 -->|Run by| n624
  n614 -->|Signed by| n620
  n614 -->|Verifies| n63
  n614 -->|Verifies| n62
  n614 -->|Verifies| n61
  n614 -->|Verifies| n60
  n614 -->|Verifies| n59
  n614 -->|Verifies| n57
  n614 -->|Verifies| n58
  n616 -->|Serves| n441
  n616 -->|Depends on| n342
  n616 -->|Depends on| n274
  n616 -->|Depends on| n200
  n617 -->|Ships| n638
  n617 -->|Programs assembled for| n30
  n617 -->|Follows the policy| n621
  n618 -->|Serves| n441
  n621 -->|Its obligations| n610
  n621 -->|Its obligations| n603
  n622 -->|Ships| n608
  n622 -->|Ships| n625
  n622 -->|Ships| n612
  n622 -->|Deployed by| n104
  n622 -->|Programs assembled for| n30
  n622 -->|Follows the policy| n611
  n623 -->|Verifies| n624
  n623 -->|Verifies| n616
  n623 -->|In| n52
  n623 -->|Depends on| n624
  n623 -->|Depends on| n612
  n623 -->|Depends on| n616
  n623 -->|Depends on| n635
  n623 -->|Depends on| n615
  n623 -->|Depends on| n307
  n624 -->|Serves| n441
  n624 -->|Part of| n640
  n624 -->|Depends on| n612
  n624 -->|Depends on| n300
  n624 -->|Depends on| n616
  n624 -->|Depends on| n613
  n624 -->|Depends on| n635
  n625 -->|Produced by| n36
  n625 -->|Assembled for| n15
  n627 -->|Runs elsewhere| n617
  n627 -->|Its writer's settings| n626
  n628 -->|Serves| n441
  n628 -->|Part of| n640
  n628 -->|Depends on| n639
  n628 -->|Depends on| n619
  n628 -->|Depends on| n635
  n629 -->|Run by| n628
  n629 -->|Signed by| n620
  n631 -->|Requires| n629
  n631 -->|Deployed by| n601
  n631 -->|Programs assembled for| n30
  n631 -->|Follows the policy| n636
  n632 -->|Ships| n627
  n633 -->|In| n52
  n634 -->|In| n30
  n635 -->|Written in| n300
  n636 -->|Its obligations| n610
  n636 -->|Its obligations| n603
  n636 -->|Its obligations| n607
  n637 -->|Verifies| n628
  n637 -->|Verifies| n601
  n637 -->|In| n52
  n637 -->|Depends on| n628
  n637 -->|Depends on| n601
  n637 -->|Depends on| n639
  n637 -->|Depends on| n619
  n637 -->|Depends on| n630
  n637 -->|Depends on| n635
  n637 -->|Depends on| n307
  n640 -->|Deployed in| n30
  n641 -->|Implements| n48
  n641 -->|Depends on| n25
  n643 -->|Serves| n441
  n643 -->|Depends on| n142
  n643 -->|Depends on| n648
  n643 -->|Depends on| n21
  n643 -->|Depends on| n39
  n643 -->|Depends on| n25
  n643 -->|Depends on| n140
  n643 -->|Depends on| n171
  n643 -->|Depends on| n48
  n644 -->|Chooses| n641
  n644 -->|In| n30
  n644 -->|In| n52
  n644 -->|Serves| n441
  n645 -->|Serves| n441
  n645 -->|Depends on| n147
  n645 -->|Depends on| n183
  n645 -->|Depends on| n142
  n645 -->|Depends on| n195
  n645 -->|Depends on| n21
  n645 -->|Depends on| n39
  n646 -->|Refines| n441
  n647 -->|Accepts| n646
  n652 -->|Serves| n441
  n652 -->|Depends on| n143
  n652 -->|Depends on| n297
  n656 -->|Written in| n300
  n657 -->|Serves| n441
  n657 -->|Applied by| n659
  n657 -->|Applied by| n49
  n658 -->|Serves| n441
  n658 -->|Applied by| n659
  n658 -->|Applied by| n652
  n658 -->|Applied by| n49
  n659 -->|Serves| n441
  n659 -->|Serves| n448
  n659 -->|Depends on| n49
  n659 -->|Depends on| n653
  n659 -->|Depends on| n656
  n659 -->|Depends on| n654
  n659 -->|Depends on| n655
  n659 -->|Depends on| n649
  n659 -->|Depends on| n21
  n659 -->|Depends on| n27
  n659 -->|Depends on| n46
  n659 -->|Depends on| n142
  n659 -->|Depends on| n39
  n659 -->|Depends on| n25
  n660 -->|Defined by| n663
  n660 -->|Read in| n666
  n660 -->|Depends on| n663
  n661 -->|Defined by| n663
  n661 -->|Read in| n666
  n661 -->|Depends on| n663
  n662 -->|Defined by| n663
  n662 -->|Read in| n666
  n662 -->|Depends on| n663
  n662 -->|Depends on| n666
  n664 -->|Defined by| n663
  n664 -->|Read in| n666
  n664 -->|Depends on| n663
  n664 -->|Depends on| n662
  n665 -->|Defined by| n663
  n665 -->|Read in| n666
  n665 -->|Depends on| n663
  n665 -->|Depends on| n667
  n665 -->|Depends on| n662
  n666 -->|Defined by| n663
  n666 -->|Queries written in| n650
  n666 -->|Read by| n659
  n666 -->|Uses| n313
  n668 -->|Serves| n441
  n668 -->|Depends on| n663
  n668 -->|Depends on| n667
  n668 -->|Depends on| n142
  n668 -->|Depends on| n661
  n668 -->|Depends on| n662
  n668 -->|Depends on| n664
  n668 -->|Depends on| n660
  n668 -->|Depends on| n665
  n668 -->|Depends on| n39
  n668 -->|Depends on| n40
  n668 -->|Depends on| n295
  n668 -->|Depends on| n297
  n670 -->|Defined by| n677
  n670 -->|Depends on| n677
  n671 -->|Defined by| n677
  n671 -->|Depends on| n677
  n671 -->|Depends on| n673
  n671 -->|Depends on| n675
  n672 -->|Defined by| n677
  n672 -->|Depends on| n677
  n673 -->|Defined by| n677
  n673 -->|Depends on| n677
  n673 -->|Depends on| n675
  n674 -->|Defined by| n677
  n674 -->|Depends on| n677
  n674 -->|Depends on| n669
  n676 -->|Defined by| n677
  n676 -->|Depends on| n677
  n678 -->|Defined by| n677
  n678 -->|Depends on| n677
  n678 -->|Depends on| n669
  n679 -->|Defined by| n707
  n679 -->|Read in| n705
  n679 -->|Depends on| n707
  n680 -->|Defined by| n707
  n680 -->|Read in| n705
  n680 -->|Depends on| n707
  n681 -->|Defined by| n707
  n681 -->|Read in| n705
  n681 -->|Depends on| n707
  n682 -->|Defined by| n707
  n682 -->|Read in| n705
  n682 -->|Depends on| n707
  n683 -->|Defined by| n707
  n683 -->|Read in| n705
  n683 -->|Depends on| n707
  n684 -->|Defined by| n707
  n684 -->|Read in| n705
  n684 -->|Depends on| n707
  n685 -->|Defined by| n707
  n685 -->|Read in| n705
  n685 -->|Depends on| n707
  n686 -->|Defined by| n707
  n686 -->|Read in| n705
  n686 -->|Depends on| n707
  n686 -->|Depends on| n704
  n687 -->|Defined by| n707
  n687 -->|Read in| n705
  n687 -->|Depends on| n707
  n688 -->|Defined by| n707
  n688 -->|Read in| n705
  n688 -->|Depends on| n707
  n689 -->|Defined by| n707
  n689 -->|Read in| n705
  n689 -->|Depends on| n707
  n690 -->|Defined by| n707
  n690 -->|Read in| n705
  n690 -->|Depends on| n707
  n691 -->|Defined by| n707
  n691 -->|Read in| n705
  n691 -->|Depends on| n707
  n692 -->|Defined by| n707
  n692 -->|Read in| n705
  n692 -->|Depends on| n707
  n693 -->|Defined by| n707
  n693 -->|Read in| n705
  n693 -->|Depends on| n707
  n694 -->|Defined by| n707
  n694 -->|Read in| n705
  n694 -->|Depends on| n707
  n694 -->|Depends on| n704
  n695 -->|Defined by| n707
  n695 -->|Read in| n705
  n695 -->|Depends on| n707
  n696 -->|Defined by| n707
  n696 -->|Read in| n705
  n696 -->|Depends on| n707
  n697 -->|Defined by| n707
  n697 -->|Read in| n705
  n697 -->|Depends on| n707
  n698 -->|Defined by| n707
  n698 -->|Read in| n705
  n698 -->|Depends on| n707
  n699 -->|Defined by| n707
  n699 -->|Read in| n705
  n699 -->|Depends on| n707
  n700 -->|Defined by| n707
  n700 -->|Read in| n705
  n700 -->|Depends on| n707
  n702 -->|Defined by| n707
  n702 -->|Read in| n705
  n702 -->|Depends on| n707
  n702 -->|Depends on| n704
  n703 -->|Defined by| n707
  n703 -->|Read in| n705
  n703 -->|Depends on| n707
  n704 -->|Defined by| n707
  n704 -->|Read in| n705
  n704 -->|Depends on| n707
  n705 -->|Queries written in| n650
  n705 -->|Read by| n659
  n705 -->|Watches the globals| n710
  n705 -->|Uses| n320
  n706 -->|Serves| n441
  n708 -->|Serves| n441
  n708 -->|Depends on| n705
  n708 -->|Depends on| n707
  n708 -->|Depends on| n139
  n708 -->|Depends on| n701
  n708 -->|Depends on| n146
  n708 -->|Depends on| n145
  n708 -->|Depends on| n691
  n708 -->|Depends on| n704
  n708 -->|Depends on| n692
  n708 -->|Depends on| n698
  n708 -->|Depends on| n684
  n708 -->|Depends on| n683
  n708 -->|Depends on| n700
  n708 -->|Depends on| n702
  n708 -->|Depends on| n696
  n708 -->|Depends on| n679
  n708 -->|Depends on| n685
  n708 -->|Depends on| n694
  n708 -->|Depends on| n686
  n708 -->|Depends on| n680
  n708 -->|Depends on| n699
  n708 -->|Depends on| n697
  n708 -->|Depends on| n709
  n708 -->|Depends on| n689
  n708 -->|Depends on| n703
  n708 -->|Depends on| n681
  n708 -->|Depends on| n690
  n708 -->|Depends on| n682
  n708 -->|Depends on| n148
  n708 -->|Depends on| n39
  n708 -->|Depends on| n40
  n708 -->|Depends on| n295
  n708 -->|Depends on| n297
  n709 -->|Defined by| n707
  n709 -->|Read in| n705
  n709 -->|Depends on| n707
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
