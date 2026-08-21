> **NOTE:** This package has moved to the [codibre/fluent-iterable](https://github.com/codibre/fluent-iterable) monorepo (libs/augmentative-iterable/). This repository is preserved for historical reference only.

|
[![Actions Status](https://github.com/Codibre/augmentative-iterable/workflows/test/badge.svg)](https://github.com/Codibre/augmentative-iterable/actions)
[![Actions Status](https://github.com/Codibre/augmentative-iterable/workflows/lint/badge.svg)](https://github.com/Codibre/augmentative-iterable/actions)
[![npm version](https://badge.fury.io/js/augmentative-iterable.svg)](https://badge.fury.io/js/augmentative-iterable)

This library offers some operations over iterables with the intention of a better performance overall.

## How this works?

To explain this, I'll give a quick explanation about iterables because the functionality of this library is indeed very technical. When you create an iterable in js like that:

```TypeScript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
```

And, then, create another iterable, like this:

```TypeScript
function myGenerator2() {
  for (const item of myGenerator()) {
    yield item * 2;
  }
}
```

And use it like this:

```TypeScript
Array.from(myGenerator2());
```

What node is doing behind the scenes?

- By **Array.from** operation, it starts the iterator of **myGenerator2**;
- It starts the iterator of **myGenerator**;
- It iterates over **myGenerator** iterator;
- It iterates over **myGenerator2** iterator;
- It generate a new value from the multiplication yielded by the **myGenerator2** iterator;
- It pushes it into a new array, returned, after the iteration is over, by the **Array.from** function;

**What is wrong with that?**
It works as expected, and in many scenarios is the best option after all. But, it creates an overload in the core of the language to make it all operational. It's in that point this library try to offer another option.

**How the library would work, then?**
Let's take the first iterable and reuse it, but applying transformations of this library:

```TypeScript
const myGenerator2 = mapIterable(myGenerator(), (x) => x * 2);
```

This operation, internally, returns a new iterable with a reference to the first iterable, and a list of operations that will be applied over it. This list, as you may guess, will have the provided multiplication. At this point, nothing more efficient will happen if you run **Array.from**, but let's say you do a little more:

```TypeScript
const myGenerator3 = mapIterable(myGenerator2(), (x) => x + 2);
const myGenerator4 = filterIterable(myGenerator3(), (x) => x % 2 === 0);
const myGenerator5 = takeWhileIterable(myGenerator4(), (x) => x > 10);
```

Now, you have 5 transformations, and how the resulting iterable will look like?

- It, still have a reference for the first iterable, but no reference to any other;
- The list of operations I talked about above will have all the chained operations provided;

So, when you run **Array.from** over myGenerator5, it will use this data to process the iterable, and nothing else. The steps of such process can be described like this:

- By **Array.from** operation, it starts the iterator of **myGenerator5**;
- It starts the iterator of **myGenerator**;
- It iterates over the array of operations applying each one;
- It pushes it into a new array, returned, after the iteration is over, by the **Array.from** function;

This process requires less overload and is more scalable than the first one and still have the same result. By our tests, we have saved over 80% of processing time in some cases. Even though the setup of the iterable using this approach shows to be heavier, the process that really matter is the iteration, which surpasses any milliseconds you had lost preparing it.
Another thing we tried to do here is to avoid the use of async operation everytime possible, as it's also another source of overload.

## And how all those helper methods works?

This library actually have been made to have the base functionalities of [@codibre/fluent-iterable](https://github.com/Codibre/fluent-iterable), so, at this first version, it's not really simple to use as for some methods you have to rely on _bind_ or _call_ uses for some functions, but checkout our [index file](./index.d.ts) where we described each exported function if you want to try it!

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
