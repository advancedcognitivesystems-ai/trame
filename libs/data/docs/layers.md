# Layers

*The graph in force on 12 November 2026, ordered by distance to the goals.*

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
  end
  subgraph scenarios["Data · Scenarios"]
    n27["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n28["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n29["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n30["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n31["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n32["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n33["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n34["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n35["Records seeded<br/><small>Scenario</small>"]:::held
    n36["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n37["Seeded tables<br/><small>Environment</small>"]:::neutral
    n38["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n39["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n40["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n41["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n42["The next version<br/><small>Shipment</small>"]:::unknown
    n43["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n44["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n45["The library of data<br/><small>Artefact</small>"]:::unknown
    n46["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n47["A book<br/><small>Entity</small>"]:::held
    n48["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n49["A column added<br/><small>Syntax element</small>"]:::held
    n50["Column definition<br/><small>Syntax element</small>"]:::held
    n51["Condition on a column<br/><small>Syntax element</small>"]:::held
    n52["A column with no value<br/><small>Syntax element</small>"]:::held
    n53["Count<br/><small>Syntax element</small>"]:::held
    n54["Table creation<br/><small>Syntax element</small>"]:::held
    n55["Deletion<br/><small>Syntax element</small>"]:::held
    n56["A column dropped<br/><small>Syntax element</small>"]:::held
    n57["Insertion<br/><small>Syntax element</small>"]:::held
    n58["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n59["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n60["A column renamed<br/><small>Syntax element</small>"]:::held
    n61["Selection<br/><small>Syntax element</small>"]:::held
    n62["SQL<br/><small>Standard</small>"]:::neutral
    n63["SQLite<br/><small>Standard</small>"]:::neutral
    n64["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n65["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n66["List<br/><small>Syntax element</small>"]:::held
    n67["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n68["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n14 -->|Depends on| n59
  n14 -->|Depends on| n58
  n14 -->|Depends on| n50
  n14 -->|Depends on| n54
  n14 -->|Depends on| n53
  n14 -->|Depends on| n57
  n14 -->|Depends on| n61
  n14 -->|Depends on| n67
  n14 -->|Depends on| n55
  n14 -->|Depends on| n49
  n14 -->|Depends on| n60
  n14 -->|Depends on| n56
  n14 -->|Depends on| n51
  n14 -->|Depends on| n52
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
  n19 -->|Depends on| n63
  n20 -->|Serves| n12
  n20 -->|Implements| n22
  n20 -->|Depends on| n65
  n20 -->|Depends on| n64
  n20 -->|Depends on| n50
  n20 -->|Depends on| n54
  n20 -->|Depends on| n53
  n20 -->|Depends on| n57
  n20 -->|Depends on| n61
  n20 -->|Depends on| n67
  n20 -->|Depends on| n55
  n20 -->|Depends on| n49
  n20 -->|Depends on| n60
  n20 -->|Depends on| n56
  n20 -->|Depends on| n51
  n20 -->|Depends on| n52
  n20 -->|Depends on| n23
  n21 -->|Serves| n12
  n21 -->|Implements| n13
  n24 -->|Serves| n12
  n25 -->|Serves| n12
  n26 -->|Serves| n12
  n29 -->|Verifies| n3
  n29 -->|Verifies| n5
  n29 -->|Verifies| n0
  n29 -->|In| n39
  n29 -->|Depends on| n2
  n29 -->|Depends on| n47
  n29 -->|Depends on| n1
  n29 -->|Depends on| n28
  n29 -->|Depends on| n27
  n30 -->|Chooses| n3
  n30 -->|Chooses| n16
  n30 -->|Chooses| n20
  n30 -->|Chooses| n21
  n30 -->|In| n39
  n30 -->|Serves| n12
  n31 -->|Chooses| n14
  n31 -->|In| n33
  n31 -->|Serves| n12
  n32 -->|Verifies| n14
  n32 -->|In| n33
  n32 -->|Depends on| n22
  n32 -->|Depends on| n47
  n32 -->|Depends on| n28
  n32 -->|Depends on| n27
  n34 -->|Verifies| n16
  n34 -->|Verifies| n20
  n34 -->|Verifies| n19
  n34 -->|Verifies| n21
  n34 -->|Verifies| n0
  n34 -->|In| n39
  n34 -->|Depends on| n15
  n34 -->|Depends on| n18
  n34 -->|Depends on| n22
  n34 -->|Depends on| n23
  n34 -->|Depends on| n47
  n34 -->|Depends on| n28
  n34 -->|Depends on| n27
  n35 -->|Verifies| n17
  n35 -->|In| n37
  n35 -->|Depends on| n15
  n35 -->|Depends on| n47
  n35 -->|Depends on| n27
  n36 -->|Chooses| n16
  n36 -->|Chooses| n20
  n36 -->|Chooses| n17
  n36 -->|In| n37
  n36 -->|Serves| n12
  n38 -->|Chooses| n19
  n38 -->|In| n39
  n38 -->|In| n37
  n38 -->|Serves| n12
  n40 -->|Serves| n12
  n41 -->|Serves| n12
  n42 -->|Ships| n45
  n42 -->|Follows the policy| n46
  n43 -->|Serves| n12
  n44 -->|Serves| n12
  n46 -->|Its obligations| n41
  n46 -->|Its obligations| n44
  n46 -->|Its obligations| n40
  n46 -->|Its obligations| n43
  n47 -->|Serves| n12
  n48 -->|Serves| n12
  n49 -->|Defined by| n62
  n49 -->|Depends on| n62
  n50 -->|Defined by| n62
  n50 -->|Depends on| n62
  n51 -->|Defined by| n62
  n51 -->|Depends on| n62
  n52 -->|Defined by| n62
  n52 -->|Depends on| n62
  n53 -->|Defined by| n62
  n53 -->|Depends on| n62
  n54 -->|Defined by| n62
  n54 -->|Depends on| n62
  n54 -->|Depends on| n66
  n55 -->|Defined by| n62
  n55 -->|Depends on| n62
  n56 -->|Defined by| n62
  n56 -->|Depends on| n62
  n57 -->|Defined by| n62
  n57 -->|Depends on| n62
  n57 -->|Depends on| n66
  n58 -->|Defined by| n59
  n58 -->|Depends on| n59
  n59 -->|Serves| n12
  n60 -->|Defined by| n62
  n60 -->|Depends on| n62
  n61 -->|Defined by| n62
  n61 -->|Depends on| n62
  n61 -->|Depends on| n66
  n62 -->|Serves| n12
  n63 -->|Serves| n12
  n64 -->|Defined by| n65
  n64 -->|Depends on| n65
  n65 -->|Serves| n12
  n66 -->|Defined by| n62
  n66 -->|Depends on| n62
  n67 -->|Defined by| n62
  n67 -->|Depends on| n62
  n67 -->|Depends on| n66
  n47 -.->|Depends on| n48
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
