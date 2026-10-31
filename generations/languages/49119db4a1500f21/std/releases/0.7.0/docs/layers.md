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
    n18["Language tags<br/><small>Standard</small>"]:::neutral
    n19["Semantic versioning<br/><small>Standard</small>"]:::neutral
    n20["Units of measure<br/><small>Standard</small>"]:::neutral
  end
  subgraph patterns["Standard library · Design patterns"]
    n21["Abstract Factory<br/><small>Design pattern</small>"]:::unknown
    n22["Adapter<br/><small>Design pattern</small>"]:::unknown
    n23["Bridge<br/><small>Design pattern</small>"]:::unknown
    n24["Repository<br/><small>Design pattern</small>"]:::unknown
    n25["Strategy<br/><small>Design pattern</small>"]:::unknown
  end
  subgraph platform["Standard library · Platform"]
    n26["Animation frames<br/><small>Port</small>"]:::neutral
    n27["The screen kept awake, in memory<br/><small>Function</small>"]:::unknown
    n28["The browser's frames<br/><small>Implementation</small>"]:::neutral
    n29["The browser's languages<br/><small>Implementation</small>"]:::neutral
    n30["The browser loads the page<br/><small>Implementation</small>"]:::neutral
    n31["The browser keeps the preferences<br/><small>Implementation</small>"]:::neutral
    n32["The browser's voice<br/><small>Implementation</small>"]:::neutral
    n33["The browser keeps the screen awake<br/><small>Implementation</small>"]:::neutral
    n34["The device's services, as ports<br/><small>Architecture decision</small>"]:::unknown
    n35["Languages of the device<br/><small>Port</small>"]:::neutral
    n36["Frames turned by hand<br/><small>Function</small>"]:::unknown
    n37["Preferences kept in memory<br/><small>Function</small>"]:::unknown
    n38["Loading of a page<br/><small>Port</small>"]:::neutral
    n39["Preferences<br/><small>Port</small>"]:::neutral
    n40["Screen kept awake<br/><small>Port</small>"]:::neutral
    n41["Whether the screen is kept awake<br/><small>Port</small>"]:::neutral
    n42["What was said<br/><small>Port</small>"]:::neutral
    n43["Speech<br/><small>Port</small>"]:::neutral
    n44["A component in a browser starts with its page<br/><small>Architecture decision</small>"]:::unknown
    n45["Time turned by hand<br/><small>Port</small>"]:::neutral
    n46["A voice that writes down<br/><small>Function</small>"]:::unknown
  end
  subgraph product["Standard library · Product"]
    n47["A published value is cited, not copied<br/><small>Goal</small>"]:::neutral
    n48["Known designs, named<br/><small>Goal</small>"]:::neutral
    n49["Ports of the platform, realized once<br/><small>Goal</small>"]:::neutral
    n50["Shared operations instead of literals<br/><small>Goal</small>"]:::neutral
  end
  subgraph releases["Standard library · Releases"]
    n51["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n52["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n53["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n54["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n55["Version 0.5.0<br/><small>Release</small>"]:::neutral
    n56["Version 0.6.0<br/><small>Release</small>"]:::neutral
  end
  subgraph system["Standard library · System"]
    n57["Exit status<br/><small>Standard</small>"]:::neutral
    n58["Node.js process arguments<br/><small>Standard</small>"]:::neutral
    n59["Node.js command line and child processes<br/><small>Standard</small>"]:::neutral
    n60["Node.js character encodings<br/><small>Standard</small>"]:::neutral
    n61["Node.js events<br/><small>Standard</small>"]:::neutral
    n62["Node.js module specifiers<br/><small>Standard</small>"]:::neutral
    n63["Node.js process and console<br/><small>Standard</small>"]:::neutral
    n64["npm's command line<br/><small>Standard</small>"]:::neutral
    n65["npm's manifest<br/><small>Standard</small>"]:::neutral
    n66["POSIX signals and errors<br/><small>Standard</small>"]:::neutral
  end
  subgraph text["Standard library · Text"]
    n67["Positions in a file<br/><small>Standard</small>"]:::neutral
    n68["Characters that do not show<br/><small>Standard</small>"]:::neutral
    n69["Text file<br/><small>Standard</small>"]:::neutral
    n70["Unified differences<br/><small>Standard</small>"]:::neutral
  end
  subgraph web["Standard library · Web"]
    n71["CSSOM View<br/><small>Standard</small>"]:::neutral
    n72["HTTP<br/><small>Standard</small>"]:::neutral
    n73["Media Queries Level 5<br/><small>Standard</small>"]:::neutral
    n74["Media types<br/><small>Standard</small>"]:::neutral
    n75["Screen Wake Lock API<br/><small>Standard</small>"]:::neutral
    n76["Server-sent events<br/><small>Standard</small>"]:::neutral
    n77["UI events<br/><small>Standard</small>"]:::neutral
    n78["URI<br/><small>Standard</small>"]:::neutral
    n79["Web Audio API<br/><small>Standard</small>"]:::neutral
    n80["Web Speech API<br/><small>Standard</small>"]:::neutral
  end
  n0 -->|Serves| n50
  n1 -->|Serves| n50
  n1 -->|Depends on| n9
  n1 -->|Depends on| n0
  n2 -->|Serves| n50
  n2 -->|Depends on| n1
  n3 -->|Serves| n50
  n3 -->|Depends on| n11
  n4 -->|Serves| n47
  n5 -->|Serves| n47
  n6 -->|Serves| n47
  n7 -->|Serves| n50
  n7 -->|Depends on| n5
  n7 -->|Depends on| n6
  n7 -->|Depends on| n9
  n7 -->|Depends on| n0
  n8 -->|Serves| n47
  n9 -->|Serves| n47
  n10 -->|Serves| n47
  n11 -->|Serves| n47
  n12 -->|Serves| n47
  n13 -->|Serves| n47
  n14 -->|Serves| n47
  n15 -->|Serves| n47
  n16 -->|Serves| n47
  n17 -->|Serves| n47
  n18 -->|Serves| n47
  n19 -->|Serves| n47
  n20 -->|Serves| n47
  n21 -->|Serves| n48
  n22 -->|Serves| n48
  n23 -->|Serves| n48
  n24 -->|Serves| n48
  n25 -->|Serves| n48
  n27 -->|Implements| n40
  n27 -->|Implements| n41
  n28 -->|Implements| n26
  n29 -->|Implements| n35
  n30 -->|Implements| n38
  n30 -->|Depends on| n77
  n31 -->|Implements| n39
  n32 -->|Implements| n43
  n32 -->|Depends on| n18
  n32 -->|Depends on| n80
  n33 -->|Implements| n40
  n33 -->|Depends on| n75
  n34 -->|Serves| n49
  n34 -->|Applied by| n39
  n34 -->|Applied by| n31
  n34 -->|Applied by| n37
  n34 -->|Applied by| n35
  n34 -->|Applied by| n29
  n34 -->|Applied by| n43
  n34 -->|Applied by| n32
  n34 -->|Applied by| n46
  n34 -->|Applied by| n42
  n34 -->|Applied by| n40
  n34 -->|Applied by| n33
  n34 -->|Applied by| n27
  n34 -->|Applied by| n41
  n34 -->|Applied by| n26
  n34 -->|Applied by| n28
  n34 -->|Applied by| n36
  n34 -->|Applied by| n45
  n36 -->|Implements| n26
  n36 -->|Implements| n45
  n36 -->|Depends on| n0
  n37 -->|Implements| n39
  n44 -->|Serves| n49
  n44 -->|Applied by| n38
  n44 -->|Applied by| n30
  n46 -->|Implements| n43
  n46 -->|Implements| n42
  n51 -->|Serves| n47
  n51 -->|Serves| n48
  n51 -->|Serves| n49
  n51 -->|Serves| n50
  n52 -->|Serves| n47
  n52 -->|Serves| n48
  n52 -->|Serves| n49
  n52 -->|Serves| n50
  n53 -->|Serves| n47
  n53 -->|Serves| n48
  n53 -->|Serves| n49
  n53 -->|Serves| n50
  n54 -->|Serves| n47
  n54 -->|Serves| n48
  n54 -->|Serves| n49
  n54 -->|Serves| n50
  n55 -->|Serves| n47
  n55 -->|Serves| n48
  n55 -->|Serves| n49
  n55 -->|Serves| n50
  n56 -->|Serves| n47
  n56 -->|Serves| n48
  n56 -->|Serves| n49
  n56 -->|Serves| n50
  n57 -->|Serves| n47
  n58 -->|Serves| n47
  n59 -->|Serves| n47
  n60 -->|Serves| n47
  n61 -->|Serves| n47
  n62 -->|Serves| n47
  n63 -->|Serves| n47
  n64 -->|Serves| n47
  n65 -->|Serves| n47
  n66 -->|Serves| n47
  n67 -->|Serves| n47
  n68 -->|Serves| n47
  n69 -->|Serves| n47
  n70 -->|Serves| n47
  n71 -->|Serves| n47
  n72 -->|Serves| n47
  n73 -->|Serves| n47
  n74 -->|Serves| n47
  n75 -->|Serves| n47
  n76 -->|Serves| n47
  n77 -->|Serves| n47
  n78 -->|Serves| n47
  n79 -->|Serves| n47
  n80 -->|Serves| n47
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
