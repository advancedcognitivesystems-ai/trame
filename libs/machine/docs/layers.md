# Layers

*The graph in force on 25 November 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph machine["Machine · Questions"]
    n0["Git, installed<br/><small>Implementation</small>"]:::neutral
    n1["The language the questions speak in.<br/><small>Decision</small>"]:::neutral
    n2["What the questions say<br/><small>Message catalog</small>"]:::neutral
    n3["Node's platforms<br/><small>Standard</small>"]:::neutral
    n4["Node, recent enough<br/><small>Implementation</small>"]:::neutral
    n5["The system, one the project runs on<br/><small>Implementation</small>"]:::neutral
    n6["What the machine runs<br/><small>Port</small>"]:::neutral
  end
  subgraph packages["Machine · Packages"]
    n7["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n8["Trame<br/><small>Package</small>"]:::neutral
    n9["The people of the repository<br/><small>Package</small>"]:::neutral
    n10["std<br/><small>Package</small>"]:::neutral
  end
  subgraph product["Machine · Product"]
    n11["The machine is asked once<br/><small>Goal</small>"]:::neutral
  end
  subgraph sdlc["Machine · SDLC"]
    n12["The next version<br/><small>Shipment</small>"]:::unknown
    n13["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n14["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n15["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n16["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n17["The questions of the machine<br/><small>Artefact</small>"]:::unknown
    n18["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  n0 -->|Depends on| n2
  n2 -->|Written in| n1
  n3 -->|Serves| n11
  n4 -->|Depends on| n6
  n4 -->|Depends on| n2
  n5 -->|Depends on| n6
  n5 -->|Depends on| n2
  n7 -->|Serves| n11
  n8 -->|Serves| n11
  n9 -->|Serves| n11
  n10 -->|Serves| n11
  n12 -->|Ships| n17
  n12 -->|Follows the policy| n18
  n13 -->|Serves| n11
  n15 -->|Runs elsewhere| n12
  n15 -->|Its writer's settings| n14
  n16 -->|Ships| n15
  n18 -->|Its obligations| n13
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
