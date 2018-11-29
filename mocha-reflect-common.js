var THE_ENVIRONMENT = (function iifeEnvDetect(){
  var output = false;
  if ( typeof global !== 'undefined' && typeof module !== 'undefined' && typeof require !== 'undefined' ) {
    if ( require.main === module ) {
      output = 'node';      
    } else {
      output = 'node-module';
    }
  }

  if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    output = 'browser';
    if ( typeof require === 'undefined' ) {
      //require = function( value ) { console.log("%c TO REQUIRE : " + value,"color: ##FF0000;"); }
      require = function( value ) { console.log("TO REQUIRE : " + value); }
    }
  }
  return output;
})()

// var or const ?
// will use var for now, for better backwards compatability
var assert = typeof global !== 'undefined' ? require('assert') : assert;
var path = typeof global !== 'undefined' ? require('path') : path;
var root = typeof global !== 'undefined' ? global : window;

//console.log(Object.getOwnPropertyNames(mocha));
/*
Object.getOwnPropertyNames(mocha).forEach(function(val){
  var thisVal = val;
  var thisType = typeof mocha[val];
  console.log(`'${thisVal}':'${thisType}',`);
})
//*/

var nodeBrowserProperties = [
'Object',
'Function',
'Array',
'Number',
'parseFloat',
'parseInt',
'Infinity',
'NaN',
'undefined',
'Boolean',
'String',
'Symbol',
'Date',
'Promise',
'RegExp',
'Error',
'EvalError',
'RangeError',
'ReferenceError',
'SyntaxError',
'TypeError',
'URIError',
'JSON',
'Math',
'console',
'ArrayBuffer',
'Uint8Array',
'Int8Array',
'Uint16Array',
'Int16Array',
'Uint32Array',
'Int32Array',
'Float32Array',
'Float64Array',
'Uint8ClampedArray',
'DataView',
'Map',
'Set',
'WeakMap',
'WeakSet',
'Proxy',
'Reflect',
'decodeURI',
'decodeURIComponent',
'encodeURI',
'encodeURIComponent',
'escape',
'unescape',
'eval',
'isFinite',
'isNaN',
'WebAssembly',
//'global',         // node specific
//'process',        // node specific
//'GLOBAL', // deprecated, node specific
//'root',   // deprecated, node specific
//'Buffer',         // node specific
//'clearImmediate', // node specific
'clearInterval',
'clearTimeout',
//'setImmediate',   // node specific
'setInterval',
'setTimeout'
]

