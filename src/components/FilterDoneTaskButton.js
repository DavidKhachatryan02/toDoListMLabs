import { React } from "react";

function FilterDoneTaskButton(props) {
  return (
    <>
      <button onClick={props.filterDoneTask}>Hide Complited</button>
    </>
  );
}

export default FilterDoneTaskButton;
