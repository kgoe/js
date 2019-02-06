;
var dom1Interfaces = {
  DOMImplementation: 'function',
  DocumentFragment: 'function',
  Document: 'function',
  Node: 'function',
  NodeList: 'function',
  NamedNodeMap: 'function',
  CharacterData: 'function',
  Attr: 'function',
  Element: 'function',
  Text: 'function',
  Comment: 'function',
  CDATASection: 'function',
  DocumentType: 'function',
  Notation: 'undefined',
  Entity: 'undefined',
  EntityReference: 'undefined',
  ProcessingInstruction: 'function',
};

/**
 * checkTypes
 * @param {object} obj
 * @return {*}
 */
function checkTypes(obj) {
  var props = Object.getOwnPropertyNames( obj );
  props.forEach((element, index)=>{
    console.log(element, typeof window[element] == obj[element], index);
  });
  return true;
}

checkTypes(dom1Interfaces);
