```ts
export type Gate = 0 | 1

export type SpacePath = string
export type ObjectPath = string

export type SpacePermission = {
  enter: Gate
  change: {
    expand: Gate
    spawn: Gate
  }
}

export type ObjectPermission = {
  read: Gate
  change: {
    append: Gate
    modify: Gate
  }
}

export type Space = {
  path: SpacePath
  permission: SpacePermission
}

export type Object = {
  path: ObjectPath
  permission: ObjectPermission
}

export type PrincipalId = string

export type SubstrateActionName =
  | "enter"
  | "expand"
  | "spawn"
  | "read"
  | "append"
  | "modify"

export type RelationActionName =
  | "assert"
  | "access"

export type Access = {
  subject: PrincipalId
  target: SpacePath | ObjectPath
  actions: SubstrateActionName[]
}
```

`assert` and `access` are relation atoms, not substrate bits.

Substrate controls physical possibility.

Access controls action capability.

Assertion leaves trace.

Action acceptance check:

```text
target substrate gate = 1
AND subject has access
```

Composite actions:

```text
move object   = source modify + target enter + target spawn
rename object = modify + parent enter + parent spawn
copy object   = source read + target enter + target spawn + target append/write
delete object = parent enter + object modify
```
