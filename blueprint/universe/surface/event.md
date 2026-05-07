# event

Event is the minimum universe causal trace.

## types

```ts
export type EventId = string
export type EventType = SubstrateActionName | RelationActionName | string

export type EventResult = "accepted" | "rejected"

export type Event = {
  id: EventId
  at: string
  actor: PrincipalId
  type: EventType
  target: SpacePath | ObjectPath
  result: EventResult
  reason?: string
}
```

## rules

```ts
Event is append_only
Event is universe_causal_trace
Event is_not state_snapshot
Event is_not diff
Event is_not backend_log
```

`reason` is optional world-safe reason:

```text
access_missing
target_gate_closed
not_found
```

## boundaries

Event does not store:

```text
before
after
diff
raw stack trace
backend error
universe truth leak
```

Event records outcome, not justice.
