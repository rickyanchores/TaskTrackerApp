import "./styles.css";
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import TaskList from "./Components/TaskList/TaskList";

export default function App() {
  const [inputText, setInputText] = useState();
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header>
        <h3>Task Tracker</h3>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
