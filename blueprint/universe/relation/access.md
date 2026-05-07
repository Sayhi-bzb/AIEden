# access

Access is the minimum action capability relation.

## types

```ts
export type RelationActionName =
  | "assert"
  | "access"

export type Access = {
  subject: PrincipalId
  target: SpacePath | ObjectPath
  actions: SubstrateActionName[]
}
```

## rules

```text
access enables action and leaves trace, not legitimacy
access is relation_atom
access is_not substrate_bit
access cannot_bypass substrate_gate_0
access create/change/remove emits event
```

`actions` are substrate action names:

```text
enter
expand
spawn
read
append
modify
```

Action acceptance requires:

```text
target substrate gate = 1
AND subject has access
```
