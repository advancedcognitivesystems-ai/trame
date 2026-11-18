# Layers

*The graph in force on 18 November 2026, ordered by distance to the goals.*

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
    n9["Trame<br/><small>Package</small>"]:::neutral
    n10["std<br/><small>Package</small>"]:::neutral
  end
  subgraph principles["Data · Principles"]
    n11["An entity is described once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Data · Product"]
    n12["Data described once<br/><small>Goal</small>"]:::neutral
  end
  subgraph records["Data · Records"]
    n13["What a new table starts with<br/><small>Port</small>"]:::neutral
    n14["PostgreSQL's tables<br/><small>Function</small>"]:::held
    n15["Records<br/><small>Port</small>"]:::neutral
    n16["Records in SQL<br/><small>Function</small>"]:::held
    n17["The records its entity starts with<br/><small>Function</small>"]:::held
    n18["A database of SQL<br/><small>Port</small>"]:::neutral
    n19["SQLite in memory<br/><small>Implementation</small>"]:::held
    n20["SQLite's tables<br/><small>Function</small>"]:::held
    n21["No records to start with<br/><small>Function</small>"]:::held
    n22["A dialect of SQL, for tables<br/><small>Port</small>"]:::neutral
    n23["The table of versions<br/><small>Decision</small>"]:::neutral
  end
  subgraph releases["Data · Releases"]
    n24["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n25["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n26["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n27["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n28["Version 0.4.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n29["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n30["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n31["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n32["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n33["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n34["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n35["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n36["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n37["Records seeded<br/><small>Scenario</small>"]:::held
    n38["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n39["Seeded tables<br/><small>Environment</small>"]:::neutral
    n40["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n41["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n42["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n43["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n44["The next version<br/><small>Shipment</small>"]:::held
    n45["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n46["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n47["The library of data<br/><small>Artefact</small>"]:::held
    n48["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n49["A book<br/><small>Entity</small>"]:::held
    n50["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n51["A column added<br/><small>Syntax element</small>"]:::held
    n52["Column definition<br/><small>Syntax element</small>"]:::held
    n53["Condition on a column<br/><small>Syntax element</small>"]:::held
    n54["A column with no value<br/><small>Syntax element</small>"]:::held
    n55["Count<br/><small>Syntax element</small>"]:::held
    n56["Table creation<br/><small>Syntax element</small>"]:::held
    n57["Deletion<br/><small>Syntax element</small>"]:::held
    n58["A column dropped<br/><small>Syntax element</small>"]:::held
    n59["Insertion<br/><small>Syntax element</small>"]:::held
    n60["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n61["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n62["A column renamed<br/><small>Syntax element</small>"]:::held
    n63["Selection<br/><small>Syntax element</small>"]:::held
    n64["SQL<br/><small>Standard</small>"]:::neutral
    n65["SQLite<br/><small>Standard</small>"]:::neutral
    n66["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n67["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n68["List<br/><small>Syntax element</small>"]:::held
    n69["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n70["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
  end
  n0 -->|Serves| n12
  n3 -->|Serves| n12
  n3 -->|Implements| n2
  n3 -->|Depends on| n1
  n3 -->|Depends on| n4
  n3 -->|Depends on| n5
  n3 -->|Depends on| n0
  n4 -->|Serves| n12
  n5 -->|Serves| n12
  n6 -->|Serves| n12
  n7 -->|Refines| n12
  n7 -->|Depends on| n6
  n8 -->|Accepts| n7
  n9 -->|Serves| n12
  n10 -->|Serves| n12
  n11 -->|Serves| n12
  n11 -->|Applied by| n7
  n11 -->|Applied by| n5
  n11 -->|Applied by| n0
  n11 -->|Applied by| n3
  n11 -->|Applied by| n16
  n14 -->|Serves| n12
  n14 -->|Implements| n22
  n14 -->|Depends on| n61
  n14 -->|Depends on| n60
  n14 -->|Depends on| n52
  n14 -->|Depends on| n56
  n14 -->|Depends on| n55
  n14 -->|Depends on| n59
  n14 -->|Depends on| n63
  n14 -->|Depends on| n69
  n14 -->|Depends on| n57
  n14 -->|Depends on| n51
  n14 -->|Depends on| n62
  n14 -->|Depends on| n58
  n14 -->|Depends on| n53
  n14 -->|Depends on| n54
  n14 -->|Depends on| n23
  n16 -->|Serves| n12
  n16 -->|Implements| n15
  n16 -->|Depends on| n18
  n16 -->|Depends on| n22
  n16 -->|Depends on| n13
  n16 -->|Depends on| n23
  n16 -->|Depends on| n0
  n17 -->|Serves| n12
  n17 -->|Implements| n13
  n19 -->|Implements| n18
  n19 -->|Depends on| n65
  n20 -->|Serves| n12
  n20 -->|Implements| n22
  n20 -->|Depends on| n67
  n20 -->|Depends on| n66
  n20 -->|Depends on| n52
  n20 -->|Depends on| n56
  n20 -->|Depends on| n55
  n20 -->|Depends on| n59
  n20 -->|Depends on| n63
  n20 -->|Depends on| n69
  n20 -->|Depends on| n57
  n20 -->|Depends on| n51
  n20 -->|Depends on| n62
  n20 -->|Depends on| n58
  n20 -->|Depends on| n53
  n20 -->|Depends on| n54
  n20 -->|Depends on| n23
  n21 -->|Serves| n12
  n21 -->|Implements| n13
  n24 -->|Serves| n12
  n25 -->|Serves| n12
  n26 -->|Serves| n12
  n27 -->|Serves| n12
  n28 -->|Serves| n12
  n31 -->|Verifies| n3
  n31 -->|Verifies| n5
  n31 -->|Verifies| n0
  n31 -->|In| n41
  n31 -->|Depends on| n2
  n31 -->|Depends on| n49
  n31 -->|Depends on| n1
  n31 -->|Depends on| n30
  n31 -->|Depends on| n29
  n32 -->|Chooses| n3
  n32 -->|Chooses| n16
  n32 -->|Chooses| n20
  n32 -->|Chooses| n21
  n32 -->|In| n41
  n32 -->|Serves| n12
  n33 -->|Chooses| n14
  n33 -->|In| n35
  n33 -->|Serves| n12
  n34 -->|Verifies| n14
  n34 -->|In| n35
  n34 -->|Depends on| n22
  n34 -->|Depends on| n49
  n34 -->|Depends on| n30
  n34 -->|Depends on| n29
  n36 -->|Verifies| n16
  n36 -->|Verifies| n20
  n36 -->|Verifies| n19
  n36 -->|Verifies| n21
  n36 -->|Verifies| n0
  n36 -->|In| n41
  n36 -->|Depends on| n15
  n36 -->|Depends on| n18
  n36 -->|Depends on| n22
  n36 -->|Depends on| n23
  n36 -->|Depends on| n49
  n36 -->|Depends on| n30
  n36 -->|Depends on| n29
  n37 -->|Verifies| n17
  n37 -->|In| n39
  n37 -->|Depends on| n15
  n37 -->|Depends on| n49
  n37 -->|Depends on| n29
  n38 -->|Chooses| n16
  n38 -->|Chooses| n20
  n38 -->|Chooses| n17
  n38 -->|In| n39
  n38 -->|Serves| n12
  n40 -->|Chooses| n19
  n40 -->|In| n41
  n40 -->|In| n39
  n40 -->|Serves| n12
  n42 -->|Serves| n12
  n43 -->|Serves| n12
  n44 -->|Ships| n47
  n44 -->|Follows the policy| n48
  n45 -->|Serves| n12
  n46 -->|Serves| n12
  n48 -->|Its obligations| n43
  n48 -->|Its obligations| n46
  n48 -->|Its obligations| n42
  n48 -->|Its obligations| n45
  n49 -->|Serves| n12
  n50 -->|Serves| n12
  n51 -->|Defined by| n64
  n51 -->|Depends on| n64
  n52 -->|Defined by| n64
  n52 -->|Depends on| n64
  n53 -->|Defined by| n64
  n53 -->|Depends on| n64
  n54 -->|Defined by| n64
  n54 -->|Depends on| n64
  n55 -->|Defined by| n64
  n55 -->|Depends on| n64
  n56 -->|Defined by| n64
  n56 -->|Depends on| n64
  n56 -->|Depends on| n68
  n57 -->|Defined by| n64
  n57 -->|Depends on| n64
  n58 -->|Defined by| n64
  n58 -->|Depends on| n64
  n59 -->|Defined by| n64
  n59 -->|Depends on| n64
  n59 -->|Depends on| n68
  n60 -->|Defined by| n61
  n60 -->|Depends on| n61
  n61 -->|Serves| n12
  n62 -->|Defined by| n64
  n62 -->|Depends on| n64
  n63 -->|Defined by| n64
  n63 -->|Depends on| n64
  n63 -->|Depends on| n68
  n64 -->|Serves| n12
  n65 -->|Serves| n12
  n66 -->|Defined by| n67
  n66 -->|Depends on| n67
  n67 -->|Serves| n12
  n68 -->|Defined by| n64
  n68 -->|Depends on| n64
  n69 -->|Defined by| n64
  n69 -->|Depends on| n64
  n69 -->|Depends on| n68
  n49 -.->|Depends on| n50
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
