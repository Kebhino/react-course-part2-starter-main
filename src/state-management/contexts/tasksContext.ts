import { Task, TaskAction } from "../reducers/taskReducer";
import React, { Dispatch } from "react";

interface TaskContextBox { 

    tasks: Task[];
    dispatch: Dispatch<TaskAction>;   
}

const TaskContext = React.createContext<TaskContextBox>({} as TaskContextBox);

export default TaskContext;