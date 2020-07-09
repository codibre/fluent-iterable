[fluent-iterable - v0.6.1](../README.md) › ["utils"](_utils_.md)

# Module: "utils"

## Index

### Functions

* [asyncNegation](_utils_.md#asyncnegation)
* [empty](_utils_.md#empty)
* [emptyAsync](_utils_.md#emptyasync)
* [eq](_utils_.md#eq)
* [falsity](_utils_.md#falsity)
* [fluentGroup](_utils_.md#fluentgroup)
* [ge](_utils_.md#ge)
* [gt](_utils_.md#gt)
* [identity](_utils_.md#identity)
* [iterate](_utils_.md#iterate)
* [iterateAll](_utils_.md#iterateall)
* [iterateAllAsync](_utils_.md#iterateallasync)
* [iterateAsync](_utils_.md#iterateasync)
* [le](_utils_.md#le)
* [lt](_utils_.md#lt)
* [negation](_utils_.md#negation)
* [resolver](_utils_.md#resolver)
* [resolverAsync](_utils_.md#resolverasync)
* [truth](_utils_.md#truth)

## Functions

###  asyncNegation

▸ **asyncNegation**‹**T**›(`predicate`: [AsyncPredicate](../interfaces/_types_.asyncpredicate.md)‹T›): *[AsyncPredicate](../interfaces/_types_.asyncpredicate.md)‹T›*

Provides a function that negates the informed async predicate

**Type parameters:**

▪ **T**

the item type of the [AsyncPredicate](../interfaces/_types_.asyncpredicate.md)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](../interfaces/_types_.asyncpredicate.md)‹T› | The async predicate to be negated  |

**Returns:** *[AsyncPredicate](../interfaces/_types_.asyncpredicate.md)‹T›*

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

▸ **fluentGroup**‹**Key**, **Value**›(`grp`: [Group](../interfaces/_types_.group.md)‹Value, Key›): *[FluentGroup](../interfaces/_types_.fluentgroup.md)‹Value, Key›*

Convert a simple [Group](../interfaces/_types_.group.md) to a [FluentGroup](../interfaces/_types_.fluentgroup.md)

**Type parameters:**

▪ **Key**

The type of the key

▪ **Value**

the type of the items of the value property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`grp` | [Group](../interfaces/_types_.group.md)‹Value, Key› | the [Group](../interfaces/_types_.group.md) to be converted  |

**Returns:** *[FluentGroup](../interfaces/_types_.fluentgroup.md)‹Value, Key›*

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

###  iterate

▸ **iterate**‹**T**›(`a`: Iterable‹T›): *Generator‹T, void, undefined›*

Iterates all element of an iterable

**Type parameters:**

▪ **T**

the item type of the [[Iterable]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | Iterable‹T› | The iterable  |

**Returns:** *Generator‹T, void, undefined›*

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

▸ **iterateAsync**‹**T**›(`a`: AsyncIterable‹T› | PromiseLike‹AnyIterable‹T››): *AsyncGenerator‹T, void, undefined›*

Iterates all element of an async iterable

**Type parameters:**

▪ **T**

the item type of the [[Iterable]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | AsyncIterable‹T› &#124; PromiseLike‹AnyIterable‹T›› | The async iterable  |

**Returns:** *AsyncGenerator‹T, void, undefined›*

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

▸ **negation**‹**T**›(`predicate`: [Predicate](../interfaces/_types_.predicate.md)‹T›): *[Predicate](../interfaces/_types_.predicate.md)‹T›*

Provides a function that negates the informed predicate

**Type parameters:**

▪ **T**

the item type of the [Predicate](../interfaces/_types_.predicate.md)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](../interfaces/_types_.predicate.md)‹T› | The predicate to be negated  |

**Returns:** *[Predicate](../interfaces/_types_.predicate.md)‹T›*

___

###  resolver

▸ **resolver**‹**T**, **R**›(`value`: T, `callback`: function): *R*

Pass the informed value to the callback and returns it's result

**Type parameters:**

▪ **T**

input type of the callback

▪ **R**

the result type of the callback

**Parameters:**

▪ **value**: *T*

The value to be passed on

▪ **callback**: *function*

The callback

▸ (`c`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`c` | T |

**Returns:** *R*

___

###  resolverAsync

▸ **resolverAsync**‹**T**, **R**›(`promise`: PromiseLike‹T›, `callback`: function): *Promise‹R›*

Resolves a promise like value and pass the result to a callback and returns it's result

**Type parameters:**

▪ **T**

input type of the callback

▪ **R**

the result type of the callback

**Parameters:**

▪ **promise**: *PromiseLike‹T›*

The promise like value

▪ **callback**: *function*

The callback

▸ (`c`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`c` | T |

**Returns:** *Promise‹R›*

___

###  truth

▸ **truth**(): *boolean*

Always returns true

**Returns:** *boolean*
