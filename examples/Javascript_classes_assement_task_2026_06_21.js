//VECHILCLE SYSTEM
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(increase) {
        this.speed += increase;
    }

    displaySpeed() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed) {
        super(brand, speed);
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, speed) {
        super(brand, speed);
    }
}

const car = new Car("Toyota", 80);
car.accelerate(20);
car.displaySpeed();

const bike = new Motorcycle("Yamaha", 60);
bike.accelerate(15);
bike.displaySpeed();
// correct

//2 School Members
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    teach(subject) {
        console.log(`${this.name} teaches ${subject}.`);
    }
}

class Student extends Person {
    study(course) {
        console.log(`${this.name} is studying ${course}.`);
    }
}

const teacher = new Teacher("Mr. John", 40);
teacher.teach("Mathematics");

const student = new Student("Sarah", 18);
student.study("Computer Science");
// correct

//Online Store Products
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }

    display() {
        console.log(`${this.name} - $${this.price} - Warranty: ${this.warranty}`);
    }
}

class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    display() {
        console.log(`${this.name} - $${this.price} - Size: ${this.size}`);
    }
}

const laptop = new Electronics("Laptop", 1200, "2 Years");
laptop.display();

const shirt = new Clothing("T-Shirt", 25, "Large");
shirt.display();
// correct

//Shape Calculator
class Shape {
    area() {
        console.log("Area calculation not implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.area());

const rectangle = new Rectangle(8, 4);
console.log("Rectangle Area:", rectangle.area());
// correct

//Company User Roles
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class Admin extends User {
    manageUsers() {
        console.log(`${this.username} is managing users.`);
    }
}

class Customer extends User {
    placeOrder(product) {
        console.log(`${this.username} placed an order for ${product}.`);
    }
}

const admin = new Admin("Admin01", "admin@gmail.com");
admin.manageUsers();

const customer = new Customer("Mike", "mike@gmail.com");
customer.placeOrder("Laptop");
// correct