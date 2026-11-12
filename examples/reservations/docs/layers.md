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
    n44["The first reservations outside production<br/><small>Technical choice</small>"]:::held
    n45["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n46["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n47["What the service keeps, as tables<br/><small>Technical choice</small>"]:::held
    n48["Local<br/><small>Environment</small>"]:::neutral
    n49["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n50["Local database file<br/><small>Decision</small>"]:::neutral
    n51["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n52["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n53["Production<br/><small>Environment</small>"]:::neutral
    n54["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n55["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n56["Payment provider address<br/><small>Decision</small>"]:::neutral
    n57["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n58["Reservations and cancellations as repositories over the records<br/><small>Technical choice</small>"]:::held
    n59["Reservations as records<br/><small>Function</small>"]:::held
    n60["End of a response<br/><small>Decision</small>"]:::neutral
    n61["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n62["A SQLite database in memory for the scenarios<br/><small>Technical choice</small>"]:::held
    n63["Simulated payment provider<br/><small>Function</small>"]:::held
    n64["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n65["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n66["Stopped clock<br/><small>Function</small>"]:::held
    n67["System clock<br/><small>Implementation</small>"]:::unknown
    n68["Test<br/><small>Environment</small>"]:::neutral
    n69["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n70["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
    n71["The cap, decided<br/><small>Amendment</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n72["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n73["Language<br/><small>Decision</small>"]:::neutral
    n74["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n75["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n76["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n77["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n78["Read a reservation<br/><small>Scenario</small>"]:::held
    n79["A read never writes<br/><small>Scenario</small>"]:::held
    n80["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n81["The storage is prepared<br/><small>Scenario</small>"]:::held
    n82["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n83["The code is verified<br/><small>Obligation</small>"]:::neutral
    n84["Commands on this machine<br/><small>Technical choice</small>"]:::unknown
    n85["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n86["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n87["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n88["What the service keeps, migrated<br/><small>Obligation</small>"]:::neutral
    n89["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n90["The way of this machine<br/><small>Policy</small>"]:::neutral
    n91["On a laptop<br/><small>Check</small>"]:::unknown
    n92["On staging<br/><small>Check</small>"]:::unknown
    n93["On this machine<br/><small>Shipment</small>"]:::unknown
    n94["The operators<br/><small>Role</small>"]:::neutral
    n95["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n96["Prepare the storage<br/><small>Entry point</small>"]:::held
    n97["The program for production<br/><small>Artefact</small>"]:::unknown
    n98["A release<br/><small>Shipment</small>"]:::unknown
    n99["The way of a release<br/><small>Policy</small>"]:::neutral
    n100["The service's SDLC<br/><small>Component</small>"]:::neutral
    n101["The rules hold<br/><small>Obligation</small>"]:::neutral
  end
  subgraph standards["Reservations · Standards"]
    n102["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n103["Paths of entry points<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n104["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
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
  n0 -->|Depends on| n72
  n1 -->|Serves| n23
  n1 -->|Depends on| n19
  n2 -->|Depends on| n6
  n3 -->|Serves| n18
  n3 -->|Part of| n14
  n3 -->|Depends on| n13
  n3 -->|Depends on| n1
  n3 -->|Depends on| n72
  n7 -->|Serves| n18
  n7 -->|Applied by| n12
  n7 -->|Applied by| n16
  n7 -->|Applied by| n15
  n14 -->|Depends on| n8
  n17 -->|Written in| n73
  n21 -->|Constrains| n23
  n22 -->|Capped by| n70
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
  n42 -->|In| n53
  n43 -->|Depends on| n50
  n44 -->|In| n68
  n44 -->|In| n48
  n45 -->|Implements| n10
  n45 -->|Depends on| n56
  n45 -->|Depends on| n102
  n45 -->|Depends on| n72
  n46 -->|Chooses| n51
  n46 -->|In| n68
  n46 -->|In| n48
  n46 -->|In| n53
  n47 -->|In| n68
  n47 -->|In| n48
  n47 -->|In| n53
  n49 -->|Chooses| n43
  n49 -->|In| n48
  n51 -->|Implements| n8
  n51 -->|Depends on| n9
  n51 -->|Depends on| n103
  n51 -->|Depends on| n60
  n51 -->|Depends on| n72
  n52 -->|Depends on| n72
  n52 -->|Depends on| n40
  n52 -->|Depends on| n41
  n52 -->|Depends on| n36
  n52 -->|Depends on| n39
  n54 -->|Chooses| n52
  n54 -->|In| n53
  n55 -->|Chooses| n45
  n55 -->|In| n53
  n57 -->|Chooses| n67
  n57 -->|In| n48
  n57 -->|In| n53
  n58 -->|Chooses| n59
  n58 -->|Chooses| n37
  n58 -->|In| n68
  n58 -->|In| n48
  n58 -->|In| n53
  n59 -->|Implements| n13
  n59 -->|Depends on| n34
  n61 -->|Chooses| n66
  n61 -->|In| n68
  n62 -->|In| n68
  n63 -->|Implements| n10
  n63 -->|Implements| n11
  n63 -->|Depends on| n65
  n64 -->|Chooses| n63
  n64 -->|In| n68
  n64 -->|In| n48
  n66 -->|Implements| n6
  n66 -->|Depends on| n69
  n67 -->|Implements| n6
  n71 -->|Amends (not in force)| n70
  n72 -->|Written in| n73
  n74 -->|Written in| n73
  n75 -->|Serves| n18
  n75 -->|Applied by| n0
  n75 -->|Applied by| n4
  n75 -->|Applied by| n80
  n76 -->|Serves| n18
  n76 -->|Applied by| n45
  n77 -->|Verifies| n0
  n77 -->|Verifies| n23
  n77 -->|In| n68
  n77 -->|Depends on| n0
  n77 -->|Depends on| n23
  n77 -->|Depends on| n34
  n77 -->|Depends on| n69
  n77 -->|Depends on| n74
  n78 -->|Verifies| n3
  n78 -->|Verifies| n1
  n78 -->|Verifies| n59
  n78 -->|In| n68
  n78 -->|Depends on| n3
  n78 -->|Depends on| n34
  n78 -->|Depends on| n19
  n78 -->|Depends on| n82
  n78 -->|Depends on| n74
  n79 -->|In| n68
  n79 -->|Depends on| n34
  n79 -->|Depends on| n38
  n79 -->|Depends on| n74
  n80 -->|Verifies| n0
  n80 -->|Verifies| n2
  n80 -->|Verifies| n37
  n80 -->|Verifies| n63
  n80 -->|Verifies| n66
  n80 -->|In| n68
  n80 -->|Depends on| n0
  n80 -->|Depends on| n11
  n80 -->|Depends on| n23
  n80 -->|Depends on| n34
  n80 -->|Depends on| n69
  n80 -->|Depends on| n74
  n81 -->|Verifies| n96
  n81 -->|In| n68
  n81 -->|Depends on| n96
  n81 -->|Depends on| n34
  n81 -->|Depends on| n33
  n81 -->|Depends on| n74
  n83 -->|Serves| n18
  n84 -->|In| n48
  n85 -->|Serves| n18
  n86 -->|Serves| n18
  n87 -->|Serves| n18
  n88 -->|Serves| n18
  n89 -->|Produced by| n14
  n89 -->|Assembled for| n48
  n90 -->|Its obligations| n83
  n90 -->|Its obligations| n101
  n90 -->|Its obligations| n88
  n91 -->|Checks| n89
  n91 -->|Signed by| n94
  n91 -->|Verifies| n43
  n92 -->|Checks| n97
  n92 -->|Signed by| n94
  n92 -->|Verifies| n51
  n92 -->|Verifies| n52
  n92 -->|Verifies| n45
  n92 -->|Verifies| n67
  n93 -->|Ships| n89
  n93 -->|Deployed by| n96
  n93 -->|Programs assembled for| n48
  n93 -->|Follows the policy| n90
  n95 -->|Serves| n18
  n96 -->|Serves| n18
  n96 -->|Part of| n100
  n96 -->|Depends on| n34
  n96 -->|Depends on| n33
  n96 -->|Depends on| n72
  n97 -->|Produced by| n14
  n98 -->|Ships| n97
  n98 -->|Ships| n89
  n98 -->|Programs assembled for| n53
  n98 -->|Follows the policy| n99
  n99 -->|Its obligations| n83
  n99 -->|Its obligations| n87
  n99 -->|Its obligations| n85
  n99 -->|Its obligations| n86
  n99 -->|Its obligations| n101
  n99 -->|Its obligations| n95
  n99 -->|Its obligations| n88
  n100 -->|Deployed in| n48
  n101 -->|Serves| n18
  n104 -->|Amends| n19
  n24 -.->|Depends on| n19
  n33 -.->|Depends on| n34
  n33 -.->|Depends on| n25
  n34 -.->|Depends on| n32
  n34 -.->|Depends on| n25
  n34 -.->|Depends on| n35
  n27 -.-|Overlaps| n104
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n26,n27,n28,n71,n104 stroke-dasharray:4 3
  style n26 opacity:0.5
  style n71 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
