const _http = require('https');
const _cher = require('cheerio');
const _lg = console.log;
const log = console.log;

const _jsdom = require('jsdom');
const {JSDOM} = _jsdom;

const fmtHost = function fmtHost( hostName, hostPath ) {
  var theObj = {};
	 theObj.host = hostName;
	 theObj.path = hostPath;
	 return theObj;
};

const httpGet = function httpGet( httpOption, responseCallback ) {
  _http.get( httpOption, function httpExecGet( res, req ) {
    var responseText = '';

    res.on('data', function onData( response ) {
      responseText += response;
    });

    res.on('end', function onEnd( response ) {
      responseCallback( responseText );
    });
  });
};

const responseParse = function responseParse( res ) {
	 var $$ = _cher.load(res);
	 var $$body = $$('body');
  _lg($$.html());
};

// log([_jsdom,JSDOM]);

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector('p').textContent);
// Hello World

// log(dom.window);
// log(dom.window.document);
// log(dom.window.document.__proto__);

// log(dom);
// log(Object.getOwnPropertyNames(global));
/*
[ 'Object',
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
  'global',
  'process',
  'GLOBAL',
  'root',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout' ]
*/

// httpGet( fmtHost("www.pse.com.ph","/stockMarket/home.html"), responseParse);
// httpGet( fmtHost("www.pse.com.ph","/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi"), responseParse);
// httpGet( fmtHost("www.pse.com.ph","/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=viewIndicesComposition&ajax=true&indexName=PSEi"), responseParse);

// _lg(_cher.load());
// url: 'marketInfo-marketActivity-indicesComposition.html?method=viewIndicesComposition',
// params: '&ajax=true&indexName=PSEi',

// https://m.investing.com/indices/psei-composite
// https://m.investing.com/indices/psei-composite-components

