[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / interval

# Function: interval()

> **interval**(`fromInclusive`?, `count`?): [`FluentIterable`](../interfaces/FluentIterable.md)\<`number`\>

Generates a `count` long sequential integer interval starting from `fromInclusive`.

* The interval starts at zero if `fromInclusive` is not specified.
* The interval ends in infinity if `count` is not specified.

Examples:

1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
3. `interval()` generates an interval of `[0, 1, 2, ...]`
4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [[fluent]].

## Parameters

• **fromInclusive?**: `number`

Specifies the start of the interval. Defaults to zero.

• **count?**: `number`

Specifies the length of the interval. The interval provides numbers indefinitely if omitted.

## Returns

[`FluentIterable`](../interfaces/FluentIterable.md)\<`number`\>

The iterable of numbers in the interval.
