/** Trame · Standards */

import { standard } from "../kinds/standard"
import { vocabulary } from "../kinds/vocabulary"

/**
 * HTTP
 * The statuses, headers and directives that the trame dev server uses.
 */
export const Http = standard({
  owner: "trame",
  source: "RFC 9110 (semantics), RFC 9111 (caching), RFC 9112 (connections)",
  url: "https://www.rfc-editor.org/rfc/rfc9110",
  constants: {
    ok: { value: 200, meaning: "The request succeeded" },
    noContent: { value: 204, meaning: "The request succeeded, and there is nothing to send back" },
    notFound: { value: 404, meaning: "The requested resource does not exist" },
    contentTypeHeader: { value: "content-type", meaning: "Header: the media type of the body" },
    cacheControlHeader: { value: "cache-control", meaning: "Header: the caching directives" },
    connectionHeader: { value: "connection", meaning: "Header: the options of the connection" },
    noCache: { value: "no-cache", meaning: "Directive: revalidate before any reuse" },
    keepAlive: { value: "keep-alive", meaning: "Option: keep the connection open" },
  },
})

/**
 * Media types
 * The types that the trame dev server announces, with their character set.
 */
export const MediaTypes = standard({
  owner: "trame",
  source: "IANA media types registry; RFC 6838; WHATWG HTML (text/event-stream)",
  url: "https://www.iana.org/assignments/media-types/",
  constants: {
    html: { value: "text/html; charset=utf-8", meaning: "An HTML page in UTF-8" },
    json: { value: "application/json; charset=utf-8", meaning: "JSON in UTF-8" },
    eventStream: { value: "text/event-stream", meaning: "A stream of events sent by the server" },
  },
})

/**
 * Server-sent events
 * The shape of the messages of the stream that keeps the trame dev page up to date.
 */
export const ServerSentEvents = standard({
  owner: "trame",
  source: "WHATWG HTML, § Server-sent events",
  url: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
  constants: {
    eventField: { value: "event: ", meaning: "The field that names the event" },
    dataField: { value: "data: ", meaning: "The field that carries the data" },
    comment: { value: ": ", meaning: "A comment line, ignored by the browser" },
    endOfMessage: { value: "\n\n", meaning: "An empty line ends the message" },
  },
})

/**
 * Mulberry32
 * A 32-bit pseudo-random generator: fast, reproducible from a seed.
 */
export const Mulberry32 = standard({
  owner: "trame",
  source: "Tommy Ettinger, Mulberry32 (2017, public domain)",
  url: "https://gist.github.com/tommyettinger/46a874533244883189143505d203312c",
  constants: {
    increment: { value: 0x6d2b79f5, meaning: "Added to the state at each draw" },
    shift1: { value: 15, meaning: "First shift of the mix" },
    shift2: { value: 7, meaning: "Second shift of the mix" },
    shift3: { value: 14, meaning: "Last shift of the mix" },
    oddBit: { value: 1, meaning: "OR with 1: the first multiplier is odd" },
    odd: { value: 61, meaning: "Makes the second multiplier odd" },
    scale: { value: 4294967296, meaning: "2³²: brings the draw between 0 and 1" },
  },
})

/**
 * Multiplicative hashing
 * Reduces a text (the seed) to a 32-bit integer.
 */
export const MultiplicativeHash = standard({
  owner: "trame",
  source: "Knuth, The Art of Computer Programming, vol. 3, § 6.4; FIPS 180-4 (initial value)",
  constants: {
    multiplier: { value: 2654435761, meaning: "⌊2³² / φ⌋: Knuth's multiplier" },
    start: { value: 1779033703, meaning: "0x6a09e667, the first bits of √2 (initial value of SHA-256)" },
  },
})

/**
 * HTML
 * The tags that the Markdown documents use: anchors, collapsible blocks.
 */
export const Html = standard({
  owner: "trame",
  source: "WHATWG HTML, § 13.1.2 Elements (start and end tags, attributes)",
  url: "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
  constants: {
    lessThan: { value: "<", meaning: "Opens a tag" },
    greaterThan: { value: ">", meaning: "Closes a tag" },
  },
})

