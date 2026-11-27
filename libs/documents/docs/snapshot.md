# Snapshot

*The exact state expected on 27 November 2026, without history: the values in force, without the amendments that produced them.*

## Documents · Appearance

### Palette

Decision · `Palette`

- Decided by: trame
- Value: { light: { bg: #f3f5f6, panel: #ffffff, ink: #17202a, muted: #5a6672, line: #d9e0e5, accent: #34509a, accent-soft: #e5ebf7, ok: #26734a, ok-soft: #e1f1e7, warn: #9a6200, warn-soft: #fbf0d9, bad: #ad2a22, bad-soft: #f9e3e1, unk: #65707c, unk-soft: #e9edf0, term-bg: #121820, term-ink: #d8dee5, term-dim: #7f8b97 }, dark: { bg: #0e1217, panel: #151b22, ink: #e4e9ee, muted: #98a3ae, line: #29323c, accent: #93abef, accent-soft: #1e2a44, ok: #7fd19b, ok-soft: #173325, warn: #f2c063, warn-soft: #3a2d12, bad: #f08a80, bad-soft: #3d1c1a, unk: #a5afb9, unk-soft: #222a33, term-bg: #0a0e13, term-ink: #d8dee5, term-dim: #7f8b97 }, statuses: { held: { fill: ok-soft, stroke: ok }, blocked: { fill: warn-soft, stroke: warn }, violated: { fill: bad-soft, stroke: bad }, unknown: { fill: unk-soft, stroke: unk }, neutral: { fill: panel, stroke: muted } }, ink: ink }

## Documents · HTML

### Escaped text

Syntax element · `EscapedText` · **held**

- Owner: trame
- Section: 13.1.4 Character references
- Address: https://html.spec.whatwg.org/multipage/syntax.html#character-references
- Marks: { ampersand: { value: &, meaning: Opens a character reference }, quotationMark: { value: ", meaning: Closes the value of an attribute }, amp: { value: &amp;, meaning: The reference written for an ampersand }, lt: { value: &lt;, meaning: The reference written for a less-than sign }, gt: { value: &gt;, meaning: The reference written for a greater-than sign }, quot: { value: &quot;, meaning: The reference written for a quotation mark } }
- Parameters: { standard: std/html.Html }
- Examples: { input: a < b & "c" > d, output: a &lt; b &amp; &quot;c&quot; &gt; d }, { input: &lt;, output: &amp;lt; }
- Read as: { before: <p title=", after: "></p> }

### Attributes

Syntax element · `HtmlAttributes` · **held**

- Owner: trame
- Section: 13.1.2.3 Attributes
- Address: https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
- Marks: { equals: { value: =, meaning: Separates the name of an attribute from its value }, quote: { value: ", meaning: Surrounds the value of an attribute } }
- Parameters: { standard: std/html.Html, texts: std/algebra.Texts }
- Examples: { input: { id: Goal }, output:  id="Goal" }, { input: { class: banner, hidden: true }, output:  class="banner" hidden }
- Read as: { before: <a, after: > }

### HTML element

Syntax element · `HtmlElement` · **held**

- Owner: trame
- Section: 13.1.2 Elements
- Address: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Marks: {  }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag }
- Examples: { input: summary, {  }, The code, output: <summary>The code</summary> }
- Depends on: Start tag, End tag

### End tag

Syntax element · `HtmlEndTag` · **held**

- Owner: trame
- Section: 13.1.2.2 End tags
- Address: https://html.spec.whatwg.org/multipage/syntax.html#end-tags
- Marks: { slash: { value: /, meaning: After the less-than sign: the tag closes the element } }
- Parameters: { standard: std/html.Html }
- Examples: { input: details, output: </details> }
- Read as: { before: <details>, after:  }

### Heading of a rank

Syntax element · `HtmlHeading` · **held**

- Owner: trame
- Section: 4.3.6 The h1, h2, h3, h4, h5, and h6 elements
- Address: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
- Marks: { prefix: { value: h, meaning: Before the rank of a heading: the name of its element } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement }
- Examples: { input: 2, {  }, Cards, output: <h2>Cards</h2> }
- Depends on: HTML element

### Start tag

Syntax element · `HtmlStartTag` · **held**

- Owner: trame
- Section: 13.1.2.1 Start tags
- Address: https://html.spec.whatwg.org/multipage/syntax.html#start-tags
- Marks: {  }
- Parameters: { standard: std/html.Html, attributes: html.HtmlAttributes }
- Examples: { input: a, { id: Goal }, output: <a id="Goal"> }
- Depends on: Attributes

### Self-closing tag

Syntax element · `SelfClosingTag` · **held**

- Owner: trame
- Section: 13.1.2.1 Start tags (the self-closing flag of foreign elements)
- Address: https://html.spec.whatwg.org/multipage/syntax.html#start-tags
- Marks: { slash: { value: /, meaning: Before the greater-than sign: the element has no content and no end tag } }
- Parameters: { standard: std/html.Html, attributes: html.HtmlAttributes }
- Examples: { input: path, { d: M7 5v16 }, output: <path d="M7 5v16"/> }
- Depends on: Attributes

## Documents · Language

### How a number is written

Decision · `NumberDisplay`

- Decided by: trame
- Value: { base: 10, decimals: 2 }

### The language of the library's words

Decision · `WordsLanguage`

- Decided by: trame
- Value: { tag: en-GB }
- Rejected: std's language of its commands, a choice of std's, which may change for std's reasons

### The language of the documents

Port · `DocumentLanguage`

- Owner: trame
- Declared effects: 

### Dates

Function · `Dates` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Lists

Function · `Lists` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Punctuation

Function · `Punctuation` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Values with their units

Function · `Units` · **held**

- Owner: trame
- Parameters: { display: language.NumberDisplay, counts: std/algebra.Counts, values: std/algebra.ValueTypes }
- Serves: Documents rendered once, for every project
- Depends on: How a number is written

## Documents · Markdown

### CommonMark

Standard · `CommonMark`

- Maintained by: trame
- Source: CommonMark Spec 0.31.2 (2024)
- Address: https://spec.commonmark.org/0.31.2/
- Constants: { endOfLine: { value: 
, meaning: Ends a line (§ 2.1: a line feed, U+000A) }, space: { value:  , meaning: Separates a mark from what it introduces (§ 2.1: U+0020) }, backtick: { value: `, meaning: Delimits code, inline or in a block (§ 4.5, § 6.1) }, asterisk: { value: *, meaning: Delimits emphasis (§ 6.2) } }

### GitHub Flavored Markdown

Standard · `Gfm`

- Maintained by: trame
- Source: GitHub Flavored Markdown Spec 0.29-gfm (2019)
- Address: https://github.github.com/gfm/
- Constants: { pipe: { value: |, meaning: Separates the cells of a table, and borders each row (§ 4.10) } }

### Anchor

Syntax element · `Anchor` · **held**

- Owner: trame
- Section: 4.5.1 The a element; 3.2.6 The id attribute
- Address: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
- Marks: { tag: { value: a, meaning: The link element, here without content }, attribute: { value: id, meaning: The identifier that the fragment of an address targets } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: Goal, output: <a id="Goal"></a> }
- Depends on: HTML element

### Backtick string

Syntax element · `BacktickString` · **held**

- Owner: trame
- Section: 6.1 Code spans (backtick string); 4.5 Fenced code blocks
- Address: https://spec.commonmark.org/0.31.2/#backtick-string
- Marks: {  }
- Parameters: { standard: markdown.CommonMark, counts: std/algebra.Counts }
- Examples: { input: trame.json, 1, output: ` }, { input: a`b, 1, output: `` }, { input: const x = 1, 3, output: ``` }, { input: ```ts
x
```, 3, output: ```` }
- Defined by: CommonMark
- Depends on: CommonMark

### Blank line

Syntax element · `BlankLine` · **held**

- Owner: trame
- Section: 4.9 Blank lines
- Address: https://spec.commonmark.org/0.31.2/#blank-lines
- Marks: { blank: { value: , meaning: A line containing no characters, refines: { node: std/algebra.Texts, name: empty } } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: # Title, Text, More text, output: # Title, , Text, More text,  }, { input: a, false, b, output: a, , b,  }
- Defined by: CommonMark
- Depends on: CommonMark

### Block quote

Syntax element · `BlockQuote` · **held**

- Owner: trame
- Section: 5.1 Block quotes
- Address: https://spec.commonmark.org/0.31.2/#block-quotes
- Marks: { marker: { value: >, meaning: Marks a line of a block quote } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: All of them apply., output: > All of them apply. }
- Defined by: CommonMark
- Depends on: CommonMark

### Sequence of blocks

Syntax element · `Blocks` · **held**

- Owner: trame
- Section: 4.9 Blank lines
- Address: https://spec.commonmark.org/0.31.2/#blank-lines
- Marks: { maxBlankLines: { value: 1, meaning: The number of blank lines that separate two blocks, at most } }
- Parameters: { standard: markdown.CommonMark, blankLine: markdown.BlankLine, counts: std/algebra.Counts }
- Examples: { input: # Title, , Text, output: # Title

Text
 }, { input: a, b, output: a
b
 }
- Defined by: CommonMark
- Depends on: CommonMark, Blank line

### Code block

Syntax element · `CodeBlock` · **held**

- Owner: trame
- Section: 4.5 Fenced code blocks
- Address: https://spec.commonmark.org/0.31.2/#fenced-code-blocks
- Marks: { length: { value: 3, meaning: A fence has at least three backticks } }
- Parameters: { standard: markdown.CommonMark, backtickString: markdown.BacktickString }
- Examples: { input: ts, const x = 1, output: ```ts, const x = 1, ``` }, { input: md, ```ts, x, ```, output: ````md, ```ts, x, ```, ```` }
- Defined by: CommonMark
- Depends on: CommonMark, Backtick string

### Code span

Syntax element · `CodeSpan` · **held**

- Owner: trame
- Section: 6.1 Code spans
- Address: https://spec.commonmark.org/0.31.2/#code-spans
- Marks: { minLength: { value: 1, meaning: A single backtick is enough, if the text contains none } }
- Parameters: { standard: markdown.CommonMark, backtickString: markdown.BacktickString, texts: std/algebra.Texts }
- Examples: { input: trame.json, output: `trame.json` }, { input: a`b, output: ``a`b`` }, { input: `written: ${…}`, output: `` `written: ${…}` `` }, { input:  x , output: `  x  ` }
- Defined by: CommonMark
- Depends on: CommonMark, Backtick string

### Collapsible block

Syntax element · `Details` · **held**

- Owner: trame
- Section: 4.11.1 The details element; 4.11.2 The summary element
- Address: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
- Marks: { tag: { value: details, meaning: The collapsible block }, summary: { value: summary, meaning: Its summary, always visible } }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag, element: html.HtmlElement, blankLine: markdown.BlankLine }
- Examples: { input: The code, x, output: <details><summary>The code</summary>, , x, , </details> }
- Depends on: Start tag, End tag, HTML element, Blank line

### Emphasis

Syntax element · `Emphasis` · **held**

- Owner: trame
- Section: 6.2 Emphasis
- Address: https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis
- Marks: { count: { value: 1, meaning: One asterisk on each side } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: The graph in force, output: *The graph in force* }
- Defined by: CommonMark
- Depends on: CommonMark

### Heading

Syntax element · `Heading` · **held**

- Owner: trame
- Section: 4.2 ATX headings
- Address: https://spec.commonmark.org/0.31.2/#atx-headings
- Marks: { hash: { value: #, meaning: Repeated as many times as the level of the heading }, maxLevel: { value: 6, meaning: The deepest level: beyond six hash signs, the line is no longer a heading } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: 2, Goals, output: ## Goals }, { input: 9, Very deep, output: ###### Very deep }
- Defined by: CommonMark
- Depends on: CommonMark

### Link

Syntax element · `Link` · **held**

- Owner: trame
- Section: 6.3 Links
- Address: https://spec.commonmark.org/0.31.2/#links
- Marks: { openText: { value: [, meaning: Opens the text of the link }, closeText: { value: ], meaning: Closes the text of the link }, openDestination: { value: (, meaning: Opens the destination }, closeDestination: { value: ), meaning: Closes the destination } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: Goal, product.md#Goal, output: [Goal](product.md#Goal) }
- Defined by: CommonMark
- Depends on: CommonMark

### List item

Syntax element · `ListItem` · **held**

- Owner: trame
- Section: 5.2 List items
- Address: https://spec.commonmark.org/0.31.2/#list-items
- Marks: { bullet: { value: -, meaning: Marks an item of an unordered list } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: Owner: trame, output: - Owner: trame }
- Defined by: CommonMark
- Depends on: CommonMark

### Relative reference

Syntax element · `RelativeReference` · **held**

- Owner: trame
- Section: 4.2 Relative reference; 3.5 Fragment; 5.2.4 Remove dot segments
- Address: https://www.rfc-editor.org/rfc/rfc3986#section-4.2
- Marks: { segment: { value: /, meaning: Separates the segments of a path }, fragment: { value: #, meaning: Introduces the fragment: the anchor, in the target document }, parent: { value: .., meaning: The segment that goes up one level, out of a folder } }
- Parameters: { standard: std/web.Uri, texts: std/algebra.Texts, sequences: std/algebra.Sequences, counts: std/algebra.Counts }
- Examples: { input: docs/index.md, docs/product.md, Goal, output: product.md#Goal }, { input: docs/index.md, none, Graph, output: #Graph }, { input: docs/index.md, docs/product.md, output: product.md }, { input: docs/index.md, std/docs/algebra.md, Counts, output: ../std/docs/algebra.md#Counts }, { input: docs/index.md, ../std/docs/index.md, output: ../../std/docs/index.md }, { input: docs/index.md, src/product.ts, output: ../src/product.ts }

### Small text

Syntax element · `Small` · **held**

- Owner: trame
- Section: 4.5.4 The small element
- Address: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element
- Marks: { tag: { value: small, meaning: A side note, in small print } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement }
- Examples: { input: Decision, output: <small>Decision</small> }
- Depends on: HTML element

### Strong emphasis

Syntax element · `StrongEmphasis` · **held**

- Owner: trame
- Section: 6.2 Strong emphasis
- Address: https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis
- Marks: { count: { value: 2, meaning: Two asterisks on each side } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: held, output: **held** }
- Defined by: CommonMark
- Depends on: CommonMark

### Table

Syntax element · `Table` · **held**

- Owner: trame
- Section: 4.10 Tables
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: {  }
- Parameters: { standard: markdown.Gfm, row: markdown.TableRow, delimiterRow: markdown.TableDelimiterRow }
- Examples: { input: Name, Role, Ada, author, output: | Name | Role |, |---|---|, | Ada | author | }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, Table row, Delimiter row

### Table cell

Syntax element · `TableCell` · **held**

- Owner: trame
- Section: 4.10 Tables: a pipe in a cell
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: { escape: { value: \, meaning: Comes before a pipe that belongs to the content } }
- Parameters: { standard: markdown.Gfm, commonMark: markdown.CommonMark }
- Examples: { input: a | b
c, output: a \| b c }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, CommonMark

### Delimiter row

Syntax element · `TableDelimiterRow` · **held**

- Owner: trame
- Section: 4.10 Tables: the delimiter row
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: { dash: { value: -, meaning: Fills the delimiter cell of a column }, length: { value: 3, meaning: The number of dashes per column } }
- Parameters: { standard: markdown.Gfm }
- Examples: { input: 3, output: |---|---|---| }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown

### Table row

Syntax element · `TableRow` · **held**

- Owner: trame
- Section: 4.10 Tables: a row
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: {  }
- Parameters: { standard: markdown.Gfm, commonMark: markdown.CommonMark }
- Examples: { input: Name, Role, output: | Name | Role | }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, CommonMark

## Documents · Mermaid

### Mermaid

Standard · `Mermaid`

- Maintained by: trame
- Source: Mermaid 11: flowcharts and Gantt charts
- Address: https://mermaid.js.org/intro/syntax-reference.html
- Constants: { indent: { value:   , meaning: Shifts a statement inside its block: Mermaid ignores it, it helps reading }, space: { value:  , meaning: Separates a keyword from what it introduces }, quote: { value: ", meaning: Surrounds a label }, language: { value: mermaid, meaning: The name of the language, in the info string of a code block that carries a diagram (GitHub, GitLab) } }

### Class definition

Syntax element · `ClassDefinition` · **held**

- Owner: trame
- Section: Flowcharts: classes
- Address: https://mermaid.js.org/syntax/flowchart.html#classes
- Marks: { keyword: { value: classDef, meaning: Defines a class } }
- Parameters: { standard: mermaid.Mermaid, styleProperties: mermaid.StyleProperties }
- Examples: { input: held, { fill: #e1f1e7, stroke: #26734a, textColour: #17202a }, output: classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a }
- Defined by: Mermaid
- Depends on: Mermaid, Style properties

### Flowchart

Syntax element · `Flowchart` · **held**

- Owner: trame
- Section: Flowcharts: direction
- Address: https://mermaid.js.org/syntax/flowchart.html#direction
- Marks: { keyword: { value: flowchart, meaning: Opens a flowchart }, down: { value: TB, meaning: From top to bottom }, right: { value: LR, meaning: From left to right }, up: { value: BT, meaning: From bottom to top }, left: { value: RL, meaning: From right to left } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: down, n0 --> n1, output: flowchart TB,   n0 --> n1 }
- Defined by: Mermaid
- Depends on: Mermaid

### Gantt chart

Syntax element · `Gantt` · **held**

- Owner: trame
- Section: Gantt: syntax, date format, axis format
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { keyword: { value: gantt, meaning: Opens a Gantt chart }, dateFormat: { value: dateFormat, meaning: The format of the dates given to the tasks }, axisFormat: { value: axisFormat, meaning: The format of the dates on the axis }, title: { value: title, meaning: The title of the chart } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: YYYY-MM-DD, %d.%m, Around 17 October 2026, section Deadlines, output: gantt,   dateFormat YYYY-MM-DD,   axisFormat %d.%m,   title Around 17 October 2026,   section Deadlines }
- Defined by: Mermaid
- Depends on: Mermaid

### Name in a Gantt chart

Syntax element · `GanttName` · **held**

- Owner: trame
- Section: Gantt: syntax (the name of a task comes before the colon)
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { colon: { value: :, meaning: Separates a name from its data: a name cannot contain one } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: Review: committee, output: Review  committee }
- Defined by: Mermaid
- Depends on: Mermaid

### Section

Syntax element · `GanttSection` · **held**

- Owner: trame
- Section: Gantt: sections
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { keyword: { value: section, meaning: Opens a section } }
- Parameters: { standard: mermaid.Mermaid, name: mermaid.GanttName }
- Examples: { input: Period: free, In force : 2026-01-01, 2026-12-31, output: section Period  free,   In force : 2026-01-01, 2026-12-31 }
- Defined by: Mermaid
- Depends on: Mermaid, Name in a Gantt chart

### Task

Syntax element · `GanttTask` · **held**

- Owner: trame
- Section: Gantt: task syntax
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { colon: { value: :, meaning: Separates the name of the task from its data }, comma: { value: ,, meaning: Separates the data } }
- Parameters: { standard: mermaid.Mermaid, name: mermaid.GanttName }
- Examples: { input: In force, 2026-01-01, 2026-12-31, output: In force : 2026-01-01, 2026-12-31 }
- Defined by: Mermaid
- Depends on: Mermaid, Name in a Gantt chart

### Label

Syntax element · `MermaidLabel` · **held**

- Owner: trame
- Section: Flowcharts: entity codes to escape characters
- Address: https://mermaid.js.org/syntax/flowchart.html#entity-codes-to-escape-characters
- Marks: { entity: { value: #quot;, meaning: Replaces a quotation mark in a label } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: The "graph", output: The #quot;graph#quot; }
- Defined by: Mermaid
- Depends on: Mermaid

### Link

Syntax element · `MermaidLink` · **held**

- Owner: trame
- Section: Flowcharts: links between nodes
- Address: https://mermaid.js.org/syntax/flowchart.html#links-between-nodes
- Marks: { solid: { value: -->, meaning: Solid stroke, with an arrowhead }, dotted: { value: -.->, meaning: Dotted stroke, with an arrowhead }, dottedOpen: { value: -.-, meaning: Dotted stroke, without an arrowhead }, thick: { value: ==>, meaning: Thick stroke, with an arrowhead }, bar: { value: |, meaning: Surrounds the text of the link } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: n0, n1, dotted, Depends on, output: n0 -.->|Depends on| n1 }
- Defined by: Mermaid
- Depends on: Mermaid, Label

### Node

Syntax element · `MermaidNode` · **held**

- Owner: trame
- Section: Flowcharts: a node with text; styling: classes
- Address: https://mermaid.js.org/syntax/flowchart.html#a-node-with-text
- Marks: { open: { value: [, meaning: Opens the rectangle shape }, close: { value: ], meaning: Closes the rectangle shape }, lineBreak: { value: <br/>, meaning: Starts a new line in a label }, classMark: { value: :::, meaning: Attaches a class to the node } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: n0, Palette, <small>Decision</small>, held, output: n0["Palette<br/><small>Decision</small>"]:::held }
- Defined by: Mermaid
- Depends on: Mermaid, Label

### Milestone

Syntax element · `Milestone` · **held**

- Owner: trame
- Section: Gantt: milestones
- Address: https://mermaid.js.org/syntax/gantt.html#milestones
- Marks: { tag: { value: milestone, meaning: Makes the task a milestone }, duration: { value: 0d, meaning: No duration } }
- Parameters: { standard: mermaid.Mermaid, ganttTask: mermaid.GanttTask }
- Examples: { input: Review, 2026-11-01, output: Review : milestone, 2026-11-01, 0d }
- Defined by: Mermaid
- Depends on: Mermaid, Task

### Node style

Syntax element · `NodeStyle` · **held**

- Owner: trame
- Section: Flowcharts: styling a node
- Address: https://mermaid.js.org/syntax/flowchart.html#styling-a-node
- Marks: { keyword: { value: style, meaning: Gives a style to nodes }, comma: { value: ,, meaning: Separates the identifiers of the nodes } }
- Parameters: { standard: mermaid.Mermaid, styleProperties: mermaid.StyleProperties }
- Examples: { input: n1, n2, { dashes: 4 3 }, output: style n1,n2 stroke-dasharray:4 3 }
- Defined by: Mermaid
- Depends on: Mermaid, Style properties

### Style properties

Syntax element · `StyleProperties` · **held**

- Owner: trame
- Section: Flowcharts: styling and classes
- Address: https://mermaid.js.org/syntax/flowchart.html#styling-and-classes
- Marks: { colon: { value: :, meaning: Separates the name of a property from its value }, comma: { value: ,, meaning: Separates two properties }, fill: { value: fill, meaning: The background colour }, stroke: { value: stroke, meaning: The outline colour }, textColour: { value: color, meaning: The colour of the text }, dashes: { value: stroke-dasharray, meaning: A dashed outline: the length of a dash, then of the gap }, opacity: { value: opacity, meaning: The opacity, from 0 (invisible) to 1 } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: { fill: #ffffff, stroke: #5a6672 }, output: fill:#ffffff,stroke:#5a6672 }
- Defined by: Mermaid
- Depends on: Mermaid

### Subgraph

Syntax element · `Subgraph` · **held**

- Owner: trame
- Section: Flowcharts: subgraphs
- Address: https://mermaid.js.org/syntax/flowchart.html#subgraphs
- Marks: { start: { value: subgraph, meaning: Opens the group }, end: { value: end, meaning: Closes the group }, open: { value: [, meaning: Opens the title }, close: { value: ], meaning: Closes the title } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: engine, Trame · Engine, n0, output: subgraph engine["Trame · Engine"],   n0, end }
- Defined by: Mermaid
- Depends on: Mermaid, Label

## Documents · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.8.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.8.0
- Serves: Documents rendered once, for every project

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 131
- How it joins the graph: language
- Its path: ../../generations/g131
- Serves: Documents rendered once, for every project

### The people of the repository

Package · `People`

- Owner: trame
- Name: team
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../team/releases/0.1.0
- Serves: Documents rendered once, for every project

### std

Package · `StandardLibrary`

- Owner: trame
- Name: std
- Version: 0.30.0
- How it joins the graph: library
- Its path: ../../std/releases/0.30.0
- Serves: Documents rendered once, for every project

## Documents · Product

### Documents rendered once, for every project

Goal · `RenderedOnce`

- Owner: trame

## Documents · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-26
- What changes: the language of the documents: the port DocumentLanguage, with Dates, Lists, Punctuation and Units over it
- Fingerprint: 1bba695ab87a7f69
- Language: shared
- Serves: Documents rendered once, for every project

### Version 0.1.1

Release · `R0_1_1`

- Released by: trame
- Version: 0.1.1
- Released on: 2026-11-27
- What changes: its own language of words; the decision behind its choices: the documents speak the engine's language
- Fingerprint: f0c7ad53400d19af
- Language: shared
- Serves: Documents rendered once, for every project

### Version 0.2.0

Release · `R0_2_0`

- Released by: trame
- Version: 0.2.0
- Released on: 2026-11-27
- What changes: The renderers: one walk given a syntax, Markdown with Mermaid for files, text for the terminal, the common rendering and its words, the syntax elements of Markdown, Mermaid, the terminal and HTML, the format decisions and the palette
- Fingerprint: 85e5bed88e2c5ef3
- Language: shared
- Serves: Documents rendered once, for every project

## Documents · Rendering

### How Mermaid figures are drawn

Decision · `MermaidFigures`

- Decided by: trame
- Value: { idPrefix: n, directions: { layers: down, tree: down, path: right }, strokes: { computed: dottedOpen, inferred: dotted, winner: thick, support: thick, other: solid }, defaultStatus: neutral, history: { dashes: 4 3 }, inactive: { opacity: 0.5 }, gantt: { dateFormat: YYYY-MM-DD, axisFormat: %d.%m, milestones: deadline, review } }

### Places in a sentence

Decision · `SentenceSlots`

- Decided by: trame
- Value: { delimiter:   }

### Heading levels of Markdown documents

Decision · `TextRendering`

- Decided by: trame
- Value: { titleLevel: 1, sectionLevel: 2 }

### One renderer, its syntax a choice

Architecture decision · `OneRendererManySyntaxes` · **held**

- Decided by: trame
- Context: Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.
- Consequences: The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer. A project that declares a port of its own for another audience (Trame's page) gives the same renderer its syntax.
- Rejected: A renderer per format, the walk and the words repeated, and drifting; Figures in each syntax, a syntax and a way of drawing tied together, which no longer vary apart
- Serves: Documents rendered once, for every project
- Applied by: The renderer, Rendering of the files, Rendering in the terminal, Markdown writer, Plain text writer, Mermaid diagrams, Figures as text

### Figures of the documents written as files

Port · `FileFigures`

- Owner: trame
- Declared effects: 

### Syntax of the documents written as files

Port · `FileSyntax`

- Owner: trame
- Declared effects: 

### Figures of the terminal

Port · `TerminalFigures`

- Owner: trame
- Declared effects: 

### Syntax of the terminal

Port · `TerminalSyntax`

- Owner: trame
- Declared effects: 

### Common rendering

Function · `Common` · **held**

- Owner: trame
- Parameters: { values: std/algebra.ValueTypes, syntax: std/engine.ReferenceSyntax, slots: rendering.SentenceSlots, dates: language.Dates, lists: language.Lists, texts: std/algebra.Texts, messages: rendering.RenderingMessages, units: language.Units }
- Serves: Documents rendered once, for every project
- Depends on: Places in a sentence, Dates, Lists, Words of the renderers, Values with their units

### Rendering of the files

Function · `FileRendering` · **held**

- Owner: trame
- Parameters: { rendering: rendering.Rendering, syntax: rendering.FileSyntax }
- Serves: Documents rendered once, for every project
- Depends on: The renderer, Syntax of the documents written as files

### Markdown writer

Function · `MarkdownSyntax` · **held**

- Owner: trame
- Parameters: { figures: rendering.FileFigures, textRendering: rendering.TextRendering, punctuation: language.Punctuation, blocks: markdown.Blocks, heading: markdown.Heading, listItem: markdown.ListItem, blockQuote: markdown.BlockQuote, codeBlock: markdown.CodeBlock, emphasis: markdown.Emphasis, strong: markdown.StrongEmphasis, codeSpan: markdown.CodeSpan, link: markdown.Link, relativeReference: markdown.RelativeReference, tableCell: markdown.TableCell, table: markdown.Table, anchor: markdown.Anchor, details: markdown.Details, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: rendering.RenderingMessages }
- Serves: Documents rendered once, for every project
- Implements: Syntax of the documents written as files
- Depends on: Figures of the documents written as files, Heading levels of Markdown documents, Punctuation, Sequence of blocks, Heading, List item, Block quote, Code block, Emphasis, Strong emphasis, Code span, Link, Relative reference, Table cell, Table, Anchor, Collapsible block, Words of the renderers

### Mermaid diagrams

Function · `MermaidDiagrams` · **held**

- Owner: trame
- Parameters: { mermaid: mermaid.Mermaid, figures: rendering.MermaidFigures, palette: appearance.Palette, small: markdown.Small, flowchart: mermaid.Flowchart, node: mermaid.MermaidNode, subgraph: mermaid.Subgraph, link: mermaid.MermaidLink, classDefinition: mermaid.ClassDefinition, nodeStyle: mermaid.NodeStyle, gantt: mermaid.Gantt, ganttSection: mermaid.GanttSection, ganttTask: mermaid.GanttTask, milestone: mermaid.Milestone, counts: std/algebra.Counts, dates: language.Dates, messages: rendering.RenderingMessages }
- Serves: Documents rendered once, for every project
- Implements: Figures of the documents written as files
- Depends on: Mermaid, How Mermaid figures are drawn, Palette, Small text, Flowchart, Node, Subgraph, Link, Class definition, Node style, Gantt chart, Section, Task, Milestone, Dates, Words of the renderers

### Plain text writer

Function · `PlainTextSyntax` · **held**

- Owner: trame
- Parameters: { figures: rendering.TerminalFigures, layout: text.TerminalText, columns: text.TerminalColumns, punctuation: language.Punctuation, cell: text.PaddedCell, table: text.Columns, item: text.ItemLine, code: text.CodeLines, lines: text.TerminalLines, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: rendering.RenderingMessages }
- Serves: Documents rendered once, for every project
- Implements: Syntax of the terminal
- Depends on: Figures of the terminal, Terminal text, Columns in the terminal, Punctuation, Padded cell, Columns, Item line, Code lines, Lines of the terminal, Words of the renderers

### The renderer

Function · `Rendering` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, values: std/algebra.ValueTypes, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: rendering.RenderingMessages }
- Serves: Documents rendered once, for every project
- Depends on: Common rendering, Words of the renderers

### Rendering in the terminal

Function · `TerminalRendering` · **held**

- Owner: trame
- Parameters: { rendering: rendering.Rendering, syntax: rendering.TerminalSyntax }
- Serves: Documents rendered once, for every project
- Depends on: The renderer, Syntax of the terminal

### Figures as text

Function · `TextFigures` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, columns: text.TerminalColumns, punctuation: language.Punctuation, cell: text.PaddedCell, table: text.Columns, branch: text.TreeBranch, step: text.PathStep, dates: language.Dates, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: rendering.RenderingMessages }
- Serves: Documents rendered once, for every project
- Implements: Figures of the terminal
- Depends on: Common rendering, Columns in the terminal, Punctuation, Padded cell, Columns, Tree branch, Path step, Dates, Words of the renderers

### Words of the renderers

Message catalog · `RenderingMessages`

- Owner: trame
- Written in: The language of the library's words

## Documents · Samples

### The documents the scenarios render

Decision · `SampleDocuments`

- Decided by: trame
- Value: { id: index, view: index, group: summary, title: A small project, file: docs/index.md, intro: What the project is for: , { t: ref, ref: product.Fast, title: Reservations answered fast }, ., blocks: { type: summary, content: 1 goal, 1 requirement · , { t: status, status: held } }, { type: section, title: What it holds, id: holds, blocks: { type: para, content: Decided , { t: value, value: 15, unit: min, shownAs: 15 min }, , open , { t: value, value: none, open: undecided }, , by , { t: person, name: karim },  on , { t: date, date: 2026-11-26 }, , in , { t: ident, text: src/product.ts:12 }, ; see , { t: doc, id: product, title: Product },  and , { t: file, path: src/product.ts, title: its sources },  (, { t: severity, severity: warning }, ). }, { type: facts, items: { label: Owner, value: { t: person, name: karim } }, { label: Since, value: { t: date, date: 2026-10-30 } } }, { type: list, items: A goal, A requirement that refines it }, { type: table, head: Node, Status, rows: { t: ref, ref: product.Fast, title: Reservations answered fast }, { t: status, status: held } }, { type: code, lang: ts, text: export const Fast = goal({ owner: "karim" }), source: src/product.ts:3 }, { type: checks, title: Criteria of , { t: ref, ref: product.Answered, title: Answered in time }, items: { name: An answer within the minute, outcome: passed }, { name: A late answer refused, outcome: failed, detail: took 2 min } }, { type: validity, state: in force, from: 2026-10-01, until: 2026-12-31 }, { type: details, summary: The code, blocks: { type: code, lang: ts, text: const x = 1, source: src/product.ts:9 } } }, { type: issues, items: { severity: error, code: literal-in-body, what: A literal in a body, where: { ref: product.Answered, title: Answered in time }, source: src/product.ts:14, owner: karim }, { severity: error, raisedFrom: warning, what: Nothing applies it yet, where: the graph, owner: lea, effect: a wish } }, { type: figure, caption: The layers of the graph, figure: { type: graph, shape: layers, nodes: { ref: product.Fast, title: Reservations answered fast, kind: goal, kindLabel: Goal, module: product, status: held, active: true, history: false, root: true, repealed: false, open: false, layer: 0 }, { ref: product.Answered, title: Answered in time, kind: requirement, kindLabel: Requirement, module: product, status: violated, active: true, history: false, root: false, repealed: false, open: true, layer: 1 }, edges: { from: product.Answered, to: product.Fast, label: refines, inverse: refined by, nature: declared, active: true }, groups: { id: product, label: Product } } }, { type: figure, caption: When it holds, figure: { type: timeline, today: 2026-11-26, from: 2026-10-01, to: 2026-12-31, lanes: { ref: product.Answered, title: Answered in time, kindLabel: Requirement, module: product, active: true, periods: { from: 2026-10-01, until: 2026-12-31 }, marks: { date: 2026-12-15, label: Reviewed, role: review } } } } }, { id: product, view: module, group: module, title: Product, file: docs/product.md, blocks: { type: card, ref: product.Fast, id: Fast, title: Reservations answered fast, module: product, kind: goal, kindLabel: Goal, source: src/product.ts:3, status: held, history: false, active: true, description: A person who reserves knows at once., body: { type: para, content: Back to , { t: doc, id: index, title: the summary }, . }, facts: { label: Decided by, value: { t: person, name: karim } }, links: { label: refined by, nature: declared, active: true, targets: { ref: product.Answered, title: Answered in time } }, resolutions: , children: { ref: product.Answered, body: { type: para, content: Within the minute. } }, views:  } }

## Documents · Scenarios

### What the scenarios read and expect

Decision · `Expected`

- Decided by: trame
- Value: { day: 2026-10-17, long: 17 October 2026, short: 17 Oct, shortWithYear: 17 Oct 2026, month: Oct, items: A, B, C, joined: A, , , B,  and , C, number: 0.67, written: 0.67, units: min, 60, s, 1, whole: 120, inLarger: 2, notWhole: 90, inSmaller: 90 }

### What the scenarios expect

Decision · `ExpectedDocuments`

- Decided by: trame
- Value: { files: { index: # A small project, , *What the project is for: [Reservations answered fast](product.md#Fast).*, , > **1 goal, 1 requirement · **held****, , <a id="holds"></a>, , ## What it holds, , Decided 15 min, open **to be decided**, by karim on 26 November 2026, in `src/product.ts:12`; see [Product](product.md) and [its sources](../src/product.ts) (warning)., , - Owner: karim, - Since: 30 October 2026, , - A goal, - A requirement that refines it, , | Node | Status |, |---|---|, | [Reservations answered fast](product.md#Fast) | **held** |, , ```ts, export const Fast = goal({ owner: "karim" }), ```, , **Criteria of [Answered in time](product.md#Answered)**, , | Criterion | Result |, |---|---|, | An answer within the minute | passed |, | A late answer refused | **failed**: took 2 min |, , **In force** since 1 October 2026, until 31 December 2026, , <details><summary>The code</summary>, , ```ts, const x = 1, ```, , </details>, , | Severity | Code | What | Where | Owner | Consequence |, |---|---|---|---|---|---|, | error | `literal-in-body` | A literal in a body | [Answered in time](product.md#Answered) | karim |  |, | error, raised from warning |  | Nothing applies it yet | the graph | lea | a wish |, , ```mermaid, flowchart TB,   n0["Reservations answered fast<br/><small>Goal</small>"]:::held,   n1["Answered in time<br/><small>Requirement</small>"]:::violated,   n1 -->|refines| n0,   classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a,   classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a,   classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a,   classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a,   classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a, ```, , *The layers of the graph*, , ```mermaid, gantt,   dateFormat YYYY-MM-DD,   axisFormat %d.%m,   title Around 26 November 2026,   section Answered in time,     In force : 2026-10-01, 2026-12-31,     Reviewed : milestone, 2026-12-15, 0d,   section Date of the graph,     26 November 2026 : milestone, 2026-11-26, 0d, ```, , *When it holds*, , product: # Product, , <a id="Fast"></a>, , ## Reservations answered fast, , `Fast` · `src/product.ts:3` · status: **held**, , A person who reserves knows at once., , Back to [the summary](index.md)., , - Decided by: karim, - refined by: [Answered in time](#Answered), , <a id="Answered"></a>, , Within the minute.,  }, terminal: { index: A small project, What the project is for: Reservations answered fast., 1 goal, 1 requirement · held, , what it holds,   Decided 15 min, open to be decided, by karim on 26 November 2026, in src/product.ts:12; see Product and its sources (src/product.ts) (warning).,   Owner  karim,   Since  30 October 2026,   - A goal,   - A requirement that refines it,   NODE                        STATUS,   Reservations answered fast  held,       export const Fast = goal({ owner: "karim" }),   Criteria of Answered in time,     passed  An answer within the minute,     failed  A late answer refused (took 2 min),   In force since 1 October 2026, until 31 December 2026,   The code,         const x = 1, error          literal-in-body               src/product.ts:14     A literal in a body · karim, error, raised from warning Nothing applies it yet · lea · a wish, rank 0   Reservations answered fast, rank 1   Answered in time, 1 October 2026    start              Answered in time, 26 November 2026  date of the graph, 15 December 2026  reviewed           Answered in time, 31 December 2026  end                Answered in time, , product: Product, Reservations answered fast,   goal · Fast · src/product.ts:3 · status held,   Back to the summary.,   Decided by  karim,   refined by  Answered in time,   Within the minute.,  } }

### The language of the scenarios

Decision · `ScenarioLanguage`

- Decided by: trame
- Value: { tag: en-GB, punctuation: { parts:  · , items: , , givenBy:  ← , opensAside:  (, closesAside: ), clauses: ; , introduces: : , equals:  = , absent: — } }

### The scenarios render as a project does

Architecture decision · `HowTheScenariosRender` · **held**

- Decided by: trame
- Context: A renderer is held to the intermediate format, not to a graph: what a view gives, whatever the project.
- Consequences: A change of the renderers shows in the expected documents, line by line, as a review of the documents of a project would show it.
- Rejected: A project compiled and its documents rendered, the views would be played again here, and the API gives no documents yet
- Serves: Documents rendered once, for every project
- Applied by: Files in Markdown, Figures in Mermaid, The terminal in text, Figures at a terminal, as text, Read by the engine

### The documents speak the engine's language

Architecture decision · `TheEnginesLanguage` · **held**

- Decided by: trame
- Context: A document says, in one line, what a view said and what a renderer wrote around it: two languages, or two ways of writing a date, would show in the same sentence.
- Consequences: The engine's g.lib, the renderers and the page read the same nodes; another language is another realization, with its catalogs.
- Rejected: The library's own language, fixed, a project whose engine spoke another would get documents in two languages
- Serves: Documents rendered once, for every project
- Applied by: Dates, Lists, Punctuation, Values with their units, The scenarios' language

### Written in the language of the scenarios

Function · `WrittenForTheScenarios` · **held**

- Owner: trame
- Parameters: { language: scenarios.ScenarioLanguage }
- Implements: The language of the documents
- Depends on: The language of the scenarios

### What the scenarios check

Message catalog · `ScenarioWords`

- Owner: trame
- Written in: The language of the library's words

### Figures in Mermaid

Technical choice · `FiguresInMermaid` · **held**

- Decided by: trame
- Context: The scenarios play the figures of files the library offers.
- Chooses: Mermaid diagrams
- In: Test
- Serves: Documents rendered once, for every project

### Files in Markdown

Technical choice · `FilesInMarkdown` · **held**

- Decided by: trame
- Context: The scenarios play the syntax of files the library offers.
- Chooses: Markdown writer
- In: Test
- Serves: Documents rendered once, for every project

### The scenarios' language

Technical choice · `InTheScenariosLanguage` · **held**

- Decided by: trame
- Context: A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.
- Chooses: Written in the language of the scenarios
- In: Test
- Serves: Documents rendered once, for every project

### Read by the engine

Technical choice · `LanguagesRead` · **held**

- Decided by: trame
- Context: Reading a language is the engine's: the grammar and its reader are the engine's packages, which no library carries.
- In: Test
- Serves: Documents rendered once, for every project

### Figures at a terminal, as text

Technical choice · `TerminalFiguresAsText` · **held**

- Decided by: trame
- Context: The scenarios play the figures of the terminal the library offers.
- Chooses: Figures as text
- In: Test
- Serves: Documents rendered once, for every project

### The terminal in text

Technical choice · `TerminalInText` · **held**

- Decided by: trame
- Context: The scenarios play the syntax of the terminal the library offers.
- Chooses: Plain text writer
- In: Test
- Serves: Documents rendered once, for every project

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### The documents, rendered

Scenario · `DocumentsRendered` · **held**

- Owner: trame
- Parameters: { files: rendering.FileRendering, terminal: rendering.TerminalRendering, common: rendering.Common, samples: samples.SampleDocuments, expected: scenarios.ExpectedDocuments, text: std/text.TextFile, checks: scenarios.ScenarioWords }
- Verifies: Common rendering, The renderer, Rendering of the files, Rendering in the terminal, Markdown writer, Plain text writer, Mermaid diagrams, Figures as text
- In: Test
- Depends on: Rendering of the files, Rendering in the terminal, Common rendering, The documents the scenarios render, What the scenarios expect, What the scenarios check

### The language of the documents, written

Scenario · `LanguageWritten` · **held**

- Owner: trame
- Parameters: { dates: language.Dates, lists: language.Lists, punctuation: language.Punctuation, units: language.Units, language: scenarios.ScenarioLanguage, expected: scenarios.Expected, checks: scenarios.ScenarioWords }
- Verifies: Dates, Lists, Punctuation, Values with their units, Written in the language of the scenarios
- In: Test
- Depends on: Dates, Lists, Punctuation, Values with their units, The language of the scenarios, What the scenarios read and expect, What the scenarios check

## Documents · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: documents, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **held**

- Owner: trame
- Path: ../../.github/workflows/documents-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The renderers of documents

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The renderers of documents
- Follows the policy: How a version is made

### The files that run it elsewhere

Shipment · `RunnersWritten` · **held**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

### Its code verified

Obligation · `CodeVerified`

- Owner: trame
- A gap weighs: error
- Serves: Documents rendered once, for every project

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: trame
- Serves: Documents rendered once, for every project

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Serves: Documents rendered once, for every project

### Its requirements held

Obligation · `RequirementsServed`

- Owner: trame
- Serves: Documents rendered once, for every project

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its code verified, Its requirements held, Its decisions applied, Its packages safe

## Documents · Terminal text

### Box drawing

Standard · `BoxDrawing`

- Maintained by: trame
- Source: The Unicode Standard, Version 15.1, code chart Box Drawing (U+2500 to U+257F)
- Address: https://www.unicode.org/charts/PDF/U2500.pdf
- Constants: { vertical: { value: │, meaning: U+2502 BOX DRAWINGS LIGHT VERTICAL: a line that goes on below }, verticalAndRight: { value: ├, meaning: U+251C BOX DRAWINGS LIGHT VERTICAL AND RIGHT: a branch, with others below it }, upAndRight: { value: └, meaning: U+2514 BOX DRAWINGS LIGHT UP AND RIGHT: the last branch, or a step under the one before } }

### Code lines

Syntax element · `CodeLines` · **held**

- Owner: trame
- Section: Code
- Marks: { margin: { value:     , meaning: Four spaces before each line: two steps of indentation } }
- Parameters: { standard: text.TerminalText, file: std/text.TextFile }
- Examples: { input:   , const a = 1
export default a, output:       const a = 1,       export default a }
- Defined by: Terminal text
- Depends on: Terminal text

### Columns

Syntax element · `Columns` · **held**

- Owner: trame
- Section: Columns
- Marks: {  }
- Parameters: { standard: text.TerminalText, cell: text.PaddedCell, columns: text.TerminalColumns, texts: std/algebra.Texts, sequences: std/algebra.Sequences }
- Examples: { input: none, Owner, trame, Review planned, 1 March 2027,   , output:   Owner           trame,   Review planned  1 March 2027 }, { input: Name, Kind, Text, function, , output: NAME  KIND, Text  function }
- Defined by: Terminal text
- Depends on: Terminal text, Padded cell, Columns in the terminal

### Item line

Syntax element · `ItemLine` · **held**

- Owner: trame
- Section: Lists
- Marks: { bullet: { value: -, meaning: Marks an item of a list } }
- Parameters: { standard: text.TerminalText }
- Examples: { input:   , Owner: trame, output:   - Owner: trame }
- Defined by: Terminal text
- Depends on: Terminal text

### Padded cell

Syntax element · `PaddedCell` · **held**

- Owner: trame
- Section: Columns
- Marks: {  }
- Parameters: { standard: text.TerminalText, columns: text.TerminalColumns }
- Examples: { input: held, 8, output: held     }, { input: a long name, 4, output: a long name  }
- Defined by: Terminal text
- Depends on: Terminal text, Columns in the terminal

### Path step

Syntax element · `PathStep` · **held**

- Owner: trame
- Section: Paths
- Marks: { shift: { value:    , meaning: Three spaces per position: the corner of the step before, its space, and one more } }
- Parameters: { standard: text.TerminalText, box: text.BoxDrawing }
- Examples: { input: 0, serves, Bookings (goal), output: └ serves Bookings (goal) }, { input: 2, uses, Store (port), output:       └ uses Store (port) }
- Defined by: Terminal text
- Depends on: Terminal text, Box drawing

### Lines of the terminal

Syntax element · `TerminalLines` · **held**

- Owner: trame
- Section: Lines
- Marks: {  }
- Parameters: { standard: text.TerminalText, file: std/text.TextFile, counts: std/algebra.Counts }
- Examples: { input: Layers, , , , rank 1   Goals,   , output: Layers

rank 1   Goals
 }, { input: a, b, output: a
b
 }
- Defined by: Terminal text
- Depends on: Terminal text

### Tree branch

Syntax element · `TreeBranch` · **held**

- Owner: trame
- Section: Trees
- Marks: {  }
- Parameters: { standard: text.TerminalText, box: text.BoxDrawing }
- Examples: { input: , false, serves, Bookings (goal), output: { line: ├ serves Bookings (goal), under: │  } }, { input: │ , true, uses, Store (port), output: { line: │ └ uses Store (port), under: │    } }
- Defined by: Terminal text
- Depends on: Terminal text, Box drawing

### Columns in the terminal

Decision · `TerminalColumns`

- Decided by: trame
- Value: { gap: 2, minimumGap: 1, widths: { rank: 9, severity: 15, code: 30, source: 22, name: 14 } }

### Terminal text

Decision · `TerminalText`

- Decided by: trame
- Value: { space:  , indent:   , maxBlankLines: 1 }
- Rejected: Markdown, a terminal does not render it: its marks would be read as they are; Colours and control sequences, an output is not always a terminal (a file, a pipe, a test): the text must say everything without them, and it is compared line by line from one generation to the next; Tabs, their width depends on the terminal: columns would no longer line up
