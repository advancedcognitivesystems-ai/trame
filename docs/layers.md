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
    n7["Radii<br/><small>Decision</small>"]:::neutral
    n8["Spacing<br/><small>Decision</small>"]:::neutral
    n9["Strokes<br/><small>Decision</small>"]:::neutral
    n10["Drawing of a timeline<br/><small>Decision</small>"]:::neutral
    n11["Type scale<br/><small>Decision</small>"]:::neutral
    n12["Typography<br/><small>Decision</small>"]:::neutral
  end
  subgraph architecture["Trame · Architecture"]
    n13["Where an amendment goes<br/><small>Port</small>"]:::neutral
    n14["Browser<br/><small>Environment</small>"]:::neutral
    n15["Bundler<br/><small>Port</small>"]:::neutral
    n16["Clock<br/><small>Port</small>"]:::neutral
    n17["Command line<br/><small>Port</small>"]:::neutral
    n18["Compression<br/><small>Port</small>"]:::neutral
    n19["Decompression<br/><small>Port</small>"]:::neutral
    n20["File reading<br/><small>Port</small>"]:::neutral
    n21["File trees<br/><small>Port</small>"]:::neutral
    n22["File writing<br/><small>Port</small>"]:::neutral
    n23["Feed of the graph<br/><small>Port</small>"]:::neutral
    n24["Hashing<br/><small>Port</small>"]:::neutral
    n25["HTTP server<br/><small>Port</small>"]:::neutral
    n26["Results kept<br/><small>Port</small>"]:::neutral
    n27["Runs kept<br/><small>Port</small>"]:::neutral
    n28["Effects come from the vocabulary<br/><small>Architecture rule</small>"]:::held
    n29["Local<br/><small>Environment</small>"]:::neutral
    n30["Module loader<br/><small>Port</small>"]:::neutral
    n31["Only commands write<br/><small>Architecture rule</small>"]:::held
    n32["Packages installed<br/><small>Port</small>"]:::neutral
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
    n47["A session of Claude Code<br/><small>Environment</small>"]:::neutral
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
    n80["The engine's API<br/><small>Scenario</small>"]:::held
    n81["Evidence given for someone<br/><small>Scenario</small>"]:::held
    n82["An example's output written again<br/><small>Scenario</small>"]:::held
    n83["The examples of a project, met<br/><small>Scenario</small>"]:::held
    n84["A library carries kinds<br/><small>Scenario</small>"]:::held
    n85["The laws, tested by their command<br/><small>Scenario</small>"]:::held
    n86["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
    n87["A library released<br/><small>Scenario</small>"]:::held
    n88["The manifest written<br/><small>Scenario</small>"]:::held
    n89["The packages audited<br/><small>Scenario</small>"]:::held
    n90["The packages upgraded<br/><small>Scenario</small>"]:::held
    n91["The page delivered<br/><small>Scenario</small>"]:::held
    n92["The page exported<br/><small>Scenario</small>"]:::held
    n93["The page of the graph<br/><small>Scenario</small>"]:::held
    n94["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
    n95["What a plan is checked with<br/><small>Decision</small>"]:::neutral
    n96["A command of the project<br/><small>Scenario</small>"]:::held
    n97["A project repaired<br/><small>Scenario</small>"]:::held
    n98["What the scenarios ask of those projects<br/><small>Decision</small>"]:::neutral
    n99["A project started<br/><small>Scenario</small>"]:::held
    n100["A published value changed<br/><small>Scenario</small>"]:::held
    n101["The registry filled<br/><small>Scenario</small>"]:::held
    n102["Declarations rewritten<br/><small>Decision</small>"]:::neutral
    n103["What a program run in a scenario answers<br/><small>Decision</small>"]:::neutral
    n104["The projects of the repository the scenarios enter<br/><small>Decision</small>"]:::neutral
    n105["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
    n106["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
    n107["Stages shipped in order<br/><small>Scenario</small>"]:::held
    n108["What an SVG figure opens with<br/><small>Decision</small>"]:::neutral
    n109["A value amended<br/><small>Scenario</small>"]:::held
    n110["Views asked of the example<br/><small>Decision</small>"]:::neutral
    n111["A view in the terminal<br/><small>Scenario</small>"]:::held
  end
  subgraph commands["Trame · Commands"]
    n112["The add-ons of a command the engine keeps<br/><small>Function</small>"]:::held
    n113["Advance<br/><small>Entry point</small>"]:::held
    n114["Amend<br/><small>Entry point</small>"]:::held
    n115["An amendment prepared<br/><small>Function</small>"]:::held
    n116["Assemble a component<br/><small>Entry point</small>"]:::held
    n117["Assembler<br/><small>Function</small>"]:::held
    n118["Audit the packages<br/><small>Entry point</small>"]:::held
    n119["Build<br/><small>Entry point</small>"]:::held
    n120["A command of the project, or a view<br/><small>Entry point</small>"]:::held
    n121["Deliver<br/><small>Entry point</small>"]:::held
    n122["Start trame dev<br/><small>Entry point</small>"]:::held
    n123["Ask the machine<br/><small>Entry point</small>"]:::held
    n124["Payload<br/><small>Entry point</small>"]:::held
    n125["Rewriting an example<br/><small>Function</small>"]:::held
    n126["Examples<br/><small>Entry point</small>"]:::held
    n127["Export the page<br/><small>Entry point</small>"]:::held
    n128["Help<br/><small>Entry point</small>"]:::held
    n129["Start a project<br/><small>Entry point</small>"]:::held
    n130["Plan a build<br/><small>Entry point</small>"]:::held
    n131["Preparation<br/><small>Function</small>"]:::held
    n132["The project's commands<br/><small>Function</small>"]:::held
    n133["Publish<br/><small>Entry point</small>"]:::held
    n134["Record evidence<br/><small>Entry point</small>"]:::held
    n135["A module of references<br/><small>Function</small>"]:::held
    n136["Fill the registry<br/><small>Entry point</small>"]:::held
    n137["Release a version<br/><small>Entry point</small>"]:::held
    n138["Render a view<br/><small>Function</small>"]:::held
    n139["Run a component<br/><small>Entry point</small>"]:::held
    n140["Ship<br/><small>Entry point</small>"]:::held
    n141["Show a view<br/><small>Entry point</small>"]:::held
    n142["Take the snapshot<br/><small>Entry point</small>"]:::held
    n143["Test the laws<br/><small>Entry point</small>"]:::held
    n144["Upgrade<br/><small>Entry point</small>"]:::held
    n145["Write the manifest<br/><small>Entry point</small>"]:::held
  end
  subgraph conventions["Trame · Conventions"]
    n146["How an amendment is named<br/><small>Decision</small>"]:::neutral
    n147["Default rank<br/><small>Decision</small>"]:::neutral
    n148["Documentation comment<br/><small>Decision</small>"]:::neutral
    n149["Names of the documents<br/><small>Standard</small>"]:::neutral
    n150["The frozen API<br/><small>Standard</small>"]:::neutral
    n151["The commands the engine keeps<br/><small>Decision</small>"]:::neutral
    n152["The language's names<br/><small>Decision</small>"]:::neutral
    n153["Project layout<br/><small>Decision</small>"]:::neutral
    n154["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n155["How a project starts<br/><small>Decision</small>"]:::neutral
    n156["Names of steps<br/><small>Decision</small>"]:::neutral
    n157["Trame's commands<br/><small>Standard</small>"]:::neutral
    n158["Trame's environment<br/><small>Standard</small>"]:::neutral
    n159["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n160["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n161["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n162["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph doctor["Trame · Doctor"]
    n163["Asking<br/><small>Function</small>"]:::held
    n164["The clock gives the day<br/><small>Implementation</small>"]:::held
    n165["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n166["What the engine needs of the machine<br/><small>Port</small>"]:::neutral
    n167["What the engine asks the machine<br/><small>Technical choice</small>"]:::held
    n168["A file written is read back<br/><small>Implementation</small>"]:::held
    n169["The installer installs what a manifest names and writes its lockfile<br/><small>Implementation</small>"]:::held
    n170["A program runs with the engine's loader, and prints what it says<br/><small>Implementation</small>"]:::held
    n171["The registry answers about the packages<br/><small>Implementation</small>"]:::held
    n172["A run is kept, and given back until a file it read changes<br/><small>Implementation</small>"]:::held
    n173["A server listens on a port the system gives<br/><small>Implementation</small>"]:::held
    n174["The time passes<br/><small>Implementation</small>"]:::held
    n175["A directory copied is the same as the original<br/><small>Implementation</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n176["Documents written in Trame's language<br/><small>Technical choice</small>"]:::held
    n177["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n178["The documents in Trame's language<br/><small>Function</small>"]:::held
    n179["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n180["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n181["Assembly<br/><small>Function</small>"]:::held
    n182["Compilation API<br/><small>Function</small>"]:::held
    n183["Compiler<br/><small>Function</small>"]:::held
    n184["Cycles<br/><small>Function</small>"]:::held
    n185["Date bundle<br/><small>Function</small>"]:::held
    n186["trame dev server<br/><small>Function</small>"]:::held
    n187["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n188["Differences<br/><small>Function</small>"]:::held
    n189["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n190["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n191["Fingerprints<br/><small>Function</small>"]:::held
    n192["Pseudo-random generator<br/><small>Function</small>"]:::held
    n193["Graph<br/><small>Function</small>"]:::held
    n194["Judged harder<br/><small>Function</small>"]:::held
    n195["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n196["Laws<br/><small>Function</small>"]:::held
    n197["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n198["Lock<br/><small>Function</small>"]:::held
    n199["Machine outputs<br/><small>Function</small>"]:::held
    n200["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n201["Payload<br/><small>Function</small>"]:::held
    n202["Positions<br/><small>Function</small>"]:::held
    n203["Project<br/><small>Function</small>"]:::held
    n204["The runs of a project<br/><small>Function</small>"]:::held
    n205["References<br/><small>Function</small>"]:::held
    n206["A shipment's pipeline<br/><small>Function</small>"]:::held
    n207["Static reading<br/><small>Function</small>"]:::held
    n208["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n209["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n210["Views<br/><small>Function</small>"]:::held
    n211["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n212["Accept a candidate<br/><small>Requirement</small>"]:::held
    n213["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n214["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n215["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n216["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n217["Records of the releases<br/><small>Function</small>"]:::held
    n218["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS of the page"]
    n219["Attribute presence<br/><small>Syntax element</small>"]:::held
    n220["Attribute selector<br/><small>Syntax element</small>"]:::held
    n221["Class selector<br/><small>Syntax element</small>"]:::held
    n222["Declaration<br/><small>Syntax element</small>"]:::held
    n223["Rule<br/><small>Syntax element</small>"]:::held
    n224["Variable<br/><small>Syntax element</small>"]:::held
    n225["Custom property<br/><small>Syntax element</small>"]:::held
    n226["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n227["Element over several lines<br/><small>Syntax element</small>"]:::held
    n228["JSON in a script<br/><small>Syntax element</small>"]:::held
    n229["Media feature<br/><small>Syntax element</small>"]:::held
    n230["Media rule<br/><small>Syntax element</small>"]:::held
    n231["Negation<br/><small>Syntax element</small>"]:::held
    n232["Path data<br/><small>Syntax element</small>"]:::held
    n233["Script<br/><small>Syntax element</small>"]:::held
    n234["Selector list<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n235["Drivers<br/><small>Function</small>"]:::held
    n236["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n237["Answers without crashing<br/><small>Requirement</small>"]:::held
    n238["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n239["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n240["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n241["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n242["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n243["Complete declaration<br/><small>Requirement</small>"]:::held
    n244["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n245["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n246["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n247["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n248["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n249["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n250["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n251["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n252["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n253["Same input, same answer<br/><small>Requirement</small>"]:::held
    n254["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n255["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n256["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n257["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n258["What belongs to a library<br/><small>Requirement</small>"]:::held
    n259["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n260["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n261["A release is settled<br/><small>Requirement</small>"]:::held
    n262["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n263["Around the documents<br/><small>Decision</small>"]:::neutral
    n264["Documents in the page<br/><small>Decision</small>"]:::neutral
    n265["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n266["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Trame · Messages"]
    n267["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n268["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n269["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n270["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n271["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n272["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n273["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n274["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n275["Language<br/><small>Decision</small>"]:::neutral
    n276["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n277["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n278["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n279["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n280["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n281["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n282["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n283["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n284["Grammar of CSS<br/><small>Package</small>"]:::held
    n285["The renderers of documents<br/><small>Package</small>"]:::neutral
    n286["esbuild<br/><small>Package</small>"]:::held
    n287["The commands every project runs<br/><small>Package</small>"]:::neutral
    n288["Grammar of HCL<br/><small>Package</small>"]:::held
    n289["Grammar of HTML<br/><small>Package</small>"]:::held
    n290["The questions of the machine<br/><small>Package</small>"]:::neutral
    n291["Types of Node.js<br/><small>Package</small>"]:::held
    n292["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n293["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n294["The people of the repository<br/><small>Package</small>"]:::neutral
    n295["The standard library<br/><small>Package</small>"]:::neutral
    n296["tsx<br/><small>Package</small>"]:::held
    n297["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n298["TypeScript<br/><small>Package</small>"]:::held
    n299["Order of versions<br/><small>Function</small>"]:::held
    n300["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n301["Banner<br/><small>Syntax element</small>"]:::held
    n302["Brand<br/><small>Syntax element</small>"]:::held
    n303["State of the compilation<br/><small>Syntax element</small>"]:::held
    n304["Dates<br/><small>Syntax element</small>"]:::held
    n305["Head of the document<br/><small>Syntax element</small>"]:::held
    n306["Document picker<br/><small>Syntax element</small>"]:::held
    n307["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n308["Fonts<br/><small>Syntax element</small>"]:::held
    n309["Logo<br/><small>Syntax element</small>"]:::held
    n310["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n311["Main area<br/><small>Syntax element</small>"]:::held
    n312["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n313["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n314["Navigation<br/><small>Syntax element</small>"]:::held
    n315["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n316["Page<br/><small>Function</small>"]:::held
    n317["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n318["Document of the page<br/><small>Syntax element</small>"]:::held
    n319["Regions of the page<br/><small>Decision</small>"]:::neutral
    n320["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n321["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n322["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n323["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n324["Shell<br/><small>Syntax element</small>"]:::held
    n325["Side bar<br/><small>Syntax element</small>"]:::held
    n326["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n327["Colours of a status<br/><small>Syntax element</small>"]:::held
    n328["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n329["Theme<br/><small>Syntax element</small>"]:::held
    n330["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n331["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n332["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n333["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n334["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n335["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n336["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n337["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n338["esbuild<br/><small>Implementation</small>"]:::held
    n339["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n340["Example process<br/><small>Function</small>"]:::held
    n341["Example project<br/><small>Decision</small>"]:::neutral
    n342["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n343["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n344["Amendments in place<br/><small>Implementation</small>"]:::held
    n345["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n346["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n347["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n348["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n349["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n350["A server in memory<br/><small>Function</small>"]:::held
    n351["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n352["Terminal in memory<br/><small>Function</small>"]:::held
    n353["Command line<br/><small>Implementation</small>"]:::held
    n354["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n355["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n356["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n357["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n358["Node paths<br/><small>Implementation</small>"]:::held
    n359["NodePlatform<br/><small>Technical choice</small>"]:::held
    n360["Node process<br/><small>Implementation</small>"]:::unknown
    n361["Node programs<br/><small>Implementation</small>"]:::unknown
    n362["Node terminal<br/><small>Implementation</small>"]:::unknown
    n363["Node timer<br/><small>Implementation</small>"]:::held
    n364["No installer in test<br/><small>Implementation</small>"]:::held
    n365["No registry in test<br/><small>Function</small>"]:::held
    n366["npm installs<br/><small>Implementation</small>"]:::unknown
    n367["npm's reports<br/><small>Implementation</small>"]:::unknown
    n368["Packages by their origin<br/><small>Implementation</small>"]:::held
    n369["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n370["Page resources<br/><small>Implementation</small>"]:::held
    n371["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n372["Results kept in the process<br/><small>Implementation</small>"]:::held
    n373["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n374["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n375["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n376["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n377["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n378["Stopped clock<br/><small>Function</small>"]:::held
    n379["System clock<br/><small>Implementation</small>"]:::unknown
    n380["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n381["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n382["Trame's prelude<br/><small>Implementation</small>"]:::held
    n383["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n384["tsx loader<br/><small>Implementation</small>"]:::held
    n385["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n386["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n387["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n388["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n389["An amendment sits beside the value it changes<br/><small>Architecture decision</small>"]:::held
    n390["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n391["Trame runs the commands libraries offer<br/><small>Architecture decision</small>"]:::unknown
    n392["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n393["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n394["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n395["The engine is a provider, for Trame too<br/><small>Architecture decision</small>"]:::unknown
    n396["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n397["Evidence is sealed<br/><small>Architecture decision</small>"]:::held
    n398["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n399["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n400["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n401["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n402["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n403["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n404["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n405["Every question of the machine is an add-on<br/><small>Architecture decision</small>"]:::unknown
    n406["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n407["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n408["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n409["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n410["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n411["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n412["What a command does is played in memory first<br/><small>Architecture decision</small>"]:::held
    n413["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n414["A run is kept while what it reads is as it was<br/><small>Architecture decision</small>"]:::unknown
    n415["Trame's SDLC runs with std's tooling<br/><small>Architecture decision</small>"]:::unknown
    n416["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n417["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n418["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n419["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n420["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n421["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n422["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n423["Candidate dates<br/><small>Decision</small>"]:::neutral
    n424["Claim sets<br/><small>Decision</small>"]:::neutral
    n425["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n426["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n427["A specification that runs<br/><small>Goal</small>"]:::neutral
    n428["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n429["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n430["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n431["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n432["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n433["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n434["A single source of truth<br/><small>Goal</small>"]:::neutral
    n435["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n436["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n437["Generation 1<br/><small>Release</small>"]:::neutral
    n438["Generation 10<br/><small>Release</small>"]:::neutral
    n439["Generation 100<br/><small>Release</small>"]:::neutral
    n440["Generation 101<br/><small>Release</small>"]:::neutral
    n441["Generation 102<br/><small>Release</small>"]:::neutral
    n442["Generation 103<br/><small>Release</small>"]:::neutral
    n443["Generation 104<br/><small>Release</small>"]:::neutral
    n444["Generation 105<br/><small>Release</small>"]:::neutral
    n445["Generation 106<br/><small>Release</small>"]:::neutral
    n446["Generation 107<br/><small>Release</small>"]:::neutral
    n447["Generation 108<br/><small>Release</small>"]:::neutral
    n448["Generation 109<br/><small>Release</small>"]:::neutral
    n449["Generation 11<br/><small>Release</small>"]:::neutral
    n450["Generation 110<br/><small>Release</small>"]:::neutral
    n451["Generation 111<br/><small>Release</small>"]:::neutral
    n452["Generation 112<br/><small>Release</small>"]:::neutral
    n453["Generation 113<br/><small>Release</small>"]:::neutral
    n454["Generation 114<br/><small>Release</small>"]:::neutral
    n455["Generation 115<br/><small>Release</small>"]:::neutral
    n456["Generation 116<br/><small>Release</small>"]:::neutral
    n457["Generation 117<br/><small>Release</small>"]:::neutral
    n458["Generation 118<br/><small>Release</small>"]:::neutral
    n459["Generation 119<br/><small>Release</small>"]:::neutral
    n460["Generation 12<br/><small>Release</small>"]:::neutral
    n461["Generation 120<br/><small>Release</small>"]:::neutral
    n462["Generation 121<br/><small>Release</small>"]:::neutral
    n463["Generation 122<br/><small>Release</small>"]:::neutral
    n464["Generation 123<br/><small>Release</small>"]:::neutral
    n465["Generation 124<br/><small>Release</small>"]:::neutral
    n466["Generation 125<br/><small>Release</small>"]:::neutral
    n467["Generation 126<br/><small>Release</small>"]:::neutral
    n468["Generation 127<br/><small>Release</small>"]:::neutral
    n469["Generation 128<br/><small>Release</small>"]:::neutral
    n470["Generation 129<br/><small>Release</small>"]:::neutral
    n471["Generation 13<br/><small>Release</small>"]:::neutral
    n472["Generation 130<br/><small>Release</small>"]:::neutral
    n473["Generation 131<br/><small>Release</small>"]:::neutral
    n474["Generation 132<br/><small>Release</small>"]:::neutral
    n475["Generation 133<br/><small>Release</small>"]:::neutral
    n476["Generation 134<br/><small>Release</small>"]:::neutral
    n477["Generation 14<br/><small>Release</small>"]:::neutral
    n478["Generation 15<br/><small>Release</small>"]:::neutral
    n479["Generation 16<br/><small>Release</small>"]:::neutral
    n480["Generation 17<br/><small>Release</small>"]:::neutral
    n481["Generation 18<br/><small>Release</small>"]:::neutral
    n482["Generation 19<br/><small>Release</small>"]:::neutral
    n483["Generation 2<br/><small>Release</small>"]:::neutral
    n484["Generation 20<br/><small>Release</small>"]:::neutral
    n485["Generation 21<br/><small>Release</small>"]:::neutral
    n486["Generation 22<br/><small>Release</small>"]:::neutral
    n487["Generation 23<br/><small>Release</small>"]:::neutral
    n488["Generation 24<br/><small>Release</small>"]:::neutral
    n489["Generation 25<br/><small>Release</small>"]:::neutral
    n490["Generation 26<br/><small>Release</small>"]:::neutral
    n491["Generation 27<br/><small>Release</small>"]:::neutral
    n492["Generation 28<br/><small>Release</small>"]:::neutral
    n493["Generation 29<br/><small>Release</small>"]:::neutral
    n494["Generation 3<br/><small>Release</small>"]:::neutral
    n495["Generation 30<br/><small>Release</small>"]:::neutral
    n496["Generation 31<br/><small>Release</small>"]:::neutral
    n497["Generation 32<br/><small>Release</small>"]:::neutral
    n498["Generation 33<br/><small>Release</small>"]:::neutral
    n499["Generation 34<br/><small>Release</small>"]:::neutral
    n500["Generation 35<br/><small>Release</small>"]:::neutral
    n501["Generation 36<br/><small>Release</small>"]:::neutral
    n502["Generation 37<br/><small>Release</small>"]:::neutral
    n503["Generation 38<br/><small>Release</small>"]:::neutral
    n504["Generation 39<br/><small>Release</small>"]:::neutral
    n505["Generation 4<br/><small>Release</small>"]:::neutral
    n506["Generation 40<br/><small>Release</small>"]:::neutral
    n507["Generation 41<br/><small>Release</small>"]:::neutral
    n508["Generation 42<br/><small>Release</small>"]:::neutral
    n509["Generation 43<br/><small>Release</small>"]:::neutral
    n510["Generation 44<br/><small>Release</small>"]:::neutral
    n511["Generation 45<br/><small>Release</small>"]:::neutral
    n512["Generation 46<br/><small>Release</small>"]:::neutral
    n513["Generation 47<br/><small>Release</small>"]:::neutral
    n514["Generation 48<br/><small>Release</small>"]:::neutral
    n515["Generation 49<br/><small>Release</small>"]:::neutral
    n516["Generation 5<br/><small>Release</small>"]:::neutral
    n517["Generation 50<br/><small>Release</small>"]:::neutral
    n518["Generation 51<br/><small>Release</small>"]:::neutral
    n519["Generation 52<br/><small>Release</small>"]:::neutral
    n520["Generation 53<br/><small>Release</small>"]:::neutral
    n521["Generation 54<br/><small>Release</small>"]:::neutral
    n522["Generation 55<br/><small>Release</small>"]:::neutral
    n523["Generation 56<br/><small>Release</small>"]:::neutral
    n524["Generation 57<br/><small>Release</small>"]:::neutral
    n525["Generation 58<br/><small>Release</small>"]:::neutral
    n526["Generation 59<br/><small>Release</small>"]:::neutral
    n527["Generation 6<br/><small>Release</small>"]:::neutral
    n528["Generation 60<br/><small>Release</small>"]:::neutral
    n529["Generation 61<br/><small>Release</small>"]:::neutral
    n530["Generation 62<br/><small>Release</small>"]:::neutral
    n531["Generation 63<br/><small>Release</small>"]:::neutral
    n532["Generation 64<br/><small>Release</small>"]:::neutral
    n533["Generation 65<br/><small>Release</small>"]:::neutral
    n534["Generation 66<br/><small>Release</small>"]:::neutral
    n535["Generation 67<br/><small>Release</small>"]:::neutral
    n536["Generation 68<br/><small>Release</small>"]:::neutral
    n537["Generation 69<br/><small>Release</small>"]:::neutral
    n538["Generation 7<br/><small>Release</small>"]:::neutral
    n539["Generation 70<br/><small>Release</small>"]:::neutral
    n540["Generation 71<br/><small>Release</small>"]:::neutral
    n541["Generation 72<br/><small>Release</small>"]:::neutral
    n542["Generation 73<br/><small>Release</small>"]:::neutral
    n543["Generation 74<br/><small>Release</small>"]:::neutral
    n544["Generation 75<br/><small>Release</small>"]:::neutral
    n545["Generation 76<br/><small>Release</small>"]:::neutral
    n546["Generation 77<br/><small>Release</small>"]:::neutral
    n547["Generation 78<br/><small>Release</small>"]:::neutral
    n548["Generation 79<br/><small>Release</small>"]:::neutral
    n549["Generation 8<br/><small>Release</small>"]:::neutral
    n550["Generation 80<br/><small>Release</small>"]:::neutral
    n551["Generation 81<br/><small>Release</small>"]:::neutral
    n552["Generation 82<br/><small>Release</small>"]:::neutral
    n553["Generation 83<br/><small>Release</small>"]:::neutral
    n554["Generation 84<br/><small>Release</small>"]:::neutral
    n555["Generation 85<br/><small>Release</small>"]:::neutral
    n556["Generation 86<br/><small>Release</small>"]:::neutral
    n557["Generation 87<br/><small>Release</small>"]:::neutral
    n558["Generation 88<br/><small>Release</small>"]:::neutral
    n559["Generation 89<br/><small>Release</small>"]:::neutral
    n560["Generation 9<br/><small>Release</small>"]:::neutral
    n561["Generation 90<br/><small>Release</small>"]:::neutral
    n562["Generation 91<br/><small>Release</small>"]:::neutral
    n563["Generation 92<br/><small>Release</small>"]:::neutral
    n564["Generation 93<br/><small>Release</small>"]:::neutral
    n565["Generation 94<br/><small>Release</small>"]:::neutral
    n566["Generation 95<br/><small>Release</small>"]:::neutral
    n567["Generation 96<br/><small>Release</small>"]:::neutral
    n568["Generation 97<br/><small>Release</small>"]:::neutral
    n569["Generation 98<br/><small>Release</small>"]:::neutral
    n570["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n571["The formats of a command's documents<br/><small>Technical choice</small>"]:::held
    n572["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n573["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n574["HTML writer<br/><small>Function</small>"]:::held
    n575["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n576["Figures of the page<br/><small>Port</small>"]:::neutral
    n577["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n578["The page in HTML<br/><small>Technical choice</small>"]:::held
    n579["Rendering in the page<br/><small>Function</small>"]:::held
    n580["Syntax of the page<br/><small>Port</small>"]:::neutral
    n581["Trame's documents, rendered by the library of documents<br/><small>Architecture decision</small>"]:::held
    n582["Figures in SVG<br/><small>Function</small>"]:::held
    n583["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n584["The terminal in plain text<br/><small>Technical choice</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n585["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
    n586["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n587["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n588["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n589["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n590["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n591["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n592["EngineReckons<br/><small>Scenario</small>"]:::held
    n593["Shape of the example<br/><small>Decision</small>"]:::neutral
    n594["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n595["The names the sample add-ons give, and the order a choice gives them in: the second first.<br/><small>Decision</small>"]:::neutral
    n596["The first sample add-on<br/><small>Function</small>"]:::held
    n597["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n598["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n599["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n600["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
    n601["A sample extension point<br/><small>Port</small>"]:::neutral
    n602["The sample add-ons, second first<br/><small>Technical choice</small>"]:::held
    n603["The second sample add-on<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Trame · SDLC"]
    n604["Advance<br/><small>Entry point</small>"]:::held
    n605["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n606["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n607["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n608["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n609["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n610["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n611["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n612["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n613["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n614["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n615["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n616["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n617["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n618["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n619["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n620["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n621["How a generation is made<br/><small>Policy</small>"]:::neutral
    n622["The graph page<br/><small>Artefact</small>"]:::unknown
    n623["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n624["The graph page opens<br/><small>Check</small>"]:::unknown
    n625["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n626["What the graph page is asked<br/><small>Function</small>"]:::held
    n627["How a generation advances<br/><small>Decision</small>"]:::neutral
    n628["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n629["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n630["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n631["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n632["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n633["How a change merges<br/><small>Policy</small>"]:::neutral
    n634["The next generation<br/><small>Shipment</small>"]:::unknown
    n635["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n636["Open the graph page<br/><small>Entry point</small>"]:::held
    n637["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n638["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n639["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n640["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n641["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n642["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n643["The page's program<br/><small>Artefact</small>"]:::unknown
    n644["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
    n645["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n646["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n647["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n648["The repository's projects<br/><small>Decision</small>"]:::neutral
    n649["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n650["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n651["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n652["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n653["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n654["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n655["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n656["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n657["How the repository is set<br/><small>Policy</small>"]:::neutral
    n658["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n659["The engine<br/><small>Artefact</small>"]:::unknown
    n660["Trame's repository<br/><small>Decision</small>"]:::neutral
    n661["Trame's SDLC<br/><small>Component</small>"]:::neutral
    n662["What the machine must also have<br/><small>Technical choice</small>"]:::unknown
  end
  subgraph shipping["Trame · Shipping"]
    n663["Attribution<br/><small>Function</small>"]:::held
    n664["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n665["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n666["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n667["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n668["Ship only what holds<br/><small>Requirement</small>"]:::held
    n669["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n670["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n671["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n672["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n673["Checks of a body<br/><small>Function</small>"]:::held
    n674["Captures<br/><small>Standard</small>"]:::neutral
    n675["Categories of literals<br/><small>Decision</small>"]:::neutral
    n676["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n677["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n678["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n679["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n680["std's languages, read by the engine<br/><small>Technical choice</small>"]:::held
    n681["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n682["Attribute<br/><small>Syntax element</small>"]:::held
    n683["Comment<br/><small>Syntax element</small>"]:::held
    n684["Text<br/><small>Syntax element</small>"]:::held
    n685["HCL<br/><small>Standard</small>"]:::neutral
    n686["Value<br/><small>Syntax element</small>"]:::held
    n687["Module call<br/><small>Syntax element</small>"]:::held
    n688["Terraform<br/><small>Language</small>"]:::held
    n689["Terraform modules<br/><small>Standard</small>"]:::neutral
    n690["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n691["List on several lines<br/><small>Syntax element</small>"]:::held
    n692["Type assertion<br/><small>Syntax element</small>"]:::held
    n693["Assignment<br/><small>Syntax element</small>"]:::held
    n694["Async function of a block<br/><small>Syntax element</small>"]:::held
    n695["Waiting<br/><small>Syntax element</small>"]:::held
    n696["Call<br/><small>Syntax element</small>"]:::held
    n697["Constant<br/><small>Syntax element</small>"]:::held
    n698["Default import<br/><small>Syntax element</small>"]:::held
    n699["Documentation comment<br/><small>Syntax element</small>"]:::held
    n700["Export<br/><small>Syntax element</small>"]:::held
    n701["Condition<br/><small>Syntax element</small>"]:::held
    n702["List on one line<br/><small>Syntax element</small>"]:::held
    n703["Comment<br/><small>Syntax element</small>"]:::held
    n704["Property access<br/><small>Syntax element</small>"]:::held
    n705["Title of a module<br/><small>Syntax element</small>"]:::held
    n706["Import of names<br/><small>Syntax element</small>"]:::held
    n707["Object on several lines<br/><small>Syntax element</small>"]:::held
    n708["Object<br/><small>Syntax element</small>"]:::held
    n709["Object type<br/><small>Syntax element</small>"]:::held
    n710["Optional property access<br/><small>Syntax element</small>"]:::held
    n711["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n712["Group<br/><small>Syntax element</small>"]:::held
    n713["Names of a program<br/><small>Decision</small>"]:::neutral
    n714["Property<br/><small>Syntax element</small>"]:::held
    n715["Strict inequality<br/><small>Syntax element</small>"]:::held
    n716["Text<br/><small>Syntax element</small>"]:::held
    n717["TypeScript<br/><small>Language</small>"]:::held
    n718["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n719["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n720["TypeScript writer<br/><small>Function</small>"]:::held
    n721["Union type<br/><small>Syntax element</small>"]:::held
    n722["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n35 -->|Deployed in| n14
  n54 -->|Deployed in| n29
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n17
  n57 -->|Implements| n34
  n57 -->|Depends on| n330
  n57 -->|Depends on| n187
  n58 -->|Implements| n19
  n58 -->|Depends on| n315
  n59 -->|Implements| n23
  n59 -->|Depends on| n330
  n59 -->|Depends on| n187
  n60 -->|Implements| n36
  n60 -->|Depends on| n330
  n61 -->|Implements| n37
  n61 -->|Depends on| n229
  n62 -->|Serves| n427
  n62 -->|Depends on| n330
  n62 -->|Depends on| n264
  n62 -->|Depends on| n266
  n62 -->|Depends on| n265
  n62 -->|Depends on| n0
  n62 -->|Depends on| n232
  n62 -->|Depends on| n222
  n62 -->|Depends on| n278
  n63 -->|Serves| n427
  n63 -->|Part of| n35
  n63 -->|Depends on| n37
  n63 -->|Depends on| n36
  n63 -->|Depends on| n23
  n63 -->|Depends on| n19
  n63 -->|Depends on| n34
  n63 -->|Depends on| n62
  n63 -->|Depends on| n330
  n63 -->|Depends on| n319
  n63 -->|Depends on| n322
  n63 -->|Depends on| n310
  n63 -->|Depends on| n264
  n63 -->|Depends on| n263
  n63 -->|Depends on| n265
  n63 -->|Depends on| n0
  n63 -->|Depends on| n149
  n63 -->|Depends on| n275
  n63 -->|Depends on| n220
  n63 -->|Depends on| n219
  n63 -->|Depends on| n234
  n63 -->|Depends on| n221
  n63 -->|Depends on| n278
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n14
  n64 -->|Serves| n428
  n65 -->|Serves| n427
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n43
  n66 -->|Verifies| n113
  n66 -->|Verifies| n189
  n66 -->|In| n52
  n66 -->|Depends on| n113
  n66 -->|Depends on| n41
  n66 -->|Depends on| n56
  n66 -->|Depends on| n51
  n66 -->|Depends on| n40
  n66 -->|Depends on| n38
  n66 -->|Depends on| n153
  n66 -->|Depends on| n20
  n66 -->|Depends on| n22
  n66 -->|Depends on| n157
  n66 -->|Depends on| n267
  n66 -->|Depends on| n67
  n66 -->|Depends on| n280
  n70 -->|Verifies| n681
  n70 -->|Verifies| n673
  n70 -->|Verifies| n387
  n70 -->|In| n52
  n70 -->|Depends on| n681
  n70 -->|Depends on| n673
  n70 -->|Depends on| n717
  n70 -->|Depends on| n71
  n70 -->|Depends on| n272
  n70 -->|Depends on| n280
  n72 -->|Verifies| n130
  n72 -->|In| n52
  n72 -->|Depends on| n119
  n72 -->|Depends on| n130
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n22
  n72 -->|Depends on| n40
  n72 -->|Depends on| n38
  n72 -->|Depends on| n153
  n72 -->|Depends on| n95
  n72 -->|Depends on| n157
  n72 -->|Depends on| n268
  n72 -->|Depends on| n280
  n73 -->|Verifies| n353
  n73 -->|Verifies| n352
  n73 -->|In| n52
  n73 -->|Depends on| n17
  n73 -->|Depends on| n51
  n73 -->|Depends on| n157
  n73 -->|Depends on| n110
  n73 -->|Depends on| n279
  n73 -->|Depends on| n280
  n74 -->|Verifies| n116
  n74 -->|Verifies| n117
  n74 -->|Verifies| n181
  n74 -->|Verifies| n720
  n74 -->|Verifies| n690
  n74 -->|Verifies| n235
  n74 -->|Verifies| n378
  n74 -->|In| n52
  n74 -->|Depends on| n116
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n157
  n74 -->|Depends on| n153
  n74 -->|Depends on| n69
  n74 -->|Depends on| n150
  n74 -->|Depends on| n268
  n74 -->|Depends on| n280
  n75 -->|Verifies| n139
  n75 -->|In| n52
  n75 -->|Depends on| n139
  n75 -->|Depends on| n41
  n75 -->|Depends on| n56
  n75 -->|Depends on| n157
  n75 -->|Depends on| n69
  n75 -->|Depends on| n103
  n75 -->|Depends on| n280
  n76 -->|Verifies| n133
  n76 -->|In| n52
  n76 -->|Depends on| n133
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n40
  n76 -->|Depends on| n38
  n76 -->|Depends on| n153
  n76 -->|Depends on| n157
  n76 -->|Depends on| n268
  n76 -->|Depends on| n280
  n77 -->|Verifies| n122
  n77 -->|Verifies| n186
  n77 -->|Verifies| n350
  n77 -->|Verifies| n363
  n77 -->|In| n52
  n77 -->|Depends on| n124
  n77 -->|Depends on| n122
  n77 -->|Depends on| n41
  n77 -->|Depends on| n46
  n77 -->|Depends on| n51
  n77 -->|Depends on| n22
  n77 -->|Depends on| n53
  n77 -->|Depends on| n40
  n77 -->|Depends on| n38
  n77 -->|Depends on| n153
  n77 -->|Depends on| n187
  n77 -->|Depends on| n425
  n77 -->|Depends on| n203
  n77 -->|Depends on| n157
  n77 -->|Depends on| n277
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n280
  n79 -->|Verifies| n123
  n79 -->|Verifies| n204
  n79 -->|Verifies| n374
  n79 -->|Verifies| n163
  n79 -->|Verifies| n164
  n79 -->|Verifies| n168
  n79 -->|Verifies| n175
  n79 -->|Verifies| n170
  n79 -->|Verifies| n172
  n79 -->|Verifies| n173
  n79 -->|Verifies| n174
  n79 -->|Verifies| n171
  n79 -->|Verifies| n169
  n79 -->|In| n52
  n79 -->|Depends on| n123
  n79 -->|Depends on| n41
  n79 -->|Depends on| n51
  n79 -->|Depends on| n165
  n79 -->|Depends on| n157
  n79 -->|Depends on| n268
  n79 -->|Depends on| n280
  n80 -->|Verifies| n131
  n80 -->|In| n52
  n80 -->|Depends on| n131
  n80 -->|Depends on| n157
  n80 -->|Depends on| n153
  n80 -->|Depends on| n717
  n80 -->|Depends on| n280
  n81 -->|Verifies| n134
  n81 -->|In| n52
  n81 -->|Depends on| n134
  n81 -->|Depends on| n56
  n81 -->|Depends on| n40
  n81 -->|Depends on| n38
  n81 -->|Depends on| n153
  n81 -->|Depends on| n670
  n81 -->|Depends on| n98
  n81 -->|Depends on| n157
  n81 -->|Depends on| n48
  n81 -->|Depends on| n280
  n82 -->|Verifies| n125
  n82 -->|In| n52
  n82 -->|Depends on| n125
  n82 -->|Depends on| n102
  n82 -->|Depends on| n280
  n83 -->|Verifies| n126
  n83 -->|In| n52
  n83 -->|Depends on| n126
  n83 -->|Depends on| n56
  n83 -->|Depends on| n157
  n83 -->|Depends on| n280
  n84 -->|Verifies| n183
  n84 -->|Verifies| n203
  n84 -->|In| n52
  n84 -->|Depends on| n183
  n84 -->|Depends on| n41
  n84 -->|Depends on| n40
  n84 -->|Depends on| n16
  n84 -->|Depends on| n104
  n84 -->|Depends on| n98
  n84 -->|Depends on| n665
  n84 -->|Depends on| n22
  n84 -->|Depends on| n280
  n85 -->|Verifies| n143
  n85 -->|In| n52
  n85 -->|Depends on| n143
  n85 -->|Depends on| n183
  n85 -->|Depends on| n210
  n85 -->|Depends on| n40
  n85 -->|Depends on| n51
  n85 -->|Depends on| n157
  n85 -->|Depends on| n268
  n85 -->|Depends on| n280
  n86 -->|Verifies| n120
  n86 -->|Verifies| n132
  n86 -->|Verifies| n128
  n86 -->|In| n52
  n86 -->|Depends on| n120
  n86 -->|Depends on| n128
  n86 -->|Depends on| n41
  n86 -->|Depends on| n51
  n86 -->|Depends on| n157
  n86 -->|Depends on| n98
  n86 -->|Depends on| n280
  n87 -->|Verifies| n137
  n87 -->|Verifies| n217
  n87 -->|Verifies| n347
  n87 -->|In| n52
  n87 -->|Depends on| n137
  n87 -->|Depends on| n41
  n87 -->|Depends on| n56
  n87 -->|Depends on| n51
  n87 -->|Depends on| n40
  n87 -->|Depends on| n38
  n87 -->|Depends on| n153
  n87 -->|Depends on| n104
  n87 -->|Depends on| n98
  n87 -->|Depends on| n157
  n87 -->|Depends on| n716
  n87 -->|Depends on| n280
  n87 -->|Depends on| n670
  n88 -->|Verifies| n145
  n88 -->|Verifies| n368
  n88 -->|Verifies| n346
  n88 -->|Verifies| n364
  n88 -->|In| n52
  n88 -->|Depends on| n145
  n88 -->|Depends on| n41
  n88 -->|Depends on| n56
  n88 -->|Depends on| n20
  n88 -->|Depends on| n40
  n88 -->|Depends on| n38
  n88 -->|Depends on| n153
  n88 -->|Depends on| n104
  n88 -->|Depends on| n98
  n88 -->|Depends on| n157
  n88 -->|Depends on| n280
  n88 -->|Depends on| n152
  n88 -->|Depends on| n717
  n89 -->|Verifies| n118
  n89 -->|Verifies| n365
  n89 -->|In| n52
  n89 -->|Depends on| n118
  n89 -->|Depends on| n41
  n89 -->|Depends on| n56
  n89 -->|Depends on| n51
  n89 -->|Depends on| n104
  n89 -->|Depends on| n157
  n89 -->|Depends on| n280
  n89 -->|Depends on| n293
  n90 -->|Verifies| n144
  n90 -->|Verifies| n368
  n90 -->|Verifies| n346
  n90 -->|In| n52
  n90 -->|Depends on| n144
  n90 -->|Depends on| n41
  n90 -->|Depends on| n56
  n90 -->|Depends on| n40
  n90 -->|Depends on| n38
  n90 -->|Depends on| n153
  n90 -->|Depends on| n104
  n90 -->|Depends on| n157
  n90 -->|Depends on| n280
  n91 -->|Verifies| n121
  n91 -->|Verifies| n162
  n91 -->|In| n52
  n91 -->|Depends on| n121
  n91 -->|Depends on| n41
  n91 -->|Depends on| n56
  n91 -->|Depends on| n104
  n91 -->|Depends on| n98
  n91 -->|Depends on| n226
  n91 -->|Depends on| n157
  n91 -->|Depends on| n280
  n92 -->|Verifies| n127
  n92 -->|Verifies| n185
  n92 -->|In| n52
  n92 -->|Depends on| n124
  n92 -->|Depends on| n127
  n92 -->|Depends on| n41
  n92 -->|Depends on| n56
  n92 -->|Depends on| n51
  n92 -->|Depends on| n203
  n92 -->|Depends on| n40
  n92 -->|Depends on| n38
  n92 -->|Depends on| n153
  n92 -->|Depends on| n157
  n92 -->|Depends on| n277
  n92 -->|Depends on| n280
  n93 -->|Verifies| n316
  n93 -->|Verifies| n338
  n93 -->|Verifies| n354
  n93 -->|Verifies| n370
  n93 -->|In| n52
  n93 -->|Depends on| n124
  n93 -->|Depends on| n316
  n93 -->|Depends on| n18
  n93 -->|Depends on| n203
  n93 -->|Depends on| n40
  n93 -->|Depends on| n16
  n93 -->|Depends on| n51
  n93 -->|Depends on| n157
  n93 -->|Depends on| n277
  n93 -->|Depends on| n280
  n94 -->|Verifies| n124
  n94 -->|Verifies| n201
  n94 -->|Verifies| n579
  n94 -->|Verifies| n574
  n94 -->|Verifies| n582
  n94 -->|Verifies| n188
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n188
  n94 -->|Depends on| n51
  n94 -->|Depends on| n157
  n94 -->|Depends on| n277
  n94 -->|Depends on| n280
  n94 -->|Depends on| n108
  n96 -->|Verifies| n120
  n96 -->|Verifies| n132
  n96 -->|Verifies| n128
  n96 -->|In| n52
  n96 -->|Depends on| n120
  n96 -->|Depends on| n128
  n96 -->|Depends on| n132
  n96 -->|Depends on| n131
  n96 -->|Depends on| n41
  n96 -->|Depends on| n51
  n96 -->|Depends on| n157
  n96 -->|Depends on| n98
  n96 -->|Depends on| n268
  n96 -->|Depends on| n280
  n97 -->|Verifies| n129
  n97 -->|Verifies| n112
  n97 -->|In| n52
  n97 -->|Depends on| n129
  n97 -->|Depends on| n41
  n97 -->|Depends on| n56
  n97 -->|Depends on| n40
  n97 -->|Depends on| n38
  n97 -->|Depends on| n155
  n97 -->|Depends on| n98
  n97 -->|Depends on| n157
  n97 -->|Depends on| n280
  n99 -->|Verifies| n129
  n99 -->|Verifies| n135
  n99 -->|In| n52
  n99 -->|Depends on| n129
  n99 -->|Depends on| n41
  n99 -->|Depends on| n56
  n99 -->|Depends on| n40
  n99 -->|Depends on| n38
  n99 -->|Depends on| n153
  n99 -->|Depends on| n104
  n99 -->|Depends on| n98
  n99 -->|Depends on| n155
  n99 -->|Depends on| n215
  n99 -->|Depends on| n157
  n99 -->|Depends on| n280
  n99 -->|Depends on| n152
  n99 -->|Depends on| n717
  n100 -->|Verifies| n133
  n100 -->|Verifies| n198
  n100 -->|In| n52
  n100 -->|Depends on| n133
  n100 -->|Depends on| n22
  n100 -->|Depends on| n20
  n100 -->|Depends on| n51
  n100 -->|Depends on| n40
  n100 -->|Depends on| n38
  n100 -->|Depends on| n153
  n100 -->|Depends on| n157
  n100 -->|Depends on| n205
  n100 -->|Depends on| n68
  n100 -->|Depends on| n277
  n100 -->|Depends on| n280
  n101 -->|Verifies| n136
  n101 -->|Verifies| n347
  n101 -->|In| n52
  n101 -->|Depends on| n136
  n101 -->|Depends on| n41
  n101 -->|Depends on| n56
  n101 -->|Depends on| n157
  n101 -->|Depends on| n280
  n101 -->|Depends on| n152
  n101 -->|Depends on| n717
  n101 -->|Depends on| n98
  n105 -->|Verifies| n140
  n105 -->|Verifies| n134
  n105 -->|Verifies| n665
  n105 -->|Verifies| n206
  n105 -->|Verifies| n667
  n105 -->|Verifies| n355
  n105 -->|Verifies| n663
  n105 -->|Verifies| n189
  n105 -->|In| n52
  n105 -->|Depends on| n140
  n105 -->|Depends on| n134
  n105 -->|Depends on| n41
  n105 -->|Depends on| n56
  n105 -->|Depends on| n51
  n105 -->|Depends on| n40
  n105 -->|Depends on| n38
  n105 -->|Depends on| n21
  n105 -->|Depends on| n48
  n105 -->|Depends on| n22
  n105 -->|Depends on| n183
  n105 -->|Depends on| n16
  n105 -->|Depends on| n269
  n105 -->|Depends on| n153
  n105 -->|Depends on| n670
  n105 -->|Depends on| n104
  n105 -->|Depends on| n98
  n105 -->|Depends on| n157
  n105 -->|Depends on| n280
  n106 -->|Verifies| n142
  n106 -->|In| n52
  n106 -->|Depends on| n142
  n106 -->|Depends on| n56
  n106 -->|Depends on| n20
  n106 -->|Depends on| n40
  n106 -->|Depends on| n38
  n106 -->|Depends on| n153
  n106 -->|Depends on| n157
  n106 -->|Depends on| n280
  n107 -->|Verifies| n140
  n107 -->|Verifies| n206
  n107 -->|In| n52
  n107 -->|Depends on| n140
  n107 -->|Depends on| n41
  n107 -->|Depends on| n51
  n107 -->|Depends on| n40
  n107 -->|Depends on| n38
  n107 -->|Depends on| n21
  n107 -->|Depends on| n22
  n107 -->|Depends on| n183
  n107 -->|Depends on| n16
  n107 -->|Depends on| n206
  n107 -->|Depends on| n268
  n107 -->|Depends on| n153
  n107 -->|Depends on| n670
  n107 -->|Depends on| n104
  n107 -->|Depends on| n98
  n107 -->|Depends on| n157
  n107 -->|Depends on| n280
  n109 -->|Verifies| n114
  n109 -->|Verifies| n115
  n109 -->|Verifies| n344
  n109 -->|In| n52
  n109 -->|Depends on| n114
  n109 -->|Depends on| n56
  n109 -->|Depends on| n40
  n109 -->|Depends on| n38
  n109 -->|Depends on| n157
  n109 -->|Depends on| n68
  n109 -->|Depends on| n280
  n111 -->|Verifies| n141
  n111 -->|Verifies| n120
  n111 -->|Verifies| n138
  n111 -->|In| n52
  n111 -->|Depends on| n141
  n111 -->|Depends on| n120
  n111 -->|Depends on| n51
  n111 -->|Depends on| n157
  n111 -->|Depends on| n110
  n111 -->|Depends on| n280
  n112 -->|Serves| n427
  n112 -->|Depends on| n211
  n112 -->|Depends on| n268
  n113 -->|Serves| n427
  n113 -->|Part of| n54
  n113 -->|Depends on| n131
  n113 -->|Depends on| n189
  n113 -->|Depends on| n157
  n113 -->|Depends on| n153
  n113 -->|Depends on| n214
  n113 -->|Depends on| n212
  n113 -->|Depends on| n341
  n113 -->|Depends on| n380
  n113 -->|Depends on| n158
  n113 -->|Depends on| n717
  n113 -->|Depends on| n42
  n113 -->|Depends on| n21
  n113 -->|Depends on| n20
  n113 -->|Depends on| n22
  n113 -->|Depends on| n38
  n113 -->|Depends on| n24
  n113 -->|Depends on| n190
  n113 -->|Depends on| n50
  n113 -->|Depends on| n268
  n113 -->|Depends on| n267
  n113 -->|Depends on| n215
  n113 -->|Depends on| n216
  n113 -->|Depends on| n218
  n113 -->|Depends on| n217
  n113 -->|Depends on| n16
  n113 -->|Depends on| n203
  n113 -->|Depends on| n152
  n114 -->|Serves| n434
  n114 -->|Part of| n54
  n114 -->|Depends on| n131
  n114 -->|Depends on| n115
  n114 -->|Depends on| n13
  n114 -->|Depends on| n38
  n114 -->|Depends on| n50
  n114 -->|Depends on| n268
  n115 -->|Serves| n434
  n115 -->|Depends on| n131
  n115 -->|Depends on| n199
  n115 -->|Depends on| n39
  n115 -->|Depends on| n205
  n115 -->|Depends on| n203
  n115 -->|Depends on| n153
  n115 -->|Depends on| n38
  n115 -->|Depends on| n268
  n115 -->|Depends on| n146
  n116 -->|Serves| n427
  n116 -->|Part of| n54
  n116 -->|Depends on| n131
  n116 -->|Depends on| n117
  n116 -->|Depends on| n22
  n116 -->|Depends on| n38
  n116 -->|Depends on| n50
  n116 -->|Depends on| n268
  n117 -->|Serves| n427
  n117 -->|Depends on| n131
  n117 -->|Depends on| n181
  n117 -->|Depends on| n268
  n118 -->|Serves| n434
  n118 -->|Part of| n54
  n118 -->|Depends on| n131
  n118 -->|Depends on| n33
  n118 -->|Depends on| n293
  n118 -->|Depends on| n153
  n118 -->|Depends on| n20
  n118 -->|Depends on| n22
  n118 -->|Depends on| n38
  n118 -->|Depends on| n299
  n118 -->|Depends on| n50
  n118 -->|Depends on| n268
  n119 -->|Serves| n427
  n119 -->|Part of| n54
  n119 -->|Depends on| n153
  n119 -->|Depends on| n131
  n119 -->|Depends on| n199
  n119 -->|Depends on| n22
  n119 -->|Depends on| n38
  n119 -->|Depends on| n50
  n119 -->|Depends on| n268
  n120 -->|Serves| n427
  n120 -->|Part of| n54
  n120 -->|Depends on| n157
  n120 -->|Depends on| n131
  n120 -->|Depends on| n138
  n120 -->|Depends on| n183
  n120 -->|Depends on| n210
  n120 -->|Depends on| n117
  n120 -->|Depends on| n132
  n120 -->|Depends on| n22
  n120 -->|Depends on| n38
  n120 -->|Depends on| n40
  n120 -->|Depends on| n50
  n120 -->|Depends on| n268
  n121 -->|Serves| n427
  n121 -->|Part of| n54
  n121 -->|Depends on| n131
  n121 -->|Depends on| n181
  n121 -->|Depends on| n117
  n121 -->|Depends on| n15
  n121 -->|Depends on| n162
  n121 -->|Depends on| n317
  n121 -->|Depends on| n318
  n121 -->|Depends on| n233
  n121 -->|Depends on| n161
  n121 -->|Depends on| n20
  n121 -->|Depends on| n22
  n121 -->|Depends on| n38
  n121 -->|Depends on| n50
  n121 -->|Depends on| n268
  n122 -->|Serves| n427
  n122 -->|Part of| n54
  n122 -->|Depends on| n131
  n122 -->|Depends on| n186
  n122 -->|Depends on| n115
  n122 -->|Depends on| n13
  n122 -->|Depends on| n38
  n123 -->|Serves| n427
  n123 -->|Part of| n54
  n123 -->|Depends on| n131
  n123 -->|Depends on| n166
  n123 -->|Depends on| n50
  n123 -->|Depends on| n268
  n123 -->|Depends on| n112
  n124 -->|Serves| n427
  n124 -->|Part of| n54
  n124 -->|Depends on| n131
  n124 -->|Depends on| n201
  n124 -->|Depends on| n579
  n124 -->|Depends on| n50
  n125 -->|Serves| n427
  n125 -->|Depends on| n55
  n125 -->|Depends on| n719
  n126 -->|Serves| n427
  n126 -->|Part of| n54
  n126 -->|Depends on| n131
  n126 -->|Depends on| n125
  n126 -->|Depends on| n20
  n126 -->|Depends on| n22
  n126 -->|Depends on| n38
  n126 -->|Depends on| n50
  n126 -->|Depends on| n157
  n126 -->|Depends on| n268
  n127 -->|Serves| n427
  n127 -->|Part of| n54
  n127 -->|Depends on| n153
  n127 -->|Depends on| n131
  n127 -->|Depends on| n185
  n127 -->|Depends on| n316
  n127 -->|Depends on| n203
  n127 -->|Depends on| n22
  n127 -->|Depends on| n38
  n127 -->|Depends on| n50
  n127 -->|Depends on| n268
  n128 -->|Serves| n427
  n128 -->|Part of| n54
  n128 -->|Depends on| n131
  n128 -->|Depends on| n132
  n128 -->|Depends on| n210
  n128 -->|Depends on| n50
  n128 -->|Depends on| n268
  n129 -->|Serves| n434
  n129 -->|Part of| n54
  n129 -->|Depends on| n131
  n129 -->|Depends on| n153
  n129 -->|Depends on| n203
  n129 -->|Depends on| n39
  n129 -->|Depends on| n155
  n129 -->|Depends on| n215
  n129 -->|Depends on| n20
  n129 -->|Depends on| n22
  n129 -->|Depends on| n38
  n129 -->|Depends on| n717
  n129 -->|Depends on| n719
  n129 -->|Depends on| n705
  n129 -->|Depends on| n699
  n129 -->|Depends on| n700
  n129 -->|Depends on| n697
  n129 -->|Depends on| n696
  n129 -->|Depends on| n708
  n129 -->|Depends on| n714
  n129 -->|Depends on| n716
  n129 -->|Depends on| n706
  n129 -->|Depends on| n50
  n129 -->|Depends on| n268
  n129 -->|Depends on| n40
  n129 -->|Depends on| n157
  n129 -->|Depends on| n135
  n129 -->|Depends on| n152
  n129 -->|Depends on| n704
  n129 -->|Depends on| n702
  n129 -->|Depends on| n112
  n129 -->|Depends on| n132
  n130 -->|Serves| n427
  n130 -->|Part of| n54
  n130 -->|Depends on| n153
  n130 -->|Depends on| n131
  n130 -->|Depends on| n199
  n130 -->|Depends on| n20
  n130 -->|Depends on| n38
  n130 -->|Depends on| n50
  n130 -->|Depends on| n268
  n131 -->|Serves| n427
  n131 -->|Depends on| n157
  n131 -->|Depends on| n183
  n131 -->|Depends on| n182
  n131 -->|Depends on| n196
  n131 -->|Depends on| n210
  n131 -->|Depends on| n198
  n131 -->|Depends on| n50
  n131 -->|Depends on| n40
  n131 -->|Depends on| n16
  n131 -->|Depends on| n432
  n131 -->|Depends on| n426
  n131 -->|Depends on| n268
  n131 -->|Depends on| n153
  n131 -->|Depends on| n205
  n131 -->|Depends on| n132
  n131 -->|Depends on| n151
  n131 -->|Depends on| n199
  n131 -->|Depends on| n38
  n131 -->|Depends on| n20
  n131 -->|Depends on| n681
  n132 -->|Serves| n427
  n132 -->|Depends on| n211
  n132 -->|Depends on| n268
  n133 -->|Serves| n434
  n133 -->|Part of| n54
  n133 -->|Depends on| n131
  n133 -->|Depends on| n198
  n133 -->|Depends on| n22
  n133 -->|Depends on| n50
  n133 -->|Depends on| n268
  n134 -->|Serves| n668
  n134 -->|Part of| n54
  n134 -->|Depends on| n157
  n134 -->|Depends on| n131
  n134 -->|Depends on| n665
  n134 -->|Depends on| n22
  n134 -->|Depends on| n38
  n134 -->|Depends on| n50
  n134 -->|Depends on| n268
  n135 -->|Serves| n434
  n135 -->|Depends on| n719
  n135 -->|Depends on| n705
  n135 -->|Depends on| n699
  n135 -->|Depends on| n700
  n135 -->|Depends on| n697
  n135 -->|Depends on| n696
  n135 -->|Depends on| n708
  n135 -->|Depends on| n714
  n135 -->|Depends on| n716
  n135 -->|Depends on| n702
  n135 -->|Depends on| n706
  n136 -->|Serves| n434
  n136 -->|Part of| n54
  n136 -->|Depends on| n131
  n136 -->|Depends on| n153
  n136 -->|Depends on| n203
  n136 -->|Depends on| n152
  n136 -->|Depends on| n20
  n136 -->|Depends on| n21
  n136 -->|Depends on| n38
  n136 -->|Depends on| n50
  n136 -->|Depends on| n268
  n137 -->|Serves| n434
  n137 -->|Part of| n54
  n137 -->|Depends on| n131
  n137 -->|Depends on| n153
  n137 -->|Depends on| n203
  n137 -->|Depends on| n199
  n137 -->|Depends on| n261
  n137 -->|Depends on| n260
  n137 -->|Depends on| n218
  n137 -->|Depends on| n217
  n137 -->|Depends on| n20
  n137 -->|Depends on| n22
  n137 -->|Depends on| n21
  n137 -->|Depends on| n38
  n137 -->|Depends on| n24
  n137 -->|Depends on| n190
  n137 -->|Depends on| n717
  n137 -->|Depends on| n16
  n137 -->|Depends on| n50
  n137 -->|Depends on| n268
  n137 -->|Depends on| n267
  n137 -->|Depends on| n235
  n137 -->|Depends on| n716
  n137 -->|Depends on| n140
  n137 -->|Depends on| n157
  n138 -->|Serves| n427
  n138 -->|Depends on| n131
  n138 -->|Depends on| n210
  n138 -->|Depends on| n50
  n139 -->|Serves| n427
  n139 -->|Part of| n54
  n139 -->|Depends on| n116
  n139 -->|Depends on| n40
  n140 -->|Serves| n668
  n140 -->|Part of| n54
  n140 -->|Depends on| n157
  n140 -->|Depends on| n131
  n140 -->|Depends on| n121
  n140 -->|Depends on| n181
  n140 -->|Depends on| n117
  n140 -->|Depends on| n665
  n140 -->|Depends on| n667
  n140 -->|Depends on| n668
  n140 -->|Depends on| n15
  n140 -->|Depends on| n162
  n140 -->|Depends on| n664
  n140 -->|Depends on| n40
  n140 -->|Depends on| n132
  n140 -->|Depends on| n20
  n140 -->|Depends on| n22
  n140 -->|Depends on| n38
  n140 -->|Depends on| n50
  n140 -->|Depends on| n189
  n140 -->|Depends on| n268
  n141 -->|Serves| n427
  n141 -->|Part of| n54
  n141 -->|Depends on| n131
  n141 -->|Depends on| n138
  n142 -->|Serves| n434
  n142 -->|Part of| n54
  n142 -->|Depends on| n153
  n142 -->|Depends on| n131
  n142 -->|Depends on| n199
  n142 -->|Depends on| n22
  n142 -->|Depends on| n38
  n142 -->|Depends on| n50
  n142 -->|Depends on| n268
  n143 -->|Serves| n427
  n143 -->|Part of| n54
  n143 -->|Depends on| n131
  n143 -->|Depends on| n183
  n143 -->|Depends on| n210
  n143 -->|Depends on| n196
  n143 -->|Depends on| n50
  n143 -->|Depends on| n268
  n144 -->|Serves| n434
  n144 -->|Part of| n54
  n144 -->|Depends on| n131
  n144 -->|Depends on| n20
  n144 -->|Depends on| n22
  n144 -->|Depends on| n38
  n144 -->|Depends on| n299
  n144 -->|Depends on| n716
  n144 -->|Depends on| n40
  n144 -->|Depends on| n157
  n144 -->|Depends on| n50
  n144 -->|Depends on| n268
  n145 -->|Serves| n434
  n145 -->|Part of| n54
  n145 -->|Depends on| n131
  n145 -->|Depends on| n153
  n145 -->|Depends on| n203
  n145 -->|Depends on| n20
  n145 -->|Depends on| n22
  n145 -->|Depends on| n152
  n145 -->|Depends on| n39
  n145 -->|Depends on| n215
  n145 -->|Depends on| n38
  n145 -->|Depends on| n32
  n145 -->|Depends on| n292
  n145 -->|Depends on| n717
  n145 -->|Depends on| n50
  n145 -->|Depends on| n268
  n145 -->|Depends on| n40
  n145 -->|Depends on| n157
  n161 -->|Depends on| n223
  n161 -->|Depends on| n225
  n162 -->|Serves| n427
  n162 -->|Depends on| n30
  n162 -->|Depends on| n160
  n163 -->|Serves| n427
  n163 -->|Depends on| n268
  n164 -->|Implements| n166
  n164 -->|Depends on| n16
  n164 -->|Depends on| n163
  n164 -->|Depends on| n268
  n167 -->|Chooses| n164
  n167 -->|Chooses| n168
  n167 -->|Chooses| n175
  n167 -->|Chooses| n170
  n167 -->|Chooses| n172
  n167 -->|Chooses| n173
  n167 -->|Chooses| n174
  n167 -->|Chooses| n171
  n167 -->|Chooses| n169
  n167 -->|In| n29
  n167 -->|In| n52
  n168 -->|Implements| n166
  n168 -->|Depends on| n21
  n168 -->|Depends on| n20
  n168 -->|Depends on| n22
  n168 -->|Depends on| n38
  n168 -->|Depends on| n165
  n168 -->|Depends on| n163
  n168 -->|Depends on| n268
  n169 -->|Implements| n166
  n169 -->|Depends on| n21
  n169 -->|Depends on| n20
  n169 -->|Depends on| n22
  n169 -->|Depends on| n32
  n169 -->|Depends on| n153
  n169 -->|Depends on| n38
  n169 -->|Depends on| n163
  n169 -->|Depends on| n268
  n170 -->|Implements| n166
  n170 -->|Depends on| n21
  n170 -->|Depends on| n22
  n170 -->|Depends on| n42
  n170 -->|Depends on| n38
  n170 -->|Depends on| n165
  n170 -->|Depends on| n163
  n170 -->|Depends on| n268
  n171 -->|Implements| n166
  n171 -->|Depends on| n33
  n171 -->|Depends on| n40
  n171 -->|Depends on| n163
  n171 -->|Depends on| n268
  n172 -->|Implements| n166
  n172 -->|Depends on| n21
  n172 -->|Depends on| n22
  n172 -->|Depends on| n27
  n172 -->|Depends on| n38
  n172 -->|Depends on| n165
  n172 -->|Depends on| n163
  n172 -->|Depends on| n268
  n173 -->|Implements| n166
  n173 -->|Depends on| n25
  n173 -->|Depends on| n163
  n173 -->|Depends on| n268
  n174 -->|Implements| n166
  n174 -->|Depends on| n16
  n174 -->|Depends on| n53
  n174 -->|Depends on| n165
  n174 -->|Depends on| n163
  n174 -->|Depends on| n268
  n175 -->|Implements| n166
  n175 -->|Depends on| n21
  n175 -->|Depends on| n22
  n175 -->|Depends on| n40
  n175 -->|Depends on| n38
  n175 -->|Depends on| n165
  n175 -->|Depends on| n163
  n175 -->|Depends on| n268
  n176 -->|Chooses| n178
  n176 -->|In| n29
  n176 -->|In| n47
  n176 -->|In| n52
  n176 -->|In| n14
  n176 -->|Serves| n434
  n178 -->|Depends on| n275
  n179 -->|Serves| n434
  n179 -->|Applied by| n178
  n179 -->|Applied by| n176
  n179 -->|Applied by| n275
  n180 -->|Serves| n434
  n181 -->|Serves| n427
  n181 -->|Depends on| n157
  n181 -->|Depends on| n153
  n181 -->|Depends on| n38
  n181 -->|Depends on| n211
  n181 -->|Depends on| n39
  n181 -->|Depends on| n235
  n181 -->|Depends on| n269
  n181 -->|Depends on| n152
  n181 -->|Depends on| n717
  n182 -->|Serves| n427
  n182 -->|Depends on| n147
  n182 -->|Depends on| n202
  n182 -->|Depends on| n205
  n182 -->|Depends on| n39
  n182 -->|Depends on| n149
  n182 -->|Depends on| n153
  n182 -->|Depends on| n281
  n182 -->|Depends on| n206
  n183 -->|Serves| n427
  n183 -->|Depends on| n153
  n183 -->|Depends on| n432
  n183 -->|Depends on| n184
  n183 -->|Depends on| n205
  n183 -->|Depends on| n202
  n183 -->|Depends on| n30
  n183 -->|Depends on| n20
  n183 -->|Depends on| n38
  n183 -->|Depends on| n207
  n183 -->|Depends on| n203
  n183 -->|Depends on| n193
  n183 -->|Depends on| n211
  n183 -->|Depends on| n235
  n183 -->|Depends on| n39
  n183 -->|Depends on| n269
  n183 -->|Depends on| n191
  n183 -->|Depends on| n48
  n183 -->|Depends on| n189
  n183 -->|Depends on| n27
  n183 -->|Depends on| n152
  n183 -->|Depends on| n194
  n184 -->|Serves| n427
  n185 -->|Serves| n427
  n185 -->|Depends on| n157
  n185 -->|Depends on| n16
  n185 -->|Depends on| n40
  n185 -->|Depends on| n277
  n186 -->|Serves| n427
  n186 -->|Depends on| n187
  n186 -->|Depends on| n157
  n186 -->|Depends on| n153
  n186 -->|Depends on| n50
  n186 -->|Depends on| n16
  n186 -->|Depends on| n53
  n186 -->|Depends on| n425
  n186 -->|Depends on| n25
  n186 -->|Depends on| n20
  n186 -->|Depends on| n38
  n186 -->|Depends on| n203
  n186 -->|Depends on| n185
  n186 -->|Depends on| n188
  n186 -->|Depends on| n316
  n186 -->|Depends on| n579
  n186 -->|Depends on| n275
  n186 -->|Depends on| n271
  n188 -->|Serves| n427
  n188 -->|Depends on| n277
  n189 -->|Serves| n427
  n189 -->|Depends on| n153
  n189 -->|Depends on| n214
  n189 -->|Depends on| n717
  n189 -->|Depends on| n203
  n189 -->|Depends on| n20
  n189 -->|Depends on| n38
  n189 -->|Depends on| n24
  n189 -->|Depends on| n190
  n191 -->|Serves| n427
  n192 -->|Serves| n427
  n193 -->|Serves| n427
  n193 -->|Depends on| n39
  n193 -->|Depends on| n269
  n193 -->|Depends on| n202
  n193 -->|Depends on| n205
  n193 -->|Depends on| n177
  n193 -->|Depends on| n192
  n193 -->|Depends on| n435
  n193 -->|Depends on| n153
  n193 -->|Depends on| n717
  n193 -->|Depends on| n299
  n193 -->|Depends on| n180
  n193 -->|Depends on| n191
  n194 -->|Serves| n427
  n194 -->|Depends on| n432
  n194 -->|Depends on| n269
  n196 -->|Serves| n427
  n196 -->|Depends on| n26
  n196 -->|Depends on| n235
  n196 -->|Depends on| n154
  n196 -->|Depends on| n153
  n196 -->|Depends on| n429
  n196 -->|Depends on| n424
  n196 -->|Depends on| n192
  n196 -->|Depends on| n430
  n196 -->|Depends on| n431
  n196 -->|Depends on| n205
  n196 -->|Depends on| n20
  n196 -->|Depends on| n38
  n196 -->|Depends on| n203
  n196 -->|Depends on| n193
  n196 -->|Depends on| n39
  n196 -->|Depends on| n152
  n196 -->|Depends on| n276
  n196 -->|Depends on| n243
  n196 -->|Depends on| n237
  n196 -->|Depends on| n239
  n196 -->|Depends on| n247
  n196 -->|Depends on| n256
  n196 -->|Depends on| n253
  n196 -->|Depends on| n251
  n196 -->|Depends on| n241
  n197 -->|Serves| n255
  n197 -->|Applied by| n196
  n197 -->|Applied by| n210
  n198 -->|Serves| n434
  n198 -->|Depends on| n153
  n198 -->|Depends on| n205
  n198 -->|Depends on| n20
  n198 -->|Depends on| n38
  n198 -->|Depends on| n39
  n198 -->|Depends on| n277
  n199 -->|Serves| n434
  n199 -->|Depends on| n202
  n199 -->|Depends on| n39
  n199 -->|Depends on| n277
  n201 -->|Serves| n427
  n201 -->|Depends on| n153
  n201 -->|Depends on| n423
  n201 -->|Depends on| n200
  n201 -->|Depends on| n16
  n201 -->|Depends on| n199
  n201 -->|Depends on| n210
  n201 -->|Depends on| n275
  n202 -->|Serves| n427
  n202 -->|Depends on| n672
  n203 -->|Serves| n427
  n203 -->|Depends on| n153
  n203 -->|Depends on| n20
  n203 -->|Depends on| n38
  n203 -->|Depends on| n215
  n203 -->|Depends on| n39
  n203 -->|Depends on| n152
  n203 -->|Depends on| n717
  n204 -->|Serves| n427
  n204 -->|Implements| n27
  n204 -->|Depends on| n20
  n204 -->|Depends on| n38
  n204 -->|Depends on| n24
  n204 -->|Depends on| n195
  n204 -->|Depends on| n45
  n205 -->|Serves| n427
  n205 -->|Depends on| n258
  n206 -->|Serves| n427
  n206 -->|Depends on| n268
  n207 -->|Serves| n427
  n207 -->|Depends on| n719
  n207 -->|Depends on| n205
  n207 -->|Depends on| n209
  n207 -->|Depends on| n55
  n207 -->|Depends on| n26
  n207 -->|Depends on| n45
  n207 -->|Depends on| n24
  n207 -->|Depends on| n38
  n207 -->|Depends on| n202
  n207 -->|Depends on| n148
  n207 -->|Depends on| n269
  n207 -->|Depends on| n718
  n207 -->|Depends on| n154
  n207 -->|Depends on| n39
  n208 -->|Serves| n434
  n208 -->|Applied by| n193
  n208 -->|Applied by| n210
  n210 -->|Serves| n427
  n210 -->|Depends on| n235
  n210 -->|Depends on| n147
  n210 -->|Depends on| n159
  n210 -->|Depends on| n149
  n210 -->|Depends on| n153
  n210 -->|Depends on| n30
  n210 -->|Depends on| n20
  n210 -->|Depends on| n38
  n210 -->|Depends on| n39
  n210 -->|Depends on| n203
  n210 -->|Depends on| n277
  n210 -->|Depends on| n281
  n210 -->|Depends on| n245
  n210 -->|Depends on| n237
  n210 -->|Depends on| n253
  n210 -->|Depends on| n249
  n211 -->|Serves| n427
  n211 -->|Depends on| n156
  n211 -->|Depends on| n153
  n211 -->|Depends on| n38
  n211 -->|Depends on| n39
  n211 -->|Depends on| n235
  n211 -->|Depends on| n269
  n212 -->|Refines| n427
  n213 -->|Accepts| n212
  n217 -->|Serves| n427
  n217 -->|Depends on| n218
  n217 -->|Depends on| n719
  n217 -->|Depends on| n699
  n217 -->|Depends on| n705
  n217 -->|Depends on| n703
  n217 -->|Depends on| n706
  n217 -->|Depends on| n700
  n217 -->|Depends on| n697
  n217 -->|Depends on| n696
  n217 -->|Depends on| n707
  n217 -->|Depends on| n714
  n217 -->|Depends on| n716
  n217 -->|Depends on| n702
  n225 -->|Depends on| n222
  n228 -->|Read in| n717
  n235 -->|Serves| n427
  n235 -->|Depends on| n681
  n235 -->|Depends on| n673
  n235 -->|Depends on| n717
  n235 -->|Depends on| n720
  n235 -->|Depends on| n688
  n235 -->|Depends on| n689
  n235 -->|Depends on| n690
  n235 -->|Depends on| n30
  n235 -->|Depends on| n20
  n235 -->|Depends on| n38
  n235 -->|Depends on| n272
  n236 -->|Serves| n427
  n236 -->|Applied by| n235
  n236 -->|Applied by| n316
  n237 -->|Refines| n255
  n238 -->|Accepts| n237
  n239 -->|Refines| n255
  n240 -->|Accepts| n239
  n241 -->|Refines| n255
  n242 -->|Accepts| n241
  n243 -->|Refines| n255
  n244 -->|Accepts| n243
  n245 -->|Refines| n255
  n246 -->|Accepts| n245
  n247 -->|Refines| n255
  n248 -->|Accepts| n247
  n249 -->|Refines| n255
  n250 -->|Accepts| n249
  n251 -->|Refines| n253
  n251 -->|Depends on| n253
  n252 -->|Accepts| n251
  n253 -->|Refines| n255
  n254 -->|Accepts| n253
  n256 -->|Refines| n255
  n257 -->|Accepts| n256
  n258 -->|Refines| n436
  n259 -->|Accepts| n258
  n261 -->|Refines| n436
  n262 -->|Accepts| n261
  n267 -->|Written in| n275
  n267 -->|Depends on| n275
  n268 -->|Written in| n275
  n268 -->|Depends on| n275
  n269 -->|Written in| n275
  n269 -->|Depends on| n275
  n270 -->|Serves| n434
  n270 -->|Applied by| n269
  n270 -->|Applied by| n281
  n270 -->|Applied by| n271
  n270 -->|Applied by| n268
  n270 -->|Applied by| n280
  n270 -->|Applied by| n267
  n270 -->|Applied by| n278
  n271 -->|Written in| n275
  n271 -->|Depends on| n275
  n272 -->|Written in| n275
  n273 -->|Written in| n275
  n274 -->|Written in| n275
  n276 -->|Written in| n275
  n277 -->|Written in| n275
  n278 -->|Written in| n275
  n278 -->|Depends on| n275
  n279 -->|Written in| n275
  n280 -->|Written in| n275
  n280 -->|Depends on| n275
  n281 -->|Written in| n275
  n281 -->|Depends on| n275
  n282 -->|Written in| n275
  n283 -->|Serves| n434
  n285 -->|Serves| n434
  n287 -->|Serves| n434
  n290 -->|Serves| n434
  n292 -->|Serves| n434
  n294 -->|Serves| n434
  n295 -->|Serves| n434
  n299 -->|Serves| n434
  n301 -->|Defined by| n330
  n301 -->|Depends on| n330
  n301 -->|Depends on| n319
  n302 -->|Defined by| n330
  n302 -->|Depends on| n330
  n302 -->|Depends on| n157
  n302 -->|Depends on| n309
  n302 -->|Depends on| n227
  n303 -->|Defined by| n330
  n303 -->|Depends on| n330
  n303 -->|Depends on| n319
  n304 -->|Defined by| n330
  n304 -->|Depends on| n330
  n304 -->|Depends on| n319
  n304 -->|Depends on| n227
  n305 -->|Defined by| n330
  n305 -->|Depends on| n330
  n305 -->|Depends on| n319
  n305 -->|Depends on| n227
  n305 -->|Depends on| n323
  n306 -->|Defined by| n330
  n306 -->|Depends on| n330
  n306 -->|Depends on| n319
  n306 -->|Depends on| n227
  n307 -->|Defined by| n330
  n307 -->|Depends on| n330
  n307 -->|Depends on| n266
  n307 -->|Depends on| n1
  n307 -->|Depends on| n227
  n307 -->|Depends on| n232
  n309 -->|Defined by| n330
  n309 -->|Depends on| n330
  n309 -->|Depends on| n227
  n309 -->|Depends on| n224
  n311 -->|Defined by| n330
  n311 -->|Depends on| n330
  n311 -->|Depends on| n319
  n311 -->|Depends on| n227
  n311 -->|Depends on| n301
  n311 -->|Depends on| n305
  n312 -->|Defined by| n330
  n312 -->|Depends on| n330
  n312 -->|Depends on| n230
  n312 -->|Depends on| n229
  n313 -->|Uses the variables of| n8
  n313 -->|Uses the variables of| n11
  n313 -->|Uses the variables of| n6
  n313 -->|Styles| n316
  n314 -->|Defined by| n330
  n314 -->|Depends on| n330
  n314 -->|Depends on| n319
  n316 -->|Serves| n427
  n316 -->|Depends on| n317
  n316 -->|Depends on| n326
  n316 -->|Depends on| n12
  n316 -->|Depends on| n4
  n316 -->|Depends on| n8
  n316 -->|Depends on| n7
  n316 -->|Depends on| n11
  n316 -->|Depends on| n5
  n316 -->|Depends on| n9
  n316 -->|Depends on| n3
  n316 -->|Depends on| n6
  n316 -->|Depends on| n44
  n316 -->|Depends on| n20
  n316 -->|Depends on| n15
  n316 -->|Depends on| n18
  n316 -->|Depends on| n324
  n316 -->|Depends on| n329
  n316 -->|Depends on| n327
  n316 -->|Depends on| n312
  n316 -->|Depends on| n308
  n316 -->|Depends on| n320
  n316 -->|Depends on| n318
  n316 -->|Depends on| n223
  n316 -->|Depends on| n222
  n316 -->|Depends on| n277
  n316 -->|Depends on| n275
  n316 -->|Depends on| n681
  n318 -->|Defined by| n330
  n318 -->|Depends on| n330
  n318 -->|Depends on| n226
  n320 -->|Defined by| n330
  n320 -->|Depends on| n330
  n320 -->|Depends on| n233
  n320 -->|Depends on| n228
  n320 -->|Depends on| n704
  n320 -->|Depends on| n693
  n321 -->|Uses the variables of| n12
  n321 -->|Uses the variables of| n8
  n321 -->|Uses the variables of| n7
  n321 -->|Uses the variables of| n11
  n321 -->|Uses the variables of| n5
  n321 -->|Uses the variables of| n9
  n321 -->|Uses the variables of| n3
  n321 -->|Uses the variables of| n6
  n321 -->|Styles| n316
  n323 -->|Defined by| n330
  n323 -->|Depends on| n330
  n323 -->|Depends on| n322
  n323 -->|Depends on| n319
  n323 -->|Depends on| n227
  n324 -->|Defined by| n330
  n324 -->|Depends on| n330
  n324 -->|Depends on| n227
  n324 -->|Depends on| n325
  n324 -->|Depends on| n311
  n324 -->|Depends on| n307
  n325 -->|Defined by| n330
  n325 -->|Depends on| n330
  n325 -->|Depends on| n227
  n325 -->|Depends on| n302
  n325 -->|Depends on| n303
  n325 -->|Depends on| n304
  n325 -->|Depends on| n314
  n325 -->|Depends on| n306
  n327 -->|Defined by| n330
  n327 -->|Depends on| n330
  n327 -->|Depends on| n223
  n327 -->|Depends on| n222
  n327 -->|Depends on| n224
  n327 -->|Depends on| n221
  n328 -->|Serves| n434
  n328 -->|Applied by| n321
  n328 -->|Applied by| n313
  n328 -->|Applied by| n329
  n328 -->|Applied by| n312
  n328 -->|Applied by| n316
  n329 -->|Defined by| n330
  n329 -->|Depends on| n330
  n329 -->|Depends on| n223
  n329 -->|Depends on| n230
  n329 -->|Depends on| n229
  n329 -->|Depends on| n220
  n329 -->|Depends on| n231
  n329 -->|Depends on| n225
  n329 -->|Depends on| n222
  n331 -->|Chooses| n344
  n331 -->|In| n29
  n331 -->|In| n52
  n331 -->|Serves| n428
  n332 -->|Chooses| n371
  n332 -->|In| n29
  n332 -->|In| n52
  n332 -->|Serves| n428
  n333 -->|Implements| n20
  n334 -->|Implements| n21
  n335 -->|Implements| n22
  n337 -->|Chooses| n382
  n337 -->|Chooses| n370
  n337 -->|In| n29
  n337 -->|In| n52
  n337 -->|Serves| n428
  n338 -->|Implements| n15
  n338 -->|Uses| n286
  n339 -->|Chooses| n338
  n339 -->|In| n29
  n339 -->|In| n52
  n339 -->|Serves| n428
  n340 -->|Implements| n40
  n340 -->|Implements| n42
  n340 -->|Implements| n41
  n340 -->|Depends on| n341
  n340 -->|Depends on| n38
  n340 -->|Depends on| n157
  n340 -->|Depends on| n279
  n342 -->|Chooses| n349
  n342 -->|Chooses| n364
  n342 -->|In| n52
  n342 -->|Serves| n428
  n343 -->|Chooses| n352
  n343 -->|Chooses| n378
  n343 -->|Chooses| n365
  n343 -->|Chooses| n340
  n343 -->|Chooses| n350
  n343 -->|In| n52
  n343 -->|Serves| n428
  n344 -->|Implements| n13
  n344 -->|Depends on| n20
  n344 -->|Depends on| n22
  n344 -->|Depends on| n719
  n344 -->|Depends on| n699
  n344 -->|Depends on| n700
  n344 -->|Depends on| n697
  n344 -->|Depends on| n696
  n344 -->|Depends on| n708
  n344 -->|Depends on| n714
  n344 -->|Depends on| n716
  n344 -->|Depends on| n702
  n344 -->|Depends on| n706
  n346 -->|Depends on| n21
  n346 -->|Depends on| n22
  n346 -->|Depends on| n20
  n346 -->|Depends on| n38
  n347 -->|Depends on| n21
  n347 -->|Depends on| n22
  n347 -->|Depends on| n20
  n347 -->|Depends on| n38
  n347 -->|Depends on| n348
  n347 -->|Depends on| n153
  n349 -->|Implements| n20
  n349 -->|Implements| n22
  n349 -->|Implements| n21
  n349 -->|Implements| n56
  n349 -->|Depends on| n38
  n349 -->|Depends on| n351
  n349 -->|Depends on| n279
  n350 -->|Implements| n25
  n350 -->|Implements| n46
  n350 -->|Depends on| n279
  n352 -->|Implements| n50
  n352 -->|Implements| n51
  n352 -->|Depends on| n345
  n352 -->|Depends on| n279
  n353 -->|Implements| n17
  n353 -->|Depends on| n50
  n353 -->|Depends on| n157
  n353 -->|Depends on| n151
  n353 -->|Depends on| n279
  n354 -->|Implements| n18
  n354 -->|Depends on| n315
  n355 -->|Implements| n24
  n356 -->|Implements| n25
  n357 -->|Chooses| n333
  n357 -->|Chooses| n335
  n357 -->|Chooses| n334
  n357 -->|Chooses| n360
  n357 -->|Chooses| n361
  n357 -->|Chooses| n362
  n357 -->|Chooses| n379
  n357 -->|Chooses| n367
  n357 -->|Chooses| n366
  n357 -->|Chooses| n356
  n357 -->|In| n29
  n357 -->|Serves| n428
  n358 -->|Implements| n38
  n359 -->|Chooses| n358
  n359 -->|Chooses| n355
  n359 -->|Chooses| n354
  n359 -->|Chooses| n363
  n359 -->|Chooses| n353
  n359 -->|Chooses| n372
  n359 -->|In| n29
  n359 -->|In| n52
  n359 -->|Serves| n428
  n360 -->|Implements| n40
  n360 -->|Depends on| n386
  n360 -->|Depends on| n158
  n361 -->|Implements| n42
  n361 -->|Depends on| n386
  n362 -->|Implements| n50
  n362 -->|Depends on| n279
  n363 -->|Implements| n53
  n364 -->|Implements| n32
  n364 -->|Depends on| n22
  n364 -->|Depends on| n38
  n364 -->|Depends on| n153
  n364 -->|Depends on| n292
  n365 -->|Implements| n33
  n366 -->|Implements| n32
  n367 -->|Implements| n33
  n368 -->|Depends on| n346
  n368 -->|Depends on| n347
  n369 -->|Chooses| n368
  n369 -->|In| n29
  n369 -->|In| n52
  n369 -->|Serves| n428
  n370 -->|Implements| n44
  n370 -->|Depends on| n336
  n370 -->|Depends on| n153
  n370 -->|Depends on| n214
  n370 -->|Depends on| n717
  n371 -->|Implements| n55
  n371 -->|Uses| n298
  n371 -->|Uses| n291
  n372 -->|Implements| n26
  n373 -->|Chooses| n204
  n373 -->|In| n29
  n373 -->|In| n52
  n373 -->|Serves| n428
  n374 -->|Implements| n45
  n375 -->|Chooses| n374
  n375 -->|In| n52
  n375 -->|Serves| n428
  n376 -->|Chooses| n377
  n376 -->|In| n29
  n376 -->|Serves| n428
  n377 -->|Implements| n45
  n377 -->|Depends on| n153
  n377 -->|Depends on| n336
  n377 -->|Depends on| n189
  n377 -->|Depends on| n195
  n378 -->|Implements| n16
  n378 -->|Depends on| n380
  n378 -->|Depends on| n381
  n379 -->|Implements| n16
  n379 -->|Depends on| n158
  n382 -->|Implements| n39
  n382 -->|Depends on| n336
  n383 -->|Chooses| n387
  n383 -->|In| n29
  n383 -->|In| n52
  n383 -->|Serves| n428
  n384 -->|Implements| n30
  n384 -->|Uses| n296
  n384 -->|Depends on| n39
  n384 -->|Depends on| n152
  n384 -->|Depends on| n717
  n385 -->|Chooses| n384
  n385 -->|In| n29
  n385 -->|In| n52
  n385 -->|Serves| n428
  n387 -->|Implements| n49
  n387 -->|Uses| n300
  n387 -->|Uses| n289
  n387 -->|Uses| n284
  n387 -->|Depends on| n279
  n388 -->|Serves| n427
  n388 -->|Applied by| n183
  n388 -->|Applied by| n129
  n389 -->|Serves| n434
  n389 -->|Applied by| n331
  n390 -->|Serves| n434
  n390 -->|Applied by| n183
  n390 -->|Applied by| n196
  n391 -->|Serves| n436
  n391 -->|Applied by| n615
  n391 -->|Applied by| n616
  n392 -->|Serves| n434
  n392 -->|Applied by| n191
  n392 -->|Applied by| n193
  n393 -->|Serves| n427
  n393 -->|Applied by| n121
  n393 -->|Applied by| n161
  n394 -->|Serves| n427
  n394 -->|Applied by| n54
  n394 -->|Applied by| n43
  n394 -->|Applied by| n31
  n394 -->|Applied by| n28
  n395 -->|Serves| n436
  n395 -->|Applied by| n616
  n395 -->|Applied by| n680
  n396 -->|Serves| n434
  n396 -->|Applied by| n183
  n396 -->|Applied by| n681
  n397 -->|Serves| n427
  n397 -->|Applied by| n666
  n398 -->|Serves| n427
  n398 -->|Applied by| n113
  n398 -->|Applied by| n212
  n398 -->|Applied by| n588
  n398 -->|Applied by| n594
  n399 -->|Serves| n427
  n399 -->|Applied by| n207
  n399 -->|Applied by| n55
  n399 -->|Applied by| n717
  n399 -->|Applied by| n148
  n400 -->|Serves| n427
  n400 -->|Applied by| n183
  n400 -->|Applied by| n119
  n401 -->|Serves| n434
  n401 -->|Applied by| n198
  n401 -->|Applied by| n133
  n402 -->|Serves| n434
  n402 -->|Applied by| n183
  n402 -->|Applied by| n182
  n402 -->|Applied by| n201
  n402 -->|Applied by| n207
  n402 -->|Applied by| n196
  n403 -->|Serves| n436
  n403 -->|Applied by| n203
  n403 -->|Applied by| n183
  n403 -->|Applied by| n182
  n403 -->|Applied by| n205
  n403 -->|Applied by| n258
  n403 -->|Applied by| n113
  n404 -->|Serves| n436
  n404 -->|Applied by| n203
  n404 -->|Applied by| n196
  n404 -->|Applied by| n145
  n404 -->|Applied by| n137
  n404 -->|Applied by| n261
  n404 -->|Applied by| n260
  n405 -->|Serves| n427
  n405 -->|Applied by| n167
  n405 -->|Applied by| n662
  n406 -->|Serves| n434
  n406 -->|Applied by| n673
  n406 -->|Applied by| n235
  n406 -->|Applied by| n183
  n406 -->|Applied by| n28
  n406 -->|Applied by| n31
  n407 -->|Serves| n427
  n407 -->|Applied by| n196
  n407 -->|Applied by| n183
  n407 -->|Applied by| n203
  n408 -->|Serves| n434
  n408 -->|Applied by| n183
  n408 -->|Applied by| n681
  n409 -->|Serves| n434
  n409 -->|Applied by| n119
  n409 -->|Applied by| n142
  n409 -->|Applied by| n199
  n409 -->|Applied by| n316
  n409 -->|Applied by| n181
  n410 -->|Serves| n427
  n410 -->|Applied by| n182
  n410 -->|Applied by| n193
  n410 -->|Applied by| n210
  n410 -->|Applied by| n43
  n411 -->|Serves| n436
  n411 -->|Applied by| n203
  n411 -->|Applied by| n145
  n411 -->|Applied by| n368
  n411 -->|Applied by| n369
  n411 -->|Applied by| n113
  n411 -->|Applied by| n196
  n411 -->|Applied by| n129
  n412 -->|Serves| n427
  n412 -->|Applied by| n342
  n412 -->|Applied by| n654
  n412 -->|Applied by| n642
  n412 -->|Applied by| n602
  n413 -->|Serves| n427
  n413 -->|Applied by| n39
  n413 -->|Applied by| n154
  n413 -->|Applied by| n150
  n413 -->|Applied by| n196
  n414 -->|Serves| n427
  n414 -->|Applied by| n373
  n414 -->|Applied by| n376
  n414 -->|Applied by| n375
  n415 -->|Serves| n436
  n415 -->|Applied by| n655
  n415 -->|Applied by| n652
  n415 -->|Applied by| n611
  n415 -->|Applied by| n610
  n416 -->|Serves| n427
  n416 -->|Applied by| n140
  n416 -->|Applied by| n134
  n416 -->|Applied by| n665
  n416 -->|Applied by| n670
  n416 -->|Applied by| n668
  n416 -->|Applied by| n634
  n416 -->|Applied by| n613
  n417 -->|Serves| n428
  n417 -->|Applied by| n359
  n417 -->|Applied by| n357
  n417 -->|Applied by| n343
  n417 -->|Applied by| n339
  n417 -->|Applied by| n383
  n417 -->|Applied by| n385
  n417 -->|Applied by| n332
  n417 -->|Applied by| n337
  n417 -->|Applied by| n572
  n417 -->|Applied by| n573
  n417 -->|Applied by| n584
  n417 -->|Applied by| n583
  n417 -->|Applied by| n578
  n417 -->|Applied by| n577
  n418 -->|Serves| n427
  n418 -->|Applied by| n113
  n418 -->|Applied by| n212
  n418 -->|Applied by| n589
  n418 -->|Applied by| n588
  n418 -->|Applied by| n599
  n419 -->|Serves| n427
  n419 -->|Applied by| n183
  n419 -->|Applied by| n211
  n420 -->|Serves| n427
  n420 -->|Applied by| n196
  n420 -->|Applied by| n599
  n421 -->|Serves| n427
  n421 -->|Applied by| n196
  n421 -->|Applied by| n210
  n421 -->|Applied by| n203
  n422 -->|Serves| n434
  n422 -->|Applied by| n681
  n422 -->|Applied by| n673
  n422 -->|Applied by| n269
  n422 -->|Applied by| n272
  n422 -->|Applied by| n276
  n422 -->|Applied by| n281
  n422 -->|Applied by| n277
  n422 -->|Applied by| n271
  n422 -->|Applied by| n268
  n422 -->|Applied by| n267
  n422 -->|Applied by| n279
  n422 -->|Applied by| n280
  n432 -->|Refines| n427
  n433 -->|Accepts| n432
  n437 -->|Releases| n54
  n438 -->|Releases| n54
  n438 -->|Assembled by| n560
  n439 -->|Releases| n54
  n439 -->|Assembled by| n570
  n440 -->|Releases| n54
  n440 -->|Assembled by| n439
  n441 -->|Releases| n54
  n441 -->|Assembled by| n440
  n442 -->|Releases| n54
  n442 -->|Assembled by| n441
  n443 -->|Releases| n54
  n443 -->|Assembled by| n442
  n444 -->|Releases| n54
  n444 -->|Assembled by| n443
  n445 -->|Releases| n54
  n445 -->|Assembled by| n444
  n446 -->|Releases| n54
  n446 -->|Assembled by| n445
  n447 -->|Releases| n54
  n447 -->|Assembled by| n446
  n448 -->|Releases| n54
  n448 -->|Assembled by| n447
  n449 -->|Releases| n54
  n449 -->|Assembled by| n438
  n450 -->|Releases| n54
  n450 -->|Assembled by| n448
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
  n470 -->|Assembled by| n469
  n471 -->|Releases| n54
  n471 -->|Assembled by| n460
  n472 -->|Releases| n54
  n472 -->|Assembled by| n470
  n473 -->|Releases| n54
  n473 -->|Assembled by| n472
  n474 -->|Releases| n54
  n474 -->|Assembled by| n473
  n475 -->|Releases| n54
  n475 -->|Assembled by| n474
  n476 -->|Releases| n54
  n476 -->|Assembled by| n475
  n477 -->|Releases| n54
  n477 -->|Assembled by| n471
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
  n483 -->|Assembled by| n437
  n484 -->|Releases| n54
  n484 -->|Assembled by| n482
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
  n492 -->|Assembled by| n491
  n493 -->|Releases| n54
  n493 -->|Assembled by| n492
  n494 -->|Releases| n54
  n494 -->|Assembled by| n483
  n495 -->|Releases| n54
  n495 -->|Assembled by| n493
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
  n503 -->|Assembled by| n502
  n504 -->|Releases| n54
  n504 -->|Assembled by| n503
  n505 -->|Releases| n54
  n505 -->|Assembled by| n494
  n506 -->|Releases| n54
  n506 -->|Assembled by| n504
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
  n514 -->|Assembled by| n513
  n515 -->|Releases| n54
  n515 -->|Assembled by| n514
  n516 -->|Releases| n54
  n516 -->|Assembled by| n505
  n517 -->|Releases| n54
  n517 -->|Assembled by| n515
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
  n525 -->|Assembled by| n524
  n526 -->|Releases| n54
  n526 -->|Assembled by| n525
  n527 -->|Releases| n54
  n527 -->|Assembled by| n516
  n528 -->|Releases| n54
  n528 -->|Assembled by| n526
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
  n536 -->|Assembled by| n535
  n537 -->|Releases| n54
  n537 -->|Assembled by| n536
  n538 -->|Releases| n54
  n538 -->|Assembled by| n527
  n539 -->|Releases| n54
  n539 -->|Assembled by| n537
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
  n547 -->|Assembled by| n546
  n548 -->|Releases| n54
  n548 -->|Assembled by| n547
  n549 -->|Releases| n54
  n549 -->|Assembled by| n538
  n550 -->|Releases| n54
  n550 -->|Assembled by| n548
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
  n558 -->|Assembled by| n557
  n559 -->|Releases| n54
  n559 -->|Assembled by| n558
  n560 -->|Releases| n54
  n560 -->|Assembled by| n549
  n561 -->|Releases| n54
  n561 -->|Assembled by| n559
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
  n569 -->|Releases| n54
  n569 -->|Assembled by| n568
  n570 -->|Releases| n54
  n570 -->|Assembled by| n569
  n571 -->|In| n29
  n571 -->|In| n52
  n571 -->|Serves| n428
  n572 -->|In| n29
  n572 -->|In| n52
  n572 -->|Serves| n428
  n573 -->|In| n29
  n573 -->|In| n52
  n573 -->|Serves| n428
  n574 -->|Serves| n427
  n574 -->|Implements| n580
  n574 -->|Depends on| n576
  n574 -->|Depends on| n264
  n574 -->|Depends on| n330
  n575 -->|Serves| n427
  n575 -->|Applied by| n579
  n575 -->|Applied by| n43
  n577 -->|Chooses| n582
  n577 -->|In| n29
  n577 -->|In| n52
  n577 -->|Serves| n428
  n578 -->|Chooses| n574
  n578 -->|In| n29
  n578 -->|In| n52
  n578 -->|Serves| n428
  n579 -->|Serves| n427
  n579 -->|Depends on| n580
  n581 -->|Serves| n428
  n581 -->|Applied by| n579
  n581 -->|Applied by| n572
  n581 -->|Applied by| n573
  n581 -->|Applied by| n584
  n581 -->|Applied by| n583
  n581 -->|Applied by| n578
  n581 -->|Applied by| n577
  n581 -->|Applied by| n571
  n582 -->|Serves| n427
  n582 -->|Implements| n576
  n582 -->|Depends on| n264
  n582 -->|Depends on| n266
  n582 -->|Depends on| n330
  n582 -->|Depends on| n1
  n582 -->|Depends on| n10
  n582 -->|Depends on| n2
  n582 -->|Depends on| n232
  n582 -->|Depends on| n222
  n582 -->|Depends on| n278
  n583 -->|In| n29
  n583 -->|In| n52
  n583 -->|Serves| n428
  n584 -->|In| n29
  n584 -->|In| n52
  n584 -->|Serves| n428
  n585 -->|Verifies| n596
  n585 -->|Verifies| n603
  n585 -->|In| n52
  n585 -->|Depends on| n601
  n585 -->|Depends on| n595
  n585 -->|Depends on| n280
  n586 -->|Verifies| n183
  n586 -->|Verifies| n211
  n586 -->|Verifies| n181
  n586 -->|Verifies| n720
  n586 -->|In| n52
  n586 -->|Depends on| n183
  n586 -->|Depends on| n40
  n586 -->|Depends on| n181
  n586 -->|Depends on| n150
  n586 -->|Depends on| n587
  n586 -->|Depends on| n280
  n588 -->|Verifies| n119
  n588 -->|Verifies| n131
  n588 -->|Verifies| n182
  n588 -->|Verifies| n210
  n588 -->|Verifies| n199
  n588 -->|Verifies| n198
  n588 -->|Verifies| n349
  n588 -->|Verifies| n352
  n588 -->|Verifies| n378
  n588 -->|In| n52
  n588 -->|Depends on| n119
  n588 -->|Depends on| n594
  n588 -->|Depends on| n56
  n588 -->|Depends on| n51
  n588 -->|Depends on| n153
  n588 -->|Depends on| n20
  n588 -->|Depends on| n38
  n588 -->|Depends on| n40
  n588 -->|Depends on| n157
  n588 -->|Depends on| n268
  n588 -->|Depends on| n280
  n589 -->|Verifies| n183
  n589 -->|Verifies| n203
  n589 -->|Verifies| n207
  n589 -->|Verifies| n211
  n589 -->|Verifies| n193
  n589 -->|Verifies| n371
  n589 -->|Verifies| n384
  n589 -->|Verifies| n382
  n589 -->|Verifies| n349
  n589 -->|Verifies| n358
  n589 -->|Verifies| n340
  n589 -->|Verifies| n372
  n589 -->|In| n52
  n589 -->|Depends on| n183
  n589 -->|Depends on| n40
  n589 -->|Depends on| n16
  n589 -->|Depends on| n593
  n589 -->|Depends on| n280
  n590 -->|Verifies| n180
  n590 -->|Verifies| n299
  n590 -->|Verifies| n178
  n590 -->|In| n52
  n590 -->|Depends on| n180
  n590 -->|Depends on| n275
  n590 -->|Depends on| n299
  n590 -->|Depends on| n591
  n590 -->|Depends on| n280
  n592 -->|Verifies| n184
  n592 -->|Verifies| n192
  n592 -->|Verifies| n191
  n592 -->|Verifies| n205
  n592 -->|Verifies| n202
  n592 -->|In| n52
  n592 -->|Depends on| n184
  n592 -->|Depends on| n192
  n592 -->|Depends on| n191
  n592 -->|Depends on| n205
  n592 -->|Depends on| n202
  n592 -->|Depends on| n600
  n592 -->|Depends on| n280
  n596 -->|Implements| n601
  n596 -->|Depends on| n595
  n598 -->|Verifies| n194
  n598 -->|In| n52
  n598 -->|Depends on| n194
  n598 -->|Depends on| n597
  n598 -->|Depends on| n280
  n599 -->|Verifies| n196
  n599 -->|In| n52
  n599 -->|Depends on| n196
  n599 -->|Depends on| n183
  n599 -->|Depends on| n40
  n599 -->|Depends on| n16
  n599 -->|Depends on| n280
  n602 -->|Chooses| n603
  n602 -->|Chooses| n596
  n602 -->|In| n52
  n603 -->|Implements| n601
  n603 -->|Depends on| n595
  n604 -->|Serves| n427
  n604 -->|Part of| n661
  n604 -->|Depends on| n40
  n604 -->|Depends on| n153
  n604 -->|Depends on| n157
  n604 -->|Depends on| n627
  n604 -->|Depends on| n618
  n604 -->|Depends on| n717
  n604 -->|Depends on| n713
  n604 -->|Depends on| n656
  n605 -->|Verifies| n604
  n605 -->|In| n52
  n605 -->|Depends on| n604
  n605 -->|Depends on| n41
  n605 -->|Depends on| n157
  n605 -->|Depends on| n627
  n605 -->|Depends on| n606
  n605 -->|Depends on| n713
  n605 -->|Depends on| n280
  n607 -->|Serves| n427
  n607 -->|Part of| n661
  n607 -->|Depends on| n660
  n607 -->|Depends on| n631
  n607 -->|Depends on| n656
  n608 -->|Serves| n427
  n609 -->|Serves| n427
  n610 -->|In| n47
  n611 -->|In| n29
  n612 -->|Serves| n427
  n613 -->|Checks| n618
  n613 -->|Run by| n143
  n613 -->|Signed by| n632
  n614 -->|Checks| n618
  n614 -->|Run by| n123
  n614 -->|Signed by| n632
  n614 -->|Verifies| n333
  n614 -->|Verifies| n335
  n614 -->|Verifies| n334
  n614 -->|Verifies| n360
  n614 -->|Verifies| n361
  n614 -->|Verifies| n362
  n614 -->|Verifies| n379
  n614 -->|Verifies| n367
  n614 -->|Verifies| n366
  n614 -->|Verifies| n356
  n614 -->|Verifies| n377
  n615 -->|Chooses| n641
  n615 -->|Chooses| n640
  n615 -->|In| n29
  n615 -->|In| n47
  n615 -->|Serves| n427
  n616 -->|In| n29
  n616 -->|Serves| n427
  n617 -->|Serves| n427
  n618 -->|Produced by| n54
  n619 -->|Serves| n427
  n620 -->|Serves| n427
  n621 -->|Its obligations| n620
  n621 -->|Its obligations| n629
  n621 -->|Its obligations| n608
  n621 -->|Its obligations| n612
  n621 -->|Its obligations| n609
  n621 -->|Its obligations| n619
  n621 -->|Its obligations| n617
  n622 -->|Produced by| n127
  n622 -->|Carries| n35
  n624 -->|Checks| n622
  n624 -->|Run by| n636
  n624 -->|Signed by| n632
  n624 -->|Verifies| n63
  n624 -->|Verifies| n62
  n624 -->|Verifies| n61
  n624 -->|Verifies| n60
  n624 -->|Verifies| n59
  n624 -->|Verifies| n57
  n624 -->|Verifies| n58
  n626 -->|Serves| n427
  n626 -->|Depends on| n319
  n626 -->|Depends on| n264
  n626 -->|Depends on| n220
  n628 -->|Ships| n659
  n628 -->|Requires| n630
  n628 -->|Requires| n644
  n628 -->|Programs assembled for| n29
  n628 -->|Follows the policy| n633
  n629 -->|Serves| n427
  n630 -->|Signed by| n632
  n630 -->|Verifies| n639
  n633 -->|Its obligations| n620
  n633 -->|Its obligations| n609
  n634 -->|Ships| n618
  n634 -->|Ships| n643
  n634 -->|Ships| n622
  n634 -->|Deployed by| n113
  n634 -->|Programs assembled for| n29
  n634 -->|Follows the policy| n621
  n635 -->|Verifies| n636
  n635 -->|Verifies| n626
  n635 -->|In| n52
  n635 -->|Depends on| n636
  n635 -->|Depends on| n622
  n635 -->|Depends on| n626
  n635 -->|Depends on| n656
  n635 -->|Depends on| n625
  n635 -->|Depends on| n280
  n636 -->|Serves| n427
  n636 -->|Part of| n661
  n636 -->|Depends on| n622
  n636 -->|Depends on| n275
  n636 -->|Depends on| n626
  n636 -->|Depends on| n623
  n636 -->|Depends on| n656
  n637 -->|Verifies| n641
  n637 -->|Verifies| n640
  n637 -->|In| n52
  n637 -->|Depends on| n660
  n637 -->|Depends on| n631
  n637 -->|Depends on| n648
  n637 -->|Depends on| n153
  n637 -->|Depends on| n157
  n637 -->|Depends on| n380
  n637 -->|Depends on| n645
  n637 -->|Depends on| n280
  n639 -->|Depends on| n638
  n640 -->|Serves| n427
  n640 -->|Depends on| n153
  n640 -->|Depends on| n155
  n640 -->|Depends on| n717
  n640 -->|Depends on| n157
  n640 -->|Depends on| n158
  n640 -->|Depends on| n380
  n640 -->|Depends on| n648
  n641 -->|Serves| n427
  n641 -->|Depends on| n660
  n641 -->|Depends on| n631
  n641 -->|Depends on| n645
  n641 -->|Depends on| n153
  n641 -->|Depends on| n648
  n642 -->|Chooses| n641
  n642 -->|Chooses| n640
  n642 -->|In| n52
  n643 -->|Produced by| n35
  n643 -->|Assembled for| n14
  n644 -->|Signed by| n632
  n646 -->|Runs elsewhere| n628
  n646 -->|Its writer's settings| n645
  n647 -->|Serves| n427
  n647 -->|Part of| n661
  n647 -->|Depends on| n660
  n647 -->|Depends on| n631
  n647 -->|Depends on| n656
  n649 -->|Run by| n647
  n649 -->|Signed by| n632
  n651 -->|Requires| n649
  n651 -->|Deployed by| n607
  n651 -->|Programs assembled for| n29
  n651 -->|Follows the policy| n657
  n652 -->|In| n29
  n652 -->|In| n47
  n653 -->|Ships| n646
  n654 -->|In| n52
  n655 -->|In| n29
  n655 -->|In| n47
  n656 -->|Written in| n275
  n657 -->|Its obligations| n620
  n657 -->|Its obligations| n609
  n657 -->|Its obligations| n617
  n658 -->|Verifies| n647
  n658 -->|Verifies| n607
  n658 -->|In| n52
  n658 -->|Depends on| n647
  n658 -->|Depends on| n607
  n658 -->|Depends on| n660
  n658 -->|Depends on| n631
  n658 -->|Depends on| n650
  n658 -->|Depends on| n656
  n658 -->|Depends on| n280
  n661 -->|Deployed in| n29
  n662 -->|Chooses| n639
  n662 -->|In| n29
  n662 -->|In| n47
  n663 -->|Implements| n48
  n663 -->|Depends on| n24
  n665 -->|Serves| n427
  n665 -->|Depends on| n153
  n665 -->|Depends on| n670
  n665 -->|Depends on| n20
  n665 -->|Depends on| n38
  n665 -->|Depends on| n24
  n665 -->|Depends on| n191
  n665 -->|Depends on| n48
  n666 -->|Chooses| n663
  n666 -->|In| n29
  n666 -->|In| n52
  n666 -->|Serves| n427
  n667 -->|Serves| n427
  n667 -->|Depends on| n157
  n667 -->|Depends on| n203
  n667 -->|Depends on| n153
  n667 -->|Depends on| n215
  n667 -->|Depends on| n20
  n667 -->|Depends on| n38
  n668 -->|Refines| n427
  n669 -->|Accepts| n668
  n673 -->|Serves| n427
  n673 -->|Depends on| n154
  n673 -->|Depends on| n272
  n677 -->|Written in| n275
  n678 -->|Serves| n427
  n678 -->|Applied by| n681
  n678 -->|Applied by| n49
  n679 -->|Serves| n427
  n679 -->|Applied by| n681
  n679 -->|Applied by| n673
  n679 -->|Applied by| n49
  n680 -->|In| n52
  n680 -->|Serves| n427
  n681 -->|Serves| n427
  n681 -->|Serves| n434
  n681 -->|Depends on| n49
  n681 -->|Depends on| n674
  n681 -->|Depends on| n677
  n681 -->|Depends on| n675
  n681 -->|Depends on| n676
  n681 -->|Depends on| n671
  n681 -->|Depends on| n20
  n681 -->|Depends on| n26
  n681 -->|Depends on| n45
  n681 -->|Depends on| n153
  n681 -->|Depends on| n38
  n681 -->|Depends on| n24
  n682 -->|Defined by| n685
  n682 -->|Read in| n688
  n682 -->|Depends on| n685
  n683 -->|Defined by| n685
  n683 -->|Read in| n688
  n683 -->|Depends on| n685
  n684 -->|Defined by| n685
  n684 -->|Read in| n688
  n684 -->|Depends on| n685
  n684 -->|Depends on| n688
  n686 -->|Defined by| n685
  n686 -->|Read in| n688
  n686 -->|Depends on| n685
  n686 -->|Depends on| n684
  n687 -->|Defined by| n685
  n687 -->|Read in| n688
  n687 -->|Depends on| n685
  n687 -->|Depends on| n689
  n687 -->|Depends on| n684
  n688 -->|Defined by| n685
  n688 -->|Read by| n681
  n688 -->|Uses| n288
  n690 -->|Serves| n427
  n690 -->|Depends on| n685
  n690 -->|Depends on| n689
  n690 -->|Depends on| n153
  n690 -->|Depends on| n683
  n690 -->|Depends on| n684
  n690 -->|Depends on| n686
  n690 -->|Depends on| n682
  n690 -->|Depends on| n687
  n690 -->|Depends on| n38
  n690 -->|Depends on| n39
  n690 -->|Depends on| n272
  n691 -->|Defined by| n719
  n691 -->|Read in| n717
  n691 -->|Depends on| n719
  n692 -->|Defined by| n719
  n692 -->|Read in| n717
  n692 -->|Depends on| n719
  n693 -->|Defined by| n719
  n693 -->|Read in| n717
  n693 -->|Depends on| n719
  n694 -->|Defined by| n719
  n694 -->|Read in| n717
  n694 -->|Depends on| n719
  n695 -->|Defined by| n719
  n695 -->|Read in| n717
  n695 -->|Depends on| n719
  n696 -->|Defined by| n719
  n696 -->|Read in| n717
  n696 -->|Depends on| n719
  n697 -->|Defined by| n719
  n697 -->|Read in| n717
  n697 -->|Depends on| n719
  n698 -->|Defined by| n719
  n698 -->|Read in| n717
  n698 -->|Depends on| n719
  n698 -->|Depends on| n716
  n699 -->|Defined by| n719
  n699 -->|Read in| n717
  n699 -->|Depends on| n719
  n700 -->|Defined by| n719
  n700 -->|Read in| n717
  n700 -->|Depends on| n719
  n701 -->|Defined by| n719
  n701 -->|Read in| n717
  n701 -->|Depends on| n719
  n702 -->|Defined by| n719
  n702 -->|Read in| n717
  n702 -->|Depends on| n719
  n703 -->|Defined by| n719
  n703 -->|Read in| n717
  n703 -->|Depends on| n719
  n704 -->|Defined by| n719
  n704 -->|Read in| n717
  n704 -->|Depends on| n719
  n705 -->|Defined by| n719
  n705 -->|Read in| n717
  n705 -->|Depends on| n719
  n706 -->|Defined by| n719
  n706 -->|Read in| n717
  n706 -->|Depends on| n719
  n706 -->|Depends on| n716
  n707 -->|Defined by| n719
  n707 -->|Read in| n717
  n707 -->|Depends on| n719
  n708 -->|Defined by| n719
  n708 -->|Read in| n717
  n708 -->|Depends on| n719
  n709 -->|Defined by| n719
  n709 -->|Read in| n717
  n709 -->|Depends on| n719
  n710 -->|Defined by| n719
  n710 -->|Read in| n717
  n710 -->|Depends on| n719
  n711 -->|Defined by| n719
  n711 -->|Read in| n717
  n711 -->|Depends on| n719
  n712 -->|Defined by| n719
  n712 -->|Read in| n717
  n712 -->|Depends on| n719
  n714 -->|Defined by| n719
  n714 -->|Read in| n717
  n714 -->|Depends on| n719
  n714 -->|Depends on| n716
  n715 -->|Defined by| n719
  n715 -->|Read in| n717
  n715 -->|Depends on| n719
  n716 -->|Defined by| n719
  n716 -->|Read in| n717
  n716 -->|Depends on| n719
  n717 -->|Read by| n681
  n717 -->|Watches the globals| n722
  n717 -->|Uses| n297
  n718 -->|Serves| n427
  n720 -->|Serves| n427
  n720 -->|Depends on| n717
  n720 -->|Depends on| n719
  n720 -->|Depends on| n150
  n720 -->|Depends on| n713
  n720 -->|Depends on| n156
  n720 -->|Depends on| n703
  n720 -->|Depends on| n716
  n720 -->|Depends on| n704
  n720 -->|Depends on| n710
  n720 -->|Depends on| n696
  n720 -->|Depends on| n695
  n720 -->|Depends on| n712
  n720 -->|Depends on| n714
  n720 -->|Depends on| n708
  n720 -->|Depends on| n691
  n720 -->|Depends on| n697
  n720 -->|Depends on| n706
  n720 -->|Depends on| n698
  n720 -->|Depends on| n692
  n720 -->|Depends on| n711
  n720 -->|Depends on| n709
  n720 -->|Depends on| n721
  n720 -->|Depends on| n701
  n720 -->|Depends on| n715
  n720 -->|Depends on| n693
  n720 -->|Depends on| n702
  n720 -->|Depends on| n694
  n720 -->|Depends on| n158
  n720 -->|Depends on| n38
  n720 -->|Depends on| n39
  n720 -->|Depends on| n272
  n721 -->|Defined by| n719
  n721 -->|Read in| n717
  n721 -->|Depends on| n719
  n43 -.->|Depends on| n39
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
