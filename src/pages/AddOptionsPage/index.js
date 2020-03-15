import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ScanIcon } from "../../assets/icons/scan.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/document.svg";
import { motion } from "framer-motion";

function AddOptionsPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles["container"]}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <Title text="Add books to your list" />
      <div className={styles["button-container"]}>
        <Button onClick={() => navigate("/app/search")}>
          Search Book <SearchIcon className={styles["icon"]} />
        </Button>

        <Button onClick={() => navigate("/app/addbook/")}>
          Add Custom Book <EditIcon className={styles["icon"]} />
        </Button>
      </div>
    </motion.div>
  );
}

export default AddOptionsPage;
