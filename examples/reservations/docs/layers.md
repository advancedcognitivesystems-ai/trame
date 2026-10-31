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
    n7["Database<br/><small>Port</small>"]:::neutral
    n8["SQL dialect<br/><small>Port</small>"]:::neutral
    n9["Effects follow the request<br/><small>Architecture decision</small>"]:::held
    n10["HTTP exposure<br/><small>Port</small>"]:::neutral
    n11["HTTP port of the API<br/><small>Decision</small>"]:::neutral
    n12["Payment provider<br/><small>Port</small>"]:::neutral
    n13["Payment log<br/><small>Port</small>"]:::neutral
    n14["Read-only database<br/><small>Port</small>"]:::neutral
    n15["A read writes nothing<br/><small>Architecture rule</small>"]:::held
    n16["Reservation reading<br/><small>Port</small>"]:::neutral
    n17["Reservations API<br/><small>Component</small>"]:::neutral
    n18["Every call to a third party is verified<br/><small>Architecture rule</small>"]:::held
    n19["Utilities do not touch the world<br/><small>Architecture rule</small>"]:::held
  end
  subgraph cancellation["Reservations · Cancellation"]
    n20["How an amount is written<br/><small>Message catalog</small>"]:::neutral
    n21["Cancel without stress<br/><small>Goal</small>"]:::neutral
    n22["Free cancellation period<br/><small>Decision</small>"]:::neutral
    n23["Idempotent payment provider<br/><small>Assumption</small>"]:::unknown
    n24["Immediate refund<br/><small>Service level objective</small>"]:::unknown
    n25["Late cancellation fee<br/><small>Decision</small>"]:::neutral
    n26["Refund on cancellation<br/><small>Requirement</small>"]:::held
    n27["Refund criteria<br/><small>Acceptance criteria</small>"]:::held
    n28["Swiss francs<br/><small>Quantity</small>"]:::neutral
  end
  subgraph committee["Product committee · 15 October 2026"]
    n29["Launch of the ultra chargers<br/><small>Amendment</small>"]:::neutral
    n30["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
    n31["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n32["Backup retention<br/><small>Decision</small>"]:::neutral
    n33["Cancellations in SQL<br/><small>Function</small>"]:::held
    n34["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n35["Production database address<br/><small>Decision</small>"]:::neutral
    n36["Production database name<br/><small>Decision</small>"]:::neutral
    n37["Production database size<br/><small>Decision</small>"]:::neutral
    n38["Local SQLite database<br/><small>Implementation</small>"]:::unknown
    n39["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n40["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n41["Initial reservations<br/><small>Decision</small>"]:::neutral
    n42["In-memory SQLite database<br/><small>Implementation</small>"]:::held
    n43["Local<br/><small>Environment</small>"]:::neutral
    n44["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n45["Local database file<br/><small>Decision</small>"]:::neutral
    n46["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n47["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n48["PostgreSQL's dialect<br/><small>Function</small>"]:::unknown
    n49["Production<br/><small>Environment</small>"]:::neutral
    n50["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n51["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n52["Payment provider address<br/><small>Decision</small>"]:::neutral
    n53["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n54["Reservations in SQL<br/><small>Function</small>"]:::held
    n55["Tables of the service<br/><small>Decision</small>"]:::neutral
    n56["End of a response<br/><small>Decision</small>"]:::neutral
    n57["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n58["An in-memory SQLite database for the scenarios<br/><small>Technical choice</small>"]:::held
    n59["Simulated payment provider<br/><small>Function</small>"]:::held
    n60["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n61["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n62["SQLite's dialect<br/><small>Function</small>"]:::held
    n63["Reservations and cancellations as repositories over SQL<br/><small>Technical choice</small>"]:::held
    n64["Stopped clock<br/><small>Function</small>"]:::held
    n65["System clock<br/><small>Implementation</small>"]:::unknown
    n66["Test<br/><small>Environment</small>"]:::neutral
    n67["Test database<br/><small>Decision</small>"]:::neutral
    n68["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n69["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n70["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n71["Language<br/><small>Decision</small>"]:::neutral
    n72["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n73["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n74["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n75["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n76["Read a reservation<br/><small>Scenario</small>"]:::held
    n77["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n78["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n79["The code is verified<br/><small>Obligation</small>"]:::neutral
    n80["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n81["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n82["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n83["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n84["On a laptop<br/><small>Check</small>"]:::unknown
    n85["On staging<br/><small>Check</small>"]:::unknown
    n86["The operators<br/><small>Role</small>"]:::neutral
    n87["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n88["The program for production<br/><small>Artefact</small>"]:::unknown
    n89["A release<br/><small>Shipment</small>"]:::unknown
    n90["The way of a release<br/><small>Policy</small>"]:::neutral
    n91["The rules hold<br/><small>Obligation</small>"]:::neutral
  end
  subgraph sql["Reservations · SQL"]
    n92["Column definition<br/><small>Syntax element</small>"]:::held
    n93["Condition on a column<br/><small>Syntax element</small>"]:::held
    n94["Count<br/><small>Syntax element</small>"]:::held
    n95["Table creation<br/><small>Syntax element</small>"]:::held
    n96["Insertion<br/><small>Syntax element</small>"]:::held
    n97["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n98["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n99["Selection<br/><small>Syntax element</small>"]:::held
    n100["SQL<br/><small>Standard</small>"]:::neutral
    n101["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n102["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n103["List<br/><small>Syntax element</small>"]:::held
    n104["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph standards["Reservations · Standards"]
    n105["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n106["Paths of entry points<br/><small>Standard</small>"]:::neutral
    n107["SQLite<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n108["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n26
  n0 -->|Part of| n17
  n0 -->|Depends on| n16
  n0 -->|Depends on| n5
  n0 -->|Depends on| n12
  n0 -->|Depends on| n2
  n0 -->|Depends on| n26
  n0 -->|Depends on| n4
  n0 -->|Depends on| n70
  n1 -->|Serves| n26
  n1 -->|Depends on| n22
  n2 -->|Depends on| n6
  n3 -->|Serves| n21
  n3 -->|Part of| n17
  n3 -->|Depends on| n16
  n3 -->|Depends on| n1
  n3 -->|Depends on| n70
  n9 -->|Serves| n21
  n9 -->|Applied by| n15
  n9 -->|Applied by| n19
  n9 -->|Applied by| n18
  n17 -->|Depends on| n10
  n20 -->|Written in| n71
  n24 -->|Constrains| n26
  n25 -->|Capped by| n69
  n26 -->|Refines| n21
  n26 -->|Assumes| n23
  n26 -->|Depends on| n22
  n26 -->|Depends on| n25
  n27 -->|Accepts| n26
  n28 -->|Written with| n20
  n29 -->|Amends (not in force)| n26
  n30 -->|Amends| n22
  n31 -->|Approves| n30
  n33 -->|Implements| n5
  n33 -->|Depends on| n7
  n33 -->|Depends on| n8
  n33 -->|Depends on| n55
  n33 -->|Depends on| n34
  n38 -->|Implements| n7
  n38 -->|Implements| n14
  n38 -->|Depends on| n45
  n38 -->|Depends on| n55
  n38 -->|Depends on| n8
  n38 -->|Depends on| n41
  n38 -->|Depends on| n107
  n39 -->|Implements| n12
  n39 -->|Depends on| n52
  n39 -->|Depends on| n105
  n39 -->|Depends on| n70
  n40 -->|Chooses| n46
  n40 -->|In| n66
  n40 -->|In| n43
  n40 -->|In| n49
  n42 -->|Implements| n7
  n42 -->|Implements| n14
  n42 -->|Depends on| n67
  n42 -->|Depends on| n55
  n42 -->|Depends on| n8
  n42 -->|Depends on| n41
  n42 -->|Depends on| n107
  n44 -->|Chooses| n38
  n44 -->|Chooses| n62
  n44 -->|In| n43
  n46 -->|Implements| n10
  n46 -->|Depends on| n11
  n46 -->|Depends on| n106
  n46 -->|Depends on| n56
  n46 -->|Depends on| n70
  n47 -->|Implements| n7
  n47 -->|Implements| n14
  n47 -->|Depends on| n70
  n47 -->|Depends on| n36
  n47 -->|Depends on| n37
  n47 -->|Depends on| n32
  n47 -->|Depends on| n35
  n48 -->|Implements| n8
  n48 -->|Depends on| n98
  n48 -->|Depends on| n97
  n48 -->|Depends on| n92
  n48 -->|Depends on| n95
  n48 -->|Depends on| n94
  n48 -->|Depends on| n96
  n48 -->|Depends on| n99
  n48 -->|Depends on| n104
  n48 -->|Depends on| n93
  n50 -->|Chooses| n47
  n50 -->|Chooses| n48
  n50 -->|In| n49
  n51 -->|Chooses| n39
  n51 -->|In| n49
  n53 -->|Chooses| n65
  n53 -->|In| n43
  n53 -->|In| n49
  n54 -->|Implements| n16
  n54 -->|Depends on| n14
  n54 -->|Depends on| n8
  n54 -->|Depends on| n55
  n57 -->|Chooses| n64
  n57 -->|In| n66
  n58 -->|Chooses| n42
  n58 -->|Chooses| n62
  n58 -->|In| n66
  n59 -->|Implements| n12
  n59 -->|Implements| n13
  n59 -->|Depends on| n61
  n60 -->|Chooses| n59
  n60 -->|In| n66
  n60 -->|In| n43
  n62 -->|Implements| n8
  n62 -->|Depends on| n102
  n62 -->|Depends on| n101
  n62 -->|Depends on| n92
  n62 -->|Depends on| n95
  n62 -->|Depends on| n94
  n62 -->|Depends on| n96
  n62 -->|Depends on| n99
  n62 -->|Depends on| n104
  n62 -->|Depends on| n93
  n63 -->|Chooses| n54
  n63 -->|Chooses| n33
  n63 -->|In| n66
  n63 -->|In| n43
  n63 -->|In| n49
  n64 -->|Implements| n6
  n64 -->|Depends on| n68
  n65 -->|Implements| n6
  n70 -->|Written in| n71
  n72 -->|Written in| n71
  n73 -->|Serves| n21
  n73 -->|Applied by| n0
  n73 -->|Applied by| n4
  n73 -->|Applied by| n77
  n74 -->|Serves| n21
  n74 -->|Applied by| n39
  n75 -->|Verifies| n0
  n75 -->|Verifies| n26
  n75 -->|In| n66
  n75 -->|Depends on| n0
  n75 -->|Depends on| n26
  n75 -->|Depends on| n41
  n75 -->|Depends on| n68
  n75 -->|Depends on| n72
  n76 -->|Verifies| n3
  n76 -->|Verifies| n1
  n76 -->|Verifies| n54
  n76 -->|Verifies| n42
  n76 -->|Verifies| n62
  n76 -->|In| n66
  n76 -->|Depends on| n3
  n76 -->|Depends on| n41
  n76 -->|Depends on| n22
  n76 -->|Depends on| n78
  n76 -->|Depends on| n72
  n77 -->|Verifies| n0
  n77 -->|Verifies| n2
  n77 -->|Verifies| n33
  n77 -->|Verifies| n59
  n77 -->|Verifies| n64
  n77 -->|In| n66
  n77 -->|Depends on| n0
  n77 -->|Depends on| n13
  n77 -->|Depends on| n26
  n77 -->|Depends on| n41
  n77 -->|Depends on| n68
  n77 -->|Depends on| n72
  n79 -->|Serves| n21
  n80 -->|Serves| n21
  n81 -->|Serves| n21
  n82 -->|Serves| n21
  n83 -->|Produced by| n17
  n84 -->|Checks| n83
  n84 -->|Signed by| n86
  n84 -->|Verifies| n38
  n85 -->|Checks| n88
  n85 -->|Signed by| n86
  n85 -->|Verifies| n46
  n85 -->|Verifies| n47
  n85 -->|Verifies| n48
  n85 -->|Verifies| n39
  n85 -->|Verifies| n65
  n87 -->|Serves| n21
  n88 -->|Produced by| n17
  n89 -->|Ships| n88
  n89 -->|Ships| n83
  n89 -->|Programs assembled for| n49
  n89 -->|Follows the policy| n90
  n90 -->|Its obligations| n79
  n90 -->|Its obligations| n82
  n90 -->|Its obligations| n80
  n90 -->|Its obligations| n81
  n90 -->|Its obligations| n91
  n90 -->|Its obligations| n87
  n91 -->|Serves| n21
  n92 -->|Defined by| n100
  n92 -->|Depends on| n100
  n93 -->|Defined by| n100
  n93 -->|Depends on| n100
  n94 -->|Defined by| n100
  n94 -->|Depends on| n100
  n95 -->|Defined by| n100
  n95 -->|Depends on| n100
  n95 -->|Depends on| n103
  n96 -->|Defined by| n100
  n96 -->|Depends on| n100
  n96 -->|Depends on| n103
  n97 -->|Defined by| n98
  n97 -->|Depends on| n98
  n99 -->|Defined by| n100
  n99 -->|Depends on| n100
  n99 -->|Depends on| n103
  n101 -->|Defined by| n102
  n101 -->|Depends on| n102
  n103 -->|Defined by| n100
  n103 -->|Depends on| n100
  n104 -->|Defined by| n100
  n104 -->|Depends on| n100
  n104 -->|Depends on| n103
  n108 -->|Amends| n22
  n27 -.->|Depends on| n22
  n30 -.-|Overlaps| n108
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n29,n30,n31,n108 stroke-dasharray:4 3
  style n29 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
