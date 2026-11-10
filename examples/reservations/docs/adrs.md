# Architecture decisions

*The choices that shape the product without being values, in force on 30 October 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **3 architecture decisions, 2 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [Effects follow the request](architecture.md#EffectsFollowTheRequest) | **held** | [A read writes nothing](architecture.md#ReadWithoutWrite), [Every call to a third party is verified](architecture.md#ThirdPartiesVerified), [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld) |
| [A cancellation refunds once](principles.md#RefundOnce) | **held** | [Cancel a reservation](api.md#CancelReservation), [Key of a cancellation's refund](architecture.md#CancellationKey), [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario) |
| [Secrets stay out of the graph](principles.md#SecretsOutOfTheGraph) | **unknown** | [Real payment provider](infra.md#HttpPayment) |

## Reservations · Architecture

<a id="EffectsFollowTheRequest"></a>

### Effects follow the request

`EffectsFollowTheRequest` · `src/architecture.ts:140` · status: **held**

What an entry point may do follows what it is asked: a read changes nothing, a utility touches nothing, and a call to the payment provider is verified by a scenario before it reaches a driver.

Context: A driver who reads a reservation must never pay for it, and a refund must never be sent untested.

Consequences: Three rules judge the effects of every entry point and function at each build.

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [A read writes nothing](architecture.md#ReadWithoutWrite), [Utilities do not touch the world](architecture.md#UtilitiesWithoutWorld), [Every call to a third party is verified](architecture.md#ThirdPartiesVerified)

## Reservations · Principles

<a id="RefundOnce"></a>

### A cancellation refunds once

`RefundOnce` · `src/principles.ts:15` · status: **held**

The payment provider receives an idempotency key for each reservation: a request that arrives twice returns the refund already made.

Context: A driver's phone repeats a request when the network drops; the provider must not refund twice.

Consequences: The refund is recorded with the cancellation, in one transaction; a repeated request finds it and returns it without calling the provider.

| Rejected | Why |
|---|---|
| Locking the reservation while refunding | the lock is lost with the connection, and the provider is outside the transaction |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Cancel a reservation](api.md#CancelReservation), [Key of a cancellation's refund](architecture.md#CancellationKey), [Cancelling twice refunds only once](scenarios.md#RepeatedCancellationScenario)

<a id="SecretsOutOfTheGraph"></a>

### Secrets stay out of the graph

`SecretsOutOfTheGraph` · `src/principles.ts:28` · status: **unknown**

The payment provider's API key comes from the environment of the process, never from a decision.

Context: The graph is read by many people, and every value of it shows in the documents and the page.

Consequences: Without a key in the environment, the real provider makes no call and says why.

| Rejected | Why |
|---|---|
| The key as a decision | every document and the page would show it |

- Decided by: karim
- Serves: [Cancel without stress](cancellation.md#CancelWithoutStress)
- Applied by: [Real payment provider](infra.md#HttpPayment)
