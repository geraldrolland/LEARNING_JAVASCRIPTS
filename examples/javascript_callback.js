/**
 * what is a callback function in JavaScript? A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations, such as fetching data from an API or performing a time-consuming task, without blocking the main thread of execution.
 */
/**
 * 1. Custom Greeting Callback example

Create a function that accepts a user's name and a callback function. The main function should pass a greeting message to the callback, and the callback should display the message.

2. Calculator with Callback

Create a function that takes two numbers and a callback. The callback should determine what operation (addition, subtraction, multiplication, or division) is performed on the numbers.

3. Array Processor

Create a function that accepts an array of numbers and a callback. The callback should be applied to each element before displaying the results.

4. User Registration Simulation example

Create a function that simulates user registration. After registration is complete, a callback should be executed to send a welcome message.

5. Delayed Message

Create a function that waits for 3 seconds before executing a callback that displays a message.

6. Student Score Evaluation example

Create a function that receives a student's score and a callback. The callback should determine whether the student passed or failed.

7. Filtering Data example

Create a function that accepts an array and a callback. The callback should define the condition for selecting items from the array.

8. Order Processing System

Create a function that simulates placing an order. Once the order is successfully processed, execute a callback that generates a receipt.

9. String Formatter

Create a function that accepts a string and a callback. The callback should modify the string (e.g., convert to uppercase, lowercase, reverse it, etc.) before returning the result.

10. Sequential Task Execution

Create three separate tasks:

Download data
Clean data
Save data

Use callbacks so that each task starts only after the previous one has completed.
 */



// 1. Custom Greeting Callback example

const greetUser = (name, callback) => {
    const greetingMessage = `Hello, ${name}! Welcome to our website.`;
    callback(greetingMessage);
}

const displayGreeting = (message) => {
    console.log(message);
}

greetUser("Alice", displayGreeting);

// 4. User Registration Simulation example
// reference user_registration.html for more details


// 6. Student Score Evaluation example

const evaluateScore = (score, callback) => {
    if (score >= 60) {
        callback("Passed");
    } else {
        callback("Failed");
    }
}

const displayResult = (result) => {
    console.log(`The student has ${result}.`);
}

evaluateScore(75, displayResult);

// 7. Filtering Data example

const filterArray = (array, callback) => {
    const filteredArray = [];
    for (let item of array) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    console.log(filteredArray);
}

const isEven = (num) => num % 2 === 0;

filterArray([1, 2, 3, 4, 5, 6], isEven);

function calculator(num1, num2, callback) {
    return callback(num1, num2);
}

// Callback functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

// Examples
console.log(calculator(10, 5, add));       // 15
console.log(calculator(10, 5, subtract));  // 5
console.log(calculator(10, 5, multiply));  // 50
console.log(calculator(10, 5, divide));    // 2

function processArray(numbers, callback) {
    const result = numbers.map(callback);
    console.log(result);
}

// Callback functions
function double(num) {
    return num * 2;
}

function square(num) {
    return num ** 2;
}

function addTen(num) {
    return num + 10;
}

// Examples
processArray([1, 2, 3, 4, 5], double);
// Output: [2, 4, 6, 8, 10]

processArray([1, 2, 3, 4, 5], square);
// Output: [1, 4, 9, 16, 25]

processArray([1, 2, 3, 4, 5], addTen);
// Output: [11, 12, 13, 14, 15]

function delayedMessage(callback) {
    setTimeout(callback, 3000); // Waits 3 seconds
}

// Callback function
function showMessage() {
    console.log("Hello! This message appeared after 3 seconds.");
}

// Call the function
delayedMessage(showMessage);


