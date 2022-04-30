import React from "react";
import { useTodoContext } from "./state/todoContext";

const Header = () => {
  const { theme, setTheme } = useTodoContext();
  const themeToggleHandler = () => {
    setTheme(!theme);
  };
  return (
    <header>
      <div className="header__info">
        <h1>TODO</h1>
        {theme ? (
          <img
            src="./images/icon-moon.svg"
            alt="moon"
            onClick={themeToggleHandler}
          />
        ) : (
          <img
            src="./images/icon-sun.svg"
            alt="sun"
            onClick={themeToggleHandler}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
