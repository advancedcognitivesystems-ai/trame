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
    n58["Amendments sent to trame dev<br/><small>Implementation</small>"]:::unknown
    n59["The browser's gzip<br/><small>Implementation</small>"]:::unknown
    n60["The globals of the page, and trame dev<br/><small>Implementation</small>"]:::unknown
    n61["Local storage<br/><small>Implementation</small>"]:::unknown
    n62["The browser's window<br/><small>Implementation</small>"]:::unknown
    n63["Explorer of a graph<br/><small>Function</small>"]:::unknown
    n64["Show the graph<br/><small>Entry point</small>"]:::unknown
    n65["The browser runs the page<br/><small>Technical choice</small>"]:::unknown
    n66["The page is assembled<br/><small>Architecture decision</small>"]:::unknown
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
    n180["Documents written in Trame's language<br/><small>Technical choice</small>"]:::held
    n181["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n182["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n183["The documents in Trame's language<br/><small>Function</small>"]:::held
    n184["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n185["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n186["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n187["Assembly<br/><small>Function</small>"]:::held
    n188["Compilation API<br/><small>Function</small>"]:::held
    n189["Compiler<br/><small>Function</small>"]:::held
    n190["Cycles<br/><small>Function</small>"]:::held
    n191["Date bundle<br/><small>Function</small>"]:::held
    n192["trame dev server<br/><small>Function</small>"]:::held
    n193["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n194["Differences<br/><small>Function</small>"]:::held
    n195["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n196["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n197["Fingerprints<br/><small>Function</small>"]:::held
    n198["Pseudo-random generator<br/><small>Function</small>"]:::held
    n199["Graph<br/><small>Function</small>"]:::held
    n200["Judged harder<br/><small>Function</small>"]:::held
    n201["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n202["Laws<br/><small>Function</small>"]:::held
    n203["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n204["Lock<br/><small>Function</small>"]:::held
    n205["Machine outputs<br/><small>Function</small>"]:::held
    n206["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n207["Payload<br/><small>Function</small>"]:::held
    n208["Positions<br/><small>Function</small>"]:::held
    n209["Project<br/><small>Function</small>"]:::held
    n210["The runs of a project<br/><small>Function</small>"]:::held
    n211["References<br/><small>Function</small>"]:::held
    n212["A shipment's pipeline<br/><small>Function</small>"]:::held
    n213["Static reading<br/><small>Function</small>"]:::held
    n214["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n215["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n216["Views<br/><small>Function</small>"]:::held
    n217["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n218["Accept a candidate<br/><small>Requirement</small>"]:::held
    n219["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n220["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n221["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n222["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n223["Records of the releases<br/><small>Function</small>"]:::held
    n224["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n225["Attribute presence<br/><small>Syntax element</small>"]:::held
    n226["Attribute selector<br/><small>Syntax element</small>"]:::held
    n227["Class selector<br/><small>Syntax element</small>"]:::held
    n228["Declaration<br/><small>Syntax element</small>"]:::held
    n229["Rule<br/><small>Syntax element</small>"]:::held
    n230["Variable<br/><small>Syntax element</small>"]:::held
    n231["Custom property<br/><small>Syntax element</small>"]:::held
    n232["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n233["Escaped text<br/><small>Syntax element</small>"]:::held
    n234["Attributes<br/><small>Syntax element</small>"]:::held
    n235["Element over several lines<br/><small>Syntax element</small>"]:::held
    n236["HTML element<br/><small>Syntax element</small>"]:::held
    n237["End tag<br/><small>Syntax element</small>"]:::held
    n238["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n239["Start tag<br/><small>Syntax element</small>"]:::held
    n240["JSON in a script<br/><small>Syntax element</small>"]:::held
    n241["Media feature<br/><small>Syntax element</small>"]:::held
    n242["Media rule<br/><small>Syntax element</small>"]:::held
    n243["Negation<br/><small>Syntax element</small>"]:::held
    n244["Path data<br/><small>Syntax element</small>"]:::held
    n245["Script<br/><small>Syntax element</small>"]:::held
    n246["Selector list<br/><small>Syntax element</small>"]:::held
    n247["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n248["Drivers<br/><small>Function</small>"]:::held
    n249["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n250["Answers without crashing<br/><small>Requirement</small>"]:::held
    n251["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n252["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n253["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n254["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n255["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n256["Complete declaration<br/><small>Requirement</small>"]:::held
    n257["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n258["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n259["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n260["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n261["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n262["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n263["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n264["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n265["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n266["Same input, same answer<br/><small>Requirement</small>"]:::held
    n267["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n268["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n269["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n270["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n271["What belongs to a library<br/><small>Requirement</small>"]:::held
    n272["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n273["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n274["A release is settled<br/><small>Requirement</small>"]:::held
    n275["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n276["Anchor<br/><small>Syntax element</small>"]:::held
    n277["Backtick string<br/><small>Syntax element</small>"]:::held
    n278["Blank line<br/><small>Syntax element</small>"]:::held
    n279["Block quote<br/><small>Syntax element</small>"]:::held
    n280["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n281["Code block<br/><small>Syntax element</small>"]:::held
    n282["Code span<br/><small>Syntax element</small>"]:::held
    n283["CommonMark<br/><small>Standard</small>"]:::neutral
    n284["Collapsible block<br/><small>Syntax element</small>"]:::held
    n285["Emphasis<br/><small>Syntax element</small>"]:::held
    n286["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n287["Heading<br/><small>Syntax element</small>"]:::held
    n288["Link<br/><small>Syntax element</small>"]:::held
    n289["List item<br/><small>Syntax element</small>"]:::held
    n290["Relative reference<br/><small>Syntax element</small>"]:::held
    n291["Small text<br/><small>Syntax element</small>"]:::held
    n292["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n293["Table<br/><small>Syntax element</small>"]:::held
    n294["Table cell<br/><small>Syntax element</small>"]:::held
    n295["Delimiter row<br/><small>Syntax element</small>"]:::held
    n296["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n297["Around the documents<br/><small>Decision</small>"]:::neutral
    n298["Documents in the page<br/><small>Decision</small>"]:::neutral
    n299["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n300["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n301["Class definition<br/><small>Syntax element</small>"]:::held
    n302["Flowchart<br/><small>Syntax element</small>"]:::held
    n303["Gantt chart<br/><small>Syntax element</small>"]:::held
    n304["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n305["Section<br/><small>Syntax element</small>"]:::held
    n306["Task<br/><small>Syntax element</small>"]:::held
    n307["Mermaid<br/><small>Standard</small>"]:::neutral
    n308["Label<br/><small>Syntax element</small>"]:::held
    n309["Link<br/><small>Syntax element</small>"]:::held
    n310["Node<br/><small>Syntax element</small>"]:::held
    n311["Milestone<br/><small>Syntax element</small>"]:::held
    n312["Node style<br/><small>Syntax element</small>"]:::held
    n313["Style properties<br/><small>Syntax element</small>"]:::held
    n314["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n315["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n316["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n317["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n318["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n319["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n320["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n321["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n322["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n323["Language<br/><small>Decision</small>"]:::neutral
    n324["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n325["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n326["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n327["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n328["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n329["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n330["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n331["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n332["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n333["Grammar of CSS<br/><small>Package</small>"]:::held
    n334["The renderers of documents<br/><small>Package</small>"]:::neutral
    n335["esbuild<br/><small>Package</small>"]:::held
    n336["The commands every project runs<br/><small>Package</small>"]:::neutral
    n337["Grammar of HCL<br/><small>Package</small>"]:::held
    n338["Grammar of HTML<br/><small>Package</small>"]:::held
    n339["The questions of the machine<br/><small>Package</small>"]:::neutral
    n340["Types of Node.js<br/><small>Package</small>"]:::held
    n341["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n342["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n343["The people of the repository<br/><small>Package</small>"]:::neutral
    n344["The standard library<br/><small>Package</small>"]:::neutral
    n345["tsx<br/><small>Package</small>"]:::held
    n346["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n347["TypeScript<br/><small>Package</small>"]:::held
    n348["Order of versions<br/><small>Function</small>"]:::held
    n349["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n350["Banner<br/><small>Syntax element</small>"]:::held
    n351["Brand<br/><small>Syntax element</small>"]:::held
    n352["State of the compilation<br/><small>Syntax element</small>"]:::held
    n353["Dates<br/><small>Syntax element</small>"]:::held
    n354["Head of the document<br/><small>Syntax element</small>"]:::held
    n355["Document picker<br/><small>Syntax element</small>"]:::held
    n356["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n357["Fonts<br/><small>Syntax element</small>"]:::held
    n358["Logo<br/><small>Syntax element</small>"]:::held
    n359["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n360["Main area<br/><small>Syntax element</small>"]:::held
    n361["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n362["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n363["Navigation<br/><small>Syntax element</small>"]:::held
    n364["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n365["Page<br/><small>Function</small>"]:::held
    n366["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n367["Document of the page<br/><small>Syntax element</small>"]:::held
    n368["Regions of the page<br/><small>Decision</small>"]:::neutral
    n369["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n370["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n371["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n372["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n373["Shell<br/><small>Syntax element</small>"]:::held
    n374["Side bar<br/><small>Syntax element</small>"]:::held
    n375["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n376["Colours of a status<br/><small>Syntax element</small>"]:::held
    n377["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n378["Theme<br/><small>Syntax element</small>"]:::held
    n379["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n380["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n381["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n382["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n383["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n384["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n385["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n386["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n387["esbuild<br/><small>Implementation</small>"]:::held
    n388["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n389["Example process<br/><small>Function</small>"]:::held
    n390["Example project<br/><small>Decision</small>"]:::neutral
    n391["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n392["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n393["Amendments in place<br/><small>Implementation</small>"]:::held
    n394["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n395["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n396["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n397["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n398["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n399["A server in memory<br/><small>Function</small>"]:::held
    n400["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n401["Terminal in memory<br/><small>Function</small>"]:::held
    n402["Command line<br/><small>Implementation</small>"]:::held
    n403["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n404["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n405["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n406["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n407["Node paths<br/><small>Implementation</small>"]:::held
    n408["NodePlatform<br/><small>Technical choice</small>"]:::held
    n409["Node process<br/><small>Implementation</small>"]:::unknown
    n410["Node programs<br/><small>Implementation</small>"]:::unknown
    n411["Node terminal<br/><small>Implementation</small>"]:::unknown
    n412["Node timer<br/><small>Implementation</small>"]:::held
    n413["No installer in test<br/><small>Implementation</small>"]:::held
    n414["No registry in test<br/><small>Function</small>"]:::held
    n415["npm installs<br/><small>Implementation</small>"]:::unknown
    n416["npm's reports<br/><small>Implementation</small>"]:::unknown
    n417["Packages by their origin<br/><small>Implementation</small>"]:::held
    n418["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n419["Page resources<br/><small>Implementation</small>"]:::held
    n420["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n421["Results kept in the process<br/><small>Implementation</small>"]:::held
    n422["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n423["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n424["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n425["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n426["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n427["Stopped clock<br/><small>Function</small>"]:::held
    n428["System clock<br/><small>Implementation</small>"]:::unknown
    n429["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n430["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n431["Trame's prelude<br/><small>Implementation</small>"]:::held
    n432["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n433["tsx loader<br/><small>Implementation</small>"]:::held
    n434["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n435["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n436["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n437["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n438["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n439["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n440["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n441["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n442["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n443["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n444["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n445["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n446["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n447["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n448["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n449["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n450["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n451["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n452["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n453["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n454["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n455["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n456["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n457["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n458["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n459["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n460["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n461["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n462["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n463["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n464["Candidate dates<br/><small>Decision</small>"]:::neutral
    n465["Claim sets<br/><small>Decision</small>"]:::neutral
    n466["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n467["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n468["A specification that runs<br/><small>Goal</small>"]:::neutral
    n469["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n470["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n471["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n472["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n473["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n474["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n475["A single source of truth<br/><small>Goal</small>"]:::neutral
    n476["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n477["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n478["Generation 1<br/><small>Release</small>"]:::neutral
    n479["Generation 10<br/><small>Release</small>"]:::neutral
    n480["Generation 100<br/><small>Release</small>"]:::neutral
    n481["Generation 101<br/><small>Release</small>"]:::neutral
    n482["Generation 102<br/><small>Release</small>"]:::neutral
    n483["Generation 103<br/><small>Release</small>"]:::neutral
    n484["Generation 104<br/><small>Release</small>"]:::neutral
    n485["Generation 105<br/><small>Release</small>"]:::neutral
    n486["Generation 106<br/><small>Release</small>"]:::neutral
    n487["Generation 107<br/><small>Release</small>"]:::neutral
    n488["Generation 108<br/><small>Release</small>"]:::neutral
    n489["Generation 109<br/><small>Release</small>"]:::neutral
    n490["Generation 11<br/><small>Release</small>"]:::neutral
    n491["Generation 110<br/><small>Release</small>"]:::neutral
    n492["Generation 111<br/><small>Release</small>"]:::neutral
    n493["Generation 112<br/><small>Release</small>"]:::neutral
    n494["Generation 113<br/><small>Release</small>"]:::neutral
    n495["Generation 114<br/><small>Release</small>"]:::neutral
    n496["Generation 115<br/><small>Release</small>"]:::neutral
    n497["Generation 116<br/><small>Release</small>"]:::neutral
    n498["Generation 117<br/><small>Release</small>"]:::neutral
    n499["Generation 118<br/><small>Release</small>"]:::neutral
    n500["Generation 119<br/><small>Release</small>"]:::neutral
    n501["Generation 12<br/><small>Release</small>"]:::neutral
    n502["Generation 120<br/><small>Release</small>"]:::neutral
    n503["Generation 121<br/><small>Release</small>"]:::neutral
    n504["Generation 122<br/><small>Release</small>"]:::neutral
    n505["Generation 123<br/><small>Release</small>"]:::neutral
    n506["Generation 124<br/><small>Release</small>"]:::neutral
    n507["Generation 125<br/><small>Release</small>"]:::neutral
    n508["Generation 126<br/><small>Release</small>"]:::neutral
    n509["Generation 127<br/><small>Release</small>"]:::neutral
    n510["Generation 128<br/><small>Release</small>"]:::neutral
    n511["Generation 13<br/><small>Release</small>"]:::neutral
    n512["Generation 14<br/><small>Release</small>"]:::neutral
    n513["Generation 15<br/><small>Release</small>"]:::neutral
    n514["Generation 16<br/><small>Release</small>"]:::neutral
    n515["Generation 17<br/><small>Release</small>"]:::neutral
    n516["Generation 18<br/><small>Release</small>"]:::neutral
    n517["Generation 19<br/><small>Release</small>"]:::neutral
    n518["Generation 2<br/><small>Release</small>"]:::neutral
    n519["Generation 20<br/><small>Release</small>"]:::neutral
    n520["Generation 21<br/><small>Release</small>"]:::neutral
    n521["Generation 22<br/><small>Release</small>"]:::neutral
    n522["Generation 23<br/><small>Release</small>"]:::neutral
    n523["Generation 24<br/><small>Release</small>"]:::neutral
    n524["Generation 25<br/><small>Release</small>"]:::neutral
    n525["Generation 26<br/><small>Release</small>"]:::neutral
    n526["Generation 27<br/><small>Release</small>"]:::neutral
    n527["Generation 28<br/><small>Release</small>"]:::neutral
    n528["Generation 29<br/><small>Release</small>"]:::neutral
    n529["Generation 3<br/><small>Release</small>"]:::neutral
    n530["Generation 30<br/><small>Release</small>"]:::neutral
    n531["Generation 31<br/><small>Release</small>"]:::neutral
    n532["Generation 32<br/><small>Release</small>"]:::neutral
    n533["Generation 33<br/><small>Release</small>"]:::neutral
    n534["Generation 34<br/><small>Release</small>"]:::neutral
    n535["Generation 35<br/><small>Release</small>"]:::neutral
    n536["Generation 36<br/><small>Release</small>"]:::neutral
    n537["Generation 37<br/><small>Release</small>"]:::neutral
    n538["Generation 38<br/><small>Release</small>"]:::neutral
    n539["Generation 39<br/><small>Release</small>"]:::neutral
    n540["Generation 4<br/><small>Release</small>"]:::neutral
    n541["Generation 40<br/><small>Release</small>"]:::neutral
    n542["Generation 41<br/><small>Release</small>"]:::neutral
    n543["Generation 42<br/><small>Release</small>"]:::neutral
    n544["Generation 43<br/><small>Release</small>"]:::neutral
    n545["Generation 44<br/><small>Release</small>"]:::neutral
    n546["Generation 45<br/><small>Release</small>"]:::neutral
    n547["Generation 46<br/><small>Release</small>"]:::neutral
    n548["Generation 47<br/><small>Release</small>"]:::neutral
    n549["Generation 48<br/><small>Release</small>"]:::neutral
    n550["Generation 49<br/><small>Release</small>"]:::neutral
    n551["Generation 5<br/><small>Release</small>"]:::neutral
    n552["Generation 50<br/><small>Release</small>"]:::neutral
    n553["Generation 51<br/><small>Release</small>"]:::neutral
    n554["Generation 52<br/><small>Release</small>"]:::neutral
    n555["Generation 53<br/><small>Release</small>"]:::neutral
    n556["Generation 54<br/><small>Release</small>"]:::neutral
    n557["Generation 55<br/><small>Release</small>"]:::neutral
    n558["Generation 56<br/><small>Release</small>"]:::neutral
    n559["Generation 57<br/><small>Release</small>"]:::neutral
    n560["Generation 58<br/><small>Release</small>"]:::neutral
    n561["Generation 59<br/><small>Release</small>"]:::neutral
    n562["Generation 6<br/><small>Release</small>"]:::neutral
    n563["Generation 60<br/><small>Release</small>"]:::neutral
    n564["Generation 61<br/><small>Release</small>"]:::neutral
    n565["Generation 62<br/><small>Release</small>"]:::neutral
    n566["Generation 63<br/><small>Release</small>"]:::neutral
    n567["Generation 64<br/><small>Release</small>"]:::neutral
    n568["Generation 65<br/><small>Release</small>"]:::neutral
    n569["Generation 66<br/><small>Release</small>"]:::neutral
    n570["Generation 67<br/><small>Release</small>"]:::neutral
    n571["Generation 68<br/><small>Release</small>"]:::neutral
    n572["Generation 69<br/><small>Release</small>"]:::neutral
    n573["Generation 7<br/><small>Release</small>"]:::neutral
    n574["Generation 70<br/><small>Release</small>"]:::neutral
    n575["Generation 71<br/><small>Release</small>"]:::neutral
    n576["Generation 72<br/><small>Release</small>"]:::neutral
    n577["Generation 73<br/><small>Release</small>"]:::neutral
    n578["Generation 74<br/><small>Release</small>"]:::neutral
    n579["Generation 75<br/><small>Release</small>"]:::neutral
    n580["Generation 76<br/><small>Release</small>"]:::neutral
    n581["Generation 77<br/><small>Release</small>"]:::neutral
    n582["Generation 78<br/><small>Release</small>"]:::neutral
    n583["Generation 79<br/><small>Release</small>"]:::neutral
    n584["Generation 8<br/><small>Release</small>"]:::neutral
    n585["Generation 80<br/><small>Release</small>"]:::neutral
    n586["Generation 81<br/><small>Release</small>"]:::neutral
    n587["Generation 82<br/><small>Release</small>"]:::neutral
    n588["Generation 83<br/><small>Release</small>"]:::neutral
    n589["Generation 84<br/><small>Release</small>"]:::neutral
    n590["Generation 85<br/><small>Release</small>"]:::neutral
    n591["Generation 86<br/><small>Release</small>"]:::neutral
    n592["Generation 87<br/><small>Release</small>"]:::neutral
    n593["Generation 88<br/><small>Release</small>"]:::neutral
    n594["Generation 89<br/><small>Release</small>"]:::neutral
    n595["Generation 9<br/><small>Release</small>"]:::neutral
    n596["Generation 90<br/><small>Release</small>"]:::neutral
    n597["Generation 91<br/><small>Release</small>"]:::neutral
    n598["Generation 92<br/><small>Release</small>"]:::neutral
    n599["Generation 93<br/><small>Release</small>"]:::neutral
    n600["Generation 94<br/><small>Release</small>"]:::neutral
    n601["Generation 95<br/><small>Release</small>"]:::neutral
    n602["Generation 96<br/><small>Release</small>"]:::neutral
    n603["Generation 97<br/><small>Release</small>"]:::neutral
    n604["Generation 98<br/><small>Release</small>"]:::neutral
    n605["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n606["Common rendering<br/><small>Function</small>"]:::held
    n607["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n608["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n609["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n610["Rendering of the files<br/><small>Function</small>"]:::held
    n611["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n612["HTML writer<br/><small>Function</small>"]:::held
    n613["Markdown writer<br/><small>Function</small>"]:::held
    n614["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n615["Mermaid diagrams<br/><small>Function</small>"]:::held
    n616["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n617["Figures of the page<br/><small>Port</small>"]:::neutral
    n618["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n619["The page in HTML<br/><small>Technical choice</small>"]:::held
    n620["Rendering in the page<br/><small>Function</small>"]:::held
    n621["Syntax of the page<br/><small>Port</small>"]:::neutral
    n622["Plain text writer<br/><small>Function</small>"]:::held
    n623["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n624["Figures in SVG<br/><small>Function</small>"]:::held
    n625["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n626["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n627["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n628["Rendering in the terminal<br/><small>Function</small>"]:::held
    n629["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n630["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n631["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
    n632["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n633["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n634["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n635["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n636["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n637["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n638["EngineReckons<br/><small>Scenario</small>"]:::held
    n639["Shape of the example<br/><small>Decision</small>"]:::neutral
    n640["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n641["The names the sample add-ons give, and the order a choice gives them in: the second first.<br/><small>Decision</small>"]:::neutral
    n642["The first sample add-on<br/><small>Function</small>"]:::held
    n643["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n644["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n645["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n646["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
    n647["A sample extension point<br/><small>Port</small>"]:::neutral
    n648["The sample add-ons, second first<br/><small>Technical choice</small>"]:::held
    n649["The second sample add-on<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Trame · SDLC"]
    n650["Advance<br/><small>Entry point</small>"]:::held
    n651["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n652["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n653["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n654["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n655["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n656["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n657["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n658["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n659["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n660["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n661["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n662["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n663["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n664["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n665["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n666["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n667["How a generation is made<br/><small>Policy</small>"]:::neutral
    n668["The graph page<br/><small>Artefact</small>"]:::unknown
    n669["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n670["The graph page opens<br/><small>Check</small>"]:::unknown
    n671["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n672["What the graph page is asked<br/><small>Function</small>"]:::held
    n673["How a generation advances<br/><small>Decision</small>"]:::neutral
    n674["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n675["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n676["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n677["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n678["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n679["How a change merges<br/><small>Policy</small>"]:::neutral
    n680["The next generation<br/><small>Shipment</small>"]:::unknown
    n681["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n682["Open the graph page<br/><small>Entry point</small>"]:::held
    n683["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n684["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n685["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n686["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n687["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n688["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n689["The page's program<br/><small>Artefact</small>"]:::unknown
    n690["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
    n691["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n692["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n693["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n694["The repository's projects<br/><small>Decision</small>"]:::neutral
    n695["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n696["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n697["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n698["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n699["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n700["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n701["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n702["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n703["How the repository is set<br/><small>Policy</small>"]:::neutral
    n704["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n705["The engine<br/><small>Artefact</small>"]:::unknown
    n706["Trame's repository<br/><small>Decision</small>"]:::neutral
    n707["Trame's SDLC<br/><small>Component</small>"]:::neutral
    n708["What the machine must also have<br/><small>Technical choice</small>"]:::unknown
  end
  subgraph shipping["Trame · Shipping"]
    n709["Attribution<br/><small>Function</small>"]:::held
    n710["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n711["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n712["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n713["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n714["Ship only what holds<br/><small>Requirement</small>"]:::held
    n715["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n716["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n717["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n718["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n719["Checks of a body<br/><small>Function</small>"]:::held
    n720["Captures<br/><small>Standard</small>"]:::neutral
    n721["Categories of literals<br/><small>Decision</small>"]:::neutral
    n722["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n723["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n724["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n725["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n726["std's languages, read by the engine<br/><small>Technical choice</small>"]:::held
    n727["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n728["Attribute<br/><small>Syntax element</small>"]:::held
    n729["Comment<br/><small>Syntax element</small>"]:::held
    n730["Text<br/><small>Syntax element</small>"]:::held
    n731["HCL<br/><small>Standard</small>"]:::neutral
    n732["Value<br/><small>Syntax element</small>"]:::held
    n733["Module call<br/><small>Syntax element</small>"]:::held
    n734["Terraform<br/><small>Language</small>"]:::held
    n735["Terraform modules<br/><small>Standard</small>"]:::neutral
    n736["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n737["Box drawing<br/><small>Standard</small>"]:::neutral
    n738["Code lines<br/><small>Syntax element</small>"]:::held
    n739["Columns<br/><small>Syntax element</small>"]:::held
    n740["Item line<br/><small>Syntax element</small>"]:::held
    n741["Padded cell<br/><small>Syntax element</small>"]:::held
    n742["Path step<br/><small>Syntax element</small>"]:::held
    n743["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n744["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n745["Terminal text<br/><small>Decision</small>"]:::neutral
    n746["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n747["List on several lines<br/><small>Syntax element</small>"]:::held
    n748["Type assertion<br/><small>Syntax element</small>"]:::held
    n749["Assignment<br/><small>Syntax element</small>"]:::held
    n750["Async function of a block<br/><small>Syntax element</small>"]:::held
    n751["Waiting<br/><small>Syntax element</small>"]:::held
    n752["Call<br/><small>Syntax element</small>"]:::held
    n753["Constant<br/><small>Syntax element</small>"]:::held
    n754["Default import<br/><small>Syntax element</small>"]:::held
    n755["Documentation comment<br/><small>Syntax element</small>"]:::held
    n756["Export<br/><small>Syntax element</small>"]:::held
    n757["Condition<br/><small>Syntax element</small>"]:::held
    n758["List on one line<br/><small>Syntax element</small>"]:::held
    n759["Comment<br/><small>Syntax element</small>"]:::held
    n760["Property access<br/><small>Syntax element</small>"]:::held
    n761["Title of a module<br/><small>Syntax element</small>"]:::held
    n762["Import of names<br/><small>Syntax element</small>"]:::held
    n763["Object on several lines<br/><small>Syntax element</small>"]:::held
    n764["Object<br/><small>Syntax element</small>"]:::held
    n765["Object type<br/><small>Syntax element</small>"]:::held
    n766["Optional property access<br/><small>Syntax element</small>"]:::held
    n767["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n768["Group<br/><small>Syntax element</small>"]:::held
    n769["Names of a program<br/><small>Decision</small>"]:::neutral
    n770["Property<br/><small>Syntax element</small>"]:::held
    n771["Strict inequality<br/><small>Syntax element</small>"]:::held
    n772["Text<br/><small>Syntax element</small>"]:::held
    n773["TypeScript<br/><small>Language</small>"]:::held
    n774["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n775["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n776["TypeScript writer<br/><small>Function</small>"]:::held
    n777["Union type<br/><small>Syntax element</small>"]:::held
    n778["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n379
  n58 -->|Depends on| n193
  n59 -->|Implements| n20
  n59 -->|Depends on| n364
  n60 -->|Implements| n24
  n60 -->|Depends on| n379
  n60 -->|Depends on| n193
  n61 -->|Implements| n37
  n61 -->|Depends on| n379
  n62 -->|Implements| n38
  n62 -->|Depends on| n241
  n63 -->|Serves| n468
  n63 -->|Depends on| n379
  n63 -->|Depends on| n298
  n63 -->|Depends on| n300
  n63 -->|Depends on| n299
  n63 -->|Depends on| n0
  n63 -->|Depends on| n236
  n63 -->|Depends on| n239
  n63 -->|Depends on| n247
  n63 -->|Depends on| n244
  n63 -->|Depends on| n228
  n63 -->|Depends on| n233
  n63 -->|Depends on| n606
  n63 -->|Depends on| n326
  n63 -->|Depends on| n328
  n64 -->|Serves| n468
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n606
  n64 -->|Depends on| n379
  n64 -->|Depends on| n368
  n64 -->|Depends on| n371
  n64 -->|Depends on| n359
  n64 -->|Depends on| n298
  n64 -->|Depends on| n297
  n64 -->|Depends on| n299
  n64 -->|Depends on| n0
  n64 -->|Depends on| n151
  n64 -->|Depends on| n623
  n64 -->|Depends on| n323
  n64 -->|Depends on| n236
  n64 -->|Depends on| n233
  n64 -->|Depends on| n226
  n64 -->|Depends on| n225
  n64 -->|Depends on| n246
  n64 -->|Depends on| n227
  n64 -->|Depends on| n326
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n469
  n66 -->|Serves| n468
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n114
  n67 -->|Verifies| n195
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
  n67 -->|Depends on| n315
  n67 -->|Depends on| n68
  n67 -->|Depends on| n329
  n71 -->|Verifies| n727
  n71 -->|Verifies| n719
  n71 -->|Verifies| n436
  n71 -->|In| n53
  n71 -->|Depends on| n727
  n71 -->|Depends on| n719
  n71 -->|Depends on| n773
  n71 -->|Depends on| n72
  n71 -->|Depends on| n320
  n71 -->|Depends on| n329
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
  n73 -->|Depends on| n316
  n73 -->|Depends on| n329
  n74 -->|Verifies| n402
  n74 -->|Verifies| n401
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n161
  n74 -->|Depends on| n111
  n74 -->|Depends on| n327
  n74 -->|Depends on| n329
  n75 -->|Verifies| n117
  n75 -->|Verifies| n118
  n75 -->|Verifies| n187
  n75 -->|Verifies| n776
  n75 -->|Verifies| n736
  n75 -->|Verifies| n248
  n75 -->|Verifies| n427
  n75 -->|In| n53
  n75 -->|Depends on| n117
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n161
  n75 -->|Depends on| n156
  n75 -->|Depends on| n70
  n75 -->|Depends on| n152
  n75 -->|Depends on| n316
  n75 -->|Depends on| n329
  n76 -->|Verifies| n141
  n76 -->|In| n53
  n76 -->|Depends on| n141
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n161
  n76 -->|Depends on| n70
  n76 -->|Depends on| n104
  n76 -->|Depends on| n329
  n77 -->|Verifies| n135
  n77 -->|In| n53
  n77 -->|Depends on| n135
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n156
  n77 -->|Depends on| n161
  n77 -->|Depends on| n316
  n77 -->|Depends on| n329
  n78 -->|Verifies| n124
  n78 -->|Verifies| n192
  n78 -->|Verifies| n399
  n78 -->|Verifies| n412
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
  n78 -->|Depends on| n193
  n78 -->|Depends on| n466
  n78 -->|Depends on| n209
  n78 -->|Depends on| n161
  n78 -->|Depends on| n325
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n329
  n80 -->|Verifies| n125
  n80 -->|Verifies| n210
  n80 -->|Verifies| n423
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
  n80 -->|Depends on| n316
  n80 -->|Depends on| n329
  n81 -->|Verifies| n133
  n81 -->|In| n53
  n81 -->|Depends on| n133
  n81 -->|Depends on| n161
  n81 -->|Depends on| n156
  n81 -->|Depends on| n773
  n81 -->|Depends on| n329
  n82 -->|Verifies| n136
  n82 -->|In| n53
  n82 -->|Depends on| n136
  n82 -->|Depends on| n57
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n156
  n82 -->|Depends on| n716
  n82 -->|Depends on| n99
  n82 -->|Depends on| n161
  n82 -->|Depends on| n49
  n82 -->|Depends on| n329
  n83 -->|Verifies| n127
  n83 -->|In| n53
  n83 -->|Depends on| n127
  n83 -->|Depends on| n103
  n83 -->|Depends on| n329
  n84 -->|Verifies| n128
  n84 -->|In| n53
  n84 -->|Depends on| n128
  n84 -->|Depends on| n57
  n84 -->|Depends on| n161
  n84 -->|Depends on| n329
  n85 -->|Verifies| n189
  n85 -->|Verifies| n209
  n85 -->|In| n53
  n85 -->|Depends on| n189
  n85 -->|Depends on| n42
  n85 -->|Depends on| n41
  n85 -->|Depends on| n17
  n85 -->|Depends on| n105
  n85 -->|Depends on| n99
  n85 -->|Depends on| n711
  n85 -->|Depends on| n23
  n85 -->|Depends on| n329
  n86 -->|Verifies| n145
  n86 -->|In| n53
  n86 -->|Depends on| n145
  n86 -->|Depends on| n189
  n86 -->|Depends on| n216
  n86 -->|Depends on| n41
  n86 -->|Depends on| n52
  n86 -->|Depends on| n161
  n86 -->|Depends on| n316
  n86 -->|Depends on| n329
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
  n87 -->|Depends on| n329
  n88 -->|Verifies| n139
  n88 -->|Verifies| n223
  n88 -->|Verifies| n396
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
  n88 -->|Depends on| n772
  n88 -->|Depends on| n329
  n88 -->|Depends on| n716
  n89 -->|Verifies| n147
  n89 -->|Verifies| n417
  n89 -->|Verifies| n395
  n89 -->|Verifies| n413
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
  n89 -->|Depends on| n329
  n89 -->|Depends on| n155
  n89 -->|Depends on| n773
  n90 -->|Verifies| n119
  n90 -->|Verifies| n414
  n90 -->|In| n53
  n90 -->|Depends on| n119
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n52
  n90 -->|Depends on| n105
  n90 -->|Depends on| n161
  n90 -->|Depends on| n329
  n90 -->|Depends on| n342
  n91 -->|Verifies| n146
  n91 -->|Verifies| n417
  n91 -->|Verifies| n395
  n91 -->|In| n53
  n91 -->|Depends on| n146
  n91 -->|Depends on| n42
  n91 -->|Depends on| n57
  n91 -->|Depends on| n41
  n91 -->|Depends on| n39
  n91 -->|Depends on| n156
  n91 -->|Depends on| n105
  n91 -->|Depends on| n161
  n91 -->|Depends on| n329
  n92 -->|Verifies| n123
  n92 -->|Verifies| n166
  n92 -->|In| n53
  n92 -->|Depends on| n123
  n92 -->|Depends on| n42
  n92 -->|Depends on| n57
  n92 -->|Depends on| n105
  n92 -->|Depends on| n99
  n92 -->|Depends on| n232
  n92 -->|Depends on| n161
  n92 -->|Depends on| n329
  n93 -->|Verifies| n129
  n93 -->|Verifies| n191
  n93 -->|In| n53
  n93 -->|Depends on| n126
  n93 -->|Depends on| n129
  n93 -->|Depends on| n42
  n93 -->|Depends on| n57
  n93 -->|Depends on| n52
  n93 -->|Depends on| n209
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n156
  n93 -->|Depends on| n161
  n93 -->|Depends on| n325
  n93 -->|Depends on| n329
  n94 -->|Verifies| n365
  n94 -->|Verifies| n387
  n94 -->|Verifies| n403
  n94 -->|Verifies| n419
  n94 -->|In| n53
  n94 -->|Depends on| n126
  n94 -->|Depends on| n365
  n94 -->|Depends on| n19
  n94 -->|Depends on| n209
  n94 -->|Depends on| n41
  n94 -->|Depends on| n17
  n94 -->|Depends on| n52
  n94 -->|Depends on| n161
  n94 -->|Depends on| n325
  n94 -->|Depends on| n329
  n95 -->|Verifies| n126
  n95 -->|Verifies| n207
  n95 -->|Verifies| n620
  n95 -->|Verifies| n612
  n95 -->|Verifies| n624
  n95 -->|Verifies| n194
  n95 -->|In| n53
  n95 -->|Depends on| n126
  n95 -->|Depends on| n194
  n95 -->|Depends on| n52
  n95 -->|Depends on| n161
  n95 -->|Depends on| n325
  n95 -->|Depends on| n329
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
  n97 -->|Depends on| n316
  n97 -->|Depends on| n329
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
  n98 -->|Depends on| n329
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
  n100 -->|Depends on| n221
  n100 -->|Depends on| n161
  n100 -->|Depends on| n329
  n100 -->|Depends on| n155
  n100 -->|Depends on| n773
  n101 -->|Verifies| n135
  n101 -->|Verifies| n204
  n101 -->|In| n53
  n101 -->|Depends on| n135
  n101 -->|Depends on| n23
  n101 -->|Depends on| n21
  n101 -->|Depends on| n52
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n156
  n101 -->|Depends on| n161
  n101 -->|Depends on| n211
  n101 -->|Depends on| n69
  n101 -->|Depends on| n325
  n101 -->|Depends on| n329
  n102 -->|Verifies| n138
  n102 -->|Verifies| n396
  n102 -->|In| n53
  n102 -->|Depends on| n138
  n102 -->|Depends on| n42
  n102 -->|Depends on| n57
  n102 -->|Depends on| n161
  n102 -->|Depends on| n329
  n102 -->|Depends on| n155
  n102 -->|Depends on| n773
  n102 -->|Depends on| n99
  n106 -->|Verifies| n142
  n106 -->|Verifies| n136
  n106 -->|Verifies| n711
  n106 -->|Verifies| n212
  n106 -->|Verifies| n713
  n106 -->|Verifies| n404
  n106 -->|Verifies| n709
  n106 -->|Verifies| n195
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
  n106 -->|Depends on| n189
  n106 -->|Depends on| n17
  n106 -->|Depends on| n317
  n106 -->|Depends on| n156
  n106 -->|Depends on| n716
  n106 -->|Depends on| n105
  n106 -->|Depends on| n99
  n106 -->|Depends on| n161
  n106 -->|Depends on| n329
  n107 -->|Verifies| n144
  n107 -->|In| n53
  n107 -->|Depends on| n144
  n107 -->|Depends on| n57
  n107 -->|Depends on| n21
  n107 -->|Depends on| n41
  n107 -->|Depends on| n39
  n107 -->|Depends on| n156
  n107 -->|Depends on| n161
  n107 -->|Depends on| n329
  n108 -->|Verifies| n142
  n108 -->|Verifies| n212
  n108 -->|In| n53
  n108 -->|Depends on| n142
  n108 -->|Depends on| n42
  n108 -->|Depends on| n52
  n108 -->|Depends on| n41
  n108 -->|Depends on| n39
  n108 -->|Depends on| n22
  n108 -->|Depends on| n23
  n108 -->|Depends on| n189
  n108 -->|Depends on| n17
  n108 -->|Depends on| n212
  n108 -->|Depends on| n316
  n108 -->|Depends on| n156
  n108 -->|Depends on| n716
  n108 -->|Depends on| n105
  n108 -->|Depends on| n99
  n108 -->|Depends on| n161
  n108 -->|Depends on| n329
  n110 -->|Verifies| n115
  n110 -->|Verifies| n116
  n110 -->|Verifies| n121
  n110 -->|Verifies| n393
  n110 -->|In| n53
  n110 -->|Depends on| n115
  n110 -->|Depends on| n57
  n110 -->|Depends on| n41
  n110 -->|Depends on| n39
  n110 -->|Depends on| n161
  n110 -->|Depends on| n69
  n110 -->|Depends on| n329
  n112 -->|Verifies| n143
  n112 -->|Verifies| n122
  n112 -->|Verifies| n140
  n112 -->|Verifies| n628
  n112 -->|Verifies| n622
  n112 -->|Verifies| n630
  n112 -->|In| n53
  n112 -->|Depends on| n143
  n112 -->|Depends on| n122
  n112 -->|Depends on| n52
  n112 -->|Depends on| n161
  n112 -->|Depends on| n111
  n112 -->|Depends on| n329
  n113 -->|Serves| n468
  n113 -->|Depends on| n217
  n113 -->|Depends on| n316
  n114 -->|Serves| n468
  n114 -->|Part of| n55
  n114 -->|Depends on| n133
  n114 -->|Depends on| n195
  n114 -->|Depends on| n161
  n114 -->|Depends on| n156
  n114 -->|Depends on| n220
  n114 -->|Depends on| n218
  n114 -->|Depends on| n390
  n114 -->|Depends on| n429
  n114 -->|Depends on| n162
  n114 -->|Depends on| n773
  n114 -->|Depends on| n43
  n114 -->|Depends on| n22
  n114 -->|Depends on| n21
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n25
  n114 -->|Depends on| n196
  n114 -->|Depends on| n51
  n114 -->|Depends on| n739
  n114 -->|Depends on| n745
  n114 -->|Depends on| n316
  n114 -->|Depends on| n315
  n114 -->|Depends on| n221
  n114 -->|Depends on| n222
  n114 -->|Depends on| n224
  n114 -->|Depends on| n223
  n114 -->|Depends on| n153
  n114 -->|Depends on| n159
  n114 -->|Depends on| n17
  n114 -->|Depends on| n209
  n114 -->|Depends on| n155
  n115 -->|Serves| n475
  n115 -->|Part of| n55
  n115 -->|Depends on| n133
  n115 -->|Depends on| n116
  n115 -->|Depends on| n14
  n115 -->|Depends on| n39
  n115 -->|Depends on| n745
  n115 -->|Depends on| n51
  n115 -->|Depends on| n316
  n116 -->|Serves| n475
  n116 -->|Depends on| n133
  n116 -->|Depends on| n205
  n116 -->|Depends on| n121
  n116 -->|Depends on| n40
  n116 -->|Depends on| n211
  n116 -->|Depends on| n209
  n116 -->|Depends on| n156
  n116 -->|Depends on| n39
  n116 -->|Depends on| n316
  n116 -->|Depends on| n148
  n117 -->|Serves| n468
  n117 -->|Part of| n55
  n117 -->|Depends on| n133
  n117 -->|Depends on| n118
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n316
  n118 -->|Serves| n468
  n118 -->|Depends on| n133
  n118 -->|Depends on| n187
  n118 -->|Depends on| n745
  n118 -->|Depends on| n316
  n119 -->|Serves| n475
  n119 -->|Part of| n55
  n119 -->|Depends on| n133
  n119 -->|Depends on| n34
  n119 -->|Depends on| n342
  n119 -->|Depends on| n156
  n119 -->|Depends on| n21
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n348
  n119 -->|Depends on| n153
  n119 -->|Depends on| n51
  n119 -->|Depends on| n739
  n119 -->|Depends on| n745
  n119 -->|Depends on| n316
  n120 -->|Serves| n468
  n120 -->|Part of| n55
  n120 -->|Depends on| n156
  n120 -->|Depends on| n133
  n120 -->|Depends on| n205
  n120 -->|Depends on| n610
  n120 -->|Depends on| n628
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n51
  n120 -->|Depends on| n316
  n121 -->|Serves| n468
  n121 -->|Depends on| n316
  n121 -->|Depends on| n325
  n122 -->|Serves| n468
  n122 -->|Part of| n55
  n122 -->|Depends on| n161
  n122 -->|Depends on| n133
  n122 -->|Depends on| n140
  n122 -->|Depends on| n189
  n122 -->|Depends on| n216
  n122 -->|Depends on| n118
  n122 -->|Depends on| n134
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n41
  n122 -->|Depends on| n51
  n122 -->|Depends on| n316
  n123 -->|Serves| n468
  n123 -->|Part of| n55
  n123 -->|Depends on| n133
  n123 -->|Depends on| n187
  n123 -->|Depends on| n118
  n123 -->|Depends on| n16
  n123 -->|Depends on| n166
  n123 -->|Depends on| n366
  n123 -->|Depends on| n367
  n123 -->|Depends on| n245
  n123 -->|Depends on| n165
  n123 -->|Depends on| n21
  n123 -->|Depends on| n23
  n123 -->|Depends on| n39
  n123 -->|Depends on| n51
  n123 -->|Depends on| n316
  n124 -->|Serves| n468
  n124 -->|Part of| n55
  n124 -->|Depends on| n133
  n124 -->|Depends on| n192
  n124 -->|Depends on| n116
  n124 -->|Depends on| n14
  n124 -->|Depends on| n39
  n125 -->|Serves| n468
  n125 -->|Part of| n55
  n125 -->|Depends on| n133
  n125 -->|Depends on| n170
  n125 -->|Depends on| n51
  n125 -->|Depends on| n316
  n125 -->|Depends on| n113
  n126 -->|Serves| n468
  n126 -->|Part of| n55
  n126 -->|Depends on| n133
  n126 -->|Depends on| n207
  n126 -->|Depends on| n610
  n126 -->|Depends on| n628
  n126 -->|Depends on| n620
  n126 -->|Depends on| n51
  n127 -->|Serves| n468
  n127 -->|Depends on| n56
  n127 -->|Depends on| n775
  n128 -->|Serves| n468
  n128 -->|Part of| n55
  n128 -->|Depends on| n133
  n128 -->|Depends on| n127
  n128 -->|Depends on| n21
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n51
  n128 -->|Depends on| n161
  n128 -->|Depends on| n316
  n129 -->|Serves| n468
  n129 -->|Part of| n55
  n129 -->|Depends on| n156
  n129 -->|Depends on| n133
  n129 -->|Depends on| n191
  n129 -->|Depends on| n365
  n129 -->|Depends on| n209
  n129 -->|Depends on| n23
  n129 -->|Depends on| n39
  n129 -->|Depends on| n51
  n129 -->|Depends on| n316
  n130 -->|Serves| n468
  n130 -->|Part of| n55
  n130 -->|Depends on| n133
  n130 -->|Depends on| n134
  n130 -->|Depends on| n216
  n130 -->|Depends on| n51
  n130 -->|Depends on| n741
  n130 -->|Depends on| n743
  n130 -->|Depends on| n316
  n131 -->|Serves| n475
  n131 -->|Part of| n55
  n131 -->|Depends on| n133
  n131 -->|Depends on| n156
  n131 -->|Depends on| n209
  n131 -->|Depends on| n40
  n131 -->|Depends on| n158
  n131 -->|Depends on| n221
  n131 -->|Depends on| n21
  n131 -->|Depends on| n23
  n131 -->|Depends on| n39
  n131 -->|Depends on| n153
  n131 -->|Depends on| n773
  n131 -->|Depends on| n775
  n131 -->|Depends on| n761
  n131 -->|Depends on| n755
  n131 -->|Depends on| n756
  n131 -->|Depends on| n753
  n131 -->|Depends on| n752
  n131 -->|Depends on| n764
  n131 -->|Depends on| n770
  n131 -->|Depends on| n772
  n131 -->|Depends on| n762
  n131 -->|Depends on| n51
  n131 -->|Depends on| n316
  n131 -->|Depends on| n41
  n131 -->|Depends on| n161
  n131 -->|Depends on| n137
  n131 -->|Depends on| n155
  n131 -->|Depends on| n760
  n131 -->|Depends on| n758
  n131 -->|Depends on| n113
  n131 -->|Depends on| n134
  n132 -->|Serves| n468
  n132 -->|Part of| n55
  n132 -->|Depends on| n156
  n132 -->|Depends on| n745
  n132 -->|Depends on| n133
  n132 -->|Depends on| n205
  n132 -->|Depends on| n121
  n132 -->|Depends on| n21
  n132 -->|Depends on| n39
  n132 -->|Depends on| n51
  n132 -->|Depends on| n316
  n133 -->|Serves| n468
  n133 -->|Depends on| n161
  n133 -->|Depends on| n189
  n133 -->|Depends on| n188
  n133 -->|Depends on| n202
  n133 -->|Depends on| n216
  n133 -->|Depends on| n204
  n133 -->|Depends on| n606
  n133 -->|Depends on| n51
  n133 -->|Depends on| n41
  n133 -->|Depends on| n17
  n133 -->|Depends on| n473
  n133 -->|Depends on| n467
  n133 -->|Depends on| n745
  n133 -->|Depends on| n743
  n133 -->|Depends on| n741
  n133 -->|Depends on| n316
  n133 -->|Depends on| n156
  n133 -->|Depends on| n211
  n133 -->|Depends on| n134
  n133 -->|Depends on| n154
  n133 -->|Depends on| n205
  n133 -->|Depends on| n39
  n133 -->|Depends on| n21
  n133 -->|Depends on| n727
  n134 -->|Serves| n468
  n134 -->|Depends on| n217
  n134 -->|Depends on| n316
  n135 -->|Serves| n475
  n135 -->|Part of| n55
  n135 -->|Depends on| n133
  n135 -->|Depends on| n204
  n135 -->|Depends on| n23
  n135 -->|Depends on| n51
  n135 -->|Depends on| n745
  n135 -->|Depends on| n743
  n135 -->|Depends on| n741
  n135 -->|Depends on| n316
  n136 -->|Serves| n714
  n136 -->|Part of| n55
  n136 -->|Depends on| n161
  n136 -->|Depends on| n133
  n136 -->|Depends on| n711
  n136 -->|Depends on| n23
  n136 -->|Depends on| n39
  n136 -->|Depends on| n51
  n136 -->|Depends on| n316
  n137 -->|Serves| n475
  n137 -->|Depends on| n775
  n137 -->|Depends on| n761
  n137 -->|Depends on| n755
  n137 -->|Depends on| n756
  n137 -->|Depends on| n753
  n137 -->|Depends on| n752
  n137 -->|Depends on| n764
  n137 -->|Depends on| n770
  n137 -->|Depends on| n772
  n137 -->|Depends on| n758
  n137 -->|Depends on| n762
  n138 -->|Serves| n475
  n138 -->|Part of| n55
  n138 -->|Depends on| n133
  n138 -->|Depends on| n156
  n138 -->|Depends on| n209
  n138 -->|Depends on| n155
  n138 -->|Depends on| n21
  n138 -->|Depends on| n22
  n138 -->|Depends on| n39
  n138 -->|Depends on| n51
  n138 -->|Depends on| n316
  n139 -->|Serves| n475
  n139 -->|Part of| n55
  n139 -->|Depends on| n133
  n139 -->|Depends on| n156
  n139 -->|Depends on| n209
  n139 -->|Depends on| n205
  n139 -->|Depends on| n610
  n139 -->|Depends on| n274
  n139 -->|Depends on| n273
  n139 -->|Depends on| n224
  n139 -->|Depends on| n223
  n139 -->|Depends on| n21
  n139 -->|Depends on| n23
  n139 -->|Depends on| n22
  n139 -->|Depends on| n39
  n139 -->|Depends on| n25
  n139 -->|Depends on| n196
  n139 -->|Depends on| n773
  n139 -->|Depends on| n17
  n139 -->|Depends on| n51
  n139 -->|Depends on| n316
  n139 -->|Depends on| n315
  n139 -->|Depends on| n248
  n139 -->|Depends on| n772
  n139 -->|Depends on| n142
  n139 -->|Depends on| n161
  n140 -->|Serves| n468
  n140 -->|Depends on| n161
  n140 -->|Depends on| n153
  n140 -->|Depends on| n133
  n140 -->|Depends on| n216
  n140 -->|Depends on| n610
  n140 -->|Depends on| n628
  n140 -->|Depends on| n51
  n140 -->|Depends on| n316
  n141 -->|Serves| n468
  n141 -->|Part of| n55
  n141 -->|Depends on| n117
  n141 -->|Depends on| n41
  n142 -->|Serves| n714
  n142 -->|Part of| n55
  n142 -->|Depends on| n161
  n142 -->|Depends on| n133
  n142 -->|Depends on| n123
  n142 -->|Depends on| n187
  n142 -->|Depends on| n118
  n142 -->|Depends on| n711
  n142 -->|Depends on| n713
  n142 -->|Depends on| n714
  n142 -->|Depends on| n16
  n142 -->|Depends on| n166
  n142 -->|Depends on| n710
  n142 -->|Depends on| n41
  n142 -->|Depends on| n134
  n142 -->|Depends on| n21
  n142 -->|Depends on| n23
  n142 -->|Depends on| n39
  n142 -->|Depends on| n51
  n142 -->|Depends on| n195
  n142 -->|Depends on| n316
  n143 -->|Serves| n468
  n143 -->|Part of| n55
  n143 -->|Depends on| n133
  n143 -->|Depends on| n140
  n144 -->|Serves| n475
  n144 -->|Part of| n55
  n144 -->|Depends on| n156
  n144 -->|Depends on| n133
  n144 -->|Depends on| n205
  n144 -->|Depends on| n610
  n144 -->|Depends on| n23
  n144 -->|Depends on| n39
  n144 -->|Depends on| n51
  n144 -->|Depends on| n316
  n145 -->|Serves| n468
  n145 -->|Part of| n55
  n145 -->|Depends on| n133
  n145 -->|Depends on| n189
  n145 -->|Depends on| n216
  n145 -->|Depends on| n202
  n145 -->|Depends on| n51
  n145 -->|Depends on| n745
  n145 -->|Depends on| n743
  n145 -->|Depends on| n741
  n145 -->|Depends on| n316
  n146 -->|Serves| n475
  n146 -->|Part of| n55
  n146 -->|Depends on| n133
  n146 -->|Depends on| n21
  n146 -->|Depends on| n23
  n146 -->|Depends on| n39
  n146 -->|Depends on| n348
  n146 -->|Depends on| n772
  n146 -->|Depends on| n41
  n146 -->|Depends on| n161
  n146 -->|Depends on| n51
  n146 -->|Depends on| n316
  n147 -->|Serves| n475
  n147 -->|Part of| n55
  n147 -->|Depends on| n133
  n147 -->|Depends on| n156
  n147 -->|Depends on| n209
  n147 -->|Depends on| n21
  n147 -->|Depends on| n23
  n147 -->|Depends on| n155
  n147 -->|Depends on| n40
  n147 -->|Depends on| n221
  n147 -->|Depends on| n39
  n147 -->|Depends on| n33
  n147 -->|Depends on| n341
  n147 -->|Depends on| n153
  n147 -->|Depends on| n773
  n147 -->|Depends on| n51
  n147 -->|Depends on| n316
  n147 -->|Depends on| n41
  n147 -->|Depends on| n161
  n165 -->|Depends on| n229
  n165 -->|Depends on| n231
  n166 -->|Serves| n468
  n166 -->|Depends on| n31
  n166 -->|Depends on| n164
  n167 -->|Serves| n468
  n167 -->|Depends on| n316
  n168 -->|Implements| n170
  n168 -->|Depends on| n17
  n168 -->|Depends on| n167
  n168 -->|Depends on| n316
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
  n172 -->|Depends on| n316
  n173 -->|Implements| n170
  n173 -->|Depends on| n22
  n173 -->|Depends on| n21
  n173 -->|Depends on| n23
  n173 -->|Depends on| n33
  n173 -->|Depends on| n156
  n173 -->|Depends on| n39
  n173 -->|Depends on| n167
  n173 -->|Depends on| n316
  n174 -->|Implements| n170
  n174 -->|Depends on| n22
  n174 -->|Depends on| n23
  n174 -->|Depends on| n43
  n174 -->|Depends on| n39
  n174 -->|Depends on| n169
  n174 -->|Depends on| n167
  n174 -->|Depends on| n316
  n175 -->|Implements| n170
  n175 -->|Depends on| n34
  n175 -->|Depends on| n41
  n175 -->|Depends on| n167
  n175 -->|Depends on| n316
  n176 -->|Implements| n170
  n176 -->|Depends on| n22
  n176 -->|Depends on| n23
  n176 -->|Depends on| n28
  n176 -->|Depends on| n39
  n176 -->|Depends on| n169
  n176 -->|Depends on| n167
  n176 -->|Depends on| n316
  n177 -->|Implements| n170
  n177 -->|Depends on| n26
  n177 -->|Depends on| n167
  n177 -->|Depends on| n316
  n178 -->|Implements| n170
  n178 -->|Depends on| n17
  n178 -->|Depends on| n54
  n178 -->|Depends on| n169
  n178 -->|Depends on| n167
  n178 -->|Depends on| n316
  n179 -->|Implements| n170
  n179 -->|Depends on| n22
  n179 -->|Depends on| n23
  n179 -->|Depends on| n41
  n179 -->|Depends on| n39
  n179 -->|Depends on| n169
  n179 -->|Depends on| n167
  n179 -->|Depends on| n316
  n180 -->|Chooses| n183
  n180 -->|In| n30
  n180 -->|In| n48
  n180 -->|In| n53
  n180 -->|In| n15
  n180 -->|Serves| n475
  n183 -->|Depends on| n323
  n184 -->|Serves| n475
  n184 -->|Applied by| n183
  n184 -->|Applied by| n323
  n186 -->|Serves| n475
  n187 -->|Serves| n468
  n187 -->|Depends on| n161
  n187 -->|Depends on| n156
  n187 -->|Depends on| n39
  n187 -->|Depends on| n217
  n187 -->|Depends on| n40
  n187 -->|Depends on| n248
  n187 -->|Depends on| n317
  n187 -->|Depends on| n155
  n187 -->|Depends on| n773
  n188 -->|Serves| n468
  n188 -->|Depends on| n149
  n188 -->|Depends on| n208
  n188 -->|Depends on| n211
  n188 -->|Depends on| n40
  n188 -->|Depends on| n151
  n188 -->|Depends on| n156
  n188 -->|Depends on| n330
  n188 -->|Depends on| n212
  n189 -->|Serves| n468
  n189 -->|Depends on| n156
  n189 -->|Depends on| n473
  n189 -->|Depends on| n190
  n189 -->|Depends on| n211
  n189 -->|Depends on| n208
  n189 -->|Depends on| n31
  n189 -->|Depends on| n21
  n189 -->|Depends on| n39
  n189 -->|Depends on| n213
  n189 -->|Depends on| n209
  n189 -->|Depends on| n199
  n189 -->|Depends on| n217
  n189 -->|Depends on| n248
  n189 -->|Depends on| n40
  n189 -->|Depends on| n317
  n189 -->|Depends on| n197
  n189 -->|Depends on| n49
  n189 -->|Depends on| n195
  n189 -->|Depends on| n28
  n189 -->|Depends on| n155
  n189 -->|Depends on| n200
  n190 -->|Serves| n468
  n191 -->|Serves| n468
  n191 -->|Depends on| n161
  n191 -->|Depends on| n17
  n191 -->|Depends on| n41
  n191 -->|Depends on| n325
  n192 -->|Serves| n468
  n192 -->|Depends on| n193
  n192 -->|Depends on| n161
  n192 -->|Depends on| n156
  n192 -->|Depends on| n51
  n192 -->|Depends on| n738
  n192 -->|Depends on| n17
  n192 -->|Depends on| n54
  n192 -->|Depends on| n466
  n192 -->|Depends on| n26
  n192 -->|Depends on| n21
  n192 -->|Depends on| n39
  n192 -->|Depends on| n209
  n192 -->|Depends on| n191
  n192 -->|Depends on| n194
  n192 -->|Depends on| n365
  n192 -->|Depends on| n620
  n192 -->|Depends on| n323
  n192 -->|Depends on| n319
  n194 -->|Serves| n468
  n194 -->|Depends on| n325
  n195 -->|Serves| n468
  n195 -->|Depends on| n156
  n195 -->|Depends on| n220
  n195 -->|Depends on| n773
  n195 -->|Depends on| n209
  n195 -->|Depends on| n21
  n195 -->|Depends on| n39
  n195 -->|Depends on| n25
  n195 -->|Depends on| n196
  n195 -->|Depends on| n153
  n197 -->|Serves| n468
  n198 -->|Serves| n468
  n199 -->|Serves| n468
  n199 -->|Depends on| n40
  n199 -->|Depends on| n159
  n199 -->|Depends on| n317
  n199 -->|Depends on| n208
  n199 -->|Depends on| n211
  n199 -->|Depends on| n181
  n199 -->|Depends on| n198
  n199 -->|Depends on| n476
  n199 -->|Depends on| n156
  n199 -->|Depends on| n773
  n199 -->|Depends on| n348
  n199 -->|Depends on| n186
  n199 -->|Depends on| n197
  n200 -->|Serves| n468
  n200 -->|Depends on| n473
  n200 -->|Depends on| n317
  n202 -->|Serves| n468
  n202 -->|Depends on| n27
  n202 -->|Depends on| n248
  n202 -->|Depends on| n157
  n202 -->|Depends on| n156
  n202 -->|Depends on| n470
  n202 -->|Depends on| n465
  n202 -->|Depends on| n198
  n202 -->|Depends on| n471
  n202 -->|Depends on| n472
  n202 -->|Depends on| n211
  n202 -->|Depends on| n21
  n202 -->|Depends on| n39
  n202 -->|Depends on| n209
  n202 -->|Depends on| n199
  n202 -->|Depends on| n40
  n202 -->|Depends on| n155
  n202 -->|Depends on| n324
  n202 -->|Depends on| n256
  n202 -->|Depends on| n250
  n202 -->|Depends on| n252
  n202 -->|Depends on| n260
  n202 -->|Depends on| n269
  n202 -->|Depends on| n266
  n202 -->|Depends on| n264
  n202 -->|Depends on| n254
  n203 -->|Serves| n268
  n203 -->|Applied by| n202
  n203 -->|Applied by| n216
  n204 -->|Serves| n475
  n204 -->|Depends on| n156
  n204 -->|Depends on| n153
  n204 -->|Depends on| n211
  n204 -->|Depends on| n282
  n204 -->|Depends on| n21
  n204 -->|Depends on| n39
  n204 -->|Depends on| n40
  n204 -->|Depends on| n325
  n205 -->|Serves| n475
  n205 -->|Depends on| n153
  n205 -->|Depends on| n208
  n205 -->|Depends on| n40
  n205 -->|Depends on| n325
  n207 -->|Serves| n468
  n207 -->|Depends on| n156
  n207 -->|Depends on| n464
  n207 -->|Depends on| n206
  n207 -->|Depends on| n17
  n207 -->|Depends on| n205
  n207 -->|Depends on| n216
  n207 -->|Depends on| n323
  n208 -->|Serves| n468
  n208 -->|Depends on| n718
  n209 -->|Serves| n468
  n209 -->|Depends on| n156
  n209 -->|Depends on| n21
  n209 -->|Depends on| n39
  n209 -->|Depends on| n221
  n209 -->|Depends on| n40
  n209 -->|Depends on| n155
  n209 -->|Depends on| n773
  n210 -->|Serves| n468
  n210 -->|Implements| n28
  n210 -->|Depends on| n21
  n210 -->|Depends on| n39
  n210 -->|Depends on| n25
  n210 -->|Depends on| n201
  n210 -->|Depends on| n46
  n211 -->|Serves| n468
  n211 -->|Depends on| n159
  n211 -->|Depends on| n271
  n212 -->|Serves| n468
  n212 -->|Depends on| n316
  n213 -->|Serves| n468
  n213 -->|Depends on| n775
  n213 -->|Depends on| n211
  n213 -->|Depends on| n215
  n213 -->|Depends on| n56
  n213 -->|Depends on| n27
  n213 -->|Depends on| n46
  n213 -->|Depends on| n25
  n213 -->|Depends on| n39
  n213 -->|Depends on| n208
  n213 -->|Depends on| n150
  n213 -->|Depends on| n317
  n213 -->|Depends on| n774
  n213 -->|Depends on| n157
  n213 -->|Depends on| n40
  n214 -->|Serves| n475
  n214 -->|Applied by| n199
  n214 -->|Applied by| n216
  n216 -->|Serves| n468
  n216 -->|Depends on| n248
  n216 -->|Depends on| n149
  n216 -->|Depends on| n163
  n216 -->|Depends on| n151
  n216 -->|Depends on| n156
  n216 -->|Depends on| n31
  n216 -->|Depends on| n21
  n216 -->|Depends on| n39
  n216 -->|Depends on| n40
  n216 -->|Depends on| n209
  n216 -->|Depends on| n325
  n216 -->|Depends on| n330
  n216 -->|Depends on| n258
  n216 -->|Depends on| n250
  n216 -->|Depends on| n266
  n216 -->|Depends on| n262
  n217 -->|Serves| n468
  n217 -->|Depends on| n160
  n217 -->|Depends on| n159
  n217 -->|Depends on| n156
  n217 -->|Depends on| n39
  n217 -->|Depends on| n40
  n217 -->|Depends on| n248
  n217 -->|Depends on| n317
  n218 -->|Refines| n468
  n219 -->|Accepts| n218
  n223 -->|Serves| n468
  n223 -->|Depends on| n224
  n223 -->|Depends on| n775
  n223 -->|Depends on| n159
  n223 -->|Depends on| n755
  n223 -->|Depends on| n761
  n223 -->|Depends on| n759
  n223 -->|Depends on| n762
  n223 -->|Depends on| n756
  n223 -->|Depends on| n753
  n223 -->|Depends on| n752
  n223 -->|Depends on| n763
  n223 -->|Depends on| n770
  n223 -->|Depends on| n772
  n223 -->|Depends on| n758
  n231 -->|Depends on| n228
  n235 -->|Depends on| n239
  n235 -->|Depends on| n237
  n236 -->|Depends on| n239
  n236 -->|Depends on| n237
  n238 -->|Depends on| n236
  n239 -->|Depends on| n234
  n240 -->|Read in| n773
  n245 -->|Depends on| n236
  n247 -->|Depends on| n234
  n248 -->|Serves| n468
  n248 -->|Depends on| n727
  n248 -->|Depends on| n719
  n248 -->|Depends on| n773
  n248 -->|Depends on| n776
  n248 -->|Depends on| n734
  n248 -->|Depends on| n735
  n248 -->|Depends on| n736
  n248 -->|Depends on| n31
  n248 -->|Depends on| n21
  n248 -->|Depends on| n39
  n248 -->|Depends on| n320
  n249 -->|Serves| n468
  n249 -->|Applied by| n248
  n249 -->|Applied by| n365
  n250 -->|Refines| n268
  n251 -->|Accepts| n250
  n252 -->|Refines| n268
  n253 -->|Accepts| n252
  n254 -->|Refines| n268
  n255 -->|Accepts| n254
  n256 -->|Refines| n268
  n257 -->|Accepts| n256
  n258 -->|Refines| n268
  n259 -->|Accepts| n258
  n260 -->|Refines| n268
  n261 -->|Accepts| n260
  n262 -->|Refines| n268
  n263 -->|Accepts| n262
  n264 -->|Refines| n266
  n264 -->|Depends on| n266
  n265 -->|Accepts| n264
  n266 -->|Refines| n268
  n267 -->|Accepts| n266
  n269 -->|Refines| n268
  n270 -->|Accepts| n269
  n271 -->|Refines| n477
  n272 -->|Accepts| n271
  n274 -->|Refines| n477
  n275 -->|Accepts| n274
  n276 -->|Depends on| n236
  n277 -->|Defined by| n283
  n277 -->|Depends on| n283
  n278 -->|Defined by| n283
  n278 -->|Depends on| n283
  n279 -->|Defined by| n283
  n279 -->|Depends on| n283
  n280 -->|Defined by| n283
  n280 -->|Depends on| n283
  n280 -->|Depends on| n278
  n281 -->|Defined by| n283
  n281 -->|Depends on| n283
  n281 -->|Depends on| n277
  n282 -->|Defined by| n283
  n282 -->|Depends on| n283
  n282 -->|Depends on| n277
  n284 -->|Depends on| n239
  n284 -->|Depends on| n237
  n284 -->|Depends on| n236
  n284 -->|Depends on| n278
  n285 -->|Defined by| n283
  n285 -->|Depends on| n283
  n287 -->|Defined by| n283
  n287 -->|Depends on| n283
  n288 -->|Defined by| n283
  n288 -->|Depends on| n283
  n289 -->|Defined by| n283
  n289 -->|Depends on| n283
  n290 -->|Depends on| n156
  n291 -->|Depends on| n236
  n292 -->|Defined by| n283
  n292 -->|Depends on| n283
  n293 -->|Defined by| n286
  n293 -->|Depends on| n286
  n293 -->|Depends on| n296
  n293 -->|Depends on| n295
  n294 -->|Defined by| n286
  n294 -->|Depends on| n286
  n294 -->|Depends on| n283
  n295 -->|Defined by| n286
  n295 -->|Depends on| n286
  n296 -->|Defined by| n286
  n296 -->|Depends on| n286
  n296 -->|Depends on| n283
  n301 -->|Defined by| n307
  n301 -->|Depends on| n307
  n301 -->|Depends on| n313
  n302 -->|Defined by| n307
  n302 -->|Depends on| n307
  n303 -->|Defined by| n307
  n303 -->|Depends on| n307
  n304 -->|Defined by| n307
  n304 -->|Depends on| n307
  n305 -->|Defined by| n307
  n305 -->|Depends on| n307
  n305 -->|Depends on| n304
  n306 -->|Defined by| n307
  n306 -->|Depends on| n307
  n306 -->|Depends on| n304
  n308 -->|Defined by| n307
  n308 -->|Depends on| n307
  n309 -->|Defined by| n307
  n309 -->|Depends on| n307
  n309 -->|Depends on| n308
  n310 -->|Defined by| n307
  n310 -->|Depends on| n307
  n310 -->|Depends on| n308
  n311 -->|Defined by| n307
  n311 -->|Depends on| n307
  n311 -->|Depends on| n306
  n312 -->|Defined by| n307
  n312 -->|Depends on| n307
  n312 -->|Depends on| n313
  n313 -->|Defined by| n307
  n313 -->|Depends on| n307
  n314 -->|Defined by| n307
  n314 -->|Depends on| n307
  n314 -->|Depends on| n308
  n315 -->|Written in| n323
  n315 -->|Depends on| n323
  n316 -->|Written in| n323
  n316 -->|Depends on| n323
  n317 -->|Written in| n323
  n317 -->|Depends on| n323
  n318 -->|Serves| n475
  n318 -->|Applied by| n317
  n318 -->|Applied by| n330
  n318 -->|Applied by| n319
  n318 -->|Applied by| n316
  n318 -->|Applied by| n329
  n318 -->|Applied by| n315
  n318 -->|Applied by| n326
  n319 -->|Written in| n323
  n319 -->|Depends on| n323
  n320 -->|Written in| n323
  n321 -->|Written in| n323
  n322 -->|Written in| n323
  n324 -->|Written in| n323
  n325 -->|Written in| n323
  n326 -->|Written in| n323
  n326 -->|Depends on| n323
  n327 -->|Written in| n323
  n328 -->|Written in| n323
  n329 -->|Written in| n323
  n329 -->|Depends on| n323
  n330 -->|Written in| n323
  n330 -->|Depends on| n323
  n331 -->|Written in| n323
  n332 -->|Serves| n475
  n334 -->|Serves| n475
  n336 -->|Serves| n475
  n339 -->|Serves| n475
  n341 -->|Serves| n475
  n343 -->|Serves| n475
  n344 -->|Serves| n475
  n348 -->|Serves| n475
  n350 -->|Defined by| n379
  n350 -->|Depends on| n379
  n350 -->|Depends on| n368
  n350 -->|Depends on| n236
  n351 -->|Defined by| n379
  n351 -->|Depends on| n379
  n351 -->|Depends on| n161
  n351 -->|Depends on| n358
  n351 -->|Depends on| n235
  n351 -->|Depends on| n236
  n352 -->|Defined by| n379
  n352 -->|Depends on| n379
  n352 -->|Depends on| n368
  n352 -->|Depends on| n236
  n353 -->|Defined by| n379
  n353 -->|Depends on| n379
  n353 -->|Depends on| n368
  n353 -->|Depends on| n235
  n353 -->|Depends on| n236
  n354 -->|Defined by| n379
  n354 -->|Depends on| n379
  n354 -->|Depends on| n368
  n354 -->|Depends on| n235
  n354 -->|Depends on| n236
  n354 -->|Depends on| n372
  n355 -->|Defined by| n379
  n355 -->|Depends on| n379
  n355 -->|Depends on| n368
  n355 -->|Depends on| n235
  n355 -->|Depends on| n236
  n356 -->|Defined by| n379
  n356 -->|Depends on| n379
  n356 -->|Depends on| n300
  n356 -->|Depends on| n1
  n356 -->|Depends on| n235
  n356 -->|Depends on| n236
  n356 -->|Depends on| n247
  n356 -->|Depends on| n244
  n357 -->|Depends on| n239
  n358 -->|Defined by| n379
  n358 -->|Depends on| n379
  n358 -->|Depends on| n7
  n358 -->|Depends on| n235
  n358 -->|Depends on| n236
  n358 -->|Depends on| n247
  n358 -->|Depends on| n230
  n360 -->|Defined by| n379
  n360 -->|Depends on| n379
  n360 -->|Depends on| n368
  n360 -->|Depends on| n235
  n360 -->|Depends on| n236
  n360 -->|Depends on| n350
  n360 -->|Depends on| n354
  n361 -->|Defined by| n379
  n361 -->|Depends on| n379
  n361 -->|Depends on| n242
  n361 -->|Depends on| n241
  n362 -->|Uses the variables of| n9
  n362 -->|Uses the variables of| n12
  n362 -->|Uses the variables of| n6
  n362 -->|Styles| n365
  n363 -->|Defined by| n379
  n363 -->|Depends on| n379
  n363 -->|Depends on| n368
  n363 -->|Depends on| n236
  n365 -->|Serves| n468
  n365 -->|Depends on| n366
  n365 -->|Depends on| n375
  n365 -->|Depends on| n7
  n365 -->|Depends on| n13
  n365 -->|Depends on| n4
  n365 -->|Depends on| n9
  n365 -->|Depends on| n8
  n365 -->|Depends on| n12
  n365 -->|Depends on| n5
  n365 -->|Depends on| n10
  n365 -->|Depends on| n3
  n365 -->|Depends on| n6
  n365 -->|Depends on| n45
  n365 -->|Depends on| n21
  n365 -->|Depends on| n16
  n365 -->|Depends on| n19
  n365 -->|Depends on| n373
  n365 -->|Depends on| n378
  n365 -->|Depends on| n376
  n365 -->|Depends on| n361
  n365 -->|Depends on| n357
  n365 -->|Depends on| n369
  n365 -->|Depends on| n367
  n365 -->|Depends on| n229
  n365 -->|Depends on| n228
  n365 -->|Depends on| n325
  n365 -->|Depends on| n323
  n365 -->|Depends on| n727
  n367 -->|Defined by| n379
  n367 -->|Depends on| n379
  n367 -->|Depends on| n232
  n367 -->|Depends on| n239
  n367 -->|Depends on| n237
  n367 -->|Depends on| n236
  n369 -->|Defined by| n379
  n369 -->|Depends on| n379
  n369 -->|Depends on| n245
  n369 -->|Depends on| n240
  n369 -->|Depends on| n760
  n369 -->|Depends on| n749
  n370 -->|Uses the variables of| n7
  n370 -->|Uses the variables of| n13
  n370 -->|Uses the variables of| n9
  n370 -->|Uses the variables of| n8
  n370 -->|Uses the variables of| n12
  n370 -->|Uses the variables of| n5
  n370 -->|Uses the variables of| n10
  n370 -->|Uses the variables of| n3
  n370 -->|Uses the variables of| n6
  n370 -->|Styles| n365
  n372 -->|Defined by| n379
  n372 -->|Depends on| n379
  n372 -->|Depends on| n371
  n372 -->|Depends on| n368
  n372 -->|Depends on| n235
  n372 -->|Depends on| n236
  n373 -->|Defined by| n379
  n373 -->|Depends on| n379
  n373 -->|Depends on| n235
  n373 -->|Depends on| n374
  n373 -->|Depends on| n360
  n373 -->|Depends on| n356
  n374 -->|Defined by| n379
  n374 -->|Depends on| n379
  n374 -->|Depends on| n235
  n374 -->|Depends on| n351
  n374 -->|Depends on| n352
  n374 -->|Depends on| n353
  n374 -->|Depends on| n363
  n374 -->|Depends on| n355
  n376 -->|Defined by| n379
  n376 -->|Depends on| n379
  n376 -->|Depends on| n229
  n376 -->|Depends on| n228
  n376 -->|Depends on| n230
  n376 -->|Depends on| n227
  n377 -->|Serves| n475
  n377 -->|Applied by| n370
  n377 -->|Applied by| n362
  n377 -->|Applied by| n378
  n377 -->|Applied by| n361
  n377 -->|Applied by| n365
  n378 -->|Defined by| n379
  n378 -->|Depends on| n379
  n378 -->|Depends on| n229
  n378 -->|Depends on| n242
  n378 -->|Depends on| n241
  n378 -->|Depends on| n226
  n378 -->|Depends on| n243
  n378 -->|Depends on| n231
  n378 -->|Depends on| n228
  n380 -->|Chooses| n393
  n380 -->|In| n30
  n380 -->|In| n53
  n380 -->|Serves| n469
  n381 -->|Chooses| n420
  n381 -->|In| n30
  n381 -->|In| n53
  n381 -->|Serves| n469
  n382 -->|Implements| n21
  n383 -->|Implements| n22
  n384 -->|Implements| n23
  n386 -->|Chooses| n431
  n386 -->|Chooses| n419
  n386 -->|In| n30
  n386 -->|In| n53
  n386 -->|Serves| n469
  n387 -->|Implements| n16
  n387 -->|Uses| n335
  n388 -->|Chooses| n387
  n388 -->|In| n30
  n388 -->|In| n53
  n388 -->|Serves| n469
  n389 -->|Implements| n41
  n389 -->|Implements| n43
  n389 -->|Implements| n42
  n389 -->|Depends on| n390
  n389 -->|Depends on| n39
  n389 -->|Depends on| n161
  n389 -->|Depends on| n327
  n391 -->|Chooses| n398
  n391 -->|Chooses| n413
  n391 -->|In| n53
  n391 -->|Serves| n469
  n392 -->|Chooses| n401
  n392 -->|Chooses| n427
  n392 -->|Chooses| n414
  n392 -->|Chooses| n389
  n392 -->|Chooses| n399
  n392 -->|In| n53
  n392 -->|Serves| n469
  n393 -->|Implements| n14
  n393 -->|Depends on| n21
  n393 -->|Depends on| n23
  n393 -->|Depends on| n775
  n393 -->|Depends on| n755
  n393 -->|Depends on| n756
  n393 -->|Depends on| n753
  n393 -->|Depends on| n752
  n393 -->|Depends on| n764
  n393 -->|Depends on| n770
  n393 -->|Depends on| n772
  n393 -->|Depends on| n758
  n393 -->|Depends on| n762
  n395 -->|Depends on| n22
  n395 -->|Depends on| n23
  n395 -->|Depends on| n21
  n395 -->|Depends on| n39
  n396 -->|Depends on| n22
  n396 -->|Depends on| n23
  n396 -->|Depends on| n21
  n396 -->|Depends on| n39
  n396 -->|Depends on| n397
  n396 -->|Depends on| n156
  n398 -->|Implements| n21
  n398 -->|Implements| n23
  n398 -->|Implements| n22
  n398 -->|Implements| n57
  n398 -->|Depends on| n39
  n398 -->|Depends on| n400
  n398 -->|Depends on| n327
  n399 -->|Implements| n26
  n399 -->|Implements| n47
  n399 -->|Depends on| n327
  n401 -->|Implements| n51
  n401 -->|Implements| n52
  n401 -->|Depends on| n394
  n401 -->|Depends on| n327
  n402 -->|Implements| n18
  n402 -->|Depends on| n51
  n402 -->|Depends on| n161
  n402 -->|Depends on| n154
  n402 -->|Depends on| n327
  n403 -->|Implements| n19
  n403 -->|Depends on| n364
  n404 -->|Implements| n25
  n405 -->|Implements| n26
  n406 -->|Chooses| n382
  n406 -->|Chooses| n384
  n406 -->|Chooses| n383
  n406 -->|Chooses| n409
  n406 -->|Chooses| n410
  n406 -->|Chooses| n411
  n406 -->|Chooses| n428
  n406 -->|Chooses| n416
  n406 -->|Chooses| n415
  n406 -->|Chooses| n405
  n406 -->|In| n30
  n406 -->|Serves| n469
  n407 -->|Implements| n39
  n408 -->|Chooses| n407
  n408 -->|Chooses| n404
  n408 -->|Chooses| n403
  n408 -->|Chooses| n412
  n408 -->|Chooses| n402
  n408 -->|Chooses| n421
  n408 -->|In| n30
  n408 -->|In| n53
  n408 -->|Serves| n469
  n409 -->|Implements| n41
  n409 -->|Depends on| n435
  n409 -->|Depends on| n162
  n410 -->|Implements| n43
  n410 -->|Depends on| n435
  n411 -->|Implements| n51
  n411 -->|Depends on| n327
  n412 -->|Implements| n54
  n413 -->|Implements| n33
  n413 -->|Depends on| n23
  n413 -->|Depends on| n39
  n413 -->|Depends on| n156
  n413 -->|Depends on| n341
  n414 -->|Implements| n34
  n415 -->|Implements| n33
  n416 -->|Implements| n34
  n417 -->|Depends on| n395
  n417 -->|Depends on| n396
  n418 -->|Chooses| n417
  n418 -->|In| n30
  n418 -->|In| n53
  n418 -->|Serves| n469
  n419 -->|Implements| n45
  n419 -->|Depends on| n385
  n419 -->|Depends on| n156
  n419 -->|Depends on| n220
  n419 -->|Depends on| n773
  n420 -->|Implements| n56
  n420 -->|Uses| n347
  n420 -->|Uses| n340
  n421 -->|Implements| n27
  n422 -->|Chooses| n210
  n422 -->|In| n30
  n422 -->|In| n53
  n422 -->|Serves| n469
  n423 -->|Implements| n46
  n424 -->|Chooses| n423
  n424 -->|In| n53
  n424 -->|Serves| n469
  n425 -->|Chooses| n426
  n425 -->|In| n30
  n425 -->|Serves| n469
  n426 -->|Implements| n46
  n426 -->|Depends on| n156
  n426 -->|Depends on| n385
  n426 -->|Depends on| n195
  n426 -->|Depends on| n201
  n427 -->|Implements| n17
  n427 -->|Depends on| n429
  n427 -->|Depends on| n430
  n428 -->|Implements| n17
  n428 -->|Depends on| n162
  n431 -->|Implements| n40
  n431 -->|Depends on| n385
  n432 -->|Chooses| n436
  n432 -->|In| n30
  n432 -->|In| n53
  n432 -->|Serves| n469
  n433 -->|Implements| n31
  n433 -->|Uses| n345
  n433 -->|Depends on| n40
  n433 -->|Depends on| n155
  n433 -->|Depends on| n773
  n434 -->|Chooses| n433
  n434 -->|In| n30
  n434 -->|In| n53
  n434 -->|Serves| n469
  n436 -->|Implements| n50
  n436 -->|Uses| n349
  n436 -->|Uses| n338
  n436 -->|Uses| n333
  n436 -->|Depends on| n327
  n437 -->|Serves| n468
  n437 -->|Applied by| n189
  n437 -->|Applied by| n131
  n438 -->|Serves| n475
  n438 -->|Applied by| n189
  n438 -->|Applied by| n202
  n439 -->|Serves| n475
  n439 -->|Applied by| n197
  n439 -->|Applied by| n199
  n440 -->|Serves| n468
  n440 -->|Applied by| n123
  n440 -->|Applied by| n165
  n441 -->|Serves| n468
  n441 -->|Applied by| n55
  n441 -->|Applied by| n44
  n441 -->|Applied by| n32
  n441 -->|Applied by| n29
  n442 -->|Serves| n475
  n442 -->|Applied by| n189
  n442 -->|Applied by| n727
  n443 -->|Serves| n468
  n443 -->|Applied by| n114
  n443 -->|Applied by| n218
  n443 -->|Applied by| n634
  n443 -->|Applied by| n640
  n444 -->|Serves| n468
  n444 -->|Applied by| n213
  n444 -->|Applied by| n56
  n444 -->|Applied by| n773
  n444 -->|Applied by| n150
  n445 -->|Serves| n468
  n445 -->|Applied by| n189
  n445 -->|Applied by| n120
  n446 -->|Serves| n475
  n446 -->|Applied by| n204
  n446 -->|Applied by| n135
  n447 -->|Serves| n475
  n447 -->|Applied by| n189
  n447 -->|Applied by| n188
  n447 -->|Applied by| n207
  n447 -->|Applied by| n213
  n447 -->|Applied by| n202
  n448 -->|Serves| n477
  n448 -->|Applied by| n209
  n448 -->|Applied by| n189
  n448 -->|Applied by| n188
  n448 -->|Applied by| n211
  n448 -->|Applied by| n271
  n448 -->|Applied by| n114
  n449 -->|Serves| n477
  n449 -->|Applied by| n209
  n449 -->|Applied by| n202
  n449 -->|Applied by| n147
  n449 -->|Applied by| n139
  n449 -->|Applied by| n274
  n449 -->|Applied by| n273
  n450 -->|Serves| n475
  n450 -->|Applied by| n719
  n450 -->|Applied by| n248
  n450 -->|Applied by| n189
  n450 -->|Applied by| n29
  n450 -->|Applied by| n32
  n451 -->|Serves| n468
  n451 -->|Applied by| n202
  n451 -->|Applied by| n189
  n451 -->|Applied by| n209
  n452 -->|Serves| n475
  n452 -->|Applied by| n189
  n452 -->|Applied by| n727
  n453 -->|Serves| n475
  n453 -->|Applied by| n120
  n453 -->|Applied by| n144
  n453 -->|Applied by| n205
  n453 -->|Applied by| n365
  n453 -->|Applied by| n187
  n454 -->|Serves| n468
  n454 -->|Applied by| n188
  n454 -->|Applied by| n199
  n454 -->|Applied by| n216
  n454 -->|Applied by| n44
  n455 -->|Serves| n477
  n455 -->|Applied by| n209
  n455 -->|Applied by| n147
  n455 -->|Applied by| n417
  n455 -->|Applied by| n114
  n455 -->|Applied by| n202
  n455 -->|Applied by| n131
  n456 -->|Serves| n468
  n456 -->|Applied by| n40
  n456 -->|Applied by| n157
  n456 -->|Applied by| n152
  n456 -->|Applied by| n202
  n457 -->|Serves| n468
  n457 -->|Applied by| n142
  n457 -->|Applied by| n136
  n457 -->|Applied by| n711
  n457 -->|Applied by| n716
  n457 -->|Applied by| n714
  n457 -->|Applied by| n680
  n457 -->|Applied by| n659
  n458 -->|Serves| n469
  n458 -->|Applied by| n408
  n458 -->|Applied by| n406
  n458 -->|Applied by| n392
  n458 -->|Applied by| n388
  n458 -->|Applied by| n432
  n458 -->|Applied by| n434
  n458 -->|Applied by| n381
  n458 -->|Applied by| n386
  n458 -->|Applied by| n607
  n458 -->|Applied by| n608
  n458 -->|Applied by| n627
  n458 -->|Applied by| n626
  n458 -->|Applied by| n619
  n458 -->|Applied by| n618
  n459 -->|Serves| n468
  n459 -->|Applied by| n114
  n459 -->|Applied by| n218
  n459 -->|Applied by| n635
  n459 -->|Applied by| n634
  n459 -->|Applied by| n645
  n460 -->|Serves| n468
  n460 -->|Applied by| n189
  n460 -->|Applied by| n217
  n461 -->|Serves| n468
  n461 -->|Applied by| n202
  n461 -->|Applied by| n645
  n462 -->|Serves| n468
  n462 -->|Applied by| n202
  n462 -->|Applied by| n216
  n462 -->|Applied by| n209
  n463 -->|Serves| n475
  n463 -->|Applied by| n727
  n463 -->|Applied by| n719
  n463 -->|Applied by| n317
  n463 -->|Applied by| n320
  n463 -->|Applied by| n324
  n463 -->|Applied by| n330
  n463 -->|Applied by| n325
  n463 -->|Applied by| n319
  n463 -->|Applied by| n316
  n463 -->|Applied by| n315
  n463 -->|Applied by| n328
  n463 -->|Applied by| n327
  n463 -->|Applied by| n329
  n473 -->|Refines| n468
  n474 -->|Accepts| n473
  n478 -->|Releases| n55
  n479 -->|Releases| n55
  n479 -->|Assembled by| n595
  n480 -->|Releases| n55
  n480 -->|Assembled by| n605
  n481 -->|Releases| n55
  n481 -->|Assembled by| n480
  n482 -->|Releases| n55
  n482 -->|Assembled by| n481
  n483 -->|Releases| n55
  n483 -->|Assembled by| n482
  n484 -->|Releases| n55
  n484 -->|Assembled by| n483
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
  n490 -->|Assembled by| n479
  n491 -->|Releases| n55
  n491 -->|Assembled by| n489
  n492 -->|Releases| n55
  n492 -->|Assembled by| n491
  n493 -->|Releases| n55
  n493 -->|Assembled by| n492
  n494 -->|Releases| n55
  n494 -->|Assembled by| n493
  n495 -->|Releases| n55
  n495 -->|Assembled by| n494
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
  n501 -->|Assembled by| n490
  n502 -->|Releases| n55
  n502 -->|Assembled by| n500
  n503 -->|Releases| n55
  n503 -->|Assembled by| n502
  n504 -->|Releases| n55
  n504 -->|Assembled by| n503
  n505 -->|Releases| n55
  n505 -->|Assembled by| n504
  n506 -->|Releases| n55
  n506 -->|Assembled by| n505
  n507 -->|Releases| n55
  n507 -->|Assembled by| n506
  n508 -->|Releases| n55
  n508 -->|Assembled by| n507
  n509 -->|Releases| n55
  n509 -->|Assembled by| n508
  n510 -->|Releases| n55
  n510 -->|Assembled by| n509
  n511 -->|Releases| n55
  n511 -->|Assembled by| n501
  n512 -->|Releases| n55
  n512 -->|Assembled by| n511
  n513 -->|Releases| n55
  n513 -->|Assembled by| n512
  n514 -->|Releases| n55
  n514 -->|Assembled by| n513
  n515 -->|Releases| n55
  n515 -->|Assembled by| n514
  n516 -->|Releases| n55
  n516 -->|Assembled by| n515
  n517 -->|Releases| n55
  n517 -->|Assembled by| n516
  n518 -->|Releases| n55
  n518 -->|Assembled by| n478
  n519 -->|Releases| n55
  n519 -->|Assembled by| n517
  n520 -->|Releases| n55
  n520 -->|Assembled by| n519
  n521 -->|Releases| n55
  n521 -->|Assembled by| n520
  n522 -->|Releases| n55
  n522 -->|Assembled by| n521
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
  n529 -->|Assembled by| n518
  n530 -->|Releases| n55
  n530 -->|Assembled by| n528
  n531 -->|Releases| n55
  n531 -->|Assembled by| n530
  n532 -->|Releases| n55
  n532 -->|Assembled by| n531
  n533 -->|Releases| n55
  n533 -->|Assembled by| n532
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
  n540 -->|Assembled by| n529
  n541 -->|Releases| n55
  n541 -->|Assembled by| n539
  n542 -->|Releases| n55
  n542 -->|Assembled by| n541
  n543 -->|Releases| n55
  n543 -->|Assembled by| n542
  n544 -->|Releases| n55
  n544 -->|Assembled by| n543
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
  n551 -->|Assembled by| n540
  n552 -->|Releases| n55
  n552 -->|Assembled by| n550
  n553 -->|Releases| n55
  n553 -->|Assembled by| n552
  n554 -->|Releases| n55
  n554 -->|Assembled by| n553
  n555 -->|Releases| n55
  n555 -->|Assembled by| n554
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
  n562 -->|Assembled by| n551
  n563 -->|Releases| n55
  n563 -->|Assembled by| n561
  n564 -->|Releases| n55
  n564 -->|Assembled by| n563
  n565 -->|Releases| n55
  n565 -->|Assembled by| n564
  n566 -->|Releases| n55
  n566 -->|Assembled by| n565
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
  n573 -->|Assembled by| n562
  n574 -->|Releases| n55
  n574 -->|Assembled by| n572
  n575 -->|Releases| n55
  n575 -->|Assembled by| n574
  n576 -->|Releases| n55
  n576 -->|Assembled by| n575
  n577 -->|Releases| n55
  n577 -->|Assembled by| n576
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
  n584 -->|Assembled by| n573
  n585 -->|Releases| n55
  n585 -->|Assembled by| n583
  n586 -->|Releases| n55
  n586 -->|Assembled by| n585
  n587 -->|Releases| n55
  n587 -->|Assembled by| n586
  n588 -->|Releases| n55
  n588 -->|Assembled by| n587
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
  n595 -->|Assembled by| n584
  n596 -->|Releases| n55
  n596 -->|Assembled by| n594
  n597 -->|Releases| n55
  n597 -->|Assembled by| n596
  n598 -->|Releases| n55
  n598 -->|Assembled by| n597
  n599 -->|Releases| n55
  n599 -->|Assembled by| n598
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
  n606 -->|Serves| n468
  n606 -->|Depends on| n159
  n606 -->|Depends on| n623
  n606 -->|Depends on| n328
  n607 -->|Chooses| n613
  n607 -->|In| n30
  n607 -->|In| n53
  n607 -->|Serves| n469
  n608 -->|Chooses| n615
  n608 -->|In| n30
  n608 -->|In| n53
  n608 -->|Serves| n469
  n610 -->|Serves| n468
  n610 -->|Depends on| n606
  n610 -->|Depends on| n611
  n610 -->|Depends on| n328
  n612 -->|Serves| n468
  n612 -->|Implements| n621
  n612 -->|Depends on| n617
  n612 -->|Depends on| n298
  n612 -->|Depends on| n379
  n612 -->|Depends on| n236
  n612 -->|Depends on| n238
  n612 -->|Depends on| n233
  n612 -->|Depends on| n623
  n612 -->|Depends on| n328
  n613 -->|Serves| n468
  n613 -->|Implements| n611
  n613 -->|Depends on| n609
  n613 -->|Depends on| n185
  n613 -->|Depends on| n280
  n613 -->|Depends on| n287
  n613 -->|Depends on| n289
  n613 -->|Depends on| n279
  n613 -->|Depends on| n281
  n613 -->|Depends on| n285
  n613 -->|Depends on| n292
  n613 -->|Depends on| n282
  n613 -->|Depends on| n288
  n613 -->|Depends on| n290
  n613 -->|Depends on| n294
  n613 -->|Depends on| n293
  n613 -->|Depends on| n276
  n613 -->|Depends on| n284
  n613 -->|Depends on| n328
  n614 -->|Serves| n468
  n614 -->|Applied by| n610
  n614 -->|Applied by| n628
  n614 -->|Applied by| n620
  n614 -->|Applied by| n606
  n614 -->|Applied by| n44
  n615 -->|Serves| n468
  n615 -->|Implements| n609
  n615 -->|Depends on| n307
  n615 -->|Depends on| n182
  n615 -->|Depends on| n7
  n615 -->|Depends on| n291
  n615 -->|Depends on| n302
  n615 -->|Depends on| n310
  n615 -->|Depends on| n314
  n615 -->|Depends on| n309
  n615 -->|Depends on| n301
  n615 -->|Depends on| n312
  n615 -->|Depends on| n303
  n615 -->|Depends on| n305
  n615 -->|Depends on| n306
  n615 -->|Depends on| n311
  n615 -->|Depends on| n328
  n616 -->|Serves| n469
  n616 -->|Applied by| n610
  n616 -->|Applied by| n628
  n616 -->|Applied by| n620
  n616 -->|Applied by| n607
  n616 -->|Applied by| n608
  n616 -->|Applied by| n627
  n616 -->|Applied by| n626
  n616 -->|Applied by| n619
  n616 -->|Applied by| n618
  n618 -->|Chooses| n624
  n618 -->|In| n30
  n618 -->|In| n53
  n618 -->|Serves| n469
  n619 -->|Chooses| n612
  n619 -->|In| n30
  n619 -->|In| n53
  n619 -->|Serves| n469
  n620 -->|Serves| n468
  n620 -->|Depends on| n606
  n620 -->|Depends on| n621
  n620 -->|Depends on| n328
  n622 -->|Serves| n468
  n622 -->|Implements| n629
  n622 -->|Depends on| n625
  n622 -->|Depends on| n745
  n622 -->|Depends on| n743
  n622 -->|Depends on| n741
  n622 -->|Depends on| n739
  n622 -->|Depends on| n740
  n622 -->|Depends on| n738
  n622 -->|Depends on| n744
  n622 -->|Depends on| n328
  n624 -->|Serves| n468
  n624 -->|Implements| n617
  n624 -->|Depends on| n298
  n624 -->|Depends on| n300
  n624 -->|Depends on| n379
  n624 -->|Depends on| n1
  n624 -->|Depends on| n11
  n624 -->|Depends on| n2
  n624 -->|Depends on| n236
  n624 -->|Depends on| n247
  n624 -->|Depends on| n244
  n624 -->|Depends on| n228
  n624 -->|Depends on| n233
  n624 -->|Depends on| n606
  n624 -->|Depends on| n326
  n624 -->|Depends on| n328
  n626 -->|Chooses| n630
  n626 -->|In| n30
  n626 -->|In| n53
  n626 -->|Serves| n469
  n627 -->|Chooses| n622
  n627 -->|In| n30
  n627 -->|In| n53
  n627 -->|Serves| n469
  n628 -->|Serves| n468
  n628 -->|Depends on| n606
  n628 -->|Depends on| n629
  n628 -->|Depends on| n328
  n630 -->|Serves| n468
  n630 -->|Implements| n625
  n630 -->|Depends on| n606
  n630 -->|Depends on| n743
  n630 -->|Depends on| n741
  n630 -->|Depends on| n739
  n630 -->|Depends on| n746
  n630 -->|Depends on| n742
  n630 -->|Depends on| n328
  n631 -->|Verifies| n642
  n631 -->|Verifies| n649
  n631 -->|In| n53
  n631 -->|Depends on| n647
  n631 -->|Depends on| n641
  n631 -->|Depends on| n329
  n632 -->|Verifies| n189
  n632 -->|Verifies| n217
  n632 -->|Verifies| n187
  n632 -->|Verifies| n776
  n632 -->|In| n53
  n632 -->|Depends on| n189
  n632 -->|Depends on| n41
  n632 -->|Depends on| n187
  n632 -->|Depends on| n152
  n632 -->|Depends on| n633
  n632 -->|Depends on| n329
  n634 -->|Verifies| n120
  n634 -->|Verifies| n133
  n634 -->|Verifies| n188
  n634 -->|Verifies| n216
  n634 -->|Verifies| n610
  n634 -->|Verifies| n606
  n634 -->|Verifies| n613
  n634 -->|Verifies| n615
  n634 -->|Verifies| n205
  n634 -->|Verifies| n204
  n634 -->|Verifies| n398
  n634 -->|Verifies| n401
  n634 -->|Verifies| n427
  n634 -->|In| n53
  n634 -->|Depends on| n120
  n634 -->|Depends on| n640
  n634 -->|Depends on| n57
  n634 -->|Depends on| n52
  n634 -->|Depends on| n156
  n634 -->|Depends on| n21
  n634 -->|Depends on| n39
  n634 -->|Depends on| n41
  n634 -->|Depends on| n161
  n634 -->|Depends on| n316
  n634 -->|Depends on| n329
  n635 -->|Verifies| n189
  n635 -->|Verifies| n209
  n635 -->|Verifies| n213
  n635 -->|Verifies| n217
  n635 -->|Verifies| n199
  n635 -->|Verifies| n420
  n635 -->|Verifies| n433
  n635 -->|Verifies| n431
  n635 -->|Verifies| n398
  n635 -->|Verifies| n407
  n635 -->|Verifies| n389
  n635 -->|Verifies| n421
  n635 -->|In| n53
  n635 -->|Depends on| n189
  n635 -->|Depends on| n41
  n635 -->|Depends on| n17
  n635 -->|Depends on| n639
  n635 -->|Depends on| n329
  n636 -->|Verifies| n186
  n636 -->|Verifies| n348
  n636 -->|Verifies| n183
  n636 -->|In| n53
  n636 -->|Depends on| n186
  n636 -->|Depends on| n323
  n636 -->|Depends on| n348
  n636 -->|Depends on| n637
  n636 -->|Depends on| n329
  n638 -->|Verifies| n190
  n638 -->|Verifies| n198
  n638 -->|Verifies| n197
  n638 -->|Verifies| n211
  n638 -->|Verifies| n208
  n638 -->|In| n53
  n638 -->|Depends on| n190
  n638 -->|Depends on| n198
  n638 -->|Depends on| n197
  n638 -->|Depends on| n211
  n638 -->|Depends on| n208
  n638 -->|Depends on| n646
  n638 -->|Depends on| n329
  n642 -->|Implements| n647
  n642 -->|Depends on| n641
  n644 -->|Verifies| n200
  n644 -->|In| n53
  n644 -->|Depends on| n200
  n644 -->|Depends on| n643
  n644 -->|Depends on| n329
  n645 -->|Verifies| n202
  n645 -->|In| n53
  n645 -->|Depends on| n202
  n645 -->|Depends on| n189
  n645 -->|Depends on| n41
  n645 -->|Depends on| n17
  n645 -->|Depends on| n329
  n648 -->|Chooses| n649
  n648 -->|Chooses| n642
  n648 -->|In| n53
  n649 -->|Implements| n647
  n649 -->|Depends on| n641
  n650 -->|Serves| n468
  n650 -->|Part of| n707
  n650 -->|Depends on| n41
  n650 -->|Depends on| n156
  n650 -->|Depends on| n161
  n650 -->|Depends on| n673
  n650 -->|Depends on| n664
  n650 -->|Depends on| n773
  n650 -->|Depends on| n769
  n650 -->|Depends on| n702
  n651 -->|Verifies| n650
  n651 -->|In| n53
  n651 -->|Depends on| n650
  n651 -->|Depends on| n42
  n651 -->|Depends on| n161
  n651 -->|Depends on| n673
  n651 -->|Depends on| n652
  n651 -->|Depends on| n769
  n651 -->|Depends on| n329
  n653 -->|Serves| n468
  n653 -->|Part of| n707
  n653 -->|Depends on| n706
  n653 -->|Depends on| n677
  n653 -->|Depends on| n702
  n654 -->|Serves| n468
  n655 -->|Serves| n468
  n656 -->|In| n48
  n657 -->|In| n30
  n658 -->|Serves| n468
  n659 -->|Checks| n664
  n659 -->|Run by| n145
  n659 -->|Signed by| n678
  n660 -->|Checks| n664
  n660 -->|Run by| n125
  n660 -->|Signed by| n678
  n660 -->|Verifies| n382
  n660 -->|Verifies| n384
  n660 -->|Verifies| n383
  n660 -->|Verifies| n409
  n660 -->|Verifies| n410
  n660 -->|Verifies| n411
  n660 -->|Verifies| n428
  n660 -->|Verifies| n416
  n660 -->|Verifies| n415
  n660 -->|Verifies| n405
  n660 -->|Verifies| n426
  n661 -->|Chooses| n687
  n661 -->|Chooses| n686
  n661 -->|In| n30
  n661 -->|In| n48
  n661 -->|Serves| n468
  n662 -->|In| n30
  n662 -->|Serves| n468
  n663 -->|Serves| n468
  n664 -->|Produced by| n55
  n665 -->|Serves| n468
  n666 -->|Serves| n468
  n667 -->|Its obligations| n666
  n667 -->|Its obligations| n675
  n667 -->|Its obligations| n654
  n667 -->|Its obligations| n658
  n667 -->|Its obligations| n655
  n667 -->|Its obligations| n665
  n667 -->|Its obligations| n663
  n668 -->|Produced by| n129
  n668 -->|Carries| n36
  n670 -->|Checks| n668
  n670 -->|Run by| n682
  n670 -->|Signed by| n678
  n670 -->|Verifies| n64
  n670 -->|Verifies| n63
  n670 -->|Verifies| n62
  n670 -->|Verifies| n61
  n670 -->|Verifies| n60
  n670 -->|Verifies| n58
  n670 -->|Verifies| n59
  n672 -->|Serves| n468
  n672 -->|Depends on| n368
  n672 -->|Depends on| n298
  n672 -->|Depends on| n226
  n674 -->|Ships| n705
  n674 -->|Requires| n676
  n674 -->|Requires| n690
  n674 -->|Programs assembled for| n30
  n674 -->|Follows the policy| n679
  n675 -->|Serves| n468
  n676 -->|Signed by| n678
  n676 -->|Verifies| n685
  n679 -->|Its obligations| n666
  n679 -->|Its obligations| n655
  n680 -->|Ships| n664
  n680 -->|Ships| n689
  n680 -->|Ships| n668
  n680 -->|Deployed by| n114
  n680 -->|Programs assembled for| n30
  n680 -->|Follows the policy| n667
  n681 -->|Verifies| n682
  n681 -->|Verifies| n672
  n681 -->|In| n53
  n681 -->|Depends on| n682
  n681 -->|Depends on| n668
  n681 -->|Depends on| n672
  n681 -->|Depends on| n702
  n681 -->|Depends on| n671
  n681 -->|Depends on| n329
  n682 -->|Serves| n468
  n682 -->|Part of| n707
  n682 -->|Depends on| n668
  n682 -->|Depends on| n323
  n682 -->|Depends on| n672
  n682 -->|Depends on| n669
  n682 -->|Depends on| n702
  n683 -->|Verifies| n687
  n683 -->|Verifies| n686
  n683 -->|In| n53
  n683 -->|Depends on| n706
  n683 -->|Depends on| n677
  n683 -->|Depends on| n694
  n683 -->|Depends on| n156
  n683 -->|Depends on| n161
  n683 -->|Depends on| n429
  n683 -->|Depends on| n691
  n683 -->|Depends on| n329
  n685 -->|Depends on| n684
  n686 -->|Serves| n468
  n686 -->|Depends on| n156
  n686 -->|Depends on| n158
  n686 -->|Depends on| n773
  n686 -->|Depends on| n161
  n686 -->|Depends on| n162
  n686 -->|Depends on| n429
  n686 -->|Depends on| n694
  n687 -->|Serves| n468
  n687 -->|Depends on| n706
  n687 -->|Depends on| n677
  n687 -->|Depends on| n691
  n687 -->|Depends on| n156
  n687 -->|Depends on| n694
  n688 -->|Chooses| n687
  n688 -->|Chooses| n686
  n688 -->|In| n53
  n689 -->|Produced by| n36
  n689 -->|Assembled for| n15
  n690 -->|Signed by| n678
  n692 -->|Runs elsewhere| n674
  n692 -->|Its writer's settings| n691
  n693 -->|Serves| n468
  n693 -->|Part of| n707
  n693 -->|Depends on| n706
  n693 -->|Depends on| n677
  n693 -->|Depends on| n702
  n695 -->|Run by| n693
  n695 -->|Signed by| n678
  n697 -->|Requires| n695
  n697 -->|Deployed by| n653
  n697 -->|Programs assembled for| n30
  n697 -->|Follows the policy| n703
  n698 -->|In| n30
  n698 -->|In| n48
  n699 -->|Ships| n692
  n700 -->|In| n53
  n701 -->|In| n30
  n701 -->|In| n48
  n702 -->|Written in| n323
  n703 -->|Its obligations| n666
  n703 -->|Its obligations| n655
  n703 -->|Its obligations| n663
  n704 -->|Verifies| n693
  n704 -->|Verifies| n653
  n704 -->|In| n53
  n704 -->|Depends on| n693
  n704 -->|Depends on| n653
  n704 -->|Depends on| n706
  n704 -->|Depends on| n677
  n704 -->|Depends on| n696
  n704 -->|Depends on| n702
  n704 -->|Depends on| n329
  n707 -->|Deployed in| n30
  n708 -->|Chooses| n685
  n708 -->|In| n30
  n708 -->|In| n48
  n709 -->|Implements| n49
  n709 -->|Depends on| n25
  n711 -->|Serves| n468
  n711 -->|Depends on| n156
  n711 -->|Depends on| n716
  n711 -->|Depends on| n21
  n711 -->|Depends on| n39
  n711 -->|Depends on| n25
  n711 -->|Depends on| n153
  n711 -->|Depends on| n197
  n711 -->|Depends on| n49
  n712 -->|Chooses| n709
  n712 -->|In| n30
  n712 -->|In| n53
  n712 -->|Serves| n468
  n713 -->|Serves| n468
  n713 -->|Depends on| n161
  n713 -->|Depends on| n209
  n713 -->|Depends on| n156
  n713 -->|Depends on| n221
  n713 -->|Depends on| n21
  n713 -->|Depends on| n39
  n714 -->|Refines| n468
  n715 -->|Accepts| n714
  n719 -->|Serves| n468
  n719 -->|Depends on| n157
  n719 -->|Depends on| n320
  n723 -->|Written in| n323
  n724 -->|Serves| n468
  n724 -->|Applied by| n727
  n724 -->|Applied by| n50
  n725 -->|Serves| n468
  n725 -->|Applied by| n727
  n725 -->|Applied by| n719
  n725 -->|Applied by| n50
  n726 -->|In| n53
  n726 -->|Serves| n468
  n727 -->|Serves| n468
  n727 -->|Serves| n475
  n727 -->|Depends on| n50
  n727 -->|Depends on| n720
  n727 -->|Depends on| n723
  n727 -->|Depends on| n721
  n727 -->|Depends on| n722
  n727 -->|Depends on| n717
  n727 -->|Depends on| n21
  n727 -->|Depends on| n27
  n727 -->|Depends on| n46
  n727 -->|Depends on| n156
  n727 -->|Depends on| n39
  n727 -->|Depends on| n25
  n728 -->|Defined by| n731
  n728 -->|Read in| n734
  n728 -->|Depends on| n731
  n729 -->|Defined by| n731
  n729 -->|Read in| n734
  n729 -->|Depends on| n731
  n730 -->|Defined by| n731
  n730 -->|Read in| n734
  n730 -->|Depends on| n731
  n730 -->|Depends on| n734
  n732 -->|Defined by| n731
  n732 -->|Read in| n734
  n732 -->|Depends on| n731
  n732 -->|Depends on| n730
  n733 -->|Defined by| n731
  n733 -->|Read in| n734
  n733 -->|Depends on| n731
  n733 -->|Depends on| n735
  n733 -->|Depends on| n730
  n734 -->|Defined by| n731
  n734 -->|Read by| n727
  n734 -->|Uses| n337
  n736 -->|Serves| n468
  n736 -->|Depends on| n731
  n736 -->|Depends on| n735
  n736 -->|Depends on| n156
  n736 -->|Depends on| n729
  n736 -->|Depends on| n730
  n736 -->|Depends on| n732
  n736 -->|Depends on| n728
  n736 -->|Depends on| n733
  n736 -->|Depends on| n39
  n736 -->|Depends on| n40
  n736 -->|Depends on| n320
  n738 -->|Defined by| n745
  n738 -->|Depends on| n745
  n739 -->|Defined by| n745
  n739 -->|Depends on| n745
  n739 -->|Depends on| n741
  n739 -->|Depends on| n743
  n740 -->|Defined by| n745
  n740 -->|Depends on| n745
  n741 -->|Defined by| n745
  n741 -->|Depends on| n745
  n741 -->|Depends on| n743
  n742 -->|Defined by| n745
  n742 -->|Depends on| n745
  n742 -->|Depends on| n737
  n744 -->|Defined by| n745
  n744 -->|Depends on| n745
  n746 -->|Defined by| n745
  n746 -->|Depends on| n745
  n746 -->|Depends on| n737
  n747 -->|Defined by| n775
  n747 -->|Read in| n773
  n747 -->|Depends on| n775
  n748 -->|Defined by| n775
  n748 -->|Read in| n773
  n748 -->|Depends on| n775
  n749 -->|Defined by| n775
  n749 -->|Read in| n773
  n749 -->|Depends on| n775
  n750 -->|Defined by| n775
  n750 -->|Read in| n773
  n750 -->|Depends on| n775
  n751 -->|Defined by| n775
  n751 -->|Read in| n773
  n751 -->|Depends on| n775
  n752 -->|Defined by| n775
  n752 -->|Read in| n773
  n752 -->|Depends on| n775
  n753 -->|Defined by| n775
  n753 -->|Read in| n773
  n753 -->|Depends on| n775
  n754 -->|Defined by| n775
  n754 -->|Read in| n773
  n754 -->|Depends on| n775
  n754 -->|Depends on| n772
  n755 -->|Defined by| n775
  n755 -->|Read in| n773
  n755 -->|Depends on| n775
  n756 -->|Defined by| n775
  n756 -->|Read in| n773
  n756 -->|Depends on| n775
  n757 -->|Defined by| n775
  n757 -->|Read in| n773
  n757 -->|Depends on| n775
  n758 -->|Defined by| n775
  n758 -->|Read in| n773
  n758 -->|Depends on| n775
  n759 -->|Defined by| n775
  n759 -->|Read in| n773
  n759 -->|Depends on| n775
  n760 -->|Defined by| n775
  n760 -->|Read in| n773
  n760 -->|Depends on| n775
  n761 -->|Defined by| n775
  n761 -->|Read in| n773
  n761 -->|Depends on| n775
  n762 -->|Defined by| n775
  n762 -->|Read in| n773
  n762 -->|Depends on| n775
  n762 -->|Depends on| n772
  n763 -->|Defined by| n775
  n763 -->|Read in| n773
  n763 -->|Depends on| n775
  n764 -->|Defined by| n775
  n764 -->|Read in| n773
  n764 -->|Depends on| n775
  n765 -->|Defined by| n775
  n765 -->|Read in| n773
  n765 -->|Depends on| n775
  n766 -->|Defined by| n775
  n766 -->|Read in| n773
  n766 -->|Depends on| n775
  n767 -->|Defined by| n775
  n767 -->|Read in| n773
  n767 -->|Depends on| n775
  n768 -->|Defined by| n775
  n768 -->|Read in| n773
  n768 -->|Depends on| n775
  n770 -->|Defined by| n775
  n770 -->|Read in| n773
  n770 -->|Depends on| n775
  n770 -->|Depends on| n772
  n771 -->|Defined by| n775
  n771 -->|Read in| n773
  n771 -->|Depends on| n775
  n772 -->|Defined by| n775
  n772 -->|Read in| n773
  n772 -->|Depends on| n775
  n773 -->|Read by| n727
  n773 -->|Watches the globals| n778
  n773 -->|Uses| n346
  n774 -->|Serves| n468
  n776 -->|Serves| n468
  n776 -->|Depends on| n773
  n776 -->|Depends on| n775
  n776 -->|Depends on| n152
  n776 -->|Depends on| n769
  n776 -->|Depends on| n160
  n776 -->|Depends on| n159
  n776 -->|Depends on| n759
  n776 -->|Depends on| n772
  n776 -->|Depends on| n760
  n776 -->|Depends on| n766
  n776 -->|Depends on| n752
  n776 -->|Depends on| n751
  n776 -->|Depends on| n768
  n776 -->|Depends on| n770
  n776 -->|Depends on| n764
  n776 -->|Depends on| n747
  n776 -->|Depends on| n753
  n776 -->|Depends on| n762
  n776 -->|Depends on| n754
  n776 -->|Depends on| n748
  n776 -->|Depends on| n767
  n776 -->|Depends on| n765
  n776 -->|Depends on| n777
  n776 -->|Depends on| n757
  n776 -->|Depends on| n771
  n776 -->|Depends on| n749
  n776 -->|Depends on| n758
  n776 -->|Depends on| n750
  n776 -->|Depends on| n162
  n776 -->|Depends on| n39
  n776 -->|Depends on| n40
  n776 -->|Depends on| n320
  n777 -->|Defined by| n775
  n777 -->|Read in| n773
  n777 -->|Depends on| n775
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
