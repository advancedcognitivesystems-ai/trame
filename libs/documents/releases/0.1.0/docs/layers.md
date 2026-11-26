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
  subgraph scenarios["Documents · Scenarios"]
    n11["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n12["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n13["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n14["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n15["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n16["Test<br/><small>Environment</small>"]:::neutral
    n17["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n18["Its code verified<br/><small>Obligation</small>"]:::neutral
    n19["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n20["The next version<br/><small>Shipment</small>"]:::unknown
    n21["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n22["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n23["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n24["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n25["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n26["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n27["How a version is made<br/><small>Policy</small>"]:::neutral
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
  n12 -->|Chooses| n17
  n12 -->|In| n16
  n12 -->|Serves| n10
  n13 -->|Verifies| n0
  n13 -->|Verifies| n2
  n13 -->|Verifies| n4
  n13 -->|Verifies| n5
  n13 -->|Verifies| n17
  n13 -->|In| n16
  n13 -->|Depends on| n0
  n13 -->|Depends on| n2
  n13 -->|Depends on| n4
  n13 -->|Depends on| n5
  n13 -->|Depends on| n14
  n13 -->|Depends on| n11
  n13 -->|Depends on| n15
  n17 -->|Implements| n1
  n17 -->|Depends on| n14
  n18 -->|Serves| n10
  n19 -->|Serves| n10
  n20 -->|Ships| n26
  n20 -->|Follows the policy| n27
  n21 -->|Serves| n10
  n23 -->|Runs elsewhere| n20
  n23 -->|Its writer's settings| n22
  n24 -->|Serves| n10
  n25 -->|Ships| n23
  n27 -->|Its obligations| n18
  n27 -->|Its obligations| n24
  n27 -->|Its obligations| n19
  n27 -->|Its obligations| n21
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
