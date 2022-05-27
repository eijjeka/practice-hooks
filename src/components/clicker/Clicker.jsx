import { useState, useEffect } from "react";
import { Container, Wrapper, Button, Count } from "./Clicker.styled";

export const Clicker = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Hello Clicker");

    return () => console.log("Goodbye clicker");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Button onClick={decrement}>-</Button>
        <Count>{count}</Count>
        <Button onClick={increment}>+</Button>
      </Wrapper>
    </Container>
  );
};
