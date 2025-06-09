
interface Task {
  id: number;
  title: string;
}

interface AddTask { 
    type: 'add';
    task: Task;     

}

interface DeleteTask {
  type: 'delete';
  taskId: number;
}   

type TaskAction = AddTask | DeleteTask;


const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {

    if (action.type === 'add') return [action.task, ...tasks]
    if (action.type === 'delete') return tasks.filter((task) => task.id !== action.taskId);

    return tasks;
}

export default taskReducer;