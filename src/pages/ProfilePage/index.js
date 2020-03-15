import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import styles from "./index.module.css";
import app from "../../initFireBase";
import { AuthContext } from "../../contexts/AuthContext";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { motion } from "framer-motion";

function ProfilePage() {
  const [quote, setQuote] = useState();
  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    app.auth().signOut();
  };

  useEffect(() => {
    const getQuote = async () => {
      const quote = await fetch(
        "https://quotes.rest/qod?language=en"
      ).then(data => data.json());

      setQuote(quote.contents.quotes[0]);
    };

    getQuote();
  }, []);

  return (
    <motion.div
      className={styles["container"]}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <Title text="Profile"></Title>
      <div className={styles["content"]}>
        <Avatar image={currentUser.photoURL} width="100px" />
        <Title
          text={currentUser.displayName}
          fontSize="24px"
          typeStyle="secondary"
        />
        <Button padding="7px" onClick={logOut}>
          LogOut
        </Button>
        <div className={styles["quote_container"]}>
          <Title fontSize="16px" text="Random Daily Motivational Quote" />
          {quote && <span>{quote.quote}</span>}
        </div>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
