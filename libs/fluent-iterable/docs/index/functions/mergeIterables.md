[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / mergeIterables

# Function: mergeIterables()

## mergeIterables(iterables)

> **mergeIterables**\<`T`\>(...`iterables`): `AsyncIterable`\<`T`\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

### Type Parameters

• **T**

### Parameters

• ...**iterables**: `AsyncIterable`\<`T`, `any`, `any`\>[]

the iterables to merge

### Returns

`AsyncIterable`\<`T`\>

## mergeIterables(callback, iterables)

> **mergeIterables**\<`T`\>(`callback`, ...`iterables`): `AsyncIterable`\<`T`\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

### Type Parameters

• **T**

### Parameters

• **callback**: [`ErrorCallback`](../../types/interfaces/ErrorCallback.md)

A callback to case in case that any iterable throws an error. If informed, an failed iterable will not cause an error in the merging

• ...**iterables**: `AsyncIterable`\<`T`, `any`, `any`\>[]

the iterables to merge

### Returns

`AsyncIterable`\<`T`\>
