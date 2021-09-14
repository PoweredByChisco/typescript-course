export {};
/* Union */
// 10, "10"
// let idUser: number | string;
// idUser = 10
// idUser = "10"
// /* Is to accept various types of data */

// // Find username by Id
// function getUserNameByID(id: number | string) {
//   //Bussines logic, find the user
//   return "luxana"
// }

// getUserNameByID("10")
// getUserNameByID(10)
/* There aren't error */

/* Alias types */
type IdUSer = number | string;
type Username = string;

let idUser: IdUSer;
idUser = 10;
idUser = "10";
/* Is to accept various types of data */

// Find username by Id
function getUserNameByID(id: IdUSer): Username {
  //Bussines logic, find the user
  return "luxana";
}

getUserNameByID("10");
getUserNameByID(10);

/* Literal types */
// Only pics with 100x100, 500x500, 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
let smallPicture: SquareSize = "100x100"
/* Only we can to assing the literal types that we declared before */