/**
 * URI
 * The relative addresses that link the documents together.
 */
export const Uri = standard({
  owner: "trame",
  source: "RFC 3986, § 3 Syntax components and § 4.2 Relative reference",
  url: "https://www.rfc-editor.org/rfc/rfc3986",
  constants: {},
})

/**
 * ECMAScript
 * What the language of the bodies fixes itself, and the code uses: where a list starts, how an integer comes back to 32 bits.
 */
export const EcmaScript = standard({
  owner: "trame",
  source: "ECMA-262, ECMAScript 2024: § 23.1 Array (indices, indexOf), § 13.9.3 unsigned right shift (ToUint32)",
  url: "https://tc39.es/ecma262/2024/",
  constants: {
    firstIndex: { value: 0, meaning: "The index of the first item of a list, of the first character of a text" },
    notFound: { value: -1, meaning: "What indexOf returns when the value is not in the list (§ 23.1.3.17)" },
    toUnsigned32: { value: 0, meaning: "x >>> 0: a zero, unsigned shift; brings x back to 32 unsigned bits" },
  },
})

/**
 * ECMAScript reserved words
 * The words a program cannot use as the name of a variable: the reserved words of ECMA-262 2024 (§ 12.7.2), and those
 * that strict mode code adds or forbids to bind (§ 13.1.1). A program that Trame assembles is a module, hence strict.
 */
export const EcmaScriptReservedWords = vocabulary({
  owner: "trame",
  words: {
    await: "Reserved word (§ 12.7.2)",
    break: "Reserved word (§ 12.7.2)",
    case: "Reserved word (§ 12.7.2)",
    catch: "Reserved word (§ 12.7.2)",
    class: "Reserved word (§ 12.7.2)",
    const: "Reserved word (§ 12.7.2)",
    continue: "Reserved word (§ 12.7.2)",
    debugger: "Reserved word (§ 12.7.2)",
    default: "Reserved word (§ 12.7.2)",
    delete: "Reserved word (§ 12.7.2)",
    do: "Reserved word (§ 12.7.2)",
    else: "Reserved word (§ 12.7.2)",
    enum: "Reserved word (§ 12.7.2)",
    export: "Reserved word (§ 12.7.2)",
    extends: "Reserved word (§ 12.7.2)",
    false: "Reserved word (§ 12.7.2)",
    finally: "Reserved word (§ 12.7.2)",
    for: "Reserved word (§ 12.7.2)",
    function: "Reserved word (§ 12.7.2)",
    if: "Reserved word (§ 12.7.2)",
    import: "Reserved word (§ 12.7.2)",
    in: "Reserved word (§ 12.7.2)",
    instanceof: "Reserved word (§ 12.7.2)",
    new: "Reserved word (§ 12.7.2)",
    null: "Reserved word (§ 12.7.2)",
    return: "Reserved word (§ 12.7.2)",
    super: "Reserved word (§ 12.7.2)",
    switch: "Reserved word (§ 12.7.2)",
    this: "Reserved word (§ 12.7.2)",
    throw: "Reserved word (§ 12.7.2)",
    true: "Reserved word (§ 12.7.2)",
    try: "Reserved word (§ 12.7.2)",
    typeof: "Reserved word (§ 12.7.2)",
    var: "Reserved word (§ 12.7.2)",
    void: "Reserved word (§ 12.7.2)",
    while: "Reserved word (§ 12.7.2)",
    with: "Reserved word (§ 12.7.2)",
    yield: "Reserved word (§ 12.7.2)",
    implements: "Reserved in strict mode code (§ 13.1.1)",
    interface: "Reserved in strict mode code (§ 13.1.1)",
    let: "Reserved in strict mode code (§ 13.1.1)",
    package: "Reserved in strict mode code (§ 13.1.1)",
    private: "Reserved in strict mode code (§ 13.1.1)",
    protected: "Reserved in strict mode code (§ 13.1.1)",
    public: "Reserved in strict mode code (§ 13.1.1)",
    static: "Reserved in strict mode code (§ 13.1.1)",
    arguments: "Cannot be bound in strict mode code (§ 13.1.1)",
    eval: "Cannot be bound in strict mode code (§ 13.1.1)",
  },
})

