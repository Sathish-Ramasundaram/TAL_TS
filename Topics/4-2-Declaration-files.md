Normal TS File vs Declaration File

Normal TS file
// math.ts
export function add(a: number, b: number) {
  return a + b;
}

Contains:
code
logic
runtime behavior

Declaration file
// math.d.ts
export function add(a: number, b: number): number;

Contains:
only type signature
no function body
no runtime code


Small Example — Your Own JS File
Suppose you have JS file:

📁 math.js
exports.add = (a, b) => a + b;


No types.
Create Declaration
📁 math.d.ts
export function add(a: number, b: number): number;

Use in TS
import { add } from "./math";

add(1, 2);      // ✅
add("a", "b");  // ❌ type error


Now typed safely.
✅ Typing Third-Party Libraries

Most popular libraries already provide types.
Installed using:

@types package

✅ Example — Express
npm install express
npm install @types/express --save-dev

✅ Example — Node
npm install @types/node --save-dev


You already did this ✔

🧠 Pattern
library → express
types → @types/express


DefinitelyTyped repo maintains these.

✅ When You Need to Write Your Own .d.ts

You create declaration file when:
using old JS library
using internal JS utilities
using custom global script
no @types available
