import React, { useContext } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../initFireBase";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(process.env);

  const getBooks = () => {
    db.collection("books")
      .where("user", "==", "mhosfDbMWmcNnKdmSBMrFoshCUI3")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  getBooks();

  return (
    <div>
      <header className={styles["header"]}>
        <Title text="My Books" className={styles.title}></Title>
        <Button
          className={styles["add-book-button"]}
          onClick={() => navigate("/app/add")}
        >
          Add Book
        </Button>
      </header>
    </div>
  );
}

export default HomePage;
