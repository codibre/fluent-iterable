---
name: fluent-iterable
description: |
  Master @codibre/fluent-iterable for elegant, functional data transformations. Use this skill whenever working with iterables, async iterables, streams, arrays, or collections in TypeScript/NestJS code. Perfect for: filtering/mapping/reducing large datasets, streaming database results, chunking data for batch operations, parallel async processing, complex transformations with flatMap, deduplication with toSet(), lookup maps with toMap(). Know when to use fluent() vs fluentAsync(), and avoid common pitfalls like premature materialization or wrong iterable type.
compatibility: |
  - Package: @codibre/fluent-iterable
  - Requires TypeScript 4.0+ with async/await support
  - Works with async generators (function*)
---

# fluent-iterable Guide: Functional Data Transformations

A comprehensive guide to mastering @codibre/fluent-iterable for elegant, chainable data transformations in TypeScript/NestJS projects.

## Quick Decision Tree

```
Do you have data to transform?
├─ Is it an AsyncIterable (stream, generator)? 
│  ├─ YES → Use fluentAsync()
│  └─ NO → Go to next
├─ Is it a regular array/Map/iterable?
│  ├─ YES → Use fluent()
│  └─ NO → Check if it's an async generator
└─ Will you chain async operations?
   ├─ YES → Use .forEachAsync() or .flatMapAsync()
   └─ NO → Use normal methods (.forEach(), .flatMap())
```

---

## The Two Main Functions

### fluent() - For Synchronous Iterables

Use `fluent()` with arrays, Map entries, Sets, or any sync iterable.

```typescript
import { fluent } from '@codibre/fluent-iterable';

// Simple example: map + filter
const numbers = [1, 2, 3, 4, 5];
const result = fluent(numbers)
  .filter(x => x > 2)
  .map(x => x * 2)
  .toArray(); // [6, 8, 10]
```

**Key characteristics:**
- ✅ Synchronous execution - returns immediately
- ✅ No awaits needed
- ✅ Perfect for data transformation pipelines
- ❌ Cannot handle AsyncIterables
- ❌ Cannot use `.forEachAsync()` or `.flatMapAsync()`

### fluentAsync() - For Asynchronous Iterables

Use `fluentAsync()` with streams, async generators, or database cursors.

```typescript
import { fluentAsync } from '@codibre/fluent-iterable';

// Stream example: filter + map + toSet
const activeUsers = await fluentAsync(
  this.userRepository.streamUsers() // AsyncIterable<User>
)
  .filter(user => user.isActive)
  .map(user => user.id)
  .toSet(); // Set<string>
```

**Key characteristics:**
- ✅ Handles AsyncIterables (streams, generators)
- ✅ Returns a Promise you must await
- ✅ Memory efficient - doesn't load all data at once
- ✅ Can use async-specific methods
- ❌ Slightly slower than sync (but necessary for I/O)

---

## Common Patterns

### Pattern 1: Stream Processing (Most Efficient for Large Data)

**Use case:** Process 5000+ records from database without loading all in memory

```typescript
// ✅ CORRECT: Stream filtering via async iterable
const successfulUserIds = await fluentAsync(
  this.messageRepository.findByAnnouncementIdStream(announcementId)
)
  .filter(msg => msg.sendError === null) // Only successful messages
  .map(msg => msg.userId)
  .toSet(); // Deduplicated set
```

**Why this works:**
- Uses async generator that yields results one at a time
- Memory usage is O(1) relative to dataset size
- Perfect for pagination without explicit loops

---

### Pattern 2: Complex Transformations with Maps

**Use case:** Invert a map (userId → tokens) to (token → userId)

```typescript
// ✅ CORRECT: Map transformation
const tokenToUserId = fluent(userTokens.entries()) // Map.entries() is iterable
  .flatMap(([userId, tokens]) =>
    tokens.map(token => [token, userId] as const) // Create [token, userId] pairs
  )
  .reduce(
    (acc, [token, userId]) => {
      acc.set(token, userId);
      return acc;
    },
    new Map<string, string>()
  );
```

