;
var dom2Interfaces = {
  dom: 'undefined',
  _DOM_IDL_: 'undefined',
  DOMString: 'undefined',
  DOMTimeStamp: 'undefined',
  DocumentType: 'function',
  Document: 'function',
  NodeList: 'function',
  NamedNodeMap: 'function',
  Element: 'function',
  DOMImplmentation: 'undefined',
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
  DocumentFragment: 'function',
  Document: 'function',
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

checkTypes(dom2Interfaces);


