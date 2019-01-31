;

var nodeModules = {};

nodeModules.node10_15 =
`
assert|function
async_hooks|object
buffer|object
child_process|object
cluster|object
console|object
constants|object
crypto|object
dgram|object
dns|object
domain|object
events|function
fs|object
http|object
http2|object
https|object
inspector|object
module|function
net|object
os|object
path|object
perf_hooks|object
process|object
punycode|object
querystring|object
readline|object
repl|object
stream|function
string_decoder|object
sys|object|deprecated, use util
timers|object
tls|object
trace_events|object
tty|object
url|object
util|object
v8|object
vm|object
worker_threads|undefined|module not found
zlib|object
`;

// console.log(node_modules.node10_15.split('\n'));

/**
 * eachModule
 * @param {string} str
 * @param {array} arr
 */
function eachModule( str, arr ) {
	 if ( str.trim().length > 0 ) {
	 	 var item = str.split('|')[0];
	 	 var type = str.split('|')[1];
	 	 try {
      nodeModules[item] = require(item);
      console.log( item, type, typeof nodeModules[item] == type );
    } catch ( err ) {
    	 console.log( item, type, err );
    }
  }
}

nodeModules.node10_15.split('\n').forEach(eachModule);

// console.log('assert',nodeModules['assert']);
/*
assert function ok(...args) {
  innerOk(ok, args.length, ...args);
}
*/

// console.log('async_hooks',nodeModules['async_hooks']);
/*
async_hooks { 
  createHook: [Function: createHook],
  executionAsyncId: [Function: executionAsyncId],
  triggerAsyncId: [Function: triggerAsyncId],
  AsyncResource: [Function: AsyncResource] 
}
*/

// console.log('buffer',nodeModules['buffer']);
/*
buffer { 
  Buffer:
   { [Function: Buffer]
     poolSize: 8192,
     from: [Function: from],
     of: [Function: of],
     alloc: [Function: alloc],
     allocUnsafe: [Function: allocUnsafe],
     allocUnsafeSlow: [Function: allocUnsafeSlow],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function: isEncoding],
     concat: [Function: concat],
     byteLength: [Function: byteLength],
     [Symbol(kIsEncodingSymbol)]: [Function: isEncoding] },
  SlowBuffer: [Function: SlowBuffer],
  transcode: [Function: transcode],
  INSPECT_MAX_BYTES: 50,
  kMaxLength: 2147483647,
  kStringMaxLength: 1073741799,
  constants: { MAX_LENGTH: 2147483647, MAX_STRING_LENGTH: 1073741799 } 
}
*/

// console.log('child_process',nodeModules['child_process']);
/*
child_process { 
  ChildProcess:
   { [Function: ChildProcess]
     super_:
      { [Function: EventEmitter]
        EventEmitter: [Circular],
        usingDomains: true,
        defaultMaxListeners: [Getter/Setter],
        init: [Function],
        listenerCount: [Function] } },
  fork: [Function: fork],
  _forkChild: [Function: _forkChild],
  exec: [Function: exec],
  execFile: [Function: execFile],
  spawn: [Function: spawn],
  spawnSync: [Function: spawnSync],
  execFileSync: [Function: execFileSync],
  execSync: [Function: execSync] 
}
*/

// console.log('cluster',nodeModules['cluster']);
/*
cluster EventEmitter {
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  isWorker: false,
  isMaster: true,
  Worker:
   { [Function: Worker]
     super_:
      { [Function: EventEmitter]
        EventEmitter: [Circular],
        usingDomains: true,
        defaultMaxListeners: [Getter/Setter],
        init: [Function],
        listenerCount: [Function] } },
  workers: {},
  settings: {},
  SCHED_NONE: 1,
  SCHED_RR: 2,
  schedulingPolicy: 1,
  setupMaster: [Function],
  fork: [Function],
  disconnect: [Function] 
}
*/

// console.log('console',nodeModules['console']);
/*
console Console {
  log: [Function: bound consoleCall],
  debug: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  dirxml: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  timeLog: [Function: bound timeLog],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound consoleCall],
  group: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  table: [Function: bound consoleCall],
  Console: [Function: Console],
  markTimeline: [Function: markTimeline],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeline: [Function: timeline],
  timelineEnd: [Function: timelineEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(counts)]: Map {},
  [Symbol(kColorMode)]: 'auto' 
}
*/

// console.log('constants',nodeModules['constants']);
/*
constants { 
  E2BIG: 7,
  EACCES: 13,
  EADDRINUSE: 100,
  EADDRNOTAVAIL: 101,
  EAFNOSUPPORT: 102,
  EAGAIN: 11,
  EALREADY: 103,
  EBADF: 9,
  EBADMSG: 104,
  EBUSY: 16,
  ECANCELED: 105,
  ECHILD: 10,
  ECONNABORTED: 106,
  ECONNREFUSED: 107,
  ECONNRESET: 108,
  EDEADLK: 36,
  EDESTADDRREQ: 109,
  EDOM: 33,
  EEXIST: 17,
  EFAULT: 14,
  EFBIG: 27,
  EHOSTUNREACH: 110,
  EIDRM: 111,
  EILSEQ: 42,
  EINPROGRESS: 112,
  EINTR: 4,
  EINVAL: 22,
  EIO: 5,
  EISCONN: 113,
  EISDIR: 21,
  ELOOP: 114,
  EMFILE: 24,
  EMLINK: 31,
  EMSGSIZE: 115,
  ENAMETOOLONG: 38,
  ENETDOWN: 116,
  ENETRESET: 117,
  ENETUNREACH: 118,
  ENFILE: 23,
  ENOBUFS: 119,
  ENODATA: 120,
  ENODEV: 19,
  ENOENT: 2,
  ENOEXEC: 8,
  ENOLCK: 39,
  ENOLINK: 121,
  ENOMEM: 12,
  ENOMSG: 122,
  ENOPROTOOPT: 123,
  ENOSPC: 28,
  ENOSR: 124,
  ENOSTR: 125,
  ENOSYS: 40,
  ENOTCONN: 126,
  ENOTDIR: 20,
  ENOTEMPTY: 41,
  ENOTSOCK: 128,
  ENOTSUP: 129,
  ENOTTY: 25,
  ENXIO: 6,
  EOPNOTSUPP: 130,
  EOVERFLOW: 132,
  EPERM: 1,
  EPIPE: 32,
  EPROTO: 134,
  EPROTONOSUPPORT: 135,
  EPROTOTYPE: 136,
  ERANGE: 34,
  EROFS: 30,
  ESPIPE: 29,
  ESRCH: 3,
  ETIME: 137,
  ETIMEDOUT: 138,
  ETXTBSY: 139,
  EWOULDBLOCK: 140,
  EXDEV: 18,
  WSAEINTR: 10004,
  WSAEBADF: 10009,
  WSAEACCES: 10013,
  WSAEFAULT: 10014,
  WSAEINVAL: 10022,
  WSAEMFILE: 10024,
  WSAEWOULDBLOCK: 10035,
  WSAEINPROGRESS: 10036,
  WSAEALREADY: 10037,
  WSAENOTSOCK: 10038,
  WSAEDESTADDRREQ: 10039,
  WSAEMSGSIZE: 10040,
  WSAEPROTOTYPE: 10041,
  WSAENOPROTOOPT: 10042,
  WSAEPROTONOSUPPORT: 10043,
  WSAESOCKTNOSUPPORT: 10044,
  WSAEOPNOTSUPP: 10045,
  WSAEPFNOSUPPORT: 10046,
  WSAEAFNOSUPPORT: 10047,
  WSAEADDRINUSE: 10048,
  WSAEADDRNOTAVAIL: 10049,
  WSAENETDOWN: 10050,
  WSAENETUNREACH: 10051,
  WSAENETRESET: 10052,
  WSAECONNABORTED: 10053,
  WSAECONNRESET: 10054,
  WSAENOBUFS: 10055,
  WSAEISCONN: 10056,
  WSAENOTCONN: 10057,
  WSAESHUTDOWN: 10058,
  WSAETOOMANYREFS: 10059,
  WSAETIMEDOUT: 10060,
  WSAECONNREFUSED: 10061,
  WSAELOOP: 10062,
  WSAENAMETOOLONG: 10063,
  WSAEHOSTDOWN: 10064,
  WSAEHOSTUNREACH: 10065,
  WSAENOTEMPTY: 10066,
  WSAEPROCLIM: 10067,
  WSAEUSERS: 10068,
  WSAEDQUOT: 10069,
  WSAESTALE: 10070,
  WSAEREMOTE: 10071,
  WSASYSNOTREADY: 10091,
  WSAVERNOTSUPPORTED: 10092,
  WSANOTINITIALISED: 10093,
  WSAEDISCON: 10101,
  WSAENOMORE: 10102,
  WSAECANCELLED: 10103,
  WSAEINVALIDPROCTABLE: 10104,
  WSAEINVALIDPROVIDER: 10105,
  WSAEPROVIDERFAILEDINIT: 10106,
  WSASYSCALLFAILURE: 10107,
  WSASERVICE_NOT_FOUND: 10108,
  WSATYPE_NOT_FOUND: 10109,
  WSA_E_NO_MORE: 10110,
  WSA_E_CANCELLED: 10111,
  WSAEREFUSED: 10112,
  PRIORITY_LOW: 19,
  PRIORITY_BELOW_NORMAL: 10,
  PRIORITY_NORMAL: 0,
  PRIORITY_ABOVE_NORMAL: -7,
  PRIORITY_HIGH: -14,
  PRIORITY_HIGHEST: -20,
  SIGHUP: 1,
  SIGINT: 2,
  SIGILL: 4,
  SIGABRT: 22,
  SIGFPE: 8,
  SIGKILL: 9,
  SIGSEGV: 11,
  SIGTERM: 15,
  SIGBREAK: 21,
  SIGWINCH: 28,
  UV_FS_SYMLINK_DIR: 1,
  UV_FS_SYMLINK_JUNCTION: 2,
  O_RDONLY: 0,
  O_WRONLY: 1,
  O_RDWR: 2,
  UV_DIRENT_UNKNOWN: 0,
  UV_DIRENT_FILE: 1,
  UV_DIRENT_DIR: 2,
  UV_DIRENT_LINK: 3,
  UV_DIRENT_FIFO: 4,
  UV_DIRENT_SOCKET: 5,
  UV_DIRENT_CHAR: 6,
  UV_DIRENT_BLOCK: 7,
  S_IFMT: 61440,
  S_IFREG: 32768,
  S_IFDIR: 16384,
  S_IFCHR: 8192,
  S_IFLNK: 40960,
  O_CREAT: 256,
  O_EXCL: 1024,
  O_TRUNC: 512,
  O_APPEND: 8,
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  UV_FS_COPYFILE_EXCL: 1,
  COPYFILE_EXCL: 1,
  UV_FS_COPYFILE_FICLONE: 2,
  COPYFILE_FICLONE: 2,
  UV_FS_COPYFILE_FICLONE_FORCE: 4,
  COPYFILE_FICLONE_FORCE: 4,
  OPENSSL_VERSION_NUMBER: 269484191,
  SSL_OP_ALL: 2147485780,
  SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
  SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
  SSL_OP_CISCO_ANYCONNECT: 32768,
  SSL_OP_COOKIE_EXCHANGE: 8192,
  SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
  SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
  SSL_OP_EPHEMERAL_RSA: 0,
  SSL_OP_LEGACY_SERVER_CONNECT: 4,
  SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
  SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
  SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
  SSL_OP_NETSCAPE_CA_DN_BUG: 0,
  SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
  SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
  SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
  SSL_OP_NO_COMPRESSION: 131072,
  SSL_OP_NO_QUERY_MTU: 4096,
  SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
  SSL_OP_NO_SSLv2: 0,
  SSL_OP_NO_SSLv3: 33554432,
  SSL_OP_NO_TICKET: 16384,
  SSL_OP_NO_TLSv1: 67108864,
  SSL_OP_NO_TLSv1_1: 268435456,
  SSL_OP_NO_TLSv1_2: 134217728,
  SSL_OP_PKCS1_CHECK_1: 0,
  SSL_OP_PKCS1_CHECK_2: 0,
  SSL_OP_SINGLE_DH_USE: 0,
  SSL_OP_SINGLE_ECDH_USE: 0,
  SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
  SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
  SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
  SSL_OP_TLS_D5_BUG: 0,
  SSL_OP_TLS_ROLLBACK_BUG: 8388608,
  ENGINE_METHOD_RSA: 1,
  ENGINE_METHOD_DSA: 2,
  ENGINE_METHOD_DH: 4,
  ENGINE_METHOD_RAND: 8,
  ENGINE_METHOD_EC: 2048,
  ENGINE_METHOD_CIPHERS: 64,
  ENGINE_METHOD_DIGESTS: 128,
  ENGINE_METHOD_PKEY_METHS: 512,
  ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
  ENGINE_METHOD_ALL: 65535,
  ENGINE_METHOD_NONE: 0,
  DH_CHECK_P_NOT_SAFE_PRIME: 2,
  DH_CHECK_P_NOT_PRIME: 1,
  DH_UNABLE_TO_CHECK_GENERATOR: 4,
  DH_NOT_SUITABLE_GENERATOR: 8,
  ALPN_ENABLED: 1,
  RSA_PKCS1_PADDING: 1,
  RSA_SSLV23_PADDING: 2,
  RSA_NO_PADDING: 3,
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_X931_PADDING: 5,
  RSA_PKCS1_PSS_PADDING: 6,
  RSA_PSS_SALTLEN_DIGEST: -1,
  RSA_PSS_SALTLEN_MAX_SIGN: -2,
  RSA_PSS_SALTLEN_AUTO: -2,
  POINT_CONVERSION_COMPRESSED: 2,
  POINT_CONVERSION_UNCOMPRESSED: 4,
  POINT_CONVERSION_HYBRID: 6,
  defaultCoreCipherList:
   'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  defaultCipherList:
   'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  INT_MAX: 2147483647
}
*/

