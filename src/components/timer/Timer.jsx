import { useEffect, useReducer } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

const countReducer = (state, { type }) => {
  if (type === "START") {
    return {
      ...state,
      isCounting: true,
    };
  }

  if (type === "STOP") {
    return {
      ...state,
      isCounting: false,
    };
  }

  if (type === "RESET") {
    return {
      count: 0,
      isCounting: false,
    };
  }

  if (type === "TICK") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

export const Timer = () => {
  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: setDefaultValue(),
    isCounting: false,
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    let timerId = null;
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      timerId && clearInterval(timerId);
      timerId = null;
    };
  }, [isCounting]);

  return (
    <div style={TimerStyle} className="Timer">
      <div style={ContainerStyle}>
        <h1>React Timer</h1>
        <h3>{count}</h3>
        {!isCounting ? (
          <button onClick={() => dispatch({ type: "START" })}>Start</button>
        ) : (
          <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
        )}
        <button
          disabled={isCounting ? "disabled" : ""}
          onClick={() => dispatch({ type: "RESET" })}
        >
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
