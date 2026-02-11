2.3 Interfaces
- Declaring interfaces
- Implementing interfaces in objects and classes
- Optional properties and read-only members

------------------------

Before going to Interface. Type alias

Type alias lets you create a custom name for a type. 
Instead of repeating complex types again and again, you define once and reuse. 
Think of it like a shortcut name for a type structure. 

type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;

const result = add(2,3);
console.log(result);

Output: 5

Note: 
=> number
This describes the return type of the function.

Example 2: Type Alias for Object Shape

type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "Sathish", 
    age: 31
};

console.log(user1);

🖥 Output
{ name: 'Sathish', age: 31 }

Example 3: Optional + Readonly in Type Alias

type User = {
    readonly id: number; // read only
    name: string;
    age?: number; //optional
};

const user1: User = {
    id: 101,
    name: "Sathish"
};

console.log(user1);

console.log(p1);

🖥 Output
{ id: 101, name: 'Sathish' }

If you try to change id, Typescript will error: 
user1.id = 102; // not allowed (readonly)


Example 4: Union Type Alias

type Age = number | string;

function printAge(age: Age): void {
    console.log("Age:", age);
}

printAge(31);
printAge("Thirty One");

Output: 
Age: 31
Age: Thirty One


-----------------------
We will cover: 
Declaring interfaces
Using interfaces with objects
using interfaces with classes
Optional properties
Readonly properties

------------------------

Declaring an Interface: 
An interface defines the shape of an object. 

interface User {
    name: string;
    phone: number;
}

This says: 
Any User must have: 
name -> string
phone -> number

Implementing Interface in Object 

interface User {
  name: string;
  phone: number;
}

const user1: User = {
    name: "Sathish",
    phone: 98900
};

console.log(user1.name, user1.phone);
console.log(user1);

Output: 
Sathish 98900
{ name: 'Sathish', phone: 98900 }


Note: 
If property missing -> 

const badUser: User = {
    name: "Sam"
};

TypeScript error - Phone missing ❌
--------------------------


Optional Properties (?)

Some fields may or may not exist.

✅ Code
interface User {
  name: string;
  age?: number;
}

const user2: User = {
  name: "Bond"
};

console.log(user2.name);
console.log(user2.age);

🖥 Output
Bond
undefined

Readonly Properties

Cannot change after creation.

✅ Code
interface Task {
  readonly id: number;
  title: string;
}

const t1: Task = {
  id: 1,
  title: "Build"
};

console.log(t1.id, t1.title);

// t1.id = 2 ❌ Not allowed
t1.title = "Test";

console.log(t1.id, t1.title);

Output
1 Build
1 Test

ID unchanged — readonly works ✅

------------------------------

Interface Implemented by Class

Classes can implement interfaces. 

interface Person {
    name: string;
    speak(): void;
}

class Student implements Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log("Hello, I am " + this.name);
    }
}

const a = new Student("Arun");
a.speak();

const s = new Student("Arun");
s.speak();

Output
Hello, I am Arun


------------------------------

