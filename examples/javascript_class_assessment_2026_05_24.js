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

//3 Leap Year calender
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

//4 Traffic Light Simulator
function trafficLight(color) {
    switch (color.toLowercase()) {
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

//5 Number Guessing Game

const secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {
    guess++;
    console.log(`Trying: $(guess}`);
}