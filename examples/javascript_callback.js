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

// 2. Calculator with Callback
function calculator(num1, num2, callback) {
    return callback(num1, num2);
}


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
// correct

// 3. Array Processor
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

// 5. Delayed Message
function delayedMessage(callback) {
    setTimeout(callback, 3000); // Waits 3 seconds
}

// correct

// Callback function
function showMessage() {
    console.log("Hello! This message appeared after 3 seconds.");
}

// Call the function
delayedMessage(showMessage);

// 8. Order Processing System

function processOrder(orders, callback) {
    for (let order of orders) {
    console.log(`Processing order of ${order.name}...`);
    setTimeout(() => {
        const receipt = `Order for ${order.name} has been processed. Total: $${order.price}`;
        callback(receipt);
    }, 2000); // Simulate a delay of 2 seconds
    }
}

const generateReceipt = (receipt) => {
    console.log(receipt);
}

processOrder([{ id: 1, name: "Laptop", price: 999 }, { id: 2, name: "Phone", price: 499 }], generateReceipt);


// 9. String Formatter

function formatString(str, callback) {
    const formattedStr = callback(str);
    console.log(formattedStr);
}

const stringModifier = (mode) => {
    switch (mode) {
        case 'uppercase':
            return (str) => str.toUpperCase();
        case 'lowercase':
            return (str) => str.toLowerCase();
        case 'reverse':
            return (str) => str.split('').reverse().join('');
        default:
            return (str) => str; // No modification
    }
}

formatString("Hello, World!", stringModifier('uppercase'));
// Output: "HELLO, WORLD!"

formatString("Hello, World!", stringModifier('lowercase'));
// Output: "hello, world!"

formatString("Hello, World!", stringModifier('reverse'));
// Output: "!dlroW ,olleH"

// 10. Sequential Task Execution
function downloadData(callback) {
    console.log("Downloading data...");
    setTimeout(() => {
        console.log("Data downloaded.");
        callback();
    }, 2000); // Simulate a delay of 2 seconds
}

function cleanData(callback) {
    console.log("Cleaning data...");
    setTimeout(() => {
        console.log("Data cleaned.");
        callback();
    }, 2000); // Simulate a delay of 2 seconds
}
function saveData(callback) {
    console.log("Saving data...");
    setTimeout(() => {
        console.log("Data saved.");
        callback();
    }, 2000); // Simulate a delay of 2 seconds
}

const executeTasks = () => {
    downloadData(() => {
        cleanData(() => {
            saveData(() => {
                console.log("All tasks completed.");
            });
        });
    });
};

executeTasks();


/***
 * create a file called javascript_callback_assessment_2026_06_07.js for qst 1 to 4
 * and create a file called javascript_callback_task_2026_06_08.js for qst 5 to 10
 * 
 * 1. Product Discount Calculator

Create a function that accepts a product price and a callback. The callback should determine how the discount is applied and return the final price.

2. Employee Salary Processor

Create a function that receives an employee's salary and a callback. The callback should calculate deductions, bonuses, or taxes.

3. Login Verification

Create a function that simulates user login. If the credentials are valid, execute a success callback; otherwise, execute a failure callback.

4. Movie Rating Analyzer

Create a function that accepts an array of movie ratings and a callback. The callback should calculate a statistic such as the average, highest, or lowest rating.

5. Number Validator

Create a function that receives a number and a callback. The callback should determine whether the number is positive, negative, or zero.

6. Shopping Cart Total

Create a function that accepts a list of cart items and a callback. The callback should calculate the total cost using custom pricing rules.

7. Exam Result Publisher

Create a function that processes a student's result. Once processing is complete, execute a callback to send the result to the student.

8. File Upload Simulation

Create a function that simulates uploading a file. After the upload finishes, execute a callback that displays the upload status.

9. Traffic Light Controller

Create a function that represents a traffic light system. Use callbacks to control the transition from red to yellow to green.

10. Event Ticket Booking

Create a function that simulates booking a ticket for an event. After the booking is confirmed, execute a callback that generates and sends the ticket details.
 */