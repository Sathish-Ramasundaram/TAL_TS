I did Option B

# ✅ Setting Up TypeScript

* Installation
* Configuration
* Integrating into projects

No overload — step-by-step.

---

# ✅ Part 1 — Installation of TypeScript

TypeScript is installed using **npm**.

You can install it in two ways:

---

## 🔹 Option A — Global Install (available everywhere)

```bash
npm install -g typescript
```

Check version:

```bash
tsc -v
```

This gives you the TypeScript compiler command:

```
tsc
```

---

## 🔹 Option B — Project Install (recommended for real projects)

Inside your project:

```bash
npm install typescript --save-dev
```

Why better?

* each project controls its TS version
* team consistency
* safer builds

Run with:

```bash
npx tsc
```

---

# ✅ Part 2 — Configuration (tsconfig.json)

After installing, create config file:

```bash
npx tsc --init
```

This creates:

```
tsconfig.json
```

This file controls how TypeScript behaves.

---

## 🔧 Important Settings (Beginner Version)

For Node learning project:

```json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

## 🧠 What These Mean (simple)

| Option           | Meaning                  |
| ---------------- | ------------------------ |
| target           | JS version output        |
| module           | module system            |
| strict           | enables full type safety |
| moduleResolution | how imports are resolved |
| esModuleInterop  | easier JS imports        |

---

# ✅ Part 3 — Compile TypeScript

TypeScript must be compiled to JavaScript.

---

## Compile single file

```bash
tsc index.ts
```

Creates:

```
index.js
```

---

## Compile whole project

```bash
tsc
```

Compiles all `.ts` files using tsconfig rules.

---

# ✅ Part 4 — Run Without Compiling (ts-node)

For development we often use:

```bash
npm install ts-node --save-dev
```

Run directly:

```bash
npx ts-node src/index.ts
```

You used this already ✔

---

# ✅ Part 5 — Integrating TypeScript into Projects

Now the important part — how TS is added to different project types.

---

## 🟦 Node.js Project Integration

Steps:

```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Add types:

```json
"types": ["node"]
```

Done ✅

This is what you built.

---

## 🟦 React Project Integration

Create with TS directly:

```bash
npx create-react-app myapp --template typescript
```

or (modern):

```bash
npm create vite@latest myapp -- --template react-ts
```

React + TS ready instantly.

---

## 🟦 Existing JavaScript Project → Add TypeScript

1️⃣ install TS

```bash
npm install typescript --save-dev
```

2️⃣ create config

```bash
npx tsc --init
```

3️⃣ rename files:

```
file.js → file.ts
```

4️⃣ gradually add types

---

# ✅ Part 6 — Type Definitions for Libraries

Some JS libraries need types:

Example:

```bash
npm install @types/node --save-dev
```

Pattern:

```
@types/<library-name>
```

Examples:

```
@types/express
@types/lodash
@types/react
```

---

# ✅ What You Have Already Practiced

In your TS task project you already did:

✔ install typescript
✔ install ts-node
✔ create tsconfig
✔ strict mode
✔ node types
✔ run TS code

