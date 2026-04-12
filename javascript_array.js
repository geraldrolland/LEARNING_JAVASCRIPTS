/**
 * what is an array: This is an ordered collection of items. It is a data structure that can hold multiple values at once. Each value in an array is called an element, and each element has a specific index that starts from 0. Arrays can hold any type of data, including numbers, strings, objects, and even other arrays. They are commonly used to store and manipulate lists of data in programming languages like JavaScript.
 */

/**
 * customer = [
 *   { id: 1, name: "John Doe", age: 30 }, -> 0
 *   { id: 2, name: "Jane Smith", age: 25 }, -> 1
 *   { id: 3, name: "Alice Johnson", age: 35 } -> 2
 * ]
 */

/**
 * Instead of creating separate variables for each car, we can use an array to store them.
 * This allows us to manage the list of cars more efficiently.
 * cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"]
 */

// an empty array 

const cars = [];

cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Ford";
cars[3] = "BMW";
cars[4] = "Mercedes";

console.log(cars); // Output: ["Toyota", "Honda", "Ford", "BMW", "Mercedes"]

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

const otherFruits = new Array("Pineapple", "Strawberry", "Watermelon");


// accessing array elements

fruits[0]; // Output: "Apple"
fruits[1]; // Output: "Banana"
fruits[2]; // Output: "Orange"
fruits[3]; // Output: "Grapes"
fruits[4]; // Output: "Mango
// 

// array are mutable, which means we can change the elements in the array after it has been created.

fruits[0] = "Pawapaw";
console.log(fruits); // Output: ["Pawapaw", "Banana", "Orange", "Grapes", "Mango"]

// converting an array to a string using the toString() method

const fruitstring = fruits.toString();
console.log(fruitstring); // Output: "Pawapaw,Banana,Orange,Grapes,Mango"


/***
 * Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:
 */


// array can be heterogeneous, which means they can contain elements of different types.

const mixedArray = [1, "Hello", true, { name: "John" }, [1, 2, 3]];
console.log(mixedArray); // Output: [1, "Hello", true, { name: "John" }, [1, 2, 3]]

console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: "Hello"
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: { name: "John" }
console.log(mixedArray[4]); // Output: [1, 2, 3]

const myFunc = () => {}
const myVar = "Hello";

console.log(typeof(myFunc)); // Output: "function"

const anotherMixedArray = [myFunc, myVar];


/**
 * Array Properties and Methods
 */

// length property: the length property of an array returns the number of elements in the array.

const lenght_of_arr = fruits.length;
console.log(lenght_of_arr); // Output: 5

console.log(fruits[lenght_of_arr - 1]); // Output: "Mango"

// push() method: the push() method adds one or more elements to the end of an array and returns the new length of the array.

fruits.push("Pineapple");
console.log(fruits); // Output: ["Pawapaw", "Banana", "Orange", "Grapes", "Mango", "Pineapple"]

//console.log(fruits.sort())

console.log([5, 3, 7, 2].sort())


// looping through an array using a for loop

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/**
 * The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
 */

// makeing of instanceof to check if an object is an instance of a specific class or constructor function.


const justVar = 0
console.log(fruits instanceof Array); // Output: true


/**
 * Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects:
 */

const persons = [
 {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
]

console.log(persons[0]["name"]); // Output: "John"
console.log(persons[0]["age"]); // Output: 30
console.log(persons[0]["cars"][0]["models"])


// at() method: the at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

console.log(fruits.at(0)); // Output: "Pawapaw"
// get the last element of the array using the at() method with a negative index
console.log(fruits.at(-1)); // Output: "Pineapple"


// join() method: the join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string. If no separator is provided, the default separator is a comma (,).

const joinedFruits = fruits.join(", ");
console.log(joinedFruits); // Output: "Pawapaw, Banana, Orange, Grapes, Mango, Pineapple"


// pop() method: the pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const lastFruit = fruits.pop(); // removes "Pineapple" from the fruits array and returns it
console.log(lastFruit); // Output: "Pineapple"
console.log(fruits); // Output: ["Pawapaw", "Banana", "Orange", "Grapes", "Mango"]


// shift() method: the shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const firstFruit = fruits.shift(); // removes "Pawapaw" from the fruits array and returns it
console.log(firstFruit); // Output: "Pawapaw"
console.log(fruits); // Output: ["Banana", "Orange", "Grapes", "Mango"]


// unshift() method: the unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const newLength = fruits.unshift("Pawapaw"); // adds "Pawapaw" to the beginning of the fruits array and returns the new length
console.log(newLength); // Output: 5
console.log(fruits); // Output: ["Pawapaw", "Banana", "Orange", "Grapes", "Mango"]


// delete() operator: the delete operator can be used to remove an element from an array, but it does not change the length of the array. Instead, it leaves an empty slot in the array.

// delete fruits[1]; // removes "Banana" from the fruits array, but does not change the length of the array
// console.log(fruits); // Output: ["Pawapaw", empty, "Orange", "Grapes", "Mango"]
// console.log(fruits.length); // Output: 5


// concat() method: the concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const moreFruits = ["Pineapple", "Strawberry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Pawapaw", "Blueberry", "Orange", "Grapes", "Mango", "Pineapple", "Strawberry"]


// splice() method: the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina"];
// countries.splice(3, 0, "Nigeria", "Ghana"); // inserts "Nigeria" and "Ghana" at index 3 without removing any elements
// console.log(countries); // Output: ["USA", "Canada", "Mexico", "Nigeria", "Ghana", "Argentina"]

// delete brazil

// countries.splice(1, 2); // removes 1 element at index 3 (which is "Brazil")
// console.log(countries); // Output: ["USA", "Canada", "Mexico", "Argentina"]


// slice() method: the slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

const slicedCountries = countries.slice(1, 3);
console.log(slicedCountries)

/**
 * forEach() method: the forEach() method executes a provided function once for each array element.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});

 */

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((elem) => { // elem = 5
  console.log(elem);
})

numbers.forEach((elem) => {
  console.log(elem * 2);
})



// map() method: the map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


const squaredNumbers = numbers.map((elem) => { // [1, 4, 9, 16, 25]
  return elem * elem;
})

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// reduce() method: the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

previousValue = 0

const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, previousValue);

console.log(sum); // Output: 15

// filter() method: the filter() method creates a new array with all elements that pass the test implemented by the provided function.

const evenNumbers = numbers.filter((elem) => {
  return elem % 2 === 0;
})
console.log(evenNumbers); // Output: [2, 4]

const divNumber = numbers.filter((elem) => {
  return elem % 3 === 0;
})

console.log(divNumber); // Output: [3]


