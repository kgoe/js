const http = require('http');

const fmtHost = function fmtHost( hostName, hostPath ) {
  var theObj = {};
  theObj.host = hostName;
  theObj.path = hostPath;
  return theObj;
};

const httpGet = function httpGet( httpOption, responseCallback ) {
  http.get( httpOption, function httpExecGet( res, req ) {
    var responseText = '';
    req.toString();

    res.on('data', function onData( response ) {
      responseText += response;
    });

    res.on('end', function onEnd( response ) {
      response.toString();
      responseCallback( responseText );
    });
  });
};

httpGet( fmtHost('www.google.com', '/'), console.log);