// console.log('crypto',nodeModules['crypto']);
/*
crypto { 
  _toBuf: [Function: toBuf],
  createCipher: [Function: createCipher],
  createCipheriv: [Function: createCipheriv],
  createDecipher: [Function: createDecipher],
  createDecipheriv: [Function: createDecipheriv],
  createDiffieHellman: [Function: createDiffieHellman],
  createDiffieHellmanGroup: [Function: createDiffieHellmanGroup],
  createECDH: [Function: createECDH],
  createHash: [Function: createHash],
  createHmac: [Function: createHmac],
  createSign: [Function: createSign],
  createVerify: [Function: createVerify],
  getCiphers: [Function],
  getCurves: [Function],
  getDiffieHellman: [Function: createDiffieHellmanGroup],
  getHashes: [Function],
  pbkdf2: [Function: pbkdf2],
  pbkdf2Sync: [Function: pbkdf2Sync],
  generateKeyPair: [Function: generateKeyPair],
  generateKeyPairSync: [Function: generateKeyPairSync],
  privateDecrypt: [Function],
  privateEncrypt: [Function],
  prng: [Function: randomBytes],
  pseudoRandomBytes: [Function: randomBytes],
  publicDecrypt: [Function],
  publicEncrypt: [Function],
  randomBytes: [Function: randomBytes],
  randomFill: [Function: randomFill],
  randomFillSync: [Function: randomFillSync],
  rng: [Function: randomBytes],
  scrypt: [Function: scrypt],
  scryptSync: [Function: scryptSync],
  setEngine: [Function: setEngine],
  timingSafeEqual: [Function: timingSafeEqual],
  getFips: [Function: getFipsDisabled],
  setFips: [Function: setFipsDisabled],
  Certificate:
   { [Function: Certificate]
     exportChallenge: [Function: exportChallenge],
     exportPublicKey: [Function: exportPublicKey],
     verifySpkac: [Function: verifySpkac] },
  Cipher:
   { [Function: Cipher] super_: { [Function: LazyTransform] super_: [Function] } },
  Cipheriv:
   { [Function: Cipheriv] super_: { [Function: LazyTransform] super_: [Function] } },
  Decipher:
   { [Function: Decipher] super_: { [Function: LazyTransform] super_: [Function] } },
  Decipheriv:
   { [Function: Decipheriv] super_: { [Function: LazyTransform] super_: [Function] } },
  DiffieHellman: [Function: DiffieHellman],
  DiffieHellmanGroup: [Function: DiffieHellmanGroup],
  ECDH: { [Function: ECDH] convertKey: [Function: convertKey] },
  Hash:
   { [Function: Hash] super_: { [Function: LazyTransform] super_: [Function] } },
  Hmac:
   { [Function: Hmac] super_: { [Function: LazyTransform] super_: [Function] } },
  Sign:
   { [Function: Sign]
     super_:
      { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  Verify:
   { [Function: Verify]
     super_:
      { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  DEFAULT_ENCODING: [Getter/Setter],
  constants:
   { OPENSSL_VERSION_NUMBER: 269484191,
     SSL_OP_ALL: 2147485780,
     SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
     SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
     SSL_OP_CISCO_ANYCONNECT: 32768,
     SSL_OP_COOKIE_EXCHANGE: 8192,
     SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
     SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
     SSL_OP_EPHEMERAL_RSA: 0,
     SSL_OP_LEGACY_SERVER_CONNECT: 4,
     SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
     SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
     SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
     SSL_OP_NETSCAPE_CA_DN_BUG: 0,
     SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
     SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
     SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
     SSL_OP_NO_COMPRESSION: 131072,
     SSL_OP_NO_QUERY_MTU: 4096,
     SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
     SSL_OP_NO_SSLv2: 0,
     SSL_OP_NO_SSLv3: 33554432,
     SSL_OP_NO_TICKET: 16384,
     SSL_OP_NO_TLSv1: 67108864,
     SSL_OP_NO_TLSv1_1: 268435456,
     SSL_OP_NO_TLSv1_2: 134217728,
     SSL_OP_PKCS1_CHECK_1: 0,
     SSL_OP_PKCS1_CHECK_2: 0,
     SSL_OP_SINGLE_DH_USE: 0,
     SSL_OP_SINGLE_ECDH_USE: 0,
     SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
     SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
     SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
     SSL_OP_TLS_D5_BUG: 0,
     SSL_OP_TLS_ROLLBACK_BUG: 8388608,
     ENGINE_METHOD_RSA: 1,
     ENGINE_METHOD_DSA: 2,
     ENGINE_METHOD_DH: 4,
     ENGINE_METHOD_RAND: 8,
     ENGINE_METHOD_EC: 2048,
     ENGINE_METHOD_CIPHERS: 64,
     ENGINE_METHOD_DIGESTS: 128,
     ENGINE_METHOD_PKEY_METHS: 512,
     ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
     ENGINE_METHOD_ALL: 65535,
     ENGINE_METHOD_NONE: 0,
     DH_CHECK_P_NOT_SAFE_PRIME: 2,
     DH_CHECK_P_NOT_PRIME: 1,
     DH_UNABLE_TO_CHECK_GENERATOR: 4,
     DH_NOT_SUITABLE_GENERATOR: 8,
     ALPN_ENABLED: 1,
     RSA_PKCS1_PADDING: 1,
     RSA_SSLV23_PADDING: 2,
     RSA_NO_PADDING: 3,
     RSA_PKCS1_OAEP_PADDING: 4,
     RSA_X931_PADDING: 5,
     RSA_PKCS1_PSS_PADDING: 6,
     RSA_PSS_SALTLEN_DIGEST: -1,
     RSA_PSS_SALTLEN_MAX_SIGN: -2,
     RSA_PSS_SALTLEN_AUTO: -2,
     POINT_CONVERSION_COMPRESSED: 2,
     POINT_CONVERSION_UNCOMPRESSED: 4,
     POINT_CONVERSION_HYBRID: 6,
     defaultCoreCipherList:
      'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
     defaultCipherList:
      'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
     INT_MAX: 2147483647 },
  createCredentials: [Getter],
  Credentials: [Getter] 
}
*/

// console.log('dgram',nodeModules['dgram']);
/*
dgram { 
  _createSocketHandle: [Function: _createSocketHandle],
  createSocket: [Function: createSocket],
  Socket:
  { 
    [Function: Socket]
    super_: { 
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: true,
      defaultMaxListeners: [Getter/Setter],
      init: [Function],
      listenerCount: [Function]
    } 
  }
}
*/

