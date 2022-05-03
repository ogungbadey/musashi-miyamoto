import React, { useContext } from "react";
import styles from "./LeftBar.module.css";
import { MdHomeFilled, MdOutlineSearch, MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export default function LeftBar() {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.LeftBar}>
      <div className={styles.Actions}>
        <div className={styles.ActionsTop}>
          <div className={styles.ActionLink}>
            <Link
              to="/home"
              style={{
                color: !theme.state.darkMode ? "black" : "white",
              }}
            >
              <span className={styles.Icon}>
                <MdHomeFilled />
              </span>
              <span className={styles.Text}>Home</span>
            </Link>
          </div>
          <div className={styles.ActionLink}>
            <Link
              to="/search"
              style={{
                color: !theme.state.darkMode ? "black" : "white",
              }}
            >
              <span className={styles.Icon}>
                <MdOutlineSearch />
              </span>
              <span className={styles.Text}>Search</span>
            </Link>
          </div>

          <div className={styles.ActionLink}>
            <Link
              to="/neighbours"
              style={{
                color: !theme.state.darkMode ? "black" : "white",
              }}
            >
              <span className={styles.Icon}>
                <MdPeopleAlt />
              </span>
              <span className={styles.Text}>Neighbours</span>
            </Link>
          </div>
        </div>
        <div className={styles.ActionsBottom}>Bottom</div>
      </div>
    </div>
  );
}
