# Layers

*The graph in force on 17 October 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph api["Reservations · API"]
    n0["Cancel a reservation<br/><small>Entry point</small>"]:::held
    n1["End of free cancellation<br/><small>Function</small>"]:::unknown
    n2["Lead time of a cancellation<br/><small>Function</small>"]:::unknown
    n3["Read a reservation<br/><small>Entry point</small>"]:::held
  end
  subgraph architecture["Reservations · Architecture"]
    n4["Key of a cancellation's refund<br/><small>Decision</small>"]:::neutral
    n5["Cancellation records<br/><small>Port</small>"]:::neutral
    n6["Clock<br/><small>Port</small>"]:::neutral
    n7["Database<br/><small>Port</small>"]:::neutral
    n8["SQL dialect<br/><small>Port</small>"]:::neutral
    n9["HTTP exposure<br/><small>Port</small>"]:::neutral
    n10["HTTP port of the API<br/><small>Decision</small>"]:::neutral
    n11["Payment provider<br/><small>Port</small>"]:::neutral
    n12["Payment log<br/><small>Port</small>"]:::neutral
    n13["Read-only database<br/><small>Port</small>"]:::neutral
    n14["A read writes nothing<br/><small>Architecture rule</small>"]:::held
    n15["Reservation reading<br/><small>Port</small>"]:::neutral
    n16["Reservations API<br/><small>Component</small>"]:::neutral
    n17["Every call to a third party is verified<br/><small>Architecture rule</small>"]:::held
    n18["Utilities do not touch the world<br/><small>Architecture rule</small>"]:::held
  end
  subgraph cancellation["Reservations · Cancellation"]
    n19["Cancel without stress<br/><small>Goal</small>"]:::neutral
    n20["Free cancellation period<br/><small>Decision</small>"]:::neutral
    n21["Idempotent payment provider<br/><small>Assumption</small>"]:::unknown
    n22["Immediate refund<br/><small>Service level objective</small>"]:::unknown
    n23["Late cancellation fee<br/><small>Decision</small>"]:::neutral
    n24["Refund on cancellation<br/><small>Requirement</small>"]:::held
    n25["Refund criteria<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph committee["Product committee · 15 October 2026"]
    n26["Launch of the ultra chargers<br/><small>Amendment</small>"]:::neutral
    n27["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
    n28["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  end
  subgraph infra["Reservations · Infrastructure"]
    n29["Backup retention<br/><small>Decision</small>"]:::neutral
    n30["Cancellations in SQL<br/><small>Function</small>"]:::unknown
    n31["Status of a cancelled reservation<br/><small>Decision</small>"]:::neutral
    n32["Production database address<br/><small>Decision</small>"]:::neutral
    n33["Production database name<br/><small>Decision</small>"]:::neutral
    n34["Production database size<br/><small>Decision</small>"]:::neutral
    n35["Local SQLite database<br/><small>Implementation</small>"]:::neutral
    n36["Real payment provider<br/><small>Implementation</small>"]:::neutral
    n37["Node's HTTP server<br/><small>Technical choice</small>"]:::unknown
    n38["Initial reservations<br/><small>Decision</small>"]:::neutral
    n39["In-memory SQLite database<br/><small>Implementation</small>"]:::neutral
    n40["Local<br/><small>Environment</small>"]:::neutral
    n41["A SQLite file on the developer's machine<br/><small>Technical choice</small>"]:::unknown
    n42["Local database file<br/><small>Decision</small>"]:::neutral
    n43["Node HTTP server<br/><small>Implementation</small>"]:::neutral
    n44["Production Postgres database<br/><small>Implementation</small>"]:::neutral
    n45["PostgreSQL's dialect<br/><small>Function</small>"]:::unknown
    n46["Production<br/><small>Environment</small>"]:::neutral
    n47["Postgres in production<br/><small>Technical choice</small>"]:::unknown
    n48["The provider's API in production<br/><small>Technical choice</small>"]:::unknown
    n49["Payment provider address<br/><small>Decision</small>"]:::neutral
    n50["The system clock elsewhere<br/><small>Technical choice</small>"]:::unknown
    n51["Reservations in SQL<br/><small>Function</small>"]:::unknown
    n52["Tables of the service<br/><small>Decision</small>"]:::neutral
    n53["End of a response<br/><small>Decision</small>"]:::neutral
    n54["A stopped clock in the scenarios<br/><small>Technical choice</small>"]:::unknown
    n55["An in-memory SQLite database for the scenarios<br/><small>Technical choice</small>"]:::unknown
    n56["Simulated payment provider<br/><small>Function</small>"]:::unknown
    n57["A simulated payment provider outside production<br/><small>Technical choice</small>"]:::unknown
    n58["References of the simulated provider<br/><small>Decision</small>"]:::neutral
    n59["SQLite's dialect<br/><small>Function</small>"]:::unknown
    n60["Reservations and cancellations as repositories over SQL<br/><small>Technical choice</small>"]:::unknown
    n61["Stopped clock<br/><small>Function</small>"]:::unknown
    n62["System clock<br/><small>Implementation</small>"]:::neutral
    n63["Test<br/><small>Environment</small>"]:::neutral
    n64["Test database<br/><small>Decision</small>"]:::neutral
    n65["Test instant<br/><small>Decision</small>"]:::neutral
  end
  subgraph legal["Legal"]
    n66["Legal cap on cancellation fees<br/><small>Decision</small>"]:::neutral
  end
  subgraph messages["Reservations · Messages"]
    n67["Messages of the API<br/><small>Message catalog</small>"]:::neutral
    n68["Language<br/><small>Decision</small>"]:::neutral
    n69["Checks of the scenarios<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph patterns["Reservations · Design patterns"]
    n70["Abstract Factory<br/><small>Design pattern</small>"]:::held
    n71["Adapter<br/><small>Design pattern</small>"]:::held
    n72["Repository<br/><small>Design pattern</small>"]:::held
    n73["Strategy<br/><small>Design pattern</small>"]:::held
  end
  subgraph principles["Reservations · Principles"]
    n74["A cancellation refunds once<br/><small>Architecture decision</small>"]:::held
    n75["Secrets stay out of the graph<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph scenarios["Reservations · Scenarios"]
    n76["Every reservation is refunded according to the rule<br/><small>Scenario</small>"]:::held
    n77["Read a reservation<br/><small>Scenario</small>"]:::held
    n78["Cancelling twice refunds only once<br/><small>Scenario</small>"]:::held
    n79["Unknown reservation<br/><small>Decision</small>"]:::neutral
  end
  subgraph sql["Reservations · SQL"]
    n80["Column definition<br/><small>Syntax element</small>"]:::held
    n81["Condition on a column<br/><small>Syntax element</small>"]:::held
    n82["Count<br/><small>Syntax element</small>"]:::held
    n83["Table creation<br/><small>Syntax element</small>"]:::held
    n84["Insertion<br/><small>Syntax element</small>"]:::held
    n85["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n86["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n87["Selection<br/><small>Syntax element</small>"]:::held
    n88["SQL<br/><small>Standard</small>"]:::neutral
    n89["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n90["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n91["List<br/><small>Syntax element</small>"]:::held
    n92["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph standards["Reservations · Standards"]
    n93["HTTP<br/><small>Standard</small>"]:::neutral
    n94["Media types<br/><small>Standard</small>"]:::neutral
    n95["API of the payment provider<br/><small>Standard</small>"]:::neutral
    n96["Paths of entry points<br/><small>Standard</small>"]:::neutral
    n97["SQLite<br/><small>Standard</small>"]:::neutral
    n98["URI<br/><small>Standard</small>"]:::neutral
  end
  subgraph support["Support requests"]
    n99["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  end
  n0 -->|Serves| n24
  n0 -->|Part of| n16
  n0 -->|Depends on| n15
  n0 -->|Depends on| n5
  n0 -->|Depends on| n11
  n0 -->|Depends on| n2
  n0 -->|Depends on| n24
  n0 -->|Depends on| n4
  n0 -->|Depends on| n93
  n0 -->|Depends on| n67
  n1 -->|Serves| n24
  n1 -->|Depends on| n20
  n2 -->|Depends on| n6
  n3 -->|Serves| n19
  n3 -->|Part of| n16
  n3 -->|Depends on| n15
  n3 -->|Depends on| n1
  n3 -->|Depends on| n93
  n3 -->|Depends on| n67
  n16 -->|Depends on| n9
  n22 -->|Constrains| n24
  n23 -->|Capped by| n66
  n24 -->|Refines| n19
  n24 -->|Assumes| n21
  n25 -->|Accepts| n24
  n26 -->|Amends (not in force)| n24
  n27 -->|Amends| n20
  n28 -->|Approves| n27
  n30 -->|Implements| n5
  n30 -->|Depends on| n7
  n30 -->|Depends on| n8
  n30 -->|Depends on| n52
  n30 -->|Depends on| n31
  n35 -->|Implements| n7
  n35 -->|Implements| n13
  n35 -->|Depends on| n42
  n35 -->|Depends on| n52
  n35 -->|Depends on| n8
  n35 -->|Depends on| n38
  n35 -->|Depends on| n97
  n36 -->|Implements| n11
  n36 -->|Depends on| n49
  n36 -->|Depends on| n95
  n36 -->|Depends on| n93
  n36 -->|Depends on| n94
  n36 -->|Depends on| n98
  n36 -->|Depends on| n67
  n37 -->|Chooses| n43
  n37 -->|In| n63
  n37 -->|In| n40
  n37 -->|In| n46
  n37 -->|Follows| n71
  n39 -->|Implements| n7
  n39 -->|Implements| n13
  n39 -->|Depends on| n64
  n39 -->|Depends on| n52
  n39 -->|Depends on| n8
  n39 -->|Depends on| n38
  n39 -->|Depends on| n97
  n41 -->|Chooses| n35
  n41 -->|Chooses| n59
  n41 -->|In| n40
  n41 -->|Follows| n70
  n43 -->|Implements| n9
  n43 -->|Depends on| n10
  n43 -->|Depends on| n93
  n43 -->|Depends on| n94
  n43 -->|Depends on| n98
  n43 -->|Depends on| n96
  n43 -->|Depends on| n53
  n43 -->|Depends on| n67
  n44 -->|Implements| n7
  n44 -->|Implements| n13
  n44 -->|Depends on| n67
  n44 -->|Depends on| n33
  n44 -->|Depends on| n34
  n44 -->|Depends on| n29
  n44 -->|Depends on| n32
  n45 -->|Implements| n8
  n45 -->|Depends on| n86
  n45 -->|Depends on| n85
  n45 -->|Depends on| n80
  n45 -->|Depends on| n83
  n45 -->|Depends on| n82
  n45 -->|Depends on| n84
  n45 -->|Depends on| n87
  n45 -->|Depends on| n92
  n45 -->|Depends on| n81
  n47 -->|Chooses| n44
  n47 -->|Chooses| n45
  n47 -->|In| n46
  n47 -->|Follows| n70
  n48 -->|Chooses| n36
  n48 -->|In| n46
  n48 -->|Follows| n71
  n50 -->|Chooses| n62
  n50 -->|In| n40
  n50 -->|In| n46
  n50 -->|Follows| n71
  n51 -->|Implements| n15
  n51 -->|Depends on| n13
  n51 -->|Depends on| n8
  n51 -->|Depends on| n52
  n54 -->|Chooses| n61
  n54 -->|In| n63
  n54 -->|Follows| n73
  n55 -->|Chooses| n39
  n55 -->|Chooses| n59
  n55 -->|In| n63
  n55 -->|Follows| n70
  n56 -->|Implements| n11
  n56 -->|Implements| n12
  n56 -->|Depends on| n58
  n57 -->|Chooses| n56
  n57 -->|In| n63
  n57 -->|In| n40
  n57 -->|Follows| n73
  n59 -->|Implements| n8
  n59 -->|Depends on| n90
  n59 -->|Depends on| n89
  n59 -->|Depends on| n80
  n59 -->|Depends on| n83
  n59 -->|Depends on| n82
  n59 -->|Depends on| n84
  n59 -->|Depends on| n87
  n59 -->|Depends on| n92
  n59 -->|Depends on| n81
  n60 -->|Chooses| n51
  n60 -->|Chooses| n30
  n60 -->|In| n63
  n60 -->|In| n40
  n60 -->|In| n46
  n60 -->|Follows| n72
  n61 -->|Implements| n6
  n61 -->|Depends on| n65
  n62 -->|Implements| n6
  n67 -->|Written in| n68
  n69 -->|Written in| n68
  n74 -->|Serves| n19
  n74 -->|Applied by| n0
  n74 -->|Applied by| n4
  n74 -->|Applied by| n78
  n75 -->|Serves| n19
  n75 -->|Applied by| n36
  n76 -->|Verifies| n0
  n76 -->|Verifies| n24
  n76 -->|In| n63
  n76 -->|Depends on| n0
  n76 -->|Depends on| n24
  n76 -->|Depends on| n38
  n76 -->|Depends on| n65
  n76 -->|Depends on| n69
  n77 -->|Verifies| n3
  n77 -->|In| n63
  n77 -->|Depends on| n3
  n77 -->|Depends on| n38
  n77 -->|Depends on| n20
  n77 -->|Depends on| n79
  n77 -->|Depends on| n93
  n77 -->|Depends on| n69
  n78 -->|Verifies| n0
  n78 -->|In| n63
  n78 -->|Depends on| n0
  n78 -->|Depends on| n12
  n78 -->|Depends on| n24
  n78 -->|Depends on| n38
  n78 -->|Depends on| n65
  n78 -->|Depends on| n93
  n78 -->|Depends on| n69
  n80 -->|Defined by| n88
  n80 -->|Depends on| n88
  n81 -->|Defined by| n88
  n81 -->|Depends on| n88
  n82 -->|Defined by| n88
  n82 -->|Depends on| n88
  n83 -->|Defined by| n88
  n83 -->|Depends on| n88
  n83 -->|Depends on| n91
  n84 -->|Defined by| n88
  n84 -->|Depends on| n88
  n84 -->|Depends on| n91
  n85 -->|Defined by| n86
  n85 -->|Depends on| n86
  n87 -->|Defined by| n88
  n87 -->|Depends on| n88
  n87 -->|Depends on| n91
  n89 -->|Defined by| n90
  n89 -->|Depends on| n90
  n91 -->|Defined by| n88
  n91 -->|Depends on| n88
  n92 -->|Defined by| n88
  n92 -->|Depends on| n88
  n92 -->|Depends on| n91
  n99 -->|Amends| n20
  n24 -.->|Depends on| n20
  n24 -.->|Depends on| n23
  n25 -.->|Depends on| n20
  n27 -.-|Overlaps| n99
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n26,n27,n28,n99 stroke-dasharray:4 3
  style n26 opacity:0.5
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
