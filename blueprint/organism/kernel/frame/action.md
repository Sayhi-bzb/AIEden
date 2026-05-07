# action

## types

```ts
export type ActionCommand = string

export type ActionIntent = {
  command: ActionCommand
  at: string
}

export type NoIntent = {
  reason: "no_command" | "invalid_command"
  at: string
}
```

## invariants

```ts
ActionIntent is created_by kernel_runtime
ActionIntent.command is extracted_from BrainOutput.text
ActionIntent cannot_be_accepted_from console | self | universe
ActionIntent is not_effective
ActionIntent does_not_directly_mutate self | universe
NoIntent is created_by kernel_runtime
NoIntent is valid frame outcome
NoIntent does_not_dispatch organ | gate | universe
```

## command rules

```ts
ActionCommand is single_line
ActionCommand is bash_like
ActionCommand is not_host_bash
ActionCommand does_not_support pipe | redirect | and_and | or_or | semicolon | variable_expansion | subshell
```

## dispatch

`OrganRegistry` and `DispatchResult` are boundary contracts.

`gate` is a runtime boundary, not a kernel module or substrate bit.

```ts
function dispatchActionIntent(intent: ActionIntent, effectiveRegistry: OrganRegistry): DispatchResult {
  const organName = firstToken(intent.command)

  const organ = effectiveRegistry.get(organName)
  if (!organ) {
    return worldSafeFailure("unknown_organ")
  }

  if (organ.kind === "special") {
    return dispatchToKernelRuntimeService({
      organ: organName,
      command: intent.command,
    })
  }

  return dispatchToOrgan({
    organ: organName,
    command: intent.command,
  })
}
```

## special organ dispatch

```ts
special_organ = self_visible_command_backed_by_kernel_runtime_service
```

Rules:

```ts
register is MVP special_organ
register dispatches to kernel_runtime.register
register implementation_is_not_editable_self_content
special organ names are resolved by effectiveRegistry
```

## registry boundary

```ts
action may_read effective_organ_registry
action does_not_own organ_registry
action does_not_mutate organ_registry
action does_not_understand organ_semantics
new_registered_organ requires_no_action_change
new_special_organ requires_no_action_change
action dispatches only effective registry organs
```

## flow

```text
BrainOutput.text
  -> extract ActionCommand | NoIntent
  -> ActionIntent | NoIntent
  -> ActionIntent parses first token as organ name
  -> ActionIntent resolves effective registry organ
  -> ActionIntent dispatches through ordinary organ or kernel_runtime special organ service
  -> NoIntent dispatches nowhere
  -> result returns as PerceptionFrame
```
