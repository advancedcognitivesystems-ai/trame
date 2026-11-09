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
    n14["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n15["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n16["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n17["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n18["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n19["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n20["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n21["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n22["The next version<br/><small>Shipment</small>"]:::held
    n23["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n24["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n25["The library of data<br/><small>Artefact</small>"]:::held
    n26["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n27["A book<br/><small>Entity</small>"]:::held
    n28["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph words["Data · Words"]
    n29["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n14 -->|Serves| n12
  n17 -->|Verifies| n3
  n17 -->|Verifies| n5
  n17 -->|Verifies| n0
  n17 -->|In| n19
  n17 -->|Depends on| n2
  n17 -->|Depends on| n27
  n17 -->|Depends on| n1
  n17 -->|Depends on| n16
  n17 -->|Depends on| n15
  n18 -->|Chooses| n3
  n18 -->|In| n19
  n18 -->|Serves| n12
  n20 -->|Serves| n12
  n21 -->|Serves| n12
  n22 -->|Ships| n25
  n22 -->|Follows the policy| n26
  n23 -->|Serves| n12
  n24 -->|Serves| n12
  n26 -->|Its obligations| n21
  n26 -->|Its obligations| n24
  n26 -->|Its obligations| n20
  n26 -->|Its obligations| n23
  n27 -->|Serves| n12
  n28 -->|Serves| n12
  n27 -.->|Depends on| n28
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
