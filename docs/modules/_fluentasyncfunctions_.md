[fluent-iterable - v0.1.5](../README.md) › [Globals](../globals.md) › ["fluentAsyncFunctions"](_fluentasyncfunctions_.md)

# External module: "fluentAsyncFunctions"

## Index

### Functions

* [all](_fluentasyncfunctions_.md#all)
* [allAsync](_fluentasyncfunctions_.md#allasync)
* [any](_fluentasyncfunctions_.md#any)
* [anyAsync](_fluentasyncfunctions_.md#anyasync)
* [append](_fluentasyncfunctions_.md#append)
* [avg](_fluentasyncfunctions_.md#avg)
* [avgAsync](_fluentasyncfunctions_.md#avgasync)
* [concat](_fluentasyncfunctions_.md#concat)
* [contains](_fluentasyncfunctions_.md#contains)
* [count](_fluentasyncfunctions_.md#count)
* [countAsync](_fluentasyncfunctions_.md#countasync)
* [distinct](_fluentasyncfunctions_.md#distinct)
* [distinctAsync](_fluentasyncfunctions_.md#distinctasync)
* [execute](_fluentasyncfunctions_.md#execute)
* [executeAsync](_fluentasyncfunctions_.md#executeasync)
* [filter](_fluentasyncfunctions_.md#filter)
* [filterAsync](_fluentasyncfunctions_.md#filterasync)
* [first](_fluentasyncfunctions_.md#first)
* [firstAsync](_fluentasyncfunctions_.md#firstasync)
* [flatten](_fluentasyncfunctions_.md#flatten)
* [flattenAsync](_fluentasyncfunctions_.md#flattenasync)
* [forEach](_fluentasyncfunctions_.md#foreach)
* [forEachAsync](_fluentasyncfunctions_.md#foreachasync)
* [group](_fluentasyncfunctions_.md#group)
* [groupAsync](_fluentasyncfunctions_.md#groupasync)
* [join](_fluentasyncfunctions_.md#join)
* [joinAsync](_fluentasyncfunctions_.md#joinasync)
* [last](_fluentasyncfunctions_.md#last)
* [lastAsync](_fluentasyncfunctions_.md#lastasync)
* [map](_fluentasyncfunctions_.md#map)
* [mapAsync](_fluentasyncfunctions_.md#mapasync)
* [max](_fluentasyncfunctions_.md#max)
* [maxAsync](_fluentasyncfunctions_.md#maxasync)
* [min](_fluentasyncfunctions_.md#min)
* [minAsync](_fluentasyncfunctions_.md#minasync)
* [partition](_fluentasyncfunctions_.md#partition)
* [prepend](_fluentasyncfunctions_.md#prepend)
* [readPartition](_fluentasyncfunctions_.md#readpartition)
* [reduce](_fluentasyncfunctions_.md#reduce)
* [reduceAndMap](_fluentasyncfunctions_.md#reduceandmap)
* [reduceAndMapAsync](_fluentasyncfunctions_.md#reduceandmapasync)
* [reduceAsync](_fluentasyncfunctions_.md#reduceasync)
* [repeat](_fluentasyncfunctions_.md#repeat)
* [skip](_fluentasyncfunctions_.md#skip)
* [skipWhile](_fluentasyncfunctions_.md#skipwhile)
* [skipWhileAsync](_fluentasyncfunctions_.md#skipwhileasync)
* [sort](_fluentasyncfunctions_.md#sort)
* [sum](_fluentasyncfunctions_.md#sum)
* [sumAsync](_fluentasyncfunctions_.md#sumasync)
* [take](_fluentasyncfunctions_.md#take)
* [takeWhile](_fluentasyncfunctions_.md#takewhile)
* [takeWhileAsync](_fluentasyncfunctions_.md#takewhileasync)
* [toArray](_fluentasyncfunctions_.md#toarray)
* [toObject](_fluentasyncfunctions_.md#toobject)
* [toObjectAsync](_fluentasyncfunctions_.md#toobjectasync)
* [top](_fluentasyncfunctions_.md#top)
* [topAsync](_fluentasyncfunctions_.md#topasync)
* [withIndex](_fluentasyncfunctions_.md#withindex)

## Functions

###  all

▸ **all**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsyncFunctions.ts:348](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L348)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  allAsync

▸ **allAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsyncFunctions.ts:358](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L358)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  any

▸ **any**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsyncFunctions.ts:368](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L368)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *Promise‹boolean›*

___

###  anyAsync

▸ **anyAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsyncFunctions.ts:372](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L372)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  append

▸ **append**<**T**>(`iterable`: AsyncIterable‹T›, `item`: T): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:107](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L107)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`item` | T |

**Returns:** *AsyncIterable‹T›*

___

###  avg

▸ **avg**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:486](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L486)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *Promise‹number›*

___

###  avgAsync

▸ **avgAsync**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:501](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L501)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  concat

▸ **concat**<**T**>(...`iterables`: Array‹AsyncIterable‹T››): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:117](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L117)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...iterables` | Array‹AsyncIterable‹T›› |

**Returns:** *AsyncIterable‹T›*

___

###  contains

▸ **contains**<**T**>(`iterable`: AsyncIterable‹T›, `item`: T): *Promise‹boolean›*

*Defined in [src/fluentAsyncFunctions.ts:376](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L376)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`item` | T |

**Returns:** *Promise‹boolean›*

___

###  count

▸ **count**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:221](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L221)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *Promise‹number›*

___

###  countAsync

▸ **countAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:232](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L232)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹number›*

___

###  distinct

▸ **distinct**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:162](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L162)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |  identity as Mapper<T, R> |

**Returns:** *AsyncIterable‹T›*

___

###  distinctAsync

▸ **distinctAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:178](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L178)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹T›*

___

###  execute

▸ **execute**<**T**>(`iterable`: AsyncIterable‹T›, `action`: [Action](_types_.md#action)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:427](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L427)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`action` | [Action](_types_.md#action)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  executeAsync

▸ **executeAsync**<**T**>(`iterable`: AsyncIterable‹T›, `action`: [AsyncAction](_types_.md#asyncaction)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:434](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L434)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`action` | [AsyncAction](_types_.md#asyncaction)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  filter

▸ **filter**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:91](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L91)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  filterAsync

▸ **filterAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:99](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L99)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  first

▸ **first**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:243](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L243)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *Promise‹T | undefined›*

___

###  firstAsync

▸ **firstAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:253](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L253)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  flatten

▸ **flatten**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, Iterable‹R››): *AsyncIterable‹R›*

*Defined in [src/fluentAsyncFunctions.ts:140](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L140)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, Iterable‹R›› |  t => (t as unknown) as Iterable<R> |

**Returns:** *AsyncIterable‹R›*

___

###  flattenAsync

▸ **flattenAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, AsyncIterable‹R››): *AsyncIterable‹R›*

*Defined in [src/fluentAsyncFunctions.ts:149](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L149)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, AsyncIterable‹R›› |

**Returns:** *AsyncIterable‹R›*

___

###  forEach

▸ **forEach**<**T**>(`iterable`: AsyncIterable‹T›, `action`: [Action](_types_.md#action)‹T›): *Promise‹void›*

*Defined in [src/fluentAsyncFunctions.ts:415](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L415)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`action` | [Action](_types_.md#action)‹T› |

**Returns:** *Promise‹void›*

___

###  forEachAsync

▸ **forEachAsync**<**T**>(`iterable`: AsyncIterable‹T›, `action`: [AsyncAction](_types_.md#asyncaction)‹T›): *Promise‹void›*

*Defined in [src/fluentAsyncFunctions.ts:421](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L421)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`action` | [AsyncAction](_types_.md#asyncaction)‹T› |

**Returns:** *Promise‹void›*

___

###  group

▸ **group**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

*Defined in [src/fluentAsyncFunctions.ts:191](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L191)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |

**Returns:** *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

___

###  groupAsync

▸ **groupAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

*Defined in [src/fluentAsyncFunctions.ts:206](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L206)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

___

###  join

▸ **join**<**T**>(`iterable`: AsyncIterable‹T›, `separator`: string, `mapper`: [Mapper](_types_.md#mapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluentAsyncFunctions.ts:441](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L441)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`separator` | string | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, string› |  identity as Mapper<T, string> |

**Returns:** *Promise‹string›*

___

###  joinAsync

▸ **joinAsync**<**T**>(`iterable`: AsyncIterable‹T›, `separator`: string, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluentAsyncFunctions.ts:458](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L458)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`separator` | string |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, string› |

**Returns:** *Promise‹string›*

___

###  last

▸ **last**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:288](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L288)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *Promise‹T | undefined›*

___

###  lastAsync

▸ **lastAsync**<**T**>(`iterable`: AsyncIterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:300](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L300)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  map

▸ **map**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *AsyncIterable‹R›*

*Defined in [src/fluentAsyncFunctions.ts:79](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L79)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |

**Returns:** *AsyncIterable‹R›*

___

###  mapAsync

▸ **mapAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹R›*

*Defined in [src/fluentAsyncFunctions.ts:85](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L85)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹R›*

___

###  max

▸ **max**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:552](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L552)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *Promise‹T | undefined›*

___

###  maxAsync

▸ **maxAsync**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:559](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L559)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  min

▸ **min**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:541](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L541)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *Promise‹T | undefined›*

___

###  minAsync

▸ **minAsync**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:548](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L548)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  partition

▸ **partition**<**T**>(`iterable`: AsyncIterable‹T›, `size`: number): *AsyncIterable‹AsyncIterable‹T››*

*Defined in [src/fluentAsyncFunctions.ts:277](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L277)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`size` | number |

**Returns:** *AsyncIterable‹AsyncIterable‹T››*

___

###  prepend

▸ **prepend**<**T**>(`iterable`: AsyncIterable‹T›, `item`: T): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:112](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L112)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`item` | T |

**Returns:** *AsyncIterable‹T›*

___

###  readPartition

▸ **readPartition**<**T**>(`iterator`: AsyncIterator‹T›, `next`: IteratorResult‹T›, `size`: number): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:263](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L263)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | AsyncIterator‹T› |
`next` | IteratorResult‹T› |
`size` | number |

**Returns:** *AsyncIterable‹T›*

___

###  reduce

▸ **reduce**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `reducer`: [Reducer](_types_.md#reducer)‹T, R›, `initial`: R): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:340](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L340)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`reducer` | [Reducer](_types_.md#reducer)‹T, R› |
`initial` | R |

**Returns:** *Promise‹R›*

___

###  reduceAndMap

▸ **reduceAndMap**<**T**, **A**, **R**>(`iterable`: AsyncIterable‹T›, `reducer`: [Reducer](_types_.md#reducer)‹T, A›, `initial`: A, `result`: [Mapper](_types_.md#mapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:312](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L312)*

**Type parameters:**

▪ **T**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`reducer` | [Reducer](_types_.md#reducer)‹T, A› |
`initial` | A |
`result` | [Mapper](_types_.md#mapper)‹A, R› |

**Returns:** *Promise‹R›*

___

###  reduceAndMapAsync

▸ **reduceAndMapAsync**<**T**, **A**, **R**>(`iterable`: AsyncIterable‹T›, `reducer`: [AsyncReducer](_types_.md#asyncreducer)‹T, A›, `initial`: A, `result`: [AsyncMapper](_types_.md#asyncmapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:326](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L326)*

**Type parameters:**

▪ **T**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`reducer` | [AsyncReducer](_types_.md#asyncreducer)‹T, A› |
`initial` | A |
`result` | [AsyncMapper](_types_.md#asyncmapper)‹A, R› |

**Returns:** *Promise‹R›*

___

###  reduceAsync

▸ **reduceAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `reducer`: [AsyncReducer](_types_.md#asyncreducer)‹T, R›, `initial`: R): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:344](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L344)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`reducer` | [AsyncReducer](_types_.md#asyncreducer)‹T, R› |
`initial` | R |

**Returns:** *Promise‹R›*

___

###  repeat

▸ **repeat**<**T**>(`iterable`: AsyncIterable‹T›, `n`: number): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:123](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L123)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`n` | number |

**Returns:** *AsyncIterable‹T›*

___

###  skip

▸ **skip**<**T**>(`iterable`: AsyncIterable‹T›, `n`: number): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:74](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L74)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`n` | number |

**Returns:** *AsyncIterable‹T›*

___

###  skipWhile

▸ **skipWhile**<**T**>(`iterable`: AsyncIterable‹T›, `condition`: [Predicate](_types_.md#predicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:48](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L48)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`condition` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  skipWhileAsync

▸ **skipWhileAsync**<**T**>(`iterable`: AsyncIterable‹T›, `condition`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:61](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L61)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`condition` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  sort

▸ **sort**<**T**>(`iterable`: AsyncIterable‹T›, `comparer?`: [Comparer](_types_.md#comparer)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:158](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L158)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`comparer?` | [Comparer](_types_.md#comparer)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  sum

▸ **sum**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:475](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L475)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *Promise‹number›*

___

###  sumAsync

▸ **sumAsync**<**T**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsyncFunctions.ts:482](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L482)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  take

▸ **take**<**T**>(`iterable`: AsyncIterable‹T›, `n`: number): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:43](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L43)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`n` | number |

**Returns:** *AsyncIterable‹T›*

___

###  takeWhile

▸ **takeWhile**<**T**>(`iterable`: AsyncIterable‹T›, `condition`: [Predicate](_types_.md#predicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:23](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`condition` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  takeWhileAsync

▸ **takeWhileAsync**<**T**>(`iterable`: AsyncIterable‹T›, `condition`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentAsyncFunctions.ts:33](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L33)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`condition` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  toArray

▸ **toArray**<**T**>(`iterable`: AsyncIterable‹T›): *Promise‹T[]›*

*Defined in [src/fluentAsyncFunctions.ts:380](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L380)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |

**Returns:** *Promise‹T[]›*

___

###  toObject

▸ **toObject**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `keySelector`: [Mapper](_types_.md#mapper)‹T, string›, `valueSelector`: [Mapper](_types_.md#mapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:389](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L389)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› | - |
`keySelector` | [Mapper](_types_.md#mapper)‹T, string› | - |
`valueSelector` | [Mapper](_types_.md#mapper)‹T, any› |  identity |

**Returns:** *Promise‹R›*

___

###  toObjectAsync

▸ **toObjectAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `keySelector`: [AsyncMapper](_types_.md#asyncmapper)‹T, string›, `valueSelector`: [AsyncMapper](_types_.md#asyncmapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluentAsyncFunctions.ts:402](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L402)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`keySelector` | [AsyncMapper](_types_.md#asyncmapper)‹T, string› |
`valueSelector` | [AsyncMapper](_types_.md#asyncmapper)‹T, any› |

**Returns:** *Promise‹R›*

___

###  top

▸ **top**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›, `comparer`: [Comparer](_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:513](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L513)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |
`comparer` | [Comparer](_types_.md#comparer)‹R› |

**Returns:** *Promise‹T | undefined›*

___

###  topAsync

▸ **topAsync**<**T**, **R**>(`iterable`: AsyncIterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›, `comparer`: [Comparer](_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluentAsyncFunctions.ts:525](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L525)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |
`comparer` | [Comparer](_types_.md#comparer)‹R› |

**Returns:** *Promise‹T | undefined›*

___

###  withIndex

▸ **withIndex**<**T**>(`iterable`: AsyncIterable‹T›): *AsyncIterable‹[Indexed](../interfaces/_types_.indexed.md)‹T››*

*Defined in [src/fluentAsyncFunctions.ts:16](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsyncFunctions.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |

**Returns:** *AsyncIterable‹[Indexed](../interfaces/_types_.indexed.md)‹T››*
