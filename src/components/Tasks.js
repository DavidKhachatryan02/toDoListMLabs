import React from "react";

function Tasks(props) {

  return (
    <>
      {props.tasks.length === 0 ? (
        <h1>
          your life is a blank page. You write on it. So start by adding your
          tasks here.
        </h1>
      ) : (
        props.tasks.map((task) => (
          <div key={task.id}>
            <p onClick={() => props.changeTaskStatus(task.id)}>
              {task.id}-----{task.input}----{`${task.isDone}`}
            </p>
            <button onClick={() => props.deletePostFinder(task)}>Delete</button>
          </div>
        ))
      )}
    </>
  );
}

export default Tasks;
