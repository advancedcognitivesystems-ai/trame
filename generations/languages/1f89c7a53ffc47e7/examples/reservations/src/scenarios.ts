/** Reservations · Scenarios */

import { Time } from "#std/measures"
import { decision } from "#trame/kinds/decision"
import { scenario } from "#trame/kinds/scenario"
import { FreeCancellationPeriod, Refund } from "./cancellation"
import { PaymentLog } from "./architecture"
import { Test, TestInstant, ReservationRecords, CancellationRecords, SimulatedPayment, StoppedClock, CancelledStatus } from "./infra"
import { KeptReservation, KeptRefund } from "./data"
import { Commands } from "#std/effects"
import { ExitStatus } from "#std/system"
import { Counts } from "#std/algebra"
import { Records, RecordsInSql, SqlDatabase, TableDialect, SqliteInMemory, SqliteTables, SeedOfTheEntity } from "#data/records"
import { Conforms } from "#data/documents"
import { ReadReservation, CancelReservation, FreeCancellationEnd, LeadTime } from "./api"
import { PrepareStorage } from "./sdlc"
import { Http } from "#std/web"
import { ScenarioChecks } from "./messages"

/**
 * Unknown reservation
 * An identifier that no reservation has.
 */
export const UnknownReservation = decision<string>({ owner: "karim", value: "R404" })

/**
 * Read a reservation
 * A reservation is read from the database, its table made with the first reservations, with the end of its free
 * cancellation; an unknown one is not found.
 */
export const ReadScenario = scenario({
  owner: "karim",
  verifies: [ReadReservation, FreeCancellationEnd, ReservationRecords, SeedOfTheEntity, RecordsInSql, SqliteTables, SqliteInMemory, Conforms],
  env: Test,
  deps: { read: ReadReservation, kept: KeptReservation, freePeriod: FreeCancellationPeriod, unknown: UnknownReservation, http: Http, time: Time, says: ScenarioChecks },
  body: ({ read, kept, freePeriod, unknown, http, time, says }) => async (check) => {
    const [r1] = kept.seed ?? []
    const response = await read({ params: { id: r1.id } })
    const body = response.body as { id: string; freeUntil: string }
    check(says.existingReturned(), response.status === http.ok && body.id === r1.id)
    check(says.withFreeUntil(), body.freeUntil === new Date(Date.parse(r1.start) - time.in.millisecond(freePeriod[r1.charger])).toISOString())
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
  verifies: [CancelReservation, LeadTime, CancellationRecords, SimulatedPayment, StoppedClock],
  env: Test,
  deps: { cancel: CancelReservation, log: PaymentLog, refund: Refund, kept: KeptReservation, instant: TestInstant, http: Http, time: Time, says: ScenarioChecks },
  body: ({ cancel, log, refund, kept, instant, http, time, says }) => async (check) => {
    const [r1] = kept.seed ?? []
    const leadTime = time.millisecond(Date.parse(r1.start) - Date.parse(instant))
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
  deps: { cancel: CancelReservation, refund: Refund, kept: KeptReservation, instant: TestInstant, time: Time, says: ScenarioChecks },
  body: ({ cancel, refund, kept, instant, time, says }) => async (check) => {
    for (const r of kept.seed ?? []) {
      const leadTime = time.millisecond(Date.parse(r.start) - Date.parse(instant))
      const refunded = (await cancel({ params: { id: r.id } })).body as { amount: number }
      check(says.refundedByRule(r.id, r.charger, leadTime, refunded.amount), refunded.amount === refund(r, leadTime))
    }
  },
})

/**
 * A read never writes
 * A statement that writes, passed off as a read (made a read by the command maker itself, as nothing else can), goes to
 * the database, which reads it on a connection that refuses to change anything: the database refuses it, and the
 * reservation it would have cancelled is as it was.
 */
export const ReadsNeverWrite = scenario({
  owner: "karim",
  verifies: [SqliteInMemory],
  env: Test,
  deps: {
    database: SqlDatabase, commands: Commands, dialect: TableDialect, records: Records, reservations: KeptReservation, cancelled: CancelledStatus,
    says: ScenarioChecks,
  },
  body: ({ database, commands, dialect, records, reservations, cancelled, says }) => async (check) => {
    const [r1] = reservations.seed ?? []
    await records.prepare(reservations)
    const disguised = commands.read(dialect.update(reservations, [reservations.names.status]))
    const refused = await database.read(disguised, cancelled, r1.id).then(() => false, () => true)
    const found = await records.find(reservations, r1.id)
    check(says.disguisedWriteRefused(), refused && found?.status !== cancelled)
  },
})

/**
 * The storage is prepared
 * What a deployment runs before the service starts: the table of each entity made ready, the reservations with the first
 * ones, the refunds empty.
 */
export const StoragePrepared = scenario({
  owner: "karim",
  verifies: [PrepareStorage],
  env: Test,
  deps: {
    prepare: PrepareStorage, records: Records, reservations: KeptReservation, refunds: KeptRefund, exit: ExitStatus,
    counts: Counts, says: ScenarioChecks,
  },
  body: ({ prepare, records, reservations, refunds, exit, counts, says }) => async (check) => {
    const done = await prepare({ params: {} })
    const counted = [await records.count(reservations), await records.count(refunds)]
    check(says.storagePrepared(), done.status === exit.success && counted.join() === [(reservations.seed ?? []).length, counts.zero].join())
  },
})
