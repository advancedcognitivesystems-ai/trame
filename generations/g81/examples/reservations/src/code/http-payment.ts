// The real provider. The API key comes from the process environment: a secret is not a value of the graph. Without a
// key, no call is made.

import type { BodyOf } from "../../../../trame/kernel"
import type { HttpPayment } from "../infra"

const body: BodyOf<typeof HttpPayment> = ({ url, api, http, mediaTypes, uri, messages }) => ({
  async refund(key, amount) {
    const secret = process.env.PAYMENT_API_KEY
    if (!secret) throw new Error(messages.noApiKey())
    const r = await fetch(url + uri.pathSeparator + api.refunds, {
      method: http.post,
      headers: { [http.contentType]: mediaTypes.json, [api.idempotencyKey]: key, [http.authorization]: http.bearer + secret },
      body: JSON.stringify({ amount }),
    })
    if (!r.ok) throw new Error(messages.providerRefused(r.status))
    return (await r.json()) as { reference: string }
  },
})

export default body
