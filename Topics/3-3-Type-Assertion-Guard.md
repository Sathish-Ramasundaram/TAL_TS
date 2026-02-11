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


Simple Example: 

type nul > src\index.html

index.html

<!DOCTYPE html>
<html>
<head>
  <title>TypeScript DOM Example</title>
</head>
<body>

  <h2>TypeScript Input Example</h2>

  <input id="username" type="text" />

  <!-- compiled JS file -->
  <script src="app.js"></script>

</body>
</html>

app.ts


const input = document.getElementById("username") as HTMLInputElement;

input.value = "Sam";
console.log("Value set from TypeScript");


Run: tsc src\app.ts

This generate app.js

Generated JavaScript (auto-created)
var input = document.getElementById("username");
input.value = "Sam";
console.log("Value set from TypeScript");

Notice:
👉 as HTMLInputElement disappears
👉 Because it is compile-time only

Result:
Input box shows: Sam
Console → Value set from TypeScript

Important Rule: 
Type assertion does not change runtime type - only tells compiler. 
Wrong assertion = runtime crash possible. 

--------------------------------------------------------------------

Type Guards (typeof):
runtime checks that narrow types. 

✅ Example — typeof guard

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

TypeScript now knows inside each block the exact type. 

--------------------------------------------

instanceof Guard: 
Used with classes

Example: 

class Dog {
  bark(){
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  }else {
    pet.meow();
  }
}

speak(new Dog());
speak(new Cat());

Output
Woof
Meow

-------

Custom Type Guard (Advanced but Useful)
You write a function that checks type. 
Return type format: 
param is Type

Example: 

type User = { name: string };
type Admin = { name: string; role: string };

function isAdmin(x: User | Admin): x is Admin {
  return "role" in x;
}

function show(x: User | Admin) {
  if (isAdmin(x)) {
    console.log("Admin:", x.role);
  }else{
  console.log("User:", x.name);
}
}

show({name: "Sathish"});
show({name: "Arun", role: "Manager"});


Output
User: Ana
Admin: Manager

--------------

When to use what
Type Assertion (as)
- use when: 
you are sure about type
TS cannot infer
DOM / external data



When to Use What
- Type Assertion (as)
Use when:
you are sure about type
TS cannot infer
DOM / external data

- typeof guard
Use for:
string | number | boolean | undefined 

- instanceof guard
use for: 
class objects

- Custom guard
use for: 
object unions
API data
complex shapes

-------------------------
