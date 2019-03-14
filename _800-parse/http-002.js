;
const httpHelper = require('./module-http.js');

var httpBasicPromiseGet = httpHelper.httpBasicPromiseGet;
var httpBasicPromisePost = httpHelper.httpBasicPromisePost;
var validateOutput = httpHelper.validateOutput;

config = {
  theHost: 'www.google.com',
  thePath: '/?gws_rd=ssl',
  isHTTPS: true,
  outputResponse: true,
};

httpBasicPromiseGet(config).then(validateOutput);
