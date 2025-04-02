/**
 * 07-array-foreach.js
 * --------------------
 * Demonstrates the Array.forEach() method, which executes a provided function once for each array element.
 */

console.log("Array forEach Method Example:");

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});
