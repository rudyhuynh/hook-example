import { memo } from "react";
import type { FilterOption, TodosType } from "./typedefs";
import { TodoItem } from "./TodoItem";
import { slowLogic } from "../utils/slowLogic";

type TodoListProps = {
  todos: TodosType;
  onClickDoneUndone: Function;
  onClickDelete: Function;
};
let e: TodosType = [];
export const TodoList = (props: TodoListProps) => {
  const { todos = e, onClickDoneUndone, onClickDelete } = props;
  return (
    <ul className="collection todo-list">
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
};
