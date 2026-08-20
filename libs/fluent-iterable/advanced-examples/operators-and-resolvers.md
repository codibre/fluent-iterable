# Operators, resolvers and preparation

Fluent Iterable have a great set of operations and understanding how it works can make you benefit more of the api! We'll try to explain below how it works and the different types of operators:

# How fluent setup the execution

When you call **fluent** or **fluentAsync**, first, we'll check if the informed object is already a FluentIterable, so we can return the parameter itself and avoid unneeded overloads. If the iterable or async iterable is not fluent, then we'll create a **[Proxy](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)** to manage the fluent operators.

### But why we use a proxy and not a simple instantiation?

Because fluent have more than 80 implemented operations, and to create an instance with so many methods can impact performance. To use proxy instead have shown to be much more faster with our benchmarks and it'll guarantee that only the methods you really asks for will be, in fact, added to your call. Also, it'll use much less memory in scenarios where fluent is highly used.

### Okay, but when the operations are chained, what really happens?

Fluent works over our core lib [augmentative-iterable](https://www.npmjs.com/package/augmentative-iterable) which returns a mutable object that implements the iterable interface, or async iterable, which supports the registering of operations. This lib aims to provide the faster iteration and setup as possible, and the fact it is mutable makes a big difference about how it must be used: you can't chain multiple operations in the same node, ie, this is forbidden:

```ts
const origin = [1, 2, 3];
const it = fluent(origin);
const evens = it.filter((x) => x % 2 === 0);
const odds = it.filter((x) => x % 2 !== 0);
```

Instead, you need to do as follow:

```ts
const origin = [1, 2, 3];
const evens = fluent(it).filter((x) => x % 2 === 0);
const odds = fluent(it).filter((x) => x % 2 !== 0)
```

That's how iterables works: you can't guarantee a second iteration over the same iterable, and that's needed for some core behaviors of it. Also, an iterable is not guaranteed to support multiples iterations over it. An array supports it, but it's not the rule, it's an exception. Iterables created using the [generator pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) can only be iterated once, for example. Because of this, fluent-iterable don't give support to parallel iterations deriving from the same node and must be used as a straight forward fluent tool.

# How fluent handle sync and async iterations

You can chain in a fluent iterable, both, sync and async operations. In a **FluentIterable** instance, you have a sync and async version for almost all operations, and in a **FluentAsyncIterable** you have only one version, but internally fluent decides what to do with it depending on what the result returns. If it's a promise, then it'll be awaited, if not, the operation will be dealt synchronously. And it's important to notice that, while a resolsing operation is not chained, nothing is really executed, just prepared.

## And when the chain of operations are executed?

The operations are executed in the chaining order for each iterable item when a **resolving operation** is called or when you explicitly iterate over the fluent iterable instance.

```ts
// Nothing is ran here, just chained
const test = fluent([1, 2, 3])
  .repeat(3)
  .withIndex()
  .partition(3)
  .flatMap((x) => fluent(x).map(({ value, idx }) => value * (idx + 1)));

// Here, the iteration happens
for (const i of test) {
  console.log(i);
}

//Instead, you can just call a resolving operation
test.forEach((x) => console.log(x));
// Or
console.log(test.sum());
// Or any other resolving operation
```

## How can I identify a resolving operation?

Generally, a resolving operation is easy to notice because it refers to something that can't be applied individually for the iterable items, or doesn't make sense to return another instance of Fluent Iterable.
For example, you have **sum, max, min, top, forEach, toArray, isDistinct** and others.
In case of doubt, though, we cared to specify in the jsdoc when the operation will resolve the iteration.

## When I must resolve an iterable?

The best thing it to resolve the iterable as late as possible. There're examples where we resolved an iterable in the controller, just before returning the result to the client.
The idea here is to avoid as much as iterations as possible, chaining the operations over your application flow, avoiding resolution until you really need it to. A common good practice is also, for example, when flat mapping an iterable, to let the items being a fluent iterable too (as in the example above), because it will postpone the resolution giving chance to chain more operations without the need of an additional loop.
The more you postpone the resolution, later you'll have a full processed list loaded and less memory you'll use, which can significantly improve you scalability and performance, so, always keep that in mind.
