/** Standard library · Web */

import { standard } from "../../kinds/standard"
import { CitedNotCopied } from "./product"

// What the web publishes and a page or a server uses: HTTP, media types, addresses, the stream of events a server
// keeps open, the events a page hears, how it scrolls and what the person asked of it.

/**
 * HTTP
 * The methods, statuses, headers and directives that a server answers with and a client sends.
 */
export const Http = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "RFC 9110 (semantics), RFC 9111 (caching), RFC 9112 (connections), RFC 6750 (bearer tokens)",
  url: "https://www.rfc-editor.org/rfc/rfc9110",
  constants: {
    scheme: { value: "http", meaning: "The scheme of HTTP addresses (§ 4.2.1)" },
    ok: { value: 200, meaning: "The request succeeded" },
    noContent: { value: 204, meaning: "The request succeeded, and there is nothing to send back" },
    notFound: { value: 404, meaning: "The requested resource does not exist" },
    serverError: { value: 500, meaning: "The server failed" },
    unavailable: { value: 503, meaning: "The service cannot answer for now" },
    post: { value: "POST", meaning: "Method: asks the server to act" },
    contentType: { value: "content-type", meaning: "Header: the media type of the body" },
    cacheControl: { value: "cache-control", meaning: "Header: the caching directives" },
    connection: { value: "connection", meaning: "Header: the options of the connection" },
    authorization: { value: "authorization", meaning: "Header: the credentials of the caller" },
    bearer: { value: "Bearer ", meaning: "The scheme of a token and its space, before the token (RFC 6750, § 2.1)" },
    noCache: { value: "no-cache", meaning: "Directive: revalidate before any reuse" },
    keepAlive: { value: "keep-alive", meaning: "Option: keep the connection open" },
  },
})

/**
 * Media types
 * The types a server announces for what it sends, with their character set when it has one.
 */
export const MediaTypes = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "IANA media types registry; RFC 6838; RFC 8259, § 11 (application/json); WHATWG HTML (text/event-stream)",
  url: "https://www.iana.org/assignments/media-types/",
  constants: {
    html: { value: "text/html; charset=utf-8", meaning: "An HTML page in UTF-8" },
    json: { value: "application/json", meaning: "A body written in JSON" },
    jsonUtf8: { value: "application/json; charset=utf-8", meaning: "The same, its encoding said: UTF-8" },
    eventStream: { value: "text/event-stream", meaning: "A stream of events sent by the server" },
  },
})

/**
 * URI
 * The parts of an address (a server's, the path of a request) and the relative references that link documents together.
 */
export const Uri = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "RFC 3986, § 3 Syntax components and § 4.2 Relative reference; RFC 6761 (localhost)",
  url: "https://www.rfc-editor.org/rfc/rfc3986",
  constants: {
    schemeEnd: { value: ":", meaning: "Ends the scheme (§ 3.1)" },
    authority: { value: "//", meaning: "Opens the authority: the host and its port (§ 3.2)" },
    portSeparator: { value: ":", meaning: "Separates the host from its port (§ 3.2.3)" },
    pathSeparator: { value: "/", meaning: "Separates the segments of a path (§ 3.3)" },
    query: { value: "?", meaning: "Opens the query, after the path (§ 3.4)" },
    localhost: { value: "localhost", meaning: "The machine itself (RFC 6761, § 6.3)" },
  },
})

/**
 * Server-sent events
 * The shape of the messages of a stream that a server keeps open to a page, to tell it what changed.
 */
export const ServerSentEvents = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "WHATWG HTML, § Server-sent events",
  url: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
  constants: {
    eventField: { value: "event: ", meaning: "The field that names the event" },
    dataField: { value: "data: ", meaning: "The field that carries the data" },
    endOfLine: { value: "\n", meaning: "Ends the line of a field (a line feed)" },
    comment: { value: ": ", meaning: "A comment line, ignored by the browser" },
    endOfMessage: { value: "\n\n", meaning: "An empty line ends the message" },
  },
})

/**
 * UI events
 * The events a page hears from the person, by the names the DOM gives them, and the keys that activate what has the
 * focus.
 */
