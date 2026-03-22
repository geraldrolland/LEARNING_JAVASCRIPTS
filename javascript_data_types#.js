//1.
const name = "Abdul-Rahman"
//const because a name is constant and doesnt usually change

let age = "16"
//let because age can change over this

var student = "true"
// var because im suppose to use ig

//2. 

let score = 30; // can change

const maxscore = 100; //cannot change

//Reassignment
score = 60;   //works because "let" can change its value after declaration

maxscore = 120; //doesnt work because const is fixed after declaration

//3.

if (true) {
    var a = 50;

    let b = 60;

    const c = 70;
}

console.log(a); // works because var is not block scoped and ignores {}blocks like if for etc

4.

string = "A Person's name"

number = "50"

Boolean = "true or false"

undefined 
let x;

null 
let y = null;

BigInt
let big = 12234556678899;

//5.
console.log(a);//doesnt cause error becomes undefined
var a = 20;

console.log(b); //causes error
let b = 30;

//the reason is because var declarations are hoisted to the top and are initialised immediately
//  with undefined while let although hoisted its declaraions are not intialized immediately

//6.
const Person = {
    name: "Giwa",
    age: 20
};
//change property?? yes 
Person.age =25;
//add new property?? yes
Person.gender = "male"
//reassign the entire object ?? no
Person = {name: "jack", age:30 }; // error
//y this happens ??
//const means this variable will always point to the same object in memory
// it does NOT mean the object’s contents cannot change/

//7.
let a = "5";  // string

let b = "3";  // number

console.log(a + b); // "53"
//y this happens If one value is a string, JavaScript converts the other to a string too Then it joins them together/





