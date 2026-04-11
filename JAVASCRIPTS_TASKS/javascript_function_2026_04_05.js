//1
function square(num) {
  return num * num;
}

//2
function add(a, b) {
  return a + b;
}

//3
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//4
function getLength(str) {
  return str.length;
}

//5
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}