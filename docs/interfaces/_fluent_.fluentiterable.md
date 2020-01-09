[fluent-iterable - v0.1.4](../README.md) › [Globals](../globals.md) › ["fluent"](../modules/_fluent_.md) › [FluentIterable](_fluent_.fluentiterable.md)

# Interface: FluentIterable <**T**>

## Type parameters

▪ **T**

## Hierarchy

* Iterable‹T›

  ↳ **FluentIterable**

## Index

### Methods

* [[Symbol.iterator]](_fluent_.fluentiterable.md#[symbol.iterator])
* [all](_fluent_.fluentiterable.md#all)
* [allAsync](_fluent_.fluentiterable.md#allasync)
* [any](_fluent_.fluentiterable.md#any)
* [anyAsync](_fluent_.fluentiterable.md#anyasync)
* [append](_fluent_.fluentiterable.md#append)
* [avg](_fluent_.fluentiterable.md#avg)
* [avgAsync](_fluent_.fluentiterable.md#avgasync)
* [concat](_fluent_.fluentiterable.md#concat)
* [contains](_fluent_.fluentiterable.md#contains)
* [count](_fluent_.fluentiterable.md#count)
* [countAsync](_fluent_.fluentiterable.md#countasync)
* [distinct](_fluent_.fluentiterable.md#distinct)
* [distinctAsync](_fluent_.fluentiterable.md#distinctasync)
* [execute](_fluent_.fluentiterable.md#execute)
* [executeAsync](_fluent_.fluentiterable.md#executeasync)
* [filter](_fluent_.fluentiterable.md#filter)
* [filterAsync](_fluent_.fluentiterable.md#filterasync)
* [first](_fluent_.fluentiterable.md#first)
* [firstAsync](_fluent_.fluentiterable.md#firstasync)
* [flatten](_fluent_.fluentiterable.md#flatten)
* [flattenAsync](_fluent_.fluentiterable.md#flattenasync)
* [forEach](_fluent_.fluentiterable.md#foreach)
* [forEachAsync](_fluent_.fluentiterable.md#foreachasync)
* [group](_fluent_.fluentiterable.md#group)
* [groupAsync](_fluent_.fluentiterable.md#groupasync)
* [join](_fluent_.fluentiterable.md#join)
* [joinAsync](_fluent_.fluentiterable.md#joinasync)
* [last](_fluent_.fluentiterable.md#last)
* [lastAsync](_fluent_.fluentiterable.md#lastasync)
* [map](_fluent_.fluentiterable.md#map)
* [mapAsync](_fluent_.fluentiterable.md#mapasync)
* [max](_fluent_.fluentiterable.md#max)
* [maxAsync](_fluent_.fluentiterable.md#maxasync)
* [min](_fluent_.fluentiterable.md#min)
* [minAsync](_fluent_.fluentiterable.md#minasync)
* [partition](_fluent_.fluentiterable.md#partition)
* [prepend](_fluent_.fluentiterable.md#prepend)
* [reduce](_fluent_.fluentiterable.md#reduce)
* [reduceAndMap](_fluent_.fluentiterable.md#reduceandmap)
* [reduceAndMapAsync](_fluent_.fluentiterable.md#reduceandmapasync)
* [reduceAsync](_fluent_.fluentiterable.md#reduceasync)
* [repeat](_fluent_.fluentiterable.md#repeat)
* [skip](_fluent_.fluentiterable.md#skip)
* [skipWhile](_fluent_.fluentiterable.md#skipwhile)
* [skipWhileAsync](_fluent_.fluentiterable.md#skipwhileasync)
* [sort](_fluent_.fluentiterable.md#sort)
* [sum](_fluent_.fluentiterable.md#sum)
* [sumAsync](_fluent_.fluentiterable.md#sumasync)
* [take](_fluent_.fluentiterable.md#take)
* [takeWhile](_fluent_.fluentiterable.md#takewhile)
* [takeWhileAsync](_fluent_.fluentiterable.md#takewhileasync)
* [toArray](_fluent_.fluentiterable.md#toarray)
* [toAsync](_fluent_.fluentiterable.md#toasync)
* [toObject](_fluent_.fluentiterable.md#toobject)
* [toObjectAsync](_fluent_.fluentiterable.md#toobjectasync)
* [top](_fluent_.fluentiterable.md#top)
* [topAsync](_fluent_.fluentiterable.md#topasync)
* [withIndex](_fluent_.fluentiterable.md#withindex)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T›*

*Inherited from void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

**Returns:** *Iterator‹T›*

___

###  all

▸ **all**(`predicate`: [Predicate](../modules/_types_.md#predicate)‹T›): *boolean*

*Defined in [src/fluent.ts:111](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *boolean*

___

###  allAsync

▸ **allAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluent.ts:112](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  any

▸ **any**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *boolean*

*Defined in [src/fluent.ts:113](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *boolean*

___

###  anyAsync

▸ **anyAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluent.ts:114](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  append

▸ **append**(`item`: T): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:90](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  avg

▸ **avg**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *number*

*Defined in [src/fluent.ts:128](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *number*

___

###  avgAsync

▸ **avgAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluent.ts:129](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  concat

▸ **concat**(...`iterables`: Array‹Iterable‹T››): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:92](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`...iterables` | Array‹Iterable‹T›› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  contains

▸ **contains**(`item`: T): *boolean*

*Defined in [src/fluent.ts:115](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *boolean*

___

###  count

▸ **count**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *number*

*Defined in [src/fluent.ts:101](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *number*

___

###  countAsync

▸ **countAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹number›*

*Defined in [src/fluent.ts:102](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹number›*

___

###  distinct

▸ **distinct**<**R**>(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:97](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L97)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  distinctAsync

▸ **distinctAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:98](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L98)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  execute

▸ **execute**(`action`: [Action](../modules/_types_.md#action)‹T›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:122](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../modules/_types_.md#action)‹T› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  executeAsync

▸ **executeAsync**(`action`: [AsyncAction](../modules/_types_.md#asyncaction)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:123](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [AsyncAction](../modules/_types_.md#asyncaction)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  filter

▸ **filter**(`predicate`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:87](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  filterAsync

▸ **filterAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:88](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  first

▸ **first**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *T | undefined*

*Defined in [src/fluent.ts:103](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *T | undefined*

___

###  firstAsync

▸ **firstAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluent.ts:104](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  flatten

▸ **flatten**<**R**>(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, Iterable‹R››): *[FluentIterable](_fluent_.fluentiterable.md)‹R›*

*Defined in [src/fluent.ts:94](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L94)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, Iterable‹R›› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹R›*

___

###  flattenAsync

▸ **flattenAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, Iterable‹R››): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluent.ts:95](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L95)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, Iterable‹R›› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  forEach

▸ **forEach**(`action`: [Action](../modules/_types_.md#action)‹T›): *void*

*Defined in [src/fluent.ts:120](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../modules/_types_.md#action)‹T› |

**Returns:** *void*

___

###  forEachAsync

▸ **forEachAsync**(`action`: [AsyncAction](../modules/_types_.md#asyncaction)‹T›): *Promise‹void›*

*Defined in [src/fluent.ts:121](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [AsyncAction](../modules/_types_.md#asyncaction)‹T› |

**Returns:** *Promise‹void›*

___

###  group

▸ **group**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentIterable](_fluent_.fluentiterable.md)‹[Group](_types_.group.md)‹T, R››*

*Defined in [src/fluent.ts:99](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L99)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹[Group](_types_.group.md)‹T, R››*

___

###  groupAsync

▸ **groupAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

*Defined in [src/fluent.ts:100](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L100)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

___

###  join

▸ **join**(`separator`: string, `mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, string›): *string*

*Defined in [src/fluent.ts:124](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, string› |

**Returns:** *string*

___

###  joinAsync

▸ **joinAsync**(`separator`: string, `mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluent.ts:125](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string› |

**Returns:** *Promise‹string›*

___

###  last

▸ **last**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *T | undefined*

*Defined in [src/fluent.ts:105](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *T | undefined*

___

###  lastAsync

▸ **lastAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluent.ts:106](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  map

▸ **map**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentIterable](_fluent_.fluentiterable.md)‹R›*

*Defined in [src/fluent.ts:85](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L85)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹R›*

___

###  mapAsync

▸ **mapAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluent.ts:86](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L86)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  max

▸ **max**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *T | undefined*

*Defined in [src/fluent.ts:134](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *T | undefined*

___

###  maxAsync

▸ **maxAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluent.ts:135](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  min

▸ **min**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *T | undefined*

*Defined in [src/fluent.ts:132](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *T | undefined*

___

###  minAsync

▸ **minAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluent.ts:133](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  partition

▸ **partition**(`size`: number): *[FluentIterable](_fluent_.fluentiterable.md)‹[FluentIterable](_fluent_.fluentiterable.md)‹T››*

*Defined in [src/fluent.ts:89](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹[FluentIterable](_fluent_.fluentiterable.md)‹T››*

___

###  prepend

▸ **prepend**(`item`: T): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:91](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  reduce

▸ **reduce**<**R**>(`reducer`: [Reducer](../modules/_types_.md#reducer)‹T, R›, `initial`: R): *R*

*Defined in [src/fluent.ts:109](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L109)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](../modules/_types_.md#reducer)‹T, R› |
`initial` | R |

**Returns:** *R*

___

###  reduceAndMap

▸ **reduceAndMap**<**A**, **R**>(`reducer`: [Reducer](../modules/_types_.md#reducer)‹T, A›, `initial`: A, `result`: [Mapper](../modules/_types_.md#mapper)‹A, R›): *R*

*Defined in [src/fluent.ts:107](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L107)*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](../modules/_types_.md#reducer)‹T, A› |
`initial` | A |
`result` | [Mapper](../modules/_types_.md#mapper)‹A, R› |

**Returns:** *R*

___

###  reduceAndMapAsync

▸ **reduceAndMapAsync**<**A**, **R**>(`reducer`: [AsyncReducer](../modules/_types_.md#asyncreducer)‹T, A›, `initial`: A, `result`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluent.ts:108](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L108)*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [AsyncReducer](../modules/_types_.md#asyncreducer)‹T, A› |
`initial` | A |
`result` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹A, R› |

**Returns:** *Promise‹R›*

___

###  reduceAsync

▸ **reduceAsync**<**R**>(`reducer`: [AsyncReducer](../modules/_types_.md#asyncreducer)‹T, R›, `initial`: R): *Promise‹R›*

*Defined in [src/fluent.ts:110](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L110)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [AsyncReducer](../modules/_types_.md#asyncreducer)‹T, R› |
`initial` | R |

**Returns:** *Promise‹R›*

___

###  repeat

▸ **repeat**(`n`: number): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:93](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  skip

▸ **skip**(`n`: number): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:84](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  skipWhile

▸ **skipWhile**(`condition`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:82](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  skipWhileAsync

▸ **skipWhileAsync**(`condition`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:83](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  sort

▸ **sort**(`comparer?`: [Comparer](../modules/_types_.md#comparer)‹T›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:96](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`comparer?` | [Comparer](../modules/_types_.md#comparer)‹T› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  sum

▸ **sum**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *number*

*Defined in [src/fluent.ts:126](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *number*

___

###  sumAsync

▸ **sumAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluent.ts:127](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  take

▸ **take**(`n`: number): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:81](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  takeWhile

▸ **takeWhile**(`condition`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

*Defined in [src/fluent.ts:79](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹T›*

___

###  takeWhileAsync

▸ **takeWhileAsync**(`condition`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:80](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [src/fluent.ts:116](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L116)*

**Returns:** *T[]*

___

###  toAsync

▸ **toAsync**(): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluent.ts:119](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L119)*

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  toObject

▸ **toObject**<**R**>(`keySelector`: [Mapper](../modules/_types_.md#mapper)‹T, string›, `valueSelector?`: [Mapper](../modules/_types_.md#mapper)‹T, any›): *R*

*Defined in [src/fluent.ts:117](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L117)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`keySelector` | [Mapper](../modules/_types_.md#mapper)‹T, string› |
`valueSelector?` | [Mapper](../modules/_types_.md#mapper)‹T, any› |

**Returns:** *R*

___

###  toObjectAsync

▸ **toObjectAsync**<**R**>(`keySelector`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string›, `valueSelector`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluent.ts:118](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L118)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`keySelector` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string› |
`valueSelector` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, any› |

**Returns:** *Promise‹R›*

___

###  top

▸ **top**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›, `comparer`: [Comparer](../modules/_types_.md#comparer)‹R›): *T | undefined*

*Defined in [src/fluent.ts:130](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L130)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |
`comparer` | [Comparer](../modules/_types_.md#comparer)‹R› |

**Returns:** *T | undefined*

___

###  topAsync

▸ **topAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›, `comparer`: [Comparer](../modules/_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluent.ts:131](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L131)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |
`comparer` | [Comparer](../modules/_types_.md#comparer)‹R› |

**Returns:** *Promise‹T | undefined›*

___

###  withIndex

▸ **withIndex**(): *[FluentIterable](_fluent_.fluentiterable.md)‹[Indexed](_types_.indexed.md)‹T››*

*Defined in [src/fluent.ts:78](https://github.com/kataik/fluent-iterable/blob/bc60f04/src/fluent.ts#L78)*

**Returns:** *[FluentIterable](_fluent_.fluentiterable.md)‹[Indexed](_types_.indexed.md)‹T››*
