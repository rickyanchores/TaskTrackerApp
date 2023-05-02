import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="TaskList">
      <h3>task list:</h3>
      <ul>
        {tasks.map((task) => (
          <Task
            text={task.text}
            key={task.id}
            tasks={tasks}
            task={task}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
