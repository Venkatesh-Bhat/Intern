import ListLayout from "./lists";
import NewItem from "./newItem";
import { useState } from "react";

const listData = [
  { id: 0, task: "Go to gym", done: true },
  { id: 1, task: "Eat healthy food", done: false },
  { id: 2, task: "Learn react", done: false },
  { id: 3, task: "Do some cardio", done: false },
  { id: 4, task: "Play some games", done: true },
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
    <>
      <NewItem handleClick={handleNewItem} />
      <ListLayout
        items={listItems}
        editHandler={handleEdit}
        deleteHandler={handleDelete}
      />
    </>
  );
}
