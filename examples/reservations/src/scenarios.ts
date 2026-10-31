/** Reservations · Scenarios */

import { ms, elapsed } from "../../../trame/kernel"
import { decision } from "../../../kinds/decision"
import { scenario } from "../../../kinds/scenario"
import { FreeCancellationPeriod, Refund } from "./cancellation"
import { PaymentLog, ReadOnlyDatabase, Dialect } from "./architecture"
import { Test, InitialReservations, TestInstant, ReservationsSql, CancellationsSql, InMemoryDatabase, SqliteDialect, SimulatedPayment, StoppedClock, ReservationTables, CancelledStatus } from "./infra"
import { Commands } from "#std/effects"
import { ReadReservation, CancelReservation, FreeCancellationEnd, LeadTime } from "./api"
import { Http } from "#std/web"
import { ScenarioChecks } from "./messages"

/**
 * Unknown reservation
 * An identifier that no reservation has.
 */
export const UnknownReservation = decision<string>({ owner: "karim", value: "R404" })

/**
 * Read a reservation
 * A reservation is read from the database through its SQL, with the end of its free cancellation; an unknown one is
 * not found.
 */
export const ReadScenario = scenario({
  owner: "karim",
  verifies: [ReadReservation, FreeCancellationEnd, ReservationsSql, InMemoryDatabase, SqliteDialect],
  env: Test,
  deps: { read: ReadReservation, initial: InitialReservations, freePeriod: FreeCancellationPeriod, unknown: UnknownReservation, http: Http, says: ScenarioChecks },
  body: ({ read, initial, freePeriod, unknown, http, says }) => async (check) => {
    const [r1] = initial
    const response = await read({ params: { id: r1.id } })
    const body = response.body as { id: string; freeUntil: string }
    check(says.existingReturned(), response.status === http.ok && body.id === r1.id)
    check(says.withFreeUntil(), body.freeUntil === new Date(Date.parse(r1.start) - ms(freePeriod[r1.charger])).toISOString())
    check(says.unknownIs404(), (await read({ params: { id: unknown } })).status === http.notFound)
  },
})

/**
 * Cancelling twice refunds only once
 * The first cancellation refunds by the rule, for the lead time to the start at the stopped instant; the second answers
 * the same refund, kept with the cancellations; the provider (simulated) is called once.
 */
export const RepeatedCancellationScenario = scenario({
  owner: "karim",
  verifies: [CancelReservation, LeadTime, CancellationsSql, SimulatedPayment, StoppedClock],
  env: Test,
  deps: { cancel: CancelReservation, log: PaymentLog, refund: Refund, initial: InitialReservations, instant: TestInstant, http: Http, says: ScenarioChecks },
  body: ({ cancel, log, refund, initial, instant, http, says }) => async (check) => {
    const [r1] = initial
    const leadTime = elapsed(Date.parse(instant), Date.parse(r1.start))
    const first = await cancel({ params: { id: r1.id } })
    const second = await cancel({ params: { id: r1.id } })
    const a = first.body as { amount: number; reference: string }
    const b = second.body as { amount: number; reference: string }
    check(says.firstRefundsByRule(), first.status === http.ok && a.amount === refund(r1, leadTime))
    check(says.secondSameRefund(), second.status === http.ok && b.reference === a.reference)
    const [call, ...others] = log.calls()
    check(says.providerCalledOnce(), !!call && !others.length)
  },
})

/**
 * Every reservation is refunded according to the rule
 */
export const ComplianceScenario = scenario({
  owner: "lea",
  verifies: [CancelReservation, Refund],
  env: Test,
  deps: { cancel: CancelReservation, refund: Refund, initial: InitialReservations, instant: TestInstant, says: ScenarioChecks },
  body: ({ cancel, refund, initial, instant, says }) => async (check) => {
    for (const r of initial) {
      const leadTime = elapsed(Date.parse(instant), Date.parse(r.start))
      const refunded = (await cancel({ params: { id: r.id } })).body as { amount: number }
      check(says.refundedByRule(r.id, r.charger, leadTime, refunded.amount), refunded.amount === refund(r, leadTime))
    }
  },
})

/**
 * A read never writes
 * A statement that writes, passed off as a read (made a read by the command maker itself, as nothing else can), goes to
 * the database that only reads: the database refuses it, and the reservation it would have cancelled is as it was.
 */
export const ReadsNeverWrite = scenario({
  owner: "karim",
  verifies: [InMemoryDatabase],
  env: Test,
  deps: {
    database: ReadOnlyDatabase, commands: Commands, dialect: Dialect, tables: ReservationTables, cancelled: CancelledStatus,
    initial: InitialReservations, says: ScenarioChecks,
  },
  body: ({ database, commands, dialect, tables, cancelled, initial, says }) => async (check) => {
    const [r1] = initial
    const { reservations, status } = tables
    const disguised = commands.read(dialect.update(reservations.name, [status], reservations.key))
    const refused = await database.read(disguised, cancelled, r1.id).then(() => false, () => true)
    const [row] = await database.read<Record<string, unknown>>(dialect.find(reservations.name, [status], reservations.key), r1.id)
    check(says.disguisedWriteRefused(), refused && row?.[status] !== cancelled)
  },
})
