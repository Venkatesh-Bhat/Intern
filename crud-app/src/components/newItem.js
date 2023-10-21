import { useState } from "react";

export default function NewItem({ handleClick }) {
  const [newTask, setTask] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add item"
        value={newTask}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          setTask("");
          handleClick(newTask);
        }}
      >
        Add
      </button>
    </>
  );
}
