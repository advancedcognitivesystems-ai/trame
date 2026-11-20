# Layers

*The graph in force on 30 October 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph access["Reservations · Access"]
    n0["Drivers<br/><small>Audience</small>"]:::neutral
  end
  subgraph api["Reservations · API"]
    n1["Cancel a reservation<br/><small>Entry point</small>"]:::held
    n2["End of free cancellation<br/><small>Function</small>"]:::held
    n3["Lead time of a cancellation<br/><small>Function</small>"]:::held
    n4["Read a reservation<br/><small>Entry point</small>"]:::held
  end
  subgraph architecture["Reservations · Architecture"]
    n5["Key of a cancellation's refund<br/><small>Decision</small>"]:::neutral
    n6["Cancellation records<br/><small>Port</small>"]:::neutral
    n7["Clock<br/><small>Port</small>"]:::neutral
    n8["Effects follow the request<br/><small>Architecture decision</small>"]:::held
    n9["HTTP exposure<br/><small>Port</small>"]:::neutral
    n10["HTTP port of the API<br/><small>Decision</small>"]:::neutral
    n11["Payment provider<br/><small>Port</small>"]:::neutral
    n12["Payment log<br/><small>Port</small>"]:::neutral
    n13["A read writes nothing<br/><small>Architecture rule</small>"]:::held
    n14["Reservation reading<br/><small>Port</small>"]:::neutral
    n15["Reservations API<br/><small>Component</small>"]:::neutral
    n16["Every call to a third party is verified<br/><small>Architecture rule</small>"]:::held
    n17["Utilities do not touch the world<br/><small>Architecture rule</small>"]:::held
  end
  subgraph cancellation["Reservations · Cancellation"]
    n18["How an amount is written<br/><small>Message catalog</small>"]:::neutral
    n19["Cancel without stress<br/><small>Goal</small>"]:::neutral
    n20["Free cancellation period<br/><small>Decision</small>"]:::neutral
    n21["Idempotent payment provider<br/><small>Assumption</small>"]:::unknown
    n22["Immediate refund<br/><small>Service level objective</small>"]:::unknown
    n23["Late cancellation fee<br/><small>Decision</small>"]:::neutral
    n24["Refund on cancellation<br/><small>Requirement</small>"]:::held
    n25["Refund criteria<br/><small>Acceptance criteria</small>"]:::held
    n26["Swiss francs<br/><small>Quantity</small>"]:::neutral
  end
  subgraph committee["Product committee · 15 October 2026"]
    n27["Launch of the ultra chargers<br/><small>Amendment</small>"]:::neutral
    n28["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
    n29["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  end
  subgraph consumer["Reservations · Consumer law"]
    n30["A day ahead, a full refund<br/><small>Requirement</small>"]:::held
    n31["Criteria of a full refund a day ahead<br/><small>Acceptance criteria</small>"]:::held
    n32["Notice for a full refund<br/><small>Decision</small>"]:::neutral
  end
  subgraph data["Reservations · Data"]
    n33["Chargers<br/><small>Vocabulary</small>"]:::neutral
    n34["The refund of a cancelled reservation<br/><small>Entity</small>"]:::held
    n35["A reservation<br/><small>Entity</small>"]:::held
    n36["Statuses of a reservation<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n37["Backup retention<br/><small>Decision</small>"]:::neutral
    n38["Cancellations as records<br/><small>Function</small>"]:::held
    n39["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n40["Production database address<br/><small>Decision</small>"]:::neutral
    n41["Production database name<br/><small>Decision</small>"]:::neutral
    n42["Production database size<br/><small>Decision</small>"]:::neutral
    n43["Nothing to start with in production<br/><small>Technical choice</small>"]:::unknown
    n44["Local SQLite database<br/><small>Implementation</small>"]:::unknown
    n45["The first reservations outside production<br/><small>Technical choice</small>"]:::held
    n46["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n47["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n48["What the service keeps, as tables<br/><small>Technical choice</small>"]:::held
    n49["Local<br/><small>Environment</small>"]:::neutral
    n50["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n51["Local database file<br/><small>Decision</small>"]:::neutral
    n52["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n53["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n54["Production<br/><small>Environment</small>"]:::neutral
    n55["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n56["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n57["Payment provider address<br/><small>Decision</small>"]:::neutral
    n58["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n59["Reservations and cancellations as repositories over the records<br/><small>Technical choice</small>"]:::held
    n60["Reservations as records<br/><small>Function</small>"]:::held
    n61["End of a response<br/><small>Decision</small>"]:::neutral
    n62["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n63["A SQLite database in memory for the scenarios<br/><small>Technical choice</small>"]:::held
    n64["Simulated payment provider<br/><small>Function</small>"]:::held
    n65["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n66["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n67["Stopped clock<br/><small>Function</small>"]:::held
    n68["System clock<br/><small>Implementation</small>"]:::unknown
    n69["Test<br/><small>Environment</small>"]:::neutral
    n70["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph judgment["Reservations · Judgment"]
    n71["The problems the service will not leave<br/><small>Decision</small>"]:::neutral
    n72["How the service is judged<br/><small>Technical choice</small>"]:::held
    n73["What the scenario of the judgment checks<br/><small>Message catalog</small>"]:::neutral
    n74["Judged our way<br/><small>Function</small>"]:::held
    n75["The service's problems judged<br/><small>Scenario</small>"]:::held
  end
  subgraph legal["Legal"]
    n76["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
    n77["The cap, decided<br/><small>Amendment</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n78["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n79["Language<br/><small>Decision</small>"]:::neutral
    n80["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph people["Reservations · People"]
    n81["Karim<br/><small>Actor</small>"]:::neutral
    n82["Léa<br/><small>Actor</small>"]:::neutral
    n83["The service's team<br/><small>Actor</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n84["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n85["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n86["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n87["Read a reservation<br/><small>Scenario</small>"]:::held
    n88["A read never writes<br/><small>Scenario</small>"]:::held
    n89["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n90["The storage is prepared<br/><small>Scenario</small>"]:::held
    n91["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n92["Who calls, identified<br/><small>Obligation</small>"]:::neutral
    n93["The code is verified<br/><small>Obligation</small>"]:::neutral
    n94["Commands on this machine<br/><small>Technical choice</small>"]:::unknown
    n95["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n96["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n97["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n98["Into the main branch<br/><small>Shipment</small>"]:::unknown
    n99["What the service keeps, migrated<br/><small>Obligation</small>"]:::neutral
    n100["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n101["The way of this machine<br/><small>Policy</small>"]:::neutral
    n102["How a change merges<br/><small>Policy</small>"]:::neutral
    n103["On a laptop<br/><small>Check</small>"]:::unknown
    n104["On staging<br/><small>Check</small>"]:::unknown
    n105["On this machine<br/><small>Shipment</small>"]:::unknown
    n106["The operators<br/><small>Role</small>"]:::neutral
    n107["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n108["Prepare the storage<br/><small>Entry point</small>"]:::held
    n109["The program for production<br/><small>Artefact</small>"]:::unknown
    n110["What people decided, published<br/><small>Obligation</small>"]:::neutral
    n111["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n112["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n113["A release<br/><small>Shipment</small>"]:::unknown
    n114["The way of a release<br/><small>Policy</small>"]:::neutral
    n115["The service's SDLC<br/><small>Component</small>"]:::neutral
    n116["The rules hold<br/><small>Obligation</small>"]:::neutral
    n117["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n118["The service<br/><small>Artefact</small>"]:::unknown
  end
  subgraph standards["Reservations · Standards"]
    n119["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n120["Paths of entry points<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n121["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n19
  n1 -->|Serves| n24
  n1 -->|Part of| n15
  n1 -->|For| n0
  n1 -->|Depends on| n14
  n1 -->|Depends on| n6
  n1 -->|Depends on| n11
  n1 -->|Depends on| n3
  n1 -->|Depends on| n24
  n1 -->|Depends on| n5
  n1 -->|Depends on| n7
  n1 -->|Depends on| n78
  n2 -->|Serves| n24
  n2 -->|Depends on| n20
  n3 -->|Depends on| n7
  n4 -->|Serves| n19
  n4 -->|Part of| n15
  n4 -->|For| n0
  n4 -->|Depends on| n14
  n4 -->|Depends on| n2
  n4 -->|Depends on| n78
  n8 -->|Serves| n19
  n8 -->|Applied by| n13
  n8 -->|Applied by| n17
  n8 -->|Applied by| n16
  n15 -->|Depends on| n9
  n18 -->|Written in| n79
  n22 -->|Constrains| n24
  n23 -->|Capped by| n76
  n24 -->|Refines| n19
  n24 -->|Assumes| n21
  n24 -->|Depends on| n20
  n24 -->|Depends on| n23
  n25 -->|Accepts| n24
  n26 -->|Written with| n18
  n27 -->|Amends (not in force)| n24
  n28 -->|Amends| n20
  n29 -->|Approves| n28
  n30 -->|Refines| n19
  n30 -->|Constrains| n24
  n30 -->|Depends on| n32
  n31 -->|Accepts| n30
  n33 -->|Serves| n19
  n34 -->|Serves| n19
  n35 -->|Serves| n19
  n36 -->|Serves| n19
  n38 -->|Implements| n6
  n38 -->|Depends on| n35
  n38 -->|Depends on| n34
  n38 -->|Depends on| n39
  n43 -->|In| n54
  n44 -->|Depends on| n51
  n45 -->|In| n69
  n45 -->|In| n49
  n46 -->|Implements| n11
  n46 -->|Depends on| n57
  n46 -->|Depends on| n119
  n46 -->|Depends on| n78
  n47 -->|Chooses| n52
  n47 -->|In| n69
  n47 -->|In| n49
  n47 -->|In| n54
  n48 -->|In| n69
  n48 -->|In| n49
  n48 -->|In| n54
  n50 -->|Chooses| n44
  n50 -->|In| n49
  n52 -->|Implements| n9
  n52 -->|Depends on| n10
  n52 -->|Depends on| n120
  n52 -->|Depends on| n61
  n52 -->|Depends on| n78
  n53 -->|Depends on| n78
  n53 -->|Depends on| n41
  n53 -->|Depends on| n42
  n53 -->|Depends on| n37
  n53 -->|Depends on| n40
  n55 -->|Chooses| n53
  n55 -->|In| n54
  n56 -->|Chooses| n46
  n56 -->|In| n54
  n58 -->|Chooses| n68
  n58 -->|In| n49
  n58 -->|In| n54
  n59 -->|Chooses| n60
  n59 -->|Chooses| n38
  n59 -->|In| n69
  n59 -->|In| n49
  n59 -->|In| n54
  n60 -->|Implements| n14
  n60 -->|Depends on| n35
  n62 -->|Chooses| n67
  n62 -->|In| n69
  n63 -->|In| n69
  n64 -->|Implements| n11
  n64 -->|Implements| n12
  n64 -->|Depends on| n66
  n65 -->|Chooses| n64
  n65 -->|In| n69
  n65 -->|In| n49
  n67 -->|Implements| n7
  n67 -->|Depends on| n70
  n68 -->|Implements| n7
  n72 -->|Chooses| n74
  n72 -->|In| n69
  n73 -->|Written in| n79
  n74 -->|Serves| n19
  n74 -->|Depends on| n71
  n75 -->|Verifies| n74
  n75 -->|In| n69
  n75 -->|Depends on| n73
  n77 -->|Amends (not in force)| n76
  n78 -->|Written in| n79
  n80 -->|Written in| n79
  n81 -->|Serves| n19
  n82 -->|Serves| n19
  n83 -->|Members| n81
  n83 -->|Members| n82
  n83 -->|Serves| n19
  n84 -->|Serves| n19
  n84 -->|Applied by| n1
  n84 -->|Applied by| n5
  n84 -->|Applied by| n89
  n85 -->|Serves| n19
  n85 -->|Applied by| n46
  n86 -->|Verifies| n1
  n86 -->|Verifies| n24
  n86 -->|In| n69
  n86 -->|Depends on| n1
  n86 -->|Depends on| n24
  n86 -->|Depends on| n35
  n86 -->|Depends on| n70
  n86 -->|Depends on| n80
  n87 -->|Verifies| n4
  n87 -->|Verifies| n2
  n87 -->|Verifies| n60
  n87 -->|In| n69
  n87 -->|Depends on| n4
  n87 -->|Depends on| n35
  n87 -->|Depends on| n20
  n87 -->|Depends on| n91
  n87 -->|Depends on| n80
  n88 -->|In| n69
  n88 -->|Depends on| n35
  n88 -->|Depends on| n39
  n88 -->|Depends on| n80
  n89 -->|Verifies| n1
  n89 -->|Verifies| n3
  n89 -->|Verifies| n38
  n89 -->|Verifies| n64
  n89 -->|Verifies| n67
  n89 -->|In| n69
  n89 -->|Depends on| n1
  n89 -->|Depends on| n12
  n89 -->|Depends on| n24
  n89 -->|Depends on| n35
  n89 -->|Depends on| n70
  n89 -->|Depends on| n80
  n90 -->|Verifies| n108
  n90 -->|In| n69
  n90 -->|Depends on| n108
  n90 -->|Depends on| n35
  n90 -->|Depends on| n34
  n90 -->|Depends on| n80
  n92 -->|Serves| n19
  n93 -->|Serves| n19
  n94 -->|In| n49
  n95 -->|Serves| n19
  n96 -->|Serves| n19
  n97 -->|Serves| n19
  n98 -->|Ships| n118
  n98 -->|Follows the policy| n102
  n99 -->|Serves| n19
  n100 -->|Produced by| n15
  n100 -->|Assembled for| n49
  n101 -->|Its obligations| n93
  n101 -->|Its obligations| n116
  n101 -->|Its obligations| n99
  n102 -->|Its obligations| n110
  n103 -->|Checks| n100
  n103 -->|Signed by| n106
  n103 -->|Verifies| n44
  n104 -->|Checks| n109
  n104 -->|Signed by| n106
  n104 -->|Verifies| n52
  n104 -->|Verifies| n53
  n104 -->|Verifies| n46
  n104 -->|Verifies| n68
  n105 -->|Ships| n100
  n105 -->|Deployed by| n108
  n105 -->|Programs assembled for| n49
  n105 -->|Follows the policy| n101
  n107 -->|Serves| n19
  n108 -->|Serves| n19
  n108 -->|Part of| n115
  n108 -->|Depends on| n35
  n108 -->|Depends on| n34
  n108 -->|Depends on| n78
  n109 -->|Produced by| n15
  n110 -->|Serves| n19
  n112 -->|Runs elsewhere| n98
  n112 -->|Its writer's settings| n111
  n113 -->|Ships| n109
  n113 -->|Ships| n100
  n113 -->|Programs assembled for| n54
  n113 -->|Follows the policy| n114
  n114 -->|Its obligations| n93
  n114 -->|Its obligations| n97
  n114 -->|Its obligations| n95
  n114 -->|Its obligations| n96
  n114 -->|Its obligations| n116
  n114 -->|Its obligations| n107
  n114 -->|Its obligations| n99
  n114 -->|Its obligations| n92
  n115 -->|Deployed in| n49
  n116 -->|Serves| n19
  n117 -->|Ships| n112
  n121 -->|Amends| n20
  n25 -.->|Depends on| n20
  n34 -.->|Depends on| n35
  n34 -.->|Depends on| n26
  n35 -.->|Depends on| n33
  n35 -.->|Depends on| n26
  n35 -.->|Depends on| n36
  n28 -.-|Overlaps| n121
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n27,n28,n29,n77,n121 stroke-dasharray:4 3
  style n27 opacity:0.5
  style n77 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
