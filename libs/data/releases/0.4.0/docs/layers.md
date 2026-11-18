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
  end
  subgraph scenarios["Data · Scenarios"]
    n28["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n29["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n30["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n31["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n32["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n33["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n34["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n35["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n36["Records seeded<br/><small>Scenario</small>"]:::held
    n37["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n38["Seeded tables<br/><small>Environment</small>"]:::neutral
    n39["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n40["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n41["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n42["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n43["The next version<br/><small>Shipment</small>"]:::unknown
    n44["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n45["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n46["The library of data<br/><small>Artefact</small>"]:::unknown
    n47["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n48["A book<br/><small>Entity</small>"]:::held
    n49["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n50["A column added<br/><small>Syntax element</small>"]:::held
    n51["Column definition<br/><small>Syntax element</small>"]:::held
    n52["Condition on a column<br/><small>Syntax element</small>"]:::held
    n53["A column with no value<br/><small>Syntax element</small>"]:::held
    n54["Count<br/><small>Syntax element</small>"]:::held
    n55["Table creation<br/><small>Syntax element</small>"]:::held
    n56["Deletion<br/><small>Syntax element</small>"]:::held
    n57["A column dropped<br/><small>Syntax element</small>"]:::held
    n58["Insertion<br/><small>Syntax element</small>"]:::held
    n59["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n60["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n61["A column renamed<br/><small>Syntax element</small>"]:::held
    n62["Selection<br/><small>Syntax element</small>"]:::held
    n63["SQL<br/><small>Standard</small>"]:::neutral
    n64["SQLite<br/><small>Standard</small>"]:::neutral
    n65["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n66["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n67["List<br/><small>Syntax element</small>"]:::held
    n68["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n69["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n14 -->|Depends on| n60
  n14 -->|Depends on| n59
  n14 -->|Depends on| n51
  n14 -->|Depends on| n55
  n14 -->|Depends on| n54
  n14 -->|Depends on| n58
  n14 -->|Depends on| n62
  n14 -->|Depends on| n68
  n14 -->|Depends on| n56
  n14 -->|Depends on| n50
  n14 -->|Depends on| n61
  n14 -->|Depends on| n57
  n14 -->|Depends on| n52
  n14 -->|Depends on| n53
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
  n19 -->|Depends on| n64
  n20 -->|Serves| n12
  n20 -->|Implements| n22
  n20 -->|Depends on| n66
  n20 -->|Depends on| n65
  n20 -->|Depends on| n51
  n20 -->|Depends on| n55
  n20 -->|Depends on| n54
  n20 -->|Depends on| n58
  n20 -->|Depends on| n62
  n20 -->|Depends on| n68
  n20 -->|Depends on| n56
  n20 -->|Depends on| n50
  n20 -->|Depends on| n61
  n20 -->|Depends on| n57
  n20 -->|Depends on| n52
  n20 -->|Depends on| n53
  n20 -->|Depends on| n23
  n21 -->|Serves| n12
  n21 -->|Implements| n13
  n24 -->|Serves| n12
  n25 -->|Serves| n12
  n26 -->|Serves| n12
  n27 -->|Serves| n12
  n30 -->|Verifies| n3
  n30 -->|Verifies| n5
  n30 -->|Verifies| n0
  n30 -->|In| n40
  n30 -->|Depends on| n2
  n30 -->|Depends on| n48
  n30 -->|Depends on| n1
  n30 -->|Depends on| n29
  n30 -->|Depends on| n28
  n31 -->|Chooses| n3
  n31 -->|Chooses| n16
  n31 -->|Chooses| n20
  n31 -->|Chooses| n21
  n31 -->|In| n40
  n31 -->|Serves| n12
  n32 -->|Chooses| n14
  n32 -->|In| n34
  n32 -->|Serves| n12
  n33 -->|Verifies| n14
  n33 -->|In| n34
  n33 -->|Depends on| n22
  n33 -->|Depends on| n48
  n33 -->|Depends on| n29
  n33 -->|Depends on| n28
  n35 -->|Verifies| n16
  n35 -->|Verifies| n20
  n35 -->|Verifies| n19
  n35 -->|Verifies| n21
  n35 -->|Verifies| n0
  n35 -->|In| n40
  n35 -->|Depends on| n15
  n35 -->|Depends on| n18
  n35 -->|Depends on| n22
  n35 -->|Depends on| n23
  n35 -->|Depends on| n48
  n35 -->|Depends on| n29
  n35 -->|Depends on| n28
  n36 -->|Verifies| n17
  n36 -->|In| n38
  n36 -->|Depends on| n15
  n36 -->|Depends on| n48
  n36 -->|Depends on| n28
  n37 -->|Chooses| n16
  n37 -->|Chooses| n20
  n37 -->|Chooses| n17
  n37 -->|In| n38
  n37 -->|Serves| n12
  n39 -->|Chooses| n19
  n39 -->|In| n40
  n39 -->|In| n38
  n39 -->|Serves| n12
  n41 -->|Serves| n12
  n42 -->|Serves| n12
  n43 -->|Ships| n46
  n43 -->|Follows the policy| n47
  n44 -->|Serves| n12
  n45 -->|Serves| n12
  n47 -->|Its obligations| n42
  n47 -->|Its obligations| n45
  n47 -->|Its obligations| n41
  n47 -->|Its obligations| n44
  n48 -->|Serves| n12
  n49 -->|Serves| n12
  n50 -->|Defined by| n63
  n50 -->|Depends on| n63
  n51 -->|Defined by| n63
  n51 -->|Depends on| n63
  n52 -->|Defined by| n63
  n52 -->|Depends on| n63
  n53 -->|Defined by| n63
  n53 -->|Depends on| n63
  n54 -->|Defined by| n63
  n54 -->|Depends on| n63
  n55 -->|Defined by| n63
  n55 -->|Depends on| n63
  n55 -->|Depends on| n67
  n56 -->|Defined by| n63
  n56 -->|Depends on| n63
  n57 -->|Defined by| n63
  n57 -->|Depends on| n63
  n58 -->|Defined by| n63
  n58 -->|Depends on| n63
  n58 -->|Depends on| n67
  n59 -->|Defined by| n60
  n59 -->|Depends on| n60
  n60 -->|Serves| n12
  n61 -->|Defined by| n63
  n61 -->|Depends on| n63
  n62 -->|Defined by| n63
  n62 -->|Depends on| n63
  n62 -->|Depends on| n67
  n63 -->|Serves| n12
  n64 -->|Serves| n12
  n65 -->|Defined by| n66
  n65 -->|Depends on| n66
  n66 -->|Serves| n12
  n67 -->|Defined by| n63
  n67 -->|Depends on| n63
  n68 -->|Defined by| n63
  n68 -->|Depends on| n63
  n68 -->|Depends on| n67
  n48 -.->|Depends on| n49
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
