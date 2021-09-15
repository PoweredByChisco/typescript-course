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
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = {title: "default"}
  if(config.title){
    pic.title = config.title
  }
}