/**
 * Exit status
 * What a command returns to the system that started it: zero if it succeeded, something else otherwise.
 */
export const ExitStatus = standard({
  owner: "trame",
  source: "POSIX.1-2017, exit(); ISO C, EXIT_SUCCESS and EXIT_FAILURE",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/functions/exit.html",
  constants: {
    success: { value: 0, meaning: "The command succeeded (EXIT_SUCCESS)" },
    failure: { value: 1, meaning: "The command failed (EXIT_FAILURE)" },
  },
})

/**
 * Text file
 * What a line of a text file is: characters, then a newline, the last line included.
 */
export const TextFile = standard({
  owner: "trame",
  source: "POSIX.1-2017, Base Definitions, § 3.206 Line and § 3.403 Text File",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_206",
  constants: {
    endOfLine: { value: "\n", meaning: "Ends each line, the last one included" },
  },
})

/**
 * Positions in a file
 * How a message designates a place in a file: "file:line", the first line having the number 1.
 */
export const GnuPositions = standard({
  owner: "trame",
  source: "GNU Coding Standards, § 4.4 Formatting Error Messages",
  url: "https://www.gnu.org/prep/standards/html_node/Errors.html",
  constants: {
    firstLine: { value: 1, meaning: "The number of the first line of a file" },
    separator: { value: ":", meaning: "Separates the file from the line number" },
  },
})

/**
 * TypeScript compiler API
 * What the API returns when asked where a node is: a line and a character, counted from zero.
 */
export const TypeScriptApi = standard({
  owner: "trame",
  source: "TypeScript, compiler API: ts.LineAndCharacter (getLineAndCharacterOfPosition)",
  url: "https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API",
  constants: {
    firstLine: { value: 0, meaning: "The number the API gives to the first line" },
  },
})

/**
 * Depth-first search
 * Looking for a cycle: each vertex is first discovered (grey), then finished (black). Coming back to a grey vertex closes a cycle.
 */
export const DepthFirstSearch = standard({
  owner: "trame",
  source: "Cormen, Leiserson, Rivest and Stein, Introduction to Algorithms, 3rd ed., § 22.3 Depth-first search",
  constants: {
    grey: { value: "grey", meaning: "Discovered, its search is not finished: coming back to it closes a cycle" },
    black: { value: "black", meaning: "Its search is finished, without a cycle" },
  },
})

/**
 * Node.js process arguments
 * What process.argv holds: the path of Node, then the path of the script being run, then the arguments given to it.
 */
export const NodeArguments = standard({
  owner: "trame",
  source: "Node.js documentation, process.argv",
  url: "https://nodejs.org/api/process.html#processargv",
  constants: {
    script: { value: 1, meaning: "The position of the path of the script being run" },
    firstArgument: { value: 2, meaning: "The position of the first argument given to the script" },
  },
})

/**
 * ISO 8601 dates
 * The calendar dates of the graph ("2026-10-17"): year, month and day in the extended format, in the Gregorian
 * calendar. Months go from 01 to 12; every month has at least 28 days.
 */
export const Iso8601 = standard({
  owner: "trame",
  source: "ISO 8601-1:2019, calendar dates in the extended format (§ 5.2.2), in the Gregorian calendar",
  url: "https://www.iso.org/standard/70907.html",
  constants: {
    dateLength: { value: 10, meaning: "YYYY-MM-DD: the characters of a calendar date in the extended format" },
    firstMonth: { value: 1, meaning: "January" },
    lastMonth: { value: 12, meaning: "December" },
    firstDay: { value: 1, meaning: "The first day of a month" },
    shortestMonth: { value: 28, meaning: "The days that every month has (February, in a common year)" },
  },
})
