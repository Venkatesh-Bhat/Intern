import { useState } from "react";

export default function ListLayout({ items, editHandler, deleteHandler }) {
  return (
    <ul className="listItems">
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
        />
        <button
          className="save"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          <i className="bx bx-check"></i>
        </button>
      </>
    );
  } else {
    content = (
      <>
        <label htmlFor={item.task} className="task">
          {item.task}
        </label>
        <button
          className="edit"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <i className="bx bxs-edit-alt"></i>
        </button>
      </>
    );
  }
  return (
    <>
      <input
        id={item.task}
        type="checkbox"
        checked={item.done}
        onChange={(e) => onEditClicked({ ...item, done: e.target.checked })}
      />
      {content}
      <button className="delete" onClick={() => onDeleteClicked(item)}>
        <i className="bx bxs-trash"></i>
      </button>
    </>
  );
}
