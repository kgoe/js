const _jsdom = require('jsdom');
const { JSDOM } = _jsdom;

//log([_jsdom,JSDOM]);

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); 
// Hello World

//log(dom.window);
//log(dom.window.document);
//log(dom.window.document.__proto__);