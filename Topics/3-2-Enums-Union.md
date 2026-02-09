Enums — What Are They?
Enum = a named set of fixed values

Use when a variable should only have a few specific choices.
Think:
Status = Pending / Done / Cancelled

Eg: 
enum Status {
  Pending,
  Done,
  Cancelled
}

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let r: Role = Role.Admin;


Union = value can be one of multiple types
