# projection

Projection is the minimum visible universe surface for one organism.

## types

```ts
export type ProjectionItemKind = "space" | "object" | "event"

export type ProjectionItem = {
  kind: ProjectionItemKind
  path: SpacePath | ObjectPath
  text: string
}

export type Projection = {
  subject: PrincipalId
  items: ProjectionItem[]
  at: string
}
```

## rules

```ts
Projection is created_by universe
Projection is consumed_by gate | organism_kernel_perception
Projection does_not_mutate universe
Projection does_not_create access
Projection does_not_store memory
```

`items` are world-safe visible surfaces: space, object, or event.

## boundaries

Projection does not expose:

```text
raw world_state
permission internals
hidden paths
operator info
backend info
kernel info
raw backend errors
full event log
```

Projection exposes surface, not meaning.
