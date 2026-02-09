function createUser(name: string, role: string = "user"): string {
  return `${name} is ${role}`;
}

const result1 = createUser("Sathish");
const result2 = createUser("Admin", "admin");

console.log(result1);
console.log(result2);
