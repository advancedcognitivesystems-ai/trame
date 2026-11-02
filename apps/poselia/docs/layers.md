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
    n51["A leg that steps<br/><small>Requirement</small>"]:::held
    n52["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n53["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n54["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n55["Touching the floor<br/><small>Decision</small>"]:::neutral
    n56["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n57["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n58["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n59["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n60["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n61["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n62["A sequence composed<br/><small>Function</small>"]:::held
    n63["Names of the composer<br/><small>Decision</small>"]:::neutral
    n64["The composer<br/><small>Function</small>"]:::held
    n65["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n66["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n67["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n68["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n69["Languages offered<br/><small>Decision</small>"]:::neutral
    n70["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n71["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n72["The ways between levels<br/><small>Decision</small>"]:::neutral
    n73["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n74["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n75["Poses<br/><small>Dataset</small>"]:::unknown
    n76["Sequences<br/><small>Dataset</small>"]:::unknown
    n77["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n78["How long words take to say<br/><small>Requirement</small>"]:::held
    n79["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n80["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n81["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n82["The drawing of a pose<br/><small>Function</small>"]:::held
    n83["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n84["The app's language<br/><small>Function</small>"]:::held
    n85["English<br/><small>Decision</small>"]:::neutral
    n86["French<br/><small>Decision</small>"]:::neutral
    n87["Words of the interface<br/><small>Function</small>"]:::held
    n88["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n89["Words in English<br/><small>Message catalog</small>"]:::neutral
    n90["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n91["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n92["A landmark on the body<br/><small>Requirement</small>"]:::held
    n93["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n94["The landmarks of a pose<br/><small>Function</small>"]:::held
    n95["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n96["Continuous integration<br/><small>Package</small>"]:::neutral
    n97["Geometry<br/><small>Package</small>"]:::neutral
    n98["Trame<br/><small>Package</small>"]:::neutral
    n99["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n100["How a movement eases<br/><small>Decision</small>"]:::neutral
    n101["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n102["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n103["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n104["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n105["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n106["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n107["How full the lungs are<br/><small>Requirement</small>"]:::held
    n108["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n109["Where a practice is<br/><small>Requirement</small>"]:::held
    n110["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n111["The moment of a practice<br/><small>Function</small>"]:::held
    n112["Names of the player<br/><small>Decision</small>"]:::neutral
    n113["Play a practice<br/><small>Function</small>"]:::held
    n114["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n115["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n116["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n117["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n118["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n119["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n120["The breath of a moment<br/><small>Requirement</small>"]:::held
    n121["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n122["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n123["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n124["The language of the app<br/><small>Requirement</small>"]:::held
    n125["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n126["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n127["In the person's language<br/><small>Goal</small>"]:::neutral
    n128["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n129["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n130["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n131["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n132["The device's languages, given<br/><small>Function</small>"]:::held
    n133["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n134["Holding the poses<br/><small>Scenario</small>"]:::held
    n135["The language of the home page<br/><small>Scenario</small>"]:::held
    n136["The app in memory<br/><small>Technical choice</small>"]:::held
    n137["Learning a sequence<br/><small>Scenario</small>"]:::held
    n138["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n139["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n140["A bowl that counts<br/><small>Function</small>"]:::held
    n141["A screen that records<br/><small>Function</small>"]:::held
    n142["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n143["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n144["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n145["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n146["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n147["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n148["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n149["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n150["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n151["The content, reviewed<br/><small>Review</small>"]:::unknown
    n152["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n153["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n154["A machine<br/><small>Environment</small>"]:::neutral
    n155["On a phone<br/><small>Check</small>"]:::unknown
    n156["On the machine<br/><small>Technical choice</small>"]:::unknown
    n157["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n158["Open the page<br/><small>Entry point</small>"]:::held
    n159["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n160["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n161["How the page is opened<br/><small>Decision</small>"]:::neutral
    n162["The page opens<br/><small>Check</small>"]:::unknown
    n163["What the page is asked<br/><small>Function</small>"]:::held
    n164["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n165["Place the page<br/><small>Entry point</small>"]:::held
    n166["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n167["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n168["A preview<br/><small>Shipment</small>"]:::unknown
    n169["The way of a preview<br/><small>Policy</small>"]:::neutral
    n170["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n171["The preview's script<br/><small>Artefact</small>"]:::unknown
    n172["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n173["The product holds<br/><small>Obligation</small>"]:::neutral
    n174["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n175["The way of a public version<br/><small>Policy</small>"]:::neutral
    n176["A public version<br/><small>Shipment</small>"]:::unknown
    n177["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n178["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n179["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n180["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n181["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n182["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n183["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n184["Where the page is served<br/><small>Decision</small>"]:::neutral
    n185["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n186["A phase set by the person<br/><small>Requirement</small>"]:::held
    n187["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n188["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n189["A breath read back<br/><small>Requirement</small>"]:::held
    n190["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n191["The landmarks the person chose<br/><small>Function</small>"]:::held
    n192["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n193["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n194["The person's breath<br/><small>Function</small>"]:::held
    n195["Names of the settings<br/><small>Decision</small>"]:::neutral
    n196["The settings view<br/><small>Function</small>"]:::held
    n197["Show the settings<br/><small>Function</small>"]:::held
    n198["Tapping<br/><small>Decision</small>"]:::neutral
    n199["The voice the person chose<br/><small>Function</small>"]:::held
    n200["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n201["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n202["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n203["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n204["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n205["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n206["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n207["Light of the stage<br/><small>Decision</small>"]:::neutral
    n208["Views of the stage<br/><small>Decision</small>"]:::neutral
    n209["three.js<br/><small>Package</small>"]:::held
    n210["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n81
  n0 -->|Depends on| n112
  n0 -->|Depends on| n195
  n0 -->|Depends on| n63
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n75
  n1 -->|Depends on| n76
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n129
  n4 -->|Serves| n127
  n4 -->|Depends on| n87
  n4 -->|Depends on| n84
  n4 -->|Depends on| n69
  n4 -->|Depends on| n90
  n4 -->|Depends on| n89
  n4 -->|Depends on| n68
  n4 -->|Depends on| n82
  n4 -->|Depends on| n83
  n5 -->|Chooses| n0
  n5 -->|Chooses| n204
  n5 -->|Chooses| n202
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n82
  n7 -->|Styles| n111
  n7 -->|Styles| n196
  n7 -->|Styles| n64
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n86
  n8 -->|Styled by| n7
  n8 -->|Serves| n129
  n10 -->|Serves| n129
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n84
  n10 -->|Depends on| n113
  n10 -->|Depends on| n197
  n10 -->|Depends on| n194
  n10 -->|Depends on| n67
  n10 -->|Depends on| n66
  n15 -->|Deployed in| n13
  n20 -->|Refines| n129
  n21 -->|Accepts| n20
  n22 -->|Refines| n129
  n22 -->|Depends on| n24
  n22 -->|Depends on| n40
  n22 -->|Depends on| n39
  n22 -->|Depends on| n56
  n22 -->|Depends on| n26
  n22 -->|Depends on| n51
  n22 -->|Depends on| n27
  n22 -->|Depends on| n41
  n22 -->|Depends on| n29
  n22 -->|Depends on| n58
  n23 -->|Accepts| n22
  n26 -->|Serves| n129
  n26 -->|Depends on| n24
  n26 -->|Depends on| n40
  n26 -->|Depends on| n39
  n27 -->|Refines| n129
  n27 -->|Depends on| n40
  n27 -->|Depends on| n39
  n27 -->|Depends on| n25
  n28 -->|Accepts| n27
  n29 -->|Refines| n129
  n29 -->|Depends on| n40
  n29 -->|Depends on| n39
  n30 -->|Accepts| n29
  n31 -->|Refines| n129
  n31 -->|Depends on| n56
  n31 -->|Depends on| n39
  n31 -->|Depends on| n46
  n32 -->|Accepts| n31
  n34 -->|Refines| n129
  n35 -->|Accepts| n34
  n37 -->|Refines| n129
  n37 -->|Refines| n123
  n37 -->|Depends on| n31
  n37 -->|Depends on| n22
  n38 -->|Accepts| n37
  n39 -->|Serves| n129
  n41 -->|Refines| n129
  n41 -->|Depends on| n24
  n41 -->|Depends on| n40
  n41 -->|Depends on| n39
  n41 -->|Depends on| n26
  n41 -->|Depends on| n58
  n41 -->|Depends on| n33
  n42 -->|Accepts| n41
  n44 -->|Refines| n129
  n44 -->|Refines| n123
  n44 -->|Depends on| n31
  n44 -->|Depends on| n22
  n44 -->|Depends on| n53
  n44 -->|Depends on| n43
  n44 -->|Depends on| n46
  n44 -->|Depends on| n55
  n45 -->|Accepts| n44
  n47 -->|Refines| n129
  n47 -->|Depends on| n46
  n48 -->|Accepts| n47
  n49 -->|Refines| n129
  n50 -->|Accepts| n49
  n51 -->|Refines| n129
  n51 -->|Depends on| n24
  n51 -->|Depends on| n39
  n51 -->|Depends on| n58
  n52 -->|Accepts| n51
  n53 -->|Refines| n129
  n53 -->|Depends on| n24
  n53 -->|Depends on| n39
  n53 -->|Depends on| n46
  n54 -->|Accepts| n53
  n56 -->|Refines| n129
  n56 -->|Depends on| n24
  n56 -->|Depends on| n39
  n57 -->|Accepts| n56
  n58 -->|Refines| n129
  n58 -->|Depends on| n39
  n58 -->|Depends on| n36
  n59 -->|Accepts| n58
  n60 -->|Refines| n129
  n61 -->|Accepts| n60
  n62 -->|Serves| n129
  n62 -->|Depends on| n60
  n62 -->|Depends on| n70
  n62 -->|Depends on| n34
  n62 -->|Depends on| n90
  n62 -->|Depends on| n89
  n64 -->|Serves| n129
  n64 -->|Depends on| n87
  n64 -->|Depends on| n84
  n64 -->|Depends on| n82
  n64 -->|Depends on| n83
  n64 -->|Depends on| n73
  n64 -->|Depends on| n70
  n65 -->|Serves| n129
  n65 -->|Depends on| n72
  n65 -->|Depends on| n73
  n67 -->|Serves| n129
  n67 -->|Depends on| n16
  n67 -->|Depends on| n64
  n67 -->|Depends on| n65
  n67 -->|Depends on| n62
  n67 -->|Depends on| n66
  n67 -->|Depends on| n113
  n70 -->|Refines| n129
  n71 -->|Accepts| n70
  n73 -->|Refines| n129
  n73 -->|Depends on| n72
  n74 -->|Accepts| n73
  n75 -->|Languages offered| n69
  n75 -->|Serves| n129
  n76 -->|Languages offered| n69
  n76 -->|Serves| n129
  n78 -->|Refines| n129
  n78 -->|Depends on| n77
  n79 -->|Accepts| n78
  n82 -->|Serves| n129
  n82 -->|Depends on| n24
  n82 -->|Depends on| n80
  n82 -->|Depends on| n81
  n83 -->|Serves| n129
  n83 -->|Depends on| n31
  n83 -->|Depends on| n22
  n84 -->|Serves| n127
  n84 -->|Depends on| n69
  n84 -->|Depends on| n124
  n84 -->|Depends on| n88
  n87 -->|Serves| n127
  n87 -->|Depends on| n90
  n87 -->|Depends on| n89
  n87 -->|Depends on| n84
  n89 -->|Written in| n85
  n89 -->|Translates| n90
  n90 -->|Written in| n86
  n92 -->|Refines| n129
  n93 -->|Accepts| n92
  n94 -->|Serves| n129
  n94 -->|Depends on| n92
  n94 -->|Depends on| n87
  n94 -->|Depends on| n84
  n96 -->|Serves| n129
  n97 -->|Serves| n129
  n98 -->|Serves| n129
  n99 -->|Serves| n129
  n101 -->|Refines| n122
  n101 -->|Depends on| n78
  n102 -->|Accepts| n101
  n103 -->|Refines| n122
  n103 -->|Depends on| n100
  n104 -->|Accepts| n103
  n105 -->|Refines| n122
  n106 -->|Accepts| n105
  n107 -->|Refines| n122
  n108 -->|Accepts| n107
  n109 -->|Refines| n122
  n110 -->|Accepts| n109
  n111 -->|Serves| n129
  n111 -->|Serves| n122
  n111 -->|Depends on| n109
  n111 -->|Depends on| n103
  n111 -->|Depends on| n107
  n111 -->|Depends on| n22
  n111 -->|Depends on| n94
  n111 -->|Depends on| n47
  n111 -->|Depends on| n95
  n111 -->|Depends on| n87
  n111 -->|Depends on| n84
  n111 -->|Depends on| n68
  n113 -->|Serves| n129
  n113 -->|Depends on| n16
  n113 -->|Depends on| n11
  n113 -->|Depends on| n199
  n113 -->|Depends on| n191
  n113 -->|Depends on| n114
  n113 -->|Depends on| n111
  n113 -->|Depends on| n87
  n113 -->|Depends on| n84
  n113 -->|Depends on| n208
  n114 -->|Serves| n129
  n114 -->|Serves| n122
  n114 -->|Depends on| n120
  n114 -->|Depends on| n31
  n114 -->|Depends on| n105
  n114 -->|Depends on| n101
  n115 -->|Serves| n122
  n115 -->|Applied by| n120
  n115 -->|Applied by| n105
  n116 -->|Serves| n123
  n116 -->|Applied by| n75
  n116 -->|Applied by| n14
  n117 -->|Serves| n127
  n117 -->|Applied by| n69
  n117 -->|Applied by| n124
  n118 -->|Serves| n129
  n118 -->|Applied by| n15
  n118 -->|Applied by| n8
  n118 -->|Applied by| n162
  n119 -->|Serves| n129
  n119 -->|Applied by| n128
  n119 -->|Applied by| n113
  n120 -->|Refines| n122
  n120 -->|Depends on| n126
  n121 -->|Accepts| n120
  n124 -->|Refines| n127
  n125 -->|Accepts| n124
  n130 -->|Verifies| n114
  n130 -->|Verifies| n111
  n130 -->|Verifies| n113
  n130 -->|Verifies| n22
  n130 -->|Verifies| n53
  n130 -->|Verifies| n51
  n130 -->|Verifies| n41
  n130 -->|Verifies| n29
  n130 -->|Verifies| n27
  n130 -->|Verifies| n39
  n130 -->|Verifies| n31
  n130 -->|Verifies| n56
  n130 -->|Verifies| n58
  n130 -->|Verifies| n26
  n130 -->|In| n18
  n130 -->|Depends on| n10
  n130 -->|Depends on| n19
  n130 -->|Depends on| n144
  n130 -->|Depends on| n53
  n130 -->|Depends on| n55
  n130 -->|Depends on| n40
  n130 -->|Depends on| n89
  n130 -->|Depends on| n142
  n131 -->|Verifies| n65
  n131 -->|Verifies| n62
  n131 -->|Verifies| n73
  n131 -->|Verifies| n70
  n131 -->|Verifies| n60
  n131 -->|Verifies| n114
  n131 -->|Verifies| n111
  n131 -->|In| n18
  n131 -->|Depends on| n65
  n131 -->|Depends on| n62
  n131 -->|Depends on| n114
  n131 -->|Depends on| n111
  n131 -->|Depends on| n75
  n131 -->|Depends on| n73
  n131 -->|Depends on| n53
  n131 -->|Depends on| n55
  n131 -->|Depends on| n40
  n131 -->|Depends on| n133
  n131 -->|Depends on| n142
  n132 -->|Depends on| n143
  n134 -->|Verifies| n67
  n134 -->|Verifies| n64
  n134 -->|Verifies| n65
  n134 -->|Verifies| n62
  n134 -->|Verifies| n113
  n134 -->|Verifies| n114
  n134 -->|Verifies| n111
  n134 -->|Verifies| n105
  n134 -->|Verifies| n101
  n134 -->|Verifies| n199
  n134 -->|Verifies| n140
  n134 -->|In| n18
  n134 -->|Depends on| n10
  n134 -->|Depends on| n19
  n134 -->|Depends on| n12
  n134 -->|Depends on| n66
  n134 -->|Depends on| n133
  n134 -->|Depends on| n40
  n134 -->|Depends on| n89
  n134 -->|Depends on| n142
  n135 -->|Verifies| n10
  n135 -->|Verifies| n4
  n135 -->|Verifies| n84
  n135 -->|Verifies| n87
  n135 -->|Verifies| n82
  n135 -->|Verifies| n83
  n135 -->|Verifies| n1
  n135 -->|Verifies| n132
  n135 -->|Verifies| n141
  n135 -->|In| n18
  n135 -->|Depends on| n10
  n135 -->|Depends on| n19
  n135 -->|Depends on| n88
  n135 -->|Depends on| n85
  n135 -->|Depends on| n86
  n135 -->|Depends on| n89
  n135 -->|Depends on| n90
  n135 -->|Depends on| n142
  n135 -->|Depends on| n75
  n135 -->|Depends on| n76
  n136 -->|Chooses| n141
  n136 -->|Chooses| n140
  n136 -->|Chooses| n132
  n136 -->|In| n18
  n137 -->|Verifies| n10
  n137 -->|Verifies| n113
  n137 -->|Verifies| n114
  n137 -->|Verifies| n111
  n137 -->|Verifies| n94
  n137 -->|Verifies| n92
  n137 -->|Verifies| n191
  n137 -->|In| n18
  n137 -->|Depends on| n10
  n137 -->|Depends on| n19
  n137 -->|Depends on| n66
  n137 -->|Depends on| n133
  n137 -->|Depends on| n89
  n137 -->|Depends on| n142
  n137 -->|Depends on| n75
  n137 -->|Depends on| n88
  n138 -->|Verifies| n197
  n138 -->|Verifies| n196
  n138 -->|Verifies| n194
  n138 -->|Verifies| n199
  n138 -->|Verifies| n192
  n138 -->|Verifies| n186
  n138 -->|Verifies| n10
  n138 -->|In| n18
  n138 -->|Depends on| n10
  n138 -->|Depends on| n19
  n138 -->|Depends on| n194
  n138 -->|Depends on| n145
  n138 -->|Depends on| n89
  n138 -->|Depends on| n142
  n139 -->|Verifies| n113
  n139 -->|Verifies| n114
  n139 -->|Verifies| n111
  n139 -->|Verifies| n10
  n139 -->|In| n18
  n139 -->|Depends on| n10
  n139 -->|Depends on| n19
  n139 -->|Depends on| n144
  n139 -->|Depends on| n89
  n139 -->|Depends on| n85
  n139 -->|Depends on| n142
  n140 -->|Implements| n11
  n140 -->|Implements| n12
  n141 -->|Implements| n16
  n141 -->|Implements| n19
  n142 -->|Written in| n85
  n147 -->|Serves| n129
  n149 -->|Serves| n129
  n150 -->|Serves| n129
  n151 -->|Reviews| n75
  n151 -->|Reviews| n76
  n151 -->|By the role| n185
  n152 -->|Serves| n123
  n153 -->|Serves| n129
  n155 -->|Checks| n160
  n155 -->|Signed by| n164
  n155 -->|Verifies| n202
  n156 -->|In| n154
  n157 -->|Verifies| n158
  n157 -->|Verifies| n163
  n157 -->|In| n18
  n157 -->|Depends on| n158
  n157 -->|Depends on| n160
  n157 -->|Depends on| n163
  n157 -->|Depends on| n183
  n157 -->|Depends on| n69
  n157 -->|Depends on| n182
  n157 -->|Depends on| n179
  n158 -->|Serves| n129
  n158 -->|Part of| n167
  n158 -->|Depends on| n160
  n158 -->|Depends on| n69
  n158 -->|Depends on| n163
  n158 -->|Depends on| n161
  n158 -->|Depends on| n183
  n159 -->|Serves| n129
  n160 -->|Produced by| n8
  n162 -->|Checks| n160
  n162 -->|Run by| n158
  n162 -->|Verifies| n0
  n162 -->|Verifies| n204
  n163 -->|Serves| n129
  n163 -->|Depends on| n9
  n163 -->|Depends on| n63
  n163 -->|Depends on| n112
  n165 -->|Serves| n129
  n165 -->|Part of| n167
  n165 -->|Depends on| n160
  n165 -->|Depends on| n184
  n165 -->|Depends on| n183
  n166 -->|Verifies| n165
  n166 -->|In| n18
  n166 -->|Depends on| n165
  n166 -->|Depends on| n160
  n166 -->|Depends on| n184
  n166 -->|Depends on| n182
  n166 -->|Depends on| n179
  n167 -->|Deployed in| n154
  n168 -->|Ships| n160
  n168 -->|Deployed by| n165
  n168 -->|Programs assembled for| n154
  n168 -->|Follows the policy| n169
  n169 -->|Its obligations| n150
  n169 -->|Its obligations| n174
  n169 -->|Its obligations| n177
  n169 -->|Its obligations| n159
  n171 -->|Runs elsewhere| n168
  n172 -->|Runs elsewhere| n168
  n172 -->|Its writer's settings| n170
  n172 -->|Makes available, once shipped| n160
  n173 -->|Serves| n129
  n174 -->|Serves| n129
  n175 -->|Its obligations| n149
  n175 -->|Its obligations| n173
  n175 -->|Its obligations| n153
  n175 -->|Its obligations| n152
  n175 -->|Its obligations| n147
  n175 -->|Its obligations| n177
  n175 -->|Its obligations| n159
  n176 -->|Ships| n160
  n176 -->|Deployed by| n165
  n176 -->|Programs assembled for| n154
  n176 -->|Follows the policy| n175
  n177 -->|Serves| n129
  n178 -->|Ships| n172
  n178 -->|Ships| n171
  n179 -->|Written in| n85
  n180 -->|In| n18
  n181 -->|Serves| n123
  n181 -->|Serves| n129
  n181 -->|Applied by| n168
  n181 -->|Applied by| n176
  n181 -->|Applied by| n162
  n181 -->|Applied by| n155
  n181 -->|Applied by| n151
  n181 -->|Applied by| n158
  n181 -->|Applied by| n165
  n181 -->|Applied by| n148
  n181 -->|Applied by| n146
  n181 -->|Applied by| n172
  n181 -->|Applied by| n171
  n181 -->|Applied by| n178
  n183 -->|Written in| n85
  n186 -->|Refines| n122
  n186 -->|Depends on| n188
  n187 -->|Accepts| n186
  n189 -->|Refines| n122
  n189 -->|Depends on| n188
  n190 -->|Accepts| n189
  n191 -->|Serves| n129
  n191 -->|Depends on| n88
  n192 -->|Refines| n122
  n192 -->|Depends on| n188
  n192 -->|Depends on| n198
  n193 -->|Accepts| n192
  n194 -->|Serves| n122
  n194 -->|Depends on| n88
  n194 -->|Depends on| n189
  n196 -->|Serves| n122
  n196 -->|Serves| n129
  n196 -->|Depends on| n87
  n196 -->|Depends on| n84
  n197 -->|Serves| n122
  n197 -->|Serves| n129
  n197 -->|Depends on| n16
  n197 -->|Depends on| n194
  n197 -->|Depends on| n199
  n197 -->|Depends on| n196
  n197 -->|Depends on| n186
  n197 -->|Depends on| n192
  n197 -->|Depends on| n126
  n199 -->|Serves| n129
  n199 -->|Depends on| n200
  n202 -->|Implements| n11
  n202 -->|Depends on| n201
  n204 -->|Implements| n17
  n204 -->|Uses| n209
  n204 -->|Uses| n210
  n204 -->|Depends on| n205
  n204 -->|Depends on| n207
  n204 -->|Depends on| n208
  n204 -->|Depends on| n206
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n31
  n23 -.->|Depends on| n40
  n30 -.->|Depends on| n40
  n42 -.->|Depends on| n24
  n50 -.->|Depends on| n31
  n50 -.->|Depends on| n22
  n54 -.->|Depends on| n31
  n54 -.->|Depends on| n22
  n57 -.->|Depends on| n24
  n60 -.->|Depends on| n31
  n60 -.->|Depends on| n22
  n74 -.->|Depends on| n72
  n74 -.->|Depends on| n34
  n74 -.->|Depends on| n31
  n74 -.->|Depends on| n70
  n74 -.->|Depends on| n40
  n74 -.->|Depends on| n53
  n74 -.->|Depends on| n22
  n74 -.->|Depends on| n55
  n75 -.->|Depends on| n44
  n75 -.->|Depends on| n37
  n75 -.->|Depends on| n78
  n75 -.->|Depends on| n126
  n76 -.->|Depends on| n68
  n76 -.->|Depends on| n120
  n76 -.->|Depends on| n78
  n76 -.->|Depends on| n34
  n76 -.->|Depends on| n73
  n92 -.->|Depends on| n91
  n92 -.->|Depends on| n49
  n92 -.->|Depends on| n20
  n93 -.->|Depends on| n31
  n93 -.->|Depends on| n22
  n93 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n203 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
