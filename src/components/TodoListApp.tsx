import { useState, useReducer } from "react";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import type { ActionType, TodosType } from "./typedefs";

import "./TodoListApp.css";

const initialTodos: TodosType = [
  { id: Math.random(), content: "Todo 0", isDone: false },
  { id: Math.random(), content: "Todo 1", isDone: true },
];

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

function filterTodos(todos: TodosType, filter: string) {
  const results = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "undone") return !todo.isDone;
    return true;
  });
  return results;
}

export const TodoListApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [filter, setFilter] = useState("all");
  const [newContent, setNewContent] = useState("");

  const filteredTodo = filterTodos(todos, filter);

  const onClickDoneUndone = (id: number) => {
    dispatch({ type: "set_done_undone", id });
  };

  const onClickDelete = (id: number) => {
    dispatch({ type: "delete_todo", id });
  };

  const onClickFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="todo-list-app">
      <h1>Todo List</h1>
      <TodoFilter filter={filter} onClickFilter={onClickFilter} />
      <TodoList
        todos={filteredTodo}
        onClickDoneUndone={onClickDoneUndone}
        onClickDelete={onClickDelete}
      />
      <form
        className="todo-add"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "add_todo",
            id: Math.random(),
            content: newContent,
          });
          setNewContent("");
        }}
      >
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Type to add new todo"
        />
      </form>
    </div>
  );
};
