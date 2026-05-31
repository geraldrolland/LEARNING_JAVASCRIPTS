//Control Flow & Functions

//1 Grading System
function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >=70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else if (score >= 45) {
        return "E";
    } else {
        return "F";
    }
}
console.log( getGrade(85));

// correct

//2 Simple Calculator
function calculator(num1, num2, operator)
{
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot be divided by 0";
        default: 
            return "invalid operator";
        }           
}
// correct


//3 Leap Year calender
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

// correct

//4 Traffic Light Simulator
function trafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("stop");
            break;
        case "yellow":
            console.log("Get Ready");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("invalid color");    

    }
}

// correct

//5 Number Guessing Game

const secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {
    guess++;
    console.log(`Trying: ${guess}`);
}

   console.log(`Trying: $(guess}`);


//Arrays & Objects

//1. Products Above Certain Amount
const Products = [
    {name: "Laptop", Price: 1200 },
    {name: "Mouse", Price: 60 },
    {name: "Monitor", Price: 250 },
    {name: "Keyboard", Price: 100 }
];

const expensiveProducts = Products.filter (Product => Product.Price > 100);
console.log(expensiveProducts);

//2. Student Management System 
const students = [
    {name: "john", age: 18, score:85 },
    {name: "sarah", age: 19, score:92 },
    {name: "chisom", age:20, score:78 },
    {name: "Ayo", age:21, score:68 }
];
let topstudent = students[0];

for (let student of students) {
    if (student.score > topstudent.score){
        topstudent = student;
    }     
}
console.log(topstudent);

//3. Shopping cart System
const cart = [
    {item: "shirt", Price: 30, quantity: 1 },
    {item: "Shoe", price: 70, quantity: 2 },
    {item: "Shorts", price: 20, quantity: 2},
    {item: "socks", price: 20, quantity: 10}
];
let total = 0;
for (let product of cart) {
    total += product.price * product.quantity;
}
console.log('Total Price: $${total}');

//4. Movie Collection App
const movies = [
    {tittle: "Avatar", genre: "scifi" },
    {tittle: "Avengers", genre: "Action"},
    {tittle: "Superman", genre: "Fantasy"},
    {tittle:"The Batman", genre: "Thiller"}
];
function searchMovie(keyword) {
    return movies.filler(movie => movie.title.toLowercase().includes(keyword.Lowercase()) ||
    movie.genre.toLowercase().includes(keyword.toLowercase())
);
}
console.log(searchMovie("Action"));
console.log(searchMovie("titanic"));

//5. Inventory Tracker
const inventory = {
    rice: 20,
    beans: 15,
    milk:10
};

function restock(item, amount) {
    inventory[item] += amount;
}
function sell(item, amount) {
    inventory[item] -= amount;
}
restock("rice", 5);
sell("milk", 2);

console.log(inventory);