# Creating and validating unique list

Fluent iterable offers a neat feature called **distinct**, where you can get all the distinct values from your fluent flow

```ts
fluent(['a', 'b', 'b', 'c', 'd', 'a']).distinct(); //yields a, b, c, d
```

You can use a property name to point out the field you need to be distinct

```ts
fluent([
  { categoryId: 1, id: 1, name: 'a' },
  { categoryId: 1, id: 2, name: 'b' },
  { categoryId: 2, id: 3, name: 'c' },
]).distinct('categoryId'); /// yields item 0 and 2
```

You can also pass a function to define the distinct criteria

```ts
fluent([
  { categoryId: 1, id: 1, name: 'a' },
  { categoryId: 1, id: 2, name: 'b' },
  { categoryId: 2, id: 3, name: 'c' },
]).distinct((x) => x.id % 2); /// yields items 0 and 1
```

But, sometimes, you don't want to generate a distinct list, you want to ensure a list is distinct! In that case **isDistinct** suits, you! You can also use along with it the **execute** command, adding a hook to the process where you can fill an array with your values

```ts
const result: string[] = [];
const isDistinct = fluent(receivedIterable)
  .execute(result.push.bind(result))
  .isDistinct(criteria);
if (isDistinct) {
  throw new Error('Hold on, little buddy! You have repeated items!');
}

return result;
```

**isDistinct** is what we call as a **resolving operation**, ie, it'll iterate over your iterable instead of just chain a new operation, that's why you can't chain others operations after that. Nevertheless, maybe receivedIterable is not an array, and you need to transform it in one! Also, some iterables, like streams, doesn't allow you to iterate twice over it, that's why you need to keep the iterated items somewhere, and **execute** is perfect for it! You add an operation to the flow that doesn't actually changes the flow behavior (unless you change some item by reference, of course!). **execute** is ideal, for example, to hook counters, loggers, and collectors, like in the example above.

[Go back](README.md)