**Why this works:**
- `entries()` converts Map to iterable of [key, value] pairs
- `flatMap()` flattens nested arrays
- `reduce()` with initial accumulator (new Map)
- All synchronous - no await needed

---

### Pattern 3: Chunking for Batch Operations

**Use case:** Process 5000 items in chunks of 100 for API limits

```typescript
// ✅ CORRECT: Chunking
const chunks = fluent(largeList)
  .partition(100) // Split into chunks of 100
  .map(chunk => ({
    items: chunk.toArray(),
    count: chunk.count()
  }))
  .toArray();

// Process chunks
for (const {items, count} of chunks) {
  await firebase.sendBatch(items); // Each batch ≤ 100
}
```

**Why this works:**
- `partition()` returns iterable of iterables
- Each chunk maintains fluent interface
- Only materialize to array when needed

---

### Pattern 4: Parallel Async Operations

**Use case:** Save 1000 messages to DB in parallel, not sequentially

```typescript
// ✅ CORRECT: forEachAsync for parallel operations
await fluent(payload.recipients)
  .filter(recipient => !alreadyProcessed.has(recipient.userId))
  .forEachAsync(async (recipient) => {
    await this.messageRepository.saveMessage({
      recipientId: recipient.userId,
      message: this.renderTemplate(recipient),
      // ...
    });
  });
```

**Why this works:**
- `forEachAsync()` runs all operations in parallel
- Await only completes when all finish
- No need for Promise.all() boilerplate
- Handles backpressure automatically

---

### Pattern 5: Flatten and Transform with Async

**Use case:** Depaginate multiple API calls in parallel

```typescript
// ✅ CORRECT: flatMapAsync for parallel API calls
const allResellers = await fluent(chunks)
  .flatMapAsync(chunk =>
    this.api.getResellers({
      codes: chunk.codes,
      limit: 100
    })
  )
  .toArray();
```

**Why this works:**
- Each chunk triggers an API call in parallel
- Results are automatically flattened into single array
- Equivalent to Promise.all() but cleaner

---

## Common Methods Reference

### Transformation Methods

| Method | Sync | Async | Use Case |
|--------|------|-------|----------|
| `.map(fn)` | ✅ | ✅ | Transform each element |
| `.map(fieldName)` | ✅ | ✅ | **Extract field: `map('email')` = `map(x => x.email)`** |
| `.filter(predicate)` | ✅ | ✅ | Keep matching elements |
| `.filter()` | ✅ | ✅ | **Remove falsy (null/undefined/false/0/'')**  |
| `.filter(fieldName)` | ✅ | ✅ | **Filter + type guard: `filter('email')` removes undefined** |
| `.flatMap(fn)` | ✅ | ❌ | Map + flatten (sync) |
| `.flatten(fn)` | ✅ | ❌ | Flatten nested iterables |
| `.flatMapAsync(fn)` | ❌ | ✅ | Map + flatten (async) |
| `.partition(size)` | ✅ | ✅ | Split into chunks (returns iterable of iterables) |
| `.group(keyFn)` | ✅ | ✅ | Group elements by key |
| `.group(fieldName)` | ✅ | ✅ | **Group by field: `group('category')` = `group(x => x.category)`** |
| `.distinct()` | ✅ | ✅ | Remove duplicates (like `toSet()` but lazy) |
| `.sort(compareFn?)` | ✅ | ✅ | Sort elements |
| `.reverse()` | ✅ | ✅ | Reverse order |
| `.first()` / `.firstAsync()` | ✅ | ✅ | Get first element (stops iteration) |
| `.last()` / `.lastAsync()` | ✅ | ✅ | Get last element (forces full iteration) |
| `.min()` / `.max()` | ✅ | ✅ | Get minimum/maximum element |
| `.sum()` | ✅ | ✅ | Sum all elements |
| `.skip(n)` | ✅ | ✅ | Skip first n elements |
| `.take(n)` | ✅ | ✅ | Take first n elements |
| `.skipWhile(predicate)` | ✅ | ✅ | Skip while condition true |
| `.takeWhile(predicate)` | ✅ | ✅ | Take while condition true |

