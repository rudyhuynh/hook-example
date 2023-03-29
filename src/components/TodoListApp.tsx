import { useState } from "react";
import { TodoFilter } from "./TodoFilter";
import type { TodosType } from "./typedefs";
import { TodoList } from "./TodoList";

import "./TodoApp.css";

let i = 0;

export const TodoListApp = () => {
  const [todos, setTodos] = useState<TodosType>([]);
  const [filter, setFilter] = useState("all");

  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        content: "New Todo " + i++,
        isDone: false,
      },
    ]);
  };

  const onClickDoneUndone = (id: number) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        isDone: todo.id === id ? !todo.isDone : todo.isDone,
      }))
    );
  };

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
    <div>
      <h1>Todo List</h1>
      <TodoFilter filter={filter} onClickFilter={onClickFilter} />
      <TodoList
        todos={filteredTodo}
        onClickDoneUndone={onClickDoneUndone}
        onClickDelete={onClickDelete}
      />
      <div>
        <button className="btn full-width" onClick={onClickAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
