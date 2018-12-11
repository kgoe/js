// Object.freeze()

Object.freeze(new Uint8Array(0));
// No elements
// Uint8Array [];

Object.freeze(new Uint8Array(1));
// Has elements
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32)));
// No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0));
// No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2));
// Has elements
// TypeError: Cannot freeze array buffer views with elements
