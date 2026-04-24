//6
const student = { name: "Abdul", age: 20, grade: "A" };

for (let key in student) {
  console.log(key, ":", student[key]);
} // correct

//7
const count = Object.keys(student).length;
console.log(count); // 3
// correct
//8
console.log("name" in student); // true
console.log(student.hasOwnProperty("age")); // true
console.log("school" in student); // false
// correct

//9
const student = {
  name: "Abdul",
  age: 20,
  grade: "A",
  getInfo() {
    return `${this.name} is ${this.age} years old and got grade ${this.grade}`;
  }
};

console.log(student.getInfo());
// correct

//10
const products = [
  { name: "Phone", price: 200 },
  { name: "Laptop", price: 800 },
  { name: "Headphones", price: 50 }
];

//11
console.log(products[1].price); // 800
// correct

//12
products.sort((a, b) => a.price - b.price);
console.log(products);
// correct

//13 
const obj1 = { name: "Abdul", age: 20 };
const obj2 = { age: 25, grade: "A" };

const merged = { ...obj1, ...obj2 };
// correct

console.log(merged);
// age becomes 25 (obj2 overrides obj1)

//14 
const original = { name: "Abdul", age: 20 };

const clone = { ...original };

clone.age = 30;

console.log(original.age); // 20 (unchanged)
console.log(clone.age);    // 30
// correct

//15
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
// correct

//16
const sentence = "this is a test this is simple";
const words = sentence.split(" ");

const count = {};

for (let word of words) {
  count[word] = (count[word] || 0) + 1;
}

console.log (count);
// { this: 2, is: 2, a: 1, test: 1, simple: 1 }
// correct

//17
const obj = { name: "Abdul" };

Object.freeze(obj);

obj.name = "Changed";

console.log (obj.name); // still "Abdul"
// correct

//18
function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = new Student("Abdul", 20);
const s2 = new Student("Tunde", 22);

console.log(s1, s2);
// correct

//19
const students = [
  { name: "A", grade: "A" },
  { name: "B", grade: "B" },
  { name: "C", grade: "A" }
];

const grouped = {};

students.forEach(s => {
  if (!grouped[s.grade]) {
    grouped[s.grade] = [];
  }
  grouped[s.grade].push(s);
});

console.log(grouped);
// correct

//20
const obj = { a: 1, b: 2 };

const entries = Object.entries(obj);
console.log(entries); // [["a", 1], ["b", 2]]

const backToObject = Object.fromEntries(entries);
console.log(backToObject);
// correct