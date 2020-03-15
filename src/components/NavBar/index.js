import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as BookIcon } from "../../assets/icons/agenda.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/user.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./index.module.css";

function NavBar() {
  let location = useLocation();

  return (
    <div className={styles["container"]}>
      <NavLink
        to="/app/home"
        className={styles["option"]}
        activeClassName={styles["active"]}
      >
        <BookIcon
          className={
            location.pathname.includes("home")
              ? styles["active-icon"]
              : styles["icon"]
          }
        />
      </NavLink>
      <NavLink
        to="/app/profile"
        className={styles["option"]}
        activeClassName={styles["active"]}
      >
        <ProfileIcon
          className={
            location.pathname.includes("profile")
              ? styles["active-icon"]
              : styles["icon"]
          }
        />
      </NavLink>
      <NavLink
        to="/app/search"
        className={styles["option"]}
        activeClassName={styles["active"]}
      >
        <SearchIcon
          className={
            location.pathname.includes("search")
              ? styles["active-icon"]
              : styles["icon"]
          }
        />
      </NavLink>
    </div>
  );
}

export default NavBar;