export const UiEvents = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C, UI Events (§ 3.4 mouse events, § 3.3 focus events, § 3.6 keyboard events), Pointer Events (pointerdown), and the HTML Living Standard (input, change, DOMContentLoaded)",
  url: "https://www.w3.org/TR/uievents/",
  constants: {
    click: { value: "click", meaning: "The person activates an element: a click, a tap" },
    pointerdown: { value: "pointerdown", meaning: "A finger touches, a pen or a mouse button goes down: the moment of a tap, before it is released (Pointer Events)" },
    keydown: { value: "keydown", meaning: "A key goes down" },
    input: { value: "input", meaning: "The value of a field changes as the person types or picks" },
    change: { value: "change", meaning: "The person settles the value of a control: an option chosen" },
    over: { value: "mouseover", meaning: "The pointer enters an element" },
    out: { value: "mouseout", meaning: "The pointer leaves it" },
    focusIn: { value: "focusin", meaning: "An element receives the focus (it bubbles)" },
    focusOut: { value: "focusout", meaning: "It loses the focus (it bubbles)" },
    loaded: { value: "DOMContentLoaded", meaning: "The document is parsed: its elements are there (HTML § 8.4)" },
    loading: { value: "loading", meaning: "The ready state of a document still being parsed (HTML § 3.1.3)" },
    enter: { value: "Enter", meaning: "The key that activates what has the focus (UI Events KeyboardEvent key values § 3.3)" },
    space: { value: " ", meaning: "The space bar, which activates a button too" },
  },
})

/**
 * CSSOM View
 * How a page brings an element into view: its top at the top of the view, smoothly or at once.
 */
export const CssomView = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C, CSSOM View Module: § 5 the ScrollIntoViewOptions dictionary and the ScrollBehavior enumeration",
  url: "https://www.w3.org/TR/cssom-view-1/#dictdef-scrollintoviewoptions",
  constants: {
    start: { value: "start", meaning: "The element's top at the top of the view" },
    smooth: { value: "smooth", meaning: "Scrolls smoothly" },
    instant: { value: "auto", meaning: "Scrolls as the browser does by default: at once" },
  },
})

/**
 * Media Queries Level 5
 * What the person asked of a page: less motion.
 */
export const MediaQueries5 = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C, Media Queries Level 5: § 12.1 prefers-reduced-motion",
  url: "https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion",
  constants: {
    reducedMotion: { value: "prefers-reduced-motion", meaning: "Whether the person asked for less motion" },
    reduce: { value: "reduce", meaning: "They did" },
  },
})

/**
 * Screen Wake Lock API
 * What a page asks the browser to keep the screen on.
 */
export const ScreenWakeLockApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C, Screen Wake Lock API: § 4 The WakeLockType enumeration",
  url: "https://www.w3.org/TR/screen-wake-lock/",
  constants: {
    screen: { value: "screen", meaning: "The lock that keeps the screen on" },
  },
})

/**
 * Web Speech API
 * The errors a speech synthesis reports on an utterance: those that only say it was cut short (cancelled, or
 * interrupted by another), which are not failures of the voice.
 */
export const WebSpeechApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C Community Group, Web Speech API: § 4.2.9 SpeechSynthesisErrorEvent",
  url: "https://webaudio.github.io/web-speech-api/#speechsynthesiserrorevent",
  constants: {
    canceled: { value: "canceled", meaning: "The utterance was taken off the queue before it started" },
    interrupted: { value: "interrupted", meaning: "The utterance was cut short by a cancel" },
  },
})

/**
 * Web Audio API
 * The latency an audio context asks for: "playback", the longest, for sounds that need no precise timing, which leaves
 * the audio output to the other sounds of the device and spares the battery.
 */
export const WebAudioApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "W3C, Web Audio API 1.1: § 1.2.4 AudioContextLatencyCategory",
  url: "https://www.w3.org/TR/webaudio-1.1/#enumdef-audiocontextlatencycategory",
  constants: {
    playback: { value: "playback", meaning: "Prioritise sustained playback without interruption over latency and power" },
  },
})
