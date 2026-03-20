/***
 * JavaScript Variables: to store data values, you can use variables in JavaScript. A variable is a container for storing data values.
 * In JavaScript, you can declare a variable using the var, let, or const keyword. The var keyword is used in older versions of JavaScript, while let and const are used in modern JavaScript (ES6 and later).
 * 
 * var: The var keyword is function-scoped and can be redeclared and updated. However, it is generally recommended to avoid using var in modern JavaScript due to its quirks and potential for bugs.
 * let: The let keyword is block-scoped and can be updated but not redeclared within the same scope.
 * const: The const keyword is block-scoped and cannot be updated or redeclared.

 */

// var Keyword: variables created using the var keyword are function-scoped, which means they are accessible within the function they are declared in. They can be redeclared and updated.
var name = 'John'; // Declare a variable using var

/**
 * name: this is the name of the variable. It is a valid identifier in JavaScript, which means it can be used to store and reference data.
 * = : this is the assignment operator, which is used to assign a value to a variable.
 * "John": this is the value
 */
console.log(name); // Output: John


var num1 = 10; // Declare a variable and assign a number
var num2 = 20;

var sum = num1 + num2; // Calculate the sum of num1 and num2
console.log(sum); // Output: 30


var city = "New York"; // Declare a variable without var (not recommended)
console.log(city); // Output: New York

city = "Los Angeles"; // Update the value of the variable
console.log(city); // Output: Los Angeles


// let Keyword: variables created using the let keyword are block-scoped, which means they are only accessible within the block they are declared in. They can be updated but not redeclared within the same scope.
let age = 25;
console.log(age); // Output: 25

age = 30; // Update the value of the variable
console.log(age); // Output: 30

// const Keyword: variables created using the const keyword are block-scoped and cannot be updated or redeclared. They must be initialized with a value at the time of declaration.
const pi = 3.14;
console.log(pi); // Output: 3.14

// const varaibles are used for creating constants, which are values that should not change throughout the program. Attempting to update or redeclare a const variable will result in an error.