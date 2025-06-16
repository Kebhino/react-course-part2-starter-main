import { useContext } from "react";
import TaskContext from "../contexts/tasksContext";

const useTasks = () => useContext(TaskContext)

export default useTasks