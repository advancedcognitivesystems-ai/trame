# Snapshot

*The exact state expected on 4 November 2026, without history: the values in force, without the amendments that produced them.*

## Geometry · Angles

### How an angle is written in each of its units.

Message catalog · `AngleSymbols`

- Owner: ghalaax

### Angle

Quantity · `Angle`

- Owner: ghalaax
- Source: BIPM, The International System of Units (SI Brochure, 9th edition), Table 4 (radian) and Table 8 (degree)
- Address: https://www.bipm.org/en/publications/si-brochure
- Units: { radian: 1, degree: 0.02, turn: 6.28 }
- Written with: How an angle is written in each of its units.
- Serves: Geometry written once

## Geometry · Packages

### Trame

Package · `Language`

- Owner: ghalaax
- Name: trame
- Version: 101
- How it joins the graph: language
- Where it comes from: registry
- Serves: Geometry written once

### The standard library

Package · `StandardLibrary`

- Owner: ghalaax
- Name: std
- Version: 0.16.0
- How it joins the graph: library
- Where it comes from: registry
- Serves: Geometry written once

## Geometry · Product

### Geometry written once

Goal · `GeometryWrittenOnce`

- Owner: ghalaax

## Geometry · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: ghalaax
- Version: 0.1.0
- Released on: 2026-11-01
- What changes: Vectors in three dimensions with their laws, the quantity Angle (radian, degree, turn), the axes and the tolerance
- Fingerprint: 669d0698ae31c1c1
- Language: shared
- Serves: Geometry written once

### Version 0.2.0

Release · `R0_2_0`

- Released by: ghalaax
- Version: 0.2.0
- Released on: 2026-11-04
- What changes: On g101 and std 0.16.0; the library ships its versions through its own graph: NextVersion, its decisions applied and its packages safe
- Fingerprint: 541c5d013c8f9a50
- Language: shared
- Serves: Geometry written once

## Geometry · SDLC

### The library of geometry

Artefact · `TheLibrary` · **unknown**

- Owner: ghalaax
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: ghalaax
- Target: version
- Ships: The library of geometry
- Follows the policy: How a version is made

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: ghalaax
- Serves: Geometry written once

### Its packages safe

Obligation · `PackagesSafe`

- Owner: ghalaax
- Serves: Geometry written once

### How a version is made

Policy · `VersionMode`

- Owner: ghalaax
- Its obligations: Its decisions applied, Its packages safe

## Geometry · Vectors

### Vectors

Algebraic structure · `Vectors` · **held**

- Owner: ghalaax
- Constants: { none: { value: 0, meaning: The coordinate of the origin along each axis: no distance } }
- Parameters: { axes: vectors.Axes, tolerance: vectors.Tolerance, angles: angles.Angle }
- Laws: { says: Adding is commutative and associative, the origin adds nothing, the difference undoes it, holds: (rule) }, { says: The dot product is symmetric, distributes over addition, and gives a vector's length squared, holds: (rule) }, { says: The cross product is perpendicular to both its factors, and changes sign when they swap, holds: (rule) }, { says: A unit has a length of one and the direction it came from, or is the origin when there was none, holds: (rule) }, { says: A direction makes no angle with itself, a half turn with its opposite, a quarter turn with what it crosses, holds: (rule) }, { says: The axes are right-handed, and forward turned by a quarter turn on the floor is left, holds: (rule) }, { says: Mixing goes from the first at none of the way to the second at all of it, through their middle, holds: (rule) }
- Serves: Geometry written once
- Depends on: The axes, The tolerance, Angle

### The axes

Decision · `Axes`

- Decided by: ghalaax
- Value: { forward: 1, 0, 0, left: 0, 1, 0, up: 0, 0, 1 }
- Rejected: Up as the second axis, as three.js has it, a body on the floor would be measured by its depth; a drawing turns the axes at its own edge; Left-handed axes, the cross product would point down, and every rule that turns a direction would change sign

### The tolerance

Decision · `Tolerance`

- Decided by: ghalaax
- Value: { length: 0 }
- Rejected: Exact equality, a point computed two ways differs in its last digits; A millimetre, two hands a millimetre apart would be one, which a figure drawn close up shows

### A vector is three numbers

Architecture decision · `VectorsAsTriples` · **held**

- Decided by: ghalaax
- Context: Poselia's body computed with vectors through helpers written beside its rules, and its angles as numbers of degrees: the next product drawing or moving something would have written them again, and a degree passed where a radian was expected would have been seen by nobody.
- Consequences: A point, a direction, a key of a pose is a Vector: frozen into a program as it is, compared within the tolerance. A rule receives Vectors as a dependency and calls its operations; an angle is a quantity, written in the unit it is thought in (deg(30), turns(0.25)).
- Rejected: A class with methods, a value of the graph must be data, which a program carries frozen and a document shows; three.js's Vector3, the rules of a body would depend on the library that draws it; Angles as numbers of degrees, a computation in radians and a value in degrees would mix without a word
- Serves: Geometry written once
- Applied by: Vectors, Angle
