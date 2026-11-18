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
  subgraph legal["Legal"]
    n71["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
    n72["The cap, decided<br/><small>Amendment</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n73["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n74["Language<br/><small>Decision</small>"]:::neutral
    n75["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n76["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n77["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n78["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n79["Read a reservation<br/><small>Scenario</small>"]:::held
    n80["A read never writes<br/><small>Scenario</small>"]:::held
    n81["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n82["The storage is prepared<br/><small>Scenario</small>"]:::held
    n83["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n84["Who calls, identified<br/><small>Obligation</small>"]:::neutral
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
  n1 -->|Depends on| n73
  n2 -->|Serves| n24
  n2 -->|Depends on| n20
  n3 -->|Depends on| n7
  n4 -->|Serves| n19
  n4 -->|Part of| n15
  n4 -->|For| n0
  n4 -->|Depends on| n14
  n4 -->|Depends on| n2
  n4 -->|Depends on| n73
  n8 -->|Serves| n19
  n8 -->|Applied by| n13
  n8 -->|Applied by| n17
  n8 -->|Applied by| n16
  n15 -->|Depends on| n9
  n18 -->|Written in| n74
  n22 -->|Constrains| n24
  n23 -->|Capped by| n71
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
  n46 -->|Depends on| n104
  n46 -->|Depends on| n73
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
  n52 -->|Depends on| n105
  n52 -->|Depends on| n61
  n52 -->|Depends on| n73
  n53 -->|Depends on| n73
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
  n72 -->|Amends (not in force)| n71
  n73 -->|Written in| n74
  n75 -->|Written in| n74
  n76 -->|Serves| n19
  n76 -->|Applied by| n1
  n76 -->|Applied by| n5
  n76 -->|Applied by| n81
  n77 -->|Serves| n19
  n77 -->|Applied by| n46
  n78 -->|Verifies| n1
  n78 -->|Verifies| n24
  n78 -->|In| n69
  n78 -->|Depends on| n1
  n78 -->|Depends on| n24
  n78 -->|Depends on| n35
  n78 -->|Depends on| n70
  n78 -->|Depends on| n75
  n79 -->|Verifies| n4
  n79 -->|Verifies| n2
  n79 -->|Verifies| n60
  n79 -->|In| n69
  n79 -->|Depends on| n4
  n79 -->|Depends on| n35
  n79 -->|Depends on| n20
  n79 -->|Depends on| n83
  n79 -->|Depends on| n75
  n80 -->|In| n69
  n80 -->|Depends on| n35
  n80 -->|Depends on| n39
  n80 -->|Depends on| n75
  n81 -->|Verifies| n1
  n81 -->|Verifies| n3
  n81 -->|Verifies| n38
  n81 -->|Verifies| n64
  n81 -->|Verifies| n67
  n81 -->|In| n69
  n81 -->|Depends on| n1
  n81 -->|Depends on| n12
  n81 -->|Depends on| n24
  n81 -->|Depends on| n35
  n81 -->|Depends on| n70
  n81 -->|Depends on| n75
  n82 -->|Verifies| n98
  n82 -->|In| n69
  n82 -->|Depends on| n98
  n82 -->|Depends on| n35
  n82 -->|Depends on| n34
  n82 -->|Depends on| n75
  n84 -->|Serves| n19
  n85 -->|Serves| n19
  n86 -->|In| n49
  n87 -->|Serves| n19
  n88 -->|Serves| n19
  n89 -->|Serves| n19
  n90 -->|Serves| n19
  n91 -->|Produced by| n15
  n91 -->|Assembled for| n49
  n92 -->|Its obligations| n85
  n92 -->|Its obligations| n103
  n92 -->|Its obligations| n90
  n93 -->|Checks| n91
  n93 -->|Signed by| n96
  n93 -->|Verifies| n44
  n94 -->|Checks| n99
  n94 -->|Signed by| n96
  n94 -->|Verifies| n52
  n94 -->|Verifies| n53
  n94 -->|Verifies| n46
  n94 -->|Verifies| n68
  n95 -->|Ships| n91
  n95 -->|Deployed by| n98
  n95 -->|Programs assembled for| n49
  n95 -->|Follows the policy| n92
  n97 -->|Serves| n19
  n98 -->|Serves| n19
  n98 -->|Part of| n102
  n98 -->|Depends on| n35
  n98 -->|Depends on| n34
  n98 -->|Depends on| n73
  n99 -->|Produced by| n15
  n100 -->|Ships| n99
  n100 -->|Ships| n91
  n100 -->|Programs assembled for| n54
  n100 -->|Follows the policy| n101
  n101 -->|Its obligations| n85
  n101 -->|Its obligations| n89
  n101 -->|Its obligations| n87
  n101 -->|Its obligations| n88
  n101 -->|Its obligations| n103
  n101 -->|Its obligations| n97
  n101 -->|Its obligations| n90
  n101 -->|Its obligations| n84
  n102 -->|Deployed in| n49
  n103 -->|Serves| n19
  n106 -->|Amends| n20
  n25 -.->|Depends on| n20
  n34 -.->|Depends on| n35
  n34 -.->|Depends on| n26
  n35 -.->|Depends on| n33
  n35 -.->|Depends on| n26
  n35 -.->|Depends on| n36
  n28 -.-|Overlaps| n106
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n27,n28,n29,n72,n106 stroke-dasharray:4 3
  style n27 opacity:0.5
  style n72 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
