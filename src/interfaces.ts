// Function to show a picture
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}], date: ${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
  title: "test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
  title: "Test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Portrait,
});

/* Optional Properties */

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}
/* These are optional pictures */

function generatePicture(config: PictureConfig) {
  const pic = { title: "default", date: "2020-03" };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: "travel pic" });

/* Interface: Read only properties */

interface User {
  readonly id: number; /* With readonly we don't modificate this */
  username: string;
  isPro: boolean;
}

let user: User
user = {id: 10, username: "luxana", isPro: true}
console.log("user", user)
user.username = "paparazzi"
// user.id = 23 /* Error */
console.log("user", user)

