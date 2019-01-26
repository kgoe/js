;
var emmet = require('emmet');
const snippet = {};

snippet.h001 = 'html>(head>(title+meta+link+style+script))+(body>(header+main+footer+script))';

snippet.h002 = 'html>(head>(title+meta+link+style+script))+(body>(header+main+footer+script[src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"]))';

console.log(emmet.expandAbbreviation(snippet.h001));

/*
  <script id="sap-ui-bootstrap"
  type="text/javascript"
  src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
  data-sap-ui-theme="sap_belize"
  data-sap-ui-libs="sap.m">
      // https://openui5.org/releases/
      // https://openui5.hana.ondemand.com/#/topic/2d3eb2f322ea4a82983c1c62a33ec4ae
      // sap-ui-optimized
      // ES6Promise
      // sap
      // sap-ui-debug
      // URI
      // $
      // jQuery
      // sap-ui-config
  </script>

  <script src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/indefinite-observable/1.0.1/indefinite-observable.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>

  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.0/zawgyi_detector.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.0/zawgyi_converter.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/shaka-player/2.4.5/shaka-player.compiled.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js"></script>

  script src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js">
      // angular
      // https://cdnjs.com/libraries/angular.js
      // https://angularjs.org/
  </script>
*/
