import { useState } from "react";

function EditTodo({ todo, onUpdateClick, onSubmit }) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onUpdateClick(todo.id, newTodo);
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <form className="edit-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-full text-gray-500 bg-gray-200 mb-2 p-2  focus:bg-gray-300 focus:outline-none"
          placeholder={todo.text}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="px-4 py-2 m-1  text-sm font-medium text-white bg-violet-500 border-gray-200 rounded-full hover:bg-violet-300 focus:ring-2 focus:ring-gray-300">
          Update
        </button>
      </form>
    </div>
  );
}
export default EditTodo;
