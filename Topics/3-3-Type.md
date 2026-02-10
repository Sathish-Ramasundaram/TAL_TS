✅ Type Assertion (as)
✅ Type Guards with typeof
✅ Type Guards with instanceof
✅ Custom Type Guards


Type Assertion (as):

let greeting: unknown = "Hello";
let len = (greeting as string).length;
console.log(len);

Output: 
5

Without as string → error
Because unknown has no .length.

⚠️ No runtime check — you are responsible.


----------------------------------------------------
Type Guard with typeof:
----------------------

function printValue(x: string | number) {
  console.log("Input:", x);

  if (typeof x === "string") {
    // TypeScript now knows x is string here
    console.log("Uppercase:", x.toUpperCase());
  } else {
    // TypeScript now knows x is number here
    console.log("Fixed:", x.toFixed(2));
  }

  console.log("----");
}


// test calls
printValue("hello typescript");
printValue(12);
printValue(3.456);

Output: 
Input: hello typescript
Uppercase: HELLO TYPESCRIPT
----
Input: 12
Fixed: 12.00
----
Input: 3.456
Fixed: 3.46
----


Try Removing Guard,
TypeScript error appears — because unsafe.