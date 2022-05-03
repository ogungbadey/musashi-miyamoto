import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./CreatePost.module.css";
import {BsImages} from 'react-icons/bs'

export default function CreatePost() {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.CreatePost}>
      <div className={styles.PostField}>
        <div className={styles.Avatar}>
          <span><BsImages/></span>
        </div>
        <div className={styles.Form}>
          <form>
            <input placeholder="Say something" type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
