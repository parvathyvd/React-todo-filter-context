import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTodoContext } from "./components/state/todoContext";
import Todo from "./components/todo/Todo";

function App() {
  const { theme } = useTodoContext();
  return (
    <div className={`todo-app-wrapper ${theme ? "" : "dark__mode"}`}>
      <Header />
      <main className="todo">
        <Todo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
