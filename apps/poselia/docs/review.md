# Branch review

*What the declarations that are not published yet add to the published graph (`trame.lock`), as of 30 October 2026.*

> **2 new declarations · 0 published declarations affected · 0 overlaps · 0 blocking holes added**

## What the branch redefines

The new declarations redefine nothing that is published.

## To check before merging

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| error | `shipment-gap` | What the app keeps stays on the device ships, and nothing proves it (What people decided, published) | [What the app keeps stays on the device](principles.md#KeptOnThePhone) | ghalaax |  |
| error | `shipment-gap` | The app is played in memory first ships, and nothing proves it (What people decided, published) | [The app is played in memory first](principles.md#PlayedInMemoryFirst) | ghalaax |  |

## New declarations

| Declaration | Kind | Owner | Source |
|---|---|---|---|
| [What the app keeps stays on the device](principles.md#KeptOnThePhone) | Architecture decision | ghalaax | `src/principles.ts:109` |
| [The app is played in memory first](principles.md#PlayedInMemoryFirst) | Architecture decision | ghalaax | `src/principles.ts:95` |
