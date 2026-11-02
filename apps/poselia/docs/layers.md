# Layers

*The graph in force on 2 November 2026, ordered by distance to the goals.*

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
    n25["A foot on its way<br/><small>Requirement</small>"]:::held
    n26["Criteria of a foot on its way<br/><small>Acceptance criteria</small>"]:::held
    n27["A hand on its way<br/><small>Requirement</small>"]:::held
    n28["Criteria of a hand on its way<br/><small>Acceptance criteria</small>"]:::held
    n29["A pose ready to move<br/><small>Requirement</small>"]:::held
    n30["Criteria of a pose ready to move<br/><small>Acceptance criteria</small>"]:::held
    n31["Legs apart<br/><small>Requirement</small>"]:::held
    n32["Criteria of legs apart<br/><small>Acceptance criteria</small>"]:::held
    n33["How far a limb keeps from flat<br/><small>Decision</small>"]:::neutral
    n34["Every limb reaches<br/><small>Requirement</small>"]:::held
    n35["Criteria of every limb that reaches<br/><small>Acceptance criteria</small>"]:::held
    n36["The space of the mat<br/><small>Function</small>"]:::held
    n37["How a body moves<br/><small>Decision</small>"]:::neutral
    n38["A leg on its foot<br/><small>Requirement</small>"]:::held
    n39["Criteria of a leg on its foot<br/><small>Acceptance criteria</small>"]:::held
    n40["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n41["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n42["The names of the sides<br/><small>Decision</small>"]:::neutral
    n43["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n44["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n45["Where a spot is<br/><small>Requirement</small>"]:::held
    n46["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n47["A leg that steps<br/><small>Requirement</small>"]:::held
    n48["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n49["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n50["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n51["Touching the floor<br/><small>Decision</small>"]:::neutral
    n52["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n53["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n54["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n55["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n56["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n57["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n58["A sequence composed<br/><small>Function</small>"]:::held
    n59["Names of the composer<br/><small>Decision</small>"]:::neutral
    n60["The composer<br/><small>Function</small>"]:::held
    n61["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n62["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n63["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n64["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n65["Languages offered<br/><small>Decision</small>"]:::neutral
    n66["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n67["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n68["The ways between levels<br/><small>Decision</small>"]:::neutral
    n69["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n70["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n71["Poses<br/><small>Dataset</small>"]:::unknown
    n72["Sequences<br/><small>Dataset</small>"]:::unknown
    n73["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n74["How long words take to say<br/><small>Requirement</small>"]:::held
    n75["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n76["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n77["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n78["The drawing of a pose<br/><small>Function</small>"]:::held
    n79["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n80["The app's language<br/><small>Function</small>"]:::held
    n81["English<br/><small>Decision</small>"]:::neutral
    n82["French<br/><small>Decision</small>"]:::neutral
    n83["Words of the interface<br/><small>Function</small>"]:::held
    n84["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n85["Words in English<br/><small>Message catalog</small>"]:::neutral
    n86["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n87["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n88["A landmark on the body<br/><small>Requirement</small>"]:::held
    n89["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n90["The landmarks of a pose<br/><small>Function</small>"]:::held
    n91["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n92["Continuous integration<br/><small>Package</small>"]:::neutral
    n93["Geometry<br/><small>Package</small>"]:::neutral
    n94["Trame<br/><small>Package</small>"]:::neutral
    n95["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n96["How a movement eases<br/><small>Decision</small>"]:::neutral
    n97["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n98["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n99["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n100["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n101["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n102["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n103["How full the lungs are<br/><small>Requirement</small>"]:::held
    n104["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n105["Where a practice is<br/><small>Requirement</small>"]:::held
    n106["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n107["The moment of a practice<br/><small>Function</small>"]:::held
    n108["Names of the player<br/><small>Decision</small>"]:::neutral
    n109["Play a practice<br/><small>Function</small>"]:::held
    n110["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n111["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n112["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n113["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n114["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n115["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n116["The breath of a moment<br/><small>Requirement</small>"]:::held
    n117["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n118["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n119["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n120["The language of the app<br/><small>Requirement</small>"]:::held
    n121["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n122["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n123["In the person's language<br/><small>Goal</small>"]:::neutral
    n124["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n125["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n126["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n127["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n128["The device's languages, given<br/><small>Function</small>"]:::held
    n129["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n130["Holding the poses<br/><small>Scenario</small>"]:::held
    n131["The language of the home page<br/><small>Scenario</small>"]:::held
    n132["The app in memory<br/><small>Technical choice</small>"]:::held
    n133["Learning a sequence<br/><small>Scenario</small>"]:::held
    n134["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n135["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n136["A bowl that counts<br/><small>Function</small>"]:::held
    n137["A screen that records<br/><small>Function</small>"]:::held
    n138["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n139["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n140["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n141["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n142["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n143["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n144["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n145["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n146["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n147["The content, reviewed<br/><small>Review</small>"]:::unknown
    n148["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n149["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n150["A machine<br/><small>Environment</small>"]:::neutral
    n151["On a phone<br/><small>Check</small>"]:::unknown
    n152["On the machine<br/><small>Technical choice</small>"]:::unknown
    n153["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n154["Open the page<br/><small>Entry point</small>"]:::held
    n155["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n156["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n157["How the page is opened<br/><small>Decision</small>"]:::neutral
    n158["The page opens<br/><small>Check</small>"]:::unknown
    n159["What the page is asked<br/><small>Function</small>"]:::held
    n160["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n161["Place the page<br/><small>Entry point</small>"]:::held
    n162["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n163["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n164["A preview<br/><small>Shipment</small>"]:::unknown
    n165["The way of a preview<br/><small>Policy</small>"]:::neutral
    n166["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n167["The preview's script<br/><small>Artefact</small>"]:::unknown
    n168["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n169["The product holds<br/><small>Obligation</small>"]:::neutral
    n170["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n171["The way of a public version<br/><small>Policy</small>"]:::neutral
    n172["A public version<br/><small>Shipment</small>"]:::unknown
    n173["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n174["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n175["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n176["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n177["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n178["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n179["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n180["Where the page is served<br/><small>Decision</small>"]:::neutral
    n181["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n182["A phase set by the person<br/><small>Requirement</small>"]:::held
    n183["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n184["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n185["A breath read back<br/><small>Requirement</small>"]:::held
    n186["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n187["The landmarks the person chose<br/><small>Function</small>"]:::held
    n188["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n189["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n190["The person's breath<br/><small>Function</small>"]:::held
    n191["Names of the settings<br/><small>Decision</small>"]:::neutral
    n192["The settings view<br/><small>Function</small>"]:::held
    n193["Show the settings<br/><small>Function</small>"]:::held
    n194["Tapping<br/><small>Decision</small>"]:::neutral
    n195["The voice the person chose<br/><small>Function</small>"]:::held
    n196["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n197["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n198["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n199["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n200["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n201["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n202["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n203["Light of the stage<br/><small>Decision</small>"]:::neutral
    n204["Views of the stage<br/><small>Decision</small>"]:::neutral
    n205["three.js<br/><small>Package</small>"]:::held
    n206["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n77
  n0 -->|Depends on| n108
  n0 -->|Depends on| n191
  n0 -->|Depends on| n59
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n71
  n1 -->|Depends on| n72
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n125
  n4 -->|Serves| n123
  n4 -->|Depends on| n83
  n4 -->|Depends on| n80
  n4 -->|Depends on| n65
  n4 -->|Depends on| n86
  n4 -->|Depends on| n85
  n4 -->|Depends on| n64
  n4 -->|Depends on| n78
  n4 -->|Depends on| n79
  n5 -->|Chooses| n0
  n5 -->|Chooses| n200
  n5 -->|Chooses| n198
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n78
  n7 -->|Styles| n107
  n7 -->|Styles| n192
  n7 -->|Styles| n60
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n82
  n8 -->|Styled by| n7
  n8 -->|Serves| n125
  n10 -->|Serves| n125
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n80
  n10 -->|Depends on| n109
  n10 -->|Depends on| n193
  n10 -->|Depends on| n190
  n10 -->|Depends on| n63
  n10 -->|Depends on| n62
  n15 -->|Deployed in| n13
  n20 -->|Refines| n125
  n21 -->|Accepts| n20
  n22 -->|Refines| n125
  n23 -->|Accepts| n22
  n25 -->|Refines| n125
  n26 -->|Accepts| n25
  n27 -->|Refines| n125
  n28 -->|Accepts| n27
  n29 -->|Refines| n125
  n29 -->|Depends on| n52
  n29 -->|Depends on| n36
  n29 -->|Depends on| n42
  n30 -->|Accepts| n29
  n31 -->|Refines| n125
  n32 -->|Accepts| n31
  n34 -->|Refines| n125
  n34 -->|Refines| n119
  n35 -->|Accepts| n34
  n36 -->|Serves| n125
  n38 -->|Refines| n125
  n39 -->|Accepts| n38
  n40 -->|Refines| n125
  n40 -->|Refines| n119
  n41 -->|Accepts| n40
  n43 -->|Refines| n125
  n44 -->|Accepts| n43
  n45 -->|Refines| n125
  n46 -->|Accepts| n45
  n47 -->|Refines| n125
  n48 -->|Accepts| n47
  n49 -->|Refines| n125
  n50 -->|Accepts| n49
  n52 -->|Refines| n125
  n52 -->|Depends on| n24
  n52 -->|Depends on| n36
  n53 -->|Accepts| n52
  n54 -->|Refines| n125
  n54 -->|Depends on| n36
  n54 -->|Depends on| n33
  n55 -->|Accepts| n54
  n56 -->|Refines| n125
  n57 -->|Accepts| n56
  n58 -->|Serves| n125
  n58 -->|Depends on| n56
  n58 -->|Depends on| n66
  n58 -->|Depends on| n31
  n58 -->|Depends on| n86
  n58 -->|Depends on| n85
  n60 -->|Serves| n125
  n60 -->|Depends on| n83
  n60 -->|Depends on| n80
  n60 -->|Depends on| n78
  n60 -->|Depends on| n79
  n60 -->|Depends on| n69
  n60 -->|Depends on| n66
  n61 -->|Serves| n125
  n61 -->|Depends on| n68
  n61 -->|Depends on| n69
  n63 -->|Serves| n125
  n63 -->|Depends on| n16
  n63 -->|Depends on| n60
  n63 -->|Depends on| n61
  n63 -->|Depends on| n58
  n63 -->|Depends on| n62
  n63 -->|Depends on| n109
  n66 -->|Refines| n125
  n67 -->|Accepts| n66
  n69 -->|Refines| n125
  n69 -->|Depends on| n68
  n70 -->|Accepts| n69
  n71 -->|Languages offered| n65
  n71 -->|Serves| n125
  n72 -->|Languages offered| n65
  n72 -->|Serves| n125
  n74 -->|Refines| n125
  n74 -->|Depends on| n73
  n75 -->|Accepts| n74
  n78 -->|Serves| n125
  n78 -->|Depends on| n24
  n78 -->|Depends on| n76
  n78 -->|Depends on| n77
  n79 -->|Serves| n125
  n79 -->|Depends on| n29
  n79 -->|Depends on| n22
  n80 -->|Serves| n123
  n80 -->|Depends on| n65
  n80 -->|Depends on| n120
  n80 -->|Depends on| n84
  n83 -->|Serves| n123
  n83 -->|Depends on| n86
  n83 -->|Depends on| n85
  n83 -->|Depends on| n80
  n85 -->|Written in| n81
  n85 -->|Translates| n86
  n86 -->|Written in| n82
  n88 -->|Refines| n125
  n89 -->|Accepts| n88
  n90 -->|Serves| n125
  n90 -->|Depends on| n88
  n90 -->|Depends on| n83
  n90 -->|Depends on| n80
  n92 -->|Serves| n125
  n93 -->|Serves| n125
  n94 -->|Serves| n125
  n95 -->|Serves| n125
  n97 -->|Refines| n118
  n97 -->|Depends on| n74
  n98 -->|Accepts| n97
  n99 -->|Refines| n118
  n99 -->|Depends on| n96
  n100 -->|Accepts| n99
  n101 -->|Refines| n118
  n102 -->|Accepts| n101
  n103 -->|Refines| n118
  n104 -->|Accepts| n103
  n105 -->|Refines| n118
  n106 -->|Accepts| n105
  n107 -->|Serves| n125
  n107 -->|Serves| n118
  n107 -->|Depends on| n105
  n107 -->|Depends on| n99
  n107 -->|Depends on| n103
  n107 -->|Depends on| n22
  n107 -->|Depends on| n90
  n107 -->|Depends on| n43
  n107 -->|Depends on| n91
  n107 -->|Depends on| n83
  n107 -->|Depends on| n80
  n107 -->|Depends on| n64
  n109 -->|Serves| n125
  n109 -->|Depends on| n16
  n109 -->|Depends on| n11
  n109 -->|Depends on| n195
  n109 -->|Depends on| n187
  n109 -->|Depends on| n110
  n109 -->|Depends on| n107
  n109 -->|Depends on| n83
  n109 -->|Depends on| n80
  n109 -->|Depends on| n204
  n110 -->|Serves| n125
  n110 -->|Serves| n118
  n110 -->|Depends on| n116
  n110 -->|Depends on| n29
  n110 -->|Depends on| n101
  n110 -->|Depends on| n97
  n111 -->|Serves| n118
  n111 -->|Applied by| n116
  n111 -->|Applied by| n101
  n112 -->|Serves| n119
  n112 -->|Applied by| n71
  n112 -->|Applied by| n14
  n113 -->|Serves| n123
  n113 -->|Applied by| n65
  n113 -->|Applied by| n120
  n114 -->|Serves| n125
  n114 -->|Applied by| n15
  n114 -->|Applied by| n8
  n114 -->|Applied by| n158
  n115 -->|Serves| n125
  n115 -->|Applied by| n124
  n115 -->|Applied by| n109
  n116 -->|Refines| n118
  n116 -->|Depends on| n122
  n117 -->|Accepts| n116
  n120 -->|Refines| n123
  n121 -->|Accepts| n120
  n126 -->|Verifies| n110
  n126 -->|Verifies| n107
  n126 -->|Verifies| n109
  n126 -->|Verifies| n22
  n126 -->|Verifies| n49
  n126 -->|Verifies| n47
  n126 -->|Verifies| n38
  n126 -->|Verifies| n27
  n126 -->|Verifies| n25
  n126 -->|Verifies| n36
  n126 -->|Verifies| n29
  n126 -->|Verifies| n52
  n126 -->|Verifies| n54
  n126 -->|In| n18
  n126 -->|Depends on| n10
  n126 -->|Depends on| n19
  n126 -->|Depends on| n140
  n126 -->|Depends on| n49
  n126 -->|Depends on| n51
  n126 -->|Depends on| n37
  n126 -->|Depends on| n85
  n126 -->|Depends on| n138
  n127 -->|Verifies| n61
  n127 -->|Verifies| n58
  n127 -->|Verifies| n69
  n127 -->|Verifies| n66
  n127 -->|Verifies| n56
  n127 -->|Verifies| n110
  n127 -->|Verifies| n107
  n127 -->|In| n18
  n127 -->|Depends on| n61
  n127 -->|Depends on| n58
  n127 -->|Depends on| n110
  n127 -->|Depends on| n107
  n127 -->|Depends on| n71
  n127 -->|Depends on| n69
  n127 -->|Depends on| n49
  n127 -->|Depends on| n51
  n127 -->|Depends on| n37
  n127 -->|Depends on| n129
  n127 -->|Depends on| n138
  n128 -->|Depends on| n139
  n130 -->|Verifies| n63
  n130 -->|Verifies| n60
  n130 -->|Verifies| n61
  n130 -->|Verifies| n58
  n130 -->|Verifies| n109
  n130 -->|Verifies| n110
  n130 -->|Verifies| n107
  n130 -->|Verifies| n101
  n130 -->|Verifies| n97
  n130 -->|Verifies| n195
  n130 -->|Verifies| n136
  n130 -->|In| n18
  n130 -->|Depends on| n10
  n130 -->|Depends on| n19
  n130 -->|Depends on| n12
  n130 -->|Depends on| n62
  n130 -->|Depends on| n129
  n130 -->|Depends on| n37
  n130 -->|Depends on| n85
  n130 -->|Depends on| n138
  n131 -->|Verifies| n10
  n131 -->|Verifies| n4
  n131 -->|Verifies| n80
  n131 -->|Verifies| n83
  n131 -->|Verifies| n78
  n131 -->|Verifies| n79
  n131 -->|Verifies| n1
  n131 -->|Verifies| n128
  n131 -->|Verifies| n137
  n131 -->|In| n18
  n131 -->|Depends on| n10
  n131 -->|Depends on| n19
  n131 -->|Depends on| n84
  n131 -->|Depends on| n81
  n131 -->|Depends on| n82
  n131 -->|Depends on| n85
  n131 -->|Depends on| n86
  n131 -->|Depends on| n138
  n131 -->|Depends on| n71
  n131 -->|Depends on| n72
  n132 -->|Chooses| n137
  n132 -->|Chooses| n136
  n132 -->|Chooses| n128
  n132 -->|In| n18
  n133 -->|Verifies| n10
  n133 -->|Verifies| n109
  n133 -->|Verifies| n110
  n133 -->|Verifies| n107
  n133 -->|Verifies| n90
  n133 -->|Verifies| n88
  n133 -->|Verifies| n187
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n62
  n133 -->|Depends on| n129
  n133 -->|Depends on| n85
  n133 -->|Depends on| n138
  n133 -->|Depends on| n71
  n133 -->|Depends on| n84
  n134 -->|Verifies| n193
  n134 -->|Verifies| n192
  n134 -->|Verifies| n190
  n134 -->|Verifies| n195
  n134 -->|Verifies| n188
  n134 -->|Verifies| n182
  n134 -->|Verifies| n10
  n134 -->|In| n18
  n134 -->|Depends on| n10
  n134 -->|Depends on| n19
  n134 -->|Depends on| n190
  n134 -->|Depends on| n141
  n134 -->|Depends on| n85
  n134 -->|Depends on| n138
  n135 -->|Verifies| n109
  n135 -->|Verifies| n110
  n135 -->|Verifies| n107
  n135 -->|Verifies| n10
  n135 -->|In| n18
  n135 -->|Depends on| n10
  n135 -->|Depends on| n19
  n135 -->|Depends on| n140
  n135 -->|Depends on| n85
  n135 -->|Depends on| n81
  n135 -->|Depends on| n138
  n136 -->|Implements| n11
  n136 -->|Implements| n12
  n137 -->|Implements| n16
  n137 -->|Implements| n19
  n138 -->|Written in| n81
  n143 -->|Serves| n125
  n145 -->|Serves| n125
  n146 -->|Serves| n125
  n147 -->|Reviews| n71
  n147 -->|Reviews| n72
  n147 -->|By the role| n181
  n148 -->|Serves| n119
  n149 -->|Serves| n125
  n151 -->|Checks| n156
  n151 -->|Signed by| n160
  n151 -->|Verifies| n198
  n152 -->|In| n150
  n153 -->|Verifies| n154
  n153 -->|Verifies| n159
  n153 -->|In| n18
  n153 -->|Depends on| n154
  n153 -->|Depends on| n156
  n153 -->|Depends on| n159
  n153 -->|Depends on| n179
  n153 -->|Depends on| n65
  n153 -->|Depends on| n178
  n153 -->|Depends on| n175
  n154 -->|Serves| n125
  n154 -->|Part of| n163
  n154 -->|Depends on| n156
  n154 -->|Depends on| n65
  n154 -->|Depends on| n159
  n154 -->|Depends on| n157
  n154 -->|Depends on| n179
  n155 -->|Serves| n125
  n156 -->|Produced by| n8
  n158 -->|Checks| n156
  n158 -->|Run by| n154
  n158 -->|Verifies| n0
  n158 -->|Verifies| n200
  n159 -->|Serves| n125
  n159 -->|Depends on| n9
  n159 -->|Depends on| n59
  n159 -->|Depends on| n108
  n161 -->|Serves| n125
  n161 -->|Part of| n163
  n161 -->|Depends on| n156
  n161 -->|Depends on| n180
  n161 -->|Depends on| n179
  n162 -->|Verifies| n161
  n162 -->|In| n18
  n162 -->|Depends on| n161
  n162 -->|Depends on| n156
  n162 -->|Depends on| n180
  n162 -->|Depends on| n178
  n162 -->|Depends on| n175
  n163 -->|Deployed in| n150
  n164 -->|Ships| n156
  n164 -->|Deployed by| n161
  n164 -->|Programs assembled for| n150
  n164 -->|Follows the policy| n165
  n165 -->|Its obligations| n146
  n165 -->|Its obligations| n170
  n165 -->|Its obligations| n173
  n165 -->|Its obligations| n155
  n167 -->|Runs elsewhere| n164
  n168 -->|Runs elsewhere| n164
  n168 -->|Its writer's settings| n166
  n168 -->|Makes available, once shipped| n156
  n169 -->|Serves| n125
  n170 -->|Serves| n125
  n171 -->|Its obligations| n145
  n171 -->|Its obligations| n169
  n171 -->|Its obligations| n149
  n171 -->|Its obligations| n148
  n171 -->|Its obligations| n143
  n171 -->|Its obligations| n173
  n171 -->|Its obligations| n155
  n172 -->|Ships| n156
  n172 -->|Deployed by| n161
  n172 -->|Programs assembled for| n150
  n172 -->|Follows the policy| n171
  n173 -->|Serves| n125
  n174 -->|Ships| n168
  n174 -->|Ships| n167
  n175 -->|Written in| n81
  n176 -->|In| n18
  n177 -->|Serves| n119
  n177 -->|Serves| n125
  n177 -->|Applied by| n164
  n177 -->|Applied by| n172
  n177 -->|Applied by| n158
  n177 -->|Applied by| n151
  n177 -->|Applied by| n147
  n177 -->|Applied by| n154
  n177 -->|Applied by| n161
  n177 -->|Applied by| n144
  n177 -->|Applied by| n142
  n177 -->|Applied by| n168
  n177 -->|Applied by| n167
  n177 -->|Applied by| n174
  n179 -->|Written in| n81
  n182 -->|Refines| n118
  n182 -->|Depends on| n184
  n183 -->|Accepts| n182
  n185 -->|Refines| n118
  n185 -->|Depends on| n184
  n186 -->|Accepts| n185
  n187 -->|Serves| n125
  n187 -->|Depends on| n84
  n188 -->|Refines| n118
  n188 -->|Depends on| n184
  n188 -->|Depends on| n194
  n189 -->|Accepts| n188
  n190 -->|Serves| n118
  n190 -->|Depends on| n84
  n190 -->|Depends on| n185
  n192 -->|Serves| n118
  n192 -->|Serves| n125
  n192 -->|Depends on| n83
  n192 -->|Depends on| n80
  n193 -->|Serves| n118
  n193 -->|Serves| n125
  n193 -->|Depends on| n16
  n193 -->|Depends on| n190
  n193 -->|Depends on| n195
  n193 -->|Depends on| n192
  n193 -->|Depends on| n182
  n193 -->|Depends on| n188
  n193 -->|Depends on| n122
  n195 -->|Serves| n125
  n195 -->|Depends on| n196
  n198 -->|Implements| n11
  n198 -->|Depends on| n197
  n200 -->|Implements| n17
  n200 -->|Uses| n205
  n200 -->|Uses| n206
  n200 -->|Depends on| n201
  n200 -->|Depends on| n203
  n200 -->|Depends on| n204
  n200 -->|Depends on| n202
  n22 -.->|Depends on| n24
  n22 -.->|Depends on| n37
  n22 -.->|Depends on| n52
  n22 -.->|Depends on| n47
  n22 -.->|Depends on| n25
  n22 -.->|Depends on| n38
  n22 -.->|Depends on| n27
  n22 -.->|Depends on| n54
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n29
  n23 -.->|Depends on| n37
  n25 -.->|Depends on| n37
  n27 -.->|Depends on| n37
  n28 -.->|Depends on| n37
  n34 -.->|Depends on| n29
  n34 -.->|Depends on| n22
  n38 -.->|Depends on| n24
  n38 -.->|Depends on| n37
  n38 -.->|Depends on| n54
  n39 -.->|Depends on| n24
  n40 -.->|Depends on| n29
  n40 -.->|Depends on| n49
  n40 -.->|Depends on| n22
  n40 -.->|Depends on| n51
  n46 -.->|Depends on| n29
  n46 -.->|Depends on| n22
  n47 -.->|Depends on| n24
  n47 -.->|Depends on| n54
  n49 -.->|Depends on| n24
  n50 -.->|Depends on| n29
  n50 -.->|Depends on| n22
  n53 -.->|Depends on| n24
  n56 -.->|Depends on| n29
  n56 -.->|Depends on| n22
  n70 -.->|Depends on| n68
  n70 -.->|Depends on| n31
  n70 -.->|Depends on| n29
  n70 -.->|Depends on| n66
  n70 -.->|Depends on| n37
  n70 -.->|Depends on| n49
  n70 -.->|Depends on| n22
  n70 -.->|Depends on| n51
  n71 -.->|Depends on| n40
  n71 -.->|Depends on| n34
  n71 -.->|Depends on| n74
  n71 -.->|Depends on| n122
  n72 -.->|Depends on| n64
  n72 -.->|Depends on| n116
  n72 -.->|Depends on| n74
  n72 -.->|Depends on| n31
  n72 -.->|Depends on| n69
  n88 -.->|Depends on| n87
  n88 -.->|Depends on| n45
  n88 -.->|Depends on| n20
  n89 -.->|Depends on| n29
  n89 -.->|Depends on| n22
  n89 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n199 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
