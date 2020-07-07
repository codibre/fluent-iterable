[fluent-iterable - v0.4.0](../README.md) › ["interval"](_interval_.md)

# Module: "interval"

## Index

### Functions

* [interval](_interval_.md#interval)

## Functions

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
