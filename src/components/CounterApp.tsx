import { useState, useEffect, useMemo } from "react";

export const CounterApp = ({ query }: any) => {
  const [count, setCount] = useState(0);

  const memoQuery = useMemo(() => {
    return query;
  }, [window.location.search]);

  useEffect(() => {
    console.log("effect run");
  }, [memoQuery]);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="btn btn-large" onClick={onClick}>
      Count: {count}
    </button>
  );
};
