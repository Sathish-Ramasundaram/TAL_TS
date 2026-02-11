We will cover: 
What is a declaration file
Creating your own .d.ts
Using it
Typing third-party libraries

----

What is a Declaration File?
A declaration file: 
contains only types
contains no real code
tells TS what exists. 

File name ends with: something.d.ts

Why needed?
When: 
JS library exists
TS has no type info

TS needs help understanding it. 

Example: JS library without types: 

math.js (normal JavaScript)
exports.add = (a, b) => a + b;

Works in JS — but TS shows error when importing:
No declaration file found ❌

Create Declaration File
math.d.ts
export function add(a: number, b: number): number;

Notice: 
no function body
only signature


Use It in TypeScript
app.ts
import { add } from "./math";

console.log(add(2, 3));

Output
5

Now TS understands types ✅

---------------

Declare Global Variable Example: 

global.d.ts
declare const APP_VERSION: string;

app.ts
console.log(APP_VERSION);

Need to check how to run this later.
TS won’t complain now ✅



Need to study other topics deeply later