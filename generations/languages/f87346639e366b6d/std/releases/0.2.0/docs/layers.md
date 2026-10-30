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
    n20["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n21["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n22["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n23["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n24["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n25["The device's services, as ports<br/><small>Architecture decision</small>"]:::unknown
    n26["Languages of the device<br/><small>Port</small>"]:::neutral
    n27["Preferences kept in memory<br/><small>Function</small>"]:::unknown
    n28["Loading of a page<br/><small>Port</small>"]:::neutral
    n29["Preferences<br/><small>Port</small>"]:::neutral
    n30["Screen kept awake<br/><small>Port</small>"]:::neutral
    n31["Speech<br/><small>Port</small>"]:::neutral
    n32["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::unknown
    n33["A voice that writes down<br/><small>Function</small>"]:::unknown
  end
  subgraph product["Standard library · Product"]
    n34["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n35["Known designs, named<br/><small>Goal</small>"]:::neutral
    n36["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n37["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n38["Version 0.1.0<br/><small>Release</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n39["Exit status<br/><small>Standard</small>"]:::neutral
    n40["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n41["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n42["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n43["Node.js events<br/><small>Standard</small>"]:::neutral
    n44["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n45["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n46["npm's command line<br/><small>Standard</small>"]:::neutral
    n47["npm's manifest<br/><small>Standard</small>"]:::neutral
    n48["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n49["Positions in a file<br/><small>Standard</small>"]:::neutral
    n50["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n51["Text file<br/><small>Standard</small>"]:::neutral
    n52["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n53["CSSOM View<br/><small>Standard</small>"]:::neutral
    n54["HTTP<br/><small>Standard</small>"]:::neutral
    n55["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n56["Media types<br/><small>Standard</small>"]:::neutral
    n57["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n58["Server-sent events<br/><small>Standard</small>"]:::neutral
    n59["UI events<br/><small>Standard</small>"]:::neutral
    n60["URI<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n37
  n1 -->|Serves| n37
  n1 -->|Depends on| n8
  n1 -->|Depends on| n0
  n2 -->|Serves| n37
  n2 -->|Depends on| n1
  n3 -->|Serves| n37
  n3 -->|Depends on| n10
  n4 -->|Serves| n34
  n5 -->|Serves| n34
  n6 -->|Serves| n34
  n7 -->|Serves| n34
  n8 -->|Serves| n34
  n9 -->|Serves| n34
  n10 -->|Serves| n34
  n11 -->|Serves| n34
  n12 -->|Serves| n34
  n13 -->|Serves| n34
  n14 -->|Serves| n34
  n15 -->|Serves| n35
  n16 -->|Serves| n35
  n17 -->|Serves| n35
  n18 -->|Serves| n35
  n19 -->|Serves| n35
  n20 -->|Implements| n26
  n21 -->|Implements| n28
  n21 -->|Depends on| n59
  n22 -->|Implements| n29
  n23 -->|Implements| n31
  n24 -->|Implements| n30
  n24 -->|Depends on| n57
  n25 -->|Serves| n36
  n25 -->|Applied by| n29
  n25 -->|Applied by| n22
  n25 -->|Applied by| n27
  n25 -->|Applied by| n26
  n25 -->|Applied by| n20
  n25 -->|Applied by| n31
  n25 -->|Applied by| n23
  n25 -->|Applied by| n33
  n25 -->|Applied by| n30
  n25 -->|Applied by| n24
  n27 -->|Implements| n29
  n32 -->|Serves| n36
  n32 -->|Applied by| n28
  n32 -->|Applied by| n21
  n33 -->|Implements| n31
  n38 -->|Serves| n34
  n38 -->|Serves| n35
  n38 -->|Serves| n36
  n38 -->|Serves| n37
  n39 -->|Serves| n34
  n40 -->|Serves| n34
  n41 -->|Serves| n34
  n42 -->|Serves| n34
  n43 -->|Serves| n34
  n44 -->|Serves| n34
  n45 -->|Serves| n34
  n46 -->|Serves| n34
  n47 -->|Serves| n34
  n48 -->|Serves| n34
  n49 -->|Serves| n34
  n50 -->|Serves| n34
  n51 -->|Serves| n34
  n52 -->|Serves| n34
  n53 -->|Serves| n34
  n54 -->|Serves| n34
  n55 -->|Serves| n34
  n56 -->|Serves| n34
  n57 -->|Serves| n34
  n58 -->|Serves| n34
  n59 -->|Serves| n34
  n60 -->|Serves| n34
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
