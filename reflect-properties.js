var theOutput = (function iifeEnvDetect(){
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
})();

var filename = typeof __filename !== 'undefined' ? __filename : 'browser';

console.log(theOutput, filename);

var coreNodeGlobal = [
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
'global',         // node specific
'process',        // node specific
//'GLOBAL', // deprecated, node specific
//'root',   // deprecated, node specific
'Buffer',         // node specific
'clearImmediate', // node specific
'clearInterval',
'clearTimeout',
'setImmediate',   // node specific
'setInterval',
'setTimeout'
];

var coreNodeBrowserGlobal = [
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
];

var checkObjectprotoProperties = [
'length',
'name',
'arguments',
'caller',
'constructor',
'apply',
'bind',
'call',
'toString'
];

var checkObjectprototypeProperties = [
'constructor',
'__defineGetter__',
'__defineSetter__',
'hasOwnProperty',
'__lookupGetter__',
'__lookupSetter__',
'isPrototypeOf',
'propertyIsEnumerable',
'toString',
'valueOf',
'__proto__',
'toLocaleString'
];

// _jsdom
var checkJSDOMproperties = [
'JSDOM',
'VirtualConsole',
'CookieJar',
'ResourceLoader',
'toughCookie'
];

var checkJSDOMprotoProperties = [
'constructor',
'__defineGetter__',
'__defineSetter__',
'hasOwnProperty',
'__lookupGetter__',
'__lookupSetter__',
'isPrototypeOf',
'propertyIsEnumerable',
'toString',
'valueOf',
'__proto__',
'toLocaleString'
];

var checkJSDOM_JSDOMproperties = [
'length',
'prototype',
'fragment',
'fromURL',
'fromFile',
'name'
];

var checkJSDOMdomProtoProperties = [
'constructor',
'window',
'virtualConsole',
'cookieJar',
'serialize',
'nodeLocation',
'runVMScript',
'reconfigure'
];

var checkJSDOMdomWindowProperties = [
"_proxyWindowEventsToWindow",
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
"_initGlobalEvents",
"_getEventHandlerTarget",
"_getEventHandlerFor",
"_setEventHandlerFor",
"_globalEventChanged",
"onabort",
"onautocomplete",
"onautocompleteerror",
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
"ondragexit",
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
"onsecuritypolicyviolation",
"onseeked",
"onseeking",
"onselect",
"onsort",
"onstalled",
"onsubmit",
"onsuspend",
"ontimeupdate",
"ontoggle",
"onvolumechange",
"onwaiting",
"_registeredHandlers",
"_eventHandlers",
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
"XPathException",
"XPathExpression",
"XPathResult",
"XPathEvaluator",
"NodeFilter",
"URL",
"URLSearchParams",
"Window",
"_resourceLoader",
"_globalProxy",
"_document",
"_sessionHistory",
"_virtualConsole",
"_runScripts",
"_top",
"_parent",
"_frameElement",
"_length",
"_pretendToBeVisual",
"_storageQuota",
"_commonForOrigin",
"_currentOriginData",
"_localStorage",
"_sessionStorage",
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
"__stopAllTimers",
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
];

var domJsdomBrowserCommon = [
//"_proxyWindowEventsToWindow",
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
//"_initGlobalEvents",
//"_getEventHandlerTarget",
//"_getEventHandlerFor",
//"_setEventHandlerFor",
//"_globalEventChanged",
"onabort",
//"onautocomplete",
//"onautocompleteerror",
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
//"ondragexit",
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
//"onsecuritypolicyviolation",
"onseeked",
"onseeking",
"onselect",
//"onsort",
"onstalled",
"onsubmit",
"onsuspend",
"ontimeupdate",
"ontoggle",
"onvolumechange",
"onwaiting",
//"_registeredHandlers",
//"_eventHandlers",
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
//"XPathException",
"XPathExpression",
"XPathResult",
"XPathEvaluator",
"NodeFilter",
"URL",
"URLSearchParams",
"Window",
//"_resourceLoader",
//"_globalProxy",
//"_document",
//"_sessionHistory",
//"_virtualConsole",
//"_runScripts",
//"_top",
//"_parent",
//"_frameElement",
//"_length",
//"_pretendToBeVisual",
//"_storageQuota",
//"_commonForOrigin",
//"_currentOriginData",
//"_localStorage",
//"_sessionStorage",
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
//"__stopAllTimers",
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
];

