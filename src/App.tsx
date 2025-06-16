import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthContext from "./state-management/contexts/authContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
