[fluent-iterable - v0.3.2](../README.md) › ["mounters/mount-fluent-functions"](_mounters_mount_fluent_functions_.md)

# Module: "mounters/mount-fluent-functions"

## Index

### Functions

* [mountIterableFunctions](_mounters_mount_fluent_functions_.md#mountiterablefunctions)
* [mountResolvingFunctions](_mounters_mount_fluent_functions_.md#mountresolvingfunctions)

## Functions

###  mountIterableFunctions

▸ **mountIterableFunctions**‹**T**, **Func**, **Funcs**›(`iterable`: Iterable‹T› | AsyncIterable‹T›, `iterableFuncs`: Funcs, `wrapper`: function): *any*

**Type parameters:**

▪ **T**

▪ **Func**: *Function*

▪ **Funcs**: *object*

**Parameters:**

▪ **iterable**: *Iterable‹T› | AsyncIterable‹T›*

▪ **iterableFuncs**: *Funcs*

▪ **wrapper**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mountResolvingFunctions

▸ **mountResolvingFunctions**‹**T**, **Func**, **Funcs**›(`iterable`: Iterable‹T› | AsyncIterable‹T›, `resolvingFuncs`: Funcs): *any*

**Type parameters:**

▪ **T**

▪ **Func**: *Function*

▪ **Funcs**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› &#124; AsyncIterable‹T› |
`resolvingFuncs` | Funcs |

**Returns:** *any*
