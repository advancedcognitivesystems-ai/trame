# Snapshot

*The exact state expected on 28 November 2026, without history: the values in force, without the amendments that produced them.*

## Standard library · Access

### An entry point says who may call it

Architecture decision · `SaysItsAudience` · **held**

- Decided by: trame
- Context: Who may call an entry point decides whose records it may touch. Left unsaid, an entry point is open to whoever reaches it, and nothing tells a reader or a review that it is.
- Consequences: Every entry point names its audience (an error otherwise); an audience nobody calls is for no trigger a person calls; an entry point that reaches records owned by a person or a tenant has an audience that carries one, or that reaches every owner's. A shipment whose policy applies Identified proves that each audience carrying an identity is identified where it runs (C7).
- Rejected: Anyone by default, whatever is forgotten would be open, the classic hole; A role, as the SDLC's, a role names the people who sign evidence; an audience is a kind of caller, its members known only at run time; A word of a vocabulary, a word cannot say what its callers carry, nor be read against what an entry point reaches
- Serves: Rules applied, not written again
- Applied by: Who calls a shipment's programs is identified

### Anyone

Audience · `Anyone`

- Owner: trame
- Serves: Rules applied, not written again

### The operators

Audience · `TheOperators`

- Owner: trame
- Reaches every owner's records: true
- Serves: Rules applied, not written again

### The system

Audience · `TheSystem`

- Owner: trame
- Nobody calls: true
- Serves: Rules applied, not written again

## Standard library · Algebra

### Counts

Algebraic structure · `Counts` · **held**

- Owner: trame
- Constants: { zero: { value: 0, meaning: The count of nothing: no element, no change. The identity of addition }, one: { value: 1, meaning: A single element; what a count grows by when one more thing is counted } }
- Laws: { says: A collection is empty, single or several: exactly one of the three, holds: (rule) }, { says: Any is the opposite of isEmpty, for a list, a text and a set, holds: (rule) }, { says: Zero counts nothing; the next count after zero counts one element, holds: (rule) }, { says: Previous undoes next, and next undoes previous, holds: (rule) }, { says: Between counts the integers from lo to hi, both included, holds: (rule) }, { says: Tally counts each element once, under its key, in the order where the keys first appear, holds: (rule) }, { says: The largest of nothing is zero; the largest of two lists put together is the larger of their two largest, holds: (rule) }
- Serves: Shared operations instead of literals

### Sequences

Algebraic structure · `Sequences` · **held**

- Owner: trame
- Parameters: { ecma: ecmascript.EcmaScript, counts: algebra.Counts }
- Laws: { says: Head and rest take a sequence apart: x first, then what follows, holds: (rule) }, { says: An empty sequence, or no sequence at all, has no head and no last element, holds: (rule) }, { says: The last element of a sequence that ends with x is x, at the only last position, holds: (rule) }, { says: The last n elements end the sequence, in its order: all of them when there are fewer, holds: (rule) }, { says: The head is at the only first position, holds: (rule) }, { says: Previous gives the element just before a position, and nothing before the first, holds: (rule) }, { says: What take keeps, followed by the rest, is the whole sequence, holds: (rule) }, { says: Pairs gives every two elements once, each pair in their order, holds: (rule) }, { says: Position finds where x first is, and nothing when x is not there, holds: (rule) }, { says: RemoveAt takes the element at a position out of the list, and gives it back, holds: (rule) }, { says: AtOrLast gives the element at a position, or the last one beyond the end, holds: (rule) }, { says: Times calls f once per count, with the positions in order from the first, holds: (rule) }
- Serves: Shared operations instead of literals
- Depends on: ECMAScript, Counts

### Texts

Algebraic structure · `Texts` · **held**

- Owner: trame
- Constants: { empty: { value: , meaning: The text with no characters: the identity of concatenation, what nothing shows }, space: { value:  , meaning: What separates words (U+0020, space) }, ellipsis: { value: …, meaning: Marks where a text was cut short (U+2026, horizontal ellipsis), or what is left out of it }, wordBoundary: { value: (\p{Ll}|\p{Nd})(\p{Lu}), meaning: Where a name written in camel case changes word: a lower-case letter or a digit, then a capital }, everyWord: { value: gu, meaning: Every change of word, read in Unicode } }
- Parameters: { sequences: algebra.Sequences }
- Laws: { says: The empty text changes nothing in a concatenation, and is the concatenation of nothing, holds: (rule) }, { says: Concatenation is associative, holds: (rule) }, { says: Optional keeps what is there, and shows nothing for undefined or null, holds: (rule) }, { says: When shows only what holds: false, zero, the empty text and absence do not, holds: (rule) }, { says: Without removes a part where it first appears, holds: (rule) }, { says: Lower words puts the joint where a camel-case name changes word, and writes it in lower case, holds: (rule) }, { says: Squeeze leaves the words, one space between each, and no white space at either end, holds: (rule) }, { says: Shorten leaves a text that is not too long as it is; a longer one keeps its beginning, then the ellipsis, holds: (rule) }
- Serves: Shared operations instead of literals
- Depends on: Sequences

### Types of values

Algebraic structure · `ValueTypes` · **held**

- Owner: trame
- Parameters: { types: ecmascript.EcmaScriptTypes }
- Laws: { says: A value has at most one of these types; null, undefined and a big integer have none, holds: (rule) }, { says: Each kind of value is told by its own test: a list is an object, a function is not, holds: (rule) }
- Serves: Shared operations instead of literals
- Depends on: ECMAScript types

## Standard library · Algorithms

### Depth-first search

Standard · `DepthFirstSearch`

- Maintained by: trame
- Source: Cormen, Leiserson, Rivest and Stein, Introduction to Algorithms, 3rd ed., § 22.3 Depth-first search
- Constants: { grey: { value: grey, meaning: Discovered, its search is not finished: coming back to it closes a cycle }, black: { value: black, meaning: Its search is finished, without a cycle } }
- Serves: A published value is cited, not copied

### Mulberry32

Standard · `Mulberry32`

- Maintained by: trame
- Source: Tommy Ettinger, Mulberry32 (2017, public domain)
- Address: https://gist.github.com/tommyettinger/46a874533244883189143505d203312c
- Constants: { increment: { value: 1831565813, meaning: Added to the state at each draw }, shift1: { value: 15, meaning: First shift of the mix }, shift2: { value: 7, meaning: Second shift of the mix }, shift3: { value: 14, meaning: Last shift of the mix }, oddBit: { value: 1, meaning: OR with 1: the first multiplier is odd }, odd: { value: 61, meaning: Makes the second multiplier odd }, scale: { value: 4294967296, meaning: 2³²: brings the draw between 0 and 1 } }
- Serves: A published value is cited, not copied

### Multiplicative hashing

Standard · `MultiplicativeHash`

