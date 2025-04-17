// 03-arrow-functions.js

// Arrow functions are a shorter syntax for writing function expressions.

// 1️⃣ Basic Syntax
const greet = () => {
    console.log('Hello from an arrow function!');
  };
  greet(); // Output: Hello from an arrow function!
  
  // 2️⃣ Arrow function with parameters
  const add = (a, b) => {
    return a + b;
  };
  console.log('5 + 3 =', add(5, 3)); // Output: 8
  
  // 3️⃣ Single-line return (implicit return)
  const multiply = (x, y) => x * y;
  console.log('4 * 2 =', multiply(4, 2)); // Output: 8
  
  // 4️⃣ One parameter (no parentheses needed)
  const square = n => n * n;
  console.log('Square of 6:', square(6)); // Output: 36
  
  // 5️⃣ Returning an object (wrap object in parentheses)
  const createUser = (name, age) => ({ name, age });
  console.log(createUser('Shyaka', 18)); // Output: { name: 'Shyaka', age: 18 }
  
  // ⚠️ Arrow Functions and `this`
  // Arrow functions DO NOT have their own `this`.
  // They inherit `this` from the surrounding context.
  
  const person = {
    name: 'Shyaka',
    sayName: function () {
      console.log('My name is', this.name); // Works correctly
    },
    sayNameArrow: () => {
      console.log('My name is', this.name); // ❌ Undefined (this is from outer scope, not person object)
    },
  };


  person.sayName();      // My name is Shyaka
  person.sayNameArrow(); // My name is undefined
  