var nodeBrowserPropertiesType = {
'Object': 'function',
'Function': 'function',
'Array': 'function',
'Number': 'function',
'parseFloat': 'function',
'parseInt': 'function',
'Infinity': 'number',
'NaN': 'number',
'undefined': 'undefined',
'Boolean': 'function',
'String': 'function',
'Symbol': 'function',
'Date': 'function',
'Promise': 'function',
'RegExp': 'function',
'Error': 'function',
'EvalError': 'function',
'RangeError': 'function',
'ReferenceError': 'function',
'SyntaxError': 'function',
'TypeError': 'function',
'URIError': 'function',
'JSON': 'object',
'Math': 'object',
'console': 'object',
'Intl': 'object',
'ArrayBuffer': 'function',
'Uint8Array': 'function',
'Int8Array': 'function',
'Uint16Array': 'function',
'Int16Array': 'function',
'Uint32Array': 'function',
'Int32Array': 'function',
'Float32Array': 'function',
'Float64Array': 'function',
'Uint8ClampedArray': 'function',
'BigUint64Array': 'function',
'BigInt64Array': 'function',
'DataView': 'function',
'Map': 'function',
'Set': 'function',
'WeakMap': 'function',
'WeakSet': 'function',
'Proxy': 'function',
'Reflect': 'object',
'decodeURI': 'function',
'decodeURIComponent': 'function',
'encodeURI': 'function',
'encodeURIComponent': 'function',
'escape': 'function',
'unescape': 'function',
'eval': 'function',
'isFinite': 'function',
'isNaN': 'function',
'SharedArrayBuffer': 'function',
'Atomics': 'object',
'BigInt': 'function',
'WebAssembly': 'object',
'DTRACE_NET_SERVER_CONNECTION': 'function',
'DTRACE_NET_STREAM_END': 'function',
'DTRACE_HTTP_SERVER_REQUEST': 'function',
'DTRACE_HTTP_SERVER_RESPONSE': 'function',
'DTRACE_HTTP_CLIENT_REQUEST': 'function',
'DTRACE_HTTP_CLIENT_RESPONSE': 'function',
'COUNTER_NET_SERVER_CONNECTION': 'function',
'COUNTER_NET_SERVER_CONNECTION_CLOSE': 'function',
'COUNTER_HTTP_SERVER_REQUEST': 'function',
'COUNTER_HTTP_SERVER_RESPONSE': 'function',
'COUNTER_HTTP_CLIENT_REQUEST': 'function',
'COUNTER_HTTP_CLIENT_RESPONSE': 'function',
//'global': 'object',           // node specific
//'process': 'object',          // node specific
//'GLOBAL': 'object',           // deprecated, node specific
//'root': 'object',             // deprecated, node specific
//'Buffer': 'function',         // node specific
//'clearImmediate': 'function', // node specific
'clearInterval': 'function',
'clearTimeout': 'function',
//'setImmediate': 'function',   // node specific
'setInterval': 'function',
'setTimeout': 'function',
'URL': 'function',
'URLSearchParams': 'function',
}

var nodeMochaProperties = [ 
'length',
'name',
'prototype',
'utils',
'interfaces',
'reporters',
'Runnable',
'Context',
'Runner',
'Suite',
'Hook',
'Test'
]

var nodeMochaPropertiesType = {
'length':'number',
'name':'string',
'prototype':'object',
'utils':'object',
'interfaces':'object',
'reporters':'object',
'Runnable':'function',
'Context':'function',
'Runner':'function',
'Suite':'function',
'Hook':'function',
'Test':'function'
}

