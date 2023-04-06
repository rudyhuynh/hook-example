import { useState } from "react";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

import "./TodoListApp.css";
import { TodosType } from "./typedefs";

function filterTodos(todos: TodosType, filter: string) {
  console.time("filterTodos");
  const results = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "done") return todo.isDone;
    if (filter === "undone") return !todo.isDone;
  });
  console.timeEnd("filterTodos");
  return results;
}

export const TodoListApp = () => {
  const [todos, dispatch] = useTodos();
  const [filter, setFilter] = useState("all");
  const [newContent, setNewContent] = useState("");

  const filteredTodo = filterTodos(todos, filter);

  return (
    <div className="todo-list-app">
      <h1>Todo List</h1>
      <TodoFilter filter={filter} onClickFilter={setFilter} />
      <TodoList
        todos={filteredTodo}
        onClickDoneUndone={(id: number) =>
          dispatch({ type: "set_done_undone", id })
        }
        onClickDelete={(id: number) => {
          dispatch({ type: "delete_todo", id });
        }}
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
