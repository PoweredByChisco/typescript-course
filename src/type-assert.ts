export {};
// <type> Angle bracket syntax
let username: any;
username = "luxana";

// We have a string, TS trust me
let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : "Username is too short";
console.log("Message ", message);
/* If we don't force with the incertion type we can't access to the array properties or methods */

let usernameWithId: any = "luxana 1";
/* How to get username? */
username = (<string>usernameWithId).substring(0, 10);
console.log("Username only", username);

/* as syntax */
message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : "Username is too short";

let helloUser: any;
helloUser = "Hello paparazzi";
username = (helloUser as string).substring(6);
console.log("username", username);
