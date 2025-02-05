import * as main from './main.js';

// Call the bdayWish function
main.bdayWish("Mr.", "John");

// Convert kilometers to miles
const km = 1;
console.log(`${km} kilometers is equal to ${main.convertKmToMiles(km)} miles.`);

// Calculate the square of a number
const num = 5;
console.log(`The square of ${num} is ${main.squareNumber(num)}.`);

// Reverse a string
const originalText = "NodeJS";
console.log(`The reverse of '${originalText}' is '${main.reverseString(originalText)}'.`);