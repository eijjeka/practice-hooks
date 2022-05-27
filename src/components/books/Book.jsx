import { useContext } from "react";

import { CustomContext } from "../context/Context";

export const Book = ({ data }) => {
  console.log(data);
  const { removeBook } = useContext(CustomContext);
  return (
    <h2
      onClick={() => {
        removeBook(data.id);
      }}
    >
      {data.title}
    </h2>
  );
};
