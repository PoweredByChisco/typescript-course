export {};
// [1, "user"]
let user: [number, string];
// if we have an error en use is because user is used in another file into the same context that this file
user = [1, "luxana"];
console.log("user", user)
console.log("username", user[1])
console.log("username", user[1].length)

// Tuple with various values
let userInfo: [number, string, boolean];
userInfo = [2, "paparazzi", true]
// We always need the same number of variables that we declared in typescript

// Array of tuples
let array: [number, string][] = [];
array.push([1, "luxana"])
array.push([2, "paparazzi"])
array.push([3, "Lensqueen"])

// Use of array's functions
array[2][1] = array[2][1].concat("001")