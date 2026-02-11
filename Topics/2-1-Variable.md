1️⃣ Declaring variables with types
2️⃣ Basic data types
3️⃣ Type inference

Declaring variables with types: 
variableName: type = value

Eg: 
const name: string = "Sathish";
let age: number = 31;
let active: boolean = true;


Basic Data Types in TypeScript:
string
number
boolean
array
object
any

const name: string = "Sathish";
Text values.

let age: number = 31;
All numbers - int + float - same type. .

const isActive: boolean = true;
true / false only.

Array: Two styles: 
const nums: number[] = [1, 2, 3];
const names: Array<string> = ["A", "B"];

Object: (basic)
const user: {name: string; age: number} {
    name: "Sathish", 
    age: 31   
};

Interface is better. 

let data: any = 10;
data = "hello"; // allowed

Turns off type checking. Use only when necessary. 


Type Inference: 
Typescript can guess the type automatically. You don't always need to write types. 

Example: 
const city = "Bengaluru";
TS infers:
city -> string
Same as: 
const city: string = "Bengaluru";

Another Example
let age = 31;
TS infers: 
age -> number

So this fails: 
age = "Good"; --- Wrong

When Inference is not Enough
You should add types when: 
Variable declared without value
let id; // becomes any

So better: 
let id: number;

Function parameters
function add(a, b) --- Wrong
Should be: 
function add(a: number, b: number)

Objects & arrays (complex shapres)
use interface/type

Simple Memory Rule: 
if value is assigned -> TS infers type
If value missing -> add type

const name = "Sathish";
const name: string;
