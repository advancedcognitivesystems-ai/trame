# Layers

*The graph in force on 31 October 2026, ordered by distance to the goals.*

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
  subgraph practice["Poselia · Practice"]
    n89["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n90["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n91["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n92["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n93["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n94["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n95["How full the lungs are<br/><small>Requirement</small>"]:::held
    n96["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n97["Where a practice is<br/><small>Requirement</small>"]:::held
    n98["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n99["The moment of a practice<br/><small>Function</small>"]:::held
    n100["Names of the player<br/><small>Decision</small>"]:::neutral
    n101["Play a practice<br/><small>Function</small>"]:::held
    n102["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n103["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n104["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n105["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n106["A page first, the phones after<br/><small>Architecture decision</small>"]:::held
    n107["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n108["The breath of a moment<br/><small>Requirement</small>"]:::held
    n109["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n110["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n111["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n112["The language of the app<br/><small>Requirement</small>"]:::held
    n113["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n114["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n115["A hold counts in breaths<br/><small>Requirement</small>"]:::held
    n116["Criteria of a hold in breaths<br/><small>Acceptance criteria</small>"]:::held
    n117["In the person's language<br/><small>Goal</small>"]:::neutral
    n118["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n119["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n120["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n121["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n122["The device's languages, given<br/><small>Function</small>"]:::held
    n123["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n124["Holding the poses<br/><small>Scenario</small>"]:::held
    n125["The language of the home page<br/><small>Scenario</small>"]:::held
    n126["The app in memory<br/><small>Technical choice</small>"]:::held
    n127["Learning a sequence<br/><small>Scenario</small>"]:::held
    n128["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n129["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n130["A bowl that counts<br/><small>Function</small>"]:::held
    n131["A screen that records<br/><small>Function</small>"]:::held
    n132["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n133["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n134["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n135["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n136["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n137["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n138["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n139["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n140["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n141["The content, reviewed<br/><small>Review</small>"]:::unknown
    n142["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n143["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n144["A machine<br/><small>Environment</small>"]:::neutral
    n145["On a phone<br/><small>Check</small>"]:::unknown
    n146["On the machine<br/><small>Technical choice</small>"]:::held
    n147["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n148["Open the page<br/><small>Entry point</small>"]:::held
    n149["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n150["Poselia's page<br/><small>Artefact</small>"]:::held
    n151["How the page is opened<br/><small>Decision</small>"]:::neutral
    n152["The page opens<br/><small>Check</small>"]:::held
    n153["What the page is asked<br/><small>Function</small>"]:::held
    n154["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n155["Place the page<br/><small>Entry point</small>"]:::held
    n156["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n157["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n158["A preview<br/><small>Shipment</small>"]:::held
    n159["The way of a preview<br/><small>Policy</small>"]:::neutral
    n160["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n161["The preview's script<br/><small>Artefact</small>"]:::held
    n162["The preview's workflow<br/><small>Artefact</small>"]:::held
    n163["The product holds<br/><small>Obligation</small>"]:::neutral
    n164["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n165["The way of a public version<br/><small>Policy</small>"]:::neutral
    n166["A public version<br/><small>Shipment</small>"]:::unknown
    n167["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n168["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n169["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n170["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n171["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n172["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n173["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n174["Where the page is served<br/><small>Decision</small>"]:::neutral
    n175["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n176["A phase set by the person<br/><small>Requirement</small>"]:::held
    n177["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n178["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n179["A breath read back<br/><small>Requirement</small>"]:::held
    n180["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n181["The landmarks the person chose<br/><small>Function</small>"]:::held
    n182["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n183["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n184["The person's breath<br/><small>Function</small>"]:::held
    n185["Names of the settings<br/><small>Decision</small>"]:::neutral
    n186["The settings view<br/><small>Function</small>"]:::held
    n187["Show the settings<br/><small>Function</small>"]:::held
    n188["The voice the person chose<br/><small>Function</small>"]:::held
    n189["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n190["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n191["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph stage["Poselia · The stage"]
    n192["The browser's stage<br/><small>Implementation</small>"]:::held
    n193["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n194["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n195["Light of the stage<br/><small>Decision</small>"]:::neutral
    n196["Views of the stage<br/><small>Decision</small>"]:::neutral
    n197["three.js<br/><small>Package</small>"]:::held
    n198["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n74
  n0 -->|Depends on| n100
  n0 -->|Depends on| n185
  n0 -->|Depends on| n56
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n68
  n1 -->|Depends on| n69
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n119
  n4 -->|Serves| n117
  n4 -->|Depends on| n80
  n4 -->|Depends on| n77
  n4 -->|Depends on| n62
  n4 -->|Depends on| n83
  n4 -->|Depends on| n82
  n4 -->|Depends on| n61
  n4 -->|Depends on| n75
  n4 -->|Depends on| n76
  n5 -->|Chooses| n0
  n5 -->|Chooses| n192
  n5 -->|Chooses| n191
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n75
  n7 -->|Styles| n99
  n7 -->|Styles| n186
  n7 -->|Styles| n57
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n79
  n8 -->|Styled by| n7
  n8 -->|Serves| n119
  n10 -->|Serves| n119
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n77
  n10 -->|Depends on| n101
  n10 -->|Depends on| n187
  n10 -->|Depends on| n184
  n10 -->|Depends on| n60
  n10 -->|Depends on| n59
  n15 -->|Deployed in| n13
  n20 -->|Refines| n119
  n21 -->|Accepts| n20
  n22 -->|Refines| n119
  n23 -->|Accepts| n22
  n25 -->|Refines| n119
  n26 -->|Accepts| n25
  n27 -->|Refines| n119
  n28 -->|Accepts| n27
  n29 -->|Refines| n119
  n30 -->|Accepts| n29
  n31 -->|Refines| n119
  n32 -->|Accepts| n31
  n33 -->|Refines| n119
  n33 -->|Refines| n111
  n34 -->|Accepts| n33
  n36 -->|Refines| n119
  n37 -->|Accepts| n36
  n38 -->|Refines| n119
  n38 -->|Refines| n111
  n39 -->|Accepts| n38
  n40 -->|Refines| n119
  n41 -->|Accepts| n40
  n42 -->|Refines| n119
  n43 -->|Accepts| n42
  n44 -->|Refines| n119
  n45 -->|Accepts| n44
  n46 -->|Refines| n119
  n47 -->|Accepts| n46
  n49 -->|Refines| n119
  n50 -->|Accepts| n49
  n51 -->|Refines| n119
  n52 -->|Accepts| n51
  n53 -->|Refines| n119
  n54 -->|Accepts| n53
  n55 -->|Serves| n119
  n55 -->|Depends on| n53
  n55 -->|Depends on| n63
  n55 -->|Depends on| n31
  n55 -->|Depends on| n83
  n55 -->|Depends on| n82
  n57 -->|Serves| n119
  n57 -->|Depends on| n80
  n57 -->|Depends on| n77
  n57 -->|Depends on| n75
  n57 -->|Depends on| n76
  n57 -->|Depends on| n66
  n57 -->|Depends on| n63
  n58 -->|Serves| n119
  n58 -->|Depends on| n65
  n58 -->|Depends on| n66
  n60 -->|Serves| n119
  n60 -->|Depends on| n16
  n60 -->|Depends on| n57
  n60 -->|Depends on| n58
  n60 -->|Depends on| n55
  n60 -->|Depends on| n59
  n60 -->|Depends on| n101
  n63 -->|Refines| n119
  n64 -->|Accepts| n63
  n66 -->|Refines| n119
  n67 -->|Accepts| n66
  n68 -->|Languages offered| n62
  n68 -->|Serves| n119
  n69 -->|Languages offered| n62
  n69 -->|Serves| n119
  n71 -->|Refines| n119
  n72 -->|Accepts| n71
  n75 -->|Serves| n119
  n75 -->|Depends on| n24
  n75 -->|Depends on| n73
  n75 -->|Depends on| n74
  n76 -->|Serves| n119
  n76 -->|Depends on| n29
  n76 -->|Depends on| n22
  n77 -->|Serves| n117
  n77 -->|Depends on| n62
  n77 -->|Depends on| n112
  n77 -->|Depends on| n81
  n80 -->|Serves| n117
  n80 -->|Depends on| n83
  n80 -->|Depends on| n82
  n80 -->|Depends on| n77
  n82 -->|Written in| n78
  n82 -->|Translates| n83
  n83 -->|Written in| n79
  n85 -->|Refines| n119
  n86 -->|Accepts| n85
  n87 -->|Serves| n119
  n87 -->|Depends on| n85
  n87 -->|Depends on| n80
  n87 -->|Depends on| n77
  n89 -->|Refines| n110
  n90 -->|Accepts| n89
  n91 -->|Refines| n110
  n92 -->|Accepts| n91
  n93 -->|Refines| n110
  n94 -->|Accepts| n93
  n95 -->|Refines| n110
  n96 -->|Accepts| n95
  n97 -->|Refines| n110
  n98 -->|Accepts| n97
  n99 -->|Serves| n119
  n99 -->|Serves| n110
  n99 -->|Depends on| n97
  n99 -->|Depends on| n91
  n99 -->|Depends on| n95
  n99 -->|Depends on| n22
  n99 -->|Depends on| n87
  n99 -->|Depends on| n40
  n99 -->|Depends on| n88
  n99 -->|Depends on| n80
  n99 -->|Depends on| n77
  n99 -->|Depends on| n61
  n101 -->|Serves| n119
  n101 -->|Depends on| n16
  n101 -->|Depends on| n11
  n101 -->|Depends on| n188
  n101 -->|Depends on| n181
  n101 -->|Depends on| n102
  n101 -->|Depends on| n99
  n101 -->|Depends on| n80
  n101 -->|Depends on| n77
  n101 -->|Depends on| n196
  n102 -->|Serves| n119
  n102 -->|Serves| n110
  n102 -->|Depends on| n108
  n102 -->|Depends on| n29
  n102 -->|Depends on| n93
  n102 -->|Depends on| n89
  n103 -->|Serves| n110
  n103 -->|Applied by| n108
  n103 -->|Applied by| n115
  n104 -->|Serves| n111
  n104 -->|Applied by| n68
  n104 -->|Applied by| n14
  n105 -->|Serves| n117
  n105 -->|Applied by| n62
  n105 -->|Applied by| n112
  n106 -->|Serves| n119
  n106 -->|Applied by| n15
  n106 -->|Applied by| n8
  n106 -->|Applied by| n152
  n107 -->|Serves| n119
  n107 -->|Applied by| n118
  n107 -->|Applied by| n101
  n108 -->|Refines| n110
  n109 -->|Accepts| n108
  n112 -->|Refines| n117
  n113 -->|Accepts| n112
  n115 -->|Refines| n110
  n116 -->|Accepts| n115
  n120 -->|Verifies| n102
  n120 -->|Verifies| n99
  n120 -->|Verifies| n101
  n120 -->|Verifies| n22
  n120 -->|Verifies| n46
  n120 -->|Verifies| n44
  n120 -->|Verifies| n36
  n120 -->|Verifies| n27
  n120 -->|Verifies| n25
  n120 -->|In| n18
  n120 -->|Depends on| n10
  n120 -->|Depends on| n19
  n120 -->|Depends on| n134
  n120 -->|Depends on| n46
  n120 -->|Depends on| n48
  n120 -->|Depends on| n35
  n120 -->|Depends on| n82
  n120 -->|Depends on| n132
  n121 -->|Verifies| n58
  n121 -->|Verifies| n55
  n121 -->|Verifies| n66
  n121 -->|Verifies| n63
  n121 -->|Verifies| n53
  n121 -->|Verifies| n102
  n121 -->|Verifies| n99
  n121 -->|In| n18
  n121 -->|Depends on| n58
  n121 -->|Depends on| n55
  n121 -->|Depends on| n102
  n121 -->|Depends on| n99
  n121 -->|Depends on| n68
  n121 -->|Depends on| n66
  n121 -->|Depends on| n46
  n121 -->|Depends on| n48
  n121 -->|Depends on| n35
  n121 -->|Depends on| n123
  n121 -->|Depends on| n132
  n122 -->|Depends on| n133
  n124 -->|Verifies| n60
  n124 -->|Verifies| n57
  n124 -->|Verifies| n58
  n124 -->|Verifies| n55
  n124 -->|Verifies| n101
  n124 -->|Verifies| n102
  n124 -->|Verifies| n99
  n124 -->|Verifies| n93
  n124 -->|Verifies| n89
  n124 -->|Verifies| n188
  n124 -->|Verifies| n130
  n124 -->|In| n18
  n124 -->|Depends on| n10
  n124 -->|Depends on| n19
  n124 -->|Depends on| n12
  n124 -->|Depends on| n59
  n124 -->|Depends on| n123
  n124 -->|Depends on| n35
  n124 -->|Depends on| n82
  n124 -->|Depends on| n132
  n125 -->|Verifies| n10
  n125 -->|Verifies| n4
  n125 -->|Verifies| n77
  n125 -->|Verifies| n80
  n125 -->|Verifies| n75
  n125 -->|Verifies| n76
  n125 -->|Verifies| n1
  n125 -->|Verifies| n122
  n125 -->|Verifies| n131
  n125 -->|In| n18
  n125 -->|Depends on| n10
  n125 -->|Depends on| n19
  n125 -->|Depends on| n81
  n125 -->|Depends on| n78
  n125 -->|Depends on| n79
  n125 -->|Depends on| n82
  n125 -->|Depends on| n83
  n125 -->|Depends on| n132
  n125 -->|Depends on| n68
  n125 -->|Depends on| n69
  n126 -->|Chooses| n131
  n126 -->|Chooses| n130
  n126 -->|Chooses| n122
  n126 -->|In| n18
  n127 -->|Verifies| n10
  n127 -->|Verifies| n101
  n127 -->|Verifies| n102
  n127 -->|Verifies| n99
  n127 -->|Verifies| n87
  n127 -->|Verifies| n85
  n127 -->|Verifies| n181
  n127 -->|In| n18
  n127 -->|Depends on| n10
  n127 -->|Depends on| n19
  n127 -->|Depends on| n59
  n127 -->|Depends on| n123
  n127 -->|Depends on| n82
  n127 -->|Depends on| n132
  n127 -->|Depends on| n68
  n127 -->|Depends on| n81
  n128 -->|Verifies| n187
  n128 -->|Verifies| n186
  n128 -->|Verifies| n184
  n128 -->|Verifies| n188
  n128 -->|Verifies| n182
  n128 -->|Verifies| n176
  n128 -->|Verifies| n10
  n128 -->|In| n18
  n128 -->|Depends on| n10
  n128 -->|Depends on| n19
  n128 -->|Depends on| n184
  n128 -->|Depends on| n135
  n128 -->|Depends on| n82
  n128 -->|Depends on| n132
  n129 -->|Verifies| n101
  n129 -->|Verifies| n102
  n129 -->|Verifies| n99
  n129 -->|Verifies| n10
  n129 -->|In| n18
  n129 -->|Depends on| n10
  n129 -->|Depends on| n19
  n129 -->|Depends on| n134
  n129 -->|Depends on| n82
  n129 -->|Depends on| n78
  n129 -->|Depends on| n132
  n130 -->|Implements| n11
  n130 -->|Implements| n12
  n131 -->|Implements| n16
  n131 -->|Implements| n19
  n132 -->|Written in| n78
  n137 -->|Serves| n119
  n139 -->|Serves| n119
  n140 -->|Serves| n119
  n141 -->|Reviews| n68
  n141 -->|Reviews| n69
  n141 -->|By the role| n175
  n142 -->|Serves| n111
  n143 -->|Serves| n119
  n145 -->|Checks| n150
  n145 -->|Signed by| n154
  n145 -->|Verifies| n191
  n146 -->|In| n144
  n147 -->|Verifies| n148
  n147 -->|Verifies| n153
  n147 -->|In| n18
  n147 -->|Depends on| n148
  n147 -->|Depends on| n150
  n147 -->|Depends on| n153
  n147 -->|Depends on| n173
  n147 -->|Depends on| n62
  n147 -->|Depends on| n172
  n147 -->|Depends on| n169
  n148 -->|Serves| n119
  n148 -->|Part of| n157
  n148 -->|Depends on| n150
  n148 -->|Depends on| n62
  n148 -->|Depends on| n153
  n148 -->|Depends on| n151
  n148 -->|Depends on| n173
  n149 -->|Serves| n119
  n150 -->|Produced by| n8
  n152 -->|Checks| n150
  n152 -->|Run by| n148
  n152 -->|Verifies| n0
  n152 -->|Verifies| n192
  n153 -->|Serves| n119
  n153 -->|Depends on| n9
  n153 -->|Depends on| n56
  n153 -->|Depends on| n100
  n155 -->|Serves| n119
  n155 -->|Part of| n157
  n155 -->|Depends on| n150
  n155 -->|Depends on| n174
  n155 -->|Depends on| n173
  n156 -->|Verifies| n155
  n156 -->|In| n18
  n156 -->|Depends on| n155
  n156 -->|Depends on| n150
  n156 -->|Depends on| n174
  n156 -->|Depends on| n172
  n156 -->|Depends on| n169
  n157 -->|Deployed in| n144
  n158 -->|Ships| n150
  n158 -->|Deployed by| n155
  n158 -->|Programs assembled for| n144
  n158 -->|Follows the policy| n159
  n159 -->|Its obligations| n140
  n159 -->|Its obligations| n164
  n159 -->|Its obligations| n167
  n159 -->|Its obligations| n149
  n161 -->|Runs elsewhere| n158
  n162 -->|Runs elsewhere| n158
  n162 -->|Its writer's settings| n160
  n162 -->|Makes available, once shipped| n150
  n163 -->|Serves| n119
  n164 -->|Serves| n119
  n165 -->|Its obligations| n139
  n165 -->|Its obligations| n163
  n165 -->|Its obligations| n143
  n165 -->|Its obligations| n142
  n165 -->|Its obligations| n137
  n165 -->|Its obligations| n167
  n165 -->|Its obligations| n149
  n166 -->|Ships| n150
  n166 -->|Deployed by| n155
  n166 -->|Programs assembled for| n144
  n166 -->|Follows the policy| n165
  n167 -->|Serves| n119
  n168 -->|Ships| n162
  n168 -->|Ships| n161
  n169 -->|Written in| n78
  n170 -->|In| n18
  n171 -->|Serves| n111
  n171 -->|Serves| n119
  n171 -->|Applied by| n158
  n171 -->|Applied by| n166
  n171 -->|Applied by| n152
  n171 -->|Applied by| n145
  n171 -->|Applied by| n141
  n171 -->|Applied by| n148
  n171 -->|Applied by| n155
  n171 -->|Applied by| n138
  n171 -->|Applied by| n136
  n171 -->|Applied by| n162
  n171 -->|Applied by| n161
  n171 -->|Applied by| n168
  n173 -->|Written in| n78
  n176 -->|Refines| n110
  n177 -->|Accepts| n176
  n179 -->|Refines| n110
  n180 -->|Accepts| n179
  n181 -->|Serves| n119
  n181 -->|Depends on| n81
  n182 -->|Refines| n110
  n183 -->|Accepts| n182
  n184 -->|Serves| n110
  n184 -->|Depends on| n81
  n184 -->|Depends on| n179
  n186 -->|Serves| n110
  n186 -->|Serves| n119
  n186 -->|Depends on| n80
  n186 -->|Depends on| n77
  n187 -->|Serves| n110
  n187 -->|Serves| n119
  n187 -->|Depends on| n16
  n187 -->|Depends on| n184
  n187 -->|Depends on| n188
  n187 -->|Depends on| n186
  n187 -->|Depends on| n176
  n187 -->|Depends on| n182
  n187 -->|Depends on| n114
  n188 -->|Serves| n119
  n188 -->|Depends on| n189
  n191 -->|Implements| n11
  n191 -->|Depends on| n190
  n192 -->|Implements| n17
  n192 -->|Uses| n197
  n192 -->|Uses| n198
  n192 -->|Depends on| n193
  n192 -->|Depends on| n195
  n192 -->|Depends on| n196
  n192 -->|Depends on| n194
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
  n68 -.->|Depends on| n114
  n69 -.->|Depends on| n61
  n69 -.->|Depends on| n108
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
  n89 -.->|Depends on| n71
  n108 -.->|Depends on| n114
  n176 -.->|Depends on| n178
  n179 -.->|Depends on| n178
  n182 -.->|Depends on| n178
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
