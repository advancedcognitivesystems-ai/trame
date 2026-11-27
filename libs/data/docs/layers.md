# Layers

*The graph in force on 27 November 2026, ordered by distance to the goals.*

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
    n11["The people of the repository<br/><small>Package</small>"]:::neutral
    n12["std<br/><small>Package</small>"]:::neutral
  end
  subgraph principles["Data · Principles"]
    n13["An entity is described once<br/><small>Architecture decision</small>"]:::held
  end
  subgraph product["Data · Product"]
    n14["Data described once<br/><small>Goal</small>"]:::neutral
  end
  subgraph records["Data · Records"]
    n15["What a new table starts with<br/><small>Port</small>"]:::neutral
    n16["PostgreSQL's tables<br/><small>Function</small>"]:::held
    n17["Records<br/><small>Port</small>"]:::neutral
    n18["Records in SQL<br/><small>Function</small>"]:::held
    n19["The records its entity starts with<br/><small>Function</small>"]:::held
    n20["A database of SQL<br/><small>Port</small>"]:::neutral
    n21["SQLite in memory<br/><small>Implementation</small>"]:::held
    n22["SQLite's tables<br/><small>Function</small>"]:::held
    n23["No records to start with<br/><small>Function</small>"]:::held
    n24["A dialect of SQL, for tables<br/><small>Port</small>"]:::neutral
    n25["The table of versions<br/><small>Decision</small>"]:::neutral
  end
  subgraph releases["Data · Releases"]
    n26["Version 0.1.0<br/><small>Release</small>"]:::neutral
    n27["Version 0.1.1<br/><small>Release</small>"]:::neutral
    n28["Version 0.2.0<br/><small>Release</small>"]:::neutral
    n29["Version 0.3.0<br/><small>Release</small>"]:::neutral
    n30["Version 0.4.0<br/><small>Release</small>"]:::neutral
    n31["Version 0.5.0<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n32["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n33["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n34["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n35["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n36["The library's scenarios keep what they write as a product would<br/><small>Architecture decision</small>"]:::held
    n37["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n38["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n39["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n40["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n41["Records seeded<br/><small>Scenario</small>"]:::held
    n42["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n43["Seeded tables<br/><small>Environment</small>"]:::neutral
    n44["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n45["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n46["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n47["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n48["The next version<br/><small>Shipment</small>"]:::unknown
    n49["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n50["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n51["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n52["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n53["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n54["The library of data<br/><small>Artefact</small>"]:::unknown
    n55["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n56["A book<br/><small>Entity</small>"]:::held
    n57["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n58["A column added<br/><small>Syntax element</small>"]:::held
    n59["Column definition<br/><small>Syntax element</small>"]:::held
    n60["Condition on a column<br/><small>Syntax element</small>"]:::held
    n61["A column with no value<br/><small>Syntax element</small>"]:::held
    n62["Count<br/><small>Syntax element</small>"]:::held
    n63["Table creation<br/><small>Syntax element</small>"]:::held
    n64["Deletion<br/><small>Syntax element</small>"]:::held
    n65["A column dropped<br/><small>Syntax element</small>"]:::held
    n66["Insertion<br/><small>Syntax element</small>"]:::held
    n67["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n68["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n69["A column renamed<br/><small>Syntax element</small>"]:::held
    n70["Selection<br/><small>Syntax element</small>"]:::held
    n71["SQL<br/><small>Standard</small>"]:::neutral
    n72["SQLite<br/><small>Standard</small>"]:::neutral
    n73["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n74["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n75["List<br/><small>Syntax element</small>"]:::held
    n76["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n77["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
  end
  n0 -->|Serves| n14
  n3 -->|Serves| n14
  n3 -->|Implements| n2
  n3 -->|Depends on| n1
  n3 -->|Depends on| n4
  n3 -->|Depends on| n5
  n3 -->|Depends on| n0
  n4 -->|Serves| n14
  n5 -->|Serves| n14
  n6 -->|Serves| n14
  n7 -->|Refines| n14
  n7 -->|Depends on| n6
  n8 -->|Accepts| n7
  n9 -->|Serves| n14
  n10 -->|Serves| n14
  n11 -->|Serves| n14
  n12 -->|Serves| n14
  n13 -->|Serves| n14
  n13 -->|Applied by| n7
  n13 -->|Applied by| n5
  n13 -->|Applied by| n0
  n13 -->|Applied by| n3
  n13 -->|Applied by| n18
  n16 -->|Serves| n14
  n16 -->|Implements| n24
  n16 -->|Depends on| n68
  n16 -->|Depends on| n67
  n16 -->|Depends on| n59
  n16 -->|Depends on| n63
  n16 -->|Depends on| n62
  n16 -->|Depends on| n66
  n16 -->|Depends on| n70
  n16 -->|Depends on| n76
  n16 -->|Depends on| n64
  n16 -->|Depends on| n58
  n16 -->|Depends on| n69
  n16 -->|Depends on| n65
  n16 -->|Depends on| n60
  n16 -->|Depends on| n61
  n16 -->|Depends on| n25
  n18 -->|Serves| n14
  n18 -->|Implements| n17
  n18 -->|Depends on| n20
  n18 -->|Depends on| n24
  n18 -->|Depends on| n15
  n18 -->|Depends on| n25
  n18 -->|Depends on| n0
  n19 -->|Serves| n14
  n19 -->|Implements| n15
  n21 -->|Implements| n20
  n21 -->|Depends on| n72
  n22 -->|Serves| n14
  n22 -->|Implements| n24
  n22 -->|Depends on| n74
  n22 -->|Depends on| n73
  n22 -->|Depends on| n59
  n22 -->|Depends on| n63
  n22 -->|Depends on| n62
  n22 -->|Depends on| n66
  n22 -->|Depends on| n70
  n22 -->|Depends on| n76
  n22 -->|Depends on| n64
  n22 -->|Depends on| n58
  n22 -->|Depends on| n69
  n22 -->|Depends on| n65
  n22 -->|Depends on| n60
  n22 -->|Depends on| n61
  n22 -->|Depends on| n25
  n23 -->|Serves| n14
  n23 -->|Implements| n15
  n26 -->|Serves| n14
  n27 -->|Serves| n14
  n28 -->|Serves| n14
  n29 -->|Serves| n14
  n30 -->|Serves| n14
  n31 -->|Serves| n14
  n34 -->|Verifies| n3
  n34 -->|Verifies| n5
  n34 -->|Verifies| n0
  n34 -->|In| n45
  n34 -->|Depends on| n2
  n34 -->|Depends on| n56
  n34 -->|Depends on| n1
  n34 -->|Depends on| n33
  n34 -->|Depends on| n32
  n35 -->|Chooses| n3
  n35 -->|Chooses| n18
  n35 -->|Chooses| n22
  n35 -->|Chooses| n23
  n35 -->|In| n45
  n35 -->|Serves| n14
  n36 -->|Serves| n14
  n36 -->|Applied by| n35
  n36 -->|Applied by| n44
  n36 -->|Applied by| n42
  n36 -->|Applied by| n37
  n37 -->|Chooses| n16
  n37 -->|In| n39
  n37 -->|Serves| n14
  n38 -->|Verifies| n16
  n38 -->|In| n39
  n38 -->|Depends on| n24
  n38 -->|Depends on| n56
  n38 -->|Depends on| n33
  n38 -->|Depends on| n32
  n40 -->|Verifies| n18
  n40 -->|Verifies| n22
  n40 -->|Verifies| n21
  n40 -->|Verifies| n23
  n40 -->|Verifies| n0
  n40 -->|In| n45
  n40 -->|Depends on| n17
  n40 -->|Depends on| n20
  n40 -->|Depends on| n24
  n40 -->|Depends on| n25
  n40 -->|Depends on| n56
  n40 -->|Depends on| n33
  n40 -->|Depends on| n32
  n41 -->|Verifies| n19
  n41 -->|In| n43
  n41 -->|Depends on| n17
  n41 -->|Depends on| n56
  n41 -->|Depends on| n32
  n42 -->|Chooses| n18
  n42 -->|Chooses| n22
  n42 -->|Chooses| n19
  n42 -->|In| n43
  n42 -->|Serves| n14
  n44 -->|Chooses| n21
  n44 -->|In| n45
  n44 -->|In| n43
  n44 -->|Serves| n14
  n46 -->|Serves| n14
  n47 -->|Serves| n14
  n48 -->|Ships| n54
  n48 -->|Follows the policy| n55
  n49 -->|Serves| n14
  n51 -->|Runs elsewhere| n48
  n51 -->|Its writer's settings| n50
  n52 -->|Serves| n14
  n53 -->|Ships| n51
  n55 -->|Its obligations| n47
  n55 -->|Its obligations| n52
  n55 -->|Its obligations| n46
  n55 -->|Its obligations| n49
  n56 -->|Serves| n14
  n57 -->|Serves| n14
  n58 -->|Defined by| n71
  n58 -->|Depends on| n71
  n59 -->|Defined by| n71
  n59 -->|Depends on| n71
  n60 -->|Defined by| n71
  n60 -->|Depends on| n71
  n61 -->|Defined by| n71
  n61 -->|Depends on| n71
  n62 -->|Defined by| n71
  n62 -->|Depends on| n71
  n63 -->|Defined by| n71
  n63 -->|Depends on| n71
  n63 -->|Depends on| n75
  n64 -->|Defined by| n71
  n64 -->|Depends on| n71
  n65 -->|Defined by| n71
  n65 -->|Depends on| n71
  n66 -->|Defined by| n71
  n66 -->|Depends on| n71
  n66 -->|Depends on| n75
  n67 -->|Defined by| n68
  n67 -->|Depends on| n68
  n68 -->|Serves| n14
  n69 -->|Defined by| n71
  n69 -->|Depends on| n71
  n70 -->|Defined by| n71
  n70 -->|Depends on| n71
  n70 -->|Depends on| n75
  n71 -->|Serves| n14
  n72 -->|Serves| n14
  n73 -->|Defined by| n74
  n73 -->|Depends on| n74
  n74 -->|Serves| n14
  n75 -->|Defined by| n71
  n75 -->|Depends on| n71
  n76 -->|Defined by| n71
  n76 -->|Depends on| n71
  n76 -->|Depends on| n75
  n56 -.->|Depends on| n57
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
