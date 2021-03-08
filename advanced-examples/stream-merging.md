# Merging multiple streams in one

Let's say you have a service which requests some information for multiple providers, and each one returns a stream os results, and you need to merge those streams into one.
In this scenario, we can say you need to do the following steps:

- Parse multiple requests;
- Run multiple requests;
- Merge multiple response streams;
- Parse each stream response item;

This can be pretty challenging to do with pure js but, with fluentIterable, it becomes trivial:

```ts
function parseRequest(request: MyOriginalRequest): MyParsedRequest {
  // Implementation
}

function runRequest(request: MyParsedRequest): MyResponse {
  // Implementation
}

function parseResponse(request: MyResponse): MyParsedResponse {
  // Implementation
}

function getMergedStream(requestList: MyOriginalRequest[]) {
  return fluent(requestList)
    .map((x) => parseRequest(x))
    .mapAsync((x) => runRequest(x))
    .flatMerge()
    .map((x) => parseResponse(x));
}
```

If you're concerned if some stream may throw an error and don't want it to keep you from returning the successful items,
you can pass a callback to flatMerge, like this:

```ts
function getMergedStream(requestList: MyOriginalRequest[]) {
  return fluent(requestList)
    .map((x) => parseRequest(x))
    .mapAsync((x) => runRequest(x))
    .flatMerge((err, idx) =>> errorCallback(err, idx))
    .map((x) => parseResponse(x));
}
```

Look that an error object and an index is provided by this function, so, you can associate the error with the failing request.

Also, you can fall on a situation where all streams are empty, but you don't want to provide an empty stream after merge.
In this case, you can add a fallback response, like this:

```ts
function getMergedStream(requestList: MyOriginalRequest[]) {
  return fluent(requestList)
    .map((x) => parseRequest(x))
    .mapAsync((x) => runRequest(x))
    .flatMerge((err, idx) =>> errorCallback(err, idx))
    .map((x) => parseResponse(x))
    .whenEmpty(myFallbackIterable);
}
```

**myFallbackIterable** must be an iterable or async iterable object, in this case.

[Go back](README.md)