### Iteration & Execution Methods

| Method | Sync | Async | Effect |
|--------|------|-------|--------|
| `.forEach(fn)` | ✅ | ❌ | Execute for each, sync |
| `.forEachAsync(fn)` | ❌ | ✅ | Execute in parallel, await (runs all concurrently) |
| `.execute(fn)` | ✅ | ✅ | Side effect (logging) without modifying iterable |
| `.waitAll(promiseFn)` | ❌ | ✅ | Convert to promises and await all (parallel) |
| `.combine(other, keyFn1, keyFn2)` | ✅ | ✅ | Inner join two iterables |

### Materialization Methods

| Method | Returns | Use | Memory |
|--------|---------|-----|--------|
| `.toArray()` | `Array<T>` | Final result to array | O(n) |
| `.toSet()` | `Set<T>` | Deduplicate + set | O(n) |
| `.toMap(keyFn)` | `Map<K, T>` | Create lookup index | O(n) |
| `.toMap(keyFn, valueFn)` | `Map<K, V>` | Transform keys and values | O(n) |
| `.count()` | `number` | Get length (no array allocation) | O(1) or O(n) depending on source |
| `.any(predicate?)` | `boolean` | Check if any match (short-circuits) | O(1)-O(n) |
| `.all(predicate?)` | `boolean` | Check if all match (short-circuits) | O(1)-O(n) |
| `.join(separator)` | `string` | Join to string | O(n) |

---

## String Selectors & Smart Shortcuts

### ✨ filter() Without Parameters - Clean Null/Falsy Filtering

**Direct usage - no callback needed:**

```typescript
// ✅ Remove all null, undefined, false, 0, ''
const activeIds = await fluentAsync(users)
  .filter()  // ← No parameter needed!
  .map(user => user.id)
  .toArray();

// Equivalent to:
const activeIds = await fluentAsync(users)
  .filter(user => !!user)  // More verbose
  .map(user => user.id)
  .toArray();
```

**Perfect for streams that might have nulls:**
```typescript
// Stream might yield null on errors
const validRecords = await fluentAsync(asyncGenerator())
  .filter()  // Automatically removes falsy values
  .map(record => record.process());
```

### ✨ String Selectors - Field Names as Shortcuts

**Use field names instead of callbacks - cleaner and with auto type guards:**

```typescript
// ❌ VERBOSE - write callbacks manually
fluent(users)
  .map(user => user.email)
  .filter(email => !!email)

// ✅ CLEAN - use string field names
fluent(users)
  .map('email')           // ← Equivalent to map(x => x.email)
  .filter('email')        // ← Filters falsy + type guards!

// Type guard example:
interface User {
  id: number;
  email?: string;  // Optional!
  name: string;
}

const usersWithEmail = fluent(users)
  .filter('email')  // ← TypeScript now knows email is NOT undefined
  .map('email');    // ← email is string, not string | undefined

// email is now narrowed to string type!
```

**String selector patterns:**

```typescript
// ✅ map() with string selector
fluent(products)
  .map('name')  // Extract only name field
  .toArray()    // ['Product A', 'Product B', ...]

// ✅ filter() with string selector (includes type narrowing)
fluent(users)
  .filter('email')           // Only users WITH email, email now typed as non-null
  .filter('isActive')        // Only active users (truthy check)
  .forEach(user => {
    // user.email is now string (not string | undefined)
    console.log(user.email.toLowerCase());  // ✅ Safe, no TS error
  });

// ✅ Chaining field filters
fluent(orders)
  .filter('customerId')      // Remove orders with no customer
  .filter('total')           // Remove orders with total = 0
  .map('total')
  .sum();                     // Sum only valid orders
```

**Why string selectors are powerful:**

1. **Less boilerplate**: `map('field')` vs `map(x => x.field)`
2. **Auto type guards**: `filter('field')` narrows type (removes `| undefined`)
3. **Cleaner chains**: Especially useful in long pipelines
4. **Readable intent**: `filter('email')` is clearer than `filter(x => x.email)`

