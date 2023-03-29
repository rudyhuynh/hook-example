import type { TodosType } from "./typedefs";

type TodoListProps = {
  todos: TodosType;
  onClickDoneUndone: Function;
  onClickDelete: Function;
};

export const TodoList = (props: TodoListProps) => {
  const { todos, onClickDoneUndone, onClickDelete } = props;
  return (
    <ul className="collection todo-list">
      {todos.map((todo) => {
        return (
          <li className="collection-item " key={todo.id}>
            <div
              style={{
                display: "inline-block",
                paddingRight: 20,
                ...(todo.isDone && { textDecoration: "line-through" }),
              }}
            >
              {todo.content}{" "}
            </div>
            <button
              className="btn-small"
              onClick={() => onClickDoneUndone(todo.id)}
            >
              {todo.isDone ? "Undone" : "Done"}
            </button>{" "}
            <button
              className="btn-small"
              onClick={() => onClickDelete(todo.id)}
            >
              <i className="material-icons">delete</i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
