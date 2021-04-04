import React from "react";
import styles from "../style/title.module.scss";
function Title(props) {
  return (
    <div
      className={
        props.row && props.lineNone
          ? `${styles.title} ${styles.row} ${styles.lineNone}`
          : props.row
          ? `${styles.title} ${styles.row}`
          : styles.title
      }
    >
      <h1>{props.title}</h1>
      <div className={styles.line}></div>
      <p>{props.shortDesc}{props.children}</p>
    </div>
  );
}

export default Title;
