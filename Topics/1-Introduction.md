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

1.1. Brief History
Created by Microsoft
First released in 2012
Created by Anders Hejlsberg (also creator of C#)
Built because large JavaScript projects became hard to maintain
Now widely used in:
React apps
Angular
Node backend
Enterprise apps


Why TypeScript Was Created (Purpose)
As JavaScript apps grew bigger:
Problems appeared:
❌ runtime errors
❌ wrong data types
❌ hard refactoring
❌ unclear object shapes
❌ team confusion

TypeScript solves this with:
✅ static type checking
✅ better tooling
✅ safer refactoring


1.2.  Advantages Over JavaScript
✅ 1 — Catches Errors Early

Before running code.