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