# Iterating seamlessly over chunked data

If you're working with some database which you may query data in chunks, it'll be tricky to manipulate that data without adding all the results in a in memory list. With fluent iterable you can make this transition easily.

```ts
function getChunkedData(request: MyRequest): Readable {
  // Implementation. Return type may also be AsyncIterable<SomeData>, for a better typing, as Readable implements de AsyncIterable interface
}

function doEachWork(data: SomeDta) {
  // Some work you need to do
}

async function doTheWork(request: MyRequest) {
  // Here you need to explicitly inform the item type, for better experience, because Readable have a item of type any
  // Also notice that the item type is an array, because we're talking about a strem of chunked data
  await fluent<SomeData[]>(getChunkedData(request))
    .flatMap() // With flat map, the stream of SomeData[] will unwind and be transformed in a stream of SomeData
    .forEachAsync(doEachWork); // You could also just return the iterable without resolve it and del with the data somewhere else, for decoupling purpose
}
```

The advantage of fluent in this case is that the flatting algorithm, as of the any other operation, primally focused on performance and memory consumption, so, you can get a fast and simple solution to chain and decouple complex list operations!

[Go back](README.md)
