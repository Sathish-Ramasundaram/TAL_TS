This looks easy. See once. 

Perfect 👍 — let’s finish this section with **Using TypeScript with Node.js** in your preferred style:

✅ simple
✅ step-by-step setup
✅ small working examples
✅ console output
✅ real server example
✅ no overload

We’ll cover exactly:

```
1️⃣ Setting up TypeScript with Node.js
2️⃣ Typing Node modules
3️⃣ Writing typed server code
4️⃣ Building a small TS server
```

Think of this as:

> 🖥️ “How to build backend apps using TypeScript”

---

# ✅ 1️⃣ Setup TypeScript with Node.js

---

## ✅ Step 1 — Create project

```bash
npm init -y
```

---

## ✅ Step 2 — Install TypeScript + Node types

```bash
npm install -D typescript @types/node ts-node
```

---

## ✅ Step 3 — Create tsconfig

```bash
npx tsc --init
```

Important settings:

```json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "types": ["node"],
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

# ✅ 2️⃣ Typing Node.js Modules

Node built-ins already have types via:

```
@types/node
```

So imports are typed automatically.

---

# ✅ Example — fs module

---

## src/app.ts

```ts
import fs from "fs";

const data: string = fs.readFileSync("test.txt", "utf-8");

console.log(data);
```

---

## 🖥 Output

```
Hello from file
```

Notice:

```
fs.readFileSync → already typed
```

---

# ✅ Example — path module

```ts
import path from "path";

const p: string = path.join("a", "b");

console.log(p);
```

---

# 🖥 Output

```
a/b
```

---

# ✅ 3️⃣ Typing Your Own Node Modules

---

## src/math.ts

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

---

## src/app.ts

```ts
import { add } from "./math";

console.log(add(2, 3));
```

---

## 🖥 Output

```
5
```

Full type safety across files ✅

---

# ✅ 4️⃣ Running TypeScript Node Code

Two ways:

---

## ✅ Fast Dev Mode

```bash
npx ts-node src/app.ts
```

Runs TS directly.

---

## ✅ Production Mode

```bash
npx tsc
node dist/app.js
```

Compile → run JS.

---

# ✅ 5️⃣ Build a Small Typed HTTP Server

Node has built-in http module — fully typed.

---

## ✅ src/server.ts

```ts
import http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello TypeScript Server");
  }
);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## ▶ Run

```bash
npx ts-node src/server.ts
```

---

## 🖥 Output (terminal)

```
Server running on port 3000
```

Browser:

```
http://localhost:3000
→ Hello TypeScript Server
```

---

# ✅ 6️⃣ Express + TypeScript (Real World Backend)

Most Node apps use Express.

---

## Install

```bash
npm install express
npm install -D @types/express
```

---

## server.ts

```ts
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello TS + Express" });
});

app.listen(3000, () => {
  console.log("API running");
});
```

---

## 🖥 Output

```
API running
```

Visit:

```
/ → { "msg": "Hello TS + Express" }
```

---

# ✅ 7️⃣ Common Node + TS Type Patterns

---

## ✅ Typed Request Body

```ts
interface UserBody {
  name: string;
  age: number;
}

app.post("/user", (req: Request<{}, {}, UserBody>, res) => {
  console.log(req.body.name);
});
```

---

## ✅ Env Variables Typing

```ts
const port: number = Number(process.env.PORT) || 3000;
```

---

# 🧠 Real Backend TS Stack

```
TypeScript
Node
Express / NestJS
ts-node (dev)
tsc (prod)
@types/node
@types/express
```

---

# 🎯 One-Screen Summary

```
install @types/node
use ts-node for dev
tsc for prod
Node modules already typed
Express needs @types/express
type req/res bodies
```

---

If you want, next I can give you a **full mini TypeScript backend project walkthrough (start → API → test → build)** — end-to-end in one flow.
