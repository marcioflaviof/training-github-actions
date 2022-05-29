import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFiltered(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFiltered(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFiltered(todos);
          break;
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filtered} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
