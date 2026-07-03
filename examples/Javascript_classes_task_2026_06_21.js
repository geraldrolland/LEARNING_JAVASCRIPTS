class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// 
const person1 = new Person("Abdul", 16);
person1.introduce();

//2
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₦${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₦${amount}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  checkBalance() {
    console.log(`Current Balance: ₦${this.balance}`);
  }
}

//
const account = new BankAccount("Abdul", 5000);

account.deposit(2000);
account.withdraw(1500);
account.checkBalance();

//3
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₦${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₦${amount}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  checkBalance() {
    console.log(`Current Balance: ₦${this.balance}`);
  }
}

// 
const account = new BankAccount("Abdul", 5000);

account.deposit(2000);
account.withdraw(1500);
account.checkBalance();


//4
class Student {
  constructor(name, course, score) {
    this.name = name;
    this.course = course;
    this.score = score;
  }

  checkResult() {
    if (this.score >= 50) {
      console.log(`${this.name} passed.`);
    } else {
      console.log(`${this.name} failed.`);
    }
  }
}

// Example
const student1 = new Student("Aisha", "Computer Science", 78);
student1.checkResult();

const student2 = new Student("John", "Mathematics", 42);
student2.checkResult();

//5
class LibraryBook {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is currently unavailable.`);
    }
  }

  returnBook() {
    this.available = true;
    console.log(`You returned "${this.title}".`);
  }

  checkStatus() {
    if (this.available) {
      console.log(`"${this.title}" is available.`);
    } else {
      console.log(`"${this.title}" is borrowed.`);
    }
  }
}

// Example
const book1 = new LibraryBook("The Alchemist", "Paulo Coelho");

book1.checkStatus();
book1.borrowBook();
book1.checkStatus();
book1.returnBook();
book1.checkStatus();
