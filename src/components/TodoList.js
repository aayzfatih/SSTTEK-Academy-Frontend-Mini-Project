import Todo from "./Todo";
import "./css/TodoList.css";

function TodoList({ todos, onDeleteClick, onUpdateClick }) {
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
            <tr key={todo.id}>
              <td>
                <Todo
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
