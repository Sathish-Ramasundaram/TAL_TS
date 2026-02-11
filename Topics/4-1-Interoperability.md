We will cover: 
Using JavaScript libraries in TypeScript
Adding types to existing JavaScript code. 

TypeScript with JavaScript (Interoperability)
TypeScript is build to work with JS - not replace it. 

----------
Using JS libraries in TS
Most JS libraries can be used directly in TS.
But TS needs type definitions to understand them. 

Example - Using a JS Library (lodash)
Step 1 — Install library
npm install lodash

Step 2 — Install types (important)
npm install -D @types/lodash

This gives TypeScript the type info.
Step 3 — Use in TS

import _ from "lodash";

const nums = [1, 2, 3, 4];

const reversed = _.reverse(nums);

console.log(reversed);


Note: Check this in tsconfig.json
 "verbatimModuleSyntax": false,

 And

     "module": "commonjs",
    "target": "es2019",
    "types": ["node"],

Output
[4, 3, 2, 1]

Rule: 
If TS shows error: 
could not find declaration file
Install:
@types/library-name

-----------------------

Using Plain JS file inside TS project: 
You can import JS file directly. 


math.js (JavaScript file)
function add(a, b) {
  return a + b;
}

module.exports = { add };

app.ts (TypeScript file)
const math = require("./math");

console.log(math.add(2, 3));

Output
5

Works — but no type safety yet.

-------

Typing Existing JS code (JSDoc way)
If you don't want to conver JS -> TS yet, you can add types using comments. 

math.js with JSDoc types
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

module.exports = { add };

Now TS understands types 👍


---------------------

Quick Type Wrapper in TS
You can declare types for JS imports. 

app.ts

const math: { add: (a: number, b: number) => number } =
  require("./math");

console.log(math.add(5, 7));

Output
12

Now typed ✅

------

declare keyword (Simple Intro)
Used when library exists but TS doesn't know it. 

declare const version: string;
console.log(version);

Tells TS: 
This exists somewhere - trust me. 





