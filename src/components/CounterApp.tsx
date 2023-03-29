import { useReducer } from "react";

const initialState = 0;
function reducer(state: number, action: { type: string; [any: string]: any }) {
  switch (action.type) {
    case "set_count":
      return state + 1;
  }
  return state;
}

export const CounterApp = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const onClick = () => {
    dispatch({ type: "set_count" });
  };

  return (
    <button className="btn btn-large" onClick={onClick}>
      Count: {count}
    </button>
  );
};
