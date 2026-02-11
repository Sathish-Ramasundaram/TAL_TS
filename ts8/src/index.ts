class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello", this.name);
  }
}

const a = new User("Sam");
a.sayHello();

const b = new User("John");
b.sayHello();
