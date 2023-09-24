import { useState } from "react";
import "./css/Todo.css";

import EditTodo from "./EditTodo";
function Todo({ onActive, todo, onDeleteClick, onUpdateClick }) {
  const [editTodo, setEditTodo] = useState(false);
  const [color, setColor] = useState(null);
  const [completedDuty, setCompletedDuty] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [activeTimer, setActiveTimer] = useState(null);
  const [timers, setTimers] = useState([]);

  const handleDeleteClick = () => {
    alert("emin misiniz?");
    onDeleteClick(todo.id);
  };
  const handleEditClick = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };

  const handleStartedTimeClick = (id) => {
    const newTimer = {
      id: id,
      startTime: new Date(),
      elapsedTime: 0,
    };
    setTimers([...timers, newTimer]);
    if (activeTimer) {
      const activeIndex = timers.findIndex(
        (timer) => timer.id === activeTimer.id
      );
      if (activeIndex !== 1) {
        const uptatedTimers = [...timers];
        uptatedTimers[activeIndex].elapsedTime +=
          new Date() - activeTimer.startTime;
        setTimers(uptatedTimers);
      }
    }
    setActiveTimer(newTimer);
    onActive(id);
    setButtonDisabled(true);
  };
  const handleFinishedClick = () => {
    if (activeTimer) {
      const stopTime = new Date();
      const elapsedTime =
        activeTimer.elapsedTime + (stopTime - activeTimer.startTime);

      const activeIndex = timers.findIndex(
        (timer) => timer.id === activeTimer.id
      );
      if (activeIndex !== -1) {
        const updatedTimers = [...timers];
        updatedTimers[activeIndex].elapsedTime += elapsedTime;
        if (
          Math.floor(updatedTimers[activeIndex].elapsedTime / 3600000) >=
          todo.time
        ) {
          setColor("red");
        }
        setTimers(updatedTimers);
      }
      setActiveTimer(null);
    }
    onActive(null);
    setButtonDisabled(false);
  };

  const handleDutyClick = () => {
    setCompletedDuty(true);
    setColor("#51cf66");
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
          <table>
            <tr style={{ backgroundColor: color }}>
              <td>{todo.text}</td>
              <td>{todo.time} saat</td>
              <td>
                {timers.slice(0, 1).map((item) => {
                  let seconds = Math.floor(item.elapsedTime / 1000);
                  let minutes = Math.floor(seconds / 60);
                  let hours = Math.floor(minutes / 60);
                  seconds %= 60;
                  minutes %= 60;
                  hours %= 60;
                  seconds = Math.min(Math.max(seconds, 0), 60);
                  minutes = Math.min(Math.max(minutes, 0), 60);
                  hours = Math.min(Math.max(hours, 0), 60);
                  return (
                    <div>
                      {hours}:{minutes}:{seconds}
                    </div>
                  );
                })}
              </td>
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
