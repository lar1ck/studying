console.log('--- Arithmetic Operators ---');

let num1 = 10;
let num2 = 5;

console.log('Addition:', num1 + num2); // 15
console.log('Subtraction:', num1 - num2); // 5
console.log('Multiplication:', num1 * num2); // 50
console.log('Division:', num1 / num2); // 2
console.log('Modulus (Remainder):', num1 % num2); // 0
console.log('Increment (Postfix):', num1++); // 10 (num1 becomes 11 after)
console.log('Decrement (Prefix):', --num2); // 4 (num2 becomes 4 before)
console.log('Current num1:', num1); // 11
console.log('Current num2:', num2); // 4

console.log('\n--- Assignment Operators ---');

let x = 7;
console.log('Initial x:', x);

x += 3; // Equivalent to x = x + 3
console.log('x += 3:', x); // 10

x -= 2; // Equivalent to x = x - 2
console.log('x -= 2:', x); // 8

x *= 4; // Equivalent to x = x * 4
console.log('x *= 4:', x); // 32

x /= 2; // Equivalent to x = x / 2
console.log('x /= 2:', x); // 16

x %= 5; // Equivalent to x = x % 5
console.log('x %= 5:', x); // 1

console.log('\n--- Comparison Operators ---');

let a = 10;
let b = '10';
let c = 5;

console.log('Loose Equality (==):', a == b); // true (type coercion) [1]
console.log('Strict Equality (===):', a === b); // false (no type coercion, different types) [1]
console.log('Not Equal (!=):', a != c); // true
console.log('Strict Not Equal (!==):', a !== b); // true
console.log('Greater Than (>):', a > c); // true [1]
console.log('Less Than (<):', c < a); // true [1]
console.log('Greater Than or Equal To (>=):', a >= b); // true (type coercion then comparison) [1]
console.log('Less Than or Equal To (<=):', c <= a); // true [1]

console.log('\n--- Logical Operators ---');

let sunny = true;
let warm = false;

console.log('Logical AND (&&):', sunny && warm); // false (both must be true) [1, 2]
console.log('Logical OR (||):', sunny || warm); // true (at least one must be true) [1-3]
console.log('Logical NOT (!):', !sunny); // false (inverts the boolean value) [1-3]

console.log('\n--- Other Operators ---');

// Ternary (Conditional) Operator: shorthand for if...else [1]
let age = 20;
let canDrive = age>= 16 ? 'Yes' : 'No';
console.log('Can drive?', canDrive)

// typeof Operator: Returns the data type of an operand (already seen)

// Nullish Coalescing Operator (??): Returns the right-hand side operand when the left-hand side operand is null or 

let userName;
let defaultName = 'Guest';
let currentName = userName ?? defaultName;

console.log('The current user name is:', currentName)

userName = 'Alice';
currentName = userName ?? defaultName;
console.log('The current user name is:', currentName);