```typescript
// Real-world: User validation pipeline
const validatedUsers = await fluentAsync(streamUsers())
  .filter('id')          // Must have ID
  .filter('email')       // Must have email (now non-null)
  .filter('isVerified')  // Must be verified
  .map('email')          // Extract emails
  .distinct()
  .toArray();

// email is guaranteed to be string (not undefined)
// Result: string[]
```

### ✨ TypeScript Type Guards in Filter Callbacks

**Declare type guards with `is` keyword - fluent-iterable propagates narrowed types!**

Type guards are TypeScript's way of narrowing types. When you use `is` in a filter callback, fluent-iterable understands and propagates the narrowed type through the entire chain.

```typescript
// Define custom type guard
function isUser(item: User | Admin | null): item is User {
  return item !== null && 'email' in item && !('permissions' in item);
}

// Use it with fluent - type is automatically narrowed!
const emails = fluent(users)
  .filter(isUser)  // ← Type guard!
  .map(user => user.email)  // user is now narrowed to User, not User | Admin | null
  .toArray();

// Equivalent to:
const emails = fluent(users)
  .filter((item): item is User => 
    item !== null && 'email' in item && !('permissions' in item)
  )
  .map(user => user.email)  // ✅ user is User here
  .toArray();
```

**Real-world examples with type guards:**

```typescript
// Discriminated unions
type ApiResponse = { status: 'success'; data: string } | { status: 'error'; error: Error };

function isSuccess(response: ApiResponse): response is { status: 'success'; data: string } {
  return response.status === 'success';
}

// Use with fluent
const successData = fluent(responses)
  .filter(isSuccess)           // ← Type guard narrows to success type
  .map(r => r.data)            // ✅ data is string (not error)
  .toArray();

// Optional fields -> required
interface Product {
  id: number;
  name: string;
  description?: string;
  price?: number;
}

function hasPrice(product: Product): product is Product & Required<Pick<Product, 'price'>> {
  return product.price !== undefined && product.price > 0;
}

const priced = fluent(products)
  .filter(hasPrice)             // ← Type guard
  .map(p => p.price)            // ✅ price is number (not number | undefined)
  .sum();

// Enum narrowing
enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Deleted = 'deleted',
}

function isActive(user: { status: Status }): user is { status: Status.Active } {
  return user.status === Status.Active;
}

const activeUsers = fluent(allUsers)
  .filter(isActive)             // ← Type guard to specific enum value
  .forEach(user => {
    // user.status is now Status.Active (not any Status)
  });
```

**Inline Type Guards - Declare directly in lambda for simpler checks:**

No need for separate functions when the guard is simple. Use inline syntax with `(param): param is Type =>`:

```typescript
// ✅ Simple inline type guard - no separate function needed
const emails = fluent(items)
  .filter((item): item is { email: string } => 
    typeof item === 'object' && item !== null && 'email' in item && typeof item.email === 'string'
  )
  .map(item => item.email)  // ✅ email is string
  .toArray();

// Discriminated union inline
const successData = fluent(responses)
  .filter((r): r is { status: 'success'; data: string } => r.status === 'success')
  .map(r => r.data)  // ✅ data is string
  .toArray();

// Optional to required inline
const productsWithPrice = fluent(products)
  .filter((p): p is typeof p & { price: number } => p.price !== undefined && p.price > 0)
  .map(p => p.price)  // ✅ price is number
  .sum();

// Check for specific discriminator value inline
type Action = { type: 'update'; id: number; value: string } | { type: 'delete'; id: number };

const updates = fluent(actions)
  .filter((action): action is { type: 'update'; id: number; value: string } => 
    action.type === 'update'
  )
  .map(action => action.value)  // ✅ value exists only on update
  .toArray();
```

**When to use inline vs separate function:**

```typescript
// ✅ Use inline for simple, one-off checks
fluent(items).filter((x): x is User => !!x.id && !!x.email)

// ✅ Use separate function for complex logic or reuse
function isValidUser(item: any): item is User {
  return (
    item !== null &&
    typeof item === 'object' &&
    'id' in item &&
    'email' in item &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.email) &&
    item.id > 0
  );
}

fluent(items).filter(isValidUser)
```

