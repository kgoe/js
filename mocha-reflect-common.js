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
'SharedArrayBuffer': 'function', // no Android Support
'Atomics': 'object', // no Android Support
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
  "onlanguagechange",  // no IE support
  "onmessage",
  "onmessageerror",    // no IE support
  "onoffline",
  "ononline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onrejectionhandled",    // no IE support
  "onstorage",
  "onunhandledrejection",  // no IE support
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
  "onclose",       // no IE support
  "oncontextmenu",
  "oncuechange",   // no IE support
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
  "ontoggle",   // no IE support
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
  "InputEvent",    // no IE support
  "FocusEvent",
  "PopStateEvent",
  "UIEvent",
  "MouseEvent",
  "KeyboardEvent",
  "TouchEvent",    // no IE support
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
  "XMLHttpRequestEventTarget",    // no IE support
  "XMLHttpRequestUpload",
  "NodeIterator",
  "TreeWalker",
  "Storage",
  "ShadowRoot",    // no IE support
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
  "HTMLDetailsElement",    // no IE support
  "HTMLDialogElement",     // no IE support
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
  "HTMLSlotElement",    // no IE support
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
  "localStorage",     // no IE support
  "sessionStorage",   // no IE support
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
  ['Promise','function'],   // no IE Support, no Safari Support
  ['Proxy','function'],     // no IE Support, no Safari Support
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
  ['WeakSet','function'],             // no IE8 Support
  ['ArrayBuffer','function'],
  ['SharedArrayBuffer','function'],   // no IE Support, no Android Support
  ['DataView','function'],
  //['Generator','function'],         // new special syntax
  //['GeneratorFunction','function'], // new special syntax
  //['AsyncFunction','function'],     // new special syntax
];

