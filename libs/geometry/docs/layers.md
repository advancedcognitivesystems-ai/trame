# Layers

*The graph in force on 3 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph angles["Geometry · Angles"]
    n0["Angle<br/><small>Quantity</small>"]:::neutral
    n1["How an angle is written in each of its units.<br/><small>Message catalog</small>"]:::neutral
  end
  subgraph packages["Geometry · Packages"]
    n2["Trame<br/><small>Package</small>"]:::neutral
    n3["The standard library<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Geometry · Product"]
    n4["Geometry written once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Geometry · Releases"]
    n5["Version 0.1.0<br/><small>Release</small>"]:::neutral
  end
  subgraph vectors["Geometry · Vectors"]
    n6["The axes<br/><small>Decision</small>"]:::neutral
    n7["The tolerance<br/><small>Decision</small>"]:::neutral
    n8["Vectors<br/><small>Algebraic structure</small>"]:::held
    n9["A vector is three numbers<br/><small>Architecture decision</small>"]:::held
  end
  n0 -->|Written with| n1
  n0 -->|Serves| n4
  n2 -->|Serves| n4
  n3 -->|Serves| n4
  n5 -->|Serves| n4
  n8 -->|Serves| n4
  n8 -->|Depends on| n6
  n8 -->|Depends on| n7
  n8 -->|Depends on| n0
  n9 -->|Serves| n4
  n9 -->|Applied by| n8
  n9 -->|Applied by| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
