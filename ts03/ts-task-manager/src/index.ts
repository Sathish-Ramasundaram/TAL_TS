import { Task } from "./models/Task";

function createTask(title: string): Task {
    return {
        id: 1, 
        title: title,
        completed: false,
    };
}

const task1 = createTask("Practice TypeScript");

console.log(task1);