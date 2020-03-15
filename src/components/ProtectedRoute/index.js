import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import loadingIcon from "../../assets/images/loading.gif";
import styles from "./index.module.css";
import Title from "../Title";

function ProtectedRoute({ children, element, ...props }) {
  const { currentUser, isLoading } = useContext(AuthContext);

  console.log(isLoading);

  if (isLoading)
    return (
      <div className={styles["loader"]}>
        <img src={loadingIcon} alt="loading" />
        <Title typeStyle="secondary" text="Loading App" fontSize="12px" />
      </div>
    );

  return (
    <>
      <Route {...props} element={currentUser ? element : <Navigate to="/" />}>
        {" "}
        }>
        {children}
      </Route>
    </>
  );
}

export default ProtectedRoute;
