import { useEffect, useRef, useState } from "react";
import EditTodo from "./EditTodo";

function Todo({ todo, onDeleteClick, onUpdateClick }) {
  const [editTodo, setEditTodo] = useState(false);
  const [color, setColor] = useState("blue-500");
  const [completedDuty, setCompletedDuty] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
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

  const handleStartedTimeClick = () => {
    if (timerIdRef.current) return;
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    setColor("orange-700");
    setButtonDisabled(true);
  };
  const handleFinishedClick = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setColor("blue-500");
    setButtonDisabled(false);
  };

  const handleDutyClick = () => {
    setCompletedDuty(true);
    setColor("green-500");
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
        <div className={`bg-${color} flex flex-row rounded-full mb-1 py-2`}>
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {todo.text}
          </div>
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {todo.time}
          </div>
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {secondsToHHMMSS()}
          </div>
          <div>
            {completedDuty ? (
              <div>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 border-gray-200 rounded-full hover:bg-red-300 focus:ring-2 focus:ring-gray-300"
                  onClick={handleDeleteClick}
                >
                  Sil
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center py-1 ">
                <button
                  className="px-4 py-2 m-1 text-sm font-medium text-white bg-green-500 border-gray-200 rounded-full hover:bg-green-300 focus:ring-2 focus:ring-gray-300"
                  onClick={() => handleStartedTimeClick(todo.id)}
                >
                  Başlat
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-orange-800 border-gray-200 rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-gray-300"
                  onClick={() => handleFinishedClick(todo.id)}
                >
                  Durdur
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-teal-500 border-gray-200 rounded-full hover:bg-teal-300 focus:ring-2 focus:ring-gray-300"
                  onClick={handleDutyClick}
                >
                  Gorevi Tamamla
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-red-500 border-gray-200 rounded-full hover:bg-red-300 focus:ring-2 focus:ring-gray-300"
                  disabled={isButtonDisabled}
                  onClick={handleDeleteClick}
                >
                  Sil
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-violet-500 border-gray-200 rounded-full hover:bg-violet-300 focus:ring-2 focus:ring-gray-300"
                  disabled={isButtonDisabled}
                  onClick={handleEditClick}
                >
                  Guncelle
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Todo;
