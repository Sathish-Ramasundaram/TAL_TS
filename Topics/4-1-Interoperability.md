TypeScript is a superset of JavaScript.

All JavaScript is valid TypeScript
So you can:
use JS libraries inside TS
convert JS files slowly
add types gradually

This is called interoperability.


Add Types for Existing JavaScript Code
You have 3 easy options.

Option A — Convert to TypeScript (Best)

Rename:
math.js → math.ts


Add types:
export function add(a: number, b: number): number {
  return a + b;
}


Best long-term solution.