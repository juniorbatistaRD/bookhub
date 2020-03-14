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
import { db } from "../../initFireBase";
import { AuthContext } from "../../contexts/AuthContext";
import swal from "@sweetalert/with-react";

function AddBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBookById(id);
      setBook(data);
    };

    getData();
  }, [id]);

  const saveBook = e => {
    e.preventDefault();

    //quick validate

    if (!book.id || !currentUser.uid) {
      alert("Data is invalid, Contact Developer");
    }

    db.collection("books")
      .add({
        goodreads_id: book.id,
        date,
        description,
        user: currentUser.uid
      })
      .then(() => {
        swal({
          text: "Yay, your book was added",
          icon: "success"
        });
        navigate("/app/home");
      })
      .catch(err => {
        swal({
          text: "Oh no! We couldn't add you book" + err,
          icon: "error"
        });
      });
  };

  return (
    <div>
      <Title text="Add Book" />
      {book && (
        <>
          <Title text="Book Preview" typeStyle="secondary" fontSize="16px" />
          <PreviewBook bookInfo={book} />
        </>
      )}
      <form className={styles["form"]}>
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
        <Button onClick={e => saveBook(e)}>Save Book</Button>
      </form>
    </div>
  );
}

export default AddBookPage;
