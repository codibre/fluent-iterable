[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / FluentGroup

# Interface: FluentGroup\<T, R\>

Represents a group of [[fluent]] items of type `T` with a key of type `R`.

## Typeparam

T The type of the items in the [[FluentGroup]].

## Typeparam

R The type of the key of the [[FluentGroup]].

## Extends

- [`Group`](Group.md)\<`T`, `R`\>

## Type Parameters

• **T**

• **R**

## Properties

### key

> **key**: `R`

The key of the [[Group]].

#### Inherited from

[`Group`](Group.md).[`key`](Group.md#key)

***

### values

> **values**: `FluentIterable`\<`T`\>

The [[fluent]] items in the [[FluentGroup]].

#### Overrides

[`Group`](Group.md).[`values`](Group.md#values)
