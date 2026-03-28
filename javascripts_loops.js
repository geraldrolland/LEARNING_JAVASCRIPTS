

// with out loops

// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");


// while (true) {
//     console.log("Hello, World!");
// }

// for loop:  this statement creates a loop with 3 optional expressions:

/**
 * 1. initialization: executed before the loop starts (e.g., let i = 0).
 * 2. condition: evaluated before each iteration; if true, the loop continues (e.g., i < 5).
 * 3. increment or decrement: executed after each iteration (e.g., i++).
 * for (let i = 0; i < 5; i++) {
 * code to be executed
 * }
 */

for (let i = 0; i < 5; i++) {
    console.log("hello, Giwa!"); 

}
// break out of the loop when condition is false
//1st iteration ->  hello, Giwa!
//2nd iteration ->  hello, Giwa!
//3rd iteration ->  hello, Giwa!
//4th iteration ->  hello, Giwa!
//5th iteration ->  hello, Giwa!

// while loop: this statement creates a loop that executes a block of code as long as a specified condition is true. The syntax is as follows:

let count = 0;
while (count < 5) {
    console.log("Hello, World!");
    count++;
}

// break out of the loop when condition is false
//1st iteration ->  Hello, World!
//2nd iteration ->  Hello, World!
//3rd iteration ->  Hello, World!
//4th iteration ->  Hello, World!
//5th iteration ->  Hello, World!

let cnt = 0;
do {
    console.log("Hello, Gerald!");
    cnt++;
} while (false);

// note do while guarantees that the code block will be executed at least once, even if the condition is false at the beginning. The syntax is as follows:
// break out of the loop when condition is false
//1st iteration ->  Hello, World!
//2nd iteration ->  Hello, World!
//3rd iteration ->  Hello, World!
//4th iteration ->  Hello, World!
//5th iteration ->  Hello, World!


// break statement is used to exit a loop prematurely when a certain condition is met. When the break statement is executed, the loop is immediately terminated, and the program continues with the next statement after the loop. Here's an example:

for (let i = 0; i < 10; i++) {

    if (i % 2 === 1) {
        break; // This will exit the loop immediately
    }

}


// continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is executed, the rest of the code inside the loop for that iteration is skipped, and the loop proceeds with the next iteration. Here's an example: 


for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        console.log("Skipping odd number: " + i);
        continue; // This will skip the rest of the code in this iteration and move to the next iteration
    }

    console.log(i); // This will only log even numbers (0, 2, 4, 6, 8)
}

/**
 * Here are 10 JavaScript loop exercises (no code):

1. Count Numbers
Print numbers from 1 to 20.
2. Even Numbers Only
Display all even numbers between 1 and 50.
3. Sum of Numbers
Find the total sum of numbers from 1 to 100.
4. Multiplication Table
Ask a user for a number and display its multiplication table up to 12.
5. Reverse Counting
Print numbers from 10 down to 1.
6. Odd Numbers
Print all odd numbers between 1 and 30.
7. Factorial Calculation
Find the factorial of a given number (e.g., 5 → 5 × 4 × 3 × 2 × 1).
8. Count Digits
Given a number, count how many digits it has.
9. Number Guessing Loop
Keep asking the user to guess a number until they get it right.
10. Simple Pattern Printing
Print a pattern like a triangle of stars (e.g., 1 star on first line, 2 on second, etc.).
 */

// example 3, 7, 8, 10

// exmaple 3: Sum of Numbers
let totalSum = 0;

for (let i = 1; i <= 100; i++) {
    totalSum += i; // totalSum = totalSum + i
}
console.log("The total sum of numbers from 1 to 100 is: " + totalSum);


// example 7: Factorial Calculation

let number = 5;

for (let i = number - 1 ; i > 1; i--) {
    number = number * i; // number = number * i = 20 = 60 = 120
    }
    console.log("The factorial of 5 is: " + number);

// example 8: Count Digits

let num = 12345;
let digitCount = 0;

while (num > 0) { // 12345 / 10 = 1234.5 > 0 = 1234 / 10 = 123.4 = 123 = 12.3 = 12 = 1.2 = 1 = 0.1 = 0
    num = Math.floor(num / 10);
    digitCount++; // digitCount = 5
}

console.log("The number of digits in 12345 is: " + digitCount);


// example 10: Simple Pattern Printing

let rows = 10;

for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i)); // This will print a line of stars, with the number of stars equal to the current row number
}

/**
 * task on loops create file called javascript_loops_task_2026_03_28.js: 1, 2, 4, 5, 6, 9
 * task on conditionals create file called javascript_conditionals_task_2026_03_28.js:
 * 1) Discount Eligibility
Apply a discount if a purchase amount exceeds a certain value.
Character Type Check
Determine if a character is a vowel or consonant.
Time Greeting
Display greeting based on time (morning, afternoon, evening).
Number Sign and Parity
Check if a number is positive/negative and even/odd.
Triangle Validity
Check if three given sides can form a valid triangle
Number Range Check
Check if a number falls within a specific range (e.g., 10–50).
Password Validation
Verify if the entered password matches the correct one.
 */