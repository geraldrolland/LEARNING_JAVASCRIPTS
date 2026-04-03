//1
let amount = 140

if (amount > 100) {
    console.log("Discount applied");
} else {
    console.log("no discount")
} // correct

//2
let character = "e"

if ("aeiou".includes(character.toLowerCase)) {
    console.log("vowel");
} else {
    console.log("consonant")
} // correct

//3
let hr = 17
if (hr < 12) {
    console.log("Good Morning");
} else if (hr < 19) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
} // correct

//4
let num = -9;

//positive/negative
if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("0");
} // correct

//Even/Odd
if (num % 2 === 0) {
    console.log("Even");
}  else {
    console.log("odd");
} // correct

//5
let a = 1, b = 2, c = 3;

if (a + b >= c && a + c > b && b + c > a) {
    console.log("valid triangle");
} else {
    console.log("Invalid triangle")
} // correct

//6
let number = 35;

if (number >= 10 && number <=50) {
    console.log("within range");
} else {
    console.log("out of range");
} // correct

//7
let enteredpassword = "12345";
let actualpassword = "12345";

if (enteredpassword === actualpassword) {
    console.log("access granted");
} else {
    console.log("access denied");
} // correct


 /* task on conditionals create file called javascript_conditionals_task_2026_03_28.js:
 * 1) Discount Eligibility
Apply a discount if a purchase amount exceeds a certain value.
Character Type Check
Determine if a character is a vowel or consonant.
Time Greeting
Display greeting based on time (morning, afternoon, evening).
Number Sign and Parity
Check if a number is positive/negative and even/odd.
Triangle Validity
Check if three given sides can form a valid triangle
Number Range Check
Check if a number falls within a specific range (e.g., 10–50).
Password Validation
Verify if the entered password matches the correct one.
 */
