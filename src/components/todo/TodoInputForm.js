import React, { useState } from "react";
import { useTodoContext } from "../state/todoContext";

const TodoInputForm = () => {
  const [typedInput, setTypedInput] = useState("");
  const { lists, addToList } = useTodoContext();
  console.log("lists are", lists);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typedInput === "") {
      return;
    }
    //construct new to do with id
    const newListTodo = {
      id: Math.floor(Math.random() * 10000),
      text: typedInput,
      active: true,
      completed: false,
    };

    //pass to the list
    addToList(newListTodo);

    //clear input field
    setTypedInput("");
  };

  const onInputHandler = (e) => {
    setTypedInput(e.target.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form__control">
        <input
          type="text"
          className="input-text"
          placeholder="Create a new todo..."
          onChange={onInputHandler}
          value={typedInput}
        />
        <input
          type="checkbox"
          name="marked"
          id="marked"
          className="checkbox__todo"
          onClick={onSubmitHandler}
        />
      </div>
    </form>
  );
};

export default TodoInputForm;