var nodeJsdomBrowserCommonProperties = [
  "onafterprint",
  "onbeforeprint",
  "onbeforeunload",
  "onhashchange",
  "onlanguagechange",
  "onmessage",
  "onmessageerror",
  "onoffline",
  "ononline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onrejectionhandled",
  "onstorage",
  "onunhandledrejection",
  "onunload",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onscroll",
  "onabort",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "oncuechange",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onwheel",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onseeked",
  "onseeking",
  "onselect",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "onvolumechange",
  "onwaiting",
  "DOMException",
  "NamedNodeMap",
  "Attr",
  "Node",
  "Element",
  "DocumentFragment",
  "HTMLDocument",
  "Document",
  "XMLDocument",
  "CharacterData",
  "Text",
  "CDATASection",
  "ProcessingInstruction",
  "Comment",
  "DocumentType",
  "DOMImplementation",
  "NodeList",
  "HTMLCollection",
  "HTMLOptionsCollection",
  "DOMStringMap",
  "DOMTokenList",
  "SVGAnimatedString",
  "SVGNumber",
  "SVGStringList",
  "Event",
  "CloseEvent",
  "CustomEvent",
  "MessageEvent",
  "ErrorEvent",
  "HashChangeEvent",
  "InputEvent",
  "FocusEvent",
  "PopStateEvent",
  "UIEvent",
  "MouseEvent",
  "KeyboardEvent",
  "TouchEvent",
  "ProgressEvent",
  "StorageEvent",
  "CompositionEvent",
  "WheelEvent",
  "EventTarget",
  "BarProp",
  "Location",
  "History",
  "Screen",
  "Performance",
  "Blob",
  "File",
  "FileList",
  "ValidityState",
  "DOMParser",
  "XMLSerializer",
  "FormData",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
  "NodeIterator",
  "TreeWalker",
  "Storage",
  "ShadowRoot",
  "HTMLElement",
  "HTMLAnchorElement",
  "HTMLAreaElement",
  "HTMLAudioElement",
  "HTMLBaseElement",
  "HTMLBodyElement",
  "HTMLBRElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLDataElement",
  "HTMLDataListElement",
  "HTMLDetailsElement",
  "HTMLDialogElement",
  "HTMLDirectoryElement",
  "HTMLDivElement",
  "HTMLDListElement",
  "HTMLEmbedElement",
  "HTMLFieldSetElement",
  "HTMLFontElement",
  "HTMLFormElement",
  "HTMLFrameElement",
  "HTMLFrameSetElement",
  "HTMLHeadingElement",
  "HTMLHeadElement",
  "HTMLHRElement",
  "HTMLHtmlElement",
  "HTMLIFrameElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLLabelElement",
  "HTMLLegendElement",
  "HTMLLIElement",
  "HTMLLinkElement",
  "HTMLMapElement",
  "HTMLMarqueeElement",
  "HTMLMediaElement",
  "HTMLMenuElement",
  "HTMLMetaElement",
  "HTMLMeterElement",
  "HTMLModElement",
  "HTMLObjectElement",
  "HTMLOListElement",
  "HTMLOptGroupElement",
  "HTMLOptionElement",
  "HTMLOutputElement",
  "HTMLParagraphElement",
  "HTMLParamElement",
  "HTMLPictureElement",
  "HTMLPreElement",
  "HTMLProgressElement",
  "HTMLQuoteElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSlotElement",
  "HTMLSourceElement",
  "HTMLSpanElement",
  "HTMLStyleElement",
  "HTMLTableCaptionElement",
  "HTMLTableCellElement",
  "HTMLTableColElement",
  "HTMLTableElement",
  "HTMLTimeElement",
  "HTMLTitleElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "HTMLTrackElement",
  "HTMLUListElement",
  "HTMLUnknownElement",
  "HTMLVideoElement",
  "SVGElement",
  "SVGGraphicsElement",
  "SVGSVGElement",
  "StyleSheet",
  "MediaList",
  "CSSStyleSheet",
  "CSSRule",
  "CSSStyleRule",
  "CSSMediaRule",
  "CSSImportRule",
  "CSSStyleDeclaration",
  "StyleSheetList",
  "XPathExpression",
  "XPathResult",
  "XPathEvaluator",
  "NodeFilter",
  "URL",
  "URLSearchParams",
  "Window",
  "length",
  "window",
  "frameElement",
  "frames",
  "self",
  "parent",
  "top",
  "document",
  "external",
  "location",
  "history",
  "navigator",
  "locationbar",
  "menubar",
  "personalbar",
  "scrollbars",
  "statusbar",
  "toolbar",
  "performance",
  "screen",
  "localStorage",
  "sessionStorage",
  "addEventListener",
  "removeEventListener",
  "dispatchEvent",
  "setTimeout",
  "setInterval",
  "clearInterval",
  "clearTimeout",
  "Option",
  "Image",
  "Audio",
  "postMessage",
  "atob",
  "btoa",
  "FileReader",
  "WebSocket",
  "AbortSignal",
  "AbortController",
  "XMLHttpRequest",
  "ArrayBuffer",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "stop",
  "close",
  "getComputedStyle",
  "captureEvents",
  "releaseEvents",
  "console",
  "name",
  "status",
  "devicePixelRatio",
  "innerWidth",
  "innerHeight",
  "outerWidth",
  "outerHeight",
  "pageXOffset",
  "pageYOffset",
  "screenX",
  "screenY",
  "scrollX",
  "scrollY",
  "screenLeft",
  "screenTop",
  "alert",
  "blur",
  "confirm",
  "focus",
  "moveBy",
  "moveTo",
  "open",
  "print",
  "prompt",
  "resizeBy",
  "resizeTo",
  "scroll",
  "scrollBy",
  "scrollTo"
]

// =========================================================

