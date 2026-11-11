[![build](https://github.com/codibre/fluent-iterable/actions/workflows/standard.yaml/badge.svg?branch=master)](https://github.com/codibre/fluent-iterable/actions/workflows/standard.yaml?query=branch%3Amaster)
[![benchmark](https://github.com/codibre/fluent-iterable/actions/workflows/benchmark.yaml/badge.svg?branch=master)](https://github.com/codibre/fluent-iterable/actions/workflows/benchmark.yaml?query=branch%3Amaster)
[![publish](https://github.com/codibre/fluent-iterable/actions/workflows/publish.yaml/badge.svg?branch=master)](https://github.com/codibre/fluent-iterable/actions/workflows/publish.yaml?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/%40codibre%2Ffluent-iterable.svg)](https://badge.fury.io/js/%40codibre%2Ffluent-iterable)
![downloads per month](https://img.shields.io/npm/dm/@codibre/fluent-iterable)

A fast way to iterate, sync or async, over array-likes, streams and async iterables. It provides [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) operations so you can easily chain many operations.

<img src="resources/preview.png">

## Benchmarks

Fluent-iterable is strongly focused on performance. Check it out in our [benchmark](https://runkit.com/farenheith/fluent-iterable-benchmark)!
Here are some results we got in our CI (ubuntu-latest, node v26.13.0) when comparing it to other similar options:

| Library | Ops/sec | Margin | Ran samples |
| ------- | ------- | ----------- | ----------- |
| **fluent** | 528 | ±1.65% | 92 |
| [iterare](https://www.npmjs.com/package/iterare) | 454 | ±0.21%  | 93 |
| [iter-ops](https://www.npmjs.com/package/iter-ops) | 385 | ±1.17% | 93 |
| [native builtin iterator](https://tc39.es/proposal-iterator-helpers/) | 324 | ±0.34% | 92 |
| [iter-tools](https://www.npmjs.com/package/iter-tools-es) | 253 | ±0.46%  | 86 |
| [rxjs](https://www.npmjs.com/package/rxjs) | 233 | ±0.80% | 85 |
| native generators | 208 | ±1.05% | 89 |
| native array operations chain | 85.26 | ±1.16% | 74 |

Notice that what we call native builtin iterator is the [iterator helpers](https://tc39.es/proposal-iterator-helpers/) API, recently released in Node.js 22 (the [V8 feature write-up](https://v8.dev/features/iterator-helpers) has the implementation details), so, thanks to some strategies we use, we can achieve a performance even better than the helpers implemented in the V8 engine!
You can check the benchmark code [here](./test/benchmark/general-benchmark.spec.js)

### Head-to-head with the native iterator helpers

Since the [iterator helpers](https://tc39.es/proposal-iterator-helpers/) (`map`, `filter`, `flatMap`, `take`, `drop`, `some`, ...) are now built into every iterator out of the box, from Node.js 22 on, we also run a dedicated head-to-head between **fluent-iterable** and them: each scenario below takes the very same pipeline, written once with **fluent-iterable** and once with the native helpers, validates that both compute the same result, and then measures them side by side.

Results from our CI (ubuntu-latest, node v26.13.0):

| Scenario | fluent (ops/sec) | Margin | native helpers (ops/sec) | Margin | Winner |
| -------- | ---------------- | ------ | ------------------------ | ------ | ------ |
| map/filter chain | **477** | ±0.93% | 359 | ±1.24% | fluent |
| flatMap pipeline | 5,172 | ±0.19% | **5,416** | ±0.12% | native helpers |
| skip/take window | 192 | ±0.28% | **199** | ±1.04% | native helpers |
| early exit (any/some) | **534** | ±1.18% | 401 | ±1.06% | fluent |

**fluent-iterable** is way ahead (~33% faster) when the pipeline is long or the iteration exits early, while the native helpers get a small lead (~3%-5%) in the flatMap and skip/take pipelines — which is no surprise: V8 implements those two helpers really well, and staying within 5% of a native engine implementation is already a good deal!

You can check this benchmark code [here](./test/benchmark/iterator-helpers-benchmark.spec.js) and run it with `pnpm run test:benchmark:iterators` from the library folder (set `BENCH_ITEMS` to shrink the dataset for a quick local run).


## But Why?

When you're dealing with complex operations involving lists with multiple items, you may need to transform, filter, perform a flat map or even take just some items from that list. In cases like that, if you're dealing with a pure array, one solution is to simply do something like this:

```typescript
const flattedList = [];
const list2 = list
  .filter((x) => filter1(x))
  .map((x) => transform1(x))
  .filter((x) => filter2(x))
  .forEach((x) => flattedList.push(...x));
const result = flattedList
  .filter((x) => filter3(x))
  .slice(0, 10)
  .map((x) => transform2(x));
```

This code looks fluent and easy to read, but it is severely detrimental to performance.
That's because each operation does a complete iteration over the array, generating a new one! It can cause serious memory and cpu consumption, so such a practice is not encouraged.
So, to solve this, you can write equivalent code that solves everything in just two chained loops. This will give you the best performance possible, but can result in code that is harder to maintain.
And that's where **fluent-iterable** comes in!

With **fluent-iterable**, you can do the same operation with the following code:

``` typescript
const result = fluent(list)
  .filter((x) => filter1(x))
  .map((x) => transform1(x))
  .filter((x) => filter2(x))
  .flatMap()
  .filter((x) => filter3(x))
  .take(10)
  .map((x) => transform2(x))
  .toArray();
```

Pretty simple, right? With this code, you'll do exactly two chained loops, just like the vanilla solution described above!
**fluent-iterable** takes advantage of the Iterable and AsyncIterable contracts to achieve this, but it goes beyond. It uses a special library called **augmentative-iterable** that we developed as the core engine of the iterations. This library is focused exclusively on performance, so, with it, we achieved a processing time very close to the vanilla solution above!
Comparing to iterations using **for...of**, the native way to iterate over iterables in JavaScript, we achieved a result 50% faster!

## Doesn't it do what rxjs does?

No.

Although you can manipulate iterables in a similar way, rxjs has some key behavioral differences and a different purpose overall.
In summary, we can describe rxjs as they themselves define it on their website:

```
Think of RxJS as Lodash for events.
```

That's it. Rxjs is focused primarily on event handling.
On top of that, some key differences can be pointed out:

* *An upstream rxjs operation doesn't stop when some downstream operation stops, while with **fluent-iterable** it does.*
That's because, with rxjs, you can chain multiple operations in parallel after a single one, which makes sense for event handling. With **fluent-iterable**, on the other hand, you normally have only a straight line of operations and, no matter what operation breaks the iteration, everything stops.
* *With rxjs, an upstream operation doesn't wait for a downstream async operation to end before moving to the next item, while with **fluent-iterable** it does.*
Again, rxjs is focused on events. When dealing with events, you just want to emit them as fast as possible. With a simple iteration, though, you want to make sure that the whole chain of steps is concluded before advancing to the next one.

So, as you can see, despite some similarities, there are some pretty important differences between them: these are libraries focused on quite different problems.

## Usage

**fluent-iterable** has many neat operations already implemented. Check the [Full API Reference](https://github.com/Codibre/fluent-iterable/blob/master/docs/README.md) for all of them.

### Basics

ECMAScript introduced support for [iterables and generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) with version ES6 and their [asynchronous counterparts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) with version ES2018. It introduced an abstraction over sequential iterators (arrays, maps, generators, etc.), enabling us to implement solutions regardless of the actual type of the iterable collection. It is especially powerful when used in tandem with generator functions to avoid storing all items in memory when that's avoidable. The API provided by ***fluent-iterable*** reads the elements of the underlying iterable only when needed and stops reading elements as soon as the result is determined.

To get started with the fluent API, you need to translate the iterable (which can be any object with a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) or [asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) defined) into either a **FluentIterable** using **fluent()** or a **FluentAsyncIterable** using **fluentAsync()**.

``` typescript
import fetch from 'node-fetch';
import {
  fluent,
  fluentAsync,
  FluentIterable,
  FluentAsyncIterable,
} from '@codibre/fluent-iterable';

const iterableOfArray: FluentIterable<number> = fluent([3, 1, 8, 6, 9, 2]);

function* naiveFibonacci(): Iterable<number> {
  yield 0;
  yield 1;

  let x = 0;
  let y = 1;

  while (true) {
    y = x + y;
    x = y - x;
    yield y;
  }
}

const iterableOfGenerator = fluent(naiveFibonacci());

async function* emails(): AsyncIterable<string> {
  let page = 1;
  while (true) {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    if (!res.ok) {
      break;
    }
    yield* (await res.json()).data.map((user: { email: string }) => user.email);
  }
}

const asyncIterableOfEmails = fluentAsync(emails());
```

Once you have an instance of a fluent iterable, you can start chaining any of the supported operations to express what you need, like:

``` typescript
...

interface ChatMessage {
  id: number;
  from: string;
  to: string;
  body: string;
}

...

function getAllMessages(iterable: FluentAsyncIterable<ChatMessage>): FluentAsyncIterable<string> {
  return iterable.map(chatMessage => chatMessage.body);
}

function getAllUsers(iterable: FluentAsyncIterable<ChatMessage>): FluentAsyncIterable<string> {
  return iterable
    .flatMap(chatMessage => [ chatMessage.from, chatMessage.to ]) // convert the message entries into arrays of sender and recipient and flatten them
    .distinct(); // yield the users only once
}

function getNumberOfUsers(iterable: FluentAsyncIterable<ChatMessage>): Promise<number> {
  return getAllUsers(iterable).count();
}

async function getMostActiveUser(iterable: FluentAsyncIterable<ChatMessage>): Promise<string | undefined> {
  const maxGroup = await iterable
    .group(chatMessage => chatMessage.from) // group the messages by their sender
    .max(chatMessage => chatMessage.values.count()); // find one of the groups which has the most messages
  return maxGroup?.key;
}

async function hasUserSentEmptyMessage(iterable: FluentAsyncIterable<ChatMessage>, user: string): Promise<boolean> {
  return await iterable
    .any(chatMessage => chatMessage.from === user && chatMessage.body.length === 0); // will stop reading elements as soon as it finds one that satisfies the condition
}

async function createBackupSequential(iterable: FluentAsyncIterable<ChatMessage>): Promise<void> {
  await iterable
    .execute(chatMessage => console.log(`Backing up message ${chatMessage.id}.`)) // log progress w/o modifying the iterable
    .forEach(chatMessage => fetch(BACKUP_URL, { // execute the asynchronous backup operation for all elements, one by one
      method: 'post',
      body:    JSON.stringify(chatMessage),
      headers: { 'Content-Type': 'application/json' },
    }));
}

async function createBackupParallel(iterable: FluentAsyncIterable<ChatMessage>): Promise<void> {
  await iterable
    .execute(chatMessage => console.log(`Backing up message ${chatMessage.id}.`)) // log progress w/o modifying the iterable
    .map(chatMessage => {
      const result = fetch(BACKUP_URL, { // translate all elements into a promise of their asynchronous backup operation
          method: 'post',
          body:    JSON.stringify(chatMessage),
          headers: { 'Content-Type': 'application/json' },
      }).then(x => [x]);
      return fluentAsync(result);
    })
    // Joins everything in parallel, generating an AsyncIterable with the results in the order they were yielded
    .flatMerge(
      (error) => console.log(error) // This callback will be called whenever one of the fetch calls throws an error
    )
    .last();
}

async function createBackupParallelV2(iterable: FluentAsyncIterable<ChatMessage>): Promise<Response[]> {
  return iterable
    .execute(chatMessage => console.log(`Backing up message ${chatMessage.id}.`)) // log progress w/o modifying the iterable
    .waitAll(chatMessage => fetch(BACKUP_URL, { // translate all elements into a promise of their asynchronous backup operation
          method: 'post',
          body:    JSON.stringify(chatMessage),
          headers: { 'Content-Type': 'application/json' },
      }));
}
```

### Examples

You can find many advanced examples for **fluent** [here](advanced-examples/README.md).

#### Playing with Fibonacci generator

``` typescript
import { fluent } from '@codibre/fluent-iterable';

function* naiveFibonacci(): Iterable<number> {
  yield 0;
  yield 1;

  let x = 0;
  let y = 1;

  while (true) {
    y = x + y;
    x = y - x;
    yield y;
  }
}

// What is the sum of the first 100 Fibonacci numbers?
console.log(
  fluent(naiveFibonacci())
    .takeWhile((n) => n < 100)
    .sum(),
);

// How many Fibonacci numbers are there between 1K and 1M?
console.log(
  fluent(naiveFibonacci())
    .skipWhile((n) => n < 1000)
    .takeWhile((n) => n < 1000000)
    .count(),
);

// What are the 10th to 20th Fibonacci numbers?
console.log(fluent(naiveFibonacci()).skip(9).take(10).toArray());

// What are the halves of the first 20 even Fibonacci numbers?
console.log(
  fluent(naiveFibonacci())
    .filter((n) => n % 2 === 0)
    .take(20)
    .map((n) => n / 2)
    .toArray(),
);
```

#### Playing with object arrays

``` typescript
import { fluent } from '@codibre/fluent-iterable';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

interface Person {
  name: string;
  gender?: Gender;
  emails: string[];
}

const people: Person[] = [
  {
    name: 'Adam',
    gender: Gender.Male,
    emails: ['adam@adam.com'],
  },
  {
    name: 'Christine',
    gender: Gender.Female,
    emails: [],
  },
  {
    name: 'Sebastian',
    emails: ['sebastian@sebastian.com', 'sebastian@corp.com'],
  },
  {
    name: 'Alex',
    gender: Gender.Female,
    emails: ['alex@alex.com'],
  },
];

// Log all the names!
for (const name of fluent(people).map((p) => p.name)) {
  console.log(name);
}

// Log all the emails!
console.log(
  fluent(people)
    .flatten((p) => p.emails)
    .toArray(),
);

// Are there any persons without gender specified?
console.log(fluent(people).any((p) => !p.gender));

// Do all the persons have at least one email?
console.log(fluent(people).all((p) => p.emails.length > 0));

// Who is the last female?
console.log(fluent(people).last((p) => p.gender === Gender.Female));

// Who is the last one in lexicographical order?
console.log(
  fluent(people)
    .sort((a, b) => a.name.localeCompare(b.name))
    .last(),
);

// Log all persons grouped by gender!
console.log(
  fluent(people)
    .group((p) => p.gender)
    .map(
      (grp) =>
        `${fluent(grp.values)
          .map((p) => p.name)
          .toArray()
          .join(', ')} is/are ${grp.key}`,
    )
    .reduce((current, next) => `${current}\n${next}`, ''),
);
```

#### Playing with remote

``` typescript
import fetch from 'node-fetch';
import { fluentAsync, Pager } from '@codibre/fluent-iterable';

interface Data {
  id: number;
  email: string;
  avatar: string;
}

const pager: Pager<Data, number> = async (token?: number) => {
  const page = token || 1;
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  return {
    results: res.ok ? (await res.json()).data : undefined,
    nextPageToken: page + 1,
  };
};

// Get the first 10 emails sorted!
fluentAsync(depaginate(pager))
  .map((data) => data.email)
  .take(10)
  .sort()
  .forEach((res) => console.log(res))
  .then(() => console.log('done'));
```

### Doing an inner join between two iterables

``` typescript
import { fluent, identity } from '@codibre/fluent-iterable';

const genders = [
  { code: 'm', description: 'male' },
  { code: 'f', description: 'female' },
  { code: 'n', description: 'non binary' },
];

const persons = [
  {
    name: 'Steve',
    gender: 'm',
  },
  {
    name: 'Natasha',
    gender: 'f',
  },
  {
    name: 'Lucius',
    gender: 'n',
  },
  {
    name: 'Jonathan',
    gender: 'm',
  },
  {
    name: 'Nicole',
    gender: 'f',
  },
  {
    name: 'Emmy',
    gender: 'n',
  },
];

fluent(genders)
  .combine(
    persons,
    (g) => g.code,
    (p) => p.gender,
  )
  .forEach(([gender, person]) =>
    console.log(`name: ${person.name}, gender: ${gender.description}`),
  );
```

#### Bonus: How to Scan DynamoDB like a pro

``` typescript
import { DynamoDB, ScanInput, AttributeValue } from '@aws-sdk/client-dynamodb';
import { depaginate, fluentAsync, Pager } from '@codibre/fluent-iterable';

async function *scan<TData>(
  input: ScanInput
): AsyncIterable<TData> {
  const ddb = new DynamoDB();
  const pager: Pager<TData, Record<string, AttributeValue>> = async (token) => {
    const result = await ddb
      .scan(input);

    return {
      nextPageToken: result.LastEvaluatedKey,
      results: result.Items as TData[],
    };
  };

  yield* depaginate(pager);
}

// and use it like this:

const productsParams: ScanInput = {
  TableName: 'ProductTable',
  FilterExpression: '#shoeName = :shoeName', // optional
  ExpressionAttributeValues: { ':shoeName': { S: 'YeeZys' } }, // optional
  ExpressionAttributeNames: { '#shoeName': 'name' } // optional
};

async function printProducts(count: number) {
  for await (const product of fluentAsync(scan(productsParams)).take(count)) {
    console.dir(product);
  }
}
```

## Merging streams, async iterables and async iterators

Because Readable streams are also async iterables, this can be very useful when you have many streams being dealt with at once and you need to combine all their results: just use *asyncHelper.merge* or *asyncHelper.mergeCatching*. The difference between them is that, with *mergeCatching*, you can continue to receive chunks from the non concluded async iterables/readables even if one of them throws an error, while *merge*, on the other hand, will throw an error at the first error received.

The solution for these problems was 90% inspired by the [fraxken combine-async-iterators repository](https://github.com/fraxken/combine-async-iterators), which uses Promise.race to generate a new merged iterable that yields the items from all iterators in the resolving order.

## Adding custom operations

You can add custom methods to the FluentIterable and FluentAsyncIterable using the *extend* and *extendAsync* utilities. Here is a practical example:

``` TypeScript
import { extendAsync } from '@codibre/fluent-iterable';

declare module '@codibre/fluent-iterable' {

  interface FluentAsyncIterable<T> {
    myCustomIterableMethod(): FluentAsyncIterable<T>;
    myCustomResolvingMethod(): PromiseLike<number>;
  }
}

extendAsync.use('myCustomIterableMethod', (x) => someOperation(x));
extendAsync.use('myCustomResolvingMethod', (x) => someResolvingOperation(x));
```

Notice that, when you import code like the above, every FluentAsyncIterable created afterwards will have the declared methods, so use it with caution!

## Assuring order for faster operations!

One thing you can do to get the best performance from this package is to signal that a given
predicate will generate or analyze results in order. Take this example:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

The way it is declared, this operation will print 2 items, but will validate 5. The original array is in order,
though, so why do we need to validate all items?
You can avoid this by assuring fluent-iterable that the filter predicate will treat the elements in order:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(assureOrder((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

This result will be the same, but this operation will only validate 3 items! The third item will be 3 and will make the iteration stop!
You can also do the same operation with an alias for **assureOrder**:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(o((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

You can also assure the order for a whole iterable:

``` ts
const result = fluent(o([1, 2, 3, 4, 5])) // or o(fluent([1, 2, 3, 4, 5]))
  .assureOrder() // you can also use alias .o()
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

Or you can use the fluent syntax:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .assureOrder() // you can also use alias .o()
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

But the latter ones have a behavior slightly different from assuring a predicate order: the order will actually be assured for all consecutive operations where the original elements do not change. Practically speaking, for any consecutive **filter** and **takeWhile** operations, fluent will remember the assurance.

So, something like this:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .o()
  .filter((x) => x < 3)
  .max();

console.log(result); // prints 2
```

This will be executed with the best performance possible!
But **max** is a particular operation that can benefit much more from a descending assuring, as it
simply becomes equivalent to **first**. If you find yourself in such a situation, you can indicate it to fluent
as well, like this:

``` ts
const result = fluent([5, 4, 3, 2, 1])
  .od() // you can also use alias .assureOrderDescending()
  .filter((x) => x < 3)
  .max();

console.log(result); // prints 2
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
