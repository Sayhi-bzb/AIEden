# gate

Gate is the perception-action boundary.

## principle

```text
organism is not universe object
<uid> is presence marker, not organism
universe stores <uid>
gate owns binding, not meaning
```

## modules

```text
binding/presence
binding/session

command/parse
command/dispatch

surface
```

## core map

```text
binding = who is connected
command = how action leaves
surface = how world returns
```

## boundary

```text
organism cannot directly read or write universe
universe cannot read organism interior
gate translates intent and projection
gate does_not_create universe access
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
binding does_not_parse_command
command does_not_bind_presence
surface does_not_execute_action
```
