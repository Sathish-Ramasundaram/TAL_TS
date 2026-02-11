2.2 Functions
- Typing function parameters and return values
- Optional and default parameters
- Arrow functions

------------------------------

We will cover:
Typing parameters
Typing return values
Optional parameters
Default parameters
Arrow function with types
---------------------------------


Typing Function Parameters:
In Typescript, you must type function inputs. 
function add(a: number, b: number): void {
    console.log(a+b)
}

add(2,3);

Output: 5

Wrong: (JS style - not safe)
function add(a, b)

add ("2", 3)

No type safety.

----------------

Typing Return Values: 
You can also declare what the function returns. 

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2,4));

: number -> return type

Another Example: 

function greet(name: string): string {
    return "Hello "+name;
}

console.log(greet("Sathish"));


Void return (no return value):

function add(a: number, b: number): void {
    console.log(a+b)
}

add(2,3);

What happens when you not use void in this, TypeScript automatically infers the return type as void because the function doesn't return anything. So this works perfectly fine. 

So this works perfectly fine.
function add(a: number, b: number) {
    console.log(a+b)
}

add(2,3);

Another Example: 
function logMsg(msg: string): void {
  console.log(msg);
}

logMsg("Welcome");


----------------------

Optional Parameters:

Use ? to make a parameter optional.
Example: 

function greet(name: string, title?: string) {
    console.log("Hi", title?title + " " + name: name);
}

greet("Sathish");
greet("Sathish", "Mr.");

Output: 
Hi Sathish
Hi Mr. Sathish

Rule: 
Optional parameters must come after required ones. 
Wrong: 
function bad(title?: string, name: string) {
    console.log("Hi", title?title + " " + name: name);
}

bad("Sathish");
bad("Mr.", "Sathish");

function bad(a?: string, b: string) ❌

Error: A required parameter cannot follow an optional parameter.

--------------------------------

Default Parameters: 
Provide a default value if argument is missing. 

function greet(name: string, msg: string = "Hello") {
    console.log(msg+ " " + name);
}

greet("Sathish");
greet("Sathish", "Good Morning");

Output: 
Hello Sathish
Good Morning Sathish

--------------------

Arrow Functions with Types: 
Same typing different syntax. 

Basic Arrow Function:
const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(4,5));

Output: 9

Short Arrow Function: 

const add = (a: number, b: number): number => a + b;

console.log(add(4,6));

Output: 10

Arrow Function Returning Object: 
(Types inferred - OK)

const makeUser = (name: string) => ({name});

const user1 = makeUser("Sathish");
const user2 = makeUser("Arun");

console.log(user1);
console.log(user2);

Output: 
{ name: 'Sathish' }
{ name: 'Arun' }

--------

Function Type as Variable
You can type the function itself. 

const add: (a: number, b: number) => number = (a,b) => a + b;

const result1 = add(2,3);
const result2 = add(10, 5);

console.log("Result 1:", result1);
console.log("Result 2:", result2);

Used in callbacks and React props.