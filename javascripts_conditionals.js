/***
 * conditional statements allows us to execute different code based on different conditions.
 * 
 * if statement - executes a block of code if a specified condition is true.
 * else statement - executes a block of code if the same condition is false.
 * else if statement - specifies a new condition to test, if the first condition is false.
 * switch statement - is used to perform different actions based on different conditions.
 * 
 */

// if statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("you are not an adult")
}


// else if statement
let score = 100;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// switch statement
let day = "myday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
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