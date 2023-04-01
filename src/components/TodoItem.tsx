import type { TodoType } from "./typedefs";

type TodoItemPropsType = {
  todo: TodoType;
  onClickDoneUndone: Function;
  onClickDelete: Function;
};

export const TodoItem = (props: TodoItemPropsType) => {
  const { todo, onClickDoneUndone, onClickDelete } = props;
  return (
    <li className="collection-item text-center" key={todo.id}>
      <div
        style={{
          display: "inline-block",
          paddingRight: 20,
          ...(todo.isDone && { textDecoration: "line-through" }),
        }}
      >
        {todo.content}{" "}
      </div>
      <button className="btn-small" onClick={() => onClickDoneUndone(todo.id)}>
        {todo.isDone ? "Undone" : "Done"}
      </button>{" "}
      <button className="btn-small" onClick={() => onClickDelete(todo.id)}>
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};
