# Layers

*The graph in force on 30 October 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph api["Reservations · API"]
    n0["Cancel a reservation<br/><small>Entry point</small>"]:::held
    n1["End of free cancellation<br/><small>Function</small>"]:::held
    n2["Lead time of a cancellation<br/><small>Function</small>"]:::held
    n3["Read a reservation<br/><small>Entry point</small>"]:::held
  end
  subgraph architecture["Reservations · Architecture"]
    n4["Key of a cancellation's refund<br/><small>Decision</small>"]:::neutral
    n5["Cancellation records<br/><small>Port</small>"]:::neutral
    n6["Clock<br/><small>Port</small>"]:::neutral
    n7["Effects follow the request<br/><small>Architecture decision</small>"]:::held
    n8["HTTP exposure<br/><small>Port</small>"]:::neutral
    n9["HTTP port of the API<br/><small>Decision</small>"]:::neutral
    n10["Payment provider<br/><small>Port</small>"]:::neutral
    n11["Payment log<br/><small>Port</small>"]:::neutral
    n12["A read writes nothing<br/><small>Architecture rule</small>"]:::held
    n13["Reservation reading<br/><small>Port</small>"]:::neutral
    n14["Reservations API<br/><small>Component</small>"]:::neutral
    n15["Every call to a third party is verified<br/><small>Architecture rule</small>"]:::held
    n16["Utilities do not touch the world<br/><small>Architecture rule</small>"]:::held
  end
  subgraph cancellation["Reservations · Cancellation"]
    n17["How an amount is written<br/><small>Message catalog</small>"]:::neutral
    n18["Cancel without stress<br/><small>Goal</small>"]:::neutral
    n19["Free cancellation period<br/><small>Decision</small>"]:::neutral
    n20["Idempotent payment provider<br/><small>Assumption</small>"]:::unknown
    n21["Immediate refund<br/><small>Service level objective</small>"]:::unknown
    n22["Late cancellation fee<br/><small>Decision</small>"]:::neutral
    n23["Refund on cancellation<br/><small>Requirement</small>"]:::held
    n24["Refund criteria<br/><small>Acceptance criteria</small>"]:::held
    n25["Swiss francs<br/><small>Quantity</small>"]:::neutral
  end
  subgraph committee["Product committee · 15 October 2026"]
    n26["Launch of the ultra chargers<br/><small>Amendment</small>"]:::neutral
    n27["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
    n28["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  end
  subgraph consumer["Reservations · Consumer law"]
    n29["A day ahead, a full refund<br/><small>Requirement</small>"]:::held
    n30["Criteria of a full refund a day ahead<br/><small>Acceptance criteria</small>"]:::held
    n31["Notice for a full refund<br/><small>Decision</small>"]:::neutral
  end
  subgraph data["Reservations · Data"]
    n32["Chargers<br/><small>Vocabulary</small>"]:::neutral
    n33["The refund of a cancelled reservation<br/><small>Entity</small>"]:::held
    n34["A reservation<br/><small>Entity</small>"]:::held
    n35["Statuses of a reservation<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n36["Backup retention<br/><small>Decision</small>"]:::neutral
    n37["Cancellations as records<br/><small>Function</small>"]:::held
    n38["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n39["Production database address<br/><small>Decision</small>"]:::neutral
    n40["Production database name<br/><small>Decision</small>"]:::neutral
    n41["Production database size<br/><small>Decision</small>"]:::neutral
    n42["Nothing to start with in production<br/><small>Technical choice</small>"]:::unknown
    n43["Local SQLite database<br/><small>Implementation</small>"]:::unknown
    n44["The first reservations<br/><small>Function</small>"]:::held
    n45["The first reservations outside production<br/><small>Technical choice</small>"]:::held
    n46["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n47["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n48["Initial reservations<br/><small>Decision</small>"]:::neutral
    n49["What the service keeps, as tables<br/><small>Technical choice</small>"]:::held
    n50["Local<br/><small>Environment</small>"]:::neutral
    n51["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n52["Local database file<br/><small>Decision</small>"]:::neutral
    n53["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n54["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n55["Production<br/><small>Environment</small>"]:::neutral
    n56["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n57["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n58["Payment provider address<br/><small>Decision</small>"]:::neutral
    n59["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n60["Reservations and cancellations as repositories over the records<br/><small>Technical choice</small>"]:::held
    n61["Reservations as records<br/><small>Function</small>"]:::held
    n62["End of a response<br/><small>Decision</small>"]:::neutral
    n63["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n64["A SQLite database in memory for the scenarios<br/><small>Technical choice</small>"]:::held
    n65["Simulated payment provider<br/><small>Function</small>"]:::held
    n66["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n67["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n68["Stopped clock<br/><small>Function</small>"]:::held
    n69["System clock<br/><small>Implementation</small>"]:::unknown
    n70["Test<br/><small>Environment</small>"]:::neutral
    n71["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n72["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
    n73["The cap, decided<br/><small>Amendment</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n74["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n75["Language<br/><small>Decision</small>"]:::neutral
    n76["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n77["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n78["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n79["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n80["Read a reservation<br/><small>Scenario</small>"]:::held
    n81["A read never writes<br/><small>Scenario</small>"]:::held
    n82["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n83["The storage is prepared<br/><small>Scenario</small>"]:::held
    n84["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n85["The code is verified<br/><small>Obligation</small>"]:::neutral
    n86["Commands on this machine<br/><small>Technical choice</small>"]:::unknown
    n87["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n88["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n89["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n90["What the service keeps, migrated<br/><small>Obligation</small>"]:::neutral
    n91["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n92["The way of this machine<br/><small>Policy</small>"]:::neutral
    n93["On a laptop<br/><small>Check</small>"]:::unknown
    n94["On staging<br/><small>Check</small>"]:::unknown
    n95["On this machine<br/><small>Shipment</small>"]:::unknown
    n96["The operators<br/><small>Role</small>"]:::neutral
    n97["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n98["Prepare the storage<br/><small>Entry point</small>"]:::held
    n99["The program for production<br/><small>Artefact</small>"]:::unknown
    n100["A release<br/><small>Shipment</small>"]:::unknown
    n101["The way of a release<br/><small>Policy</small>"]:::neutral
    n102["The service's SDLC<br/><small>Component</small>"]:::neutral
    n103["The rules hold<br/><small>Obligation</small>"]:::neutral
  end
  subgraph standards["Reservations · Standards"]
    n104["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n105["Paths of entry points<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n106["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n23
  n0 -->|Part of| n14
  n0 -->|Depends on| n13
  n0 -->|Depends on| n5
  n0 -->|Depends on| n10
  n0 -->|Depends on| n2
  n0 -->|Depends on| n23
  n0 -->|Depends on| n4
  n0 -->|Depends on| n6
  n0 -->|Depends on| n74
  n1 -->|Serves| n23
  n1 -->|Depends on| n19
  n2 -->|Depends on| n6
  n3 -->|Serves| n18
  n3 -->|Part of| n14
  n3 -->|Depends on| n13
  n3 -->|Depends on| n1
  n3 -->|Depends on| n74
  n7 -->|Serves| n18
  n7 -->|Applied by| n12
  n7 -->|Applied by| n16
  n7 -->|Applied by| n15
  n14 -->|Depends on| n8
  n17 -->|Written in| n75
  n21 -->|Constrains| n23
  n22 -->|Capped by| n72
  n23 -->|Refines| n18
  n23 -->|Assumes| n20
  n23 -->|Depends on| n19
  n23 -->|Depends on| n22
  n24 -->|Accepts| n23
  n25 -->|Written with| n17
  n26 -->|Amends (not in force)| n23
  n27 -->|Amends| n19
  n28 -->|Approves| n27
  n29 -->|Refines| n18
  n29 -->|Constrains| n23
  n29 -->|Depends on| n31
  n30 -->|Accepts| n29
  n32 -->|Serves| n18
  n33 -->|Serves| n18
  n34 -->|Serves| n18
  n35 -->|Serves| n18
  n37 -->|Implements| n5
  n37 -->|Depends on| n34
  n37 -->|Depends on| n33
  n37 -->|Depends on| n38
  n42 -->|In| n55
  n43 -->|Depends on| n52
  n44 -->|Depends on| n48
  n44 -->|Depends on| n34
  n45 -->|Chooses| n44
  n45 -->|In| n70
  n45 -->|In| n50
  n46 -->|Implements| n10
  n46 -->|Depends on| n58
  n46 -->|Depends on| n104
  n46 -->|Depends on| n74
  n47 -->|Chooses| n53
  n47 -->|In| n70
  n47 -->|In| n50
  n47 -->|In| n55
  n49 -->|In| n70
  n49 -->|In| n50
  n49 -->|In| n55
  n51 -->|Chooses| n43
  n51 -->|In| n50
  n53 -->|Implements| n8
  n53 -->|Depends on| n9
  n53 -->|Depends on| n105
  n53 -->|Depends on| n62
  n53 -->|Depends on| n74
  n54 -->|Depends on| n74
  n54 -->|Depends on| n40
  n54 -->|Depends on| n41
  n54 -->|Depends on| n36
  n54 -->|Depends on| n39
  n56 -->|Chooses| n54
  n56 -->|In| n55
  n57 -->|Chooses| n46
  n57 -->|In| n55
  n59 -->|Chooses| n69
  n59 -->|In| n50
  n59 -->|In| n55
  n60 -->|Chooses| n61
  n60 -->|Chooses| n37
  n60 -->|In| n70
  n60 -->|In| n50
  n60 -->|In| n55
  n61 -->|Implements| n13
  n61 -->|Depends on| n34
  n63 -->|Chooses| n68
  n63 -->|In| n70
  n64 -->|In| n70
  n65 -->|Implements| n10
  n65 -->|Implements| n11
  n65 -->|Depends on| n67
  n66 -->|Chooses| n65
  n66 -->|In| n70
  n66 -->|In| n50
  n68 -->|Implements| n6
  n68 -->|Depends on| n71
  n69 -->|Implements| n6
  n73 -->|Amends (not in force)| n72
  n74 -->|Written in| n75
  n76 -->|Written in| n75
  n77 -->|Serves| n18
  n77 -->|Applied by| n0
  n77 -->|Applied by| n4
  n77 -->|Applied by| n82
  n78 -->|Serves| n18
  n78 -->|Applied by| n46
  n79 -->|Verifies| n0
  n79 -->|Verifies| n23
  n79 -->|In| n70
  n79 -->|Depends on| n0
  n79 -->|Depends on| n23
  n79 -->|Depends on| n48
  n79 -->|Depends on| n71
  n79 -->|Depends on| n76
  n80 -->|Verifies| n3
  n80 -->|Verifies| n1
  n80 -->|Verifies| n61
  n80 -->|Verifies| n44
  n80 -->|In| n70
  n80 -->|Depends on| n3
  n80 -->|Depends on| n48
  n80 -->|Depends on| n19
  n80 -->|Depends on| n84
  n80 -->|Depends on| n76
  n81 -->|In| n70
  n81 -->|Depends on| n34
  n81 -->|Depends on| n38
  n81 -->|Depends on| n48
  n81 -->|Depends on| n76
  n82 -->|Verifies| n0
  n82 -->|Verifies| n2
  n82 -->|Verifies| n37
  n82 -->|Verifies| n65
  n82 -->|Verifies| n68
  n82 -->|In| n70
  n82 -->|Depends on| n0
  n82 -->|Depends on| n11
  n82 -->|Depends on| n23
  n82 -->|Depends on| n48
  n82 -->|Depends on| n71
  n82 -->|Depends on| n76
  n83 -->|Verifies| n98
  n83 -->|In| n70
  n83 -->|Depends on| n98
  n83 -->|Depends on| n34
  n83 -->|Depends on| n33
  n83 -->|Depends on| n48
  n83 -->|Depends on| n76
  n85 -->|Serves| n18
  n86 -->|In| n50
  n87 -->|Serves| n18
  n88 -->|Serves| n18
  n89 -->|Serves| n18
  n90 -->|Serves| n18
  n91 -->|Produced by| n14
  n91 -->|Assembled for| n50
  n92 -->|Its obligations| n85
  n92 -->|Its obligations| n103
  n92 -->|Its obligations| n90
  n93 -->|Checks| n91
  n93 -->|Signed by| n96
  n93 -->|Verifies| n43
  n94 -->|Checks| n99
  n94 -->|Signed by| n96
  n94 -->|Verifies| n53
  n94 -->|Verifies| n54
  n94 -->|Verifies| n46
  n94 -->|Verifies| n69
  n95 -->|Ships| n91
  n95 -->|Deployed by| n98
  n95 -->|Programs assembled for| n50
  n95 -->|Follows the policy| n92
  n97 -->|Serves| n18
  n98 -->|Serves| n18
  n98 -->|Part of| n102
  n98 -->|Depends on| n34
  n98 -->|Depends on| n33
  n98 -->|Depends on| n74
  n99 -->|Produced by| n14
  n100 -->|Ships| n99
  n100 -->|Ships| n91
  n100 -->|Programs assembled for| n55
  n100 -->|Follows the policy| n101
  n101 -->|Its obligations| n85
  n101 -->|Its obligations| n89
  n101 -->|Its obligations| n87
  n101 -->|Its obligations| n88
  n101 -->|Its obligations| n103
  n101 -->|Its obligations| n97
  n101 -->|Its obligations| n90
  n102 -->|Deployed in| n50
  n103 -->|Serves| n18
  n106 -->|Amends| n19
  n24 -.->|Depends on| n19
  n33 -.->|Depends on| n34
  n33 -.->|Depends on| n25
  n34 -.->|Depends on| n32
  n34 -.->|Depends on| n25
  n34 -.->|Depends on| n35
  n27 -.-|Overlaps| n106
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n26,n27,n28,n73,n106 stroke-dasharray:4 3
  style n26 opacity:0.5
  style n73 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
