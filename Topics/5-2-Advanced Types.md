We will cover: 
Type Aliases
Intersection Types
Conditional Types

---------------------------

This looks familiar. Try once with own code. 

Type Aliases

Type alias = give a custom name to a type.

You already used it a bit — now we formalize it.

✅ Basic Type Alias
type ID = string | number;

let userId: ID = 101;
console.log(userId);

userId = "A101";
console.log(userId);

🖥 Output
101
A101

✅ Alias for Object Shape
type User = {
  name: string;
  age: number;
};

const u: User = { name: "Ana", age: 20 };
console.log(u.name);

🖥 Output
Ana

🧠 Why Type Alias?
reuse
cleaner names
complex types readable

✅ 2️⃣ Intersection Types (&)

Intersection = combine multiple types into one

Symbol:

&


Think:

must satisfy BOTH types

✅ Example
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const p: Person = {
  name: "Sam",
  age: 30
};

console.log(p);

🖥 Output
{ name: 'Sam', age: 30 }

❌ Missing one field → error
const bad: Person = { name: "Sam" }; ❌


Needs both.

✅ Real-World Pattern

Very common in APIs:

type ApiUser = BaseFields & AuditFields;

✅ 3️⃣ Conditional Types (Simple Version)

Conditional type = type decision based on condition.

Format:

T extends X ? A : B


Read as:

If T matches X → use A → else B

✅ Example — IsString
type IsString<T> = T extends string ? "YES" : "NO";

type A = IsString<string>;
type B = IsString<number>;

🧠 Result Types
A = "YES"
B = "NO"


No runtime output — this is compile-time typing.

✅ Practical Conditional Example
Return Type Helper
type Result<T> = T extends number ? number : string;

function test<T>(value: T): Result<T> {
  if (typeof value === "number") {
    return (value * 2) as Result<T>;
  }
  return ("not number") as Result<T>;
}

console.log(test(5));
console.log(test("hi"));

🖥 Output
10
not number

✅ Very Common Built-in Conditional Type

You already use it without knowing:

ReturnType
function add(a: number, b: number) {
  return a + b;
}

type R = ReturnType<typeof add>;


R becomes:

number


That’s conditional types inside TS itself.

🧠 Mental Model
Type Alias
nickname for type

Intersection
combine types
ALL required

Conditional
if type → then type → else type

🎯 One-Screen Summary
type X = ...        → alias
A & B               → intersection
T extends U ? A:B   → conditional