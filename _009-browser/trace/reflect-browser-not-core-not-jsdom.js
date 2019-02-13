;

var properties =
`
// Intl                       // partial standard
// BigUint64Array             // chrome specific
// BigInt64Array              // chrome specific
TextEncoder
TextDecoder
SyncManager
SubtleCrypto
SourceBufferList
SourceBuffer
ScreenOrientation
Plugin
PluginArray
PhotoCapabilities
OverconstrainedError
NetworkInformation
MimeType
MimeTypeArray
MediaStreamTrackEvent
MediaSource
MediaSettingsRange
MediaRecorder
MediaEncryptedEvent
MediaDeviceInfo
MediaCapabilities
MIDIPort
MIDIOutputMap
MIDIOutput
MIDIMessageEvent
MIDIInputMap
MIDIInput
MIDIConnectionEvent
MIDIAccess
InputDeviceInfo
ImageCapture
ImageBitmapRenderingContext
GamepadEvent
Gamepad
GamepadButton
DeviceOrientationEvent
DeviceMotionEvent
DOMError
CryptoKey
Crypto
CanvasRenderingContext2D
CanvasCaptureMediaStreamTrack
BroadcastChannel
BlobEvent
BeforeInstallPromptEvent
BatteryManager
VisualViewport
VTTCue
TransitionEvent
TrackEvent
TouchList
Touch
TimeRanges
TextTrackList
TextTrackCueList
TextTrackCue
TextTrack
TextMetrics
TextEvent
TaskAttributionTiming
StylePropertyMapReadOnly
StylePropertyMap
StaticRange
Selection
SecurityPolicyViolationEvent
Response
ResizeObserverEntry
ResizeObserver
Request
Range
PromiseRejectionEvent
PerformanceTiming
PerformanceServerTiming
PerformanceResourceTiming
PerformancePaintTiming
PerformanceObserverEntryList
PerformanceObserver
PerformanceNavigation
PerformanceMeasure
PerformanceMark
PerformanceLongTaskTiming
PerformanceEntry
PageTransitionEvent
Navigator
MutationRecord
MutationObserver
MutationEvent
MessagePort
MessageChannel
MediaQueryListEvent
MediaQueryList
MediaError
IntersectionObserverEntry
IntersectionObserver
InputDeviceCapabilities
ImageData
ImageBitmap
IdleDeadline
Headers
HTMLShadowElement
HTMLFormControlsCollection
HTMLContentElement
HTMLAllCollection
FontFaceSetLoadEvent
DragEvent
DataTransferItemList
DataTransferItem
DataTransfer
DOMStringList
DOMRectReadOnly
DOMRectList
DOMRect
DOMQuad
DOMPointReadOnly
DOMPoint
DOMMatrixReadOnly
DOMMatrix
CustomElementRegistry
ClipboardEvent
BeforeUnloadEvent
AnimationEvent
WebKitCSSMatrix
WebKitMutationObserver
webkitURL
WebKitAnimationEvent
WebKitTransitionEvent
opener
closed
origin
customElements
visualViewport
clientInformation
event
offscreenBuffering
defaultStatus
defaultstatus
styleMedia
onanimationend
onanimationiteration
onanimationstart
onsearch
ontransitionend
onwebkitanimationend
onwebkitanimationiteration
onwebkitanimationstart
onwebkittransitionend
isSecureContext
onmousewheel
onauxclick
ongotpointercapture
onlostpointercapture
onpointerdown
onpointermove
onpointerup
onpointercancel
onpointerover
onpointerout
onpointerenter
onpointerleave
onafterprint
requestAnimationFrame
cancelAnimationFrame
requestIdleCallback
cancelIdleCallback
matchMedia
getSelection
find
webkitRequestAnimationFrame
webkitCancelAnimationFrame
fetch
createImageBitmap
onappinstalled
onbeforeinstallprompt
crypto
ondevicemotion
ondeviceorientation
ondeviceorientationabsolute
indexedDB
webkitStorageInfo
SharedArrayBuffer
Atomics
BigInt
chrome
MediaCapabilitiesInfo
OffscreenCanvas
PerformanceNavigationTiming
ReportingObserver
// SVGAnimationElement
// SVGDiscardElement
// SVGMPathElement
SharedWorker
FontFace
Worker
XSLTProcessor
GamepadHapticActuator
Notification
OffscreenCanvasRenderingContext2D
PaymentInstruments
PaymentManager
PaymentRequestUpdateEvent
Permissions
PermissionStatus
EnterPictureInPictureEvent
PictureInPictureWindow
Presentation
PresentationAvailability
PresentationConnection
PresentationConnectionAvailableEvent
PresentationConnectionCloseEvent
PresentationConnectionList
PresentationReceiver
PresentationRequest
PushManager
PushSubscription
PushSubscriptionOptions
RemotePlayback
SpeechSynthesisEvent
SpeechSynthesisUtterance
webkitSpeechGrammar
webkitSpeechGrammarList
webkitSpeechRecognition
webkitSpeechRecognitionError
webkitSpeechRecognitionEvent
CanvasGradient
CanvasPattern
Path2D
BluetoothUUID
speechSynthesis
webkitRequestFileSystem
webkitResolveLocalFileSystemURL
openDatabase
dir
dirxml
profile
profileEnd
clear
table
keys
values
debug
undebug
monitor
unmonitor
inspect
copy
queryObjects
$_
$0
$1
$2
$3
$4
getEventListeners
monitorEvents
unmonitorEvents
$
$$
$x
// windowProperties // custom
`;

var Event_API =
`
PointerEvent
`;

