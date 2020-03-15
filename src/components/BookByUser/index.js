import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import coverIcon from "../../assets/icons/cover.svg";
import Title from "../Title";
import swal from "@sweetalert/with-react";
import TrashIcon from "../../assets/icons/trash.svg";
import { db } from "../../initFireBase";
import Button from "../Button";

function BookByUser({ bookInfo }) {
  const navigate = useNavigate();
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
          <div className={styles["buttons"]}>
            <Button
              typeStyle="secondary"
              onClick={() => {
                swal.close();
                navigate(`/app/edit/${bookInfo.id}`);
              }}
            >
              Edit
            </Button>

            <Button typeStyle="secondary">
              <span>Delete</span>
              <img src={TrashIcon} alt="Trash" onClick={() => deleteBook()} />
            </Button>
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
