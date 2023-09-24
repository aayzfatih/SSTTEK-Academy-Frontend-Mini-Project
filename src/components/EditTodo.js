import { useState } from "react";
import "./css/EditTodo.css";

function EditTodo({ todo, onUpdateClick, onSubmit }) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onUpdateClick(todo.id, newTodo);
  };
  return (
    <div>
      <form className="edit-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={todo.text}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  );
}
export default EditTodo;
