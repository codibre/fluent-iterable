[![Actions Status](https://github.com/Codibre/fluent-iterable-js-sdsl/workflows/build/badge.svg)](https://github.com/Codibre/fluent-iterable-js-sdsl/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable-js-sdsl/workflows/test/badge.svg)](https://github.com/Codibre/fluent-iterable-js-sdsl/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable-js-sdsl/workflows/lint/badge.svg)](https://github.com/Codibre/fluent-iterable-js-sdsl/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ab8fe8c90db9d596e996/test_coverage)](https://codeclimate.com/github/Codibre/fluent-iterable-js-sdsl/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/ab8fe8c90db9d596e996/maintainability)](https://codeclimate.com/github/Codibre/fluent-iterable-js-sdsl/maintainability)
[![Packages](https://david-dm.org/Codibre/fluent-iterable-js-sdsl.svg)](https://david-dm.org/Codibre/fluent-iterable-js-sdsl)
[![npm version](https://badge.fury.io/js/%40codibre%2Ffluent-iterable-js-sdsl.svg)](https://badge.fury.io/js/%40codibre%2Ffluent-iterable-js-sdsl)

This packages is an ex extension to [@codibr/fluent-iterable](https://www.npmjs.com/package/@codibre/fluent-iterable) which integrates it with [js-sdsl](https://www.npmjs.com/package/js-sdsl), a library with some great data structures implementations

## How to Install

```
npm i @fluent-iterable/js-sdsl @fluent-iterable js-sdsl
```

## How to use it

To use it, you need to import this package in the main file of your project, making its methods accesible in anywhere.
Remember: you have to make sure the package is imported on your unit tests too!

About the integration, we have some resolving operations to generate some of the data structures provided by **js-sdsl**, which is:

* toBinarySearchTree: creates an OrderedMap
* toBinarySearchTreeAsync: creates an OrderedMap asynchronously
* toBinarySearchTreeSet: creates an OrderedSet
* toBinarySearchTreeSetAsync: creates an OrderedSet asynchronously
* toQueue: creates a Queue
* toQueueAsync: creates a Queue asynchronously
* toStack: creates a Stack
* toStackAsync: creates a Stack asynchronously
* toDeque: creates a Deque
* toStackAsync: creates a Deque asynchronously
* toPriorityQueue: creates a PriorityQueue
* toPriorityQueue: creates a PriorityQueue asynchronously

To see how to use each of those methods, checkout it out on the in code documentation!

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
