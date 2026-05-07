# brain

## types

```ts
export type BrainModelId = string

export type BrainConfig = {
  model: BrainModelId
}

export type BrainInput = {
  text: string
}

export type BrainOutput = {
  text: string
}
```

## rules

```ts
brainConfig.model.length > 0
BrainInput is assembled_by kernel_runtime
BrainInput may_be_assembled_from PerceptionFrame | visible_self | kernel_floor
BrainInput must_not_be_assembled_from console | operator | backend | universe_truth
BrainOutput does_not_mutate self | universe | lifecycle | context
```

## kernel floor

```ts
kernel_floor = minimum_hidden_constraint_surface
kernel_floor preserves kernel_invariants
kernel_floor does_not_expose operator | backend | universe_truth
kernel_floor does_not_select memory | task | organ
kernel_floor does_not_provide goal | preference | behavior_advice | identity_narrative
```
