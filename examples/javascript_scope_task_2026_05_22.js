
// 
// TASK 1 - Variable Hoisting with var, let, and const
// 

console.log("========== TASK 1 ==========");

// Using var
console.log(myVar); // Prediction: undefined
var myVar = "Hello from var";

console.log(myVar);

/*
Explanation:
- var declarations are hoisted to the top of their scope.
- During the creation phase, JavaScript allocates memory for myVar
  and initializes it with undefined.
- Therefore, accessing it before assignment gives undefined.
*/


// Using let
try {
    console.log(myLet); // Prediction: ReferenceError
    let myLet = "Hello from let";
} catch (error) {
    console.log("Error with let:", error.message);
}

/*
Explanation:
- let is hoisted but not initialized.
- It stays inside the Temporal Dead Zone (TDZ)
  until the declaration line is reached.
- Accessing it before declaration throws a ReferenceError.
*/


// Using const
try {
    console.log(myConst); // Prediction: ReferenceError
    const myConst = "Hello from const";
} catch (error) {
    console.log("Error with const:", error.message);
}

/*
Explanation:
- const behaves similarly to let.
- It is hoisted but remains in the TDZ.
- Accessing it before declaration throws a ReferenceError.
*/


// 
// TASK 2 - Function Declaration vs Function Expression
//

console.log("\n========== TASK 2 ==========");

// Function Declaration
greetUser();

function greetUser() {
    console.log("Hello from function declaration!");
}

/*
Explanation:
- Function declarations are fully hoisted.
- The entire function definition is stored in memory during creation phase.
- Therefore, it works even before its position in the file.
*/


// Function Expression
try {
    sayGoodbye();
} catch (error) {
    console.log("Function Expression Error:", error.message);
}

var sayGoodbye = function () {
    console.log("Goodbye from function expression!");
};

/*
Explanation:
- Only the variable declaration (var sayGoodbye) is hoisted.
- It is initialized as undefined during creation phase.
- Therefore, calling it before assignment causes:
  "sayGoodbye is not a function"
*/


//
// TASK 3 - Login Validation Flow with Hoisting
// 

console.log("\n========== TASK 3 ==========");

// Login flow using hoisted function declarations

loginUser("admin", "1234");

function loginUser(username, password) {
    if (isValidUsername(username) && isValidPassword(password)) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials.");
    }
}

function isValidUsername(username) {
    return username === "admin";
}

function isValidPassword(password) {
    return password === "1234";
}

/*
Explanation:
- All helper functions are function declarations.
- Function declarations are fully hoisted.
- Therefore, they can be called before they appear in the file.
*/


// Function Expression Version
try {
    loginUserExpression("admin", "1234");
} catch (error) {
    console.log("Login Flow Error:", error.message);
}

var loginUserExpression = function (username, password) {
    if (checkUsername(username) && checkPassword(password)) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials.");
    }
};

var checkUsername = function (username) {
    return username === "admin";
};

var checkPassword = function (password) {
    return password === "1234";
};

/*
Explanation:
- Variables declared with var are hoisted as undefined.
- Function expressions are NOT fully hoisted.
- The actual function value is assigned only during execution.
- Calling them before assignment results in errors.
*/


//
// TASK 4 - Same Variable Name in Different Scopes
//
console.log("\n========== TASK 4 ==========");

// Global Scope
console.log(globalVar); // undefined
var globalVar = "Global Scope";

function testScope() {

    // Function Scope with var
    console.log(functionVar); // undefined
    var functionVar = "Function Scope";

    // Block Scope with let
    try {
        console.log(blockVar); // ReferenceError
        let blockVar = "Block Scope";
    } catch (error) {
        console.log("Block Scope Error:", error.message);
    }

    // Nested Block
    {
        try {
            console.log(innerBlockVar); // ReferenceError
            const innerBlockVar = "Inner Block";
        } catch (error) {
            console.log("Inner Block Error:", error.message);
        }
    }
}

testScope();

/*
Explanation:
- var variables are hoisted and initialized with undefined.
- let and const are hoisted but remain in TDZ.
- TDZ prevents access before declaration.
*/


//
// TASK 5 - Debugging Unexpected undefined Outputs
//
console.log("\n========== TASK 5 ==========");

var x = 10;

function debugExample() {

    console.log("Value of x before declaration:", x);

    var x = 20;

    console.log("Value of x after assignment:", x);

    function innerDebug() {
        console.log("Inside innerDebug:", y);

        var y = 50;

        console.log("After assigning y:", y);
    }

    innerDebug();
}

debugExample();

/*
STEP-BY-STEP EXECUTION:

CREATION PHASE:
1. Global memory is created.
2. x is allocated memory and initialized as undefined.
3. debugExample is fully stored in memory.

EXECUTION PHASE:
1. x is assigned 10.
2. debugExample() is called.

Inside debugExample CREATION PHASE:
1. Local variable x is hoisted and initialized as undefined.
2. innerDebug function is stored in memory.

Inside debugExample EXECUTION:
1. First console.log prints undefined
   because local x shadows global x.
2. x becomes 20.
3. Second console.log prints 20.

Inside innerDebug CREATION PHASE:
1. y is hoisted and initialized as undefined.

Inside innerDebug EXECUTION:
1. First console.log prints undefined.
2. y becomes 50.
3. Second console.log prints 50.

Key Idea:
- Hoisting moves declarations to the top of their scope.
- var becomes undefined during creation phase.
- let and const remain uninitialized in TDZ.
- Function declarations are fully hoisted.
- Function expressions behave like variables.
*/