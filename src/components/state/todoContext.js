import React, { useContext, useEffect, useState } from "react";

const TodoContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
  const [lists, setLists] = useState(() => {
    const locallists = JSON.parse(localStorage.getItem("lists"));
    return locallists || [];
  });
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterdLists, setFilteredLists] = useState(lists);
  const [theme, setTheme] = useState(true);

  //Add lists to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("lists", JSON.stringify(lists));
  };
  useEffect(() => {
    handleFilter(filterStatus);
    saveLocalTodos();
  }, [filterStatus, lists]);

  const addToList = (input) => {
    //console.log("in the context", input);
    setLists([...lists, input]);
  };

  const handleFilter = (filterStatus) => {
    if (filterStatus === "active") {
      return setFilteredLists(lists.filter((li) => li.active));
    } else if (filterStatus === "completed") {
      return setFilteredLists(lists.filter((li) => !li.active));
    } else {
      return setFilteredLists(lists);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        lists,
        filterdLists,
        filterStatus,
        theme,
        setLists,
        addToList,
        handleFilter,
        setFilterStatus,
        setFilteredLists,
        setTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
