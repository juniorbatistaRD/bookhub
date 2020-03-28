import React, { useContext } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { BookContext } from "../../contexts/BookContext";
import BookByUser from "../../components/BookByUser";
import loadingIcon from "../../assets/images/loading.gif";
import { ReactComponent as NoBooksIcon } from "../../assets/icons/nobooks.svg";
import { motion } from "framer-motion";

function HomePage() {
  const navigate = useNavigate();
  const { books, isLoading } = useContext(BookContext);

  return (
    <motion.div
      className={styles["container"]}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
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
    </motion.div>
  );
}

export default HomePage;
