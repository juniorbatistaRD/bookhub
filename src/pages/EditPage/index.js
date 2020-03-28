import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { db } from "../../initFireBase";
import swal from "@sweetalert/with-react";

import { motion } from "framer-motion";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const save = e => {
    e.preventDefault();
    const booksRef = db.collection("books").doc(id);

    booksRef
      .set(
        {
          title,
          description,
          author,
          date
        },
        {
          merge: true
        }
      )
      .then(() => {
        swal({
          text: "Book Updated!",
          icon: "success"
        }).then(() => navigate("/app/home"));
      });
  };

  useEffect(() => {
    const booksRef = db.collection("books").doc(id);

    const getBook = async () => {
      const bookData = await booksRef.get();
      setTitle(bookData.data().title);
      setAuthor(bookData.data().author);
      setDescription(bookData.data().description);
      setDate(bookData.data().date);
    };
    getBook();
  }, [id]);

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
      <Title text="Edit Book" />

      <form className={styles["form"]} onSubmit={e => save(e)}>
        <Title typeStyle="secondary" fontSize="16px" text="Title" />
        <InputField
          type="text"
          onChange={e => setTitle(e.target.value)}
          defaultValue={title}
          required
        />
        <Title typeStyle="secondary" fontSize="16px" text="Author" />
        <InputField
          type="text"
          defaultValue={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <Title
          typeStyle="secondary"
          fontSize="16px"
          text="Highlights / Thoughts / Description"
        />
        <TextArea
          rows="20"
          defaultValue={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Title
          typeStyle="secondary"
          fontSize="16px"
          text="Date you finished reading it"
        />
        <InputField
          name="year"
          type="date"
          defaultValue={date}
          onChange={e => setDate(e.target.value)}
        />
        <Button type="submit">Save Book</Button>
      </form>
    </motion.div>
  );
}

export default EditPage;
