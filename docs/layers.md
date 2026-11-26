# Layers

*The graph in force on 26 November 2026, ordered by distance to the goals.*

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
    n48["A session of Claude Code<br/><small>Environment</small>"]:::neutral
    n49["Signatures<br/><small>Port</small>"]:::neutral
    n50["Syntax trees<br/><small>Port</small>"]:::neutral
    n51["Terminal<br/><small>Port</small>"]:::neutral
    n52["Terminal log<br/><small>Port</small>"]:::neutral
    n53["Test<br/><small>Environment</small>"]:::neutral
    n54["Timer<br/><small>Port</small>"]:::neutral
    n55["Trame on the command line<br/><small>Component</small>"]:::neutral
    n56["TypeScript compiler<br/><small>Port</small>"]:::neutral
    n57["Write log<br/><small>Port</small>"]:::neutral
  end
  subgraph browser["Trame · The page in a browser"]
    n58["Amendments sent to trame dev<br/><small>Implementation</small>"]:::held
    n59["The browser's gzip<br/><small>Implementation</small>"]:::held
    n60["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::held
    n61["Local storage<br/><small>Implementation</small>"]:::held
    n62["The browser's window<br/><small>Implementation</small>"]:::held
    n63["Explorer of a graph<br/><small>Function</small>"]:::held
    n64["Show the graph<br/><small>Entry point</small>"]:::held
    n65["The browser runs the page<br/><small>Technical choice</small>"]:::held
    n66["The page is assembled<br/><small>Architecture decision</small>"]:::held
  end
  subgraph command-scenarios["Trame · Scenarios of the commands"]
    n67["An advance, in memory<br/><small>Scenario</small>"]:::held
    n68["What the engines an advance starts answer in a scenario<br/><small>Decision</small>"]:::neutral
    n69["What an amendment is checked with<br/><small>Decision</small>"]:::neutral
    n70["What the example is assembled for<br/><small>Decision</small>"]:::neutral
    n71["A body is read and checked<br/><small>Scenario</small>"]:::held
    n72["Bodies the reader is given<br/><small>Decision</small>"]:::neutral
    n73["A build planned<br/><small>Scenario</small>"]:::held
    n74["The command line<br/><small>Scenario</small>"]:::held
    n75["A component assembled<br/><small>Scenario</small>"]:::held
    n76["A component run<br/><small>Scenario</small>"]:::held
    n77["Declarations published<br/><small>Scenario</small>"]:::held
    n78["trame dev<br/><small>Scenario</small>"]:::held
    n79["What trame dev is shown in a scenario<br/><small>Decision</small>"]:::neutral
    n80["The doctor<br/><small>Scenario</small>"]:::held
    n81["The engine's API<br/><small>Scenario</small>"]:::held
    n82["Evidence given for someone<br/><small>Scenario</small>"]:::held
    n83["An example's output written again<br/><small>Scenario</small>"]:::held
    n84["The examples of a project, met<br/><small>Scenario</small>"]:::held
    n85["A library carries kinds<br/><small>Scenario</small>"]:::held
    n86["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n87["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
    n88["A library released<br/><small>Scenario</small>"]:::held
    n89["The manifest written<br/><small>Scenario</small>"]:::held
    n90["The packages audited<br/><small>Scenario</small>"]:::held
    n91["The packages upgraded<br/><small>Scenario</small>"]:::held
    n92["The page delivered<br/><small>Scenario</small>"]:::held
    n93["The page exported<br/><small>Scenario</small>"]:::held
    n94["The page of the graph<br/><small>Scenario</small>"]:::held
    n95["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n96["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n97["A command of the project<br/><small>Scenario</small>"]:::held
    n98["A project repaired<br/><small>Scenario</small>"]:::held
    n99["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n100["A project started<br/><small>Scenario</small>"]:::held
    n101["A published value changed<br/><small>Scenario</small>"]:::held
    n102["The registry filled<br/><small>Scenario</small>"]:::held
    n103["Declarations rewritten<br/><small>Decision</small>"]:::neutral
    n104["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n105["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n106["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n107["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n108["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n109["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n110["A value amended<br/><small>Scenario</small>"]:::held
    n111["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n112["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n113["The add-ons of a command the engine keeps<br/><small>Function</small>"]:::held
    n114["Advance<br/><small>Entry point</small>"]:::held
    n115["Amend<br/><small>Entry point</small>"]:::held
    n116["An amendment prepared<br/><small>Function</small>"]:::held
    n117["Assemble a component<br/><small>Entry point</small>"]:::held
    n118["Assembler<br/><small>Function</small>"]:::held
    n119["Audit the packages<br/><small>Entry point</small>"]:::held
    n120["Build<br/><small>Entry point</small>"]:::held
    n121["Two builds compared<br/><small>Function</small>"]:::held
    n122["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n123["Deliver<br/><small>Entry point</small>"]:::held
    n124["Start trame dev<br/><small>Entry point</small>"]:::held
    n125["Ask the machine<br/><small>Entry point</small>"]:::held
    n126["Payload<br/><small>Entry point</small>"]:::held
    n127["Rewriting an example<br/><small>Function</small>"]:::held
    n128["Examples<br/><small>Entry point</small>"]:::held
    n129["Export the page<br/><small>Entry point</small>"]:::held
    n130["Help<br/><small>Entry point</small>"]:::held
    n131["Start a project<br/><small>Entry point</small>"]:::held
    n132["Plan<br/><small>Entry point</small>"]:::held
    n133["Preparation<br/><small>Function</small>"]:::held
    n134["The project's commands<br/><small>Function</small>"]:::held
    n135["Publish<br/><small>Entry point</small>"]:::held
    n136["Record evidence<br/><small>Entry point</small>"]:::held
    n137["A module of references<br/><small>Function</small>"]:::held
    n138["Fill the registry<br/><small>Entry point</small>"]:::held
    n139["Release a version<br/><small>Entry point</small>"]:::held
    n140["Render a view<br/><small>Function</small>"]:::held
    n141["Run a component<br/><small>Entry point</small>"]:::held
    n142["Ship<br/><small>Entry point</small>"]:::held
    n143["Show a view<br/><small>Entry point</small>"]:::held
    n144["Take the snapshot<br/><small>Entry point</small>"]:::held
    n145["Test the laws<br/><small>Entry point</small>"]:::held
    n146["Upgrade<br/><small>Entry point</small>"]:::held
    n147["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n148["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n149["Default rank<br/><small>Decision</small>"]:::neutral
    n150["Documentation comment<br/><small>Decision</small>"]:::neutral
    n151["Names of the documents<br/><small>Standard</small>"]:::neutral
    n152["The frozen API<br/><small>Standard</small>"]:::neutral
    n153["JSON formatting<br/><small>Decision</small>"]:::neutral
    n154["The commands the engine keeps<br/><small>Decision</small>"]:::neutral
    n155["The language's names<br/><small>Decision</small>"]:::neutral
    n156["Project layout<br/><small>Decision</small>"]:::neutral
    n157["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n158["How a project starts<br/><small>Decision</small>"]:::neutral
    n159["Trame references<br/><small>Standard</small>"]:::neutral
    n160["Names of steps<br/><small>Decision</small>"]:::neutral
    n161["Trame's commands<br/><small>Standard</small>"]:::neutral
    n162["Trame's environment<br/><small>Standard</small>"]:::neutral
    n163["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n164["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n165["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n166["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph doctor["Trame · Doctor"]
    n167["Asking<br/><small>Function</small>"]:::held
    n168["The clock gives the day<br/><small>Implementation</small>"]:::held
    n169["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n170["What the engine needs of the machine<br/><small>Port</small>"]:::neutral
    n171["What the engine asks the machine<br/><small>Technical choice</small>"]:::held
    n172["A file written is read back<br/><small>Implementation</small>"]:::held
    n173["The installer installs what a manifest names and writes its lockfile<br/><small>Implementation</small>"]:::held
    n174["A program runs with the engine's loader, and prints what it says<br/><small>Implementation</small>"]:::held
    n175["The registry answers about the packages<br/><small>Implementation</small>"]:::held
    n176["A run is kept, and given back until a file it read changes<br/><small>Implementation</small>"]:::held
    n177["A server listens on a port the system gives<br/><small>Implementation</small>"]:::held
    n178["The time passes<br/><small>Implementation</small>"]:::held
    n179["A directory copied is the same as the original<br/><small>Implementation</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n180["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n181["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n182["How a number is written<br/><small>Decision</small>"]:::neutral
    n183["Punctuation of documents<br/><small>Function</small>"]:::held
    n184["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n185["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n186["Values with their units<br/><small>Function</small>"]:::held
    n187["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n188["Assembly<br/><small>Function</small>"]:::held
    n189["Compilation API<br/><small>Function</small>"]:::held
    n190["Compiler<br/><small>Function</small>"]:::held
    n191["Cycles<br/><small>Function</small>"]:::held
    n192["Date bundle<br/><small>Function</small>"]:::held
    n193["trame dev server<br/><small>Function</small>"]:::held
    n194["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n195["Differences<br/><small>Function</small>"]:::held
    n196["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n197["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n198["Fingerprints<br/><small>Function</small>"]:::held
    n199["Pseudo-random generator<br/><small>Function</small>"]:::held
    n200["Graph<br/><small>Function</small>"]:::held
    n201["Judged harder<br/><small>Function</small>"]:::held
    n202["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n203["Laws<br/><small>Function</small>"]:::held
    n204["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n205["Lock<br/><small>Function</small>"]:::held
    n206["Machine outputs<br/><small>Function</small>"]:::held
    n207["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n208["Payload<br/><small>Function</small>"]:::held
    n209["Positions<br/><small>Function</small>"]:::held
    n210["Project<br/><small>Function</small>"]:::held
    n211["The runs of a project<br/><small>Function</small>"]:::held
    n212["References<br/><small>Function</small>"]:::held
    n213["A shipment's pipeline<br/><small>Function</small>"]:::held
    n214["Static reading<br/><small>Function</small>"]:::held
    n215["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n216["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n217["Views<br/><small>Function</small>"]:::held
    n218["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n219["Accept a candidate<br/><small>Requirement</small>"]:::held
    n220["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n221["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n222["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n223["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n224["Records of the releases<br/><small>Function</small>"]:::held
    n225["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n226["Attribute presence<br/><small>Syntax element</small>"]:::held
    n227["Attribute selector<br/><small>Syntax element</small>"]:::held
    n228["Class selector<br/><small>Syntax element</small>"]:::held
    n229["Declaration<br/><small>Syntax element</small>"]:::held
    n230["Rule<br/><small>Syntax element</small>"]:::held
    n231["CSS style sheets<br/><small>Language</small>"]:::held
    n232["Variable<br/><small>Syntax element</small>"]:::held
    n233["Custom property<br/><small>Syntax element</small>"]:::held
    n234["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n235["Escaped text<br/><small>Syntax element</small>"]:::held
    n236["Attributes<br/><small>Syntax element</small>"]:::held
    n237["Element over several lines<br/><small>Syntax element</small>"]:::held
    n238["HTML element<br/><small>Syntax element</small>"]:::held
    n239["End tag<br/><small>Syntax element</small>"]:::held
    n240["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n241["HTML markup<br/><small>Language</small>"]:::held
    n242["Start tag<br/><small>Syntax element</small>"]:::held
    n243["JSON in a script<br/><small>Syntax element</small>"]:::held
    n244["Media feature<br/><small>Syntax element</small>"]:::held
    n245["Media rule<br/><small>Syntax element</small>"]:::held
    n246["Negation<br/><small>Syntax element</small>"]:::held
    n247["Path data<br/><small>Syntax element</small>"]:::held
    n248["Script<br/><small>Syntax element</small>"]:::held
    n249["Selector list<br/><small>Syntax element</small>"]:::held
    n250["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n251["Drivers<br/><small>Function</small>"]:::held
    n252["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n253["Answers without crashing<br/><small>Requirement</small>"]:::held
    n254["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n255["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n256["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n257["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n258["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n259["Complete declaration<br/><small>Requirement</small>"]:::held
    n260["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n261["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n262["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n263["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n264["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n265["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n266["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n267["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n268["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n269["Same input, same answer<br/><small>Requirement</small>"]:::held
    n270["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n271["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n272["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n273["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n274["What belongs to a library<br/><small>Requirement</small>"]:::held
    n275["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n276["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n277["A release is settled<br/><small>Requirement</small>"]:::held
    n278["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n279["Anchor<br/><small>Syntax element</small>"]:::held
    n280["Backtick string<br/><small>Syntax element</small>"]:::held
    n281["Blank line<br/><small>Syntax element</small>"]:::held
    n282["Block quote<br/><small>Syntax element</small>"]:::held
    n283["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n284["Code block<br/><small>Syntax element</small>"]:::held
    n285["Code span<br/><small>Syntax element</small>"]:::held
    n286["CommonMark<br/><small>Standard</small>"]:::neutral
    n287["Collapsible block<br/><small>Syntax element</small>"]:::held
    n288["Emphasis<br/><small>Syntax element</small>"]:::held
    n289["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n290["Heading<br/><small>Syntax element</small>"]:::held
    n291["Link<br/><small>Syntax element</small>"]:::held
    n292["List item<br/><small>Syntax element</small>"]:::held
    n293["Relative reference<br/><small>Syntax element</small>"]:::held
    n294["Small text<br/><small>Syntax element</small>"]:::held
    n295["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n296["Table<br/><small>Syntax element</small>"]:::held
    n297["Table cell<br/><small>Syntax element</small>"]:::held
    n298["Delimiter row<br/><small>Syntax element</small>"]:::held
    n299["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n300["Around the documents<br/><small>Decision</small>"]:::neutral
    n301["Documents in the page<br/><small>Decision</small>"]:::neutral
    n302["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n303["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n304["Class definition<br/><small>Syntax element</small>"]:::held
    n305["Flowchart<br/><small>Syntax element</small>"]:::held
    n306["Gantt chart<br/><small>Syntax element</small>"]:::held
    n307["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n308["Section<br/><small>Syntax element</small>"]:::held
    n309["Task<br/><small>Syntax element</small>"]:::held
    n310["Mermaid<br/><small>Standard</small>"]:::neutral
    n311["Label<br/><small>Syntax element</small>"]:::held
    n312["Link<br/><small>Syntax element</small>"]:::held
    n313["Node<br/><small>Syntax element</small>"]:::held
    n314["Milestone<br/><small>Syntax element</small>"]:::held
    n315["Node style<br/><small>Syntax element</small>"]:::held
    n316["Style properties<br/><small>Syntax element</small>"]:::held
    n317["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n318["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n319["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n320["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n321["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n322["Dates<br/><small>Function</small>"]:::held
    n323["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n324["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n325["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n326["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n327["Language<br/><small>Decision</small>"]:::neutral
    n328["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n329["Lists<br/><small>Function</small>"]:::held
    n330["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n331["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n332["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n333["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n334["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n335["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n336["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n337["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n338["Grammar of CSS<br/><small>Package</small>"]:::held
    n339["esbuild<br/><small>Package</small>"]:::held
    n340["The commands every project runs<br/><small>Package</small>"]:::neutral
    n341["Grammar of HCL<br/><small>Package</small>"]:::held
    n342["Grammar of HTML<br/><small>Package</small>"]:::held
    n343["The questions of the machine<br/><small>Package</small>"]:::neutral
    n344["Types of Node.js<br/><small>Package</small>"]:::held
    n345["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n346["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n347["The people of the repository<br/><small>Package</small>"]:::neutral
    n348["The standard library<br/><small>Package</small>"]:::neutral
    n349["tsx<br/><small>Package</small>"]:::held
    n350["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n351["TypeScript<br/><small>Package</small>"]:::held
    n352["Order of versions<br/><small>Function</small>"]:::held
    n353["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n354["Banner<br/><small>Syntax element</small>"]:::held
    n355["Brand<br/><small>Syntax element</small>"]:::held
    n356["State of the compilation<br/><small>Syntax element</small>"]:::held
    n357["Dates<br/><small>Syntax element</small>"]:::held
    n358["Head of the document<br/><small>Syntax element</small>"]:::held
    n359["Document picker<br/><small>Syntax element</small>"]:::held
    n360["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n361["Fonts<br/><small>Syntax element</small>"]:::held
    n362["Logo<br/><small>Syntax element</small>"]:::held
    n363["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n364["Main area<br/><small>Syntax element</small>"]:::held
    n365["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n366["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n367["Navigation<br/><small>Syntax element</small>"]:::held
    n368["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n369["Page<br/><small>Function</small>"]:::held
    n370["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n371["Document of the page<br/><small>Syntax element</small>"]:::held
    n372["Regions of the page<br/><small>Decision</small>"]:::neutral
    n373["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n374["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n375["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n376["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n377["Shell<br/><small>Syntax element</small>"]:::held
    n378["Side bar<br/><small>Syntax element</small>"]:::held
    n379["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n380["Colours of a status<br/><small>Syntax element</small>"]:::held
    n381["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n382["Theme<br/><small>Syntax element</small>"]:::held
    n383["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n384["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n385["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n386["System files, for reading<br/><small>Implementation</small>"]:::held
    n387["Trees on disk<br/><small>Implementation</small>"]:::held
    n388["System files, for writing<br/><small>Implementation</small>"]:::held
    n389["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n390["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n391["esbuild<br/><small>Implementation</small>"]:::held
    n392["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n393["Example process<br/><small>Function</small>"]:::held
    n394["Example project<br/><small>Decision</small>"]:::neutral
    n395["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n396["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n397["Amendments in place<br/><small>Implementation</small>"]:::held
    n398["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n399["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n400["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n401["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n402["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n403["A server in memory<br/><small>Function</small>"]:::held
    n404["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n405["Terminal in memory<br/><small>Function</small>"]:::held
    n406["Command line<br/><small>Implementation</small>"]:::held
    n407["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n408["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n409["Node HTTP server<br/><small>Implementation</small>"]:::held
    n410["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n411["Node paths<br/><small>Implementation</small>"]:::held
    n412["NodePlatform<br/><small>Technical choice</small>"]:::held
    n413["Node process<br/><small>Implementation</small>"]:::held
    n414["Node programs<br/><small>Implementation</small>"]:::held
    n415["Node terminal<br/><small>Implementation</small>"]:::held
    n416["Node timer<br/><small>Implementation</small>"]:::held
    n417["No installer in test<br/><small>Implementation</small>"]:::held
    n418["No registry in test<br/><small>Function</small>"]:::held
    n419["npm installs<br/><small>Implementation</small>"]:::held
    n420["npm's reports<br/><small>Implementation</small>"]:::held
    n421["Packages by their origin<br/><small>Implementation</small>"]:::held
    n422["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n423["Page resources<br/><small>Implementation</small>"]:::held
    n424["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n425["Results kept in the process<br/><small>Implementation</small>"]:::held
    n426["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n427["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n428["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n429["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n430["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n431["Stopped clock<br/><small>Function</small>"]:::held
    n432["System clock<br/><small>Implementation</small>"]:::held
    n433["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n434["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n435["Trame's prelude<br/><small>Implementation</small>"]:::held
    n436["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n437["tsx loader<br/><small>Implementation</small>"]:::held
    n438["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n439["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n440["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n441["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n442["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n443["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n444["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n445["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n446["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n447["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n448["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n449["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n450["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n451["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n452["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n453["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n454["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n455["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n456["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n457["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n458["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n459["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n460["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n461["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n462["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
    n463["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n464["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n465["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n466["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n467["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n468["Candidate dates<br/><small>Decision</small>"]:::neutral
    n469["Claim sets<br/><small>Decision</small>"]:::neutral
    n470["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n471["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n472["A specification that runs<br/><small>Goal</small>"]:::neutral
    n473["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n474["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n475["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n476["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n477["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n478["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n479["A single source of truth<br/><small>Goal</small>"]:::neutral
    n480["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n481["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n482["Generation 1<br/><small>Release</small>"]:::neutral
    n483["Generation 10<br/><small>Release</small>"]:::neutral
    n484["Generation 100<br/><small>Release</small>"]:::neutral
    n485["Generation 101<br/><small>Release</small>"]:::neutral
    n486["Generation 102<br/><small>Release</small>"]:::neutral
    n487["Generation 103<br/><small>Release</small>"]:::neutral
    n488["Generation 104<br/><small>Release</small>"]:::neutral
    n489["Generation 105<br/><small>Release</small>"]:::neutral
    n490["Generation 106<br/><small>Release</small>"]:::neutral
    n491["Generation 107<br/><small>Release</small>"]:::neutral
    n492["Generation 108<br/><small>Release</small>"]:::neutral
    n493["Generation 109<br/><small>Release</small>"]:::neutral
    n494["Generation 11<br/><small>Release</small>"]:::neutral
    n495["Generation 110<br/><small>Release</small>"]:::neutral
    n496["Generation 111<br/><small>Release</small>"]:::neutral
    n497["Generation 112<br/><small>Release</small>"]:::neutral
    n498["Generation 113<br/><small>Release</small>"]:::neutral
    n499["Generation 114<br/><small>Release</small>"]:::neutral
    n500["Generation 115<br/><small>Release</small>"]:::neutral
    n501["Generation 116<br/><small>Release</small>"]:::neutral
    n502["Generation 117<br/><small>Release</small>"]:::neutral
    n503["Generation 118<br/><small>Release</small>"]:::neutral
    n504["Generation 119<br/><small>Release</small>"]:::neutral
    n505["Generation 12<br/><small>Release</small>"]:::neutral
    n506["Generation 120<br/><small>Release</small>"]:::neutral
    n507["Generation 121<br/><small>Release</small>"]:::neutral
    n508["Generation 122<br/><small>Release</small>"]:::neutral
    n509["Generation 123<br/><small>Release</small>"]:::neutral
    n510["Generation 124<br/><small>Release</small>"]:::neutral
    n511["Generation 125<br/><small>Release</small>"]:::neutral
    n512["Generation 126<br/><small>Release</small>"]:::neutral
    n513["Generation 127<br/><small>Release</small>"]:::neutral
    n514["Generation 13<br/><small>Release</small>"]:::neutral
    n515["Generation 14<br/><small>Release</small>"]:::neutral
    n516["Generation 15<br/><small>Release</small>"]:::neutral
    n517["Generation 16<br/><small>Release</small>"]:::neutral
    n518["Generation 17<br/><small>Release</small>"]:::neutral
    n519["Generation 18<br/><small>Release</small>"]:::neutral
    n520["Generation 19<br/><small>Release</small>"]:::neutral
    n521["Generation 2<br/><small>Release</small>"]:::neutral
    n522["Generation 20<br/><small>Release</small>"]:::neutral
    n523["Generation 21<br/><small>Release</small>"]:::neutral
    n524["Generation 22<br/><small>Release</small>"]:::neutral
    n525["Generation 23<br/><small>Release</small>"]:::neutral
    n526["Generation 24<br/><small>Release</small>"]:::neutral
    n527["Generation 25<br/><small>Release</small>"]:::neutral
    n528["Generation 26<br/><small>Release</small>"]:::neutral
    n529["Generation 27<br/><small>Release</small>"]:::neutral
    n530["Generation 28<br/><small>Release</small>"]:::neutral
    n531["Generation 29<br/><small>Release</small>"]:::neutral
    n532["Generation 3<br/><small>Release</small>"]:::neutral
    n533["Generation 30<br/><small>Release</small>"]:::neutral
    n534["Generation 31<br/><small>Release</small>"]:::neutral
    n535["Generation 32<br/><small>Release</small>"]:::neutral
    n536["Generation 33<br/><small>Release</small>"]:::neutral
    n537["Generation 34<br/><small>Release</small>"]:::neutral
    n538["Generation 35<br/><small>Release</small>"]:::neutral
    n539["Generation 36<br/><small>Release</small>"]:::neutral
    n540["Generation 37<br/><small>Release</small>"]:::neutral
    n541["Generation 38<br/><small>Release</small>"]:::neutral
    n542["Generation 39<br/><small>Release</small>"]:::neutral
    n543["Generation 4<br/><small>Release</small>"]:::neutral
    n544["Generation 40<br/><small>Release</small>"]:::neutral
    n545["Generation 41<br/><small>Release</small>"]:::neutral
    n546["Generation 42<br/><small>Release</small>"]:::neutral
    n547["Generation 43<br/><small>Release</small>"]:::neutral
    n548["Generation 44<br/><small>Release</small>"]:::neutral
    n549["Generation 45<br/><small>Release</small>"]:::neutral
    n550["Generation 46<br/><small>Release</small>"]:::neutral
    n551["Generation 47<br/><small>Release</small>"]:::neutral
    n552["Generation 48<br/><small>Release</small>"]:::neutral
    n553["Generation 49<br/><small>Release</small>"]:::neutral
    n554["Generation 5<br/><small>Release</small>"]:::neutral
    n555["Generation 50<br/><small>Release</small>"]:::neutral
    n556["Generation 51<br/><small>Release</small>"]:::neutral
    n557["Generation 52<br/><small>Release</small>"]:::neutral
    n558["Generation 53<br/><small>Release</small>"]:::neutral
    n559["Generation 54<br/><small>Release</small>"]:::neutral
    n560["Generation 55<br/><small>Release</small>"]:::neutral
    n561["Generation 56<br/><small>Release</small>"]:::neutral
    n562["Generation 57<br/><small>Release</small>"]:::neutral
    n563["Generation 58<br/><small>Release</small>"]:::neutral
    n564["Generation 59<br/><small>Release</small>"]:::neutral
    n565["Generation 6<br/><small>Release</small>"]:::neutral
    n566["Generation 60<br/><small>Release</small>"]:::neutral
    n567["Generation 61<br/><small>Release</small>"]:::neutral
    n568["Generation 62<br/><small>Release</small>"]:::neutral
    n569["Generation 63<br/><small>Release</small>"]:::neutral
    n570["Generation 64<br/><small>Release</small>"]:::neutral
    n571["Generation 65<br/><small>Release</small>"]:::neutral
    n572["Generation 66<br/><small>Release</small>"]:::neutral
    n573["Generation 67<br/><small>Release</small>"]:::neutral
    n574["Generation 68<br/><small>Release</small>"]:::neutral
    n575["Generation 69<br/><small>Release</small>"]:::neutral
    n576["Generation 7<br/><small>Release</small>"]:::neutral
    n577["Generation 70<br/><small>Release</small>"]:::neutral
    n578["Generation 71<br/><small>Release</small>"]:::neutral
    n579["Generation 72<br/><small>Release</small>"]:::neutral
    n580["Generation 73<br/><small>Release</small>"]:::neutral
    n581["Generation 74<br/><small>Release</small>"]:::neutral
    n582["Generation 75<br/><small>Release</small>"]:::neutral
    n583["Generation 76<br/><small>Release</small>"]:::neutral
    n584["Generation 77<br/><small>Release</small>"]:::neutral
    n585["Generation 78<br/><small>Release</small>"]:::neutral
    n586["Generation 79<br/><small>Release</small>"]:::neutral
    n587["Generation 8<br/><small>Release</small>"]:::neutral
    n588["Generation 80<br/><small>Release</small>"]:::neutral
    n589["Generation 81<br/><small>Release</small>"]:::neutral
    n590["Generation 82<br/><small>Release</small>"]:::neutral
    n591["Generation 83<br/><small>Release</small>"]:::neutral
    n592["Generation 84<br/><small>Release</small>"]:::neutral
    n593["Generation 85<br/><small>Release</small>"]:::neutral
    n594["Generation 86<br/><small>Release</small>"]:::neutral
    n595["Generation 87<br/><small>Release</small>"]:::neutral
    n596["Generation 88<br/><small>Release</small>"]:::neutral
    n597["Generation 89<br/><small>Release</small>"]:::neutral
    n598["Generation 9<br/><small>Release</small>"]:::neutral
    n599["Generation 90<br/><small>Release</small>"]:::neutral
    n600["Generation 91<br/><small>Release</small>"]:::neutral
    n601["Generation 92<br/><small>Release</small>"]:::neutral
    n602["Generation 93<br/><small>Release</small>"]:::neutral
    n603["Generation 94<br/><small>Release</small>"]:::neutral
    n604["Generation 95<br/><small>Release</small>"]:::neutral
    n605["Generation 96<br/><small>Release</small>"]:::neutral
    n606["Generation 97<br/><small>Release</small>"]:::neutral
    n607["Generation 98<br/><small>Release</small>"]:::neutral
    n608["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n609["Common rendering<br/><small>Function</small>"]:::held
    n610["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n611["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n612["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n613["Rendering of the files<br/><small>Function</small>"]:::held
    n614["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n615["HTML writer<br/><small>Function</small>"]:::held
    n616["Markdown writer<br/><small>Function</small>"]:::held
    n617["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n618["Mermaid diagrams<br/><small>Function</small>"]:::held
    n619["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n620["Figures of the page<br/><small>Port</small>"]:::neutral
    n621["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n622["The page in HTML<br/><small>Technical choice</small>"]:::held
    n623["Rendering in the page<br/><small>Function</small>"]:::held
    n624["Syntax of the page<br/><small>Port</small>"]:::neutral
    n625["Plain text writer<br/><small>Function</small>"]:::held
    n626["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n627["Figures in SVG<br/><small>Function</small>"]:::held
    n628["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n629["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n630["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n631["Rendering in the terminal<br/><small>Function</small>"]:::held
    n632["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n633["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n634["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
    n635["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n636["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n637["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n638["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n639["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n640["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n641["EngineReckons<br/><small>Scenario</small>"]:::held
    n642["Shape of the example<br/><small>Decision</small>"]:::neutral
    n643["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n644["The names the sample add-ons give, and the order a choice gives them in: the second first.<br/><small>Decision</small>"]:::neutral
    n645["The first sample add-on<br/><small>Function</small>"]:::held
    n646["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n647["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n648["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n649["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
    n650["A sample extension point<br/><small>Port</small>"]:::neutral
    n651["The sample add-ons, second first<br/><small>Technical choice</small>"]:::held
    n652["The second sample add-on<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Trame · SDLC"]
    n653["Advance<br/><small>Entry point</small>"]:::held
    n654["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n655["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n656["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n657["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n658["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n659["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n660["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n661["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n662["The candidate plays the laws<br/><small>Check</small>"]:::held
    n663["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n664["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n665["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n666["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n667["The candidate engine<br/><small>Artefact</small>"]:::held
    n668["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n669["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n670["How a generation is made<br/><small>Policy</small>"]:::neutral
    n671["The graph page<br/><small>Artefact</small>"]:::held
    n672["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n673["The graph page opens<br/><small>Check</small>"]:::held
    n674["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n675["What the graph page is asked<br/><small>Function</small>"]:::held
    n676["How a generation advances<br/><small>Decision</small>"]:::neutral
    n677["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n678["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n679["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n680["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n681["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n682["How a change merges<br/><small>Policy</small>"]:::neutral
    n683["The next generation<br/><small>Shipment</small>"]:::held
    n684["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n685["Open the graph page<br/><small>Entry point</small>"]:::held
    n686["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n687["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n688["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n689["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n690["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n691["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n692["The page's program<br/><small>Artefact</small>"]:::held
    n693["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
    n694["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n695["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n696["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n697["The repository's projects<br/><small>Decision</small>"]:::neutral
    n698["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n699["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n700["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n701["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n702["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n703["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n704["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n705["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n706["How the repository is set<br/><small>Policy</small>"]:::neutral
    n707["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n708["The engine<br/><small>Artefact</small>"]:::unknown
    n709["Trame's repository<br/><small>Decision</small>"]:::neutral
    n710["Trame's SDLC<br/><small>Component</small>"]:::neutral
    n711["What the machine must also have<br/><small>Technical choice</small>"]:::unknown
  end
  subgraph shipping["Trame · Shipping"]
    n712["Attribution<br/><small>Function</small>"]:::held
    n713["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n714["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n715["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n716["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n717["Ship only what holds<br/><small>Requirement</small>"]:::held
    n718["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n719["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n720["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n721["tree-sitter queries<br/><small>Standard</small>"]:::neutral
    n722["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n723["Checks of a body<br/><small>Function</small>"]:::held
    n724["Captures<br/><small>Standard</small>"]:::neutral
    n725["Categories of literals<br/><small>Decision</small>"]:::neutral
    n726["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n727["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n728["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n729["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n730["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n731["Attribute<br/><small>Syntax element</small>"]:::held
    n732["Comment<br/><small>Syntax element</small>"]:::held
    n733["Text<br/><small>Syntax element</small>"]:::held
    n734["HCL<br/><small>Standard</small>"]:::neutral
    n735["Value<br/><small>Syntax element</small>"]:::held
    n736["Module call<br/><small>Syntax element</small>"]:::held
    n737["Terraform<br/><small>Language</small>"]:::held
    n738["Terraform modules<br/><small>Standard</small>"]:::neutral
    n739["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n740["Box drawing<br/><small>Standard</small>"]:::neutral
    n741["Code lines<br/><small>Syntax element</small>"]:::held
    n742["Columns<br/><small>Syntax element</small>"]:::held
    n743["Item line<br/><small>Syntax element</small>"]:::held
    n744["Padded cell<br/><small>Syntax element</small>"]:::held
    n745["Path step<br/><small>Syntax element</small>"]:::held
    n746["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n747["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n748["Terminal text<br/><small>Decision</small>"]:::neutral
    n749["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n750["List on several lines<br/><small>Syntax element</small>"]:::held
    n751["Type assertion<br/><small>Syntax element</small>"]:::held
    n752["Assignment<br/><small>Syntax element</small>"]:::held
    n753["Async function of a block<br/><small>Syntax element</small>"]:::held
    n754["Waiting<br/><small>Syntax element</small>"]:::held
    n755["Call<br/><small>Syntax element</small>"]:::held
    n756["Constant<br/><small>Syntax element</small>"]:::held
    n757["Default import<br/><small>Syntax element</small>"]:::held
    n758["Documentation comment<br/><small>Syntax element</small>"]:::held
    n759["Export<br/><small>Syntax element</small>"]:::held
    n760["Condition<br/><small>Syntax element</small>"]:::held
    n761["List on one line<br/><small>Syntax element</small>"]:::held
    n762["Comment<br/><small>Syntax element</small>"]:::held
    n763["Property access<br/><small>Syntax element</small>"]:::held
    n764["Title of a module<br/><small>Syntax element</small>"]:::held
    n765["Import of names<br/><small>Syntax element</small>"]:::held
    n766["Object on several lines<br/><small>Syntax element</small>"]:::held
    n767["Object<br/><small>Syntax element</small>"]:::held
    n768["Object type<br/><small>Syntax element</small>"]:::held
    n769["Optional property access<br/><small>Syntax element</small>"]:::held
    n770["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n771["Group<br/><small>Syntax element</small>"]:::held
    n772["Names of a program<br/><small>Decision</small>"]:::neutral
    n773["Property<br/><small>Syntax element</small>"]:::held
    n774["Strict inequality<br/><small>Syntax element</small>"]:::held
    n775["Text<br/><small>Syntax element</small>"]:::held
    n776["TypeScript<br/><small>Language</small>"]:::held
    n777["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n778["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n779["TypeScript writer<br/><small>Function</small>"]:::held
    n780["Union type<br/><small>Syntax element</small>"]:::held
    n781["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n383
  n58 -->|Depends on| n194
  n59 -->|Implements| n20
  n59 -->|Depends on| n368
  n60 -->|Implements| n24
  n60 -->|Depends on| n383
  n60 -->|Depends on| n194
  n61 -->|Implements| n37
  n61 -->|Depends on| n383
  n62 -->|Implements| n38
  n62 -->|Depends on| n244
  n63 -->|Serves| n472
  n63 -->|Depends on| n383
  n63 -->|Depends on| n301
  n63 -->|Depends on| n303
  n63 -->|Depends on| n302
  n63 -->|Depends on| n0
  n63 -->|Depends on| n238
  n63 -->|Depends on| n242
  n63 -->|Depends on| n250
  n63 -->|Depends on| n247
  n63 -->|Depends on| n229
  n63 -->|Depends on| n235
  n63 -->|Depends on| n609
  n63 -->|Depends on| n331
  n63 -->|Depends on| n333
  n63 -->|Depends on| n183
  n64 -->|Serves| n472
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n609
  n64 -->|Depends on| n383
  n64 -->|Depends on| n372
  n64 -->|Depends on| n375
  n64 -->|Depends on| n363
  n64 -->|Depends on| n301
  n64 -->|Depends on| n300
  n64 -->|Depends on| n302
  n64 -->|Depends on| n0
  n64 -->|Depends on| n151
  n64 -->|Depends on| n626
  n64 -->|Depends on| n183
  n64 -->|Depends on| n327
  n64 -->|Depends on| n238
  n64 -->|Depends on| n235
  n64 -->|Depends on| n227
  n64 -->|Depends on| n226
  n64 -->|Depends on| n249
  n64 -->|Depends on| n228
  n64 -->|Depends on| n331
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n473
  n66 -->|Serves| n472
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n114
  n67 -->|Verifies| n196
  n67 -->|In| n53
  n67 -->|Depends on| n114
  n67 -->|Depends on| n42
  n67 -->|Depends on| n57
  n67 -->|Depends on| n52
  n67 -->|Depends on| n41
  n67 -->|Depends on| n39
  n67 -->|Depends on| n156
  n67 -->|Depends on| n21
  n67 -->|Depends on| n23
  n67 -->|Depends on| n161
  n67 -->|Depends on| n318
  n67 -->|Depends on| n68
  n67 -->|Depends on| n334
  n71 -->|Verifies| n730
  n71 -->|Verifies| n723
  n71 -->|Verifies| n440
  n71 -->|In| n53
  n71 -->|Depends on| n730
  n71 -->|Depends on| n723
  n71 -->|Depends on| n776
  n71 -->|Depends on| n72
  n71 -->|Depends on| n324
  n71 -->|Depends on| n334
  n73 -->|Verifies| n132
  n73 -->|In| n53
  n73 -->|Depends on| n120
  n73 -->|Depends on| n132
  n73 -->|Depends on| n57
  n73 -->|Depends on| n52
  n73 -->|Depends on| n23
  n73 -->|Depends on| n41
  n73 -->|Depends on| n39
  n73 -->|Depends on| n156
  n73 -->|Depends on| n96
  n73 -->|Depends on| n161
  n73 -->|Depends on| n319
  n73 -->|Depends on| n334
  n74 -->|Verifies| n406
  n74 -->|Verifies| n405
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n161
  n74 -->|Depends on| n111
  n74 -->|Depends on| n332
  n74 -->|Depends on| n334
  n75 -->|Verifies| n117
  n75 -->|Verifies| n118
  n75 -->|Verifies| n188
  n75 -->|Verifies| n779
  n75 -->|Verifies| n739
  n75 -->|Verifies| n251
  n75 -->|Verifies| n431
  n75 -->|In| n53
  n75 -->|Depends on| n117
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n161
  n75 -->|Depends on| n156
  n75 -->|Depends on| n70
  n75 -->|Depends on| n152
  n75 -->|Depends on| n319
  n75 -->|Depends on| n334
  n76 -->|Verifies| n141
  n76 -->|In| n53
  n76 -->|Depends on| n141
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n161
  n76 -->|Depends on| n70
  n76 -->|Depends on| n104
  n76 -->|Depends on| n334
  n77 -->|Verifies| n135
  n77 -->|In| n53
  n77 -->|Depends on| n135
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n156
  n77 -->|Depends on| n161
  n77 -->|Depends on| n319
  n77 -->|Depends on| n334
  n78 -->|Verifies| n124
  n78 -->|Verifies| n193
  n78 -->|Verifies| n403
  n78 -->|Verifies| n416
  n78 -->|In| n53
  n78 -->|Depends on| n126
  n78 -->|Depends on| n124
  n78 -->|Depends on| n42
  n78 -->|Depends on| n47
  n78 -->|Depends on| n52
  n78 -->|Depends on| n23
  n78 -->|Depends on| n54
  n78 -->|Depends on| n41
  n78 -->|Depends on| n39
  n78 -->|Depends on| n156
  n78 -->|Depends on| n194
  n78 -->|Depends on| n470
  n78 -->|Depends on| n210
  n78 -->|Depends on| n161
  n78 -->|Depends on| n330
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n334
  n80 -->|Verifies| n125
  n80 -->|Verifies| n211
  n80 -->|Verifies| n427
  n80 -->|Verifies| n167
  n80 -->|Verifies| n168
  n80 -->|Verifies| n172
  n80 -->|Verifies| n179
  n80 -->|Verifies| n174
  n80 -->|Verifies| n176
  n80 -->|Verifies| n177
  n80 -->|Verifies| n178
  n80 -->|Verifies| n175
  n80 -->|Verifies| n173
  n80 -->|In| n53
  n80 -->|Depends on| n125
  n80 -->|Depends on| n42
  n80 -->|Depends on| n52
  n80 -->|Depends on| n169
  n80 -->|Depends on| n161
  n80 -->|Depends on| n319
  n80 -->|Depends on| n334
  n81 -->|Verifies| n133
  n81 -->|In| n53
  n81 -->|Depends on| n133
  n81 -->|Depends on| n161
  n81 -->|Depends on| n156
  n81 -->|Depends on| n334
  n82 -->|Verifies| n136
  n82 -->|In| n53
  n82 -->|Depends on| n136
  n82 -->|Depends on| n57
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n156
  n82 -->|Depends on| n719
  n82 -->|Depends on| n99
  n82 -->|Depends on| n161
  n82 -->|Depends on| n49
  n82 -->|Depends on| n334
  n83 -->|Verifies| n127
  n83 -->|In| n53
  n83 -->|Depends on| n127
  n83 -->|Depends on| n103
  n83 -->|Depends on| n334
  n84 -->|Verifies| n128
  n84 -->|In| n53
  n84 -->|Depends on| n128
  n84 -->|Depends on| n57
  n84 -->|Depends on| n161
  n84 -->|Depends on| n334
  n85 -->|Verifies| n190
  n85 -->|Verifies| n210
  n85 -->|In| n53
  n85 -->|Depends on| n190
  n85 -->|Depends on| n42
  n85 -->|Depends on| n41
  n85 -->|Depends on| n17
  n85 -->|Depends on| n105
  n85 -->|Depends on| n99
  n85 -->|Depends on| n714
  n85 -->|Depends on| n23
  n85 -->|Depends on| n334
  n86 -->|Verifies| n145
  n86 -->|In| n53
  n86 -->|Depends on| n145
  n86 -->|Depends on| n190
  n86 -->|Depends on| n217
  n86 -->|Depends on| n41
  n86 -->|Depends on| n52
  n86 -->|Depends on| n161
  n86 -->|Depends on| n319
  n86 -->|Depends on| n334
  n87 -->|Verifies| n122
  n87 -->|Verifies| n134
  n87 -->|Verifies| n130
  n87 -->|In| n53
  n87 -->|Depends on| n122
  n87 -->|Depends on| n130
  n87 -->|Depends on| n42
  n87 -->|Depends on| n52
  n87 -->|Depends on| n161
  n87 -->|Depends on| n99
  n87 -->|Depends on| n334
  n88 -->|Verifies| n139
  n88 -->|Verifies| n224
  n88 -->|Verifies| n400
  n88 -->|In| n53
  n88 -->|Depends on| n139
  n88 -->|Depends on| n42
  n88 -->|Depends on| n57
  n88 -->|Depends on| n52
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n156
  n88 -->|Depends on| n105
  n88 -->|Depends on| n99
  n88 -->|Depends on| n161
  n88 -->|Depends on| n775
  n88 -->|Depends on| n334
  n88 -->|Depends on| n719
  n89 -->|Verifies| n147
  n89 -->|Verifies| n421
  n89 -->|Verifies| n399
  n89 -->|Verifies| n417
  n89 -->|In| n53
  n89 -->|Depends on| n147
  n89 -->|Depends on| n42
  n89 -->|Depends on| n57
  n89 -->|Depends on| n21
  n89 -->|Depends on| n41
  n89 -->|Depends on| n39
  n89 -->|Depends on| n156
  n89 -->|Depends on| n105
  n89 -->|Depends on| n99
  n89 -->|Depends on| n161
  n89 -->|Depends on| n334
  n89 -->|Depends on| n155
  n89 -->|Depends on| n776
  n90 -->|Verifies| n119
  n90 -->|Verifies| n418
  n90 -->|In| n53
  n90 -->|Depends on| n119
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n52
  n90 -->|Depends on| n105
  n90 -->|Depends on| n161
  n90 -->|Depends on| n334
  n90 -->|Depends on| n346
  n91 -->|Verifies| n146
  n91 -->|Verifies| n421
  n91 -->|Verifies| n399
  n91 -->|In| n53
  n91 -->|Depends on| n146
  n91 -->|Depends on| n42
  n91 -->|Depends on| n57
  n91 -->|Depends on| n41
  n91 -->|Depends on| n39
  n91 -->|Depends on| n156
  n91 -->|Depends on| n105
  n91 -->|Depends on| n161
  n91 -->|Depends on| n334
  n92 -->|Verifies| n123
  n92 -->|Verifies| n166
  n92 -->|In| n53
  n92 -->|Depends on| n123
  n92 -->|Depends on| n42
  n92 -->|Depends on| n57
  n92 -->|Depends on| n105
  n92 -->|Depends on| n99
  n92 -->|Depends on| n234
  n92 -->|Depends on| n161
  n92 -->|Depends on| n334
  n93 -->|Verifies| n129
  n93 -->|Verifies| n192
  n93 -->|In| n53
  n93 -->|Depends on| n126
  n93 -->|Depends on| n129
  n93 -->|Depends on| n42
  n93 -->|Depends on| n57
  n93 -->|Depends on| n52
  n93 -->|Depends on| n210
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n156
  n93 -->|Depends on| n161
  n93 -->|Depends on| n330
  n93 -->|Depends on| n334
  n94 -->|Verifies| n369
  n94 -->|Verifies| n391
  n94 -->|Verifies| n407
  n94 -->|Verifies| n423
  n94 -->|In| n53
  n94 -->|Depends on| n126
  n94 -->|Depends on| n369
  n94 -->|Depends on| n19
  n94 -->|Depends on| n210
  n94 -->|Depends on| n41
  n94 -->|Depends on| n17
  n94 -->|Depends on| n52
  n94 -->|Depends on| n161
  n94 -->|Depends on| n330
  n94 -->|Depends on| n334
  n95 -->|Verifies| n126
  n95 -->|Verifies| n208
  n95 -->|Verifies| n623
  n95 -->|Verifies| n615
  n95 -->|Verifies| n627
  n95 -->|Verifies| n195
  n95 -->|In| n53
  n95 -->|Depends on| n126
  n95 -->|Depends on| n195
  n95 -->|Depends on| n52
  n95 -->|Depends on| n161
  n95 -->|Depends on| n330
  n95 -->|Depends on| n334
  n95 -->|Depends on| n109
  n97 -->|Verifies| n122
  n97 -->|Verifies| n134
  n97 -->|Verifies| n130
  n97 -->|In| n53
  n97 -->|Depends on| n122
  n97 -->|Depends on| n130
  n97 -->|Depends on| n134
  n97 -->|Depends on| n133
  n97 -->|Depends on| n42
  n97 -->|Depends on| n52
  n97 -->|Depends on| n161
  n97 -->|Depends on| n99
  n97 -->|Depends on| n319
  n97 -->|Depends on| n334
  n98 -->|Verifies| n131
  n98 -->|Verifies| n113
  n98 -->|In| n53
  n98 -->|Depends on| n131
  n98 -->|Depends on| n42
  n98 -->|Depends on| n57
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n158
  n98 -->|Depends on| n99
  n98 -->|Depends on| n161
  n98 -->|Depends on| n334
  n100 -->|Verifies| n131
  n100 -->|Verifies| n137
  n100 -->|In| n53
  n100 -->|Depends on| n131
  n100 -->|Depends on| n42
  n100 -->|Depends on| n57
  n100 -->|Depends on| n41
  n100 -->|Depends on| n39
  n100 -->|Depends on| n156
  n100 -->|Depends on| n105
  n100 -->|Depends on| n99
  n100 -->|Depends on| n158
  n100 -->|Depends on| n222
  n100 -->|Depends on| n161
  n100 -->|Depends on| n334
  n100 -->|Depends on| n155
  n100 -->|Depends on| n776
  n101 -->|Verifies| n135
  n101 -->|Verifies| n205
  n101 -->|In| n53
  n101 -->|Depends on| n135
  n101 -->|Depends on| n23
  n101 -->|Depends on| n21
  n101 -->|Depends on| n52
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n156
  n101 -->|Depends on| n161
  n101 -->|Depends on| n212
  n101 -->|Depends on| n69
  n101 -->|Depends on| n330
  n101 -->|Depends on| n334
  n102 -->|Verifies| n138
  n102 -->|Verifies| n400
  n102 -->|In| n53
  n102 -->|Depends on| n138
  n102 -->|Depends on| n42
  n102 -->|Depends on| n57
  n102 -->|Depends on| n161
  n102 -->|Depends on| n334
  n102 -->|Depends on| n155
  n102 -->|Depends on| n776
  n102 -->|Depends on| n99
  n106 -->|Verifies| n142
  n106 -->|Verifies| n136
  n106 -->|Verifies| n714
  n106 -->|Verifies| n213
  n106 -->|Verifies| n716
  n106 -->|Verifies| n408
  n106 -->|Verifies| n712
  n106 -->|Verifies| n196
  n106 -->|In| n53
  n106 -->|Depends on| n142
  n106 -->|Depends on| n136
  n106 -->|Depends on| n42
  n106 -->|Depends on| n57
  n106 -->|Depends on| n52
  n106 -->|Depends on| n41
  n106 -->|Depends on| n39
  n106 -->|Depends on| n22
  n106 -->|Depends on| n49
  n106 -->|Depends on| n23
  n106 -->|Depends on| n190
  n106 -->|Depends on| n17
  n106 -->|Depends on| n320
  n106 -->|Depends on| n156
  n106 -->|Depends on| n719
  n106 -->|Depends on| n105
  n106 -->|Depends on| n99
  n106 -->|Depends on| n161
  n106 -->|Depends on| n334
  n107 -->|Verifies| n144
  n107 -->|In| n53
  n107 -->|Depends on| n144
  n107 -->|Depends on| n57
  n107 -->|Depends on| n21
  n107 -->|Depends on| n41
  n107 -->|Depends on| n39
  n107 -->|Depends on| n156
  n107 -->|Depends on| n161
  n107 -->|Depends on| n334
  n108 -->|Verifies| n142
  n108 -->|Verifies| n213
  n108 -->|In| n53
  n108 -->|Depends on| n142
  n108 -->|Depends on| n42
  n108 -->|Depends on| n52
  n108 -->|Depends on| n41
  n108 -->|Depends on| n39
  n108 -->|Depends on| n22
  n108 -->|Depends on| n23
  n108 -->|Depends on| n190
  n108 -->|Depends on| n17
  n108 -->|Depends on| n213
  n108 -->|Depends on| n319
  n108 -->|Depends on| n156
  n108 -->|Depends on| n719
  n108 -->|Depends on| n105
  n108 -->|Depends on| n99
  n108 -->|Depends on| n161
  n108 -->|Depends on| n334
  n110 -->|Verifies| n115
  n110 -->|Verifies| n116
  n110 -->|Verifies| n121
  n110 -->|Verifies| n397
  n110 -->|In| n53
  n110 -->|Depends on| n115
  n110 -->|Depends on| n57
  n110 -->|Depends on| n41
  n110 -->|Depends on| n39
  n110 -->|Depends on| n161
  n110 -->|Depends on| n69
  n110 -->|Depends on| n334
  n112 -->|Verifies| n143
  n112 -->|Verifies| n122
  n112 -->|Verifies| n140
  n112 -->|Verifies| n631
  n112 -->|Verifies| n625
  n112 -->|Verifies| n633
  n112 -->|In| n53
  n112 -->|Depends on| n143
  n112 -->|Depends on| n122
  n112 -->|Depends on| n52
  n112 -->|Depends on| n161
  n112 -->|Depends on| n111
  n112 -->|Depends on| n334
  n113 -->|Serves| n472
  n113 -->|Depends on| n218
  n113 -->|Depends on| n319
  n114 -->|Serves| n472
  n114 -->|Part of| n55
  n114 -->|Depends on| n133
  n114 -->|Depends on| n196
  n114 -->|Depends on| n161
  n114 -->|Depends on| n156
  n114 -->|Depends on| n221
  n114 -->|Depends on| n219
  n114 -->|Depends on| n394
  n114 -->|Depends on| n433
  n114 -->|Depends on| n162
  n114 -->|Depends on| n776
  n114 -->|Depends on| n43
  n114 -->|Depends on| n22
  n114 -->|Depends on| n21
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n25
  n114 -->|Depends on| n197
  n114 -->|Depends on| n51
  n114 -->|Depends on| n742
  n114 -->|Depends on| n748
  n114 -->|Depends on| n319
  n114 -->|Depends on| n318
  n114 -->|Depends on| n222
  n114 -->|Depends on| n223
  n114 -->|Depends on| n225
  n114 -->|Depends on| n224
  n114 -->|Depends on| n153
  n114 -->|Depends on| n159
  n114 -->|Depends on| n17
  n114 -->|Depends on| n210
  n114 -->|Depends on| n155
  n115 -->|Serves| n479
  n115 -->|Part of| n55
  n115 -->|Depends on| n133
  n115 -->|Depends on| n116
  n115 -->|Depends on| n14
  n115 -->|Depends on| n39
  n115 -->|Depends on| n748
  n115 -->|Depends on| n51
  n115 -->|Depends on| n319
  n116 -->|Serves| n479
  n116 -->|Depends on| n133
  n116 -->|Depends on| n206
  n116 -->|Depends on| n121
  n116 -->|Depends on| n40
  n116 -->|Depends on| n212
  n116 -->|Depends on| n210
  n116 -->|Depends on| n156
  n116 -->|Depends on| n39
  n116 -->|Depends on| n319
  n116 -->|Depends on| n148
  n117 -->|Serves| n472
  n117 -->|Part of| n55
  n117 -->|Depends on| n133
  n117 -->|Depends on| n118
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n319
  n118 -->|Serves| n472
  n118 -->|Depends on| n133
  n118 -->|Depends on| n188
  n118 -->|Depends on| n748
  n118 -->|Depends on| n183
  n118 -->|Depends on| n319
  n119 -->|Serves| n479
  n119 -->|Part of| n55
  n119 -->|Depends on| n133
  n119 -->|Depends on| n34
  n119 -->|Depends on| n346
  n119 -->|Depends on| n156
  n119 -->|Depends on| n21
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n352
  n119 -->|Depends on| n153
  n119 -->|Depends on| n51
  n119 -->|Depends on| n742
  n119 -->|Depends on| n748
  n119 -->|Depends on| n319
  n120 -->|Serves| n472
  n120 -->|Part of| n55
  n120 -->|Depends on| n156
  n120 -->|Depends on| n133
  n120 -->|Depends on| n206
  n120 -->|Depends on| n613
  n120 -->|Depends on| n631
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n51
  n120 -->|Depends on| n319
  n121 -->|Serves| n472
  n121 -->|Depends on| n319
  n121 -->|Depends on| n330
  n122 -->|Serves| n472
  n122 -->|Part of| n55
  n122 -->|Depends on| n161
  n122 -->|Depends on| n133
  n122 -->|Depends on| n140
  n122 -->|Depends on| n190
  n122 -->|Depends on| n217
  n122 -->|Depends on| n118
  n122 -->|Depends on| n134
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n41
  n122 -->|Depends on| n51
  n122 -->|Depends on| n319
  n123 -->|Serves| n472
  n123 -->|Part of| n55
  n123 -->|Depends on| n133
  n123 -->|Depends on| n188
  n123 -->|Depends on| n118
  n123 -->|Depends on| n16
  n123 -->|Depends on| n166
  n123 -->|Depends on| n370
  n123 -->|Depends on| n371
  n123 -->|Depends on| n248
  n123 -->|Depends on| n165
  n123 -->|Depends on| n21
  n123 -->|Depends on| n23
  n123 -->|Depends on| n39
  n123 -->|Depends on| n51
  n123 -->|Depends on| n319
  n124 -->|Serves| n472
  n124 -->|Part of| n55
  n124 -->|Depends on| n133
  n124 -->|Depends on| n193
  n124 -->|Depends on| n116
  n124 -->|Depends on| n14
  n124 -->|Depends on| n39
  n125 -->|Serves| n472
  n125 -->|Part of| n55
  n125 -->|Depends on| n133
  n125 -->|Depends on| n170
  n125 -->|Depends on| n51
  n125 -->|Depends on| n319
  n125 -->|Depends on| n113
  n126 -->|Serves| n472
  n126 -->|Part of| n55
  n126 -->|Depends on| n133
  n126 -->|Depends on| n208
  n126 -->|Depends on| n613
  n126 -->|Depends on| n631
  n126 -->|Depends on| n623
  n126 -->|Depends on| n51
  n127 -->|Serves| n472
  n127 -->|Depends on| n56
  n127 -->|Depends on| n778
  n128 -->|Serves| n472
  n128 -->|Part of| n55
  n128 -->|Depends on| n133
  n128 -->|Depends on| n127
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n51
  n128 -->|Depends on| n161
  n128 -->|Depends on| n319
  n129 -->|Serves| n472
  n129 -->|Part of| n55
  n129 -->|Depends on| n156
  n129 -->|Depends on| n133
  n129 -->|Depends on| n192
  n129 -->|Depends on| n369
  n129 -->|Depends on| n210
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n51
  n129 -->|Depends on| n319
  n130 -->|Serves| n472
  n130 -->|Part of| n55
  n130 -->|Depends on| n133
  n130 -->|Depends on| n134
  n130 -->|Depends on| n217
  n130 -->|Depends on| n51
  n130 -->|Depends on| n744
  n130 -->|Depends on| n746
  n130 -->|Depends on| n319
  n131 -->|Serves| n479
  n131 -->|Part of| n55
  n131 -->|Depends on| n133
  n131 -->|Depends on| n156
  n131 -->|Depends on| n210
  n131 -->|Depends on| n40
  n131 -->|Depends on| n158
  n131 -->|Depends on| n222
  n131 -->|Depends on| n21
  n131 -->|Depends on| n23
  n131 -->|Depends on| n39
  n131 -->|Depends on| n153
  n131 -->|Depends on| n776
  n131 -->|Depends on| n778
  n131 -->|Depends on| n764
  n131 -->|Depends on| n758
  n131 -->|Depends on| n759
  n131 -->|Depends on| n756
  n131 -->|Depends on| n755
  n131 -->|Depends on| n767
  n131 -->|Depends on| n773
  n131 -->|Depends on| n775
  n131 -->|Depends on| n765
  n131 -->|Depends on| n51
  n131 -->|Depends on| n319
  n131 -->|Depends on| n41
  n131 -->|Depends on| n161
  n131 -->|Depends on| n137
  n131 -->|Depends on| n155
  n131 -->|Depends on| n763
  n131 -->|Depends on| n761
  n131 -->|Depends on| n113
  n131 -->|Depends on| n134
  n132 -->|Serves| n472
  n132 -->|Part of| n55
  n132 -->|Depends on| n156
  n132 -->|Depends on| n748
  n132 -->|Depends on| n133
  n132 -->|Depends on| n206
  n132 -->|Depends on| n121
  n132 -->|Depends on| n21
  n132 -->|Depends on| n39
  n132 -->|Depends on| n51
  n132 -->|Depends on| n319
  n133 -->|Serves| n472
  n133 -->|Depends on| n161
  n133 -->|Depends on| n190
  n133 -->|Depends on| n189
  n133 -->|Depends on| n203
  n133 -->|Depends on| n217
  n133 -->|Depends on| n205
  n133 -->|Depends on| n609
  n133 -->|Depends on| n51
  n133 -->|Depends on| n41
  n133 -->|Depends on| n17
  n133 -->|Depends on| n477
  n133 -->|Depends on| n471
  n133 -->|Depends on| n748
  n133 -->|Depends on| n746
  n133 -->|Depends on| n744
  n133 -->|Depends on| n319
  n133 -->|Depends on| n156
  n133 -->|Depends on| n212
  n133 -->|Depends on| n134
  n133 -->|Depends on| n154
  n133 -->|Depends on| n206
  n133 -->|Depends on| n39
  n133 -->|Depends on| n21
  n134 -->|Serves| n472
  n134 -->|Depends on| n218
  n134 -->|Depends on| n319
  n135 -->|Serves| n479
  n135 -->|Part of| n55
  n135 -->|Depends on| n133
  n135 -->|Depends on| n205
  n135 -->|Depends on| n23
  n135 -->|Depends on| n51
  n135 -->|Depends on| n748
  n135 -->|Depends on| n746
  n135 -->|Depends on| n744
  n135 -->|Depends on| n319
  n136 -->|Serves| n717
  n136 -->|Part of| n55
  n136 -->|Depends on| n161
  n136 -->|Depends on| n133
  n136 -->|Depends on| n714
  n136 -->|Depends on| n23
  n136 -->|Depends on| n39
  n136 -->|Depends on| n51
  n136 -->|Depends on| n319
  n137 -->|Serves| n479
  n137 -->|Depends on| n778
  n137 -->|Depends on| n764
  n137 -->|Depends on| n758
  n137 -->|Depends on| n759
  n137 -->|Depends on| n756
  n137 -->|Depends on| n755
  n137 -->|Depends on| n767
  n137 -->|Depends on| n773
  n137 -->|Depends on| n775
  n137 -->|Depends on| n761
  n137 -->|Depends on| n765
  n138 -->|Serves| n479
  n138 -->|Part of| n55
  n138 -->|Depends on| n133
  n138 -->|Depends on| n156
  n138 -->|Depends on| n210
  n138 -->|Depends on| n155
  n138 -->|Depends on| n21
  n138 -->|Depends on| n22
  n138 -->|Depends on| n39
  n138 -->|Depends on| n51
  n138 -->|Depends on| n319
  n139 -->|Serves| n479
  n139 -->|Part of| n55
  n139 -->|Depends on| n133
  n139 -->|Depends on| n156
  n139 -->|Depends on| n210
  n139 -->|Depends on| n206
  n139 -->|Depends on| n613
  n139 -->|Depends on| n277
  n139 -->|Depends on| n276
  n139 -->|Depends on| n225
  n139 -->|Depends on| n224
  n139 -->|Depends on| n21
  n139 -->|Depends on| n23
  n139 -->|Depends on| n22
  n139 -->|Depends on| n39
  n139 -->|Depends on| n25
  n139 -->|Depends on| n197
  n139 -->|Depends on| n776
  n139 -->|Depends on| n17
  n139 -->|Depends on| n51
  n139 -->|Depends on| n319
  n139 -->|Depends on| n318
  n139 -->|Depends on| n251
  n139 -->|Depends on| n775
  n139 -->|Depends on| n142
  n139 -->|Depends on| n161
  n140 -->|Serves| n472
  n140 -->|Depends on| n161
  n140 -->|Depends on| n153
  n140 -->|Depends on| n133
  n140 -->|Depends on| n217
  n140 -->|Depends on| n613
  n140 -->|Depends on| n631
  n140 -->|Depends on| n51
  n140 -->|Depends on| n319
  n141 -->|Serves| n472
  n141 -->|Part of| n55
  n141 -->|Depends on| n117
  n141 -->|Depends on| n41
  n142 -->|Serves| n717
  n142 -->|Part of| n55
  n142 -->|Depends on| n161
  n142 -->|Depends on| n133
  n142 -->|Depends on| n123
  n142 -->|Depends on| n188
  n142 -->|Depends on| n118
  n142 -->|Depends on| n714
  n142 -->|Depends on| n716
  n142 -->|Depends on| n717
  n142 -->|Depends on| n16
  n142 -->|Depends on| n166
  n142 -->|Depends on| n713
  n142 -->|Depends on| n41
  n142 -->|Depends on| n134
  n142 -->|Depends on| n21
  n142 -->|Depends on| n23
  n142 -->|Depends on| n39
  n142 -->|Depends on| n51
  n142 -->|Depends on| n196
  n142 -->|Depends on| n319
  n143 -->|Serves| n472
  n143 -->|Part of| n55
  n143 -->|Depends on| n133
  n143 -->|Depends on| n140
  n144 -->|Serves| n479
  n144 -->|Part of| n55
  n144 -->|Depends on| n156
  n144 -->|Depends on| n133
  n144 -->|Depends on| n206
  n144 -->|Depends on| n613
  n144 -->|Depends on| n23
  n144 -->|Depends on| n39
  n144 -->|Depends on| n51
  n144 -->|Depends on| n319
  n145 -->|Serves| n472
  n145 -->|Part of| n55
  n145 -->|Depends on| n133
  n145 -->|Depends on| n190
  n145 -->|Depends on| n217
  n145 -->|Depends on| n203
  n145 -->|Depends on| n51
  n145 -->|Depends on| n748
  n145 -->|Depends on| n746
  n145 -->|Depends on| n744
  n145 -->|Depends on| n319
  n146 -->|Serves| n479
  n146 -->|Part of| n55
  n146 -->|Depends on| n133
  n146 -->|Depends on| n21
  n146 -->|Depends on| n23
  n146 -->|Depends on| n39
  n146 -->|Depends on| n352
  n146 -->|Depends on| n775
  n146 -->|Depends on| n41
  n146 -->|Depends on| n161
  n146 -->|Depends on| n51
  n146 -->|Depends on| n319
  n147 -->|Serves| n479
  n147 -->|Part of| n55
  n147 -->|Depends on| n133
  n147 -->|Depends on| n156
  n147 -->|Depends on| n210
  n147 -->|Depends on| n21
  n147 -->|Depends on| n23
  n147 -->|Depends on| n155
  n147 -->|Depends on| n40
  n147 -->|Depends on| n222
  n147 -->|Depends on| n39
  n147 -->|Depends on| n33
  n147 -->|Depends on| n345
  n147 -->|Depends on| n153
  n147 -->|Depends on| n776
  n147 -->|Depends on| n51
  n147 -->|Depends on| n319
  n147 -->|Depends on| n41
  n147 -->|Depends on| n161
  n165 -->|Read in| n231
  n165 -->|Depends on| n230
  n165 -->|Depends on| n233
  n166 -->|Serves| n472
  n166 -->|Depends on| n31
  n166 -->|Depends on| n164
  n167 -->|Serves| n472
  n167 -->|Depends on| n319
  n168 -->|Implements| n170
  n168 -->|Depends on| n17
  n168 -->|Depends on| n167
  n168 -->|Depends on| n319
  n171 -->|Chooses| n168
  n171 -->|Chooses| n172
  n171 -->|Chooses| n179
  n171 -->|Chooses| n174
  n171 -->|Chooses| n176
  n171 -->|Chooses| n177
  n171 -->|Chooses| n178
  n171 -->|Chooses| n175
  n171 -->|Chooses| n173
  n171 -->|In| n30
  n171 -->|In| n53
  n172 -->|Implements| n170
  n172 -->|Depends on| n22
  n172 -->|Depends on| n21
  n172 -->|Depends on| n23
  n172 -->|Depends on| n39
  n172 -->|Depends on| n169
  n172 -->|Depends on| n167
  n172 -->|Depends on| n319
  n173 -->|Implements| n170
  n173 -->|Depends on| n22
  n173 -->|Depends on| n21
  n173 -->|Depends on| n23
  n173 -->|Depends on| n33
  n173 -->|Depends on| n156
  n173 -->|Depends on| n39
  n173 -->|Depends on| n167
  n173 -->|Depends on| n319
  n174 -->|Implements| n170
  n174 -->|Depends on| n22
  n174 -->|Depends on| n23
  n174 -->|Depends on| n43
  n174 -->|Depends on| n39
  n174 -->|Depends on| n169
  n174 -->|Depends on| n167
  n174 -->|Depends on| n319
  n175 -->|Implements| n170
  n175 -->|Depends on| n34
  n175 -->|Depends on| n41
  n175 -->|Depends on| n167
  n175 -->|Depends on| n319
  n176 -->|Implements| n170
  n176 -->|Depends on| n22
  n176 -->|Depends on| n23
  n176 -->|Depends on| n28
  n176 -->|Depends on| n39
  n176 -->|Depends on| n169
  n176 -->|Depends on| n167
  n176 -->|Depends on| n319
  n177 -->|Implements| n170
  n177 -->|Depends on| n26
  n177 -->|Depends on| n167
  n177 -->|Depends on| n319
  n178 -->|Implements| n170
  n178 -->|Depends on| n17
  n178 -->|Depends on| n54
  n178 -->|Depends on| n169
  n178 -->|Depends on| n167
  n178 -->|Depends on| n319
  n179 -->|Implements| n170
  n179 -->|Depends on| n22
  n179 -->|Depends on| n23
  n179 -->|Depends on| n41
  n179 -->|Depends on| n39
  n179 -->|Depends on| n169
  n179 -->|Depends on| n167
  n179 -->|Depends on| n319
  n183 -->|Serves| n479
  n183 -->|Depends on| n327
  n184 -->|Serves| n479
  n184 -->|Applied by| n183
  n184 -->|Applied by| n327
  n186 -->|Serves| n479
  n186 -->|Depends on| n182
  n187 -->|Serves| n479
  n188 -->|Serves| n472
  n188 -->|Depends on| n161
  n188 -->|Depends on| n156
  n188 -->|Depends on| n39
  n188 -->|Depends on| n218
  n188 -->|Depends on| n40
  n188 -->|Depends on| n251
  n188 -->|Depends on| n320
  n188 -->|Depends on| n155
  n188 -->|Depends on| n776
  n189 -->|Serves| n472
  n189 -->|Depends on| n149
  n189 -->|Depends on| n209
  n189 -->|Depends on| n212
  n189 -->|Depends on| n40
  n189 -->|Depends on| n183
  n189 -->|Depends on| n151
  n189 -->|Depends on| n156
  n189 -->|Depends on| n335
  n189 -->|Depends on| n213
  n189 -->|Depends on| n186
  n190 -->|Serves| n472
  n190 -->|Depends on| n156
  n190 -->|Depends on| n477
  n190 -->|Depends on| n191
  n190 -->|Depends on| n212
  n190 -->|Depends on| n209
  n190 -->|Depends on| n31
  n190 -->|Depends on| n21
  n190 -->|Depends on| n39
  n190 -->|Depends on| n214
  n190 -->|Depends on| n210
  n190 -->|Depends on| n200
  n190 -->|Depends on| n218
  n190 -->|Depends on| n251
  n190 -->|Depends on| n40
  n190 -->|Depends on| n320
  n190 -->|Depends on| n198
  n190 -->|Depends on| n49
  n190 -->|Depends on| n196
  n190 -->|Depends on| n28
  n190 -->|Depends on| n155
  n190 -->|Depends on| n201
  n191 -->|Serves| n472
  n192 -->|Serves| n472
  n192 -->|Depends on| n161
  n192 -->|Depends on| n17
  n192 -->|Depends on| n41
  n192 -->|Depends on| n330
  n193 -->|Serves| n472
  n193 -->|Depends on| n194
  n193 -->|Depends on| n161
  n193 -->|Depends on| n156
  n193 -->|Depends on| n51
  n193 -->|Depends on| n741
  n193 -->|Depends on| n17
  n193 -->|Depends on| n54
  n193 -->|Depends on| n470
  n193 -->|Depends on| n26
  n193 -->|Depends on| n21
  n193 -->|Depends on| n39
  n193 -->|Depends on| n210
  n193 -->|Depends on| n192
  n193 -->|Depends on| n195
  n193 -->|Depends on| n369
  n193 -->|Depends on| n623
  n193 -->|Depends on| n322
  n193 -->|Depends on| n327
  n193 -->|Depends on| n323
  n195 -->|Serves| n472
  n195 -->|Depends on| n183
  n195 -->|Depends on| n330
  n196 -->|Serves| n472
  n196 -->|Depends on| n156
  n196 -->|Depends on| n221
  n196 -->|Depends on| n776
  n196 -->|Depends on| n210
  n196 -->|Depends on| n21
  n196 -->|Depends on| n39
  n196 -->|Depends on| n25
  n196 -->|Depends on| n197
  n196 -->|Depends on| n153
  n198 -->|Serves| n472
  n199 -->|Serves| n472
  n200 -->|Serves| n472
  n200 -->|Depends on| n40
  n200 -->|Depends on| n159
  n200 -->|Depends on| n320
  n200 -->|Depends on| n329
  n200 -->|Depends on| n322
  n200 -->|Depends on| n183
  n200 -->|Depends on| n209
  n200 -->|Depends on| n212
  n200 -->|Depends on| n180
  n200 -->|Depends on| n199
  n200 -->|Depends on| n480
  n200 -->|Depends on| n156
  n200 -->|Depends on| n776
  n200 -->|Depends on| n352
  n200 -->|Depends on| n186
  n200 -->|Depends on| n187
  n200 -->|Depends on| n198
  n201 -->|Serves| n472
  n201 -->|Depends on| n477
  n201 -->|Depends on| n320
  n203 -->|Serves| n472
  n203 -->|Depends on| n27
  n203 -->|Depends on| n251
  n203 -->|Depends on| n157
  n203 -->|Depends on| n156
  n203 -->|Depends on| n474
  n203 -->|Depends on| n469
  n203 -->|Depends on| n199
  n203 -->|Depends on| n475
  n203 -->|Depends on| n476
  n203 -->|Depends on| n212
  n203 -->|Depends on| n21
  n203 -->|Depends on| n39
  n203 -->|Depends on| n210
  n203 -->|Depends on| n200
  n203 -->|Depends on| n40
  n203 -->|Depends on| n155
  n203 -->|Depends on| n328
  n203 -->|Depends on| n259
  n203 -->|Depends on| n253
  n203 -->|Depends on| n255
  n203 -->|Depends on| n263
  n203 -->|Depends on| n272
  n203 -->|Depends on| n269
  n203 -->|Depends on| n267
  n203 -->|Depends on| n257
  n204 -->|Serves| n271
  n204 -->|Applied by| n203
  n204 -->|Applied by| n217
  n205 -->|Serves| n479
  n205 -->|Depends on| n156
  n205 -->|Depends on| n153
  n205 -->|Depends on| n212
  n205 -->|Depends on| n285
  n205 -->|Depends on| n21
  n205 -->|Depends on| n39
  n205 -->|Depends on| n40
  n205 -->|Depends on| n330
  n206 -->|Serves| n479
  n206 -->|Depends on| n153
  n206 -->|Depends on| n209
  n206 -->|Depends on| n40
  n206 -->|Depends on| n330
  n208 -->|Serves| n472
  n208 -->|Depends on| n156
  n208 -->|Depends on| n468
  n208 -->|Depends on| n207
  n208 -->|Depends on| n17
  n208 -->|Depends on| n206
  n208 -->|Depends on| n217
  n208 -->|Depends on| n327
  n209 -->|Serves| n472
  n209 -->|Depends on| n722
  n210 -->|Serves| n472
  n210 -->|Depends on| n156
  n210 -->|Depends on| n21
  n210 -->|Depends on| n39
  n210 -->|Depends on| n222
  n210 -->|Depends on| n40
  n210 -->|Depends on| n155
  n210 -->|Depends on| n776
  n211 -->|Serves| n472
  n211 -->|Implements| n28
  n211 -->|Depends on| n21
  n211 -->|Depends on| n39
  n211 -->|Depends on| n25
  n211 -->|Depends on| n202
  n211 -->|Depends on| n46
  n212 -->|Serves| n472
  n212 -->|Depends on| n159
  n212 -->|Depends on| n274
  n213 -->|Serves| n472
  n213 -->|Depends on| n319
  n214 -->|Serves| n472
  n214 -->|Depends on| n778
  n214 -->|Depends on| n212
  n214 -->|Depends on| n216
  n214 -->|Depends on| n56
  n214 -->|Depends on| n27
  n214 -->|Depends on| n46
  n214 -->|Depends on| n25
  n214 -->|Depends on| n39
  n214 -->|Depends on| n209
  n214 -->|Depends on| n150
  n214 -->|Depends on| n320
  n214 -->|Depends on| n777
  n214 -->|Depends on| n157
  n214 -->|Depends on| n40
  n215 -->|Serves| n479
  n215 -->|Applied by| n200
  n215 -->|Applied by| n217
  n217 -->|Serves| n472
  n217 -->|Depends on| n251
  n217 -->|Depends on| n149
  n217 -->|Depends on| n163
  n217 -->|Depends on| n151
  n217 -->|Depends on| n156
  n217 -->|Depends on| n31
  n217 -->|Depends on| n21
  n217 -->|Depends on| n39
  n217 -->|Depends on| n40
  n217 -->|Depends on| n210
  n217 -->|Depends on| n330
  n217 -->|Depends on| n335
  n217 -->|Depends on| n261
  n217 -->|Depends on| n253
  n217 -->|Depends on| n269
  n217 -->|Depends on| n265
  n218 -->|Serves| n472
  n218 -->|Depends on| n160
  n218 -->|Depends on| n159
  n218 -->|Depends on| n156
  n218 -->|Depends on| n39
  n218 -->|Depends on| n40
  n218 -->|Depends on| n251
  n218 -->|Depends on| n320
  n219 -->|Refines| n472
  n220 -->|Accepts| n219
  n224 -->|Serves| n472
  n224 -->|Depends on| n225
  n224 -->|Depends on| n778
  n224 -->|Depends on| n159
  n224 -->|Depends on| n758
  n224 -->|Depends on| n764
  n224 -->|Depends on| n762
  n224 -->|Depends on| n765
  n224 -->|Depends on| n759
  n224 -->|Depends on| n756
  n224 -->|Depends on| n755
  n224 -->|Depends on| n766
  n224 -->|Depends on| n773
  n224 -->|Depends on| n775
  n224 -->|Depends on| n761
  n226 -->|Read in| n231
  n227 -->|Read in| n231
  n228 -->|Read in| n231
  n229 -->|Read in| n231
  n230 -->|Read in| n231
  n231 -->|Queries written in| n721
  n231 -->|Read by| n730
  n231 -->|Uses| n338
  n232 -->|Read in| n231
  n233 -->|Read in| n231
  n233 -->|Depends on| n229
  n234 -->|Read in| n241
  n235 -->|Read in| n241
  n236 -->|Read in| n241
  n237 -->|Read in| n241
  n237 -->|Depends on| n242
  n237 -->|Depends on| n239
  n238 -->|Read in| n241
  n238 -->|Depends on| n242
  n238 -->|Depends on| n239
  n239 -->|Read in| n241
  n240 -->|Read in| n241
  n240 -->|Depends on| n238
  n241 -->|Queries written in| n721
  n241 -->|Read by| n730
  n241 -->|Uses| n342
  n242 -->|Read in| n241
  n242 -->|Depends on| n236
  n243 -->|Read in| n776
  n244 -->|Read in| n231
  n245 -->|Read in| n231
  n246 -->|Read in| n231
  n248 -->|Read in| n241
  n248 -->|Depends on| n238
  n249 -->|Read in| n231
  n250 -->|Read in| n241
  n250 -->|Depends on| n236
  n251 -->|Serves| n472
  n251 -->|Depends on| n730
  n251 -->|Depends on| n723
  n251 -->|Depends on| n776
  n251 -->|Depends on| n231
  n251 -->|Depends on| n779
  n251 -->|Depends on| n737
  n251 -->|Depends on| n738
  n251 -->|Depends on| n739
  n251 -->|Depends on| n31
  n251 -->|Depends on| n21
  n251 -->|Depends on| n39
  n251 -->|Depends on| n324
  n252 -->|Serves| n472
  n252 -->|Applied by| n251
  n252 -->|Applied by| n369
  n253 -->|Refines| n271
  n254 -->|Accepts| n253
  n255 -->|Refines| n271
  n256 -->|Accepts| n255
  n257 -->|Refines| n271
  n258 -->|Accepts| n257
  n259 -->|Refines| n271
  n260 -->|Accepts| n259
  n261 -->|Refines| n271
  n262 -->|Accepts| n261
  n263 -->|Refines| n271
  n264 -->|Accepts| n263
  n265 -->|Refines| n271
  n266 -->|Accepts| n265
  n267 -->|Refines| n269
  n267 -->|Depends on| n269
  n268 -->|Accepts| n267
  n269 -->|Refines| n271
  n270 -->|Accepts| n269
  n272 -->|Refines| n271
  n273 -->|Accepts| n272
  n274 -->|Refines| n481
  n275 -->|Accepts| n274
  n277 -->|Refines| n481
  n278 -->|Accepts| n277
  n279 -->|Read in| n241
  n279 -->|Depends on| n238
  n280 -->|Defined by| n286
  n280 -->|Depends on| n286
  n281 -->|Defined by| n286
  n281 -->|Depends on| n286
  n282 -->|Defined by| n286
  n282 -->|Depends on| n286
  n283 -->|Defined by| n286
  n283 -->|Depends on| n286
  n283 -->|Depends on| n281
  n284 -->|Defined by| n286
  n284 -->|Depends on| n286
  n284 -->|Depends on| n280
  n285 -->|Defined by| n286
  n285 -->|Depends on| n286
  n285 -->|Depends on| n280
  n287 -->|Read in| n241
  n287 -->|Depends on| n242
  n287 -->|Depends on| n239
  n287 -->|Depends on| n238
  n287 -->|Depends on| n281
  n288 -->|Defined by| n286
  n288 -->|Depends on| n286
  n290 -->|Defined by| n286
  n290 -->|Depends on| n286
  n291 -->|Defined by| n286
  n291 -->|Depends on| n286
  n292 -->|Defined by| n286
  n292 -->|Depends on| n286
  n293 -->|Depends on| n156
  n294 -->|Read in| n241
  n294 -->|Depends on| n238
  n295 -->|Defined by| n286
  n295 -->|Depends on| n286
  n296 -->|Defined by| n289
  n296 -->|Depends on| n289
  n296 -->|Depends on| n299
  n296 -->|Depends on| n298
  n297 -->|Defined by| n289
  n297 -->|Depends on| n289
  n297 -->|Depends on| n286
  n298 -->|Defined by| n289
  n298 -->|Depends on| n289
  n299 -->|Defined by| n289
  n299 -->|Depends on| n289
  n299 -->|Depends on| n286
  n304 -->|Defined by| n310
  n304 -->|Depends on| n310
  n304 -->|Depends on| n316
  n305 -->|Defined by| n310
  n305 -->|Depends on| n310
  n306 -->|Defined by| n310
  n306 -->|Depends on| n310
  n307 -->|Defined by| n310
  n307 -->|Depends on| n310
  n308 -->|Defined by| n310
  n308 -->|Depends on| n310
  n308 -->|Depends on| n307
  n309 -->|Defined by| n310
  n309 -->|Depends on| n310
  n309 -->|Depends on| n307
  n311 -->|Defined by| n310
  n311 -->|Depends on| n310
  n312 -->|Defined by| n310
  n312 -->|Depends on| n310
  n312 -->|Depends on| n311
  n313 -->|Defined by| n310
  n313 -->|Depends on| n310
  n313 -->|Depends on| n311
  n314 -->|Defined by| n310
  n314 -->|Depends on| n310
  n314 -->|Depends on| n309
  n315 -->|Defined by| n310
  n315 -->|Depends on| n310
  n315 -->|Depends on| n316
  n316 -->|Defined by| n310
  n316 -->|Depends on| n310
  n317 -->|Defined by| n310
  n317 -->|Depends on| n310
  n317 -->|Depends on| n311
  n318 -->|Written in| n327
  n318 -->|Depends on| n327
  n319 -->|Written in| n327
  n319 -->|Depends on| n327
  n320 -->|Written in| n327
  n320 -->|Depends on| n327
  n320 -->|Depends on| n329
  n321 -->|Serves| n479
  n321 -->|Applied by| n320
  n321 -->|Applied by| n335
  n321 -->|Applied by| n323
  n321 -->|Applied by| n319
  n321 -->|Applied by| n334
  n321 -->|Applied by| n318
  n321 -->|Applied by| n331
  n321 -->|Applied by| n329
  n322 -->|Serves| n479
  n322 -->|Depends on| n327
  n323 -->|Written in| n327
  n323 -->|Depends on| n327
  n323 -->|Depends on| n329
  n324 -->|Written in| n327
  n325 -->|Written in| n327
  n326 -->|Written in| n327
  n328 -->|Written in| n327
  n329 -->|Serves| n479
  n329 -->|Depends on| n327
  n330 -->|Written in| n327
  n331 -->|Written in| n327
  n331 -->|Depends on| n327
  n332 -->|Written in| n327
  n333 -->|Written in| n327
  n334 -->|Written in| n327
  n334 -->|Depends on| n327
  n335 -->|Written in| n327
  n335 -->|Depends on| n327
  n336 -->|Written in| n327
  n337 -->|Serves| n479
  n340 -->|Serves| n479
  n343 -->|Serves| n479
  n345 -->|Serves| n479
  n347 -->|Serves| n479
  n348 -->|Serves| n479
  n352 -->|Serves| n479
  n354 -->|Defined by| n383
  n354 -->|Read in| n241
  n354 -->|Depends on| n383
  n354 -->|Depends on| n372
  n354 -->|Depends on| n238
  n355 -->|Defined by| n383
  n355 -->|Read in| n241
  n355 -->|Depends on| n383
  n355 -->|Depends on| n161
  n355 -->|Depends on| n362
  n355 -->|Depends on| n237
  n355 -->|Depends on| n238
  n356 -->|Defined by| n383
  n356 -->|Read in| n241
  n356 -->|Depends on| n383
  n356 -->|Depends on| n372
  n356 -->|Depends on| n238
  n357 -->|Defined by| n383
  n357 -->|Read in| n241
  n357 -->|Depends on| n383
  n357 -->|Depends on| n372
  n357 -->|Depends on| n237
  n357 -->|Depends on| n238
  n358 -->|Defined by| n383
  n358 -->|Read in| n241
  n358 -->|Depends on| n383
  n358 -->|Depends on| n372
  n358 -->|Depends on| n237
  n358 -->|Depends on| n238
  n358 -->|Depends on| n376
  n359 -->|Defined by| n383
  n359 -->|Read in| n241
  n359 -->|Depends on| n383
  n359 -->|Depends on| n372
  n359 -->|Depends on| n237
  n359 -->|Depends on| n238
  n360 -->|Defined by| n383
  n360 -->|Read in| n241
  n360 -->|Depends on| n383
  n360 -->|Depends on| n303
  n360 -->|Depends on| n1
  n360 -->|Depends on| n237
  n360 -->|Depends on| n238
  n360 -->|Depends on| n250
  n360 -->|Depends on| n247
  n361 -->|Read in| n241
  n361 -->|Depends on| n242
  n362 -->|Defined by| n383
  n362 -->|Read in| n241
  n362 -->|Depends on| n383
  n362 -->|Depends on| n7
  n362 -->|Depends on| n237
  n362 -->|Depends on| n238
  n362 -->|Depends on| n250
  n362 -->|Depends on| n232
  n364 -->|Defined by| n383
  n364 -->|Read in| n241
  n364 -->|Depends on| n383
  n364 -->|Depends on| n372
  n364 -->|Depends on| n237
  n364 -->|Depends on| n238
  n364 -->|Depends on| n354
  n364 -->|Depends on| n358
  n365 -->|Defined by| n383
  n365 -->|Read in| n231
  n365 -->|Depends on| n383
  n365 -->|Depends on| n245
  n365 -->|Depends on| n244
  n366 -->|Uses the variables of| n9
  n366 -->|Uses the variables of| n12
  n366 -->|Uses the variables of| n6
  n366 -->|Styles| n369
  n367 -->|Defined by| n383
  n367 -->|Read in| n241
  n367 -->|Depends on| n383
  n367 -->|Depends on| n372
  n367 -->|Depends on| n238
  n369 -->|Serves| n472
  n369 -->|Depends on| n370
  n369 -->|Depends on| n379
  n369 -->|Depends on| n7
  n369 -->|Depends on| n13
  n369 -->|Depends on| n4
  n369 -->|Depends on| n9
  n369 -->|Depends on| n8
  n369 -->|Depends on| n12
  n369 -->|Depends on| n5
  n369 -->|Depends on| n10
  n369 -->|Depends on| n3
  n369 -->|Depends on| n6
  n369 -->|Depends on| n45
  n369 -->|Depends on| n21
  n369 -->|Depends on| n16
  n369 -->|Depends on| n19
  n369 -->|Depends on| n377
  n369 -->|Depends on| n382
  n369 -->|Depends on| n380
  n369 -->|Depends on| n365
  n369 -->|Depends on| n361
  n369 -->|Depends on| n373
  n369 -->|Depends on| n371
  n369 -->|Depends on| n230
  n369 -->|Depends on| n229
  n369 -->|Depends on| n330
  n369 -->|Depends on| n327
  n369 -->|Depends on| n730
  n369 -->|Depends on| n241
  n369 -->|Depends on| n231
  n371 -->|Defined by| n383
  n371 -->|Read in| n241
  n371 -->|Depends on| n383
  n371 -->|Depends on| n234
  n371 -->|Depends on| n242
  n371 -->|Depends on| n239
  n371 -->|Depends on| n238
  n373 -->|Defined by| n383
  n373 -->|Read in| n241
  n373 -->|Depends on| n383
  n373 -->|Depends on| n248
  n373 -->|Depends on| n243
  n373 -->|Depends on| n763
  n373 -->|Depends on| n752
  n374 -->|Uses the variables of| n7
  n374 -->|Uses the variables of| n13
  n374 -->|Uses the variables of| n9
  n374 -->|Uses the variables of| n8
  n374 -->|Uses the variables of| n12
  n374 -->|Uses the variables of| n5
  n374 -->|Uses the variables of| n10
  n374 -->|Uses the variables of| n3
  n374 -->|Uses the variables of| n6
  n374 -->|Styles| n369
  n376 -->|Defined by| n383
  n376 -->|Read in| n241
  n376 -->|Depends on| n383
  n376 -->|Depends on| n375
  n376 -->|Depends on| n372
  n376 -->|Depends on| n237
  n376 -->|Depends on| n238
  n377 -->|Defined by| n383
  n377 -->|Read in| n241
  n377 -->|Depends on| n383
  n377 -->|Depends on| n237
  n377 -->|Depends on| n378
  n377 -->|Depends on| n364
  n377 -->|Depends on| n360
  n378 -->|Defined by| n383
  n378 -->|Read in| n241
  n378 -->|Depends on| n383
  n378 -->|Depends on| n237
  n378 -->|Depends on| n355
  n378 -->|Depends on| n356
  n378 -->|Depends on| n357
  n378 -->|Depends on| n367
  n378 -->|Depends on| n359
  n380 -->|Defined by| n383
  n380 -->|Read in| n231
  n380 -->|Depends on| n383
  n380 -->|Depends on| n230
  n380 -->|Depends on| n229
  n380 -->|Depends on| n232
  n380 -->|Depends on| n228
  n381 -->|Serves| n479
  n381 -->|Applied by| n374
  n381 -->|Applied by| n366
  n381 -->|Applied by| n382
  n381 -->|Applied by| n365
  n381 -->|Applied by| n369
  n382 -->|Defined by| n383
  n382 -->|Read in| n231
  n382 -->|Depends on| n383
  n382 -->|Depends on| n230
  n382 -->|Depends on| n245
  n382 -->|Depends on| n244
  n382 -->|Depends on| n227
  n382 -->|Depends on| n246
  n382 -->|Depends on| n233
  n382 -->|Depends on| n229
  n384 -->|Chooses| n397
  n384 -->|In| n30
  n384 -->|In| n53
  n384 -->|Serves| n473
  n385 -->|Chooses| n424
  n385 -->|In| n30
  n385 -->|In| n53
  n385 -->|Serves| n473
  n386 -->|Implements| n21
  n387 -->|Implements| n22
  n388 -->|Implements| n23
  n390 -->|Chooses| n435
  n390 -->|Chooses| n423
  n390 -->|In| n30
  n390 -->|In| n53
  n390 -->|Serves| n473
  n391 -->|Implements| n16
  n391 -->|Uses| n339
  n392 -->|Chooses| n391
  n392 -->|In| n30
  n392 -->|In| n53
  n392 -->|Serves| n473
  n393 -->|Implements| n41
  n393 -->|Implements| n43
  n393 -->|Implements| n42
  n393 -->|Depends on| n394
  n393 -->|Depends on| n39
  n393 -->|Depends on| n161
  n393 -->|Depends on| n332
  n395 -->|Chooses| n402
  n395 -->|Chooses| n417
  n395 -->|In| n53
  n395 -->|Serves| n473
  n396 -->|Chooses| n405
  n396 -->|Chooses| n431
  n396 -->|Chooses| n418
  n396 -->|Chooses| n393
  n396 -->|Chooses| n403
  n396 -->|In| n53
  n396 -->|Serves| n473
  n397 -->|Implements| n14
  n397 -->|Depends on| n21
  n397 -->|Depends on| n23
  n397 -->|Depends on| n778
  n397 -->|Depends on| n758
  n397 -->|Depends on| n759
  n397 -->|Depends on| n756
  n397 -->|Depends on| n755
  n397 -->|Depends on| n767
  n397 -->|Depends on| n773
  n397 -->|Depends on| n775
  n397 -->|Depends on| n761
  n397 -->|Depends on| n765
  n399 -->|Depends on| n22
  n399 -->|Depends on| n23
  n399 -->|Depends on| n21
  n399 -->|Depends on| n39
  n400 -->|Depends on| n22
  n400 -->|Depends on| n23
  n400 -->|Depends on| n21
  n400 -->|Depends on| n39
  n400 -->|Depends on| n401
  n400 -->|Depends on| n156
  n402 -->|Implements| n21
  n402 -->|Implements| n23
  n402 -->|Implements| n22
  n402 -->|Implements| n57
  n402 -->|Depends on| n39
  n402 -->|Depends on| n404
  n402 -->|Depends on| n332
  n403 -->|Implements| n26
  n403 -->|Implements| n47
  n403 -->|Depends on| n332
  n405 -->|Implements| n51
  n405 -->|Implements| n52
  n405 -->|Depends on| n398
  n405 -->|Depends on| n332
  n406 -->|Implements| n18
  n406 -->|Depends on| n51
  n406 -->|Depends on| n161
  n406 -->|Depends on| n154
  n406 -->|Depends on| n332
  n407 -->|Implements| n19
  n407 -->|Depends on| n368
  n408 -->|Implements| n25
  n409 -->|Implements| n26
  n410 -->|Chooses| n386
  n410 -->|Chooses| n388
  n410 -->|Chooses| n387
  n410 -->|Chooses| n413
  n410 -->|Chooses| n414
  n410 -->|Chooses| n415
  n410 -->|Chooses| n432
  n410 -->|Chooses| n420
  n410 -->|Chooses| n419
  n410 -->|Chooses| n409
  n410 -->|In| n30
  n410 -->|Serves| n473
  n411 -->|Implements| n39
  n412 -->|Chooses| n411
  n412 -->|Chooses| n408
  n412 -->|Chooses| n407
  n412 -->|Chooses| n416
  n412 -->|Chooses| n406
  n412 -->|Chooses| n425
  n412 -->|In| n30
  n412 -->|In| n53
  n412 -->|Serves| n473
  n413 -->|Implements| n41
  n413 -->|Depends on| n439
  n413 -->|Depends on| n162
  n414 -->|Implements| n43
  n414 -->|Depends on| n439
  n415 -->|Implements| n51
  n415 -->|Depends on| n332
  n416 -->|Implements| n54
  n417 -->|Implements| n33
  n417 -->|Depends on| n23
  n417 -->|Depends on| n39
  n417 -->|Depends on| n156
  n417 -->|Depends on| n345
  n418 -->|Implements| n34
  n419 -->|Implements| n33
  n420 -->|Implements| n34
  n420 -->|Depends on| n183
  n421 -->|Depends on| n399
  n421 -->|Depends on| n400
  n422 -->|Chooses| n421
  n422 -->|In| n30
  n422 -->|In| n53
  n422 -->|Serves| n473
  n423 -->|Implements| n45
  n423 -->|Depends on| n389
  n423 -->|Depends on| n156
  n423 -->|Depends on| n221
  n423 -->|Depends on| n776
  n424 -->|Implements| n56
  n424 -->|Uses| n351
  n424 -->|Uses| n344
  n425 -->|Implements| n27
  n426 -->|Chooses| n211
  n426 -->|In| n30
  n426 -->|In| n53
  n426 -->|Serves| n473
  n427 -->|Implements| n46
  n428 -->|Chooses| n427
  n428 -->|In| n53
  n428 -->|Serves| n473
  n429 -->|Chooses| n430
  n429 -->|In| n30
  n429 -->|Serves| n473
  n430 -->|Implements| n46
  n430 -->|Depends on| n156
  n430 -->|Depends on| n389
  n430 -->|Depends on| n196
  n430 -->|Depends on| n202
  n431 -->|Implements| n17
  n431 -->|Depends on| n433
  n431 -->|Depends on| n434
  n432 -->|Implements| n17
  n432 -->|Depends on| n162
  n435 -->|Implements| n40
  n435 -->|Depends on| n389
  n436 -->|Chooses| n440
  n436 -->|In| n30
  n436 -->|In| n53
  n436 -->|Serves| n473
  n437 -->|Implements| n31
  n437 -->|Uses| n349
  n437 -->|Depends on| n40
  n437 -->|Depends on| n155
  n437 -->|Depends on| n776
  n438 -->|Chooses| n437
  n438 -->|In| n30
  n438 -->|In| n53
  n438 -->|Serves| n473
  n440 -->|Implements| n50
  n440 -->|Uses| n353
  n440 -->|Depends on| n332
  n441 -->|Serves| n472
  n441 -->|Applied by| n190
  n441 -->|Applied by| n131
  n442 -->|Serves| n479
  n442 -->|Applied by| n190
  n442 -->|Applied by| n203
  n443 -->|Serves| n479
  n443 -->|Applied by| n198
  n443 -->|Applied by| n200
  n444 -->|Serves| n472
  n444 -->|Applied by| n123
  n444 -->|Applied by| n165
  n445 -->|Serves| n472
  n445 -->|Applied by| n55
  n445 -->|Applied by| n44
  n445 -->|Applied by| n32
  n445 -->|Applied by| n29
  n446 -->|Serves| n479
  n446 -->|Applied by| n190
  n446 -->|Applied by| n730
  n447 -->|Serves| n472
  n447 -->|Applied by| n114
  n447 -->|Applied by| n219
  n447 -->|Applied by| n637
  n447 -->|Applied by| n643
  n448 -->|Serves| n472
  n448 -->|Applied by| n214
  n448 -->|Applied by| n56
  n448 -->|Applied by| n776
  n448 -->|Applied by| n150
  n449 -->|Serves| n472
  n449 -->|Applied by| n190
  n449 -->|Applied by| n120
  n450 -->|Serves| n479
  n450 -->|Applied by| n205
  n450 -->|Applied by| n135
  n451 -->|Serves| n479
  n451 -->|Applied by| n190
  n451 -->|Applied by| n189
  n451 -->|Applied by| n208
  n451 -->|Applied by| n214
  n451 -->|Applied by| n203
  n452 -->|Serves| n481
  n452 -->|Applied by| n210
  n452 -->|Applied by| n190
  n452 -->|Applied by| n189
  n452 -->|Applied by| n212
  n452 -->|Applied by| n274
  n452 -->|Applied by| n114
  n453 -->|Serves| n481
  n453 -->|Applied by| n210
  n453 -->|Applied by| n203
  n453 -->|Applied by| n147
  n453 -->|Applied by| n139
  n453 -->|Applied by| n277
  n453 -->|Applied by| n276
  n454 -->|Serves| n479
  n454 -->|Applied by| n723
  n454 -->|Applied by| n251
  n454 -->|Applied by| n190
  n454 -->|Applied by| n29
  n454 -->|Applied by| n32
  n455 -->|Serves| n472
  n455 -->|Applied by| n203
  n455 -->|Applied by| n190
  n455 -->|Applied by| n210
  n456 -->|Serves| n479
  n456 -->|Applied by| n190
  n456 -->|Applied by| n730
  n457 -->|Serves| n479
  n457 -->|Applied by| n120
  n457 -->|Applied by| n144
  n457 -->|Applied by| n206
  n457 -->|Applied by| n369
  n457 -->|Applied by| n188
  n458 -->|Serves| n472
  n458 -->|Applied by| n189
  n458 -->|Applied by| n200
  n458 -->|Applied by| n217
  n458 -->|Applied by| n44
  n459 -->|Serves| n481
  n459 -->|Applied by| n210
  n459 -->|Applied by| n147
  n459 -->|Applied by| n421
  n459 -->|Applied by| n114
  n459 -->|Applied by| n203
  n459 -->|Applied by| n131
  n460 -->|Serves| n472
  n460 -->|Applied by| n40
  n460 -->|Applied by| n157
  n460 -->|Applied by| n152
  n460 -->|Applied by| n203
  n461 -->|Serves| n472
  n461 -->|Applied by| n142
  n461 -->|Applied by| n136
  n461 -->|Applied by| n714
  n461 -->|Applied by| n719
  n461 -->|Applied by| n717
  n461 -->|Applied by| n683
  n461 -->|Applied by| n662
  n462 -->|Serves| n473
  n462 -->|Applied by| n412
  n462 -->|Applied by| n410
  n462 -->|Applied by| n396
  n462 -->|Applied by| n392
  n462 -->|Applied by| n436
  n462 -->|Applied by| n438
  n462 -->|Applied by| n385
  n462 -->|Applied by| n390
  n462 -->|Applied by| n610
  n462 -->|Applied by| n611
  n462 -->|Applied by| n630
  n462 -->|Applied by| n629
  n462 -->|Applied by| n622
  n462 -->|Applied by| n621
  n463 -->|Serves| n472
  n463 -->|Applied by| n114
  n463 -->|Applied by| n219
  n463 -->|Applied by| n638
  n463 -->|Applied by| n637
  n463 -->|Applied by| n648
  n464 -->|Serves| n472
  n464 -->|Applied by| n190
  n464 -->|Applied by| n218
  n465 -->|Serves| n472
  n465 -->|Applied by| n203
  n465 -->|Applied by| n648
  n466 -->|Serves| n472
  n466 -->|Applied by| n203
  n466 -->|Applied by| n217
  n466 -->|Applied by| n210
  n467 -->|Serves| n479
  n467 -->|Applied by| n730
  n467 -->|Applied by| n723
  n467 -->|Applied by| n320
  n467 -->|Applied by| n324
  n467 -->|Applied by| n328
  n467 -->|Applied by| n335
  n467 -->|Applied by| n330
  n467 -->|Applied by| n323
  n467 -->|Applied by| n319
  n467 -->|Applied by| n318
  n467 -->|Applied by| n333
  n467 -->|Applied by| n332
  n467 -->|Applied by| n334
  n477 -->|Refines| n472
  n478 -->|Accepts| n477
  n482 -->|Releases| n55
  n483 -->|Releases| n55
  n483 -->|Assembled by| n598
  n484 -->|Releases| n55
  n484 -->|Assembled by| n608
  n485 -->|Releases| n55
  n485 -->|Assembled by| n484
  n486 -->|Releases| n55
  n486 -->|Assembled by| n485
  n487 -->|Releases| n55
  n487 -->|Assembled by| n486
  n488 -->|Releases| n55
  n488 -->|Assembled by| n487
  n489 -->|Releases| n55
  n489 -->|Assembled by| n488
  n490 -->|Releases| n55
  n490 -->|Assembled by| n489
  n491 -->|Releases| n55
  n491 -->|Assembled by| n490
  n492 -->|Releases| n55
  n492 -->|Assembled by| n491
  n493 -->|Releases| n55
  n493 -->|Assembled by| n492
  n494 -->|Releases| n55
  n494 -->|Assembled by| n483
  n495 -->|Releases| n55
  n495 -->|Assembled by| n493
  n496 -->|Releases| n55
  n496 -->|Assembled by| n495
  n497 -->|Releases| n55
  n497 -->|Assembled by| n496
  n498 -->|Releases| n55
  n498 -->|Assembled by| n497
  n499 -->|Releases| n55
  n499 -->|Assembled by| n498
  n500 -->|Releases| n55
  n500 -->|Assembled by| n499
  n501 -->|Releases| n55
  n501 -->|Assembled by| n500
  n502 -->|Releases| n55
  n502 -->|Assembled by| n501
  n503 -->|Releases| n55
  n503 -->|Assembled by| n502
  n504 -->|Releases| n55
  n504 -->|Assembled by| n503
  n505 -->|Releases| n55
  n505 -->|Assembled by| n494
  n506 -->|Releases| n55
  n506 -->|Assembled by| n504
  n507 -->|Releases| n55
  n507 -->|Assembled by| n506
  n508 -->|Releases| n55
  n508 -->|Assembled by| n507
  n509 -->|Releases| n55
  n509 -->|Assembled by| n508
  n510 -->|Releases| n55
  n510 -->|Assembled by| n509
  n511 -->|Releases| n55
  n511 -->|Assembled by| n510
  n512 -->|Releases| n55
  n512 -->|Assembled by| n511
  n513 -->|Releases| n55
  n513 -->|Assembled by| n512
  n514 -->|Releases| n55
  n514 -->|Assembled by| n505
  n515 -->|Releases| n55
  n515 -->|Assembled by| n514
  n516 -->|Releases| n55
  n516 -->|Assembled by| n515
  n517 -->|Releases| n55
  n517 -->|Assembled by| n516
  n518 -->|Releases| n55
  n518 -->|Assembled by| n517
  n519 -->|Releases| n55
  n519 -->|Assembled by| n518
  n520 -->|Releases| n55
  n520 -->|Assembled by| n519
  n521 -->|Releases| n55
  n521 -->|Assembled by| n482
  n522 -->|Releases| n55
  n522 -->|Assembled by| n520
  n523 -->|Releases| n55
  n523 -->|Assembled by| n522
  n524 -->|Releases| n55
  n524 -->|Assembled by| n523
  n525 -->|Releases| n55
  n525 -->|Assembled by| n524
  n526 -->|Releases| n55
  n526 -->|Assembled by| n525
  n527 -->|Releases| n55
  n527 -->|Assembled by| n526
  n528 -->|Releases| n55
  n528 -->|Assembled by| n527
  n529 -->|Releases| n55
  n529 -->|Assembled by| n528
  n530 -->|Releases| n55
  n530 -->|Assembled by| n529
  n531 -->|Releases| n55
  n531 -->|Assembled by| n530
  n532 -->|Releases| n55
  n532 -->|Assembled by| n521
  n533 -->|Releases| n55
  n533 -->|Assembled by| n531
  n534 -->|Releases| n55
  n534 -->|Assembled by| n533
  n535 -->|Releases| n55
  n535 -->|Assembled by| n534
  n536 -->|Releases| n55
  n536 -->|Assembled by| n535
  n537 -->|Releases| n55
  n537 -->|Assembled by| n536
  n538 -->|Releases| n55
  n538 -->|Assembled by| n537
  n539 -->|Releases| n55
  n539 -->|Assembled by| n538
  n540 -->|Releases| n55
  n540 -->|Assembled by| n539
  n541 -->|Releases| n55
  n541 -->|Assembled by| n540
  n542 -->|Releases| n55
  n542 -->|Assembled by| n541
  n543 -->|Releases| n55
  n543 -->|Assembled by| n532
  n544 -->|Releases| n55
  n544 -->|Assembled by| n542
  n545 -->|Releases| n55
  n545 -->|Assembled by| n544
  n546 -->|Releases| n55
  n546 -->|Assembled by| n545
  n547 -->|Releases| n55
  n547 -->|Assembled by| n546
  n548 -->|Releases| n55
  n548 -->|Assembled by| n547
  n549 -->|Releases| n55
  n549 -->|Assembled by| n548
  n550 -->|Releases| n55
  n550 -->|Assembled by| n549
  n551 -->|Releases| n55
  n551 -->|Assembled by| n550
  n552 -->|Releases| n55
  n552 -->|Assembled by| n551
  n553 -->|Releases| n55
  n553 -->|Assembled by| n552
  n554 -->|Releases| n55
  n554 -->|Assembled by| n543
  n555 -->|Releases| n55
  n555 -->|Assembled by| n553
  n556 -->|Releases| n55
  n556 -->|Assembled by| n555
  n557 -->|Releases| n55
  n557 -->|Assembled by| n556
  n558 -->|Releases| n55
  n558 -->|Assembled by| n557
  n559 -->|Releases| n55
  n559 -->|Assembled by| n558
  n560 -->|Releases| n55
  n560 -->|Assembled by| n559
  n561 -->|Releases| n55
  n561 -->|Assembled by| n560
  n562 -->|Releases| n55
  n562 -->|Assembled by| n561
  n563 -->|Releases| n55
  n563 -->|Assembled by| n562
  n564 -->|Releases| n55
  n564 -->|Assembled by| n563
  n565 -->|Releases| n55
  n565 -->|Assembled by| n554
  n566 -->|Releases| n55
  n566 -->|Assembled by| n564
  n567 -->|Releases| n55
  n567 -->|Assembled by| n566
  n568 -->|Releases| n55
  n568 -->|Assembled by| n567
  n569 -->|Releases| n55
  n569 -->|Assembled by| n568
  n570 -->|Releases| n55
  n570 -->|Assembled by| n569
  n571 -->|Releases| n55
  n571 -->|Assembled by| n570
  n572 -->|Releases| n55
  n572 -->|Assembled by| n571
  n573 -->|Releases| n55
  n573 -->|Assembled by| n572
  n574 -->|Releases| n55
  n574 -->|Assembled by| n573
  n575 -->|Releases| n55
  n575 -->|Assembled by| n574
  n576 -->|Releases| n55
  n576 -->|Assembled by| n565
  n577 -->|Releases| n55
  n577 -->|Assembled by| n575
  n578 -->|Releases| n55
  n578 -->|Assembled by| n577
  n579 -->|Releases| n55
  n579 -->|Assembled by| n578
  n580 -->|Releases| n55
  n580 -->|Assembled by| n579
  n581 -->|Releases| n55
  n581 -->|Assembled by| n580
  n582 -->|Releases| n55
  n582 -->|Assembled by| n581
  n583 -->|Releases| n55
  n583 -->|Assembled by| n582
  n584 -->|Releases| n55
  n584 -->|Assembled by| n583
  n585 -->|Releases| n55
  n585 -->|Assembled by| n584
  n586 -->|Releases| n55
  n586 -->|Assembled by| n585
  n587 -->|Releases| n55
  n587 -->|Assembled by| n576
  n588 -->|Releases| n55
  n588 -->|Assembled by| n586
  n589 -->|Releases| n55
  n589 -->|Assembled by| n588
  n590 -->|Releases| n55
  n590 -->|Assembled by| n589
  n591 -->|Releases| n55
  n591 -->|Assembled by| n590
  n592 -->|Releases| n55
  n592 -->|Assembled by| n591
  n593 -->|Releases| n55
  n593 -->|Assembled by| n592
  n594 -->|Releases| n55
  n594 -->|Assembled by| n593
  n595 -->|Releases| n55
  n595 -->|Assembled by| n594
  n596 -->|Releases| n55
  n596 -->|Assembled by| n595
  n597 -->|Releases| n55
  n597 -->|Assembled by| n596
  n598 -->|Releases| n55
  n598 -->|Assembled by| n587
  n599 -->|Releases| n55
  n599 -->|Assembled by| n597
  n600 -->|Releases| n55
  n600 -->|Assembled by| n599
  n601 -->|Releases| n55
  n601 -->|Assembled by| n600
  n602 -->|Releases| n55
  n602 -->|Assembled by| n601
  n603 -->|Releases| n55
  n603 -->|Assembled by| n602
  n604 -->|Releases| n55
  n604 -->|Assembled by| n603
  n605 -->|Releases| n55
  n605 -->|Assembled by| n604
  n606 -->|Releases| n55
  n606 -->|Assembled by| n605
  n607 -->|Releases| n55
  n607 -->|Assembled by| n606
  n608 -->|Releases| n55
  n608 -->|Assembled by| n607
  n609 -->|Serves| n472
  n609 -->|Depends on| n159
  n609 -->|Depends on| n626
  n609 -->|Depends on| n322
  n609 -->|Depends on| n329
  n609 -->|Depends on| n333
  n609 -->|Depends on| n186
  n610 -->|Chooses| n616
  n610 -->|In| n30
  n610 -->|In| n53
  n610 -->|Serves| n473
  n611 -->|Chooses| n618
  n611 -->|In| n30
  n611 -->|In| n53
  n611 -->|Serves| n473
  n613 -->|Serves| n472
  n613 -->|Depends on| n609
  n613 -->|Depends on| n614
  n613 -->|Depends on| n333
  n615 -->|Serves| n472
  n615 -->|Implements| n624
  n615 -->|Depends on| n620
  n615 -->|Depends on| n301
  n615 -->|Depends on| n383
  n615 -->|Depends on| n238
  n615 -->|Depends on| n240
  n615 -->|Depends on| n235
  n615 -->|Depends on| n183
  n615 -->|Depends on| n626
  n615 -->|Depends on| n333
  n616 -->|Serves| n472
  n616 -->|Implements| n614
  n616 -->|Depends on| n612
  n616 -->|Depends on| n185
  n616 -->|Depends on| n183
  n616 -->|Depends on| n283
  n616 -->|Depends on| n290
  n616 -->|Depends on| n292
  n616 -->|Depends on| n282
  n616 -->|Depends on| n284
  n616 -->|Depends on| n288
  n616 -->|Depends on| n295
  n616 -->|Depends on| n285
  n616 -->|Depends on| n291
  n616 -->|Depends on| n293
  n616 -->|Depends on| n297
  n616 -->|Depends on| n296
  n616 -->|Depends on| n279
  n616 -->|Depends on| n287
  n616 -->|Depends on| n333
  n617 -->|Serves| n472
  n617 -->|Applied by| n613
  n617 -->|Applied by| n631
  n617 -->|Applied by| n623
  n617 -->|Applied by| n609
  n617 -->|Applied by| n44
  n618 -->|Serves| n472
  n618 -->|Implements| n612
  n618 -->|Depends on| n310
  n618 -->|Depends on| n181
  n618 -->|Depends on| n7
  n618 -->|Depends on| n294
  n618 -->|Depends on| n305
  n618 -->|Depends on| n313
  n618 -->|Depends on| n317
  n618 -->|Depends on| n312
  n618 -->|Depends on| n304
  n618 -->|Depends on| n315
  n618 -->|Depends on| n306
  n618 -->|Depends on| n308
  n618 -->|Depends on| n309
  n618 -->|Depends on| n314
  n618 -->|Depends on| n322
  n618 -->|Depends on| n333
  n619 -->|Serves| n473
  n619 -->|Applied by| n613
  n619 -->|Applied by| n631
  n619 -->|Applied by| n623
  n619 -->|Applied by| n610
  n619 -->|Applied by| n611
  n619 -->|Applied by| n630
  n619 -->|Applied by| n629
  n619 -->|Applied by| n622
  n619 -->|Applied by| n621
  n621 -->|Chooses| n627
  n621 -->|In| n30
  n621 -->|In| n53
  n621 -->|Serves| n473
  n622 -->|Chooses| n615
  n622 -->|In| n30
  n622 -->|In| n53
  n622 -->|Serves| n473
  n623 -->|Serves| n472
  n623 -->|Depends on| n609
  n623 -->|Depends on| n624
  n623 -->|Depends on| n333
  n625 -->|Serves| n472
  n625 -->|Implements| n632
  n625 -->|Depends on| n628
  n625 -->|Depends on| n748
  n625 -->|Depends on| n746
  n625 -->|Depends on| n183
  n625 -->|Depends on| n744
  n625 -->|Depends on| n742
  n625 -->|Depends on| n743
  n625 -->|Depends on| n741
  n625 -->|Depends on| n747
  n625 -->|Depends on| n333
  n627 -->|Serves| n472
  n627 -->|Implements| n620
  n627 -->|Depends on| n301
  n627 -->|Depends on| n303
  n627 -->|Depends on| n383
  n627 -->|Depends on| n1
  n627 -->|Depends on| n11
  n627 -->|Depends on| n2
  n627 -->|Depends on| n238
  n627 -->|Depends on| n250
  n627 -->|Depends on| n247
  n627 -->|Depends on| n229
  n627 -->|Depends on| n235
  n627 -->|Depends on| n609
  n627 -->|Depends on| n322
  n627 -->|Depends on| n331
  n627 -->|Depends on| n333
  n627 -->|Depends on| n183
  n629 -->|Chooses| n633
  n629 -->|In| n30
  n629 -->|In| n53
  n629 -->|Serves| n473
  n630 -->|Chooses| n625
  n630 -->|In| n30
  n630 -->|In| n53
  n630 -->|Serves| n473
  n631 -->|Serves| n472
  n631 -->|Depends on| n609
  n631 -->|Depends on| n632
  n631 -->|Depends on| n333
  n633 -->|Serves| n472
  n633 -->|Implements| n628
  n633 -->|Depends on| n609
  n633 -->|Depends on| n746
  n633 -->|Depends on| n183
  n633 -->|Depends on| n744
  n633 -->|Depends on| n742
  n633 -->|Depends on| n749
  n633 -->|Depends on| n745
  n633 -->|Depends on| n322
  n633 -->|Depends on| n333
  n634 -->|Verifies| n645
  n634 -->|Verifies| n652
  n634 -->|In| n53
  n634 -->|Depends on| n650
  n634 -->|Depends on| n644
  n634 -->|Depends on| n334
  n635 -->|Verifies| n190
  n635 -->|Verifies| n218
  n635 -->|Verifies| n188
  n635 -->|Verifies| n779
  n635 -->|In| n53
  n635 -->|Depends on| n190
  n635 -->|Depends on| n41
  n635 -->|Depends on| n188
  n635 -->|Depends on| n152
  n635 -->|Depends on| n636
  n635 -->|Depends on| n334
  n637 -->|Verifies| n120
  n637 -->|Verifies| n133
  n637 -->|Verifies| n189
  n637 -->|Verifies| n217
  n637 -->|Verifies| n613
  n637 -->|Verifies| n609
  n637 -->|Verifies| n616
  n637 -->|Verifies| n618
  n637 -->|Verifies| n206
  n637 -->|Verifies| n205
  n637 -->|Verifies| n402
  n637 -->|Verifies| n405
  n637 -->|Verifies| n431
  n637 -->|In| n53
  n637 -->|Depends on| n120
  n637 -->|Depends on| n643
  n637 -->|Depends on| n57
  n637 -->|Depends on| n52
  n637 -->|Depends on| n156
  n637 -->|Depends on| n21
  n637 -->|Depends on| n39
  n637 -->|Depends on| n41
  n637 -->|Depends on| n161
  n637 -->|Depends on| n319
  n637 -->|Depends on| n334
  n638 -->|Verifies| n190
  n638 -->|Verifies| n210
  n638 -->|Verifies| n214
  n638 -->|Verifies| n218
  n638 -->|Verifies| n200
  n638 -->|Verifies| n424
  n638 -->|Verifies| n437
  n638 -->|Verifies| n435
  n638 -->|Verifies| n402
  n638 -->|Verifies| n411
  n638 -->|Verifies| n393
  n638 -->|Verifies| n425
  n638 -->|In| n53
  n638 -->|Depends on| n190
  n638 -->|Depends on| n41
  n638 -->|Depends on| n17
  n638 -->|Depends on| n642
  n638 -->|Depends on| n334
  n639 -->|Verifies| n322
  n639 -->|Verifies| n329
  n639 -->|Verifies| n186
  n639 -->|Verifies| n187
  n639 -->|Verifies| n183
  n639 -->|Verifies| n352
  n639 -->|In| n53
  n639 -->|Depends on| n322
  n639 -->|Depends on| n329
  n639 -->|Depends on| n186
  n639 -->|Depends on| n187
  n639 -->|Depends on| n183
  n639 -->|Depends on| n327
  n639 -->|Depends on| n352
  n639 -->|Depends on| n640
  n639 -->|Depends on| n334
  n641 -->|Verifies| n191
  n641 -->|Verifies| n199
  n641 -->|Verifies| n198
  n641 -->|Verifies| n212
  n641 -->|Verifies| n209
  n641 -->|In| n53
  n641 -->|Depends on| n191
  n641 -->|Depends on| n199
  n641 -->|Depends on| n198
  n641 -->|Depends on| n212
  n641 -->|Depends on| n209
  n641 -->|Depends on| n649
  n641 -->|Depends on| n334
  n645 -->|Implements| n650
  n645 -->|Depends on| n644
  n647 -->|Verifies| n201
  n647 -->|In| n53
  n647 -->|Depends on| n201
  n647 -->|Depends on| n646
  n647 -->|Depends on| n334
  n648 -->|Verifies| n203
  n648 -->|In| n53
  n648 -->|Depends on| n203
  n648 -->|Depends on| n190
  n648 -->|Depends on| n41
  n648 -->|Depends on| n17
  n648 -->|Depends on| n334
  n651 -->|Chooses| n652
  n651 -->|Chooses| n645
  n651 -->|In| n53
  n652 -->|Implements| n650
  n652 -->|Depends on| n644
  n653 -->|Serves| n472
  n653 -->|Part of| n710
  n653 -->|Depends on| n41
  n653 -->|Depends on| n156
  n653 -->|Depends on| n161
  n653 -->|Depends on| n676
  n653 -->|Depends on| n667
  n653 -->|Depends on| n776
  n653 -->|Depends on| n772
  n653 -->|Depends on| n705
  n654 -->|Verifies| n653
  n654 -->|In| n53
  n654 -->|Depends on| n653
  n654 -->|Depends on| n42
  n654 -->|Depends on| n161
  n654 -->|Depends on| n676
  n654 -->|Depends on| n655
  n654 -->|Depends on| n772
  n654 -->|Depends on| n334
  n656 -->|Serves| n472
  n656 -->|Part of| n710
  n656 -->|Depends on| n709
  n656 -->|Depends on| n680
  n656 -->|Depends on| n705
  n657 -->|Serves| n472
  n658 -->|Serves| n472
  n659 -->|In| n48
  n660 -->|In| n30
  n661 -->|Serves| n472
  n662 -->|Checks| n667
  n662 -->|Run by| n145
  n662 -->|Signed by| n681
  n663 -->|Checks| n667
  n663 -->|Run by| n125
  n663 -->|Signed by| n681
  n663 -->|Verifies| n386
  n663 -->|Verifies| n388
  n663 -->|Verifies| n387
  n663 -->|Verifies| n413
  n663 -->|Verifies| n414
  n663 -->|Verifies| n415
  n663 -->|Verifies| n432
  n663 -->|Verifies| n420
  n663 -->|Verifies| n419
  n663 -->|Verifies| n409
  n663 -->|Verifies| n430
  n664 -->|Chooses| n690
  n664 -->|Chooses| n689
  n664 -->|In| n30
  n664 -->|In| n48
  n664 -->|Serves| n472
  n665 -->|In| n30
  n665 -->|Serves| n472
  n666 -->|Serves| n472
  n667 -->|Produced by| n55
  n668 -->|Serves| n472
  n669 -->|Serves| n472
  n670 -->|Its obligations| n669
  n670 -->|Its obligations| n678
  n670 -->|Its obligations| n657
  n670 -->|Its obligations| n661
  n670 -->|Its obligations| n658
  n670 -->|Its obligations| n668
  n670 -->|Its obligations| n666
  n671 -->|Produced by| n129
  n671 -->|Carries| n36
  n673 -->|Checks| n671
  n673 -->|Run by| n685
  n673 -->|Signed by| n681
  n673 -->|Verifies| n64
  n673 -->|Verifies| n63
  n673 -->|Verifies| n62
  n673 -->|Verifies| n61
  n673 -->|Verifies| n60
  n673 -->|Verifies| n58
  n673 -->|Verifies| n59
  n675 -->|Serves| n472
  n675 -->|Depends on| n372
  n675 -->|Depends on| n301
  n675 -->|Depends on| n227
  n677 -->|Ships| n708
  n677 -->|Requires| n679
  n677 -->|Requires| n693
  n677 -->|Programs assembled for| n30
  n677 -->|Follows the policy| n682
  n678 -->|Serves| n472
  n679 -->|Signed by| n681
  n679 -->|Verifies| n688
  n682 -->|Its obligations| n669
  n682 -->|Its obligations| n658
  n683 -->|Ships| n667
  n683 -->|Ships| n692
  n683 -->|Ships| n671
  n683 -->|Deployed by| n114
  n683 -->|Programs assembled for| n30
  n683 -->|Follows the policy| n670
  n684 -->|Verifies| n685
  n684 -->|Verifies| n675
  n684 -->|In| n53
  n684 -->|Depends on| n685
  n684 -->|Depends on| n671
  n684 -->|Depends on| n675
  n684 -->|Depends on| n705
  n684 -->|Depends on| n674
  n684 -->|Depends on| n334
  n685 -->|Serves| n472
  n685 -->|Part of| n710
  n685 -->|Depends on| n671
  n685 -->|Depends on| n327
  n685 -->|Depends on| n675
  n685 -->|Depends on| n672
  n685 -->|Depends on| n705
  n686 -->|Verifies| n690
  n686 -->|Verifies| n689
  n686 -->|In| n53
  n686 -->|Depends on| n709
  n686 -->|Depends on| n680
  n686 -->|Depends on| n697
  n686 -->|Depends on| n156
  n686 -->|Depends on| n161
  n686 -->|Depends on| n433
  n686 -->|Depends on| n694
  n686 -->|Depends on| n334
  n688 -->|Depends on| n687
  n689 -->|Serves| n472
  n689 -->|Depends on| n156
  n689 -->|Depends on| n158
  n689 -->|Depends on| n776
  n689 -->|Depends on| n161
  n689 -->|Depends on| n162
  n689 -->|Depends on| n433
  n689 -->|Depends on| n697
  n690 -->|Serves| n472
  n690 -->|Depends on| n709
  n690 -->|Depends on| n680
  n690 -->|Depends on| n694
  n690 -->|Depends on| n156
  n690 -->|Depends on| n697
  n691 -->|Chooses| n690
  n691 -->|Chooses| n689
  n691 -->|In| n53
  n692 -->|Produced by| n36
  n692 -->|Assembled for| n15
  n693 -->|Signed by| n681
  n695 -->|Runs elsewhere| n677
  n695 -->|Its writer's settings| n694
  n696 -->|Serves| n472
  n696 -->|Part of| n710
  n696 -->|Depends on| n709
  n696 -->|Depends on| n680
  n696 -->|Depends on| n705
  n698 -->|Run by| n696
  n698 -->|Signed by| n681
  n700 -->|Requires| n698
  n700 -->|Deployed by| n656
  n700 -->|Programs assembled for| n30
  n700 -->|Follows the policy| n706
  n701 -->|In| n30
  n701 -->|In| n48
  n702 -->|Ships| n695
  n703 -->|In| n53
  n704 -->|In| n30
  n704 -->|In| n48
  n705 -->|Written in| n327
  n706 -->|Its obligations| n669
  n706 -->|Its obligations| n658
  n706 -->|Its obligations| n666
  n707 -->|Verifies| n696
  n707 -->|Verifies| n656
  n707 -->|In| n53
  n707 -->|Depends on| n696
  n707 -->|Depends on| n656
  n707 -->|Depends on| n709
  n707 -->|Depends on| n680
  n707 -->|Depends on| n699
  n707 -->|Depends on| n705
  n707 -->|Depends on| n334
  n710 -->|Deployed in| n30
  n711 -->|Chooses| n688
  n711 -->|In| n30
  n711 -->|In| n48
  n712 -->|Implements| n49
  n712 -->|Depends on| n25
  n714 -->|Serves| n472
  n714 -->|Depends on| n156
  n714 -->|Depends on| n719
  n714 -->|Depends on| n21
  n714 -->|Depends on| n39
  n714 -->|Depends on| n25
  n714 -->|Depends on| n153
  n714 -->|Depends on| n198
  n714 -->|Depends on| n49
  n715 -->|Chooses| n712
  n715 -->|In| n30
  n715 -->|In| n53
  n715 -->|Serves| n472
  n716 -->|Serves| n472
  n716 -->|Depends on| n161
  n716 -->|Depends on| n210
  n716 -->|Depends on| n156
  n716 -->|Depends on| n222
  n716 -->|Depends on| n21
  n716 -->|Depends on| n39
  n717 -->|Refines| n472
  n718 -->|Accepts| n717
  n723 -->|Serves| n472
  n723 -->|Depends on| n157
  n723 -->|Depends on| n324
  n727 -->|Written in| n327
  n728 -->|Serves| n472
  n728 -->|Applied by| n730
  n728 -->|Applied by| n50
  n729 -->|Serves| n472
  n729 -->|Applied by| n730
  n729 -->|Applied by| n723
  n729 -->|Applied by| n50
  n730 -->|Serves| n472
  n730 -->|Serves| n479
  n730 -->|Depends on| n50
  n730 -->|Depends on| n724
  n730 -->|Depends on| n727
  n730 -->|Depends on| n725
  n730 -->|Depends on| n726
  n730 -->|Depends on| n720
  n730 -->|Depends on| n21
  n730 -->|Depends on| n27
  n730 -->|Depends on| n46
  n730 -->|Depends on| n156
  n730 -->|Depends on| n39
  n730 -->|Depends on| n25
  n731 -->|Defined by| n734
  n731 -->|Read in| n737
  n731 -->|Depends on| n734
  n732 -->|Defined by| n734
  n732 -->|Read in| n737
  n732 -->|Depends on| n734
  n733 -->|Defined by| n734
  n733 -->|Read in| n737
  n733 -->|Depends on| n734
  n733 -->|Depends on| n737
  n735 -->|Defined by| n734
  n735 -->|Read in| n737
  n735 -->|Depends on| n734
  n735 -->|Depends on| n733
  n736 -->|Defined by| n734
  n736 -->|Read in| n737
  n736 -->|Depends on| n734
  n736 -->|Depends on| n738
  n736 -->|Depends on| n733
  n737 -->|Defined by| n734
  n737 -->|Queries written in| n721
  n737 -->|Read by| n730
  n737 -->|Uses| n341
  n739 -->|Serves| n472
  n739 -->|Depends on| n734
  n739 -->|Depends on| n738
  n739 -->|Depends on| n156
  n739 -->|Depends on| n732
  n739 -->|Depends on| n733
  n739 -->|Depends on| n735
  n739 -->|Depends on| n731
  n739 -->|Depends on| n736
  n739 -->|Depends on| n39
  n739 -->|Depends on| n40
  n739 -->|Depends on| n322
  n739 -->|Depends on| n324
  n741 -->|Defined by| n748
  n741 -->|Depends on| n748
  n742 -->|Defined by| n748
  n742 -->|Depends on| n748
  n742 -->|Depends on| n744
  n742 -->|Depends on| n746
  n743 -->|Defined by| n748
  n743 -->|Depends on| n748
  n744 -->|Defined by| n748
  n744 -->|Depends on| n748
  n744 -->|Depends on| n746
  n745 -->|Defined by| n748
  n745 -->|Depends on| n748
  n745 -->|Depends on| n740
  n747 -->|Defined by| n748
  n747 -->|Depends on| n748
  n749 -->|Defined by| n748
  n749 -->|Depends on| n748
  n749 -->|Depends on| n740
  n750 -->|Defined by| n778
  n750 -->|Read in| n776
  n750 -->|Depends on| n778
  n751 -->|Defined by| n778
  n751 -->|Read in| n776
  n751 -->|Depends on| n778
  n752 -->|Defined by| n778
  n752 -->|Read in| n776
  n752 -->|Depends on| n778
  n753 -->|Defined by| n778
  n753 -->|Read in| n776
  n753 -->|Depends on| n778
  n754 -->|Defined by| n778
  n754 -->|Read in| n776
  n754 -->|Depends on| n778
  n755 -->|Defined by| n778
  n755 -->|Read in| n776
  n755 -->|Depends on| n778
  n756 -->|Defined by| n778
  n756 -->|Read in| n776
  n756 -->|Depends on| n778
  n757 -->|Defined by| n778
  n757 -->|Read in| n776
  n757 -->|Depends on| n778
  n757 -->|Depends on| n775
  n758 -->|Defined by| n778
  n758 -->|Read in| n776
  n758 -->|Depends on| n778
  n759 -->|Defined by| n778
  n759 -->|Read in| n776
  n759 -->|Depends on| n778
  n760 -->|Defined by| n778
  n760 -->|Read in| n776
  n760 -->|Depends on| n778
  n761 -->|Defined by| n778
  n761 -->|Read in| n776
  n761 -->|Depends on| n778
  n762 -->|Defined by| n778
  n762 -->|Read in| n776
  n762 -->|Depends on| n778
  n763 -->|Defined by| n778
  n763 -->|Read in| n776
  n763 -->|Depends on| n778
  n764 -->|Defined by| n778
  n764 -->|Read in| n776
  n764 -->|Depends on| n778
  n765 -->|Defined by| n778
  n765 -->|Read in| n776
  n765 -->|Depends on| n778
  n765 -->|Depends on| n775
  n766 -->|Defined by| n778
  n766 -->|Read in| n776
  n766 -->|Depends on| n778
  n767 -->|Defined by| n778
  n767 -->|Read in| n776
  n767 -->|Depends on| n778
  n768 -->|Defined by| n778
  n768 -->|Read in| n776
  n768 -->|Depends on| n778
  n769 -->|Defined by| n778
  n769 -->|Read in| n776
  n769 -->|Depends on| n778
  n770 -->|Defined by| n778
  n770 -->|Read in| n776
  n770 -->|Depends on| n778
  n771 -->|Defined by| n778
  n771 -->|Read in| n776
  n771 -->|Depends on| n778
  n773 -->|Defined by| n778
  n773 -->|Read in| n776
  n773 -->|Depends on| n778
  n773 -->|Depends on| n775
  n774 -->|Defined by| n778
  n774 -->|Read in| n776
  n774 -->|Depends on| n778
  n775 -->|Defined by| n778
  n775 -->|Read in| n776
  n775 -->|Depends on| n778
  n776 -->|Queries written in| n721
  n776 -->|Read by| n730
  n776 -->|Watches the globals| n781
  n776 -->|Uses| n350
  n777 -->|Serves| n472
  n779 -->|Serves| n472
  n779 -->|Depends on| n776
  n779 -->|Depends on| n778
  n779 -->|Depends on| n152
  n779 -->|Depends on| n772
  n779 -->|Depends on| n160
  n779 -->|Depends on| n159
  n779 -->|Depends on| n762
  n779 -->|Depends on| n775
  n779 -->|Depends on| n763
  n779 -->|Depends on| n769
  n779 -->|Depends on| n755
  n779 -->|Depends on| n754
  n779 -->|Depends on| n771
  n779 -->|Depends on| n773
  n779 -->|Depends on| n767
  n779 -->|Depends on| n750
  n779 -->|Depends on| n756
  n779 -->|Depends on| n765
  n779 -->|Depends on| n757
  n779 -->|Depends on| n751
  n779 -->|Depends on| n770
  n779 -->|Depends on| n768
  n779 -->|Depends on| n780
  n779 -->|Depends on| n760
  n779 -->|Depends on| n774
  n779 -->|Depends on| n752
  n779 -->|Depends on| n761
  n779 -->|Depends on| n753
  n779 -->|Depends on| n162
  n779 -->|Depends on| n39
  n779 -->|Depends on| n40
  n779 -->|Depends on| n322
  n779 -->|Depends on| n324
  n780 -->|Defined by| n778
  n780 -->|Read in| n776
  n780 -->|Depends on| n778
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
