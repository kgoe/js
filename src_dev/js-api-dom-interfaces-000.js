/**
 * JavaScript API DOM Interfaces
 */
var arrJsApiDomInterfaces = [
  "Attr",
  "CDATASection",
  "CharacterData",
  "ChildNode",                 // undefined
  "Comment",
  "CustomEvent",
  "Document",
  "DocumentFragment",
  "DocumentType",
  "DOMError",
  "DOMException",
  "DOMImplementation",
  "DOMString",                 // undefined
  "DOMTimeStamp",              // undefined
  "DOMStringList",
  "Element",
  "Event",
  "EventTarget",
  "HTMLCollection",
  "MutationObserver",
  "MutationRecord",
  "NamedNodeMap",
  "Node",
  "NodeFilter",
  "NodeIterator",
  "NodeList",
  "NonDocumentTypeChildNode",  // undefined
  "ParentNode",                // undefined
  "ProcessingInstruction",
  "Selection",
  "Range",
  "Text",
  "TextDecoder",
  "TextEncoder",
  "TimeRanges",
  "TreeWalker",
  "URL",
  "Window",
  "Worker",
  "XMLDocument",
];


/**
 * fn_processArrayTypes
 * @param {array} input
 */
function fn_processArrayTypes( input ) {
  var root = typeof window !== 'undefined' ? window : global;
  if ( Array.isArray(input) ) {
    var len = input.length;
    var idx = 0;
    for ( idx = 0; idx < len; idx ++ ) {
      var item = input[idx];
      var type = typeof root[item];
      if ( type == 'undefined' ) {
        console.log(item, type);
      }
    }
  }
}
fn_processArrayTypes(arrJsApiDomInterfaces);