/**
 * what is a Promise: A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and making it easier to handle asynchronous operations.
 */



// create a promise 

// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//     let num = Math.random();
//     if (num > 0.5) {
//         resolve("done");
//     } else {
//         reject("error");
//     }
//     }, 5000)

// });

// console.log("Promise created, waiting for result...", promise);


// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.log("Promise completed.");
// })


// promise chaining example
const promiseExtract = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data extracted successfully");
    }, 1000)
});

const promiseTransform = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data transformed successfully");
    }, 3000)
});

const promiseLoad = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded successfully");
    }, 2000)
});


promiseExtract.then((result) => {
    console.log(result);
    return promiseTransform;
}).then((result) => {
    console.log(result);
    return promiseLoad;
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error("Error in ETL process:", error);
}).finally(() => {
    console.log("ETL process completed.");
});



/**
 * create a file called javascript_promise_task_2026_06_12.js and implement the following exercises
 * Exercise 1: User Profile Fetch

Create a Promise that simulates fetching a user profile from a server.

Requirements:

The operation should take 2 seconds.
Resolve with a user object containing name, email, and age.
Display the user's information when the Promise resolves.
Handle any errors using .catch().
Exercise 2: Online Payment Processing

Simulate an online payment system using a Promise.

Requirements:

If the payment amount is greater than 0, resolve with a success message.
If the amount is 0 or negative, reject with an error message.
Display the appropriate result to the user.
Exercise 3: Promise Chaining

Create a sequence of three asynchronous operations.

Requirements:

The first Promise returns a user's ID.
The second Promise uses the ID to retrieve the user's orders.
The third Promise uses the order information to retrieve shipping details.
Chain the Promises together and display the final shipping details.
Exercise 4: Product Inventory Check

Build a Promise that checks whether a product is available in stock.

Requirements:

Resolve if the quantity available is greater than zero.
Reject if the product is out of stock.
Display different messages for success and failure.
Simulate a delay before returning the result.
Exercise 5: Download Multiple Files

Use Promise.all() to simulate downloading multiple files.

Requirements:

Create three separate Promises representing three file downloads.
Each Promise should resolve after a different delay.
Wait for all downloads to complete before displaying a success message.
Handle any download failure appropriately.
Exercise 6: Race Between APIs

Use Promise.race() to determine which API responds first.

Requirements:

Create three Promises representing three different APIs.
Each API should respond after a different delay.
Determine which API returns first.
Display the result from the fastest API.
Handle possible errors.
 */
