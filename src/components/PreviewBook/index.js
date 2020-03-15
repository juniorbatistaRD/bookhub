import React from "react";
import coverIcon from "../../assets/icons/cover.svg";
import styles from "./index.module.css";
import Title from "../Title";

function PreviewBook({ bookInfo }) {
  console.log(bookInfo);

  return (
    <div className={styles.container}>
      <img
        className={styles.cover}
        src={
          bookInfo.volumeInfo.imageLinks
            ? bookInfo.volumeInfo.imageLinks.thumbnail
            : coverIcon
        }
        alt="COver"
      />{" "}
      <div className={styles.info}>
        <Title text={bookInfo.volumeInfo.title} fontSize="18px" padding="0px" />
        {bookInfo.volumeInfo.authors && (
          <Title
            text={bookInfo.volumeInfo.authors[0]}
            fontSize="14px"
            typeStyle="secondary"
          />
        )}
        <span>{bookInfo.volumeInfo.publishedDate}</span>
      </div>
    </div>
  );
}

export default PreviewBook;
