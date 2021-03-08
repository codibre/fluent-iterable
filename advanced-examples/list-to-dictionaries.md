# Converting lists into a dictionary

Imagine you have a list of values in memory and you'll do several **find** operations in it. The find can have a cost of O(N) and, inside a loop with M elements, this can escalate to O(M \* N) and get pretty slow. To solve this, it's better to convert this list into a dictionary, like this:

```ts
const categories = [
  {
    id: 1,
    description: 'books',
  },
  {
    id: 2,
    description: 'movies',
  },
  {
    id: 2,
    description: 'magazines',
  },
];

const categoriesDictionary = fluent(categories).toObject('id');
```

**categoriesDictionary** will have keys equals to id the id value with values equals to the original categories item. It'll also be strongly typed, like this:

```ts
{
    [x: number]: {
        id: number;
        description: string;
    };
}
```

That's because fluent iterable have a strongly coded type inference.
Using the dictionary, each `categoriesDictionary[key]` used will have just an O(1) cost and, inside the M-loop, the total cost will be only O(M)!

If you're interested only in the value's description, in this case, you can do as following:

```ts
const categoriesDictionary = fluent(categories).toObject('id', 'description');
```

Of course, as almost all fluent operations, you don't need to rely only in property names, but in functions too:

```ts
const categoriesDictionary = fluent(categories).toObject(
  (x) => x.id,
  (x) => x.description,
);
```

[Go back](README.md)
