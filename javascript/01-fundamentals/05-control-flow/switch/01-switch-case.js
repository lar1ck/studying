/**
 * 01-switch-case.js
 * ------------------
 * This file demonstrates the use of switch statements in JavaScript.
 * Switch statements provide a clean alternative for comparing one variable against many values.
 */

let day = "Friday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Tuesday":
        console.log("Second day of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek day.");
        break;
    case "Thursday":
        console.log("Almost the weekend.");
        break;
    case "Friday":
        console.log("Last work day for many.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day input.");
        break;
}
