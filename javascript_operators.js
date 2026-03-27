/**
 * Assignment operator (=): this is used for assigning value to a variable.
 * Arithmetic operators (+, -, *, /, %): these are used for performing arithmetic operations.
 * Comparison operators (==, ===, !=, !==, >, <, >=, <=): these are used for comparing values.
 * Logical operators (&&, ||, !): these are used for performing logical operations.
 * Bitwise operators (&, |, ^, ~, <<, >>, >>>): these are used for performing bitwise operations.
 * Ternary operator (condition ? expr1 : expr2): this is a shorthand for an if-else statement.
 */

/**
 * The assignment operator (=) is used to assign a value to a variable. For example:
 * let x = 5;
 */

let x = 5;

/** * The arithmetic operators are used to perform arithmetic operations. For example:
 * let a = 10;
 * let b = 5;
 * let c = a + b; // c will be 15
 */

let a = 10;
let b = 5;
let c = a + b; // c will be 15


// modulus operator (%) returns the remainder of a division operation. For example:
let d = 10 % 3; // d will be 1, because 10 divided by 3 is 3 with a remainder of 1


/**
 * The comparison operators are used to compare values. For example:
 * let e = 5;
 * let f = 10;
 * console.log(e == f); // false
 * console.log(e < f); // true
 * console.log(e > f); // false
 */

let e = 5;
let f = 10;
console.log(e == f); // false
console.log(e < f); // true
console.log(e > f); // false

/***
 * The logical operators are used to perform logical operations. For example:
 * let g = true;
 * let h = false;
 * console.log(g && h); // false
 * console.log(g || h); // true
 * console.log(!g); // false
 */

let g = true;
let h = false;
// logical AND (&&) returns true if both operands are true, otherwise it returns false. In this case, since g is true and h is false, the result of g && h will be false.
console.log(g && h); // false  Note: In a logical And all statement must be true for the result to be true

// logical OR (||) returns true if at least one of the operands is true, otherwise it returns false. In this case, since g is true, the result of g || h will be true.
console.log(g || h); // true Note: In a logical Or at least one statement must be true for the result to be true

// logical NOT (!) returns true if the operand is false, and false if the operand is true. In this case, since g is true, the result of !g will be false.
console.log(!g); // false


/***
 * The bitwise operators are used to perform bitwise operations on binary numbers. For example:
 * let i = 5; // in binary: 0101
 * let j = 3; // in binary: 0011
 * console.log(i & j); // 1 (in binary: 0001)
 */

// bitwise AND (&) performs a bitwise AND operation on each pair of corresponding bits of the operands. In this case, since i is 5 (in binary: 0101) and j is 3 (in binary: 0011), the result of i & j will be 1 (in binary: 0001).
let i = 5; // in binary: 0101
let j = 3; // in binary: 0011
console.log(i & j); // 1 (in binary: 0001)
/**
 * &
 * 5 -> 0101
 * 3 -> 0011
 * -----------
 * 1 -> 0001
 */

// bitwise OR (|) performs a bitwise OR operation on each pair of corresponding bits of the operands. In this case, since i is 5 (in binary: 0101) and j is 3 (in binary: 0011), the result of i | j will be 7 (in binary: 0111).
console.log(i | j); // 7 (in binary: 0111)
/**
 * |
 * 5 -> 0101
 * 3 -> 0011
 * -----------
 * 7 -> 0111
 */

// bitwise XOR (^) performs a bitwise exclusive OR operation on each pair of corresponding bits of the operands. In this case, since i is 5 (in binary: 0101) and j is 3 (in binary: 0011), the result of i ^ j will be 6 (in binary: 0110).
console.log(i ^ j); // 6 (in binary: 0110)
/**
 * ^
 * 5 -> 0101
 * 3 -> 0011
 * -----------
 * 6 -> 0110
 */

// bitwise NOT (~) performs a bitwise NOT operation on each bit of the operand. In this case, since i is 5 (in binary: 0101), the result of ~i will be -6 (in binary: 1010).
console.log(~i); // -6 (in binary: 1010)
/**
 * ~
 * 5 -> 0101
 * -----------
 * -6 -> 1010
 */


// bitwise left shift (<<) shifts the bits of the first operand to the left by the number of positions specified by the second operand. In this case, since i is 5 (in binary: 0101), the result of i << 1 will be 10 (in binary: 1010).
console.log(i << 1); // 10 (in binary: 1010)
/**
 * <<
 * 5 -> 0101
 * -----------
 * 10 -> 1010
 */

// bitwise right shift (>>) shifts the bits of the first operand to the right by the number of positions specified by the second operand. In this case, since i is 5 (in binary: 0101), the result of i >> 1 will be 2 (in binary: 0010).
console.log(i >> 2); // 2 (in binary: 0010)
/**
 * >>
 * 5 -> 0101
 * -----------
 * 2 -> 0010
 */

// bitwise unsigned right shift (>>>) shifts the bits of the first operand to the right by the number of positions specified by the second operand, and fills the leftmost bits with zeros. In this case, since i is 5 (in binary: 0101), the result of i >>> 1 will be 2 (in binary: 0010).
console.log(i >>> 1); // 2 (in binary: 0010)

/**
 * >>>
 * 5 -> 0101
 * -----------
 * 2 -> 0010
 */

/**
 * The ternary operator (condition ? expr1 : expr2) is a shorthand for an if-else statement. It evaluates the condition, and if it is true, it returns expr1; otherwise, it returns expr2. For example:
 * let k = 5;
 * let l = k > 0 ? "positive" : "non-positive";
 */

let stmt1 = true;
let stmt2 = false;

let result = stmt2 ? 1 : 0; // result will be 0 because stmt2 is false
console.log(result); // Output: 0

let result2 = stmt1 ? "Yes" : "No"; // result2 will be "Yes" because stmt1 is true
console.log(result2); // Output: "Yes"

let age = 18;

let is_adult = age >= 18 ? "Yes" : "No"; // is_adult will be "Yes" because age is greater than or equal to 18
console.log(is_adult); // Output: "Yes"