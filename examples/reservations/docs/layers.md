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
    n20["Cancel without stress<br/><small>Goal</small>"]:::neutral
    n21["Free cancellation period<br/><small>Decision</small>"]:::neutral
    n22["Idempotent payment provider<br/><small>Assumption</small>"]:::unknown
    n23["Immediate refund<br/><small>Service level objective</small>"]:::unknown
    n24["Late cancellation fee<br/><small>Decision</small>"]:::neutral
    n25["Refund on cancellation<br/><small>Requirement</small>"]:::held
    n26["Refund criteria<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph committee["Product committee · 15 October 2026"]
    n27["Launch of the ultra chargers<br/><small>Amendment</small>"]:::neutral
    n28["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
    n29["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n30["Backup retention<br/><small>Decision</small>"]:::neutral
    n31["Cancellations in SQL<br/><small>Function</small>"]:::held
    n32["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n33["Production database address<br/><small>Decision</small>"]:::neutral
    n34["Production database name<br/><small>Decision</small>"]:::neutral
    n35["Production database size<br/><small>Decision</small>"]:::neutral
    n36["Local SQLite database<br/><small>Implementation</small>"]:::unknown
    n37["Real payment provider<br/><small>Implementation</small>"]:::unknown
    n38["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n39["Initial reservations<br/><small>Decision</small>"]:::neutral
    n40["In-memory SQLite database<br/><small>Implementation</small>"]:::held
    n41["Local<br/><small>Environment</small>"]:::neutral
    n42["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n43["Local database file<br/><small>Decision</small>"]:::neutral
    n44["Node HTTP server<br/><small>Implementation</small>"]:::unknown
    n45["Production Postgres database<br/><small>Implementation</small>"]:::unknown
    n46["PostgreSQL's dialect<br/><small>Function</small>"]:::unknown
    n47["Production<br/><small>Environment</small>"]:::neutral
    n48["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n49["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n50["Payment provider address<br/><small>Decision</small>"]:::neutral
    n51["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n52["Reservations in SQL<br/><small>Function</small>"]:::held
    n53["Tables of the service<br/><small>Decision</small>"]:::neutral
    n54["End of a response<br/><small>Decision</small>"]:::neutral
    n55["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::held
    n56["An in-memory SQLite database for the scenarios<br/><small>Technical choice</small>"]:::held
    n57["Simulated payment provider<br/><small>Function</small>"]:::held
    n58["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::held
    n59["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n60["SQLite's dialect<br/><small>Function</small>"]:::held
    n61["Reservations and cancellations as repositories over SQL<br/><small>Technical choice</small>"]:::held
    n62["Stopped clock<br/><small>Function</small>"]:::held
    n63["System clock<br/><small>Implementation</small>"]:::unknown
    n64["Test<br/><small>Environment</small>"]:::neutral
    n65["Test database<br/><small>Decision</small>"]:::neutral
    n66["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n67["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n68["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n69["Language<br/><small>Decision</small>"]:::neutral
    n70["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph principles["Reservations · Principles"]
    n71["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n72["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n73["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n74["Read a reservation<br/><small>Scenario</small>"]:::held
    n75["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n76["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sdlc["Reservations · SDLC"]
    n77["The code is verified<br/><small>Obligation</small>"]:::neutral
    n78["The decisions hold<br/><small>Obligation</small>"]:::neutral
    n79["Every check is signed<br/><small>Obligation</small>"]:::neutral
    n80["The requirements of the goal hold<br/><small>Obligation</small>"]:::neutral
    n81["The program for a laptop<br/><small>Artefact</small>"]:::unknown
    n82["On a laptop<br/><small>Check</small>"]:::unknown
    n83["On staging<br/><small>Check</small>"]:::unknown
    n84["The operators<br/><small>Role</small>"]:::neutral
    n85["The packages are safe<br/><small>Obligation</small>"]:::neutral
    n86["The program for production<br/><small>Artefact</small>"]:::unknown
    n87["A release<br/><small>Shipment</small>"]:::unknown
    n88["The way of a release<br/><small>Policy</small>"]:::neutral
    n89["The rules hold<br/><small>Obligation</small>"]:::neutral
  end
  subgraph sql["Reservations · SQL"]
    n90["Column definition<br/><small>Syntax element</small>"]:::held
    n91["Condition on a column<br/><small>Syntax element</small>"]:::held
    n92["Count<br/><small>Syntax element</small>"]:::held
    n93["Table creation<br/><small>Syntax element</small>"]:::held
    n94["Insertion<br/><small>Syntax element</small>"]:::held
    n95["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n96["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n97["Selection<br/><small>Syntax element</small>"]:::held
    n98["SQL<br/><small>Standard</small>"]:::neutral
    n99["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n100["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n101["List<br/><small>Syntax element</small>"]:::held
    n102["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph standards["Reservations · Standards"]
    n103["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n104["Paths of entry points<br/><small>Standard</small>"]:::neutral
    n105["SQLite<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n106["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n25
  n0 -->|Part of| n17
  n0 -->|Depends on| n16
  n0 -->|Depends on| n5
  n0 -->|Depends on| n12
  n0 -->|Depends on| n2
  n0 -->|Depends on| n25
  n0 -->|Depends on| n4
  n0 -->|Depends on| n68
  n1 -->|Serves| n25
  n1 -->|Depends on| n21
  n2 -->|Depends on| n6
  n3 -->|Serves| n20
  n3 -->|Part of| n17
  n3 -->|Depends on| n16
  n3 -->|Depends on| n1
  n3 -->|Depends on| n68
  n9 -->|Serves| n20
  n9 -->|Applied by| n15
  n9 -->|Applied by| n19
  n9 -->|Applied by| n18
  n17 -->|Depends on| n10
  n23 -->|Constrains| n25
  n24 -->|Capped by| n67
  n25 -->|Refines| n20
  n25 -->|Assumes| n22
  n25 -->|Depends on| n21
  n25 -->|Depends on| n24
  n26 -->|Accepts| n25
  n27 -->|Amends (not in force)| n25
  n28 -->|Amends| n21
  n29 -->|Approves| n28
  n31 -->|Implements| n5
  n31 -->|Depends on| n7
  n31 -->|Depends on| n8
  n31 -->|Depends on| n53
  n31 -->|Depends on| n32
  n36 -->|Implements| n7
  n36 -->|Implements| n14
  n36 -->|Depends on| n43
  n36 -->|Depends on| n53
  n36 -->|Depends on| n8
  n36 -->|Depends on| n39
  n36 -->|Depends on| n105
  n37 -->|Implements| n12
  n37 -->|Depends on| n50
  n37 -->|Depends on| n103
  n37 -->|Depends on| n68
  n38 -->|Chooses| n44
  n38 -->|In| n64
  n38 -->|In| n41
  n38 -->|In| n47
  n40 -->|Implements| n7
  n40 -->|Implements| n14
  n40 -->|Depends on| n65
  n40 -->|Depends on| n53
  n40 -->|Depends on| n8
  n40 -->|Depends on| n39
  n40 -->|Depends on| n105
  n42 -->|Chooses| n36
  n42 -->|Chooses| n60
  n42 -->|In| n41
  n44 -->|Implements| n10
  n44 -->|Depends on| n11
  n44 -->|Depends on| n104
  n44 -->|Depends on| n54
  n44 -->|Depends on| n68
  n45 -->|Implements| n7
  n45 -->|Implements| n14
  n45 -->|Depends on| n68
  n45 -->|Depends on| n34
  n45 -->|Depends on| n35
  n45 -->|Depends on| n30
  n45 -->|Depends on| n33
  n46 -->|Implements| n8
  n46 -->|Depends on| n96
  n46 -->|Depends on| n95
  n46 -->|Depends on| n90
  n46 -->|Depends on| n93
  n46 -->|Depends on| n92
  n46 -->|Depends on| n94
  n46 -->|Depends on| n97
  n46 -->|Depends on| n102
  n46 -->|Depends on| n91
  n48 -->|Chooses| n45
  n48 -->|Chooses| n46
  n48 -->|In| n47
  n49 -->|Chooses| n37
  n49 -->|In| n47
  n51 -->|Chooses| n63
  n51 -->|In| n41
  n51 -->|In| n47
  n52 -->|Implements| n16
  n52 -->|Depends on| n14
  n52 -->|Depends on| n8
  n52 -->|Depends on| n53
  n55 -->|Chooses| n62
  n55 -->|In| n64
  n56 -->|Chooses| n40
  n56 -->|Chooses| n60
  n56 -->|In| n64
  n57 -->|Implements| n12
  n57 -->|Implements| n13
  n57 -->|Depends on| n59
  n58 -->|Chooses| n57
  n58 -->|In| n64
  n58 -->|In| n41
  n60 -->|Implements| n8
  n60 -->|Depends on| n100
  n60 -->|Depends on| n99
  n60 -->|Depends on| n90
  n60 -->|Depends on| n93
  n60 -->|Depends on| n92
  n60 -->|Depends on| n94
  n60 -->|Depends on| n97
  n60 -->|Depends on| n102
  n60 -->|Depends on| n91
  n61 -->|Chooses| n52
  n61 -->|Chooses| n31
  n61 -->|In| n64
  n61 -->|In| n41
  n61 -->|In| n47
  n62 -->|Implements| n6
  n62 -->|Depends on| n66
  n63 -->|Implements| n6
  n68 -->|Written in| n69
  n70 -->|Written in| n69
  n71 -->|Serves| n20
  n71 -->|Applied by| n0
  n71 -->|Applied by| n4
  n71 -->|Applied by| n75
  n72 -->|Serves| n20
  n72 -->|Applied by| n37
  n73 -->|Verifies| n0
  n73 -->|Verifies| n25
  n73 -->|In| n64
  n73 -->|Depends on| n0
  n73 -->|Depends on| n25
  n73 -->|Depends on| n39
  n73 -->|Depends on| n66
  n73 -->|Depends on| n70
  n74 -->|Verifies| n3
  n74 -->|Verifies| n1
  n74 -->|Verifies| n52
  n74 -->|Verifies| n40
  n74 -->|Verifies| n60
  n74 -->|In| n64
  n74 -->|Depends on| n3
  n74 -->|Depends on| n39
  n74 -->|Depends on| n21
  n74 -->|Depends on| n76
  n74 -->|Depends on| n70
  n75 -->|Verifies| n0
  n75 -->|Verifies| n2
  n75 -->|Verifies| n31
  n75 -->|Verifies| n57
  n75 -->|Verifies| n62
  n75 -->|In| n64
  n75 -->|Depends on| n0
  n75 -->|Depends on| n13
  n75 -->|Depends on| n25
  n75 -->|Depends on| n39
  n75 -->|Depends on| n66
  n75 -->|Depends on| n70
  n77 -->|Serves| n20
  n78 -->|Serves| n20
  n79 -->|Serves| n20
  n80 -->|Serves| n20
  n81 -->|Produced by| n17
  n82 -->|Checks| n81
  n82 -->|Signed by| n84
  n82 -->|Verifies| n36
  n83 -->|Checks| n86
  n83 -->|Signed by| n84
  n83 -->|Verifies| n44
  n83 -->|Verifies| n45
  n83 -->|Verifies| n46
  n83 -->|Verifies| n37
  n83 -->|Verifies| n63
  n85 -->|Serves| n20
  n86 -->|Produced by| n17
  n87 -->|Ships| n86
  n87 -->|Ships| n81
  n87 -->|Programs assembled for| n47
  n87 -->|Follows the policy| n88
  n88 -->|Its obligations| n77
  n88 -->|Its obligations| n80
  n88 -->|Its obligations| n78
  n88 -->|Its obligations| n79
  n88 -->|Its obligations| n89
  n88 -->|Its obligations| n85
  n89 -->|Serves| n20
  n90 -->|Defined by| n98
  n90 -->|Depends on| n98
  n91 -->|Defined by| n98
  n91 -->|Depends on| n98
  n92 -->|Defined by| n98
  n92 -->|Depends on| n98
  n93 -->|Defined by| n98
  n93 -->|Depends on| n98
  n93 -->|Depends on| n101
  n94 -->|Defined by| n98
  n94 -->|Depends on| n98
  n94 -->|Depends on| n101
  n95 -->|Defined by| n96
  n95 -->|Depends on| n96
  n97 -->|Defined by| n98
  n97 -->|Depends on| n98
  n97 -->|Depends on| n101
  n99 -->|Defined by| n100
  n99 -->|Depends on| n100
  n101 -->|Defined by| n98
  n101 -->|Depends on| n98
  n102 -->|Defined by| n98
  n102 -->|Depends on| n98
  n102 -->|Depends on| n101
  n106 -->|Amends| n21
  n26 -.->|Depends on| n21
  n28 -.-|Overlaps| n106
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n27,n28,n29,n106 stroke-dasharray:4 3
  style n27 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
