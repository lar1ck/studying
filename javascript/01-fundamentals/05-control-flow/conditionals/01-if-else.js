/**
 * 01-if-else.js
 * -------------
 * This file demonstrates the use of if, else if, and else statements.
 * It shows how to control program flow based on conditions.
 */

// Example: Determine the weather message based on temperature.
let temperature = 18;

if (temperature > 30) {
    // If the temperature is greater than 30°C, it's hot.
    console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
    // If temperature is between 20°C and 30°C, it's warm.
    console.log("It's a warm day!");
} else {
    // Otherwise, it's cool.
    console.log("It's a cool day!");
}
