# session

Session keeps one crossing attached to one living binding.

## definition

```text
presence = long binding
session = current crossing
```

Session confirms the crossing belongs to the same organism.

Session uses presence binding.

Session does not create presence binding.

## rules

```text
organism action uses its bound <uid>
organism result returns to same organism
unbound marker cannot open session
remnant cannot open session
```

Binding ended means session cannot open.

## boundaries

```text
session does_not_create binding
session does_not_create universe access
session does_not_define organism identity
session does_not_change presence marker
session does_not_parse command
session does_not_create projection
session does_not_explain social meaning
```
