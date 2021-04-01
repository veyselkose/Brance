import React from 'react'
import styles from "../style/what-we-do.module.scss"
function WhatWeDoItem(props) {
    return (
        <div className={styles.item}>
            {props.children}
            <span className={styles.title}>
                {props.title}
            </span>
            <p className={styles.desc}>
                {props.desc}
            </p>
        </div>
    )
}

export default WhatWeDoItem
