import { useReducer } from "react";
import type { ActionType, TodosType } from "./typedefs";

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

export function useTodos() {
  return useReducer(todosReducer, initialTodos);
}
