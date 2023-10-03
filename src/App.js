import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import TodoListItems from "./components/TodoListItems";
import Navbar from "./components/Navbar";
import ShowBar from "./components/ShowBar";
function App() {
  return (
    <div>
      <ShowBar>
        <Navbar />
      </ShowBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoListItems />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
export default App;
