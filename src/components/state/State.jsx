import { useState, useEffect } from "react";

export const State = () => {
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  });

  const handleCount = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };

  const handleStatus = () => {
    setState({ ...state, isCounting: !state.isCounting });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <button onClick={handleCount}>Count</button>
      <button onClick={handleStatus}>Status</button>
    </>
  );
};
