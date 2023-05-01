import { useEffect, useRef, useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count;
  });

  useEffect(
    // created on every render
    // only run the one at intitial render
    () => {
      const intervalId = setInterval(() => {
        console.log(
          `[${new Date().toLocaleTimeString()}] Count: ${countRef.current}`
        );
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    },
    []
  );

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="btn btn-large" onClick={onClick}>
      Count: {count}
    </button>
  );
};
