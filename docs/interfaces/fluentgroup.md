[fluent-iterable - v1.15.2](../README.md) / FluentGroup

# Interface: FluentGroup<T, R\>

Represents a group of [fluent](../README.md#fluent) items of type `T` with a key of type `R`.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the [FluentGroup](fluentgroup.md). |
| `R` | The type of the key of the [FluentGroup](fluentgroup.md). |

## Hierarchy

* [*Group*](group.md)<T, R\>

  ↳ **FluentGroup**

## Table of contents

### Properties

- [key](fluentgroup.md#key)
- [values](fluentgroup.md#values)

## Properties

### key

• **key**: R

The key of the [Group](group.md).

Inherited from: [Group](group.md).[key](group.md#key)

___

### values

• **values**: [*FluentIterable*](fluentiterable.md)<T\>

The [fluent](../README.md#fluent) items in the [FluentGroup](fluentgroup.md).

Overrides: [Group](group.md).[values](group.md#values)
