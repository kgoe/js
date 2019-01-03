;

/**
 * BuildHtml
 * constructor
 * @class
 */
function BuildHtml() {
  this.source =
`
<html>
{html_head}
{html_body}
</html>
`;
  this.htmlHead =
`
<head>
{head}
</head>
`;

  this.htmlBody =
`
<body>
{body}
</body>
`;
}

cdn = {
  d3: `<script src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"></script>`,
  dojo: `<script src="https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>`,
  ext: `<script src="https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js"></script>`,
  hammer: `<script src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"></script>`,
  indefiniteObservable: `<script src="https://ajax.googleapis.com/ajax/libs/indefinite-observable/1.0.1/indefinite-observable.js"></script>`,
  jquery1: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`,
  jquery2: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`,
  jquery3: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`,
  jquerymobileCSS: `<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">`,
  jquerymobileJS: `<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>`,
  jqueryuiCSS: `<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">`,
  jqueryuiJS: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>`,
  mootools: `<script src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"></script>`,
  myanmard: `<script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.0/zawgyi_detector.min.js"></script>`,
  myanmarc: `<script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.0/zawgyi_converter.min.js"></script>`,
  prototype: `<script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"></script>`,
  scriptaculous: `<script src="https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js"></script>`,
  spf: `<script src="https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js"></script>`,
  shakaPlayer: `<script src="https://ajax.googleapis.com/ajax/libs/shaka-player/2.4.5/shaka-player.compiled.js"></script>`,
  swfObject: `<script src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>`,
  three: `<script src="https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js"></script>`,
  webFont: `<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>`,
};

cdnjs = {
  chai: `<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js"></script>`,
  mocha: `<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/5.2.0/mocha.min.js"></script>`,
  knockout: `<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>`,
  highcharts: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/7.0.1/highcharts.js"></script>`,
  html: `<script src="https://cdnjs.cloudflare.com/ajax/libs/html.js/0.12.1/HTML.min.js"></script>`,
  angular: `<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>`,
  moment: `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.23.0/moment.min.js"></script>`,
  chrono: `<script src="https://cdnjs.cloudflare.com/ajax/libs/chrono/1.0.5/chrono.min.js"></script>`,
  goJS: `<script src="https://cdnjs.cloudflare.com/ajax/libs/gojs/1.8.35/go.js"></script>`,
  photonCSS: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.min.css" />`,
  sapui5:
  `
  <script id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://sapui5.hana.ondemand.com/1.42.6/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-libs="sap.m">
  </script>
  `,
  sapopenui5:
  `
  <script id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://openui5.hana.ondemand.com/1.42.6/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-libs="sap.m">
  </script>
  `,
};

BuildHtml.prototype = {
  buildHead: function buildHead() {
  },
  buildBody: function buildBody() {
  },
  buildSource: function buildSource() {
  },
}