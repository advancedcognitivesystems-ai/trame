# Snapshot

*The exact state expected on 28 October 2026, without history: the values in force, without the amendments that produced them.*

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

Function · `SeededDraws` · **unknown**

- Owner: trame
- Parameters: { mulberry: algorithms.Mulberry32, hash: algorithms.MultiplicativeHash, ecma: ecmascript.EcmaScript, counts: algebra.Counts }
- Serves: Shared operations instead of literals
- Depends on: Mulberry32, Multiplicative hashing, ECMAScript, Counts

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
- Constants: { openBlock: { value: {, meaning: Opens the declarations of a rule }, closeBlock: { value: }, meaning: Closes them }, colon: { value: :, meaning: Separates a property from its value }, semicolon: { value: ;, meaning: Ends a declaration }, openParenthesis: { value: (, meaning: Opens the arguments of a function, or a condition }, closeParenthesis: { value: ), meaning: Closes them }, space: { value:  , meaning: Whitespace between the parts of a rule }, comma: { value: ,, meaning: Separates the selectors of a list (Selectors Level 4, § 4.1) }, classSelector: { value: ., meaning: Opens a class selector: the elements of that class (Selectors Level 4, § 6.6) }, descendant: { value:  , meaning: The descendant combinator: an element inside another (Selectors Level 4, § 16.1) }, width: { value: width, meaning: The width of a box (CSS Box Sizing Level 3) }, minWidth: { value: min-width, meaning: The width it does not go under }, maxWidth: { value: max-width, meaning: The width it does not go over }, percent: { value: %, meaning: A length as a share of the box that holds it }, whole: { value: 100, meaning: The whole of the box that holds it, as a share }, pixel: { value: px, meaning: A length in CSS pixels } }
- Serves: A published value is cited, not copied

### HTML

Standard · `Html`

