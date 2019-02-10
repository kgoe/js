;

var doc = {};

// Standards

doc.standards =
`
DOM LS Living Standard : https://dom.spec.whatwg.org/
DOM 4 : https://www.w3.org/TR/dom/
DOM Level 3 Validation
DOM Level 3 Load and Save
DOM Level 3 Core
DOM Level 2 HTML
DOM Level 2 Core
DOM 3
DOM 2
DOM Level 1 Core
DOM 1
Document Object Model (DOM) Level 3 Core Specification : https://www.w3.org/TR/DOM-Level-3-Core/
Document Object Model (DOM) Level 2 Core Specification : https://www.w3.org/TR/DOM-Level-2-Core/
Document Object Model (DOM) Level 1 Specification : https://www.w3.org/TR/REC-DOM-Level-1/
`;

doc.links =
`
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
https://www.w3.org/DOM/
https://www.w3.org/DOM/Test/
https://dom.spec.whatwg.org/
https://www.w3.org/TR/dom/
`;

doc.core_properties =
`
window|browser window
document|html document object root
Node|Eleent
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
`;

doc.root_properties =
`
document
window
`;

doc.root_data_types =
`
Document
Element
NodeList
Attribute
NamedNodeMap
`;

doc.root_interfaces =
`
Element
HTMLElement
HTMLTableElement
`;

/**
 * setBodyAttr
 * @desc Testing the DOM API
 * @param {*} attr
 * @param {*} value
 */
doc.setBodyAttr = function setBodyAttr(attr, value) {
  if (document.body) eval('document.body.'+attr+'="'+value+'"');
  else console.log('notSupported ' + attr);
}