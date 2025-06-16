import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContextBox { 

    tasks: Task[];
    dispatch: Dispatch<TaskAction>; 
    
}

const TaskContext = React.createContext<TaskContextBox>({} as TaskContextBox);

export default TaskContext;