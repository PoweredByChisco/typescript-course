// object
let user: object;
user = {}; // Object

user = {
  id: 1,
  username: "paparazzi",
  firstName: "Pablo",
  isPro: true
}

// Object vs object (JS Class  vs TS Type)
/* We can't to access to the properties of the object cause object vs Object doesn't the same type*/
// console.log("user.username", user.username)

const myObject = {
  id: 1,
  username: "paparazzi",
  firstName: "Pablo",
  isPro: true
}
/* When we declare TS inflict that variable as a Class JS and not as a TS type */

const isInstance = myObject instanceof Object;
console.log("isInstance", isInstance)
// Expected true
console.log("user.name", myObject.username)
/* Now don't we have an error */