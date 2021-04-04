import React, { useState } from "react";
import styles from "../style/accordion-item.module.scss";
import { BiChevronRight } from "react-icons/bi";
function AccordionItem(props) {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <button className={collapse ? styles.collapsed: ""} onClick={() => setCollapse(!collapse)}>
          {props.title} <BiChevronRight size={24} />
        </button>
      </div>
      <div
        className={collapse ? `${styles.body} ${styles.collapse}` : styles.body}
      >
        <p>
          {props.desc
            ? props.desc
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident consectetur iure? Aspernatur, minima dolores? Facilis suscipit, assumenda maiores maxime debitis necessitatibus illum dolor nihil, nostrum vel quos corrupti deleniti?"}
        </p>
      </div>
    </div>
  );
}

export default AccordionItem;
