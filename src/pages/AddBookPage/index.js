import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import fetchBookById from "../../utils/fetchBookById";
import InputField from "../../components/InputField";
import PreviewBook from "../../components/PreviewBook";
import Title from "../../components/Title";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";
import saveBook from "../../utils/saveBook";
import { motion } from "framer-motion";

function AddBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { fetchBooks } = useContext(BookContext);
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBookById(id);
      setBook(data);
    };

    if (id) {
      getData();
    }
  }, [id]);

  const save = e => {
    e.preventDefault();

    saveBook({
      book,
      title,
      author,
      date,
      description,
      user: currentUser.uid
    }).then(() => {
      navigate("/app/home");
      fetchBooks();
    });
  };

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
      <Title text="Add Book" />
      {book && (
        <>
          <Title text="Book Preview" typeStyle="secondary" fontSize="16px" />
          <PreviewBook bookInfo={book} />
        </>
      )}
      <form className={styles["form"]} onSubmit={e => save(e)}>
        {!id && (
          <>
            <Title typeStyle="secondary" fontSize="16px" text="Title" />
            <InputField
              type="text"
              onChange={e => setTitle(e.target.value)}
              required
            />

            <Title typeStyle="secondary" fontSize="16px" text="Author" />
            <InputField type="text" onChange={e => setAuthor(e.target.value)} />
          </>
        )}

        <Title
          typeStyle="secondary"
          fontSize="16px"
          text="Highlights / Thoughts / Description"
        />
        <TextArea rows="20" onChange={e => setDescription(e.target.value)} />

        <Title
          typeStyle="secondary"
          fontSize="16px"
          text="Date you finished reading it"
        />
        <InputField
          name="year"
          type="date"
          onChange={e => setDate(e.target.value)}
        />

        <Button type="submit">Save Book</Button>
      </form>
    </motion.div>
  );
}

export default AddBookPage;
