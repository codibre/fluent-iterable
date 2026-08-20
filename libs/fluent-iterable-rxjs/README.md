[![Actions Status](https://github.com/Codibre/fluent-iterable-rxjs/workflows/build/badge.svg)](https://github.com/Codibre/fluent-iterable-rxjs/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable-rxjs/workflows/test/badge.svg)](https://github.com/Codibre/fluent-iterable-rxjs/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable-rxjs/workflows/lint/badge.svg)](https://github.com/Codibre/fluent-iterable-rxjs/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ab8fe8c90db9d596e996/test_coverage)](https://codeclimate.com/github/Codibre/fluent-iterable-rxjs/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/ab8fe8c90db9d596e996/maintainability)](https://codeclimate.com/github/Codibre/fluent-iterable-rxjs/maintainability)
[![Packages](https://david-dm.org/Codibre/fluent-iterable-rxjs.svg)](https://david-dm.org/Codibre/fluent-iterable-rxjs)
[![npm version](https://badge.fury.io/js/%40codibre%2Ffluent-iterable-rxjs.svg)](https://badge.fury.io/js/%40codibre%2Ffluent-iterable-rxjs)

This packages is an ex extension to [@codibr/fluent-iterable](https://www.npmjs.com/package/@codibre/fluent-iterable) which integrates it with [rxjs](https://www.npmjs.com/package/rxjs), a library with some great data structures implementations

## How to Install

```
npm i @fluent-iterable/rxjs @fluent-iterable rxjs
```

## How to use it

To use it, you need to import this package in the main file of your project, making its methods accessible in anywhere.
Remember: you have to make sure the package is imported on your unit tests too!

About the integration, we have the following resolving operations to generate an rxjs Observable:

* toObservable: creates an Observable based on the FluentIterable/FluentAsyncIterable

To see how to use each of those methods, checkout it out on the in code documentation!

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
