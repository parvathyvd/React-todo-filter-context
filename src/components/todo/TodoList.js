import React from "react";
import { useTodoContext } from "../state/todoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { filterdLists } = useTodoContext();

  return (
    <>
      {filterdLists.map((list, index) => {
        return <TodoListItem list={list} key={index} />;
      })}
    </>
  );
};

export default TodoList;
