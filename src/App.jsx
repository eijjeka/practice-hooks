import { useState } from "react";
import { Clicker } from "./components/clicker/Clicker";
import { WithRef } from "./components/ref/WithRef";
import { Timer } from "./components/timer/Timer";

export const App = () => {
  const [isClicker, setClicker] = useState(false);

  return (
    <>
      <h2>React App</h2>
      <button onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
      <WithRef />
      <Timer />
    </>
  );
};
