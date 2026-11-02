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
    n35["The space of the mat<br/><small>Function</small>"]:::unknown
    n36["How a body moves<br/><small>Decision</small>"]:::neutral
    n37["A leg on its foot<br/><small>Requirement</small>"]:::held
    n38["Criteria of a leg on its foot<br/><small>Acceptance criteria</small>"]:::held
    n39["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n40["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n41["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n42["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n43["Where a spot is<br/><small>Requirement</small>"]:::held
    n44["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n45["A leg that steps<br/><small>Requirement</small>"]:::held
    n46["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n47["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n48["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n49["Touching the floor<br/><small>Decision</small>"]:::neutral
    n50["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n51["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n52["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n53["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n54["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n55["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n56["A sequence composed<br/><small>Function</small>"]:::held
    n57["Names of the composer<br/><small>Decision</small>"]:::neutral
    n58["The composer<br/><small>Function</small>"]:::held
    n59["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n60["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n61["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n62["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n63["Languages offered<br/><small>Decision</small>"]:::neutral
    n64["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n65["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n66["The ways between levels<br/><small>Decision</small>"]:::neutral
    n67["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n68["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n69["Poses<br/><small>Dataset</small>"]:::unknown
    n70["Sequences<br/><small>Dataset</small>"]:::unknown
    n71["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n72["How long words take to say<br/><small>Requirement</small>"]:::held
    n73["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n74["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n75["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n76["The drawing of a pose<br/><small>Function</small>"]:::held
    n77["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n78["The app's language<br/><small>Function</small>"]:::held
    n79["English<br/><small>Decision</small>"]:::neutral
    n80["French<br/><small>Decision</small>"]:::neutral
    n81["Words of the interface<br/><small>Function</small>"]:::held
    n82["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n83["Words in English<br/><small>Message catalog</small>"]:::neutral
    n84["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n85["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n86["A landmark on the body<br/><small>Requirement</small>"]:::held
    n87["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n88["The landmarks of a pose<br/><small>Function</small>"]:::held
    n89["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n90["Continuous integration<br/><small>Package</small>"]:::neutral
    n91["Geometry<br/><small>Package</small>"]:::neutral
    n92["Trame<br/><small>Package</small>"]:::neutral
    n93["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n94["How a movement eases<br/><small>Decision</small>"]:::neutral
    n95["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n96["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n97["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n98["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n99["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n100["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n101["How full the lungs are<br/><small>Requirement</small>"]:::held
    n102["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n103["Where a practice is<br/><small>Requirement</small>"]:::held
    n104["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n105["The moment of a practice<br/><small>Function</small>"]:::held
    n106["Names of the player<br/><small>Decision</small>"]:::neutral
    n107["Play a practice<br/><small>Function</small>"]:::held
    n108["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n109["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n110["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n111["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n112["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n113["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n114["The breath of a moment<br/><small>Requirement</small>"]:::held
    n115["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n116["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n117["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n118["The language of the app<br/><small>Requirement</small>"]:::held
    n119["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n120["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
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
  subgraph space["Poselia · Space"]
    n197["The axes of the mat<br/><small>Amendment</small>"]:::neutral
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
  n0 -->|Depends on| n75
  n0 -->|Depends on| n106
  n0 -->|Depends on| n189
  n0 -->|Depends on| n57
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n69
  n1 -->|Depends on| n70
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n123
  n4 -->|Serves| n121
  n4 -->|Depends on| n81
  n4 -->|Depends on| n78
  n4 -->|Depends on| n63
  n4 -->|Depends on| n84
  n4 -->|Depends on| n83
  n4 -->|Depends on| n62
  n4 -->|Depends on| n76
  n4 -->|Depends on| n77
  n5 -->|Chooses| n0
  n5 -->|Chooses| n198
  n5 -->|Chooses| n196
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n76
  n7 -->|Styles| n105
  n7 -->|Styles| n190
  n7 -->|Styles| n58
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n80
  n8 -->|Styled by| n7
  n8 -->|Serves| n123
  n10 -->|Serves| n123
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n78
  n10 -->|Depends on| n107
  n10 -->|Depends on| n191
  n10 -->|Depends on| n188
  n10 -->|Depends on| n61
  n10 -->|Depends on| n60
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
  n33 -->|Refines| n117
  n34 -->|Accepts| n33
  n35 -->|Serves| n123
  n37 -->|Refines| n123
  n38 -->|Accepts| n37
  n39 -->|Refines| n123
  n39 -->|Refines| n117
  n40 -->|Accepts| n39
  n41 -->|Refines| n123
  n42 -->|Accepts| n41
  n43 -->|Refines| n123
  n44 -->|Accepts| n43
  n45 -->|Refines| n123
  n46 -->|Accepts| n45
  n47 -->|Refines| n123
  n48 -->|Accepts| n47
  n50 -->|Refines| n123
  n50 -->|Depends on| n24
  n50 -->|Depends on| n35
  n51 -->|Accepts| n50
  n52 -->|Refines| n123
  n53 -->|Accepts| n52
  n54 -->|Refines| n123
  n55 -->|Accepts| n54
  n56 -->|Serves| n123
  n56 -->|Depends on| n54
  n56 -->|Depends on| n64
  n56 -->|Depends on| n31
  n56 -->|Depends on| n84
  n56 -->|Depends on| n83
  n58 -->|Serves| n123
  n58 -->|Depends on| n81
  n58 -->|Depends on| n78
  n58 -->|Depends on| n76
  n58 -->|Depends on| n77
  n58 -->|Depends on| n67
  n58 -->|Depends on| n64
  n59 -->|Serves| n123
  n59 -->|Depends on| n66
  n59 -->|Depends on| n67
  n61 -->|Serves| n123
  n61 -->|Depends on| n16
  n61 -->|Depends on| n58
  n61 -->|Depends on| n59
  n61 -->|Depends on| n56
  n61 -->|Depends on| n60
  n61 -->|Depends on| n107
  n64 -->|Refines| n123
  n65 -->|Accepts| n64
  n67 -->|Refines| n123
  n67 -->|Depends on| n66
  n68 -->|Accepts| n67
  n69 -->|Languages offered| n63
  n69 -->|Serves| n123
  n70 -->|Languages offered| n63
  n70 -->|Serves| n123
  n72 -->|Refines| n123
  n72 -->|Depends on| n71
  n73 -->|Accepts| n72
  n76 -->|Serves| n123
  n76 -->|Depends on| n24
  n76 -->|Depends on| n74
  n76 -->|Depends on| n75
  n77 -->|Serves| n123
  n77 -->|Depends on| n29
  n77 -->|Depends on| n22
  n78 -->|Serves| n121
  n78 -->|Depends on| n63
  n78 -->|Depends on| n118
  n78 -->|Depends on| n82
  n81 -->|Serves| n121
  n81 -->|Depends on| n84
  n81 -->|Depends on| n83
  n81 -->|Depends on| n78
  n83 -->|Written in| n79
  n83 -->|Translates| n84
  n84 -->|Written in| n80
  n86 -->|Refines| n123
  n87 -->|Accepts| n86
  n88 -->|Serves| n123
  n88 -->|Depends on| n86
  n88 -->|Depends on| n81
  n88 -->|Depends on| n78
  n90 -->|Serves| n123
  n91 -->|Serves| n123
  n92 -->|Serves| n123
  n93 -->|Serves| n123
  n95 -->|Refines| n116
  n95 -->|Depends on| n72
  n96 -->|Accepts| n95
  n97 -->|Refines| n116
  n97 -->|Depends on| n94
  n98 -->|Accepts| n97
  n99 -->|Refines| n116
  n100 -->|Accepts| n99
  n101 -->|Refines| n116
  n102 -->|Accepts| n101
  n103 -->|Refines| n116
  n104 -->|Accepts| n103
  n105 -->|Serves| n123
  n105 -->|Serves| n116
  n105 -->|Depends on| n103
  n105 -->|Depends on| n97
  n105 -->|Depends on| n101
  n105 -->|Depends on| n22
  n105 -->|Depends on| n88
  n105 -->|Depends on| n41
  n105 -->|Depends on| n89
  n105 -->|Depends on| n81
  n105 -->|Depends on| n78
  n105 -->|Depends on| n62
  n107 -->|Serves| n123
  n107 -->|Depends on| n16
  n107 -->|Depends on| n11
  n107 -->|Depends on| n193
  n107 -->|Depends on| n185
  n107 -->|Depends on| n108
  n107 -->|Depends on| n105
  n107 -->|Depends on| n81
  n107 -->|Depends on| n78
  n107 -->|Depends on| n202
  n108 -->|Serves| n123
  n108 -->|Serves| n116
  n108 -->|Depends on| n114
  n108 -->|Depends on| n29
  n108 -->|Depends on| n99
  n108 -->|Depends on| n95
  n109 -->|Serves| n116
  n109 -->|Applied by| n114
  n109 -->|Applied by| n99
  n110 -->|Serves| n117
  n110 -->|Applied by| n69
  n110 -->|Applied by| n14
  n111 -->|Serves| n121
  n111 -->|Applied by| n63
  n111 -->|Applied by| n118
  n112 -->|Serves| n123
  n112 -->|Applied by| n15
  n112 -->|Applied by| n8
  n112 -->|Applied by| n156
  n113 -->|Serves| n123
  n113 -->|Applied by| n122
  n113 -->|Applied by| n107
  n114 -->|Refines| n116
  n114 -->|Depends on| n120
  n115 -->|Accepts| n114
  n118 -->|Refines| n121
  n119 -->|Accepts| n118
  n124 -->|Verifies| n108
  n124 -->|Verifies| n105
  n124 -->|Verifies| n107
  n124 -->|Verifies| n22
  n124 -->|Verifies| n47
  n124 -->|Verifies| n45
  n124 -->|Verifies| n37
  n124 -->|Verifies| n27
  n124 -->|Verifies| n25
  n124 -->|In| n18
  n124 -->|Depends on| n10
  n124 -->|Depends on| n19
  n124 -->|Depends on| n138
  n124 -->|Depends on| n47
  n124 -->|Depends on| n49
  n124 -->|Depends on| n36
  n124 -->|Depends on| n83
  n124 -->|Depends on| n136
  n125 -->|Verifies| n59
  n125 -->|Verifies| n56
  n125 -->|Verifies| n67
  n125 -->|Verifies| n64
  n125 -->|Verifies| n54
  n125 -->|Verifies| n108
  n125 -->|Verifies| n105
  n125 -->|In| n18
  n125 -->|Depends on| n59
  n125 -->|Depends on| n56
  n125 -->|Depends on| n108
  n125 -->|Depends on| n105
  n125 -->|Depends on| n69
  n125 -->|Depends on| n67
  n125 -->|Depends on| n47
  n125 -->|Depends on| n49
  n125 -->|Depends on| n36
  n125 -->|Depends on| n127
  n125 -->|Depends on| n136
  n126 -->|Depends on| n137
  n128 -->|Verifies| n61
  n128 -->|Verifies| n58
  n128 -->|Verifies| n59
  n128 -->|Verifies| n56
  n128 -->|Verifies| n107
  n128 -->|Verifies| n108
  n128 -->|Verifies| n105
  n128 -->|Verifies| n99
  n128 -->|Verifies| n95
  n128 -->|Verifies| n193
  n128 -->|Verifies| n134
  n128 -->|In| n18
  n128 -->|Depends on| n10
  n128 -->|Depends on| n19
  n128 -->|Depends on| n12
  n128 -->|Depends on| n60
  n128 -->|Depends on| n127
  n128 -->|Depends on| n36
  n128 -->|Depends on| n83
  n128 -->|Depends on| n136
  n129 -->|Verifies| n10
  n129 -->|Verifies| n4
  n129 -->|Verifies| n78
  n129 -->|Verifies| n81
  n129 -->|Verifies| n76
  n129 -->|Verifies| n77
  n129 -->|Verifies| n1
  n129 -->|Verifies| n126
  n129 -->|Verifies| n135
  n129 -->|In| n18
  n129 -->|Depends on| n10
  n129 -->|Depends on| n19
  n129 -->|Depends on| n82
  n129 -->|Depends on| n79
  n129 -->|Depends on| n80
  n129 -->|Depends on| n83
  n129 -->|Depends on| n84
  n129 -->|Depends on| n136
  n129 -->|Depends on| n69
  n129 -->|Depends on| n70
  n130 -->|Chooses| n135
  n130 -->|Chooses| n134
  n130 -->|Chooses| n126
  n130 -->|In| n18
  n131 -->|Verifies| n10
  n131 -->|Verifies| n107
  n131 -->|Verifies| n108
  n131 -->|Verifies| n105
  n131 -->|Verifies| n88
  n131 -->|Verifies| n86
  n131 -->|Verifies| n185
  n131 -->|In| n18
  n131 -->|Depends on| n10
  n131 -->|Depends on| n19
  n131 -->|Depends on| n60
  n131 -->|Depends on| n127
  n131 -->|Depends on| n83
  n131 -->|Depends on| n136
  n131 -->|Depends on| n69
  n131 -->|Depends on| n82
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
  n132 -->|Depends on| n83
  n132 -->|Depends on| n136
  n133 -->|Verifies| n107
  n133 -->|Verifies| n108
  n133 -->|Verifies| n105
  n133 -->|Verifies| n10
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n138
  n133 -->|Depends on| n83
  n133 -->|Depends on| n79
  n133 -->|Depends on| n136
  n134 -->|Implements| n11
  n134 -->|Implements| n12
  n135 -->|Implements| n16
  n135 -->|Implements| n19
  n136 -->|Written in| n79
  n141 -->|Serves| n123
  n143 -->|Serves| n123
  n144 -->|Serves| n123
  n145 -->|Reviews| n69
  n145 -->|Reviews| n70
  n145 -->|By the role| n179
  n146 -->|Serves| n117
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
  n151 -->|Depends on| n63
  n151 -->|Depends on| n176
  n151 -->|Depends on| n173
  n152 -->|Serves| n123
  n152 -->|Part of| n161
  n152 -->|Depends on| n154
  n152 -->|Depends on| n63
  n152 -->|Depends on| n157
  n152 -->|Depends on| n155
  n152 -->|Depends on| n177
  n153 -->|Serves| n123
  n154 -->|Produced by| n8
  n156 -->|Checks| n154
  n156 -->|Run by| n152
  n156 -->|Verifies| n0
  n156 -->|Verifies| n198
  n157 -->|Serves| n123
  n157 -->|Depends on| n9
  n157 -->|Depends on| n57
  n157 -->|Depends on| n106
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
  n173 -->|Written in| n79
  n174 -->|In| n18
  n175 -->|Serves| n117
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
  n177 -->|Written in| n79
  n180 -->|Refines| n116
  n180 -->|Depends on| n182
  n181 -->|Accepts| n180
  n183 -->|Refines| n116
  n183 -->|Depends on| n182
  n184 -->|Accepts| n183
  n185 -->|Serves| n123
  n185 -->|Depends on| n82
  n186 -->|Refines| n116
  n186 -->|Depends on| n182
  n186 -->|Depends on| n192
  n187 -->|Accepts| n186
  n188 -->|Serves| n116
  n188 -->|Depends on| n82
  n188 -->|Depends on| n183
  n190 -->|Serves| n116
  n190 -->|Serves| n123
  n190 -->|Depends on| n81
  n190 -->|Depends on| n78
  n191 -->|Serves| n116
  n191 -->|Serves| n123
  n191 -->|Depends on| n16
  n191 -->|Depends on| n188
  n191 -->|Depends on| n193
  n191 -->|Depends on| n190
  n191 -->|Depends on| n180
  n191 -->|Depends on| n186
  n191 -->|Depends on| n120
  n193 -->|Serves| n123
  n193 -->|Depends on| n194
  n196 -->|Implements| n11
  n196 -->|Depends on| n195
  n198 -->|Implements| n17
  n198 -->|Uses| n203
  n198 -->|Uses| n204
  n198 -->|Depends on| n199
  n198 -->|Depends on| n201
  n198 -->|Depends on| n202
  n198 -->|Depends on| n200
  n22 -.->|Depends on| n24
  n22 -.->|Depends on| n36
  n22 -.->|Depends on| n50
  n22 -.->|Depends on| n45
  n22 -.->|Depends on| n25
  n22 -.->|Depends on| n37
  n22 -.->|Depends on| n27
  n22 -.->|Depends on| n52
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n29
  n23 -.->|Depends on| n36
  n25 -.->|Depends on| n36
  n27 -.->|Depends on| n36
  n28 -.->|Depends on| n36
  n29 -.->|Depends on| n50
  n33 -.->|Depends on| n29
  n33 -.->|Depends on| n22
  n37 -.->|Depends on| n24
  n37 -.->|Depends on| n36
  n37 -.->|Depends on| n52
  n38 -.->|Depends on| n24
  n39 -.->|Depends on| n29
  n39 -.->|Depends on| n47
  n39 -.->|Depends on| n22
  n39 -.->|Depends on| n49
  n44 -.->|Depends on| n29
  n44 -.->|Depends on| n22
  n45 -.->|Depends on| n24
  n45 -.->|Depends on| n52
  n47 -.->|Depends on| n24
  n48 -.->|Depends on| n29
  n48 -.->|Depends on| n22
  n51 -.->|Depends on| n24
  n54 -.->|Depends on| n29
  n54 -.->|Depends on| n22
  n68 -.->|Depends on| n66
  n68 -.->|Depends on| n31
  n68 -.->|Depends on| n29
  n68 -.->|Depends on| n64
  n68 -.->|Depends on| n36
  n68 -.->|Depends on| n47
  n68 -.->|Depends on| n22
  n68 -.->|Depends on| n49
  n69 -.->|Depends on| n39
  n69 -.->|Depends on| n33
  n69 -.->|Depends on| n72
  n69 -.->|Depends on| n120
  n70 -.->|Depends on| n62
  n70 -.->|Depends on| n114
  n70 -.->|Depends on| n72
  n70 -.->|Depends on| n31
  n70 -.->|Depends on| n67
  n86 -.->|Depends on| n85
  n86 -.->|Depends on| n43
  n86 -.->|Depends on| n20
  n87 -.->|Depends on| n29
  n87 -.->|Depends on| n22
  n87 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n197 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
