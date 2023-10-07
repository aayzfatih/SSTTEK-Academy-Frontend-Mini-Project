import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import TodoListItems from "./components/TodoListItems";
import ShowBar from "./components/ShowBar";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <ShowBar>
        <Header />
      </ShowBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="todo" element={<TodoListItems />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
export default App;
