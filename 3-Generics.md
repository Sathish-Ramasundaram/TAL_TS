Generics = write once, work with many types — safely.

Generics in TypeScript let you write reusable functions and classes that work with different data types while still keeping type safety.
You can also add constraints (like extends) to restrict which types are allowed, so the generic still follows required rules.


Without Generic: 

function echo(value: string): string {
  return value;
}

console.log(echo("Welcome"));

---------------------------------

Generic Version
Replace string with a type placeholder <T>.

function echo<T>(value: T): T {
  return value;
}

console.log(echo("Welcome"));