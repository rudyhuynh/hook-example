import { RefObject, memo } from "react";
import type { TodosType } from "./typedefs";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: TodosType;
  onClickDoneUndone: Function;
  onClickDelete: Function;
  ulRef: RefObject<HTMLUListElement>;
};

export const TodoList = memo((props: TodoListProps) => {
  const { todos, onClickDoneUndone, onClickDelete, ulRef } = props;
  return (
    <ul ref={ulRef} className="collection todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClickDoneUndone={onClickDoneUndone}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
});
