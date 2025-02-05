// Function to wish someone a happy birthday
export function bdayWish(firstName, lastName) {
 console.log(`Happy Birthday ${firstName} ${lastName}!!!!🥳`);
}

// Function to convert kilometers to miles
export function convertKmToMiles(km) {
 return km * 0.621371;  // 1 km = 0.621371 miles
}

// Function to calculate the square of a number
export function squareNumber(num) {
 return num * num;
}

// Function to reverse a string
export function reverseString(str) {
 return str.split("").reverse().join("");
}