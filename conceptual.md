# Part 1: Conceptual Questions

## 1. Explain the event loop in Node.js
Node.js uses a single-threaded event loop to handle asynchronous operations. Tasks are pushed onto the event queue and processed one by one in the phases:
- **Timers** (setTimeout, setInterval)
- **Pending callbacks**
- **Idle, prepare**
- **Poll** (I/O callbacks)
- **Check** (setImmediate)
- **Close callbacks**

This mechanism allows non-blocking I/O by offloading operations to the OS or thread pool and invoking callbacks when complete.

## 2. Compare callbacks, Promises, and async/await
- **Callbacks**: prone to "callback hell" but straightforward for single-level async.
- **Promises**: chainable via `.then()/.catch()`, avoid deep nesting.
- **async/await**: syntactic sugar over Promises, linear code style, use `try/catch` for errors.

## 3. How does Express middleware work?
Middleware are functions with signature `(req, res, next)`. They can:
1. **Modify** `req` or `res` objects.
2. **End** the request (e.g. `res.send` or `res.json`).
3. **Pass control** by calling `next()`.

They run in order added via `app.use()` or on specific routes.