// console.log('dns',nodeModules['dns']);
/*
dns { 
  lookup: [Function: lookup],
  lookupService: [Function: lookupService],
  Resolver: [Function: Resolver],
  setServers: [Function: defaultResolverSetServers],
  ADDRCONFIG: 1024,
  V4MAPPED: 2048,
  NODATA: 'ENODATA',
  FORMERR: 'EFORMERR',
  SERVFAIL: 'ESERVFAIL',
  NOTFOUND: 'ENOTFOUND',
  NOTIMP: 'ENOTIMP',
  REFUSED: 'EREFUSED',
  BADQUERY: 'EBADQUERY',
  BADNAME: 'EBADNAME',
  BADFAMILY: 'EBADFAMILY',
  BADRESP: 'EBADRESP',
  CONNREFUSED: 'ECONNREFUSED',
  TIMEOUT: 'ETIMEOUT',
  EOF: 'EOF',
  FILE: 'EFILE',
  NOMEM: 'ENOMEM',
  DESTRUCTION: 'EDESTRUCTION',
  BADSTR: 'EBADSTR',
  BADFLAGS: 'EBADFLAGS',
  NONAME: 'ENONAME',
  BADHINTS: 'EBADHINTS',
  NOTINITIALIZED: 'ENOTINITIALIZED',
  LOADIPHLPAPI: 'ELOADIPHLPAPI',
  ADDRGETNETWORKPARAMS: 'EADDRGETNETWORKPARAMS',
  CANCELLED: 'ECANCELLED',
  getServers: [Function: bound getServers],
  resolve: [Function: bound resolve],
  resolveAny: [Function: bound queryAny],
  resolve4: [Function: bound queryA],
  resolve6: [Function: bound queryAaaa],
  resolveCname: [Function: bound queryCname],
  resolveMx: [Function: bound queryMx],
  resolveNs: [Function: bound queryNs],
  resolveTxt: [Function: bound queryTxt],
  resolveSrv: [Function: bound querySrv],
  resolvePtr: [Function: bound queryPtr],
  resolveNaptr: [Function: bound queryNaptr],
  resolveSoa: [Function: bound querySoa],
  reverse: [Function: bound getHostByAddr] 
}
*/

// console.log('domain',nodeModules['domain']);
/*
domain { 
  _stack: [],
  Domain: [Function: Domain],
  createDomain: [Function: createDomain],
  create: [Function: createDomain],
  active: null
}
*/

// console.log('events',nodeModules['events']);
/*
events function EventEmitter() {
  EventEmitter.init.call(this);
}
*/

// console.log('fs',nodeModules['fs']);
/*
fs { 
  appendFile: [Function: appendFile],
  appendFileSync: [Function: appendFileSync],
  access: [Function: access],
  accessSync: [Function: accessSync],
  chown: [Function: chown],
  chownSync: [Function: chownSync],
  chmod: [Function: chmod],
  chmodSync: [Function: chmodSync],
  close: [Function: close],
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],
  copyFileSync: [Function: copyFileSync],
  createReadStream: [Function: createReadStream],
  createWriteStream: [Function: createWriteStream],
  exists: [Function: exists],
  existsSync: [Function: existsSync],
  fchown: [Function: fchown],
  fchownSync: [Function: fchownSync],
  fchmod: [Function: fchmod],
  fchmodSync: [Function: fchmodSync],
  fdatasync: [Function: fdatasync],
  fdatasyncSync: [Function: fdatasyncSync],
  fstat: [Function: fstat],
  fstatSync: [Function: fstatSync],
  fsync: [Function: fsync],
  fsyncSync: [Function: fsyncSync],
  ftruncate: [Function: ftruncate],
  ftruncateSync: [Function: ftruncateSync],
  futimes: [Function: futimes],
  futimesSync: [Function: futimesSync],
  lchown: [Function: lchown],
  lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  link: [Function: link],
  linkSync: [Function: linkSync],
  lstat: [Function: lstat],
  lstatSync: [Function: lstatSync],
  mkdir: [Function: mkdir],
  mkdirSync: [Function: mkdirSync],
  mkdtemp: [Function: mkdtemp],
  mkdtempSync: [Function: mkdtempSync],
  open: [Function: open],
  openSync: [Function: openSync],
  readdir: [Function: readdir],
  readdirSync: [Function: readdirSync],
  read: [Function: read],
  readSync: [Function: readSync],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  readlink: [Function: readlink],
  readlinkSync: [Function: readlinkSync],
  realpath: { [Function: realpath] native: [Function] },
  realpathSync: { [Function: realpathSync] native: [Function] },
  rename: [Function: rename],
  renameSync: [Function: renameSync],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  stat: [Function: stat],
  statSync: [Function: statSync],
  symlink: [Function: symlink],
  symlinkSync: [Function: symlinkSync],
  truncate: [Function: truncate],
  truncateSync: [Function: truncateSync],
  unwatchFile: [Function: unwatchFile],
  unlink: [Function: unlink],
  unlinkSync: [Function: unlinkSync],
  utimes: [Function: utimes],
  utimesSync: [Function: utimesSync],
  watch: [Function: watch],
  watchFile: [Function: watchFile],
  writeFile: [Function: writeFile],
  writeFileSync: [Function: writeFileSync],
  write: [Function: write],
  writeSync: [Function: writeSync],
  Dirent: [Function: Dirent],
  Stats: [Function: Stats],
  ReadStream:
   { [Function: ReadStream]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  WriteStream:
   { [Function: WriteStream]
     super_:
      { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  FileReadStream:
   { [Function: ReadStream]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  FileWriteStream: {
    [Function: WriteStream]
    super_: {
      [Function: Writable] WritableState: [Function: WritableState], super_: [Function]
    } 
  },
  _toUnixTimestamp: [Function: toUnixTimestamp],
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  constants: { 
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFLNK: 40960,
    O_CREAT: 256,
    O_EXCL: 1024,
    O_TRUNC: 512,
    O_APPEND: 8,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
  } 
}
*/

// console.log('http',nodeModules['http']);
/*
http { 
  _connectionListener: [Function: connectionListener],
  METHODS:
   [ 'ACL',
     'BIND',
     'CHECKOUT',
     'CONNECT',
     'COPY',
     'DELETE',
     'GET',
     'HEAD',
     'LINK',
     'LOCK',
     'M-SEARCH',
     'MERGE',
     'MKACTIVITY',
     'MKCALENDAR',
     'MKCOL',
     'MOVE',
     'NOTIFY',
     'OPTIONS',
     'PATCH',
     'POST',
     'PROPFIND',
     'PROPPATCH',
     'PURGE',
     'PUT',
     'REBIND',
     'REPORT',
     'SEARCH',
     'SOURCE',
     'SUBSCRIBE',
     'TRACE',
     'UNBIND',
     'UNLINK',
     'UNLOCK',
     'UNSUBSCRIBE' ],
  STATUS_CODES:
   { '100': 'Continue',
     '101': 'Switching Protocols',
     '102': 'Processing',
     '103': 'Early Hints',
     '200': 'OK',
     '201': 'Created',
     '202': 'Accepted',
     '203': 'Non-Authoritative Information',
     '204': 'No Content',
     '205': 'Reset Content',
     '206': 'Partial Content',
     '207': 'Multi-Status',
     '208': 'Already Reported',
     '226': 'IM Used',
     '300': 'Multiple Choices',
     '301': 'Moved Permanently',
     '302': 'Found',
     '303': 'See Other',
     '304': 'Not Modified',
     '305': 'Use Proxy',
     '307': 'Temporary Redirect',
     '308': 'Permanent Redirect',
     '400': 'Bad Request',
     '401': 'Unauthorized',
     '402': 'Payment Required',
     '403': 'Forbidden',
     '404': 'Not Found',
     '405': 'Method Not Allowed',
     '406': 'Not Acceptable',
     '407': 'Proxy Authentication Required',
     '408': 'Request Timeout',
     '409': 'Conflict',
     '410': 'Gone',
     '411': 'Length Required',
     '412': 'Precondition Failed',
     '413': 'Payload Too Large',
     '414': 'URI Too Long',
     '415': 'Unsupported Media Type',
     '416': 'Range Not Satisfiable',
     '417': 'Expectation Failed',
     '418': 'I\'m a Teapot',
     '421': 'Misdirected Request',
     '422': 'Unprocessable Entity',
     '423': 'Locked',
     '424': 'Failed Dependency',
     '425': 'Unordered Collection',
     '426': 'Upgrade Required',
     '428': 'Precondition Required',
     '429': 'Too Many Requests',
     '431': 'Request Header Fields Too Large',
     '451': 'Unavailable For Legal Reasons',
     '500': 'Internal Server Error',
     '501': 'Not Implemented',
     '502': 'Bad Gateway',
     '503': 'Service Unavailable',
     '504': 'Gateway Timeout',
     '505': 'HTTP Version Not Supported',
     '506': 'Variant Also Negotiates',
     '507': 'Insufficient Storage',
     '508': 'Loop Detected',
     '509': 'Bandwidth Limit Exceeded',
     '510': 'Not Extended',
     '511': 'Network Authentication Required' },
  Agent:
   { [Function: Agent]
     super_:
      { [Function: EventEmitter]
        EventEmitter: [Circular],
        usingDomains: true,
        defaultMaxListeners: [Getter/Setter],
        init: [Function],
        listenerCount: [Function] },
     defaultMaxSockets: Infinity },
  ClientRequest:
   { [Function: ClientRequest] super_: { [Function: OutgoingMessage] super_: [Function] } },
  globalAgent:
   Agent {
     _events: { free: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     defaultPort: 80,
     protocol: 'http:',
     options: { path: null },
     requests: {},
     sockets: {},
     freeSockets: {},
     keepAliveMsecs: 1000,
     keepAlive: false,
     maxSockets: Infinity,
     maxFreeSockets: 256 },
  IncomingMessage:
   { [Function: IncomingMessage]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  OutgoingMessage:
   { [Function: OutgoingMessage]
     super_:
      { [Function: Stream]
        super_: [Function],
        Readable: [Function],
        Writable: [Function],
        Duplex: [Function],
        Transform: [Function],
        PassThrough: [Function],
        pipeline: [Function: pipeline],
        finished: [Function: eos],
        Stream: [Circular],
        _isUint8Array: [Function: isUint8Array],
        _uint8ArrayToBuffer: [Function: _uint8ArrayToBuffer] } },
  Server:
   { [Function: Server] super_: { [Function: Server] super_: [Function] } },
  ServerResponse:
   { [Function: ServerResponse] super_: { [Function: OutgoingMessage] super_: [Function] } },
  createServer: [Function: createServer],
  get: [Function: get],
  request: [Function: request]
}
*/

