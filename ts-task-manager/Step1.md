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


## Interface

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
