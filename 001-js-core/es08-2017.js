;doc={};

/*
 * template
 */
(doc=>{
doc.template=
`
`;
})(doc);

/*
 * es08
 */
(doc=>{
doc.template=
`
01|scope
02|conformance
03|normative references
04|overview
05|notational conventions
06|ecmascript data types and values
07|abstract operations
08|executable code and execution contexts
09|ordinary and exotic object behaviours
10|ecmascript language: source code
11|ecmascript language: lexical grammar
12|ecmascript language: expressions
13|ecmascript language: statements and declarations
14|ecmascript language: functions and classes
15|ecmascript language: scripts and modules
16|error handling and language extensions
17|ecmascript standard built in objects
18|the global object
19|fundamental object
20|numbers and dates
21|text processing
22|indexed collections
23|keyed collections
24|structured data
25|control abstraction objects
26|reflection
27|memory model
0A|grammar summary
0B|additional ecmascript features for web browsers
0C|the strict mode of ecmascript
0D|corrections and clarifications in the ecmascript 2015 with possible compatability impact
0E|additions and changes that introduce incomoatabilities with prior editions
0F|bibliography
0G|copyright & software license
`;
})(doc);

/*
 * es08c01
 */
(doc=>{
doc.es08c01=
`
es08c01|Scope
`;
})(doc);

/*
 * es08c02
 */
(doc=>{
doc.es08c02=
`
es08c02|Conformance
`;
})(doc);

/*
 * es08c03
 */
(doc=>{
doc.es08c03=
`
es08c01|Normative References
`;
})(doc);

/*
 * es08c04
 */
(doc=>{
doc.es08c04=
`
es08c04|Overview
`;
})(doc);

/*
 * es08c05
 */
(doc=>{
doc.es08c05=
`
es08c05|Notational Conventions
`;
})(doc);


/*
 * es08c06
 */
(doc=>{
doc.es08c06=
`
es08c06|ECMAScript Data Types and Calues
ecmascript language types
ecmascript specification types
`;
})(doc);

/*
 * es08c07
 */
(doc=>{
doc.es08c07=
`
es08c07|Abstract Operations
type conversion
testing and comparison operations
operations as objects
operations as iterator objects
`;
})(doc);

/*
 * es08c08
 */
(doc=>{
doc.es08c08=
`
es08c08|Executable Code and Execution Contexts
Lexical Environments
Realms
Execution Contexts
Jobs and Job Queues
InitializeHostDefinedRealm
RunJobs
Agents
Agent Clusters
Forward Progress
`;
})(doc);

/*
 * es08c09
 */
(doc=>{
doc.es08c09=
`
es08c09|Ordinary and Exotic Objects Behaviours
Ordinary Object Internal Methods and Internal Slots
ECMAScript Function Objects
Built-in Function Objects
Built-in Exotic Object Internal Methods and Slots
`;
})(doc);

/*
 * es08c10
 */
(doc=>{
doc.es08c10=
`
es08c10|ECMAScript Language: Source Code
`;
})(doc);

/*
 * es08c11
 */
(doc=>{
doc.es08c11=
`
es08c11|ECMAScript Language: Lexical Grammar
`;
})(doc);

/*
 * es08c12
 */
(doc=>{
doc.es08c12=
`
es08c12|ECMAScript Language: Expressions
`;
})(doc);

/*
 * es08c13
 */
(doc=>{
doc.es08c13=
`
es08c13|ECMAScript Language: Statements and Declarations
`;
})(doc);

/*
 * es08c14
 */
(doc=>{
doc.es08c14=
`
es08c14|ECMAScript Language: Functions and Classes
`;
})(doc);

/*
 * es08c15
 */
(doc=>{
doc.es08c15=
`
es08c15|ECMAScript Language: Scripts and Modules
`;
})(doc);

/*
 * es08c16
 */
(doc=>{
doc.es08c16=
`
es08c16|Error Handling and Language Extensions
`;
})(doc);

/*
 * es08c17
 */
(doc=>{
doc.es08c17=
`
es08c17|ECMAScript Standard Built-in Objects
`;
})(doc);

/*
 * es08c18
 */
(doc=>{
doc.es08c18=
`
es08c18|The Global Object
Value Properties
- Infinity
- NaN
- undefined
Function Properties
- eval
- isFinite
- isNaN
- parseFloat
- parseInt
- uri rs encode
- uri rs decode
- decodeURI
- decodeURIComponent
- encodeURI
- envodeURIComponent
Constructor Properties
- Array
- ArrayBuffer
- Boolean
- DataView
- Date
- Error
- EvalError
- Float32Array
- Float64Array
- Function
- Int8Array
- Int16Array
- Int32Array
- Map
- Number
- Object
- Proxy
- Promise
- RangeError
- ReferenceError
- RegExp
- Set
- SharedArrayBuffer
- String
- Symbol
- SyntaxError
- TypeError
- Uint8Array
- Uint8ClampedArray
- Uint16Array
- Uint32Array
- URIError
- WeakMap
' WeakSet
Other Properties
- Atomics
- JSON
- Math
- Reflect
`;
})(doc);

/*
 * es08c19
 */
(doc=>{
doc.es08c19=
`
es08c19|Fundamental Objects
Object
Function
Boolean
Symbol
Error

`;
})(doc);

/*
 * es08c20
 */
(doc=>{
doc.es08c20=
`
es08c20|Numbers and Dates
Number
Math
Date
`;
})(doc);

/*
 * es08c21
 */
(doc=>{
doc.es08c21=
`
es08c21|Text Processing
String
RegExp
`;
})(doc);

/*
 * es08c22
 */
(doc=>{
doc.es08c22=
`
es08c22|Indexed Collection
Array
TypedArray
`;
})(doc);

/*
 * es08c23
 */
(doc=>{
doc.es08c23=
`
es08c23|Keyed Collection
Map
Set
WeakMap
WeakSet
`;
})(doc);

/*
 * es08c24
 */
(doc=>{
doc.es08c24=
`
es08c24|Structured Data
ArrayBuffer
SharedArrayBuffer
DataView
Atomics
DataView
`;
})(doc);

/*
 * es08c25
 */
(doc=>{
doc.es08c25=
`
es08c25|Control Abstraction Objects
Iteration
GeneratorFunction
Generator
Promise
AsyncFunction
`;
})(doc);

/*
 * es08c26
 */
(doc=>{
doc.es08c26=
`
es08c26|Reflection
Reflection
Proxy
Module Namespace
`;
})(doc);

/*
 * es08c27
 */
(doc=>{
doc.es08c27=
`
es08c27|Memory Model
Memory Model Fundamentals
Agent Events Records
Chosen Value Records
Candidate Executions
Abstract Operations for the Memoty Model
Relations of Candidatew Executions
Properties of Valid Executions
Races
Data Races
Date Race Freedom
Shared Memory Guidelines
`;
})(doc);


/*
 * template
 */
(doc=>{
doc.template=
`
`;
})(doc);
