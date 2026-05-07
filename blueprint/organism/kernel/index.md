# .kernel

`.kernel/` is the minimum life-support layer.

If a part can be safely exposed to the agent, repaired after agent damage, or handled as a universe rule, it does not belong in `.kernel/`.

## principle

```ts
kernel_mutation_actor = "kernel_runtime"

canAgentReadKernel = false
canAgentWriteKernel = false
```

## loops

```text
Identity.status
  <- LifecycleEvent
  <- ContextWindow continuity check
```

```text
PerceptionFrame
  -> BrainInput
  -> BrainOutput
  -> ActionIntent | NoIntent
  -> ActionIntent dispatches to organ / gate / universe
  -> NoIntent dispatches nowhere
  -> PerceptionFrame
```

## modules

```text
continuity/identity
continuity/lifecycle
continuity/context

frame/perception
frame/brain
frame/action
```

`identity`, `lifecycle`, and `context` preserve organism continuity.

`perception`, `brain`, and `action` define one runtime frame.

## global invariants

```ts
function canCreateRuntimeFrame(identity: Identity): boolean {
  return identity.status === "alive"
}

brain_frame_requires canCreateRuntimeFrame(identity)
perception_frame_requires canCreateRuntimeFrame(identity)
action_intent_requires canCreateRuntimeFrame(identity)

sleeping cannot_create_runtime_frame
dead cannot_create_runtime_frame

timestamp_source(lifecycle, perception, action) === kernel_runtime_clock_or_event_source
```
