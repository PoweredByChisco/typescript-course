export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}
/* With extends we inherited of other Interface */

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: "Meetups",
  description: "Community events around the world"
}

const picture: Picture = {
  id: 2,
  title: "Family",
  orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture
/* Ascercion of types */
newPicture.id = 2;
newPicture.title = "now"