var coreObjectProperties = [
'length',
  'name',
  'prototype',
  'assign',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'is',
  'preventExtensions',
  'seal',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getPrototypeOf',
  'setPrototypeOf',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'entries',
  'values'
];

var coreObjectPrototypeProperties = [ 
'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString' 
];

var coreObjectProtoProperties = ['length',
  'name',
  'arguments',
  'caller',
  'constructor',
  'apply',
  'bind',
  'call',
  'toString' 
];

var coreArrayProperties = [ 
'length', 
'name', 
'prototype', 
'isArray', 
'from', 
'of'
];

var coreArrayPrototypeProperties = [ 
'length',
  'constructor',
  'concat',
  'pop',
  'push',
  'shift',
  'unshift',
  'slice',
  'splice',
  'includes',
  'indexOf',
  'keys',
  'entries',
  'forEach',
  'filter',
  'map',
  'every',
  'some',
  'reduce',
  'reduceRight',
  'toString',
  'toLocaleString',
  'join',
  'reverse',
  'sort',
  'lastIndexOf',
  'copyWithin',
  'find',
  'findIndex',
  'fill' 
];

var coreArrayProtoProperties = [ 
'length',
  'name',
  'arguments',
  'caller',
  'constructor',
  'apply',
  'bind',
  'call',
  'toString' 
];

var stringProperty = [ 
'length',
'name',
'prototype',
'fromCharCode',
'fromCodePoint',
'raw'
];

var stringPrototypeProperty = [
'length',
'constructor',
'charAt',
'charCodeAt',
'concat',
'endsWith',
'includes',
'indexOf',
'lastIndexOf',
'localeCompare',
'normalize',
'replace',
'slice',
'split',
'substr',
'substring',
'startsWith',
'toString',
'trim',
'trimLeft',
'trimRight',
'toLocaleLowerCase',
'toLocaleUpperCase',
'toLowerCase',
'toUpperCase',
'valueOf',
'match',
'search',
'anchor',
'big',
'blink',
'bold',
'fixed',
'fontcolor',
'fontsize',
'italics',
'link',
'small',
'strike',
'sub',
'sup',
'repeat',
'codePointAt',
'padStart',
'padEnd'
];

var globalProperties = { 
Object: 'function',
Function: 'function',
Array: 'function',
Number: 'function',
parseFloat: 'function',
parseInt: 'function',
Infinity: 'number',
NaN: 'number',
undefined: 'undefined',
Boolean: 'function',
String: 'function',
Symbol: 'function',
Date: 'function',
Promise: 'function',
RegExp: 'function',
Error: 'function',
EvalError: 'function',
RangeError: 'function',
ReferenceError: 'function',
SyntaxError: 'function',
TypeError: 'function',
URIError: 'function',
JSON: 'object',
Math: 'object',
console: 'object',
ArrayBuffer: 'function',
Uint8Array: 'function',
Int8Array: 'function',
Uint16Array: 'function',
Int16Array: 'function',
Uint32Array: 'function',
Int32Array: 'function',
Float32Array: 'function',
Float64Array: 'function',
Uint8ClampedArray: 'function',
DataView: 'function',
Map: 'function',
Set: 'function',
WeakMap: 'function',
WeakSet: 'function',
Proxy: 'function',
Reflect: 'object',
decodeURI: 'function',
decodeURIComponent: 'function',
encodeURI: 'function',
encodeURIComponent: 'function',
escape: 'function',
unescape: 'function',
eval: 'function',
isFinite: 'function',
isNaN: 'function',
WebAssembly: 'object',
global: 'object',
process: 'object',
GLOBAL: 'object',
root: 'object',
Buffer: 'function',
clearImmediate: 'function',
clearInterval: 'function',
clearTimeout: 'function',
setImmediate: 'function',
setInterval: 'function',
setTimeout: 'function'
}

