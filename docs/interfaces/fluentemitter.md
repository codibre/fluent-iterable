[fluent-iterable - v1.18.3](../README.md) / FluentEmitter

# Interface: FluentEmitter<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* *TypedEmitter*<FluentEvents<T\>\>

  ↳ **FluentEmitter**

## Table of contents

### Methods

- [addListener](fluentemitter.md#addlistener)
- [emit](fluentemitter.md#emit)
- [eventNames](fluentemitter.md#eventnames)
- [getMaxListeners](fluentemitter.md#getmaxlisteners)
- [listenerCount](fluentemitter.md#listenercount)
- [listeners](fluentemitter.md#listeners)
- [off](fluentemitter.md#off)
- [on](fluentemitter.md#on)
- [once](fluentemitter.md#once)
- [prependListener](fluentemitter.md#prependlistener)
- [prependOnceListener](fluentemitter.md#prependoncelistener)
- [rawListeners](fluentemitter.md#rawlisteners)
- [removeAllListeners](fluentemitter.md#removealllisteners)
- [removeListener](fluentemitter.md#removelistener)
- [setMaxListeners](fluentemitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### emit

▸ **emit**<E\>(`event`: E, ...`args`: *Arguments*<*FluentEvents*<T\>[E]\>): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`...args` | *Arguments*<*FluentEvents*<T\>[E]\> |

**Returns:** *boolean*

Inherited from: void

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: void

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: void

___

### listenerCount

▸ **listenerCount**<E\>(`event`: E): *number*

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |

**Returns:** *number*

Inherited from: void

___

### listeners

▸ **listeners**<E\>(`event`: E): Function[]

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |

**Returns:** Function[]

Inherited from: void

___

### off

▸ **off**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### on

▸ **on**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### once

▸ **once**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### prependListener

▸ **prependListener**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### prependOnceListener

▸ **prependOnceListener**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### rawListeners

▸ **rawListeners**<E\>(`event`: E): Function[]

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |

**Returns:** Function[]

Inherited from: void

___

### removeAllListeners

▸ **removeAllListeners**<E\>(`event?`: E): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | E |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### removeListener

▸ **removeListener**<E\>(`event`: E, `listener`: *FluentEvents*<T\>[E]): [*FluentEmitter*](fluentemitter.md)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`E` | keyof *FluentEvents*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | E |
`listener` | *FluentEvents*<T\>[E] |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void

___

### setMaxListeners

▸ **setMaxListeners**(`maxListeners`: *number*): [*FluentEmitter*](fluentemitter.md)<T\>

#### Parameters:

Name | Type |
:------ | :------ |
`maxListeners` | *number* |

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

Inherited from: void
