import { useEffect, useState, useRef } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

export const Timer = () => {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setCounting] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerId.current = setInterval(() => {
        setCount((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      timerId.current && clearInterval(timerId.current);
      timerId.current = null;
    };
  }, [isCounting]);

  const handleStop = () => {
    setCounting(false);
    clearInterval(timerId.current);
  };

  const handleStart = () => {
    setCounting(true);
  };

  const handleReset = () => {
    setCount(0);
    setCounting(false);
  };

  return (
    <div style={TimerStyle} className="Timer">
      <div style={ContainerStyle}>
        <h1>React Timer</h1>
        <h3>{count}</h3>
        {!isCounting ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button disabled={isCounting ? "disabled" : ""} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const TimerStyle = {
  display: "flex",
  borderBottom: "1px solid black",
};

const ContainerStyle = {
  padding: "10px",
  textAlign: "center",
  margin: "0 auto",
};
