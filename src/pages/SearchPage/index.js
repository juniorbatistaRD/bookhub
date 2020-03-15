import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import styles from "./index.module.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { ReactComponent as FlyingIcon } from "../../assets/icons/flying.svg";
import searchBooks from "../../utils/searchBooks";
import BookList from "./BookList";
import { motion } from "framer-motion";

function SearchPage() {
  const [query, setQuery] = useState(" ");
  const [text, setText] = useState(" ");
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      const books = await searchBooks(query, page);
      setBooks(books);
      setIsLoading(false);
    };

    if (query !== " ") {
      search();
    }
  }, [page, query]);

  return (
    <motion.div
      className={styles["container"]}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <Title text="Search" />
      <div className={styles["header"]}>
        <InputField
          placeholder="Search by Title or Author"
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <Button onClick={() => setQuery(text)}> Search </Button>
      </div>

      <BookList books={books} isLoading={isLoading} />

      {books.length < 1 && !isLoading && (
        <div className={styles["nofound"]}>
          <FlyingIcon width="300" height="300" />
          <Title fontSize="21px" text="Let's find some cool books" />
        </div>
      )}

      {books.length > 0 && (
        <div className={styles["bottom"]}>
          <Button
            typeStyle="secondary"
            onClick={() => {
              setPage(prev => (prev > 20 ? prev - 10 : 0));
            }}
          >
            Back
          </Button>

          <Button
            typeStyle="secondary"
            onClick={() => {
              setPage(prev => prev + 10);
            }}
          >
            Next
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default SearchPage;
