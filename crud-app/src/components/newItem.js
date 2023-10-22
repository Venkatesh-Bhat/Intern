import { useState } from "react";

export default function NewItem({ handleClick }) {
  const [newTask, setTask] = useState("");
  return (
    <div className="create">
      <input
        type="text"
        placeholder="Add item..."
        value={newTask}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          setTask("");
          handleClick(newTask);
        }}
      >
        <i className="bx bx-list-plus"></i>
      </button>
    </div>
  );
}
