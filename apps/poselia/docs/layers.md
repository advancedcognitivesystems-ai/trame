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
    n33["Every limb reaches<br/><small>Requirement</small>"]:::held
    n34["Criteria of every limb that reaches<br/><small>Acceptance criteria</small>"]:::held
    n35["How a body moves<br/><small>Decision</small>"]:::neutral
    n36["A leg on its foot<br/><small>Requirement</small>"]:::held
    n37["Criteria of a leg on its foot<br/><small>Acceptance criteria</small>"]:::held
    n38["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n39["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n40["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n41["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n42["Where a spot is<br/><small>Requirement</small>"]:::held
    n43["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n44["A leg that steps<br/><small>Requirement</small>"]:::held
    n45["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n46["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n47["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n48["Touching the floor<br/><small>Decision</small>"]:::neutral
    n49["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n50["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n51["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n52["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n53["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n54["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n55["A sequence composed<br/><small>Function</small>"]:::held
    n56["Names of the composer<br/><small>Decision</small>"]:::neutral
    n57["The composer<br/><small>Function</small>"]:::held
    n58["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n59["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n60["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n61["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n62["Languages offered<br/><small>Decision</small>"]:::neutral
    n63["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n64["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n65["The ways between levels<br/><small>Decision</small>"]:::neutral
    n66["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n67["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n68["Poses<br/><small>Dataset</small>"]:::unknown
    n69["Sequences<br/><small>Dataset</small>"]:::unknown
    n70["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n71["How long words take to say<br/><small>Requirement</small>"]:::held
    n72["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n73["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n74["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n75["The drawing of a pose<br/><small>Function</small>"]:::held
    n76["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n77["The app's language<br/><small>Function</small>"]:::held
    n78["English<br/><small>Decision</small>"]:::neutral
    n79["French<br/><small>Decision</small>"]:::neutral
    n80["Words of the interface<br/><small>Function</small>"]:::held
    n81["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n82["Words in English<br/><small>Message catalog</small>"]:::neutral
    n83["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n84["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n85["A landmark on the body<br/><small>Requirement</small>"]:::held
    n86["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n87["The landmarks of a pose<br/><small>Function</small>"]:::held
    n88["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n89["Continuous integration<br/><small>Package</small>"]:::neutral
    n90["Geometry<br/><small>Package</small>"]:::neutral
    n91["Trame<br/><small>Package</small>"]:::neutral
    n92["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n93["How a movement eases<br/><small>Decision</small>"]:::neutral
    n94["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n95["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n96["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n97["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n98["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n99["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n100["How full the lungs are<br/><small>Requirement</small>"]:::held
    n101["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n102["Where a practice is<br/><small>Requirement</small>"]:::held
    n103["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n104["The moment of a practice<br/><small>Function</small>"]:::held
    n105["Names of the player<br/><small>Decision</small>"]:::neutral
    n106["Play a practice<br/><small>Function</small>"]:::held
    n107["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n108["The breath is the clock<br/><small>Architecture decision</small>"]:::unknown
    n109["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n110["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n111["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n112["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n113["The breath of a moment<br/><small>Requirement</small>"]:::held
    n114["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n115["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n116["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n117["The language of the app<br/><small>Requirement</small>"]:::held
    n118["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n119["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n120["A hold counts in breaths<br/><small>Requirement</small>"]:::unknown
    n121["Criteria of a hold in breaths<br/><small>Acceptance criteria</small>"]:::held
    n122["In the person's language<br/><small>Goal</small>"]:::neutral
    n123["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n124["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n125["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n126["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n127["The device's languages, given<br/><small>Function</small>"]:::held
    n128["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n129["Holding the poses<br/><small>Scenario</small>"]:::held
    n130["The language of the home page<br/><small>Scenario</small>"]:::held
    n131["The app in memory<br/><small>Technical choice</small>"]:::held
    n132["Learning a sequence<br/><small>Scenario</small>"]:::held
    n133["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n134["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n135["A bowl that counts<br/><small>Function</small>"]:::held
    n136["A screen that records<br/><small>Function</small>"]:::held
    n137["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n138["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n139["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n140["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n141["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n142["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n143["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n144["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n145["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n146["The content, reviewed<br/><small>Review</small>"]:::unknown
    n147["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n148["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n149["A machine<br/><small>Environment</small>"]:::neutral
    n150["On a phone<br/><small>Check</small>"]:::unknown
    n151["On the machine<br/><small>Technical choice</small>"]:::unknown
    n152["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n153["Open the page<br/><small>Entry point</small>"]:::held
    n154["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n155["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n156["How the page is opened<br/><small>Decision</small>"]:::neutral
    n157["The page opens<br/><small>Check</small>"]:::unknown
    n158["What the page is asked<br/><small>Function</small>"]:::held
    n159["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n160["Place the page<br/><small>Entry point</small>"]:::held
    n161["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n162["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n163["A preview<br/><small>Shipment</small>"]:::unknown
    n164["The way of a preview<br/><small>Policy</small>"]:::neutral
    n165["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n166["The preview's script<br/><small>Artefact</small>"]:::unknown
    n167["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n168["The product holds<br/><small>Obligation</small>"]:::neutral
    n169["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n170["The way of a public version<br/><small>Policy</small>"]:::neutral
    n171["A public version<br/><small>Shipment</small>"]:::unknown
    n172["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n173["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n174["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n175["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n176["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n177["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n178["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n179["Where the page is served<br/><small>Decision</small>"]:::neutral
    n180["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n181["A phase set by the person<br/><small>Requirement</small>"]:::held
    n182["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n183["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n184["A breath read back<br/><small>Requirement</small>"]:::held
    n185["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n186["The landmarks the person chose<br/><small>Function</small>"]:::held
    n187["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n188["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n189["The person's breath<br/><small>Function</small>"]:::held
    n190["Names of the settings<br/><small>Decision</small>"]:::neutral
    n191["The settings view<br/><small>Function</small>"]:::held
    n192["Show the settings<br/><small>Function</small>"]:::held
    n193["Tapping<br/><small>Decision</small>"]:::neutral
    n194["The voice the person chose<br/><small>Function</small>"]:::held
    n195["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n196["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n197["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph stage["Poselia · The stage"]
    n198["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n199["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n200["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n201["Light of the stage<br/><small>Decision</small>"]:::neutral
    n202["Views of the stage<br/><small>Decision</small>"]:::neutral
    n203["three.js<br/><small>Package</small>"]:::held
    n204["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n74
  n0 -->|Depends on| n105
  n0 -->|Depends on| n190
  n0 -->|Depends on| n56
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n68
  n1 -->|Depends on| n69
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n124
  n4 -->|Serves| n122
  n4 -->|Depends on| n80
  n4 -->|Depends on| n77
  n4 -->|Depends on| n62
  n4 -->|Depends on| n83
  n4 -->|Depends on| n82
  n4 -->|Depends on| n61
  n4 -->|Depends on| n75
  n4 -->|Depends on| n76
  n5 -->|Chooses| n0
  n5 -->|Chooses| n198
  n5 -->|Chooses| n197
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n75
  n7 -->|Styles| n104
  n7 -->|Styles| n191
  n7 -->|Styles| n57
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n79
  n8 -->|Styled by| n7
  n8 -->|Serves| n124
  n10 -->|Serves| n124
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n77
  n10 -->|Depends on| n106
  n10 -->|Depends on| n192
  n10 -->|Depends on| n189
  n10 -->|Depends on| n60
  n10 -->|Depends on| n59
  n15 -->|Deployed in| n13
  n20 -->|Refines| n124
  n21 -->|Accepts| n20
  n22 -->|Refines| n124
  n23 -->|Accepts| n22
  n25 -->|Refines| n124
  n26 -->|Accepts| n25
  n27 -->|Refines| n124
  n28 -->|Accepts| n27
  n29 -->|Refines| n124
  n30 -->|Accepts| n29
  n31 -->|Refines| n124
  n32 -->|Accepts| n31
  n33 -->|Refines| n124
  n33 -->|Refines| n116
  n34 -->|Accepts| n33
  n36 -->|Refines| n124
  n37 -->|Accepts| n36
  n38 -->|Refines| n124
  n38 -->|Refines| n116
  n39 -->|Accepts| n38
  n40 -->|Refines| n124
  n41 -->|Accepts| n40
  n42 -->|Refines| n124
  n43 -->|Accepts| n42
  n44 -->|Refines| n124
  n45 -->|Accepts| n44
  n46 -->|Refines| n124
  n47 -->|Accepts| n46
  n49 -->|Refines| n124
  n50 -->|Accepts| n49
  n51 -->|Refines| n124
  n52 -->|Accepts| n51
  n53 -->|Refines| n124
  n54 -->|Accepts| n53
  n55 -->|Serves| n124
  n55 -->|Depends on| n53
  n55 -->|Depends on| n63
  n55 -->|Depends on| n31
  n55 -->|Depends on| n83
  n55 -->|Depends on| n82
  n57 -->|Serves| n124
  n57 -->|Depends on| n80
  n57 -->|Depends on| n77
  n57 -->|Depends on| n75
  n57 -->|Depends on| n76
  n57 -->|Depends on| n66
  n57 -->|Depends on| n63
  n58 -->|Serves| n124
  n58 -->|Depends on| n65
  n58 -->|Depends on| n66
  n60 -->|Serves| n124
  n60 -->|Depends on| n16
  n60 -->|Depends on| n57
  n60 -->|Depends on| n58
  n60 -->|Depends on| n55
  n60 -->|Depends on| n59
  n60 -->|Depends on| n106
  n63 -->|Refines| n124
  n64 -->|Accepts| n63
  n66 -->|Refines| n124
  n67 -->|Accepts| n66
  n68 -->|Languages offered| n62
  n68 -->|Serves| n124
  n69 -->|Languages offered| n62
  n69 -->|Serves| n124
  n71 -->|Refines| n124
  n72 -->|Accepts| n71
  n75 -->|Serves| n124
  n75 -->|Depends on| n24
  n75 -->|Depends on| n73
  n75 -->|Depends on| n74
  n76 -->|Serves| n124
  n76 -->|Depends on| n29
  n76 -->|Depends on| n22
  n77 -->|Serves| n122
  n77 -->|Depends on| n62
  n77 -->|Depends on| n117
  n77 -->|Depends on| n81
  n80 -->|Serves| n122
  n80 -->|Depends on| n83
  n80 -->|Depends on| n82
  n80 -->|Depends on| n77
  n82 -->|Written in| n78
  n82 -->|Translates| n83
  n83 -->|Written in| n79
  n85 -->|Refines| n124
  n86 -->|Accepts| n85
  n87 -->|Serves| n124
  n87 -->|Depends on| n85
  n87 -->|Depends on| n80
  n87 -->|Depends on| n77
  n89 -->|Serves| n124
  n90 -->|Serves| n124
  n91 -->|Serves| n124
  n92 -->|Serves| n124
  n94 -->|Refines| n115
  n94 -->|Depends on| n71
  n95 -->|Accepts| n94
  n96 -->|Refines| n115
  n96 -->|Depends on| n93
  n97 -->|Accepts| n96
  n98 -->|Refines| n115
  n99 -->|Accepts| n98
  n100 -->|Refines| n115
  n101 -->|Accepts| n100
  n102 -->|Refines| n115
  n103 -->|Accepts| n102
  n104 -->|Serves| n124
  n104 -->|Serves| n115
  n104 -->|Depends on| n102
  n104 -->|Depends on| n96
  n104 -->|Depends on| n100
  n104 -->|Depends on| n22
  n104 -->|Depends on| n87
  n104 -->|Depends on| n40
  n104 -->|Depends on| n88
  n104 -->|Depends on| n80
  n104 -->|Depends on| n77
  n104 -->|Depends on| n61
  n106 -->|Serves| n124
  n106 -->|Depends on| n16
  n106 -->|Depends on| n11
  n106 -->|Depends on| n194
  n106 -->|Depends on| n186
  n106 -->|Depends on| n107
  n106 -->|Depends on| n104
  n106 -->|Depends on| n80
  n106 -->|Depends on| n77
  n106 -->|Depends on| n202
  n107 -->|Serves| n124
  n107 -->|Serves| n115
  n107 -->|Depends on| n113
  n107 -->|Depends on| n29
  n107 -->|Depends on| n98
  n107 -->|Depends on| n94
  n108 -->|Serves| n115
  n108 -->|Applied by| n113
  n108 -->|Applied by| n120
  n109 -->|Serves| n116
  n109 -->|Applied by| n68
  n109 -->|Applied by| n14
  n110 -->|Serves| n122
  n110 -->|Applied by| n62
  n110 -->|Applied by| n117
  n111 -->|Serves| n124
  n111 -->|Applied by| n15
  n111 -->|Applied by| n8
  n111 -->|Applied by| n157
  n112 -->|Serves| n124
  n112 -->|Applied by| n123
  n112 -->|Applied by| n106
  n113 -->|Refines| n115
  n113 -->|Depends on| n119
  n114 -->|Accepts| n113
  n117 -->|Refines| n122
  n118 -->|Accepts| n117
  n120 -->|Refines| n115
  n121 -->|Accepts| n120
  n125 -->|Verifies| n107
  n125 -->|Verifies| n104
  n125 -->|Verifies| n106
  n125 -->|Verifies| n22
  n125 -->|Verifies| n46
  n125 -->|Verifies| n44
  n125 -->|Verifies| n36
  n125 -->|Verifies| n27
  n125 -->|Verifies| n25
  n125 -->|In| n18
  n125 -->|Depends on| n10
  n125 -->|Depends on| n19
  n125 -->|Depends on| n139
  n125 -->|Depends on| n46
  n125 -->|Depends on| n48
  n125 -->|Depends on| n35
  n125 -->|Depends on| n82
  n125 -->|Depends on| n137
  n126 -->|Verifies| n58
  n126 -->|Verifies| n55
  n126 -->|Verifies| n66
  n126 -->|Verifies| n63
  n126 -->|Verifies| n53
  n126 -->|Verifies| n107
  n126 -->|Verifies| n104
  n126 -->|In| n18
  n126 -->|Depends on| n58
  n126 -->|Depends on| n55
  n126 -->|Depends on| n107
  n126 -->|Depends on| n104
  n126 -->|Depends on| n68
  n126 -->|Depends on| n66
  n126 -->|Depends on| n46
  n126 -->|Depends on| n48
  n126 -->|Depends on| n35
  n126 -->|Depends on| n128
  n126 -->|Depends on| n137
  n127 -->|Depends on| n138
  n129 -->|Verifies| n60
  n129 -->|Verifies| n57
  n129 -->|Verifies| n58
  n129 -->|Verifies| n55
  n129 -->|Verifies| n106
  n129 -->|Verifies| n107
  n129 -->|Verifies| n104
  n129 -->|Verifies| n98
  n129 -->|Verifies| n94
  n129 -->|Verifies| n194
  n129 -->|Verifies| n135
  n129 -->|In| n18
  n129 -->|Depends on| n10
  n129 -->|Depends on| n19
  n129 -->|Depends on| n12
  n129 -->|Depends on| n59
  n129 -->|Depends on| n128
  n129 -->|Depends on| n35
  n129 -->|Depends on| n82
  n129 -->|Depends on| n137
  n130 -->|Verifies| n10
  n130 -->|Verifies| n4
  n130 -->|Verifies| n77
  n130 -->|Verifies| n80
  n130 -->|Verifies| n75
  n130 -->|Verifies| n76
  n130 -->|Verifies| n1
  n130 -->|Verifies| n127
  n130 -->|Verifies| n136
  n130 -->|In| n18
  n130 -->|Depends on| n10
  n130 -->|Depends on| n19
  n130 -->|Depends on| n81
  n130 -->|Depends on| n78
  n130 -->|Depends on| n79
  n130 -->|Depends on| n82
  n130 -->|Depends on| n83
  n130 -->|Depends on| n137
  n130 -->|Depends on| n68
  n130 -->|Depends on| n69
  n131 -->|Chooses| n136
  n131 -->|Chooses| n135
  n131 -->|Chooses| n127
  n131 -->|In| n18
  n132 -->|Verifies| n10
  n132 -->|Verifies| n106
  n132 -->|Verifies| n107
  n132 -->|Verifies| n104
  n132 -->|Verifies| n87
  n132 -->|Verifies| n85
  n132 -->|Verifies| n186
  n132 -->|In| n18
  n132 -->|Depends on| n10
  n132 -->|Depends on| n19
  n132 -->|Depends on| n59
  n132 -->|Depends on| n128
  n132 -->|Depends on| n82
  n132 -->|Depends on| n137
  n132 -->|Depends on| n68
  n132 -->|Depends on| n81
  n133 -->|Verifies| n192
  n133 -->|Verifies| n191
  n133 -->|Verifies| n189
  n133 -->|Verifies| n194
  n133 -->|Verifies| n187
  n133 -->|Verifies| n181
  n133 -->|Verifies| n10
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n189
  n133 -->|Depends on| n140
  n133 -->|Depends on| n82
  n133 -->|Depends on| n137
  n134 -->|Verifies| n106
  n134 -->|Verifies| n107
  n134 -->|Verifies| n104
  n134 -->|Verifies| n10
  n134 -->|In| n18
  n134 -->|Depends on| n10
  n134 -->|Depends on| n19
  n134 -->|Depends on| n139
  n134 -->|Depends on| n82
  n134 -->|Depends on| n78
  n134 -->|Depends on| n137
  n135 -->|Implements| n11
  n135 -->|Implements| n12
  n136 -->|Implements| n16
  n136 -->|Implements| n19
  n137 -->|Written in| n78
  n142 -->|Serves| n124
  n144 -->|Serves| n124
  n145 -->|Serves| n124
  n146 -->|Reviews| n68
  n146 -->|Reviews| n69
  n146 -->|By the role| n180
  n147 -->|Serves| n116
  n148 -->|Serves| n124
  n150 -->|Checks| n155
  n150 -->|Signed by| n159
  n150 -->|Verifies| n197
  n151 -->|In| n149
  n152 -->|Verifies| n153
  n152 -->|Verifies| n158
  n152 -->|In| n18
  n152 -->|Depends on| n153
  n152 -->|Depends on| n155
  n152 -->|Depends on| n158
  n152 -->|Depends on| n178
  n152 -->|Depends on| n62
  n152 -->|Depends on| n177
  n152 -->|Depends on| n174
  n153 -->|Serves| n124
  n153 -->|Part of| n162
  n153 -->|Depends on| n155
  n153 -->|Depends on| n62
  n153 -->|Depends on| n158
  n153 -->|Depends on| n156
  n153 -->|Depends on| n178
  n154 -->|Serves| n124
  n155 -->|Produced by| n8
  n157 -->|Checks| n155
  n157 -->|Run by| n153
  n157 -->|Verifies| n0
  n157 -->|Verifies| n198
  n158 -->|Serves| n124
  n158 -->|Depends on| n9
  n158 -->|Depends on| n56
  n158 -->|Depends on| n105
  n160 -->|Serves| n124
  n160 -->|Part of| n162
  n160 -->|Depends on| n155
  n160 -->|Depends on| n179
  n160 -->|Depends on| n178
  n161 -->|Verifies| n160
  n161 -->|In| n18
  n161 -->|Depends on| n160
  n161 -->|Depends on| n155
  n161 -->|Depends on| n179
  n161 -->|Depends on| n177
  n161 -->|Depends on| n174
  n162 -->|Deployed in| n149
  n163 -->|Ships| n155
  n163 -->|Deployed by| n160
  n163 -->|Programs assembled for| n149
  n163 -->|Follows the policy| n164
  n164 -->|Its obligations| n145
  n164 -->|Its obligations| n169
  n164 -->|Its obligations| n172
  n164 -->|Its obligations| n154
  n166 -->|Runs elsewhere| n163
  n167 -->|Runs elsewhere| n163
  n167 -->|Its writer's settings| n165
  n167 -->|Makes available, once shipped| n155
  n168 -->|Serves| n124
  n169 -->|Serves| n124
  n170 -->|Its obligations| n144
  n170 -->|Its obligations| n168
  n170 -->|Its obligations| n148
  n170 -->|Its obligations| n147
  n170 -->|Its obligations| n142
  n170 -->|Its obligations| n172
  n170 -->|Its obligations| n154
  n171 -->|Ships| n155
  n171 -->|Deployed by| n160
  n171 -->|Programs assembled for| n149
  n171 -->|Follows the policy| n170
  n172 -->|Serves| n124
  n173 -->|Ships| n167
  n173 -->|Ships| n166
  n174 -->|Written in| n78
  n175 -->|In| n18
  n176 -->|Serves| n116
  n176 -->|Serves| n124
  n176 -->|Applied by| n163
  n176 -->|Applied by| n171
  n176 -->|Applied by| n157
  n176 -->|Applied by| n150
  n176 -->|Applied by| n146
  n176 -->|Applied by| n153
  n176 -->|Applied by| n160
  n176 -->|Applied by| n143
  n176 -->|Applied by| n141
  n176 -->|Applied by| n167
  n176 -->|Applied by| n166
  n176 -->|Applied by| n173
  n178 -->|Written in| n78
  n181 -->|Refines| n115
  n181 -->|Depends on| n183
  n182 -->|Accepts| n181
  n184 -->|Refines| n115
  n184 -->|Depends on| n183
  n185 -->|Accepts| n184
  n186 -->|Serves| n124
  n186 -->|Depends on| n81
  n187 -->|Refines| n115
  n187 -->|Depends on| n183
  n187 -->|Depends on| n193
  n188 -->|Accepts| n187
  n189 -->|Serves| n115
  n189 -->|Depends on| n81
  n189 -->|Depends on| n184
  n191 -->|Serves| n115
  n191 -->|Serves| n124
  n191 -->|Depends on| n80
  n191 -->|Depends on| n77
  n192 -->|Serves| n115
  n192 -->|Serves| n124
  n192 -->|Depends on| n16
  n192 -->|Depends on| n189
  n192 -->|Depends on| n194
  n192 -->|Depends on| n191
  n192 -->|Depends on| n181
  n192 -->|Depends on| n187
  n192 -->|Depends on| n119
  n194 -->|Serves| n124
  n194 -->|Depends on| n195
  n197 -->|Implements| n11
  n197 -->|Depends on| n196
  n198 -->|Implements| n17
  n198 -->|Uses| n203
  n198 -->|Uses| n204
  n198 -->|Depends on| n199
  n198 -->|Depends on| n201
  n198 -->|Depends on| n202
  n198 -->|Depends on| n200
  n22 -.->|Depends on| n24
  n22 -.->|Depends on| n35
  n22 -.->|Depends on| n49
  n22 -.->|Depends on| n44
  n22 -.->|Depends on| n25
  n22 -.->|Depends on| n36
  n22 -.->|Depends on| n27
  n22 -.->|Depends on| n51
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n29
  n23 -.->|Depends on| n35
  n25 -.->|Depends on| n35
  n27 -.->|Depends on| n35
  n28 -.->|Depends on| n35
  n29 -.->|Depends on| n49
  n33 -.->|Depends on| n29
  n33 -.->|Depends on| n22
  n36 -.->|Depends on| n24
  n36 -.->|Depends on| n35
  n36 -.->|Depends on| n51
  n37 -.->|Depends on| n24
  n38 -.->|Depends on| n29
  n38 -.->|Depends on| n46
  n38 -.->|Depends on| n22
  n38 -.->|Depends on| n48
  n43 -.->|Depends on| n29
  n43 -.->|Depends on| n22
  n44 -.->|Depends on| n24
  n44 -.->|Depends on| n51
  n46 -.->|Depends on| n24
  n47 -.->|Depends on| n29
  n47 -.->|Depends on| n22
  n49 -.->|Depends on| n24
  n50 -.->|Depends on| n24
  n53 -.->|Depends on| n29
  n53 -.->|Depends on| n22
  n66 -.->|Depends on| n65
  n67 -.->|Depends on| n65
  n67 -.->|Depends on| n31
  n67 -.->|Depends on| n29
  n67 -.->|Depends on| n63
  n67 -.->|Depends on| n35
  n67 -.->|Depends on| n46
  n67 -.->|Depends on| n22
  n67 -.->|Depends on| n48
  n68 -.->|Depends on| n38
  n68 -.->|Depends on| n33
  n68 -.->|Depends on| n71
  n68 -.->|Depends on| n119
  n69 -.->|Depends on| n61
  n69 -.->|Depends on| n113
  n69 -.->|Depends on| n71
  n69 -.->|Depends on| n31
  n69 -.->|Depends on| n66
  n71 -.->|Depends on| n70
  n85 -.->|Depends on| n84
  n85 -.->|Depends on| n42
  n85 -.->|Depends on| n20
  n86 -.->|Depends on| n29
  n86 -.->|Depends on| n22
  n86 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
