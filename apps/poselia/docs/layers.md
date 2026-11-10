# Layers

*The graph in force on 10 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph app["Poselia · The app in a browser"]
    n0["The browser's screen<br/><small>Implementation</small>"]:::held
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
    n101["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n102["How a movement eases<br/><small>Decision</small>"]:::neutral
    n103["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n104["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n105["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n106["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n107["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n108["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n109["How full the lungs are<br/><small>Requirement</small>"]:::held
    n110["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n111["Where a practice is<br/><small>Requirement</small>"]:::held
    n112["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n113["The moment of a practice<br/><small>Function</small>"]:::held
    n114["Names of the player<br/><small>Decision</small>"]:::neutral
    n115["Play a practice<br/><small>Function</small>"]:::held
    n116["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n117["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n118["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n119["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n120["A page first, the phones after<br/><small>Architecture decision</small>"]:::held
    n121["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n122["The breath of a moment<br/><small>Requirement</small>"]:::held
    n123["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n124["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n125["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n126["The language of the app<br/><small>Requirement</small>"]:::held
    n127["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n128["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n129["In the person's language<br/><small>Goal</small>"]:::neutral
    n130["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n131["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n132["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n133["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n134["The device's languages, given<br/><small>Function</small>"]:::held
    n135["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n136["Holding the poses<br/><small>Scenario</small>"]:::held
    n137["The language of the home page<br/><small>Scenario</small>"]:::held
    n138["The app in memory<br/><small>Technical choice</small>"]:::held
    n139["Learning a sequence<br/><small>Scenario</small>"]:::held
    n140["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n141["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n142["A bowl that counts<br/><small>Function</small>"]:::held
    n143["A screen that records<br/><small>Function</small>"]:::held
    n144["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n145["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n146["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n147["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n148["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n149["After the preview<br/><small>Obligation</small>"]:::neutral
    n150["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n151["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n152["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n153["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n154["The content, reviewed<br/><small>Review</small>"]:::unknown
    n155["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n156["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n157["What the device keeps, migrated<br/><small>Obligation</small>"]:::neutral
    n158["A machine<br/><small>Environment</small>"]:::neutral
    n159["On a phone<br/><small>Check</small>"]:::unknown
    n160["On the machine<br/><small>Technical choice</small>"]:::held
    n161["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n162["Open the page<br/><small>Entry point</small>"]:::held
    n163["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n164["Poselia's page<br/><small>Artefact</small>"]:::held
    n165["How the page is opened<br/><small>Decision</small>"]:::neutral
    n166["The page opens<br/><small>Check</small>"]:::held
    n167["What the page is asked<br/><small>Function</small>"]:::held
    n168["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n169["Place the page<br/><small>Entry point</small>"]:::held
    n170["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n171["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n172["A preview<br/><small>Shipment</small>"]:::held
    n173["The way of a preview<br/><small>Policy</small>"]:::neutral
    n174["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n175["The preview's script<br/><small>Artefact</small>"]:::held
    n176["The preview's workflow<br/><small>Artefact</small>"]:::held
    n177["The product holds<br/><small>Obligation</small>"]:::neutral
    n178["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n179["The way of a public version<br/><small>Policy</small>"]:::neutral
    n180["A public version<br/><small>Shipment</small>"]:::unknown
    n181["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n182["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n183["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n184["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n185["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n186["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n187["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n188["Where the page is served<br/><small>Decision</small>"]:::neutral
    n189["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n190["A phase set by the person<br/><small>Requirement</small>"]:::held
    n191["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n192["The person's breath, kept<br/><small>Entity</small>"]:::held
    n193["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n194["A breath within its bounds<br/><small>Requirement</small>"]:::held
    n195["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n196["Kept in the preferences of the device<br/><small>Technical choice</small>"]:::held
    n197["The landmarks the person chose<br/><small>Function</small>"]:::held
    n198["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n199["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n200["The person's breath<br/><small>Function</small>"]:::held
    n201["Names of the settings<br/><small>Decision</small>"]:::neutral
    n202["The settings view<br/><small>Function</small>"]:::held
    n203["Show the settings<br/><small>Function</small>"]:::held
    n204["Tapping<br/><small>Decision</small>"]:::neutral
    n205["The voice the person chose<br/><small>Function</small>"]:::held
    n206["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n207["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n208["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n209["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n210["The browser's stage<br/><small>Implementation</small>"]:::held
    n211["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n212["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n213["Light of the stage<br/><small>Decision</small>"]:::neutral
    n214["Views of the stage<br/><small>Decision</small>"]:::neutral
    n215["three.js<br/><small>Package</small>"]:::held
    n216["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n82
  n0 -->|Depends on| n114
  n0 -->|Depends on| n201
  n0 -->|Depends on| n64
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n76
  n1 -->|Depends on| n77
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n131
  n4 -->|Serves| n129
  n4 -->|Depends on| n88
  n4 -->|Depends on| n85
  n4 -->|Depends on| n70
  n4 -->|Depends on| n91
  n4 -->|Depends on| n90
  n4 -->|Depends on| n69
  n4 -->|Depends on| n83
  n4 -->|Depends on| n84
  n5 -->|Chooses| n0
  n5 -->|Chooses| n210
  n5 -->|Chooses| n208
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n83
  n7 -->|Styles| n113
  n7 -->|Styles| n202
  n7 -->|Styles| n65
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n87
  n8 -->|Styled by| n7
  n8 -->|Serves| n131
  n10 -->|Serves| n131
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n85
  n10 -->|Depends on| n115
  n10 -->|Depends on| n203
  n10 -->|Depends on| n200
  n10 -->|Depends on| n68
  n10 -->|Depends on| n67
  n15 -->|Deployed in| n13
  n20 -->|Refines| n131
  n20 -->|Depends on| n39
  n21 -->|Accepts| n20
  n22 -->|Refines| n131
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
  n26 -->|Serves| n131
  n26 -->|Depends on| n24
  n26 -->|Depends on| n40
  n26 -->|Depends on| n39
  n27 -->|Refines| n131
  n27 -->|Depends on| n40
  n27 -->|Depends on| n39
  n27 -->|Depends on| n25
  n28 -->|Accepts| n27
  n29 -->|Refines| n131
  n29 -->|Depends on| n40
  n29 -->|Depends on| n39
  n30 -->|Accepts| n29
  n31 -->|Refines| n131
  n31 -->|Depends on| n57
  n31 -->|Depends on| n39
  n31 -->|Depends on| n46
  n32 -->|Accepts| n31
  n34 -->|Refines| n131
  n35 -->|Accepts| n34
  n37 -->|Refines| n131
  n37 -->|Refines| n125
  n37 -->|Depends on| n31
  n37 -->|Depends on| n22
  n38 -->|Accepts| n37
  n39 -->|Serves| n131
  n41 -->|Refines| n131
  n41 -->|Depends on| n24
  n41 -->|Depends on| n40
  n41 -->|Depends on| n39
  n41 -->|Depends on| n26
  n41 -->|Depends on| n59
  n41 -->|Depends on| n33
  n42 -->|Accepts| n41
  n44 -->|Refines| n131
  n44 -->|Refines| n125
  n44 -->|Depends on| n31
  n44 -->|Depends on| n22
  n44 -->|Depends on| n54
  n44 -->|Depends on| n43
  n44 -->|Depends on| n46
  n44 -->|Depends on| n56
  n45 -->|Accepts| n44
  n47 -->|Refines| n131
  n47 -->|Depends on| n46
  n48 -->|Accepts| n47
  n49 -->|Refines| n131
  n49 -->|Depends on| n39
  n49 -->|Depends on| n51
  n49 -->|Depends on| n46
  n50 -->|Accepts| n49
  n52 -->|Refines| n131
  n52 -->|Depends on| n24
  n52 -->|Depends on| n39
  n52 -->|Depends on| n59
  n53 -->|Accepts| n52
  n54 -->|Refines| n131
  n54 -->|Depends on| n24
  n54 -->|Depends on| n39
  n54 -->|Depends on| n46
  n55 -->|Accepts| n54
  n57 -->|Refines| n131
  n57 -->|Depends on| n24
  n57 -->|Depends on| n39
  n58 -->|Accepts| n57
  n59 -->|Refines| n131
  n59 -->|Depends on| n39
  n59 -->|Depends on| n36
  n60 -->|Accepts| n59
  n61 -->|Refines| n131
  n61 -->|Depends on| n31
  n61 -->|Depends on| n22
  n61 -->|Depends on| n39
  n62 -->|Accepts| n61
  n63 -->|Serves| n131
  n63 -->|Depends on| n61
  n63 -->|Depends on| n71
  n63 -->|Depends on| n34
  n63 -->|Depends on| n91
  n63 -->|Depends on| n90
  n65 -->|Serves| n131
  n65 -->|Depends on| n88
  n65 -->|Depends on| n85
  n65 -->|Depends on| n83
  n65 -->|Depends on| n84
  n65 -->|Depends on| n74
  n65 -->|Depends on| n71
  n66 -->|Serves| n131
  n66 -->|Depends on| n73
  n66 -->|Depends on| n74
  n68 -->|Serves| n131
  n68 -->|Depends on| n16
  n68 -->|Depends on| n65
  n68 -->|Depends on| n66
  n68 -->|Depends on| n63
  n68 -->|Depends on| n67
  n68 -->|Depends on| n115
  n71 -->|Refines| n131
  n72 -->|Accepts| n71
  n74 -->|Refines| n131
  n74 -->|Depends on| n73
  n75 -->|Accepts| n74
  n76 -->|Languages offered| n70
  n76 -->|Serves| n131
  n77 -->|Languages offered| n70
  n77 -->|Serves| n131
  n79 -->|Refines| n131
  n79 -->|Depends on| n78
  n80 -->|Accepts| n79
  n83 -->|Serves| n131
  n83 -->|Depends on| n24
  n83 -->|Depends on| n81
  n83 -->|Depends on| n82
  n84 -->|Serves| n131
  n84 -->|Depends on| n31
  n84 -->|Depends on| n22
  n85 -->|Serves| n129
  n85 -->|Depends on| n70
  n85 -->|Depends on| n126
  n85 -->|Depends on| n89
  n88 -->|Serves| n129
  n88 -->|Depends on| n91
  n88 -->|Depends on| n90
  n88 -->|Depends on| n85
  n90 -->|Written in| n86
  n90 -->|Translates| n91
  n91 -->|Written in| n87
  n93 -->|Refines| n131
  n93 -->|Depends on| n39
  n93 -->|Depends on| n49
  n93 -->|Depends on| n20
  n93 -->|Depends on| n92
  n93 -->|Depends on| n51
  n94 -->|Accepts| n93
  n95 -->|Serves| n131
  n95 -->|Depends on| n93
  n95 -->|Depends on| n88
  n95 -->|Depends on| n85
  n97 -->|Serves| n131
  n98 -->|Serves| n131
  n99 -->|Serves| n131
  n100 -->|Serves| n131
  n101 -->|Serves| n131
  n103 -->|Refines| n124
  n103 -->|Depends on| n79
  n104 -->|Accepts| n103
  n105 -->|Refines| n124
  n105 -->|Depends on| n102
  n106 -->|Accepts| n105
  n107 -->|Refines| n124
  n108 -->|Accepts| n107
  n109 -->|Refines| n124
  n110 -->|Accepts| n109
  n111 -->|Refines| n124
  n112 -->|Accepts| n111
  n113 -->|Serves| n131
  n113 -->|Serves| n124
  n113 -->|Depends on| n111
  n113 -->|Depends on| n105
  n113 -->|Depends on| n109
  n113 -->|Depends on| n22
  n113 -->|Depends on| n95
  n113 -->|Depends on| n47
  n113 -->|Depends on| n96
  n113 -->|Depends on| n88
  n113 -->|Depends on| n85
  n113 -->|Depends on| n69
  n115 -->|Serves| n131
  n115 -->|Depends on| n16
  n115 -->|Depends on| n11
  n115 -->|Depends on| n205
  n115 -->|Depends on| n197
  n115 -->|Depends on| n116
  n115 -->|Depends on| n113
  n115 -->|Depends on| n88
  n115 -->|Depends on| n85
  n115 -->|Depends on| n214
  n116 -->|Serves| n131
  n116 -->|Serves| n124
  n116 -->|Depends on| n122
  n116 -->|Depends on| n31
  n116 -->|Depends on| n107
  n116 -->|Depends on| n103
  n117 -->|Serves| n124
  n117 -->|Applied by| n122
  n117 -->|Applied by| n107
  n118 -->|Serves| n125
  n118 -->|Applied by| n76
  n118 -->|Applied by| n14
  n119 -->|Serves| n129
  n119 -->|Applied by| n70
  n119 -->|Applied by| n126
  n120 -->|Serves| n131
  n120 -->|Applied by| n15
  n120 -->|Applied by| n8
  n120 -->|Applied by| n166
  n121 -->|Serves| n131
  n121 -->|Applied by| n130
  n121 -->|Applied by| n115
  n122 -->|Refines| n124
  n122 -->|Depends on| n128
  n123 -->|Accepts| n122
  n126 -->|Refines| n129
  n127 -->|Accepts| n126
  n132 -->|Verifies| n116
  n132 -->|Verifies| n113
  n132 -->|Verifies| n115
  n132 -->|Verifies| n22
  n132 -->|Verifies| n54
  n132 -->|Verifies| n52
  n132 -->|Verifies| n41
  n132 -->|Verifies| n29
  n132 -->|Verifies| n27
  n132 -->|Verifies| n39
  n132 -->|Verifies| n31
  n132 -->|Verifies| n57
  n132 -->|Verifies| n59
  n132 -->|Verifies| n26
  n132 -->|In| n18
  n132 -->|Depends on| n10
  n132 -->|Depends on| n19
  n132 -->|Depends on| n146
  n132 -->|Depends on| n54
  n132 -->|Depends on| n56
  n132 -->|Depends on| n40
  n132 -->|Depends on| n90
  n132 -->|Depends on| n144
  n133 -->|Verifies| n66
  n133 -->|Verifies| n63
  n133 -->|Verifies| n74
  n133 -->|Verifies| n71
  n133 -->|Verifies| n61
  n133 -->|Verifies| n116
  n133 -->|Verifies| n113
  n133 -->|In| n18
  n133 -->|Depends on| n66
  n133 -->|Depends on| n63
  n133 -->|Depends on| n116
  n133 -->|Depends on| n113
  n133 -->|Depends on| n76
  n133 -->|Depends on| n74
  n133 -->|Depends on| n54
  n133 -->|Depends on| n56
  n133 -->|Depends on| n40
  n133 -->|Depends on| n135
  n133 -->|Depends on| n144
  n134 -->|Depends on| n145
  n136 -->|Verifies| n68
  n136 -->|Verifies| n65
  n136 -->|Verifies| n66
  n136 -->|Verifies| n63
  n136 -->|Verifies| n115
  n136 -->|Verifies| n116
  n136 -->|Verifies| n113
  n136 -->|Verifies| n107
  n136 -->|Verifies| n103
  n136 -->|Verifies| n205
  n136 -->|Verifies| n142
  n136 -->|In| n18
  n136 -->|Depends on| n10
  n136 -->|Depends on| n19
  n136 -->|Depends on| n12
  n136 -->|Depends on| n67
  n136 -->|Depends on| n135
  n136 -->|Depends on| n40
  n136 -->|Depends on| n90
  n136 -->|Depends on| n144
  n137 -->|Verifies| n10
  n137 -->|Verifies| n4
  n137 -->|Verifies| n85
  n137 -->|Verifies| n88
  n137 -->|Verifies| n83
  n137 -->|Verifies| n84
  n137 -->|Verifies| n1
  n137 -->|Verifies| n134
  n137 -->|Verifies| n143
  n137 -->|In| n18
  n137 -->|Depends on| n10
  n137 -->|Depends on| n19
  n137 -->|Depends on| n89
  n137 -->|Depends on| n86
  n137 -->|Depends on| n87
  n137 -->|Depends on| n90
  n137 -->|Depends on| n91
  n137 -->|Depends on| n144
  n137 -->|Depends on| n76
  n137 -->|Depends on| n77
  n138 -->|Chooses| n143
  n138 -->|Chooses| n142
  n138 -->|Chooses| n134
  n138 -->|In| n18
  n139 -->|Verifies| n10
  n139 -->|Verifies| n115
  n139 -->|Verifies| n116
  n139 -->|Verifies| n113
  n139 -->|Verifies| n95
  n139 -->|Verifies| n93
  n139 -->|Verifies| n197
  n139 -->|In| n18
  n139 -->|Depends on| n10
  n139 -->|Depends on| n19
  n139 -->|Depends on| n67
  n139 -->|Depends on| n135
  n139 -->|Depends on| n90
  n139 -->|Depends on| n144
  n139 -->|Depends on| n76
  n139 -->|Depends on| n89
  n140 -->|Verifies| n203
  n140 -->|Verifies| n202
  n140 -->|Verifies| n200
  n140 -->|Verifies| n205
  n140 -->|Verifies| n198
  n140 -->|Verifies| n190
  n140 -->|Verifies| n10
  n140 -->|In| n18
  n140 -->|Depends on| n10
  n140 -->|Depends on| n19
  n140 -->|Depends on| n200
  n140 -->|Depends on| n147
  n140 -->|Depends on| n90
  n140 -->|Depends on| n144
  n141 -->|Verifies| n115
  n141 -->|Verifies| n116
  n141 -->|Verifies| n113
  n141 -->|Verifies| n10
  n141 -->|In| n18
  n141 -->|Depends on| n10
  n141 -->|Depends on| n19
  n141 -->|Depends on| n146
  n141 -->|Depends on| n90
  n141 -->|Depends on| n86
  n141 -->|Depends on| n144
  n142 -->|Implements| n11
  n142 -->|Implements| n12
  n143 -->|Implements| n16
  n143 -->|Implements| n19
  n144 -->|Written in| n86
  n149 -->|Serves| n131
  n150 -->|Serves| n131
  n152 -->|Serves| n131
  n153 -->|Serves| n131
  n154 -->|Reviews| n76
  n154 -->|Reviews| n77
  n154 -->|By the role| n189
  n155 -->|Serves| n125
  n156 -->|Serves| n131
  n157 -->|Serves| n131
  n159 -->|Checks| n164
  n159 -->|Signed by| n168
  n159 -->|Verifies| n208
  n160 -->|In| n158
  n161 -->|Verifies| n162
  n161 -->|Verifies| n167
  n161 -->|In| n18
  n161 -->|Depends on| n162
  n161 -->|Depends on| n164
  n161 -->|Depends on| n167
  n161 -->|Depends on| n187
  n161 -->|Depends on| n70
  n161 -->|Depends on| n186
  n161 -->|Depends on| n183
  n162 -->|Serves| n131
  n162 -->|Part of| n171
  n162 -->|Depends on| n164
  n162 -->|Depends on| n70
  n162 -->|Depends on| n167
  n162 -->|Depends on| n165
  n162 -->|Depends on| n187
  n163 -->|Serves| n131
  n164 -->|Produced by| n8
  n166 -->|Checks| n164
  n166 -->|Run by| n162
  n166 -->|Verifies| n0
  n166 -->|Verifies| n210
  n167 -->|Serves| n131
  n167 -->|Depends on| n9
  n167 -->|Depends on| n64
  n167 -->|Depends on| n114
  n169 -->|Serves| n131
  n169 -->|Part of| n171
  n169 -->|Depends on| n164
  n169 -->|Depends on| n188
  n169 -->|Depends on| n187
  n170 -->|Verifies| n169
  n170 -->|In| n18
  n170 -->|Depends on| n169
  n170 -->|Depends on| n164
  n170 -->|Depends on| n188
  n170 -->|Depends on| n186
  n170 -->|Depends on| n183
  n171 -->|Deployed in| n158
  n172 -->|Ships| n164
  n172 -->|Deployed by| n169
  n172 -->|Programs assembled for| n158
  n172 -->|Follows the policy| n173
  n173 -->|Its obligations| n153
  n173 -->|Its obligations| n178
  n173 -->|Its obligations| n181
  n173 -->|Its obligations| n163
  n173 -->|Its obligations| n157
  n175 -->|Runs elsewhere| n172
  n176 -->|Runs elsewhere| n172
  n176 -->|Its writer's settings| n174
  n176 -->|Makes available, once shipped| n164
  n177 -->|Serves| n131
  n178 -->|Serves| n131
  n179 -->|Its obligations| n149
  n179 -->|Its obligations| n152
  n179 -->|Its obligations| n177
  n179 -->|Its obligations| n156
  n179 -->|Its obligations| n155
  n179 -->|Its obligations| n150
  n179 -->|Its obligations| n181
  n179 -->|Its obligations| n163
  n179 -->|Its obligations| n157
  n180 -->|Ships| n164
  n180 -->|Deployed by| n169
  n180 -->|Programs assembled for| n158
  n180 -->|Follows the policy| n179
  n181 -->|Serves| n131
  n182 -->|Ships| n176
  n182 -->|Ships| n175
  n183 -->|Written in| n86
  n184 -->|In| n18
  n185 -->|Serves| n125
  n185 -->|Serves| n131
  n185 -->|Applied by| n172
  n185 -->|Applied by| n180
  n185 -->|Applied by| n166
  n185 -->|Applied by| n159
  n185 -->|Applied by| n154
  n185 -->|Applied by| n162
  n185 -->|Applied by| n169
  n185 -->|Applied by| n151
  n185 -->|Applied by| n148
  n185 -->|Applied by| n176
  n185 -->|Applied by| n175
  n185 -->|Applied by| n182
  n187 -->|Written in| n86
  n190 -->|Refines| n124
  n190 -->|Depends on| n193
  n191 -->|Accepts| n190
  n192 -->|Serves| n124
  n194 -->|Refines| n124
  n194 -->|Depends on| n193
  n195 -->|Accepts| n194
  n196 -->|In| n13
  n196 -->|In| n18
  n197 -->|Serves| n131
  n197 -->|Depends on| n89
  n198 -->|Refines| n124
  n198 -->|Depends on| n193
  n198 -->|Depends on| n204
  n199 -->|Accepts| n198
  n200 -->|Serves| n124
  n200 -->|Depends on| n192
  n200 -->|Depends on| n194
  n202 -->|Serves| n124
  n202 -->|Serves| n131
  n202 -->|Depends on| n88
  n202 -->|Depends on| n85
  n203 -->|Serves| n124
  n203 -->|Serves| n131
  n203 -->|Depends on| n16
  n203 -->|Depends on| n200
  n203 -->|Depends on| n205
  n203 -->|Depends on| n202
  n203 -->|Depends on| n190
  n203 -->|Depends on| n198
  n203 -->|Depends on| n128
  n205 -->|Serves| n131
  n205 -->|Depends on| n206
  n208 -->|Implements| n11
  n208 -->|Depends on| n207
  n210 -->|Implements| n17
  n210 -->|Uses| n215
  n210 -->|Uses| n216
  n210 -->|Depends on| n211
  n210 -->|Depends on| n213
  n210 -->|Depends on| n214
  n210 -->|Depends on| n212
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
  n76 -.->|Depends on| n128
  n77 -.->|Depends on| n69
  n77 -.->|Depends on| n122
  n77 -.->|Depends on| n79
  n77 -.->|Depends on| n34
  n77 -.->|Depends on| n74
  n94 -.->|Depends on| n31
  n94 -.->|Depends on| n22
  n94 -.->|Depends on| n20
  n149 -.->|Depends on| n172
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n209 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
