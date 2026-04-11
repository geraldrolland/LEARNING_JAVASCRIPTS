/**
 * what are functions: 1) This are resuable code blocks designed for a particular task
 *                     2) they are executed when they are called or invoked
 *                     3) They are fundamental in all programming language
 * 
 * greeting(), salutation()
 * 
 * function salutation(name) {
 * console.log("hello " + name)
 * }
 * 
 * salutation("Gerald")
 * 
 * function addNum(num1, num2) {
 * let sum = num1 + num2
 * return sum
 * }
 * 
 *  addNum(2, 4) // 6
 */

sayHello(); // function call or invocation 

function sayHello() {
    console.log("hello world!");
}




function multiply(num1, num2) {
    let prod = num1 * num2
    return prod;
}


 let result = multiply(2, 3)

 let value = multiply(6, 7) // function invocation or call

 console.log("result: " + value)

 function division(num){ // defined using function declaration
    return num / 2;
 }

 let myFunc = division // function refrencing 

 console.log(myFunc(4));


 function greeting(name) {
    function calcNameLenght(name) {
        return name.length
    }
    let nameLenght = calcNameLenght(name);
    console.log("hello " + name + " the number of characters in your name is: " + nameLenght)
 }


 greeting("Giwa");


 function greetUser(name = "customer") {
    console.log("hello " + name);
 }

 greetUser("Amaka")


 function nothingFunc() {
    return
 }

 nothingFunc();

 // function expression is a function stored in a varaible


// console.log("this is the subtracted result ", subtract(2, 4));

 const subtract = function (num1, num2) { // defined using function expression
    if (num1 > num2) {
        return num1 - num2
    } else if (num1 < num2) {
       return num2 - num1
    } else {
        return num1 - num2
    }
 };


//  const remainder = (num) => {
//     return num % 2
//  }

 const remainder = (num) => num % 2;
 console.log(remainder(8));


 