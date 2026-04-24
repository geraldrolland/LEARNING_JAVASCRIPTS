//1
const student = {
  name: "Abdul",
  age: 20,
  grade: "A"
};

// Access properties
console.log(student.name);   // Abdul
console.log(student.age);    // 20
console.log(student.grade);  // A

//2
student.school = "UI";  // University of Ibadan (example)

console.log(student);
// { name: "Abdul", age: 20, grade: "A", school: "UI" }

//3
student.grade = "A+";

console.log(student.grade); // A+

//4
delete student.age;

console.log(student.age); // undefined

// Check if property still exists
console.log("age" in student); // false

//5
const user = {
  name: "Abdul",
  age: 20,
  address: {
    street: "Bodija Road",
    city: "Ibadan",
    country: "Nigeria"
  }
};

// Access nested values
console.log(user.address.city);     // Ibadan
console.log(user.address.country);  // Nigeria