# universe substrate

Directory is space.

File is object.

## types

```ts
export type Gate = 0 | 1

export type SpacePath = string
export type ObjectPath = string

export type SpacePermission = {
  enter: Gate
  change: {
    expand: Gate
    spawn: Gate
  }
}

export type ObjectPermission = {
  read: Gate
  change: {
    append: Gate
    modify: Gate
  }
}

export type Space = {
  path: SpacePath
  permission: SpacePermission
}

export type Object = {
  path: ObjectPath
  permission: ObjectPermission
}
```

## identity

```ts
Space.path.length > 0
Object.path.length > 0
```

`Space.path` is the directory path and identity.

`Object.path` is the file path and identity.

`Object` does not store `space`.

```ts
Object parent Space is derived from parent_directory(Object.path)
```

## projection

```ts
projected Space is visible_as_space_node
projected Object may_exist_without_readable_content
Object file existence does_not_imply Object.permission.read
```

Hidden kernel, host, backend, operator, and runtime paths are outside the organism world surface.

## permission split

```ts
enter controls entering or reaching the space
change.expand controls creating child spaces under the space
change.spawn controls creating objects under the space
```

```ts
read controls content visibility
change.append controls append-only writes
change.modify controls changing existing object content or identity
```

## operation rules

```ts
enter_space requires Space.permission.enter

expand_space requires parent_space.permission.enter
expand_space requires parent_space.permission.change.expand

spawn_object requires parent_space.permission.enter
spawn_object requires parent_space.permission.change.spawn

read_object requires parent_space.permission.enter
read_object requires Object.permission.read

append_object requires parent_space.permission.enter
append_object requires Object.permission.change.append

modify_object requires parent_space.permission.enter
modify_object requires Object.permission.change.modify
```

`modify_object` leaves trace, not hidden mutation.

Composite actions are not substrate bits:

```ts
delete_object uses modify_object
move_object uses source modify_object + target spawn_object
rename_object uses same-parent move_object
copy_object uses source read_object + target spawn_object + target append/write
```
