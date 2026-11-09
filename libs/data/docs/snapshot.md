# Snapshot

*The exact state expected on 9 November 2026, without history: the values in force, without the amendments that produced them.*

## Data · Obligations

### What a shipment stores migrates

Requirement · `Migrated` · **held**

- Owner: trame
- Parameters: { kinds: obligations.DataKinds }
- Refines: Data described once
- Depends on: The kinds the library carries

### The kinds the library carries

Vocabulary · `DataKinds`

- Owner: trame
- Words: { entity: A kind of data a product keeps outside the graph, described once }
- Serves: Data described once

### Criteria of what a shipment stores

Acceptance criteria · `MigratedCriteria` · **held**

- Owner: trame
- Accepts: What a shipment stores migrates

## Data · Packages

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 103
- How it joins the graph: language
- Its path: ../../generations/g103
- Serves: Data described once

### std

Package · `stdLibrary`

- Owner: trame
- Name: std
- Version: 0.17.0
- How it joins the graph: library
- Its path: ../../std/releases/0.17.0
- Serves: Data described once

## Data · Product

### Data described once

Goal · `DataDescribedOnce`

- Owner: trame

## Data · Words

### Words of the kinds of data

Message catalog · `DataKindWords`

- Owner: trame
