import { useEffect, useRef, useState } from "react";
import "./css/Todo.css";

import EditTodo from "./EditTodo";
function Todo({ todo, onDeleteClick, onUpdateClick }) {
  const [editTodo, setEditTodo] = useState(false);
  const [color, setColor] = useState("");
  const [completedDuty, setCompletedDuty] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [workingRow, setWorkingRow] = useState(0);
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const handleDeleteClick = () => {
    alert("Emin misiniz?");
    onDeleteClick(todo.id);
  };
  const handleEditClick = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };

  const handleStartedTimeClick = (id) => {
    if (timerIdRef.current) return;
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    setWorkingRow(id);
    setButtonDisabled(true);
  };

  const handleFinishedClick = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setWorkingRow(null);
    setButtonDisabled(false);
  };

  const handleDutyClick = () => {
    setCompletedDuty(true);
    setColor("#51cf66");
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  const secondsToHHMMSS = () => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count - hours * 3600) / 60);
    const seconds = count - hours * 3600 - minutes * 60;

    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <div>
      {editTodo ? (
        <EditTodo
          onSubmit={handleSubmit}
          editTodo={editTodo}
          todo={todo}
          onUpdateClick={onUpdateClick}
        />
      ) : (
        <div>
          <table className={workingRow === todo.id ? "active" : " inactive"}>
            <tr style={{ backgroundColor: color }}>
              <td>{todo.text}</td>
              <td>{todo.time} saat</td>
              <td>{secondsToHHMMSS()}</td>
              <td>
                {completedDuty ? (
                  <button className="delete-button" onClick={handleDeleteClick}>
                    Sil
                  </button>
                ) : (
                  <div>
                    <button
                      className="start-button"
                      onClick={() => handleStartedTimeClick(todo.id)}
                    >
                      Başlat
                    </button>
                    <button
                      className="stop-button"
                      onClick={() => handleFinishedClick(todo.id)}
                    >
                      Durdur
                    </button>
                    <button className="duty-button" onClick={handleDutyClick}>
                      Gorevi Tamamla
                    </button>
                    <button
                      className="delete-button"
                      disabled={isButtonDisabled}
                      onClick={handleDeleteClick}
                    >
                      Sil
                    </button>
                    <button
                      className="edit-button"
                      disabled={isButtonDisabled}
                      onClick={handleEditClick}
                    >
                      Guncelle
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}
export default Todo;
