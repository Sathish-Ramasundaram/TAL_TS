import { Task } from "./models/Task";

// typed function
function createTask(title: string): Task {
  return {
    id: 1,
    title: title,
    completed: false,
    // remove createdAt  
    // createdAt: new Date(),
  };
}

const task1 = createTask("Practice TypeScript");

console.log(task1);