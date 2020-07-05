[fluent-iterable - v0.2.1](../README.md) › ["mount-special"](_mount_special_.md)

# Module: "mount-special"

## Index

### Type aliases

* [SpecialType](_mount_special_.md#specialtype)

### Functions

* [mountSpecial](_mount_special_.md#mountspecial)

## Type aliases

###  SpecialType

Ƭ **SpecialType**: *object*

#### Type declaration:

## Functions

###  mountSpecial

▸ **mountSpecial**‹**T**›(`iterable`: Iterable‹T› | AsyncIterable‹T›, `__namedParameters`: object, `wrapper`: function, `asyncWrapper`: function): *object*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **iterable**: *Iterable‹T› | AsyncIterable‹T›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`group` | Function |
`groupAsync` | Function |
`partition` | Function |

▪ **wrapper**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **asyncWrapper**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *object*

* **group**(...`args`: any[]): *any*

* **groupAsync**(...`args`: any[]): *any*

* **partition**(...`args`: any[]): *any*