var coreLiterals = [
  ['number',1,'number'],
  ['string','test','string'],
  ['boolean',true,'boolean'],
  ['boolean',false,'boolean'],
  ['object',{},'object'],
  ['array',[],'object'],
  ['function',function(){},'function'],
  ['undefined',undefined,'undefined'],
  ['infinity',Infinity,'number'],
  ['NaN',NaN,'number'],
  ['null',null,'object'],
];

var coreMethods = [
  ['eval','function'],
  //['uneval','function'], // deprecated
  ['isFinite','function'],
  ['isNaN','function'],
  ['parseFloat','function'],
  ['parseInt','function'],
  ['decodeURI','function'],
  ['encodeURI','function'],
  ['decodeURIComponent','function'],
  ['encodeURIComponent','function'],
  ['escape','function'],
  ['unescape','function'],
];

var coreConstructors = [
  ['Object','function'],
  ['Function','function'],
  ['Boolean','function'],
  //['Symnbol','function'],      // Internal ?
  ['Number','function'],
  ['Date','function'],
  ['String','function'],
  ['RegExp','function'],
  ['Promise','function'], // no IE Support
  ['Proxy','function'],     // no IE Support
  ['Error','function'],
  ['EvalError','function'],
  //['InternalError','function'], // Internal ?
  ['RangeError','function'],
  ['ReferenceError','function'],
  ['SyntaxError','function'],
  ['TypeError','function'],
  ['URIError','function'],
];

var coreCollections = [
  ['Array','function'],
  ['Int8Array','function'],
  ['Uint8Array','function'],
  ['Uint8ClampedArray','function'],
  ['Int16Array','function'],
  ['Uint16Array','function'],
  ['Int32Array','function'],
  ['Uint32Array','function'],
  ['Float32Array','function'],
  ['Float64Array','function'],
  ['Map','function'],
  ['Set','function'],
  ['WeakMap','function'],
  ['WeakSet','function'],  // no IE Support
  ['ArrayBuffer','function'],
  ['SharedArrayBuffer','function'],  // no IE Support
  ['DataView','function'],
  //['Generator','function'],         // new special syntax
  //['GeneratorFunction','function'], // new special syntax
  //['AsyncFunction','function'],     // new special syntax
];

var coreObjects = [
  ['Atomics','object'],  // no IE Support
  ['console','object'],
  ['Math','object'],
  ['JSON','object'],
  ['JSON','object'],
  ['Reflect','object'],  // no IE Support
  ['Intl','object'],
  //['Intl.Collator','function'],
  //['Intl.DateTimeFormat','function'],
  //['Intl.Numberformat','function'],
  ['WebAssembly','object'],  // no IE Support
  //['WebAssembly.Module','function'],  // no IE Support
  //['WebAssembly.Instance','function'],  // no IE Support
  //['WebAssembly.Memory','function'],  // no IE Support
  //['WebAssembly.Table','function'],  // no IE Support
  //['WebAssembly.CompileError','function'],  // no IE Support
  //['WebAssembly.LinkError','function'],  // no IE Support
  //['WebAssembly.RuntimeError','function'],  // no IE Support
  //['arguments','object'], // speciall value inside functions
];


