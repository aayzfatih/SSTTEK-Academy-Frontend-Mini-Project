import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TodoList from "./TodoList";

function TodoListItems() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localeTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(localeTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodos = (input, time) => {
    const newTodo = {
      id: todos.length + 1,
      text: input,
      time: time,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteClick = (id) => {
    const updatesValues = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatesValues);
  };
  const handleUpdateClick = (id, text) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          text: text,
        };
        return newTodo;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <SearchBar todos={todos} onSubmit={createTodos} />
      <TodoList
        todos={todos}
        onDeleteClick={handleDeleteClick}
        onUpdateClick={handleUpdateClick}
      />
    </div>
  );
}
export default TodoListItems;
