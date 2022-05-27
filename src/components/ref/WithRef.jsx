import { useRef, useEffect, useState } from "react";

export const WithRef = () => {
  //   const inputEl = useRef(null);
  const numRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(inputEl.current);
    console.log(numRef.current);
  }, []);

  const handleClick = () => {
    numRef.current = 1;
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {/* <input type="text" placeholder="name" ref={inputEl} /> */}
      <button onClick={handleClick}>{numRef.current}</button>
    </div>
  );
};
