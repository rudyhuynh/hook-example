import { useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);

  const onClickStart = () => {
    let startAt = Date.now();
    window.setInterval(() => {
      setTime(time + Date.now() - startAt);
    }, 10);
  };

  const onClickStop = () => {
    // TODO - implement this
  };

  const timeString = new Date(time).toISOString().split("T")[1].slice(0, 12);

  return (
    <div>
      <h5 style={{ textAlign: "left" }}>{timeString}</h5>
      <button className="btn-large" onClick={onClickStart}>
        Start
      </button>{" "}
      <button className="btn-large" onClick={onClickStop}>
        Stop
      </button>
    </div>
  );
};