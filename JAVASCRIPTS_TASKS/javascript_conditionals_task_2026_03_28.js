//1
let amount = 140

if (amount > 100) {
    console.log("Discount aoolied");
} else {
    console.log("no discount")
}

//2
let character = "e"

if ("aeiou".includes(character.toLowerCase)) {
    console.log("vowel");
} else {
    console.log("consonant")
}

//3
let hr = 17
if (hr <12) {
    console.log("Good Morning");
} else if (hr <19) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

//4
let num = -9;

//positive/negative
if (num > 0) {
    console.log("positive");
} else if (num <0) {
    console.log("negative");
} else {
    console.log("0");
}

//Even/Odd
if (num % 2 === 0) {
    console.log("Even");
}  else {
    console.log("odd");
}

//5
let a = 1, b = 2, c = 3;

if (a + b >= c && a + c > b && b + c > a) {
    console.log("valid triangle");
} else {
    console.log("Invalid triangle")
}

//6
let number = 35;

if (number >= 10 && number <=50) {
    console.log("within range");
} else {
    console.log("out of range");
}

//7
let enteredpassword = "12345";
let actualpassword = "12345";

if (enteredpassword === actualpassword) {
    console.log("access granted");
} else {
    console.log("access denied");
}
