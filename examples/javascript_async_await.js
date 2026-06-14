/**
 * javascript async/await: a modern way to handle asynchronous operations in JavaScript, built on top of Promises. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.
 * The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected. This makes it easier to work with asynchronous code without having to use .then() and .catch() methods, leading to cleaner and more readable code.
 */

// Example of async/await in JavaScript

//1

async function greet() {
    return "Hello, World!";
}

greet().then(message => {
    console.log(message);
})

function greet1() {
    return Promise.resolve("Hello, World!");
}

greet1().then(message => {
    console.log(message);
})

/***
 * create a file called javascript_async_await_2026_06_14.js 
 * 1. Delayed Greeting

Create an asynchronous function that waits for 3 seconds before returning a greeting message. Use await to pause execution until the Promise resolves.

2. Fetch User Profile

Create a Promise that simulates fetching a user profile from a server after 2 seconds. Use async/await to retrieve and display the user's information.

3. Handle Failed Login

Create a Promise that randomly succeeds or fails during a login attempt. Use try/catch to handle any errors and display an appropriate message.

4. Sequential Data Requests

You need to retrieve a user's profile, then their orders, and finally their payment history. Each request depends on the previous one. Use async/await to execute the operations sequentially.

5. Product Availability Checker example

Create a Promise that checks whether a product is in stock. If the product is unavailable, reject the Promise. Use try/catch to handle the rejection gracefully.

6. Multiple API Requests example

Simulate three independent API requests that return different pieces of information. Use Promise.all() with await to retrieve all results and display them together.

7. Weather Service Error Handling example

Create an asynchronous function that fetches weather information. If the city does not exist, throw an error and handle it using try/catch.

8. Retry Failed Request example

Create an asynchronous function that attempts to fetch data. If the request fails, retry up to three times before throwing an error. Use try/catch to manage failures.

9. User Registration Workflow

Build an asynchronous workflow that:

Validates user input.
Creates the user account.
Sends a verification email.
Logs the registration activity.

Handle any failure using try/catch.

10. Download Multiple Files

Simulate downloading five files asynchronously. Use Promise.all() and await to wait for all downloads to complete. Handle any failed download with proper error handling.

11. Bank Transfer Simulation

Create an asynchronous bank transfer process that:

Verifies the sender's balance.
Deducts funds.
Credits the receiver.
Generates a receipt.

If any step fails, stop the process and handle the error using try/catch.

12. Async Task Manager

Create a task manager where:

Tasks are retrieved from a server asynchronously.
Each task is processed one at a time using await.
Errors in individual tasks are caught and logged.
Processing continues with the remaining tasks even if one task fails.
 */

/**
 * 5. Product Availability Checker example

Create a Promise that checks whether a product is in stock. If the product is unavailable, reject the Promise. Use try/catch to handle the rejection gracefully.
 */

async function checkProductAvailability(productId) {
    try {
        console.log(`Checking availability for product ID: ${productId}`);
        const isAvailable = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const availableProducts = [1, 2, 3]; // Example product IDs that are in stock
                if (availableProducts.includes(productId)) {
                    resolve(true);
                } else {
                    reject("Product is out of stock.");
                }
            }, 2000);
        });
        console.log(`Product ${productId} is available.`);
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}

checkProductAvailability(100);


/**
 * 6. Multiple API Requests example

Simulate three independent API requests that return different pieces of information. Use Promise.all() with await to retrieve all results and display them together.
 */

async function fetchMultipleAPIs() {
    try {
        const api1 = new Promise(resolve => setTimeout(() => resolve("API 1 data"), 1000));
        const api2 = new Promise(resolve => setTimeout(() => resolve("API 2 data"), 2000));
        const api3 = new Promise(resolve => setTimeout(() => resolve("API 3 data"), 3000));

        const results = await Promise.all([api1, api2, api3]);
        console.log("All API results:", results);
    }
    catch (error) {
        console.log("Error fetching APIs:", error);
    }
}

fetchMultipleAPIs();


/**
 * 7. Weather Service Error Handling example

Create an asynchronous function that fetches weather information. If the city does not exist, throw an error and handle it using try/catch.
 */

async function fetchWeather(city) {
    try {
        console.log(`Fetching weather for ${city}`);
        const weatherData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const availableCities = ["New York", "London", "Tokyo"];
                if (availableCities.includes(city)) {
                    resolve(`Weather data for ${city}`);
                } else {
                    reject("City not found.");
                }
            }, 2000);
        });
        console.log(weatherData);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

fetchWeather("Lagos");


/**
 * 8. Retry Failed Request example

Create an asynchronous function that attempts to fetch data. If the request fails, retry up to three times before throwing an error. Use try/catch to manage failures.
 */

async function fetchDataWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) { // 2
        try {
            console.log(`Attempt ${attempt} to fetch data from ${url}`);
            const data = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = Math.random() > 0.5; // Simulate random success/failure
                    if (success) {
                        resolve(`Data from ${url}`);
                    } else {
                        reject("Request failed.");
                    }
                }, 1000);
            });
            console.log(data);
            return; // Exit if successful
        } catch (error) {
            console.log(`Error: ${error}`);
            if (attempt === retries) {
                console.log("Max retries reached. Giving up.");
            }
        }
    }
}

fetchDataWithRetry("https://api.example.com/data");