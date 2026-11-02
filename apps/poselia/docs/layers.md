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
    n93["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n94["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n95["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n96["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n97["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n98["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n99["How full the lungs are<br/><small>Requirement</small>"]:::held
    n100["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n101["Where a practice is<br/><small>Requirement</small>"]:::held
    n102["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n103["The moment of a practice<br/><small>Function</small>"]:::held
    n104["Names of the player<br/><small>Decision</small>"]:::neutral
    n105["Play a practice<br/><small>Function</small>"]:::held
    n106["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n107["The breath is the clock<br/><small>Architecture decision</small>"]:::unknown
    n108["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n109["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n110["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n111["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n112["The breath of a moment<br/><small>Requirement</small>"]:::held
    n113["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n114["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n115["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n116["The language of the app<br/><small>Requirement</small>"]:::held
    n117["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n118["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n119["A hold counts in breaths<br/><small>Requirement</small>"]:::unknown
    n120["Criteria of a hold in breaths<br/><small>Acceptance criteria</small>"]:::held
    n121["In the person's language<br/><small>Goal</small>"]:::neutral
    n122["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n123["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n124["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n125["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n126["The device's languages, given<br/><small>Function</small>"]:::held
    n127["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n128["Holding the poses<br/><small>Scenario</small>"]:::held
    n129["The language of the home page<br/><small>Scenario</small>"]:::held
    n130["The app in memory<br/><small>Technical choice</small>"]:::held
    n131["Learning a sequence<br/><small>Scenario</small>"]:::held
    n132["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n133["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n134["A bowl that counts<br/><small>Function</small>"]:::held
    n135["A screen that records<br/><small>Function</small>"]:::held
    n136["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n137["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n138["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n139["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n140["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n141["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n142["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n143["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n144["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n145["The content, reviewed<br/><small>Review</small>"]:::unknown
    n146["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n147["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n148["A machine<br/><small>Environment</small>"]:::neutral
    n149["On a phone<br/><small>Check</small>"]:::unknown
    n150["On the machine<br/><small>Technical choice</small>"]:::unknown
    n151["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n152["Open the page<br/><small>Entry point</small>"]:::held
    n153["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n154["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n155["How the page is opened<br/><small>Decision</small>"]:::neutral
    n156["The page opens<br/><small>Check</small>"]:::unknown
    n157["What the page is asked<br/><small>Function</small>"]:::held
    n158["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n159["Place the page<br/><small>Entry point</small>"]:::held
    n160["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n161["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n162["A preview<br/><small>Shipment</small>"]:::unknown
    n163["The way of a preview<br/><small>Policy</small>"]:::neutral
    n164["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n165["The preview's script<br/><small>Artefact</small>"]:::unknown
    n166["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n167["The product holds<br/><small>Obligation</small>"]:::neutral
    n168["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n169["The way of a public version<br/><small>Policy</small>"]:::neutral
    n170["A public version<br/><small>Shipment</small>"]:::unknown
    n171["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n172["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n173["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n174["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n175["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n176["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n177["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n178["Where the page is served<br/><small>Decision</small>"]:::neutral
    n179["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n180["A phase set by the person<br/><small>Requirement</small>"]:::held
    n181["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n182["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n183["A breath read back<br/><small>Requirement</small>"]:::held
    n184["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n185["The landmarks the person chose<br/><small>Function</small>"]:::held
    n186["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n187["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n188["The person's breath<br/><small>Function</small>"]:::held
    n189["Names of the settings<br/><small>Decision</small>"]:::neutral
    n190["The settings view<br/><small>Function</small>"]:::held
    n191["Show the settings<br/><small>Function</small>"]:::held
    n192["Tapping<br/><small>Decision</small>"]:::neutral
    n193["The voice the person chose<br/><small>Function</small>"]:::held
    n194["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n195["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n196["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph stage["Poselia · The stage"]
    n197["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n198["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n199["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n200["Light of the stage<br/><small>Decision</small>"]:::neutral
    n201["Views of the stage<br/><small>Decision</small>"]:::neutral
    n202["three.js<br/><small>Package</small>"]:::held
    n203["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n74
  n0 -->|Depends on| n104
  n0 -->|Depends on| n189
  n0 -->|Depends on| n56
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n68
  n1 -->|Depends on| n69
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n123
  n4 -->|Serves| n121
  n4 -->|Depends on| n80
  n4 -->|Depends on| n77
  n4 -->|Depends on| n62
  n4 -->|Depends on| n83
  n4 -->|Depends on| n82
  n4 -->|Depends on| n61
  n4 -->|Depends on| n75
  n4 -->|Depends on| n76
  n5 -->|Chooses| n0
  n5 -->|Chooses| n197
  n5 -->|Chooses| n196
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n75
  n7 -->|Styles| n103
  n7 -->|Styles| n190
  n7 -->|Styles| n57
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n79
  n8 -->|Styled by| n7
  n8 -->|Serves| n123
  n10 -->|Serves| n123
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n77
  n10 -->|Depends on| n105
  n10 -->|Depends on| n191
  n10 -->|Depends on| n188
  n10 -->|Depends on| n60
  n10 -->|Depends on| n59
  n15 -->|Deployed in| n13
  n20 -->|Refines| n123
  n21 -->|Accepts| n20
  n22 -->|Refines| n123
  n23 -->|Accepts| n22
  n25 -->|Refines| n123
  n26 -->|Accepts| n25
  n27 -->|Refines| n123
  n28 -->|Accepts| n27
  n29 -->|Refines| n123
  n30 -->|Accepts| n29
  n31 -->|Refines| n123
  n32 -->|Accepts| n31
  n33 -->|Refines| n123
  n33 -->|Refines| n115
  n34 -->|Accepts| n33
  n36 -->|Refines| n123
  n37 -->|Accepts| n36
  n38 -->|Refines| n123
  n38 -->|Refines| n115
  n39 -->|Accepts| n38
  n40 -->|Refines| n123
  n41 -->|Accepts| n40
  n42 -->|Refines| n123
  n43 -->|Accepts| n42
  n44 -->|Refines| n123
  n45 -->|Accepts| n44
  n46 -->|Refines| n123
  n47 -->|Accepts| n46
  n49 -->|Refines| n123
  n50 -->|Accepts| n49
  n51 -->|Refines| n123
  n52 -->|Accepts| n51
  n53 -->|Refines| n123
  n54 -->|Accepts| n53
  n55 -->|Serves| n123
  n55 -->|Depends on| n53
  n55 -->|Depends on| n63
  n55 -->|Depends on| n31
  n55 -->|Depends on| n83
  n55 -->|Depends on| n82
  n57 -->|Serves| n123
  n57 -->|Depends on| n80
  n57 -->|Depends on| n77
  n57 -->|Depends on| n75
  n57 -->|Depends on| n76
  n57 -->|Depends on| n66
  n57 -->|Depends on| n63
  n58 -->|Serves| n123
  n58 -->|Depends on| n65
  n58 -->|Depends on| n66
  n60 -->|Serves| n123
  n60 -->|Depends on| n16
  n60 -->|Depends on| n57
  n60 -->|Depends on| n58
  n60 -->|Depends on| n55
  n60 -->|Depends on| n59
  n60 -->|Depends on| n105
  n63 -->|Refines| n123
  n64 -->|Accepts| n63
  n66 -->|Refines| n123
  n67 -->|Accepts| n66
  n68 -->|Languages offered| n62
  n68 -->|Serves| n123
  n69 -->|Languages offered| n62
  n69 -->|Serves| n123
  n71 -->|Refines| n123
  n72 -->|Accepts| n71
  n75 -->|Serves| n123
  n75 -->|Depends on| n24
  n75 -->|Depends on| n73
  n75 -->|Depends on| n74
  n76 -->|Serves| n123
  n76 -->|Depends on| n29
  n76 -->|Depends on| n22
  n77 -->|Serves| n121
  n77 -->|Depends on| n62
  n77 -->|Depends on| n116
  n77 -->|Depends on| n81
  n80 -->|Serves| n121
  n80 -->|Depends on| n83
  n80 -->|Depends on| n82
  n80 -->|Depends on| n77
  n82 -->|Written in| n78
  n82 -->|Translates| n83
  n83 -->|Written in| n79
  n85 -->|Refines| n123
  n86 -->|Accepts| n85
  n87 -->|Serves| n123
  n87 -->|Depends on| n85
  n87 -->|Depends on| n80
  n87 -->|Depends on| n77
  n89 -->|Serves| n123
  n90 -->|Serves| n123
  n91 -->|Serves| n123
  n92 -->|Serves| n123
  n93 -->|Refines| n114
  n94 -->|Accepts| n93
  n95 -->|Refines| n114
  n96 -->|Accepts| n95
  n97 -->|Refines| n114
  n98 -->|Accepts| n97
  n99 -->|Refines| n114
  n100 -->|Accepts| n99
  n101 -->|Refines| n114
  n102 -->|Accepts| n101
  n103 -->|Serves| n123
  n103 -->|Serves| n114
  n103 -->|Depends on| n101
  n103 -->|Depends on| n95
  n103 -->|Depends on| n99
  n103 -->|Depends on| n22
  n103 -->|Depends on| n87
  n103 -->|Depends on| n40
  n103 -->|Depends on| n88
  n103 -->|Depends on| n80
  n103 -->|Depends on| n77
  n103 -->|Depends on| n61
  n105 -->|Serves| n123
  n105 -->|Depends on| n16
  n105 -->|Depends on| n11
  n105 -->|Depends on| n193
  n105 -->|Depends on| n185
  n105 -->|Depends on| n106
  n105 -->|Depends on| n103
  n105 -->|Depends on| n80
  n105 -->|Depends on| n77
  n105 -->|Depends on| n201
  n106 -->|Serves| n123
  n106 -->|Serves| n114
  n106 -->|Depends on| n112
  n106 -->|Depends on| n29
  n106 -->|Depends on| n97
  n106 -->|Depends on| n93
  n107 -->|Serves| n114
  n107 -->|Applied by| n112
  n107 -->|Applied by| n119
  n108 -->|Serves| n115
  n108 -->|Applied by| n68
  n108 -->|Applied by| n14
  n109 -->|Serves| n121
  n109 -->|Applied by| n62
  n109 -->|Applied by| n116
  n110 -->|Serves| n123
  n110 -->|Applied by| n15
  n110 -->|Applied by| n8
  n110 -->|Applied by| n156
  n111 -->|Serves| n123
  n111 -->|Applied by| n122
  n111 -->|Applied by| n105
  n112 -->|Refines| n114
  n113 -->|Accepts| n112
  n116 -->|Refines| n121
  n117 -->|Accepts| n116
  n119 -->|Refines| n114
  n120 -->|Accepts| n119
  n124 -->|Verifies| n106
  n124 -->|Verifies| n103
  n124 -->|Verifies| n105
  n124 -->|Verifies| n22
  n124 -->|Verifies| n46
  n124 -->|Verifies| n44
  n124 -->|Verifies| n36
  n124 -->|Verifies| n27
  n124 -->|Verifies| n25
  n124 -->|In| n18
  n124 -->|Depends on| n10
  n124 -->|Depends on| n19
  n124 -->|Depends on| n138
  n124 -->|Depends on| n46
  n124 -->|Depends on| n48
  n124 -->|Depends on| n35
  n124 -->|Depends on| n82
  n124 -->|Depends on| n136
  n125 -->|Verifies| n58
  n125 -->|Verifies| n55
  n125 -->|Verifies| n66
  n125 -->|Verifies| n63
  n125 -->|Verifies| n53
  n125 -->|Verifies| n106
  n125 -->|Verifies| n103
  n125 -->|In| n18
  n125 -->|Depends on| n58
  n125 -->|Depends on| n55
  n125 -->|Depends on| n106
  n125 -->|Depends on| n103
  n125 -->|Depends on| n68
  n125 -->|Depends on| n66
  n125 -->|Depends on| n46
  n125 -->|Depends on| n48
  n125 -->|Depends on| n35
  n125 -->|Depends on| n127
  n125 -->|Depends on| n136
  n126 -->|Depends on| n137
  n128 -->|Verifies| n60
  n128 -->|Verifies| n57
  n128 -->|Verifies| n58
  n128 -->|Verifies| n55
  n128 -->|Verifies| n105
  n128 -->|Verifies| n106
  n128 -->|Verifies| n103
  n128 -->|Verifies| n97
  n128 -->|Verifies| n93
  n128 -->|Verifies| n193
  n128 -->|Verifies| n134
  n128 -->|In| n18
  n128 -->|Depends on| n10
  n128 -->|Depends on| n19
  n128 -->|Depends on| n12
  n128 -->|Depends on| n59
  n128 -->|Depends on| n127
  n128 -->|Depends on| n35
  n128 -->|Depends on| n82
  n128 -->|Depends on| n136
  n129 -->|Verifies| n10
  n129 -->|Verifies| n4
  n129 -->|Verifies| n77
  n129 -->|Verifies| n80
  n129 -->|Verifies| n75
  n129 -->|Verifies| n76
  n129 -->|Verifies| n1
  n129 -->|Verifies| n126
  n129 -->|Verifies| n135
  n129 -->|In| n18
  n129 -->|Depends on| n10
  n129 -->|Depends on| n19
  n129 -->|Depends on| n81
  n129 -->|Depends on| n78
  n129 -->|Depends on| n79
  n129 -->|Depends on| n82
  n129 -->|Depends on| n83
  n129 -->|Depends on| n136
  n129 -->|Depends on| n68
  n129 -->|Depends on| n69
  n130 -->|Chooses| n135
  n130 -->|Chooses| n134
  n130 -->|Chooses| n126
  n130 -->|In| n18
  n131 -->|Verifies| n10
  n131 -->|Verifies| n105
  n131 -->|Verifies| n106
  n131 -->|Verifies| n103
  n131 -->|Verifies| n87
  n131 -->|Verifies| n85
  n131 -->|Verifies| n185
  n131 -->|In| n18
  n131 -->|Depends on| n10
  n131 -->|Depends on| n19
  n131 -->|Depends on| n59
  n131 -->|Depends on| n127
  n131 -->|Depends on| n82
  n131 -->|Depends on| n136
  n131 -->|Depends on| n68
  n131 -->|Depends on| n81
  n132 -->|Verifies| n191
  n132 -->|Verifies| n190
  n132 -->|Verifies| n188
  n132 -->|Verifies| n193
  n132 -->|Verifies| n186
  n132 -->|Verifies| n180
  n132 -->|Verifies| n10
  n132 -->|In| n18
  n132 -->|Depends on| n10
  n132 -->|Depends on| n19
  n132 -->|Depends on| n188
  n132 -->|Depends on| n139
  n132 -->|Depends on| n82
  n132 -->|Depends on| n136
  n133 -->|Verifies| n105
  n133 -->|Verifies| n106
  n133 -->|Verifies| n103
  n133 -->|Verifies| n10
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n138
  n133 -->|Depends on| n82
  n133 -->|Depends on| n78
  n133 -->|Depends on| n136
  n134 -->|Implements| n11
  n134 -->|Implements| n12
  n135 -->|Implements| n16
  n135 -->|Implements| n19
  n136 -->|Written in| n78
  n141 -->|Serves| n123
  n143 -->|Serves| n123
  n144 -->|Serves| n123
  n145 -->|Reviews| n68
  n145 -->|Reviews| n69
  n145 -->|By the role| n179
  n146 -->|Serves| n115
  n147 -->|Serves| n123
  n149 -->|Checks| n154
  n149 -->|Signed by| n158
  n149 -->|Verifies| n196
  n150 -->|In| n148
  n151 -->|Verifies| n152
  n151 -->|Verifies| n157
  n151 -->|In| n18
  n151 -->|Depends on| n152
  n151 -->|Depends on| n154
  n151 -->|Depends on| n157
  n151 -->|Depends on| n177
  n151 -->|Depends on| n62
  n151 -->|Depends on| n176
  n151 -->|Depends on| n173
  n152 -->|Serves| n123
  n152 -->|Part of| n161
  n152 -->|Depends on| n154
  n152 -->|Depends on| n62
  n152 -->|Depends on| n157
  n152 -->|Depends on| n155
  n152 -->|Depends on| n177
  n153 -->|Serves| n123
  n154 -->|Produced by| n8
  n156 -->|Checks| n154
  n156 -->|Run by| n152
  n156 -->|Verifies| n0
  n156 -->|Verifies| n197
  n157 -->|Serves| n123
  n157 -->|Depends on| n9
  n157 -->|Depends on| n56
  n157 -->|Depends on| n104
  n159 -->|Serves| n123
  n159 -->|Part of| n161
  n159 -->|Depends on| n154
  n159 -->|Depends on| n178
  n159 -->|Depends on| n177
  n160 -->|Verifies| n159
  n160 -->|In| n18
  n160 -->|Depends on| n159
  n160 -->|Depends on| n154
  n160 -->|Depends on| n178
  n160 -->|Depends on| n176
  n160 -->|Depends on| n173
  n161 -->|Deployed in| n148
  n162 -->|Ships| n154
  n162 -->|Deployed by| n159
  n162 -->|Programs assembled for| n148
  n162 -->|Follows the policy| n163
  n163 -->|Its obligations| n144
  n163 -->|Its obligations| n168
  n163 -->|Its obligations| n171
  n163 -->|Its obligations| n153
  n165 -->|Runs elsewhere| n162
  n166 -->|Runs elsewhere| n162
  n166 -->|Its writer's settings| n164
  n166 -->|Makes available, once shipped| n154
  n167 -->|Serves| n123
  n168 -->|Serves| n123
  n169 -->|Its obligations| n143
  n169 -->|Its obligations| n167
  n169 -->|Its obligations| n147
  n169 -->|Its obligations| n146
  n169 -->|Its obligations| n141
  n169 -->|Its obligations| n171
  n169 -->|Its obligations| n153
  n170 -->|Ships| n154
  n170 -->|Deployed by| n159
  n170 -->|Programs assembled for| n148
  n170 -->|Follows the policy| n169
  n171 -->|Serves| n123
  n172 -->|Ships| n166
  n172 -->|Ships| n165
  n173 -->|Written in| n78
  n174 -->|In| n18
  n175 -->|Serves| n115
  n175 -->|Serves| n123
  n175 -->|Applied by| n162
  n175 -->|Applied by| n170
  n175 -->|Applied by| n156
  n175 -->|Applied by| n149
  n175 -->|Applied by| n145
  n175 -->|Applied by| n152
  n175 -->|Applied by| n159
  n175 -->|Applied by| n142
  n175 -->|Applied by| n140
  n175 -->|Applied by| n166
  n175 -->|Applied by| n165
  n175 -->|Applied by| n172
  n177 -->|Written in| n78
  n180 -->|Refines| n114
  n180 -->|Depends on| n182
  n181 -->|Accepts| n180
  n183 -->|Refines| n114
  n183 -->|Depends on| n182
  n184 -->|Accepts| n183
  n185 -->|Serves| n123
  n185 -->|Depends on| n81
  n186 -->|Refines| n114
  n186 -->|Depends on| n182
  n186 -->|Depends on| n192
  n187 -->|Accepts| n186
  n188 -->|Serves| n114
  n188 -->|Depends on| n81
  n188 -->|Depends on| n183
  n190 -->|Serves| n114
  n190 -->|Serves| n123
  n190 -->|Depends on| n80
  n190 -->|Depends on| n77
  n191 -->|Serves| n114
  n191 -->|Serves| n123
  n191 -->|Depends on| n16
  n191 -->|Depends on| n188
  n191 -->|Depends on| n193
  n191 -->|Depends on| n190
  n191 -->|Depends on| n180
  n191 -->|Depends on| n186
  n191 -->|Depends on| n118
  n193 -->|Serves| n123
  n193 -->|Depends on| n194
  n196 -->|Implements| n11
  n196 -->|Depends on| n195
  n197 -->|Implements| n17
  n197 -->|Uses| n202
  n197 -->|Uses| n203
  n197 -->|Depends on| n198
  n197 -->|Depends on| n200
  n197 -->|Depends on| n201
  n197 -->|Depends on| n199
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
  n68 -.->|Depends on| n118
  n69 -.->|Depends on| n61
  n69 -.->|Depends on| n112
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
  n93 -.->|Depends on| n71
  n112 -.->|Depends on| n118
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
