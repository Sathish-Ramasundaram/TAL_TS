Understanding decorators
Decorators are special functions that attach extra behavior or metadata to classes, methods, or properties using @name syntax.
They run at definition time and are used for logging, validation, dependency injection, and frameworks.

Creating custom decorators
A custom decorator is a function that receives target info (class/method/property) and modifies or observes it.
You write a wrapper function and return logic that enhances the original behavior.

Applying decorators
Decorators are placed directly above classes, methods, or properties like @Log or @Required.
They can intercept calls or add rules without changing the original code body.