**Why inline type guards are powerful:**

1. **No boilerplate**: One-liners for simple checks
2. **Self-documenting**: Guard logic visible where it's used
3. **Still type-safe**: Full compiler support same as separate functions
4. **Scoped**: Guard only used where needed

Why type guards are powerful:**

1. **Type safety**: Compiler catches errors after narrowing
2. **No runtime checks needed**: Guard is purely TypeScript
3. **Reusable**: Define once, use everywhere
4. **Propagates through chain**: Every method after knows the narrowed type
5. **IDE autocomplete**: IntelliSense shows only available properties

```typescript
// Without type guard - broader type
fluent(items)
  .filter(item => item.type === 'user')
  .map(item => item.name)  // ❌ TypeScript doesn't know if name exists
  .forEach(name => console.log(name)); // ⚠️ Potential error

// With type guard - narrowed type
function isUser(item: any): item is { name: string; type: 'user' } {
  return item.type === 'user' && typeof item.name === 'string';
}

fluent(items)
  .filter(isUser)
  .map(item => item.name)  // ✅ TypeScript knows name exists
  .forEach(name => console.log(name)); // ✅ Safe!
```

---

## Critical Rules

### ✅ DO:

1. **Use `fluent()` for arrays and sync iterables**
   ```typescript
   fluent([1, 2, 3]).map(...).filter(...)
   ```

2. **Use `fluentAsync()` for AsyncIterables**
   ```typescript
   fluentAsync(asyncGenerator()).filter(...).toSet()
   ```

3. **Always `await` fluentAsync results**
   ```typescript
   const result = await fluentAsync(...).toArray();
   ```

4. **Use `.forEachAsync()` for async side effects**
   ```typescript
   await fluent(items).forEachAsync(item => saveAsync(item));
   ```

5. **Materialize only at the end**
   ```typescript
   // ✅ CORRECT
   fluent(x).map(...).filter(...).toArray()
   
   // ❌ WRONG (materializes too early)
   fluent(x).toArray().map(...).filter(...)
   ```

6. **Use string selectors for cleaner code**
   ```typescript
   // ✅ CLEAN - automatic type narrowing
   fluent(users)
     .filter('email')        // Removes falsy + narrows type
     .map('email')           // Extract field
   
   // ❌ VERBOSE - manual callback
   fluent(users)
     .filter(user => !!user.email)
     .map(user => user.email)
   ```

7. **Use filter() without params for falsy removal**
   ```typescript
   // ✅ CLEAN - removes null, undefined, false, 0, ''
   await fluentAsync(stream).filter().toArray()
   
   // ❌ VERBOSE
   await fluentAsync(stream).filter(x => !!x).toArray()
   ```

### ❌ DON'T:

1. **Don't use fluent() with AsyncIterables**
   ```typescript
   // ❌ WRONG - will only iterate first element
   fluent(asyncGenerator())
   
   // ✅ CORRECT
   fluentAsync(asyncGenerator())
   ```

2. **Don't forget await on async operations**
   ```typescript
   // ❌ WRONG
   const result = fluentAsync(...).toArray(); // Missing await!
   
   // ✅ CORRECT
   const result = await fluentAsync(...).toArray();
   ```

3. **Don't use async methods on fluent()**
   ```typescript
   // ❌ WRONG - forEachAsync doesn't exist on fluent()
   fluent(array).forEachAsync(...)
   
   // ✅ CORRECT
   await fluentAsync(array).forEachAsync(...)
   ```

4. **Don't chain multiple .toArray() calls**
   ```typescript
   // ❌ WRONG - .toArray() materializes, can't chain
   fluent(x).toArray().map(...).filter(...)
   
   // ✅ CORRECT - chain first, materialize last
   fluent(x).map(...).filter(...).toArray()
   ```

5. **Don't use .forEach() when you need awaits**
   ```typescript
   // ❌ WRONG - doesn't await properly
   fluent(items).forEach(item => saveAsync(item));
   
   // ✅ CORRECT
   await fluent(items).forEachAsync(item => saveAsync(item));
   ```

---

## Real-World Examples

