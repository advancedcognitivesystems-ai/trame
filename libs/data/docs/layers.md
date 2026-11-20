# Layers

*The graph in force on 20 November 2026, ordered by distance to the goals.*

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
    n9["The library of continuous integration<br/><small>Package</small>"]:::neutral
    n10["Trame<br/><small>Package</small>"]:::neutral
    n11["std<br/><small>Package</small>"]:::neutral
  end
  subgraph principles["Data · Principles"]
    n12["An entity is described once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Data · Product"]
    n13["Data described once<br/><small>Goal</small>"]:::neutral
  end
  subgraph records["Data · Records"]
    n14["What a new table starts with<br/><small>Port</small>"]:::neutral
    n15["PostgreSQL's tables<br/><small>Function</small>"]:::held
    n16["Records<br/><small>Port</small>"]:::neutral
    n17["Records in SQL<br/><small>Function</small>"]:::held
    n18["The records its entity starts with<br/><small>Function</small>"]:::held
    n19["A database of SQL<br/><small>Port</small>"]:::neutral
    n20["SQLite in memory<br/><small>Implementation</small>"]:::held
    n21["SQLite's tables<br/><small>Function</small>"]:::held
    n22["No records to start with<br/><small>Function</small>"]:::held
    n23["A dialect of SQL, for tables<br/><small>Port</small>"]:::neutral
    n24["The table of versions<br/><small>Decision</small>"]:::neutral
  end
  subgraph releases["Data · Releases"]
    n25["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n26["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n27["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n28["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n29["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n30["Version 0.5.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n31["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n32["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n33["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n34["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n35["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n36["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n37["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n38["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n39["Records seeded<br/><small>Scenario</small>"]:::held
    n40["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n41["Seeded tables<br/><small>Environment</small>"]:::neutral
    n42["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n43["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n44["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n45["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n46["The next version<br/><small>Shipment</small>"]:::unknown
    n47["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n48["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n49["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
    n50["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n51["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
    n52["The library of data<br/><small>Artefact</small>"]:::unknown
    n53["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n54["A book<br/><small>Entity</small>"]:::held
    n55["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n56["A column added<br/><small>Syntax element</small>"]:::held
    n57["Column definition<br/><small>Syntax element</small>"]:::held
    n58["Condition on a column<br/><small>Syntax element</small>"]:::held
    n59["A column with no value<br/><small>Syntax element</small>"]:::held
    n60["Count<br/><small>Syntax element</small>"]:::held
    n61["Table creation<br/><small>Syntax element</small>"]:::held
    n62["Deletion<br/><small>Syntax element</small>"]:::held
    n63["A column dropped<br/><small>Syntax element</small>"]:::held
    n64["Insertion<br/><small>Syntax element</small>"]:::held
    n65["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n66["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n67["A column renamed<br/><small>Syntax element</small>"]:::held
    n68["Selection<br/><small>Syntax element</small>"]:::held
    n69["SQL<br/><small>Standard</small>"]:::neutral
    n70["SQLite<br/><small>Standard</small>"]:::neutral
    n71["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n72["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n73["List<br/><small>Syntax element</small>"]:::held
    n74["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n75["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
  end
  n0 -->|Serves| n13
  n3 -->|Serves| n13
  n3 -->|Implements| n2
  n3 -->|Depends on| n1
  n3 -->|Depends on| n4
  n3 -->|Depends on| n5
  n3 -->|Depends on| n0
  n4 -->|Serves| n13
  n5 -->|Serves| n13
  n6 -->|Serves| n13
  n7 -->|Refines| n13
  n7 -->|Depends on| n6
  n8 -->|Accepts| n7
  n9 -->|Serves| n13
  n10 -->|Serves| n13
  n11 -->|Serves| n13
  n12 -->|Serves| n13
  n12 -->|Applied by| n7
  n12 -->|Applied by| n5
  n12 -->|Applied by| n0
  n12 -->|Applied by| n3
  n12 -->|Applied by| n17
  n15 -->|Serves| n13
  n15 -->|Implements| n23
  n15 -->|Depends on| n66
  n15 -->|Depends on| n65
  n15 -->|Depends on| n57
  n15 -->|Depends on| n61
  n15 -->|Depends on| n60
  n15 -->|Depends on| n64
  n15 -->|Depends on| n68
  n15 -->|Depends on| n74
  n15 -->|Depends on| n62
  n15 -->|Depends on| n56
  n15 -->|Depends on| n67
  n15 -->|Depends on| n63
  n15 -->|Depends on| n58
  n15 -->|Depends on| n59
  n15 -->|Depends on| n24
  n17 -->|Serves| n13
  n17 -->|Implements| n16
  n17 -->|Depends on| n19
  n17 -->|Depends on| n23
  n17 -->|Depends on| n14
  n17 -->|Depends on| n24
  n17 -->|Depends on| n0
  n18 -->|Serves| n13
  n18 -->|Implements| n14
  n20 -->|Implements| n19
  n20 -->|Depends on| n70
  n21 -->|Serves| n13
  n21 -->|Implements| n23
  n21 -->|Depends on| n72
  n21 -->|Depends on| n71
  n21 -->|Depends on| n57
  n21 -->|Depends on| n61
  n21 -->|Depends on| n60
  n21 -->|Depends on| n64
  n21 -->|Depends on| n68
  n21 -->|Depends on| n74
  n21 -->|Depends on| n62
  n21 -->|Depends on| n56
  n21 -->|Depends on| n67
  n21 -->|Depends on| n63
  n21 -->|Depends on| n58
  n21 -->|Depends on| n59
  n21 -->|Depends on| n24
  n22 -->|Serves| n13
  n22 -->|Implements| n14
  n25 -->|Serves| n13
  n26 -->|Serves| n13
  n27 -->|Serves| n13
  n28 -->|Serves| n13
  n29 -->|Serves| n13
  n30 -->|Serves| n13
  n33 -->|Verifies| n3
  n33 -->|Verifies| n5
  n33 -->|Verifies| n0
  n33 -->|In| n43
  n33 -->|Depends on| n2
  n33 -->|Depends on| n54
  n33 -->|Depends on| n1
  n33 -->|Depends on| n32
  n33 -->|Depends on| n31
  n34 -->|Chooses| n3
  n34 -->|Chooses| n17
  n34 -->|Chooses| n21
  n34 -->|Chooses| n22
  n34 -->|In| n43
  n34 -->|Serves| n13
  n35 -->|Chooses| n15
  n35 -->|In| n37
  n35 -->|Serves| n13
  n36 -->|Verifies| n15
  n36 -->|In| n37
  n36 -->|Depends on| n23
  n36 -->|Depends on| n54
  n36 -->|Depends on| n32
  n36 -->|Depends on| n31
  n38 -->|Verifies| n17
  n38 -->|Verifies| n21
  n38 -->|Verifies| n20
  n38 -->|Verifies| n22
  n38 -->|Verifies| n0
  n38 -->|In| n43
  n38 -->|Depends on| n16
  n38 -->|Depends on| n19
  n38 -->|Depends on| n23
  n38 -->|Depends on| n24
  n38 -->|Depends on| n54
  n38 -->|Depends on| n32
  n38 -->|Depends on| n31
  n39 -->|Verifies| n18
  n39 -->|In| n41
  n39 -->|Depends on| n16
  n39 -->|Depends on| n54
  n39 -->|Depends on| n31
  n40 -->|Chooses| n17
  n40 -->|Chooses| n21
  n40 -->|Chooses| n18
  n40 -->|In| n41
  n40 -->|Serves| n13
  n42 -->|Chooses| n20
  n42 -->|In| n43
  n42 -->|In| n41
  n42 -->|Serves| n13
  n44 -->|Serves| n13
  n45 -->|Serves| n13
  n46 -->|Ships| n52
  n46 -->|Follows the policy| n53
  n47 -->|Serves| n13
  n49 -->|Runs elsewhere| n46
  n49 -->|Its writer's settings| n48
  n50 -->|Serves| n13
  n51 -->|Ships| n49
  n53 -->|Its obligations| n45
  n53 -->|Its obligations| n50
  n53 -->|Its obligations| n44
  n53 -->|Its obligations| n47
  n54 -->|Serves| n13
  n55 -->|Serves| n13
  n56 -->|Defined by| n69
  n56 -->|Depends on| n69
  n57 -->|Defined by| n69
  n57 -->|Depends on| n69
  n58 -->|Defined by| n69
  n58 -->|Depends on| n69
  n59 -->|Defined by| n69
  n59 -->|Depends on| n69
  n60 -->|Defined by| n69
  n60 -->|Depends on| n69
  n61 -->|Defined by| n69
  n61 -->|Depends on| n69
  n61 -->|Depends on| n73
  n62 -->|Defined by| n69
  n62 -->|Depends on| n69
  n63 -->|Defined by| n69
  n63 -->|Depends on| n69
  n64 -->|Defined by| n69
  n64 -->|Depends on| n69
  n64 -->|Depends on| n73
  n65 -->|Defined by| n66
  n65 -->|Depends on| n66
  n66 -->|Serves| n13
  n67 -->|Defined by| n69
  n67 -->|Depends on| n69
  n68 -->|Defined by| n69
  n68 -->|Depends on| n69
  n68 -->|Depends on| n73
  n69 -->|Serves| n13
  n70 -->|Serves| n13
  n71 -->|Defined by| n72
  n71 -->|Depends on| n72
  n72 -->|Serves| n13
  n73 -->|Defined by| n69
  n73 -->|Depends on| n69
  n74 -->|Defined by| n69
  n74 -->|Depends on| n69
  n74 -->|Depends on| n73
  n54 -.->|Depends on| n55
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
