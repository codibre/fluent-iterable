[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / StatsStepper

# Interface: StatsStepper

A structure to controls the calculation of iterative means

## Extends

- [`AverageStepper`](../../types/interfaces/AverageStepper.md).[`MinMaxStepper`](MinMaxStepper.md)

## Properties

### avg

> `readonly` **avg**: `number`

Return the current avg/mean

#### Inherited from

[`AverageStepper`](../../types/interfaces/AverageStepper.md).[`avg`](../../types/interfaces/AverageStepper.md#avg)

***

### count

> `readonly` **count**: `number`

Return total number of computed items

#### Inherited from

[`AverageStepper`](../../types/interfaces/AverageStepper.md).[`count`](../../types/interfaces/AverageStepper.md#count)

***

### max

> `readonly` **max**: `number`

Return the current avg/mean

#### Inherited from

[`MinMaxStepper`](MinMaxStepper.md).[`max`](MinMaxStepper.md#max)

***

### min

> `readonly` **min**: `number`

Return the current avg/mean

#### Inherited from

[`MinMaxStepper`](MinMaxStepper.md).[`min`](MinMaxStepper.md#min)

***

### populationStdDev

> `readonly` **populationStdDev**: `number`

Return the current avg/mean

***

### populationVariance

> `readonly` **populationVariance**: `number`

Return the current avg/mean

***

### sampleStdDev

> `readonly` **sampleStdDev**: `number`

Return the current avg/mean

***

### sampleVariance

> `readonly` **sampleVariance**: `number`

Return the current avg/mean

## Methods

### step()

> **step**(`y`): `number`

Calculates next avg

#### Parameters

• **y**: `number`

the next number to be considered

#### Returns

`number`

#### Inherited from

[`MinMaxStepper`](MinMaxStepper.md).[`step`](MinMaxStepper.md#step)
