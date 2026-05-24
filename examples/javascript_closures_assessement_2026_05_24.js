// 
// 1. Counter Function with Closure
// 

function createCounter() {
    let count = 0; // private variable

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



// 
// 2. Game Score Tracker with Private Score
// 

function createScoreTracker() {
    let score = 0; // private variable

    return {
        increase(points) {
            score += points;
            console.log("Score increased:", score);
        },

        decrease(points) {
            score -= points;
            console.log("Score decreased:", score);
        },

        reset() {
            score = 0;
            console.log("Score reset:", score);
        }
    };
}

const game = createScoreTracker();

game.increase(10);
game.increase(5);
game.decrease(3);
game.reset();



//
// 3. Banking Balance System with Closure
// 

function createBankAccount() {
    let balance = 0; // private balance

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log(`Withdrawn: $${amount}`);
            }
        },

        checkBalance() {
            console.log(`Current Balance: $${balance}`);
        }
    };
}

const account = createBankAccount();

account.deposit(500);
account.withdraw(200);
account.checkBalance();



//
// 4. Greeting Generator with Saved Language
// 

function createGreeting(language) {

    return function (name) {

        if (language === "English") {
            return `Hello, ${name}!`;
        }

        else if (language === "French") {
            return `Bonjour, ${name}!`;
        }

        else if (language === "Spanish") {
            return `Hola, ${name}!`;
        }

        else {
            return `Hi, ${name}!`;
        }
    };
}

const englishGreeting = createGreeting("English");
const frenchGreeting = createGreeting("French");

console.log(englishGreeting("John"));
console.log(frenchGreeting("Marie"));