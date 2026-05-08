# dispatch

Dispatch sends parsed organ calls to registered organs.

Dispatch does not decide world result.

Dispatch does not understand organ meaning.

## rules

```text
dispatch receives ordered organ calls
dispatch resolves each call against registered organs
dispatch sends valid call to its registered organ
dispatch returns unknown_organ for missing organ
dispatch keeps result order aligned with call order
dispatch does_not_stop later calls after failed call
```

## universe boundary

```text
dispatch does_not_send action directly to universe
organ may request universe action
organ universe action must pass gate binding
organ universe action uses bound <uid>
universe accepts or rejects
```

## boundaries

```text
dispatch does_not_create organ
dispatch does_not_create capability
dispatch does_not_create universe access
dispatch does_not_bind presence
dispatch does_not_create session
dispatch does_not_create perception
dispatch does_not_forge result
dispatch does_not_touch kernel
dispatch does_not_touch host
```
