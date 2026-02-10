Generics:
“Type will be decided later”
Instead of fixing type now (string, number), we use a placeholder:
<T>
Think of <T> like a variable — but for types.


Without Generic: 

function echo(value: string): string {
  return value;
}

console.log(echo("Welcome"));



param: type   → input type        (value: string)
): type       → output or return type       (): string)


Can We Omit Return Type?

Yes — TypeScript can infer it.

function echo(value: string) {
  return value;   // inferred as string
}


This is valid.

---------------------------------

Generic Version
Replace string with a type placeholder <T>.

function echo<T>(value: T): T {
  return value;
}

console.log(echo("Welcome"));


------

function echo<T>(value: T): T {
  return value;
}

const a = echo<string>("Hello");
const b = echo<number>(123);
const c = echo<boolean>(true);

console.log(a, b, c);

