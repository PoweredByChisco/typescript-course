/* Create a picture */
// function createPicture(title, date, size) {
//   //title
// }
/* if we don't declare the types we cannot use the properties of each type since these types will be any type */

type SquareSize = "100x100" | "500x500" | "1000x1000";

// function createPicture(title: string, date: string, size: SquareSize) {
//   /* Picture created */
//   console.log("Create picture", title, date, size);
// }

// createPicture("Beach", "21/02/1997", "1000x1000");
/* Always need to give the same number of arguments as parameters */

/* Optional Parameters */
function createPicture(title: string, date: string, size?: SquareSize) {
  /* Picture created */
  console.log("Create picture", title, date, size);
}

createPicture("Beach", "21/02/1997");
/* Now size is optional and we could't pass him any argument */
/* Attention: if we declare a type as an optional and the subsequent parameter doesn't be optional we will an error, this is because the order of the arguments will cause confusion*/

/* Flat array funcion */
let createPic = (title: string, date: string, size?: SquareSize): object => {
  return {
    title,
    date,
    size,
  }; /* We don't give the value of each key because is the same name and position */
};

const picture = createPic("Platzi session", "2020/03/10", "100x100");
console.log("picture", picture);

/* Return types with typescript */

function handleError(code: number, message: string): never | string {
  /* Code Procces, message */
  if (message === "error") {
    throw new Error(`${message}. Code Error: ${code}`);
  } else {
    return "An error has ocurred";
  }
}

try {
  let result = handleError(200, "OK"); // string
  console.log("result", result);
  let result = handleError(404, "error"); // never
  console.log("result", result);
} catch (error) {}
