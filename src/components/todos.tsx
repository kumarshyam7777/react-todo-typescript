import { Todo, useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParam] = useSearchParams();
  const todoDatas = searchParam.get("todos");
  console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todosData:", todoDatas);

  let filterData = todos;

  if (todoDatas === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todoDatas === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-Id ${todo.id} `}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-Id ${todo.id} `}>{todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
