[fluent-iterable - v0.1.5](../README.md) › [Globals](../globals.md) › ["utils"](_utils_.md)

# External module: "utils"

## Index

### Functions

* [identity](_utils_.md#const-identity)
* [identityAsync](_utils_.md#const-identityasync)
* [interval](_utils_.md#interval)
* [truth](_utils_.md#const-truth)
* [truthAsync](_utils_.md#const-truthasync)

## Functions

### `Const` identity

▸ **identity**<**T**>(`t`: T): *T*

*Defined in [src/utils.ts:1](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/utils.ts#L1)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *T*

___

### `Const` identityAsync

▸ **identityAsync**<**T**>(`t`: T): *Promise‹T›*

*Defined in [src/utils.ts:2](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/utils.ts#L2)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *Promise‹T›*

___

###  interval

▸ **interval**(`fromInclusive`: number, `count?`: undefined | number): *Iterable‹number›*

*Defined in [src/utils.ts:6](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/utils.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`fromInclusive` | number |
`count?` | undefined &#124; number |

**Returns:** *Iterable‹number›*

___

### `Const` truth

▸ **truth**(): *boolean*

*Defined in [src/utils.ts:3](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/utils.ts#L3)*

**Returns:** *boolean*

___

### `Const` truthAsync

▸ **truthAsync**(): *Promise‹boolean›*

*Defined in [src/utils.ts:4](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/utils.ts#L4)*

**Returns:** *Promise‹boolean›*
