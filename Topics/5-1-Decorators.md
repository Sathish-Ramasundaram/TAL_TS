Decorator: 
A special function that can add behavior to a class, method, or property. 

Decorator = wrapper that runs extra code. 
Syntax always starts with: @something

Note: Decorators must be enabled
in tsconfig.json

{
  "experimentalDecorators": true
}


----------------

Class Decorator: 
Runs when the class is created. 

Example: 

function LogClass(target: Function) {
  console.log("Class created:", target.name);
}

@LogClass
class User {
  constructor() {
    console.log("instance created");
  }
}

new User();

Output
Class created: User
User instance created

----------------------------

Method Decorator: 
Run when method is defined - can wrap method. 

Example: Method Logger

function LogMethod(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("Calling:", key);
    return original.apply(this, args);
  };
}

class Calc {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const c = new Calc();
console.log(c.add(2, 3));

Output
Calling: add
5

Decorator added behavior.

--------------------

Property Decorator
Run when property is defined. 

Example: 


function LogProperty(target: any, key: string) {
  console.log("Property registered:", key);
}

class Product {
  @LogProperty
  name: string = "Book";
}

new Product();

Output
Property registered: name

-----------------------------------------



✅ 4️⃣ Parameter Decorator (Quick Look)

Used to inspect parameters.

function LogParam(target: any, key: string, index: number) {
  console.log("Param index:", index);
}

class Demo {
  test(@LogParam x: number) {}
}

🧠 Real-World Use of Decorators

Decorators are used heavily in:

Angular
NestJS
Validation libraries
Dependency injection
Logging
Access control


Example you may see:

@Controller()
@Injectable()
@Required()

✅ Custom Decorator with Options (Step Ahead)

Example — Role Check Decorator
function Role(role: string) {
  return function (target: any) {
    console.log("Role set:", role);
  };
}

@Role("Admin")
class AdminUser {}

🖥 Output
Role set: Admin

