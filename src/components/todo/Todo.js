import React from "react";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

const Todo = () => {
  return (
    <section className="todo__section">
      <TodoInputForm />
      <div className="lists">
        <TodoList />
      </div>
      <TodoStatus />
    </section>
  );
};

export default Todo;
