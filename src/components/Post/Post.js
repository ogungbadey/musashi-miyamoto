import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Post.module.css";

export default function Post({ data }) {
  const theme = useContext(ThemeContext);
  return (
    <div 
    style={{
      // border: !theme.state.darkMode && "1px solid rgb(40, 38, 38)",
      // backgroundColor: !theme.state.darkMode ? "#fff" : "rgb(15, 15, 12)",
      color: theme.state.darkMode ? "white": "black"
    }}
    className={styles.Post}
  >
      {/* <div className={styles.Fill}></div> */}
      <div className={styles.PostContent}>
        <div>
          <span>Posted by {data.name}</span>
          <span>Posted at {data.time}</span>
        </div>
        <div>
          <p>This is a post with a post id of {data.id}</p>
        </div>
      </div>
    </div>
  );
}
