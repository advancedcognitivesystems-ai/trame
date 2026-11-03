# Overlaps

*The values claimed by several nodes on 3 November 2026, and how each overlap was settled.*

## Free cancellation period · value.ultra

```mermaid
flowchart TB
  n0["Free cancellation period<br/><small>Decision</small>"]:::neutral
  n1["Period for ultra chargers<br/><small>Amendment</small>"]:::neutral
  n2["Ultra period requested by support<br/><small>Amendment</small>"]:::neutral
  n3["Approval of the ultra period<br/><small>Approval</small>"]:::neutral
  n1 ==>|Claims| n0
  n2 -->|Claims| n0
  n3 ==>|Approves| n1
  n1 -.-|Overlaps| n2
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
  style n1,n2,n3 stroke-dasharray:4 3
```

> Overlap on `value.ultra` of [Free cancellation period](cancellation.md#FreeCancellationPeriod), between [Period for ultra chargers](committee.md#UltraPeriod) and [Ultra period requested by support](support.md#SupportUltraPeriod): [Period for ultra chargers](committee.md#UltraPeriod) prevails (approved by lea, owner of "Free cancellation period"; see [Approval of the ultra period](committee.md#UltraPeriodApproval)).
