# Layers

*The graph in force on 19 November 2026, ordered by distance to the goals.*

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
  end
  subgraph scenarios["Data · Scenarios"]
    n30["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n31["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n32["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n33["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n34["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n35["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n36["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n37["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n38["Records seeded<br/><small>Scenario</small>"]:::held
    n39["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n40["Seeded tables<br/><small>Environment</small>"]:::neutral
    n41["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n42["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n43["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n44["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n45["The next version<br/><small>Shipment</small>"]:::held
    n46["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n47["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n48["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n49["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n50["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n51["The library of data<br/><small>Artefact</small>"]:::held
    n52["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n53["A book<br/><small>Entity</small>"]:::held
    n54["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n55["A column added<br/><small>Syntax element</small>"]:::held
    n56["Column definition<br/><small>Syntax element</small>"]:::held
    n57["Condition on a column<br/><small>Syntax element</small>"]:::held
    n58["A column with no value<br/><small>Syntax element</small>"]:::held
    n59["Count<br/><small>Syntax element</small>"]:::held
    n60["Table creation<br/><small>Syntax element</small>"]:::held
    n61["Deletion<br/><small>Syntax element</small>"]:::held
    n62["A column dropped<br/><small>Syntax element</small>"]:::held
    n63["Insertion<br/><small>Syntax element</small>"]:::held
    n64["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n65["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n66["A column renamed<br/><small>Syntax element</small>"]:::held
    n67["Selection<br/><small>Syntax element</small>"]:::held
    n68["SQL<br/><small>Standard</small>"]:::neutral
    n69["SQLite<br/><small>Standard</small>"]:::neutral
    n70["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n71["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n72["List<br/><small>Syntax element</small>"]:::held
    n73["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n74["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n15 -->|Depends on| n65
  n15 -->|Depends on| n64
  n15 -->|Depends on| n56
  n15 -->|Depends on| n60
  n15 -->|Depends on| n59
  n15 -->|Depends on| n63
  n15 -->|Depends on| n67
  n15 -->|Depends on| n73
  n15 -->|Depends on| n61
  n15 -->|Depends on| n55
  n15 -->|Depends on| n66
  n15 -->|Depends on| n62
  n15 -->|Depends on| n57
  n15 -->|Depends on| n58
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
  n20 -->|Depends on| n69
  n21 -->|Serves| n13
  n21 -->|Implements| n23
  n21 -->|Depends on| n71
  n21 -->|Depends on| n70
  n21 -->|Depends on| n56
  n21 -->|Depends on| n60
  n21 -->|Depends on| n59
  n21 -->|Depends on| n63
  n21 -->|Depends on| n67
  n21 -->|Depends on| n73
  n21 -->|Depends on| n61
  n21 -->|Depends on| n55
  n21 -->|Depends on| n66
  n21 -->|Depends on| n62
  n21 -->|Depends on| n57
  n21 -->|Depends on| n58
  n21 -->|Depends on| n24
  n22 -->|Serves| n13
  n22 -->|Implements| n14
  n25 -->|Serves| n13
  n26 -->|Serves| n13
  n27 -->|Serves| n13
  n28 -->|Serves| n13
  n29 -->|Serves| n13
  n32 -->|Verifies| n3
  n32 -->|Verifies| n5
  n32 -->|Verifies| n0
  n32 -->|In| n42
  n32 -->|Depends on| n2
  n32 -->|Depends on| n53
  n32 -->|Depends on| n1
  n32 -->|Depends on| n31
  n32 -->|Depends on| n30
  n33 -->|Chooses| n3
  n33 -->|Chooses| n17
  n33 -->|Chooses| n21
  n33 -->|Chooses| n22
  n33 -->|In| n42
  n33 -->|Serves| n13
  n34 -->|Chooses| n15
  n34 -->|In| n36
  n34 -->|Serves| n13
  n35 -->|Verifies| n15
  n35 -->|In| n36
  n35 -->|Depends on| n23
  n35 -->|Depends on| n53
  n35 -->|Depends on| n31
  n35 -->|Depends on| n30
  n37 -->|Verifies| n17
  n37 -->|Verifies| n21
  n37 -->|Verifies| n20
  n37 -->|Verifies| n22
  n37 -->|Verifies| n0
  n37 -->|In| n42
  n37 -->|Depends on| n16
  n37 -->|Depends on| n19
  n37 -->|Depends on| n23
  n37 -->|Depends on| n24
  n37 -->|Depends on| n53
  n37 -->|Depends on| n31
  n37 -->|Depends on| n30
  n38 -->|Verifies| n18
  n38 -->|In| n40
  n38 -->|Depends on| n16
  n38 -->|Depends on| n53
  n38 -->|Depends on| n30
  n39 -->|Chooses| n17
  n39 -->|Chooses| n21
  n39 -->|Chooses| n18
  n39 -->|In| n40
  n39 -->|Serves| n13
  n41 -->|Chooses| n20
  n41 -->|In| n42
  n41 -->|In| n40
  n41 -->|Serves| n13
  n43 -->|Serves| n13
  n44 -->|Serves| n13
  n45 -->|Ships| n51
  n45 -->|Follows the policy| n52
  n46 -->|Serves| n13
  n48 -->|Runs elsewhere| n45
  n48 -->|Its writer's settings| n47
  n49 -->|Serves| n13
  n50 -->|Ships| n48
  n52 -->|Its obligations| n44
  n52 -->|Its obligations| n49
  n52 -->|Its obligations| n43
  n52 -->|Its obligations| n46
  n53 -->|Serves| n13
  n54 -->|Serves| n13
  n55 -->|Defined by| n68
  n55 -->|Depends on| n68
  n56 -->|Defined by| n68
  n56 -->|Depends on| n68
  n57 -->|Defined by| n68
  n57 -->|Depends on| n68
  n58 -->|Defined by| n68
  n58 -->|Depends on| n68
  n59 -->|Defined by| n68
  n59 -->|Depends on| n68
  n60 -->|Defined by| n68
  n60 -->|Depends on| n68
  n60 -->|Depends on| n72
  n61 -->|Defined by| n68
  n61 -->|Depends on| n68
  n62 -->|Defined by| n68
  n62 -->|Depends on| n68
  n63 -->|Defined by| n68
  n63 -->|Depends on| n68
  n63 -->|Depends on| n72
  n64 -->|Defined by| n65
  n64 -->|Depends on| n65
  n65 -->|Serves| n13
  n66 -->|Defined by| n68
  n66 -->|Depends on| n68
  n67 -->|Defined by| n68
  n67 -->|Depends on| n68
  n67 -->|Depends on| n72
  n68 -->|Serves| n13
  n69 -->|Serves| n13
  n70 -->|Defined by| n71
  n70 -->|Depends on| n71
  n71 -->|Serves| n13
  n72 -->|Defined by| n68
  n72 -->|Depends on| n68
  n73 -->|Defined by| n68
  n73 -->|Depends on| n68
  n73 -->|Depends on| n72
  n53 -.->|Depends on| n54
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
