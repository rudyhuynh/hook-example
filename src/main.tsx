import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoListApp } from "./components/TodoListApp";
import { CounterApp } from "./components/CounterApp";
import { Clock } from "./components/Clock";
import { StopWatch } from "./components/StopWatch";

import "./index.css";
import "materialize-css/dist/css/materialize.css";

const routes = [
  {
    path: "/counter-app",
    title: CounterApp.name,
    element: <CounterApp />,
  },
  {
    path: "/todo-app",
    title: TodoListApp.name,
    element: <TodoListApp />,
  },
  {
    path: "/clock",
    title: Clock.name,
    element: <Clock />,
  },
  {
    path: "/stop-watch",
    title: StopWatch.name,
    element: <StopWatch />,
  },
];

const mainPageRoute = {
  path: "/",
  element: (
    <div>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <a href={route.path}>
              <h3>{route.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  ),
};

const router = createBrowserRouter([mainPageRoute, ...routes]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
