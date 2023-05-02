import React from "react";

const Form = ({ inputText, setInputText, tasks, setTasks }) => {
  // EVENTS
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    console.log("Add task");
    setTasks([...tasks, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <form className="Form">
      <input
        onChange={handleChange}
        value={inputText}
        placeholder="Write here"
      ></input>
      <button className="addTask" onClick={addTask}>
        +
      </button>
    </form>
  );
};

export default Form;
