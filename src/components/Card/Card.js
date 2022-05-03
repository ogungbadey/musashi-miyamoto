import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Card.module.css";

export default function Card({ img, name }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.Card} style={{
        backgroundColor: theme.state.darkMode ? "rgb(44, 43, 43)" : "rgb(247,249,249)",
        color: theme.state.darkMode ? "white" : "black",
    }}>
      <div className={styles.Image}>Image goes here</div>
      <div className={styles.Text}>
        <p>{name}</p>
      </div>
    </div>
  );
}
