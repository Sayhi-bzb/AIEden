# lifecycle

## types

```ts
export type LifecycleEvent =
  | {
      type: "created"
      reason: "birth"
      at: string
    }
  | {
      type: "awakened"
      reason: "scheduled"
      at: string
    }
  | {
      type: "slept"
      reason: "rest"
      at: string
    }
  | {
      type: "died"
      reason: "continuity_exhausted" | "fatal_break"
      at: string
    }

export type Lifecycle = {
  events: LifecycleEvent[]
}
```

## invariants

```ts
lifecycle.events.length > 0
lifecycle.events[0].type === "created"
lifecycle.events[0].reason === "birth"
lifecycle.events is append_only
count(lifecycle.events where event.type === "created") === 1
```

Creation is atomic:

```ts
birth transaction creates Identity and Lifecycle together
birth transaction appends created before persistence
persisted Identity + Lifecycle must already contain created
created is not a normal lifecycle transition
```

## transitions

Status is projected from the latest lifecycle event:

```ts
created -> alive
awakened -> alive
slept -> sleeping
died -> dead
```

Lifecycle event comes first:

```ts
append LifecycleEvent
then refresh Identity.status from latest LifecycleEvent
```

```ts
function canAppendLifecycleEvent(identity: Identity, lifecycle: Lifecycle, event: LifecycleEvent): boolean {
  if (identity.status === "dead") return false

  if (event.type === "created") {
    return false
  }

  if (event.type === "awakened") {
    return identity.status === "sleeping"
  }

  if (event.type === "slept") {
    return identity.status === "alive"
  }

  if (event.type === "died") {
    return identity.status === "alive" || identity.status === "sleeping"
  }

  return false
}

function createBirthIdentity(id: OrganismId, at: string): { identity: Identity; lifecycle: Lifecycle } {
  return {
    identity: { id, status: "alive", createdAt: at },
    lifecycle: { events: [{ type: "created", reason: "birth", at }] },
  }
}

function deriveLifeStatus(event: LifecycleEvent): LifeStatus {
  if (event.type === "created") return "alive"
  if (event.type === "awakened") return "alive"
  if (event.type === "slept") return "sleeping"
  if (event.type === "died") return "dead"
}

function refreshIdentityStatus(identity: Identity, lifecycle: Lifecycle): Identity {
  return { ...identity, status: deriveLifeStatus(latest(lifecycle.events)) }
}
```
