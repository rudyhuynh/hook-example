import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    console.log("effect run");
    window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <h5>{time.toLocaleTimeString()}</h5>;
};