// dom jsdom
/*
JSDOM {
  [Symbol(window)]:
   Window {
     onafterprint: [Getter/Setter],
     onbeforeprint: [Getter/Setter],
     onbeforeunload: [Getter/Setter],
     onhashchange: [Getter/Setter],
     onlanguagechange: [Getter/Setter],
     onmessage: [Getter/Setter],
     onmessageerror: [Getter/Setter],
     onoffline: [Getter/Setter],
     ononline: [Getter/Setter],
     onpagehide: [Getter/Setter],
     onpageshow: [Getter/Setter],
     onpopstate: [Getter/Setter],
     onrejectionhandled: [Getter/Setter],
     onstorage: [Getter/Setter],
     onunhandledrejection: [Getter/Setter],
     onunload: [Getter/Setter],
     onblur: [Getter/Setter],
     onerror: [Getter/Setter],
     onfocus: [Getter/Setter],
     onload: [Getter/Setter],
     onresize: [Getter/Setter],
     onscroll: [Getter/Setter],
     onabort: [Getter/Setter],
     onautocomplete: [Getter/Setter],
     onautocompleteerror: [Getter/Setter],
     oncancel: [Getter/Setter],
     oncanplay: [Getter/Setter],
     oncanplaythrough: [Getter/Setter],
     onchange: [Getter/Setter],
     onclick: [Getter/Setter],
     onclose: [Getter/Setter],
     oncontextmenu: [Getter/Setter],
     oncuechange: [Getter/Setter],
     ondblclick: [Getter/Setter],
     ondrag: [Getter/Setter],
     ondragend: [Getter/Setter],
     ondragenter: [Getter/Setter],
     ondragexit: [Getter/Setter],
     ondragleave: [Getter/Setter],
     ondragover: [Getter/Setter],
     ondragstart: [Getter/Setter],
     ondrop: [Getter/Setter],
     ondurationchange: [Getter/Setter],
     onemptied: [Getter/Setter],
     onended: [Getter/Setter],
     oninput: [Getter/Setter],
     oninvalid: [Getter/Setter],
     onkeydown: [Getter/Setter],
     onkeypress: [Getter/Setter],
     onkeyup: [Getter/Setter],
     onloadeddata: [Getter/Setter],
     onloadedmetadata: [Getter/Setter],
     onloadstart: [Getter/Setter],
     onmousedown: [Getter/Setter],
     onmouseenter: [Getter/Setter],
     onmouseleave: [Getter/Setter],
     onmousemove: [Getter/Setter],
     onmouseout: [Getter/Setter],
     onmouseover: [Getter/Setter],
     onmouseup: [Getter/Setter],
     onwheel: [Getter/Setter],
     onpause: [Getter/Setter],
     onplay: [Getter/Setter],
     onplaying: [Getter/Setter],
     onprogress: [Getter/Setter],
     onratechange: [Getter/Setter],
     onreset: [Getter/Setter],
     onsecuritypolicyviolation: [Getter/Setter],
     onseeked: [Getter/Setter],
     onseeking: [Getter/Setter],
     onselect: [Getter/Setter],
     onsort: [Getter/Setter],
     onstalled: [Getter/Setter],
     onsubmit: [Getter/Setter],
     onsuspend: [Getter/Setter],
     ontimeupdate: [Getter/Setter],
     ontoggle: [Getter/Setter],
     onvolumechange: [Getter/Setter],
     onwaiting: [Getter/Setter],
     _registeredHandlers: Set {},
     _eventHandlers: {},
     _resourceLoader:
      NoOpResourceLoader {
        _strictSSL: true,
        _proxy: undefined,
        _userAgent: 'Mozilla/5.0 (android) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/13.0.0' },
     _globalProxy: [Circular],
     _document: Document { location: [Getter/Setter] },
     _sessionHistory:
      SessionHistory {
        _window: [Circular],
        _windowImpl: [Object],
        _historyTraversalQueue: Set {},
        _entries: [Array],
        _currentIndex: 0 },
     _virtualConsole:
      VirtualConsole {
        domain: null,
        _events: [Object],
        _eventsCount: 17,
        _maxListeners: undefined },
     _runScripts: undefined,
     _top: [Circular],
     _parent: [Circular],
     _frameElement: null,
     _length: 0,
     _pretendToBeVisual: false,
     _storageQuota: 5000000,
     _commonForOrigin: { null: [Object] },
     _currentOriginData:
      { localStorageArea: Map {},
        sessionStorageArea: Map {},
        windowsInSameOrigin: [Array] },
     _localStorage: Storage {},
     _sessionStorage: Storage {},
     length: [Getter],
     window: [Getter],
     frameElement: [Getter],
     frames: [Getter],
     self: [Getter],
     parent: [Getter],
     top: [Getter],
     document: [Getter],
     external: [Getter],
     location: [Getter],
     history: [Getter],
     navigator: [Getter],
     locationbar: [Getter],
     menubar: [Getter],
     personalbar: [Getter],
     scrollbars: [Getter],
     statusbar: [Getter],
     toolbar: [Getter],
     performance: [Getter],
     screen: [Getter],
     localStorage: [Getter],
     sessionStorage: [Getter],
     addEventListener: [Function: bound addEventListener],
     removeEventListener: [Function: bound removeEventListener],
     dispatchEvent: [Function: bound dispatchEvent],
     setTimeout: [Function],
     setInterval: [Function],
     clearInterval: [Function: bound stopTimer],
     clearTimeout: [Function: bound stopTimer],
     __stopAllTimers: [Function],
     postMessage: [Function],
     atob: [Function],
     btoa: [Function],
     FileReader: { [Function: FileReader] EMPTY: 0, LOADING: 1, DONE: 2 },
     WebSocket: { [Function: WebSocket] CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 },
     AbortSignal: [Function: AbortSignal],
     AbortController: [Function: AbortController],
     XMLHttpRequest: { [Function: XMLHttpRequest] UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 },
     ArrayBuffer: [Function: ArrayBuffer],
     Int8Array: [Function: Int8Array],
     Uint8Array: [Function: Uint8Array],
     Uint8ClampedArray: [Function: Uint8ClampedArray],
     Int16Array: [Function: Int16Array],
     Uint16Array: [Function: Uint16Array],
     Int32Array: [Function: Int32Array],
     Uint32Array: [Function: Uint32Array],
     Float32Array: [Function: Float32Array],
     Float64Array: [Function: Float64Array],
     stop: [Function],
     close: [Function],
     getComputedStyle: [Function],
     captureEvents: [Function],
     releaseEvents: [Function],
     console:
      { assert: [Function],
        clear: [Function],
        count: [Function],
        countReset: [Function],
        debug: [Function],
        dir: [Function],
        dirxml: [Function],
        error: [Function],
        group: [Function],
        groupCollapsed: [Function],
        groupEnd: [Function],
        info: [Function],
        log: [Function],
        table: [Function],
        time: [Function],
        timeEnd: [Function],
        trace: [Function],
        warn: [Function] },
     name: '',
     status: '',
     devicePixelRatio: 1,
     innerWidth: 1024,
     innerHeight: 768,
     outerWidth: 1024,
     outerHeight: 768,
     pageXOffset: 0,
     pageYOffset: 0,
     screenX: 0,
     screenY: 0,
     scrollX: 0,
     scrollY: 0,
     screenLeft: 0,
     screenTop: 0,
     alert: [Function],
     blur: [Function],
     confirm: [Function],
     focus: [Function],
     moveBy: [Function],
     moveTo: [Function],
     open: [Function],
     print: [Function],
     prompt: [Function],
     resizeBy: [Function],
     resizeTo: [Function],
     scroll: [Function],
     scrollBy: [Function],
     scrollTo: [Function],
     [Symbol(named property tracker)]:
      NamedPropertiesTracker {
        object: [Circular],
        objectProxy: [Circular],
        resolverFunc: [Function: bound namedPropertyResolver],
        trackedValues: Map {} } } }
*/