### Example 1: Process Stream, Skip Already Done, Batch Send

```typescript
// Get users already successfully reached
const successfulUserIds = await fluentAsync(
  this.messageRepository.findByAnnouncementIdStream(announcementId)
)
  .filter(msg => msg.sendError === null)
  .map(msg => msg.receiverId)
  .toSet();

// Get users still needing processing
const usersToProcess = fluent(payload.receiverIds)
  .filter(id => !successfulUserIds.has(id))
  .toArray();

// Batch in groups of 100
const batches = fluent(userTokens.entries())
  .flatMap(([userId, tokens]) =>
    tokens.map(token => ({ userId, token }))
  )
  .partition(100)
  .map(batch => batch.toArray())
  .toArray();

// Send all in parallel
await fluent(batches)
  .forEachAsync(batch =>
    this.firebase.sendBatch(batch.map(x => x.token))
  );
```

### Example 2: Depaginate Multiple API Calls

```typescript
const allData = await fluent(sellers)
  .partition(500) // Limit codes per request
  .map(chunk => ({
    ...request,
    codes: chunk.toArray()
  }))
  .toArray()
  .flatMapAsync(request => // Note: async chain after toArray()
    this.api.getData(request)
  );
```

### Example 3: Group and Count

```typescript
const stats = fluent(users)
  .reduce((acc, user) => {
    const key = user.country;
    acc.set(key, (acc.get(key) ?? 0) + 1);
    return acc;
  }, new Map<string, number>());

// stats = Map { 'US' => 45, 'BR' => 32, 'MX' => 18 }
```

---

## Advanced Patterns

### Pattern A: Resilient Batch Processing with Error Handling

**Use case:** Process 5000+ items in batches while handling failures per batch (not failing entire operation)

```typescript
// ✅ CORRECT: Try-catch inside partition loop
const results = [];
for (const batch of fluent(items).partition(500)) {
  try {
    const tokenBatch = batch.toArray();
    const result = await sendBatchToApi(tokenBatch);
    results.push(result);
  } catch (error) {
    // Log error for THIS batch, continue with next batch
    console.error(`Batch failed: ${error.message}`);
    // Can collect failed items if needed
  }
}

// ❌ WRONG: Try-catch wrapping entire loop aborts after first error
try {
  for (const batch of fluent(items).partition(500)) {
    await sendBatchToApi(batch.toArray());
  }
} catch (error) {
  // All subsequent batches never execute!
}
```

**Why this works:**
- Failures are isolated per batch
- Successful batches still complete
- Perfect for distributed systems where partial success matters
- Accumulates results across all batches

### Pattern B: O(1) Lookup Instead of O(n²)

**Use case:** Cross-reference 1000 items with 5000 recipients

```typescript
// ❌ WRONG: O(n²) - calls .find() inside loop for each item
const userMap = new Map();
for (const recipient of recipients) {
  const user = items.find(i => i.id === recipient.userId); // 5000 * 1000 iterations!
  userMap.set(recipient.userId, user);
}

// ✅ CORRECT: O(n) - create lookup map first
const userLookup = fluent(items).toMap(i => i.id);
for (const recipient of recipients) {
  const user = userLookup.get(recipient.userId); // O(1) lookup
}

// Or more elegantly:
const userLookup = fluent(items).toMap(i => i.id, i => i); // both key and value transformation
```

**Why this works:**
- Pre-computed Map provides O(1) lookups
- Reduces from n*m to n+m complexity
- Scales well with large datasets
- One-time cost of building map vs repeated .find() calls

### Pattern C: Stream Processing to Stay Memory-Efficient

**Use case:** Process millions of database records without loading all into memory

```typescript
// ✅ CORRECT: Streaming + filtering before materialization
const successCount = await fluentAsync(
  this.database.streamLargeDataset() // AsyncIterable, yields one at a time
)
  .filter(record => record.status === 'active')
  .map(record => record.id)
  .count(); // Returns count without creating array

// Memory usage: O(1) relative to dataset size

// ❌ WRONG: Materializes entire dataset first
const allRecords = await fluentAsync(this.database.streamLargeDataset())
  .toArray(); // Loads entire dataset into memory!
const successCount = fluent(allRecords)
  .filter(r => r.status === 'active')
  .count();
```

