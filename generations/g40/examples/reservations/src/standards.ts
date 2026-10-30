/** Reservations · Standards */

import { standard } from "../../../kinds/standard"

/**
 * HTTP
 * What the API answers, and how the service calls the payment provider.
 */
export const Http = standard({
  owner: "karim",
  source: "RFC 9110, HTTP Semantics: § 9 methods, § 15 status codes, § 8.3 Content-Type, § 11.6.2 Authorization; RFC 6750, § 2.1 (Bearer)",
  url: "https://www.rfc-editor.org/rfc/rfc9110",
  constants: {
    ok: { value: 200, meaning: "The request succeeded" },
    notFound: { value: 404, meaning: "Nothing answers at this address, or nothing has this identifier" },
    serverError: { value: 500, meaning: "The server failed" },
    unavailable: { value: 503, meaning: "The service cannot answer for now" },
    post: { value: "POST", meaning: "Asks the server to act" },
    contentType: { value: "content-type", meaning: "The media type of the body" },
    authorization: { value: "authorization", meaning: "The credentials of the caller" },
    bearer: { value: "Bearer ", meaning: "The scheme of a token and its space, before the token" },
    scheme: { value: "http", meaning: "The scheme of the address the server listens at" },
  },
})

/**
 * Media types
 */
export const MediaTypes = standard({
  owner: "karim",
  source: "IANA media types registry; RFC 8259, § 11 (application/json)",
  url: "https://www.iana.org/assignments/media-types/",
  constants: {
    json: { value: "application/json", meaning: "A body written in JSON" },
    jsonUtf8: { value: "application/json; charset=utf-8", meaning: "The same, its encoding said" },
  },
})

/**
 * URI
 * The parts of an address: the server's, and the path of a request.
 */
export const Uri = standard({
  owner: "karim",
  source: "RFC 3986, § 3 Syntax components; RFC 6761, § 6.3 (localhost)",
  url: "https://www.rfc-editor.org/rfc/rfc3986",
  constants: {
    schemeEnd: { value: ":", meaning: "Ends the scheme" },
    authority: { value: "//", meaning: "Opens the host and its port" },
    portSeparator: { value: ":", meaning: "Separates the host from its port" },
    pathSeparator: { value: "/", meaning: "Separates the segments of a path" },
    query: { value: "?", meaning: "Opens the query, after the path" },
    localhost: { value: "localhost", meaning: "The machine itself" },
  },
})

/**
 * Paths of entry points
 * How an HTTP entry point names its path: segments separated by slashes, a parameter as a colon followed by its name.
 */
export const RouteSyntax = standard({
  owner: "karim",
  source: "Trame, the trigger of an HTTP entry point (kinds/entry-point.ts, http)",
  constants: {
    separator: { value: "/", meaning: "Separates the segments of a path" },
    parameter: { value: ":", meaning: "Begins a segment that is a parameter: what follows is its name" },
  },
})

/**
 * SQLite
 * The name of a database that lives in memory, and the statements of a transaction.
 */
export const Sqlite = standard({
  owner: "karim",
  source: "SQLite: In-Memory Databases; SQL As Understood By SQLite (BEGIN, COMMIT, ROLLBACK)",
  url: "https://www.sqlite.org/inmemorydb.html",
  constants: {
    memory: { value: ":memory:", meaning: "The name that opens a database in memory, new each time" },
    begin: { value: "BEGIN", meaning: "Starts a transaction" },
    commit: { value: "COMMIT", meaning: "Makes its writes last" },
    rollback: { value: "ROLLBACK", meaning: "Undoes them" },
  },
})

/**
 * API of the payment provider
 * The address of a refund, under the provider's address, and the header of the idempotency key.
 */
export const PaymentProviderApi = standard({
  owner: "karim",
  source: "The payment provider's API, version 1: refunds",
  constants: {
    refunds: { value: "refunds", meaning: "The path of a refund" },
    idempotencyKey: { value: "idempotency-key", meaning: "The header of the key: the provider makes one refund per key" },
  },
})
