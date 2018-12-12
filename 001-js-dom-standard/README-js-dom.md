### JS DOM ( JavaScript Document Object Model )
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

### W3C DOM
https://www.w3.org/DOM/

### WHATWG DOM
https://dom.spec.whatwg.org/

### Standards
DOM LS Living Standard : https://dom.spec.whatwg.org/
DOM 4 : https://www.w3.org/TR/dom/
DOM 3
DOM 2
DOM 1
Document Object Model (DOM) Level 3 Core Specification : https://www.w3.org/TR/DOM-Level-3-Core/
Document Object Model (DOM) Level 2 Core Specification : https://www.w3.org/TR/DOM-Level-2-Core/
Document Object Model (DOM) Level 1 Specification : https://www.w3.org/TR/REC-DOM-Level-1/


### Starting DOM APIs
document
window

### Important Data Types
Document
Element
NodeList
Attribute
NamedNodeMap

### DOM Interfaces
Element
HTMLTableElement

### DOM Core Interfaces
window   = browser window
document = html document object root
Node => Eleent
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
console.log()
window.scrollTo()

### Testing the DOM API

/**
 * setBodyAttr
 * @param {*} attr
 * @param {*} value
 */
function setBodyAttr(attr, value){
    if (document.body) eval('document.body.'+attr+'="'+value+'"');
    else notSupported();
}