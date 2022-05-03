import React, { useContext } from "react";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./TopBar.module.css";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { ThemeContext } from "../../context/ThemeContext";

export default function TopBar() {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={styles.TopBar}
      style={{
        // border: !theme.state.darkMode && "1px solid rgb(40, 38, 38)",
        backgroundColor: !theme.state.darkMode ? "#fff" : "rgb(44, 43, 43)",
      }}
    >
      <div className={styles.TopBarInner}>
        <div
          className={styles.Navigation}
          style={{
            color: !theme.state.darkMode ? "black" : "white",
          }}
        >
          <div className={styles.NavigationItem}>
            <div className={styles.NavIcon}>
              <IoChevronForwardCircle />
            </div>
          </div>
          <div className={styles.NavigationItem}>
            <div className={styles.NavIcon}>
              <IoChevronBackCircle />
            </div>
          </div>
        </div>
        {location.pathname.includes("search") && (
          <div className={styles.SearchBar}>
            <SearchBar />
          </div>
        )}
        <div className={styles.Theme}>
          <ThemeSwitch />
        </div>
        <div className={styles.DropDown}>
          <div className={styles.DropDownInner}>
            <div className={styles.DropIcon}>
              <FaRegUserCircle />
            </div>
            <div className={styles.DropText}>
              <p>Femi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
