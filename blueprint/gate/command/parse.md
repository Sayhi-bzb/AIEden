# parse

Parse turns organism output lines into organ calls.

Parse does not execute.

Parse does not grant capability.

## rules

```text
parse reads organism output
parse keeps line order
parse treats one non-empty line as one call candidate
parse extracts organ name and raw argument
parse returns invalid call result for invalid line
parse does_not_stop on invalid line
```

## boundaries

```text
parse does_not_dispatch
parse does_not_bind presence
parse does_not_create session
parse does_not_understand organ meaning
parse does_not_parse organ inner language
parse does_not_define shell
parse does_not_create universe action
parse does_not_create universe access
```
