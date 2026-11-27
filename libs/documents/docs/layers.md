# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph language["Documents · Language"]
    n0["Dates<br/><small>Function</small>"]:::held
    n1["The language of the documents<br/><small>Port</small>"]:::neutral
    n2["Lists<br/><small>Function</small>"]:::held
    n3["How a number is written<br/><small>Decision</small>"]:::neutral
    n4["Punctuation<br/><small>Function</small>"]:::held
    n5["Values with their units<br/><small>Function</small>"]:::held
    n6["The language of the library's words<br/><small>Decision</small>"]:::neutral
  end
  subgraph packages["Documents · Packages"]
    n7["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n8["Trame<br/><small>Package</small>"]:::neutral
    n9["The people of the repository<br/><small>Package</small>"]:::neutral
    n10["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Documents · Product"]
    n11["Documents rendered once, for every project<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Documents · Releases"]
    n12["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n13["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Documents · Scenarios"]
    n14["What the scenarios read and expect<br/><small>Decision</small>"]:::neutral
    n15["The scenarios' language<br/><small>Technical choice</small>"]:::held
    n16["The language of the documents, written<br/><small>Scenario</small>"]:::held
    n17["The language of the scenarios<br/><small>Decision</small>"]:::neutral
    n18["What the scenarios check<br/><small>Message catalog</small>"]:::neutral
    n19["Test<br/><small>Environment</small>"]:::neutral
    n20["The documents speak the engine's language<br/><small>Architecture decision</small>"]:::held
    n21["Written in the language of the scenarios<br/><small>Function</small>"]:::held
  end
  subgraph sdlc["Documents · SDLC"]
    n22["Its code verified<br/><small>Obligation</small>"]:::neutral
    n23["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n24["The next version<br/><small>Shipment</small>"]:::unknown
    n25["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n26["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n27["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n28["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n29["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n30["The renderers of documents<br/><small>Artefact</small>"]:::unknown
    n31["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Serves| n11
  n0 -->|Depends on| n1
  n2 -->|Serves| n11
  n2 -->|Depends on| n1
  n4 -->|Serves| n11
  n4 -->|Depends on| n1
  n5 -->|Serves| n11
  n5 -->|Depends on| n3
  n7 -->|Serves| n11
  n8 -->|Serves| n11
  n9 -->|Serves| n11
  n10 -->|Serves| n11
  n12 -->|Serves| n11
  n13 -->|Serves| n11
  n15 -->|Chooses| n21
  n15 -->|In| n19
  n15 -->|Serves| n11
  n16 -->|Verifies| n0
  n16 -->|Verifies| n2
  n16 -->|Verifies| n4
  n16 -->|Verifies| n5
  n16 -->|Verifies| n21
  n16 -->|In| n19
  n16 -->|Depends on| n0
  n16 -->|Depends on| n2
  n16 -->|Depends on| n4
  n16 -->|Depends on| n5
  n16 -->|Depends on| n17
  n16 -->|Depends on| n14
  n16 -->|Depends on| n18
  n18 -->|Written in| n6
  n20 -->|Serves| n11
  n20 -->|Applied by| n0
  n20 -->|Applied by| n2
  n20 -->|Applied by| n4
  n20 -->|Applied by| n5
  n20 -->|Applied by| n15
  n21 -->|Implements| n1
  n21 -->|Depends on| n17
  n22 -->|Serves| n11
  n23 -->|Serves| n11
  n24 -->|Ships| n30
  n24 -->|Follows the policy| n31
  n25 -->|Serves| n11
  n27 -->|Runs elsewhere| n24
  n27 -->|Its writer's settings| n26
  n28 -->|Serves| n11
  n29 -->|Ships| n27
  n31 -->|Its obligations| n22
  n31 -->|Its obligations| n28
  n31 -->|Its obligations| n23
  n31 -->|Its obligations| n25
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
