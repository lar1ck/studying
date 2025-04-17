// 01-function-declaration.js

// A function declaration defines a named function using the 'function' keyword.

// Basic syntax:
function greet() {
    console.log('Hello, world!');
  }
  
  // Calling the function
  greet(); // Output: Hello, world!
  
  // Function with parameters
  function greetUser(name) {
    console.log('Hello, ' + name + '!');
  }
  
  greetUser('Carrick'); // Output: Hello, Carrick!
  
  // Function that returns a value
  function add(x, y) {
    return x + y;
  }
  
  let result = add(5, 3);
  console.log('Sum:', result); // Output: Sum: 8
  
  // Function declarations are hoisted,
  // meaning you can call them before they are defined in the code:
  sayHi();
  
  function sayHi() {
    console.log('Hi there!');
  }
  