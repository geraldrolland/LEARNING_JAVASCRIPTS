/**
 * Object Oriented Programming (OOP) in JavaScript
 * JavaScript is a versatile language that supports object-oriented programming (OOP) principles. OOP allows developers to create objects that can contain both data and functions, making it easier to organize and manage code. In JavaScript, you can create objects using constructor functions, classes, or object literals. Here are some examples of OOP concepts in JavaScript:
 * 1. Constructor Functions: A constructor function is a special type of function that is used to create and initialize objects. It is typically defined with a capitalized name and uses the 'this' keyword to assign properties and methods to the object being created.
 * 2. Classes: Introduced in ES6, classes provide a more concise and clear syntax for creating objects and handling inheritance. A class can have a constructor method for initializing properties and other methods for defining behavior.
 * 3. Object Literals: This is a simple way to create objects using curly braces {}. You can define properties and methods directly within the object literal.
 * 4. Inheritance: JavaScript supports inheritance through prototypes. You can create a new object that inherits properties and methods from an existing object, allowing for code reuse and the creation of more complex objects.
 * 5. Encapsulation: This principle involves bundling data and methods that operate on that data within a single unit (object) and restricting access to some of the object's components. In JavaScript, you can achieve encapsulation using closures or by using private fields in classes.
 * 6. Polymorphism: This allows objects of different types to be treated as instances of the same class through a common interface. In JavaScript, you can achieve polymorphism through method overriding in classes or by using duck typing.
 * Overall, OOP in JavaScript provides a powerful way to structure and organize code, making it easier to maintain and extend applications.
 */

/**
 * example 1
 */

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }

    sound(name) {
        console.log(`${this.make} ${this.model} is making a sound: ${name}`);
    }
}


const car1 = new Car('Toyota', 'Corolla', 2020);
car1.drive();
car1.sound('Vroom Vroom');
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);