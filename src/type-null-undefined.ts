// Explicit
let nullVariable: null;
nullVariable = null;
// nullVariable = 1 /* Error */

// Inflicted

let otherVariable = null;
otherVariable = "Hello";
/* Null inflected is interpreted as a any value */

// Undefined

let undefinedVariable: undefined = undefined;
// undefinedVariable = "Test" /* Error */

let otherUndefined = undefined;
/* Inflected is interpreted like as null */

// Null y Undefined as a subtypes

// --strictNullChecks
let albumName: string;
albumName = null;
albumName = undefined;