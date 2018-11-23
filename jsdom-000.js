const log = console.log;
const _jsdom = require('jsdom');
const { JSDOM } = _jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); 
// Hello World