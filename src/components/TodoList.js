import { useState } from "react";
import Todo from "./Todo";
import "./css/TodoList.css";

function TodoList({
  todos,
  onChangeElapsedTime,
  onDeleteClick,
  onUpdateClick,
}) {
  const [workingRow, setWorkingRow] = useState(null);
  const changeActiveRow = (id) => {
    setWorkingRow(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Tahmini Süre</th>
            <th>Harcanan Süre</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          {todos.map((todo) => (
            <tr
              className={
                workingRow === todo.id ? "bg-yellow-500" : "bg-blue-500"
              }
              key={todo.id}
            >
              <td>
                <Todo
                  onChangeElapsedTime={onChangeElapsedTime}
                  onActive={changeActiveRow}
                  todo={todo}
                  onDeleteClick={onDeleteClick}
                  onUpdateClick={onUpdateClick}
                ></Todo>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoList;
