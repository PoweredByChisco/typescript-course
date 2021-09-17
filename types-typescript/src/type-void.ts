// Void
// Explicit
function showInfo(user: any): any {
  /* The :any after the funcion indicates the type that the function returns */
  console.log("User Info", user.id, user.username, user.firstName);
}

showInfo({ id: 1, username: "Luxana", firstName: "Luis" });

// Inflicted
function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
      id: ${user.id}
      username: ${user.username}
      firstName: ${user.firstName}
  `
  );
}

showFormattedInfo({ id: 1, username: "Luxana", firstName: "Luis" });

// Void as data type in a variable
let unusable: void;
unusable = null;
/* If the strict mode is true in tsconfig, null will have an error, hovewer null and undefined is a kind of subtypes from void */
unusable = undefined;

// Never

function handleError(code: number, message: string): never {
  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
} /* Never returns a value, only spread an error */

try {
  handleError(404, "Not Found");
} catch (error) {}

// The next function NEVER ends
function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);
