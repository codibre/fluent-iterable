[fluent-iterable - v1.4.0](../README.md) › ["transform-obj-values"](_transform_obj_values_.md)

# Module: "transform-obj-values"

## Index

### Functions

* [transformObjValues](_transform_obj_values_.md#transformobjvalues)

## Functions

###  transformObjValues

▸ **transformObjValues**‹**T**›(`obj`: T, `mapper`: Mapper‹[keyof T, T[keyof T]], unknown›): *object*

Applies a transformation to the value of all pro

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to be iterated with |
`mapper` | Mapper‹[keyof T, T[keyof T]], unknown› | the mapper to be applied to each value  |

**Returns:** *object*

* \[ **key**: *string*\]: V
