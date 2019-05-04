;doc={};


doc.temp=
[
`
`
];


doc.outline=
[
`
### ECMA 262 3rd Edition
ECMAScript 3rd Edition, December 1999
PDF 188pages 705kb
https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf

### TOC
1. Scope
2. Conformance
3. References
4. Overview
5. Notational Conventions
6. Source Text
7. Lexical Conventions
8. Types
9. Type Conversion
10. Execution Contexts
11. Expressions
12. Statements
13. Function Definition
14. Program
15. Native ECMAScript objects
16. Errors
Annex A - Grammar Summary
Annex B - Comparability
`
];

doc.details=
[
`
### TOC details
1. Scope

2. Conformance

3. References

4. Overview
4.1 Web Scripting
4.2 Language Overview
4.2.1 Objects
4.3 Definitions
4.3.1 Type
4.3.2 Primitive Value
4.3.3 Object
4.3.4 Constructor
4.3.5 Prototype
4.3.6 Native Object
4.3.7 Built-in Object
4.3.8 Host Object
4.3.9 Undefined Value
4.3.10 Undefined Type
4.3.11 Null Value
4.3.12 Null Type
4.3.13 Boolean Value
4.3.14 Boolean Type
4.3.15 Boolean Object
4.3.16 String Value
4.3.17 String Type
4.3.18 String Object
4.3.19 Number Value
4.3.20 Number Type
4.3.21 Number Object
4.3.22 Infinity
4.3.23 NaN

5. Notational Conventions
5.1 Syntactic and Lexical Grammars
5.1.1 Context-Free Grammars
5.1.2 The Lexical and RegExp Grammars
5.1.3 The Numeric String Grammar
5.1.4 The Syntactic Grammar
5.1.5 Grammar Notation
5.2 Algorithm Conventions

6. Source Text

7. Lexical Conventions
7.1 Unicode Format-Control Characters
7.2 White Space
7.3 Line Terminators
7.4 Comments
7.5 Tokens
7.5.1 Reserved Words
7.5.2 Keywords
7.5.3 Future Reserved Words
7.6 Identifiers
7.7 Punctuators
7.8 Literals
7.8.1 Null Literals
7.8.2 Boolean Literals
7.8.3 Numeric Literals
7.8.4 String Literals
7.8.5 Regular Expression Literals
7.9 Automatic Semicolon Insertion
7.9.1 Rules of Automatic Semicolon Insertion
7.9.2 Examples of Automatic Semicolon Insertion

8. Types
8.1 The Undefined Type
8.2 The Null Type
8.3 The Boolean Type
8.4 The String Type
8.5 The Number Type
8.6 The Object Type
8.6.1 Property Attributes
8.6.2 Internal Properties and Methods
8.7 The Reference Type
8.7.1 GetValue (V)
8.7.2 PutValue (V, W)
8.8 The List Type
8.9 The Completion Type

9. Type Conversion
9.1 ToPrimitive
9.2 ToBoolean
9.3 ToNumber
9.3.1 ToNumber Applied to the String Type
9.4 ToInteger
9.5 ToInt32: (Signed 32 Bit Integer)
9.6 ToUint32: (Unsigned 32 Bit Integer)
9.7 ToUint16: (Unsigned 16 Bit Integer)
9.8 ToString
9.8.1 ToString Applied to the Number Type
9.9 ToObject

10. Execution Contexts
10.1 Definitions
10.1.1 Function Objects
10.1.2 Types of Executable Code
10.1.3 Variable Instantiation
10.1.4 Scope Chain and Identifier Resolution
10.1.5 Global Object
10.1.6 Activation Object
10.1.7 This
10.1.8 Arguments Object
10.2 Entering An Execution Context
10.2.1 Global Code
10.2.2 Eval Code
10.2.3 Function Code

11. Expressions
11.1 Primary Expressions
11.1.1 The this Keyword
11.1.2 Identifier Reference
11.1.3 Literal Reference
11.1.4 Array Initialiser
11.1.5 Object Initialiser
11.1.6 The Grouping Operator
11.2 Left-Hand-Side Expressions
11.2.1 Property Accessors
11.2.2 The new Operator
11.2.3 Function Calls
11.2.4 Argument Lists
11.2.5 Function Expressions
11.3 Postfix Expressions
11.3.1 Postfix Increment Operator
11.3.2 Postfix Decrement Operator
11.4 Unary Operators
11.4.1 The delete Operator
11.4.2 The void Operator
11.4.3 The typeof Operator
11.4.4 Prefix Increment Operator
11.4.5 Prefix Decrement Operator
11.4.6 Unary + Operator
11.4.7 Unary - Operator
11.4.8 Bitwise NOT Operator ( ~)
11.4.9 Logical NOT Operator ( !)
11.5 Multiplicative Operators
11.5.1 Applying the * Operator
11.5.2 Applying the / Operator
11.5.3 Applying the % Operator
11.6 Additive Operators
11.6.1 The Addition operator ( +)
11.6.2 The Subtraction Operator ( -)
11.6.3 Applying the Additive Operators ( +,- ) to Numbers
11.7 Bitwise Shift Operators
11.7.1 The Left Shift Operator ( <<)
11.7.2 The Signed Right Shift Operator ( >>)
11.7.3 The Unsigned Right Shift Operator ( >>>)
11.4 Relational Operators
11.8.1 The Less-than Operator ( <)
11.8.2 The Greater-than Operator ( >)
11.8.3 The Less-than-or-equal Operator ( <=)
11.8.4 The Greater-than-or-equal Operator ( >=)
11.8.5 The Abstract Relational Comparison Algorithm
11.8.6 The instanceof operator
11.8.7 The in operator
11.9 Equality Operators
11.9.1 The Equals Operator ( ==)
11.9.2 The Does-not-equals Operator ( !=)
11.9.3 The Abstract Equality Comparison Algorithm
11.9.4 The Strict Equals Operator ( ===)
11.9.5 The Strict Does-not-equal Operator ( !==)
11.9.6 The Strict Equality Comparison Algorithm
11.10 Binary Bitwise Operators
11.11 Binary Logical Operators
11.12 Conditional Operator ( ?: )
11.13 Assignment Operators
11.13.1 Simple Assignment ( =)
11.13.2 Compound Assignment ( op=)
11.14 Comma Operator ( , )

12. Statements
12.1 Block
12.2 Variable statement
12.3 Empty Statement
12.4 Expression Statement
12.5 The if Statement
12.6 Iteration Statements
12.6.1 The do-while Statement
12.6.2 The while statement
12.6.3 The for Statement
12.6.4 The for-in Statement
12.7 The continue Statement
12.8 The break Statement
12.9 The return Statement
12.10 The with Statement
12.11 The switch Statement
12.12 Labelled Statements
12.13 The throw statement
12.14 The try statement

13. Function Definition
13.1 Definitions
13.1.1 Equated Grammar Productions
13.1.2 Joined Objects
13.2 Creating Function Objects
13.2.1 [[Call]]
13.2.2 [[Construct]]

14. Program

15. Native ECMAScript Objects
15.1 The Global Object
15.1.1 Value Properties of the Global Object
15.1.2 Function Properties of the Global Object
15.1.3 URI Handling Function Properties
15.1.4 Constructor Properties of the Global Object
15.1.5 Other Properties of the Global Object
15.2 Object Objects
15.2.1 The Object Constructor Called as a Function
15.2.2 The Object Constructor
15.2.3 Properties of the Object Constructor
15.2.4 Properties of the Object Prototype Object
15.2.5 Properties of Object Instances
15.3 Function Objects
15.3.1 The Function Constructor Called as a Function
15.3.2 The Function Constructor
15.3.3 Properties of the Function Constructor
15.3.4 Properties of the Function Prototype Object
15.3.5 Properties of Function Instances
15.4 Array Objects
15.4.1 The Array Constructor Called as a Function
15.4.2 The Array Constructor
15.4.3 Properties of the Array Constructor
15.4.4 Properties of the Array Prototype Object
15.4.5 Properties of Array Instances
15.5 String Objects
15.5.1 The String Constructor Called as a Function
15.5.2 The String Constructor
15.5.3 Properties of the String Constructor
15.5.4 Properties of the String Prototype Object
15.5.5 Properties of String Instances
15.6 Boolean Objects
15.6.1 The Boolean Constructor Called as a Function
15.6.2 The Boolean Constructor
15.6.3 Properties of the Boolean Constructor
15.6.4 Properties of the Boolean Prototype Object
15.6.5 Properties of Boolean Instances
15.7 Number Objects
15.7.1 The Number Constructor Called as a Function
15.7.2 The Number Constructor
15.7.3 Properties of the Number Constructor
15.7.4 Properties of the Number Prototype Object
15.7.5 Properties of Number Instances
15.8 The Math Object
15.8.1 Value Properties of the Math Object
15.8.2 Function Properties of the Math Object
15.9 Date Objects
15.9.1 Overview of Date Objects and Definitions of Internal Operators
15.9.2 The Date Constructor Called as a Function
15.9.3 The Date Constructor
15.9.4 Properties of the Date Constructor
15.9.5 Properties of the Date Prototype Object
15.9.6 Properties of Date Instances
15.10 RegExp (Regular Expression) Objects
15.10.1 Patterns
15.10.2 Pattern Semantics
15.10.3 The RegExp Constructor Called as a Function
15.10.4 The RegExp Constructor
15.10.5 Properties of the RegExp Constructor
15.10.6 Properties of the RegExp Prototype Object
15.10.7 Properties of RegExp Instances
15.11 Error Objects
15.11.1 The Error Constructor Called as a Function
15.11.2 The Error Constructor
15.11.3 Properties of the Error Constructor
15.11.4 Properties of the Error Prototype Object
15.11.5 Properties of Error Instances
15.11.6 Native Error Types Used in This Standard
15.11.7 NativeError Object Structure

16. Errors

Annex A - Grammar Summary
A.1 Lexical Grammar
A.2 Number Conversions
A.3 Expressions
A.4 Statenments
A.5 Function and programs
A.6 Universal Resource Identifier Classes
A.7 Regular Expressions
Annex B - Comparability
B.1 Additional Syntax
B.1.1 Numeric Literals
B.1.2 String Literals
B.2 Additional Properties
B.2.1 escape (string)
B.2.2 unescape (string)
B.2.3 String.prototype.substr(start,length)
B.2.4 Date.prototype.getYear()
B.2.5 Date.prototype.setYear(year)
B.2.6 Date.prototype.toGMTString()
`
];



