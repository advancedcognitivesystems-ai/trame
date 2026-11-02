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
    n43["A pose rests on what it names<br/><small>Requirement</small>"]:::held
    n44["Criteria of a pose that rests on what it names<br/><small>Acceptance criteria</small>"]:::held
    n45["The names of the sides<br/><small>Decision</small>"]:::neutral
    n46["The legs in front and behind<br/><small>Requirement</small>"]:::held
    n47["Criteria of the legs in front and behind<br/><small>Acceptance criteria</small>"]:::held
    n48["Where a spot is<br/><small>Requirement</small>"]:::held
    n49["Criteria of where a spot is<br/><small>Acceptance criteria</small>"]:::held
    n50["A leg that steps<br/><small>Requirement</small>"]:::held
    n51["Criteria of a leg that steps<br/><small>Acceptance criteria</small>"]:::held
    n52["The heights of the body's surface<br/><small>Requirement</small>"]:::held
    n53["Criteria of the heights of the body's surface<br/><small>Acceptance criteria</small>"]:::held
    n54["Touching the floor<br/><small>Decision</small>"]:::neutral
    n55["The trunk from its angles<br/><small>Requirement</small>"]:::held
    n56["Criteria of the trunk from its angles<br/><small>Acceptance criteria</small>"]:::held
    n57["A limb reaches its end<br/><small>Requirement</small>"]:::held
    n58["Criteria of a limb that reaches its end<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph composing["Poselia · Composing"]
    n59["Rising on a breath in<br/><small>Requirement</small>"]:::held
    n60["Criteria of rising on a breath in<br/><small>Acceptance criteria</small>"]:::held
    n61["A sequence composed<br/><small>Function</small>"]:::held
    n62["Names of the composer<br/><small>Decision</small>"]:::neutral
    n63["The composer<br/><small>Function</small>"]:::held
    n64["A sequence drawn by lot<br/><small>Function</small>"]:::held
    n65["What a composed practice holds<br/><small>Decision</small>"]:::neutral
    n66["Show the composer<br/><small>Function</small>"]:::held
  end
  subgraph content["Poselia · Content"]
    n67["Placeholders of a cue<br/><small>Decision</small>"]:::neutral
    n68["Languages offered<br/><small>Decision</small>"]:::neutral
    n69["Where the leading leg goes<br/><small>Requirement</small>"]:::held
    n70["Criteria of where the leading leg goes<br/><small>Acceptance criteria</small>"]:::held
    n71["The ways between levels<br/><small>Decision</small>"]:::neutral
    n72["A sequence that makes sense<br/><small>Requirement</small>"]:::held
    n73["Criteria of a sequence that makes sense<br/><small>Acceptance criteria</small>"]:::held
    n74["Poses<br/><small>Dataset</small>"]:::unknown
    n75["Sequences<br/><small>Dataset</small>"]:::unknown
    n76["How fast a voice speaks<br/><small>Decision</small>"]:::neutral
    n77["How long words take to say<br/><small>Requirement</small>"]:::held
    n78["Criteria of how long words take to say<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph drawing["Poselia · Drawings"]
    n79["Frame of a drawing<br/><small>Decision</small>"]:::neutral
    n80["Parts of a drawing<br/><small>Decision</small>"]:::neutral
    n81["The drawing of a pose<br/><small>Function</small>"]:::held
    n82["The body of a pose<br/><small>Function</small>"]:::held
  end
  subgraph language["Poselia · Language"]
    n83["The app's language<br/><small>Function</small>"]:::held
    n84["English<br/><small>Decision</small>"]:::neutral
    n85["French<br/><small>Decision</small>"]:::neutral
    n86["Words of the interface<br/><small>Function</small>"]:::held
    n87["Names of the preferences<br/><small>Decision</small>"]:::neutral
    n88["Words in English<br/><small>Message catalog</small>"]:::neutral
    n89["Words in French<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph marks["Poselia · Landmarks"]
    n90["How landmarks are drawn<br/><small>Decision</small>"]:::neutral
    n91["A landmark on the body<br/><small>Requirement</small>"]:::held
    n92["Criteria of a landmark on the body<br/><small>Acceptance criteria</small>"]:::held
    n93["The landmarks of a pose<br/><small>Function</small>"]:::held
    n94["When the landmarks are drawn<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Poselia · Packages"]
    n95["Continuous integration<br/><small>Package</small>"]:::neutral
    n96["Geometry<br/><small>Package</small>"]:::neutral
    n97["Trame<br/><small>Package</small>"]:::neutral
    n98["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph practice["Poselia · Practice"]
    n99["How a movement eases<br/><small>Decision</small>"]:::neutral
    n100["Breaths to say a cue<br/><small>Requirement</small>"]:::held
    n101["Criteria of breaths to say a cue<br/><small>Acceptance criteria</small>"]:::held
    n102["A movement goes as a breath goes<br/><small>Requirement</small>"]:::held
    n103["Criteria of a movement that goes as a breath goes<br/><small>Acceptance criteria</small>"]:::held
    n104["A hold of whole breaths<br/><small>Requirement</small>"]:::held
    n105["Criteria of a hold of whole breaths<br/><small>Acceptance criteria</small>"]:::held
    n106["How full the lungs are<br/><small>Requirement</small>"]:::held
    n107["Criteria of how full the lungs are<br/><small>Acceptance criteria</small>"]:::held
    n108["Where a practice is<br/><small>Requirement</small>"]:::held
    n109["Criteria of where a practice is<br/><small>Acceptance criteria</small>"]:::held
    n110["The moment of a practice<br/><small>Function</small>"]:::held
    n111["Names of the player<br/><small>Decision</small>"]:::neutral
    n112["Play a practice<br/><small>Function</small>"]:::held
    n113["A practice<br/><small>Function</small>"]:::held
  end
  subgraph principles["Poselia · Principles"]
    n114["The breath is the clock<br/><small>Architecture decision</small>"]:::held
    n115["The content is data, behind a port<br/><small>Architecture decision</small>"]:::unknown
    n116["The person's language, among those offered<br/><small>Architecture decision</small>"]:::held
    n117["A page first, the phones after<br/><small>Architecture decision</small>"]:::unknown
    n118["Said aloud, the screen awake<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Poselia · Product"]
    n119["The breath of a moment<br/><small>Requirement</small>"]:::held
    n120["Criteria of the breath of a moment<br/><small>Acceptance criteria</small>"]:::held
    n121["The breath sets the pace<br/><small>Goal</small>"]:::neutral
    n122["Content checked by people who practise<br/><small>Goal</small>"]:::neutral
    n123["The language of the app<br/><small>Requirement</small>"]:::held
    n124["Criteria of the language of the app<br/><small>Acceptance criteria</small>"]:::held
    n125["The breath of someone who has set nothing<br/><small>Decision</small>"]:::neutral
    n126["In the person's language<br/><small>Goal</small>"]:::neutral
    n127["The phone stays on the mat<br/><small>Assumption</small>"]:::unknown
    n128["Practise yoga on one's own, guided<br/><small>Goal</small>"]:::neutral
  end
  subgraph scenarios["Poselia · Scenarios"]
    n129["The body stays on the floor<br/><small>Scenario</small>"]:::held
    n130["Sequences drawn by lot<br/><small>Scenario</small>"]:::held
    n131["The device's languages, given<br/><small>Function</small>"]:::held
    n132["Moments of the poses held<br/><small>Decision</small>"]:::neutral
    n133["Holding the poses<br/><small>Scenario</small>"]:::held
    n134["The language of the home page<br/><small>Scenario</small>"]:::held
    n135["The app in memory<br/><small>Technical choice</small>"]:::held
    n136["Learning a sequence<br/><small>Scenario</small>"]:::held
    n137["The person's breath and voice<br/><small>Scenario</small>"]:::held
    n138["A practice follows the breath<br/><small>Scenario</small>"]:::held
    n139["A bowl that counts<br/><small>Function</small>"]:::held
    n140["A screen that records<br/><small>Function</small>"]:::held
    n141["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n142["The device of the scenarios<br/><small>Decision</small>"]:::neutral
    n143["Moments a scenario looks at<br/><small>Decision</small>"]:::neutral
    n144["Moments of the settings a scenario looks at<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Poselia · SDLC"]
    n145["Each decision of architecture serves the product<br/><small>Architecture rule</small>"]:::held
    n146["The page is checked, by hand too<br/><small>Obligation</small>"]:::neutral
    n147["Code serves the product<br/><small>Architecture rule</small>"]:::held
    n148["The code shown is verified<br/><small>Obligation</small>"]:::neutral
    n149["The code shown is verified, a gap said<br/><small>Obligation</small>"]:::neutral
    n150["The content, reviewed<br/><small>Review</small>"]:::unknown
    n151["The content is reviewed by a teacher<br/><small>Obligation</small>"]:::neutral
    n152["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n153["A machine<br/><small>Environment</small>"]:::neutral
    n154["On a phone<br/><small>Check</small>"]:::unknown
    n155["On the machine<br/><small>Technical choice</small>"]:::unknown
    n156["The page is opened as a person would<br/><small>Scenario</small>"]:::held
    n157["Open the page<br/><small>Entry point</small>"]:::held
    n158["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n159["Poselia's page<br/><small>Artefact</small>"]:::unknown
    n160["How the page is opened<br/><small>Decision</small>"]:::neutral
    n161["The page opens<br/><small>Check</small>"]:::unknown
    n162["What the page is asked<br/><small>Function</small>"]:::held
    n163["People who try it on a phone<br/><small>Role</small>"]:::neutral
    n164["Place the page<br/><small>Entry point</small>"]:::held
    n165["The page is placed where it is served<br/><small>Scenario</small>"]:::held
    n166["Poselia's SDLC<br/><small>Component</small>"]:::neutral
    n167["A preview<br/><small>Shipment</small>"]:::unknown
    n168["The way of a preview<br/><small>Policy</small>"]:::neutral
    n169["When the preview runs on GitHub, and what it keeps there<br/><small>Decision</small>"]:::neutral
    n170["The preview's script<br/><small>Artefact</small>"]:::unknown
    n171["The preview's workflow<br/><small>Artefact</small>"]:::unknown
    n172["The product holds<br/><small>Obligation</small>"]:::neutral
    n173["The page is checked by programs<br/><small>Obligation</small>"]:::neutral
    n174["The way of a public version<br/><small>Policy</small>"]:::neutral
    n175["A public version<br/><small>Shipment</small>"]:::unknown
    n176["The rules of the app hold<br/><small>Obligation</small>"]:::neutral
    n177["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n178["What the scenarios of the SDLC check<br/><small>Message catalog</small>"]:::neutral
    n179["The SDLC in memory<br/><small>Technical choice</small>"]:::held
    n180["The SDLC is in the graph<br/><small>Architecture decision</small>"]:::unknown
    n181["What the scenarios of the SDLC write<br/><small>Decision</small>"]:::neutral
    n182["What the programs of the SDLC say<br/><small>Message catalog</small>"]:::neutral
    n183["Where the page is served<br/><small>Decision</small>"]:::neutral
    n184["A teacher who practises<br/><small>Role</small>"]:::neutral
  end
  subgraph settings["Poselia · Settings"]
    n185["A phase set by the person<br/><small>Requirement</small>"]:::held
    n186["Criteria of a phase set by the person<br/><small>Acceptance criteria</small>"]:::held
    n187["Bounds of a breath<br/><small>Decision</small>"]:::neutral
    n188["A breath read back<br/><small>Requirement</small>"]:::held
    n189["Criteria of a breath read back<br/><small>Acceptance criteria</small>"]:::held
    n190["The landmarks the person chose<br/><small>Function</small>"]:::held
    n191["A breath measured by tapping<br/><small>Requirement</small>"]:::held
    n192["Criteria of a breath measured by tapping<br/><small>Acceptance criteria</small>"]:::held
    n193["The person's breath<br/><small>Function</small>"]:::held
    n194["Names of the settings<br/><small>Decision</small>"]:::neutral
    n195["The settings view<br/><small>Function</small>"]:::held
    n196["Show the settings<br/><small>Function</small>"]:::held
    n197["Tapping<br/><small>Decision</small>"]:::neutral
    n198["The voice the person chose<br/><small>Function</small>"]:::held
    n199["What the practice says and rings<br/><small>Decision</small>"]:::neutral
  end
  subgraph sound["Poselia · Sound"]
    n200["Sound of the bowl<br/><small>Decision</small>"]:::neutral
    n201["The browser's bowl<br/><small>Implementation</small>"]:::unknown
  end
  subgraph space["Poselia · Space"]
    n202["The axes of the mat<br/><small>Amendment</small>"]:::neutral
  end
  subgraph stage["Poselia · The stage"]
    n203["The browser's stage<br/><small>Implementation</small>"]:::unknown
    n204["Look of the mannequin<br/><small>Decision</small>"]:::neutral
    n205["Look of the landmarks<br/><small>Decision</small>"]:::neutral
    n206["Light of the stage<br/><small>Decision</small>"]:::neutral
    n207["Views of the stage<br/><small>Decision</small>"]:::neutral
    n208["three.js<br/><small>Package</small>"]:::held
    n209["three.js, its types<br/><small>Package</small>"]:::held
  end
  n0 -->|Implements| n16
  n0 -->|Depends on| n9
  n0 -->|Depends on| n80
  n0 -->|Depends on| n111
  n0 -->|Depends on| n194
  n0 -->|Depends on| n62
  n0 -->|Depends on| n17
  n1 -->|Implements| n14
  n1 -->|Depends on| n74
  n1 -->|Depends on| n75
  n3 -->|Chooses| n1
  n3 -->|In| n13
  n3 -->|In| n18
  n4 -->|Serves| n128
  n4 -->|Serves| n126
  n4 -->|Depends on| n86
  n4 -->|Depends on| n83
  n4 -->|Depends on| n68
  n4 -->|Depends on| n89
  n4 -->|Depends on| n88
  n4 -->|Depends on| n67
  n4 -->|Depends on| n81
  n4 -->|Depends on| n82
  n5 -->|Chooses| n0
  n5 -->|Chooses| n203
  n5 -->|Chooses| n201
  n5 -->|In| n13
  n7 -->|Uses the variables of| n2
  n7 -->|Uses the variables of| n6
  n7 -->|Styles| n4
  n7 -->|Styles| n81
  n7 -->|Styles| n110
  n7 -->|Styles| n195
  n7 -->|Styles| n63
  n8 -->|Delivers| n15
  n8 -->|For| n13
  n8 -->|Written in| n85
  n8 -->|Styled by| n7
  n8 -->|Serves| n128
  n10 -->|Serves| n128
  n10 -->|Part of| n15
  n10 -->|Depends on| n16
  n10 -->|Depends on| n14
  n10 -->|Depends on| n4
  n10 -->|Depends on| n83
  n10 -->|Depends on| n112
  n10 -->|Depends on| n196
  n10 -->|Depends on| n193
  n10 -->|Depends on| n66
  n10 -->|Depends on| n65
  n15 -->|Deployed in| n13
  n20 -->|Refines| n128
  n21 -->|Accepts| n20
  n22 -->|Refines| n128
  n22 -->|Depends on| n24
  n22 -->|Depends on| n40
  n22 -->|Depends on| n39
  n22 -->|Depends on| n55
  n22 -->|Depends on| n26
  n22 -->|Depends on| n50
  n22 -->|Depends on| n27
  n22 -->|Depends on| n41
  n22 -->|Depends on| n29
  n22 -->|Depends on| n57
  n23 -->|Accepts| n22
  n26 -->|Serves| n128
  n26 -->|Depends on| n24
  n26 -->|Depends on| n40
  n26 -->|Depends on| n39
  n27 -->|Refines| n128
  n27 -->|Depends on| n40
  n27 -->|Depends on| n39
  n27 -->|Depends on| n25
  n28 -->|Accepts| n27
  n29 -->|Refines| n128
  n29 -->|Depends on| n40
  n29 -->|Depends on| n39
  n30 -->|Accepts| n29
  n31 -->|Refines| n128
  n31 -->|Depends on| n55
  n31 -->|Depends on| n39
  n31 -->|Depends on| n45
  n32 -->|Accepts| n31
  n34 -->|Refines| n128
  n35 -->|Accepts| n34
  n37 -->|Refines| n128
  n37 -->|Refines| n122
  n38 -->|Accepts| n37
  n39 -->|Serves| n128
  n41 -->|Refines| n128
  n41 -->|Depends on| n24
  n41 -->|Depends on| n40
  n41 -->|Depends on| n39
  n41 -->|Depends on| n26
  n41 -->|Depends on| n57
  n41 -->|Depends on| n33
  n42 -->|Accepts| n41
  n43 -->|Refines| n128
  n43 -->|Refines| n122
  n44 -->|Accepts| n43
  n46 -->|Refines| n128
  n47 -->|Accepts| n46
  n48 -->|Refines| n128
  n49 -->|Accepts| n48
  n50 -->|Refines| n128
  n50 -->|Depends on| n24
  n50 -->|Depends on| n39
  n50 -->|Depends on| n57
  n51 -->|Accepts| n50
  n52 -->|Refines| n128
  n52 -->|Depends on| n24
  n52 -->|Depends on| n39
  n52 -->|Depends on| n45
  n53 -->|Accepts| n52
  n55 -->|Refines| n128
  n55 -->|Depends on| n24
  n55 -->|Depends on| n39
  n56 -->|Accepts| n55
  n57 -->|Refines| n128
  n57 -->|Depends on| n39
  n57 -->|Depends on| n36
  n58 -->|Accepts| n57
  n59 -->|Refines| n128
  n60 -->|Accepts| n59
  n61 -->|Serves| n128
  n61 -->|Depends on| n59
  n61 -->|Depends on| n69
  n61 -->|Depends on| n34
  n61 -->|Depends on| n89
  n61 -->|Depends on| n88
  n63 -->|Serves| n128
  n63 -->|Depends on| n86
  n63 -->|Depends on| n83
  n63 -->|Depends on| n81
  n63 -->|Depends on| n82
  n63 -->|Depends on| n72
  n63 -->|Depends on| n69
  n64 -->|Serves| n128
  n64 -->|Depends on| n71
  n64 -->|Depends on| n72
  n66 -->|Serves| n128
  n66 -->|Depends on| n16
  n66 -->|Depends on| n63
  n66 -->|Depends on| n64
  n66 -->|Depends on| n61
  n66 -->|Depends on| n65
  n66 -->|Depends on| n112
  n69 -->|Refines| n128
  n70 -->|Accepts| n69
  n72 -->|Refines| n128
  n72 -->|Depends on| n71
  n73 -->|Accepts| n72
  n74 -->|Languages offered| n68
  n74 -->|Serves| n128
  n75 -->|Languages offered| n68
  n75 -->|Serves| n128
  n77 -->|Refines| n128
  n77 -->|Depends on| n76
  n78 -->|Accepts| n77
  n81 -->|Serves| n128
  n81 -->|Depends on| n24
  n81 -->|Depends on| n79
  n81 -->|Depends on| n80
  n82 -->|Serves| n128
  n82 -->|Depends on| n31
  n82 -->|Depends on| n22
  n83 -->|Serves| n126
  n83 -->|Depends on| n68
  n83 -->|Depends on| n123
  n83 -->|Depends on| n87
  n86 -->|Serves| n126
  n86 -->|Depends on| n89
  n86 -->|Depends on| n88
  n86 -->|Depends on| n83
  n88 -->|Written in| n84
  n88 -->|Translates| n89
  n89 -->|Written in| n85
  n91 -->|Refines| n128
  n92 -->|Accepts| n91
  n93 -->|Serves| n128
  n93 -->|Depends on| n91
  n93 -->|Depends on| n86
  n93 -->|Depends on| n83
  n95 -->|Serves| n128
  n96 -->|Serves| n128
  n97 -->|Serves| n128
  n98 -->|Serves| n128
  n100 -->|Refines| n121
  n100 -->|Depends on| n77
  n101 -->|Accepts| n100
  n102 -->|Refines| n121
  n102 -->|Depends on| n99
  n103 -->|Accepts| n102
  n104 -->|Refines| n121
  n105 -->|Accepts| n104
  n106 -->|Refines| n121
  n107 -->|Accepts| n106
  n108 -->|Refines| n121
  n109 -->|Accepts| n108
  n110 -->|Serves| n128
  n110 -->|Serves| n121
  n110 -->|Depends on| n108
  n110 -->|Depends on| n102
  n110 -->|Depends on| n106
  n110 -->|Depends on| n22
  n110 -->|Depends on| n93
  n110 -->|Depends on| n46
  n110 -->|Depends on| n94
  n110 -->|Depends on| n86
  n110 -->|Depends on| n83
  n110 -->|Depends on| n67
  n112 -->|Serves| n128
  n112 -->|Depends on| n16
  n112 -->|Depends on| n11
  n112 -->|Depends on| n198
  n112 -->|Depends on| n190
  n112 -->|Depends on| n113
  n112 -->|Depends on| n110
  n112 -->|Depends on| n86
  n112 -->|Depends on| n83
  n112 -->|Depends on| n207
  n113 -->|Serves| n128
  n113 -->|Serves| n121
  n113 -->|Depends on| n119
  n113 -->|Depends on| n31
  n113 -->|Depends on| n104
  n113 -->|Depends on| n100
  n114 -->|Serves| n121
  n114 -->|Applied by| n119
  n114 -->|Applied by| n104
  n115 -->|Serves| n122
  n115 -->|Applied by| n74
  n115 -->|Applied by| n14
  n116 -->|Serves| n126
  n116 -->|Applied by| n68
  n116 -->|Applied by| n123
  n117 -->|Serves| n128
  n117 -->|Applied by| n15
  n117 -->|Applied by| n8
  n117 -->|Applied by| n161
  n118 -->|Serves| n128
  n118 -->|Applied by| n127
  n118 -->|Applied by| n112
  n119 -->|Refines| n121
  n119 -->|Depends on| n125
  n120 -->|Accepts| n119
  n123 -->|Refines| n126
  n124 -->|Accepts| n123
  n129 -->|Verifies| n113
  n129 -->|Verifies| n110
  n129 -->|Verifies| n112
  n129 -->|Verifies| n22
  n129 -->|Verifies| n52
  n129 -->|Verifies| n50
  n129 -->|Verifies| n41
  n129 -->|Verifies| n29
  n129 -->|Verifies| n27
  n129 -->|Verifies| n39
  n129 -->|Verifies| n31
  n129 -->|Verifies| n55
  n129 -->|Verifies| n57
  n129 -->|Verifies| n26
  n129 -->|In| n18
  n129 -->|Depends on| n10
  n129 -->|Depends on| n19
  n129 -->|Depends on| n143
  n129 -->|Depends on| n52
  n129 -->|Depends on| n54
  n129 -->|Depends on| n40
  n129 -->|Depends on| n88
  n129 -->|Depends on| n141
  n130 -->|Verifies| n64
  n130 -->|Verifies| n61
  n130 -->|Verifies| n72
  n130 -->|Verifies| n69
  n130 -->|Verifies| n59
  n130 -->|Verifies| n113
  n130 -->|Verifies| n110
  n130 -->|In| n18
  n130 -->|Depends on| n64
  n130 -->|Depends on| n61
  n130 -->|Depends on| n113
  n130 -->|Depends on| n110
  n130 -->|Depends on| n74
  n130 -->|Depends on| n72
  n130 -->|Depends on| n52
  n130 -->|Depends on| n54
  n130 -->|Depends on| n40
  n130 -->|Depends on| n132
  n130 -->|Depends on| n141
  n131 -->|Depends on| n142
  n133 -->|Verifies| n66
  n133 -->|Verifies| n63
  n133 -->|Verifies| n64
  n133 -->|Verifies| n61
  n133 -->|Verifies| n112
  n133 -->|Verifies| n113
  n133 -->|Verifies| n110
  n133 -->|Verifies| n104
  n133 -->|Verifies| n100
  n133 -->|Verifies| n198
  n133 -->|Verifies| n139
  n133 -->|In| n18
  n133 -->|Depends on| n10
  n133 -->|Depends on| n19
  n133 -->|Depends on| n12
  n133 -->|Depends on| n65
  n133 -->|Depends on| n132
  n133 -->|Depends on| n40
  n133 -->|Depends on| n88
  n133 -->|Depends on| n141
  n134 -->|Verifies| n10
  n134 -->|Verifies| n4
  n134 -->|Verifies| n83
  n134 -->|Verifies| n86
  n134 -->|Verifies| n81
  n134 -->|Verifies| n82
  n134 -->|Verifies| n1
  n134 -->|Verifies| n131
  n134 -->|Verifies| n140
  n134 -->|In| n18
  n134 -->|Depends on| n10
  n134 -->|Depends on| n19
  n134 -->|Depends on| n87
  n134 -->|Depends on| n84
  n134 -->|Depends on| n85
  n134 -->|Depends on| n88
  n134 -->|Depends on| n89
  n134 -->|Depends on| n141
  n134 -->|Depends on| n74
  n134 -->|Depends on| n75
  n135 -->|Chooses| n140
  n135 -->|Chooses| n139
  n135 -->|Chooses| n131
  n135 -->|In| n18
  n136 -->|Verifies| n10
  n136 -->|Verifies| n112
  n136 -->|Verifies| n113
  n136 -->|Verifies| n110
  n136 -->|Verifies| n93
  n136 -->|Verifies| n91
  n136 -->|Verifies| n190
  n136 -->|In| n18
  n136 -->|Depends on| n10
  n136 -->|Depends on| n19
  n136 -->|Depends on| n65
  n136 -->|Depends on| n132
  n136 -->|Depends on| n88
  n136 -->|Depends on| n141
  n136 -->|Depends on| n74
  n136 -->|Depends on| n87
  n137 -->|Verifies| n196
  n137 -->|Verifies| n195
  n137 -->|Verifies| n193
  n137 -->|Verifies| n198
  n137 -->|Verifies| n191
  n137 -->|Verifies| n185
  n137 -->|Verifies| n10
  n137 -->|In| n18
  n137 -->|Depends on| n10
  n137 -->|Depends on| n19
  n137 -->|Depends on| n193
  n137 -->|Depends on| n144
  n137 -->|Depends on| n88
  n137 -->|Depends on| n141
  n138 -->|Verifies| n112
  n138 -->|Verifies| n113
  n138 -->|Verifies| n110
  n138 -->|Verifies| n10
  n138 -->|In| n18
  n138 -->|Depends on| n10
  n138 -->|Depends on| n19
  n138 -->|Depends on| n143
  n138 -->|Depends on| n88
  n138 -->|Depends on| n84
  n138 -->|Depends on| n141
  n139 -->|Implements| n11
  n139 -->|Implements| n12
  n140 -->|Implements| n16
  n140 -->|Implements| n19
  n141 -->|Written in| n84
  n146 -->|Serves| n128
  n148 -->|Serves| n128
  n149 -->|Serves| n128
  n150 -->|Reviews| n74
  n150 -->|Reviews| n75
  n150 -->|By the role| n184
  n151 -->|Serves| n122
  n152 -->|Serves| n128
  n154 -->|Checks| n159
  n154 -->|Signed by| n163
  n154 -->|Verifies| n201
  n155 -->|In| n153
  n156 -->|Verifies| n157
  n156 -->|Verifies| n162
  n156 -->|In| n18
  n156 -->|Depends on| n157
  n156 -->|Depends on| n159
  n156 -->|Depends on| n162
  n156 -->|Depends on| n182
  n156 -->|Depends on| n68
  n156 -->|Depends on| n181
  n156 -->|Depends on| n178
  n157 -->|Serves| n128
  n157 -->|Part of| n166
  n157 -->|Depends on| n159
  n157 -->|Depends on| n68
  n157 -->|Depends on| n162
  n157 -->|Depends on| n160
  n157 -->|Depends on| n182
  n158 -->|Serves| n128
  n159 -->|Produced by| n8
  n161 -->|Checks| n159
  n161 -->|Run by| n157
  n161 -->|Verifies| n0
  n161 -->|Verifies| n203
  n162 -->|Serves| n128
  n162 -->|Depends on| n9
  n162 -->|Depends on| n62
  n162 -->|Depends on| n111
  n164 -->|Serves| n128
  n164 -->|Part of| n166
  n164 -->|Depends on| n159
  n164 -->|Depends on| n183
  n164 -->|Depends on| n182
  n165 -->|Verifies| n164
  n165 -->|In| n18
  n165 -->|Depends on| n164
  n165 -->|Depends on| n159
  n165 -->|Depends on| n183
  n165 -->|Depends on| n181
  n165 -->|Depends on| n178
  n166 -->|Deployed in| n153
  n167 -->|Ships| n159
  n167 -->|Deployed by| n164
  n167 -->|Programs assembled for| n153
  n167 -->|Follows the policy| n168
  n168 -->|Its obligations| n149
  n168 -->|Its obligations| n173
  n168 -->|Its obligations| n176
  n168 -->|Its obligations| n158
  n170 -->|Runs elsewhere| n167
  n171 -->|Runs elsewhere| n167
  n171 -->|Its writer's settings| n169
  n171 -->|Makes available, once shipped| n159
  n172 -->|Serves| n128
  n173 -->|Serves| n128
  n174 -->|Its obligations| n148
  n174 -->|Its obligations| n172
  n174 -->|Its obligations| n152
  n174 -->|Its obligations| n151
  n174 -->|Its obligations| n146
  n174 -->|Its obligations| n176
  n174 -->|Its obligations| n158
  n175 -->|Ships| n159
  n175 -->|Deployed by| n164
  n175 -->|Programs assembled for| n153
  n175 -->|Follows the policy| n174
  n176 -->|Serves| n128
  n177 -->|Ships| n171
  n177 -->|Ships| n170
  n178 -->|Written in| n84
  n179 -->|In| n18
  n180 -->|Serves| n122
  n180 -->|Serves| n128
  n180 -->|Applied by| n167
  n180 -->|Applied by| n175
  n180 -->|Applied by| n161
  n180 -->|Applied by| n154
  n180 -->|Applied by| n150
  n180 -->|Applied by| n157
  n180 -->|Applied by| n164
  n180 -->|Applied by| n147
  n180 -->|Applied by| n145
  n180 -->|Applied by| n171
  n180 -->|Applied by| n170
  n180 -->|Applied by| n177
  n182 -->|Written in| n84
  n185 -->|Refines| n121
  n185 -->|Depends on| n187
  n186 -->|Accepts| n185
  n188 -->|Refines| n121
  n188 -->|Depends on| n187
  n189 -->|Accepts| n188
  n190 -->|Serves| n128
  n190 -->|Depends on| n87
  n191 -->|Refines| n121
  n191 -->|Depends on| n187
  n191 -->|Depends on| n197
  n192 -->|Accepts| n191
  n193 -->|Serves| n121
  n193 -->|Depends on| n87
  n193 -->|Depends on| n188
  n195 -->|Serves| n121
  n195 -->|Serves| n128
  n195 -->|Depends on| n86
  n195 -->|Depends on| n83
  n196 -->|Serves| n121
  n196 -->|Serves| n128
  n196 -->|Depends on| n16
  n196 -->|Depends on| n193
  n196 -->|Depends on| n198
  n196 -->|Depends on| n195
  n196 -->|Depends on| n185
  n196 -->|Depends on| n191
  n196 -->|Depends on| n125
  n198 -->|Serves| n128
  n198 -->|Depends on| n199
  n201 -->|Implements| n11
  n201 -->|Depends on| n200
  n203 -->|Implements| n17
  n203 -->|Uses| n208
  n203 -->|Uses| n209
  n203 -->|Depends on| n204
  n203 -->|Depends on| n206
  n203 -->|Depends on| n207
  n203 -->|Depends on| n205
  n23 -.->|Depends on| n24
  n23 -.->|Depends on| n31
  n23 -.->|Depends on| n40
  n30 -.->|Depends on| n40
  n37 -.->|Depends on| n31
  n37 -.->|Depends on| n22
  n42 -.->|Depends on| n24
  n43 -.->|Depends on| n31
  n43 -.->|Depends on| n52
  n43 -.->|Depends on| n22
  n43 -.->|Depends on| n54
  n49 -.->|Depends on| n31
  n49 -.->|Depends on| n22
  n53 -.->|Depends on| n31
  n53 -.->|Depends on| n22
  n56 -.->|Depends on| n24
  n59 -.->|Depends on| n31
  n59 -.->|Depends on| n22
  n73 -.->|Depends on| n71
  n73 -.->|Depends on| n34
  n73 -.->|Depends on| n31
  n73 -.->|Depends on| n69
  n73 -.->|Depends on| n40
  n73 -.->|Depends on| n52
  n73 -.->|Depends on| n22
  n73 -.->|Depends on| n54
  n74 -.->|Depends on| n43
  n74 -.->|Depends on| n37
  n74 -.->|Depends on| n77
  n74 -.->|Depends on| n125
  n75 -.->|Depends on| n67
  n75 -.->|Depends on| n119
  n75 -.->|Depends on| n77
  n75 -.->|Depends on| n34
  n75 -.->|Depends on| n72
  n91 -.->|Depends on| n90
  n91 -.->|Depends on| n48
  n91 -.->|Depends on| n20
  n92 -.->|Depends on| n31
  n92 -.->|Depends on| n22
  n92 -.->|Depends on| n20
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n202 stroke-dasharray:4 3
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
