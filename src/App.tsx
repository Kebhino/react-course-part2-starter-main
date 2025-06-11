import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/taskReducer";

import TaskContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
}

export default App;
