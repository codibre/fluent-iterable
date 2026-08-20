# Combining sync and async operations

Async await traits is a great node capability which gave javascript code much less complexity than the "promise hell" or "callback hell", but it came with some minor performance costs.
With fluent operators you can combine sync and async transformations and filters, and, with the augmentative iterable core, it tries to provide as less overload as possible.
To make better use of it, the best is to not mix sync and async operations, like in the example below:

```ts
fluentAsync(dataStream)
  .filter((x) => {
    // Some filter criteria
  })
  .map((x) => requestSomeData(x)) // Here, request is an async operation
  .map((x) => otherRequest(parse(x))) // Parse is sync, otherRequest async, but that's okay, as long async/await is not used
  .group('categoryId') // A grouping operation is performed by the categoryId value
  .take(10); //Take just 10 items
```

The good thing here is that fluent works over the iterable and async iterable mechanism, and in that way, it is possible to chain operations that results in promises, and all the iterable sequence will be respected, instead of generating a lot of promises which will flood node queue.

The only thing is that, when you're dealing with **FluentAsyncIterable**, you don't need to do nothing for this to work, but, if you're working with sync iterables, then you must specify that you want a async operation at some point, like this:

```ts
fluent(data)
  .filter((x) => {
    // Some filter criteria
  })
  .mapAsync((x) => requestSomeData(x)) // From that point, the FluentIterable is transformed in a FluentAsyncIterable, and you don't need the async suffix any longer
  .map((x) => otherRequest(parse(x))) // Parse is sync, otherRequest async, but that's okay, as long async/await is not used
  .group('categoryId') // A grouping operation is performed by the categoryId value
  .take(10); //Take just 10 items
```

[Go back](README.md)
