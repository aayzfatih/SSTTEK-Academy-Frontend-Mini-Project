import { useRef, useState } from "react";
import Todo from "./Todo";
import "./css/TodoList.css";

function TodoList({ todos, onDeleteClick, onUpdateClick }) {
  const [workingRow, setWorkingRow] = useState(0);
  const todoRefs = useRef([]);
  const handleSetActive = (id) => {
    setWorkingRow(id);
  };
  return (
    <div className="todos">
      <table>
        <tr>
          <th>Todo List</th>
          <th>Tahmini Süre</th>
          <th>Harcanan Süre</th>
          <th>Actions</th>
        </tr>
      </table>
      <table>
        {todos.map((todo) => (
          <tr
            key={todo.id}
            ref={(el) => (todoRefs.current[todo.id] = el)}
            className={workingRow === todo.id ? "active" : " inactive"}
          >
            <Todo
              onActive={handleSetActive}
              todo={todo}
              onDeleteClick={onDeleteClick}
              onUpdateClick={onUpdateClick}
            ></Todo>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default TodoList;
