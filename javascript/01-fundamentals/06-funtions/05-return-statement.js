function functionName() {
  return value;
}


// Returning a number
function add(a, b) {
    return a + b;
  }
  
  let result = add(5, 3);
  console.log(result); // Output: 8

  
  //Example 2: Returning a string
  function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Carrick')); // Output: Hello, Carrick!

  
  //Early return (exit function early)
  function checkAge(age) {
    if (age < 18) {
      return 'Access denied';
    }
    return 'Access granted';
  }
  
  console.log(checkAge(15)); // Output: Access denied

  
  // Returning an object
  function createUser(username, age) {
    return {
      name: username,
      age: age,
      isAdmin: false
    };
  }
  
  console.log(createUser('Alice', 22));
  // Output: { name: 'Alice', age: 22, isAdmin: false }

  
  //Returning a function (advanced)
  function multiplier(x) {
    return function(y) {
      return x * y;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5)); // Output: 10
