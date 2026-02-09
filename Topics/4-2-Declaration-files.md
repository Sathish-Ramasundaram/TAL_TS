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