# Architecture decisions

*The choices that shape the product without being values, in force on 10 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **1 architecture decision, 1 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [A vector is three numbers](vectors.md#VectorsAsTriples) | **held** | [Angle](angles.md#Angle), [Vectors](vectors.md#Vectors) |

## Geometry · Vectors

<a id="VectorsAsTriples"></a>

### A vector is three numbers

`VectorsAsTriples` · `src/vectors.ts:122` · status: **held**

A point or a direction is a triple of numbers, and what is done with it is a structure's operation: written once, with its laws, rather than as helpers each product writes again.

Context: Poselia's body computed with vectors through helpers written beside its rules, and its angles as numbers of degrees: the next product drawing or moving something would have written them again, and a degree passed where a radian was expected would have been seen by nobody.

Consequences: A point, a direction, a key of a pose is a Vector: frozen into a program as it is, compared within the tolerance. A rule receives Vectors as a dependency and calls its operations; an angle is a quantity, written in the unit it is thought in (deg(30), turns(0.25)).

| Rejected | Why |
|---|---|
| A class with methods | a value of the graph must be data, which a program carries frozen and a document shows |
| three.js's Vector3 | the rules of a body would depend on the library that draws it |
| Angles as numbers of degrees | a computation in radians and a value in degrees would mix without a word |

- Decided by: ghalaax
- Serves: [Geometry written once](product.md#GeometryWrittenOnce)
- Applied by: [Vectors](vectors.md#Vectors), [Angle](angles.md#Angle)
