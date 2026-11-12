# Layers

*The graph in force on 12 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph notes["Kept · Notes"]
    n0["A note<br/><small>Entity</small>"]:::held
  end
  subgraph product["Kept · Product"]
    n1["Notes kept<br/><small>Goal</small>"]:::neutral
  end
  n0 -->|Serves| n1
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
