We will cover: 
Enums - named constant values
Union Types - variable can be multiple types

-----

Enums: 
A fixed set of named values. Used when a value must be one from a known list. 

Think:
Status = Pending / Done / Cancelled

----

Define an Enum: 
enum Status {
  Pending, 
  Success, 
  Failed
}

TypeScript auto assigns numbers: 
Pending = 0
Success = 1
Failed = 2

Use Enum 

enum Status {
  Pending, 
  Success, 
  Failed
}

const jobStatus: Status = Status.Success;
console.log(jobStatus);

Output
1

Because Success = 1

Enum with Custom Values (Better for real apps)

enum Status {
  Pending = "PENDIND", 
  Success = "SUCCESS", 
  Failed = "FAILED"
}

const jobStatus: Status = Status.Success;
console.log(jobStatus);

Output
SUCCESS

More readable
Common in APIs

Real-world Enum Example

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function check(role: Role) {
  console.log("Role is", role);
}

Output
Role is ADMIN

Enum Rule
Use enum when: 
fixed list
repeated usage
named constants




-----------------------

Union Types
muliple allowed types
Symbol: |

Read as "OR"


Basic Union:

let id: string | number;
id = 10;
console.log(id);

Output: 
10
Arun when id = "Arun"

Variable accepts both types. 

Union with Literal Values (Very Powerful)

type Status = "loading" | "Success" | "error";
let a: Status = "loading";
console.log(a);

Output
loading

This fails: 
a = "done"; 

Only allowed values work. 

Union in Functions

function print(value: string | number) {
  console.log(value);
}

print("Hello");
print(123.76899);

Output
Hello
123.76899

Note: Union needs Type Guard sometimes
Because TS doesn't know which one it is. 

function format(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  }else {
    console.log(x.toFixed(2));
  }
}

format("Hello");
format(123.76899)

Output: 
HELLO
123.77

-------

Modern TypeScript Tip
In many modern projects: 
Prefer union literal types over enums for simple status values
type Status = "pending" | "success" | "failed"
Cleaner + Lighter


