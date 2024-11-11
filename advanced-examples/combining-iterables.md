# Combining iterables

Sometimes you have two distinct lists and need to combine them to generate a new one. With the combine operation you can achieve this.

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

const things = [
  {
    categoryId: 1,
    name: '1984',
  },
  {
    categoryId: 2,
    name: 'Jurassic Park',
  },
  {
    categoryId: 3,
    name: 'Gamers',
  },
];

const categoriesDictionary = fluent(categories)
  .combine(things, 'id', 'categoryId')
  .map(([category, thing]) => {
    return {
      name: thing.name,
      categoryDescription: category.description,
    };
  });
```

Fluent will try to run this combination the fastest way he can. If you provide two combining keys like in this example, this is achievable.
However, if you have a more complex combining rule and can't afford to provide the combining keys, then fluent will do an operation O(N x M), where N is the number of elements of the first iterable, and M is from the second:

```ts
const categories = [
  {
    parentId: 1,
    id: 1,
    description: 'books',
  },
  {
    parentId: 1,
    id: 2,
    description: 'movies',
  },
  {
    parentId: 2,
    id: 1,
    description: 'magazines',
  },
];

const things = [
  {
    parentId: 1,
    categoryId: 1,
    name: '1984',
  },
  {
    parentId: 1,
    categoryId: 2,
    name: 'Jurassic Park',
  },
  {
    parentId: 2,
    categoryId: 1,
    name: 'Gamers',
  },
];

const categoriesDictionary = fluent(categories)
  .combine(things)
  .filter(([category, thing]) => category.parentId === thing.parentId && category.id === thing.categoryId)
  .map(([category, thing]) => {
    return {
      name: thing.name,
      categoryDescription: category.description,
    };
  });
```

Of course, an O(N x M) cost is not desirable, so, you can minimize the cost of the iteration if you can combine both strategies:

```ts
const categoriesDictionary = fluent(categories)
  .combine(
    things,
    (x) => x.parentId,
    (x) => x.parentId,
  )
  .filter(([category, thing]) => category.id === thing.categoryId)
  .map(([category, thing]) => {
    return {
      name: thing.name,
      categoryDescription: category.description,
    };
  });
```

With this approach, you had combined the elements by parentId directly in the combine operation, which will make the algorithm take advantage of the faster combination strategy and, then, filtered the combinations by the id relation, which will exclude all the undesirable combinations, but in a subset instead of analyze all combinations possible!

[Go back](README.md)
