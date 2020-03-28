import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";
import { AuthContext } from "./AuthContext";
import getBooks from "../utils/fetchBookByUser";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = useCallback(async () => {
    setIsLoading(true);
    const booksData = await getBooks(currentUser.uid);
    setBooks(booksData);
    setIsLoading(false);
  }, [currentUser.uid]);

  useEffect(() => {
    fetchBooks();
  }, [currentUser.uid, fetchBooks]);

  return (
    <BookContext.Provider value={{ books, isLoading, fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
