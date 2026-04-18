/**
 * Javascript Object: A collection of key-value pairs where the keys are strings and the values can be any data type, including other objects. Objects are used to store and organize data in a structured way, allowing for easy access and manipulation. They can be created using object literals, constructors, or classes, and can have properties and methods to define their behavior.
 */

const car = { // car is an object literal
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(car.type);
console.log(car.model);
console.log(car.color);

// object Literal: an object created using the object literal syntax, which is a comma-separated list of key-value pairs enclosed in curly braces.

const employee = {
    "name": "John Doe",
    "age": 30,
    "position": "Software Engineer"
}

// empty object

const emptyObj = {}

console.log(emptyObj);

emptyObj.title = "Empty Object";
emptyObj.description = "This is an empty object that has been populated with properties.";

console.log(emptyObj);


// Create a new JavaScript object using new Object():

// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
})

// object properties can be accessed using dot notation or bracket notation

console.log(person.firstName); // Output: John

console.log(person["lastName"]); // Output: Doe

// JavaScript Object Methods

const human = {
    name: "Alice",
    age: 25,
    walk: function() {
        console.log(`${this.name} is walking.`);
    },
    sleep: function() {
        console.log(`${this.name} is sleeping.`);
    },
    
    sing: function(songTitle) {
        console.log(`${this.name} is singing ${songTitle}.`);
    }
}

human.walk()
human.sleep()
human.sing("Twinkle Twinkle Little Star");


// javascript object properties can be added, modified, or deleted after the object has been created.

// Adding a new property
human.hobby = "painting";
console.log(human.hobby); // Output: painting
console.log(human);

// Deleting a property
delete human.age;
console.log(human.age); // Output: undefined
console.log(human);

// Modifying an existing property
human.name = "Bob";
console.log(human.name);
console.log(human);

// check if a property exists in an object using the in operator

console.log("country" in human); // Output


// nested objects: Objects can contain other objects as properties, allowing for the creation of complex data structures.

const citizen = {
    fullName: "Jane Smith",
    age: 28,
    address: {
        street: "123 Main St",
        LocalGov: "Ikorodu",
        state: "Lagos",
        country: "Nigeria"
    },
    contact: {
        email: "jane.smith@example.com",
        phoneNum: "555-1234",
    }
}

citizen.address.street; // Output: 123 Main St
citizen.contact.email; // Output: jane.smith@example.com

citizen.getNIN = function() {
    return "1234567890";
}

console.log(citizen); // Output: 1234567890


// this keyword: In JavaScript, the this keyword refers to the current object that is executing the code. It allows you to access properties and methods of the object from within its own context. The value of this can change depending on how a function is called, making it a powerful tool for working with objects and their behavior.


// Example of this keyword in an object method

const user = {
    name: "Charlie",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// This as a global object

console.log(this); // In a browser, this will refer to the window object


// this in a function

function showThis() {
    console.log(this);
}

showThis(); // In a browser, this will refer to the window object


// javacsript object display

// javascript object iteration

const vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}
for (let key in vehicle) {
    console.log(`${key}: ${vehicle[key]}`);
}

// Object.values() method can be used to get an array of the object's property values

const values = Object.values(vehicle);
console.log(values); // Output: ["Toyota", "Camry", 2020]


// Object.keys() method can be used to get an array of the object's property keys

const keys = Object.keys(vehicle);
console.log(keys); // Output: ["make", "model", "year"]


// Object.entries() method can be used to get an array of the object's key-value pairs

const entries = Object.entries(vehicle);
console.log(entries); // Output: [["make", "Toyota"], ["model", "Camry"], ["year", 2020]]

for (let [key, value] of Object.entries(vehicle)) {
    console.log(`${key}: ${value}`);
}


// Using JSON.stringify() to convert an object to a JSON string

const jsonString = JSON.stringify(vehicle);
console.log(jsonString); // Output: {"make":"Toyota","model":"Camry","year":2020}


/**
 * Javascript Object Constructors: A function that is used to create and initialize objects. It serves as a blueprint for creating multiple instances of an object with similar properties and methods. The constructor function is typically defined with a capitalized name and uses the this keyword to assign values to the object's properties. When called with the new keyword, it creates a new object and sets its prototype to the constructor's prototype, allowing for inheritance of properties and methods.
 */

function Person(name, age) { // object constructor
    this.name = name;
    this.age = age;
    this.nationality = "Nigerian";
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

Person.changeNama = function(newName) {
    this.name = newName;
} // this will not work because changeNama is a static method and does not have access to the instance properties of the Person object.


const person1 = new Person("David", 40);
const person2 = new Person("Emily", 35);
person1.nationality = "American";

person1.changeNama = function(newName) {
    this.name = newName;
}

person1.changeNama("Michael");

console.log(person1.name); // Output: Michael
console.log(person1.nationality);
person1.greet();

person1.country = "Nigeria";
console.log(person1.country);

console.log(person2.country); // Output: undefined

/***
create a file called javscript_object_assessment_2026_04_18.js and complete the following tasks from 1 to 5: 
* 1) Create an object representing a student with properties like name, age, and grade. Access each property individually.
2) Add a new property (e.g., school) to an existing object after it has been created.
3) Modify the value of an existing property in an object and verify the change.
4) Delete a specific property from an object and check if it still exists.
5) Create an object with nested objects (e.g., a user with an address object inside it) and access nested values.


create a file called javscript_object_task_2026_04_18.js and complete the following tasks from 6 to 20:

6) Loop through all the properties of an object and list both keys and values.
7) Count the number of properties in an object without manually counting them.
8) Check if a specific property exists in an object and return a boolean result.
9) Create a method inside an object that returns a formatted string using the object’s properties.
10) Create multiple objects representing products and store them inside an array.
11) Access and display a specific property from an object inside an array of objects.
12) Sort an array of objects based on one of their properties (e.g., price or age).
13) Merge two objects into one and handle cases where properties have the same name.
14) Clone an object and confirm that modifying the clone does not affect the original.
15) Convert an object’s keys into an array and separately convert its values into another array.
16) Create an object that keeps track of how many times a specific word appears in a sentence.
17) Freeze an object and attempt to modify it—observe what happens.
18) Create a constructor-like pattern (or blueprint idea) for generating multiple similar objects.
19) Use an object to group items by category (e.g., grouping students by grade level).
20) Transform an object into an array of key-value pairs and then reconstruct it back into an object.
 */