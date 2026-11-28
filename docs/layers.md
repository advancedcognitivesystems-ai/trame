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
    n189["Files an editor leaves<br/><small>Decision</small>"]:::neutral
    n190["The fingerprint of an engine<br/><small>Function</small>"]:::held
    n191["Length of a fingerprint<br/><small>Decision</small>"]:::neutral
    n192["Fingerprints<br/><small>Function</small>"]:::held
    n193["Pseudo-random generator<br/><small>Function</small>"]:::held
    n194["Graph<br/><small>Function</small>"]:::held
    n195["Judged harder<br/><small>Function</small>"]:::held
    n196["What tells a project's runs apart<br/><small>Decision</small>"]:::neutral
    n197["Laws<br/><small>Function</small>"]:::held
    n198["The laws are requirements<br/><small>Architecture decision</small>"]:::held
    n199["Lock<br/><small>Function</small>"]:::held
    n200["Machine outputs<br/><small>Function</small>"]:::held
    n201["The days of history a page offers<br/><small>Decision</small>"]:::neutral
    n202["Payload<br/><small>Function</small>"]:::held
    n203["Positions<br/><small>Function</small>"]:::held
    n204["Project<br/><small>Function</small>"]:::held
    n205["The runs of a project<br/><small>Function</small>"]:::held
    n206["References<br/><small>Function</small>"]:::held
    n207["A shipment's pipeline<br/><small>Function</small>"]:::held
    n208["Static reading<br/><small>Function</small>"]:::held
    n209["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
    n210["Options of the static reading<br/><small>Decision</small>"]:::neutral
    n211["Views<br/><small>Function</small>"]:::held
    n212["Watching a project<br/><small>Function</small>"]:::held
    n213["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n214["Accept a candidate<br/><small>Requirement</small>"]:::held
    n215["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n216["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n217["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n218["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n219["Records of the releases<br/><small>Function</small>"]:::held
    n220["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS of the page"]
    n221["Attribute presence<br/><small>Syntax element</small>"]:::held
    n222["Attribute selector<br/><small>Syntax element</small>"]:::held
    n223["Class selector<br/><small>Syntax element</small>"]:::held
    n224["Declaration<br/><small>Syntax element</small>"]:::held
    n225["Rule<br/><small>Syntax element</small>"]:::held
    n226["Variable<br/><small>Syntax element</small>"]:::held
    n227["Custom property<br/><small>Syntax element</small>"]:::held
    n228["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n229["Element over several lines<br/><small>Syntax element</small>"]:::held
    n230["JSON in a script<br/><small>Syntax element</small>"]:::held
    n231["Media feature<br/><small>Syntax element</small>"]:::held
    n232["Media rule<br/><small>Syntax element</small>"]:::held
    n233["Negation<br/><small>Syntax element</small>"]:::held
    n234["Path data<br/><small>Syntax element</small>"]:::held
    n235["Script<br/><small>Syntax element</small>"]:::held
    n236["Selector list<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n237["Drivers<br/><small>Function</small>"]:::held
    n238["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n239["Answers without crashing<br/><small>Requirement</small>"]:::held
    n240["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n241["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n242["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n243["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n244["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n245["Complete declaration<br/><small>Requirement</small>"]:::held
    n246["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n247["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n248["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n249["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n250["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n251["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n252["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n253["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n254["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n255["Same input, same answer<br/><small>Requirement</small>"]:::held
    n256["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n257["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n258["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n259["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n260["What belongs to a library<br/><small>Requirement</small>"]:::held
    n261["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n262["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n263["A release is settled<br/><small>Requirement</small>"]:::held
    n264["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n265["Around the documents<br/><small>Decision</small>"]:::neutral
    n266["Documents in the page<br/><small>Decision</small>"]:::neutral
    n267["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n268["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Trame · Messages"]
    n269["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n270["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n271["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n272["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n273["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n274["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n275["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n276["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n277["Language<br/><small>Decision</small>"]:::neutral
    n278["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n279["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n280["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n281["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n282["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n283["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n284["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n285["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n286["Grammar of CSS<br/><small>Package</small>"]:::held
    n287["The renderers of documents<br/><small>Package</small>"]:::neutral
    n288["esbuild<br/><small>Package</small>"]:::held
    n289["The commands every project runs<br/><small>Package</small>"]:::neutral
    n290["Grammar of HCL<br/><small>Package</small>"]:::held
    n291["Grammar of HTML<br/><small>Package</small>"]:::held
    n292["The questions of the machine<br/><small>Package</small>"]:::neutral
    n293["Types of Node.js<br/><small>Package</small>"]:::held
    n294["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n295["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n296["The people of the repository<br/><small>Package</small>"]:::neutral
    n297["The standard library<br/><small>Package</small>"]:::neutral
    n298["tsx<br/><small>Package</small>"]:::held
    n299["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n300["TypeScript<br/><small>Package</small>"]:::held
    n301["Order of versions<br/><small>Function</small>"]:::held
    n302["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n303["Banner<br/><small>Syntax element</small>"]:::held
    n304["Brand<br/><small>Syntax element</small>"]:::held
    n305["State of the compilation<br/><small>Syntax element</small>"]:::held
    n306["Dates<br/><small>Syntax element</small>"]:::held
    n307["Head of the document<br/><small>Syntax element</small>"]:::held
    n308["Document picker<br/><small>Syntax element</small>"]:::held
    n309["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n310["Fonts<br/><small>Syntax element</small>"]:::held
    n311["Logo<br/><small>Syntax element</small>"]:::held
    n312["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n313["Main area<br/><small>Syntax element</small>"]:::held
    n314["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n315["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n316["Navigation<br/><small>Syntax element</small>"]:::held
    n317["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n318["Page<br/><small>Function</small>"]:::held
    n319["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n320["Document of the page<br/><small>Syntax element</small>"]:::held
    n321["Regions of the page<br/><small>Decision</small>"]:::neutral
    n322["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n323["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n324["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n325["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n326["Shell<br/><small>Syntax element</small>"]:::held
    n327["Side bar<br/><small>Syntax element</small>"]:::held
    n328["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n329["Colours of a status<br/><small>Syntax element</small>"]:::held
    n330["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n331["Theme<br/><small>Syntax element</small>"]:::held
    n332["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n333["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n334["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n335["System files, for reading<br/><small>Implementation</small>"]:::unknown
    n336["Trees on disk<br/><small>Implementation</small>"]:::unknown
    n337["System files, for writing<br/><small>Implementation</small>"]:::unknown
    n338["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n339["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n340["esbuild<br/><small>Implementation</small>"]:::held
    n341["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n342["Example process<br/><small>Function</small>"]:::held
    n343["Example project<br/><small>Decision</small>"]:::neutral
    n344["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n345["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n346["Amendments in place<br/><small>Implementation</small>"]:::held
    n347["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n348["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n349["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n350["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n351["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n352["A server in memory<br/><small>Function</small>"]:::held
    n353["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n354["Terminal in memory<br/><small>Function</small>"]:::held
    n355["Command line<br/><small>Implementation</small>"]:::held
    n356["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n357["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n358["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n359["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::unknown
    n360["Node paths<br/><small>Implementation</small>"]:::held
    n361["NodePlatform<br/><small>Technical choice</small>"]:::held
    n362["Node process<br/><small>Implementation</small>"]:::unknown
    n363["Node programs<br/><small>Implementation</small>"]:::unknown
    n364["Node terminal<br/><small>Implementation</small>"]:::unknown
    n365["Node timer<br/><small>Implementation</small>"]:::held
    n366["No installer in test<br/><small>Implementation</small>"]:::held
    n367["No registry in test<br/><small>Function</small>"]:::held
    n368["npm installs<br/><small>Implementation</small>"]:::unknown
    n369["npm's reports<br/><small>Implementation</small>"]:::unknown
    n370["Packages by their origin<br/><small>Implementation</small>"]:::held
    n371["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n372["Page resources<br/><small>Implementation</small>"]:::held
    n373["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n374["Results kept in the process<br/><small>Implementation</small>"]:::held
    n375["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n376["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n377["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n378["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::unknown
    n379["Runs kept on disk<br/><small>Implementation</small>"]:::unknown
    n380["Stopped clock<br/><small>Function</small>"]:::held
    n381["System clock<br/><small>Implementation</small>"]:::unknown
    n382["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n383["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n384["Trame's prelude<br/><small>Implementation</small>"]:::held
    n385["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n386["tsx loader<br/><small>Implementation</small>"]:::held
    n387["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n388["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n389["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n390["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n391["An amendment sits beside the value it changes<br/><small>Architecture decision</small>"]:::held
    n392["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n393["Trame runs the commands libraries offer<br/><small>Architecture decision</small>"]:::unknown
    n394["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n395["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n396["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n397["The engine is a provider, for Trame too<br/><small>Architecture decision</small>"]:::unknown
    n398["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n399["Evidence is sealed<br/><small>Architecture decision</small>"]:::held
    n400["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n401["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n402["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n403["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n404["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n405["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n406["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n407["Every question of the machine is an add-on<br/><small>Architecture decision</small>"]:::unknown
    n408["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n409["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n410["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n411["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n412["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n413["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n414["What a command does is played in memory first<br/><small>Architecture decision</small>"]:::held
    n415["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n416["A run is kept while what it reads is as it was<br/><small>Architecture decision</small>"]:::unknown
    n417["Trame's SDLC runs with std's tooling<br/><small>Architecture decision</small>"]:::unknown
    n418["A version ships through the graph<br/><small>Architecture decision</small>"]:::unknown
    n419["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::unknown
    n420["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
    n421["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
    n422["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
    n423["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
    n424["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Trame · Product"]
    n425["Candidate dates<br/><small>Decision</small>"]:::neutral
    n426["Claim sets<br/><small>Decision</small>"]:::neutral
    n427["Debouncing of saves<br/><small>Decision</small>"]:::neutral
    n428["Port of trame dev<br/><small>Decision</small>"]:::neutral
    n429["A specification that runs<br/><small>Goal</small>"]:::neutral
    n430["A technology is changed in one node<br/><small>Goal</small>"]:::neutral
    n431["Nodes drawn per kind<br/><small>Decision</small>"]:::neutral
    n432["Owners drawn at random<br/><small>Decision</small>"]:::neutral
    n433["Values drawn by the laws<br/><small>Decision</small>"]:::neutral
    n434["Sort problems by severity<br/><small>Requirement</small>"]:::held
    n435["Criteria of the sort by severity<br/><small>Acceptance criteria</small>"]:::held
    n436["A single source of truth<br/><small>Goal</small>"]:::neutral
    n437["Values drawn by the laws of a structure<br/><small>Decision</small>"]:::neutral
    n438["What is generic is written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Trame · Releases"]
    n439["Generation 1<br/><small>Release</small>"]:::neutral
    n440["Generation 10<br/><small>Release</small>"]:::neutral
    n441["Generation 100<br/><small>Release</small>"]:::neutral
    n442["Generation 101<br/><small>Release</small>"]:::neutral
    n443["Generation 102<br/><small>Release</small>"]:::neutral
    n444["Generation 103<br/><small>Release</small>"]:::neutral
    n445["Generation 104<br/><small>Release</small>"]:::neutral
    n446["Generation 105<br/><small>Release</small>"]:::neutral
    n447["Generation 106<br/><small>Release</small>"]:::neutral
    n448["Generation 107<br/><small>Release</small>"]:::neutral
    n449["Generation 108<br/><small>Release</small>"]:::neutral
    n450["Generation 109<br/><small>Release</small>"]:::neutral
    n451["Generation 11<br/><small>Release</small>"]:::neutral
    n452["Generation 110<br/><small>Release</small>"]:::neutral
    n453["Generation 111<br/><small>Release</small>"]:::neutral
    n454["Generation 112<br/><small>Release</small>"]:::neutral
    n455["Generation 113<br/><small>Release</small>"]:::neutral
    n456["Generation 114<br/><small>Release</small>"]:::neutral
    n457["Generation 115<br/><small>Release</small>"]:::neutral
    n458["Generation 116<br/><small>Release</small>"]:::neutral
    n459["Generation 117<br/><small>Release</small>"]:::neutral
    n460["Generation 118<br/><small>Release</small>"]:::neutral
    n461["Generation 119<br/><small>Release</small>"]:::neutral
    n462["Generation 12<br/><small>Release</small>"]:::neutral
    n463["Generation 120<br/><small>Release</small>"]:::neutral
    n464["Generation 121<br/><small>Release</small>"]:::neutral
    n465["Generation 122<br/><small>Release</small>"]:::neutral
    n466["Generation 123<br/><small>Release</small>"]:::neutral
    n467["Generation 124<br/><small>Release</small>"]:::neutral
    n468["Generation 125<br/><small>Release</small>"]:::neutral
    n469["Generation 126<br/><small>Release</small>"]:::neutral
    n470["Generation 127<br/><small>Release</small>"]:::neutral
    n471["Generation 128<br/><small>Release</small>"]:::neutral
    n472["Generation 129<br/><small>Release</small>"]:::neutral
    n473["Generation 13<br/><small>Release</small>"]:::neutral
    n474["Generation 130<br/><small>Release</small>"]:::neutral
    n475["Generation 131<br/><small>Release</small>"]:::neutral
    n476["Generation 132<br/><small>Release</small>"]:::neutral
    n477["Generation 133<br/><small>Release</small>"]:::neutral
    n478["Generation 134<br/><small>Release</small>"]:::neutral
    n479["Generation 135<br/><small>Release</small>"]:::neutral
    n480["Generation 14<br/><small>Release</small>"]:::neutral
    n481["Generation 15<br/><small>Release</small>"]:::neutral
    n482["Generation 16<br/><small>Release</small>"]:::neutral
    n483["Generation 17<br/><small>Release</small>"]:::neutral
    n484["Generation 18<br/><small>Release</small>"]:::neutral
    n485["Generation 19<br/><small>Release</small>"]:::neutral
    n486["Generation 2<br/><small>Release</small>"]:::neutral
    n487["Generation 20<br/><small>Release</small>"]:::neutral
    n488["Generation 21<br/><small>Release</small>"]:::neutral
    n489["Generation 22<br/><small>Release</small>"]:::neutral
    n490["Generation 23<br/><small>Release</small>"]:::neutral
    n491["Generation 24<br/><small>Release</small>"]:::neutral
    n492["Generation 25<br/><small>Release</small>"]:::neutral
    n493["Generation 26<br/><small>Release</small>"]:::neutral
    n494["Generation 27<br/><small>Release</small>"]:::neutral
    n495["Generation 28<br/><small>Release</small>"]:::neutral
    n496["Generation 29<br/><small>Release</small>"]:::neutral
    n497["Generation 3<br/><small>Release</small>"]:::neutral
    n498["Generation 30<br/><small>Release</small>"]:::neutral
    n499["Generation 31<br/><small>Release</small>"]:::neutral
    n500["Generation 32<br/><small>Release</small>"]:::neutral
    n501["Generation 33<br/><small>Release</small>"]:::neutral
    n502["Generation 34<br/><small>Release</small>"]:::neutral
    n503["Generation 35<br/><small>Release</small>"]:::neutral
    n504["Generation 36<br/><small>Release</small>"]:::neutral
    n505["Generation 37<br/><small>Release</small>"]:::neutral
    n506["Generation 38<br/><small>Release</small>"]:::neutral
    n507["Generation 39<br/><small>Release</small>"]:::neutral
    n508["Generation 4<br/><small>Release</small>"]:::neutral
    n509["Generation 40<br/><small>Release</small>"]:::neutral
    n510["Generation 41<br/><small>Release</small>"]:::neutral
    n511["Generation 42<br/><small>Release</small>"]:::neutral
    n512["Generation 43<br/><small>Release</small>"]:::neutral
    n513["Generation 44<br/><small>Release</small>"]:::neutral
    n514["Generation 45<br/><small>Release</small>"]:::neutral
    n515["Generation 46<br/><small>Release</small>"]:::neutral
    n516["Generation 47<br/><small>Release</small>"]:::neutral
    n517["Generation 48<br/><small>Release</small>"]:::neutral
    n518["Generation 49<br/><small>Release</small>"]:::neutral
    n519["Generation 5<br/><small>Release</small>"]:::neutral
    n520["Generation 50<br/><small>Release</small>"]:::neutral
    n521["Generation 51<br/><small>Release</small>"]:::neutral
    n522["Generation 52<br/><small>Release</small>"]:::neutral
    n523["Generation 53<br/><small>Release</small>"]:::neutral
    n524["Generation 54<br/><small>Release</small>"]:::neutral
    n525["Generation 55<br/><small>Release</small>"]:::neutral
    n526["Generation 56<br/><small>Release</small>"]:::neutral
    n527["Generation 57<br/><small>Release</small>"]:::neutral
    n528["Generation 58<br/><small>Release</small>"]:::neutral
    n529["Generation 59<br/><small>Release</small>"]:::neutral
    n530["Generation 6<br/><small>Release</small>"]:::neutral
    n531["Generation 60<br/><small>Release</small>"]:::neutral
    n532["Generation 61<br/><small>Release</small>"]:::neutral
    n533["Generation 62<br/><small>Release</small>"]:::neutral
    n534["Generation 63<br/><small>Release</small>"]:::neutral
    n535["Generation 64<br/><small>Release</small>"]:::neutral
    n536["Generation 65<br/><small>Release</small>"]:::neutral
    n537["Generation 66<br/><small>Release</small>"]:::neutral
    n538["Generation 67<br/><small>Release</small>"]:::neutral
    n539["Generation 68<br/><small>Release</small>"]:::neutral
    n540["Generation 69<br/><small>Release</small>"]:::neutral
    n541["Generation 7<br/><small>Release</small>"]:::neutral
    n542["Generation 70<br/><small>Release</small>"]:::neutral
    n543["Generation 71<br/><small>Release</small>"]:::neutral
    n544["Generation 72<br/><small>Release</small>"]:::neutral
    n545["Generation 73<br/><small>Release</small>"]:::neutral
    n546["Generation 74<br/><small>Release</small>"]:::neutral
    n547["Generation 75<br/><small>Release</small>"]:::neutral
    n548["Generation 76<br/><small>Release</small>"]:::neutral
    n549["Generation 77<br/><small>Release</small>"]:::neutral
    n550["Generation 78<br/><small>Release</small>"]:::neutral
    n551["Generation 79<br/><small>Release</small>"]:::neutral
    n552["Generation 8<br/><small>Release</small>"]:::neutral
    n553["Generation 80<br/><small>Release</small>"]:::neutral
    n554["Generation 81<br/><small>Release</small>"]:::neutral
    n555["Generation 82<br/><small>Release</small>"]:::neutral
    n556["Generation 83<br/><small>Release</small>"]:::neutral
    n557["Generation 84<br/><small>Release</small>"]:::neutral
    n558["Generation 85<br/><small>Release</small>"]:::neutral
    n559["Generation 86<br/><small>Release</small>"]:::neutral
    n560["Generation 87<br/><small>Release</small>"]:::neutral
    n561["Generation 88<br/><small>Release</small>"]:::neutral
    n562["Generation 89<br/><small>Release</small>"]:::neutral
    n563["Generation 9<br/><small>Release</small>"]:::neutral
    n564["Generation 90<br/><small>Release</small>"]:::neutral
    n565["Generation 91<br/><small>Release</small>"]:::neutral
    n566["Generation 92<br/><small>Release</small>"]:::neutral
    n567["Generation 93<br/><small>Release</small>"]:::neutral
    n568["Generation 94<br/><small>Release</small>"]:::neutral
    n569["Generation 95<br/><small>Release</small>"]:::neutral
    n570["Generation 96<br/><small>Release</small>"]:::neutral
    n571["Generation 97<br/><small>Release</small>"]:::neutral
    n572["Generation 98<br/><small>Release</small>"]:::neutral
    n573["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
    n574["The formats of a command's documents<br/><small>Technical choice</small>"]:::held
    n575["Documents in Markdown<br/><small>Technical choice</small>"]:::held
    n576["Figures in Mermaid<br/><small>Technical choice</small>"]:::held
    n577["HTML writer<br/><small>Function</small>"]:::held
    n578["Kinds and views say what; renderers say how<br/><small>Architecture decision</small>"]:::held
    n579["Figures of the page<br/><small>Port</small>"]:::neutral
    n580["The page's figures in SVG<br/><small>Technical choice</small>"]:::held
    n581["The page in HTML<br/><small>Technical choice</small>"]:::held
    n582["Rendering in the page<br/><small>Function</small>"]:::held
    n583["Syntax of the page<br/><small>Port</small>"]:::neutral
    n584["Trame's documents, rendered by the library of documents<br/><small>Architecture decision</small>"]:::held
    n585["Figures in SVG<br/><small>Function</small>"]:::held
    n586["Figures in the terminal, as text<br/><small>Technical choice</small>"]:::held
    n587["The terminal in plain text<br/><small>Technical choice</small>"]:::held
  end
  subgraph scenarios["Trame · Scenarios"]
    n588["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
    n589["A body amended runs amended<br/><small>Scenario</small>"]:::held
    n590["A day an amendment of a body is in force<br/><small>Decision</small>"]:::neutral
    n591["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
    n592["The described engine compiles the example<br/><small>Scenario</small>"]:::held
    n593["The documents write in the decided language<br/><small>Scenario</small>"]:::held
    n594["How the documents write what they show, checked<br/><small>Decision</small>"]:::neutral
    n595["EngineReckons<br/><small>Scenario</small>"]:::held
    n596["Shape of the example<br/><small>Decision</small>"]:::neutral
    n597["Expected differences on the example<br/><small>Decision</small>"]:::neutral
    n598["The names the sample add-ons give, and the order a choice gives them in: the second first.<br/><small>Decision</small>"]:::neutral
    n599["The first sample add-on<br/><small>Function</small>"]:::held
    n600["What the scenario of the judgment answers<br/><small>Decision</small>"]:::neutral
    n601["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
    n602["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
    n603["What the engine's reckoning is checked with<br/><small>Decision</small>"]:::neutral
    n604["A sample extension point<br/><small>Port</small>"]:::neutral
    n605["The sample add-ons, second first<br/><small>Technical choice</small>"]:::held
    n606["The second sample add-on<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Trame · SDLC"]
    n607["Advance<br/><small>Entry point</small>"]:::held
    n608["A generation advanced in one command<br/><small>Scenario</small>"]:::held
    n609["Who advances, and what changes<br/><small>Decision</small>"]:::neutral
    n610["Set the repository's settings<br/><small>Entry point</small>"]:::held
    n611["The decisions of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n612["The rules of the architecture hold<br/><small>Obligation</small>"]:::neutral
    n613["GitHub merges once it holds, asked in a session<br/><small>Technical choice</small>"]:::unknown
    n614["GitHub merges once it holds, asked by its command line<br/><small>Technical choice</small>"]:::unknown
    n615["The candidate is checked by programs<br/><small>Obligation</small>"]:::neutral
    n616["The candidate plays the laws<br/><small>Check</small>"]:::unknown
    n617["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
    n618["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n619["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n620["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n621["The candidate engine<br/><small>Artefact</small>"]:::unknown
    n622["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n623["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n624["How a generation is made<br/><small>Policy</small>"]:::neutral
    n625["The graph page<br/><small>Artefact</small>"]:::unknown
    n626["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n627["The graph page opens<br/><small>Check</small>"]:::unknown
    n628["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n629["What the graph page is asked<br/><small>Function</small>"]:::held
    n630["How a generation advances<br/><small>Decision</small>"]:::neutral
    n631["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n632["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n633["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n634["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n635["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n636["How a change merges<br/><small>Policy</small>"]:::neutral
    n637["The next generation<br/><small>Shipment</small>"]:::unknown
    n638["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n639["Open the graph page<br/><small>Entry point</small>"]:::held
    n640["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n641["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n642["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n643["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n644["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n645["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n646["The page's program<br/><small>Artefact</small>"]:::unknown
    n647["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
    n648["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n649["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n650["Read the repository's settings<br/><small>Entry point</small>"]:::held
    n651["The repository's projects<br/><small>Decision</small>"]:::neutral
    n652["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
    n653["The repository left by hand, in the scenario<br/><small>Decision</small>"]:::neutral
    n654["The repository as decided<br/><small>Shipment</small>"]:::unknown
    n655["The repository's work on a machine<br/><small>Technical choice</small>"]:::unknown
    n656["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n657["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n658["The SDLC on the machine<br/><small>Technical choice</small>"]:::unknown
    n659["What the programs of Trame's SDLC say<br/><small>Message catalog</small>"]:::neutral
    n660["How the repository is set<br/><small>Policy</small>"]:::neutral
    n661["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
    n662["The engine<br/><small>Artefact</small>"]:::unknown
    n663["Trame's repository<br/><small>Decision</small>"]:::neutral
    n664["Trame's SDLC<br/><small>Component</small>"]:::neutral
    n665["What the machine must also have<br/><small>Technical choice</small>"]:::unknown
  end
  subgraph shipping["Trame · Shipping"]
    n666["Attribution<br/><small>Function</small>"]:::held
    n667["The fingerprint of a program<br/><small>Decision</small>"]:::neutral
    n668["Evidence of the SDLC<br/><small>Function</small>"]:::held
    n669["Evidence sealed by attribution<br/><small>Technical choice</small>"]:::held
    n670["The plan of a run elsewhere<br/><small>Function</small>"]:::held
    n671["Ship only what holds<br/><small>Requirement</small>"]:::held
    n672["Criteria of shipping only what holds<br/><small>Acceptance criteria</small>"]:::held
    n673["Where the SDLC's evidence is kept<br/><small>Decision</small>"]:::neutral
  end
  subgraph standards["Trame · Standards"]
    n674["tree-sitter API<br/><small>Standard</small>"]:::neutral
    n675["TypeScript compiler API<br/><small>Standard</small>"]:::neutral
  end
  subgraph syntax["Trame · Syntax"]
    n676["Checks of a body<br/><small>Function</small>"]:::held
    n677["Captures<br/><small>Standard</small>"]:::neutral
    n678["Categories of literals<br/><small>Decision</small>"]:::neutral
    n679["How a literal is shown<br/><small>Decision</small>"]:::neutral
    n680["Roles of a literal<br/><small>Message catalog</small>"]:::neutral
    n681["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
    n682["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
    n683["std's languages, read by the engine<br/><small>Technical choice</small>"]:::held
    n684["Syntax reader<br/><small>Function</small>"]:::held
  end
  subgraph terraform["Trame · Terraform"]
    n685["Attribute<br/><small>Syntax element</small>"]:::held
    n686["Comment<br/><small>Syntax element</small>"]:::held
    n687["Text<br/><small>Syntax element</small>"]:::held
    n688["HCL<br/><small>Standard</small>"]:::neutral
    n689["Value<br/><small>Syntax element</small>"]:::held
    n690["Module call<br/><small>Syntax element</small>"]:::held
    n691["Terraform<br/><small>Language</small>"]:::held
    n692["Terraform modules<br/><small>Standard</small>"]:::neutral
    n693["Terraform writer<br/><small>Function</small>"]:::held
  end
  subgraph typescript["Trame · TypeScript"]
    n694["List on several lines<br/><small>Syntax element</small>"]:::held
    n695["Type assertion<br/><small>Syntax element</small>"]:::held
    n696["Assignment<br/><small>Syntax element</small>"]:::held
    n697["Async function of a block<br/><small>Syntax element</small>"]:::held
    n698["Waiting<br/><small>Syntax element</small>"]:::held
    n699["Call<br/><small>Syntax element</small>"]:::held
    n700["Constant<br/><small>Syntax element</small>"]:::held
    n701["Default import<br/><small>Syntax element</small>"]:::held
    n702["Documentation comment<br/><small>Syntax element</small>"]:::held
    n703["Export<br/><small>Syntax element</small>"]:::held
    n704["Condition<br/><small>Syntax element</small>"]:::held
    n705["List on one line<br/><small>Syntax element</small>"]:::held
    n706["Comment<br/><small>Syntax element</small>"]:::held
    n707["Property access<br/><small>Syntax element</small>"]:::held
    n708["Title of a module<br/><small>Syntax element</small>"]:::held
    n709["Import of names<br/><small>Syntax element</small>"]:::held
    n710["Object on several lines<br/><small>Syntax element</small>"]:::held
    n711["Object<br/><small>Syntax element</small>"]:::held
    n712["Object type<br/><small>Syntax element</small>"]:::held
    n713["Optional property access<br/><small>Syntax element</small>"]:::held
    n714["Optional property of a type<br/><small>Syntax element</small>"]:::held
    n715["Group<br/><small>Syntax element</small>"]:::held
    n716["Names of a program<br/><small>Decision</small>"]:::neutral
    n717["Property<br/><small>Syntax element</small>"]:::held
    n718["Strict inequality<br/><small>Syntax element</small>"]:::held
    n719["Text<br/><small>Syntax element</small>"]:::held
    n720["TypeScript<br/><small>Language</small>"]:::held
    n721["TypeScript's libraries of types<br/><small>Standard</small>"]:::neutral
    n722["The syntax of the programs Trame writes<br/><small>Standard</small>"]:::neutral
    n723["TypeScript writer<br/><small>Function</small>"]:::held
    n724["Union type<br/><small>Syntax element</small>"]:::held
    n725["Globals that reach outside<br/><small>Vocabulary</small>"]:::neutral
  end
  n35 -->|Deployed in| n14
  n54 -->|Deployed in| n29
  n54 -->|Deployed in| n52
  n54 -->|Depends on| n17
  n57 -->|Implements| n34
  n57 -->|Depends on| n332
  n57 -->|Depends on| n187
  n58 -->|Implements| n19
  n58 -->|Depends on| n317
  n59 -->|Implements| n23
  n59 -->|Depends on| n332
  n59 -->|Depends on| n187
  n60 -->|Implements| n36
  n60 -->|Depends on| n332
  n61 -->|Implements| n37
  n61 -->|Depends on| n231
  n62 -->|Serves| n429
  n62 -->|Depends on| n332
  n62 -->|Depends on| n266
  n62 -->|Depends on| n268
  n62 -->|Depends on| n267
  n62 -->|Depends on| n0
  n62 -->|Depends on| n234
  n62 -->|Depends on| n224
  n62 -->|Depends on| n280
  n63 -->|Serves| n429
  n63 -->|Part of| n35
  n63 -->|Depends on| n37
  n63 -->|Depends on| n36
  n63 -->|Depends on| n23
  n63 -->|Depends on| n19
  n63 -->|Depends on| n34
  n63 -->|Depends on| n62
  n63 -->|Depends on| n332
  n63 -->|Depends on| n321
  n63 -->|Depends on| n324
  n63 -->|Depends on| n312
  n63 -->|Depends on| n266
  n63 -->|Depends on| n265
  n63 -->|Depends on| n267
  n63 -->|Depends on| n0
  n63 -->|Depends on| n149
  n63 -->|Depends on| n277
  n63 -->|Depends on| n222
  n63 -->|Depends on| n221
  n63 -->|Depends on| n236
  n63 -->|Depends on| n223
  n63 -->|Depends on| n280
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n14
  n64 -->|Serves| n430
  n65 -->|Serves| n429
  n65 -->|Applied by| n63
  n65 -->|Applied by| n62
  n65 -->|Applied by| n64
  n65 -->|Applied by| n43
  n66 -->|Verifies| n113
  n66 -->|Verifies| n190
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
  n66 -->|Depends on| n269
  n66 -->|Depends on| n67
  n66 -->|Depends on| n282
  n70 -->|Verifies| n684
  n70 -->|Verifies| n676
  n70 -->|Verifies| n389
  n70 -->|In| n52
  n70 -->|Depends on| n684
  n70 -->|Depends on| n676
  n70 -->|Depends on| n720
  n70 -->|Depends on| n71
  n70 -->|Depends on| n274
  n70 -->|Depends on| n282
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
  n72 -->|Depends on| n270
  n72 -->|Depends on| n282
  n73 -->|Verifies| n355
  n73 -->|Verifies| n354
  n73 -->|In| n52
  n73 -->|Depends on| n17
  n73 -->|Depends on| n51
  n73 -->|Depends on| n157
  n73 -->|Depends on| n110
  n73 -->|Depends on| n281
  n73 -->|Depends on| n282
  n74 -->|Verifies| n116
  n74 -->|Verifies| n117
  n74 -->|Verifies| n181
  n74 -->|Verifies| n723
  n74 -->|Verifies| n693
  n74 -->|Verifies| n237
  n74 -->|Verifies| n380
  n74 -->|In| n52
  n74 -->|Depends on| n116
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n157
  n74 -->|Depends on| n153
  n74 -->|Depends on| n69
  n74 -->|Depends on| n150
  n74 -->|Depends on| n270
  n74 -->|Depends on| n282
  n75 -->|Verifies| n139
  n75 -->|In| n52
  n75 -->|Depends on| n139
  n75 -->|Depends on| n41
  n75 -->|Depends on| n56
  n75 -->|Depends on| n157
  n75 -->|Depends on| n69
  n75 -->|Depends on| n103
  n75 -->|Depends on| n282
  n76 -->|Verifies| n133
  n76 -->|In| n52
  n76 -->|Depends on| n133
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n40
  n76 -->|Depends on| n38
  n76 -->|Depends on| n153
  n76 -->|Depends on| n157
  n76 -->|Depends on| n270
  n76 -->|Depends on| n282
  n77 -->|Verifies| n122
  n77 -->|Verifies| n186
  n77 -->|Verifies| n212
  n77 -->|Verifies| n352
  n77 -->|Verifies| n365
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
  n77 -->|Depends on| n427
  n77 -->|Depends on| n204
  n77 -->|Depends on| n157
  n77 -->|Depends on| n279
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n282
  n79 -->|Verifies| n123
  n79 -->|Verifies| n205
  n79 -->|Verifies| n376
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
  n79 -->|Depends on| n270
  n79 -->|Depends on| n282
  n80 -->|Verifies| n131
  n80 -->|In| n52
  n80 -->|Depends on| n131
  n80 -->|Depends on| n157
  n80 -->|Depends on| n153
  n80 -->|Depends on| n720
  n80 -->|Depends on| n282
  n81 -->|Verifies| n134
  n81 -->|In| n52
  n81 -->|Depends on| n134
  n81 -->|Depends on| n56
  n81 -->|Depends on| n40
  n81 -->|Depends on| n38
  n81 -->|Depends on| n153
  n81 -->|Depends on| n673
  n81 -->|Depends on| n98
  n81 -->|Depends on| n157
  n81 -->|Depends on| n48
  n81 -->|Depends on| n282
  n82 -->|Verifies| n125
  n82 -->|In| n52
  n82 -->|Depends on| n125
  n82 -->|Depends on| n102
  n82 -->|Depends on| n282
  n83 -->|Verifies| n126
  n83 -->|In| n52
  n83 -->|Depends on| n126
  n83 -->|Depends on| n56
  n83 -->|Depends on| n157
  n83 -->|Depends on| n282
  n84 -->|Verifies| n183
  n84 -->|Verifies| n204
  n84 -->|In| n52
  n84 -->|Depends on| n183
  n84 -->|Depends on| n41
  n84 -->|Depends on| n40
  n84 -->|Depends on| n16
  n84 -->|Depends on| n104
  n84 -->|Depends on| n98
  n84 -->|Depends on| n668
  n84 -->|Depends on| n22
  n84 -->|Depends on| n282
  n85 -->|Verifies| n143
  n85 -->|In| n52
  n85 -->|Depends on| n143
  n85 -->|Depends on| n183
  n85 -->|Depends on| n211
  n85 -->|Depends on| n40
  n85 -->|Depends on| n51
  n85 -->|Depends on| n157
  n85 -->|Depends on| n270
  n85 -->|Depends on| n282
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
  n86 -->|Depends on| n282
  n87 -->|Verifies| n137
  n87 -->|Verifies| n219
  n87 -->|Verifies| n349
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
  n87 -->|Depends on| n719
  n87 -->|Depends on| n282
  n87 -->|Depends on| n673
  n88 -->|Verifies| n145
  n88 -->|Verifies| n370
  n88 -->|Verifies| n348
  n88 -->|Verifies| n366
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
  n88 -->|Depends on| n282
  n88 -->|Depends on| n152
  n88 -->|Depends on| n720
  n89 -->|Verifies| n118
  n89 -->|Verifies| n367
  n89 -->|In| n52
  n89 -->|Depends on| n118
  n89 -->|Depends on| n41
  n89 -->|Depends on| n56
  n89 -->|Depends on| n51
  n89 -->|Depends on| n104
  n89 -->|Depends on| n157
  n89 -->|Depends on| n282
  n89 -->|Depends on| n295
  n90 -->|Verifies| n144
  n90 -->|Verifies| n370
  n90 -->|Verifies| n348
  n90 -->|In| n52
  n90 -->|Depends on| n144
  n90 -->|Depends on| n41
  n90 -->|Depends on| n56
  n90 -->|Depends on| n40
  n90 -->|Depends on| n38
  n90 -->|Depends on| n153
  n90 -->|Depends on| n104
  n90 -->|Depends on| n157
  n90 -->|Depends on| n282
  n91 -->|Verifies| n121
  n91 -->|Verifies| n162
  n91 -->|In| n52
  n91 -->|Depends on| n121
  n91 -->|Depends on| n41
  n91 -->|Depends on| n56
  n91 -->|Depends on| n104
  n91 -->|Depends on| n98
  n91 -->|Depends on| n228
  n91 -->|Depends on| n157
  n91 -->|Depends on| n282
  n92 -->|Verifies| n127
  n92 -->|Verifies| n185
  n92 -->|In| n52
  n92 -->|Depends on| n124
  n92 -->|Depends on| n127
  n92 -->|Depends on| n41
  n92 -->|Depends on| n56
  n92 -->|Depends on| n51
  n92 -->|Depends on| n204
  n92 -->|Depends on| n40
  n92 -->|Depends on| n38
  n92 -->|Depends on| n153
  n92 -->|Depends on| n157
  n92 -->|Depends on| n279
  n92 -->|Depends on| n282
  n93 -->|Verifies| n318
  n93 -->|Verifies| n340
  n93 -->|Verifies| n356
  n93 -->|Verifies| n372
  n93 -->|In| n52
  n93 -->|Depends on| n124
  n93 -->|Depends on| n318
  n93 -->|Depends on| n18
  n93 -->|Depends on| n204
  n93 -->|Depends on| n40
  n93 -->|Depends on| n16
  n93 -->|Depends on| n51
  n93 -->|Depends on| n157
  n93 -->|Depends on| n279
  n93 -->|Depends on| n282
  n94 -->|Verifies| n124
  n94 -->|Verifies| n202
  n94 -->|Verifies| n582
  n94 -->|Verifies| n577
  n94 -->|Verifies| n585
  n94 -->|Verifies| n188
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n188
  n94 -->|Depends on| n51
  n94 -->|Depends on| n157
  n94 -->|Depends on| n279
  n94 -->|Depends on| n282
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
  n96 -->|Depends on| n270
  n96 -->|Depends on| n282
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
  n97 -->|Depends on| n282
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
  n99 -->|Depends on| n217
  n99 -->|Depends on| n157
  n99 -->|Depends on| n282
  n99 -->|Depends on| n152
  n99 -->|Depends on| n720
  n100 -->|Verifies| n133
  n100 -->|Verifies| n199
  n100 -->|In| n52
  n100 -->|Depends on| n133
  n100 -->|Depends on| n22
  n100 -->|Depends on| n20
  n100 -->|Depends on| n51
  n100 -->|Depends on| n40
  n100 -->|Depends on| n38
  n100 -->|Depends on| n153
  n100 -->|Depends on| n157
  n100 -->|Depends on| n206
  n100 -->|Depends on| n68
  n100 -->|Depends on| n279
  n100 -->|Depends on| n282
  n101 -->|Verifies| n136
  n101 -->|Verifies| n349
  n101 -->|In| n52
  n101 -->|Depends on| n136
  n101 -->|Depends on| n41
  n101 -->|Depends on| n56
  n101 -->|Depends on| n157
  n101 -->|Depends on| n282
  n101 -->|Depends on| n152
  n101 -->|Depends on| n720
  n101 -->|Depends on| n98
  n105 -->|Verifies| n140
  n105 -->|Verifies| n134
  n105 -->|Verifies| n668
  n105 -->|Verifies| n207
  n105 -->|Verifies| n670
  n105 -->|Verifies| n357
  n105 -->|Verifies| n666
  n105 -->|Verifies| n190
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
  n105 -->|Depends on| n271
  n105 -->|Depends on| n153
  n105 -->|Depends on| n673
  n105 -->|Depends on| n104
  n105 -->|Depends on| n98
  n105 -->|Depends on| n157
  n105 -->|Depends on| n282
  n106 -->|Verifies| n142
  n106 -->|In| n52
  n106 -->|Depends on| n142
  n106 -->|Depends on| n56
  n106 -->|Depends on| n20
  n106 -->|Depends on| n40
  n106 -->|Depends on| n38
  n106 -->|Depends on| n153
  n106 -->|Depends on| n157
  n106 -->|Depends on| n282
  n107 -->|Verifies| n140
  n107 -->|Verifies| n207
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
  n107 -->|Depends on| n207
  n107 -->|Depends on| n270
  n107 -->|Depends on| n153
  n107 -->|Depends on| n673
  n107 -->|Depends on| n104
  n107 -->|Depends on| n98
  n107 -->|Depends on| n157
  n107 -->|Depends on| n282
  n109 -->|Verifies| n114
  n109 -->|Verifies| n115
  n109 -->|Verifies| n346
  n109 -->|In| n52
  n109 -->|Depends on| n114
  n109 -->|Depends on| n56
  n109 -->|Depends on| n40
  n109 -->|Depends on| n38
  n109 -->|Depends on| n157
  n109 -->|Depends on| n68
  n109 -->|Depends on| n282
  n111 -->|Verifies| n141
  n111 -->|Verifies| n120
  n111 -->|Verifies| n138
  n111 -->|In| n52
  n111 -->|Depends on| n141
  n111 -->|Depends on| n120
  n111 -->|Depends on| n51
  n111 -->|Depends on| n157
  n111 -->|Depends on| n110
  n111 -->|Depends on| n282
  n112 -->|Serves| n429
  n112 -->|Depends on| n213
  n112 -->|Depends on| n270
  n113 -->|Serves| n429
  n113 -->|Part of| n54
  n113 -->|Depends on| n131
  n113 -->|Depends on| n190
  n113 -->|Depends on| n157
  n113 -->|Depends on| n153
  n113 -->|Depends on| n216
  n113 -->|Depends on| n214
  n113 -->|Depends on| n343
  n113 -->|Depends on| n382
  n113 -->|Depends on| n158
  n113 -->|Depends on| n720
  n113 -->|Depends on| n42
  n113 -->|Depends on| n21
  n113 -->|Depends on| n20
  n113 -->|Depends on| n22
  n113 -->|Depends on| n38
  n113 -->|Depends on| n24
  n113 -->|Depends on| n191
  n113 -->|Depends on| n50
  n113 -->|Depends on| n270
  n113 -->|Depends on| n269
  n113 -->|Depends on| n217
  n113 -->|Depends on| n218
  n113 -->|Depends on| n220
  n113 -->|Depends on| n219
  n113 -->|Depends on| n16
  n113 -->|Depends on| n204
  n113 -->|Depends on| n152
  n114 -->|Serves| n436
  n114 -->|Part of| n54
  n114 -->|Depends on| n131
  n114 -->|Depends on| n115
  n114 -->|Depends on| n13
  n114 -->|Depends on| n50
  n114 -->|Depends on| n270
  n115 -->|Serves| n436
  n115 -->|Depends on| n131
  n115 -->|Depends on| n200
  n115 -->|Depends on| n39
  n115 -->|Depends on| n206
  n115 -->|Depends on| n204
  n115 -->|Depends on| n153
  n115 -->|Depends on| n38
  n115 -->|Depends on| n270
  n115 -->|Depends on| n146
  n116 -->|Serves| n429
  n116 -->|Part of| n54
  n116 -->|Depends on| n131
  n116 -->|Depends on| n117
  n116 -->|Depends on| n22
  n116 -->|Depends on| n38
  n116 -->|Depends on| n50
  n116 -->|Depends on| n270
  n117 -->|Serves| n429
  n117 -->|Depends on| n131
  n117 -->|Depends on| n181
  n117 -->|Depends on| n270
  n118 -->|Serves| n436
  n118 -->|Part of| n54
  n118 -->|Depends on| n131
  n118 -->|Depends on| n33
  n118 -->|Depends on| n295
  n118 -->|Depends on| n153
  n118 -->|Depends on| n20
  n118 -->|Depends on| n22
  n118 -->|Depends on| n38
  n118 -->|Depends on| n301
  n118 -->|Depends on| n50
  n118 -->|Depends on| n270
  n119 -->|Serves| n429
  n119 -->|Part of| n54
  n119 -->|Depends on| n153
  n119 -->|Depends on| n131
  n119 -->|Depends on| n200
  n119 -->|Depends on| n22
  n119 -->|Depends on| n38
  n119 -->|Depends on| n50
  n119 -->|Depends on| n270
  n120 -->|Serves| n429
  n120 -->|Part of| n54
  n120 -->|Depends on| n157
  n120 -->|Depends on| n131
  n120 -->|Depends on| n138
  n120 -->|Depends on| n183
  n120 -->|Depends on| n211
  n120 -->|Depends on| n117
  n120 -->|Depends on| n132
  n120 -->|Depends on| n22
  n120 -->|Depends on| n38
  n120 -->|Depends on| n40
  n120 -->|Depends on| n50
  n120 -->|Depends on| n270
  n120 -->|Depends on| n115
  n120 -->|Depends on| n13
  n121 -->|Serves| n429
  n121 -->|Part of| n54
  n121 -->|Depends on| n131
  n121 -->|Depends on| n181
  n121 -->|Depends on| n117
  n121 -->|Depends on| n15
  n121 -->|Depends on| n162
  n121 -->|Depends on| n319
  n121 -->|Depends on| n320
  n121 -->|Depends on| n235
  n121 -->|Depends on| n161
  n121 -->|Depends on| n20
  n121 -->|Depends on| n22
  n121 -->|Depends on| n38
  n121 -->|Depends on| n50
  n121 -->|Depends on| n270
  n122 -->|Serves| n429
  n122 -->|Part of| n54
  n122 -->|Depends on| n131
  n122 -->|Depends on| n186
  n122 -->|Depends on| n115
  n122 -->|Depends on| n13
  n123 -->|Serves| n429
  n123 -->|Part of| n54
  n123 -->|Depends on| n131
  n123 -->|Depends on| n166
  n123 -->|Depends on| n50
  n123 -->|Depends on| n270
  n123 -->|Depends on| n112
  n124 -->|Serves| n429
  n124 -->|Part of| n54
  n124 -->|Depends on| n131
  n124 -->|Depends on| n202
  n124 -->|Depends on| n582
  n124 -->|Depends on| n50
  n125 -->|Serves| n429
  n125 -->|Depends on| n55
  n125 -->|Depends on| n722
  n126 -->|Serves| n429
  n126 -->|Part of| n54
  n126 -->|Depends on| n131
  n126 -->|Depends on| n125
  n126 -->|Depends on| n20
  n126 -->|Depends on| n22
  n126 -->|Depends on| n38
  n126 -->|Depends on| n50
  n126 -->|Depends on| n157
  n126 -->|Depends on| n270
  n127 -->|Serves| n429
  n127 -->|Part of| n54
  n127 -->|Depends on| n153
  n127 -->|Depends on| n131
  n127 -->|Depends on| n185
  n127 -->|Depends on| n318
  n127 -->|Depends on| n204
  n127 -->|Depends on| n22
  n127 -->|Depends on| n38
  n127 -->|Depends on| n50
  n127 -->|Depends on| n270
  n128 -->|Serves| n429
  n128 -->|Part of| n54
  n128 -->|Depends on| n131
  n128 -->|Depends on| n132
  n128 -->|Depends on| n211
  n128 -->|Depends on| n50
  n128 -->|Depends on| n270
  n129 -->|Serves| n436
  n129 -->|Part of| n54
  n129 -->|Depends on| n131
  n129 -->|Depends on| n153
  n129 -->|Depends on| n204
  n129 -->|Depends on| n39
  n129 -->|Depends on| n155
  n129 -->|Depends on| n217
  n129 -->|Depends on| n20
  n129 -->|Depends on| n22
  n129 -->|Depends on| n38
  n129 -->|Depends on| n720
  n129 -->|Depends on| n722
  n129 -->|Depends on| n708
  n129 -->|Depends on| n702
  n129 -->|Depends on| n703
  n129 -->|Depends on| n700
  n129 -->|Depends on| n699
  n129 -->|Depends on| n711
  n129 -->|Depends on| n717
  n129 -->|Depends on| n719
  n129 -->|Depends on| n709
  n129 -->|Depends on| n50
  n129 -->|Depends on| n270
  n129 -->|Depends on| n40
  n129 -->|Depends on| n157
  n129 -->|Depends on| n135
  n129 -->|Depends on| n152
  n129 -->|Depends on| n707
  n129 -->|Depends on| n705
  n129 -->|Depends on| n112
  n129 -->|Depends on| n132
  n130 -->|Serves| n429
  n130 -->|Part of| n54
  n130 -->|Depends on| n153
  n130 -->|Depends on| n131
  n130 -->|Depends on| n200
  n130 -->|Depends on| n20
  n130 -->|Depends on| n38
  n130 -->|Depends on| n50
  n130 -->|Depends on| n270
  n131 -->|Serves| n429
  n131 -->|Depends on| n157
  n131 -->|Depends on| n183
  n131 -->|Depends on| n182
  n131 -->|Depends on| n197
  n131 -->|Depends on| n211
  n131 -->|Depends on| n199
  n131 -->|Depends on| n50
  n131 -->|Depends on| n40
  n131 -->|Depends on| n16
  n131 -->|Depends on| n434
  n131 -->|Depends on| n428
  n131 -->|Depends on| n270
  n131 -->|Depends on| n153
  n131 -->|Depends on| n206
  n131 -->|Depends on| n132
  n131 -->|Depends on| n151
  n131 -->|Depends on| n200
  n131 -->|Depends on| n38
  n131 -->|Depends on| n20
  n131 -->|Depends on| n684
  n131 -->|Depends on| n202
  n131 -->|Depends on| n185
  n131 -->|Depends on| n212
  n131 -->|Depends on| n318
  n131 -->|Depends on| n204
  n132 -->|Serves| n429
  n132 -->|Depends on| n213
  n132 -->|Depends on| n270
  n133 -->|Serves| n436
  n133 -->|Part of| n54
  n133 -->|Depends on| n131
  n133 -->|Depends on| n199
  n133 -->|Depends on| n22
  n133 -->|Depends on| n50
  n133 -->|Depends on| n270
  n134 -->|Serves| n671
  n134 -->|Part of| n54
  n134 -->|Depends on| n157
  n134 -->|Depends on| n131
  n134 -->|Depends on| n668
  n134 -->|Depends on| n22
  n134 -->|Depends on| n38
  n134 -->|Depends on| n50
  n134 -->|Depends on| n270
  n135 -->|Serves| n436
  n135 -->|Depends on| n722
  n135 -->|Depends on| n708
  n135 -->|Depends on| n702
  n135 -->|Depends on| n703
  n135 -->|Depends on| n700
  n135 -->|Depends on| n699
  n135 -->|Depends on| n711
  n135 -->|Depends on| n717
  n135 -->|Depends on| n719
  n135 -->|Depends on| n705
  n135 -->|Depends on| n709
  n136 -->|Serves| n436
  n136 -->|Part of| n54
  n136 -->|Depends on| n131
  n136 -->|Depends on| n153
  n136 -->|Depends on| n204
  n136 -->|Depends on| n152
  n136 -->|Depends on| n20
  n136 -->|Depends on| n21
  n136 -->|Depends on| n38
  n136 -->|Depends on| n50
  n136 -->|Depends on| n270
  n137 -->|Serves| n436
  n137 -->|Part of| n54
  n137 -->|Depends on| n131
  n137 -->|Depends on| n153
  n137 -->|Depends on| n204
  n137 -->|Depends on| n200
  n137 -->|Depends on| n263
  n137 -->|Depends on| n262
  n137 -->|Depends on| n220
  n137 -->|Depends on| n219
  n137 -->|Depends on| n20
  n137 -->|Depends on| n22
  n137 -->|Depends on| n21
  n137 -->|Depends on| n38
  n137 -->|Depends on| n24
  n137 -->|Depends on| n191
  n137 -->|Depends on| n720
  n137 -->|Depends on| n16
  n137 -->|Depends on| n50
  n137 -->|Depends on| n270
  n137 -->|Depends on| n269
  n137 -->|Depends on| n237
  n137 -->|Depends on| n719
  n137 -->|Depends on| n140
  n137 -->|Depends on| n157
  n138 -->|Serves| n429
  n138 -->|Depends on| n131
  n138 -->|Depends on| n211
  n138 -->|Depends on| n50
  n139 -->|Serves| n429
  n139 -->|Part of| n54
  n139 -->|Depends on| n116
  n139 -->|Depends on| n40
  n140 -->|Serves| n671
  n140 -->|Part of| n54
  n140 -->|Depends on| n157
  n140 -->|Depends on| n131
  n140 -->|Depends on| n121
  n140 -->|Depends on| n181
  n140 -->|Depends on| n117
  n140 -->|Depends on| n668
  n140 -->|Depends on| n670
  n140 -->|Depends on| n671
  n140 -->|Depends on| n15
  n140 -->|Depends on| n162
  n140 -->|Depends on| n667
  n140 -->|Depends on| n40
  n140 -->|Depends on| n132
  n140 -->|Depends on| n20
  n140 -->|Depends on| n22
  n140 -->|Depends on| n38
  n140 -->|Depends on| n50
  n140 -->|Depends on| n190
  n140 -->|Depends on| n270
  n141 -->|Serves| n429
  n141 -->|Part of| n54
  n141 -->|Depends on| n131
  n141 -->|Depends on| n138
  n142 -->|Serves| n436
  n142 -->|Part of| n54
  n142 -->|Depends on| n153
  n142 -->|Depends on| n131
  n142 -->|Depends on| n200
  n142 -->|Depends on| n22
  n142 -->|Depends on| n38
  n142 -->|Depends on| n50
  n142 -->|Depends on| n270
  n143 -->|Serves| n429
  n143 -->|Part of| n54
  n143 -->|Depends on| n131
  n143 -->|Depends on| n183
  n143 -->|Depends on| n211
  n143 -->|Depends on| n197
  n143 -->|Depends on| n50
  n143 -->|Depends on| n270
  n144 -->|Serves| n436
  n144 -->|Part of| n54
  n144 -->|Depends on| n131
  n144 -->|Depends on| n20
  n144 -->|Depends on| n22
  n144 -->|Depends on| n38
  n144 -->|Depends on| n301
  n144 -->|Depends on| n719
  n144 -->|Depends on| n40
  n144 -->|Depends on| n157
  n144 -->|Depends on| n50
  n144 -->|Depends on| n270
  n145 -->|Serves| n436
  n145 -->|Part of| n54
  n145 -->|Depends on| n131
  n145 -->|Depends on| n153
  n145 -->|Depends on| n204
  n145 -->|Depends on| n20
  n145 -->|Depends on| n22
  n145 -->|Depends on| n152
  n145 -->|Depends on| n39
  n145 -->|Depends on| n217
  n145 -->|Depends on| n38
  n145 -->|Depends on| n32
  n145 -->|Depends on| n294
  n145 -->|Depends on| n720
  n145 -->|Depends on| n50
  n145 -->|Depends on| n270
  n145 -->|Depends on| n40
  n145 -->|Depends on| n157
  n161 -->|Depends on| n225
  n161 -->|Depends on| n227
  n162 -->|Serves| n429
  n162 -->|Depends on| n30
  n162 -->|Depends on| n160
  n163 -->|Serves| n429
  n163 -->|Depends on| n270
  n164 -->|Implements| n166
  n164 -->|Depends on| n16
  n164 -->|Depends on| n163
  n164 -->|Depends on| n270
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
  n168 -->|Depends on| n270
  n169 -->|Implements| n166
  n169 -->|Depends on| n21
  n169 -->|Depends on| n20
  n169 -->|Depends on| n22
  n169 -->|Depends on| n32
  n169 -->|Depends on| n153
  n169 -->|Depends on| n38
  n169 -->|Depends on| n163
  n169 -->|Depends on| n270
  n170 -->|Implements| n166
  n170 -->|Depends on| n21
  n170 -->|Depends on| n22
  n170 -->|Depends on| n42
  n170 -->|Depends on| n38
  n170 -->|Depends on| n165
  n170 -->|Depends on| n163
  n170 -->|Depends on| n270
  n171 -->|Implements| n166
  n171 -->|Depends on| n33
  n171 -->|Depends on| n40
  n171 -->|Depends on| n163
  n171 -->|Depends on| n270
  n172 -->|Implements| n166
  n172 -->|Depends on| n21
  n172 -->|Depends on| n22
  n172 -->|Depends on| n27
  n172 -->|Depends on| n38
  n172 -->|Depends on| n165
  n172 -->|Depends on| n163
  n172 -->|Depends on| n270
  n173 -->|Implements| n166
  n173 -->|Depends on| n25
  n173 -->|Depends on| n163
  n173 -->|Depends on| n270
  n174 -->|Implements| n166
  n174 -->|Depends on| n16
  n174 -->|Depends on| n53
  n174 -->|Depends on| n165
  n174 -->|Depends on| n163
  n174 -->|Depends on| n270
  n175 -->|Implements| n166
  n175 -->|Depends on| n21
  n175 -->|Depends on| n22
  n175 -->|Depends on| n40
  n175 -->|Depends on| n38
  n175 -->|Depends on| n165
  n175 -->|Depends on| n163
  n175 -->|Depends on| n270
  n176 -->|Chooses| n178
  n176 -->|In| n29
  n176 -->|In| n47
  n176 -->|In| n52
  n176 -->|In| n14
  n176 -->|Serves| n436
  n178 -->|Depends on| n277
  n179 -->|Serves| n436
  n179 -->|Applied by| n178
  n179 -->|Applied by| n176
  n179 -->|Applied by| n277
  n180 -->|Serves| n436
  n181 -->|Serves| n429
  n181 -->|Depends on| n157
  n181 -->|Depends on| n153
  n181 -->|Depends on| n38
  n181 -->|Depends on| n213
  n181 -->|Depends on| n39
  n181 -->|Depends on| n237
  n181 -->|Depends on| n271
  n181 -->|Depends on| n152
  n181 -->|Depends on| n720
  n182 -->|Serves| n429
  n182 -->|Depends on| n147
  n182 -->|Depends on| n203
  n182 -->|Depends on| n206
  n182 -->|Depends on| n39
  n182 -->|Depends on| n149
  n182 -->|Depends on| n153
  n182 -->|Depends on| n283
  n182 -->|Depends on| n207
  n183 -->|Serves| n429
  n183 -->|Depends on| n153
  n183 -->|Depends on| n434
  n183 -->|Depends on| n184
  n183 -->|Depends on| n206
  n183 -->|Depends on| n203
  n183 -->|Depends on| n30
  n183 -->|Depends on| n20
  n183 -->|Depends on| n38
  n183 -->|Depends on| n208
  n183 -->|Depends on| n204
  n183 -->|Depends on| n194
  n183 -->|Depends on| n213
  n183 -->|Depends on| n237
  n183 -->|Depends on| n39
  n183 -->|Depends on| n271
  n183 -->|Depends on| n192
  n183 -->|Depends on| n48
  n183 -->|Depends on| n190
  n183 -->|Depends on| n27
  n183 -->|Depends on| n152
  n183 -->|Depends on| n195
  n184 -->|Serves| n429
  n185 -->|Serves| n429
  n185 -->|Depends on| n157
  n185 -->|Depends on| n16
  n185 -->|Depends on| n40
  n185 -->|Depends on| n279
  n186 -->|Serves| n429
  n186 -->|Depends on| n187
  n186 -->|Depends on| n157
  n186 -->|Depends on| n153
  n186 -->|Depends on| n50
  n186 -->|Depends on| n16
  n186 -->|Depends on| n53
  n186 -->|Depends on| n427
  n186 -->|Depends on| n25
  n186 -->|Depends on| n212
  n186 -->|Depends on| n38
  n186 -->|Depends on| n204
  n186 -->|Depends on| n185
  n186 -->|Depends on| n188
  n186 -->|Depends on| n318
  n186 -->|Depends on| n582
  n186 -->|Depends on| n277
  n186 -->|Depends on| n273
  n188 -->|Serves| n429
  n188 -->|Depends on| n279
  n190 -->|Serves| n429
  n190 -->|Depends on| n153
  n190 -->|Depends on| n216
  n190 -->|Depends on| n720
  n190 -->|Depends on| n204
  n190 -->|Depends on| n20
  n190 -->|Depends on| n38
  n190 -->|Depends on| n24
  n190 -->|Depends on| n191
  n192 -->|Serves| n429
  n193 -->|Serves| n429
  n194 -->|Serves| n429
  n194 -->|Depends on| n39
  n194 -->|Depends on| n271
  n194 -->|Depends on| n203
  n194 -->|Depends on| n206
  n194 -->|Depends on| n177
  n194 -->|Depends on| n193
  n194 -->|Depends on| n437
  n194 -->|Depends on| n153
  n194 -->|Depends on| n720
  n194 -->|Depends on| n301
  n194 -->|Depends on| n180
  n194 -->|Depends on| n192
  n195 -->|Serves| n429
  n195 -->|Depends on| n434
  n195 -->|Depends on| n271
  n197 -->|Serves| n429
  n197 -->|Depends on| n26
  n197 -->|Depends on| n237
  n197 -->|Depends on| n154
  n197 -->|Depends on| n153
  n197 -->|Depends on| n431
  n197 -->|Depends on| n426
  n197 -->|Depends on| n193
  n197 -->|Depends on| n432
  n197 -->|Depends on| n433
  n197 -->|Depends on| n206
  n197 -->|Depends on| n20
  n197 -->|Depends on| n38
  n197 -->|Depends on| n204
  n197 -->|Depends on| n194
  n197 -->|Depends on| n39
  n197 -->|Depends on| n152
  n197 -->|Depends on| n278
  n197 -->|Depends on| n245
  n197 -->|Depends on| n239
  n197 -->|Depends on| n241
  n197 -->|Depends on| n249
  n197 -->|Depends on| n258
  n197 -->|Depends on| n255
  n197 -->|Depends on| n253
  n197 -->|Depends on| n243
  n198 -->|Serves| n257
  n198 -->|Applied by| n197
  n198 -->|Applied by| n211
  n199 -->|Serves| n436
  n199 -->|Depends on| n153
  n199 -->|Depends on| n206
  n199 -->|Depends on| n20
  n199 -->|Depends on| n38
  n199 -->|Depends on| n39
  n199 -->|Depends on| n279
  n200 -->|Serves| n436
  n200 -->|Depends on| n203
  n200 -->|Depends on| n39
  n200 -->|Depends on| n279
  n202 -->|Serves| n429
  n202 -->|Depends on| n153
  n202 -->|Depends on| n425
  n202 -->|Depends on| n201
  n202 -->|Depends on| n16
  n202 -->|Depends on| n200
  n202 -->|Depends on| n211
  n202 -->|Depends on| n277
  n203 -->|Serves| n429
  n203 -->|Depends on| n675
  n204 -->|Serves| n429
  n204 -->|Depends on| n153
  n204 -->|Depends on| n20
  n204 -->|Depends on| n38
  n204 -->|Depends on| n217
  n204 -->|Depends on| n39
  n204 -->|Depends on| n152
  n204 -->|Depends on| n720
  n205 -->|Serves| n429
  n205 -->|Implements| n27
  n205 -->|Depends on| n20
  n205 -->|Depends on| n38
  n205 -->|Depends on| n24
  n205 -->|Depends on| n196
  n205 -->|Depends on| n45
  n206 -->|Serves| n429
  n206 -->|Depends on| n260
  n207 -->|Serves| n429
  n207 -->|Depends on| n270
  n208 -->|Serves| n429
  n208 -->|Depends on| n722
  n208 -->|Depends on| n206
  n208 -->|Depends on| n210
  n208 -->|Depends on| n55
  n208 -->|Depends on| n26
  n208 -->|Depends on| n45
  n208 -->|Depends on| n24
  n208 -->|Depends on| n38
  n208 -->|Depends on| n203
  n208 -->|Depends on| n148
  n208 -->|Depends on| n271
  n208 -->|Depends on| n721
  n208 -->|Depends on| n154
  n208 -->|Depends on| n39
  n209 -->|Serves| n436
  n209 -->|Applied by| n194
  n209 -->|Applied by| n211
  n211 -->|Serves| n429
  n211 -->|Depends on| n237
  n211 -->|Depends on| n147
  n211 -->|Depends on| n159
  n211 -->|Depends on| n149
  n211 -->|Depends on| n153
  n211 -->|Depends on| n30
  n211 -->|Depends on| n20
  n211 -->|Depends on| n38
  n211 -->|Depends on| n39
  n211 -->|Depends on| n204
  n211 -->|Depends on| n279
  n211 -->|Depends on| n283
  n211 -->|Depends on| n247
  n211 -->|Depends on| n239
  n211 -->|Depends on| n255
  n211 -->|Depends on| n251
  n212 -->|Serves| n429
  n212 -->|Depends on| n20
  n212 -->|Depends on| n38
  n212 -->|Depends on| n153
  n212 -->|Depends on| n204
  n212 -->|Depends on| n189
  n213 -->|Serves| n429
  n213 -->|Depends on| n156
  n213 -->|Depends on| n153
  n213 -->|Depends on| n38
  n213 -->|Depends on| n39
  n213 -->|Depends on| n237
  n213 -->|Depends on| n271
  n214 -->|Refines| n429
  n215 -->|Accepts| n214
  n219 -->|Serves| n429
  n219 -->|Depends on| n220
  n219 -->|Depends on| n722
  n219 -->|Depends on| n702
  n219 -->|Depends on| n708
  n219 -->|Depends on| n706
  n219 -->|Depends on| n709
  n219 -->|Depends on| n703
  n219 -->|Depends on| n700
  n219 -->|Depends on| n699
  n219 -->|Depends on| n710
  n219 -->|Depends on| n717
  n219 -->|Depends on| n719
  n219 -->|Depends on| n705
  n227 -->|Depends on| n224
  n230 -->|Read in| n720
  n237 -->|Serves| n429
  n237 -->|Depends on| n684
  n237 -->|Depends on| n676
  n237 -->|Depends on| n720
  n237 -->|Depends on| n723
  n237 -->|Depends on| n691
  n237 -->|Depends on| n692
  n237 -->|Depends on| n693
  n237 -->|Depends on| n30
  n237 -->|Depends on| n20
  n237 -->|Depends on| n38
  n237 -->|Depends on| n274
  n238 -->|Serves| n429
  n238 -->|Applied by| n237
  n238 -->|Applied by| n318
  n239 -->|Refines| n257
  n240 -->|Accepts| n239
  n241 -->|Refines| n257
  n242 -->|Accepts| n241
  n243 -->|Refines| n257
  n244 -->|Accepts| n243
  n245 -->|Refines| n257
  n246 -->|Accepts| n245
  n247 -->|Refines| n257
  n248 -->|Accepts| n247
  n249 -->|Refines| n257
  n250 -->|Accepts| n249
  n251 -->|Refines| n257
  n252 -->|Accepts| n251
  n253 -->|Refines| n255
  n253 -->|Depends on| n255
  n254 -->|Accepts| n253
  n255 -->|Refines| n257
  n256 -->|Accepts| n255
  n258 -->|Refines| n257
  n259 -->|Accepts| n258
  n260 -->|Refines| n438
  n261 -->|Accepts| n260
  n263 -->|Refines| n438
  n264 -->|Accepts| n263
  n269 -->|Written in| n277
  n269 -->|Depends on| n277
  n270 -->|Written in| n277
  n270 -->|Depends on| n277
  n271 -->|Written in| n277
  n271 -->|Depends on| n277
  n272 -->|Serves| n436
  n272 -->|Applied by| n271
  n272 -->|Applied by| n283
  n272 -->|Applied by| n273
  n272 -->|Applied by| n270
  n272 -->|Applied by| n282
  n272 -->|Applied by| n269
  n272 -->|Applied by| n280
  n273 -->|Written in| n277
  n273 -->|Depends on| n277
  n274 -->|Written in| n277
  n275 -->|Written in| n277
  n276 -->|Written in| n277
  n278 -->|Written in| n277
  n279 -->|Written in| n277
  n280 -->|Written in| n277
  n280 -->|Depends on| n277
  n281 -->|Written in| n277
  n282 -->|Written in| n277
  n282 -->|Depends on| n277
  n283 -->|Written in| n277
  n283 -->|Depends on| n277
  n284 -->|Written in| n277
  n285 -->|Serves| n436
  n287 -->|Serves| n436
  n289 -->|Serves| n436
  n292 -->|Serves| n436
  n294 -->|Serves| n436
  n296 -->|Serves| n436
  n297 -->|Serves| n436
  n301 -->|Serves| n436
  n303 -->|Defined by| n332
  n303 -->|Depends on| n332
  n303 -->|Depends on| n321
  n304 -->|Defined by| n332
  n304 -->|Depends on| n332
  n304 -->|Depends on| n157
  n304 -->|Depends on| n311
  n304 -->|Depends on| n229
  n305 -->|Defined by| n332
  n305 -->|Depends on| n332
  n305 -->|Depends on| n321
  n306 -->|Defined by| n332
  n306 -->|Depends on| n332
  n306 -->|Depends on| n321
  n306 -->|Depends on| n229
  n307 -->|Defined by| n332
  n307 -->|Depends on| n332
  n307 -->|Depends on| n321
  n307 -->|Depends on| n229
  n307 -->|Depends on| n325
  n308 -->|Defined by| n332
  n308 -->|Depends on| n332
  n308 -->|Depends on| n321
  n308 -->|Depends on| n229
  n309 -->|Defined by| n332
  n309 -->|Depends on| n332
  n309 -->|Depends on| n268
  n309 -->|Depends on| n1
  n309 -->|Depends on| n229
  n309 -->|Depends on| n234
  n311 -->|Defined by| n332
  n311 -->|Depends on| n332
  n311 -->|Depends on| n229
  n311 -->|Depends on| n226
  n313 -->|Defined by| n332
  n313 -->|Depends on| n332
  n313 -->|Depends on| n321
  n313 -->|Depends on| n229
  n313 -->|Depends on| n303
  n313 -->|Depends on| n307
  n314 -->|Defined by| n332
  n314 -->|Depends on| n332
  n314 -->|Depends on| n232
  n314 -->|Depends on| n231
  n315 -->|Uses the variables of| n8
  n315 -->|Uses the variables of| n11
  n315 -->|Uses the variables of| n6
  n315 -->|Styles| n318
  n316 -->|Defined by| n332
  n316 -->|Depends on| n332
  n316 -->|Depends on| n321
  n318 -->|Serves| n429
  n318 -->|Depends on| n319
  n318 -->|Depends on| n328
  n318 -->|Depends on| n12
  n318 -->|Depends on| n4
  n318 -->|Depends on| n8
  n318 -->|Depends on| n7
  n318 -->|Depends on| n11
  n318 -->|Depends on| n5
  n318 -->|Depends on| n9
  n318 -->|Depends on| n3
  n318 -->|Depends on| n6
  n318 -->|Depends on| n44
  n318 -->|Depends on| n20
  n318 -->|Depends on| n15
  n318 -->|Depends on| n18
  n318 -->|Depends on| n326
  n318 -->|Depends on| n331
  n318 -->|Depends on| n329
  n318 -->|Depends on| n314
  n318 -->|Depends on| n310
  n318 -->|Depends on| n322
  n318 -->|Depends on| n320
  n318 -->|Depends on| n225
  n318 -->|Depends on| n224
  n318 -->|Depends on| n279
  n318 -->|Depends on| n277
  n318 -->|Depends on| n684
  n320 -->|Defined by| n332
  n320 -->|Depends on| n332
  n320 -->|Depends on| n228
  n322 -->|Defined by| n332
  n322 -->|Depends on| n332
  n322 -->|Depends on| n235
  n322 -->|Depends on| n230
  n322 -->|Depends on| n707
  n322 -->|Depends on| n696
  n323 -->|Uses the variables of| n12
  n323 -->|Uses the variables of| n8
  n323 -->|Uses the variables of| n7
  n323 -->|Uses the variables of| n11
  n323 -->|Uses the variables of| n5
  n323 -->|Uses the variables of| n9
  n323 -->|Uses the variables of| n3
  n323 -->|Uses the variables of| n6
  n323 -->|Styles| n318
  n325 -->|Defined by| n332
  n325 -->|Depends on| n332
  n325 -->|Depends on| n324
  n325 -->|Depends on| n321
  n325 -->|Depends on| n229
  n326 -->|Defined by| n332
  n326 -->|Depends on| n332
  n326 -->|Depends on| n229
  n326 -->|Depends on| n327
  n326 -->|Depends on| n313
  n326 -->|Depends on| n309
  n327 -->|Defined by| n332
  n327 -->|Depends on| n332
  n327 -->|Depends on| n229
  n327 -->|Depends on| n304
  n327 -->|Depends on| n305
  n327 -->|Depends on| n306
  n327 -->|Depends on| n316
  n327 -->|Depends on| n308
  n329 -->|Defined by| n332
  n329 -->|Depends on| n332
  n329 -->|Depends on| n225
  n329 -->|Depends on| n224
  n329 -->|Depends on| n226
  n329 -->|Depends on| n223
  n330 -->|Serves| n436
  n330 -->|Applied by| n323
  n330 -->|Applied by| n315
  n330 -->|Applied by| n331
  n330 -->|Applied by| n314
  n330 -->|Applied by| n318
  n331 -->|Defined by| n332
  n331 -->|Depends on| n332
  n331 -->|Depends on| n225
  n331 -->|Depends on| n232
  n331 -->|Depends on| n231
  n331 -->|Depends on| n222
  n331 -->|Depends on| n233
  n331 -->|Depends on| n227
  n331 -->|Depends on| n224
  n333 -->|Chooses| n346
  n333 -->|In| n29
  n333 -->|In| n52
  n333 -->|Serves| n430
  n334 -->|Chooses| n373
  n334 -->|In| n29
  n334 -->|In| n52
  n334 -->|Serves| n430
  n335 -->|Implements| n20
  n336 -->|Implements| n21
  n337 -->|Implements| n22
  n339 -->|Chooses| n384
  n339 -->|Chooses| n372
  n339 -->|In| n29
  n339 -->|In| n52
  n339 -->|Serves| n430
  n340 -->|Implements| n15
  n340 -->|Uses| n288
  n341 -->|Chooses| n340
  n341 -->|In| n29
  n341 -->|In| n52
  n341 -->|Serves| n430
  n342 -->|Implements| n40
  n342 -->|Implements| n42
  n342 -->|Implements| n41
  n342 -->|Depends on| n343
  n342 -->|Depends on| n38
  n342 -->|Depends on| n157
  n342 -->|Depends on| n281
  n344 -->|Chooses| n351
  n344 -->|Chooses| n366
  n344 -->|In| n52
  n344 -->|Serves| n430
  n345 -->|Chooses| n354
  n345 -->|Chooses| n380
  n345 -->|Chooses| n367
  n345 -->|Chooses| n342
  n345 -->|Chooses| n352
  n345 -->|In| n52
  n345 -->|Serves| n430
  n346 -->|Implements| n13
  n346 -->|Depends on| n20
  n346 -->|Depends on| n22
  n346 -->|Depends on| n722
  n346 -->|Depends on| n702
  n346 -->|Depends on| n703
  n346 -->|Depends on| n700
  n346 -->|Depends on| n699
  n346 -->|Depends on| n711
  n346 -->|Depends on| n717
  n346 -->|Depends on| n719
  n346 -->|Depends on| n705
  n346 -->|Depends on| n709
  n348 -->|Depends on| n21
  n348 -->|Depends on| n22
  n348 -->|Depends on| n20
  n348 -->|Depends on| n38
  n349 -->|Depends on| n21
  n349 -->|Depends on| n22
  n349 -->|Depends on| n20
  n349 -->|Depends on| n38
  n349 -->|Depends on| n350
  n349 -->|Depends on| n153
  n351 -->|Implements| n20
  n351 -->|Implements| n22
  n351 -->|Implements| n21
  n351 -->|Implements| n56
  n351 -->|Depends on| n38
  n351 -->|Depends on| n353
  n351 -->|Depends on| n281
  n352 -->|Implements| n25
  n352 -->|Implements| n46
  n352 -->|Depends on| n281
  n354 -->|Implements| n50
  n354 -->|Implements| n51
  n354 -->|Depends on| n347
  n354 -->|Depends on| n281
  n355 -->|Implements| n17
  n355 -->|Depends on| n50
  n355 -->|Depends on| n157
  n355 -->|Depends on| n151
  n355 -->|Depends on| n281
  n356 -->|Implements| n18
  n356 -->|Depends on| n317
  n357 -->|Implements| n24
  n358 -->|Implements| n25
  n359 -->|Chooses| n335
  n359 -->|Chooses| n337
  n359 -->|Chooses| n336
  n359 -->|Chooses| n362
  n359 -->|Chooses| n363
  n359 -->|Chooses| n364
  n359 -->|Chooses| n381
  n359 -->|Chooses| n369
  n359 -->|Chooses| n368
  n359 -->|Chooses| n358
  n359 -->|In| n29
  n359 -->|Serves| n430
  n360 -->|Implements| n38
  n361 -->|Chooses| n360
  n361 -->|Chooses| n357
  n361 -->|Chooses| n356
  n361 -->|Chooses| n365
  n361 -->|Chooses| n355
  n361 -->|Chooses| n374
  n361 -->|In| n29
  n361 -->|In| n52
  n361 -->|Serves| n430
  n362 -->|Implements| n40
  n362 -->|Depends on| n388
  n362 -->|Depends on| n158
  n363 -->|Implements| n42
  n363 -->|Depends on| n388
  n364 -->|Implements| n50
  n364 -->|Depends on| n281
  n365 -->|Implements| n53
  n366 -->|Implements| n32
  n366 -->|Depends on| n22
  n366 -->|Depends on| n38
  n366 -->|Depends on| n153
  n366 -->|Depends on| n294
  n367 -->|Implements| n33
  n368 -->|Implements| n32
  n369 -->|Implements| n33
  n370 -->|Depends on| n348
  n370 -->|Depends on| n349
  n371 -->|Chooses| n370
  n371 -->|In| n29
  n371 -->|In| n52
  n371 -->|Serves| n430
  n372 -->|Implements| n44
  n372 -->|Depends on| n338
  n372 -->|Depends on| n153
  n372 -->|Depends on| n216
  n372 -->|Depends on| n720
  n373 -->|Implements| n55
  n373 -->|Uses| n300
  n373 -->|Uses| n293
  n374 -->|Implements| n26
  n375 -->|Chooses| n205
  n375 -->|In| n29
  n375 -->|In| n52
  n375 -->|Serves| n430
  n376 -->|Implements| n45
  n377 -->|Chooses| n376
  n377 -->|In| n52
  n377 -->|Serves| n430
  n378 -->|Chooses| n379
  n378 -->|In| n29
  n378 -->|Serves| n430
  n379 -->|Implements| n45
  n379 -->|Depends on| n153
  n379 -->|Depends on| n338
  n379 -->|Depends on| n190
  n379 -->|Depends on| n196
  n380 -->|Implements| n16
  n380 -->|Depends on| n382
  n380 -->|Depends on| n383
  n381 -->|Implements| n16
  n381 -->|Depends on| n158
  n384 -->|Implements| n39
  n384 -->|Depends on| n338
  n385 -->|Chooses| n389
  n385 -->|In| n29
  n385 -->|In| n52
  n385 -->|Serves| n430
  n386 -->|Implements| n30
  n386 -->|Uses| n298
  n386 -->|Depends on| n39
  n386 -->|Depends on| n152
  n386 -->|Depends on| n720
  n387 -->|Chooses| n386
  n387 -->|In| n29
  n387 -->|In| n52
  n387 -->|Serves| n430
  n389 -->|Implements| n49
  n389 -->|Uses| n302
  n389 -->|Uses| n291
  n389 -->|Uses| n286
  n389 -->|Depends on| n281
  n390 -->|Serves| n429
  n390 -->|Applied by| n183
  n390 -->|Applied by| n129
  n391 -->|Serves| n436
  n391 -->|Applied by| n333
  n392 -->|Serves| n436
  n392 -->|Applied by| n183
  n392 -->|Applied by| n197
  n393 -->|Serves| n438
  n393 -->|Applied by| n618
  n393 -->|Applied by| n619
  n394 -->|Serves| n436
  n394 -->|Applied by| n192
  n394 -->|Applied by| n194
  n395 -->|Serves| n429
  n395 -->|Applied by| n121
  n395 -->|Applied by| n161
  n396 -->|Serves| n429
  n396 -->|Applied by| n54
  n396 -->|Applied by| n43
  n396 -->|Applied by| n31
  n396 -->|Applied by| n28
  n397 -->|Serves| n438
  n397 -->|Applied by| n619
  n397 -->|Applied by| n683
  n398 -->|Serves| n436
  n398 -->|Applied by| n183
  n398 -->|Applied by| n684
  n399 -->|Serves| n429
  n399 -->|Applied by| n669
  n400 -->|Serves| n429
  n400 -->|Applied by| n113
  n400 -->|Applied by| n214
  n400 -->|Applied by| n591
  n400 -->|Applied by| n597
  n401 -->|Serves| n429
  n401 -->|Applied by| n208
  n401 -->|Applied by| n55
  n401 -->|Applied by| n720
  n401 -->|Applied by| n148
  n402 -->|Serves| n429
  n402 -->|Applied by| n183
  n402 -->|Applied by| n119
  n403 -->|Serves| n436
  n403 -->|Applied by| n199
  n403 -->|Applied by| n133
  n404 -->|Serves| n436
  n404 -->|Applied by| n183
  n404 -->|Applied by| n182
  n404 -->|Applied by| n202
  n404 -->|Applied by| n208
  n404 -->|Applied by| n197
  n405 -->|Serves| n438
  n405 -->|Applied by| n204
  n405 -->|Applied by| n183
  n405 -->|Applied by| n182
  n405 -->|Applied by| n206
  n405 -->|Applied by| n260
  n405 -->|Applied by| n113
  n406 -->|Serves| n438
  n406 -->|Applied by| n204
  n406 -->|Applied by| n197
  n406 -->|Applied by| n145
  n406 -->|Applied by| n137
  n406 -->|Applied by| n263
  n406 -->|Applied by| n262
  n407 -->|Serves| n429
  n407 -->|Applied by| n167
  n407 -->|Applied by| n665
  n408 -->|Serves| n436
  n408 -->|Applied by| n676
  n408 -->|Applied by| n237
  n408 -->|Applied by| n183
  n408 -->|Applied by| n28
  n408 -->|Applied by| n31
  n409 -->|Serves| n429
  n409 -->|Applied by| n197
  n409 -->|Applied by| n183
  n409 -->|Applied by| n204
  n410 -->|Serves| n436
  n410 -->|Applied by| n183
  n410 -->|Applied by| n684
  n411 -->|Serves| n436
  n411 -->|Applied by| n119
  n411 -->|Applied by| n142
  n411 -->|Applied by| n200
  n411 -->|Applied by| n318
  n411 -->|Applied by| n181
  n412 -->|Serves| n429
  n412 -->|Applied by| n182
  n412 -->|Applied by| n194
  n412 -->|Applied by| n211
  n412 -->|Applied by| n43
  n413 -->|Serves| n438
  n413 -->|Applied by| n204
  n413 -->|Applied by| n145
  n413 -->|Applied by| n370
  n413 -->|Applied by| n371
  n413 -->|Applied by| n113
  n413 -->|Applied by| n197
  n413 -->|Applied by| n129
  n414 -->|Serves| n429
  n414 -->|Applied by| n344
  n414 -->|Applied by| n657
  n414 -->|Applied by| n645
  n414 -->|Applied by| n605
  n415 -->|Serves| n429
  n415 -->|Applied by| n39
  n415 -->|Applied by| n154
  n415 -->|Applied by| n150
  n415 -->|Applied by| n197
  n416 -->|Serves| n429
  n416 -->|Applied by| n375
  n416 -->|Applied by| n378
  n416 -->|Applied by| n377
  n417 -->|Serves| n438
  n417 -->|Applied by| n658
  n417 -->|Applied by| n655
  n417 -->|Applied by| n614
  n417 -->|Applied by| n613
  n418 -->|Serves| n429
  n418 -->|Applied by| n140
  n418 -->|Applied by| n134
  n418 -->|Applied by| n668
  n418 -->|Applied by| n673
  n418 -->|Applied by| n671
  n418 -->|Applied by| n637
  n418 -->|Applied by| n616
  n419 -->|Serves| n430
  n419 -->|Applied by| n361
  n419 -->|Applied by| n359
  n419 -->|Applied by| n345
  n419 -->|Applied by| n341
  n419 -->|Applied by| n385
  n419 -->|Applied by| n387
  n419 -->|Applied by| n334
  n419 -->|Applied by| n339
  n419 -->|Applied by| n575
  n419 -->|Applied by| n576
  n419 -->|Applied by| n587
  n419 -->|Applied by| n586
  n419 -->|Applied by| n581
  n419 -->|Applied by| n580
  n420 -->|Serves| n429
  n420 -->|Applied by| n113
  n420 -->|Applied by| n214
  n420 -->|Applied by| n592
  n420 -->|Applied by| n591
  n420 -->|Applied by| n602
  n421 -->|Serves| n429
  n421 -->|Applied by| n183
  n421 -->|Applied by| n213
  n422 -->|Serves| n429
  n422 -->|Applied by| n197
  n422 -->|Applied by| n602
  n423 -->|Serves| n429
  n423 -->|Applied by| n197
  n423 -->|Applied by| n211
  n423 -->|Applied by| n204
  n424 -->|Serves| n436
  n424 -->|Applied by| n684
  n424 -->|Applied by| n676
  n424 -->|Applied by| n271
  n424 -->|Applied by| n274
  n424 -->|Applied by| n278
  n424 -->|Applied by| n283
  n424 -->|Applied by| n279
  n424 -->|Applied by| n273
  n424 -->|Applied by| n270
  n424 -->|Applied by| n269
  n424 -->|Applied by| n281
  n424 -->|Applied by| n282
  n434 -->|Refines| n429
  n435 -->|Accepts| n434
  n439 -->|Releases| n54
  n440 -->|Releases| n54
  n440 -->|Assembled by| n563
  n441 -->|Releases| n54
  n441 -->|Assembled by| n573
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
  n449 -->|Assembled by| n448
  n450 -->|Releases| n54
  n450 -->|Assembled by| n449
  n451 -->|Releases| n54
  n451 -->|Assembled by| n440
  n452 -->|Releases| n54
  n452 -->|Assembled by| n450
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
  n460 -->|Assembled by| n459
  n461 -->|Releases| n54
  n461 -->|Assembled by| n460
  n462 -->|Releases| n54
  n462 -->|Assembled by| n451
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
  n480 -->|Assembled by| n473
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
  n486 -->|Assembled by| n439
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
  n563 -->|Releases| n54
  n563 -->|Assembled by| n552
  n564 -->|Releases| n54
  n564 -->|Assembled by| n562
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
  n571 -->|Releases| n54
  n571 -->|Assembled by| n570
  n572 -->|Releases| n54
  n572 -->|Assembled by| n571
  n573 -->|Releases| n54
  n573 -->|Assembled by| n572
  n574 -->|In| n29
  n574 -->|In| n52
  n574 -->|Serves| n430
  n575 -->|In| n29
  n575 -->|In| n52
  n575 -->|Serves| n430
  n576 -->|In| n29
  n576 -->|In| n52
  n576 -->|Serves| n430
  n577 -->|Serves| n429
  n577 -->|Implements| n583
  n577 -->|Depends on| n579
  n577 -->|Depends on| n266
  n577 -->|Depends on| n332
  n578 -->|Serves| n429
  n578 -->|Applied by| n582
  n578 -->|Applied by| n43
  n580 -->|Chooses| n585
  n580 -->|In| n29
  n580 -->|In| n52
  n580 -->|Serves| n430
  n581 -->|Chooses| n577
  n581 -->|In| n29
  n581 -->|In| n52
  n581 -->|Serves| n430
  n582 -->|Serves| n429
  n582 -->|Depends on| n583
  n584 -->|Serves| n430
  n584 -->|Applied by| n582
  n584 -->|Applied by| n575
  n584 -->|Applied by| n576
  n584 -->|Applied by| n587
  n584 -->|Applied by| n586
  n584 -->|Applied by| n581
  n584 -->|Applied by| n580
  n584 -->|Applied by| n574
  n585 -->|Serves| n429
  n585 -->|Implements| n579
  n585 -->|Depends on| n266
  n585 -->|Depends on| n268
  n585 -->|Depends on| n332
  n585 -->|Depends on| n1
  n585 -->|Depends on| n10
  n585 -->|Depends on| n2
  n585 -->|Depends on| n234
  n585 -->|Depends on| n224
  n585 -->|Depends on| n280
  n586 -->|In| n29
  n586 -->|In| n52
  n586 -->|Serves| n430
  n587 -->|In| n29
  n587 -->|In| n52
  n587 -->|Serves| n430
  n588 -->|Verifies| n599
  n588 -->|Verifies| n606
  n588 -->|In| n52
  n588 -->|Depends on| n604
  n588 -->|Depends on| n598
  n588 -->|Depends on| n282
  n589 -->|Verifies| n183
  n589 -->|Verifies| n213
  n589 -->|Verifies| n181
  n589 -->|Verifies| n723
  n589 -->|In| n52
  n589 -->|Depends on| n183
  n589 -->|Depends on| n40
  n589 -->|Depends on| n181
  n589 -->|Depends on| n150
  n589 -->|Depends on| n590
  n589 -->|Depends on| n282
  n591 -->|Verifies| n119
  n591 -->|Verifies| n131
  n591 -->|Verifies| n182
  n591 -->|Verifies| n211
  n591 -->|Verifies| n200
  n591 -->|Verifies| n199
  n591 -->|Verifies| n351
  n591 -->|Verifies| n354
  n591 -->|Verifies| n380
  n591 -->|In| n52
  n591 -->|Depends on| n119
  n591 -->|Depends on| n597
  n591 -->|Depends on| n56
  n591 -->|Depends on| n51
  n591 -->|Depends on| n153
  n591 -->|Depends on| n20
  n591 -->|Depends on| n38
  n591 -->|Depends on| n40
  n591 -->|Depends on| n157
  n591 -->|Depends on| n270
  n591 -->|Depends on| n282
  n592 -->|Verifies| n183
  n592 -->|Verifies| n204
  n592 -->|Verifies| n208
  n592 -->|Verifies| n213
  n592 -->|Verifies| n194
  n592 -->|Verifies| n373
  n592 -->|Verifies| n386
  n592 -->|Verifies| n384
  n592 -->|Verifies| n351
  n592 -->|Verifies| n360
  n592 -->|Verifies| n342
  n592 -->|Verifies| n374
  n592 -->|In| n52
  n592 -->|Depends on| n183
  n592 -->|Depends on| n40
  n592 -->|Depends on| n16
  n592 -->|Depends on| n596
  n592 -->|Depends on| n282
  n593 -->|Verifies| n180
  n593 -->|Verifies| n301
  n593 -->|Verifies| n178
  n593 -->|In| n52
  n593 -->|Depends on| n180
  n593 -->|Depends on| n277
  n593 -->|Depends on| n301
  n593 -->|Depends on| n594
  n593 -->|Depends on| n282
  n595 -->|Verifies| n184
  n595 -->|Verifies| n193
  n595 -->|Verifies| n192
  n595 -->|Verifies| n206
  n595 -->|Verifies| n203
  n595 -->|In| n52
  n595 -->|Depends on| n184
  n595 -->|Depends on| n193
  n595 -->|Depends on| n192
  n595 -->|Depends on| n206
  n595 -->|Depends on| n203
  n595 -->|Depends on| n603
  n595 -->|Depends on| n282
  n599 -->|Implements| n604
  n599 -->|Depends on| n598
  n601 -->|Verifies| n195
  n601 -->|In| n52
  n601 -->|Depends on| n195
  n601 -->|Depends on| n600
  n601 -->|Depends on| n282
  n602 -->|Verifies| n197
  n602 -->|In| n52
  n602 -->|Depends on| n197
  n602 -->|Depends on| n183
  n602 -->|Depends on| n40
  n602 -->|Depends on| n16
  n602 -->|Depends on| n282
  n605 -->|Chooses| n606
  n605 -->|Chooses| n599
  n605 -->|In| n52
  n606 -->|Implements| n604
  n606 -->|Depends on| n598
  n607 -->|Serves| n429
  n607 -->|Part of| n664
  n607 -->|Depends on| n40
  n607 -->|Depends on| n153
  n607 -->|Depends on| n157
  n607 -->|Depends on| n630
  n607 -->|Depends on| n621
  n607 -->|Depends on| n720
  n607 -->|Depends on| n716
  n607 -->|Depends on| n659
  n608 -->|Verifies| n607
  n608 -->|In| n52
  n608 -->|Depends on| n607
  n608 -->|Depends on| n41
  n608 -->|Depends on| n157
  n608 -->|Depends on| n630
  n608 -->|Depends on| n609
  n608 -->|Depends on| n716
  n608 -->|Depends on| n282
  n610 -->|Serves| n429
  n610 -->|Part of| n664
  n610 -->|Depends on| n663
  n610 -->|Depends on| n634
  n610 -->|Depends on| n659
  n611 -->|Serves| n429
  n612 -->|Serves| n429
  n613 -->|In| n47
  n614 -->|In| n29
  n615 -->|Serves| n429
  n616 -->|Checks| n621
  n616 -->|Run by| n143
  n616 -->|Signed by| n635
  n617 -->|Checks| n621
  n617 -->|Run by| n123
  n617 -->|Signed by| n635
  n617 -->|Verifies| n335
  n617 -->|Verifies| n337
  n617 -->|Verifies| n336
  n617 -->|Verifies| n362
  n617 -->|Verifies| n363
  n617 -->|Verifies| n364
  n617 -->|Verifies| n381
  n617 -->|Verifies| n369
  n617 -->|Verifies| n368
  n617 -->|Verifies| n358
  n617 -->|Verifies| n379
  n618 -->|Chooses| n644
  n618 -->|Chooses| n643
  n618 -->|In| n29
  n618 -->|In| n47
  n618 -->|Serves| n429
  n619 -->|In| n29
  n619 -->|Serves| n429
  n620 -->|Serves| n429
  n621 -->|Produced by| n54
  n622 -->|Serves| n429
  n623 -->|Serves| n429
  n624 -->|Its obligations| n623
  n624 -->|Its obligations| n632
  n624 -->|Its obligations| n611
  n624 -->|Its obligations| n615
  n624 -->|Its obligations| n612
  n624 -->|Its obligations| n622
  n624 -->|Its obligations| n620
  n625 -->|Produced by| n127
  n625 -->|Carries| n35
  n627 -->|Checks| n625
  n627 -->|Run by| n639
  n627 -->|Signed by| n635
  n627 -->|Verifies| n63
  n627 -->|Verifies| n62
  n627 -->|Verifies| n61
  n627 -->|Verifies| n60
  n627 -->|Verifies| n59
  n627 -->|Verifies| n57
  n627 -->|Verifies| n58
  n629 -->|Serves| n429
  n629 -->|Depends on| n321
  n629 -->|Depends on| n266
  n629 -->|Depends on| n222
  n631 -->|Ships| n662
  n631 -->|Requires| n633
  n631 -->|Requires| n647
  n631 -->|Programs assembled for| n29
  n631 -->|Follows the policy| n636
  n632 -->|Serves| n429
  n633 -->|Signed by| n635
  n633 -->|Verifies| n642
  n636 -->|Its obligations| n623
  n636 -->|Its obligations| n612
  n637 -->|Ships| n621
  n637 -->|Ships| n646
  n637 -->|Ships| n625
  n637 -->|Deployed by| n113
  n637 -->|Programs assembled for| n29
  n637 -->|Follows the policy| n624
  n638 -->|Verifies| n639
  n638 -->|Verifies| n629
  n638 -->|In| n52
  n638 -->|Depends on| n639
  n638 -->|Depends on| n625
  n638 -->|Depends on| n629
  n638 -->|Depends on| n659
  n638 -->|Depends on| n628
  n638 -->|Depends on| n282
  n639 -->|Serves| n429
  n639 -->|Part of| n664
  n639 -->|Depends on| n625
  n639 -->|Depends on| n277
  n639 -->|Depends on| n629
  n639 -->|Depends on| n626
  n639 -->|Depends on| n659
  n640 -->|Verifies| n644
  n640 -->|Verifies| n643
  n640 -->|In| n52
  n640 -->|Depends on| n663
  n640 -->|Depends on| n634
  n640 -->|Depends on| n651
  n640 -->|Depends on| n153
  n640 -->|Depends on| n157
  n640 -->|Depends on| n382
  n640 -->|Depends on| n648
  n640 -->|Depends on| n282
  n642 -->|Depends on| n641
  n643 -->|Serves| n429
  n643 -->|Depends on| n153
  n643 -->|Depends on| n155
  n643 -->|Depends on| n720
  n643 -->|Depends on| n157
  n643 -->|Depends on| n158
  n643 -->|Depends on| n382
  n643 -->|Depends on| n651
  n644 -->|Serves| n429
  n644 -->|Depends on| n663
  n644 -->|Depends on| n634
  n644 -->|Depends on| n648
  n644 -->|Depends on| n153
  n644 -->|Depends on| n651
  n645 -->|Chooses| n644
  n645 -->|Chooses| n643
  n645 -->|In| n52
  n646 -->|Produced by| n35
  n646 -->|Assembled for| n14
  n647 -->|Signed by| n635
  n649 -->|Runs elsewhere| n631
  n649 -->|Its writer's settings| n648
  n650 -->|Serves| n429
  n650 -->|Part of| n664
  n650 -->|Depends on| n663
  n650 -->|Depends on| n634
  n650 -->|Depends on| n659
  n652 -->|Run by| n650
  n652 -->|Signed by| n635
  n654 -->|Requires| n652
  n654 -->|Deployed by| n610
  n654 -->|Programs assembled for| n29
  n654 -->|Follows the policy| n660
  n655 -->|In| n29
  n655 -->|In| n47
  n656 -->|Ships| n649
  n657 -->|In| n52
  n658 -->|In| n29
  n658 -->|In| n47
  n659 -->|Written in| n277
  n660 -->|Its obligations| n623
  n660 -->|Its obligations| n612
  n660 -->|Its obligations| n620
  n661 -->|Verifies| n650
  n661 -->|Verifies| n610
  n661 -->|In| n52
  n661 -->|Depends on| n650
  n661 -->|Depends on| n610
  n661 -->|Depends on| n663
  n661 -->|Depends on| n634
  n661 -->|Depends on| n653
  n661 -->|Depends on| n659
  n661 -->|Depends on| n282
  n664 -->|Deployed in| n29
  n665 -->|Chooses| n642
  n665 -->|In| n29
  n665 -->|In| n47
  n666 -->|Implements| n48
  n666 -->|Depends on| n24
  n668 -->|Serves| n429
  n668 -->|Depends on| n153
  n668 -->|Depends on| n673
  n668 -->|Depends on| n20
  n668 -->|Depends on| n38
  n668 -->|Depends on| n24
  n668 -->|Depends on| n192
  n668 -->|Depends on| n48
  n669 -->|Chooses| n666
  n669 -->|In| n29
  n669 -->|In| n52
  n669 -->|Serves| n429
  n670 -->|Serves| n429
  n670 -->|Depends on| n157
  n670 -->|Depends on| n204
  n670 -->|Depends on| n153
  n670 -->|Depends on| n217
  n670 -->|Depends on| n20
  n670 -->|Depends on| n38
  n671 -->|Refines| n429
  n672 -->|Accepts| n671
  n676 -->|Serves| n429
  n676 -->|Depends on| n154
  n676 -->|Depends on| n274
  n680 -->|Written in| n277
  n681 -->|Serves| n429
  n681 -->|Applied by| n684
  n681 -->|Applied by| n49
  n682 -->|Serves| n429
  n682 -->|Applied by| n684
  n682 -->|Applied by| n676
  n682 -->|Applied by| n49
  n683 -->|In| n52
  n683 -->|Serves| n429
  n684 -->|Serves| n429
  n684 -->|Serves| n436
  n684 -->|Depends on| n49
  n684 -->|Depends on| n677
  n684 -->|Depends on| n680
  n684 -->|Depends on| n678
  n684 -->|Depends on| n679
  n684 -->|Depends on| n674
  n684 -->|Depends on| n20
  n684 -->|Depends on| n26
  n684 -->|Depends on| n45
  n684 -->|Depends on| n153
  n684 -->|Depends on| n38
  n684 -->|Depends on| n24
  n685 -->|Defined by| n688
  n685 -->|Read in| n691
  n685 -->|Depends on| n688
  n686 -->|Defined by| n688
  n686 -->|Read in| n691
  n686 -->|Depends on| n688
  n687 -->|Defined by| n688
  n687 -->|Read in| n691
  n687 -->|Depends on| n688
  n687 -->|Depends on| n691
  n689 -->|Defined by| n688
  n689 -->|Read in| n691
  n689 -->|Depends on| n688
  n689 -->|Depends on| n687
  n690 -->|Defined by| n688
  n690 -->|Read in| n691
  n690 -->|Depends on| n688
  n690 -->|Depends on| n692
  n690 -->|Depends on| n687
  n691 -->|Defined by| n688
  n691 -->|Read by| n684
  n691 -->|Uses| n290
  n693 -->|Serves| n429
  n693 -->|Depends on| n688
  n693 -->|Depends on| n692
  n693 -->|Depends on| n153
  n693 -->|Depends on| n686
  n693 -->|Depends on| n687
  n693 -->|Depends on| n689
  n693 -->|Depends on| n685
  n693 -->|Depends on| n690
  n693 -->|Depends on| n38
  n693 -->|Depends on| n39
  n693 -->|Depends on| n274
  n694 -->|Defined by| n722
  n694 -->|Read in| n720
  n694 -->|Depends on| n722
  n695 -->|Defined by| n722
  n695 -->|Read in| n720
  n695 -->|Depends on| n722
  n696 -->|Defined by| n722
  n696 -->|Read in| n720
  n696 -->|Depends on| n722
  n697 -->|Defined by| n722
  n697 -->|Read in| n720
  n697 -->|Depends on| n722
  n698 -->|Defined by| n722
  n698 -->|Read in| n720
  n698 -->|Depends on| n722
  n699 -->|Defined by| n722
  n699 -->|Read in| n720
  n699 -->|Depends on| n722
  n700 -->|Defined by| n722
  n700 -->|Read in| n720
  n700 -->|Depends on| n722
  n701 -->|Defined by| n722
  n701 -->|Read in| n720
  n701 -->|Depends on| n722
  n701 -->|Depends on| n719
  n702 -->|Defined by| n722
  n702 -->|Read in| n720
  n702 -->|Depends on| n722
  n703 -->|Defined by| n722
  n703 -->|Read in| n720
  n703 -->|Depends on| n722
  n704 -->|Defined by| n722
  n704 -->|Read in| n720
  n704 -->|Depends on| n722
  n705 -->|Defined by| n722
  n705 -->|Read in| n720
  n705 -->|Depends on| n722
  n706 -->|Defined by| n722
  n706 -->|Read in| n720
  n706 -->|Depends on| n722
  n707 -->|Defined by| n722
  n707 -->|Read in| n720
  n707 -->|Depends on| n722
  n708 -->|Defined by| n722
  n708 -->|Read in| n720
  n708 -->|Depends on| n722
  n709 -->|Defined by| n722
  n709 -->|Read in| n720
  n709 -->|Depends on| n722
  n709 -->|Depends on| n719
  n710 -->|Defined by| n722
  n710 -->|Read in| n720
  n710 -->|Depends on| n722
  n711 -->|Defined by| n722
  n711 -->|Read in| n720
  n711 -->|Depends on| n722
  n712 -->|Defined by| n722
  n712 -->|Read in| n720
  n712 -->|Depends on| n722
  n713 -->|Defined by| n722
  n713 -->|Read in| n720
  n713 -->|Depends on| n722
  n714 -->|Defined by| n722
  n714 -->|Read in| n720
  n714 -->|Depends on| n722
  n715 -->|Defined by| n722
  n715 -->|Read in| n720
  n715 -->|Depends on| n722
  n717 -->|Defined by| n722
  n717 -->|Read in| n720
  n717 -->|Depends on| n722
  n717 -->|Depends on| n719
  n718 -->|Defined by| n722
  n718 -->|Read in| n720
  n718 -->|Depends on| n722
  n719 -->|Defined by| n722
  n719 -->|Read in| n720
  n719 -->|Depends on| n722
  n720 -->|Read by| n684
  n720 -->|Watches the globals| n725
  n720 -->|Uses| n299
  n721 -->|Serves| n429
  n723 -->|Serves| n429
  n723 -->|Depends on| n720
  n723 -->|Depends on| n722
  n723 -->|Depends on| n150
  n723 -->|Depends on| n716
  n723 -->|Depends on| n156
  n723 -->|Depends on| n706
  n723 -->|Depends on| n719
  n723 -->|Depends on| n707
  n723 -->|Depends on| n713
  n723 -->|Depends on| n699
  n723 -->|Depends on| n698
  n723 -->|Depends on| n715
  n723 -->|Depends on| n717
  n723 -->|Depends on| n711
  n723 -->|Depends on| n694
  n723 -->|Depends on| n700
  n723 -->|Depends on| n709
  n723 -->|Depends on| n701
  n723 -->|Depends on| n695
  n723 -->|Depends on| n714
  n723 -->|Depends on| n712
  n723 -->|Depends on| n724
  n723 -->|Depends on| n704
  n723 -->|Depends on| n718
  n723 -->|Depends on| n696
  n723 -->|Depends on| n705
  n723 -->|Depends on| n697
  n723 -->|Depends on| n158
  n723 -->|Depends on| n38
  n723 -->|Depends on| n39
  n723 -->|Depends on| n274
  n724 -->|Defined by| n722
  n724 -->|Read in| n720
  n724 -->|Depends on| n722
  n43 -.->|Depends on| n39
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
