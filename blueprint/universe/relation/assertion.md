# assertion

Assertion is the minimum relation trace.

## types

```ts
export type Assertion = {
  actor: PrincipalId
  target: SpacePath | ObjectPath
  text: string
  at: string
}
```

## rules

```text
assertion leaves trace, not truth
assertion is relation_atom
assertion is_not substrate_bit
```

`text` is world-safe statement content.

Universe records the assertion, not its truth or legitimacy.
