export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: number; // optional property
  readonly createdAt: Date;
}