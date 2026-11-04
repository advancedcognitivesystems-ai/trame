# Layers

*The graph in force on 4 November 2026, ordered by distance to the goals.*

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
    n98["Geometry<br/><small>Package</small>"]:::neutral
    n99["Trame<br/><small>Package</small>"]:::neutral
    n100["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n101["How a movement eases<br/><small>Decision</small>"]:::neutral
    n102["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n103["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n104["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n105["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n106["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n107["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n108["How full the lungs are<br/><small>Requirement</small>"]:::held
    n109["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n110["Where a practice is<br/><small>Requirement</small>"]:::held
    n111["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n112["The moment of a practice<br/><small>Function</small>"]:::held
    n113["Names of the player<br/><small>Decision</small>"]:::neutral
    n114["Play a practice<br/><small>Function</small>"]:::held
    n115["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n116["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n117["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n118["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n119["A page first, the phones after<br/><small>Architecture decision</small>"]:::held
    n120["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n121["The breath of a moment<br/><small>Requirement</small>"]:::held
    n122["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n123["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n124["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n125["The language of the app<br/><small>Requirement</small>"]:::held
    n126["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n127["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n128["In the person's language<br/><small>Goal</small>"]:::neutral
    n129["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n130["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n131["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n132["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n133["The device's languages, given<br/><small>Function</small>"]:::held
    n134["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n135["Holding the poses<br/><small>Scenario</small>"]:::held
    n136["The language of the home page<br/><small>Scenario</small>"]:::held
    n137["The app in memory<br/><small>Technical choice</small>"]:::held
    n138["Learning a sequence<br/><small>Scenario</small>"]:::held
    n139["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n140["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n141["A bowl that counts<br/><small>Function</small>"]:::held
    n142["A screen that records<br/><small>Function</small>"]:::held
    n143["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n144["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n145["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n146["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n147["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n148["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n149["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n150["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n151["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n152["The content, reviewed<br/><small>Review</small>"]:::unknown
    n153["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n154["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n155["A machine<br/><small>Environment</small>"]:::neutral
    n156["On a phone<br/><small>Check</small>"]:::unknown
    n157["On the machine<br/><small>Technical choice</small>"]:::held
    n158["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n159["Open the page<br/><small>Entry point</small>"]:::held
    n160["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n161["Poselia's page<br/><small>Artefact</small>"]:::held
    n162["How the page is opened<br/><small>Decision</small>"]:::neutral
    n163["The page opens<br/><small>Check</small>"]:::held
    n164["What the page is asked<br/><small>Function</small>"]:::held
    n165["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n166["Place the page<br/><small>Entry point</small>"]:::held
    n167["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n168["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n169["A preview<br/><small>Shipment</small>"]:::held
    n170["The way of a preview<br/><small>Policy</small>"]:::neutral
    n171["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n172["The preview's script<br/><small>Artefact</small>"]:::held
    n173["The preview's workflow<br/><small>Artefact</small>"]:::held
    n174["The product holds<br/><small>Obligation</small>"]:::neutral
    n175["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n176["The way of a public version<br/><small>Policy</small>"]:::neutral
    n177["A public version<br/><small>Shipment</small>"]:::unknown
    n178["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n179["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n180["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n181["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n182["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n183["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n184["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n185["Where the page is served<br/><small>Decision</small>"]:::neutral
    n186["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n187["A phase set by the person<br/><small>Requirement</small>"]:::held
    n188["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n189["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n190["A breath read back<br/><small>Requirement</small>"]:::held
    n191["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n192["The landmarks the person chose<br/><small>Function</small>"]:::held
    n193["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n194["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n195["The person's breath<br/><small>Function</small>"]:::held
    n196["Names of the settings<br/><small>Decision</small>"]:::neutral
    n197["The settings view<br/><small>Function</small>"]:::held
    n198["Show the settings<br/><small>Function</small>"]:::held
    n199["Tapping<br/><small>Decision</small>"]:::neutral
    n200["The voice the person chose<br/><small>Function</small>"]:::held
    n201["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n202["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n203["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n204["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n205["The browser's stage<br/><small>Implementation</small>"]:::held
    n206["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n207["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n208["Light of the stage<br/><small>Decision</small>"]:::neutral
    n209["Views of the stage<br/><small>Decision</small>"]:::neutral
    n210["three.js<br/><small>Package</small>"]:::held
    n211["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n82
  n0 -->|Depends on| n113
  n0 -->|Depends on| n196
  n0 -->|Depends on| n64
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n76
  n1 -->|Depends on| n77
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n130
  n4 -->|Serves| n128
  n4 -->|Depends on| n88
  n4 -->|Depends on| n85
  n4 -->|Depends on| n70
  n4 -->|Depends on| n91
  n4 -->|Depends on| n90
  n4 -->|Depends on| n69
  n4 -->|Depends on| n83
  n4 -->|Depends on| n84
  n5 -->|Chooses| n0
  n5 -->|Chooses| n205
  n5 -->|Chooses| n203
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n83
  n7 -->|Styles| n112
  n7 -->|Styles| n197
  n7 -->|Styles| n65
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n87
  n8 -->|Styled by| n7
  n8 -->|Serves| n130
  n10 -->|Serves| n130
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n85
  n10 -->|Depends on| n114
  n10 -->|Depends on| n198
  n10 -->|Depends on| n195
  n10 -->|Depends on| n68
  n10 -->|Depends on| n67
  n15 -->|Deployed in| n13
  n20 -->|Refines| n130
  n20 -->|Depends on| n39
  n21 -->|Accepts| n20
  n22 -->|Refines| n130
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
  n26 -->|Serves| n130
  n26 -->|Depends on| n24
  n26 -->|Depends on| n40
  n26 -->|Depends on| n39
  n27 -->|Refines| n130
  n27 -->|Depends on| n40
  n27 -->|Depends on| n39
  n27 -->|Depends on| n25
  n28 -->|Accepts| n27
  n29 -->|Refines| n130
  n29 -->|Depends on| n40
  n29 -->|Depends on| n39
  n30 -->|Accepts| n29
  n31 -->|Refines| n130
  n31 -->|Depends on| n57
  n31 -->|Depends on| n39
  n31 -->|Depends on| n46
  n32 -->|Accepts| n31
  n34 -->|Refines| n130
  n35 -->|Accepts| n34
  n37 -->|Refines| n130
  n37 -->|Refines| n124
  n37 -->|Depends on| n31
  n37 -->|Depends on| n22
  n38 -->|Accepts| n37
  n39 -->|Serves| n130
  n41 -->|Refines| n130
  n41 -->|Depends on| n24
  n41 -->|Depends on| n40
  n41 -->|Depends on| n39
  n41 -->|Depends on| n26
  n41 -->|Depends on| n59
  n41 -->|Depends on| n33
  n42 -->|Accepts| n41
  n44 -->|Refines| n130
  n44 -->|Refines| n124
  n44 -->|Depends on| n31
  n44 -->|Depends on| n22
  n44 -->|Depends on| n54
  n44 -->|Depends on| n43
  n44 -->|Depends on| n46
  n44 -->|Depends on| n56
  n45 -->|Accepts| n44
  n47 -->|Refines| n130
  n47 -->|Depends on| n46
  n48 -->|Accepts| n47
  n49 -->|Refines| n130
  n49 -->|Depends on| n39
  n49 -->|Depends on| n51
  n49 -->|Depends on| n46
  n50 -->|Accepts| n49
  n52 -->|Refines| n130
  n52 -->|Depends on| n24
  n52 -->|Depends on| n39
  n52 -->|Depends on| n59
  n53 -->|Accepts| n52
  n54 -->|Refines| n130
  n54 -->|Depends on| n24
  n54 -->|Depends on| n39
  n54 -->|Depends on| n46
  n55 -->|Accepts| n54
  n57 -->|Refines| n130
  n57 -->|Depends on| n24
  n57 -->|Depends on| n39
  n58 -->|Accepts| n57
  n59 -->|Refines| n130
  n59 -->|Depends on| n39
  n59 -->|Depends on| n36
  n60 -->|Accepts| n59
  n61 -->|Refines| n130
  n61 -->|Depends on| n31
  n61 -->|Depends on| n22
  n61 -->|Depends on| n39
  n62 -->|Accepts| n61
  n63 -->|Serves| n130
  n63 -->|Depends on| n61
  n63 -->|Depends on| n71
  n63 -->|Depends on| n34
  n63 -->|Depends on| n91
  n63 -->|Depends on| n90
  n65 -->|Serves| n130
  n65 -->|Depends on| n88
  n65 -->|Depends on| n85
  n65 -->|Depends on| n83
  n65 -->|Depends on| n84
  n65 -->|Depends on| n74
  n65 -->|Depends on| n71
  n66 -->|Serves| n130
  n66 -->|Depends on| n73
  n66 -->|Depends on| n74
  n68 -->|Serves| n130
  n68 -->|Depends on| n16
  n68 -->|Depends on| n65
  n68 -->|Depends on| n66
  n68 -->|Depends on| n63
  n68 -->|Depends on| n67
  n68 -->|Depends on| n114
  n71 -->|Refines| n130
  n72 -->|Accepts| n71
  n74 -->|Refines| n130
  n74 -->|Depends on| n73
  n75 -->|Accepts| n74
  n76 -->|Languages offered| n70
  n76 -->|Serves| n130
  n77 -->|Languages offered| n70
  n77 -->|Serves| n130
  n79 -->|Refines| n130
  n79 -->|Depends on| n78
  n80 -->|Accepts| n79
  n83 -->|Serves| n130
  n83 -->|Depends on| n24
  n83 -->|Depends on| n81
  n83 -->|Depends on| n82
  n84 -->|Serves| n130
  n84 -->|Depends on| n31
  n84 -->|Depends on| n22
  n85 -->|Serves| n128
  n85 -->|Depends on| n70
  n85 -->|Depends on| n125
  n85 -->|Depends on| n89
  n88 -->|Serves| n128
  n88 -->|Depends on| n91
  n88 -->|Depends on| n90
  n88 -->|Depends on| n85
  n90 -->|Written in| n86
  n90 -->|Translates| n91
  n91 -->|Written in| n87
  n93 -->|Refines| n130
  n93 -->|Depends on| n39
  n93 -->|Depends on| n49
  n93 -->|Depends on| n20
  n93 -->|Depends on| n92
  n93 -->|Depends on| n51
  n94 -->|Accepts| n93
  n95 -->|Serves| n130
  n95 -->|Depends on| n93
  n95 -->|Depends on| n88
  n95 -->|Depends on| n85
  n97 -->|Serves| n130
  n98 -->|Serves| n130
  n99 -->|Serves| n130
  n100 -->|Serves| n130
  n102 -->|Refines| n123
  n102 -->|Depends on| n79
  n103 -->|Accepts| n102
  n104 -->|Refines| n123
  n104 -->|Depends on| n101
  n105 -->|Accepts| n104
  n106 -->|Refines| n123
  n107 -->|Accepts| n106
  n108 -->|Refines| n123
  n109 -->|Accepts| n108
  n110 -->|Refines| n123
  n111 -->|Accepts| n110
  n112 -->|Serves| n130
  n112 -->|Serves| n123
  n112 -->|Depends on| n110
  n112 -->|Depends on| n104
  n112 -->|Depends on| n108
  n112 -->|Depends on| n22
  n112 -->|Depends on| n95
  n112 -->|Depends on| n47
  n112 -->|Depends on| n96
  n112 -->|Depends on| n88
  n112 -->|Depends on| n85
  n112 -->|Depends on| n69
  n114 -->|Serves| n130
  n114 -->|Depends on| n16
  n114 -->|Depends on| n11
  n114 -->|Depends on| n200
  n114 -->|Depends on| n192
  n114 -->|Depends on| n115
  n114 -->|Depends on| n112
  n114 -->|Depends on| n88
  n114 -->|Depends on| n85
  n114 -->|Depends on| n209
  n115 -->|Serves| n130
  n115 -->|Serves| n123
  n115 -->|Depends on| n121
  n115 -->|Depends on| n31
  n115 -->|Depends on| n106
  n115 -->|Depends on| n102
  n116 -->|Serves| n123
  n116 -->|Applied by| n121
  n116 -->|Applied by| n106
  n117 -->|Serves| n124
  n117 -->|Applied by| n76
  n117 -->|Applied by| n14
  n118 -->|Serves| n128
  n118 -->|Applied by| n70
  n118 -->|Applied by| n125
  n119 -->|Serves| n130
  n119 -->|Applied by| n15
  n119 -->|Applied by| n8
  n119 -->|Applied by| n163
  n120 -->|Serves| n130
  n120 -->|Applied by| n129
  n120 -->|Applied by| n114
  n121 -->|Refines| n123
  n121 -->|Depends on| n127
  n122 -->|Accepts| n121
  n125 -->|Refines| n128
  n126 -->|Accepts| n125
  n131 -->|Verifies| n115
  n131 -->|Verifies| n112
  n131 -->|Verifies| n114
  n131 -->|Verifies| n22
  n131 -->|Verifies| n54
  n131 -->|Verifies| n52
  n131 -->|Verifies| n41
  n131 -->|Verifies| n29
  n131 -->|Verifies| n27
  n131 -->|Verifies| n39
  n131 -->|Verifies| n31
  n131 -->|Verifies| n57
  n131 -->|Verifies| n59
  n131 -->|Verifies| n26
  n131 -->|In| n18
  n131 -->|Depends on| n10
  n131 -->|Depends on| n19
  n131 -->|Depends on| n145
  n131 -->|Depends on| n54
  n131 -->|Depends on| n56
  n131 -->|Depends on| n40
  n131 -->|Depends on| n90
  n131 -->|Depends on| n143
  n132 -->|Verifies| n66
  n132 -->|Verifies| n63
  n132 -->|Verifies| n74
  n132 -->|Verifies| n71
  n132 -->|Verifies| n61
  n132 -->|Verifies| n115
  n132 -->|Verifies| n112
  n132 -->|In| n18
  n132 -->|Depends on| n66
  n132 -->|Depends on| n63
  n132 -->|Depends on| n115
  n132 -->|Depends on| n112
  n132 -->|Depends on| n76
  n132 -->|Depends on| n74
  n132 -->|Depends on| n54
  n132 -->|Depends on| n56
  n132 -->|Depends on| n40
  n132 -->|Depends on| n134
  n132 -->|Depends on| n143
  n133 -->|Depends on| n144
  n135 -->|Verifies| n68
  n135 -->|Verifies| n65
  n135 -->|Verifies| n66
  n135 -->|Verifies| n63
  n135 -->|Verifies| n114
  n135 -->|Verifies| n115
  n135 -->|Verifies| n112
  n135 -->|Verifies| n106
  n135 -->|Verifies| n102
  n135 -->|Verifies| n200
  n135 -->|Verifies| n141
  n135 -->|In| n18
  n135 -->|Depends on| n10
  n135 -->|Depends on| n19
  n135 -->|Depends on| n12
  n135 -->|Depends on| n67
  n135 -->|Depends on| n134
  n135 -->|Depends on| n40
  n135 -->|Depends on| n90
  n135 -->|Depends on| n143
  n136 -->|Verifies| n10
  n136 -->|Verifies| n4
  n136 -->|Verifies| n85
  n136 -->|Verifies| n88
  n136 -->|Verifies| n83
  n136 -->|Verifies| n84
  n136 -->|Verifies| n1
  n136 -->|Verifies| n133
  n136 -->|Verifies| n142
  n136 -->|In| n18
  n136 -->|Depends on| n10
  n136 -->|Depends on| n19
  n136 -->|Depends on| n89
  n136 -->|Depends on| n86
  n136 -->|Depends on| n87
  n136 -->|Depends on| n90
  n136 -->|Depends on| n91
  n136 -->|Depends on| n143
  n136 -->|Depends on| n76
  n136 -->|Depends on| n77
  n137 -->|Chooses| n142
  n137 -->|Chooses| n141
  n137 -->|Chooses| n133
  n137 -->|In| n18
  n138 -->|Verifies| n10
  n138 -->|Verifies| n114
  n138 -->|Verifies| n115
  n138 -->|Verifies| n112
  n138 -->|Verifies| n95
  n138 -->|Verifies| n93
  n138 -->|Verifies| n192
  n138 -->|In| n18
  n138 -->|Depends on| n10
  n138 -->|Depends on| n19
  n138 -->|Depends on| n67
  n138 -->|Depends on| n134
  n138 -->|Depends on| n90
  n138 -->|Depends on| n143
  n138 -->|Depends on| n76
  n138 -->|Depends on| n89
  n139 -->|Verifies| n198
  n139 -->|Verifies| n197
  n139 -->|Verifies| n195
  n139 -->|Verifies| n200
  n139 -->|Verifies| n193
  n139 -->|Verifies| n187
  n139 -->|Verifies| n10
  n139 -->|In| n18
  n139 -->|Depends on| n10
  n139 -->|Depends on| n19
  n139 -->|Depends on| n195
  n139 -->|Depends on| n146
  n139 -->|Depends on| n90
  n139 -->|Depends on| n143
  n140 -->|Verifies| n114
  n140 -->|Verifies| n115
  n140 -->|Verifies| n112
  n140 -->|Verifies| n10
  n140 -->|In| n18
  n140 -->|Depends on| n10
  n140 -->|Depends on| n19
  n140 -->|Depends on| n145
  n140 -->|Depends on| n90
  n140 -->|Depends on| n86
  n140 -->|Depends on| n143
  n141 -->|Implements| n11
  n141 -->|Implements| n12
  n142 -->|Implements| n16
  n142 -->|Implements| n19
  n143 -->|Written in| n86
  n148 -->|Serves| n130
  n150 -->|Serves| n130
  n151 -->|Serves| n130
  n152 -->|Reviews| n76
  n152 -->|Reviews| n77
  n152 -->|By the role| n186
  n153 -->|Serves| n124
  n154 -->|Serves| n130
  n156 -->|Checks| n161
  n156 -->|Signed by| n165
  n156 -->|Verifies| n203
  n157 -->|In| n155
  n158 -->|Verifies| n159
  n158 -->|Verifies| n164
  n158 -->|In| n18
  n158 -->|Depends on| n159
  n158 -->|Depends on| n161
  n158 -->|Depends on| n164
  n158 -->|Depends on| n184
  n158 -->|Depends on| n70
  n158 -->|Depends on| n183
  n158 -->|Depends on| n180
  n159 -->|Serves| n130
  n159 -->|Part of| n168
  n159 -->|Depends on| n161
  n159 -->|Depends on| n70
  n159 -->|Depends on| n164
  n159 -->|Depends on| n162
  n159 -->|Depends on| n184
  n160 -->|Serves| n130
  n161 -->|Produced by| n8
  n163 -->|Checks| n161
  n163 -->|Run by| n159
  n163 -->|Verifies| n0
  n163 -->|Verifies| n205
  n164 -->|Serves| n130
  n164 -->|Depends on| n9
  n164 -->|Depends on| n64
  n164 -->|Depends on| n113
  n166 -->|Serves| n130
  n166 -->|Part of| n168
  n166 -->|Depends on| n161
  n166 -->|Depends on| n185
  n166 -->|Depends on| n184
  n167 -->|Verifies| n166
  n167 -->|In| n18
  n167 -->|Depends on| n166
  n167 -->|Depends on| n161
  n167 -->|Depends on| n185
  n167 -->|Depends on| n183
  n167 -->|Depends on| n180
  n168 -->|Deployed in| n155
  n169 -->|Ships| n161
  n169 -->|Deployed by| n166
  n169 -->|Programs assembled for| n155
  n169 -->|Follows the policy| n170
  n170 -->|Its obligations| n151
  n170 -->|Its obligations| n175
  n170 -->|Its obligations| n178
  n170 -->|Its obligations| n160
  n172 -->|Runs elsewhere| n169
  n173 -->|Runs elsewhere| n169
  n173 -->|Its writer's settings| n171
  n173 -->|Makes available, once shipped| n161
  n174 -->|Serves| n130
  n175 -->|Serves| n130
  n176 -->|Its obligations| n150
  n176 -->|Its obligations| n174
  n176 -->|Its obligations| n154
  n176 -->|Its obligations| n153
  n176 -->|Its obligations| n148
  n176 -->|Its obligations| n178
  n176 -->|Its obligations| n160
  n177 -->|Ships| n161
  n177 -->|Deployed by| n166
  n177 -->|Programs assembled for| n155
  n177 -->|Follows the policy| n176
  n178 -->|Serves| n130
  n179 -->|Ships| n173
  n179 -->|Ships| n172
  n180 -->|Written in| n86
  n181 -->|In| n18
  n182 -->|Serves| n124
  n182 -->|Serves| n130
  n182 -->|Applied by| n169
  n182 -->|Applied by| n177
  n182 -->|Applied by| n163
  n182 -->|Applied by| n156
  n182 -->|Applied by| n152
  n182 -->|Applied by| n159
  n182 -->|Applied by| n166
  n182 -->|Applied by| n149
  n182 -->|Applied by| n147
  n182 -->|Applied by| n173
  n182 -->|Applied by| n172
  n182 -->|Applied by| n179
  n184 -->|Written in| n86
  n187 -->|Refines| n123
  n187 -->|Depends on| n189
  n188 -->|Accepts| n187
  n190 -->|Refines| n123
  n190 -->|Depends on| n189
  n191 -->|Accepts| n190
  n192 -->|Serves| n130
  n192 -->|Depends on| n89
  n193 -->|Refines| n123
  n193 -->|Depends on| n189
  n193 -->|Depends on| n199
  n194 -->|Accepts| n193
  n195 -->|Serves| n123
  n195 -->|Depends on| n89
  n195 -->|Depends on| n190
  n197 -->|Serves| n123
  n197 -->|Serves| n130
  n197 -->|Depends on| n88
  n197 -->|Depends on| n85
  n198 -->|Serves| n123
  n198 -->|Serves| n130
  n198 -->|Depends on| n16
  n198 -->|Depends on| n195
  n198 -->|Depends on| n200
  n198 -->|Depends on| n197
  n198 -->|Depends on| n187
  n198 -->|Depends on| n193
  n198 -->|Depends on| n127
  n200 -->|Serves| n130
  n200 -->|Depends on| n201
  n203 -->|Implements| n11
  n203 -->|Depends on| n202
  n205 -->|Implements| n17
  n205 -->|Uses| n210
  n205 -->|Uses| n211
  n205 -->|Depends on| n206
  n205 -->|Depends on| n208
  n205 -->|Depends on| n209
  n205 -->|Depends on| n207
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
  n76 -.->|Depends on| n127
  n77 -.->|Depends on| n69
  n77 -.->|Depends on| n121
  n77 -.->|Depends on| n79
  n77 -.->|Depends on| n34
  n77 -.->|Depends on| n74
  n94 -.->|Depends on| n31
  n94 -.->|Depends on| n22
  n94 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n204 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
