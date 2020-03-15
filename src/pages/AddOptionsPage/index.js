import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ScanIcon } from "../../assets/icons/scan.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/document.svg";

function AddOptionsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles["container"]}>
      <Title text="Add books to your list" />
      <div className={styles["button-container"]}>
        <Button onClick={() => navigate("/app/search")}>
          Search Book <SearchIcon />
        </Button>
        <Button>
          Scan Barcode on Book <ScanIcon />
        </Button>
        <Button onClick={() => navigate("/app/addbook/")}>
          Add Custom Book <EditIcon />
        </Button>
      </div>
    </div>
  );
}

export default AddOptionsPage;
