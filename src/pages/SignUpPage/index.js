import React from "react";
import styles from "./index.module.css";
import searchBooks from "../../utils/searchBooks";

function LoginPage() {
  console.log(searchBooks("love does", 1));
  return <div className={styles["container"]}>hi</div>;
}

export default LoginPage;
