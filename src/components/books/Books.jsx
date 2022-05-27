import { Book } from "./Book";
import { CustomContext } from "../context/Context";

import { useContext } from "react";

export function Books() {
  const { books = [] } = useContext(CustomContext);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} data={book} />
      ))}
    </div>
  );
}
