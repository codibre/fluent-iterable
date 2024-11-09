# Nested flattening with back reference

You may want to flatten an iterable, but you need to keep track of parent node, which can make you do some painful transformations before the flatten one.
Let's se an example

```ts
const invoices = [
  {
    id: 1,
    provider: 'Amazon',
    shippingCost: 100,
    items: [
      {
        id: 1,
        name: 'some book',
        quantity: 1,
        value: 100,
        taxes: [
          {
            code: 'state tax',
            value: 10
          },
          {
            code: 'city tax',
            value: 5,
          },
          {
            code: 'country tax',
            value: 5,
          }
        ]
      }
    ]
  },
];
```

Let's say you want to flat the taxes values, but you want to keep track of which invoice id it belongs, and which item. One way to do it, is like that:

```ts
fluent(invoices)
  .flatMap((invoice) =>
    fluent(invoice.items).flatMap((item) =>
      fluent(item.taxes).map((x) => ({
        invoiceId: invoice.id,
        itemId: item.id,
        value: x.value
      }))
    )
  );
```

Those nested fluent operation can become very messy when your business rule starts to become more complicated. Luckily, fluent offers you a powerful operation called **flatJoin**. With flatJoin, you can automatically obtain the items of each nested level with just one operation, like that:

```ts
fluent(invoices)
  .flatJoin('items', 'taxes')
  .map(({ [tail]: invoice, items, taxes}) => ({
    invoiceId: invoice.id,
    itemId: items.id,
    value: taxes.value
  }));
```

Look that the root item of each operation is added to the result in the property named with the symbol **tail**, that you can import from fluent. You can also get the last items from symbol **head**, but in this case it'll be the same value as the property **taxes**.
With **flatJoin**, the value of each item of each flat-joined level is assigned to a property with the same name of the property where it was contained. The resulting iterable is strongly typed and will allow you to map what you want in the aftermatch with all the help Typescript can offer you! At the current fluent version so far (**1.21.5**), we added to flatJoin contract up to five levels of nested properties that you'll get fully typed results. From the level 6 and beyond you'll get the correspondent keys for each property you specify, but both the strings specified as paramters to the operation and the values of those properties will not be fully typed, as Typescript didn't offer a way to do it generally or at least we haven't figured it out yet.
Even so, all the complexity of each flattening operation you may need to do with nested operations will be solved almost seamslessly with this feature!

[Go back](README.md)
