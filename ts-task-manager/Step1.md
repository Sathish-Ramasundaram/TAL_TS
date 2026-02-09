mkdir ts-task-manager

cd ts-task-manager

1. initalize node

npm init -y


2. install 
npm install typescript ts-node @types/node --save-dev

What these do:
typescript → compiler
ts-node → run TS directly
@types/node → Node type definitions

3. Create TypeScript Config
npx tsc --init

this create tsconfig.json

open and ensure
"strict": true


4. create source: 

mkdir src

src/index.ts

type nul > src\index.ts

```

const message: string = "TypeScript project started!";
console.log(message);

```


5. Run typscript Directly: 

npx ts-node src/index.ts

You should see:
TypeScript project started!

------

let title: string = "TS Basics";
let count: number = 5;
let active: boolean = true;

let inferredNumber = 100;
let money = "Thousand"

console.log(title, count, active, inferredNumber, money);

---------------------

Note: 
Excellent question 👏 — this shows you are really thinking about how TypeScript works.

Short answer:

👉 **There is no error because nothing is wrong yet.**
👉 TypeScript inferred the types correctly.
👉 Errors appear only when you violate the inferred type.

Let’s walk slowly.

---

# ✅ What TypeScript Did Here — Type Inference

Your code:

```ts
let inferredNumber = 100;
let money = "Thousand";
```

You didn’t write types — but TypeScript **automatically guessed them**.

This is called:

# 🧠 Type Inference

TypeScript infers:

```
inferredNumber → number
money → string
```

So internally it becomes like this:

```ts
let inferredNumber: number = 100;
let money: string = "Thousand";
```

That’s why there is **no error**.

Everything is valid.

---

# ✅ When Will Error Appear?

Error appears when you try to change type later.

Try this 👇

```ts
inferredNumber = "hello";   // ❌ error
money = 500;                // ❌ error
```

Now TypeScript will show red underline.

Because:

```
number ≠ string
string ≠ number
```

---

# ✅ Why TypeScript Allows Your Original Code

Because:

```
declare + assign correct value → OK
```

No rule broken.

TypeScript is not trying to force explicit typing — it’s smart enough to infer.

---

# ✅ When You SHOULD Write Type Explicitly

Use explicit types when:

### 🔹 Value not assigned immediately

```ts
let total: number;
total = 50;
```

---

### 🔹 Function parameters

```ts
function add(x: number, y: number) {}
```

---

### 🔹 Public APIs / interfaces

```ts
interface Task { ... }
```

---

# ⚠️ Special Case — If You Did This

Then you WOULD get error:

```ts
let inferredNumber;
inferredNumber = 100;
inferredNumber = "hello";   // allowed 😬
```

Why?

Because type becomes:

```
any
```

Which disables safety.

Your strict mode usually prevents this — good.

---

# ✅ Mental Model

Think like this:

```
Value given → TypeScript guesses type
No value → TypeScript cannot guess → may become any
```

---

# ✅ Your Understanding Check (quick)

Will this error or not?

```ts
let x = 10;
x = 20;
```

Answer: **No error** (why?)


---------------------------------


One more tiny step before interface: 

const task1: { message: string } = {
  message: "Hello"
};

console.log(task1);

## Interface

An interface is a shape rule for an object.
It tells TypeScript:
Any object of this type MUST have these properties and types.


interface Task {
  message: string;
}

const task1: Task = {
  message: "Hello"
};

console.log(task1);


6. Create Your First Interface (Task Model)

mkdir src\models

src/models/Task.ts
type nul > src\models\Task.ts

```

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: number; // optional property
  readonly createdAt: Date;
}

```

7. What You Just Learned (2-line concept)

Interface defines the shape of an object.
It ensures every Task object follows the required structure and types.

📌 Concepts Used Here
id → number type
title → string type
completed → boolean type
priority? → optional property
readonly → cannot be changed after creation

? means:
This field is optional — it may exist or may not exist.

With priority — valid
const task1: Task = {
  id: 1,
  title: "Learn TS",
  completed: false,
  priority: 3,
  createdAt: new Date()
};

Without priority — also valid
const task2: Task = {
  id: 2,
  title: "Practice",
  completed: true,
  createdAt: new Date()
};
No error — because priority is optional.


readonly createdAt: Date — Read-only property
This means:
Value can be set when object is created
❌ Cannot be changed later

8. Use Interface in index.ts

src/index.ts

Replace with this: 


import { Task } from "./models/Task";

const task1: Task = {
  id: 1,
  title: "Learn TypeScript",
  completed: false,
  createdAt: new Date(),
};

console.log(task1);



9. Seeing error in Task

Fix — Step 1: Update tsconfig.json
From: 
"verbatimModuleSyntax": true

To: 
"verbatimModuleSyntax": false

10. Fix — Step 2: Set Module Type to CommonJS

"module": "commonjs",
"target": "es2019",
"types": ["node"],


11. Run again: 
npx ts-node src/index.ts
