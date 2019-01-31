;
const puppeteer = require('puppeteer');
const emmet = require('emmet');

/**
 * makeEmmet
 * @return {string}
 */
function makeEmmet() {
  var output = '';

  var styleBootstrap4 = '+link[rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css]';
  var scriptBootstrap4 = '+script[src=https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js]';
  var scriptBootsrtap4Bundle = '+script[src=https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.bundle.min.js]';

  var scriptJquery1 = '+script[src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"]';
  var scriptAngular1 = '+script[src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"]';
  var scriptD35 = '+script[src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"]';

  var scripthc7a = '+script[src="https://code.highcharts.com/highcharts.js"]';
  var scripthc7b = '+script[src="https://code.highcharts.com/highcharts-3d.js"]';
  var scripthc7c = '+script[src="https://code.highcharts.com/highcharts-more.js"]';
  var scripthc7d = '+script[src="https://code.highcharts.com/modules/series-label.js"]';
  var scripthc7e = '+script[src="https://code.highcharts.com/modules/funnel.js"]';
  var scripthc7f = '+script[src="https://code.highcharts.com/modules/exporting.js"]';
  var scripthc7g = '+script[src="https://code.highcharts.com/modules/export-data.js"]';

  var scriptAwsSdk = '+script[src=https://sdk.amazonaws.com/js/aws-sdk-2.283.1.min.js]';

  var head = 'head>(title+meta+link+style+script>{script})';
  var headScript = '{var initprop=Object.getOwnPropertyNames(window);}';
  head = head.replace('{script}', headScript);

  var body = 'body>(header+main+footer+{scripts})';
  // +script[]+script
  // var bodyScript = scriptJquery1 + scriptAngular1 + scriptD35;
  var bodyScript = scriptAwsSdk;
  body = body.replace('+{scripts}', bodyScript);

  var html = 'html>(head<>)+(body<>)';
  html = html.replace('head<>', head).replace('body<>', body);

  output = html;
  return output;
}

// const sniph002 = 'html>(head>(title+meta+link+style+script>{var initprop=Object.getOwnPropertyNames(window);}))+(body>(header+main+footer+script[src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"]))';
const sniph002 = makeEmmet();

var html = emmet.expandAbbreviation(sniph002);
html2 = html.replace(/\$\{0\}/g, '');
// console.log(html2);

/**
 * compareProperties
 * @description compares 2 json objects, returns properties not present in p1
 * @param {string} p1
 * @param {string} p2
 * @return {*}
 */
function compareProperties( p1, p2 ) {
  if ( typeof p1 == 'string' && typeof p2 == 'string' ) {
    var pp1 = JSON.parse(p1);
    var pp2 = JSON.parse(p2);
    var pp1l = pp1.length;
    var pp2l = pp2.length;
    var set = [];
    var unset = [];
    for ( itemcnt = 0; itemcnt < pp2l; itemcnt ++ ) {
      var theItem = pp2[itemcnt];
      if ( pp1.indexOf(theItem) >= 0 ) {
        set.push(theItem);
      } else {
        unset.push(theItem);
      }
    }
    return unset;
  } else {
    return false;
  }
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://google.com');

  await page.setContent(html2);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    console.log(window.AWS);
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      init: JSON.stringify(initprop),
      props: JSON.stringify(Object.getOwnPropertyNames(window)),
      aws: JSON.stringify(Object.getOwnPropertyNames(window.AWS)),
    };
  });

  // await console.log('Dimensions:', dimensions);
  // await console.log(page);
  await console.log(compareProperties(dimensions.init, dimensions.props));
  // [ 'angular' ]

  console.log(dimensions.aws);
  /*
  util
  VERSION
  Signers
  Protocol
  XML
  JSON
  Model
  apiLoader
  Service
  Credentials
  CredentialProviderChain
  Config
  config
  Endpoint
  HttpRequest
  HttpResponse
  HttpClient
  SequentialExecutor
  EventListeners
  Request
  Response
  ResourceWaiter
  ParamValidator
  events
  STS
  TemporaryCredentials
  WebIdentityCredentials
  CognitoIdentity
  CognitoIdentityCredentials
  SAMLCredentials
  XHRClient
  ACM
  APIGateway
  ApplicationAutoScaling
  AutoScaling
  CloudFormation
  CloudFront
  CloudHSM
  CloudTrail
  CloudWatch
  CloudWatchEvents
  CloudWatchLogs
  CodeBuild
  CodeCommit
  CodeDeploy
  CodePipeline
  CognitoIdentityServiceProvider
  CognitoSync
  ConfigService
  CUR
  DeviceFarm
  DirectConnect
  DynamoDB
  DynamoDBStreams
  EC2
  ECR
  ECS
  EFS
  ElastiCache
  ElasticBeanstalk
  ELB
  ELBv2
  EMR
  ElasticTranscoder
  Firehose
  GameLift
  Inspector
  Iot
  IotData
  Kinesis
  KMS
  Lambda
  LexRuntime
  MachineLearning
  MarketplaceCommerceAnalytics
  MTurk
  MobileAnalytics
  OpsWorks
  Polly
  RDS
  Redshift
  Rekognition
  Route53
  Route53Domains
  S3
  ServiceCatalog
  SES
  SNS
  SQS
  SSM
  StorageGateway
  WAF
  WorkDocs
  LexModelBuildingService
  KinesisVideoArchivedMedia
  KinesisVideo
  Translate
  SecretsManager
  */

  await browser.close();
})();
