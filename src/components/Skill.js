import React from "react";
import styles from "../style/skill.module.scss";
function Skill(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.text}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.value}>{props.value+"%"}</span>
      </div>
      <div className={styles.line}>
        <div className={styles.linebar} style={{ width: props.value+"%" }}></div>
      </div>
    </div>
  );
}

export default Skill;
