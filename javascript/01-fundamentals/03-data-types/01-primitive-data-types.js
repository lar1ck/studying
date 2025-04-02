// Primitive datatypes

// Strings: represents texual Data
const singleQuoteString = 'Hello, JavaScript!';
const doubleQuoteString = "This is another string.";
const templateLiteralString = `You can also embed text like this: ${singleQuoteString}`;

console.log('--- Strings ---');
console.log('Single Quote:', singleQuoteString, typeof singleQuoteString);
console.log('Double quote:', doubleQuoteString, typeof doubleQuoteString);
console.log('Template literal:', templateLiteralString, typeof templateLiteralString);

console.log('\n--- Numbers ---');
// 2. Number: Represents numeric data, including integers and floating-point numbers.
const integerNumber = 10;
const floatNumber = 3.14;

console.log('Integer:', integerNumber, typeof integerNumber);
console.log('Float:', floatNumber, typeof floatNumber);

console.log('\n--- Booleans ---');
// 3. Boolean: Represents a logical value, either true or false.
const isTrue = true;
const isFalse = false;

console.log('True:', isTrue, typeof isTrue);
console.log('False:', isFalse, typeof isFalse);

console.log('\n--- Null ---');
// 4. Null: Represents intentional abscence of a value.
const nullValue = null;
console.log('Null:', nullValue, typeof nullValue); // Note: typeof null is an historical bug and returns "object"

console.log('\n--- Undefined ---');
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
let undefinedVariable;
const alsoUndefined = undefined;

console.log('Undefined variable:', undefinedVariable, typeof undefinedVariable);
console.log('Explicitly undefined:', alsoUndefined, typeof alsoUndefined);
console.log('\n--- typeof operator ---');

// The typeof operator can be used to determine the data type of a variable.
let exampleVariable = 42;
console.log('Type of exampleVariable:', typeof exampleVariable);

exampleVariable = 'Now it\'s a string';
console.log('Type of exampleVariable:', typeof exampleVariable);

exampleVariable = true;
console.log('Type of exampleVariable:', typeof exampleVariable);