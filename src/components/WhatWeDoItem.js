import React from "react";
import styles from "../style/what-we-do.module.scss";
import Zoom from "react-reveal/Zoom";

function WhatWeDoItem(props) {
  return (
    <Zoom top delay={props.delay}>
      <div className={styles.item}>
        {props.children}
        <span className={styles.title}>{props.title}</span>
        <p className={styles.desc}>{props.desc}</p>
      </div>
    </Zoom>
  );
}

export default WhatWeDoItem;
