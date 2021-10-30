[fluent-iterable - v1.19.0](../README.md) / FluentGroup

# Interface: FluentGroup<T, R\>

Represents a group of [fluent](../README.md#fluent) items of type `T` with a key of type `R`.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the [FluentGroup](FluentGroup.md). |
| `R` | The type of the key of the [FluentGroup](FluentGroup.md). |

## Hierarchy

- [`Group`](Group.md)<`T`, `R`\>

  ↳ **`FluentGroup`**

## Table of contents

### Properties

- [key](FluentGroup.md#key)
- [values](FluentGroup.md#values)

## Properties

### key

• **key**: `R`

The key of the [Group](Group.md).

#### Inherited from

[Group](Group.md).[key](Group.md#key)

___

### values

• **values**: [`FluentIterable`](FluentIterable.md)<`T`\>

The [fluent](../README.md#fluent) items in the [FluentGroup](FluentGroup.md).

#### Overrides

[Group](Group.md).[values](Group.md#values)
