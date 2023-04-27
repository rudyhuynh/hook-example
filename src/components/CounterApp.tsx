import { useEffect, useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`[${new Date().toLocaleTimeString()}] Count: ${count}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="btn btn-large" onClick={onClick}>
      Count: {count}
    </button>
  );
};
