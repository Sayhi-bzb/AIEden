# identity

## types

```ts
export type OrganismId = string
export type LifeStatus = "alive" | "sleeping" | "dead"

export type Identity = {
  id: OrganismId
  status: LifeStatus
  createdAt: string
}
```

## invariants

```ts
identity.id.length > 0
identity.createdAt === lifecycle.events[0].at
identity.status === deriveLifeStatus(latest(lifecycle.events))
identity.status is_not independently_mutated
```

`lifecycle` explains why.

`identity.status` answers now.
