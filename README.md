[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/build/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/test/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Actions Status](https://github.com/Codibre/fluent-iterable/workflows/lint/badge.svg)](https://github.com/Codibre/fluent-iterable/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/069043968e0e72b2b5aa/test_coverage)](https://codeclimate.com/github/Codibre/fluent-iterable/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/069043968e0e72b2b5aa/maintainability)](https://codeclimate.com/github/Codibre/fluent-iterable/maintainability)
[![npm version](https://badge.fury.io/js/%40codibre%2Ffluent-iterable.svg)](https://badge.fury.io/js/%40codibre%2Ffluent-iterable)
![downlods per month](https://img.shields.io/npm/dm/@codibre/fluent-iterable)

<p align="center">
<img src="resources/preview.png">
</p>

Provides [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) operations on iterables and async iterables - similar to what's defined on arrays. Especially useful until [relevant ESNext features](https://tc39.es/proposal-iterator-helpers/#sec-iteration) are being delivered.
This library is a fork from [kataik fluent-iterable repository](https://github.com/kataik/fluent-iterable) where more functionalities was added.

## Description

The library provides the common transformation, filtering and aggregation operations on iterables and async iterables. Supported operations include:

- Item-by-item transformations like [map](docs/interfaces/_types_.fluentiterable.md#map), [withIndex](docs/interfaces/_types_.fluentiterable.md#withIndex)
- Group transformations like [flatten](docs/interfaces/_types_.fluentiterable.md#flatten), [group](docs/interfaces/_types_.fluentiterable.md#group), [partition](docs/interfaces/_types_.fluentiterable.md#partition), [repeat](docs/interfaces/_types_.fluentiterable.md#repeat), [sort](docs/interfaces/_types_.fluentiterable.md#sort)
- Extending operations like [append](docs/interfaces/_types_.fluentiterable.md#append), [prepend](docs/interfaces/_types_.fluentiterable.md#prepend), [concat](docs/interfaces/_types_.fluentiterable.md#concat)
- Narrowing operations like [filter](docs/interfaces/_types_.fluentiterable.md#filter), [take](docs/interfaces/_types_.fluentiterable.md#take), [skip](docs/interfaces/_types_.fluentiterable.md#skip), [distinct](docs/interfaces/_types_.fluentiterable.md#distinct), [first](docs/interfaces/_types_.fluentiterable.md#first), [last](docs/interfaces/_types_.fluentiterable.md#last)
- Aggregating operations like [reduce](docs/interfaces/_types_.fluentiterable.md#reduce), [toArray](docs/interfaces/_types_.fluentiterable.md#toArray), [toObject](docs/interfaces/_types_.fluentiterable.md#toObject), [join](docs/interfaces/_types_.fluentiterable.md#join)
- Numeric aggregating operations like [count](docs/interfaces/_types_.fluentiterable.md#count), [max](docs/interfaces/_types_.fluentiterable.md#max), [min](docs/interfaces/_types_.fluentiterable.md#min), [sum](docs/interfaces/_types_.fluentiterable.md#sum), [avg](docs/interfaces/_types_.fluentiterable.md#avg)
- Logical aggregating operations like [all](docs/interfaces/_types_.fluentiterable.md#all), [any](docs/interfaces/_types_.fluentiterable.md#any), [contains](docs/interfaces/_types_.fluentiterable.md#contains)
- Execution operations like [execute](docs/interfaces/_types_.fluentiterable.md#execute), [forEach](docs/interfaces/_types_.fluentiterable.md#forEach)

## Quick start guide

Install from [Node Package Manager](https://www.npmjs.com/): `npm i @codibre/fluent-iterable`

Add the following code to your index file (ts example):

```typescript
import { fluent, FluentIterable } from '@codibre/fluent-iterable';

const numbers: number[] = [3, 1, 8, 6, 9, 2];
const iterable: FluentIterable<number> = fluent(numbers);

console.log(
  `The largest even number is: ${iterable.filter((n) => n % 2 === 0).max()}`,
);
```

## Usage

Click here for the [Full API Reference](./docs/README.md).

### Basics

ECMAScript introduced support for [iterables and generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) with version ES6 and their [asynchronous counterparts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) with version ES2018. It has introduced an abstraction over sequential iterators (arrays, maps, generators, etc), enabling us to implement solutions regardless of the actual type of the iterable collection. It is especially powerful when using in tandem with generator functions to avoid storing all items in memory when its avoidable. The API provided by _fluent-iterable_ reads the elements of the underlying iterable only when needed and stops reading elements as soon as the result is determined.

To get started with the fluent API, you need to translate the iterable (can be any object with [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) or [asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) defined) into either a [FluentIterable](docs/interfaces/_types_.fluentiterable.md) using [fluent()](docs/modules/_fluent_.md#fluent) or a [FluentAsyncIterable](docs/interfaces/_types_.fluentasynciterable.md) using [fluentAsync()](docs/modules/_fluentasync_.md#fluentAsync).

```typescript
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

const iterableOfGenerator: FluentIterable<number> = fluent(naiveFibonacci());

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

const asyncIterableOfEmails: FluentAsyncIterable<string> = fluentAsync(
  emails(),
);
```

Once you have an instance of a fluent iterable, you can start chaining any of the supported operations to express what you need, like:

```typescript
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
    .flatten(chatMessage => [ chatMessage.from, chatMessage.to ]) // convert the message entries into arrays of sender and recipient and flatten them
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

### Utils

The API provides some utility functions to help working with iterables.

#### Interval

The [interval()](docs/modules/_utils_.md#interval) function generates a continuous and unique sequence of numbers. If no arguments provided, the sequence starts at zero and generates infinite numbers.

Note: remember, generator functions are state machines, calling the function will not actually generate the numbers. They are generated on the fly until new number are being read from it:

```typescript
import { fluent, interval } from '@codibre/fluent-iterable';

const numbers: Iterable<number> = interval();
const iterable: FluentIterable<number> = fluent(numbers);

for (const number of iterable.take(10)) {
  // generate the first 10 numbers one-by-one
  console.log(number);
} // close the generator

// this function would cause an infinite loop:
// for (const number of iterable.take(10)) { // generate infinite number of numbers one-by-one
//   console.log(number);
// }
```

#### Depaginator

The [depaginate()](docs/modules/_depaginator_.md#depaginate) is a handy little generator function when it comes down to dealing paginated resources. It is designed to translate the paginated resource into a non-paginated iterable of elements. The function takes one parameter of type [Pager](docs/modules/_types_.md), which defines how to retrieve a single [page](docs/interfaces/_types_.page.md) from the resource.

```typescript
import { fluentAsync, depaginate, Page, Pager } from '@codibre/fluent-iterable';

interface Data { .. } // The type of the data stored in the paginated resource
type NextPageToken = ..; // The type of the next page token (e.g. page number, DDB token string, etc)

// These functions return a page of items from the resource in the form of { nextPageToken: NextPageToken, results: Data[] }
async function getFirstPage(): Promise<Page<Data, NextPageToken>> { .. }
async function getPage(nextPageToken: NextPageToken): Promise<Page<Data, NextPageToken>> { .. }

const pager: Pager<Data, NextPageToken> = (nextPageToken) => nextPageToken ? getPage(nextPageToken) : getFirstPage();

const allItems: AsyncIterable<Data> = depaginate(pager); // as long as you keep read items from this it will keep requesting pages to fulfil the reads
const firstItems: FluentAsyncIterable<Data> = fluentAsync(depaginate(pager)).take(10); // you can read up to 10 items from this and it will request exactly as many pages as necessary to fulfill the reads

// ... you get the picture
```

### Examples

You can see a list of many advanced examples for **fluent** clicking [here!](advanced-examples/README.md)!

#### Playing with Fibonacci generator

```typescript
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

```typescript
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

```typescript
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

### Doing an inner join between two iterables:

```typescript
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

```typescript
import { DynamoDB } from 'aws-sdk';
import { Key } from 'aws-sdk/clients/dynamodb';
import { depaginate, fluentAsync, Pager } from '@codibre/fluent-iterable';

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

Due to Readables also being async iterables, it can be very useful, if you have a scenario where you have many streams being dealt with and you need to combine all results, you can use _asyncHelper.merge_ or _asyncHelper.mergeCatching_ for it! The difference between them is that, with _mergeCatching_, you can continue to receive chunks from non concluded async iterables/readables, even if one of them throws an error, while _merge_, in the other hand, will throw an error at the first error received.

The solution used for this problems was 90% inspired in the [fraxken combine-async-iterators repository](https://github.com/fraxken/combine-async-iterators), which uses Promise.race to generate a new merged iterable that yields the items from all iterators in the resolving order.

## Adding custom operations

You can add custom methods to the FluentIterable and FluentAsyncIterable using the _extend_ and _extendAsync_ utilities. Here is a practical example of how to:

```TypeScript
declare module '@codibre/fluent-iterable' {
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

```ts
const result = fluent([1, 2, 3, 4, 5])
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

The way it is declared, this operation will print 2 items, but will validate 5. The original array is in order,
though, so, why we need validate all items?
We can avoid this if you assure for fluent-iterable that the filter predicate will treat elements in order:

```ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(assureOrder((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

This result will be the same, but this operation will only validate 3 items! The third item will be 3 and will make the iteration to stop!
You can also do the same operation with an alias for **assureOrder**:

```ts
const result = fluent([1, 2, 3, 4, 5])
  .filter(o((x) => x < 3))
  .toArray();

console.log(result); // prints [1, 2]
```

You can also assure the order for a whole iterable

```ts
const result = fluent(o([1, 2, 3, 4, 5])) // or o(fluent([1, 2, 3, 4, 5]))
  .assureOrder() // you can also use alias .o()
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

Or you can use the fluent syntax:

```ts
const result = fluent([1, 2, 3, 4, 5])
  .assureOrder() // you can also use alias .o()
  .filter((x) => x < 3)
  .toArray();

console.log(result); // prints [1, 2]
```

But these later ones have a behavior slight different from assuring a predicate order: the order will actually be assured for all consecutive operations where the original elements will not change. Practically speaking, for any consecutive **filter** and **takeWhile** operations, fluent will remember the assuring.

So, something like this:

```ts
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

```ts
const result = fluent([5, 4, 3, 2, 1])
  .od() // you can also use alias .assureOrderDescending()
  .filter((x) => x < 3)
  .max();

console.log(result); // prints 2
```

On the other hand, **min** works better with an ascending iterable so it takes more benefits more from an ascending assuring.

Finally, some fluent operations benefits equally from an ascending or descending assuring, and they are:

- count;
- distinct;
- filter;
- group;
- isDistinct;
- last;

So, if you find yourself in some situation where you can assure the order, asc or desc, do it and get the best performance you could with your fluent operations!

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
