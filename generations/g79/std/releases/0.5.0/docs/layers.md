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
    n7["Seeded draws<br/><small>Function</small>"]:::unknown
    n8["SHA-256<br/><small>Standard</small>"]:::neutral
  end
  subgraph ecmascript["Standard library · ECMAScript"]
    n9["ECMAScript<br/><small>Standard</small>"]:::neutral
    n10["ECMAScript reserved words<br/><small>Vocabulary</small>"]:::neutral
    n11["ECMAScript types<br/><small>Standard</small>"]:::neutral
    n12["Unicode escape of a text<br/><small>Standard</small>"]:::neutral
  end
  subgraph html["Standard library · HTML and CSS"]
    n13["WAI-ARIA<br/><small>Standard</small>"]:::neutral
    n14["CSS<br/><small>Standard</small>"]:::neutral
    n15["HTML<br/><small>Standard</small>"]:::neutral
    n16["SVG<br/><small>Standard</small>"]:::neutral
  end
  subgraph measures["Standard library · Measures"]
    n17["ISO 8601 dates<br/><small>Standard</small>"]:::neutral
    n18["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n19["Units of measure<br/><small>Standard</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n20["Abstract Factory<br/><small>Design pattern</small>"]:::unknown
    n21["Adapter<br/><small>Design pattern</small>"]:::unknown
    n22["Bridge<br/><small>Design pattern</small>"]:::unknown
    n23["Repository<br/><small>Design pattern</small>"]:::unknown
    n24["Strategy<br/><small>Design pattern</small>"]:::unknown
  end
  subgraph platform["Standard library · Platform"]
    n25["Animation frames<br/><small>Port</small>"]:::neutral
    n26["The screen kept awake, in memory<br/><small>Function</small>"]:::unknown
    n27["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n28["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n29["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n30["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n31["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n32["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n33["The device's services, as ports<br/><small>Architecture decision</small>"]:::unknown
    n34["Languages of the device<br/><small>Port</small>"]:::neutral
    n35["Frames turned by hand<br/><small>Function</small>"]:::unknown
    n36["Preferences kept in memory<br/><small>Function</small>"]:::unknown
    n37["Loading of a page<br/><small>Port</small>"]:::neutral
    n38["Preferences<br/><small>Port</small>"]:::neutral
    n39["Screen kept awake<br/><small>Port</small>"]:::neutral
    n40["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n41["What was said<br/><small>Port</small>"]:::neutral
    n42["Speech<br/><small>Port</small>"]:::neutral
    n43["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::unknown
    n44["Time turned by hand<br/><small>Port</small>"]:::neutral
    n45["A voice that writes down<br/><small>Function</small>"]:::unknown
  end
  subgraph product["Standard library · Product"]
    n46["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n47["Known designs, named<br/><small>Goal</small>"]:::neutral
    n48["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n49["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n50["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n51["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n52["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n53["Version 0.4.0<br/><small>Release</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n54["Exit status<br/><small>Standard</small>"]:::neutral
    n55["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n56["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n57["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n58["Node.js events<br/><small>Standard</small>"]:::neutral
    n59["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n60["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n61["npm's command line<br/><small>Standard</small>"]:::neutral
    n62["npm's manifest<br/><small>Standard</small>"]:::neutral
    n63["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n64["Positions in a file<br/><small>Standard</small>"]:::neutral
    n65["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n66["Text file<br/><small>Standard</small>"]:::neutral
    n67["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n68["CSSOM View<br/><small>Standard</small>"]:::neutral
    n69["HTTP<br/><small>Standard</small>"]:::neutral
    n70["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n71["Media types<br/><small>Standard</small>"]:::neutral
    n72["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n73["Server-sent events<br/><small>Standard</small>"]:::neutral
    n74["UI events<br/><small>Standard</small>"]:::neutral
    n75["URI<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n49
  n1 -->|Serves| n49
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n49
  n2 -->|Depends on| n1
  n3 -->|Serves| n49
  n3 -->|Depends on| n11
  n4 -->|Serves| n46
  n5 -->|Serves| n46
  n6 -->|Serves| n46
  n7 -->|Serves| n49
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n46
  n9 -->|Serves| n46
  n10 -->|Serves| n46
  n11 -->|Serves| n46
  n12 -->|Serves| n46
  n13 -->|Serves| n46
  n14 -->|Serves| n46
  n15 -->|Serves| n46
  n16 -->|Serves| n46
  n17 -->|Serves| n46
  n18 -->|Serves| n46
  n19 -->|Serves| n46
  n20 -->|Serves| n47
  n21 -->|Serves| n47
  n22 -->|Serves| n47
  n23 -->|Serves| n47
  n24 -->|Serves| n47
  n26 -->|Implements| n39
  n26 -->|Implements| n40
  n27 -->|Implements| n25
  n28 -->|Implements| n34
  n29 -->|Implements| n37
  n29 -->|Depends on| n74
  n30 -->|Implements| n38
  n31 -->|Implements| n42
  n32 -->|Implements| n39
  n32 -->|Depends on| n72
  n33 -->|Serves| n48
  n33 -->|Applied by| n38
  n33 -->|Applied by| n30
  n33 -->|Applied by| n36
  n33 -->|Applied by| n34
  n33 -->|Applied by| n28
  n33 -->|Applied by| n42
  n33 -->|Applied by| n31
  n33 -->|Applied by| n45
  n33 -->|Applied by| n41
  n33 -->|Applied by| n39
  n33 -->|Applied by| n32
  n33 -->|Applied by| n26
  n33 -->|Applied by| n40
  n33 -->|Applied by| n25
  n33 -->|Applied by| n27
  n33 -->|Applied by| n35
  n33 -->|Applied by| n44
  n35 -->|Implements| n25
  n35 -->|Implements| n44
  n35 -->|Depends on| n0
  n36 -->|Implements| n38
  n43 -->|Serves| n48
  n43 -->|Applied by| n37
  n43 -->|Applied by| n29
  n45 -->|Implements| n42
  n45 -->|Implements| n41
  n50 -->|Serves| n46
  n50 -->|Serves| n47
  n50 -->|Serves| n48
  n50 -->|Serves| n49
  n51 -->|Serves| n46
  n51 -->|Serves| n47
  n51 -->|Serves| n48
  n51 -->|Serves| n49
  n52 -->|Serves| n46
  n52 -->|Serves| n47
  n52 -->|Serves| n48
  n52 -->|Serves| n49
  n53 -->|Serves| n46
  n53 -->|Serves| n47
  n53 -->|Serves| n48
  n53 -->|Serves| n49
  n54 -->|Serves| n46
  n55 -->|Serves| n46
  n56 -->|Serves| n46
  n57 -->|Serves| n46
  n58 -->|Serves| n46
  n59 -->|Serves| n46
  n60 -->|Serves| n46
  n61 -->|Serves| n46
  n62 -->|Serves| n46
  n63 -->|Serves| n46
  n64 -->|Serves| n46
  n65 -->|Serves| n46
  n66 -->|Serves| n46
  n67 -->|Serves| n46
  n68 -->|Serves| n46
  n69 -->|Serves| n46
  n70 -->|Serves| n46
  n71 -->|Serves| n46
  n72 -->|Serves| n46
  n73 -->|Serves| n46
  n74 -->|Serves| n46
  n75 -->|Serves| n46
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
