import { React, useState } from "react";
import style from "../Styles/taskAdder.module.css";

function TaskAdder(props) {
  const [input, setInput] = useState("");

  const id = Date.now();

  function addTask() {
    props.addTask(id, input);
    setInput("");
  }

  return (
    <>
      <form>
        <h1 className={style.taskAdderText}>Task</h1>
        <p>
          <input
            className={style.inputTask}
            type="text"
            placeholder="Write here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          {input.length > 54 ? (
            <span className={style.errorMessege}>
              Task content can contain max 54 characters.
            </span>
          ) : null}{" "}
        </p>
        <button className={style.addTaskButton} onClick={addTask}>
          Add
        </button>
      </form>
    </>
  );
}

export default TaskAdder;
