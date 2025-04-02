// Declaring a constant variable using 'const'
// The value of a 'const' variable cannot be reassigned after its initial assignment.

const message = 'This is a constant message.';
console.log(message);

// Attempting to reassign a 'const' variable will result in a TypeError.
// Uncommenting the following line will cause an error when you run the code.
// message = 'Trying to change the constant!';
// console.log(message);

console.log('\n--- let keyword ---');

// Declaring a variable that can be reassigned using 'let'
// The value of a 'let' variable can be changed after its initial assignment.
let counter = 0;
console.log('Initial counter:', counter);

// Reassigning the value of the 'let' variable
counter = 1;
console.log('Counter after reassignment:', counter);

counter = 10;
console.log('Counter after another reassignment:', counter);

console.log('\n--- Naming Conventions ---');

// Variable names should be descriptive and follow camelCase convention for multiple words.
let userName = 'John Doe';
const PI = 3.14159;

console.log('User Name:', userName);
console.log('Value of PI:', PI);