// console.log('https',nodeModules['https']);
/*
https { 
  Agent: { 
    [Function: Agent]
    super_: {
      [Function: Agent] super_: [Function], defaultMaxSockets: Infinity 
    } 
  },
  globalAgent: Agent {
     _events: { free: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     defaultPort: 443,
     protocol: 'https:',
     options: { path: null },
     requests: {},
     sockets: {},
     freeSockets: {},
     keepAliveMsecs: 1000,
     keepAlive: false,
     maxSockets: Infinity,
     maxFreeSockets: 256,
     maxCachedSessions: 100,
     _sessionCache: { map: {}, list: [] } 
  },
  Server: {
    [Function: Server] super_: { 
      [Function: Server] super_: [Function]
    }
  },
  createServer: [Function: createServer],
  get: [Function: get],
  request: [Function: request]
}
*/

// console.log('http2',nodeModules['http2']);
/*
http2 { 
  constants: {
    NGHTTP2_SESSION_SERVER: 0,
    NGHTTP2_SESSION_CLIENT: 1,
    NGHTTP2_STREAM_STATE_IDLE: 1,
    NGHTTP2_STREAM_STATE_OPEN: 2,
    NGHTTP2_STREAM_STATE_RESERVED_LOCAL: 3,
    NGHTTP2_STREAM_STATE_RESERVED_REMOTE: 4,
    NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: 5,
    NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: 6,
    NGHTTP2_STREAM_STATE_CLOSED: 7,
    NGHTTP2_NO_ERROR: 0,
    NGHTTP2_PROTOCOL_ERROR: 1,
    NGHTTP2_INTERNAL_ERROR: 2,
    NGHTTP2_FLOW_CONTROL_ERROR: 3,
    NGHTTP2_SETTINGS_TIMEOUT: 4,
    NGHTTP2_STREAM_CLOSED: 5,
    NGHTTP2_FRAME_SIZE_ERROR: 6,
    NGHTTP2_REFUSED_STREAM: 7,
    NGHTTP2_CANCEL: 8,
    NGHTTP2_COMPRESSION_ERROR: 9,
    NGHTTP2_CONNECT_ERROR: 10,
    NGHTTP2_ENHANCE_YOUR_CALM: 11,
    NGHTTP2_INADEQUATE_SECURITY: 12,
    NGHTTP2_HTTP_1_1_REQUIRED: 13,
    NGHTTP2_ERR_FRAME_SIZE_ERROR: -522,
    NGHTTP2_FLAG_NONE: 0,
    NGHTTP2_FLAG_END_STREAM: 1,
    NGHTTP2_FLAG_END_HEADERS: 4,
    NGHTTP2_FLAG_ACK: 1,
    NGHTTP2_FLAG_PADDED: 8,
    NGHTTP2_FLAG_PRIORITY: 32,
    DEFAULT_SETTINGS_HEADER_TABLE_SIZE: 4096,
    DEFAULT_SETTINGS_ENABLE_PUSH: 1,
    DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 65535,
    DEFAULT_SETTINGS_MAX_FRAME_SIZE: 16384,
    MAX_MAX_FRAME_SIZE: 16777215,
    MIN_MAX_FRAME_SIZE: 16384,
    MAX_INITIAL_WINDOW_SIZE: 2147483647,
    NGHTTP2_DEFAULT_WEIGHT: 16,
    NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: 1,
    NGHTTP2_SETTINGS_ENABLE_PUSH: 2,
    NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: 3,
    NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: 4,
    NGHTTP2_SETTINGS_MAX_FRAME_SIZE: 5,
    NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: 6,
    NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL: 8,
    PADDING_STRATEGY_NONE: 0,
    PADDING_STRATEGY_ALIGNED: 1,
    PADDING_STRATEGY_MAX: 2,
    PADDING_STRATEGY_CALLBACK: 3,
    HTTP2_HEADER_STATUS: ':status',
    HTTP2_HEADER_METHOD: ':method',
    HTTP2_HEADER_AUTHORITY: ':authority',
    HTTP2_HEADER_SCHEME: ':scheme',
    HTTP2_HEADER_PATH: ':path',
    HTTP2_HEADER_PROTOCOL: ':protocol',
    HTTP2_HEADER_ACCEPT_CHARSET: 'accept-charset',
    HTTP2_HEADER_ACCEPT_ENCODING: 'accept-encoding',
    HTTP2_HEADER_ACCEPT_LANGUAGE: 'accept-language',
    HTTP2_HEADER_ACCEPT_RANGES: 'accept-ranges',
    HTTP2_HEADER_ACCEPT: 'accept',
    HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: 'access-control-allow-credentials',
    HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: 'access-control-allow-headers',
    HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: 'access-control-allow-methods',
    HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: 'access-control-allow-origin',
    HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: 'access-control-expose-headers',
    HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE: 'access-control-max-age',
    HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: 'access-control-request-headers',
    HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: 'access-control-request-method',
    HTTP2_HEADER_AGE: 'age',
    HTTP2_HEADER_ALLOW: 'allow',
    HTTP2_HEADER_AUTHORIZATION: 'authorization',
    HTTP2_HEADER_CACHE_CONTROL: 'cache-control',
    HTTP2_HEADER_CONNECTION: 'connection',
    HTTP2_HEADER_CONTENT_DISPOSITION: 'content-disposition',
    HTTP2_HEADER_CONTENT_ENCODING: 'content-encoding',
    HTTP2_HEADER_CONTENT_LANGUAGE: 'content-language',
    HTTP2_HEADER_CONTENT_LENGTH: 'content-length',
    HTTP2_HEADER_CONTENT_LOCATION: 'content-location',
    HTTP2_HEADER_CONTENT_MD5: 'content-md5',
    HTTP2_HEADER_CONTENT_RANGE: 'content-range',
    HTTP2_HEADER_CONTENT_TYPE: 'content-type',
    HTTP2_HEADER_COOKIE: 'cookie',
    HTTP2_HEADER_DATE: 'date',
    HTTP2_HEADER_DNT: 'dnt',
    HTTP2_HEADER_ETAG: 'etag',
    HTTP2_HEADER_EXPECT: 'expect',
    HTTP2_HEADER_EXPIRES: 'expires',
    HTTP2_HEADER_FORWARDED: 'forwarded',
    HTTP2_HEADER_FROM: 'from',
    HTTP2_HEADER_HOST: 'host',
    HTTP2_HEADER_IF_MATCH: 'if-match',
    HTTP2_HEADER_IF_MODIFIED_SINCE: 'if-modified-since',
    HTTP2_HEADER_IF_NONE_MATCH: 'if-none-match',
    HTTP2_HEADER_IF_RANGE: 'if-range',
    HTTP2_HEADER_IF_UNMODIFIED_SINCE: 'if-unmodified-since',
    HTTP2_HEADER_LAST_MODIFIED: 'last-modified',
    HTTP2_HEADER_LINK: 'link',
    HTTP2_HEADER_LOCATION: 'location',
    HTTP2_HEADER_MAX_FORWARDS: 'max-forwards',
    HTTP2_HEADER_PREFER: 'prefer',
    HTTP2_HEADER_PROXY_AUTHENTICATE: 'proxy-authenticate',
    HTTP2_HEADER_PROXY_AUTHORIZATION: 'proxy-authorization',
    HTTP2_HEADER_RANGE: 'range',
    HTTP2_HEADER_REFERER: 'referer',
    HTTP2_HEADER_REFRESH: 'refresh',
    HTTP2_HEADER_RETRY_AFTER: 'retry-after',
    HTTP2_HEADER_SERVER: 'server',
    HTTP2_HEADER_SET_COOKIE: 'set-cookie',
    HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: 'strict-transport-security',
    HTTP2_HEADER_TRAILER: 'trailer',
    HTTP2_HEADER_TRANSFER_ENCODING: 'transfer-encoding',
    HTTP2_HEADER_TE: 'te',
    HTTP2_HEADER_TK: 'tk',
    HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS: 'upgrade-insecure-requests',
    HTTP2_HEADER_UPGRADE: 'upgrade',
    HTTP2_HEADER_USER_AGENT: 'user-agent',
    HTTP2_HEADER_VARY: 'vary',
    HTTP2_HEADER_VIA: 'via',
    HTTP2_HEADER_WARNING: 'warning',
    HTTP2_HEADER_WWW_AUTHENTICATE: 'www-authenticate',
    HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS: 'x-content-type-options',
    HTTP2_HEADER_X_FRAME_OPTIONS: 'x-frame-options',
    HTTP2_HEADER_HTTP2_SETTINGS: 'http2-settings',
    HTTP2_HEADER_KEEP_ALIVE: 'keep-alive',
    HTTP2_HEADER_PROXY_CONNECTION: 'proxy-connection',
    HTTP2_METHOD_ACL: 'ACL',
    HTTP2_METHOD_BASELINE_CONTROL: 'BASELINE-CONTROL',
    HTTP2_METHOD_BIND: 'BIND',
    HTTP2_METHOD_CHECKIN: 'CHECKIN',
    HTTP2_METHOD_CHECKOUT: 'CHECKOUT',
    HTTP2_METHOD_CONNECT: 'CONNECT',
    HTTP2_METHOD_COPY: 'COPY',
    HTTP2_METHOD_DELETE: 'DELETE',
    HTTP2_METHOD_GET: 'GET',
    HTTP2_METHOD_HEAD: 'HEAD',
    HTTP2_METHOD_LABEL: 'LABEL',
    HTTP2_METHOD_LINK: 'LINK',
    HTTP2_METHOD_LOCK: 'LOCK',
    HTTP2_METHOD_MERGE: 'MERGE',
    HTTP2_METHOD_MKACTIVITY: 'MKACTIVITY',
    HTTP2_METHOD_MKCALENDAR: 'MKCALENDAR',
    HTTP2_METHOD_MKCOL: 'MKCOL',
    HTTP2_METHOD_MKREDIRECTREF: 'MKREDIRECTREF',
    HTTP2_METHOD_MKWORKSPACE: 'MKWORKSPACE',
    HTTP2_METHOD_MOVE: 'MOVE',
    HTTP2_METHOD_OPTIONS: 'OPTIONS',
    HTTP2_METHOD_ORDERPATCH: 'ORDERPATCH',
    HTTP2_METHOD_PATCH: 'PATCH',
    HTTP2_METHOD_POST: 'POST',
    HTTP2_METHOD_PRI: 'PRI',
    HTTP2_METHOD_PROPFIND: 'PROPFIND',
    HTTP2_METHOD_PROPPATCH: 'PROPPATCH',
    HTTP2_METHOD_PUT: 'PUT',
    HTTP2_METHOD_REBIND: 'REBIND',
    HTTP2_METHOD_REPORT: 'REPORT',
    HTTP2_METHOD_SEARCH: 'SEARCH',
    HTTP2_METHOD_TRACE: 'TRACE',
    HTTP2_METHOD_UNBIND: 'UNBIND',
    HTTP2_METHOD_UNCHECKOUT: 'UNCHECKOUT',
    HTTP2_METHOD_UNLINK: 'UNLINK',
    HTTP2_METHOD_UNLOCK: 'UNLOCK',
    HTTP2_METHOD_UPDATE: 'UPDATE',
    HTTP2_METHOD_UPDATEREDIRECTREF: 'UPDATEREDIRECTREF',
    HTTP2_METHOD_VERSION_CONTROL: 'VERSION-CONTROL',
    HTTP_STATUS_CONTINUE: 100,
    HTTP_STATUS_SWITCHING_PROTOCOLS: 101,
    HTTP_STATUS_PROCESSING: 102,
    HTTP_STATUS_EARLY_HINTS: 103,
    HTTP_STATUS_OK: 200,
    HTTP_STATUS_CREATED: 201,
    HTTP_STATUS_ACCEPTED: 202,
    HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: 203,
    HTTP_STATUS_NO_CONTENT: 204,
    HTTP_STATUS_RESET_CONTENT: 205,
    HTTP_STATUS_PARTIAL_CONTENT: 206,
    HTTP_STATUS_MULTI_STATUS: 207,
    HTTP_STATUS_ALREADY_REPORTED: 208,
    HTTP_STATUS_IM_USED: 226,
    HTTP_STATUS_MULTIPLE_CHOICES: 300,
    HTTP_STATUS_MOVED_PERMANENTLY: 301,
    HTTP_STATUS_FOUND: 302,
    HTTP_STATUS_SEE_OTHER: 303,
    HTTP_STATUS_NOT_MODIFIED: 304,
    HTTP_STATUS_USE_PROXY: 305,
    HTTP_STATUS_TEMPORARY_REDIRECT: 307,
    HTTP_STATUS_PERMANENT_REDIRECT: 308,
    HTTP_STATUS_BAD_REQUEST: 400,
    HTTP_STATUS_UNAUTHORIZED: 401,
    HTTP_STATUS_PAYMENT_REQUIRED: 402,
    HTTP_STATUS_FORBIDDEN: 403,
    HTTP_STATUS_NOT_FOUND: 404,
    HTTP_STATUS_METHOD_NOT_ALLOWED: 405,
    HTTP_STATUS_NOT_ACCEPTABLE: 406,
    HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: 407,
    HTTP_STATUS_REQUEST_TIMEOUT: 408,
    HTTP_STATUS_CONFLICT: 409,
    HTTP_STATUS_GONE: 410,
    HTTP_STATUS_LENGTH_REQUIRED: 411,
    HTTP_STATUS_PRECONDITION_FAILED: 412,
    HTTP_STATUS_PAYLOAD_TOO_LARGE: 413,
    HTTP_STATUS_URI_TOO_LONG: 414,
    HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: 415,
    HTTP_STATUS_RANGE_NOT_SATISFIABLE: 416,
    HTTP_STATUS_EXPECTATION_FAILED: 417,
    HTTP_STATUS_TEAPOT: 418,
    HTTP_STATUS_MISDIRECTED_REQUEST: 421,
    HTTP_STATUS_UNPROCESSABLE_ENTITY: 422,
    HTTP_STATUS_LOCKED: 423,
    HTTP_STATUS_FAILED_DEPENDENCY: 424,
    HTTP_STATUS_UNORDERED_COLLECTION: 425,
    HTTP_STATUS_UPGRADE_REQUIRED: 426,
    HTTP_STATUS_PRECONDITION_REQUIRED: 428,
    HTTP_STATUS_TOO_MANY_REQUESTS: 429,
    HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    HTTP_STATUS_INTERNAL_SERVER_ERROR: 500,
    HTTP_STATUS_NOT_IMPLEMENTED: 501,
    HTTP_STATUS_BAD_GATEWAY: 502,
    HTTP_STATUS_SERVICE_UNAVAILABLE: 503,
    HTTP_STATUS_GATEWAY_TIMEOUT: 504,
    HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: 505,
    HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: 506,
    HTTP_STATUS_INSUFFICIENT_STORAGE: 507,
    HTTP_STATUS_LOOP_DETECTED: 508,
    HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: 509,
    HTTP_STATUS_NOT_EXTENDED: 510,
    HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: 511
  },
  getDefaultSettings: [Function: getDefaultSettings],
  getPackedSettings: [Function: getPackedSettings],
  getUnpackedSettings: [Function: getUnpackedSettings],
  createServer: [Function: createServer],
  createSecureServer: [Function: createSecureServer],
  connect: [Function: connect],
  Http2ServerResponse: [Function: Http2ServerResponse],
  Http2ServerRequest: [Function: Http2ServerRequest] 
}
*/