var nodeJsdomBrowserCommonProperties = [
  "onafterprint",
  "onbeforeprint",
  "onbeforeunload",
  "onhashchange",
  "onlanguagechange",
  "onmessage",
  "onmessageerror",
  "onoffline",
  "ononline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onrejectionhandled",
  "onstorage",
  "onunhandledrejection",
  "onunload",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onscroll",
  "onabort",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "oncuechange",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onwheel",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onseeked",
  "onseeking",
  "onselect",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "onvolumechange",
  "onwaiting",
  "DOMException",
  "NamedNodeMap",
  "Attr",
  "Node",
  "Element",
  "DocumentFragment",
  "HTMLDocument",
  "Document",
  "XMLDocument",
  "CharacterData",
  "Text",
  "CDATASection",
  "ProcessingInstruction",
  "Comment",
  "DocumentType",
  "DOMImplementation",
  "NodeList",
  "HTMLCollection",
  "HTMLOptionsCollection",
  "DOMStringMap",
  "DOMTokenList",
  "SVGAnimatedString",
  "SVGNumber",
  "SVGStringList",
  "Event",
  "CloseEvent",
  "CustomEvent",
  "MessageEvent",
  "ErrorEvent",
  "HashChangeEvent",
  "InputEvent",
  "FocusEvent",
  "PopStateEvent",
  "UIEvent",
  "MouseEvent",
  "KeyboardEvent",
  "TouchEvent",
  "ProgressEvent",
  "StorageEvent",
  "CompositionEvent",
  "WheelEvent",
  "EventTarget",
  "BarProp",
  "Location",
  "History",
  "Screen",
  "Performance",
  "Blob",
  "File",
  "FileList",
  "ValidityState",
  "DOMParser",
  "XMLSerializer",
  "FormData",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
  "NodeIterator",
  "TreeWalker",
  "Storage",
  "ShadowRoot",
  "HTMLElement",
  "HTMLAnchorElement",
  "HTMLAreaElement",
  "HTMLAudioElement",
  "HTMLBaseElement",
  "HTMLBodyElement",
  "HTMLBRElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLDataElement",
  "HTMLDataListElement",
  "HTMLDetailsElement",
  "HTMLDialogElement",
  "HTMLDirectoryElement",
  "HTMLDivElement",
  "HTMLDListElement",
  "HTMLEmbedElement",
  "HTMLFieldSetElement",
  "HTMLFontElement",
  "HTMLFormElement",
  "HTMLFrameElement",
  "HTMLFrameSetElement",
  "HTMLHeadingElement",
  "HTMLHeadElement",
  "HTMLHRElement",
  "HTMLHtmlElement",
  "HTMLIFrameElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLLabelElement",
  "HTMLLegendElement",
  "HTMLLIElement",
  "HTMLLinkElement",
  "HTMLMapElement",
  "HTMLMarqueeElement",
  "HTMLMediaElement",
  "HTMLMenuElement",
  "HTMLMetaElement",
  "HTMLMeterElement",
  "HTMLModElement",
  "HTMLObjectElement",
  "HTMLOListElement",
  "HTMLOptGroupElement",
  "HTMLOptionElement",
  "HTMLOutputElement",
  "HTMLParagraphElement",
  "HTMLParamElement",
  "HTMLPictureElement",
  "HTMLPreElement",
  "HTMLProgressElement",
  "HTMLQuoteElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSlotElement",
  "HTMLSourceElement",
  "HTMLSpanElement",
  "HTMLStyleElement",
  "HTMLTableCaptionElement",
  "HTMLTableCellElement",
  "HTMLTableColElement",
  "HTMLTableElement",
  "HTMLTimeElement",
  "HTMLTitleElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "HTMLTrackElement",
  "HTMLUListElement",
  "HTMLUnknownElement",
  "HTMLVideoElement",
  "SVGElement",
  "SVGGraphicsElement",
  "SVGSVGElement",
  "StyleSheet",
  "MediaList",
  "CSSStyleSheet",
  "CSSRule",
  "CSSStyleRule",
  "CSSMediaRule",
  "CSSImportRule",
  "CSSStyleDeclaration",
  "StyleSheetList",
  "XPathExpression",
  "XPathResult",
  "XPathEvaluator",
  "NodeFilter",
  "URL",
  "URLSearchParams",
  "Window",
  "length",
  "window",
  "frameElement",
  "frames",
  "self",
  "parent",
  "top",
  "document",
  "external",
  "location",
  "history",
  "navigator",
  "locationbar",
  "menubar",
  "personalbar",
  "scrollbars",
  "statusbar",
  "toolbar",
  "performance",
  "screen",
  "localStorage",
  "sessionStorage",
  "addEventListener",
  "removeEventListener",
  "dispatchEvent",
  "setTimeout",
  "setInterval",
  "clearInterval",
  "clearTimeout",
  "Option",
  "Image",
  "Audio",
  "postMessage",
  "atob",
  "btoa",
  "FileReader",
  "WebSocket",
  "AbortSignal",
  "AbortController",
  "XMLHttpRequest",
  "ArrayBuffer",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "stop",
  "close",
  "getComputedStyle",
  "captureEvents",
  "releaseEvents",
  "console",
  "name",
  "status",
  "devicePixelRatio",
  "innerWidth",
  "innerHeight",
  "outerWidth",
  "outerHeight",
  "pageXOffset",
  "pageYOffset",
  "screenX",
  "screenY",
  "scrollX",
  "scrollY",
  "screenLeft",
  "screenTop",
  "alert",
  "blur",
  "confirm",
  "focus",
  "moveBy",
  "moveTo",
  "open",
  "print",
  "prompt",
  "resizeBy",
  "resizeTo",
  "scroll",
  "scrollBy",
  "scrollTo"
]

