import ListLayout from "./lists";
import NewItem from "./newItem";
import { useState } from "react";

const listData = [
  { id: 0, task: "We go jim", done: true },
  { id: 1, task: "We eat protein", done: false },
  { id: 2, task: "Whose gonna carry the Boats!!!", done: true },
  { id: 3, task: "We run", done: false },
  { id: 4, task: "We sleep", done: true },
];
let newId = 5;
export default function TodoPage() {
  const [listItems, setListItems] = useState(listData);

  function handleNewItem(newTask) {
    setListItems([
      ...listItems,
      {
        id: newId++,
        task: newTask,
        done: false,
      },
    ]);
  }

  function handleEdit(newItem) {
    setListItems(
      listItems.map((item) => {
        if (item.id === newItem.id) {
          return newItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDelete(item) {
    const newList = listItems.filter((value) => item.id !== value.id);
    setListItems(newList);
  }

  return (
    <div className="page">
      <header>Todo List</header>
      <div className="todopage">
        <NewItem handleClick={handleNewItem} />
        <ListLayout
          items={listItems}
          editHandler={handleEdit}
          deleteHandler={handleDelete}
        />
      </div>
    </div>
  );
}
