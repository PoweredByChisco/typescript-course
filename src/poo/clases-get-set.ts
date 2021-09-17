export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  /* Properties */
  private _id: number; /* Explicit */
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title
  }

  set title(title) {
    this.title = title
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }

  /* Behaviour */
  public toString() {
    /* Explicit */
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
  }
}


/* Const definition */


const picture: Picture = new Picture(
  1,
  "Platzi session",
  PhotoOrientation.Square
);

picture.id = 100; 
// now we can acces to him because we make uso of the setter
