# Layers

*The graph in force on 9 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph obligations["Data · Obligations"]
    n0["The kinds the library carries<br/><small>Vocabulary</small>"]:::neutral
    n1["What a shipment stores migrates<br/><small>Requirement</small>"]:::held
    n2["Criteria of what a shipment stores<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Data · Packages"]
    n3["Trame<br/><small>Package</small>"]:::neutral
    n4["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Data · Product"]
    n5["Data described once<br/><small>Goal</small>"]:::neutral
  end
  subgraph words["Data · Words"]
    n6["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
  end
  n0 -->|Serves| n5
  n1 -->|Refines| n5
  n1 -->|Depends on| n0
  n2 -->|Accepts| n1
  n3 -->|Serves| n5
  n4 -->|Serves| n5
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
