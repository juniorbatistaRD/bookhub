import React from "react";
import { useNavigate } from "react-router-dom";
import coverIcon from "../../assets/icons/cover.svg";
import styles from "./index.module.css";
import Title from "../Title";
import Button from "../Button";
function BookItem({ bookInfo }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        className={styles.cover}
        src={
          bookInfo.volumeInfo.imageLinks
            ? bookInfo.volumeInfo.imageLinks.thumbnail.replace("http", "https")
            : coverIcon
        }
        alt="COver"
      />
      <div className={styles.info}>
        <Title text={bookInfo.volumeInfo.title} fontSize="18px" padding="0px" />
        {bookInfo.volumeInfo.authors && (
          <Title
            text={bookInfo.volumeInfo.authors[0]}
            fontSize="14px"
            typeStyle="secondary"
          />
        )}

        <span>{bookInfo.date}</span>
        <Button
          onClick={() => navigate(`/app/addbook/${bookInfo.id}`)}
          padding="7px"
          margin="7px 0px 0px 0px"
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}

export default BookItem;
