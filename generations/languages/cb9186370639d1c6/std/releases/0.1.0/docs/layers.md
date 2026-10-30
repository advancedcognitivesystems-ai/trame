# Layers

*The graph in force on 26 October 2026, ordered by distance to the goals.*

```mermaid
flowchart TB
  subgraph algebra["Standard library · Algebra"]
    n0["Counts<br/><small>Algebraic structure</small>"]:::held
    n1["Sequences<br/><small>Algebraic structure</small>"]:::held
    n2["Texts<br/><small>Algebraic structure</small>"]:::held
    n3["Types of values<br/><small>Algebraic structure</small>"]:::held
  end
  subgraph algorithms["Standard library · Algorithms"]
    n4["Depth-first search<br/><small>Standard</small>"]:::neutral
    n5["Mulberry32<br/><small>Standard</small>"]:::neutral
    n6["Multiplicative hashing<br/><small>Standard</small>"]:::neutral
    n7["SHA-256<br/><small>Standard</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n8["ECMAScript<br/><small>Standard</small>"]:::neutral
    n9["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n10["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n11["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n12["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n13["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n14["Units of measure<br/><small>Standard</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n15["Abstract Factory<br/><small>Design pattern</small>"]:::unknown
    n16["Adapter<br/><small>Design pattern</small>"]:::unknown
    n17["Bridge<br/><small>Design pattern</small>"]:::unknown
    n18["Repository<br/><small>Design pattern</small>"]:::unknown
    n19["Strategy<br/><small>Design pattern</small>"]:::unknown
  end
  subgraph platform["Standard library · Platform"]
    n20["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n21["Loading of a page<br/><small>Port</small>"]:::neutral
    n22["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::unknown
  end
  subgraph product["Standard library · Product"]
    n23["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n24["Known designs, named<br/><small>Goal</small>"]:::neutral
    n25["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n26["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n27["Exit status<br/><small>Standard</small>"]:::neutral
    n28["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n29["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n30["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n31["Node.js events<br/><small>Standard</small>"]:::neutral
    n32["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n33["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n34["npm's command line<br/><small>Standard</small>"]:::neutral
    n35["npm's manifest<br/><small>Standard</small>"]:::neutral
    n36["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n37["Positions in a file<br/><small>Standard</small>"]:::neutral
    n38["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n39["Text file<br/><small>Standard</small>"]:::neutral
    n40["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n41["CSSOM View<br/><small>Standard</small>"]:::neutral
    n42["HTTP<br/><small>Standard</small>"]:::neutral
    n43["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n44["Media types<br/><small>Standard</small>"]:::neutral
    n45["Server-sent events<br/><small>Standard</small>"]:::neutral
    n46["UI events<br/><small>Standard</small>"]:::neutral
    n47["URI<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n26
  n1 -->|Serves| n26
  n1 -->|Depends on| n8
  n1 -->|Depends on| n0
  n2 -->|Serves| n26
  n2 -->|Depends on| n1
  n3 -->|Serves| n26
  n3 -->|Depends on| n10
  n4 -->|Serves| n23
  n5 -->|Serves| n23
  n6 -->|Serves| n23
  n7 -->|Serves| n23
  n8 -->|Serves| n23
  n9 -->|Serves| n23
  n10 -->|Serves| n23
  n11 -->|Serves| n23
  n12 -->|Serves| n23
  n13 -->|Serves| n23
  n14 -->|Serves| n23
  n15 -->|Serves| n24
  n16 -->|Serves| n24
  n17 -->|Serves| n24
  n18 -->|Serves| n24
  n19 -->|Serves| n24
  n20 -->|Implements| n21
  n20 -->|Depends on| n46
  n22 -->|Serves| n25
  n22 -->|Applied by| n21
  n22 -->|Applied by| n20
  n27 -->|Serves| n23
  n28 -->|Serves| n23
  n29 -->|Serves| n23
  n30 -->|Serves| n23
  n31 -->|Serves| n23
  n32 -->|Serves| n23
  n33 -->|Serves| n23
  n34 -->|Serves| n23
  n35 -->|Serves| n23
  n36 -->|Serves| n23
  n37 -->|Serves| n23
  n38 -->|Serves| n23
  n39 -->|Serves| n23
  n40 -->|Serves| n23
  n41 -->|Serves| n23
  n42 -->|Serves| n23
  n43 -->|Serves| n23
  n44 -->|Serves| n23
  n45 -->|Serves| n23
  n46 -->|Serves| n23
  n47 -->|Serves| n23
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
