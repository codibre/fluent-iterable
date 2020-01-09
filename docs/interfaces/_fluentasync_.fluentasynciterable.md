[fluent-iterable - v0.1.5](../README.md) › [Globals](../globals.md) › ["fluentAsync"](../modules/_fluentasync_.md) › [FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)

# Interface: FluentAsyncIterable <**T**>

## Type parameters

▪ **T**

## Hierarchy

* AsyncIterable‹T›

  ↳ **FluentAsyncIterable**

## Index

### Methods

* [[Symbol.asyncIterator]](_fluentasync_.fluentasynciterable.md#[symbol.asynciterator])
* [all](_fluentasync_.fluentasynciterable.md#all)
* [allAsync](_fluentasync_.fluentasynciterable.md#allasync)
* [any](_fluentasync_.fluentasynciterable.md#any)
* [anyAsync](_fluentasync_.fluentasynciterable.md#anyasync)
* [append](_fluentasync_.fluentasynciterable.md#append)
* [avg](_fluentasync_.fluentasynciterable.md#avg)
* [avgAsync](_fluentasync_.fluentasynciterable.md#avgasync)
* [concat](_fluentasync_.fluentasynciterable.md#concat)
* [contains](_fluentasync_.fluentasynciterable.md#contains)
* [count](_fluentasync_.fluentasynciterable.md#count)
* [countAsync](_fluentasync_.fluentasynciterable.md#countasync)
* [distinct](_fluentasync_.fluentasynciterable.md#distinct)
* [distinctAsync](_fluentasync_.fluentasynciterable.md#distinctasync)
* [execute](_fluentasync_.fluentasynciterable.md#execute)
* [executeAsync](_fluentasync_.fluentasynciterable.md#executeasync)
* [filter](_fluentasync_.fluentasynciterable.md#filter)
* [filterAsync](_fluentasync_.fluentasynciterable.md#filterasync)
* [first](_fluentasync_.fluentasynciterable.md#first)
* [firstAsync](_fluentasync_.fluentasynciterable.md#firstasync)
* [flatten](_fluentasync_.fluentasynciterable.md#flatten)
* [flattenAsync](_fluentasync_.fluentasynciterable.md#flattenasync)
* [forEach](_fluentasync_.fluentasynciterable.md#foreach)
* [forEachAsync](_fluentasync_.fluentasynciterable.md#foreachasync)
* [group](_fluentasync_.fluentasynciterable.md#group)
* [groupAsync](_fluentasync_.fluentasynciterable.md#groupasync)
* [join](_fluentasync_.fluentasynciterable.md#join)
* [joinAsync](_fluentasync_.fluentasynciterable.md#joinasync)
* [last](_fluentasync_.fluentasynciterable.md#last)
* [lastAsync](_fluentasync_.fluentasynciterable.md#lastasync)
* [map](_fluentasync_.fluentasynciterable.md#map)
* [mapAsync](_fluentasync_.fluentasynciterable.md#mapasync)
* [max](_fluentasync_.fluentasynciterable.md#max)
* [maxAsync](_fluentasync_.fluentasynciterable.md#maxasync)
* [min](_fluentasync_.fluentasynciterable.md#min)
* [minAsync](_fluentasync_.fluentasynciterable.md#minasync)
* [partition](_fluentasync_.fluentasynciterable.md#partition)
* [prepend](_fluentasync_.fluentasynciterable.md#prepend)
* [reduce](_fluentasync_.fluentasynciterable.md#reduce)
* [reduceAndMap](_fluentasync_.fluentasynciterable.md#reduceandmap)
* [reduceAndMapAsync](_fluentasync_.fluentasynciterable.md#reduceandmapasync)
* [reduceAsync](_fluentasync_.fluentasynciterable.md#reduceasync)
* [repeat](_fluentasync_.fluentasynciterable.md#repeat)
* [skip](_fluentasync_.fluentasynciterable.md#skip)
* [skipWhile](_fluentasync_.fluentasynciterable.md#skipwhile)
* [skipWhileAsync](_fluentasync_.fluentasynciterable.md#skipwhileasync)
* [sort](_fluentasync_.fluentasynciterable.md#sort)
* [sum](_fluentasync_.fluentasynciterable.md#sum)
* [sumAsync](_fluentasync_.fluentasynciterable.md#sumasync)
* [take](_fluentasync_.fluentasynciterable.md#take)
* [takeWhile](_fluentasync_.fluentasynciterable.md#takewhile)
* [takeWhileAsync](_fluentasync_.fluentasynciterable.md#takewhileasync)
* [toArray](_fluentasync_.fluentasynciterable.md#toarray)
* [toObject](_fluentasync_.fluentasynciterable.md#toobject)
* [toObjectAsync](_fluentasync_.fluentasynciterable.md#toobjectasync)
* [top](_fluentasync_.fluentasynciterable.md#top)
* [topAsync](_fluentasync_.fluentasynciterable.md#topasync)
* [withIndex](_fluentasync_.fluentasynciterable.md#withindex)

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterator‹T›*

*Inherited from void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:40

**Returns:** *AsyncIterator‹T›*

___

###  all

▸ **all**(`predicate`: [Predicate](../modules/_types_.md#predicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsync.ts:109](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  allAsync

▸ **allAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsync.ts:110](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  any

▸ **any**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsync.ts:111](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  anyAsync

▸ **anyAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹boolean›*

*Defined in [src/fluentAsync.ts:112](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹boolean›*

___

###  append

▸ **append**(`item`: T): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:88](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  avg

▸ **avg**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:125](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  avgAsync

▸ **avgAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:126](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  concat

▸ **concat**(...`iterables`: Array‹AsyncIterable‹T››): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:90](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`...iterables` | Array‹AsyncIterable‹T›› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  contains

▸ **contains**(`item`: T): *Promise‹boolean›*

*Defined in [src/fluentAsync.ts:113](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *Promise‹boolean›*

___

###  count

▸ **count**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:99](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *Promise‹number›*

___

###  countAsync

▸ **countAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:100](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹number›*

___

###  distinct

▸ **distinct**<**R**>(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:95](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L95)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  distinctAsync

▸ **distinctAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:96](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L96)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  execute

▸ **execute**(`action`: [Action](../modules/_types_.md#action)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:119](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../modules/_types_.md#action)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  executeAsync

▸ **executeAsync**(`action`: [AsyncAction](../modules/_types_.md#asyncaction)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:120](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [AsyncAction](../modules/_types_.md#asyncaction)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  filter

▸ **filter**(`predicate`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:85](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  filterAsync

▸ **filterAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:86](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  first

▸ **first**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:101](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  firstAsync

▸ **firstAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:102](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  flatten

▸ **flatten**<**R**>(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, Iterable‹R››): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluentAsync.ts:92](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L92)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, Iterable‹R›› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  flattenAsync

▸ **flattenAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, AsyncIterable‹R››): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluentAsync.ts:93](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L93)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, AsyncIterable‹R›› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  forEach

▸ **forEach**(`action`: [Action](../modules/_types_.md#action)‹T›): *Promise‹void›*

*Defined in [src/fluentAsync.ts:117](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../modules/_types_.md#action)‹T› |

**Returns:** *Promise‹void›*

___

###  forEachAsync

▸ **forEachAsync**(`action`: [AsyncAction](../modules/_types_.md#asyncaction)‹T›): *Promise‹void›*

*Defined in [src/fluentAsync.ts:118](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [AsyncAction](../modules/_types_.md#asyncaction)‹T› |

**Returns:** *Promise‹void›*

___

###  group

▸ **group**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

*Defined in [src/fluentAsync.ts:97](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L97)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

___

###  groupAsync

▸ **groupAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

*Defined in [src/fluentAsync.ts:98](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L98)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Group](_types_.group.md)‹T, R››*

___

###  join

▸ **join**(`separator`: string, `mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluentAsync.ts:121](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, string› |

**Returns:** *Promise‹string›*

___

###  joinAsync

▸ **joinAsync**(`separator`: string, `mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string›): *Promise‹string›*

*Defined in [src/fluentAsync.ts:122](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string› |

**Returns:** *Promise‹string›*

___

###  last

▸ **last**(`predicate?`: [Predicate](../modules/_types_.md#predicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:103](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  lastAsync

▸ **lastAsync**(`predicate`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:104](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *Promise‹T | undefined›*

___

###  map

▸ **map**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluentAsync.ts:83](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L83)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  mapAsync

▸ **mapAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

*Defined in [src/fluentAsync.ts:84](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L84)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹R›*

___

###  max

▸ **max**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:131](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  maxAsync

▸ **maxAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:132](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  min

▸ **min**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:129](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  minAsync

▸ **minAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:130](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹T | undefined›*

___

###  partition

▸ **partition**(`size`: number): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T››*

*Defined in [src/fluentAsync.ts:87](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T››*

___

###  prepend

▸ **prepend**(`item`: T): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:89](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  reduce

▸ **reduce**<**R**>(`reducer`: [Reducer](../modules/_types_.md#reducer)‹T, R›, `initial`: R): *Promise‹R›*

*Defined in [src/fluentAsync.ts:107](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L107)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](../modules/_types_.md#reducer)‹T, R› |
`initial` | R |

**Returns:** *Promise‹R›*

___

###  reduceAndMap

▸ **reduceAndMap**<**A**, **R**>(`reducer`: [Reducer](../modules/_types_.md#reducer)‹T, A›, `initial`: A, `result`: [Mapper](../modules/_types_.md#mapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluentAsync.ts:105](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L105)*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](../modules/_types_.md#reducer)‹T, A› |
`initial` | A |
`result` | [Mapper](../modules/_types_.md#mapper)‹A, R› |

**Returns:** *Promise‹R›*

___

###  reduceAndMapAsync

▸ **reduceAndMapAsync**<**A**, **R**>(`reducer`: [AsyncReducer](../modules/_types_.md#asyncreducer)‹T, A›, `initial`: A, `result`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹A, R›): *Promise‹R›*

*Defined in [src/fluentAsync.ts:106](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L106)*

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

*Defined in [src/fluentAsync.ts:108](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L108)*

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

▸ **repeat**(`n`: number): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:91](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  skip

▸ **skip**(`n`: number): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:82](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  skipWhile

▸ **skipWhile**(`condition`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:80](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  skipWhileAsync

▸ **skipWhileAsync**(`condition`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:81](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  sort

▸ **sort**(`comparer?`: [Comparer](../modules/_types_.md#comparer)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:94](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`comparer?` | [Comparer](../modules/_types_.md#comparer)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  sum

▸ **sum**(`mapper?`: [Mapper](../modules/_types_.md#mapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:123](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper?` | [Mapper](../modules/_types_.md#mapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  sumAsync

▸ **sumAsync**(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number›): *Promise‹number›*

*Defined in [src/fluentAsync.ts:124](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, number› |

**Returns:** *Promise‹number›*

___

###  take

▸ **take**(`n`: number): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:79](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  takeWhile

▸ **takeWhile**(`condition`: [Predicate](../modules/_types_.md#predicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:77](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  takeWhileAsync

▸ **takeWhileAsync**(`condition`: [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T›): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

*Defined in [src/fluentAsync.ts:78](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [AsyncPredicate](../modules/_types_.md#asyncpredicate)‹T› |

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹T›*

___

###  toArray

▸ **toArray**(): *Promise‹T[]›*

*Defined in [src/fluentAsync.ts:114](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L114)*

**Returns:** *Promise‹T[]›*

___

###  toObject

▸ **toObject**<**R**>(`keySelector`: [Mapper](../modules/_types_.md#mapper)‹T, string›, `valueSelector?`: [Mapper](../modules/_types_.md#mapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluentAsync.ts:115](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L115)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`keySelector` | [Mapper](../modules/_types_.md#mapper)‹T, string› |
`valueSelector?` | [Mapper](../modules/_types_.md#mapper)‹T, any› |

**Returns:** *Promise‹R›*

___

###  toObjectAsync

▸ **toObjectAsync**<**R**>(`keySelector`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, string›, `valueSelector`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, any›): *Promise‹R›*

*Defined in [src/fluentAsync.ts:116](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L116)*

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

▸ **top**<**R**>(`mapper`: [Mapper](../modules/_types_.md#mapper)‹T, R›, `comparer`: [Comparer](../modules/_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:127](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L127)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Mapper](../modules/_types_.md#mapper)‹T, R› |
`comparer` | [Comparer](../modules/_types_.md#comparer)‹R› |

**Returns:** *Promise‹T | undefined›*

___

###  topAsync

▸ **topAsync**<**R**>(`mapper`: [AsyncMapper](../modules/_types_.md#asyncmapper)‹T, R›, `comparer`: [Comparer](../modules/_types_.md#comparer)‹R›): *Promise‹T | undefined›*

*Defined in [src/fluentAsync.ts:128](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L128)*

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

▸ **withIndex**(): *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Indexed](_types_.indexed.md)‹T››*

*Defined in [src/fluentAsync.ts:76](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/fluentAsync.ts#L76)*

**Returns:** *[FluentAsyncIterable](_fluentasync_.fluentasynciterable.md)‹[Indexed](_types_.indexed.md)‹T››*
