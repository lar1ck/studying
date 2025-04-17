// 02-function-expression.js

// A function expression is when a function is assigned to a variable.
// These functions can be named or anonymous.

// Anonymous function expression
const sayHello = function () {
    console.log('Hello from a function expression!');
  };
  
  sayHello(); // Output: Hello from a function expression!
  
  // Function expression with parameters
  const square = function (num) {
    return num * num;
  };
  
  console.log('Square of 4:', square(4)); // Output: 16
  
  // Named function expression (rare, used for recursion/debugging)
  const factorial = function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1); // Recursive call using the name 'fact'
  };
  
  console.log('Factorial of 5:', factorial(5)); // Output: 120
  
  // 🔥 Key Difference from Function Declaration:
  // Function expressions are NOT hoisted.
  // So you cannot call them before they are defined.
  
  try {
    callBeforeDefinition(); // ❌ This will throw a ReferenceError
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  const callBeforeDefinition = function () {
    console.log('This comes after definition.');
  };
  