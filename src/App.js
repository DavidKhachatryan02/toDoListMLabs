import { React, useState } from "react";
import TaskAdder from "./components/TaskAdder";
import Tasks from "./components/Tasks";
import FilterDoneTaskButton from "./components/FilterDoneTaskButton";
import DelateModal from "./components/DeleteModal";
import style from "./Styles/app.module.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, input: "Task 1", isDone: true },
  ]);
  const [dublicateTasks, setDiblicateTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterDoneTaskClicked, setIsFilterDoneTaskClicked] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState({});

  function addTask(id, input) {
    if (input) {
      setTasks([...tasks, { id, input, isDone: false }]);
    }
    return;
  }

  function filterDoneTask() {
    if (isFilterDoneTaskClicked===false) {
      setIsFilterDoneTaskClicked(true);
      setDiblicateTasks([...tasks]);
      setTasks(tasks.filter((task) => task.isDone === false));
    } else {
      setIsFilterDoneTaskClicked(false);
      setTasks(dublicateTasks);
    }
  }

  function deletePostFinder(task) {
    setTaskToDelete(task);
    openModal();
  }

  function deletePost(taskToDelete) {
    let id = taskToDelete.id;
    setTasks(tasks.filter((taskToDelete) => taskToDelete.id !== id));
  }

  function openModal() {
    setIsModalOpen(true);;
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function changeTaskStatus(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  }

  return (
    <div className={style.app}>
      {tasks.length === 0 ? null : (
        <FilterDoneTaskButton filterDoneTask={filterDoneTask} />
      )}
      <TaskAdder addTask={addTask} />
      <Tasks
        deletePostFinder={deletePostFinder}
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
      />
      <DelateModal
        taskToDelete={taskToDelete}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
