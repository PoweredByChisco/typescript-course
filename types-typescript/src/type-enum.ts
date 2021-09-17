// Pictures orientation
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
/* This is an enum, but we can express this in a special type */

enum photoOrientation {
  landscape,
  portrait,
  square,
  panorama
}


const landscape: photoOrientation = photoOrientation.landscape
console.log("landscape", landscape)
console.log("landscape", photoOrientation[0])
/* If we access by index, we obtain the name of the valua and not the index position */

/* Enum custom */

enum pictureOrientation {
  landscape = 10,
  portrait = 5,
  square, //6
  panorama //7
} /* The next values are inflicted consecutively */
console.log(pictureOrientation.square)

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  Espana = "esp"
}

const country = Country.Bolivia
