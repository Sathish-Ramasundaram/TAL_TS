1. Typed Function

index.ts
Replace everything with this:

import { Task } from "./models/Task";

// typed function
function createTask(title: string): Task {
  return {
    id: 1,
    title: title,
    completed: false,
    createdAt: new Date(),
  };
}

const task1 = createTask("Practice TypeScript");

console.log(task1);

2. Run it
npx ts-node src/index.ts

You should see a Task object printed.


3. Enum: 

```

// enum = fixed named constants
export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high"
}

// union = limited allowed values
export type Status = "todo" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;   // enum used here
  status: Status;       // union used here
  assignedTo?: string;  // optional field
}


```

index.ts:


```

import { Task, Priority, Status } from "./models/Task";

const task1: Task = {
  id: 1,
  title: "Learn Redux Saga",
  completed: false,
  priority: Priority.High,
  status: "in_progress",
  assignedTo: "Sathish"
};

const task2: Task = {
  id: 2,
  title: "Write Cypress tests",
  completed: true,
  priority: Priority.Medium,
  status: "done"
};

console.log(task1);
console.log(task2);

```
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 
16. 
17. 
18. 
19. 
20. 
21. 
22. 
23. 
24.  
25. 
26. 
27. 
28. 
29. 
30. 
31. 
32. 
33. 
34. 
35. 
36. 
37. 
38. 
39. 
40. 
41. 
42. 
43. 
44. 
45. 
46. 
47. 
48. 
49. 
50.  
51. 
52. 
53. 
54. 
55. 
56. 
57. 
58. 
59. 
60. 