// console.log('inspector',nodeModules['inspector']);
/*
inspector { 
  open: [Function: open],
  close: [Function: _debugEnd],
  url: [Function: url],
  console:
   Object {
     debug: [Function: debug],
     error: [Function: error],
     info: [Function: info],
     log: [Function: log],
     warn: [Function: warn],
     dir: [Function: dir],
     dirxml: [Function: dirxml],
     table: [Function: table],
     trace: [Function: trace],
     group: [Function: group],
     groupCollapsed: [Function: groupCollapsed],
     groupEnd: [Function: groupEnd],
     clear: [Function: clear],
     count: [Function: count],
     countReset: [Function: countReset],
     assert: [Function: assert],
     markTimeline: [Function: markTimeline],
     profile: [Function: profile],
     profileEnd: [Function: profileEnd],
     timeline: [Function: timeline],
     timelineEnd: [Function: timelineEnd],
     time: [Function: time],
     timeEnd: [Function: timeEnd],
     timeStamp: [Function: timeStamp],
     context: [Function: context] },
  Session: [Function: Session] 
}
*/

// console.log('module',nodeModules['module']);
/*
module function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
*/

// console.log('net',nodeModules['net']);
/*
net { 
  _createServerHandle: [Function: createServerHandle],
  _normalizeArgs: [Function: normalizeArgs],
  _setSimultaneousAccepts: [Function: _setSimultaneousAccepts],
  connect: [Function: connect],
  createConnection: [Function: connect],
  createServer: [Function: createServer],
  isIP: [Function: isIP],
  isIPv4: [Function: isIPv4],
  isIPv6: [Function: isIPv6],
  Server:
   { [Function: Server]
     super_:
      { [Function: EventEmitter]
        EventEmitter: [Circular],
        usingDomains: true,
        defaultMaxListeners: [Getter/Setter],
        init: [Function],
        listenerCount: [Function] } },
  Socket:
   { [Function: Socket] super_: { [Function: Duplex] super_: [Function] } },
  Stream:
   { [Function: Socket] super_: { [Function: Duplex] super_: [Function] } } 
}
*/

// console.log('os',nodeModules['os']);
/*
os {
  arch:
   { [Function: arch] [Symbol(Symbol.toPrimitive)]: [Function] },
  cpus: [Function: cpus],
  endianness:
   { [Function: endianness] [Symbol(Symbol.toPrimitive)]: [Function] },
  freemem:
   { [Function: getFreeMem] [Symbol(Symbol.toPrimitive)]: [Function] },
  getPriority: [Function: getPriority],
  homedir:
   { [Function: checkError] [Symbol(Symbol.toPrimitive)]: [Function] },
  hostname:
   { [Function: checkError] [Symbol(Symbol.toPrimitive)]: [Function] },
  loadavg: [Function: loadavg],
  networkInterfaces: [Function: networkInterfaces],
  platform:
   { [Function: platform] [Symbol(Symbol.toPrimitive)]: [Function] },
  release:
   { [Function: checkError] [Symbol(Symbol.toPrimitive)]: [Function] },
  setPriority: [Function: setPriority],
  tmpdir:
   { [Function: tmpdir] [Symbol(Symbol.toPrimitive)]: [Function] },
  totalmem:
   { [Function: getTotalMem] [Symbol(Symbol.toPrimitive)]: [Function] },
  type:
   { [Function: checkError] [Symbol(Symbol.toPrimitive)]: [Function] },
  userInfo: [Function: userInfo],
  uptime:
   { [Function: getUptime] [Symbol(Symbol.toPrimitive)]: [Function] },
  getNetworkInterfaces: [Function: deprecated],
  tmpDir: [Function: deprecated],
  constants:
   { UV_UDP_REUSEADDR: 4,
     dlopen: {},
     errno:
      { E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 100,
        EADDRNOTAVAIL: 101,
        EAFNOSUPPORT: 102,
        EAGAIN: 11,
        EALREADY: 103,
        EBADF: 9,
        EBADMSG: 104,
        EBUSY: 16,
        ECANCELED: 105,
        ECHILD: 10,
        ECONNABORTED: 106,
        ECONNREFUSED: 107,
        ECONNRESET: 108,
        EDEADLK: 36,
        EDESTADDRREQ: 109,
        EDOM: 33,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 110,
        EIDRM: 111,
        EILSEQ: 42,
        EINPROGRESS: 112,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 113,
        EISDIR: 21,
        ELOOP: 114,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 115,
        ENAMETOOLONG: 38,
        ENETDOWN: 116,
        ENETRESET: 117,
        ENETUNREACH: 118,
        ENFILE: 23,
        ENOBUFS: 119,
        ENODATA: 120,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 39,
        ENOLINK: 121,
        ENOMEM: 12,
        ENOMSG: 122,
        ENOPROTOOPT: 123,
        ENOSPC: 28,
        ENOSR: 124,
        ENOSTR: 125,
        ENOSYS: 40,
        ENOTCONN: 126,
        ENOTDIR: 20,
        ENOTEMPTY: 41,
        ENOTSOCK: 128,
        ENOTSUP: 129,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 130,
        EOVERFLOW: 132,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 134,
        EPROTONOSUPPORT: 135,
        EPROTOTYPE: 136,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ETIME: 137,
        ETIMEDOUT: 138,
        ETXTBSY: 139,
        EWOULDBLOCK: 140,
        EXDEV: 18,
        WSAEINTR: 10004,
        WSAEBADF: 10009,
        WSAEACCES: 10013,
        WSAEFAULT: 10014,
        WSAEINVAL: 10022,
        WSAEMFILE: 10024,
        WSAEWOULDBLOCK: 10035,
        WSAEINPROGRESS: 10036,
        WSAEALREADY: 10037,
        WSAENOTSOCK: 10038,
        WSAEDESTADDRREQ: 10039,
        WSAEMSGSIZE: 10040,
        WSAEPROTOTYPE: 10041,
        WSAENOPROTOOPT: 10042,
        WSAEPROTONOSUPPORT: 10043,
        WSAESOCKTNOSUPPORT: 10044,
        WSAEOPNOTSUPP: 10045,
        WSAEPFNOSUPPORT: 10046,
        WSAEAFNOSUPPORT: 10047,
        WSAEADDRINUSE: 10048,
        WSAEADDRNOTAVAIL: 10049,
        WSAENETDOWN: 10050,
        WSAENETUNREACH: 10051,
        WSAENETRESET: 10052,
        WSAECONNABORTED: 10053,
        WSAECONNRESET: 10054,
        WSAENOBUFS: 10055,
        WSAEISCONN: 10056,
        WSAENOTCONN: 10057,
        WSAESHUTDOWN: 10058,
        WSAETOOMANYREFS: 10059,
        WSAETIMEDOUT: 10060,
        WSAECONNREFUSED: 10061,
        WSAELOOP: 10062,
        WSAENAMETOOLONG: 10063,
        WSAEHOSTDOWN: 10064,
        WSAEHOSTUNREACH: 10065,
        WSAENOTEMPTY: 10066,
        WSAEPROCLIM: 10067,
        WSAEUSERS: 10068,
        WSAEDQUOT: 10069,
        WSAESTALE: 10070,
        WSAEREMOTE: 10071,
        WSASYSNOTREADY: 10091,
        WSAVERNOTSUPPORTED: 10092,
        WSANOTINITIALISED: 10093,
        WSAEDISCON: 10101,
        WSAENOMORE: 10102,
        WSAECANCELLED: 10103,
        WSAEINVALIDPROCTABLE: 10104,
        WSAEINVALIDPROVIDER: 10105,
        WSAEPROVIDERFAILEDINIT: 10106,
        WSASYSCALLFAILURE: 10107,
        WSASERVICE_NOT_FOUND: 10108,
        WSATYPE_NOT_FOUND: 10109,
        WSA_E_NO_MORE: 10110,
        WSA_E_CANCELLED: 10111,
        WSAEREFUSED: 10112 },
     signals:
      { SIGHUP: 1,
        SIGINT: 2,
        SIGILL: 4,
        SIGABRT: 22,
        SIGFPE: 8,
        SIGKILL: 9,
        SIGSEGV: 11,
        SIGTERM: 15,
        SIGBREAK: 21,
        SIGWINCH: 28 },
     priority:
      { PRIORITY_LOW: 19,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_NORMAL: 0,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20 } },
  EOL: '\r\n'
}
*/

