# Geometry

The vectors and the angles a product computes with, written once: a library of its own (E2), the second of a domain
after std. Poselia's body takes its points, its directions and its angles from here.

It is a Trame project of its own: its graph is `src/`, its bodies `src/code/`, it pins a generation in `trame.json`,
imports the language and std by their names (`#trame/kinds/structure`, `#std/measures`) and writes its own documents in
`docs/`.

## Importing it

```json
{ "libraries": { "geometry": { "path": "../../libs/geometry", "version": "0.1.0" } } }
```

`import { Vectors, type Vector } from "#geometry/vectors"`, `import { deg, type Turning } from "#geometry/angles"`;
`trame manifest` writes where `#geometry/*` leads.

| Module | Holds |
|---|---|
| `product` | What the library is for: geometry written once |
| `vectors` | `Vector` (three numbers), the decisions `Axes` (forward, left, up: right-handed, the floor where the third is zero) and `Tolerance` (a micrometre), the structure `Vectors` (add, difference, scale, dot, cross, length, distance, unit, mix, same, angle, angle at a point, a direction on the floor from its angle) with its laws, the ADR "A vector is three numbers" |
| `angles` | The quantity `Angle` (the radian, the degree, the turn; SI Brochure), its constructors `rad`, `deg`, `turns`, the type `Turning` |
| `releases` | The versions frozen under `releases/` |

## Building it

```
cd libs/geometry && ../../trame.sh build
../../trame.sh release 0.1.0 "what changes"
```
