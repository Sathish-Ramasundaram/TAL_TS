TypeScript is JavaScript + Types.
It is a programming language created by Microsoft that adds type safety and better tooling on top of JavaScript.
You write TypeScript → it gets compiled into JavaScript → browser / Node runs the JavaScript.

🧠 Simple Definition
TypeScript = JavaScript with rules about data types

Example: 
JavaScript
let x = 10;
x = "hello";   // allowed

TypeScript
let x: number = 10;
x = "hello";   // ❌ error

TypeScript prevents mistakes before runtime.