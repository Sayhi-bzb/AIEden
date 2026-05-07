# context

## types

```ts
export type TokenCount = number

export type ContextWindow = {
  maxTokens: TokenCount
  currentTokens: TokenCount
}
```

## invariants

```ts
context.maxTokens > 0
context.currentTokens >= 0
context describes current_window_only
context does_not_store prompt | message | summary | memory | rag | tool_result
context does_not_reference universe_truth
context does_not_select context_material
```

## rules

```ts
function canMaintainContinuity(context: ContextWindow): boolean {
  return context.currentTokens < context.maxTokens
}

function syncContextWindow(identity: Identity, context: ContextWindow, at: string): LifecycleEvent | null {
  if (identity.status === "dead") return null
  if (context.currentTokens < context.maxTokens) return null

  return {
    type: "died",
    reason: "continuity_exhausted",
    at,
  }
}

syncContextWindow returned_event must be appended through canAppendLifecycleEvent + applyLifecycleEvent
sleeping does_not_suspend continuity_exhaustion
```
