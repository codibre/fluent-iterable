[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / FluentGroup

# Interface: FluentGroup<T, R\>

[index](../modules/index.md).FluentGroup

Represents a group of [fluent](../modules/index.md#fluent) items of type `T` with a key of type `R`.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the [FluentGroup](index.FluentGroup.md). |
| `R` | The type of the key of the [FluentGroup](index.FluentGroup.md). |

## Hierarchy

- [`Group`](index.Group.md)<`T`, `R`\>

  ↳ **`FluentGroup`**

## Table of contents

### Properties

- [key](index.FluentGroup.md#key)
- [values](index.FluentGroup.md#values)

## Properties

### key

• **key**: `R`

The key of the [Group](index.Group.md).

#### Inherited from

[Group](index.Group.md).[key](index.Group.md#key)

___

### values

• **values**: [`FluentIterable`](index.FluentIterable.md)<`T`\>

The [fluent](../modules/index.md#fluent) items in the [FluentGroup](index.FluentGroup.md).

#### Overrides

[Group](index.Group.md).[values](index.Group.md#values)
