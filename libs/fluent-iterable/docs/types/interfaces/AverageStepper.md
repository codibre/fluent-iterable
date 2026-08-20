[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / AverageStepper

# Interface: AverageStepper

A structure to controls the calculation of iterative means

## Extended by

- [`StatsStepper`](../../index/interfaces/StatsStepper.md)

## Properties

### avg

> `readonly` **avg**: `number`

Return the current avg/mean

***

### count

> `readonly` **count**: `number`

Return total number of computed items

## Methods

### step()

> **step**(`y`): `number`

Calculates next avg

#### Parameters

• **y**: `number`

the next number to be considered

#### Returns

`number`
