/***
 * javascripts data types: JavaScript has several built-in data types that can be used to store and manipulate different kinds of data. The main data types in JavaScript include:
 * 
 * 1. Primitive Data Types:
 * - String: Represents a sequence of characters. It is enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
 * - Number: Represents both integer and floating-point numbers. JavaScript uses the same data type for all numbers.
 * - Boolean: Represents a logical entity that can have two values: true or false.
 * - Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value".
 * - Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value.
 * 2. Object Data Types:
 * - Object: Represents a collection of properties, where each property is a key-value pair. Objects can be used to store complex data structures and can contain other objects, arrays, functions, and more.
 * - Array: Represents an ordered list of values. Arrays are a special type of object that can hold multiple values of different data types.
 */

/**
 * string: A string is a sequence of characters used to represent text. In JavaScript, strings can be defined using single quotes (' '), double quotes (" "), or backticks (` `). Strings can contain letters, numbers, symbols, and whitespace. They are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings by concatenating existing ones or using string methods.
 */

let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

let salutation = "hello" + " " + "Giwa";
console.log(salutation)

// string properties
// .length: this returns the number of characters present in a string 
let message = "Hello, JavaScript!";
console.log(message.length);

// string methods
// .toUpperCase(): this converts all characters in a string to uppercase
let lowerCaseString = "hello, world!";
let upperCaseString = lowerCaseString.toUpperCase();
console.log(upperCaseString); // Output: HELLO, WORLD!

// .toLowerCase(): this converts all characters in a string to lowercase
let upperCaseString2 = "HELLO, WORLD!";
let lowerCaseString2 = upperCaseString2.toLowerCase();
console.log(lowerCaseString2); // Output: hello, world!

// .indexOf(): this returns the index of the first occurrence of a specified value in a string
let text = "Hello, JavaScript!"; //  H -> 0, e -> 1, l -> 2, l -> 3, o -> 4, , -> 5,   -> 6, J -> 7, a -> 8, v -> 9, a -> 10, S -> 11, c -> 12, r -> 13, i -> 14, p -> 15, t -> 16, ! -> 17
let index = text.indexOf("S");
console.log(index); // Output: 11

// .split(): this splits a string into an array of substrings based on a specified separator
let sentence = "Hello, how are you?";
let words = sentence.split(" ");
console.log(words); // Output: ["Hello,", "how", "are", "you?"]

// .trim(): this removes whitespace from both ends of a string
let stringWithWhitespace = "   Hello, World!   ";
let trimmedString = stringWithWhitespace.trim();
console.log(trimmedString); // Output: "Hello, World!"

/**
 * Number: A number is a numeric data type that can represent both integer and floating-point values. In JavaScript, numbers are represented using the Number data type, which is a double-precision 64-bit binary format. This means that JavaScript can handle a wide range of numeric values, including very large and very small numbers. Numbers can be used for various mathematical operations, such as addition, subtraction, multiplication, and division. JavaScript also provides several built-in methods for working with numbers, such as Math.round(), Math.floor(), and Math.random().
 */

let integerNumber = 42;
console.log(integerNumber); // Output: 42

// number methods
// Math.round(): this rounds a number to the nearest integer
let decimalNumber = 3.14;
let roundedNumber = Math.round(decimalNumber);
console.log(roundedNumber); // Output: 3

// Math.floor(): this rounds a number down to the nearest integer
let decimalNumber2 = 3.14;
let flooredNumber = Math.floor(decimalNumber2);
console.log(flooredNumber); // Output: 3

// Math.ceil(): this rounds a number up to the nearest integer
let decimalNumber3 = 3.14;
let ceiledNumber = Math.ceil(decimalNumber3);
console.log(ceiledNumber); // Output: 4


/**
 * Boolean: A boolean is a logical data type that can have one of two values: true or false. Booleans are often used in conditional statements and loops to control the flow of a program. They can be the result of comparisons, such as equality (==) or inequality (!=), and can also be used to represent the state of an object or a condition. For example, you might use a boolean to indicate whether a user is logged in or not, or to check if a certain condition is met before executing a block of code.
 */

let isLoggedIn = true;
console.log(isLoggedIn); // Output: true

let isLoggedOut = false;
console.log(isLoggedOut); // Output: false

/**
 * Null: Null is a primitive data type that represents the intentional absence of any object value. It is a special value that indicates "no value" or "empty value". In JavaScript, null is often used to indicate that a variable has been declared but has not been assigned a value, or to represent the absence of an object in a situation where an object is expected. For example, you might use null to indicate that a user has not provided any input, or to represent the absence of a value in a database query.
 */
let user = null;
console.log(user); // Output: null

/**
 * Undefined: Undefined is a primitive data type that represents a variable that has been declared but has not been assigned a value. It is a special value that indicates the absence of a value. In JavaScript, if you declare a variable without assigning it a value, it will be automatically assigned the value of undefined. Additionally, if you try to access a property or variable that does not exist, it will also return undefined. For example, if you declare a variable but forget to assign it a value, it will be undefined, and if you try to access an object property that does not exist, it will also return undefined.
 */

let myVariable; // declaring a variable without assigning a value
console.log(myVariable); // Output: undefined

/**
 * create a file called and answer the following questions:
 * 1. Variable Types Identification

List three variables you would create to store:

A person’s name

Their age

Whether they are a student

👉 Decide which one should use var, let, or const, and explain why.

2. Reassignment Rules

You have a variable storing a number.

First, declare it in a way that allows changing its value later

Then, declare another variable that must never change

👉 Explain what happens if you try to reassign both.

3. Scope Understanding

Imagine you create variables inside a block (like inside a condition).

One is declared with var

One with let

One with const

👉 Which of them can still be accessed outside the block, and why?

4. Primitive Data Types Recognition

Identify the data type of each of the following values:

A person’s name

A number like 50

True or false

A variable declared but not given a value

An intentionally empty value

A very large number beyond normal limits

👉 Name the correct primitive type for each.

5. Hoisting Behavior

You try to use a variable before declaring it.

One is declared with var

Another with let

👉 Which one causes an error and which one does not?
👉 Explain the reason behind the difference.

6. Constant Behavior with Objects

You declare a constant that holds an object with properties like name and age.

👉 Can you:

Change one of the properties?

Add a new property?

Reassign the entire object?

Explain each case.

7. Type Conversion Thinking

You combine a number stored as text with another number.

👉 What result do you expect?
👉 How can you change it so it behaves like a real number calculation instead?
 */