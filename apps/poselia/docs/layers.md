# Layers

*The graph in force on 20 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph app["Poselia · The app in a browser"]
    n0["The browser's screen<br/><small>Implementation</small>"]:::unknown
    n1["The content the app carries<br/><small>Function</small>"]:::held
    n2["Colours<br/><small>Decision</small>"]:::neutral
    n3["Content carried by the app<br/><small>Technical choice</small>"]:::held
    n4["The home view<br/><small>Function</small>"]:::held
    n5["The browser's realizations<br/><small>Technical choice</small>"]:::unknown
    n6["Measures<br/><small>Decision</small>"]:::neutral
    n7["Style of the page<br/><small>Style sheet</small>"]:::neutral
    n8["Poselia's page<br/><small>Delivery</small>"]:::neutral
    n9["Names of the screen<br/><small>Decision</small>"]:::neutral
    n10["Show the home page<br/><small>Entry point</small>"]:::held
  end
  subgraph architecture["Poselia · Architecture"]
    n11["Bowl<br/><small>Port</small>"]:::neutral
    n12["Bowl rung<br/><small>Port</small>"]:::neutral
    n13["Browser<br/><small>Environment</small>"]:::neutral
    n14["Content<br/><small>Port</small>"]:::neutral
    n15["Poselia in a browser<br/><small>Component</small>"]:::neutral
    n16["Screen<br/><small>Port</small>"]:::neutral
    n17["Stage<br/><small>Port</small>"]:::neutral
    n18["Test<br/><small>Environment</small>"]:::neutral
    n19["Views shown<br/><small>Port</small>"]:::neutral
  end
  subgraph body["Poselia · The body"]
    n20["The angle at a joint<br/><small>Requirement</small>"]:::held
    n21["Criteria of the angle at a joint<br/><small>Acceptance criteria</small>"]:::held
    n22["The body between two poses<br/><small>Requirement</small>"]:::held
    n23["Criteria of the body between two poses<br/><small>Acceptance criteria</small>"]:::held
    n24["Measures of the body<br/><small>Decision</small>"]:::neutral
    n25["How a foot's way is read<br/><small>Decision</small>"]:::neutral
    n26["A foot from its angles<br/><small>Function</small>"]:::held
    n27["A foot on its way<br/><small>Requirement</small>"]:::held
    n28["Criteria of a foot on its way<br/><small>Acceptance criteria</small>"]:::held
    n29["A hand on its way<br/><small>Requirement</small>"]:::held
    n30["Criteria of a hand on its way<br/><small>Acceptance criteria</small>"]:::held
    n31["A pose ready to move<br/><small>Requirement</small>"]:::held
    n32["Criteria of a pose ready to move<br/><small>Acceptance criteria</small>"]:::held
    n33["A knee kept above the mat<br/><small>Decision</small>"]:::neutral
    n34["Legs apart<br/><small>Requirement</small>"]:::held
    n35["Criteria of legs apart<br/><small>Acceptance criteria</small>"]:::held
    n36["How far a limb keeps from flat<br/><small>Decision</small>"]:::neutral
    n37["Every limb reaches<br/><small>Requirement</small>"]:::held
    n38["Criteria of every limb that reaches<br/><small>Acceptance criteria</small>"]:::held
    n39["The space of the mat<br/><small>Function</small>"]:::held
    n40["How a body moves<br/><small>Decision</small>"]:::neutral
    n41["A leg on its foot<br/><small>Requirement</small>"]:::held
    n42["Criteria of a leg on its foot<br/><small>Acceptance criteria</small>"]:::held
    n43["The points of a rest<br/><small>Decision</small>"]:::neutral
    n44["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n45["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n46["The names of the sides<br/><small>Decision</small>"]:::neutral
    n47["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n48["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n49["Where a spot is<br/><small>Requirement</small>"]:::held
    n50["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n51["Where a spot of the body is<br/><small>Decision</small>"]:::neutral
    n52["A leg that steps<br/><small>Requirement</small>"]:::held
    n53["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n54["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n55["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n56["Touching the floor<br/><small>Decision</small>"]:::neutral
    n57["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n58["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n59["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n60["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n61["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n62["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n63["A sequence composed<br/><small>Function</small>"]:::held
    n64["Names of the composer<br/><small>Decision</small>"]:::neutral
    n65["The composer<br/><small>Function</small>"]:::held
    n66["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n67["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n68["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n69["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n70["Languages offered<br/><small>Decision</small>"]:::neutral
    n71["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n72["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n73["The ways between levels<br/><small>Decision</small>"]:::neutral
    n74["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n75["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n76["Poses<br/><small>Dataset</small>"]:::unknown
    n77["Sequences<br/><small>Dataset</small>"]:::unknown
    n78["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n79["How long words take to say<br/><small>Requirement</small>"]:::held
    n80["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n81["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n82["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n83["The drawing of a pose<br/><small>Function</small>"]:::held
    n84["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n85["The app's language<br/><small>Function</small>"]:::held
    n86["English<br/><small>Decision</small>"]:::neutral
    n87["French<br/><small>Decision</small>"]:::neutral
    n88["Words of the interface<br/><small>Function</small>"]:::held
    n89["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n90["Words in English<br/><small>Message catalog</small>"]:::neutral
    n91["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n92["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n93["A landmark on the body<br/><small>Requirement</small>"]:::held
    n94["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n95["The landmarks of a pose<br/><small>Function</small>"]:::held
    n96["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n97["Continuous integration<br/><small>Package</small>"]:::neutral
    n98["Data<br/><small>Package</small>"]:::neutral
    n99["Geometry<br/><small>Package</small>"]:::neutral
    n100["Trame<br/><small>Package</small>"]:::neutral
    n101["The people of the repository<br/><small>Package</small>"]:::neutral
    n102["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n103["How a movement eases<br/><small>Decision</small>"]:::neutral
    n104["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n105["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n106["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n107["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n108["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n109["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n110["How full the lungs are<br/><small>Requirement</small>"]:::held
    n111["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n112["Where a practice is<br/><small>Requirement</small>"]:::held
    n113["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n114["The moment of a practice<br/><small>Function</small>"]:::held
    n115["Names of the player<br/><small>Decision</small>"]:::neutral
    n116["Play a practice<br/><small>Function</small>"]:::held
    n117["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n118["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n119["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n120["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n121["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n122["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n123["The breath of a moment<br/><small>Requirement</small>"]:::held
    n124["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n125["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n126["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n127["The language of the app<br/><small>Requirement</small>"]:::held
    n128["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n129["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n130["In the person's language<br/><small>Goal</small>"]:::neutral
    n131["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n132["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n133["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n134["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n135["The device's languages, given<br/><small>Function</small>"]:::held
    n136["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n137["Holding the poses<br/><small>Scenario</small>"]:::held
    n138["The language of the home page<br/><small>Scenario</small>"]:::held
    n139["The app in memory<br/><small>Technical choice</small>"]:::held
    n140["Learning a sequence<br/><small>Scenario</small>"]:::held
    n141["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n142["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n143["A bowl that counts<br/><small>Function</small>"]:::held
    n144["A screen that records<br/><small>Function</small>"]:::held
    n145["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n146["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n147["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n148["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n149["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n150["After the preview<br/><small>Obligation</small>"]:::neutral
    n151["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n152["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n153["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n154["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n155["The content, reviewed<br/><small>Review</small>"]:::unknown
    n156["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n157["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n158["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n159["What the device keeps, migrated<br/><small>Obligation</small>"]:::neutral
    n160["A machine<br/><small>Environment</small>"]:::neutral
    n161["How a change merges<br/><small>Policy</small>"]:::neutral
    n162["On a phone<br/><small>Check</small>"]:::unknown
    n163["On the machine<br/><small>Technical choice</small>"]:::unknown
    n164["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n165["Open the page<br/><small>Entry point</small>"]:::held
    n166["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n167["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n168["How the page is opened<br/><small>Decision</small>"]:::neutral
    n169["The page opens<br/><small>Check</small>"]:::unknown
    n170["What the page is asked<br/><small>Function</small>"]:::held
    n171["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n172["Place the page<br/><small>Entry point</small>"]:::held
    n173["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n174["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n175["A preview<br/><small>Shipment</small>"]:::unknown
    n176["The way of a preview<br/><small>Policy</small>"]:::neutral
    n177["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n178["The preview's script<br/><small>Artefact</small>"]:::unknown
    n179["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n180["The product holds<br/><small>Obligation</small>"]:::neutral
    n181["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n182["The way of a public version<br/><small>Policy</small>"]:::neutral
    n183["A public version<br/><small>Shipment</small>"]:::unknown
    n184["What people decided, published<br/><small>Obligation</small>"]:::neutral
    n185["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n186["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n187["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n188["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n189["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n190["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n191["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n192["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n193["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n194["Where the page is served<br/><small>Decision</small>"]:::neutral
    n195["A teacher who practises<br/><small>Role</small>"]:::neutral
    n196["Poselia<br/><small>Artefact</small>"]:::unknown
  end
  subgraph settings["Poselia · Settings"]
    n197["A phase set by the person<br/><small>Requirement</small>"]:::held
    n198["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n199["The person's breath, kept<br/><small>Entity</small>"]:::held
    n200["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n201["A breath within its bounds<br/><small>Requirement</small>"]:::held
    n202["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n203["Kept in the preferences of the device<br/><small>Technical choice</small>"]:::held
    n204["The landmarks the person chose<br/><small>Function</small>"]:::held
    n205["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n206["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n207["The person's breath<br/><small>Function</small>"]:::held
    n208["Names of the settings<br/><small>Decision</small>"]:::neutral
    n209["The settings view<br/><small>Function</small>"]:::held
    n210["Show the settings<br/><small>Function</small>"]:::held
    n211["Tapping<br/><small>Decision</small>"]:::neutral
    n212["The voice the person chose<br/><small>Function</small>"]:::held
    n213["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n214["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n215["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n216["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n217["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n218["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n219["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n220["Light of the stage<br/><small>Decision</small>"]:::neutral
    n221["Views of the stage<br/><small>Decision</small>"]:::neutral
    n222["three.js<br/><small>Package</small>"]:::held
    n223["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n82
  n0 -->|Depends on| n115
  n0 -->|Depends on| n208
  n0 -->|Depends on| n64
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n76
  n1 -->|Depends on| n77
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n132
  n4 -->|Serves| n130
  n4 -->|Depends on| n88
  n4 -->|Depends on| n85
  n4 -->|Depends on| n70
  n4 -->|Depends on| n91
  n4 -->|Depends on| n90
  n4 -->|Depends on| n69
  n4 -->|Depends on| n83
  n4 -->|Depends on| n84
  n5 -->|Chooses| n0
  n5 -->|Chooses| n217
  n5 -->|Chooses| n215
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n83
  n7 -->|Styles| n114
  n7 -->|Styles| n209
  n7 -->|Styles| n65
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n87
  n8 -->|Styled by| n7
  n8 -->|Serves| n132
  n10 -->|Serves| n132
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n85
  n10 -->|Depends on| n116
  n10 -->|Depends on| n210
  n10 -->|Depends on| n207
  n10 -->|Depends on| n68
  n10 -->|Depends on| n67
  n15 -->|Deployed in| n13
  n20 -->|Refines| n132
  n20 -->|Depends on| n39
  n21 -->|Accepts| n20
  n22 -->|Refines| n132
  n22 -->|Depends on| n24
  n22 -->|Depends on| n40
  n22 -->|Depends on| n39
  n22 -->|Depends on| n57
  n22 -->|Depends on| n26
  n22 -->|Depends on| n52
  n22 -->|Depends on| n27
  n22 -->|Depends on| n41
  n22 -->|Depends on| n29
  n22 -->|Depends on| n59
  n23 -->|Accepts| n22
  n26 -->|Serves| n132
  n26 -->|Depends on| n24
  n26 -->|Depends on| n40
  n26 -->|Depends on| n39
  n27 -->|Refines| n132
  n27 -->|Depends on| n40
  n27 -->|Depends on| n39
  n27 -->|Depends on| n25
  n28 -->|Accepts| n27
  n29 -->|Refines| n132
  n29 -->|Depends on| n40
  n29 -->|Depends on| n39
  n30 -->|Accepts| n29
  n31 -->|Refines| n132
  n31 -->|Depends on| n57
  n31 -->|Depends on| n39
  n31 -->|Depends on| n46
  n32 -->|Accepts| n31
  n34 -->|Refines| n132
  n35 -->|Accepts| n34
  n37 -->|Refines| n132
  n37 -->|Refines| n126
  n37 -->|Depends on| n31
  n37 -->|Depends on| n22
  n38 -->|Accepts| n37
  n39 -->|Serves| n132
  n41 -->|Refines| n132
  n41 -->|Depends on| n24
  n41 -->|Depends on| n40
  n41 -->|Depends on| n39
  n41 -->|Depends on| n26
  n41 -->|Depends on| n59
  n41 -->|Depends on| n33
  n42 -->|Accepts| n41
  n44 -->|Refines| n132
  n44 -->|Refines| n126
  n44 -->|Depends on| n31
  n44 -->|Depends on| n22
  n44 -->|Depends on| n54
  n44 -->|Depends on| n43
  n44 -->|Depends on| n46
  n44 -->|Depends on| n56
  n45 -->|Accepts| n44
  n47 -->|Refines| n132
  n47 -->|Depends on| n46
  n48 -->|Accepts| n47
  n49 -->|Refines| n132
  n49 -->|Depends on| n39
  n49 -->|Depends on| n51
  n49 -->|Depends on| n46
  n50 -->|Accepts| n49
  n52 -->|Refines| n132
  n52 -->|Depends on| n24
  n52 -->|Depends on| n39
  n52 -->|Depends on| n59
  n53 -->|Accepts| n52
  n54 -->|Refines| n132
  n54 -->|Depends on| n24
  n54 -->|Depends on| n39
  n54 -->|Depends on| n46
  n55 -->|Accepts| n54
  n57 -->|Refines| n132
  n57 -->|Depends on| n24
  n57 -->|Depends on| n39
  n58 -->|Accepts| n57
  n59 -->|Refines| n132
  n59 -->|Depends on| n39
  n59 -->|Depends on| n36
  n60 -->|Accepts| n59
  n61 -->|Refines| n132
  n61 -->|Depends on| n31
  n61 -->|Depends on| n22
  n61 -->|Depends on| n39
  n62 -->|Accepts| n61
  n63 -->|Serves| n132
  n63 -->|Depends on| n61
  n63 -->|Depends on| n71
  n63 -->|Depends on| n34
  n63 -->|Depends on| n91
  n63 -->|Depends on| n90
  n65 -->|Serves| n132
  n65 -->|Depends on| n88
  n65 -->|Depends on| n85
  n65 -->|Depends on| n83
  n65 -->|Depends on| n84
  n65 -->|Depends on| n74
  n65 -->|Depends on| n71
  n66 -->|Serves| n132
  n66 -->|Depends on| n73
  n66 -->|Depends on| n74
  n68 -->|Serves| n132
  n68 -->|Depends on| n16
  n68 -->|Depends on| n65
  n68 -->|Depends on| n66
  n68 -->|Depends on| n63
  n68 -->|Depends on| n67
  n68 -->|Depends on| n116
  n71 -->|Refines| n132
  n72 -->|Accepts| n71
  n74 -->|Refines| n132
  n74 -->|Depends on| n73
  n75 -->|Accepts| n74
  n76 -->|Languages offered| n70
  n76 -->|Serves| n132
  n77 -->|Languages offered| n70
  n77 -->|Serves| n132
  n79 -->|Refines| n132
  n79 -->|Depends on| n78
  n80 -->|Accepts| n79
  n83 -->|Serves| n132
  n83 -->|Depends on| n24
  n83 -->|Depends on| n81
  n83 -->|Depends on| n82
  n84 -->|Serves| n132
  n84 -->|Depends on| n31
  n84 -->|Depends on| n22
  n85 -->|Serves| n130
  n85 -->|Depends on| n70
  n85 -->|Depends on| n127
  n85 -->|Depends on| n89
  n88 -->|Serves| n130
  n88 -->|Depends on| n91
  n88 -->|Depends on| n90
  n88 -->|Depends on| n85
  n90 -->|Written in| n86
  n90 -->|Translates| n91
  n91 -->|Written in| n87
  n93 -->|Refines| n132
  n93 -->|Depends on| n39
  n93 -->|Depends on| n49
  n93 -->|Depends on| n20
  n93 -->|Depends on| n92
  n93 -->|Depends on| n51
  n94 -->|Accepts| n93
  n95 -->|Serves| n132
  n95 -->|Depends on| n93
  n95 -->|Depends on| n88
  n95 -->|Depends on| n85
  n97 -->|Serves| n132
  n98 -->|Serves| n132
  n99 -->|Serves| n132
  n100 -->|Serves| n132
  n101 -->|Serves| n132
  n102 -->|Serves| n132
  n104 -->|Refines| n125
  n104 -->|Depends on| n79
  n105 -->|Accepts| n104
  n106 -->|Refines| n125
  n106 -->|Depends on| n103
  n107 -->|Accepts| n106
  n108 -->|Refines| n125
  n109 -->|Accepts| n108
  n110 -->|Refines| n125
  n111 -->|Accepts| n110
  n112 -->|Refines| n125
  n113 -->|Accepts| n112
  n114 -->|Serves| n132
  n114 -->|Serves| n125
  n114 -->|Depends on| n112
  n114 -->|Depends on| n106
  n114 -->|Depends on| n110
  n114 -->|Depends on| n22
  n114 -->|Depends on| n95
  n114 -->|Depends on| n47
  n114 -->|Depends on| n96
  n114 -->|Depends on| n88
  n114 -->|Depends on| n85
  n114 -->|Depends on| n69
  n116 -->|Serves| n132
  n116 -->|Depends on| n16
  n116 -->|Depends on| n11
  n116 -->|Depends on| n212
  n116 -->|Depends on| n204
  n116 -->|Depends on| n117
  n116 -->|Depends on| n114
  n116 -->|Depends on| n88
  n116 -->|Depends on| n85
  n116 -->|Depends on| n221
  n117 -->|Serves| n132
  n117 -->|Serves| n125
  n117 -->|Depends on| n123
  n117 -->|Depends on| n31
  n117 -->|Depends on| n108
  n117 -->|Depends on| n104
  n118 -->|Serves| n125
  n118 -->|Applied by| n123
  n118 -->|Applied by| n108
  n119 -->|Serves| n126
  n119 -->|Applied by| n76
  n119 -->|Applied by| n14
  n120 -->|Serves| n130
  n120 -->|Applied by| n70
  n120 -->|Applied by| n127
  n121 -->|Serves| n132
  n121 -->|Applied by| n15
  n121 -->|Applied by| n8
  n121 -->|Applied by| n169
  n122 -->|Serves| n132
  n122 -->|Applied by| n131
  n122 -->|Applied by| n116
  n123 -->|Refines| n125
  n123 -->|Depends on| n129
  n124 -->|Accepts| n123
  n127 -->|Refines| n130
  n128 -->|Accepts| n127
  n133 -->|Verifies| n117
  n133 -->|Verifies| n114
  n133 -->|Verifies| n116
  n133 -->|Verifies| n22
  n133 -->|Verifies| n54
  n133 -->|Verifies| n52
  n133 -->|Verifies| n41
  n133 -->|Verifies| n29
  n133 -->|Verifies| n27
  n133 -->|Verifies| n39
  n133 -->|Verifies| n31
  n133 -->|Verifies| n57
  n133 -->|Verifies| n59
  n133 -->|Verifies| n26
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n147
  n133 -->|Depends on| n54
  n133 -->|Depends on| n56
  n133 -->|Depends on| n40
  n133 -->|Depends on| n90
  n133 -->|Depends on| n145
  n134 -->|Verifies| n66
  n134 -->|Verifies| n63
  n134 -->|Verifies| n74
  n134 -->|Verifies| n71
  n134 -->|Verifies| n61
  n134 -->|Verifies| n117
  n134 -->|Verifies| n114
  n134 -->|In| n18
  n134 -->|Depends on| n66
  n134 -->|Depends on| n63
  n134 -->|Depends on| n117
  n134 -->|Depends on| n114
  n134 -->|Depends on| n76
  n134 -->|Depends on| n74
  n134 -->|Depends on| n54
  n134 -->|Depends on| n56
  n134 -->|Depends on| n40
  n134 -->|Depends on| n136
  n134 -->|Depends on| n145
  n135 -->|Depends on| n146
  n137 -->|Verifies| n68
  n137 -->|Verifies| n65
  n137 -->|Verifies| n66
  n137 -->|Verifies| n63
  n137 -->|Verifies| n116
  n137 -->|Verifies| n117
  n137 -->|Verifies| n114
  n137 -->|Verifies| n108
  n137 -->|Verifies| n104
  n137 -->|Verifies| n212
  n137 -->|Verifies| n143
  n137 -->|In| n18
  n137 -->|Depends on| n10
  n137 -->|Depends on| n19
  n137 -->|Depends on| n12
  n137 -->|Depends on| n67
  n137 -->|Depends on| n136
  n137 -->|Depends on| n40
  n137 -->|Depends on| n90
  n137 -->|Depends on| n145
  n138 -->|Verifies| n10
  n138 -->|Verifies| n4
  n138 -->|Verifies| n85
  n138 -->|Verifies| n88
  n138 -->|Verifies| n83
  n138 -->|Verifies| n84
  n138 -->|Verifies| n1
  n138 -->|Verifies| n135
  n138 -->|Verifies| n144
  n138 -->|In| n18
  n138 -->|Depends on| n10
  n138 -->|Depends on| n19
  n138 -->|Depends on| n89
  n138 -->|Depends on| n86
  n138 -->|Depends on| n87
  n138 -->|Depends on| n90
  n138 -->|Depends on| n91
  n138 -->|Depends on| n145
  n138 -->|Depends on| n76
  n138 -->|Depends on| n77
  n139 -->|Chooses| n144
  n139 -->|Chooses| n143
  n139 -->|Chooses| n135
  n139 -->|In| n18
  n140 -->|Verifies| n10
  n140 -->|Verifies| n116
  n140 -->|Verifies| n117
  n140 -->|Verifies| n114
  n140 -->|Verifies| n95
  n140 -->|Verifies| n93
  n140 -->|Verifies| n204
  n140 -->|In| n18
  n140 -->|Depends on| n10
  n140 -->|Depends on| n19
  n140 -->|Depends on| n67
  n140 -->|Depends on| n136
  n140 -->|Depends on| n90
  n140 -->|Depends on| n145
  n140 -->|Depends on| n76
  n140 -->|Depends on| n89
  n141 -->|Verifies| n210
  n141 -->|Verifies| n209
  n141 -->|Verifies| n207
  n141 -->|Verifies| n212
  n141 -->|Verifies| n205
  n141 -->|Verifies| n197
  n141 -->|Verifies| n10
  n141 -->|In| n18
  n141 -->|Depends on| n10
  n141 -->|Depends on| n19
  n141 -->|Depends on| n207
  n141 -->|Depends on| n148
  n141 -->|Depends on| n90
  n141 -->|Depends on| n145
  n142 -->|Verifies| n116
  n142 -->|Verifies| n117
  n142 -->|Verifies| n114
  n142 -->|Verifies| n10
  n142 -->|In| n18
  n142 -->|Depends on| n10
  n142 -->|Depends on| n19
  n142 -->|Depends on| n147
  n142 -->|Depends on| n90
  n142 -->|Depends on| n86
  n142 -->|Depends on| n145
  n143 -->|Implements| n11
  n143 -->|Implements| n12
  n144 -->|Implements| n16
  n144 -->|Implements| n19
  n145 -->|Written in| n86
  n150 -->|Serves| n132
  n151 -->|Serves| n132
  n153 -->|Serves| n132
  n154 -->|Serves| n132
  n155 -->|Reviews| n76
  n155 -->|Reviews| n77
  n155 -->|By the role| n195
  n156 -->|Serves| n126
  n157 -->|Serves| n132
  n158 -->|Ships| n196
  n158 -->|Follows the policy| n161
  n159 -->|Serves| n132
  n161 -->|Its obligations| n184
  n162 -->|Checks| n167
  n162 -->|Signed by| n171
  n162 -->|Verifies| n215
  n163 -->|In| n160
  n164 -->|Verifies| n165
  n164 -->|Verifies| n170
  n164 -->|In| n18
  n164 -->|Depends on| n165
  n164 -->|Depends on| n167
  n164 -->|Depends on| n170
  n164 -->|Depends on| n193
  n164 -->|Depends on| n70
  n164 -->|Depends on| n192
  n164 -->|Depends on| n189
  n165 -->|Serves| n132
  n165 -->|Part of| n174
  n165 -->|Depends on| n167
  n165 -->|Depends on| n70
  n165 -->|Depends on| n170
  n165 -->|Depends on| n168
  n165 -->|Depends on| n193
  n166 -->|Serves| n132
  n167 -->|Produced by| n8
  n169 -->|Checks| n167
  n169 -->|Run by| n165
  n169 -->|Verifies| n0
  n169 -->|Verifies| n217
  n170 -->|Serves| n132
  n170 -->|Depends on| n9
  n170 -->|Depends on| n64
  n170 -->|Depends on| n115
  n172 -->|Serves| n132
  n172 -->|Part of| n174
  n172 -->|Depends on| n167
  n172 -->|Depends on| n194
  n172 -->|Depends on| n193
  n173 -->|Verifies| n172
  n173 -->|In| n18
  n173 -->|Depends on| n172
  n173 -->|Depends on| n167
  n173 -->|Depends on| n194
  n173 -->|Depends on| n192
  n173 -->|Depends on| n189
  n174 -->|Deployed in| n160
  n175 -->|Ships| n167
  n175 -->|Deployed by| n172
  n175 -->|Programs assembled for| n160
  n175 -->|Follows the policy| n176
  n176 -->|Its obligations| n154
  n176 -->|Its obligations| n181
  n176 -->|Its obligations| n187
  n176 -->|Its obligations| n166
  n176 -->|Its obligations| n159
  n178 -->|Runs elsewhere| n175
  n179 -->|Runs elsewhere| n175
  n179 -->|Its writer's settings| n177
  n179 -->|Makes available, once shipped| n167
  n180 -->|Serves| n132
  n181 -->|Serves| n132
  n182 -->|Its obligations| n150
  n182 -->|Its obligations| n153
  n182 -->|Its obligations| n180
  n182 -->|Its obligations| n157
  n182 -->|Its obligations| n156
  n182 -->|Its obligations| n151
  n182 -->|Its obligations| n187
  n182 -->|Its obligations| n166
  n182 -->|Its obligations| n159
  n183 -->|Ships| n167
  n183 -->|Deployed by| n172
  n183 -->|Programs assembled for| n160
  n183 -->|Follows the policy| n182
  n184 -->|Serves| n132
  n186 -->|Runs elsewhere| n158
  n186 -->|Its writer's settings| n185
  n187 -->|Serves| n132
  n188 -->|Ships| n179
  n188 -->|Ships| n178
  n188 -->|Ships| n186
  n189 -->|Written in| n86
  n190 -->|In| n18
  n191 -->|Serves| n126
  n191 -->|Serves| n132
  n191 -->|Applied by| n175
  n191 -->|Applied by| n183
  n191 -->|Applied by| n169
  n191 -->|Applied by| n162
  n191 -->|Applied by| n155
  n191 -->|Applied by| n165
  n191 -->|Applied by| n172
  n191 -->|Applied by| n152
  n191 -->|Applied by| n149
  n191 -->|Applied by| n179
  n191 -->|Applied by| n178
  n191 -->|Applied by| n188
  n193 -->|Written in| n86
  n197 -->|Refines| n125
  n197 -->|Depends on| n200
  n198 -->|Accepts| n197
  n199 -->|Serves| n125
  n201 -->|Refines| n125
  n201 -->|Depends on| n200
  n202 -->|Accepts| n201
  n203 -->|In| n13
  n203 -->|In| n18
  n204 -->|Serves| n132
  n204 -->|Depends on| n89
  n205 -->|Refines| n125
  n205 -->|Depends on| n200
  n205 -->|Depends on| n211
  n206 -->|Accepts| n205
  n207 -->|Serves| n125
  n207 -->|Depends on| n199
  n207 -->|Depends on| n201
  n209 -->|Serves| n125
  n209 -->|Serves| n132
  n209 -->|Depends on| n88
  n209 -->|Depends on| n85
  n210 -->|Serves| n125
  n210 -->|Serves| n132
  n210 -->|Depends on| n16
  n210 -->|Depends on| n207
  n210 -->|Depends on| n212
  n210 -->|Depends on| n209
  n210 -->|Depends on| n197
  n210 -->|Depends on| n205
  n210 -->|Depends on| n129
  n212 -->|Serves| n132
  n212 -->|Depends on| n213
  n215 -->|Implements| n11
  n215 -->|Depends on| n214
  n217 -->|Implements| n17
  n217 -->|Uses| n222
  n217 -->|Uses| n223
  n217 -->|Depends on| n218
  n217 -->|Depends on| n220
  n217 -->|Depends on| n221
  n217 -->|Depends on| n219
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n31
  n23 -.->|Depends on| n40
  n30 -.->|Depends on| n40
  n42 -.->|Depends on| n24
  n50 -.->|Depends on| n31
  n50 -.->|Depends on| n22
  n55 -.->|Depends on| n31
  n55 -.->|Depends on| n22
  n58 -.->|Depends on| n24
  n75 -.->|Depends on| n73
  n75 -.->|Depends on| n34
  n75 -.->|Depends on| n31
  n75 -.->|Depends on| n71
  n75 -.->|Depends on| n40
  n75 -.->|Depends on| n54
  n75 -.->|Depends on| n22
  n75 -.->|Depends on| n56
  n76 -.->|Depends on| n44
  n76 -.->|Depends on| n37
  n76 -.->|Depends on| n79
  n76 -.->|Depends on| n129
  n77 -.->|Depends on| n69
  n77 -.->|Depends on| n123
  n77 -.->|Depends on| n79
  n77 -.->|Depends on| n34
  n77 -.->|Depends on| n74
  n94 -.->|Depends on| n31
  n94 -.->|Depends on| n22
  n94 -.->|Depends on| n20
  n150 -.->|Depends on| n175
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n216 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