- Maintained by: trame
- Source: WHATWG HTML: § 13.1 Writing HTML documents (the DOCTYPE, elements, start and end tags, attributes); § 3.2.6 Global attributes; § 4 The elements of HTML
- Address: https://html.spec.whatwg.org/multipage/syntax.html#writing
- Constants: { lessThan: { value: <, meaning: Opens a tag }, greaterThan: { value: >, meaning: Closes a tag }, space: { value:  , meaning: Separates the name of an element from its attributes, and each attribute from the next (ASCII whitespace) }, id: { value: id, meaning: The identifier of an element: a script finds the element by it, an address targets it }, class: { value: class, meaning: The classes of an element, which style sheets select }, hidden: { value: hidden, meaning: The element is not shown, until a script shows it }, lang: { value: lang, meaning: The language of the content }, div: { value: div, meaning: A block with no meaning of its own, which a class names (§ 4.4.15) }, span: { value: span, meaning: A run of text with no meaning of its own (§ 4.5.26) }, p: { value: p, meaning: A paragraph (§ 4.4.1) }, a: { value: a, meaning: A link, or a place that a script makes one (§ 4.5.1) }, href: { value: href, meaning: The address a link leads to (§ 4.6.2) }, mark: { value: mark, meaning: A run of text marked for the reader's attention (§ 4.5.23) }, code: { value: code, meaning: A fragment of code: an identifier, a path (§ 4.5.15) }, time: { value: time, meaning: A date, with its value for machines (§ 4.5.14) }, datetime: { value: datetime, meaning: The value of a date for machines (§ 4.5.14) }, ul: { value: ul, meaning: A list whose order does not matter (§ 4.4.7) }, li: { value: li, meaning: An item of a list (§ 4.4.8) }, dl: { value: dl, meaning: A list of names and their values (§ 4.4.9) }, dt: { value: dt, meaning: A name, in such a list (§ 4.4.10) }, dd: { value: dd, meaning: Its value (§ 4.4.11) }, table: { value: table, meaning: A table (§ 4.9.1) }, thead: { value: thead, meaning: The rows that head a table (§ 4.9.6) }, tbody: { value: tbody, meaning: The rows of its data (§ 4.9.5) }, tr: { value: tr, meaning: A row (§ 4.9.8) }, th: { value: th, meaning: A cell that heads a column (§ 4.9.10) }, td: { value: td, meaning: A cell of data (§ 4.9.9) }, pre: { value: pre, meaning: Preformatted text: its lines and spaces are kept (§ 4.4.3) }, details: { value: details, meaning: Content the reader opens (§ 4.11.1) }, summary: { value: summary, meaning: What it says when closed (§ 4.11.2) }, section: { value: section, meaning: A section of a document, with its heading (§ 4.3.3) }, article: { value: article, meaning: A part that stands on its own: a node's card (§ 4.3.2) }, figure: { value: figure, meaning: A figure, with its caption (§ 4.4.12) }, figcaption: { value: figcaption, meaning: The caption of a figure (§ 4.4.13) }, button: { value: button, meaning: A button (§ 4.10.6) }, type: { value: type, meaning: What a button does (§ 4.10.6) }, buttonType: { value: button, meaning: A button that only runs the page's script: it submits nothing (§ 4.10.6) }, tabindex: { value: tabindex, meaning: An element that the keyboard can reach (§ 6.6.3) }, focusable: { value: 0, meaning: Reached in the order of the document (§ 6.6.3) }, style: { value: style, meaning: Declarations of CSS for this element alone (§ 3.2.6) }, window: { value: window, meaning: The global object of a page's scripts (§ 7.2 The Window object) }, module: { value: module, meaning: The type of a script that is a module: deferred, it may wait at its top level (§ 4.12.1) }, b: { value: b, meaning: A run of text set apart, without more importance (§ 4.5.21) }, small: { value: small, meaning: A side comment, in smaller print (§ 4.5.4) }, h2: { value: h2, meaning: A heading of the second rank (§ 4.3.6) }, ol: { value: ol, meaning: A list whose order matters (§ 4.4.5) }, select: { value: select, meaning: A list of choices (§ 4.10.7) }, option: { value: option, meaning: A choice of a list (§ 4.10.10) }, optgroup: { value: optgroup, meaning: A group of choices, under its label (§ 4.10.9) }, input: { value: input, meaning: A field (§ 4.10.5) }, datalist: { value: datalist, meaning: The choices a field suggests (§ 4.10.8) }, label: { value: label, meaning: The label of a group of choices (§ 4.10.9) }, value: { value: value, meaning: The value of a choice (§ 4.10.10) }, selected: { value: selected, meaning: The choice that is chosen (§ 4.10.10) }, disabled: { value: disabled, meaning: A control the person cannot use (§ 4.10.18.5) }, title: { value: title, meaning: Advisory information on an element, shown as a tip (§ 3.2.6.1) }, list: { value: list, meaning: The identifier of the choices a field suggests (§ 4.10.5.3.9) }, placeholder: { value: placeholder, meaning: A hint shown in an empty field (§ 4.10.5.3.10) }, search: { value: search, meaning: The type of a field where the person searches (§ 4.10.5.1.3) }, h1: { value: h1, meaning: The heading of the first rank: the page's own (§ 4.3.6) }, h3: { value: h3, meaning: A heading of the third rank (§ 4.3.6) }, header: { value: header, meaning: What introduces a page or a section (§ 4.3.8) }, main: { value: main, meaning: The main content of the page (§ 4.4.14) }, footer: { value: footer, meaning: What closes a page or a section (§ 4.3.9) }, nav: { value: nav, meaning: A set of links or controls to move in the page (§ 4.3.4) } }
- Serves: A published value is cited, not copied

### SVG

Standard · `Svg`

- Maintained by: trame
- Source: W3C, Scalable Vector Graphics (SVG) 2: § 1.3 the SVG namespace, § 5 document structure (svg, g), § 9 basic shapes (rect), § 9.3 paths, § 13 painting
- Address: https://www.w3.org/TR/SVG2/
- Constants: { svg: { value: svg, meaning: A drawing, inline in the page (§ 5.1.2) }, group: { value: g, meaning: A group of shapes that share their painting (§ 5.2.1) }, rect: { value: rect, meaning: A rectangle (§ 10.2) }, path: { value: path, meaning: A path (§ 9.3) }, width: { value: width, meaning: The width of the drawing or of a rectangle }, height: { value: height, meaning: Its height }, viewBox: { value: viewBox, meaning: The coordinates the drawing is made in: x, y, width, height (§ 8.2) }, x: { value: x, meaning: The left of a rectangle }, y: { value: y, meaning: Its top }, rx: { value: rx, meaning: The radius of a rectangle's corners }, d: { value: d, meaning: The data of a path: its commands }, fill: { value: fill, meaning: What paints the inside of a shape (§ 13.2) }, stroke: { value: stroke, meaning: What paints its outline (§ 13.3) }, strokeWidth: { value: stroke-width, meaning: The width of the outline }, strokeLinecap: { value: stroke-linecap, meaning: The shape of the ends of an open line }, round: { value: round, meaning: Round ends }, none: { value: none, meaning: Paints nothing }, separator: { value:  , meaning: Separates the numbers of a list (§ 4.3: whitespace) }, text: { value: text, meaning: A line of text (§ 11.2) }, line: { value: line, meaning: A segment (§ 10.5) }, circle: { value: circle, meaning: A circle (§ 10.3) }, title: { value: title, meaning: What a shape is, said to whoever points at it (§ 5.9) }, defs: { value: defs, meaning: Definitions that other shapes refer to (§ 5.3) }, marker: { value: marker, meaning: A shape drawn at the end of a path: an arrowhead (§ 13.7) }, cx: { value: cx, meaning: The centre of a circle, across }, cy: { value: cy, meaning: Down }, r: { value: r, meaning: Its radius }, x1: { value: x1, meaning: The start of a segment, across }, y1: { value: y1, meaning: Down }, x2: { value: x2, meaning: Its end, across }, y2: { value: y2, meaning: Down }, transform: { value: transform, meaning: Moves a group (§ 8.5) }, translate: { value: translate, meaning: The move of a group: across, then down }, textAnchor: { value: text-anchor, meaning: Which point of a text its position gives (§ 11.10) }, middle: { value: middle, meaning: The middle of the text }, markerEnd: { value: marker-end, meaning: The marker drawn at the end of a path }, refX: { value: refX, meaning: The point of a marker placed on the end of the path, across }, refY: { value: refY, meaning: Down }, markerWidth: { value: markerWidth, meaning: The width a marker is drawn at }, markerHeight: { value: markerHeight, meaning: Its height }, orient: { value: orient, meaning: How a marker turns with the path }, autoStartReverse: { value: auto-start-reverse, meaning: Along the path, and the other way at its start }, strokeDasharray: { value: stroke-dasharray, meaning: The dashes of an outline }, opacity: { value: opacity, meaning: How opaque a shape is }, reference: { value: url(#, meaning: Opens a reference to an element of the page by its identifier (a marker) }, referenceEnd: { value: ), meaning: Closes it }, openArguments: { value: (, meaning: Opens the numbers of a transform }, closeArguments: { value: ), meaning: Closes them }, comma: { value: ,, meaning: Separates two numbers of a pair }, namespace: { value: http://www.w3.org/2000/svg, meaning: The namespace of SVG's elements: a script creates them in it (§ 1.3) } }
- Serves: A published value is cited, not copied

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

## Standard library · Obligations

### The decisions a shipment applies hold

Requirement · `Applied` · **held**

- Refines: Rules applied, not written again

### The artefacts a shipment ships are checked

Requirement · `Checked` · **held**

- Refines: Rules applied, not written again

### The data a shipment carries is reviewed

Requirement · `Reviewed` · **held**

- Refines: Rules applied, not written again

### The project's rules hold

Requirement · `Ruled` · **held**

- Refines: Rules applied, not written again

### The packages a shipment uses are safe

Requirement · `Safe` · **held**

- Refines: Rules applied, not written again

### The product a shipment serves holds

Requirement · `Served` · **held**

- Refines: Rules applied, not written again

### The code a shipment ships is verified

Requirement · `Verified` · **held**

- Refines: Rules applied, not written again

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

## Standard library · Design patterns

### Abstract Factory

Design pattern · `AbstractFactory` · **unknown**

- Maintained by: trame
- Source: Gamma et al., Design Patterns (1994), Abstract Factory
- Requires of a choice: { family: true }
- Serves: Known designs, named

### Adapter

Design pattern · `Adapter` · **unknown**

- Maintained by: trame
- Source: A. Cockburn, Hexagonal architecture (ports and adapters), 2005; Gamma et al., Design Patterns (1994), Adapter
- Address: https://alistair.cockburn.us/hexagonal-architecture/
- Requires of a choice: { platform: true }
- Serves: Known designs, named

### Bridge

Design pattern · `Bridge` · **unknown**

- Maintained by: trame
- Source: Gamma et al., Design Patterns (1994), Bridge
- Requires of a choice: { layered: true }
- Serves: Known designs, named

### Repository

Design pattern · `Repository` · **unknown**

- Maintained by: trame
- Source: M. Fowler, Patterns of Enterprise Application Architecture (2002), Repository (E. Hieatt, R. Mee)
- Address: https://martinfowler.com/eaaCatalog/repository.html
- Requires of a choice: { pure: true, layered: true }
- Serves: Known designs, named

### Strategy

Design pattern · `Strategy` · **unknown**

- Maintained by: trame
- Source: E. Gamma, R. Helm, R. Johnson, J. Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software (1994), Strategy
- Requires of a choice: { pure: true }
- Serves: Known designs, named

## Standard library · Platform

### The device's services, as ports

Architecture decision · `DeviceAsPorts` · **unknown**

- Decided by: trame
- Context: An app that runs in a browser, then on phones, reaches the same services through different platforms; and a scenario must run without any of them.
- Consequences: Each service is a port with its effects; the browser's realizations are written here once, the phones' will be too; a product binds them by environment. A browser that refuses a service (no storage, no voice, no wake lock) leaves the product working without it.
- Rejected: Each product calling the browser itself, every product would write the same guards, and none could run in a scenario
- Serves: Ports of the platform, realized once
- Applied by: Preferences, The browser keeps the preferences, Preferences kept in memory, Languages of the device, The browser's languages, Speech, The browser's voice, A voice that writes down, What was said, Screen kept awake, The browser keeps the screen awake, The screen kept awake, in memory, Whether the screen is kept awake, Animation frames, The browser's frames, Frames turned by hand, Time turned by hand

### A component in a browser starts with its page

Architecture decision · `StartsWithThePage` · **unknown**

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
- Declared effects: read, write

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

Function · `AwakeInMemory` · **unknown**

- Owner: trame
- Implements: Screen kept awake, Whether the screen is kept awake

### Frames turned by hand

Function · `FramesByHand` · **unknown**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Implements: Animation frames, Time turned by hand
- Depends on: Counts

### Preferences kept in memory

Function · `MemoryPreferences` · **unknown**

- Owner: trame
- Implements: Preferences

### A voice that writes down

Function · `WrittenSpeech` · **unknown**

- Owner: trame
- Implements: Speech, What was said

### The browser's frames

Implementation · `BrowserFrames`

- Owner: trame
- Implements: Animation frames

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

### A published value is cited, not copied

Goal · `CitedNotCopied`

### Known designs, named

Goal · `KnownDesigns`

### Ports of the platform, realized once

Goal · `RealizedOnce`

### Shared operations instead of literals

Goal · `SharedOperations`

### Rules applied, not written again

Goal · `SharedRules`

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

### Version 0.2.0

Release · `R0_2_0`

- Released by: trame
- Version: 0.2.0
- Released on: 2026-10-26
- What changes: The device's services as ports: preferences, the device's languages, a voice, the screen kept awake, with the browser's realizations and, for scenarios, realizations kept in memory; the Screen Wake Lock API
- Fingerprint: 29b96f4135a8d58c
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

### Version 0.3.0

Release · `R0_3_0`

- Released by: trame
- Version: 0.3.0
- Released on: 2026-10-26
- What changes: HTML and CSS: the HTML, WAI-ARIA, SVG and CSS standards move here from Trame, with the elements a page is made of (headings, header, main, footer, nav)
- Fingerprint: f69c88114c3c885d
- Language: shared
- Serves: A published value is cited, not copied, Known designs, named, Ports of the platform, realized once, Shared operations instead of literals

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

## Standard library · Rules

### As many links as asked

Requirement · `Linked` · **held**

- Refines: Rules applied, not written again

### A node never reaches what it must not

Requirement · `NeverReaches` · **held**

- Refines: Rules applied, not written again

### A node reaches what it must

Requirement · `Reaches` · **held**

- Refines: Rules applied, not written again

### Effects a node may not have

Requirement · `WithoutEffects` · **held**

- Refines: Rules applied, not written again

### Words of a vocabulary

Requirement · `WordsOf` · **held**

- Refines: Rules applied, not written again

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
- Source: Node.js documentation: stream.Readable ('data', 'close', 'error'), ChildProcess ('exit', 'close'), process ('unhandledRejection')
- Address: https://nodejs.org/api/events.html
- Constants: { data: { value: data, meaning: A readable stream gives a chunk of what it reads }, close: { value: close, meaning: A stream, a request or a child process is closed: nothing more will come }, exit: { value: exit, meaning: A child process ended, with its exit code }, error: { value: error, meaning: A stream failed }, unhandledRejection: { value: unhandledRejection, meaning: A promise was rejected and nothing waited for it } }
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
- Source: npm documentation: npm audit, npm outdated (--json)
- Address: https://docs.npmjs.com/cli/commands/npm-audit
- Constants: { command: { value: npm, meaning: The command line of npm }, audit: { value: audit, meaning: Asks the registry for the known vulnerabilities of the packages installed }, outdated: { value: outdated, meaning: Lists the packages installed that are not at their latest version }, json: { value: --json, meaning: Answers in JSON rather than in a table } }
- Serves: A published value is cited, not copied

### npm's manifest

Standard · `NpmManifest`

- Maintained by: trame
- Source: npm documentation: package.json (dependencies); Node.js documentation, Packages: "imports"
- Address: https://docs.npmjs.com/cli/configuring-npm/package-json#dependencies
- Constants: { dependencies: { value: dependencies, meaning: The packages the project needs to run, by name, each at its version }, imports: { value: imports, meaning: The package's import map: each specifier opened by # and where it leads } }
- Serves: A published value is cited, not copied

### POSIX signals and errors

Standard · `Posix`

- Maintained by: trame
- Source: POSIX.1-2017, Base Definitions: <signal.h> (SIGINT, SIGTERM), <errno.h> (EPIPE), § 4.13 Pathname Resolution (dot)
- Address: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/signal.h.html
- Constants: { currentDirectory: { value: ., meaning: The directory a path starts from: a command in it is run as ./name }, interrupt: { value: SIGINT, meaning: The interruption asked from the terminal (Ctrl-C) }, terminate: { value: SIGTERM, meaning: The polite request to end }, brokenPipe: { value: EPIPE, meaning: Writing to a pipe that nobody reads any more (the output piped into head, say) } }
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
- Constants: { program: { value: diff, meaning: The program that compares }, options: { value: -ru, meaning: Recursively, in the unified format }, same: { value: 0, meaning: The exit status when nothing differs }, differ: { value: 1, meaning: The exit status when something differs }, header: { value: diff , meaning: Opens the differences of a pair of files }, onlyIn: { value: Only in , meaning: A file that only one tree holds }, oldFile: { value: ---, meaning: Names the first file of a pair }, newFile: { value: +++, meaning: Names the second file of a pair }, removed: { value: -, meaning: Begins a line of the first file that the second does not have }, added: { value: +, meaning: Begins a line of the second file that the first does not have } }
- Serves: A published value is cited, not copied

## Standard library · Tooling

### Playwright's API

Standard · `PlaywrightApi`

- Maintained by: trame
- Source: Playwright documentation, class Page, event "pageerror"
- Address: https://playwright.dev/docs/api/class-page#page-event-page-error
- Constants: { pageError: { value: pageerror, meaning: An error the page raised and did not catch } }
- Serves: A published value is cited, not copied

### Chromium without a screen

Decision · `HeadlessChromium`

- Decided by: trame
- Value: { args: --use-gl=angle, --use-angle=swiftshader, --enable-unsafe-swiftshader, --ignore-gpu-blocklist, width: 420, height: 900 }
- Rejected: Chromium as it starts, without a graphics card, WebGL fails and a page that draws in three dimensions shows nothing

### The SDLC's tooling is realized once

Architecture decision · `ToolingAsPorts` · **held**

- Decided by: trame
- Context: The code that builds, checks and deploys a product is code like the product's: written once, tested before it runs.
- Consequences: A check opens the delivered page through HeadlessBrowser, a deployment copies through Files; scenarios play them with the realizations kept in memory.
- Serves: Ports of the platform, realized once
- Applied by: Commands of a program, Node's command line, Project files, Files written, The machine's files, Files kept in memory, Headless browser, Chromium, driven by Playwright, Browser script, A browser kept in memory

### Browser script

Port · `BrowserScripted`

- Owner: trame
- Declared effects: 

### Project files

Port · `Files`

- Owner: trame
- Declared effects: read, write

### Files written

Port · `FilesKept`

- Owner: trame
- Declared effects: 

### Headless browser

Port · `HeadlessBrowser`

- Owner: trame
- Declared effects: process, display, time

### Commands of a program

Port · `ProgramCommands`

- Owner: trame
- Declared effects: terminal

### A browser kept in memory

Function · `BrowserInMemory` · **unknown**

- Owner: trame
- Parameters: { counts: algebra.Counts }
- Implements: Headless browser, Browser script
- Depends on: Counts

### Files kept in memory

Function · `FilesInMemory` · **unknown**

- Owner: trame
- Parameters: { draws: algorithms.SeededDraws, texts: algebra.Texts }
- Implements: Project files, Files written
- Depends on: Seeded draws, Texts

### The machine's files

Implementation · `MachineFiles`

- Owner: trame
- Parameters: { sha: algorithms.Sha256, encodings: system.NodeEncodings }
- Implements: Project files
- Depends on: SHA-256, Node.js character encodings

### Node's command line

Implementation · `NodeProgramCommands`

- Owner: trame
- Parameters: { argv: system.NodeArguments, exit: system.ExitStatus, values: algebra.ValueTypes }
- Implements: Commands of a program
- Depends on: Node.js process arguments, Exit status, Types of values

### Chromium, driven by Playwright

Implementation · `PlaywrightBrowser` · **held**

- Owner: trame
- Parameters: { chromium: tooling.HeadlessChromium, api: tooling.PlaywrightApi, counts: algebra.Counts }
- Implements: Headless browser
- Uses: Playwright
- Depends on: Chromium without a screen, Playwright's API, Counts

### Playwright

Package · `PlaywrightPackage` · **held**

- Owner: trame
- Name: playwright
- Version: 1.56.0
- In the registry: https://www.npmjs.com/package/playwright
- Once installed: npx playwright install --with-deps chromium

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
- Source: IANA media types registry; RFC 6838; RFC 8259, § 11 (application/json); WHATWG HTML (text/event-stream)
- Address: https://www.iana.org/assignments/media-types/
- Constants: { html: { value: text/html; charset=utf-8, meaning: An HTML page in UTF-8 }, json: { value: application/json, meaning: A body written in JSON }, jsonUtf8: { value: application/json; charset=utf-8, meaning: The same, its encoding said: UTF-8 }, eventStream: { value: text/event-stream, meaning: A stream of events sent by the server } }
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
