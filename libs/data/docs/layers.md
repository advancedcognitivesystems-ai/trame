# Layers

*The graph in force on 10 November 2026, ordered by distance to the goals.*

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
    n17["A database of SQL<br/><small>Port</small>"]:::neutral
    n18["SQLite in memory<br/><small>Implementation</small>"]:::held
    n19["SQLite's tables<br/><small>Function</small>"]:::held
    n20["No records to start with<br/><small>Function</small>"]:::held
    n21["A dialect of SQL, for tables<br/><small>Port</small>"]:::neutral
    n22["The table of versions<br/><small>Decision</small>"]:::neutral
  end
  subgraph releases["Data · Releases"]
    n23["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n24["Version 0.1.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n25["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n26["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n27["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n28["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n29["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n30["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n31["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n32["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n33["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n34["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n35["The next version<br/><small>Shipment</small>"]:::unknown
    n36["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n37["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n38["The library of data<br/><small>Artefact</small>"]:::unknown
    n39["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n40["A book<br/><small>Entity</small>"]:::held
    n41["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n42["A column added<br/><small>Syntax element</small>"]:::held
    n43["Column definition<br/><small>Syntax element</small>"]:::held
    n44["Condition on a column<br/><small>Syntax element</small>"]:::held
    n45["A column with no value<br/><small>Syntax element</small>"]:::held
    n46["Count<br/><small>Syntax element</small>"]:::held
    n47["Table creation<br/><small>Syntax element</small>"]:::held
    n48["Deletion<br/><small>Syntax element</small>"]:::held
    n49["A column dropped<br/><small>Syntax element</small>"]:::held
    n50["Insertion<br/><small>Syntax element</small>"]:::held
    n51["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n52["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n53["A column renamed<br/><small>Syntax element</small>"]:::held
    n54["Selection<br/><small>Syntax element</small>"]:::held
    n55["SQL<br/><small>Standard</small>"]:::neutral
    n56["SQLite<br/><small>Standard</small>"]:::neutral
    n57["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n58["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n59["List<br/><small>Syntax element</small>"]:::held
    n60["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n61["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n14 -->|Implements| n21
  n14 -->|Depends on| n52
  n14 -->|Depends on| n51
  n14 -->|Depends on| n43
  n14 -->|Depends on| n47
  n14 -->|Depends on| n46
  n14 -->|Depends on| n50
  n14 -->|Depends on| n54
  n14 -->|Depends on| n60
  n14 -->|Depends on| n48
  n14 -->|Depends on| n42
  n14 -->|Depends on| n53
  n14 -->|Depends on| n49
  n14 -->|Depends on| n44
  n14 -->|Depends on| n45
  n14 -->|Depends on| n22
  n16 -->|Serves| n12
  n16 -->|Implements| n15
  n16 -->|Depends on| n17
  n16 -->|Depends on| n21
  n16 -->|Depends on| n13
  n16 -->|Depends on| n22
  n16 -->|Depends on| n0
  n18 -->|Implements| n17
  n18 -->|Depends on| n56
  n19 -->|Serves| n12
  n19 -->|Implements| n21
  n19 -->|Depends on| n58
  n19 -->|Depends on| n57
  n19 -->|Depends on| n43
  n19 -->|Depends on| n47
  n19 -->|Depends on| n46
  n19 -->|Depends on| n50
  n19 -->|Depends on| n54
  n19 -->|Depends on| n60
  n19 -->|Depends on| n48
  n19 -->|Depends on| n42
  n19 -->|Depends on| n53
  n19 -->|Depends on| n49
  n19 -->|Depends on| n44
  n19 -->|Depends on| n45
  n19 -->|Depends on| n22
  n20 -->|Serves| n12
  n20 -->|Implements| n13
  n23 -->|Serves| n12
  n24 -->|Serves| n12
  n27 -->|Verifies| n3
  n27 -->|Verifies| n5
  n27 -->|Verifies| n0
  n27 -->|In| n32
  n27 -->|Depends on| n2
  n27 -->|Depends on| n40
  n27 -->|Depends on| n1
  n27 -->|Depends on| n26
  n27 -->|Depends on| n25
  n28 -->|Chooses| n3
  n28 -->|Chooses| n16
  n28 -->|Chooses| n19
  n28 -->|Chooses| n20
  n28 -->|In| n32
  n28 -->|Serves| n12
  n29 -->|Verifies| n14
  n29 -->|In| n32
  n29 -->|Depends on| n14
  n29 -->|Depends on| n40
  n29 -->|Depends on| n26
  n29 -->|Depends on| n25
  n30 -->|Verifies| n16
  n30 -->|Verifies| n19
  n30 -->|Verifies| n18
  n30 -->|Verifies| n20
  n30 -->|Verifies| n0
  n30 -->|In| n32
  n30 -->|Depends on| n15
  n30 -->|Depends on| n17
  n30 -->|Depends on| n21
  n30 -->|Depends on| n22
  n30 -->|Depends on| n40
  n30 -->|Depends on| n26
  n30 -->|Depends on| n25
  n31 -->|Chooses| n18
  n31 -->|In| n32
  n31 -->|Serves| n12
  n33 -->|Serves| n12
  n34 -->|Serves| n12
  n35 -->|Ships| n38
  n35 -->|Follows the policy| n39
  n36 -->|Serves| n12
  n37 -->|Serves| n12
  n39 -->|Its obligations| n34
  n39 -->|Its obligations| n37
  n39 -->|Its obligations| n33
  n39 -->|Its obligations| n36
  n40 -->|Serves| n12
  n41 -->|Serves| n12
  n42 -->|Defined by| n55
  n42 -->|Depends on| n55
  n43 -->|Defined by| n55
  n43 -->|Depends on| n55
  n44 -->|Defined by| n55
  n44 -->|Depends on| n55
  n45 -->|Defined by| n55
  n45 -->|Depends on| n55
  n46 -->|Defined by| n55
  n46 -->|Depends on| n55
  n47 -->|Defined by| n55
  n47 -->|Depends on| n55
  n47 -->|Depends on| n59
  n48 -->|Defined by| n55
  n48 -->|Depends on| n55
  n49 -->|Defined by| n55
  n49 -->|Depends on| n55
  n50 -->|Defined by| n55
  n50 -->|Depends on| n55
  n50 -->|Depends on| n59
  n51 -->|Defined by| n52
  n51 -->|Depends on| n52
  n52 -->|Serves| n12
  n53 -->|Defined by| n55
  n53 -->|Depends on| n55
  n54 -->|Defined by| n55
  n54 -->|Depends on| n55
  n54 -->|Depends on| n59
  n55 -->|Serves| n12
  n56 -->|Serves| n12
  n57 -->|Defined by| n58
  n57 -->|Depends on| n58
  n58 -->|Serves| n12
  n59 -->|Defined by| n55
  n59 -->|Depends on| n55
  n60 -->|Defined by| n55
  n60 -->|Depends on| n55
  n60 -->|Depends on| n59
  n40 -.->|Depends on| n41
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
