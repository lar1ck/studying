function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}

//Basic usage
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Shyaka"); // Output: Hello, Shyaka!
greet(); // Output: Hello, Guest!

//With multiple parameters
function calculateTotal(price, tax = 0.18) {
  return price + price * tax;
}

console.log(calculateTotal(100)); // Output: 118
console.log(calculateTotal(100, 0.25)); // Output: 125

//Using expressions as defaults
function getUserInfo(
  name = "Anonymous",
  age = new Date().getFullYear() - 2000
) {
  return `Name: ${name}, Age: ${age}`;
}

console.log(getUserInfo()); // Might output: "Name: Anonymous, Age: 25"

//Parameters depending on other parameters
function multiply(x = 1, y = x * 2) {
  return x * y;
}

console.log(multiply()); // Output: 2 (1 * 2)
console.log(multiply(3)); // Output: 18 (3 * 6)

//🧨 Caveat: Default comes after
// ❌ Confusing!
function example(x = 10, y) {
  console.log(x, y);
}

example(undefined, 5); // Output: 10 5 (works, but confusing)
