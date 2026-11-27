# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

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
    n151["JSON formatting<br/><small>Decision</small>"]:::neutral
    n152["The commands the engine keeps<br/><small>Decision</small>"]:::neutral
    n153["The language's names<br/><small>Decision</small>"]:::neutral
    n154["Project layout<br/><small>Decision</small>"]:::neutral
    n155["The prelude's public API<br/><small>Decision</small>"]:::neutral
    n156["How a project starts<br/><small>Decision</small>"]:::neutral
    n157["Names of steps<br/><small>Decision</small>"]:::neutral
    n158["Trame's commands<br/><small>Standard</small>"]:::neutral
    n159["Trame's environment<br/><small>Standard</small>"]:::neutral
    n160["Order of the view groups<br/><small>Decision</small>"]:::neutral
  end
  subgraph delivery["Trame · Delivery"]
    n161["How a bundle is led<br/><small>Decision</small>"]:::neutral
    n162["Style of a delivered page<br/><small>Syntax element</small>"]:::held
    n163["The names a bundle is led by<br/><small>Function</small>"]:::held
  end
  subgraph doctor["Trame · Doctor"]
    n164["Asking<br/><small>Function</small>"]:::held
    n165["The clock gives the day<br/><small>Implementation</small>"]:::held
    n166["What the doctor writes, runs and waits for<br/><small>Decision</small>"]:::neutral
    n167["What the engine needs of the machine<br/><small>Port</small>"]:::neutral
    n168["What the engine asks the machine<br/><small>Technical choice</small>"]:::held
    n169["A file written is read back<br/><small>Implementation</small>"]:::held
    n170["The installer installs what a manifest names and writes its lockfile<br/><small>Implementation</small>"]:::held
    n171["A program runs with the engine's loader, and prints what it says<br/><small>Implementation</small>"]:::held
    n172["The registry answers about the packages<br/><small>Implementation</small>"]:::held
    n173["A run is kept, and given back until a file it read changes<br/><small>Implementation</small>"]:::held
    n174["A server listens on a port the system gives<br/><small>Implementation</small>"]:::held
    n175["The time passes<br/><small>Implementation</small>"]:::held
    n176["A directory copied is the same as the original<br/><small>Implementation</small>"]:::held
  end
  subgraph documents["Trame · Documents"]
    n177["Documents written in Trame's language<br/><small>Technical choice</small>"]:::held
    n178["Settings of the documents<br/><small>Decision</small>"]:::neutral
    n179["The documents in Trame's language<br/><small>Function</small>"]:::held
    n180["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
    n181["Visible text<br/><small>Function</small>"]:::held
  end
  subgraph engine["Trame · Engine"]
    n182["Assembly<br/><small>Function</small>"]:::held
    n183["Compilation API<br/><small>Function</small>"]:::held
    n184["Compiler<br/><small>Function</small>"]:::held
    n185["Cycles<br/><small>Function</small>"]:::held
    n186["Date bundle<br/><small>Function</small>"]:::held
    n187["trame dev server<br/><small>Function</small>"]:::held
    n188["What trame dev serves<br/><small>Decision</small>"]:::neutral
    n189["Differences<br/><small>Function</small>"]:::held
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
    n212["Wiring<br/><small>Function</small>"]:::held
  end
  subgraph generations["Trame · Generations"]
    n213["Accept a candidate<br/><small>Requirement</small>"]:::held
    n214["What a candidate needs to be accepted<br/><small>Acceptance criteria</small>"]:::held
    n215["What an advance assembles<br/><small>Decision</small>"]:::neutral
    n216["The engine a project runs<br/><small>Decision</small>"]:::neutral
    n217["Generations that share the language<br/><small>Decision</small>"]:::neutral
    n218["Records of the releases<br/><small>Function</small>"]:::held
    n219["Releases of the engine<br/><small>Decision</small>"]:::neutral
  end
  subgraph html["Trame · HTML and CSS of the page"]
    n220["Attribute presence<br/><small>Syntax element</small>"]:::held
    n221["Attribute selector<br/><small>Syntax element</small>"]:::held
    n222["Class selector<br/><small>Syntax element</small>"]:::held
    n223["Declaration<br/><small>Syntax element</small>"]:::held
    n224["Rule<br/><small>Syntax element</small>"]:::held
    n225["Variable<br/><small>Syntax element</small>"]:::held
    n226["Custom property<br/><small>Syntax element</small>"]:::held
    n227["DOCTYPE<br/><small>Syntax element</small>"]:::held
    n228["Element over several lines<br/><small>Syntax element</small>"]:::held
    n229["JSON in a script<br/><small>Syntax element</small>"]:::held
    n230["Media feature<br/><small>Syntax element</small>"]:::held
    n231["Media rule<br/><small>Syntax element</small>"]:::held
    n232["Negation<br/><small>Syntax element</small>"]:::held
    n233["Path data<br/><small>Syntax element</small>"]:::held
    n234["Script<br/><small>Syntax element</small>"]:::held
    n235["Selector list<br/><small>Syntax element</small>"]:::held
  end
  subgraph languages["Trame · Languages"]
    n236["Drivers<br/><small>Function</small>"]:::held
    n237["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  end
  subgraph laws["Trame · Laws"]
    n238["Answers without crashing<br/><small>Requirement</small>"]:::held
    n239["Criteria of the answers without crashing<br/><small>Acceptance criteria</small>"]:::held
    n240["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
    n241["Criteria of the owner of a blocking hole<br/><small>Acceptance criteria</small>"]:::held
    n242["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
    n243["Criteria of the closed resolution<br/><small>Acceptance criteria</small>"]:::held
    n244["Complete declaration<br/><small>Requirement</small>"]:::held
    n245["Criteria of the complete declaration<br/><small>Acceptance criteria</small>"]:::held
    n246["Complete declaration of a view<br/><small>Requirement</small>"]:::held
    n247["Criteria of the declaration of a view<br/><small>Acceptance criteria</small>"]:::held
    n248["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
    n249["Criteria of the code of a hole<br/><small>Acceptance criteria</small>"]:::held
    n250["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
    n251["Criteria of the intermediate format<br/><small>Acceptance criteria</small>"]:::held
    n252["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
    n253["Criteria of the resolution in any order<br/><small>Acceptance criteria</small>"]:::held
    n254["Same input, same answer<br/><small>Requirement</small>"]:::held
    n255["Criteria of the same answer<br/><small>Acceptance criteria</small>"]:::held
    n256["Kinds and views that can be trusted<br/><small>Goal</small>"]:::neutral
    n257["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
    n258["Criteria of the status without evidence<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph libraries["Trame · Libraries"]
    n259["What belongs to a library<br/><small>Requirement</small>"]:::held
    n260["Criteria of what belongs to a library<br/><small>Acceptance criteria</small>"]:::held
    n261["Names of a library's releases<br/><small>Decision</small>"]:::neutral
    n262["A release is settled<br/><small>Requirement</small>"]:::held
    n263["Criteria of a settled release<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph markup["Trame · Documents in the page"]
    n264["Around the documents<br/><small>Decision</small>"]:::neutral
    n265["Documents in the page<br/><small>Decision</small>"]:::neutral
    n266["The explorer of a graph<br/><small>Decision</small>"]:::neutral
    n267["Figures in the page<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Trame · Messages"]
    n268["Messages of an advance<br/><small>Message catalog</small>"]:::neutral
    n269["Messages of the commands<br/><small>Message catalog</small>"]:::neutral
    n270["Messages of the compiler<br/><small>Message catalog</small>"]:::neutral
    n271["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
    n272["Messages of trame dev<br/><small>Message catalog</small>"]:::neutral
    n273["Messages of the drivers<br/><small>Message catalog</small>"]:::neutral
    n274["Words of Trame's views<br/><small>Message catalog</small>"]:::neutral
    n275["Words of the kinds<br/><small>Message catalog</small>"]:::neutral
    n276["Language<br/><small>Decision</small>"]:::neutral
    n277["Messages of the laws<br/><small>Message catalog</small>"]:::neutral
    n278["Messages of the outputs<br/><small>Message catalog</small>"]:::neutral
    n279["Words of the page<br/><small>Message catalog</small>"]:::neutral
    n280["Messages of the platform<br/><small>Message catalog</small>"]:::neutral
    n281["Messages of the scenarios<br/><small>Message catalog</small>"]:::neutral
    n282["Messages of the views<br/><small>Message catalog</small>"]:::neutral
    n283["Words of the views<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Trame · Packages"]
    n284["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n285["Grammar of CSS<br/><small>Package</small>"]:::held
    n286["The renderers of documents<br/><small>Package</small>"]:::neutral
    n287["esbuild<br/><small>Package</small>"]:::held
    n288["The commands every project runs<br/><small>Package</small>"]:::neutral
    n289["Grammar of HCL<br/><small>Package</small>"]:::held
    n290["Grammar of HTML<br/><small>Package</small>"]:::held
    n291["The questions of the machine<br/><small>Package</small>"]:::neutral
    n292["Types of Node.js<br/><small>Package</small>"]:::held
    n293["npm's lockfile<br/><small>Standard</small>"]:::neutral
    n294["Audit of the packages<br/><small>Decision</small>"]:::neutral
    n295["The people of the repository<br/><small>Package</small>"]:::neutral
    n296["The standard library<br/><small>Package</small>"]:::neutral
    n297["tsx<br/><small>Package</small>"]:::held
    n298["Grammar of TypeScript<br/><small>Package</small>"]:::held
    n299["TypeScript<br/><small>Package</small>"]:::held
    n300["Order of versions<br/><small>Function</small>"]:::held
    n301["web-tree-sitter<br/><small>Package</small>"]:::held
  end
  subgraph page["Trame · The page"]
    n302["Banner<br/><small>Syntax element</small>"]:::held
    n303["Brand<br/><small>Syntax element</small>"]:::held
    n304["State of the compilation<br/><small>Syntax element</small>"]:::held
    n305["Dates<br/><small>Syntax element</small>"]:::held
    n306["Head of the document<br/><small>Syntax element</small>"]:::held
    n307["Document picker<br/><small>Syntax element</small>"]:::held
    n308["Arrowheads of the figures<br/><small>Syntax element</small>"]:::held
    n309["Fonts<br/><small>Syntax element</small>"]:::held
    n310["Logo<br/><small>Syntax element</small>"]:::held
    n311["Files for tools in the page<br/><small>Decision</small>"]:::neutral
    n312["Main area<br/><small>Syntax element</small>"]:::held
    n313["Rules of a narrow screen<br/><small>Syntax element</small>"]:::held
    n314["Style sheet of a narrow screen<br/><small>Style sheet</small>"]:::neutral
    n315["Navigation<br/><small>Syntax element</small>"]:::held
    n316["A page carries its graph compressed<br/><small>Decision</small>"]:::neutral
    n317["Page<br/><small>Function</small>"]:::held
    n318["Bundle of the page<br/><small>Decision</small>"]:::neutral
    n319["Document of the page<br/><small>Syntax element</small>"]:::held
    n320["Regions of the page<br/><small>Decision</small>"]:::neutral
    n321["Scripts of the page<br/><small>Syntax element</small>"]:::held
    n322["Style sheet of the page<br/><small>Style sheet</small>"]:::neutral
    n323["The renderings of a document<br/><small>Vocabulary</small>"]:::neutral
    n324["Choice of rendering<br/><small>Syntax element</small>"]:::held
    n325["Shell<br/><small>Syntax element</small>"]:::held
    n326["Side bar<br/><small>Syntax element</small>"]:::held
    n327["Style of the standalone document<br/><small>Decision</small>"]:::neutral
    n328["Colours of a status<br/><small>Syntax element</small>"]:::held
    n329["A style sheet writes no value<br/><small>Architecture decision</small>"]:::held
    n330["Theme<br/><small>Syntax element</small>"]:::held
    n331["The page<br/><small>Decision</small>"]:::neutral
  end
  subgraph platform["Trame · Platform"]
    n332["Amendments go in the sources<br/><small>Technical choice</small>"]:::held
    n333["The TypeScript compiler reads the declarations<br/><small>Technical choice</small>"]:::held
    n334["System files, for reading<br/><small>Implementation</small>"]:::held
    n335["Trees on disk<br/><small>Implementation</small>"]:::held
    n336["System files, for writing<br/><small>Implementation</small>"]:::held
    n337["Where the engine's own files are<br/><small>Decision</small>"]:::neutral
    n338["The engine's own files sit beside its code<br/><small>Technical choice</small>"]:::held
    n339["esbuild<br/><small>Implementation</small>"]:::held
    n340["esbuild bundles the page's program<br/><small>Technical choice</small>"]:::held
    n341["Example process<br/><small>Function</small>"]:::held
    n342["Example project<br/><small>Decision</small>"]:::neutral
    n343["Scenarios write in memory, over the disk<br/><small>Technical choice</small>"]:::held
    n344["Scenarios run in memory<br/><small>Technical choice</small>"]:::held
    n345["Amendments in place<br/><small>Implementation</small>"]:::held
    n346["Lines shown on an exit in test<br/><small>Decision</small>"]:::neutral
    n347["Packages by their local path<br/><small>Implementation</small>"]:::neutral
    n348["Packages from the local registry<br/><small>Implementation</small>"]:::neutral
    n349["Where the local registry is<br/><small>Decision</small>"]:::neutral
    n350["Files in memory, over the disk<br/><small>Implementation</small>"]:::held
    n351["A server in memory<br/><small>Function</small>"]:::held
    n352["Temporary directories in memory<br/><small>Decision</small>"]:::neutral
    n353["Terminal in memory<br/><small>Function</small>"]:::held
    n354["Command line<br/><small>Implementation</small>"]:::held
    n355["gzip, with Node's zlib<br/><small>Implementation</small>"]:::held
    n356["SHA-256 hashes<br/><small>Implementation</small>"]:::held
    n357["Node HTTP server<br/><small>Implementation</small>"]:::held
    n358["On a machine, Node.js reads, writes and runs<br/><small>Technical choice</small>"]:::held
    n359["Node paths<br/><small>Implementation</small>"]:::held
    n360["NodePlatform<br/><small>Technical choice</small>"]:::held
    n361["Node process<br/><small>Implementation</small>"]:::held
    n362["Node programs<br/><small>Implementation</small>"]:::held
    n363["Node terminal<br/><small>Implementation</small>"]:::held
    n364["Node timer<br/><small>Implementation</small>"]:::held
    n365["No installer in test<br/><small>Implementation</small>"]:::held
    n366["No registry in test<br/><small>Function</small>"]:::held
    n367["npm installs<br/><small>Implementation</small>"]:::held
    n368["npm's reports<br/><small>Implementation</small>"]:::held
    n369["Packages by their origin<br/><small>Implementation</small>"]:::held
    n370["Each package comes from where its reference says<br/><small>Technical choice</small>"]:::held
    n371["Page resources<br/><small>Implementation</small>"]:::held
    n372["TypeScript compiler<br/><small>Implementation</small>"]:::held
    n373["Results kept in the process<br/><small>Implementation</small>"]:::held
    n374["A run is kept while what it reads is as it was<br/><small>Technical choice</small>"]:::held
    n375["Runs kept in the process<br/><small>Implementation</small>"]:::held
    n376["In the scenarios, runs are kept in the process<br/><small>Technical choice</small>"]:::held
    n377["On a machine, runs are kept on disk<br/><small>Technical choice</small>"]:::held
    n378["Runs kept on disk<br/><small>Implementation</small>"]:::held
    n379["Stopped clock<br/><small>Function</small>"]:::held
    n380["System clock<br/><small>Implementation</small>"]:::held
    n381["Day of the scenarios<br/><small>Decision</small>"]:::neutral
    n382["Time of the scenarios<br/><small>Decision</small>"]:::neutral
    n383["Trame's prelude<br/><small>Implementation</small>"]:::held
    n384["tree-sitter reads the bodies<br/><small>Technical choice</small>"]:::held
    n385["tsx loader<br/><small>Implementation</small>"]:::held
    n386["tsx runs TypeScript<br/><small>Technical choice</small>"]:::held
    n387["Runner of TypeScript<br/><small>Decision</small>"]:::neutral
    n388["tree-sitter in WebAssembly<br/><small>Implementation</small>"]:::held
  end
  subgraph principles["Trame · Principles"]
    n389["Who acts is declared<br/><small>Architecture decision</small>"]:::held
    n390["An amendment sits beside the value it changes<br/><small>Architecture decision</small>"]:::held
    n391["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
    n392["Trame runs the commands libraries offer<br/><small>Architecture decision</small>"]:::unknown
    n393["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
    n394["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
    n395["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
    n396["The engine is a provider, for Trame too<br/><small>Architecture decision</small>"]:::unknown
    n397["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
    n398["Evidence is sealed<br/><small>Architecture decision</small>"]:::held
    n399["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
    n400["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
    n401["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
    n402["The source carries the history<br/><small>Architecture decision</small>"]:::held
    n403["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
    n404["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
    n405["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
    n406["Every question of the machine is an add-on<br/><small>Architecture decision</small>"]:::unknown
    n407["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
    n408["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
    n409["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
    n410["One output for each reader<br/><small>Architecture decision</small>"]:::held
    n411["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
    n412["A package is used by its name<br/><small>Architecture decision</small>"]:::held
    n413["What a command does is played in memory first<br/><small>Architecture decision</small>"]:::held
    n414["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
    n415["A run is kept while what it reads is as it was<br/><small>Architecture decision</small>"]:::held
    n416["Trame's SDLC runs with std's tooling<br/><small>Architecture decision</small>"]:::unknown
    n417["A version ships through the graph<br/><small>Architecture decision</small>"]:::held
    n418["A technology is chosen in one node<br/><small>Architecture decision</small>"]:::held
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
    n440["Generation 100<br/><small>Release</small>"]:::neutral
    n441["Generation 101<br/><small>Release</small>"]:::neutral
    n442["Generation 102<br/><small>Release</small>"]:::neutral
    n443["Generation 103<br/><small>Release</small>"]:::neutral
    n444["Generation 104<br/><small>Release</small>"]:::neutral
    n445["Generation 105<br/><small>Release</small>"]:::neutral
    n446["Generation 106<br/><small>Release</small>"]:::neutral
    n447["Generation 107<br/><small>Release</small>"]:::neutral
    n448["Generation 108<br/><small>Release</small>"]:::neutral
    n449["Generation 109<br/><small>Release</small>"]:::neutral
    n450["Generation 11<br/><small>Release</small>"]:::neutral
    n451["Generation 110<br/><small>Release</small>"]:::neutral
    n452["Generation 111<br/><small>Release</small>"]:::neutral
    n453["Generation 112<br/><small>Release</small>"]:::neutral
    n454["Generation 113<br/><small>Release</small>"]:::neutral
    n455["Generation 114<br/><small>Release</small>"]:::neutral
    n456["Generation 115<br/><small>Release</small>"]:::neutral
    n457["Generation 116<br/><small>Release</small>"]:::neutral
    n458["Generation 117<br/><small>Release</small>"]:::neutral
    n459["Generation 118<br/><small>Release</small>"]:::neutral
    n460["Generation 119<br/><small>Release</small>"]:::neutral
    n461["Generation 12<br/><small>Release</small>"]:::neutral
    n462["Generation 120<br/><small>Release</small>"]:::neutral
    n463["Generation 121<br/><small>Release</small>"]:::neutral
    n464["Generation 122<br/><small>Release</small>"]:::neutral
    n465["Generation 123<br/><small>Release</small>"]:::neutral
    n466["Generation 124<br/><small>Release</small>"]:::neutral
    n467["Generation 125<br/><small>Release</small>"]:::neutral
    n468["Generation 126<br/><small>Release</small>"]:::neutral
    n469["Generation 127<br/><small>Release</small>"]:::neutral
    n470["Generation 128<br/><small>Release</small>"]:::neutral
    n471["Generation 129<br/><small>Release</small>"]:::neutral
    n472["Generation 13<br/><small>Release</small>"]:::neutral
    n473["Generation 130<br/><small>Release</small>"]:::neutral
    n474["Generation 131<br/><small>Release</small>"]:::neutral
    n475["Generation 132<br/><small>Release</small>"]:::neutral
    n476["Generation 133<br/><small>Release</small>"]:::neutral
    n477["Generation 134<br/><small>Release</small>"]:::neutral
    n478["Generation 14<br/><small>Release</small>"]:::neutral
    n479["Generation 15<br/><small>Release</small>"]:::neutral
    n480["Generation 16<br/><small>Release</small>"]:::neutral
    n481["Generation 17<br/><small>Release</small>"]:::neutral
    n482["Generation 18<br/><small>Release</small>"]:::neutral
    n483["Generation 19<br/><small>Release</small>"]:::neutral
    n484["Generation 2<br/><small>Release</small>"]:::neutral
    n485["Generation 20<br/><small>Release</small>"]:::neutral
    n486["Generation 21<br/><small>Release</small>"]:::neutral
    n487["Generation 22<br/><small>Release</small>"]:::neutral
    n488["Generation 23<br/><small>Release</small>"]:::neutral
    n489["Generation 24<br/><small>Release</small>"]:::neutral
    n490["Generation 25<br/><small>Release</small>"]:::neutral
    n491["Generation 26<br/><small>Release</small>"]:::neutral
    n492["Generation 27<br/><small>Release</small>"]:::neutral
    n493["Generation 28<br/><small>Release</small>"]:::neutral
    n494["Generation 29<br/><small>Release</small>"]:::neutral
    n495["Generation 3<br/><small>Release</small>"]:::neutral
    n496["Generation 30<br/><small>Release</small>"]:::neutral
    n497["Generation 31<br/><small>Release</small>"]:::neutral
    n498["Generation 32<br/><small>Release</small>"]:::neutral
    n499["Generation 33<br/><small>Release</small>"]:::neutral
    n500["Generation 34<br/><small>Release</small>"]:::neutral
    n501["Generation 35<br/><small>Release</small>"]:::neutral
    n502["Generation 36<br/><small>Release</small>"]:::neutral
    n503["Generation 37<br/><small>Release</small>"]:::neutral
    n504["Generation 38<br/><small>Release</small>"]:::neutral
    n505["Generation 39<br/><small>Release</small>"]:::neutral
    n506["Generation 4<br/><small>Release</small>"]:::neutral
    n507["Generation 40<br/><small>Release</small>"]:::neutral
    n508["Generation 41<br/><small>Release</small>"]:::neutral
    n509["Generation 42<br/><small>Release</small>"]:::neutral
    n510["Generation 43<br/><small>Release</small>"]:::neutral
    n511["Generation 44<br/><small>Release</small>"]:::neutral
    n512["Generation 45<br/><small>Release</small>"]:::neutral
    n513["Generation 46<br/><small>Release</small>"]:::neutral
    n514["Generation 47<br/><small>Release</small>"]:::neutral
    n515["Generation 48<br/><small>Release</small>"]:::neutral
    n516["Generation 49<br/><small>Release</small>"]:::neutral
    n517["Generation 5<br/><small>Release</small>"]:::neutral
    n518["Generation 50<br/><small>Release</small>"]:::neutral
    n519["Generation 51<br/><small>Release</small>"]:::neutral
    n520["Generation 52<br/><small>Release</small>"]:::neutral
    n521["Generation 53<br/><small>Release</small>"]:::neutral
    n522["Generation 54<br/><small>Release</small>"]:::neutral
    n523["Generation 55<br/><small>Release</small>"]:::neutral
    n524["Generation 56<br/><small>Release</small>"]:::neutral
    n525["Generation 57<br/><small>Release</small>"]:::neutral
    n526["Generation 58<br/><small>Release</small>"]:::neutral
    n527["Generation 59<br/><small>Release</small>"]:::neutral
    n528["Generation 6<br/><small>Release</small>"]:::neutral
    n529["Generation 60<br/><small>Release</small>"]:::neutral
    n530["Generation 61<br/><small>Release</small>"]:::neutral
    n531["Generation 62<br/><small>Release</small>"]:::neutral
    n532["Generation 63<br/><small>Release</small>"]:::neutral
    n533["Generation 64<br/><small>Release</small>"]:::neutral
    n534["Generation 65<br/><small>Release</small>"]:::neutral
    n535["Generation 66<br/><small>Release</small>"]:::neutral
    n536["Generation 67<br/><small>Release</small>"]:::neutral
    n537["Generation 68<br/><small>Release</small>"]:::neutral
    n538["Generation 69<br/><small>Release</small>"]:::neutral
    n539["Generation 7<br/><small>Release</small>"]:::neutral
    n540["Generation 70<br/><small>Release</small>"]:::neutral
    n541["Generation 71<br/><small>Release</small>"]:::neutral
    n542["Generation 72<br/><small>Release</small>"]:::neutral
    n543["Generation 73<br/><small>Release</small>"]:::neutral
    n544["Generation 74<br/><small>Release</small>"]:::neutral
    n545["Generation 75<br/><small>Release</small>"]:::neutral
    n546["Generation 76<br/><small>Release</small>"]:::neutral
    n547["Generation 77<br/><small>Release</small>"]:::neutral
    n548["Generation 78<br/><small>Release</small>"]:::neutral
    n549["Generation 79<br/><small>Release</small>"]:::neutral
    n550["Generation 8<br/><small>Release</small>"]:::neutral
    n551["Generation 80<br/><small>Release</small>"]:::neutral
    n552["Generation 81<br/><small>Release</small>"]:::neutral
    n553["Generation 82<br/><small>Release</small>"]:::neutral
    n554["Generation 83<br/><small>Release</small>"]:::neutral
    n555["Generation 84<br/><small>Release</small>"]:::neutral
    n556["Generation 85<br/><small>Release</small>"]:::neutral
    n557["Generation 86<br/><small>Release</small>"]:::neutral
    n558["Generation 87<br/><small>Release</small>"]:::neutral
    n559["Generation 88<br/><small>Release</small>"]:::neutral
    n560["Generation 89<br/><small>Release</small>"]:::neutral
    n561["Generation 9<br/><small>Release</small>"]:::neutral
    n562["Generation 90<br/><small>Release</small>"]:::neutral
    n563["Generation 91<br/><small>Release</small>"]:::neutral
    n564["Generation 92<br/><small>Release</small>"]:::neutral
    n565["Generation 93<br/><small>Release</small>"]:::neutral
    n566["Generation 94<br/><small>Release</small>"]:::neutral
    n567["Generation 95<br/><small>Release</small>"]:::neutral
    n568["Generation 96<br/><small>Release</small>"]:::neutral
    n569["Generation 97<br/><small>Release</small>"]:::neutral
    n570["Generation 98<br/><small>Release</small>"]:::neutral
    n571["Generation 99<br/><small>Release</small>"]:::neutral
  end
  subgraph rendering["Trame · Rendering"]
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
    n613["The candidate plays the laws<br/><small>Check</small>"]:::held
    n614["The candidate runs on the machine<br/><small>Check</small>"]:::held
    n615["The commands Trame takes from std<br/><small>Technical choice</small>"]:::held
    n616["The commands Trame takes from libs/commands<br/><small>Technical choice</small>"]:::unknown
    n617["Its callers identified<br/><small>Obligation</small>"]:::neutral
    n618["The candidate engine<br/><small>Artefact</small>"]:::held
    n619["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n620["The engine is verified<br/><small>Obligation</small>"]:::neutral
    n621["How a generation is made<br/><small>Policy</small>"]:::neutral
    n622["The graph page<br/><small>Artefact</small>"]:::held
    n623["How the graph page is opened<br/><small>Decision</small>"]:::neutral
    n624["The graph page opens<br/><small>Check</small>"]:::held
    n625["What the scenario of the graph page shows<br/><small>Decision</small>"]:::neutral
    n626["What the graph page is asked<br/><small>Function</small>"]:::held
    n627["How a generation advances<br/><small>Decision</small>"]:::neutral
    n628["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n629["The language serves what it says<br/><small>Obligation</small>"]:::neutral
    n630["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
    n631["How the repository merges into main<br/><small>Decision</small>"]:::neutral
    n632["Trame's maintainers<br/><small>Role</small>"]:::neutral
    n633["How a change merges<br/><small>Policy</small>"]:::neutral
    n634["The next generation<br/><small>Shipment</small>"]:::held
    n635["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
    n636["Open the graph page<br/><small>Entry point</small>"]:::held
    n637["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
    n638["The machines Trame runs on<br/><small>Decision</small>"]:::neutral
    n639["What the machine runs, for Trame<br/><small>Function</small>"]:::unknown
    n640["How a version is carried across Trame's repository<br/><small>Function</small>"]:::held
    n641["How Trame's pull requests are opened<br/><small>Function</small>"]:::held
    n642["Trame's settings in the scenarios<br/><small>Technical choice</small>"]:::held
    n643["The page's program<br/><small>Artefact</small>"]:::held
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
  n57 -->|Depends on| n331
  n57 -->|Depends on| n188
  n58 -->|Implements| n19
  n58 -->|Depends on| n316
  n59 -->|Implements| n23
  n59 -->|Depends on| n331
  n59 -->|Depends on| n188
  n60 -->|Implements| n36
  n60 -->|Depends on| n331
  n61 -->|Implements| n37
  n61 -->|Depends on| n230
  n62 -->|Serves| n428
  n62 -->|Depends on| n331
  n62 -->|Depends on| n265
  n62 -->|Depends on| n267
  n62 -->|Depends on| n266
  n62 -->|Depends on| n0
  n62 -->|Depends on| n233
  n62 -->|Depends on| n223
  n62 -->|Depends on| n279
  n63 -->|Serves| n428
  n63 -->|Part of| n35
  n63 -->|Depends on| n37
  n63 -->|Depends on| n36
  n63 -->|Depends on| n23
  n63 -->|Depends on| n19
  n63 -->|Depends on| n34
  n63 -->|Depends on| n62
  n63 -->|Depends on| n331
  n63 -->|Depends on| n320
  n63 -->|Depends on| n323
  n63 -->|Depends on| n311
  n63 -->|Depends on| n265
  n63 -->|Depends on| n264
  n63 -->|Depends on| n266
  n63 -->|Depends on| n0
  n63 -->|Depends on| n149
  n63 -->|Depends on| n276
  n63 -->|Depends on| n221
  n63 -->|Depends on| n220
  n63 -->|Depends on| n235
  n63 -->|Depends on| n222
  n63 -->|Depends on| n279
  n64 -->|Chooses| n61
  n64 -->|Chooses| n60
  n64 -->|Chooses| n59
  n64 -->|Chooses| n57
  n64 -->|Chooses| n58
  n64 -->|In| n14
  n64 -->|Serves| n429
  n65 -->|Serves| n428
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
  n66 -->|Depends on| n154
  n66 -->|Depends on| n20
  n66 -->|Depends on| n22
  n66 -->|Depends on| n158
  n66 -->|Depends on| n268
  n66 -->|Depends on| n67
  n66 -->|Depends on| n281
  n70 -->|Verifies| n681
  n70 -->|Verifies| n673
  n70 -->|Verifies| n388
  n70 -->|In| n52
  n70 -->|Depends on| n681
  n70 -->|Depends on| n673
  n70 -->|Depends on| n717
  n70 -->|Depends on| n71
  n70 -->|Depends on| n273
  n70 -->|Depends on| n281
  n72 -->|Verifies| n130
  n72 -->|In| n52
  n72 -->|Depends on| n119
  n72 -->|Depends on| n130
  n72 -->|Depends on| n56
  n72 -->|Depends on| n51
  n72 -->|Depends on| n22
  n72 -->|Depends on| n40
  n72 -->|Depends on| n38
  n72 -->|Depends on| n154
  n72 -->|Depends on| n95
  n72 -->|Depends on| n158
  n72 -->|Depends on| n269
  n72 -->|Depends on| n281
  n73 -->|Verifies| n354
  n73 -->|Verifies| n353
  n73 -->|In| n52
  n73 -->|Depends on| n17
  n73 -->|Depends on| n51
  n73 -->|Depends on| n158
  n73 -->|Depends on| n110
  n73 -->|Depends on| n280
  n73 -->|Depends on| n281
  n74 -->|Verifies| n116
  n74 -->|Verifies| n117
  n74 -->|Verifies| n182
  n74 -->|Verifies| n720
  n74 -->|Verifies| n690
  n74 -->|Verifies| n236
  n74 -->|Verifies| n379
  n74 -->|In| n52
  n74 -->|Depends on| n116
  n74 -->|Depends on| n56
  n74 -->|Depends on| n51
  n74 -->|Depends on| n158
  n74 -->|Depends on| n154
  n74 -->|Depends on| n69
  n74 -->|Depends on| n150
  n74 -->|Depends on| n269
  n74 -->|Depends on| n281
  n75 -->|Verifies| n139
  n75 -->|In| n52
  n75 -->|Depends on| n139
  n75 -->|Depends on| n41
  n75 -->|Depends on| n56
  n75 -->|Depends on| n158
  n75 -->|Depends on| n69
  n75 -->|Depends on| n103
  n75 -->|Depends on| n281
  n76 -->|Verifies| n133
  n76 -->|In| n52
  n76 -->|Depends on| n133
  n76 -->|Depends on| n56
  n76 -->|Depends on| n51
  n76 -->|Depends on| n40
  n76 -->|Depends on| n38
  n76 -->|Depends on| n154
  n76 -->|Depends on| n158
  n76 -->|Depends on| n269
  n76 -->|Depends on| n281
  n77 -->|Verifies| n122
  n77 -->|Verifies| n187
  n77 -->|Verifies| n351
  n77 -->|Verifies| n364
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
  n77 -->|Depends on| n154
  n77 -->|Depends on| n188
  n77 -->|Depends on| n426
  n77 -->|Depends on| n204
  n77 -->|Depends on| n158
  n77 -->|Depends on| n278
  n77 -->|Depends on| n78
  n77 -->|Depends on| n68
  n77 -->|Depends on| n281
  n79 -->|Verifies| n123
  n79 -->|Verifies| n205
  n79 -->|Verifies| n375
  n79 -->|Verifies| n164
  n79 -->|Verifies| n165
  n79 -->|Verifies| n169
  n79 -->|Verifies| n176
  n79 -->|Verifies| n171
  n79 -->|Verifies| n173
  n79 -->|Verifies| n174
  n79 -->|Verifies| n175
  n79 -->|Verifies| n172
  n79 -->|Verifies| n170
  n79 -->|In| n52
  n79 -->|Depends on| n123
  n79 -->|Depends on| n41
  n79 -->|Depends on| n51
  n79 -->|Depends on| n166
  n79 -->|Depends on| n158
  n79 -->|Depends on| n269
  n79 -->|Depends on| n281
  n80 -->|Verifies| n131
  n80 -->|In| n52
  n80 -->|Depends on| n131
  n80 -->|Depends on| n158
  n80 -->|Depends on| n154
  n80 -->|Depends on| n717
  n80 -->|Depends on| n281
  n81 -->|Verifies| n134
  n81 -->|In| n52
  n81 -->|Depends on| n134
  n81 -->|Depends on| n56
  n81 -->|Depends on| n40
  n81 -->|Depends on| n38
  n81 -->|Depends on| n154
  n81 -->|Depends on| n670
  n81 -->|Depends on| n98
  n81 -->|Depends on| n158
  n81 -->|Depends on| n48
  n81 -->|Depends on| n281
  n82 -->|Verifies| n125
  n82 -->|In| n52
  n82 -->|Depends on| n125
  n82 -->|Depends on| n102
  n82 -->|Depends on| n281
  n83 -->|Verifies| n126
  n83 -->|In| n52
  n83 -->|Depends on| n126
  n83 -->|Depends on| n56
  n83 -->|Depends on| n158
  n83 -->|Depends on| n281
  n84 -->|Verifies| n184
  n84 -->|Verifies| n204
  n84 -->|In| n52
  n84 -->|Depends on| n184
  n84 -->|Depends on| n41
  n84 -->|Depends on| n40
  n84 -->|Depends on| n16
  n84 -->|Depends on| n104
  n84 -->|Depends on| n98
  n84 -->|Depends on| n665
  n84 -->|Depends on| n22
  n84 -->|Depends on| n281
  n85 -->|Verifies| n143
  n85 -->|In| n52
  n85 -->|Depends on| n143
  n85 -->|Depends on| n184
  n85 -->|Depends on| n211
  n85 -->|Depends on| n40
  n85 -->|Depends on| n51
  n85 -->|Depends on| n158
  n85 -->|Depends on| n269
  n85 -->|Depends on| n281
  n86 -->|Verifies| n120
  n86 -->|Verifies| n132
  n86 -->|Verifies| n128
  n86 -->|In| n52
  n86 -->|Depends on| n120
  n86 -->|Depends on| n128
  n86 -->|Depends on| n41
  n86 -->|Depends on| n51
  n86 -->|Depends on| n158
  n86 -->|Depends on| n98
  n86 -->|Depends on| n281
  n87 -->|Verifies| n137
  n87 -->|Verifies| n218
  n87 -->|Verifies| n348
  n87 -->|In| n52
  n87 -->|Depends on| n137
  n87 -->|Depends on| n41
  n87 -->|Depends on| n56
  n87 -->|Depends on| n51
  n87 -->|Depends on| n40
  n87 -->|Depends on| n38
  n87 -->|Depends on| n154
  n87 -->|Depends on| n104
  n87 -->|Depends on| n98
  n87 -->|Depends on| n158
  n87 -->|Depends on| n716
  n87 -->|Depends on| n281
  n87 -->|Depends on| n670
  n88 -->|Verifies| n145
  n88 -->|Verifies| n369
  n88 -->|Verifies| n347
  n88 -->|Verifies| n365
  n88 -->|In| n52
  n88 -->|Depends on| n145
  n88 -->|Depends on| n41
  n88 -->|Depends on| n56
  n88 -->|Depends on| n20
  n88 -->|Depends on| n40
  n88 -->|Depends on| n38
  n88 -->|Depends on| n154
  n88 -->|Depends on| n104
  n88 -->|Depends on| n98
  n88 -->|Depends on| n158
  n88 -->|Depends on| n281
  n88 -->|Depends on| n153
  n88 -->|Depends on| n717
  n89 -->|Verifies| n118
  n89 -->|Verifies| n366
  n89 -->|In| n52
  n89 -->|Depends on| n118
  n89 -->|Depends on| n41
  n89 -->|Depends on| n56
  n89 -->|Depends on| n51
  n89 -->|Depends on| n104
  n89 -->|Depends on| n158
  n89 -->|Depends on| n281
  n89 -->|Depends on| n294
  n90 -->|Verifies| n144
  n90 -->|Verifies| n369
  n90 -->|Verifies| n347
  n90 -->|In| n52
  n90 -->|Depends on| n144
  n90 -->|Depends on| n41
  n90 -->|Depends on| n56
  n90 -->|Depends on| n40
  n90 -->|Depends on| n38
  n90 -->|Depends on| n154
  n90 -->|Depends on| n104
  n90 -->|Depends on| n158
  n90 -->|Depends on| n281
  n91 -->|Verifies| n121
  n91 -->|Verifies| n163
  n91 -->|In| n52
  n91 -->|Depends on| n121
  n91 -->|Depends on| n41
  n91 -->|Depends on| n56
  n91 -->|Depends on| n104
  n91 -->|Depends on| n98
  n91 -->|Depends on| n227
  n91 -->|Depends on| n158
  n91 -->|Depends on| n281
  n92 -->|Verifies| n127
  n92 -->|Verifies| n186
  n92 -->|In| n52
  n92 -->|Depends on| n124
  n92 -->|Depends on| n127
  n92 -->|Depends on| n41
  n92 -->|Depends on| n56
  n92 -->|Depends on| n51
  n92 -->|Depends on| n204
  n92 -->|Depends on| n40
  n92 -->|Depends on| n38
  n92 -->|Depends on| n154
  n92 -->|Depends on| n158
  n92 -->|Depends on| n278
  n92 -->|Depends on| n281
  n93 -->|Verifies| n317
  n93 -->|Verifies| n339
  n93 -->|Verifies| n355
  n93 -->|Verifies| n371
  n93 -->|In| n52
  n93 -->|Depends on| n124
  n93 -->|Depends on| n317
  n93 -->|Depends on| n18
  n93 -->|Depends on| n204
  n93 -->|Depends on| n40
  n93 -->|Depends on| n16
  n93 -->|Depends on| n51
  n93 -->|Depends on| n158
  n93 -->|Depends on| n278
  n93 -->|Depends on| n281
  n94 -->|Verifies| n124
  n94 -->|Verifies| n202
  n94 -->|Verifies| n579
  n94 -->|Verifies| n574
  n94 -->|Verifies| n582
  n94 -->|Verifies| n189
  n94 -->|In| n52
  n94 -->|Depends on| n124
  n94 -->|Depends on| n189
  n94 -->|Depends on| n51
  n94 -->|Depends on| n158
  n94 -->|Depends on| n278
  n94 -->|Depends on| n281
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
  n96 -->|Depends on| n158
  n96 -->|Depends on| n98
  n96 -->|Depends on| n269
  n96 -->|Depends on| n281
  n97 -->|Verifies| n129
  n97 -->|Verifies| n112
  n97 -->|In| n52
  n97 -->|Depends on| n129
  n97 -->|Depends on| n41
  n97 -->|Depends on| n56
  n97 -->|Depends on| n40
  n97 -->|Depends on| n38
  n97 -->|Depends on| n156
  n97 -->|Depends on| n98
  n97 -->|Depends on| n158
  n97 -->|Depends on| n281
  n99 -->|Verifies| n129
  n99 -->|Verifies| n135
  n99 -->|In| n52
  n99 -->|Depends on| n129
  n99 -->|Depends on| n41
  n99 -->|Depends on| n56
  n99 -->|Depends on| n40
  n99 -->|Depends on| n38
  n99 -->|Depends on| n154
  n99 -->|Depends on| n104
  n99 -->|Depends on| n98
  n99 -->|Depends on| n156
  n99 -->|Depends on| n216
  n99 -->|Depends on| n158
  n99 -->|Depends on| n281
  n99 -->|Depends on| n153
  n99 -->|Depends on| n717
  n100 -->|Verifies| n133
  n100 -->|Verifies| n199
  n100 -->|In| n52
  n100 -->|Depends on| n133
  n100 -->|Depends on| n22
  n100 -->|Depends on| n20
  n100 -->|Depends on| n51
  n100 -->|Depends on| n40
  n100 -->|Depends on| n38
  n100 -->|Depends on| n154
  n100 -->|Depends on| n158
  n100 -->|Depends on| n206
  n100 -->|Depends on| n68
  n100 -->|Depends on| n278
  n100 -->|Depends on| n281
  n101 -->|Verifies| n136
  n101 -->|Verifies| n348
  n101 -->|In| n52
  n101 -->|Depends on| n136
  n101 -->|Depends on| n41
  n101 -->|Depends on| n56
  n101 -->|Depends on| n158
  n101 -->|Depends on| n281
  n101 -->|Depends on| n153
  n101 -->|Depends on| n717
  n101 -->|Depends on| n98
  n105 -->|Verifies| n140
  n105 -->|Verifies| n134
  n105 -->|Verifies| n665
  n105 -->|Verifies| n207
  n105 -->|Verifies| n667
  n105 -->|Verifies| n356
  n105 -->|Verifies| n663
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
  n105 -->|Depends on| n184
  n105 -->|Depends on| n16
  n105 -->|Depends on| n270
  n105 -->|Depends on| n154
  n105 -->|Depends on| n670
  n105 -->|Depends on| n104
  n105 -->|Depends on| n98
  n105 -->|Depends on| n158
  n105 -->|Depends on| n281
  n106 -->|Verifies| n142
  n106 -->|In| n52
  n106 -->|Depends on| n142
  n106 -->|Depends on| n56
  n106 -->|Depends on| n20
  n106 -->|Depends on| n40
  n106 -->|Depends on| n38
  n106 -->|Depends on| n154
  n106 -->|Depends on| n158
  n106 -->|Depends on| n281
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
  n107 -->|Depends on| n184
  n107 -->|Depends on| n16
  n107 -->|Depends on| n207
  n107 -->|Depends on| n269
  n107 -->|Depends on| n154
  n107 -->|Depends on| n670
  n107 -->|Depends on| n104
  n107 -->|Depends on| n98
  n107 -->|Depends on| n158
  n107 -->|Depends on| n281
  n109 -->|Verifies| n114
  n109 -->|Verifies| n115
  n109 -->|Verifies| n345
  n109 -->|In| n52
  n109 -->|Depends on| n114
  n109 -->|Depends on| n56
  n109 -->|Depends on| n40
  n109 -->|Depends on| n38
  n109 -->|Depends on| n158
  n109 -->|Depends on| n68
  n109 -->|Depends on| n281
  n111 -->|Verifies| n141
  n111 -->|Verifies| n120
  n111 -->|Verifies| n138
  n111 -->|In| n52
  n111 -->|Depends on| n141
  n111 -->|Depends on| n120
  n111 -->|Depends on| n51
  n111 -->|Depends on| n158
  n111 -->|Depends on| n110
  n111 -->|Depends on| n281
  n112 -->|Serves| n428
  n112 -->|Depends on| n212
  n112 -->|Depends on| n269
  n113 -->|Serves| n428
  n113 -->|Part of| n54
  n113 -->|Depends on| n131
  n113 -->|Depends on| n190
  n113 -->|Depends on| n158
  n113 -->|Depends on| n154
  n113 -->|Depends on| n215
  n113 -->|Depends on| n213
  n113 -->|Depends on| n342
  n113 -->|Depends on| n381
  n113 -->|Depends on| n159
  n113 -->|Depends on| n717
  n113 -->|Depends on| n42
  n113 -->|Depends on| n21
  n113 -->|Depends on| n20
  n113 -->|Depends on| n22
  n113 -->|Depends on| n38
  n113 -->|Depends on| n24
  n113 -->|Depends on| n191
  n113 -->|Depends on| n50
  n113 -->|Depends on| n269
  n113 -->|Depends on| n268
  n113 -->|Depends on| n216
  n113 -->|Depends on| n217
  n113 -->|Depends on| n219
  n113 -->|Depends on| n218
  n113 -->|Depends on| n151
  n113 -->|Depends on| n16
  n113 -->|Depends on| n204
  n113 -->|Depends on| n153
  n114 -->|Serves| n435
  n114 -->|Part of| n54
  n114 -->|Depends on| n131
  n114 -->|Depends on| n115
  n114 -->|Depends on| n13
  n114 -->|Depends on| n38
  n114 -->|Depends on| n50
  n114 -->|Depends on| n269
  n115 -->|Serves| n435
  n115 -->|Depends on| n131
  n115 -->|Depends on| n200
  n115 -->|Depends on| n39
  n115 -->|Depends on| n206
  n115 -->|Depends on| n204
  n115 -->|Depends on| n154
  n115 -->|Depends on| n38
  n115 -->|Depends on| n269
  n115 -->|Depends on| n146
  n116 -->|Serves| n428
  n116 -->|Part of| n54
  n116 -->|Depends on| n131
  n116 -->|Depends on| n117
  n116 -->|Depends on| n22
  n116 -->|Depends on| n38
  n116 -->|Depends on| n50
  n116 -->|Depends on| n269
  n117 -->|Serves| n428
  n117 -->|Depends on| n131
  n117 -->|Depends on| n182
  n117 -->|Depends on| n269
  n118 -->|Serves| n435
  n118 -->|Part of| n54
  n118 -->|Depends on| n131
  n118 -->|Depends on| n33
  n118 -->|Depends on| n294
  n118 -->|Depends on| n154
  n118 -->|Depends on| n20
  n118 -->|Depends on| n22
  n118 -->|Depends on| n38
  n118 -->|Depends on| n300
  n118 -->|Depends on| n151
  n118 -->|Depends on| n50
  n118 -->|Depends on| n269
  n119 -->|Serves| n428
  n119 -->|Part of| n54
  n119 -->|Depends on| n154
  n119 -->|Depends on| n131
  n119 -->|Depends on| n200
  n119 -->|Depends on| n22
  n119 -->|Depends on| n38
  n119 -->|Depends on| n50
  n119 -->|Depends on| n269
  n120 -->|Serves| n428
  n120 -->|Part of| n54
  n120 -->|Depends on| n158
  n120 -->|Depends on| n131
  n120 -->|Depends on| n138
  n120 -->|Depends on| n184
  n120 -->|Depends on| n211
  n120 -->|Depends on| n117
  n120 -->|Depends on| n132
  n120 -->|Depends on| n22
  n120 -->|Depends on| n38
  n120 -->|Depends on| n40
  n120 -->|Depends on| n50
  n120 -->|Depends on| n269
  n121 -->|Serves| n428
  n121 -->|Part of| n54
  n121 -->|Depends on| n131
  n121 -->|Depends on| n182
  n121 -->|Depends on| n117
  n121 -->|Depends on| n15
  n121 -->|Depends on| n163
  n121 -->|Depends on| n318
  n121 -->|Depends on| n319
  n121 -->|Depends on| n234
  n121 -->|Depends on| n162
  n121 -->|Depends on| n20
  n121 -->|Depends on| n22
  n121 -->|Depends on| n38
  n121 -->|Depends on| n50
  n121 -->|Depends on| n269
  n122 -->|Serves| n428
  n122 -->|Part of| n54
  n122 -->|Depends on| n131
  n122 -->|Depends on| n187
  n122 -->|Depends on| n115
  n122 -->|Depends on| n13
  n122 -->|Depends on| n38
  n123 -->|Serves| n428
  n123 -->|Part of| n54
  n123 -->|Depends on| n131
  n123 -->|Depends on| n167
  n123 -->|Depends on| n50
  n123 -->|Depends on| n269
  n123 -->|Depends on| n112
  n124 -->|Serves| n428
  n124 -->|Part of| n54
  n124 -->|Depends on| n131
  n124 -->|Depends on| n202
  n124 -->|Depends on| n579
  n124 -->|Depends on| n50
  n125 -->|Serves| n428
  n125 -->|Depends on| n55
  n125 -->|Depends on| n719
  n126 -->|Serves| n428
  n126 -->|Part of| n54
  n126 -->|Depends on| n131
  n126 -->|Depends on| n125
  n126 -->|Depends on| n20
  n126 -->|Depends on| n22
  n126 -->|Depends on| n38
  n126 -->|Depends on| n50
  n126 -->|Depends on| n158
  n126 -->|Depends on| n269
  n127 -->|Serves| n428
  n127 -->|Part of| n54
  n127 -->|Depends on| n154
  n127 -->|Depends on| n131
  n127 -->|Depends on| n186
  n127 -->|Depends on| n317
  n127 -->|Depends on| n204
  n127 -->|Depends on| n22
  n127 -->|Depends on| n38
  n127 -->|Depends on| n50
  n127 -->|Depends on| n269
  n128 -->|Serves| n428
  n128 -->|Part of| n54
  n128 -->|Depends on| n131
  n128 -->|Depends on| n132
  n128 -->|Depends on| n211
  n128 -->|Depends on| n50
  n128 -->|Depends on| n269
  n129 -->|Serves| n435
  n129 -->|Part of| n54
  n129 -->|Depends on| n131
  n129 -->|Depends on| n154
  n129 -->|Depends on| n204
  n129 -->|Depends on| n39
  n129 -->|Depends on| n156
  n129 -->|Depends on| n216
  n129 -->|Depends on| n20
  n129 -->|Depends on| n22
  n129 -->|Depends on| n38
  n129 -->|Depends on| n151
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
  n129 -->|Depends on| n269
  n129 -->|Depends on| n40
  n129 -->|Depends on| n158
  n129 -->|Depends on| n135
  n129 -->|Depends on| n153
  n129 -->|Depends on| n704
  n129 -->|Depends on| n702
  n129 -->|Depends on| n112
  n129 -->|Depends on| n132
  n130 -->|Serves| n428
  n130 -->|Part of| n54
  n130 -->|Depends on| n154
  n130 -->|Depends on| n131
  n130 -->|Depends on| n200
  n130 -->|Depends on| n20
  n130 -->|Depends on| n38
  n130 -->|Depends on| n50
  n130 -->|Depends on| n269
  n131 -->|Serves| n428
  n131 -->|Depends on| n158
  n131 -->|Depends on| n184
  n131 -->|Depends on| n183
  n131 -->|Depends on| n197
  n131 -->|Depends on| n211
  n131 -->|Depends on| n199
  n131 -->|Depends on| n50
  n131 -->|Depends on| n40
  n131 -->|Depends on| n16
  n131 -->|Depends on| n433
  n131 -->|Depends on| n427
  n131 -->|Depends on| n269
  n131 -->|Depends on| n154
  n131 -->|Depends on| n206
  n131 -->|Depends on| n132
  n131 -->|Depends on| n152
  n131 -->|Depends on| n200
  n131 -->|Depends on| n38
  n131 -->|Depends on| n20
  n131 -->|Depends on| n681
  n132 -->|Serves| n428
  n132 -->|Depends on| n212
  n132 -->|Depends on| n269
  n133 -->|Serves| n435
  n133 -->|Part of| n54
  n133 -->|Depends on| n131
  n133 -->|Depends on| n199
  n133 -->|Depends on| n22
  n133 -->|Depends on| n50
  n133 -->|Depends on| n269
  n134 -->|Serves| n668
  n134 -->|Part of| n54
  n134 -->|Depends on| n158
  n134 -->|Depends on| n131
  n134 -->|Depends on| n665
  n134 -->|Depends on| n22
  n134 -->|Depends on| n38
  n134 -->|Depends on| n50
  n134 -->|Depends on| n269
  n135 -->|Serves| n435
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
  n136 -->|Serves| n435
  n136 -->|Part of| n54
  n136 -->|Depends on| n131
  n136 -->|Depends on| n154
  n136 -->|Depends on| n204
  n136 -->|Depends on| n153
  n136 -->|Depends on| n20
  n136 -->|Depends on| n21
  n136 -->|Depends on| n38
  n136 -->|Depends on| n50
  n136 -->|Depends on| n269
  n137 -->|Serves| n435
  n137 -->|Part of| n54
  n137 -->|Depends on| n131
  n137 -->|Depends on| n154
  n137 -->|Depends on| n204
  n137 -->|Depends on| n200
  n137 -->|Depends on| n262
  n137 -->|Depends on| n261
  n137 -->|Depends on| n219
  n137 -->|Depends on| n218
  n137 -->|Depends on| n20
  n137 -->|Depends on| n22
  n137 -->|Depends on| n21
  n137 -->|Depends on| n38
  n137 -->|Depends on| n24
  n137 -->|Depends on| n191
  n137 -->|Depends on| n717
  n137 -->|Depends on| n16
  n137 -->|Depends on| n50
  n137 -->|Depends on| n269
  n137 -->|Depends on| n268
  n137 -->|Depends on| n236
  n137 -->|Depends on| n716
  n137 -->|Depends on| n140
  n137 -->|Depends on| n158
  n138 -->|Serves| n428
  n138 -->|Depends on| n158
  n138 -->|Depends on| n151
  n138 -->|Depends on| n131
  n138 -->|Depends on| n211
  n138 -->|Depends on| n50
  n138 -->|Depends on| n269
  n139 -->|Serves| n428
  n139 -->|Part of| n54
  n139 -->|Depends on| n116
  n139 -->|Depends on| n40
  n140 -->|Serves| n668
  n140 -->|Part of| n54
  n140 -->|Depends on| n158
  n140 -->|Depends on| n131
  n140 -->|Depends on| n121
  n140 -->|Depends on| n182
  n140 -->|Depends on| n117
  n140 -->|Depends on| n665
  n140 -->|Depends on| n667
  n140 -->|Depends on| n668
  n140 -->|Depends on| n15
  n140 -->|Depends on| n163
  n140 -->|Depends on| n664
  n140 -->|Depends on| n40
  n140 -->|Depends on| n132
  n140 -->|Depends on| n20
  n140 -->|Depends on| n22
  n140 -->|Depends on| n38
  n140 -->|Depends on| n50
  n140 -->|Depends on| n190
  n140 -->|Depends on| n269
  n141 -->|Serves| n428
  n141 -->|Part of| n54
  n141 -->|Depends on| n131
  n141 -->|Depends on| n138
  n142 -->|Serves| n435
  n142 -->|Part of| n54
  n142 -->|Depends on| n154
  n142 -->|Depends on| n131
  n142 -->|Depends on| n200
  n142 -->|Depends on| n22
  n142 -->|Depends on| n38
  n142 -->|Depends on| n50
  n142 -->|Depends on| n269
  n143 -->|Serves| n428
  n143 -->|Part of| n54
  n143 -->|Depends on| n131
  n143 -->|Depends on| n184
  n143 -->|Depends on| n211
  n143 -->|Depends on| n197
  n143 -->|Depends on| n50
  n143 -->|Depends on| n269
  n144 -->|Serves| n435
  n144 -->|Part of| n54
  n144 -->|Depends on| n131
  n144 -->|Depends on| n20
  n144 -->|Depends on| n22
  n144 -->|Depends on| n38
  n144 -->|Depends on| n300
  n144 -->|Depends on| n716
  n144 -->|Depends on| n40
  n144 -->|Depends on| n158
  n144 -->|Depends on| n50
  n144 -->|Depends on| n269
  n145 -->|Serves| n435
  n145 -->|Part of| n54
  n145 -->|Depends on| n131
  n145 -->|Depends on| n154
  n145 -->|Depends on| n204
  n145 -->|Depends on| n20
  n145 -->|Depends on| n22
  n145 -->|Depends on| n153
  n145 -->|Depends on| n39
  n145 -->|Depends on| n216
  n145 -->|Depends on| n38
  n145 -->|Depends on| n32
  n145 -->|Depends on| n293
  n145 -->|Depends on| n151
  n145 -->|Depends on| n717
  n145 -->|Depends on| n50
  n145 -->|Depends on| n269
  n145 -->|Depends on| n40
  n145 -->|Depends on| n158
  n162 -->|Depends on| n224
  n162 -->|Depends on| n226
  n163 -->|Serves| n428
  n163 -->|Depends on| n30
  n163 -->|Depends on| n161
  n164 -->|Serves| n428
  n164 -->|Depends on| n269
  n165 -->|Implements| n167
  n165 -->|Depends on| n16
  n165 -->|Depends on| n164
  n165 -->|Depends on| n269
  n168 -->|Chooses| n165
  n168 -->|Chooses| n169
  n168 -->|Chooses| n176
  n168 -->|Chooses| n171
  n168 -->|Chooses| n173
  n168 -->|Chooses| n174
  n168 -->|Chooses| n175
  n168 -->|Chooses| n172
  n168 -->|Chooses| n170
  n168 -->|In| n29
  n168 -->|In| n52
  n169 -->|Implements| n167
  n169 -->|Depends on| n21
  n169 -->|Depends on| n20
  n169 -->|Depends on| n22
  n169 -->|Depends on| n38
  n169 -->|Depends on| n166
  n169 -->|Depends on| n164
  n169 -->|Depends on| n269
  n170 -->|Implements| n167
  n170 -->|Depends on| n21
  n170 -->|Depends on| n20
  n170 -->|Depends on| n22
  n170 -->|Depends on| n32
  n170 -->|Depends on| n154
  n170 -->|Depends on| n38
  n170 -->|Depends on| n164
  n170 -->|Depends on| n269
  n171 -->|Implements| n167
  n171 -->|Depends on| n21
  n171 -->|Depends on| n22
  n171 -->|Depends on| n42
  n171 -->|Depends on| n38
  n171 -->|Depends on| n166
  n171 -->|Depends on| n164
  n171 -->|Depends on| n269
  n172 -->|Implements| n167
  n172 -->|Depends on| n33
  n172 -->|Depends on| n40
  n172 -->|Depends on| n164
  n172 -->|Depends on| n269
  n173 -->|Implements| n167
  n173 -->|Depends on| n21
  n173 -->|Depends on| n22
  n173 -->|Depends on| n27
  n173 -->|Depends on| n38
  n173 -->|Depends on| n166
  n173 -->|Depends on| n164
  n173 -->|Depends on| n269
  n174 -->|Implements| n167
  n174 -->|Depends on| n25
  n174 -->|Depends on| n164
  n174 -->|Depends on| n269
  n175 -->|Implements| n167
  n175 -->|Depends on| n16
  n175 -->|Depends on| n53
  n175 -->|Depends on| n166
  n175 -->|Depends on| n164
  n175 -->|Depends on| n269
  n176 -->|Implements| n167
  n176 -->|Depends on| n21
  n176 -->|Depends on| n22
  n176 -->|Depends on| n40
  n176 -->|Depends on| n38
  n176 -->|Depends on| n166
  n176 -->|Depends on| n164
  n176 -->|Depends on| n269
  n177 -->|Chooses| n179
  n177 -->|In| n29
  n177 -->|In| n47
  n177 -->|In| n52
  n177 -->|In| n14
  n177 -->|Serves| n435
  n179 -->|Depends on| n276
  n180 -->|Serves| n435
  n180 -->|Applied by| n179
  n180 -->|Applied by| n177
  n180 -->|Applied by| n276
  n181 -->|Serves| n435
  n182 -->|Serves| n428
  n182 -->|Depends on| n158
  n182 -->|Depends on| n154
  n182 -->|Depends on| n38
  n182 -->|Depends on| n212
  n182 -->|Depends on| n39
  n182 -->|Depends on| n236
  n182 -->|Depends on| n270
  n182 -->|Depends on| n153
  n182 -->|Depends on| n717
  n183 -->|Serves| n428
  n183 -->|Depends on| n147
  n183 -->|Depends on| n203
  n183 -->|Depends on| n206
  n183 -->|Depends on| n39
  n183 -->|Depends on| n149
  n183 -->|Depends on| n154
  n183 -->|Depends on| n282
  n183 -->|Depends on| n207
  n184 -->|Serves| n428
  n184 -->|Depends on| n154
  n184 -->|Depends on| n433
  n184 -->|Depends on| n185
  n184 -->|Depends on| n206
  n184 -->|Depends on| n203
  n184 -->|Depends on| n30
  n184 -->|Depends on| n20
  n184 -->|Depends on| n38
  n184 -->|Depends on| n208
  n184 -->|Depends on| n204
  n184 -->|Depends on| n194
  n184 -->|Depends on| n212
  n184 -->|Depends on| n236
  n184 -->|Depends on| n39
  n184 -->|Depends on| n270
  n184 -->|Depends on| n192
  n184 -->|Depends on| n48
  n184 -->|Depends on| n190
  n184 -->|Depends on| n27
  n184 -->|Depends on| n153
  n184 -->|Depends on| n195
  n185 -->|Serves| n428
  n186 -->|Serves| n428
  n186 -->|Depends on| n158
  n186 -->|Depends on| n16
  n186 -->|Depends on| n40
  n186 -->|Depends on| n278
  n187 -->|Serves| n428
  n187 -->|Depends on| n188
  n187 -->|Depends on| n158
  n187 -->|Depends on| n154
  n187 -->|Depends on| n50
  n187 -->|Depends on| n16
  n187 -->|Depends on| n53
  n187 -->|Depends on| n426
  n187 -->|Depends on| n25
  n187 -->|Depends on| n20
  n187 -->|Depends on| n38
  n187 -->|Depends on| n204
  n187 -->|Depends on| n186
  n187 -->|Depends on| n189
  n187 -->|Depends on| n317
  n187 -->|Depends on| n579
  n187 -->|Depends on| n276
  n187 -->|Depends on| n272
  n189 -->|Serves| n428
  n189 -->|Depends on| n278
  n190 -->|Serves| n428
  n190 -->|Depends on| n154
  n190 -->|Depends on| n215
  n190 -->|Depends on| n717
  n190 -->|Depends on| n204
  n190 -->|Depends on| n20
  n190 -->|Depends on| n38
  n190 -->|Depends on| n24
  n190 -->|Depends on| n191
  n190 -->|Depends on| n151
  n192 -->|Serves| n428
  n193 -->|Serves| n428
  n194 -->|Serves| n428
  n194 -->|Depends on| n39
  n194 -->|Depends on| n270
  n194 -->|Depends on| n203
  n194 -->|Depends on| n206
  n194 -->|Depends on| n178
  n194 -->|Depends on| n193
  n194 -->|Depends on| n436
  n194 -->|Depends on| n154
  n194 -->|Depends on| n717
  n194 -->|Depends on| n300
  n194 -->|Depends on| n181
  n194 -->|Depends on| n192
  n195 -->|Serves| n428
  n195 -->|Depends on| n433
  n195 -->|Depends on| n270
  n197 -->|Serves| n428
  n197 -->|Depends on| n26
  n197 -->|Depends on| n236
  n197 -->|Depends on| n155
  n197 -->|Depends on| n154
  n197 -->|Depends on| n430
  n197 -->|Depends on| n425
  n197 -->|Depends on| n193
  n197 -->|Depends on| n431
  n197 -->|Depends on| n432
  n197 -->|Depends on| n206
  n197 -->|Depends on| n20
  n197 -->|Depends on| n38
  n197 -->|Depends on| n204
  n197 -->|Depends on| n194
  n197 -->|Depends on| n39
  n197 -->|Depends on| n153
  n197 -->|Depends on| n277
  n197 -->|Depends on| n244
  n197 -->|Depends on| n238
  n197 -->|Depends on| n240
  n197 -->|Depends on| n248
  n197 -->|Depends on| n257
  n197 -->|Depends on| n254
  n197 -->|Depends on| n252
  n197 -->|Depends on| n242
  n198 -->|Serves| n256
  n198 -->|Applied by| n197
  n198 -->|Applied by| n211
  n199 -->|Serves| n435
  n199 -->|Depends on| n154
  n199 -->|Depends on| n151
  n199 -->|Depends on| n206
  n199 -->|Depends on| n20
  n199 -->|Depends on| n38
  n199 -->|Depends on| n39
  n199 -->|Depends on| n278
  n200 -->|Serves| n435
  n200 -->|Depends on| n151
  n200 -->|Depends on| n203
  n200 -->|Depends on| n39
  n200 -->|Depends on| n278
  n202 -->|Serves| n428
  n202 -->|Depends on| n154
  n202 -->|Depends on| n424
  n202 -->|Depends on| n201
  n202 -->|Depends on| n16
  n202 -->|Depends on| n200
  n202 -->|Depends on| n211
  n202 -->|Depends on| n276
  n203 -->|Serves| n428
  n203 -->|Depends on| n672
  n204 -->|Serves| n428
  n204 -->|Depends on| n154
  n204 -->|Depends on| n20
  n204 -->|Depends on| n38
  n204 -->|Depends on| n216
  n204 -->|Depends on| n39
  n204 -->|Depends on| n153
  n204 -->|Depends on| n717
  n205 -->|Serves| n428
  n205 -->|Implements| n27
  n205 -->|Depends on| n20
  n205 -->|Depends on| n38
  n205 -->|Depends on| n24
  n205 -->|Depends on| n196
  n205 -->|Depends on| n45
  n206 -->|Serves| n428
  n206 -->|Depends on| n259
  n207 -->|Serves| n428
  n207 -->|Depends on| n269
  n208 -->|Serves| n428
  n208 -->|Depends on| n719
  n208 -->|Depends on| n206
  n208 -->|Depends on| n210
  n208 -->|Depends on| n55
  n208 -->|Depends on| n26
  n208 -->|Depends on| n45
  n208 -->|Depends on| n24
  n208 -->|Depends on| n38
  n208 -->|Depends on| n203
  n208 -->|Depends on| n148
  n208 -->|Depends on| n270
  n208 -->|Depends on| n718
  n208 -->|Depends on| n155
  n208 -->|Depends on| n39
  n209 -->|Serves| n435
  n209 -->|Applied by| n194
  n209 -->|Applied by| n211
  n211 -->|Serves| n428
  n211 -->|Depends on| n236
  n211 -->|Depends on| n147
  n211 -->|Depends on| n160
  n211 -->|Depends on| n149
  n211 -->|Depends on| n154
  n211 -->|Depends on| n30
  n211 -->|Depends on| n20
  n211 -->|Depends on| n38
  n211 -->|Depends on| n39
  n211 -->|Depends on| n204
  n211 -->|Depends on| n278
  n211 -->|Depends on| n282
  n211 -->|Depends on| n246
  n211 -->|Depends on| n238
  n211 -->|Depends on| n254
  n211 -->|Depends on| n250
  n212 -->|Serves| n428
  n212 -->|Depends on| n157
  n212 -->|Depends on| n154
  n212 -->|Depends on| n38
  n212 -->|Depends on| n39
  n212 -->|Depends on| n236
  n212 -->|Depends on| n270
  n213 -->|Refines| n428
  n214 -->|Accepts| n213
  n218 -->|Serves| n428
  n218 -->|Depends on| n219
  n218 -->|Depends on| n719
  n218 -->|Depends on| n699
  n218 -->|Depends on| n705
  n218 -->|Depends on| n703
  n218 -->|Depends on| n706
  n218 -->|Depends on| n700
  n218 -->|Depends on| n697
  n218 -->|Depends on| n696
  n218 -->|Depends on| n707
  n218 -->|Depends on| n714
  n218 -->|Depends on| n716
  n218 -->|Depends on| n702
  n226 -->|Depends on| n223
  n229 -->|Read in| n717
  n236 -->|Serves| n428
  n236 -->|Depends on| n681
  n236 -->|Depends on| n673
  n236 -->|Depends on| n717
  n236 -->|Depends on| n720
  n236 -->|Depends on| n688
  n236 -->|Depends on| n689
  n236 -->|Depends on| n690
  n236 -->|Depends on| n30
  n236 -->|Depends on| n20
  n236 -->|Depends on| n38
  n236 -->|Depends on| n273
  n237 -->|Serves| n428
  n237 -->|Applied by| n236
  n237 -->|Applied by| n317
  n238 -->|Refines| n256
  n239 -->|Accepts| n238
  n240 -->|Refines| n256
  n241 -->|Accepts| n240
  n242 -->|Refines| n256
  n243 -->|Accepts| n242
  n244 -->|Refines| n256
  n245 -->|Accepts| n244
  n246 -->|Refines| n256
  n247 -->|Accepts| n246
  n248 -->|Refines| n256
  n249 -->|Accepts| n248
  n250 -->|Refines| n256
  n251 -->|Accepts| n250
  n252 -->|Refines| n254
  n252 -->|Depends on| n254
  n253 -->|Accepts| n252
  n254 -->|Refines| n256
  n255 -->|Accepts| n254
  n257 -->|Refines| n256
  n258 -->|Accepts| n257
  n259 -->|Refines| n437
  n260 -->|Accepts| n259
  n262 -->|Refines| n437
  n263 -->|Accepts| n262
  n268 -->|Written in| n276
  n268 -->|Depends on| n276
  n269 -->|Written in| n276
  n269 -->|Depends on| n276
  n270 -->|Written in| n276
  n270 -->|Depends on| n276
  n271 -->|Serves| n435
  n271 -->|Applied by| n270
  n271 -->|Applied by| n282
  n271 -->|Applied by| n272
  n271 -->|Applied by| n269
  n271 -->|Applied by| n281
  n271 -->|Applied by| n268
  n271 -->|Applied by| n279
  n272 -->|Written in| n276
  n272 -->|Depends on| n276
  n273 -->|Written in| n276
  n274 -->|Written in| n276
  n275 -->|Written in| n276
  n277 -->|Written in| n276
  n278 -->|Written in| n276
  n279 -->|Written in| n276
  n279 -->|Depends on| n276
  n280 -->|Written in| n276
  n281 -->|Written in| n276
  n281 -->|Depends on| n276
  n282 -->|Written in| n276
  n282 -->|Depends on| n276
  n283 -->|Written in| n276
  n284 -->|Serves| n435
  n286 -->|Serves| n435
  n288 -->|Serves| n435
  n291 -->|Serves| n435
  n293 -->|Serves| n435
  n295 -->|Serves| n435
  n296 -->|Serves| n435
  n300 -->|Serves| n435
  n302 -->|Defined by| n331
  n302 -->|Depends on| n331
  n302 -->|Depends on| n320
  n303 -->|Defined by| n331
  n303 -->|Depends on| n331
  n303 -->|Depends on| n158
  n303 -->|Depends on| n310
  n303 -->|Depends on| n228
  n304 -->|Defined by| n331
  n304 -->|Depends on| n331
  n304 -->|Depends on| n320
  n305 -->|Defined by| n331
  n305 -->|Depends on| n331
  n305 -->|Depends on| n320
  n305 -->|Depends on| n228
  n306 -->|Defined by| n331
  n306 -->|Depends on| n331
  n306 -->|Depends on| n320
  n306 -->|Depends on| n228
  n306 -->|Depends on| n324
  n307 -->|Defined by| n331
  n307 -->|Depends on| n331
  n307 -->|Depends on| n320
  n307 -->|Depends on| n228
  n308 -->|Defined by| n331
  n308 -->|Depends on| n331
  n308 -->|Depends on| n267
  n308 -->|Depends on| n1
  n308 -->|Depends on| n228
  n308 -->|Depends on| n233
  n310 -->|Defined by| n331
  n310 -->|Depends on| n331
  n310 -->|Depends on| n228
  n310 -->|Depends on| n225
  n312 -->|Defined by| n331
  n312 -->|Depends on| n331
  n312 -->|Depends on| n320
  n312 -->|Depends on| n228
  n312 -->|Depends on| n302
  n312 -->|Depends on| n306
  n313 -->|Defined by| n331
  n313 -->|Depends on| n331
  n313 -->|Depends on| n231
  n313 -->|Depends on| n230
  n314 -->|Uses the variables of| n8
  n314 -->|Uses the variables of| n11
  n314 -->|Uses the variables of| n6
  n314 -->|Styles| n317
  n315 -->|Defined by| n331
  n315 -->|Depends on| n331
  n315 -->|Depends on| n320
  n317 -->|Serves| n428
  n317 -->|Depends on| n318
  n317 -->|Depends on| n327
  n317 -->|Depends on| n12
  n317 -->|Depends on| n4
  n317 -->|Depends on| n8
  n317 -->|Depends on| n7
  n317 -->|Depends on| n11
  n317 -->|Depends on| n5
  n317 -->|Depends on| n9
  n317 -->|Depends on| n3
  n317 -->|Depends on| n6
  n317 -->|Depends on| n44
  n317 -->|Depends on| n20
  n317 -->|Depends on| n15
  n317 -->|Depends on| n18
  n317 -->|Depends on| n325
  n317 -->|Depends on| n330
  n317 -->|Depends on| n328
  n317 -->|Depends on| n313
  n317 -->|Depends on| n309
  n317 -->|Depends on| n321
  n317 -->|Depends on| n319
  n317 -->|Depends on| n224
  n317 -->|Depends on| n223
  n317 -->|Depends on| n278
  n317 -->|Depends on| n276
  n317 -->|Depends on| n681
  n319 -->|Defined by| n331
  n319 -->|Depends on| n331
  n319 -->|Depends on| n227
  n321 -->|Defined by| n331
  n321 -->|Depends on| n331
  n321 -->|Depends on| n234
  n321 -->|Depends on| n229
  n321 -->|Depends on| n704
  n321 -->|Depends on| n693
  n322 -->|Uses the variables of| n12
  n322 -->|Uses the variables of| n8
  n322 -->|Uses the variables of| n7
  n322 -->|Uses the variables of| n11
  n322 -->|Uses the variables of| n5
  n322 -->|Uses the variables of| n9
  n322 -->|Uses the variables of| n3
  n322 -->|Uses the variables of| n6
  n322 -->|Styles| n317
  n324 -->|Defined by| n331
  n324 -->|Depends on| n331
  n324 -->|Depends on| n323
  n324 -->|Depends on| n320
  n324 -->|Depends on| n228
  n325 -->|Defined by| n331
  n325 -->|Depends on| n331
  n325 -->|Depends on| n228
  n325 -->|Depends on| n326
  n325 -->|Depends on| n312
  n325 -->|Depends on| n308
  n326 -->|Defined by| n331
  n326 -->|Depends on| n331
  n326 -->|Depends on| n228
  n326 -->|Depends on| n303
  n326 -->|Depends on| n304
  n326 -->|Depends on| n305
  n326 -->|Depends on| n315
  n326 -->|Depends on| n307
  n328 -->|Defined by| n331
  n328 -->|Depends on| n331
  n328 -->|Depends on| n224
  n328 -->|Depends on| n223
  n328 -->|Depends on| n225
  n328 -->|Depends on| n222
  n329 -->|Serves| n435
  n329 -->|Applied by| n322
  n329 -->|Applied by| n314
  n329 -->|Applied by| n330
  n329 -->|Applied by| n313
  n329 -->|Applied by| n317
  n330 -->|Defined by| n331
  n330 -->|Depends on| n331
  n330 -->|Depends on| n224
  n330 -->|Depends on| n231
  n330 -->|Depends on| n230
  n330 -->|Depends on| n221
  n330 -->|Depends on| n232
  n330 -->|Depends on| n226
  n330 -->|Depends on| n223
  n332 -->|Chooses| n345
  n332 -->|In| n29
  n332 -->|In| n52
  n332 -->|Serves| n429
  n333 -->|Chooses| n372
  n333 -->|In| n29
  n333 -->|In| n52
  n333 -->|Serves| n429
  n334 -->|Implements| n20
  n335 -->|Implements| n21
  n336 -->|Implements| n22
  n338 -->|Chooses| n383
  n338 -->|Chooses| n371
  n338 -->|In| n29
  n338 -->|In| n52
  n338 -->|Serves| n429
  n339 -->|Implements| n15
  n339 -->|Uses| n287
  n340 -->|Chooses| n339
  n340 -->|In| n29
  n340 -->|In| n52
  n340 -->|Serves| n429
  n341 -->|Implements| n40
  n341 -->|Implements| n42
  n341 -->|Implements| n41
  n341 -->|Depends on| n342
  n341 -->|Depends on| n38
  n341 -->|Depends on| n158
  n341 -->|Depends on| n280
  n343 -->|Chooses| n350
  n343 -->|Chooses| n365
  n343 -->|In| n52
  n343 -->|Serves| n429
  n344 -->|Chooses| n353
  n344 -->|Chooses| n379
  n344 -->|Chooses| n366
  n344 -->|Chooses| n341
  n344 -->|Chooses| n351
  n344 -->|In| n52
  n344 -->|Serves| n429
  n345 -->|Implements| n13
  n345 -->|Depends on| n20
  n345 -->|Depends on| n22
  n345 -->|Depends on| n719
  n345 -->|Depends on| n699
  n345 -->|Depends on| n700
  n345 -->|Depends on| n697
  n345 -->|Depends on| n696
  n345 -->|Depends on| n708
  n345 -->|Depends on| n714
  n345 -->|Depends on| n716
  n345 -->|Depends on| n702
  n345 -->|Depends on| n706
  n347 -->|Depends on| n21
  n347 -->|Depends on| n22
  n347 -->|Depends on| n20
  n347 -->|Depends on| n38
  n348 -->|Depends on| n21
  n348 -->|Depends on| n22
  n348 -->|Depends on| n20
  n348 -->|Depends on| n38
  n348 -->|Depends on| n349
  n348 -->|Depends on| n154
  n350 -->|Implements| n20
  n350 -->|Implements| n22
  n350 -->|Implements| n21
  n350 -->|Implements| n56
  n350 -->|Depends on| n38
  n350 -->|Depends on| n352
  n350 -->|Depends on| n280
  n351 -->|Implements| n25
  n351 -->|Implements| n46
  n351 -->|Depends on| n280
  n353 -->|Implements| n50
  n353 -->|Implements| n51
  n353 -->|Depends on| n346
  n353 -->|Depends on| n280
  n354 -->|Implements| n17
  n354 -->|Depends on| n50
  n354 -->|Depends on| n158
  n354 -->|Depends on| n152
  n354 -->|Depends on| n280
  n355 -->|Implements| n18
  n355 -->|Depends on| n316
  n356 -->|Implements| n24
  n357 -->|Implements| n25
  n358 -->|Chooses| n334
  n358 -->|Chooses| n336
  n358 -->|Chooses| n335
  n358 -->|Chooses| n361
  n358 -->|Chooses| n362
  n358 -->|Chooses| n363
  n358 -->|Chooses| n380
  n358 -->|Chooses| n368
  n358 -->|Chooses| n367
  n358 -->|Chooses| n357
  n358 -->|In| n29
  n358 -->|Serves| n429
  n359 -->|Implements| n38
  n360 -->|Chooses| n359
  n360 -->|Chooses| n356
  n360 -->|Chooses| n355
  n360 -->|Chooses| n364
  n360 -->|Chooses| n354
  n360 -->|Chooses| n373
  n360 -->|In| n29
  n360 -->|In| n52
  n360 -->|Serves| n429
  n361 -->|Implements| n40
  n361 -->|Depends on| n387
  n361 -->|Depends on| n159
  n362 -->|Implements| n42
  n362 -->|Depends on| n387
  n363 -->|Implements| n50
  n363 -->|Depends on| n280
  n364 -->|Implements| n53
  n365 -->|Implements| n32
  n365 -->|Depends on| n22
  n365 -->|Depends on| n38
  n365 -->|Depends on| n154
  n365 -->|Depends on| n293
  n366 -->|Implements| n33
  n367 -->|Implements| n32
  n368 -->|Implements| n33
  n369 -->|Depends on| n347
  n369 -->|Depends on| n348
  n370 -->|Chooses| n369
  n370 -->|In| n29
  n370 -->|In| n52
  n370 -->|Serves| n429
  n371 -->|Implements| n44
  n371 -->|Depends on| n337
  n371 -->|Depends on| n154
  n371 -->|Depends on| n215
  n371 -->|Depends on| n717
  n372 -->|Implements| n55
  n372 -->|Uses| n299
  n372 -->|Uses| n292
  n373 -->|Implements| n26
  n374 -->|Chooses| n205
  n374 -->|In| n29
  n374 -->|In| n52
  n374 -->|Serves| n429
  n375 -->|Implements| n45
  n376 -->|Chooses| n375
  n376 -->|In| n52
  n376 -->|Serves| n429
  n377 -->|Chooses| n378
  n377 -->|In| n29
  n377 -->|Serves| n429
  n378 -->|Implements| n45
  n378 -->|Depends on| n154
  n378 -->|Depends on| n337
  n378 -->|Depends on| n190
  n378 -->|Depends on| n196
  n379 -->|Implements| n16
  n379 -->|Depends on| n381
  n379 -->|Depends on| n382
  n380 -->|Implements| n16
  n380 -->|Depends on| n159
  n383 -->|Implements| n39
  n383 -->|Depends on| n337
  n384 -->|Chooses| n388
  n384 -->|In| n29
  n384 -->|In| n52
  n384 -->|Serves| n429
  n385 -->|Implements| n30
  n385 -->|Uses| n297
  n385 -->|Depends on| n39
  n385 -->|Depends on| n153
  n385 -->|Depends on| n717
  n386 -->|Chooses| n385
  n386 -->|In| n29
  n386 -->|In| n52
  n386 -->|Serves| n429
  n388 -->|Implements| n49
  n388 -->|Uses| n301
  n388 -->|Uses| n290
  n388 -->|Uses| n285
  n388 -->|Depends on| n280
  n389 -->|Serves| n428
  n389 -->|Applied by| n184
  n389 -->|Applied by| n129
  n390 -->|Serves| n435
  n390 -->|Applied by| n332
  n391 -->|Serves| n435
  n391 -->|Applied by| n184
  n391 -->|Applied by| n197
  n392 -->|Serves| n437
  n392 -->|Applied by| n615
  n392 -->|Applied by| n616
  n393 -->|Serves| n435
  n393 -->|Applied by| n192
  n393 -->|Applied by| n194
  n394 -->|Serves| n428
  n394 -->|Applied by| n121
  n394 -->|Applied by| n162
  n395 -->|Serves| n428
  n395 -->|Applied by| n54
  n395 -->|Applied by| n43
  n395 -->|Applied by| n31
  n395 -->|Applied by| n28
  n396 -->|Serves| n437
  n396 -->|Applied by| n616
  n396 -->|Applied by| n680
  n397 -->|Serves| n435
  n397 -->|Applied by| n184
  n397 -->|Applied by| n681
  n398 -->|Serves| n428
  n398 -->|Applied by| n666
  n399 -->|Serves| n428
  n399 -->|Applied by| n113
  n399 -->|Applied by| n213
  n399 -->|Applied by| n588
  n399 -->|Applied by| n594
  n400 -->|Serves| n428
  n400 -->|Applied by| n208
  n400 -->|Applied by| n55
  n400 -->|Applied by| n717
  n400 -->|Applied by| n148
  n401 -->|Serves| n428
  n401 -->|Applied by| n184
  n401 -->|Applied by| n119
  n402 -->|Serves| n435
  n402 -->|Applied by| n199
  n402 -->|Applied by| n133
  n403 -->|Serves| n435
  n403 -->|Applied by| n184
  n403 -->|Applied by| n183
  n403 -->|Applied by| n202
  n403 -->|Applied by| n208
  n403 -->|Applied by| n197
  n404 -->|Serves| n437
  n404 -->|Applied by| n204
  n404 -->|Applied by| n184
  n404 -->|Applied by| n183
  n404 -->|Applied by| n206
  n404 -->|Applied by| n259
  n404 -->|Applied by| n113
  n405 -->|Serves| n437
  n405 -->|Applied by| n204
  n405 -->|Applied by| n197
  n405 -->|Applied by| n145
  n405 -->|Applied by| n137
  n405 -->|Applied by| n262
  n405 -->|Applied by| n261
  n406 -->|Serves| n428
  n406 -->|Applied by| n168
  n406 -->|Applied by| n662
  n407 -->|Serves| n435
  n407 -->|Applied by| n673
  n407 -->|Applied by| n236
  n407 -->|Applied by| n184
  n407 -->|Applied by| n28
  n407 -->|Applied by| n31
  n408 -->|Serves| n428
  n408 -->|Applied by| n197
  n408 -->|Applied by| n184
  n408 -->|Applied by| n204
  n409 -->|Serves| n435
  n409 -->|Applied by| n184
  n409 -->|Applied by| n681
  n410 -->|Serves| n435
  n410 -->|Applied by| n119
  n410 -->|Applied by| n142
  n410 -->|Applied by| n200
  n410 -->|Applied by| n317
  n410 -->|Applied by| n182
  n411 -->|Serves| n428
  n411 -->|Applied by| n183
  n411 -->|Applied by| n194
  n411 -->|Applied by| n211
  n411 -->|Applied by| n43
  n412 -->|Serves| n437
  n412 -->|Applied by| n204
  n412 -->|Applied by| n145
  n412 -->|Applied by| n369
  n412 -->|Applied by| n370
  n412 -->|Applied by| n113
  n412 -->|Applied by| n197
  n412 -->|Applied by| n129
  n413 -->|Serves| n428
  n413 -->|Applied by| n343
  n413 -->|Applied by| n654
  n413 -->|Applied by| n642
  n413 -->|Applied by| n602
  n414 -->|Serves| n428
  n414 -->|Applied by| n39
  n414 -->|Applied by| n155
  n414 -->|Applied by| n150
  n414 -->|Applied by| n197
  n415 -->|Serves| n428
  n415 -->|Applied by| n374
  n415 -->|Applied by| n377
  n415 -->|Applied by| n376
  n416 -->|Serves| n437
  n416 -->|Applied by| n655
  n416 -->|Applied by| n652
  n416 -->|Applied by| n611
  n416 -->|Applied by| n610
  n417 -->|Serves| n428
  n417 -->|Applied by| n140
  n417 -->|Applied by| n134
  n417 -->|Applied by| n665
  n417 -->|Applied by| n670
  n417 -->|Applied by| n668
  n417 -->|Applied by| n634
  n417 -->|Applied by| n613
  n418 -->|Serves| n429
  n418 -->|Applied by| n360
  n418 -->|Applied by| n358
  n418 -->|Applied by| n344
  n418 -->|Applied by| n340
  n418 -->|Applied by| n384
  n418 -->|Applied by| n386
  n418 -->|Applied by| n333
  n418 -->|Applied by| n338
  n418 -->|Applied by| n572
  n418 -->|Applied by| n573
  n418 -->|Applied by| n584
  n418 -->|Applied by| n583
  n418 -->|Applied by| n578
  n418 -->|Applied by| n577
  n419 -->|Serves| n428
  n419 -->|Applied by| n113
  n419 -->|Applied by| n213
  n419 -->|Applied by| n589
  n419 -->|Applied by| n588
  n419 -->|Applied by| n599
  n420 -->|Serves| n428
  n420 -->|Applied by| n184
  n420 -->|Applied by| n212
  n421 -->|Serves| n428
  n421 -->|Applied by| n197
  n421 -->|Applied by| n599
  n422 -->|Serves| n428
  n422 -->|Applied by| n197
  n422 -->|Applied by| n211
  n422 -->|Applied by| n204
  n423 -->|Serves| n435
  n423 -->|Applied by| n681
  n423 -->|Applied by| n673
  n423 -->|Applied by| n270
  n423 -->|Applied by| n273
  n423 -->|Applied by| n277
  n423 -->|Applied by| n282
  n423 -->|Applied by| n278
  n423 -->|Applied by| n272
  n423 -->|Applied by| n269
  n423 -->|Applied by| n268
  n423 -->|Applied by| n280
  n423 -->|Applied by| n281
  n433 -->|Refines| n428
  n434 -->|Accepts| n433
  n438 -->|Releases| n54
  n439 -->|Releases| n54
  n439 -->|Assembled by| n561
  n440 -->|Releases| n54
  n440 -->|Assembled by| n571
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
  n449 -->|Assembled by| n448
  n450 -->|Releases| n54
  n450 -->|Assembled by| n439
  n451 -->|Releases| n54
  n451 -->|Assembled by| n449
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
  n460 -->|Assembled by| n459
  n461 -->|Releases| n54
  n461 -->|Assembled by| n450
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
  n470 -->|Assembled by| n469
  n471 -->|Releases| n54
  n471 -->|Assembled by| n470
  n472 -->|Releases| n54
  n472 -->|Assembled by| n461
  n473 -->|Releases| n54
  n473 -->|Assembled by| n471
  n474 -->|Releases| n54
  n474 -->|Assembled by| n473
  n475 -->|Releases| n54
  n475 -->|Assembled by| n474
  n476 -->|Releases| n54
  n476 -->|Assembled by| n475
  n477 -->|Releases| n54
  n477 -->|Assembled by| n476
  n478 -->|Releases| n54
  n478 -->|Assembled by| n472
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
  n484 -->|Assembled by| n438
  n485 -->|Releases| n54
  n485 -->|Assembled by| n483
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
  n494 -->|Assembled by| n493
  n495 -->|Releases| n54
  n495 -->|Assembled by| n484
  n496 -->|Releases| n54
  n496 -->|Assembled by| n494
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
  n505 -->|Assembled by| n504
  n506 -->|Releases| n54
  n506 -->|Assembled by| n495
  n507 -->|Releases| n54
  n507 -->|Assembled by| n505
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
  n516 -->|Assembled by| n515
  n517 -->|Releases| n54
  n517 -->|Assembled by| n506
  n518 -->|Releases| n54
  n518 -->|Assembled by| n516
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
  n527 -->|Assembled by| n526
  n528 -->|Releases| n54
  n528 -->|Assembled by| n517
  n529 -->|Releases| n54
  n529 -->|Assembled by| n527
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
  n538 -->|Assembled by| n537
  n539 -->|Releases| n54
  n539 -->|Assembled by| n528
  n540 -->|Releases| n54
  n540 -->|Assembled by| n538
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
  n549 -->|Assembled by| n548
  n550 -->|Releases| n54
  n550 -->|Assembled by| n539
  n551 -->|Releases| n54
  n551 -->|Assembled by| n549
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
  n560 -->|Assembled by| n559
  n561 -->|Releases| n54
  n561 -->|Assembled by| n550
  n562 -->|Releases| n54
  n562 -->|Assembled by| n560
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
  n571 -->|Releases| n54
  n571 -->|Assembled by| n570
  n572 -->|In| n29
  n572 -->|In| n52
  n572 -->|Serves| n429
  n573 -->|In| n29
  n573 -->|In| n52
  n573 -->|Serves| n429
  n574 -->|Serves| n428
  n574 -->|Implements| n580
  n574 -->|Depends on| n576
  n574 -->|Depends on| n265
  n574 -->|Depends on| n331
  n575 -->|Serves| n428
  n575 -->|Applied by| n579
  n575 -->|Applied by| n43
  n577 -->|Chooses| n582
  n577 -->|In| n29
  n577 -->|In| n52
  n577 -->|Serves| n429
  n578 -->|Chooses| n574
  n578 -->|In| n29
  n578 -->|In| n52
  n578 -->|Serves| n429
  n579 -->|Serves| n428
  n579 -->|Depends on| n580
  n581 -->|Serves| n429
  n581 -->|Applied by| n579
  n581 -->|Applied by| n572
  n581 -->|Applied by| n573
  n581 -->|Applied by| n584
  n581 -->|Applied by| n583
  n581 -->|Applied by| n578
  n581 -->|Applied by| n577
  n582 -->|Serves| n428
  n582 -->|Implements| n576
  n582 -->|Depends on| n265
  n582 -->|Depends on| n267
  n582 -->|Depends on| n331
  n582 -->|Depends on| n1
  n582 -->|Depends on| n10
  n582 -->|Depends on| n2
  n582 -->|Depends on| n233
  n582 -->|Depends on| n223
  n582 -->|Depends on| n279
  n583 -->|In| n29
  n583 -->|In| n52
  n583 -->|Serves| n429
  n584 -->|In| n29
  n584 -->|In| n52
  n584 -->|Serves| n429
  n585 -->|Verifies| n596
  n585 -->|Verifies| n603
  n585 -->|In| n52
  n585 -->|Depends on| n601
  n585 -->|Depends on| n595
  n585 -->|Depends on| n281
  n586 -->|Verifies| n184
  n586 -->|Verifies| n212
  n586 -->|Verifies| n182
  n586 -->|Verifies| n720
  n586 -->|In| n52
  n586 -->|Depends on| n184
  n586 -->|Depends on| n40
  n586 -->|Depends on| n182
  n586 -->|Depends on| n150
  n586 -->|Depends on| n587
  n586 -->|Depends on| n281
  n588 -->|Verifies| n119
  n588 -->|Verifies| n131
  n588 -->|Verifies| n183
  n588 -->|Verifies| n211
  n588 -->|Verifies| n200
  n588 -->|Verifies| n199
  n588 -->|Verifies| n350
  n588 -->|Verifies| n353
  n588 -->|Verifies| n379
  n588 -->|In| n52
  n588 -->|Depends on| n119
  n588 -->|Depends on| n594
  n588 -->|Depends on| n56
  n588 -->|Depends on| n51
  n588 -->|Depends on| n154
  n588 -->|Depends on| n20
  n588 -->|Depends on| n38
  n588 -->|Depends on| n40
  n588 -->|Depends on| n158
  n588 -->|Depends on| n269
  n588 -->|Depends on| n281
  n589 -->|Verifies| n184
  n589 -->|Verifies| n204
  n589 -->|Verifies| n208
  n589 -->|Verifies| n212
  n589 -->|Verifies| n194
  n589 -->|Verifies| n372
  n589 -->|Verifies| n385
  n589 -->|Verifies| n383
  n589 -->|Verifies| n350
  n589 -->|Verifies| n359
  n589 -->|Verifies| n341
  n589 -->|Verifies| n373
  n589 -->|In| n52
  n589 -->|Depends on| n184
  n589 -->|Depends on| n40
  n589 -->|Depends on| n16
  n589 -->|Depends on| n593
  n589 -->|Depends on| n281
  n590 -->|Verifies| n181
  n590 -->|Verifies| n300
  n590 -->|Verifies| n179
  n590 -->|In| n52
  n590 -->|Depends on| n181
  n590 -->|Depends on| n276
  n590 -->|Depends on| n300
  n590 -->|Depends on| n591
  n590 -->|Depends on| n281
  n592 -->|Verifies| n185
  n592 -->|Verifies| n193
  n592 -->|Verifies| n192
  n592 -->|Verifies| n206
  n592 -->|Verifies| n203
  n592 -->|In| n52
  n592 -->|Depends on| n185
  n592 -->|Depends on| n193
  n592 -->|Depends on| n192
  n592 -->|Depends on| n206
  n592 -->|Depends on| n203
  n592 -->|Depends on| n600
  n592 -->|Depends on| n281
  n596 -->|Implements| n601
  n596 -->|Depends on| n595
  n598 -->|Verifies| n195
  n598 -->|In| n52
  n598 -->|Depends on| n195
  n598 -->|Depends on| n597
  n598 -->|Depends on| n281
  n599 -->|Verifies| n197
  n599 -->|In| n52
  n599 -->|Depends on| n197
  n599 -->|Depends on| n184
  n599 -->|Depends on| n40
  n599 -->|Depends on| n16
  n599 -->|Depends on| n281
  n602 -->|Chooses| n603
  n602 -->|Chooses| n596
  n602 -->|In| n52
  n603 -->|Implements| n601
  n603 -->|Depends on| n595
  n604 -->|Serves| n428
  n604 -->|Part of| n661
  n604 -->|Depends on| n40
  n604 -->|Depends on| n154
  n604 -->|Depends on| n158
  n604 -->|Depends on| n627
  n604 -->|Depends on| n618
  n604 -->|Depends on| n717
  n604 -->|Depends on| n713
  n604 -->|Depends on| n656
  n605 -->|Verifies| n604
  n605 -->|In| n52
  n605 -->|Depends on| n604
  n605 -->|Depends on| n41
  n605 -->|Depends on| n158
  n605 -->|Depends on| n627
  n605 -->|Depends on| n606
  n605 -->|Depends on| n713
  n605 -->|Depends on| n281
  n607 -->|Serves| n428
  n607 -->|Part of| n661
  n607 -->|Depends on| n660
  n607 -->|Depends on| n631
  n607 -->|Depends on| n656
  n608 -->|Serves| n428
  n609 -->|Serves| n428
  n610 -->|In| n47
  n611 -->|In| n29
  n612 -->|Serves| n428
  n613 -->|Checks| n618
  n613 -->|Run by| n143
  n613 -->|Signed by| n632
  n614 -->|Checks| n618
  n614 -->|Run by| n123
  n614 -->|Signed by| n632
  n614 -->|Verifies| n334
  n614 -->|Verifies| n336
  n614 -->|Verifies| n335
  n614 -->|Verifies| n361
  n614 -->|Verifies| n362
  n614 -->|Verifies| n363
  n614 -->|Verifies| n380
  n614 -->|Verifies| n368
  n614 -->|Verifies| n367
  n614 -->|Verifies| n357
  n614 -->|Verifies| n378
  n615 -->|Chooses| n641
  n615 -->|Chooses| n640
  n615 -->|In| n29
  n615 -->|In| n47
  n615 -->|Serves| n428
  n616 -->|In| n29
  n616 -->|Serves| n428
  n617 -->|Serves| n428
  n618 -->|Produced by| n54
  n619 -->|Serves| n428
  n620 -->|Serves| n428
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
  n626 -->|Serves| n428
  n626 -->|Depends on| n320
  n626 -->|Depends on| n265
  n626 -->|Depends on| n221
  n628 -->|Ships| n659
  n628 -->|Requires| n630
  n628 -->|Requires| n644
  n628 -->|Programs assembled for| n29
  n628 -->|Follows the policy| n633
  n629 -->|Serves| n428
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
  n635 -->|Depends on| n281
  n636 -->|Serves| n428
  n636 -->|Part of| n661
  n636 -->|Depends on| n622
  n636 -->|Depends on| n276
  n636 -->|Depends on| n626
  n636 -->|Depends on| n623
  n636 -->|Depends on| n656
  n637 -->|Verifies| n641
  n637 -->|Verifies| n640
  n637 -->|In| n52
  n637 -->|Depends on| n660
  n637 -->|Depends on| n631
  n637 -->|Depends on| n648
  n637 -->|Depends on| n154
  n637 -->|Depends on| n158
  n637 -->|Depends on| n381
  n637 -->|Depends on| n645
  n637 -->|Depends on| n281
  n639 -->|Depends on| n638
  n640 -->|Serves| n428
  n640 -->|Depends on| n154
  n640 -->|Depends on| n156
  n640 -->|Depends on| n717
  n640 -->|Depends on| n158
  n640 -->|Depends on| n159
  n640 -->|Depends on| n381
  n640 -->|Depends on| n648
  n641 -->|Serves| n428
  n641 -->|Depends on| n660
  n641 -->|Depends on| n631
  n641 -->|Depends on| n645
  n641 -->|Depends on| n154
  n641 -->|Depends on| n648
  n642 -->|Chooses| n641
  n642 -->|Chooses| n640
  n642 -->|In| n52
  n643 -->|Produced by| n35
  n643 -->|Assembled for| n14
  n644 -->|Signed by| n632
  n646 -->|Runs elsewhere| n628
  n646 -->|Its writer's settings| n645
  n647 -->|Serves| n428
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
  n656 -->|Written in| n276
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
  n658 -->|Depends on| n281
  n661 -->|Deployed in| n29
  n662 -->|Chooses| n639
  n662 -->|In| n29
  n662 -->|In| n47
  n663 -->|Implements| n48
  n663 -->|Depends on| n24
  n665 -->|Serves| n428
  n665 -->|Depends on| n154
  n665 -->|Depends on| n670
  n665 -->|Depends on| n20
  n665 -->|Depends on| n38
  n665 -->|Depends on| n24
  n665 -->|Depends on| n151
  n665 -->|Depends on| n192
  n665 -->|Depends on| n48
  n666 -->|Chooses| n663
  n666 -->|In| n29
  n666 -->|In| n52
  n666 -->|Serves| n428
  n667 -->|Serves| n428
  n667 -->|Depends on| n158
  n667 -->|Depends on| n204
  n667 -->|Depends on| n154
  n667 -->|Depends on| n216
  n667 -->|Depends on| n20
  n667 -->|Depends on| n38
  n668 -->|Refines| n428
  n669 -->|Accepts| n668
  n673 -->|Serves| n428
  n673 -->|Depends on| n155
  n673 -->|Depends on| n273
  n677 -->|Written in| n276
  n678 -->|Serves| n428
  n678 -->|Applied by| n681
  n678 -->|Applied by| n49
  n679 -->|Serves| n428
  n679 -->|Applied by| n681
  n679 -->|Applied by| n673
  n679 -->|Applied by| n49
  n680 -->|In| n52
  n680 -->|Serves| n428
  n681 -->|Serves| n428
  n681 -->|Serves| n435
  n681 -->|Depends on| n49
  n681 -->|Depends on| n674
  n681 -->|Depends on| n677
  n681 -->|Depends on| n675
  n681 -->|Depends on| n676
  n681 -->|Depends on| n671
  n681 -->|Depends on| n20
  n681 -->|Depends on| n26
  n681 -->|Depends on| n45
  n681 -->|Depends on| n154
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
  n688 -->|Uses| n289
  n690 -->|Serves| n428
  n690 -->|Depends on| n685
  n690 -->|Depends on| n689
  n690 -->|Depends on| n154
  n690 -->|Depends on| n683
  n690 -->|Depends on| n684
  n690 -->|Depends on| n686
  n690 -->|Depends on| n682
  n690 -->|Depends on| n687
  n690 -->|Depends on| n38
  n690 -->|Depends on| n39
  n690 -->|Depends on| n273
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
  n717 -->|Uses| n298
  n718 -->|Serves| n428
  n720 -->|Serves| n428
  n720 -->|Depends on| n717
  n720 -->|Depends on| n719
  n720 -->|Depends on| n150
  n720 -->|Depends on| n713
  n720 -->|Depends on| n157
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
  n720 -->|Depends on| n159
  n720 -->|Depends on| n38
  n720 -->|Depends on| n39
  n720 -->|Depends on| n273
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
