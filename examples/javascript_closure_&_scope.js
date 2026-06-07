/**
 * javascript scope: the accessibility of variables, objects and functions in different parts of the code.
 * closure: a function that has access to its own scope, the outer function's scope, and the global scope.
 */

let name = "Gerald" // global scope

function myFunc(a, b) {
    const num = 10 // function scope
    console.log(num) // can access num because it's in the same function scope

    console.log(name) // can access global variable
}

myFunc(2, 5) // output: Gerald



if (true) {
    const show = true // block scope
    console.log(show) // output: true, because show is in the same block scope
}

// console.log(show) // output: error, because show is in block scope and cannot be accessed outside of it.


let x;
let y;
y = 5

country = "Nigeria" // global variable, can be accessed anywhere in the code


let state = "Imo" // global variable, can be accessed anywhere in the code

function outerFunc() {
    let state = "Lagos" // local variable to outerFunc
    console.log(state) // output: Lagos, because state is in the same function scope
}

outerFunc() // output: Lagos, because state is in the same function scope

console.log(state) // output: Imo, because state is in the global scope


// hoisting 

z = 10
console.log(z) // output: 10, because z is hoisted to the top of the scope and can be accessed before it's declared
var z;




/**
 * create a file called javascript_scope_task_2026_05_22.js
1. Create a program where a variable is used before it is declared with var.
Predict the output before running the program.
Explain why the output occurs.
Repeat the same exercise using let and const and compare the behavior.
2. Write a function declaration and call it before its position in the file.
Observe whether the function works correctly.
Then replace the function declaration with a function expression and compare the result.
3. Build a small login validation flow where helper functions are called before they are defined.
Determine which function styles work with hoisting and which do not.
Explain the difference between declarations and expressions in terms of memory creation.
4. Create multiple variables with the same name in different scopes (global, function, and block).
Access the variable before declaration inside each scope.
Identify where hoisting happens and where the temporal dead zone prevents access.
5. Develop a debugging exercise involving unexpected undefined outputs.
Use variables and functions declared in different orders.
Trace the execution line by line to explain how JavaScript handles hoisting during the creation phase and execution phase.
 */

/**
 * Javascript Closures: a closure is a function that has access to its own scope, the outer function's scope, and the global scope.
 * Closures are created whenever a function is created, at function creation time.
 * A closure gives you access to an outer function's scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * Closures are useful because they let you associate some data (the environment) with a function that operates on that data.
 * This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.
 * Closures are also useful for creating private variables, which can only be accessed by the functions that are defined within the closure.
 * A common use of closures is to create a function that can be called multiple times with different arguments, while still maintaining access to the same variables.
 * This is often used in event handlers, where you want to maintain access to certain variables even after the event has occurred.
 */

// example of closure

function outerFunction(outerVariable) {
    const country = "Nigeria"
    return function innerFunction(innerVariable) {
        console.log(`Outer variable: ${outerVariable}`)
        console.log(`Inner variable: ${innerVariable}`)
        console.log(`Country: ${country}`)
    }
}

const newFunction = outerFunction("outside")
newFunction("inside")

// example 2


function incrFunction() {
    let count = 0; // 1 -> 2 -> 3
    return () => {
        count++;
        console.log(count);
    }
}

const increment = incrFunction();
increment() // output: 1
increment() // output: 2
increment() // output: 3

/**
 *  assessement task: create a file called javascript_class_assessment_2026_05_24.js
 * 
 * Control Flow & Functions
1) Create a grading system that accepts a student’s score and returns the appropriate grade (A–F) using conditional statements.
2) Build a simple calculator function that performs addition, subtraction, multiplication, or division based on a user-selected operation.
3) Write a function that checks whether a given year is a leap year.
4) Create a traffic light simulator where different colors trigger different actions/messages.
5) Build a number guessing game where the program keeps checking guesses until the correct number is found.

Arrays & Objects
1) Create an Arrays & Objects and display only products that cost above a certain amount.
2) Build a student management system where each student object contains name, age, and score, then find the top-performing student.
3) Create a shopping cart system that calculates the total price of all items in an array.
4) Build a movie collection app where users can search movies by title or genre from an array of objects.
5) Create an inventory tracker that updates product quantities when items are sold or restocked.

DOM Manipulation & Events
1) Build a to-do list app where users can add, delete, and mark tasks as completed.
2) Create a character counter that updates live as a user types into a textarea.
3) Build an image gallery where clicking a thumbnail changes the main displayed image.
4) Create a dark mode/light mode toggle button that changes the page theme dynamically.
5) Build a form validation system that checks if inputs are empty before submission.

Scope & Closures
1) Create a counter function that remembers its previous value every time it is called.
2) Build a private banking system where the account balance cannot be accessed directly except through specific functions.
3) Create a function generator that produces personalized greeting functions for different users.
4) Build a timer controller where start, stop, and reset functions share access to the same hidden variable.
5) Create a quiz score tracker that keeps updating the score internally without exposing it globally.
 */