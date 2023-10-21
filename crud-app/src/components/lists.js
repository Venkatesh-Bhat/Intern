import { useState } from "react";

export default function ListLayout({ items, editHandler, deleteHandler }) {
  return (
    <ul>
      {" "}
      {items.map((item) => (
        <li key={item.id}>
          <List
            item={item}
            onEditClicked={editHandler}
            onDeleteClicked={deleteHandler}
          />
        </li>
      ))}
    </ul>
  );
}

function List({ item, onEditClicked, onDeleteClicked }) {
  const [isEditing, setIsEdit] = useState(false);
  let content;
  if (isEditing) {
    content = (
      <>
        <input
          type="text"
          value={item.task}
          onChange={(e) => onEditClicked({ ...item, task: e.target.value })}
        />{" "}
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        {item.task}{" "}
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onEditClicked({ ...item, done: e.target.checked })}
      />
      {content} <button onClick={() => onDeleteClicked(item)}>Delete</button>
    </>
  );
}
