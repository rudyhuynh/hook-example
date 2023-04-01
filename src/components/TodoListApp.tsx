import { useState, useReducer } from "react";
import { TodoFilter } from "./TodoFilter";
import type { ActionType, TodosType } from "./typedefs";
import { TodoList } from "./TodoList";

import "./TodoListApp.css";

let i = 0;

const initialTodos: TodosType = [];
function todosReducer(todos: TodosType, action: ActionType) {
  switch (action.type) {
    case "add_todo":
      return [
        ...todos,
        {
          id: action.id,
          content: action.content,
          isDone: false,
        },
      ];
    case "set_done_undone":
      return todos.map((todo) => ({
        ...todo,
        isDone: todo.id === action.id ? !todo.isDone : todo.isDone,
      }));
    case "delete_todo":
      return todos.filter((todo) => todo.id !== action.id);
  }
  return todos;
}

export const TodoListApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const [filter, setFilter] = useState("all");

  const onClickAdd = () => {
    const id = Math.random();
    const content = "New Todo " + i++;
    dispatch({ type: "add_todo", id, content });
  };

  const onClickDoneUndone = (id: number) => {
    dispatch({ type: "set_done_undone", id });
  };

  const onClickDelete = (id: number) => {
    dispatch({ type: "delete_todo", id });
  };

  const onClickFilter = (filter: string) => {
    setFilter(filter);
  };

  const filteredTodo = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "done") return todo.isDone;
    if (filter === "undone") return !todo.isDone;
  });

  return (
    <div className="todo-list-app">
      <h1>Todo List</h1>
      <div className="toolbox">
        <TodoFilter filter={filter} onClickFilter={onClickFilter} />
        <button className="btn dark-theme-btn">
          <i className="material-icons">brightness_7</i>
        </button>
      </div>

      <TodoList
        todos={filteredTodo}
        onClickDoneUndone={onClickDoneUndone}
        onClickDelete={onClickDelete}
      />
      <div className="todo-add">
        <button className="btn full-width" onClick={onClickAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
