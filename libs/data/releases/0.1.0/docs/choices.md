# Technical choices

*What answers each port in each environment on 9 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **1 technical choice for 2 ports, in 1 environment**

| Port | Test |
|---|---|
| [Documents](documents.md#Documents) | [Documents kept in the preferences](documents.md#DocumentsInPreferences) |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Documents, in memory](scenarios.md#InMemory), [In memory](../.trame/std/docs/scenarios.md#InMemory) |

## Data · Scenarios

<a id="InMemory"></a>

### Documents, in memory

`InMemory` · `src/scenarios.ts:29` · status: **held**

In the library's scenarios, a document is kept in the preferences of a device kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Documents](documents.md#Documents) | [Documents kept in the preferences](documents.md#DocumentsInPreferences) | a function |
| [Preferences](../.trame/std/docs/platform.md#PreferencesStore) | [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences) | a function |

Context: The library's documents are read and written as a product's would be, the device in memory.

- Decided by: trame
- Chooses: [Preferences kept in memory](../.trame/std/docs/platform.md#MemoryPreferences), [Documents kept in the preferences](documents.md#DocumentsInPreferences)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Data described once](product.md#DataDescribedOnce)
