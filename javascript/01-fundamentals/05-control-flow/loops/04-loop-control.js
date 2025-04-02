/**
 * 04-loop-control.js
 * -------------------
 * This file demonstrates the use of loop control statements: break and continue.
 * - 'break' exits the loop entirely.
 * - 'continue' skips the current iteration and moves to the next.
 */

// ----- Break Example -----
console.log("Break Statement Example:");
for (let k = 1; k <= 10; k++) {
    if (k === 4) {
        // Exit the loop when k is 4.
        break;
    }
    console.log(`Current value: ${k}`);
}

// ----- Continue Example -----
console.log("Continue Statement Example:");
for (let m = 1; m <= 10; m++) {
    if (m % 2 === 0) {
        // Skip even numbers.
        continue;
    }
    console.log(`Odd number: ${m}`);
}
