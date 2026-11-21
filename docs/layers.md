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
    n92["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n93["A project started<br/><small>Scenario</small>"]:::held
    n94["A published value changed<br/><small>Scenario</small>"]:::held
    n95["The registry filled<br/><small>Scenario</small>"]:::held
    n96["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n97["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n98["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n99["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n100["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n101["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n102["A value amended<br/><small>Scenario</small>"]:::held
    n103["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n104["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n105["Advance<br/><small>Entry point</small>"]:::held
    n106["Amend<br/><small>Entry point</small>"]:::held
    n107["An amendment prepared<br/><small>Function</small>"]:::held
    n108["Assemble a component<br/><small>Entry point</small>"]:::held
    n109["Assembler<br/><small>Function</small>"]:::held
    n110["Audit the packages<br/><small>Entry point</small>"]:::held
    n111["Build<br/><small>Entry point</small>"]:::held
    n112["Two builds compared<br/><small>Function</small>"]:::held
    n113["Deliver<br/><small>Entry point</small>"]:::held
    n114["Start trame dev<br/><small>Entry point</small>"]:::held
    n115["Ask the machine<br/><small>Entry point</small>"]:::held
    n116["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n117["Payload<br/><small>Entry point</small>"]:::held
    n118["Export the page<br/><small>Entry point</small>"]:::held
    n119["Start a project<br/><small>Entry point</small>"]:::held
    n120["Plan<br/><small>Entry point</small>"]:::held
    n121["Preparation<br/><small>Function</small>"]:::held
    n122["Publish<br/><small>Entry point</small>"]:::held
    n123["Record evidence<br/><small>Entry point</small>"]:::held
    n124["A module of references<br/><small>Function</small>"]:::held
    n125["Fill the registry<br/><small>Entry point</small>"]:::held
    n126["Release a version<br/><small>Entry point</small>"]:::held
    n127["Render a view<br/><small>Function</small>"]:::held
    n128["Run a component<br/><small>Entry point</small>"]:::held
    n129["Ship<br/><small>Entry point</small>"]:::held
    n130["Show a view<br/><small>Entry point</small>"]:::held
    n131["Take the snapshot<br/><small>Entry point</small>"]:::held
    n132["Test the laws<br/><small>Entry point</small>"]:::held
    n133["Upgrade<br/><small>Entry point</small>"]:::held
    n134["View by its name<br/><small>Entry point</small>"]:::held
    n135["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n136["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n137["Default rank<br/><small>Decision</small>"]:::neutral
    n138["Documentation comment<br/><small>Decision</small>"]:::neutral
    n139["Names of the documents<br/><small>Standard</small>"]:::neutral
    n140["The frozen API<br/><small>Standard</small>"]:::neutral
    n141["JSON formatting<br/><small>Decision</small>"]:::neutral
    n142["The language's names<br/><small>Decision</small>"]:::neutral
    n143["Project layout<br/><small>Decision</small>"]:::neutral
    n144["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n145["How a project starts<br/><small>Decision</small>"]:::neutral
    n146["Trame references<br/><small>Standard</small>"]:::neutral
    n147["Names of steps<br/><small>Decision</small>"]:::neutral
    n148["Trame's commands<br/><small>Standard</small>"]:::neutral
    n149["Trame's environment<br/><small>Standard</small>"]:::neutral
    n150["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n151["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n152["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n153["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n154["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n155["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n156["How a number is written<br/><small>Decision</small>"]:::neutral
    n157["Punctuation of documents<br/><small>Function</small>"]:::held
    n158["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n159["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n160["Values with their units<br/><small>Function</small>"]:::held
    n161["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n162["Assembly<br/><small>Function</small>"]:::held
    n163["Compilation API<br/><small>Function</small>"]:::held
    n164["Compiler<br/><small>Function</small>"]:::held
    n165["Cycles<br/><small>Function</small>"]:::held
    n166["Date bundle<br/><small>Function</small>"]:::held
    n167["trame dev server<br/><small>Function</small>"]:::held
    n168["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n169["Differences<br/><small>Function</small>"]:::held
    n170["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n171["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n172["Fingerprints<br/><small>Function</small>"]:::held
    n173["Pseudo-random generator<br/><small>Function</small>"]:::held
    n174["Graph<br/><small>Function</small>"]:::held
    n175["Judged harder<br/><small>Function</small>"]:::held
    n176["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n177["Laws<br/><small>Function</small>"]:::held
    n178["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n179["Lock<br/><small>Function</small>"]:::held
    n180["Machine outputs<br/><small>Function</small>"]:::held
    n181["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n182["Payload<br/><small>Function</small>"]:::held
    n183["Positions<br/><small>Function</small>"]:::held
    n184["Project<br/><small>Function</small>"]:::held
    n185["The runs of a project<br/><small>Function</small>"]:::held
    n186["References<br/><small>Function</small>"]:::held
    n187["A shipment's pipeline<br/><small>Function</small>"]:::held
    n188["Static reading<br/><small>Function</small>"]:::held
    n189["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n190["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n191["Views<br/><small>Function</small>"]:::held
    n192["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n193["Accept a candidate<br/><small>Requirement</small>"]:::held
    n194["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n195["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n196["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n197["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n198["Records of the releases<br/><small>Function</small>"]:::held
    n199["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n200["Attribute presence<br/><small>Syntax element</small>"]:::held
    n201["Attribute selector<br/><small>Syntax element</small>"]:::held
    n202["Class selector<br/><small>Syntax element</small>"]:::held
    n203["Declaration<br/><small>Syntax element</small>"]:::held
    n204["Rule<br/><small>Syntax element</small>"]:::held
    n205["CSS style sheets<br/><small>Language</small>"]:::held
    n206["Variable<br/><small>Syntax element</small>"]:::held
    n207["Custom property<br/><small>Syntax element</small>"]:::held
    n208["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n209["Escaped text<br/><small>Syntax element</small>"]:::held
    n210["Attributes<br/><small>Syntax element</small>"]:::held
    n211["Element over several lines<br/><small>Syntax element</small>"]:::held
    n212["HTML element<br/><small>Syntax element</small>"]:::held
    n213["End tag<br/><small>Syntax element</small>"]:::held
    n214["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n215["HTML markup<br/><small>Language</small>"]:::held
    n216["Start tag<br/><small>Syntax element</small>"]:::held
    n217["JSON in a script<br/><small>Syntax element</small>"]:::held
    n218["Media feature<br/><small>Syntax element</small>"]:::held
    n219["Media rule<br/><small>Syntax element</small>"]:::held
    n220["Negation<br/><small>Syntax element</small>"]:::held
    n221["Path data<br/><small>Syntax element</small>"]:::held
    n222["Script<br/><small>Syntax element</small>"]:::held
    n223["Selector list<br/><small>Syntax element</small>"]:::held
    n224["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n225["Drivers<br/><small>Function</small>"]:::held
    n226["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n227["Answers without crashing<br/><small>Requirement</small>"]:::held
    n228["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n229["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n230["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n231["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n232["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n233["Complete declaration<br/><small>Requirement</small>"]:::held
    n234["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n235["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n236["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n237["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n238["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n239["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n240["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n241["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n242["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n243["Same input, same answer<br/><small>Requirement</small>"]:::held
    n244["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n245["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n246["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n247["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n248["What belongs to a library<br/><small>Requirement</small>"]:::held
    n249["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n250["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n251["A release is settled<br/><small>Requirement</small>"]:::held
    n252["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n253["Anchor<br/><small>Syntax element</small>"]:::held
    n254["Backtick string<br/><small>Syntax element</small>"]:::held
    n255["Blank line<br/><small>Syntax element</small>"]:::held
    n256["Block quote<br/><small>Syntax element</small>"]:::held
    n257["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n258["Code block<br/><small>Syntax element</small>"]:::held
    n259["Code span<br/><small>Syntax element</small>"]:::held
    n260["CommonMark<br/><small>Standard</small>"]:::neutral
    n261["Collapsible block<br/><small>Syntax element</small>"]:::held
    n262["Emphasis<br/><small>Syntax element</small>"]:::held
    n263["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n264["Heading<br/><small>Syntax element</small>"]:::held
    n265["Link<br/><small>Syntax element</small>"]:::held
    n266["List item<br/><small>Syntax element</small>"]:::held
    n267["Relative reference<br/><small>Syntax element</small>"]:::held
    n268["Small text<br/><small>Syntax element</small>"]:::held
    n269["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n270["Table<br/><small>Syntax element</small>"]:::held
    n271["Table cell<br/><small>Syntax element</small>"]:::held
    n272["Delimiter row<br/><small>Syntax element</small>"]:::held
    n273["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n274["Around the documents<br/><small>Decision</small>"]:::neutral
    n275["Documents in the page<br/><small>Decision</small>"]:::neutral
    n276["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n277["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n278["Class definition<br/><small>Syntax element</small>"]:::held
    n279["Flowchart<br/><small>Syntax element</small>"]:::held
    n280["Gantt chart<br/><small>Syntax element</small>"]:::held
    n281["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n282["Section<br/><small>Syntax element</small>"]:::held
    n283["Task<br/><small>Syntax element</small>"]:::held
    n284["Mermaid<br/><small>Standard</small>"]:::neutral
    n285["Label<br/><small>Syntax element</small>"]:::held
    n286["Link<br/><small>Syntax element</small>"]:::held
    n287["Node<br/><small>Syntax element</small>"]:::held
    n288["Milestone<br/><small>Syntax element</small>"]:::held
    n289["Node style<br/><small>Syntax element</small>"]:::held
    n290["Style properties<br/><small>Syntax element</small>"]:::held
    n291["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n292["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n293["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n294["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n295["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n296["Dates<br/><small>Function</small>"]:::held
    n297["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n298["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n299["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n300["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n301["Language<br/><small>Decision</small>"]:::neutral
    n302["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n303["Lists<br/><small>Function</small>"]:::held
    n304["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n305["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n306["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n307["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n308["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n309["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n310["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n311["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n312["Grammar of CSS<br/><small>Package</small>"]:::held
    n313["esbuild<br/><small>Package</small>"]:::held
    n314["Grammar of HCL<br/><small>Package</small>"]:::held
    n315["Grammar of HTML<br/><small>Package</small>"]:::held
    n316["Types of Node.js<br/><small>Package</small>"]:::held
    n317["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n318["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n319["The people of the repository<br/><small>Package</small>"]:::neutral
    n320["The standard library<br/><small>Package</small>"]:::neutral
    n321["tsx<br/><small>Package</small>"]:::held
    n322["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n323["TypeScript<br/><small>Package</small>"]:::held
    n324["Order of versions<br/><small>Function</small>"]:::held
    n325["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n326["Banner<br/><small>Syntax element</small>"]:::held
    n327["Brand<br/><small>Syntax element</small>"]:::held
    n328["State of the compilation<br/><small>Syntax element</small>"]:::held
    n329["Dates<br/><small>Syntax element</small>"]:::held
    n330["Head of the document<br/><small>Syntax element</small>"]:::held
    n331["Document picker<br/><small>Syntax element</small>"]:::held
    n332["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n333["Fonts<br/><small>Syntax element</small>"]:::held
    n334["Logo<br/><small>Syntax element</small>"]:::held
    n335["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n336["Main area<br/><small>Syntax element</small>"]:::held
    n337["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n338["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n339["Navigation<br/><small>Syntax element</small>"]:::held
    n340["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n341["Page<br/><small>Function</small>"]:::held
    n342["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n343["Document of the page<br/><small>Syntax element</small>"]:::held
    n344["Regions of the page<br/><small>Decision</small>"]:::neutral
    n345["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n346["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n347["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n348["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n349["Shell<br/><small>Syntax element</small>"]:::held
    n350["Side bar<br/><small>Syntax element</small>"]:::held
    n351["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n352["Colours of a status<br/><small>Syntax element</small>"]:::held
    n353["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n354["Theme<br/><small>Syntax element</small>"]:::held
    n355["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n356["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n357["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n358["System files, for reading<br/><small>Implementation</small>"]:::held
    n359["Trees on disk<br/><small>Implementation</small>"]:::held
    n360["System files, for writing<br/><small>Implementation</small>"]:::held
    n361["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n362["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n363["esbuild<br/><small>Implementation</small>"]:::held
    n364["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n365["Example process<br/><small>Function</small>"]:::held
    n366["Example project<br/><small>Decision</small>"]:::neutral
    n367["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n368["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n369["Amendments in place<br/><small>Implementation</small>"]:::held
    n370["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n371["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n372["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n373["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n374["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n375["A server in memory<br/><small>Function</small>"]:::held
    n376["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n377["Terminal in memory<br/><small>Function</small>"]:::held
    n378["Command line<br/><small>Implementation</small>"]:::held
    n379["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n380["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n381["Node HTTP server<br/><small>Implementation</small>"]:::held
    n382["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n383["Node paths<br/><small>Implementation</small>"]:::held
    n384["NodePlatform<br/><small>Technical choice</small>"]:::held
    n385["Node process<br/><small>Implementation</small>"]:::held
    n386["Node programs<br/><small>Implementation</small>"]:::held
    n387["Node terminal<br/><small>Implementation</small>"]:::held
    n388["Node timer<br/><small>Implementation</small>"]:::held
    n389["No installer in test<br/><small>Implementation</small>"]:::held
    n390["No registry in test<br/><small>Function</small>"]:::held
    n391["npm installs<br/><small>Implementation</small>"]:::held
    n392["npm's reports<br/><small>Implementation</small>"]:::held
    n393["Packages by their origin<br/><small>Implementation</small>"]:::held
    n394["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n395["Page resources<br/><small>Implementation</small>"]:::held
    n396["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n397["Results kept in the process<br/><small>Implementation</small>"]:::held
    n398["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n399["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n400["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n401["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n402["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n403["Stopped clock<br/><small>Function</small>"]:::held
    n404["System clock<br/><small>Implementation</small>"]:::held
    n405["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n406["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n407["Trame's prelude<br/><small>Implementation</small>"]:::held
    n408["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n409["tsx loader<br/><small>Implementation</small>"]:::held
    n410["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n411["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n412["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n413["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n414["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n415["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n416["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n417["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n418["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n419["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n420["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n421["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n422["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n423["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n424["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n425["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n426["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n427["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n428["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n429["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n430["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n431["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n432["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n433["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n434["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n435["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n436["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n437["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n438["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n439["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n440["Candidate dates<br/><small>Decision</small>"]:::neutral
    n441["Claim sets<br/><small>Decision</small>"]:::neutral
    n442["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n443["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n444["A specification that runs<br/><small>Goal</small>"]:::neutral
    n445["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n446["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n447["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n448["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n449["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n450["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n451["A single source of truth<br/><small>Goal</small>"]:::neutral
    n452["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n453["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n454["Generation 1<br/><small>Release</small>"]:::neutral
    n455["Generation 10<br/><small>Release</small>"]:::neutral
    n456["Generation 100<br/><small>Release</small>"]:::neutral
    n457["Generation 101<br/><small>Release</small>"]:::neutral
    n458["Generation 102<br/><small>Release</small>"]:::neutral
    n459["Generation 103<br/><small>Release</small>"]:::neutral
    n460["Generation 104<br/><small>Release</small>"]:::neutral
    n461["Generation 105<br/><small>Release</small>"]:::neutral
    n462["Generation 106<br/><small>Release</small>"]:::neutral
    n463["Generation 107<br/><small>Release</small>"]:::neutral
    n464["Generation 108<br/><small>Release</small>"]:::neutral
    n465["Generation 109<br/><small>Release</small>"]:::neutral
    n466["Generation 11<br/><small>Release</small>"]:::neutral
    n467["Generation 110<br/><small>Release</small>"]:::neutral
    n468["Generation 111<br/><small>Release</small>"]:::neutral
    n469["Generation 112<br/><small>Release</small>"]:::neutral
    n470["Generation 113<br/><small>Release</small>"]:::neutral
    n471["Generation 114<br/><small>Release</small>"]:::neutral
    n472["Generation 115<br/><small>Release</small>"]:::neutral
    n473["Generation 12<br/><small>Release</small>"]:::neutral
    n474["Generation 13<br/><small>Release</small>"]:::neutral
    n475["Generation 14<br/><small>Release</small>"]:::neutral
    n476["Generation 15<br/><small>Release</small>"]:::neutral
    n477["Generation 16<br/><small>Release</small>"]:::neutral
    n478["Generation 17<br/><small>Release</small>"]:::neutral
    n479["Generation 18<br/><small>Release</small>"]:::neutral
    n480["Generation 19<br/><small>Release</small>"]:::neutral
    n481["Generation 2<br/><small>Release</small>"]:::neutral
    n482["Generation 20<br/><small>Release</small>"]:::neutral
    n483["Generation 21<br/><small>Release</small>"]:::neutral
    n484["Generation 22<br/><small>Release</small>"]:::neutral
    n485["Generation 23<br/><small>Release</small>"]:::neutral
    n486["Generation 24<br/><small>Release</small>"]:::neutral
    n487["Generation 25<br/><small>Release</small>"]:::neutral
    n488["Generation 26<br/><small>Release</small>"]:::neutral
    n489["Generation 27<br/><small>Release</small>"]:::neutral
    n490["Generation 28<br/><small>Release</small>"]:::neutral
    n491["Generation 29<br/><small>Release</small>"]:::neutral
    n492["Generation 3<br/><small>Release</small>"]:::neutral
    n493["Generation 30<br/><small>Release</small>"]:::neutral
    n494["Generation 31<br/><small>Release</small>"]:::neutral
    n495["Generation 32<br/><small>Release</small>"]:::neutral
    n496["Generation 33<br/><small>Release</small>"]:::neutral
    n497["Generation 34<br/><small>Release</small>"]:::neutral
    n498["Generation 35<br/><small>Release</small>"]:::neutral
    n499["Generation 36<br/><small>Release</small>"]:::neutral
    n500["Generation 37<br/><small>Release</small>"]:::neutral
    n501["Generation 38<br/><small>Release</small>"]:::neutral
    n502["Generation 39<br/><small>Release</small>"]:::neutral
    n503["Generation 4<br/><small>Release</small>"]:::neutral
    n504["Generation 40<br/><small>Release</small>"]:::neutral
    n505["Generation 41<br/><small>Release</small>"]:::neutral
    n506["Generation 42<br/><small>Release</small>"]:::neutral
    n507["Generation 43<br/><small>Release</small>"]:::neutral
    n508["Generation 44<br/><small>Release</small>"]:::neutral
    n509["Generation 45<br/><small>Release</small>"]:::neutral
    n510["Generation 46<br/><small>Release</small>"]:::neutral
    n511["Generation 47<br/><small>Release</small>"]:::neutral
    n512["Generation 48<br/><small>Release</small>"]:::neutral
    n513["Generation 49<br/><small>Release</small>"]:::neutral
    n514["Generation 5<br/><small>Release</small>"]:::neutral
    n515["Generation 50<br/><small>Release</small>"]:::neutral
    n516["Generation 51<br/><small>Release</small>"]:::neutral
    n517["Generation 52<br/><small>Release</small>"]:::neutral
    n518["Generation 53<br/><small>Release</small>"]:::neutral
    n519["Generation 54<br/><small>Release</small>"]:::neutral
    n520["Generation 55<br/><small>Release</small>"]:::neutral
    n521["Generation 56<br/><small>Release</small>"]:::neutral
    n522["Generation 57<br/><small>Release</small>"]:::neutral
    n523["Generation 58<br/><small>Release</small>"]:::neutral
    n524["Generation 59<br/><small>Release</small>"]:::neutral
    n525["Generation 6<br/><small>Release</small>"]:::neutral
    n526["Generation 60<br/><small>Release</small>"]:::neutral
    n527["Generation 61<br/><small>Release</small>"]:::neutral
    n528["Generation 62<br/><small>Release</small>"]:::neutral
    n529["Generation 63<br/><small>Release</small>"]:::neutral
    n530["Generation 64<br/><small>Release</small>"]:::neutral
    n531["Generation 65<br/><small>Release</small>"]:::neutral
    n532["Generation 66<br/><small>Release</small>"]:::neutral
    n533["Generation 67<br/><small>Release</small>"]:::neutral
    n534["Generation 68<br/><small>Release</small>"]:::neutral
    n535["Generation 69<br/><small>Release</small>"]:::neutral
    n536["Generation 7<br/><small>Release</small>"]:::neutral
    n537["Generation 70<br/><small>Release</small>"]:::neutral
    n538["Generation 71<br/><small>Release</small>"]:::neutral
    n539["Generation 72<br/><small>Release</small>"]:::neutral
    n540["Generation 73<br/><small>Release</small>"]:::neutral
    n541["Generation 74<br/><small>Release</small>"]:::neutral
    n542["Generation 75<br/><small>Release</small>"]:::neutral
    n543["Generation 76<br/><small>Release</small>"]:::neutral
    n544["Generation 77<br/><small>Release</small>"]:::neutral
    n545["Generation 78<br/><small>Release</small>"]:::neutral
    n546["Generation 79<br/><small>Release</small>"]:::neutral
    n547["Generation 8<br/><small>Release</small>"]:::neutral
    n548["Generation 80<br/><small>Release</small>"]:::neutral
    n549["Generation 81<br/><small>Release</small>"]:::neutral
    n550["Generation 82<br/><small>Release</small>"]:::neutral
    n551["Generation 83<br/><small>Release</small>"]:::neutral
    n552["Generation 84<br/><small>Release</small>"]:::neutral
    n553["Generation 85<br/><small>Release</small>"]:::neutral
    n554["Generation 86<br/><small>Release</small>"]:::neutral
    n555["Generation 87<br/><small>Release</small>"]:::neutral
    n556["Generation 88<br/><small>Release</small>"]:::neutral
    n557["Generation 89<br/><small>Release</small>"]:::neutral
    n558["Generation 9<br/><small>Release</small>"]:::neutral
    n559["Generation 90<br/><small>Release</small>"]:::neutral
    n560["Generation 91<br/><small>Release</small>"]:::neutral
    n561["Generation 92<br/><small>Release</small>"]:::neutral
    n562["Generation 93<br/><small>Release</small>"]:::neutral
    n563["Generation 94<br/><small>Release</small>"]:::neutral
    n564["Generation 95<br/><small>Release</small>"]:::neutral
    n565["Generation 96<br/><small>Release</small>"]:::neutral
    n566["Generation 97<br/><small>Release</small>"]:::neutral
    n567["Generation 98<br/><small>Release</small>"]:::neutral
    n568["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n569["Common rendering<br/><small>Function</small>"]:::held
    n570["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n571["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n572["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n573["Rendering of the files<br/><small>Function</small>"]:::held
    n574["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n575["HTML writer<br/><small>Function</small>"]:::held
    n576["Markdown writer<br/><small>Function</small>"]:::held
    n577["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n578["Mermaid diagrams<br/><small>Function</small>"]:::held
    n579["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n580["Figures of the page<br/><small>Port</small>"]:::neutral
    n581["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n582["The page in HTML<br/><small>Technical choice</small>"]:::held
    n583["Rendering in the page<br/><small>Function</small>"]:::held
    n584["Syntax of the page<br/><small>Port</small>"]:::neutral
    n585["Plain text writer<br/><small>Function</small>"]:::held
    n586["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n587["Figures in SVG<br/><small>Function</small>"]:::held
    n588["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n589["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n590["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n591["Rendering in the terminal<br/><small>Function</small>"]:::held
    n592["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n593["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n594["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n595["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n596["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n597["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n598["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n599["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n600["EngineReckons<br/><small>Scenario</small>"]:::held
    n601["Shape of the example<br/><small>Decision</small>"]:::neutral
    n602["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n603["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n604["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n605["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n606["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Trame · SDLC"]
    n607["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n608["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n609["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n610["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n611["The candidate plays the laws<br/><small>Check</small>"]:::held
    n612["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n613["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n614["The candidate engine<br/><small>Artefact</small>"]:::held
    n615["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n616["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n617["How a generation is made<br/><small>Policy</small>"]:::neutral
    n618["The graph page<br/><small>Artefact</small>"]:::held
    n619["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n620["The graph page opens<br/><small>Check</small>"]:::held
    n621["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n622["What the graph page is asked<br/><small>Function</small>"]:::held
    n623["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n624["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n625["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n626["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n627["How a change merges<br/><small>Policy</small>"]:::neutral
    n628["The next generation<br/><small>Shipment</small>"]:::held
    n629["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n630["Open the graph page<br/><small>Entry point</small>"]:::held
    n631["The page's program<br/><small>Artefact</small>"]:::held
    n632["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n633["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n634["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n635["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n636["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n637["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n638["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n639["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n640["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n641["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n642["How the repository is set<br/><small>Policy</small>"]:::neutral
    n643["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n644["The engine<br/><small>Artefact</small>"]:::unknown
    n645["Trame's repository<br/><small>Decision</small>"]:::neutral
    n646["Trame's SDLC<br/><small>Component</small>"]:::neutral
  end
  subgraph shipping["Trame · Shipping"]
    n647["Attribution<br/><small>Function</small>"]:::held
    n648["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n649["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n650["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n651["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n652["Ship only what holds<br/><small>Requirement</small>"]:::held
    n653["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n654["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n655["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n656["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n657["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n658["Checks of a body<br/><small>Function</small>"]:::held
    n659["Captures<br/><small>Standard</small>"]:::neutral
    n660["Categories of literals<br/><small>Decision</small>"]:::neutral
    n661["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n662["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n663["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n664["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n665["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n666["Attribute<br/><small>Syntax element</small>"]:::held
    n667["Comment<br/><small>Syntax element</small>"]:::held
    n668["Text<br/><small>Syntax element</small>"]:::held
    n669["HCL<br/><small>Standard</small>"]:::neutral
    n670["Value<br/><small>Syntax element</small>"]:::held
    n671["Module call<br/><small>Syntax element</small>"]:::held
    n672["Terraform<br/><small>Language</small>"]:::held
    n673["Terraform modules<br/><small>Standard</small>"]:::neutral
    n674["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n675["Box drawing<br/><small>Standard</small>"]:::neutral
    n676["Code lines<br/><small>Syntax element</small>"]:::held
    n677["Columns<br/><small>Syntax element</small>"]:::held
    n678["Item line<br/><small>Syntax element</small>"]:::held
    n679["Padded cell<br/><small>Syntax element</small>"]:::held
    n680["Path step<br/><small>Syntax element</small>"]:::held
    n681["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n682["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n683["Terminal text<br/><small>Decision</small>"]:::neutral
    n684["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n685["List on several lines<br/><small>Syntax element</small>"]:::held
    n686["Type assertion<br/><small>Syntax element</small>"]:::held
    n687["Assignment<br/><small>Syntax element</small>"]:::held
    n688["Async function of a block<br/><small>Syntax element</small>"]:::held
    n689["Waiting<br/><small>Syntax element</small>"]:::held
    n690["Call<br/><small>Syntax element</small>"]:::held
    n691["Constant<br/><small>Syntax element</small>"]:::held
    n692["Default import<br/><small>Syntax element</small>"]:::held
    n693["Documentation comment<br/><small>Syntax element</small>"]:::held
    n694["Export<br/><small>Syntax element</small>"]:::held
    n695["Condition<br/><small>Syntax element</small>"]:::held
    n696["List on one line<br/><small>Syntax element</small>"]:::held
    n697["Comment<br/><small>Syntax element</small>"]:::held
    n698["Property access<br/><small>Syntax element</small>"]:::held
    n699["Title of a module<br/><small>Syntax element</small>"]:::held
    n700["Import of names<br/><small>Syntax element</small>"]:::held
    n701["Object on several lines<br/><small>Syntax element</small>"]:::held
    n702["Object<br/><small>Syntax element</small>"]:::held
    n703["Object type<br/><small>Syntax element</small>"]:::held
    n704["Optional property access<br/><small>Syntax element</small>"]:::held
    n705["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n706["Group<br/><small>Syntax element</small>"]:::held
    n707["Names of a program<br/><small>Decision</small>"]:::neutral
    n708["Property<br/><small>Syntax element</small>"]:::held
    n709["Strict inequality<br/><small>Syntax element</small>"]:::held
    n710["Text<br/><small>Syntax element</small>"]:::held
    n711["TypeScript<br/><small>Language</small>"]:::held
    n712["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n713["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n714["TypeScript writer<br/><small>Function</small>"]:::held
    n715["Union type<br/><small>Syntax element</small>"]:::held
    n716["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n54 -->|Deployed in| n30
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n18
  n57 -->|Implements| n35
  n57 -->|Depends on| n355
  n57 -->|Depends on| n168
  n58 -->|Implements| n20
  n58 -->|Depends on| n340
  n59 -->|Implements| n24
  n59 -->|Depends on| n355
  n59 -->|Depends on| n168
  n60 -->|Implements| n37
  n60 -->|Depends on| n355
  n61 -->|Implements| n38
  n61 -->|Depends on| n218
  n62 -->|Serves| n444
  n62 -->|Depends on| n355
  n62 -->|Depends on| n275
  n62 -->|Depends on| n277
  n62 -->|Depends on| n276
  n62 -->|Depends on| n0
  n62 -->|Depends on| n212
  n62 -->|Depends on| n216
  n62 -->|Depends on| n224
  n62 -->|Depends on| n221
  n62 -->|Depends on| n203
  n62 -->|Depends on| n209
  n62 -->|Depends on| n569
  n62 -->|Depends on| n305
  n62 -->|Depends on| n307
  n62 -->|Depends on| n157
  n63 -->|Serves| n444
  n63 -->|Part of| n36
  n63 -->|Depends on| n38
  n63 -->|Depends on| n37
  n63 -->|Depends on| n24
  n63 -->|Depends on| n20
  n63 -->|Depends on| n35
  n63 -->|Depends on| n62
  n63 -->|Depends on| n569
  n63 -->|Depends on| n355
  n63 -->|Depends on| n344
  n63 -->|Depends on| n347
  n63 -->|Depends on| n335
  n63 -->|Depends on| n275
  n63 -->|Depends on| n274
  n63 -->|Depends on| n276
  n63 -->|Depends on| n0
  n63 -->|Depends on| n139
  n63 -->|Depends on| n586
  n63 -->|Depends on| n157
  n63 -->|Depends on| n301
  n63 -->|Depends on| n212
  n63 -->|Depends on| n209
  n63 -->|Depends on| n201
  n63 -->|Depends on| n200
  n63 -->|Depends on| n223
  n63 -->|Depends on| n202
  n63 -->|Depends on| n305
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n15
  n64 -->|Serves| n445
  n65 -->|Serves| n444
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n44
  n66 -->|Verifies| n105
  n66 -->|Verifies| n170
  n66 -->|In| n52
  n66 -->|Depends on| n105
  n66 -->|Depends on| n42
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n41
  n66 -->|Depends on| n39
  n66 -->|Depends on| n143
  n66 -->|Depends on| n21
  n66 -->|Depends on| n23
  n66 -->|Depends on| n148
  n66 -->|Depends on| n292
  n66 -->|Depends on| n67
  n66 -->|Depends on| n308
  n70 -->|Verifies| n665
  n70 -->|Verifies| n658
  n70 -->|Verifies| n412
  n70 -->|In| n52
  n70 -->|Depends on| n665
  n70 -->|Depends on| n658
  n70 -->|Depends on| n711
  n70 -->|Depends on| n71
  n70 -->|Depends on| n298
  n70 -->|Depends on| n308
  n72 -->|Verifies| n120
  n72 -->|In| n52
  n72 -->|Depends on| n111
  n72 -->|Depends on| n120
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n23
  n72 -->|Depends on| n41
  n72 -->|Depends on| n39
  n72 -->|Depends on| n143
  n72 -->|Depends on| n91
  n72 -->|Depends on| n148
  n72 -->|Depends on| n293
  n72 -->|Depends on| n308
  n73 -->|Verifies| n378
  n73 -->|Verifies| n377
  n73 -->|In| n52
  n73 -->|Depends on| n18
  n73 -->|Depends on| n51
  n73 -->|Depends on| n148
  n73 -->|Depends on| n103
  n73 -->|Depends on| n306
  n73 -->|Depends on| n308
  n74 -->|Verifies| n108
  n74 -->|Verifies| n109
  n74 -->|Verifies| n162
  n74 -->|Verifies| n714
  n74 -->|Verifies| n674
  n74 -->|Verifies| n225
  n74 -->|Verifies| n403
  n74 -->|In| n52
  n74 -->|Depends on| n108
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n148
  n74 -->|Depends on| n143
  n74 -->|Depends on| n69
  n74 -->|Depends on| n140
  n74 -->|Depends on| n293
  n74 -->|Depends on| n308
  n75 -->|Verifies| n128
  n75 -->|In| n52
  n75 -->|Depends on| n128
  n75 -->|Depends on| n42
  n75 -->|Depends on| n56
  n75 -->|Depends on| n148
  n75 -->|Depends on| n69
  n75 -->|Depends on| n96
  n75 -->|Depends on| n308
  n76 -->|Verifies| n122
  n76 -->|In| n52
  n76 -->|Depends on| n122
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n41
  n76 -->|Depends on| n39
  n76 -->|Depends on| n143
  n76 -->|Depends on| n148
  n76 -->|Depends on| n293
  n76 -->|Depends on| n308
  n77 -->|Verifies| n114
  n77 -->|Verifies| n167
  n77 -->|Verifies| n375
  n77 -->|Verifies| n388
  n77 -->|In| n52
  n77 -->|Depends on| n117
  n77 -->|Depends on| n114
  n77 -->|Depends on| n42
  n77 -->|Depends on| n47
  n77 -->|Depends on| n51
  n77 -->|Depends on| n23
  n77 -->|Depends on| n53
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n143
  n77 -->|Depends on| n168
  n77 -->|Depends on| n442
  n77 -->|Depends on| n184
  n77 -->|Depends on| n148
  n77 -->|Depends on| n304
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n308
  n79 -->|Verifies| n115
  n79 -->|Verifies| n185
  n79 -->|Verifies| n399
  n79 -->|In| n52
  n79 -->|Depends on| n115
  n79 -->|Depends on| n42
  n79 -->|Depends on| n51
  n79 -->|Depends on| n116
  n79 -->|Depends on| n148
  n79 -->|Depends on| n293
  n79 -->|Depends on| n308
  n80 -->|Verifies| n123
  n80 -->|In| n52
  n80 -->|Depends on| n123
  n80 -->|Depends on| n56
  n80 -->|Depends on| n41
  n80 -->|Depends on| n39
  n80 -->|Depends on| n143
  n80 -->|Depends on| n654
  n80 -->|Depends on| n92
  n80 -->|Depends on| n148
  n80 -->|Depends on| n48
  n80 -->|Depends on| n308
  n81 -->|Verifies| n164
  n81 -->|Verifies| n184
  n81 -->|In| n52
  n81 -->|Depends on| n164
  n81 -->|Depends on| n42
  n81 -->|Depends on| n41
  n81 -->|Depends on| n17
  n81 -->|Depends on| n97
  n81 -->|Depends on| n92
  n81 -->|Depends on| n649
  n81 -->|Depends on| n23
  n81 -->|Depends on| n308
  n82 -->|Verifies| n132
  n82 -->|In| n52
  n82 -->|Depends on| n132
  n82 -->|Depends on| n164
  n82 -->|Depends on| n191
  n82 -->|Depends on| n41
  n82 -->|Depends on| n51
  n82 -->|Depends on| n148
  n82 -->|Depends on| n293
  n82 -->|Depends on| n308
  n83 -->|Verifies| n126
  n83 -->|Verifies| n198
  n83 -->|Verifies| n372
  n83 -->|In| n52
  n83 -->|Depends on| n126
  n83 -->|Depends on| n42
  n83 -->|Depends on| n56
  n83 -->|Depends on| n51
  n83 -->|Depends on| n41
  n83 -->|Depends on| n39
  n83 -->|Depends on| n143
  n83 -->|Depends on| n97
  n83 -->|Depends on| n92
  n83 -->|Depends on| n148
  n83 -->|Depends on| n710
  n83 -->|Depends on| n308
  n83 -->|Depends on| n654
  n84 -->|Verifies| n135
  n84 -->|Verifies| n393
  n84 -->|Verifies| n371
  n84 -->|Verifies| n389
  n84 -->|In| n52
  n84 -->|Depends on| n135
  n84 -->|Depends on| n42
  n84 -->|Depends on| n56
  n84 -->|Depends on| n21
  n84 -->|Depends on| n41
  n84 -->|Depends on| n39
  n84 -->|Depends on| n143
  n84 -->|Depends on| n97
  n84 -->|Depends on| n92
  n84 -->|Depends on| n148
  n84 -->|Depends on| n308
  n84 -->|Depends on| n142
  n84 -->|Depends on| n711
  n85 -->|Verifies| n110
  n85 -->|Verifies| n390
  n85 -->|In| n52
  n85 -->|Depends on| n110
  n85 -->|Depends on| n42
  n85 -->|Depends on| n56
  n85 -->|Depends on| n51
  n85 -->|Depends on| n97
  n85 -->|Depends on| n148
  n85 -->|Depends on| n308
  n85 -->|Depends on| n318
  n86 -->|Verifies| n133
  n86 -->|Verifies| n393
  n86 -->|Verifies| n371
  n86 -->|In| n52
  n86 -->|Depends on| n133
  n86 -->|Depends on| n42
  n86 -->|Depends on| n56
  n86 -->|Depends on| n41
  n86 -->|Depends on| n39
  n86 -->|Depends on| n143
  n86 -->|Depends on| n97
  n86 -->|Depends on| n148
  n86 -->|Depends on| n308
  n87 -->|Verifies| n113
  n87 -->|Verifies| n153
  n87 -->|In| n52
  n87 -->|Depends on| n113
  n87 -->|Depends on| n42
  n87 -->|Depends on| n56
  n87 -->|Depends on| n97
  n87 -->|Depends on| n92
  n87 -->|Depends on| n208
  n87 -->|Depends on| n148
  n87 -->|Depends on| n308
  n88 -->|Verifies| n118
  n88 -->|Verifies| n166
  n88 -->|In| n52
  n88 -->|Depends on| n117
  n88 -->|Depends on| n118
  n88 -->|Depends on| n42
  n88 -->|Depends on| n56
  n88 -->|Depends on| n51
  n88 -->|Depends on| n184
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n143
  n88 -->|Depends on| n148
  n88 -->|Depends on| n304
  n88 -->|Depends on| n308
  n89 -->|Verifies| n341
  n89 -->|Verifies| n363
  n89 -->|Verifies| n379
  n89 -->|Verifies| n395
  n89 -->|In| n52
  n89 -->|Depends on| n117
  n89 -->|Depends on| n341
  n89 -->|Depends on| n19
  n89 -->|Depends on| n184
  n89 -->|Depends on| n41
  n89 -->|Depends on| n17
  n89 -->|Depends on| n51
  n89 -->|Depends on| n148
  n89 -->|Depends on| n304
  n89 -->|Depends on| n308
  n90 -->|Verifies| n117
  n90 -->|Verifies| n182
  n90 -->|Verifies| n583
  n90 -->|Verifies| n575
  n90 -->|Verifies| n587
  n90 -->|Verifies| n169
  n90 -->|In| n52
  n90 -->|Depends on| n117
  n90 -->|Depends on| n169
  n90 -->|Depends on| n51
  n90 -->|Depends on| n148
  n90 -->|Depends on| n304
  n90 -->|Depends on| n308
  n90 -->|Depends on| n101
  n93 -->|Verifies| n119
  n93 -->|Verifies| n124
  n93 -->|In| n52
  n93 -->|Depends on| n119
  n93 -->|Depends on| n42
  n93 -->|Depends on| n56
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n143
  n93 -->|Depends on| n97
  n93 -->|Depends on| n92
  n93 -->|Depends on| n145
  n93 -->|Depends on| n196
  n93 -->|Depends on| n148
  n93 -->|Depends on| n308
  n93 -->|Depends on| n142
  n93 -->|Depends on| n711
  n94 -->|Verifies| n122
  n94 -->|Verifies| n179
  n94 -->|In| n52
  n94 -->|Depends on| n122
  n94 -->|Depends on| n23
  n94 -->|Depends on| n21
  n94 -->|Depends on| n51
  n94 -->|Depends on| n41
  n94 -->|Depends on| n39
  n94 -->|Depends on| n143
  n94 -->|Depends on| n148
  n94 -->|Depends on| n186
  n94 -->|Depends on| n68
  n94 -->|Depends on| n304
  n94 -->|Depends on| n308
  n95 -->|Verifies| n125
  n95 -->|Verifies| n372
  n95 -->|In| n52
  n95 -->|Depends on| n125
  n95 -->|Depends on| n42
  n95 -->|Depends on| n56
  n95 -->|Depends on| n148
  n95 -->|Depends on| n308
  n95 -->|Depends on| n142
  n95 -->|Depends on| n711
  n95 -->|Depends on| n92
  n98 -->|Verifies| n129
  n98 -->|Verifies| n123
  n98 -->|Verifies| n649
  n98 -->|Verifies| n187
  n98 -->|Verifies| n651
  n98 -->|Verifies| n380
  n98 -->|Verifies| n647
  n98 -->|Verifies| n170
  n98 -->|In| n52
  n98 -->|Depends on| n129
  n98 -->|Depends on| n123
  n98 -->|Depends on| n42
  n98 -->|Depends on| n56
  n98 -->|Depends on| n51
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n22
  n98 -->|Depends on| n48
  n98 -->|Depends on| n23
  n98 -->|Depends on| n164
  n98 -->|Depends on| n17
  n98 -->|Depends on| n294
  n98 -->|Depends on| n143
  n98 -->|Depends on| n654
  n98 -->|Depends on| n97
  n98 -->|Depends on| n92
  n98 -->|Depends on| n148
  n98 -->|Depends on| n308
  n99 -->|Verifies| n131
  n99 -->|In| n52
  n99 -->|Depends on| n131
  n99 -->|Depends on| n56
  n99 -->|Depends on| n21
  n99 -->|Depends on| n41
  n99 -->|Depends on| n39
  n99 -->|Depends on| n143
  n99 -->|Depends on| n148
  n99 -->|Depends on| n308
  n100 -->|Verifies| n129
  n100 -->|Verifies| n187
  n100 -->|In| n52
  n100 -->|Depends on| n129
  n100 -->|Depends on| n42
  n100 -->|Depends on| n51
  n100 -->|Depends on| n41
  n100 -->|Depends on| n39
  n100 -->|Depends on| n22
  n100 -->|Depends on| n23
  n100 -->|Depends on| n164
  n100 -->|Depends on| n17
  n100 -->|Depends on| n187
  n100 -->|Depends on| n293
  n100 -->|Depends on| n143
  n100 -->|Depends on| n654
  n100 -->|Depends on| n97
  n100 -->|Depends on| n92
  n100 -->|Depends on| n148
  n100 -->|Depends on| n308
  n102 -->|Verifies| n106
  n102 -->|Verifies| n107
  n102 -->|Verifies| n112
  n102 -->|Verifies| n369
  n102 -->|In| n52
  n102 -->|Depends on| n106
  n102 -->|Depends on| n56
  n102 -->|Depends on| n41
  n102 -->|Depends on| n39
  n102 -->|Depends on| n148
  n102 -->|Depends on| n68
  n102 -->|Depends on| n308
  n104 -->|Verifies| n130
  n104 -->|Verifies| n134
  n104 -->|Verifies| n127
  n104 -->|Verifies| n591
  n104 -->|Verifies| n585
  n104 -->|Verifies| n593
  n104 -->|In| n52
  n104 -->|Depends on| n130
  n104 -->|Depends on| n134
  n104 -->|Depends on| n51
  n104 -->|Depends on| n148
  n104 -->|Depends on| n103
  n104 -->|Depends on| n308
  n105 -->|Serves| n444
  n105 -->|Part of| n54
  n105 -->|Depends on| n121
  n105 -->|Depends on| n170
  n105 -->|Depends on| n148
  n105 -->|Depends on| n143
  n105 -->|Depends on| n195
  n105 -->|Depends on| n193
  n105 -->|Depends on| n366
  n105 -->|Depends on| n405
  n105 -->|Depends on| n149
  n105 -->|Depends on| n711
  n105 -->|Depends on| n43
  n105 -->|Depends on| n22
  n105 -->|Depends on| n21
  n105 -->|Depends on| n23
  n105 -->|Depends on| n39
  n105 -->|Depends on| n25
  n105 -->|Depends on| n171
  n105 -->|Depends on| n50
  n105 -->|Depends on| n677
  n105 -->|Depends on| n683
  n105 -->|Depends on| n293
  n105 -->|Depends on| n292
  n105 -->|Depends on| n196
  n105 -->|Depends on| n197
  n105 -->|Depends on| n199
  n105 -->|Depends on| n198
  n105 -->|Depends on| n141
  n105 -->|Depends on| n146
  n105 -->|Depends on| n17
  n105 -->|Depends on| n184
  n105 -->|Depends on| n142
  n106 -->|Serves| n451
  n106 -->|Part of| n54
  n106 -->|Depends on| n121
  n106 -->|Depends on| n107
  n106 -->|Depends on| n14
  n106 -->|Depends on| n39
  n106 -->|Depends on| n683
  n106 -->|Depends on| n50
  n106 -->|Depends on| n293
  n107 -->|Serves| n451
  n107 -->|Depends on| n121
  n107 -->|Depends on| n180
  n107 -->|Depends on| n112
  n107 -->|Depends on| n40
  n107 -->|Depends on| n186
  n107 -->|Depends on| n184
  n107 -->|Depends on| n143
  n107 -->|Depends on| n39
  n107 -->|Depends on| n293
  n107 -->|Depends on| n136
  n108 -->|Serves| n444
  n108 -->|Part of| n54
  n108 -->|Depends on| n121
  n108 -->|Depends on| n109
  n108 -->|Depends on| n23
  n108 -->|Depends on| n39
  n108 -->|Depends on| n50
  n108 -->|Depends on| n293
  n109 -->|Serves| n444
  n109 -->|Depends on| n121
  n109 -->|Depends on| n162
  n109 -->|Depends on| n683
  n109 -->|Depends on| n157
  n109 -->|Depends on| n293
  n110 -->|Serves| n451
  n110 -->|Part of| n54
  n110 -->|Depends on| n121
  n110 -->|Depends on| n34
  n110 -->|Depends on| n318
  n110 -->|Depends on| n143
  n110 -->|Depends on| n21
  n110 -->|Depends on| n23
  n110 -->|Depends on| n39
  n110 -->|Depends on| n324
  n110 -->|Depends on| n141
  n110 -->|Depends on| n50
  n110 -->|Depends on| n677
  n110 -->|Depends on| n683
  n110 -->|Depends on| n293
  n111 -->|Serves| n444
  n111 -->|Part of| n54
  n111 -->|Depends on| n143
  n111 -->|Depends on| n121
  n111 -->|Depends on| n180
  n111 -->|Depends on| n573
  n111 -->|Depends on| n591
  n111 -->|Depends on| n23
  n111 -->|Depends on| n39
  n111 -->|Depends on| n50
  n111 -->|Depends on| n293
  n112 -->|Serves| n444
  n112 -->|Depends on| n293
  n112 -->|Depends on| n304
  n113 -->|Serves| n444
  n113 -->|Part of| n54
  n113 -->|Depends on| n121
  n113 -->|Depends on| n162
  n113 -->|Depends on| n109
  n113 -->|Depends on| n16
  n113 -->|Depends on| n153
  n113 -->|Depends on| n342
  n113 -->|Depends on| n343
  n113 -->|Depends on| n222
  n113 -->|Depends on| n152
  n113 -->|Depends on| n21
  n113 -->|Depends on| n23
  n113 -->|Depends on| n39
  n113 -->|Depends on| n50
  n113 -->|Depends on| n293
  n114 -->|Serves| n444
  n114 -->|Part of| n54
  n114 -->|Depends on| n121
  n114 -->|Depends on| n167
  n114 -->|Depends on| n107
  n114 -->|Depends on| n14
  n114 -->|Depends on| n39
  n115 -->|Serves| n444
  n115 -->|Part of| n54
  n115 -->|Depends on| n121
  n115 -->|Depends on| n116
  n115 -->|Depends on| n21
  n115 -->|Depends on| n23
  n115 -->|Depends on| n22
  n115 -->|Depends on| n43
  n115 -->|Depends on| n28
  n115 -->|Depends on| n26
  n115 -->|Depends on| n53
  n115 -->|Depends on| n34
  n115 -->|Depends on| n33
  n115 -->|Depends on| n143
  n115 -->|Depends on| n17
  n115 -->|Depends on| n39
  n115 -->|Depends on| n50
  n115 -->|Depends on| n293
  n117 -->|Serves| n444
  n117 -->|Part of| n54
  n117 -->|Depends on| n121
  n117 -->|Depends on| n182
  n117 -->|Depends on| n573
  n117 -->|Depends on| n591
  n117 -->|Depends on| n583
  n117 -->|Depends on| n50
  n118 -->|Serves| n444
  n118 -->|Part of| n54
  n118 -->|Depends on| n143
  n118 -->|Depends on| n121
  n118 -->|Depends on| n166
  n118 -->|Depends on| n341
  n118 -->|Depends on| n184
  n118 -->|Depends on| n23
  n118 -->|Depends on| n39
  n118 -->|Depends on| n50
  n118 -->|Depends on| n293
  n119 -->|Serves| n451
  n119 -->|Part of| n54
  n119 -->|Depends on| n121
  n119 -->|Depends on| n143
  n119 -->|Depends on| n184
  n119 -->|Depends on| n40
  n119 -->|Depends on| n145
  n119 -->|Depends on| n196
  n119 -->|Depends on| n21
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n141
  n119 -->|Depends on| n711
  n119 -->|Depends on| n713
  n119 -->|Depends on| n699
  n119 -->|Depends on| n693
  n119 -->|Depends on| n694
  n119 -->|Depends on| n691
  n119 -->|Depends on| n690
  n119 -->|Depends on| n702
  n119 -->|Depends on| n708
  n119 -->|Depends on| n710
  n119 -->|Depends on| n700
  n119 -->|Depends on| n50
  n119 -->|Depends on| n293
  n119 -->|Depends on| n41
  n119 -->|Depends on| n148
  n119 -->|Depends on| n124
  n119 -->|Depends on| n142
  n119 -->|Depends on| n698
  n119 -->|Depends on| n696
  n120 -->|Serves| n444
  n120 -->|Part of| n54
  n120 -->|Depends on| n143
  n120 -->|Depends on| n683
  n120 -->|Depends on| n121
  n120 -->|Depends on| n180
  n120 -->|Depends on| n112
  n120 -->|Depends on| n21
  n120 -->|Depends on| n39
  n120 -->|Depends on| n50
  n120 -->|Depends on| n293
  n121 -->|Serves| n444
  n121 -->|Depends on| n148
  n121 -->|Depends on| n164
  n121 -->|Depends on| n163
  n121 -->|Depends on| n177
  n121 -->|Depends on| n191
  n121 -->|Depends on| n179
  n121 -->|Depends on| n569
  n121 -->|Depends on| n50
  n121 -->|Depends on| n41
  n121 -->|Depends on| n17
  n121 -->|Depends on| n449
  n121 -->|Depends on| n443
  n121 -->|Depends on| n683
  n121 -->|Depends on| n681
  n121 -->|Depends on| n679
  n121 -->|Depends on| n293
  n121 -->|Depends on| n143
  n121 -->|Depends on| n186
  n122 -->|Serves| n451
  n122 -->|Part of| n54
  n122 -->|Depends on| n121
  n122 -->|Depends on| n179
  n122 -->|Depends on| n23
  n122 -->|Depends on| n50
  n122 -->|Depends on| n683
  n122 -->|Depends on| n681
  n122 -->|Depends on| n679
  n122 -->|Depends on| n293
  n123 -->|Serves| n652
  n123 -->|Part of| n54
  n123 -->|Depends on| n148
  n123 -->|Depends on| n121
  n123 -->|Depends on| n649
  n123 -->|Depends on| n23
  n123 -->|Depends on| n39
  n123 -->|Depends on| n50
  n123 -->|Depends on| n293
  n124 -->|Serves| n451
  n124 -->|Depends on| n713
  n124 -->|Depends on| n699
  n124 -->|Depends on| n693
  n124 -->|Depends on| n694
  n124 -->|Depends on| n691
  n124 -->|Depends on| n690
  n124 -->|Depends on| n702
  n124 -->|Depends on| n708
  n124 -->|Depends on| n710
  n124 -->|Depends on| n696
  n124 -->|Depends on| n700
  n125 -->|Serves| n451
  n125 -->|Part of| n54
  n125 -->|Depends on| n121
  n125 -->|Depends on| n143
  n125 -->|Depends on| n184
  n125 -->|Depends on| n142
  n125 -->|Depends on| n21
  n125 -->|Depends on| n22
  n125 -->|Depends on| n39
  n125 -->|Depends on| n50
  n125 -->|Depends on| n293
  n126 -->|Serves| n451
  n126 -->|Part of| n54
  n126 -->|Depends on| n121
  n126 -->|Depends on| n143
  n126 -->|Depends on| n184
  n126 -->|Depends on| n180
  n126 -->|Depends on| n573
  n126 -->|Depends on| n251
  n126 -->|Depends on| n250
  n126 -->|Depends on| n199
  n126 -->|Depends on| n198
  n126 -->|Depends on| n21
  n126 -->|Depends on| n23
  n126 -->|Depends on| n22
  n126 -->|Depends on| n39
  n126 -->|Depends on| n25
  n126 -->|Depends on| n171
  n126 -->|Depends on| n711
  n126 -->|Depends on| n17
  n126 -->|Depends on| n50
  n126 -->|Depends on| n293
  n126 -->|Depends on| n292
  n126 -->|Depends on| n225
  n126 -->|Depends on| n710
  n126 -->|Depends on| n129
  n126 -->|Depends on| n148
  n127 -->|Serves| n444
  n127 -->|Depends on| n148
  n127 -->|Depends on| n141
  n127 -->|Depends on| n121
  n127 -->|Depends on| n191
  n127 -->|Depends on| n573
  n127 -->|Depends on| n591
  n127 -->|Depends on| n50
  n127 -->|Depends on| n293
  n128 -->|Serves| n444
  n128 -->|Part of| n54
  n128 -->|Depends on| n108
  n128 -->|Depends on| n41
  n129 -->|Serves| n652
  n129 -->|Part of| n54
  n129 -->|Depends on| n148
  n129 -->|Depends on| n121
  n129 -->|Depends on| n113
  n129 -->|Depends on| n162
  n129 -->|Depends on| n109
  n129 -->|Depends on| n649
  n129 -->|Depends on| n651
  n129 -->|Depends on| n652
  n129 -->|Depends on| n16
  n129 -->|Depends on| n153
  n129 -->|Depends on| n648
  n129 -->|Depends on| n41
  n129 -->|Depends on| n21
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n50
  n129 -->|Depends on| n170
  n129 -->|Depends on| n293
  n130 -->|Serves| n444
  n130 -->|Part of| n54
  n130 -->|Depends on| n121
  n130 -->|Depends on| n127
  n131 -->|Serves| n451
  n131 -->|Part of| n54
  n131 -->|Depends on| n143
  n131 -->|Depends on| n121
  n131 -->|Depends on| n180
  n131 -->|Depends on| n573
  n131 -->|Depends on| n23
  n131 -->|Depends on| n39
  n131 -->|Depends on| n50
  n131 -->|Depends on| n293
  n132 -->|Serves| n444
  n132 -->|Part of| n54
  n132 -->|Depends on| n121
  n132 -->|Depends on| n164
  n132 -->|Depends on| n191
  n132 -->|Depends on| n177
  n132 -->|Depends on| n50
  n132 -->|Depends on| n683
  n132 -->|Depends on| n681
  n132 -->|Depends on| n679
  n132 -->|Depends on| n293
  n133 -->|Serves| n451
  n133 -->|Part of| n54
  n133 -->|Depends on| n121
  n133 -->|Depends on| n21
  n133 -->|Depends on| n23
  n133 -->|Depends on| n39
  n133 -->|Depends on| n324
  n133 -->|Depends on| n710
  n133 -->|Depends on| n41
  n133 -->|Depends on| n148
  n133 -->|Depends on| n50
  n133 -->|Depends on| n293
  n134 -->|Serves| n444
  n134 -->|Part of| n54
  n134 -->|Depends on| n148
  n134 -->|Depends on| n121
  n134 -->|Depends on| n127
  n134 -->|Depends on| n164
  n134 -->|Depends on| n191
  n134 -->|Depends on| n50
  n134 -->|Depends on| n293
  n135 -->|Serves| n451
  n135 -->|Part of| n54
  n135 -->|Depends on| n121
  n135 -->|Depends on| n143
  n135 -->|Depends on| n184
  n135 -->|Depends on| n21
  n135 -->|Depends on| n23
  n135 -->|Depends on| n142
  n135 -->|Depends on| n40
  n135 -->|Depends on| n196
  n135 -->|Depends on| n39
  n135 -->|Depends on| n33
  n135 -->|Depends on| n317
  n135 -->|Depends on| n141
  n135 -->|Depends on| n711
  n135 -->|Depends on| n50
  n135 -->|Depends on| n293
  n135 -->|Depends on| n41
  n135 -->|Depends on| n148
  n152 -->|Read in| n205
  n152 -->|Depends on| n204
  n152 -->|Depends on| n207
  n153 -->|Serves| n444
  n153 -->|Depends on| n31
  n153 -->|Depends on| n151
  n157 -->|Serves| n451
  n157 -->|Depends on| n301
  n158 -->|Serves| n451
  n158 -->|Applied by| n157
  n158 -->|Applied by| n301
  n160 -->|Serves| n451
  n160 -->|Depends on| n156
  n161 -->|Serves| n451
  n162 -->|Serves| n444
  n162 -->|Depends on| n148
  n162 -->|Depends on| n143
  n162 -->|Depends on| n39
  n162 -->|Depends on| n192
  n162 -->|Depends on| n40
  n162 -->|Depends on| n225
  n162 -->|Depends on| n294
  n162 -->|Depends on| n142
  n162 -->|Depends on| n711
  n163 -->|Serves| n444
  n163 -->|Depends on| n137
  n163 -->|Depends on| n183
  n163 -->|Depends on| n186
  n163 -->|Depends on| n40
  n163 -->|Depends on| n157
  n163 -->|Depends on| n139
  n163 -->|Depends on| n143
  n163 -->|Depends on| n309
  n163 -->|Depends on| n187
  n163 -->|Depends on| n160
  n164 -->|Serves| n444
  n164 -->|Depends on| n143
  n164 -->|Depends on| n449
  n164 -->|Depends on| n165
  n164 -->|Depends on| n186
  n164 -->|Depends on| n183
  n164 -->|Depends on| n31
  n164 -->|Depends on| n21
  n164 -->|Depends on| n39
  n164 -->|Depends on| n188
  n164 -->|Depends on| n184
  n164 -->|Depends on| n174
  n164 -->|Depends on| n192
  n164 -->|Depends on| n225
  n164 -->|Depends on| n40
  n164 -->|Depends on| n294
  n164 -->|Depends on| n172
  n164 -->|Depends on| n48
  n164 -->|Depends on| n170
  n164 -->|Depends on| n28
  n164 -->|Depends on| n142
  n164 -->|Depends on| n175
  n165 -->|Serves| n444
  n166 -->|Serves| n444
  n166 -->|Depends on| n148
  n166 -->|Depends on| n17
  n166 -->|Depends on| n41
  n166 -->|Depends on| n304
  n167 -->|Serves| n444
  n167 -->|Depends on| n168
  n167 -->|Depends on| n148
  n167 -->|Depends on| n143
  n167 -->|Depends on| n50
  n167 -->|Depends on| n676
  n167 -->|Depends on| n17
  n167 -->|Depends on| n53
  n167 -->|Depends on| n442
  n167 -->|Depends on| n26
  n167 -->|Depends on| n21
  n167 -->|Depends on| n39
  n167 -->|Depends on| n184
  n167 -->|Depends on| n166
  n167 -->|Depends on| n169
  n167 -->|Depends on| n341
  n167 -->|Depends on| n583
  n167 -->|Depends on| n296
  n167 -->|Depends on| n301
  n167 -->|Depends on| n297
  n169 -->|Serves| n444
  n169 -->|Depends on| n157
  n169 -->|Depends on| n304
  n170 -->|Serves| n444
  n170 -->|Depends on| n143
  n170 -->|Depends on| n195
  n170 -->|Depends on| n711
  n170 -->|Depends on| n184
  n170 -->|Depends on| n21
  n170 -->|Depends on| n39
  n170 -->|Depends on| n25
  n170 -->|Depends on| n171
  n170 -->|Depends on| n141
  n172 -->|Serves| n444
  n173 -->|Serves| n444
  n174 -->|Serves| n444
  n174 -->|Depends on| n40
  n174 -->|Depends on| n146
  n174 -->|Depends on| n294
  n174 -->|Depends on| n303
  n174 -->|Depends on| n296
  n174 -->|Depends on| n157
  n174 -->|Depends on| n183
  n174 -->|Depends on| n186
  n174 -->|Depends on| n154
  n174 -->|Depends on| n173
  n174 -->|Depends on| n452
  n174 -->|Depends on| n143
  n174 -->|Depends on| n711
  n174 -->|Depends on| n324
  n174 -->|Depends on| n160
  n174 -->|Depends on| n161
  n174 -->|Depends on| n172
  n175 -->|Serves| n444
  n175 -->|Depends on| n449
  n175 -->|Depends on| n294
  n177 -->|Serves| n444
  n177 -->|Depends on| n27
  n177 -->|Depends on| n225
  n177 -->|Depends on| n144
  n177 -->|Depends on| n143
  n177 -->|Depends on| n446
  n177 -->|Depends on| n441
  n177 -->|Depends on| n173
  n177 -->|Depends on| n447
  n177 -->|Depends on| n448
  n177 -->|Depends on| n186
  n177 -->|Depends on| n21
  n177 -->|Depends on| n39
  n177 -->|Depends on| n184
  n177 -->|Depends on| n174
  n177 -->|Depends on| n40
  n177 -->|Depends on| n142
  n177 -->|Depends on| n302
  n177 -->|Depends on| n233
  n177 -->|Depends on| n227
  n177 -->|Depends on| n229
  n177 -->|Depends on| n237
  n177 -->|Depends on| n246
  n177 -->|Depends on| n243
  n177 -->|Depends on| n241
  n177 -->|Depends on| n231
  n178 -->|Serves| n245
  n178 -->|Applied by| n177
  n178 -->|Applied by| n191
  n179 -->|Serves| n451
  n179 -->|Depends on| n143
  n179 -->|Depends on| n141
  n179 -->|Depends on| n186
  n179 -->|Depends on| n259
  n179 -->|Depends on| n21
  n179 -->|Depends on| n39
  n179 -->|Depends on| n40
  n179 -->|Depends on| n304
  n180 -->|Serves| n451
  n180 -->|Depends on| n141
  n180 -->|Depends on| n183
  n180 -->|Depends on| n40
  n180 -->|Depends on| n304
  n182 -->|Serves| n444
  n182 -->|Depends on| n143
  n182 -->|Depends on| n440
  n182 -->|Depends on| n181
  n182 -->|Depends on| n17
  n182 -->|Depends on| n180
  n182 -->|Depends on| n191
  n182 -->|Depends on| n301
  n183 -->|Serves| n444
  n183 -->|Depends on| n657
  n184 -->|Serves| n444
  n184 -->|Depends on| n143
  n184 -->|Depends on| n21
  n184 -->|Depends on| n39
  n184 -->|Depends on| n196
  n184 -->|Depends on| n40
  n184 -->|Depends on| n142
  n184 -->|Depends on| n711
  n185 -->|Serves| n444
  n185 -->|Implements| n28
  n185 -->|Depends on| n21
  n185 -->|Depends on| n39
  n185 -->|Depends on| n25
  n185 -->|Depends on| n176
  n185 -->|Depends on| n46
  n186 -->|Serves| n444
  n186 -->|Depends on| n146
  n186 -->|Depends on| n248
  n187 -->|Serves| n444
  n187 -->|Depends on| n293
  n188 -->|Serves| n444
  n188 -->|Depends on| n713
  n188 -->|Depends on| n186
  n188 -->|Depends on| n190
  n188 -->|Depends on| n55
  n188 -->|Depends on| n27
  n188 -->|Depends on| n46
  n188 -->|Depends on| n25
  n188 -->|Depends on| n39
  n188 -->|Depends on| n183
  n188 -->|Depends on| n138
  n188 -->|Depends on| n294
  n188 -->|Depends on| n712
  n188 -->|Depends on| n144
  n188 -->|Depends on| n40
  n189 -->|Serves| n451
  n189 -->|Applied by| n174
  n189 -->|Applied by| n191
  n191 -->|Serves| n444
  n191 -->|Depends on| n225
  n191 -->|Depends on| n137
  n191 -->|Depends on| n150
  n191 -->|Depends on| n139
  n191 -->|Depends on| n143
  n191 -->|Depends on| n31
  n191 -->|Depends on| n21
  n191 -->|Depends on| n39
  n191 -->|Depends on| n40
  n191 -->|Depends on| n184
  n191 -->|Depends on| n304
  n191 -->|Depends on| n309
  n191 -->|Depends on| n235
  n191 -->|Depends on| n227
  n191 -->|Depends on| n243
  n191 -->|Depends on| n239
  n192 -->|Serves| n444
  n192 -->|Depends on| n147
  n192 -->|Depends on| n146
  n192 -->|Depends on| n143
  n192 -->|Depends on| n39
  n192 -->|Depends on| n40
  n192 -->|Depends on| n225
  n192 -->|Depends on| n294
  n193 -->|Refines| n444
  n194 -->|Accepts| n193
  n198 -->|Serves| n444
  n198 -->|Depends on| n199
  n198 -->|Depends on| n713
  n198 -->|Depends on| n146
  n198 -->|Depends on| n693
  n198 -->|Depends on| n699
  n198 -->|Depends on| n697
  n198 -->|Depends on| n700
  n198 -->|Depends on| n694
  n198 -->|Depends on| n691
  n198 -->|Depends on| n690
  n198 -->|Depends on| n701
  n198 -->|Depends on| n708
  n198 -->|Depends on| n710
  n198 -->|Depends on| n696
  n200 -->|Read in| n205
  n201 -->|Read in| n205
  n202 -->|Read in| n205
  n203 -->|Read in| n205
  n204 -->|Read in| n205
  n205 -->|Queries written in| n656
  n205 -->|Read by| n665
  n205 -->|Uses| n312
  n206 -->|Read in| n205
  n207 -->|Read in| n205
  n207 -->|Depends on| n203
  n208 -->|Read in| n215
  n209 -->|Read in| n215
  n210 -->|Read in| n215
  n211 -->|Read in| n215
  n211 -->|Depends on| n216
  n211 -->|Depends on| n213
  n212 -->|Read in| n215
  n212 -->|Depends on| n216
  n212 -->|Depends on| n213
  n213 -->|Read in| n215
  n214 -->|Read in| n215
  n214 -->|Depends on| n212
  n215 -->|Queries written in| n656
  n215 -->|Read by| n665
  n215 -->|Uses| n315
  n216 -->|Read in| n215
  n216 -->|Depends on| n210
  n217 -->|Read in| n711
  n218 -->|Read in| n205
  n219 -->|Read in| n205
  n220 -->|Read in| n205
  n222 -->|Read in| n215
  n222 -->|Depends on| n212
  n223 -->|Read in| n205
  n224 -->|Read in| n215
  n224 -->|Depends on| n210
  n225 -->|Serves| n444
  n225 -->|Depends on| n665
  n225 -->|Depends on| n658
  n225 -->|Depends on| n711
  n225 -->|Depends on| n205
  n225 -->|Depends on| n714
  n225 -->|Depends on| n672
  n225 -->|Depends on| n673
  n225 -->|Depends on| n674
  n225 -->|Depends on| n31
  n225 -->|Depends on| n21
  n225 -->|Depends on| n39
  n225 -->|Depends on| n298
  n226 -->|Serves| n444
  n226 -->|Applied by| n225
  n226 -->|Applied by| n341
  n227 -->|Refines| n245
  n228 -->|Accepts| n227
  n229 -->|Refines| n245
  n230 -->|Accepts| n229
  n231 -->|Refines| n245
  n232 -->|Accepts| n231
  n233 -->|Refines| n245
  n234 -->|Accepts| n233
  n235 -->|Refines| n245
  n236 -->|Accepts| n235
  n237 -->|Refines| n245
  n238 -->|Accepts| n237
  n239 -->|Refines| n245
  n240 -->|Accepts| n239
  n241 -->|Refines| n243
  n241 -->|Depends on| n243
  n242 -->|Accepts| n241
  n243 -->|Refines| n245
  n244 -->|Accepts| n243
  n246 -->|Refines| n245
  n247 -->|Accepts| n246
  n248 -->|Refines| n453
  n249 -->|Accepts| n248
  n251 -->|Refines| n453
  n252 -->|Accepts| n251
  n253 -->|Read in| n215
  n253 -->|Depends on| n212
  n254 -->|Defined by| n260
  n254 -->|Depends on| n260
  n255 -->|Defined by| n260
  n255 -->|Depends on| n260
  n256 -->|Defined by| n260
  n256 -->|Depends on| n260
  n257 -->|Defined by| n260
  n257 -->|Depends on| n260
  n257 -->|Depends on| n255
  n258 -->|Defined by| n260
  n258 -->|Depends on| n260
  n258 -->|Depends on| n254
  n259 -->|Defined by| n260
  n259 -->|Depends on| n260
  n259 -->|Depends on| n254
  n261 -->|Read in| n215
  n261 -->|Depends on| n216
  n261 -->|Depends on| n213
  n261 -->|Depends on| n212
  n261 -->|Depends on| n255
  n262 -->|Defined by| n260
  n262 -->|Depends on| n260
  n264 -->|Defined by| n260
  n264 -->|Depends on| n260
  n265 -->|Defined by| n260
  n265 -->|Depends on| n260
  n266 -->|Defined by| n260
  n266 -->|Depends on| n260
  n267 -->|Depends on| n143
  n268 -->|Read in| n215
  n268 -->|Depends on| n212
  n269 -->|Defined by| n260
  n269 -->|Depends on| n260
  n270 -->|Defined by| n263
  n270 -->|Depends on| n263
  n270 -->|Depends on| n273
  n270 -->|Depends on| n272
  n271 -->|Defined by| n263
  n271 -->|Depends on| n263
  n271 -->|Depends on| n260
  n272 -->|Defined by| n263
  n272 -->|Depends on| n263
  n273 -->|Defined by| n263
  n273 -->|Depends on| n263
  n273 -->|Depends on| n260
  n278 -->|Defined by| n284
  n278 -->|Depends on| n284
  n278 -->|Depends on| n290
  n279 -->|Defined by| n284
  n279 -->|Depends on| n284
  n280 -->|Defined by| n284
  n280 -->|Depends on| n284
  n281 -->|Defined by| n284
  n281 -->|Depends on| n284
  n282 -->|Defined by| n284
  n282 -->|Depends on| n284
  n282 -->|Depends on| n281
  n283 -->|Defined by| n284
  n283 -->|Depends on| n284
  n283 -->|Depends on| n281
  n285 -->|Defined by| n284
  n285 -->|Depends on| n284
  n286 -->|Defined by| n284
  n286 -->|Depends on| n284
  n286 -->|Depends on| n285
  n287 -->|Defined by| n284
  n287 -->|Depends on| n284
  n287 -->|Depends on| n285
  n288 -->|Defined by| n284
  n288 -->|Depends on| n284
  n288 -->|Depends on| n283
  n289 -->|Defined by| n284
  n289 -->|Depends on| n284
  n289 -->|Depends on| n290
  n290 -->|Defined by| n284
  n290 -->|Depends on| n284
  n291 -->|Defined by| n284
  n291 -->|Depends on| n284
  n291 -->|Depends on| n285
  n292 -->|Written in| n301
  n292 -->|Depends on| n301
  n293 -->|Written in| n301
  n293 -->|Depends on| n301
  n294 -->|Written in| n301
  n294 -->|Depends on| n301
  n294 -->|Depends on| n303
  n295 -->|Serves| n451
  n295 -->|Applied by| n294
  n295 -->|Applied by| n309
  n295 -->|Applied by| n297
  n295 -->|Applied by| n293
  n295 -->|Applied by| n308
  n295 -->|Applied by| n292
  n295 -->|Applied by| n305
  n295 -->|Applied by| n303
  n296 -->|Serves| n451
  n296 -->|Depends on| n301
  n297 -->|Written in| n301
  n297 -->|Depends on| n301
  n297 -->|Depends on| n303
  n298 -->|Written in| n301
  n299 -->|Written in| n301
  n300 -->|Written in| n301
  n302 -->|Written in| n301
  n303 -->|Serves| n451
  n303 -->|Depends on| n301
  n304 -->|Written in| n301
  n305 -->|Written in| n301
  n305 -->|Depends on| n301
  n306 -->|Written in| n301
  n307 -->|Written in| n301
  n308 -->|Written in| n301
  n308 -->|Depends on| n301
  n309 -->|Written in| n301
  n309 -->|Depends on| n301
  n310 -->|Written in| n301
  n311 -->|Serves| n451
  n317 -->|Serves| n451
  n319 -->|Serves| n451
  n320 -->|Serves| n451
  n324 -->|Serves| n451
  n326 -->|Defined by| n355
  n326 -->|Read in| n215
  n326 -->|Depends on| n355
  n326 -->|Depends on| n344
  n326 -->|Depends on| n212
  n327 -->|Defined by| n355
  n327 -->|Read in| n215
  n327 -->|Depends on| n355
  n327 -->|Depends on| n148
  n327 -->|Depends on| n334
  n327 -->|Depends on| n211
  n327 -->|Depends on| n212
  n328 -->|Defined by| n355
  n328 -->|Read in| n215
  n328 -->|Depends on| n355
  n328 -->|Depends on| n344
  n328 -->|Depends on| n212
  n329 -->|Defined by| n355
  n329 -->|Read in| n215
  n329 -->|Depends on| n355
  n329 -->|Depends on| n344
  n329 -->|Depends on| n211
  n329 -->|Depends on| n212
  n330 -->|Defined by| n355
  n330 -->|Read in| n215
  n330 -->|Depends on| n355
  n330 -->|Depends on| n344
  n330 -->|Depends on| n211
  n330 -->|Depends on| n212
  n330 -->|Depends on| n348
  n331 -->|Defined by| n355
  n331 -->|Read in| n215
  n331 -->|Depends on| n355
  n331 -->|Depends on| n344
  n331 -->|Depends on| n211
  n331 -->|Depends on| n212
  n332 -->|Defined by| n355
  n332 -->|Read in| n215
  n332 -->|Depends on| n355
  n332 -->|Depends on| n277
  n332 -->|Depends on| n1
  n332 -->|Depends on| n211
  n332 -->|Depends on| n212
  n332 -->|Depends on| n224
  n332 -->|Depends on| n221
  n333 -->|Read in| n215
  n333 -->|Depends on| n216
  n334 -->|Defined by| n355
  n334 -->|Read in| n215
  n334 -->|Depends on| n355
  n334 -->|Depends on| n7
  n334 -->|Depends on| n211
  n334 -->|Depends on| n212
  n334 -->|Depends on| n224
  n334 -->|Depends on| n206
  n336 -->|Defined by| n355
  n336 -->|Read in| n215
  n336 -->|Depends on| n355
  n336 -->|Depends on| n344
  n336 -->|Depends on| n211
  n336 -->|Depends on| n212
  n336 -->|Depends on| n326
  n336 -->|Depends on| n330
  n337 -->|Defined by| n355
  n337 -->|Read in| n205
  n337 -->|Depends on| n355
  n337 -->|Depends on| n219
  n337 -->|Depends on| n218
  n338 -->|Uses the variables of| n9
  n338 -->|Uses the variables of| n12
  n338 -->|Uses the variables of| n6
  n338 -->|Styles| n341
  n339 -->|Defined by| n355
  n339 -->|Read in| n215
  n339 -->|Depends on| n355
  n339 -->|Depends on| n344
  n339 -->|Depends on| n212
  n341 -->|Serves| n444
  n341 -->|Depends on| n342
  n341 -->|Depends on| n351
  n341 -->|Depends on| n7
  n341 -->|Depends on| n13
  n341 -->|Depends on| n4
  n341 -->|Depends on| n9
  n341 -->|Depends on| n8
  n341 -->|Depends on| n12
  n341 -->|Depends on| n5
  n341 -->|Depends on| n10
  n341 -->|Depends on| n3
  n341 -->|Depends on| n6
  n341 -->|Depends on| n45
  n341 -->|Depends on| n21
  n341 -->|Depends on| n16
  n341 -->|Depends on| n19
  n341 -->|Depends on| n349
  n341 -->|Depends on| n354
  n341 -->|Depends on| n352
  n341 -->|Depends on| n337
  n341 -->|Depends on| n333
  n341 -->|Depends on| n345
  n341 -->|Depends on| n343
  n341 -->|Depends on| n204
  n341 -->|Depends on| n203
  n341 -->|Depends on| n304
  n341 -->|Depends on| n301
  n341 -->|Depends on| n665
  n341 -->|Depends on| n215
  n341 -->|Depends on| n205
  n343 -->|Defined by| n355
  n343 -->|Read in| n215
  n343 -->|Depends on| n355
  n343 -->|Depends on| n208
  n343 -->|Depends on| n216
  n343 -->|Depends on| n213
  n343 -->|Depends on| n212
  n345 -->|Defined by| n355
  n345 -->|Read in| n215
  n345 -->|Depends on| n355
  n345 -->|Depends on| n222
  n345 -->|Depends on| n217
  n345 -->|Depends on| n698
  n345 -->|Depends on| n687
  n346 -->|Uses the variables of| n7
  n346 -->|Uses the variables of| n13
  n346 -->|Uses the variables of| n9
  n346 -->|Uses the variables of| n8
  n346 -->|Uses the variables of| n12
  n346 -->|Uses the variables of| n5
  n346 -->|Uses the variables of| n10
  n346 -->|Uses the variables of| n3
  n346 -->|Uses the variables of| n6
  n346 -->|Styles| n341
  n348 -->|Defined by| n355
  n348 -->|Read in| n215
  n348 -->|Depends on| n355
  n348 -->|Depends on| n347
  n348 -->|Depends on| n344
  n348 -->|Depends on| n211
  n348 -->|Depends on| n212
  n349 -->|Defined by| n355
  n349 -->|Read in| n215
  n349 -->|Depends on| n355
  n349 -->|Depends on| n211
  n349 -->|Depends on| n350
  n349 -->|Depends on| n336
  n349 -->|Depends on| n332
  n350 -->|Defined by| n355
  n350 -->|Read in| n215
  n350 -->|Depends on| n355
  n350 -->|Depends on| n211
  n350 -->|Depends on| n327
  n350 -->|Depends on| n328
  n350 -->|Depends on| n329
  n350 -->|Depends on| n339
  n350 -->|Depends on| n331
  n352 -->|Defined by| n355
  n352 -->|Read in| n205
  n352 -->|Depends on| n355
  n352 -->|Depends on| n204
  n352 -->|Depends on| n203
  n352 -->|Depends on| n206
  n352 -->|Depends on| n202
  n353 -->|Serves| n451
  n353 -->|Applied by| n346
  n353 -->|Applied by| n338
  n353 -->|Applied by| n354
  n353 -->|Applied by| n337
  n353 -->|Applied by| n341
  n354 -->|Defined by| n355
  n354 -->|Read in| n205
  n354 -->|Depends on| n355
  n354 -->|Depends on| n204
  n354 -->|Depends on| n219
  n354 -->|Depends on| n218
  n354 -->|Depends on| n201
  n354 -->|Depends on| n220
  n354 -->|Depends on| n207
  n354 -->|Depends on| n203
  n356 -->|Chooses| n369
  n356 -->|In| n30
  n356 -->|In| n52
  n356 -->|Serves| n445
  n357 -->|Chooses| n396
  n357 -->|In| n30
  n357 -->|In| n52
  n357 -->|Serves| n445
  n358 -->|Implements| n21
  n359 -->|Implements| n22
  n360 -->|Implements| n23
  n362 -->|Chooses| n407
  n362 -->|Chooses| n395
  n362 -->|In| n30
  n362 -->|In| n52
  n362 -->|Serves| n445
  n363 -->|Implements| n16
  n363 -->|Uses| n313
  n364 -->|Chooses| n363
  n364 -->|In| n30
  n364 -->|In| n52
  n364 -->|Serves| n445
  n365 -->|Implements| n41
  n365 -->|Implements| n43
  n365 -->|Implements| n42
  n365 -->|Depends on| n366
  n365 -->|Depends on| n39
  n365 -->|Depends on| n148
  n365 -->|Depends on| n306
  n367 -->|Chooses| n374
  n367 -->|Chooses| n389
  n367 -->|In| n52
  n367 -->|Serves| n445
  n368 -->|Chooses| n377
  n368 -->|Chooses| n403
  n368 -->|Chooses| n390
  n368 -->|Chooses| n365
  n368 -->|Chooses| n375
  n368 -->|In| n52
  n368 -->|Serves| n445
  n369 -->|Implements| n14
  n369 -->|Depends on| n21
  n369 -->|Depends on| n23
  n369 -->|Depends on| n713
  n369 -->|Depends on| n693
  n369 -->|Depends on| n694
  n369 -->|Depends on| n691
  n369 -->|Depends on| n690
  n369 -->|Depends on| n702
  n369 -->|Depends on| n708
  n369 -->|Depends on| n710
  n369 -->|Depends on| n696
  n369 -->|Depends on| n700
  n371 -->|Depends on| n22
  n371 -->|Depends on| n23
  n371 -->|Depends on| n21
  n371 -->|Depends on| n39
  n372 -->|Depends on| n22
  n372 -->|Depends on| n23
  n372 -->|Depends on| n21
  n372 -->|Depends on| n39
  n372 -->|Depends on| n373
  n372 -->|Depends on| n143
  n374 -->|Implements| n21
  n374 -->|Implements| n23
  n374 -->|Implements| n22
  n374 -->|Implements| n56
  n374 -->|Depends on| n39
  n374 -->|Depends on| n376
  n374 -->|Depends on| n306
  n375 -->|Implements| n26
  n375 -->|Implements| n47
  n375 -->|Depends on| n306
  n377 -->|Implements| n50
  n377 -->|Implements| n51
  n377 -->|Depends on| n370
  n377 -->|Depends on| n306
  n378 -->|Implements| n18
  n378 -->|Depends on| n50
  n378 -->|Depends on| n148
  n378 -->|Depends on| n306
  n379 -->|Implements| n19
  n379 -->|Depends on| n340
  n380 -->|Implements| n25
  n381 -->|Implements| n26
  n382 -->|Chooses| n358
  n382 -->|Chooses| n360
  n382 -->|Chooses| n359
  n382 -->|Chooses| n385
  n382 -->|Chooses| n386
  n382 -->|Chooses| n387
  n382 -->|Chooses| n404
  n382 -->|Chooses| n392
  n382 -->|Chooses| n391
  n382 -->|Chooses| n381
  n382 -->|In| n30
  n382 -->|Serves| n445
  n383 -->|Implements| n39
  n384 -->|Chooses| n383
  n384 -->|Chooses| n380
  n384 -->|Chooses| n379
  n384 -->|Chooses| n388
  n384 -->|Chooses| n378
  n384 -->|Chooses| n397
  n384 -->|In| n30
  n384 -->|In| n52
  n384 -->|Serves| n445
  n385 -->|Implements| n41
  n385 -->|Depends on| n411
  n386 -->|Implements| n43
  n386 -->|Depends on| n411
  n387 -->|Implements| n50
  n387 -->|Depends on| n306
  n388 -->|Implements| n53
  n389 -->|Implements| n33
  n389 -->|Depends on| n23
  n389 -->|Depends on| n39
  n389 -->|Depends on| n143
  n389 -->|Depends on| n317
  n390 -->|Implements| n34
  n391 -->|Implements| n33
  n392 -->|Implements| n34
  n392 -->|Depends on| n157
  n393 -->|Depends on| n371
  n393 -->|Depends on| n372
  n394 -->|Chooses| n393
  n394 -->|In| n30
  n394 -->|In| n52
  n394 -->|Serves| n445
  n395 -->|Implements| n45
  n395 -->|Depends on| n361
  n395 -->|Depends on| n143
  n395 -->|Depends on| n195
  n395 -->|Depends on| n711
  n396 -->|Implements| n55
  n396 -->|Uses| n323
  n396 -->|Uses| n316
  n397 -->|Implements| n27
  n398 -->|Chooses| n185
  n398 -->|In| n30
  n398 -->|In| n52
  n398 -->|Serves| n445
  n399 -->|Implements| n46
  n400 -->|Chooses| n399
  n400 -->|In| n52
  n400 -->|Serves| n445
  n401 -->|Chooses| n402
  n401 -->|In| n30
  n401 -->|Serves| n445
  n402 -->|Implements| n46
  n402 -->|Depends on| n143
  n402 -->|Depends on| n361
  n402 -->|Depends on| n170
  n402 -->|Depends on| n176
  n403 -->|Implements| n17
  n403 -->|Depends on| n405
  n403 -->|Depends on| n406
  n404 -->|Implements| n17
  n404 -->|Depends on| n149
  n407 -->|Implements| n40
  n407 -->|Depends on| n361
  n408 -->|Chooses| n412
  n408 -->|In| n30
  n408 -->|In| n52
  n408 -->|Serves| n445
  n409 -->|Implements| n31
  n409 -->|Uses| n321
  n409 -->|Depends on| n40
  n409 -->|Depends on| n142
  n409 -->|Depends on| n711
  n410 -->|Chooses| n409
  n410 -->|In| n30
  n410 -->|In| n52
  n410 -->|Serves| n445
  n412 -->|Implements| n49
  n412 -->|Uses| n325
  n412 -->|Depends on| n306
  n413 -->|Serves| n444
  n413 -->|Applied by| n164
  n413 -->|Applied by| n119
  n414 -->|Serves| n451
  n414 -->|Applied by| n164
  n414 -->|Applied by| n177
  n415 -->|Serves| n451
  n415 -->|Applied by| n172
  n415 -->|Applied by| n174
  n416 -->|Serves| n444
  n416 -->|Applied by| n113
  n416 -->|Applied by| n152
  n417 -->|Serves| n444
  n417 -->|Applied by| n54
  n417 -->|Applied by| n44
  n417 -->|Applied by| n32
  n417 -->|Applied by| n29
  n418 -->|Serves| n451
  n418 -->|Applied by| n164
  n418 -->|Applied by| n665
  n419 -->|Serves| n444
  n419 -->|Applied by| n105
  n419 -->|Applied by| n193
  n419 -->|Applied by| n596
  n419 -->|Applied by| n602
  n420 -->|Serves| n444
  n420 -->|Applied by| n188
  n420 -->|Applied by| n55
  n420 -->|Applied by| n711
  n420 -->|Applied by| n138
  n421 -->|Serves| n444
  n421 -->|Applied by| n164
  n421 -->|Applied by| n111
  n422 -->|Serves| n451
  n422 -->|Applied by| n179
  n422 -->|Applied by| n122
  n423 -->|Serves| n451
  n423 -->|Applied by| n164
  n423 -->|Applied by| n163
  n423 -->|Applied by| n182
  n423 -->|Applied by| n188
  n423 -->|Applied by| n177
  n424 -->|Serves| n453
  n424 -->|Applied by| n184
  n424 -->|Applied by| n164
  n424 -->|Applied by| n163
  n424 -->|Applied by| n186
  n424 -->|Applied by| n248
  n424 -->|Applied by| n105
  n425 -->|Serves| n453
  n425 -->|Applied by| n184
  n425 -->|Applied by| n177
  n425 -->|Applied by| n135
  n425 -->|Applied by| n126
  n425 -->|Applied by| n251
  n425 -->|Applied by| n250
  n426 -->|Serves| n451
  n426 -->|Applied by| n658
  n426 -->|Applied by| n225
  n426 -->|Applied by| n164
  n426 -->|Applied by| n29
  n426 -->|Applied by| n32
  n427 -->|Serves| n444
  n427 -->|Applied by| n177
  n427 -->|Applied by| n164
  n427 -->|Applied by| n184
  n428 -->|Serves| n451
  n428 -->|Applied by| n164
  n428 -->|Applied by| n665
  n429 -->|Serves| n451
  n429 -->|Applied by| n111
  n429 -->|Applied by| n131
  n429 -->|Applied by| n180
  n429 -->|Applied by| n341
  n429 -->|Applied by| n162
  n430 -->|Serves| n444
  n430 -->|Applied by| n163
  n430 -->|Applied by| n174
  n430 -->|Applied by| n191
  n430 -->|Applied by| n44
  n431 -->|Serves| n453
  n431 -->|Applied by| n184
  n431 -->|Applied by| n135
  n431 -->|Applied by| n393
  n431 -->|Applied by| n105
  n431 -->|Applied by| n177
  n431 -->|Applied by| n119
  n432 -->|Serves| n444
  n432 -->|Applied by| n40
  n432 -->|Applied by| n144
  n432 -->|Applied by| n140
  n432 -->|Applied by| n177
  n433 -->|Serves| n444
  n433 -->|Applied by| n129
  n433 -->|Applied by| n123
  n433 -->|Applied by| n649
  n433 -->|Applied by| n654
  n433 -->|Applied by| n652
  n433 -->|Applied by| n628
  n433 -->|Applied by| n611
  n434 -->|Serves| n445
  n434 -->|Applied by| n384
  n434 -->|Applied by| n382
  n434 -->|Applied by| n368
  n434 -->|Applied by| n364
  n434 -->|Applied by| n408
  n434 -->|Applied by| n410
  n434 -->|Applied by| n357
  n434 -->|Applied by| n362
  n434 -->|Applied by| n570
  n434 -->|Applied by| n571
  n434 -->|Applied by| n590
  n434 -->|Applied by| n589
  n434 -->|Applied by| n582
  n434 -->|Applied by| n581
  n435 -->|Serves| n444
  n435 -->|Applied by| n105
  n435 -->|Applied by| n193
  n435 -->|Applied by| n597
  n435 -->|Applied by| n596
  n435 -->|Applied by| n605
  n436 -->|Serves| n444
  n436 -->|Applied by| n164
  n436 -->|Applied by| n192
  n437 -->|Serves| n444
  n437 -->|Applied by| n177
  n437 -->|Applied by| n605
  n438 -->|Serves| n444
  n438 -->|Applied by| n177
  n438 -->|Applied by| n191
  n438 -->|Applied by| n184
  n439 -->|Serves| n451
  n439 -->|Applied by| n665
  n439 -->|Applied by| n658
  n439 -->|Applied by| n294
  n439 -->|Applied by| n298
  n439 -->|Applied by| n302
  n439 -->|Applied by| n309
  n439 -->|Applied by| n304
  n439 -->|Applied by| n297
  n439 -->|Applied by| n293
  n439 -->|Applied by| n292
  n439 -->|Applied by| n307
  n439 -->|Applied by| n306
  n439 -->|Applied by| n308
  n449 -->|Refines| n444
  n450 -->|Accepts| n449
  n454 -->|Releases| n54
  n455 -->|Releases| n54
  n455 -->|Assembled by| n558
  n456 -->|Releases| n54
  n456 -->|Assembled by| n568
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
  n465 -->|Assembled by| n464
  n466 -->|Releases| n54
  n466 -->|Assembled by| n455
  n467 -->|Releases| n54
  n467 -->|Assembled by| n465
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
  n473 -->|Assembled by| n466
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
  n481 -->|Assembled by| n454
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
  n558 -->|Releases| n54
  n558 -->|Assembled by| n547
  n559 -->|Releases| n54
  n559 -->|Assembled by| n557
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
  n565 -->|Releases| n54
  n565 -->|Assembled by| n564
  n566 -->|Releases| n54
  n566 -->|Assembled by| n565
  n567 -->|Releases| n54
  n567 -->|Assembled by| n566
  n568 -->|Releases| n54
  n568 -->|Assembled by| n567
  n569 -->|Serves| n444
  n569 -->|Depends on| n146
  n569 -->|Depends on| n586
  n569 -->|Depends on| n296
  n569 -->|Depends on| n303
  n569 -->|Depends on| n307
  n569 -->|Depends on| n160
  n570 -->|Chooses| n576
  n570 -->|In| n30
  n570 -->|In| n52
  n570 -->|Serves| n445
  n571 -->|Chooses| n578
  n571 -->|In| n30
  n571 -->|In| n52
  n571 -->|Serves| n445
  n573 -->|Serves| n444
  n573 -->|Depends on| n569
  n573 -->|Depends on| n574
  n573 -->|Depends on| n307
  n575 -->|Serves| n444
  n575 -->|Implements| n584
  n575 -->|Depends on| n580
  n575 -->|Depends on| n275
  n575 -->|Depends on| n355
  n575 -->|Depends on| n212
  n575 -->|Depends on| n214
  n575 -->|Depends on| n209
  n575 -->|Depends on| n157
  n575 -->|Depends on| n586
  n575 -->|Depends on| n307
  n576 -->|Serves| n444
  n576 -->|Implements| n574
  n576 -->|Depends on| n572
  n576 -->|Depends on| n159
  n576 -->|Depends on| n157
  n576 -->|Depends on| n257
  n576 -->|Depends on| n264
  n576 -->|Depends on| n266
  n576 -->|Depends on| n256
  n576 -->|Depends on| n258
  n576 -->|Depends on| n262
  n576 -->|Depends on| n269
  n576 -->|Depends on| n259
  n576 -->|Depends on| n265
  n576 -->|Depends on| n267
  n576 -->|Depends on| n271
  n576 -->|Depends on| n270
  n576 -->|Depends on| n253
  n576 -->|Depends on| n261
  n576 -->|Depends on| n307
  n577 -->|Serves| n444
  n577 -->|Applied by| n573
  n577 -->|Applied by| n591
  n577 -->|Applied by| n583
  n577 -->|Applied by| n569
  n577 -->|Applied by| n44
  n578 -->|Serves| n444
  n578 -->|Implements| n572
  n578 -->|Depends on| n284
  n578 -->|Depends on| n155
  n578 -->|Depends on| n7
  n578 -->|Depends on| n268
  n578 -->|Depends on| n279
  n578 -->|Depends on| n287
  n578 -->|Depends on| n291
  n578 -->|Depends on| n286
  n578 -->|Depends on| n278
  n578 -->|Depends on| n289
  n578 -->|Depends on| n280
  n578 -->|Depends on| n282
  n578 -->|Depends on| n283
  n578 -->|Depends on| n288
  n578 -->|Depends on| n296
  n578 -->|Depends on| n307
  n579 -->|Serves| n445
  n579 -->|Applied by| n573
  n579 -->|Applied by| n591
  n579 -->|Applied by| n583
  n579 -->|Applied by| n570
  n579 -->|Applied by| n571
  n579 -->|Applied by| n590
  n579 -->|Applied by| n589
  n579 -->|Applied by| n582
  n579 -->|Applied by| n581
  n581 -->|Chooses| n587
  n581 -->|In| n30
  n581 -->|In| n52
  n581 -->|Serves| n445
  n582 -->|Chooses| n575
  n582 -->|In| n30
  n582 -->|In| n52
  n582 -->|Serves| n445
  n583 -->|Serves| n444
  n583 -->|Depends on| n569
  n583 -->|Depends on| n584
  n583 -->|Depends on| n307
  n585 -->|Serves| n444
  n585 -->|Implements| n592
  n585 -->|Depends on| n588
  n585 -->|Depends on| n683
  n585 -->|Depends on| n681
  n585 -->|Depends on| n157
  n585 -->|Depends on| n679
  n585 -->|Depends on| n677
  n585 -->|Depends on| n678
  n585 -->|Depends on| n676
  n585 -->|Depends on| n682
  n585 -->|Depends on| n307
  n587 -->|Serves| n444
  n587 -->|Implements| n580
  n587 -->|Depends on| n275
  n587 -->|Depends on| n277
  n587 -->|Depends on| n355
  n587 -->|Depends on| n1
  n587 -->|Depends on| n11
  n587 -->|Depends on| n2
  n587 -->|Depends on| n212
  n587 -->|Depends on| n224
  n587 -->|Depends on| n221
  n587 -->|Depends on| n203
  n587 -->|Depends on| n209
  n587 -->|Depends on| n569
  n587 -->|Depends on| n296
  n587 -->|Depends on| n305
  n587 -->|Depends on| n307
  n587 -->|Depends on| n157
  n589 -->|Chooses| n593
  n589 -->|In| n30
  n589 -->|In| n52
  n589 -->|Serves| n445
  n590 -->|Chooses| n585
  n590 -->|In| n30
  n590 -->|In| n52
  n590 -->|Serves| n445
  n591 -->|Serves| n444
  n591 -->|Depends on| n569
  n591 -->|Depends on| n592
  n591 -->|Depends on| n307
  n593 -->|Serves| n444
  n593 -->|Implements| n588
  n593 -->|Depends on| n569
  n593 -->|Depends on| n681
  n593 -->|Depends on| n157
  n593 -->|Depends on| n679
  n593 -->|Depends on| n677
  n593 -->|Depends on| n684
  n593 -->|Depends on| n680
  n593 -->|Depends on| n296
  n593 -->|Depends on| n307
  n594 -->|Verifies| n164
  n594 -->|Verifies| n192
  n594 -->|Verifies| n162
  n594 -->|Verifies| n714
  n594 -->|In| n52
  n594 -->|Depends on| n164
  n594 -->|Depends on| n41
  n594 -->|Depends on| n162
  n594 -->|Depends on| n140
  n594 -->|Depends on| n595
  n594 -->|Depends on| n308
  n596 -->|Verifies| n111
  n596 -->|Verifies| n121
  n596 -->|Verifies| n163
  n596 -->|Verifies| n191
  n596 -->|Verifies| n573
  n596 -->|Verifies| n569
  n596 -->|Verifies| n576
  n596 -->|Verifies| n578
  n596 -->|Verifies| n180
  n596 -->|Verifies| n179
  n596 -->|Verifies| n374
  n596 -->|Verifies| n377
  n596 -->|Verifies| n403
  n596 -->|In| n52
  n596 -->|Depends on| n111
  n596 -->|Depends on| n602
  n596 -->|Depends on| n56
  n596 -->|Depends on| n51
  n596 -->|Depends on| n143
  n596 -->|Depends on| n21
  n596 -->|Depends on| n39
  n596 -->|Depends on| n41
  n596 -->|Depends on| n148
  n596 -->|Depends on| n293
  n596 -->|Depends on| n308
  n597 -->|Verifies| n164
  n597 -->|Verifies| n184
  n597 -->|Verifies| n188
  n597 -->|Verifies| n192
  n597 -->|Verifies| n174
  n597 -->|Verifies| n396
  n597 -->|Verifies| n409
  n597 -->|Verifies| n407
  n597 -->|Verifies| n374
  n597 -->|Verifies| n383
  n597 -->|Verifies| n365
  n597 -->|Verifies| n397
  n597 -->|In| n52
  n597 -->|Depends on| n164
  n597 -->|Depends on| n41
  n597 -->|Depends on| n17
  n597 -->|Depends on| n601
  n597 -->|Depends on| n308
  n598 -->|Verifies| n296
  n598 -->|Verifies| n303
  n598 -->|Verifies| n160
  n598 -->|Verifies| n161
  n598 -->|Verifies| n157
  n598 -->|Verifies| n324
  n598 -->|In| n52
  n598 -->|Depends on| n296
  n598 -->|Depends on| n303
  n598 -->|Depends on| n160
  n598 -->|Depends on| n161
  n598 -->|Depends on| n157
  n598 -->|Depends on| n301
  n598 -->|Depends on| n324
  n598 -->|Depends on| n599
  n598 -->|Depends on| n308
  n600 -->|Verifies| n165
  n600 -->|Verifies| n173
  n600 -->|Verifies| n172
  n600 -->|Verifies| n186
  n600 -->|Verifies| n183
  n600 -->|In| n52
  n600 -->|Depends on| n165
  n600 -->|Depends on| n173
  n600 -->|Depends on| n172
  n600 -->|Depends on| n186
  n600 -->|Depends on| n183
  n600 -->|Depends on| n606
  n600 -->|Depends on| n308
  n604 -->|Verifies| n175
  n604 -->|In| n52
  n604 -->|Depends on| n175
  n604 -->|Depends on| n603
  n604 -->|Depends on| n308
  n605 -->|Verifies| n177
  n605 -->|In| n52
  n605 -->|Depends on| n177
  n605 -->|Depends on| n164
  n605 -->|Depends on| n41
  n605 -->|Depends on| n17
  n605 -->|Depends on| n308
  n607 -->|Serves| n444
  n607 -->|Part of| n646
  n607 -->|Depends on| n645
  n607 -->|Depends on| n625
  n607 -->|Depends on| n641
  n608 -->|Serves| n444
  n609 -->|Serves| n444
  n610 -->|Serves| n444
  n611 -->|Checks| n614
  n611 -->|Run by| n132
  n611 -->|Signed by| n626
  n612 -->|Checks| n614
  n612 -->|Run by| n115
  n612 -->|Signed by| n626
  n612 -->|Verifies| n358
  n612 -->|Verifies| n360
  n612 -->|Verifies| n359
  n612 -->|Verifies| n385
  n612 -->|Verifies| n386
  n612 -->|Verifies| n387
  n612 -->|Verifies| n404
  n612 -->|Verifies| n392
  n612 -->|Verifies| n391
  n612 -->|Verifies| n381
  n612 -->|Verifies| n402
  n613 -->|Serves| n444
  n614 -->|Produced by| n54
  n615 -->|Serves| n444
  n616 -->|Serves| n444
  n617 -->|Its obligations| n616
  n617 -->|Its obligations| n624
  n617 -->|Its obligations| n608
  n617 -->|Its obligations| n610
  n617 -->|Its obligations| n609
  n617 -->|Its obligations| n615
  n617 -->|Its obligations| n613
  n618 -->|Produced by| n118
  n618 -->|Carries| n36
  n620 -->|Checks| n618
  n620 -->|Run by| n630
  n620 -->|Signed by| n626
  n620 -->|Verifies| n63
  n620 -->|Verifies| n62
  n620 -->|Verifies| n61
  n620 -->|Verifies| n60
  n620 -->|Verifies| n59
  n620 -->|Verifies| n57
  n620 -->|Verifies| n58
  n622 -->|Serves| n444
  n622 -->|Depends on| n344
  n622 -->|Depends on| n275
  n622 -->|Depends on| n201
  n623 -->|Ships| n644
  n623 -->|Programs assembled for| n30
  n623 -->|Follows the policy| n627
  n624 -->|Serves| n444
  n627 -->|Its obligations| n616
  n627 -->|Its obligations| n609
  n628 -->|Ships| n614
  n628 -->|Ships| n631
  n628 -->|Ships| n618
  n628 -->|Deployed by| n105
  n628 -->|Programs assembled for| n30
  n628 -->|Follows the policy| n617
  n629 -->|Verifies| n630
  n629 -->|Verifies| n622
  n629 -->|In| n52
  n629 -->|Depends on| n630
  n629 -->|Depends on| n618
  n629 -->|Depends on| n622
  n629 -->|Depends on| n641
  n629 -->|Depends on| n621
  n629 -->|Depends on| n308
  n630 -->|Serves| n444
  n630 -->|Part of| n646
  n630 -->|Depends on| n618
  n630 -->|Depends on| n301
  n630 -->|Depends on| n622
  n630 -->|Depends on| n619
  n630 -->|Depends on| n641
  n631 -->|Produced by| n36
  n631 -->|Assembled for| n15
  n633 -->|Runs elsewhere| n623
  n633 -->|Its writer's settings| n632
  n634 -->|Serves| n444
  n634 -->|Part of| n646
  n634 -->|Depends on| n645
  n634 -->|Depends on| n625
  n634 -->|Depends on| n641
  n635 -->|Run by| n634
  n635 -->|Signed by| n626
  n637 -->|Requires| n635
  n637 -->|Deployed by| n607
  n637 -->|Programs assembled for| n30
  n637 -->|Follows the policy| n642
  n638 -->|Ships| n633
  n639 -->|In| n52
  n640 -->|In| n30
  n641 -->|Written in| n301
  n642 -->|Its obligations| n616
  n642 -->|Its obligations| n609
  n642 -->|Its obligations| n613
  n643 -->|Verifies| n634
  n643 -->|Verifies| n607
  n643 -->|In| n52
  n643 -->|Depends on| n634
  n643 -->|Depends on| n607
  n643 -->|Depends on| n645
  n643 -->|Depends on| n625
  n643 -->|Depends on| n636
  n643 -->|Depends on| n641
  n643 -->|Depends on| n308
  n646 -->|Deployed in| n30
  n647 -->|Implements| n48
  n647 -->|Depends on| n25
  n649 -->|Serves| n444
  n649 -->|Depends on| n143
  n649 -->|Depends on| n654
  n649 -->|Depends on| n21
  n649 -->|Depends on| n39
  n649 -->|Depends on| n25
  n649 -->|Depends on| n141
  n649 -->|Depends on| n172
  n649 -->|Depends on| n48
  n650 -->|Chooses| n647
  n650 -->|In| n30
  n650 -->|In| n52
  n650 -->|Serves| n444
  n651 -->|Serves| n444
  n651 -->|Depends on| n148
  n651 -->|Depends on| n184
  n651 -->|Depends on| n143
  n651 -->|Depends on| n196
  n651 -->|Depends on| n21
  n651 -->|Depends on| n39
  n652 -->|Refines| n444
  n653 -->|Accepts| n652
  n658 -->|Serves| n444
  n658 -->|Depends on| n144
  n658 -->|Depends on| n298
  n662 -->|Written in| n301
  n663 -->|Serves| n444
  n663 -->|Applied by| n665
  n663 -->|Applied by| n49
  n664 -->|Serves| n444
  n664 -->|Applied by| n665
  n664 -->|Applied by| n658
  n664 -->|Applied by| n49
  n665 -->|Serves| n444
  n665 -->|Serves| n451
  n665 -->|Depends on| n49
  n665 -->|Depends on| n659
  n665 -->|Depends on| n662
  n665 -->|Depends on| n660
  n665 -->|Depends on| n661
  n665 -->|Depends on| n655
  n665 -->|Depends on| n21
  n665 -->|Depends on| n27
  n665 -->|Depends on| n46
  n665 -->|Depends on| n143
  n665 -->|Depends on| n39
  n665 -->|Depends on| n25
  n666 -->|Defined by| n669
  n666 -->|Read in| n672
  n666 -->|Depends on| n669
  n667 -->|Defined by| n669
  n667 -->|Read in| n672
  n667 -->|Depends on| n669
  n668 -->|Defined by| n669
  n668 -->|Read in| n672
  n668 -->|Depends on| n669
  n668 -->|Depends on| n672
  n670 -->|Defined by| n669
  n670 -->|Read in| n672
  n670 -->|Depends on| n669
  n670 -->|Depends on| n668
  n671 -->|Defined by| n669
  n671 -->|Read in| n672
  n671 -->|Depends on| n669
  n671 -->|Depends on| n673
  n671 -->|Depends on| n668
  n672 -->|Defined by| n669
  n672 -->|Queries written in| n656
  n672 -->|Read by| n665
  n672 -->|Uses| n314
  n674 -->|Serves| n444
  n674 -->|Depends on| n669
  n674 -->|Depends on| n673
  n674 -->|Depends on| n143
  n674 -->|Depends on| n667
  n674 -->|Depends on| n668
  n674 -->|Depends on| n670
  n674 -->|Depends on| n666
  n674 -->|Depends on| n671
  n674 -->|Depends on| n39
  n674 -->|Depends on| n40
  n674 -->|Depends on| n296
  n674 -->|Depends on| n298
  n676 -->|Defined by| n683
  n676 -->|Depends on| n683
  n677 -->|Defined by| n683
  n677 -->|Depends on| n683
  n677 -->|Depends on| n679
  n677 -->|Depends on| n681
  n678 -->|Defined by| n683
  n678 -->|Depends on| n683
  n679 -->|Defined by| n683
  n679 -->|Depends on| n683
  n679 -->|Depends on| n681
  n680 -->|Defined by| n683
  n680 -->|Depends on| n683
  n680 -->|Depends on| n675
  n682 -->|Defined by| n683
  n682 -->|Depends on| n683
  n684 -->|Defined by| n683
  n684 -->|Depends on| n683
  n684 -->|Depends on| n675
  n685 -->|Defined by| n713
  n685 -->|Read in| n711
  n685 -->|Depends on| n713
  n686 -->|Defined by| n713
  n686 -->|Read in| n711
  n686 -->|Depends on| n713
  n687 -->|Defined by| n713
  n687 -->|Read in| n711
  n687 -->|Depends on| n713
  n688 -->|Defined by| n713
  n688 -->|Read in| n711
  n688 -->|Depends on| n713
  n689 -->|Defined by| n713
  n689 -->|Read in| n711
  n689 -->|Depends on| n713
  n690 -->|Defined by| n713
  n690 -->|Read in| n711
  n690 -->|Depends on| n713
  n691 -->|Defined by| n713
  n691 -->|Read in| n711
  n691 -->|Depends on| n713
  n692 -->|Defined by| n713
  n692 -->|Read in| n711
  n692 -->|Depends on| n713
  n692 -->|Depends on| n710
  n693 -->|Defined by| n713
  n693 -->|Read in| n711
  n693 -->|Depends on| n713
  n694 -->|Defined by| n713
  n694 -->|Read in| n711
  n694 -->|Depends on| n713
  n695 -->|Defined by| n713
  n695 -->|Read in| n711
  n695 -->|Depends on| n713
  n696 -->|Defined by| n713
  n696 -->|Read in| n711
  n696 -->|Depends on| n713
  n697 -->|Defined by| n713
  n697 -->|Read in| n711
  n697 -->|Depends on| n713
  n698 -->|Defined by| n713
  n698 -->|Read in| n711
  n698 -->|Depends on| n713
  n699 -->|Defined by| n713
  n699 -->|Read in| n711
  n699 -->|Depends on| n713
  n700 -->|Defined by| n713
  n700 -->|Read in| n711
  n700 -->|Depends on| n713
  n700 -->|Depends on| n710
  n701 -->|Defined by| n713
  n701 -->|Read in| n711
  n701 -->|Depends on| n713
  n702 -->|Defined by| n713
  n702 -->|Read in| n711
  n702 -->|Depends on| n713
  n703 -->|Defined by| n713
  n703 -->|Read in| n711
  n703 -->|Depends on| n713
  n704 -->|Defined by| n713
  n704 -->|Read in| n711
  n704 -->|Depends on| n713
  n705 -->|Defined by| n713
  n705 -->|Read in| n711
  n705 -->|Depends on| n713
  n706 -->|Defined by| n713
  n706 -->|Read in| n711
  n706 -->|Depends on| n713
  n708 -->|Defined by| n713
  n708 -->|Read in| n711
  n708 -->|Depends on| n713
  n708 -->|Depends on| n710
  n709 -->|Defined by| n713
  n709 -->|Read in| n711
  n709 -->|Depends on| n713
  n710 -->|Defined by| n713
  n710 -->|Read in| n711
  n710 -->|Depends on| n713
  n711 -->|Queries written in| n656
  n711 -->|Read by| n665
  n711 -->|Watches the globals| n716
  n711 -->|Uses| n322
  n712 -->|Serves| n444
  n714 -->|Serves| n444
  n714 -->|Depends on| n711
  n714 -->|Depends on| n713
  n714 -->|Depends on| n140
  n714 -->|Depends on| n707
  n714 -->|Depends on| n147
  n714 -->|Depends on| n146
  n714 -->|Depends on| n697
  n714 -->|Depends on| n710
  n714 -->|Depends on| n698
  n714 -->|Depends on| n704
  n714 -->|Depends on| n690
  n714 -->|Depends on| n689
  n714 -->|Depends on| n706
  n714 -->|Depends on| n708
  n714 -->|Depends on| n702
  n714 -->|Depends on| n685
  n714 -->|Depends on| n691
  n714 -->|Depends on| n700
  n714 -->|Depends on| n692
  n714 -->|Depends on| n686
  n714 -->|Depends on| n705
  n714 -->|Depends on| n703
  n714 -->|Depends on| n715
  n714 -->|Depends on| n695
  n714 -->|Depends on| n709
  n714 -->|Depends on| n687
  n714 -->|Depends on| n696
  n714 -->|Depends on| n688
  n714 -->|Depends on| n149
  n714 -->|Depends on| n39
  n714 -->|Depends on| n40
  n714 -->|Depends on| n296
  n714 -->|Depends on| n298
  n715 -->|Defined by| n713
  n715 -->|Read in| n711
  n715 -->|Depends on| n713
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
