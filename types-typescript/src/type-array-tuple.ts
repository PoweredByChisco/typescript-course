// Brackets
// Explicit
let users: string[];
users = ["luxana", "paparazzi", "lensqueen"];
// users = [1, true, "test"] /* Error */

// Inflected
let otherUsers = ["luxana", "paparazzi", "lensqueen"];

// Array[type]
let picturesTitles: Array<string>;
picturesTitles = ["Favorite", "sunset", "beach"];

// Access to values from an Array
console.log("firstUser", users[2]);

// Array properties
console.log("users.length", users.length);

// Array's functions
users.push("aPlatziUser");
users.sort();
console.log("users", users);
