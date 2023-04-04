import type { TodoType } from "./typedefs";

type TodoItemPropsType = {
  todo: TodoType;
  onClickDoneUndone: Function;
  onClickDelete: Function;
};

export const TodoItem = (props: TodoItemPropsType) => {
  const { todo, onClickDoneUndone, onClickDelete } = props;
  return (
    <li className="collection-item todo-item" key={todo.id}>
      <div
        className="todo-text"
        style={{
          ...(todo.isDone && { textDecoration: "line-through" }),
        }}
      >
        {todo.content}{" "}
      </div>
      <div className="todo-buttons">
        <button
          className="btn-done btn-small"
          onClick={() => onClickDoneUndone(todo.id)}
        >
          {todo.isDone ? "Undone" : "Done"}
        </button>{" "}
        <button
          className="btn-delete btn-small"
          onClick={() => onClickDelete(todo.id)}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    </li>
  );
};
