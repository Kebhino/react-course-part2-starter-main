import { useContext } from "react";

import TaskContext from "./tasksContext";
import useAuthStore from "../auth/store";

const useTasks = () => useContext(TaskContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "add",
            task: {
              id: Date.now(),
              title: `Zadanie ${Math.floor(Math.random() * 500)}`,
            },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "delete", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
