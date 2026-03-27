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
let day = "Monday";

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