// =========================================================

//console.log(new Date());

// if run from mocha
// execute test script
if ( typeof describe == 'function' ) {

function mochaTestArray( name,ARR ){
  describe(name,function(){
    ARR.forEach(function(val){
      if ( val == 'undefined' ) {
        it(val,function(){
          assert.equal(typeof undefined,'undefined');
        });
      } else {
        it(val,function(){
          assert.equal(typeof root[val] !== 'undefined',true);
        });
      }
    });
  });
}

function mochaTestObject( name, OBJ ){
  describe(name, function() {
    OBJ.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof root[value[0]],value[1]);
      });
    });
  });
}

function mochaTestObject2( name, OBJ ){
  describe(name, function() {
    OBJ.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
}

describe('js core literals', function() {
  describe('literals', function() {
    it('number', function() {
      assert.equal(typeof 1, 'number');
    });
    it('string', function() {
      assert.equal(typeof 'test', 'string');
    });
    it('boolean', function() {
      assert.equal(typeof true, 'boolean');
    });
    it('object', function() {
      assert.equal(typeof {}, 'object');
    });
    it('function', function() {
      assert.equal(typeof function(){}, 'function');
    });
    it('undefined', function() {
      assert.equal(typeof undefined, 'undefined');
    });
    it('NaN', function() {
      assert.equal(typeof NaN, 'number');
    });
    it('Infinity', function() {
      assert.equal(typeof Infinity, 'number');
    });
    it('null', function() {
      assert.equal(typeof null, 'object');
    });
  });
});

describe('js core try-catch-finally',function(){
  it('try-catch-finally',function(){
    var theValue = 0;
    try {
      theValue += 2;
      throw("force error");
    } catch ( e ) {
      theValue += 3;
    } finally {
      theValue += 4;
    }
    assert.equal(theValue,9);
  });
});

mochaTestObject2('js core literals object',coreLiterals);
mochaTestObject('js core methods object',coreMethods);
mochaTestObject('js core constructors object',coreConstructors);
mochaTestObject('js core collections object',coreCollections);
mochaTestObject('js core object',coreObjects);

mochaTestArray('node browser global',nodeBrowserProperties);


// BROWSER SPECIFIC
if ( typeof window !== 'undefined' ) {
  mochaTestArray('browser-node',nodeJsdomBrowserCommonProperties);
  mochaTestArray('browser-specific',nodeJsdomBrowserCommonProperties);
}

}


/*
const mocha = typeof global !== 'undefined' ? require('mocha') : mocha;

// Instantiate a Mocha instance.
let mocha = new Mocha({
  ui: 'tdd',
  reporter: 'list'
});
let testDir = './'

    mocha.addFile(
        path.join(testDir, 'try.js')
    )

// Run the tests.
mocha.run(failures => {
    process.on('exit', () => {
        process.exit(failures)  // exit with non-zero status if there were failures
    })
});
*/

