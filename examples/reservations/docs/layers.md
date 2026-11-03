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
  subgraph consumer["Reservations · Consumer law"]
    n32["A day ahead, a full refund<br/><small>Requirement</small>"]:::held
    n33["Criteria of a full refund a day ahead<br/><small>Acceptance criteria</small>"]:::held
    n34["Notice for a full refund<br/><small>Decision</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n35["Backup retention<br/><small>Decision</small>"]:::neutral
    n36["Cancellations in SQL<br/><small>Function</small>"]:::held
    n37["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n38["Production database address<br/><small>Decision</small>"]:::neutral
    n39["Production database name<br/><small>Decision</small>"]:::neutral
    n40["Production database size<br/><small>Decision</small>"]:::neutral
    n41["Local SQLite database<br/><small>Implementation</small>"]:::unknown
    n42["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n43["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n44["Initial reservations<br/><small>Decision</small>"]:::neutral
    n45["In-memory SQLite database<br/><small>Implementation</small>"]:::held
    n46["Local<br/><small>Environment</small>"]:::neutral
    n47["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n48["Local database file<br/><small>Decision</small>"]:::neutral
    n49["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n50["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n51["PostgreSQL's dialect<br/><small>Function</small>"]:::unknown
    n52["Production<br/><small>Environment</small>"]:::neutral
    n53["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n54["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n55["Payment provider address<br/><small>Decision</small>"]:::neutral
    n56["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n57["Reservations in SQL<br/><small>Function</small>"]:::held
    n58["Tables of the service<br/><small>Decision</small>"]:::neutral
    n59["End of a response<br/><small>Decision</small>"]:::neutral
    n60["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n61["An in-memory SQLite database for the scenarios<br/><small>Technical choice</small>"]:::held
    n62["Simulated payment provider<br/><small>Function</small>"]:::held
    n63["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n64["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n65["SQLite's dialect<br/><small>Function</small>"]:::held
    n66["Reservations and cancellations as repositories over SQL<br/><small>Technical choice</small>"]:::held
    n67["Stopped clock<br/><small>Function</small>"]:::held
    n68["System clock<br/><small>Implementation</small>"]:::unknown
    n69["Test<br/><small>Environment</small>"]:::neutral
    n70["Test database<br/><small>Decision</small>"]:::neutral
    n71["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n72["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
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
    n82["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n83["The code is verified<br/><small>Obligation</small>"]:::neutral
    n84["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n85["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n86["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n87["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n88["On a laptop<br/><small>Check</small>"]:::unknown
    n89["On staging<br/><small>Check</small>"]:::unknown
    n90["The operators<br/><small>Role</small>"]:::neutral
    n91["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n92["The program for production<br/><small>Artefact</small>"]:::unknown
    n93["A release<br/><small>Shipment</small>"]:::unknown
    n94["The way of a release<br/><small>Policy</small>"]:::neutral
    n95["The rules hold<br/><small>Obligation</small>"]:::neutral
  end
  subgraph sql["Reservations · SQL"]
    n96["Column definition<br/><small>Syntax element</small>"]:::held
    n97["Condition on a column<br/><small>Syntax element</small>"]:::held
    n98["Count<br/><small>Syntax element</small>"]:::held
    n99["Table creation<br/><small>Syntax element</small>"]:::held
    n100["Insertion<br/><small>Syntax element</small>"]:::held
    n101["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n102["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n103["Selection<br/><small>Syntax element</small>"]:::held
    n104["SQL<br/><small>Standard</small>"]:::neutral
    n105["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n106["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n107["List<br/><small>Syntax element</small>"]:::held
    n108["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph standards["Reservations · Standards"]
    n109["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n110["Paths of entry points<br/><small>Standard</small>"]:::neutral
    n111["SQLite<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n112["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n26
  n0 -->|Part of| n17
  n0 -->|Depends on| n16
  n0 -->|Depends on| n5
  n0 -->|Depends on| n12
  n0 -->|Depends on| n2
  n0 -->|Depends on| n26
  n0 -->|Depends on| n4
  n0 -->|Depends on| n73
  n1 -->|Serves| n26
  n1 -->|Depends on| n22
  n2 -->|Depends on| n6
  n3 -->|Serves| n21
  n3 -->|Part of| n17
  n3 -->|Depends on| n16
  n3 -->|Depends on| n1
  n3 -->|Depends on| n73
  n9 -->|Serves| n21
  n9 -->|Applied by| n15
  n9 -->|Applied by| n19
  n9 -->|Applied by| n18
  n17 -->|Depends on| n10
  n20 -->|Written in| n74
  n24 -->|Constrains| n26
  n25 -->|Capped by| n72
  n26 -->|Refines| n21
  n26 -->|Assumes| n23
  n26 -->|Depends on| n22
  n26 -->|Depends on| n25
  n27 -->|Accepts| n26
  n28 -->|Written with| n20
  n29 -->|Amends (not in force)| n26
  n30 -->|Amends| n22
  n31 -->|Approves| n30
  n32 -->|Refines| n21
  n32 -->|Constrains| n26
  n32 -->|Depends on| n34
  n33 -->|Accepts| n32
  n36 -->|Implements| n5
  n36 -->|Depends on| n7
  n36 -->|Depends on| n8
  n36 -->|Depends on| n58
  n36 -->|Depends on| n37
  n41 -->|Implements| n7
  n41 -->|Implements| n14
  n41 -->|Depends on| n48
  n41 -->|Depends on| n58
  n41 -->|Depends on| n8
  n41 -->|Depends on| n44
  n41 -->|Depends on| n111
  n42 -->|Implements| n12
  n42 -->|Depends on| n55
  n42 -->|Depends on| n109
  n42 -->|Depends on| n73
  n43 -->|Chooses| n49
  n43 -->|In| n69
  n43 -->|In| n46
  n43 -->|In| n52
  n45 -->|Implements| n7
  n45 -->|Implements| n14
  n45 -->|Depends on| n70
  n45 -->|Depends on| n58
  n45 -->|Depends on| n8
  n45 -->|Depends on| n44
  n45 -->|Depends on| n111
  n47 -->|Chooses| n41
  n47 -->|Chooses| n65
  n47 -->|In| n46
  n49 -->|Implements| n10
  n49 -->|Depends on| n11
  n49 -->|Depends on| n110
  n49 -->|Depends on| n59
  n49 -->|Depends on| n73
  n50 -->|Implements| n7
  n50 -->|Implements| n14
  n50 -->|Depends on| n73
  n50 -->|Depends on| n39
  n50 -->|Depends on| n40
  n50 -->|Depends on| n35
  n50 -->|Depends on| n38
  n51 -->|Implements| n8
  n51 -->|Depends on| n102
  n51 -->|Depends on| n101
  n51 -->|Depends on| n96
  n51 -->|Depends on| n99
  n51 -->|Depends on| n98
  n51 -->|Depends on| n100
  n51 -->|Depends on| n103
  n51 -->|Depends on| n108
  n51 -->|Depends on| n97
  n53 -->|Chooses| n50
  n53 -->|Chooses| n51
  n53 -->|In| n52
  n54 -->|Chooses| n42
  n54 -->|In| n52
  n56 -->|Chooses| n68
  n56 -->|In| n46
  n56 -->|In| n52
  n57 -->|Implements| n16
  n57 -->|Depends on| n14
  n57 -->|Depends on| n8
  n57 -->|Depends on| n58
  n60 -->|Chooses| n67
  n60 -->|In| n69
  n61 -->|Chooses| n45
  n61 -->|Chooses| n65
  n61 -->|In| n69
  n62 -->|Implements| n12
  n62 -->|Implements| n13
  n62 -->|Depends on| n64
  n63 -->|Chooses| n62
  n63 -->|In| n69
  n63 -->|In| n46
  n65 -->|Implements| n8
  n65 -->|Depends on| n106
  n65 -->|Depends on| n105
  n65 -->|Depends on| n96
  n65 -->|Depends on| n99
  n65 -->|Depends on| n98
  n65 -->|Depends on| n100
  n65 -->|Depends on| n103
  n65 -->|Depends on| n108
  n65 -->|Depends on| n97
  n66 -->|Chooses| n57
  n66 -->|Chooses| n36
  n66 -->|In| n69
  n66 -->|In| n46
  n66 -->|In| n52
  n67 -->|Implements| n6
  n67 -->|Depends on| n71
  n68 -->|Implements| n6
  n73 -->|Written in| n74
  n75 -->|Written in| n74
  n76 -->|Serves| n21
  n76 -->|Applied by| n0
  n76 -->|Applied by| n4
  n76 -->|Applied by| n81
  n77 -->|Serves| n21
  n77 -->|Applied by| n42
  n78 -->|Verifies| n0
  n78 -->|Verifies| n26
  n78 -->|In| n69
  n78 -->|Depends on| n0
  n78 -->|Depends on| n26
  n78 -->|Depends on| n44
  n78 -->|Depends on| n71
  n78 -->|Depends on| n75
  n79 -->|Verifies| n3
  n79 -->|Verifies| n1
  n79 -->|Verifies| n57
  n79 -->|Verifies| n45
  n79 -->|Verifies| n65
  n79 -->|In| n69
  n79 -->|Depends on| n3
  n79 -->|Depends on| n44
  n79 -->|Depends on| n22
  n79 -->|Depends on| n82
  n79 -->|Depends on| n75
  n80 -->|Verifies| n45
  n80 -->|In| n69
  n80 -->|Depends on| n14
  n80 -->|Depends on| n8
  n80 -->|Depends on| n58
  n80 -->|Depends on| n37
  n80 -->|Depends on| n44
  n80 -->|Depends on| n75
  n81 -->|Verifies| n0
  n81 -->|Verifies| n2
  n81 -->|Verifies| n36
  n81 -->|Verifies| n62
  n81 -->|Verifies| n67
  n81 -->|In| n69
  n81 -->|Depends on| n0
  n81 -->|Depends on| n13
  n81 -->|Depends on| n26
  n81 -->|Depends on| n44
  n81 -->|Depends on| n71
  n81 -->|Depends on| n75
  n83 -->|Serves| n21
  n84 -->|Serves| n21
  n85 -->|Serves| n21
  n86 -->|Serves| n21
  n87 -->|Produced by| n17
  n88 -->|Checks| n87
  n88 -->|Signed by| n90
  n88 -->|Verifies| n41
  n89 -->|Checks| n92
  n89 -->|Signed by| n90
  n89 -->|Verifies| n49
  n89 -->|Verifies| n50
  n89 -->|Verifies| n51
  n89 -->|Verifies| n42
  n89 -->|Verifies| n68
  n91 -->|Serves| n21
  n92 -->|Produced by| n17
  n93 -->|Ships| n92
  n93 -->|Ships| n87
  n93 -->|Programs assembled for| n52
  n93 -->|Follows the policy| n94
  n94 -->|Its obligations| n83
  n94 -->|Its obligations| n86
  n94 -->|Its obligations| n84
  n94 -->|Its obligations| n85
  n94 -->|Its obligations| n95
  n94 -->|Its obligations| n91
  n95 -->|Serves| n21
  n96 -->|Defined by| n104
  n96 -->|Depends on| n104
  n97 -->|Defined by| n104
  n97 -->|Depends on| n104
  n98 -->|Defined by| n104
  n98 -->|Depends on| n104
  n99 -->|Defined by| n104
  n99 -->|Depends on| n104
  n99 -->|Depends on| n107
  n100 -->|Defined by| n104
  n100 -->|Depends on| n104
  n100 -->|Depends on| n107
  n101 -->|Defined by| n102
  n101 -->|Depends on| n102
  n103 -->|Defined by| n104
  n103 -->|Depends on| n104
  n103 -->|Depends on| n107
  n105 -->|Defined by| n106
  n105 -->|Depends on| n106
  n107 -->|Defined by| n104
  n107 -->|Depends on| n104
  n108 -->|Defined by| n104
  n108 -->|Depends on| n104
  n108 -->|Depends on| n107
  n112 -->|Amends| n22
  n27 -.->|Depends on| n22
  n30 -.-|Overlaps| n112
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n29,n30,n31,n112 stroke-dasharray:4 3
  style n29 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
