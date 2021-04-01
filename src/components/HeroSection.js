import React from "react";
import styles from "../style/hero-section.module.scss"
function HeroSection(props) {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.title}>
        {props.title}
        {props.coloredtitle ? <span>{" " + props.coloredtitle}</span> : ""}
      </h1>
      <p
        className={
          props.width700
            ? `${styles.desc} ${styles.width700}`
            : props.width800
            ? `${styles.desc} ${styles.width800}`
            : `${styles.desc} ${styles.widthFull}`
        }
      >
        {props.text}
      </p>
    </div>
  );
}
export default HeroSection;
