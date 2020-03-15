import React from "react";
import styles from "./index.module.css";
import coverIcon from "../../assets/icons/cover.svg";
import Title from "../Title";
import swal from "@sweetalert/with-react";
import TrashIcon from "../../assets/icons/trash.svg";
import { db } from "../../initFireBase";

function BookByUser({ bookInfo, book_id }) {
  const showBookDeatails = () => {
    swal({
      content: (
        <div>
          <img
            className={styles.cover}
            src={bookInfo.image ? bookInfo.image : coverIcon}
            alt="COver"
          />
          <Title text={bookInfo.title} fontSize="16px"></Title>
          <div className={styles["delete-button"]} onClick={() => deleteBook()}>
            <img src={TrashIcon} alt="Trash" />
          </div>
          {bookInfo.author && (
            <Title
              text={bookInfo.author}
              fontSize="16px"
              typeStyle="secondary"
            />
          )}
          {bookInfo.date && (
            <Title
              typeStyle="secondary"
              fontSize="12px"
              text={`Read by ${bookInfo.date}`}
            ></Title>
          )}
          {bookInfo.description && (
            <Title
              typeStyle="secondary"
              fontSize="14px"
              text={bookInfo.description}
            ></Title>
          )}
        </div>
      )
    });
  };

  const deleteBook = () => {
    db.collection("books")
      .doc(bookInfo.id)
      .delete()
      .then(function() {
        swal("Book deleted").then(() => document.location.reload());
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className={styles.container} onClick={showBookDeatails}>
      {bookInfo && (
        <>
          <img
            className={styles.cover}
            src={bookInfo.image ? bookInfo.image : coverIcon}
            alt="COver"
          />
          <div className={styles.info}>
            <Title text={bookInfo.title} fontSize="18px" padding="0px" />
            {bookInfo.author && (
              <Title
                text={bookInfo.author}
                fontSize="16px"
                typeStyle="secondary"
              />
            )}
            <Title text={bookInfo.date} fontSize="12px" typeStyle="secondary" />
            <Title
              text={bookInfo.description}
              fontSize="12px"
              typeStyle="secondary"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default BookByUser;
