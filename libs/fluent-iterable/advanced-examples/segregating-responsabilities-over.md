# Segregating responsibilities over

It's a common practice to organize a project following an DDD, onion, or hexagonal architecture. All of them have their own differences, but one thing in common: there is an application and a domain layer.

The **handlers**, or application services, in the application layer must have the responsibility to orchestrate the domain services.

The domain services must have a single and decoupled responsibility, with no relation at all with infrastructure implementation and no dependencies with others domain services.

With fluent iterable, the capability of segregate those responsibilities is fortified, and you can fluently orchestrate your application flow in your handler/application service. Let's see how we can do this:

```ts
class MyHandler {
  constructor(
    private service1: Service1,
    private service2: Service2,
    private service3: Service3,
  ) {}

  execute(command: MyCommand) {
    return fluentAsync(
      this.service1.doSomeBusinessRule(command), // Here, doSomeBusinessRule returns an Iterable, AsyncIterable, Readable, FluentIterable or FluentAsyncIterable
    )
      .next((x) => this.service2.doYourPart(x)) // x, in this case, is a FluentAsyncIterable with the item type defined by doSomeBusinessRule
      .next((x) => this.service3.finishTheJob(x)); // now, x has it's item type defined by doYourPart
  }
}
```

It doesn't matter in this example what each domain service is doing. What matters is that MyHandler is working as a **fluent orchestrator**, combining all the domain services to achieve the final result in a fluent manner.
Also, doesn't matter what finishTheJob returns, it can be another FluentAsyncIterable or a resolved value, but, for the next method to be available, the result of the callback must be a **FluentIterable** or a **FluentAsyncIterable**

If you don't want to make your service to return this custom type and prefers to use the native types **Iterable** and **AsyncIterable**, it is possible to follow this example too!
You just need to do one more step in your handler:

```ts
class MyHandler {
  constructor(
    private service1: Service1,
    private service2: Service2,
    private service3: Service3,
  ) {}

  execute(command: MyCommand) {
    return fluentAsync(
      this.service1.doSomeBusinessRule(command), // No need to change this line!
    )
      .next((x) => fluentAsync(this.service2.doYourPart(x))) // doYourPart here may return an Iterable or an AsyncIterable, but fluentAsync make next available
      .next((x) => this.service3.finishTheJob(x)); // Assuming finishTheJob is a resolving operation, we didn't wrapped his result
  }
}
```

[Go back](README.md)
