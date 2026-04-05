/**
 * 1.

Write a function that takes a number and returns its square.

2.

Create a function that accepts two numbers and returns their sum.

3.

Write a function that takes a number and returns "Even" if it is even or "Odd" if it is odd.

4.

Create a function that takes a string and returns its length.

5.

Write a function that takes a number and returns its factorial.

6.

Create a function that takes a number and returns true if it is positive, otherwise false.

7.

Write a function that takes two numbers and returns the larger one.

8.

Create a function that takes a string and returns the string in uppercase.

9.

Write a function that takes a number and returns the sum of all numbers from 1 up to that number.

10.

Create a function that takes a number and returns true if it is a prime number, otherwise false.
 */

// example 6, 7, 8, 9



// 6
function isNumPositive(num) {
    if (num > 0) {
        console.log(`the number ${num} is positive`);
    } else {
        console.log(`the number ${num} is negative`);
    }
}

isNumPositive(6)

// 7

const isNumLarge = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

isNumLarge(5, 3);

// 8

function toUpperCase(str) {
    return str.toUpperCase()
}

toUpperCase("giwa");

// 9

const summation = (num) => {
    let sum = 0
    for(let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum
}

summation(8);


// create a file called javascript_function_task_2026_04_05.js