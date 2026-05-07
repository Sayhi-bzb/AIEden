# gate

Gate is the perception-action boundary.

## principle

```text
organism is not universe object
<uid> is organism presence surface in universe
gate owns organism.id <-> <uid> binding
```

## modules

```text
command
presence
perception
action
```

## boundary

```text
organism cannot directly read or write universe
universe cannot read organism interior
gate translates intent and projection
```

## loop

```text
organism ActionIntent
  -> gate
  -> universe action through <uid>
  -> universe event
  -> gate
  -> organism PerceptionFrame
```

## invariant

```text
<uid> is not organism
<uid> is not self
<uid> is not kernel
gate does_not_create universe access
```
