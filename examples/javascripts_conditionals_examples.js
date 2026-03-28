// 1. Login system simulation
let username = "admin";
let password = "password123";

if (username === "admin" && password === "password123") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}


// 2. Even or Odd Checker

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. Temperature Checker

let temperature = 25;


if (temperature > 30) {
    console.log("Hot");
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("Warm");
}
else {
    console.log("Cold");
}

// 4. Leap Year Checker

let year = 2008;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        } else {
            console.log("Not a leap year");
        }
    } else {
        console.log("Leap year");
    }
} else {
    console.log("Not a leap year");
}

// 5. Simple Calculator Decision

let num1 = 10;
let num2 = 5;
let operator = "+";
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}

// 6. Traffic Light System

let trafficLight = "Green";

switch (trafficLight) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

// 7. Discount Eligibility

let purchaseAmount = 120;

if (purchaseAmount > 100) {
    console.log("20% discount");
} else if (purchaseAmount >= 50 && purchaseAmount <= 100) {
    console.log("10% discount");
} else {
    console.log("No discount");
}

/**
 * 1)  Login System Simulation

Simulate a login check using a username and password:

If both username and password are correct → “Login successful”
If either is incorrect → “Invalid credentials”
2) Even or Odd Checker

Ask the user for a number and determine whether it is even or odd.

If the number is divisible by 2 → output “Even”
Otherwise → output “Odd”
3) Temperature Checker

Ask the user for a temperature value:

Above 30 → “Hot”
Between 20 and 30 → “Warm”
Below 20 → “Cold”
4) Leap Year Checker

Given a year, determine if it is a leap year:

Divisible by 4 → Leap year
But if divisible by 100 → Not a leap year
Unless also divisible by 400 → Leap year
5) Simple Calculator Decision

Ask the user for two numbers and an operator (+, -, *, /):

Perform the correct operation based on the operator
If the operator is invalid → show an error message
6) Traffic Light System

Given a traffic light color:

“Red” → Stop
“Yellow” → Get Ready
“Green” → Go
Any other value → Invalid signal
7) Discount Eligibility

Ask for a user’s purchase amount:

Above 100 → 20% discount
Between 50 and 100 → 10% discount
Below 50 → No discount
 */