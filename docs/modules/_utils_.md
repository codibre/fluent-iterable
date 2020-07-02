[fluent-iterable - v0.1.6](../README.md) › ["utils"](_utils_.md)

# Module: "utils"

## Index

### Functions

* [fluentGroup](_utils_.md#const-fluentgroup)
* [identity](_utils_.md#const-identity)
* [identityAsync](_utils_.md#const-identityasync)
* [interval](_utils_.md#interval)
* [truth](_utils_.md#const-truth)
* [truthAsync](_utils_.md#const-truthasync)

## Functions

### `Const` fluentGroup

▸ **fluentGroup**‹**T**, **R**›(`grp`: [Group](../interfaces/_types_.group.md)‹T, R›): *[FluentGroup](../interfaces/_types_.fluentgroup.md)‹T, R›*

**`internal`** 

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`grp` | [Group](../interfaces/_types_.group.md)‹T, R› |

**Returns:** *[FluentGroup](../interfaces/_types_.fluentgroup.md)‹T, R›*

___

### `Const` identity

▸ **identity**‹**T**›(`t`: T): *T*

**`internal`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *T*

___

### `Const` identityAsync

▸ **identityAsync**‹**T**›(`t`: T): *Promise‹T›*

**`internal`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *Promise‹T›*

___

###  interval

▸ **interval**(`fromInclusive?`: undefined | number, `count?`: undefined | number): *Iterable‹number›*

Generates a `count` long sequential integer interval starting from `fromInclusive`.

* The interval starts at zero if `fromInclusive` is not specified.
* The interval ends in infinity if `count` is not specified.

Examples:

1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
3. `interval()` generates an interval of `[0, 1, 2, ...]`
4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [fluent](_fluent_.md#fluent).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromInclusive?` | undefined &#124; number | Specifies the start of the interval. Defaults to zero. |
`count?` | undefined &#124; number | Specifies the length of the interval. The interval provides numbers indefinitely if omitted. |

**Returns:** *Iterable‹number›*

The iterable of numbers in the interval.

___

### `Const` truth

▸ **truth**(): *boolean*

**`internal`** 

**Returns:** *boolean*

___

### `Const` truthAsync

▸ **truthAsync**(): *Promise‹boolean›*

**`internal`** 

**Returns:** *Promise‹boolean›*
