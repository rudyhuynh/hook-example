import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="btn btn-large" onClick={onClick}>
      Count: {count}
    </button>
  );
};
