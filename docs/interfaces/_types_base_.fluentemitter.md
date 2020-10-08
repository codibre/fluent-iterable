[fluent-iterable - v1.7.0](../README.md) › ["types-base"](../modules/_types_base_.md) › [FluentEmitter](_types_base_.fluentemitter.md)

# Interface: FluentEmitter ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* TypedEventEmitter‹[FluentEvents](_types_base_.fluentevents.md)‹T››

  ↳ **FluentEmitter**

## Index

### Methods

* [addListener](_types_base_.fluentemitter.md#addlistener)
* [emit](_types_base_.fluentemitter.md#emit)
* [eventNames](_types_base_.fluentemitter.md#eventnames)
* [getMaxListeners](_types_base_.fluentemitter.md#getmaxlisteners)
* [listenerCount](_types_base_.fluentemitter.md#listenercount)
* [listeners](_types_base_.fluentemitter.md#listeners)
* [off](_types_base_.fluentemitter.md#off)
* [on](_types_base_.fluentemitter.md#on)
* [once](_types_base_.fluentemitter.md#once)
* [prependListener](_types_base_.fluentemitter.md#prependlistener)
* [prependOnceListener](_types_base_.fluentemitter.md#prependoncelistener)
* [rawListeners](_types_base_.fluentemitter.md#rawlisteners)
* [removeAllListeners](_types_base_.fluentemitter.md#removealllisteners)
* [removeListener](_types_base_.fluentemitter.md#removelistener)
* [setMaxListeners](_types_base_.fluentemitter.md#setmaxlisteners)

## Methods

###  addListener

▸ **addListener**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[addListener](_types_base_.fluentemitter.md#addlistener)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  emit

▸ **emit**‹**E**›(`event`: E, ...`args`: Arguments‹FluentEvents‹T›[E]›): *boolean*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[emit](_types_base_.fluentemitter.md#emit)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`...args` | Arguments‹FluentEvents‹T›[E]› |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *(string | symbol | keyof Events)[]*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[eventNames](_types_base_.fluentemitter.md#eventnames)*

**Returns:** *(string | symbol | keyof Events)[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[getMaxListeners](_types_base_.fluentemitter.md#getmaxlisteners)*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**‹**E**›(`event`: E): *number*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[listenerCount](_types_base_.fluentemitter.md#listenercount)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |

**Returns:** *number*

___

###  listeners

▸ **listeners**‹**E**›(`event`: E): *Function[]*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[listeners](_types_base_.fluentemitter.md#listeners)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |

**Returns:** *Function[]*

___

###  off

▸ **off**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[off](_types_base_.fluentemitter.md#off)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  on

▸ **on**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[on](_types_base_.fluentemitter.md#on)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  once

▸ **once**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[once](_types_base_.fluentemitter.md#once)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[prependListener](_types_base_.fluentemitter.md#prependlistener)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[prependOnceListener](_types_base_.fluentemitter.md#prependoncelistener)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**‹**E**›(`event`: E): *Function[]*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[rawListeners](_types_base_.fluentemitter.md#rawlisteners)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**‹**E**›(`event?`: E): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[removeAllListeners](_types_base_.fluentemitter.md#removealllisteners)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | E |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**‹**E**›(`event`: E, `listener`: FluentEvents‹T›[E]): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[removeListener](_types_base_.fluentemitter.md#removelistener)*

**Type parameters:**

▪ **E**: *keyof FluentEvents<T>*

**Parameters:**

Name | Type |
------ | ------ |
`event` | E |
`listener` | FluentEvents‹T›[E] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`maxListeners`: number): *this*

*Inherited from [FluentEmitter](_types_base_.fluentemitter.md).[setMaxListeners](_types_base_.fluentemitter.md#setmaxlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`maxListeners` | number |

**Returns:** *this*
