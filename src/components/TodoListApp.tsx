import { useEffect, useState } from "react";
import { TodoFilter } from "./TodoFilter";
import type { TodosType } from "./typedefs";
import { TodoList } from "./TodoList";
import moment from "moment";
import * as TodoServices from "../service/TodoService";
import "./TodoApp.css";

type TodoListAppPropsType = {
  dateFormatString: string;
};

export const TodoListApp = ({ dateFormatString }: TodoListAppPropsType) => {
  const [todos, setTodos] = useState<TodosType>([]);
  const [filter, setFilter] = useState("all");

  const transformTodos = (todos: TodosType) => {
    return todos.map((todo) => {
      return {
        ...todo,
        doneAt: moment(todo.doneAt).format(dateFormatString),
      };
    });
  };

  useEffect(() => {
    let ignore = false;
    async function fetchTodos() {
      const todos = await TodoServices.fetchTodos(filter);
      const transformedTodos = transformTodos(todos);
      if (!ignore) setTodos(transformedTodos);
    }
    fetchTodos();

    return () => {
      ignore = true;
    };
  }, [filter]);

  const onClickAdd = () => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: Math.random(),
    //     content: "New Todo " + i++,
    //     isDone: false,
    //   },
    // ]);
  };

  const onClickDoneUndone = (id: number) => {
    // setTodos(
    //   todos.map((todo) => ({
    //     ...todo,
    //     isDone: todo.id === id ? !todo.isDone : todo.isDone,
    //   }))
    // );
  };

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClickFilter = (filter: string) => {
    setFilter(filter);
  };

  const filteredTodo = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "undone") return !todo.isDone;
    return true;
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
