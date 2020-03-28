import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import getBooks from "../utils/fetchBookByUser";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const books = await getBooks(currentUser.uid);
      setBooks(books);
    };

    fetchBooks().then(() => setIsLoading(false));
  }, [currentUser.uid]);

  return (
    <BookContext.Provider value={{ books, isLoading }}>
      {children}
    </BookContext.Provider>
  );
};
