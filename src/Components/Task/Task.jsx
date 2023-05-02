import React from "react";

const Task = ({ text, tasks, setTasks, task }) => {
  const removeHandle = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  return (
    <div className="Task">
      <li>
        <h5>{text}</h5>
        <button onClick={removeHandle}>X</button>
      </li>
    </div>
  );
};

export default Task;
