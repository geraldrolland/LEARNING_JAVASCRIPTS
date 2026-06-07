//1
function calculateDiscount(price, callback) {
    return callback(price);
}

function applyDiscount(price) {
    return price - (price * 0.10); // 10% discount
}
console.log(calculateDiscount(5000, applyDiscount));


//2
function processSalary(salary, callback) {
    return callback(salary);
}

function deductTax(salary) {
    return salary - (salary * 0.15); // 15% discount
}
console.log(processSalary(1000000000,deductTax));


//3
function login(username, password, successCallback, failedCallback) {
    const validUsername = "admin";
    const validPassword = "1234";

    if  (username === validUsername && password === validPassword) {
        successCallback();
    } else {
        failureCallback();
    }
}

function loginsuccess() {
    console.log("login Successful")
}

function loginFailure() {
    console.log("Invalid Username or Password");
}

login("admin", "1234", loginsuccess, loginFailure);
login("user", "11111", loginsuccess, loginFailure);


//4
function getAverage(ratings) {
    let total = ratings.reduce((sum, ratings) => sum + ratings, 0);
    return total / ratings.length;
}

function getHighest(ratings) {
    return Math.max(...ratings);
} 

function getLowest(ratings) {
    return Math.min(...ratings);
}
const ratings = [4, 5, 3, 2, 6, 5]

