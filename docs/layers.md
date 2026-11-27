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
    n121["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n122["Deliver<br/><small>Entry point</small>"]:::held
    n123["Start trame dev<br/><small>Entry point</small>"]:::held
    n124["Ask the machine<br/><small>Entry point</small>"]:::held
    n125["Payload<br/><small>Entry point</small>"]:::held
    n126["Rewriting an example<br/><small>Function</small>"]:::held
    n127["Examples<br/><small>Entry point</small>"]:::held
    n128["Export the page<br/><small>Entry point</small>"]:::held
    n129["Help<br/><small>Entry point</small>"]:::held
    n130["Start a project<br/><small>Entry point</small>"]:::held
    n131["Plan a build<br/><small>Entry point</small>"]:::held
    n132["Preparation<br/><small>Function</small>"]:::held
    n133["The project's commands<br/><small>Function</small>"]:::held
    n134["Publish<br/><small>Entry point</small>"]:::held
    n135["Record evidence<br/><small>Entry point</small>"]:::held
    n136["A module of references<br/><small>Function</small>"]:::held
    n137["Fill the registry<br/><small>Entry point</small>"]:::held
    n138["Release a version<br/><small>Entry point</small>"]:::held
    n139["Render a view<br/><small>Function</small>"]:::held
    n140["Run a component<br/><small>Entry point</small>"]:::held
    n141["Ship<br/><small>Entry point</small>"]:::held
    n142["Show a view<br/><small>Entry point</small>"]:::held
    n143["Take the snapshot<br/><small>Entry point</small>"]:::held
    n144["Test the laws<br/><small>Entry point</small>"]:::held
    n145["Upgrade<br/><small>Entry point</small>"]:::held
    n146["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n147["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n148["Default rank<br/><small>Decision</small>"]:::neutral
    n149["Documentation comment<br/><small>Decision</small>"]:::neutral
    n150["Names of the documents<br/><small>Standard</small>"]:::neutral
    n151["The frozen API<br/><small>Standard</small>"]:::neutral
    n152["JSON formatting<br/><small>Decision</small>"]:::neutral
    n153["The commands the engine keeps<br/><small>Decision</small>"]:::neutral
    n154["The language's names<br/><small>Decision</small>"]:::neutral
    n155["Project layout<br/><small>Decision</small>"]:::neutral
    n156["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n157["How a project starts<br/><small>Decision</small>"]:::neutral
    n158["Trame references<br/><small>Standard</small>"]:::neutral
    n159["Names of steps<br/><small>Decision</small>"]:::neutral
    n160["Trame's commands<br/><small>Standard</small>"]:::neutral
    n161["Trame's environment<br/><small>Standard</small>"]:::neutral
    n162["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n163["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n164["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n165["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph doctor["Trame · Doctor"]
    n166["Asking<br/><small>Function</small>"]:::held
    n167["The clock gives the day<br/><small>Implementation</small>"]:::held
    n168["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n169["What the engine needs of the machine<br/><small>Port</small>"]:::neutral
    n170["What the engine asks the machine<br/><small>Technical choice</small>"]:::held
    n171["A file written is read back<br/><small>Implementation</small>"]:::held
    n172["The installer installs what a manifest names and writes its lockfile<br/><small>Implementation</small>"]:::held
    n173["A program runs with the engine's loader, and prints what it says<br/><small>Implementation</small>"]:::held
    n174["The registry answers about the packages<br/><small>Implementation</small>"]:::held
    n175["A run is kept, and given back until a file it read changes<br/><small>Implementation</small>"]:::held
    n176["A server listens on a port the system gives<br/><small>Implementation</small>"]:::held
    n177["The time passes<br/><small>Implementation</small>"]:::held
    n178["A directory copied is the same as the original<br/><small>Implementation</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n179["Documents written in Trame's language<br/><small>Technical choice</small>"]:::held
    n180["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n181["How Mermaid figures are drawn<br/><small>Decision</small>"]:::neutral
    n182["The documents in Trame's language<br/><small>Function</small>"]:::held
    n183["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n184["Heading levels of Markdown documents<br/><small>Decision</small>"]:::neutral
    n185["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n186["Assembly<br/><small>Function</small>"]:::held
    n187["Compilation API<br/><small>Function</small>"]:::held
    n188["Compiler<br/><small>Function</small>"]:::held
    n189["Cycles<br/><small>Function</small>"]:::held
    n190["Date bundle<br/><small>Function</small>"]:::held
    n191["trame dev server<br/><small>Function</small>"]:::held
    n192["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n193["Differences<br/><small>Function</small>"]:::held
    n194["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n195["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n196["Fingerprints<br/><small>Function</small>"]:::held
    n197["Pseudo-random generator<br/><small>Function</small>"]:::held
    n198["Graph<br/><small>Function</small>"]:::held
    n199["Judged harder<br/><small>Function</small>"]:::held
    n200["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n201["Laws<br/><small>Function</small>"]:::held
    n202["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n203["Lock<br/><small>Function</small>"]:::held
    n204["Machine outputs<br/><small>Function</small>"]:::held
    n205["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n206["Payload<br/><small>Function</small>"]:::held
    n207["Positions<br/><small>Function</small>"]:::held
    n208["Project<br/><small>Function</small>"]:::held
    n209["The runs of a project<br/><small>Function</small>"]:::held
    n210["References<br/><small>Function</small>"]:::held
    n211["A shipment's pipeline<br/><small>Function</small>"]:::held
    n212["Static reading<br/><small>Function</small>"]:::held
    n213["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n214["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n215["Views<br/><small>Function</small>"]:::held
    n216["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n217["Accept a candidate<br/><small>Requirement</small>"]:::held
    n218["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n219["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n220["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n221["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n222["Records of the releases<br/><small>Function</small>"]:::held
    n223["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS"]
    n224["Attribute presence<br/><small>Syntax element</small>"]:::held
    n225["Attribute selector<br/><small>Syntax element</small>"]:::held
    n226["Class selector<br/><small>Syntax element</small>"]:::held
    n227["Declaration<br/><small>Syntax element</small>"]:::held
    n228["Rule<br/><small>Syntax element</small>"]:::held
    n229["Variable<br/><small>Syntax element</small>"]:::held
    n230["Custom property<br/><small>Syntax element</small>"]:::held
    n231["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n232["Escaped text<br/><small>Syntax element</small>"]:::held
    n233["Attributes<br/><small>Syntax element</small>"]:::held
    n234["Element over several lines<br/><small>Syntax element</small>"]:::held
    n235["HTML element<br/><small>Syntax element</small>"]:::held
    n236["End tag<br/><small>Syntax element</small>"]:::held
    n237["Heading of a rank<br/><small>Syntax element</small>"]:::held
    n238["Start tag<br/><small>Syntax element</small>"]:::held
    n239["JSON in a script<br/><small>Syntax element</small>"]:::held
    n240["Media feature<br/><small>Syntax element</small>"]:::held
    n241["Media rule<br/><small>Syntax element</small>"]:::held
    n242["Negation<br/><small>Syntax element</small>"]:::held
    n243["Path data<br/><small>Syntax element</small>"]:::held
    n244["Script<br/><small>Syntax element</small>"]:::held
    n245["Selector list<br/><small>Syntax element</small>"]:::held
    n246["Self-closing tag<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n247["Drivers<br/><small>Function</small>"]:::held
    n248["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n249["Answers without crashing<br/><small>Requirement</small>"]:::held
    n250["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n251["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n252["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n253["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n254["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n255["Complete declaration<br/><small>Requirement</small>"]:::held
    n256["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n257["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n258["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n259["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n260["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n261["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n262["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n263["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n264["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n265["Same input, same answer<br/><small>Requirement</small>"]:::held
    n266["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n267["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n268["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n269["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n270["What belongs to a library<br/><small>Requirement</small>"]:::held
    n271["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n272["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n273["A release is settled<br/><small>Requirement</small>"]:::held
    n274["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markdown["Trame · Markdown"]
    n275["Anchor<br/><small>Syntax element</small>"]:::held
    n276["Backtick string<br/><small>Syntax element</small>"]:::held
    n277["Blank line<br/><small>Syntax element</small>"]:::held
    n278["Block quote<br/><small>Syntax element</small>"]:::held
    n279["Sequence of blocks<br/><small>Syntax element</small>"]:::held
    n280["Code block<br/><small>Syntax element</small>"]:::held
    n281["Code span<br/><small>Syntax element</small>"]:::held
    n282["CommonMark<br/><small>Standard</small>"]:::neutral
    n283["Collapsible block<br/><small>Syntax element</small>"]:::held
    n284["Emphasis<br/><small>Syntax element</small>"]:::held
    n285["GitHub Flavored Markdown<br/><small>Standard</small>"]:::neutral
    n286["Heading<br/><small>Syntax element</small>"]:::held
    n287["Link<br/><small>Syntax element</small>"]:::held
    n288["List item<br/><small>Syntax element</small>"]:::held
    n289["Relative reference<br/><small>Syntax element</small>"]:::held
    n290["Small text<br/><small>Syntax element</small>"]:::held
    n291["Strong emphasis<br/><small>Syntax element</small>"]:::held
    n292["Table<br/><small>Syntax element</small>"]:::held
    n293["Table cell<br/><small>Syntax element</small>"]:::held
    n294["Delimiter row<br/><small>Syntax element</small>"]:::held
    n295["Table row<br/><small>Syntax element</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n296["Around the documents<br/><small>Decision</small>"]:::neutral
    n297["Documents in the page<br/><small>Decision</small>"]:::neutral
    n298["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n299["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph mermaid["Trame · Mermaid"]
    n300["Class definition<br/><small>Syntax element</small>"]:::held
    n301["Flowchart<br/><small>Syntax element</small>"]:::held
    n302["Gantt chart<br/><small>Syntax element</small>"]:::held
    n303["Name in a Gantt chart<br/><small>Syntax element</small>"]:::held
    n304["Section<br/><small>Syntax element</small>"]:::held
    n305["Task<br/><small>Syntax element</small>"]:::held
    n306["Mermaid<br/><small>Standard</small>"]:::neutral
    n307["Label<br/><small>Syntax element</small>"]:::held
    n308["Link<br/><small>Syntax element</small>"]:::held
    n309["Node<br/><small>Syntax element</small>"]:::held
    n310["Milestone<br/><small>Syntax element</small>"]:::held
    n311["Node style<br/><small>Syntax element</small>"]:::held
    n312["Style properties<br/><small>Syntax element</small>"]:::held
    n313["Subgraph<br/><small>Syntax element</small>"]:::held
  end
  subgraph messages["Trame · Messages"]
    n314["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n315["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n316["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n317["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n318["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n319["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n320["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n321["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n322["Language<br/><small>Decision</small>"]:::neutral
    n323["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n324["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n325["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n326["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n327["Messages of the renderers<br/><small>Message catalog</small>"]:::neutral
    n328["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n329["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n330["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n331["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n332["Grammar of CSS<br/><small>Package</small>"]:::held
    n333["The renderers of documents<br/><small>Package</small>"]:::neutral
    n334["esbuild<br/><small>Package</small>"]:::held
    n335["The commands every project runs<br/><small>Package</small>"]:::neutral
    n336["Grammar of HCL<br/><small>Package</small>"]:::held
    n337["Grammar of HTML<br/><small>Package</small>"]:::held
    n338["The questions of the machine<br/><small>Package</small>"]:::neutral
    n339["Types of Node.js<br/><small>Package</small>"]:::held
    n340["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n341["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n342["The people of the repository<br/><small>Package</small>"]:::neutral
    n343["The standard library<br/><small>Package</small>"]:::neutral
    n344["tsx<br/><small>Package</small>"]:::held
    n345["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n346["TypeScript<br/><small>Package</small>"]:::held
    n347["Order of versions<br/><small>Function</small>"]:::held
    n348["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n349["Banner<br/><small>Syntax element</small>"]:::held
    n350["Brand<br/><small>Syntax element</small>"]:::held
    n351["State of the compilation<br/><small>Syntax element</small>"]:::held
    n352["Dates<br/><small>Syntax element</small>"]:::held
    n353["Head of the document<br/><small>Syntax element</small>"]:::held
    n354["Document picker<br/><small>Syntax element</small>"]:::held
    n355["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n356["Fonts<br/><small>Syntax element</small>"]:::held
    n357["Logo<br/><small>Syntax element</small>"]:::held
    n358["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n359["Main area<br/><small>Syntax element</small>"]:::held
    n360["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n361["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n362["Navigation<br/><small>Syntax element</small>"]:::held
    n363["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n364["Page<br/><small>Function</small>"]:::held
    n365["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n366["Document of the page<br/><small>Syntax element</small>"]:::held
    n367["Regions of the page<br/><small>Decision</small>"]:::neutral
    n368["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n369["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n370["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n371["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n372["Shell<br/><small>Syntax element</small>"]:::held
    n373["Side bar<br/><small>Syntax element</small>"]:::held
    n374["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n375["Colours of a status<br/><small>Syntax element</small>"]:::held
    n376["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n377["Theme<br/><small>Syntax element</small>"]:::held
    n378["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n379["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n380["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n381["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n382["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n383["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n384["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n385["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n386["esbuild<br/><small>Implementation</small>"]:::held
    n387["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n388["Example process<br/><small>Function</small>"]:::held
    n389["Example project<br/><small>Decision</small>"]:::neutral
    n390["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n391["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n392["Amendments in place<br/><small>Implementation</small>"]:::held
    n393["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n394["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n395["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n396["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n397["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n398["A server in memory<br/><small>Function</small>"]:::held
    n399["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n400["Terminal in memory<br/><small>Function</small>"]:::held
    n401["Command line<br/><small>Implementation</small>"]:::held
    n402["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n403["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n404["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n405["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n406["Node paths<br/><small>Implementation</small>"]:::held
    n407["NodePlatform<br/><small>Technical choice</small>"]:::held
    n408["Node process<br/><small>Implementation</small>"]:::unknown
    n409["Node programs<br/><small>Implementation</small>"]:::unknown
    n410["Node terminal<br/><small>Implementation</small>"]:::unknown
    n411["Node timer<br/><small>Implementation</small>"]:::held
    n412["No installer in test<br/><small>Implementation</small>"]:::held
    n413["No registry in test<br/><small>Function</small>"]:::held
    n414["npm installs<br/><small>Implementation</small>"]:::unknown
    n415["npm's reports<br/><small>Implementation</small>"]:::unknown
    n416["Packages by their origin<br/><small>Implementation</small>"]:::held
    n417["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n418["Page resources<br/><small>Implementation</small>"]:::held
    n419["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n420["Results kept in the process<br/><small>Implementation</small>"]:::held
    n421["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n422["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n423["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n424["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n425["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n426["Stopped clock<br/><small>Function</small>"]:::held
    n427["System clock<br/><small>Implementation</small>"]:::unknown
    n428["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n429["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n430["Trame's prelude<br/><small>Implementation</small>"]:::held
    n431["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n432["tsx loader<br/><small>Implementation</small>"]:::held
    n433["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n434["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n435["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n436["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n437["An amendment sits beside the value it changes<br/><small>Architecture decision</small>"]:::held
    n438["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n439["Trame runs the commands libraries offer<br/><small>Architecture decision</small>"]:::unknown
    n440["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n441["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n442["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n443["The engine is a provider, for Trame too<br/><small>Architecture decision</small>"]:::unknown
    n444["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n445["Evidence is sealed<br/><small>Architecture decision</small>"]:::held
    n446["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n447["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n448["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n449["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n450["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n451["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n452["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n453["Every question of the machine is an add-on<br/><small>Architecture decision</small>"]:::unknown
    n454["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n455["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n456["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n457["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n458["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n459["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n460["What a command does is played in memory first<br/><small>Architecture decision</small>"]:::held
    n461["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n462["A run is kept while what it reads is as it was<br/><small>Architecture decision</small>"]:::unknown
    n463["Trame's SDLC runs with std's tooling<br/><small>Architecture decision</small>"]:::unknown
    n464["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n465["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n466["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n467["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n468["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n469["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n470["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n471["Candidate dates<br/><small>Decision</small>"]:::neutral
    n472["Claim sets<br/><small>Decision</small>"]:::neutral
    n473["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n474["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n475["A specification that runs<br/><small>Goal</small>"]:::neutral
    n476["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n477["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n478["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n479["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n480["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n481["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n482["A single source of truth<br/><small>Goal</small>"]:::neutral
    n483["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n484["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n485["Generation 1<br/><small>Release</small>"]:::neutral
    n486["Generation 10<br/><small>Release</small>"]:::neutral
    n487["Generation 100<br/><small>Release</small>"]:::neutral
    n488["Generation 101<br/><small>Release</small>"]:::neutral
    n489["Generation 102<br/><small>Release</small>"]:::neutral
    n490["Generation 103<br/><small>Release</small>"]:::neutral
    n491["Generation 104<br/><small>Release</small>"]:::neutral
    n492["Generation 105<br/><small>Release</small>"]:::neutral
    n493["Generation 106<br/><small>Release</small>"]:::neutral
    n494["Generation 107<br/><small>Release</small>"]:::neutral
    n495["Generation 108<br/><small>Release</small>"]:::neutral
    n496["Generation 109<br/><small>Release</small>"]:::neutral
    n497["Generation 11<br/><small>Release</small>"]:::neutral
    n498["Generation 110<br/><small>Release</small>"]:::neutral
    n499["Generation 111<br/><small>Release</small>"]:::neutral
    n500["Generation 112<br/><small>Release</small>"]:::neutral
    n501["Generation 113<br/><small>Release</small>"]:::neutral
    n502["Generation 114<br/><small>Release</small>"]:::neutral
    n503["Generation 115<br/><small>Release</small>"]:::neutral
    n504["Generation 116<br/><small>Release</small>"]:::neutral
    n505["Generation 117<br/><small>Release</small>"]:::neutral
    n506["Generation 118<br/><small>Release</small>"]:::neutral
    n507["Generation 119<br/><small>Release</small>"]:::neutral
    n508["Generation 12<br/><small>Release</small>"]:::neutral
    n509["Generation 120<br/><small>Release</small>"]:::neutral
    n510["Generation 121<br/><small>Release</small>"]:::neutral
    n511["Generation 122<br/><small>Release</small>"]:::neutral
    n512["Generation 123<br/><small>Release</small>"]:::neutral
    n513["Generation 124<br/><small>Release</small>"]:::neutral
    n514["Generation 125<br/><small>Release</small>"]:::neutral
    n515["Generation 126<br/><small>Release</small>"]:::neutral
    n516["Generation 127<br/><small>Release</small>"]:::neutral
    n517["Generation 128<br/><small>Release</small>"]:::neutral
    n518["Generation 129<br/><small>Release</small>"]:::neutral
    n519["Generation 13<br/><small>Release</small>"]:::neutral
    n520["Generation 14<br/><small>Release</small>"]:::neutral
    n521["Generation 15<br/><small>Release</small>"]:::neutral
    n522["Generation 16<br/><small>Release</small>"]:::neutral
    n523["Generation 17<br/><small>Release</small>"]:::neutral
    n524["Generation 18<br/><small>Release</small>"]:::neutral
    n525["Generation 19<br/><small>Release</small>"]:::neutral
    n526["Generation 2<br/><small>Release</small>"]:::neutral
    n527["Generation 20<br/><small>Release</small>"]:::neutral
    n528["Generation 21<br/><small>Release</small>"]:::neutral
    n529["Generation 22<br/><small>Release</small>"]:::neutral
    n530["Generation 23<br/><small>Release</small>"]:::neutral
    n531["Generation 24<br/><small>Release</small>"]:::neutral
    n532["Generation 25<br/><small>Release</small>"]:::neutral
    n533["Generation 26<br/><small>Release</small>"]:::neutral
    n534["Generation 27<br/><small>Release</small>"]:::neutral
    n535["Generation 28<br/><small>Release</small>"]:::neutral
    n536["Generation 29<br/><small>Release</small>"]:::neutral
    n537["Generation 3<br/><small>Release</small>"]:::neutral
    n538["Generation 30<br/><small>Release</small>"]:::neutral
    n539["Generation 31<br/><small>Release</small>"]:::neutral
    n540["Generation 32<br/><small>Release</small>"]:::neutral
    n541["Generation 33<br/><small>Release</small>"]:::neutral
    n542["Generation 34<br/><small>Release</small>"]:::neutral
    n543["Generation 35<br/><small>Release</small>"]:::neutral
    n544["Generation 36<br/><small>Release</small>"]:::neutral
    n545["Generation 37<br/><small>Release</small>"]:::neutral
    n546["Generation 38<br/><small>Release</small>"]:::neutral
    n547["Generation 39<br/><small>Release</small>"]:::neutral
    n548["Generation 4<br/><small>Release</small>"]:::neutral
    n549["Generation 40<br/><small>Release</small>"]:::neutral
    n550["Generation 41<br/><small>Release</small>"]:::neutral
    n551["Generation 42<br/><small>Release</small>"]:::neutral
    n552["Generation 43<br/><small>Release</small>"]:::neutral
    n553["Generation 44<br/><small>Release</small>"]:::neutral
    n554["Generation 45<br/><small>Release</small>"]:::neutral
    n555["Generation 46<br/><small>Release</small>"]:::neutral
    n556["Generation 47<br/><small>Release</small>"]:::neutral
    n557["Generation 48<br/><small>Release</small>"]:::neutral
    n558["Generation 49<br/><small>Release</small>"]:::neutral
    n559["Generation 5<br/><small>Release</small>"]:::neutral
    n560["Generation 50<br/><small>Release</small>"]:::neutral
    n561["Generation 51<br/><small>Release</small>"]:::neutral
    n562["Generation 52<br/><small>Release</small>"]:::neutral
    n563["Generation 53<br/><small>Release</small>"]:::neutral
    n564["Generation 54<br/><small>Release</small>"]:::neutral
    n565["Generation 55<br/><small>Release</small>"]:::neutral
    n566["Generation 56<br/><small>Release</small>"]:::neutral
    n567["Generation 57<br/><small>Release</small>"]:::neutral
    n568["Generation 58<br/><small>Release</small>"]:::neutral
    n569["Generation 59<br/><small>Release</small>"]:::neutral
    n570["Generation 6<br/><small>Release</small>"]:::neutral
    n571["Generation 60<br/><small>Release</small>"]:::neutral
    n572["Generation 61<br/><small>Release</small>"]:::neutral
    n573["Generation 62<br/><small>Release</small>"]:::neutral
    n574["Generation 63<br/><small>Release</small>"]:::neutral
    n575["Generation 64<br/><small>Release</small>"]:::neutral
    n576["Generation 65<br/><small>Release</small>"]:::neutral
    n577["Generation 66<br/><small>Release</small>"]:::neutral
    n578["Generation 67<br/><small>Release</small>"]:::neutral
    n579["Generation 68<br/><small>Release</small>"]:::neutral
    n580["Generation 69<br/><small>Release</small>"]:::neutral
    n581["Generation 7<br/><small>Release</small>"]:::neutral
    n582["Generation 70<br/><small>Release</small>"]:::neutral
    n583["Generation 71<br/><small>Release</small>"]:::neutral
    n584["Generation 72<br/><small>Release</small>"]:::neutral
    n585["Generation 73<br/><small>Release</small>"]:::neutral
    n586["Generation 74<br/><small>Release</small>"]:::neutral
    n587["Generation 75<br/><small>Release</small>"]:::neutral
    n588["Generation 76<br/><small>Release</small>"]:::neutral
    n589["Generation 77<br/><small>Release</small>"]:::neutral
    n590["Generation 78<br/><small>Release</small>"]:::neutral
    n591["Generation 79<br/><small>Release</small>"]:::neutral
    n592["Generation 8<br/><small>Release</small>"]:::neutral
    n593["Generation 80<br/><small>Release</small>"]:::neutral
    n594["Generation 81<br/><small>Release</small>"]:::neutral
    n595["Generation 82<br/><small>Release</small>"]:::neutral
    n596["Generation 83<br/><small>Release</small>"]:::neutral
    n597["Generation 84<br/><small>Release</small>"]:::neutral
    n598["Generation 85<br/><small>Release</small>"]:::neutral
    n599["Generation 86<br/><small>Release</small>"]:::neutral
    n600["Generation 87<br/><small>Release</small>"]:::neutral
    n601["Generation 88<br/><small>Release</small>"]:::neutral
    n602["Generation 89<br/><small>Release</small>"]:::neutral
    n603["Generation 9<br/><small>Release</small>"]:::neutral
    n604["Generation 90<br/><small>Release</small>"]:::neutral
    n605["Generation 91<br/><small>Release</small>"]:::neutral
    n606["Generation 92<br/><small>Release</small>"]:::neutral
    n607["Generation 93<br/><small>Release</small>"]:::neutral
    n608["Generation 94<br/><small>Release</small>"]:::neutral
    n609["Generation 95<br/><small>Release</small>"]:::neutral
    n610["Generation 96<br/><small>Release</small>"]:::neutral
    n611["Generation 97<br/><small>Release</small>"]:::neutral
    n612["Generation 98<br/><small>Release</small>"]:::neutral
    n613["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n614["Common rendering<br/><small>Function</small>"]:::held
    n615["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n616["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n617["Figures of the documents written as files<br/><small>Port</small>"]:::neutral
    n618["Rendering of the files<br/><small>Function</small>"]:::held
    n619["Syntax of the documents written as files<br/><small>Port</small>"]:::neutral
    n620["HTML writer<br/><small>Function</small>"]:::held
    n621["Markdown writer<br/><small>Function</small>"]:::held
    n622["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n623["Mermaid diagrams<br/><small>Function</small>"]:::held
    n624["One renderer, its syntax a choice<br/><small>Architecture decision</small>"]:::held
    n625["Figures of the page<br/><small>Port</small>"]:::neutral
    n626["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n627["The page in HTML<br/><small>Technical choice</small>"]:::held
    n628["Rendering in the page<br/><small>Function</small>"]:::held
    n629["Syntax of the page<br/><small>Port</small>"]:::neutral
    n630["Plain text writer<br/><small>Function</small>"]:::held
    n631["Places in a sentence<br/><small>Decision</small>"]:::neutral
    n632["Figures in SVG<br/><small>Function</small>"]:::held
    n633["Figures of the terminal<br/><small>Port</small>"]:::neutral
    n634["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n635["The terminal in plain text<br/><small>Technical choice</small>"]:::held
    n636["Rendering in the terminal<br/><small>Function</small>"]:::held
    n637["Syntax of the terminal<br/><small>Port</small>"]:::neutral
    n638["Figures as text<br/><small>Function</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n639["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
    n640["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n641["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n642["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n643["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n644["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n645["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n646["EngineReckons<br/><small>Scenario</small>"]:::held
    n647["Shape of the example<br/><small>Decision</small>"]:::neutral
    n648["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n649["The names the sample add-ons give, and the order a choice gives them in: the second first.<br/><small>Decision</small>"]:::neutral
    n650["The first sample add-on<br/><small>Function</small>"]:::held
    n651["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n652["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n653["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n654["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
    n655["A sample extension point<br/><small>Port</small>"]:::neutral
    n656["The sample add-ons, second first<br/><small>Technical choice</small>"]:::held
    n657["The second sample add-on<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Trame · SDLC"]
    n658["Advance<br/><small>Entry point</small>"]:::held
    n659["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n660["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n661["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n662["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n663["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n664["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n665["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n666["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n667["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n668["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n669["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n670["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n671["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n672["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n673["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n674["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n675["How a generation is made<br/><small>Policy</small>"]:::neutral
    n676["The graph page<br/><small>Artefact</small>"]:::unknown
    n677["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n678["The graph page opens<br/><small>Check</small>"]:::unknown
    n679["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n680["What the graph page is asked<br/><small>Function</small>"]:::held
    n681["How a generation advances<br/><small>Decision</small>"]:::neutral
    n682["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n683["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n684["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n685["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n686["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n687["How a change merges<br/><small>Policy</small>"]:::neutral
    n688["The next generation<br/><small>Shipment</small>"]:::unknown
    n689["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n690["Open the graph page<br/><small>Entry point</small>"]:::held
    n691["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n692["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n693["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n694["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n695["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n696["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n697["The page's program<br/><small>Artefact</small>"]:::unknown
    n698["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
    n699["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n700["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n701["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n702["The repository's projects<br/><small>Decision</small>"]:::neutral
    n703["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n704["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n705["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n706["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n707["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n708["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n709["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n710["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n711["How the repository is set<br/><small>Policy</small>"]:::neutral
    n712["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n713["The engine<br/><small>Artefact</small>"]:::unknown
    n714["Trame's repository<br/><small>Decision</small>"]:::neutral
    n715["Trame's SDLC<br/><small>Component</small>"]:::neutral
    n716["What the machine must also have<br/><small>Technical choice</small>"]:::unknown
  end
  subgraph shipping["Trame · Shipping"]
    n717["Attribution<br/><small>Function</small>"]:::held
    n718["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n719["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n720["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n721["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n722["Ship only what holds<br/><small>Requirement</small>"]:::held
    n723["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n724["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n725["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n726["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n727["Checks of a body<br/><small>Function</small>"]:::held
    n728["Captures<br/><small>Standard</small>"]:::neutral
    n729["Categories of literals<br/><small>Decision</small>"]:::neutral
    n730["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n731["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n732["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n733["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n734["std's languages, read by the engine<br/><small>Technical choice</small>"]:::held
    n735["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n736["Attribute<br/><small>Syntax element</small>"]:::held
    n737["Comment<br/><small>Syntax element</small>"]:::held
    n738["Text<br/><small>Syntax element</small>"]:::held
    n739["HCL<br/><small>Standard</small>"]:::neutral
    n740["Value<br/><small>Syntax element</small>"]:::held
    n741["Module call<br/><small>Syntax element</small>"]:::held
    n742["Terraform<br/><small>Language</small>"]:::held
    n743["Terraform modules<br/><small>Standard</small>"]:::neutral
    n744["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph text["Trame · Terminal text"]
    n745["Box drawing<br/><small>Standard</small>"]:::neutral
    n746["Code lines<br/><small>Syntax element</small>"]:::held
    n747["Columns<br/><small>Syntax element</small>"]:::held
    n748["Item line<br/><small>Syntax element</small>"]:::held
    n749["Padded cell<br/><small>Syntax element</small>"]:::held
    n750["Path step<br/><small>Syntax element</small>"]:::held
    n751["Columns in the terminal<br/><small>Decision</small>"]:::neutral
    n752["Lines of the terminal<br/><small>Syntax element</small>"]:::held
    n753["Terminal text<br/><small>Decision</small>"]:::neutral
    n754["Tree branch<br/><small>Syntax element</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n755["List on several lines<br/><small>Syntax element</small>"]:::held
    n756["Type assertion<br/><small>Syntax element</small>"]:::held
    n757["Assignment<br/><small>Syntax element</small>"]:::held
    n758["Async function of a block<br/><small>Syntax element</small>"]:::held
    n759["Waiting<br/><small>Syntax element</small>"]:::held
    n760["Call<br/><small>Syntax element</small>"]:::held
    n761["Constant<br/><small>Syntax element</small>"]:::held
    n762["Default import<br/><small>Syntax element</small>"]:::held
    n763["Documentation comment<br/><small>Syntax element</small>"]:::held
    n764["Export<br/><small>Syntax element</small>"]:::held
    n765["Condition<br/><small>Syntax element</small>"]:::held
    n766["List on one line<br/><small>Syntax element</small>"]:::held
    n767["Comment<br/><small>Syntax element</small>"]:::held
    n768["Property access<br/><small>Syntax element</small>"]:::held
    n769["Title of a module<br/><small>Syntax element</small>"]:::held
    n770["Import of names<br/><small>Syntax element</small>"]:::held
    n771["Object on several lines<br/><small>Syntax element</small>"]:::held
    n772["Object<br/><small>Syntax element</small>"]:::held
    n773["Object type<br/><small>Syntax element</small>"]:::held
    n774["Optional property access<br/><small>Syntax element</small>"]:::held
    n775["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n776["Group<br/><small>Syntax element</small>"]:::held
    n777["Names of a program<br/><small>Decision</small>"]:::neutral
    n778["Property<br/><small>Syntax element</small>"]:::held
    n779["Strict inequality<br/><small>Syntax element</small>"]:::held
    n780["Text<br/><small>Syntax element</small>"]:::held
    n781["TypeScript<br/><small>Language</small>"]:::held
    n782["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n783["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n784["TypeScript writer<br/><small>Function</small>"]:::held
    n785["Union type<br/><small>Syntax element</small>"]:::held
    n786["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n36 -->|Deployed in| n15
  n55 -->|Deployed in| n30
  n55 -->|Deployed in| n53
  n55 -->|Depends on| n18
  n58 -->|Implements| n35
  n58 -->|Depends on| n378
  n58 -->|Depends on| n192
  n59 -->|Implements| n20
  n59 -->|Depends on| n363
  n60 -->|Implements| n24
  n60 -->|Depends on| n378
  n60 -->|Depends on| n192
  n61 -->|Implements| n37
  n61 -->|Depends on| n378
  n62 -->|Implements| n38
  n62 -->|Depends on| n240
  n63 -->|Serves| n475
  n63 -->|Depends on| n378
  n63 -->|Depends on| n297
  n63 -->|Depends on| n299
  n63 -->|Depends on| n298
  n63 -->|Depends on| n0
  n63 -->|Depends on| n235
  n63 -->|Depends on| n238
  n63 -->|Depends on| n246
  n63 -->|Depends on| n243
  n63 -->|Depends on| n227
  n63 -->|Depends on| n232
  n63 -->|Depends on| n614
  n63 -->|Depends on| n325
  n63 -->|Depends on| n327
  n64 -->|Serves| n475
  n64 -->|Part of| n36
  n64 -->|Depends on| n38
  n64 -->|Depends on| n37
  n64 -->|Depends on| n24
  n64 -->|Depends on| n20
  n64 -->|Depends on| n35
  n64 -->|Depends on| n63
  n64 -->|Depends on| n614
  n64 -->|Depends on| n378
  n64 -->|Depends on| n367
  n64 -->|Depends on| n370
  n64 -->|Depends on| n358
  n64 -->|Depends on| n297
  n64 -->|Depends on| n296
  n64 -->|Depends on| n298
  n64 -->|Depends on| n0
  n64 -->|Depends on| n150
  n64 -->|Depends on| n631
  n64 -->|Depends on| n322
  n64 -->|Depends on| n235
  n64 -->|Depends on| n232
  n64 -->|Depends on| n225
  n64 -->|Depends on| n224
  n64 -->|Depends on| n245
  n64 -->|Depends on| n226
  n64 -->|Depends on| n325
  n65 -->|Chooses| n62
  n65 -->|Chooses| n61
  n65 -->|Chooses| n60
  n65 -->|Chooses| n58
  n65 -->|Chooses| n59
  n65 -->|In| n15
  n65 -->|Serves| n476
  n66 -->|Serves| n475
  n66 -->|Applied by| n64
  n66 -->|Applied by| n63
  n66 -->|Applied by| n65
  n66 -->|Applied by| n44
  n67 -->|Verifies| n114
  n67 -->|Verifies| n194
  n67 -->|In| n53
  n67 -->|Depends on| n114
  n67 -->|Depends on| n42
  n67 -->|Depends on| n57
  n67 -->|Depends on| n52
  n67 -->|Depends on| n41
  n67 -->|Depends on| n39
  n67 -->|Depends on| n155
  n67 -->|Depends on| n21
  n67 -->|Depends on| n23
  n67 -->|Depends on| n160
  n67 -->|Depends on| n314
  n67 -->|Depends on| n68
  n67 -->|Depends on| n328
  n71 -->|Verifies| n735
  n71 -->|Verifies| n727
  n71 -->|Verifies| n435
  n71 -->|In| n53
  n71 -->|Depends on| n735
  n71 -->|Depends on| n727
  n71 -->|Depends on| n781
  n71 -->|Depends on| n72
  n71 -->|Depends on| n319
  n71 -->|Depends on| n328
  n73 -->|Verifies| n131
  n73 -->|In| n53
  n73 -->|Depends on| n120
  n73 -->|Depends on| n131
  n73 -->|Depends on| n57
  n73 -->|Depends on| n52
  n73 -->|Depends on| n23
  n73 -->|Depends on| n41
  n73 -->|Depends on| n39
  n73 -->|Depends on| n155
  n73 -->|Depends on| n96
  n73 -->|Depends on| n160
  n73 -->|Depends on| n315
  n73 -->|Depends on| n328
  n74 -->|Verifies| n401
  n74 -->|Verifies| n400
  n74 -->|In| n53
  n74 -->|Depends on| n18
  n74 -->|Depends on| n52
  n74 -->|Depends on| n160
  n74 -->|Depends on| n111
  n74 -->|Depends on| n326
  n74 -->|Depends on| n328
  n75 -->|Verifies| n117
  n75 -->|Verifies| n118
  n75 -->|Verifies| n186
  n75 -->|Verifies| n784
  n75 -->|Verifies| n744
  n75 -->|Verifies| n247
  n75 -->|Verifies| n426
  n75 -->|In| n53
  n75 -->|Depends on| n117
  n75 -->|Depends on| n57
  n75 -->|Depends on| n52
  n75 -->|Depends on| n160
  n75 -->|Depends on| n155
  n75 -->|Depends on| n70
  n75 -->|Depends on| n151
  n75 -->|Depends on| n315
  n75 -->|Depends on| n328
  n76 -->|Verifies| n140
  n76 -->|In| n53
  n76 -->|Depends on| n140
  n76 -->|Depends on| n42
  n76 -->|Depends on| n57
  n76 -->|Depends on| n160
  n76 -->|Depends on| n70
  n76 -->|Depends on| n104
  n76 -->|Depends on| n328
  n77 -->|Verifies| n134
  n77 -->|In| n53
  n77 -->|Depends on| n134
  n77 -->|Depends on| n57
  n77 -->|Depends on| n52
  n77 -->|Depends on| n41
  n77 -->|Depends on| n39
  n77 -->|Depends on| n155
  n77 -->|Depends on| n160
  n77 -->|Depends on| n315
  n77 -->|Depends on| n328
  n78 -->|Verifies| n123
  n78 -->|Verifies| n191
  n78 -->|Verifies| n398
  n78 -->|Verifies| n411
  n78 -->|In| n53
  n78 -->|Depends on| n125
  n78 -->|Depends on| n123
  n78 -->|Depends on| n42
  n78 -->|Depends on| n47
  n78 -->|Depends on| n52
  n78 -->|Depends on| n23
  n78 -->|Depends on| n54
  n78 -->|Depends on| n41
  n78 -->|Depends on| n39
  n78 -->|Depends on| n155
  n78 -->|Depends on| n192
  n78 -->|Depends on| n473
  n78 -->|Depends on| n208
  n78 -->|Depends on| n160
  n78 -->|Depends on| n324
  n78 -->|Depends on| n79
  n78 -->|Depends on| n69
  n78 -->|Depends on| n328
  n80 -->|Verifies| n124
  n80 -->|Verifies| n209
  n80 -->|Verifies| n422
  n80 -->|Verifies| n166
  n80 -->|Verifies| n167
  n80 -->|Verifies| n171
  n80 -->|Verifies| n178
  n80 -->|Verifies| n173
  n80 -->|Verifies| n175
  n80 -->|Verifies| n176
  n80 -->|Verifies| n177
  n80 -->|Verifies| n174
  n80 -->|Verifies| n172
  n80 -->|In| n53
  n80 -->|Depends on| n124
  n80 -->|Depends on| n42
  n80 -->|Depends on| n52
  n80 -->|Depends on| n168
  n80 -->|Depends on| n160
  n80 -->|Depends on| n315
  n80 -->|Depends on| n328
  n81 -->|Verifies| n132
  n81 -->|In| n53
  n81 -->|Depends on| n132
  n81 -->|Depends on| n160
  n81 -->|Depends on| n155
  n81 -->|Depends on| n781
  n81 -->|Depends on| n328
  n82 -->|Verifies| n135
  n82 -->|In| n53
  n82 -->|Depends on| n135
  n82 -->|Depends on| n57
  n82 -->|Depends on| n41
  n82 -->|Depends on| n39
  n82 -->|Depends on| n155
  n82 -->|Depends on| n724
  n82 -->|Depends on| n99
  n82 -->|Depends on| n160
  n82 -->|Depends on| n49
  n82 -->|Depends on| n328
  n83 -->|Verifies| n126
  n83 -->|In| n53
  n83 -->|Depends on| n126
  n83 -->|Depends on| n103
  n83 -->|Depends on| n328
  n84 -->|Verifies| n127
  n84 -->|In| n53
  n84 -->|Depends on| n127
  n84 -->|Depends on| n57
  n84 -->|Depends on| n160
  n84 -->|Depends on| n328
  n85 -->|Verifies| n188
  n85 -->|Verifies| n208
  n85 -->|In| n53
  n85 -->|Depends on| n188
  n85 -->|Depends on| n42
  n85 -->|Depends on| n41
  n85 -->|Depends on| n17
  n85 -->|Depends on| n105
  n85 -->|Depends on| n99
  n85 -->|Depends on| n719
  n85 -->|Depends on| n23
  n85 -->|Depends on| n328
  n86 -->|Verifies| n144
  n86 -->|In| n53
  n86 -->|Depends on| n144
  n86 -->|Depends on| n188
  n86 -->|Depends on| n215
  n86 -->|Depends on| n41
  n86 -->|Depends on| n52
  n86 -->|Depends on| n160
  n86 -->|Depends on| n315
  n86 -->|Depends on| n328
  n87 -->|Verifies| n121
  n87 -->|Verifies| n133
  n87 -->|Verifies| n129
  n87 -->|In| n53
  n87 -->|Depends on| n121
  n87 -->|Depends on| n129
  n87 -->|Depends on| n42
  n87 -->|Depends on| n52
  n87 -->|Depends on| n160
  n87 -->|Depends on| n99
  n87 -->|Depends on| n328
  n88 -->|Verifies| n138
  n88 -->|Verifies| n222
  n88 -->|Verifies| n395
  n88 -->|In| n53
  n88 -->|Depends on| n138
  n88 -->|Depends on| n42
  n88 -->|Depends on| n57
  n88 -->|Depends on| n52
  n88 -->|Depends on| n41
  n88 -->|Depends on| n39
  n88 -->|Depends on| n155
  n88 -->|Depends on| n105
  n88 -->|Depends on| n99
  n88 -->|Depends on| n160
  n88 -->|Depends on| n780
  n88 -->|Depends on| n328
  n88 -->|Depends on| n724
  n89 -->|Verifies| n146
  n89 -->|Verifies| n416
  n89 -->|Verifies| n394
  n89 -->|Verifies| n412
  n89 -->|In| n53
  n89 -->|Depends on| n146
  n89 -->|Depends on| n42
  n89 -->|Depends on| n57
  n89 -->|Depends on| n21
  n89 -->|Depends on| n41
  n89 -->|Depends on| n39
  n89 -->|Depends on| n155
  n89 -->|Depends on| n105
  n89 -->|Depends on| n99
  n89 -->|Depends on| n160
  n89 -->|Depends on| n328
  n89 -->|Depends on| n154
  n89 -->|Depends on| n781
  n90 -->|Verifies| n119
  n90 -->|Verifies| n413
  n90 -->|In| n53
  n90 -->|Depends on| n119
  n90 -->|Depends on| n42
  n90 -->|Depends on| n57
  n90 -->|Depends on| n52
  n90 -->|Depends on| n105
  n90 -->|Depends on| n160
  n90 -->|Depends on| n328
  n90 -->|Depends on| n341
  n91 -->|Verifies| n145
  n91 -->|Verifies| n416
  n91 -->|Verifies| n394
  n91 -->|In| n53
  n91 -->|Depends on| n145
  n91 -->|Depends on| n42
  n91 -->|Depends on| n57
  n91 -->|Depends on| n41
  n91 -->|Depends on| n39
  n91 -->|Depends on| n155
  n91 -->|Depends on| n105
  n91 -->|Depends on| n160
  n91 -->|Depends on| n328
  n92 -->|Verifies| n122
  n92 -->|Verifies| n165
  n92 -->|In| n53
  n92 -->|Depends on| n122
  n92 -->|Depends on| n42
  n92 -->|Depends on| n57
  n92 -->|Depends on| n105
  n92 -->|Depends on| n99
  n92 -->|Depends on| n231
  n92 -->|Depends on| n160
  n92 -->|Depends on| n328
  n93 -->|Verifies| n128
  n93 -->|Verifies| n190
  n93 -->|In| n53
  n93 -->|Depends on| n125
  n93 -->|Depends on| n128
  n93 -->|Depends on| n42
  n93 -->|Depends on| n57
  n93 -->|Depends on| n52
  n93 -->|Depends on| n208
  n93 -->|Depends on| n41
  n93 -->|Depends on| n39
  n93 -->|Depends on| n155
  n93 -->|Depends on| n160
  n93 -->|Depends on| n324
  n93 -->|Depends on| n328
  n94 -->|Verifies| n364
  n94 -->|Verifies| n386
  n94 -->|Verifies| n402
  n94 -->|Verifies| n418
  n94 -->|In| n53
  n94 -->|Depends on| n125
  n94 -->|Depends on| n364
  n94 -->|Depends on| n19
  n94 -->|Depends on| n208
  n94 -->|Depends on| n41
  n94 -->|Depends on| n17
  n94 -->|Depends on| n52
  n94 -->|Depends on| n160
  n94 -->|Depends on| n324
  n94 -->|Depends on| n328
  n95 -->|Verifies| n125
  n95 -->|Verifies| n206
  n95 -->|Verifies| n628
  n95 -->|Verifies| n620
  n95 -->|Verifies| n632
  n95 -->|Verifies| n193
  n95 -->|In| n53
  n95 -->|Depends on| n125
  n95 -->|Depends on| n193
  n95 -->|Depends on| n52
  n95 -->|Depends on| n160
  n95 -->|Depends on| n324
  n95 -->|Depends on| n328
  n95 -->|Depends on| n109
  n97 -->|Verifies| n121
  n97 -->|Verifies| n133
  n97 -->|Verifies| n129
  n97 -->|In| n53
  n97 -->|Depends on| n121
  n97 -->|Depends on| n129
  n97 -->|Depends on| n133
  n97 -->|Depends on| n132
  n97 -->|Depends on| n42
  n97 -->|Depends on| n52
  n97 -->|Depends on| n160
  n97 -->|Depends on| n99
  n97 -->|Depends on| n315
  n97 -->|Depends on| n328
  n98 -->|Verifies| n130
  n98 -->|Verifies| n113
  n98 -->|In| n53
  n98 -->|Depends on| n130
  n98 -->|Depends on| n42
  n98 -->|Depends on| n57
  n98 -->|Depends on| n41
  n98 -->|Depends on| n39
  n98 -->|Depends on| n157
  n98 -->|Depends on| n99
  n98 -->|Depends on| n160
  n98 -->|Depends on| n328
  n100 -->|Verifies| n130
  n100 -->|Verifies| n136
  n100 -->|In| n53
  n100 -->|Depends on| n130
  n100 -->|Depends on| n42
  n100 -->|Depends on| n57
  n100 -->|Depends on| n41
  n100 -->|Depends on| n39
  n100 -->|Depends on| n155
  n100 -->|Depends on| n105
  n100 -->|Depends on| n99
  n100 -->|Depends on| n157
  n100 -->|Depends on| n220
  n100 -->|Depends on| n160
  n100 -->|Depends on| n328
  n100 -->|Depends on| n154
  n100 -->|Depends on| n781
  n101 -->|Verifies| n134
  n101 -->|Verifies| n203
  n101 -->|In| n53
  n101 -->|Depends on| n134
  n101 -->|Depends on| n23
  n101 -->|Depends on| n21
  n101 -->|Depends on| n52
  n101 -->|Depends on| n41
  n101 -->|Depends on| n39
  n101 -->|Depends on| n155
  n101 -->|Depends on| n160
  n101 -->|Depends on| n210
  n101 -->|Depends on| n69
  n101 -->|Depends on| n324
  n101 -->|Depends on| n328
  n102 -->|Verifies| n137
  n102 -->|Verifies| n395
  n102 -->|In| n53
  n102 -->|Depends on| n137
  n102 -->|Depends on| n42
  n102 -->|Depends on| n57
  n102 -->|Depends on| n160
  n102 -->|Depends on| n328
  n102 -->|Depends on| n154
  n102 -->|Depends on| n781
  n102 -->|Depends on| n99
  n106 -->|Verifies| n141
  n106 -->|Verifies| n135
  n106 -->|Verifies| n719
  n106 -->|Verifies| n211
  n106 -->|Verifies| n721
  n106 -->|Verifies| n403
  n106 -->|Verifies| n717
  n106 -->|Verifies| n194
  n106 -->|In| n53
  n106 -->|Depends on| n141
  n106 -->|Depends on| n135
  n106 -->|Depends on| n42
  n106 -->|Depends on| n57
  n106 -->|Depends on| n52
  n106 -->|Depends on| n41
  n106 -->|Depends on| n39
  n106 -->|Depends on| n22
  n106 -->|Depends on| n49
  n106 -->|Depends on| n23
  n106 -->|Depends on| n188
  n106 -->|Depends on| n17
  n106 -->|Depends on| n316
  n106 -->|Depends on| n155
  n106 -->|Depends on| n724
  n106 -->|Depends on| n105
  n106 -->|Depends on| n99
  n106 -->|Depends on| n160
  n106 -->|Depends on| n328
  n107 -->|Verifies| n143
  n107 -->|In| n53
  n107 -->|Depends on| n143
  n107 -->|Depends on| n57
  n107 -->|Depends on| n21
  n107 -->|Depends on| n41
  n107 -->|Depends on| n39
  n107 -->|Depends on| n155
  n107 -->|Depends on| n160
  n107 -->|Depends on| n328
  n108 -->|Verifies| n141
  n108 -->|Verifies| n211
  n108 -->|In| n53
  n108 -->|Depends on| n141
  n108 -->|Depends on| n42
  n108 -->|Depends on| n52
  n108 -->|Depends on| n41
  n108 -->|Depends on| n39
  n108 -->|Depends on| n22
  n108 -->|Depends on| n23
  n108 -->|Depends on| n188
  n108 -->|Depends on| n17
  n108 -->|Depends on| n211
  n108 -->|Depends on| n315
  n108 -->|Depends on| n155
  n108 -->|Depends on| n724
  n108 -->|Depends on| n105
  n108 -->|Depends on| n99
  n108 -->|Depends on| n160
  n108 -->|Depends on| n328
  n110 -->|Verifies| n115
  n110 -->|Verifies| n116
  n110 -->|Verifies| n392
  n110 -->|In| n53
  n110 -->|Depends on| n115
  n110 -->|Depends on| n57
  n110 -->|Depends on| n41
  n110 -->|Depends on| n39
  n110 -->|Depends on| n160
  n110 -->|Depends on| n69
  n110 -->|Depends on| n328
  n112 -->|Verifies| n142
  n112 -->|Verifies| n121
  n112 -->|Verifies| n139
  n112 -->|Verifies| n636
  n112 -->|Verifies| n630
  n112 -->|Verifies| n638
  n112 -->|In| n53
  n112 -->|Depends on| n142
  n112 -->|Depends on| n121
  n112 -->|Depends on| n52
  n112 -->|Depends on| n160
  n112 -->|Depends on| n111
  n112 -->|Depends on| n328
  n113 -->|Serves| n475
  n113 -->|Depends on| n216
  n113 -->|Depends on| n315
  n114 -->|Serves| n475
  n114 -->|Part of| n55
  n114 -->|Depends on| n132
  n114 -->|Depends on| n194
  n114 -->|Depends on| n160
  n114 -->|Depends on| n155
  n114 -->|Depends on| n219
  n114 -->|Depends on| n217
  n114 -->|Depends on| n389
  n114 -->|Depends on| n428
  n114 -->|Depends on| n161
  n114 -->|Depends on| n781
  n114 -->|Depends on| n43
  n114 -->|Depends on| n22
  n114 -->|Depends on| n21
  n114 -->|Depends on| n23
  n114 -->|Depends on| n39
  n114 -->|Depends on| n25
  n114 -->|Depends on| n195
  n114 -->|Depends on| n51
  n114 -->|Depends on| n747
  n114 -->|Depends on| n753
  n114 -->|Depends on| n315
  n114 -->|Depends on| n314
  n114 -->|Depends on| n220
  n114 -->|Depends on| n221
  n114 -->|Depends on| n223
  n114 -->|Depends on| n222
  n114 -->|Depends on| n152
  n114 -->|Depends on| n158
  n114 -->|Depends on| n17
  n114 -->|Depends on| n208
  n114 -->|Depends on| n154
  n115 -->|Serves| n482
  n115 -->|Part of| n55
  n115 -->|Depends on| n132
  n115 -->|Depends on| n116
  n115 -->|Depends on| n14
  n115 -->|Depends on| n39
  n115 -->|Depends on| n753
  n115 -->|Depends on| n51
  n115 -->|Depends on| n315
  n116 -->|Serves| n482
  n116 -->|Depends on| n132
  n116 -->|Depends on| n204
  n116 -->|Depends on| n40
  n116 -->|Depends on| n210
  n116 -->|Depends on| n208
  n116 -->|Depends on| n155
  n116 -->|Depends on| n39
  n116 -->|Depends on| n315
  n116 -->|Depends on| n147
  n117 -->|Serves| n475
  n117 -->|Part of| n55
  n117 -->|Depends on| n132
  n117 -->|Depends on| n118
  n117 -->|Depends on| n23
  n117 -->|Depends on| n39
  n117 -->|Depends on| n51
  n117 -->|Depends on| n315
  n118 -->|Serves| n475
  n118 -->|Depends on| n132
  n118 -->|Depends on| n186
  n118 -->|Depends on| n753
  n118 -->|Depends on| n315
  n119 -->|Serves| n482
  n119 -->|Part of| n55
  n119 -->|Depends on| n132
  n119 -->|Depends on| n34
  n119 -->|Depends on| n341
  n119 -->|Depends on| n155
  n119 -->|Depends on| n21
  n119 -->|Depends on| n23
  n119 -->|Depends on| n39
  n119 -->|Depends on| n347
  n119 -->|Depends on| n152
  n119 -->|Depends on| n51
  n119 -->|Depends on| n747
  n119 -->|Depends on| n753
  n119 -->|Depends on| n315
  n120 -->|Serves| n475
  n120 -->|Part of| n55
  n120 -->|Depends on| n155
  n120 -->|Depends on| n132
  n120 -->|Depends on| n204
  n120 -->|Depends on| n618
  n120 -->|Depends on| n636
  n120 -->|Depends on| n23
  n120 -->|Depends on| n39
  n120 -->|Depends on| n51
  n120 -->|Depends on| n315
  n121 -->|Serves| n475
  n121 -->|Part of| n55
  n121 -->|Depends on| n160
  n121 -->|Depends on| n132
  n121 -->|Depends on| n139
  n121 -->|Depends on| n188
  n121 -->|Depends on| n215
  n121 -->|Depends on| n118
  n121 -->|Depends on| n133
  n121 -->|Depends on| n23
  n121 -->|Depends on| n39
  n121 -->|Depends on| n41
  n121 -->|Depends on| n51
  n121 -->|Depends on| n315
  n122 -->|Serves| n475
  n122 -->|Part of| n55
  n122 -->|Depends on| n132
  n122 -->|Depends on| n186
  n122 -->|Depends on| n118
  n122 -->|Depends on| n16
  n122 -->|Depends on| n165
  n122 -->|Depends on| n365
  n122 -->|Depends on| n366
  n122 -->|Depends on| n244
  n122 -->|Depends on| n164
  n122 -->|Depends on| n21
  n122 -->|Depends on| n23
  n122 -->|Depends on| n39
  n122 -->|Depends on| n51
  n122 -->|Depends on| n315
  n123 -->|Serves| n475
  n123 -->|Part of| n55
  n123 -->|Depends on| n132
  n123 -->|Depends on| n191
  n123 -->|Depends on| n116
  n123 -->|Depends on| n14
  n123 -->|Depends on| n39
  n124 -->|Serves| n475
  n124 -->|Part of| n55
  n124 -->|Depends on| n132
  n124 -->|Depends on| n169
  n124 -->|Depends on| n51
  n124 -->|Depends on| n315
  n124 -->|Depends on| n113
  n125 -->|Serves| n475
  n125 -->|Part of| n55
  n125 -->|Depends on| n132
  n125 -->|Depends on| n206
  n125 -->|Depends on| n618
  n125 -->|Depends on| n636
  n125 -->|Depends on| n628
  n125 -->|Depends on| n51
  n126 -->|Serves| n475
  n126 -->|Depends on| n56
  n126 -->|Depends on| n783
  n127 -->|Serves| n475
  n127 -->|Part of| n55
  n127 -->|Depends on| n132
  n127 -->|Depends on| n126
  n127 -->|Depends on| n21
  n127 -->|Depends on| n23
  n127 -->|Depends on| n39
  n127 -->|Depends on| n51
  n127 -->|Depends on| n160
  n127 -->|Depends on| n315
  n128 -->|Serves| n475
  n128 -->|Part of| n55
  n128 -->|Depends on| n155
  n128 -->|Depends on| n132
  n128 -->|Depends on| n190
  n128 -->|Depends on| n364
  n128 -->|Depends on| n208
  n128 -->|Depends on| n23
  n128 -->|Depends on| n39
  n128 -->|Depends on| n51
  n128 -->|Depends on| n315
  n129 -->|Serves| n475
  n129 -->|Part of| n55
  n129 -->|Depends on| n132
  n129 -->|Depends on| n133
  n129 -->|Depends on| n215
  n129 -->|Depends on| n51
  n129 -->|Depends on| n749
  n129 -->|Depends on| n751
  n129 -->|Depends on| n315
  n130 -->|Serves| n482
  n130 -->|Part of| n55
  n130 -->|Depends on| n132
  n130 -->|Depends on| n155
  n130 -->|Depends on| n208
  n130 -->|Depends on| n40
  n130 -->|Depends on| n157
  n130 -->|Depends on| n220
  n130 -->|Depends on| n21
  n130 -->|Depends on| n23
  n130 -->|Depends on| n39
  n130 -->|Depends on| n152
  n130 -->|Depends on| n781
  n130 -->|Depends on| n783
  n130 -->|Depends on| n769
  n130 -->|Depends on| n763
  n130 -->|Depends on| n764
  n130 -->|Depends on| n761
  n130 -->|Depends on| n760
  n130 -->|Depends on| n772
  n130 -->|Depends on| n778
  n130 -->|Depends on| n780
  n130 -->|Depends on| n770
  n130 -->|Depends on| n51
  n130 -->|Depends on| n315
  n130 -->|Depends on| n41
  n130 -->|Depends on| n160
  n130 -->|Depends on| n136
  n130 -->|Depends on| n154
  n130 -->|Depends on| n768
  n130 -->|Depends on| n766
  n130 -->|Depends on| n113
  n130 -->|Depends on| n133
  n131 -->|Serves| n475
  n131 -->|Part of| n55
  n131 -->|Depends on| n155
  n131 -->|Depends on| n753
  n131 -->|Depends on| n132
  n131 -->|Depends on| n204
  n131 -->|Depends on| n21
  n131 -->|Depends on| n39
  n131 -->|Depends on| n51
  n131 -->|Depends on| n315
  n132 -->|Serves| n475
  n132 -->|Depends on| n160
  n132 -->|Depends on| n188
  n132 -->|Depends on| n187
  n132 -->|Depends on| n201
  n132 -->|Depends on| n215
  n132 -->|Depends on| n203
  n132 -->|Depends on| n614
  n132 -->|Depends on| n51
  n132 -->|Depends on| n41
  n132 -->|Depends on| n17
  n132 -->|Depends on| n480
  n132 -->|Depends on| n474
  n132 -->|Depends on| n753
  n132 -->|Depends on| n751
  n132 -->|Depends on| n749
  n132 -->|Depends on| n315
  n132 -->|Depends on| n155
  n132 -->|Depends on| n210
  n132 -->|Depends on| n133
  n132 -->|Depends on| n153
  n132 -->|Depends on| n204
  n132 -->|Depends on| n39
  n132 -->|Depends on| n21
  n132 -->|Depends on| n735
  n133 -->|Serves| n475
  n133 -->|Depends on| n216
  n133 -->|Depends on| n315
  n134 -->|Serves| n482
  n134 -->|Part of| n55
  n134 -->|Depends on| n132
  n134 -->|Depends on| n203
  n134 -->|Depends on| n23
  n134 -->|Depends on| n51
  n134 -->|Depends on| n753
  n134 -->|Depends on| n751
  n134 -->|Depends on| n749
  n134 -->|Depends on| n315
  n135 -->|Serves| n722
  n135 -->|Part of| n55
  n135 -->|Depends on| n160
  n135 -->|Depends on| n132
  n135 -->|Depends on| n719
  n135 -->|Depends on| n23
  n135 -->|Depends on| n39
  n135 -->|Depends on| n51
  n135 -->|Depends on| n315
  n136 -->|Serves| n482
  n136 -->|Depends on| n783
  n136 -->|Depends on| n769
  n136 -->|Depends on| n763
  n136 -->|Depends on| n764
  n136 -->|Depends on| n761
  n136 -->|Depends on| n760
  n136 -->|Depends on| n772
  n136 -->|Depends on| n778
  n136 -->|Depends on| n780
  n136 -->|Depends on| n766
  n136 -->|Depends on| n770
  n137 -->|Serves| n482
  n137 -->|Part of| n55
  n137 -->|Depends on| n132
  n137 -->|Depends on| n155
  n137 -->|Depends on| n208
  n137 -->|Depends on| n154
  n137 -->|Depends on| n21
  n137 -->|Depends on| n22
  n137 -->|Depends on| n39
  n137 -->|Depends on| n51
  n137 -->|Depends on| n315
  n138 -->|Serves| n482
  n138 -->|Part of| n55
  n138 -->|Depends on| n132
  n138 -->|Depends on| n155
  n138 -->|Depends on| n208
  n138 -->|Depends on| n204
  n138 -->|Depends on| n618
  n138 -->|Depends on| n273
  n138 -->|Depends on| n272
  n138 -->|Depends on| n223
  n138 -->|Depends on| n222
  n138 -->|Depends on| n21
  n138 -->|Depends on| n23
  n138 -->|Depends on| n22
  n138 -->|Depends on| n39
  n138 -->|Depends on| n25
  n138 -->|Depends on| n195
  n138 -->|Depends on| n781
  n138 -->|Depends on| n17
  n138 -->|Depends on| n51
  n138 -->|Depends on| n315
  n138 -->|Depends on| n314
  n138 -->|Depends on| n247
  n138 -->|Depends on| n780
  n138 -->|Depends on| n141
  n138 -->|Depends on| n160
  n139 -->|Serves| n475
  n139 -->|Depends on| n160
  n139 -->|Depends on| n152
  n139 -->|Depends on| n132
  n139 -->|Depends on| n215
  n139 -->|Depends on| n618
  n139 -->|Depends on| n636
  n139 -->|Depends on| n51
  n139 -->|Depends on| n315
  n140 -->|Serves| n475
  n140 -->|Part of| n55
  n140 -->|Depends on| n117
  n140 -->|Depends on| n41
  n141 -->|Serves| n722
  n141 -->|Part of| n55
  n141 -->|Depends on| n160
  n141 -->|Depends on| n132
  n141 -->|Depends on| n122
  n141 -->|Depends on| n186
  n141 -->|Depends on| n118
  n141 -->|Depends on| n719
  n141 -->|Depends on| n721
  n141 -->|Depends on| n722
  n141 -->|Depends on| n16
  n141 -->|Depends on| n165
  n141 -->|Depends on| n718
  n141 -->|Depends on| n41
  n141 -->|Depends on| n133
  n141 -->|Depends on| n21
  n141 -->|Depends on| n23
  n141 -->|Depends on| n39
  n141 -->|Depends on| n51
  n141 -->|Depends on| n194
  n141 -->|Depends on| n315
  n142 -->|Serves| n475
  n142 -->|Part of| n55
  n142 -->|Depends on| n132
  n142 -->|Depends on| n139
  n143 -->|Serves| n482
  n143 -->|Part of| n55
  n143 -->|Depends on| n155
  n143 -->|Depends on| n132
  n143 -->|Depends on| n204
  n143 -->|Depends on| n618
  n143 -->|Depends on| n23
  n143 -->|Depends on| n39
  n143 -->|Depends on| n51
  n143 -->|Depends on| n315
  n144 -->|Serves| n475
  n144 -->|Part of| n55
  n144 -->|Depends on| n132
  n144 -->|Depends on| n188
  n144 -->|Depends on| n215
  n144 -->|Depends on| n201
  n144 -->|Depends on| n51
  n144 -->|Depends on| n753
  n144 -->|Depends on| n751
  n144 -->|Depends on| n749
  n144 -->|Depends on| n315
  n145 -->|Serves| n482
  n145 -->|Part of| n55
  n145 -->|Depends on| n132
  n145 -->|Depends on| n21
  n145 -->|Depends on| n23
  n145 -->|Depends on| n39
  n145 -->|Depends on| n347
  n145 -->|Depends on| n780
  n145 -->|Depends on| n41
  n145 -->|Depends on| n160
  n145 -->|Depends on| n51
  n145 -->|Depends on| n315
  n146 -->|Serves| n482
  n146 -->|Part of| n55
  n146 -->|Depends on| n132
  n146 -->|Depends on| n155
  n146 -->|Depends on| n208
  n146 -->|Depends on| n21
  n146 -->|Depends on| n23
  n146 -->|Depends on| n154
  n146 -->|Depends on| n40
  n146 -->|Depends on| n220
  n146 -->|Depends on| n39
  n146 -->|Depends on| n33
  n146 -->|Depends on| n340
  n146 -->|Depends on| n152
  n146 -->|Depends on| n781
  n146 -->|Depends on| n51
  n146 -->|Depends on| n315
  n146 -->|Depends on| n41
  n146 -->|Depends on| n160
  n164 -->|Depends on| n228
  n164 -->|Depends on| n230
  n165 -->|Serves| n475
  n165 -->|Depends on| n31
  n165 -->|Depends on| n163
  n166 -->|Serves| n475
  n166 -->|Depends on| n315
  n167 -->|Implements| n169
  n167 -->|Depends on| n17
  n167 -->|Depends on| n166
  n167 -->|Depends on| n315
  n170 -->|Chooses| n167
  n170 -->|Chooses| n171
  n170 -->|Chooses| n178
  n170 -->|Chooses| n173
  n170 -->|Chooses| n175
  n170 -->|Chooses| n176
  n170 -->|Chooses| n177
  n170 -->|Chooses| n174
  n170 -->|Chooses| n172
  n170 -->|In| n30
  n170 -->|In| n53
  n171 -->|Implements| n169
  n171 -->|Depends on| n22
  n171 -->|Depends on| n21
  n171 -->|Depends on| n23
  n171 -->|Depends on| n39
  n171 -->|Depends on| n168
  n171 -->|Depends on| n166
  n171 -->|Depends on| n315
  n172 -->|Implements| n169
  n172 -->|Depends on| n22
  n172 -->|Depends on| n21
  n172 -->|Depends on| n23
  n172 -->|Depends on| n33
  n172 -->|Depends on| n155
  n172 -->|Depends on| n39
  n172 -->|Depends on| n166
  n172 -->|Depends on| n315
  n173 -->|Implements| n169
  n173 -->|Depends on| n22
  n173 -->|Depends on| n23
  n173 -->|Depends on| n43
  n173 -->|Depends on| n39
  n173 -->|Depends on| n168
  n173 -->|Depends on| n166
  n173 -->|Depends on| n315
  n174 -->|Implements| n169
  n174 -->|Depends on| n34
  n174 -->|Depends on| n41
  n174 -->|Depends on| n166
  n174 -->|Depends on| n315
  n175 -->|Implements| n169
  n175 -->|Depends on| n22
  n175 -->|Depends on| n23
  n175 -->|Depends on| n28
  n175 -->|Depends on| n39
  n175 -->|Depends on| n168
  n175 -->|Depends on| n166
  n175 -->|Depends on| n315
  n176 -->|Implements| n169
  n176 -->|Depends on| n26
  n176 -->|Depends on| n166
  n176 -->|Depends on| n315
  n177 -->|Implements| n169
  n177 -->|Depends on| n17
  n177 -->|Depends on| n54
  n177 -->|Depends on| n168
  n177 -->|Depends on| n166
  n177 -->|Depends on| n315
  n178 -->|Implements| n169
  n178 -->|Depends on| n22
  n178 -->|Depends on| n23
  n178 -->|Depends on| n41
  n178 -->|Depends on| n39
  n178 -->|Depends on| n168
  n178 -->|Depends on| n166
  n178 -->|Depends on| n315
  n179 -->|Chooses| n182
  n179 -->|In| n30
  n179 -->|In| n48
  n179 -->|In| n53
  n179 -->|In| n15
  n179 -->|Serves| n482
  n182 -->|Depends on| n322
  n183 -->|Serves| n482
  n183 -->|Applied by| n182
  n183 -->|Applied by| n179
  n183 -->|Applied by| n322
  n185 -->|Serves| n482
  n186 -->|Serves| n475
  n186 -->|Depends on| n160
  n186 -->|Depends on| n155
  n186 -->|Depends on| n39
  n186 -->|Depends on| n216
  n186 -->|Depends on| n40
  n186 -->|Depends on| n247
  n186 -->|Depends on| n316
  n186 -->|Depends on| n154
  n186 -->|Depends on| n781
  n187 -->|Serves| n475
  n187 -->|Depends on| n148
  n187 -->|Depends on| n207
  n187 -->|Depends on| n210
  n187 -->|Depends on| n40
  n187 -->|Depends on| n150
  n187 -->|Depends on| n155
  n187 -->|Depends on| n329
  n187 -->|Depends on| n211
  n188 -->|Serves| n475
  n188 -->|Depends on| n155
  n188 -->|Depends on| n480
  n188 -->|Depends on| n189
  n188 -->|Depends on| n210
  n188 -->|Depends on| n207
  n188 -->|Depends on| n31
  n188 -->|Depends on| n21
  n188 -->|Depends on| n39
  n188 -->|Depends on| n212
  n188 -->|Depends on| n208
  n188 -->|Depends on| n198
  n188 -->|Depends on| n216
  n188 -->|Depends on| n247
  n188 -->|Depends on| n40
  n188 -->|Depends on| n316
  n188 -->|Depends on| n196
  n188 -->|Depends on| n49
  n188 -->|Depends on| n194
  n188 -->|Depends on| n28
  n188 -->|Depends on| n154
  n188 -->|Depends on| n199
  n189 -->|Serves| n475
  n190 -->|Serves| n475
  n190 -->|Depends on| n160
  n190 -->|Depends on| n17
  n190 -->|Depends on| n41
  n190 -->|Depends on| n324
  n191 -->|Serves| n475
  n191 -->|Depends on| n192
  n191 -->|Depends on| n160
  n191 -->|Depends on| n155
  n191 -->|Depends on| n51
  n191 -->|Depends on| n746
  n191 -->|Depends on| n17
  n191 -->|Depends on| n54
  n191 -->|Depends on| n473
  n191 -->|Depends on| n26
  n191 -->|Depends on| n21
  n191 -->|Depends on| n39
  n191 -->|Depends on| n208
  n191 -->|Depends on| n190
  n191 -->|Depends on| n193
  n191 -->|Depends on| n364
  n191 -->|Depends on| n628
  n191 -->|Depends on| n322
  n191 -->|Depends on| n318
  n193 -->|Serves| n475
  n193 -->|Depends on| n324
  n194 -->|Serves| n475
  n194 -->|Depends on| n155
  n194 -->|Depends on| n219
  n194 -->|Depends on| n781
  n194 -->|Depends on| n208
  n194 -->|Depends on| n21
  n194 -->|Depends on| n39
  n194 -->|Depends on| n25
  n194 -->|Depends on| n195
  n194 -->|Depends on| n152
  n196 -->|Serves| n475
  n197 -->|Serves| n475
  n198 -->|Serves| n475
  n198 -->|Depends on| n40
  n198 -->|Depends on| n158
  n198 -->|Depends on| n316
  n198 -->|Depends on| n207
  n198 -->|Depends on| n210
  n198 -->|Depends on| n180
  n198 -->|Depends on| n197
  n198 -->|Depends on| n483
  n198 -->|Depends on| n155
  n198 -->|Depends on| n781
  n198 -->|Depends on| n347
  n198 -->|Depends on| n185
  n198 -->|Depends on| n196
  n199 -->|Serves| n475
  n199 -->|Depends on| n480
  n199 -->|Depends on| n316
  n201 -->|Serves| n475
  n201 -->|Depends on| n27
  n201 -->|Depends on| n247
  n201 -->|Depends on| n156
  n201 -->|Depends on| n155
  n201 -->|Depends on| n477
  n201 -->|Depends on| n472
  n201 -->|Depends on| n197
  n201 -->|Depends on| n478
  n201 -->|Depends on| n479
  n201 -->|Depends on| n210
  n201 -->|Depends on| n21
  n201 -->|Depends on| n39
  n201 -->|Depends on| n208
  n201 -->|Depends on| n198
  n201 -->|Depends on| n40
  n201 -->|Depends on| n154
  n201 -->|Depends on| n323
  n201 -->|Depends on| n255
  n201 -->|Depends on| n249
  n201 -->|Depends on| n251
  n201 -->|Depends on| n259
  n201 -->|Depends on| n268
  n201 -->|Depends on| n265
  n201 -->|Depends on| n263
  n201 -->|Depends on| n253
  n202 -->|Serves| n267
  n202 -->|Applied by| n201
  n202 -->|Applied by| n215
  n203 -->|Serves| n482
  n203 -->|Depends on| n155
  n203 -->|Depends on| n152
  n203 -->|Depends on| n210
  n203 -->|Depends on| n281
  n203 -->|Depends on| n21
  n203 -->|Depends on| n39
  n203 -->|Depends on| n40
  n203 -->|Depends on| n324
  n204 -->|Serves| n482
  n204 -->|Depends on| n152
  n204 -->|Depends on| n207
  n204 -->|Depends on| n40
  n204 -->|Depends on| n324
  n206 -->|Serves| n475
  n206 -->|Depends on| n155
  n206 -->|Depends on| n471
  n206 -->|Depends on| n205
  n206 -->|Depends on| n17
  n206 -->|Depends on| n204
  n206 -->|Depends on| n215
  n206 -->|Depends on| n322
  n207 -->|Serves| n475
  n207 -->|Depends on| n726
  n208 -->|Serves| n475
  n208 -->|Depends on| n155
  n208 -->|Depends on| n21
  n208 -->|Depends on| n39
  n208 -->|Depends on| n220
  n208 -->|Depends on| n40
  n208 -->|Depends on| n154
  n208 -->|Depends on| n781
  n209 -->|Serves| n475
  n209 -->|Implements| n28
  n209 -->|Depends on| n21
  n209 -->|Depends on| n39
  n209 -->|Depends on| n25
  n209 -->|Depends on| n200
  n209 -->|Depends on| n46
  n210 -->|Serves| n475
  n210 -->|Depends on| n158
  n210 -->|Depends on| n270
  n211 -->|Serves| n475
  n211 -->|Depends on| n315
  n212 -->|Serves| n475
  n212 -->|Depends on| n783
  n212 -->|Depends on| n210
  n212 -->|Depends on| n214
  n212 -->|Depends on| n56
  n212 -->|Depends on| n27
  n212 -->|Depends on| n46
  n212 -->|Depends on| n25
  n212 -->|Depends on| n39
  n212 -->|Depends on| n207
  n212 -->|Depends on| n149
  n212 -->|Depends on| n316
  n212 -->|Depends on| n782
  n212 -->|Depends on| n156
  n212 -->|Depends on| n40
  n213 -->|Serves| n482
  n213 -->|Applied by| n198
  n213 -->|Applied by| n215
  n215 -->|Serves| n475
  n215 -->|Depends on| n247
  n215 -->|Depends on| n148
  n215 -->|Depends on| n162
  n215 -->|Depends on| n150
  n215 -->|Depends on| n155
  n215 -->|Depends on| n31
  n215 -->|Depends on| n21
  n215 -->|Depends on| n39
  n215 -->|Depends on| n40
  n215 -->|Depends on| n208
  n215 -->|Depends on| n324
  n215 -->|Depends on| n329
  n215 -->|Depends on| n257
  n215 -->|Depends on| n249
  n215 -->|Depends on| n265
  n215 -->|Depends on| n261
  n216 -->|Serves| n475
  n216 -->|Depends on| n159
  n216 -->|Depends on| n158
  n216 -->|Depends on| n155
  n216 -->|Depends on| n39
  n216 -->|Depends on| n40
  n216 -->|Depends on| n247
  n216 -->|Depends on| n316
  n217 -->|Refines| n475
  n218 -->|Accepts| n217
  n222 -->|Serves| n475
  n222 -->|Depends on| n223
  n222 -->|Depends on| n783
  n222 -->|Depends on| n158
  n222 -->|Depends on| n763
  n222 -->|Depends on| n769
  n222 -->|Depends on| n767
  n222 -->|Depends on| n770
  n222 -->|Depends on| n764
  n222 -->|Depends on| n761
  n222 -->|Depends on| n760
  n222 -->|Depends on| n771
  n222 -->|Depends on| n778
  n222 -->|Depends on| n780
  n222 -->|Depends on| n766
  n230 -->|Depends on| n227
  n234 -->|Depends on| n238
  n234 -->|Depends on| n236
  n235 -->|Depends on| n238
  n235 -->|Depends on| n236
  n237 -->|Depends on| n235
  n238 -->|Depends on| n233
  n239 -->|Read in| n781
  n244 -->|Depends on| n235
  n246 -->|Depends on| n233
  n247 -->|Serves| n475
  n247 -->|Depends on| n735
  n247 -->|Depends on| n727
  n247 -->|Depends on| n781
  n247 -->|Depends on| n784
  n247 -->|Depends on| n742
  n247 -->|Depends on| n743
  n247 -->|Depends on| n744
  n247 -->|Depends on| n31
  n247 -->|Depends on| n21
  n247 -->|Depends on| n39
  n247 -->|Depends on| n319
  n248 -->|Serves| n475
  n248 -->|Applied by| n247
  n248 -->|Applied by| n364
  n249 -->|Refines| n267
  n250 -->|Accepts| n249
  n251 -->|Refines| n267
  n252 -->|Accepts| n251
  n253 -->|Refines| n267
  n254 -->|Accepts| n253
  n255 -->|Refines| n267
  n256 -->|Accepts| n255
  n257 -->|Refines| n267
  n258 -->|Accepts| n257
  n259 -->|Refines| n267
  n260 -->|Accepts| n259
  n261 -->|Refines| n267
  n262 -->|Accepts| n261
  n263 -->|Refines| n265
  n263 -->|Depends on| n265
  n264 -->|Accepts| n263
  n265 -->|Refines| n267
  n266 -->|Accepts| n265
  n268 -->|Refines| n267
  n269 -->|Accepts| n268
  n270 -->|Refines| n484
  n271 -->|Accepts| n270
  n273 -->|Refines| n484
  n274 -->|Accepts| n273
  n275 -->|Depends on| n235
  n276 -->|Defined by| n282
  n276 -->|Depends on| n282
  n277 -->|Defined by| n282
  n277 -->|Depends on| n282
  n278 -->|Defined by| n282
  n278 -->|Depends on| n282
  n279 -->|Defined by| n282
  n279 -->|Depends on| n282
  n279 -->|Depends on| n277
  n280 -->|Defined by| n282
  n280 -->|Depends on| n282
  n280 -->|Depends on| n276
  n281 -->|Defined by| n282
  n281 -->|Depends on| n282
  n281 -->|Depends on| n276
  n283 -->|Depends on| n238
  n283 -->|Depends on| n236
  n283 -->|Depends on| n235
  n283 -->|Depends on| n277
  n284 -->|Defined by| n282
  n284 -->|Depends on| n282
  n286 -->|Defined by| n282
  n286 -->|Depends on| n282
  n287 -->|Defined by| n282
  n287 -->|Depends on| n282
  n288 -->|Defined by| n282
  n288 -->|Depends on| n282
  n289 -->|Depends on| n155
  n290 -->|Depends on| n235
  n291 -->|Defined by| n282
  n291 -->|Depends on| n282
  n292 -->|Defined by| n285
  n292 -->|Depends on| n285
  n292 -->|Depends on| n295
  n292 -->|Depends on| n294
  n293 -->|Defined by| n285
  n293 -->|Depends on| n285
  n293 -->|Depends on| n282
  n294 -->|Defined by| n285
  n294 -->|Depends on| n285
  n295 -->|Defined by| n285
  n295 -->|Depends on| n285
  n295 -->|Depends on| n282
  n300 -->|Defined by| n306
  n300 -->|Depends on| n306
  n300 -->|Depends on| n312
  n301 -->|Defined by| n306
  n301 -->|Depends on| n306
  n302 -->|Defined by| n306
  n302 -->|Depends on| n306
  n303 -->|Defined by| n306
  n303 -->|Depends on| n306
  n304 -->|Defined by| n306
  n304 -->|Depends on| n306
  n304 -->|Depends on| n303
  n305 -->|Defined by| n306
  n305 -->|Depends on| n306
  n305 -->|Depends on| n303
  n307 -->|Defined by| n306
  n307 -->|Depends on| n306
  n308 -->|Defined by| n306
  n308 -->|Depends on| n306
  n308 -->|Depends on| n307
  n309 -->|Defined by| n306
  n309 -->|Depends on| n306
  n309 -->|Depends on| n307
  n310 -->|Defined by| n306
  n310 -->|Depends on| n306
  n310 -->|Depends on| n305
  n311 -->|Defined by| n306
  n311 -->|Depends on| n306
  n311 -->|Depends on| n312
  n312 -->|Defined by| n306
  n312 -->|Depends on| n306
  n313 -->|Defined by| n306
  n313 -->|Depends on| n306
  n313 -->|Depends on| n307
  n314 -->|Written in| n322
  n314 -->|Depends on| n322
  n315 -->|Written in| n322
  n315 -->|Depends on| n322
  n316 -->|Written in| n322
  n316 -->|Depends on| n322
  n317 -->|Serves| n482
  n317 -->|Applied by| n316
  n317 -->|Applied by| n329
  n317 -->|Applied by| n318
  n317 -->|Applied by| n315
  n317 -->|Applied by| n328
  n317 -->|Applied by| n314
  n317 -->|Applied by| n325
  n318 -->|Written in| n322
  n318 -->|Depends on| n322
  n319 -->|Written in| n322
  n320 -->|Written in| n322
  n321 -->|Written in| n322
  n323 -->|Written in| n322
  n324 -->|Written in| n322
  n325 -->|Written in| n322
  n325 -->|Depends on| n322
  n326 -->|Written in| n322
  n327 -->|Written in| n322
  n328 -->|Written in| n322
  n328 -->|Depends on| n322
  n329 -->|Written in| n322
  n329 -->|Depends on| n322
  n330 -->|Written in| n322
  n331 -->|Serves| n482
  n333 -->|Serves| n482
  n335 -->|Serves| n482
  n338 -->|Serves| n482
  n340 -->|Serves| n482
  n342 -->|Serves| n482
  n343 -->|Serves| n482
  n347 -->|Serves| n482
  n349 -->|Defined by| n378
  n349 -->|Depends on| n378
  n349 -->|Depends on| n367
  n349 -->|Depends on| n235
  n350 -->|Defined by| n378
  n350 -->|Depends on| n378
  n350 -->|Depends on| n160
  n350 -->|Depends on| n357
  n350 -->|Depends on| n234
  n350 -->|Depends on| n235
  n351 -->|Defined by| n378
  n351 -->|Depends on| n378
  n351 -->|Depends on| n367
  n351 -->|Depends on| n235
  n352 -->|Defined by| n378
  n352 -->|Depends on| n378
  n352 -->|Depends on| n367
  n352 -->|Depends on| n234
  n352 -->|Depends on| n235
  n353 -->|Defined by| n378
  n353 -->|Depends on| n378
  n353 -->|Depends on| n367
  n353 -->|Depends on| n234
  n353 -->|Depends on| n235
  n353 -->|Depends on| n371
  n354 -->|Defined by| n378
  n354 -->|Depends on| n378
  n354 -->|Depends on| n367
  n354 -->|Depends on| n234
  n354 -->|Depends on| n235
  n355 -->|Defined by| n378
  n355 -->|Depends on| n378
  n355 -->|Depends on| n299
  n355 -->|Depends on| n1
  n355 -->|Depends on| n234
  n355 -->|Depends on| n235
  n355 -->|Depends on| n246
  n355 -->|Depends on| n243
  n356 -->|Depends on| n238
  n357 -->|Defined by| n378
  n357 -->|Depends on| n378
  n357 -->|Depends on| n7
  n357 -->|Depends on| n234
  n357 -->|Depends on| n235
  n357 -->|Depends on| n246
  n357 -->|Depends on| n229
  n359 -->|Defined by| n378
  n359 -->|Depends on| n378
  n359 -->|Depends on| n367
  n359 -->|Depends on| n234
  n359 -->|Depends on| n235
  n359 -->|Depends on| n349
  n359 -->|Depends on| n353
  n360 -->|Defined by| n378
  n360 -->|Depends on| n378
  n360 -->|Depends on| n241
  n360 -->|Depends on| n240
  n361 -->|Uses the variables of| n9
  n361 -->|Uses the variables of| n12
  n361 -->|Uses the variables of| n6
  n361 -->|Styles| n364
  n362 -->|Defined by| n378
  n362 -->|Depends on| n378
  n362 -->|Depends on| n367
  n362 -->|Depends on| n235
  n364 -->|Serves| n475
  n364 -->|Depends on| n365
  n364 -->|Depends on| n374
  n364 -->|Depends on| n7
  n364 -->|Depends on| n13
  n364 -->|Depends on| n4
  n364 -->|Depends on| n9
  n364 -->|Depends on| n8
  n364 -->|Depends on| n12
  n364 -->|Depends on| n5
  n364 -->|Depends on| n10
  n364 -->|Depends on| n3
  n364 -->|Depends on| n6
  n364 -->|Depends on| n45
  n364 -->|Depends on| n21
  n364 -->|Depends on| n16
  n364 -->|Depends on| n19
  n364 -->|Depends on| n372
  n364 -->|Depends on| n377
  n364 -->|Depends on| n375
  n364 -->|Depends on| n360
  n364 -->|Depends on| n356
  n364 -->|Depends on| n368
  n364 -->|Depends on| n366
  n364 -->|Depends on| n228
  n364 -->|Depends on| n227
  n364 -->|Depends on| n324
  n364 -->|Depends on| n322
  n364 -->|Depends on| n735
  n366 -->|Defined by| n378
  n366 -->|Depends on| n378
  n366 -->|Depends on| n231
  n366 -->|Depends on| n238
  n366 -->|Depends on| n236
  n366 -->|Depends on| n235
  n368 -->|Defined by| n378
  n368 -->|Depends on| n378
  n368 -->|Depends on| n244
  n368 -->|Depends on| n239
  n368 -->|Depends on| n768
  n368 -->|Depends on| n757
  n369 -->|Uses the variables of| n7
  n369 -->|Uses the variables of| n13
  n369 -->|Uses the variables of| n9
  n369 -->|Uses the variables of| n8
  n369 -->|Uses the variables of| n12
  n369 -->|Uses the variables of| n5
  n369 -->|Uses the variables of| n10
  n369 -->|Uses the variables of| n3
  n369 -->|Uses the variables of| n6
  n369 -->|Styles| n364
  n371 -->|Defined by| n378
  n371 -->|Depends on| n378
  n371 -->|Depends on| n370
  n371 -->|Depends on| n367
  n371 -->|Depends on| n234
  n371 -->|Depends on| n235
  n372 -->|Defined by| n378
  n372 -->|Depends on| n378
  n372 -->|Depends on| n234
  n372 -->|Depends on| n373
  n372 -->|Depends on| n359
  n372 -->|Depends on| n355
  n373 -->|Defined by| n378
  n373 -->|Depends on| n378
  n373 -->|Depends on| n234
  n373 -->|Depends on| n350
  n373 -->|Depends on| n351
  n373 -->|Depends on| n352
  n373 -->|Depends on| n362
  n373 -->|Depends on| n354
  n375 -->|Defined by| n378
  n375 -->|Depends on| n378
  n375 -->|Depends on| n228
  n375 -->|Depends on| n227
  n375 -->|Depends on| n229
  n375 -->|Depends on| n226
  n376 -->|Serves| n482
  n376 -->|Applied by| n369
  n376 -->|Applied by| n361
  n376 -->|Applied by| n377
  n376 -->|Applied by| n360
  n376 -->|Applied by| n364
  n377 -->|Defined by| n378
  n377 -->|Depends on| n378
  n377 -->|Depends on| n228
  n377 -->|Depends on| n241
  n377 -->|Depends on| n240
  n377 -->|Depends on| n225
  n377 -->|Depends on| n242
  n377 -->|Depends on| n230
  n377 -->|Depends on| n227
  n379 -->|Chooses| n392
  n379 -->|In| n30
  n379 -->|In| n53
  n379 -->|Serves| n476
  n380 -->|Chooses| n419
  n380 -->|In| n30
  n380 -->|In| n53
  n380 -->|Serves| n476
  n381 -->|Implements| n21
  n382 -->|Implements| n22
  n383 -->|Implements| n23
  n385 -->|Chooses| n430
  n385 -->|Chooses| n418
  n385 -->|In| n30
  n385 -->|In| n53
  n385 -->|Serves| n476
  n386 -->|Implements| n16
  n386 -->|Uses| n334
  n387 -->|Chooses| n386
  n387 -->|In| n30
  n387 -->|In| n53
  n387 -->|Serves| n476
  n388 -->|Implements| n41
  n388 -->|Implements| n43
  n388 -->|Implements| n42
  n388 -->|Depends on| n389
  n388 -->|Depends on| n39
  n388 -->|Depends on| n160
  n388 -->|Depends on| n326
  n390 -->|Chooses| n397
  n390 -->|Chooses| n412
  n390 -->|In| n53
  n390 -->|Serves| n476
  n391 -->|Chooses| n400
  n391 -->|Chooses| n426
  n391 -->|Chooses| n413
  n391 -->|Chooses| n388
  n391 -->|Chooses| n398
  n391 -->|In| n53
  n391 -->|Serves| n476
  n392 -->|Implements| n14
  n392 -->|Depends on| n21
  n392 -->|Depends on| n23
  n392 -->|Depends on| n783
  n392 -->|Depends on| n763
  n392 -->|Depends on| n764
  n392 -->|Depends on| n761
  n392 -->|Depends on| n760
  n392 -->|Depends on| n772
  n392 -->|Depends on| n778
  n392 -->|Depends on| n780
  n392 -->|Depends on| n766
  n392 -->|Depends on| n770
  n394 -->|Depends on| n22
  n394 -->|Depends on| n23
  n394 -->|Depends on| n21
  n394 -->|Depends on| n39
  n395 -->|Depends on| n22
  n395 -->|Depends on| n23
  n395 -->|Depends on| n21
  n395 -->|Depends on| n39
  n395 -->|Depends on| n396
  n395 -->|Depends on| n155
  n397 -->|Implements| n21
  n397 -->|Implements| n23
  n397 -->|Implements| n22
  n397 -->|Implements| n57
  n397 -->|Depends on| n39
  n397 -->|Depends on| n399
  n397 -->|Depends on| n326
  n398 -->|Implements| n26
  n398 -->|Implements| n47
  n398 -->|Depends on| n326
  n400 -->|Implements| n51
  n400 -->|Implements| n52
  n400 -->|Depends on| n393
  n400 -->|Depends on| n326
  n401 -->|Implements| n18
  n401 -->|Depends on| n51
  n401 -->|Depends on| n160
  n401 -->|Depends on| n153
  n401 -->|Depends on| n326
  n402 -->|Implements| n19
  n402 -->|Depends on| n363
  n403 -->|Implements| n25
  n404 -->|Implements| n26
  n405 -->|Chooses| n381
  n405 -->|Chooses| n383
  n405 -->|Chooses| n382
  n405 -->|Chooses| n408
  n405 -->|Chooses| n409
  n405 -->|Chooses| n410
  n405 -->|Chooses| n427
  n405 -->|Chooses| n415
  n405 -->|Chooses| n414
  n405 -->|Chooses| n404
  n405 -->|In| n30
  n405 -->|Serves| n476
  n406 -->|Implements| n39
  n407 -->|Chooses| n406
  n407 -->|Chooses| n403
  n407 -->|Chooses| n402
  n407 -->|Chooses| n411
  n407 -->|Chooses| n401
  n407 -->|Chooses| n420
  n407 -->|In| n30
  n407 -->|In| n53
  n407 -->|Serves| n476
  n408 -->|Implements| n41
  n408 -->|Depends on| n434
  n408 -->|Depends on| n161
  n409 -->|Implements| n43
  n409 -->|Depends on| n434
  n410 -->|Implements| n51
  n410 -->|Depends on| n326
  n411 -->|Implements| n54
  n412 -->|Implements| n33
  n412 -->|Depends on| n23
  n412 -->|Depends on| n39
  n412 -->|Depends on| n155
  n412 -->|Depends on| n340
  n413 -->|Implements| n34
  n414 -->|Implements| n33
  n415 -->|Implements| n34
  n416 -->|Depends on| n394
  n416 -->|Depends on| n395
  n417 -->|Chooses| n416
  n417 -->|In| n30
  n417 -->|In| n53
  n417 -->|Serves| n476
  n418 -->|Implements| n45
  n418 -->|Depends on| n384
  n418 -->|Depends on| n155
  n418 -->|Depends on| n219
  n418 -->|Depends on| n781
  n419 -->|Implements| n56
  n419 -->|Uses| n346
  n419 -->|Uses| n339
  n420 -->|Implements| n27
  n421 -->|Chooses| n209
  n421 -->|In| n30
  n421 -->|In| n53
  n421 -->|Serves| n476
  n422 -->|Implements| n46
  n423 -->|Chooses| n422
  n423 -->|In| n53
  n423 -->|Serves| n476
  n424 -->|Chooses| n425
  n424 -->|In| n30
  n424 -->|Serves| n476
  n425 -->|Implements| n46
  n425 -->|Depends on| n155
  n425 -->|Depends on| n384
  n425 -->|Depends on| n194
  n425 -->|Depends on| n200
  n426 -->|Implements| n17
  n426 -->|Depends on| n428
  n426 -->|Depends on| n429
  n427 -->|Implements| n17
  n427 -->|Depends on| n161
  n430 -->|Implements| n40
  n430 -->|Depends on| n384
  n431 -->|Chooses| n435
  n431 -->|In| n30
  n431 -->|In| n53
  n431 -->|Serves| n476
  n432 -->|Implements| n31
  n432 -->|Uses| n344
  n432 -->|Depends on| n40
  n432 -->|Depends on| n154
  n432 -->|Depends on| n781
  n433 -->|Chooses| n432
  n433 -->|In| n30
  n433 -->|In| n53
  n433 -->|Serves| n476
  n435 -->|Implements| n50
  n435 -->|Uses| n348
  n435 -->|Uses| n337
  n435 -->|Uses| n332
  n435 -->|Depends on| n326
  n436 -->|Serves| n475
  n436 -->|Applied by| n188
  n436 -->|Applied by| n130
  n437 -->|Serves| n482
  n437 -->|Applied by| n379
  n438 -->|Serves| n482
  n438 -->|Applied by| n188
  n438 -->|Applied by| n201
  n439 -->|Serves| n484
  n439 -->|Applied by| n669
  n439 -->|Applied by| n670
  n440 -->|Serves| n482
  n440 -->|Applied by| n196
  n440 -->|Applied by| n198
  n441 -->|Serves| n475
  n441 -->|Applied by| n122
  n441 -->|Applied by| n164
  n442 -->|Serves| n475
  n442 -->|Applied by| n55
  n442 -->|Applied by| n44
  n442 -->|Applied by| n32
  n442 -->|Applied by| n29
  n443 -->|Serves| n484
  n443 -->|Applied by| n670
  n443 -->|Applied by| n734
  n444 -->|Serves| n482
  n444 -->|Applied by| n188
  n444 -->|Applied by| n735
  n445 -->|Serves| n475
  n445 -->|Applied by| n720
  n446 -->|Serves| n475
  n446 -->|Applied by| n114
  n446 -->|Applied by| n217
  n446 -->|Applied by| n642
  n446 -->|Applied by| n648
  n447 -->|Serves| n475
  n447 -->|Applied by| n212
  n447 -->|Applied by| n56
  n447 -->|Applied by| n781
  n447 -->|Applied by| n149
  n448 -->|Serves| n475
  n448 -->|Applied by| n188
  n448 -->|Applied by| n120
  n449 -->|Serves| n482
  n449 -->|Applied by| n203
  n449 -->|Applied by| n134
  n450 -->|Serves| n482
  n450 -->|Applied by| n188
  n450 -->|Applied by| n187
  n450 -->|Applied by| n206
  n450 -->|Applied by| n212
  n450 -->|Applied by| n201
  n451 -->|Serves| n484
  n451 -->|Applied by| n208
  n451 -->|Applied by| n188
  n451 -->|Applied by| n187
  n451 -->|Applied by| n210
  n451 -->|Applied by| n270
  n451 -->|Applied by| n114
  n452 -->|Serves| n484
  n452 -->|Applied by| n208
  n452 -->|Applied by| n201
  n452 -->|Applied by| n146
  n452 -->|Applied by| n138
  n452 -->|Applied by| n273
  n452 -->|Applied by| n272
  n453 -->|Serves| n475
  n453 -->|Applied by| n170
  n453 -->|Applied by| n716
  n454 -->|Serves| n482
  n454 -->|Applied by| n727
  n454 -->|Applied by| n247
  n454 -->|Applied by| n188
  n454 -->|Applied by| n29
  n454 -->|Applied by| n32
  n455 -->|Serves| n475
  n455 -->|Applied by| n201
  n455 -->|Applied by| n188
  n455 -->|Applied by| n208
  n456 -->|Serves| n482
  n456 -->|Applied by| n188
  n456 -->|Applied by| n735
  n457 -->|Serves| n482
  n457 -->|Applied by| n120
  n457 -->|Applied by| n143
  n457 -->|Applied by| n204
  n457 -->|Applied by| n364
  n457 -->|Applied by| n186
  n458 -->|Serves| n475
  n458 -->|Applied by| n187
  n458 -->|Applied by| n198
  n458 -->|Applied by| n215
  n458 -->|Applied by| n44
  n459 -->|Serves| n484
  n459 -->|Applied by| n208
  n459 -->|Applied by| n146
  n459 -->|Applied by| n416
  n459 -->|Applied by| n417
  n459 -->|Applied by| n114
  n459 -->|Applied by| n201
  n459 -->|Applied by| n130
  n460 -->|Serves| n475
  n460 -->|Applied by| n390
  n460 -->|Applied by| n708
  n460 -->|Applied by| n696
  n460 -->|Applied by| n656
  n461 -->|Serves| n475
  n461 -->|Applied by| n40
  n461 -->|Applied by| n156
  n461 -->|Applied by| n151
  n461 -->|Applied by| n201
  n462 -->|Serves| n475
  n462 -->|Applied by| n421
  n462 -->|Applied by| n424
  n462 -->|Applied by| n423
  n463 -->|Serves| n484
  n463 -->|Applied by| n709
  n463 -->|Applied by| n706
  n463 -->|Applied by| n665
  n463 -->|Applied by| n664
  n464 -->|Serves| n475
  n464 -->|Applied by| n141
  n464 -->|Applied by| n135
  n464 -->|Applied by| n719
  n464 -->|Applied by| n724
  n464 -->|Applied by| n722
  n464 -->|Applied by| n688
  n464 -->|Applied by| n667
  n465 -->|Serves| n476
  n465 -->|Applied by| n407
  n465 -->|Applied by| n405
  n465 -->|Applied by| n391
  n465 -->|Applied by| n387
  n465 -->|Applied by| n431
  n465 -->|Applied by| n433
  n465 -->|Applied by| n380
  n465 -->|Applied by| n385
  n465 -->|Applied by| n615
  n465 -->|Applied by| n616
  n465 -->|Applied by| n635
  n465 -->|Applied by| n634
  n465 -->|Applied by| n627
  n465 -->|Applied by| n626
  n466 -->|Serves| n475
  n466 -->|Applied by| n114
  n466 -->|Applied by| n217
  n466 -->|Applied by| n643
  n466 -->|Applied by| n642
  n466 -->|Applied by| n653
  n467 -->|Serves| n475
  n467 -->|Applied by| n188
  n467 -->|Applied by| n216
  n468 -->|Serves| n475
  n468 -->|Applied by| n201
  n468 -->|Applied by| n653
  n469 -->|Serves| n475
  n469 -->|Applied by| n201
  n469 -->|Applied by| n215
  n469 -->|Applied by| n208
  n470 -->|Serves| n482
  n470 -->|Applied by| n735
  n470 -->|Applied by| n727
  n470 -->|Applied by| n316
  n470 -->|Applied by| n319
  n470 -->|Applied by| n323
  n470 -->|Applied by| n329
  n470 -->|Applied by| n324
  n470 -->|Applied by| n318
  n470 -->|Applied by| n315
  n470 -->|Applied by| n314
  n470 -->|Applied by| n327
  n470 -->|Applied by| n326
  n470 -->|Applied by| n328
  n480 -->|Refines| n475
  n481 -->|Accepts| n480
  n485 -->|Releases| n55
  n486 -->|Releases| n55
  n486 -->|Assembled by| n603
  n487 -->|Releases| n55
  n487 -->|Assembled by| n613
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
  n494 -->|Assembled by| n493
  n495 -->|Releases| n55
  n495 -->|Assembled by| n494
  n496 -->|Releases| n55
  n496 -->|Assembled by| n495
  n497 -->|Releases| n55
  n497 -->|Assembled by| n486
  n498 -->|Releases| n55
  n498 -->|Assembled by| n496
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
  n505 -->|Assembled by| n504
  n506 -->|Releases| n55
  n506 -->|Assembled by| n505
  n507 -->|Releases| n55
  n507 -->|Assembled by| n506
  n508 -->|Releases| n55
  n508 -->|Assembled by| n497
  n509 -->|Releases| n55
  n509 -->|Assembled by| n507
  n510 -->|Releases| n55
  n510 -->|Assembled by| n509
  n511 -->|Releases| n55
  n511 -->|Assembled by| n510
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
  n518 -->|Assembled by| n517
  n519 -->|Releases| n55
  n519 -->|Assembled by| n508
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
  n526 -->|Assembled by| n485
  n527 -->|Releases| n55
  n527 -->|Assembled by| n525
  n528 -->|Releases| n55
  n528 -->|Assembled by| n527
  n529 -->|Releases| n55
  n529 -->|Assembled by| n528
  n530 -->|Releases| n55
  n530 -->|Assembled by| n529
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
  n537 -->|Assembled by| n526
  n538 -->|Releases| n55
  n538 -->|Assembled by| n536
  n539 -->|Releases| n55
  n539 -->|Assembled by| n538
  n540 -->|Releases| n55
  n540 -->|Assembled by| n539
  n541 -->|Releases| n55
  n541 -->|Assembled by| n540
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
  n548 -->|Assembled by| n537
  n549 -->|Releases| n55
  n549 -->|Assembled by| n547
  n550 -->|Releases| n55
  n550 -->|Assembled by| n549
  n551 -->|Releases| n55
  n551 -->|Assembled by| n550
  n552 -->|Releases| n55
  n552 -->|Assembled by| n551
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
  n559 -->|Assembled by| n548
  n560 -->|Releases| n55
  n560 -->|Assembled by| n558
  n561 -->|Releases| n55
  n561 -->|Assembled by| n560
  n562 -->|Releases| n55
  n562 -->|Assembled by| n561
  n563 -->|Releases| n55
  n563 -->|Assembled by| n562
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
  n570 -->|Assembled by| n559
  n571 -->|Releases| n55
  n571 -->|Assembled by| n569
  n572 -->|Releases| n55
  n572 -->|Assembled by| n571
  n573 -->|Releases| n55
  n573 -->|Assembled by| n572
  n574 -->|Releases| n55
  n574 -->|Assembled by| n573
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
  n581 -->|Assembled by| n570
  n582 -->|Releases| n55
  n582 -->|Assembled by| n580
  n583 -->|Releases| n55
  n583 -->|Assembled by| n582
  n584 -->|Releases| n55
  n584 -->|Assembled by| n583
  n585 -->|Releases| n55
  n585 -->|Assembled by| n584
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
  n592 -->|Assembled by| n581
  n593 -->|Releases| n55
  n593 -->|Assembled by| n591
  n594 -->|Releases| n55
  n594 -->|Assembled by| n593
  n595 -->|Releases| n55
  n595 -->|Assembled by| n594
  n596 -->|Releases| n55
  n596 -->|Assembled by| n595
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
  n603 -->|Assembled by| n592
  n604 -->|Releases| n55
  n604 -->|Assembled by| n602
  n605 -->|Releases| n55
  n605 -->|Assembled by| n604
  n606 -->|Releases| n55
  n606 -->|Assembled by| n605
  n607 -->|Releases| n55
  n607 -->|Assembled by| n606
  n608 -->|Releases| n55
  n608 -->|Assembled by| n607
  n609 -->|Releases| n55
  n609 -->|Assembled by| n608
  n610 -->|Releases| n55
  n610 -->|Assembled by| n609
  n611 -->|Releases| n55
  n611 -->|Assembled by| n610
  n612 -->|Releases| n55
  n612 -->|Assembled by| n611
  n613 -->|Releases| n55
  n613 -->|Assembled by| n612
  n614 -->|Serves| n475
  n614 -->|Depends on| n158
  n614 -->|Depends on| n631
  n614 -->|Depends on| n327
  n615 -->|Chooses| n621
  n615 -->|In| n30
  n615 -->|In| n53
  n615 -->|Serves| n476
  n616 -->|Chooses| n623
  n616 -->|In| n30
  n616 -->|In| n53
  n616 -->|Serves| n476
  n618 -->|Serves| n475
  n618 -->|Depends on| n614
  n618 -->|Depends on| n619
  n618 -->|Depends on| n327
  n620 -->|Serves| n475
  n620 -->|Implements| n629
  n620 -->|Depends on| n625
  n620 -->|Depends on| n297
  n620 -->|Depends on| n378
  n620 -->|Depends on| n235
  n620 -->|Depends on| n237
  n620 -->|Depends on| n232
  n620 -->|Depends on| n631
  n620 -->|Depends on| n327
  n621 -->|Serves| n475
  n621 -->|Implements| n619
  n621 -->|Depends on| n617
  n621 -->|Depends on| n184
  n621 -->|Depends on| n279
  n621 -->|Depends on| n286
  n621 -->|Depends on| n288
  n621 -->|Depends on| n278
  n621 -->|Depends on| n280
  n621 -->|Depends on| n284
  n621 -->|Depends on| n291
  n621 -->|Depends on| n281
  n621 -->|Depends on| n287
  n621 -->|Depends on| n289
  n621 -->|Depends on| n293
  n621 -->|Depends on| n292
  n621 -->|Depends on| n275
  n621 -->|Depends on| n283
  n621 -->|Depends on| n327
  n622 -->|Serves| n475
  n622 -->|Applied by| n618
  n622 -->|Applied by| n636
  n622 -->|Applied by| n628
  n622 -->|Applied by| n614
  n622 -->|Applied by| n44
  n623 -->|Serves| n475
  n623 -->|Implements| n617
  n623 -->|Depends on| n306
  n623 -->|Depends on| n181
  n623 -->|Depends on| n7
  n623 -->|Depends on| n290
  n623 -->|Depends on| n301
  n623 -->|Depends on| n309
  n623 -->|Depends on| n313
  n623 -->|Depends on| n308
  n623 -->|Depends on| n300
  n623 -->|Depends on| n311
  n623 -->|Depends on| n302
  n623 -->|Depends on| n304
  n623 -->|Depends on| n305
  n623 -->|Depends on| n310
  n623 -->|Depends on| n327
  n624 -->|Serves| n476
  n624 -->|Applied by| n618
  n624 -->|Applied by| n636
  n624 -->|Applied by| n628
  n624 -->|Applied by| n615
  n624 -->|Applied by| n616
  n624 -->|Applied by| n635
  n624 -->|Applied by| n634
  n624 -->|Applied by| n627
  n624 -->|Applied by| n626
  n626 -->|Chooses| n632
  n626 -->|In| n30
  n626 -->|In| n53
  n626 -->|Serves| n476
  n627 -->|Chooses| n620
  n627 -->|In| n30
  n627 -->|In| n53
  n627 -->|Serves| n476
  n628 -->|Serves| n475
  n628 -->|Depends on| n614
  n628 -->|Depends on| n629
  n628 -->|Depends on| n327
  n630 -->|Serves| n475
  n630 -->|Implements| n637
  n630 -->|Depends on| n633
  n630 -->|Depends on| n753
  n630 -->|Depends on| n751
  n630 -->|Depends on| n749
  n630 -->|Depends on| n747
  n630 -->|Depends on| n748
  n630 -->|Depends on| n746
  n630 -->|Depends on| n752
  n630 -->|Depends on| n327
  n632 -->|Serves| n475
  n632 -->|Implements| n625
  n632 -->|Depends on| n297
  n632 -->|Depends on| n299
  n632 -->|Depends on| n378
  n632 -->|Depends on| n1
  n632 -->|Depends on| n11
  n632 -->|Depends on| n2
  n632 -->|Depends on| n235
  n632 -->|Depends on| n246
  n632 -->|Depends on| n243
  n632 -->|Depends on| n227
  n632 -->|Depends on| n232
  n632 -->|Depends on| n614
  n632 -->|Depends on| n325
  n632 -->|Depends on| n327
  n634 -->|Chooses| n638
  n634 -->|In| n30
  n634 -->|In| n53
  n634 -->|Serves| n476
  n635 -->|Chooses| n630
  n635 -->|In| n30
  n635 -->|In| n53
  n635 -->|Serves| n476
  n636 -->|Serves| n475
  n636 -->|Depends on| n614
  n636 -->|Depends on| n637
  n636 -->|Depends on| n327
  n638 -->|Serves| n475
  n638 -->|Implements| n633
  n638 -->|Depends on| n614
  n638 -->|Depends on| n751
  n638 -->|Depends on| n749
  n638 -->|Depends on| n747
  n638 -->|Depends on| n754
  n638 -->|Depends on| n750
  n638 -->|Depends on| n327
  n639 -->|Verifies| n650
  n639 -->|Verifies| n657
  n639 -->|In| n53
  n639 -->|Depends on| n655
  n639 -->|Depends on| n649
  n639 -->|Depends on| n328
  n640 -->|Verifies| n188
  n640 -->|Verifies| n216
  n640 -->|Verifies| n186
  n640 -->|Verifies| n784
  n640 -->|In| n53
  n640 -->|Depends on| n188
  n640 -->|Depends on| n41
  n640 -->|Depends on| n186
  n640 -->|Depends on| n151
  n640 -->|Depends on| n641
  n640 -->|Depends on| n328
  n642 -->|Verifies| n120
  n642 -->|Verifies| n132
  n642 -->|Verifies| n187
  n642 -->|Verifies| n215
  n642 -->|Verifies| n618
  n642 -->|Verifies| n614
  n642 -->|Verifies| n621
  n642 -->|Verifies| n623
  n642 -->|Verifies| n204
  n642 -->|Verifies| n203
  n642 -->|Verifies| n397
  n642 -->|Verifies| n400
  n642 -->|Verifies| n426
  n642 -->|In| n53
  n642 -->|Depends on| n120
  n642 -->|Depends on| n648
  n642 -->|Depends on| n57
  n642 -->|Depends on| n52
  n642 -->|Depends on| n155
  n642 -->|Depends on| n21
  n642 -->|Depends on| n39
  n642 -->|Depends on| n41
  n642 -->|Depends on| n160
  n642 -->|Depends on| n315
  n642 -->|Depends on| n328
  n643 -->|Verifies| n188
  n643 -->|Verifies| n208
  n643 -->|Verifies| n212
  n643 -->|Verifies| n216
  n643 -->|Verifies| n198
  n643 -->|Verifies| n419
  n643 -->|Verifies| n432
  n643 -->|Verifies| n430
  n643 -->|Verifies| n397
  n643 -->|Verifies| n406
  n643 -->|Verifies| n388
  n643 -->|Verifies| n420
  n643 -->|In| n53
  n643 -->|Depends on| n188
  n643 -->|Depends on| n41
  n643 -->|Depends on| n17
  n643 -->|Depends on| n647
  n643 -->|Depends on| n328
  n644 -->|Verifies| n185
  n644 -->|Verifies| n347
  n644 -->|Verifies| n182
  n644 -->|In| n53
  n644 -->|Depends on| n185
  n644 -->|Depends on| n322
  n644 -->|Depends on| n347
  n644 -->|Depends on| n645
  n644 -->|Depends on| n328
  n646 -->|Verifies| n189
  n646 -->|Verifies| n197
  n646 -->|Verifies| n196
  n646 -->|Verifies| n210
  n646 -->|Verifies| n207
  n646 -->|In| n53
  n646 -->|Depends on| n189
  n646 -->|Depends on| n197
  n646 -->|Depends on| n196
  n646 -->|Depends on| n210
  n646 -->|Depends on| n207
  n646 -->|Depends on| n654
  n646 -->|Depends on| n328
  n650 -->|Implements| n655
  n650 -->|Depends on| n649
  n652 -->|Verifies| n199
  n652 -->|In| n53
  n652 -->|Depends on| n199
  n652 -->|Depends on| n651
  n652 -->|Depends on| n328
  n653 -->|Verifies| n201
  n653 -->|In| n53
  n653 -->|Depends on| n201
  n653 -->|Depends on| n188
  n653 -->|Depends on| n41
  n653 -->|Depends on| n17
  n653 -->|Depends on| n328
  n656 -->|Chooses| n657
  n656 -->|Chooses| n650
  n656 -->|In| n53
  n657 -->|Implements| n655
  n657 -->|Depends on| n649
  n658 -->|Serves| n475
  n658 -->|Part of| n715
  n658 -->|Depends on| n41
  n658 -->|Depends on| n155
  n658 -->|Depends on| n160
  n658 -->|Depends on| n681
  n658 -->|Depends on| n672
  n658 -->|Depends on| n781
  n658 -->|Depends on| n777
  n658 -->|Depends on| n710
  n659 -->|Verifies| n658
  n659 -->|In| n53
  n659 -->|Depends on| n658
  n659 -->|Depends on| n42
  n659 -->|Depends on| n160
  n659 -->|Depends on| n681
  n659 -->|Depends on| n660
  n659 -->|Depends on| n777
  n659 -->|Depends on| n328
  n661 -->|Serves| n475
  n661 -->|Part of| n715
  n661 -->|Depends on| n714
  n661 -->|Depends on| n685
  n661 -->|Depends on| n710
  n662 -->|Serves| n475
  n663 -->|Serves| n475
  n664 -->|In| n48
  n665 -->|In| n30
  n666 -->|Serves| n475
  n667 -->|Checks| n672
  n667 -->|Run by| n144
  n667 -->|Signed by| n686
  n668 -->|Checks| n672
  n668 -->|Run by| n124
  n668 -->|Signed by| n686
  n668 -->|Verifies| n381
  n668 -->|Verifies| n383
  n668 -->|Verifies| n382
  n668 -->|Verifies| n408
  n668 -->|Verifies| n409
  n668 -->|Verifies| n410
  n668 -->|Verifies| n427
  n668 -->|Verifies| n415
  n668 -->|Verifies| n414
  n668 -->|Verifies| n404
  n668 -->|Verifies| n425
  n669 -->|Chooses| n695
  n669 -->|Chooses| n694
  n669 -->|In| n30
  n669 -->|In| n48
  n669 -->|Serves| n475
  n670 -->|In| n30
  n670 -->|Serves| n475
  n671 -->|Serves| n475
  n672 -->|Produced by| n55
  n673 -->|Serves| n475
  n674 -->|Serves| n475
  n675 -->|Its obligations| n674
  n675 -->|Its obligations| n683
  n675 -->|Its obligations| n662
  n675 -->|Its obligations| n666
  n675 -->|Its obligations| n663
  n675 -->|Its obligations| n673
  n675 -->|Its obligations| n671
  n676 -->|Produced by| n128
  n676 -->|Carries| n36
  n678 -->|Checks| n676
  n678 -->|Run by| n690
  n678 -->|Signed by| n686
  n678 -->|Verifies| n64
  n678 -->|Verifies| n63
  n678 -->|Verifies| n62
  n678 -->|Verifies| n61
  n678 -->|Verifies| n60
  n678 -->|Verifies| n58
  n678 -->|Verifies| n59
  n680 -->|Serves| n475
  n680 -->|Depends on| n367
  n680 -->|Depends on| n297
  n680 -->|Depends on| n225
  n682 -->|Ships| n713
  n682 -->|Requires| n684
  n682 -->|Requires| n698
  n682 -->|Programs assembled for| n30
  n682 -->|Follows the policy| n687
  n683 -->|Serves| n475
  n684 -->|Signed by| n686
  n684 -->|Verifies| n693
  n687 -->|Its obligations| n674
  n687 -->|Its obligations| n663
  n688 -->|Ships| n672
  n688 -->|Ships| n697
  n688 -->|Ships| n676
  n688 -->|Deployed by| n114
  n688 -->|Programs assembled for| n30
  n688 -->|Follows the policy| n675
  n689 -->|Verifies| n690
  n689 -->|Verifies| n680
  n689 -->|In| n53
  n689 -->|Depends on| n690
  n689 -->|Depends on| n676
  n689 -->|Depends on| n680
  n689 -->|Depends on| n710
  n689 -->|Depends on| n679
  n689 -->|Depends on| n328
  n690 -->|Serves| n475
  n690 -->|Part of| n715
  n690 -->|Depends on| n676
  n690 -->|Depends on| n322
  n690 -->|Depends on| n680
  n690 -->|Depends on| n677
  n690 -->|Depends on| n710
  n691 -->|Verifies| n695
  n691 -->|Verifies| n694
  n691 -->|In| n53
  n691 -->|Depends on| n714
  n691 -->|Depends on| n685
  n691 -->|Depends on| n702
  n691 -->|Depends on| n155
  n691 -->|Depends on| n160
  n691 -->|Depends on| n428
  n691 -->|Depends on| n699
  n691 -->|Depends on| n328
  n693 -->|Depends on| n692
  n694 -->|Serves| n475
  n694 -->|Depends on| n155
  n694 -->|Depends on| n157
  n694 -->|Depends on| n781
  n694 -->|Depends on| n160
  n694 -->|Depends on| n161
  n694 -->|Depends on| n428
  n694 -->|Depends on| n702
  n695 -->|Serves| n475
  n695 -->|Depends on| n714
  n695 -->|Depends on| n685
  n695 -->|Depends on| n699
  n695 -->|Depends on| n155
  n695 -->|Depends on| n702
  n696 -->|Chooses| n695
  n696 -->|Chooses| n694
  n696 -->|In| n53
  n697 -->|Produced by| n36
  n697 -->|Assembled for| n15
  n698 -->|Signed by| n686
  n700 -->|Runs elsewhere| n682
  n700 -->|Its writer's settings| n699
  n701 -->|Serves| n475
  n701 -->|Part of| n715
  n701 -->|Depends on| n714
  n701 -->|Depends on| n685
  n701 -->|Depends on| n710
  n703 -->|Run by| n701
  n703 -->|Signed by| n686
  n705 -->|Requires| n703
  n705 -->|Deployed by| n661
  n705 -->|Programs assembled for| n30
  n705 -->|Follows the policy| n711
  n706 -->|In| n30
  n706 -->|In| n48
  n707 -->|Ships| n700
  n708 -->|In| n53
  n709 -->|In| n30
  n709 -->|In| n48
  n710 -->|Written in| n322
  n711 -->|Its obligations| n674
  n711 -->|Its obligations| n663
  n711 -->|Its obligations| n671
  n712 -->|Verifies| n701
  n712 -->|Verifies| n661
  n712 -->|In| n53
  n712 -->|Depends on| n701
  n712 -->|Depends on| n661
  n712 -->|Depends on| n714
  n712 -->|Depends on| n685
  n712 -->|Depends on| n704
  n712 -->|Depends on| n710
  n712 -->|Depends on| n328
  n715 -->|Deployed in| n30
  n716 -->|Chooses| n693
  n716 -->|In| n30
  n716 -->|In| n48
  n717 -->|Implements| n49
  n717 -->|Depends on| n25
  n719 -->|Serves| n475
  n719 -->|Depends on| n155
  n719 -->|Depends on| n724
  n719 -->|Depends on| n21
  n719 -->|Depends on| n39
  n719 -->|Depends on| n25
  n719 -->|Depends on| n152
  n719 -->|Depends on| n196
  n719 -->|Depends on| n49
  n720 -->|Chooses| n717
  n720 -->|In| n30
  n720 -->|In| n53
  n720 -->|Serves| n475
  n721 -->|Serves| n475
  n721 -->|Depends on| n160
  n721 -->|Depends on| n208
  n721 -->|Depends on| n155
  n721 -->|Depends on| n220
  n721 -->|Depends on| n21
  n721 -->|Depends on| n39
  n722 -->|Refines| n475
  n723 -->|Accepts| n722
  n727 -->|Serves| n475
  n727 -->|Depends on| n156
  n727 -->|Depends on| n319
  n731 -->|Written in| n322
  n732 -->|Serves| n475
  n732 -->|Applied by| n735
  n732 -->|Applied by| n50
  n733 -->|Serves| n475
  n733 -->|Applied by| n735
  n733 -->|Applied by| n727
  n733 -->|Applied by| n50
  n734 -->|In| n53
  n734 -->|Serves| n475
  n735 -->|Serves| n475
  n735 -->|Serves| n482
  n735 -->|Depends on| n50
  n735 -->|Depends on| n728
  n735 -->|Depends on| n731
  n735 -->|Depends on| n729
  n735 -->|Depends on| n730
  n735 -->|Depends on| n725
  n735 -->|Depends on| n21
  n735 -->|Depends on| n27
  n735 -->|Depends on| n46
  n735 -->|Depends on| n155
  n735 -->|Depends on| n39
  n735 -->|Depends on| n25
  n736 -->|Defined by| n739
  n736 -->|Read in| n742
  n736 -->|Depends on| n739
  n737 -->|Defined by| n739
  n737 -->|Read in| n742
  n737 -->|Depends on| n739
  n738 -->|Defined by| n739
  n738 -->|Read in| n742
  n738 -->|Depends on| n739
  n738 -->|Depends on| n742
  n740 -->|Defined by| n739
  n740 -->|Read in| n742
  n740 -->|Depends on| n739
  n740 -->|Depends on| n738
  n741 -->|Defined by| n739
  n741 -->|Read in| n742
  n741 -->|Depends on| n739
  n741 -->|Depends on| n743
  n741 -->|Depends on| n738
  n742 -->|Defined by| n739
  n742 -->|Read by| n735
  n742 -->|Uses| n336
  n744 -->|Serves| n475
  n744 -->|Depends on| n739
  n744 -->|Depends on| n743
  n744 -->|Depends on| n155
  n744 -->|Depends on| n737
  n744 -->|Depends on| n738
  n744 -->|Depends on| n740
  n744 -->|Depends on| n736
  n744 -->|Depends on| n741
  n744 -->|Depends on| n39
  n744 -->|Depends on| n40
  n744 -->|Depends on| n319
  n746 -->|Defined by| n753
  n746 -->|Depends on| n753
  n747 -->|Defined by| n753
  n747 -->|Depends on| n753
  n747 -->|Depends on| n749
  n747 -->|Depends on| n751
  n748 -->|Defined by| n753
  n748 -->|Depends on| n753
  n749 -->|Defined by| n753
  n749 -->|Depends on| n753
  n749 -->|Depends on| n751
  n750 -->|Defined by| n753
  n750 -->|Depends on| n753
  n750 -->|Depends on| n745
  n752 -->|Defined by| n753
  n752 -->|Depends on| n753
  n754 -->|Defined by| n753
  n754 -->|Depends on| n753
  n754 -->|Depends on| n745
  n755 -->|Defined by| n783
  n755 -->|Read in| n781
  n755 -->|Depends on| n783
  n756 -->|Defined by| n783
  n756 -->|Read in| n781
  n756 -->|Depends on| n783
  n757 -->|Defined by| n783
  n757 -->|Read in| n781
  n757 -->|Depends on| n783
  n758 -->|Defined by| n783
  n758 -->|Read in| n781
  n758 -->|Depends on| n783
  n759 -->|Defined by| n783
  n759 -->|Read in| n781
  n759 -->|Depends on| n783
  n760 -->|Defined by| n783
  n760 -->|Read in| n781
  n760 -->|Depends on| n783
  n761 -->|Defined by| n783
  n761 -->|Read in| n781
  n761 -->|Depends on| n783
  n762 -->|Defined by| n783
  n762 -->|Read in| n781
  n762 -->|Depends on| n783
  n762 -->|Depends on| n780
  n763 -->|Defined by| n783
  n763 -->|Read in| n781
  n763 -->|Depends on| n783
  n764 -->|Defined by| n783
  n764 -->|Read in| n781
  n764 -->|Depends on| n783
  n765 -->|Defined by| n783
  n765 -->|Read in| n781
  n765 -->|Depends on| n783
  n766 -->|Defined by| n783
  n766 -->|Read in| n781
  n766 -->|Depends on| n783
  n767 -->|Defined by| n783
  n767 -->|Read in| n781
  n767 -->|Depends on| n783
  n768 -->|Defined by| n783
  n768 -->|Read in| n781
  n768 -->|Depends on| n783
  n769 -->|Defined by| n783
  n769 -->|Read in| n781
  n769 -->|Depends on| n783
  n770 -->|Defined by| n783
  n770 -->|Read in| n781
  n770 -->|Depends on| n783
  n770 -->|Depends on| n780
  n771 -->|Defined by| n783
  n771 -->|Read in| n781
  n771 -->|Depends on| n783
  n772 -->|Defined by| n783
  n772 -->|Read in| n781
  n772 -->|Depends on| n783
  n773 -->|Defined by| n783
  n773 -->|Read in| n781
  n773 -->|Depends on| n783
  n774 -->|Defined by| n783
  n774 -->|Read in| n781
  n774 -->|Depends on| n783
  n775 -->|Defined by| n783
  n775 -->|Read in| n781
  n775 -->|Depends on| n783
  n776 -->|Defined by| n783
  n776 -->|Read in| n781
  n776 -->|Depends on| n783
  n778 -->|Defined by| n783
  n778 -->|Read in| n781
  n778 -->|Depends on| n783
  n778 -->|Depends on| n780
  n779 -->|Defined by| n783
  n779 -->|Read in| n781
  n779 -->|Depends on| n783
  n780 -->|Defined by| n783
  n780 -->|Read in| n781
  n780 -->|Depends on| n783
  n781 -->|Read by| n735
  n781 -->|Watches the globals| n786
  n781 -->|Uses| n345
  n782 -->|Serves| n475
  n784 -->|Serves| n475
  n784 -->|Depends on| n781
  n784 -->|Depends on| n783
  n784 -->|Depends on| n151
  n784 -->|Depends on| n777
  n784 -->|Depends on| n159
  n784 -->|Depends on| n158
  n784 -->|Depends on| n767
  n784 -->|Depends on| n780
  n784 -->|Depends on| n768
  n784 -->|Depends on| n774
  n784 -->|Depends on| n760
  n784 -->|Depends on| n759
  n784 -->|Depends on| n776
  n784 -->|Depends on| n778
  n784 -->|Depends on| n772
  n784 -->|Depends on| n755
  n784 -->|Depends on| n761
  n784 -->|Depends on| n770
  n784 -->|Depends on| n762
  n784 -->|Depends on| n756
  n784 -->|Depends on| n775
  n784 -->|Depends on| n773
  n784 -->|Depends on| n785
  n784 -->|Depends on| n765
  n784 -->|Depends on| n779
  n784 -->|Depends on| n757
  n784 -->|Depends on| n766
  n784 -->|Depends on| n758
  n784 -->|Depends on| n161
  n784 -->|Depends on| n39
  n784 -->|Depends on| n40
  n784 -->|Depends on| n319
  n785 -->|Defined by| n783
  n785 -->|Read in| n781
  n785 -->|Depends on| n783
  n44 -.->|Depends on| n40
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
