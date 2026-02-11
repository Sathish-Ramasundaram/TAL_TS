TypeScript is JavaScript + Types.

It adds type safety and better tooling on top of JavaScript.
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


------------------------

A runtime error is an error that happens:

❗ while the program is running
❗ not while writing the code
❗ not during compile — but during execution

It crashes or breaks behavior when the code actually runs.


Simple Example — JavaScript Runtime Error
```
let user = null;
console.log(user.name);
```
This runs… then crashes:
TypeError: Cannot read property 'name' of null

Why
Because:
null has no property "name"
But JavaScript didn’t warn earlier.

✅ Another Example
```
function add(a, b) {
  return a + b;
}

add(10, "5");   // wrong type
```

Result:
"105"   ← wrong result (string concat)
Not crash — but wrong behavior at runtime.

✅ How TypeScript Helps
TypeScript catches these before running.

function add(a: number, b: number) {
  return a + b;
}

add(10, "5");   // ❌ compile-time error

Error shown in editor — not at runtime.

---------------------

What is Hard Refactoring?

Refactoring = improving code structure without changing behavior.

Example:

rename variable
split functions
change parameter types
move files

❌ Why Refactoring Is Hard in JavaScript
Because there is no type safety.

Example:

function getUser(id) {
  return fetchUser(id);
}


Used in 50 places.

You decide to change:

function getUser(id, includeAddress)


Now you must manually check:

Did every call pass 2 params?
Did any place pass wrong type?
Did anything break?


You don’t know until runtime.

✅ TypeScript Makes Refactoring Easy
function getUser(id: number, includeAddress: boolean)


If you change it →
Editor instantly shows:
❌ 18 errors found


Click → fix → done.

✅ Refactoring Example — Rename Property
JavaScript
user.name

Rename to:
user.fullName

You must search whole project manually 😓

TypeScript
Editor knows type:

Rename symbol → updates everywhere safely

-----------------------------