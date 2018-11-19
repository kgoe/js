const _http = require('http');
const _cher = require('cheerio');
const _lg = console.log;

const fmtHost = function fmtHost( hostName, hostPath ) {
  var theObj = {};
	 theObj.host = hostName;
	 theObj.path = hostPath;
	 return theObj;
};

const httpGet = function httpGet( httpOption, responseCallback ) {
  _http.get( httpOption, function httpExecGet( res, req ) {
    var responseText = "";
    
    res.on('data', function onData( response ){
      responseText += response;
    });
    
    res.on('end', function onEnd( response ) {
      responseCallback( responseText );
    });
  });
};

const responseParse = function responseParse( res ) {
	 var $$ = _cher.load(res);
	 var $$body = $$('body')
  _lg($$);
};

httpGet( fmtHost("www.google.com","/"), responseParse);
//_lg(_cher.load());
