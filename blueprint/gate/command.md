# command

Command is the gate action language.

Syntax can be free.

Capability must be controlled.

Command is shell-like.

Command is not host bash.

## types

```ts
export type CommandText = string

export type CommandStep = {
  command: string
}

export type CommandPlan = {
  steps: CommandStep[]
}
```

## supported syntax

CommandText may use:

```text
multi-line
pipe
redirect
&&
||
;
subshell
```

These are expression syntax, not host shell power.

Pipe and redirect are virtual stream or world object operations.

They are not raw host pipe or host filesystem redirect.

## pipeline

```text
CommandText
  -> parse
  -> filter
  -> normalize
  -> CommandPlan
  -> dispatch to registered organ / universe
```

Gate must build a safe `CommandPlan` before dispatch.

## capability boundary

Command capability comes only from:

```text
registered organs
universe substrate / relation access
gate-recognized safe operators
```

Command must not bypass:

```text
organ registry
organism .kernel
gate
universe
```

## blocked behavior

Gate command handling must block:

```text
.kernel access
host filesystem access
backend/operator info
arbitrary network
dangerous redirect
unknown host binary
infinite loop
bypassing organ
bypassing universe
```

## dispatch

Each normalized `CommandStep` must resolve to one of:

```text
registered organ
gate-recognized safe operator
universe-recognized action
```

Universe still decides substrate and relation results.

Gate command does not create access.
