import { useState } from "react";
import { Clicker } from "./components/clicker/Clicker";
import { WithRef } from "./components/ref/WithRef";
import { Timer } from "./components/timer/Timer";
import { State } from "./components/state/State";
import { Effect } from "./components/effect/Effect";
import { Context } from "./components/context/Context";
import { Books } from "./components/books/Books";

export const App = () => {
  const [isClicker, setClicker] = useState(false);

  return (
    <>
      <h2>React App</h2>
      <button onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
      <WithRef />
      <Timer />
      <State />
      <Effect />
      <Context>
        <Books />
      </Context>
    </>
  );
};
