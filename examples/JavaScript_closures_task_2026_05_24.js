// 6. Shopping Cart Manager
function createCart() {
    let cart = [];

    return {
        addProduct(product) {
            cart.push(product);
            console.log(`${product} added to cart`);
        },

        viewCart() {
            console.log("Cart Items:", cart);
        }
    };
}

const myCart = createCart();

myCart.addProduct("Laptop");
myCart.addProduct("Phone");
myCart.viewCart();


// 7. Timer Utility
function createTimer() {
    let startTime = Date.now();

    return {
        elapsedTime() {
            let currentTime = Date.now();
            let seconds = Math.floor((currentTime - startTime) / 1000);
            console.log(`Elapsed Time: ${seconds} seconds`);
        }
    };
}

const timer = createTimer();

setTimeout(() => {
    timer.elapsedTime();
}, 3000);


// 8. Student Grade Manager
function createGradeManager() {
    let grades = [];

    return {
        addGrade(grade) {
            grades.push(grade);
            console.log(`Grade ${grade} added`);
        },

        calculateAverage() {
            let total = grades.reduce((sum, grade) => sum + grade, 0);
            let average = total / grades.length;
            console.log(`Average Grade: ${average}`);
        }
    };
}

const student = createGradeManager();

student.addGrade(80);
student.addGrade(90);
student.addGrade(100);

student.calculateAverage();


// 9. Notification System
function createNotifier(template) {
    return function(userName) {
        console.log(`${template}, ${userName}!`);
    };
}

const welcomeNotifier = createNotifier("Welcome");

welcomeNotifier("John");
welcomeNotifier("Sarah");


// 10. Function Factory (Multiplier Generator)
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));      // 10
console.log(triple(5));      // 15
console.log(quadruple(5));   // 20