// console.log('path',nodeModules['path']);
/*
path { 
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular],
  posix:
   { resolve: [Function: resolve],
     normalize: [Function: normalize],
     isAbsolute: [Function: isAbsolute],
     join: [Function: join],
     relative: [Function: relative],
     toNamespacedPath: [Function: toNamespacedPath],
     dirname: [Function: dirname],
     basename: [Function: basename],
     extname: [Function: extname],
     format: [Function: format],
     parse: [Function: parse],
     sep: '/',
     delimiter: ':',
     win32: [Circular],
     posix: [Circular],
     _makeLong: [Function: toNamespacedPath] },
  _makeLong: [Function: toNamespacedPath] 
}
*/

// console.log('perf_hooks',nodeModules['perf_hooks']);
/*
perf_hooks { 
  performance: { 
    nodeTiming: {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 1115.8258819878101,
      nodeStart: 0.5337119996547699,
      v8Start: 2.4199009835720062,
      bootstrapComplete: 317.65272799134254,
      environment: 21.234667003154755,
      loopStart: -1,
      loopExit: -1,
      thirdPartyMainStart: undefined,
      thirdPartyMainEnd: undefined,
      clusterSetupStart: undefined,
      clusterSetupEnd: undefined,
      moduleLoadStart: undefined,
      moduleLoadEnd: undefined,
      preloadModuleLoadStart: undefined,
      preloadModuleLoadEnd: undefined 
    },
    timeOrigin: 1548916617957.3677 
  },
  PerformanceObserver: [Function: PerformanceObserver],
  constants: {
    NODE_PERFORMANCE_GC_MAJOR: 2,
    NODE_PERFORMANCE_GC_MINOR: 1,
    NODE_PERFORMANCE_GC_INCREMENTAL: 4,
    NODE_PERFORMANCE_GC_WEAKCB: 8 
  }
}
*/

// console.log('process', nodeModules['process']);
/*
process process {
  title: ' ',
  version: 'v10.13.0',
  versions: {
    http_parser: '2.8.0',
    node: '10.13.0',
    v8: '6.8.275.32-node.36',
    uv: '1.23.2',
    zlib: '1.2.11',
    ares: '1.14.0',
    modules: '64',
    nghttp2: '1.34.0',
    napi: '3',
    openssl: '1.1.0i',
    icu: '62.1',
    unicode: '11.0',
    cldr: '33.1',
    tz: '2018e' 
  },
  arch: 'x64',
  platform: 'win32',
  release: { 
    name: 'node',
    lts: 'Dubnium',
    sourceUrl: 'https://nodejs.org/download/release/v10.13.0/node-v10.13.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v10.13.0/node-v10.13.0-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v10.13.0/win-x64/node.lib' },
  argv: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\doc\\kg-dev\\gg-js\\exec.js'
  ],
  execArgv: [],
  env: {
    ALLUSERSPROFILE: 'C:\\ProgramData',
    APPDATA: 'C:\\Users\\nmi\\AppData\\Roaming',
    'asl.log': 'Destination=file',
    ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
    ChocolateyLastPathUpdate: 'Mon Nov  5 14:33:11 2018',
    CommonProgramFiles: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPOSE_CONVERT_WINDOWS_PATHS: 'true',
    COMPUTERNAME: 'LAPTOP-2DGK3T0I',
    ComSpec: 'C:\\Windows\\system32\\cmd.exe',
    DOCKER_CERT_PATH: 'C:\\Users\\nmi\\.docker\\machine\\machines\\default',
    DOCKER_HOST: 'tcp://192.168.99.100:2376',
    DOCKER_MACHINE_NAME: 'default',
    DOCKER_TLS_VERIFY: '1',
    DOCKER_TOOLBOX_INSTALL_PATH: 'C:\\Program Files\\Docker Toolbox',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\nmi',
    LOCALAPPDATA: 'C:\\Users\\nmi\\AppData\\Local',
    LOGONSERVER: '\\\\LAPTOP-2DGK3T0I',
    NO_PROXY: '192.168.99.100',
    NUMBER_OF_PROCESSORS: '4',
    OneDrive: 'C:\\Users\\nmi\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\nmi\\OneDrive',
    OS: 'Windows_NT',
    Path: 'C:\\Python27\\;C:\\Program Files\\Git;C:\\exe\\php;C:\\ProgramData\\Boxstarter;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Intel\\iCLS Client\\;C:\\Program Files\\Intel\\iCLS Client\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\dotnet\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Users\\nmi\\AppData\\Local\\Programs\\Python\\Python37\\Scripts\\;C:\\Users\\nmi\\AppData\\Local\\Programs\\Python\\Python37\\;C:\\Ruby25-x64\\bin;C:\\Users\\nmi\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\nmi\\AppData\\Roaming\\npm;C:\\Program Files\\Docker Toolbox;C:\\Users\\nmi\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\bin',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW;.CPL',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 61 Stepping 4, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '3d04',
    ProgramData: 'C:\\ProgramData',
    ProgramFiles: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PSModulePath: 'C:\\Users\\nmi\\Documents\\WindowsPowerShell\\Modules;C:\\Users\\nmi\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell;C:\\ProgramData\\Boxstarter;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
    PUBLIC: 'C:\\Users\\Public',
    RUBYOPT: '-Eutf-8',
    SESSIONNAME: 'Console',
    SystemDrive: 'C:',
    SystemRoot: 'C:\\Windows',
    TEMP: 'C:\\Users\\nmi\\AppData\\Local\\Temp',
    TMP: 'C:\\Users\\nmi\\AppData\\Local\\Temp',
    USERDOMAIN: 'LAPTOP-2DGK3T0I',
    USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-2DGK3T0I',
    USERNAME: 'nmi',
    USERPROFILE: 'C:\\Users\\nmi',
    VBOX_MSI_INSTALL_PATH: 'C:\\Program Files\\Oracle\\VirtualBox\\',
    VSCODE_CWD: 'C:\\doc\\kg-dev\\gg-js',
    windir: 'C:\\Windows',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.30.2',
    LANG: 'en_US.UTF-8'
  },
  pid: 7156,
  features: {
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true
  },
  ppid: 17720,
  execPath: 'C:\\Program Files\\nodejs\\node.exe',
  debugPort: 9229,
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
  _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
  abort: [Function: abort],
  chdir: [Function: chdir],
  umask: [Function: umask],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  _kill: [Function: _kill],
  cwd: [Function: cwd],
  dlopen: [Function: dlopen],
  reallyExit: [Function: reallyExit],
  uptime: [Function: uptime],
  _rawDebug: [Function],
  moduleLoadList: [
    'Binding contextify',
    'Internal Binding worker',
    'NativeModule events',
    'NativeModule internal/async_hooks',
    'NativeModule internal/errors',
    'Binding uv',
    'Binding buffer',
    'Binding async_wrap',
    'Binding config',
    'Binding icu',
    'NativeModule util',
    'NativeModule internal/util/inspect',
    'Binding util',
    'NativeModule internal/util',
    'Binding constants',
    'Internal Binding types',
    'NativeModule internal/util/types',
    'NativeModule internal/validators',
    'NativeModule internal/encoding',
    'NativeModule buffer',
    'NativeModule internal/buffer',
    'NativeModule internal/process/per_thread',
    'NativeModule internal/process/main_thread_only',
    'NativeModule internal/process/stdio',
    'NativeModule assert',
    'NativeModule internal/assert',
    'NativeModule fs',
    'NativeModule path',
    'NativeModule internal/constants',
    'Binding fs',
    'NativeModule internal/fs/streams',
    'NativeModule internal/fs/utils',
    'NativeModule stream',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/legacy',
    'NativeModule _stream_readable',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/state',
    'NativeModule _stream_writable',
    'NativeModule _stream_duplex',
    'NativeModule _stream_transform',
    'NativeModule _stream_passthrough',
    'NativeModule internal/url',
    'NativeModule internal/querystring',
    'Binding url',
    'NativeModule internal/process/warning',
    'NativeModule internal/process/next_tick',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'Binding performance',
    'Binding trace_events',
    'NativeModule internal/inspector_async_hook',
    'Binding inspector',
    'Internal Binding options',
    'NativeModule timers',
    'Binding timer_wrap',
    'NativeModule internal/linkedlist',
    'NativeModule internal/timers',
    'NativeModule internal/modules/cjs/loader',
    'NativeModule vm',
    'NativeModule internal/modules/cjs/helpers',
    'NativeModule console',
    'Binding tty_wrap',
    'NativeModule tty',
    'NativeModule net',
    'NativeModule internal/net',
    'Binding stream_wrap',
    'Binding tcp_wrap',
    'Binding pipe_wrap',
    'NativeModule internal/stream_base_commons',
    'NativeModule internal/tty',
    'Binding signal_wrap',
    'NativeModule http',
    'NativeModule _http_agent',
    'NativeModule _http_client',
    'NativeModule url',
    'Binding http_parser',
    'NativeModule _http_common',
    'NativeModule internal/freelist',
    'NativeModule internal/http',
    'NativeModule _http_incoming',
    'NativeModule _http_outgoing',
    'NativeModule _http_server',
    'NativeModule https',
    'NativeModule tls',
    'NativeModule internal/tls',
    'Binding crypto',
    'NativeModule internal/streams/duplexpair',
    'Binding cares_wrap',
    'NativeModule _tls_common',
    'NativeModule _tls_wrap',
    'NativeModule crypto',
    'NativeModule internal/crypto/random',
    'NativeModule internal/crypto/pbkdf2',
    'NativeModule internal/crypto/util',
    'NativeModule internal/crypto/scrypt',
    'NativeModule internal/crypto/keygen',
    'NativeModule internal/crypto/diffiehellman',
    ... 58 more items ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events:
   { newListener: [ [Function], [Function] ],
     removeListener: [ [Function], [Function] ],
     warning: [Function],
     SIGWINCH: [ [Function], [Function] ] },
  _eventsCount: 4,
  _maxListeners: undefined,
  _fatalException: [Function],
  domain: [Getter/Setter],
  _exiting: false,
  assert: [Function: deprecated],
  config:
   { target_defaults:
      { cflags: [],
        default_configuration: 'Release',
        defines: [],
        include_dirs: [],
        libraries: [] },
     variables:
      { asan: 0,
        build_v8_with_gn: false,
        coverage: false,
        debug_nghttp2: false,
        enable_lto: false,
        enable_pgo_generate: false,
        enable_pgo_use: false,
        force_dynamic_crt: 0,
        host_arch: 'x64',
        icu_data_in: '..\\..\\deps/icu-small\\source/data/in\\icudt62l.dat',
        icu_endianness: 'l',
        icu_gyp_path: 'tools/icu/icu-generic.gyp',
        icu_locales: 'en,root',
        icu_path: 'deps/icu-small',
        icu_small: true,
        icu_ver_major: '62',
        nasm_version: '2.13',
        node_byteorder: 'little',
        node_debug_lib: false,
        node_enable_d8: false,
        node_enable_v8_vtunejit: false,
        node_install_npm: true,
        node_module_version: 64,
        node_no_browser_globals: false,
        node_prefix: '/usr/local',
        node_release_urlbase: 'https://nodejs.org/download/release/',
        node_shared: false,
        node_shared_cares: false,
        node_shared_http_parser: false,
        node_shared_libuv: false,
        node_shared_nghttp2: false,
        node_shared_openssl: false,
        node_shared_zlib: false,
        node_tag: '',
        node_target_type: 'executable',
        node_use_bundled_v8: true,
        node_use_dtrace: false,
        node_use_etw: true,
        node_use_openssl: true,
        node_use_pch: false,
        node_use_perfctr: true,
        node_use_v8_platform: true,
        node_with_ltcg: true,
        node_without_node_options: false,
        openssl_fips: '',
        openssl_no_asm: 0,
        shlib_suffix: 'so.64',
        target_arch: 'x64',
        v8_enable_gdbjit: 0,
        v8_enable_i18n_support: 1,
        v8_enable_inspector: 1,
        v8_no_strict_aliasing: 1,
        v8_optimized_debug: 0,
        v8_promise_internal_field_count: 1,
        v8_random_seed: 0,
        v8_trace_maps: 0,
        v8_typed_array_max_size_in_heap: 0,
        v8_use_snapshot: true,
        want_separate_host_toolset: 0 } },
  setUncaughtExceptionCaptureCallback: [Function],
  hasUncaughtExceptionCaptureCallback: [Function],
  emitWarning: [Function],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: _tickCallback],
  stdout: [Getter],
  stderr: [Getter],
  stdin: [Getter],
  openStdin: [Function],
  hrtime: { [Function: hrtime] bigint: [Function] },
  cpuUsage: [Function: cpuUsage],
  memoryUsage: [Function: memoryUsage],
  exit: [Function],
  kill: [Function],
  argv0: 'C:\\Program Files\\nodejs\\node.exe',
  allowedNodeEnvironmentFlags: [Getter/Setter],
  mainModule: Module {
    id: '.',
    exports: {},
    parent: null,
    filename: 'C:\\doc\\kg-dev\\gg-js\\exec.js',
    loaded: false,
    children: [ [Module], [Module] ],
    paths: [
      'C:\\doc\\kg-dev\\gg-js\\node_modules',
      'C:\\doc\\kg-dev\\node_modules',
      'C:\\doc\\node_modules',
      'C:\\node_modules'
    ]
  }
}
*/

