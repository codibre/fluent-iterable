[fluent-iterable - v1.4.0](../README.md) › ["utils"](_utils_.md)

# Module: "utils"

## Index

### Variables

* [iterate](_utils_.md#const-iterate)

### Functions

* [asyncNegation](_utils_.md#asyncnegation)
* [constant](_utils_.md#constant)
* [empty](_utils_.md#empty)
* [emptyAsync](_utils_.md#emptyasync)
* [eq](_utils_.md#eq)
* [falsity](_utils_.md#falsity)
* [fluentGroup](_utils_.md#fluentgroup)
* [ge](_utils_.md#ge)
* [gt](_utils_.md#gt)
* [identity](_utils_.md#identity)
* [iterateAll](_utils_.md#iterateall)
* [iterateAllAsync](_utils_.md#iterateallasync)
* [iterateAsync](_utils_.md#iterateasync)
* [iterateObjEntries](_utils_.md#iterateobjentries)
* [iterateObjProps](_utils_.md#iterateobjprops)
* [le](_utils_.md#le)
* [lt](_utils_.md#lt)
* [negation](_utils_.md#negation)
* [promiseIterateAsync](_utils_.md#promiseiterateasync)
* [truth](_utils_.md#truth)

## Variables

### `Const` iterate

• **iterate**: *[identity](_utils_.md#identity)* = identity

Iterates all element of an iterable

**`typeparam`** the item type of the [[Iterable]]

**`param`** The iterable

## Functions

###  asyncNegation

▸ **asyncNegation**‹**T**›(`predicate`: AsyncPredicate‹T›): *AsyncPredicate‹T›*

Provides a function that negates the informed async predicate

**Type parameters:**

▪ **T**

the item type of the [[AsyncPredicate]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | AsyncPredicate‹T› | The async predicate to be negated  |

**Returns:** *AsyncPredicate‹T›*

___

###  constant

▸ **constant**‹**T**›(`value`: T): *constantValue*

Returns a function that always returns the informed value

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | the constant value  |

**Returns:** *constantValue*

___

###  empty

▸ **empty**(): *Iterable‹undefined›*

Provides an empty iterable

**Returns:** *Iterable‹undefined›*

___

###  emptyAsync

▸ **emptyAsync**(): *AsyncIterable‹undefined›*

Provides an empty async iterable

**Returns:** *AsyncIterable‹undefined›*

___

###  eq

▸ **eq**‹**T**›(`b`: any): *(Anonymous function)*

Provides a "equals" comparer

**Type parameters:**

▪ **T**

the type of b

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`b` | any | the value for comparison  |

**Returns:** *(Anonymous function)*

___

###  falsity

▸ **falsity**(): *boolean*

Always returns false

**Returns:** *boolean*

___

###  fluentGroup

▸ **fluentGroup**‹**Key**, **Value**›(`grp`: [Group](../interfaces/_types_base_.group.md)‹Value, Key›): *[FluentGroup](../interfaces/_types_base_.fluentgroup.md)‹Value, Key›*

Convert a simple [Group](../interfaces/_types_base_.group.md) to a [FluentGroup](../interfaces/_types_base_.fluentgroup.md)

**Type parameters:**

▪ **Key**

The type of the key

▪ **Value**

the type of the items of the value property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`grp` | [Group](../interfaces/_types_base_.group.md)‹Value, Key› | the [Group](../interfaces/_types_base_.group.md) to be converted  |

**Returns:** *[FluentGroup](../interfaces/_types_base_.fluentgroup.md)‹Value, Key›*

___

###  ge

▸ **ge**‹**T**›(`b`: any): *(Anonymous function)*

Provides a "greater or equal" comparer

**Type parameters:**

▪ **T**

the type of b

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`b` | any | the value for comparison  |

**Returns:** *(Anonymous function)*

___

###  gt

▸ **gt**‹**T**›(`b`: any): *(Anonymous function)*

Provides a "greater than" comparer

**Type parameters:**

▪ **T**

the type of b

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`b` | any | the value for comparison  |

**Returns:** *(Anonymous function)*

___

###  identity

▸ **identity**‹**T**›(`param`: T): *T*

Returns exactly the informed parameter

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | T | The informed parameter to be returned  |

**Returns:** *T*

___

###  iterateAll

▸ **iterateAll**‹**T**›(`a`: Iterable‹Iterable‹T››): *Generator‹T, void, undefined›*

Iterates in all elements of an iterable of iterables

**Type parameters:**

▪ **T**

the item type of the internal [[Iterable]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | Iterable‹Iterable‹T›› | The iterable  |

**Returns:** *Generator‹T, void, undefined›*

___

###  iterateAllAsync

▸ **iterateAllAsync**‹**T**›(`a`: AsyncIterable‹AnyIterable‹T››): *AsyncGenerator‹T, void, undefined›*

Iterates in all elements of an async iterable of iterables or async iterables

**Type parameters:**

▪ **T**

the item type of the internal [[Iterable/AsyncIterable]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | AsyncIterable‹AnyIterable‹T›› | The async iterable  |

**Returns:** *AsyncGenerator‹T, void, undefined›*

___

###  iterateAsync

▸ **iterateAsync**‹**T**›(`a`: AnyIterable‹T› | PromiseLike‹AnyIterable‹T››): *AsyncIterable‹T›*

Iterates all element of an async iterable

**Type parameters:**

▪ **T**

the item type of the [[Iterable]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | AnyIterable‹T› &#124; PromiseLike‹AnyIterable‹T›› | The async iterable  |

**Returns:** *AsyncIterable‹T›*

___

###  iterateObjEntries

▸ **iterateObjEntries**‹**T**›(`obj`: T): *Generator‹(keyof T | T[keyof T])[], void, unknown›*

Iterates over all owned entries of given object

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to iterate with  |

**Returns:** *Generator‹(keyof T | T[keyof T])[], void, unknown›*

___

###  iterateObjProps

▸ **iterateObjProps**‹**T**›(`obj`: T): *Iterable‹keyof T›*

Iterates over all owned properties of the given object

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to iterate with  |

**Returns:** *Iterable‹keyof T›*

___

###  le

▸ **le**‹**T**›(`b`: any): *(Anonymous function)*

Provides a "lesser or equal" comparer

**Type parameters:**

▪ **T**

the type of b

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`b` | any | the value for comparison  |

**Returns:** *(Anonymous function)*

___

###  lt

▸ **lt**‹**T**›(`b`: any): *(Anonymous function)*

Provides a "lesser than" comparer

**Type parameters:**

▪ **T**

the type of b

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`b` | any | the value for comparison  |

**Returns:** *(Anonymous function)*

___

###  negation

▸ **negation**‹**T**›(`predicate`: [Predicate](../interfaces/_types_base_.predicate.md)‹T›): *[Predicate](../interfaces/_types_base_.predicate.md)‹T›*

Provides a function that negates the informed predicate

**Type parameters:**

▪ **T**

the item type of the [Predicate](../interfaces/_types_base_.predicate.md)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](../interfaces/_types_base_.predicate.md)‹T› | The predicate to be negated  |

**Returns:** *[Predicate](../interfaces/_types_base_.predicate.md)‹T›*

___

###  promiseIterateAsync

▸ **promiseIterateAsync**‹**T**›(`a`: PromiseLike‹AnyIterable‹T››): *AsyncIterable‹T›*

**`internal`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | PromiseLike‹AnyIterable‹T›› |

**Returns:** *AsyncIterable‹T›*

___

###  truth

▸ **truth**(): *boolean*

Always returns true

**Returns:** *boolean*
