import { useEffect, useState } from "react";
import Todo from "./Todo";
import "./css/TodoList.css";

function TodoList({
  todos,
  onChangeElapsedTime,
  onDeleteClick,
  onUpdateClick,
}) {
  const [workingRow, setWorkingRow] = useState(null);
  const [time, setTime] = useState(0);
  const changeActiveRow = (id, initialTime) => {
    setWorkingRow(id);
    setTime(initialTime);
  };
  useEffect(() => {
    let intervalId;
    if (workingRow !== null) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [workingRow]);
  useEffect(() => {
    onChangeElapsedTime(workingRow, time);
  }, [time]);
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
                  isButtonDisabled={workingRow === todo.id}
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
