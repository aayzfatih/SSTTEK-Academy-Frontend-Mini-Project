import Todo from "./Todo";
import "./css/TodoList.css";

function TodoList({ todos, onDeleteClick, onUpdateClick }) {
  return (
    <div className="todos">
      <table>
        <tr>
          <th>Todo</th>
          <th>Tahmini Süre</th>
          <th>Harcanan Süre</th>
          <th>Actions</th>
        </tr>
      </table>
      <table>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <Todo
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
