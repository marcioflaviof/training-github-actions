const Todo = ({ todo, todos, setTodos }) => {
  const checkTodo = () => {
    setTodos(
      todos.map((i) => {
        if (i.id === todo.id) {
          return { ...i, completed: !i.completed };
        }
        return i;
      })
    );
  };

  const excludeTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={checkTodo}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={excludeTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export { Todo };
