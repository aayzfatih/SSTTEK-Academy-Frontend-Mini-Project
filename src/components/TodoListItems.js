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
      elapsedTime: "",
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
  const onChangeElapsedTime = (id, elapsedTime) => {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime - hours * 3600) / 60);
    const seconds = elapsedTime - hours * 3600 - minutes * 60;

    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          elapsedTime: `${hours}:${minutes}:${seconds}`,
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
        onChangeElapsedTime={onChangeElapsedTime}
      />
    </div>
  );
}
export default TodoListItems;