**Why this works:**
- Only holds current element in memory
- Filter/map applied lazily (per element)
- Perfect for pagination and large streams
- Async generators yield one item at a time

### Pattern D: Inner Join Between Two Iterables

**Use case:** Match orders with customers by ID

```typescript
const orders = [
  { id: 1, customerId: 10, amount: 100 },
  { id: 2, customerId: 20, amount: 200 },
];

const customers = [
  { id: 10, name: 'Alice' },
  { id: 20, name: 'Bob' },
];

const results = fluent(orders)
  .combine(
    customers,
    (order) => order.customerId,      // key from first
    (customer) => customer.id          // key from second
  )
  .map(([order, customer]) => ({
    orderId: order.id,
    customerName: customer.name,
    amount: order.amount
  }))
  .toArray();

// Results: [
//   { orderId: 1, customerName: 'Alice', amount: 100 },
//   { orderId: 2, customerName: 'Bob', amount: 200 }
// ]
```

**Why this works:**
- Natural SQL-like join operation
- Avoids nested loops
- More readable than manual matching logic

### Pattern E: Depagination with AsyncIterable

**Use case:** Fetch paginated API data until done

```typescript
async function* depaginate<T>(
  pageSize: number,
  fetcher: (page: number) => Promise<T[]>
): AsyncIterable<T> {
  let page = 1;
  while (true) {
    const items = await fetcher(page);
    if (items.length === 0) break;
    yield* items;
    page++;
  }
}

// Use it:
const allUsers = await fluentAsync(depaginate(100, page => 
  fetchUserPage(page)
))
  .filter(user => user.active)
  .map(user => user.id)
  .toArray();
```

**Why this works:**
- Lazy pagination (only fetches needed pages)
- No need to know total count upfront
- Stops automatically when empty page received
- Memory efficient (no buffering all pages)

### Pattern F: Deduplication with Short-Circuit

**Use case:** Get unique values while being fast

```typescript
// ✅ Better than toSet() when you need early exit
const firstUniqueActive = fluent(items)
  .distinct()              // Remove duplicates lazily
  .filter(x => x.active)   // Then filter
  .first();                // Stop at first match

// ✅ If you need the full deduplicated set later
const uniqueIds = fluent(items)
  .map(item => item.id)
  .toSet(); // Faster for materializing to Set
```