doc.es03=
[
`
01|Scope
02|Conformance
03|Normative References
04|Overview|4.3.23
05|Notational Conventions|5.2
06|Source Text
07|Lexical Conventions|7.9.2
08|Types|8.9
09|Type Conversion|9.9
10|Execution Contexts|10.2.3
11|Expressions|11.14
12|Statements|12.14
13|Function Defenition|13.2.2
14|Program
15|Native ECMAScript Objects|15.11.7
16|Errors
0A|Grammar Summary|A.7
0B|Compatability|B.2.6
`
];


/*
 * es03c01|Scope
 */
(doc=>{
doc.es03c01=
`
es03c01|Scope
`;
})(doc);


/*
 * es03c02|Conformance
 */
(doc=>{
doc.es03c02=
`
es03c02|Conformance
`;
})(doc);


/*
 * es03c03|Normative References
 */
(doc=>{
doc.es03c03=
`
es03c03|Normative References
`;
})(doc);


/*
 * es03c04|Overview
 */
(doc=>{
doc.es03c04=
`
es03c04|Overview
`;
})(doc);


/*
 * es03c05|Notational Conventions
 */
(doc=>{
doc.es03c05=
`
es03c05|Notational Conventions
Syntactic and Lexicsl Grammars
Algorithm Conventions
`;
})(doc);


  /*
 * es03c046|Source Text
 */
