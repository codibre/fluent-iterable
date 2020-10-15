**[fluent-iterable - v1.7.1](../README.md)**

> [Globals](../README.md) / "interval"

# Module: "interval"

## Index

### Functions

* [internalInterval](_interval_.md#internalinterval)
* [interval](_interval_.md#interval)

## Functions

### internalInterval

▸ **internalInterval**(`fromInclusive`: number \| undefined, `count`: number \| undefined): Generator\<number, void, unknown>

#### Parameters:

Name | Type |
------ | ------ |
`fromInclusive` | number \| undefined |
`count` | number \| undefined |

**Returns:** Generator\<number, void, unknown>

___

### interval

▸ **interval**(`fromInclusive?`: undefined \| number, `count?`: undefined \| number): [FluentIterable](../interfaces/_types_.fluentiterable.md)\<number>

Generates a `count` long sequential integer interval starting from `fromInclusive`.

* The interval starts at zero if `fromInclusive` is not specified.
* The interval ends in infinity if `count` is not specified.

Examples:

1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
3. `interval()` generates an interval of `[0, 1, 2, ...]`
4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [fluent](_fluent_.md#fluent).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fromInclusive?` | undefined \| number | Specifies the start of the interval. Defaults to zero. |
`count?` | undefined \| number | Specifies the length of the interval. The interval provides numbers indefinitely if omitted. |

**Returns:** [FluentIterable](../interfaces/_types_.fluentiterable.md)\<number>

The iterable of numbers in the interval.