- Maintained by: trame
- Source: Knuth, The Art of Computer Programming, vol. 3, § 6.4; FIPS 180-4 (initial value)
- Constants: { multiplier: { value: 2654435761, meaning: ⌊2³² / φ⌋: Knuth's multiplier }, start: { value: 1779033703, meaning: 0x6a09e667, the first bits of √2 (initial value of SHA-256) } }
- Serves: A published value is cited, not copied

### SHA-256

Standard · `Sha256`

- Maintained by: trame
- Source: FIPS 180-4, Secure Hash Standard; Node.js crypto.createHash (the algorithm's name)
- Address: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
- Constants: { algorithm: { value: sha256, meaning: The name Node gives to SHA-256 } }
- Serves: A published value is cited, not copied

### Seeded draws

Function · `SeededDraws` · **held**

- Owner: trame
- Parameters: { mulberry: algorithms.Mulberry32, hash: algorithms.MultiplicativeHash, ecma: ecmascript.EcmaScript, counts: algebra.Counts }
- Serves: Shared operations instead of literals
- Depends on: Mulberry32, Multiplicative hashing, ECMAScript, Counts

## Standard library · Commands

### A library offers commands, a project chooses them

Architecture decision · `CommandsOfALibrary` · **held**

- Decided by: trame
- Context: Opening a pull request, carrying a version across the projects, were done by hand or by a script of whoever worked: nothing in the graph said how, nor checked it.
- Consequences: The library's component LibraryCommands holds the commands; a project chooses those it runs by a binding that follows Command, with a function of its own for each port of settings (its repository, its way of merging, its projects); trame <name> runs them as the project's own commands. A command reads no value of a project but through its settings.
- Rejected: A command written by each project, the same pull request opened six ways, none of them checked; Settings named by the binding, a new concept in two kinds, and nothing checks that the decision has the type the command reads
- Serves: Commands chosen, not written again
- Applied by: The library's commands, Open a pull request, Merge a pull request, Propagate, Command

### The library's commands

Component · `LibraryCommands`

- Owner: trame
- Language: typescript
- Startup: { exposure: tooling.ProgramCommands }
- Depends on: Commands of a program

### How a version is carried

Port · `PropagationSettings`

- Owner: trame
- Declared effects: 

### How pull requests are opened

Port · `PullRequestSettings`

- Owner: trame
- Declared effects: 

### Merge a pull request

Entry point · `MergePullRequest` · **held**

- Owner: trame
- Trigger: { type: command, name: merge }
- Parameters: { settings: commands.PullRequestSettings, branches: repository.Branches, pulls: repository.PullRequests, say: commands.CommandWords, exit: system.ExitStatus, counts: algebra.Counts, posix: system.Posix, texts: algebra.Texts, values: algebra.ValueTypes }
- Serves: Commands chosen, not written again
- Part of: The library's commands
- For: The operators
- Depends on: How pull requests are opened, The branches, Pull requests, What the library's commands say, Exit status, Counts, POSIX signals and errors, Texts, Types of values

### Open a pull request

Entry point · `OpenPullRequest` · **held**

- Owner: trame
- Trigger: { type: command, name: pull-request }
- Parameters: { settings: commands.PullRequestSettings, branches: repository.Branches, pulls: repository.PullRequests, ways: ci/github.MergeWays, say: commands.CommandWords, exit: system.ExitStatus, counts: algebra.Counts, posix: system.Posix, texts: algebra.Texts }
- Serves: Commands chosen, not written again
- Part of: The library's commands
- For: The operators
- Depends on: How pull requests are opened, The branches, Pull requests, What the library's commands say, Exit status, Counts, POSIX signals and errors, Texts

### Propagate

Entry point · `Propagate` · **held**

- Owner: trame
- Trigger: { type: command, name: propagate }
- Parameters: { settings: commands.PropagationSettings, files: tooling.Files, programs: tooling.ProgramRuns, say: commands.CommandWords, exit: system.ExitStatus, sequences: algebra.Sequences, posix: system.Posix, texts: algebra.Texts }
- Serves: Commands chosen, not written again
- Part of: The library's commands
- For: The operators
- Depends on: How a version is carried, Project files, Programs run, What the library's commands say, Exit status, Sequences, POSIX signals and errors, Texts

### What the library's commands say

Message catalog · `CommandWords`

- Owner: trame
- Written in: The language the library's commands and tools speak in.

## Standard library · ECMAScript

### ECMAScript

Standard · `EcmaScript`

- Maintained by: trame
- Source: ECMA-262, ECMAScript 2024: § 23.1 Array (indices, indexOf), § 13.9.3 unsigned right shift (ToUint32)
- Address: https://tc39.es/ecma262/2024/
- Constants: { firstIndex: { value: 0, meaning: The index of the first item of a list, of the first character of a text }, notFound: { value: -1, meaning: What indexOf returns when the value is not in the list (§ 23.1.3.17) }, toUnsigned32: { value: 0, meaning: x >>> 0: a zero, unsigned shift; brings x back to 32 unsigned bits } }
- Serves: A published value is cited, not copied

### ECMAScript types

Standard · `EcmaScriptTypes`

- Maintained by: trame
- Source: ECMA-262, ECMAScript 2024: § 13.5.3 The typeof operator (Table 41)
- Address: https://tc39.es/ecma262/2024/#sec-typeof-operator
- Constants: { undefined: { value: undefined, meaning: What typeof says of undefined }, object: { value: object, meaning: What typeof says of an object that is not a function, and of null }, boolean: { value: boolean, meaning: What typeof says of true and false }, number: { value: number, meaning: What typeof says of a number, NaN and the infinities included }, string: { value: string, meaning: What typeof says of a text }, symbol: { value: symbol, meaning: What typeof says of a symbol }, bigint: { value: bigint, meaning: What typeof says of a big integer }, function: { value: function, meaning: What typeof says of an object that can be called } }
- Serves: A published value is cited, not copied

### Unicode escape of a text

Standard · `UnicodeEscape`

- Maintained by: trame
- Source: ECMA-262 2024, § 12.9.4 String Literals (UnicodeEscapeSequence :: u Hex4Digits); RFC 8259 § 7
- Address: https://tc39.es/ecma262/2024/#prod-UnicodeEscapeSequence
- Constants: { prefix: { value: \u, meaning: Opens the escape: a backslash and u }, radix: { value: 16, meaning: Its digits are hexadecimal }, digits: { value: 4, meaning: Four of them: the code unit, padded on the left }, pad: { value: 0, meaning: What pads the digits on the left } }
- Serves: A published value is cited, not copied

### ECMAScript reserved words

Vocabulary · `EcmaScriptReservedWords`

- Owner: trame
- Words: { await: Reserved word (§ 12.7.2), break: Reserved word (§ 12.7.2), case: Reserved word (§ 12.7.2), catch: Reserved word (§ 12.7.2), class: Reserved word (§ 12.7.2), const: Reserved word (§ 12.7.2), continue: Reserved word (§ 12.7.2), debugger: Reserved word (§ 12.7.2), default: Reserved word (§ 12.7.2), delete: Reserved word (§ 12.7.2), do: Reserved word (§ 12.7.2), else: Reserved word (§ 12.7.2), enum: Reserved word (§ 12.7.2), export: Reserved word (§ 12.7.2), extends: Reserved word (§ 12.7.2), false: Reserved word (§ 12.7.2), finally: Reserved word (§ 12.7.2), for: Reserved word (§ 12.7.2), function: Reserved word (§ 12.7.2), if: Reserved word (§ 12.7.2), import: Reserved word (§ 12.7.2), in: Reserved word (§ 12.7.2), instanceof: Reserved word (§ 12.7.2), new: Reserved word (§ 12.7.2), null: Reserved word (§ 12.7.2), return: Reserved word (§ 12.7.2), super: Reserved word (§ 12.7.2), switch: Reserved word (§ 12.7.2), this: Reserved word (§ 12.7.2), throw: Reserved word (§ 12.7.2), true: Reserved word (§ 12.7.2), try: Reserved word (§ 12.7.2), typeof: Reserved word (§ 12.7.2), var: Reserved word (§ 12.7.2), void: Reserved word (§ 12.7.2), while: Reserved word (§ 12.7.2), with: Reserved word (§ 12.7.2), yield: Reserved word (§ 12.7.2), implements: Reserved in strict mode code (§ 13.1.1), interface: Reserved in strict mode code (§ 13.1.1), let: Reserved in strict mode code (§ 13.1.1), package: Reserved in strict mode code (§ 13.1.1), private: Reserved in strict mode code (§ 13.1.1), protected: Reserved in strict mode code (§ 13.1.1), public: Reserved in strict mode code (§ 13.1.1), static: Reserved in strict mode code (§ 13.1.1), arguments: Cannot be bound in strict mode code (§ 13.1.1), eval: Cannot be bound in strict mode code (§ 13.1.1) }
- Serves: A published value is cited, not copied

### Text run as code

Vocabulary · `TextAsCode`

- Owner: trame
- Words: { eval: Runs a text as code (§ 19.2.1), Function: Makes a function of a text (§ 20.2.1.1), constructor: Leads from any value to its constructor, Function's among them (§ 20.1.3.1) }
- Serves: A published value is cited, not copied

## Standard library · Effects

### Effects

Vocabulary · `Effects`

- Owner: trame
- Words: { read: Reads a state (files, a database), write: Changes a state, execution: Runs loaded code, process: Starts or controls processes, terminal: Reads the arguments, writes on the outputs, time: Reads the time, or waits, network: Talks to another machine, display: Shows a page to a person, and hears what they do on it, keeps: Keeps what was computed, to give it back the same: what it writes, only it reads, random: Draws what nobody can foresee }
- Serves: Ports of the platform, realized once

### What the platform may do

Decision · `PlatformEffects`

- Decided by: trame
- Value: { modules: { node:path: , node:url: , node:util: , node:events: , node:buffer: , node:zlib: , node:fs: { existsSync: read, readFileSync: read, readdirSync: read, statSync: read, lstatSync: read, realpathSync: read, readlinkSync: read, accessSync: read, watch: read, time, writeFileSync: write, appendFileSync: write, mkdirSync: write, mkdtempSync: write, rmSync: write, unlinkSync: write, renameSync: write, symlinkSync: write, copyFileSync: read, write, cpSync: read, write }, node:fs/promises: read, write, asynchronous, node:os: { tmpdir: read, homedir: read, platform: , EOL:  }, node:crypto: { createHash: , randomUUID: random, randomBytes: random }, node:child_process: process, node:http: network, asynchronous, node:https: network, asynchronous, node:net: network, asynchronous, node:sqlite: read, write, node:module: { createRequire: execution, registerHooks: execution }, node:readline: terminal, asynchronous, node:timers: time, node:timers/promises: time, asynchronous }, hosts: { process: { argv: terminal, stdout: terminal, stderr: terminal, stdin: terminal, env: read, cwd: read, execPath: read, execArgv: read, pid: read, platform: , versions: , on: process, emit: process, exit: process, kill: process, exitCode: process, nextTick: asynchronous, hrtime: time }, Buffer: , Response: , DecompressionStream: , CompressionStream: , CSS: { escape:  }, matchMedia: display, scrollTo: display, console: terminal, fetch: network, asynchronous, XMLHttpRequest: network, asynchronous, WebSocket: network, asynchronous, EventSource: network, asynchronous, setTimeout: time, clearTimeout: time, setInterval: time, clearInterval: time, setImmediate: time, queueMicrotask: asynchronous, performance: time, crypto: { randomUUID: random, getRandomValues: random, subtle: asynchronous }, localStorage: read, write, sessionStorage: read, write, indexedDB: read, write, asynchronous, document: display, window: display, getComputedStyle: display, scrollX: display, scrollY: display, innerWidth: display, innerHeight: display, devicePixelRatio: display, ResizeObserver: display, IntersectionObserver: display, location: read, history: display, navigator: { languages: read, language: read, wakeLock: display, asynchronous, userAgent: read }, requestAnimationFrame: time, display, cancelAnimationFrame: time, display, speechSynthesis: display, SpeechSynthesisUtterance: , AudioContext: display, Audio: display, URL: , URLSearchParams: , TextEncoder: , TextDecoder: , structuredClone: , AbortController: , Blob: , atob: , btoa:  }, ecmaScript: { Math: { random: random }, Date: { now: time } }, constructed: { Date: time }, globalObjects: globalThis, self }

### Commands

Function · `Commands` · **held**

- Owner: trame
- Parameters: { effects: effects.Effects }
- Serves: Ports of the platform, realized once
- Depends on: Effects

## Standard library · The engine

### Trame references

Standard · `ReferenceSyntax`

- Maintained by: trame
- Source: Trame, the prelude (trame/kernel.ts: refOf, getPath)
- Constants: { separator: { value: ., meaning: Separates the module from the identifier, and the steps of a path in a field }, library: { value: /, meaning: Separates a library's name from the name of one of its modules, in the graph that imports it }, wholeNode: { value: , meaning: The empty path: the whole node, not one of its fields, refines: { node: algebra.Texts, name: empty } } }
- Serves: A published value is cited, not copied
- Refines: Texts

### The engine is a provider

Architecture decision · `EngineAsAProvider` · **held**

- Decided by: trame
- Context: The engine's commands reached its modules directly; a command of a library or a project could not, and a command moved out of the engine would have lost what it computed with.
- Consequences: Every command reaches the engine the same way, through ports versioned with the library; the API they read is the language's, given by the engine, and it grows with a generation when a command needs more. A library's scenario compiles a project of its own through the engine that plays it.
- Rejected: A library of contracts, a third place for types the language already defines (what a view receives) and the ports std already holds; The engine's modules, given as they are, what a command reads would change with each generation, unseen by the types
- Serves: Ports of the platform, realized once
- Applied by: The project at hand, The project of a scenario, The project the engine prepared, A project compiled by the engine that plays the scenario, Reading a language, Read by the engine

### Reading a language

Port · `LanguageReading`

- Owner: trame
- Declared effects: read, asynchronous

### The project of a scenario

Port · `ProjectOfTheScenario`

- Owner: trame
- Declared effects: 

### The project at hand

Port · `TheProject`

- Owner: trame
- Declared effects: read, asynchronous

### What the engine's adapters say

Message catalog · `EngineWords`

- Owner: trame
- Written in: The language the library's commands and tools speak in.

### A project compiled by the engine that plays the scenario

Implementation · `ProjectCompiledHere`

- Owner: trame
- Parameters: { chosen: engine.ProjectOfTheScenario, say: engine.EngineWords }
- Implements: The project at hand
- Depends on: The project of a scenario, What the engine's adapters say

### The project the engine prepared

Implementation · `ProjectInTheEngine`

- Owner: trame
- Parameters: { say: engine.EngineWords }
- Implements: The project at hand
- Depends on: What the engine's adapters say

### Read by the engine

Implementation · `ReadByTheEngine` · **held**

- Owner: trame
- Parameters: { say: engine.EngineWords }
- Implements: Reading a language
- Depends on: What the engine's adapters say

## Standard library · HTML and CSS

### WAI-ARIA

Standard · `Aria`

- Maintained by: trame
- Source: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2: § 5.3 roles, § 6.7 states and properties
- Address: https://www.w3.org/TR/wai-aria-1.2/
- Constants: { role: { value: role, meaning: What the element is, for assistive technologies }, group: { value: group, meaning: The role of a set of controls that belong together }, label: { value: aria-label, meaning: The name of the element, when no visible text gives it }, labelledBy: { value: aria-labelledby, meaning: The element whose text names this one }, pressed: { value: aria-pressed, meaning: Whether a toggle button is pressed }, hidden: { value: aria-hidden, meaning: The element is decoration: assistive technologies skip it }, link: { value: link, meaning: The role of an element that leads somewhere }, img: { value: img, meaning: The role of a drawing, read as one image with its label }, current: { value: aria-current, meaning: The element that is the current one of a set }, page: { value: page, meaning: The current page of a set of links }, expanded: { value: aria-expanded, meaning: Whether what the element controls is open }, button: { value: button, meaning: The role of an element that acts when activated } }
- Serves: A published value is cited, not copied

### CSS

Standard · `Css`

- Maintained by: trame
- Source: W3C, CSS Syntax Module Level 3 (§ 5 rules and declarations, § 4 tokens)
- Address: https://www.w3.org/TR/css-syntax-3/
- Constants: { openBlock: { value: {, meaning: Opens the declarations of a rule }, closeBlock: { value: }, meaning: Closes them }, colon: { value: :, meaning: Separates a property from its value }, semicolon: { value: ;, meaning: Ends a declaration }, openParenthesis: { value: (, meaning: Opens the arguments of a function, or a condition }, closeParenthesis: { value: ), meaning: Closes them }, space: { value:  , meaning: Whitespace between the parts of a rule }, comma: { value: ,, meaning: Separates the selectors of a list (Selectors Level 4, § 4.1) }, classSelector: { value: ., meaning: Opens a class selector: the elements of that class (Selectors Level 4, § 6.6) }, idSelector: { value: #, meaning: Opens an ID selector: the element of that identifier (Selectors Level 4, § 6.7) }, descendant: { value:  , meaning: The descendant combinator: an element inside another (Selectors Level 4, § 16.1) }, width: { value: width, meaning: The width of a box (CSS Box Sizing Level 3) }, minWidth: { value: min-width, meaning: The width it does not go under }, maxWidth: { value: max-width, meaning: The width it does not go over }, percent: { value: %, meaning: A length as a share of the box that holds it }, whole: { value: 100, meaning: The whole of the box that holds it, as a share }, pixel: { value: px, meaning: A length in CSS pixels } }
- Serves: A published value is cited, not copied

### HTML

Standard · `Html`

- Maintained by: trame
- Source: WHATWG HTML: § 13.1 Writing HTML documents (the DOCTYPE, elements, start and end tags, attributes); § 3.2.6 Global attributes; § 4 The elements of HTML
- Address: https://html.spec.whatwg.org/multipage/syntax.html#writing
- Constants: { lessThan: { value: <, meaning: Opens a tag }, greaterThan: { value: >, meaning: Closes a tag }, space: { value:  , meaning: Separates the name of an element from its attributes, and each attribute from the next (ASCII whitespace) }, id: { value: id, meaning: The identifier of an element: a script finds the element by it, an address targets it }, class: { value: class, meaning: The classes of an element, which style sheets select }, hidden: { value: hidden, meaning: The element is not shown, until a script shows it }, lang: { value: lang, meaning: The language of the content }, div: { value: div, meaning: A block with no meaning of its own, which a class names (§ 4.4.15) }, span: { value: span, meaning: A run of text with no meaning of its own (§ 4.5.26) }, p: { value: p, meaning: A paragraph (§ 4.4.1) }, a: { value: a, meaning: A link, or a place that a script makes one (§ 4.5.1) }, href: { value: href, meaning: The address a link leads to (§ 4.6.2) }, mark: { value: mark, meaning: A run of text marked for the reader's attention (§ 4.5.23) }, code: { value: code, meaning: A fragment of code: an identifier, a path (§ 4.5.15) }, time: { value: time, meaning: A date, with its value for machines (§ 4.5.14) }, datetime: { value: datetime, meaning: The value of a date for machines (§ 4.5.14) }, ul: { value: ul, meaning: A list whose order does not matter (§ 4.4.7) }, li: { value: li, meaning: An item of a list (§ 4.4.8) }, dl: { value: dl, meaning: A list of names and their values (§ 4.4.9) }, dt: { value: dt, meaning: A name, in such a list (§ 4.4.10) }, dd: { value: dd, meaning: Its value (§ 4.4.11) }, table: { value: table, meaning: A table (§ 4.9.1) }, thead: { value: thead, meaning: The rows that head a table (§ 4.9.6) }, tbody: { value: tbody, meaning: The rows of its data (§ 4.9.5) }, tr: { value: tr, meaning: A row (§ 4.9.8) }, th: { value: th, meaning: A cell that heads a column (§ 4.9.10) }, td: { value: td, meaning: A cell of data (§ 4.9.9) }, pre: { value: pre, meaning: Preformatted text: its lines and spaces are kept (§ 4.4.3) }, details: { value: details, meaning: Content the reader opens (§ 4.11.1) }, summary: { value: summary, meaning: What it says when closed (§ 4.11.2) }, section: { value: section, meaning: A section of a document, with its heading (§ 4.3.3) }, article: { value: article, meaning: A part that stands on its own: a node's card (§ 4.3.2) }, figure: { value: figure, meaning: A figure, with its caption (§ 4.4.12) }, figcaption: { value: figcaption, meaning: The caption of a figure (§ 4.4.13) }, button: { value: button, meaning: A button (§ 4.10.6) }, type: { value: type, meaning: What a button does (§ 4.10.6) }, buttonType: { value: button, meaning: A button that only runs the page's script: it submits nothing (§ 4.10.6) }, tabindex: { value: tabindex, meaning: An element that the keyboard can reach (§ 6.6.3) }, focusable: { value: 0, meaning: Reached in the order of the document (§ 6.6.3) }, style: { value: style, meaning: Declarations of CSS for this element alone (§ 3.2.6) }, window: { value: window, meaning: The global object of a page's scripts (§ 7.2 The Window object) }, module: { value: module, meaning: The type of a script that is a module: deferred, it may wait at its top level (§ 4.12.1) }, b: { value: b, meaning: A run of text set apart, without more importance (§ 4.5.21) }, small: { value: small, meaning: A side comment, in smaller print (§ 4.5.4) }, h2: { value: h2, meaning: A heading of the second rank (§ 4.3.6) }, ol: { value: ol, meaning: A list whose order matters (§ 4.4.5) }, select: { value: select, meaning: A list of choices (§ 4.10.7) }, option: { value: option, meaning: A choice of a list (§ 4.10.10) }, optgroup: { value: optgroup, meaning: A group of choices, under its label (§ 4.10.9) }, form: { value: form, meaning: A form: fields a person fills in, and what sends them }, textarea: { value: textarea, meaning: A field of several lines of text }, textType: { value: text, meaning: The type of an input that takes a line of text }, numberType: { value: number, meaning: The type of an input that takes a number }, dateType: { value: date, meaning: The type of an input that takes a calendar date }, name: { value: name, meaning: The name a field of a form is read by }, input: { value: input, meaning: A field (§ 4.10.5) }, datalist: { value: datalist, meaning: The choices a field suggests (§ 4.10.8) }, label: { value: label, meaning: The label of a group of choices (§ 4.10.9) }, value: { value: value, meaning: The value of a choice (§ 4.10.10) }, selected: { value: selected, meaning: The choice that is chosen (§ 4.10.10) }, disabled: { value: disabled, meaning: A control the person cannot use (§ 4.10.18.5) }, title: { value: title, meaning: Advisory information on an element, shown as a tip (§ 3.2.6.1) }, list: { value: list, meaning: The identifier of the choices a field suggests (§ 4.10.5.3.9) }, placeholder: { value: placeholder, meaning: A hint shown in an empty field (§ 4.10.5.3.10) }, search: { value: search, meaning: The type of a field where the person searches (§ 4.10.5.1.3) }, h1: { value: h1, meaning: The heading of the first rank: the page's own (§ 4.3.6) }, h3: { value: h3, meaning: A heading of the third rank (§ 4.3.6) }, header: { value: header, meaning: What introduces a page or a section (§ 4.3.8) }, main: { value: main, meaning: The main content of the page (§ 4.4.14) }, footer: { value: footer, meaning: What closes a page or a section (§ 4.3.9) }, nav: { value: nav, meaning: A set of links or controls to move in the page (§ 4.3.4) } }
- Serves: A published value is cited, not copied

### SVG

Standard · `Svg`

- Maintained by: trame
- Source: W3C, Scalable Vector Graphics (SVG) 2: § 1.3 the SVG namespace, § 5 document structure (svg, g), § 9 basic shapes (rect), § 9.3 paths, § 13 painting
- Address: https://www.w3.org/TR/SVG2/
- Constants: { svg: { value: svg, meaning: A drawing, inline in the page (§ 5.1.2) }, group: { value: g, meaning: A group of shapes that share their painting (§ 5.2.1) }, rect: { value: rect, meaning: A rectangle (§ 10.2) }, path: { value: path, meaning: A path (§ 9.3) }, width: { value: width, meaning: The width of the drawing or of a rectangle }, height: { value: height, meaning: Its height }, viewBox: { value: viewBox, meaning: The coordinates the drawing is made in: x, y, width, height (§ 8.2) }, x: { value: x, meaning: The left of a rectangle }, y: { value: y, meaning: Its top }, rx: { value: rx, meaning: The radius of a rectangle's corners }, d: { value: d, meaning: The data of a path: its commands }, fill: { value: fill, meaning: What paints the inside of a shape (§ 13.2) }, stroke: { value: stroke, meaning: What paints its outline (§ 13.3) }, strokeWidth: { value: stroke-width, meaning: The width of the outline }, strokeLinecap: { value: stroke-linecap, meaning: The shape of the ends of an open line }, round: { value: round, meaning: Round ends }, none: { value: none, meaning: Paints nothing }, separator: { value:  , meaning: Separates the numbers of a list (§ 4.3: whitespace) }, text: { value: text, meaning: A line of text (§ 11.2) }, line: { value: line, meaning: A segment (§ 10.5) }, circle: { value: circle, meaning: A circle (§ 10.3) }, title: { value: title, meaning: What a shape is, said to whoever points at it (§ 5.9) }, defs: { value: defs, meaning: Definitions that other shapes refer to (§ 5.3) }, marker: { value: marker, meaning: A shape drawn at the end of a path: an arrowhead (§ 13.7) }, cx: { value: cx, meaning: The centre of a circle, across }, cy: { value: cy, meaning: Down }, r: { value: r, meaning: Its radius }, x1: { value: x1, meaning: The start of a segment, across }, y1: { value: y1, meaning: Down }, x2: { value: x2, meaning: Its end, across }, y2: { value: y2, meaning: Down }, transform: { value: transform, meaning: Moves a group (§ 8.5) }, translate: { value: translate, meaning: The move of a group: across, then down }, textAnchor: { value: text-anchor, meaning: Which point of a text its position gives (§ 11.10) }, middle: { value: middle, meaning: The middle of the text }, markerEnd: { value: marker-end, meaning: The marker drawn at the end of a path }, refX: { value: refX, meaning: The point of a marker placed on the end of the path, across }, refY: { value: refY, meaning: Down }, markerWidth: { value: markerWidth, meaning: The width a marker is drawn at }, markerHeight: { value: markerHeight, meaning: Its height }, orient: { value: orient, meaning: How a marker turns with the path }, autoStartReverse: { value: auto-start-reverse, meaning: Along the path, and the other way at its start }, strokeDasharray: { value: stroke-dasharray, meaning: The dashes of an outline }, opacity: { value: opacity, meaning: How opaque a shape is }, reference: { value: url(#, meaning: Opens a reference to an element of the page by its identifier (a marker) }, referenceEnd: { value: ), meaning: Closes it }, openArguments: { value: (, meaning: Opens the numbers of a transform }, closeArguments: { value: ), meaning: Closes them }, comma: { value: ,, meaning: Separates two numbers of a pair }, namespace: { value: http://www.w3.org/2000/svg, meaning: The namespace of SVG's elements: a script creates them in it (§ 1.3) } }
- Serves: A published value is cited, not copied

## Standard library · Judgment

### Raising

Algebraic structure · `Raising` · **held**

- Owner: trame
- Laws: { says: Each way raises a problem or leaves it, never lowers it, holds: (rule) }, { says: As the language says changes nothing, holds: (rule) }, { says: Every warning becomes an error; an error and a blocking problem stay as they are, holds: (rule) }, { says: Raising codes makes the warnings of those codes errors, and leaves the others, holds: (rule) }, { says: The harder of two severities is one of them, at least as serious as both, holds: (rule) }
- Serves: Shared operations instead of literals

### A project judges harder than the language, never softer

Architecture decision · `HarderNeverSofter` · **held**

- Decided by: trame
- Context: The language judges every project alike; a project that wants no missing owner, or no warning at all, has no way to say so, and a way to lower a problem would let it hide what the language guarantees.
- Consequences: A project chooses a realization of Hardening by a binding where its build evaluates: AsTheLanguageSays, EveryWarning, or one of its own built on Raising (the codes it lists in a decision of its own); the engine keeps the harder of the two severities, and a way that would lower one is an error of the project (hardening-lowers).
- Rejected: A decision the engine reads, one way only, the codes listed; a project that wants every warning raised, or to raise by kind, would wait for the engine; A rule of std, Raised, a broken rule is one error for all, not each problem raised where it is, with its owner
- Serves: Ports of the platform, realized once
- Applied by: Raising, Hardening, As the language says, Every warning an error

### Hardening

Port · `Hardening`

- Owner: trame
- Declared effects: 

### As the language says

Function · `AsTheLanguageSays` · **held**

- Owner: trame
- Parameters: { raising: judgment.Raising }
- Serves: Ports of the platform, realized once
- Implements: Hardening
- Depends on: Raising

### Every warning an error

Function · `EveryWarning` · **held**

- Owner: trame
- Parameters: { raising: judgment.Raising }
- Serves: Ports of the platform, realized once
- Implements: Hardening
- Depends on: Raising

## Standard library · Languages

### tree-sitter queries

Standard · `TreeSitterQueries`

- Maintained by: trame
- Source: tree-sitter, Query Syntax: Predicates and Directives; the predicates evaluated by web-tree-sitter 0.27 (Query.matches, Query.captures)
- Address: https://tree-sitter.github.io/tree-sitter/using-parsers/queries/3-predicates-and-directives.html
- Named in code blocks: scheme
- Constants: { eq: { value: #eq?, meaning: The capture's text equals a string, or another capture's text }, notEq: { value: #not-eq?, meaning: The capture's text differs from a string, or from another capture's text }, anyEq: { value: #any-eq?, meaning: One of the quantified capture's nodes equals the string }, anyNotEq: { value: #any-not-eq?, meaning: One of the quantified capture's nodes differs from the string }, match: { value: #match?, meaning: The capture's text matches a regular expression }, notMatch: { value: #not-match?, meaning: The capture's text does not match a regular expression }, anyMatch: { value: #any-match?, meaning: One of the quantified capture's nodes matches the regular expression }, anyNotMatch: { value: #any-not-match?, meaning: One of the quantified capture's nodes does not match the regular expression }, anyOf: { value: #any-of?, meaning: The capture's text is one of the strings that follow }, notAnyOf: { value: #not-any-of?, meaning: The capture's text is none of the strings that follow }, is: { value: #is?, meaning: Asserts a property of the match (kept aside for the reader) }, isNot: { value: #is-not?, meaning: Refutes a property of the match (kept aside for the reader) }, set: { value: #set!, meaning: Sets a property on the match: a directive, not a filter } }

### CSS style sheets

Language · `CssStyleSheets` · **held**

- Owner: trame
- Named in bodies: css
- Grammar: { module: tree-sitter-css/tree-sitter-css.wasm }
- Extensions: .css
- Queries: { values: { value: 
(integer_value) @literal.number
(float_value) @literal.number
(color_value) @literal.text
(string_value) @literal.text
((plain_value) @literal.text (#match? @literal.text "[0-9]") (#not-match? @literal.text "^--")), meaning: The values written in a style sheet: a number with its unit, a colour, a text; a plain value that holds a digit, which is the rest of a number the grammar cut (12.5px/1.4 reads 12.5, then px/1.4), a variable aside }, parts: { value: 
(color_value) @literal.part
((plain_value) @literal.part (#match? @literal.part "[0-9]") (#not-match? @literal.part "^--"))
(string_value (string_content) @literal.part)
(string_value (escape_sequence) @literal.escape), meaning: What a text is made of: a colour, a plain value as written, the content of a quoted text and its escape sequences }, names: { value: 
(attribute_selector (string_value) @name), meaning: What is written like a value but names something: the value an attribute selector matches }, declarations: { value: 
((call_expression (function_name) @_function (arguments . (plain_value) @parameter)) (#eq? @_function "var"))
((declaration (property_name) @output) (#match? @output "^--")), meaning: What a sheet receives and gives: each variable it uses (var(--x)), each variable it declares (--x: …) }, globals: { value: 
((call_expression (function_name) @global) (#eq? @global "url"))
(import_statement "@import" @global), meaning: What reaches outside the sheet: a resource loaded by its address, another sheet imported }, roles: { value: 
(declaration (_) @role.property)
(call_expression (function_name) @callee (arguments (_) @role.argument))
(call_expression (arguments (binary_expression (_) @role.arithmetic)))
(feature_query (_) @role.condition), meaning: The places that give a literal its role (the engine's roles of a literal): the value of a property, an argument of a function, an operand of a calculation, a condition of a media query } }
- Escape sequences: { mark: \, single: {  }, numeric: { prefix: , radix: 16, most: 6, trailing: 
,  , 	, 
, ,  } }
- Examples: { code: .a { margin: 0 -2px; color: #fff; }, literals: 0, -2px, #fff, values: 0, -2px, #fff, roles: property value, property value, property value }, { code: .b[aria-pressed="true"] { top: calc(env(x, 0px) + 20px); }, literals: 0px, 20px, roles: argument of env, arithmetic }, { code: .c { font: 12.5px/1.4 var(--font, "A \"B\" \2014 C"); width: var(--w); }, literals: 12.5, px/1.4, "A \"B\" \2014 C", values: 12.5, px/1.4, A "B" —C }, { code: @import url(theme.css);
@media (max-width: 920px) { .d { flex: none; } }
, literals: 920px, roles: condition, globals: @import, url }, { code: .e { --gap: var(--space-md); margin: var(--gap) var(--edge, var(--gap)); }, literals: , parameters: --space-md, --gap, --edge, --gap, outputs: --gap }
- Defined by: CSS
- Queries written in: tree-sitter queries
- Read by: Reading a language

### HTML markup

Language · `HtmlMarkup` · **held**

- Owner: trame
- Named in bodies: html
- Grammar: { module: tree-sitter-html/tree-sitter-html.wasm }
- Extensions: .html
- Queries: { values: { value: 
(quoted_attribute_value) @literal.text
(attribute (attribute_value) @literal.text)
(text) @literal.text
(entity) @literal.text, meaning: The values written in markup: the value of an attribute, quoted or not; a text; a character reference on its own, between two texts }, parts: { value: 
(attribute_value) @literal.part
(text) @literal.part
(entity) @literal.escape, meaning: What a value is made of: an attribute's value as written (its character references included: the grammar does not catch them apart there), a text, a character reference }, names: { value: 
((attribute (attribute_name) @_name) @name (#any-of? @_name "class" "id" "for" "aria-labelledby" "aria-describedby" "aria-controls")), meaning: What is written like a value but names something: a class, an identifier, an attribute that refers to an identifier }, roles: { value: 
(attribute (quoted_attribute_value) @role.attribute)
(attribute (attribute_value) @role.attribute)
(element (text) @role.content)
(element (entity) @role.content), meaning: The places that give a literal its role (the engine's roles of a literal): the value of an attribute, the content of an element } }
- Escape sequences: { mark: &, single: { amp;: &, lt;: <, gt;: >, quot;: ", apos;: ', nbsp;:   }, numeric: { prefix: #x, radix: 16, close: ; }, { prefix: #X, radix: 16, close: ; }, { prefix: #, radix: 10, close: ; }, keepUnknown: true }
- Examples: { code: <a id="Goal" href="#Goal">Goal</a>, literals: "#Goal", Goal, values: #Goal, Goal, roles: attribute value, content of an element }, { code: <p title="a &amp; b &eacute;">T &lt; U &#x2192; V</p>, literals: "a &amp; b &eacute;", T, &lt;, U, &#x2192;, V, values: a & b &eacute;, T, <, U, →, V }, { code: <button class="chip" aria-pressed="true" hidden>x</button>, literals: "true", x, roles: attribute value, content of an element }, { code: <!DOCTYPE html>
<style>.a { margin: 0 }</style>
<script>const x = 1</script>
, literals:  }
- Defined by: HTML
- Queries written in: tree-sitter queries
- Read by: Reading a language

## Standard library · Measures

### ISO 8601 dates

Standard · `Iso8601`

- Maintained by: trame
- Source: ISO 8601-1:2019, calendar dates in the extended format (§ 5.2.2), in the Gregorian calendar
- Address: https://www.iso.org/standard/70907.html
- Constants: { dateLength: { value: 10, meaning: YYYY-MM-DD: the characters of a calendar date in the extended format }, yearLength: { value: 4, meaning: YYYY: the characters of the year, which open a calendar date }, calendarDate: { value: ^\d{4}-\d{2}-\d{2}$, meaning: The pattern of a calendar date in the extended format: four digits, two, two, joined by hyphens }, firstMonth: { value: 1, meaning: January }, lastMonth: { value: 12, meaning: December }, firstDay: { value: 1, meaning: The first day of a month }, shortestMonth: { value: 28, meaning: The days that every month has (February, in a common year) }, timeDesignator: { value: T, meaning: Between the date and the time of day, in a date and time (§ 5.4.1) } }
- Serves: A published value is cited, not copied

### Language tags

Standard · `LanguageTags`

- Maintained by: trame
- Source: IETF BCP 47 (RFC 5646), Tags for Identifying Languages, § 2.1; Java SE, Locale.toString (the form Android reports)
- Address: https://www.rfc-editor.org/rfc/rfc5646
- Constants: { separator: { value: -, meaning: Between the subtags of a language tag }, localeSeparator: { value: _, meaning: Between the language and the region of a locale, as Java and Android write it } }
- Serves: A published value is cited, not copied

### Semantic versioning

Standard · `SemanticVersioning`

- Maintained by: trame
- Source: Semantic Versioning 2.0.0, §§ 2, 4, 8
- Address: https://semver.org/spec/v2.0.0.html
- Constants: { separator: { value: ., meaning: Separates the major, the minor and the patch }, initial: { value: 0, meaning: The major of a package in its initial development: its minor then breaks what uses it } }
- Serves: A published value is cited, not copied

### Units of measure

Standard · `UnitsOfMeasure`

- Maintained by: trame
- Source: BIPM, The International System of Units (SI Brochure, 9th edition), Table 8 and § 5.4.7
- Address: https://www.bipm.org/en/publications/si-brochure
- Constants: { minute: { value: 60, meaning: The seconds of a minute }, hour: { value: 3600, meaning: The seconds of an hour }, percent: { value: 100, meaning: The hundredths of a whole: a ratio times 100 is a percentage } }
- Serves: A published value is cited, not copied

### The language the symbols of units are written in: the same in most languages, as the SI writes them.

Decision · `SymbolsLanguage`

- Decided by: trame
- Value: { tag: en-GB }

### Symbols of units

Message catalog · `UnitSymbols`

- Owner: trame
- Written in: The language the symbols of units are written in: the same in most languages, as the SI writes them.

### Ratio

Quantity · `Ratio`

- Owner: trame
- Source: BIPM, The International System of Units (SI Brochure, 9th edition), § 5.4.7
- Address: https://www.bipm.org/en/publications/si-brochure
- Units: { percent: 0.01 }
- A ratio: true
- Written with: Symbols of units
- Serves: A published value is cited, not copied

### Time

Quantity · `Time`

- Owner: trame
- Source: BIPM, The International System of Units (SI Brochure, 9th edition), Tables 2, 7 and 8
- Address: https://www.bipm.org/en/publications/si-brochure
- Units: { millisecond: 0, second: 1, minute: 60, hour: 3600 }
- Written with: Symbols of units
- Serves: A published value is cited, not copied

## Standard library · Obligations

### The decisions a shipment applies hold

Requirement · `Applied` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The artefacts a shipment ships are checked

Requirement · `Checked` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Constants: { every: { value: all, meaning: The word of CheckWays that takes every check of the artefacts, those made by hand too } }
- Refines: Rules applied, not written again
- Depends on: Counts

### Who calls a shipment's programs is identified

Requirement · `Identified` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The artefacts a shipment ships were shipped first by those that precede it

Requirement · `Preceded` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### What people decided is published

Requirement · `Published` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The data a shipment carries is reviewed

Requirement · `Reviewed` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### The project's rules hold

Requirement · `Ruled` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The packages a shipment uses are safe

Requirement · `Safe` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The product a shipment serves holds

Requirement · `Served` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### The code a shipment ships is verified

Requirement · `Verified` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### Ways of checking

Vocabulary · `CheckWays`

- Owner: trame
- Words: { programs: The checks a program of the SDLC runs: what a machine proves alone, all: Every check of the artefacts, those made by hand and signed by a role too }
- Serves: Rules applied, not written again

### Criteria of the decisions applied

Acceptance criteria · `AppliedCriteria` · **held**

- Owner: trame
- Accepts: The decisions a shipment applies hold

### Criteria of the artefacts checked

Acceptance criteria · `CheckedCriteria` · **held**

- Owner: trame
- Accepts: The artefacts a shipment ships are checked

### Criteria of who calls

Acceptance criteria · `IdentifiedCriteria` · **held**

- Owner: trame
- Accepts: Who calls a shipment's programs is identified

### Criteria of the stages

Acceptance criteria · `PrecededCriteria` · **held**

- Owner: trame
- Accepts: The artefacts a shipment ships were shipped first by those that precede it

### Criteria of what is published

Acceptance criteria · `PublishedCriteria` · **held**

- Owner: trame
- Accepts: What people decided is published

### Criteria of the data reviewed

Acceptance criteria · `ReviewedCriteria` · **held**

- Owner: trame
- Accepts: The data a shipment carries is reviewed

### Criteria of the rules held

Acceptance criteria · `RuledCriteria` · **held**

- Owner: trame
- Accepts: The project's rules hold

### Criteria of the packages safe

Acceptance criteria · `SafeCriteria` · **held**

- Owner: trame
- Accepts: The packages a shipment uses are safe

### Criteria of the product served

Acceptance criteria · `ServedCriteria` · **held**

- Owner: trame
- Accepts: The product a shipment serves holds

### Criteria of the code verified

Acceptance criteria · `VerifiedCriteria` · **held**

- Owner: trame
- Accepts: The code a shipment ships is verified

## Standard library · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.8.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../ci/releases/0.8.0
- Serves: Versions that hold

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 137
- How it joins the graph: language
- Where it comes from: path
- Its path: ../generations/g137
- Serves: Ports of the platform, realized once

### The people of the repository

Package · `People`

- Owner: trame
- Name: team
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../libs/team/releases/0.1.0
- Serves: Versions that hold

## Standard library · Design patterns

### Abstract Factory

Design pattern · `AbstractFactory`

- Maintained by: trame
- Source: Gamma et al., Design Patterns (1994), Abstract Factory
- Requires of a choice: { family: true }
- Serves: Known designs, named

### Adapter

Design pattern · `Adapter` · **held**

- Maintained by: trame
- Source: A. Cockburn, Hexagonal architecture (ports and adapters), 2005; Gamma et al., Design Patterns (1994), Adapter
- Address: https://alistair.cockburn.us/hexagonal-architecture/
- Requires of a choice: { platform: true }
- Serves: Known designs, named

### Bridge

Design pattern · `Bridge`

- Maintained by: trame
- Source: Gamma et al., Design Patterns (1994), Bridge
- Requires of a choice: { layered: true }
- Serves: Known designs, named

### Command

Design pattern · `Command`

- Maintained by: trame
- Source: Gamma et al., Design Patterns (1994), Command
- Requires of a choice: { commands: true }
- Serves: Known designs, named

### Plugin

Design pattern · `Plugin` · **held**

- Maintained by: trame
- Source: M. Fowler, Patterns of Enterprise Application Architecture (2002), Plugin (D. Rice, M. Foemmel)
- Address: https://martinfowler.com/eaaCatalog/plugin.html
- Requires of a choice: { extends: true }
- Serves: Known designs, named

### Repository

Design pattern · `Repository`

- Maintained by: trame
- Source: M. Fowler, Patterns of Enterprise Application Architecture (2002), Repository (E. Hieatt, R. Mee)
- Address: https://martinfowler.com/eaaCatalog/repository.html
- Requires of a choice: { pure: true, layered: true }
- Serves: Known designs, named

### Strategy

Design pattern · `Strategy` · **held**

- Maintained by: trame
- Source: E. Gamma, R. Helm, R. Johnson, J. Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software (1994), Strategy
- Requires of a choice: { pure: true }
- Serves: Known designs, named

## Standard library · Platform

### The device's services, as ports

Architecture decision · `DeviceAsPorts` · **held**

- Decided by: trame
- Context: An app that runs in a browser, then on phones, reaches the same services through different platforms; and a scenario must run without any of them.
- Consequences: Each service is a port with its effects; the browser's realizations are written here once, the phones' will be too; a product binds them by environment. A browser that refuses a service (no storage, no voice, no wake lock) leaves the product working without it.
- Rejected: Each product calling the browser itself, every product would write the same guards, and none could run in a scenario
- Serves: Ports of the platform, realized once
- Applied by: Preferences, The browser keeps the preferences, Preferences kept in memory, Languages of the device, The browser's languages, Speech, The browser's voice, A voice that writes down, What was said, Screen kept awake, The browser keeps the screen awake, The screen kept awake, in memory, Whether the screen is kept awake, Animation frames, The browser's frames, Frames turned by hand, Time turned by hand

### A component in a browser starts with its page

Architecture decision · `StartsWithThePage`

- Decided by: trame
- Context: A page and the program it carries are opened together; the program must not reach for elements the browser has not parsed yet, and two products would write the same wait.
- Consequences: The exposure of a browser's component is the port PageLoading; BrowserLoading runs the entry points triggered by the loading once the document is parsed (DOMContentLoaded, or at once when it already is).
- Rejected: A script placed at the end of the body, the order of a document would decide when the program starts, and nothing would say it
- Serves: Ports of the platform, realized once
- Applied by: Loading of a page, The browser loads the page

### Animation frames

Port · `AnimationFrames`

- Owner: trame
- Declared effects: time, display

### Languages of the device

Port · `DeviceLanguages`

- Owner: trame
- Declared effects: read

### Loading of a page

Port · `PageLoading`

- Owner: trame
- Declared effects: display

### Preferences

Port · `PreferencesStore`

- Owner: trame
- Declared effects: { get: read, set: write }

### Screen kept awake

Port · `ScreenAwake`

- Owner: trame
- Declared effects: display, asynchronous

### Whether the screen is kept awake

Port · `ScreenKeptAwake`

- Owner: trame
- Declared effects: 

### What was said

Port · `SpeechHeard`

- Owner: trame
- Declared effects: 

### Speech

Port · `SpeechVoice`

- Owner: trame
- Declared effects: display

### Time turned by hand

Port · `TimeTurned`

- Owner: trame
- Declared effects: 

### The screen kept awake, in memory

Function · `AwakeInMemory` · **held**

- Owner: trame
- Implements: Screen kept awake, Whether the screen is kept awake

### Frames turned by hand

Function · `FramesByHand` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Implements: Animation frames, Time turned by hand
- Depends on: Counts

### Preferences kept in memory

Function · `MemoryPreferences` · **held**

- Owner: trame
- Implements: Preferences

### A voice that writes down

Function · `WrittenSpeech` · **held**

- Owner: trame
- Implements: Speech, What was said

### The browser's frames

Implementation · `BrowserFrames`

- Owner: trame
- Parameters: { time: measures.Time }
- Implements: Animation frames
- Depends on: Time

### The browser's languages

Implementation · `BrowserLanguages`

- Owner: trame
- Implements: Languages of the device

### The browser loads the page

Implementation · `BrowserLoading`

- Owner: trame
- Parameters: { events: web.UiEvents }
- Implements: Loading of a page
- Depends on: UI events

### The browser keeps the preferences

Implementation · `BrowserPreferences`

- Owner: trame
- Implements: Preferences

### The browser's voice

Implementation · `BrowserSpeech`

- Owner: trame
- Parameters: { tags: measures.LanguageTags, speech: web.WebSpeechApi }
- Implements: Speech
- Depends on: Language tags, Web Speech API

### The browser keeps the screen awake

Implementation · `BrowserWakeLock`

- Owner: trame
- Parameters: { wake: web.ScreenWakeLockApi }
- Implements: Screen kept awake
- Depends on: Screen Wake Lock API

## Standard library · Product

### Commands chosen, not written again

Goal · `ChosenCommands`

- Owner: trame

### A published value is cited, not copied

Goal · `CitedNotCopied`

- Owner: trame

### Known designs, named

Goal · `KnownDesigns`

- Owner: trame

### Ports of the platform, realized once

Goal · `RealizedOnce`

- Owner: trame

### Shared operations instead of literals

Goal · `SharedOperations`

- Owner: trame

### Rules applied, not written again

Goal · `SharedRules`

- Owner: trame

### Versions that hold

Goal · `VersionsThatHold`

- Owner: trame

## Standard library · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-10-26
- What changes: First version of the standard library: the structures bodies share (counts, sequences, texts, value types), the published standards (web, ECMAScript, text, algorithms, measures, system), the design patterns, and the loading of a page with its browser realization
- Fingerprint: c8a0e8c2e66af0aa
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.10.0

Release · `R0_10_0`

- Released by: trame
- Version: 0.10.0
- Released on: 2026-10-28
- What changes: Obligations: the families of what a shipment must prove, derived from what it reaches (Verified, Served, Applied, Reviewed, Checked and the vocabulary CheckWays, Ruled, Safe), each with acceptance criteria
- Fingerprint: ee326c1d4ec718a5
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.11.0

Release · `R0_11_0`

- Released by: trame
- Version: 0.11.0
- Released on: 2026-10-29
- What changes: Scenarios of its own: an environment Test where it plays what it offers, its realizations kept in memory chosen there, and three scenarios (the seeded draws, the device in memory, the tooling in memory); a check whose program verifies reached code is an obligation of Verified and closes its gap; a page chooses an option of a list (BrowserPage.choose, Playwright's selectOption, recorded in memory); the CSS id selector, the hunk and range separator of unified differences, fs.watch's change event
- Fingerprint: 1b784454ac5ba502
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.11.1

Release · `R0_11_1`

- Released by: trame
- Version: 0.11.1
- Released on: 2026-10-29
- What changes: Verified obliges only what a machine runs: the scenarios and the checks a program runs; a check made by hand is the family Checked's business, and leaves the gap of what it alone verifies
- Fingerprint: e2b6550a84f52c8b
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.12.0

Release · `R0_12_0`

- Released by: trame
- Version: 0.12.0
- Released on: 2026-11-01
- What changes: The language named by its names (#trame/kernel, #trame/kinds/*), the rules written as bodies (g79), the quantities Time and Ratio (g80), what the platform may do and typed commands (module effects, g83–g84), where a package comes from (PackageSources, g87)
- Fingerprint: 644a5f0395a97522
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.13.0

Release · `R0_13_0`

- Released by: trame
- Version: 0.13.0
- Released on: 2026-11-01
- What changes: Where a package comes from publishes too, and names its origins (PackageOrigins: by its path, from a registry); node:module's registerHooks in the table of the platform
- Fingerprint: a2c76173f7693d92
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.14.0

Release · `R0_14_0`

- Released by: trame
- Version: 0.14.0
- Released on: 2026-11-03
- What changes: Time counts milliseconds too, and the bodies that met JavaScript's clocks receive Time instead of the prelude's ms and elapsed
- Fingerprint: 46999c272f5c420d
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.15.0

Release · `R0_15_0`

- Released by: trame
- Version: 0.15.0
- Released on: 2026-11-03
- What changes: A package's source says which versions it holds; npm's words to install what a project names
- Fingerprint: 911af2d98a5ddddd
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.16.0

Release · `R0_16_0`

- Released by: trame
- Version: 0.16.0
- Released on: 2026-11-04
- What changes: The library ships its versions through its own graph: NextVersion, under VersionMode; the command maker verified by a scenario
- Fingerprint: a6bf5318db876e16
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.17.0

Release · `R0_17_0`

- Released by: trame
- Version: 0.17.0
- Released on: 2026-11-08
- What changes: The family Preceded: a shipment waits for those that precede it to ship first the same artefacts, the same file (C2)
- Fingerprint: ad52abcce7119bba
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.18.0

Release · `R0_18_0`

- Released by: trame
- Version: 0.18.0
- Released on: 2026-11-18
- What changes: access: the audiences Anyone, TheSystem and TheOperators; the family Identified
- Fingerprint: 7e9e89a93567af15
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.18.1

Release · `R0_18_1`

- Released by: trame
- Version: 0.18.1
- Released on: 2026-11-18
- What changes: Playwright 1.63.0, whose Chromium the machine has
- Fingerprint: 7c6f86977099fcef
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.19.0

Release · `R0_19_0`

- Released by: trame
- Version: 0.19.0
- Released on: 2026-11-18
- What changes: Published: what people decided is published before a shipment takes it (D1); a version proves its data reviewed
- Fingerprint: 7e2307f67b6a5327
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.2.0

Release · `R0_2_0`

- Released by: trame
- Version: 0.2.0
- Released on: 2026-10-26
- What changes: The device's services as ports: preferences, the device's languages, a voice, the screen kept awake, with the browser's realizations and, for scenarios, realizations kept in memory; the Screen Wake Lock API
- Fingerprint: 29b96f4135a8d58c
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.20.0

Release · `R0_20_0`

- Released by: trame
- Version: 0.20.0
- Released on: 2026-11-19
- What changes: A repository on GitHub as a project's graph decides it: its settings (the branch, the checks, up to date, the approvals, the merge method, the automatic merge, merged branches deleted, the pages), the port RepositoryApi that applies and reads them back, realized by GitHub's command line and in memory; RepositoryCompared says the parts a repository does not hold; GitHub's REST API cited; moved from ci, where a writer of a script set them
- Fingerprint: f10b88a0025a0d32
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.21.0

Release · `R0_21_0`

- Released by: trame
- Version: 0.21.0
- Released on: 2026-11-20
- What changes: How a project judges harder than the language, never softer (C4): the port Hardening, the structure Raising and its laws, the strategies AsTheLanguageSays and EveryWarning chosen by a binding where a project's build evaluates
- Fingerprint: 11af7c0453654031
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.22.0

Release · `R0_22_0`

- Released by: trame
- Version: 0.22.0
- Released on: 2026-11-22
- What changes: Commands a project chooses (E3): the component LibraryCommands with pull-request and propagate, their settings ports; the ports Branches, PullRequests, AutoMerge and ProgramRuns, realized on a machine, in a session of Claude Code and in memory; the pattern Command; POSIX's slash
- Fingerprint: 73116234162e1cca
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.22.1

Release · `R0_22_1`

- Released by: trame
- Version: 0.22.1
- Released on: 2026-11-22
- What changes: propagate: two projects that import each other, the one that waits for the fewest first, the first decided among them
- Fingerprint: 5021d2d8af163b91
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.22.2

Release · `R0_22_2`

- Released by: trame
- Version: 0.22.2
- Released on: 2026-11-22
- What changes: propagate runs the launcher by its path from the repository's root
- Fingerprint: d3c890b34b2183ab
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.22.3

Release · `R0_22_3`

- Released by: trame
- Version: 0.22.3
- Released on: 2026-11-22
- What changes: propagate writes a project's files that run elsewhere again when any file that records its references moved (the settings name them)
- Fingerprint: 60be38b8e207181c
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.23.0

Release · `R0_23_0`

- Released by: trame
- Version: 0.23.0
- Released on: 2026-11-22
- What changes: trame merge: a pull request merged once its checks passed, by the method decided, saying whose decisions it changes, the base checked out after; pull requests read, their checks, their files page by page; a branch brought up to date
- Fingerprint: 2c958c6df068995e
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.24.0

Release · `R0_24_0`

- Released by: trame
- Version: 0.24.0
- Released on: 2026-11-24
- What changes: Commands run in the engine: CommandsInTheEngine offers a program's commands to the engine that imports it (E3, part 3)
- Fingerprint: f9e692913a6f8704
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.25.0

Release · `R0_25_0`

- Released by: trame
- Version: 0.25.0
- Released on: 2026-11-25
- What changes: Extension points: trame doctor's MachineNeeds (Playwright's browser installed) and trame init's ProjectRepairs; the pattern Plugin (E3, part 3)
- Fingerprint: 5e7440b5d55f71e9
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.26.0

Release · `R0_26_0`

- Released by: trame
- Version: 0.26.0
- Released on: 2026-11-25
- What changes: What the machine is asked: Node's versions described among the platform's effects, Git's version option (for libs/machine)
- Fingerprint: d45c7747ee5e5151
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.27.0

Release · `R0_27_0`

- Released by: trame
- Version: 0.27.0
- Released on: 2026-11-25
- What changes: The family Verified counts a check a command the engine keeps runs (g122)
- Fingerprint: 8feb27eab07a9b7d
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.28.0

Release · `R0_28_0`

- Released by: trame
- Version: 0.28.0
- Released on: 2026-11-26
- What changes: the engine as a provider: the port TheProject, realized in the engine and, in a scenario, by the engine that plays it
- Fingerprint: 6ec9817f19e1eb38
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.29.0

Release · `R0_29_0`

- Released by: trame
- Version: 0.29.0
- Released on: 2026-11-26
- What changes: the languages the engine reads for every project (HTML, CSS), read through the port LanguageReading, which the engine realizes
- Fingerprint: 2229329d5c9f983b
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.29.1

Release · `R0_29_1`

- Released by: trame
- Version: 0.29.1
- Released on: 2026-11-27
- What changes: the decision behind the library's choices; the grammars' versions named once, by the engine's packages
- Fingerprint: 1e0910d6f1dc66af
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.3.0

Release · `R0_3_0`

- Released by: trame
- Version: 0.3.0
- Released on: 2026-10-26
- What changes: HTML and CSS: the HTML, WAI-ARIA, SVG and CSS standards move here from Trame, with the elements a page is made of (headings, header, main, footer, nav)
- Fingerprint: f69c88114c3c885d
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.30.0

Release · `R0_30_0`

- Released by: trame
- Version: 0.30.0
- Released on: 2026-11-27
- What changes: Trame's reference syntax, which the engine gives and renderers read, in the module engine
- Fingerprint: a85cd39da95a106b
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.31.0

Release · `R0_31_0`

- Released by: trame
- Version: 0.31.0
- Released on: 2026-11-28
- What changes: A command's line read by what it declares, std's options apart: the format its documents are written in, an extension point (AnswerFormats) with JSON; the JSON formatting and the media types of Markdown and plain text
- Fingerprint: 9bd1ced9100e8814
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.32.0

Release · `R0_32_0`

- Released by: trame
- Version: 0.32.0
- Released on: 2026-11-28
- What changes: A text read back by the engine (LanguageReading's readText); the page's program, bundled by the engine (TheProject's page); what a command that keeps running asks of the machine (module running: the clock, timers, a server of HTTP, lines printed as it goes, with Node.js's realizations and, for scenarios, a clock stopped, a server asked in memory, the lines kept)
- Fingerprint: 5ee4f3123d0cc584
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.33.0

Release · `R0_33_0`

- Released by: trame
- Version: 0.33.0
- Released on: 2026-11-28
- What changes: The name a person types to run the engine, which the project at hand gives (TheProject's program): what a page's brand writes
- Fingerprint: 0b4e2cab36274fac
- Language: shared
- Serves: Commands chosen, not written again, A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again, Versions that hold

### Version 0.4.0

Release · `R0_4_0`

- Released by: trame
- Version: 0.4.0
- Released on: 2026-10-26
- What changes: The frames of the screen as a port (AnimationFrames, with the browser's and, for scenarios, frames turned by hand), what a voice said and whether the screen is kept awake for scenarios, the SVG namespace and the pointer-down event
- Fingerprint: 9bc7811c6e6acfe9
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.5.0

Release · `R0_5_0`

- Released by: trame
- Version: 0.5.0
- Released on: 2026-10-26
- What changes: Seeded draws: a number, an integer between bounds, an element by its weight, the same from the same seed
- Fingerprint: c0645b631e7479b5
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.6.0

Release · `R0_6_0`

- Released by: trame
- Version: 0.6.0
- Released on: 2026-10-26
- What changes: The voice says whether the device can speak, and picks a voice of the language asked (Chrome on Android); language tags
- Fingerprint: 040d790c0122ef2a
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.7.0

Release · `R0_7_0`

- Released by: trame
- Version: 0.7.0
- Released on: 2026-10-26
- What changes: The voice keeps what it last failed with; Web Speech and Web Audio standards
- Fingerprint: 88ea655c5914f2ee
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.8.0

Release · `R0_8_0`

- Released by: trame
- Version: 0.8.0
- Released on: 2026-10-27
- What changes: Rules a project applies with their parameters (Reaches, NeverReaches, Linked, WithoutEffects, WordsOf); the SDLC's tooling: program commands, project files, a headless browser, each for a machine and in memory; class selectors in CSS
- Fingerprint: 07a1e5e13baf675b
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

### Version 0.9.0

Release · `R0_9_0`

- Released by: trame
- Version: 0.9.0
- Released on: 2026-10-28
- What changes: The vocabulary Directions for the way a rule follows an edge; what Playwright asks once installed (its Chromium), for the plan of a run elsewhere; the current directory of POSIX
- Fingerprint: bb918531117eb046
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals, Rules applied, not written again

## Standard library · Repositories on GitHub

### Git's command line

Standard · `GitCommandLine`

- Maintained by: trame
- Source: Git manual: git (--version), git-rev-parse (--abbrev-ref), git-push (--set-upstream), git-fetch, git-diff (--name-only, A...B: since the merge base), git-checkout, git-merge (--ff-only)
- Address: https://git-scm.com/docs/git-diff
- Constants: { program: { value: git, meaning: Git's command line }, version: { value: --version, meaning: Says which Git this is: it answers when Git is installed }, revParse: { value: rev-parse, meaning: Says what a name stands for }, abbreviated: { value: --abbrev-ref, meaning: The short name of a reference: the branch's }, head: { value: HEAD, meaning: What is checked out }, detached: { value: HEAD, meaning: What rev-parse --abbrev-ref says when no branch is checked out }, push: { value: push, meaning: Sends a branch to a remote }, upstream: { value: --set-upstream, meaning: The branch follows the one it was sent to }, remote: { value: origin, meaning: The remote the repository came from }, fetch: { value: fetch, meaning: Brings a branch of a remote }, fetched: { value: FETCH_HEAD, meaning: What was just fetched }, diff: { value: diff, meaning: Shows what differs }, names: { value: --name-only, meaning: Only the paths of the files that differ }, since: { value: ..., meaning: Between two names: what the second changes since it parted from the first }, checkout: { value: checkout, meaning: Checks a branch out }, merge: { value: merge, meaning: Joins another history into the branch checked out }, forwardOnly: { value: --ff-only, meaning: Only by moving the branch forward: refused if it would need a merge commit } }
- Serves: A published value is cited, not copied

### GitHub's ways of asking a merge once it holds

Standard · `GitHubAutoMerge`

- Maintained by: trame
- Source: GitHub CLI manual: gh pr merge (--auto, --merge, --squash, --rebase, --repo); the proxy of a Claude Code session, answering a call to GraphQL: PUT /repos/{owner}/{repo}/pulls/{n}/ccr/auto_merge
- Address: https://cli.github.com/manual/gh_pr_merge
- Constants: { pr: { value: pr, meaning: The commands of pull requests }, merge: { value: merge, meaning: Merges one, or asks it merged }, auto: { value: --auto, meaning: Once it holds: its checks passed }, byMerge: { value: --merge, meaning: By a merge commit }, bySquash: { value: --squash, meaning: Squashed into one commit }, byRebase: { value: --rebase, meaning: Its commits rebased }, repo: { value: --repo, meaning: The repository, owner/name }, route: { value: /ccr/auto_merge, meaning: After the pull request: the route of the proxy that asks GitHub to merge it once it holds }, method: { value: merge_method, meaning: How it is merged, in the body of that route } }
- Serves: A published value is cited, not copied

### GitHub's API for pull requests

Standard · `GitHubPullRequestsApi`

- Maintained by: trame
- Source: GitHub REST API: Pulls (List pull requests: head, state; Create a pull request: title, head, base, body; number, html_url; Get a pull request: head.ref, head.sha, base.ref, state; List pull requests files: filename; Merge a pull request: merge_method), Checks (List check runs for a Git reference: check_runs, name, status, conclusion); GitHub CLI manual: gh api (--method, --input, a query)
- Address: https://docs.github.com/en/rest/pulls/pulls
- Constants: { pulls: { value: /pulls, meaning: After the repository: its pull requests }, query: { value: ?, meaning: Opens the parameters of a call }, and: { value: &, meaning: Between two parameters }, equals: { value: =, meaning: Between a parameter and its value }, head: { value: head, meaning: The branch a pull request brings, owner:branch when listed }, owner: { value: :, meaning: Between the owner and the branch, in head }, state: { value: state, meaning: Which pull requests are listed }, openState: { value: open, meaning: Those still open }, base: { value: base, meaning: The branch it goes into }, title: { value: title, meaning: Its title }, body: { value: body, meaning: What it says }, number: { value: number, meaning: Its number in the repository }, url: { value: html_url, meaning: Where a person opens it }, ref: { value: ref, meaning: The name of a branch, in head and base }, sha: { value: sha, meaning: A commit, by its hash }, files: { value: /files, meaning: After a pull request: the files it changes }, filename: { value: filename, meaning: The path of a file it changes }, merging: { value: /merge, meaning: After a pull request: merges it }, method: { value: merge_method, meaning: How it is merged }, commits: { value: /commits, meaning: After the repository: its commits }, checkRuns: { value: /check-runs, meaning: After a commit: the checks run on it }, runs: { value: check_runs, meaning: The checks listed }, name: { value: name, meaning: A check's name }, status: { value: status, meaning: Whether a check still runs }, completed: { value: completed, meaning: A check that ended }, conclusion: { value: conclusion, meaning: How a check ended }, success: { value: success, meaning: A check that passed }, skipped: { value: skipped, meaning: A check that did not need to run: it does not keep a merge }, perPage: { value: per_page, meaning: How many are listed at once }, page: { value: page, meaning: Which page of a list, from the first }, first: { value: 1, meaning: The first page }, most: { value: 100, meaning: The most a page lists } }
- Serves: A published value is cited, not copied

### GitHub's API for a repository

Standard · `GitHubRepositoryApi`

- Maintained by: trame
- Source: GitHub REST API: Repositories (Get, Update a repository), Rules (Get rules for a branch; Get, Create and Update a repository ruleset), Pages (Get, Create a GitHub Pages site, build_type workflow); GitHub CLI manual: gh api (--method, --input)
- Address: https://docs.github.com/en/rest/repos/rules
- Constants: { program: { value: gh, meaning: GitHub's command line, with the token of the person who runs it }, api: { value: api, meaning: Calls GitHub's API }, method: { value: --method, meaning: The method of the call }, patch: { value: PATCH, meaning: Changes what it names }, post: { value: POST, meaning: Creates }, put: { value: PUT, meaning: Replaces }, input: { value: --input, meaning: The body of the call, read from a file }, standardInput: { value: -, meaning: As a file: what the command is given }, repos: { value: repos/, meaning: Before the repository, owner/name }, rulesets: { value: /rulesets, meaning: After it: its rulesets }, branchRules: { value: /rules/branches/, meaning: After it, before a branch: the rules in force on the branch }, pages: { value: /pages, meaning: After it: its pages }, separator: { value: /, meaning: Between the steps of a path }, allowMerge: { value: allow_merge_commit, meaning: Whether a pull request may be merged with a merge commit }, allowSquash: { value: allow_squash_merge, meaning: Whether it may be squashed }, allowRebase: { value: allow_rebase_merge, meaning: Whether it may be rebased }, allowAutoMerge: { value: allow_auto_merge, meaning: Whether GitHub may merge it once it holds, when asked }, deleteBranch: { value: delete_branch_on_merge, meaning: Whether its branch is deleted once merged }, name: { value: name, meaning: The name of a ruleset }, target: { value: target, meaning: What a ruleset protects }, branchTarget: { value: branch, meaning: Branches }, enforcement: { value: enforcement, meaning: Whether a ruleset applies }, active: { value: active, meaning: It applies }, conditions: { value: conditions, meaning: Which branches it protects }, refName: { value: ref_name, meaning: By their names }, include: { value: include, meaning: Those it protects }, exclude: { value: exclude, meaning: Those it leaves out }, heads: { value: refs/heads/, meaning: Before a branch's name }, rules: { value: rules, meaning: Its rules }, type: { value: type, meaning: The kind of a rule }, parameters: { value: parameters, meaning: What a rule is given }, deletion: { value: deletion, meaning: The branch is never deleted }, nonFastForward: { value: non_fast_forward, meaning: The branch is never rewritten }, pullRequest: { value: pull_request, meaning: The branch receives nothing but pull requests }, approvals: { value: required_approving_review_count, meaning: How many approvals a pull request needs }, dismissStale: { value: dismiss_stale_reviews_on_push, meaning: Whether a push dismisses the approvals given (GitHub's default: no) }, codeOwners: { value: require_code_owner_review, meaning: Whether the owners of the files changed must approve (GitHub's default: no) }, lastPush: { value: require_last_push_approval, meaning: Whether the last push needs an approval of its own (GitHub's default: no) }, threads: { value: required_review_thread_resolution, meaning: Whether every thread of the review must be resolved (GitHub's default: no) }, methods: { value: allowed_merge_methods, meaning: How a pull request may be merged }, statusChecks: { value: required_status_checks, meaning: The checks a pull request must pass }, strict: { value: strict_required_status_checks_policy, meaning: Whether the branch must be up to date with the main one first }, context: { value: context, meaning: A check, by the name of the job that runs it }, buildType: { value: build_type, meaning: How the pages are built }, workflow: { value: workflow, meaning: By a workflow }, id: { value: id, meaning: The identifier of a ruleset } }
- Serves: A published value is cited, not copied

### How GitHub merges a pull request

Vocabulary · `MergeMethods`

- Owner: trame
- Words: { merge: A merge commit: each commit of the branch kept, squash: One commit for the branch, rebase: Each commit replayed on the main branch }
- Serves: A published value is cited, not copied

### The parts of a repository's settings

Vocabulary · `RepositoryParts`

- Owner: trame
- Words: { methods: The ways a pull request may be merged: only the one decided, autoMerge: Whether GitHub merges a pull request once it holds, when asked, deletesMerged: Whether the branch of a pull request is deleted once merged, protected: Whether the branch is never deleted nor rewritten, and receives nothing but pull requests, approvals: How many approvals a pull request needs, checks: The checks a pull request must pass, upToDate: Whether a pull request must be up to date with the branch first, pages: Whether the pages are built by a workflow }
- Serves: Ports of the platform, realized once

### A repository is set by its project's graph

Architecture decision · `RepositoryThroughItsApi` · **held**

- Decided by: trame
- Context: A repository's settings decide what reaches its main branch: set by hand in GitHub's pages, nothing says why, and nothing tells when they drift from what the project decided.
- Consequences: A project decides its settings (RepositorySettings) and applies them by a program of its SDLC that a shipment deploys, which reads them back and compares them (RepositoryCompared); its scenarios play that program with the repository kept in memory, and a check reads the repository as it is.
- Rejected: A script the graph writes, which an administrator runs, nothing reads the repository back, and nothing records who set it; A writer in ci, a program that calls GitHub is code a project runs and verifies, not a file a place runs
- Serves: Ports of the platform, realized once
- Applied by: How GitHub merges a pull request, The parts of a repository's settings, A repository compared with its settings, A repository on GitHub, GitHub's command line, The repositories a scenario keeps, A repository kept in memory

### The automatic merge

Port · `AutoMerge`

- Owner: trame
- Declared effects: { ask: process, network, asynchronous }

### The branches

Port · `Branches`

- Owner: trame
- Declared effects: { current: process, asynchronous, push: process, network, asynchronous, changed: process, network, asynchronous, update: process, network, write, asynchronous }

### The branches a scenario keeps

Port · `BranchesKept`

- Owner: trame
- Declared effects: 

### Pull requests

Port · `PullRequests`

- Owner: trame
- Declared effects: { find: process, network, asynchronous, open: process, network, asynchronous, mergeOnceItHolds: process, network, asynchronous, read: process, network, asynchronous, checks: process, network, asynchronous, files: process, network, asynchronous, merge: process, network, asynchronous }

### The pull requests a scenario keeps

Port · `PullRequestsKept`

- Owner: trame
- Declared effects: 

### A repository on GitHub

Port · `RepositoryApi`

- Owner: trame
- Declared effects: { apply: process, network, asynchronous, read: process, network, asynchronous }

### The repositories a scenario keeps

Port · `RepositoryKept`

- Owner: trame
- Declared effects: 

### Branches kept in memory

Function · `BranchesInMemory` · **held**

- Owner: trame
- Serves: Ports of the platform, realized once
- Implements: The branches, The branches a scenario keeps

### Pull requests kept in memory

Function · `PullRequestsInMemory` · **held**

- Owner: trame
- Parameters: { repos: repository.GitHubRepositoryApi, api: repository.GitHubPullRequestsApi, texts: algebra.Texts }
- Serves: Ports of the platform, realized once
- Implements: Pull requests, The pull requests a scenario keeps
- Depends on: GitHub's API for a repository, GitHub's API for pull requests, Texts

### A repository compared with its settings

Function · `RepositoryCompared` · **held**

- Owner: trame
- Parameters: { parts: repository.RepositoryParts }
- Serves: Ports of the platform, realized once
- Depends on: The parts of a repository's settings

### A repository kept in memory

Function · `RepositoryInMemory` · **held**

- Owner: trame
- Serves: Ports of the platform, realized once
- Implements: A repository on GitHub, The repositories a scenario keeps

### The automatic merge, by GitHub's command line

Implementation · `AutoMergeByGitHubCli`

- Owner: trame
- Parameters: { auto: repository.GitHubAutoMerge, repos: repository.GitHubRepositoryApi, methods: repository.MergeMethods, cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus }
- Implements: The automatic merge
- Depends on: GitHub's ways of asking a merge once it holds, GitHub's API for a repository, How GitHub merges a pull request, Node.js command line and child processes, Node.js events, Exit status

### The automatic merge, in a session of Claude Code

Implementation · `AutoMergeInAClaudeSession`

- Owner: trame
- Parameters: { auto: repository.GitHubAutoMerge, repos: repository.GitHubRepositoryApi, api: repository.GitHubPullRequestsApi, cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus, texts: algebra.Texts }
- Implements: The automatic merge
- Depends on: GitHub's ways of asking a merge once it holds, GitHub's API for a repository, GitHub's API for pull requests, Node.js command line and child processes, Node.js events, Exit status, Texts

### Git's branches

Implementation · `GitCliBranches`

- Owner: trame
- Parameters: { git: repository.GitCommandLine, cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus, texts: algebra.Texts, file: text.TextFile }
- Implements: The branches
- Depends on: Git's command line, Node.js command line and child processes, Node.js events, Exit status, Texts, Text file

### GitHub's pull requests, by its command line

Implementation · `GitHubCliPullRequests`

- Owner: trame
- Parameters: { repos: repository.GitHubRepositoryApi, api: repository.GitHubPullRequestsApi, cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus, texts: algebra.Texts, values: algebra.ValueTypes, merging: repository.AutoMerge }
- Implements: Pull requests
- Depends on: GitHub's API for a repository, GitHub's API for pull requests, Node.js command line and child processes, Node.js events, Exit status, Texts, Types of values, The automatic merge

### GitHub's command line

Implementation · `GitHubCliRepository`

- Owner: trame
- Parameters: { api: repository.GitHubRepositoryApi, cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus, methods: repository.MergeMethods, texts: algebra.Texts, values: algebra.ValueTypes }
- Implements: A repository on GitHub
- Depends on: GitHub's API for a repository, Node.js command line and child processes, Node.js events, Exit status, How GitHub merges a pull request, Texts, Types of values

## Standard library · Rules

### As many links as asked

Requirement · `Linked` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### A node never reaches what it must not

Requirement · `NeverReaches` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### A node reaches what it must

Requirement · `Reaches` · **held**

- Owner: trame
- Refines: Rules applied, not written again

### Effects a node may not have

Requirement · `WithoutEffects` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### Words of a vocabulary

Requirement · `WordsOf` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Refines: Rules applied, not written again
- Depends on: Counts

### Directions

Vocabulary · `Directions`

- Owner: trame
- Words: { out: From the node, along the edge: what it serves, what it depends on, in: Toward the node, against the edge: what serves it, what depends on it }
- Serves: Rules applied, not written again

### Criteria of as many links as asked

Acceptance criteria · `LinkedCriteria` · **held**

- Owner: trame
- Accepts: As many links as asked

### Criteria of a node that never reaches what it must not

Acceptance criteria · `NeverReachesCriteria` · **held**

- Owner: trame
- Accepts: A node never reaches what it must not

### Criteria of a node that reaches what it must

Acceptance criteria · `ReachesCriteria` · **held**

- Owner: trame
- Accepts: A node reaches what it must

### Criteria of effects a node may not have

Acceptance criteria · `WithoutEffectsCriteria` · **held**

- Owner: trame
- Accepts: Effects a node may not have

### Criteria of words of a vocabulary

Acceptance criteria · `WordsOfCriteria` · **held**

- Owner: trame
- Accepts: Words of a vocabulary

## Standard library · Running

### The instant of the scenarios

Decision · `ScenarioInstant`

- Decided by: trame
- Value: 2026-10-30T08:00:00.000Z

### A command that keeps running asks the machine through ports

Architecture decision · `RunningThroughPorts` · **held**

- Decided by: trame
- Context: trame dev leaves the engine for a library of commands: the server, the timers, the clock and the terminal it used were the engine's own ports, which no library reaches.
- Consequences: A library's command that keeps running is played in memory like any other: its server asked as a browser would, its clock stopped, its lines kept; on a machine, Node.js answers.
- Rejected: The engine's API serving the page, the engine would serve HTTP for a command, a platform it has no reason to give
- Serves: Ports of the platform, realized once
- Applied by: The clock, Timers, Serving HTTP, Printing as it goes, The machine's clock, The machine's timers, A server of Node.js, The standard output, A clock stopped, A server in memory, Lines kept

### Serving HTTP

Port · `HttpServing`

- Owner: trame
- Declared effects: network

### The lines printed

Port · `LinesKept`

- Owner: trame
- Declared effects: 

### Printing as it goes

Port · `LinesPrinted`

- Owner: trame
- Declared effects: terminal

### The server asked

Port · `ServerKept`

- Owner: trame
- Declared effects: 

### The clock

Port · `TheClock`

- Owner: trame
- Declared effects: time

### Timers

Port · `Waiting`

- Owner: trame
- Declared effects: time

### A clock stopped

Function · `ClockStopped` · **held**

- Owner: trame
- Parameters: { instant: running.ScenarioInstant }
- Serves: Ports of the platform, realized once
- Implements: The clock
- Depends on: The instant of the scenarios

### Lines kept

Function · `LinesInMemory` · **held**

- Owner: trame
- Serves: Ports of the platform, realized once
- Implements: Printing as it goes, The lines printed

### A server in memory

Function · `ServerInMemory` · **held**

- Owner: trame
- Parameters: { events: system.NodeEvents, http: web.Http, texts: algebra.Texts, say: running.RunningWords }
- Serves: Ports of the platform, realized once
- Implements: Serving HTTP, The server asked
- Depends on: Node.js events, HTTP, Texts, What a realization of this module says

### What a realization of this module says

Message catalog · `RunningWords`

- Owner: trame
- Written in: The language the library's commands and tools speak in.

### The machine's clock

Implementation · `MachineClock`

- Owner: trame
- Implements: The clock

### The machine's timers

Implementation · `MachineTimers` · **held**

- Owner: trame
- Implements: Timers

### A server of Node.js

Implementation · `NodeHttpServing`

- Owner: trame
- Implements: Serving HTTP

### The standard output

Implementation · `StandardOutput`

- Owner: trame
- Implements: Printing as it goes

## Standard library · Scenarios

### A command's line, in the scenarios

Decision · `ScenarioCommand`

- Decided by: trame
- Value: { trigger: { type: command, name: show, help: Shows a node, arguments: { name: node, meaning: the node shown }, { name: depth, meaning: how far, optional: true }, options: { name: lang, meaning: the language, takes: a tag } }, document: { id: show, view: show, group: summary, title: A node, blocks: { type: para, content: Shown. } }, lines: { full: Fast, --lang, fr, bare: Fast, lacking: --lang, fr, unknown: Fast, --colour, formatted: Fast, --format, json, elsewhere: Fast, --format, pdf }, read: { argument: node, given: Fast, option: lang, value: fr } }

### What the library's scenarios are given

Decision · `ScenarioData`

- Decided by: trame
- Value: { seeds: 1, 2, text: a seed, draws: 200, bounds: { lo: 1, hi: 6 }, weighted: { item: light, weight: 1 }, { item: heavy, weight: 3 }, { item: never, weight: 0 }, never: never, preference: { name: voice, value: off, unset: pace }, sentence: { text: Breathe in, language: en }, turned: 0.5, 0.25, file: { path: dist/page.html, text: <p>a page</p>, copy: public/index.html }, page: { path: dist/page.html, selector: .poses li, count: 12, text: Mountain, error: The page broke, language: fr }, command: SELECT 1, repository: { name: owner/project, settings: { branch: main, checks: project, library, upToDate: false, approvals: 1, method: merge, autoMerge: true, deletesMerged: true, pages: true }, left: { methods: merge, squash, autoMerge: false, deletesMerged: true, protected: false, checks: library, upToDate: false }, differs: methods, autoMerge, protected, approvals, checks }, pullRequest: { way: { repository: owner/project, base: main, method: merge, merge: onceItHoldsUnlessDecided, lock: trame.lock, projects: { name: project, dir: . }, { name: app, dir: apps/app } }, branch: work, title: A change, free: src/product.ts, apps/app/src/app.ts, decided: apps/app/trame.lock, apps/app/src/app.ts, open: { number: 7, url: https://github.com/owner/project/pull/7 }, elsewhere: more-work, check: project }, propagation: { settings: { engine: { launcher: trame.sh, upgrade: upgrade, ship: ship, build: build, by: --by, today: TRAME_TODAY }, configuration: trame.json, references: trame.json, src/packages.ts, projects: { name: project, dir: ., reads: example, runners: RunnersWritten }, { name: example, dir: examples/example, day: 2026-10-30, runners: RunnersWritten }, { name: app, dir: apps/app, runners: RunnersWritten }, { name: lib, dir: libs/lib } }, by: --by, person: ada, described: { ./trame.json: {"libraries":{"lib":"libs/lib"}}, examples/example/trame.json: {"libraries":{"lib":"../../libs/lib","app":"../../apps/app"}}, apps/app/trame.json: {"libraries":{"lib":{"path":"../../libs/lib","version":"0.1.0"}}}, libs/lib/trame.json: {"libraries":{"app":{"path":"../../apps/app","version":"0.1.0"}}} }, order: app, lib, example, project, moves: { dir: apps/app, path: apps/app/trame.json, to: {"libraries":{"lib":{"path":"../../libs/lib","version":"0.2.0"}}} } }, sheet: { written: :root { --ink: black; } p { color: var(--ink); }, cut: p { color: var(--ink }, served: { port: 4173, path: /, status: 200, header: content-type, media: text/plain, text: a page, wait: 10 } }

### The language of the library's scenarios

Decision · `ScenarioLanguage`

- Decided by: trame
- Value: { tag: en-GB }

### How the library's scenarios run

Architecture decision · `HowTheScenariosRun` · **held**

- Decided by: trame
- Context: The library offers realizations in memory to every project's scenarios: its own scenarios prove that they keep their ports' promises, before any project relies on them.
- Consequences: A project that judges harder chooses EveryWarning or one of its own (C4); the library leaves its warnings as points to watch. Reading HTML and CSS needs an engine: the library's build has one.
- Rejected: Scenarios on the machine, they would touch the disk, a browser and GitHub at each build of the library; Strict judgment for the library itself, a library's warnings are often what its projects decide (a port nobody realizes here)
- Serves: Ports of the platform, realized once
- Applied by: In memory, Waiting on the machine, The scenarios' settings, Judged as the language says, Judged strictly, Read by the engine that builds, The formats of the scenarios

### How the scenarios' versions are carried

Function · `ScenarioPropagation` · **held**

- Owner: trame
- Parameters: { data: scenarios.ScenarioData }
- Serves: Ports of the platform, realized once
- Implements: How a version is carried
- Depends on: What the library's scenarios are given

### How the scenarios' pull requests are opened

Function · `ScenarioPullRequests` · **held**

- Owner: trame
- Parameters: { data: scenarios.ScenarioData }
- Serves: Ports of the platform, realized once
- Implements: How pull requests are opened
- Depends on: What the library's scenarios are given

### What the library's scenarios check

Message catalog · `ScenarioChecks`

- Owner: trame
- Written in: The language of the library's scenarios

### The formats of the scenarios

Technical choice · `FormatsOfTheScenarios` · **held**

- Decided by: trame
- Context: The library offers one format of its own; Markdown and text are libs/documents', which projects choose beside it.
- Chooses: Documents in JSON
- In: Test
- Follows: Plugin
- Serves: Ports of the platform, realized once

### In memory

Technical choice · `InMemory` · **held**

- Decided by: trame
- Context: A realization kept in memory is what a project's scenarios run in place of the device: it must keep its port's promise.
- Chooses: Preferences kept in memory, A voice that writes down, The screen kept awake, in memory, Frames turned by hand, Files kept in memory, A browser kept in memory, A repository kept in memory, Branches kept in memory, Pull requests kept in memory, Programs run in memory, A clock stopped, A server in memory, Lines kept
- In: Test
- Follows: Strategy
- Serves: Ports of the platform, realized once

### Judged as the language says

Technical choice · `LanguageJudgment` · **held**

- Decided by: trame
- Context: The library raises nothing the language does not: its warnings are points to watch, as in any project that says nothing.
- Chooses: As the language says
- In: Test
- Follows: Strategy
- Serves: Ports of the platform, realized once

### Read by the engine that builds

Technical choice · `ReadInTheEngine` · **held**

- Decided by: trame
- Context: Reading a language is the engine's: the grammar and its reader are the engine's packages, which no library carries.
- Chooses: Read by the engine
- In: Test
- Follows: Adapter
- Serves: Ports of the platform, realized once

### The scenarios' settings

Technical choice · `ScenarioSettings` · **held**

- Decided by: trame
- Context: A command of the library reads its settings through its ports: a scenario answers them with its own.
- Chooses: How the scenarios' pull requests are opened, How the scenarios' versions are carried
- In: Test
- Follows: Strategy
- Serves: Ports of the platform, realized once

### Judged strictly

Technical choice · `StrictJudgment` · **held**

- Decided by: trame
- Context: A project that leaves nothing to watch chooses it; the library plays it here, through its port, as such a project would.
- Chooses: Every warning an error
- In: Strict
- Follows: Strategy
- Serves: Ports of the platform, realized once

### Waiting on the machine

Technical choice · `WaitingAsAPersonWould` · **held**

- Decided by: trame
- Context: A wait kept in memory would call at once what a person waits for: the scenario would no longer wait.
- Chooses: The machine's timers
- In: Test
- Follows: Adapter
- Serves: Ports of the platform, realized once

### Strict

Environment · `Strict`

- Owner: trame

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### Commands are made for each effect

Scenario · `CommandsMade` · **held**

- Owner: trame
- Parameters: { commands: effects.Commands, effects: effects.Effects, data: scenarios.ScenarioData, checks: scenarios.ScenarioChecks }
- Verifies: Commands
- In: Test
- Depends on: Commands, Effects, What the library's scenarios are given, What the library's scenarios check

### The device, in memory

Scenario · `DeviceInMemory` · **held**

- Owner: trame
- Parameters: { preferences: platform.PreferencesStore, voice: platform.SpeechVoice, heard: platform.SpeechHeard, screen: platform.ScreenAwake, awake: platform.ScreenKeptAwake, frames: platform.AnimationFrames, time: platform.TimeTurned, data: scenarios.ScenarioData, counts: algebra.Counts, checks: scenarios.ScenarioChecks }
- Verifies: Preferences kept in memory, A voice that writes down, The screen kept awake, in memory, Frames turned by hand
- In: Test
- Depends on: Preferences, Speech, What was said, Screen kept awake, Whether the screen is kept awake, Animation frames, Time turned by hand, What the library's scenarios are given, Counts, What the library's scenarios check

### Seeded draws keep their promise

Scenario · `DrawsKeepTheirPromise` · **held**

- Owner: trame
- Parameters: { draws: algorithms.SeededDraws, data: scenarios.ScenarioData, counts: algebra.Counts, checks: scenarios.ScenarioChecks }
- Verifies: Seeded draws
- In: Test
- Depends on: Seeded draws, What the library's scenarios are given, Counts, What the library's scenarios check

### Judged as the language says

Scenario · `JudgedAsTheLanguage` · **held**

- Owner: trame
- Parameters: { judge: judgment.Hardening, checks: scenarios.ScenarioChecks }
- Verifies: As the language says
- In: Test
- Depends on: Hardening, What the library's scenarios check

### Judged strictly

Scenario · `JudgedStrictly` · **held**

- Owner: trame
- Parameters: { judge: judgment.Hardening, checks: scenarios.ScenarioChecks }
- Verifies: Every warning an error
- In: Strict
- Depends on: Hardening, What the library's scenarios check

### The languages read by the engine

Scenario · `LanguagesRead` · **held**

- Owner: trame
- Parameters: { reader: engine.LanguageReading, html: languages.HtmlMarkup, css: languages.CssStyleSheets, counts: algebra.Counts, data: scenarios.ScenarioData, checks: scenarios.ScenarioChecks }
- Verifies: Read by the engine
- In: Test
- Depends on: Reading a language, HTML markup, CSS style sheets, Counts, What the library's scenarios are given, What the library's scenarios check

### A command's line read, its answer written

Scenario · `LinesReadAnswersWritten` · **held**

- Owner: trame
- Parameters: { lines: tooling.CommandLines, read: tooling.CommandLineRead, sample: scenarios.ScenarioCommand, json: text.JsonFormatting, long: tooling.LongOptions, standard: tooling.StandardOptions, exit: system.ExitStatus, say: tooling.LineWords, checks: scenarios.ScenarioChecks }
- Verifies: Commands, their lines read and their answers written, A command's line, read, Documents in JSON
- In: Test
- Depends on: Commands, their lines read and their answers written, A command's line, read, A command's line, in the scenarios, JSON formatting, Long options, The options of every command, Exit status, What std's exposures say of a line, What the library's scenarios check

### A pull request merged once it holds

Scenario · `MergedOnceItHolds` · **held**

- Owner: trame
- Parameters: { open: commands.OpenPullRequest, merge: commands.MergePullRequest, branches: repository.BranchesKept, pulls: repository.PullRequestsKept, data: scenarios.ScenarioData, say: commands.CommandWords, checks: scenarios.ScenarioChecks, counts: algebra.Counts, exit: system.ExitStatus }
- Verifies: Merge a pull request, Open a pull request, Branches kept in memory, Pull requests kept in memory, How the scenarios' pull requests are opened
- In: Test
- Depends on: Open a pull request, Merge a pull request, The branches a scenario keeps, The pull requests a scenario keeps, What the library's scenarios are given, What the library's commands say, What the library's scenarios check, Counts, Exit status

### A version carried across the projects

Scenario · `PropagatedInOrder` · **held**

- Owner: trame
- Parameters: { propagate: commands.Propagate, files: tooling.Files, runs: tooling.ProgramRunsKept, data: scenarios.ScenarioData, say: commands.CommandWords, checks: scenarios.ScenarioChecks, counts: algebra.Counts, sequences: algebra.Sequences, exit: system.ExitStatus }
- Verifies: Propagate, Programs run in memory, How the scenarios' versions are carried
- In: Test
- Depends on: Propagate, Project files, The programs a scenario keeps: the file it says a program writes is written when that program runs., What the library's scenarios are given, What the library's commands say, What the library's scenarios check, Counts, Sequences, Exit status

### A pull request opened

Scenario · `PullRequestOpened` · **held**

- Owner: trame
- Parameters: { open: commands.OpenPullRequest, branches: repository.BranchesKept, pulls: repository.PullRequestsKept, data: scenarios.ScenarioData, say: commands.CommandWords, checks: scenarios.ScenarioChecks, counts: algebra.Counts, exit: system.ExitStatus }
- Verifies: Open a pull request, Branches kept in memory, Pull requests kept in memory, How the scenarios' pull requests are opened
- In: Test
- Depends on: Open a pull request, The branches a scenario keeps, The pull requests a scenario keeps, What the library's scenarios are given, What the library's commands say, What the library's scenarios check, Counts, Exit status

### A repository kept in memory

Scenario · `RepositoryInMemoryKeeps` · **held**

- Owner: trame
- Parameters: { repository: repository.RepositoryApi, kept: repository.RepositoryKept, compared: repository.RepositoryCompared, data: scenarios.ScenarioData, checks: scenarios.ScenarioChecks, counts: algebra.Counts }
- Verifies: A repository kept in memory, A repository compared with its settings
- In: Test
- Depends on: A repository on GitHub, The repositories a scenario keeps, A repository compared with its settings, What the library's scenarios are given, What the library's scenarios check, Counts

### Running, in memory

Scenario · `RunningInMemory` · **held**

- Owner: trame
- Parameters: { clock: running.TheClock, instant: running.ScenarioInstant, serving: running.HttpServing, server: running.ServerKept, waiting: running.Waiting, printing: running.LinesPrinted, printed: running.LinesKept, events: system.NodeEvents, texts: algebra.Texts, data: scenarios.ScenarioData, checks: scenarios.ScenarioChecks }
- Verifies: A clock stopped, A server in memory, Lines kept, The machine's timers
- In: Test
- Depends on: The clock, The instant of the scenarios, Serving HTTP, The server asked, Timers, Printing as it goes, The lines printed, Node.js events, Texts, What the library's scenarios are given, What the library's scenarios check

### The tooling, in memory

Scenario · `ToolingInMemory` · **held**

- Owner: trame
- Parameters: { files: tooling.Files, kept: tooling.FilesKept, browser: tooling.HeadlessBrowser, script: tooling.BrowserScripted, data: scenarios.ScenarioData, checks: scenarios.ScenarioChecks }
- Verifies: Files kept in memory, A browser kept in memory
- In: Test
- Depends on: Project files, Files written, Headless browser, Browser script, What the library's scenarios are given, What the library's scenarios check

## Standard library · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: std, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **held**

- Owner: trame
- Path: ../.github/workflows/std-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The standard library

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The standard library
- Follows the policy: How a version is made

### The files that run it elsewhere

Shipment · `RunnersWritten` · **held**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

### Its callers identified

Obligation · `CallersIdentified`

- Owner: trame
- A gap weighs: error
- Applies the family: Who calls a shipment's programs is identified
- Serves: Versions that hold

### Its data reviewed

Obligation · `DataReviewed`

- Owner: trame
- A gap weighs: error
- Applies the family: The data a shipment carries is reviewed
- Serves: Versions that hold

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: trame
- Applies the family: The decisions a shipment applies hold
- Serves: Versions that hold

### Its functions verified

Obligation · `FunctionsVerified`

- Owner: trame
- A gap weighs: error
- Applies the family: The code a shipment ships is verified
- Serves: Versions that hold

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Applies the family: The packages a shipment uses are safe
- Serves: Versions that hold

### Its requirements held

Obligation · `RequirementsServed`

- Owner: trame
- Applies the family: The product a shipment serves holds
- Serves: Versions that hold

### Its rules held

Obligation · `RulesHeld`

- Owner: trame
- Applies the family: The project's rules hold
- Serves: Versions that hold

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its functions verified, Its requirements held, Its decisions applied, Its rules held, Its packages safe, Its callers identified, Its data reviewed

## Standard library · System

### Exit status

Standard · `ExitStatus`

- Maintained by: trame
- Source: POSIX.1-2017, exit(); ISO C, EXIT_SUCCESS and EXIT_FAILURE
- Address: https://pubs.opengroup.org/onlinepubs/9699919799/functions/exit.html
- Constants: { success: { value: 0, meaning: The command succeeded (EXIT_SUCCESS) }, failure: { value: 1, meaning: The command failed (EXIT_FAILURE) } }
- Serves: A published value is cited, not copied

### Node.js process arguments

Standard · `NodeArguments`

- Maintained by: trame
- Source: Node.js documentation, process.argv
- Address: https://nodejs.org/api/process.html#processargv
- Constants: { script: { value: 1, meaning: The position of the path of the script being run }, firstArgument: { value: 2, meaning: The position of the first argument given to the script } }
- Serves: A published value is cited, not copied

### Node.js command line and child processes

Standard · `NodeCli`

- Maintained by: trame
- Source: Node.js documentation: Command-line API (--import, NODE_NO_WARNINGS), child_process (options.stdio)
- Address: https://nodejs.org/api/cli.html
- Constants: { importFirst: { value: --import, meaning: Imports a module before the program: a loader, say }, enabled: { value: 1, meaning: The value that turns an environment flag on (NODE_NO_WARNINGS=1) }, inherit: { value: inherit, meaning: A child process writes on the same terminal as its parent }, ignore: { value: ignore, meaning: A child process reads nothing from its parent }, pipe: { value: pipe, meaning: The parent reads what a child process writes } }
- Serves: A published value is cited, not copied

### Node.js character encodings

Standard · `NodeEncodings`

- Maintained by: trame
- Source: Node.js documentation, Buffer: buffers and character encodings
- Address: https://nodejs.org/api/buffer.html#buffers-and-character-encodings
- Constants: { utf8: { value: utf8, meaning: UTF-8: the encoding of the text files of a project }, hex: { value: hex, meaning: Each byte written as two hexadecimal digits: how a digest is shown } }
- Serves: A published value is cited, not copied

### Node.js events

Standard · `NodeEvents`

- Maintained by: trame
- Source: Node.js documentation: stream.Readable ('data', 'close', 'error'), ChildProcess ('exit', 'close'), process ('unhandledRejection'), fs.watch ('change')
- Address: https://nodejs.org/api/events.html
- Constants: { data: { value: data, meaning: A readable stream gives a chunk of what it reads }, close: { value: close, meaning: A stream, a request or a child process is closed: nothing more will come }, end: { value: end, meaning: A readable stream has nothing more to give: what it read is whole }, exit: { value: exit, meaning: A child process ended, with its exit code }, change: { value: change, meaning: fs.watch: a file under what is watched changed }, error: { value: error, meaning: A stream failed }, unhandledRejection: { value: unhandledRejection, meaning: A promise was rejected and nothing waited for it } }
- Serves: A published value is cited, not copied

### Node.js module specifiers

Standard · `NodeModuleSpecifiers`

- Maintained by: trame
- Source: Node.js documentation, ECMAScript modules: Terminology (relative, bare and absolute specifiers); Packages: Subpath imports
- Address: https://nodejs.org/api/esm.html#terminology
- Constants: { current: { value: ./, meaning: Opens a relative specifier from the importing file's directory }, parent: { value: ../, meaning: Opens a relative specifier from the directory above }, separator: { value: /, meaning: Separates the segments of a specifier, as in a URL path, whatever the platform }, packages: { value: node_modules, meaning: The directory where the packages a project imports are installed }, imports: { value: #, meaning: Opens a specifier the package's own import map resolves (subpath imports): #std/algebra }, pattern: { value: *, meaning: Stands for the rest of a subpath, in an entry of an import map and in its target } }
- Serves: A published value is cited, not copied

### Node.js process and console

Standard · `NodeProcessApi`

- Maintained by: trame
- Source: Node.js documentation: process (process.exitCode), console (console.log)
- Address: https://nodejs.org/api/process.html#processexitcode_1
- Constants: { process: { value: process, meaning: The global object of the running process }, exitCode: { value: exitCode, meaning: The code the process exits with once nothing is left to run }, console: { value: console, meaning: The global console }, log: { value: log, meaning: Prints its arguments on the standard output, separated by spaces, then a line feed } }
- Serves: A published value is cited, not copied

### npm's command line

Standard · `NpmCli`

- Maintained by: trame
- Source: npm documentation: npm install, npm audit, npm outdated (--json)
- Address: https://docs.npmjs.com/cli/commands/npm-audit
- Constants: { command: { value: npm, meaning: The command line of npm }, audit: { value: audit, meaning: Asks the registry for the known vulnerabilities of the packages installed }, outdated: { value: outdated, meaning: Lists the packages installed that are not at their latest version }, json: { value: --json, meaning: Answers in JSON rather than in a table }, install: { value: install, meaning: Installs the packages package.json names and writes what it installed into the lockfile }, noAudit: { value: --no-audit, meaning: Installs without asking the registry for vulnerabilities (trame audit asks it) }, noFund: { value: --no-fund, meaning: Installs without the messages of packages looking for funding } }
- Serves: A published value is cited, not copied

### npm's manifest

Standard · `NpmManifest`

- Maintained by: trame
- Source: npm documentation: package.json (dependencies); Node.js documentation, Packages: "imports"
- Address: https://docs.npmjs.com/cli/configuring-npm/package-json#dependencies
- Constants: { dependencies: { value: dependencies, meaning: The packages the project needs to run, by name, each at its version }, imports: { value: imports, meaning: The package's import map: each specifier opened by # and where it leads }, type: { value: type, meaning: How Node.js reads the package's files of JavaScript and TypeScript: as ES modules, or as CommonJS when it is absent }, module: { value: module, meaning: The value of type that reads them as ES modules } }
- Serves: A published value is cited, not copied

### POSIX signals and errors

Standard · `Posix`

- Maintained by: trame
- Source: POSIX.1-2017, Base Definitions: <signal.h> (SIGINT, SIGTERM), <errno.h> (EPIPE), § 3.271 Pathname (slash), § 4.13 Pathname Resolution (dot)
- Address: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/signal.h.html
- Constants: { currentDirectory: { value: ., meaning: The directory a path starts from: a command in it is run as ./name }, slash: { value: /, meaning: Separates the components of a pathname: a directory and what it holds }, interrupt: { value: SIGINT, meaning: The interruption asked from the terminal (Ctrl-C) }, terminate: { value: SIGTERM, meaning: The polite request to end }, brokenPipe: { value: EPIPE, meaning: Writing to a pipe that nobody reads any more (the output piped into head, say) } }
- Serves: A published value is cited, not copied

## Standard library · Text

### Positions in a file

Standard · `GnuPositions`

- Maintained by: trame
- Source: GNU Coding Standards, § 4.4 Formatting Error Messages
- Address: https://www.gnu.org/prep/standards/html_node/Errors.html
- Constants: { firstLine: { value: 1, meaning: The number of the first line of a file }, firstColumn: { value: 1, meaning: The number of the first column of a line }, separator: { value: :, meaning: Separates the file from the line number } }
- Serves: A published value is cited, not copied

### Characters that do not show

Standard · `InvisibleCharacters`

- Maintained by: trame
- Source: The Unicode Standard 15.1, § 23.1 Control Codes, § 6.2 General Punctuation (U+00A0, U+2028, U+2029); RFC 8259 § 7
- Address: https://www.unicode.org/versions/Unicode15.1.0/
- Constants: { hidden: { value: [\u0000-\u001f\u00a0\u2028\u2029], meaning: Every character a reader cannot see, as a class of a regular expression }, leftByJson: { value: [\u00a0\u2028\u2029], meaning: Those of them that JSON writes as they are } }
- Serves: A published value is cited, not copied

### Text file

Standard · `TextFile`

- Maintained by: trame
- Source: POSIX.1-2017, Base Definitions, § 3.206 Line and § 3.403 Text File
- Address: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_206
- Constants: { endOfLine: { value: 
, meaning: Ends each line, the last one included } }
- Serves: A published value is cited, not copied

### Unified differences

Standard · `UnifiedDiff`

- Maintained by: trame
- Source: GNU diffutils: Comparing and Merging Files, § 2.2.3 Unified Format and § 4 Comparing Directories; POSIX.1-2017, diff
- Address: https://www.gnu.org/software/diffutils/manual/html_node/Unified-Format.html
- Constants: { program: { value: diff, meaning: The program that compares }, options: { value: -ru, meaning: Recursively, in the unified format }, same: { value: 0, meaning: The exit status when nothing differs }, differ: { value: 1, meaning: The exit status when something differs }, header: { value: diff , meaning: Opens the differences of a pair of files }, onlyIn: { value: Only in , meaning: A file that only one tree holds }, oldFile: { value: ---, meaning: Names the first file of a pair }, newFile: { value: +++, meaning: Names the second file of a pair }, removed: { value: -, meaning: Begins a line of the first file that the second does not have }, added: { value: +, meaning: Begins a line of the second file that the first does not have }, hunk: { value: @@, meaning: Opens and closes the ranges of a hunk: the lines of each file it covers }, rangeSeparator: { value: ,, meaning: Separates the first line of a range from the number of its lines } }
- Serves: A published value is cited, not copied

### JSON formatting

Decision · `JsonFormatting`

- Decided by: trame
- Value: { indentation: 2 }

## Standard library · Tooling

### Long options

Standard · `LongOptions`

- Maintained by: trame
- Source: The GNU C Library, Program Arguments, Argument Syntax (long options); POSIX.1-2017, XBD 12.2, Utility Syntax Guidelines
- Address: https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html
- Constants: { prefix: { value: --, meaning: Begins a long option, before its name } }
- Serves: A published value is cited, not copied

### Playwright's API

Standard · `PlaywrightApi`

- Maintained by: trame
- Source: Playwright documentation, class Page, event "pageerror"
- Address: https://playwright.dev/docs/api/class-page#page-event-page-error
- Constants: { pageError: { value: pageerror, meaning: An error the page raised and did not catch } }
- Serves: A published value is cited, not copied

### Where a package comes from

Vocabulary · `PackageOrigins`

- Owner: trame
- Words: { path: Reached where it is on the machine, by its path, registry: Installed at its version from a registry where it was published }
- Serves: Ports of the platform, realized once

### The language the library's commands and tools speak in.

Decision · `CommandLanguage`

- Decided by: trame
- Value: { tag: en-GB }

### Chromium without a screen

Decision · `HeadlessChromium`

- Decided by: trame
- Value: { args: --use-gl=angle, --use-angle=swiftshader, --enable-unsafe-swiftshader, --ignore-gpu-blocklist, width: 420, height: 900 }
- Rejected: Chromium as it starts, without a graphics card, WebGL fails and a page that draws in three dimensions shows nothing

### The options of every command

Decision · `StandardOptions`

- Decided by: trame
- Value: { format: { name: format, meaning: the format the documents a command answers are written in, takes: the word of a format the project chose } }
- Rejected: Each command its own format option, the same option declared again by every command that answers documents, written differently by each

### The SDLC's tooling is realized once

Architecture decision · `ToolingAsPorts` · **held**

- Decided by: trame
- Context: The code that builds, checks and deploys a product is code like the product's: written once, tested before it runs.
- Consequences: A check opens the delivered page through HeadlessBrowser, a deployment copies through Files, a project reaches the packages it uses through PackageSources wherever they come from; scenarios play them with the realizations kept in memory.
- Serves: Ports of the platform, realized once
- Applied by: Commands of a program, Node's command line, Commands run in the engine, What the machine must also have, Playwright's browser, installed, What repairs a project, Project files, Files written, The machine's files, Files kept in memory, Headless browser, Chromium, driven by Playwright, Browser script, A browser kept in memory, Where a package comes from

### Formats of an answer

Port · `AnswerFormats`

- Owner: trame
- Declared effects: asynchronous
- Extension point: true

### Browser script

Port · `BrowserScripted`

- Owner: trame
- Declared effects: 

### Project files

Port · `Files`

- Owner: trame
- Declared effects: { exists: read, read: read, fingerprint: read, write: write, copy: read, write }

### Files written

Port · `FilesKept`

- Owner: trame
- Declared effects: 

### Headless browser

Port · `HeadlessBrowser`

- Owner: trame
- Declared effects: process, display, time, network, asynchronous

### What the machine must also have

Port · `MachineNeeds`

- Owner: trame
- Declared effects: { ask: read, process, network, display, time, asynchronous }
- Extension point: true

### Where a package comes from

Port · `PackageSources`

- Owner: trame
- Declared effects: { place: read, write, publish: read, write, versions: read }

### Commands of a program

Port · `ProgramCommands`

- Owner: trame
- Declared effects: terminal, asynchronous

### Programs run

Port · `ProgramRuns`

- Owner: trame
- Declared effects: { run: process, terminal, read, write, asynchronous }

### The programs a scenario keeps: the file it says a program writes is written when that program runs.

Port · `ProgramRunsKept`

- Owner: trame
- Declared effects: { failIn: , writeIn: write, runs:  }

### What repairs a project

Port · `ProjectRepairs`

- Owner: trame
- Declared effects: { repair: read, write }
- Extension point: true

### Documents in JSON

Function · `AnswersInJson` · **held**

- Owner: trame
- Parameters: { media: web.MediaTypes, json: text.JsonFormatting, counts: algebra.Counts }
- Constants: { word: { value: json, meaning: The word of the format, after --format } }
- Serves: Ports of the platform, realized once
- Implements: Formats of an answer
- Depends on: Media types, JSON formatting, Counts

### A browser kept in memory

Function · `BrowserInMemory` · **held**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Implements: Headless browser, Browser script
- Depends on: Counts

### A command's line, read

Function · `CommandLineRead` · **held**

- Owner: trame
- Parameters: { long: tooling.LongOptions, standard: tooling.StandardOptions, sequences: algebra.Sequences, counts: algebra.Counts }
- Serves: Ports of the platform, realized once
- Depends on: Long options, The options of every command, Sequences, Counts

### Commands, their lines read and their answers written

Function · `CommandLines` · **held**

- Owner: trame
- Parameters: { read: tooling.CommandLineRead, formats: tooling.AnswerFormats, long: tooling.LongOptions, standard: tooling.StandardOptions, exit: system.ExitStatus, values: algebra.ValueTypes, sequences: algebra.Sequences, counts: algebra.Counts, say: tooling.LineWords }
- Serves: Ports of the platform, realized once
- Depends on: A command's line, read, Formats of an answer, Long options, The options of every command, Exit status, Types of values, Sequences, Counts, What std's exposures say of a line

### Files kept in memory

Function · `FilesInMemory` · **held**

- Owner: trame
- Parameters: { draws: algorithms.SeededDraws, texts: algebra.Texts }
- Implements: Project files, Files written
- Depends on: Seeded draws, Texts

### Programs run in memory

Function · `ProgramRunsInMemory` · **held**

- Owner: trame
- Parameters: { exit: system.ExitStatus, files: tooling.Files }
- Serves: Ports of the platform, realized once
- Implements: Programs run, The programs a scenario keeps: the file it says a program writes is written when that program runs.
- Depends on: Exit status, Project files

### What std's exposures say of a line

Message catalog · `LineWords`

- Owner: trame
- Written in: The language the library's commands and tools speak in.

### What the library's tools say

Message catalog · `ToolWords`

- Owner: trame
- Written in: The language the library's commands and tools speak in.

### Commands run in the engine

Implementation · `CommandsInTheEngine`

- Owner: trame
- Parameters: { exit: system.ExitStatus, lines: tooling.CommandLines }
- Implements: Commands of a program
- Depends on: Exit status, Commands, their lines read and their answers written

### The machine's files

Implementation · `MachineFiles`

- Owner: trame
- Parameters: { sha: algorithms.Sha256, encodings: system.NodeEncodings }
- Implements: Project files
- Depends on: SHA-256, Node.js character encodings

### Node's command line

Implementation · `NodeProgramCommands`

- Owner: trame
- Parameters: { argv: system.NodeArguments, exit: system.ExitStatus, values: algebra.ValueTypes, lines: tooling.CommandLines }
- Implements: Commands of a program
- Depends on: Node.js process arguments, Exit status, Types of values, Commands, their lines read and their answers written

### Programs run by Node

Implementation · `NodeProgramRuns`

- Owner: trame
- Parameters: { cli: system.NodeCli, events: system.NodeEvents, exit: system.ExitStatus, posix: system.Posix }
- Implements: Programs run
- Depends on: Node.js command line and child processes, Node.js events, Exit status, POSIX signals and errors

### Chromium, driven by Playwright

Implementation · `PlaywrightBrowser`

- Owner: trame
- Parameters: { chromium: tooling.HeadlessChromium, api: tooling.PlaywrightApi, counts: algebra.Counts, time: measures.Time }
- Implements: Headless browser
- Uses: Playwright
- Depends on: Chromium without a screen, Playwright's API, Counts, Time

### Playwright's browser, installed

Implementation · `PlaywrightBrowserInstalled`

- Owner: trame
- Parameters: { words: tooling.ToolWords }
- Implements: What the machine must also have
- Uses: Playwright
- Depends on: What the library's tools say

### Playwright

Package · `PlaywrightPackage` · **held**

- Owner: trame
- Name: playwright
- Version: 1.63.0
- In the registry: https://www.npmjs.com/package/playwright
- Once installed: npx playwright install --with-deps chromium
- What it may do: process, display, network, time, asynchronous

## Standard library · Web

### CSSOM View

Standard · `CssomView`

- Maintained by: trame
- Source: W3C, CSSOM View Module: § 5 the ScrollIntoViewOptions dictionary and the ScrollBehavior enumeration
- Address: https://www.w3.org/TR/cssom-view-1/#dictdef-scrollintoviewoptions
- Constants: { start: { value: start, meaning: The element's top at the top of the view }, smooth: { value: smooth, meaning: Scrolls smoothly }, instant: { value: auto, meaning: Scrolls as the browser does by default: at once } }
- Serves: A published value is cited, not copied

### HTTP

Standard · `Http`

- Maintained by: trame
- Source: RFC 9110 (semantics), RFC 9111 (caching), RFC 9112 (connections), RFC 6750 (bearer tokens)
- Address: https://www.rfc-editor.org/rfc/rfc9110
- Constants: { scheme: { value: http, meaning: The scheme of HTTP addresses (§ 4.2.1) }, ok: { value: 200, meaning: The request succeeded }, noContent: { value: 204, meaning: The request succeeded, and there is nothing to send back }, notFound: { value: 404, meaning: The requested resource does not exist }, serverError: { value: 500, meaning: The server failed }, unavailable: { value: 503, meaning: The service cannot answer for now }, post: { value: POST, meaning: Method: asks the server to act }, contentType: { value: content-type, meaning: Header: the media type of the body }, cacheControl: { value: cache-control, meaning: Header: the caching directives }, connection: { value: connection, meaning: Header: the options of the connection }, authorization: { value: authorization, meaning: Header: the credentials of the caller }, bearer: { value: Bearer , meaning: The scheme of a token and its space, before the token (RFC 6750, § 2.1) }, noCache: { value: no-cache, meaning: Directive: revalidate before any reuse }, keepAlive: { value: keep-alive, meaning: Option: keep the connection open } }
- Serves: A published value is cited, not copied

### Media Queries Level 5

Standard · `MediaQueries5`

- Maintained by: trame
- Source: W3C, Media Queries Level 5: § 12.1 prefers-reduced-motion
- Address: https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion
- Constants: { reducedMotion: { value: prefers-reduced-motion, meaning: Whether the person asked for less motion }, reduce: { value: reduce, meaning: They did } }
- Serves: A published value is cited, not copied

### Media types

Standard · `MediaTypes`

- Maintained by: trame
- Source: IANA media types registry; RFC 6838; RFC 8259, § 11 (application/json); RFC 7763 (text/markdown); RFC 2046, § 4.1.3 (text/plain); WHATWG HTML (text/event-stream)
- Address: https://www.iana.org/assignments/media-types/
- Constants: { html: { value: text/html; charset=utf-8, meaning: An HTML page in UTF-8 }, json: { value: application/json, meaning: A body written in JSON }, jsonUtf8: { value: application/json; charset=utf-8, meaning: The same, its encoding said: UTF-8 }, eventStream: { value: text/event-stream, meaning: A stream of events sent by the server }, markdown: { value: text/markdown; charset=utf-8, meaning: A text written in Markdown, in UTF-8 }, plain: { value: text/plain; charset=utf-8, meaning: Plain text, in UTF-8 } }
- Serves: A published value is cited, not copied

### Screen Wake Lock API

Standard · `ScreenWakeLockApi`

- Maintained by: trame
- Source: W3C, Screen Wake Lock API: § 4 The WakeLockType enumeration
- Address: https://www.w3.org/TR/screen-wake-lock/
- Constants: { screen: { value: screen, meaning: The lock that keeps the screen on } }
- Serves: A published value is cited, not copied

### Server-sent events

Standard · `ServerSentEvents`

- Maintained by: trame
- Source: WHATWG HTML, § Server-sent events
- Address: https://html.spec.whatwg.org/multipage/server-sent-events.html
- Constants: { eventField: { value: event: , meaning: The field that names the event }, dataField: { value: data: , meaning: The field that carries the data }, endOfLine: { value: 
, meaning: Ends the line of a field (a line feed) }, comment: { value: : , meaning: A comment line, ignored by the browser }, endOfMessage: { value: 

, meaning: An empty line ends the message } }
- Serves: A published value is cited, not copied

### UI events

Standard · `UiEvents`

- Maintained by: trame
- Source: W3C, UI Events (§ 3.4 mouse events, § 3.3 focus events, § 3.6 keyboard events), Pointer Events (pointerdown), and the HTML Living Standard (input, change, DOMContentLoaded)
- Address: https://www.w3.org/TR/uievents/
- Constants: { click: { value: click, meaning: The person activates an element: a click, a tap }, pointerdown: { value: pointerdown, meaning: A finger touches, a pen or a mouse button goes down: the moment of a tap, before it is released (Pointer Events) }, keydown: { value: keydown, meaning: A key goes down }, input: { value: input, meaning: The value of a field changes as the person types or picks }, change: { value: change, meaning: The person settles the value of a control: an option chosen }, over: { value: mouseover, meaning: The pointer enters an element }, out: { value: mouseout, meaning: The pointer leaves it }, focusIn: { value: focusin, meaning: An element receives the focus (it bubbles) }, focusOut: { value: focusout, meaning: It loses the focus (it bubbles) }, loaded: { value: DOMContentLoaded, meaning: The document is parsed: its elements are there (HTML § 8.4) }, loading: { value: loading, meaning: The ready state of a document still being parsed (HTML § 3.1.3) }, enter: { value: Enter, meaning: The key that activates what has the focus (UI Events KeyboardEvent key values § 3.3) }, space: { value:  , meaning: The space bar, which activates a button too } }
- Serves: A published value is cited, not copied

### URI

Standard · `Uri`

- Maintained by: trame
- Source: RFC 3986, § 3 Syntax components and § 4.2 Relative reference; RFC 6761 (localhost)
- Address: https://www.rfc-editor.org/rfc/rfc3986
- Constants: { schemeEnd: { value: :, meaning: Ends the scheme (§ 3.1) }, authority: { value: //, meaning: Opens the authority: the host and its port (§ 3.2) }, portSeparator: { value: :, meaning: Separates the host from its port (§ 3.2.3) }, pathSeparator: { value: /, meaning: Separates the segments of a path (§ 3.3) }, query: { value: ?, meaning: Opens the query, after the path (§ 3.4) }, localhost: { value: localhost, meaning: The machine itself (RFC 6761, § 6.3) } }
- Serves: A published value is cited, not copied

### Web Audio API

Standard · `WebAudioApi`

- Maintained by: trame
- Source: W3C, Web Audio API 1.1: § 1.2.4 AudioContextLatencyCategory
- Address: https://www.w3.org/TR/webaudio-1.1/#enumdef-audiocontextlatencycategory
- Constants: { playback: { value: playback, meaning: Prioritise sustained playback without interruption over latency and power } }
- Serves: A published value is cited, not copied

### Web Speech API

Standard · `WebSpeechApi`

- Maintained by: trame
- Source: W3C Community Group, Web Speech API: § 4.2.9 SpeechSynthesisErrorEvent
- Address: https://webaudio.github.io/web-speech-api/#speechsynthesiserrorevent
- Constants: { canceled: { value: canceled, meaning: The utterance was taken off the queue before it started }, interrupted: { value: interrupted, meaning: The utterance was cut short by a cancel } }
- Serves: A published value is cited, not copied
