import { useState } from "react";
import "./css/SearchBar.css";

function SearchBar({ onSubmit, todos }) {
  const [input, setInput] = useState();
  const [time, setTime] = useState();
  const handleChange = (e) => {
    setTime(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === undefined || input === "") {
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
    <div className="search-bar">
      <h1 style={{ color: color }}>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Yapilacaklar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tahmini Sure (saat)"
          value={time}
          onChange={handleChange}
        />
        <button>Ekle</button>
      </form>
    </div>
  );
}
export default SearchBar;
