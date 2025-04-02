/**
 * 05-for-in.js
 * ------------
 * Demonstrates the for...in loop, which is used to iterate over enumerable properties of an object.
 */

console.log("For...in Loop Example:");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
