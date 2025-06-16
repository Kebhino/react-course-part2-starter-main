import { ReactNode, useReducer } from "react";
import TaskContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "add";
  task: Task;
}

interface DeleteTask {
  type: "delete";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === "add") return [action.task, ...tasks];
  if (action.type === "delete")
    return tasks.filter((task) => task.id !== action.taskId);

  return tasks;
};

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
