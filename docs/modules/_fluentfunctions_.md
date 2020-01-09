[fluent-iterable - v0.1.4](../README.md) › [Globals](../globals.md) › ["fluentFunctions"](_fluentfunctions_.md)

# External module: "fluentFunctions"

## Index

### Functions

* [all](_fluentfunctions_.md#all)
* [allAsync](_fluentfunctions_.md#allasync)
* [any](_fluentfunctions_.md#any)
* [anyAsync](_fluentfunctions_.md#anyasync)
* [append](_fluentfunctions_.md#append)
* [avg](_fluentfunctions_.md#avg)
* [avgAsync](_fluentfunctions_.md#avgasync)
* [concat](_fluentfunctions_.md#concat)
* [contains](_fluentfunctions_.md#contains)
* [count](_fluentfunctions_.md#count)
* [countAsync](_fluentfunctions_.md#countasync)
* [distinct](_fluentfunctions_.md#distinct)
* [distinctAsync](_fluentfunctions_.md#distinctasync)
* [execute](_fluentfunctions_.md#execute)
* [executeAsync](_fluentfunctions_.md#executeasync)
* [filter](_fluentfunctions_.md#filter)
* [filterAsync](_fluentfunctions_.md#filterasync)
* [first](_fluentfunctions_.md#first)
* [firstAsync](_fluentfunctions_.md#firstasync)
* [flatten](_fluentfunctions_.md#flatten)
* [flattenAsync](_fluentfunctions_.md#flattenasync)
* [forEach](_fluentfunctions_.md#foreach)
* [forEachAsync](_fluentfunctions_.md#foreachasync)
* [group](_fluentfunctions_.md#group)
* [groupAsync](_fluentfunctions_.md#groupasync)
* [join](_fluentfunctions_.md#join)
* [joinAsync](_fluentfunctions_.md#joinasync)
* [last](_fluentfunctions_.md#last)
* [lastAsync](_fluentfunctions_.md#lastasync)
* [map](_fluentfunctions_.md#map)
* [mapAsync](_fluentfunctions_.md#mapasync)
* [max](_fluentfunctions_.md#max)
* [maxAsync](_fluentfunctions_.md#maxasync)
* [min](_fluentfunctions_.md#min)
* [minAsync](_fluentfunctions_.md#minasync)
* [partition](_fluentfunctions_.md#partition)
* [prepend](_fluentfunctions_.md#prepend)
* [readPartition](_fluentfunctions_.md#readpartition)
* [reduce](_fluentfunctions_.md#reduce)
* [reduceAndMap](_fluentfunctions_.md#reduceandmap)
* [reduceAndMapAsync](_fluentfunctions_.md#reduceandmapasync)
* [reduceAsync](_fluentfunctions_.md#reduceasync)
* [repeat](_fluentfunctions_.md#repeat)
* [skip](_fluentfunctions_.md#skip)
* [skipWhile](_fluentfunctions_.md#skipwhile)
* [skipWhileAsync](_fluentfunctions_.md#skipwhileasync)
* [sort](_fluentfunctions_.md#sort)
* [sum](_fluentfunctions_.md#sum)
* [sumAsync](_fluentfunctions_.md#sumasync)
* [take](_fluentfunctions_.md#take)
* [takeWhile](_fluentfunctions_.md#takewhile)
* [takeWhileAsync](_fluentfunctions_.md#takewhileasync)
* [toArray](_fluentfunctions_.md#toarray)
* [toAsync](_fluentfunctions_.md#toasync)
* [toObject](_fluentfunctions_.md#toobject)
* [toObjectAsync](_fluentfunctions_.md#toobjectasync)
* [top](_fluentfunctions_.md#top)
* [topAsync](_fluentfunctions_.md#topasync)
* [withIndex](_fluentfunctions_.md#withindex)

## Functions

###  all

▸ **all**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *boolean*

*Defined in [src/fluentFunctions.ts:338](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L338)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *boolean*

___

###  allAsync

▸ **allAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentFunctions.ts:348](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L348)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  any

▸ **any**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *boolean*

*Defined in [src/fluentFunctions.ts:358](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L358)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *boolean*

___

###  anyAsync

▸ **anyAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentFunctions.ts:362](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L362)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  append

▸ **append**<**T**>(`iterable`: Iterable‹T›, `item`: T): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:133](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L133)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`item` | T |

**Returns:** *Iterable‹T›*

___

###  avg

▸ **avg**<**T**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *number*

*Defined in [src/fluentFunctions.ts:473](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L473)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *number*

___

###  avgAsync

▸ **avgAsync**<**T**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentFunctions.ts:485](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L485)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  concat

▸ **concat**<**T**>(...`iterables`: Array‹Iterable‹T››): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:143](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L143)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...iterables` | Array‹Iterable‹T›› |

**Returns:** *Iterable‹T›*

___

###  contains

▸ **contains**<**T**>(`iterable`: Iterable‹T›, `item`: T): *boolean*

*Defined in [src/fluentFunctions.ts:366](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L366)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`item` | T |

**Returns:** *boolean*

___

###  count

▸ **count**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *number*

*Defined in [src/fluentFunctions.ts:241](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L241)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *number*

___

###  countAsync

▸ **countAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹number›*

*Defined in [src/fluentFunctions.ts:252](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L252)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹number›*

___

###  distinct

▸ **distinct**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:185](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L185)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |  identity as Mapper<T, R> |

**Returns:** *Iterable‹T›*

___

###  distinctAsync

▸ **distinctAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:198](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L198)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹T›*

___

###  execute

▸ **execute**<**T**>(`iterable`: Iterable‹T›, `action`: [Action](_types_.md#action)‹T›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:421](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L421)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`action` | [Action](_types_.md#action)‹T› |

**Returns:** *Iterable‹T›*

___

###  executeAsync

▸ **executeAsync**<**T**>(`iterable`: Iterable‹T›, `action`: [AsyncAction](_types_.md#asyncaction)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:428](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L428)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`action` | [AsyncAction](_types_.md#asyncaction)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  filter

▸ **filter**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:92](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L92)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *Iterable‹T›*

___

###  filterAsync

▸ **filterAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:100](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L100)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  first

▸ **first**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *T | undefined*

*Defined in [src/fluentFunctions.ts:263](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L263)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *T | undefined*

___

###  firstAsync

▸ **firstAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentFunctions.ts:273](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L273)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  flatten

▸ **flatten**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, Iterable‹R››): *Iterable‹R›*

*Defined in [src/fluentFunctions.ts:166](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L166)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, Iterable‹R›› |  t => (t as unknown) as Iterable<R> |

**Returns:** *Iterable‹R›*

___

###  flattenAsync

▸ **flattenAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, Iterable‹R››): *AsyncIterable‹R›*

*Defined in [src/fluentFunctions.ts:175](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L175)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, Iterable‹R›› |

**Returns:** *AsyncIterable‹R›*

___

###  forEach

▸ **forEach**<**T**>(`iterable`: Iterable‹T›, `action`: [Action](_types_.md#action)‹T›): *void*

*Defined in [src/fluentFunctions.ts:409](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L409)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`action` | [Action](_types_.md#action)‹T› |

**Returns:** *void*

___

###  forEachAsync

▸ **forEachAsync**<**T**>(`iterable`: Iterable‹T›, `action`: [AsyncAction](_types_.md#asyncaction)‹T›): *Promise‹void›*

*Defined in [src/fluentFunctions.ts:415](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L415)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`action` | [AsyncAction](_types_.md#asyncaction)‹T› |

**Returns:** *Promise‹void›*

___

###  group

▸ **group**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *Iterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

*Defined in [src/fluentFunctions.ts:211](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L211)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |

**Returns:** *Iterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

___

###  groupAsync

▸ **groupAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

*Defined in [src/fluentFunctions.ts:226](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L226)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹[Group](../interfaces/_types_.group.md)‹T, R››*

___

###  join

▸ **join**<**T**>(`iterable`: Iterable‹T›, `separator`: string, `mapper`: [Mapper](_types_.md#mapper)‹T, string›): *string*

*Defined in [src/fluentFunctions.ts:435](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L435)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`separator` | string | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, string› |  identity as Mapper<T, string> |

**Returns:** *string*

___

###  joinAsync

▸ **joinAsync**<**T**>(`iterable`: Iterable‹T›, `separator`: string, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluentFunctions.ts:452](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L452)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`separator` | string |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, string› |

**Returns:** *Promise‹string›*

___

###  last

▸ **last**<**T**>(`iterable`: Iterable‹T›, `predicate`: [Predicate](_types_.md#predicate)‹T›): *T | undefined*

*Defined in [src/fluentFunctions.ts:283](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L283)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`predicate` | [Predicate](_types_.md#predicate)‹T› |  truth |

**Returns:** *T | undefined*

___

###  lastAsync

▸ **lastAsync**<**T**>(`iterable`: Iterable‹T›, `predicate`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentFunctions.ts:295](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L295)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`predicate` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  map

▸ **map**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›): *Iterable‹R›*

*Defined in [src/fluentFunctions.ts:80](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L80)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |

**Returns:** *Iterable‹R›*

___

###  mapAsync

▸ **mapAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›): *AsyncIterable‹R›*

*Defined in [src/fluentFunctions.ts:86](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L86)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |

**Returns:** *AsyncIterable‹R›*

___

###  max

▸ **max**<**T**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *T | undefined*

*Defined in [src/fluentFunctions.ts:533](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L533)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *T | undefined*

___

###  maxAsync

▸ **maxAsync**<**T**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentFunctions.ts:537](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L537)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  min

▸ **min**<**T**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *T | undefined*

*Defined in [src/fluentFunctions.ts:525](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L525)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *T | undefined*

___

###  minAsync

▸ **minAsync**<**T**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentFunctions.ts:529](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L529)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  partition

▸ **partition**<**T**>(`iterable`: Iterable‹T›, `size`: number): *Iterable‹Iterable‹T››*

*Defined in [src/fluentFunctions.ts:122](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L122)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`size` | number |

**Returns:** *Iterable‹Iterable‹T››*

___

###  prepend

▸ **prepend**<**T**>(`iterable`: Iterable‹T›, `item`: T): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:138](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L138)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`item` | T |

**Returns:** *Iterable‹T›*

___

###  readPartition

▸ **readPartition**<**T**>(`iterator`: Iterator‹T›, `next`: IteratorResult‹T›, `size`: number): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:108](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L108)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | Iterator‹T› |
`next` | IteratorResult‹T› |
`size` | number |

**Returns:** *Iterable‹T›*

___

###  reduce

▸ **reduce**<**T**, **R**>(`iterable`: Iterable‹T›, `reducer`: [Reducer](_types_.md#reducer)‹T, R›, `initial`: R): *R*

*Defined in [src/fluentFunctions.ts:330](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L330)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`reducer` | [Reducer](_types_.md#reducer)‹T, R› |
`initial` | R |

**Returns:** *R*

___

###  reduceAndMap

▸ **reduceAndMap**<**T**, **A**, **R**>(`iterable`: Iterable‹T›, `reducer`: [Reducer](_types_.md#reducer)‹T, A›, `initial`: A, `result`: [Mapper](_types_.md#mapper)‹A, R›): *R*

*Defined in [src/fluentFunctions.ts:307](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L307)*

**Type parameters:**

▪ **T**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`reducer` | [Reducer](_types_.md#reducer)‹T, A› |
`initial` | A |
`result` | [Mapper](_types_.md#mapper)‹A, R› |

**Returns:** *R*

___

###  reduceAndMapAsync

▸ **reduceAndMapAsync**<**T**, **A**, **R**>(`iterable`: Iterable‹T›, `reducer`: [AsyncReducer](_types_.md#asyncreducer)‹T, A›, `initial`: A, `result`: [AsyncMapper](_types_.md#asyncmapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluentFunctions.ts:316](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L316)*

**Type parameters:**

▪ **T**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`reducer` | [AsyncReducer](_types_.md#asyncreducer)‹T, A› |
`initial` | A |
`result` | [AsyncMapper](_types_.md#asyncmapper)‹A, R› |

**Returns:** *Promise‹R›*

___

###  reduceAsync

▸ **reduceAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `reducer`: [AsyncReducer](_types_.md#asyncreducer)‹T, R›, `initial`: R): *Promise‹R›*

*Defined in [src/fluentFunctions.ts:334](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L334)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`reducer` | [AsyncReducer](_types_.md#asyncreducer)‹T, R› |
`initial` | R |

**Returns:** *Promise‹R›*

___

###  repeat

▸ **repeat**<**T**>(`iterable`: Iterable‹T›, `n`: number): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:149](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L149)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`n` | number |

**Returns:** *Iterable‹T›*

___

###  skip

▸ **skip**<**T**>(`iterable`: Iterable‹T›, `n`: number): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:75](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L75)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`n` | number |

**Returns:** *Iterable‹T›*

___

###  skipWhile

▸ **skipWhile**<**T**>(`iterable`: Iterable‹T›, `condition`: [Predicate](_types_.md#predicate)‹T›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:49](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L49)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`condition` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *Iterable‹T›*

___

###  skipWhileAsync

▸ **skipWhileAsync**<**T**>(`iterable`: Iterable‹T›, `condition`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:62](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L62)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`condition` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  sort

▸ **sort**<**T**>(`iterable`: Iterable‹T›, `comparer?`: [Comparer](_types_.md#comparer)‹T›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:181](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L181)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`comparer?` | [Comparer](_types_.md#comparer)‹T› |

**Returns:** *Iterable‹T›*

___

###  sum

▸ **sum**<**T**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, number›): *number*

*Defined in [src/fluentFunctions.ts:465](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L465)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`mapper` | [Mapper](_types_.md#mapper)‹T, number› |  identity as Mapper<T, number> |

**Returns:** *number*

___

###  sumAsync

▸ **sumAsync**<**T**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentFunctions.ts:469](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L469)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  take

▸ **take**<**T**>(`iterable`: Iterable‹T›, `n`: number): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:44](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`n` | number |

**Returns:** *Iterable‹T›*

___

###  takeWhile

▸ **takeWhile**<**T**>(`iterable`: Iterable‹T›, `condition`: [Predicate](_types_.md#predicate)‹T›): *Iterable‹T›*

*Defined in [src/fluentFunctions.ts:24](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L24)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`condition` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *Iterable‹T›*

___

###  takeWhileAsync

▸ **takeWhileAsync**<**T**>(`iterable`: Iterable‹T›, `condition`: [AsyncPredicate](_types_.md#asyncpredicate)‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:34](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L34)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`condition` | [AsyncPredicate](_types_.md#asyncpredicate)‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  toArray

▸ **toArray**<**T**>(`iterable`: Iterable‹T›): *T[]*

*Defined in [src/fluentFunctions.ts:370](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L370)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *T[]*

___

###  toAsync

▸ **toAsync**<**T**>(`iterable`: Iterable‹T›): *AsyncIterable‹T›*

*Defined in [src/fluentFunctions.ts:405](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L405)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *AsyncIterable‹T›*

___

###  toObject

▸ **toObject**<**T**, **R**>(`iterable`: Iterable‹T›, `keySelector`: [Mapper](_types_.md#mapper)‹T, string›, `valueSelector`: [Mapper](_types_.md#mapper)‹T, any›): *R*

*Defined in [src/fluentFunctions.ts:379](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L379)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`keySelector` | [Mapper](_types_.md#mapper)‹T, string› | - |
`valueSelector` | [Mapper](_types_.md#mapper)‹T, any› |  identity |

**Returns:** *R*

___

###  toObjectAsync

▸ **toObjectAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `keySelector`: [AsyncMapper](_types_.md#asyncmapper)‹T, string›, `valueSelector`: [AsyncMapper](_types_.md#asyncmapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluentFunctions.ts:392](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L392)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`keySelector` | [AsyncMapper](_types_.md#asyncmapper)‹T, string› |
`valueSelector` | [AsyncMapper](_types_.md#asyncmapper)‹T, any› |

**Returns:** *Promise‹R›*

___

###  top

▸ **top**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [Mapper](_types_.md#mapper)‹T, R›, `comparer`: [Comparer](_types_.md#comparer)‹R›): *T | undefined*

*Defined in [src/fluentFunctions.ts:497](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L497)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [Mapper](_types_.md#mapper)‹T, R› |
`comparer` | [Comparer](_types_.md#comparer)‹R› |

**Returns:** *T | undefined*

___

###  topAsync

▸ **topAsync**<**T**, **R**>(`iterable`: Iterable‹T›, `mapper`: [AsyncMapper](_types_.md#asyncmapper)‹T, R›, `comparer`: [Comparer](_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluentFunctions.ts:509](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L509)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`mapper` | [AsyncMapper](_types_.md#asyncmapper)‹T, R› |
`comparer` | [Comparer](_types_.md#comparer)‹R› |

**Returns:** *Promise‹T | undefined›*

___

###  withIndex

▸ **withIndex**<**T**>(`iterable`: Iterable‹T›): *Iterable‹[Indexed](../interfaces/_types_.indexed.md)‹T››*

*Defined in [src/fluentFunctions.ts:17](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluentFunctions.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *Iterable‹[Indexed](../interfaces/_types_.indexed.md)‹T››*
