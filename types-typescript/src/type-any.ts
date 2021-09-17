// Explicit
let idUser: any;
idUser = 1; // number
idUser = "1";

// Inflicted
let otherId; /* If we declare without any type, javascript inflicted this as an any type */
otherId = 1;
otherId = "1";

let surprise: any = "hello typescript";
// This isn't recomended cause if the variable receives another type of value we will have an error
const res = surprise.substring(6); /* With substring we access to the rest of the string from index 6 */
