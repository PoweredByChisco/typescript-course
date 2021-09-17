export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

/* SupperClass */

abstract class Item {
  /* with abstract we don't can instance a object from this superclass, only we can inherit him */
  protected readonly _id: number;
  protected _title: string;
  // with protected we have the possibility of inherit the properties as a public ONLY if is to an another class

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  // set id(id: number) {
  //   this._id = id;
  // } /* Error becuase id it's readonly */

  get title() {
    return this._title;
  }

  set title(title) {
    this.title = title;
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation; /* With static property you can access, it's a visible member */
  /* Properties */
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  /* Behaviour */
  public toString() {
    /* Explicit */
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
  }
}

class Album extends Item {
  private _pictures: Picture[];

  constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }

  get pictures() {
    return this._pictures;
  }

  set pictures(pictures: Picture[]) {
    this._pictures = pictures;
  }

  /* Behaviour */

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

/* Const definition */

const picture: Picture = new Picture(
  1,
  "Platzi session",
  PhotoOrientation.Square
);

// picture.id = 100; /* Error, id it's readonly */
console.log("picture", picture);

// const item = new Item(1, "Test");
// console.log("item", item); /* Error because Item is an abstract class */

/* Try the static member */
console.log("PhotoOrientation", Picture.photoOrientation.Landscape)
