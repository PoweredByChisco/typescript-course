//Number
// Explicit
let phone: number;
phone = 3319165861;
// phone = "hola" /* If we put a strig value the editor give us an error */

// Inflicted
let phoneNumber = 3320331456; /* The value is inflicted directly */
// phoneNumber = true /* Error */

// Special numbers
let hex: number = 0xf00d;
let binary: number = 0b011011;
let octal: number = 0o04357123;

// Boolean
// Explicit
let isPro: boolean;
isPro = true;

// Inflicted
let isUserPro = false; /* Now this value always be boolean type */

// String
let username: string = "Luxana";
username = "fco";
// username = true /* error */

// Template Strings
let userInfo: string;
userInfo = `User Info:${username}`;