var CSS_API =
`
CSSVariableReferenceValue
CSSUnparsedValue
CSSUnitValue
CSSTranslate
CSSTransformValue
CSSTransformComponent
CSSSupportsRule
CSSStyleValue
CSSSkewY
CSSSkewX
CSSSkew
CSSScale
CSSRuleList
CSSRotate
CSSPositionValue
CSSPerspective
CSSPageRule
CSSNumericValue
CSSNumericArray
CSSNamespaceRule
CSSMatrixComponent
CSSMathValue
CSSMathSum
CSSMathProduct
CSSMathNegate
CSSMathMin
CSSMathMax
CSSMathInvert
CSSKeywordValue
CSSKeyframesRule
CSSKeyframeRule
CSSImageValue
CSSGroupingRule
CSSFontFaceRule
CSS
CSSConditionRule
`;

var Stream_API =
`
ByteLengthQueuingStrategy
CountQueuingStrategy
ReadableStream
WritableStream
TransformStream
`;

var WebAudio_API =
`
ChannelMergerNode
BiquadFilterNode
RadioNodeList
PeriodicWave
PannerNode
ScriptProcessorNode
OscillatorNode
OfflineAudioContext
OfflineAudioCompletionEvent
MediaStreamAudioSourceNode
MediaStreamAudioDestinationNode
MediaElementAudioSourceNode
StereoPannerNode
WaveShaperNode
BaseAudioContext
AudioWorkletNode
AudioScheduledSourceNode
AudioProcessingEvent
AudioParamMap
AudioParam
AudioNode
AudioListener
AudioDestinationNode
AudioContext
AudioBufferSourceNode
AudioBuffer
AnalyserNode
GainNode
DynamicsCompressorNode
DelayNode
IIRFilterNode
EventSource
ConvolverNode
ConstantSourceNode
ChannelSplitterNode
`;

var WebRTC_API =
`
RTCStatsReport
RTCTrackEvent
RTCSessionDescription
RTCRtpTransceiver
RTCRtpSender
RTCRtpReceiver
RTCRtpContributingSource
RTCPeerConnectionIceEvent
RTCPeerConnection
RTCIceCandidate
RTCDataChannelEvent
RTCDataChannel
RTCDTMFToneChangeEvent
RTCDTMFSender
RTCCertificate
MediaStream
MediaStreamEvent
MediaStreamTrack
MediaDevices
webkitRTCPeerConnection
webkitMediaStream
`;

var IndexedDB_API =
`
IDBVersionChangeEvent
IDBTransaction
IDBRequest
IDBOpenDBRequest
IDBObjectStore
IDBKeyRange
IDBIndex
IDBFactory
IDBDatabase
IDBCursorWithValue
IDBCursor
`;

var WebGL_API =
`
WebGLContextEvent
WebGL2RenderingContext
WebGLActiveInfo
WebGLBuffer
WebGLFramebuffer
WebGLProgram
WebGLQuery
WebGLRenderbuffer
WebGLRenderingContext
WebGLSampler
WebGLShader
WebGLShaderPrecisionFormat
WebGLSync
WebGLTexture
WebGLTransformFeedback
WebGLUniformLocation
WebGLVertexArrayObject
`;

var SVG_API =
`
// SVGViewElement                  // SVG
// SVGUseElement
// SVGUnitTypes
// SVGTransformList
// SVGTransform
// SVGTitleElement
// SVGTextPositioningElement
// SVGTextPathElement
// SVGTextElement
// SVGTextContentElement
// SVGTSpanElement
// SVGSymbolElement
// SVGSwitchElement
// SVGStyleElement
// SVGStopElement
// SVGSetElement
// SVGScriptElement
// SVGRectElement
// SVGRect
// SVGRadialGradientElement
// SVGPreserveAspectRatio
// SVGPolylineElement
// SVGPolygonElement
// SVGPointList
// SVGPoint
// SVGPatternElement
// SVGPathElement
// SVGNumberList
// SVGMetadataElement
// SVGMatrix
// SVGMaskElement
// SVGMarkerElement
// SVGLinearGradientElement
// SVGLineElement
// SVGLengthList
// SVGLength
// SVGImageElement
// SVGGradientElement
// SVGGeometryElement
// SVGGElement
// SVGForeignObjectElement
// SVGFilterElement
// SVGFETurbulenceElement
// SVGFETileElement
// SVGFESpotLightElement
// SVGFESpecularLightingElement
// SVGFEPointLightElement
// SVGFEOffsetElement
// SVGFEMorphologyElement
// SVGFEMergeNodeElement
// SVGFEMergeElement
// SVGFEImageElement
// SVGFEGaussianBlurElement
// SVGFEFuncRElement
// SVGFEFuncGElement
// SVGFEFuncBElement
// SVGFEFuncAElement
// SVGFEFloodElement
// SVGFEDropShadowElement
// SVGFEDistantLightElement
// SVGFEDisplacementMapElement
// SVGFEDiffuseLightingElement
// SVGFEConvolveMatrixElement
// SVGFECompositeElement
// SVGFEComponentTransferElement
// SVGFEColorMatrixElement
// SVGFEBlendElement
// SVGEllipseElement
// SVGDescElement
// SVGDefsElement
// SVGComponentTransferFunctionElement
// SVGClipPathElement
// SVGCircleElement
// SVGAnimatedTransformList
// SVGAnimatedRect
// SVGAnimatedPreserveAspectRatio
// SVGAnimatedNumberList
// SVGAnimatedNumber
// SVGAnimatedLengthList
// SVGAnimatedLength
// SVGAnimatedInteger
// SVGAnimatedEnumeration
// SVGAnimatedBoolean
// SVGAnimatedAngle
// SVGAnimateTransformElement
// SVGAnimateMotionElement
// SVGAnimateElement
// SVGAngle
// SVGAElement
`;
