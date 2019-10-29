# fluent-iterable

Provides LINQ-like fluent api operations for iterables and async iterables. Detailed readme is on it's way, until that, some fun examples on how to use this library:

## Examples

### Playing with Fibonacci generator

```typescript
import fluent from 'fluent-iterable';

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
    .takeWhile(n => n < 100)
    .sum()
);

// How many fibonacci numbers are there between 1K and 1M?
console.log(
  fluent(naiveFibonacci())
    .skipWhile(n => n < 1000)
    .takeWhile(n => n < 1000000)
    .count()
);

// What are the 10th to 20th fibonacci numbers?
console.log(
  fluent(naiveFibonacci())
    .skip(9)
    .take(10)
    .toArray()
);

// What are the halves of the first 20 even fibonacci numbers?
console.log(
  fluent(naiveFibonacci())
    .filter(n => n % 2 === 0)
    .take(20)
    .map(n => n / 2)
    .toArray()
);

```

### Playing with object arrays

```typescript
import fluent from 'fluent-iterable';

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
for (const name of fluent(people).map(p => p.name)) {
  console.log(name);
}

// Log all the emails!
console.log(
  fluent(people)
    .flatten(p => p.emails)
    .toArray()
);

// Are there any persons without gender specified?
console.log(fluent(people).any(p => !p.gender));

// Are all the persons have at least one email?
console.log(fluent(people).all(p => p.emails.length > 0));

// Who is the last female?
console.log(fluent(people).last(p => p.gender === Gender.Female));

// Who is the last one in lexicographical order?
console.log(
  fluent(people)
    .sort((a, b) => a.name.localeCompare(b.name))
    .last()
);

// Log all persons grouped by gender!
console.log(
  fluent(people)
    .group(p => p.gender)
    .map(
      grp =>
        `${fluent(grp.values)
          .map(p => p.name)
          .toArray()
          .join(', ')} is/are ${grp.key}`
    )
    .reduce((current, next) => `${current}\n${next}`, '')
);
```

### Playing with remote

```typescript
import fetch from 'node-fetch';
import { fluentAsync } from 'fluent-iterable';

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
  .map(data => data.email)
  .take(10)
  .sort()
  .forEach(res => console.log(res))
  .then(() => console.log('done'));
```
