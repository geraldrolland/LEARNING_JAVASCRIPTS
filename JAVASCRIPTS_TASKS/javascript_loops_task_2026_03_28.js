
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


//1
for (let i = 1; i <= 20; i++) {
    console.log(i);
} // correct

//2
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
} // correct

//4
// let num = prompt("Enter a number")

// for (let i = 1; i <=12; i++) {
//     console.log(num + "X" + i + "=" + (num * i));
// } // correct

//5
for (let i = 10; i >= 1; i--) {
    console.log(i);
} // correct

//6
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    } 
} // correct

//9

let correctNum = Math.random() * 10

while (true) {
    let guessedNum = prompt("guess the number between 0 to 10 ? ")
    if (guessedNum === correctNum) {
        console.log("correct!");
        break;
    }
}


