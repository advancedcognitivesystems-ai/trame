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
    n25["A foot from its angles<br/><small>Function</small>"]:::unknown
    n26["A foot on its way<br/><small>Requirement</small>"]:::held
    n27["Criteria of a foot on its way<br/><small>Acceptance criteria</small>"]:::held
    n28["A hand on its way<br/><small>Requirement</small>"]:::held
    n29["Criteria of a hand on its way<br/><small>Acceptance criteria</small>"]:::held
    n30["A pose ready to move<br/><small>Requirement</small>"]:::held
    n31["Criteria of a pose ready to move<br/><small>Acceptance criteria</small>"]:::held
    n32["A knee kept above the mat<br/><small>Decision</small>"]:::neutral
    n33["Legs apart<br/><small>Requirement</small>"]:::held
    n34["Criteria of legs apart<br/><small>Acceptance criteria</small>"]:::held
    n35["How far a limb keeps from flat<br/><small>Decision</small>"]:::neutral
    n36["Every limb reaches<br/><small>Requirement</small>"]:::held
    n37["Criteria of every limb that reaches<br/><small>Acceptance criteria</small>"]:::held
    n38["The space of the mat<br/><small>Function</small>"]:::held
    n39["How a body moves<br/><small>Decision</small>"]:::neutral
    n40["A leg on its foot<br/><small>Requirement</small>"]:::held
    n41["Criteria of a leg on its foot<br/><small>Acceptance criteria</small>"]:::held
    n42["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n43["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n44["The names of the sides<br/><small>Decision</small>"]:::neutral
    n45["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n46["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n47["Where a spot is<br/><small>Requirement</small>"]:::held
    n48["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n49["A leg that steps<br/><small>Requirement</small>"]:::held
    n50["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n51["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n52["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n53["Touching the floor<br/><small>Decision</small>"]:::neutral
    n54["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n55["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n56["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n57["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n58["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n59["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n60["A sequence composed<br/><small>Function</small>"]:::held
    n61["Names of the composer<br/><small>Decision</small>"]:::neutral
    n62["The composer<br/><small>Function</small>"]:::held
    n63["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n64["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n65["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n66["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n67["Languages offered<br/><small>Decision</small>"]:::neutral
    n68["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n69["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n70["The ways between levels<br/><small>Decision</small>"]:::neutral
    n71["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n72["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n73["Poses<br/><small>Dataset</small>"]:::unknown
    n74["Sequences<br/><small>Dataset</small>"]:::unknown
    n75["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n76["How long words take to say<br/><small>Requirement</small>"]:::held
    n77["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n78["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n79["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n80["The drawing of a pose<br/><small>Function</small>"]:::held
    n81["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n82["The app's language<br/><small>Function</small>"]:::held
    n83["English<br/><small>Decision</small>"]:::neutral
    n84["French<br/><small>Decision</small>"]:::neutral
    n85["Words of the interface<br/><small>Function</small>"]:::held
    n86["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n87["Words in English<br/><small>Message catalog</small>"]:::neutral
    n88["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n89["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n90["A landmark on the body<br/><small>Requirement</small>"]:::held
    n91["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n92["The landmarks of a pose<br/><small>Function</small>"]:::held
    n93["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n94["Continuous integration<br/><small>Package</small>"]:::neutral
    n95["Geometry<br/><small>Package</small>"]:::neutral
    n96["Trame<br/><small>Package</small>"]:::neutral
    n97["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n98["How a movement eases<br/><small>Decision</small>"]:::neutral
    n99["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n100["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n101["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n102["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n103["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n104["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n105["How full the lungs are<br/><small>Requirement</small>"]:::held
    n106["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n107["Where a practice is<br/><small>Requirement</small>"]:::held
    n108["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n109["The moment of a practice<br/><small>Function</small>"]:::held
    n110["Names of the player<br/><small>Decision</small>"]:::neutral
    n111["Play a practice<br/><small>Function</small>"]:::held
    n112["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n113["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n114["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n115["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n116["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n117["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n118["The breath of a moment<br/><small>Requirement</small>"]:::held
    n119["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n120["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n121["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n122["The language of the app<br/><small>Requirement</small>"]:::held
    n123["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n124["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n125["In the person's language<br/><small>Goal</small>"]:::neutral
    n126["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n127["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n128["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n129["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n130["The device's languages, given<br/><small>Function</small>"]:::held
    n131["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n132["Holding the poses<br/><small>Scenario</small>"]:::held
    n133["The language of the home page<br/><small>Scenario</small>"]:::held
    n134["The app in memory<br/><small>Technical choice</small>"]:::held
    n135["Learning a sequence<br/><small>Scenario</small>"]:::held
    n136["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n137["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n138["A bowl that counts<br/><small>Function</small>"]:::held
    n139["A screen that records<br/><small>Function</small>"]:::held
    n140["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n141["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n142["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n143["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n144["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n145["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n146["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n147["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n148["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n149["The content, reviewed<br/><small>Review</small>"]:::unknown
    n150["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n151["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n152["A machine<br/><small>Environment</small>"]:::neutral
    n153["On a phone<br/><small>Check</small>"]:::unknown
    n154["On the machine<br/><small>Technical choice</small>"]:::unknown
    n155["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n156["Open the page<br/><small>Entry point</small>"]:::held
    n157["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n158["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n159["How the page is opened<br/><small>Decision</small>"]:::neutral
    n160["The page opens<br/><small>Check</small>"]:::unknown
    n161["What the page is asked<br/><small>Function</small>"]:::held
    n162["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n163["Place the page<br/><small>Entry point</small>"]:::held
    n164["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n165["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n166["A preview<br/><small>Shipment</small>"]:::unknown
    n167["The way of a preview<br/><small>Policy</small>"]:::neutral
    n168["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n169["The preview's script<br/><small>Artefact</small>"]:::unknown
    n170["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n171["The product holds<br/><small>Obligation</small>"]:::neutral
    n172["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n173["The way of a public version<br/><small>Policy</small>"]:::neutral
    n174["A public version<br/><small>Shipment</small>"]:::unknown
    n175["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n176["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n177["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n178["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n179["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n180["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n181["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n182["Where the page is served<br/><small>Decision</small>"]:::neutral
    n183["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n184["A phase set by the person<br/><small>Requirement</small>"]:::held
    n185["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n186["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n187["A breath read back<br/><small>Requirement</small>"]:::held
    n188["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n189["The landmarks the person chose<br/><small>Function</small>"]:::held
    n190["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n191["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n192["The person's breath<br/><small>Function</small>"]:::held
    n193["Names of the settings<br/><small>Decision</small>"]:::neutral
    n194["The settings view<br/><small>Function</small>"]:::held
    n195["Show the settings<br/><small>Function</small>"]:::held
    n196["Tapping<br/><small>Decision</small>"]:::neutral
    n197["The voice the person chose<br/><small>Function</small>"]:::held
    n198["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n199["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n200["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n201["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n202["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n203["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n204["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n205["Light of the stage<br/><small>Decision</small>"]:::neutral
    n206["Views of the stage<br/><small>Decision</small>"]:::neutral
    n207["three.js<br/><small>Package</small>"]:::held
    n208["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n79
  n0 -->|Depends on| n110
  n0 -->|Depends on| n193
  n0 -->|Depends on| n61
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n73
  n1 -->|Depends on| n74
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n127
  n4 -->|Serves| n125
  n4 -->|Depends on| n85
  n4 -->|Depends on| n82
  n4 -->|Depends on| n67
  n4 -->|Depends on| n88
  n4 -->|Depends on| n87
  n4 -->|Depends on| n66
  n4 -->|Depends on| n80
  n4 -->|Depends on| n81
  n5 -->|Chooses| n0
  n5 -->|Chooses| n202
  n5 -->|Chooses| n200
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n80
  n7 -->|Styles| n109
  n7 -->|Styles| n194
  n7 -->|Styles| n62
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n84
  n8 -->|Styled by| n7
  n8 -->|Serves| n127
  n10 -->|Serves| n127
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n82
  n10 -->|Depends on| n111
  n10 -->|Depends on| n195
  n10 -->|Depends on| n192
  n10 -->|Depends on| n65
  n10 -->|Depends on| n64
  n15 -->|Deployed in| n13
  n20 -->|Refines| n127
  n21 -->|Accepts| n20
  n22 -->|Refines| n127
  n23 -->|Accepts| n22
  n25 -->|Serves| n127
  n25 -->|Depends on| n24
  n25 -->|Depends on| n39
  n25 -->|Depends on| n38
  n26 -->|Refines| n127
  n27 -->|Accepts| n26
  n28 -->|Refines| n127
  n28 -->|Depends on| n39
  n28 -->|Depends on| n38
  n29 -->|Accepts| n28
  n30 -->|Refines| n127
  n30 -->|Depends on| n54
  n30 -->|Depends on| n38
  n30 -->|Depends on| n44
  n31 -->|Accepts| n30
  n33 -->|Refines| n127
  n34 -->|Accepts| n33
  n36 -->|Refines| n127
  n36 -->|Refines| n121
  n37 -->|Accepts| n36
  n38 -->|Serves| n127
  n40 -->|Refines| n127
  n40 -->|Depends on| n24
  n40 -->|Depends on| n39
  n40 -->|Depends on| n38
  n40 -->|Depends on| n25
  n40 -->|Depends on| n56
  n40 -->|Depends on| n32
  n41 -->|Accepts| n40
  n42 -->|Refines| n127
  n42 -->|Refines| n121
  n43 -->|Accepts| n42
  n45 -->|Refines| n127
  n46 -->|Accepts| n45
  n47 -->|Refines| n127
  n48 -->|Accepts| n47
  n49 -->|Refines| n127
  n50 -->|Accepts| n49
  n51 -->|Refines| n127
  n52 -->|Accepts| n51
  n54 -->|Refines| n127
  n54 -->|Depends on| n24
  n54 -->|Depends on| n38
  n55 -->|Accepts| n54
  n56 -->|Refines| n127
  n56 -->|Depends on| n38
  n56 -->|Depends on| n35
  n57 -->|Accepts| n56
  n58 -->|Refines| n127
  n59 -->|Accepts| n58
  n60 -->|Serves| n127
  n60 -->|Depends on| n58
  n60 -->|Depends on| n68
  n60 -->|Depends on| n33
  n60 -->|Depends on| n88
  n60 -->|Depends on| n87
  n62 -->|Serves| n127
  n62 -->|Depends on| n85
  n62 -->|Depends on| n82
  n62 -->|Depends on| n80
  n62 -->|Depends on| n81
  n62 -->|Depends on| n71
  n62 -->|Depends on| n68
  n63 -->|Serves| n127
  n63 -->|Depends on| n70
  n63 -->|Depends on| n71
  n65 -->|Serves| n127
  n65 -->|Depends on| n16
  n65 -->|Depends on| n62
  n65 -->|Depends on| n63
  n65 -->|Depends on| n60
  n65 -->|Depends on| n64
  n65 -->|Depends on| n111
  n68 -->|Refines| n127
  n69 -->|Accepts| n68
  n71 -->|Refines| n127
  n71 -->|Depends on| n70
  n72 -->|Accepts| n71
  n73 -->|Languages offered| n67
  n73 -->|Serves| n127
  n74 -->|Languages offered| n67
  n74 -->|Serves| n127
  n76 -->|Refines| n127
  n76 -->|Depends on| n75
  n77 -->|Accepts| n76
  n80 -->|Serves| n127
  n80 -->|Depends on| n24
  n80 -->|Depends on| n78
  n80 -->|Depends on| n79
  n81 -->|Serves| n127
  n81 -->|Depends on| n30
  n81 -->|Depends on| n22
  n82 -->|Serves| n125
  n82 -->|Depends on| n67
  n82 -->|Depends on| n122
  n82 -->|Depends on| n86
  n85 -->|Serves| n125
  n85 -->|Depends on| n88
  n85 -->|Depends on| n87
  n85 -->|Depends on| n82
  n87 -->|Written in| n83
  n87 -->|Translates| n88
  n88 -->|Written in| n84
  n90 -->|Refines| n127
  n91 -->|Accepts| n90
  n92 -->|Serves| n127
  n92 -->|Depends on| n90
  n92 -->|Depends on| n85
  n92 -->|Depends on| n82
  n94 -->|Serves| n127
  n95 -->|Serves| n127
  n96 -->|Serves| n127
  n97 -->|Serves| n127
  n99 -->|Refines| n120
  n99 -->|Depends on| n76
  n100 -->|Accepts| n99
  n101 -->|Refines| n120
  n101 -->|Depends on| n98
  n102 -->|Accepts| n101
  n103 -->|Refines| n120
  n104 -->|Accepts| n103
  n105 -->|Refines| n120
  n106 -->|Accepts| n105
  n107 -->|Refines| n120
  n108 -->|Accepts| n107
  n109 -->|Serves| n127
  n109 -->|Serves| n120
  n109 -->|Depends on| n107
  n109 -->|Depends on| n101
  n109 -->|Depends on| n105
  n109 -->|Depends on| n22
  n109 -->|Depends on| n92
  n109 -->|Depends on| n45
  n109 -->|Depends on| n93
  n109 -->|Depends on| n85
  n109 -->|Depends on| n82
  n109 -->|Depends on| n66
  n111 -->|Serves| n127
  n111 -->|Depends on| n16
  n111 -->|Depends on| n11
  n111 -->|Depends on| n197
  n111 -->|Depends on| n189
  n111 -->|Depends on| n112
  n111 -->|Depends on| n109
  n111 -->|Depends on| n85
  n111 -->|Depends on| n82
  n111 -->|Depends on| n206
  n112 -->|Serves| n127
  n112 -->|Serves| n120
  n112 -->|Depends on| n118
  n112 -->|Depends on| n30
  n112 -->|Depends on| n103
  n112 -->|Depends on| n99
  n113 -->|Serves| n120
  n113 -->|Applied by| n118
  n113 -->|Applied by| n103
  n114 -->|Serves| n121
  n114 -->|Applied by| n73
  n114 -->|Applied by| n14
  n115 -->|Serves| n125
  n115 -->|Applied by| n67
  n115 -->|Applied by| n122
  n116 -->|Serves| n127
  n116 -->|Applied by| n15
  n116 -->|Applied by| n8
  n116 -->|Applied by| n160
  n117 -->|Serves| n127
  n117 -->|Applied by| n126
  n117 -->|Applied by| n111
  n118 -->|Refines| n120
  n118 -->|Depends on| n124
  n119 -->|Accepts| n118
  n122 -->|Refines| n125
  n123 -->|Accepts| n122
  n128 -->|Verifies| n112
  n128 -->|Verifies| n109
  n128 -->|Verifies| n111
  n128 -->|Verifies| n22
  n128 -->|Verifies| n51
  n128 -->|Verifies| n49
  n128 -->|Verifies| n40
  n128 -->|Verifies| n28
  n128 -->|Verifies| n26
  n128 -->|Verifies| n38
  n128 -->|Verifies| n30
  n128 -->|Verifies| n54
  n128 -->|Verifies| n56
  n128 -->|In| n18
  n128 -->|Depends on| n10
  n128 -->|Depends on| n19
  n128 -->|Depends on| n142
  n128 -->|Depends on| n51
  n128 -->|Depends on| n53
  n128 -->|Depends on| n39
  n128 -->|Depends on| n87
  n128 -->|Depends on| n140
  n129 -->|Verifies| n63
  n129 -->|Verifies| n60
  n129 -->|Verifies| n71
  n129 -->|Verifies| n68
  n129 -->|Verifies| n58
  n129 -->|Verifies| n112
  n129 -->|Verifies| n109
  n129 -->|In| n18
  n129 -->|Depends on| n63
  n129 -->|Depends on| n60
  n129 -->|Depends on| n112
  n129 -->|Depends on| n109
  n129 -->|Depends on| n73
  n129 -->|Depends on| n71
  n129 -->|Depends on| n51
  n129 -->|Depends on| n53
  n129 -->|Depends on| n39
  n129 -->|Depends on| n131
  n129 -->|Depends on| n140
  n130 -->|Depends on| n141
  n132 -->|Verifies| n65
  n132 -->|Verifies| n62
  n132 -->|Verifies| n63
  n132 -->|Verifies| n60
  n132 -->|Verifies| n111
  n132 -->|Verifies| n112
  n132 -->|Verifies| n109
  n132 -->|Verifies| n103
  n132 -->|Verifies| n99
  n132 -->|Verifies| n197
  n132 -->|Verifies| n138
  n132 -->|In| n18
  n132 -->|Depends on| n10
  n132 -->|Depends on| n19
  n132 -->|Depends on| n12
  n132 -->|Depends on| n64
  n132 -->|Depends on| n131
  n132 -->|Depends on| n39
  n132 -->|Depends on| n87
  n132 -->|Depends on| n140
  n133 -->|Verifies| n10
  n133 -->|Verifies| n4
  n133 -->|Verifies| n82
  n133 -->|Verifies| n85
  n133 -->|Verifies| n80
  n133 -->|Verifies| n81
  n133 -->|Verifies| n1
  n133 -->|Verifies| n130
  n133 -->|Verifies| n139
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n86
  n133 -->|Depends on| n83
  n133 -->|Depends on| n84
  n133 -->|Depends on| n87
  n133 -->|Depends on| n88
  n133 -->|Depends on| n140
  n133 -->|Depends on| n73
  n133 -->|Depends on| n74
  n134 -->|Chooses| n139
  n134 -->|Chooses| n138
  n134 -->|Chooses| n130
  n134 -->|In| n18
  n135 -->|Verifies| n10
  n135 -->|Verifies| n111
  n135 -->|Verifies| n112
  n135 -->|Verifies| n109
  n135 -->|Verifies| n92
  n135 -->|Verifies| n90
  n135 -->|Verifies| n189
  n135 -->|In| n18
  n135 -->|Depends on| n10
  n135 -->|Depends on| n19
  n135 -->|Depends on| n64
  n135 -->|Depends on| n131
  n135 -->|Depends on| n87
  n135 -->|Depends on| n140
  n135 -->|Depends on| n73
  n135 -->|Depends on| n86
  n136 -->|Verifies| n195
  n136 -->|Verifies| n194
  n136 -->|Verifies| n192
  n136 -->|Verifies| n197
  n136 -->|Verifies| n190
  n136 -->|Verifies| n184
  n136 -->|Verifies| n10
  n136 -->|In| n18
  n136 -->|Depends on| n10
  n136 -->|Depends on| n19
  n136 -->|Depends on| n192
  n136 -->|Depends on| n143
  n136 -->|Depends on| n87
  n136 -->|Depends on| n140
  n137 -->|Verifies| n111
  n137 -->|Verifies| n112
  n137 -->|Verifies| n109
  n137 -->|Verifies| n10
  n137 -->|In| n18
  n137 -->|Depends on| n10
  n137 -->|Depends on| n19
  n137 -->|Depends on| n142
  n137 -->|Depends on| n87
  n137 -->|Depends on| n83
  n137 -->|Depends on| n140
  n138 -->|Implements| n11
  n138 -->|Implements| n12
  n139 -->|Implements| n16
  n139 -->|Implements| n19
  n140 -->|Written in| n83
  n145 -->|Serves| n127
  n147 -->|Serves| n127
  n148 -->|Serves| n127
  n149 -->|Reviews| n73
  n149 -->|Reviews| n74
  n149 -->|By the role| n183
  n150 -->|Serves| n121
  n151 -->|Serves| n127
  n153 -->|Checks| n158
  n153 -->|Signed by| n162
  n153 -->|Verifies| n200
  n154 -->|In| n152
  n155 -->|Verifies| n156
  n155 -->|Verifies| n161
  n155 -->|In| n18
  n155 -->|Depends on| n156
  n155 -->|Depends on| n158
  n155 -->|Depends on| n161
  n155 -->|Depends on| n181
  n155 -->|Depends on| n67
  n155 -->|Depends on| n180
  n155 -->|Depends on| n177
  n156 -->|Serves| n127
  n156 -->|Part of| n165
  n156 -->|Depends on| n158
  n156 -->|Depends on| n67
  n156 -->|Depends on| n161
  n156 -->|Depends on| n159
  n156 -->|Depends on| n181
  n157 -->|Serves| n127
  n158 -->|Produced by| n8
  n160 -->|Checks| n158
  n160 -->|Run by| n156
  n160 -->|Verifies| n0
  n160 -->|Verifies| n202
  n161 -->|Serves| n127
  n161 -->|Depends on| n9
  n161 -->|Depends on| n61
  n161 -->|Depends on| n110
  n163 -->|Serves| n127
  n163 -->|Part of| n165
  n163 -->|Depends on| n158
  n163 -->|Depends on| n182
  n163 -->|Depends on| n181
  n164 -->|Verifies| n163
  n164 -->|In| n18
  n164 -->|Depends on| n163
  n164 -->|Depends on| n158
  n164 -->|Depends on| n182
  n164 -->|Depends on| n180
  n164 -->|Depends on| n177
  n165 -->|Deployed in| n152
  n166 -->|Ships| n158
  n166 -->|Deployed by| n163
  n166 -->|Programs assembled for| n152
  n166 -->|Follows the policy| n167
  n167 -->|Its obligations| n148
  n167 -->|Its obligations| n172
  n167 -->|Its obligations| n175
  n167 -->|Its obligations| n157
  n169 -->|Runs elsewhere| n166
  n170 -->|Runs elsewhere| n166
  n170 -->|Its writer's settings| n168
  n170 -->|Makes available, once shipped| n158
  n171 -->|Serves| n127
  n172 -->|Serves| n127
  n173 -->|Its obligations| n147
  n173 -->|Its obligations| n171
  n173 -->|Its obligations| n151
  n173 -->|Its obligations| n150
  n173 -->|Its obligations| n145
  n173 -->|Its obligations| n175
  n173 -->|Its obligations| n157
  n174 -->|Ships| n158
  n174 -->|Deployed by| n163
  n174 -->|Programs assembled for| n152
  n174 -->|Follows the policy| n173
  n175 -->|Serves| n127
  n176 -->|Ships| n170
  n176 -->|Ships| n169
  n177 -->|Written in| n83
  n178 -->|In| n18
  n179 -->|Serves| n121
  n179 -->|Serves| n127
  n179 -->|Applied by| n166
  n179 -->|Applied by| n174
  n179 -->|Applied by| n160
  n179 -->|Applied by| n153
  n179 -->|Applied by| n149
  n179 -->|Applied by| n156
  n179 -->|Applied by| n163
  n179 -->|Applied by| n146
  n179 -->|Applied by| n144
  n179 -->|Applied by| n170
  n179 -->|Applied by| n169
  n179 -->|Applied by| n176
  n181 -->|Written in| n83
  n184 -->|Refines| n120
  n184 -->|Depends on| n186
  n185 -->|Accepts| n184
  n187 -->|Refines| n120
  n187 -->|Depends on| n186
  n188 -->|Accepts| n187
  n189 -->|Serves| n127
  n189 -->|Depends on| n86
  n190 -->|Refines| n120
  n190 -->|Depends on| n186
  n190 -->|Depends on| n196
  n191 -->|Accepts| n190
  n192 -->|Serves| n120
  n192 -->|Depends on| n86
  n192 -->|Depends on| n187
  n194 -->|Serves| n120
  n194 -->|Serves| n127
  n194 -->|Depends on| n85
  n194 -->|Depends on| n82
  n195 -->|Serves| n120
  n195 -->|Serves| n127
  n195 -->|Depends on| n16
  n195 -->|Depends on| n192
  n195 -->|Depends on| n197
  n195 -->|Depends on| n194
  n195 -->|Depends on| n184
  n195 -->|Depends on| n190
  n195 -->|Depends on| n124
  n197 -->|Serves| n127
  n197 -->|Depends on| n198
  n200 -->|Implements| n11
  n200 -->|Depends on| n199
  n202 -->|Implements| n17
  n202 -->|Uses| n207
  n202 -->|Uses| n208
  n202 -->|Depends on| n203
  n202 -->|Depends on| n205
  n202 -->|Depends on| n206
  n202 -->|Depends on| n204
  n22 -.->|Depends on| n24
  n22 -.->|Depends on| n39
  n22 -.->|Depends on| n54
  n22 -.->|Depends on| n49
  n22 -.->|Depends on| n26
  n22 -.->|Depends on| n40
  n22 -.->|Depends on| n28
  n22 -.->|Depends on| n56
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n30
  n23 -.->|Depends on| n39
  n26 -.->|Depends on| n39
  n29 -.->|Depends on| n39
  n36 -.->|Depends on| n30
  n36 -.->|Depends on| n22
  n41 -.->|Depends on| n24
  n42 -.->|Depends on| n30
  n42 -.->|Depends on| n51
  n42 -.->|Depends on| n22
  n42 -.->|Depends on| n53
  n48 -.->|Depends on| n30
  n48 -.->|Depends on| n22
  n49 -.->|Depends on| n24
  n49 -.->|Depends on| n56
  n51 -.->|Depends on| n24
  n52 -.->|Depends on| n30
  n52 -.->|Depends on| n22
  n55 -.->|Depends on| n24
  n58 -.->|Depends on| n30
  n58 -.->|Depends on| n22
  n72 -.->|Depends on| n70
  n72 -.->|Depends on| n33
  n72 -.->|Depends on| n30
  n72 -.->|Depends on| n68
  n72 -.->|Depends on| n39
  n72 -.->|Depends on| n51
  n72 -.->|Depends on| n22
  n72 -.->|Depends on| n53
  n73 -.->|Depends on| n42
  n73 -.->|Depends on| n36
  n73 -.->|Depends on| n76
  n73 -.->|Depends on| n124
  n74 -.->|Depends on| n66
  n74 -.->|Depends on| n118
  n74 -.->|Depends on| n76
  n74 -.->|Depends on| n33
  n74 -.->|Depends on| n71
  n90 -.->|Depends on| n89
  n90 -.->|Depends on| n47
  n90 -.->|Depends on| n20
  n91 -.->|Depends on| n30
  n91 -.->|Depends on| n22
  n91 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n201 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
