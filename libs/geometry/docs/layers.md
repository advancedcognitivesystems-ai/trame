# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph angles["Geometry · Angles"]
    n0["Angle<br/><small>Quantity</small>"]:::neutral
    n1["How an angle is written in each of its units.<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Geometry · Packages"]
    n2["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n3["Trame<br/><small>Package</small>"]:::neutral
    n4["The people of the repository<br/><small>Package</small>"]:::neutral
    n5["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Geometry · Product"]
    n6["Geometry written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Geometry · Releases"]
    n7["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n8["Version 0.2.0<br/><small>Release</small>"]:::neutral
  end
  subgraph sdlc["Geometry · SDLC"]
    n9["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n10["The next version<br/><small>Shipment</small>"]:::unknown
    n11["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n12["The library of geometry<br/><small>Artefact</small>"]:::unknown
    n13["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph vectors["Geometry · Vectors"]
    n14["The axes<br/><small>Decision</small>"]:::neutral
    n15["The tolerance<br/><small>Decision</small>"]:::neutral
    n16["Vectors<br/><small>Algebraic structure</small>"]:::held
    n17["A vector is three numbers<br/><small>Architecture decision</small>"]:::held
  end
  n0 -->|Written with| n1
  n0 -->|Serves| n6
  n2 -->|Serves| n6
  n3 -->|Serves| n6
  n4 -->|Serves| n6
  n5 -->|Serves| n6
  n7 -->|Serves| n6
  n8 -->|Serves| n6
  n9 -->|Serves| n6
  n10 -->|Ships| n12
  n10 -->|Follows the policy| n13
  n11 -->|Serves| n6
  n13 -->|Its obligations| n9
  n13 -->|Its obligations| n11
  n16 -->|Serves| n6
  n16 -->|Depends on| n14
  n16 -->|Depends on| n15
  n16 -->|Depends on| n0
  n17 -->|Serves| n6
  n17 -->|Applied by| n16
  n17 -->|Applied by| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
