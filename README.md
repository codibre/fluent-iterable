[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/build/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/test/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/lint/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/benchmark-10/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/benchmark-12/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/benchmark-14/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/069043968e0e72b2b5aa/test_coverage)](https://codeclimate.com/github/Codibre/fluent-iterable/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/069043968e0e72b2b5aa/maintainability)](https://codeclimate.com/github/Codibre/fluent-iterable/maintainability)
[![npm version](https://badge.fury.io/js/%40codibre%2Ffluent-iterable.svg)](https://badge.fury.io/js/%40codibre%2Ffluent-iterable)
![downlods per month](https://img.shields.io/npm/dm/@codibre/fluent-iterable)

A fast way to iterate, sync or async, over array likes, stream and async iterables. It provides [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) operations so you can easily chain many operations.

<img src="resources/preview.png">

## Benchmarks

Fluent-iterable are strongly focused on performance. Check it out in our [benchmark](https://runkit.com/farenheith/fluent-iterable-benchmark)!;
Here a some results we got comparing to another similar options:

| Library | Ops/sec | Margin | Ran samples |
| ------- | ------- | ----------- | ----------- |
| **fluent** | 283 | ±2.67% | 83 |
| [iterare](https://www.npmjs.com/package/iterare ) | 284 | ±2.53%  | 83 |
| [iter-tools](https://www.npmjs.com/package/iter-tools-es ) | 217 | ±2.43%  | 83 |
| [rxjs](https://www.npmjs.com/package/rxjs) | 147 | ±3.63% | 82 |
| native generators | 96.88 | ±0.69% | 70 |
| native array operations chain | 83.49 | ±4.82% | 62 |

You can check the bechmark code [here](./test-benchmark/general-benchmark.spec.ts)


## But Why?

When you're dealing with complex operations envolving lists with multiple items, you can fall in the need of transform, filter, perform a flat map or even take just some items from that list. In cases like that, if you're dealing with a pure array, one solution is to simply do something like this:

```typescript
const flattedList = [];
const list2 = list
  .filter((x) => filter1(x))
  .map((X) => transform1(x))
  .filter((x) => filter2(x))
  .forEach((x) => flattedList.push(...x));
const result = flattedList
  .filter((x) => filter3(x))
  .slice(0, 10)
  .map((x) => transform2(x));
```

This code looks fluent and easy to read, but it is severe to performance.
That's because each operation do a complete iteration over the array, generating a new one! It can cause serious memory and cpu consumption, so, such practice is not encouraged.
So, to solve this, you can write an equivalent code which will solve everything in with two chained loops. This will give you the best performance possible, but can result in a code harder to maintain.
And that's where fast-iterable comes in!

With fast-iterable, you can do the same operation with the following code:

``` typescript
const result = fluent(list)
  .filter((x) => filter1(x))
  .map((X) => transform1(x))
  .filter((x) => filter2(x))
  .flatMap()
  .filter((x) => filter3(x))
  .take(10)
  .map((x) => transform2(x))
  .toArray();
```

Pretty simple, right? With this code, you'll do exactly two chained loops, exactly as the vanilla solution described above!
fast-iterable takes advantage of the Iterable and AsyncIterable contracts to achieve this, but it goes beyond. It uses a special library called **augmentative-iterables** that we developed as the core engine of the iterations. This library is focused exclusively in performance, so, with it, we achieved a processing time very close to the vanilla solution above!
Comparing to iterations using **for of**, the native way to iterate over iterables of JavaScript, we achieved a result 50% faster!

## Doesn't it what rxjs do?

No.

Although you can manipulate Iterables in a similar way, rxjs have some key different behaviors and a different purpose overall.
In summary, we can use rxjs as what themselves define it in their website:

```
Think of RxJS as Lodash for events.
```

That's it. Rxjs is focused primarily in event handling.
Over that, some key differences can be pointed out:

* *A previous operation of rxjs doesn't stop when some next operation stops, while with fast-iterable it does.*
That's because, with rxjs you can chain multiple operations parallel after one, which makes sense for event handling. With fast-iterable, on the other hand, you can only have, normally, a straight line of operations and,f no matter what operation break the iteration, everything stops.
* *With rxjs, a previous operation doesn't wait for a async next operation to end before go to the next step, while with fast-iterable it does.*
Again, rxjs is focused on events. When dealing with event, you just want to emit them as fast as possible. With a simple iteration, though, you want to make sure that the whole chain of steps is concluded before advancing to the next one.

So, as you see, regardless some similarities, there're some pretty important differences between them and those are libraries focused on quite different problems.

## Usage

Fast-iterable have some neat operations already implemente. If you want to Click here for the [Full API Reference](https://github.com/Codibre/fluent-iterable/blob/master/docs/README.md).

### Basics

ECMAScript introduced support for [iterables and generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) with version ES6 and their [asynchronous counterparts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) with version ES2018. It has introduced an abstraction over sequential iterators (arrays, maps, generators, etc), enabling us to implement solutions regardless of the actual type of the iterable collection. It is especially powerful when using in tandem with generator functions to avoid storing all items in memory when its avoidable. The API provided by *fast-iterable* reads the elements of the underlying iterable only when needed and stops reading elements as soon as the result is determined.

To get started with the fluent API, you need to translate the iterable (can be any object with [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) or [asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) defined) into either a **FluentIterable** using **fluent()** or a **FluentAsyncIterable** using **fluentAsync()**.

``` typescript
import fetch from 'node-fetch';
import {
  fluent,
  fluentAsync,
  FluentIterable,
  FluentAsyncIterable,
} from 'fast-iterable';

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
    yield* (await res.json()).data.map((user) => user.email);
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

async function getMostActiveUser(iterable: FluentAsyncIterable<ChatMessage>): Promise<string> {
  const maxGroup: FluentGroup<ChatMessage> = await iterable
    .group(chatMessage => chatMessage.from) // group the messages by their sender
    .max(chatMessage => chatMessage.values.count()); // find one of the groups which has the most messages
  return maxGroup.key;
}

async function hasUserSentEmptyMessage(iterable: FluentAsyncIterable<ChatMessage>, user: string): Promise<bool> {
  return await iterable
    .any(chatMessage => chatMessage.from === user && chatMessage.body.length === 0); // will stop reading elements as soon as found one which satisfying the condition
}

async function createBackupSequential(iterable: FluentAsyncIterable<ChatMessage>): Promise<void> {
  await iterable
    .execute(chatMessage => console.log(`Backing up message ${chatMessage.id}.`)) // log progress w/o modifying the iterable
    .forEachAsync(chatMessage => fetch(BACKUP_URL, { // execute the asynchronous backup operation against all elements one-by-one
      method: 'post',
      body:    JSON.stringify(chatMessage),
      headers: { 'Content-Type': 'application/json' },
    }));
}

async function createBackupParallel(iterable: FluentAsyncIterable<ChatMessage>): Promise<void> {
  const promises = iterable
    .execute(chatMessage => console.log(`Backing up message ${chatMessage.id}.`)) // log progress w/o modifying the iterable
    .map(chatMessage => fetch(BACKUP_URL, { // translate all elements into a promise of their asynchronous backup operation
      method: 'post',
      body:    JSON.stringify(chatMessage),
      headers: { 'Content-Type': 'application/json' },
    }));
  await Promise.all(promises);
}
```

### Examples

You can see a list of many advanced examples for **fluent** clicking [here!](advanced-examples/README.md)!

#### Playing with Fibonacci generator

``` typescript
import { fluent } from 'fast-iterable';

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

// What is the sum of the first 100 fibonacci numbers?
console.log(
  fluent(naiveFibonacci())
    .takeWhile((n) => n < 100)
    .sum(),
);

// How many fibonacci numbers are there between 1K and 1M?
console.log(
  fluent(naiveFibonacci())
    .skipWhile((n) => n < 1000)
    .takeWhile((n) => n < 1000000)
    .count(),
);

// What are the 10th to 20th fibonacci numbers?
console.log(fluent(naiveFibonacci()).skip(9).take(10).toArray());

// What are the halves of the first 20 even fibonacci numbers?
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
import { fluent } from 'fast-iterable';

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

// Are all the persons have at least one email?
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
import { fluentAsync, Pager } from 'fast-iterable';

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

### Doing an inner join between two iterables:

``` typescript
import { fluent, identity } from 'fast-iterable';

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
import { DynamoDB } from 'aws-sdk';
import { Key } from 'aws-sdk/clients/dynamodb';
import { depaginate, fluentAsync, Pager } from 'fast-iterable';

async function *scan<TData>(
  input: DynamoDB.DocumentClient.ScanInput
): AsyncIterable<TData> {
  const ddb = new DynamoDB.DocumentClient(..);
  const pager: Pager<TData, Key> = async (token) => {
    const result = await ddb
      .scan(input)
      .promise();

    return {
      nextPageToken: result.LastEvaluatedKey,
      results: result.Items as TData[],
    };
  };

  yield* depaginate(pager);
}

// and use it like this:

const productsParams: DynamoDB.DocumentClient.ScanInput = {
  TableName : 'ProductTable',
  FilterExpression : '#shoename = :shoename', // optional
  ExpressionAttributeValues : {':shoename' : 'yeezys'}, // optional
  ExpressionAttributeNames: { '#shoename': 'name' } // optional
};

async function printProducts(count: number) {
  for await (const product of fluentAsync(scan(productsParams)).take(count)) {
    console.dir(product);
  }
}
```

## Merging stream, async iterables and async iterators

Due to Readables also being async iterables, it can be very useful, if you have a scenario where you have many streams being dealt with and you need to combine all results, you can use *asyncHelper.merge* or *asyncHelper.mergeCatching* for it! The difference between them is that, with *mergeCatching*, you can continue to receive chunks from non concluded async iterables/readables, even if one of them throws an error, while *merge*, in the other hand, will throw an error at the first error received.

The solution used for this problems was 90% inspired in the [fraxken combine-async-iterators repository](https://github.com/fraxken/combine-async-iterators), which uses Promise.race to generate a new merged iterable that yields the items from all iterators in the resolving order.

## Adding custom operations

You can add custom methods to the FluentIterable and FluentAsyncIterable using the *extend* and *extendAsync* utilities. Here is a practical example of how to:

``` TypeScript
declare module 'fast-iterable' {
  import { extendAsync } from '../src';

  interface FluentAsyncIterable<T> {
    myCustomIterableMethod(): FluentAsyncIterable<T>;
    myCustomResolvingMethod(): PromiseLike<number>;
  }

  extendAsync.use('myCustomIterableMethod', (x) => someOperation(x));
  extendAsync.use('myCustomResolvingMethod', (x) => someResolvingOperation(x));
}
```

Notice that, when you import a code like the above, all the next created FluentAsyncIterable will have the declared methods, so use it with caution!

## Assuring order for faster operations!

One thing you can do to get the best performance from this package is to signalize when determined predicate
will generate or analyze results in order. Take this example:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

The way it is declared, this operation will print 2 items, but will validate 5. The original array is in order,
though, so, why we need validate all items?
We can avoid this if you assure for fluent-iterable that the filter predicate will treat elements in order:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(assureOrder((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

This result will be the same, but this operation will only validate 3 items! The third item will be 3 and will make the iteration to stop!
You can also do the same operation with an alias for **assureOrder**:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(o((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

You can also assure the order for a whole iterable

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

But these later ones have a behavior slight different from assuring a predicate order: the order will actually be assured for all consecutive operations where the original elements will not change. Practically speaking, for any consecutive **filter** and **takeWhile** operations, fluent will remember the assuring.

So, something like this:

``` ts
const result = fluent([1, 2, 3, 4, 5])
  .o()
  .filter((x) => x < 3)
  .max();

console.log(result); // prints 2
```

Will be executed with max performance possible!
But **max** is a particular operation that could take a benefit much greater from a descending assuring, as it
simply become equivalent to **first**. If you fall into such situation, you can also indicate it to fluent,
like this:

``` ts
const result = fluent([5, 4, 3, 2, 1])
  .od() // you can also use alias .assureOrderDescending()
  .filter((x) => x < 3)
  .max();

console.log(result); // prints 2
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
