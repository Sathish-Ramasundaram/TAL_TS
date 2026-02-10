
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