// console.log('punycode', nodeModules['punycode']);
/*
punycode { 
  version: '2.1.0',
  ucs2: { 
    decode: [Function: ucs2decode],
    encode: [Function: ucs2encode] 
  },
  decode: [Function: decode],
  encode: [Function: encode],
  toASCII: [Function: toASCII],
  toUnicode: [Function: toUnicode]
}
*/

// console.log('querystring', nodeModules['querystring']);
/*
querystring { 
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse] }
*/

// console.log('readline', nodeModules['readline']);
/*
readline { 
  Interface: { 
    [Function: Interface]
    super_: { 
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: true,
      defaultMaxListeners: [Getter/Setter],
      init: [Function],
      listenerCount: [Function] 
    } 
  },
  clearLine: [Function: clearLine],
  clearScreenDown: [Function: clearScreenDown],
  createInterface: [Function: createInterface],
  cursorTo: [Function: cursorTo],
  emitKeypressEvents: [Function: emitKeypressEvents],
  moveCursor: [Function: moveCursor]
}
*/

// console.log('repl', nodeModules['repl']);
/*
repl { 
  writer: { [Function]
     options:
      { showHidden: false,
        depth: 2,
        colors: false,
        customInspect: true,
        showProxy: true,
        maxArrayLength: 100,
        breakLength: 60,
        compact: true,
        sorted: false } },
  _builtinLibs:
   [ 'assert',
     'async_hooks',
     'buffer',
     'child_process',
     'cluster',
     'crypto',
     'dgram',
     'dns',
     'domain',
     'events',
     'fs',
     'http',
     'http2',
     'https',
     'inspector',
     'net',
     'os',
     'path',
     'perf_hooks',
     'punycode',
     'querystring',
     'readline',
     'repl',
     'stream',
     'string_decoder',
     'tls',
     'trace_events',
     'tty',
     'url',
     'util',
     'v8',
     'vm',
     'zlib' ],
  REPLServer:
   { [Function: REPLServer] super_: { [Function: Interface] super_: [Function] } },
  REPL_MODE_SLOPPY: Symbol(repl-sloppy),
  REPL_MODE_STRICT: Symbol(repl-strict),
  start: [Function],
  Recoverable: { [Function: Recoverable] super_: [Function: SyntaxError] } 
}
*/

// console.log('stream', nodeModules['stream']);
/*
stream function Stream() {
  EE.call(this);
}
*/

// console.log('string_decoder', nodeModules['string_decoder']);
/*
string_decoder { StringDecoder: [Function: StringDecoder] }
*/

// console.log('sys', nodeModules['timers']);
/*
sys { 
  active: [Function],
  _unrefActive: [Function],
  unenroll: [Function: deprecated],
  enroll: [Function: deprecated],
  setTimeout:
   { [Function: setTimeout] [Symbol(util.promisify.custom)]: [Function] },
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  clearInterval: [Function: clearInterval],
  setImmediate:
   { [Function: setImmediate] [Symbol(util.promisify.custom)]: [Function] },
  clearImmediate: [Function: clearImmediate] 
}
*/

// console.log('timers',nodeModules['timers']);
/*
timers { 
  active: [Function],
  _unrefActive: [Function],
  unenroll: [Function: deprecated],
  enroll: [Function: deprecated],
  setTimeout:
   { [Function: setTimeout] [Symbol(util.promisify.custom)]: [Function] },
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  clearInterval: [Function: clearInterval],
  setImmediate:
   { [Function: setImmediate] [Symbol(util.promisify.custom)]: [Function] },
  clearImmediate: [Function: clearImmediate] 
}
*/

// console.log('tls',nodeModules['tls']);
/*
tls { 
  CLIENT_RENEG_LIMIT: 3,
  CLIENT_RENEG_WINDOW: 600,
  DEFAULT_CIPHERS:
   'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  DEFAULT_ECDH_CURVE: 'auto',
  getCiphers: [Function],
  convertNPNProtocols: [Function: deprecated],
  convertALPNProtocols: [Function: convertALPNProtocols],
  checkServerIdentity: [Function: checkServerIdentity],
  parseCertString: [Function: deprecated],
  createSecureContext: [Function: createSecureContext],
  SecureContext: [Function: SecureContext],
  TLSSocket:
   { [Function: TLSSocket] super_: { [Function: Socket] super_: [Function] } },
  Server:
   { [Function: Server] super_: { [Function: Server] super_: [Function] } },
  createServer: [Function: createServer],
  connect: [Function: connect],
  createSecurePair: [Function: deprecated] 
}
*/

// console.log('trace_events',nodeModules['trace_events']);
/*
trace_events { 
  createTracing: [Function: createTracing],
  getEnabledCategories: [Function: getEnabledCategories] 
}
*/

// console.log('tty',nodeModules['tty']);
/*
tty { 
  isatty: [Function: isatty],
  ReadStream:
   { [Function: ReadStream] super_: { [Function: Socket] super_: [Function] } },
  WriteStream:
   { [Function: WriteStream] super_: { [Function: Socket] super_: [Function] } }
}
*/

// console.log('url',nodeModules['url']);
/*
url { 
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
}
*/

