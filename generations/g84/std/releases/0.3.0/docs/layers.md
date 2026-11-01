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
  subgraph html["Standard library · HTML and CSS"]
    n12["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n13["CSS<br/><small>Standard</small>"]:::neutral
    n14["HTML<br/><small>Standard</small>"]:::neutral
    n15["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n16["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n17["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n18["Units of measure<br/><small>Standard</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n19["Abstract Factory<br/><small>Design pattern</small>"]:::unknown
    n20["Adapter<br/><small>Design pattern</small>"]:::unknown
    n21["Bridge<br/><small>Design pattern</small>"]:::unknown
    n22["Repository<br/><small>Design pattern</small>"]:::unknown
    n23["Strategy<br/><small>Design pattern</small>"]:::unknown
  end
  subgraph platform["Standard library · Platform"]
    n24["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n25["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n26["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n27["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n28["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n29["The device's services, as ports<br/><small>Architecture decision</small>"]:::unknown
    n30["Languages of the device<br/><small>Port</small>"]:::neutral
    n31["Preferences kept in memory<br/><small>Function</small>"]:::unknown
    n32["Loading of a page<br/><small>Port</small>"]:::neutral
    n33["Preferences<br/><small>Port</small>"]:::neutral
    n34["Screen kept awake<br/><small>Port</small>"]:::neutral
    n35["Speech<br/><small>Port</small>"]:::neutral
    n36["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::unknown
    n37["A voice that writes down<br/><small>Function</small>"]:::unknown
  end
  subgraph product["Standard library · Product"]
    n38["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n39["Known designs, named<br/><small>Goal</small>"]:::neutral
    n40["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n41["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n42["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n43["Version 0.2.0<br/><small>Release</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n44["Exit status<br/><small>Standard</small>"]:::neutral
    n45["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n46["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n47["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n48["Node.js events<br/><small>Standard</small>"]:::neutral
    n49["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n50["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n51["npm's command line<br/><small>Standard</small>"]:::neutral
    n52["npm's manifest<br/><small>Standard</small>"]:::neutral
    n53["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n54["Positions in a file<br/><small>Standard</small>"]:::neutral
    n55["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n56["Text file<br/><small>Standard</small>"]:::neutral
    n57["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n58["CSSOM View<br/><small>Standard</small>"]:::neutral
    n59["HTTP<br/><small>Standard</small>"]:::neutral
    n60["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n61["Media types<br/><small>Standard</small>"]:::neutral
    n62["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n63["Server-sent events<br/><small>Standard</small>"]:::neutral
    n64["UI events<br/><small>Standard</small>"]:::neutral
    n65["URI<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n41
  n1 -->|Serves| n41
  n1 -->|Depends on| n8
  n1 -->|Depends on| n0
  n2 -->|Serves| n41
  n2 -->|Depends on| n1
  n3 -->|Serves| n41
  n3 -->|Depends on| n10
  n4 -->|Serves| n38
  n5 -->|Serves| n38
  n6 -->|Serves| n38
  n7 -->|Serves| n38
  n8 -->|Serves| n38
  n9 -->|Serves| n38
  n10 -->|Serves| n38
  n11 -->|Serves| n38
  n12 -->|Serves| n38
  n13 -->|Serves| n38
  n14 -->|Serves| n38
  n15 -->|Serves| n38
  n16 -->|Serves| n38
  n17 -->|Serves| n38
  n18 -->|Serves| n38
  n19 -->|Serves| n39
  n20 -->|Serves| n39
  n21 -->|Serves| n39
  n22 -->|Serves| n39
  n23 -->|Serves| n39
  n24 -->|Implements| n30
  n25 -->|Implements| n32
  n25 -->|Depends on| n64
  n26 -->|Implements| n33
  n27 -->|Implements| n35
  n28 -->|Implements| n34
  n28 -->|Depends on| n62
  n29 -->|Serves| n40
  n29 -->|Applied by| n33
  n29 -->|Applied by| n26
  n29 -->|Applied by| n31
  n29 -->|Applied by| n30
  n29 -->|Applied by| n24
  n29 -->|Applied by| n35
  n29 -->|Applied by| n27
  n29 -->|Applied by| n37
  n29 -->|Applied by| n34
  n29 -->|Applied by| n28
  n31 -->|Implements| n33
  n36 -->|Serves| n40
  n36 -->|Applied by| n32
  n36 -->|Applied by| n25
  n37 -->|Implements| n35
  n42 -->|Serves| n38
  n42 -->|Serves| n39
  n42 -->|Serves| n40
  n42 -->|Serves| n41
  n43 -->|Serves| n38
  n43 -->|Serves| n39
  n43 -->|Serves| n40
  n43 -->|Serves| n41
  n44 -->|Serves| n38
  n45 -->|Serves| n38
  n46 -->|Serves| n38
  n47 -->|Serves| n38
  n48 -->|Serves| n38
  n49 -->|Serves| n38
  n50 -->|Serves| n38
  n51 -->|Serves| n38
  n52 -->|Serves| n38
  n53 -->|Serves| n38
  n54 -->|Serves| n38
  n55 -->|Serves| n38
  n56 -->|Serves| n38
  n57 -->|Serves| n38
  n58 -->|Serves| n38
  n59 -->|Serves| n38
  n60 -->|Serves| n38
  n61 -->|Serves| n38
  n62 -->|Serves| n38
  n63 -->|Serves| n38
  n64 -->|Serves| n38
  n65 -->|Serves| n38
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
