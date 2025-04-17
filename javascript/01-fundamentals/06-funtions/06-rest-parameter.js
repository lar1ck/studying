// 06-rest-parameter.js
// Rest parameters allow you to represent an indefinite number of arguments as an array.

console.log("--- Rest Parameter ---");

// 1️⃣ Basic Syntax of Rest Parameter
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log("Total", total);
}

sum(1, 2, 3); // Output: Total: 6
sum(4, 5, 6, 7, 8); // Output: Total: 30

// 2️⃣ Rest Parameters and Other Parameters
function displayPersonInfo(name, age, ...hobbies) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log("Hobbies:", hobbies);
}

displayPersonInfo("Alice", 30, "Reading", "Hiking", "Swimming");
// Output:
// Name: Alice, Age: 30
// Hobbies: [ 'Reading', 'Hiking', 'Swimming' ]

// 3️⃣ Combining Rest Parameters with Default Parameters
function createProfile(username, age = 18, ...interests) {
  console.log(`Username: ${username}, Age: ${age}`);
  console.log("Interests:", interests);
}

createProfile("Carrick", 22, "Coding", "Music");
// Output:
// Username: Carrick, Age: 22
// Interests: [ 'Coding', 'Music' ]

createProfile("John");
// Output:
// Username: John, Age: 18
// Interests: []