var globalProtoProperties = {
constructor: 'function'
}

var objectProperties = { 
length: 'number',
name: 'string',
prototype: 'object',
assign: 'function',
getOwnPropertyDescriptor: 'function',
getOwnPropertyDescriptors: 'function',
getOwnPropertyNames: 'function',
getOwnPropertySymbols: 'function',
is: 'function',
preventExtensions: 'function',
seal: 'function',
create: 'function',
defineProperties: 'function',
defineProperty: 'function',
freeze: 'function',
getPrototypeOf: 'function',
setPrototypeOf: 'function',
isExtensible: 'function',
isFrozen: 'function',
isSealed: 'function',
keys: 'function',
entries: 'function',
values: 'function'
}

var objectProtoypeProperties = {
constructor: 'function',
__defineGetter__: 'function',
__defineSetter__: 'function',
hasOwnProperty: 'function',
__lookupGetter__: 'function',
__lookupSetter__: 'function',
isPrototypeOf: 'function',
propertyIsEnumerable: 'function',
toString: 'function',
valueOf: 'function',
toLocaleString: 'function'
}

var objectProtoProperties = { 
length: 'number',
name: 'string',
arguments: false,
caller: false,
constructor: 'function',
apply: 'function',
bind: 'function',
call: 'function',
toString: 'function'
}

var functionProperties = {
length: 'number',
name: 'string',
prototype: 'function'
}

var functionPrototypeProperties = {
length: 'number',
name: 'string',
arguments: false,
caller: false,
constructor: 'function',
apply: 'function',
bind: 'function',
call: 'function',
toString: 'function'
}

var functionProtoProperties = {
length: 'number',
name: 'string',
arguments: false,
caller: false,
constructor: 'function',
apply: 'function',
bind: 'function',
call: 'function',
toString: 'function'
}

var arrayProperties = {
length: 'number',
name: 'string',
prototype: 'object',
isArray: 'function',
from: 'function',
of: 'function'
}

var arrayPrototypeProperties = {
length: 'number',
constructor: 'function',
concat: 'function',
pop: 'function',
push: 'function',
shift: 'function',
unshift: 'function',
slice: 'function',
splice: 'function',
includes: 'function',
indexOf: 'function',
keys: 'function',
entries: 'function',
forEach: 'function',
filter: 'function',
map: 'function',
every: 'function',
some: 'function',
reduce: 'function',
reduceRight: 'function',
toString: 'function',
toLocaleString: 'function',
join: 'function',
reverse: 'function',
sort: 'function',
lastIndexOf: 'function',
copyWithin: 'function',
find: 'function',
findIndex: 'function',
fill: 'function'
}

var arrayProtoProperties = {
length: 'number',
name: 'string',
arguments: false,
caller: false,
constructor: 'function',
apply: 'function',
bind: 'function',
call: 'function',
toString: 'function'
}

var stringProperties = {}

var stringProtptypeProperties = {}

var stringProtpProperties = {}

var arrayProperties = {}

var booleanProperties = {}

var numberProperties = {}

var symbolProperties = {}

var dateProperties = {}

var promiseProperties = {}

var regexpProperties = {}

var errorProperties = {}

var jsonProperties = {}

var mathProperties = {}

var consoleProperties = {}

var processProperties = {}

var moduleProperties = {}

/*
if ( typeof global !== 'undefined' ) {
  var _jsdom = require('jsdom');
  var { JSDOM } = _jsdom;
  var dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

  //log(Object.prototype === _jsdom.__proto__);
  //log(Object.getOwnPropertyNames( dom.__proto__ ));

  //Object.getOwnPropertyNames( dom.window ).forEach(function each(value){
  //  console.log('"' + value + '",');
  //});

  //console.log(dom.window);
}
*/

