import React, { useContext } from "react";
import styles from "./SearchBar.module.css";
import {FaSearch} from 'react-icons/fa'
import { ThemeContext } from "../../context/ThemeContext";
export default function SearchBar() {
  const theme = useContext(ThemeContext)

  return (
    <form className={styles.Form} style={{
      // border: !theme.state.darkMode && "4px solid rgb(247, 249, 249)"
    }}>
      <span><FaSearch/></span>
      <input placeholder="Visitors, neighbours etc" ></input>
    </form>
  );
}
