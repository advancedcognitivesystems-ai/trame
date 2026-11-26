# Layers

*The graph in force on 26 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph language["Documents · Language"]
    n0["Dates<br/><small>Function</small>"]:::held
    n1["The language of the documents<br/><small>Port</small>"]:::neutral
    n2["Lists<br/><small>Function</small>"]:::held
    n3["How a number is written<br/><small>Decision</small>"]:::neutral
    n4["Punctuation<br/><small>Function</small>"]:::held
    n5["Values with their units<br/><small>Function</small>"]:::held
  end
  subgraph packages["Documents · Packages"]
    n6["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n7["Trame<br/><small>Package</small>"]:::neutral
    n8["The people of the repository<br/><small>Package</small>"]:::neutral
    n9["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Documents · Product"]
    n10["Documents rendered once, for every project<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Documents · Releases"]
    n11["Version 0.1.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Documents · Scenarios"]
    n12["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n13["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n14["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n15["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n16["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n17["Test<br/><small>Environment</small>"]:::neutral
    n18["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n19["Its code verified<br/><small>Obligation</small>"]:::neutral
    n20["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n21["The next version<br/><small>Shipment</small>"]:::unknown
    n22["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n23["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n24["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n25["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n26["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n27["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n28["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n10
  n0 -->|Depends on| n1
  n2 -->|Serves| n10
  n2 -->|Depends on| n1
  n4 -->|Serves| n10
  n4 -->|Depends on| n1
  n5 -->|Serves| n10
  n5 -->|Depends on| n3
  n6 -->|Serves| n10
  n7 -->|Serves| n10
  n8 -->|Serves| n10
  n9 -->|Serves| n10
  n11 -->|Serves| n10
  n13 -->|Chooses| n18
  n13 -->|In| n17
  n13 -->|Serves| n10
  n14 -->|Verifies| n0
  n14 -->|Verifies| n2
  n14 -->|Verifies| n4
  n14 -->|Verifies| n5
  n14 -->|Verifies| n18
  n14 -->|In| n17
  n14 -->|Depends on| n0
  n14 -->|Depends on| n2
  n14 -->|Depends on| n4
  n14 -->|Depends on| n5
  n14 -->|Depends on| n15
  n14 -->|Depends on| n12
  n14 -->|Depends on| n16
  n18 -->|Implements| n1
  n18 -->|Depends on| n15
  n19 -->|Serves| n10
  n20 -->|Serves| n10
  n21 -->|Ships| n27
  n21 -->|Follows the policy| n28
  n22 -->|Serves| n10
  n24 -->|Runs elsewhere| n21
  n24 -->|Its writer's settings| n23
  n25 -->|Serves| n10
  n26 -->|Ships| n24
  n28 -->|Its obligations| n19
  n28 -->|Its obligations| n25
  n28 -->|Its obligations| n20
  n28 -->|Its obligations| n22
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