/*
if ( theOutput.indexOf('node') >= 0 ) {
	// check core js
	// check standard node properties and modules
	
	checkNodeGLobalProperties.forEach(function(value){
    if ( typeof global[value] == 'undefined' )
		  log(value,typeof global[value]);
  });
  
	checkNodeBrowserCommonProperties.forEach(function(value){
    if ( typeof global[value] == 'undefined' )
		  log(value,typeof global[value]);
	});
}
*/

if ( theOutput.indexOf('browser') >= 0 ) {
	// check core js
  // check standard dom properties
  
  if ( typeof window !== 'undefined' ) {
    checkNodeGLobalProperties.forEach(function(value){
      if ( typeof window[value] == 'undefined')
        log(value,typeof window[value]);
    });
    checkNodeBrowserCommonProperties.forEach(function(value){
      if ( typeof window[value] == 'undefined')
        log(value,typeof window[value]);
    });
    checkJSDOMdomWindowProperties.forEach(function(value){
      if ( typeof window[value] == 'undefined')
        log(value,typeof window[value]);
    });
    checkJSDOMdomWindowBrowserCommonProperties.forEach(function(value){
      if ( typeof window[value] == 'undefined')
      log(value,typeof window[value]);
    });
  }
}

// browser chrome
// window properties length : 823
// checkJSDOMdomWindowBrowserCommonProperties length : 309
// window not core not jsdoom length : 477

//console.log(JSON.stringify());
//checkJSDOMdomWindowBrowserCommonProperties.filter(function(value){return windowProperties.indexOf(value) > 0;});
//checkJSDOMdomWindowBrowserCommonProperties.filter(function(value){return windowProperties.indexOf(value) > 0 ? true : false;});
//checkJSDOMdomWindowBrowserCommonProperties.filter(function(value){return windowProperties.indexOf(value) > 0 ? false : true;});
// addEventListener,function
// removeEventListener,function
// dispatchEvent,function

// browser chrome, browser not jsdom
//windowProperties.filter(function(value){return checkJSDOMdomWindowBrowserCommonProperties.indexOf(value) > 0 ? false : true;});

// browser chrome, browser and jsdom
//windowProperties.filter(function(value){return checkJSDOMdomWindowBrowserCommonProperties.indexOf(value) > 0 ? true : false;});

//check1 = checkJSDOMdomWindowBrowserCommonProperties.filter(function(value){return windowProperties.indexOf(value) > 0 ? true : false;});
//check2 = windowProperties.filter(function(value){return checkJSDOMdomWindowBrowserCommonProperties.indexOf(value) > 0 ? true : false;});
//check1.forEach(function(value){if ( check2.indexOf(value) === -1 ) { console.log(value,false); } else { console.log(value,true); } });
//check1.forEach(function(value){if ( check2.indexOf(value) === -1 ) { console.log(value,false); } else {  } });
//onafterprint,false
//check1.forEach(function(value){if ( check2.indexOf(value) === -1 ) {  } else { console.log(value,true); } });
//check2.forEach(function(value){if ( check1.indexOf(value) === -1 ) { console.log(value,false); } else {  } });
//check2.forEach(function(value){if ( check1.indexOf(value) === -1 ) {  } else { console.log(value,true); } });

//windowProperties.filter(function(value){return checkJSDOMdomWindowBrowserCommonProperties.concat(checkNodeBrowserCommonProperties).indexOf(value) > 0 ? false : true;});

if ( theOutput == 'node-module' ) {
	module.exports = {
		coreNodeGlobal : coreNodeGlobal,
		coreNodeBrowserGlobal : coreNodeBrowserGlobal,
		domJsdomBrowserCommon : domJsdomBrowserCommon
	}
}