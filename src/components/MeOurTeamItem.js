import React from "react";
import styles from "../style/me-our-team-item.module.scss";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function MeOurTeamItem(props) {
  return (
    <div className={props.col ? `${styles.item} ${styles.col}` :` ${styles.item}`} >
      <img src={props.imgsrc} alt="avatar" />
      <div className={styles.content}>
        <h5 className={styles.title}>{props.name}</h5>
        <span className={styles.alt}>{props.alt}</span>
        <p className={styles.desc}>
          {props.desc ? props.desc : "But I must explain to you how all this mistaken idea of denouncingpleasure and praising pain was born and I will…"}
        </p>
        <div className={styles.socialMedia}>
          <IconContext.Provider value={{ color: "#D4B2A6", size: 19 }}>
            <FaFacebookSquare />
            <FaTwitter />
            <FaLinkedin />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default MeOurTeamItem;
