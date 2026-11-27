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
    n32["Version 0.5.1<br/><small>Release</small>"]:::neutral
  end
  subgraph scenarios["Data · Scenarios"]
    n33["What the library's scenarios check<br/><small>Message catalog</small>"]:::neutral
    n34["What the library's scenarios are given<br/><small>Decision</small>"]:::neutral
    n35["Documents kept in the preferences<br/><small>Scenario</small>"]:::held
    n36["Documents, in memory<br/><small>Technical choice</small>"]:::held
    n37["The library's scenarios keep what they write as a product would<br/><small>Architecture decision</small>"]:::held
    n38["PostgreSQL's dialect, read<br/><small>Technical choice</small>"]:::held
    n39["PostgreSQL's statements<br/><small>Scenario</small>"]:::held
    n40["PostgreSQL's statements<br/><small>Environment</small>"]:::neutral
    n41["Records kept in SQL<br/><small>Scenario</small>"]:::held
    n42["Records seeded<br/><small>Scenario</small>"]:::held
    n43["Tables seeded, in memory<br/><small>Technical choice</small>"]:::held
    n44["Seeded tables<br/><small>Environment</small>"]:::neutral
    n45["SQLite, in memory<br/><small>Technical choice</small>"]:::held
    n46["Test<br/><small>Environment</small>"]:::neutral
  end
  subgraph sdlc["Data · SDLC"]
    n47["Its decisions applied<br/><small>Obligation</small>"]:::neutral
    n48["Its functions verified<br/><small>Obligation</small>"]:::neutral
    n49["The next version<br/><small>Shipment</small>"]:::unknown
    n50["Its packages safe<br/><small>Obligation</small>"]:::neutral
    n51["How a pull request is checked on GitHub<br/><small>Decision</small>"]:::neutral
    n52["The pull requests' workflow<br/><small>Artefact</small>"]:::held
    n53["Its requirements held<br/><small>Obligation</small>"]:::neutral
    n54["The files that run it elsewhere<br/><small>Shipment</small>"]:::held
    n55["The library of data<br/><small>Artefact</small>"]:::unknown
    n56["How a version is made<br/><small>Policy</small>"]:::neutral
  end
  subgraph shelves["Data · Shelves"]
    n57["A book<br/><small>Entity</small>"]:::held
    n58["Shelves<br/><small>Vocabulary</small>"]:::neutral
  end
  subgraph sql["Data · SQL"]
    n59["A column added<br/><small>Syntax element</small>"]:::held
    n60["Column definition<br/><small>Syntax element</small>"]:::held
    n61["Condition on a column<br/><small>Syntax element</small>"]:::held
    n62["A column with no value<br/><small>Syntax element</small>"]:::held
    n63["Count<br/><small>Syntax element</small>"]:::held
    n64["Table creation<br/><small>Syntax element</small>"]:::held
    n65["Deletion<br/><small>Syntax element</small>"]:::held
    n66["A column dropped<br/><small>Syntax element</small>"]:::held
    n67["Insertion<br/><small>Syntax element</small>"]:::held
    n68["PostgreSQL parameter<br/><small>Syntax element</small>"]:::held
    n69["PostgreSQL's dialect<br/><small>Standard</small>"]:::neutral
    n70["A column renamed<br/><small>Syntax element</small>"]:::held
    n71["Selection<br/><small>Syntax element</small>"]:::held
    n72["SQL<br/><small>Standard</small>"]:::neutral
    n73["SQLite<br/><small>Standard</small>"]:::neutral
    n74["SQLite parameter<br/><small>Syntax element</small>"]:::held
    n75["SQLite's dialect<br/><small>Standard</small>"]:::neutral
    n76["List<br/><small>Syntax element</small>"]:::held
    n77["Update<br/><small>Syntax element</small>"]:::held
  end
  subgraph words["Data · Words"]
    n78["Words of the kinds of data<br/><small>Message catalog</small>"]:::neutral
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
  n16 -->|Depends on| n69
  n16 -->|Depends on| n68
  n16 -->|Depends on| n60
  n16 -->|Depends on| n64
  n16 -->|Depends on| n63
  n16 -->|Depends on| n67
  n16 -->|Depends on| n71
  n16 -->|Depends on| n77
  n16 -->|Depends on| n65
  n16 -->|Depends on| n59
  n16 -->|Depends on| n70
  n16 -->|Depends on| n66
  n16 -->|Depends on| n61
  n16 -->|Depends on| n62
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
  n21 -->|Depends on| n73
  n22 -->|Serves| n14
  n22 -->|Implements| n24
  n22 -->|Depends on| n75
  n22 -->|Depends on| n74
  n22 -->|Depends on| n60
  n22 -->|Depends on| n64
  n22 -->|Depends on| n63
  n22 -->|Depends on| n67
  n22 -->|Depends on| n71
  n22 -->|Depends on| n77
  n22 -->|Depends on| n65
  n22 -->|Depends on| n59
  n22 -->|Depends on| n70
  n22 -->|Depends on| n66
  n22 -->|Depends on| n61
  n22 -->|Depends on| n62
  n22 -->|Depends on| n25
  n23 -->|Serves| n14
  n23 -->|Implements| n15
  n26 -->|Serves| n14
  n27 -->|Serves| n14
  n28 -->|Serves| n14
  n29 -->|Serves| n14
  n30 -->|Serves| n14
  n31 -->|Serves| n14
  n32 -->|Serves| n14
  n35 -->|Verifies| n3
  n35 -->|Verifies| n5
  n35 -->|Verifies| n0
  n35 -->|In| n46
  n35 -->|Depends on| n2
  n35 -->|Depends on| n57
  n35 -->|Depends on| n1
  n35 -->|Depends on| n34
  n35 -->|Depends on| n33
  n36 -->|Chooses| n3
  n36 -->|Chooses| n18
  n36 -->|Chooses| n22
  n36 -->|Chooses| n23
  n36 -->|In| n46
  n36 -->|Serves| n14
  n37 -->|Serves| n14
  n37 -->|Applied by| n36
  n37 -->|Applied by| n45
  n37 -->|Applied by| n43
  n37 -->|Applied by| n38
  n38 -->|Chooses| n16
  n38 -->|In| n40
  n38 -->|Serves| n14
  n39 -->|Verifies| n16
  n39 -->|In| n40
  n39 -->|Depends on| n24
  n39 -->|Depends on| n57
  n39 -->|Depends on| n34
  n39 -->|Depends on| n33
  n41 -->|Verifies| n18
  n41 -->|Verifies| n22
  n41 -->|Verifies| n21
  n41 -->|Verifies| n23
  n41 -->|Verifies| n0
  n41 -->|In| n46
  n41 -->|Depends on| n17
  n41 -->|Depends on| n20
  n41 -->|Depends on| n24
  n41 -->|Depends on| n25
  n41 -->|Depends on| n57
  n41 -->|Depends on| n34
  n41 -->|Depends on| n33
  n42 -->|Verifies| n19
  n42 -->|In| n44
  n42 -->|Depends on| n17
  n42 -->|Depends on| n57
  n42 -->|Depends on| n33
  n43 -->|Chooses| n18
  n43 -->|Chooses| n22
  n43 -->|Chooses| n19
  n43 -->|In| n44
  n43 -->|Serves| n14
  n45 -->|Chooses| n21
  n45 -->|In| n46
  n45 -->|In| n44
  n45 -->|Serves| n14
  n47 -->|Serves| n14
  n48 -->|Serves| n14
  n49 -->|Ships| n55
  n49 -->|Follows the policy| n56
  n50 -->|Serves| n14
  n52 -->|Runs elsewhere| n49
  n52 -->|Its writer's settings| n51
  n53 -->|Serves| n14
  n54 -->|Ships| n52
  n56 -->|Its obligations| n48
  n56 -->|Its obligations| n53
  n56 -->|Its obligations| n47
  n56 -->|Its obligations| n50
  n57 -->|Serves| n14
  n58 -->|Serves| n14
  n59 -->|Defined by| n72
  n59 -->|Depends on| n72
  n60 -->|Defined by| n72
  n60 -->|Depends on| n72
  n61 -->|Defined by| n72
  n61 -->|Depends on| n72
  n62 -->|Defined by| n72
  n62 -->|Depends on| n72
  n63 -->|Defined by| n72
  n63 -->|Depends on| n72
  n64 -->|Defined by| n72
  n64 -->|Depends on| n72
  n64 -->|Depends on| n76
  n65 -->|Defined by| n72
  n65 -->|Depends on| n72
  n66 -->|Defined by| n72
  n66 -->|Depends on| n72
  n67 -->|Defined by| n72
  n67 -->|Depends on| n72
  n67 -->|Depends on| n76
  n68 -->|Defined by| n69
  n68 -->|Depends on| n69
  n69 -->|Serves| n14
  n70 -->|Defined by| n72
  n70 -->|Depends on| n72
  n71 -->|Defined by| n72
  n71 -->|Depends on| n72
  n71 -->|Depends on| n76
  n72 -->|Serves| n14
  n73 -->|Serves| n14
  n74 -->|Defined by| n75
  n74 -->|Depends on| n75
  n75 -->|Serves| n14
  n76 -->|Defined by| n72
  n76 -->|Depends on| n72
  n77 -->|Defined by| n72
  n77 -->|Depends on| n72
  n77 -->|Depends on| n76
  n57 -.->|Depends on| n58
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Each rank is one edge further from a goal than the rank above it. The nodes connected to no goal are at the very bottom.*
