import React, { useState } from "react";
import { useTodoContext } from "../state/todoContext";

const TodoListItem = ({ list }) => {
  const { lists, setLists, filterStatus } = useTodoContext();
  const [listActive, setListActive] = useState(false);

  const onCheckHandler = () => {
    const updatedTodos = lists.map((item) =>
      item.id === list.id ? { ...item, active: !item.active } : item
    );
    setLists(updatedTodos);
    setListActive(!list.active);
  };

  const deleteHandler = () => {
    const deleteItem = lists.filter((li) => list.id !== li.id);
    console.log("list id to be deleted", deleteItem);
    setLists(deleteItem);
  };

  return (
    <div className="list">
      {" "}
      <input
        type="checkbox"
        name="check-list"
        id="check-list"
        className={
          list.active === false && listActive === false
            ? "checkbox__list completed"
            : "checkbox__list"
        }
        defaultChecked={
          !list.active &&
          (filterStatus === "all" || filterStatus === "completed")
        }
        onClick={onCheckHandler}
      />
      <p className="list-text">{list.text}</p>
      <span>
        <img
          className="cross-img"
          src="./images/icon-cross.svg"
          onClick={deleteHandler}
          alt="cross icon"
        />
      </span>
    </div>
  );
};

export default TodoListItem;