**Why this works:**
- `.distinct()` is lazy (doesn't create set upfront)
- `.toSet()` faster when you need complete set
- Choose based on whether you need all values or just some

---

## Troubleshooting

### Problem: "Cannot find property forEachAsync"
**Cause:** Using `fluent()` instead of `fluentAsync()`
```typescript
// ❌ WRONG
fluent(data).forEachAsync(...)

// ✅ CORRECT
await fluentAsync(data).forEachAsync(...)
```

### Problem: "Awaiting non-Promise"
**Cause:** Trying to await a sync fluent chain
```typescript
// ❌ WRONG
const result = await fluent([1,2,3]).map(...); // Not async!

// ✅ CORRECT
const result = fluent([1,2,3]).map(...); // Don't await
```

### Problem: Memory keeps growing with streams
**Cause:** Calling `.toArray()` on entire stream before filtering
```typescript
// ❌ WRONG - loads all in memory first
fluentAsync(stream).toArray().filter(...)

// ✅ CORRECT - filter before materializing
fluentAsync(stream).filter(...).toArray()
```

### Problem: Operations run sequentially instead of parallel
**Cause:** Using `.forEach()` with async instead of `.forEachAsync()`
```typescript
// ❌ WRONG - sequential, doesn't await
fluent(items).forEach(item => saveAsync(item));

// ✅ CORRECT - parallel with proper await
await fluent(items).forEachAsync(item => saveAsync(item));
```

---

## Performance Tips & Benchmarks

**fluent-iterable Performance (from official benchmarks):**
- ~494 ops/sec on large dataset iterations (Node 22)
- ~50% faster than native `for...of` loops
- Faster than native iterator helpers (V8 engine)
- Similar to hand-written optimized loops

**When to optimize:**
- If processing 100k+ items frequently
- If chain has 5+ operations
- If you're on hot path (called thousands of times/sec)

**General optimization order:**
1. Filter early (reduce data size)
2. Use streaming when possible
3. Avoid materialize-then-filter pattern
4. Use `.count()` instead of `.toArray().length`
5. Use short-circuit methods (`.first()`, `.any()`) instead of full iteration

---

## Performance Tips

1. **Filter early** - Remove unwanted items before other operations
   ```typescript
   fluent(million_items)
     .filter(x => x.active)      // First: reduce to 50k
     .map(x => x.value)          // Then: transform remaining
     .toArray()
   ```

2. **Use partition() for large batches**
   ```typescript
   fluent(items)
     .partition(100)             // Chunk before processing
     .map(chunk => processChunk(chunk))
   ```

3. **Avoid nested loops - use flatMap instead**
   ```typescript
   // ❌ WRONG - nested loops
   fluent(items).forEach(item => {
     fluent(item.children).forEach(child => ...)
   })

   // ✅ CORRECT - flatten
   fluent(items)
     .flatMap(item => item.children)
     .forEach(child => ...)
   ```

4. **For AsyncIterables, filter before reduce**
   ```typescript
   await fluentAsync(stream)
     .filter(x => important(x))   // First: filter
     .reduce(aggregate, initial)  // Then: aggregate
   ```

---

## When NOT to Use fluent-iterable

✅ **Use fluent-iterable when:**
- Processing streams, async generators, or database cursors
- Building complex transformation chains (3+ operations)
- Working with large datasets (1000+ items)
- Need memory efficiency (streaming)
- Doing batch processing or pagination
- Performance matters (benchmarks show ~50% faster than for loops)

❌ **Avoid fluent-iterable when:**
- Processing small arrays (< 10 items) - overhead not worth it
- Need destructuring/spreading frequently - `.toArray()` at start is simpler
- Only doing `.map()` or `.filter()` once - just use native array methods
- Building a single value from scratch - use `.reduce()` with plain JavaScript

```typescript
// ❌ OVERKILL - tiny array, simple operation
fluent([1, 2, 3]).map(x => x * 2).toArray()

// ✅ JUST USE NATIVE
[1, 2, 3].map(x => x * 2)

// ✅ GOOD USE CASE - complex chain, async
await fluentAsync(largeStream)
  .filter(x => x.active)
  .map(x => x.id)
  .group(x => x.category)
  .toMap(g => g.key, g => g.values.count())
```

---

## Comparison to Alternatives

### vs RxJS Observables

| Aspect | fluent-iterable | RxJS |
|--------|-----------------|------|
| **Purpose** | Sequential iteration | Event streaming |
| **Execution** | Synchronous chain | Async/event-driven |
| **Memory** | O(1) with streams | Can accumulate events |
| **Learning curve** | Simple array-like API | Complex (Subjects, Operators) |
| **Best for** | Batch processing, data transforms | Real-time events, UI reactivity |

→ Use **fluent-iterable** for data pipelines, **RxJS** for event handling

### vs Native Array Methods

| Aspect | fluent-iterable | `.map().filter()` |
|--------|-----------------|-------------------|
| **Iterations** | 1 pass | Multiple passes per operation |
| **Memory** | Minimal (lazy) | Array created per operation |
| **Performance** | ~50% faster on 1k+ items | Faster on tiny arrays |
| **Async support** | ✅ Built-in | ❌ Need Promise.all() |
| **Streaming** | ✅ AsyncIterable | ❌ Must load all first |

→ Use **fluent-iterable** for large data, **native methods** for small arrays

---

## See Also

- [Codibre GitHub](https://github.com/codibre/fluent-iterable)
- [npm Package](https://www.npmjs.com/package/@codibre/fluent-iterable)
- TypeScript Handbook: [Iterables and Iterators](https://www.typescriptlang.org/docs/handbook/symbols.html#iterables)