(doc=>{
doc.es03c06=
`
es03c06|Source Text
`;
})(doc);



/*
 * es03c07|Lexical Conventions
 */
(doc=>{
doc.es03c07=
`
es03c07|Lexical Conventions
`;
})(doc);



/*
 * es03c08|Types
 */
(doc=>{
doc.es03c08=
`
es03c08|Types
The Undefined Type
The Null Type
The Boolean Type
The String Type
The Number Type
The Object Type
The Reference Type
The List Type
The Completion Type
`;
})(doc);



/*
 * es03c09|Type Conversion
 */
(doc=>{
doc.es03c09=
`
es03c09|Type Conversion
ToPrimative
ToBoolean
ToNumber
ToInteger
ToInt32
ToUint32
ToUint16
ToString
ToObject
`;
})(doc);



/*
 * es03c10|Execution Contexts
 */
(doc=>{
doc.es03c10=
`
es03c10|Execution Contexts
Definitions
Entering An Execution Context
- Global Code
- Eval Code
- Function Code
`;
})(doc);


/*
 * es03c11|Expressions
 */
(doc=>{
doc.es03c09=
`
es03c11|Expressions
Primary Expressions
Left Hand Side Expressions
Postfix Expressions
Unary Expressions
Multiplicative Operators
Additive Operators
Bitwise Shift Operators
Relational Operators
Equality Operators
Binary Bitwise Operators
Binary Logical Operators
Conditional Operator
Assignment Operators
Comma Operator

`;
})(doc);


/*
 * es03c12|Statements
 */
(doc=>{
doc.es03c12=
`
es03c12|Statements
Block
Variable Statement
Empty Statement
Expression Statement
The if Statement
Iteration Statements
The continue Statement
The break Statement
The return Statement
The with Statement
The switch statement
Labelled Statements
The throw Statememt
The try Statement
`;
})(doc);


/*
 * es03c13|Function Defenition
 */
(doc=>{
doc.es03c13=
`
es03c13|Function Defenition
Definitions
Creating Function Objects
`;
})(doc);


/*
 * es03c14|Program
 */
(doc=>{
doc.es03c14=
`
es03c14|Program
`;
})(doc);


/*
 * es03c15|Native ECMAScript Objects
 */
(doc=>{
doc.es03c15=
`
es03c15|Native ECMAScript Objects
The Global Object
Object Objects
Function Objects
Array Objects
String Objects
Boolean Objects
Number Objects
The Math Object
Date Object
RegExp Objects
Error Objects
`;
})(doc);


/*
 * es03c16|Errors
 */
(doc=>{
doc.es03c16=
`
es03c16|Errors
`;
})(doc);
