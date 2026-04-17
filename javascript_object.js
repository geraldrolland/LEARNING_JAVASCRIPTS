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