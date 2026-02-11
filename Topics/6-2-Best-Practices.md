These are some rules. So read and understand it later. 

Perfect 👍 — let’s finish this section with **TypeScript Best Practices** in your preferred style:

✅ simple
✅ practical
✅ real-world patterns
✅ small examples
✅ console output where useful
✅ no theory overload

We’ll cover exactly:

```
1️⃣ Writing maintainable & scalable TS code
2️⃣ Error handling strategies
3️⃣ Debugging strategies
```

Think of this as:

> 🧠 “How good TypeScript code looks in real projects”

---

# ✅ PART 1 — Writing Maintainable TypeScript Code

---

# ✅ Rule 1 — Always Keep `strict` Mode ON

You already have:

```json
"strict": true
```

Good 👍

This catches:

```
null bugs
wrong types
missing fields
unsafe calls
```

Never turn this off in real projects.

---

# ✅ Rule 2 — Prefer `interface` for Object Shapes

Cleaner + extendable.

---

## ✅ Good

```ts
interface User {
  id: number;
  name: string;
}

const u: User = { id: 1, name: "Ana" };
```

---

## ⚠️ Avoid inline big types

```ts
const u: { id:number; name:string } ❌
```

Hard to reuse.

---

# ✅ Rule 3 — Use Type Aliases for Unions

---

## ✅ Good

```ts
type Status = "loading" | "success" | "error";
```

Used everywhere in React apps.

---

# ✅ Rule 4 — Avoid `any` (Use unknown Instead)

---

## ❌ Avoid

```ts
let data: any;
```

---

## ✅ Better

```ts
let data: unknown;
```

Then check before use.

---

# ✅ Rule 5 — Type Function Returns

Always type return values in shared code.

---

## ✅ Good

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Prevents accidental wrong returns.

---

# ✅ Rule 6 — Use Generics for Reusable Logic

---

```ts
function first<T>(arr: T[]): T {
  return arr[0];
}
```

Reusable + safe.

---

# ✅ Rule 7 — Small Focused Types

---

## ❌ Bad

```
MegaInterfaceWith50Fields
```

---

## ✅ Better

```
UserBase
UserMeta
UserAudit
→ combine with &
```

---

# ✅ PART 2 — Error Handling Best Practices

---

# ✅ Rule 8 — Always Type Errors in catch

Modern TS treats error as unknown.

---

## ✅ Good

```ts
try {
  throw new Error("Fail");
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}
```

---

# ✅ Rule 9 — Use Result Pattern for APIs

Instead of throwing everywhere.

---

## ✅ Pattern

```ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
```

Used in scalable systems.

---

# ✅ Rule 10 — Validate External Data

API data = not trusted.

Use guards.

---

```ts
function isUser(x: any): x is User {
  return "id" in x && "name" in x;
}
```

---

# ✅ PART 3 — Debugging Strategies

---

# ✅ Rule 11 — Let TS Catch Bugs Early

Trust compiler errors — don’t silence with:

```ts
as any ❌
```

---

# ✅ Rule 12 — Use Narrowing Before Using Union

---

```ts
function print(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  }
}
```

---

# ✅ Rule 13 — Use Exhaustive Checks (Advanced but Powerful)

---

```ts
type Status = "a" | "b";

function check(s: Status) {
  if (s === "a") return;
  if (s === "b") return;

  const neverCheck: never = s; // compiler safety
}
```

---

# ✅ Rule 14 — Use Readonly Where Possible

---

```ts
interface Config {
  readonly apiUrl: string;
}
```

Prevents accidental mutation.

---

# ✅ Rule 15 — Use Watch Mode During Dev

```
npx tsc --watch
```

Instant feedback.

---

# 🧠 Real Project Best Practice Stack

```
strict mode
interfaces for objects
union types for states
no any
typed returns
guards for external data
generics for reuse
readonly where possible
```

---

# 🎯 One-Screen Summary

```
strict → always on
interface → object shapes
type → unions
avoid any
type returns
use guards
validate API data
prefer small types
```

---

If you want, next I can give you a **TypeScript Best Practices checklist PDF-style summary** — useful for revision before interviews.
