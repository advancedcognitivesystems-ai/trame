# Layers

*The graph in force on 9 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph documents["Data · Documents"]
    n0["A value of the description it is of<br/><small>Function</small>"]:::held
    n1["How a document is stored<br/><small>Decision</small>"]:::neutral
    n2["Documents<br/><small>Port</small>"]:::neutral
    n3["Documents kept in the preferences<br/><small>Function</small>"]:::held
    n4["JSON<br/><small>Standard</small>"]:::neutral
    n5["A value migrated<br/><small>Function</small>"]:::held
  end
  subgraph obligations["Data · Obligations"]
    n6["The kinds the library carries<br/><small>Vocabulary</small>"]:::neutral
    n7["What a shipment stores migrates<br/><small>Requirement</small>"]:::held
    n8["Criteria of what a shipment stores<br/><small>Acceptance criteria</small>"]:::held
  end
  subgraph packages["Data · Packages"]
    n9["Trame<br/><small>Package</small>"]:::neutral
    n10["std<br/><small>Package</small>"]:::neutral
  end
  subgraph principles["Data · Principles"]
    n11["An entity is described once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Data · Product"]
    n12["Data described once<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Data · Releases"]
    n13["Version 0.1.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n14["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n15["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n16["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n17["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n18["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n19["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n20["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n21["The next version<br/><small>Shipment</small>"]:::unknown
    n22["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n23["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n24["The library of data<br/><small>Artefact</small>"]:::unknown
    n25["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n26["A book<br/><small>Entity</small>"]:::held
    n27["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph words["Data · Words"]
    n28["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
  end
  n0 -->|Serves| n12
  n3 -->|Serves| n12
  n3 -->|Implements| n2
  n3 -->|Depends on| n1
  n3 -->|Depends on| n4
  n3 -->|Depends on| n5
  n3 -->|Depends on| n0
  n4 -->|Serves| n12
  n5 -->|Serves| n12
  n6 -->|Serves| n12
  n7 -->|Refines| n12
  n7 -->|Depends on| n6
  n8 -->|Accepts| n7
  n9 -->|Serves| n12
  n10 -->|Serves| n12
  n11 -->|Serves| n12
  n11 -->|Applied by| n7
  n11 -->|Applied by| n5
  n11 -->|Applied by| n0
  n11 -->|Applied by| n3
  n13 -->|Serves| n12
  n16 -->|Verifies| n3
  n16 -->|Verifies| n5
  n16 -->|Verifies| n0
  n16 -->|In| n18
  n16 -->|Depends on| n2
  n16 -->|Depends on| n26
  n16 -->|Depends on| n1
  n16 -->|Depends on| n15
  n16 -->|Depends on| n14
  n17 -->|Chooses| n3
  n17 -->|In| n18
  n17 -->|Serves| n12
  n19 -->|Serves| n12
  n20 -->|Serves| n12
  n21 -->|Ships| n24
  n21 -->|Follows the policy| n25
  n22 -->|Serves| n12
  n23 -->|Serves| n12
  n25 -->|Its obligations| n20
  n25 -->|Its obligations| n23
  n25 -->|Its obligations| n19
  n25 -->|Its obligations| n22
  n26 -->|Serves| n12
  n27 -->|Serves| n12
  n26 -.->|Depends on| n27
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