var coreObjects = [
  ['Atomics','object'],  // no IE Support, no Android Support
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
  "onlanguagechange",  // no IE support
  "onmessage",
  "onmessageerror",    // no IE support
  "onoffline",
  "ononline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onrejectionhandled",   // no IE support
  "onstorage",
  "onunhandledrejection",  // no IE support
  "onunload",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onscroll",
  "onabort",
  "oncancel",   // no IE support
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",  // no IE support
  "oncontextmenu",
  "oncuechange",  // no IE support
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
  "ontoggle",  // no IE support
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
  "InputEvent",   // no IE support
  "FocusEvent",
  "PopStateEvent",
  "UIEvent",
  "MouseEvent",
  "KeyboardEvent",
  "TouchEvent",  // no IE support
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
  "XMLHttpRequestEventTarget",   // no IE support
  "XMLHttpRequestUpload",
  "NodeIterator",
  "TreeWalker",
  "Storage",
  "ShadowRoot",   // no IE support
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
  "HTMLDetailsElement",   // no IE support
  "HTMLDialogElement",    // no IE support
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
  "HTMLSlotElement",     // no IE support
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
  "localStorage",     // no IE support
  "sessionStorage",   // no IE support
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


// SYNTAX
describe('Statements',function(){

  describe('Control Flow',function(){
    it('block',function(){
      var theValue = 0;
        try {
          {
          var x = 1;
          var y = 1;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,0);
    });
    it('break',function(){
      var theValue = 0;
        try {
          for ( var counter = 0; counter < 5; counter ++ ) {
            theValue += counter;
            if ( counter == 2 ) {
              break;
            }
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,3);
    });
    it('continue',function(){
      var theValue = 0;
        try {
          for ( var counter = 0; counter < 5; counter ++ ) {
            if ( counter == 2 ) {
              continue;
            }
            theValue += counter;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,8);
    });
  
    it('Empty',function(){
      var theValue = 0;
        try {
          var array1 = [1, 2, 3];
          // Assign all array values to 0
          for (i = 0; i < array1.length; array1[i++] = 0) /* empty statement */ ;
          theValue = 1;
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,1);
    });
  
    it('if...else',function(){
      var theValue = 0;
        try {
          if ( false ) {
            theValue = 1;
          } else if ( false ) {
            thValue = 3;
          } else {
            theValue = 2;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,2);
    });
  
    it('switch',function(){
      var theValue = 0;
        try {
          var item = 'b';
          switch( item ) {
            case 'a' :
              theValue = 1;
            case 'z' :
              theValule += 10;
              break;
            case 'd' :
            case 'e' :
            case 'b' :
            case 'y' :
              theValue += 2;
            case 'x' :
              theValue += 3;
              break;
            default:
              theValue = 111;
              break;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,5);
    });
  
    it('try-throw-catch-finally',function(){
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

  describe('Declarations',function(){
    it('var',function(){
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
    it('let',function(){
      let theValue = 0;
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
    it('const',function(){
        var output = false;
        try {
          const theValue = 2;
          output = theValue;
        } catch ( e ) {
          const theValue = 3;
          output = theValue;
        } finally {
          output += 4;
        }
        assert.equal(output,6);
    });
  });

  describe('Functions and Classes',function(){

    it('function return',function(){
      var theValue = 0;
        try {
          function test(){
            return 1;
          }
          theValue += test();
        } catch ( e ) {
          theValue += 3;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,5);
    });

    it('function* generator',function(){
      var theValue = 0;
        try {
          function* test(i){
            yield i;
            yield i + 5;
          }
          var gen = test(theValue)
          theValue += gen.next().value;
        } catch ( e ) {
          theValue += 5;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,4);
    });

    it('async function',function(done){
      var theValue = 0;
        try {
          function resolveAfter2seconds(){
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 500);
            });
          }
          async function asyncCall(){
            //console.log('calling');
            var result = await resolveAfter2seconds();
            //console.log(result);
            // expected output: 'resolved'
            return 1;
          }
          asyncCall().then(function( value ){
            //console.log(value);
            done();
          });
          theValue += 1;
        } catch ( e ) {
          theValue += 3;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,5);
    });

    it('class',function(){
      var theValue = 0;
        try {
          class Polygon {
            constructor(height, width) {
              this.area = height * width;
            }
          }         
          //console.log(new Polygon(4,3).area);
          function test(){
            return 1;
          }
          theValue += test();
          theValue += new Polygon(4,3).area;
        } catch ( e ) {
          theValue += 5;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,17);
    });

  });

  describe('Iterations',function(){

    it('do ... while',function(){
      var theValue = 0;
      try {

        var result = "";
        var i = 0;
        
        do {
          i = i + 1;
          result = result + i;
        } while (i < 5);
        
        //console.log(result);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for',function(){
      var theValue = 0;
      try {
        var str = "";
        for (var i = 0; i < 9; i++) {
          str = str + i;
        }
        //console.log(str);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it.skip('x for each...in deprecated',function(){
      var theValue = 0;
      try {
        // deprecated
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for ... in',function(){
      var theValue = 0;
      try {
        var string1 = "";
        var object1 = {a: 1, b: 2, c: 3};
        for (var property1 in object1) {
          string1 += object1[property1];
        }
        //console.log(string1);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for ... of',function(){
      var theValue = 0;
      try {
        function* foo(){
          yield 1;
          yield 2;
        }
        
        for (let o of foo()) {
          //console.log(o);
          // expected output: 1
          break; // closes iterator, triggers return
        }

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it.skip('x for await ... of',function(){
      var theValue = 0;
      try {
        //debugger;
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('while',function(){
      var theValue = 0;
      try {
        var n = 0;
        while (n < 3) {
          n++;
        }
        //console.log(n);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

  });

  describe('Others',function(){

    it('strict',function(){
      var theValue = 0;
      try {
        "use strict";
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('debugger',function(){
      var theValue = 0;
      try {
        debugger;
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x export',function(){
      var theValue = 0;
      try {
        //export {};
        //exports {};
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x import',function(){
      var theValue = 0;
      try {
        //import {};
        //import {};
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x future proof',function(){
      var theValue = 0;
      try {
        //implements
        //interface
        //let
        //package
        //private
        //protected
        //public
        //static
        //yield
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x import.meta',function(){
      var theValue = 0;
      try {
        //console.log(import.meta);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('label',function(){
      var theValue = 0;
      try {
        var str = "";

        loop1:
        for (var i = 0; i < 5; i++) {
          if (i === 1) {
            continue loop1;
          }
          str = str + i;
        }
        
        //console.log(str);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('with',function(){
      var theValue = 0;
      try {
        with(theValue);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

  });

});

describe('Expressions and Operators',function(){

  describe('Primary Expressions',function(){
    it('this',function(){
      assert.equal(typeof this,'object');
    });
    it('function',function(){
      assert.equal(typeof function test(){},'function');
    });
    it('class',function(){
      assert.equal(typeof class test{},'function');
    });
    it('function*',function(){
      assert.equal(typeof function* test(){},'function');
    });
    it('function*',function(){
      assert.equal(typeof function* test(i){yield i;},'function');
    });
    it('async yield',function(){
      assert.equal(typeof function* test(i){yield* i;},'function');
    });
    it('async function',function(){
      assert.equal(typeof async function test(){},'function');
    });
    it('async await',function(){
      assert.equal(typeof async function test(){await {};},'function');
    });
    it('[]',function(){
      assert.equal(typeof [],'object');
    });
    it('{}',function(){      
      assert.equal(typeof {},'object');
    });
    it('regexp',function(){
      assert.equal(typeof /ab+c/i,'object');
    });
    it.skip('()',function(){
      //assert.equal(typeof (),'object');
    });
  });

  describe('Left Hand Side Expressions',function(){
    
    it('property accessor',function(){
      assert.equal(typeof JSON.parse,'function');
    });

    it('property accessor',function(){
      assert.equal(typeof JSON['parse'],'function');
    });
    
    it('new',function(){
      assert.equal(typeof new Object(),'object');
    });
    
    it('new.target',function(){
      function Foo() {
        if (!new.target) throw 'Foo() must be called with new';
      }
      
      try {
        Foo();
        //var foo = new Foo();
      } catch( err ) {
        console.log(err);
      }
      assert.equal(typeof Foo,'function');
    });

    it.skip('super',function(){
      //assert.equal(super.name,'function');
    });

    it('... spread',function(){
      var theValue = 0;
      try {
        function sum(x, y, z) {
          return x + y + z;
        }
        const numbers = [1, 2, 3];
        //console.log(sum(...numbers));
        // expected output: 6
        //console.log(sum.apply(null, numbers));

        theValue += sum(...numbers);
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,10);
    });

  });

  describe('Increment and Decrement',function(){
    var ii = 1;
    
    // post increment
    it('A++',function(){
      assert.equal(ii++,1);
    });

    // post decrement
    it('A--',function(){
      assert.equal(ii--,2);
    });

    // pre increment
    it('++A',function(){
      assert.equal(++ii,2);
    });

    // pre decrement
    it('--A',function(){
      assert.equal(--ii,1);
    });
  });

  describe('Unary Operators',function(){

    it('delete',function(){
      var theValue = 0;
      try {
        var obj = {};
        obj.test = 'test';
        delete obj.test;
        var Employee = {
          firstname: "Mohammed",
          lastname: "Haddad"
        }
        delete Employee.firstname;       
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('void operator',function(){
      var theValue = 0;
      try {
        void function test() {
          //console.log('boo!');
          // expected output: "boo!"
        }();
        
        try {
          test();
        }
        catch(e) {
          //console.log(e);
          // expected output: ReferenceError: test is not defined
        }
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('typeof',function(){
      assert.equal(typeof {},'object');
    });

  });

  describe('Arithmetic Operators',function(){
    var ii = 0;

    it('+',function(){
      assert.equal(ii+1,1);
    });
    
    it('-',function(){
      assert.equal(ii-1,-1);
    });

    it('/',function(){
      ii = ii+10;
      assert.equal(ii/2,5);
    });

    it('/',function(){
      ii = 1 * 10
      assert.equal(ii*5,50);
    });

    it('%',function(){
      ii = 1 * 10
      assert.equal(ii%2,0);
    });

    it('**',function(){
      ii = 1 * 10
      assert.equal(ii**3,1000);
    });

  });

  describe('Relational Operators',function(){

    it('in',function(){
      var car = {make: 'Honda', model: 'Accord', year: 1998};
      //console.log('make' in car);
      // expected output: true
      delete car.make;
      if ('make' in car === false) {
        car.make = 'Suzuki';
      }
      //console.log(car.make);
      assert.equal(car.make,'Suzuki');
    });

    it('instanceof',function(){
      function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      var auto = new Car('Honda', 'Accord', 1998);
      //console.log(auto instanceof Car);
      // expected output: true
      //console.log(auto instanceof Object);
      // expected output: true
      //console.log(car.make);
      assert.equal(auto instanceof Car,true);
    });

    it('comparisons',function(){
      assert.equal(1 == 1,true);
      assert.equal("1" == 1,true);
      assert.equal(1 === 1,true);
      assert.equal("1" === 1,false);
      //assert.equal(5 < 6,true);
      //assert.equal(5 > 4,true);
      //assert.equal(5 <= 5,true);
      //assert.equal(5 >= 2,true);
    });

  });

  describe('Equality Operators',function(){
    it('comparisons',function(){
      //assert.equal(1 == 1,true);
      //assert.equal("1" == 1,true);
      //assert.equal(1 === 1,true);
      //assert.equal("1" === 1,false);
      assert.equal(5 < 6,true);
      assert.equal(5 > 4,true);
      assert.equal(5 <= 5,true);
      assert.equal(5 >= 2,true);
    });
  });

  describe('Birwise Shift Operators',function(){
    it('bitwise operators',function(){
      assert.equal(5 & 13,5);
      assert.equal(parseInt("0101",2) & parseInt("1101",2),5);
      assert.equal(5 & 13 & 3,1);
      assert.equal(5 | 13,13);
    });
    it('bninary bitwise operators',function(){
      assert.equal(5 ^ 2,7);
      assert.equal(1 << 5,32);
      assert.equal(5 >> 5,-0);
      assert.equal(11 >>> 1,5);
    });
    it('bninary logical operators',function(){
      var a = 3;
      var b = -2;
      assert.equal(a > 0 && b > 0,false);
      assert.equal(a > 0 || b > 0,true);
      assert.equal(!(a > 0 || b > 0),false);
    });
  });

  describe('Conditional Ternary Operator',function(){
    it('ternary operators',function(){
      function getFee(isMember) {
        return (isMember ? "$2.00" : "$10.00");
      }
      
      //console.log(getFee(true));
      // expected output: "$2.00"
      assert.equal(getFee(true),"$2.00");
      
      //console.log(getFee(false));
      // expected output: "$10.00"
      assert.equal(getFee(false),"$10.00");
      
      //console.log(getFee(1));
      assert.equal(getFee(1),"$2.00");
    });
  });

  describe('Assignment Operators',function(){

  });

  describe('Comma Operators',function(){

  });

  describe('Non Standard Features',function(){

  });

});

describe('Functions',function(){

  describe('arguments',function(){
    it('arguments',function(){
      function checkArguments(){
        return typeof arguments;
      }

      assert.equal(checkArguments(),'object');
    });
  });

  describe('arguments2',function(){
    it('arguments2',function(){
      function func1(a, b, c) {
        //console.log(arguments[0]);
        // expected output: 1
      
        //console.log(arguments[1]);
        // expected output: 2
      
        //console.log(arguments[2]);
        // expected output: 3
        return JSON.stringify(arguments);
      }
      
      func1(1, 2, 3);
      assert.equal(func1(1, 2, 3),'{"0":1,"1":2,"2":3}');

      
    });
  });

  describe('Arrow Functions',function(){
    it('()=>{}',function(){
      var value = (()=>{return 365;})()
      assert.equal(value,365);
    });
  });

  describe('Default Parameters',function(){
    it('Default Parameters',function(){
      function multiply(a, b = 1) {
        return a * b;
      }
      
      //console.log(multiply(5, 2));
      assert.equal(multiply(5, 2),10);
      // expected output: 10
      
      //console.log(multiply(5));
      assert.equal(multiply(5),5);
      // expected output: 5
    });
  });

  describe('Rest Parameters',function(){
    it('Rest Parameters',function(){
      function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
          return previous + current;
        });
      }
      
      //console.log(sum(1, 2, 3));
      assert.equal(sum(1, 2, 3),6);
      // expected output: 6
      
      //console.log(sum(1, 2, 3, 4));
      assert.equal(sum(1, 2, 3, 4),10);
      // expected output: 10
    });
  });

  describe('setter',function(){
    it('set',function(){
      var language = {
        set current(name) {
          this.log.push(name);
        },
        log: []
      }
      
      language.current = 'EN';
      language.current = 'FA';
      
      //console.log(language.log);
      assert.equal(language.log.toString(),'EN,FA');

    });
  });

  describe('getter',function(){
    it('get',function(){
      var obj = {
        log: ['a', 'b', 'c'],
        get latest() {
          if (this.log.length == 0) {
            return undefined;
          }
          return this.log[this.log.length - 1];
        }
      }
      
      // console.log(obj.latest);
      // expected output: "c"
      assert.equal(obj.latest,'c');

    });
  });


});

describe('Additional References',function(){

  describe('Lexical Grammars',function(){
  });

  describe('Data Types and Data Structures',function(){
    it('boolean',function(){
      assert.equal(typeof true,'boolean');
      assert.equal(typeof false,'boolean');
    });
    it('null',function(){
      assert.equal(typeof null,'object');
    });
    it('undefined',function(){
      assert.equal(typeof undefined,'undefined');
    });
    it('number',function(){
      assert.equal(typeof 12345,'number');
    }); 
    it('string',function(){
      assert.equal(typeof 'hello','string');
    });
    it('symbol',function(){
      assert.equal(typeof Symbol(),'symbol');
    });  
    it('object',function(){
      assert.equal(typeof {},'object');
    });  
    it('array',function(){
      assert.equal(typeof [],'object');
    }); 
    it('JSON',function(){
      assert.equal(typeof JSON,'object');
    });   
  });

  describe('Strict Mode',function(){

  });

  describe('Template Literals',function(){
    describe('template literals',function(){
      it('template literals',function(){
        var literals = `string text ${1 + 2} string text`;
        assert.equal(literals,'string text 3 string text');
      });
    });
  });

  describe('Deprecated Features',function(){

  });

});

// JS Prototypes Check
if ( typeof describe === 'function' ) {
  describe('js constructors prototype',function(){

    it('Object.prototype isPrototypeOf Function.constructor',function(){
      assert.equal(Object.prototype.isPrototypeOf(Function.constructor),true);
    });

    it('Function.prototype isPrototypeOf Object',function(){
      assert.equal(Function.prototype.isPrototypeOf(Object),true);
    });

    it('Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Array),true);
    });

    it('Error',function(){
      assert.equal(Object.prototype.isPrototypeOf(Error),true);
      assert.equal(Function.prototype.isPrototypeOf(Error),true);
    });

    it('Number',function(){
      assert.equal(Object.prototype.isPrototypeOf(Number),true);
      assert.equal(Function.prototype.isPrototypeOf(Number),true);
    });

    it('Boolean',function(){
      assert.equal(Object.prototype.isPrototypeOf(Boolean),true);
      assert.equal(Function.prototype.isPrototypeOf(Boolean),true);
    });

    it('String',function(){
      assert.equal(Object.prototype.isPrototypeOf(String),true);
      assert.equal(Function.prototype.isPrototypeOf(String),true);
    });

    it('Date',function(){
      assert.equal(Object.prototype.isPrototypeOf(Date),true);
      assert.equal(Function.prototype.isPrototypeOf(Date),true);
    });

    it('RegExp',function(){
      assert.equal(Object.prototype.isPrototypeOf(RegExp),true);
      assert.equal(Function.prototype.isPrototypeOf(RegExp),true);
    });

  });

  describe('js errors prototype',function(){});

  describe('js array prototype',function(){
    it('Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Array),true);
    });
    it('ArrayBuffer',function(){
      assert.equal(Object.prototype.isPrototypeOf(ArrayBuffer),true);
      assert.equal(Function.prototype.isPrototypeOf(ArrayBuffer),true);
      //assert.equal(Array.isPrototypeOf(ArrayBuffer),true);
    });
    it('Uint8Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Uint8Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Uint8Array),true);
      //assert.equal(Array.isPrototypeOf(Uint8Array),true);
    });
    it('Int8Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Int8Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Int8Array),true);
      //assert.equal(Array.isPrototypeOf(Int8Array),true);
    });
    it('Uint16Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Uint16Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Uint16Array),true);
      //assert.equal(Array.isPrototypeOf(Uint16Array),true);
    });
    it('Int16Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Int16Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Int16Array),true);
      //assert.equal(Array.isPrototypeOf(Int16Array),true);
    });
    it('Uint32Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Uint32Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Uint32Array),true);
      //assert.equal(Array.isPrototypeOf(Uint32Array),true);
    });
    it('Int32Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Int32Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Int32Array),true);
      //assert.equal(Array.isPrototypeOf(Int32Array),true);
    });
    it('Float32Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Float32Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Float32Array),true);
      //assert.equal(Array.isPrototypeOf(Float32Array),true);
    });
    it('Float64Array',function(){
      assert.equal(Object.prototype.isPrototypeOf(Float64Array),true);
      assert.equal(Function.prototype.isPrototypeOf(Float64Array),true);
      //assert.equal(Array.isPrototypeOf(Float64Array),true);
    });
    it('DataView',function(){
      assert.equal(Object.prototype.isPrototypeOf(DataView),true);
      assert.equal(Function.prototype.isPrototypeOf(DataView),true);
      //assert.equal(Array.isPrototypeOf(DataView),true);
    });
  });

  describe('js core property prototype',function(){
    it('Infinity',function(){
      //assert.equal(Number.prototype.isPrototypeOf(Infinity),true);
      //assert.equal(Function.prototype.isPrototypeOf(Infinity),true);
    });

    it('NaN',function(){
      //assert.equal(Object.prototype.isPrototypeOf(NaN),true);
      //assert.equal(Function.prototype.isPrototypeOf(NaN),true);
    });

    it('parseFloat',function(){
      assert.equal(Object.prototype.isPrototypeOf(parseFloat),true);
      assert.equal(Function.prototype.isPrototypeOf(parseFloat),true);
    });
    it('parseInt',function(){
      assert.equal(Object.prototype.isPrototypeOf(parseInt),true);
      assert.equal(Function.prototype.isPrototypeOf(parseInt),true);
    });
    it('decodeURI',function(){
      assert.equal(Object.prototype.isPrototypeOf(decodeURI),true);
      assert.equal(Function.prototype.isPrototypeOf(decodeURI),true);
    });
    it('decodeURIComponent',function(){
      assert.equal(Object.prototype.isPrototypeOf(decodeURIComponent),true);
      assert.equal(Function.prototype.isPrototypeOf(decodeURIComponent),true);
    });
    it('encodeURI',function(){
      assert.equal(Object.prototype.isPrototypeOf(encodeURI),true);
      assert.equal(Function.prototype.isPrototypeOf(encodeURI),true);
    });
    it('encodeURIComponent',function(){
      assert.equal(Object.prototype.isPrototypeOf(encodeURIComponent),true);
      assert.equal(Function.prototype.isPrototypeOf(encodeURIComponent),true);
    });
    it('escape',function(){
      assert.equal(Object.prototype.isPrototypeOf(escape),true);
      assert.equal(Function.prototype.isPrototypeOf(escape),true);
    });
    it('unescape',function(){
      assert.equal(Object.prototype.isPrototypeOf(unescape),true);
      assert.equal(Function.prototype.isPrototypeOf(unescape),true);
    });
    it('eval',function(){
      assert.equal(Object.prototype.isPrototypeOf(eval),true);
      assert.equal(Function.prototype.isPrototypeOf(eval),true);
    });
    it('isFinite',function(){
      assert.equal(Object.prototype.isPrototypeOf(isFinite),true);
      assert.equal(Function.prototype.isPrototypeOf(isFinite),true);
    });
    it('isNaN',function(){
      assert.equal(Object.prototype.isPrototypeOf(isNaN),true);
      assert.equal(Function.prototype.isPrototypeOf(isNaN),true);
    });

    it('console',function(){
      assert.equal(Object.prototype.isPrototypeOf(console),true);
    }); 
    it('Math',function(){
      assert.equal(Object.prototype.isPrototypeOf(Math),true);
    });   
    it('JSON',function(){
      assert.equal(Object.prototype.isPrototypeOf(JSON),true);
    });   
  });
}

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

