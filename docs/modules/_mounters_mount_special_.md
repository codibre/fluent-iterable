[fluent-iterable - v0.3.2](../README.md) › ["mounters/mount-special"](_mounters_mount_special_.md)

# Module: "mounters/mount-special"

## Index

### Type aliases

* [SpecialType](_mounters_mount_special_.md#specialtype)

### Functions

* [mountSpecial](_mounters_mount_special_.md#mountspecial)

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
