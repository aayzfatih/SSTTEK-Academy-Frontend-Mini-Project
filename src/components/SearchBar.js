import { useState } from "react";

function SearchBar({ onSubmit, todos }) {
  const [input, setInput] = useState("");
  const [time, setTime] = useState();
  const handleChange = (e) => {
    setTime(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === undefined) {
      alert("Yapilacaklar girişine boş metin eklenemez");
    } else if (time === undefined) {
      alert("Harcanan Sure alani bos olamaz");
    } else if (time === "0") {
      alert("Harcanica sure 0 olamaz ");
    } else {
      onSubmit(input, time);
      setInput("");
      setTime("");
    }
  };
  const color = todos.length === 0 ? "#2b8a3e" : "#343a40";
  return (
    <div className="flex flex-col items-center mb-3 ">
      <h1 className="text-4xl font-semibold mt-24 " style={{ color: color }}>
        To-do List
      </h1>
      <form
        className="flex flex-col items-center gap-1"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-lg text-gray-800 bg-gray-200 w-96 mt-2 p-2 focus:bg-gray-100 focus:outline-none"
          type="text"
          placeholder="Yapilacaklar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="rounded-lg bg-gray-200 w-96 mt-2 p-2 focus:bg-gray-100 focus:outline-none"
          type="number"
          placeholder="Tahmini Sure (saat)"
          value={time}
          onChange={handleChange}
        />
        <button className="bg-blue-500 w-96 text-white hover:bg-blue-700 mt-4 p-3 rounded-full">
          Ekle
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