// console.log('util',nodeModules['util']);
/*
util {
  _errnoException: [Function: errnoException],
  _exceptionWithHostPort: [Function: exceptionWithHostPort],
  _extend: [Function: _extend],
  callbackify: [Function: callbackify],
  debuglog: [Function: debuglog],
  deprecate: [Function: deprecate],
  format: [Function: format],
  formatWithOptions: [Function: formatWithOptions],
  getSystemErrorName: [Function: getSystemErrorName],
  inherits: [Function: inherits],
  inspect:
   { [Function: inspect]
     custom: Symbol(nodejs.util.inspect.custom),
     colors:
      { bold: [Array],
        italic: [Array],
        underline: [Array],
        inverse: [Array],
        white: [Array],
        grey: [Array],
        black: [Array],
        blue: [Array],
        cyan: [Array],
        green: [Array],
        magenta: [Array],
        red: [Array],
        yellow: [Array] },
     styles:
      { special: 'cyan',
        number: 'yellow',
        bigint: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        symbol: 'green',
        date: 'magenta',
        regexp: 'red' } },
  isArray: [Function: isArray],
  isBoolean: [Function: isBoolean],
  isBuffer: [Function: isBuffer],
  isDeepStrictEqual: [Function: isDeepStrictEqual],
  isNull: [Function: isNull],
  isNullOrUndefined: [Function: isNullOrUndefined],
  isNumber: [Function: isNumber],
  isString: [Function: isString],
  isSymbol: [Function: isSymbol],
  isUndefined: [Function: isUndefined],
  isRegExp: [Function: isRegExp],
  isObject: [Function: isObject],
  isDate: [Function: isDate],
  isError: [Function: isError],
  isFunction: [Function: isFunction],
  isPrimitive: [Function: isPrimitive],
  log: [Function: log],
  promisify:
   { [Function: promisify] custom: Symbol(util.promisify.custom) },
  TextDecoder: [Function: TextDecoder],
  TextEncoder: [Function: TextEncoder],
  types:
   { isExternal: [Function: isExternal],
     isDate: [Function: isDate],
     isArgumentsObject: [Function: isArgumentsObject],
     isBigIntObject: [Function: isBigIntObject],
     isBooleanObject: [Function: isBooleanObject],
     isNumberObject: [Function: isNumberObject],
     isStringObject: [Function: isStringObject],
     isSymbolObject: [Function: isSymbolObject],
     isNativeError: [Function: isNativeError],
     isRegExp: [Function: isRegExp],
     isAsyncFunction: [Function: isAsyncFunction],
     isGeneratorFunction: [Function: isGeneratorFunction],
     isGeneratorObject: [Function: isGeneratorObject],
     isPromise: [Function: isPromise],
     isMap: [Function: isMap],
     isSet: [Function: isSet],
     isMapIterator: [Function: isMapIterator],
     isSetIterator: [Function: isSetIterator],
     isWeakMap: [Function: isWeakMap],
     isWeakSet: [Function: isWeakSet],
     isArrayBuffer: [Function: isArrayBuffer],
     isDataView: [Function: isDataView],
     isSharedArrayBuffer: [Function: isSharedArrayBuffer],
     isProxy: [Function: isProxy],
     isWebAssemblyCompiledModule: [Function: isWebAssemblyCompiledModule],
     isModuleNamespaceObject: [Function: isModuleNamespaceObject],
     isAnyArrayBuffer: [Function: isAnyArrayBuffer],
     isBoxedPrimitive: [Function: isBoxedPrimitive],
     isArrayBufferView: [Function: isView],
     isTypedArray: [Function: isTypedArray],
     isUint8Array: [Function: isUint8Array],
     isUint8ClampedArray: [Function: isUint8ClampedArray],
     isUint16Array: [Function: isUint16Array],
     isUint32Array: [Function: isUint32Array],
     isInt8Array: [Function: isInt8Array],
     isInt16Array: [Function: isInt16Array],
     isInt32Array: [Function: isInt32Array],
     isFloat32Array: [Function: isFloat32Array],
     isFloat64Array: [Function: isFloat64Array],
     isBigInt64Array: [Function: isBigInt64Array],
     isBigUint64Array: [Function: isBigUint64Array] },
  debug: [Function: deprecated],
  error: [Function: deprecated],
  print: [Function: deprecated],
  puts: [Function: deprecated] 
}
*/

// console.log('v8',nodeModules['v8']);
/*
v8 { 
  cachedDataVersionTag: [Function: cachedDataVersionTag],
  getHeapStatistics: [Function: getHeapStatistics],
  getHeapSpaceStatistics: [Function: getHeapSpaceStatistics],
  setFlagsFromString: [Function: setFlagsFromString],
  Serializer: [Function: Serializer],
  Deserializer: [Function: Deserializer],
  DefaultSerializer: [Function: DefaultSerializer],
  DefaultDeserializer: [Function: DefaultDeserializer],
  deserialize: [Function: deserialize],
  serialize: [Function: serialize]
}
*/

// console.log('vm',nodeModules['vm']);
/*
vm {
  Script: [Function: Script],
  createContext: [Function: createContext],
  createScript: [Function: createScript],
  runInContext: [Function: runInContext],
  runInNewContext: [Function: runInNewContext],
  runInThisContext: [Function: runInThisContext],
  isContext: [Function: isContext],
  compileFunction: [Function: compileFunction]
}
*/

// console.log('zlib',nodeModules['zlib']);
/*
zlib { 
  Deflate:
   { [Function: Deflate] super_: { [Function: Zlib] super_: [Function] } },
  Inflate:
   { [Function: Inflate] super_: { [Function: Zlib] super_: [Function] } },
  Gzip:
   { [Function: Gzip] super_: { [Function: Zlib] super_: [Function] } },
  Gunzip:
   { [Function: Gunzip] super_: { [Function: Zlib] super_: [Function] } },
  DeflateRaw:
   { [Function: DeflateRaw] super_: { [Function: Zlib] super_: [Function] } },
  InflateRaw:
   { [Function: InflateRaw] super_: { [Function: Zlib] super_: [Function] } },
  Unzip:
   { [Function: Unzip] super_: { [Function: Zlib] super_: [Function] } },
  deflate: [Function: asyncBufferWrapper],
  deflateSync: [Function: syncBufferWrapper],
  gzip: [Function: asyncBufferWrapper],
  gzipSync: [Function: syncBufferWrapper],
  deflateRaw: [Function: asyncBufferWrapper],
  deflateRawSync: [Function: syncBufferWrapper],
  unzip: [Function: asyncBufferWrapper],
  unzipSync: [Function: syncBufferWrapper],
  inflate: [Function: asyncBufferWrapper],
  inflateSync: [Function: syncBufferWrapper],
  gunzip: [Function: asyncBufferWrapper],
  gunzipSync: [Function: syncBufferWrapper],
  inflateRaw: [Function: asyncBufferWrapper],
  inflateRawSync: [Function: syncBufferWrapper],
  createDeflate: [Function: value],
  createInflate: [Function: value],
  createDeflateRaw: [Function: value],
  createInflateRaw: [Function: value],
  createGzip: [Function: value],
  createGunzip: [Function: value],
  createUnzip: [Function: value],
  constants:
   { Z_NO_FLUSH: 0,
     Z_PARTIAL_FLUSH: 1,
     Z_SYNC_FLUSH: 2,
     Z_FULL_FLUSH: 3,
     Z_FINISH: 4,
     Z_BLOCK: 5,
     Z_OK: 0,
     Z_STREAM_END: 1,
     Z_NEED_DICT: 2,
     Z_ERRNO: -1,
     Z_STREAM_ERROR: -2,
     Z_DATA_ERROR: -3,
     Z_MEM_ERROR: -4,
     Z_BUF_ERROR: -5,
     Z_VERSION_ERROR: -6,
     Z_NO_COMPRESSION: 0,
     Z_BEST_SPEED: 1,
     Z_BEST_COMPRESSION: 9,
     Z_DEFAULT_COMPRESSION: -1,
     Z_FILTERED: 1,
     Z_HUFFMAN_ONLY: 2,
     Z_RLE: 3,
     Z_FIXED: 4,
     Z_DEFAULT_STRATEGY: 0,
     ZLIB_VERNUM: 4784,
     DEFLATE: 1,
     INFLATE: 2,
     GZIP: 3,
     GUNZIP: 4,
     DEFLATERAW: 5,
     INFLATERAW: 6,
     UNZIP: 7,
     Z_MIN_WINDOWBITS: 8,
     Z_MAX_WINDOWBITS: 15,
     Z_DEFAULT_WINDOWBITS: 15,
     Z_MIN_CHUNK: 64,
     Z_MAX_CHUNK: Infinity,
     Z_DEFAULT_CHUNK: 16384,
     Z_MIN_MEMLEVEL: 1,
     Z_MAX_MEMLEVEL: 9,
     Z_DEFAULT_MEMLEVEL: 8,
     Z_MIN_LEVEL: -1,
     Z_MAX_LEVEL: 9,
     Z_DEFAULT_LEVEL: -1 },
  codes:
   { '0': 'Z_OK',
     '1': 'Z_STREAM_END',
     '2': 'Z_NEED_DICT',
     Z_OK: 0,
     Z_STREAM_END: 1,
     Z_NEED_DICT: 2,
     Z_ERRNO: -1,
     Z_STREAM_ERROR: -2,
     Z_DATA_ERROR: -3,
     Z_MEM_ERROR: -4,
     Z_BUF_ERROR: -5,
     Z_VERSION_ERROR: -6,
     '-1': 'Z_ERRNO',
     '-2': 'Z_STREAM_ERROR',
     '-3': 'Z_DATA_ERROR',
     '-4': 'Z_MEM_ERROR',
     '-5': 'Z_BUF_ERROR',
     '-6': 'Z_VERSION_ERROR' },
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_VERSION_ERROR: -6,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  ZLIB_VERNUM: 4784,
  DEFLATE: 1,
  INFLATE: 2,
  GZIP: 3,
  GUNZIP: 4,
  DEFLATERAW: 5,
  INFLATERAW: 6,
  UNZIP: 7,
  Z_MIN_WINDOWBITS: 8,
  Z_MAX_WINDOWBITS: 15,
  Z_DEFAULT_WINDOWBITS: 15,
  Z_MIN_CHUNK: 64,
  Z_MAX_CHUNK: Infinity,
  Z_DEFAULT_CHUNK: 16384,
  Z_MIN_MEMLEVEL: 1,
  Z_MAX_MEMLEVEL: 9,
  Z_DEFAULT_MEMLEVEL: 8,
  Z_MIN_LEVEL: -1,
  Z_MAX_LEVEL: 9,
  Z_DEFAULT_LEVEL: -1 
}
*/
