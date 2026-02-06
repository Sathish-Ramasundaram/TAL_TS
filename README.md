# TypeScript Task Manager

A beginner-friendly TypeScript project that demonstrates core TypeScript concepts including interfaces, type-safe functions, and the TypeScript compiler.

## Overview

This project is designed as a learning tool for understanding TypeScript fundamentals. It implements a simple task management system using TypeScript's type system to ensure code safety and maintainability.

## Features

- **Type-Safe Task Model**: Defines a `Task` interface with required and optional properties
- **Typed Functions**: Demonstrates how to create functions with explicit parameter and return types
- **TypeScript Compilation**: Learn how TypeScript ensures type safety before runtime
- **Modern JavaScript Support**: Configured to work with modern Node.js environments

## Project Structure

```
ts-task-manager/
├── src/
│   ├── index.ts              # Main application entry point
│   └── models/
│       └── Task.ts           # Task interface definition
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript compiler configuration
├── Step1.md                  # Getting started with interfaces
└── Step2.md                  # Working with typed functions
```

## Task Interface

The `Task` interface defines the structure of a task object:

```typescript
export interface Task {
  id: number; // Unique identifier
  title: string; // Task description
  completed: boolean; // Completion status
  priority?: number; // Optional priority level
  readonly createdAt: Date; // Creation timestamp (read-only)
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:

   ```bash
   cd ts-task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   This installs:
   - **TypeScript**: The TypeScript compiler
   - **ts-node**: Runtime for executing TypeScript directly
   - **@types/node**: Type definitions for Node.js APIs

### Setup TypeScript Configuration

The project includes a `tsconfig.json` with strict type checking enabled. This ensures type safety throughout development.

### Running the Project

Execute the TypeScript code directly using ts-node:

```bash
npx ts-node src/index.ts
```

## Key Learning Concepts

### 1. Interfaces

Interfaces define the shape and structure of objects, ensuring type safety:

- Required properties must always be provided
- Optional properties (marked with `?`) can be omitted
- Read-only properties prevent modification after creation

### 2. Type-Safe Functions

Functions with explicit parameter and return types prevent type-related bugs:

```typescript
function createTask(title: string): Task {
  return {
    id: 1,
    title: title,
    completed: false,
    createdAt: new Date(),
  };
}
```

### 3. Type Checking

TypeScript catches type mismatches at compile-time:

- Missing required properties are flagged as errors
- Incorrect parameter types are caught before execution
- This prevents runtime errors and improves code reliability

## Learning Path

Follow the step-by-step guides:

1. **Step1.md**: Learn about interfaces and how to define type-safe models
2. **Step2.md**: Create typed functions and understand type enforcement

## Development

### TypeScript Compilation

To compile TypeScript to JavaScript:

```bash
npx tsc
```

This generates JavaScript files in the output directory based on your `tsconfig.json` settings.

### Scripts

Currently, the project includes placeholders for testing. You can extend with:

```bash
npm test
```

## Best Practices Used

- ✅ Strict mode enabled for maximum type safety
- ✅ Interfaces for data modeling
- ✅ Type annotations on functions
- ✅ Clear property documentation in comments
- ✅ Optional and read-only properties for precise modeling

## Next Steps

To extend this project, consider:

- Adding more task management functions (update, delete, filter)
- Implementing a task storage system (file-based or database)
- Creating a CLI interface for user interaction
- Adding unit tests with a testing framework
- Implementing additional TypeScript features (classes, generics, enums)

## License

ISC

## Author

Created for TypeScript learning and development training.

---

**Happy coding with TypeScript!** 🚀
