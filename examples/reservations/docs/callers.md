# Callers

*Who may call each entry point, from where, and the records it reaches that belong to someone, as of 30 October 2026. Its audience says who may call it; its trigger says where from. Records that belong to a person or a tenant ask an audience that carries that identity, or one that reaches every owner's records; until identification comes (C7), nothing checks who calls.*

> **3 entry points for 2 audiences; 3 of them reach records that belong to someone**

| Entry point | For | Called from | Records it reaches that belong to someone |
|---|---|---|---|
| [Read a reservation](api.md#ReadReservation) | [Drivers](access.md#Drivers) | a network: whoever is on it | [A reservation](data.md#KeptReservation) (a person; in Local, Production and Test) |
| [Cancel a reservation](api.md#CancelReservation) | [Drivers](access.md#Drivers) | a network: whoever is on it | [A reservation](data.md#KeptReservation) (a person; in Local, Production and Test), [The refund of a cancelled reservation](data.md#KeptRefund) (a person; in Local, Production and Test) |
| [Prepare the storage](sdlc.md#PrepareStorage) | [The operators](../../../std/docs/access.md#TheOperators) | a machine: whoever has a terminal there | [A reservation](data.md#KeptReservation) (a person; in Local), [The refund of a cancelled reservation](data.md#KeptRefund) (a person; in Local) |
