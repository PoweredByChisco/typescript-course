export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  /* Properties */
  public id: number; /* Explicit */
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  /* Behaviour */
  public toString() { /* Explicit */
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
} /* This class require another class of the type Picture if we want to use the method addPicture */

/* Const definition */

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(
  1,
  "Platzi session",
  PhotoOrientation.Square
);
album.addPicture(picture);

/* We chain each object into another object related  */
console.log("Album", album);

/* Accessing to public members */
/* If we want to modificate the properties of an object we can do it, but this is because the default setting o each properties is public, hovewer we can change those to private and cannot modify outsite of the class ambit*/
picture.id = 100;
