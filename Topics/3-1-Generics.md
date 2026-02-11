###  Generics

* Understanding generic types
* Creating generic functions and classes
* Constraints on generics

-------------------------------------

We will cover: 
Understanding generic types
Generic functions
Generic classes
Constraints on generics

-----------------------
Think of generics as: Type placeholder that is decided later. 

Generics:
“Type will be decided later”
Instead of fixing type now (string, number), we use a placeholder:
<T>
Think of <T> like a variable — but for types.

--------------------------------


Without Generic: 

function echo(value: string): string {
  return value;
}

console.log(echo("Welcome"));

---> Works only for string.


Using any (unsafe)

function echo(value: any): any {
  return value;
}

No type safety


---------------------------------

Generic Solution:
Replace string with a type placeholder <T>.


function echo<T>(value: T): T {
  return value;
}

const a = echo<string>("Hello");
const b = echo<number>(123);
const c = echo<boolean>(true);

console.log(a);
console.log(b);
console.log(c);

Output: 
Hello
123
true

-------------------

Generic Array Example:

function first<T>(arr: T[]): T {
  return arr[0];
}

console.log(first([1,2,3]));
console.log(first(["A", "B", "C"]));

When I try to run, I got error: 
Why?
You promised to return T — but you might return undefined.

Updated to  
return arr[0]!;

Output
1
A
Same function
Different types
Still safe ✅

Why Not Just Use any?
Because generics remember the type. 
any version. 
Result type = any --- wrong

generic version:
first([1,2,3]) -> number
first(["A"]) -> string
Type preserved.

-----

Generic Class: 

class Box<T> {
  value: T;

  constructor(v: T) {
    this.value = v;
  }
}

const b1 = new Box("Book");
const b2 = new Box(100);

console.log(b1.value);
console.log(b2.value);
console.log(b1); --------------------> This is my inclusion to check if it is working or showing error.

Output
Book
100
Box { value: 'Book' }

--------------------------

Constraint: 
Any type - but must have length

function showLength<T extends {length: number}>(x: T) {
  console.log(x.length);

}

showLength("Welcome");
showLength([1,2,3]);

Output
7
3


Number fails: 
showLength(20);
Because number has no length. 

