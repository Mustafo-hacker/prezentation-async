# Async/Await and New Promise in JavaScript

In this guide, we'll explore two important concepts in JavaScript: **async functions (async/await)** and **new Promise**. These tools make asynchronous code easier to write and understand.

## Table of Contents

1. [What is a Promise?](#what-is-a-promise)
2. [Creating a New Promise](#creating-a-new-promise)
3. [What is async/await?](#what-is-asyncawait)
4. [Examples of Usage](#examples-of-usage)
5. [Benefits of async/await](#benefits-of-asyncawait)
6. [Conclusion](#conclusion)

## What is a Promise?

A `Promise` is an object in JavaScript that represents the result of an asynchronous operation. It can be in one of three states:
- **Pending** — the operation is still in progress.
- **Resolved** — the operation completed successfully.
- **Rejected** — the operation failed.

### Example of using a Promise:

```javascript
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("An error occurred.");
    }
});

promise.then((message) => {
    console.log(message); 
}).catch((message) => {
    console.log(message);
});
