import React, { useContext, useState, useEffect } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";
import getBooks from "../../utils/fetchBookByUser";
import BookByUser from "../../components/BookByUser";
import loadingIcon from "../../assets/images/loading.gif";
import { ReactComponent as NoBooksIcon } from "../../assets/icons/nobooks.svg";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const books = await getBooks(currentUser.uid);
      setBooks(books);
    };

    fetchBooks().then(() => setIsLoading(false));
  }, [currentUser.uid]);

  console.log(books, "books");

  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <Title text="My Books" className={styles.title}></Title>
        <Button
          className={styles["add-book-button"]}
          onClick={() => navigate("/app/add")}
        >
          Add Book
        </Button>
      </header>
      {!isLoading ? (
        <div className={styles["book-list"]}>
          {books.length > 0
            ? books.map((book, index) => {
                console.log(book.id);
                return (
                  <BookByUser
                    key={index}
                    book_id={book.book_id}
                    bookInfo={book}
                  />
                );
              })
            : !isLoading && (
                <div className={styles["no-books-found"]}>
                  <Title
                    fontSize="16px"
                    text="No books have been added yet! Get on it!"
                  />
                  <NoBooksIcon />
                </div>
              )}
        </div>
      ) : (
        <img
          className={styles["loading"]}
          src={loadingIcon}
          width="150px"
          alt="loading"
        />
      )}
    </div>
  );
}

export default HomePage;
