# perception

## types

```ts
export type PerceptionFrame = {
  text: string
  at: string
}
```

## rules

```ts
PerceptionFrame is created_by kernel_runtime
kernel_runtime only creates PerceptionFrame from gate_projection | action_result
PerceptionFrame may_feed BrainInput.text
PerceptionFrame does_not_store long_term_memory
PerceptionFrame does_not_decide action
PerceptionFrame does_not_judge universe_rules
```
