import React from "react";
import { useTodoContext } from "../state/todoContext";

const TodoStatus = () => {
  const { lists, setLists, handleFilter, setFilterStatus, filterStatus } =
    useTodoContext();

  const getAllListsHandler = () => {
    setFilterStatus("all");
    handleFilter("all");
  };
  const getActiveListsHandler = () => {
    setFilterStatus("active");
    handleFilter("active");
  };

  const getCompletedListsHandler = () => {
    setFilterStatus("completed");
    handleFilter("completed");
  };

  const clearCompletedHandler = () => {
    const completed = lists.filter((li) => li.active);
    setFilterStatus("all");
    handleFilter("all");
    setLists(completed);
  };

  return (
    <>
      <div className="todo__status">
        <div className="items__left">{lists.length} items left</div>
        <div className="main__status">
          <button
            className={`pr-2 ${
              filterStatus === "all" ? "btn filter__active" : "btn"
            }`}
            onClick={getAllListsHandler}
          >
            All
          </button>
          <button
            className={`pr-2 ${
              filterStatus === "active" ? "btn filter__active" : "btn"
            }`}
            onClick={getActiveListsHandler}
          >
            Active
          </button>
          <button
            className={`pr-2 ${
              filterStatus === "completed" ? "btn filter__active" : "btn"
            }`}
            onClick={getCompletedListsHandler}
          >
            Completed
          </button>
        </div>
        <div className="clear">
          <button className="btn" onClick={clearCompletedHandler}>
            Clear completed
          </button>
        </div>
      </div>
      <div className="main__status__mobile">
        <button
          className={`pr-2 ${
            filterStatus === "all" ? "btn filter__active" : "btn"
          }`}
          onClick={getAllListsHandler}
        >
          All
        </button>
        <button
          className={`pr-2 ${
            filterStatus === "active" ? "btn filter__active" : "btn"
          }`}
          onClick={getActiveListsHandler}
        >
          Active
        </button>
        <button
          className={`pr-2 ${
            filterStatus === "completed" ? "btn filter__active" : "btn"
          }`}
          onClick={getCompletedListsHandler}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoStatus;
