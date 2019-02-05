;

var myApplication = myApplication || {};

if( !MyApplication ){ MyApplication = {} };

window.myApplication || ( window.myApplication = {} );

myApplication || (myApplication = {});

var myApplication = $.fn.myApplication = function() {};

var myApplication = myApplication === undefined ? {} : myApplication;

var theApp1 = (function() {
  var output = {};
  output.property1 = 1;
  output.property2 = 2;
  return output;
});

var theApp2 = {};
(function(app) {
  app.property1 = 1;
  app.property2 = 2;
})(theApp2);
